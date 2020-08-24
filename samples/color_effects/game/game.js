(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_atlas_", frames: [[922,232,112,112],[0,0,920,920],[0,922,528,56],[893,922,320,56],[530,922,361,56],[922,0,320,56],[922,58,320,56],[922,116,320,56],[922,174,320,56]]}
];


// symbols:



(lib.CachedBmp_132 = function() {
	this.initialize(ss["game_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_150 = function() {
	this.initialize(ss["game_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["game_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["game_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["game_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["game_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["game_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["game_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["game_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.シーン_1_レイヤー_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_7
	this.instance = new lib.CachedBmp_150();
	this.instance.setTransform(47.6,-28.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シーン_1_レイヤー_7, null, null);


(lib.シーン_1_レイヤー_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.CachedBmp_142();
	this.instance.setTransform(194.7,285.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_140();
	this.instance_1.setTransform(97.95,152,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_139();
	this.instance_2.setTransform(302.4,152,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_138();
	this.instance_3.setTransform(222.95,114,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_133();
	this.instance_4.setTransform(348,3,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_129();
	this.instance_5.setTransform(152,3,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_128();
	this.instance_6.setTransform(18,3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シーン_1_レイヤー_1, null, null);


(lib.シンボル6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.CachedBmp_132();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("rgba(0,0,0,0)").setStrokeStyle(2,1,1,3,true).moveTo(275,200).lineTo(-275,200).lineTo(-275,-200).lineTo(275,-200).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,-201,552,402);


(lib.シーン_1_レイヤー_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.シンボル6("synched",0);
	this.instance.setTransform(430.45,219.7,1,1,0,0,0,28,27.9);
	this.instance.filters = [new cjs.ColorFilter(1, -1, -1, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,60,60);

	this.instance_1 = new lib.シンボル6("synched",0);
	this.instance_1.setTransform(345.2,219.7,1,1,0,0,0,28,27.9);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, -1, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-2,-2,60,60);

	this.instance_2 = new lib.シンボル6("synched",0);
	this.instance_2.setTransform(184,219.7,1,1,0,0,0,28,27.9);
	this.instance_2.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, -255, 0, 0)];
	this.instance_2.cache(-2,-2,60,60);

	this.instance_3 = new lib.シンボル6("synched",0);
	this.instance_3.setTransform(98.75,219.7,1,1,0,0,0,28,27.9);
	this.instance_3.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 255, 0, 0)];
	this.instance_3.cache(-2,-2,60,60);

	this.instance_4 = new lib.シンボル6("synched",0);
	this.instance_4.setTransform(411,69.4,1,1,0,0,0,28,27.9);
	this.instance_4.filters = [new cjs.ColorFilter(0.2, 0.2, 0.2, 1, 103.2, 200, 76.8, 0)];
	this.instance_4.cache(-2,-2,60,60);

	this.instance_5 = new lib.シンボル6("synched",0);
	this.instance_5.setTransform(476.05,69.4,1,1,0,0,0,28,27.9);
	this.instance_5.filters = [new cjs.ColorFilter(0.15, 0.15, 0.15, 1, 97.75, 92.65, 216.75, 0)];
	this.instance_5.cache(-2,-2,60,60);

	this.instance_6 = new lib.シンボル6("synched",0);
	this.instance_6.setTransform(343,69.4,1,1,0,0,0,28,27.9);
	this.instance_6.filters = [new cjs.ColorFilter(0.04, 0.04, 0.04, 1, 222.72, 92.16, 182.4, 0)];
	this.instance_6.cache(-2,-2,60,60);

	this.instance_7 = new lib.シンボル6("synched",0);
	this.instance_7.setTransform(242,69.4,1,1,0,0,0,28,27.9);
	this.instance_7.filters = [new cjs.ColorFilter(0.46, 0.46, 0.46, 1, 0, 0, 0, 0)];
	this.instance_7.cache(-2,-2,60,60);

	this.instance_8 = new lib.シンボル6("synched",0);
	this.instance_8.setTransform(180,69.4,1,1,0,0,0,28,27.9);
	this.instance_8.filters = [new cjs.ColorFilter(0.44, 0.44, 0.44, 1, 142.8, 142.8, 142.8, 0)];
	this.instance_8.cache(-2,-2,60,60);

	this.instance_9 = new lib.シンボル6("synched",0);
	this.instance_9.setTransform(58.75,69.4,1,1,0,0,0,28,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シーン_1_レイヤー_2, null, null);


(lib.シンボル8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.シンボル6();
	this.instance.setTransform(28,27.9,1,1,0,0,0,28,27.9);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 0.76953125, 1, 76, -28, 144, 0)];
	this.instance.cache(-2,-2,60,60);

	this.instance_1 = new lib.シンボル6("synched",0);
	this.instance_1.setTransform(-35,27.9,1,1,0,0,0,28,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,0,119,56);


(lib.シンボル7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.シンボル8();
	this.instance.setTransform(126.95,88.85,1,1,0,0,0,28,27.9);
	this.instance.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 72.45, 114.75, 4.5, 0)];
	this.instance.cache(-65,-2,123,60);

	this.instance_1 = new lib.シンボル6("synched",0);
	this.instance_1.setTransform(0.95,88.85,1,1,0,0,0,28,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,61,182,56);


(lib.シンボル5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.シンボル7();
	this.instance.setTransform(-95,-33.05,1,1,0,0,0,28,27.9);
	this.instance.filters = [new cjs.ColorFilter(0.59, 0.59, 0.59, 1, 104.55, 104.55, 104.55, 0)];
	this.instance.cache(-29,59,186,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// レイヤー_1
	this.instance_1 = new lib.シンボル6("synched",0);
	this.instance_1.setTransform(-188,27.9,1,1,0,0,0,28,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216,0,248,56);


(lib.シーン_1_レイヤー_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_8
	this.instance = new lib.シンボル5();
	this.instance.setTransform(384.05,354.55,1,1,0,0,0,28,27.9);
	this.instance.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シーン_1_レイヤー_8, null, null);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(275,200);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1));

	// レイヤー_8_obj_
	this.レイヤー_8 = new lib.シーン_1_レイヤー_8();
	this.レイヤー_8.name = "レイヤー_8";
	this.レイヤー_8.setTransform(264,338.2,1,1,0,0,0,264,338.2);
	this.レイヤー_8.depth = 0;
	this.レイヤー_8.isAttachedToCamera = 0
	this.レイヤー_8.isAttachedToMask = 0
	this.レイヤー_8.layerDepth = 0
	this.レイヤー_8.layerIndex = 0
	this.レイヤー_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_8).wait(1));

	// レイヤー_2_obj_
	this.レイヤー_2 = new lib.シーン_1_レイヤー_2();
	this.レイヤー_2.name = "レイヤー_2";
	this.レイヤー_2.setTransform(267.4,144.7,1,1,0,0,0,267.4,144.7);
	this.レイヤー_2.depth = 0;
	this.レイヤー_2.isAttachedToCamera = 0
	this.レイヤー_2.isAttachedToMask = 0
	this.レイヤー_2.layerDepth = 0
	this.レイヤー_2.layerIndex = 1
	this.レイヤー_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_2).wait(1));

	// レイヤー_1_obj_
	this.レイヤー_1 = new lib.シーン_1_レイヤー_1();
	this.レイヤー_1.name = "レイヤー_1";
	this.レイヤー_1.setTransform(263,158.2,1,1,0,0,0,263,158.2);
	this.レイヤー_1.depth = 0;
	this.レイヤー_1.isAttachedToCamera = 0
	this.レイヤー_1.isAttachedToMask = 0
	this.レイヤー_1.layerDepth = 0
	this.レイヤー_1.layerIndex = 2
	this.レイヤー_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_1).wait(1));

	// レイヤー_7_obj_
	this.レイヤー_7 = new lib.シーン_1_レイヤー_7();
	this.レイヤー_7.name = "レイヤー_7";
	this.レイヤー_7.setTransform(277.6,201.6,1,1,0,0,0,277.6,201.6);
	this.レイヤー_7.depth = 0;
	this.レイヤー_7.isAttachedToCamera = 0
	this.レイヤー_7.isAttachedToMask = 0
	this.レイヤー_7.layerDepth = 0
	this.レイヤー_7.layerIndex = 3
	this.レイヤー_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,171.6,277,260);
// library properties:
lib.properties = {
	id: '2FA8E0C7230941478CE2CA3DB82DBEDF',
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_atlas_.png?1596778657725", id:"game_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2FA8E0C7230941478CE2CA3DB82DBEDF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;