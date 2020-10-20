# Pixim-animate-player

A module for playing content published by Adobe Animate with "[Pixim.js](https://github.com/tawaship/Pixim.js)".

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

---

## Core module
[@tawaship/pixi-animate-core](https://tawaship.github.io/pixi-animate-core/)

## Support version

- A complete set of content published with Adobe Animate version 20.02 | 20.5.1
- pixi.js 5.3.2
- Pixim.js 1.7.x | 1.8.x

I have not confirmed the operation on other versions.

## How to use

```sh
git clone https://github.com/tawaship/pixi-animate-player
```

<br>

```html
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="/path/to/lib/pixi.5.3.2.min.js"></script>
<script src="/path/to/lib/Pixim.min.js"></script>
<script src="/path/to/dist/Pixim-animate-player.min.js"></script>
<script src="[your content]"></script>
```

<br>

```javascript
var player = new Pixim.animate.Player(
	"[conposition id]", // "lib.properties.id" in Animate content.
	"[root class name]", // Root class name of Animate content.
	"[content directory path]", // Directory path of Animate content.
	{
		useSynchedTimeline: true,
		useMotionGuide: false
	},
	{
		antialias: true
	}, // Options of PIXI.Application.
	{
		autoAdjust: true
	} // Options of Pixim.Application
);

player
	.prepareAsync({
		crossOrigin: false
	})
	.then(function() {
		player.play();
	});
```

## Links

[github](https://github.com/tawaship/pixi-animate-player)

[documents](https://tawaship.github.io/pixi-animate-player/docs/)

[samples](https://tawaship.github.io/pixi-animate-player/samples/)