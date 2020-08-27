/*!
 * @tawaship/pixim-animate-player.js - v1.0.0
 * 
 * @require pixi.js v5.3.2
 * @require @tawaship/pixim.js v1.6.1
 * @author tawaship (makazu.mori@gmail.com)
 * @license MIT
 */
this.Pixim = this.Pixim || {}, function(exports, pixi_js, _Pixim) {
    "use strict";
    Object.defineProperties(window, {
        playSound: {
            value: function(id, loop) {
                return void 0 === loop && (loop = !1), window.createjs.Sound.play(id, {
                    interrupt: window.createjs.Sound.INTERRUPT_EARLY,
                    loop: loop
                });
            }
        }
    });
    /*!
     * @tawaship/pixi-animate-core.js - v1.0.4
     * 
     * @require pixi.js v5.3.2
     * @author tawaship (makazu.mori@gmail.com)
     * @license MIT
     */
    var PixiMovieClip = function(Container) {
        function PixiMovieClip(cjs) {
            Container.call(this), this._createjs = cjs;
        }
        return Container && (PixiMovieClip.__proto__ = Container), PixiMovieClip.prototype = Object.create(Container && Container.prototype), 
        PixiMovieClip.prototype.constructor = PixiMovieClip, PixiMovieClip.prototype.getCreatejs = function() {
            return this._createjs;
        }, PixiMovieClip;
    }(pixi_js.Container), PixiSprite = function(Sprite) {
        function PixiSprite(cjs) {
            Sprite.call(this), this._createjs = cjs;
        }
        return Sprite && (PixiSprite.__proto__ = Sprite), PixiSprite.prototype = Object.create(Sprite && Sprite.prototype), 
        PixiSprite.prototype.constructor = PixiSprite, PixiSprite.prototype.getCreatejs = function() {
            return this._createjs;
        }, PixiSprite;
    }(pixi_js.Sprite), PixiShape = function(Container) {
        function PixiShape(cjs) {
            Container.call(this), this._createjs = cjs;
        }
        return Container && (PixiShape.__proto__ = Container), PixiShape.prototype = Object.create(Container && Container.prototype), 
        PixiShape.prototype.constructor = PixiShape, PixiShape.prototype.getCreatejs = function() {
            return this._createjs;
        }, PixiShape;
    }(pixi_js.Container), PixiGraphics = function(Graphics) {
        function PixiGraphics(cjs) {
            Graphics.call(this), this._createjs = cjs;
        }
        return Graphics && (PixiGraphics.__proto__ = Graphics), PixiGraphics.prototype = Object.create(Graphics && Graphics.prototype), 
        PixiGraphics.prototype.constructor = PixiGraphics, PixiGraphics.prototype.getCreatejs = function() {
            return this._createjs;
        }, PixiGraphics;
    }(pixi_js.Graphics), PixiTextContainer = function(Container) {
        function PixiTextContainer(cjs, text) {
            Container.call(this), this._createjs = cjs, this._text = text;
        }
        Container && (PixiTextContainer.__proto__ = Container), PixiTextContainer.prototype = Object.create(Container && Container.prototype), 
        PixiTextContainer.prototype.constructor = PixiTextContainer;
        var prototypeAccessors = {
            text: {
                configurable: !0
            }
        };
        return prototypeAccessors.text.get = function() {
            return this._text;
        }, PixiTextContainer.prototype.getCreatejs = function() {
            return this._createjs;
        }, Object.defineProperties(PixiTextContainer.prototype, prototypeAccessors), PixiTextContainer;
    }(pixi_js.Container), PixiButtonHelper = function(Container) {
        function PixiButtonHelper(cjs) {
            Container.call(this), this._createjs = cjs;
        }
        return Container && (PixiButtonHelper.__proto__ = Container), PixiButtonHelper.prototype = Object.create(Container && Container.prototype), 
        PixiButtonHelper.prototype.constructor = PixiButtonHelper, PixiButtonHelper.prototype.getCreatejs = function() {
            return this._createjs;
        }, PixiButtonHelper;
    }(pixi_js.Container), createjsOrigin = {
        DisplayObject: createjs.DisplayObject,
        MovieClip: createjs.MovieClip,
        Sprite: createjs.Sprite,
        Container: createjs.Container,
        Text: createjs.Text,
        Shape: createjs.Shape,
        Graphics: createjs.Graphics,
        ButtonHelper: createjs.ButtonHelper
    };
    var _isDown = !1, EventMap = {
        mousedown: {
            types: [ "pointerdown" ],
            factory: function(self, cb) {
                return function(e) {
                    e.currentTarget = e.currentTarget.getCreatejs(), e.target = e.target.getCreatejs();
                    var ev = e.data;
                    e.rawX = ev.global.x, e.rawY = ev.global.y, _isDown = !0, cb(e);
                };
            }
        },
        rollover: {
            types: [ "pointerover" ],
            factory: function(self, cb) {
                return function(e) {
                    e.currentTarget = e.currentTarget.getCreatejs(), e.target = e.target.getCreatejs();
                    var ev = e.data;
                    e.rawX = ev.global.x, e.rawY = ev.global.y, _isDown = !0, cb(e);
                };
            }
        },
        rollout: {
            types: [ "pointerout" ],
            factory: function(self, cb) {
                return function(e) {
                    e.currentTarget = e.currentTarget.getCreatejs(), e.target = e.currentTarget.getCreatejs();
                    var ev = e.data;
                    e.rawX = ev.global.x, e.rawY = ev.global.y, _isDown = !0, cb(e);
                };
            }
        },
        pressmove: {
            types: [ "pointermove" ],
            factory: function(self, cb) {
                return function(e) {
                    if (_isDown) {
                        e.currentTarget = self, e.target = e.target && e.target.getCreatejs();
                        var ev = e.data;
                        e.rawX = ev.global.x, e.rawY = ev.global.y, cb(e);
                    }
                };
            }
        },
        pressup: {
            types: [ "pointerup", "pointeupoutside" ],
            factory: function(self, cb) {
                return function(e) {
                    if (_isDown) {
                        e.currentTarget = self, _isDown = !1, e.target = e.target && e.target.getCreatejs();
                        var ev = e.data;
                        e.rawX = ev.global.x, e.rawY = ev.global.y, cb(e);
                    }
                };
            }
        }
    }, DEG_TO_RAD = Math.PI / 180, appendixDescriptor = {
        x: {
            get: function() {
                return this._originParams.x;
            },
            set: function(value) {
                return this._pixiData.instance.x = value, this._originParams.x = value;
            }
        },
        y: {
            get: function() {
                return this._originParams.y;
            },
            set: function(value) {
                return this._pixiData.instance.y = value, this._originParams.y = value;
            }
        },
        scaleX: {
            get: function() {
                return this._originParams.scaleX;
            },
            set: function(value) {
                return this._pixiData.instance.scale.x = value, this._originParams.scaleX = value;
            }
        },
        scaleY: {
            get: function() {
                return this._originParams.scaleY;
            },
            set: function(value) {
                return this._pixiData.instance.scale.y = value, this._originParams.scaleY = value;
            }
        },
        skewX: {
            get: function() {
                return this._originParams.skewX;
            },
            set: function(value) {
                return this._pixiData.instance.skew.x = -value * DEG_TO_RAD, this._originParams.skewX = value;
            }
        },
        skewY: {
            get: function() {
                return this._originParams.skewY;
            },
            set: function(value) {
                return this._pixiData.instance.skew.y = value * DEG_TO_RAD, this._originParams.skewY = value;
            }
        },
        regX: {
            get: function() {
                return this._originParams.regX;
            },
            set: function(value) {
                return this._pixiData.regObj.x = value, this._originParams.regX = value;
            }
        },
        regY: {
            get: function() {
                return this._originParams.regY;
            },
            set: function(value) {
                return this._pixiData.regObj.y = value, this._originParams.regY = value;
            }
        },
        rotation: {
            get: function() {
                return this._originParams.rotation;
            },
            set: function(value) {
                return this._pixiData.instance.rotation = value * DEG_TO_RAD, this._originParams.rotation = value;
            }
        },
        visible: {
            get: function() {
                return this._originParams.visible;
            },
            set: function(value) {
                return value = !!value, this._pixiData.instance.visible = value, this._originParams.visible = value;
            }
        },
        alpha: {
            get: function() {
                return this._originParams.alpha;
            },
            set: function(value) {
                return this._pixiData.instance.alpha = value, this._originParams.alpha = value;
            }
        },
        _off: {
            get: function() {
                return this._originParams._off;
            },
            set: function(value) {
                return this._pixiData.instance.renderable = !value, this._originParams._off = value;
            }
        },
        addEventListener: {
            value: function(type, cb) {
                if (cb instanceof Function) {
                    if (type in EventMap) {
                        for (var ev = EventMap[type], func = ev.factory(this, cb), types = ev.types, i = 0; i < types.length; i++) {
                            var t = types[i];
                            this._pixiData.events[t] = this._pixiData.events[t] || [], this._pixiData.events[t].push({
                                func: func,
                                origin: cb
                            }), this._pixiData.instance.on(t, func);
                        }
                        this._pixiData.instance.interactive = !0;
                    }
                    return createjsOrigin.DisplayObject.prototype.addEventListener.apply(this, arguments);
                }
            }
        },
        removeEventListener: {
            value: function(type, cb) {
                if (type in EventMap) {
                    for (var ev = EventMap[type], types = ev.types, i = 0; i < types.length; i++) {
                        var t = types[i], list = this._pixiData.events[t];
                        if (list) {
                            for (var j = list.length - 1; j >= 0; j--) {
                                if (list[j].origin === cb) {
                                    this._pixiData.instance.off(t, list[j].func), list.splice(j, 1);
                                    break;
                                }
                            }
                            0 === list.length && delete this._pixiData.events[t];
                        }
                    }
                }
                var res = createjsOrigin.DisplayObject.prototype.removeEventListener.apply(this, arguments), listeners = this._listeners;
                if (!listeners) {
                    return res;
                }
                for (var i$1 in EventMap) {
                    if (listeners[i$1] && listeners[i$1].length > 0) {
                        break;
                    }
                }
                return res;
            }
        },
        removeAllEventListeners: {
            value: function(type) {
                return this._pixiData.instance.removeAllListeners(type), this._pixi.instance.interactive = !1, 
                this._pixiData.events = {}, createjsOrigin.DisplayObject.prototype.removeAllEventListeners.apply(this, arguments);
            }
        },
        mask: {
            get: function() {
                return this._originParams.mask;
            },
            set: function(value) {
                return value ? (value._pixiData.masked.push(this._pixiData.instance), this._pixiData.instance.mask = value._pixiData.instance, 
                this._pixiData.instance.once("added", (function() {
                    this.parent.addChild(value._pixiData.instance);
                }))) : this._pixiData.instance.mask = null, this._originParams.mask = value;
            }
        },
        filters: {
            get: function() {
                return this._originParams.filters;
            },
            set: function(value) {
                if (this._pixiData.subInstance) {
                    if (value) {
                        for (var list = [], i = 0; i < value.length; i++) {
                            var f = value[i];
                            if (!(f instanceof createjs.ColorMatrixFilter)) {
                                var m = new pixi_js.filters.ColorMatrixFilter;
                                m.matrix = [ f.redMultiplier, 0, 0, 0, f.redOffset / 255, 0, f.greenMultiplier, 0, 0, f.greenOffset / 255, 0, 0, f.blueMultiplier, 0, f.blueOffset / 255, 0, 0, 0, f.alphaMultiplier, f.alphaOffset / 255, 0, 0, 0, 0, 1 ], 
                                list.push(m);
                            }
                        }
                        for (var o = this._pixiData.instance, c = o.children, n = new pixi_js.Container, nc = this._pixiData.subInstance = n.addChild(new pixi_js.Container); c.length; ) {
                            nc.addChild(c[0]);
                        }
                        o.addChild(n), o._filterContainer = nc, nc.updateTransform(), nc.calculateBounds();
                        var b = nc.getLocalBounds(), x = b.x, y = b.y;
                        for (i = 0; i < nc.children.length; i++) {
                            nc.children[i].x -= x, nc.children[i].y -= y, nc.children[i]._filterContainer && (nc.children[i]._filterContainer.cacheAsBitmap = !1);
                        }
                        n.x = x, n.y = y, nc.filters = list, nc.cacheAsBitmap = !0;
                    } else {
                        var o$1 = this._pixiData.instance;
                        if (o$1._filterContainer) {
                            var nc$1 = this._pixiData.subInstance, n$1 = nc$1.parent, c$1 = nc$1.children;
                            for (o$1.removeChildren(), o$1._filterContainer = null; c$1.length; ) {
                                var v = o$1.addChild(c$1[0]);
                                v.x += n$1.x, v.y += n$1.y;
                            }
                            nc$1.filters = null, nc$1.cacheAsBitmap = !1, this._pixiData.subInstance = o$1;
                        }
                    }
                }
                return this._originParams.filters = value;
            }
        },
        getPixi: {
            value: function() {
                return this._pixiData.instance;
            }
        }
    };
    function makeClass(parent, unuseAppendix) {
        void 0 === unuseAppendix && (unuseAppendix = !1);
        var CjsWrap = function(parent) {
            function CjsWrap() {
                parent.apply(this, arguments);
            }
            return parent && (CjsWrap.__proto__ = parent), CjsWrap.prototype = Object.create(parent && parent.prototype), 
            CjsWrap.prototype.constructor = CjsWrap, CjsWrap.prototype._overrideCreatejs = function(pixi) {
                !function(self, pixi) {
                    self._originParams = {
                        x: 0,
                        y: 0,
                        scaleX: 0,
                        scaleY: 0,
                        regx: 0,
                        regy: 0,
                        skewX: 0,
                        skewY: 0,
                        rotation: 0,
                        visible: !0,
                        alpha: 1,
                        _off: !1,
                        mask: null,
                        filters: null
                    }, self._pixiData = {
                        instance: pixi,
                        regObj: pixi.anchor || pixi.pivot,
                        events: {}
                    };
                }(this, pixi);
            }, CjsWrap;
        }(parent);
        return unuseAppendix || Object.defineProperties(CjsWrap.prototype, appendixDescriptor), 
        CjsWrap;
    }
    createjs.MovieClip = function(superclass) {
        function MovieClip() {
            this._overrideCreatejs(new PixiMovieClip(this)), superclass.apply(this, arguments);
        }
        return superclass && (MovieClip.__proto__ = superclass), MovieClip.prototype = Object.create(superclass && superclass.prototype), 
        MovieClip.prototype.constructor = MovieClip, MovieClip.prototype.initialize = function() {
            return this._overrideCreatejs(new PixiMovieClip(this)), this._pixiData.subInstance = this._pixiData.instance, 
            superclass.prototype.initialize.apply(this, arguments);
        }, MovieClip.prototype.addChild = function(child) {
            return this._pixiData.subInstance.addChild(child._pixiData.instance), superclass.prototype.addChild.call(this, child);
        }, MovieClip.prototype.addChildAt = function(child, index) {
            return this._pixiData.subInstance.addChildAt(child._pixiData.instance, index), superclass.prototype.addChildAt.call(this, child, index);
        }, MovieClip.prototype.removeChild = function(child) {
            return this._pixiData.subInstance.removeChild(child._pixiData.instance), superclass.prototype.removeChild.call(this, child);
        }, MovieClip.prototype.removeChildAt = function(index) {
            return this._pixiData.subInstance.removeChildAt(index), superclass.prototype.removeChildAt.call(this, index);
        }, MovieClip.prototype.removeAllChldren = function() {
            return this._pixiData.subInstance.removeChildren(), superclass.prototype.removeAllChldren.call(this);
        }, MovieClip;
    }(makeClass(createjsOrigin.MovieClip)), createjs.Sprite = function(superclass) {
        function Sprite() {
            this._overrideCreatejs(new PixiSprite(this)), superclass.apply(this, arguments);
        }
        return superclass && (Sprite.__proto__ = superclass), Sprite.prototype = Object.create(superclass && superclass.prototype), 
        Sprite.prototype.constructor = Sprite, Sprite.prototype.initialize = function() {
            return this._overrideCreatejs(new PixiSprite(this)), superclass.prototype.initialize.apply(this, arguments);
        }, Sprite.prototype.gotoAndStop = function() {
            superclass.prototype.gotoAndStop.apply(this, arguments);
            var frame = this.spriteSheet.getFrame(this.currentFrame), baseTexture = pixi_js.BaseTexture.from(frame.image), texture = new pixi_js.Texture(baseTexture, frame.rect);
            this._pixiData.instance.texture = texture;
        }, Sprite;
    }(makeClass(createjsOrigin.Sprite)), createjs.Shape = function(superclass) {
        function Shape() {
            this._overrideCreatejs(new PixiShape(this)), this._pixiData.masked = [], superclass.apply(this, arguments);
        }
        superclass && (Shape.__proto__ = superclass), Shape.prototype = Object.create(superclass && superclass.prototype), 
        Shape.prototype.constructor = Shape;
        var prototypeAccessors$1 = {
            graphics: {
                configurable: !0
            }
        };
        return prototypeAccessors$1.graphics.get = function() {
            return this._graphics;
        }, prototypeAccessors$1.graphics.set = function(value) {
            if (this._pixiData.masked.length) {
                if (this._pixiData.instance.removeChildren(), value) {
                    for (var i = 0; i < this._pixiData.masked.length; i++) {
                        this._pixiData.masked[i].mask = this._pixiData.instance;
                    }
                } else {
                    for (var i$1 = 0; i$1 < this._pixiData.masked.length; i$1++) {
                        this._pixiData.masked[i$1].mask = null;
                    }
                }
            }
            return value && this._pixiData.instance.addChild(value._pixiData.instance), this._graphics = value;
        }, Object.defineProperties(Shape.prototype, prototypeAccessors$1), Shape;
    }(makeClass(createjsOrigin.Shape)), createjs.Graphics = function(superclass) {
        function Graphics() {
            this._overrideCreatejs(new PixiGraphics(this)), this._pixiData.instance.beginFill(16772846, 1), 
            this._pixiData.strokeFill = 0, this._pixiData.strokeAlpha = 1, superclass.apply(this, arguments);
        }
        return superclass && (Graphics.__proto__ = superclass), Graphics.prototype = Object.create(superclass && superclass.prototype), 
        Graphics.prototype.constructor = Graphics, Graphics.prototype.moveTo = function(x, y) {
            return this._pixiData.instance.clone().endFill().containsPoint({
                x: x,
                y: y
            }) ? this._pixiData.instance.beginHole() : this._pixiData.instance.endHole(), this._pixiData.instance.moveTo(x, y), 
            superclass.prototype.moveTo.call(this, x, y);
        }, Graphics.prototype.lineTo = function(x, y) {
            return this._pixiData.instance.lineTo(x, y), superclass.prototype.lineTo.call(this, x, y);
        }, Graphics.prototype.arcTon = function(x1, y1, x2, y2, radius) {
            return this._pixiData.instance.arcTo(x1, y1, x2, y2, radius), superclass.prototype.arcTo.call(this, x1, y1, x2, y2, radius);
        }, Graphics.prototype.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
            return this._pixiData.instance.arc(x, y, radius, startAngle, endAngle, anticlockwise), 
            superclass.prototype.arc.call(this, x, y, radius, startAngle, endAngle, anticlockwise);
        }, Graphics.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
            return this._pixiData.instance.quadraticCurveTo(cpx, cpy, x, y), superclass.prototype.quadraticCurveTo.call(this, cpx, cpy, x, y);
        }, Graphics.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
            return this._pixiData.instance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y), superclass.prototype.bezierCurveTo.call(this, cp1x, cp1y, cp2x, cp2y, x, y);
        }, Graphics.prototype.rect = function(x, y, w, h) {
            return this._pixiData.instance.drawRect(x, y, w, h), superclass.prototype.rect.call(this, x, y, w, h);
        }, Graphics.prototype.closePath = function() {
            this._pixiData.instance.closePath();
            this._pixiData.instance.currentPath.points;
            return superclass.prototype.closePath.call(this);
        }, Graphics.prototype.clear = function() {
            return this._pixiData.instance.clear(), superclass.prototype.clear.call(this);
        }, Graphics.prototype._parseColor = function(color) {
            var res = {
                color: 0,
                alpha: 1
            };
            return color ? "#" === color.charAt(0) ? (res.color = parseInt(color.slice(1), 16), 
            res) : (color = color.replace(/rgba|\(|\)|\s/g, "").split(","), res.color = 65536 * Number(color[0]) + 256 * Number(color[1]) + Number(color[2]), 
            res.alpha = Number(color[3]), res) : (res.alpha = 0, res);
        }, Graphics.prototype.beginFill = function(color) {
            var c = this._parseColor(color);
            return this._pixiData.instance.beginFill(c.color, c.alpha), superclass.prototype.beginFill.call(this, color);
        }, Graphics.prototype.endFill = function() {
            return this._pixiData.instance.endFill(), superclass.prototype.endFill.call(this);
        }, Graphics.prototype.setStrokeStyle = function(thickness, caps, joints, miterLimit, ignoreScale) {
            return this._pixiData.instance.lineStyle({
                width: thickness,
                color: this._pixiData.strokeFill,
                alpha: this._pixiData.strokeAlpha,
                cap: caps in LineCap ? LineCap[caps] : caps,
                join: joints in LineJoin ? LineJoin[joints] : joints,
                miterLimit: miterLimit
            }), superclass.prototype.setStrokeStyle.call(this, thickness, caps, joints, miterLimit, ignoreScale);
        }, Graphics.prototype.beginStroke = function(color) {
            var c = this._parseColor(color);
            return this._pixiData.strokeFill = c.color, this._pixiData.strokeAlpha = c.alpha, 
            superclass.prototype.beginStroke.call(this, color);
        }, Graphics.prototype.drawRoundRect = function(x, y, w, h, radius) {
            return this._pixiData.instance.drawRoundedRect(x, y, w, h, radius), superclass.prototype.drawRoundRect.call(this, x, y, w, h, radius);
        }, Graphics.prototype.drawCircle = function(x, y, radius) {
            return this._pixiData.instance.drawCircle(x, y, radius), superclass.prototype.drawCircle.call(this, x, y, radius);
        }, Graphics.prototype.drawEllipse = function(x, y, w, h) {
            return this._pixiData.instance.drawEllipse(x, y, w, h), superclass.prototype.drawEllipse.call(this, x, y, w, h);
        }, Graphics.prototype.drawPolyStar = function(x, y, radius, sides, pointSize, angle) {
            return this._pixiData.instance.drawRegularPolygon(x, y, radius, sides, angle * DEG_TO_RAD), 
            superclass.prototype.drawPolyStar.call(this, x, y, radius, sides, pointSize, angle);
        }, Graphics;
    }(makeClass(createjsOrigin.Graphics));
    var LineCap = {
        0: pixi_js.LINE_JOIN.BUTT,
        1: pixi_js.LINE_JOIN.ROUND,
        2: pixi_js.LINE_JOIN.SQUARE
    }, LineJoin = {
        0: pixi_js.LINE_JOIN.MITER,
        1: pixi_js.LINE_JOIN.ROUND,
        2: pixi_js.LINE_JOIN.BEVEL
    };
    Object.defineProperties(createjs.Graphics.prototype, {
        curveTo: {
            value: createjs.Graphics.prototype.quadraticCurveTo
        },
        drawRect: {
            value: createjs.Graphics.prototype.rect
        },
        mt: {
            value: createjs.Graphics.prototype.moveTo
        },
        lt: {
            value: createjs.Graphics.prototype.lineTo
        },
        at: {
            value: createjs.Graphics.prototype.arcTo
        },
        bt: {
            value: createjs.Graphics.prototype.bezierCurveTo
        },
        qt: {
            value: createjs.Graphics.prototype.quadraticCurveTo
        },
        a: {
            value: createjs.Graphics.prototype.arc
        },
        r: {
            value: createjs.Graphics.prototype.rect
        },
        cp: {
            value: createjs.Graphics.prototype.closePath
        },
        c: {
            value: createjs.Graphics.prototype.clear
        },
        f: {
            value: createjs.Graphics.prototype.beginFill
        },
        ef: {
            value: createjs.Graphics.prototype.endFill
        },
        ss: {
            value: createjs.Graphics.prototype.setStrokeStyle
        },
        s: {
            value: createjs.Graphics.prototype.beginStroke
        },
        dr: {
            value: createjs.Graphics.prototype.drawRect
        },
        rr: {
            value: createjs.Graphics.prototype.drawRoundRect
        },
        dc: {
            value: createjs.Graphics.prototype.drawCircle
        },
        de: {
            value: createjs.Graphics.prototype.drawEllipse
        },
        dp: {
            value: createjs.Graphics.prototype.drawPolyStar
        }
    }), createjs.Text = function(superclass) {
        function Text$1(text, font, color) {
            var _font = this._parseFont(font), t = new pixi_js.Text(text, {
                fontSize: _font.fontSize,
                fontFamily: _font.fontFamily,
                fill: this._parseColor(color),
                wordWrap: !0
            });
            this._overrideCreatejs(new PixiTextContainer(this, t)), this._pixiData.instance.addChild(t), 
            this._originParams = Object.assign(this._originParams, {
                text: text,
                font: font,
                color: color,
                textAlign: "left",
                lineHeight: 0,
                lineWidth: 0
            }), superclass.apply(this, arguments);
        }
        superclass && (Text$1.__proto__ = superclass), Text$1.prototype = Object.create(superclass && superclass.prototype), 
        Text$1.prototype.constructor = Text$1;
        var prototypeAccessors$2 = {
            text: {
                configurable: !0
            },
            font: {
                configurable: !0
            },
            color: {
                configurable: !0
            },
            textAlign: {
                configurable: !0
            },
            lineHeight: {
                configurable: !0
            },
            lineWidth: {
                configurable: !0
            }
        };
        return prototypeAccessors$2.text.get = function() {
            return this._originParams.text;
        }, prototypeAccessors$2.text.set = function(text) {
            return this._pixiData.instance.text.text = text, this._align(this.textAlign), this._originParams.text = text;
        }, Text$1.prototype._parseFont = function(font) {
            var p = font.split(" ");
            return {
                fontSize: Number(p.shift().replace("px", "")),
                fontFamily: p.join(" ").replace(/'/g, "")
            };
        }, prototypeAccessors$2.font.get = function() {
            return this._originParams.font;
        }, prototypeAccessors$2.font.set = function(font) {
            var _font = this._parseFont(font);
            return this._pixiData.instance.text.style.fontSize = _font.fontSize, this._pixiData.instance.text.style.fontFamily = _font.fontFamily, 
            this._originParams.font = font;
        }, Text$1.prototype._parseColor = function(color) {
            return parseInt(color.slice(1), 16);
        }, prototypeAccessors$2.color.get = function() {
            return this._originParams.color;
        }, prototypeAccessors$2.color.set = function(color) {
            return this._pixiData.instance.text.style.fill = this._parseColor(color), this._originParams.color = color;
        }, Text$1.prototype._align = function(align) {
            "left" !== align ? "center" !== align ? "right" !== align || (this._pixiData.instance.text.x = -this.lineWidth) : this._pixiData.instance.text.x = -this.lineWidth / 2 : this._pixiData.instance.text.x = 0;
        }, prototypeAccessors$2.textAlign.get = function() {
            return this._originParams.textAlign;
        }, prototypeAccessors$2.textAlign.set = function(align) {
            return this._pixiData.instance.text.style.align = align, this._align(align), this._originParams.textAlign = align;
        }, prototypeAccessors$2.lineHeight.get = function() {
            return this._originParams.lineHeight;
        }, prototypeAccessors$2.lineHeight.set = function(height) {
            return this._pixiData.instance.text.lineHeight = height, this._originParams.lineHeight = height;
        }, prototypeAccessors$2.lineWidth.get = function() {
            return this._originParams.lineWidth;
        }, prototypeAccessors$2.lineWidth.set = function(width) {
            return this._pixiData.instance.text.lineWidthWrap = width, this._originParams.lineWidth = width;
        }, Object.defineProperties(Text$1.prototype, prototypeAccessors$2), Text$1;
    }(makeClass(createjsOrigin.Text)), createjs.ButtonHelper = function(superclass) {
        function ButtonHelper() {
            this._overrideCreatejs(new PixiButtonHelper(this));
            var createjs = arguments[0], pixi = createjs._pixiData.instance, baseFrame = arguments[1], overFrame = arguments[2], downFrame = arguments[3], hit = arguments[5], hitFrame = arguments[6];
            hit.gotoAndStop(hitFrame);
            var hitPixi = pixi.addChild(hit._pixiData.instance);
            hitPixi.alpha = 1e-5;
            var isOver = !1, isDown = !1;
            hitPixi.on("pointerover", (function() {
                isOver = !0, isDown ? createjs.gotoAndStop(downFrame) : createjs.gotoAndStop(overFrame);
            })), hitPixi.on("pointerout", (function() {
                isOver = !1, isDown ? createjs.gotoAndStop(overFrame) : createjs.gotoAndStop(baseFrame);
            })), hitPixi.on("pointerdown", (function() {
                isDown = !0, createjs.gotoAndStop(downFrame);
            })), hitPixi.on("pointerup", (function() {
                isDown = !1, isOver ? createjs.gotoAndStop(overFrame) : createjs.gotoAndStop(baseFrame);
            })), hitPixi.on("pointerupoutside", (function() {
                isDown = !1, isOver ? createjs.gotoAndStop(overFrame) : createjs.gotoAndStop(baseFrame);
            })), hitPixi.interactive = !0, hitPixi.cursor = "pointer", superclass.apply(this, arguments);
        }
        return superclass && (ButtonHelper.__proto__ = superclass), ButtonHelper.prototype = Object.create(superclass && superclass.prototype), 
        ButtonHelper.prototype.constructor = ButtonHelper, ButtonHelper;
    }(makeClass(createjsOrigin.ButtonHelper, !0));
    var Pixim, prepareAnimateAsync$1 = function(id, basepath) {
        var comp = window.AdobeAn.getComposition(id);
        if (!comp) {
            throw new Error("no composition");
        }
        var lib = comp.getLibrary();
        return new Promise((function(resolve, reject) {
            0 === lib.properties.manifest.length && resolve({});
            var loader = new window.createjs.LoadQueue(!1);
            if (loader.installPlugin(window.createjs.Sound), loader.addEventListener("fileload", (function(evt) {
                !function(evt, comp) {
                    var images = comp.getImages();
                    evt && "image" == evt.item.type && (images[evt.item.id] = evt.result);
                }(evt, comp);
            })), loader.addEventListener("complete", (function(evt) {
                resolve(evt);
            })), basepath) {
                basepath = (basepath + "/").replace(/([^\:])\/\//, "$1/");
                for (var m = lib.properties.manifest, i = 0; i < m.length; i++) {
                    m[i].src = basepath + m[i].src;
                }
            }
            loader.loadManifest(lib.properties.manifest);
        })).then((function(evt) {
            for (var ss = comp.getSpriteSheet(), queue = evt.target, ssMetadata = lib.ssMetadata, i = 0; i < ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new window.createjs.SpriteSheet({
                    images: [ queue.getResult(ssMetadata[i].name) ],
                    frames: ssMetadata[i].frames
                });
            }
            return lib;
        }));
    };
    !function(Pixim) {
        !function(animate) {
            var Player = function(superclass) {
                function Player(id, rootName, basepath, pixiOptions, piximOptions) {
                    void 0 === pixiOptions && (pixiOptions = {}), void 0 === piximOptions && (piximOptions = {});
                    var comp = window.AdobeAn.getComposition(id);
                    if (!comp) {
                        throw new Error("no composition");
                    }
                    var lib = comp.getLibrary(), root = lib[rootName];
                    if (!root) {
                        throw new Error("no root class");
                    }
                    var prop = lib.properties;
                    superclass.call(this, Object.assign(pixiOptions, {
                        width: prop.width,
                        height: prop.height,
                        backgroundColor: parseInt(prop.color.slice(1), 16)
                    }), piximOptions), this._id = id, this._rootClass = root, this._basepath = basepath, 
                    window.createjs.Ticker.framerate = prop.fps, this._handleTick = this._handleTick.bind(this);
                }
                return superclass && (Player.__proto__ = superclass), Player.prototype = Object.create(superclass && superclass.prototype), 
                Player.prototype.constructor = Player, Player.prototype.prepareAsync = function(options) {
                    var this$1 = this;
                    return void 0 === options && (options = {}), prepareAnimateAsync$1(this._id, this._basepath).then((function(lib) {
                        var exportRoot = new this$1._rootClass;
                        this$1._stage = new lib.Stage, function(stage, options) {
                            if (void 0 === options && (options = {}), options.useSynchedTimeline) {
                                function containerDrawFunction() {
                                    for (var list = this.children.slice(), i = 0, l = list.length; i < l; i++) {
                                        var child = list[i];
                                        child.isVisible() && child.draw();
                                    }
                                    return !0;
                                }
                                Object.defineProperties(window.createjs.MovieClip.prototype, {
                                    draw: {
                                        value: function() {
                                            return this._updateState(), this._containerDraw();
                                        }
                                    },
                                    _containerDraw: {
                                        value: containerDrawFunction
                                    }
                                });
                                var imageDescriptors = {
                                    draw: {
                                        value: function() {
                                            return !0;
                                        }
                                    }
                                };
                                Object.defineProperties(window.createjs.Sprite.prototype, imageDescriptors), Object.defineProperties(window.createjs.Graphics.prototype, imageDescriptors), 
                                Object.defineProperties(window.createjs.Shape.prototype, imageDescriptors), Object.defineProperties(window.createjs.Text.prototype, imageDescriptors), 
                                Object.defineProperties(window.createjs.Bitmap.prototype, imageDescriptors), stage.update = function(props) {
                                    this.tickOnUpdate && this.tick(props), this.dispatchEvent("drawstart"), this.autoClear && this.clear(), 
                                    this._webGLContext ? (this._batchDraw(this, this._webGLContext), -1 == this._autoPurge || this._drawID % (this._autoPurge / 2 | 0) || this.purgeTextures(this._autoPurge)) : this.draw(), 
                                    this.dispatchEvent("drawend");
                                }, stage.draw = containerDrawFunction, stage._updateFunction = stage.update;
                            } else {
                                stage._updateFunction = stage.tick;
                            }
                            stage._handleTick ? stage._tickFunction = function(e) {
                                stage._updateFunction(), stage._handleTick();
                            } : stage._tickFunction = function(e) {
                                stage._updateFunction();
                            };
                        }(this$1._stage, options), Object.defineProperties(window, {
                            exportRoot: {
                                value: exportRoot
                            },
                            stage: {
                                value: this$1._stage
                            }
                        }), window.AdobeAn.compositionLoaded(lib.properties.id);
                        var Content = _Pixim.Content.create();
                        Content.defineLibraries({
                            root: function(superclass) {
                                function Root($) {
                                    superclass.call(this), this.addChild($.vars.root);
                                }
                                return superclass && (Root.__proto__ = superclass), Root.prototype = Object.create(superclass && superclass.prototype), 
                                Root.prototype.constructor = Root, Root;
                            }(_Pixim.Container)
                        });
                        var content = new Content;
                        return content.addVars({
                            root: exportRoot.getPixi()
                        }), this$1.app.render(), this$1._stage.addChild(exportRoot), this$1.attachAsync(content);
                    }));
                }, Player.prototype.play = function() {
                    return window.createjs.Ticker.addEventListener("tick", this._handleTick), this;
                }, Player.prototype.stop = function() {
                    return window.createjs.Ticker.removeEventListener("tick", this._handleTick), this;
                }, Player.prototype._handleTick = function() {
                    this._stage._tickFunction(), this.app.render();
                }, Player;
            }(_Pixim.Application);
            animate.Player = Player;
        }(Pixim.animate || (Pixim.animate = {}));
    }(Pixim || (Pixim = {}));
    var Player = Pixim.animate.Player;
    exports.Player = Player;
}(this.Pixim.animate = this.Pixim.animate || {}, PIXI, Pixim);
//# sourceMappingURL=Pixim-animate-player.js.map
