import { initAsync, initStage } from '../common/core';
import * as _PIXI from 'pixi.js';

/**
 * @ignore
 */
declare const window: any;

namespace PIXI {
	export namespace createjs {
		/**
		 * @property useSynchedTimeline Whether the movie clip plays when placed as a "graphic".
		 */
		export type TCreatejsPlayerOption = {
			useSynchedTimeline?: boolean
		};
		
		/**
		 * @see https://tawaship.github.io/Pixim.js/classes/pixim.application.html
		 */
		export class Player {
			private _app: _PIXI.Application;
			private _composition: any;
			private _rootClass: any;
			private _basepath: string;
			private _stage: any;
			private _handleTick: Function;
			
			constructor(id: string, rootName: string, basepath: string, pixiOptions: Object = {}) {
				const comp = window.AdobeAn.getComposition(id);
				if (!comp) {
					throw new Error('no composition');
				}
				
				const lib = comp.getLibrary();
				const root = lib[rootName];
				if (!root) {
					throw new Error('no root class');
				}
				
				const prop = lib.properties;
				
				this._app = new _PIXI.Application(Object.assign(pixiOptions, {
					width: prop.width,
					height: prop.height,
					backgroundColor: parseInt(prop.color.slice(1), 16)
				}));
				
				document.body.appendChild(this._app.view);
				this._app.stop();
				
				this._composition = comp;
				this._rootClass = root;
				this._basepath = basepath;
				
				window.createjs.Ticker.framerate = prop.fps;
				
				this._handleTick = this._handleStop;
				
				window.createjs.Ticker.addEventListener('tick', this._tick.bind(this));
			}
			
			initAsync(options: TCreatejsPlayerOption = {}) {
				return initAsync(this._basepath, this._composition)
					.then(data => {
						const evt = data.evt;
						const comp = data.comp;
						
						const lib = comp.getLibrary();
						const ss = comp.getSpriteSheet();
						const queue = evt.target;
						const ssMetadata = lib.ssMetadata;
						
						for (let i = 0; i < ssMetadata.length; i++) {
							ss[ssMetadata[i].name] = new window.createjs.SpriteSheet({
								images: [
									queue.getResult(ssMetadata[i].name)
								],
								frames: ssMetadata[i].frames
							});
						}
						
						const exportRoot = new this._rootClass();
						
						this._stage = new lib.Stage();
						initStage(this._stage, options);
						
						Object.defineProperties(window, {
							exportRoot: {
								value: exportRoot
							},
							
							stage: {
								value: this._stage
							}
						});
						
						window.AdobeAn.compositionLoaded(lib.properties.id);
						
						this._app.render();
						
						this._stage.addChild(exportRoot);
						
						this._app.stage.addChild(exportRoot.getPixi());
					});
			}
			
			play() {
				this._handleTick = this._handlePlay;
				
				return this;
			}
			
			stop() {
				this._handleTick = this._handleStop;
				
				return this;
			}
			
			private _tick() {
				this._handleTick();
			}
			
			private _handlePlay() {
				this._stage._tickFunction();
				this.app.render();
			}
			
			private _handleStop() {
				
			}
			
			get app(): _PIXI.Application {
				return this._app;
			}
		}
	}
}

/**
 * @ignore
 */
export import TCreatejsPlayerOption = PIXI.createjs.TCreatejsPlayerOption;

/**
 * @ignore
 */
export import Player = PIXI.createjs.Player;