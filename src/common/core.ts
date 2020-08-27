import * as PIXI from 'pixi.js';
import * as Core from '@tawaship/pixi-animate-core';

/**
 * @ignore
 */
export import prepareAnimateAsync = Core.prepareAnimateAsync;

/**
 * @ignore
 */
export import TAnimateLibrary = Core.TAnimateLibrary;

/**
 * @ignore
 */
declare const window: any;

/**
 * @ignore
 */
export function initStage(stage: any, options: any = {}) {
	if (options.useSynchedTimeline) {
		function containerDrawFunction() {
			const list = this.children.slice();
			for (let i = 0,l = list.length; i < l; i++) {
				const child = list[i];
				if (!child.isVisible()) { continue; }
				child.draw();
			}
			
			return true;
		};
		
		function imageDrawFunction() {
			return true;
		}
		
		Object.defineProperties(window.createjs.MovieClip.prototype, {
			draw: {
				value: function() {
					this._updateState();
					return this._containerDraw();
				}
			},
			
			_containerDraw: {
				value: containerDrawFunction
			}
		});
		
		const imageDescriptors = {
			draw: {
				value: imageDrawFunction
			}
		};
		
		Object.defineProperties(window.createjs.Sprite.prototype, imageDescriptors);
		Object.defineProperties(window.createjs.Graphics.prototype, imageDescriptors);
		Object.defineProperties(window.createjs.Shape.prototype, imageDescriptors);
		Object.defineProperties(window.createjs.Text.prototype, imageDescriptors);
		Object.defineProperties(window.createjs.Bitmap.prototype, imageDescriptors);
		
		stage.update = function(props) {
			if (this.tickOnUpdate) { this.tick(props); }
			this.dispatchEvent("drawstart");
			if (this.autoClear) { this.clear(); }
			
			if (this._webGLContext) {
				this._batchDraw(this, this._webGLContext);
				if (this._autoPurge != -1 && !(this._drawID%((this._autoPurge/2)|0))) {
					this.purgeTextures(this._autoPurge);
				}
			} else {
				this.draw();
			}
			
			this.dispatchEvent("drawend");
		}
		
		stage.draw = containerDrawFunction;
		
		stage._updateFunction = stage.update;
	} else {
		stage._updateFunction = stage.tick;
	}
	
	if (stage._handleTick) {
		stage._tickFunction = function(e) {
			stage._updateFunction();
			stage._handleTick();
		};
	} else {
		stage._tickFunction = function(e) {
			stage._updateFunction();
		};
	}
}