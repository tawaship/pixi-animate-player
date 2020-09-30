(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_atlas_1", frames: [[0,0,32,32]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bmp = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFCCFF").beginStroke().moveTo(-4,14).lineTo(-9.4,12.2).lineTo(-14.9,10.4).lineTo(-20.4,8.6).lineTo(-25.4,7).lineTo(-30.9,5.3).lineTo(-31.8,5).curveTo(-33.4,4.7,-35.1,4.5).lineTo(-38.3,3.9).curveTo(-40,3.5,-41.7,2.9).curveTo(-43.4,2.3,-45,1.4).curveTo(-46.9,0.5,-48.7,-0.7).curveTo(-50.2,-1.7,-51.5,-3.1).lineTo(-52,-3.7).lineTo(-52.4,-4.4).lineTo(-52.8,-5.2).lineTo(-53,-5.9).lineTo(-53,-6.3).lineTo(-52.6,-7.1).lineTo(-52.2,-7.8).lineTo(-51.8,-8.6).lineTo(-51.3,-9.1).lineTo(-50.8,-9.7).lineTo(-50.2,-10.2).curveTo(-46.4,-12.4,-42.1,-13.3).curveTo(-36.1,-14.4,-30.1,-14.7).curveTo(-30.9,-12.9,-31.1,-10.5).lineTo(-31,-9.8).curveTo(-30.2,-3,-23.6,-1.3).curveTo(-17,0.6,-13.1,-5.2).curveTo(-9.8,-9.9,-12.2,-14.5).lineTo(-7.2,-14.5).curveTo(-2.5,-14.6,2.2,-13.9).lineTo(13.7,-12.2).curveTo(8.3,-9.7,7.9,-3.5).lineTo(8,-2.8).curveTo(8.8,4,15.4,5.7).curveTo(22,7.6,25.9,1.9).curveTo(29.8,-3.9,25.6,-9.4).lineTo(24.8,-10.3).curveTo(32.5,-8.8,39.9,-6.3).lineTo(41.4,-5.4).lineTo(42.9,-4.6).lineTo(44.3,-3.6).lineTo(46.4,-2.2).lineTo(48.6,-0.8).lineTo(50.7,0.6).lineTo(51.3,1.2).lineTo(51.9,1.7).lineTo(52.5,2.2).lineTo(52.7,3.1).lineTo(52.9,4).lineTo(53,4.8).lineTo(53,5.7).lineTo(53,6.5).lineTo(52.9,7.3).lineTo(52.4,7.7).lineTo(51.9,8.3).lineTo(51.3,8.6).lineTo(50.6,9).lineTo(50,9.2).lineTo(49.4,9.3).curveTo(44,9.6,38.6,9.6).lineTo(24.9,9.5).lineTo(14.2,9.4).curveTo(9.3,9.3,4.4,10.1).curveTo(-0,10.9,-2.2,14.7).lineTo(-4,14).closePath();
	this.shape.setTransform(72.975,67.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FF0000").beginStroke().moveTo(2.8,52.4).lineTo(1.9,52.3).lineTo(1.1,52).curveTo(-7.8,48.8,-16.8,45.8).curveTo(-25.6,42.8,-34.5,40.3).lineTo(-46.9,36.8).curveTo(-56.2,34.1,-63.6,27.9).curveTo(-71.1,21.6,-72.8,12.1).curveTo(-73.6,7.4,-72.4,2.8).curveTo(-68.8,-7.3,-59.7,-12.7).curveTo(-53.8,-16.1,-47.3,-17.8).lineTo(-47.5,-21.6).curveTo(-47.8,-30.7,-48.5,-39.8).curveTo(-49.1,-46.7,-43.6,-50.5).curveTo(-38.2,-54.2,-32.8,-50.6).curveTo(-27.7,-47,-27.9,-40.7).curveTo(-28.2,-33.2,-27.6,-25.7).lineTo(-27.3,-19.7).curveTo(-19.9,-20,-12.5,-20).curveTo(-2.5,-20,7.4,-18.6).curveTo(20.3,-16.8,33,-14.2).lineTo(33.1,-14.8).curveTo(33.8,-18.9,34.3,-23).lineTo(35.2,-30.8).curveTo(35.4,-32.3,35.8,-33.8).curveTo(36,-36.9,37.7,-39.4).curveTo(39.6,-42,42.7,-43).curveTo(45.8,-44,48.9,-43).curveTo(51.1,-42.3,52.8,-40.6).curveTo(54.5,-38.9,55.3,-36.6).curveTo(55.7,-35.5,55.8,-34.3).lineTo(55.7,-32.8).lineTo(55.6,-31.3).lineTo(55.3,-29.8).lineTo(55.1,-28.5).lineTo(54.8,-27.2).lineTo(53.4,-15.8).curveTo(52.9,-11.6,52.1,-7.4).lineTo(55,-5.7).curveTo(62.2,-1.4,67.6,4.8).curveTo(71.4,9.1,72.5,14.8).curveTo(74.7,25.9,68.1,34.6).curveTo(64.8,39,59.8,41.3).curveTo(51.5,45.2,42.1,44.7).curveTo(35.5,44.4,28.9,44.4).lineTo(13.6,44.4).curveTo(13.4,45.4,12.9,46.4).curveTo(12.5,47.3,11.9,48.2).lineTo(10.5,49.8).curveTo(9.7,50.5,8.8,51).curveTo(7.8,51.6,6.7,51.9).curveTo(5.6,52.3,4.4,52.4).lineTo(2.8,52.4).closePath().moveTo(-42.2,1.6).curveTo(-46.6,2.4,-50.3,4.7).lineTo(-50.9,5.2).lineTo(-51.5,5.8).lineTo(-52,6.3).lineTo(-52.4,7.1).lineTo(-52.8,7.8).lineTo(-53.1,8.5).lineTo(-53.1,9).lineTo(-52.9,9.7).lineTo(-52.5,10.4).lineTo(-52.1,11.1).lineTo(-51.7,11.8).curveTo(-50.4,13.1,-48.8,14.2).curveTo(-47,15.3,-45.1,16.3).curveTo(-43.6,17.2,-41.8,17.8).curveTo(-40.2,18.4,-38.5,18.8).lineTo(-35.2,19.3).curveTo(-33.5,19.5,-31.9,19.9).lineTo(-31.1,20.2).lineTo(-25.6,21.9).lineTo(-20.5,23.5).lineTo(-15,25.3).lineTo(-9.6,27.1).lineTo(-4.2,28.9).lineTo(-2.4,29.6).curveTo(-0.2,25.7,4.2,25).curveTo(9.1,24.2,14.1,24.3).lineTo(24.8,24.4).lineTo(38.5,24.5).curveTo(43.9,24.5,49.2,24.2).lineTo(49.8,24.1).lineTo(50.4,23.9).lineTo(51.1,23.5).lineTo(51.8,23.1).lineTo(52.3,22.6).lineTo(52.8,22.2).lineTo(52.8,21.4).lineTo(52.8,20.5).lineTo(52.8,19.7).lineTo(52.8,18.9).lineTo(52.6,18).lineTo(52.3,17.1).lineTo(51.7,16.6).lineTo(51.2,16).lineTo(50.6,15.5).lineTo(48.4,14.1).lineTo(46.3,12.7).lineTo(44.1,11.2).lineTo(42.7,10.3).lineTo(41.3,9.4).lineTo(39.8,8.6).curveTo(32.3,6.1,24.7,4.6).lineTo(25.4,5.5).curveTo(29.7,11,25.8,16.7).curveTo(21.9,22.5,15.2,20.6).curveTo(8.7,18.8,7.8,12).lineTo(7.8,11.4).curveTo(8.1,5.1,13.6,2.7).lineTo(2,1).curveTo(-2.7,0.3,-7.4,0.4).lineTo(-12.3,0.4).curveTo(-10,5,-13.2,9.7).curveTo(-17.1,15.5,-23.8,13.6).curveTo(-30.3,11.8,-31.2,5).lineTo(-31.2,4.4).curveTo(-31.1,2,-30.2,0.2).curveTo(-36.3,0.4,-42.2,1.6).closePath();
	this.shape_1.setTransform(73.103,52.3687);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symbol12, new cjs.Rectangle(0,0,146.2,104.8), null);


(lib.symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,51,204,0.369)").beginStroke().moveTo(-16.4,22.5).lineTo(-16.4,12.5).lineTo(-25.5,12.5).lineTo(-25.5,-11).lineTo(-16.4,-11).lineTo(-16.4,-22.5).lineTo(15.3,-22.5).lineTo(15.3,-11).lineTo(25.5,-11).lineTo(25.5,12.5).lineTo(15.3,12.5).lineTo(15.3,22.5).closePath();
	this.shape.setTransform(25.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,45);


// stage content:
(lib.game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var a = Number(this.aa.text) + 1;
		if (a > 100) {
			a = 0;
		}
		this.aa.text = a;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー_8
	this.text = new cjs.Text("right", "24px 'MS PGothic'", "#6E6E6E");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 170;
	this.text.parent = this;
	this.text.setTransform(536,321.6);

	this.text_1 = new cjs.Text("left", "24px 'MS PGothic'", "#6E6E6E");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 170;
	this.text_1.parent = this;
	this.text_1.setTransform(366,235.25);

	this.text_2 = new cjs.Text("center", "24px 'MS PGothic'", "#6E6E6E");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 26;
	this.text_2.lineWidth = 170;
	this.text_2.parent = this;
	this.text_2.setTransform(451,278.5);

	this.aa = new cjs.Text("0", "24px 'MS PGothic'", "#6E6E6E");
	this.aa.name = "aa";
	this.aa.lineHeight = 26;
	this.aa.lineWidth = 170;
	this.aa.parent = this;
	this.aa.setTransform(366,172.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape.setTransform(494.025,156.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#6E6E6E").beginStroke().moveTo(2.8,5.2).lineTo(0,1.3).lineTo(-2.8,5.2).lineTo(-5,5.2).lineTo(-1.1,-0.1).lineTo(-4.7,-5.2).lineTo(-2.5,-5.2).lineTo(0,-1.5).lineTo(2.5,-5.2).lineTo(4.7,-5.2).lineTo(1.1,-0.1).lineTo(5,5.2).closePath();
	this.shape_1.setTransform(484.425,158.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_2.setTransform(472.925,158.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_3.setTransform(462.525,156.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-3.2,4.1).curveTo(-4.9,2.4,-4.9,-0).curveTo(-4.9,-2.5,-3.4,-4).curveTo(-2,-5.4,0,-5.4).curveTo(2.3,-5.4,3.4,-4.3).curveTo(4.4,-3.3,4.6,-1.8).lineTo(2.6,-1.8).curveTo(2.5,-2.5,1.8,-3.2).curveTo(1.3,-3.8,0.1,-3.8).curveTo(-1,-3.8,-1.8,-3).curveTo(-2.9,-1.9,-2.8,0.1).curveTo(-2.9,2,-1.9,3).curveTo(-1.1,3.7,0,3.7).curveTo(1.3,3.7,2.1,3).curveTo(2.9,2.2,2.8,1).lineTo(4.9,1).curveTo(4.9,3,3.6,4.2).curveTo(2.4,5.4,0,5.4).curveTo(-1.9,5.4,-3.2,4.1).closePath();
	this.shape_4.setTransform(445.2,158.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-0.9,7.9).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,7.9).closePath().moveTo(-0.9,-5.6).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.6).closePath();
	this.shape_5.setTransform(436.625,155.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#6E6E6E").beginStroke().moveTo(5.6,5.3).lineTo(5.6,-2.1).curveTo(5.5,-2.6,5.1,-3).curveTo(4.6,-3.6,3.9,-3.6).curveTo(2.6,-3.6,1.7,-2.7).curveTo(0.9,-2,1,-1.3).lineTo(1,5.3).lineTo(-0.9,5.3).lineTo(-0.9,-2).curveTo(-0.9,-2.5,-1.5,-3.1).curveTo(-2,-3.6,-2.9,-3.6).curveTo(-3.9,-3.6,-4.7,-2.8).curveTo(-5.5,-2,-5.5,-1.2).lineTo(-5.5,5.3).lineTo(-7.4,5.3).lineTo(-7.4,-5.2).lineTo(-5.5,-5.2).lineTo(-5.5,-3.6).curveTo(-4.3,-5.3,-2.7,-5.3).curveTo(-0.9,-5.3,0,-4.4).curveTo(0.5,-3.9,0.7,-3.4).curveTo(2,-5.3,4.1,-5.3).curveTo(5.7,-5.3,6.5,-4.5).curveTo(7.4,-3.6,7.4,-2.4).lineTo(7.4,5.3).closePath();
	this.shape_6.setTransform(425.25,158.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_7.setTransform(410.725,158.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#6E6E6E").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.1,-3.3).curveTo(1.6,-3.8,0.5,-3.8).curveTo(-0.3,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1,-5.3,0.9,-5.3).curveTo(2.7,-5.3,3.8,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_8.setTransform(399,158.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-3.9,6.6).lineTo(-3.9,4.8).curveTo(-3.2,5.2,-2.3,5.2).curveTo(-1.9,5.2,-1.5,4.8).curveTo(-1.1,4.4,-0.9,3.8).lineTo(-5.4,-7).lineTo(-3.4,-7).lineTo(0,1.3).lineTo(3.4,-7).lineTo(5.4,-7).lineTo(0.8,4.3).curveTo(0.2,5.7,-0.4,6.2).curveTo(-1.1,7,-2.2,7).curveTo(-3.6,7,-3.9,6.6).closePath();
	this.shape_9.setTransform(387.175,160.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-6.2,8).lineTo(-6.2,-8).lineTo(-0.6,-8).curveTo(2.2,-8,4.2,-6.1).curveTo(6.2,-4,6.2,0.1).curveTo(6.2,4.1,4.1,6.3).curveTo(2.3,8,-0.6,8).closePath().moveTo(-4.1,6.3).lineTo(-0.7,6.3).curveTo(1.1,6.3,2.2,5.1).curveTo(4,3.3,4,0.1).curveTo(4,-3.2,2.3,-4.9).curveTo(1,-6.3,-0.7,-6.3).lineTo(-4.1,-6.3).closePath();
	this.shape_10.setTransform(373.825,155.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.aa},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(2));

	// レイヤー_2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#00FF00").beginStroke().moveTo(-29.5,29.5).lineTo(-29.5,-29.5).lineTo(29.5,-29.5).lineTo(29.5,29.5).closePath().moveTo(-14.9,14.9).lineTo(14.9,14.9).lineTo(14.9,-14.9).lineTo(-14.9,-14.9).closePath();
	this.shape_11.setTransform(374.525,79.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#999999").beginStroke().moveTo(-4.7,1.7).curveTo(-6.7,1,-6.7,-0).curveTo(-6.7,-1,-4.7,-1.7).curveTo(-2.8,-2.4,-0,-2.4).curveTo(2.8,-2.4,4.7,-1.7).curveTo(6.7,-1,6.7,-0).curveTo(6.7,1,4.7,1.7).curveTo(2.8,2.4,-0,2.4).curveTo(-2.8,2.4,-4.7,1.7).closePath();
	this.shape_12.setTransform(373.35,80.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(2));

	// レイヤー_4
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#00FF00").beginStroke().moveTo(-12.9,12.9).curveTo(-18.3,7.6,-18.2,-0).curveTo(-18.3,-7.5,-12.9,-12.9).curveTo(-7.6,-18.2,0,-18.2).curveTo(7.6,-18.2,12.9,-12.9).curveTo(18.2,-7.5,18.2,-0).curveTo(18.2,7.6,12.9,12.9).curveTo(7.6,18.3,0,18.2).curveTo(-7.6,18.3,-12.9,12.9).closePath();
	this.shape_13.setTransform(158.45,55.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(2));

	// レイヤー_1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-1.6,5.9).curveTo(-2.4,5.6,-2.7,5.5).curveTo(-3,5.5,-3.2,6).lineTo(-3.5,6).lineTo(-3.2,2.1).lineTo(-2.9,2.1).curveTo(-2.6,3.8,-2.3,4.3).curveTo(-1.7,5.5,-0.1,5.5).curveTo(2.1,5.5,2.2,3.6).curveTo(2.3,2.4,1,1.5).lineTo(-0.2,0.6).lineTo(-2.1,-0.8).curveTo(-2.9,-1.7,-2.8,-2.9).curveTo(-2.8,-4.2,-2,-5).curveTo(-1,-6.1,0.5,-6.1).curveTo(1.1,-6.1,1.8,-5.8).lineTo(2.5,-5.5).curveTo(2.7,-5.5,2.8,-5.9).lineTo(3.2,-5.9).lineTo(3.1,-2.5).lineTo(2.7,-2.5).curveTo(2.5,-4.4,1.9,-5).curveTo(1.4,-5.6,0.4,-5.6).curveTo(-0.5,-5.6,-1.2,-4.9).curveTo(-1.7,-4.4,-1.8,-3.7).curveTo(-1.9,-2.5,-0.7,-1.8).lineTo(1.6,-0.1).curveTo(2.6,0.7,3,1.1).curveTo(3.5,1.8,3.4,2.8).curveTo(3.3,4.4,2.2,5.3).curveTo(1.2,6.1,-0.1,6.1).curveTo(-0.6,6.1,-1.6,5.9).closePath();
	this.shape_14.setTransform(119.9577,194.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-3.6,4.5).curveTo(-4.6,3,-4.4,0.3).curveTo(-4.2,-2.9,-2.4,-4.7).curveTo(-1,-6,0.7,-6.1).curveTo(2.2,-6.1,3.2,-5.1).curveTo(4.3,-3.9,4.3,-1.7).lineTo(-3.1,-1.7).curveTo(-3.5,4.6,-0,4.6).curveTo(2.5,4.6,4.2,1.8).lineTo(4.5,1.9).curveTo(3.9,3.3,2.9,4.4).curveTo(1.4,6.1,-0.6,6.1).curveTo(-2.5,6.1,-3.6,4.5).closePath().moveTo(-3,-2.3).lineTo(2.7,-2.3).curveTo(2.6,-5.2,0.1,-5.3).curveTo(-2,-5.3,-3,-2.3).closePath();
	this.shape_15.setTransform(108.334,194.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#6E6E6E").beginStroke().moveTo(0.8,6).lineTo(0.8,5.6).curveTo(1.6,5.4,1.9,5.1).curveTo(2.4,4.5,2.6,3.1).lineTo(2.9,-1.7).curveTo(3.1,-4.4,1,-4.4).curveTo(-0.1,-4.5,-1.8,-2.7).lineTo(-2.3,4).curveTo(-2.4,5.4,-0.7,5.6).lineTo(-0.7,6).lineTo(-5.3,6).lineTo(-5.3,5.6).curveTo(-4.4,5.5,-4,5).curveTo(-3.6,4.6,-3.5,3.4).lineTo(-3.1,-2.5).curveTo(-3,-4.5,-4.1,-4.4).lineTo(-4.6,-4.4).lineTo(-4.6,-4.8).lineTo(-1.6,-5.9).lineTo(-1.8,-3.5).lineTo(0.1,-5.2).curveTo(1.2,-6,2.1,-6).curveTo(4.5,-6,4.2,-2.2).lineTo(3.7,3.6).curveTo(3.7,5.4,5.3,5.6).lineTo(5.3,6).closePath();
	this.shape_16.setTransform(95.8,194.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-2.7,8.9).lineTo(-2.7,8.4).curveTo(-1.4,8.4,-1,8).curveTo(-0.5,7.5,-0.4,5.9).lineTo(0,0.5).curveTo(0.2,-1.4,-1,-1.3).lineTo(-1.8,-1.2).lineTo(-1.8,-1.7).curveTo(-0.7,-2,1.6,-3).lineTo(0.9,5.9).curveTo(0.8,7.3,1.1,7.8).curveTo(1.5,8.4,2.7,8.4).lineTo(2.7,8.9).closePath().moveTo(0.2,-7.1).curveTo(0.1,-7.4,0.1,-7.8).curveTo(0.1,-8.1,0.4,-8.5).curveTo(0.6,-8.8,1,-8.9).curveTo(1.5,-8.9,1.8,-8.5).curveTo(2,-8.2,2,-7.8).curveTo(1.9,-6.7,0.9,-6.7).curveTo(0.4,-6.7,0.2,-7.1).closePath();
	this.shape_17.setTransform(83.75,191.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-6.1,8.6).lineTo(-6.1,8.1).curveTo(-5,8,-4.5,7.6).curveTo(-4,7,-3.9,5.5).lineTo(-3.1,-5.7).curveTo(-2.9,-7.2,-3.5,-7.8).curveTo(-3.8,-8.1,-4.9,-8.2).lineTo(-4.9,-8.6).lineTo(0.7,-8.6).lineTo(0.7,-8.2).curveTo(-0.5,-8.2,-1,-7.8).curveTo(-1.6,-7.3,-1.7,-5.7).lineTo(-2.6,6.6).curveTo(-2.6,7.4,-2.3,7.6).curveTo(-1.9,7.8,-0.4,7.8).curveTo(2.3,7.8,3.3,7.3).curveTo(4.7,6.7,5.6,4.3).lineTo(6.1,4.3).lineTo(4.9,8.6).closePath();
	this.shape_18.setTransform(71.925,191.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-3.3,4.6).curveTo(-4.5,3,-4.5,0.3).curveTo(-4.5,-2.9,-2.9,-4.7).curveTo(-1.6,-6.1,0.2,-6.1).curveTo(1.7,-6.1,2.8,-5.1).curveTo(3.9,-4,4.1,-1.6).lineTo(-3.3,-1.6).curveTo(-3.3,4.6,0.2,4.7).curveTo(2.8,4.7,4.2,1.9).lineTo(4.5,2).curveTo(4.1,3.3,3.2,4.4).curveTo(1.8,6.1,-0.3,6.1).curveTo(-2.2,6.1,-3.3,4.6).closePath().moveTo(-3.3,-2.3).lineTo(2.4,-2.3).curveTo(2.1,-5.3,-0.4,-5.3).curveTo(-2.4,-5.3,-3.3,-2.3).closePath();
	this.shape_19.setTransform(394.2,25.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-2.6,8.9).lineTo(-2.6,8.5).curveTo(-1.5,8.4,-1.1,7.9).curveTo(-0.6,7.5,-0.6,6.4).lineTo(-0.6,-5.5).curveTo(-0.6,-7.4,-2,-7.4).lineTo(-2.7,-7.3).lineTo(-2.7,-7.8).curveTo(-1.6,-8,0.7,-8.9).lineTo(0.7,6.4).curveTo(0.7,7.6,1.1,8).curveTo(1.6,8.4,2.7,8.5).lineTo(2.7,8.9).closePath();
	this.shape_20.setTransform(381.975,22.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-3.6,4.3).curveTo(-5,2.6,-5,-0).curveTo(-5,-2.5,-3.7,-4.3).curveTo(-2.3,-6.1,-0.1,-6.1).curveTo(2.2,-6.1,3.6,-4.5).curveTo(5,-2.9,5,-0).curveTo(5,2.5,3.8,4.2).curveTo(2.4,6.1,-0,6.1).curveTo(-2.2,6.1,-3.6,4.3).closePath().moveTo(-2.4,-4.4).curveTo(-3.4,-3.4,-3.4,-1.4).curveTo(-3.5,1.2,-2.6,3).curveTo(-1.6,5.4,0.3,5.4).curveTo(1.5,5.4,2.3,4.5).curveTo(3.5,3.3,3.5,0.7).curveTo(3.5,-1.9,2.4,-3.6).curveTo(1.4,-5.4,-0.3,-5.3).curveTo(-1.6,-5.3,-2.4,-4.4).closePath();
	this.shape_21.setTransform(370.025,25.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#6E6E6E").beginStroke().moveTo(1.3,8.6).lineTo(1.3,8.1).curveTo(2.5,8,2.8,7.1).curveTo(3,6.7,3,5.2).lineTo(3,0.1).lineTo(-3.1,0.1).lineTo(-3.1,5.5).curveTo(-3.1,6.9,-2.8,7.5).curveTo(-2.4,8,-1.3,8.1).lineTo(-1.3,8.6).lineTo(-6,8.6).lineTo(-6,8.1).curveTo(-4.9,8,-4.7,7.4).curveTo(-4.5,6.9,-4.5,5.2).lineTo(-4.5,-5.9).curveTo(-4.5,-7.2,-4.6,-7.5).curveTo(-4.9,-8,-6,-8.2).lineTo(-6,-8.6).lineTo(-1.3,-8.6).lineTo(-1.3,-8.2).curveTo(-2.5,-8,-2.8,-7.7).curveTo(-3.1,-7.3,-3.1,-5.9).lineTo(-3.1,-0.8).lineTo(3,-0.8).lineTo(3,-5.9).curveTo(3,-7.3,2.6,-7.7).curveTo(2.3,-8.1,1.3,-8.2).lineTo(1.3,-8.6).lineTo(6,-8.6).lineTo(6,-8.2).curveTo(4.9,-8,4.6,-7.7).curveTo(4.3,-7.3,4.3,-5.9).lineTo(4.3,5.5).curveTo(4.3,6.9,4.6,7.5).curveTo(5,8,6,8.1).lineTo(6,8.6).closePath();
	this.shape_22.setTransform(358,23.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-1.4,5.8).lineTo(-2.6,5.5).curveTo(-3,5.6,-3.1,6).lineTo(-3.3,6).lineTo(-3.3,2.1).lineTo(-3,2.1).curveTo(-2.7,3.8,-2.3,4.4).curveTo(-1.6,5.5,-0,5.5).curveTo(2.1,5.5,2.1,3.6).curveTo(2.1,2.4,0.8,1.5).lineTo(-0.5,0.6).lineTo(-2.4,-0.8).curveTo(-3.4,-1.7,-3.3,-2.9).curveTo(-3.4,-4.1,-2.6,-5.1).curveTo(-1.8,-6.1,-0.2,-6.1).curveTo(0.3,-6.1,1.1,-5.8).lineTo(1.8,-5.5).curveTo(1.9,-5.5,1.9,-5.5).curveTo(2,-5.6,2,-5.6).curveTo(2,-5.7,2.1,-5.7).curveTo(2.1,-5.8,2.1,-5.9).lineTo(2.4,-5.9).lineTo(2.6,-2.5).lineTo(2.2,-2.5).curveTo(1.8,-4.4,1.2,-5.1).curveTo(0.8,-5.6,-0.3,-5.6).curveTo(-1.2,-5.6,-1.8,-5).curveTo(-2.4,-4.4,-2.4,-3.7).curveTo(-2.4,-2.6,-1.2,-1.7).lineTo(1.3,-0).curveTo(2.4,0.6,2.8,1.1).curveTo(3.3,1.8,3.3,2.8).curveTo(3.3,4.4,2.2,5.3).curveTo(1.3,6.1,0.1,6.1).curveTo(-0.5,6.1,-1.4,5.8).closePath();
	this.shape_23.setTransform(232.75,23.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-2.6,8.9).lineTo(-2.6,8.5).curveTo(-1.5,8.4,-1.1,7.9).curveTo(-0.6,7.5,-0.6,6.4).lineTo(-0.6,-5.5).curveTo(-0.6,-7.4,-2,-7.4).lineTo(-2.7,-7.3).lineTo(-2.7,-7.8).curveTo(-1.6,-8,0.7,-8.9).lineTo(0.7,6.4).curveTo(0.7,7.6,1.1,8).curveTo(1.6,8.4,2.7,8.5).lineTo(2.7,8.9).closePath();
	this.shape_24.setTransform(220.675,20.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-2.6,8.9).lineTo(-2.6,8.5).curveTo(-1.5,8.4,-1.1,7.9).curveTo(-0.6,7.5,-0.6,6.4).lineTo(-0.6,-5.5).curveTo(-0.6,-7.4,-2,-7.4).lineTo(-2.7,-7.3).lineTo(-2.7,-7.8).curveTo(-1.6,-8,0.7,-8.9).lineTo(0.7,6.4).curveTo(0.7,7.6,1.1,8).curveTo(1.6,8.4,2.7,8.5).lineTo(2.7,8.9).closePath();
	this.shape_25.setTransform(208.675,20.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-2.7,8.8).lineTo(-2.7,8.5).curveTo(-1.5,8.4,-1.1,7.9).curveTo(-0.6,7.5,-0.6,5.9).lineTo(-0.6,0.4).curveTo(-0.6,-1.3,-1.8,-1.4).lineTo(-2.5,-1.3).lineTo(-2.5,-1.6).curveTo(-1.4,-2,0.7,-3).lineTo(0.7,5.9).curveTo(0.7,7.3,1.1,7.8).curveTo(1.5,8.3,2.7,8.5).lineTo(2.7,8.8).closePath().moveTo(-0.9,-7.1).curveTo(-1.1,-7.4,-1.1,-7.8).curveTo(-1.1,-8.1,-0.8,-8.5).curveTo(-0.6,-8.9,-0.2,-8.8).curveTo(0.2,-8.8,0.5,-8.6).curveTo(0.8,-8.2,0.8,-7.8).curveTo(0.8,-6.7,-0.2,-6.7).curveTo(-0.6,-6.7,-0.9,-7.1).closePath();
	this.shape_26.setTransform(196.625,20.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-5.7,8.6).lineTo(-5.7,8.1).curveTo(-4.5,8,-4.1,7.5).curveTo(-3.7,7,-3.7,5.4).lineTo(-3.7,-5.7).curveTo(-3.7,-7.3,-4.2,-7.8).curveTo(-4.6,-8.1,-5.7,-8.2).lineTo(-5.7,-8.6).lineTo(5.6,-8.6).lineTo(5.7,-5.1).lineTo(5.3,-5.1).curveTo(5,-6.9,4.4,-7.4).curveTo(3.9,-7.8,2.2,-7.8).lineTo(-1.5,-7.8).curveTo(-2,-7.8,-2.2,-7.6).curveTo(-2.3,-7.4,-2.3,-6.8).lineTo(-2.3,-0.8).lineTo(1.5,-0.8).curveTo(2.8,-0.8,3.2,-1.3).curveTo(3.5,-1.8,3.6,-3.3).lineTo(4.1,-3.3).lineTo(4.1,2.5).lineTo(3.6,2.5).curveTo(3.4,0.8,3.1,0.4).curveTo(2.7,0,1.5,0).lineTo(-2.3,0).lineTo(-2.3,5.7).curveTo(-2.3,7.1,-1.8,7.6).curveTo(-1.4,8,-0.2,8.1).lineTo(-0.2,8.6).closePath();
	this.shape_27.setTransform(184.425,21.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-5.2,7.7).lineTo(-5.2,7.1).curveTo(-4.2,7.1,-3.8,6.5).curveTo(-3.4,6,-3.4,5.1).lineTo(-3.4,-4.2).curveTo(-3.4,-6,-4.7,-6).lineTo(-5.2,-5.9).lineTo(-5.2,-6.4).curveTo(-4.1,-6.7,-2.1,-7.7).lineTo(-2.2,-5.3).lineTo(-1.9,-5.6).curveTo(-0.6,-7.6,1.6,-7.6).curveTo(3.1,-7.6,4.2,-6.1).curveTo(5.2,-4.6,5.2,-2.1).curveTo(5.2,0.3,4.1,2.3).curveTo(2.7,4.4,0.5,4.4).curveTo(-1,4.4,-2.2,3.1).lineTo(-2.2,4.9).curveTo(-2.2,6.2,-1.7,6.6).curveTo(-1.2,7.1,0.1,7.1).lineTo(0.1,7.7).closePath().moveTo(-1,-5.6).curveTo(-2.1,-4.9,-2.2,-4.2).lineTo(-2.2,1.8).curveTo(-2.2,2.3,-1.3,2.9).curveTo(-0.4,3.6,0.5,3.6).curveTo(3.8,3.6,3.8,-1.3).curveTo(3.8,-6.2,0.6,-6.2).curveTo(-0.1,-6.2,-1,-5.6).closePath();
	this.shape_28.setTransform(93.025,22.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#6E6E6E").beginStroke().moveTo(1.5,3.9).curveTo(-0.4,6,-2.3,6.1).curveTo(-3.3,6.1,-3.8,5.5).curveTo(-4.6,4.7,-4.5,3.5).curveTo(-4.5,1.7,-3,0.4).curveTo(-1.8,-0.5,1.5,-1.9).lineTo(1.5,-3.3).curveTo(1.5,-5.5,-0.8,-5.6).curveTo(-1.4,-5.6,-2,-5.2).curveTo(-2.7,-4.8,-2.7,-4.2).lineTo(-2.6,-3.3).curveTo(-2.5,-2.9,-2.7,-2.6).curveTo(-3,-2.3,-3.4,-2.3).curveTo(-4.1,-2.2,-4.2,-3.3).curveTo(-4.2,-4.3,-3.3,-5).curveTo(-2.2,-6.1,-0.5,-6.1).curveTo(1.6,-6.1,2.3,-4.7).curveTo(2.6,-3.9,2.6,-2).lineTo(2.6,2.9).curveTo(2.6,4.8,3.6,4.8).curveTo(4,4.7,4.5,4.3).lineTo(4.5,4.9).curveTo(3.6,6.1,2.6,6.1).curveTo(1.6,6.1,1.5,3.9).closePath().moveTo(-3,2.6).lineTo(-3,2.6).curveTo(-3,4.6,-1.3,4.8).curveTo(-0.5,4.9,0.5,4.1).curveTo(1.5,3.5,1.5,2.3).lineTo(1.5,-1.2).curveTo(-3.1,0.6,-3,2.6).closePath();
	this.shape_29.setTransform(81.4,20.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#6E6E6E").beginStroke().moveTo(2.8,6).lineTo(2.8,5.6).curveTo(3.7,5.4,3.8,4.9).curveTo(4,4.6,4,3.5).lineTo(4,-1.5).curveTo(3.9,-3,3.7,-3.6).curveTo(3.4,-4.6,2.6,-4.5).curveTo(1.6,-4.5,0.8,-2.7).lineTo(0.8,3.3).curveTo(0.8,4.7,1,5.2).curveTo(1.2,5.5,1.8,5.6).lineTo(1.8,6).lineTo(-1.6,6).lineTo(-1.6,5.6).curveTo(-1,5.5,-0.8,5.2).curveTo(-0.5,4.8,-0.5,3.5).lineTo(-0.5,-1.7).curveTo(-0.5,-4.5,-1.9,-4.5).curveTo(-3,-4.5,-3.7,-2.7).lineTo(-3.7,4).curveTo(-3.7,5.5,-2.7,5.6).lineTo(-2.7,6).lineTo(-6,6).lineTo(-6,5.6).curveTo(-5.3,5.5,-5,4.9).lineTo(-4.9,3.5).lineTo(-4.9,-2.6).curveTo(-4.9,-4.4,-5.5,-4.5).lineTo(-5.9,-4.4).lineTo(-5.9,-4.8).curveTo(-4.5,-5.4,-3.8,-5.9).lineTo(-3.8,-5.9).lineTo(-3.8,-3.8).curveTo(-3.5,-4.8,-2.8,-5.4).curveTo(-2,-6,-1.3,-6).curveTo(0.1,-6,0.5,-3.6).curveTo(0.9,-4.5,1.5,-5.2).curveTo(2.3,-6,3.2,-6).curveTo(5.2,-6,5.2,-1.5).lineTo(5.2,3.7).lineTo(5.3,4.9).curveTo(5.5,5.5,6,5.6).lineTo(6,6).closePath();
	this.shape_30.setTransform(69,20.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-0.9,7).curveTo(-1.3,6.2,-1.3,4.4).lineTo(-1.3,-3.6).lineTo(-3,-3.6).lineTo(-3,-4.1).curveTo(-2.7,-4.2,-1.9,-4.8).curveTo(-1.1,-5.7,-0.3,-7.6).lineTo(-0.1,-7.6).lineTo(-0.1,-4.3).lineTo(2.5,-4.3).lineTo(2.5,-3.6).lineTo(-0.1,-3.6).lineTo(-0.1,3.9).curveTo(-0.1,5.4,0.1,5.8).curveTo(0.4,6.5,1.3,6.4).curveTo(2.2,6.4,2.7,5.7).lineTo(3,5.8).curveTo(2.6,6.6,2,7.1).curveTo(1.2,7.6,0.5,7.6).curveTo(-0.5,7.6,-0.9,7).closePath();
	this.shape_31.setTransform(57.05,19.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-2.7,8.8).lineTo(-2.7,8.5).curveTo(-1.5,8.4,-1.1,7.9).curveTo(-0.6,7.4,-0.6,5.9).lineTo(-0.6,0.5).curveTo(-0.6,-1.4,-1.8,-1.3).lineTo(-2.5,-1.2).lineTo(-2.5,-1.7).curveTo(-1.4,-2,0.7,-3).lineTo(0.7,5.9).curveTo(0.7,7.3,1.1,7.8).curveTo(1.5,8.4,2.7,8.5).lineTo(2.7,8.8).closePath().moveTo(-0.9,-7.1).curveTo(-1.1,-7.4,-1.1,-7.8).curveTo(-1.1,-8.1,-0.8,-8.5).curveTo(-0.6,-8.9,-0.2,-8.9).curveTo(0.2,-8.8,0.5,-8.5).curveTo(0.8,-8.2,0.8,-7.8).curveTo(0.8,-6.7,-0.2,-6.7).curveTo(-0.6,-6.7,-0.9,-7.1).closePath();
	this.shape_32.setTransform(44.925,17.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#6E6E6E").beginStroke().moveTo(-6,8.6).lineTo(-6,8.1).curveTo(-4.7,8,-4.2,7.5).curveTo(-3.7,7,-3.7,5.5).lineTo(-3.7,-5.9).curveTo(-3.7,-7.3,-4.2,-7.8).curveTo(-4.6,-8.1,-6,-8.2).lineTo(-6,-8.6).lineTo(-0.2,-8.6).curveTo(5.2,-8.6,5.2,-4.3).curveTo(5.2,-1.4,2.1,-0.5).lineTo(2.5,-0.4).curveTo(6,0.5,6,4.1).curveTo(6,5.5,5.2,6.7).curveTo(3.9,8.6,1,8.6).closePath().moveTo(-2.4,6.6).curveTo(-2.4,7.4,-1.7,7.7).curveTo(-1.2,7.8,-0.3,7.8).curveTo(4.3,7.8,4.3,4).curveTo(4.3,1.3,1.6,0.2).curveTo(0.6,-0.2,-2.4,-0.2).closePath().moveTo(-1.8,-7.8).curveTo(-2.2,-7.8,-2.3,-7.7).curveTo(-2.4,-7.6,-2.4,-7.2).lineTo(-2.4,-1.1).lineTo(0.1,-1.1).curveTo(1.6,-1.2,2.2,-1.4).curveTo(3.8,-2.1,3.8,-4.1).curveTo(3.8,-7.9,-0.7,-7.9).lineTo(-1.8,-7.8).closePath();
	this.shape_33.setTransform(32.975,18.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(2));

	// レイヤー_6
	this.instance = new lib.symbol12();
	this.instance.setTransform(225.2,146.7,1,1,0,0,0,73.1,52.4);

	this.instance_1 = new lib.symbol11();
	this.instance_1.setTransform(217.5,65.55,1,1,0,0,0,25.5,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// レイヤー_7
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("rgba(255,0,0,0.188)").beginStroke().moveTo(-37.1,7.5).curveTo(-40.2,7.5,-42.4,5.3).curveTo(-42.4,4.9,-42.7,4.5).curveTo(-43.1,4,-43.6,3.9).lineTo(-44,3.1).curveTo(-44.6,1.6,-44.6,0).lineTo(-44.6,-0.7).curveTo(-44.4,-3.3,-42.4,-5.3).curveTo(-40.2,-7.5,-37.1,-7.5).lineTo(37.1,-7.5).lineTo(37.7,-7.5).lineTo(43.5,3.9).curveTo(43.1,4.7,42.4,5.3).curveTo(41.6,6.1,40.7,6.7).lineTo(33.8,-6.7).lineTo(33.8,-6.8).lineTo(33.7,-6.7).lineTo(33.6,-6.7).lineTo(33.6,-6.6).lineTo(40.5,6.8).curveTo(38.9,7.5,37.1,7.5).closePath().moveTo(-37.1,2.4).curveTo(-39.2,3.6,-37.4,5.5).curveTo(-35.5,7.6,-33.8,6.2).curveTo(-32.1,4.9,-33.6,3.1).curveTo(-34.5,2,-35.6,2).curveTo(-36.3,2,-37.1,2.4).closePath().moveTo(-42.8,-0.3).curveTo(-44.6,0.8,-43.6,2.4).curveTo(-42.6,4,-40.8,2.8).curveTo(-39,1.7,-40,0.1).curveTo(-40.6,-0.8,-41.5,-0.8).curveTo(-42.1,-0.8,-42.8,-0.3).closePath().moveTo(-38.2,-1.9).curveTo(-40,-0.8,-38.9,0.8).curveTo(-37.9,2.4,-36.3,1.6).curveTo(-34.7,0.6,-35.6,-1.2).curveTo(-36.1,-2.3,-37,-2.3).curveTo(-37.6,-2.3,-38.2,-1.9).closePath().moveTo(38,-7.4).curveTo(40.5,-7.2,42.4,-5.3).curveTo(44.6,-3.1,44.6,0).curveTo(44.6,2.1,43.7,3.7).closePath();
	this.shape_34.setTransform(111.475,351.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#00FFCC").beginStroke().moveTo(38.5,22).lineTo(-28.2,-2.2).lineTo(-43.9,-7.9).curveTo(-46.7,-9,-48,-11.6).lineTo(-48.1,-11.8).lineTo(-48.1,-11.8).lineTo(-48.6,-16.8).lineTo(-48.4,-17.5).curveTo(-47.3,-20.5,-44.5,-21.8).curveTo(-41.7,-23.1,-38.8,-22).lineTo(40.2,6.7).lineTo(43.6,7.9).curveTo(46.6,9,47.9,11.8).curveTo(49.2,14.6,48.1,17.6).curveTo(47.3,19.7,45.5,21).lineTo(44.3,21.7).lineTo(44.3,21.8).lineTo(44.2,21.8).curveTo(43.5,22.1,42.7,22.3).lineTo(41.1,22.5).curveTo(39.8,22.5,38.5,22).closePath();
	this.shape_35.setTransform(66.3263,316.1247);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#CC6600").beginStroke().moveTo(-49.6,50.4).curveTo(-50.2,50.6,-50.8,49.8).curveTo(-51.3,48.9,-50.7,48.4).curveTo(-50.8,47.1,-49.1,46).curveTo(-46.7,44.5,-45.4,46.6).curveTo(-44.1,48.7,-46.5,50.3).curveTo(-47.5,50.9,-48.3,50.9).curveTo(-49,50.9,-49.6,50.4).closePath().moveTo(-38.2,49.1).curveTo(-39.3,49.1,-40.3,47.9).curveTo(-42.1,46.1,-40.1,45.1).curveTo(-38.9,44.5,-38,44.9).lineTo(-37.7,44.7).curveTo(-36.7,44.1,-35.9,44.1).curveTo(-36.3,43.9,-36.6,43.4).curveTo(-37.6,41.7,-35.8,40.6).curveTo(-35,40.1,-34.4,40.2).lineTo(-34.4,40.8).curveTo(-34.4,42.5,-33.8,43.9).lineTo(-33.8,43.9).curveTo(-34.5,44.4,-35.2,44.4).curveTo(-34.8,44.6,-34.5,44.9).lineTo(-34.4,44.8).curveTo(-33.8,44.6,-33.4,44.7).curveTo(-32.8,44.8,-32.5,45.4).curveTo(-32.2,45.8,-32.2,46.1).curveTo(-32.2,46.8,-32.9,47.2).curveTo(-33.2,47.5,-33.6,47.5).curveTo(-33.6,48.7,-34.9,49.5).curveTo(-35.8,50,-36.5,50).curveTo(-37.5,50,-38.2,49.1).closePath().moveTo(50.7,47.6).lineTo(50.7,47.6).lineTo(43.8,34.2).lineTo(43.8,34.1).lineTo(43.9,34.1).lineTo(44,34.1).lineTo(44,34.1).lineTo(50.9,47.5).lineTo(50.9,47.5).lineTo(50.8,47.6).lineTo(50.7,47.6).lineTo(50.7,47.6).closePath().moveTo(-27.2,46.4).curveTo(-29,44.4,-26.9,43.2).curveTo(-24.8,42.1,-23.3,43.9).curveTo(-21.9,45.7,-23.6,47.1).curveTo(-24.3,47.6,-25,47.6).curveTo(-26,47.6,-27.2,46.4).closePath().moveTo(54.3,45.8).lineTo(54.3,45.7).lineTo(53.7,44.8).lineTo(47.9,33.4).lineTo(47.4,32.4).lineTo(47.4,32.3).lineTo(47.5,32.3).lineTo(47.6,32.3).lineTo(47.6,32.3).lineTo(48.2,33.4).lineTo(53.9,44.5).lineTo(54.4,45.6).lineTo(54.5,45.7).lineTo(54.4,45.8).lineTo(54.3,45.8).lineTo(54.3,45.8).closePath().moveTo(-55.7,44.4).lineTo(-56,44).curveTo(-56.6,43.7,-57.1,42.9).curveTo(-58.2,41.2,-56.5,40.4).curveTo(-55,39.7,-54.1,40.9).curveTo(-52.8,40.5,-52,42.1).lineTo(-51.8,42.5).curveTo(-51.1,42.3,-50.7,43.2).curveTo(-50.1,44.3,-51.1,44.9).curveTo(-51.9,45.4,-52.5,45).lineTo(-52.7,45.1).curveTo(-53.4,45.5,-54,45.5).curveTo(-55,45.5,-55.7,44.4).closePath().moveTo(-33.4,43.2).curveTo(-34.4,41.6,-32.6,40.5).curveTo(-30.8,39.4,-29.8,41).curveTo(-28.8,42.5,-30.6,43.7).curveTo(-31.4,44.2,-32,44.2).curveTo(-32.8,44.2,-33.4,43.2).closePath().moveTo(58,44).lineTo(57.9,43.9).lineTo(51,30.6).lineTo(51,30.5).lineTo(51,30.5).lineTo(51.1,30.5).lineTo(51.2,30.5).lineTo(58.1,43.8).lineTo(58.1,43.9).lineTo(58.1,44).lineTo(58,44).lineTo(58,44).closePath().moveTo(-28.7,41.7).curveTo(-29.7,40.1,-28,38.9).curveTo(-26.2,37.8,-25.4,39.6).curveTo(-24.4,41.4,-26,42.4).curveTo(-26.6,42.7,-27.1,42.7).curveTo(-28,42.7,-28.7,41.7).closePath().moveTo(61.6,42.2).lineTo(61.5,42.1).lineTo(54.6,28.8).lineTo(54.6,28.7).lineTo(54.6,28.7).lineTo(54.7,28.7).lineTo(54.8,28.7).lineTo(61.7,42).lineTo(61.7,42.1).lineTo(61.6,42.2).lineTo(61.6,42.2).lineTo(61.6,42.2).closePath().moveTo(65.1,40.4).lineTo(65,40.3).lineTo(58.1,27).lineTo(58.1,26.9).lineTo(58.1,26.9).lineTo(58.2,26.9).lineTo(58.3,26.9).lineTo(65.2,40.2).lineTo(65.2,40.3).lineTo(65.2,40.4).lineTo(65.1,40.4).lineTo(65.1,40.4).closePath().moveTo(-57.8,39.4).curveTo(-59.2,39.9,-60.6,38.3).curveTo(-61.3,37.6,-61.4,37).lineTo(-61.7,37.1).curveTo(-62.7,37.7,-63.4,36.7).curveTo(-64.1,35.6,-62.9,34.8).curveTo(-61.8,34.1,-61.1,35.3).lineTo(-61,35.7).lineTo(-60.3,35.2).curveTo(-58.4,34.2,-57.1,35.7).curveTo(-56.1,35.6,-55.4,36.7).curveTo(-54.5,38.2,-56,39.2).curveTo(-56.6,39.6,-57.1,39.6).curveTo(-57.5,39.6,-57.8,39.4).closePath().moveTo(-75.9,37.4).curveTo(-78.1,35.2,-78.1,32.1).lineTo(-78.1,3.9).lineTo(-83,-6.3).curveTo(-81.6,-3.7,-78.8,-2.7).lineTo(-63.1,3.1).lineTo(-63.1,32.1).curveTo(-63.1,35.2,-65.3,37.4).curveTo(-67.5,39.6,-70.6,39.6).curveTo(-73.7,39.6,-75.9,37.4).closePath().moveTo(68.5,38.6).lineTo(68.5,38.5).lineTo(61.6,25.2).lineTo(61.6,25.1).lineTo(61.7,25).lineTo(61.8,25).lineTo(61.8,25.1).lineTo(68.7,38.4).lineTo(68.7,38.5).lineTo(68.6,38.5).lineTo(68.5,38.6).lineTo(68.5,38.6).closePath().moveTo(-51.9,38.2).curveTo(-52.5,38,-53.1,37.4).curveTo(-54.4,36,-52.9,35.2).curveTo(-52.5,35,-52.1,34.9).lineTo(-51.7,34.6).curveTo(-49.9,33.5,-48.8,35.1).curveTo(-47.7,36.8,-49.7,37.9).curveTo(-50.4,38.4,-51,38.4).curveTo(-51.5,38.4,-51.9,38.2).closePath().moveTo(72.2,36.8).lineTo(72.1,36.7).lineTo(65.2,23.4).lineTo(65.2,23.3).lineTo(65.2,23.2).lineTo(65.3,23.2).lineTo(65.4,23.3).lineTo(68.3,29).curveTo(68,27.8,67.9,26.5).lineTo(67.9,4).curveTo(68,0.9,70.1,-1.3).curveTo(72.3,-3.5,75.4,-3.5).curveTo(78.6,-3.5,80.7,-1.3).curveTo(82.9,0.9,83,4).lineTo(83,26.5).curveTo(82.9,29.6,80.7,31.8).curveTo(78.6,34,75.4,34).lineTo(75.3,34).lineTo(75.7,34.7).lineTo(75.7,34.8).lineTo(75.7,34.9).lineTo(75.5,34.9).lineTo(75.5,34.8).lineTo(75.1,34).curveTo(72.2,33.9,70.1,31.8).lineTo(69.3,30.8).lineTo(72.3,36.6).lineTo(72.3,36.7).lineTo(72.3,36.7).lineTo(72.2,36.8).lineTo(72.2,36.8).closePath().moveTo(13.2,22.8).curveTo(14.3,19.9,13,17.1).curveTo(11.6,14.3,8.7,13.2).lineTo(5.3,11.9).lineTo(20.9,2).curveTo(23.1,0.7,25.6,0.9).curveTo(25.3,0.2,25.5,-0.5).lineTo(27.3,-6.2).curveTo(27.5,-7,28.3,-7.4).curveTo(29,-7.8,29.8,-7.5).curveTo(30.6,-7.3,31,-6.5).curveTo(31.4,-5.8,31.1,-5).lineTo(29.3,0.7).curveTo(29.1,1.4,28.5,1.8).curveTo(30.2,2.7,31.2,4.4).curveTo(32.9,7.1,32.2,10.1).curveTo(31.5,13.1,28.9,14.7).lineTo(10.6,26.3).curveTo(12.4,25,13.2,22.8).closePath().moveTo(30.3,-9.4).curveTo(29.5,-9.6,29.2,-10.4).curveTo(28.7,-11.1,29,-11.9).lineTo(30.7,-17.6).curveTo(30.9,-18.4,31.7,-18.8).curveTo(32.4,-19.2,33.2,-18.9).curveTo(34,-18.7,34.4,-18).curveTo(34.8,-17.2,34.5,-16.4).lineTo(32.8,-10.7).curveTo(32.6,-9.9,31.9,-9.6).curveTo(31.4,-9.3,30.9,-9.3).lineTo(30.3,-9.4).closePath().moveTo(33.8,-20.8).curveTo(33,-21,32.6,-21.8).curveTo(31.7,-22.3,30.9,-23.1).curveTo(28.7,-25.3,28.6,-28.4).lineTo(28.6,-31.6).curveTo(28.6,-33.5,29.6,-35.3).curveTo(30.7,-37,32.4,-38).lineTo(37.9,-41.3).curveTo(36.6,-38.2,37.7,-34.9).curveTo(39,-31.1,42.5,-29.3).curveTo(44,-28.6,45.5,-28.4).lineTo(43.6,-27.2).curveTo(43.2,-24.9,41.5,-23.1).curveTo(39.3,-20.9,36.2,-20.9).lineTo(35.4,-21).lineTo(35.3,-20.9).curveTo(34.9,-20.7,34.4,-20.7).lineTo(33.8,-20.8).closePath().moveTo(-33.8,-35.9).curveTo(-36.9,-35.9,-39.1,-38.1).curveTo(-41.3,-40.3,-41.3,-43.4).curveTo(-41.3,-46.5,-39.1,-48.7).curveTo(-36.9,-50.9,-33.8,-50.9).lineTo(-25.3,-50.9).curveTo(-28.2,-50.8,-30.3,-48.7).curveTo(-32.6,-46.5,-32.6,-43.4).curveTo(-32.6,-40.3,-30.3,-38.1).curveTo(-28.2,-36,-25.3,-35.9).closePath();
	this.shape_36.setTransform(101.25,310.8574);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#00FF00").beginStroke().moveTo(-17.3,28.3).curveTo(-20.3,28.3,-22.4,26.2).curveTo(-24.6,23.9,-24.6,20.9).curveTo(-24.6,17.7,-22.4,15.6).curveTo(-20.3,13.4,-17.3,13.3).lineTo(-17.1,13.3).curveTo(-14,13.4,-11.8,15.6).curveTo(-9.6,17.7,-9.6,20.9).curveTo(-9.6,24,-11.8,26.2).curveTo(-14,28.3,-17.1,28.3).closePath().moveTo(-11,12.2).curveTo(-13.2,10.1,-13.2,6.9).curveTo(-13.2,3.9,-11,1.6).curveTo(-8.8,-0.5,-5.7,-0.5).curveTo(-2.6,-0.5,-0.4,1.6).curveTo(1.8,3.9,1.8,6.9).curveTo(1.8,10.1,-0.4,12.2).curveTo(-2.6,14.5,-5.7,14.5).curveTo(-8.8,14.5,-11,12.2).closePath().moveTo(0.4,-1.6).curveTo(-1.8,-3.9,-1.8,-6.9).curveTo(-1.8,-10.1,0.4,-12.2).curveTo(2.6,-14.5,5.7,-14.5).curveTo(8.8,-14.5,11,-12.2).curveTo(13.2,-10.1,13.2,-6.9).curveTo(13.2,-3.9,11,-1.6).curveTo(8.8,0.5,5.7,0.5).curveTo(2.6,0.5,0.4,-1.6).closePath().moveTo(11.8,-15.6).curveTo(9.6,-17.7,9.6,-20.9).curveTo(9.6,-23.9,11.8,-26.2).curveTo(12.5,-26.9,13.4,-27.4).curveTo(15,-28.4,17.1,-28.3).curveTo(20.2,-28.3,22.4,-26.2).curveTo(24.6,-23.9,24.6,-20.9).curveTo(24.6,-19.6,24.2,-18.4).curveTo(23.7,-16.8,22.4,-15.6).curveTo(20.2,-13.3,17.1,-13.3).curveTo(14,-13.3,11.8,-15.6).closePath();
	this.shape_37.setTransform(93.3,246.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("rgba(204,102,0,0.698)").beginStroke().moveTo(12.8,37).curveTo(11.2,36.8,9.8,36).curveTo(6.2,34.3,5,30.5).curveTo(3.9,27.2,5.2,24.1).lineTo(5.6,23.3).curveTo(8.6,17.2,8.3,9.8).curveTo(7.8,-1.3,1.9,-10.9).lineTo(1.9,-10.9).curveTo(-3.9,-19.8,-15.9,-17.4).lineTo(-16.4,-17.3).curveTo(-16.1,-18.4,-16.1,-19.7).curveTo(-16.1,-22.8,-18.3,-25).curveTo(-20.5,-27.2,-23.6,-27.2).curveTo(-25.6,-27.2,-27.3,-26.3).curveTo(-27.5,-29.3,-25.7,-32).curveTo(-23.5,-35.3,-19.7,-36.1).curveTo(6.1,-41.2,18.2,-20.8).lineTo(18.1,-20.8).curveTo(26.6,-7,27.3,9).lineTo(27.3,9).curveTo(27.7,21.6,22.5,31.9).curveTo(20.7,35.4,17,36.6).curveTo(15.5,37.1,14,37.1).lineTo(12.8,37).closePath();
	this.shape_38.setTransform(133.9697,245.4791);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).wait(2));

	// レイヤー_5
	this.instance_2 = new lib.bmp();
	this.instance_2.setTransform(46,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(292.8,204,245.2,157.8);
// library properties:
lib.properties = {
	id: '2FA8E0C7230941478CE2CA3DB82DBEDF',
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_atlas_1.png?1601433604756", id:"game_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;