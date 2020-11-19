import * as PIXI from 'pixi.js';
import { IPrepareOption } from '@tawaship/pixi-animate-core';

/**
 * @ignore
 */
declare const window: any;

/**
 * @ignore
 */
export function initStage(options: IPrepareOption = {}) {
	if (!options.useSynchedTimeline) {
		Object.defineProperties(window.createjs.Stage.prototype, {
			updateForPixi: {
				value: function(e) {
					this._tick(e);
				}
			}
		});
		Object.defineProperties(window.createjs.StageGL.prototype, {
			updateForPixi: {
				value: function(e) {
					this._tick(e);
				}
			}
		});
	}
}