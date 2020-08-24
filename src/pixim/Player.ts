import { initAsync, initStage } from '../common/core';
import * as _Pixim from '@tawaship/pixim.js';

/**
 * @ignore
 */
declare const window: any;

namespace Pixim {
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
		export class Player extends _Pixim.Application {
			private _composition: any;
			private _rootClass: any;
			private _basepath: string;
			private _stage: any;
			private _handleTick: Function;
			
			constructor(id: string, rootName: string, basepath: string, pixiOptions: Object = {}, piximOptions: _Pixim.TApplicationOption = {}) {
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
				
				super(Object.assign(pixiOptions, {
					width: prop.width,
					height: prop.height,
					backgroundColor: parseInt(prop.color.slice(1), 16)
				}), piximOptions);
				
				this._composition = comp;
				this._rootClass = root;
				this._basepath = basepath;
				
				window.createjs.Ticker.framerate = prop.fps;
				
				this._handleTick = this._handleStop;
				
				window.createjs.Ticker.addEventListener('tick', this._tick.bind(this));
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
			
			initAsync(options: TCreatejsPlayerOption = {}) {
				return initAsync(this._basepath, this._composition)
					.then(() => {
						const lib = this._composition.getLibrary();
						
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
						
						const Content = _Pixim.Content.create();
						
						Content.defineLibraries({
							root: class Root extends _Pixim.Container {
								constructor($: any) {
									super();
									
									this.addChild($.vars.root);
								}
							}
						});
						
						const content = new Content();
						content.addVars({
							root: exportRoot.getPixi()
						});
						
						this.app.render();
						
						this._stage.addChild(exportRoot);
						
						return this.attachAsync(content);
					});
			}
		}
	}
}

/**
 * @ignore
 */
export import TCreatejsPlayerOption = Pixim.createjs.TCreatejsPlayerOption;

/**
 * @ignore
 */
export import Player = Pixim.createjs.Player;