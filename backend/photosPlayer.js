/*publicalbum.org v1.1.8 (c)pavex*/
(function() {
    var f, h = this;

    function l(a) {
        return void 0 !== a
    }

    function m(a) {
        return "string" == typeof a
    }

    function aa() {}

    function ba(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ca(a) {
        return "array" == ba(a)
    }

    function da(a) {
        var b = ba(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function n(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
        fa = 0;

    function ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ia(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function ja(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja = ha : ja = ia;
        return ja.apply(null, arguments)
    }
    var ka = Date.now || function() {
        return +new Date
    };

    function q(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.i = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.rb = function(a, c, g) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var la;
    var ma = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        na = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = m(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
        };

    function oa(a, b) {
        0 <= ma(a, b) || a.push(b)
    }

    function pa(a, b) {
        b = ma(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function qa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function ra(a, b, c, d) {
        Array.prototype.splice.apply(a, sa(arguments, 1))
    }

    function sa(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    var ta = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function ua(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function va(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }

    function wa(a) {
        var b = m(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };

    function xa(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function ya(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function r(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }
    var za = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Aa(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var g = 0; g < za.length; g++) c = za[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function t(a, b) {
        this.a = l(a) ? a : 0;
        this.b = l(b) ? b : 0
    }
    t.prototype.toString = function() {
        return "(" + this.a + ", " + this.b + ")"
    };
    t.prototype.ceil = function() {
        this.a = Math.ceil(this.a);
        this.b = Math.ceil(this.b);
        return this
    };
    t.prototype.floor = function() {
        this.a = Math.floor(this.a);
        this.b = Math.floor(this.b);
        return this
    };
    t.prototype.round = function() {
        this.a = Math.round(this.a);
        this.b = Math.round(this.b);
        return this
    };

    function u(a, b, c, d) {
        this.h = a;
        this.g = b;
        this.a = c;
        this.b = d
    }
    u.prototype.toString = function() {
        return "(" + this.h + "t, " + this.g + "r, " + this.a + "b, " + this.b + "l)"
    };
    u.prototype.ceil = function() {
        this.h = Math.ceil(this.h);
        this.g = Math.ceil(this.g);
        this.a = Math.ceil(this.a);
        this.b = Math.ceil(this.b);
        return this
    };
    u.prototype.floor = function() {
        this.h = Math.floor(this.h);
        this.g = Math.floor(this.g);
        this.a = Math.floor(this.a);
        this.b = Math.floor(this.b);
        return this
    };
    u.prototype.round = function() {
        this.h = Math.round(this.h);
        this.g = Math.round(this.g);
        this.a = Math.round(this.a);
        this.b = Math.round(this.b);
        return this
    };
    var v;
    a: {
        var Ba = h.navigator;
        if (Ba) {
            var Ca = Ba.userAgent;
            if (Ca) {
                v = Ca;
                break a
            }
        }
        v = ""
    }

    function w(a) {
        return -1 != v.indexOf(a)
    };

    function Da() {
        return w("iPhone") && !w("iPod") && !w("iPad")
    };

    function Ea() {
        return w("Safari") && !(Fa() || w("Coast") || w("Opera") || w("Edge") || w("Silk") || w("Android"))
    }

    function Fa() {
        return (w("Chrome") || w("CriOS")) && !w("Edge")
    }

    function Ga() {
        return w("Android") && !(Fa() || w("Firefox") || w("Opera") || w("Silk"))
    };

    function Ha(a) {
        Ha[" "](a);
        return a
    }
    Ha[" "] = aa;

    function Ia(a, b) {
        var c = Ja;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Ka = w("Opera"),
        x = w("Trident") || w("MSIE"),
        La = w("Edge"),
        Ma = w("Gecko") && !(-1 != v.toLowerCase().indexOf("webkit") && !w("Edge")) && !(w("Trident") || w("MSIE")) && !w("Edge"),
        Na = -1 != v.toLowerCase().indexOf("webkit") && !w("Edge"),
        Oa = w("Macintosh"),
        Pa = w("Windows"),
        Qa = w("Android"),
        Ra = Da(),
        Sa = w("iPad"),
        Ta = w("iPod");

    function Ua() {
        var a = h.document;
        return a ? a.documentMode : void 0
    }
    var Va;
    a: {
        var Wa = "",
            Xa = function() {
                var a = v;
                if (Ma) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (La) return /Edge\/([\d\.]+)/.exec(a);
                if (x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Na) return /WebKit\/(\S+)/.exec(a);
                if (Ka) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        Xa && (Wa = Xa ? Xa[1] : "");
        if (x) {
            var Ya = Ua();
            if (null != Ya && Ya > parseFloat(Wa)) {
                Va = String(Ya);
                break a
            }
        }
        Va = Wa
    }
    var Ja = {};

    function Za(a) {
        return Ia(a, function() {
            for (var b = 0, c = ta(String(Va)).split("."), d = ta(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
                var k = c[g] || "",
                    p = d[g] || "";
                do {
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    p = /(\d*)(\D*)(.*)/.exec(p) || ["", "", "", ""];
                    if (0 == k[0].length && 0 == p[0].length) break;
                    b = ua(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || ua(0 == k[2].length, 0 == p[2].length) || ua(k[2], p[2]);
                    k = k[3];
                    p = p[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var $a;
    var ab = h.document;
    $a = ab && x ? Ua() || ("CSS1Compat" == ab.compatMode ? parseInt(Va, 10) : 5) : void 0;

    function y(a, b) {
        this.width = a;
        this.height = b
    }
    f = y.prototype;
    f.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    f.aspectRatio = function() {
        return this.width / this.height
    };
    f.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    f.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    f.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function z(a, b, c, d) {
        this.C = a;
        this.D = b;
        this.width = c;
        this.height = d
    }
    z.prototype.toString = function() {
        return "(" + this.C + ", " + this.D + " - " + this.width + "w x " + this.height + "h)"
    };
    z.prototype.ceil = function() {
        this.C = Math.ceil(this.C);
        this.D = Math.ceil(this.D);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    z.prototype.floor = function() {
        this.C = Math.floor(this.C);
        this.D = Math.floor(this.D);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    z.prototype.round = function() {
        this.C = Math.round(this.C);
        this.D = Math.round(this.D);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var bb = x || Ka || Na;

    function cb(a) {
        return a ? new db(eb(a)) : la || (la = new db)
    }

    function fb(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new y(a.clientWidth, a.clientHeight)
    }

    function gb(a, b, c) {
        function d(c) {
            c && b.appendChild(m(c) ? a.createTextNode(c) : c)
        }
        for (var e = 1; e < c.length; e++) {
            var g = c[e];
            if (!da(g) || n(g) && 0 < g.nodeType) d(g);
            else {
                a: {
                    if (g && "number" == typeof g.length) {
                        if (n(g)) {
                            var k = "function" == typeof g.item || "string" == typeof g.item;
                            break a
                        }
                        if ("function" == ba(g)) {
                            k = "function" == typeof g.item;
                            break a
                        }
                    }
                    k = !1
                }
                na(k ? qa(g) : g, d)
            }
        }
    }

    function A(a, b) {
        return a.createElement(String(b))
    }

    function eb(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function hb(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }

    function db(a) {
        this.a = a || h.document || document
    }
    f = db.prototype;
    f.c = function() {
        return m(void 0) ? this.a.getElementById(void 0) : void 0
    };
    f.getElementsByTagName = function(a, b) {
        return (b || this.a).getElementsByTagName(String(a))
    };
    f.appendChild = function(a, b) {
        a.appendChild(b)
    };
    f.append = function(a, b) {
        gb(eb(a), a, arguments)
    };
    f.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    f.Pa = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };

    function B(a, b, c) {
        if (m(b))(b = ib(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    g = ib(c, d);
                g && (c.style[g] = e)
            }
    }
    var jb = {};

    function ib(a, b) {
        var c = jb[b];
        if (!c) {
            var d = va(b);
            c = d;
            void 0 === a.style[d] && (d = (Na ? "Webkit" : Ma ? "Moz" : x ? "ms" : Ka ? "O" : null) + wa(d), void 0 !== a.style[d] && (c = d));
            jb[b] = c
        }
        return c
    }

    function kb(a) {
        var b = a.style[va("height")];
        return "undefined" !== typeof b ? b : a.style[ib(a, "height")] || ""
    }

    function C(a, b) {
        var c = eb(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function lb(a, b) {
        if (b instanceof y) {
            var c = b.height;
            b = b.width
        } else throw Error("missing height argument");
        a.style.width = mb(b, !0);
        a.style.height = mb(c, !0)
    }

    function mb(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function nb(a, b) {
        a = a.style;
        "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
    }

    function ob(a, b) {
        a.style.display = b ? "" : "none"
    }

    function pb(a) {
        var b = eb(a),
            c = x && a.currentStyle;
        if (c && "CSS1Compat" == cb(b).a.compatMode && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = qb(a, c.width, "width", "pixelWidth"), a = qb(a, c.height, "height", "pixelHeight"), new y(b, a);
        c = new y(a.offsetWidth, a.offsetHeight);
        if (x) {
            b = rb(a, "paddingLeft");
            var d = rb(a, "paddingRight"),
                e = rb(a, "paddingTop"),
                g = rb(a, "paddingBottom");
            b = new u(e, d, g, b)
        } else b = C(a, "paddingLeft"), d = C(a, "paddingRight"), e = C(a, "paddingTop"), g = C(a, "paddingBottom"), b = new u(parseFloat(e), parseFloat(d),
            parseFloat(g), parseFloat(b));
        !x || 9 <= Number($a) ? (d = C(a, "borderLeftWidth"), e = C(a, "borderRightWidth"), g = C(a, "borderTopWidth"), a = C(a, "borderBottomWidth"), a = new u(parseFloat(g), parseFloat(e), parseFloat(a), parseFloat(d))) : (d = sb(a, "borderLeft"), e = sb(a, "borderRight"), g = sb(a, "borderTop"), a = sb(a, "borderBottom"), a = new u(g, e, a, d));
        return new y(c.width - a.b - b.b - b.g - a.g, c.height - a.h - b.h - b.a - a.a)
    }

    function qb(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var e = a.style[c],
            g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = g;
        return +b
    }

    function rb(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? qb(a, b, "left", "pixelLeft") : 0
    }
    var tb = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function sb(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in tb ? tb[b] : qb(a, b, "left", "pixelLeft")
    };
    var ub = "closure_listenable_" + (1E6 * Math.random() | 0),
        vb = 0;

    function wb(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ka = e;
        this.key = ++vb;
        this.T = this.ia = !1
    }

    function xb(a) {
        a.T = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.ka = null
    };

    function yb(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    yb.prototype.add = function(a, b, c, d, e) {
        var g = a.toString();
        a = this.a[g];
        a || (a = this.a[g] = [], this.b++);
        var k = zb(a, b, d, e); - 1 < k ? (b = a[k], c || (b.ia = !1)) : (b = new wb(b, this.src, g, !!d, e), b.ia = c, a.push(b));
        return b
    };
    yb.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.a)) return !1;
        var e = this.a[a];
        b = zb(e, b, c, d);
        return -1 < b ? (xb(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };

    function Ab(a, b) {
        var c = b.type;
        c in a.a && pa(a.a[c], b) && (xb(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
    }

    function Bb(a, b) {
        var c = l(b),
            d = c ? b.toString() : "",
            e = l(void 0);
        return ya(a.a, function(a) {
            for (var b = 0; b < a.length; ++b)
                if (!(c && a[b].type != d || e && void 0 != a[b].capture)) return !0;
            return !1
        })
    }

    function zb(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.T && g.listener == b && g.capture == !!c && g.ka == d) return e
        }
        return -1
    };
    var Cb = !x || 9 <= Number($a),
        Db = x && !Za("9"),
        Eb = function() {
            if (!h.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            h.addEventListener("test", aa, b);
            h.removeEventListener("test", aa, b);
            return a
        }();
    var Fb = Object.freeze || function(a) {
        return a
    };

    function Gb() {
        0 != Hb && (this[ea] || (this[ea] = ++fa))
    }
    var Hb = 0;

    function D(a, b) {
        this.type = a;
        this.a = this.target = b;
        this.b = !1;
        this.Qa = !0
    }
    D.prototype.stopPropagation = function() {
        this.b = !0
    };
    D.prototype.preventDefault = function() {
        this.Qa = !1
    };

    function E(a, b) {
        D.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.S = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            if (b = a.relatedTarget) {
                if (Ma) {
                    a: {
                        try {
                            Ha(b.nodeName);
                            var e = !0;
                            break a
                        } catch (g) {}
                        e = !1
                    }
                    e || (b = null)
                }
            } else "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey =
                a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = m(a.pointerType) ? a.pointerType : Ib[a.pointerType] || "";
            this.S = a;
            a.defaultPrevented && this.preventDefault()
        }
    }
    q(E, D);
    var Ib = Fb({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    E.prototype.stopPropagation = function() {
        E.i.stopPropagation.call(this);
        this.S.stopPropagation ? this.S.stopPropagation() : this.S.cancelBubble = !0
    };
    E.prototype.preventDefault = function() {
        E.i.preventDefault.call(this);
        var a = this.S;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Db) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Jb = "closure_lm_" + (1E6 * Math.random() | 0),
        Kb = {},
        Lb = 0;

    function F(a, b, c, d, e) {
        if (d && d.once) return Mb(a, b, c, d, e);
        if (ca(b)) {
            for (var g = 0; g < b.length; g++) F(a, b[g], c, d, e);
            return null
        }
        c = Nb(c);
        return a && a[ub] ? a.M.add(String(b), c, !1, n(d) ? !!d.capture : !!d, e) : Ob(a, b, c, !1, d, e)
    }

    function Ob(a, b, c, d, e, g) {
        if (!b) throw Error("Invalid event type");
        var k = n(e) ? !!e.capture : !!e,
            p = Pb(a);
        p || (a[Jb] = p = new yb(a));
        c = p.add(b, c, d, k, g);
        if (c.proxy) return c;
        d = Qb();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Eb || (e = k), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Rb(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Lb++;
        return c
    }

    function Qb() {
        var a = Sb,
            b = Cb ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function Mb(a, b, c, d, e) {
        if (ca(b)) {
            for (var g = 0; g < b.length; g++) Mb(a, b[g], c, d, e);
            return null
        }
        c = Nb(c);
        return a && a[ub] ? a.M.add(String(b), c, !0, n(d) ? !!d.capture : !!d, e) : Ob(a, b, c, !0, d, e)
    }

    function Tb(a, b, c, d, e) {
        if (ca(b))
            for (var g = 0; g < b.length; g++) Tb(a, b[g], c, d, e);
        else(d = n(d) ? !!d.capture : !!d, c = Nb(c), a && a[ub]) ? a.M.remove(String(b), c, d, e) : a && (a = Pb(a)) && (b = a.a[b.toString()], a = -1, b && (a = zb(b, c, d, e)), (c = -1 < a ? b[a] : null) && Ub(c))
    }

    function Ub(a) {
        if ("number" != typeof a && a && !a.T) {
            var b = a.src;
            if (b && b[ub]) Ab(b.M, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Rb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Lb--;
                (c = Pb(b)) ? (Ab(c, a), 0 == c.b && (c.src = null, b[Jb] = null)) : xb(a)
            }
        }
    }

    function Rb(a) {
        return a in Kb ? Kb[a] : Kb[a] = "on" + a
    }

    function Vb(a, b, c, d) {
        var e = !0;
        if (a = Pb(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.T && (g = Wb(g, d), e = e && !1 !== g)
                }
            return e
    }

    function Wb(a, b) {
        var c = a.listener,
            d = a.ka || a.src;
        a.ia && Ub(a);
        return c.call(d, b)
    }

    function Sb(a, b) {
        if (a.T) return !0;
        if (!Cb) {
            if (!b) a: {
                b = ["window", "event"];
                for (var c = h, d = 0; d < b.length; d++)
                    if (c = c[b[d]], null == c) {
                        b = null;
                        break a
                    }
                b = c
            }
            d = b;
            b = new E(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode) try {
                        d.keyCode = -1;
                        break a
                    } catch (k) {
                        e = !0
                    }
                    if (e || void 0 == d.returnValue) d.returnValue = !0
                }
                d = [];
                for (e = b.a; e; e = e.parentNode) d.push(e);a = a.type;
                for (e = d.length - 1; !b.b && 0 <= e; e--) {
                    b.a = d[e];
                    var g = Vb(d[e], a, !0, b);
                    c = c && g
                }
                for (e = 0; !b.b && e < d.length; e++) b.a = d[e],
                g = Vb(d[e], a, !1, b),
                c =
                c && g
            }
            return c
        }
        return Wb(a, new E(b, this))
    }

    function Pb(a) {
        a = a[Jb];
        return a instanceof yb ? a : null
    }
    var Xb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Nb(a) {
        if ("function" == ba(a)) return a;
        a[Xb] || (a[Xb] = function(b) {
            return a.handleEvent(b)
        });
        return a[Xb]
    };

    function Yb(a) {
        Gb.call(this);
        this.b = a;
        this.a = {}
    }
    q(Yb, Gb);
    var Zb = [];

    function G(a, b, c, d) {
        ca(c) || (c && (Zb[0] = c.toString()), c = Zb);
        for (var e = 0; e < c.length; e++) {
            var g = F(b, c[e], d || a.handleEvent, !1, a.b || a);
            if (!g) break;
            a.a[g.key] = g
        }
    }

    function $b(a) {
        xa(a.a, function(a, c) {
            this.a.hasOwnProperty(c) && Ub(a)
        }, a);
        a.a = {}
    }
    Yb.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function H() {}
    H.a = void 0;
    H.b = function() {
        return H.a ? H.a : H.a = new H
    };
    H.prototype.a = 0;

    function I() {
        Gb.call(this);
        this.M = new yb(this);
        this.$a = this;
        this.qa = null
    }
    q(I, Gb);
    I.prototype[ub] = !0;
    I.prototype.Ga = function(a) {
        this.qa = a
    };
    I.prototype.removeEventListener = function(a, b, c, d) {
        Tb(this, a, b, c, d)
    };

    function J(a, b) {
        var c, d = a.qa;
        if (d)
            for (c = []; d; d = d.qa) c.push(d);
        a = a.$a;
        d = b.type || b;
        if (m(b)) b = new D(b, a);
        else if (b instanceof D) b.target = b.target || a;
        else {
            var e = b;
            b = new D(d, a);
            Aa(b, e)
        }
        e = !0;
        if (c)
            for (var g = c.length - 1; !b.b && 0 <= g; g--) {
                var k = b.a = c[g];
                e = ac(k, d, !0, b) && e
            }
        b.b || (k = b.a = a, e = ac(k, d, !0, b) && e, b.b || (e = ac(k, d, !1, b) && e));
        if (c)
            for (g = 0; !b.b && g < c.length; g++) k = b.a = c[g], e = ac(k, d, !1, b) && e
    }

    function ac(a, b, c, d) {
        b = a.M.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, g = 0; g < b.length; ++g) {
            var k = b[g];
            if (k && !k.T && k.capture == c) {
                var p = k.listener,
                    jd = k.ka || k.src;
                k.ia && Ab(a.M, k);
                e = !1 !== p.call(jd, d) && e
            }
        }
        return e && 0 != d.Qa
    }

    function K(a, b) {
        return Bb(a.M, l(b) ? String(b) : void 0)
    };

    function L(a) {
        I.call(this);
        this.g = a || cb();
        this.ca = null;
        this.u = !1;
        this.h = null;
        this.Y = void 0;
        this.F = this.l = this.B = null
    }
    q(L, I);
    f = L.prototype;
    f.gb = H.b();

    function bc(a) {
        return a.ca || (a.ca = ":" + (a.gb.a++).toString(36))
    }
    f.c = function() {
        return this.h
    };

    function cc(a) {
        a.Y || (a.Y = new Yb(a));
        return a.Y
    }

    function dc(a, b) {
        if (a == b) throw Error("Unable to set parent component");
        var c;
        if (c = b && a.B && a.ca) {
            c = a.B;
            var d = a.ca;
            c = c.F && d ? r(c.F, d) || null : null
        }
        if (c && a.B != b) throw Error("Unable to set parent component");
        a.B = b;
        L.i.Ga.call(a, b)
    }
    f.Ga = function(a) {
        if (this.B && this.B != a) throw Error("Method not supported");
        L.i.Ga.call(this, a)
    };
    f.A = function() {
        this.h = A(this.g.a, "DIV")
    };

    function M(a, b, c) {
        if (a.u) throw Error("Component already rendered");
        a.h || a.A();
        b ? b.insertBefore(a.h, c || null) : a.g.a.body.appendChild(a.h);
        a.B && !a.B.u || a.m()
    }
    f.G = function(a) {
        this.h = a
    };
    f.m = function() {
        this.u = !0;
        ec(this, function(a) {
            !a.u && a.c() && a.m()
        })
    };

    function fc(a) {
        ec(a, function(a) {
            a.u && fc(a)
        });
        a.Y && $b(a.Y);
        a.u = !1
    }
    f.va = function(a, b) {
        var c = gc(this);
        if (a.u && (b || !this.u)) throw Error("Component already rendered");
        if (0 > c || c > gc(this)) throw Error("Child component index out of bounds");
        this.F && this.l || (this.F = {}, this.l = []);
        if (a.B == this) {
            var d = bc(a);
            this.F[d] = a;
            pa(this.l, a)
        } else {
            d = this.F;
            var e = bc(a);
            if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
            d[e] = a
        }
        dc(a, this);
        ra(this.l, c, 0, a);
        a.u && this.u && a.B == this ? (b = this.ja(), c = b.childNodes[c] || null, c != a.c() && b.insertBefore(a.c(), c)) : b ? (this.h ||
            this.A(), c = hc(this, c + 1), M(a, this.ja(), c ? c.h : null)) : this.u && !a.u && a.h && a.h.parentNode && 1 == a.h.parentNode.nodeType && a.m()
    };
    f.ja = function() {
        return this.h
    };

    function gc(a) {
        return a.l ? a.l.length : 0
    }

    function hc(a, b) {
        return a.l ? a.l[b] || null : null
    }

    function ec(a, b, c) {
        a.l && na(a.l, b, c)
    }
    f.removeChild = function(a, b) {
        if (a) {
            var c = m(a) ? a : bc(a);
            a = this.F && c ? r(this.F, c) || null : null;
            if (c && a) {
                var d = this.F;
                c in d && delete d[c];
                pa(this.l, a);
                b && (fc(a), a.h && (b = a.h) && b.parentNode && b.parentNode.removeChild(b));
                dc(a, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    f.Pa = function(a) {
        for (var b = []; this.l && 0 != this.l.length;) b.push(this.removeChild(hc(this, 0), a))
    };

    function ic(a) {
        I.call(this);
        this.a = a;
        this.h = !1;
        this.g = new t;
        this.b = null;
        F(this.a, "touchstart", this.j, !1, this)
    }
    q(ic, I);
    ic.prototype.c = function() {
        return this.a
    };

    function jc(a) {
        a = a.S;
        return n(a) ? "touchend" == a.type || "touchcancel" == a.type ? a.changedTouches : a.targetTouches : [a]
    }
    ic.prototype.j = function(a) {
        this.h = !1;
        a = jc(a);
        if (K(this, "gmultitouchstart")) {
            var b = new N("gmultitouchstart", this, a);
            J(this, b)
        }
        a && 1 == a.length && (K(this, "gtouchhmove") || K(this, "gtouchvmove") ? (this.g.a = a[0].clientX, this.g.b = a[0].clientY, this.b = null) : K(this, "gtouchstart") && (b = new N("gtouchstart", this, a), J(this, b)), F(this.a, "touchmove", this.f, !1, this), F(this.a, "touchend", this.l, !1, this))
    };
    ic.prototype.f = function(a) {
        this.h = !0;
        var b = jc(a),
            c = K(this, "gtouchhmove"),
            d = K(this, "gtouchvmove");
        if (c || d) {
            if (!this.b && (this.b = Math.abs(this.g.a - b[0].clientX) > Math.abs(this.g.b - b[0].clientY) ? 1 : 2, K(this, "gtouchstart"))) {
                var e = new N("gtouchstart", this, b);
                J(this, e)
            }
            c && 1 == this.b && (e = new N("gtouchhmove", this, b), J(this, e), a.stopPropagation(), a.preventDefault());
            d && 2 == this.b && (e = new N("gtouchvmove", this, b), J(this, e), a.stopPropagation(), a.preventDefault())
        }
        K(this, "gtouchmove") && (e = new N("gtouchmove", this,
            b), J(this, e), a.preventDefault());
        K(this, "gmultitouchmove") && (e = new N("gmultitouchmove", this, b), J(this, e), a.preventDefault())
    };
    ic.prototype.l = function(a) {
        a = jc(a);
        if (1 == a.length && (Tb(this.a, "touchmove", this.f, !1, this), Tb(this.a, "touchend", this.l, !1, this), K(this, "gtouchend"))) {
            var b = new N("gtouchend", this, a);
            J(this, b)
        }
        K(this, "gmultitouchend") && (b = new N("gmultitouchend", this, a), J(this, b));
        K(this, "tap") && (this.h || J(this, "tap"));
        this.h = !1
    };

    function N(a, b, c) {
        D.call(this, a, b);
        this.touches = c
    }
    q(N, D);

    function kc(a) {
        I.call(this);
        this.b = a;
        this.a = !1;
        this.g = 0;
        this.h()
    }
    q(kc, I);

    function lc(a, b) {
        b -= a.g;
        var c = a.b;
        null != c.H && (Math.abs(b) > .2 * c.f.width ? (mc(c, c.H, 1), c.b = c.H) : (b = c.b, c.b = c.H, mc(c, b, 1), c.b = b));
        a.a = !1
    }
    kc.prototype.h = function() {};

    function nc(a) {
        kc.call(this, a)
    }
    q(nc, kc);
    nc.prototype.f = function(a) {
        a.stopPropagation();
        a.preventDefault();
        this.a || (a = a.clientX, this.a = !0, this.g = a, this.b.H = null)
    };
    nc.prototype.j = function(a) {
        this.a && (a.stopPropagation(), a.preventDefault(), a = a.clientX, a -= this.g, oc(this.b, a))
    };
    nc.prototype.l = function(a) {
        a.stopPropagation();
        a.preventDefault();
        this.a && lc(this, a.clientX)
    };
    nc.prototype.h = function() {
        var a = this.b.c();
        F(a, "mousedown", this.f, !1, this);
        F(a, "mousemove", this.j, !1, this);
        F(a, "mouseup", this.l, !1, this);
        F(a, "mouseleave", this.l, !1, this)
    };

    function O(a, b) {
        I.call(this);
        this.g = a || 1;
        this.h = b || h;
        this.l = ja(this.j, this);
        this.f = ka()
    }
    q(O, I);
    O.prototype.b = !1;
    O.prototype.a = null;

    function pc(a, b) {
        a.g = b;
        a.a && a.b ? (P(a), a.start()) : a.a && P(a)
    }
    O.prototype.j = function() {
        if (this.b) {
            var a = ka() - this.f;
            0 < a && a < .8 * this.g ? this.a = this.h.setTimeout(this.l, this.g - a) : (this.a && (this.h.clearTimeout(this.a), this.a = null), J(this, "tick"), this.b && (this.a = this.h.setTimeout(this.l, this.g), this.f = ka()))
        }
    };
    O.prototype.start = function() {
        this.b = !0;
        this.a || (this.a = this.h.setTimeout(this.l, this.g), this.f = ka())
    };

    function P(a) {
        a.b = !1;
        a.a && (a.h.clearTimeout(a.a), a.a = null)
    }

    function qc(a, b) {
        if ("function" != ba(a))
            if (a && "function" == typeof a.handleEvent) a = ja(a.handleEvent, a);
            else throw Error("Invalid listener argument");
        2147483647 < Number(b) || h.setTimeout(a, b || 0)
    };

    function rc(a) {
        return 1 == a.length ? "0" + a : a
    };
    var sc = w("Firefox"),
        tc = Da() || w("iPod"),
        uc = w("iPad"),
        vc = Ga(),
        wc = Fa(),
        xc = Ea() && !(Da() || w("iPad") || w("iPod"));
    (function() {
        if (Pa) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(v)) ? a[1] : "0"
        }
        return Oa ? (a = /10[_.][0-9_.]+/, (a = a.exec(v)) ? a[0].replace(/_/g, ".") : "10") : Qa ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(v)) ? a[1] : "") : Ra || Sa || Ta ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(v)) ? a[1].replace(/_/g, ".") : "") : ""
    })();

    function yc(a) {
        return (a = a.exec(v)) ? a[1] : ""
    }(function() {
        if (sc) return yc(/Firefox\/([0-9.]+)/);
        if (x || La || Ka) return Va;
        if (wc) return Da() || w("iPad") || w("iPod") ? yc(/CriOS\/([0-9.]+)/) : yc(/Chrome\/([0-9.]+)/);
        if (xc && !(Da() || w("iPad") || w("iPod"))) return yc(/Version\/([0-9.]+)/);
        if (tc || uc) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(v);
            if (a) return a[1] + "." + a[2]
        } else if (vc) return (a = yc(/Android\s+([0-9.]+)/)) ? a : yc(/Version\/([0-9.]+)/);
        return ""
    })();

    function zc(a) {
        kc.call(this, a)
    }
    q(zc, kc);
    zc.prototype.B = function(a) {
        a = a.touches[0].clientX;
        this.a = !0;
        this.g = a;
        this.b.H = null
    };
    zc.prototype.j = function(a) {
        this.a && (a = a.touches[0].clientX, a -= this.g, oc(this.b, a))
    };
    zc.prototype.f = function(a) {
        this.a && lc(this, a.touches[0].clientX)
    };
    zc.prototype.h = function() {
        this.l = new ic(this.b.c());
        F(this.l, "gtouchstart", this.B, !1, this);
        F(this.l, "gtouchhmove", this.j, !1, this);
        F(this.l, "gtouchend", this.f, !1, this)
    };

    function Q(a) {
        L.call(this, a);
        this.a = !0
    }
    q(Q, L);

    function Ac(a, b) {
        a.a = b;
        ec(a, function(a) {
            Ac(a, b)
        })
    }
    Q.prototype.update = function() {
        hb(this.c(), this.sb)
    };
    Q.prototype.w = function() {
        return "jx"
    };
    Q.prototype.m = function() {
        Q.i.m.call(this);
        this.a && this.update()
    };

    function R(a) {
        Q.call(this, a);
        this.j = null;
        this.o = !0;
        this.s = new y(640, 480);
        this.f = new y(320, 240);
        this.b = 0
    }
    q(R, Q);
    f = R.prototype;
    f.la = function(a) {
        console.log("setVisible", a);
        this.o = a;
        this.a && ob(this.c(), this.o)
    };
    f.Ha = function(a) {
        this.s = a;
        this.a && Bc(this)
    };

    function Cc(a, b, c, d, e) {
        B(a.c(), {
            left: b + "px",
            opacity: c,
            "z-index": d,
            transition: !0 === e ? "all " + .2 * (0 < d ? 1 : 2) + "s ease-out" : "none"
        })
    }

    function Dc(a, b, c, d, e, g) {
        (a = hc(a, b)) && Cc(a, c, d, e, g)
    }

    function Ec(a, b, c) {
        var d = .2 * a.f.width;
        ec(a, function(a, g) {
            Cc(a, g == b && b != this.b ? c ? d : -d : 0, g == this.b ? 1 : 0, g == b ? 1 : 0, !1)
        }, a)
    }
    f.Ra = function(a, b) {
        J(this, new Fc("index", this, a));
        var c = null !== b ? b : a > this.b ? 0 : 1;
        Ec(this, a, c);
        if (this.b != a) {
            var d = this;
            qc(function() {
                var b = Math.round(.2 * d.f.width);
                d.b != a && Dc(d, d.b, c ? -b : b, 0, 0, !0);
                Dc(d, a, 0, 1, 1, !0);
                d.b = a
            }, 0)
        }
    };

    function mc(a, b, c) {
        c = c ? c : 1;
        var d = b < a.b ? 1 : -1,
            e = a.f.width,
            g = Math.round(e * c * d),
            k = 1 - Math.abs(c),
            p = 1 == c;
        Dc(a, a.b, g, k, 0, p);
        g = e * c - e;
        k = Math.abs(c);
        Dc(a, b, 0 !== g ? g * d : 0, k, 0, p)
    }
    f.H = 0;

    function oc(a, b) {
        var c = Math.abs(b / a.f.width);
        c = Math.max(Math.min(c, 1), -1);
        b = a.b + (0 != b ? 0 > b ? 1 : -1 : 0);
        0 <= b && b < gc(a) && (b != a.H && (J(a, new Fc("index", a, b)), mc(a, b, 0)), a.H = b, mc(a, b, c))
    }
    f.ja = function() {
        return this.j
    };

    function Gc(a) {
        ec(a, function(a) {
            var b = a.c();
            lb(b, this.f);
            B(b, Hc);
            B(a.c(), {
                transition: "none"
            });
            a.update()
        }, a)
    }

    function Bc(a) {
        lb(a.c(), a.s);
        Gc(a)
    }
    f.update = function() {
        R.i.update.call(this);
        ob(this.c(), this.o);
        Bc(this)
    };
    f.va = function(a) {
        R.i.va.call(this, a, !a.u);
        this.a && this.update()
    };
    f.w = function() {
        return "jx-carousel"
    };
    f.G = function() {
        throw Error("Method not supported");
    };
    f.A = function() {
        R.i.A.call(this);
        var a = this.c();
        this.j = A(this.g.a, "DIV");
        a.appendChild(this.j);
        a = this.c();
        Ic(a, this.w());
        B(a, Jc);
        a = this.ja();
        Ic(a, this.w() + "-content");
        B(a, Kc)
    };
    f.m = function() {
        R.i.m.call(this);
        "ontouchstart" in window || navigator.a && 0 < navigator.a || navigator.msMaxTouchPoints && 0 < navigator.msMaxTouchPoints ? new zc(this) : new nc(this)
    };
    var Jc = {
            position: "relative",
            overflow: "hidden"
        },
        Kc = {
            position: "relative"
        },
        Hc = {
            position: "absolute"
        };

    function Fc(a, b, c) {
        D.call(this, a, b);
        this.index = c
    }
    q(Fc, D);

    function Ic(a, b) {
        if (a.classList) a.classList.add(b);
        else {
            if (a.classList) var c = !a.classList.contains(b);
            else a.classList ? c = a.classList : (c = a.className, c = m(c) && c.match(/\S+/g) || []), c = !(0 <= ma(c, b));
            c && (a.className += 0 < a.className.length ? " " + b : b)
        }
    };

    function Lc(a) {
        Q.call(this, a)
    }
    q(Lc, Q);
    f = Lc.prototype;
    f.w = function() {
        return "jx-svg-icon"
    };
    f.Ha = function(a) {
        lb(this.b, a)
    };

    function Mc(a, b) {
        a.b.setAttribute("viewBox", b.C + " " + b.D + " " + b.width + " " + b.height)
    }
    f.J = function(a) {
        var b = a[0],
            c = a[1];
        a = a[2];
        b = Number(b);
        c = Number(c);
        a = Number(a);
        if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
        B(this.b, "fill", "#" + rc(b.toString(16)) + rc(c.toString(16)) + rc(a.toString(16)))
    };
    f.G = function() {
        throw Error("Method not supported");
    };
    f.A = function() {
        Lc.i.A.call(this);
        var a = this.c();
        Ic(a, this.w());
        this.f = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.b.appendChild(this.f);
        a.appendChild(this.b)
    };

    function S(a, b) {
        this.path = a;
        this.Ia = b
    };

    function T(a) {
        Q.call(this, a);
        this.s = !0;
        this.f = 0;
        this.j = !0;
        this.o = !1;
        this.v = new Lc
    }
    q(T, Q);
    f = T.prototype;
    f.w = function() {
        return "jx-svg-button"
    };
    f.Ha = function(a) {
        lb(this.c(), a)
    };
    f.J = function(a) {
        this.v.J(a)
    };
    f.la = function(a, b) {
        this.s = a;
        this.f = 0;
        !0 === b ? this.f = 250 : 0 < b && (this.f = b);
        this.a && Nc(this)
    };

    function U(a, b) {
        a.j = b;
        a.a && Oc(a)
    }

    function Nc(a) {
        if (0 < a.f) {
            var b = a.c();
            B(b, {
                transition: "opacity 0." + a.f + "s linear"
            });
            nb(b, 0);
            qc(function() {
                ob(a.c(), a.s)
            }, a.f);
            a.f = null
        } else ob(a.c(), a.s)
    }

    function Oc(a) {
        nb(a.c(), a.j ? a.o ? 1 : .6 : 0)
    }
    f.update = function() {
        T.i.update.call(this);
        Nc(this);
        Oc(this)
    };
    f.G = function() {
        throw Error("Method not supported");
    };
    f.ya = function() {
        var a = this.c();
        Ic(a, this.w());
        B(a, Pc);
        B(this.v.b, Qc)
    };
    f.xa = function() {
        M(this.v, this.c())
    };
    f.A = function() {
        T.i.A.call(this);
        this.xa();
        this.ya()
    };
    f.za = function(a) {
        this.j && (a.stopPropagation(), J(this, "click"))
    };
    f.kb = function(a) {
        this.j && (a.stopPropagation(), this.o = !0, Oc(this))
    };
    f.lb = function(a) {
        this.j && (a.stopPropagation(), this.o = !1, Oc(this))
    };
    f.m = function() {
        T.i.m.call(this);
        var a = cc(this);
        G(a, this.c(), "mousedown", this.za);
        G(a, this.c(), "mouseenter", this.kb);
        G(a, this.c(), "mouseleave", this.lb)
    };
    var Pc = {
            position: "relative",
            transition: "opacity 0.125s linear"
        },
        Qc = {
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "opacity 0.250s linear"
        };
    var Rc = Na || La ? "webkitfullscreenchange" : Ma ? "mozfullscreenchange" : x ? "MSFullscreenChange" : "fullscreenchange";

    function Sc(a) {
        a = a ? a.a : cb().a;
        return !!(a.webkitIsFullScreen || a.mozFullScreen || a.msFullscreenElement || a.fullscreenElement)
    };

    function Tc(a) {
        Q.call(this, a);
        this.Oa = !1
    }
    q(Tc, Q);
    f = Tc.prototype;
    f.ib = function() {
        this.Oa = !0;
        null !== this.c() && (this.a && Uc(this), B(this.b, {
            opacity: 1,
            transition: "opacity 0.2s ease-in"
        }), J(this, "load"))
    };
    f.Za = function() {};

    function Uc(a) {
        if (a.b.src) {
            var b = new z(0, 0, a.b.naturalWidth, a.b.naturalHeight),
                c = pb(a.c());
            b = new z(0, 0, b.width, b.height);
            var d = b.width / b.height;
            c.width / c.height > d ? (b.width = c.height * d, b.height = c.height) : (b.width = c.width, b.height = c.width / d);
            b.C = Math.round((c.width - b.width) / 2);
            b.D = Math.round((c.height - b.height) / 2);
            lb(a.b, new y(b.width, b.height));
            a = a.b;
            b = new t(b.C, b.D);
            b instanceof t ? (c = b.a, b = b.b) : (c = b, b = void 0);
            a.style.left = mb(c, !1);
            a.style.top = mb(b, !1)
        }
    }
    f.update = function() {
        Tc.i.update.call(this);
        this.ma && this.b && !this.b.src && (this.b.src = this.ma);
        Uc(this)
    };
    f.w = function() {
        return "jx-image"
    };
    f.G = function() {
        throw Error("Method not supported");
    };
    f.A = function() {
        Tc.i.A.call(this);
        var a = this.c();
        this.b = A(this.g.a, "IMG");
        a.appendChild(this.b);
        Ic(a, this.w());
        B(a, {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "relative"
        });
        B(this.b, {
            position: "absolute",
            "user-select": "none",
            "pointer-events": "none"
        });
        l(this.ma) || B(this.b, {
            opacity: 0
        })
    };
    f.m = function() {
        Tc.i.m.call(this);
        F(this.b, "load", this.ib, !1, this);
        F(this.b, "dragstart", this.Za, !1, this)
    };

    function Vc(a) {
        I.call(this);
        this.a = a || window;
        F(this.a, "resize", this.g, !1, this);
        this.b = fb(this.a || window)
    }
    q(Vc, I);
    Vc.prototype.g = function() {
        var a = fb(this.a || window),
            b = this.b;
        a == b || a && b && a.width == b.width && a.height == b.height || (this.b = a, J(this, "resize"))
    };

    function V(a) {
        T.call(this, a);
        this.R = !1;
        this.b = new Lc
    }
    q(V, T);
    f = V.prototype;
    f.w = function() {
        return "jx-svg-control"
    };
    f.J = function(a) {
        V.i.J.call(this, a);
        this.b.J(a)
    };
    f.setActive = function(a) {
        this.R = a;
        this.a && Wc(this)
    };

    function Wc(a) {
        nb(a.v.b, a.R ? 0 : 1);
        nb(a.b.b, a.R ? 1 : 0)
    }
    f.update = function() {
        V.i.update.call(this);
        Wc(this)
    };
    f.ya = function() {
        V.i.ya.call(this);
        B(this.b.b, Qc);
        this.setActive(!1)
    };
    f.xa = function() {
        V.i.xa.call(this);
        M(this.b, this.c())
    };
    f.za = function(a) {
        a.stopPropagation();
        J(this, "click")
    };
    f.m = function() {
        V.i.m.call(this);
        G(cc(this), this.c(), "mousedown", this.za)
    };

    function W(a) {
        Q.call(this, a);
        this.da = [];
        this.j = 0;
        this.U = null;
        this.ga = !1;
        this.o = new O;
        pc(this.o, 5E3);
        this.K = !1;
        this.fb = new Vc;
        this.ea = this.I = !0;
        this.s = new O;
        pc(this.s, 3E3);
        this.s.start();
        this.aa
    }
    q(W, Q);

    function Xc(a, b) {
        a.da = b;
        a.a && a.update()
    }

    function Yc(a, b) {
        a.K = b;
        a.a && (Zc(a), $c(a))
    }

    function ad(a, b) {
        a.eb = b;
        a.a && B(a.c(), "background-color", a.eb)
    }
    f = W.prototype;
    f.la = function(a) {
        this.ea = a;
        this.a && ob(this.c(), this.ea)
    };
    f.Ra = function(a) {
        this.j = a;
        this.a && bd(this)
    };

    function cd(a) {
        a.ga = !0;
        a.o.start();
        a.a && dd(a)
    }

    function ed(a) {
        a.ga = !1;
        P(a.o);
        a.a && dd(a)
    }
    f.mb = function() {
        this.ga && this.o.start()
    };

    function fd(a) {
        Ac(a.b, !1);
        a.b.Pa(!0);
        na(a.da || [], function() {
            var b = new Tc;
            F(b, "load", a.mb, !1, a);
            a.b.va(b)
        }, a)
    }

    function gd(a) {
        var b = pb(a.c());
        Ac(a.b, !1);
        a.b.Ha(b);
        var c = a.b;
        c.f = b;
        c.a && Bc(c);
        Ac(a.b, !0);
        Bc(a.b)
    }

    function bd(a) {
        if (a.ga) {
            var b = hc(a.b, a.j);
            b && !b.Oa && P(a.o)
        }
        a.b.Ra(a.j, a.U);
        Zc(a)
    }

    function hd(a) {
        var b = Sc(a.g);
        a.N != b && (a.N ? (b = a.c(), b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : b.requestFullscreen && b.requestFullscreen()) : (b = (b = a.g) ? b.a : cb().a, b.webkitCancelFullScreen ? b.webkitCancelFullScreen() : b.mozCancelFullScreen ? b.mozCancelFullScreen() : b.msExitFullscreen ? b.msExitFullscreen() : b.exitFullscreen && b.exitFullscreen()), id(a))
    }

    function id(a) {
        a.X.setActive(a.N);
        a.L()
    }

    function dd(a) {
        a.O.setActive(a.o.b)
    }

    function Zc(a) {
        var b = 0 == a.j,
            c = a.j == gc(a.b) - 1;
        U(a.oa, a.I && (!b || a.K));
        U(a.ua, a.I && (!c || a.K))
    }

    function $c(a) {
        U(a.ha, a.I);
        a.ha.J(a.K ? [255, 255, 255] : [0, 0, 0])
    }
    f.L = function() {
        Zc(this);
        U(this.O, this.I);
        $c(this);
        U(this.X, this.I);
        U(this.La, !1)
    };
    f.update = function() {
        W.i.update.call(this);
        ob(this.c(), this.ea);
        this.ea && (fd(this), gd(this), bd(this), id(this), dd(this), this.L())
    };
    var kd = [255, 255, 255],
        ld = new z(-4, -4, 32, 32),
        md = new S("M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z", ld),
        nd = new S("M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z", ld),
        od = new S("M8 5v14l11-7z", ld),
        pd = new S("M6 19h4V5H6v14zm8-14v14h4V5h-4z", ld),
        qd = new S("M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", new z(-3, -3, 24, 24)),
        rd = new S("M3 12.5h2.5V15H7v-4H3v1.5zm2.5-7H3V7h4V3H5.5v2.5zM11 15h1.5v-2.5H15V11h-4v4zm1.5-9.5V3H11v4h4V5.5h-2.5z", new z(-3, -3, 24, 24)),
        sd = new S("M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z", new z(-8, -8, 40, 40)),
        td = new S("M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z", new z(-10, -12, 48, 48));
    f = W.prototype;
    f.w = function() {
        return "pa-image-gallery"
    };
    f.G = function() {
        throw Error("Method not supported");
    };

    function ud(a, b) {
        B(a.c(), vd);
        B(a.c(), b);
        B(a.v.c(), wd);
        B(a.v.b, xd)
    }
    f.Ca = function() {
        ud(this.oa, yd);
        ud(this.ua, zd);
        B(this.O.c(), Ad);
        B(this.X.c(), Bd);
        B(this.ha.c(), Cd);
        B(this.aa, Dd);
        B(this.La.c(), Ed)
    };

    function Fd(a, b, c) {
        c = c ? c : a.c();
        a = new T;
        M(a, c);
        a.J(kd);
        c = b.Ia;
        a.v.f.setAttribute("d", b.path);
        c && Mc(a.v, c);
        B(a.c(), Gd);
        B(a.v.b, Hd);
        return a
    }

    function Id(a, b, c) {
        var d = a.c();
        a = new V;
        M(a, d);
        a.J(kd);
        d = b.Ia;
        a.v.f.setAttribute("d", b.path);
        d && Mc(a.v, d);
        b = c.Ia;
        a.b.f.setAttribute("d", c.path);
        b && Mc(a.b, b);
        B(a.c(), Jd);
        B(a.v.b, Hd);
        B(a.b.b, Hd);
        return a
    }
    f.Ba = function() {
        this.oa = Fd(this, md);
        this.ua = Fd(this, nd);
        this.O = Id(this, od, pd);
        this.X = Id(this, qd, rd);
        this.ha = Fd(this, sd);
        this.aa = A(this.g.a, "DIV");
        this.c().appendChild(this.aa);
        this.La = Fd(this, td, this.aa)
    };
    f.A = function() {
        W.i.A.call(this);
        var a = this.c(),
            b = this.g;
        Ic(a, this.w());
        B(a, Kd);
        hb(a, !0);
        this.b = new R(b);
        Ac(this.b, !1);
        M(this.b, a);
        this.Ba();
        this.Ca()
    };

    function Ld(a) {
        0 < a.j ? a.j-- : a.K && (a.j = gc(a.b) - 1);
        a.U = 0;
        bd(a);
        a.U = null
    }

    function Md(a) {
        a.j < a.da.length - 1 ? a.j++ : a.o.b ? (ed(a), !0 === a.K && (a.j = 0, cd(a))) : a.K && (a.j = 0);
        a.U = 1;
        bd(a);
        a.U = null
    }
    f.wa = function(a, b) {
        switch (b.keyCode) {
            case 37:
                Ld(this);
                break;
            case 39:
                Md(this);
                break;
            case 122:
                this.N = !0;
                this.a && hd(this);
                b.preventDefault();
                break;
            case 80:
                this.o.b ? ed(this) : cd(this)
        }
    };
    f.jb = function(a) {
        this.wa(a.keyCode, a)
    };
    f.hb = function(a) {
        var b = a.index;
        a = this.da[b];
        (b = hc(this.b, b)) && !l(b.ma) && (b.ma = a.src, b.update())
    };
    f.qb = function() {
        id(this);
        gd(this)
    };
    f.bb = function() {
        this.N = Sc(this.g);
        id(this);
        gd(this)
    };
    f.ob = function() {
        Md(this)
    };
    f.Da = function() {
        this.s.b ? P(this.s) : (this.I = !0, this.a && this.L());
        this.s.start()
    };
    f.Aa = function() {
        Ld(this)
    };
    f.Fa = function() {
        Md(this);
        this.O.R && ed(this)
    };
    f.Ea = function() {
        this.O.R ? ed(this) : cd(this)
    };
    f.cb = function() {
        this.N = !this.X.R;
        this.a && hd(this)
    };
    f.pb = function() {
        Yc(this, !this.K)
    };
    f.Xa = function() {
        this.I = !1;
        this.a && this.L();
        P(this.s)
    };
    f.m = function() {
        W.i.m.call(this);
        var a = cc(this);
        F(window.document, "keydown", this.jb, !1, this);
        F(this.b, "index", this.hb, !1, this);
        F(this.fb, "resize", this.qb, !1, this);
        F(window.document, Rc, this.bb, !1, this);
        F(this.o, "tick", this.ob, !1, this);
        G(a, this.c(), "mousemove", this.Da);
        G(a, this.oa, "click", this.Aa);
        G(a, this.ua, "click", this.Fa);
        G(a, this.O, "click", this.Ea);
        G(a, this.X, "click", this.cb);
        G(a, this.ha, "click", this.pb);
        F(this.s, "tick", this.Xa, !1, this)
    };
    var Kd = {
            width: "100%",
            height: "100%",
            position: "relative",
            "background-color": "black"
        },
        Gd = {
            position: "absolute",
            width: "56px",
            height: "56px",
            "z-index": 101
        },
        Jd = {
            position: "absolute",
            width: "56px",
            height: "56px",
            "z-index": 101
        },
        Hd = {
            width: "56px",
            height: "56px",
            "border-radius": "28px",
            background: "rgba(66,66,66,0.54)"
        },
        wd = {
            position: "absolute",
            top: "50%"
        },
        xd = {
            top: "-28px"
        },
        vd = {
            top: "72px",
            bottom: "72px",
            width: "56px",
            height: "auto"
        },
        yd = {
            left: "8px",
            "padding-right": "8px"
        },
        zd = {
            right: "8px",
            "padding-left": "8px"
        },
        Ad = {
            bottom: "8px",
            left: "8px"
        },
        Bd = {
            bottom: "8px",
            right: "8px"
        },
        Cd = {
            bottom: "8px",
            left: "72px"
        },
        Dd = {
            position: "absolute",
            top: "0",
            right: "0",
            width: "256px",
            height: "64px",
            padding: "8px"
        },
        Ed = {
            "float": "right",
            position: "relative",
            "margin-left": "8px"
        };

    function X(a) {
        W.call(this, a);
        this.Ma = !0;
        this.ta;
        this.Z;
        this.$;
        this.ra;
        this.sa;
        this.fa;
        this.Ka = this.f = !1;
        this.W;
        this.V;
        this.Ja = !1;
        this.ba;
        this.pa;
        P(this.s)
    }
    q(X, W);

    function Nd(a, b) {
        a.Na = b;
        a.a && (a.P.innerHTML = a.Na)
    }

    function Od(a) {
        a.Z.la(!1, 125);
        a.s.start()
    }

    function Pd(a, b) {
        if (!a.N && (a.f = b, a.a && a.f != a.Ka)) {
            if (a.f) {
                b = a.c();
                var c;
                a: {
                    if (bb && !(x && Za("9") && !Za("10") && h.SVGElement && b instanceof h.SVGElement) && (c = b.parentElement)) break a;
                    c = b.parentNode;
                    c = n(c) && 1 == c.nodeType ? c : null
                }
                a.pa = c;
                a.ba.appendChild(b)
            } else a.pa.appendChild(a.c()), a.pa = null;
            B(a.c(), {
                position: a.f ? "fixed" : "relative",
                "z-index": a.f ? 2147483647 : 2147483646,
                left: 0,
                top: 0
            });
            gd(a);
            b = Sc(a.g) || a.f;
            b != a.Ja && (a.Ja = b);
            a.L();
            a.W.setActive(a.f);
            a.Ka = a.f
        }
    }
    X.prototype.L = function() {
        X.i.L.call(this);
        var a = this.I || this.Ma;
        B(this.na, "opacity", a ? 1 : 0);
        B(this.P, "opacity", a ? 1 : 0);
        var b = this.N;
        U(this.W, a && !b);
        U(this.V, a && this.f && !b);
        B(this.P, "left", (!this.f || b ? 8 : 72) + "px")
    };
    var Qd = new S("M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z", new z(-10, -12, 48, 48)),
        Rd = new S("M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z", new z(-4, -4, 32, 32)),
        Sd = new S("M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z", new z(-4, -4, 32, 32));
    X.prototype.update = function() {
        X.i.update.call(this);
        this.P.innerHTML = this.Na;
        this.ta.la(this.tb ? !0 : !1)
    };
    var Td = new S("M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z", new z(-4, -4, 32, 32)),
        Ud = new S("M12 8V4l8 8-8 8v-4H4V8z", new z(-12, -12, 48, 48));
    f = X.prototype;
    f.Ca = function() {
        X.i.Ca.call(this);
        B(this.na, Vd);
        B(this.P, Wd);
        B(this.ta.c(), Ed);
        B(this.Z.c(), Xd);
        B(this.Z.v.b, Yd);
        B(this.fa, Zd);
        B(this.$, $d);
        B(this.ra, ae);
        B(this.sa, be);
        B(this.W.c(), ce);
        B(this.V.c(), de);
        U(this.V, !0)
    };
    f.Ba = function() {
        X.i.Ba.call(this);
        var a = this.g,
            b = this.c();
        this.na = A(a.a, "DIV");
        b.appendChild(this.na);
        this.P = A(a.a, "A");
        b.appendChild(this.P);
        this.ta = Fd(this, Ud, this.aa);
        this.Z = Fd(this, Td);
        this.$ = A(a.a, "DIV");
        this.ra = A(a.a, "DIV");
        this.$.appendChild(this.ra);
        this.sa = A(a.a, "DIV");
        this.$.appendChild(this.sa);
        this.fa = A(a.a, "DIV");
        this.fa.appendChild(this.$);
        b.appendChild(this.fa);
        this.W = Id(this, Rd, Sd);
        this.V = Fd(this, Qd);
        this.ba = A(a.a, "DIV");
        Ic(this.ba, "pa-fullpage" + bc(this));
        document.body.appendChild(this.ba,
            document.body.firstChild)
    };
    f.wa = function(a, b) {
        X.i.wa.call(this, a, b);
        switch (b.keyCode) {
            case 27:
                Pd(this, !1)
        }
    };
    f.ab = function() {
        Pd(this, !this.f)
    };
    f.Wa = function() {
        Pd(this, !1)
    };
    f.Ya = function() {
        Pd(this, !this.f)
    };
    f.Da = function(a) {
        this.Ma = !1;
        X.i.Da.call(this, a)
    };
    f.nb = function() {
        Pd(this, !0);
        Od(this);
        cd(this)
    };
    f.Aa = function(a) {
        X.i.Aa.call(this, a);
        Od(this)
    };
    f.Fa = function(a) {
        X.i.Fa.call(this, a);
        Od(this)
    };
    f.Ea = function(a) {
        X.i.Ea.call(this, a);
        Od(this)
    };
    f.m = function() {
        X.i.m.call(this);
        var a = cc(this);
        G(a, this.Z, "click", this.nb);
        G(a, this.W, "click", this.ab);
        G(a, this.V, "click", this.Wa);
        G(a, this.c(), "dblclick", this.Ya)
    };
    var Vd = {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "48px",
            "padding-bottom": "50px",
            "background-repeat": "repeat-x",
            "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==)",
            transition: "opacity .250s cubic-bezier(0.0,0.0,0.2,1)",
            "pointer-events": "none",
            "z-index": 9
        },
        Wd = {
            position: "absolute",
            top: "24px",
            left: "8px",
            width: "100%",
            "text-overflow": "ellipsis",
            "text-decoration": "none",
            color: "#FFF",
            "font-size": "18px",
            "font-family": '"YouTube Noto",Roboto,Arial,Helvetica,sans-serif',
            transition: "color .1s cubic-bezier(0.0,0.0,0.2,1), opacity 0.250s linear, left 0.125s ease-out",
            "box-shadow": "none",
            "z-index": 10
        },
        Zd = {
            position: "absolute",
            left: "142px",
            right: "142px",
            bottom: "24px",
            height: "20px",
            "border-radius": "6px",
            background: "rgba(66,66,66,0.54)",
            "z-index": 101,
            display: "none"
        },
        $d = {
            position: "absolute",
            left: "8px",
            top: "5px",
            bottom: "5px",
            right: "8px",
            border: "1px solid rgba(255, 255, 255, 0.6)"
        },
        ae = {
            position: "absolute",
            left: "1px",
            top: "1px",
            bottom: "1px",
            width: "320px",
            background: "rgba(255, 255, 255, 0.2)"
        },
        be = {
            position: "absolute",
            left: "1px",
            top: "1px",
            bottom: "1px",
            width: "180px",
            background: "rgba(255, 255, 255, 1.0)"
        },
        Xd = {
            left: "50%",
            top: "50%",
            "margin-left": "-64px",
            "margin-top": "-64px",
            width: "128px",
            height: "128px"
        },
        Yd = {
            width: "128px",
            height: "128px",
            background: "rgba(66,66,66,0.72)"
        },
        ce = {
            bottom: "8px",
            right: "72px"
        },
        de = {
            left: "8px",
            top: "8px"
        };
    var ee = !x && !Ea();

    function Y(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (ee && a.dataset) {
            if (Ga() && !(b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
    };

    function fe(a) {
        L.call(this, a)
    }
    q(fe, L);
    fe.prototype.G = function(a) {
        fe.i.G.call(this, a);
        this.a = new X;
        M(this.a, a)
    };

    function ge(a, b) {
        b.title && Nd(a.a, String(b.title));
        if (l(b.items) && ca(b.items)) {
            var c = [];
            na(b.items, function(a) {
                c.push({
                    src: a.image
                })
            });
            Xc(a.a, c)
        }
        l(b.Sa) && b.Sa && console.warn("Slideshow auto play is not allowed.");
        l(b.Ta) && pc(a.a.o, 1E3 * (Number(b.Ta) || 3));
        l(b.Ua) && Yc(a.a, !!b.Ua);
        l(b.backgroundColor) && ad(a.a, String(b.backgroundColor))
    }
    fe.prototype.b = function(a) {
        var b = {};
        b.title = r(a, "title", "");
        b.items = [];
        var c = r(a, "items");
        ca(c) && na(c, function(a) {
            b.items.push({
                image: r(a, "image")
            })
        });
        b.Sa = r(a, "slideshowAutoplay", !1);
        b.Ta = r(a, "slideshowDelay", 5);
        b.Ua = r(a, "slideshowRepeat", !0);
        b.backgroundColor = r(a, "backgroundColor", "#000000");
        ge(this, b)
    };

    function he(a) {
        if (!a.Va) {
            a.Va = !0;
            var b = function(a, b, c) {
                    a = Y(a, b);
                    return "true" == a ? !0 : "false" == a ? !1 : c
                },
                c = {};
            c.link = String(Y(a, "link"));
            c.title = String(Y(a, "title"));
            c.desctiption = String(Y(a, "desctiption"));
            c.slideshowAutoplay = b(a, "slideshowAutoplay", !1);
            c.slideshowDelay = Number(Y(a, "slideshowDelay") || 5);
            c.slideshowRepeat = b(a, "slideshowRepeat", !0);
            c.backgroundColor = String(a, "backgroundColor", "#000000");
            for (c.items = []; a.firstChild;) {
                b = a.firstChild;
                if ("IMG" == b.tagName) {
                    var d = {};
                    d.image = String(Y(b, "src"));
                    d.title = String(Y(b, "title"));
                    oa(c.items, d)
                }
                a.removeChild(b)
            }
            b = Y(a, "display");
            b || (d = parseInt(kb(a), 10) || "480px", B(a, "min-height", d), B(a, "height", d));
            B(a, "display", b ? String(b) : "block");
            console.log("Slideshow`" + c.title + "` Working Fine");
            setTimeout(function() {
                ie(a, c)
            }, 0)
        }
    }

    function ie(a, b) {
        var c = new fe;
        if (c.u) throw Error("Component already rendered");
        if (a) {
            var d = eb(a);
            c.g && c.g.a == d || (c.g = cb(a));
            c.G(a);
            c.m()
        } else throw Error("Invalid element to decorate");
        c.b(b);
        c.setProperties = c.b;
        return c
    }
    var je = ie,
        ke = ["EmbedPlayer"],
        Z = h;
    ke[0] in Z || "undefined" == typeof Z.execScript || Z.execScript("var " + ke[0]);
    for (var le; ke.length && (le = ke.shift());) !ke.length && l(je) ? Z[le] = je : Z[le] && Z[le] !== Object.prototype[le] ? Z = Z[le] : Z = Z[le] = {};
    na(function() {
        var a = document;
        if (a.querySelectorAll && a.querySelector) return a.querySelectorAll("DIV.pa-embed-player");
        if (a.getElementsByClassName) {
            a = a.getElementsByClassName("pa-embed-player");
            for (var b = {}, c = 0, d = 0, e; e = a[d]; d++) "DIV" == e.nodeName && (b[c++] = e);
            b.length = c;
            return b
        }
        a = a.getElementsByTagName("DIV");
        b = {};
        for (d = c = 0; e = a[d]; d++) {
            var g = e.className,
                k;
            if (k = "function" == typeof g.split) k = 0 <= ma(g.split(/\s+/), "pa-embed-player");
            k && (b[c++] = e)
        }
        b.length = c;
        return b
    }(), function(a) {
        he(a)
    });
}).call(this);