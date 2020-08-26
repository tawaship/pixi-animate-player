/*!
 * @tawaship/pixim-createjs-player.js - v1.0.0
 * 
 * @require pixi.js v5.3.2
 * @require @tawaship/pixim.js v1.6.1
 * @author tawaship (makazu.mori@gmail.com)
 * @license MIT
 */
this.Pixim = this.Pixim || {}, function(exports, _Pixim) {
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
     * @tawaship/pixi-createjs-core.js - v1.0.4
     * 
     * @require pixi.js v5.3.2
     * @author tawaship (makazu.mori@gmail.com)
     * @license MIT
     */
    var createjsOrigin = {
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
                    e.currentTarget = e.currentTarget._createjs, e.target = e.target._createjs;
                    var ev = e.data;
                    e.rawX = ev.global.x, e.rawY = ev.global.y, _isDown = !0, cb(e);
                };
            }
        },
        rollover: {
            types: [ "pointerover" ],
            factory: function(self, cb) {
                return function(e) {
                    e.currentTarget = e.currentTarget._createjs, e.target = e.target._createjs;
                    var ev = e.data;
                    e.rawX = ev.global.x, e.rawY = ev.global.y, _isDown = !0, cb(e);
                };
            }
        },
        rollout: {
            types: [ "pointerout" ],
            factory: function(self, cb) {
                return function(e) {
                    e.currentTarget = e.currentTarget._createjs, e.target = e.currentTarget._createjs;
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
                        e.currentTarget = self, e.target = e.target && e.target._createjs;
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
                        e.currentTarget = self, _isDown = !1, e.target = e.target && e.target._createjs;
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
                                var m = new PIXI.filters.ColorMatrixFilter;
                                m.matrix = [ f.redMultiplier, 0, 0, 0, f.redOffset / 255, 0, f.greenMultiplier, 0, 0, f.greenOffset / 255, 0, 0, f.blueMultiplier, 0, f.blueOffset / 255, 0, 0, 0, f.alphaMultiplier, f.alphaOffset / 255, 0, 0, 0, 0, 1 ], 
                                list.push(m);
                            }
                        }
                        for (var o = this._pixiData.instance, c = o.children, n = new PIXI.Container, nc = this._pixiData.subInstance = n.addChild(new PIXI.Container); c.length; ) {
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
            CjsWrap.prototype.constructor = CjsWrap, CjsWrap.prototype._overrideCreatejs = function(pixiClass) {
                var self, pixi;
                self = this, pixi = new pixiClass, self._originParams = {
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
                }, pixi._createjs = self, self._pixiData = {
                    instance: pixi,
                    regObj: pixi.anchor || pixi.pivot,
                    events: {}
                };
            }, CjsWrap;
        }(parent);
        return unuseAppendix || Object.defineProperties(CjsWrap.prototype, appendixDescriptor), 
        CjsWrap;
    }
    createjs.MovieClip = function(superclass) {
        function MovieClip() {
            this._overrideCreatejs(PIXI.Container), superclass.apply(this, arguments);
        }
        return superclass && (MovieClip.__proto__ = superclass), MovieClip.prototype = Object.create(superclass && superclass.prototype), 
        MovieClip.prototype.constructor = MovieClip, MovieClip.prototype.initialize = function() {
            return this._overrideCreatejs(PIXI.Container), this._pixiData.subInstance = this._pixiData.instance, 
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
            this._overrideCreatejs(PIXI.Sprite), superclass.apply(this, arguments);
        }
        return superclass && (Sprite.__proto__ = superclass), Sprite.prototype = Object.create(superclass && superclass.prototype), 
        Sprite.prototype.constructor = Sprite, Sprite.prototype.initialize = function() {
            return this._overrideCreatejs(PIXI.Sprite), superclass.prototype.initialize.apply(this, arguments);
        }, Sprite.prototype.gotoAndStop = function() {
            superclass.prototype.gotoAndStop.apply(this, arguments);
            var frame = this.spriteSheet.getFrame(this.currentFrame), baseTexture = PIXI.BaseTexture.from(frame.image), texture = new PIXI.Texture(baseTexture, frame.rect);
            this._pixiData.instance.texture = texture;
        }, Sprite;
    }(makeClass(createjsOrigin.Sprite)), createjs.Shape = function(superclass) {
        function Sprite() {
            this._overrideCreatejs(PIXI.Container), this._pixiData.masked = [], superclass.apply(this, arguments);
        }
        superclass && (Sprite.__proto__ = superclass), Sprite.prototype = Object.create(superclass && superclass.prototype), 
        Sprite.prototype.constructor = Sprite;
        var prototypeAccessors = {
            graphics: {
                configurable: !0
            }
        };
        return prototypeAccessors.graphics.get = function() {
            return this._graphics;
        }, prototypeAccessors.graphics.set = function(value) {
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
        }, Object.defineProperties(Sprite.prototype, prototypeAccessors), Sprite;
    }(makeClass(createjsOrigin.Shape)), createjs.Graphics = function(superclass) {
        function Sprite() {
            this._overrideCreatejs(PIXI.Graphics), this._pixiData.instance.beginFill(16772846, 1), 
            this._pixiData.strokeFill = 0, this._pixiData.strokeAlpha = 1, superclass.apply(this, arguments);
        }
        return superclass && (Sprite.__proto__ = superclass), Sprite.prototype = Object.create(superclass && superclass.prototype), 
        Sprite.prototype.constructor = Sprite, Sprite.prototype.moveTo = function(x, y) {
            return this._pixiData.instance.clone().endFill().containsPoint({
                x: x,
                y: y
            }) ? this._pixiData.instance.beginHole() : this._pixiData.instance.endHole(), this._pixiData.instance.moveTo(x, y), 
            superclass.prototype.moveTo.call(this, x, y);
        }, Sprite.prototype.lineTo = function(x, y) {
            return this._pixiData.instance.lineTo(x, y), superclass.prototype.lineTo.call(this, x, y);
        }, Sprite.prototype.arcTon = function(x1, y1, x2, y2, radius) {
            return this._pixiData.instance.arcTo(x1, y1, x2, y2, radius), superclass.prototype.arcTo.call(this, x1, y1, x2, y2, radius);
        }, Sprite.prototype.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
            return this._pixiData.instance.arc(x, y, radius, startAngle, endAngle, anticlockwise), 
            superclass.prototype.arc.call(this, x, y, radius, startAngle, endAngle, anticlockwise);
        }, Sprite.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
            return this._pixiData.instance.quadraticCurveTo(cpx, cpy, x, y), superclass.prototype.quadraticCurveTo.call(this, cpx, cpy, x, y);
        }, Sprite.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
            return this._pixiData.instance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y), superclass.prototype.bezierCurveTo.call(this, cp1x, cp1y, cp2x, cp2y, x, y);
        }, Sprite.prototype.rect = function(x, y, w, h) {
            return this._pixiData.instance.drawRect(x, y, w, h), superclass.prototype.rect.call(this, x, y, w, h);
        }, Sprite.prototype.closePath = function() {
            this._pixiData.instance.closePath();
            this._pixiData.instance.currentPath.points;
            return superclass.prototype.closePath.call(this);
        }, Sprite.prototype.clear = function() {
            return this._pixiData.instance.clear(), superclass.prototype.clear.call(this);
        }, Sprite.prototype._parseColor = function(color) {
            var res = {
                color: 0,
                alpha: 1
            };
            return color ? "#" === color.charAt(0) ? (res.color = parseInt(color.slice(1), 16), 
            res) : (color = color.replace(/rgba|\(|\)|\s/g, "").split(","), res.color = 65536 * Number(color[0]) + 256 * Number(color[1]) + Number(color[2]), 
            res.alpha = Number(color[3]), res) : (res.alpha = 0, res);
        }, Sprite.prototype.beginFill = function(color) {
            var c = this._parseColor(color);
            return this._pixiData.instance.beginFill(c.color, c.alpha), superclass.prototype.beginFill.call(this, color);
        }, Sprite.prototype.endFill = function() {
            return this._pixiData.instance.endFill(), superclass.prototype.endFill.call(this);
        }, Sprite.prototype.setStrokeStyle = function(thickness, caps, joints, miterLimit, ignoreScale) {
            return this._pixiData.instance.lineStyle({
                width: thickness,
                color: this._pixiData.strokeFill,
                alpha: this._pixiData.strokeAlpha,
                cap: caps in LineCap ? LineCap[caps] : caps,
                join: joints in LineJoin ? LineJoin[joints] : joints,
                miterLimit: miterLimit
            }), superclass.prototype.setStrokeStyle.call(this, thickness, caps, joints, miterLimit, ignoreScale);
        }, Sprite.prototype.beginStroke = function(color) {
            var c = this._parseColor(color);
            return this._pixiData.strokeFill = c.color, this._pixiData.strokeAlpha = c.alpha, 
            superclass.prototype.beginStroke.call(this, color);
        }, Sprite.prototype.drawRoundRect = function(x, y, w, h, radius) {
            return this._pixiData.instance.drawRoundedRect(x, y, w, h, radius), superclass.prototype.drawRoundRect.call(this, x, y, w, h, radius);
        }, Sprite.prototype.drawCircle = function(x, y, radius) {
            return this._pixiData.instance.drawCircle(x, y, radius), superclass.prototype.drawCircle.call(this, x, y, radius);
        }, Sprite.prototype.drawEllipse = function(x, y, w, h) {
            return this._pixiData.instance.drawEllipse(x, y, w, h), superclass.prototype.drawEllipse.call(this, x, y, w, h);
        }, Sprite.prototype.drawPolyStar = function(x, y, radius, sides, pointSize, angle) {
            return this._pixiData.instance.drawRegularPolygon(x, y, radius, sides, angle * DEG_TO_RAD), 
            superclass.prototype.drawPolyStar.call(this, x, y, radius, sides, pointSize, angle);
        }, Sprite;
    }(makeClass(createjsOrigin.Graphics));
    var LineCap = {
        0: PIXI.LINE_JOIN.BUTT,
        1: PIXI.LINE_JOIN.ROUND,
        2: PIXI.LINE_JOIN.SQUARE
    }, LineJoin = {
        0: PIXI.LINE_JOIN.MITER,
        1: PIXI.LINE_JOIN.ROUND,
        2: PIXI.LINE_JOIN.BEVEL
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
        function Sprite(text, font, color) {
            this._overrideCreatejs(PIXI.Container), this._originParams = Object.assign(this._originParams, {
                text: text,
                font: font,
                color: color,
                textAlign: "left",
                lineHeight: 0,
                lineWidth: 0
            });
            var _font = this._parseFont(font);
            this._pixiData.instance.text = this._pixiData.instance.addChild(new PIXI.Text(text, {
                fontSize: _font.fontSize,
                fontFamily: _font.fontFamily,
                fill: this._parseColor(color),
                wordWrap: !0
            })), superclass.apply(this, arguments);
        }
        superclass && (Sprite.__proto__ = superclass), Sprite.prototype = Object.create(superclass && superclass.prototype), 
        Sprite.prototype.constructor = Sprite;
        var prototypeAccessors$1 = {
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
        return prototypeAccessors$1.text.get = function() {
            return this._originParams.text;
        }, prototypeAccessors$1.text.set = function(text) {
            return this._pixiData.instance.text.text = text, this._align(this.textAlign), this._originParams.text = text;
        }, Sprite.prototype._parseFont = function(font) {
            var p = font.split(" ");
            return {
                fontSize: Number(p.shift().replace("px", "")),
                fontFamily: p.join(" ").replace(/'/g, "")
            };
        }, prototypeAccessors$1.font.get = function() {
            return this._originParams.font;
        }, prototypeAccessors$1.font.set = function(font) {
            var _font = this._parseFont(font);
            return this._pixiData.instance.text.style.fontSize = _font.fontSize, this._pixiData.instance.text.style.fontFamily = _font.fontFamily, 
            this._originParams.font = font;
        }, Sprite.prototype._parseColor = function(color) {
            return parseInt(color.slice(1), 16);
        }, prototypeAccessors$1.color.get = function() {
            return this._originParams.color;
        }, prototypeAccessors$1.color.set = function(color) {
            return this._pixiData.instance.text.style.fill = this._parseColor(color), this._originParams.color = color;
        }, Sprite.prototype._align = function(align) {
            "left" !== align ? "center" !== align ? "right" !== align || (this._pixiData.instance.text.x = -this.lineWidth) : this._pixiData.instance.text.x = -this.lineWidth / 2 : this._pixiData.instance.text.x = 0;
        }, prototypeAccessors$1.textAlign.get = function() {
            return this._originParams.textAlign;
        }, prototypeAccessors$1.textAlign.set = function(align) {
            return this._pixiData.instance.text.style.align = align, this._align(align), this._originParams.textAlign = align;
        }, prototypeAccessors$1.lineHeight.get = function() {
            return this._originParams.lineHeight;
        }, prototypeAccessors$1.lineHeight.set = function(height) {
            return this._pixiData.instance.text.lineHeight = height, this._originParams.lineHeight = height;
        }, prototypeAccessors$1.lineWidth.get = function() {
            return this._originParams.lineWidth;
        }, prototypeAccessors$1.lineWidth.set = function(width) {
            return this._pixiData.instance.text.lineWidthWrap = width, this._originParams.lineWidth = width;
        }, Object.defineProperties(Sprite.prototype, prototypeAccessors$1), Sprite;
    }(makeClass(createjsOrigin.Text)), createjs.ButtonHelper = function(superclass) {
        function Sprite() {
            this._overrideCreatejs(PIXI.Container);
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
        return superclass && (Sprite.__proto__ = superclass), Sprite.prototype = Object.create(superclass && superclass.prototype), 
        Sprite.prototype.constructor = Sprite, Sprite;
    }(makeClass(createjsOrigin.ButtonHelper, !0));
    var Pixim, prepareCreatejsAsync$1 = function(id, basepath) {
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
        !function(createjs) {
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
                    return void 0 === options && (options = {}), prepareCreatejsAsync$1(this._id, this._basepath).then((function(lib) {
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
            createjs.Player = Player;
        }(Pixim.createjs || (Pixim.createjs = {}));
    }(Pixim || (Pixim = {}));
    var Player = Pixim.createjs.Player;
    exports.Player = Player;
}(this.Pixim.createjs = this.Pixim.createjs || {}, Pixim);
//# sourceMappingURL=Pixim-createjs-player.js.map
