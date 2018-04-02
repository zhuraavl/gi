// http://www.oitf.no/wp-content/themes/OITF/assets/OITF.svg

"use strict";
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _delegate(t, e, n) {
    document.addEventListener(e, function(e) {
        if (!e.metaKey && !e.ctrlKey && 0 === e.button && "A" !== e.target.nodeName)
            for (var o = !1, i = e.target; !o && i !== document;)
                i.matches(t) && (o = !0, n(e, i)), i = i.parentNode
    })
}
function _map(t, e, n, o, i) {
    return (t - e) * (i - o) / (n - e) + o
}
function _debounce(t, e) {
    var n = void 0;
    return function() {
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
        clearTimeout(n), n = setTimeout(function() {
            n = null, t(i)
        }, e)
    }
}
function _throttle(t, e) {
    function n() {
        if (o)
            return i = arguments, void (a = this);
        o = !0, t.apply(this, arguments), setTimeout(function() {
            o = !1, i && (n.apply(a, i), i = a = null)
        }, e)
    }
    var o = !1,
        i = void 0,
        a = void 0;
    return n
}
var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }
    return function(e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e
    }
}();
!function() {
    function t(t, e) {
        for (var n = e.parentElement.parentElement.children, o = 0; o < n.length; o++)
            n[o].classList.remove("visible");
        n[a].classList.add("visible"), a = a === n.length - 1 ? 0 : a + 1
    }
    function e(t, e) {
        var o = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size")),
            i = document.getElementById(e.dataset.scroll),
            a = window.scrollY || window.pageYOffset,
            c = i.offsetTop;
        OITF.pause(), n(a, c - o, 800, function(t) {
            window.scrollTo(0, t)
        }, OITF.resume)
    }
    function n(t, e, n, o) {
        function i() {
            u += s, (d += r) < e ? (o(d), window.requestAnimationFrame(i)) : (o(e), a())
        }
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {},
            c = n / 4,
            r = (e - t) / c,
            s = Math.PI / c,
            d = t,
            u = 0;
        i()
    }
    function o(t, e) {
        var n = !1,
            o = e,
            a = "true" === e.dataset.activated;
        for (e.dataset.activated = !a; !n && o !== this;)
            o.matches("[data-expanded]") && (n = !0, o.dataset.expanded = !a), o = o.parentNode;
        i()
    }
    function i() {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty()
    }
    var a = 1;
    _delegate("[data-activated]", "click", o), _delegate("[data-scroll]", "click", e), _delegate('[data-object="carousel-slide"]', "click", t)
}();
var OITF = function() {
    function t() {
        for (var t = 0; t < h.rowCount; t++)
            s.push(new v(t))
    }
    function e() {
        for (var t = 0; t < h.columnCount; t++) {
            var e = 0;
            l.view.context.resetTransform(), t % 2 == 0 ? (l.view.context.translate(u.columnWidth * t, 0), l.view.context.transform(1, h.angle, 0, 1, 0, 0), l.view.context.clearRect(0, 0, u.columnWidth, l.view.canvas.height)) : (l.view.context.translate(u.columnWidth * (t + 1), 0), l.view.context.transform(1, -h.angle, 0, 1, 0, 0), l.view.context.clearRect(0, 0, -u.columnWidth, l.view.canvas.height), e = -u.columnWidth), l.view.context.drawImage(l.source.canvas, u.columnWidth * t, 0, u.columnWidth, l.view.canvas.height, e, 0, u.columnWidth, l.view.canvas.height)
        }
    }
    function n() {
        if (e(), h.move) {
            for (var t = 0; t < s.length; t++)
                s[t].move(t % 2 == 0 ? 1 : -1);
            h.auto && window.requestAnimationFrame(n)
        }
    }
    function o() {
        var t = document.createElement("canvas"),
            e = t.getContext("2d"),
            n = document.getElementById("intro"),
            o = n.getContext("2d");
        l.view = {
            canvas: n,
            context: o
        }, l.source = {
            canvas: t,
            context: e
        }
    }
    function i() {
        var t = window.innerWidth,
            e = t * window.devicePixelRatio,
            n = e / window.devicePixelRatio > 1024;
        h.rowCount = 4, h.columnCount = n ? 4 : 3;
        var o = (t > 2e3 ? 300 : t > 1500 ? 250 : t > 1e3 ? 100 : t > 600 ? 200 : 100) * window.devicePixelRatio,
            i = o * d.ratio,
            a = e / h.columnCount,
            c = o * h.rowCount + a * Math.tan(h.angle) * .8335;
        h.auto = n, l.source.canvas.width = e, l.source.canvas.height = c, l.view.canvas.width = e, l.view.canvas.height = c, u = {
            width: e,
            rowHeight: o,
            rowWidth: i,
            columnWidth: a
        }
    }
    function a() {
        s = [], t()
    }
    function c() {
        h.move = !1
    }
    function r() {
        h.move = !0
    }
    var s = [],
        d = {},
        u = {},
        l = {},
        h = {
            force: !0,
            move: !0,
            auto: !0,
            speed: 2,
            speedRange: 8,
            gap: 0,
            acceleration: 3,
            angle: Math.PI / 180 * 40
        },
        v = function() {
            function t(e) {
                _classCallCheck(this, t), this.textHeight = u.rowHeight, this.textWidth = u.rowWidth, this.x = Math.random() * (u.width - -u.width) - u.width, this.y = u.rowHeight * e + h.gap * e, this.acceleration = Math.random() * (h.acceleration - 1) + 1, this.draw()
            }
            return _createClass(t, [{
                key: "move",
                value: function(t) {
                    this.x > l.source.canvas.width && (this.x = 0 - this.textWidth), this.x < -this.textWidth && (this.x = l.source.canvas.width), this.x = t >= 0 ? this.x + h.speed * this.acceleration : this.x - h.speed * this.acceleration, this.draw()
                }
            }, {
                key: "draw",
                value: function() {
                    l.source.context.clearRect(0, this.y, u.width, this.textHeight), l.source.context.drawImage(d.image, this.x, this.y, this.textWidth, this.textHeight)
                }
            }]), t
        }(),
        w = _debounce(function() {
            i(), a(), f()
        }, 1e3),
        f = _throttle(function() {
            var t = window.scrollY || window.pageYOffset;
            h.force && (h.auto = !1), t > document.getElementById("featured").offsetTop - 20 ? c() : (r(), e())
        }, 1e3);
    return document.getElementById("intro") && (!function() {
        var e = new Image;
        e.src = "../media/hero.svg", e.onload = function() {
            d = {
                image: e,
                ratio: e.width / e.height
            }, o(), i(), t(), f()
        }
    }(), window.addEventListener("resize", function(t) {
        w()
    }), window.addEventListener("scroll", function(t) {
        f()
    }), window.addEventListener(Modernizr.touchevents ? "touchmove" : "mousemove", function(t) {
        if (h.move) {
            var e = Modernizr.touchevents ? t.touches[0].clientX : t.clientX;
            h.speed = _map(e / window.innerWidth * 100, 0, 100, -h.speedRange, h.speedRange), h.auto || n()
        }
    })), {
        pause: c,
        resume: r
    }
}();

''

