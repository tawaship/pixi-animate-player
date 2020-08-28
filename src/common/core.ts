import * as PIXI from 'pixi.js';
import { TPlayerOption } from '@tawaship/pixi-animate-core';

/**
 * @ignore
 */
declare const window: any;

/**
 * @ignore
 */
export function initStage(stage: any, options: TPlayerOption = {}) {
	if (!options.useSynchedTimeline) {
		Object.defineProperties(window.createjs.StageGL.prototype, {
			updateForPixi: {
				value: function(e) {
					this._tick(e);
				}
			}
		});
	}
}