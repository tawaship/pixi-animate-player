import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import buble from '@rollup/plugin-buble';
import { terser } from 'rollup-plugin-terser';
import del from 'del';

const conf = require('./package.json');
const version = conf.version;
const pixi = conf.dependencies['pixi.js'].replace('^', '');
const pixim = conf.dependencies['@tawaship/pixim.js'].replace('^', '');

const pixi_banner = [
	'/*!',
	` * @tawaship/pixi-createjs-player.js - v${version}`,
	' * ',
	` * @require pixi.js v${pixi}`,
	' * @author tawaship (makazu.mori@gmail.com)',
	' * @license MIT',
	' */',
	''
].join('\n');

const pixim_banner = [
	'/*!',
	` * @tawaship/pixim-createjs-player.js - v${version}`,
	' * ',
	` * @require pixi.js v${pixi}`,
	` * @require @tawaship/pixim.js v${pixim}`,
	' * @author tawaship (makazu.mori@gmail.com)',
	' * @license MIT',
	' */',
	''
].join('\n');

export default (async () => {
	if (process.env.PROD) {
		await del(['./docs/pixi/', './docs/pixim/', './dist/']);
	}
	
	return [
		{
			input: 'src/pixim/index.ts',
			output: [
				{
					banner: pixim_banner,
					file: 'dist/Pixim-createjs-player.js',
					format: 'iife',
					name: 'Pixim.createjs',
					sourcemap: true,
					extend: true,
					globals: {
						'pixi.js': 'PIXI',
						'@tawaship/pixim.js': 'Pixim'
					}
				}
			],
			external: ['pixi.js', '@tawaship/pixim.js'],
			plugins: [
				nodeResolve(),
				commonjs(),
				typescript({tsconfig: 'tsconfig.pixim.json'}),
				buble(),
				terser({
					compress: {
						//drop_console: true
						//pure_funcs: ['console.log']
					},
					mangle: false,
					output: {
						beautify: true,
						braces: true
					}
				})
			]
		},
		{
			input: 'src/pixim/index.ts',
			output: [
				{
					banner: pixim_banner,
					file: 'dist/Pixim-createjs-player.min.js',
					format: 'iife',
					name: 'Pixim.createjs',
					sourcemap: true,
					extend: true,
					globals: {
						'pixi.js': 'PIXI',
						'@tawaship/pixim.js': 'Pixim'
					},
					compact: true
				}
			],
			external: ['pixi.js', '@tawaship/pixim.js'],
			plugins: [
				nodeResolve(),
				commonjs(),
				typescript({tsconfig: 'tsconfig.pixim.json'}),
				buble(),
				terser({
					compress: {
						//drop_console: true,
						pure_funcs: ['console.log']
					}
				})
			]
		},
		{
			input: 'src/pixi/index.ts',
			output: [
				{
					banner: pixi_banner,
					file: 'dist/pixi-createjs-player.js',
					format: 'iife',
					name: 'PIXI.createjs',
					sourcemap: true,
					extend: true,
					globals: {
						'pixi.js': 'PIXI'
					}
				}
			],
			external: ['pixi.js'],
			plugins: [
				nodeResolve(),
				commonjs(),
				typescript({tsconfig: 'tsconfig.pixi.json'}),
				buble(),
				terser({
					compress: {
						//drop_console: true
						//pure_funcs: ['console.log']
					},
					mangle: false,
					output: {
						beautify: true,
						braces: true
					}
				})
			]
		},
		{
			input: 'src/pixi/index.ts',
			output: [
				{
					banner: pixi_banner,
					file: 'dist/pixi-createjs-player.min.js',
					format: 'iife',
					name: 'PIXI.createjs',
					sourcemap: true,
					extend: true,
					globals: {
						'pixi.js': 'PIXI'
					},
					compact: true
				}
			],
			external: ['pixi.js'],
			plugins: [
				nodeResolve(),
				commonjs(),
				typescript({tsconfig: 'tsconfig.pixi.json'}),
				buble(),
				terser({
					compress: {
						//drop_console: true,
						pure_funcs: ['console.log']
					}
				})
			]
		}
	]
})();