window.Q = function(t, i, n) {
    "use strict";
    function e(t, i, n) {
        if (t[th]()) {
            var s = t._f1 || t[ih]();
            if (s) {
                s = s._jg || s;
                for (var r = 0, h = s[nh]; h > r; r++)
                    if (i.call(n, s[r]) === !1 || e(s[r], i, n) === !1)
                        return !1;
                return !0
            }
        }
    }
    function s(t) {
        if (!t.hasChildren())
            return t instanceof uW ? t : null;
        for (var i, n = t._f1._jg, e = n.length - 1; e >= 0; ) {
            if (i = n[e],
            i = s(i))
                return i;
            e--
        }
        return null
    }
    function r(t, i, n, e) {
        return e ? h(t, i, n) : a(t, i, n)
    }
    function h(t, i, n) {
        t = t._jg || t;
        for (var e, s = 0, r = t[nh]; r > s; s++)
            if (e = t[s],
            e[th]() && !h(e[eh], i, n) || i.call(n, e) === !1)
                return !1;
        return !0
    }
    function a(t, i, n) {
        t = t._jg || t;
        for (var e, s = 0, r = t[nh]; r > s; s++)
            if (e = t[s],
            i.call(n, e) === !1 || e[th]() && !a(e[eh], i, n))
                return !1;
        return !0
    }
    function o(t, i, n, e) {
        return e ? f(t, i, n) : u(t, i, n)
    }
    function f(t, i, n) {
        t = t._jg || t;
        for (var e, s = t[nh], r = s - 1; r >= 0; r--)
            if (e = t[r],
            e[th]() && !f(e.children, i, n) || i[sh](n, e) === !1)
                return !1;
        return !0
    }
    function u(t, i, n) {
        t = t._jg || t;
        for (var e, s = t.length, r = s - 1; r >= 0; r--)
            if (e = t[r],
            i[sh](n, e) === !1 || e[th]() && !u(e[eh], i, n))
                return !1;
        return !0
    }
    function c(t, i, n) {
        for (var e, s = (t._jg || t).slice(0); s[nh]; ) {
            e = s[0],
            s = s[rh](1);
            var r = i[sh](n, e);
            if (r === !1)
                return !1;
            if (e[th]()) {
                var h = e.children;
                h = h._jg || h,
                s = s[hh](h)
            }
        }
        return !0
    }
    function _(t, i, n) {
        for (var e, s = (t._jg || t)[ah](0); s[nh]; ) {
            e = s[s[nh] - 1],
            s = s.splice(0, s[nh] - 1);
            var r = i[sh](n, e);
            if (r === !1)
                return !1;
            if (e[th]()) {
                var h = e[eh];
                h = h._jg || h,
                s = s[hh](h)
            }
        }
        return !0
    }
    function d(t, i) {
        function n(t, n) {
            for (var e = t[nh], s = n[nh], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f; )
                h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return h
        }
        function e(t) {
            var i = t.length
              , s = Math[oh](i / 2);
            return 1 >= i ? t : n(e(t[ah](0, s)), e(t.slice(s)))
        }
        return e(t)
    }
    function l(t, i, n, e) {
        t instanceof HY && (t = t._jg);
        for (var s = 0, r = (t._jg || t)[nh]; r > s; s++) {
            var h = i[sh](n, t[s], s, e);
            if (h === !1)
                return !1
        }
        return !0
    }
    function v(t, i, n) {
        for (var e = t instanceof HY, s = t._jg || t, r = 0, h = s[nh]; h > r; r++) {
            var a = s[r];
            i[sh](n, a) && (e ? t.remove(a) : t.splice(r, 1),
            r--,
            h--)
        }
    }
    function b(t, i, n, e) {
        t instanceof HY && (t = t._jg);
        for (var s = (t._jg || t)[nh] - 1; s >= 0; s--) {
            var r = i[sh](n, t[s], s, e);
            if (r === !1)
                return !1
        }
        return !0
    }
    function g(t) {
        if (t[fh]instanceof Function)
            return t.clone(!0);
        var i, n = [];
        return l(t, function(t) {
            i = t && t.clone instanceof Function ? t[fh]() : t,
            n[uh](i)
        }, this),
        n
    }
    function y(t, i, e) {
        e === n || 0 > e ? t[uh](i) : t.splice(e, 0, i)
    }
    function m(t, i) {
        var n = t[ch](i);
        return 0 > n || n >= t[nh] ? !1 : t[rh](n, 1)
    }
    function x(t, i) {
        var n = !1;
        return l(t, function(t) {
            return i == t ? (n = !0,
            !1) : void 0
        }),
        n
    }
    function p(t, i) {
        var n = t;
        for (var e in i)
            if (i.__lookupGetter__) {
                var s = i.__lookupGetter__(e)
                  , r = i.__lookupSetter__(e);
                s || r ? (s && n.__defineGetter__(e, s),
                r && n.__defineSetter__(e, r)) : n[e] = i[e]
            } else
                n[e] = i[e];
        return n
    }
    function E(t, i, n) {
        if (!(t instanceof Function))
            throw new Error("subclass must be type of Function");
        var e = null;
        _h == typeof i && (e = i,
        i = t,
        t = function() {
            i[dh](this, arguments)
        }
        );
        var s = t[lh]
          , r = function() {};
        return r.prototype = i[lh],
        t[lh] = new r,
        t[vh] = i[lh],
        t[vh].constructor = i,
        p(t.prototype, s),
        e && p(t[lh], e),
        n && p(t.prototype, n),
        t[lh][bh] = t,
        t
    }
    function w(t, i, n) {
        return T(t, i, "constructor", n)
    }
    function T(t, i, n, e) {
        var s = i[vh];
        if (s) {
            var r = s[n];
            return r ? r[dh](t, e) : void 0
        }
    }
    function M(t, i, n, e) {
        if ("constructor" == n)
            return k(t, i, e);
        if (i[gh]instanceof Function) {
            var s = i[gh].prototype[n];
            return s instanceof Function ? s[dh](t, e) : void 0
        }
    }
    function k(t, i, n) {
        return i[gh]instanceof Function ? i.super_.apply(t, n) : void 0
    }
    function O(t, i) {
        return t[gh] = i,
        t[lh] = Object.create(i[lh], {
            super_: {
                value: i,
                enumerable: !1
            },
            constructor: {
                value: t,
                enumerable: !1
            }
        }),
        t
    }
    function S(t, i, n) {
        if (!(t instanceof Function) && t instanceof Object) {
            i = t[yh];
            var e;
            return t.hasOwnProperty("constructor") ? (e = t.constructor,
            delete t.constructor) : e = i ? function() {
                i[dh](this, arguments)
            }
            : function() {}
            ,
            S(e, i, t)
        }
        if (i && !(i instanceof Function) && i instanceof Object)
            return S(t, i[yh], i);
        if (i && O(t, i),
        n) {
            var s = t[lh];
            for (var r in n)
                s[r] = n[r]
        }
        return t
    }
    function I(t, i, e, s, r) {
        if (s)
            return void Object[mh](t, i, {
                value: e,
                enumerable: !0
            });
        var h = {
            configurable: !0,
            enumerable: !0
        }
          , a = xh + i;
        e !== n && (t[a] = e),
        h.get = function() {
            return this[a]
        }
        ,
        h.set = function(t) {
            var n = this[a];
            if (n == t)
                return !1;
            var e = new fH(this,i,t,n);
            return this[ph](e) ? (this[a] = t,
            r && r[sh](this, t, n),
            this[Eh](e),
            !0) : !1
        }
        ,
        Object.defineProperty(t, i, h)
    }
    function A(t, i) {
        for (var n = 0, e = i[nh]; e > n; n++) {
            var s = i[n];
            I(t, s.name || s, s.defaultValue || s[wh], s[Th], s[Mh])
        }
    }
    function P(t, i, n) {
        return i instanceof Object ? t = t[kh](i) : i && !n && (n = parseInt(i)),
        i && !n && (n = parseInt(i)),
        n ? setTimeout(t, n) : setTimeout(t)
    }
    function j(i, n) {
        return n && (i = i.bind(n)),
        t[Oh](i)
    }
    function L(t, i) {
        return t[Sh] = i,
        t
    }
    function C(t, i) {
        if (!t.hasOwnProperty(Ih)) {
            var n = t[Ah](bh);
            if (!n)
                return L(t, i);
            for (var e = n[Ph](jh), s = 0, r = e[nh]; r > s; s++)
                if (e[s] == i)
                    return;
            return n += jh + i,
            L(t, n)
        }
        t[Ih].add(i)
    }
    function R(t, i) {
        if (!t.hasOwnProperty(Ih)) {
            var n = t[Ah](bh);
            if (!n || !n[ch](i))
                return;
            for (var e = "", s = n[Ph](jh), r = 0, h = s.length; h > r; r++)
                s[r] != i && (e += s[r] + jh);
            return L(t, e)
        }
        t[Ih][Lh](i)
    }
    function D(t) {
        return !isNaN(t) && t instanceof Number || Ch == typeof t
    }
    function N(t) {
        return t !== n && (t instanceof String || Rh == typeof t)
    }
    function $(t) {
        return t !== n && (t instanceof Boolean || Dh == typeof t)
    }
    function B(t) {
        return Array[Nh](t)
    }
    function F(i) {
        i || (i = t[$h]),
        i[Bh] ? i.preventDefault() : i[Fh] = !1
    }
    function G(i) {
        i || (i = t.event),
        i.stopPropagation ? i[Gh]() : i.cancelBubble || (i[zh] = !0)
    }
    function z(t) {
        F(t),
        G(t)
    }
    function Y(t) {
        return Math[Yh](Math.random() * t)
    }
    function H() {
        return Math[Hh]() >= .5
    }
    function q(t) {
        var i = !0;
        for (var n in t) {
            i = !1;
            break
        }
        return i
    }
    function U(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math[Yh](16777215 * Math[Hh]());
            return qh + (i >> 16 & 255) + Uh + (i >> 8 & 255) + Uh + (255 & i) + Uh + t[Wh](2) + Vh
        }
        return X(Math[Yh](16777215 * Math[Hh]()))
    }
    function W(t) {
        return t > 0 ? Math[Yh](t) : Math.ceil(t)
    }
    function V(t) {
        return t > 0 ? Math[oh](t) : Math.floor(t)
    }
    function X(t) {
        return 16777216 > t ? Xh + (Zh + t.toString(16)).slice(-6) : qh + (t >> 16 & 255) + Uh + (t >> 8 & 255) + Uh + (255 & t) + Uh + ((t >> 24 & 255) / 255)[Wh](2) + Vh
    }
    function Z(t, i, n) {
        _h != typeof n || n.hasOwnProperty(Kh) || (n.enumerable = !0),
        Object[mh](t, i, n)
    }
    function K(t, i) {
        for (var n in i)
            if (Jh != n[0]) {
                var e = i[n];
                _h != typeof e || e.hasOwnProperty(Kh) || (e[Kh] = !0)
            }
        Object[Qh](t, i)
    }
    function J(i, n) {
        n || (n = t);
        for (var e = i[Ph](ta), s = 0, r = e.length; r > s; s++) {
            var h = e[s];
            n = n[h]
        }
        return n
    }
    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t.touches !== n
    }
    function ti() {
        t.console && console.log.apply(console, arguments)
    }
    function ii(i) {
        t.console && console[ia](i)
    }
    function ni(i) {
        t[na] && console[ea](i)
    }
    function ei(t, i, n) {
        var e, s, r;
        0 == t._mm ? (e = -1,
        r = 0,
        s = i) : 0 == t._mj ? (e = 0,
        r = 1,
        s = n) : (e = -1 / t._mm,
        s = (t._mm - e) * i + t._ml,
        r = 1);
        var h = new XY;
        return h._mm = e,
        h._ml = s,
        h._mj = r,
        h._mh = i,
        h._md = n,
        h._ke = Math[sa](e, r),
        h[ra] = Math.cos(h._ke),
        h[ha] = Math.sin(h._ke),
        h
    }
    function si(t, i, n, e, s) {
        var r, h;
        i > e ? r = -1 : e > i && (r = 1),
        n > s ? h = -1 : s > n && (h = 1);
        var a, o;
        if (!r)
            return o = 0 > h ? t.y : t[aa],
            {
                x: i,
                y: o
            };
        if (!h)
            return a = 0 > r ? t.x : t[oa],
            {
                x: a,
                y: n
            };
        var f = (n - s) / (i - e)
          , u = n - f * i
          , c = 0 > r ? i - t.x : i - t[oa]
          , _ = 0 > h ? n - t.y : n - t.bottom;
        return Math.abs(f) >= Math.abs(_ / c) ? (o = 0 > h ? t.y : t[aa],
        a = (o - u) / f) : (a = 0 > r ? t.x : t.right,
        o = f * a + u),
        {
            x: a,
            y: o
        }
    }
    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s,
        a += r,
        n += t,
        e += i,
        (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }
    function hi(t, i, n, e, s, r) {
        return s >= t && t + n >= s && r >= i && i + e >= r
    }
    function ai(t, i, n, e, s, r, h, a, o) {
        return o && (t -= o,
        i -= o,
        n += o + o,
        e += o + o),
        s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }
    function oi(t, i, n, e, s, r, h, a) {
        var o = t;
        o += n;
        var f = i;
        f += e;
        var u = s;
        u += h;
        var c = r;
        return c += a,
        s > t && (t = s),
        r > i && (i = r),
        o > u && (o = u),
        f > c && (f = c),
        o -= t,
        f -= i,
        0 > o || 0 > f ? null : new KY(t,i,o,f)
    }
    function fi(t) {
        return fa in t && ua in t
    }
    function ui(t, i) {
        var n = ci(t, i[ca], i.height);
        return n.x += i.x || 0,
        n.y += i.y || 0,
        n
    }
    function ci(t, i, e) {
        if (!t)
            return {
                x: 0,
                y: 0
            };
        if (N(t) && (t = QY[_a](t)),
        t instanceof QY) {
            var s, r, h = t[da], a = t[la];
            switch (h) {
            case tH:
                s = 0;
                break;
            case nH:
                s = i;
                break;
            default:
                s = i / 2
            }
            switch (a) {
            case eH:
                r = 0;
                break;
            case rH:
                r = e;
                break;
            default:
                r = e / 2
            }
            return {
                x: s,
                y: r
            }
        }
        if (t.x !== n)
            return t[va] ? {
                x: t.x * i,
                y: t.y * e
            } : {
                x: t.x,
                y: t.y
            };
        throw new Error("Position not be supported - " + t)
    }
    function _i(t, i, n) {
        t[eh].add(i, n),
        t[ba](i, n)
    }
    function di(t, i) {
        t._f1 && (t._f1.remove(i),
        t.onChildRemove(i))
    }
    function li(t) {
        return t[ga](/^-ms-/, ya)[ga](/-([\da-z])/gi, function(t, i) {
            return i[ma]()
        })
    }
    function vi(t) {
        return t[ga](/[A-Z]/g, function(t) {
            return xa + t.toLowerCase()
        }).replace(/^ms-/, pa)
    }
    function bi(t, i) {
        var n = t[Ea];
        if (!n)
            return !1;
        var e, s;
        for (e in i)
            i.hasOwnProperty(e) && (s = MH(e)) && (n[s] = i[e]);
        return t
    }
    function gi(t) {
        var i, n, e = "";
        for (i in t)
            t.hasOwnProperty(i) && (n = MH(i)) && (e += vi(n) + wa + t[i] + Ta);
        return e ? e[Ma](0, e.length - 1) : e
    }
    function yi(t, i, n) {
        (i = MH(i)) && (t[Ea][i] = n)
    }
    function mi(t, i) {
        return wH ? (i && !N(i) && (i = gi(i)),
        wH[ka] ? void wH[ka](t + Oa + i + Sa, 0) : void (wH[Ia] && wH[Ia](t, i, 0))) : !1
    }
    function xi(t, i) {
        var n = t[Aa];
        return n ? (i = i || t[Pa](),
        i[ca] / n) : 1
    }
    function pi(i, n) {
        i.touches && (i = i[ja] && i[ja][nh] ? i[ja][0] : i[La][0]);
        var e = n[Pa]()
          , s = i[Ca] || 0
          , r = i.clientY || 0;
        GY && DY && (t[Ra] && s == i.pageX && (s -= t[Ra]),
        t[Da] && r == i[Na] && (r -= t[Da])),
        s -= e[$a],
        r -= e.top;
        var h = xi(n, e);
        return h && 1 !== h && (s /= h,
        r /= h),
        {
            x: s,
            y: r
        }
    }
    function Ei(t, i) {
        var n, e;
        t.touches ? (n = t.cx,
        e = t.cy) : (n = t[Ca],
        e = t[Ba]);
        var s = xi(i);
        return s && 1 !== s && (n /= s,
        e /= s),
        {
            timeStamp: t[Fa],
            x: n,
            y: e
        }
    }
    function wi(t, i, n) {
        this._l1 = t,
        this[Ga] = n,
        this[za] = i,
        this._dragPoints = new Mi,
        this._install()
    }
    function Ti(t) {
        return NY && t.metaKey || !NY && t[Ya]
    }
    function Mi() {
        this[Ha] = []
    }
    function ki(t, i, n, e, s) {
        Si(t, function(e) {
            if (i) {
                var s = e.responseXML;
                if (!s)
                    return void (n || nq)(qa + t + Ua);
                i(s)
            }
        }, n, e, s)
    }
    function Oi(t, i, n, e, s) {
        Si(t, function(e) {
            if (i) {
                var s, r = e[Wa];
                if (!r)
                    return (n || nq)(qa + t + Va),
                    s = new Error(qa + t + Va),
                    i(r, s);
                try {
                    r = JSON[Xa](r)
                } catch (h) {
                    (n || nq)(h),
                    s = h
                }
                i(r, s)
            }
        }, n, e, s)
    }
    function Si(t, i, n, e, s) {
        (n === !1 || e === !1) && (s = !1);
        try {
            var r = new XMLHttpRequest
              , h = encodeURI(t);
            if (s !== !1) {
                var a;
                a = h[ch](Za) > 0 ? "&" : Za,
                h += a + Ka + Date.now()
            }
            r[Ja](Qa, h),
            r.onreadystatechange = function() {
                return 4 == r.readyState ? r[to] && 200 != r[to] ? void (n || nq)(qa + t + io) : void (i && i(r)) : void 0
            }
            ,
            r[no](e)
        } catch (o) {
            (n || nq)(qa + t + io, o)
        }
    }
    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s,
        a += r,
        n += t,
        e += i,
        (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }
    function ai(t, i, n, e, s, r, h, a) {
        return s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }
    function Ii(t, i, n) {
        return t instanceof Object && t.x ? Pi(t, i, 0, 0) : Ai(t, i, n, 0, 0)
    }
    function Ai(t, i, n, e, s) {
        var r = Math.sin(n)
          , h = Math.cos(n)
          , a = t - e
          , o = i - s;
        return t = a * h - o * r + e,
        i = a * r + o * h + s,
        new WY(t,i,n)
    }
    function Pi(t, i, n, e) {
        n = n || 0,
        e = e || 0;
        var s = Math.sin(i)
          , r = Math.cos(i)
          , h = t.x - n
          , a = t.y - e;
        return t.x = h * r - a * s + n,
        t.y = h * s + a * r + e,
        t
    }
    function ji(t, i, n) {
        return Li(t, i, n, 0, 0)
    }
    function Li(t, i, n, e, s) {
        var r = Ai(t.x, t.y, i, e, s)
          , h = Ai(t.x + t[ca], t.y, i, e, s)
          , a = Ai(t.x + t[ca], t.y + t[eo], i, e, s)
          , o = Ai(t.x, t.y + t[eo], i, e, s);
        return n ? n[so]() : n = new KY,
        n[ro](r),
        n[ro](h),
        n[ro](a),
        n[ro](o),
        n
    }
    function Ci(t, i) {
        var n = this[ho] || 1;
        this[Ea].width = t + ao,
        this[Ea].height = i + ao,
        this[ca] = t * n,
        this[eo] = i * n
    }
    function Ri(t) {
        var i = t[oo] || t.mozBackingStorePixelRatio || t[fo] || t[uo] || t[co] || 1;
        return rq / i
    }
    function Di(t, n, e) {
        var s = i[_o](lo);
        if (s.g = s.getContext(vo),
        t !== !0 && !e)
            return t && n && (s.width = t,
            s.height = n),
            s;
        var r = s.g;
        return r[ho] = s.ratio = Ri(r),
        s[bo] = Ci,
        r._jx = function() {
            this[lo].width = this[lo].width
        }
        ,
        t && n && s.setSize(t, n),
        s
    }
    function Ni(t, i) {
        return hq || (hq = Di()),
        t && i && (hq[ca] = t,
        hq[eo] = i),
        hq.g
    }
    function $i(t, i, n) {
        return (n || YY[go]) + jh + (i || YY.FONT_SIZE) + yo + (t || YY[mo])
    }
    function Bi(t, i, n, e, s, r, h, a, o, f) {
        if (t.save(),
        t.translate(n, e),
        aq && oq > h) {
            var u = h / oq;
            t.scale(u, u),
            h = oq,
            f = null
        }
        o || (o = YY[xo]),
        h || (h = YY[po]),
        o *= h,
        t[Eo] = f || $i(r, h, a),
        t[wo] = s,
        t[To] = Mo;
        for (var c = o / 2, _ = i[Ph](ko), d = 0, l = _.length; l > d; d++) {
            var v = _[d];
            t[Oo](v, 0, c),
            c += o
        }
        t[So]()
    }
    function Fi(t, i, n, e, s, r) {
        if (!t)
            return {
                width: 0,
                height: 0
            };
        if (i || (i = YY[po]),
        aq && oq > i) {
            var h = i / oq
              , a = Fi(t, oq, n, e, s);
            return a[ca] *= h,
            a.height *= h,
            a
        }
        var o = Ni();
        o[Eo] = r || $i(n, i, e),
        s || (s = YY[xo]);
        for (var f = i * s, u = 0, c = 0, _ = t[Ph](ko), d = 0, l = _[nh]; l > d; d++) {
            var v = _[d];
            u = Math.max(o.measureText(v)[ca], u),
            c += f
        }
        return {
            width: u,
            height: c
        }
    }
    function Gi(t, i, n, e, s) {
        var r;
        try {
            r = t[Io](i, n, e, s)
        } catch (h) {}
        return r
    }
    function zi(t) {
        return Math.log(t + Math[Ao](t * t + 1))
    }
    function Yi(t, i) {
        i = i || t(1);
        var n = 1 / i
          , e = .5 * n
          , s = Math.min(1, i / 100);
        return function(r) {
            if (0 >= r)
                return 0;
            if (r >= i)
                return 1;
            for (var h = r * n, a = 0; a++ < 10; ) {
                var o = t(h)
                  , f = r - o;
                if (Math.abs(f) <= s)
                    return h;
                h += f * e
            }
            return h
        }
    }
    function Hi(t, i, n) {
        var e = 1 - t
          , s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4]
          , r = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var h = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0]
              , a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {
                x: s,
                y: r,
                rotate: Math.atan2(a, h)
            }
        }
        return {
            t: t,
            x: s,
            y: r
        }
    }
    function qi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e : -1
    }
    function Ui(t, i) {
        i.add(t[4], t[5]);
        var n = qi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = Hi(n, t);
            i.add(e.x, e.y)
        }
        var s = qi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = Hi(s, t);
            i.add(e.x, e.y)
        }
        return i
    }
    function Wi(t, i) {
        return Math.abs(t - i) < 1e-7
    }
    function Vi(t, i) {
        return Wi(t[0], i[0]) && Wi(t[1], i[1])
    }
    function Xi(t) {
        if (Vi([t[0], t[1]], [t[2], t[3]])) {
            var i = t[0]
              , n = t[1]
              , e = t[4]
              , s = t[5]
              , r = Math.sqrt(fq(i, n, e, s));
            return function(t) {
                return r * t
            }
        }
        if (Vi([t[0], t[1]], [t[4], t[5]]) || Vi([t[2], t[3]], [t[4], t[5]])) {
            var i = t[0]
              , n = t[1]
              , e = t[2]
              , s = t[3]
              , r = Math.sqrt(fq(i, n, e, s));
            return function(t) {
                return r * t
            }
        }
        var h = t[0]
          , a = t[2]
          , o = t[4]
          , f = h - 2 * a + o
          , u = 2 * a - 2 * h;
        h = t[1],
        a = t[3],
        o = t[5];
        var c = h - 2 * a + o
          , _ = 2 * a - 2 * h
          , d = 4 * (f * f + c * c)
          , l = 4 * (f * u + c * _)
          , v = u * u + _ * _
          , r = 4 * d * v - l * l
          , b = 1 / r
          , g = .125 * Math.pow(d, -1.5)
          , y = 2 * Math.sqrt(d)
          , m = (r * zi(l / Math[Ao](r)) + 2 * Math[Ao](d) * l * Math[Ao](v)) * g;
        return function(t) {
            var i = l + 2 * t * d
              , n = i / Math[Ao](r)
              , e = i * i * b;
            return (r * Math.log(n + Math.sqrt(e + 1)) + y * i * Math.sqrt(v + t * l + t * t * d)) * g - m
        }
    }
    function Zi(t, i, n) {
        var e = 1 - t
          , s = i[0]
          , r = i[2]
          , h = i[4]
          , a = i[6]
          , o = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n)
            var f = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
        s = i[1],
        r = i[3],
        h = i[5],
        a = i[7];
        var u = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n) {
            var c = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
            return {
                x: o,
                y: u,
                rotate: Math[sa](c, f)
            }
        }
        return {
            x: o,
            y: u
        }
    }
    function Ki(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s)
            return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var r = 2 * t - 4 * i + 2 * n
          , h = i - t
          , a = r * r - 4 * s * h;
        return 0 > a ? void 0 : 0 == a ? [-r / (2 * s)] : (a = Math[Ao](a),
        [(a - r) / (2 * s), (-a - r) / (2 * s)])
    }
    function Ji(t, i) {
        i.add(t[6], t[7]);
        var n = Ki(t[0], t[2], t[4], t[6]);
        if (n)
            for (var e = 0; e < n[nh]; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var r = Zi(s, t);
                    i.add(r.x, r.y)
                }
            }
        if (n = Ki(t[1], t[3], t[5], t[7]))
            for (var e = 0; e < n.length; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var r = Zi(s, t);
                    i.add(r.x, r.y)
                }
            }
    }
    function Qi(t) {
        var i = {
            x: t[0],
            y: t[1]
        }
          , n = {
            x: t[2],
            y: t[3]
        }
          , e = {
            x: t[4],
            y: t[5]
        }
          , s = {
            x: t[6],
            y: t[7]
        }
          , r = i.x - 0
          , h = i.y - 0
          , a = n.x - 0
          , o = n.y - 0
          , f = e.x - 0
          , u = e.y - 0
          , c = s.x - 0
          , _ = s.y - 0
          , d = 3 * (-r + 3 * a - 3 * f + c)
          , l = 6 * (r - 2 * a + f)
          , v = 3 * (-r + a)
          , b = 3 * (-h + 3 * o - 3 * u + _)
          , g = 6 * (h - 2 * o + u)
          , y = 3 * (-h + o)
          , m = function(t) {
            var i = d * t * t + l * t + v
              , n = b * t * t + g * t + y;
            return Math[Ao](i * i + n * n)
        }
          , x = (m(0) + 4 * m(.5) + m(1)) / 6;
        return x
    }
    function tn(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e
              , r = 2 * t - 4 * i + 2 * n
              , h = i - t;
            return function(t) {
                return 3 * (s * t * t + r * t + h)
            }
        }
        function e(t, i) {
            var n = s(t)
              , e = r(t);
            return Math[Ao](n * n + e * e) * i
        }
        var s = n(t[0], t[2], t[4], t[6])
          , r = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var h = 1 / i;
        return function(t) {
            if (!t)
                return 0;
            for (var i, n = 0, s = 0; ; ) {
                if (i = n + h,
                i >= t)
                    return s += e(n, i - n);
                s += e(n, h),
                n = i
            }
        }
    }
    function nn(t, i, n) {
        return fq(i, n, t.cx, t.cy) <= t[Po] + uq
    }
    function en(t, i, n, e) {
        return n = n || sn(t, i),
        new rn((t.x + i.x) / 2,(t.y + i.y) / 2,n / 2,t,i,null,e)
    }
    function sn(t, i) {
        return VY(t.x, t.y, i.x, i.y)
    }
    function rn(t, i, n, e, s, r, h) {
        this.cx = t,
        this.cy = i,
        this.r = n,
        this[Po] = n * n,
        this.p1 = e,
        this.p2 = s,
        this.p3 = r,
        this._otherPoint = h
    }
    function hn(t, i, n, e) {
        this.cx = t,
        this.cy = i,
        this.width = n,
        this[eo] = e
    }
    function an(t) {
        var i = t[0]
          , n = t[1]
          , e = t[2]
          , s = rn._jlCircle(i, n, e);
        return fn(t, i, n, e, s)
    }
    function on(t, i) {
        i = i || un(t);
        for (var n, e = i[ca] / i[eo], s = [], r = t[nh], h = 0; r > h; h++)
            n = t[h],
            s.push({
                x: n.x,
                y: n.y * e
            });
        var a = an(s);
        return a ? new hn(a.cx,a.cy / e,2 * a.r,2 * a.r / e) : void 0
    }
    function fn(t, i, n, e, s) {
        for (var r, h, a = t.length, o = s[Po], f = 0; a > f; f++)
            if (r = t[f],
            r != i && r != n && r != e) {
                var u = fq(s.cx, s.cy, r.x, r.y);
                u - uq > o && (o = u,
                h = r)
            }
        if (!h)
            return s;
        var c, _ = rn[jo](h, i, n), d = rn[jo](h, i, e), l = rn[jo](h, e, n);
        return nn(_, e.x, e.y) && (c = _),
        nn(d, n.x, n.y) && (!c || c.r > d.r) && (c = d),
        nn(l, i.x, i.y) && (!c || c.r > l.r) && (c = l),
        i = c.p1,
        n = c.p2,
        e = c.p3 || c[Lo],
        fn(t, i, n, e, c)
    }
    function un(t) {
        for (var i, n = t[nh], e = new KY, s = 0; n > s; s++)
            i = t[s],
            e.add(i.x, i.y);
        return e
    }
    function cn(t, i, n, e, s) {
        this._63 && this[Co]();
        var r = s ? this[Ro](s) : this[Do]
          , h = n / r[ca]
          , a = t - h * r.x
          , o = e / r[eo]
          , f = i - o * r.y
          , u = this._f9
          , c = [];
        return l(u, function(t) {
            var i = t[fh]()
              , n = i[Ha];
            if (n && n[nh]) {
                for (var e = n.length, s = [], r = 0; e > r; r++) {
                    var u = n[r];
                    r++;
                    var _ = n[r];
                    u = h * u + a,
                    _ = o * _ + f,
                    s[uh](u),
                    s[uh](_)
                }
                i[Ha] = s
            }
            c[uh](i)
        }, this),
        new Gq(c)
    }
    function _n(t, i, n, e, s, r) {
        if (s = s || 0,
        n = n || 0,
        !s && !r)
            return !1;
        if (!e) {
            var h = this[Ro](s);
            if (!h[No](t, i, n))
                return !1
        }
        var a = Math.round(2 * n) || 1
          , o = Ni(a, a)
          , f = (o[lo],
        -t + n)
          , u = -i + n;
        if (o[$o](1, 0, 0, 1, f, u),
        !o[Bo]) {
            this._l3(o),
            s && o[Fo](),
            r && o[Go]();
            var c = Gi(o, 0, 0, a, a);
            if (!c)
                return !1;
            c = c.data;
            for (var _ = c.length / 4; _ > 0; ) {
                if (c[4 * _ - 1] > Fq)
                    return !0;
                --_
            }
            return !1
        }
        return o[zo] = (s || 0) + 2 * n,
        this._l3(o),
        s && o[Bo](n, n) ? !0 : r ? o[Yo](n, n) : !1
    }
    function dn(t, i, n) {
        if (!this._ii)
            return null;
        var e = this._f9;
        if (e.length < 2)
            return null;
        n === !1 && (t += this._ii);
        var s = e[0];
        if (0 >= t)
            return Vs(s[Ha][0], s.points[1], e[1].points[0], e[1].points[1], t, i);
        if (t >= this._ii) {
            s = e[e[nh] - 1];
            var r, h, a = s.points, o = a[nh], f = a[o - 2], u = a[o - 1];
            if (o >= 4)
                r = a[o - 4],
                h = a[o - 3];
            else {
                s = e[e[nh] - 2];
                var c = s.lastPoint;
                r = c.x,
                h = c.y
            }
            return Vs(f, u, f + f - r, u + u - h, t - this._ii, i)
        }
        for (var _, d = 0, l = 1, o = e[nh]; o > l; l++)
            if (_ = e[l],
            _._ii) {
                if (!(d + _._ii < t)) {
                    var v, c = s[Ho];
                    if (_[qo] == Nq) {
                        var b = _[Ha];
                        v = ln(t - d, _, c.x, c.y, b[0], b[1], b[2], b[3], _._r)
                    } else {
                        if (!_._lf)
                            return Vs(c.x, c.y, _[Ha][0], _[Ha][1], t - d, i);
                        var g = Yi(_._lf, _._ii)(t - d)
                          , b = _[Ha];
                        v = _.type == Dq && 6 == b[nh] ? Zi(g, [c.x, c.y][hh](b), !0) : Hi(g, [c.x, c.y][hh](b), !0)
                    }
                    return i && (v.x -= i * Math.sin(v[Uo] || 0),
                    v.y += i * Math.cos(v[Uo] || 0)),
                    v
                }
                d += _._ii,
                s = _
            } else
                s = _
    }
    function ln(t, i, n, e, s, r, h, a) {
        if (t <= i._l1)
            return Vs(n, e, s, r, t, t);
        if (t >= i._ii)
            return t -= i._ii,
            Vs(i[Wo], i[Vo], h, a, t, t);
        if (t -= i._l1,
        i._o) {
            var o = t / i._r;
            i[Xo] && (o = -o);
            var f = Ai(i._p1x, i[Zo], o, i._o.x, i._o.y);
            return f.rotate += i[Ko] || 0,
            f[Uo] += Math.PI,
            f
        }
        return Vs(i[Jo], i[Zo], i[Wo], i[Vo], t, t)
    }
    function ei(t, i, n) {
        var e, s, r;
        0 == t._mm ? (e = -1,
        r = 0,
        s = i) : 0 == t._mj ? (e = 0,
        r = 1,
        s = n) : (e = -1 / t._mm,
        s = (t._mm - e) * i + t._ml,
        r = 1);
        var h = new XY;
        return h._mm = e,
        h._ml = s,
        h._mj = r,
        h._mh = i,
        h._md = n,
        h
    }
    function vn(t) {
        return t %= 2 * Math.PI,
        0 > t && (t += 2 * Math.PI),
        t
    }
    function bn(t, i, n, e, s, r, h, a) {
        var o = VY(i, n, e, s)
          , f = VY(e, s, r, h);
        if (!o || !f)
            return t._d = 0,
            t._r = 0,
            t._l1 = o,
            t._l2 = f,
            t._ii = 0;
        var u = yn(e, s, i, n)
          , c = yn(e, s, r, h);
        t[Ko] = u,
        t[Qo] = c;
        var _ = u - c;
        _ = vn(_),
        _ > Math.PI && (_ = 2 * Math.PI - _,
        t[Xo] = !0);
        var d = Math.PI - _
          , l = Math.tan(_ / 2)
          , v = a / l
          , b = Math.min(o, f);
        v > b && (v = b,
        a = l * v);
        var g, y = e + Math.cos(u) * v, m = s + Math.sin(u) * v, x = e + Math.cos(c) * v, p = s + Math.sin(c) * v, E = new XY(i,n,e,s), w = new XY(e,s,r,h), T = ei(E, y, m), M = ei(w, x, p), k = T._3c(M), O = Math[sa](m - k.y, y - k.x), S = Math.atan2(p - k.y, x - k.x);
        g = t._CCW ? S : O;
        for (var I, A = 0; 4 > A; ) {
            var P = A * qY;
            if (vn(P - g) <= d) {
                var j, L;
                if (I ? I++ : I = 1,
                0 == A ? (j = k.x + a,
                L = k.y) : 1 == A ? (j = k.x,
                L = k.y + a) : 2 == A ? (j = k.x - a,
                L = k.y) : (j = k.x,
                L = k.y - a),
                t[tf + I] = {
                    x: j,
                    y: L
                },
                2 == I)
                    break
            }
            A++
        }
        return t[Jo] = y,
        t._p1y = m,
        t[Wo] = x,
        t._p2y = p,
        t._o = k,
        t._d = v,
        t._r = a,
        t._l1 = o - v,
        t._l2 = f - v,
        t._ii = t._l1 + d * a
    }
    function gn(t, i, n, e, s, r, h) {
        var a = yn(n, e, t, i)
          , o = yn(n, e, s, r)
          , f = a - o;
        return h ? f : (0 > f && (f = -f),
        f > Math.PI && (f -= Math.PI),
        f)
    }
    function yn(t, i, n, e) {
        return Math[sa](e - i, n - t)
    }
    function mn(t, i) {
        for (var n = t[Io](0, 0, i[ca], i.height)[nf], e = !1, s = 3, r = n[nh]; r > s; s += 4)
            if (n[s] < 255) {
                e = !0;
                break
            }
        return e
    }
    function xn(t) {
        return t = En(t),
        /^png/i.test(t) || /^gif/i[ef](t)
    }
    function pn(t, i, n, e, s) {
        if (i && n) {
            t[zo] = .5,
            t.strokeStyle = sf,
            t[rf](0, 0, i, n),
            e && (t.fillStyle = e,
            t[hf](0, 0, i, n));
            var r = 2
              , h = 40
              , a = 28
              , o = 10
              , f = Math.min(i / (h + o), n / (a + o));
            t[af](),
            t[of] = .6,
            t[ff](i / 2, n / 2),
            t[uf](f, f),
            t.translate(-h / 2, -a / 2),
            t[cf](),
            t.rect(0, 0, h, a),
            t.clip(),
            t[_f] = df,
            t[Go](),
            t[of] = 1,
            t[lf](0, 21),
            t.lineTo(12, 12),
            t.lineTo(26, 28),
            t[lf](18, 18),
            t[vf](28, 8),
            t[vf](40, 18),
            t[zo] = r,
            t.strokeStyle = bf,
            t[Fo](),
            s && (t.beginPath(),
            t.moveTo(26, -4),
            t.lineTo(17, 11),
            t[vf](23, 17),
            t[vf](14, 32),
            t[zo] = 5,
            t.strokeStyle = e || gf,
            t[Fo]()),
            t[So]()
        }
    }
    function En(t) {
        var i = _q[yf](t);
        if (i)
            return i[1];
        var n = t.lastIndexOf(ta);
        return n >= 0 && n < t[nh] - 1 ? t[Ma](n + 1) : void 0
    }
    function wn(t) {
        if (!t)
            return null;
        if (t instanceof Gq)
            return mq;
        if (t[mf]instanceof Function)
            return yq;
        if (N(t)) {
            var i = En(t);
            if (i) {
                if (!IY && dq[ef](i))
                    return gq;
                if (lq[ef](i))
                    return bq
            }
            return vq
        }
    }
    function Tn(t, i, n) {
        if (this._l5 = wn(t),
        !this._l5)
            throw new Error("the image format is not supported",t);
        this._l0 = t,
        this._mmp = i,
        this._97 = n,
        this.width = i || YY[xf],
        this[eo] = n || YY[pf],
        this._it = {}
    }
    function Mn(t, i, n, e) {
        return i ? (wq[t] = new Tn(i,n,e),
        t) : void delete wq[t]
    }
    function kn(t) {
        if (t._k5)
            return t._k5;
        var i = N(t);
        if (!i && !t.name)
            return t._k5 = new Tn(t);
        var n = t[Ef] || t;
        return n in wq ? wq[n] : wq[n] = new Tn(t)
    }
    function On(t) {
        return t in wq
    }
    function Sn(t, i, n) {
        n = n || {};
        var e = t[Ro](n[zo]);
        if (!e.width || !e[eo])
            return !1;
        var s = i[wf](vo)
          , r = i[ho] || 1
          , h = n.scaleMode || Tf
          , a = /full/i[ef](h)
          , o = /uniform/i[ef](h)
          , f = 1
          , u = 1;
        if (a) {
            var c = i[ca]
              , _ = i[eo]
              , d = n.padding
              , l = 0
              , v = 0;
            if (d) {
                var b, g, y, m;
                D(d) ? b = g = y = m = d : (b = d.top || 0,
                g = d.bottom || 0,
                y = d.left || 0,
                m = d[oa] || 0),
                c -= y + m,
                _ -= b + g,
                l += y,
                v += b
            }
            f = c / e.width,
            u = _ / e[eo],
            o && (f > u ? (l += (c - u * e[ca]) / 2,
            f = u) : u > f && (v += (_ - f * e[eo]) / 2,
            u = f)),
            (l || v) && s[ff](l, v)
        }
        s[ff](-e.x * f, -e.y * u),
        t[mf](s, r, n, f, u, !0)
    }
    function In(t, i, n) {
        var e = kn(t);
        return e ? (e[Co](),
        (e._l5 == gq || e._6t()) && e[Mf](function(t) {
            t[kf] && (this[ca] = this[ca],
            Sn(t[kf], this, n))
        }, i),
        void Sn(e, i, n)) : (eq[ea](Of + t),
        !1)
    }
    function An(t, i, e, s) {
        var r = t[nh];
        if (r && !(0 > r)) {
            s = s || 1;
            for (var h, a, o, f = [], u = 0; u++ < r; )
                if (h = t[Sf](u, 0),
                h && VY(i, e, h.x, h.y) <= s) {
                    a = u,
                    o = h[Uo];
                    break
                }
            if (a !== n) {
                for (var c, _, d = 0, u = 0, l = t._f9.length; l > u; u++) {
                    if (h = t._f9[u],
                    !c && (d += h._ii || 0,
                    d > a))
                        if (c = !0,
                        h[qo] == Cq || h[qo] == $q)
                            f[uh](new Bq(Cq,[i, e]));
                        else {
                            var v = Math.max(10, h._ii / 6)
                              , b = v * Math.sin(o)
                              , g = v * Math.cos(o);
                            if (h[qo] == Dq) {
                                var y = h[Ha][0]
                                  , m = h[Ha][1];
                                if (_) {
                                    var x = new XY(i,e,i + g,e + b)
                                      , p = x._3c(new XY(_[Ho].x,_[Ho].y,h[Ha][0],h.points[1]));
                                    p.x !== n && (y = p.x,
                                    m = p.y)
                                }
                                f.push(new Bq(Dq,[y, m, i - g, e - b, i, e]))
                            } else
                                f[uh](new Bq(Rq,[i - g, e - b, i, e]));
                            if (h[Ha])
                                if (h[qo] == Dq) {
                                    h[Ha][0] = i + g,
                                    h[Ha][1] = e + b;
                                    var x = new XY(i,e,i + g,e + b)
                                      , p = x._3c(new XY(h.points[2],h[Ha][3],h.points[4],h[Ha][5]));
                                    p.x !== n && (h[Ha][2] = p.x,
                                    h.points[3] = p.y)
                                } else if (h[qo] == Rq) {
                                    h.type = Dq,
                                    h.points = [i + g, e + b][hh](h[Ha]);
                                    var x = new XY(i,e,i + g,e + b)
                                      , p = x._3c(new XY(h[Ha][2],h[Ha][3],h.points[4],h[Ha][5]));
                                    p.x !== n && (h.points[2] = p.x,
                                    h[Ha][3] = p.y)
                                } else
                                    h[qo] == Cq && (h[qo] = Rq,
                                    h[Ha] = [i + g, e + b].concat(h[Ha]),
                                    u == l - 1 && (h[If] = !0))
                        }
                    f[uh](h),
                    _ = h
                }
                return f
            }
        }
    }
    function Pn(t) {
        var i = t.width
          , n = t[eo]
          , e = Gi(t.g, 0, 0, i, n);
        return e ? Ln(e[nf], i, n) : void 0
    }
    function jn(t, i, n) {
        this._10(t, i, n)
    }
    function Ln(t, i, n) {
        return new jn(t,i,n)
    }
    function Cn(t) {
        if (Xh == t[0]) {
            if (t = t.substring(1),
            3 == t[nh])
                t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            else if (6 != t[nh])
                return;
            return t = parseInt(t, 16),
            [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i.test(t)) {
            var i = t.indexOf(Af)
              , n = t[ch](Vh);
            if (0 > i || i > n)
                return;
            if (t = t.substring(i + 1, n),
            t = t[Ph](Uh),
            t.length < 3)
                return;
            var e = parseInt(t[0])
              , s = parseInt(t[1])
              , r = parseInt(t[2])
              , h = 3 == t[nh] ? 255 : parseInt(t[3]);
            return [e, s, r, h]
        }
        eq.error("color format error, [" + t + Pf)
    }
    function Rn(t, i, n) {
        return n || (n = YY[jf]),
        n == sq[Lf] ? t * i : n == sq[Cf] ? Math.min(t, i) : n == sq[Rf] ? 1 - (1 - i) / t : n == sq[Df] ? t + i - 1 : n == sq[Nf] ? Math.max(t, i) : n == sq[$f] ? t + i - t * i : i
    }
    function Dn(t, i, n) {
        var e = Gi(t.g, 0, 0, t[ca], t[eo]);
        if (e) {
            var s = e.data;
            if (n instanceof Function)
                s = n(t, s, i) || s;
            else {
                var r = i[0] / 255
                  , h = i[1] / 255
                  , a = i[2] / 255;
                if (n == sq[Bf])
                    for (var o = 0, f = s[nh]; f > o; o += 4) {
                        var u = 77 * s[o] + 151 * s[o + 1] + 28 * s[o + 2] >> 8;
                        s[o] = u * r | 0,
                        s[o + 1] = u * h | 0,
                        s[o + 2] = u * a | 0
                    }
                else
                    for (var o = 0, f = s[nh]; f > o; o += 4)
                        s[o] = 255 * Rn(r, s[o] / 255, n) | 0,
                        s[o + 1] = 255 * Rn(h, s[o + 1] / 255, n) | 0,
                        s[o + 2] = 255 * Rn(a, s[o + 2] / 255, n) | 0
            }
            var t = Di(t[ca], t.height);
            return t.g[Ff](e, 0, 0),
            t
        }
    }
    function Nn(t, i, n, e) {
        return 1 > n && (n = 1),
        $n(t - n, i - n, 2 * n, 2 * n, e)
    }
    function $n(t, i, n, e, s) {
        n = Math[Gf](n) || 1,
        e = Math.round(e) || 1;
        var r = Ni(n, e);
        r[$o](1, 0, 0, 1, -t, -i),
        s[mf](r);
        var h = Gi(r, 0, 0, n, e);
        if (!h)
            return !1;
        h = h.data;
        for (var a = h[nh] / 4; a-- > 0; )
            if (h[4 * a - 1] > Fq)
                return !0;
        return !1
    }
    function Bn(t, i, n, e, s, r) {
        t -= s.$x,
        i -= s.$y;
        var h = s._fd.intersection(t, i, n, e);
        if (!h)
            return !1;
        t = h.x * r,
        i = h.y * r,
        n = h.width * r,
        e = h[eo] * r,
        n = Math.round(n) || 1,
        e = Math.round(e) || 1;
        var a = Ni()
          , o = a.canvas;
        o[ca] < n || o[eo] < e ? (o.width = n,
        o.height = e) : (a[$o](1, 0, 0, 1, 0, 0),
        a.clearRect(0, 0, n, e)),
        a.setTransform(1, 0, 0, 1, -t - s.$x * r, -i - s.$y * r),
        a[uf](r, r),
        s._j7(a, 1);
        var f = Gi(a, 0, 0, n, e);
        if (!f)
            return !1;
        f = f[nf];
        for (var u = f.length / 4; u-- > 0; )
            if (f[4 * u - 1] > Fq)
                return !0;
        return !1
    }
    function Fn(t, i, n, e, s, r, h, a, o) {
        if (hi(t, i, n, e, a, o))
            return null;
        var f, u, c, _ = new Bq(Cq,[t + n - s, i]), d = new Bq(Rq,[t + n, i, t + n, i + r]), l = new Bq(Cq,[t + n, i + e - r]), v = new Bq(Rq,[t + n, i + e, t + n - s, i + e]), b = new Bq(Cq,[t + s, i + e]), g = new Bq(Rq,[t, i + e, t, i + e - r]), y = new Bq(Cq,[t, i + r]), m = new Bq(Rq,[t, i, t + s, i]), x = (new Bq($q),
        [_, d, l, v, b, g, y, m]), p = new KY(t + s,i + r,n - s - s,e - r - r);
        t > a ? (f = tH,
        c = 5) : a > t + n ? (f = nH,
        c = 1) : (f = iH,
        c = 0),
        i > o ? (u = eH,
        f == tH && (c = 7)) : o > i + e ? (u = rH,
        f == nH ? c = 3 : f == iH && (c = 4)) : (u = sH,
        f == tH ? c = 6 : f == nH && (c = 2));
        var E = Un(c, t, i, n, e, s, r, h, a, o, p)
          , w = E[0]
          , T = E[1]
          , M = new Gq
          , k = M._f9;
        k[uh](new Bq(Lq,[w.x, w.y])),
        k.push(new Bq(Cq,[a, o])),
        k[uh](new Bq(Cq,[T.x, T.y])),
        T._l7 && (k[uh](T._l7),
        T._l7NO++);
        for (var O = T[zf] % 8, S = w._l7NO; k[uh](x[O]),
        ++O,
        O %= 8,
        O != S; )
            ;
        return w._l7 && k.push(w._l7),
        M[Yf](),
        M
    }
    function Gn(t, i, e, s, r, h, a, o, f, u, c, _, d, l) {
        var v = new XY(_,d,e,s)
          , b = new XY(i[0],i[1],i[4],i[5])
          , g = b._3c(v, c)
          , y = g[0]
          , m = g[1];
        if (y._rest !== n) {
            y[zf] = (t - 1) % 8,
            m[zf] = (t + 1) % 8;
            var x = y._rest;
            7 == t ? (y.y = h + u + Math.min(l.height, x),
            m.x = r + f + Math.min(l.width, x)) : 5 == t ? (y.x = r + f + Math.min(l.width, x),
            m.y = h + o - u - Math.min(l[eo], x)) : 3 == t ? (y.y = h + o - u - Math.min(l[eo], x),
            m.x = r + a - f - Math.min(l[ca], x)) : 1 == t && (y.x = r + a - f - Math.min(l[ca], x),
            m.y = h + u + Math.min(l[eo], x))
        } else {
            v._m7(v._mh, v._md, y.x, y.y),
            y = v._$g(i),
            v._m7(v._mh, v._md, m.x, m.y),
            m = v._$g(i);
            var p = Wn(i, [y, m])
              , E = p[0]
              , w = p[2];
            y._l7NO = t,
            m[zf] = t,
            y._l7 = new Bq(Rq,E[ah](2)),
            m._l7 = new Bq(Rq,w.slice(2))
        }
        return [y, m]
    }
    function zn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (o - a >= i + r)
            u = {
                y: n,
                x: o - a
            },
            u._l7NO = 0;
        else {
            u = {
                y: n + h,
                x: Math.max(i, o - a)
            };
            var _ = [i, n + h, i, n, i + r, n]
              , d = new XY(o,f,u.x,u.y);
            if (u = d._$g(_)) {
                B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Wn(_, [u]);
                l = l[0],
                l && (u._l7 = new Bq(Rq,l[ah](2))),
                u[zf] = 7
            } else
                u = {
                    y: n,
                    x: i + r
                },
                u[zf] = 0
        }
        if (i + e - r >= o + a)
            c = {
                y: n,
                x: o + a
            },
            c._l7NO = 0;
        else {
            c = {
                y: n + h,
                x: Math.min(i + e, o + a)
            };
            var v = [i + e - r, n, i + e, n, i + e, n + h]
              , d = new XY(o,f,c.x,c.y);
            if (c = d._$g(v)) {
                B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Wn(v, [c]);
                l && l[l[nh] - 1] && (c._l7 = new Bq(Rq,l[l[nh] - 1][ah](2))),
                c._l7NO = 1
            } else
                c = {
                    y: n,
                    x: i + e - r
                },
                c[zf] = 0
        }
        return [u, c]
    }
    function Yn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (f - a >= n + h)
            u = {
                x: i + e,
                y: f - a
            },
            u[zf] = 2;
        else {
            u = {
                x: i + e - r,
                y: Math.max(n, f - a)
            };
            var _ = [i + e - r, n, i + e, n, i + e, n + h]
              , d = new XY(o,f,u.x,u.y);
            if (u = d._$g(_)) {
                B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Wn(_, [u]);
                l = l[0],
                l && (u._l7 = new Bq(Rq,l[ah](2))),
                u[zf] = 1
            } else
                u = {
                    x: i + e,
                    y: n + h
                },
                u._l7NO = 2
        }
        if (n + s - h >= f + a)
            c = {
                x: i + e,
                y: f + a
            },
            c[zf] = 2;
        else {
            c = {
                x: i + e - r,
                y: Math.min(n + s, f + a)
            };
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s]
              , d = new XY(o,f,c.x,c.y);
            if (c = d._$g(v)) {
                B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Wn(v, [c]);
                l[1] && (c._l7 = new Bq(Rq,l[1].slice(2))),
                c[zf] = 3
            } else
                c = {
                    x: i + e,
                    y: n + s - h
                },
                c._l7NO = 2
        }
        return [u, c]
    }
    function Hn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (o - a >= i + r)
            c = {
                y: n + s,
                x: o - a
            },
            c._l7NO = 4;
        else {
            c = {
                y: n + s - h,
                x: Math.max(i, o - a)
            };
            var _ = [i + r, n + s, i, n + s, i, n + s - h]
              , d = new XY(o,f,c.x,c.y);
            if (c = d._$g(_)) {
                B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Wn(_, [c]);
                l = l[l.length - 1],
                l && (c._l7 = new Bq(Rq,l.slice(2))),
                c._l7NO = 5
            } else
                c = {
                    y: n + s,
                    x: i + r
                },
                c[zf] = 4
        }
        if (i + e - r >= o + a)
            u = {
                y: n + s,
                x: o + a
            },
            u[zf] = 4;
        else {
            u = {
                y: n + s - h,
                x: Math.min(i + e, o + a)
            };
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s]
              , d = new XY(o,f,u.x,u.y);
            if (u = d._$g(v)) {
                B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Wn(v, [u]);
                l[0] && (u._l7 = new Bq(Rq,l[0][ah](2))),
                u._l7NO = 3
            } else
                u = {
                    y: n + s,
                    x: i + e - r
                },
                u[zf] = 4
        }
        return [u, c]
    }
    function qn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (f - a >= n + h)
            c = {
                x: i,
                y: f - a
            },
            c[zf] = 6;
        else {
            c = {
                x: i + r,
                y: Math.max(n, f - a)
            };
            var _ = [i, n + h, i, n, i + r, n]
              , d = new XY(o,f,c.x,c.y);
            if (c = d._$g(_)) {
                B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Wn(_, [c]);
                l = l[l[nh] - 1],
                l && (c._l7 = new Bq(Rq,l[ah](2)))
            } else
                c = {
                    x: i,
                    y: n + h
                };
            c[zf] = 7
        }
        if (n + s - h >= f + a)
            u = {
                x: i,
                y: f + a
            },
            u[zf] = 6;
        else {
            u = {
                x: i + r,
                y: Math.min(n + s, f + a)
            };
            var v = [i + r, n + s, i, n + s, i, n + s - h]
              , d = new XY(o,f,u.x,u.y);
            if (u = d._$g(v)) {
                B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Wn(v, [u]);
                l[0] && (u._l7 = new Bq(Rq,l[0][ah](2))),
                u._l7NO = 5
            } else
                u = {
                    x: i,
                    y: n + s - h
                },
                u._l7NO = 6
        }
        return [u, c]
    }
    function Un(t, i, n, e, s, r, h, a, o, f, u) {
        var c = a / 2;
        switch (r = r || 1e-4,
        h = h || 1e-4,
        t) {
        case 7:
            var _ = [i, n + h, i, n, i + r, n]
              , d = i + r
              , l = n + h;
            return Gn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
        case 5:
            return _ = [i + r, n + s, i, n + s, i, n + s - h],
            d = i + r,
            l = n + s - h,
            Gn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
        case 3:
            return _ = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
            d = i + e - r,
            l = n + s - h,
            Gn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
        case 1:
            return _ = [i + e - r, n, i + e, n, i + e, n + h],
            d = i + e - r,
            l = n + h,
            Gn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
        case 0:
            return zn(t, i, n, e, s, r, h, c, o, f, u);
        case 2:
            return Yn(t, i, n, e, s, r, h, c, o, f, u);
        case 4:
            return Hn(t, i, n, e, s, r, h, c, o, f, u);
        case 6:
            return qn(t, i, n, e, s, r, h, c, o, f, u)
        }
    }
    function Wn(t, i) {
        for (var e, s, r, h, a, o, f = t[0], u = t[1], c = t[2], _ = t[3], d = t[4], l = t[5], v = [], b = 0; b < i[nh]; b++)
            a = i[b],
            o = a.t,
            0 != o && 1 != o ? (e = f + (c - f) * o,
            s = u + (_ - u) * o,
            r = c + (d - c) * o,
            h = _ + (l - _) * o,
            v.push([f, u, e, s, a.x, a.y]),
            f = a.x,
            u = a.y,
            c = r,
            _ = h) : v[uh](null);
        return r !== n && v.push([a.x, a.y, r, h, d, l]),
        v
    }
    function Vn(t) {
        return this[Hf] && this[Qo] && (t.x -= this[Qo].x,
        t.y -= this[Qo].y),
        this[qf] && Pi(t, this[qf]),
        t.x += this[Uf] || 0,
        t.y += this.$offsetY || 0,
        this[Wf] && this[Vf] ? Pi(t, this[Vf]) : t
    }
    function Xn(t) {
        return this[Wf] && this.$_hostRotate && Pi(t, -this.$_hostRotate),
        t.x -= this.$offsetX || 0,
        t.y -= this.$offsetY || 0,
        this.$rotate && Pi(t, -this[qf]),
        this[Hf] && this._mm2 && (t.x += this[Qo].x,
        t.y += this[Qo].y),
        t
    }
    function Zn() {
        var t = this.$invalidateSize;
        this[Xf] && (this[Xf] = !1,
        this.$invalidateAnchorPoint = !0,
        this._7w[Zf](this._iz),
        this[Kf] && this._7w.grow(this[Kf]),
        this[Jf] && this._7w[Qf](this.$border));
        var i = this._$n();
        if (i)
            var n = this[tu] && this.$pointerWidth;
        return this.$invalidateAnchorPoint && this.$layoutByAnchorPoint && (this[iu] = !1,
        n && (t = !0),
        this[Qo] = ci(this[nu], this._7w[ca], this._7w[eo]),
        this[Qo].x += this._7w.x,
        this._mm2.y += this._7w.y),
        i ? (t && (this[eu] = !0,
        Kn[sh](this, n)),
        this[eu] && (this._mlackgroundGradientInvalidateFlag = !1,
        this._mlackgroundGradient = this[su] && this._lqShape && this._lqShape[Do] ? Tq[lh].generatorGradient[sh](this[su], this._lqShape.bounds) : null),
        t) : (this.__lsPointer = !1,
        t)
    }
    function Kn(t) {
        var i = this._7w.x + this.$border / 2
          , n = this._7w.y + this.$border / 2
          , e = this._7w.width - this.$border
          , s = this._7w[eo] - this.$border
          , r = 0
          , h = 0;
        if (this[ru] && (D(this.$borderRadius) ? r = h = this[ru] : (r = this[ru].x || 0,
        h = this.$borderRadius.y || 0),
        r = Math.min(r, e / 2),
        h = Math.min(h, s / 2)),
        t && (this[hu] = this[Qo].x - this.$offsetX + this.$pointerX,
        this[au] = this[Qo].y - this[ou] + this[fu],
        !this._7w[No](this[hu], this._pointerY))) {
            var a = new Yq(i,n,e,s,r,h,this[uu],this[hu],this[au]);
            return this._lqShape = a._l7,
            this[cu].bounds.set(i, n, e, s),
            void (this[_u] = !0)
        }
        this._lqShape && this[cu][so](),
        this[cu] = _W.getRect(i, n, e, s, r, h, this[cu]),
        this._lqShape[Do].set(i, n, e, s)
    }
    function Jn(t, i, n, e) {
        return e && (t.width < 0 || t.height < 0) ? (t.x = i,
        t.y = n,
        void (t[ca] = t[eo] = 0)) : (i < t.x ? (t[ca] += t.x - i,
        t.x = i) : i > t.x + t.width && (t[ca] = i - t.x),
        void (n < t.y ? (t[eo] += t.y - n,
        t.y = n) : n > t.y + t[eo] && (t[eo] = n - t.y)))
    }
    function Qn(t, i, e) {
        var s, r = t.position, h = t[du] === n ? this[du] : t[du];
        return this.$data instanceof Gq && h ? (s = cq._mmm(r, this[lu], this.lineWidth, i, e),
        s.x *= this._j1,
        s.y *= this._j3) : (s = ci(r, this._7w[ca], this._7w.height),
        s.x += this._7w.x,
        s.y += this._7w.y),
        Vn.call(this, s)
    }
    function te(t, i) {
        if (i)
            if (i._7w[vu]())
                t.$x = i.$x,
                t.$y = i.$y;
            else {
                var n = Qn[sh](i, t);
                t.$x = n.x,
                t.$y = n.y,
                t._hostRotate = n[Uo]
            }
        else
            t.$x = 0,
            t.$y = 0;
        t[bu] && Uq.call(t)
    }
    function ie(t) {
        if (t[gu] === n) {
            var i, e;
            if (t[yu])
                i = t.getLineDash,
                e = t[yu];
            else {
                var s;
                if (t[mu] !== n)
                    s = mu;
                else {
                    if (t.webkitLineDash === n)
                        return !1;
                    s = xu
                }
                e = function(t) {
                    this[s] = t
                }
                ,
                i = function() {
                    return this[s]
                }
            }
            Z(t, gu, {
                get: function() {
                    return i[sh](this)
                },
                set: function(t) {
                    e[sh](this, t)
                }
            })
        }
        if (t.lineDashOffset === n) {
            var r;
            if (t.mozDashOffset !== n)
                r = pu;
            else {
                if (t.webkitLineDashOffset === n)
                    return;
                r = Eu
            }
            Z(t, wu, {
                get: function() {
                    return this[r]
                },
                set: function(t) {
                    this[r] = t
                }
            })
        }
    }
    function ne(t, i, n, e, s) {
        var r, h, a, o, f, u, c, _, d = function(t) {
            return function(i) {
                t(i)
            }
        }, l = function() {
            h = null,
            a = null,
            o = f,
            f = null,
            u = null
        }, v = function(t) {
            r = t,
            c || (c = Di()),
            c.width = r.width,
            c[eo] = r.height,
            i[ca] = r.width,
            i[eo] = r[eo]
        }, b = function(t) {
            g(),
            l(),
            h = t[Tu] ? t[Mu] : null,
            a = 10 * t[ku],
            f = t[Ou]
        }, g = function() {
            if (u) {
                var t = u.getImageData(0, 0, r[ca], r.height)
                  , n = {
                    data: t,
                    _pixels: Ln(t[nf], r[ca], r.height),
                    delay: a
                };
                s[sh](i, n)
            }
        }, y = function(t) {
            u || (u = c[wf](vo));
            var i = t[Su] ? t.lct : r.gct
              , n = u[Io](t[Iu], t.topPos, t[ca], t[eo]);
            t[Au].forEach(function(t, e) {
                h !== t ? (n[nf][4 * e + 0] = i[t][0],
                n[nf][4 * e + 1] = i[t][1],
                n[nf][4 * e + 2] = i[t][2],
                n.data[4 * e + 3] = 255) : (2 === o || 3 === o) && (n.data[4 * e + 3] = 0)
            }),
            u[Ff](n, t[Iu], t[Pu])
        }, m = function() {}, x = {
            hdr: d(v),
            gce: d(b),
            com: d(m),
            app: {
                NETSCAPE: d(m)
            },
            img: d(y, !0),
            eof: function() {
                g(),
                n.call(i)
            }
        }, p = new XMLHttpRequest;
        IY || p[ju]("text/plain; charset=x-user-defined"),
        p[Lu] = function() {
            _ = new Kq(p[Wa]);
            try {
                Qq(_, x)
            } catch (t) {
                e[sh](i, Xa)
            }
        }
        ,
        p[Cu] = function() {
            e[sh](i, Ru)
        }
        ,
        p[Ja](Qa, t, !0),
        p[no]()
    }
    function ee(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 99, 110, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 57, 50, 54, 55, 54, 49, 48, 53, 50, 50, 48, 10, 10, 10];
        return i[Du](function(n, e) {
            i[e] = t(n)
        }),
        i.join("")
    }
    function se(t, i) {
        try {
            if (null == t || t.length < 8)
                return;
            if (null == i || i[nh] <= 0)
                return;
            for (var n = "", e = 0; e < i[nh]; e++)
                n += i[Nu](e).toString();
            var s = Math[Yh](n.length / 5)
              , r = parseInt(n.charAt(s) + n.charAt(2 * s) + n[$u](3 * s) + n[$u](4 * s) + n[$u](5 * s), 10)
              , h = Math.round(i[nh] / 2)
              , a = Math.pow(2, 31) - 1
              , o = parseInt(t[Ma](t[nh] - 8, t[nh]), 16);
            for (t = t.substring(0, t.length - 8),
            n += o; n.length > 10; )
                n = (parseInt(n[Ma](0, 10), 10) + parseInt(n.substring(10, n.length), 10)).toString();
            n = (r * n + h) % a;
            for (var f = "", u = "", e = 0; e < t[nh]; e += 2)
                f = parseInt(parseInt(t[Ma](e, e + 2), 16) ^ Math[Yh](n / a * 255), 10),
                u += String.fromCharCode(f),
                n = (r * n + h) % a;
            return 0 | u[0] ? AU = rU[Bu + oU + Fu](u) : null
        } catch (c) {}
    }
    function re() {
        var t = iU;
        if (!t)
            return void (DU = !0);
        IU = t;
        var i;
        t = t.split(Uh);
        for (var n = 0; n < t[nh] && (i = se(t[n], eU),
        !(i && i[Ph](ko).length >= 8)); )
            1 == t[nh] && (i = se(t[n], Gu)),
            n++;
        if (!i || i[Ph](ko)[nh] < 8)
            return LU = !0,
            "" === eU || eU == zu + _U + Yu + dU + Hu || eU == qu + cU + Uu ? (CU = BU,
            DU = !1,
            void (SU = !1)) : (CU = BU,
            void (DU = !0));
        SU = i[Ph](ko);
        var e = SU[3];
        if (e != FV)
            return void (LU = !0);
        DU = !1;
        var s = SU[0];
        (Wu == s || Vu == s) && (LU = !1);
        var r = SU[5];
        RU = r;
        var h = SU[6];
        CU = h
    }
    function he() {
        var t = IU;
        if (t) {
            var i;
            t = t.split(Uh);
            for (var n = 0; n < t[nh] && (i = FU(t[n], eU),
            !(i && i[Ph](ko)[nh] >= 8)); )
                1 == t[nh] && (i = FU(t[n], Gu)),
                n++;
            if (i.split(ko).length >= 8)
                return void (NU = !1)
        }
        return eU && eU != zu + _U + Yu + dU + Hu && eU != qu + cU + Uu ? void (NU = !0) : void (NU = !1)
    }
    function ae() {
        if (LU) {
            var t = gr[yU + qo]._j7
              , i = jU;
            gr[yU + qo]._j7 = function() {
                t[dh](this, arguments),
                i.call(this[Xu], this.g)
            }
            ;
            var n = tW[yU + qo]._gj;
            tW[yU + qo]._gj = function(t) {
                n[dh](this, arguments),
                i.call(this, t)
            }
        }
    }
    function oe() {
        if (RU !== !0 && RU) {
            var t = RU[Ph](ta);
            if (3 != t[nh])
                return void (lW[lh]._j7 = null);
            var i = parseInt(t[0], 10)
              , n = parseInt(t[1], 10)
              , e = parseInt(t[2], 10)
              , s = 3
              , r = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            nU > r && (lW[lh]._j7 = null)
        }
    }
    function fe() {
        var t = 0 | CU;
        if (t) {
            var i = pH[lh]._k6;
            pH[yU + qo]._k6 = function() {
                return this._jg[nh] > t ? !1 : i[dh](this, arguments)
            }
        }
    }
    function ue() {
        DU && (HY[yU + qo]._k6 = HY[yU + qo]._fa)
    }
    function ce() {
        if (NU) {
            var t = jU
              , i = tW[yU + qo]._gj;
            tW[yU + qo]._gj = function(n) {
                i[dh](this, arguments),
                t[sh](this, n)
            }
        }
    }
    function _e() {
        if ($U) {
            var t = gr[yU + qo]._j7
              , i = jU;
            gr[yU + qo]._j7 = function() {
                t[dh](this, arguments),
                i[sh](this._mlaseCanvas, this.g)
            }
        }
    }
    function de() {
        SU === n && (tW[yU + qo]._ir = KY[Zu])
    }
    function le(t) {
        var i = Di(!0);
        return ie(i.g),
        i[Ku] = function() {
            return !1
        }
        ,
        t[Ju](i),
        i.className = qU,
        i
    }
    function d(t, i) {
        function n(t, n) {
            for (var e = t[nh], s = n[nh], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f; )
                h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return h
        }
        function e(t) {
            var i = t.length
              , s = Math[oh](i / 2);
            return 1 >= i ? t : n(e(t[ah](0, s)), e(t[ah](s)))
        }
        return e(t)
    }
    function ve(t) {
        t[ca] = t[ca]
    }
    function be(t) {
        KU || (KU = "imageSmoothingEnabled"in CanvasRenderingContext2D[lh] ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled"in CanvasRenderingContext2D[lh] ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled"in CanvasRenderingContext2D[lh] ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled"in CanvasRenderingContext2D.prototype ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"),
        t[KU] = !1
    }
    function ge(t, i, n, e, s) {
        e = V(i + e) - (i = W(i)),
        s = V(n + s) - (n = W(n)),
        t.clearRect(i, n, e, s),
        t.rect(i, n, e, s)
    }
    function W(t) {
        return Math[Yh](t)
    }
    function V(t) {
        return Math.ceil(t)
    }
    function ye(t) {
        var i = [];
        return t[Du](function(t) {
            i[uh](-t)
        }),
        i
    }
    function me(t) {
        return t %= nW,
        0 > t && (t += nW),
        t
    }
    function xe(t, i, n, e, s, r, h, a) {
        var o = ((t * e - i * n) * (s - h) - (t - n) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h))
          , f = ((t * e - i * n) * (r - a) - (i - e) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h));
        if (isNaN(o) || isNaN(f))
            return !1;
        if (t >= n) {
            if (!(o >= n && t >= o))
                return !1
        } else if (!(o >= t && n >= o))
            return !1;
        if (i >= e) {
            if (!(f >= e && i >= f))
                return !1
        } else if (!(f >= i && e >= f))
            return !1;
        if (s >= h) {
            if (!(o >= h && s >= o))
                return !1
        } else if (!(o >= s && h >= o))
            return !1;
        if (r >= a) {
            if (!(f >= a && r >= f))
                return !1
        } else if (!(f >= r && a >= f))
            return !1;
        return !0
    }
    function pe(t, i) {
        for (var n = 0, e = t[nh]; e > n; ) {
            for (var s = t[n], r = t[(n + 1) % e], h = 0; 4 > h; ) {
                var a = i[h]
                  , o = i[(h + 1) % e];
                if (xe(s[0], s[1], r[0], r[1], a[0], a[1], o[0], o[1]))
                    return !0;
                h++
            }
            n++
        }
        return !1
    }
    function Ee(t, i, n, e) {
        return [t * e - i * n, t * n + i * e]
    }
    function we(t) {
        return t[Qu] ? (t = t[Qu],
        t._dg ? t._dg : t instanceof dW && t._gl === !1 ? t : null) : null
    }
    function Te(t, i, n) {
        if (n = n || i[tc],
        n == t)
            return !1;
        var e = t[ic](n);
        return e || (e = new IV(t,n),
        t._linkedNodes[n.id] = e),
        e._he(i, t)
    }
    function Me(t, i, n) {
        if (n = n || i.toAgent,
        n == t)
            return !1;
        var e = t[ic](n);
        return e ? e[nc](i, t) : void 0
    }
    function ke(t, i, e) {
        return e === n && (e = i[tc]),
        e != t ? (t._7r || (t._7r = new HY),
        t._7r.add(i) === !1 ? !1 : void t._8y++) : void 0
    }
    function Oe(t, i, n) {
        return t._7r && t._7r[Lh](i) !== !1 ? (t._8y--,
        void Me(t, i, n)) : !1
    }
    function Se(t, i) {
        return i[ec] != t ? (t._8r || (t._8r = new HY),
        t._8r.add(i) === !1 ? !1 : void t[sc]++) : void 0
    }
    function Ie(t, i) {
        return t._8r && t._8r[Lh](i) !== !1 ? (t[sc]--,
        void Me(i[ec], i, t)) : !1
    }
    function Ae(t, i) {
        if (i === n && (i = t instanceof fW),
        i) {
            if (t[rc]())
                return null;
            var e = Ae(t.from, !1);
            if (t[hc]())
                return e;
            for (var s = Ae(t.to, !1); null != e && null != s; ) {
                if (e == s)
                    return e;
                if (e[ac](s))
                    return s;
                if (s[ac](e))
                    return e;
                e = Ae(e, !1),
                s = Ae(s, !1)
            }
            return null
        }
        for (var r = t[Qu]; null != r; ) {
            if (r._hq())
                return r;
            r = r[Qu]
        }
        return null
    }
    function Pe(t, i, n) {
        t._hq() && t[th]() && t[eh][Du](function(t) {
            t instanceof uW && i.add(t) && Pe(t, i, n)
        }, this),
        t[oc]() && t._d9[Du](function(t) {
            (null == n || n[fc](t)) && i.add(t) && Pe(t, i, n)
        })
    }
    function je(t, i) {
        i[Qu] ? i[Qu][uc](i, i.parent[cc] - 1) : t[_c].setIndex(i, t.roots[nh] - 1)
    }
    function Le(t, i) {
        i[Qu] ? i[Qu][uc](i, 0) : t[_c][dc](i, 0)
    }
    function Ce(t, i) {
        if (i instanceof fW)
            return void (i[rc]() || De(t, i));
        for (je(t, i); i = i.parent; )
            je(t, i)
    }
    function Re(t, i) {
        if (i instanceof fW)
            return void (i.isInvalid() || Ne(t, i));
        for (Le(t, i); i = i[Qu]; )
            Le(t, i)
    }
    function De(t, i) {
        var n = i[ec];
        if (i[hc]())
            je(t, n);
        else {
            var e = i.toAgent;
            je(t, n),
            je(t, e)
        }
    }
    function Ne(t, i) {
        var n = i.fromAgent;
        if (i[hc]())
            Le(t, n);
        else {
            var e = i.toAgent;
            Le(t, n),
            Le(t, e)
        }
    }
    function $e(t, i) {
        return t._8y++,
        t._fk ? (i._hs = t._hl,
        t._hl._hr = i,
        void (t._hl = i)) : (t._fk = i,
        void (t._hl = i))
    }
    function Be(t, i) {
        t._8y--,
        t._hl == i && (t._hl = i._hs),
        i._hs ? i._hs._hr = i._hr : t._fk = i._hr,
        i._hr && (i._hr._hs = i._hs),
        i._hs = null,
        i._hr = null,
        Me(t, i, i.$to)
    }
    function Fe(t, i) {
        return t[sc]++,
        t._hj ? (i._j9 = t._iu,
        t._iu._j6 = i,
        void (t._iu = i)) : (t._hj = i,
        void (t._iu = i))
    }
    function Ge(t, i) {
        t[sc]--,
        t._iu == i && (t._iu = i._j9),
        i._j9 ? i._j9._j6 = i._j6 : t._hj = i._j6,
        i._j6 && (i._j6._j9 = i._j9),
        i._j9 = null,
        i._j6 = null
    }
    function ze(t, i) {
        return i = i || new HY,
        t.forEachEdge(function(t) {
            i.add({
                id: t.id,
                edge: t,
                fromAgent: t.$from._dg,
                toAgent: t.$to._dg
            })
        }),
        t[lc](function(t) {
            t instanceof uW && ze(t, i)
        }),
        i
    }
    function Ye(t, i, n) {
        return qe(t, i, n) === !1 ? !1 : He(t, i, n)
    }
    function He(t, i, n) {
        if (t._fk)
            for (var e = t._fk; e; ) {
                if (i.call(n, e) === !1)
                    return !1;
                e = e._hr
            }
    }
    function qe(t, i, n) {
        if (t._hj)
            for (var e = t._hj; e; ) {
                if (i[sh](n, e) === !1)
                    return !1;
                e = e._j6
            }
    }
    function Ue(t, i, e, s, r, h, a) {
        return h || a ? (h = h || 0,
        a = a === n ? h : a || 0,
        h = Math.min(h, s / 2),
        a = Math.min(a, r / 2),
        t[lf](i + h, e),
        t[vf](i + s - h, e),
        t[vc](i + s, e, i + s, e + a),
        t[vf](i + s, e + r - a),
        t[vc](i + s, e + r, i + s - h, e + r),
        t.lineTo(i + h, e + r),
        t[vc](i, e + r, i, e + r - a),
        t[vf](i, e + a),
        t.quadTo(i, e, i + h, e),
        t[Yf](),
        t) : (t.moveTo(i, e),
        t.lineTo(i + s, e),
        t.lineTo(i + s, e + r),
        t[vf](i, e + r),
        t.closePath(),
        t)
    }
    function We(t, i) {
        var n = i.r || 1
          , e = i.cx || 0
          , s = i.cy || 0
          , r = n * Math.tan(Math.PI / 8)
          , h = n * Math.sin(Math.PI / 4);
        t[lf](e + n, s),
        t[vc](e + n, s + r, e + h, s + h),
        t[vc](e + r, s + n, e, s + n),
        t.quadTo(e - r, s + n, e - h, s + h),
        t[vc](e - n, s + r, e - n, s),
        t[vc](e - n, s - r, e - h, s - h),
        t[vc](e - r, s - n, e, s - n),
        t.quadTo(e + r, s - n, e + h, s - h),
        t.quadTo(e + n, s - r, e + n, s)
    }
    function Ve(t, i, n, e, s) {
        i instanceof hn && (e = i[ca],
        s = i.height,
        n = i.cy - s / 2,
        i = i.cx - e / 2);
        var r = .5522848
          , h = e / 2 * r
          , a = s / 2 * r
          , o = i + e
          , f = n + s
          , u = i + e / 2
          , c = n + s / 2;
        return t[lf](i, c),
        t[bc](i, c - a, u - h, n, u, n),
        t.curveTo(u + h, n, o, c - a, o, c),
        t[bc](o, c + a, u + h, f, u, f),
        t[bc](u - h, f, i, c + a, i, c),
        t
    }
    function Xe(t, i, n, e, s) {
        var r = 2 * e
          , h = 2 * s
          , a = i + e / 2
          , o = n + s / 2;
        return t[lf](a - r / 4, o - h / 12),
        t[vf](i + .306 * e, n + .579 * s),
        t.lineTo(a - r / 6, o + h / 4),
        t[vf](i + e / 2, n + .733 * s),
        t[vf](a + r / 6, o + h / 4),
        t[vf](i + .693 * e, n + .579 * s),
        t[vf](a + r / 4, o - h / 12),
        t[vf](i + .611 * e, n + .332 * s),
        t[vf](a + 0, o - h / 4),
        t[vf](i + .388 * e, n + .332 * s),
        t[Yf](),
        t
    }
    function Ze(t, i, n, e, s) {
        return t.moveTo(i, n),
        t.lineTo(i + e, n + s / 2),
        t.lineTo(i, n + s),
        t[Yf](),
        t
    }
    function Ke(t, i, n, e, s) {
        return t[lf](i, n + s / 2),
        t[vf](i + e / 2, n),
        t.lineTo(i + e, n + s / 2),
        t[vf](i + e / 2, n + s),
        t[Yf](),
        t
    }
    function Je(t, i, n, e, s, r) {
        return t.moveTo(i, n),
        t.lineTo(i + e, n + s / 2),
        t[vf](i, n + s),
        r || (t.lineTo(i + .25 * e, n + s / 2),
        t.closePath()),
        t
    }
    function Qe(t, i, n, e, s) {
        if (!t || 3 > t)
            throw new Error("edge number must greater than 2");
        t = 0 | t,
        e = e || 50,
        s = s || 0,
        i = i || 0,
        n = n || 0;
        for (var r, h, a = 0, o = 2 * Math.PI / t, f = new Gq; t > a; )
            r = i + e * Math.cos(s),
            h = n + e * Math.sin(s),
            a ? f[vf](r, h) : f.moveTo(r, h),
            ++a,
            s += o;
        return f[Yf](),
        f
    }
    function ts() {
        var t = new Gq;
        return t[lf](75, 40),
        t.curveTo(75, 37, 70, 25, 50, 25),
        t[bc](20, 25, 20, 62.5, 20, 62.5),
        t.curveTo(20, 80, 40, 102, 75, 120),
        t.curveTo(110, 102, 130, 80, 130, 62.5),
        t[bc](130, 62.5, 130, 25, 100, 25),
        t[bc](85, 25, 75, 37, 75, 40),
        t
    }
    function is() {
        var t = new Gq;
        return t[lf](20, 0),
        t[vf](80, 0),
        t.lineTo(100, 100),
        t[vf](0, 100),
        t[Yf](),
        t
    }
    function ns() {
        var t = new Gq;
        return t[lf](100, 0),
        t.lineTo(100, 80),
        t.lineTo(0, 100),
        t[vf](0, 20),
        t[Yf](),
        t
    }
    function es() {
        var t = new Gq;
        return t.moveTo(20, 0),
        t.lineTo(100, 0),
        t[vf](80, 100),
        t[vf](0, 100),
        t[Yf](),
        t
    }
    function ss() {
        var t = new Gq;
        return t.moveTo(43, 23),
        t.lineTo(28, 10),
        t.lineTo(37, 2),
        t[vf](63, 31),
        t.lineTo(37, 59),
        t[vf](28, 52),
        t[vf](44, 38),
        t.lineTo(3, 38),
        t[vf](3, 23),
        t[Yf](),
        t
    }
    function rs() {
        var t = new Gq;
        return t.moveTo(1, 8),
        t[vf](7, 2),
        t[vf](32, 26),
        t[vf](7, 50),
        t.lineTo(1, 44),
        t[vf](18, 26),
        t[Yf](),
        t[lf](27, 8),
        t.lineTo(33, 2),
        t[vf](57, 26),
        t[vf](33, 50),
        t[vf](27, 44),
        t[vf](44, 26),
        t[Yf](),
        t
    }
    function hs() {
        var t = new Gq;
        return t[lf](0, 15),
        t.lineTo(23, 15),
        t[vf](23, 1),
        t.lineTo(47, 23),
        t[vf](23, 43),
        t[vf](23, 29),
        t[vf](0, 29),
        t.closePath(),
        t
    }
    function as() {
        var t = new Gq;
        return t[lf](0, 21),
        t[vf](30, 21),
        t.lineTo(19, 0),
        t[vf](25, 0),
        t[vf](47, 25),
        t[vf](25, 48),
        t.lineTo(19, 48),
        t[vf](30, 28),
        t[vf](0, 28),
        t[Yf](),
        t
    }
    function os() {
        var t = new Gq;
        return t[lf](0, 0),
        t[vf](34, 24),
        t.lineTo(0, 48),
        t[vf](14, 24),
        t.closePath(),
        t
    }
    function fs() {
        var t = new Gq;
        return t[lf](20, 0),
        t[vf](34, 14),
        t[vf](20, 28),
        t[vf](22, 18),
        t.lineTo(1, 25),
        t[vf](10, 14),
        t[vf](1, 3),
        t[vf](22, 10),
        t[Yf](),
        t
    }
    function us() {
        var t = new Gq;
        return t[lf](4, 18),
        t[vf](45, 18),
        t.lineTo(37, 4),
        t.lineTo(83, 25),
        t[vf](37, 46),
        t[vf](45, 32),
        t[vf](4, 32),
        t.closePath(),
        t
    }
    function cs() {
        var t = new Gq;
        return t[lf](17, 11),
        t[vf](27, 11),
        t[vf](42, 27),
        t[vf](27, 42),
        t[vf](17, 42),
        t[vf](28, 30),
        t[vf](4, 30),
        t.lineTo(4, 23),
        t[vf](28, 23),
        t[Yf](),
        t
    }
    function _s() {
        _W[gc](sq.SHAPE_CIRCLE, Ve(new Gq, 0, 0, 100, 100)),
        _W[gc](sq[yc], Ue(new Gq, 0, 0, 100, 100)),
        _W[gc](sq.SHAPE_ROUNDRECT, Ue(new Gq, 0, 0, 100, 100, 20, 20)),
        _W[gc](sq[mc], Xe(new Gq, 0, 0, 100, 100)),
        _W[gc](sq[xc], Ze(new Gq, 0, 0, 100, 100)),
        _W[gc](sq[pc], Qe(5)),
        _W.register(sq[Ec], Qe(6)),
        _W[gc](sq[wc], Ke(new Gq, 0, 0, 100, 100)),
        _W[gc](sq[Tc], ts()),
        _W[gc](sq.SHAPE_TRAPEZIUM, is()),
        _W.register(sq[Mc], ns()),
        _W[gc](sq[kc], es());
        var t = new Gq;
        t[lf](20, 0),
        t.lineTo(40, 0),
        t[vf](40, 20),
        t.lineTo(60, 20),
        t.lineTo(60, 40),
        t.lineTo(40, 40),
        t[vf](40, 60),
        t[vf](20, 60),
        t.lineTo(20, 40),
        t.lineTo(0, 40),
        t.lineTo(0, 20),
        t[vf](20, 20),
        t[Yf](),
        _W.register(sq[Oc], t),
        _W.register(sq[Sc], Je(new Gq, 0, 0, 100, 100)),
        _W.register(sq[Ic], ss()),
        _W[gc](sq[Ac], rs()),
        _W.register(sq[Pc], hs()),
        _W[gc](sq[jc], as()),
        _W[gc](sq[Lc], os()),
        _W.register(sq[Cc], fs()),
        _W[gc](sq.SHAPE_ARROW_7, us()),
        _W[gc](sq[Rc], cs()),
        _W[gc](sq.SHAPE_ARROW_OPEN, Je(new Gq, 0, 0, 100, 100, !0))
    }
    function ds() {
        w(this, ds, arguments),
        this[Dc] = !0
    }
    function ls() {
        w(this, ls),
        this._$q = new vH
    }
    function vs() {
        if (this._gl === !0) {
            var t = this._7r
              , i = this._8r;
            if (t)
                for (t = t._jg; t[nh]; ) {
                    var n = t[0];
                    Oe(this, n, n[tc])
                }
            if (i)
                for (i = i._jg; i.length; ) {
                    var n = i[0];
                    Ie(this, n, n.fromAgent)
                }
            return void this[lc](function(t) {
                t._hq() && vs.call(t)
            })
        }
        var e = ze(this);
        e.forEach(function(t) {
            t = t[Nc];
            var i = t.$from
              , n = t.$to
              , e = i[ac](this)
              , s = n[ac](this);
            e && !s ? (ke(this, t),
            Te(this, t)) : s && !e && (Se(this, t),
            Te(t[ec], t, this))
        }, this)
    }
    function bs() {
        w(this, bs, arguments),
        this.$image = null
    }
    function gs(t, i, n, e) {
        return t[i] = n,
        e ? {
            get: function() {
                return this[i]
            },
            set: function(t) {
                if (t !== this[i]) {
                    this[i] = t,
                    !this[$c],
                    this._17 = !0;
                    for (var n = e[nh]; --n >= 0; )
                        this[e[n]] = !0
                }
            }
        } : {
            get: function() {
                return this[i]
            },
            set: function(t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }
    function ys(t, i) {
        var n = {}
          , e = {};
        for (var s in i) {
            var r = i[s];
            r[Bc] && r[Bc][Du](function(t, i, n) {
                n[i] = Fc + t,
                e[t] = !0
            }),
            n[s] = gs(t, xh + s, r.value, r[Bc])
        }
        for (var h in e)
            t[Fc + h] = !0;
        Object[Qh](t, n)
    }
    function ms(t, i, n, e) {
        if (Array[Nh](i))
            for (var s = i.length; --s >= 0; )
                ms(t, i[s], n, e);
        else {
            var r = i.target;
            if (r) {
                if (r instanceof lW || (r = t[r]),
                !r)
                    return
            } else
                r = t;
            if (e || (e = t[Gc](i[zc], n)),
            i[Yc] && (r[i[Yc]] = e),
            i[Hc]) {
                var h = i[Hc];
                h instanceof Function || (h = t[h]),
                h instanceof Function && h[sh](t, e, r)
            }
        }
    }
    function xs() {
        vW[Du](function(t) {
            this[t] = {}
        }, this)
    }
    function ps(t, i, n, e) {
        return e == sq[qc] ? void (t[n] = i) : e == sq[Uc] ? void t.set(n, i) : e == sq[Wc] ? void t[Vc](n, i) : !1
    }
    function Es() {
        w(this, Es, arguments)
    }
    function ws() {
        w(this, ws, arguments)
    }
    function Ts(t, i, n, e, s, r) {
        var h = Ms(t, i, n, e)
          , a = [];
        return Is(t) ? ks(h, i, n, a, e.getStyle(bW[Xc]), s, r) : Bs(t, i, n, a, h, e, s, r),
        a
    }
    function Ms(t, i, n) {
        if (null != t) {
            if (t == sq.EDGE_TYPE_ELBOW_HORIZONTAL || t == sq.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == sq.EDGE_TYPE_HORIZONTAL_VERTICAL || t == sq[Zc] || t == sq[Kc])
                return !0;
            if (t == sq[Jc] || t == sq[Qc] || t == sq[t_] || t == sq.EDGE_TYPE_EXTEND_TOP || t == sq[i_])
                return !1
        }
        var e = js(i, n)
          , s = Ls(i, n);
        return e >= s
    }
    function ks(t, i, n, e, s) {
        t ? Ys(i, n, e, s) : Hs(i, n, e, s)
    }
    function Os(t, i) {
        return i[n_](bW[e_])
    }
    function Ss(t) {
        return null != t && (t == sq[s_] || t == sq.EDGE_TYPE_EXTEND_LEFT || t == sq[i_] || t == sq[Kc])
    }
    function Is(t) {
        return t && (t == sq[r_] || t == sq[h_] || t == sq[Jc])
    }
    function As(t, i, n, e, s) {
        if (t == sq[a_] || t == sq[t_])
            return new WY(e.x + e[ca] / 2,e.y + e[eo] / 2);
        var r;
        if (Ss(t)) {
            var h = Math.min(n.y, e.y)
              , a = Math.min(n.x, e.x)
              , o = Math.max(n[aa], e[aa])
              , f = Math.max(n[oa], e[oa]);
            if (r = s[n_](bW[Xc]),
            t == sq[s_])
                return new WY((a + f) / 2,h - r);
            if (t == sq[Zc])
                return new WY(a - r,(h + o) / 2);
            if (t == sq.EDGE_TYPE_EXTEND_BOTTOM)
                return new WY((a + f) / 2,o + r);
            if (t == sq[Kc])
                return new WY(f + r,(h + o) / 2)
        }
        var u = Os(t, s);
        if (r = u ? Cs(t, i, n, e, s.getStyle(bW[o_])) : s.getStyle(bW[f_]),
        r == Number[u_] || r == Number[c_])
            return new WY(e.x + e.width / 2,e.y + e[eo] / 2);
        if (0 == r)
            return new WY(n.x + n.width / 2,n.y + n.height / 2);
        if (i) {
            var c = n.x + n[oa] < e.x + e.right;
            return new WY(Ns(c, r, n.x, n[ca]),n.y + n[eo] / 2)
        }
        var _ = n.y + n[aa] < e.y + e[aa];
        return new WY(n.x + n[ca] / 2,Ns(_, r, n.y, n.height))
    }
    function Ps(t, i, n, e) {
        var s = Math.max(i, e) - Math.min(t, n);
        return s - (i - t + e - n)
    }
    function js(t, i) {
        var n = Math.max(t.x + (t[ca] || 0), i.x + (i[ca] || 0)) - Math.min(t.x, i.x);
        return n - (t[ca] || 0) - (i.width || 0)
    }
    function Ls(t, i) {
        var n = Math.max(t.y + (t.height || 0), i.y + (i.height || 0)) - Math.min(t.y, i.y);
        return n - (t[eo] || 0) - (i.height || 0)
    }
    function Cs(t, i, n, e, s) {
        var r = Rs(s, i, n, e, null);
        return r * s
    }
    function Rs(t, i, n, e) {
        return i ? Ds(t, n.x, n[oa], e.x, e[oa]) : Ds(t, n.y, n[aa], e.y, e[aa])
    }
    function Ds(t, i, n, e, s) {
        var r = Ps(i, n, e, s)
          , h = e + s > i + n;
        if (r > 0) {
            if (1 == t)
                return r + (s - e) / 2;
            if (t >= 0 && 1 > t)
                return r;
            if (0 > t)
                return h ? e - i : n - s
        }
        return Math.abs(h && t > 0 || !h && 0 > t ? n - s : i - e)
    }
    function Ns(t, i, n, e) {
        return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i)
    }
    function $s(t, i) {
        var n = t[nh];
        if (!(3 > n)) {
            var e = i.getStyle(bW.EDGE_CORNER);
            if (e != sq[__]) {
                var s = i.getStyle(bW.EDGE_CORNER_RADIUS)
                  , r = 0
                  , h = 0;
                s && (D(s) ? r = h = s : (r = s.x || 0,
                h = s.y || 0));
                for (var a, o, f, u, c = t[0], _ = t[1], d = null, l = 2; n > l; l++) {
                    var v = t[l]
                      , b = _.x - c.x
                      , g = _.y - c.y
                      , x = v.x - _.x
                      , p = v.y - _.y
                      , E = !b || b > -uq && uq > b
                      , w = !g || g > -uq && uq > g
                      , T = !x || x > -uq && uq > x
                      , M = !p || p > -uq && uq > p
                      , k = w;
                    (E && M || w && T) && (k ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, r),
                    o = Math.min(l == n - 1 ? Math.abs(p) : Math.abs(p) / 2, h),
                    f = new WY(_.x - (b > 0 ? a : -a),_.y),
                    u = new WY(_.x,_.y + (p > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(x) : Math.abs(x) / 2, r),
                    o = Math.min(2 == l ? Math.abs(g) : Math.abs(g) / 2, h),
                    f = new WY(_.x,_.y - (g > 0 ? o : -o)),
                    u = new WY(_.x + (x > 0 ? a : -a),_.y)),
                    m(t, _),
                    l--,
                    n--,
                    (f.x != c.x || f.y != c.y) && (y(t, f, l),
                    l++,
                    n++),
                    e == sq[d_] ? (y(t, u, l),
                    l++,
                    n++) : e == sq.EDGE_CORNER_ROUND && (y(t, [_, u], l),
                    l++,
                    n++)),
                    c = _,
                    _ = v
                }
                null != d && u.x == _.x && u.y == _.y && m(t, _)
            }
        }
    }
    function Bs(t, i, n, e, s, r, h, a) {
        var o = r[n_](bW.EDGE_CONTROL_POINT)
          , f = !0;
        null != o || (o = As(t, s, i, n, r)),
        s ? zs(i, n, o, e, f, h, a) : Gs(i, n, o, e, f, h, a)
    }
    function Fs(t, i, n) {
        return i >= t.x && i <= t[oa] && n >= t.y && n <= t[aa]
    }
    function Gs(t, i, n, e, s, r, h) {
        var a = Math.max(t.y, i.y)
          , o = Math.min(t.y + t[eo], i.y + i[eo])
          , f = null != n ? n.y : o + (a - o) / 2
          , u = r ? r.x : t.x + t.width / 2
          , c = h ? h.x : i.x + i.width / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[ca] && (u = n.x),
        n.x >= i.x && n.x <= i.x + i[ca] && (c = n.x)),
        Fs(i, u, f) || Fs(t, u, f) || e[uh](new WY(u,f)),
        Fs(i, c, f) || Fs(t, c, f) || e.push(new WY(c,f)),
        0 == e[nh])
            if (null != n)
                Fs(i, n.x, f) || Fs(t, n.x, f) || e[uh](new WY(n.x,f));
            else {
                var _ = Math.max(t.x, i.x)
                  , d = Math.min(t.x + t[ca], i.x + i[ca]);
                e[uh](new WY(_ + (d - _) / 2,f))
            }
    }
    function zs(t, i, n, e, s) {
        var r = Math.max(t.x, i.x)
          , h = Math.min(t.x + t[ca], i.x + i.width)
          , a = null != n ? n.x : h + (r - h) / 2
          , o = t.y + t.height / 2
          , f = i.y + i[eo] / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[eo] && (o = n.y),
        n.y >= i.y && n.y <= i.y + i[eo] && (f = n.y)),
        Fs(i, a, o) || Fs(t, a, o) || e.push(new WY(a,o)),
        Fs(i, a, f) || Fs(t, a, f) || e[uh](new WY(a,f)),
        0 == e[nh])
            if (null != n)
                Fs(i, a, n.y) || Fs(t, a, n.y) || e[uh](new WY(a,n.y));
            else {
                var u = Math.max(t.y, i.y)
                  , c = Math.min(t.y + t[eo], i.y + i[eo]);
                e.push(new WY(a,u + (c - u) / 2))
            }
    }
    function Ys(t, i, n, e) {
        var s = i.x + i[ca] < t.x
          , r = t.x + t[ca] < i.x
          , h = s ? t.x : t.x + t.width
          , a = t.y + t[eo] / 2
          , o = r ? i.x : i.x + i[ca]
          , f = i.y + i.height / 2
          , u = e
          , c = s ? -u : u
          , _ = new WY(h + c,a);
        c = r ? -u : u;
        var d = new WY(o + c,f);
        if (s == r) {
            var l = s ? Math.min(h, o) - e : Math.max(h, o) + e;
            n[uh](new WY(l,a)),
            n[uh](new WY(l,f))
        } else if (_.x < d.x == s) {
            var v = a + (f - a) / 2;
            n[uh](_),
            n[uh](new WY(_.x,v)),
            n[uh](new WY(d.x,v)),
            n.push(d)
        } else
            n[uh](_),
            n[uh](d)
    }
    function Hs(t, i, n, e) {
        var s = i.y + i[eo] < t.y
          , r = t.y + t[eo] < i.y
          , h = t.x + t.width / 2
          , a = s ? t.y : t.y + t[eo]
          , o = i.x + i[ca] / 2
          , f = r ? i.y : i.y + i[eo]
          , u = e
          , c = s ? -u : u
          , _ = new WY(h,a + c);
        c = r ? -u : u;
        var d = new WY(o,f + c);
        if (s == r) {
            var l = s ? Math.min(a, f) - e : Math.max(a, f) + e;
            n[uh](new WY(h,l)),
            n[uh](new WY(o,l))
        } else if (_.y < d.y == s) {
            var v = h + (o - h) / 2;
            n[uh](_),
            n[uh](new WY(v,_.y)),
            n[uh](new WY(v,d.y)),
            n[uh](d)
        } else
            n[uh](_),
            n[uh](d)
    }
    function qs(t) {
        return t == sq[l_] || t == sq[v_] || t == sq[a_] || t == sq[Qc] || t == sq[t_] || t == sq[s_] || t == sq[Zc] || t == sq[i_] || t == sq[Kc] || t == sq[r_] || t == sq.EDGE_TYPE_ELBOW_HORIZONTAL || t == sq[Jc]
    }
    function Us(t, i) {
        var n, e;
        i && i[ca] && i[eo] ? (n = i[ca],
        e = i.height) : n = e = isNaN(i) ? YY[b_] : i;
        var s = _W[g_](t, -n, -e / 2, n, e);
        return s || (s = new Gq,
        s[lf](-n, -e / 2),
        s[vf](0, 0),
        s[vf](-n, e / 2)),
        s
    }
    function Ws(t, i) {
        var n = Math.sin(i)
          , e = Math.cos(i)
          , s = t.x
          , r = t.y;
        return t.x = s * e - r * n,
        t.y = s * n + r * e,
        t
    }
    function Vs(t, i, n, e, s, r) {
        var h = Math[sa](e - i, n - t)
          , a = new WY(s,r);
        return a.rotate = h,
        Ws(a, h),
        a.x += t,
        a.y += i,
        a
    }
    function Xs(t, i, e, s, r, h) {
        i = si(s, i.x, i.y, e.x, e.y),
        e = si(r, e.x, e.y, i.x, i.y);
        var a = Math.PI / 2 + Math.atan2(e.y - i.y, e.x - i.x)
          , o = t * Math.cos(a)
          , f = t * Math.sin(a);
        i.x += o,
        i.y += f,
        e.x += o,
        e.y += f;
        var u = e.x - i.x
          , c = e.y - i.y;
        if (h == sq.EDGE_BUNDLE_TYPE_PARALLEL) {
            var _ = Math[Ao](u * u + c * c)
              , d = 5;
            return _ > 2 * d && (a = Math[sa](e.y - i.y, e.x - i.x),
            u = d * Math.cos(a),
            c = d * Math.sin(a),
            i.x += u,
            i.y += c,
            e.x -= u,
            e.y -= c),
            [new Bq(Cq,[i.x, i.y]), new Bq(Cq,[e.x, e.y])]
        }
        return [new Bq(Dq,[i.x + .25 * u, i.y + .25 * c, i.x + .75 * u, i.y + .75 * c, n, n])]
    }
    function Zs(t, i, e) {
        if (y(t, new Bq(Lq,[i.x, i.y]), 0),
        e) {
            if (t[nh] > 1) {
                var s = t[t[nh] - 1];
                if (Rq == s[qo] && (s[If] || s[Ha][2] === n || null === s[Ha][2]))
                    return s.points[2] = e.x,
                    s[Ha][3] = e.y,
                    void (s[If] = !0);
                if (Dq == s[qo] && (s[If] || s.points[4] === n || null === s.points[4]))
                    return s[Ha][4] = e.x,
                    s[Ha][5] = e.y,
                    void (s.invalidTerminal = !0)
            }
            t.push(new Bq(Cq,[e.x, e.y]))
        }
    }
    function Ks(t, i, n) {
        var e = i.getPortPoint(t.getStyle(bW[y_]), n)
          , s = t.getStyle(bW[m_]);
        return s && (e.x += s.x || 0,
        e.y += s.y || 0),
        e
    }
    function Js(t, i, n) {
        var e = i[x_](t[n_](bW.EDGE_TO_PORT), n)
          , s = t[n_](bW[p_]);
        return s && (e.x += s.x || 0,
        e.y += s.y || 0),
        e
    }
    function Qs(t, i, n, e, s) {
        var r = e == s
          , h = t[E_][w_](e)
          , a = r ? h : t[E_][w_](s);
        if (h && a) {
            var o = i[T_]
              , f = t[M_](h)
              , u = r ? f : t[M_](a)
              , c = i[k_]();
            if (r && !c)
                return t[O_](t.path, h, o, f);
            var _ = Ks(t, h, f)
              , d = Js(t, a, u);
            if (!r && !o && !c) {
                var l = e[Dc]
                  , v = s[Dc];
                if (l != v) {
                    var b, g, y, m, x = i[S_];
                    l ? (b = h,
                    g = f,
                    y = a,
                    m = u) : (b = a,
                    g = u,
                    y = h,
                    m = f);
                    var p = rr(g, b, l, y, m, x);
                    if (p && 2 == p.length) {
                        var E = p[0]
                          , w = p[1];
                        return n[lf](E.x, E.y),
                        w.x == E.x && w.y == E.y && (w.y += .01),
                        n[vf](w.x, w.y),
                        void (n._63 = !0)
                    }
                }
            }
            t._35(i, n, h, a, o, f, u, _, d),
            (!r || c) && tr(t, i, n, h, a, o, f, u, _, d),
            n._63 = !0
        }
    }
    function tr(t, i, e, s, r, h, a, o, f, u) {
        var c = t[I_]
          , _ = t.toAtEdge;
        if (!c && !_)
            return void Zs(e._f9, f, u);
        var d = e._f9;
        if (d.length) {
            if (c) {
                var l = d[0]
                  , v = l[A_];
                ir(s, a, v, f, n, n)
            }
            if (_) {
                var b, g = d[d[nh] - 1], y = g[Ho], m = g[Ha].length, x = y.x === n || y.y === n;
                m >= 4 && (x || o[P_](y.x, y.y)) && (x || (u = y),
                b = !0,
                y = {
                    x: g.points[m - 4],
                    y: g[Ha][m - 3]
                },
                o.contains(y.x, y.y) && (u = y,
                m >= 6 ? (y = {
                    x: g.points[m - 6],
                    y: g[Ha][m - 5]
                },
                g[Ha] = g[Ha][ah](0, 4),
                g[qo] = Rq) : 1 == d[nh] ? (y = {
                    x: f.x,
                    y: f.y
                },
                g[Ha] = g.points.slice(0, 2),
                g[qo] = Cq) : (g = d[d[nh] - 2],
                y = g[Ho]))),
                ir(r, o, y, u, n, n),
                b && (m = g[Ha][nh],
                g[Ha][m - 2] = u.x,
                g.points[m - 1] = u.y,
                u = null)
            }
        } else {
            var p = Math[sa](u.y - f.y, u.x - f.x)
              , E = Math.cos(p)
              , w = Math.sin(p);
            c && ir(s, a, u, f, E, w),
            _ && ir(r, o, f, u, -E, -w)
        }
        Zs(e._f9, f, u)
    }
    function ir(t, i, e, s, r, h) {
        if (r === n) {
            var a = Math[sa](e.y - s.y, e.x - s.x);
            r = Math.cos(a),
            h = Math.sin(a)
        }
        for (e = {
            x: e.x,
            y: e.y
        },
        i.contains(e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y)); ; ) {
            if (!i[P_](e.x, e.y))
                return s;
            if (t[j_](e.x - r, e.y - h, YY[L_])) {
                s.x = e.x - r / 2,
                s.y = e.y - h / 2;
                break
            }
            e.x -= r,
            e.y -= h
        }
        return s
    }
    function nr(t, i, n, e, s, r, h, a) {
        if (i[k_]())
            return i._92;
        var o = i[T_];
        if (qs(o)) {
            var f = Ts(o, n, e, t, h, a);
            if (!f || !f[nh])
                return null;
            y(f, h, 0),
            f[uh](a),
            o != sq[r_] && $s(f, t);
            for (var u = [], c = f[nh], _ = 1; c - 1 > _; _++) {
                var d = f[_];
                u.push(B(d) ? new Bq(Rq,[d[0].x, d[0].y, d[1].x, d[1].y]) : new Bq(Cq,[d.x, d.y]))
            }
            return u
        }
        if (i.$bundleEnabled) {
            var l = t._23();
            if (!l)
                return;
            return Xs(l, h, a, n, e, t[n_](bW[C_]))
        }
    }
    function er(t, i, n) {
        var e = t.getStyle(bW[R_])
          , s = t._23()
          , r = e + .2 * s
          , h = i.x + i.width - r
          , a = i.y
          , o = i.x + i[ca]
          , f = i.y + r;
        e += s;
        var u = .707
          , c = -.707
          , _ = i.x + i[ca]
          , d = i.y
          , l = _ + u * e
          , v = d + c * e
          , b = {
            x: h,
            y: a
        }
          , g = {
            x: l,
            y: v
        }
          , y = {
            x: o,
            y: f
        }
          , m = b.x
          , x = g.x
          , p = y.x
          , E = b.y
          , w = g.y
          , T = y.y
          , M = ((T - E) * (w * w - E * E + x * x - m * m) + (w - E) * (E * E - T * T + m * m - p * p)) / (2 * (x - m) * (T - E) - 2 * (p - m) * (w - E))
          , k = ((p - m) * (x * x - m * m + w * w - E * E) + (x - m) * (m * m - p * p + E * E - T * T)) / (2 * (w - E) * (p - m) - 2 * (T - E) * (x - m))
          , r = Math[Ao]((m - M) * (m - M) + (E - k) * (E - k))
          , O = Math[sa](b.y - k, b.x - M)
          , S = Math[sa](y.y - k, y.x - M)
          , I = S - O;
        return 0 > I && (I += 2 * Math.PI),
        sr(M, k, O, I, r, r, !0, n)
    }
    function sr(t, i, n, e, s, r, h, a) {
        var o, f, u, c, _, d, l, v, b, g, y;
        if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI),
        _ = Math[oh](Math.abs(e) / (Math.PI / 4)),
        o = e / _,
        f = o,
        u = n,
        _ > 0) {
            d = t + Math.cos(u) * s,
            l = i + Math.sin(u) * r,
            moveTo ? a[lf](d, l) : a[vf](d, l);
            for (var m = 0; _ > m; m++)
                u += f,
                c = u - f / 2,
                v = t + Math.cos(u) * s,
                b = i + Math.sin(u) * r,
                g = t + Math.cos(c) * (s / Math.cos(f / 2)),
                y = i + Math.sin(c) * (r / Math.cos(f / 2)),
                a[vc](g, y, v, b)
        }
    }
    function rr(t, i, n, e, s, r) {
        var h = s.cx
          , a = s.cy
          , o = Math.cos(r)
          , f = Math.sin(r)
          , u = ar(i, t, {
            x: h,
            y: a
        }, -o, -f);
        if (!u) {
            var c = h < t.x
              , _ = h > t.right
              , d = a < t.y
              , l = a > t[aa]
              , v = t.cx
              , b = t.cy
              , g = c || _
              , y = d || l;
            r = Math[sa](a - b, h - v),
            g || y || (r += Math.PI),
            o = Math.cos(r),
            f = Math.sin(r),
            u = ar(i, t, {
                x: h,
                y: a
            }, -o, -f) || {
                x: v,
                y: b
            }
        }
        var m = ar(e, s, {
            x: u.x,
            y: u.y
        }, -u[D_] || o, -u[N_] || f, !1) || {
            x: h,
            y: a
        };
        return n ? [u, m] : [m, u]
    }
    function hr(t, i, n, e, s, r) {
        var h = i < t.x
          , a = i > t[oa]
          , o = n < t.y
          , f = n > t[aa];
        if (h && e > 0) {
            var u = t.x - i
              , c = n + u * s / e;
            if (c >= t.y && c <= t[aa])
                return {
                    x: t.x,
                    y: c,
                    perX: e,
                    perY: s
                }
        }
        if (a && 0 > e) {
            var u = t.right - i
              , c = n + u * s / e;
            if (c >= t.y && c <= t[aa])
                return {
                    x: t[oa],
                    y: c,
                    perX: e,
                    perY: s
                }
        }
        if (o && s > 0) {
            var _ = t.y - n
              , d = i + _ * e / s;
            if (d >= t.x && d <= t.right)
                return {
                    x: d,
                    y: t.y,
                    perX: e,
                    perY: s
                }
        }
        if (f && 0 > s) {
            var _ = t.bottom - n
              , d = i + _ * e / s;
            if (d >= t.x && d <= t[oa])
                return {
                    x: d,
                    y: t[aa],
                    perX: e,
                    perY: s
                }
        }
        return r !== !1 ? hr(t, i, n, -e, -s, !1) : void 0
    }
    function ar(t, i, n, e, s, r) {
        if (!i[P_](n.x, n.y)) {
            if (n = hr(i, n.x, n.y, e, s, r),
            !n)
                return;
            return or(t, i, n, n[D_], n[N_])
        }
        return r === !1 ? or(t, i, n, e, s) : or(t, i, {
            x: n.x,
            y: n.y,
            perX: e,
            perY: s
        }, e, s) || or(t, i, n, -e, -s)
    }
    function or(t, i, n, e, s) {
        for (; ; ) {
            if (!i.contains(n.x, n.y))
                return;
            if (t.hitTest(n.x + e, n.y + s))
                break;
            n.x += e,
            n.y += s
        }
        return n
    }
    function fr(t) {
        return On(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) || /^data:image\/(\w+\+?\w+);base64,/i.test(t) ? t : (t = J(t),
        t instanceof Object && t[mf] ? t : void 0)
    }
    function ur(t) {
        for (var i = t[Qu]; i; ) {
            if (i[$_])
                return i;
            i = i.parent
        }
        return null
    }
    function cr() {
        w(this, cr, arguments)
    }
    function _r(t, n, e, s, r, h, a) {
        var o = i[_o](B_);
        o.className = F_,
        bi(o, CW),
        n && bi(o, n);
        var f = i[_o](G_);
        return h && (GY && (f[z_] = h),
        jH || (f.onclick = h)),
        f[Ef] = a,
        f.src = e,
        bi(f, RW),
        r && bi(f, r),
        s && yi(f, Y_, H_),
        o[q_] = f,
        o[Ju](f),
        t.appendChild(o),
        o
    }
    function dr(t, n) {
        this._navPane = i[_o](B_),
        this[U_].className = W_,
        bi(this[U_], {
            "background-color": V_,
            overflow: X_,
            "user-select": Z_,
            position: K_
        }),
        this._top = _r(this[U_], {
            width: J_
        }, YY[Q_], !1, null, n, td),
        this._left = _r(this[U_], {
            height: J_
        }, YY[id], !1, DW, n, $a),
        this[nd] = _r(this[U_], {
            height: J_,
            right: ed
        }, YY[id], !0, DW, n, oa),
        this[sd] = _r(this[U_], {
            width: J_,
            bottom: ed
        }, YY.NAVIGATION_IMAGE_TOP, !0, null, n, aa),
        t[Ju](this[U_])
    }
    function lr(t, i) {
        if (!YY.NAVIGATION_IMAGE_LEFT) {
            var n = Di(20, 40)
              , e = n.g;
            e[uf](e[ho], e.ratio),
            e[lf](16, 4),
            e[vf](4, 20),
            e.lineTo(16, 36),
            e.lineWidth = 3,
            e.lineCap = Gf,
            e[rd] = Gf,
            e[hd] = gf,
            e.shadowColor = ad,
            e.shadowBlur = 5,
            e[Fo](),
            YY.NAVIGATION_IMAGE_LEFT = n[od]();
            var s = Di(n.height, n.width, !1);
            s.g.translate(s[ca], 0),
            s.g[Uo](Math.PI / 2),
            s.g[fd](n, 0, 0),
            YY[Q_] = s.toDataURL()
        }
        this[Xu] = t;
        var r = function(i) {
            z(i);
            var n, e, s = i.target, r = s.name;
            if ($a == r)
                n = 1;
            else if (oa == r)
                n = -1;
            else if (td == r)
                e = 1;
            else {
                if (aa != r)
                    return;
                e = -1
            }
            GY && (s[Sh] = ud,
            setTimeout(function() {
                s[Sh] = ""
            }, 100)),
            z(i),
            t._k0._9z(n, e)
        };
        dr.call(this, i, r),
        this._30(i.clientWidth, i[cd])
    }
    function vr(t, i) {
        this[Xu] = t,
        this[_d](i, t)
    }
    function br() {
        w(this, br, arguments)
    }
    function gr(t, i) {
        this[Xu] = t,
        this._ip = le(i),
        this.g = this._ip.g,
        this._9a = new HY
    }
    function yr(t) {
        var i = t[dd]
          , n = [];
        return t[ld][Du](function(i) {
            t[vd](i) && t.isSelectable(i) && n[uh](i)
        }),
        i.set(n)
    }
    function mr(t, i, n, e) {
        var s = t[Do];
        n = n || s,
        i = i || 1;
        var r = null;
        r && n[ca] * n[eo] * i * i > r && (i = Math.sqrt(r / n[ca] / n.height));
        var h = Di();
        ie(h.g),
        h[ca] = n[ca] * i,
        h[eo] = n.height * i,
        t._8m._gj(h.g, i, n);
        var a = null;
        try {
            a = h[od](e || bd)
        } catch (o) {
            eq[ea](o)
        }
        return {
            canvas: h,
            data: a,
            width: h.width,
            height: h.height
        }
    }
    function xr(t) {
        this[E_] = t,
        this[gd] = t[gd]
    }
    function pr(t, i) {
        this[yd] = t,
        this.defaultCursor = i || md
    }
    function Er() {
        w(this, Er, arguments)
    }
    function wr(t, i) {
        if (!t)
            return i;
        var e = {};
        for (var s in t)
            e[s] = t[s];
        for (var s in i)
            e[s] === n && (e[s] = i[s]);
        return e
    }
    function Tr() {
        w(this, Tr, arguments)
    }
    function Mr(t, i, n, e) {
        var s;
        return t[xd](function(r) {
            var h = r[nf];
            return h instanceof eq[pd] && (!e || e(h) !== !1) && r[Ed][No](i - r.x, n - r.y) && r.hitTest(i, n, YY[wd] / t[uf]) ? (s = h,
            !1) : void 0
        }),
        s
    }
    function kr(t) {
        this[Td] = t[Ro](),
        this[Ha] = t.getPortPoints(),
        this[Md] = t[kd]()
    }
    function Or() {
        w(this, Or, arguments)
    }
    function Sr() {
        w(this, Sr, arguments)
    }
    function Ir() {
        w(this, Ir, arguments)
    }
    function Ar(i, n, e) {
        i += t[Ra],
        n += t.pageYOffset;
        var s = e[Pa]();
        return {
            x: i + s[$a],
            y: n + s.top
        }
    }
    function Pr(t, i, n) {
        var e = t[Od]
          , s = t[Sd];
        t[Ea][$a] = i - e / 2 + ao,
        t.style.top = n - s / 2 + ao
    }
    function jr(t) {
        var n = i[_o](lo)
          , e = n[wf](vo)
          , s = getComputedStyle(t, null)
          , r = s.font;
        r || (r = s[Id] + jh + s[Ad] + jh + s[Pd]),
        e.font = r;
        var h = t[wh]
          , a = h[Ph](ko)
          , o = parseInt(s[Ad])
          , f = 0
          , u = 0;
        return eq[Du](a, function(t) {
            var i = e[jd](t)[ca];
            i > f && (f = i),
            u += 1.2 * o
        }),
        {
            width: f,
            height: u
        }
    }
    function Lr(t, n) {
        if (Ch == typeof t[Ld] && Ch == typeof t[Cd]) {
            var e = t[wh]
              , s = t[Ld];
            t[wh] = e[ah](0, s) + n + e.slice(t.selectionEnd),
            t.selectionEnd = t[Ld] = s + n.length
        } else if (Rd != typeof i.selection) {
            var r = i[Dd].createRange();
            r[Nd] = n,
            r[$d](!1),
            r[Bd]()
        }
    }
    function Cr(i) {
        if (IY) {
            var n = t[Fd] || t[Ra]
              , e = t.scrollY || t.pageYOffset;
            return i.select(),
            void t[Gd](n, e)
        }
        i[Bd]()
    }
    function Rr() {}
    function Dr() {
        w(this, Dr, arguments),
        this[zd] = GY ? 8 : 5
    }
    function Nr(t) {
        return t.type == Rq || t[qo] == Dq
    }
    function $r() {
        w(this, $r, arguments),
        this[zd] = GY ? 8 : 4,
        this._rotateHandleLength = GY ? 30 : 20
    }
    function Br(t, i) {
        var n = new KY;
        return n.addPoint(Vn[sh](t, {
            x: i.x,
            y: i.y
        })),
        n[ro](Vn[sh](t, {
            x: i.x + i.width,
            y: i.y
        })),
        n.addPoint(Vn[sh](t, {
            x: i.x + i[ca],
            y: i.y + i[eo]
        })),
        n[ro](Vn[sh](t, {
            x: i.x,
            y: i.y + i[eo]
        })),
        n
    }
    function Fr(t) {
        t %= 2 * Math.PI;
        var i = Math.round(t / BW);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : Yd
    }
    function Gr() {}
    function zr(n, e, s) {
        var r = i[Hd]
          , h = new KY(t[Ra],t.pageYOffset,r[Aa] - 2,r[cd] - 2)
          , a = n[Od]
          , o = n[Sd];
        e + a > h.x + h.width && (e = h.x + h[ca] - a),
        s + o > h.y + h[eo] && (s = h.y + h[eo] - o),
        e < h.x && (e = h.x),
        s < h.y && (s = h.y),
        n[Ea][$a] = e + ao,
        n[Ea].top = s + ao
    }
    function Yr(t) {
        this._mmction = t,
        this.action = function(t) {
            return this._k2 && (this._isFrameTimer ? (cancelAnimationFrame(this._k2),
            this._isFrameTimer = null) : clearTimeout(this._k2),
            this._k2 = null),
            t === !0 || t === !1 ? void this._mmction() : t ? void (this._k2 = setTimeout(function() {
                this[qd](),
                this._k2 = null
            }
            [kh](this), t)) : (this[Ud] = !0,
            void (this._k2 = requestAnimationFrame(function() {
                this[qd](),
                this._k2 = null,
                this._isFrameTimer = null
            }
            [kh](this))))
        }
    }
    function Hr(t, i, n, e, s) {
        this[kf] = t,
        this.type = Wd,
        this[Vd] = i,
        this[$h] = n,
        this[nf] = e,
        this[Xd] = s
    }
    function qr(t) {
        this._4a = {},
        this._k0 = t,
        this._k0._1b[Zd](this._9l, this),
        this[Kd] = sq.INTERACTION_MODE_DEFAULT
    }
    function Ur(t) {
        return t >= 100 && 200 > t
    }
    function Wr(t) {
        return t == iV || t == fV || t == oV || t == sV || t == _V || t == dV
    }
    function Vr() {
        var t, i, n = {}, e = [], s = 0, r = {}, h = 0;
        this[E_].forEach(function(a) {
            if (this[Jd](a))
                if (a instanceof uW) {
                    var o = {
                        node: a,
                        id: a.id,
                        x: a.x,
                        y: a.y
                    };
                    for (this[Qd] && this[Qd](a, o),
                    n[a.id] = o,
                    e[uh](o),
                    s++,
                    i = a[Qu]; i instanceof dW; ) {
                        t || (t = {});
                        var f = t[i.id];
                        f || (f = t[i.id] = {
                            id: i.id,
                            children: []
                        }),
                        f.children[uh](o),
                        i = i[Qu]
                    }
                } else if (a instanceof fW && !a[hc]() && a.fromAgent && a[tc]) {
                    var o = {
                        edge: a
                    };
                    r[a.id] = o,
                    h++
                }
        }, this);
        var a = {};
        for (var o in r) {
            var f = r[o]
              , u = f[Nc]
              , c = u.fromAgent
              , _ = u.toAgent
              , d = c.id + xa + _.id
              , l = _.id + xa + c.id;
            if (n[c.id] && n[_.id] && !a[d] && !a[l]) {
                var v = n[c.id]
                  , b = n[_.id];
                f[tl] = v,
                f.to = b,
                a[d] = f,
                this[il] && this[il](u, f)
            } else
                delete r[o],
                h--
        }
        return {
            groups: t,
            nodesArray: e,
            nodes: n,
            nodeCount: s,
            edges: r,
            edgeCount: h,
            minEnergy: this[nl](s, h)
        }
    }
    function Xr(t) {
        this[E_] = t,
        this[el] = {}
    }
    function Zr() {
        w(this, Zr, arguments)
    }
    function Kr(t, i, n, e, s) {
        e ? t[sl](function(e) {
            var r = e[rl](t);
            r != n && r[hl] != s && i(r, t)
        }, this, !0) : t[al](function(e) {
            var r = e[tc];
            r != n && r._marker != s && i(r, t)
        })
    }
    var Jr = "357646a5b607ea94be46ece78e3bb926cb6d99dd242edea0f5e302363d053a164c0b5022c69f26eff43cf9f978ba3b174d6f210d87d294e98e50497041f0c006d9083735672c8ad264bb194c458ed81a3784cad8010387358c5345ab1cbe1383c042ffb10ecd3d0223c6f57497f82bd4ed9aed5fa3800c9a56aa58da08e46bd0157c3229ae1c2fa7ede9c834c2f24dc68cc1f833afbd4f2c616ab8346b9074964c1cf9ee946789cb78c901b26fb7a8c6c838c37bfb1844391f85b6fbb6382e2f5c7907b247583c61a7045ff6808999e5d59a6eff2efeddd2bf7e543fc4e589ddfbf629639598a02d4cc0f67c29916521b58e7bad1cbeeee820b7c8c713432c5e3e8f4dfe753d817d6c12957fed1b5b36f7b365be51bb431e4f9d4ec5b8a0af07347b4640eac8c8a3dea4689f9caa0c07be407c9f7367677f6cbfa870894ab6ce84a905600e0af05d8a8ae2acb4a04a6e756645fa25bbb8e2fbcee47bbe2a03f3b3f8c65d730d52950f3859f163e89158ace773eedcb16e7ac6da899b4a03025d42e3d0e8fc78ffae4db537aac854bc7f67ac6f4f21034199e555a2093c75dd2b07e386fb40758edc79f8b4c2746f08703c3b4df7b6d1acc3833b0b7e2fbcc70cf2f1bd5278f02444a7e4125ef39e7bf6b4b29fe1e45bcd4c44fa0599690e824a5f7c44f8f4c78059f37421ef3ae1bab16115d01b5ffa7d88422429e9b9c8e7ae048dd20ccde8071d2096b42d081e208225998f615a5f2d6ac56f46c95b847394023986918d8d622a64770253dddbabb21ee7411292e1be5b8cdb47355f724137e343e082b67a00e0cf44809472db7e4724994f52556ac42143d6546318c16f744d5c4df00d6d50685ea53593e50e7c4885135c45fccbfe4d6f8d4c2e82f88dbb3aa168396fa6630a4acede62c2d2e239e57bbe736f89633b195520cbef36019d710cb229218a62a22f745c053b92d363bf45959bb05b723352727b3e8554f5ea8a9d616e28f7a6099e6b9d7e18ec14c19e0799754928cd0872fcc74528338e010bb04619201cb297c37726faf2e30a8812b25936da94152773714e1888c0788f4bc16a044ab5d0714d001433c1db211e3bab91953b0abe37fe0eee05214654be59f55c802f8239912332b1135e06a5a4eaedf0853302d0a700de427f13623c423d957dd4d6d8bd7dce338c7c314b9eb21ce6094c549352a03da746e9bfa7ff018c9f0b3839549bafd6d018fb355f93e675ed7e9e11a202e49d0de7e1f61e60d5582fa75c2ee7c0e36c34a189cb53debfeaa8d513691ea73ac94ea36c7c132ddfb1eb0cf2f877cb0aaa55c8fb9b53c7409c0348e17144683714ab0e169ebeb1be75f4e2e054f3dc8586742fe01fff3f2130bbecf124d08e2750b6609246127efb99effe4c0235fffae64b4e95882000375aa8978299f2381a5a089a205f6fb690a444e7d2f655c879887e192d1b3a7f4325eb04443231ac98e30dfcb26f4a4326ab3d1b7adc5b9fa4d05c3e63ad289f998355aa92675d5b6923407b11f08f93f5b5a87014c7f498397586d9f29e5421554fd5b4ac73307673e1506c92700a1fce7265a5559aeef52e527758f7f5eda788228afab662da7281605bd9bfbccaddb53d79f3fcccc14fe242fd38988e1fc568898c0f26c31c5a6d63f44920dcb30ca73226e258907374ff422611cc0e77cc77e31b93de10fed534f300c7f140b0f8865f835d6900f866223b8147bddd944baa3d6aa9642ffb152d123e3e267c3dea21740aa1047f10cdd833c8f53299a54dcfccb2b510d16156c3f4cefb41239aac49eaeb140275ea0fff4d414481fd874aba5e8d7de2b47562370c2250a888c93695251782757dd7ca108487c250bb8d744f25ed4a63d2f41463f4a4b9b1c30b2f08952f7c0d9fb19fab555ca02c72e39163a2d9c2553996c301d83c11c1f80c91589f26119b5cec49342935a11b99e1d86ffcf99c403c6225e75a98b6f2f6bde55f66dbe1ca695b6db06c11ffc6c422809e002d4565cdf49b9cf5d05fb38de1272fe3dea1c61d9d7f37dc0c9d4cf60bc15d8f2ed6cb0a5da4ecda127eb64768166ed22cd0c650ca6b5301fb0d8592c9ad26a60503c599ff14e4248380a60187dacb7b4d2960baed04190cef7ff838e1edf0789e6bf7fabf5be412ef3431eb7875c2aa36d1f33d57665a456d56355d46c41658f8d3a05ecedb47503b973057a7e808b59b216d7016ba66f694b402e9b8c92a815deaef7818f62a90ac36d23764624d31544e8fb21a8a8644d8a2d91187a2b87f7933e194086ed15a4dac702d842bb9dcc3354a1ffee7f68db50be8c4c9fde8fa19a43d11a6b350750136cb7e45a4e47cee153f4139a9b444cc6e4f28e2c33d8b23883aab3bea03c8e4213b7f21f1be2b1dc61eb1c66fc4787f63fed19817c994ec727118c793d3402094fc9458b4765e88a22fd1e0cbb8f3f891cd740c478b5a954b5bb28766e9c23fafcc7785295a7a5019e02db0839dc3c1bcb4792341e1887475828117bdd2e499a783a9f3f3479e7bf181111b67f0994ad1fcc7e9d0e8227d798abf76507f4168a3c972dfa5002103fcf79f413376568ffe97b945ec0422964196f916821ff2dd2f331f9a64baf816e7acf71e262676fdd2bde664dfc1fe5742edb3bec538fcfb1a7dc6a19c1502d5ed3230e6d31b79db14c5278db2985d87f0462b3643e826cc8cd5541441f47b085b21098a32995a572d8f60f9af745dbe9774d9234a3ca37650ce2e1b01a135e5fcf92c99c05e01edd22280f7f3520fb9f57626886f5cf77428b95f52c368fbb3aa66724ea3fd7a911daa43813c92b3d81e05f56932930c7ac2e5b6666b91f2e1de0a0347139a6d1fd45fd9e0f579da04f081bcc45c0c35a4d640f125e8c9c7e28eda739eab5d92014687ebccd0453430eee67154d4d94e07b045e37ac98b04d0974360375a16f17f31dfcfb94a48a80ccc2bae1dd44e07562f148ec127a04d95a044abdc6c58cbaf94ff6ec245c9fbeaaec79e41e379c04b4886873c940d5f5b70e553a2188ce2898080d72645244a563727381f7f7f330384a4a97ce8e0e8d53648a75c5424805aff84cf6564155dbd512dcdfdd7507b8dae358a8cb02b2a849f24cdc647653720e626cfd6b3d987cc2bcf23c61a49f025c6db907fc9063c448f21f8499b0513393aad607ae97dd00729642b397bb83fb7f30f7f3a8b18ea9e82a8e3264815acd2c92aa33f893bc6b47f1e509e2250500361a5f94202439065252d7a0c5a7fcc50cc6ad4a695b0b722b674c51f448625e36d69a37914076bfa61a42039916635f696d762bca9af23bdfd27cf5e0674e29fe635662526eb351b645f98e970c35f5a6d11d540882165745ac755632e8967ff97d19621318c474d1bb1de30748cb441687f6c1cc2eec61c11b2f8861d1ec22f9a6a964f0d2a3718246819add6033be4cc7324c1d3f54a70205e3768450600845fa49210fc4e5c111261808f412b6f885cee4a9f19ca030b822426cb7869cebf460e9f726d2399361354b5745b41e2f22b107b08e16fbae9291618ac6372a9f6e8a11b11bcd3c748a46fc93df0d3383fdb3861c9cab11145f0edcd5ce47a9e70ecaa1d963507d73f195ae3980c6901f16a61f06d1354a222358df7277b3576bee2f99dcb6e52226fb07d099c2b47961dbf0deb373a73e3914ae8c4601b27657909f1926a8fb55b56834332d8ef5b59f476661c57285c7602e4250191c95363e8f3ee3bc5f31a1b1354b948f960e72dccfa122644bb5cb00904682ee0a209ff2584b6295ffae8656545976ffc8850ee43271f66a2dad98f76bb434087c20e041ad58b2d26b6097fea1030a0b6419ea2a066b5c02d182a953a7edbaa965e979857a5532f1aaf438ea04e37996de1d0ab7ef09c4e78988e01bcad5851ce74c2c45682772c2ab814227ae7d133734e0165c735f8dcb9106b96fde95829de0c25847c82c55f909c38c38d285b11f94ee87a8fb7c350221722300e24474aaf0d40337b71ae03e2e19dba863f67b5ab011c1bd061ec37a35b2b516da5e920d7dbc555ee2d46c818863086bfc3906e8d0ea02c54d783344c762706852a2dd08c1a36b252825fc8c31a6f587251d80e963230ae8382b3c77e3b3fffd95cd8ace5be809153e1439ca4f9595a825dc9f440baa2ab4a36985aeb837f8d80c30cd0e37f78836756363b20513f29005dc7e3553a90100ee3713a3c174ef2399e608f59dda0058b8b24372f86c263aa68132e78a1192f479431a321db4f1301158024e081877b36cd6205c85186a752fb5100832b5732b997fcc9dbfbc38a14ac4ecdb6c48df3338f31cc9d639af0283623109b894798f5216d6adfbc370cb2a8cfd45b6598d86a221bce2f2a9fbbb0f8fdaf0a6c82f2a25fa8fc624f566da8617fa695099f8513b66388d9257f628a24fb7aa27a787aaea529287ce8f3c6c0e5d63f1d45f5c3797d4fe24617241dce615f2eac94dc22ec15d5446ffa7d2f4a1c487bfb8c6b2f17e32696143151db7b1c79ea78b243cb7e7af6478070c9bf8902ca741247ac561235d7f47e3950702e4d01a98f239fedb17044b1733207f7a238227cbd2f3cc25fca5e3d9578c4e231a4bb70dc02fef17e94b08223e52159e00c87ad5720c040b07608ea0502a08254a7ecbf67ea03f01d0f8ff9a0825504cb38576ca22f1a3c42fa45cb63227d1a4582446f84d72be1626e1853f0ac542b320451ce7d3f54e95c6554a2064ef9a95b7bb0cce9b9447a00961f0bf74a1b9024c90bc8a06b12a1a477803f437923ef8f1a934d6d157a9bfd0a2021e2845ea46c5e1edf9a6cb6122c5a0e0640b5a6ba8562d454b87cd4e65d5eda9a9fe0ea1962f181362e832ea57321aec776cfb01d06ef7cdbf91095169c61f0981a1a3af1f7b43324da14540538170b504a9573aa094f5366c8a192403f5d785546e0c60948cf260d4ca314d6e45625521379eeab4a42af22b542414798b54fde47e9ec43e5215746ea0b39c4ff8b8906861c1e07a9b0cd2c0caac763843a52ee5e51c0633373d47b1ac02b93886652ad959dfa75db737d3936a23aafbb409040d5d42523b7718967ec8cd72faa2d630f947c64c6064f0328b7037f8d1f29bb0c3804e89a7e39a1ec2c37d2007971b230bbe86f64df7cd3510183e8ebbc7cf87dfc060ce72019948c4db10922cc2e89c9d6984e71c14dff6d76f7c807b16425af8aeccb4441764175f5235563852deee9d5f40b4dc164f36f4a9cd6615a5fb059bc221a6b4d27fd37c468541da27cff2d8aba47534cba1eb547fb76146affb41299dc3f2f8c34f1c5d50c4d4ffda14be124ed1842cbd3dd85b0e87fcdf2b5578fe243a3b1a60fdc0657b4a5d7ca6c5b8d19df46c844df5a0e8710905456ad30d2bb02b8a7f66d1e6eb3616b452651d54b5ddebbc199393bf6ee4dbf4159864fd9c13ce2c8e0e4f3025ee6f8cf92031d88599e588efc7754d209a24e7c0ada511ba8d76bcc6f6430fcead0943355c23c807d530abe9b30e7800aa2141fd67df821395e1f000fd606f2d82fdb4b1b6bedcfd81e6728b235fa03072a8e660f15bd4aaea6f77efcacb3f1c8e4d2afd4e958a304c1f8471f64feb55997b5d597da3e1abe1ddebd215399f5d77190a069ae52bd086ccf2abfbd48a1fc5f82a1637fdd1a2ba22ec685d6d6d2304d45a18ea4c861e135cf3444abb0e1f3ad60ee62710f7acd60d91d9fd059316611bdc5312f6caa52214d794159a3f9627b57e012d1686cf1f23007283f8af0692b65cf9a6072e0fd7270db1dba2a7f72778583ed63fa0a1ca57f3cf91a44872ce1c292587e29e2394d5ed9400944aa3b3a51fc700f01e1607d3edb9b110c21777a974ac15637e6aa9f372c64080f2a85f494e5476b1147ec12defcf54fd54ee08f5510ff55a6620ed3c7fc48a1fea04974582d958e4f4bb7301c2456a375cfb20e436e1a53f3394a07c83ec8c6e545519c99e69d86adddc98b00ad665a9f8625682f28dbec586b102591c7f92f85af79aa6c66656c77220b855eb4df7c8351b1a381c9305758d704c2dedbfd7f6fcc3c155a1fad6ff8ee965c274349bc693c926076f41e7e8d4e5153f47512f5533c6078fe39699af90bb234ad987ceb5d03143ff8b580439d2767dcc6694f221a9d21f56d8b927cf770629dca45363c81ef3bd5b7443a2b069347725006835d0ee780f0e12b45b4c850fe3e5147e6f0b904eed04ef106bb5b45dac08d838d2b725ea454ca70514a7a5fe86942e12cbe32a7efcbae0052ff22bb491051d357c86d0bc501a3fb74d73affce417d502525d3b63f26b5228316a6db23e01c0349dc6869b1618b572a243aac667aab1ee44bffa222ddb189dcecd46f547fa75da31162a99a40723c0de00dc08fe45834e8d0556f6d8122d0afdceac39d64dceda889ce097d16e3138d5a0feaeb10df4584ae623f07bcacaad2bf344a0977619b3fda393f84885be7e7c6d01f2071c23d3caa5d629ff68fdc3fcd19adf07078ccef86926f5c8919d03e7e14f53f277fa4e32a2feb3d24cf88827b71eb7e902f798c2976192fb7cb354eb1bd540f1aa38eb72e66259c76f44dd1874035fca464deb398243e3a42f744b044d0fd9ab3b798a5b587beacece87675243889b6f22ac598e2a6427be3146e37c21a8d70d35341e87e86ae15d4dcff24e6599d44dbe9c2618bed97ae48ece7706c58673ca72ffdecc194464fb6131460f683ec5cf2970e1da27e3c3050396ef7e2c12d87120cdda2dec13d60273abcd8cc4c0e6fbfc98ea170d0b2f8db6765d1ad492d89f775a20b48d4499ad74ba2a1de7cef5384a37cde6f0e8ee0fcfac1a71a36c0b374f920c61cf7ab591123dc1b768076b2c928b7c754d766f1884776f06cf9f1ab6a2e8e9696e28fa21f949b968f2a724757c44223bbcde119afe052a06812af06eaf7bf745462f1078a051c65960b8a5279d5bd915be67fcfd42f202ca1e99bbc24ea688e19b4ab58bf50d21fe2bd8f4b9645d71dca9c731b3681a3861e86c0d3ebd39bb9d2bf5d621373e97b1df91354dc10ae3e5fda94ae1c593f86ca1210b7d9cbf01a6d1f50e9439df24d97464ee98230d0b95089c0acd5f35adce75fbd9368cb85be0c0fe2d05115238072aa27c95e3cc3850c85927313de5c47334e1e7c2c0443a6fc3c62057867eae83d025ce2ef11813bdfbd8df75df80810358def23af479a2f67f6ee415c84d1b0df876a5034a42fcaa988698361096aa98f4e82ddbe54b3e89394f8c78d4b47002083d61ecedef0ba55322ef844f761080050f89bba0145dbd603a9f7440a581035b0de7981d651998547f9354e1c3665e336c9451d52345111248962049cbc918ae1b81554c3b7b0eb30a8b2ce6e7269a150392fa240222f51613095055317528400850c524503243a8c369bc4dbd7486e139a93bf8ac8dc3892681a7208d8c7eab7a5f3854c91b5cbbb651db6ee2578ede390a612f5caf371eb0af8afeb4c3a0ee7cbc46b5f65ac42f176c062da2be17d550bc9a4ce08d335640c7f361eecb0f60ea9385baaa2173a74690d3cefbaf4a2a8ea4fbb72e85bf57dba59ee3c282d0790464ea24b9537d36cbde79b60e8e73fa8a3168c4df148381b5477921cbd66a8bbfb04496c68e02e889ec4a72fabf6998a9a2b2c36eefbe9bab46b23e997d183c740895d03e236fe57bfaa82871d106d6874aa2012dcccaf29490211ed4085cb39ffbc8211ddea57f9f18de61da6873cdfaf17aaefb738247db7ff752768ade3226e95f21fc71060ebabd69842002dc9b25c290182bf05c2f34406ef8b5496ceb068aae3472e188384e6207dc32aea92692f8d89f0199fc7f76970f43713169f2a6aa939713ebb15dfac74a18642d06a3600d0f95a7a83316e1c3756dfd513274418c590c5a170a7018ba090703871119ba7eae504ddfd9429514d2c7221cfe31e83996d9f1e12dc519786796a82d9bcc095c5ced86ff4f10aae0effd0beeb899b26b87015d25c431d0b31e3d86605ac6c334c30d3e289c9fdc52f86286af73cacd48a7366d43f538c8a9878bba6105693710ddd0dbba019d2d860e77b189d2328e030778680a4a47c6220bd6867a6573766c21346026fd3b9437700f48f53855ab052cf7c30303786f6278fcf609f4556c8deda66b937dc928a96e7fcd0bd8900ccf64145d6aa6b8fe1d614b10d5fd4c035439a3746b445968690686f42927182ec1fc2a84e6ef06e71f79dd30481741b55491b71d54d5c2a407ffe7584c7ebc1078dab252fc38897fccb8bb5c92dc2bea0d03f23a8b03f9ac7e816bdc26751bf96ad35300343302cacf30965c764a3bbfaba4da7702131a4faf984a3d8c5a4633f113ce0d4750d8363b8976531f69df3a030bac7b21593a3650113568ca1da27de6cd33288d6ee6c427bb86482003bb2085f4fa3ac24a880cfa37557f933c3a4d5562ee94ca0757248981abb10ef59062942c3f72c18e30325931233610cfed05526dfe56815a9b5b97a8f14124c67500b7a24011a362ada902092f026f81cd17fd8ae7121de9f6b5425c0d1fefc4ac3f12b61e75e0bf2e14c33a848889f8e0165bb6127fa4adf6f5f302cefee1d0b25eb85d8f520758b2cc536c783b7517c10fe26ef881ba21b674e0440d1772ffdd1f8751a34f00dd68dd3de36610c34714446a1b8c3d8752fe4fe453a01651d405c2093862cb4e9da86c773566dbbf57594e326ed3a86f9936f9e37864552a0be7225a8ceec1db9e40f3fe61a24e648cfd57f2fdee6a327625f5acccab6dbb8ecc0ae752a1a8736405362913fef113e728e44b2caf8cdea79ff93e2e95c6aff05fe50e7b561448499f0d228d4ca8a945648113e8e15feef0ea1f15eeda02958a3a1e082caad7e51996da07e7932c977bd99326531400f8c60ae38e3a4650b48bbefe77a2d58af668be9cb7969fb2548e0d6c12b34bfa09a55eecdf25bf9f4833f69e9d1ad58271fea2ff58b07d3e93f880c482aec20698ddefe7624a647e86ccb23737cfd89989051ba645689ff35a7eedcd7d9d6370476b31cd038b6ea97a08290d1f23409236bee27481c93ea344b0e72a6714a27ede711548bca5479afd2c11ad5f48bb60aa5ce88722af199979ef56dfb6e92ea4ad493208199c68cfaefa2c967bba818bf47b6fdcd3c29cf90222e65c91d89e85ad19ad94f1bf43ce14ef830d388fe83cf1c5df2f49a7e015b6772c858ff876a27cdeefeff879262990424bc1c4cb664df7f3da2522886d0075b0228f2d015d82471075707ef6a730a9384562606ecf5b41140b3da0c2dd65b93c76303fcf2077a462188d81a497c8816fa4ea6ed6298810e399dcd40509d8a67286e2674fa77045cf011cbed9e530c7299d99a3f41412291c344a08a69957b93b03fe09a248793d7fb0b502570d17853efb317cd640ec3c5c933dda77a39354b6cfe3cbf71597dedbb71d2073d6189f2a373be5cfa1cbf647671db72decadaa7168f2cf825a8d5a8e6284c43a8682c067b5e3c4695bf95171f35e72b162ed1bff5794165e9d96d888d30e67a783861b1f679ffbf3abf7cf21a52bd501adaaf4b7743b294d486832da8a7c7ecaec397263bb837f13b3159e6217cc011f2ee59ec3cac4c8766cdafec64aa8d52db04dee46b2b509156830c2fb7d5438db9ed028071a33767f1a11d59ef18124ad685f06aae76aea7f06d05e8bdf296229e9d763cc2b6b39870a81db6a1a3437ce1b7ef381cbf7a379af964dfcece98b3547e54b0e9b20b635ddff2595896f1b8b343f83ea6c0b643e246fd92b063b45c13f982446bb7db80a4550ba995cecfbf15d7b53760c2929b219971245a9de7f2c75fe22405f2f9f22aa32e95d71b12d0143270549a46fc29d510a79c1a0bb6f026898962d308b3a01613c83e0df7a8e30eb14774bc9f8e2a0c610d39c4de7025ba9e4119c3253201b62b14563e956fa930f40956950e8648aa82ce35d5382e14b82fe670a73ebcb9dcf5a4b9e87f2c0f1307fe1d7b353571152d011a21868cb256e6f13f1cdb5c062bba70dbff98bdd77c523f51f7705db32cb68049edd9d340e22de6432aa6fe1200aac6c9e9f45699dd190c8103891dd6e488ecce7f32dbfde4fb4f7a4a1c40a68cbfc228b28cbae911a0d745b15dddb2152329920ce72250f0cf9a6a73c8ebca2f929efa5e0a7f41e17e3be51bafa84047ce52c6727a17ed37def46bab020fd6d38559a8a0059cb520ebd288f410543e9a60d98adbed65547759c098dea70a14f96da59abb6d2a79d51d937a9ffe835588e7ccd4025e78baf71e8534ac9041c628937c06071ec233e0a26fad5af45d1a5e36554dacb632a6c48b5fcd9480cae56461d9e127789ed889040aaa5464edec45b1639de677f726faf492b93274a372fe7beb688bb272bc89abd25ee611b4c820aae4a3faf14c841d970db75cb062555179e257ac72ff4772e03824150e78a385cb3843ff2431306b718cca8f8cb50e04ec011f3de77b435a6e9d7e4752267785d11e2e453d49b90a47ae81c84be3bf8b238173dda1813200e3ee9c12785a6daf49ac164392aca926dff3c584a8fcc6d1748174a9b94bddbe6b181a899a4eff143ce8e28c3f452a18a0bf03321633f41281a65d6c7d99f5b3e02898d57a1249d814de1f5550efbcc69bc21d660d0836d73f22cebc56d16d14949f5a3e5178dbed930c06b125ae1ef1890dd91c778c7ce0334507c3fae7a7d76439dc7c6c0a3bb527b1dac098a24ea9914913bad3b19db66eae81d50a5943efe20cf247c633599aea90449a5d7eb07601d3b42163d354d9be4709e56f28cb2d117c0077e68af6ebb9555a554e7d3f2973875bb298c2ca4492af4df3a24b7f05154f6af34099a8f85afa1128a39b33a56ac18b4f3dfee7026a932b69b018edb4acaa07591182c8775c46c4490882b69574e6922368b318f879d59b70b5758aa019ae44c76e9842d78f78a576330ea508fa534818a5df0b104fa4c3191393cb7ad37562f95eb121a189b03b567b591cb536be81456bac9ba1fc80a65ca419f396826e21e0f8472cc7b6e589814e8dc449449025cfdfad1a38e527978cc0629963b185af52c002c63b581405e8afc5c4d7701fb283f429e2ec488d874a5d9534061710bacde5725a15e5067240920c9f6768fc06c4260275d6c7af0a6818692552a3a85ea7c57d5a063df207d3364facba7bb23ab36c9e33bfb2ae30a4e0e9c3f8d00bd6ba0155c5e74a5d1f25be26161a99cd2fd9160e48172b3c15f15c0971c0fafdb8961a7081a9e111c3edf12fcbda709ce5d720b66536933a34e6e19a13ed62d58a2bfb0ce13ec175d58bd63dd10e550b10a85dbd42732d22c778ec196c7f6c432d86d2acbc2f5fc24b4d29c99ea430f1d7173c69196d9b4c1d5df96898ab9aa947d3bf468fcc7f34e525500fcf9003bc07ebbea2d227b5ddba9c2dc45afd143dac7affde40f410cca1fec32b450bbf5c578dc7dd8ad1f288378abcc4a575632cda6d872869ace5b0257b242d928b16f724d8c9cc1c6ee8950c5502dfad298832f109b7dd74f586948f49f04b6d11dc77a65ae2ea6bc61a6ef63b93cb0f5896d9355021cc37af133c4aec59b427c75ff1b52096491cc55728c40803bee9ea80e31eec4cda5ce05be72b9410563c0ece94eedfcc7f1ef57250a57ff7424419dfca5f2798834c30e126f79cbdd7a4d2322339657a4bbb5d535338dcd83215486944d45b1f9a64bb496a7872fc145e1aaf58e01fcfcfffbd407a3d126ec925222eba7de426b3621e94084ad3c72fe551ce3323fbcfc31cbab1244b45671792848fef6fafc7d80414292aa03d021ff2cfcbc2fbd03a2a388ed995b9de3d0e85b045e6696eefcfc7000f6fe8c8514f4e40ee23c2a7ca2123d5bff0e3b650a50a9ae1fa7d19e0e9fc597c4c2d598d76c9480f4ae9066bb980440c2bf3772fe5cef5721f6e3c46f92166ce63e7cb71e71f354926958415d836f51720f967fd93ae30a22eb8af9738ffe89934488fad37aa53bec4ec02659b4b5f442a91f4dd07cf48589b50e062a40c815df2c083d8d135f43d14c192b6913bbcf32b6fe09a30979985a1940ac03f925cef2589be06241bf0a02edf13e65ba763fd73ec4c5c256992f66d6eaddcd7a01de334043114537376e4d839f0b6e592681f1d0d34490d7febd45332c25f551d8932d9c1713fb31ee53b3aa961e15268199269640b38b1abb12be8c98fae1ba0d8ba237ac2b9e30ee413f63d128370572d81b937a129e5520d65e9c994ac4a3f8d3442cc51480bb0a8e2acdf5b0fdc7189fb0f765e587a80f7d564339c72844acf00c7a4bdb9f7ed077137cbaa942a4257e5d7f7aa28ffeef035164a4be7431fe470fe035285c8ac7ac9a71de0b5082a99776ef619b6087f1db3691beb048b4b164c46df7eb99fbaea08dae948255cf56c2c7738280a1446906a22f93cbb873b480bebb58319ff0b2e926edf7bc3f4f5a0cd68ca9f9487ed38cf33d52388bba6893814db8d7300f5d03fc3cdbd26636b3dc2c13a40f0714bbde7cb23cb406de2ad4bf368cbba0a26c45ed078b2347ac6d3a48cfca3bdeeeeffad4c2113e12c83d2df740d0f535f54202ed42f1b52196fb1222d19b5aeec23ebe7866d376947edb5b69dfbe7bf3bb074721d370a27b866cbbe1bb96811249fb938015a47aeee08692802b9704ae84f202a76f8d106fb63582b2f76ad37584ffbc77235ec301325371cd5599fedc29d095eac1fa8d783f82685811139e1b2cef2d710d0234f76e2eea53332600d439c1a01ccf4c95a80a1e8aab9076866710b6ac59051e8d33e9b2f94d55e8d9f6dcc485761f571d5df6a292a929533c049acac4028876da4e0ff3afcd901999656e66ad66637d020aee60d49887d2afcbb2fa6b9e59280f138afea96a5173aa46e4005861af073d0996f9bacf02838104d48e23800320a10d3e937b1534d60f903e60f467b54e82ed1cc0f7a080287d2a7af0aa811909b275013cd65ad03ec1947552704467e2d645e4ce7c975aca301433b3780f7f8d9222f08dd08d4c8854f69e6141820a9731e3f48635acf0eb7f77b1367a608320794e1df962435ad7e656c54b2061f750e443e5a6d1ef495318190ca634d217caeda628782de49934ef5e45bb0f450669a47432a7d20440b0a36f9c402c727ab81e008b38b8117488188d4bd7f84aeb3edf4d3cae6c36c59d98ac53defe11f73906b10ca53b7768671a700be926899f90c8bd8da91c03f6b2b0ef547aa9892d2c7c8a5d7ecd57bd625b0f207e452232d4a9694ce558cf6e824a411ce54cd93c522189addf906d8a747d32cbad1023352768dd49953d9fc417f1804deccdcb423f7cb45224ef9b502ea45fe7a37596f1a8538d4ee19bce9983d1d91cd7298bb8c49ce5a1ac782ecc276ed3b1c4960c35287e04bee47a1a53295a1b829e2e9f58f02cc3efe9a3652ccd96b3a9143db956422264fa0a79934d209a18dc07f74a22bfb393f2df45d9479555c2c5a28adc46d6d1ab095343ea3b84a1ee705ba392d4af301ed37eb4a4fd8707ac2913f4525a3377e7c4bc5a283a2198fd7a63003222e6b81fbca6612a90142e3c94da74e5ff8a1baa328abc1b5c79a79031f8fbc13878586cc9d3494cabbb5fddb09f07de0b2878638083a5f4b62d2af5de6cb5e1be6bb51c932250cb0c7565b82e5cdf661d4679436d853d122c789f6b30be9e524e3c5145b1613207683c3d2c47a1f39fd62d3a03c9414c2e90b8bea63a9c05d0f85cbd0a28e8270ca2db0820908d1190bf98d5f35bb3fb7168995c3af6ec51ff250e238111f176058497ef8edd3c2fbe10503df1563e3e042f0314a98cde866e19e4efe9d6d0a87d7bb14693baa255aa0f8a5d3dfdc7c769075262e64c008b980a332b7031fa27d3780e20ac4961942d3646bd78459773ca917ae1760e937bf7d893c7f16f1688ad601b1ec7f608c0753cbac2647c87e8f408d8c85205f4d0a21ea588408191a24e256948584854fefccc935c4cd85e31088d66391be9636df4ebc16f92d3a3164ec985a5afa6c3a3a1c6ef6e7da08f9e36af98c3c630df6269f9e5db82a7d5c267d8d8fad39a4b64668ce65e81cafc52c7712ae19d71da5247f41e1900a3302e8259d446dd3f9a3a0eb9ebacf9689f53dff681255e722e5c52249fc16e70d26ab6924a6b128e54c76f6a93dbcbb958d016196a69cb2c05c5a754066d61d5f7608919c8b67503340029175689455492f226ea8d1110274b8d988d4f0158ec5cc64057a0455c7151ef0bf358bbf93a1b6e5b23a69b64568f529808e69774d9f6fda2f32265fd9bd89036cec640e6383565eeedbcc9c8a35f88caf3d5fc7c0bade948478c0f552b307fd946e5d2b872029f77243390ac6cdc8808079e6790b68ef621735edfe2764346de157d20730144d8a809b9d4bb61dbad764cec6e9fd9cce7124d694a831d897ab1fa1e307e990f2a96bf0ac00dfa188bd8fea7250c7437199212bb95bd2387f94b307272e2a18c05871cefaaa45afbe8aebe6f3abadee3773f4bb77c7e17737f387d3c3e843ea0f1ec73d12bc6270efe6ddbc09cffc0c0c055729ad02f55b357942b68503adfcc5ad4955dad3538a6db87e66d2c10d2c55e6ff25b66eb33d873bb078bfee8871ae66c64562eefc2727b5e514ddff4c12920010d0327855b57f38a99d2bdcb4c54f74f97cbcce1543458b5cf6783df30fe8f3939023918ee4d2eead01d45c545abf24a0b0aa8ed948a1a212ebddc489e54b4bcc1da36b33e40a0d2cc3c8c22f3459002cbe4c9851f1794ac0acf6327974e0c859367f5380d15e53e9f6e2abcfd366675659606f648867510d358bbe8a22b3923350e4f763daa771353720f65ce575bbbeb0bba4e19f922375a70c5dd92d6a88cdde9ef55903fb029b115918a6b48e78be936ae483bc271683c168ff68f36a06fbff28b60aace18d9f15d5846f7bc1240e80f52e52c9c63a35bf2c1633f14361adda65712f506f3fd649ebf20793e41f549769d94b6a0021625c8423268e1ddc4fc8ddfb62006d5f67796b38e255d6cb0baaab39fbe2726507af9f847a8197d18417fc8a7bc258db28f2e763f5af53f0bffe23c1a6882b5bd5798d0ececef92b2387308dc7c18cb7c31d6bf2dfc6ab678a530260c216cc6e79164d014ac363e41a9a1e1f9af116bb88f78251fbfc3dd2048ab6eea0947e0727704db3276ef4b2780a5edd99498fe108e83fde3b549629c4935e32bef3b90611be3ccdf5c459fbc8f79e004c7f04b9033379166a07b7ddc47665280dbb79abd7beaf081496a74dda98ac2303f3572fcfa0c9b2055295eba9ef1cad424958112279f14c86db51b2c49198f83dcf382b84b43104068ed7803233a6b32ed8912ea2c22bf9ece8639c135e26513d874f3e703aa3170969d9452f14920c979e914123e94a18a5b64f4861758680d600bd947e1746507fef56508e62db9e9d33e87bc76c0eefb188ab2ccb1ae0b1f6287493287206a7fb166f179a727d7c89523b0f21c65e52ae068c69f15141dab6abd37cebc657af040ad262d4c495301353c90b4f5db626a44f38af131d6ef483f5b2246f89756393cca6b0e773e28d9fa963aaed17f7af1a1e5d0e9f6bef5b3b55a8841ecd4b253bc213caf0b6b33de32e91892aedd37eb6fc74738bb6d75bcdaa9314824e43e01d72d27845ef4599b3165aad3504284296dc18fca98c84aeface4e12ecd7415647bab1e130471c244abab86cd0794a85eba984c3f5db551ee1ef2fa2024f60d1025c9732d978baf4011668add0b0c5bd4b06bfa5e096be80bb8d0c8a3bb97003fda668f663f9752de573d31297c15344238b1f98c73fca648785d61bc08d5a1839d5b17c70665a967201087e43be456e772ae68c29a47ba96f36eb7369ba2f99c75442edf86068c5c7ab7bc914fc7fb07e2e9b6417fceedf1cfba2167f2a03ecc28534b526085eaa22fcca3f58ca4de10a4dc2726e83cf7f2caf25e1af91229ed5040c76231ebacc736bc803a1f624028f1edf6e5b6b7eb536331ca535cd82b6d4d572238968f75fa39620c8c89064cd9aaf73d98e23e07d71047ae0fec0a5336720824d0d65668b424394c39b84e7deece056d0c4bf203add87997b704444ac8ce1e7491cb79d9876b5761084e4e23b024b1a56978ede340301ac0f313b14457a674e3c52cc540d586b335662178dcd9603a902aad561542e32b7bbdf03f783c79ff0d8fe0e611ff97d0720aa2b47b74c0eada7fd4f4c5e836e86ca4b2e0d2423007a60208473f5fdca47d32e11cfb95f685b1afc0695795993080ff9b4c59f3619723492e6b7bbe5733247c1eab58c61a6c83e17976167ed421d53f2e5464d7d92b4ac7b5b29e851023d1016f76135d42a048f41b599f99caa33310f0d257639c78f7956c348c9d64b20f4f7ff16b947fd29231298fc91577b98b49803bfffb1"
      , Qr = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
    !function(t) {
        function i(t, i) {
            for (var n = "", e = 0; e < i.length; e++)
                n += i.charCodeAt(e).toString();
            var s = Math.floor(n.length / 5)
              , r = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s))
              , h = Math.round(i.length / 2)
              , a = Math.pow(2, 31) - 1
              , o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8),
            n += o; n.length > 10; )
                n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
            n = (r * n + h) % a;
            for (var f = "", u = "", e = 0; e < t.length; e += 2)
                f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)),
                u += String.fromCharCode(f),
                n = (r * n + h) % a;
            return u
        }
        t = i(t, "QUNEE"),
        Qr = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
    }(Jr);
    var th = Qr[0] + Qr[1] + Qr[2]
      , ih = Qr[3] + Qr[1] + Qr[2]
      , nh = Qr[4]
      , eh = Qr[5]
      , sh = Qr[6]
      , rh = Qr[7]
      , hh = Qr[8]
      , ah = Qr[9]
      , oh = Qr[10]
      , fh = Qr[11]
      , uh = Qr[12]
      , ch = Qr[13] + Qr[14] + Qr[15]
      , _h = Qr[16]
      , dh = Qr[17]
      , lh = Qr[18]
      , vh = Qr[19]
      , bh = Qr[20]
      , gh = Qr[21] + Qr[22]
      , yh = Qr[21]
      , mh = Qr[23] + Qr[24] + Qr[25]
      , xh = Qr[26]
      , ph = Qr[27] + Qr[28] + Qr[29]
      , Eh = Qr[30] + Qr[28] + Qr[29]
      , wh = Qr[31]
      , Th = Qr[32] + Qr[14] + Qr[33]
      , Mh = Qr[30] + Qr[34] + Qr[35]
      , kh = Qr[36]
      , Oh = Qr[37] + Qr[38] + Qr[39] + Qr[40] + Qr[41]
      , Sh = Qr[20] + Qr[42] + Qr[43]
      , Ih = Qr[20] + Qr[44] + Qr[45]
      , Ah = Qr[3] + Qr[38] + Qr[46]
      , Ph = Qr[47]
      , jh = Qr[48]
      , Lh = Qr[49]
      , Ch = Qr[50]
      , Rh = Qr[51]
      , Dh = Qr[52]
      , Nh = Qr[53] + Qr[38] + Qr[54]
      , $h = Qr[55]
      , Bh = Qr[56] + Qr[57] + Qr[58]
      , Fh = Qr[59] + Qr[60] + Qr[61]
      , Gh = Qr[62] + Qr[24] + Qr[63]
      , zh = Qr[64] + Qr[65] + Qr[66]
      , Yh = Qr[67]
      , Hh = Qr[68]
      , qh = Qr[69] + Qr[70]
      , Uh = Qr[71]
      , Wh = Qr[72] + Qr[40] + Qr[73]
      , Vh = Qr[74]
      , Xh = Qr[75]
      , Zh = Qr[76]
      , Kh = Qr[77]
      , Jh = Qr[22]
      , Qh = Qr[23] + Qr[24] + Qr[78]
      , ta = Qr[79]
      , ia = Qr[80]
      , na = Qr[81]
      , ea = Qr[82]
      , sa = Qr[83] + Qr[84]
      , ra = Qr[22] + Qr[85]
      , ha = Qr[22] + Qr[86]
      , aa = Qr[87]
      , oa = Qr[88]
      , fa = Qr[89]
      , ua = Qr[90]
      , ca = Qr[91]
      , _a = Qr[92] + Qr[34] + Qr[93]
      , da = Qr[94] + Qr[24] + Qr[95]
      , la = Qr[96] + Qr[24] + Qr[95]
      , va = Qr[97] + Qr[24] + Qr[98]
      , ba = Qr[30] + Qr[1] + Qr[99] + Qr[38] + Qr[100]
      , ga = Qr[101]
      , ya = Qr[102] + Qr[103]
      , ma = Qr[72] + Qr[104] + Qr[105] + Qr[1] + Qr[106]
      , xa = Qr[103]
      , pa = Qr[103] + Qr[102] + Qr[103]
      , Ea = Qr[107]
      , wa = Qr[108]
      , Ta = Qr[109]
      , Ma = Qr[110]
      , ka = Qr[111] + Qr[112] + Qr[113]
      , Oa = Qr[114]
      , Sa = Qr[115]
      , Ia = Qr[116] + Qr[112] + Qr[113]
      , Aa = Qr[117] + Qr[118] + Qr[119]
      , Pa = Qr[3] + Qr[65] + Qr[120] + Qr[1] + Qr[121] + Qr[112] + Qr[122]
      , ja = Qr[123] + Qr[124] + Qr[125]
      , La = Qr[126]
      , Ca = Qr[117] + Qr[127]
      , Ra = Qr[128] + Qr[129] + Qr[130]
      , Da = Qr[128] + Qr[131] + Qr[130]
      , Na = Qr[128] + Qr[132]
      , $a = Qr[133]
      , Ba = Qr[117] + Qr[132]
      , Fa = Qr[134] + Qr[34] + Qr[135]
      , Ga = Qr[22] + Qr[136]
      , za = Qr[22] + Qr[137]
      , Ya = Qr[138] + Qr[139] + Qr[140]
      , Ha = Qr[141]
      , qa = Qr[142]
      , Ua = Qr[143] + Qr[144] + Qr[48] + Qr[145] + Qr[48] + Qr[82] + Qr[79]
      , Wa = Qr[146] + Qr[124] + Qr[147]
      , Va = Qr[143] + Qr[148] + Qr[48] + Qr[145] + Qr[48] + Qr[82] + Qr[79]
      , Xa = Qr[149]
      , Za = Qr[150]
      , Ka = Qr[151] + Qr[134] + Qr[152]
      , Ja = Qr[153]
      , Qa = Qr[154]
      , to = Qr[155]
      , io = Qr[143] + Qr[156] + Qr[48] + Qr[82]
      , no = Qr[157]
      , eo = Qr[158]
      , so = Qr[159]
      , ro = Qr[116] + Qr[24] + Qr[160]
      , ho = Qr[161]
      , ao = Qr[162]
      , oo = Qr[163] + Qr[65] + Qr[164] + Qr[34] + Qr[165] + Qr[24] + Qr[166] + Qr[112] + Qr[167]
      , fo = Qr[102] + Qr[65] + Qr[164] + Qr[34] + Qr[165] + Qr[24] + Qr[166] + Qr[112] + Qr[167]
      , uo = Qr[168] + Qr[65] + Qr[164] + Qr[34] + Qr[165] + Qr[24] + Qr[166] + Qr[112] + Qr[167]
      , co = Qr[169] + Qr[34] + Qr[165] + Qr[24] + Qr[166] + Qr[112] + Qr[167]
      , _o = Qr[170] + Qr[28] + Qr[171]
      , lo = Qr[172]
      , vo = Qr[84] + Qr[173]
      , bo = Qr[174] + Qr[34] + Qr[175]
      , go = Qr[176] + Qr[22] + Qr[177]
      , yo = Qr[162] + Qr[48]
      , mo = Qr[176] + Qr[22] + Qr[178]
      , xo = Qr[179] + Qr[22] + Qr[180]
      , po = Qr[176] + Qr[22] + Qr[181]
      , Eo = Qr[182]
      , wo = Qr[183] + Qr[38] + Qr[184]
      , To = Qr[183] + Qr[65] + Qr[185]
      , Mo = Qr[186]
      , ko = Qr[187]
      , Oo = Qr[188] + Qr[124] + Qr[147]
      , So = Qr[189]
      , Io = Qr[3] + Qr[190] + Qr[191] + Qr[57] + Qr[192]
      , Ao = Qr[193]
      , Po = Qr[22] + Qr[194] + Qr[112]
      , jo = Qr[22] + Qr[195] + Qr[1] + Qr[196]
      , Lo = Qr[22] + Qr[197] + Qr[24] + Qr[160]
      , Co = Qr[198]
      , Ro = Qr[3] + Qr[65] + Qr[199]
      , Do = Qr[200]
      , No = Qr[201] + Qr[24] + Qr[160]
      , $o = Qr[174] + Qr[124] + Qr[202]
      , Bo = Qr[53] + Qr[24] + Qr[160] + Qr[190] + Qr[203] + Qr[34] + Qr[204]
      , Fo = Qr[205]
      , Go = Qr[188]
      , zo = Qr[206] + Qr[118] + Qr[119]
      , Yo = Qr[53] + Qr[24] + Qr[160] + Qr[190] + Qr[203] + Qr[24] + Qr[207]
      , Ho = Qr[208] + Qr[24] + Qr[160]
      , qo = Qr[209]
      , Uo = Qr[210]
      , Wo = Qr[22] + Qr[211] + Qr[84] + Qr[89]
      , Vo = Qr[22] + Qr[211] + Qr[84] + Qr[90]
      , Xo = Qr[22] + Qr[212]
      , Zo = Qr[22] + Qr[211] + Qr[213] + Qr[90]
      , Ko = Qr[22] + Qr[214] + Qr[213]
      , Jo = Qr[22] + Qr[211] + Qr[213] + Qr[89]
      , Qo = Qr[22] + Qr[214] + Qr[84]
      , tf = Qr[26] + Qr[215] + Qr[24] + Qr[160]
      , nf = Qr[216]
      , ef = Qr[217]
      , sf = Qr[75] + Qr[218]
      , rf = Qr[205] + Qr[112] + Qr[122]
      , hf = Qr[188] + Qr[112] + Qr[122]
      , af = Qr[219]
      , of = Qr[220] + Qr[38] + Qr[221]
      , ff = Qr[222]
      , uf = Qr[223]
      , cf = Qr[224] + Qr[24] + Qr[207]
      , _f = Qr[188] + Qr[34] + Qr[225]
      , df = Qr[75] + Qr[15] + Qr[226] + Qr[15] + Qr[213] + Qr[15] + Qr[84]
      , lf = Qr[227] + Qr[124] + Qr[168]
      , vf = Qr[206] + Qr[124] + Qr[168]
      , bf = Qr[75] + Qr[228]
      , gf = Qr[75] + Qr[229]
      , yf = Qr[230]
      , mf = Qr[231]
      , xf = Qr[232] + Qr[22] + Qr[233]
      , pf = Qr[232] + Qr[22] + Qr[180]
      , Ef = Qr[234]
      , wf = Qr[3] + Qr[1] + Qr[235]
      , Tf = Qr[236] + Qr[79] + Qr[237]
      , Mf = Qr[22] + Qr[214] + Qr[238]
      , kf = Qr[239]
      , Of = Qr[231] + Qr[48] + Qr[240] + Qr[48] + Qr[82] + Qr[241]
      , Sf = Qr[3] + Qr[44] + Qr[242]
      , If = Qr[243] + Qr[124] + Qr[244]
      , Af = Qr[70]
      , Pf = Qr[245]
      , jf = Qr[246] + Qr[22] + Qr[247]
      , Lf = Qr[246] + Qr[22] + Qr[247] + Qr[22] + Qr[248]
      , Cf = Qr[246] + Qr[22] + Qr[247] + Qr[22] + Qr[249]
      , Rf = Qr[246] + Qr[22] + Qr[247] + Qr[22] + Qr[250] + Qr[22] + Qr[251]
      , Df = Qr[246] + Qr[22] + Qr[247] + Qr[22] + Qr[252] + Qr[22] + Qr[251]
      , Nf = Qr[246] + Qr[22] + Qr[247] + Qr[22] + Qr[253]
      , $f = Qr[246] + Qr[22] + Qr[247] + Qr[22] + Qr[254]
      , Bf = Qr[246] + Qr[22] + Qr[247] + Qr[22] + Qr[255]
      , Ff = Qr[256] + Qr[190] + Qr[191] + Qr[57] + Qr[192]
      , Gf = Qr[257]
      , zf = Qr[22] + Qr[258] + Qr[259] + Qr[260]
      , Yf = Qr[261] + Qr[24] + Qr[207]
      , Hf = Qr[26] + Qr[262] + Qr[65] + Qr[90] + Qr[38] + Qr[263] + Qr[24] + Qr[160]
      , qf = Qr[26] + Qr[210]
      , Uf = Qr[26] + Qr[264] + Qr[127]
      , Wf = Qr[26] + Qr[265]
      , Vf = Qr[266] + Qr[267] + Qr[112] + Qr[268]
      , Xf = Qr[26] + Qr[269] + Qr[34] + Qr[175]
      , Zf = Qr[174] + Qr[65] + Qr[90] + Qr[112] + Qr[122]
      , Kf = Qr[26] + Qr[270]
      , Jf = Qr[26] + Qr[271]
      , Qf = Qr[272]
      , tu = Qr[273] + Qr[24] + Qr[274]
      , iu = Qr[26] + Qr[269] + Qr[38] + Qr[263] + Qr[24] + Qr[160]
      , nu = Qr[26] + Qr[275] + Qr[24] + Qr[95]
      , eu = Qr[22] + Qr[276] + Qr[277] + Qr[278] + Qr[190] + Qr[279] + Qr[40] + Qr[280]
      , su = Qr[281] + Qr[277] + Qr[278]
      , ru = Qr[26] + Qr[271] + Qr[112] + Qr[282]
      , hu = Qr[22] + Qr[283] + Qr[127]
      , au = Qr[22] + Qr[283] + Qr[132]
      , ou = Qr[26] + Qr[264] + Qr[132]
      , fu = Qr[26] + Qr[283] + Qr[132]
      , uu = Qr[26] + Qr[283] + Qr[118] + Qr[119]
      , cu = Qr[22] + Qr[284] + Qr[34] + Qr[285]
      , _u = Qr[151] + Qr[286] + Qr[24] + Qr[274]
      , du = Qr[262] + Qr[65] + Qr[90] + Qr[24] + Qr[207]
      , lu = Qr[26] + Qr[216]
      , vu = Qr[53] + Qr[28] + Qr[287]
      , bu = Qr[26] + Qr[269] + Qr[112] + Qr[268]
      , gu = Qr[206] + Qr[57] + Qr[288]
      , yu = Qr[174] + Qr[44] + Qr[289] + Qr[57] + Qr[288]
      , mu = Qr[290] + Qr[57] + Qr[288]
      , xu = Qr[163] + Qr[44] + Qr[289] + Qr[57] + Qr[288]
      , pu = Qr[290] + Qr[57] + Qr[288] + Qr[14] + Qr[130]
      , Eu = Qr[163] + Qr[44] + Qr[289] + Qr[57] + Qr[288] + Qr[14] + Qr[130]
      , wu = Qr[206] + Qr[57] + Qr[288] + Qr[14] + Qr[130]
      , Tu = Qr[291] + Qr[277] + Qr[292]
      , Mu = Qr[291] + Qr[190] + Qr[293]
      , ku = Qr[294] + Qr[124] + Qr[295]
      , Ou = Qr[296] + Qr[297] + Qr[298]
      , Su = Qr[299] + Qr[40] + Qr[280]
      , Iu = Qr[133] + Qr[24] + Qr[300]
      , Au = Qr[301]
      , Pu = Qr[302] + Qr[24] + Qr[300]
      , ju = Qr[303] + Qr[297] + Qr[295] + Qr[124] + Qr[304]
      , Lu = Qr[305]
      , Cu = Qr[306]
      , Ru = Qr[307]
      , Du = Qr[308] + Qr[28] + Qr[309]
      , Nu = Qr[310] + Qr[1] + Qr[311] + Qr[38] + Qr[312]
      , $u = Qr[310] + Qr[38] + Qr[312]
      , Bu = Qr[313] + Qr[104]
      , Fu = Qr[314]
      , Gu = Qr[315]
      , zu = Qr[316]
      , Yu = Qr[317]
      , Hu = Qr[312]
      , qu = Qr[318]
      , Uu = Qr[226] + Qr[79] + Qr[226] + Qr[79] + Qr[213]
      , Wu = Qr[84]
      , Vu = Qr[319]
      , Xu = Qr[22] + Qr[320] + Qr[1] + Qr[321]
      , Zu = Qr[322]
      , Ku = Qr[323]
      , Ju = Qr[324] + Qr[1] + Qr[99]
      , Qu = Qr[325]
      , tc = Qr[72] + Qr[38] + Qr[326]
      , ic = Qr[3] + Qr[28] + Qr[327] + Qr[65] + Qr[328]
      , nc = Qr[22] + Qr[329]
      , ec = Qr[92] + Qr[38] + Qr[326]
      , sc = Qr[22] + Qr[330]
      , rc = Qr[53] + Qr[190] + Qr[331]
      , hc = Qr[53] + Qr[44] + Qr[332]
      , ac = Qr[53] + Qr[57] + Qr[333] + Qr[14] + Qr[15]
      , oc = Qr[0] + Qr[40] + Qr[334]
      , fc = Qr[335]
      , uc = Qr[174] + Qr[1] + Qr[99] + Qr[190] + Qr[293]
      , cc = Qr[5] + Qr[1] + Qr[336]
      , _c = Qr[337]
      , dc = Qr[174] + Qr[190] + Qr[293]
      , lc = Qr[308] + Qr[28] + Qr[309] + Qr[1] + Qr[99]
      , vc = Qr[338] + Qr[124] + Qr[168]
      , bc = Qr[339] + Qr[124] + Qr[168]
      , gc = Qr[340]
      , yc = Qr[341] + Qr[22] + Qr[342]
      , mc = Qr[341] + Qr[22] + Qr[343]
      , xc = Qr[341] + Qr[22] + Qr[344]
      , pc = Qr[341] + Qr[22] + Qr[345]
      , Ec = Qr[341] + Qr[22] + Qr[346]
      , wc = Qr[341] + Qr[22] + Qr[347]
      , Tc = Qr[341] + Qr[22] + Qr[348]
      , Mc = Qr[341] + Qr[22] + Qr[349]
      , kc = Qr[341] + Qr[22] + Qr[350]
      , Oc = Qr[341] + Qr[22] + Qr[351]
      , Sc = Qr[341] + Qr[22] + Qr[352] + Qr[22] + Qr[353]
      , Ic = Qr[341] + Qr[22] + Qr[352] + Qr[22] + Qr[213]
      , Ac = Qr[341] + Qr[22] + Qr[352] + Qr[22] + Qr[84]
      , Pc = Qr[341] + Qr[22] + Qr[352] + Qr[22] + Qr[319]
      , jc = Qr[341] + Qr[22] + Qr[352] + Qr[22] + Qr[354]
      , Lc = Qr[341] + Qr[22] + Qr[352] + Qr[22] + Qr[355]
      , Cc = Qr[341] + Qr[22] + Qr[352] + Qr[22] + Qr[356]
      , Rc = Qr[341] + Qr[22] + Qr[352] + Qr[22] + Qr[357]
      , Dc = Qr[358] + Qr[44] + Qr[359]
      , Nc = Qr[360]
      , $c = Qr[22] + Qr[214] + Qr[356]
      , Bc = Qr[198] + Qr[40] + Qr[361]
      , Fc = Qr[26] + Qr[269]
      , Gc = Qr[3] + Qr[24] + Qr[25]
      , zc = Qr[362]
      , Yc = Qr[363] + Qr[24] + Qr[25]
      , Hc = Qr[364]
      , qc = Qr[365] + Qr[22] + Qr[366] + Qr[22] + Qr[367]
      , Uc = Qr[365] + Qr[22] + Qr[366] + Qr[22] + Qr[368]
      , Wc = Qr[365] + Qr[22] + Qr[366] + Qr[22] + Qr[177]
      , Vc = Qr[174] + Qr[34] + Qr[225]
      , Xc = Qr[369] + Qr[22] + Qr[370]
      , Zc = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[370] + Qr[22] + Qr[371]
      , Kc = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[370] + Qr[22] + Qr[372]
      , Jc = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[373] + Qr[22] + Qr[374]
      , Qc = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[375] + Qr[22] + Qr[374]
      , t_ = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[374] + Qr[22] + Qr[376]
      , i_ = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[370] + Qr[22] + Qr[377]
      , n_ = Qr[3] + Qr[34] + Qr[225]
      , e_ = Qr[369] + Qr[22] + Qr[378] + Qr[22] + Qr[379] + Qr[22] + Qr[380]
      , s_ = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[370] + Qr[22] + Qr[381]
      , r_ = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[373]
      , h_ = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[373] + Qr[22] + Qr[376]
      , a_ = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[376] + Qr[22] + Qr[374]
      , o_ = Qr[369] + Qr[22] + Qr[378] + Qr[22] + Qr[380]
      , f_ = Qr[369] + Qr[22] + Qr[378] + Qr[22] + Qr[382]
      , u_ = Qr[383] + Qr[22] + Qr[384]
      , c_ = Qr[385] + Qr[22] + Qr[384]
      , __ = Qr[369] + Qr[22] + Qr[386] + Qr[22] + Qr[387]
      , d_ = Qr[369] + Qr[22] + Qr[386] + Qr[22] + Qr[388]
      , l_ = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[375]
      , v_ = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[375] + Qr[22] + Qr[376]
      , b_ = Qr[352] + Qr[22] + Qr[181]
      , g_ = Qr[3] + Qr[34] + Qr[285]
      , y_ = Qr[369] + Qr[22] + Qr[389] + Qr[22] + Qr[390]
      , m_ = Qr[369] + Qr[22] + Qr[389] + Qr[22] + Qr[391]
      , x_ = Qr[3] + Qr[24] + Qr[392] + Qr[24] + Qr[160]
      , p_ = Qr[369] + Qr[22] + Qr[393] + Qr[22] + Qr[391]
      , E_ = Qr[394]
      , w_ = Qr[3] + Qr[395]
      , T_ = Qr[360] + Qr[124] + Qr[304]
      , M_ = Qr[3] + Qr[28] + Qr[396] + Qr[24] + Qr[160] + Qr[65] + Qr[199]
      , k_ = Qr[0] + Qr[24] + Qr[207] + Qr[34] + Qr[397]
      , O_ = Qr[231] + Qr[44] + Qr[332] + Qr[28] + Qr[327]
      , S_ = Qr[398]
      , I_ = Qr[92] + Qr[38] + Qr[312] + Qr[28] + Qr[327]
      , A_ = Qr[399] + Qr[24] + Qr[160]
      , P_ = Qr[400]
      , j_ = Qr[401] + Qr[124] + Qr[402]
      , L_ = Qr[403] + Qr[22] + Qr[369] + Qr[22] + Qr[404] + Qr[22] + Qr[405]
      , C_ = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[366]
      , R_ = Qr[369] + Qr[22] + Qr[407] + Qr[22] + Qr[408]
      , D_ = Qr[409] + Qr[127]
      , N_ = Qr[409] + Qr[132]
      , $_ = Qr[410] + Qr[34] + Qr[411] + Qr[42] + Qr[412]
      , B_ = Qr[413]
      , F_ = Qr[414] + Qr[103] + Qr[277] + Qr[415] + Qr[103] + Qr[42] + Qr[416] + Qr[103] + Qr[65] + Qr[417]
      , G_ = Qr[418]
      , z_ = Qr[419]
      , Y_ = Qr[420]
      , H_ = Qr[210] + Qr[70] + Qr[421] + Qr[422] + Qr[74]
      , q_ = Qr[22] + Qr[418]
      , U_ = Qr[22] + Qr[423] + Qr[24] + Qr[424]
      , W_ = Qr[414] + Qr[103] + Qr[277] + Qr[415] + Qr[103] + Qr[42] + Qr[416]
      , V_ = Qr[69] + Qr[70] + Qr[226] + Qr[425] + Qr[226] + Qr[425] + Qr[226] + Qr[425] + Qr[226] + Qr[74]
      , X_ = Qr[426]
      , Z_ = Qr[427]
      , K_ = Qr[428]
      , J_ = Qr[429] + Qr[430]
      , Q_ = Qr[431] + Qr[22] + Qr[232] + Qr[22] + Qr[381]
      , td = Qr[302]
      , id = Qr[431] + Qr[22] + Qr[232] + Qr[22] + Qr[371]
      , nd = Qr[22] + Qr[88]
      , ed = Qr[226] + Qr[162]
      , sd = Qr[22] + Qr[432]
      , rd = Qr[206] + Qr[433] + Qr[434]
      , hd = Qr[205] + Qr[34] + Qr[225]
      , ad = Qr[75] + Qr[435]
      , od = Qr[72] + Qr[57] + Qr[192] + Qr[436]
      , fd = Qr[231] + Qr[190] + Qr[191]
      , ud = Qr[437]
      , cd = Qr[117] + Qr[438] + Qr[439]
      , _d = Qr[440]
      , dd = Qr[441] + Qr[297] + Qr[442]
      , ld = Qr[394] + Qr[297] + Qr[442]
      , vd = Qr[53] + Qr[60] + Qr[443]
      , bd = Qr[240] + Qr[444] + Qr[445]
      , gd = Qr[302] + Qr[1] + Qr[321]
      , yd = Qr[446]
      , md = Qr[447]
      , xd = Qr[308] + Qr[28] + Qr[309] + Qr[112] + Qr[448] + Qr[60] + Qr[443] + Qr[395]
      , pd = Qr[42] + Qr[311]
      , Ed = Qr[449] + Qr[65] + Qr[199]
      , wd = Qr[450] + Qr[22] + Qr[405]
      , Td = Qr[451]
      , Md = Qr[447] + Qr[24] + Qr[160]
      , kd = Qr[3] + Qr[57] + Qr[58] + Qr[24] + Qr[392] + Qr[24] + Qr[160]
      , Od = Qr[264] + Qr[118] + Qr[119]
      , Sd = Qr[264] + Qr[438] + Qr[439]
      , Id = Qr[182] + Qr[34] + Qr[225]
      , Ad = Qr[182] + Qr[34] + Qr[175]
      , Pd = Qr[182] + Qr[40] + Qr[452]
      , jd = Qr[453] + Qr[124] + Qr[147]
      , Ld = Qr[441] + Qr[34] + Qr[454]
      , Cd = Qr[441] + Qr[28] + Qr[396]
      , Rd = Qr[455]
      , Dd = Qr[441]
      , Nd = Qr[183]
      , $d = Qr[456]
      , Bd = Qr[457]
      , Fd = Qr[458] + Qr[127]
      , Gd = Qr[458] + Qr[124] + Qr[168]
      , zd = Qr[137] + Qr[34] + Qr[175]
      , Yd = Qr[459] + Qr[103] + Qr[460]
      , Hd = Qr[461] + Qr[28] + Qr[171]
      , qd = Qr[22] + Qr[462]
      , Ud = Qr[22] + Qr[53] + Qr[40] + Qr[41] + Qr[124] + Qr[463]
      , Wd = Qr[464]
      , Vd = Qr[465]
      , Xd = Qr[466]
      , Zd = Qr[116] + Qr[44] + Qr[467]
      , Kd = Qr[468] + Qr[297] + Qr[311]
      , Jd = Qr[53] + Qr[44] + Qr[469]
      , Qd = Qr[324] + Qr[42] + Qr[311] + Qr[190] + Qr[470]
      , tl = Qr[92]
      , il = Qr[324] + Qr[28] + Qr[327] + Qr[190] + Qr[470]
      , nl = Qr[471] + Qr[28] + Qr[472] + Qr[40] + Qr[473]
      , el = Qr[468] + Qr[297] + Qr[474] + Qr[42] + Qr[475]
      , sl = Qr[308] + Qr[28] + Qr[309] + Qr[28] + Qr[327]
      , rl = Qr[197] + Qr[42] + Qr[311]
      , hl = Qr[22] + Qr[476]
      , al = Qr[308] + Qr[28] + Qr[309] + Qr[14] + Qr[477] + Qr[28] + Qr[327]
      , ol = Qr[478]
      , fl = Qr[479] + Qr[38] + Qr[326]
      , ul = Qr[480]
      , cl = Qr[163] + Qr[112] + Qr[481] + Qr[38] + Qr[39] + Qr[40] + Qr[41]
      , _l = Qr[168] + Qr[112] + Qr[481] + Qr[38] + Qr[39] + Qr[40] + Qr[41]
      , dl = Qr[102] + Qr[112] + Qr[481] + Qr[38] + Qr[39] + Qr[40] + Qr[41]
      , ll = Qr[174] + Qr[124] + Qr[482]
      , vl = Qr[64] + Qr[38] + Qr[39] + Qr[40] + Qr[41]
      , bl = Qr[163] + Qr[1] + Qr[483] + Qr[38] + Qr[39] + Qr[40] + Qr[41]
      , gl = Qr[290] + Qr[1] + Qr[483] + Qr[38] + Qr[39] + Qr[40] + Qr[41]
      , yl = Qr[168] + Qr[1] + Qr[483] + Qr[38] + Qr[39] + Qr[40] + Qr[41]
      , ml = Qr[102] + Qr[1] + Qr[483] + Qr[38] + Qr[39] + Qr[40] + Qr[41]
      , xl = Qr[159] + Qr[124] + Qr[482]
      , pl = Qr[75] + Qr[484]
      , El = Qr[22] + Qr[182] + Qr[34] + Qr[225]
      , wl = Qr[485]
      , Tl = Qr[22] + Qr[182] + Qr[34] + Qr[175]
      , Ml = Qr[22] + Qr[182] + Qr[1] + Qr[486]
      , kl = Qr[22] + Qr[182] + Qr[40] + Qr[452]
      , Ol = Qr[22] + Qr[182]
      , Sl = Qr[3] + Qr[65] + Qr[90] + Qr[190] + Qr[293]
      , Il = Qr[400] + Qr[65] + Qr[90] + Qr[190] + Qr[173]
      , Al = Qr[143] + Qr[487] + Qr[48] + Qr[488]
      , Pl = Qr[22] + Qr[489] + Qr[226]
      , jl = Qr[49] + Qr[65] + Qr[90] + Qr[190] + Qr[173]
      , Ll = Qr[72] + Qr[57] + Qr[490]
      , Cl = Qr[399] + Qr[1] + Qr[99]
      , Rl = Qr[399] + Qr[28] + Qr[171] + Qr[1] + Qr[99]
      , Dl = Qr[491] + Qr[42] + Qr[43]
      , Nl = Qr[492] + Qr[34] + Qr[493]
      , $l = Qr[492] + Qr[28] + Qr[171] + Qr[34] + Qr[493]
      , Bl = Qr[494] + Qr[124] + Qr[304]
      , Fl = Qr[24] + Qr[160] + Qr[70]
      , Gl = Qr[425]
      , zl = Qr[495]
      , Yl = Qr[22] + Qr[496]
      , Hl = Qr[34] + Qr[175] + Qr[70]
      , ql = Qr[497] + Qr[48] + Qr[82]
      , Ul = Qr[201] + Qr[112] + Qr[122]
      , Wl = Qr[116] + Qr[112] + Qr[122]
      , Vl = Qr[498] + Qr[22] + Qr[382]
      , Xl = Qr[499]
      , Zl = Qr[500]
      , Kl = Qr[501] + Qr[42] + Qr[43]
      , Jl = Qr[258]
      , Ql = Qr[502]
      , tv = Qr[503]
      , iv = Qr[504]
      , nv = Qr[505]
      , ev = Qr[371] + Qr[22] + Qr[381]
      , sv = Qr[371] + Qr[22] + Qr[506]
      , rv = Qr[507] + Qr[22] + Qr[381]
      , hv = Qr[507] + Qr[22] + Qr[506]
      , av = Qr[507] + Qr[22] + Qr[377]
      , ov = Qr[372] + Qr[22] + Qr[381]
      , fv = Qr[372] + Qr[22] + Qr[506]
      , uv = Qr[372] + Qr[22] + Qr[377]
      , cv = Qr[371] + Qr[22] + Qr[377]
      , _v = Qr[508]
      , dv = Qr[509]
      , lv = Qr[239] + Qr[510]
      , vv = Qr[425] + Qr[209] + Qr[510]
      , bv = Qr[425] + Qr[465] + Qr[510]
      , gv = Qr[511] + Qr[60] + Qr[61]
      , yv = Qr[362] + Qr[124] + Qr[304]
      , mv = Qr[362] + Qr[79] + Qr[512]
      , xv = Qr[425] + Qr[362] + Qr[42] + Qr[43] + Qr[510]
      , pv = Qr[425] + Qr[511] + Qr[60] + Qr[61] + Qr[510]
      , Ev = Qr[425] + Qr[31] + Qr[510]
      , wv = Qr[362] + Qr[42] + Qr[43]
      , Tv = Qr[513] + Qr[190] + Qr[293]
      , Mv = Qr[514] + Qr[79] + Qr[116]
      , kv = Qr[514] + Qr[79] + Qr[49]
      , Ov = Qr[514]
      , Sv = Qr[511] + Qr[190] + Qr[293]
      , Iv = Qr[514] + Qr[79] + Qr[13]
      , Av = Qr[515]
      , Pv = Qr[516]
      , jv = Qr[517]
      , Lv = Qr[136]
      , Cv = Qr[49] + Qr[44] + Qr[467]
      , Rv = Qr[518]
      , Dv = Qr[13]
      , Nv = Qr[425] + Qr[216] + Qr[510]
      , $v = Qr[425] + Qr[13] + Qr[510]
      , Bv = Qr[425] + Qr[511] + Qr[190] + Qr[293] + Qr[510]
      , Fv = Qr[519] + Qr[22] + Qr[520]
      , Gv = Qr[116]
      , zv = Qr[519] + Qr[22] + Qr[521]
      , Yv = Qr[519] + Qr[22] + Qr[522]
      , Hv = Qr[519] + Qr[22] + Qr[523] + Qr[22] + Qr[524]
      , qv = Qr[13] + Qr[79] + Qr[512]
      , Uv = Qr[22] + Qr[525] + Qr[355]
      , Wv = Qr[22] + Qr[526]
      , Vv = Qr[30] + Qr[24] + Qr[527] + Qr[1] + Qr[486]
      , Xv = Qr[72] + Qr[1] + Qr[2]
      , Zv = Qr[30] + Qr[1] + Qr[2] + Qr[1] + Qr[528]
      , Kv = Qr[3] + Qr[190] + Qr[173]
      , Jv = Qr[22] + Qr[529] + Qr[356]
      , Qv = Qr[22] + Qr[530]
      , tb = Qr[531]
      , ib = Qr[518] + Qr[1] + Qr[532] + Qr[57] + Qr[533]
      , nb = Qr[22] + Qr[441] + Qr[297] + Qr[442]
      , eb = Qr[441] + Qr[1] + Qr[532] + Qr[57] + Qr[533]
      , sb = Qr[216] + Qr[1] + Qr[532] + Qr[57] + Qr[533]
      , rb = Qr[27] + Qr[57] + Qr[192] + Qr[24] + Qr[25] + Qr[1] + Qr[532]
      , hb = Qr[30] + Qr[57] + Qr[192] + Qr[24] + Qr[25] + Qr[1] + Qr[486]
      , ab = Qr[325] + Qr[1] + Qr[532] + Qr[57] + Qr[533]
      , ob = Qr[514] + Qr[190] + Qr[293] + Qr[1] + Qr[532] + Qr[57] + Qr[533]
      , fb = Qr[26] + Qr[337]
      , ub = Qr[534]
      , cb = Qr[3] + Qr[28] + Qr[535]
      , _b = Qr[49] + Qr[1] + Qr[99]
      , db = Qr[22] + Qr[536] + Qr[190] + Qr[293] + Qr[40] + Qr[280]
      , lb = Qr[216] + Qr[537]
      , vb = Qr[22] + Qr[538] + Qr[1] + Qr[532] + Qr[44] + Qr[467]
      , bb = Qr[539]
      , gb = Qr[124] + Qr[202]
      , yb = Qr[72] + Qr[44] + Qr[540] + Qr[1] + Qr[106]
      , mb = Qr[170] + Qr[24] + Qr[541]
      , xb = Qr[170] + Qr[124] + Qr[147] + Qr[42] + Qr[311]
      , pb = Qr[183] + Qr[444] + Qr[542]
      , Eb = Qr[315] + Qr[103] + Qr[543]
      , wb = Qr[544]
      , Tb = Qr[545]
      , Mb = Qr[546]
      , kb = Qr[116] + Qr[28] + Qr[29] + Qr[44] + Qr[467]
      , Ob = Qr[547] + Qr[22] + Qr[548] + Qr[22] + Qr[549]
      , Sb = Qr[550] + Qr[22] + Qr[551]
      , Ib = Qr[552] + Qr[71] + Qr[553] + Qr[71] + Qr[554] + Qr[71] + Qr[555]
      , Ab = Qr[556]
      , Pb = Qr[557] + Qr[558] + Qr[34] + Qr[559]
      , jb = Qr[560] + Qr[71] + Qr[561] + Qr[71] + Qr[562] + Qr[71] + Qr[563] + Qr[71] + Qr[564] + Qr[71] + Qr[565] + Qr[71] + Qr[566] + Qr[71] + Qr[567] + Qr[71]
      , Lb = Qr[71] + Qr[552] + Qr[71] + Qr[553] + Qr[71] + Qr[554] + Qr[71] + Qr[555]
      , Cb = Qr[124] + Qr[568] + Qr[28] + Qr[29]
      , Rb = Qr[569] + Qr[22] + Qr[551] + Qr[22] + Qr[549] + Qr[22] + Qr[570]
      , Db = Qr[22] + Qr[571] + Qr[190] + Qr[572]
      , Nb = Qr[22] + Qr[30] + Qr[118] + Qr[573] + Qr[297] + Qr[558] + Qr[104] + Qr[211]
      , $b = Qr[151] + Qr[574]
      , Bb = Qr[565]
      , Fb = Qr[562]
      , Gb = Qr[151] + Qr[462]
      , zb = Qr[22] + Qr[72] + Qr[575] + Qr[29]
      , Yb = Qr[22] + Qr[546] + Qr[28] + Qr[29]
      , Hb = Qr[22] + Qr[30] + Qr[28] + Qr[29]
      , qb = Qr[30]
      , Ub = Qr[151] + Qr[576] + Qr[24] + Qr[577] + Qr[124] + Qr[463]
      , Wb = Qr[151] + Qr[30] + Qr[44] + Qr[578] + Qr[24] + Qr[577] + Qr[40] + Qr[473]
      , Vb = Qr[151] + Qr[579] + Qr[1] + Qr[580]
      , Xb = Qr[22] + Qr[581] + Qr[28] + Qr[29]
      , Zb = Qr[582]
      , Kb = Qr[583] + Qr[84]
      , Jb = Qr[583]
      , Qb = Qr[584]
      , tg = Qr[22] + Qr[585] + Qr[24] + Qr[586]
      , ig = Qr[151] + Qr[587] + Qr[124] + Qr[568] + Qr[28] + Qr[29]
      , ng = Qr[151] + Qr[588] + Qr[1] + Qr[336] + Qr[1] + Qr[532]
      , eg = Qr[22] + Qr[589]
      , sg = Qr[151] + Qr[581] + Qr[44] + Qr[578] + Qr[24] + Qr[577]
      , rg = Qr[151] + Qr[581] + Qr[297] + Qr[590] + Qr[124] + Qr[568] + Qr[28] + Qr[29]
      , hg = Qr[22] + Qr[223]
      , ag = Qr[591] + Qr[34] + Qr[592]
      , og = Qr[151] + Qr[593]
      , fg = Qr[594]
      , ug = Qr[595]
      , cg = Qr[596]
      , _g = Qr[22] + Qr[597]
      , dg = Qr[22] + Qr[598]
      , lg = Qr[22] + Qr[546] + Qr[124] + Qr[568] + Qr[28] + Qr[29]
      , vg = Qr[561]
      , bg = Qr[563]
      , gg = Qr[22] + Qr[53] + Qr[57] + Qr[599] + Qr[1] + Qr[580]
      , yg = Qr[151] + Qr[600]
      , mg = Qr[564]
      , xg = Qr[560]
      , pg = Qr[601]
      , Eg = Qr[602]
      , wg = Qr[603]
      , Tg = Qr[604]
      , Mg = Qr[605] + Qr[127]
      , kg = Qr[605] + Qr[132]
      , Og = Qr[22] + Qr[581] + Qr[57] + Qr[606] + Qr[57] + Qr[607]
      , Sg = Qr[22] + Qr[608]
      , Ig = Qr[151] + Qr[609] + Qr[124] + Qr[463]
      , Ag = Qr[151] + Qr[610]
      , Pg = Qr[611]
      , jg = Qr[600]
      , Lg = Qr[589] + Qr[84]
      , Cg = Qr[589]
      , Rg = Qr[22] + Qr[579] + Qr[44] + Qr[578] + Qr[24] + Qr[577] + Qr[124] + Qr[463]
      , Dg = Qr[598] + Qr[84]
      , Ng = Qr[598]
      , $g = Qr[612] + Qr[84]
      , Bg = Qr[612]
      , Fg = Qr[22] + Qr[613] + Qr[57] + Qr[606] + Qr[190] + Qr[470]
      , Gg = Qr[608] + Qr[84]
      , zg = Qr[608]
      , Yg = Qr[597] + Qr[84]
      , Hg = Qr[597]
      , qg = Qr[22] + Qr[614] + Qr[34] + Qr[615]
      , Ug = Qr[3] + Qr[57] + Qr[192]
      , Wg = Qr[172] + Qr[24] + Qr[616]
      , Vg = Qr[3] + Qr[28] + Qr[171] + Qr[65] + Qr[90] + Qr[297] + Qr[558] + Qr[28] + Qr[29]
      , Xg = Qr[3] + Qr[617] + Qr[90] + Qr[297] + Qr[558] + Qr[28] + Qr[29]
      , Zg = Qr[22] + Qr[504] + Qr[238] + Qr[57] + Qr[192]
      , Kg = Qr[22] + Qr[618] + Qr[84] + Qr[44] + Qr[619]
      , Jg = Qr[30] + Qr[28] + Qr[171] + Qr[112] + Qr[620]
      , Qg = Qr[30] + Qr[1] + Qr[528]
      , ty = Qr[22] + Qr[621] + Qr[622]
      , iy = Qr[22] + Qr[623] + Qr[190] + Qr[624]
      , ny = Qr[22] + Qr[625] + Qr[190] + Qr[626] + Qr[44] + Qr[619]
      , ey = Qr[151] + Qr[30] + Qr[28] + Qr[29]
      , sy = Qr[151] + Qr[546] + Qr[28] + Qr[29]
      , ry = Qr[22] + Qr[623] + Qr[190] + Qr[626]
      , hy = Qr[22] + Qr[581] + Qr[132]
      , ay = Qr[627]
      , oy = Qr[628] + Qr[127]
      , fy = Qr[628] + Qr[132]
      , uy = Qr[629] + Qr[57] + Qr[630] + Qr[127]
      , cy = Qr[22] + Qr[581] + Qr[127]
      , _y = Qr[629] + Qr[57] + Qr[630] + Qr[132]
      , dy = Qr[631] + Qr[1] + Qr[336]
      , ly = Qr[103] + Qr[163] + Qr[103] + Qr[632] + Qr[103] + Qr[633]
      , vy = Qr[103] + Qr[163] + Qr[103] + Qr[632] + Qr[103] + Qr[634]
      , by = Qr[103] + Qr[163] + Qr[103] + Qr[635]
      , gy = Qr[103] + Qr[163] + Qr[103] + Qr[636]
      , yy = Qr[103] + Qr[290] + Qr[103] + Qr[632] + Qr[103] + Qr[633]
      , my = Qr[103] + Qr[290] + Qr[103] + Qr[632] + Qr[103] + Qr[634]
      , xy = Qr[103] + Qr[290] + Qr[103] + Qr[635]
      , py = Qr[103] + Qr[290] + Qr[103] + Qr[636]
      , Ey = Qr[637]
      , wy = Qr[227]
      , Ty = Qr[638] + Qr[70] + Qr[216] + Qr[108] + Qr[240] + Qr[444] + Qr[639] + Qr[109] + Qr[640] + Qr[641] + Qr[71] + Qr[618] + Qr[642] + Qr[643] + Qr[226] + Qr[644] + Qr[645] + Qr[646] + Qr[647] + Qr[648] + Qr[649] + Qr[650] + Qr[15] + Qr[357] + Qr[444] + Qr[238] + Qr[647] + Qr[651] + Qr[505] + Qr[84] + Qr[652] + Qr[226] + Qr[173] + Qr[84] + Qr[40] + Qr[90] + Qr[653] + Qr[238] + Qr[618] + Qr[654] + Qr[505] + Qr[655] + Qr[203] + Qr[656] + Qr[258] + Qr[657] + Qr[355] + Qr[658] + Qr[659] + Qr[660] + Qr[42] + Qr[661] + Qr[444] + Qr[24] + Qr[662] + Qr[24] + Qr[643] + Qr[297] + Qr[663] + Qr[664] + Qr[15] + Qr[665] + Qr[90] + Qr[666] + Qr[203] + Qr[444] + Qr[667] + Qr[668] + Qr[669] + Qr[670] + Qr[660] + Qr[38] + Qr[671] + Qr[277] + Qr[649] + Qr[127] + Qr[354] + Qr[672] + Qr[673] + Qr[674] + Qr[504] + Qr[675] + Qr[643] + Qr[213] + Qr[1] + Qr[676] + Qr[677] + Qr[258] + Qr[38] + Qr[213] + Qr[90] + Qr[38] + Qr[354] + Qr[678] + Qr[139] + Qr[647] + Qr[132] + Qr[643] + Qr[65] + Qr[679] + Qr[680] + Qr[681] + Qr[682] + Qr[683] + Qr[684] + Qr[649] + Qr[685] + Qr[649] + Qr[686] + Qr[357] + Qr[647] + Qr[444] + Qr[354] + Qr[687] + Qr[688] + Qr[689] + Qr[690] + Qr[355] + Qr[691] + Qr[692] + Qr[357] + Qr[48] + Qr[357] + Qr[71] + Qr[637]
      , My = Qr[693] + Qr[14] + Qr[477]
      , ky = Qr[22] + Qr[694]
      , Oy = Qr[22] + Qr[37] + Qr[695]
      , Sy = Qr[22] + Qr[30] + Qr[34] + Qr[696]
      , Iy = Qr[22] + Qr[258] + Qr[356]
      , Ay = Qr[226] + Qr[79] + Qr[226]
      , Py = Qr[400] + Qr[112] + Qr[122]
      , jy = Qr[112] + Qr[122]
      , Ly = Qr[24] + Qr[160]
      , Cy = Qr[190] + Qr[697]
      , Ry = Qr[28] + Qr[29]
      , Dy = Qr[44] + Qr[45] + Qr[28] + Qr[29]
      , Ny = Qr[438] + Qr[698]
      , $y = Qr[57] + Qr[533]
      , By = Qr[24] + Qr[95]
      , Fy = Qr[57] + Qr[192]
      , Gy = Qr[34] + Qr[699] + Qr[297] + Qr[442]
      , zy = Qr[700] + Qr[467]
      , Yy = Qr[156] + Qr[436]
      , Hy = Qr[156] + Qr[148]
      , qy = Qr[53] + Qr[297] + Qr[701] + Qr[139] + Qr[140]
      , Uy = Qr[57] + Qr[606] + Qr[34] + Qr[702]
      , Wy = Qr[703]
      , Vy = Qr[704]
      , Xy = Qr[705]
      , Zy = Qr[706]
      , Ky = Qr[271] + Qr[79] + Qr[451]
      , Jy = Qr[271]
      , Qy = Qr[707]
      , tm = Qr[708]
      , im = Qr[708] + Qr[79] + Qr[438]
      , nm = Qr[708] + Qr[79] + Qr[60]
      , em = Qr[709]
      , sm = Qr[709] + Qr[79] + Qr[438]
      , rm = Qr[709] + Qr[79] + Qr[60]
      , hm = Qr[709] + Qr[79] + Qr[438] + Qr[79] + Qr[60]
      , am = Qr[709] + Qr[79] + Qr[60] + Qr[79] + Qr[438]
      , om = Qr[710] + Qr[79] + Qr[302]
      , fm = Qr[710] + Qr[79] + Qr[133]
      , um = Qr[710] + Qr[79] + Qr[87]
      , cm = Qr[710] + Qr[79] + Qr[88]
      , _m = Qr[711]
      , dm = Qr[712]
      , lm = Qr[713]
      , vm = Qr[714]
      , bm = Qr[715]
      , gm = Qr[716]
      , ym = Qr[717]
      , mm = Qr[718]
      , xm = Qr[719]
      , pm = Qr[720]
      , Em = Qr[721]
      , wm = Qr[722]
      , Tm = Qr[723]
      , Mm = Qr[724]
      , km = Qr[725]
      , Om = Qr[726]
      , Sm = Qr[727] + Qr[79] + Qr[728]
      , Im = Qr[727] + Qr[79] + Qr[213]
      , Am = Qr[727] + Qr[79] + Qr[84]
      , Pm = Qr[727] + Qr[79] + Qr[319]
      , jm = Qr[727] + Qr[79] + Qr[354]
      , Lm = Qr[727] + Qr[79] + Qr[355]
      , Cm = Qr[727] + Qr[79] + Qr[356]
      , Rm = Qr[727] + Qr[79] + Qr[259]
      , Dm = Qr[727] + Qr[79] + Qr[357]
      , Nm = Qr[727] + Qr[79] + Qr[153]
      , $m = Qr[179] + Qr[22] + Qr[729] + Qr[22] + Qr[366] + Qr[22] + Qr[730]
      , Bm = Qr[731]
      , Fm = Qr[179] + Qr[22] + Qr[729] + Qr[22] + Qr[366] + Qr[22] + Qr[732]
      , Gm = Qr[194]
      , zm = Qr[179] + Qr[22] + Qr[733] + Qr[22] + Qr[366] + Qr[22] + Qr[388]
      , Ym = Qr[179] + Qr[22] + Qr[733] + Qr[22] + Qr[366] + Qr[22] + Qr[732]
      , Hm = Qr[179] + Qr[22] + Qr[733] + Qr[22] + Qr[366] + Qr[22] + Qr[734]
      , qm = Qr[735]
      , Um = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[366] + Qr[22] + Qr[736]
      , Wm = Qr[339]
      , Vm = Qr[737]
      , Xm = Qr[450] + Qr[22] + Qr[366] + Qr[22] + Qr[738]
      , Zm = Qr[450] + Qr[22] + Qr[739]
      , Km = Qr[450] + Qr[22] + Qr[738] + Qr[22] + Qr[740]
      , Jm = Qr[450] + Qr[22] + Qr[250]
      , Qm = Qr[739] + Qr[22] + Qr[741]
      , tx = Qr[742] + Qr[22] + Qr[233]
      , ix = Qr[232] + Qr[22] + Qr[498] + Qr[22] + Qr[181]
      , nx = Qr[170] + Qr[1] + Qr[321]
      , ex = Qr[264]
      , sx = Qr[743] + Qr[1] + Qr[744] + Qr[124] + Qr[168]
      , rx = Qr[745] + Qr[1] + Qr[744] + Qr[124] + Qr[168]
      , hx = Qr[26] + Qr[215] + Qr[24] + Qr[160] + Qr[213]
      , ax = Qr[26] + Qr[215] + Qr[24] + Qr[160] + Qr[84]
      , ox = Qr[746] + Qr[1] + Qr[747]
      , fx = Qr[232] + Qr[22] + Qr[748]
      , ux = Qr[498] + Qr[22] + Qr[749] + Qr[22] + Qr[750]
      , cx = Qr[22] + Qr[751]
      , _x = Qr[325] + Qr[42] + Qr[311]
      , dx = Qr[190] + Qr[191] + Qr[48] + Qr[156] + Qr[48] + Qr[82] + Qr[241]
      , lx = Qr[22] + Qr[752]
      , vx = Qr[726] + Qr[14] + Qr[753]
      , bx = Qr[38] + Qr[754]
      , gx = Qr[755]
      , yx = Qr[22] + Qr[301]
      , mx = Qr[22] + Qr[91]
      , xx = Qr[22] + Qr[158]
      , px = Qr[707] + Qr[1] + Qr[747]
      , Ex = Qr[707] + Qr[65] + Qr[756]
      , wx = Qr[707] + Qr[14] + Qr[130] + Qr[127]
      , Tx = Qr[707] + Qr[14] + Qr[130] + Qr[132]
      , Mx = Qr[232] + Qr[22] + Qr[757]
      , kx = Qr[746] + Qr[1] + Qr[747] + Qr[65] + Qr[758] + Qr[297] + Qr[311]
      , Ox = Qr[759]
      , Sx = Qr[22] + Qr[447] + Qr[1] + Qr[760]
      , Ix = Qr[761] + Qr[34] + Qr[592]
      , Ax = Qr[240]
      , Px = Qr[156]
      , jx = Qr[340] + Qr[190] + Qr[191]
      , Lx = Qr[0] + Qr[190] + Qr[191]
      , Cx = Qr[3] + Qr[38] + Qr[762] + Qr[190] + Qr[763]
      , Rx = Qr[764]
      , Dx = Qr[765]
      , Nx = Qr[766] + Qr[22] + Qr[366] + Qr[22] + Qr[767]
      , $x = Qr[766] + Qr[22] + Qr[366] + Qr[22] + Qr[252]
      , Bx = Qr[170] + Qr[44] + Qr[768] + Qr[277] + Qr[278]
      , Fx = Qr[769]
      , Gx = Qr[116] + Qr[1] + Qr[747] + Qr[34] + Qr[302]
      , zx = Qr[252] + Qr[22] + Qr[766] + Qr[22] + Qr[374]
      , Yx = Qr[252] + Qr[22] + Qr[766] + Qr[22] + Qr[376]
      , Hx = Qr[767] + Qr[22] + Qr[766]
      , qx = Qr[770] + Qr[22] + Qr[252] + Qr[22] + Qr[766]
      , Ux = Qr[770] + Qr[22] + Qr[252] + Qr[22] + Qr[766] + Qr[22] + Qr[374]
      , Wx = Qr[770] + Qr[22] + Qr[767] + Qr[22] + Qr[766]
      , Vx = Qr[676]
      , Xx = Qr[771]
      , Zx = Qr[673]
      , Kx = Qr[772] + Qr[22] + Qr[179] + Qr[22] + Qr[393]
      , Jx = Qr[772] + Qr[22] + Qr[773] + Qr[22] + Qr[393]
      , Qx = Qr[772] + Qr[22] + Qr[736] + Qr[22] + Qr[393]
      , tp = Qr[772] + Qr[22] + Qr[774] + Qr[22] + Qr[393]
      , ip = Qr[53] + Qr[42] + Qr[775]
      , np = Qr[24] + Qr[207] + Qr[34] + Qr[776]
      , ep = Qr[72] + Qr[148]
      , sp = Qr[441] + Qr[1] + Qr[747]
      , rp = Qr[441] + Qr[34] + Qr[777] + Qr[65] + Qr[756]
      , hp = Qr[441] + Qr[34] + Qr[777] + Qr[14] + Qr[130] + Qr[127]
      , ap = Qr[441] + Qr[34] + Qr[777] + Qr[14] + Qr[130] + Qr[132]
      , op = Qr[450] + Qr[22] + Qr[366] + Qr[22] + Qr[739]
      , fp = Qr[778]
      , up = Qr[441] + Qr[65] + Qr[779]
      , cp = Qr[206] + Qr[1] + Qr[780]
      , _p = Qr[778] + Qr[34] + Qr[225]
      , dp = Qr[69] + Qr[70] + Qr[226] + Qr[71] + Qr[226] + Qr[71] + Qr[226] + Qr[71] + Qr[226] + Qr[74]
      , lp = Qr[188] + Qr[1] + Qr[747]
      , vp = Qr[188] + Qr[277] + Qr[278]
      , bp = Qr[206] + Qr[40] + Qr[781] + Qr[1] + Qr[747]
      , gp = Qr[206] + Qr[57] + Qr[288] + Qr[433] + Qr[434]
      , yp = Qr[22] + Qr[782] + Qr[34] + Qr[175]
      , mp = Qr[22] + Qr[783] + Qr[24] + Qr[784] + Qr[118] + Qr[119]
      , xp = Qr[22] + Qr[783] + Qr[24] + Qr[784]
      , pp = Qr[785]
      , Ep = Qr[786]
      , wp = Qr[787] + Qr[79] + Qr[788]
      , Tp = Qr[789] + Qr[79] + Qr[788]
      , Mp = Qr[790]
      , kp = Qr[605]
      , Op = Qr[791]
      , Sp = Qr[792]
      , Ip = Qr[735] + Qr[44] + Qr[793]
      , Ap = Qr[75] + Qr[213] + Qr[1] + Qr[356] + Qr[65] + Qr[238] + Qr[57]
      , Pp = Qr[75] + Qr[794]
      , jp = Qr[75] + Qr[795] + Qr[28] + Qr[357] + Qr[65]
      , Lp = Qr[75] + Qr[796] + Qr[65] + Qr[797]
      , Cp = Qr[75] + Qr[796] + Qr[38] + Qr[798]
      , Rp = Qr[75] + Qr[799] + Qr[1] + Qr[800]
      , Dp = Qr[75] + Qr[801]
      , Np = Qr[75] + Qr[213] + Qr[57] + Qr[356] + Qr[1] + Qr[238] + Qr[40]
      , $p = Qr[75] + Qr[802] + Qr[65] + Qr[226]
      , Bp = Qr[75] + Qr[803] + Qr[804]
      , Fp = Qr[75] + Qr[213] + Qr[40] + Qr[356] + Qr[805] + Qr[84]
      , Gp = Qr[75] + Qr[796] + Qr[38] + Qr[806]
      , zp = Qr[75] + Qr[807]
      , Yp = Qr[75] + Qr[84] + Qr[660] + Qr[357] + Qr[808]
      , Hp = Qr[75] + Qr[809]
      , qp = Qr[75] + Qr[810] + Qr[57] + Qr[800]
      , Up = Qr[75] + Qr[811]
      , Wp = Qr[75] + Qr[213] + Qr[40] + Qr[812] + Qr[38] + Qr[354]
      , Vp = Qr[75] + Qr[813] + Qr[814] + Qr[84]
      , Xp = Qr[75] + Qr[815] + Qr[816]
      , Zp = Qr[75] + Qr[213] + Qr[28] + Qr[356] + Qr[817] + Qr[226]
      , Kp = Qr[75] + Qr[818]
      , Jp = Qr[75] + Qr[15] + Qr[259] + Qr[15] + Qr[357] + Qr[15] + Qr[357]
      , Qp = Qr[75] + Qr[356] + Qr[38] + Qr[819]
      , tE = Qr[75] + Qr[354] + Qr[40] + Qr[354] + Qr[1] + Qr[354] + Qr[65]
      , iE = Qr[75] + Qr[820]
      , nE = Qr[75] + Qr[821]
      , eE = Qr[75] + Qr[356] + Qr[40] + Qr[356] + Qr[28] + Qr[356] + Qr[40]
      , sE = Qr[75] + Qr[354] + Qr[1] + Qr[822]
      , rE = Qr[75] + Qr[823]
      , hE = Qr[75] + Qr[259] + Qr[57] + Qr[259] + Qr[57] + Qr[259] + Qr[57]
      , aE = Qr[75] + Qr[824]
      , oE = Qr[75] + Qr[825]
      , fE = Qr[75] + Qr[826]
      , uE = Qr[75] + Qr[238] + Qr[28] + Qr[238] + Qr[57] + Qr[238] + Qr[57]
      , cE = Qr[75] + Qr[38] + Qr[259] + Qr[38] + Qr[355] + Qr[38] + Qr[354]
      , _E = Qr[75] + Qr[38] + Qr[238] + Qr[38] + Qr[356] + Qr[38] + Qr[355]
      , dE = Qr[75] + Qr[38] + Qr[259] + Qr[38] + Qr[354] + Qr[38] + Qr[319]
      , lE = Qr[75] + Qr[827]
      , vE = Qr[75] + Qr[28] + Qr[238] + Qr[828]
      , bE = Qr[75] + Qr[238] + Qr[530] + Qr[226] + Qr[771] + Qr[226]
      , gE = Qr[75] + Qr[502] + Qr[238] + Qr[829]
      , yE = Qr[75] + Qr[319] + Qr[660] + Qr[319] + Qr[771] + Qr[830]
      , mE = Qr[75] + Qr[65] + Qr[84] + Qr[831]
      , xE = Qr[75] + Qr[84] + Qr[28] + Qr[357] + Qr[832]
      , pE = Qr[75] + Qr[833]
      , EE = Qr[75] + Qr[505] + Qr[355] + Qr[505] + Qr[355] + Qr[505] + Qr[356]
      , wE = Qr[414] + Qr[103]
      , TE = Qr[294]
      , ME = Qr[22] + Qr[834]
      , kE = Qr[22] + Qr[835]
      , OE = Qr[22] + Qr[836] + Qr[190] + Qr[191]
      , SE = Qr[32] + Qr[65] + Qr[837]
      , IE = Qr[32] + Qr[65] + Qr[838]
      , AE = Qr[32]
      , PE = Qr[92] + Qr[1] + Qr[839] + Qr[1] + Qr[311]
      , jE = Qr[32] + Qr[104] + Qr[840]
      , LE = Qr[190] + Qr[331] + Qr[48] + Qr[841] + Qr[48] + Qr[842] + Qr[79]
      , CE = Qr[843]
      , RE = Qr[42] + Qr[844] + Qr[48] + Qr[771] + Qr[48] + Qr[843] + Qr[48] + Qr[845] + Qr[79]
      , DE = Qr[846] + Qr[40] + Qr[280]
      , NE = Qr[787] + Qr[112] + Qr[847]
      , $E = Qr[848]
      , BE = Qr[849] + Qr[1] + Qr[747]
      , FE = Qr[782] + Qr[38] + Qr[850] + Qr[112] + Qr[167]
      , GE = Qr[851]
      , zE = Qr[479] + Qr[190] + Qr[852]
      , YE = Qr[853]
      , HE = Qr[854] + Qr[438] + Qr[855]
      , qE = Qr[854] + Qr[57] + Qr[192]
      , UE = Qr[856]
      , WE = Qr[857]
      , VE = Qr[858]
      , XE = Qr[859]
      , ZE = Qr[860] + Qr[57] + Qr[192]
      , KE = Qr[861] + Qr[1] + Qr[311]
      , JE = Qr[862]
      , QE = Qr[863]
      , tw = Qr[864]
      , iw = Qr[865]
      , nw = Qr[147] + Qr[124] + Qr[304]
      , ew = Qr[866]
      , sw = Qr[860]
      , rw = Qr[867]
      , hw = Qr[868]
      , aw = Qr[299] + Qr[34] + Qr[175]
      , ow = Qr[869] + Qr[297] + Qr[633] + Qr[1] + Qr[311] + Qr[34] + Qr[175]
      , fw = Qr[870]
      , uw = Qr[147]
      , cw = Qr[871]
      , _w = Qr[104] + Qr[872] + Qr[48] + Qr[873] + Qr[510] + Qr[226] + Qr[89]
      , dw = Qr[566]
      , lw = Qr[848] + Qr[139] + Qr[140]
      , vw = Qr[874] + Qr[1] + Qr[311]
      , bw = Qr[187] + Qr[60] + Qr[875] + Qr[241]
      , gw = Qr[876]
      , yw = Qr[187] + Qr[24] + Qr[877] + Qr[48] + Qr[57] + Qr[878] + Qr[241]
      , mw = Qr[879] + Qr[57] + Qr[878]
      , xw = Qr[880]
      , pw = Qr[881]
      , Ew = Qr[15] + Qr[882] + Qr[505] + Qr[354] + Qr[660] + Qr[883] + Qr[884] + Qr[259] + Qr[771] + Qr[885] + Qr[660] + Qr[886] + Qr[502] + Qr[319] + Qr[887] + Qr[238] + Qr[888] + Qr[889] + Qr[890] + Qr[891] + Qr[892] + Qr[226] + Qr[505] + Qr[355] + Qr[15] + Qr[893] + Qr[771] + Qr[894] + Qr[895] + Qr[896] + Qr[502] + Qr[897] + Qr[898] + Qr[319] + Qr[899] + Qr[226] + Qr[900] + Qr[901] + Qr[505] + Qr[902] + Qr[903] + Qr[904] + Qr[905] + Qr[319] + Qr[660] + Qr[906] + Qr[15] + Qr[907] + Qr[908] + Qr[356] + Qr[505] + Qr[909] + Qr[15] + Qr[910] + Qr[911] + Qr[238] + Qr[912] + Qr[913] + Qr[15] + Qr[238] + Qr[502] + Qr[355] + Qr[173] + Qr[213] + Qr[660] + Qr[354] + Qr[660] + Qr[914] + Qr[505] + Qr[84] + Qr[173] + Qr[896] + Qr[915] + Qr[357] + Qr[173] + Qr[319] + Qr[660] + Qr[71] + Qr[916] + Qr[213] + Qr[771] + Qr[917] + Qr[173] + Qr[918] + Qr[771] + Qr[919] + Qr[15] + Qr[920] + Qr[895] + Qr[921] + Qr[922] + Qr[923] + Qr[924] + Qr[354] + Qr[925] + Qr[926] + Qr[927] + Qr[928] + Qr[771] + Qr[259] + Qr[929] + Qr[319] + Qr[502] + Qr[226] + Qr[930] + Qr[931] + Qr[932] + Qr[933] + Qr[660] + Qr[934] + Qr[935] + Qr[226] + Qr[502] + Qr[936] + Qr[937] + Qr[938] + Qr[916] + Qr[939] + Qr[940] + Qr[941] + Qr[502] + Qr[226] + Qr[942] + Qr[943] + Qr[944] + Qr[945] + Qr[502] + Qr[946] + Qr[947] + Qr[238] + Qr[505] + Qr[948] + Qr[502] + Qr[949] + Qr[950] + Qr[356] + Qr[951] + Qr[952] + Qr[771] + Qr[953] + Qr[660] + Qr[213] + Qr[954] + Qr[955] + Qr[956] + Qr[357] + Qr[502] + Qr[957] + Qr[660] + Qr[958] + Qr[950] + Qr[71] + Qr[357] + Qr[959] + Qr[238] + Qr[15] + Qr[84] + Qr[15] + Qr[960] + Qr[660] + Qr[961] + Qr[905] + Qr[962] + Qr[903] + Qr[213] + Qr[502] + Qr[963] + Qr[660] + Qr[354] + Qr[964] + Qr[965] + Qr[173] + Qr[966] + Qr[967] + Qr[968] + Qr[969] + Qr[970] + Qr[971] + Qr[972] + Qr[505] + Qr[238] + Qr[915] + Qr[830] + Qr[502] + Qr[973] + Qr[15] + Qr[974] + Qr[505] + Qr[355] + Qr[100] + Qr[975] + Qr[660] + Qr[976] + Qr[15] + Qr[977] + Qr[771] + Qr[319] + Qr[502] + Qr[238] + Qr[771] + Qr[978] + Qr[979] + Qr[980] + Qr[771] + Qr[981] + Qr[771] + Qr[982] + Qr[983] + Qr[984] + Qr[985] + Qr[986] + Qr[502] + Qr[987] + Qr[502] + Qr[988] + Qr[505] + Qr[357] + Qr[505] + Qr[989] + Qr[898] + Qr[990] + Qr[502] + Qr[319] + Qr[173] + Qr[991] + Qr[912] + Qr[955] + Qr[15]
      , ww = Qr[187] + Qr[44] + Qr[992] + Qr[48] + Qr[72] + Qr[510]
      , Tw = Qr[430] + Qr[993] + Qr[994] + Qr[430] + Qr[319] + Qr[38] + Qr[430] + Qr[993] + Qr[995] + Qr[79] + Qr[315] + Qr[79] + Qr[865] + Qr[430] + Qr[84] + Qr[1] + Qr[996] + Qr[79] + Qr[315] + Qr[79] + Qr[865] + Qr[430] + Qr[84] + Qr[1] + Qr[997] + Qr[79] + Qr[315] + Qr[79] + Qr[865]
      , Mw = Qr[998]
      , kw = Qr[999]
      , Ow = Qr[1e3]
      , Sw = Qr[174] + Qr[124]
      , Iw = Qr[1001]
      , Aw = Qr[259] + Qr[79]
      , Pw = Qr[956]
      , jw = Qr[300]
      , Lw = Qr[1002]
      , Cw = Qr[1] + Qr[321]
      , Rw = Qr[112] + Qr[1003]
      , Dw = Qr[1] + Qr[1004]
      , Nw = Qr[1005]
      , $w = Qr[1006]
      , Bw = Qr[170]
      , Fw = Qr[1007]
      , Gw = Qr[1008]
      , zw = Qr[1009]
      , Yw = Qr[1010]
      , Hw = Qr[1011]
      , qw = Qr[1012]
      , Uw = Qr[482]
      , Ww = Qr[1013]
      , Vw = Qr[1014]
      , Xw = Qr[414] + Qr[1015]
      , Zw = Qr[48] + Qr[308] + Qr[48] + Qr[1016] + Qr[355]
      , Kw = Qr[1017]
      , Jw = Qr[1018]
      , Qw = Qr[1019]
      , tT = Qr[1020] + Qr[118] + Qr[573]
      , iT = Qr[1021]
      , nT = Qr[1022] + Qr[79] + Qr[896] + Qr[79] + Qr[213]
      , eT = Qr[34] + Qr[93]
      , sT = Qr[1023]
      , rT = Qr[28] + Qr[171]
      , hT = Qr[43]
      , aT = Qr[1024]
      , oT = Qr[1025] + Qr[118] + Qr[573]
      , fT = Qr[57] + Qr[878]
      , uT = Qr[1026]
      , cT = Qr[147] + Qr[84] + Qr[57]
      , _T = Qr[258] + Qr[124] + Qr[147]
      , dT = Qr[1027]
      , lT = Qr[226] + Qr[48] + Qr[226]
      , vT = Qr[414] + Qr[103] + Qr[1] + Qr[321]
      , bT = Qr[414] + Qr[103] + Qr[1] + Qr[321] + Qr[24] + Qr[616]
      , gT = Qr[414] + Qr[103] + Qr[277] + Qr[415]
      , yT = Qr[22] + Qr[1028]
      , mT = Qr[22] + Qr[1029]
      , xT = Qr[22] + Qr[258] + Qr[319] + Qr[1030] + Qr[44] + Qr[45]
      , pT = Qr[22] + Qr[1031]
      , ET = Qr[174] + Qr[24] + Qr[527]
      , wT = Qr[22] + Qr[1032] + Qr[622]
      , TT = Qr[269]
      , MT = Qr[1033]
      , kT = Qr[22] + Qr[536]
      , OT = Qr[1031]
      , ST = Qr[22] + Qr[667] + Qr[259] + Qr[1030] + Qr[695]
      , IT = Qr[22] + Qr[525] + Qr[259]
      , AT = Qr[22] + Qr[1034]
      , PT = Qr[22] + Qr[1035]
      , jT = Qr[236] + Qr[112] + Qr[1036]
      , LT = Qr[1037]
      , CT = Qr[22] + Qr[1038]
      , RT = Qr[151] + Qr[1039]
      , DT = Qr[22] + Qr[1040]
      , NT = Qr[201]
      , $T = Qr[22] + Qr[1041]
      , BT = Qr[673] + Qr[190] + Qr[293]
      , FT = Qr[1042] + Qr[65] + Qr[1043]
      , GT = Qr[746]
      , zT = Qr[22] + Qr[1044]
      , YT = Qr[22] + Qr[536] + Qr[1] + Qr[321] + Qr[34] + Qr[175] + Qr[40] + Qr[280]
      , HT = Qr[22] + Qr[571] + Qr[297] + Qr[1045]
      , qT = Qr[1046] + Qr[297] + Qr[1045]
      , UT = Qr[151] + Qr[1047] + Qr[297] + Qr[1045]
      , WT = Qr[1037] + Qr[70]
      , VT = Qr[3] + Qr[28] + Qr[171] + Qr[65] + Qr[90] + Qr[190] + Qr[173]
      , XT = Qr[22] + Qr[214] + Qr[354]
      , ZT = Qr[1048] + Qr[28] + Qr[171]
      , KT = Qr[22] + Qr[1049]
      , JT = Qr[72] + Qr[44] + Qr[1050]
      , QT = Qr[449] + Qr[190] + Qr[173]
      , tM = Qr[3] + Qr[65] + Qr[90] + Qr[190] + Qr[173]
      , iM = Qr[151] + Qr[1051]
      , nM = Qr[22] + Qr[536] + Qr[65] + Qr[199] + Qr[40] + Qr[280]
      , eM = Qr[308] + Qr[28] + Qr[309] + Qr[112] + Qr[448]
      , sM = Qr[222] + Qr[124] + Qr[168]
      , rM = Qr[22] + Qr[1052] + Qr[1] + Qr[321]
      , hM = Qr[3] + Qr[277] + Qr[1053] + Qr[65] + Qr[199]
      , aM = Qr[22] + Qr[1031] + Qr[1] + Qr[1054]
      , oM = Qr[22] + Qr[1055]
      , fM = Qr[431] + Qr[22] + Qr[1056]
      , uM = Qr[1057] + Qr[79] + Qr[582]
      , cM = Qr[431] + Qr[22] + Qr[1058]
      , _M = Qr[1057] + Qr[79] + Qr[1059]
      , dM = Qr[431] + Qr[22] + Qr[366]
      , lM = Qr[22] + Qr[667] + Qr[259]
      , vM = Qr[22] + Qr[302] + Qr[1] + Qr[321]
      , bM = Qr[22] + Qr[489] + Qr[355]
      , gM = Qr[22] + Qr[355] + Qr[203]
      , yM = Qr[1060]
      , mM = Qr[22] + Qr[1039] + Qr[40] + Qr[1061]
      , xM = Qr[53] + Qr[65] + Qr[328] + Qr[28] + Qr[1062]
      , pM = Qr[22] + Qr[356] + Qr[618]
      , EM = Qr[22] + Qr[1063]
      , wM = Qr[22] + Qr[1031] + Qr[1] + Qr[486]
      , TM = Qr[22] + Qr[1064] + Qr[38] + Qr[1065]
      , MM = Qr[1064] + Qr[38] + Qr[312] + Qr[1] + Qr[1066]
      , kM = Qr[22] + Qr[1067]
      , OM = Qr[269] + Qr[60] + Qr[1068]
      , SM = Qr[22] + Qr[1069]
      , IM = Qr[22] + Qr[259] + Qr[1015] + Qr[1] + Qr[486]
      , AM = Qr[1070] + Qr[79] + Qr[200]
      , PM = Qr[22] + Qr[525] + Qr[238]
      , jM = Qr[151] + Qr[354] + Qr[312]
      , LM = Qr[151] + Qr[1032]
      , CM = Qr[746] + Qr[34] + Qr[592]
      , RM = Qr[72] + Qr[1] + Qr[321]
      , DM = Qr[1071]
      , NM = Qr[269] + Qr[112] + Qr[1072]
      , $M = Qr[449] + Qr[1] + Qr[1073]
      , BM = Qr[1074]
      , FM = Qr[269] + Qr[57] + Qr[192]
      , GM = Qr[22] + Qr[1075]
      , zM = Qr[198] + Qr[28] + Qr[327] + Qr[65] + Qr[328]
      , YM = Qr[22] + Qr[1076]
      , HM = Qr[308] + Qr[28] + Qr[309] + Qr[65] + Qr[90] + Qr[57] + Qr[1077] + Qr[40] + Qr[1078]
      , qM = Qr[151] + Qr[1079]
      , UM = Qr[501]
      , WM = Qr[0] + Qr[28] + Qr[327]
      , VM = Qr[3] + Qr[190] + Qr[293] + Qr[65] + Qr[90] + Qr[190] + Qr[173]
      , XM = Qr[395] + Qr[537]
      , ZM = Qr[143] + Qr[487] + Qr[48] + Qr[1080]
      , KM = Qr[174] + Qr[190] + Qr[293] + Qr[65] + Qr[1081]
      , JM = Qr[1031] + Qr[65] + Qr[199]
      , QM = Qr[22] + Qr[529] + Qr[226] + Qr[297] + Qr[442]
      , tk = Qr[1082]
      , ik = Qr[22] + Qr[1052] + Qr[297]
      , nk = Qr[1083]
      , ek = Qr[22] + Qr[220] + Qr[65] + Qr[199]
      , sk = Qr[26] + Qr[234]
      , rk = Qr[449]
      , hk = Qr[22] + Qr[1084]
      , ak = Qr[363] + Qr[395] + Qr[622]
      , ok = Qr[49] + Qr[395]
      , fk = Qr[414] + Qr[79] + Qr[28] + Qr[171]
      , uk = Qr[1085]
      , ck = Qr[256] + Qr[34] + Qr[1086]
      , _k = Qr[1087] + Qr[277] + Qr[1088]
      , dk = Qr[26] + Qr[92]
      , lk = Qr[1089]
      , vk = Qr[414] + Qr[79] + Qr[28] + Qr[327]
      , bk = Qr[22] + Qr[1090]
      , gk = Qr[1091]
      , yk = Qr[1092] + Qr[28] + Qr[1062]
      , mk = Qr[1093] + Qr[79] + Qr[1094]
      , xk = Qr[1095] + Qr[24] + Qr[207] + Qr[1] + Qr[532]
      , pk = Qr[72]
      , Ek = Qr[26] + Qr[240]
      , wk = Qr[414] + Qr[103] + Qr[494]
      , Tk = Qr[22] + Qr[1096] + Qr[42] + Qr[475]
      , Mk = Qr[0] + Qr[44] + Qr[1097]
      , kk = Qr[1098] + Qr[34] + Qr[1099]
      , Ok = Qr[22] + Qr[1100]
      , Sk = Qr[26] + Qr[1101]
      , Ik = Qr[1101]
      , Ak = Qr[267]
      , Pk = Qr[72] + Qr[40] + Qr[334]
      , jk = Qr[22] + Qr[267]
      , Lk = Qr[414] + Qr[79] + Qr[42] + Qr[311]
      , Ck = Qr[1102] + Qr[79] + Qr[116]
      , Rk = Qr[1102] + Qr[79] + Qr[49]
      , Dk = Qr[275] + Qr[24] + Qr[95]
      , Nk = Qr[1103] + Qr[22] + Qr[1104]
      , $k = Qr[352] + Qr[22] + Qr[393]
      , Bk = Qr[414] + Qr[79] + Qr[34] + Qr[285] + Qr[42] + Qr[311]
      , Fk = Qr[1093]
      , Gk = Qr[1105] + Qr[124] + Qr[168]
      , zk = Qr[49] + Qr[24] + Qr[207] + Qr[34] + Qr[776]
      , Yk = Qr[1106]
      , Hk = Qr[1107]
      , qk = Qr[414] + Qr[79] + Qr[65] + Qr[1108]
      , Uk = Qr[468] + Qr[34] + Qr[411] + Qr[42] + Qr[412]
      , Wk = Qr[1109] + Qr[22] + Qr[366]
      , Vk = Qr[1109] + Qr[22] + Qr[366] + Qr[22] + Qr[342]
      , Xk = Qr[269] + Qr[40] + Qr[280]
      , Zk = Qr[26] + Qr[1110] + Qr[124] + Qr[304]
      , Kk = Qr[1109] + Qr[22] + Qr[1111]
      , Jk = Qr[1110]
      , Qk = Qr[26] + Qr[471] + Qr[34] + Qr[175]
      , tO = Qr[1109] + Qr[22] + Qr[1112] + Qr[22] + Qr[181]
      , iO = Qr[1109] + Qr[22] + Qr[1113]
      , nO = Qr[414] + Qr[79] + Qr[277] + Qr[1088]
      , eO = Qr[471] + Qr[34] + Qr[175]
      , sO = Qr[1110] + Qr[124] + Qr[304]
      , rO = Qr[270]
      , hO = Qr[1110] + Qr[190] + Qr[191]
      , aO = Qr[414] + Qr[79] + Qr[124] + Qr[147]
      , oO = Qr[124] + Qr[147]
      , fO = Qr[75] + Qr[1114]
      , uO = Qr[26] + Qr[275] + Qr[24] + Qr[160]
      , cO = Qr[441] + Qr[124] + Qr[304]
      , _O = Qr[441] + Qr[65] + Qr[1115] + Qr[1] + Qr[747]
      , dO = Qr[1116] + Qr[34] + Qr[699] + Qr[34] + Qr[1086]
      , lO = Qr[26] + Qr[1117]
      , vO = Qr[264] + Qr[132]
      , bO = Qr[450] + Qr[22] + Qr[366] + Qr[22] + Qr[739] + Qr[22] + Qr[342]
      , gO = Qr[271] + Qr[44] + Qr[289] + Qr[57] + Qr[288]
      , yO = Qr[271] + Qr[44] + Qr[289] + Qr[57] + Qr[288] + Qr[14] + Qr[130]
      , mO = Qr[26] + Qr[281] + Qr[1] + Qr[747]
      , xO = Qr[22] + Qr[276] + Qr[277] + Qr[278]
      , pO = Qr[26] + Qr[281] + Qr[277] + Qr[278]
      , EO = Qr[453]
      , wO = Qr[198] + Qr[34] + Qr[175]
      , TO = Qr[30] + Qr[65] + Qr[199] + Qr[1] + Qr[486]
      , MO = Qr[26] + Qr[269] + Qr[44] + Qr[242]
      , kO = Qr[26] + Qr[269] + Qr[60] + Qr[1068]
      , OO = Qr[26] + Qr[1118]
      , SO = Qr[1119]
      , IO = Qr[1098] + Qr[438] + Qr[1120] + Qr[124] + Qr[402]
      , AO = Qr[26] + Qr[269] + Qr[57] + Qr[192]
      , PO = Qr[30] + Qr[57] + Qr[192] + Qr[1] + Qr[486]
      , jO = Qr[22] + Qr[489] + Qr[319]
      , LO = Qr[60] + Qr[1068]
      , CO = Qr[44] + Qr[242]
      , RO = Qr[38] + Qr[263] + Qr[24] + Qr[160]
      , DO = Qr[34] + Qr[175]
      , NO = Qr[65] + Qr[1115] + Qr[277] + Qr[278]
      , $O = Qr[112] + Qr[268]
      , BO = Qr[441] + Qr[79] + Qr[787]
      , FO = Qr[441] + Qr[79] + Qr[271]
      , GO = Qr[450] + Qr[22] + Qr[738] + Qr[22] + Qr[391] + Qr[22] + Qr[127]
      , zO = Qr[450] + Qr[22] + Qr[738] + Qr[22] + Qr[391] + Qr[22] + Qr[132]
      , YO = Qr[450] + Qr[22] + Qr[366]
      , HO = Qr[441] + Qr[79] + Qr[209]
      , qO = Qr[1121] + Qr[22] + Qr[250]
      , UO = Qr[746] + Qr[79] + Qr[787]
      , WO = Qr[1121] + Qr[22] + Qr[250] + Qr[22] + Qr[246] + Qr[22] + Qr[247]
      , VO = Qr[1122]
      , XO = Qr[1117]
      , ZO = Qr[738] + Qr[22] + Qr[740]
      , KO = Qr[707] + Qr[79] + Qr[1123]
      , JO = Qr[738] + Qr[22] + Qr[250]
      , QO = Qr[707] + Qr[79] + Qr[787]
      , tS = Qr[738] + Qr[22] + Qr[391] + Qr[22] + Qr[127]
      , iS = Qr[707] + Qr[79] + Qr[264] + Qr[79] + Qr[89]
      , nS = Qr[738] + Qr[22] + Qr[391] + Qr[22] + Qr[132]
      , eS = Qr[707] + Qr[79] + Qr[264] + Qr[79] + Qr[90]
      , sS = Qr[341] + Qr[22] + Qr[1124]
      , rS = Qr[1125] + Qr[79] + Qr[205]
      , hS = Qr[341] + Qr[22] + Qr[1124] + Qr[22] + Qr[177]
      , aS = Qr[1125] + Qr[79] + Qr[205] + Qr[79] + Qr[107]
      , oS = Qr[341] + Qr[22] + Qr[179] + Qr[22] + Qr[1126] + Qr[22] + Qr[250]
      , fS = Qr[341] + Qr[22] + Qr[179] + Qr[22] + Qr[1127]
      , uS = Qr[1125] + Qr[79] + Qr[206] + Qr[79] + Qr[1128]
      , cS = Qr[341] + Qr[22] + Qr[179] + Qr[22] + Qr[1127] + Qr[22] + Qr[391]
      , _S = Qr[341] + Qr[22] + Qr[1126] + Qr[22] + Qr[250]
      , dS = Qr[1125] + Qr[79] + Qr[188] + Qr[79] + Qr[787]
      , lS = Qr[341] + Qr[22] + Qr[1126] + Qr[22] + Qr[766]
      , vS = Qr[1125] + Qr[79] + Qr[188] + Qr[79] + Qr[1129]
      , bS = Qr[1125] + Qr[79] + Qr[778]
      , gS = Qr[1125] + Qr[79] + Qr[778] + Qr[79] + Qr[107]
      , yS = Qr[1130] + Qr[22] + Qr[379] + Qr[22] + Qr[1131]
      , mS = Qr[262] + Qr[79] + Qr[97] + Qr[79] + Qr[1093]
      , xS = Qr[1132] + Qr[22] + Qr[250]
      , pS = Qr[281] + Qr[79] + Qr[787]
      , ES = Qr[1132] + Qr[22] + Qr[766]
      , wS = Qr[281] + Qr[79] + Qr[1129]
      , TS = Qr[739]
      , MS = Qr[271] + Qr[79] + Qr[91]
      , kS = Qr[739] + Qr[22] + Qr[250]
      , OS = Qr[271] + Qr[79] + Qr[787]
      , SS = Qr[739] + Qr[22] + Qr[179] + Qr[22] + Qr[1127]
      , IS = Qr[271] + Qr[79] + Qr[206] + Qr[79] + Qr[1128]
      , AS = Qr[739] + Qr[22] + Qr[179] + Qr[22] + Qr[1127] + Qr[22] + Qr[391]
      , PS = Qr[271] + Qr[79] + Qr[508]
      , jS = Qr[1111]
      , LS = Qr[179] + Qr[22] + Qr[729]
      , CS = Qr[206] + Qr[79] + Qr[1133]
      , RS = Qr[206] + Qr[79] + Qr[1083]
      , DS = Qr[179] + Qr[22] + Qr[1127] + Qr[22] + Qr[729]
      , NS = Qr[206] + Qr[79] + Qr[1128] + Qr[79] + Qr[1133]
      , $S = Qr[179] + Qr[22] + Qr[1127] + Qr[22] + Qr[733]
      , BS = Qr[206] + Qr[79] + Qr[1128] + Qr[79] + Qr[1083]
      , FS = Qr[232] + Qr[22] + Qr[1132] + Qr[22] + Qr[766]
      , GS = Qr[240] + Qr[79] + Qr[271] + Qr[79] + Qr[91]
      , zS = Qr[232] + Qr[22] + Qr[739] + Qr[22] + Qr[177]
      , YS = Qr[232] + Qr[22] + Qr[739] + Qr[22] + Qr[250]
      , HS = Qr[240] + Qr[79] + Qr[271] + Qr[79] + Qr[107]
      , qS = Qr[232] + Qr[22] + Qr[739] + Qr[22] + Qr[179] + Qr[22] + Qr[1127]
      , US = Qr[232] + Qr[22] + Qr[739] + Qr[22] + Qr[741]
      , WS = Qr[240] + Qr[79] + Qr[508]
      , VS = Qr[232] + Qr[22] + Qr[1111]
      , XS = Qr[240] + Qr[79] + Qr[270]
      , ZS = Qr[232] + Qr[22] + Qr[652] + Qr[22] + Qr[523]
      , KS = Qr[240] + Qr[79] + Qr[673] + Qr[79] + Qr[13]
      , JS = Qr[232] + Qr[22] + Qr[1134]
      , QS = Qr[240] + Qr[79] + Qr[1135]
      , tI = Qr[240] + Qr[79] + Qr[1117]
      , iI = Qr[863] + Qr[79] + Qr[210]
      , nI = Qr[1136] + Qr[22] + Qr[1137]
      , eI = Qr[863] + Qr[79] + Qr[769]
      , sI = Qr[1136] + Qr[22] + Qr[1138]
      , rI = Qr[863] + Qr[79] + Qr[1118]
      , hI = Qr[1136] + Qr[22] + Qr[1139] + Qr[22] + Qr[1137]
      , aI = Qr[863] + Qr[79] + Qr[787]
      , oI = Qr[863] + Qr[79] + Qr[182] + Qr[79] + Qr[1033]
      , fI = Qr[863] + Qr[79] + Qr[182] + Qr[79] + Qr[1140]
      , uI = Qr[1136] + Qr[22] + Qr[176] + Qr[22] + Qr[177]
      , cI = Qr[863] + Qr[79] + Qr[182] + Qr[79] + Qr[107]
      , _I = Qr[1136] + Qr[22] + Qr[1111]
      , dI = Qr[863] + Qr[79] + Qr[270]
      , lI = Qr[1136] + Qr[22] + Qr[742] + Qr[22] + Qr[233]
      , vI = Qr[863] + Qr[79] + Qr[283] + Qr[79] + Qr[91]
      , bI = Qr[1136] + Qr[22] + Qr[742]
      , gI = Qr[863] + Qr[79] + Qr[283]
      , yI = Qr[1136] + Qr[22] + Qr[741]
      , mI = Qr[863] + Qr[79] + Qr[508]
      , xI = Qr[1136] + Qr[22] + Qr[391] + Qr[22] + Qr[127]
      , pI = Qr[863] + Qr[79] + Qr[264] + Qr[79] + Qr[89]
      , EI = Qr[863] + Qr[79] + Qr[264] + Qr[79] + Qr[90]
      , wI = Qr[1136] + Qr[22] + Qr[181]
      , TI = Qr[863] + Qr[79] + Qr[1033]
      , MI = Qr[863] + Qr[79] + Qr[1141] + Qr[79] + Qr[769]
      , kI = Qr[1136] + Qr[22] + Qr[739]
      , OI = Qr[863] + Qr[79] + Qr[271]
      , SI = Qr[1136] + Qr[22] + Qr[739] + Qr[22] + Qr[177]
      , II = Qr[863] + Qr[79] + Qr[271] + Qr[79] + Qr[107]
      , AI = Qr[1136] + Qr[22] + Qr[1132] + Qr[22] + Qr[766]
      , PI = Qr[863] + Qr[79] + Qr[265]
      , jI = Qr[863] + Qr[79] + Qr[707] + Qr[79] + Qr[1123]
      , LI = Qr[1136] + Qr[22] + Qr[738] + Qr[22] + Qr[250]
      , CI = Qr[863] + Qr[79] + Qr[707] + Qr[79] + Qr[787]
      , RI = Qr[1136] + Qr[22] + Qr[738] + Qr[22] + Qr[391] + Qr[22] + Qr[127]
      , DI = Qr[1136] + Qr[22] + Qr[652] + Qr[22] + Qr[523]
      , NI = Qr[863] + Qr[79] + Qr[673] + Qr[79] + Qr[13]
      , $I = Qr[863] + Qr[79] + Qr[30] + Qr[79] + Qr[302]
      , BI = Qr[1109] + Qr[22] + Qr[1132] + Qr[22] + Qr[250]
      , FI = Qr[1109] + Qr[22] + Qr[1124]
      , GI = Qr[1110] + Qr[79] + Qr[205]
      , zI = Qr[1109] + Qr[22] + Qr[1124] + Qr[22] + Qr[177]
      , YI = Qr[1110] + Qr[79] + Qr[205] + Qr[79] + Qr[787]
      , HI = Qr[1109] + Qr[22] + Qr[1124] + Qr[22] + Qr[179] + Qr[22] + Qr[1127]
      , qI = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[1142]
      , UI = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[1137]
      , WI = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[1139] + Qr[22] + Qr[1137]
      , VI = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[250]
      , XI = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[176] + Qr[22] + Qr[178]
      , ZI = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[176] + Qr[22] + Qr[177]
      , KI = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[742] + Qr[22] + Qr[233]
      , JI = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[742]
      , QI = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[741]
      , tA = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[391] + Qr[22] + Qr[127]
      , iA = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[391] + Qr[22] + Qr[132]
      , nA = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[739]
      , eA = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[739] + Qr[22] + Qr[177]
      , sA = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[1132] + Qr[22] + Qr[250]
      , rA = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[1132] + Qr[22] + Qr[766]
      , hA = Qr[369] + Qr[22] + Qr[233]
      , aA = Qr[360] + Qr[79] + Qr[91]
      , oA = Qr[369] + Qr[22] + Qr[250]
      , fA = Qr[360] + Qr[79] + Qr[787]
      , uA = Qr[369] + Qr[22] + Qr[1143]
      , cA = Qr[360] + Qr[79] + Qr[778]
      , _A = Qr[369] + Qr[22] + Qr[1143] + Qr[22] + Qr[177]
      , dA = Qr[360] + Qr[79] + Qr[778] + Qr[79] + Qr[107]
      , lA = Qr[369] + Qr[22] + Qr[179] + Qr[22] + Qr[1127]
      , vA = Qr[360] + Qr[79] + Qr[206] + Qr[79] + Qr[1128]
      , bA = Qr[360] + Qr[79] + Qr[92] + Qr[79] + Qr[264]
      , gA = Qr[360] + Qr[79] + Qr[72] + Qr[79] + Qr[264]
      , yA = Qr[369] + Qr[22] + Qr[1126] + Qr[22] + Qr[250]
      , mA = Qr[360] + Qr[79] + Qr[188] + Qr[79] + Qr[787]
      , xA = Qr[360] + Qr[79] + Qr[1092] + Qr[79] + Qr[209]
      , pA = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1144]
      , EA = Qr[360] + Qr[79] + Qr[1092] + Qr[79] + Qr[1145]
      , wA = Qr[360] + Qr[79] + Qr[1146] + Qr[79] + Qr[1147]
      , TA = Qr[360] + Qr[79] + Qr[710]
      , MA = Qr[369] + Qr[22] + Qr[1148] + Qr[22] + Qr[1149]
      , kA = Qr[360] + Qr[79] + Qr[1150] + Qr[79] + Qr[1151]
      , OA = Qr[360] + Qr[79] + Qr[47] + Qr[79] + Qr[1152]
      , SA = Qr[360] + Qr[79] + Qr[47] + Qr[79] + Qr[31]
      , IA = Qr[369] + Qr[22] + Qr[386]
      , AA = Qr[360] + Qr[79] + Qr[1153]
      , PA = Qr[369] + Qr[22] + Qr[386] + Qr[22] + Qr[741]
      , jA = Qr[360] + Qr[79] + Qr[1153] + Qr[79] + Qr[508]
      , LA = Qr[360] + Qr[79] + Qr[92] + Qr[79] + Qr[1154] + Qr[79] + Qr[360]
      , CA = Qr[360] + Qr[79] + Qr[72] + Qr[79] + Qr[1154] + Qr[79] + Qr[360]
      , RA = Qr[360] + Qr[79] + Qr[92] + Qr[79] + Qr[1155]
      , DA = Qr[369] + Qr[22] + Qr[393] + Qr[22] + Qr[390]
      , NA = Qr[360] + Qr[79] + Qr[72] + Qr[79] + Qr[1155]
      , $A = Qr[727] + Qr[79] + Qr[92]
      , BA = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[181]
      , FA = Qr[727] + Qr[79] + Qr[92] + Qr[79] + Qr[1033]
      , GA = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[391]
      , zA = Qr[727] + Qr[79] + Qr[92] + Qr[79] + Qr[264]
      , YA = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[1124]
      , HA = Qr[727] + Qr[79] + Qr[92] + Qr[79] + Qr[205]
      , qA = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[1124] + Qr[22] + Qr[177]
      , UA = Qr[727] + Qr[79] + Qr[92] + Qr[79] + Qr[778]
      , WA = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[1143] + Qr[22] + Qr[177]
      , VA = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[179] + Qr[22] + Qr[1127]
      , XA = Qr[727] + Qr[79] + Qr[92] + Qr[79] + Qr[206] + Qr[79] + Qr[1128]
      , ZA = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[1126] + Qr[22] + Qr[250]
      , KA = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[179] + Qr[22] + Qr[729]
      , JA = Qr[727] + Qr[79] + Qr[92] + Qr[79] + Qr[206] + Qr[79] + Qr[1133]
      , QA = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[179] + Qr[22] + Qr[733]
      , tP = Qr[727] + Qr[79] + Qr[92] + Qr[79] + Qr[206] + Qr[79] + Qr[1083]
      , iP = Qr[727] + Qr[79] + Qr[72]
      , nP = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[181]
      , eP = Qr[727] + Qr[79] + Qr[72] + Qr[79] + Qr[1033]
      , sP = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[391]
      , rP = Qr[727] + Qr[79] + Qr[72] + Qr[79] + Qr[264]
      , hP = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[1124]
      , aP = Qr[727] + Qr[79] + Qr[72] + Qr[79] + Qr[205]
      , oP = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[1124] + Qr[22] + Qr[177]
      , fP = Qr[727] + Qr[79] + Qr[72] + Qr[79] + Qr[778]
      , uP = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[1143] + Qr[22] + Qr[177]
      , cP = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[179] + Qr[22] + Qr[1127]
      , _P = Qr[727] + Qr[79] + Qr[72] + Qr[79] + Qr[206] + Qr[79] + Qr[1128]
      , dP = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[179] + Qr[22] + Qr[1127] + Qr[22] + Qr[391]
      , lP = Qr[727] + Qr[79] + Qr[72] + Qr[79] + Qr[188] + Qr[79] + Qr[787]
      , vP = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[1126] + Qr[22] + Qr[766]
      , bP = Qr[727] + Qr[79] + Qr[72] + Qr[79] + Qr[206] + Qr[79] + Qr[1133]
      , gP = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[179] + Qr[22] + Qr[733]
      , yP = Qr[727] + Qr[79] + Qr[72] + Qr[79] + Qr[206] + Qr[79] + Qr[1083]
      , mP = Qr[1118]
      , xP = Qr[787]
      , pP = Qr[271] + Qr[1] + Qr[747]
      , EP = Qr[1136] + Qr[22] + Qr[1132] + Qr[22] + Qr[250]
      , wP = Qr[281] + Qr[1] + Qr[747]
      , TP = Qr[273] + Qr[14] + Qr[203] + Qr[124] + Qr[1156]
      , MP = Qr[1136] + Qr[22] + Qr[176] + Qr[22] + Qr[178]
      , kP = Qr[1136] + Qr[22] + Qr[1157] + Qr[22] + Qr[1137]
      , OP = Qr[1141] + Qr[24] + Qr[95]
      , SP = Qr[1136] + Qr[22] + Qr[1142]
      , IP = Qr[283] + Qr[118] + Qr[119]
      , AP = Qr[271] + Qr[112] + Qr[282]
      , PP = Qr[264] + Qr[127]
      , jP = Qr[1136] + Qr[22] + Qr[391] + Qr[22] + Qr[132]
      , LP = Qr[1136] + Qr[22] + Qr[1158]
      , CP = Qr[265]
      , RP = Qr[1136] + Qr[22] + Qr[738] + Qr[22] + Qr[740]
      , DP = Qr[1136] + Qr[22] + Qr[738] + Qr[22] + Qr[391] + Qr[22] + Qr[132]
      , NP = Qr[22] + Qr[84] + Qr[649]
      , $P = Qr[22] + Qr[1159]
      , BP = Qr[1135] + Qr[124] + Qr[304]
      , FP = Qr[341] + Qr[22] + Qr[1143]
      , GP = Qr[341] + Qr[22] + Qr[1143] + Qr[22] + Qr[177]
      , zP = Qr[179] + Qr[22] + Qr[733]
      , YP = Qr[232] + Qr[22] + Qr[739]
      , HP = Qr[232] + Qr[22] + Qr[739] + Qr[22] + Qr[179] + Qr[22] + Qr[1127] + Qr[22] + Qr[391]
      , qP = Qr[232] + Qr[22] + Qr[1122]
      , UP = Qr[1160] + Qr[65] + Qr[1161]
      , WP = Qr[22] + Qr[938]
      , VP = Qr[1125]
      , XP = Qr[1109] + Qr[22] + Qr[1124] + Qr[22] + Qr[179] + Qr[22] + Qr[1127] + Qr[22] + Qr[391]
      , ZP = Qr[22] + Qr[354] + Qr[312]
      , KP = Qr[352] + Qr[22] + Qr[389]
      , JP = Qr[92] + Qr[38] + Qr[1162]
      , QP = Qr[72] + Qr[38] + Qr[1162]
      , tj = Qr[206] + Qr[57] + Qr[288] + Qr[1] + Qr[780]
      , ij = Qr[369] + Qr[22] + Qr[393] + Qr[22] + Qr[1163] + Qr[22] + Qr[369]
      , nj = Qr[72] + Qr[38] + Qr[312] + Qr[28] + Qr[327]
      , ej = Qr[92] + Qr[38] + Qr[1162] + Qr[34] + Qr[175]
      , sj = Qr[92] + Qr[38] + Qr[1162] + Qr[14] + Qr[130]
      , rj = Qr[92] + Qr[38] + Qr[1162] + Qr[34] + Qr[204]
      , hj = Qr[92] + Qr[38] + Qr[1162] + Qr[34] + Qr[204] + Qr[34] + Qr[225]
      , aj = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[1143]
      , oj = Qr[92] + Qr[38] + Qr[1162] + Qr[14] + Qr[1164]
      , fj = Qr[92] + Qr[38] + Qr[1162] + Qr[40] + Qr[781] + Qr[1] + Qr[747]
      , uj = Qr[92] + Qr[38] + Qr[1162] + Qr[44] + Qr[289] + Qr[57] + Qr[288]
      , cj = Qr[92] + Qr[38] + Qr[1162] + Qr[44] + Qr[289] + Qr[433] + Qr[434]
      , _j = Qr[92] + Qr[38] + Qr[1162] + Qr[44] + Qr[289] + Qr[1] + Qr[780]
      , dj = Qr[72] + Qr[38] + Qr[1162] + Qr[34] + Qr[175]
      , lj = Qr[72] + Qr[38] + Qr[1162] + Qr[14] + Qr[130]
      , vj = Qr[72] + Qr[38] + Qr[1162] + Qr[34] + Qr[204]
      , bj = Qr[72] + Qr[38] + Qr[1162] + Qr[34] + Qr[204] + Qr[34] + Qr[225]
      , gj = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[1143]
      , yj = Qr[72] + Qr[38] + Qr[1162] + Qr[14] + Qr[1164]
      , mj = Qr[72] + Qr[38] + Qr[1162] + Qr[14] + Qr[1164] + Qr[34] + Qr[225]
      , xj = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[1126] + Qr[22] + Qr[250]
      , pj = Qr[72] + Qr[38] + Qr[1162] + Qr[40] + Qr[781] + Qr[1] + Qr[747]
      , Ej = Qr[72] + Qr[38] + Qr[1162] + Qr[40] + Qr[781] + Qr[277] + Qr[278]
      , wj = Qr[72] + Qr[38] + Qr[1162] + Qr[44] + Qr[289] + Qr[57] + Qr[288]
      , Tj = Qr[72] + Qr[38] + Qr[1162] + Qr[44] + Qr[289] + Qr[433] + Qr[434]
      , Mj = Qr[352] + Qr[22] + Qr[393] + Qr[22] + Qr[179] + Qr[22] + Qr[729]
      , kj = Qr[72] + Qr[38] + Qr[1162] + Qr[44] + Qr[289] + Qr[1] + Qr[780]
      , Oj = Qr[1092] + Qr[44] + Qr[1165]
      , Sj = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[176] + Qr[22] + Qr[181]
      , Ij = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1136] + Qr[22] + Qr[1158]
      , Aj = Qr[269] + Qr[34] + Qr[285]
      , Pj = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[1126] + Qr[22] + Qr[766]
      , jj = Qr[352] + Qr[22] + Qr[389] + Qr[22] + Qr[179] + Qr[22] + Qr[1127] + Qr[22] + Qr[391]
      , Lj = Qr[22] + Qr[525] + Qr[354]
      , Cj = Qr[269] + Qr[34] + Qr[175]
      , Rj = Qr[26] + Qr[269] + Qr[1] + Qr[99]
      , Dj = Qr[49] + Qr[65] + Qr[1166]
      , Nj = Qr[30] + Qr[65] + Qr[1166] + Qr[24] + Qr[25] + Qr[1] + Qr[532]
      , $j = Qr[116] + Qr[1] + Qr[99]
      , Bj = Qr[440] + Qr[44] + Qr[1165]
      , Fj = Qr[440] + Qr[65] + Qr[1166] + Qr[24] + Qr[78]
      , Gj = Qr[363] + Qr[24] + Qr[78]
      , zj = Qr[116] + Qr[65] + Qr[1166]
      , Yj = Qr[198] + Qr[1] + Qr[2]
      , Hj = Qr[26] + Qr[441] + Qr[65] + Qr[779]
      , qj = Qr[26] + Qr[441] + Qr[34] + Qr[777] + Qr[14] + Qr[130] + Qr[127]
      , Uj = Qr[26] + Qr[707] + Qr[14] + Qr[130] + Qr[132]
      , Wj = Qr[26] + Qr[441] + Qr[34] + Qr[777] + Qr[14] + Qr[130] + Qr[132]
      , Vj = Qr[26] + Qr[707] + Qr[65] + Qr[756]
      , Xj = Qr[26] + Qr[441] + Qr[34] + Qr[777] + Qr[65] + Qr[756]
      , Zj = Qr[395] + Qr[22] + Qr[1167] + Qr[22] + Qr[1168]
      , Kj = Qr[26] + Qr[269] + Qr[65] + Qr[199]
      , Jj = Qr[22] + Qr[1169]
      , Qj = Qr[26] + Qr[746] + Qr[1] + Qr[747]
      , tL = Qr[26] + Qr[746] + Qr[1] + Qr[747] + Qr[65] + Qr[758] + Qr[297] + Qr[311]
      , iL = Qr[26] + Qr[707] + Qr[1] + Qr[747]
      , nL = Qr[26] + Qr[707] + Qr[14] + Qr[130] + Qr[127]
      , eL = Qr[1170] + Qr[1] + Qr[486]
      , sL = Qr[401] + Qr[124] + Qr[402] + Qr[1] + Qr[2]
      , rL = Qr[1170]
      , hL = Qr[783]
      , aL = Qr[22] + Qr[1171]
      , oL = Qr[75] + Qr[1172]
      , fL = Qr[26] + Qr[1033]
      , uL = Qr[26] + Qr[269] + Qr[34] + Qr[592]
      , cL = Qr[22] + Qr[783] + Qr[65] + Qr[199]
      , _L = Qr[26] + Qr[269] + Qr[40] + Qr[781] + Qr[277] + Qr[278]
      , dL = Qr[1107] + Qr[277] + Qr[278]
      , lL = Qr[26] + Qr[1135] + Qr[124] + Qr[304]
      , vL = Qr[26] + Qr[206] + Qr[118] + Qr[119]
      , bL = Qr[26] + Qr[188] + Qr[1] + Qr[747]
      , gL = Qr[26] + Qr[188] + Qr[277] + Qr[278]
      , yL = Qr[34] + Qr[592]
      , mL = Qr[40] + Qr[781] + Qr[277] + Qr[278]
      , xL = Qr[1136] + Qr[22] + Qr[250]
      , pL = Qr[26] + Qr[182] + Qr[34] + Qr[175]
      , EL = Qr[26] + Qr[182] + Qr[34] + Qr[225]
      , wL = Qr[174] + Qr[297] + Qr[1173] + Qr[65] + Qr[199]
      , TL = Qr[1157] + Qr[22] + Qr[1137]
      , ML = Qr[26] + Qr[182] + Qr[40] + Qr[452]
      , kL = Qr[40] + Qr[1004]
      , OL = Qr[26] + Qr[269] + Qr[40] + Qr[1004]
      , SL = Qr[26] + Qr[182]
      , IL = Qr[1093] + Qr[65] + Qr[199]
      , AL = Qr[26] + Qr[269] + Qr[124] + Qr[168] + Qr[38] + Qr[1162]
      , PL = Qr[26] + Qr[778]
      , jL = Qr[26] + Qr[269] + Qr[40] + Qr[1174] + Qr[38] + Qr[1162]
      , LL = Qr[198] + Qr[124] + Qr[168] + Qr[38] + Qr[1162]
      , CL = Qr[26] + Qr[92] + Qr[38] + Qr[1162] + Qr[34] + Qr[285]
      , RL = Qr[26] + Qr[92] + Qr[38] + Qr[1162] + Qr[14] + Qr[130]
      , DL = Qr[92] + Qr[38] + Qr[1162] + Qr[44] + Qr[242]
      , NL = Qr[26] + Qr[92] + Qr[38] + Qr[1162]
      , $L = Qr[26] + Qr[92] + Qr[38] + Qr[1162] + Qr[34] + Qr[175]
      , BL = Qr[92] + Qr[38] + Qr[1162] + Qr[34] + Qr[1086]
      , FL = Qr[92] + Qr[38] + Qr[1162] + Qr[40] + Qr[781] + Qr[277] + Qr[278]
      , GL = Qr[277] + Qr[278]
      , zL = Qr[22] + Qr[188] + Qr[277] + Qr[278]
      , YL = Qr[26] + Qr[72] + Qr[38] + Qr[1162] + Qr[34] + Qr[285]
      , HL = Qr[26] + Qr[72] + Qr[38] + Qr[1162] + Qr[14] + Qr[130]
      , qL = Qr[26] + Qr[72] + Qr[38] + Qr[1162]
      , UL = Qr[26] + Qr[72] + Qr[38] + Qr[1162] + Qr[34] + Qr[175]
      , WL = Qr[72] + Qr[38] + Qr[1162] + Qr[34] + Qr[1086]
      , VL = Qr[72] + Qr[38] + Qr[1162] + Qr[44] + Qr[242]
      , XL = Qr[38] + Qr[1162] + Qr[34] + Qr[204]
      , ZL = Qr[38] + Qr[1162] + Qr[34] + Qr[204] + Qr[34] + Qr[225]
      , KL = Qr[38] + Qr[1162] + Qr[34] + Qr[1086]
      , JL = Qr[38] + Qr[1162] + Qr[44] + Qr[289] + Qr[57] + Qr[288]
      , QL = Qr[38] + Qr[1162] + Qr[44] + Qr[289] + Qr[57] + Qr[288] + Qr[14] + Qr[130]
      , tC = Qr[38] + Qr[1162] + Qr[40] + Qr[781] + Qr[1] + Qr[747]
      , iC = Qr[38] + Qr[1162] + Qr[40] + Qr[781] + Qr[277] + Qr[278]
      , nC = Qr[38] + Qr[1162] + Qr[44] + Qr[289] + Qr[1] + Qr[780]
      , eC = Qr[38] + Qr[1162] + Qr[44] + Qr[289] + Qr[433] + Qr[434]
      , sC = Qr[38] + Qr[1162] + Qr[14] + Qr[1164]
      , rC = Qr[38] + Qr[1162] + Qr[14] + Qr[1164] + Qr[34] + Qr[225]
      , hC = Qr[1098] + Qr[60] + Qr[1175]
      , aC = Qr[231] + Qr[38] + Qr[1162]
      , oC = Qr[40] + Qr[1174] + Qr[38] + Qr[1162]
      , fC = Qr[124] + Qr[168] + Qr[38] + Qr[1162]
      , uC = Qr[3] + Qr[44] + Qr[1176] + Qr[65] + Qr[199]
      , cC = Qr[3] + Qr[131] + Qr[130]
      , _C = Qr[53] + Qr[24] + Qr[1177] + Qr[14] + Qr[1178]
      , dC = Qr[3] + Qr[65] + Qr[328] + Qr[44] + Qr[1165]
      , lC = Qr[170] + Qr[65] + Qr[328] + Qr[44] + Qr[1165]
      , vC = Qr[1160] + Qr[65] + Qr[328] + Qr[44] + Qr[1165]
      , bC = Qr[231] + Qr[112] + Qr[1179] + Qr[44] + Qr[289]
      , gC = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[757]
      , yC = Qr[710] + Qr[79]
      , mC = Qr[369] + Qr[22] + Qr[366] + Qr[22] + Qr[1180]
      , xC = Qr[1093] + Qr[34] + Qr[397]
      , pC = Qr[22] + Qr[489] + Qr[357]
      , EC = Qr[1170] + Qr[65] + Qr[199]
      , wC = Qr[210] + Qr[127]
      , TC = Qr[3] + Qr[44] + Qr[1176] + Qr[24] + Qr[1181]
      , MC = Qr[75] + Qr[1182]
      , kC = Qr[75] + Qr[1183] + Qr[1184] + Qr[355]
      , OC = Qr[75] + Qr[1185] + Qr[28] + Qr[226]
      , SC = Qr[460]
      , IC = Qr[1186] + Qr[60] + Qr[1187]
      , AC = Qr[1188]
      , PC = Qr[62] + Qr[28] + Qr[29]
      , jC = Qr[216] + Qr[124] + Qr[1189]
      , LC = Qr[3] + Qr[57] + Qr[1190] + Qr[190] + Qr[470]
      , CC = Qr[1191] + Qr[38] + Qr[1192]
      , RC = Qr[34] + Qr[285] + Qr[42] + Qr[311]
      , DC = Qr[170] + Qr[34] + Qr[285] + Qr[42] + Qr[311]
      , NC = Qr[277] + Qr[1088]
      , $C = Qr[170] + Qr[42] + Qr[311]
      , BC = Qr[22] + Qr[1193]
      , FC = Qr[1194]
      , GC = Qr[117] + Qr[24] + Qr[78]
      , zC = Qr[543]
      , YC = Qr[30] + Qr[28] + Qr[171] + Qr[1] + Qr[1195]
      , HC = Qr[1196] + Qr[22] + Qr[1197]
      , qC = Qr[30] + Qr[190] + Qr[626] + Qr[28] + Qr[29]
      , UC = Qr[1198]
      , WC = Qr[1160] + Qr[44] + Qr[1199] + Qr[65] + Qr[199]
      , VC = Qr[1200]
      , XC = Qr[1201]
      , ZC = Qr[1202]
      , KC = Qr[1203] + Qr[44] + Qr[1204] + Qr[40] + Qr[1174]
      , JC = Qr[1203] + Qr[44] + Qr[1204] + Qr[124] + Qr[168]
      , QC = Qr[116] + Qr[28] + Qr[171]
      , tR = Qr[1205] + Qr[65] + Qr[199]
      , iR = Qr[62] + Qr[38] + Qr[39]
      , nR = Qr[6] + Qr[44] + Qr[1206]
      , eR = Qr[632] + Qr[38] + Qr[312]
      , sR = Qr[632] + Qr[190] + Qr[203]
      , rR = Qr[632] + Qr[14] + Qr[477]
      , hR = Qr[471] + Qr[34] + Qr[592]
      , aR = Qr[22] + Qr[1207]
      , oR = Qr[53] + Qr[190] + Qr[279]
      , fR = Qr[584] + Qr[124] + Qr[168]
      , uR = Qr[227] + Qr[124] + Qr[168] + Qr[1] + Qr[1066]
      , cR = Qr[632] + Qr[124] + Qr[168] + Qr[14] + Qr[1208]
      , _R = Qr[632] + Qr[38] + Qr[39]
      , dR = Qr[1209] + Qr[22] + Qr[1210]
      , lR = Qr[223] + Qr[34] + Qr[696]
      , vR = Qr[22] + Qr[1211] + Qr[38] + Qr[39]
      , bR = Qr[1212]
      , gR = Qr[1213] + Qr[34] + Qr[1214]
      , yR = Qr[1215] + Qr[34] + Qr[1214] + Qr[38] + Qr[762]
      , mR = Qr[174] + Qr[44] + Qr[242]
      , xR = Qr[53] + Qr[297] + Qr[1216]
      , pR = Qr[22] + Qr[1200] + Qr[40] + Qr[1061]
      , ER = Qr[1213] + Qr[28] + Qr[1217]
      , wR = Qr[49] + Qr[1] + Qr[1218] + Qr[190] + Qr[626]
      , TR = Qr[22] + Qr[1219]
      , MR = Qr[1220]
      , kR = Qr[1221] + Qr[1016]
      , OR = Qr[57] + Qr[1222] + Qr[48] + Qr[28] + Qr[1223] + Qr[241]
      , SR = Qr[49] + Qr[34] + Qr[699]
      , IR = Qr[1196] + Qr[22] + Qr[1224]
      , AR = Qr[34] + Qr[285]
      , PR = Qr[44] + Qr[289]
      , jR = Qr[34] + Qr[1086]
      , LR = Qr[170] + Qr[28] + Qr[327]
      , CR = Qr[28] + Qr[327]
      , RR = Qr[360] + Qr[1225] + Qr[1073]
      , DR = Qr[464] + Qr[24] + Qr[78]
      , NR = Qr[628] + Qr[28] + Qr[1226]
      , $R = Qr[1136] + Qr[22] + Qr[176] + Qr[22] + Qr[181]
      , BR = Qr[30] + Qr[44] + Qr[1165] + Qr[28] + Qr[1226]
      , FR = Qr[1227] + Qr[28] + Qr[287] + Qr[44] + Qr[1165]
      , GR = Qr[44] + Qr[1165] + Qr[48] + Qr[1] + Qr[1228] + Qr[142] + Qr[312] + Qr[48] + Qr[28] + Qr[287]
      , zR = Qr[269] + Qr[28] + Qr[171]
      , YR = Qr[464] + Qr[297] + Qr[311]
      , HR = Qr[1229] + Qr[28] + Qr[327]
      , qR = Qr[1230]
      , UR = Qr[1231] + Qr[28] + Qr[535]
      , WR = Qr[1232] + Qr[112] + Qr[1233]
      , VR = Qr[447] + Qr[1] + Qr[1234]
      , XR = Qr[1235]
      , ZR = Qr[22] + Qr[571] + Qr[297] + Qr[311]
      , KR = Qr[362] + Qr[1] + Qr[532] + Qr[57] + Qr[533]
      , JR = Qr[22] + Qr[1031] + Qr[65] + Qr[199]
      , QR = Qr[22] + Qr[1205] + Qr[65] + Qr[199]
      , tD = Qr[1236] + Qr[22] + Qr[1237]
      , iD = Qr[1238] + Qr[112] + Qr[1233]
      , nD = Qr[1109] + Qr[22] + Qr[1112] + Qr[22] + Qr[233]
      , eD = Qr[1109] + Qr[22] + Qr[1112] + Qr[22] + Qr[180]
      , sD = Qr[22] + Qr[1239]
      , rD = Qr[1109] + Qr[22] + Qr[366] + Qr[22] + Qr[1240]
      , hD = Qr[1109] + Qr[22] + Qr[366] + Qr[22] + Qr[714]
      , aD = Qr[1241] + Qr[622]
      , oD = Qr[277] + Qr[1088] + Qr[395]
      , fD = Qr[1242] + Qr[162]
      , uD = Qr[1243] + Qr[48] + Qr[226] + Qr[79] + Qr[84] + Qr[622] + Qr[48] + Qr[1244] + Qr[103] + Qr[633]
      , cD = Qr[873]
      , _D = Qr[79] + Qr[414] + Qr[103] + Qr[277] + Qr[415] + Qr[103] + Qr[42] + Qr[416] + Qr[48] + Qr[418]
      , dD = Qr[1243] + Qr[108] + Qr[213] + Qr[109] + Qr[281] + Qr[103] + Qr[787] + Qr[510] + Qr[69] + Qr[70] + Qr[226] + Qr[425] + Qr[226] + Qr[425] + Qr[226] + Qr[425] + Qr[226] + Qr[79] + Qr[355] + Qr[74]
      , lD = Qr[79] + Qr[414] + Qr[103] + Qr[277] + Qr[415] + Qr[103] + Qr[42] + Qr[416]
      , vD = Qr[1243] + Qr[108] + Qr[226] + Qr[109]
      , bD = Qr[1245]
      , gD = Qr[108] + Qr[1243] + Qr[48] + Qr[319] + Qr[622] + Qr[48] + Qr[1246] + Qr[103] + Qr[745] + Qr[70] + Qr[226] + Qr[79] + Qr[357] + Qr[425] + Qr[226] + Qr[425] + Qr[226] + Qr[79] + Qr[357] + Qr[425] + Qr[213] + Qr[74]
      , yD = Qr[79] + Qr[414] + Qr[103] + Qr[277] + Qr[415] + Qr[103] + Qr[42] + Qr[416] + Qr[108] + Qr[437]
      , mD = Qr[1243] + Qr[108] + Qr[213] + Qr[109]
      , xD = Qr[108] + Qr[1243] + Qr[48] + Qr[226] + Qr[79] + Qr[319] + Qr[622] + Qr[48] + Qr[789]
      , pD = Qr[22] + Qr[133]
      , ED = Qr[22] + Qr[1247]
      , wD = Qr[22] + Qr[302]
      , TD = Qr[79] + Qr[414] + Qr[103] + Qr[277] + Qr[415] + Qr[103] + Qr[34] + Qr[559] + Qr[65] + Qr[1248]
      , MD = Qr[1249] + Qr[510] + Qr[84] + Qr[162] + Qr[1250] + Qr[769] + Qr[510] + Qr[1027] + Qr[109] + Qr[1251] + Qr[103] + Qr[1252] + Qr[510] + Qr[271] + Qr[103] + Qr[1251] + Qr[109] + Qr[1251] + Qr[103] + Qr[707] + Qr[1253] + Qr[229] + Qr[48] + Qr[226] + Qr[162] + Qr[48] + Qr[226] + Qr[162] + Qr[48] + Qr[213] + Qr[162] + Qr[1250] + Qr[281] + Qr[103] + Qr[787] + Qr[510] + Qr[69] + Qr[70] + Qr[1254] + Qr[71] + Qr[1254] + Qr[71] + Qr[1254] + Qr[71] + Qr[226] + Qr[79] + Qr[319] + Qr[1255] + Qr[271] + Qr[103] + Qr[508] + Qr[510] + Qr[354] + Qr[162] + Qr[109] + Qr[1249] + Qr[510] + Qr[213] + Qr[162] + Qr[109]
      , kD = Qr[79] + Qr[414] + Qr[103] + Qr[277] + Qr[415] + Qr[103] + Qr[34] + Qr[559] + Qr[65] + Qr[1248] + Qr[79] + Qr[437] + Qr[1256] + Qr[414] + Qr[103] + Qr[277] + Qr[415] + Qr[103] + Qr[34] + Qr[559] + Qr[65] + Qr[1248] + Qr[108] + Qr[437]
      , OD = Qr[1249] + Qr[103] + Qr[87] + Qr[510] + Qr[357] + Qr[162] + Qr[109]
      , SD = Qr[1249] + Qr[103] + Qr[88] + Qr[510] + Qr[357] + Qr[162] + Qr[109]
      , ID = Qr[79] + Qr[414] + Qr[103] + Qr[277] + Qr[415] + Qr[103] + Qr[34] + Qr[559] + Qr[24] + Qr[424]
      , AD = Qr[108] + Qr[1243] + Qr[48] + Qr[319] + Qr[622] + Qr[48] + Qr[1246] + Qr[103] + Qr[745] + Qr[70] + Qr[226] + Qr[79] + Qr[357] + Qr[425] + Qr[226] + Qr[425] + Qr[226] + Qr[79] + Qr[357] + Qr[425] + Qr[213] + Qr[1255]
      , PD = Qr[22] + Qr[96] + Qr[57] + Qr[606] + Qr[34] + Qr[702]
      , jD = Qr[22] + Qr[94] + Qr[57] + Qr[606] + Qr[34] + Qr[702]
      , LD = Qr[414] + Qr[103] + Qr[277] + Qr[415] + Qr[103] + Qr[34] + Qr[559] + Qr[24] + Qr[424]
      , CD = Qr[22] + Qr[1257]
      , RD = Qr[410] + Qr[190] + Qr[1258]
      , DD = Qr[65] + Qr[1259]
      , ND = Qr[210] + Qr[132]
      , $D = Qr[1155]
      , BD = Qr[1260]
      , FD = Qr[1261] + Qr[22] + Qr[1262]
      , GD = Qr[151] + Qr[294] + Qr[112] + Qr[1072]
      , zD = Qr[30] + Qr[38] + Qr[39] + Qr[28] + Qr[396]
      , YD = Qr[22] + Qr[72] + Qr[1263]
      , HD = Qr[22] + Qr[92] + Qr[1263]
      , qD = Qr[22] + Qr[92] + Qr[1264]
      , UD = Qr[22] + Qr[72] + Qr[1264]
      , WD = Qr[22] + Qr[72] + Qr[34] + Qr[592]
      , VD = Qr[22] + Qr[92] + Qr[34] + Qr[592]
      , XD = Qr[72] + Qr[190] + Qr[1265]
      , ZD = Qr[1266]
      , KD = Qr[761] + Qr[124] + Qr[295]
      , JD = Qr[1261] + Qr[22] + Qr[366]
      , QD = Qr[1267] + Qr[22] + Qr[1268] + Qr[22] + Qr[181] + Qr[22] + Qr[1269]
      , tN = Qr[116] + Qr[57] + Qr[192] + Qr[24] + Qr[25] + Qr[1] + Qr[532] + Qr[44] + Qr[467]
      , iN = Qr[216] + Qr[24] + Qr[25] + Qr[1] + Qr[532] + Qr[57] + Qr[533]
      , nN = Qr[1070]
      , eN = Qr[30] + Qr[57] + Qr[192] + Qr[24] + Qr[25] + Qr[1] + Qr[532]
      , sN = Qr[49] + Qr[57] + Qr[192] + Qr[24] + Qr[25] + Qr[1] + Qr[532] + Qr[44] + Qr[467]
      , rN = Qr[49] + Qr[57] + Qr[1270]
      , hN = Qr[1260] + Qr[44] + Qr[45]
      , aN = Qr[22] + Qr[258] + Qr[319] + Qr[1271] + Qr[190] + Qr[173]
      , oN = Qr[116] + Qr[57] + Qr[1270]
      , fN = Qr[1098] + Qr[57] + Qr[1272]
      , uN = Qr[1273]
      , cN = Qr[57] + Qr[1270] + Qr[190] + Qr[626]
      , _N = Qr[1274]
      , dN = Qr[231] + Qr[24] + Qr[160]
      , lN = Qr[53] + Qr[1] + Qr[1275] + Qr[24] + Qr[207]
      , vN = Qr[107] + Qr[57] + Qr[1272]
      , bN = Qr[468] + Qr[24] + Qr[160]
      , gN = Qr[628]
      , yN = Qr[22] + Qr[1276]
      , mN = Qr[22] + Qr[571] + Qr[24] + Qr[392]
      , xN = Qr[1277] + Qr[24] + Qr[160]
      , pN = Qr[72] + Qr[44] + Qr[1050] + Qr[24] + Qr[160]
      , EN = Qr[628] + Qr[24] + Qr[392]
      , wN = Qr[22] + Qr[1278]
      , TN = Qr[170] + Qr[28] + Qr[327] + Qr[65] + Qr[90] + Qr[190] + Qr[626]
      , MN = Qr[1279]
      , kN = Qr[1280]
      , ON = Qr[3] + Qr[57] + Qr[58] + Qr[34] + Qr[225]
      , SN = Qr[369] + Qr[22] + Qr[179] + Qr[22] + Qr[1127] + Qr[22] + Qr[391]
      , IN = Qr[1] + Qr[1281] + Qr[28] + Qr[327] + Qr[190] + Qr[626]
      , AN = Qr[231] + Qr[112] + Qr[122]
      , PN = Qr[1282]
      , jN = Qr[75] + Qr[213] + Qr[57] + Qr[1283]
      , LN = Qr[75] + Qr[28] + Qr[1284]
      , CN = Qr[170] + Qr[34] + Qr[285] + Qr[65] + Qr[90] + Qr[190] + Qr[626]
      , RN = Qr[1285]
      , DN = Qr[1] + Qr[1281] + Qr[34] + Qr[285] + Qr[190] + Qr[626]
      , NN = Qr[170] + Qr[44] + Qr[289] + Qr[65] + Qr[90] + Qr[190] + Qr[626]
      , $N = Qr[1] + Qr[1281] + Qr[44] + Qr[289] + Qr[190] + Qr[626]
      , BN = Qr[28] + Qr[327] + Qr[395]
      , FN = Qr[1136] + Qr[22] + Qr[1286] + Qr[22] + Qr[1287] + Qr[22] + Qr[1288] + Qr[22] + Qr[1289] + Qr[22] + Qr[1290]
      , GN = Qr[1291]
      , zN = Qr[414] + Qr[103] + Qr[44] + Qr[1165] + Qr[28] + Qr[1292]
      , YN = Qr[1293] + Qr[1294] + Qr[1295] + Qr[28] + Qr[48] + Qr[213] + Qr[162]
      , HN = Qr[355] + Qr[162]
      , qN = Qr[1251] + Qr[34] + Qr[777]
      , UN = Qr[30] + Qr[60] + Qr[61] + Qr[1] + Qr[532]
      , WN = Qr[64] + Qr[28] + Qr[1226]
      , VN = Qr[1296]
      , XN = Qr[1297] + Qr[139] + Qr[140]
      , ZN = Qr[30] + Qr[34] + Qr[175] + Qr[1] + Qr[532]
      , KN = Qr[62] + Qr[28] + Qr[1226]
      , JN = Qr[170] + Qr[1016]
      , QN = Qr[62] + Qr[28] + Qr[1226] + Qr[118] + Qr[1298] + Qr[1] + Qr[580] + Qr[14] + Qr[203] + Qr[118] + Qr[573]
      , t$ = Qr[174] + Qr[124] + Qr[147]
      , i$ = Qr[53] + Qr[28] + Qr[1299]
      , n$ = Qr[44] + Qr[1165] + Qr[28] + Qr[1292]
      , e$ = Qr[863] + Qr[28] + Qr[1292]
      , s$ = Qr[1300]
      , r$ = Qr[1301]
      , h$ = Qr[53] + Qr[28] + Qr[1302]
      , a$ = Qr[0] + Qr[28] + Qr[327] + Qr[65] + Qr[328]
      , o$ = Qr[369] + Qr[22] + Qr[406]
      , f$ = Qr[1303] + Qr[34] + Qr[411] + Qr[42] + Qr[412]
      , u$ = Qr[410] + Qr[57] + Qr[1304] + Qr[1] + Qr[580] + Qr[124] + Qr[168] + Qr[14] + Qr[1208]
      , c$ = Qr[1305] + Qr[34] + Qr[592]
      , _$ = Qr[28] + Qr[1226] + Qr[190] + Qr[626]
      , d$ = Qr[1306] + Qr[139] + Qr[140]
      , l$ = Qr[1307] + Qr[190] + Qr[191]
      , v$ = Qr[461]
      , b$ = Qr[1308]
      , g$ = Qr[1307] + Qr[48] + Qr[240] + Qr[241]
      , y$ = Qr[48] + Qr[89] + Qr[48]
      , m$ = Qr[574] + Qr[28] + Qr[1223]
      , x$ = Qr[468] + Qr[57] + Qr[1309] + Qr[28] + Qr[171]
      , p$ = Qr[53] + Qr[34] + Qr[1310]
      , E$ = Qr[1196] + Qr[22] + Qr[1311] + Qr[22] + Qr[1312]
      , w$ = Qr[227] + Qr[28] + Qr[1223]
      , T$ = Qr[1096] + Qr[118] + Qr[1313]
      , M$ = Qr[1196] + Qr[22] + Qr[1311] + Qr[22] + Qr[1314]
      , k$ = Qr[1315]
      , O$ = Qr[1316] + Qr[22] + Qr[1312]
      , S$ = Qr[1316] + Qr[22] + Qr[1314]
      , I$ = Qr[220] + Qr[124] + Qr[168] + Qr[44] + Qr[1317]
      , A$ = Qr[22] + Qr[1318]
      , P$ = Qr[22] + Qr[1319] + Qr[24] + Qr[1320]
      , j$ = Qr[22] + Qr[1321] + Qr[28] + Qr[1226]
      , L$ = Qr[53] + Qr[28] + Qr[396] + Qr[24] + Qr[160] + Qr[28] + Qr[1302]
      , C$ = Qr[53] + Qr[40] + Qr[1174]
      , R$ = Qr[231] + Qr[44] + Qr[289]
      , D$ = Qr[772] + Qr[22] + Qr[1322]
      , N$ = Qr[75] + Qr[1323]
      , $$ = Qr[174] + Qr[1] + Qr[1324] + Qr[28] + Qr[171]
      , B$ = Qr[772] + Qr[22] + Qr[1311] + Qr[22] + Qr[393]
      , F$ = Qr[53] + Qr[1] + Qr[1325] + Qr[24] + Qr[160]
      , G$ = Qr[53] + Qr[112] + Qr[1326]
      , z$ = Qr[53] + Qr[28] + Qr[396] + Qr[24] + Qr[160]
      , Y$ = Qr[591] + Qr[34] + Qr[776]
      , H$ = Qr[492] + Qr[34] + Qr[776]
      , q$ = Qr[511] + Qr[42] + Qr[147] + Qr[24] + Qr[586]
      , U$ = Qr[1151]
      , W$ = Qr[1327]
      , V$ = Qr[22] + Qr[1328]
      , X$ = Qr[1149] + Qr[22] + Qr[1329]
      , Z$ = Qr[1151] + Qr[190] + Qr[293]
      , K$ = Qr[450] + Qr[22] + Qr[1330] + Qr[22] + Qr[1124] + Qr[22] + Qr[250]
      , J$ = Qr[450] + Qr[22] + Qr[1330] + Qr[22] + Qr[1126] + Qr[22] + Qr[250]
      , Q$ = Qr[1331]
      , tB = Qr[1330] + Qr[22] + Qr[450] + Qr[22] + Qr[247] + Qr[22] + Qr[1332]
      , iB = Qr[1333]
      , nB = Qr[1330] + Qr[22] + Qr[450] + Qr[22] + Qr[247]
      , eB = Qr[22] + Qr[1003]
      , sB = Qr[22] + Qr[1069] + Qr[124] + Qr[463]
      , rB = Qr[1334] + Qr[22] + Qr[1314]
      , hB = Qr[450] + Qr[22] + Qr[1330] + Qr[22] + Qr[1124]
      , aB = Qr[1335] + Qr[34] + Qr[699] + Qr[297] + Qr[311]
      , oB = Qr[53] + Qr[34] + Qr[1336]
      , fB = Qr[1334] + Qr[22] + Qr[1337]
      , uB = Qr[410] + Qr[112] + Qr[1338] + Qr[34] + Qr[699] + Qr[65] + Qr[90] + Qr[112] + Qr[1339] + Qr[65] + Qr[417]
      , cB = Qr[1340]
      , _B = Qr[1341]
      , dB = Qr[22] + Qr[1342]
      , lB = Qr[1343] + Qr[103] + Qr[460]
      , vB = Qr[1344] + Qr[103] + Qr[460]
      , bB = Qr[1345] + Qr[103] + Qr[460]
      , gB = Qr[69] + Qr[70] + Qr[226] + Qr[425] + Qr[1346] + Qr[425] + Qr[226] + Qr[425] + Qr[213] + Qr[74]
      , yB = Qr[22] + Qr[210] + Qr[24] + Qr[160]
      , mB = Qr[75] + Qr[1347] + Qr[226]
      , xB = Qr[22] + Qr[210] + Qr[438] + Qr[1348] + Qr[44] + Qr[1349]
      , pB = Qr[53] + Qr[34] + Qr[1350]
      , EB = Qr[53] + Qr[112] + Qr[1351]
      , wB = Qr[22] + Qr[1352]
      , TB = Qr[22] + Qr[1353]
      , MB = Qr[783] + Qr[65] + Qr[199]
      , kB = Qr[1354]
      , OB = Qr[1355]
      , SB = Qr[112] + Qr[1356] + Qr[190] + Qr[626]
      , IB = Qr[174] + Qr[34] + Qr[699]
      , AB = Qr[157] + Qr[124] + Qr[168] + Qr[124] + Qr[1156]
      , PB = Qr[1357] + Qr[22] + Qr[1358]
      , jB = Qr[1357] + Qr[22] + Qr[550]
      , LB = Qr[1359] + Qr[22] + Qr[1360]
      , CB = Qr[414] + Qr[103] + Qr[124] + Qr[1361]
      , RB = Qr[1362] + Qr[22] + Qr[391] + Qr[22] + Qr[132]
      , DB = Qr[75] + Qr[1363]
      , NB = Qr[213] + Qr[162] + Qr[48] + Qr[1293] + Qr[1294] + Qr[57] + Qr[238] + Qr[57] + Qr[238] + Qr[57] + Qr[238]
      , $B = Qr[84] + Qr[162] + Qr[48] + Qr[354] + Qr[162]
      , BB = Qr[3] + Qr[190] + Qr[1364]
      , FB = Qr[1365]
      , GB = Qr[273]
      , zB = Qr[1366] + Qr[1367] + Qr[1368]
      , YB = Qr[183] + Qr[1] + Qr[1369]
      , HB = Qr[1362] + Qr[22] + Qr[391] + Qr[22] + Qr[127]
      , qB = Qr[22] + Qr[1370]
      , UB = Qr[1020]
      , WB = Qr[3] + Qr[124] + Qr[1361] + Qr[28] + Qr[171]
      , VB = Qr[628] + Qr[124] + Qr[463]
      , XB = Qr[174] + Qr[124] + Qr[1361]
      , ZB = Qr[128] + Qr[127]
      , KB = Qr[1085] + Qr[57] + Qr[599]
      , JB = Qr[1085] + Qr[57] + Qr[1371]
      , QB = Qr[294] + Qr[38] + Qr[1192]
      , tF = Qr[410] + Qr[118] + Qr[1372] + Qr[652] + Qr[1373]
      , iF = Qr[1374]
      , nF = Qr[632] + Qr[65] + Qr[90] + Qr[297] + Qr[558] + Qr[28] + Qr[29]
      , eF = Qr[1070] + Qr[79] + Qr[227] + Qr[79] + Qr[628]
      , sF = Qr[1196] + Qr[22] + Qr[1329]
      , rF = Qr[1070] + Qr[79] + Qr[1375]
      , hF = Qr[1070] + Qr[79] + Qr[227] + Qr[79] + Qr[1003]
      , aF = Qr[1070] + Qr[79] + Qr[1376]
      , oF = Qr[1070] + Qr[79] + Qr[1377]
      , fF = Qr[1149] + Qr[22] + Qr[1311] + Qr[22] + Qr[1312]
      , uF = Qr[1151] + Qr[79] + Qr[227] + Qr[79] + Qr[628]
      , cF = Qr[1151] + Qr[79] + Qr[1375]
      , _F = Qr[1149] + Qr[22] + Qr[1311] + Qr[22] + Qr[1314]
      , dF = Qr[1151] + Qr[79] + Qr[227] + Qr[79] + Qr[1003]
      , lF = Qr[1378] + Qr[22] + Qr[1312]
      , vF = Qr[460] + Qr[79] + Qr[628]
      , bF = Qr[1379]
      , gF = Qr[1378] + Qr[22] + Qr[1314]
      , yF = Qr[460] + Qr[79] + Qr[1003]
      , mF = Qr[1380]
      , xF = Qr[1142] + Qr[22] + Qr[1314]
      , pF = Qr[210] + Qr[79] + Qr[1003]
      , EF = Qr[1211] + Qr[79] + Qr[628]
      , wF = Qr[1211] + Qr[79] + Qr[1003]
      , TF = Qr[1110] + Qr[79] + Qr[1074]
      , MF = Qr[360] + Qr[79] + Qr[1092]
      , kF = Qr[1334]
      , OF = Qr[1334] + Qr[22] + Qr[1312]
      , SF = Qr[457] + Qr[79] + Qr[628]
      , IF = Qr[457] + Qr[79] + Qr[1381]
      , AF = Qr[457] + Qr[79] + Qr[1003]
      , PF = Qr[547] + Qr[22] + Qr[551]
      , jF = Qr[576] + Qr[79] + Qr[563]
      , LF = Qr[22] + Qr[464] + Qr[34] + Qr[702]
      , CF = Qr[22] + Qr[504] + Qr[319] + Qr[1] + Qr[1218] + Qr[190] + Qr[626] + Qr[44] + Qr[467]
      , RF = Qr[22] + Qr[1382] + Qr[1] + Qr[1218] + Qr[190] + Qr[626] + Qr[44] + Qr[467]
      , DF = Qr[468] + Qr[190] + Qr[626] + Qr[297] + Qr[311]
      , NF = Qr[22] + Qr[504] + Qr[259] + Qr[190] + Qr[626]
      , $F = Qr[3] + Qr[190] + Qr[626] + Qr[190] + Qr[1383]
      , BF = Qr[340] + Qr[190] + Qr[624]
      , FF = Qr[1384]
      , GF = Qr[1267] + Qr[22] + Qr[247] + Qr[22] + Qr[757]
      , zF = Qr[1267] + Qr[22] + Qr[247] + Qr[22] + Qr[450]
      , YF = Qr[1385]
      , HF = Qr[1267] + Qr[22] + Qr[247] + Qr[22] + Qr[1386]
      , qF = Qr[1387]
      , UF = Qr[170] + Qr[79] + Qr[1388] + Qr[79] + Qr[360]
      , WF = Qr[1267] + Qr[22] + Qr[247] + Qr[22] + Qr[1389] + Qr[22] + Qr[369]
      , VF = Qr[170] + Qr[79] + Qr[360]
      , XF = Qr[1267] + Qr[22] + Qr[247] + Qr[22] + Qr[1389] + Qr[22] + Qr[341]
      , ZF = Qr[170] + Qr[79] + Qr[1125]
      , KF = Qr[1267] + Qr[22] + Qr[247] + Qr[22] + Qr[1389] + Qr[22] + Qr[179]
      , JF = Qr[170] + Qr[79] + Qr[206]
      , QF = Qr[1267] + Qr[22] + Qr[247] + Qr[22] + Qr[1390]
      , tG = Qr[24] + Qr[1228] + Qr[190] + Qr[626]
      , iG = Qr[297] + Qr[1391] + Qr[190] + Qr[626]
      , nG = Qr[118] + Qr[1372] + Qr[652] + Qr[1373] + Qr[190] + Qr[626]
      , eG = Qr[57] + Qr[1304] + Qr[1] + Qr[580] + Qr[190] + Qr[626]
      , sG = Qr[112] + Qr[1338] + Qr[34] + Qr[699] + Qr[190] + Qr[626]
      , rG = Qr[24] + Qr[586] + Qr[190] + Qr[626]
      , hG = Qr[44] + Qr[1392]
      , aG = Qr[3] + Qr[617] + Qr[199]
      , oG = Qr[1393]
      , fG = Qr[1394]
      , uG = Qr[1395] + Qr[124] + Qr[304]
      , cG = Qr[1396]
      , _G = Qr[494]
      , dG = Qr[97] + Qr[38] + Qr[1397]
      , lG = Qr[3] + Qr[44] + Qr[359] + Qr[112] + Qr[1398]
      , vG = Qr[1186] + Qr[44] + Qr[1399]
      , bG = Qr[1400] + Qr[22] + Qr[372]
      , gG = Qr[1400] + Qr[22] + Qr[507]
      , yG = Qr[1400] + Qr[22] + Qr[377]
      , mG = Qr[1400] + Qr[22] + Qr[381]
      , xG = Qr[1400] + Qr[22] + Qr[506]
      , pG = Qr[1400] + Qr[22] + Qr[371] + Qr[22] + Qr[381]
      , EG = Qr[1400] + Qr[22] + Qr[371] + Qr[22] + Qr[377]
      , wG = Qr[1400] + Qr[22] + Qr[377] + Qr[22] + Qr[371]
      , TG = Qr[1400] + Qr[22] + Qr[377] + Qr[22] + Qr[372]
      , MG = Qr[1400] + Qr[22] + Qr[381] + Qr[22] + Qr[371]
      , kG = Qr[1400] + Qr[22] + Qr[381] + Qr[22] + Qr[372]
      , OG = Qr[1401]
      , SG = Qr[1402] + Qr[79] + Qr[1403]
      , IG = Qr[1401] + Qr[79] + Qr[647]
      , AG = Qr[1401] + Qr[79] + Qr[1404]
      , PG = Qr[1130] + Qr[22] + Qr[366] + Qr[22] + Qr[1405]
      , jG = Qr[1130] + Qr[22] + Qr[366] + Qr[22] + Qr[1405] + Qr[22] + Qr[376]
      , LG = Qr[1130] + Qr[22] + Qr[366] + Qr[22] + Qr[1406] + Qr[22] + Qr[1407]
      , CG = Qr[53] + Qr[438] + Qr[1408] + Qr[57] + Qr[1409]
      , RG = Qr[447] + Qr[34] + Qr[175]
      , DG = Qr[3] + Qr[42] + Qr[311] + Qr[34] + Qr[175]
      , NG = Qr[325] + Qr[1] + Qr[2] + Qr[57] + Qr[1409]
      , $G = Qr[3] + Qr[1410] + Qr[780]
      , BG = Qr[3] + Qr[1411] + Qr[780]
      , FG = Qr[647] + Qr[277] + Qr[780]
      , GG = Qr[1404] + Qr[277] + Qr[780]
      , zG = Qr[262] + Qr[124] + Qr[304]
      , YG = Qr[1412]
      , HG = Qr[1413]
      , qG = Qr[22] + Qr[489] + Qr[84]
      , UG = Qr[22] + Qr[1414]
      , WG = Qr[1098] + Qr[44] + Qr[359]
      , VG = Qr[325] + Qr[65] + Qr[199]
      , XG = Qr[22] + Qr[1415]
      , ZG = Qr[22] + Qr[1416] + Qr[44] + Qr[242]
      , KG = Qr[22] + Qr[660] + Qr[319]
      , JG = Qr[267] + Qr[1417]
      , QG = Qr[267] + Qr[1418]
      , tz = Qr[22] + Qr[1419] + Qr[24] + Qr[527] + Qr[1] + Qr[2] + Qr[57] + Qr[1409]
      , iz = Qr[494] + Qr[132]
      , nz = Qr[494] + Qr[127]
      , ez = Qr[22] + Qr[489] + Qr[259]
      , sz = Qr[22] + Qr[489] + Qr[356]
      , rz = Qr[262] + Qr[57] + Qr[490]
      , hz = Qr[269] + Qr[44] + Qr[359] + Qr[57] + Qr[490]
      , az = Qr[1420]
      , oz = Qr[62]
      , fz = Qr[1305] + Qr[44] + Qr[359] + Qr[57] + Qr[490]
      , uz = Qr[3] + Qr[297] + Qr[1421] + Qr[190] + Qr[1422]
      , cz = Qr[1423]
      , _z = Qr[134] + Qr[34] + Qr[696]
      , dz = Qr[53] + Qr[112] + Qr[1424]
      , lz = Qr[22] + Qr[1425]
      , vz = Qr[1426]
      , bz = Qr[628] + Qr[38] + Qr[1427]
      , gz = Qr[1428]
      , yz = Qr[1429]
      , mz = Qr[237]
      , xz = Qr[1430]
      , pz = Qr[1431] + Qr[22] + Qr[1432] + Qr[22] + Qr[1433]
      , Ez = Qr[741] + Qr[22] + Qr[247] + Qr[22] + Qr[1434]
      , wz = Qr[741] + Qr[22] + Qr[247] + Qr[22] + Qr[1435]
      , Tz = Qr[3] + Qr[277] + Qr[780]
      , Mz = Qr[1436]
      , kz = Qr[398] + Qr[34] + Qr[1437]
      , Oz = Qr[22] + Qr[1438]
      , Sz = Qr[494] + Qr[84]
      , Iz = Qr[369] + Qr[22] + Qr[406] + Qr[22] + Qr[1113]
      , Az = Qr[494] + Qr[213]
      , Pz = Qr[22] + Qr[360] + Qr[65] + Qr[328] + Qr[190] + Qr[279] + Qr[40] + Qr[280]
      , jz = Qr[22] + Qr[536] + Qr[65] + Qr[1439] + Qr[40] + Qr[280]
      , Lz = Qr[22] + Qr[1440]
      , Cz = Qr[1203] + Qr[65] + Qr[1441]
      , Rz = Qr[22] + Qr[1039] + Qr[190] + Qr[203] + Qr[65] + Qr[328]
      , Dz = Qr[1442]
      , Nz = Qr[1443] + Qr[190] + Qr[1444]
      , $z = Qr[1445]
      , Bz = Qr[53] + Qr[190] + Qr[1446]
      , Fz = Qr[1447] + Qr[127]
      , Gz = Qr[1447] + Qr[132]
      , zz = Qr[1447]
      , Yz = Qr[1112] + Qr[22] + Qr[382]
      , Hz = Qr[1448]
      , qz = Qr[1449]
      , Uz = Qr[262] + Qr[297] + Qr[1450]
      , Wz = Qr[1451]
      , Vz = Qr[22] + Qr[1452] + Qr[40] + Qr[1453]
      , Xz = Qr[1423] + Qr[38] + Qr[54]
      , Zz = Qr[1454]
      , Kz = Qr[468] + Qr[28] + Qr[472]
      , Jz = Qr[511] + Qr[44] + Qr[1399]
      , Qz = Qr[22] + Qr[1455]
      , tY = Qr[22] + Qr[1456]
      , iY = Qr[337] + Qr[48] + Qr[82]
      , nY = Qr[308] + Qr[28] + Qr[309] + Qr[65] + Qr[90] + Qr[124] + Qr[1457] + Qr[57] + Qr[1077] + Qr[40] + Qr[1078] + Qr[34] + Qr[1458]
      , eY = Qr[22] + Qr[92]
      , sY = Qr[72] + Qr[1] + Qr[747]
      , rY = Qr[53] + Qr[14] + Qr[1459]
      , hY = Qr[53] + Qr[277] + Qr[1460]
      , aY = Qr[53] + Qr[40] + Qr[1461]
      , oY = Qr[53] + Qr[34] + Qr[1462]
      , fY = Qr[53] + Qr[297] + Qr[1463]
      , uY = Qr[1] + Qr[1464]
      , cY = Qr[277] + Qr[1465]
      , _Y = Qr[277] + Qr[415]
      , dY = Qr[65] + Qr[106] + Qr[395]
      , lY = Qr[42] + Qr[311] + Qr[395]
      , vY = Qr[44] + Qr[1165] + Qr[395]
      , bY = Qr[190] + Qr[191] + Qr[395]
      , gY = Qr[34] + Qr[1466]
      , yY = Qr[24] + Qr[207]
      , mY = Qr[28] + Qr[327] + Qr[65] + Qr[328]
      , xY = Qr[124] + Qr[1467] + Qr[44] + Qr[1392]
      , pY = Qr[414] + Qr[1468] + Qr[48] + Qr[308] + Qr[48] + Qr[1016] + Qr[355]
      , EY = Qr[84] + Qr[79] + Qr[226]
      , wY = Qr[84] + Qr[79] + Qr[259] + Qr[48] + Qr[1117] + Qr[84]
      , TY = Qr[414] + Qr[1468] + Qr[241] + Qr[57] + Qr[1469] + Qr[48] + Qr[1] + Qr[1470] + Qr[48] + Qr[308] + Qr[48] + Qr[1016] + Qr[355] + Qr[444] + Qr[1] + Qr[321]
      , MY = Qr[621] + Qr[444] + Qr[1242] + Qr[444] + Qr[1471]
      , kY = 0;
    if (t[ol]) {
        var OY = navigator[fl]
          , SY = /opera/i[ef](OY)
          , IY = !SY && /msie/i.test(OY)
          , AY = /rv:11.0/i[ef](OY)
          , PY = /MSIE 10./i[ef](OY);
        if (/Edge/i.test(OY),
        AY && (IY = !0),
        /msie\s[6,7,8]/i[ef](OY))
            throw new Error("your browser is not supported");
        var jY = /webkit|khtml/i.test(OY)
          , LY = !jY && /gecko/i[ef](OY)
          , CY = /firefox\//i[ef](OY)
          , RY = /Chrome\//i.test(OY)
          , DY = !RY && /Safari\//i[ef](OY)
          , NY = /Macintosh;/i[ef](OY)
          , $Y = /(iPad|iPhone|iPod)/g.test(OY)
          , BY = /Android/g[ef](OY)
          , FY = /Windows Phone/g[ef](OY)
          , GY = ($Y || BY || FY) && z_ in t
          , zY = OY[ul](/AppleWebKit\/([0-9\.]*)/);
        if (zY && zY[nh] > 1) {
            parseFloat(zY[1])
        }
        BY && parseFloat(OY[ul](/Android\s([0-9\.]*)/)[1])
    }
    t[Oh] || (t[Oh] = t[cl] || t.mozRequestAnimationFrame || t[_l] || t[dl] || function(i) {
        return t[ll](function() {
            i()
        }, 1e3 / 60)
    }
    ),
    t[vl] || (t[vl] = t[bl] || t[gl] || t[yl] || t[ml] || function(i) {
        return t[xl](i)
    }
    );
    var YY = {
        SELECTION_TOLERANCE: GY ? 7 : 4,
        LABEL_COLOR: pl
    };
    K(YY, {
        FONT_STYLE: {
            get: function() {
                return this[El] || (this[El] = wl)
            },
            set: function(t) {
                this[El] != t && (this._fontStyle = t,
                this._fontChanged = !0)
            }
        },
        FONT_SIZE: {
            get: function() {
                return this[Tl] || (this._fontSize = 12)
            },
            set: function(t) {
                this[Tl] != t && (this[Tl] = t,
                this[Ml] = !0)
            }
        },
        FONT_FAMILY: {
            get: function() {
                return this[kl] || (this._fontFamily = "Verdana,helvetica,arial,sans-serif")
            },
            set: function(t) {
                this[kl] != t && (this[kl] = t,
                this[Ml] = !0)
            }
        },
        FONT: {
            get: function() {
                return (this[Ml] || this[Ml] === n) && (this._fontChanged = !1,
                this[Ol] = this.FONT_STYLE + jh + this[po] + yo + this[mo]),
                this[Ol]
            }
        }
    });
    var HY = function(t) {
        this._jg = [],
        this._ky = {},
        t && this.add(t)
    };
    HY[lh] = {
        _jg: null,
        _ky: null,
        get: function(t) {
            return this[Sl](t)
        },
        getById: function(t) {
            return this._ky[t]
        },
        getByIndex: function(t) {
            return this._jg[t]
        },
        forEach: function(t, i, n) {
            return l(this._jg, t, i, n)
        },
        forEachReverse: function(t, i, n) {
            return b(this._jg, t, i, n)
        },
        size: function() {
            return this._jg[nh]
        },
        contains: function(t) {
            return this[Il](t.id)
        },
        containsById: function(t) {
            return this._ky.hasOwnProperty(t)
        },
        setIndex: function(t, i) {
            var n = this._jg[ch](t);
            if (0 > n)
                throw new Error(qa + t.id + Al);
            return n == i ? !1 : (this._jg[rh](n, 1),
            this._jg.splice(i, 0, t),
            !0)
        },
        setIndexAfter: function(t, i) {
            var n = this._jg.indexOf(t);
            if (0 > n)
                throw new Error(qa + t.id + Al);
            return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1),
            this._jg[rh](n, 1),
            this._jg[rh](i, 0, t),
            i)
        },
        setIndexBefore: function(t, i) {
            var n = this._jg[ch](t);
            if (0 > n)
                throw new Error(qa + t.id + Al);
            return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1),
            this._jg.splice(n, 1),
            this._jg[rh](i, 0, t),
            i)
        },
        indexOf: function(t) {
            return this._jg.indexOf(t)
        },
        getIndexById: function(t) {
            var i = this.getById(t);
            return i ? this._jg[ch](i) : -1
        },
        add: function(t, i) {
            return B(t) ? this._f0(t, i) : this._k6(t, i)
        },
        addFirst: function(t) {
            return this.add(t, 0)
        },
        _f0: function(t, i) {
            if (0 == t.length)
                return !1;
            var e = !1
              , s = i >= 0;
            t = t._jg || t;
            for (var r = 0, h = t.length; h > r; r++) {
                var a = t[r];
                null !== a && a !== n && this._k6(a, i, !0) && (e = !0,
                s && i++)
            }
            return e
        },
        _k6: function(t, i) {
            var e = t.id;
            return e === n || this[Il](e) ? !1 : (y(this._jg, t, i),
            this._ky[e] = t,
            t)
        },
        remove: function(t) {
            return B(t) ? this[Pl](t) : t.id ? this._fa(t.id, t) : this[jl](t)
        },
        _ml0: function(t) {
            if (0 == t.length)
                return !1;
            var i = !1;
            t = t._jg || t;
            for (var e = 0, s = t.length; s > e; e++) {
                var r = t[e];
                if (null !== r && r !== n) {
                    r.id === n && (r = this._ky[r]);
                    var h = r.id;
                    this._fa(h, r, !0) && (i = !0)
                }
            }
            return i
        },
        _fa: function(t, i) {
            return t !== n && this[Il](t) ? ((null === i || i === n) && (i = this.getById(t)),
            delete this._ky[t],
            m(this._jg, i),
            !0) : !1
        },
        removeById: function(t) {
            var i = this._ky[t];
            return i ? this._fa(t, i) : !1
        },
        set: function(t) {
            if (!t || 0 == t)
                return this.clear();
            if (this[vu]() || !B(t))
                return this[so](),
                this.add(t);
            var i = []
              , n = {}
              , e = 0;
            if (l(t, function(t) {
                this._ky[t.id] ? (n[t.id] = t,
                e++) : i[uh](t)
            }, this),
            e != this[nh]) {
                var s = [];
                this.forEach(function(t) {
                    n[t.id] || s.push(t)
                }, this),
                s[nh] && this._ml0(s)
            }
            return i[nh] && this._f0(i),
            !0
        },
        clear: function() {
            return this[vu]() ? !1 : (this._jg.length = 0,
            this._ky = {},
            !0)
        },
        toDatas: function() {
            return this._jg.slice(0)
        },
        isEmpty: function() {
            return 0 == this._jg[nh]
        },
        valueOf: function() {
            return this._jg[nh]
        },
        clone: function(t) {
            var i = new HY;
            return i.add(t ? g(this._jg) : this[Ll]()),
            i
        }
    },
    K(HY[lh], {
        datas: {
            get: function() {
                return this._jg
            }
        },
        random: {
            get: function() {
                return this._jg && this._jg.length ? this._jg[Y(this._jg[nh])] : null
            }
        },
        length: {
            get: function() {
                return this._jg ? this._jg[nh] : 0
            }
        }
    });
    var qY = (2 * Math.PI,
    .5 * Math.PI)
      , UY = function(t, i) {
        i = i[ma]();
        for (var n = IY ? t[Cl] : t[Rl]; n && (1 != n.nodeType || n.tagName && n[Dl].toUpperCase() != i); )
            n = IY ? n[Nl] : n[$l];
        return n && 1 == n[Bl] && n[Dl] && n[Dl].toUpperCase() == i ? n : null
    }
      , WY = function(t, i, n) {
        t instanceof WY && (i = t.y,
        t = t.x,
        n = t[Uo]),
        this.set(t, i, n)
    }
      , VY = function(t, i, n, e) {
        var s = t - n
          , r = i - e;
        return Math[Ao](s * s + r * r)
    };
    WY.prototype = {
        x: 0,
        y: 0,
        rotate: n,
        set: function(t, i, n) {
            this.x = t || 0,
            this.y = i || 0,
            this[Uo] = n || 0
        },
        negate: function() {
            this.x = -this.x,
            this.y = -this.y
        },
        offset: function(t, i) {
            this.x += t,
            this.y += i
        },
        equals: function(t) {
            return this.x == t.x && this.y == t.y
        },
        distanceTo: function(t) {
            return VY(this.x, this.y, t.x, t.y)
        },
        toString: function() {
            return Fl + this.x + Gl + this.y + Vh
        },
        clone: function() {
            return new WY(this.x,this.y)
        }
    },
    Object[mh](WY.prototype, zl, {
        get: function() {
            return Math[Ao](this.x * this.x + this.y * this.y)
        }
    });
    var XY = function(t, i, e, s) {
        t !== n && this._m7(t, i, e, s)
    };
    XY[lh] = {
        _mh: null,
        _md: null,
        _mf: null,
        _me: null,
        _mm: null,
        _ml: null,
        _mj: 1,
        _m7: function(t, i, n, e) {
            this._mh = t,
            this._md = i,
            this._mf = n,
            this._me = e,
            t == n ? (this._mm = -1,
            this._mj = 0,
            this._ml = t) : (this._mm = (i - e) / (t - n),
            this._ml = i - this._mm * t,
            this._mj = 1),
            this._ke = Math[sa](this._me - this._md, this._mf - this._mh),
            this[ra] = Math.cos(this._ke),
            this[ha] = Math.sin(this._ke)
        },
        _mje: function(t) {
            return 0 == this._mj ? Number.NaN : this._mm * t + this._ml
        },
        _mjc: function(t) {
            return 0 == this._mm ? Number.NaN : (t - this._ml) / this._mm
        },
        _$g: function(t) {
            var i, n, e, s, r, h = t[0], a = t[2], o = t[4], f = t[1], u = t[3], c = t[5], _ = this._mm, d = this._ml, l = this._mj;
            if (0 == l ? (e = Math.sqrt((-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h),
            s = -_ * a + _ * h,
            r = _ * o - 2 * _ * a + _ * h) : (e = Math.sqrt((-f + _ * h + d) * c + u * u + (-2 * _ * a - 2 * d) * u + (_ * o + d) * f + (-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h),
            s = -u + f + _ * a - _ * h,
            r = c - 2 * u + f - _ * o + 2 * _ * a - _ * h),
            0 != r) {
                i = (e + s) / r,
                n = (-e + s) / r;
                var v, b;
                return i >= 0 && 1 >= i && (v = Hi(i, t)),
                n >= 0 && 1 >= n && (b = Hi(n, t)),
                v && b ? [v, b] : v ? v : b ? b : void 0
            }
        },
        _3c: function(t, i, n) {
            if (this._mm == t._mm || 0 == this._mj && 0 == t._mj)
                return null;
            var e, s;
            if (e = 0 == this._mj ? this._ml : 0 == t._mj ? t._ml : (t._ml - this._ml) / (this._mm - t._mm),
            s = 0 == this._mm ? this._ml : 0 == t._mm ? t._ml : this._mj ? this._mm * e + this._ml : t._mm * e + t._ml,
            !i)
                return {
                    x: e,
                    y: s
                };
            var r, h, a;
            if (n)
                r = -i / 2,
                h = -r;
            else {
                r = -VY(this._mh, this._md, e, s),
                h = VY(this._mf, this._me, e, s);
                var o = -r + h;
                if (o > i) {
                    var f = i / o;
                    r *= f,
                    h *= f
                } else
                    a = (i - o) / 2
            }
            var u = this._6l(e, s, r)
              , c = this._6l(e, s, h);
            return a && (u[Yl] = a,
            c[Yl] = a),
            [u, c]
        },
        _6l: function(t, i, n) {
            return 0 == this._mj ? {
                x: t,
                y: i + n
            } : {
                x: t + n * this[ra],
                y: i + n * this[ha]
            }
        }
    };
    var ZY = function(t, i) {
        this[ca] = t,
        this.height = i
    };
    ZY[lh] = {
        width: 0,
        height: 0,
        isEmpty: function() {
            return this[ca] <= 0 || this.height <= 0
        },
        clone: function() {
            return new ZY(this[ca],this[eo])
        },
        toString: function() {
            return Hl + this[ca] + Gl + this[eo] + Vh
        }
    };
    var KY = function(t, i, e, s) {
        t instanceof Object && !D(t) && (i = t.y,
        e = t[ca],
        s = t.height,
        t = t.x),
        e === n && (e = -1),
        s === n && (s = -1),
        this.x = t || 0,
        this.y = i || 0,
        this.width = e,
        this.height = s
    };
    KY[lh] = {
        x: 0,
        y: 0,
        width: -1,
        height: -1,
        setByRect: function(t) {
            this.x = t.x || 0,
            this.y = t.y || 0,
            this[ca] = t[ca] || 0,
            this.height = t[eo] || 0
        },
        set: function(t, i, n, e) {
            this.x = t || 0,
            this.y = i || 0,
            this[ca] = n || 0,
            this.height = e || 0
        },
        offset: function(t, i) {
            return this.x += t,
            this.y += i,
            this
        },
        contains: function(t, i, n, e) {
            if (1 == arguments[nh]) {
                if (_h == typeof t && fi(t))
                    return this.contains(t.x, t.y, t[ca], t[eo]);
                throw {
                    message: ql
                }
            }
            return 2 == arguments[nh] ? t >= this.x && t <= this.x + this[ca] && i >= this.y && i <= this.y + this[eo] : ai(this.x, this.y, this[ca], this.height, t, i, n || 0, e || 0)
        },
        intersectsPoint: function(t, i, n) {
            return this[ca] <= 0 && this[eo] <= 0 ? !1 : n ? this[Ul](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this[ca] && i >= this.y && i <= this.y + this.height
        },
        intersectsRect: function(t, i, n, e) {
            return ri(this.x, this.y, this[ca], this.height, t, i, n, e)
        },
        intersects: function(t, i) {
            return D(t[ca]) ? this.intersectsRect(t.x, t.y, t[ca], t[eo]) : this[No](t, i)
        },
        intersection: function(t, i, n, e) {
            var s = this.x
              , r = this.y
              , h = s;
            h += this[ca];
            var a = r;
            a += this[eo];
            var o = t;
            o += n;
            var f = i;
            return f += e,
            t > s && (s = t),
            i > r && (r = i),
            h > o && (h = o),
            a > f && (a = f),
            h -= s,
            a -= r,
            0 > h || 0 > a ? null : new KY(s,r,h,a)
        },
        addPoint: function(t) {
            this.add(t.x, t.y)
        },
        add: function(t, i) {
            if (D(t.width))
                return this[Wl](t.x, t.y, t[ca], t[eo]);
            if (D(t.x) && (i = t.y,
            t = t.x),
            this[ca] < 0 || this[eo] < 0)
                return this.x = t,
                this.y = i,
                void (this[ca] = this[eo] = 0);
            var n = this.x
              , e = this.y
              , s = this[ca]
              , r = this[eo];
            s += n,
            r += e,
            n > t && (n = t),
            e > i && (e = i),
            t > s && (s = t),
            i > r && (r = i),
            s -= n,
            r -= e,
            s > Number[Vl] && (s = Number[Vl]),
            r > Number[Vl] && (r = Number[Vl]),
            this.set(n, e, s, r)
        },
        addRect: function(t, i, n, e) {
            var s = this[ca]
              , r = this[eo];
            (0 > s || 0 > r) && this.set(t, i, n, e);
            var h = n
              , a = e;
            if (!(0 > h || 0 > a)) {
                var o = this.x
                  , f = this.y;
                s += o,
                r += f;
                var u = t
                  , c = i;
                h += u,
                a += c,
                o > u && (o = u),
                f > c && (f = c),
                h > s && (s = h),
                a > r && (r = a),
                s -= o,
                r -= f,
                s > Number[Vl] && (s = Number[Vl]),
                r > Number[Vl] && (r = Number[Vl]),
                this.set(o, f, s, r)
            }
        },
        shrink: function(t, i, n, e) {
            return D(t) ? 1 == arguments[nh] ? e = i = n = t || 0 : 2 == arguments[nh] ? (n = t || 0,
            e = i || 0) : (t = t || 0,
            i = i || 0,
            n = n || 0,
            e = e || 0) : (i = t.left || 0,
            n = t.bottom || 0,
            e = t[oa] || 0,
            t = t.top || 0),
            this.x += i,
            this.y += t,
            this[ca] -= i + e,
            this[eo] -= t + n,
            this
        },
        grow: function(t, i, n, e) {
            return D(t) ? 1 == arguments.length ? e = i = n = t || 0 : 2 == arguments[nh] ? (n = t || 0,
            e = i || 0) : (t = t || 0,
            i = i || 0,
            n = n || 0,
            e = e || 0) : (i = t[$a] || 0,
            n = t[aa] || 0,
            e = t.right || 0,
            t = t.top || 0),
            this.x -= i,
            this.y -= t,
            this[ca] += i + e,
            this[eo] += t + n,
            this
        },
        scale: function(t) {
            return this.x *= t,
            this.y *= t,
            this[ca] *= t,
            this.height *= t,
            this
        },
        isEmpty: function() {
            return this[ca] <= 0 && this[eo] <= 0
        },
        toString: function() {
            return this.x + Xl + this.y + Xl + this.width + Xl + this[eo]
        },
        union: function(t) {
            var i = this[ca]
              , n = this[eo];
            if (0 > i || 0 > n)
                return new KY(t.x,t.y,t[ca],t.height);
            var e = t.width
              , s = t[eo];
            if (0 > e || 0 > s)
                return new KY(this.x,this.y,this[ca],this[eo]);
            var r = this.x
              , h = this.y;
            i += r,
            n += h;
            var a = t.x
              , o = t.y;
            return e += a,
            s += o,
            r > a && (r = a),
            h > o && (h = o),
            e > i && (i = e),
            s > n && (n = s),
            i -= r,
            n -= h,
            i > Number[Vl] && (i = Number[Vl]),
            n > Number[Vl] && (n = Number[Vl]),
            new KY(r,h,i,n)
        },
        clear: function() {
            this.set(0, 0, -1, -1)
        },
        equals: function(t) {
            return t && this.x == t.x && this.y == t.y && this[ca] == t[ca] && this[eo] == t.height
        },
        clone: function(t, i) {
            return new KY(this.x + (t || 0),this.y + (i || 0),this[ca],this[eo])
        },
        toArray: function() {
            return [this.x, this.y, this.width, this.height]
        },
        getIntersectionPoint: function(t, i, n, e) {
            return si(this, t, i, n, e)
        }
    },
    E(KY, ZY),
    KY[Zu] = function(t, i) {
        return t == i || t && i && t.x == i.x && t.y == i.y && t.width == i.width && t[eo] == i[eo]
    }
    ,
    K(KY[lh], {
        left: {
            get: function() {
                return this.x
            }
        },
        top: {
            get: function() {
                return this.y
            }
        },
        bottom: {
            get: function() {
                return this.y + this.height
            }
        },
        right: {
            get: function() {
                return this.x + this[ca]
            }
        },
        cx: {
            get: function() {
                return this.x + this[ca] / 2
            }
        },
        cy: {
            get: function() {
                return this.y + this[eo] / 2
            }
        },
        center: {
            get: function() {
                return new WY(this.cx,this.cy)
            }
        }
    }),
    KY.intersects = ri,
    KY[Zl] = oi,
    KY[No] = hi;
    var JY = function(t, i, n, e) {
        1 == arguments.length ? i = n = e = t : 2 == arguments[nh] && (n = t,
        e = i),
        this.set(t, i, n, e)
    };
    JY[lh] = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        set: function(t, i, n, e) {
            this.top = t || 0,
            this.left = i || 0,
            this[aa] = n || 0,
            this.right = e || 0
        },
        clone: function() {
            return new JY(this.top,this[$a],this[aa],this[oa])
        },
        equals: function(t) {
            return t && this.top == t.top && this[aa] == t[aa] && this.left == t[$a] && this.right == t[oa]
        }
    };
    var QY = function(t, i) {
        this[da] = t,
        this[la] = i
    };
    QY[lh] = {
        verticalPosition: !1,
        horizontalPosition: !1,
        toString: function() {
            return (this.horizontalPosition || "") + (this[la] || "")
        }
    },
    Z(QY[lh], Kl, {
        get: function() {
            return (this.horizontalPosition || "") + (this[la] || "")
        }
    });
    var tH = Jl
      , iH = Ql
      , nH = tv
      , eH = Hu
      , sH = iv
      , rH = nv;
    QY[ev] = new QY(tH,eH),
    QY[sv] = new QY(tH,sH),
    QY.LEFT_BOTTOM = new QY(tH,rH),
    QY[rv] = new QY(iH,eH),
    QY[hv] = new QY(iH,sH),
    QY[av] = new QY(iH,rH),
    QY[ov] = new QY(nH,eH),
    QY[fv] = new QY(nH,sH),
    QY[uv] = new QY(nH,rH);
    var hH = [QY[ev], QY.LEFT_MIDDLE, QY[cv], QY[rv], QY.CENTER_MIDDLE, QY[av], QY[ov], QY[fv], QY.RIGHT_BOTTOM];
    Z(QY, Hh, {
        get: function() {
            return hH[Y(hH.length)]
        }
    }),
    QY[_a] = function(t) {
        for (var i in QY) {
            var n = QY[i];
            if (n && Hh != i && n instanceof QY && n.toString() == t)
                return n
        }
        throw new Error("Position not be supported - " + t)
    }
    ;
    var aH = function(t, i, n, e, s) {
        this.set(t, i, n, e),
        this[_v] = s
    };
    aH[lh] = {
        radius: 0,
        classify: function(t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
        },
        intersectsRect: function(t, i, n, e) {
            if (T(this, aH, Ul, arguments) === !1)
                return !1;
            var s = this.x
              , r = this.y
              , h = s + this[ca]
              , a = r + this[eo]
              , o = 2 * radius
              , f = 2 * radius
              , u = Math.min(this.width, Math.abs(o)) / 2
              , c = Math.min(this[eo], Math.abs(f)) / 2
              , _ = this[dv](t, s, h, u)
              , d = this[dv](t + n, s, h, u)
              , l = this[dv](i, r, a, c)
              , v = this[dv](i + e, r, a, c);
            return 2 == _ || 2 == d || 2 == l || 2 == v ? !0 : 2 > _ && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + u) : t -= h - u,
            i = 1 == v ? i = i + e - (r + c) : i -= a - c,
            t /= u,
            i /= c,
            1 >= t * t + i * i)
        },
        intersectsPoint: function(t, i) {
            if (T(this, aH, No, arguments) === !1)
                return !1;
            var n = this.x
              , e = this.y
              , s = n + this[ca]
              , r = e + this.height;
            if (n > t || e > i || t >= s || i >= r)
                return !1;
            var h = 2 * radius
              , a = 2 * radius
              , o = Math.min(this[ca], Math.abs(h)) / 2
              , f = Math.min(this[eo], Math.abs(a)) / 2;
            return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = r - f) ? !0 : (t = (t - n) / o,
            i = (i - e) / f,
            1 >= t * t + i * i)
        },
        clone: function() {
            return new aH(this.x,this.y,this[ca],this[eo],this[_v])
        }
    },
    E(aH, KY);
    var oH = function(t, i, n, e) {
        this.source = t,
        this.type = i,
        this[Vd] = n,
        this[wh] = e
    };
    oH[lh] = {
        source: null,
        type: null,
        kind: null,
        value: null,
        toString: function() {
            return lv + this[kf] + vv + this[qo] + bv + this.kind
        }
    };
    var fH = function(t, i, n, e, s) {
        this[kf] = t,
        this[Vd] = i,
        this[gv] = e,
        this[wh] = n,
        this[yv] = s
    };
    fH[lh] = {
        type: mv,
        propertyType: null,
        toString: function() {
            return lv + this[kf] + vv + this[qo] + xv + this[Vd] + pv + this[gv] + Ev + this[wh]
        }
    },
    E(fH, oH),
    Z(fH.prototype, wv, {
        get: function() {
            return this[Vd]
        },
        set: function(t) {
            this.kind = t
        }
    });
    var uH = function(t, i, n) {
        this[kf] = t,
        this[gv] = t[Qu],
        this[wh] = i,
        this[Tv] = n,
        this[gv] && (this.oldIndex = this.oldValue.getChildIndex(t))
    };
    uH[lh] = {
        kind: Qu
    },
    E(uH, fH);
    var cH = function(t, i) {
        this[kf] = t,
        this[wh] = i
    };
    cH[lh][Vd] = Mv,
    E(cH, fH);
    var _H = function(t, i) {
        this[kf] = t,
        this[wh] = i
    };
    _H[lh].kind = kv,
    E(_H, fH);
    var dH = function(t, i, n, e) {
        this.source = i,
        this.oldValue = n,
        this.value = e,
        this[Qu] = t,
        this[Ov] = i,
        this[Sv] = n,
        this[Tv] = e
    };
    dH[lh].kind = Iv,
    E(dH, fH);
    var lH = function() {};
    lH[lh] = {
        listener: null,
        beforeEvent: function(t) {
            return null != this.listener && this[Av][ph] ? this.listener[ph](t) : !0
        },
        onEvent: function(t) {
            null != this[Av] && this.listener.onEvent && this[Av][Eh](t)
        }
    };
    var vH = function() {
        w(this, vH, arguments),
        this[Pv] = {},
        this[jv] = []
    }
      , bH = function(t, i) {
        this[Av] = t,
        this.scope = i,
        t instanceof Function ? this[Eh] = t : (this[Eh] = t[Eh],
        this.beforeEvent = t[ph]),
        this[Zu] = function(t) {
            return t && this[Av] == t.listener && this[Lv] == t.scope
        }
    };
    bH[lh] = {
        equals: function(t) {
            return t && this.listener == t[Av] && this[Lv] == t.scope
        },
        destroy: function() {
            delete this[Lv],
            delete this[Av]
        }
    },
    vH.prototype = {
        listeners: null,
        _mla: function() {
            return this[jv] && this.listeners[nh] > 0
        },
        _7h: function(t, i) {
            return t instanceof vH ? t : new bH(t,i)
        },
        _8z: function(t, i) {
            if (t instanceof vH)
                return this[jv].indexOf(t);
            for (var n = this[jv], e = 0, s = n.length; s > e; e++) {
                var r = n[e];
                if (r[Av] == t && r.scope == i)
                    return e
            }
            return -1
        },
        contains: function(t, i) {
            return this._8z(t, i) >= 0
        },
        addListener: function(t, i) {
            return this.contains(t, i) ? !1 : void this.listeners.push(this._7h(t, i))
        },
        removeListener: function(t, i) {
            var n = this._8z(t, i);
            n >= 0 && this[jv][rh](n, 1)
        },
        on: function(t, i) {
            this.addListener(t, i)
        },
        un: function(t, i, n) {
            this[Cv](t, i, n)
        },
        onEvent: function(t) {
            return this[jv] ? void l(this.listeners, function(i) {
                i[Eh] && (i[Lv] ? i[Eh][sh](i.scope, t) : i[Eh](t))
            }, this) : !1
        },
        beforeEvent: function(t) {
            return this[jv] ? l(this[jv], function(i) {
                return i.beforeEvent ? i[Lv] ? i[ph][sh](i.scope, t) : i[ph](t) : !0
            }, this) : !0
        },
        _e1: function(t) {
            return this[ph](t) === !1 ? !1 : (this[Eh](t),
            !0)
        },
        clear: function() {
            this.listeners = []
        },
        destroy: function() {
            this[so]()
        }
    },
    E(vH, lH);
    var gH = {
        onEvent: function() {},
        beforeEvent: function() {}
    }
      , yH = function(t, i, n, e, s) {
        this[kf] = t,
        this.type = Rv,
        this.kind = i,
        this[nf] = n,
        this[Dv] = e,
        this[Sv] = s
    };
    yH[lh] = {
        index: -1,
        oldIndex: -1,
        toString: function() {
            return lv + this[kf] + vv + this[qo] + bv + this.kind + Nv + this[nf] + $v + this[Dv] + Bv + this.oldIndex
        }
    },
    E(yH, oH),
    yH[Fv] = Gv,
    yH[zv] = Lh,
    yH[Yv] = so,
    yH[Hv] = qv;
    var mH = function() {
        this.id = ++kY,
        this[Uv] = {}
    };
    mH.prototype = {
        _mj5: null,
        id: null,
        get: function(t) {
            return this._mj5[t]
        },
        set: function(t, i) {
            var n = this.get(t);
            if (n === i)
                return !1;
            var e = new fH(this,t,i,n);
            return e[yv] = sq.PROPERTY_TYPE_CLIENT,
            this[Wv](t, i, e, this._mj5)
        },
        _mmy: function(t, i, e, s) {
            return this[ph](e) === !1 ? !1 : (s || (s = this[Uv]),
            i === n ? delete s[t] : s[t] = i,
            this[Eh](e),
            !0)
        },
        remove: function(t) {
            this.set(t, null)
        },
        valueOf: function() {
            return this.id
        },
        toString: function() {
            return this.id
        },
        _db: function(t, i) {
            if (i === n && (i = -1),
            this == t || t == this._j5)
                return !1;
            if (t && this == t._j5 && !t._db(null))
                return !1;
            var e = new uH(this,t,i);
            if (!this[ph](e))
                return !1;
            var s, r, h = this._j5;
            return t && (s = new cH(t,this),
            !t[ph](s)) ? !1 : null == h || (r = new _H(h,this),
            h[ph](r)) ? (this._j5 = t,
            null != t && _i(t, this, i),
            null != h && di(h, this),
            this.onEvent(e),
            null != t && t[Eh](s),
            null != h && h[Eh](r),
            this[Vv](h, t),
            !0) : !1
        },
        addChild: function(t, i) {
            var n = t._db(this, i);
            return n && this[ba](t, i),
            n
        },
        removeChild: function(t) {
            if (!this._f1 || !this._f1.contains(t))
                return !1;
            var i = t._db(null);
            return this.onChildRemove(t),
            i
        },
        toChildren: function() {
            return this._f1 ? this._f1[Ll]() : null
        },
        clearChildren: function() {
            if (this._f1 && this._f1[nh]) {
                var t = this[Xv]();
                l(t, function(t) {
                    t._db(null)
                }, this),
                this[Zv](t)
            }
        },
        forEachChild: function(t, i) {
            return this[th]() ? this._f1.forEach(t, i) : !1
        },
        onChildAdd: function() {},
        onChildRemove: function() {},
        onChildrenClear: function() {},
        onParentChanged: function() {},
        getChildIndex: function(t) {
            return this._f1 && this._f1[nh] ? this._f1[ch](t) : -1
        },
        setChildIndex: function(t, i) {
            if (!this._f1 || !this._f1.length)
                return !1;
            var n = this._f1.indexOf(t);
            if (0 > n || n == i)
                return !1;
            var e = new dH(this,t,n,i);
            return this[ph](e) === !1 ? !1 : (this._f1[Lh](t) && this._f1.add(t, i),
            this[Eh](e),
            !0)
        },
        hasChildren: function() {
            return this._f1 && this._f1[nh] > 0
        },
        getChildAt: function(t) {
            return null == this._f1 ? null : this._f1._jg[t]
        },
        isDescendantOf: function(t) {
            if (!t.hasChildren())
                return !1;
            for (var i = this[Qu]; null != i; ) {
                if (t == i)
                    return !0;
                i = i[Qu]
            }
            return !1
        },
        firePropertyChangeEvent: function(t, i, n, e) {
            this[Eh](new fH(this,t,i,n,e))
        }
    },
    E(mH, lH),
    K(mH.prototype, {
        childrenCount: {
            get: function() {
                return this._f1 ? this._f1[nh] : 0
            }
        },
        children: {
            get: function() {
                return this._f1 || (this._f1 = new HY),
                this._f1
            }
        },
        parent: {
            get: function() {
                return this._j5
            },
            set: function(t) {
                this._db(t, -1)
            }
        },
        properties: {
            get: function() {
                return this[Uv]
            },
            set: function(t) {
                this[Uv] != t && (this._mj5 = t)
            }
        }
    });
    var xH = function() {
        this._jg = [],
        this._ky = {},
        this._1b = new vH
    };
    xH[lh] = {
        beforeEvent: function(t) {
            return null != this._1b && this._1b.beforeEvent ? this._1b[ph](t) : !0
        },
        onEvent: function(t) {
            return this._1b instanceof Function ? void this._1b(t) : void (null != this._1b && this._1b[Eh] && this._1b[Eh](t))
        },
        _1b: null,
        setIndex: function(t, i) {
            if (!this[P_](t))
                throw new Error(qa + t[Kv]() + Al);
            var n = this[ch](t);
            if (n == i)
                return !1;
            var e = new yH(this,yH[Hv],t,i,n);
            return this[ph](e) === !1 ? !1 : (this._jg.remove(t) >= 0 && this._jg.add(i, t),
            this[Eh](e),
            !0)
        },
        _f0: function(t, i) {
            if (0 == t[nh])
                return !1;
            var e = !1
              , s = i >= 0
              , r = new yH(this,yH[Fv],t,i);
            if (this[ph](r) === !1)
                return !1;
            var h = [];
            t = t._jg || t;
            for (var a = 0, o = t.length; o > a; a++) {
                var f = t[a];
                null !== f && f !== n && this._k6(f, i, !0) && (h[uh](f),
                e = !0,
                s && i++)
            }
            return r.data = h,
            this[Eh](r),
            e
        },
        _k6: function(t, i, n) {
            if (this[fc](t) === !1)
                return !1;
            if (n)
                return T(this, xH, Jv, arguments);
            var e = new yH(this,yH[Fv],t,i);
            return this.beforeEvent(e) === !1 ? !1 : T(this, xH, Jv, arguments) ? (this._kc(t, e),
            t) : !1
        },
        _kc: function(t, i) {
            this[Eh](i)
        },
        _ml0: function(t) {
            if (0 == t.length)
                return !1;
            var i = new yH(this,yH.KIND_REMOVE,t);
            if (this[ph](i) === !1)
                return !1;
            var e = []
              , s = !1;
            t = t._jg || t;
            for (var r = 0, h = t.length; h > r; r++) {
                var a = t[r];
                if (null !== a && a !== n) {
                    var o = a.id || a;
                    a.id === n && (a = null),
                    this._fa(o, a, !0) && (e.push(a),
                    s = !0)
                }
            }
            return i[nf] = e,
            this[Eh](i),
            s
        },
        _fa: function(t, i, n) {
            if (n)
                return T(this, xH, Qv, arguments);
            var e = new yH(this,yH.KIND_REMOVE,i);
            return this[ph](e) === !1 ? !1 : T(this, xH, Qv, arguments) ? (this[Eh](e),
            !0) : !1
        },
        clear: function() {
            if (this[vu]())
                return !1;
            var t = new yH(this,yH.KIND_CLEAR,this[Ll]());
            return this[ph](t) === !1 ? !1 : T(this, xH, so) ? (this[Eh](t),
            !0) : !1
        },
        accept: function(t) {
            return this[tb] && this.filter(t) === !1 ? !1 : !0
        }
    },
    E(xH, HY),
    Z(xH[lh], ib, {
        get: function() {
            return this._1b
        }
    });
    var pH = function() {
        w(this, pH, arguments),
        this.selectionChangeDispatcher = new vH,
        this._selectionModel = new EH(this),
        this[nb]._1b = this[eb],
        this.dataChangeDispatcher = new vH,
        this[sb][Zd]({
            beforeEvent: this[rb],
            onEvent: this[hb]
        }, this),
        this[ab] = new vH,
        this[ob] = new vH,
        this[fb] = new HY;
        var t = this;
        this[fb][dc] = function(i, n) {
            if (!t[fb].contains(i))
                throw new Error(qa + i.id + Al);
            var e = t.$roots._jg[ch](i);
            if (e == n)
                return !1;
            t[fb]._jg.splice(e, 1),
            t[fb]._jg[rh](n, 0, i),
            t._mlpIndexFlag = !0;
            var s = new dH(t,i,e,n);
            return t._1x(s),
            !0
        }
    };
    pH[lh] = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _kc: function(t, i) {
            t[Av] = this.dataChangeDispatcher,
            t[Qu] || this[fb].add(t),
            this[Eh](i)
        },
        _fa: function(t, i) {
            if (T(this, pH, Qv, arguments)) {
                if (i instanceof fW)
                    i[ub]();
                else if (i instanceof uW) {
                    var n = i[cb]();
                    this[Lh](n)
                }
                var e = i[Qu];
                return null == e ? this[fb].remove(i) : (e[_b](i),
                e.__63 = !0),
                i.hasChildren() && this.remove(i[Xv]()),
                i[Av] = null,
                !0
            }
            return !1
        },
        _5k: function(t) {
            var i = t.source;
            this[P_](i) && (null == i[Qu] ? this[fb].add(i) : null == t.oldValue && this[fb][Lh](i),
            this[ab][Eh](t))
        },
        _1x: function(t) {
            this.childIndexChangeDispatcher[Eh](t)
        },
        beforeDataPropertyChange: function(t) {
            return t instanceof uH ? this[ab][ph](t) : !0
        },
        onDataPropertyChanged: function(t) {
            return t instanceof uH ? (this[db] = !0,
            t.source._mlpIndexFlag = !0,
            void this._5k(t)) : void (t instanceof dH && (this._mlpIndexFlag = !0,
            t[kf][db] = !0,
            this._1x(t)))
        },
        toRoots: function() {
            return this[fb][Ll]()
        },
        _ew: function(t) {
            var i, n = t._j5;
            i = n ? n._f1 : this.$roots;
            var e = i[ch](t);
            if (0 > e)
                throw new Error(lb + t + "' not exist in the box");
            return 0 == e ? n : i[Sl](e - 1)
        },
        _ey: function(t) {
            var i, n = t._j5;
            i = n ? n._f1 : this[fb];
            var e = i[ch](t);
            if (0 > e)
                throw new Error(lb + t + "' not exist in the box");
            return e == i[nh] - 1 ? n ? this._ey(n) : null : i[Sl](e + 1)
        },
        forEachByDepthFirst: function(t, i, n) {
            return this.$roots.length ? r(this.$roots, t, i, n) : !1
        },
        forEachByDepthFirstReverse: function(t, i, n) {
            return this[fb][nh] ? o(this[fb], t, i, n) : !1
        },
        forEachByBreadthFirst: function(t, i) {
            return this[fb][nh] ? c(this[fb], t, i) : !1
        },
        forEachByBreadthFirstReverse: function(t, i) {
            return this[fb][nh] ? _(this[fb], t, i) : !1
        },
        clear: function() {
            return T(this, pH, so) ? (this[fb].clear(),
            this[dd][so](),
            !0) : !1
        }
    },
    E(pH, xH),
    K(pH[lh], {
        selectionModel: {
            get: function() {
                return this[nb]
            }
        },
        roots: {
            get: function() {
                return this.$roots
            }
        }
    });
    var EH = function(t) {
        w(this, EH),
        this.box = t,
        this[vb] = {
            onEvent: function(t) {
                yH[zv] == t[Vd] ? null != t[nf] ? this[Lh](t[nf]) : null != t[Xd] && this.remove(t[Xd]) : yH[Yv] == t[Vd] && this.clear()
            }
        },
        this.box[ib].addListener(this._mloxChangeListener, this)
    };
    EH[lh] = {
        box: null,
        isSelected: function(t) {
            return this[Il](t.id || t)
        },
        select: function(t) {
            return this.add(t)
        },
        unselect: function(t) {
            return this[Lh](t)
        },
        reverseSelect: function(t) {
            return this.contains(t) ? this[Lh](t) : this.add(t)
        },
        accept: function(t) {
            return this.box[P_](t)
        }
    },
    E(EH, xH);
    var wH = null
      , TH = null
      , MH = function() {
        if (!i[_o])
            return function(t) {
                return t
            }
            ;
        var t = i.createElement(B_)
          , e = t[Ea]
          , s = {};
        return function(t) {
            if (s[t])
                return s[t];
            var i = li(t);
            return e[i] !== n || TH && e[i = li(TH + i)] !== n ? (s[t] = i,
            i) : t
        }
    }()
      , kH = {};
    !function() {
        if (!i.head)
            return !1;
        for (var e = i[bb], s = "Webkit Moz O ms Khtml"[Ph](jh), r = 0; r < s.length; r++)
            if (e[Ea][s[r] + gb] !== n) {
                TH = xa + s[r][yb]() + xa;
                break
            }
        var h = i[_o](Ea);
        t[mb] || h[Ju](i[xb]("")),
        h[qo] = pb,
        h.id = Eb,
        e[Ju](h),
        wH = h[wb];
        var a, o;
        for (var f in kH) {
            var u = kH[f];
            a = f,
            o = "";
            for (var c in u)
                o += MH(c) + wa + u[c] + Tb;
            mi(a, o)
        }
    }();
    var OH = function(t, i, n, e, s) {
        if (s) {
            var r = function(t) {
                r[Mb].call(r[Lv], t)
            };
            return r.scope = s,
            r.handle = n,
            t[kb](i, r, e),
            r
        }
        return t[kb](i, n, e),
        n
    }
      , SH = function(t, i, n) {
        t.removeEventListener(i, n)
    };
    if (YY.DOUBLE_CLICK_INTERVAL_TIME = 200,
    YY[Ob] = 800,
    YY[Sb] = !0,
    t.navigator && navigator[fl]) {
        var IH, AH = /mobile|tablet|ip(ad|hone|od)|android/i, PH = z_ in t, jH = PH && AH[ef](navigator.userAgent);
        if (jH)
            IH = Ib;
        else {
            var LH = Ab in t ? "mousewheel" : Pb;
            IH = jb + LH,
            PH && (IH += Lb)
        }
        IH = IH[Ph](/[\s,]+/);
        var CH = function(i) {
            return t[Cb] && i instanceof t[Cb]
        }
          , RH = function() {
            return YY[Rb]
        }
          , DH = function() {
            return YY[Ob]
        }
          , F = function(t) {
            t[Bh] ? t.preventDefault() : t[Fh] = !1
        }
          , G = function(t) {
            t[Gh] && t.stopPropagation(),
            t[zh] = !0
        }
          , z = function(t) {
            F(t),
            G(t)
        }
          , NH = function(t) {
            return t.defaultPrevented || t.returnValue === !1
        }
          , $H = function(t) {
            YH[Db] && YH[Db]._onWindowMouseMove(t)
        }
          , BH = function(t) {
            if (YH[Db]) {
                var i = YH[Db];
                i[Nb](t),
                FH(null)
            }
        }
          , FH = function(t) {
            YH[Db] != t && (YH[Db] && (YH[Db][$b] = !1),
            YH._mjurrentItem = t)
        }
          , GH = function(i, n) {
            IH[Du](function(t) {
                i.addEventListener(t, n, !1)
            }),
            GY || YH._mm6 || (YH._mm6 = !0,
            t.addEventListener(Bb, $H, !0),
            t[kb](Fb, BH, !0))
        }
          , zH = function(t, i) {
            IH[Du](function(n) {
                t.removeEventListener(n, i, !1)
            })
        };
        wi[lh] = {
            _install: function() {
                this[Gb] || (this.__mmction = function(t) {
                    this[qd](t)
                }
                [kh](this),
                GH(this._l1, this[Gb]))
            },
            _uninstall: function() {
                this[Gb] && zH(this._l1, this[Gb])
            },
            _mmction: function(t) {
                t = this[zb](t);
                var i = t.type;
                this[Yb](t, i) === !1 && this[Hb](t, qb + i)
            },
            _mjancelLongPressTimer: function() {
                this[Ub] && (clearTimeout(this.__longPressTimer),
                this[Ub] = null)
            },
            __kiLongPress: function(t) {
                this[Wb] || (this[Wb] = function() {
                    this._kiEvent && (this[Vb] = !0,
                    this[Xb][Zb] ? this[Hb](this[Xb], Kb) : this[Hb](this[Xb], Jb))
                }
                [kh](this)),
                this._mjancelLongPressTimer(),
                this[Ub] = setTimeout(this.__onLongPressFunction, DH(t))
            },
            __fixTouchEvent: function(t) {
                for (var i, n, e = 0, s = 0, r = t.touches[nh], h = 0; r > h; ) {
                    var a = t[La][h++]
                      , o = a[Ca]
                      , f = a[Ba];
                    if (2 == h) {
                        var u = n[0] - o
                          , c = n[1] - f;
                        i = Math[Ao](u * u + c * c)
                    }
                    n = [o, f],
                    e += o,
                    s += f
                }
                t.cx = e / r,
                t.cy = s / r,
                t[Qb] = {
                    x: t.cx,
                    y: t.cy,
                    clientX: t.cx,
                    clientY: t.cy
                },
                t[zl] = i
            },
            __touchCountChange: function(t) {
                this[tg][so](),
                this._8v = Ei(t, this._l1)
            },
            _handleTouchEvent: function(t, i) {
                switch (i) {
                case "touchstart":
                    G(t),
                    this[ig](t),
                    this[ng](t);
                    var n = t.touches[nh];
                    this[Xb] || (this[Xb] = t,
                    this[eg](t),
                    this[Vb] = !1,
                    this[sg](t)),
                    1 == n && (this[rg] = null),
                    n >= 2 && !this.__kiMulTouchEvent && (this.__kiMulTouchEvent = {
                        cx: t.cx,
                        cy: t.cy,
                        distance: t[zl]
                    });
                    break;
                case "touchmove":
                    z(t),
                    this.__fixTouchEvent(t);
                    var n = t[La][nh];
                    if (n >= 2 && this[rg]) {
                        var e = this.__kiMulTouchEvent[zl];
                        t[hg] = t[zl] / e,
                        t.dScale = this[rg].prevScale ? t[hg] / this[rg].prevScale : t._scale,
                        this[rg][ag] = t[hg],
                        this[og] || (this[og] = !0,
                        this[Hb](t, fg))
                    }
                    this[$b] || (this[$b] = !0,
                    this._kidrag(t)),
                    this._ondrag(t),
                    this.__pinching && this._onEvent(t, ug);
                    break;
                case "touchend":
                    z(t);
                    var n = t.touches[nh];
                    n && (this.__fixTouchEvent(t),
                    this[ng](t)),
                    1 >= n && (this.__pinching && (this.__pinching = !1,
                    this._onEvent(t, cg)),
                    this[rg] = null),
                    0 == n && (this[$b] ? (this[_g](t),
                    this.__dragging = !1) : t[Fa] - this._kiEvent.timeStamp < .8 * RH(t) && this.__onclick(this[Xb]),
                    this[dg](t));
                    break;
                case "touchcancel":
                    this.__dragging = !1,
                    this[og] = !1,
                    this[rg] = null
                }
                return !1
            },
            _handleEvent: function(t, i) {
                if (CH(t))
                    return this[lg](t, i);
                if (vg == i)
                    G(t),
                    FH(this),
                    this._8v = Ei(t, this._l1),
                    this._kiEvent || (this[Xb] = t,
                    this._onstart(t)),
                    this[Vb] = !1,
                    this[sg](t);
                else if (Fb == i)
                    FH(),
                    this[dg](t);
                else if (bg == i) {
                    if (this[Vb])
                        return !0;
                    if (this[gg]())
                        return this[yg](t),
                        !0
                } else if (mg == i) {
                    if (this[gg]())
                        return !0
                } else {
                    if (xg == i)
                        return this[Hb](t, pg),
                        this[Xb] && NH(t) && FH(this),
                        !0;
                    if (i == LH) {
                        var e = t.wheelDelta;
                        if (e !== n ? e /= 120 : e = -t.detail,
                        !e)
                            return;
                        return t[Eg] = e,
                        this[Hb](t, Ab)
                    }
                }
                return !1
            },
            _onEvent: function(t, i) {
                if (this[za]) {
                    var n = this._handler;
                    if (i = i || t.type,
                    n instanceof Function)
                        return n(t, i);
                    if (!(n[fc]instanceof Function && n[fc](i, t) === !1))
                        return n[wg]instanceof Function && n.onevent(i, t, this._scope || this._l1),
                        n[i]instanceof Function ? n[i][sh](n, t, this[Ga] || this._l1) : void 0
                }
            },
            _toQEvent: function(t) {
                return t
            },
            _onWindowMouseUp: function(t) {
                this.__dragging && (z(t),
                this[$b] = !1,
                t = this._toQEvent(t),
                this[_g](t),
                this[dg](t),
                this._onEvent(t, Tg))
            },
            _kiDragDistance: 4,
            _onWindowMouseMove: function(t) {
                if (this[Xb]) {
                    if (z(t),
                    !this[$b]) {
                        var i = this._kiEvent[Mg] - t.screenX
                          , n = this[Xb].screenY - t[kg]
                          , e = i * i + n * n;
                        if (e < this[Og])
                            return;
                        this[$b] = !0,
                        this._kidrag(t)
                    }
                    this[Sg](this._toQEvent(t))
                }
            },
            _isDelayClick: function() {
                return YY.DELAY_CLICK
            },
            __onclick: function(t) {
                if (!this[Vb]) {
                    var i = RH(t);
                    this[Ig] ? this[Ag] || (clearTimeout(this[Ig]),
                    this[Ig] = null,
                    this[Hb](t, Pg),
                    this[Ag] = !0) : (this.__dblclicked = !1,
                    this.__mjlickTimer = setTimeout(function(t) {
                        this[Ig] = null,
                        this[Ag] || this[Hb](t, jg)
                    }
                    [kh](this, t, i), i))
                }
            },
            _onstart: function(t) {
                t[Zb] ? this[Hb](t, Lg) : this[Hb](t, Cg)
            },
            _onrelease: function(t) {
                this[Xb] && (this[Rg](),
                t[Zb] ? this[Hb](t, Dg) : this._onEvent(t, Ng),
                this[Xb] = null,
                this._8v = null)
            },
            _mmppendDragInfo: function(t) {
                var i = this._8v;
                this._8v = Ei(t, this._l1),
                this[tg].add(i, this._8v, t)
            },
            _kidrag: function() {
                this[Vb] = !0,
                this._mjancelLongPressTimer(),
                this[Xb].button ? this._onEvent(this._kiEvent, $g) : this._onEvent(this[Xb], Bg)
            },
            _ondrag: function(t) {
                this[Fg](t),
                this[Xb].button ? this._onEvent(t, Gg) : this[Hb](t, zg)
            },
            _enddrag: function(t) {
                if (t[Fa] - this._8v.timeStamp < 100) {
                    var i = this._dragPoints.getCurrentSpeed();
                    i && (t.vx = i.x,
                    t.vy = i.y)
                }
                this[Xb].button ? this._onEvent(t, Yg) : this[Hb](t, Hg),
                this[tg][so]()
            },
            _hz: function() {
                this[qg]()
            },
            _jxStatus: function() {
                YH[Db] == this && delete YH[Db],
                this[Rg](),
                delete this._8v,
                this[Xb] && (delete this[Xb][Ug],
                delete this[Xb][w_],
                delete this._kiEvent)
            }
        };
        var YH = S(function(t) {
            this._k0 = t,
            wi[dh](this, [t[Wg], null, t])
        }, {
            "super": wi,
            _m9Data: function(t) {
                return this._k0[Vg](t)
            },
            _kj: function(t) {
                return this._k0[Xg](t)
            },
            _toQEvent: function(i) {
                return (i instanceof MouseEvent || t[Cb] && i instanceof t[Cb]) && (i[Ug] = this[Zg][kh](this, i),
                i[w_] = this._kj.bind(this, i)),
                i
            },
            _onElementRemoved: function(t) {
                this[Kg](function(i) {
                    i.onElementRemoved instanceof Function && i[Jg](t, this._k0)
                })
            },
            _onElementClear: function() {
                this[Kg](function(t) {
                    t[Qg]instanceof Function && t.onClear(this._k0)
                })
            },
            _hz: function(t) {
                this[ty] && this[iy](this[ty], t),
                this[ny] && this[iy](this._mjustomInteractionListeners, t),
                this[qg]()
            },
            _k0: null,
            _25s: null,
            _mjustomInteractionListeners: null,
            _m7Interaction: function(t) {
                return this[ty] == t ? !1 : (this[ty] && this._25s[nh] && this._hzInteractions(this[ty]),
                void (this[ty] = t))
            },
            _m3CustomInteractionListener: function(t) {
                this._mjustomInteractionListeners || (this[ny] = []),
                this[ny][uh](t)
            },
            _jjCustomInteractionListener: function(t) {
                this[ny] && 0 != this[ny].length && m(this[ny], t)
            },
            _onEvent: function(t, i, n) {
                this._k0[i]instanceof Function && this._k0[i].call(this._k0, t, n),
                this[ty] && this[ey](t, i, this[ty], n),
                this[ny] && this[ey](t, i, this._mjustomInteractionListeners, n)
            },
            _i2Listeners: function(t) {
                this[ty] && l(this._25s, t, this),
                this[ny] && l(this[ny], t, this)
            },
            __onEvent: function(t, i, n, e) {
                if (!B(n))
                    return void this.__handleEvent(t, i, n, e);
                for (var s = 0; s < n[nh]; s++) {
                    var r = n[s];
                    this[sy](t, i, r, e)
                }
            },
            __handleEvent: function(t, i, n, e) {
                if (!(n.accept instanceof Function && n.accept(i, t, this._k0, e) === !1)) {
                    n[wg]instanceof Function && n[wg](i, t, this._k0, e);
                    var s = n[i];
                    s instanceof Function && s[sh](n, t, this._k0, e)
                }
            },
            _hzInteraction: function(t) {
                t.destroy instanceof Function && t.destroy[sh](t, this._k0)
            },
            _hzInteractions: function(t, i) {
                if (!B(t))
                    return void this[ry](t, i);
                for (var n = 0; n < t[nh]; n++) {
                    var e = t[n];
                    e && this._hzInteraction(e, i)
                }
            }
        })
    }
    Mi[lh] = {
        limitCount: 10,
        points: null,
        add: function(t, i, n) {
            0 == this[Ha].length && (this._kiX = t.x,
            this[hy] = t.y);
            var e = i.timeStamp - t[Fa] || 1;
            n[ay] = e;
            var s = i.x - t.x
              , r = i.y - t.y;
            n.dx = s,
            n.dy = r,
            n[oy] = this._kiX,
            n[fy] = this[hy],
            n[uy] = i.x - this[cy],
            n[_y] = i.y - this._kiY,
            this.points[rh](0, 0, {
                interval: e,
                dx: s,
                dy: r
            }),
            this.points[nh] > this[dy] && this[Ha].pop()
        },
        getCurrentSpeed: function() {
            if (!this.points[nh])
                return null;
            for (var t = 0, i = 0, n = 0, e = 0, s = this.points.length; s > e; e++) {
                var r = this[Ha][e]
                  , h = r.interval;
                if (h > 150) {
                    t = 0;
                    break
                }
                if (t += h,
                i += r.dx,
                n += r.dy,
                t > 300)
                    break
            }
            return 0 == t || 0 == i && 0 == n ? null : {
                x: i / t,
                y: n / t
            }
        },
        clear: function() {
            this[Ha] = []
        }
    };
    var HH, qH, UH, WH;
    jY ? (HH = ly,
    qH = vy,
    UH = by,
    WH = gy) : LY ? (HH = yy,
    qH = my,
    UH = xy,
    WH = py) : (HH = Ey,
    qH = Ey,
    UH = md,
    WH = wy);
    var VH = Ty
      , XH = Math.PI
      , ZH = Math.pow
      , KH = Math.sin
      , JH = 1.70158
      , QH = {
        swing: function(t) {
            return -Math.cos(t * XH) / 2 + .5
        },
        easeNone: function(t) {
            return t
        },
        easeIn: function(t) {
            return t * t
        },
        easeOut: function(t) {
            return (2 - t) * t
        },
        easeBoth: function(t) {
            return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
        },
        easeInStrong: function(t) {
            return t * t * t * t
        },
        easeOutStrong: function(t) {
            return 1 - --t * t * t * t
        },
        easeBothStrong: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
        },
        elasticIn: function(t) {
            var i = .3
              , n = i / 4;
            return 0 === t || 1 === t ? t : -(ZH(2, 10 * (t -= 1)) * KH(2 * (t - n) * XH / i))
        },
        elasticOut: function(t) {
            var i = .3
              , n = i / 4;
            return 0 === t || 1 === t ? t : ZH(2, -10 * t) * KH(2 * (t - n) * XH / i) + 1
        },
        elasticBoth: function(t) {
            var i = .45
              , n = i / 4;
            return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * ZH(2, 10 * (t -= 1)) * KH(2 * (t - n) * XH / i) : ZH(2, -10 * (t -= 1)) * KH(2 * (t - n) * XH / i) * .5 + 1
        },
        backIn: function(t) {
            return 1 === t && (t -= .001),
            t * t * ((JH + 1) * t - JH)
        },
        backOut: function(t) {
            return (t -= 1) * t * ((JH + 1) * t + JH) + 1
        },
        backBoth: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * (((JH *= 1.525) + 1) * t - JH) : .5 * ((t -= 2) * t * (((JH *= 1.525) + 1) * t + JH) + 2)
        },
        bounceIn: function(t) {
            return 1 - QH[My](1 - t)
        },
        bounceOut: function(t) {
            var i, n = 7.5625;
            return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
        },
        bounceBoth: function(t) {
            return .5 > t ? .5 * QH.bounceIn(2 * t) : .5 * QH[My](2 * t - 1) + .5
        }
    }
      , tq = function(t) {
        this._jr = t
    };
    tq.prototype = {
        _jr: null,
        _8b: function() {
            this[ky]instanceof Function && (this._mjallback(),
            this[ky] = null)
        },
        _ki: function(t) {
            var i = Date.now();
            this._l6(),
            this[ky] = t,
            this[Oy] = requestAnimationFrame(function n() {
                var t = Date.now()
                  , e = t - i;
                return !e || this._jr && this._jr(e) !== !1 ? (i = t,
                void (this[Oy] = requestAnimationFrame(n[kh](this)))) : void this._l6()
            }
            .bind(this))
        },
        _64: function() {},
        _l6: function() {
            return this._requestID ? (this._64(),
            this._8b(),
            t[vl](this._requestID),
            void delete this[Oy]) : !1
        },
        _de: function() {
            return null != this[Oy]
        }
    };
    var iq = function(t, i, n, e) {
        this[Sy] = t,
        this._scope = i || this,
        this._2y = e,
        n && n > 0 && (this._i5 = n)
    };
    iq[lh] = {
        _i5: 1e3,
        _2y: null,
        _e4: 0,
        _l6: function() {
            return this._e4 = 0,
            this._d6 = 0,
            T(this, iq, Iy)
        },
        _d6: 0,
        _jr: function(t) {
            if (this._e4 += t,
            this._e4 >= this._i5)
                return this[Sy].call(this[Ga], 1, (1 - this._d6) * this._i5, t, this._i5),
                !1;
            var i = this._e4 / this._i5;
            return this._2y && (i = this._2y(i)),
            this._onStep[sh](this._scope, i, (i - this._d6) * this._i5, t, this._i5) === !1 ? !1 : void (this._d6 = i)
        }
    },
    E(iq, tq);
    var nq = function(t) {
        ni(t)
    }
      , eq = {
        version: Ay,
        extend: E,
        doSuperConstructor: w,
        doSuper: T,
        createFunction: function(t, i) {
            return i.bind(t)
        },
        setClass: L,
        appendClass: C,
        removeClass: R,
        forEach: l,
        forEachReverse: b,
        isNumber: D,
        isString: N,
        isBoolean: $,
        isArray: B,
        eventPreventDefault: F,
        eventStopPropagation: G,
        stopEvent: z,
        callLater: P,
        nextFrame: j,
        forEachChild: e,
        forEachByDepthFirst: r,
        forEachByDepthFirstReverse: o,
        forEachByBreadthFirst: c,
        randomInt: Y,
        randomBool: H,
        randomColor: U,
        addEventListener: OH,
        getFirstElementChildByTagName: UY
    };
    eq.isTouchSupport = GY,
    eq.isIOS = $Y,
    eq.intersectsPoint = hi,
    eq[Py] = ai,
    eq[jy] = KY,
    eq.Size = ZY,
    eq[Ly] = WY,
    eq[Cy] = JY,
    eq[Ry] = oH,
    eq.PropertyChangeEvent = fH,
    eq[Dy] = yH,
    eq[Ny] = lH,
    eq[$y] = vH,
    eq[By] = QY,
    eq[Fy] = mH,
    eq[Gy] = EH,
    eq.DataModel = pH,
    eq[zy] = gH,
    eq[Yy] = Si,
    eq.loadXML = ki,
    eq[Hy] = Oi,
    eq[qy] = Ti,
    eq.calculateDistance = VY,
    eq.HashList = HY,
    eq[Uy] = wi,
    eq[Wy] = function(t) {
        alert(t)
    }
    ,
    eq.prompt = function(t, i, n, e) {
        var s = prompt(t, i);
        return s != i && n ? n[sh](e, s) : s
    }
    ,
    eq[Vy] = function(t, i, n) {
        var e = confirm(t);
        return e && i ? i.call(n) : e
    }
    ,
    eq.addCSSRule = mi;
    var sq = {
        IMAGE_ADJUST_FLIP: Xy,
        IMAGE_ADJUST_MIRROR: Zy,
        SELECTION_TYPE_BORDER_RECT: Ky,
        SELECTION_TYPE_BORDER: Jy,
        SELECTION_TYPE_SHADOW: Qy,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: tm,
        EDGE_TYPE_ELBOW_HORIZONTAL: im,
        EDGE_TYPE_ELBOW_VERTICAL: nm,
        EDGE_TYPE_ORTHOGONAL: em,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: sm,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: rm,
        EDGE_TYPE_HORIZONTAL_VERTICAL: hm,
        EDGE_TYPE_VERTICAL_HORIZONTAL: am,
        EDGE_TYPE_EXTEND_TOP: om,
        EDGE_TYPE_EXTEND_LEFT: fm,
        EDGE_TYPE_EXTEND_BOTTOM: um,
        EDGE_TYPE_EXTEND_RIGHT: cm,
        EDGE_TYPE_ZIGZAG: _m,
        EDGE_CORNER_NONE: Z_,
        EDGE_CORNER_ROUND: Gf,
        EDGE_CORNER_BEVEL: dm,
        GROUP_TYPE_RECT: Td,
        GROUP_TYPE_CIRCLE: lm,
        GROUP_TYPE_ELLIPSE: vm,
        SHAPE_CIRCLE: bm,
        SHAPE_RECT: Td,
        SHAPE_ROUNDRECT: gm,
        SHAPE_STAR: ym,
        SHAPE_TRIANGLE: mm,
        SHAPE_HEXAGON: xm,
        SHAPE_PENTAGON: pm,
        SHAPE_TRAPEZIUM: Em,
        SHAPE_RHOMBUS: wm,
        SHAPE_PARALLELOGRAM: Tm,
        SHAPE_HEART: Mm,
        SHAPE_DIAMOND: km,
        SHAPE_CROSS: Om,
        SHAPE_ARROW_STANDARD: Sm,
        SHAPE_ARROW_1: Im,
        SHAPE_ARROW_2: Am,
        SHAPE_ARROW_3: Pm,
        SHAPE_ARROW_4: jm,
        SHAPE_ARROW_5: Lm,
        SHAPE_ARROW_6: Cm,
        SHAPE_ARROW_7: Rm,
        SHAPE_ARROW_8: Dm,
        SHAPE_ARROW_OPEN: Nm
    };
    sq[$m] = Bm,
    sq[Fm] = Gf,
    sq.LINE_CAP_TYPE_SQUARE = Gm,
    sq[zm] = dm,
    sq[Ym] = Gf,
    sq[Hm] = qm,
    sq[Um] = Wm,
    sq.EDGE_BUNDLE_TYPE_PARALLEL = Vm,
    YY.SELECTION_TYPE = sq[Xm],
    YY[wd] = jH ? 8 : 3,
    YY[Zm] = 2,
    YY[Km] = 7,
    YY[Jm] = X(3422561023),
    YY.SELECTION_TYPE = sq[Xm],
    YY[Qm] = 10,
    YY[tx] = 10,
    YY.ARROW_SIZE = 10,
    YY[ix] = 200,
    YY.LINE_HEIGHT = 1.2;
    var rq = t.devicePixelRatio || 1;
    1 > rq && (rq = 1);
    var hq;
    eq[nx] = Di;
    var aq = RY && !GY
      , oq = 9
      , fq = function(t, i, n, e) {
        var s = t - n
          , r = i - e;
        return s * s + r * r
    };
    rn[lh] = {
        equals: function(t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    },
    rn[jo] = function(t, i, n) {
        if (!n)
            return en(t, i);
        var e = fq(t.x, t.y, i.x, i.y)
          , s = fq(t.x, t.y, n.x, n.y)
          , r = fq(n.x, n.y, i.x, i.y);
        if (e + uq >= s + r)
            return en(t, i, 0, n);
        if (s + uq >= e + r)
            return en(t, n, 0, i);
        if (r + uq >= e + s)
            return en(i, n, 0, t);
        var h;
        Math.abs(n.y - i.y) < 1e-4 && (h = t,
        t = i,
        i = h),
        h = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
        var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * h)
          , o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
        return new rn(a,o,VY(a, o, t.x, t.y),t,i,n)
    }
    ;
    var uq = .01
      , cq = {
        _mmm: function(t, i, e, s, r) {
            if (N(t) && (t = QY.fromString(t)),
            !t)
                return {
                    x: 0,
                    y: 0
                };
            var h = 0
              , a = 0
              , o = i._ii;
            if (e = e || 0,
            t.x === n) {
                var f = t[da]
                  , u = t[la]
                  , c = !0;
                switch (f) {
                case nH:
                    c = !1;
                    break;
                case iH:
                    h += o / 2
                }
                switch (u) {
                case eH:
                    a -= e / 2;
                    break;
                case rH:
                    a += e / 2
                }
            } else
                h = t.x,
                a = t.y,
                Math.abs(h) > 0 && Math.abs(h) < 1 && (h *= o);
            r && null != s && (a += s.y,
            h += Math.abs(s.x) < 1 ? s.x * o : s.x);
            var _ = dn.call(i, h, a, c);
            return _ ? (r || null == s || _[ex](s),
            _) : {
                x: 0,
                y: 0
            }
        },
        _l3: function(t, i) {
            var n = i[qo]
              , e = i[Ha];
            switch (n) {
            case Nq:
                t.arcTo(e[0], e[1], e[2], e[3], i._r);
                break;
            case Lq:
                t[lf](e[0], e[1]);
                break;
            case Cq:
                t[vf](e[0], e[1]);
                break;
            case Rq:
                t[sx](e[0], e[1], e[2], e[3]);
                break;
            case Dq:
                t[rx](e[0], e[1], e[2], e[3], e[4], e[5]);
                break;
            case $q:
                t.closePath()
            }
        },
        _5f: function(t, i, n, e) {
            var s = i.type;
            if (s != Lq && s != $q) {
                var r = n[Ho]
                  , h = i[Ha];
                switch (n[qo] == Lq && t.add(r.x, r.y),
                s) {
                case Nq:
                    bn(i, r.x, r.y, h[0], h[1], h[2], h[3], h[4]),
                    t.add(h[0], h[1]),
                    t.add(i[Jo], i[Zo]),
                    t.add(i._p2x, i[Vo]),
                    i[hx] && t.add(i[hx].x, i.$boundaryPoint1.y),
                    i.$boundaryPoint2 && t.add(i[ax].x, i.$boundaryPoint2.y);
                    break;
                case Cq:
                    t.add(h[0], h[1]);
                    break;
                case Rq:
                    Ui([r.x, r.y][hh](h), t);
                    break;
                case Dq:
                    Ji([r.x, r.y][hh](h), t);
                    break;
                case $q:
                    e && t.add(e[Ha][0], e.points[1])
                }
            }
        },
        _5h: function(t, i, n) {
            var e = t[qo];
            if (e == Lq)
                return 0;
            var s = i[Ho]
              , r = t[Ha];
            switch (e == Dq && 4 == r[nh] && (e = Rq),
            e) {
            case Cq:
                return VY(r[0], r[1], s.x, s.y);
            case Nq:
                return t._ii;
            case Rq:
                var h = Xi([s.x, s.y].concat(r));
                return t._lf = h,
                h(1);
            case Dq:
                var h = tn([s.x, s.y].concat(r));
                return t._lf = h,
                h(1) || Qi([s.x, s.y][hh](r));
            case $q:
                if (s && n)
                    return t[Ha] = n.points,
                    VY(n[Ha][0], n.points[1], s.x, s.y)
            }
            return 0
        }
    }
      , _q = /^data:image\/(\w+);base64,/i
      , dq = /^gif/i
      , lq = /^svg/i
      , vq = 10
      , bq = 11
      , gq = 12
      , yq = 20
      , mq = 30;
    YY.IMAGE_WIDTH = 50,
    YY[pf] = 30,
    YY.IMAGE_DEFAULT = {
        draw: function(t, i) {
            pn(t, i[ca], i[eo], i[ox])
        }
    },
    YY[fx] = {
        draw: function(t, i) {
            pn(t, i[ca], i[eo], i[ox], !0)
        }
    },
    YY[ux] = 1e6;
    var xq = 1
      , pq = 2
      , Eq = 3;
    Tn[lh] = {
        _in: 0,
        _63: !0,
        _k5: null,
        _ip: null,
        _l0: null,
        _l5: null,
        _mmp: n,
        _97: n,
        _6t: function() {
            return this._in == xq
        },
        getBounds: function(t) {
            return this._l5 == mq ? this._l0.getBounds(t) : (this._63 && this._ex(),
            this)
        },
        validate: function() {
            this._63 && this._ex()
        },
        _ex: function() {
            if (this._63 = !1,
            this._l5 == mq)
                return this._l0.validate(),
                void this[Zf](this._l0[Do]);
            if (this._l5 == yq)
                return void this._8w();
            if (this._in != xq)
                try {
                    this._e7()
                } catch (t) {
                    this._in = Eq,
                    eq.error(t)
                }
        },
        _5i: function() {
            this._e1(),
            this[cx].clear(),
            delete this[cx]
        },
        _hg: function(t) {
            this._k5.parentNode && this._k5[_x][_b](this._k5),
            this._in = Eq,
            eq[ea](dx + this._l0),
            this._pixels = null,
            this._ip = null,
            this._k5 = null,
            t !== !1 && this._5i()
        },
        _e7: function() {
            var t = this._l0;
            if (this._in = xq,
            this[cx] = new vH,
            this._l5 == gq) {
                for (var n in Vq)
                    this[n] = Vq[n];
                return void ne(this._l0, this, this[lx], this._hg, this._ev)
            }
            this._k5 || (this._k5 = i[_o](G_),
            this._k5[vx] = bx,
            IY && (this._k5.style[gx] = X_,
            i.body[Ju](this._k5))),
            IY ? (this._k5.onload = function() {
                setTimeout(this._7n[kh](this), 100)
            }
            [kh](this),
            this._k5[Cu] = this._hg[kh](this)) : (this._k5.onload = this._7n[kh](this),
            this._k5[Cu] = this._7n[kh](this)),
            this._k5.src = t
        },
        _hh: !0,
        _7n: function() {
            var t = this._k5[ca]
              , i = this._k5[eo];
            if (!t || !i)
                return void this._hg();
            if (this._k5[_x] && this._k5[_x][_b](this._k5),
            this._in = pq,
            this[ca] = t,
            this.height = i,
            IY && this._l5 == bq)
                this._pixels = null,
                this._hh = !1;
            else if (this._l5 == bq || xn(this._k5.src)) {
                var n = Di();
                n[ca] = t,
                n[eo] = i,
                n.g[fd](this._k5, 0, 0, t, i),
                mn(n.g, n) && (this._ip = n,
                this[yx] = Pn(n))
            }
            this._5i()
        },
        _8w: function() {
            var t = this._l0;
            if (!(t[mf]instanceof Function))
                return void this._hg(!1);
            if (t.cacheable === !1 && t[ca] && t[eo])
                return this.width = t[ca],
                void (this[eo] = t[eo]);
            var i = t[ca] || YY[ix]
              , n = t[eo] || YY.IMAGE_MAX_SIZE
              , e = this._e8();
            e.width = i,
            e.height = n;
            var s = e.g;
            t.draw(s);
            var r = Gi(s, 0, 0, i, n);
            if (r) {
                var h = Ln(r[nf], i, n);
                this.x = h._x,
                this.y = h._y,
                this[ca] = h[mx],
                this[eo] = h[xx],
                e[ca] = this[ca],
                e[eo] = this[eo],
                s[Ff](r, -this.x, -this.y),
                this[yx] = h
            }
        },
        _e8: function() {
            return this._ip || (this._ip = Di())
        },
        draw: function(t, i, n, e, s, r) {
            if (this.width && this[eo]) {
                i = i || 1,
                e = e || 1,
                s = s || 1;
                var h = this[ca] * e
                  , a = this.height * s;
                if (r && n[px] && (t[px] = n[px],
                t.shadowBlur = (n[Ex] || 0) * i,
                t[wx] = (n.shadowOffsetX || 0) * i,
                t[Tx] = (n[Tx] || 0) * i),
                this._in == xq)
                    return void (YY[Mx] && YY.IMAGE_DEFAULT[mf](t, {
                        src: this._l0,
                        width: h,
                        height: a,
                        renderColor: n[ox]
                    }));
                if (this._in == Eq)
                    return void (YY.IMAGE_INVALID && YY[fx][mf](t, {
                        src: this._l0,
                        width: h,
                        height: a,
                        renderColor: n.renderColor
                    }));
                if (this._l5 == mq)
                    return t[uf](e, s),
                    void this._l0.draw(t, i, n);
                var o = this._f4(i, e, s);
                return o ? ((this.x || this.y) && t.translate(this.x * e, this.y * s),
                t[uf](e / o[uf], s / o.scale),
                void o._l3(t, n[ox], n[kx])) : void this._ir(t, i, e, s, this.width * e, this[eo] * s, n)
            }
        },
        _ir: function(t, i, n, e, s, r, h) {
            if (this._l5 == yq)
                return 1 != n && 1 != e && t.scale(n, e),
                void this._l0[mf](t, h);
            if (this._k5) {
                if (!CY)
                    return void t.drawImage(this._k5, 0, 0, s, r);
                var n = i * s / this.width
                  , e = i * r / this.height;
                t.scale(1 / n, 1 / e),
                t.drawImage(this._k5, 0, 0, s * n, r * e)
            }
        },
        _it: null,
        _f4: function(t, i, n) {
            if (this._l5 == yq && this._l0[Ox] === !1)
                return null;
            if (this._l5 == vq || (t *= Math.max(i, n)) <= 1)
                return this[Sx] || (this._defaultCache = this._f6(this._ip || this._k5, 1, this._hh)),
                this[Sx];
            var e = this._it[Ix] || 0;
            if (t = Math[oh](t),
            e >= t) {
                for (var s = t, r = this._it[s]; !r && ++s <= e; )
                    r = this._it[s];
                if (r)
                    return r
            }
            t % 2 && t++;
            var h = this[ca] * t
              , a = this.height * t;
            if (h * a > YY.MAX_CACHE_PIXELS)
                return null;
            var o = Di(h, a);
            return (this.x || this.y) && o.g[ff](-this.x * t, -this.y * t),
            this._ir(o.g, 1, t, t, h, a),
            this._f6(o, t)
        },
        _f6: function(t, i) {
            var n = new zq(t,i);
            return this._it[i] = n,
            this._it[Ix] = i,
            n
        },
        hitTest: function(t, i, n) {
            if (this._l5 == mq)
                return this._l0[j_][dh](this._l0, arguments);
            if (!(this[yx] || this._k5 && this._k5._pixels))
                return !0;
            var e = this[yx] || this._k5[yx];
            return e._hi(t, i, n)
        },
        _e1: function() {
            this[cx] && this[cx].onEvent(new oH(this,Ax,Px,this._k5))
        },
        _mm9: function(t, i) {
            this[cx] && this._dispatcher[Zd](t, i)
        },
        _6z: function(t, i) {
            this._dispatcher && this._dispatcher.removeListener(t, i)
        },
        _mlu: function(t) {
            this._it = {},
            (t || this[ca] * this[eo] > 1e5) && (this._k5 = null,
            this._ip = null)
        }
    },
    E(Tn, KY);
    var wq = {};
    eq[fd] = In,
    eq[jx] = Mn,
    eq[Lx] = On,
    eq[Cx] = function() {
        var t = [];
        for (var i in wq)
            t.push(i);
        return t
    }
    ;
    var Tq = function(t, i, n, e, s, r) {
        this[qo] = t,
        this[Rx] = i,
        this[Dx] = n,
        this.angle = e || 0,
        this.tx = s || 0,
        this.ty = r || 0
    };
    sq[Nx] = tv,
    sq[$x] = Jl,
    Tq.prototype = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: QY.CENTER_MIDDLE,
        isEmpty: function() {
            return null == this.colors || 0 == this[Rx][nh]
        },
        _66: function() {
            var t = this[Rx].length;
            if (1 == t)
                return [0];
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++)
                i.push(n * e);
            return this[Dx] || (this[Dx] = i),
            i
        },
        generatorGradient: function(t) {
            if (null == this[Rx] || 0 == this[Rx][nh])
                return null;
            var i, n = Ni();
            if (this[qo] == sq[$x]) {
                var e = this.angle;
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var r = Math[sa](t.height, t[ca])
                      , h = Math.sqrt(t[ca] * t[ca] + t[eo] * t[eo])
                      , a = r - e;
                    s = Math.cos(a) * h
                } else {
                    var r = Math[sa](t[ca], t.height)
                      , h = Math[Ao](t[ca] * t[ca] + t.height * t.height)
                      , a = r - (e - Math.PI / 2);
                    s = Math.cos(a) * h
                }
                var o = s / 2
                  , f = o * Math.cos(e)
                  , u = o * Math.sin(e)
                  , c = t.x + t.width / 2 - f
                  , _ = t.y + t.height / 2 - u
                  , d = t.x + t.width / 2 + f
                  , l = t.y + t[eo] / 2 + u;
                i = n[Bx](c, _, d, l)
            } else {
                if (!(this[qo] = sq[Nx]))
                    return null;
                var v = ci(this[Fx], t[ca], t[eo]);
                v.x += t.x,
                v.y += t.y,
                this.tx && (v.x += Math.abs(this.tx) < 1 ? t[ca] * this.tx : this.tx),
                this.ty && (v.y += Math.abs(this.ty) < 1 ? t[eo] * this.ty : this.ty);
                var b = VY(v.x, v.y, t.x, t.y);
                b = Math.max(b, VY(v.x, v.y, t.x, t.y + t[eo])),
                b = Math.max(b, VY(v.x, v.y, t.x + t[ca], t.y + t[eo])),
                b = Math.max(b, VY(v.x, v.y, t.x + t[ca], t.y)),
                i = n.createRadialGradient(v.x, v.y, 0, v.x, v.y, b)
            }
            var g = this[Rx]
              , y = this[Dx];
            y && y[nh] == g.length || (y = this._66());
            for (var m = 0, x = g[nh]; x > m; m++)
                i[Gx](y[m], g[m]);
            return i
        }
    };
    var Mq = new Tq(sq.GRADIENT_TYPE_LINEAR,[X(2332033023), X(1154272460), X(1154272460), X(1442840575)],[.1, .3, .7, .9],Math.PI / 2)
      , kq = new Tq(sq.GRADIENT_TYPE_LINEAR,[X(2332033023), X(1154272460), X(1154272460), X(1442840575)],[.1, .3, .7, .9],0)
      , Oq = (new Tq(sq.GRADIENT_TYPE_LINEAR,[X(1154272460), X(1442840575)],[.1, .9],0),
    new Tq(sq.GRADIENT_TYPE_RADIAL,[X(2298478591), X(1156509422), X(1720223880), X(1147561574)],[.1, .3, .7, .9],0,-.3,-.3))
      , Sq = [X(0), X(4294901760), X(4294967040), X(4278255360), X(4278250239), X(4278190992), X(4294901958), X(0)]
      , Iq = [0, .12, .28, .45, .6, .75, .8, 1]
      , Aq = new Tq(sq[$x],Sq,Iq)
      , Pq = new Tq(sq[$x],Sq,Iq,Math.PI / 2)
      , jq = new Tq(sq[Nx],Sq,Iq);
    Tq[zx] = Mq,
    Tq[Yx] = kq,
    Tq[Hx] = Oq,
    Tq[qx] = Aq,
    Tq[Ux] = Pq,
    Tq[Wx] = jq;
    var Lq = iv
      , Cq = Jl
      , Rq = Vx
      , Dq = Ql
      , Nq = Xx
      , $q = Zx;
    sq.SEGMENT_MOVE_TO = Lq,
    sq[Kx] = Cq,
    sq[Jx] = Rq,
    sq[Qx] = Dq,
    sq[tp] = Nq,
    sq.SEGMENT_CLOSE = $q;
    var Bq = function(t, i) {
        this.id = ++kY,
        B(t) ? this[Ha] = t : (this[qo] = t,
        this.points = i)
    };
    Bq.prototype = {
        toJSON: function() {
            var t = {
                type: this[qo],
                points: this.points
            };
            return this[If] && (t[If] = !0),
            t
        },
        parseJSON: function(t) {
            this.type = t[qo],
            this[Ha] = t[Ha],
            this.invalidTerminal = t.invalidTerminal
        },
        points: null,
        type: Cq,
        clone: function() {
            return new Bq(this[qo],this.points ? g(this[Ha]) : null)
        },
        move: function(t, i) {
            if (this[Ha])
                for (var n = 0, e = this.points[nh]; e > n; n++) {
                    var s = this[Ha][n];
                    eq[ip](s) && (this.points[n] += n % 2 == 0 ? t : i)
                }
        }
    },
    K(Bq.prototype, {
        lastPoint: {
            get: function() {
                return this.type == Nq ? {
                    x: this[Wo],
                    y: this[Vo]
                } : {
                    x: this[Ha][this[Ha][nh] - 2],
                    y: this[Ha][this.points[nh] - 1]
                }
            }
        },
        firstPoint: {
            get: function() {
                return {
                    x: this.points[0],
                    y: this.points[1]
                }
            }
        }
    }),
    eq[np] = Bq;
    var Fq = 0
      , Gq = function(t) {
        this[Do] = new KY,
        this._f9 = t || []
    };
    Gq.prototype = {
        toJSON: function() {
            var t = [];
            return this._f9[Du](function(i) {
                t[uh](i[ep]())
            }),
            t
        },
        parseJSON: function(t) {
            var i = this._f9;
            t[Du](function(t) {
                i[uh](new Bq(t[qo],t[Ha]))
            })
        },
        clear: function() {
            this._f9.length = 0,
            this[Do][so](),
            this._ii = 0,
            this._63 = !0
        },
        _e5: !0,
        _65: function(t, i) {
            this._e5 && 0 === this._f9[nh] && t != Lq && this._f9.push(new Bq(Lq,[0, 0])),
            this._f9.push(new Bq(t,i)),
            this._63 = !0
        },
        add: function(t, i) {
            y(this._f9, t, i),
            this._63 = !0
        },
        removePathSegment: function(t) {
            return t >= this._f9[nh] ? !1 : (this._f9[rh](t, 1),
            void (this._63 = !0))
        },
        moveTo: function(t, i) {
            this._65(Lq, [t, i])
        },
        lineTo: function(t, i) {
            this._65(Cq, [t, i])
        },
        quadTo: function(t, i, n, e) {
            this._65(Rq, [t, i, n, e])
        },
        curveTo: function(t, i, n, e, s, r) {
            this._65(Dq, [t, i, n, e, s, r])
        },
        arcTo: function(t, i, n, e, s) {
            this._65(Nq, [t, i, n, e, s])
        },
        closePath: function() {
            this._65($q)
        },
        _7p: function(t, i, n, e, s) {
            if (e[sp]) {
                if (n == sq[Xm]) {
                    if (!e[rp])
                        return;
                    return t[px] = e[sp],
                    t.shadowBlur = e[rp] * i,
                    t.shadowOffsetX = (e[hp] || 0) * i,
                    void (t[Tx] = (e[ap] || 0) * i)
                }
                if (n == sq[op]) {
                    if (!e.selectionBorder)
                        return;
                    t[hd] = e[sp];
                    var r = s[zo] || 0;
                    s[fp] && (r += 2 * s.outline),
                    t.lineWidth = e[up] + r,
                    this._l3(t),
                    t[Fo]()
                }
            }
        },
        _63: !0,
        _f9: null,
        _ii: 0,
        lineCap: Bm,
        lineJoin: Gf,
        draw: function(t, i, n, e, s) {
            t[cp] = n[cp] || this[cp],
            t.lineJoin = n[rd] || this[rd],
            e && (s || (s = n),
            this._7p(t, i, s.selectionType, s, n));
            var r = e && s.selectionType == sq[Xm];
            n[_p] && (this._l3(t),
            t[zo] = n[zo] + 2 * (n[fp] || 0),
            t.strokeStyle = n[_p],
            t[Fo](),
            r && (r = !1,
            t.shadowColor = dp)),
            t[zo] = 0,
            this._l3(t),
            n[lp] && (t[_f] = n[ox] || n.fillColor,
            t[Go]()),
            n[vp] && (t.fillStyle = n._fillGradient || n[vp],
            t.fill()),
            n.lineWidth && (t[zo] = n[zo],
            n[gu] && (n[bp] && (t.strokeStyle = n[bp],
            t.stroke(),
            r && (t.shadowColor = dp)),
            t.lineCap = n.lineDashCap || t[cp],
            t[rd] = n[gp] || t[rd],
            t[gu] = n[gu],
            t.lineDashOffset = n[wu]),
            t[hd] = n[ox] || n[hd],
            t[Fo](),
            t[gu] = [])
        },
        _l3: function(t) {
            t.beginPath();
            for (var i, n, e = 0, s = this._f9[nh]; s > e; e++)
                i = this._f9[e],
                cq._l3(t, i, n),
                n = i
        },
        invalidate: function() {
            this._63 = !0
        },
        validate: function() {
            if (this._63 = !1,
            this[Do][so](),
            this._ii = 0,
            0 != this._f9[nh])
                for (var t, i, n = this._f9, e = 1, s = n[0], r = s, h = n.length; h > e; e++)
                    t = n[e],
                    t[qo] == Lq ? r = t : (cq._5f(this.bounds, t, s, r),
                    i = cq._5h(t, s, r),
                    t._ii = i,
                    this._ii += i),
                    s = t
        },
        getBounds: function(t, i) {
            if (this._63 && this[Co](),
            i = i || new KY,
            t) {
                var n = t / 2;
                i.set(this[Do].x - n, this[Do].y - n, this.bounds[ca] + t, this[Do][eo] + t)
            } else
                i.set(this[Do].x, this[Do].y, this[Do].width, this[Do].height);
            return i
        },
        hitTest: function(t, i, n, e, s, r) {
            return _n.call(this, t, i, n, e, s, r)
        },
        toSegments: function() {
            return [][hh](this._f9)
        },
        generator: function(t, i, n, e, s) {
            return cn.call(this, t, i, n, e, s)
        },
        getLocation: function(t, i) {
            return dn[sh](this, t, i || 0)
        }
    },
    K(Gq[lh], {
        segments: {
            get: function() {
                return this._f9
            },
            set: function(t) {
                this[so](),
                this._f9 = t
            }
        },
        length: {
            get: function() {
                return this._63 && this.validate(),
                this._ii
            }
        },
        _empty: {
            get: function() {
                return 0 == this._f9.length
            }
        }
    }),
    jn[lh] = {
        _10: function(t, i) {
            var n, e, s, r, h, a = t[nh], o = 0, f = 0;
            for (h = 0; a > h; h += 4)
                if (t[h + 3] > 0) {
                    n = (h + 4) / i / 4 | 0;
                    break
                }
            for (h = a - 4; h >= 0; h -= 4)
                if (t[h + 3] > 0) {
                    e = (h + 4) / i / 4 | 0;
                    break
                }
            for (o = 0; i > o; o++) {
                for (f = n; e > f; f++)
                    if (t[f * i * 4 + 4 * o + 3] > 0) {
                        s = o;
                        break
                    }
                if (s >= 0)
                    break
            }
            for (o = i - 1; o >= 0; o--) {
                for (f = n; e > f; f++)
                    if (t[f * i * 4 + 4 * o + 3] > 0) {
                        r = o;
                        break
                    }
                if (r >= 0)
                    break
            }
            this._x = s,
            this._y = n,
            this[mx] = r - s + 1,
            this[xx] = e - n + 1,
            this._iz = new KY(s,n,this[mx],this[xx]),
            this[yp] = this[mx] * this[xx],
            this[mp] = i,
            this[xp] = t
        },
        _el: function(t, i) {
            return this[xp][4 * (t + this._x + (this._y + i) * this[mp]) + 3]
        },
        _hi: function(t, i, n) {
            (!n || 1 >= n) && (n = 1),
            n = 0 | n,
            t = Math.round(t - this._x) - n,
            i = Math[Gf](i - this._y) - n,
            n += n;
            for (var e = t, s = i; i + n > s; ) {
                for (var e = t; t + n > e; ) {
                    if (this._el(e, s))
                        return !0;
                    ++e
                }
                ++s
            }
            return !1
        }
    },
    sq[Cf] = pp,
    sq.BLEND_MODE_MULTIPLY = Ep,
    sq[Rf] = wp,
    sq.BLEND_MODE_LINEAR_BURN = Tp,
    sq[Nf] = Mp,
    sq[$f] = kp,
    sq.BLEND_MODE_GRAY = Op,
    YY[jf] = sq[Df];
    var zq = function(t, i, n) {
        this._ip = t,
        this[uf] = i || 1,
        this._hh = n
    };
    zq[lh] = {
        scale: 1,
        _ip: null,
        _it: null,
        _hh: !0,
        _l3: function(t, i, n) {
            if (i && (i = Cn(i)),
            !i || this._hh === !1)
                return void t[fd](this._ip, 0, 0);
            if (this._ip instanceof Image) {
                var e = Di();
                e[ca] = this._ip.width,
                e[eo] = this._ip.height,
                e.g.drawImage(this._ip, 0, 0, this._ip[ca], this._ip[eo]),
                this._ip = e
            }
            this._it || (this._it = {});
            var s = i + n
              , e = this._it[s];
            if (e || (e = Dn(this._ip, i, n),
            e || (this._hh = !1),
            this._it[s] = e || this._ip),
            e)
                if (IY)
                    try {
                        t[fd](e, 0, 0)
                    } catch (r) {}
                else
                    t[fd](e, 0, 0)
        }
    };
    var Yq = function(t, i, n, e, s, r, h, a, o) {
        this._l7 = Fn(t, i, n, e, s, r, h, a, o)
    }
      , Hq = {
        server: {
            draw: function(t) {
                t[af](),
                t[ff](0, 0),
                t.beginPath(),
                t.moveTo(0, 0),
                t[vf](40, 0),
                t.lineTo(40, 40),
                t[vf](0, 40),
                t[Yf](),
                t[Sp](),
                t[ff](0, 0),
                t[ff](0, 0),
                t[uf](1, 1),
                t[ff](0, 0),
                t.strokeStyle = dp,
                t[cp] = Bm,
                t[rd] = qm,
                t[Ip] = 4,
                t[af](),
                t[af](),
                t[So](),
                t[af](),
                t[So](),
                t[af](),
                t.restore(),
                t[af](),
                t[So](),
                t[af](),
                t[So](),
                t[af](),
                t[So](),
                t[af](),
                t[So](),
                t[af](),
                t[So](),
                t[af](),
                t.restore(),
                t.save(),
                t.restore(),
                t[af](),
                t.restore(),
                t[af](),
                t[So](),
                t.save(),
                t.restore(),
                t[So](),
                t.save();
                var i = t[Bx](6.75, 3.9033, 30.5914, 27.7447);
                i[Gx](.0493, Ap),
                i[Gx](.0689, Pp),
                i.addColorStop(.0939, jp),
                i[Gx](.129, Lp),
                i.addColorStop(.2266, Cp),
                i[Gx](.2556, Rp),
                i.addColorStop(.2869, Dp),
                i.addColorStop(.3194, Np),
                i[Gx](.3525, $p),
                i[Gx](.3695, Bp),
                i.addColorStop(.5025, Fp),
                i[Gx](.9212, Gp),
                i[Gx](1, zp),
                t.fillStyle = i,
                t.beginPath(),
                t[lf](25.677, 4.113),
                t[rx](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004),
                t.bezierCurveTo(19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003),
                t[rx](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004),
                t[rx](9.19, 2.897, 8.977, 2.989, 8.805, 3.094),
                t[rx](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63),
                t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05),
                t[rx](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307),
                t[rx](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575),
                t[rx](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004),
                t[rx](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004),
                t[rx](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85),
                t[rx](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253),
                t[rx](25.706, 4.885, 25.749, 4.478, 25.677, 4.113),
                t[rx](25.67, 4.077, 25.697, 4.217, 25.677, 4.113),
                t.closePath(),
                t[Go](),
                t[Fo](),
                t[So](),
                t[af](),
                t[af](),
                t.fillStyle = Yp,
                t[cf](),
                t[lf](19.763, 6.645),
                t[rx](20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778),
                t[rx](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999),
                t[rx](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999),
                t.bezierCurveTo(21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372),
                t.lineTo(21.398, 36.253),
                t[rx](21.397, 36.489, 21.349, 36.713, 21.262, 36.917),
                t[rx](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458),
                t[rx](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996),
                t[rx](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949),
                t.lineTo(4.675, 37.877),
                t[rx](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741),
                t[rx](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376),
                t[rx](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996),
                t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172),
                t.lineTo(2.924, 8.431),
                t.bezierCurveTo(2.923, 8.192, 2.971, 7.964, 3.057, 7.758),
                t[rx](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209),
                t[rx](3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837),
                t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7),
                t[vf](19.763, 6.645),
                t[Yf](),
                t[Go](),
                t.stroke(),
                t[So](),
                t[So](),
                t[af](),
                t[_f] = Hp,
                t.beginPath(),
                t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0),
                t[Yf](),
                t.fill(),
                t[Fo](),
                t[So](),
                t[af](),
                t.fillStyle = Yp,
                t[cf](),
                t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0),
                t.closePath(),
                t[Go](),
                t.stroke(),
                t[So](),
                t[af](),
                t[_f] = Hp,
                t.beginPath(),
                t.moveTo(19.377, 17.247),
                t.bezierCurveTo(19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998),
                t[vf](5.882, 18.108999999999998),
                t.bezierCurveTo(5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247),
                t.lineTo(5.02, 11.144),
                t[rx](5.02, 10.666, 5.406, 10.281, 5.882, 10.281),
                t[vf](18.516, 10.281),
                t.bezierCurveTo(18.993, 10.281, 19.377, 10.666, 19.377, 11.144),
                t[vf](19.377, 17.247),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t.restore(),
                t.save(),
                t[af](),
                t[_f] = Yp,
                t[cf](),
                t[lf](18.536, 13.176),
                t[rx](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),
                t.lineTo(6.479, 13.794),
                t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),
                t[vf](5.861, 11.84),
                t[rx](5.861, 11.498, 6.137, 11.221, 6.479, 11.221),
                t[vf](17.918, 11.221),
                t.bezierCurveTo(18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),
                t[vf](18.535, 13.176),
                t[Yf](),
                t[Go](),
                t.stroke(),
                t[So](),
                t[af](),
                t[_f] = Yp,
                t[cf](),
                t.moveTo(18.536, 16.551),
                t[rx](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),
                t.lineTo(6.479, 17.168999999999997),
                t[rx](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),
                t[vf](5.861, 15.215999999999998),
                t.bezierCurveTo(5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),
                t.lineTo(17.918, 14.596999999999998),
                t[rx](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),
                t[vf](18.535, 16.551),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t[So](),
                t[So](),
                t[So]()
            }
        },
        exchanger2: {
            draw: function(t) {
                t.save(),
                t[ff](0, 0),
                t[cf](),
                t[lf](0, 0),
                t[vf](40, 0),
                t.lineTo(40, 40),
                t[vf](0, 40),
                t[Yf](),
                t.clip(),
                t.translate(0, 0),
                t[ff](0, 0),
                t[uf](1, 1),
                t[ff](0, 0),
                t[hd] = dp,
                t.lineCap = Bm,
                t[rd] = qm,
                t[Ip] = 4,
                t[af](),
                t[af](),
                t[So](),
                t.save(),
                t.restore(),
                t[af](),
                t.restore(),
                t.save(),
                t[So](),
                t[af](),
                t.restore(),
                t.save(),
                t.restore(),
                t[af](),
                t[So](),
                t.save(),
                t[So](),
                t[af](),
                t[So](),
                t[af](),
                t[So](),
                t[So](),
                t.save();
                var i = t[Bx](.4102, 24.3613, 39.5898, 24.3613);
                i[Gx](0, Ap),
                i[Gx](.0788, Cp),
                i[Gx](.2046, qp),
                i[Gx](.3649, Up),
                i[Gx](.5432, Wp),
                i[Gx](.6798, Vp),
                i.addColorStop(.7462, Xp),
                i.addColorStop(.8508, Zp),
                i.addColorStop(.98, Rp),
                i[Gx](1, Kp),
                t[_f] = i,
                t[cf](),
                t.moveTo(.41, 16.649),
                t[rx](.633, 19.767, .871, 20.689, 1.094, 23.807000000000002),
                t[rx](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002),
                t[rx](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523),
                t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004),
                t.bezierCurveTo(38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005),
                t[rx](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005),
                t[rx](39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649),
                t.closePath(),
                t[Go](),
                t[Fo](),
                t[So](),
                t[af](),
                t[af](),
                t[_f] = Yp,
                t[cf](),
                t[lf](16.4, 25.185),
                t[rx](12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705),
                t.bezierCurveTo(3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999),
                t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998),
                t[rx](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998),
                t[rx](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998),
                t.bezierCurveTo(32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998),
                t[rx](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997),
                t[rx](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996),
                t[rx](23.289, 25.28, 19.824, 25.436, 16.4, 25.185),
                t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185),
                t[Yf](),
                t.fill(),
                t[Fo](),
                t.restore(),
                t[So](),
                t[af](),
                t[af](),
                t[af](),
                t.save(),
                t[af](),
                t.fillStyle = Jp,
                t.beginPath(),
                t.moveTo(5.21, 21.754),
                t[vf](8.188, 17.922),
                t[vf](9.53, 18.75),
                t.lineTo(15.956, 16.004),
                t.lineTo(18.547, 17.523),
                t.lineTo(12.074, 20.334),
                t[vf](13.464, 21.204),
                t[vf](5.21, 21.754),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t.restore(),
                t[So](),
                t[So](),
                t[af](),
                t.save(),
                t[af](),
                t[_f] = Jp,
                t[cf](),
                t[lf](17.88, 14.61),
                t[vf](9.85, 13.522),
                t.lineTo(11.703, 12.757),
                t[vf](7.436, 10.285),
                t[vf](10.783, 8.942),
                t.lineTo(15.091, 11.357),
                t.lineTo(16.88, 10.614),
                t.lineTo(17.88, 14.61),
                t[Yf](),
                t.fill(),
                t[Fo](),
                t.restore(),
                t[So](),
                t[af](),
                t[af](),
                t[_f] = Jp,
                t[cf](),
                t[lf](17.88, 14.61),
                t[vf](9.85, 13.522),
                t[vf](11.703, 12.757),
                t.lineTo(7.436, 10.285),
                t[vf](10.783, 8.942),
                t.lineTo(15.091, 11.357),
                t.lineTo(16.88, 10.614),
                t.lineTo(17.88, 14.61),
                t.closePath(),
                t[Go](),
                t[Fo](),
                t.restore(),
                t[So](),
                t.restore(),
                t[af](),
                t[af](),
                t[af](),
                t[_f] = Jp,
                t[cf](),
                t[lf](23.556, 15.339),
                t[vf](20.93, 13.879),
                t.lineTo(26.953, 11.304),
                t.lineTo(25.559, 10.567),
                t.lineTo(33.251, 9.909),
                t.lineTo(31.087, 13.467),
                t[vf](29.619, 12.703),
                t[vf](23.556, 15.339),
                t[Yf](),
                t[Go](),
                t.stroke(),
                t[So](),
                t.restore(),
                t[So](),
                t[af](),
                t[af](),
                t.save(),
                t[_f] = Jp,
                t.beginPath(),
                t[lf](30.028, 23.383),
                t.lineTo(24.821, 20.366),
                t[vf](22.915, 21.227),
                t[vf](21.669, 16.762),
                t[vf](30.189, 17.942),
                t.lineTo(28.33, 18.782),
                t.lineTo(33.579, 21.725),
                t[vf](30.028, 23.383),
                t[Yf](),
                t.fill(),
                t[Fo](),
                t[So](),
                t[So](),
                t[af](),
                t[af](),
                t[_f] = Jp,
                t[cf](),
                t[lf](30.028, 23.383),
                t[vf](24.821, 20.366),
                t[vf](22.915, 21.227),
                t[vf](21.669, 16.762),
                t.lineTo(30.189, 17.942),
                t[vf](28.33, 18.782),
                t[vf](33.579, 21.725),
                t[vf](30.028, 23.383),
                t[Yf](),
                t.fill(),
                t.stroke(),
                t.restore(),
                t.restore(),
                t[So](),
                t[So](),
                t[So](),
                t.restore()
            }
        },
        exchanger: {
            draw: function(t) {
                t.save(),
                t.translate(0, 0),
                t[cf](),
                t.moveTo(0, 0),
                t[vf](40, 0),
                t.lineTo(40, 40),
                t[vf](0, 40),
                t[Yf](),
                t.clip(),
                t[ff](0, 0),
                t[ff](0, 0),
                t[uf](1, 1),
                t[ff](0, 0),
                t[hd] = dp,
                t[cp] = Bm,
                t[rd] = qm,
                t[Ip] = 4,
                t.save(),
                t.save(),
                t[So](),
                t.save(),
                t[So](),
                t[af](),
                t[So](),
                t[af](),
                t[So](),
                t.save(),
                t.restore(),
                t[af](),
                t.restore(),
                t[af](),
                t[So](),
                t[So](),
                t[af]();
                var i = t[Bx](.2095, 20.7588, 39.4941, 20.7588);
                i[Gx](0, Qp),
                i[Gx](.0788, tE),
                i[Gx](.352, iE),
                i[Gx](.6967, nE),
                i[Gx](.8916, eE),
                i[Gx](.9557, sE),
                i.addColorStop(1, rE),
                t[_f] = i,
                t.beginPath(),
                t[lf](39.449, 12.417),
                t[vf](39.384, 9.424),
                t[rx](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024),
                t[rx](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002),
                t[rx](.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437),
                t.bezierCurveTo(1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094),
                t[rx](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089),
                t[rx](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996),
                t[rx](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997),
                t[rx](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997),
                t[vf](37.711, 30.316999999999997),
                t[vf](39.281, 16.498999999999995),
                t[rx](39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994),
                t[rx](39.515, 14.105, 39.449, 12.417, 39.449, 12.417),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t.restore(),
                t[af](),
                t[af](),
                t.save(),
                t[af](),
                t.restore(),
                t[af](),
                t.restore(),
                t[af](),
                t.restore(),
                t[af](),
                t[So](),
                t.save(),
                t[So](),
                t.save(),
                t[So](),
                t[af](),
                t[So](),
                t.save(),
                t[So](),
                t[af](),
                t[So](),
                t[So](),
                t.save();
                var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
                i[Gx](0, hE),
                i.addColorStop(.1455, aE),
                i[Gx](.2975, oE),
                i.addColorStop(.4527, fE),
                i[Gx](.6099, uE),
                i[Gx](.7687, cE),
                i.addColorStop(.9268, _E),
                i[Gx](.9754, dE),
                i.addColorStop(1, lE),
                t.fillStyle = i,
                t[cf](),
                t.moveTo(33.591, 24.763),
                t[rx](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003),
                t[rx](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003),
                t[rx](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004),
                t[rx](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004),
                t[rx](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004),
                t[rx](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005),
                t[rx](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004),
                t[rx](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005),
                t[rx](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005),
                t.bezierCurveTo(39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005),
                t[rx](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005),
                t[rx](37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007),
                t.bezierCurveTo(37.151, 24.271, 35.264, 24.77, 33.591, 24.763),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t[So](),
                t.restore(),
                t.restore(),
                t[af](),
                t[af](),
                t[af](),
                t[_f] = Jp,
                t[cf](),
                t.moveTo(10.427, 19.292),
                t[vf](5.735, 16.452),
                t.lineTo(12.58, 13.8),
                t[vf](12.045, 15.07),
                t.lineTo(20.482, 15.072),
                t[vf](19.667, 17.887),
                t[vf](11.029, 17.851),
                t[vf](10.427, 19.292),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t[So](),
                t[So](),
                t.save(),
                t[af](),
                t.fillStyle = Jp,
                t[cf](),
                t[lf](13.041, 13.042),
                t[vf](8.641, 10.73),
                t[vf](14.82, 8.474),
                t[vf](14.373, 9.537),
                t.lineTo(22.102, 9.479),
                t.lineTo(21.425, 11.816),
                t[vf](13.54, 11.85),
                t[vf](13.041, 13.042),
                t.closePath(),
                t.fill(),
                t[Fo](),
                t[So](),
                t[So](),
                t[af](),
                t.save(),
                t[_f] = Jp,
                t.beginPath(),
                t.moveTo(29.787, 16.049),
                t.lineTo(29.979, 14.704),
                t[vf](21.51, 14.706),
                t[vf](22.214, 12.147),
                t[vf](30.486, 12.116),
                t.lineTo(30.653, 10.926),
                t[vf](36.141, 13.4),
                t[vf](29.787, 16.049),
                t[Yf](),
                t.fill(),
                t[Fo](),
                t[So](),
                t[So](),
                t[af](),
                t[af](),
                t[_f] = Jp,
                t.beginPath(),
                t[lf](28.775, 23.14),
                t[vf](29.011, 21.49),
                t[vf](19.668, 21.405),
                t[vf](20.523, 18.295),
                t[vf](29.613, 18.338),
                t[vf](29.815, 16.898),
                t[vf](35.832, 19.964),
                t[vf](28.775, 23.14),
                t.closePath(),
                t.fill(),
                t[Fo](),
                t[So](),
                t[So](),
                t.restore(),
                t.restore()
            }
        },
        cloud: {
            draw: function(t) {
                t.save(),
                t[cf](),
                t[lf](0, 0),
                t[vf](90.75, 0),
                t.lineTo(90.75, 62.125),
                t.lineTo(0, 62.125),
                t[Yf](),
                t[Sp](),
                t[hd] = dp,
                t[cp] = Bm,
                t[rd] = qm,
                t[Ip] = 4,
                t[af]();
                var i = t[Bx](44.0054, 6.4116, 44.0054, 51.3674);
                i.addColorStop(0, "rgba(159, 160, 160, 0.7)"),
                i[Gx](.9726, vE),
                t.fillStyle = i,
                t[cf](),
                t.moveTo(57.07, 20.354),
                t[rx](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358),
                t.bezierCurveTo(54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001),
                t.bezierCurveTo(33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003),
                t[rx](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004),
                t[rx](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49),
                t[rx](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961),
                t.bezierCurveTo(34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995),
                t[rx](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994),
                t[rx](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999),
                t[rx](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999),
                t[rx](73.986, 27.436, 66.413, 20.354, 57.07, 20.354),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t[So](),
                t.restore()
            }
        },
        node: {
            width: 60,
            height: 100,
            draw: function(t) {
                t.save(),
                t[ff](0, 0),
                t[cf](),
                t[lf](0, 0),
                t[vf](40, 0),
                t.lineTo(40, 40),
                t.lineTo(0, 40),
                t[Yf](),
                t[Sp](),
                t.translate(0, 0),
                t[ff](0, 0),
                t[uf](1, 1),
                t[ff](0, 0),
                t[hd] = dp,
                t[cp] = Bm,
                t[rd] = qm,
                t[Ip] = 4,
                t[af](),
                t[_f] = bE,
                t.beginPath(),
                t[lf](13.948, 31.075),
                t.lineTo(25.914, 31.075),
                t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075),
                t.lineTo(25.914, 34.862),
                t[sx](25.914, 34.862, 25.914, 34.862),
                t.lineTo(13.948, 34.862),
                t[sx](13.948, 34.862, 13.948, 34.862),
                t[vf](13.948, 31.075),
                t.quadraticCurveTo(13.948, 31.075, 13.948, 31.075),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t[So](),
                t.save(),
                t[_f] = gE,
                t[cf](),
                t[lf](29.679, 35.972),
                t[rx](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244),
                t[vf](11.456, 37.244),
                t[rx](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972),
                t.lineTo(10.183, 36.136),
                t[rx](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863),
                t[vf](28.407, 34.863),
                t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136),
                t[vf](29.678, 35.972),
                t.closePath(),
                t[Go](),
                t[Fo](),
                t.restore(),
                t.save(),
                t[_f] = gE,
                t[cf](),
                t.moveTo(.196, 29.346),
                t[rx](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075),
                t.lineTo(37.936, 31.075),
                t.bezierCurveTo(38.891, 31.075, 39.665, 30.301, 39.665, 29.346),
                t[vf](39.665, 27.174),
                t[vf](.196, 27.174),
                t[vf](.196, 29.346),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t.restore(),
                t[af](),
                t[_f] = yE,
                t.beginPath(),
                t[lf](37.937, 3.884),
                t.lineTo(1.926, 3.884),
                t[rx](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614),
                t[vf](.19699999999999984, 27.12),
                t[vf](39.666000000000004, 27.12),
                t[vf](39.666000000000004, 5.615),
                t[rx](39.665, 4.657, 38.892, 3.884, 37.937, 3.884),
                t[Yf](),
                t.fill(),
                t.stroke(),
                t[So](),
                t.save(),
                t.save(),
                t[So](),
                t.save(),
                t[So](),
                t[So](),
                t[af]();
                var i = t[Bx](6.9609, 2.9341, 32.9008, 28.874);
                i[Gx](0, mE),
                i[Gx](1, xE),
                t[_f] = i,
                t[cf](),
                t.moveTo(35.788, 6.39),
                t[vf](4.074, 6.39),
                t[rx](3.315, 6.39, 2.702, 7.003, 2.702, 7.763),
                t[vf](2.702, 24.616),
                t[vf](37.159, 24.616),
                t[vf](37.159, 7.763),
                t[rx](37.159, 7.003, 36.546, 6.39, 35.788, 6.39),
                t.closePath(),
                t[Go](),
                t[Fo](),
                t[So](),
                t[So]()
            }
        },
        group: {
            draw: function(t) {
                t[af](),
                t[ff](0, 0),
                t[cf](),
                t.moveTo(0, 0),
                t[vf](47.75, 0),
                t[vf](47.75, 40),
                t[vf](0, 40),
                t.closePath(),
                t[Sp](),
                t[ff](0, 0),
                t[ff](0, 0),
                t.scale(1, 1),
                t[ff](0, 0),
                t.strokeStyle = dp,
                t.lineCap = Bm,
                t.lineJoin = qm,
                t[Ip] = 4,
                t.save(),
                t[af](),
                t.fillStyle = bE,
                t.beginPath(),
                t.moveTo(10.447, 26.005),
                t[vf](18.847, 26.005),
                t[sx](18.847, 26.005, 18.847, 26.005),
                t[vf](18.847, 28.663),
                t[sx](18.847, 28.663, 18.847, 28.663),
                t[vf](10.447, 28.663),
                t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663),
                t[vf](10.447, 26.005),
                t[sx](10.447, 26.005, 10.447, 26.005),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t[So](),
                t.save(),
                t[_f] = gE,
                t.beginPath(),
                t.moveTo(21.491, 29.443),
                t[rx](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338),
                t[vf](8.698, 30.338),
                t[rx](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443),
                t[vf](7.8020000000000005, 29.557000000000002),
                t.bezierCurveTo(7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003),
                t[vf](20.597, 28.662000000000003),
                t[rx](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002),
                t[vf](21.491, 29.443),
                t.closePath(),
                t[Go](),
                t[Fo](),
                t[So](),
                t[af](),
                t.fillStyle = gE,
                t[cf](),
                t[lf](.789, 24.79),
                t.bezierCurveTo(.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005),
                t[vf](27.289, 26.005),
                t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79),
                t[vf](28.504, 23.267),
                t[vf](.789, 23.267),
                t[vf](.789, 24.79),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t.restore(),
                t.save(),
                t[_f] = yE,
                t[cf](),
                t[lf](27.289, 6.912),
                t[vf](2.006, 6.912),
                t[rx](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126),
                t[vf](.7889999999999997, 23.227),
                t[vf](28.503999999999998, 23.227),
                t[vf](28.503999999999998, 8.126),
                t[rx](28.504, 7.455, 27.961, 6.912, 27.289, 6.912),
                t[Yf](),
                t.fill(),
                t.stroke(),
                t[So](),
                t[af](),
                t[af](),
                t[So](),
                t[af](),
                t[So](),
                t.restore(),
                t[af]();
                var i = t[Bx](5.54, 6.2451, 23.7529, 24.458);
                i.addColorStop(0, mE),
                i[Gx](1, xE),
                t.fillStyle = i,
                t.beginPath(),
                t[lf](25.78, 8.671),
                t.lineTo(3.514, 8.671),
                t.bezierCurveTo(2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635),
                t.lineTo(2.549, 21.466),
                t[vf](26.743, 21.466),
                t.lineTo(26.743, 9.636),
                t.bezierCurveTo(26.743, 9.102, 26.312, 8.671, 25.78, 8.671),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t[So](),
                t[So](),
                t[af](),
                t[af](),
                t[_f] = bE,
                t.beginPath(),
                t.moveTo(27.053, 33.602),
                t[vf](36.22, 33.602),
                t[sx](36.22, 33.602, 36.22, 33.602),
                t[vf](36.22, 36.501),
                t[sx](36.22, 36.501, 36.22, 36.501),
                t[vf](27.053, 36.501),
                t[sx](27.053, 36.501, 27.053, 36.501),
                t.lineTo(27.053, 33.602),
                t.quadraticCurveTo(27.053, 33.602, 27.053, 33.602),
                t[Yf](),
                t.fill(),
                t[Fo](),
                t[So](),
                t.save(),
                t[_f] = gE,
                t[cf](),
                t[lf](39.104, 37.352),
                t[rx](39.104, 37.891, 38.67, 38.327, 38.13, 38.327),
                t[vf](25.143, 38.327),
                t.bezierCurveTo(24.602, 38.327, 24.166, 37.891, 24.166, 37.352),
                t[vf](24.166, 37.477999999999994),
                t[rx](24.166, 36.937, 24.602, 36.501, 25.143, 36.501),
                t[vf](38.131, 36.501),
                t[rx](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994),
                t[vf](39.105, 37.352),
                t[Yf](),
                t.fill(),
                t[Fo](),
                t[So](),
                t[af](),
                t[_f] = gE,
                t[cf](),
                t[lf](16.514, 32.275),
                t.bezierCurveTo(16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601),
                t.lineTo(45.433, 33.601),
                t[rx](46.166, 33.601, 46.758, 33.005, 46.758, 32.275),
                t[vf](46.758, 30.607999999999997),
                t.lineTo(16.514, 30.607999999999997),
                t[vf](16.514, 32.275),
                t[Yf](),
                t[Go](),
                t.stroke(),
                t[So](),
                t[af](),
                t[_f] = yE,
                t[cf](),
                t[lf](45.433, 12.763),
                t[vf](17.839, 12.763),
                t[rx](17.107, 12.763, 16.514, 13.356, 16.514, 14.089),
                t[vf](16.514, 30.57),
                t.lineTo(46.757999999999996, 30.57),
                t[vf](46.757999999999996, 14.088),
                t[rx](46.758, 13.356, 46.166, 12.763, 45.433, 12.763),
                t[Yf](),
                t[Go](),
                t.stroke(),
                t[So](),
                t[af](),
                t[af](),
                t[So](),
                t[af](),
                t[So](),
                t[So](),
                t[af](),
                i = t.createLinearGradient(21.6973, 12.0352, 41.5743, 31.9122),
                i[Gx](0, mE),
                i[Gx](1, xE),
                t[_f] = i,
                t.beginPath(),
                t[lf](43.785, 14.683),
                t.lineTo(19.486, 14.683),
                t.bezierCurveTo(18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735),
                t[vf](18.433, 28.649),
                t[vf](44.837, 28.649),
                t[vf](44.837, 15.734),
                t[rx](44.838, 15.153, 44.367, 14.683, 43.785, 14.683),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t[So](),
                t[So](),
                t.save(),
                t[of] = .5,
                t[cf](),
                t.moveTo(23.709, 36.33),
                t.lineTo(4.232, 36.33),
                t[vf](4.232, 27.199),
                t.lineTo(5.304, 27.199),
                t[vf](5.304, 35.259),
                t[vf](23.709, 35.259),
                t.lineTo(23.709, 36.33),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t[So](),
                t[So]()
            }
        },
        subnetwork: {
            draw: function(t) {
                t.save(),
                t[ff](0, 0),
                t[cf](),
                t[lf](0, 0),
                t[vf](60.75, 0),
                t[vf](60.75, 42.125),
                t[vf](0, 42.125),
                t[Yf](),
                t[Sp](),
                t[ff](0, .26859504132231393),
                t[uf](.6694214876033058, .6694214876033058),
                t[ff](0, 0),
                t[hd] = dp,
                t[cp] = Bm,
                t[rd] = qm,
                t.miterLimit = 4,
                t[af](),
                t[af](),
                t[So](),
                t[af](),
                t[So](),
                t[So](),
                t.save();
                var i = t[Bx](43.6724, -2.7627, 43.6724, 59.3806);
                i[Gx](0, "rgba(159, 160, 160, 0.7)"),
                i[Gx](.9726, vE),
                t[_f] = i,
                t[cf](),
                t.moveTo(61.732, 16.509),
                t[rx](61.686, 16.509, 61.644, 16.515, 61.599, 16.515),
                t[rx](58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006),
                t[rx](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415),
                t[rx](9.09, 20.566, 2.229, 28.136, 2.229, 37.326),
                t.bezierCurveTo(2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006),
                t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001),
                t.bezierCurveTo(31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001),
                t[rx](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001),
                t[rx](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014),
                t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001),
                t.bezierCurveTo(85.116, 26.298, 74.646, 16.509, 61.732, 16.509),
                t[Yf](),
                t[Go](),
                t.stroke(),
                t[So](),
                t[af](),
                t.save(),
                t.fillStyle = bE,
                t[cf](),
                t.moveTo(34.966, 44.287),
                t.lineTo(45.112, 44.287),
                t[sx](45.112, 44.287, 45.112, 44.287),
                t[vf](45.112, 47.497),
                t[sx](45.112, 47.497, 45.112, 47.497),
                t[vf](34.966, 47.497),
                t[sx](34.966, 47.497, 34.966, 47.497),
                t[vf](34.966, 44.287),
                t[sx](34.966, 44.287, 34.966, 44.287),
                t.closePath(),
                t.fill(),
                t.stroke(),
                t.restore(),
                t[af](),
                t[_f] = pE,
                t[cf](),
                t[lf](48.306, 48.439),
                t.bezierCurveTo(48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52),
                t[vf](32.854, 49.52),
                t[rx](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439),
                t[vf](31.771, 48.578),
                t[rx](31.771, 47.981, 32.253, 47.497, 32.854, 47.497),
                t[vf](47.226, 47.497),
                t[rx](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578),
                t[vf](48.306, 48.439),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t.restore(),
                t[af](),
                t.fillStyle = EE,
                t[cf](),
                t[lf](23.302, 42.82),
                t.bezierCurveTo(23.302, 43.63, 23.96, 44.287, 24.772, 44.287),
                t[vf](55.308, 44.287),
                t[rx](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82),
                t[vf](56.775, 40.98),
                t[vf](23.302, 40.98),
                t[vf](23.302, 42.82),
                t[Yf](),
                t[Go](),
                t[Fo](),
                t[So](),
                t[af](),
                t[_f] = yE,
                t[cf](),
                t.moveTo(55.307, 21.229),
                t.lineTo(24.771, 21.229),
                t[rx](23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695),
                t[vf](23.301000000000002, 40.933),
                t[vf](56.774, 40.933),
                t[vf](56.774, 22.695),
                t[rx](56.774, 21.884, 56.119, 21.229, 55.307, 21.229),
                t[Yf](),
                t.fill(),
                t[Fo](),
                t.restore(),
                t[af](),
                t[af](),
                t[So](),
                t.save(),
                t[So](),
                t[So](),
                t[af](),
                i = t[Bx](29.04, 20.4219, 51.0363, 42.4181),
                i[Gx](0, mE),
                i.addColorStop(1, xE),
                t.fillStyle = i,
                t[cf](),
                t[lf](53.485, 23.353),
                t.lineTo(26.592, 23.353),
                t.bezierCurveTo(25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003),
                t[vf](25.427, 38.807),
                t[vf](54.647, 38.807),
                t[vf](54.647, 24.517000000000003),
                t[rx](54.648, 23.873, 54.127, 23.353, 53.485, 23.353),
                t.closePath(),
                t[Go](),
                t.stroke(),
                t[So](),
                t[So](),
                t[So]()
            }
        }
    };
    for (var qq in Hq)
        Mn(wE + qq, Hq[qq]);
    var Uq = function() {
        this[bu] = !1;
        var t = this._fd;
        t[so]();
        var i = this[Jf] || 0
          , n = this._7w.x + i / 2
          , e = this._7w.y + i / 2
          , s = this._7w[ca] - i
          , r = this._7w[eo] - i
          , h = Vn[sh](this, {
            x: n,
            y: e
        });
        Jn(t, h.x, h.y, !0),
        h = Vn.call(this, {
            x: n + s,
            y: e
        }),
        Jn(t, h.x, h.y),
        h = Vn[sh](this, {
            x: n + s,
            y: e + r
        }),
        Jn(t, h.x, h.y),
        h = Vn.call(this, {
            x: n,
            y: e + r
        }),
        Jn(t, h.x, h.y),
        this[_u] && (h = Vn[sh](this, {
            x: this[hu],
            y: this[au]
        }),
        Jn(t, h.x, h.y)),
        i && t[Qf](i / 2)
    }
      , Wq = 20
      , Vq = {
        _fi: !1,
        _jn: null,
        _d1: 0,
        _kw: -1,
        _k2: null,
        _ev: function(t) {
            this._jn || (this._jn = [],
            this._in = pq),
            this._jn[uh](t),
            this._eu(),
            this._ki()
        },
        _ki: function() {
            if (!this._k2) {
                var t = this;
                this._k2 = setTimeout(function i() {
                    return t._eu() !== !1 ? void (t._k2 = setTimeout(i, t._fr())) : void delete t._k2
                }, this._fr())
            }
        },
        _fr: function() {
            return Math.max(Wq, this._jn[this._kw][TE])
        },
        _eu: function() {
            return this._fs(this._kw + 1)
        },
        _fs: function(t) {
            if (this._fi)
                t %= this._d1;
            else if (t >= this._jn[nh])
                return !1;
            if (this._kw == t)
                return !1;
            this._kw = t;
            var i = this._jn[this._kw]
              , n = i[ME];
            return n || (i[ME] = n = Di(this[ca], this[eo]),
            n.g[Ff](i.data, 0, 0),
            n[yx] = i[yx]),
            this._k5 = n,
            this[Xf] = !0,
            this._e1()
        },
        _mjq: function() {
            return this._jn ? (this._fi = !0,
            this._d1 = this._jn[nh],
            1 == this._d1 ? this._e1() : void this._ki()) : void this._hg()
        },
        _l6: function() {
            this._k2 && (clearTimeout(this._k2),
            delete this._k2)
        },
        _e1: function() {
            var t = this[cx].listeners;
            if (!t || !t.length)
                return !1;
            for (var i = new oH(this,Ax,Px,this._k5), n = 0, e = t[nh]; e > n; n++) {
                var s = t[n];
                s.scope._j5 && s[Lv]._j5._hzed ? (t[rh](n, 1),
                n--,
                e--) : s.onEvent.call(s[Lv], i)
            }
            return t.length > 0
        },
        _mm9: function(t, i) {
            this[cx].addListener(t, i),
            this._fi && !this._k2 && this._ki()
        },
        _6z: function(t, i) {
            this[cx][Cv](t, i),
            this[cx][kE]() || this._l6()
        },
        _hz: function() {
            this._l6(),
            this._dispatcher[so]()
        },
        _f4: function() {
            var t = this._k5[OE];
            return t || (this._k5._mlufferedImage = t = new zq(this._k5,1)),
            t
        }
    }
      , Xq = function(t) {
        return t.reduce(function(t, i) {
            return 2 * t + i
        }, 0)
    }
      , Zq = function(t) {
        for (var i = [], n = 7; n >= 0; n--)
            i[uh](!!(t & 1 << n));
        return i
    }
      , Kq = function(t) {
        this[nf] = t,
        this.len = this.data[nh],
        this.pos = 0,
        this[SE] = function() {
            if (this.pos >= this[nf].length)
                throw new Error("Attempted to read past end of stream.");
            return 255 & t[Nu](this.pos++)
        }
        ,
        this[IE] = function(t) {
            for (var i = [], n = 0; t > n; n++)
                i[uh](this[SE]());
            return i
        }
        ,
        this[AE] = function(t) {
            for (var i = "", n = 0; t > n; n++)
                i += String[PE](this[SE]());
            return i
        }
        ,
        this[jE] = function() {
            var t = this[IE](2);
            return (t[1] << 8) + t[0]
        }
    }
      , Jq = function(t, i, n) {
        for (var e, s, r = 0, h = function(t) {
            for (var n = 0, e = 0; t > e; e++)
                i[Nu](r >> 3) & 1 << (7 & r) && (n |= 1 << e),
                r++;
            return n
        }, a = [], o = 1 << t, f = o + 1, u = t + 1, c = [], _ = function() {
            c = [],
            u = t + 1;
            for (var i = 0; o > i; i++)
                c[i] = [i];
            c[o] = [],
            c[f] = null
        }, d = 0; s = e,
        e = h(u),
        !(d++ > n); )
            if (e !== o) {
                if (e === f)
                    break;
                if (e < c.length)
                    s !== o && c[uh](c[s].concat(c[e][0]));
                else {
                    if (e !== c[nh])
                        throw new Error(LE);
                    c[uh](c[s][hh](c[s][0]))
                }
                a[uh][dh](a, c[e]),
                c.length === 1 << u && 12 > u && u++
            } else
                _();
        return a
    }
      , Qq = function(t, i) {
        i || (i = {});
        var n = function(i) {
            for (var n = [], e = 0; i > e; e++)
                n[uh](t[IE](3));
            return n
        }
          , e = function() {
            var i, n;
            n = "";
            do
                i = t[SE](),
                n += t[AE](i);
            while (0 !== i);return n
        }
          , s = function() {
            var e = {};
            if (e.sig = t[AE](3),
            e.ver = t[AE](3),
            CE !== e.sig)
                throw new Error(RE);
            e[ca] = t.readUnsigned(),
            e.height = t[jE]();
            var s = Zq(t.readByte());
            e[DE] = s.shift(),
            e[NE] = Xq(s.splice(0, 3)),
            e.sorted = s[$E](),
            e.gctSize = Xq(s[rh](0, 3)),
            e[BE] = t.readByte(),
            e[FE] = t[SE](),
            e[DE] && (e.gct = n(1 << e.gctSize + 1)),
            i.hdr && i.hdr(e)
        }
          , r = function(n) {
            var s = function(n) {
                var e = (t[SE](),
                Zq(t[SE]()));
                n[GE] = e[rh](0, 3),
                n[Ou] = Xq(e[rh](0, 3)),
                n[zE] = e[$E](),
                n[Tu] = e[$E](),
                n.delayTime = t[jE](),
                n[Mu] = t[SE](),
                n.terminator = t.readByte(),
                i.gce && i.gce(n)
            }
              , r = function(t) {
                t[YE] = e(),
                i.com && i.com(t)
            }
              , h = function(n) {
                t.readByte(),
                n[HE] = t.readBytes(12),
                n[qE] = e(),
                i.pte && i.pte(n)
            }
              , a = function(n) {
                var s = function(n) {
                    t[SE](),
                    n[UE] = t[SE](),
                    n[WE] = t[jE](),
                    n[VE] = t[SE](),
                    i.app && i.app.NETSCAPE && i.app[XE](n)
                }
                  , r = function(t) {
                    t[ZE] = e(),
                    i.app && i.app[t.identifier] && i.app[t.identifier](t)
                };
                switch (t[SE](),
                n.identifier = t[AE](8),
                n[KE] = t.read(3),
                n[JE]) {
                case "NETSCAPE":
                    s(n);
                    break;
                default:
                    r(n)
                }
            }
              , o = function(t) {
                t[nf] = e(),
                i[UE] && i[UE](t)
            };
            switch (n[QE] = t[SE](),
            n[QE]) {
            case 249:
                n.extType = tw,
                s(n);
                break;
            case 254:
                n.extType = iw,
                r(n);
                break;
            case 1:
                n[nw] = ew,
                h(n);
                break;
            case 255:
                n[nw] = sw,
                a(n);
                break;
            default:
                n[nw] = UE,
                o(n)
            }
        }
          , h = function(s) {
            var r = function(t, i) {
                for (var n = new Array(t[nh]), e = t.length / i, s = function(e, s) {
                    var r = t[ah](s * i, (s + 1) * i);
                    n[rh][dh](n, [e * i, i].concat(r))
                }, r = [0, 4, 2, 1], h = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++)
                    for (var f = r[o]; e > f; f += h[o])
                        s(f, a),
                        a++;
                return n
            };
            s.leftPos = t.readUnsigned(),
            s[Pu] = t[jE](),
            s.width = t[jE](),
            s[eo] = t[jE]();
            var h = s[ca] * s[eo]
              , a = Zq(t.readByte());
            s[Su] = a[$E](),
            s[rw] = a[$E](),
            s[hw] = a[$E](),
            s.reserved = a.splice(0, 2),
            s[aw] = Xq(a[rh](0, 3)),
            s.lctFlag && (s.lct = n(1 << s[aw] + 1)),
            s[ow] = t[SE]();
            var o = e();
            s[Au] = Jq(s[ow], o, h),
            s[rw] && (s[Au] = r(s[Au], s[ca])),
            i.img && i.img(s)
        }
          , a = function() {
            var n = {};
            switch (n[fw] = t[SE](),
            String[PE](n[fw])) {
            case "!":
                n.type = uw,
                r(n);
                break;
            case ",":
                n[qo] = G_,
                h(n);
                break;
            case ";":
                n[qo] = cw,
                i.eof && i.eof(n);
                break;
            default:
                throw new Error(_w + n[fw].toString(16))
            }
            cw !== n.type && setTimeout(a, 0)
        }
          , o = function() {
            s(),
            setTimeout(a, 0)
        };
        o()
    }
      , tU = "";
    i.addEventListener && i[kb](dw, function(t) {
        if (t[Ya] && t[lw] && t.altKey && 73 == t[vw]) {
            var i = eq[Ef] + bw + eq[gw] + yw + eq[mw] + ko + eq[xw] + ko + eq[pw] + tU;
            eq[Wy](i)
        }
    }, !1);
    var iU = Ew;
    tU = ww + decodeURIComponent(Tw);
    var nU, eU, sU, rU = t, hU = Mw, aU = kw, oU = Ow, fU = Sw, uU = Iw, cU = Aw, _U = Pw, dU = jw, lU = Lw, vU = Cw, bU = Rw, gU = Dw, yU = Nw, mU = $w, xU = Bw, pU = Fw, EU = Gw, wU = zw, TU = Yw, MU = Hw, kU = qw, OU = rU[fU + Uw];
    OU && (eU = rU[mU + Ww][uU + Vw],
    OU[sh](rU, re, pU),
    OU[sh](rU, he, TU),
    OU[sh](rU, function() {
        IU && IU == iU && ($U = !1)
    }, EU));
    var SU, IU, AU, PU = 111, jU = function(t, i) {
        i || (i = Xw + aU + Zw);
        try {
            sU[sh](t, i, 6 * PU, 1 * PU)
        } catch (n) {}
    }, LU = !0, CU = !0, RU = !0, DU = !0, NU = !0, $U = !0, BU = 2048, FU = function(t, i) {
        return se ? se(t, i) || "" : void 0
    };
    if (i[_o]) {
        var GU = i[_o](Kw);
        GU.style[Jw] = Z_,
        GU.onload = function(t) {
            var i = t[Qw][tT]
              , n = eU;
            if ("" === n || iT == n || nT == n)
                return void this[_x].parentNode[_b](this[_x]);
            var e = i[eT][PE];
            i[fU + Uw](function() {
                ee(e) != SU && (lW[lh]._j7 = null)
            }, TU),
            this.parentNode.parentNode[_b](this[_x])
        }
        ;
        var zU = i.createElement(B_);
        zU[Ea][ca] = ed,
        zU[Ea].height = ed,
        zU[Ea][sT] = X_,
        zU.appendChild(GU),
        i[Hd][Ju](zU)
    }
    if (i[xU + rT]) {
        var YU = i[xU + rT](lU + hT);
        YU[Ea][Jw] = Z_,
        YU[Lu] = function(t) {
            var i = aT
              , n = t[Qw][i + oT];
            nU = n[fT].now();
            var e = n[vU + bU + uT + gU + cT][yU + qo];
            sU = e[hU + _T],
            RY && (n = rU);
            var s = n[fU + Uw];
            s[sh](rU, ue, TU),
            s[sh](rU, ce, MU),
            s.call(rU, de, EU),
            s.call(rU, ae, wU),
            s[sh](rU, fe, kU),
            s[sh](rU, _e, TU),
            s.call(rU, oe, TU),
            this[_x][_x][_b](this[_x])
        }
        ;
        var zU = i[_o](B_);
        zU.style[ca] = ed,
        zU[Ea].height = ed,
        zU.style.overflow = X_,
        zU[Ju](YU),
        i[Hd][Ju](zU)
    }
    var HU = {
        position: dT,
        userSelect: Z_,
        outline: Z_,
        transformOrigin: lT,
        "-webkit-tap-highlight-color": dp
    }
      , qU = vT;
    mi(ta + qU, HU);
    var UU = {
        width: J_,
        height: J_,
        position: K_,
        overflow: X_,
        textAlign: $a,
        outline: Z_,
        tapHighlightColor: dp,
        userSelect: Z_
    }
      , WU = bT;
    mi(ta + WU, UU);
    var VU = gT
      , XU = {
        overflow: X_,
        "text-align": $a,
        "-webkit-tap-highlight-color": dp,
        outline: Z_
    };
    mi(ta + VU, XU);
    var ZU = S(function(t) {
        this[yT] = new JU,
        this._mb = new HY,
        this._87 = [],
        this[mT] = [],
        this[xT] = [],
        this._8d = {},
        this[Do] = new KY,
        this._jh = new sW,
        this[pT] = new rW,
        this._jh[Av] = function(t) {
            this._6n(t)
        }
        [kh](this),
        this._mj0(),
        this[ET](t)
    }, {
        _mm4: null,
        _ip: null,
        _mb: null,
        _mjk: null,
        _jh: null,
        _mlp: function(t) {
            return t ? (this[wT] || (this._63s = {}),
            this[wT][t] ? !1 : (this[wT][t] = !0,
            void this[TT]())) : this[TT]()
        },
        _9y: function(t) {
            return this[wT] && this[wT][t]
        },
        isInvalidate: function() {
            return this._63
        },
        clear: function() {
            this._mb.clear(),
            this[mT].length = 0,
            this._8d = {},
            this[$c] = !1,
            this.invalidate()
        },
        _69: function() {
            this._mlp(MT),
            this._2c()
        },
        _2c: function() {
            this[kT](OT)
        },
        invalidate: function(t) {
            (t || !this._63) && (this._63 = !0,
            this._l6 || (this[ST] = requestAnimationFrame(this._ex.bind(this))))
        },
        _6u: function(t) {
            return this._l6 = t,
            t ? void (this[ST] && (cancelAnimationFrame(this[ST]),
            this._j7ingID = null)) : void (this._63 && this[TT](!0))
        },
        _ex: function() {
            this[ST] = null,
            this._63 = !1;
            var t = this._mm6;
            this._mm6 || (this[IT](),
            this[$c] = !0),
            this[AT](!t),
            this._31(),
            this._j7(),
            this._1q()
        },
        _mlo: function(t) {
            this[PT] = t || this[jT],
            (t || this[wT][MT]) && this._9h(),
            (t || this[wT][LT]) && this._6h(),
            this[CT](t),
            this._41(t),
            this._63s = {}
        },
        _31: function() {
            this[mT][nh] = 0;
            var t = this[pT];
            if (this._mb[Du](function(i) {
                if (i[RT] !== !1) {
                    var n = this[DT](i);
                    t[NT](n.x, n.y, n[ca], n.height) && this[mT][uh](i)
                }
            }, this),
            this[mT] = this._hx(this[mT]),
            !this[PT]) {
                var i = this[yT];
                this[xT][nh] = 0,
                i[$T](this[pT]),
                i._h0() || this._mjk.forEach(function(t) {
                    var n = this[DT](t);
                    i._en(n.x, n.y, n[ca], n[eo]) && this[xT][uh](t)
                }, this)
            }
        },
        _hx: function(t) {
            return RY ? t = d(t, this._9w) : t.sort(this._9w),
            t
        },
        _9w: function(t, i) {
            return t = t[BT] || 0,
            i = i[BT] || 0,
            t - i
        },
        _mmw: function(t) {
            return t[FT]
        },
        _j7: function() {
            if (this._mmn)
                return this._dw(),
                this._6i(!0),
                void this[GT](this._mjtx, this[mT]);
            this._6i(this[zT]);
            var t = this[yT]
              , i = this._mjtx;
            i[af](),
            this._mluffer && (be(i),
            i[fd](this[zT][lo], this._mluffer.x, this[zT].y)),
            t._if(i, this._du[kh](this)),
            this._dw(),
            this[GT](i, this._l3ingList),
            i[So]()
        },
        _6i: function(t) {
            this._mlpCanvasSizeFlag ? (this[YT] = !1,
            this._ip[bo](this._width, this[xx])) : t && ve(this._ip)
        },
        _9h: function() {
            var t = this[ca]
              , i = this[eo];
            return this[mx] == t && this[xx] == i ? !1 : (this[mx] = t,
            this[xx] = i,
            void (this[YT] = !0))
        },
        _41: function(t) {
            if (!t && !this._63s.viewport)
                return !1;
            var i = this._jh.reverseTransform([0, 0])
              , n = this.scale
              , e = this[mx] / n
              , s = this[xx] / n
              , r = this[Uo]
              , h = this[pT];
            if (h.x == i[0] && h.y == i[1] && h[ca] == e && h[eo] == s && h[Uo] == r)
                return !1;
            var a = h[ep]();
            return this._viewport.set(i[0], i[1], e, s, r, n),
            this._30(this[pT], a, t),
            !0
        },
        _30: function(t, i, n) {
            this._mmn || n || (this[zT] = this._fm(i, t))
        },
        _6n: function() {
            if (this._mm6) {
                if (this._l6) {
                    var t;
                    this[HT] ? this[HT][qT] = t = iW.mul([], this._jh.m, iW.invert([], this[HT].m)) : t = this._jh.m,
                    this._5n(t)
                }
                this[kT](LT),
                this._2c()
            }
        },
        _5n: function(t) {
            this[UT] = t,
            hW[Vc](this._ip, Y_, t ? WT + t.join(Uh) + ")" : "")
        },
        _6h: function() {
            var t = this[HT];
            if (this._mjurrentMatrix = {
                tx: this._jh.m[4],
                ty: this._jh.m[5],
                m: this._jh.m[ah](),
                scale: this._jh._fv(),
                rotate: this._jh._dr()
            },
            this[UT] && this._5n(null),
            !this._mmn) {
                if (this._2n(this[HT], t),
                !t || t.scale != this[HT][uf])
                    return this._72(this._mjurrentMatrix[uf], t ? t[uf] : null),
                    void (this._mmn = !0);
                if (!t || t[Uo] != this[HT][Uo])
                    return this._5q(this[HT][Uo], t ? t.rotate : null),
                    void (this._mmn = !0);
                var i = t.m[4] - this[HT].m[4]
                  , n = t.m[5] - this._mjurrentMatrix.m[5]
                  , e = this[ho];
                i *= e,
                n *= e;
                var s = 1e-4;
                (Math.abs(i - Math[Gf](i)) > s || Math.abs(n - Math[Gf](n)) > s) && (this[PT] = !0)
            }
        },
        _6e: function() {
            var t = this.bounds
              , i = t.clone();
            t[so](),
            this._mb.forEach(function(i) {
                i[RT] !== !1 && t.add(this._mmw(i))
            }, this),
            t[Zu](i) || this._2z(t, i)
        },
        _2z: function() {},
        _mm6: !1,
        _mj7: function() {},
        _95: function(t) {
            var i = t.ratio;
            t[uf](i, i),
            t[Y_][dh](t, this._jh.m)
        },
        render: function(t, i) {
            i && i[nh] && (t[af](),
            this._95(t),
            i[Du](function(i) {
                if (t[af](),
                i.visible !== !1)
                    try {
                        i[GT](t)
                    } catch (n) {
                        console[ea](n)
                    }
                t[So]()
            }, this),
            t[So]())
        },
        setParent: function(t) {
            N(t) && (t = i[VT](t)),
            this._m0 != t && (this._m0 && this[XT] && (R(this._m0, VU),
            this._m0[_b](this[XT])),
            this._m0 = t,
            this._m0 && (C(this._m0, VU),
            this._m0[Ju](this._67()),
            this._69()))
        },
        _67: function() {
            return this._mm4 || this._mj0(),
            this[XT]
        },
        _mj0: function() {
            var t = Di(!0);
            ie(t.g),
            t[Sh] = qU;
            var n = i[_o](B_);
            return n[kb](vg, function(t) {
                return i[ZT] == this ? (t[Bh] && t.preventDefault(),
                !1) : void 0
            }
            .bind(n), !1),
            n[Sh] = WU,
            n[Ju](t),
            n.tabIndex = 0,
            this._ip = t,
            this[XT] = n,
            this[KT] = this._ip[wf](vo),
            t
        },
        toLogical: function(t, i) {
            return t instanceof Object && (Q(t) && (t = this._86(t)),
            Array[Nh](t) ? (i = t[1] || 0,
            t = t[0] || 0) : (i = t.y || 0,
            t = t.x || 0)),
            this._jh.reverseTransform([t, i])
        },
        toCanvas: function(t, i) {
            return this._jh[Y_]([t, i])
        },
        _86: function(t) {
            return pi(t, this[XT])
        },
        _ef: function(t, i, n) {
            if (t.hitTest instanceof Function)
                return t.hitTest(i, n);
            var e = this._mmw(t);
            return e ? n ? KY[NT](e.x, e.y, e.width, e.height, i[0] - n, i[1] - n, n + n, n + n) : KY[NT](e.x, e.y, e[ca], e[eo], i[0], i[1]) : t
        },
        hitTest: function(t, i) {
            return this._8f(t, i)
        },
        _8f: function(t, i) {
            i = this._90(i),
            t = this[JT](t);
            for (var n, e = this._mjk[nh]; --e >= 0; )
                if (n = this[mT][e],
                this._ef(n, t, i))
                    return n
        },
        _90: function(t) {
            return (t === n || null === t) && (t = YY[wd]),
            t ? t / this[uf] : 0
        },
        getUIByMouseEvent: function(t, i) {
            if (t[QT])
                return this._mb[tM](t[QT]);
            var n = this._8f(t, i);
            return t[QT] = n ? n.id : -1,
            n
        },
        _8d: null,
        invalidateUI: function(t) {
            this._8d[t.id] = t,
            this[TT]()
        },
        _9q: function(t) {
            t[Co]instanceof Function && t.validate(this)
        },
        _mj9: function(t, i) {
            t[iM] && this._fn(t.__iz);
            var n = t[RT];
            if (t.__hp = this._eh(t, i),
            !t[RT])
                return n;
            var e = t[iM];
            this._9q(t);
            var s = this._mmw(t);
            t.__iz = {
                x: s.x,
                y: s.y,
                width: s[ca],
                height: s[eo]
            };
            var r = t[RT] !== n || !KY[Zu](e, s);
            return r && t.__iz && this._fn(t[iM]),
            r
        },
        _eh: function(t) {
            return t.visible !== !1
        },
        _$p: function(t) {
            this._mb[Du](function(i) {
                this._mj9(i, t)
            }, this),
            this._8d = {},
            this._6e()
        },
        _mmc: function(t) {
            var i = this.scale;
            if (t)
                return this._$p(i);
            var n = this[nM];
            this[nM] = !1;
            for (var e in this._8d) {
                var s = this._8d[e];
                n ? this._mj9(s, i) : n = this._mj9(s, i)
            }
            this._8d = {},
            n && this._6e()
        },
        _87: null,
        _1q: function() {
            if (!this._87[nh])
                return !1;
            var t = this._87;
            this._87 = [],
            t[Du](function(t) {
                try {
                    var i = t[sh]
                      , n = t[Lv]
                      , e = t.delay;
                    n instanceof Object ? i = i.bind(n) : n && !e && (e = parseInt(n)),
                    e ? setTimeout(i, e) : i()
                } catch (s) {}
            }, this),
            this._63 && this._ex()
        },
        _e0: function(t, i, n) {
            this._87.push({
                call: t,
                scope: i,
                delay: n
            }),
            this._63 || this._1q()
        },
        _4k: function(t, i) {
            for (var n = this[mT], e = 0, s = n[nh]; s > e; e++)
                if (t[sh](i, n[e]) === !1)
                    return !1
        },
        _ec: function(t, i) {
            this._mb[Du](t, i)
        },
        _$r: function(t, i) {
            for (var n = this[mT], e = n.length - 1; e >= 0; e--)
                if (t[sh](i, n[e]) === !1)
                    return !1
        },
        _4s: function(t, i) {
            this._mb[eM](t, i)
        },
        _3z: function() {
            return this[Do]
        },
        _fc: function(t, i, n) {
            t /= this[uf] || 1,
            this._jd(t, i, n)
        },
        _jd: function(t, i, e) {
            if (this[$c] && (i === n || null === i)) {
                var s = this[JT](this.width / 2, this[eo] / 2);
                i = s[0] || 0,
                e = s[1] || 0
            }
            return this._jh[uf](t, [i || 0, e || 0])
        },
        _dz: function(t, i) {
            this._jh[ff]([t, i], !0)
        },
        _mmi: function(t, i, n, e) {
            if (n == this[uf] && e !== !1) {
                var s = this[ho];
                s != (0 | s) && (t = Math.round(t * s) / s,
                i = Math[Gf](i * s) / s)
            }
            this._jh[sM]([t, i], n)
        },
        _jb: function(t, i) {
            return this._jd(this._dy, t, i)
        },
        _hw: function(t, i) {
            return this._jd(1 / this._dy, t, i)
        },
        _1d: function() {
            var t = this._3z();
            if (!t.isEmpty()) {
                var i = this[ca] / t[ca]
                  , n = this[eo] / t[eo]
                  , e = Math.min(i, n);
                return e = Math.max(this._fh, Math.min(this._fg, e)),
                {
                    scale: e,
                    cx: t.cx,
                    cy: t.cy
                }
            }
        },
        _dy: 1.3,
        _fg: 10,
        _fh: .1,
        _mmn: !1,
        _72: function() {},
        _5q: function() {},
        _2n: function() {},
        _dw: function() {
            this[zT] = null,
            this[yT]._jx()
        },
        _du: function(t) {
            var i = this._jh
              , n = this._ip[ho]
              , e = this.scale
              , s = i._dr();
            if (!s) {
                var r = i.transform([t[0], t[1]]);
                return r[0] *= n,
                r[1] *= n,
                n *= e,
                r[2] = t[2] * n,
                r[3] = t[3] * n,
                r
            }
            var h = new KY
              , a = i.transform([t[0], t[1]]);
            return h.add(a[0], a[1]),
            a = i[Y_]([t[0] + t[2], t[1]]),
            h.add(a[0], a[1]),
            a = i[Y_]([t[0], t[1] + t[3]]),
            h.add(a[0], a[1]),
            a = i[Y_]([t[0] + t[2], t[1] + t[3]]),
            h.add(a[0], a[1]),
            [h.x * n, h.y * n, h[ca] * n, h.height * n]
        },
        _fm: function(t, n) {
            var e = this._ip;
            if (e[ca] && e[eo]) {
                var s = n._2w(t.x, t.y, t.width, t.height);
                if (s && s[ca] && s[ca]) {
                    var r = this[uf] * this[ho]
                      , h = this._mmz
                      , a = {}
                      , o = 1e-6;
                    s.x > o && (a[$a] = n._44(0, 0, s.x, n.height, r)),
                    n[ca] - s[oa] > o && (a.right = n._44(s[oa], 0, n[ca] - s.right, n[eo], r)),
                    s.y > o && (a.top = n._44(s.x, 0, s[ca], s.y, r)),
                    n[eo] - s.bottom > o && (a.bottom = n._44(s.x, s[aa], s[ca], n[eo] - s[aa], r)),
                    q(a) || h._4v(a);
                    var f = n._hu(t.x, t.y)
                      , u = (f[0] - s.x) * r
                      , c = (f[1] - s.y) * r
                      , _ = s[ca] * r
                      , d = s.height * r;
                    u = Math[Gf](u),
                    c = Math[Gf](c),
                    _ = Math[Gf](_),
                    d = Math.round(d);
                    var l = this[rM];
                    return l || (l = this[rM] = i[_o](lo),
                    l.g = l.getContext(vo)),
                    l[ca] = _,
                    l.height = d,
                    be(l.g),
                    l.g[fd](e, u, c),
                    u = f[0] * r - u,
                    c = f[1] * r - c,
                    {
                        x: u,
                        y: c,
                        canvas: l
                    }
                }
            }
        },
        _lq: function(t, i, n, e) {
            this._mmz._m3(t, i, n, e)
        },
        _fn: function(t) {
            this[yT]._i0(t)
        }
    });
    Object[Qh](ZU[lh], {
        width: {
            get: function() {
                return this[XT][Aa]
            }
        },
        height: {
            get: function() {
                return this._mm4[cd]
            }
        },
        rotate: {
            get: function() {
                return this._jh._dr()
            }
        },
        tx: {
            get: function() {
                return this._jh._8i()[0]
            }
        },
        ty: {
            get: function() {
                return this._jh._8i()[1]
            }
        },
        ratio: {
            get: function() {
                return this._ip ? this._ip[ho] : void 0
            }
        },
        scale: {
            get: function() {
                return this._jh._fv()
            },
            set: function(t) {
                this._fc(t)
            }
        },
        renderScale: {
            get: function() {
                return this[uf] * this[ho]
            }
        },
        uis: {
            get: function() {
                return this._mb
            }
        },
        length: {
            get: function() {
                return this._mb[nh]
            }
        },
        viewportBounds: {
            get: function() {
                return this[pT][hM]()
            }
        }
    });
    var KU, JU = S({
        constructor: function() {
            this._fq = [],
            this._iz = new KY,
            this._fp = IY ? 20 : 50
        },
        _fp: 20,
        _fq: null,
        _lr: !1,
        _iz: null,
        _jx: function() {
            this._lr = !1,
            this._fq[nh] = 0,
            this[aM] = null,
            this._iz[so]()
        },
        _h0: function() {
            return 0 == this._fq[nh] && !this[aM]
        },
        _m3: function(t, i, n, e) {
            0 >= n || 0 >= e || this._fq[uh]([t, i, n, e])
        },
        _i0: function(t) {
            this._m3(t.x, t.y, t[ca], t[eo])
        },
        _4v: function(t) {
            var i = this._iz;
            for (var n in t) {
                var e = t[n]
                  , s = e.getGlobalBounds();
                i.add(s)
            }
            this._viewportClips = t
        },
        _mms: function(t, i) {
            for (var n = [], e = this._fq, s = 0, r = e[nh]; r > s; s++) {
                var h = e[s];
                t.intersects(h[0], h[1], h[2], h[3]) && (n.push(h),
                this._iz.addRect(h[0], h[1], h[2], h[3]))
            }
            this._fq = n,
            this._lr = i || n[nh] >= this._fp
        },
        _en: function(t, i, n, e) {
            if (!this._iz[Ul](t, i, n, e))
                return !1;
            if (this._lr)
                return !0;
            if (this._viewportClips) {
                var s = this[aM];
                for (var r in s)
                    if (s[r].intersects(t, i, n, e))
                        return !0
            }
            for (var h, a = 0, o = this._fq[nh]; o > a; a++)
                if (h = this._fq[a],
                KY.intersects(t, i, n, e, h[0], h[1], h[2], h[3]))
                    return !0;
            return !1
        },
        _if: function(t, i) {
            if (this._h0())
                return !1;
            if (t.beginPath(),
            this._lr) {
                var n = i([this._iz.x, this._iz.y, this._iz.width, this._iz[eo]]);
                return ge(t, n[0], n[1], n[2], n[3]),
                void t[Sp]()
            }
            if (this[aM])
                for (var e in this[aM]) {
                    var n = this[aM][e].canvasBounds;
                    ge(t, n[0], n[1], n[2], n[3])
                }
            for (var s = this._fq, r = 0, h = s[nh]; h > r; r++) {
                var n = i(s[r]);
                ge(t, n[0], n[1], n[2], n[3])
            }
            t[Sp]()
        }
    });
    JU._toIntRect = function(t, i, n, e) {
        return t instanceof Object && (i = t.y,
        n = t.width,
        e = t[eo],
        t = t.x),
        n = V(t + n) - (t = W(t)),
        e = V(i + e) - (i = W(i)),
        [t, i, n, e]
    }
    ,
    JU[oM] = W,
    JU._ge = V,
    sq[fM] = uM,
    sq[cM] = _M,
    YY[dM] = sq[cM];
    var QU = S({
        _j7: function() {
            M(this, QU, lM, arguments),
            this._topCanvas._j7()
        },
        _9w: function(t, i) {
            return t = t.$data.zIndex || 0,
            i = i[lu].zIndex || 0,
            t - i
        },
        "super": ZU,
        constructor: function(t, n) {
            this._k0 = t,
            N(n) && (n = i[VT](n)),
            n && n.tagName || (n = i.createElement(B_)),
            k(this, QU, [n]),
            this[vM] = new gr(this,this[XT]),
            this._gf = [],
            this._k0._7[Zd](this._19, this),
            this._k0._1b[Zd](this._9l, this),
            this._k0._$t[Zd](this._6v, this),
            this._k0._$k[Zd](this._2d, this),
            this._k0._$l[Zd](this._3f, this),
            this[bM] = {},
            this._3p(YY.NAVIGATION_TYPE, !0)
        },
        _5n: function(t) {
            M(this, QU, gM, arguments),
            this[vM]._5n(t)
        },
        _fw: function(t) {
            return t.id || (t = this._mb[tM](t)),
            t ? (this._mb[Lh](t),
            t[yM](),
            t[iM] && this._fn(t[iM]),
            void (this[nM] = !0)) : !1
        },
        _g0: function() {
            this._mb[Du](function(t) {
                t[yM]()
            }),
            this._mb[so]()
        },
        _eh: function(t, i) {
            var n = t[nf] || t;
            return n._$o && (n._$o = !1,
            n._hp = this._51(n, i)),
            n._hp !== !1
        },
        _51: function(t, i) {
            return this._3t(t, i) ? !this._k0[mM] || this._k0[mM](t, i) !== !1 : !1
        },
        _9o: function(t) {
            return this._k0._3h == ur(t)
        },
        _3t: function(t, i) {
            if (t.visible === !1)
                return !1;
            if (!(t instanceof fW))
                return this._k0._3h != ur(t) ? !1 : !t._dg;
            var n = t.fromAgent
              , e = t.toAgent;
            if (!n || !e)
                return !1;
            if (n == e && !t[hc]())
                return !1;
            if (t[xM]()) {
                var s = t[ic](!0);
                if (s && !s._eh(t, i))
                    return !1
            }
            return this._eh(n, i) && this._eh(e, i) ? !0 : !1
        },
        _mmw: function(t) {
            return t._mm6 ? {
                x: t.$x + t.uiBounds.x,
                y: t.$y + t[Ed].y,
                width: t.uiBounds[ca],
                height: t[Ed][eo]
            } : void 0
        },
        _2o: function(t) {
            var i = this._kj(t);
            if (i) {
                var n = this._mmw(i);
                if (n)
                    return new KY(n)
            }
        },
        _ef: function(t, i, n) {
            return t[j_](i[0], i[1], n)
        },
        hitTest: function(t, i) {
            var n = M(this, QU, j_, arguments);
            if (n) {
                t = this.toLogical(t),
                i = this._90(i);
                var e = n[j_](t[0], t[1], i, !0);
                if (e instanceof lW)
                    return e
            }
            return n
        },
        _3b: function(t) {
            return this[Xg](t)
        },
        _6i: function() {
            M(this, QU, pM, arguments),
            this[vM]._i9(this[ca], this.height)
        },
        _km: 1,
        _mjk: null,
        _7t: null,
        _7u: null,
        _mb: null,
        _m0: null,
        _ip: null,
        _mmz: null,
        _63: !1,
        _mm6: !1,
        _jh: null,
        _4k: function(t, i) {
            for (var n = this._mjk, e = 0, s = n[nh]; s > e; e++)
                if (t[sh](i, n[e]) === !1)
                    return !1
        },
        _ec: function(t, i) {
            this._mb[Du](t, i)
        },
        _$r: function(t, i) {
            for (var n = this[mT], e = n.length - 1; e >= 0; e--)
                if (t.call(i, n[e]) === !1)
                    return !1
        },
        _4s: function(t, i) {
            this._mb[eM](t, i)
        },
        _30: function(t) {
            M(this, QU, EM, arguments),
            this[wM] = {
                value: t
            }
        },
        _mj7: function() {
            this._41(!0),
            this[TM] || (this[TM] = !0,
            this._k0 && this._k0[MM] && this._jh[sM]([this.width / 2, this[eo] / 2]))
        },
        _ex: function() {
            if (!this[kM] && this._63) {
                if (this._j7ingID = null,
                this._63 = !1,
                this[$c] && this._k0 && this._k0._$o && (this._k0._$o = !1,
                this._k0[Du](function(t) {
                    t[OM](!0)
                })),
                M(this, QU, SM, arguments),
                this[IM]) {
                    this._6w && this._6w._jp();
                    var t = this._7uChanged[wh]
                      , i = this[IM].old;
                    this[IM] = null,
                    this._k0._3y(new fH(this._k0,AM,t,i))
                }
                this[wM] && (this[wM] = !1,
                this._6w && this._6w._30 && this._6w._30(this[pT][ca] * this[pT][uf], this[pT][eo] * this._viewport.scale),
                this._k0._3y(new fH(this._k0,OT,this._viewport)))
            }
        },
        _gf: null,
        _mj9: function(t) {
            var i = t[lu];
            if (!t._17 && !i._63 && !i._$o)
                return !1;
            var n = t.$invalidateSize;
            return n = M(this, QU, PM, arguments) || n
        },
        _9q: function(t) {
            var i = t[lu];
            i[jM] && (i[jM] = !1,
            t._4t()),
            i[LM] && i._hq() && (t._57(),
            i[LM] = !1),
            (t._17 || i._63) && (i._63 = !1,
            t.validate())
        },
        _gi: function(t, i) {
            var n = t[ho];
            t[uf](n, n),
            t[Y_][dh](t, this._jh.m);
            for (var e = this[CM], s = [], r = 0, h = i[nh]; h > r; r++) {
                var a = i[r];
                a._j7(t, e),
                a._ji && a._ji.length && s.push(a)
            }
            if (s.length)
                for (r = 0,
                h = s.length; h > r; r++)
                    s[r]._9m(t, e)
        },
        render: function(t, i) {
            if (i[nh]) {
                if (t[af](),
                IY)
                    try {
                        this._gi(t, i)
                    } catch (n) {}
                else
                    this._gi(t, i);
                t[So]()
            }
        },
        _gj: function(t, i, n) {
            t.save(),
            t[ff](-n.x * i, -n.y * i),
            t.scale(i, i);
            var e, s, r = this._mb._jg[ah]();
            r = this._hx(r);
            for (var h = [], a = 0, o = r[nh]; o > a; a++)
                e = r[a],
                e[RT] && (s = this[DT](e),
                n.intersectsRect(s.x, s.y, s[ca], s[eo]) && (e._j7(t, i),
                e._ji && e._ji[nh] && h.push(e)));
            if (h.length)
                for (a = 0,
                o = h.length; o > a; a++)
                    h[a]._9m(t, i);
            t.restore()
        },
        _$x: function() {},
        _1m: function() {
            for (var t, i, n = this._mb._jg, e = new KY, s = n.length - 1; s >= 0; s--)
                t = n[s],
                t._hp && (i = t[Ed],
                e[Wl](t.$x + i.x, t.$y + i.y, i.width, i[eo]));
            var r = this._7u;
            this._7u = e,
            e.equals(r) || this._$x(r, e)
        },
        _5r: function() {
            this._mjk.length = 0,
            this._7t = {}
        },
        _kk: function() {
            this._jx()
        },
        _hz: function() {
            this._jx(),
            this._hzed = !0,
            this._63 = !1,
            this[vM].clear(),
            this._87[nh] = 0,
            this._6w && (this._6w._hz(),
            delete this._6w)
        },
        _kj: function(t) {
            return this._mb[tM](t.id || t)
        },
        _$b: function(t) {
            return this._ea(t)
        },
        _go: function(t, i) {
            var n = this[RM](t, i);
            return {
                x: n[0],
                y: n[1]
            }
        },
        _ea: function(t, i) {
            var n = this[JT](t, i);
            return {
                x: n[0],
                y: n[1]
            }
        },
        _$f: null,
        _3f: function(t) {
            var i = t[kf]
              , n = t[nf];
            if (n)
                if (this._mm6) {
                    var e, s;
                    if (B(n))
                        for (var r = 0, h = n[nh]; h > r; r++)
                            s = n[r].id,
                            e = this._mb[tM](s),
                            e && (e[DM] = i[Il](s),
                            e[NM]());
                    else {
                        if (s = n.id,
                        e = this._mb.getById(s),
                        !e)
                            return;
                        e[DM] = i[Il](s),
                        e[NM]()
                    }
                    this._mlp()
                } else {
                    this._$f || (this._$f = {});
                    var e, s;
                    if (B(n))
                        for (var r = 0, h = n.length; h > r; r++)
                            s = n[r].id,
                            this._$f[s] = !0;
                    else
                        s = n.id,
                        this._$f[s] = !0
                }
        },
        _k0: null,
        _mjn: function(t) {
            var i = t.uiClass;
            return i ? new i(t,this._k0) : void 0
        },
        _19: function(t) {
            if (!this[$c])
                return !1;
            var i = t[kf]
              , n = t[Vd];
            $_ == n && this._k0[OM](),
            $M == n ? (this._fw(i.id),
            this._kc(i)) : BM == n && i._hq() && t[wh] && this._5b(i);
            var e = this._mb.getById(i.id);
            e && e[$c] && e.onPropertyChange(t) && this[kT]()
        },
        _3j: function(t) {
            var i = this._kj(t);
            i && (i[FM](),
            this[kT]())
        },
        _9l: function(t) {
            if (!this[$c])
                return !1;
            switch (t[Vd]) {
            case yH[Fv]:
                this._kc(t[nf]);
                break;
            case yH[zv]:
                this._gt(t[nf]);
                break;
            case yH.KIND_CLEAR:
                this._hy(t[nf])
            }
        },
        _jx: function() {
            this._ml5 = {},
            this._g0(),
            this[so]()
        },
        _ml5: null,
        _kc: function(t) {
            var i = this[GM](t);
            i && (this._mb.add(i),
            this[$c] && (this[bM][t.id] = t),
            this[kT]())
        },
        _gt: function(t) {
            if (Array[Nh](t)) {
                for (var i, n = [], e = 0, s = t[nh]; s > e; e++)
                    i = t[e].id,
                    n[uh](i),
                    delete this[bM][i];
                t = n
            } else
                t = t.id,
                delete this[bM][t],
                t = [t];
            t[Du](function(t) {
                this._fw(t)
            }, this),
            this[kT]()
        },
        _hy: function() {
            this._jx()
        },
        _6v: function(t) {
            return this[$c] ? void (t[kf]instanceof uW && !this[bM][t[kf].id] && (t.oldValue && (this._3j(t.oldValue),
            t[gv][LM] = !0),
            t[wh] && (this._3j(t[wh]),
            t.value[LM] = !0),
            this._5b(t[kf]))) : !1
        },
        _2d: function(t) {
            return this[$c] ? void (t[kf]instanceof uW && !this[bM][t[kf].id] && this._5b(t[kf])) : !1
        },
        _2f: function(t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t[ic](!0);
                if (!i)
                    return t._edgeBundleInvalidateFlag = !1,
                    void t[zM]();
                i[Co](this._k0),
                i[YM](function(t) {
                    t[zM]()
                })
            }
        },
        _$p: function(t) {
            var i, n = (this._k0,
            this._k0[ld]), e = this._mb, s = [], r = 1;
            if (n[HM](function(t) {
                return t instanceof fW ? (this._2f(t),
                void s.push(t)) : (i = this[GM](t),
                void (i && (e.add(i),
                t[qM] = r++)))
            }, this),
            e[nh])
                for (var h = e._jg, r = h[nh] - 1; r >= 0; r--)
                    i = h[r],
                    this._39(i, i[lu], t);
            for (var a, r = 0, o = s.length; o > r; r++)
                if (a = s[r],
                i = this[GM](a)) {
                    this._39(i, a, t),
                    e.add(i);
                    var f = a.fromAgent
                      , u = a[tc]
                      , c = f[qM] || 0;
                    f != u && (c = Math.max(c, u[qM] || 0)),
                    a[qM] = c
                }
            if (s[nh] && e._jg[UM](function(t, i) {
                return t[lu][qM] - i[lu][qM]
            }),
            this._$f) {
                var _ = n[dd];
                for (var d in this._$f)
                    if (_[Il](d)) {
                        var i = e[tM](d);
                        i && (i[DM] = !0)
                    }
                this._$f = null
            }
            this._6e()
        },
        _mmc: function(t, i) {
            if (t)
                return this._$p();
            var n = this[nM];
            this[nM] = !1;
            for (var e in this._ml5) {
                var s = this[bM][e];
                s instanceof uW ? this._5b(s) : this._5o(s)
            }
            this[bM] = {};
            for (var r, h, a = this._mb._jg, o = [], f = a[nh] - 1; f >= 0; f--)
                r = a[f],
                h = r.$data,
                h instanceof fW ? (this._2f(h),
                o[uh](r)) : this._39(r, h, i) && !n && (n = !0);
            if (o.length)
                for (var f = 0, u = o.length; u > f; f++)
                    r = o[f],
                    this._39(r, r[lu], i) && !n && (n = !0);
            n && this._6e()
        },
        _39: function(t, i, n) {
            if (i instanceof fW)
                return i[jM] && (i[jM] = !1,
                t._4t()),
                this[PM](t, n);
            if (i.__63 && i._hq() && (t._57(),
            i[LM] = !1),
            this[PM](t, n)) {
                var e = this._4g(i);
                return e && (e[LM] = !0),
                i[WM]() && i[sl](function(t) {
                    t[jM] = !0
                }, this),
                !0
            }
        },
        _2k: function(t, i) {
            var n = t.fromAgent
              , e = t[tc]
              , s = i[VM](n.id);
            if (n == e)
                return s;
            var r = i.getIndexById(e.id);
            return Math.max(s, r)
        },
        _29: function(t, i) {
            var n = this[ld]._g9(t);
            return n ? i[VM](n.id) : 0
        },
        _5b: function(t) {
            var i = this._mb
              , n = i[tM](t.id);
            if (!n)
                throw new Error(XM + t[Ef] + ZM);
            var s = this._29(t, i)
              , r = [n];
            t.hasChildren() && e(t, function(t) {
                t instanceof uW && (n = i[tM](t.id),
                n && r[uh](n))
            }, this),
            this._4j(i, s, r)
        },
        _5o: function(t) {
            var i = this._mb.getById(t.id);
            if (i) {
                var n = this._2k(t, this._mb);
                this._mb[KM](i, n)
            }
        },
        _4j: function(t, i, n) {
            function e(t) {
                s.add(t)
            }
            var s = new HY;
            l(n, function(n) {
                i = t.setIndexAfter(n, i),
                n[lu][sl](e)
            }, this),
            0 != s.length && s[Du](this._5o, this)
        },
        _4g: function(t) {
            var i = Ae(t);
            return i && i[BM] ? i : null
        },
        _6y: null,
        _6w: null,
        _3p: function(t, i) {
            return i || t != this._6y ? (this._6y = t,
            this._6w && (this._6w._hz(),
            delete this._6w),
            t == sq[cM] ? void (this._6w = new vr(this,this[XT])) : t == sq[fM] ? void (this._6w = new lr(this,this[XT])) : void 0) : !1
        },
        _2n: function(t, i) {
            this._6w && this._6w._jp(),
            this._k0._3y(new fH(this._k0,Y_,t,i))
        },
        _72: function(t, i) {
            this._k0._3y(new fH(this._k0,uf,t,i))
        },
        _2z: function(t, i) {
            this[IM] = {
                value: t,
                old: i
            }
        },
        _7f: function() {
            this._69()
        }
    });
    Object[Qh](QU.prototype, {
        _viewportBounds: {
            get: function() {
                return this[JM]
            }
        },
        _scale: {
            get: function() {
                return this[uf]
            },
            set: function(t) {
                this._fc(t)
            }
        },
        _tx: {
            get: function() {
                return this.tx
            }
        },
        _ty: {
            get: function() {
                return this.ty
            }
        },
        graphModel: {
            get: function() {
                return this._k0[QM]
            }
        }
    });
    var tW = ZU
      , iW = {};
    iW[Bw] = function() {
        return [1, 0, 0, 1, 0, 0]
    }
    ,
    iW[tk] = function(t, i) {
        var n = i[0]
          , e = i[1]
          , s = i[2]
          , r = i[3]
          , h = i[4]
          , a = i[5]
          , o = n * r - e * s;
        return o ? (o = 1 / o,
        t[0] = r * o,
        t[1] = -e * o,
        t[2] = -s * o,
        t[3] = n * o,
        t[4] = (s * a - r * h) * o,
        t[5] = (e * h - n * a) * o,
        t) : null
    }
    ,
    iW[Ep] = function(t, i, n) {
        var e = i[0]
          , s = i[1]
          , r = i[2]
          , h = i[3]
          , a = i[4]
          , o = i[5]
          , f = n[0]
          , u = n[1]
          , c = n[2]
          , _ = n[3]
          , d = n[4]
          , l = n[5];
        return t[0] = e * f + r * u,
        t[1] = s * f + h * u,
        t[2] = e * c + r * _,
        t[3] = s * c + h * _,
        t[4] = e * d + r * l + a,
        t[5] = s * d + h * l + o,
        t
    }
    ,
    iW.mul = iW[Ep],
    iW.rotate = function(t, i, n) {
        var e = i[0]
          , s = i[1]
          , r = i[2]
          , h = i[3]
          , a = i[4]
          , o = i[5]
          , f = Math.sin(n)
          , u = Math.cos(n);
        return t[0] = e * u + r * f,
        t[1] = s * u + h * f,
        t[2] = e * -f + r * u,
        t[3] = s * -f + h * u,
        t[4] = a,
        t[5] = o,
        t
    }
    ,
    iW[uf] = function(t, i, n) {
        var e = i[0]
          , s = i[1]
          , r = i[2]
          , h = i[3]
          , a = i[4]
          , o = i[5]
          , f = n[0]
          , u = n[1];
        return t[0] = e * f,
        t[1] = s * f,
        t[2] = r * u,
        t[3] = h * u,
        t[4] = a,
        t[5] = o,
        t
    }
    ,
    iW[ff] = function(t, i, n) {
        var e = i[0]
          , s = i[1]
          , r = i[2]
          , h = i[3]
          , a = i[4]
          , o = i[5]
          , f = n[0]
          , u = n[1];
        return t[0] = e,
        t[1] = s,
        t[2] = r,
        t[3] = h,
        t[4] = e * f + r * u + a,
        t[5] = s * f + h * u + o,
        t
    }
    ,
    iW.transform = function(t, i) {
        var n = i[0]
          , e = i[1];
        return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]]
    }
    ,
    iW.reverseTransform = function(t, i) {
        return iW.transform(iW[tk]([], t), i)
    }
    ;
    var nW = Math.PI + Math.PI
      , eW = D
      , sW = S({
        equals: function(t) {
            if (!t || !Array[Nh](t))
                return !1;
            for (var i = this.m, n = 0; n < i[nh]; ) {
                if (i[n] != t[n])
                    return !1;
                ++n
            }
            return !0
        },
        constructor: function(t) {
            this.m = t || iW[Bw](),
            this.im = []
        },
        listener: null,
        _63: !0,
        invalidate: function() {
            return this._63 = !0,
            this[ik] && this[Zu](this._mlackM) ? !1 : (this[Av] && this[Av]({
                target: this,
                kind: TT
            }),
            this[ik] = this.m[ah](),
            this)
        },
        validate: function() {
            return this._63 = !1,
            iW.invert(this.im, this.m),
            this
        },
        translate: function(t, i) {
            return eW(t) && (t = [arguments[0], arguments[1]],
            i = arguments[2]),
            i !== !1 ? (this.m[4] += t[0],
            this.m[5] += t[1],
            this[TT]()) : (iW[ff](this.m, this.m, t),
            this.invalidate())
        },
        translateTo: function(t, i) {
            return eW(t) && (t = [arguments[0], arguments[1]],
            i = arguments[2]),
            i && (i /= this._fv(),
            iW[uf](this.m, this.m, [i, i])),
            this.m[4] = t[0],
            this.m[5] = t[1],
            this[TT]()
        },
        scale: function(t, i) {
            return Ch == typeof t && (t = [t, t]),
            i ? (iW[ff](this.m, this.m, i),
            iW[uf](this.m, this.m, t),
            iW.translate(this.m, this.m, ye(i))) : iW[uf](this.m, this.m, t),
            this[TT]()
        },
        rotate: function(t, i) {
            return i ? (iW.translate(this.m, this.m, i),
            iW[Uo](this.m, this.m, t),
            iW.translate(this.m, this.m, ye(i))) : iW.rotate(this.m, this.m, t),
            this[TT]()
        },
        transform: function(t) {
            return iW.transform(this.m, t)
        },
        reverseTransform: function(t) {
            return iW.transform(this._42(), t)
        },
        toString: function() {
            return WT + this.m[nk](Uh) + Vh
        },
        _42: function() {
            return this._63 && this[Co](),
            this.im
        },
        _dt: function() {
            var t = this.m[0]
              , i = this.m[1]
              , n = this.m[2]
              , e = this.m[3];
            return [Math[Ao](t * t + n * n), Math.sqrt(i * i + e * e)]
        },
        _fv: function() {
            var t = this.m[0]
              , i = this.m[2];
            return Math[Ao](t * t + i * i)
        },
        _8i: function() {
            return [this.m[4], this.m[5]]
        },
        _mjp: function() {
            var t = this.m[0]
              , i = this.m[1]
              , n = this.m[2]
              , e = this.m[3];
            return [me(Math.atan2(i, e)), me(Math[sa](-n, t))]
        },
        _dr: function() {
            return me(Math[sa](this.m[1], this.m[3]))
        }
    })
      , rW = S({
        constructor: function() {},
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        rotate: 0,
        set: function(t, i, n, e, s, r) {
            return this.x = t,
            this.y = i,
            this.width = n,
            this[eo] = e,
            this[Uo] = s,
            this[ra] = Math.cos(s),
            this._sin = Math.sin(s),
            this[uf] = r,
            this[ek] = null,
            this
        },
        _hu: function(t, i) {
            return t -= this.x,
            i -= this.y,
            this[Uo] ? Ee(t, i, this[ha], this[ra]) : [t, i]
        },
        _8g: function(t) {
            var i = new KY;
            return i.add(this._hu(t.x, t.y)),
            i.add(this._hu(t.x + t[ca], t.y)),
            i.add(this._hu(t.x, t.y + t[eo])),
            i.add(this._hu(t.x + t.width, t.y + t[eo])),
            i
        },
        _fy: function(t, i) {
            if (this.rotate) {
                var n = Ee(t, i, Math.sin(-this.rotate), Math.cos(-this.rotate));
                t = n[0],
                i = n[1]
            }
            return [this.x + t, this.y + i]
        },
        _60: function(t, i) {
            var n = this._hu(t, i);
            return t = n[0],
            i = n[1],
            t >= 0 && i >= 0 && t <= this[ca] && i <= this[eo]
        },
        intersects: function(t, i, n, e) {
            if (!this[Uo])
                return KY[NT](this.x, this.y, this[ca], this[eo], t, i, n, e);
            if (!n || !e)
                return this._60(t, i);
            var s = this[hM]();
            if (!s[NT](t, i, n, e))
                return !1;
            for (var r = s[Ha], h = 0; h < r[nh]; ) {
                var a = r[h];
                if (KY[No](t, i, n, e, a[0], a[1]))
                    return !0;
                h++
            }
            var o = [[t, i], [t + n, i], [t, i + e], [t + n, i + e]];
            for (h = 0; h < o[nh]; ) {
                var a = o[h];
                if (this._60(a[0], a[1]))
                    return !0;
                h++
            }
            return pe(r, o)
        },
        getGlobalBounds: function() {
            return this[ek] || (this[ek] = this._79(0, 0, this[ca], this[eo])),
            this[ek]
        },
        _79: function(t, i, n, e) {
            if (!this.rotate)
                return new KY(this.x + t,this.y + i,n,e);
            var s = []
              , r = new KY
              , h = this._fy(t, i);
            return s[uh](h),
            r.add(h[0], h[1]),
            h = this._fy(t + n, i),
            s[uh](h),
            r.add(h[0], h[1]),
            h = this._fy(t, i + e),
            s.push(h),
            r.add(h[0], h[1]),
            h = this._fy(t + n, i + e),
            s[uh](h),
            r.add(h[0], h[1]),
            r[Ha] = s,
            r
        },
        _44: function(t, i, n, e, s) {
            var r;
            if (this[Uo]) {
                var h = this._fy(t, i);
                r = (new rW).set(h[0], h[1], n, e, this[Uo], this[uf])
            } else
                r = (new rW).set(this.x + t, this.y + i, n, e, 0, this[uf]);
            return r.canvasBounds = [Math.round(s * t), Math.round(s * i), Math.round(s * n), Math[Gf](s * e)],
            r
        },
        _2w: function(t, i, n, e) {
            if (!this[Uo]) {
                var s = KY[Zl](this.x, this.y, this[ca], this.height, t, i, n, e);
                return s && s.offset(-this.x, -this.y),
                s
            }
            var r = this._hu(t, i);
            return t = r[0],
            i = r[1],
            KY.intersection(0, 0, this[ca], this.height, r[0], r[1], n, e)
        },
        equals: function(t) {
            return this.x == t.x && this.y == t.y && this[ca] == t[ca] && this.height == t[eo] && this[Uo] == t[Uo]
        },
        toString: function() {
            return this.x + Uh + this.y + Uh + this[ca] + Uh + this[eo] + Uh + this[Uo]
        },
        toJSON: function() {
            return {
                x: this.x,
                y: this.y,
                width: this[ca],
                height: this[eo],
                rotate: this[Uo],
                scale: this[uf]
            }
        }
    })
      , hW = {
        setStyle: yi,
        setStyles: bi,
        addRule: mi,
        pre: MH
    }
      , aW = function(t, i, n, e) {
        this[kf] = t,
        this[Vd] = i,
        this.oldValue = e,
        this[wh] = n,
        this[yv] = sq.PROPERTY_TYPE_STYLE
    };
    E(aW, fH);
    var oW = function(t) {
        this.id = ++kY,
        this[Uv] = {},
        this._iy = {},
        t && (this[sk] = t)
    };
    oW.prototype = {
        _iy: null,
        getStyle: function(t) {
            return this._iy[t]
        },
        setStyle: function(t, i) {
            var n = this._iy[t];
            return n === i || n && i && n.equals && n[Zu](i) ? !1 : this._mmy(t, i, new aW(this,t,i,n), this._iy)
        },
        putStyles: function(t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._iy[n] = e : this[Vc](n, e)
            }
        },
        _$o: !0,
        invalidateVisibility: function(t) {
            this._$o = !0,
            t || (this instanceof uW && this[WM]() && this[sl](function(t) {
                t._$o = !0
            }),
            this._hq() && this[th]() && this[lc](function(t) {
                t.invalidateVisibility()
            }))
        },
        onParentChanged: function() {
            this.invalidateVisibility()
        },
        _hq: function() {
            return !this._49 && this instanceof dW
        },
        invalidate: function() {
            this[Eh](new oH(this,rk,TT))
        },
        _mjg: null,
        addUI: function(t, i) {
            if (this[hk] || (this[hk] = new HY),
            t.id || (t.id = ++kY),
            this._mjg[Il](t.id))
                return !1;
            var n = {
                id: t.id,
                ui: t,
                bindingProperties: i
            };
            this[hk].add(n);
            var e = new oH(this,rk,Gv,n);
            return this[Eh](e)
        },
        removeUI: function(t) {
            if (!this[hk])
                return !1;
            var i = this._mjg.getById(t.id || t);
            return i ? (this[hk][Lh](i),
            void this[Eh](new oH(this,rk,Lh,i))) : !1
        },
        clearUIs: function() {
            this.bindingUIs && this[ak][Ll]()[Du](function(t) {
                this[ok](t.ui)
            }
            [kh](this))
        },
        toString: function() {
            return this[sk] || this.id
        },
        type: fk,
        _49: !1,
        _hp: !0,
        inGroup: function(t) {
            var i = Ae(this);
            return i == t || i && t instanceof dW && i[ac](t)
        }
    },
    E(oW, mH),
    A(oW[lh], [$M, Ef, BT, uk]),
    K(oW[lh], {
        enableSubNetwork: {
            get: function() {
                return this._49
            },
            set: function(t) {
                if (this._49 != t) {
                    var i = this._49;
                    this._49 = t,
                    this instanceof uW && this._$v(),
                    this[Eh](new fH(this,$_,t,i))
                }
            }
        },
        bindingUIs: {
            get: function() {
                return this._mjg
            }
        },
        styles: {
            get: function() {
                return this._iy
            },
            set: function(t) {
                if (this._iy != t) {
                    for (var i in this._iy)
                        i in t || (t[i] = n);
                    this[ck](t),
                    this._iy = t
                }
            }
        }
    }),
    eq[_k] = Ae;
    var fW = function(t, i, n) {
        this.id = ++kY,
        this._mj5 = {},
        this._iy = {},
        n && (this.$name = n),
        this[dk] = t,
        this.$to = i,
        this[lk]()
    };
    fW.prototype = {
        $uiClass: Es,
        _j9: null,
        _hs: null,
        _j6: null,
        _hr: null,
        _dl: !1,
        type: vk,
        otherNode: function(t) {
            return t == this[tl] ? this.to : t == this.to ? this[tl] : void 0
        },
        connect: function() {
            if (this._dl)
                return !1;
            if (!this.$from || !this.$to)
                return !1;
            if (this._dl = !0,
            this.$from == this.$to)
                return void this.$from._hn(this);
            Fe(this.$to, this),
            $e(this[dk], this),
            Te(this[dk], this, this.$to);
            var t = this[ec]
              , i = this.toAgent;
            if (t != i) {
                var n;
                this.$from._dg && (ke(t, this, i),
                n = !0),
                this.$to._dg && (Se(i, this, t),
                n = !0),
                n && Te(t, this, i)
            }
        },
        disconnect: function() {
            if (!this._dl)
                return !1;
            if (this._dl = !1,
            this.$from == this.$to)
                return void this.$from[bk](this);
            Be(this.$from, this),
            Ge(this.$to, this),
            Me(this[dk], this, this.$to);
            var t = this[ec]
              , i = this[tc];
            if (t != i) {
                var n;
                this[dk]._dg && (Oe(t, this, i),
                n = !0),
                this.$to._dg && (Ie(i, this, t),
                n = !0),
                n && Me(t, this, i)
            }
        },
        isConnected: function() {
            return this._dl
        },
        isInvalid: function() {
            return !this[dk] || !this.$to
        },
        isLooped: function() {
            return this[dk] == this.$to
        },
        getEdgeBundle: function(t) {
            return t ? this._2j() : this.isLooped() ? this[dk]._3v : this.$from[ic](this.$to)
        },
        hasEdgeBundle: function() {
            var t = this[ic](!0);
            return t && t[gk].length > 1
        },
        _2j: function() {
            var t = this.fromAgent
              , i = this[tc];
            return t == i ? this[dk]._dg || this.$to._dg ? null : this[dk]._3v : this[ec][ic](this[tc])
        },
        _92: null,
        hasPathSegments: function() {
            return this._92 && !this._92.isEmpty()
        },
        isBundleEnabled: function() {
            return this[yk] && !this[k_]() && !this[T_]
        },
        firePathChange: function(t) {
            this[Eh](new fH(this,mk,t))
        },
        addPathSegment: function(t, i, n) {
            var e = new Bq(i || Cq,t);
            this._92 || (this._92 = new HY),
            this._92.add(e, n),
            this[xk](e)
        },
        addPathSegement: function() {
            return eq.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'),
            this.addPathSegment[dh](this, arguments)
        },
        removePathSegmentByIndex: function(t) {
            if (!this._92)
                return !1;
            var i = this._92.getByIndex(t);
            i && (this._92[Lh](i),
            this[xk](i))
        },
        removePathSegment: function(t) {
            return this._92 ? (this._92[Lh](t),
            void this[xk](t)) : !1
        },
        movePathSegment: function(t, i, n) {
            if (!this._92)
                return !1;
            if (t = t || 0,
            i = i || 0,
            eq.isNumber(n)) {
                var e = this._92[Sl](n);
                return e ? (e[wy](t, i),
                void this[xk]()) : !1
            }
            l(function(n) {
                n[wy](t, i)
            }),
            this[xk]()
        },
        move: function(t, i) {
            return this._92 ? (this._92[Du](function(n) {
                n[wy](t, i)
            }, this),
            void this[xk]()) : !1
        },
        validateEdgeBundle: function() {}
    },
    E(fW, oW),
    K(fW[lh], {
        pathSegments: {
            get: function() {
                return this._92
            },
            set: function(t) {
                eq[Nh](t) && (t = new HY(t)),
                this._92 = t,
                this[xk]()
            }
        },
        from: {
            get: function() {
                return this[dk]
            },
            set: function(t) {
                if (this[dk] != t) {
                    var i = new fH(this,tl,t,this[dk]);
                    this.beforeEvent(i) !== !1 && (this.disconnect(),
                    this[dk] = t,
                    this[lk](),
                    this.onEvent(i))
                }
            }
        },
        to: {
            get: function() {
                return this.$to
            },
            set: function(t) {
                if (this.$to != t) {
                    var i = new fH(this,pk,t,this.$to);
                    this.beforeEvent(i) !== !1 && (this[ub](),
                    this.$to = t,
                    this.connect(),
                    this[Eh](i))
                }
            }
        },
        fromAgent: {
            get: function() {
                return this[dk] ? this[dk]._dg || this[dk] : null
            }
        },
        toAgent: {
            get: function() {
                return this.$to ? this.$to._dg || this.$to : null
            }
        }
    }),
    A(fW[lh], [T_, {
        name: yk,
        value: !0
    }, S_]);
    var uW = function(t, i, n) {
        2 == arguments[nh] && D(t) && (n = i,
        i = t,
        t = null),
        this.id = ++kY,
        this[Uv] = {},
        this._iy = {},
        t && (this.$name = t),
        this[Ek] = wk,
        this[nu] = QY[hv],
        this.$location = {
            x: i || 0,
            y: n || 0
        },
        this[Tk] = {}
    };
    uW[lh] = {
        $uiClass: ws,
        _dg: null,
        forEachEdge: function(t, i, n) {
            return !n && this._k9 && this._k9.forEach(t, i) === !1 ? !1 : Ye(this, t, i)
        },
        forEachOutEdge: function(t, i) {
            return He(this, t, i)
        },
        forEachInEdge: function(t, i) {
            return qe(this, t, i)
        },
        getEdges: function() {
            var t = [];
            return this[sl](function(i) {
                t[uh](i)
            }),
            t
        },
        _hj: null,
        _fk: null,
        _iu: null,
        _hl: null,
        _mmv: 0,
        _8y: 0,
        hasInEdge: function() {
            return null != this._hj
        },
        hasOutEdge: function() {
            return null != this._fk
        },
        hasEdge: function() {
            return null != this._hj || null != this._fk || this[Mk]()
        },
        linkedWith: function(t) {
            return t[tl] == this || t.to == this || t.fromAgent == this || t[tc] == this
        },
        hasEdgeWith: function(t) {
            var i = this.getEdgeBundle(t);
            return i && i[gk].length > 0
        },
        _k9: null,
        _3v: null,
        hasLoops: function() {
            return this._k9 && this._k9.length > 0
        },
        _hn: function(t) {
            return this._k9 || (this._k9 = new HY,
            this._3v = new IV(this,this,this._k9)),
            this._3v._he(t)
        },
        _mls: function(t) {
            return this._3v ? this._3v._mlv(t) : void 0
        },
        getEdgeBundle: function(t) {
            return t == this ? this._3v : this[Tk][t.id] || t[Tk][this.id]
        },
        _6b: function() {
            return this._8r && this._8r[nh]
        },
        _52: function() {
            return this._7r && this._7r[nh]
        },
        _91: function() {
            return this._6b() || this._52()
        },
        _7r: null,
        _8r: null,
        _mjb: function() {
            var t = this._dg
              , i = we(this);
            if (t != i) {
                var n = ze(this);
                this._94(i),
                n[Du](function(t) {
                    var i = t.fromAgent
                      , n = t[tc]
                      , t = t[Nc]
                      , e = t[dk]._dg
                      , s = t.$to._dg;
                    i != n && (i && Oe(i, t, n || t.$to),
                    n && Ie(n, t, i || t[dk])),
                    e != s && (e && ke(e, t, s || t.$to),
                    s && Se(s, t, e || t[dk]),
                    Te(e || t[dk], t, s || t.$to))
                }, this)
            }
        },
        onParentChanged: function() {
            eq[kk](this, uW, Vv, arguments),
            this[Ok]()
        },
        _7s: null,
        _$v: function() {
            var t;
            if (this._49 ? t = null : (t = this._dg,
            t || this._gl !== !1 || (t = this)),
            this._7s == t)
                return !1;
            if (this._7s = t,
            this._f1 && this._f1._jg[nh])
                for (var i, n = this._f1._jg, e = 0, s = n.length; s > e; e++)
                    i = n[e],
                    i instanceof uW && i._94(t)
        },
        setLocation: function(t, i) {
            if (this[Sk] && this[Sk].x == t && this[Sk].y == i)
                return !1;
            var n;
            n = this.$location ? {
                x: this[Sk].x,
                y: this[Sk].y
            } : this[Sk];
            var e = new fH(this,Ik,n,{
                x: t,
                y: i
            });
            return this.beforeEvent(e) === !1 ? !1 : (this[Sk] ? (this[Sk].x = t,
            this[Sk].y = i) : this[Sk] = new WY(t,i),
            this[Eh](e),
            !0)
        },
        _d9: null,
        addFollower: function(t) {
            return null == t ? !1 : t[Ak] = this
        },
        removeFollower: function(t) {
            return this._d9 && this._d9[P_](t) ? t.host = null : !1
        },
        hasFollowers: function() {
            return this._d9 && !this._d9[vu]()
        },
        toFollowers: function() {
            return this[oc]() ? this._d9[Ll]() : null
        },
        clearFollowers: function() {
            this.hasFollowers() && (this[Pk](),
            l(this[Pk](), function(t) {
                t[Ak] = null
            }))
        },
        getFollowerIndex: function(t) {
            return this._d9 && this._d9.contains(t) ? this._d9.indexOf(t) : -1
        },
        setFollowerIndex: function(t, i) {
            return this._d9 && this._d9[P_](t) ? void this._d9.setIndex(t, i) : -1
        },
        getFollowerCount: function() {
            return this._d9 ? this._d9[nh] : 0
        },
        _8t: function() {
            return this._d9 ? this._d9 : (this._d9 = new HY,
            this._d9)
        },
        isFollow: function(t) {
            if (!t || !this._host)
                return !1;
            for (var i = this[jk]; i; ) {
                if (i == t)
                    return !0;
                i = i._host
            }
            return !1
        },
        _94: function(t) {
            return t == this._dg ? !1 : (this._dg = t,
            this.invalidateVisibility(),
            void this._$v())
        },
        type: Lk
    },
    E(uW, oW),
    K(uW[lh], {
        loops: {
            get: function() {
                return this._k9
            }
        },
        edgeCount: {
            get: function() {
                return this._mmv + this._8y
            }
        },
        agentNode: {
            get: function() {
                return this._dg || this
            }
        },
        host: {
            set: function(t) {
                if (this == t || t == this[jk])
                    return !1;
                var i = new fH(this,Ak,this[jk],t);
                if (!1 === this[ph](i))
                    return !1;
                var n = null
                  , e = null
                  , s = this._host;
                if (null != t && (n = new fH(t,Ck,null,this),
                !1 === t[ph](n)))
                    return !1;
                if (null != s && (e = new fH(s,Rk,null,this),
                !1 === s.beforeEvent(e)))
                    return !1;
                if (this[jk] = t,
                null != t) {
                    var r = t._8t();
                    r.add(this)
                }
                if (null != s) {
                    var r = s._8t();
                    r[Lh](this)
                }
                return this.onEvent(i),
                null != t && t.onEvent(n),
                null != s && s[Eh](e),
                !0
            },
            get: function() {
                return this[jk]
            }
        }
    }),
    A(uW.prototype, [Ik, MT, Ax, Uo, Dk]),
    K(uW[lh], {
        x: {
            get: function() {
                return this[Ik].x
            },
            set: function(t) {
                t != this[Ik].x && (this[Ik] = new WY(t,this[Ik].y))
            }
        },
        y: {
            get: function() {
                return this[Ik].y
            },
            set: function(t) {
                t != this[Ik].y && (this.location = new WY(this.location.x,t))
            }
        }
    });
    var cW = function(t, i) {
        t instanceof Gq && (i = t,
        t = n),
        w(this, cW, [t]),
        this.path = i || new Gq,
        this.anchorPosition = null,
        this[$M] = br,
        YY[Nk] || (YY[Nk] = {},
        YY.SHAPENODE_STYLES[bW[$k]] = !1),
        this[ck](YY.SHAPENODE_STYLES)
    };
    cW[lh] = {
        $uiClass: br,
        type: Bk,
        moveTo: function(t, i) {
            this[Fk][lf](t, i),
            this[xk]()
        },
        lineTo: function(t, i) {
            this.path.lineTo(t, i),
            this[xk]()
        },
        quadTo: function(t, i, n, e) {
            this[Fk].quadTo(t, i, n, e),
            this[xk]()
        },
        curveTo: function(t, i, n, e, s, r) {
            this[Fk][bc](t, i, n, e, s, r),
            this.firePathChange()
        },
        arcTo: function(t, i, n, e, s) {
            this[Fk][Gk](t, i, n, e, s),
            this.firePathChange()
        },
        closePath: function() {
            this[Fk][Yf](),
            this[xk]()
        },
        clear: function() {
            this[Fk][so](),
            this[xk]()
        },
        removePathSegmentByIndex: function(t) {
            this[Fk][zk](t) !== !1 && this.firePathChange()
        },
        firePathChange: function() {
            this[Fk]._63 = !0,
            this[Eh](new fH(this,mk))
        },
        addPathSegment: function(t, i, n) {
            this[Fk].add(new Bq(i || Cq,t), n),
            this[xk]()
        }
    },
    E(cW, uW),
    K(cW[lh], {
        path: {
            get: function() {
                return this.image
            },
            set: function(t) {
                this[Ax] = t
            }
        },
        pathSegments: {
            get: function() {
                return this.path[Yk]
            },
            set: function(t) {
                this.path[Yk] = t || [],
                this[xk]()
            }
        },
        length: {
            get: function() {
                return this[Fk][nh]
            }
        }
    }),
    eq.ShapeNode = cW;
    var _W = {
        _iw: {},
        register: function(t, i) {
            _W._iw[t] = i
        },
        getShape: function(t, i, e, s, r, h) {
            s === n && (s = i,
            r = e,
            i = 0,
            e = 0),
            s || (s = 50),
            r || (r = 50);
            var a = _W._iw[t];
            return a ? a[Hk]instanceof Function ? a.generator(i, e, s, r, h) : a : void 0
        },
        getRect: function(t, i, n, e, s, r, h) {
            return t instanceof Object && ca in t && (i = t.y,
            n = t[ca],
            e = t[eo],
            s = t.rx,
            r = t.ry,
            h = t[Fk],
            t = t.x),
            Ue(h || new Gq, t, i, n, e, s, r)
        },
        getAllShapes: function(t, i, n, e, s) {
            var r = {};
            for (var h in _W._iw) {
                var a = _W.getShape(h, t, i, n, e, s);
                a && (r[h] = a)
            }
            return r
        },
        createRegularShape: function(t, i, n, e, s) {
            return Qe(t, i, n, e, s)
        }
    };
    _s(),
    ds[lh] = {
        type: qk
    },
    E(ds, cW),
    eq.Bus = ds,
    ls.prototype = {
        _g9: function(t) {
            var i, n = t._j5;
            i = n ? n._f1 : this[fb];
            var e = i.indexOf(t);
            if (0 > e)
                throw new Error(lb + t + "' not exist in the box");
            for (; e >= 0; ) {
                if (0 == e)
                    return n instanceof uW ? n : null;
                e -= 1;
                var r = i[Sl](e);
                if (r = s(r))
                    return r
            }
            return null
        },
        forEachNode: function(t, i) {
            this[Du](function(n) {
                return n instanceof uW && t[sh](i, n) === !1 ? !1 : void 0
            })
        },
        _3h: null
    },
    E(ls, pH),
    K(ls.prototype, {
        propertyChangeDispatcher: {
            get: function() {
                return this._$q
            }
        },
        currentSubNetwork: {
            get: function() {
                return this._3h
            },
            set: function(t) {
                if (t && !t[$_] && (t = null),
                this._3h != t) {
                    var i = this._3h;
                    this._3h = t,
                    this._$q[Eh](new fH(this,Uk,t,i))
                }
            }
        }
    }),
    YY[Wk] = sq[Vk],
    YY.GROUP_PADDING = 5,
    YY.GROUP_EXPANDED = !0,
    YY.GROUP_MIN_SIZE = {
        width: 60,
        height: 60
    };
    var dW = function(t, i, e) {
        w(this, dW, arguments),
        (i === n || e === n) && (this[Sk][Xk] = !0),
        this[Zk] = YY.GROUP_TYPE,
        this[Kf] = YY[Kk],
        this[Ek] = Hq[Jk],
        this[Qk] = YY[tO],
        this[BM] = YY[iO]
    };
    dW[lh] = {
        type: nO,
        $uiClass: cr,
        _8q: function() {
            return !this._gl && !this._dg
        },
        forEachOutEdge: function(t, i, n) {
            return He(this, t, i) === !1 ? !1 : !n && this._8q() && this._7r ? this._7r[Du](t, i) : void 0
        },
        forEachInEdge: function(t, i, n) {
            return qe(this, t, i) === !1 ? !1 : !n && this._8q() && this._8r ? this._8r[Du](t, i) : void 0
        },
        forEachEdge: function(t, i, n) {
            return T(this, dW, sl, arguments) === !1 ? !1 : n || n || !this._8q() ? void 0 : this._8r && this._8r[Du](t, i) === !1 ? !1 : this._7r ? this._7r.forEach(t, i) : void 0
        },
        hasInEdge: function(t) {
            return t ? null != this._hj : null != this._hj || this._6b()
        },
        hasOutEdge: function(t) {
            return t ? null != this._fk : null != this._fk || this._52()
        },
        hasEdge: function(t) {
            return t ? null != this._hj || null != this._fk : null != this._hj || null != this._fk || this._91()
        }
    },
    E(dW, uW),
    K(dW.prototype, {
        expanded: {
            get: function() {
                return this._gl
            },
            set: function(t) {
                if (this._gl != t) {
                    var i = new fH(this,BM,t,this._gl);
                    this[ph](i) !== !1 && (this._gl = t,
                    this._$v(),
                    this[Eh](i),
                    this._dg || vs.call(this))
                }
            }
        }
    }),
    A(dW.prototype, [eO, sO, rO, hO]),
    eq.Group = dW,
    bs[lh][qo] = aO,
    E(bs, uW),
    eq[oO] = bs;
    var lW = function(t) {
        this._iz = new KY,
        this._7w = new KY,
        this._fd = new KY,
        this.id = ++kY,
        t && (this.data = t)
    };
    lW[lh] = {
        invalidate: function() {
            this[FM]()
        },
        _17: !0,
        _iz: null,
        _7w: null,
        _fd: null,
        _mm6: !1,
        _j1: 1,
        _j3: 1,
        _hp: !0,
        _7x: 0,
        _6c: 0,
        _j5: null,
        _mm2: null,
        borderColor: fO,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _13: function() {
            this[uO] = ci(this[Dk], this._7x, this._6c)
        },
        setMeasuredBounds: function(t, i, n, e) {
            return t instanceof Object && (n = t.x,
            e = t.y,
            i = t[eo],
            t = t[ca]),
            this._iz[ca] == t && this._iz[eo] == i && this._iz.x == n && this._iz.y == e ? !1 : void this._iz.set(n || 0, e || 0, t || 0, i || 0)
        },
        initialize: function() {},
        measure: function() {},
        draw: function() {},
        _7p: function(t, i, n) {
            n[cO] == sq.SELECTION_TYPE_SHADOW ? (t.shadowColor = n.selectionColor,
            t[Ex] = n[rp] * i,
            t[wx] = (n[hp] || 0) * i,
            t.shadowOffsetY = (n[ap] || 0) * i) : this._1o(t, i, n)
        },
        _1o: function(t, i, n) {
            var e = n[up] || 0;
            n[_O] && (t[_f] = n[_O],
            t.fillRect(this._7w.x - e / 2, this._7w.y - e / 2, this._7w[ca] + e, this._7w[eo] + e)),
            t[hd] = n[sp],
            t.lineWidth = e,
            t.strokeRect(this._7w.x - e / 2, this._7w.y - e / 2, this._7w.width + e, this._7w[eo] + e)
        },
        _j7: function(t, i, n, e) {
            if (!this._hp)
                return !1;
            if (this.syncSelection || (n = this.selected),
            (n && !this[dO] || !e) && (e = this),
            t.save(),
            1 != this.$alpha && (t[of] = this[lO]),
            t[ff](this.$x, this.$y),
            this[Wf] && this[Vf] && t.rotate(this[Vf]),
            (this.offsetX || this[vO]) && t[ff](this.offsetX, this.offsetY),
            this[qf] && t[Uo](this[qf]),
            this.$layoutByAnchorPoint && this._mm2 && t.translate(-this[Qo].x, -this._mm2.y),
            this.shadowColor && (t[px] = this[px],
            t[Ex] = this.shadowBlur * i,
            t[wx] = this[wx] * i,
            t[Tx] = this[Tx] * i),
            n && e.selectionType == sq[bO] && (this._1o(t, i, e),
            n = !1),
            this._$n() && this[cu] && !this._lqShape._empty) {
                this[cu][Co]();
                var s = {
                    lineWidth: this.$border,
                    strokeStyle: this.borderColor,
                    lineDash: this[gO],
                    lineDashOffset: this[yO],
                    fillColor: this[mO],
                    fillGradient: this[xO],
                    lineCap: Bm,
                    lineJoin: Gf
                };
                this._lqShape[mf](t, i, s, n, e),
                n = !1,
                t[px] = dp
            }
            t[cf](),
            this[mf](t, i, n, e),
            t.restore()
        },
        invalidateData: function() {
            this.$invalidateData = !0,
            this[Xf] = !0,
            this._17 = !0
        },
        invalidateSize: function() {
            this[Xf] = !0,
            this._17 = !0
        },
        invalidateRender: function() {
            this._17 = !0
        },
        _51: function() {},
        _$n: function() {
            return this.$backgroundColor || this.$backgroundGradient || this.$border
        },
        _3x: function() {
            return this[mO] || this[pO]
        },
        doValidate: function() {
            return this.$invalidateData && (this.$invalidateData = !1,
            this[EO]() !== !1 && (this[Xf] = !0)),
            this[Xf] && this[wO] && this[wO](),
            Zn.call(this) ? (this.$invalidateRotate = !0,
            this.onBoundsChanged && this[TO](),
            !0) : this[MO] ? (this[bu] = !0,
            this.$invalidateLocation = !1,
            !0) : void 0
        },
        validate: function() {
            var t = this._hp;
            return this[kO] && (this[kO] = !1,
            this._hp = this[OO],
            !this._hp || (this[lu] || this.$showEmpty) && this._51() !== !1 || (this._hp = !1)),
            this._hp ? (this._17 = !1,
            this[$c] || (this[SO](),
            this[$c] = !0),
            this.doValidate()) : t != this._hp
        },
        _hu: function(t, i) {
            return t -= this.$x,
            i -= this.$y,
            Xn.call(this, {
                x: t,
                y: i
            })
        },
        hitTest: function(t, i, n, e) {
            if (t -= this.$x,
            i -= this.$y,
            !this._fd[No](t, i, n))
                return !1;
            var s = Xn.call(this, {
                x: t,
                y: i
            });
            return t = s.x,
            i = s.y,
            !e && this._$n() && this._lqShape && this._lqShape.hitTest(t, i, n, !1, this[Jf], this[mO] || this[pO]) ? !0 : this[IO](t, i, n)
        },
        doHitTest: function(t, i, n) {
            return this._iz[No](t, i, n)
        },
        hitTestByBounds: function(t, i, n, e) {
            var s = this._hu(t, i);
            return !e && this._$n() && this[cu] && this[cu][j_](t, i, n, !1, this.$border, this.$backgroundColor || this[pO]) ? !0 : this._iz[No](s.x, s.y, n)
        },
        onDataChanged: function() {
            this[AO] = !0,
            this._17 = !0,
            this[kO] = !0
        },
        getBounds: function() {
            var t = this._fd[fh]();
            return t[ex](this.x, this.y),
            this[Qu] && (this[Qu].rotate && ji(t, this[Qu][Uo], t),
            t.offset(this[Qu].x || 0, this[Qu].y || 0)),
            t
        },
        destroy: function() {
            this[kM] = !0
        },
        _dj: !1
    },
    K(lW[lh], {
        originalBounds: {
            get: function() {
                return this._iz
            }
        },
        data: {
            get: function() {
                return this[lu]
            },
            set: function(t) {
                if (this.$data != t) {
                    var i = this[lu];
                    this.$data = t,
                    this[PO](t, i)
                }
            }
        },
        parent: {
            get: function() {
                return this._j5
            }
        },
        showOnTop: {
            get: function() {
                return this._dj
            },
            set: function(t) {
                t != this._dj && (this._dj = t,
                this._17 = !0,
                this._j5 && this._j5._ml3 && this._j5[jO](this))
            }
        }
    }),
    ys(lW[lh], {
        visible: {
            value: !0,
            validateFlags: [LO, CO]
        },
        showEmpty: {
            validateFlags: [LO]
        },
        anchorPosition: {
            value: QY[hv],
            validateFlags: [RO, CO]
        },
        position: {
            value: QY[hv],
            validateFlags: [CO]
        },
        offsetX: {
            value: 0,
            validateFlags: [CO]
        },
        offsetY: {
            value: 0,
            validateFlags: [CO]
        },
        layoutByAnchorPoint: {
            value: !0,
            validateFlags: [DO, RO, CO]
        },
        padding: {
            value: 0,
            validateFlags: [DO]
        },
        border: {
            value: 0,
            validateFlags: [DO]
        },
        borderRadius: {
            value: YY.BORDER_RADIUS
        },
        showPointer: {
            value: !1,
            validateFlags: [DO]
        },
        pointerX: {
            value: 0,
            validateFlags: [DO]
        },
        pointerY: {
            value: 0,
            validateFlags: [DO]
        },
        pointerWidth: {
            value: YY[tx]
        },
        backgroundColor: {
            validateFlags: [DO]
        },
        backgroundGradient: {
            validateFlags: [DO, NO]
        },
        selected: {
            value: !1,
            validateFlags: [DO]
        },
        selectionBorder: {
            value: YY[Zm],
            validateFlags: [DO]
        },
        selectionShadowBlur: {
            value: YY[Km],
            validateFlags: [DO]
        },
        selectionColor: {
            value: YY[Jm],
            validateFlags: [DO]
        },
        selectionType: {
            value: YY.SELECTION_TYPE,
            validateFlags: [DO]
        },
        selectionShadowOffsetX: {
            value: 0,
            validateFlags: [DO]
        },
        selectionShadowOffsetY: {
            value: 0,
            validateFlags: [DO]
        },
        shadowBlur: {
            value: 0,
            validateFlags: [DO]
        },
        shadowColor: {
            validateFlags: [DO]
        },
        shadowOffsetX: {
            value: 0,
            validateFlags: [DO]
        },
        shadowOffsetY: {
            value: 0,
            validateFlags: [DO]
        },
        renderColorBlendMode: {},
        renderColor: {},
        x: {
            value: 0,
            validateFlags: [CO]
        },
        y: {
            value: 0,
            validateFlags: [CO]
        },
        rotatable: {
            value: !0,
            validateFlags: [$O, DO]
        },
        rotate: {
            value: 0,
            validateFlags: [$O, DO]
        },
        _hostRotate: {
            validateFlags: [$O]
        },
        lineWidth: {
            value: 0,
            validateFlags: [Fy]
        },
        alpha: {
            value: 1
        }
    });
    var vW = [sq[qc], sq[Wc], sq[Uc]];
    xs[lh] = {
        removeBinding: function(t) {
            for (var i = vW.length; --i >= 0; ) {
                var n = vW[i]
                  , e = this[n];
                for (var s in e) {
                    var r = e[s];
                    Array.isArray(r) ? (v(r, function(i) {
                        return i[Qw] == t
                    }, this),
                    r[nh] || delete e[s]) : r[Qw] == t && delete e[s]
                }
            }
        },
        _22: function(t, i, n) {
            if (!n && (n = this[i.propertyType || sq[qc]],
            !n))
                return !1;
            var e = n[t];
            e ? (Array.isArray(e) || (n[t] = e = [e]),
            e[uh](i)) : n[t] = i
        },
        _2a: function(t, i, n, e, s, r) {
            t = t || sq[qc];
            var h = this[t];
            if (!h)
                return !1;
            var a = {
                property: i,
                propertyType: t,
                bindingProperty: e,
                target: n,
                callback: s,
                invalidateSize: r
            };
            this._22(i, a, h)
        },
        onBindingPropertyChange: function(t, i, n, e) {
            var s = this[n || sq[qc]];
            if (!s)
                return !1;
            var r = s[i];
            return r ? (t._17 = !0,
            ms(t, r, n, e),
            !0) : !1
        },
        initBindingProperties: function(t, i) {
            for (var e = vW[nh]; --e >= 0; ) {
                var s = vW[e]
                  , r = this[s];
                for (var h in r) {
                    var a = r[h];
                    if (a[Yc]) {
                        var o = a[Qw];
                        if (o) {
                            if (!(o instanceof lW || (o = t[o])))
                                continue
                        } else
                            o = t;
                        var f;
                        f = i === !1 ? t[Gc](a.property, s) : s == sq[Wc] ? t[E_].getStyle(t[lu], a[zc]) : t[lu][a[zc]],
                        f !== n && (o[a.bindingProperty] = f)
                    }
                }
            }
        }
    };
    var bW = {};
    bW.SELECTION_COLOR = BO,
    bW[Zm] = FO,
    bW.SELECTION_SHADOW_BLUR = "selection.shadow.blur",
    bW[GO] = "selection.shadow.offset.x",
    bW[zO] = "selection.shadow.offset.y",
    bW[YO] = HO,
    bW[qO] = UO,
    bW[WO] = "render.color.blend.mode",
    bW[VO] = XO,
    bW[ZO] = KO,
    bW[JO] = QO,
    bW[tS] = iS,
    bW[nS] = eS,
    bW[sS] = rS,
    bW[hS] = aS,
    bW[oS] = "shape.stroke.fill.color",
    bW[fS] = uS,
    bW[cS] = "shape.line.dash.offset",
    bW[_S] = dS,
    bW[lS] = vS,
    bW.SHAPE_OUTLINE = bS,
    bW.SHAPE_OUTLINE_STYLE = gS,
    bW[yS] = mS,
    bW[xS] = pS,
    bW[ES] = wS,
    bW[TS] = MS,
    bW[kS] = OS,
    bW[SS] = IS,
    bW[AS] = "border.line.dash.offset",
    bW[Qm] = PS,
    bW[jS] = rO,
    bW[LS] = CS,
    bW.LINE_JOIN = RS,
    bW[DS] = NS,
    bW[$S] = BS,
    bW.IMAGE_BACKGROUND_COLOR = "image.background.color",
    bW[FS] = "image.background.gradient",
    bW.IMAGE_BORDER = GS,
    bW[zS] = bW[YS] = HS,
    bW[qS] = "image.border.line.dash",
    bW.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset",
    bW.IMAGE_RADIUS = bW[US] = WS,
    bW[VS] = XS,
    bW[ZS] = KS,
    bW[JS] = QS,
    bW.IMAGE_ALPHA = tI,
    bW.LABEL_ROTATE = iI,
    bW[nI] = eI,
    bW[sI] = rI,
    bW[hI] = "label.anchor.position",
    bW.LABEL_COLOR = aI,
    bW.LABEL_FONT_SIZE = oI,
    bW.LABEL_FONT_FAMILY = fI,
    bW[uI] = cI,
    bW[_I] = dI,
    bW[lI] = vI,
    bW[bI] = gI,
    bW[yI] = mI,
    bW[xI] = pI,
    bW.LABEL_OFFSET_Y = EI,
    bW[wI] = TI,
    bW.LABEL_ALIGN_POSITION = MI,
    bW[kI] = OI,
    bW[SI] = II,
    bW.LABEL_BACKGROUND_COLOR = "label.background.color",
    bW[AI] = "label.background.gradient",
    bW.LABEL_ROTATABLE = PI,
    bW.LABEL_SHADOW_BLUR = jI,
    bW[LI] = CI,
    bW[RI] = "label.shadow.offset.x",
    bW.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y",
    bW[DI] = NI,
    bW.LABEL_ON_TOP = $I,
    bW[BI] = "group.background.color",
    bW.GROUP_BACKGROUND_GRADIENT = "group.background.gradient",
    bW[FI] = GI,
    bW[zI] = YI,
    bW[HI] = "group.stroke.line.dash",
    bW.GROUP_STROKE_LINE_DASH_OFFSET = "group.stroke.line.dash.offset",
    bW[qI] = "edge.bundle.label.rotate",
    bW[UI] = "edge.bundle.label.position",
    bW[WI] = "edge.bundle.label.anchor.position",
    bW[VI] = "edge.bundle.label.color",
    bW.EDGE_BUNDLE_LABEL_FONT_SIZE = "edge.bundle.label.font.size",
    bW[XI] = "edge.bundle.label.font.family",
    bW[ZI] = "edge.bundle.label.font.style",
    bW.EDGE_BUNDLE_LABEL_PADDING = "edge.bundle.label.padding",
    bW[KI] = "edge.bundle.label.pointer.width",
    bW[JI] = "edge.bundle.label.pointer",
    bW[QI] = "edge.bundle.label.radius",
    bW[tA] = "edge.bundle.label.offset.x",
    bW[iA] = "edge.bundle.label.offset.y",
    bW[nA] = "edge.bundle.label.border",
    bW[eA] = "edge.bundle.label.border.color",
    bW[sA] = "edge.bundle.label.background.color",
    bW[rA] = "edge.bundle.label.background.gradient",
    bW.EDGE_BUNDLE_LABEL_ROTATABLE = "edge.bundle.label.rotatable",
    bW[hA] = aA,
    bW[oA] = fA,
    bW[uA] = cA,
    bW[_A] = dA,
    bW[lA] = vA,
    bW.EDGE_LINE_DASH_OFFSET = "edge.line.dash.offset",
    bW.EDGE_FROM_OFFSET = bA,
    bW[p_] = gA,
    bW[yA] = mA,
    bW[C_] = xA,
    bW[pA] = EA,
    bW[R_] = wA,
    bW.EDGE_EXTEND = TA,
    bW[MA] = kA,
    bW[e_] = "edge.split.by.percent",
    bW[o_] = OA,
    bW.EDGE_SPLIT_VALUE = SA,
    bW[IA] = AA,
    bW[PA] = jA,
    bW.EDGE_FROM_AT_EDGE = LA,
    bW.EDGE_TO_AT_EDGE = CA,
    bW[y_] = RA,
    bW[DA] = NA,
    bW.ARROW_FROM = $A,
    bW[BA] = FA,
    bW[GA] = zA,
    bW[YA] = HA,
    bW[qA] = "arrow.from.stroke.style",
    bW.ARROW_FROM_OUTLINE = UA,
    bW[WA] = "arrow.from.outline.style",
    bW[VA] = XA,
    bW.ARROW_FROM_LINE_DASH_OFFSET = "arrow.from.line.dash.offset",
    bW[ZA] = "arrow.from.fill.color",
    bW.ARROW_FROM_FILL_GRADIENT = "arrow.from.fill.gradient",
    bW[KA] = JA,
    bW[QA] = tP,
    bW.ARROW_TO = iP,
    bW[nP] = eP,
    bW[sP] = rP,
    bW[hP] = aP,
    bW[oP] = "arrow.to.stroke.style",
    bW.ARROW_TO_OUTLINE = fP,
    bW[uP] = "arrow.to.outline.style",
    bW[cP] = _P,
    bW[dP] = "arrow.to.line.dash.offset",
    bW.ARROW_TO_FILL_COLOR = lP,
    bW[vP] = "arrow.to.fill.gradient",
    bW.ARROW_TO_LINE_CAP = bP,
    bW[gP] = yP;
    var gW = new xs
      , yW = sq[qc]
      , mW = sq.PROPERTY_TYPE_STYLE
      , xW = !1;
    gW._2a(mW, bW[YO], null, cO),
    gW._2a(mW, bW[Zm], null, up),
    gW._2a(mW, bW[Km], null, rp),
    gW._2a(mW, bW[Jm], null, sp),
    gW._2a(mW, bW[GO], null, "selectionShadowOffsetX"),
    gW._2a(mW, bW[zO], null, "selectionShadowOffsetY"),
    gW._2a(yW, Ef, QE, nf),
    gW._2a(mW, bW[sI], QE, mP),
    gW._2a(mW, bW.LABEL_POSITION, QE, Fx),
    gW._2a(mW, bW.LABEL_ANCHOR_POSITION, QE, Dk),
    gW._2a(mW, bW.LABEL_COLOR, QE, xP),
    gW._2a(mW, bW.LABEL_FONT_SIZE, QE, Ad),
    gW._2a(mW, bW.LABEL_BORDER, QE, Jy),
    gW._2a(mW, bW[SI], QE, pP),
    gW._2a(mW, bW[EP], QE, wP),
    gW._2a(mW, bW.LABEL_ON_TOP, QE, TP),
    xW || (gW._2a(mW, bW.SHADOW_BLUR, null, Ex),
    gW._2a(mW, bW[JO], null, px),
    gW._2a(mW, bW.SHADOW_OFFSET_X, null, wx),
    gW._2a(mW, bW.SHADOW_OFFSET_Y, null, Tx),
    gW._2a(mW, bW[MP], QE, Pd),
    gW._2a(mW, bW[uI], QE, Id),
    gW._2a(mW, bW[kP], QE, OP),
    gW._2a(mW, bW[SP], QE, Uo),
    gW._2a(mW, bW.LABEL_PADDING, QE, rO),
    gW._2a(mW, bW.LABEL_POINTER_WIDTH, QE, IP),
    gW._2a(mW, bW.LABEL_POINTER, QE, tu),
    gW._2a(mW, bW.LABEL_RADIUS, QE, AP),
    gW._2a(mW, bW.LABEL_OFFSET_X, QE, PP),
    gW._2a(mW, bW[jP], QE, vO),
    gW._2a(mW, bW[LP], QE, CP),
    gW._2a(mW, bW[AI], QE, su),
    gW._2a(mW, bW.LABEL_SIZE, QE, MT),
    gW._2a(mW, bW[RP], QE, Ex),
    gW._2a(mW, bW.LABEL_SHADOW_COLOR, QE, px),
    gW._2a(mW, bW[RI], QE, wx),
    gW._2a(mW, bW[DP], QE, Tx),
    gW._2a(mW, bW[DI], QE, BT),
    gW._2a(mW, bW[qO], null, ox),
    gW._2a(mW, bW.RENDER_COLOR_BLEND_MODE, null, kx),
    gW._2a(mW, bW[VO], null, XO));
    var pW = new xs;
    pW._2a(yW, Ik),
    pW._2a(yW, Dk, null, NP),
    pW._2a(yW, Uo, null, Uo),
    xW || (pW._2a(mW, bW[xS], null, wP),
    pW._2a(mW, bW[ES], null, su),
    pW._2a(mW, bW[jS], null, rO),
    pW._2a(mW, bW[TS], null, Jy),
    pW._2a(mW, bW[Qm], null, AP),
    pW._2a(mW, bW.BORDER_COLOR, null, pP),
    pW._2a(mW, bW[SS], null, gO),
    pW._2a(mW, bW.BORDER_LINE_DASH_OFFSET, null, yO)),
    pW._2a(yW, Ax, Ax, nf, $P),
    pW._2a(yW, MT, Ax, MT),
    pW._2a(mW, bW[sS], Ax, zo),
    pW._2a(mW, bW[hS], Ax, hd),
    pW._2a(mW, bW[_S], Ax, lp),
    pW._2a(mW, bW[yS], Ax, du),
    xW || (pW._2a(mW, bW[JS], Ax, BP),
    pW._2a(mW, bW[FP], Ax, fp),
    pW._2a(mW, bW[GP], Ax, _p),
    pW._2a(mW, bW[lS], Ax, vp),
    pW._2a(mW, bW[fS], Ax, gu),
    pW._2a(mW, bW[cS], Ax, wu),
    pW._2a(mW, bW[LS], Ax, cp),
    pW._2a(mW, bW[zP], Ax, rd),
    pW._2a(mW, bW.IMAGE_BACKGROUND_COLOR, Ax, wP),
    pW._2a(mW, bW[FS], Ax, su),
    pW._2a(mW, bW[VS], Ax, rO),
    pW._2a(mW, bW[YP], Ax, Jy),
    pW._2a(mW, bW.IMAGE_BORDER_RADIUS, Ax, AP),
    pW._2a(mW, bW[YS], Ax, pP),
    pW._2a(mW, bW[qS], Ax, gO),
    pW._2a(mW, bW[HP], Ax, yO),
    pW._2a(mW, bW.IMAGE_Z_INDEX, Ax, BT),
    pW._2a(mW, bW[qP], Ax, XO)),
    pW._2a(yW, BM, null, null, UP),
    pW._2a(yW, $_, null, null, UP);
    var EW = new xs;
    EW._2a(yW, sO, null, null, WP),
    EW._2a(yW, hO, null, null, WP),
    EW._2a(yW, eO, null, null, WP),
    EW._2a(yW, rO, null, null, WP),
    EW._2a(mW, bW[BI], VP, lp),
    EW._2a(mW, bW.GROUP_BACKGROUND_GRADIENT, VP, vp),
    EW._2a(mW, bW[FI], VP, zo),
    EW._2a(mW, bW.GROUP_STROKE_STYLE, VP, hd),
    EW._2a(mW, bW[HI], VP, gu),
    EW._2a(mW, bW[XP], VP, wu);
    var wW = new xs;
    wW._2a(yW, tl, VP, null, ZP),
    wW._2a(yW, pk, VP, null, ZP),
    wW._2a(yW, T_, VP, null, ZP),
    wW._2a(mW, bW.EDGE_EXTEND, VP, null, ZP),
    wW._2a(mW, bW.EDGE_BUNDLE_TYPE, VP, null, ZP),
    wW._2a(mW, bW[hA], VP, zo),
    wW._2a(mW, bW[oA], VP, hd),
    wW._2a(mW, bW[KP], VP, JP),
    wW._2a(mW, bW[$k], VP, QP),
    xW || (wW._2a(mW, bW.LINE_DASH_CAP, VP, tj),
    wW._2a(mW, bW[$S], VP, gp),
    wW._2a(mW, bW.EDGE_FILL_COLOR, VP, bp),
    wW._2a(mW, bW.EDGE_FROM_AT_EDGE, null, I_, ZP),
    wW._2a(mW, bW[ij], null, nj, ZP),
    wW._2a(mW, bW.EDGE_OUTLINE, VP, fp),
    wW._2a(mW, bW[_A], VP, _p),
    wW._2a(mW, bW[lA], VP, gu),
    wW._2a(mW, bW.EDGE_LINE_DASH_OFFSET, VP, wu),
    wW._2a(mW, bW.EDGE_CONTROL_POINT, VP, null, ZP),
    wW._2a(mW, bW[m_], VP, null, ZP),
    wW._2a(mW, bW[p_], VP, null, ZP),
    wW._2a(mW, bW[y_], VP, null, ZP),
    wW._2a(mW, bW.EDGE_TO_PORT, VP, null, ZP),
    wW._2a(mW, bW[LS], VP, cp),
    wW._2a(mW, bW.LINE_JOIN, VP, rd),
    wW._2a(yW, mk, null, null, ZP, !0),
    wW._2a(yW, S_, null, null, ZP, !0),
    wW._2a(mW, bW[BA], VP, ej),
    wW._2a(mW, bW.ARROW_FROM_OFFSET, VP, sj),
    wW._2a(mW, bW.ARROW_FROM_STROKE, VP, rj),
    wW._2a(mW, bW[qA], VP, hj),
    wW._2a(mW, bW[aj], VP, oj),
    wW._2a(mW, bW[WA], VP, "fromArrowOutlineStyle"),
    wW._2a(mW, bW.ARROW_FROM_FILL_COLOR, VP, fj),
    wW._2a(mW, bW.ARROW_FROM_FILL_GRADIENT, VP, "fromArrowFillGradient"),
    wW._2a(mW, bW[VA], VP, uj),
    wW._2a(mW, bW.ARROW_FROM_LINE_DASH_OFFSET, VP, "fromArrowLineDashOffset"),
    wW._2a(mW, bW[QA], VP, cj),
    wW._2a(mW, bW.ARROW_FROM_LINE_CAP, VP, _j),
    wW._2a(mW, bW.ARROW_TO_SIZE, VP, dj),
    wW._2a(mW, bW.ARROW_TO_OFFSET, VP, lj),
    wW._2a(mW, bW[hP], VP, vj),
    wW._2a(mW, bW.ARROW_TO_STROKE_STYLE, VP, bj),
    wW._2a(mW, bW[gj], VP, yj),
    wW._2a(mW, bW[uP], VP, mj),
    wW._2a(mW, bW[xj], VP, pj),
    wW._2a(mW, bW[vP], VP, Ej),
    wW._2a(mW, bW.ARROW_TO_LINE_DASH, VP, wj),
    wW._2a(mW, bW[dP], VP, "toArrowLineDashOffset"),
    wW._2a(mW, bW[gP], VP, Tj),
    wW._2a(mW, bW[Mj], VP, kj));
    var TW = new xs;
    TW._2a(mW, bW[VI], Oj, xP),
    TW._2a(mW, bW[UI], Oj, Fx),
    TW._2a(mW, bW[WI], Oj, Dk),
    TW._2a(mW, bW[Sj], Oj, Ad),
    TW._2a(mW, bW[Ij], Oj, CP),
    xW || (TW._2a(mW, bW[qI], Oj, Uo),
    TW._2a(mW, bW.EDGE_BUNDLE_LABEL_FONT_FAMILY, Oj, Pd),
    TW._2a(mW, bW.EDGE_BUNDLE_LABEL_FONT_STYLE, Oj, Id),
    TW._2a(mW, bW.EDGE_BUNDLE_LABEL_PADDING, Oj, rO),
    TW._2a(mW, bW.EDGE_BUNDLE_LABEL_POINTER_WIDTH, Oj, IP),
    TW._2a(mW, bW[JI], Oj, tu),
    TW._2a(mW, bW[QI], Oj, AP),
    TW._2a(mW, bW.EDGE_BUNDLE_LABEL_OFFSET_X, Oj, PP),
    TW._2a(mW, bW[iA], Oj, vO),
    TW._2a(mW, bW[nA], Oj, Jy),
    TW._2a(mW, bW[eA], Oj, pP),
    TW._2a(mW, bW.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR, Oj, wP),
    TW._2a(mW, bW[rA], Oj, su));
    var MW = new xs;
    MW._2a(yW, Ik),
    MW._2a(mW, bW[xS], null, wP),
    MW._2a(mW, bW[ES], null, su),
    MW._2a(mW, bW[jS], null, rO),
    MW._2a(mW, bW.BORDER, null, Jy),
    MW._2a(mW, bW[Qm], null, AP),
    MW._2a(mW, bW.BORDER_COLOR, null, pP),
    MW._2a(mW, bW.BORDER_LINE_DASH, null, gO),
    MW._2a(mW, bW.BORDER_LINE_DASH_OFFSET, null, yO),
    MW._2a(yW, Uo, null, Uo),
    MW._2a(yW, mk, null, null, Aj),
    MW._2a(yW, Fk, Ax, nf),
    MW._2a(yW, MT, Ax, MT),
    MW._2a(mW, bW.SHAPE_STROKE, Ax, zo),
    MW._2a(mW, bW.SHAPE_STROKE_STYLE, Ax, hd),
    MW._2a(mW, bW[_S], Ax, lp),
    MW._2a(mW, bW[lS], Ax, vp),
    xW || (MW._2a(mW, bW[DS], Ax, tj),
    MW._2a(mW, bW.LINE_DASH_JOIN, Ax, gp),
    MW._2a(mW, bW[oS], Ax, bp),
    MW._2a(mW, bW[FP], Ax, fp),
    MW._2a(mW, bW[GP], Ax, _p),
    MW._2a(mW, bW[fS], Ax, gu),
    MW._2a(mW, bW[cS], Ax, wu),
    MW._2a(mW, bW[LS], Ax, cp),
    MW._2a(mW, bW[zP], Ax, rd),
    MW._2a(mW, bW[yS], Ax, du),
    MW._2a(mW, bW.IMAGE_BACKGROUND_COLOR, Ax, wP),
    MW._2a(mW, bW[FS], Ax, su),
    MW._2a(mW, bW[VS], Ax, rO),
    MW._2a(mW, bW.IMAGE_BORDER, Ax, Jy),
    MW._2a(mW, bW[US], Ax, AP),
    MW._2a(mW, bW.IMAGE_BORDER_COLOR, Ax, pP),
    MW._2a(mW, bW.IMAGE_BORDER_LINE_DASH, Ax, gO),
    MW._2a(mW, bW[HP], Ax, yO),
    MW._2a(mW, bW[KP], Ax, JP),
    MW._2a(mW, bW[BA], Ax, ej),
    MW._2a(mW, bW[GA], Ax, sj),
    MW._2a(mW, bW.ARROW_FROM_STROKE, Ax, rj),
    MW._2a(mW, bW[qA], Ax, hj),
    MW._2a(mW, bW[ZA], Ax, fj),
    MW._2a(mW, bW[Pj], Ax, "fromArrowFillGradient"),
    MW._2a(mW, bW[VA], Ax, uj),
    MW._2a(mW, bW[jj], Ax, "fromArrowLineDashOffset"),
    MW._2a(mW, bW[QA], Ax, cj),
    MW._2a(mW, bW[KA], Ax, _j),
    MW._2a(mW, bW.ARROW_TO_SIZE, Ax, dj),
    MW._2a(mW, bW[sP], Ax, lj),
    MW._2a(mW, bW.ARROW_TO, Ax, QP),
    MW._2a(mW, bW[hP], Ax, vj),
    MW._2a(mW, bW.ARROW_TO_STROKE_STYLE, Ax, bj),
    MW._2a(mW, bW[xj], Ax, pj),
    MW._2a(mW, bW[vP], Ax, Ej),
    MW._2a(mW, bW[cP], Ax, wj),
    MW._2a(mW, bW[dP], Ax, "toArrowLineDashOffset"),
    MW._2a(mW, bW[gP], Ax, Tj),
    MW._2a(mW, bW[Mj], Ax, kj));
    var kW = function(t, i) {
        return t = t[BT],
        i = i.zIndex,
        t == i ? 0 : (t = t || 0,
        i = i || 0,
        t > i ? 1 : i > t ? -1 : void 0)
    }
      , OW = function(t, i) {
        this[Ed] = new KY,
        w(this, OW, arguments),
        this.id = this.$data.id,
        this[E_] = i,
        this._f1 = [],
        this[Lj] = new xs
    };
    OW[lh] = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _mj4: null,
        _f1: null,
        addChild: function(t, i) {
            t._j5 = this,
            i !== n ? y(this._f1, t, i) : this._f1[uh](t),
            t._dj && this._ml3(t),
            this.invalidateChildrenIndex(),
            this[Cj](),
            this[Rj] = !0
        },
        removeChild: function(t) {
            this[Lj][Dj](t),
            t._j5 = null,
            m(this._f1, t),
            this._ji && this._ji[Lh](t),
            this[Cj](),
            this[Rj] = !0
        },
        getProperty: function(t, i) {
            return i == sq[Wc] ? this[E_][n_](this[lu], t) : i == sq.PROPERTY_TYPE_CLIENT ? this[lu].get(t) : this[lu][t]
        },
        getStyle: function(t) {
            return this[E_][n_](this[lu], t)
        },
        _$s: function(t, i, n) {
            var e = this[Lj][Nj](this, t, i, n);
            return gW[Nj](this, t, i, n) || e
        },
        onPropertyChange: function(t) {
            if (BT == t[Vd])
                return this[NM](),
                !0;
            if (rk == t.type) {
                if (TT == t[Vd])
                    return this[TT](),
                    !0;
                var i = t[wh];
                return i && i.ui ? (Gv == t[Vd] ? this._9c(i) : Lh == t[Vd] && this[_b](i.ui),
                !0) : !1
            }
            return this._$s(t[Vd], t[yv] || yW, t.value)
        },
        label: null,
        initLabel: function() {
            var t = new IW;
            t.name = QE,
            this[$j](t),
            this[QE] = t
        },
        initialize: function() {
            this[Bj](),
            this[lu][hk] && this[lu]._mjg[Du](this._9c, this),
            gW[Fj](this),
            this._mj4.initBindingProperties(this, !1)
        },
        addBinding: function(t, i) {
            return i[zc] ? (i.target = t,
            void this[Lj]._22(i.property, i)) : !1
        },
        _f3: function(t, i) {
            var n = this[lu];
            if (!n._mjg)
                return !1;
            var e = n._mjg[tM](t.id);
            if (!e || !e.bindingProperties)
                return !1;
            var s = e.bindingProperties;
            if (B(s)) {
                var r = !1;
                return l(s, function(t) {
                    return nf == t.bindingProperty ? (r = ps(n, i, t[zc], t[yv]),
                    !1) : void 0
                }, this),
                r
            }
            return nf == s[Yc] ? ps(n, i, s.property, s[yv]) : !1
        },
        _9c: function(t) {
            var i = t.ui;
            if (i) {
                var n = t[Gj];
                n && (Array[Nh](n) ? n[Du](function(t) {
                    this[zj](i, t)
                }, this) : this[zj](i, n)),
                this.addChild(i)
            }
        },
        validate: function() {
            return this[$c] || (this[SO](),
            this._mm6 = !0),
            this.doValidate()
        },
        _$a: !0,
        invalidateChildrenIndex: function() {
            this._$a = !0
        },
        doValidate: function() {
            if (this._17 && (this._17 = !1,
            this[Yj]() && (this[EO](),
            this[Xf] = !0),
            this._$a && (this._$a = !1,
            RY ? this._f1 = d(this._f1, kW) : this._f1[UM](kW))),
            Zn[sh](this) && (this.$invalidateRotate = !0),
            this.$invalidateRotate) {
                Uq[sh](this),
                this[Ed][Zf](this._fd);
                var t = this.$selectionBorder || 0
                  , i = Math.max(this[Hj] || 0, this.$shadowOffsetX || 0, this[qj] || 0)
                  , n = Math.max(this[Uj] || 0, this[Wj] || 0)
                  , e = Math.max(2 * t, this[Vj], this[Xj]);
                e += YY[Zj] || 0;
                var s = e - i
                  , r = e + i
                  , h = e - n
                  , a = e + n;
                return 0 > s && (s = 0),
                0 > r && (r = 0),
                0 > h && (h = 0),
                0 > a && (a = 0),
                this[Ed][Qf](h, s, a, r),
                this.onBoundsChanged && this[TO](),
                this[Kj] = !0,
                !0
            }
        },
        validateChildren: function() {
            var t = this[Rj];
            this[Rj] = !1;
            var i = this[Jj]
              , n = this.bodyChanged;
            i && (i.$renderColor = this[Qj],
            i[tL] = this[tL],
            i[iL] = this[iL],
            i[Vj] = this[Vj],
            i[nL] = this.$shadowOffsetX,
            i.$shadowOffsetY = this[Uj]),
            this[eL] = !1,
            i && i._17 && (n = i[Co]() || n,
            i.$x = 0,
            i.$y = 0,
            i.$invalidateRotate && Uq[sh](i),
            t = !0);
            for (var e = 0, s = this._f1[nh]; s > e; e++) {
                var r = this._f1[e];
                if (r != i) {
                    var h = r._17 && r.validate();
                    (h || n) && r._hp && te(r, i, this),
                    !t && h && (t = !0)
                }
            }
            return t
        },
        measure: function() {
            this._iz[so]();
            for (var t, i, n = 0, e = this._f1.length; e > n; n++)
                t = this._f1[n],
                t._hp && (i = t._fd,
                i.width <= 0 || i[eo] <= 0 || this._iz[Wl](t.$x + i.x, t.$y + i.y, i[ca], i[eo]))
        },
        _ji: null,
        _ml3: function(t) {
            if (!this._ji) {
                if (!t[TP])
                    return;
                return this._ji = new HY,
                this._ji.add(t)
            }
            return t[TP] ? this._ji.add(t) : this._ji[Lh](t)
        },
        draw: function(t, i, n) {
            for (var e, s = 0, r = this._f1[nh]; r > s; s++)
                e = this._f1[s],
                e._hp && !e.showOnTop && e._j7(t, i, n, this)
        },
        _9m: function(t, i) {
            if (!this._hp || !this._ji || !this._ji[nh])
                return !1;
            t[af](),
            t[ff](this.$x, this.$y),
            this[Wf] && this[Vf] && t[Uo](this[Vf]),
            (this[PP] || this[vO]) && t[ff](this[PP], this.offsetY),
            this.$rotate && t[Uo](this[qf]),
            this[Hf] && this[Qo] && t[ff](-this[Qo].x, -this._mm2.y),
            this[px] && (t[px] = this.shadowColor,
            t.shadowBlur = this[Ex] * i,
            t[wx] = this[wx] * i,
            t[Tx] = this[Tx] * i),
            t.beginPath();
            for (var n, e = 0, s = this._f1[nh]; s > e; e++)
                n = this._f1[e],
                n._hp && n[TP] && n._j7(t, i, this[DM], this);
            t[So]()
        },
        doHitTest: function(t, i, n) {
            if (n) {
                if (!this._iz.intersectsRect(t - n, i - n, 2 * n, 2 * n))
                    return !1
            } else if (!this._iz.intersectsPoint(t, i))
                return !1;
            return this[sL](t, i, n)
        },
        hitTestChildren: function(t, i, n) {
            for (var e, s = this._f1.length - 1; s >= 0; s--)
                if (e = this._f1[s],
                e._hp && e[j_](t, i, n))
                    return e;
            return !1
        },
        destroy: function() {
            this[kM] = !0;
            for (var t, i = this._f1.length - 1; i >= 0; i--)
                t = this._f1[i],
                t.destroy()
        }
    },
    E(OW, lW),
    K(OW[lh], {
        renderColorBlendMode: {
            get: function() {
                return this.$renderColorBlendMode
            },
            set: function(t) {
                this.$renderColorBlendMode = t,
                this._17 = !0,
                this.body && (this.body[kx] = this[tL])
            }
        },
        renderColor: {
            get: function() {
                return this[Qj]
            },
            set: function(t) {
                this[Qj] = t,
                this._17 = !0,
                this.body && (this.body[ox] = this[Qj])
            }
        },
        bodyBounds: {
            get: function() {
                if (this.$invalidateBounds) {
                    this[Kj] = !1;
                    var t, i = this[rL];
                    t = i && i._hp && !this._$n() ? i._fd[fh]() : this._7w[fh](),
                    this.rotate && (t[hL] = t[fh](),
                    t[Uo] = this.rotate,
                    t.tx = this.x,
                    t.ty = this.y,
                    ji(t, this[Uo], t)),
                    t.x += this.$x,
                    t.y += this.$y,
                    this[aL] = t
                }
                return this[aL]
            }
        },
        bounds: {
            get: function() {
                return new KY((this.$x || 0) + this[Ed].x,(this.$y || 0) + this.uiBounds.y,this.uiBounds[ca],this[Ed][eo])
            }
        },
        body: {
            get: function() {
                return this[Jj]
            },
            set: function(t) {
                t && this[Jj] != t && (this[Jj] = t,
                this[eL] = !0,
                this[Cj]())
            }
        }
    }),
    YY[Zj] = 1;
    var SW = function() {
        w(this, SW, arguments)
    };
    SW[lh] = {
        strokeStyle: oL,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _j1: 1,
        _j3: 1,
        outline: 0,
        onDataChanged: function(t) {
            T(this, SW, PO, arguments),
            this._k5 && this._7n && this._k5._6z(this._7n, this),
            t && this._mly(t)
        },
        _mly: function(t) {
            this._k5 = kn(t),
            this._k5.validate(),
            (this._k5._l5 == gq || this._k5._6t()) && (this._7n || (this._7n = function() {
                this[FM](),
                this._j5 && this._j5[E_] && (this._j5[Cj](),
                this._j5[E_].invalidate())
            }
            ),
            this._k5[Mf](this._7n, this))
        },
        _k5: null,
        initialize: function() {
            this[$P](this[lu])
        },
        _51: function() {
            return this._k5 && this._k5[mf]
        },
        _9h: function(t) {
            if (!t || t[ca] <= 0 || t[eo] <= 0 || !this[fL] || !(this.size instanceof Object))
                return this._j1 = 1,
                void (this._j3 = 1);
            var i = this.size[ca]
              , e = this[MT][eo];
            if ((i === n || null === i) && (i = -1),
            (e === n || null === e) && (e = -1),
            0 > i && 0 > e)
                return this._j1 = 1,
                void (this._j3 = 1);
            var s, r, h = t.width, a = t[eo];
            i >= 0 && (s = i / h),
            e >= 0 && (r = e / a),
            0 > i ? s = r : 0 > e && (r = s),
            this._j1 = s,
            this._j3 = r
        },
        validateSize: function() {
            if (this[uL]) {
                this[uL] = !1;
                var t = this._originalBounds;
                this._j1,
                this._j3,
                this._9h(t),
                this.setMeasuredBounds(t.width * this._j1, t[eo] * this._j3, t.x * this._j1, t.y * this._j3)
            }
        },
        measure: function() {
            var t = this._k5[Ro](this[zo] + this.outline);
            return t ? (this.$invalidateScale = !0,
            void (this[cL] = t[fh]())) : void this._iz.set(0, 0, 0, 0)
        },
        onBoundsChanged: function() {
            this.$invalidateFillGradient = !0
        },
        _1e: function() {
            this[_L] = !1,
            this._fillGradient = this.fillGradient ? Tq[lh][dL].call(this.$fillGradient, this._7w) : null
        },
        _jq: function(t) {
            var i, n;
            if (Xy == this.$adjustType)
                i = 1,
                n = -1;
            else {
                if (Zy != this[lL])
                    return;
                i = -1,
                n = 1
            }
            var e = this._iz.cx
              , s = this._iz.cy;
            t[ff](e, s),
            t[uf](i, n),
            t[ff](-e, -s)
        },
        draw: function(t, i, n, e) {
            if (this._j1 && this._j3) {
                if (this.$invalidateFillGradient && this._1e(),
                t[af](),
                this.$adjustType && this._jq(t),
                this._k5._l5 == mq)
                    return t[uf](this._j1, this._j3),
                    this._k5._l0[mf](t, i, this, n, e || this),
                    void t[So]();
                n && this._7p(t, i, e),
                this._k5[mf](t, i, this, this._j1, this._j3),
                t[So]()
            }
        },
        doHitTest: function(t, i, n) {
            if (this._k5[j_]) {
                if (Xy == this.$adjustType) {
                    var e = this._iz.cy;
                    i = 2 * e - i
                } else if (Zy == this[lL]) {
                    var s = this._iz.cx;
                    t = 2 * s - t
                }
                t /= this._j1,
                i /= this._j3;
                var r = (this._j1 + this._j3) / 2;
                return r > 1 && (n /= r,
                n = 0 | n),
                this._k5._l0 instanceof Gq ? this._k5._l0.hitTest(t, i, n, !0, this[vL], this[bL] || this[gL]) : this._k5.hitTest(t, i, n)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    },
    E(SW, lW),
    ys(SW[lh], {
        adjustType: {},
        fillColor: {},
        size: {
            validateFlags: [DO, yL]
        },
        fillGradient: {
            validateFlags: [mL]
        }
    }),
    K(SW[lh], {
        originalBounds: {
            get: function() {
                return this[cL]
            }
        }
    }),
    YY.ALIGN_POSITION = QY[hv];
    var IW = function() {
        w(this, IW, arguments),
        this[xP] = YY.LABEL_COLOR
    };
    IW[lh] = {
        color: YY[xL],
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _g5: null,
        alignPosition: null,
        measure: function() {
            this[Eo];
            var t = Fi(this[lu], this[pL], this.$fontFamily, this[EL], YY[xo], this.$font);
            if (this._g5 = t,
            this[fL]) {
                var i = this[fL][ca] || 0
                  , n = this[fL][eo] || 0;
                return this[wL](i > t.width ? i : t[ca], n > t[eo] ? n : t[eo])
            }
            return this[wL](t.width, t.height)
        },
        doHitTest: function(t, i, n) {
            return this[lu] ? Nn(t, i, n, this) : !1
        },
        draw: function(t, i, n, e) {
            if (n && this._7p(t, i, e),
            this[pL] || YY[po],
            this[Wf] && this[Vf]) {
                var s = vn(this.$_hostRotate);
                s > qY && 3 * qY > s && (t.translate(this._iz[ca] / 2, this._iz[eo] / 2),
                t[Uo](Math.PI),
                t[ff](-this._iz[ca] / 2, -this._iz[eo] / 2))
            }
            var r = this[OP] || YY[TL]
              , h = r[da]
              , a = r.verticalPosition
              , o = 0;
            h == iH ? (h = Qb,
            o += this._iz[ca] / 2) : h == nH ? (h = oa,
            o += this._iz[ca]) : h = $a;
            var f = 0;
            a == sH ? f = (this._iz[eo] - this._g5.height) / 2 : a == rH && (f = this._iz[eo] - this._g5[eo]),
            t[_f] = this[xP],
            Bi(t, this[lu], o, f, h, this[ML], this[pL], this[EL], YY[xo], this.$font)
        },
        _51: function() {
            return null != this.$data || this[fL]
        },
        $invalidateFont: !0
    },
    E(IW, lW),
    ys(IW[lh], {
        size: {
            validateFlags: [Fy]
        },
        fontStyle: {
            validateFlags: [Fy, kL]
        },
        fontSize: {
            validateFlags: [Fy, kL]
        },
        fontFamily: {
            validateFlags: [Fy, kL]
        }
    }),
    K(IW[lh], {
        font: {
            get: function() {
                return this[OL] && (this.$invalidateFont = !1,
                this.$font = (this[EL] || YY.FONT_STYLE) + jh + (this[pL] || YY[po]) + yo + (this.$fontFamily || YY[mo])),
                this[SL]
            }
        }
    });
    var AW = function(t) {
        t = t || new Gq,
        this[IL] = new KY,
        w(this, AW, [t])
    };
    AW.prototype = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function() {
            this.$invalidateFromArrow = !0,
            this[AL] = !0,
            this[lu][Ro](this.$lineWidth + this[PL], this[IL]),
            this[wL](this[IL])
        },
        validateSize: function() {
            if (this.$invalidateFromArrow || this[AL]) {
                var t = this.pathBounds[fh]();
                if (this[jL]) {
                    this.$invalidateFromArrow = !1;
                    var i = this.validateFromArrow();
                    i && t.add(i)
                }
                if (this[AL]) {
                    this[AL] = !1;
                    var i = this[LL]();
                    i && t.add(i)
                }
                this[wL](t)
            }
        },
        validateFromArrow: function() {
            if (!this[lu]._ii || !this.$fromArrow)
                return void (this[CL] = null);
            var t = this.$data
              , i = 0
              , n = 0
              , e = this[RL];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0,
            n += e.y || 0) : i += e || 0,
            i > 0 && 1 > i && (i *= t._ii)),
            this[DL] = t[Sf](i, n),
            this[DL][Uo] = Math.PI + this[DL].rotate || 0,
            this[CL] = Us(this[NL], this[$L]);
            var s = this[CL].getBounds(this.fromArrowStyles[zo] + this[BL].outline);
            return this[FL]instanceof eq[GL] ? this.fromArrowStyles[zL] = Tq[lh].generatorGradient[sh](this[FL], s) : this[BL] && (this[BL]._fillGradient = null),
            s[ex](this[DL].x, this[DL].y),
            Li(s, this[DL][Uo], s, this[DL].x, this.fromArrowLocation.y),
            s
        },
        validateToArrow: function() {
            if (!this[lu]._ii || !this.$toArrow)
                return void (this[YL] = null);
            var t = this[lu]
              , i = 0
              , n = 0
              , e = this[HL];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0,
            n += e.y || 0) : i += e || 0),
            0 > i && i > -1 && (i *= t._ii),
            i += t._ii,
            this.toArrowLocation = t[Sf](i, n),
            this.$toArrowShape = Us(this[qL], this[UL]);
            var s = this.$toArrowShape[Ro](this.toArrowStyles.lineWidth + this[WL].outline);
            return this[Ej]instanceof eq[GL] ? this[WL]._fillGradient = Tq[lh][dL][sh](this[Ej], s) : this.toArrowStyles && (this.toArrowStyles[zL] = null),
            s[ex](this.toArrowLocation.x, this[VL].y),
            Li(s, this[VL][Uo], s, this[VL].x, this[VL].y),
            s
        },
        _1y: function(t) {
            var i = t ? "from" : pk
              , e = this[i + XL];
            e === n && (e = this[vL]);
            var s = this[i + ZL];
            s === n && (s = this[hd]);
            var r = this[i + KL];
            r || (this[i + KL] = r = {}),
            r[zo] = e,
            r[hd] = s,
            r[gu] = this[i + JL],
            r[wu] = this[i + QL],
            r[lp] = this[i + tC],
            r[vp] = this[i + iC],
            r.lineCap = this[i + nC],
            r.lineJoin = this[i + eC],
            r.outline = this[i + sC] || 0,
            r[_p] = this[i + rC]
        },
        doValidate: function() {
            return this.$fromArrow && this._1y(!0),
            this.$toArrow && this._1y(!1),
            T(this, AW, hC)
        },
        drawArrow: function(t, i, n, e) {
            if (this.$fromArrow && this[CL]) {
                t.save();
                var s = this.fromArrowLocation
                  , r = s.x
                  , h = s.y
                  , a = s[Uo];
                t[ff](r, h),
                a && t[Uo](a),
                this[CL][mf](t, i, this[BL], n, e),
                t[So]()
            }
            if (this[qL] && this.$toArrowShape) {
                t[af]();
                var s = this[VL]
                  , r = s.x
                  , h = s.y
                  , a = s[Uo];
                t.translate(r, h),
                a && t[Uo](a),
                this[YL].draw(t, i, this[WL], n, e),
                t[So]()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function() {
            this[_L] = !0
        },
        _1e: function() {
            this[_L] = !1,
            this[zL] = this.$fillGradient ? Tq.prototype[dL].call(this[gL], this._7w) : null
        },
        draw: function(t, i, n, e) {
            this.$invalidateFillGradient && this._1e(),
            this[lu][mf](t, i, this, n, e),
            this[aC](t, i, n, e)
        },
        doHitTest: function(t, i, n) {
            if (this[lu][j_](t, i, n, !0, this.$lineWidth + this[PL], this[bL] || this.$fillGradient))
                return !0;
            if (this[qL] && this.$toArrowShape) {
                var e = t - this.toArrowLocation.x
                  , s = i - this[VL].y;
                if (this[VL][Uo]) {
                    var r = Ii(e, s, -this[VL][Uo]);
                    e = r.x,
                    s = r.y
                }
                var h = this[WL][lp] || this[WL].fillGradient;
                if (this.$toArrowShape[j_](e, s, n, !0, this[WL].lineWidth, h))
                    return !0
            }
            if (this.$fromArrow && this[CL]) {
                var e = t - this.fromArrowLocation.x
                  , s = i - this[DL].y;
                if (this[DL][Uo]) {
                    var r = Ii(e, s, -this[DL].rotate);
                    e = r.x,
                    s = r.y
                }
                var h = this[BL].fillColor || this[BL][vp];
                if (this.$fromArrowShape.hitTest(e, s, n, !0, this[BL][zo], h))
                    return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    },
    E(AW, lW),
    ys(AW[lh], {
        strokeStyle: {
            validateFlags: [oC, fC]
        },
        fillColor: {},
        fillGradient: {
            validateFlags: [mL]
        },
        fromArrowOffset: {
            validateFlags: [oC, DO]
        },
        fromArrowSize: {
            validateFlags: [oC, DO]
        },
        fromArrow: {
            validateFlags: [oC, DO]
        },
        fromArrowOutline: {
            validateFlags: [oC, DO]
        },
        fromArrowStroke: {
            validateFlags: [oC, DO]
        },
        fromArrowStrokeStyle: {
            validateFlags: [oC]
        },
        toArrowOffset: {
            validateFlags: [fC, DO]
        },
        toArrowSize: {
            validateFlags: [fC, DO]
        },
        toArrow: {
            validateFlags: [fC, DO]
        },
        toArrowOutline: {
            validateFlags: [fC, DO]
        },
        toArrowStroke: {
            validateFlags: [fC, DO]
        },
        toArrowStrokeStyle: {
            validateFlags: [fC]
        },
        outline: {
            value: 0,
            validateFlags: [Fy]
        }
    }),
    K(AW[lh], {
        length: {
            get: function() {
                return this[nf][nh]
            }
        }
    }),
    Es.prototype = {
        shape: null,
        path: null,
        initialize: function() {
            T(this, Es, SO),
            this[Fk] = new Gq,
            this[Fk]._e5 = !1,
            this[VP] = new AW(this[Fk]),
            this.addChild(this[VP], 0),
            this[Jj] = this[VP],
            wW[Fj](this)
        },
        _1j: !0,
        _5s: null,
        _$n: function() {
            return !1
        },
        _3x: function() {
            return !1
        },
        validatePoints: function() {
            this[VP].invalidateData();
            var t = this[lu]
              , i = this[Fk];
            i[so]();
            var n = t.fromAgent
              , e = t[tc];
            n && e && Qs(this, t, i, n, e)
        },
        getEndPointBounds: function(t) {
            return t[uC]()
        },
        _35: function(t, i, n, e, s, r, h, a, o) {
            return t.hasPathSegments() ? void (i.segments = t.pathSegments[Ll]()) : n == e ? void this[O_](i, n, s, r, a, o) : void this.drawEdge(i, n, e, s, r, h, a, o)
        },
        drawLoopedEdge: function(t, i, n, e) {
            er(this, e, t)
        },
        drawEdge: function(t, i, n, e, s, r, h, a) {
            if (e == sq.EDGE_TYPE_ZIGZAG) {
                var o = (h.x + a.x) / 2
                  , f = (h.y + a.y) / 2
                  , u = h.x - a.x
                  , c = h.y - a.y
                  , _ = Math.sqrt(u * u + c * c)
                  , d = Math[sa](c, u);
                d += Math.PI / 6,
                _ *= .04,
                _ > 30 && (_ = 30);
                var l = Math.cos(d) * _
                  , v = Math.sin(d) * _;
                return t[vf](o - v, f + l),
                void t[vf](o + v, f - l)
            }
            var b = nr(this, this[nf], s, r, i, n, h, a);
            b && (t._f9 = b)
        },
        _23: function() {
            if (!this.data[xM]())
                return null;
            var t = this.data[ic](!0);
            if (!t || !t.canBind(this.graph) || !t._gl)
                return null;
            var i = t[cC](this);
            return t[_C](this.$data) || (i = -i),
            i
        },
        checkBundleLabel: function() {
            var t = this[dC]();
            return t ? (this[Oj] || this[lC](),
            this[Oj]._hp = !0,
            void (this[Oj][nf] = t)) : void (this[Oj] && (this[Oj]._hp = !1,
            this[Oj].data = null))
        },
        createBundleLabel: function() {
            var t = new IW;
            t.editable = !1,
            this[Oj] = t,
            this[$j](this[Oj]),
            TW[Fj](this)
        },
        getBundleLabel: function() {
            return this.graph[dC](this[nf])
        },
        doValidate: function() {
            return this._1j && (this._1j = !1,
            this.validatePoints()),
            this[vC](),
            T(this, Es, hC)
        },
        _4t: function() {
            this._1j = !0,
            this[Cj]()
        },
        _$s: function(t, i, n) {
            var e = this._mj4[Nj](this, t, i, n);
            return e = gW[Nj](this, t, i, n) || e,
            this[Oj] && this[Oj][lu] && (e = TW.onBindingPropertyChange(this, t, i, n) || e),
            wW[Nj](this, t, i, n) || e
        }
    },
    E(Es, OW),
    Es[bC] = function(t, i, n, e) {
        if (t[lf](i.x, i.y),
        !e || e == sq[gC])
            return void t[vf](n.x, n.y);
        if (e == sq.EDGE_TYPE_VERTICAL_HORIZONTAL)
            t[vf](i.x, n.y);
        else if (e == sq[a_])
            t[vf](n.x, i.y);
        else if (0 == e[ch](sq.EDGE_TYPE_ORTHOGONAL)) {
            var s;
            s = e == sq[v_] ? !0 : e == sq[Qc] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
            var r = (i.x + n.x) / 2
              , h = (i.y + n.y) / 2;
            s ? (t[vf](r, i.y),
            t[vf](r, n.y)) : (t[vf](i.x, h),
            t[vf](n.x, h))
        } else if (0 == e[ch](sq[r_])) {
            var s, a = PW[bW.EDGE_EXTEND] || 0;
            s = e == sq[h_] ? !0 : e == sq[Jc] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y),
            s ? (t[vf](i.x + a, i.y),
            t.lineTo(n.x - a, n.y)) : (t[vf](i.x, i.y + a),
            t[vf](n.x, n.y - a))
        } else if (0 == e[ch](yC)) {
            var a = PW[bW[Xc]] || 0;
            if (e == sq.EDGE_TYPE_EXTEND_TOP) {
                var o = Math.min(i.y, n.y) - a;
                t.lineTo(i.x, o),
                t[vf](n.x, o)
            } else if (e == sq[i_]) {
                var o = Math.max(i.y, n.y) + a;
                t.lineTo(i.x, o),
                t.lineTo(n.x, o)
            } else if (e == sq.EDGE_TYPE_EXTEND_LEFT) {
                var f = Math.min(i.x, n.x) - a;
                t[vf](f, i.y),
                t.lineTo(f, n.y)
            } else if (e == sq[Kc]) {
                var f = Math.max(i.x, n.x) + a;
                t[vf](f, i.y),
                t[vf](f, n.y)
            }
        } else if (e == sq[mC]) {
            var r = (i.x + n.x) / 2
              , h = (i.y + n.y) / 2
              , u = i.x - n.x
              , c = i.y - n.y
              , _ = Math.sqrt(u * u + c * c)
              , d = Math[sa](c, u);
            d += Math.PI / 6,
            _ *= .04,
            _ > 30 && (_ = 30);
            var l = Math.cos(d) * _
              , v = Math.sin(d) * _;
            t.lineTo(r - v, h + l),
            t[vf](r + v, h - l)
        }
        t.lineTo(n.x, n.y)
    }
    ,
    K(Es[lh], {
        length: {
            get: function() {
                return this[Fk] ? this.path[nh] : 0
            }
        }
    }),
    Es[lh].addPoint = function(t, i, n) {
        var e = An(this.path, t, i, n);
        if (e && e.length > 2) {
            var s = this[nf]
              , r = e[e[nh] - 1];
            s[xC] = r.type == Cq ? e.splice(1, e[nh] - 2) : e[rh](1, e[nh] - 1)
        }
    }
    ,
    ws[lh] = {
        _2g: null,
        image: null,
        initialize: function() {
            T(this, ws, SO),
            this[pC](),
            pW.initBindingProperties(this)
        },
        _mly: function() {
            this[nf][Ax] ? this.image && (this[rL] = this.image) : this[QE] && (this[rL] = this[QE])
        },
        _ml8: function() {
            this[Ax] = new SW,
            this[$j](this.image, 0),
            this._mly()
        },
        doValidate: function() {
            this[rL] && (this instanceof cr && !this[lu].groupImage && this._5a() ? this[rL].$layoutByAnchorPoint = !1 : (this[rL][Hf] = null != this._2g,
            this[rL][Dk] = this._2g));
            var t = this[lu][Sk]
              , i = 0
              , n = 0;
            t && (i = t.x,
            n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[Kj] = !0),
            this.$x = i,
            this.$y = n,
            OW.prototype[hC][sh](this) || e
        },
        _$s: function(t, i, n) {
            var e = this[Lj].onBindingPropertyChange(this, t, i, n);
            return e = gW[Nj](this, t, i, n) || e,
            pW.onBindingPropertyChange(this, t, i, n) || e
        },
        getLinkablePorts: function() {
            return this[nf].linkablePorts
        },
        getLinkableBounds: function() {
            return this[EC]
        },
        getDefaultPortPoint: function(t) {
            return ui(QY[hv], t || this.getLinkableBounds())
        },
        getPortPoint: function(t, i) {
            if (!t)
                return this.getDefaultPortPoint(i);
            i = i || this[uC]();
            var n;
            return i.original ? (n = ui(t, i.original),
            i.rotate && (n = Ai(n.x, n.y, i[Uo], i[wC] || 0, i.rotateY || 0)),
            n.x += i.tx || 0,
            n.y += i.ty || 0) : n = ui(t, i),
            n.port = t,
            n
        },
        getPortPoints: function() {
            var t = this[TC]();
            if (t && Array[Nh](t)) {
                var i = []
                  , n = this[uC]();
                return t[Du](function(t) {
                    i[uh](this[x_](t, n))
                }
                [kh](this)),
                i
            }
        }
    },
    E(ws, OW);
    var PW = {};
    PW[bW.SELECTION_COLOR] = YY[Jm],
    PW[bW.SELECTION_BORDER] = YY.SELECTION_BORDER,
    PW[bW.SELECTION_SHADOW_BLUR] = YY[Km],
    PW[bW[YO]] = sq[Xm],
    PW[bW[GO]] = 2,
    PW[bW[zO]] = 2,
    PW[bW[xL]] = YY[xL],
    PW[bW[nI]] = QY[av],
    PW[bW[hI]] = QY[rv],
    PW[bW.LABEL_PADDING] = new JY(0,2),
    PW[bW[lI]] = 8,
    PW[bW[yI]] = 8,
    PW[bW.LABEL_POINTER] = !0,
    PW[bW[kI]] = 0,
    PW[bW[SI]] = oL,
    PW[bW[LP]] = !0,
    PW[bW[EP]] = null,
    PW[bW.LABEL_BACKGROUND_GRADIENT] = null,
    PW[bW[oA]] = MC,
    PW[bW[hA]] = 1.5,
    PW[bW.EDGE_FROM_AT_EDGE] = !0,
    PW[bW[ij]] = !0,
    PW[bW[BI]] = X(3438210798),
    PW[bW[FI]] = 1,
    PW[bW[zI]] = oL,
    PW[bW.ARROW_TO] = !0,
    PW[bW[BA]] = YY[b_],
    PW[bW[nP]] = YY.ARROW_SIZE,
    PW[bW[R_]] = 10,
    PW[bW.EDGE_CORNER_RADIUS] = 8,
    PW[bW.EDGE_CORNER] = sq.EDGE_CORNER_ROUND,
    PW[bW[e_]] = !0,
    PW[bW[Xc]] = 20,
    PW[bW[o_]] = .5,
    PW[bW[f_]] = 20,
    PW[bW.EDGE_BUNDLE_GAP] = 20,
    PW[bW[WI]] = QY[av],
    PW[bW.EDGE_BUNDLE_LABEL_POSITION] = QY[rv],
    PW[bW[VI]] = kC,
    PW[bW.SHAPE_STROKE] = 1,
    PW[bW.SHAPE_STROKE_STYLE] = OC,
    PW[bW[WO]] = YY[jf],
    PW[bW[VO]] = 1,
    YY[L_] = 2;
    var jW = function(i, n) {
        this._$q = new vH,
        this._$q.on(function(t) {
            Uk == t[Vd] && this.invalidateVisibility()
        }, this),
        this._1b = new vH,
        this._1b.addListener(function(t) {
            !this.currentSubNetwork || t[Vd] != yH[Yv] && t.kind != yH.KIND_REMOVE || this.graphModel[P_](this[Uk]) || (this[Uk] = null)
        }, this),
        this._7 = new vH,
        this._$t = new vH,
        this._$k = new vH,
        this._$l = new vH,
        this[ld] = n || new ls,
        this._8m = new QU(this,i),
        this._2b = new qr(this),
        this._11 = new vH,
        this._onresize = OH(t, SC, function() {
            this[IC]()
        }, !1, this),
        this._8m[XT].ondrop = function(t) {
            this.ondrop(t)
        }
        [kh](this),
        this._8m._mm4[AC] = function(t) {
            this[AC](t)
        }
        [kh](this)
    };
    jW[lh] = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function(t) {
            eq[PC](t)
        },
        getDropInfo: function(t, i) {
            var n = null;
            if (i)
                try {
                    n = JSON[Xa](i)
                } catch (e) {}
            return n
        },
        ondrop: function(t) {
            var i = t[jC];
            if (i) {
                var n = i[Ug](Nd)
                  , e = this[LC](t, n);
                e || (e = {},
                e[Ax] = i.getData(Ax),
                e[qo] = i[Ug](qo),
                e[QE] = i[Ug](QE),
                e[hO] = i[Ug](hO));
                var s = this.globalToLocal(t);
                if (s = this[JT](s.x, s.y),
                !(this[CC]instanceof Function && this[CC][sh](this, t, s, e) === !1) && (e.image || e[QE] || e.type)) {
                    var r = e.image
                      , h = e[qo]
                      , a = e.label
                      , o = e.groupImage;
                    eq[PC](t);
                    var f;
                    if (h && pd != h ? oO == h ? f = this.createText(a, s.x, s.y) : RC == h ? f = this[DC](a, s.x, s.y) : NC == h ? (f = this.createGroup(a, s.x, s.y),
                    o && (o = fr(o),
                    o && (f[hO] = o))) : (h = J(h),
                    h instanceof Function && h[lh]instanceof uW && (f = new h,
                    f.name = a,
                    f.location = new WY(s.x,s.y),
                    this[QM].add(f))) : f = this[$C](a, s.x, s.y),
                    f) {
                        if (r && (r = fr(r),
                        r && (f[Ax] = r)),
                        t[lw]) {
                            var u = this[Vg](t);
                            u && this[BC](u) && (f.parent = u)
                        }
                        if (e.properties)
                            for (var c in e[FC])
                                f[c] = e.properties[c];
                        if (e.clientProperties)
                            for (var c in e.clientProperties)
                                f.set(c, e[GC][c]);
                        if (e.styles && f[ck](e[zC]),
                        this[YC](f, t, e) === !1)
                            return !1;
                        var _ = new Hr(this,Hr[HC],t,f);
                        return this[qC](_),
                        f
                    }
                }
            }
        },
        _mlc: function(t) {
            return t.enableSubNetwork || t instanceof dW || t[UC]
        },
        enableDoubleClickToOverview: !0,
        _8m: null,
        _$q: null,
        _1b: null,
        _7: null,
        _$l: null,
        _$t: null,
        _$k: null,
        _1i: function(t) {
            return this._$q.beforeEvent(t)
        },
        _3y: function(t) {
            this._$q[Eh](t),
            OT == t[Vd] && this[WC]()
        },
        isVisible: function(t) {
            return this._8m._eh(t)
        },
        isMovable: function(t) {
            return (t instanceof uW || t instanceof fW && t[k_]()) && t[VC] !== !1
        },
        isSelectable: function(t) {
            return t[XC] !== !1
        },
        isEditable: function(t) {
            return t.editable !== !1
        },
        isRotatable: function(t) {
            return t[CP] !== !1
        },
        isResizable: function(t) {
            return t[ZC] !== !1
        },
        canLinkFrom: function(t) {
            return t.linkable !== !1 && t[KC] !== !1
        },
        canLinkTo: function(t, i) {
            return t.linkable === !1 || t[JC] === !1 ? !1 : i instanceof eq[NC] && t.isDescendantOf(i) ? !1 : t instanceof eq[NC] && i[ac](t) ? !1 : !0
        },
        isEndPointEditable: function(t) {
            return t.endPointEditable !== !1
        },
        createNode: function(t, i, n) {
            var e = new uW(t,i,n);
            return this[QM].add(e),
            e
        },
        createText: function(t, i, n) {
            var e = new bs(t,i,n);
            return this[QM].add(e),
            e
        },
        createShapeNode: function(t, i, n, e) {
            D(i) && (e = n,
            n = i,
            i = null);
            var s = new cW(t,i);
            return s.$location = new WY(n,e),
            this[QM].add(s),
            s
        },
        createGroup: function(t, i, n) {
            var e = new dW(t,i,n);
            return this[QM].add(e),
            e
        },
        createEdge: function(t, i, n) {
            if (t instanceof uW) {
                var e = n;
                n = i,
                i = t,
                t = e
            }
            var s = new fW(i,n);
            return t && (s.$name = t),
            this._k0Model.add(s),
            s
        },
        addElement: function(t, i) {
            this._k0Model.add(t),
            i && t[th]() && t.forEachChild(function(t) {
                this[QC](t, i)
            }, this)
        },
        removeElement: function(t) {
            this[QM][Lh](t)
        },
        clear: function() {
            this[QM].clear()
        },
        getStyle: function(t, i) {
            var e = t._iy[i];
            return e !== n ? e : this.getDefaultStyle(i)
        },
        getDefaultStyle: function(t) {
            if (this._iy) {
                var i = this._iy[t];
                if (i !== n)
                    return i
            }
            return PW[t]
        },
        _2l: function(t, i) {
            if (!this[tR] || this[tR][P_](this[JM]))
                return i && i(),
                !1;
            t = this._20(),
            this[iR]();
            var n, e, s, r = this.viewportBounds, h = this.limitedBounds, a = r.width / this.limitedBounds.width, o = r[eo] / this[tR].height;
            if (1 >= a && 1 >= o)
                return n = h.left > r.left ? h.left : h[oa] < r.right ? r[$a] - (r.right - h[oa]) : r[$a],
                e = h.top > r.top ? h.top : h[aa] < r[aa] ? r.top - (r.bottom - h[aa]) : r.top,
                void this[sM](-n * this[uf], -e * this[uf], this.scale, !1, i);
            var f = a > o;
            s = Math.max(a, o),
            f ? (n = h.x,
            e = h.y + (r.top - h.top) * (1 - s) / s,
            e >= h.y ? e = h.y : e < h[aa] - r.height / s && (e = h[aa] - r.height / s)) : (e = h.y,
            n = h.x + (r[$a] - h[$a]) * (1 - s) / s,
            n >= h.x ? n = h.x : n < h[oa] - r[ca] / s && (n = h.right - r.width / s)),
            s *= this[uf],
            n *= s,
            e *= s,
            this[sM](-n, -e, s, t, i)
        },
        checkLimitedBounds: function(t) {
            return this._mjheckingBounds || !this[tR] || this.limitedBounds[P_](this.viewportBounds) ? !1 : (this._mjheckingBounds = !0,
            void this[nR](function() {
                this._2l(t, function() {
                    this._mjheckingBounds = !1
                }
                [kh](this))
            }, this))
        },
        zoomByMouseEvent: function(t, i, n, e) {
            var s = this.globalToLocal(t);
            return Ch == typeof i ? this[eR](Math.pow(1.1, i), s.x, s.y, n, e) : i ? this[sR](s.x, s.y, n, e) : this[rR](s.x, s.y, n, e)
        },
        resetScale: 1,
        translate: function(t, i, n) {
            return this[sM](this.tx + t, this.ty + i, this[uf], n)
        },
        translateTo: function(t, i, n, e, s) {
            if (n && (n = Math.min(this[Ix], Math.max(this[hR], n))),
            e) {
                var r = this._58();
                return void r._kf(t, i, n, e, s)
            }
            var h = this._8m[aR](t, i, n);
            return s && s(),
            h
        },
        centerTo: function(t, i, e, s, r) {
            return (!e || 0 >= e) && (e = this[uf]),
            s === n && (s = this._20()),
            this[sM](this[ca] / 2 - t * e, this[eo] / 2 - i * e, e, s, r)
        },
        moveToCenter: function(t, i) {
            if (arguments[2] === !1 || !this._8m[oR]()) {
                var n = this.bounds;
                return void this[fR](n.cx, n.cy, t, i)
            }
            return this._8m[$c] || (i = !1),
            this.callLater(this[uR][kh](this, t, i, !1))
        },
        zoomToOverview: function(t, i) {
            if (arguments[2] === !1 || !this._8m[oR]()) {
                var n = this._8m._1d();
                return void (n && (i && (n.scale = Math.min(n.scale, i)),
                this[fR](n.cx, n.cy, n[uf], t)))
            }
            return this._8m[$c] || (t = !1),
            this[nR](this[cR][kh](this, t, i, !1))
        },
        _20: function() {
            return this._8m[$c] ? this[_R] === n || null === this[_R] ? YY[dR] : this.zoomAnimation : !1
        },
        zoomAt: function(t, i, e, s, r) {
            s === n && (s = this._20()),
            i === n && (i = this.width / 2),
            i = i || 0,
            e === n && (e = this[eo] / 2),
            e = e || 0;
            var h = this[uf];
            return t = Math.min(this[Ix], Math.max(this.minScale, h * t)),
            i = t * (this.tx - i) / h + i,
            e = t * (this.ty - e) / h + e,
            this[sM](i, e, t, s, r)
        },
        zoomOut: function(t, i, n, e) {
            return this[eR](1 / this[lR], t, i, n, e)
        },
        zoomIn: function(t, i, n, e) {
            return this.zoomAt(this[lR], t, i, n, e)
        },
        _58: function() {
            return this._panAnimation || (this[vR] = new $W(this)),
            this._panAnimation
        },
        onAnimationStart: function() {},
        onAnimationEnd: function() {},
        isAnimating: function() {
            return this[vR] && this[vR]._de()
        },
        enableInertia: !0,
        _9z: function(t, i) {
            var n = this._58();
            return n._fe(t || 0, i || 0)
        },
        stopAnimation: function() {
            this[vR] && this[vR]._l6()
        },
        getUI: function(t) {
            return Q(t) ? this._8m._3b(t) : this._8m._kj(t)
        },
        getUIByMouseEvent: function(t) {
            return this._8m._3b(t)
        },
        hitTest: function(t) {
            return this._8m[j_](t)
        },
        globalToLocal: function(t) {
            return this._8m._86(t)
        },
        toCanvas: function(t, i) {
            return this._8m._go(t, i)
        },
        toLogical: function(t, i) {
            return Q(t) ? this._8m._$b(t) : this._8m._ea(t, i)
        },
        getElementByMouseEvent: function(t) {
            var i = this._8m._3b(t);
            return i ? i[lu] : void 0
        },
        getElement: function(t) {
            return Q(t) ? this.getElementByMouseEvent(t) : this._k0Model.getById(t)
        },
        invalidate: function() {
            this._8m[kT]()
        },
        invalidateUI: function(t) {
            t.invalidate(),
            this[TT]()
        },
        invalidateElement: function(t) {
            this._8m._3j(t)
        },
        getUIBounds: function(t) {
            return this._8m._2o(t)
        },
        forEachVisibleUI: function(t, i) {
            return this._8m._4k(t, i)
        },
        forEachReverseVisibleUI: function(t, i) {
            return this._8m._$r(t, i)
        },
        forEachUI: function(t, i) {
            return this._8m._ec(t, i)
        },
        forEachReverseUI: function(t, i) {
            return this._8m._4s(t, i)
        },
        forEach: function(t, i) {
            return this._k0Model[Du](t, i)
        },
        getElementByName: function(t) {
            var i;
            return this.forEach(function(n) {
                return n[Ef] == t ? (i = n,
                !1) : void 0
            }),
            i
        },
        focus: function(i) {
            if (i) {
                var n = t.scrollX || t[Ra]
                  , e = t.scrollY || t[Da];
                return this[Wg].focus(),
                void t[Gd](n, e)
            }
            this.canvasPanel[bR]()
        },
        callLater: function(t, i, n) {
            this._8m._e0(t, i, n)
        },
        exportImage: function(t, i, n) {
            return mr(this, t, i, n)
        },
        setSelection: function(t) {
            return this[QM][nb].set(t)
        },
        select: function(t) {
            return this[QM][nb][Bd](t)
        },
        unselect: function(t) {
            return this._k0Model._selectionModel.unselect(t)
        },
        reverseSelect: function(t) {
            return this[QM][nb][gR](t)
        },
        selectAll: function() {
            yr(this)
        },
        unSelectAll: function() {
            this[dd][so]()
        },
        unselectAll: function() {
            this[yR]()
        },
        isSelected: function(t) {
            return this[QM]._selectionModel.contains(t)
        },
        sendToTop: function(t) {
            Ce(this._k0Model, t)
        },
        sendToBottom: function(t) {
            Re(this._k0Model, t)
        },
        moveElements: function(t, i, n) {
            var e = []
              , s = new HY;
            return l(t, function(t) {
                t instanceof uW ? e[uh](t) : t instanceof fW && s.add(t)
            }),
            this._dp(e, i, n, s)
        },
        _dp: function(t, i, n, e) {
            if (0 == i && 0 == n || 0 == t.length && 0 == e[nh])
                return !1;
            if (0 != t[nh]) {
                var s = this._47(t);
                e = this._45(s, e),
                l(s, function(t) {
                    var e = t.$location;
                    e ? t[mR](e.x + i, e.y + n) : t.setLocation(i, n)
                })
            }
            return e && e.length && this._do(e, i, n),
            !0
        },
        _do: function(t, i, n) {
            t[Du](function(t) {
                t[wy](i, n)
            })
        },
        _45: function(t, i) {
            return this.graphModel[Du](function(n) {
                n instanceof fW && this[xR](n) && t[P_](n.fromAgent) && t.contains(n[tc]) && i.add(n)
            }, this),
            i
        },
        _47: function(t) {
            var i = new HY;
            return l(t, function(t) {
                !this[xR](t),
                i.add(t),
                Pe(t, i, this[pR])
            }, this),
            i
        },
        reverseExpanded: function(t) {
            if (!t[xM]())
                return !1;
            var i = t.getEdgeBundle(!0);
            return i ? i[ER]() !== !1 ? (this[TT](),
            !0) : void 0 : !1
        },
        _2b: null,
        _11: null,
        beforeInteractionEvent: function(t) {
            return this._11.beforeEvent(t)
        },
        onInteractionEvent: function(t) {
            this._11[Eh](t)
        },
        addCustomInteraction: function(t) {
            this._2b.addCustomInteraction(t)
        },
        removeCustomInteraction: function(t) {
            this._2b[wR](t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function(t) {
            return t[uk] || t[Ef]
        },
        updateViewport: function() {
            this._8m._7f()
        },
        destroy: function() {
            this._3y(new fH(this,yM,!0,this[kM])),
            this[kM] = !0,
            SH(t, SC, this[TR]),
            this._2b.destroy(),
            this[ld] = new ls;
            var i = this[MR];
            this._8m._hz(),
            i && (i[kR] = "")
        },
        onPropertyChange: function(t, i, n) {
            this._$q[Zd](function(e) {
                e[Vd] == t && i[sh](n, e)
            })
        },
        removeSelection: function() {
            var t = this[dd]._jg;
            return t && 0 != t[nh] ? (t = t[ah](),
            this[QM].remove(t),
            t) : !1
        },
        removeSelectionByInteraction: function(t) {
            var i = this[dd][Xd];
            return i && 0 != i[nh] ? void eq.confirm(OR + i[nh], function() {
                var i = this[SR]();
                if (i) {
                    var n = new Hr(this,Hr[IR],t,i);
                    this[qC](n)
                }
            }, this) : !1
        },
        createShapeByInteraction: function(t, i, n, e) {
            var s = new Gq(i);
            i[nh] > 2 && s[Yf]();
            var r = this.createShapeNode(AR, s, n, e);
            this[YC](r, t);
            var h = new Hr(this,Hr[HC],t,r);
            return this[qC](h),
            r
        },
        createLineByInteraction: function(t, i, n, e) {
            var s = new Gq(i)
              , r = this.createShapeNode(PR, s, n, e);
            r[Vc](eq[jR][_S], null),
            r.setStyle(eq[jR].SHAPE_FILL_GRADIENT, null),
            r[Vc](eq[jR][yS], !0),
            this[YC](r, t);
            var h = new Hr(this,Hr[HC],t,r);
            return this.onInteractionEvent(h),
            r
        },
        createEdgeByInteraction: function(t, i, n, e, s, r) {
            var h = this[LR](CR, t, i);
            if (s && h[Vc](eq[jR][y_], s),
            r && h[Vc](eq[jR].EDGE_TO_PORT, r),
            e)
                h._92 = e;
            else {
                var a = this[RR]
                  , o = this[T_];
                this[DR] && (a = this.interactionProperties[$M] || a,
                o = this[DR][T_] || o),
                a && (h[$M] = a),
                o && (h.edgeType = o)
            }
            this[YC](h, n);
            var f = new Hr(this,Hr.ELEMENT_CREATED,n,h);
            return this[qC](f),
            h
        },
        onElementCreated: function(t) {
            !t.parent && this[Uk] && (t[Qu] = this[Uk])
        },
        allowEmptyLabel: !1,
        startLabelEdit: function(t, i, n, e) {
            var s = this;
            n[NR](e.x, e.y, i.data, this.getStyle(t, bW[$R]), function(n) {
                return s[BR](t, i, n, i[Qu])
            })
        },
        onLabelEdit: function(t, i, n, e) {
            if (!n && !this[FR])
                return eq.alert(GR),
                !1;
            if (QE == i[Ef]) {
                if (t.name == n)
                    return !1;
                t[Ef] = n
            } else
                e._f3(i, n) === !1 && (i[nf] = n,
                this[zR](t))
        },
        setInteractionMode: function(t, i) {
            this[YR] = t,
            this[DR] = i
        },
        upSubNetwork: function() {
            return this._3h ? this[Uk] = ur(this._3h) : !1
        },
        _$o: !1,
        invalidateVisibility: function() {
            this._$o = !0,
            this[TT]()
        },
        getBundleLabel: function(t) {
            var i = t.getEdgeBundle(!0);
            return i && i[HR] == t ? qR + i[UR][nh] : null
        },
        zoomAnimation: null,
        pauseRendering: function(t, i) {
            (this[WR] || i) && this._8m._6u(t)
        },
        _4b: n,
        enableRectangleSelectionByRightButton: !0,
        getLinkablePoints: function(t) {
            return t.linkablePoints
        }
    },
    K(jW[lh], {
        center: {
            get: function() {
                return this.toLogical(this[MR][Aa] / 2, this[MR][cd] / 2)
            }
        },
        visibleFilter: {
            get: function() {
                return this[mM]
            },
            set: function(t) {
                this[mM] = t,
                this.invalidateVisibility()
            }
        },
        topCanvas: {
            get: function() {
                return this._8m[vM]
            }
        },
        propertyChangeDispatcher: {
            get: function() {
                return this._$q
            }
        },
        listChangeDispatcher: {
            get: function() {
                return this._1b
            }
        },
        dataPropertyChangeDispatcher: {
            get: function() {
                return this._7
            }
        },
        selectionChangeDispatcher: {
            get: function() {
                return this._$l
            }
        },
        parentChangeDispatcher: {
            get: function() {
                return this._$t
            }
        },
        childIndexChangeDispatcher: {
            get: function() {
                return this._$k
            }
        },
        interactionDispatcher: {
            get: function() {
                return this._11
            }
        },
        cursor: {
            set: function(t) {
                this[Wg][Ea].cursor = t || this._2b[VR]
            },
            get: function() {
                return this[Wg][Ea][XR]
            }
        },
        interactionMode: {
            get: function() {
                return this._2b[ZR]
            },
            set: function(t) {
                var i = this[YR];
                i != t && (this._2b[Kd] = t,
                this._3y(new fH(this,YR,t,i)))
            }
        },
        scaleStep: {
            get: function() {
                return this._8m._dy
            },
            set: function(t) {
                this._8m._dy = t
            }
        },
        maxScale: {
            get: function() {
                return this._8m._fg
            },
            set: function(t) {
                this._8m._fg = t
            }
        },
        minScale: {
            get: function() {
                return this._8m._fh
            },
            set: function(t) {
                this._8m._fh = t
            }
        },
        scale: {
            get: function() {
                return this._8m._scale
            },
            set: function(t) {
                return this._8m._scale = t
            }
        },
        tx: {
            get: function() {
                return this._8m._tx
            }
        },
        ty: {
            get: function() {
                return this._8m._ty
            }
        },
        styles: {
            get: function() {
                return this._iy
            },
            set: function(t) {
                this._iy = t
            }
        },
        selectionModel: {
            get: function() {
                return this._k0Model._selectionModel
            }
        },
        graphModel: {
            get: function() {
                return this._k0Model
            },
            set: function(t) {
                if (this[QM] == t)
                    return !1;
                var i = this[QM]
                  , n = new fH(this,ld,i,t);
                return this._1i(n) === !1 ? !1 : (null != i && (i[KR][Cv](this._$q, this),
                i[ib][Cv](this._1b, this),
                i[sb][Cv](this._7, this),
                i[ab].removeListener(this._$t, this),
                i[ob][Cv](this._$k, this),
                i[eb][Cv](this._$l, this)),
                this[QM] = t,
                this[QM] && (this[QM].propertyChangeDispatcher[Zd](this._$q, this),
                this._k0Model.listChangeDispatcher.addListener(this._1b, this),
                this._k0Model[sb][Zd](this._7, this),
                this._k0Model.parentChangeDispatcher[Zd](this._$t, this),
                this[QM][ob][Zd](this._$k, this),
                this._k0Model.selectionChangeDispatcher[Zd](this._$l, this)),
                this._8m && this._8m._kk(),
                void this._3y(n))
            }
        },
        count: {
            get: function() {
                return this[QM].length
            }
        },
        width: {
            get: function() {
                return this[MR].clientWidth
            }
        },
        height: {
            get: function() {
                return this.html[cd]
            }
        },
        viewportBounds: {
            get: function() {
                return this._8m[JR]
            }
        },
        bounds: {
            get: function() {
                return this._8m._3z()
            }
        },
        canvasPanel: {
            get: function() {
                return this._8m[XT]
            }
        },
        html: {
            get: function() {
                return this._8m[XT][_x]
            }
        },
        navigationType: {
            get: function() {
                return this._8m._6y
            },
            set: function(t) {
                this._8m._3p(t)
            }
        },
        _3h: {
            get: function() {
                return this._k0Model._3h
            }
        },
        currentSubNetwork: {
            get: function() {
                return this[QM].currentSubNetwork
            },
            set: function(t) {
                this[QM][Uk] = t
            }
        },
        limitedBounds: {
            get: function() {
                return this[QR]
            },
            set: function(t) {
                return KY.equals(t, this[QR]) ? !1 : t ? void (this._limitedBounds = new KY(t)) : void (this._limitedBounds = null)
            }
        },
        ratio: {
            get: function() {
                return this._8m[ho]
            }
        },
        delayedRendering: {
            get: function() {
                return this._4b === n ? YY[tD] : this._4b
            },
            set: function(t) {
                t != this[WR] && (this._4b = t,
                this[iD](!1, !0))
            }
        },
        fullRefresh: {
            get: function() {
                return this._8m.fullRefresh
            },
            set: function(t) {
                this._8m[jT] = t
            }
        }
    }),
    YY[tD] = !0,
    YY[nD] = 60,
    YY[eD] = 60,
    cr[lh] = {
        _mly: function() {
            return this._5a() ? void 0 : T(this, cr, $P, arguments)
        },
        initialize: function() {
            T(this, cr, SO),
            this[UP]()
        },
        _mle: function() {
            this._l7 = new Gq,
            this.shape = new SW(this._l7),
            this[VP][du] = !1,
            this[$j](this[VP], 0),
            this.body = this[VP]
        },
        checkBody: function() {
            return this._5a() ? (this._1v = !0,
            this.shape ? (this.shape.visible = !0,
            this.body = this[VP]) : (this[sD](),
            EW[Fj](this)),
            void (this[Ax] && (this[Ax].visible = !1))) : (this.image ? (this[Ax].visible = !0,
            this[rL] = this.image) : this[pC](),
            void (this[VP] && (this[VP][mP] = !1)))
        },
        _5a: function() {
            return this[lu]._hq() && this.$data[BM]
        },
        _l7: null,
        _1v: !0,
        _57: function() {
            this._17 = !0,
            this._1v = !0
        },
        doValidate: function() {
            if (this._1v && this._5a()) {
                if (this._1v = !1,
                this.shape[FM](),
                this[lu].groupImage) {
                    this.shape[nf] = this[lu][hO];
                    var t = this._1u();
                    return this[VP][PP] = t.x + t[ca] / 2,
                    this[VP][vO] = t.y + t[eo] / 2,
                    this[VP][MT] = {
                        width: t.width,
                        height: t.height
                    },
                    ws[lh].doValidate[sh](this)
                }
                this[VP][PP] = 0,
                this[VP].offsetY = 0;
                var i = this._85(this[lu].groupType);
                this._l7[so](),
                i instanceof KY ? Ue(this._l7, i.x, i.y, i[ca], i[eo], i.rx, i.ry) : i instanceof rn ? We(this._l7, i) : i instanceof hn && Ve(this._l7, i),
                this._l7._63 = !0,
                this.shape.invalidateData()
            }
            return ws[lh][hC][sh](this)
        },
        _6k: function(t, i, n, e, s) {
            switch (Ch != typeof e && (e = -i / 2),
            Ch != typeof s && (s = -n / 2),
            t) {
            case sq[rD]:
                var r = Math.max(i, n) / 2;
                return new rn(e + i / 2,s + n / 2,r);
            case sq[hD]:
                return new hn(e + i / 2,s + n / 2,i,n);
            default:
                return new KY(e,s,i,n)
            }
        },
        _1u: function() {
            return this._85(null)
        },
        _85: function(t) {
            var i, e, s = this[nf], r = s.padding, h = s[eO], a = YY.GROUP_MIN_WIDTH, o = YY[eD];
            if (h && (Ch == typeof h.width && (a = h[ca]),
            Ch == typeof h[eo] && (o = h.height),
            i = h.x,
            e = h.y),
            !s.hasChildren())
                return this._6k(t, a, o, i, e);
            var f, u = this[lu]._f1._jg;
            (t == sq[rD] || t == sq.GROUP_TYPE_ELLIPSE) && (f = []);
            for (var c, _, d, l, v = new KY, b = 0, g = u.length; g > b; b++) {
                var y = u[b];
                if (this.graph[vd](y) && !(y instanceof fW)) {
                    var m = this[E_][w_](y);
                    m && (c = m.$x + m._fd.x,
                    _ = m.$y + m._fd.y,
                    d = m._fd[ca],
                    l = m._fd[eo],
                    v[Wl](c, _, d, l),
                    f && (f.push({
                        x: c,
                        y: _
                    }),
                    f[uh]({
                        x: c + d,
                        y: _
                    }),
                    f.push({
                        x: c + d,
                        y: _ + l
                    }),
                    f.push({
                        x: c,
                        y: _ + l
                    })))
                }
            }
            if (v[vu]())
                return this._6k(t, a, o, i, e);
            var x = this[lu][Sk];
            x ? x[Xk] && (x.invalidateFlag = !1,
            i === n && (x.x = v.cx),
            e === n && (x.y = v.cy)) : x = this[lu][Sk] = {
                x: v.cx,
                y: v.cy
            },
            r && v.grow(r),
            Ch == typeof i && i + x.x < v.x && (v.width += v.x - (i + x.x),
            v.x = i + x.x,
            f && f[uh]({
                x: v.x,
                y: v.cy
            })),
            Ch == typeof e && e + x.y < v.y && (v[eo] += v.y - (v.y,
            e + x.y),
            v.y = e + x.y,
            f && f[uh]({
                x: v.cx,
                y: v.y
            }));
            var p, i = x.x, e = x.y;
            if (t == sq[rD]) {
                p = an(f),
                p.cx -= i,
                p.cy -= e;
                var E = Math.max(a, o) / 2;
                return p.r < E && (p.cx += E - p.r,
                p.cy += E - p.r,
                p.r = E),
                p
            }
            return t == sq[hD] ? (p = on(f, v),
            p.cx -= i,
            p.cy -= e,
            p[ca] < a && (p.cx += (a - p.width) / 2,
            p[ca] = a),
            p[eo] < o && (p.cy += (o - p.height) / 2,
            p[eo] = o),
            p) : (p = v,
            v.width < a && (v[ca] = a),
            v[eo] < o && (v[eo] = o),
            v[ex](-i, -e),
            p)
        },
        _$s: function(t, i, n) {
            if (!this._5a())
                return T(this, cr, aD, arguments);
            var e = this[Lj][Nj](this, t, i, n);
            return e = gW[Nj](this, t, i, n) || e,
            e = pW[Nj](this, t, i, n) || e,
            EW[Nj](this, t, i, n) || e
        }
    },
    E(cr, ws),
    eq[oD] = cr;
    var LW = {
        draw: function() {}
    };
    YY.NAVIGATION_IMAGE_LEFT = null,
    YY.NAVIGATION_IMAGE_TOP = null;
    var CW = {
        position: dT,
        "text-align": Qb
    }
      , RW = {
        padding: fD,
        transition: uD
    }
      , DW = {
        position: K_,
        display: cD
    };
    mi(_D, "opacity:0.7;vertical-align:middle;"),
    mi(".Q-Graph-Nav img:hover,img.hover", dD),
    GY || (mi(lD, vD + MH(bD) + gD),
    mi(yD, mD + MH(bD) + xD)),
    lr[lh] = {
        _mjx: function(t, i) {
            return t._hp == i ? !1 : (t._hp = i,
            void (t[Ea][gx] = i ? "visible" : X_))
        },
        _30: function(t, i) {
            var n = i / 2 - this[pD][q_].clientHeight / 2 + ao;
            this._left._img.style.top = n,
            this[nd][q_][Ea].top = n,
            this[U_][Ea][ca] = t + ao,
            this._navPane[Ea][eo] = i + ao
        },
        _9i: function(t, i, n, e) {
            this[ED](this[wD], t),
            this[ED](this._left, i),
            this._mjx(this[sd], n),
            this[ED](this._right, e)
        },
        _hz: function() {
            var t = this[U_].parentNode;
            t && t.removeChild(this[U_])
        },
        _jp: function() {
            var t = this._mlaseCanvas._k0;
            if (t) {
                var i = t[Do];
                if (i[vu]())
                    return void this._9i(!1, !1, !1, !1);
                var n = t.viewportBounds
                  , e = n.y > i.y + 1
                  , s = n.x > i.x + 1
                  , r = n.bottom < i.bottom - 1
                  , h = n.right < i[oa] - 1;
                this._9i(e, s, r, h)
            }
        }
    };
    var NW = 10;
    mi(TD, MD),
    mi(kD, "background-color: #7E7E7E;" + MH(bD) + ": background-color 0.2s linear;"),
    mi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"),
    mi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"),
    mi(".Q-Graph-ScrollBar--V.Both", OD),
    mi(".Q-Graph-ScrollBar--H.Both", SD),
    GY || (mi(ID, vD + MH(bD) + AD),
    mi(".Q-Graph:hover .Q-Graph-ScrollPane", mD + MH(bD) + ":opacity 0.3s linear;")),
    vr.prototype = {
        _hz: function() {
            this[PD]._hz(),
            this[jD]._hz(),
            delete this[PD],
            delete this[jD],
            this._l1[_x] && this._l1[_x][_b](this._l1)
        },
        _l1: null,
        _mli: null,
        _8o: null,
        init: function(t) {
            var n = i[_o](B_);
            n.className = LD,
            bi(n, {
                width: J_,
                height: J_,
                position: K_
            });
            var e = i[_o](B_);
            e[Sh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i[_o](B_);
            s[Sh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H",
            n[Ju](e),
            n[Ju](s),
            t[Ju](n),
            this._l1 = n,
            this._8o = s,
            this[CD] = e,
            s.isH = !0;
            var r = this
              , h = {
                onstart: function(t, i) {
                    i.classList.add(ud)
                },
                onrelease: function(t, i) {
                    i[Ih].remove(ud)
                },
                ondrag: function(t, i) {
                    var n = r[Xu]._k0;
                    if (n) {
                        var e = i.isH
                          , s = e ? t.dx : t.dy;
                        if (s && i[uf]) {
                            var h = n.scale / i.scale;
                            e ? n.translate(-h * s, 0) : n[ff](0, -h * s),
                            eq[PC](t)
                        }
                    }
                },
                enddrag: function(t, i) {
                    var n = r[Xu]._k0;
                    if (n && n[RD]) {
                        var e = i.isH
                          , s = e ? t.vx : t.vy;
                        if (Math.abs(s) > .1) {
                            var h = n.scale / i[uf];
                            s *= h,
                            e ? n._9z(-s, 0) : n._9z(0, -s)
                        }
                    }
                }
            };
            this[PD] = new wi(e,h),
            this[jD] = new wi(s,h)
        },
        _30: function() {
            var t = this._mlaseCanvas._k0;
            t && t[nR](this._jp[kh](this))
        },
        _jp: function() {
            var t = this[Xu]._k0;
            if (t) {
                var i = t.bounds;
                if (i[vu]())
                    return this._4q(!1),
                    void this._4o(!1);
                var n = t[JM]
                  , e = t[ca]
                  , s = t.height
                  , r = t[uf]
                  , h = 1 / r
                  , a = n.x > i.x + h || n[oa] < i.right - h
                  , o = n.y > i.y + h || n.bottom < i[aa] - h
                  , f = a && o;
                f ? (C(this[CD], DD),
                C(this._8o, DD)) : (R(this[CD], DD),
                R(this._8o, DD)),
                this._4q(a, n, i, f ? e - NW : e),
                this._4o(o, n, i, f ? s - NW : s)
            }
        },
        _4q: function(t, i, n, e) {
            if (!t)
                return this._8o[Ea][Jw] = Z_,
                void (this._8o.scale = 0);
            var s = Math.min(i.x, n.x)
              , r = Math.max(i[oa], n[oa])
              , h = r - s
              , a = e / h;
            this._8o[uf] = a,
            this._8o[Ea][$a] = parseInt((i.x - s) * a) + ao,
            this._8o[Ea][oa] = parseInt((r - i.right) * a) + ao,
            this._8o[Ea][Jw] = ""
        },
        _4o: function(t, i, n, e) {
            if (!t)
                return this[CD][Ea][Jw] = Z_,
                void (this._mli[uf] = 0);
            var s = Math.min(i.y, n.y)
              , r = Math.max(i[aa], n.bottom)
              , h = r - s
              , a = e / h;
            this[CD].scale = a,
            this._mli.style.top = parseInt((i.y - s) * a) + ao,
            this[CD].style[aa] = parseInt((r - i[aa]) * a) + ao,
            this[CD].style.display = ""
        }
    },
    br.prototype = {
        shape: null,
        initialize: function() {
            T(this, br, SO),
            this[pC](),
            MW[Fj](this)
        },
        _ml8: function() {
            this[Ax] = new AW(this[lu].path),
            this.addChild(this[Ax], 0),
            this[rL] = this[Ax]
        },
        invalidateShape: function() {
            this[Ax].invalidateData(),
            this[NM]()
        },
        _$s: function(t, i, n) {
            var e = this[Lj].onBindingPropertyChange(this, t, i, n);
            return e = gW[Nj](this, t, i, n) || e,
            MW[Nj](this, t, i, n) || e
        },
        doValidate: function() {
            this[rL] && (this[Ax][nf] = this[nf][Fk],
            this[rL][Hf] = null != this._2g,
            this.body[Dk] = this._2g);
            var t = this[lu][Sk]
              , i = 0
              , n = 0;
            t && (i = t.x,
            n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[Kj] = !0),
            this.$x = i,
            this.$y = n,
            OW[lh][hC].call(this) || e
        },
        getLinkablePorts: function() {
            return this[nf].linkablePorts
        },
        getLinkableBounds: function() {
            return this.bodyBounds
        },
        getDefaultPortPoint: function(t) {
            return ui(QY[hv], t || this[uC]())
        },
        getPortPoint: function(t, i) {
            if (!t)
                return this[kd](i);
            i = i || this[uC]();
            var n;
            return i[hL] ? (n = ui(t, i[hL]),
            i[Uo] && (n = Ai(n.x, n.y, i[Uo], i.rotateX || 0, i[ND] || 0)),
            n.x += i.tx || 0,
            n.y += i.ty || 0) : n = ui(t, i),
            n[$D] = t,
            n
        },
        getPortPoints: function() {
            var t = this[TC]();
            if (t && Array[Nh](t)) {
                var i = []
                  , n = this.getLinkableBounds();
                return t[Du](function(t) {
                    i[uh](this.getPortPoint(t, n))
                }
                [kh](this)),
                i
            }
        }
    },
    E(br, OW),
    K(br.prototype, {
        path: {
            get: function() {
                return this.data[Fk]
            }
        },
        length: {
            get: function() {
                return this[nf].length
            }
        }
    }),
    br[lh][ro] = function(t, i, n) {
        var e = this._hu(t, i)
          , s = this[nf]
          , r = An(s[Fk], e.x, e.y, n);
        r && (s[xC] = r)
    }
    ,
    gr[lh] = {
        _ls: function() {
            this._ip[Ea][gx] = mP
        },
        _jt: function() {
            this._ip[Ea].visibility = X_
        },
        clear: function() {
            this._9a[so](),
            this[kT]()
        },
        contains: function(t) {
            return t instanceof Object && t.id && (t = t.id),
            this._9a[Il](t)
        },
        _5n: function(t) {
            hW[Vc](this._ip, Y_, t ? WT + t[nk](Uh) + ")" : "")
        },
        addDrawable: function(t, i) {
            if (i) {
                var n = {
                    id: ++kY,
                    drawable: t,
                    scope: i
                };
                return this._9a.add(n),
                n
            }
            return t.id || (t.id = ++kY),
            this._9a.add(t),
            t
        },
        removeDrawable: function(t) {
            return t.id ? void this._9a[Lh](t) : this._9a[jl](t)
        },
        _9a: null,
        invalidate: function() {
            this._mlp()
        },
        _mlp: function() {
            this[Xu]._63 || this._j7()
        },
        _i9: function(t, i) {
            this._ip[bo](t, i)
        },
        _j7: function() {
            var t = this[Xu][hg]
              , i = this.g;
            i._jx(),
            i.save(),
            this._mlaseCanvas._95(i);
            for (var n = this._9a._jg, e = 0, s = n[nh]; s > e; e++)
                i[af](),
                i[cf](),
                this._gk(i, n[e], t),
                i[So]();
            i[So]()
        },
        _gk: function(t, i, n) {
            return i instanceof Function ? void i(t, n) : void (i[BD]instanceof Function && i[Lv] && i[BD][sh](i.scope, t, n))
        }
    },
    YY[dR] = !0;
    var $W = function(t) {
        this._k0 = t
    };
    YY[FD] = 600,
    YY.ANIMATION_TYPE = QH.easeOut,
    $W[lh] = {
        _k0: null,
        _dh: null,
        _fe: function(t, i, n) {
            this._l6();
            var e = Math.abs(t / 2)
              , s = Math.abs(i / 2)
              , r = Math.min(YY.ANIMATION_MAXTIME, .6 * Math.max(e, s) * 1e3);
            if (10 > r)
                return !1;
            var h = function(t) {
                return -(2 * Math.pow(t, 1.5) - 3 * t)
            }
              , a = t * r / 3
              , o = i * r / 3;
            this._kf(this._k0.tx + a, this._k0.ty + o, 0, {
                duration: r,
                animationType: h
            }, n)
        },
        _6s: function(t, i, n, e, s) {
            this._dh && this._dh._l6(),
            s && (this[GD] = !0,
            this._k0.pauseRendering(!0)),
            this._4e(),
            this._dh = new iq(t,this,i,n),
            this._dh._64 = this._64[kh](this),
            this._dh._ki(e)
        },
        _4e: function() {
            this._k0.onAnimationStart()
        },
        _64: function() {
            this[GD] && (this._k0[iD](!1),
            delete this[GD]),
            this._k0[zD]()
        },
        _de: function() {
            return this._dh && this._dh._de()
        },
        _l6: function() {
            this._dh && this._dh._l6()
        },
        _ib: function(t) {
            var i = this._fromTX + (this[YD] - this[HD]) * t
              , n = this[qD] + (this[UD] - this[qD]) * t
              , e = this._fromScale + (this[WD] - this[VD]) * t;
            this._k0[sM](i, n, e, this[XD])
        },
        _kf: function(t, i, n, e, s) {
            this._l6();
            var r = this._k0
              , h = r[uf];
            if (0 >= n && (n = h),
            t != r.tx || i != r.ty || n != h) {
                var a, o, f;
                e instanceof Object && (a = e[ZD],
                o = e[KD],
                f = e.animationType);
                var u = r.tx
                  , c = r.ty;
                if (!a)
                    if (n != h) {
                        var _ = n > h ? n / h : h / n;
                        _ = Math.log(_) / Math.log(1.3),
                        a = 60 * _
                    } else {
                        var d = VY(t, i, u, c);
                        a = d / 2
                    }
                o = o || YY.ANIMATION_MAXTIME,
                f = f || YY[JD],
                a = Math.min(o, a),
                this._fromTX = u,
                this[qD] = c,
                this[VD] = h,
                this._toTX = t,
                this[UD] = i,
                this[WD] = n,
                this._6s(this._ib, a, f, s, n != h)
            }
        }
    },
    YY.INTERACTION_HANDLER_SIZE_TOUCH = 8,
    YY[QD] = 4,
    YY.INTERACTION_ROTATE_HANDLER_SIZE_TOUCH = 30,
    YY.INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP = 20;
    var BW = Math.PI / 4;
    xr.prototype = {
        element: null,
        _$m: !1,
        setCurrentElement: function(t, i) {
            this.element = t,
            i && this[tN]()
        },
        onDataPropertyChange: function() {},
        addDataPropertyChangeListener: function() {
            this._$m || (this._$m = !0,
            this[E_].dataPropertyChangeDispatcher[Zd](this._19, this))
        },
        removeDataPropertyChangeListener: function() {
            this._$m && (this._$m = !1,
            this[E_][iN][Cv](this._19, this))
        },
        _19: function(t) {
            this[nN] && t[kf] == this[nN] && this[eN](t)
        },
        onElementRemoved: function(t, i) {
            this[nN] && (t == this.element || B(t) && x(t, this[nN])) && this[yM](i)
        },
        onClear: function(t) {
            this[nN] && this[yM](t)
        },
        destroy: function() {
            delete this[nN],
            this[sN](),
            this[rN](),
            this[hN] = null
        },
        invalidate: function() {
            this.topCanvas.invalidate()
        },
        removeDrawable: function() {
            this[aN] && (this[gd][rN](this._l3ableId),
            delete this._l3ableId,
            this[TT]())
        },
        drawableList: null,
        addDrawable: function() {
            this[aN] || (this._l3ableId = this[gd][oN](this.draw, this).id,
            this[TT]())
        },
        isShowing: function() {
            return this[aN]
        },
        draw: function(t, i) {
            this[hN] && this[hN].forEach(function(n) {
                n[mf](t, i)
            }),
            this[fN](t, i)
        },
        doDraw: function() {},
        escapable: !0,
        onkeydown: function(t, i) {
            this[uN] && 27 == t.keyCode && (z(t),
            this[yM](i))
        }
    },
    eq[cN] = xr,
    pr.prototype = {
        defaultCursor: md,
        getInteractionInstances: function(t) {
            if (!this[yd])
                return null;
            for (var i = [], n = 0, e = this[yd][nh]; e > n; n++) {
                var s = this[yd][n];
                s instanceof Function && (s = new s(t)),
                s.install instanceof Function && s[_N](t),
                i.push(s)
            }
            return i
        }
    },
    Er[lh] = {
        _dd: null,
        _ju: null,
        destroy: function() {
            T(this, Er, yM, arguments),
            delete this._ju,
            delete this._8v,
            delete this._dd
        },
        doDraw: function(t) {
            var i = this[Ha];
            i && (t.beginPath(),
            i.forEach(function(i) {
                this[dN](t, i)
            }, this),
            this[lN] && t[Yf](),
            this[vN](t))
        },
        styleDraw: function(t) {
            var i = wr(this[E_].interactionProperties, this.getDefaultDrawStyles(this[E_]));
            i[zo] && (t.lineWidth = i[zo],
            i[cp] && (t[cp] = i.lineCap),
            i[rd] && (t.lineJoin = i[rd]),
            i[gu] && (t[gu] = i[gu],
            t[wu] = i.lineDashOffset || 0),
            t[hd] = i[hd],
            t[Fo]()),
            i[_f] && (t[_f] = i.fillStyle,
            t[Go]())
        },
        drawPoint: function(t, i, n) {
            if (n)
                return void t[lf](i.x, i.y);
            if (eq[Nh](i)) {
                var e = i[0]
                  , s = i[1];
                t.quadraticCurveTo(e.x, e.y, s.x, s.y)
            } else
                t[vf](i.x, i.y)
        },
        setCurrentPoint: function(t) {
            this[bN] = t
        },
        addPoint: function(t) {
            this._ju || (this._ju = [],
            this[oN]()),
            this._ju[uh](t),
            this.invalidate()
        }
    },
    E(Er, xr),
    K(Er[lh], {
        currentPoint: {
            get: function() {
                return this._8v
            },
            set: function(t) {
                this._8v = t,
                this.invalidate()
            }
        },
        prevPoint: {
            get: function() {
                return this._ju && this._ju.length ? this._ju[this._ju[nh] - 1] : null
            }
        },
        points: {
            get: function() {
                return this._8v && this._ju && this._ju[nh] ? this._ju[hh](this._8v) : void 0
            }
        }
    }),
    eq.DrawPathInteraction = Er,
    Tr[lh] = {
        _id: function(t, i) {
            return this[gN] && t != this.start ? this._df(t, i) : this[yN](t, i)
        },
        _mlm: function(t, i) {
            return t instanceof uW && i[KC](t)
        },
        _df: function(t, i) {
            return t instanceof uW && i.canLinkTo(t, this.start)
        },
        _9r: function(t, i, n, e) {
            if (this[mN])
                return this._mjurrentPort[xN](n, e);
            var s = i.getUI(t);
            return s && s[EC] ? s[EC][Qb] : t.location
        },
        _d3: function(t) {
            this._k2 && (clearTimeout(this._k2),
            delete this._k2),
            this._k2 = setTimeout(function(t) {
                if (delete this._k2,
                this[gN] && this[bN]) {
                    var i = t.x - this.currentPoint.x
                      , n = t.y - this[bN].y;
                    Math.sqrt(i * i + n * n) * this.graph[uf] <= 2 && this[ro](this[bN])
                }
            }
            .bind(this, this[pN](t)), YY[Ob])
        },
        destroy: function() {
            T(this, Tr, yM, arguments),
            this.start = null,
            this[EN] = null,
            this._k2 && (clearTimeout(this._k2),
            delete this._k2),
            this[wN] = null,
            this._mjurrentPort = null
        },
        ondblclick: function(t, i) {
            this.destroy(i)
        },
        finish: function(t, i, n, e) {
            var s;
            this._ju && this._ju[nh] >= 2 && (this._ju.shift(),
            s = new HY,
            l(this._ju, function(t) {
                if (eq.isArray(t)) {
                    var i = t[0]
                      , n = t[1];
                    s.add(new Bq(sq[Jx],[i.x, i.y, n.x, n.y]))
                } else
                    s.add(new Bq(sq.SEGMENT_LINE_TO,[t.x, t.y]))
            }, this)),
            i[TN](this.start, n, t, s, this[EN], e),
            this.destroy(i)
        },
        onstart: function(t, i) {
            if (this.start) {
                var n = t[Ug]()
                  , e = i.toLogical(t);
                return this._df(n, i) ? void this.finish(t, i, n, new kr(i.getUI(n))[xN](e.x, e.y)[$D]) : void this[ro](e)
            }
        },
        startdrag: function(t, i) {
            if (!this.start && !t.responded) {
                var n = t.getData();
                if (n && this[yN](n, i)) {
                    t[MN] = !0,
                    this[gN] = n;
                    var e = i[JT](t)
                      , s = this._9r(n, i, e.x, e.y);
                    this[EN] = s[$D],
                    this[ro](s)
                }
            }
        },
        ondrag: function(t, i) {
            this[kN](t, i)
        },
        enddrag: function(t, i) {
            if (this.start) {
                var n = t.getData();
                if (this._df(n, i)) {
                    var e = i[JT](t);
                    this.finish(t, i, n, new kr(i[w_](n))[xN](e.x, e.y)[$D])
                }
            }
        },
        onrelease: function(t, i) {
            CH(t) && this[yM](i)
        },
        _mlk: null,
        onmousemove: function(t, i) {
            var n = i.toLogical(t)
              , e = Mr(i, n.x, n.y, function(t) {
                return this._id(t, i)
            }
            [kh](this));
            e != this[wN] && (this[wN] = e,
            this[mN] = e ? new kr(i.getUI(e)) : null,
            e ? (this[oN](),
            this[hN] = [this._mjurrentPort]) : this[hN] = null,
            this[TT]());
            var s;
            this._mjurrentPort && (s = this._mjurrentPort[xN](n.x, n.y),
            this[TT]()),
            this[gN] && (this[bN] = s || n,
            CH(t) && this._d3(t, i))
        },
        toLogicalPoint: function(t) {
            return this[E_][JT](t)
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this.graph[ON](bW[hA]),
                strokeStyle: this[E_].getDefaultStyle(bW[oA]),
                lineDash: this[E_][ON](bW[lA]),
                lineDashOffset: this[E_][ON](bW[SN]),
                lineCap: this[E_].getDefaultStyle(bW[LS]),
                lineJoin: this[E_].getDefaultStyle(bW.LINE_JOIN)
            }
        }
    },
    E(Tr, Er),
    eq[IN] = Tr,
    kr[lh][AN] = function(t, i, n) {
        var e = 0;
        t[cf](),
        t[Td](n.x - e, n.y - e, n[ca] + 2 * e, n.height + 2 * e),
        t[zo] = 2 / i,
        t[hd] = OC,
        t[Fo]()
    }
    ,
    kr.prototype[dN] = function(t, i, n) {
        var e = 4;
        t.beginPath();
        var s = e / i;
        t.moveTo(n.x + s, n.y),
        t.arc(n.x, n.y, s, 0, 2 * Math.PI, !1),
        t[zo] = 1 / i,
        n[PN] ? (t[hd] = jN,
        t[_f] = LN) : (t[hd] = OC,
        t[_f] = "rgba(255, 255, 255, 0.8)"),
        t.fill(),
        t[Fo]()
    }
    ,
    kr.prototype[mf] = function(t, i) {
        var n = this[Td];
        this[AN](t, i, n),
        this[Ha] && this[Ha].forEach(function(n) {
            this[dN](t, i, n)
        }
        [kh](this))
    }
    ,
    kr.prototype[xN] = function(t, i, n) {
        if (this[Ha]) {
            n = n || 20,
            n *= n;
            var e, s = n;
            return this[Ha][Du](function(r) {
                r[PN] && (r.marked = !1);
                var h = r.x - t
                  , a = r.y - i
                  , o = h * h + a * a;
                n > o && s > o && (s = o,
                e = r)
            }),
            e && (e[PN] = !0),
            e || this.defaultPoint
        }
        return this[Md]
    }
    ,
    Or[lh] = {
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this[E_][ON](bW.SHAPE_STROKE),
                strokeStyle: this[E_].getDefaultStyle(bW.SHAPE_STROKE_STYLE),
                fillStyle: this[E_][ON](bW[_S])
            }
        },
        finish: function(t, i) {
            if (this._ju && this._ju.length) {
                var n = this._ju
                  , e = 0
                  , s = 0
                  , r = 0;
                n[Du](function(t) {
                    return eq[Nh](t) ? void t[Du](function() {
                        e += t.x,
                        s += t.y,
                        r++
                    }) : (e += t.x,
                    s += t.y,
                    void r++)
                }),
                e /= r,
                s /= r;
                var h = [];
                n[Du](function(t, i) {
                    if (0 == i)
                        return void h[uh](new Bq(sq.SEGMENT_MOVE_TO,[t.x - e, t.y - s]));
                    if (eq.isArray(t)) {
                        var n = t[0]
                          , r = t[1];
                        h.push(new Bq(sq[Jx],[n.x - e, n.y - s, r.x - e, r.y - s]))
                    } else
                        h[uh](new Bq(sq[Kx],[t.x - e, t.y - s]))
                }),
                this.createElement(t, h, e, s),
                this[yM](i)
            }
        },
        startdrag: function(t) {
            t.responded = !0
        },
        createElement: function(t, i, n, e) {
            return this[E_][CN](t, i, n, e)
        },
        onstart: function(t, i) {
            var n = i.toLogical(t);
            this._dd = n,
            this[ro](n)
        },
        onmousemove: function(t, i) {
            this._dd && (this[bN] = i[JT](t))
        },
        ondblclick: function(t, i) {
            if (this._dd) {
                if (this._ju[nh] < 3)
                    return void this[yM](i);
                delete this._ju[this._ju[nh] - 1],
                this[RN](t, i)
            }
        },
        isClosePath: !0
    },
    E(Or, Er),
    eq[DN] = Or,
    Sr[lh] = {
        isClosePath: !1,
        createElement: function(t, i, n, e) {
            return this[E_][NN](t, i, n, e)
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: PW[bW[sS]],
                strokeStyle: PW[bW[hS]],
                lineDash: this[E_].getDefaultStyle(bW[fS]),
                lineDashOffset: this[E_][ON](bW[cS]),
                lineCap: this.graph[ON](bW[LS]),
                lineJoin: this[E_].getDefaultStyle(bW[zP])
            }
        }
    },
    E(Sr, Or),
    eq[$N] = Sr,
    Ir[lh] = {
        destroy: function(t) {
            T(this, Ir, yM, arguments),
            t.cursor = "",
            this[gN] = null
        },
        doDraw: function(t) {
            if (this[gN] && this.currentPoint) {
                var i, n;
                this.graph.interactionProperties && (i = this.graph.interactionProperties.uiClass,
                n = this[E_][DR][T_]),
                i = i || this[E_][RR] || eq[BN],
                n = n || this.graph.edgeType;
                var e = i.drawReferenceLine || eq[BN][bC]
                  , s = this[E_][w_](this.start);
                s && s[EC] && (s = s.bodyBounds[Qb],
                t[cf](),
                e(t, s, this[bN], n),
                this.styleDraw(t))
            }
        },
        canLinkFrom: function(t, i) {
            return t instanceof uW && i[KC](t)
        },
        canLinkTo: function(t, i) {
            return t instanceof uW && i.canLinkTo(t, this[gN])
        },
        startdrag: function(t, i) {
            var n = t[Ug]();
            this[KC](n, i) && (t[MN] = !0,
            this[gN] = n,
            i.cursor = Ey,
            this.addDrawable())
        },
        ondrag: function(t, i) {
            this[gN] && (eq[PC](t),
            this[bN] = i[JT](t),
            this.invalidate())
        },
        enddrag: function(t, i) {
            if (this[gN]) {
                this[TT]();
                var n = t.getData();
                this[JC](n, i) && i.createEdgeByInteraction(this[gN], n, t),
                this[yM](i)
            }
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this[E_][ON](bW[hA]),
                strokeStyle: this.graph[ON](bW.EDGE_COLOR),
                lineDash: this[E_].getDefaultStyle(bW.EDGE_LINE_DASH),
                lineDashOffset: this.graph[ON](bW[SN]),
                lineCap: this[E_][ON](bW[LS]),
                lineJoin: this.graph[ON](bW[zP])
            }
        }
    },
    E(Ir, Er),
    eq.CreateSimpleEdgeInteraction = Ir,
    YY[FN] = !1,
    Rr.prototype = {
        html: null,
        createHTML: function() {
            var t = i[_o](GN);
            t.className = zN,
            t[Ea].position = dT,
            t[Ea].textAlign = Qb,
            t[Ea].border = YN,
            t.style.padding = HN,
            t[Ea][qN] = "0px 0px 10px rgba(40, 85, 184, 0.75)",
            t[Ea][Jw] = Z_,
            t[Ea].overflow = X_;
            var n = this;
            return t.oninput = function(t) {
                n[UN](t)
            }
            ,
            t.onkeydown = function(t) {
                return 27 == t[vw] ? void n[WN]() : void 0
            }
            ,
            t[VN] = function(i) {
                if (13 == i[vw] || 10 == i[vw]) {
                    if (i[Bh](),
                    i[XN] || i.ctrlKey || i[lw])
                        return Lr(t, ko),
                        void n.onValueChange(i);
                    n.stopEdit()
                }
            }
            ,
            i[rL].appendChild(t),
            t
        },
        setText: function(t, i) {
            this[MR][wh] = t || "",
            i && (this[MR][Ea][Ad] = i),
            Cr(this[MR]),
            this[ZN](this[MR])
        },
        onSizeChange: function(t) {
            var i = (t.offsetWidth,
            t[Sd],
            jr(t));
            return t[Ea][ca] = i.width + 30 + ao,
            t[Ea].height = i[eo] + 10 + ao,
            i
        },
        onValueChange: function(t) {
            var i = t.target;
            this.onSizeChange(i),
            i[Ea][$a] = i.x - i[Od] / 2 + ao
        },
        onClickOnWindow: function(t) {
            t[Qw] != this[MR] && (YY[FN] ? this[KN]() : this[WN]())
        },
        startEdit: function(i, n, e, s, r) {
            this[MR] || (this[MR] = this[JN]()),
            this[QN] || (this[QN] = function(t) {
                this.onClickOnWindow(t)
            }
            [kh](this)),
            t.addEventListener(vg, this[QN], !0),
            this[Hc] = r,
            this[MR].x = i,
            this.html.y = n,
            this.html[Ea][Jw] = cD,
            Pr(this[MR], i, n),
            this[t$](e, s || 10),
            Pr(this.html, i, n)
        },
        isEditing: function() {
            return Z_ != this[MR].style.display
        },
        cancelEdit: function() {
            this[KN](!0)
        },
        stopEdit: function(i) {
            if (this[i$]()) {
                t.removeEventListener(vg, this.stopEditWhenClickOnWindow);
                var n = this[MR].value;
                !i && this[Hc] && this[Hc](n),
                this[MR][Ea].display = Z_,
                this[MR].value = null,
                this[Hc] = null
            }
        },
        destroy: function() {
            this.html && i[rL][_b](this[MR])
        }
    },
    eq[n$] = Rr;
    var FW = function(t) {
        this.graph = t
    };
    FW[lh] = {
        destroy: function(t) {
            t.labelEditor && (t[e$].destroy(),
            delete t[e$])
        },
        ondblclick: function(t, i) {
            var n = t[Ug]();
            if (n) {
                if (n[s$] !== !1) {
                    if (i[r$] && i[h$](n)) {
                        var e = i[j_](t);
                        if (e instanceof IW && e[r$] !== !1) {
                            var s = i[e$];
                            s || (i[e$] = s = new Rr);
                            var r = e[Ro]();
                            return r = i.toCanvas(r.x + r[ca] / 2, r.y + r.height / 2),
                            r = Ar(r.x, r.y, i[MR]),
                            void i.startLabelEdit(n, e, s, r)
                        }
                    }
                    var h = n instanceof dW
                      , a = n instanceof fW && n[a$]();
                    return n._49 && (Ti(t) || !h && !a) ? void (i[Uk] = n) : h ? (n.expanded = !n.expanded,
                    void this[E_].onInteractionEvent(new Hr(this[E_],Hr[iO],t,n))) : void (a && this.graph[ER](n) && this.graph[qC](new Hr(this[E_],Hr[o$],t,n)))
                }
            } else {
                if (i[Uk])
                    return void i[f$]();
                if (i[u$]) {
                    var o = i[c$] || 1;
                    Math.abs(i.scale - o) < 1e-4 ? i.zoomToOverview() : i[uR](o)
                }
            }
        }
    };
    var GW = function(t) {
        this[E_] = t
    };
    GW[lh] = {
        onkeydown: function(t, i) {
            if (i[r$]) {
                var n = t[vw];
                if (8 == n || 46 == n || 127 == n)
                    return i.removeSelectionByInteraction(t),
                    void F(t);
                if (Ti(t)) {
                    if (67 == n)
                        ;
                    else if (86 == n)
                        ;
                    else if (90 == n)
                        ;
                    else if (89 != n)
                        return;
                    F(t)
                }
            }
        }
    },
    eq[_$] = GW;
    var zW = function(t) {
        this[E_] = t
    };
    zW.prototype = {
        onkeydown: function(i, n) {
            if (i[d$] && 83 == i[vw]) {
                var e = n[l$](n[uf], n[JM])
                  , s = t[Ja]()
                  , r = s[v$];
                r[b$] = g$ + e[ca] + y$ + e[eo];
                var h = r[_o](G_);
                h.src = e[nf],
                r[rL][Ju](h),
                F(i)
            }
        }
    };
    var YW = function(t) {
        this[E_] = t
    };
    YW.prototype = {
        destroy: function() {
            delete this[m$],
            delete this[x$]
        },
        _27: function(t) {
            var i = new HY;
            return t.selectionModel[Du](function(n) {
                t.isMovable(n) && t.isVisible(n) && i.add(n)
            }, this),
            i
        },
        onstart: function(t, i) {
            this[x$] && this[yM](i)
        },
        startdrag: function(t, i) {
            if (!(t[MN] || t[La] && 1 != t[La][nh])) {
                var n = t[Ug]();
                if (!n || !i[p$](n) || !i[xR](n))
                    return void this[yM](i);
                t.responded = !0,
                this.currentDraggingElement = n,
                this[m$] = this._27(i);
                var e = new Hr(i,Hr[E$],t,this[x$],this[m$].datas);
                return i.beforeInteractionEvent(e) === !1 ? void this.destroy(i) : void i[qC](e)
            }
        },
        ondrag: function(t, i) {
            if (this[x$]) {
                if (t[La] && 1 != t[La].length)
                    return void this[Hg](t, i);
                z(t);
                var n = t.dx
                  , e = t.dy
                  , s = i[uf];
                n /= s,
                e /= s;
                var r = new Hr(i,Hr.ELEMENT_MOVING,t,this.currentDraggingElement,this[m$][Xd]);
                i[w$](this[m$][Xd], n, e),
                i.onInteractionEvent(r)
            }
        },
        enddrag: function(t, i) {
            if (this[x$]) {
                if (this.draggingElements && this.draggingElements[nh]) {
                    if (t.shiftKey) {
                        var n, e = i[JT](t), s = e.x, r = e.y;
                        i[xd](function(t) {
                            var i = t.data;
                            if (!this[m$][P_](i) && t.uiBounds[No](s - t.x, r - t.y) && t.hitTest(s, r, 1)) {
                                if (i instanceof eq[CR]) {
                                    if (!i[$_])
                                        return;
                                    for (var e = this[m$][nh]; e-- > 0; ) {
                                        var h = this.draggingElements.get(e);
                                        if (h instanceof eq.Node && h[T$](i))
                                            return
                                    }
                                    return n = i,
                                    !1
                                }
                                return (i[$_] || i._hq() && i[BM]) && (n = i),
                                !1
                            }
                        }, this),
                        n && this[m$].forEach(function(t) {
                            for (var i = t[Qu]; i; ) {
                                if (this[m$][P_](i))
                                    return;
                                i = i[Qu]
                            }
                            t[Qu] = n
                        }, this)
                    }
                    var h = new Hr(i,Hr[M$],t,this.currentDraggingElement,this[m$][Xd]);
                    i.onInteractionEvent(h)
                }
                this.destroy(i)
            }
        },
        onpinch: function(t, i) {
            this.currentDraggingElement && this.enddrag(t, i)
        },
        step: 1,
        onkeydown: function(t, i) {
            if (Ti(t)) {
                var n, e;
                if (37 == t[vw] ? n = -1 : 39 == t.keyCode ? n = 1 : 38 == t[vw] ? e = -1 : 40 == t[vw] && (e = 1),
                n || e) {
                    var s = this._27(i)[Xd];
                    if (0 != s.length) {
                        F(t),
                        n = n || 0,
                        e = e || 0;
                        var r = this[k$] / i.scale
                          , h = new Hr(i,Hr[M$],t,null,s);
                        i[w$](s, n * r, e * r),
                        i[qC](h)
                    }
                }
            }
        }
    };
    var HW = function(t) {
        this.graph = t
    };
    HW[lh] = {
        onkeydown: function(t, i) {
            Ti(t) || (37 == t[vw] ? (this._5t(i, 1, 0),
            F(t)) : 39 == t[vw] ? (this._5t(i, -1, 0),
            F(t)) : 38 == t.keyCode ? (this._5t(i, 0, 1),
            F(t)) : 40 == t.keyCode && (this._5t(i, 0, -1),
            F(t)))
        },
        _5t: function(t, i, n) {
            t._9z(i, n)
        },
        onstart: function(t, i) {
            this._ki && this[yM](i)
        },
        _ki: !1,
        startdrag: function(t, i) {
            if (!t[MN]) {
                t.responded = !0,
                this._ki = !0,
                i[XR] = WH;
                var n = new Hr(i,Hr[O$],t);
                i[qC](n)
            }
        },
        ondrag: function(t, i) {
            this._ki && i[ff](t.dx || 0, t.dy || 0)
        },
        enddrag: function(t, i) {
            if (this._ki) {
                if (i[RD] !== !1) {
                    var n = t.vx
                      , e = t.vy;
                    (Math.abs(n) > .1 || Math.abs(e) > .1) && i._9z(n, e)
                }
                this[yM](i);
                var s = new Hr(i,Hr[S$],t);
                i[qC](s)
            }
        },
        startpinch: function(t, i) {
            i[iD](!0)
        },
        onpinch: function(t, i) {
            this._ki = !0;
            var n = t.dScale;
            if (n) {
                var e = i[I$](t.center);
                i[eR](n, e.x, e.y, !1)
            }
        },
        endpinch: function(t, i) {
            i[iD](!1)
        },
        destroy: function(t) {
            this._ki = !1,
            t.cursor = null
        }
    },
    Dr.prototype = {
        onDataPropertyChange: function() {
            this.graph.callLater(function() {
                this._jp()
            }, this)
        },
        destroy: function() {
            this[E_][XR] = null,
            this.element && delete this.element[A$],
            this[P$] = !1,
            delete this._92,
            delete this._8v,
            delete this[j$],
            T(this, Dr, yM, arguments)
        },
        _92: null,
        _4z: function(t) {
            this._92 = t,
            this.invalidate()
        },
        isEndPointEditable: function(t, i) {
            return this.graph[L$](t, i)
        },
        drawPoint: function(t, i, n) {
            (!i.isEndPoint || this.isEndPointEditable(this.element, i[C$])) && (t[cf](),
            i.isControlPoint ? t[Td](i.x - this[zd] / n, i.y - this[zd] / n, this[zd] / n * 2, this[zd] / n * 2) : t.arc(i.x, i.y, this[zd] / n, 0, 2 * Math.PI, !1),
            t.lineWidth = 1 / n,
            t.lineDash = [],
            t[hd] = ad,
            t[_f] = "rgba(255, 255, 0, 0.8)",
            t[Fo](),
            t.fill())
        },
        _ft: function(t, i, n, e) {
            e ? t[lf](i, n) : t[vf](i, n)
        },
        doDraw: function(t, i) {
            this[R$](t, i)
        },
        drawLine: function(t, i) {
            if (this._92 && this._92[nh]) {
                var n = this._92;
                t[af]();
                var e = this[nN]instanceof cW;
                e && (t[ff](this[nN].x, this[nN].y),
                this[nN][Uo] && t[Uo](this[nN][Uo]));
                var s, r = [];
                t[cf]();
                var h = n[nh];
                n[Du](function(i, n) {
                    if (i.type != sq[D$])
                        for (var e = !n || n == h - 1, a = 0, o = i[Ha]; a + 1 < o[nh]; ) {
                            var f = o[a]
                              , u = o[a + 1]
                              , c = {
                                x: f,
                                y: u,
                                isControlPoint: this._6o(i, a)
                            };
                            e && (c.isEndPoint = !0,
                            c[C$] = 0 == n),
                            r[uh](c),
                            this._ft(t, c.x, c.y, null == s),
                            s = c,
                            a += 2
                        }
                }, this),
                t[zo] = 1 / i,
                t[gu] = [2 / i, 3 / i],
                t[hd] = N$,
                t[Fo](),
                r.forEach(function(n, e) {
                    this[dN](t, n, i, e)
                }, this),
                t.restore()
            }
        },
        invalidate: function() {
            this.topCanvas[TT]()
        },
        _33: function(t) {
            if (this.element != t && (this[nN] && this.destroy(),
            t && this[h$](t))) {
                var i = this._4x(t, this[E_]);
                i && (this[$$](t, !0),
                t[A$] = !0,
                this[j$] = !0,
                this._4z(i),
                this[oN]())
            }
        },
        _jp: function() {
            if (this.isShowing() && this.element) {
                var t = this._4x(this[nN], this[E_]);
                return t ? void this._4z(t) : void this[yM](this.graph)
            }
        },
        _4x: function(t, i) {
            if (i[h$](t)) {
                var n = t.pathSegments || [];
                n instanceof HY && (n = n.toDatas());
                var e = i[w_](t);
                if (e instanceof eq[BN]) {
                    var s = e[M_](i[w_](t.fromAgent))
                      , r = e[M_](i[w_](t[tc]))
                      , h = s[Qb]
                      , a = r[Qb]
                      , o = e[n_](bW[m_])
                      , f = e[n_](bW[p_]);
                    o && (h.x += o.x || 0,
                    h.y += o.y || 0),
                    f && (a.x += f.x || 0,
                    a.y += f.y || 0),
                    n[rh](0, 0, new eq[np](sq[B$],[h.x, h.y])),
                    n[uh](new eq.PathSegment(sq[B$],[a.x, a.y]))
                }
                return n
            }
        },
        _hu: function(t, i) {
            t -= this[nN].x,
            i -= this[nN].y;
            var n = {
                x: t,
                y: i
            };
            return this[nN][Uo] && Ws(n, -this[nN][Uo]),
            n
        },
        onclick: function(t, i) {
            if (i[r$] && t[XN] && this.element) {
                var n = this._g7(t, i);
                if (n && n[F$])
                    return void (n[Dv] >= 0 && this[nN].removePathSegmentByIndex(n[Dv]));
                if (this[nN] == t[Ug]()) {
                    var e = i.toLogical(t)
                      , s = i.getUI(this[nN]);
                    s.addPoint(e.x, e.y, this[zd] || 2)
                }
            }
        },
        isEditable: function(t) {
            return this[E_][h$](t) && (t instanceof cW || t instanceof fW && (!t.isLooped() || t[k_]()))
        },
        ondblclick: function(t, i) {
            if (!i.editable)
                return void (this.element && this[yM](i));
            var n = t[Ug]();
            return !n || n == this.element || n._editting ? void this.destroy(i) : void this._33(n)
        },
        onstart: function(t, i) {
            if (this[P$] = !0,
            !i[r$])
                return void (this[nN] && this[yM](i));
            if (!t[MN]) {
                if (this[nN] && this._g7(t, i))
                    return void (t[MN] = !0);
                var n = t[Ug]();
                return n && i[G$](n) && n instanceof cW ? void (this[nN] && n != this.element && this[yM]()) : void this._33(n)
            }
        },
        onrelease: function() {
            this._mousePressed = !1,
            this[nN] && (this[j$] = !0)
        },
        _8v: null,
        _g7: function(t, i) {
            var n = i[JT](t);
            this[nN]instanceof cW && (n = this._hu(n.x, n.y));
            var e, s = i[uf], r = this.handlerSize / s, h = this._92, a = h[nh], o = this[nN]instanceof eq.Edge;
            return h.forEach(function(t, s) {
                for (var f = 0, u = t[Ha]; f + 1 < u.length; ) {
                    var c = u[f]
                      , _ = u[f + 1]
                      , d = VY(n.x, n.y, c, _);
                    if (r > d) {
                        if (e = {
                            oldPoints: u.slice(0),
                            segment: t,
                            index: s,
                            pointIndex: f
                        },
                        o && (e[Dv] -= 1),
                        o && !Nr(t) && (0 == s || s == h[nh] - 1)) {
                            e[z$] = !0;
                            var l = 0 == s;
                            e[C$] = l;
                            var v = l ? eq[jR].EDGE_FROM_OFFSET : eq.Styles[p_]
                              , b = i[n_](this[nN], v) || {};
                            e.oldPoints = [b.x || 0, b.y || 0]
                        }
                        return this._6o(t, f) && (e.isControlPoint = !0,
                        s > 0 && (e[Y$] = h instanceof HY ? h[Sl](s - 1) : h[s - 1]),
                        a > s + 1 && (e[H$] = h instanceof HY ? h.getByIndex(s + 1) : h[s + 1],
                        e[H$].points && (e[q$] = e[H$].points[ah](0)))),
                        !1
                    }
                    f += 2
                }
            }, this),
            e && e[z$] && !this.isEndPointEditable(this[nN], e[C$]) ? void 0 : e
        },
        _6o: function(t, i) {
            return i == t[Ha].length - 2
        },
        startdrag: function(t, i) {
            if (this[nN] && this[j$] && (this._8v = this._g7(t, i),
            this._8v)) {
                this.removeDrawable(),
                t[MN] = !0;
                var n = new Hr(i,Hr.POINT_MOVE_START,t,this[nN]);
                n[U$] = this._8v,
                i[qC](n)
            }
        },
        onkeyup: function(t, i) {
            this[P$] && 16 != !t[vw] && this[nN] && this._8v && this._8v.delta && this._mjw(this._8v[Eg].x, this._8v[Eg].y, i, t, !1)
        },
        onkeydown: function(t, i) {
            T(this, Dr, W$, arguments),
            this[P$] && this.element && this._8v && t[lw] && this._8v[Eg] && this[V$](this._8v.delta.x, this._8v[Eg].y, i, t, !0)
        },
        _mjw: function(t, i, n, e, s) {
            var r = this._8v
              , h = this.element
              , a = r.oldPoints
              , o = r.segment;
            if (r[z$]) {
                var f = r[C$] ? eq.Styles[m_] : eq[jR][p_]
                  , u = {
                    x: a[0] + t,
                    y: a[1] + i
                };
                h[Vc](f, u);
                var c = new Hr(n,Hr[X$],e,h);
                return c[U$] = r,
                void n.onInteractionEvent(c)
            }
            if (s && r[F$]) {
                var _ = {
                    x: a[a[nh] - 2] + t,
                    y: a[a[nh] - 1] + i
                }
                  , d = r[Y$]
                  , l = r[H$]
                  , v = 20 / n[uf]
                  , b = Number.MAX_VALUE
                  , g = b
                  , y = b
                  , m = b;
                d && (d = d[Ho],
                b = Math.abs(_.x - d.x),
                y = Math.abs(_.y - d.y)),
                l && (l = l.lastPoint,
                g = Math.abs(_.x - l.x),
                m = Math.abs(_.y - l.y)),
                v > b && g > b ? t += d.x - _.x : v > g && b > g && (t += l.x - _.x),
                v > y && m > y ? i += d.y - _.y : v > m && y > m && (i += l.y - _.y)
            }
            if (r[F$] && Nr(o)) {
                for (var x = o[Ha][nh] - 4; x < o[Ha].length; ) {
                    var p = a[x] + t
                      , E = a[x + 1] + i;
                    o[Ha][x] = p,
                    o[Ha][x + 1] = E,
                    x += 2
                }
                if (r[H$] && Nr(r.nextSegment)) {
                    var w = r[q$]
                      , p = w[0] + t
                      , E = w[1] + i;
                    r.nextSegment.points[0] = p,
                    r.nextSegment.points[1] = E
                }
            } else {
                var x = r[Z$]
                  , p = a[x] + t
                  , E = a[x + 1] + i;
                o[Ha][x] = p,
                o[Ha][x + 1] = E
            }
            h[xk]();
            var c = new Hr(n,Hr.POINT_MOVING,e,h);
            c[U$] = r,
            n[qC](c)
        },
        ondrag: function(t, i) {
            if (this[nN] && this._8v) {
                var n = this._8v
                  , e = this.element
                  , s = t.totalDeltaX
                  , r = t[_y]
                  , h = i[uf];
                if (s /= h,
                r /= h,
                e[Uo]) {
                    var a = {
                        x: s,
                        y: r
                    };
                    Ws(a, -e[Uo]),
                    s = a.x,
                    r = a.y
                }
                n[Eg] = {
                    x: s,
                    y: r
                },
                this[V$](s, r, i, t, t[lw])
            }
        },
        enddrag: function(t, i) {
            if (this[nN] && this._8v) {
                this[oN](),
                this._jp();
                var n = new Hr(i,Hr.POINT_MOVE_END,t,this.element);
                n[U$] = this._8v,
                i[qC](n)
            }
        },
        onmousemove: function(t, i) {
            this[nN] && (i[XR] = t[XN] && (this._g7(t, i) || this[nN] == t[Ug]()) ? "crosshair" : null)
        }
    },
    E(Dr, xr),
    YY.SELECTION_RECTANGLE_STROKE = 1,
    YY[K$] = X(3724541951),
    YY[J$] = X(1430753245),
    sq.RECTANGLE_SELECTION_MODE_INTERSECT = Q$,
    sq[tB] = iB,
    YY[nB] = sq.RECTANGLE_SELECTION_MODE_INTERSECT;
    var qW = function(t) {
        this[E_] = t,
        this.topCanvas = t.topCanvas
    };
    qW.prototype = {
        onstart: function(t, i) {
            this._ki && this[yM](i)
        },
        startdrag: function(t, i) {
            t[MN] || (t[MN] = !0,
            this._ki = i[JT](t),
            i[XR] = Ey,
            this._$wId = this[gd][oN](this._$w, this).id)
        },
        ondrag: function(t, i) {
            if (this._ki) {
                z(t),
                this[eB] = i.toLogical(t),
                this[TT]();
                var n = new Hr(i,Hr.SELECT_START,t,i.selectionModel);
                i.onInteractionEvent(n)
            }
        },
        enddrag: function(t, i) {
            if (this._ki) {
                this[sB] && (clearTimeout(this[sB]),
                this._exTimer = null),
                this._ex(!0),
                this[yM](i);
                var n = new Hr(i,Hr[rB],t,i[dd]);
                i.onInteractionEvent(n)
            }
        },
        onpinch: function(t, i) {
            this._ki && this[Hg](t, i)
        },
        _$w: function(t, i) {
            t[hd] = YY[K$],
            t[_f] = YY[J$],
            t[zo] = YY[hB] / i;
            var n = this._ki.x
              , e = this._ki.y;
            t[Td](n, e, this[eB].x - n, this._end.y - e),
            t.fill(),
            t[Fo]()
        },
        invalidate: function() {
            return this.invalidateFlag ? void this[gd][TT]() : (this.invalidateFlag = !0,
            void (this[sB] = setTimeout(this._ex.bind(this), 100)))
        },
        _ex: function(t) {
            if (this.invalidateFlag = !1,
            this._exTimer = null,
            !this._ki || PY && !t)
                return void this[gd].invalidate();
            var i = Math.min(this._ki.x, this[eB].x)
              , n = Math.min(this._ki.y, this[eB].y)
              , e = Math.abs(this._ki.x - this[eB].x)
              , s = Math.abs(this._ki.y - this[eB].y);
            if (!e || !s)
                return void this.graph.selectionModel.clear();
            var r = []
              , h = this[E_][uf]
              , a = this[E_][aB];
            if (this.graph.forEachVisibleUI(function(t) {
                t._hp && this[E_][oB](t[lu]) && this.inRectangle(i, n, e, s, t, h, a) && r[uh](t[nf])
            }
            .bind(this)),
            this[E_].selectionModel.set(r),
            this[gd][TT](),
            !t) {
                var o = new Hr(this[E_],Hr[fB],null,this.graph[dd]);
                this[E_][qC](o)
            }
        },
        inRectangle: function(t, i, n, e, s, r, h) {
            var a = s[Ro]();
            return ai(t, i, n, e, a.x, a.y, a[ca], a.height) ? !0 : (h = h || YY.RECTANGLE_SELECTION_MODE,
            h == sq[tB] ? !1 : Bn(t, i, n, e, s, r))
        },
        destroy: function(t) {
            this._ki = null,
            t.cursor = null,
            this._$wId && (this[gd][rN](this._$wId),
            delete this._$wId,
            this[gd][TT]())
        }
    };
    var UW = S({
        "super": qW,
        onstart: null,
        startdrag: null,
        ondrag: null,
        enddrag: null,
        accept: function(t, i, n) {
            return n[uB] !== !1
        },
        oncontextmenu: function(t, i) {
            i[cB] || z(t)
        },
        onstart2: function() {
            qW[lh][Cg][dh](this, arguments)
        },
        startdrag2: function(t, i) {
            t.responded || (i[cB] && i.popupmenu.hide instanceof Function && i[cB][_B](),
            qW.prototype[Bg][dh](this, arguments))
        },
        ondrag2: function() {
            qW[lh][zg][dh](this, arguments)
        },
        enddrag2: function() {
            qW.prototype[Hg][dh](this, arguments)
        }
    })
      , BW = Math.PI / 4;
    $r[lh] = {
        _di: !1,
        _dk: !1,
        onDataPropertyChange: function() {
            this[E_].callLater(function() {
                this._98()
            }, this)
        },
        ondblclick: function(t, i) {
            this.element && this.destroy(i)
        },
        destroy: function(t) {
            t[XR] = null,
            delete this._mjv,
            delete this[Jj],
            delete this._8v,
            delete this._mjanEdit,
            delete this._ju,
            delete this._rotatePoint,
            delete this._dk,
            delete this._di,
            delete this[dB],
            T(this, $r, yM, arguments)
        },
        _mjv: null,
        _ju: null,
        _89: function(t) {
            this[aL] = t;
            var i = this[aL].x
              , n = this[aL].y
              , e = this[aL][ca]
              , s = this._mjv[eo];
            if (this[nN]instanceof dW && this[nN][BM],
            this._dk) {
                var r = [];
                r[uh]({
                    x: i,
                    y: n,
                    p: QY[ev],
                    cursor: lB,
                    rotate: 5 * BW
                }),
                r[uh]({
                    x: i + e / 2,
                    y: n,
                    p: QY.CENTER_TOP,
                    cursor: vB,
                    rotate: 6 * BW
                }),
                r.push({
                    x: i + e,
                    y: n,
                    p: QY[ov],
                    cursor: Yd,
                    rotate: 7 * BW
                }),
                r.push({
                    x: i,
                    y: n + s / 2,
                    p: QY[sv],
                    cursor: bB,
                    rotate: 4 * BW
                }),
                r[uh]({
                    x: i,
                    y: n + s,
                    p: QY[cv],
                    cursor: Yd,
                    rotate: 3 * BW
                }),
                r[uh]({
                    x: i + e,
                    y: n + s / 2,
                    p: QY[fv],
                    cursor: bB,
                    rotate: 0
                }),
                r[uh]({
                    x: i + e / 2,
                    y: n + s,
                    p: QY[av],
                    cursor: vB,
                    rotate: 2 * BW
                }),
                r[uh]({
                    x: i + e,
                    y: n + s,
                    p: QY[uv],
                    cursor: lB,
                    rotate: BW
                }),
                this._ju = r
            }
            this._rotatePoint = this._di ? {
                x: i + e / 2,
                y: n,
                cursor: VH
            } : null,
            this[TT]()
        },
        _dn: function(t, i, n, e) {
            t.beginPath();
            var s = (this[zd] - 1) / e;
            t.rect(i - s, n - s, 2 * s, 2 * s),
            t.lineWidth = 1 / e,
            t[gu] = [],
            t[hd] = ad,
            t[_f] = "rgba(255, 255, 255, 0.8)",
            t[Fo](),
            t[Go]()
        },
        _5y: function(t, i, n, e, s, r) {
            s = s || this[zd],
            r = r || gB,
            t.beginPath(),
            s /= e,
            t.arc(i, n, s, 0, 2 * Math.PI, !1),
            t[zo] = 1 / e,
            t[gu] = [],
            t[hd] = ad,
            t[_f] = r,
            t[Fo](),
            t.fill()
        },
        _hu: function(t, i) {
            t -= this[nN].x,
            i -= this[nN].y;
            var n = {
                x: t,
                y: i
            };
            return this[nN].rotate && Ws(n, -this.element[Uo]),
            n
        },
        doDraw: function(t, i) {
            if (this[aL]) {
                if (t[af](),
                t[ff](this[nN].x, this[nN].y),
                this[nN][Uo] && t[Uo](this.element[Uo]),
                this[yB]) {
                    this._5y(t, 0, 0, i, 3, mB);
                    var n = this[yB].x
                      , e = this[yB].y - this[xB] / i;
                    t[cf](),
                    t[lf](n, this[yB].y),
                    t.lineTo(n, e),
                    t[zo] = 1 / i,
                    t[hd] = N$,
                    t.stroke(),
                    this._5y(t, n, e, i)
                }
                if (this._ju) {
                    var s = this[aL].x
                      , r = this[aL].y
                      , h = this[aL][ca]
                      , a = this[aL].height;
                    t[cf](),
                    t[Td](s, r, h, a),
                    t.lineWidth = 1 / i,
                    t[gu] = [2 / i, 3 / i],
                    t.strokeStyle = N$,
                    t[Fo](),
                    l(this._ju, function(n) {
                        this._dn(t, n.x, n.y, i)
                    }, this)
                }
                t.restore()
            }
        },
        _98: function() {
            if (this[pB]() && this[nN]) {
                var t = this[E_][w_](this[nN]);
                this[Jj] = t[rL];
                var i = Br(this._mlody, this[Jj]._iz)
                  , n = Br(this[Jj], this._mlody._7w);
                this[dB] = new JY(i.y - n.y,i.x - n.x,n[aa] - i.bottom,n[oa] - i[oa]),
                this._89(n)
            }
        },
        _mlh: function(t, i) {
            return i[G$](t)
        },
        _mlg: function(t, i) {
            return !(t instanceof dW && t[BM] || !i[EB](t))
        },
        _mjs: function(t, i) {
            return t instanceof uW && i.isEditable(t)
        },
        onstart: function(t, i) {
            if (!i[r$])
                return void (this[nN] && this.destroy(i));
            if (!t[MN]) {
                var n = i.getUI(t)
                  , e = t.getData();
                if (e != this[nN]) {
                    if (this[nN]) {
                        if (this._g7(t, i))
                            return void (t.responded = !0);
                        this.destroy(i)
                    }
                    if (e && !e[A$] && this[wB](e, i)) {
                        var s = this._mlh(e, i, n)
                          , r = this[TB](e, i, n);
                        (s || r) && (this.setCurrentElement(e, !0),
                        this.addDrawable(),
                        this._dk = s,
                        this._di = r,
                        this._98())
                    }
                }
            }
        },
        onrelease: function(t, i) {
            this[nN] && (this[j$] = !0,
            this[oN](),
            i.callLater(function() {
                this._98()
            }, this))
        },
        _8v: null,
        _g7: function(t, i) {
            var n = i[JT](t);
            n = this._hu(n.x, n.y);
            var e = i[uf]
              , s = this[zd] / e;
            if (this._rotatePoint) {
                var r = this[yB].x
                  , h = this[yB].y - this._rotateHandleLength / e;
                if (VY(n.x, n.y, r, h) < s)
                    return this[yB]
            }
            if (this._ju && this._ju[nh]) {
                var a;
                return l(this._ju, function(t) {
                    return VY(n.x, n.y, t.x, t.y) < s ? (a = t,
                    !1) : void 0
                }, this),
                a
            }
        },
        onmousemove: function(t, i) {
            if (this.element) {
                var n = this._g7(t, i);
                if (!n)
                    return void (i[XR] = null);
                if (n != this[yB] && this[nN][Uo]) {
                    var e = n.rotate + this.element.rotate;
                    return void (i[XR] = Fr(e))
                }
                i[XR] = n[XR]
            }
        },
        startdrag: function(t, i) {
            if (this[nN] && (this[rN](),
            this[j$] && (this._8v = this._g7(t, i),
            this._8v))) {
                if (t.responded = !0,
                this._8v == this[yB])
                    return this._8v[gN] = i[JT](t),
                    void (this._8v[Uo] = this.element[Uo] || 0);
                var n = new Hr(i,Hr.RESIZE_START,t,this[nN]);
                n[U$] = this._8v,
                i[qC](n)
            }
        },
        _6f: function(t, i, n, e, s, r) {
            var h = this[aL]
              , a = h.x
              , o = h.y
              , f = h[ca]
              , u = h[eo];
            if (r) {
                var c = e != f;
                c ? s = e * u / f : e = s * f / u
            }
            var _ = t[Fk][Yk]
              , d = e / f
              , l = s / u
              , v = -a * d + i
              , b = -o * l + n;
            _.forEach(function(t) {
                if (t[qo] != sq.SEGMENT_CLOSE) {
                    var e = t.points;
                    if (e && e[nh])
                        for (var s = 0, r = e.length; r > s; s += 2) {
                            var h = e[s]
                              , f = e[s + 1];
                            e[s] = (h - a) * d + i - v,
                            e[s + 1] = (f - o) * l + n - b
                        }
                }
            }),
            this._mjv.set(i - v, n - b, e, s),
            t[mR](t.x + v, t.y + b),
            t.firePathChange()
        },
        _9d: function(t, i, n, e, s) {
            this[aL].set(i, n, e, s),
            t.minSize = {
                x: i,
                y: n,
                width: e,
                height: s
            }
        },
        _4c: function(t, i, n, e, s) {
            if (this.element instanceof dW)
                return this._9d(this[nN], t, i, n, e, s);
            if (this[nN]instanceof cW)
                return this._6f(this[nN], t, i, n, e, s);
            var r = this[Jj]instanceof IW;
            if (!r && s) {
                var h = this[aL]
                  , a = this[Jj][MB]
                  , o = n != h[ca];
                o ? e = n * a.height / a[ca] : n = e * a[ca] / a[eo]
            }
            var f = this[nN][Dk]
              , u = new ZY(n - this._insets[$a] - this[dB][oa],e - this._insets.top - this[dB].bottom);
            if (u[ca] < 1 && (n = this[dB].left + this._insets.right + 1,
            u[ca] = 1),
            u.height < 1 && (e = this._insets.top + this[dB][aa] + 1,
            u[eo] = 1),
            r ? this[nN].setStyle(bW[wI], u) : this[nN][MT] = u,
            f) {
                var c = ci(f, n, e)
                  , _ = c.x + t - (this[Jj][PP] || 0)
                  , d = c.y + i - (this._mlody[vO] || 0);
                if (this[aL].set(t - _, i - d, n, e),
                this[nN][Uo]) {
                    var c = Ws({
                        x: _,
                        y: d
                    }, this[nN].rotate);
                    _ = c.x,
                    d = c.y
                }
                this.element.x += _,
                this.element.y += d
            } else {
                var _ = this[aL].x * n / this._mjv[ca] - t
                  , d = this[aL].y * e / this[aL][eo] - i;
                if (this._mjv.set(t + _, i + d, n, e),
                this[nN].rotate) {
                    var c = Ws({
                        x: _,
                        y: d
                    }, this[nN][Uo]);
                    _ = c.x,
                    d = c.y
                }
                this[nN].x -= _,
                this.element.y -= d
            }
        },
        ondrag: function(t, i) {
            if (this.element && this._8v)
                if (this._8v != this[yB]) {
                    var n = t.dx
                      , e = t.dy
                      , s = i[uf];
                    if (n /= s,
                    e /= s,
                    this[nN][Uo]) {
                        var r = {
                            x: n,
                            y: e
                        };
                        Ws(r, -this[nN].rotate),
                        n = r.x,
                        e = r.y
                    }
                    var h = this._8v.p
                      , a = this[aL]
                      , o = a.x
                      , f = a.y
                      , u = a[ca]
                      , c = a.height;
                    h[da] == tH ? n >= u ? (o += u,
                    u = n - u || 1) : (o += n,
                    u -= n) : h[da] == nH && (-n >= u ? (u = -n - u || 1,
                    o -= u) : u += n),
                    h[la] == eH ? e >= c ? (f += c,
                    c = e - c || 1) : (f += e,
                    c -= e) : h[la] == rH && (-e >= c ? (c = -e - c || 1,
                    f -= c) : c += e),
                    this._4c(o, f, u, c, t[lw]);
                    var _ = new Hr(i,Hr[kB],t,this.element);
                    _.point = this._8v,
                    i[qC](_)
                } else {
                    var r = i.toLogical(t)
                      , d = gn(r.x, r.y, this[nN].x, this[nN].y, this._8v[gN].x, this._8v[gN].y, !0);
                    d += this._8v.rotate || 0,
                    t[lw] && (d = Math.round(d / Math.PI * 4) * Math.PI / 4),
                    this[nN][Uo] = d % (2 * Math.PI);
                    var _ = new Hr(i,Hr[OB],t,this[nN])
                }
        },
        enddrag: function(t, i) {
            if (this[nN] && this._8v && this._8v != this[yB]) {
                var n = new Hr(i,Hr.RESIZE_END,t,this[nN]);
                n.point = this._8v,
                i[qC](n)
            }
        }
    },
    E($r, xr),
    eq[SB] = $r;
    var WW = function(t) {
        this.graph = t
    };
    WW.prototype = {
        onstart2: function(t, i) {
            this[Cg](t, i)
        },
        onclick: function(t, i) {
            if (!Ti(t)) {
                var n = t.getData();
                if (n && i[oB](n) && (!i.isSelected(n) || 1 != i[dd][nh])) {
                    i[IB](n);
                    var e = new Hr(i,Hr.SELECT,t,i.selectionModel);
                    i.onInteractionEvent(e)
                }
            }
        },
        onstart: function(t, i) {
            if (!t[MN]) {
                var n = t.getData();
                if (n && !i[oB](n) && (n = null),
                n && Ti(t)) {
                    i[gR](n);
                    var e = new Hr(i,Hr.SELECT,t,i.selectionModel);
                    return void i[qC](e)
                }
                if (!n || !i[dd][p$](n)) {
                    n ? (i[IB](n),
                    i[AB](n)) : i.setSelection(null);
                    var e = new Hr(i,Hr.SELECT,t,i.selectionModel);
                    i[qC](e)
                }
            }
        },
        onkeydown: function(t, i) {
            return 27 == t[vw] ? void i[yR]() : void (Ti(t) && 65 == t[vw] && (i.selectAll(),
            F(t)))
        }
    },
    YY[PB] = 3e3,
    YY[jB] = 1e3,
    Gr[LB] = CB,
    Gr.CURSOR_OFFSET_X = 0,
    Gr[RB] = 15,
    mi(ta + Gr[LB], {
        "user-select": Z_,
        "background-color": DB,
        overflow: X_,
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: oL,
        "pointer-events": Z_,
        border: NB,
        padding: $B,
        display: cD,
        position: dT
    }),
    Gr[BB] = function() {
        var t = Gr[FB];
        return t || (t = Gr[FB] = new Gr),
        t
    }
    ,
    Gr[GB] = function(t, i, n) {
        Gr[BB]().show(t, i, n)
    }
    ,
    Gr[_B] = function() {
        Gr[BB]().hide()
    }
    ,
    Gr[lh] = {
        getTooltipElement: function() {
            var t = this._l1;
            return t || (t = i.createElement(B_),
            t[Sh] = Gr.CLASS_NAME,
            this._l1 = t,
            i[rL][Ju](t)),
            t
        },
        update: function(t, i) {
            if (this[pB]()) {
                var n = Nd == i;
                t && !n && (t = t.replace(/\n/g, zB));
                var e = this.getTooltipElement();
                n ? e[YB] = t || "" : e.innerHTML = t || "",
                zr(e, this._info.x + Gr[HB], this[qB].y + Gr[RB])
            }
        },
        setTooltip: function(t, i) {
            if (!t || !t[UB])
                return this[qB] = null,
                this._l1 && (this._l1[Ea].display = Z_),
                void (this._9k = Date.now());
            this._9k = null,
            this._info = t;
            var n = this[WB]();
            n[Ea].display = "",
            this.update(this[qB][UB], this[qB].type),
            isNaN(i) && (i = YY[PB]),
            i && this.startTimer(this.setTooltip[kh](this, !1), i)
        },
        _9k: null,
        _k2: null,
        stopTimer: function() {
            this._k2 && (clearTimeout(this._k2),
            this._k2 = null)
        },
        startTimer: function(t, i) {
            this.stopTimer(),
            this._k2 = setTimeout(function(t) {
                this._k2 = null,
                t()
            }
            [kh](this, t), i)
        },
        show: function(t, i, n) {
            return this[pB]() || this._9k && Date.now() - this._9k < 1e3 ? void this.setTooltip(t, n) : (isNaN(i) && (i = YY[jB]),
            void (i ? this[VB](this[XB][kh](this, t, n), i) : this[XB](t, n)))
        },
        isShowing: function() {
            return this._l1 && Z_ !== this._l1.style[Jw]
        },
        hide: function() {
            this.stopTimer(),
            this[pB]() && this[XB](!1)
        }
    };
    var VW = function(t) {
        this[E_] = t
    };
    VW[lh] = {
        onstart: function(t, i) {
            this[yM](i)
        },
        _i7: null,
        onmousemove: function(t, i) {
            if (i.enableTooltip) {
                var n = t.getData()
                  , e = n ? i.getTooltip(n) : null;
                return e ? void Gr[GB]({
                    target: n,
                    content: e,
                    type: n.tooltipType,
                    x: t[ZB],
                    y: t[Na]
                }, i[KB], i[JB]) : void Gr[_B]()
            }
        },
        destroy: function() {
            Gr.hide()
        }
    };
    var XW = function(t) {
        this[E_] = t
    };
    XW[lh] = {
        destroy: function() {
            this[QB] && (this[QB] = null)
        },
        onmousewheel: function(t, i) {
            if (i[tF] !== !1 && t[Eg]) {
                if (eq[PC](t),
                i[WR]) {
                    var n = this.delayAction;
                    n || (n = this.delayAction = new Yr(function() {
                        i[iD](!1)
                    }
                    )),
                    i[iD](!0),
                    n[iF](100)
                }
                i[nF](t, t[Eg], !1)
            }
        }
    };
    var ZW = function(t) {
        this[E_] = t
    };
    ZW[lh] = {
        onclick: function(t, i) {
            i.zoomByMouseEvent(t, !Ti(t))
        }
    };
    var KW = function(t) {
        this.graph = t
    };
    KW[lh] = {
        onclick: function(t, i) {
            i[nF](t, Ti(t))
        }
    },
    E(Hr, oH),
    Hr[E$] = eF,
    Hr[sF] = rF,
    Hr.ELEMENT_MOVE_END = hF,
    Hr[HC] = aF,
    Hr[IR] = oF,
    Hr[fF] = uF,
    Hr[X$] = cF,
    Hr[_F] = dF,
    Hr[lF] = vF,
    Hr.RESIZING = bF,
    Hr[gF] = yF,
    Hr[OB] = mF,
    Hr[xF] = pF,
    Hr.PAN_START = EF,
    Hr[S$] = wF,
    Hr[iO] = TF,
    Hr[o$] = MF,
    Hr[kF] = Bd,
    Hr[OF] = SF,
    Hr[fB] = IF,
    Hr[rB] = AF,
    Hr[PF] = jF,
    qr[lh] = {
        _9l: function(t) {
            if (this[LF])
                switch (t[Vd]) {
                case yH[zv]:
                    this[LF]._onElementRemoved(t[nf]);
                    break;
                case yH[Yv]:
                    this[LF]._onElementClear(t[nf])
                }
        },
        destroy: function() {
            delete this._k0,
            delete this._4a,
            this[LF] && (this[LF]._hz(),
            delete this[LF])
        },
        _k0: null,
        _4a: null,
        defaultMode: null,
        _gw: function(t, i, n) {
            this._4a[t] = new pr(i,n),
            t == this[Kd] && this[LF]._m7Interaction(i)
        },
        addCustomInteraction: function(t) {
            this[LF][CF](t)
        },
        removeCustomInteraction: function(t) {
            this._interactionSupport[RF](t)
        },
        _m9: function(t) {
            var i = this._4a[t];
            return i ? i : JW[t]
        }
    },
    K(qr[lh], {
        defaultCursor: {
            get: function() {
                return this[DF] ? this[DF][VR] : void 0
            }
        },
        currentMode: {
            get: function() {
                return this[ZR]
            },
            set: function(t) {
                this[ZR] != t && (this[ZR],
                this[LF] || (this._interactionSupport = new YH(this._k0)),
                this._mjurrentMode = t,
                this.currentInteractionMode = this._m9(this[ZR]),
                this._k0[XR] = this.defaultCursor,
                this._interactionSupport[NF](this.currentInteractionMode ? this[DF][$F](this._k0) : []))
            }
        }
    });
    var JW = {};
    YY[BF] = function(t, i, n) {
        var e = new pr(i,n);
        JW[t] = e
    }
    ,
    sq.INTERACTION_MODE_VIEW = FF,
    sq[GF] = md,
    sq[zF] = Dd,
    sq.INTERACTION_MODE_ZOOMIN = YF,
    sq[HF] = qF,
    sq.INTERACTION_MODE_CREATE_SIMPLE_EDGE = UF,
    sq[WF] = VF,
    sq[XF] = ZF,
    sq[KF] = JF,
    YY[BF](sq[QF], [WW, HW, XW, zW, FW, VW, UW]),
    YY[BF](sq.INTERACTION_MODE_CREATE_SIMPLE_EDGE, [GW, Ir, WW, HW, XW, zW, VW]),
    YY[BF](sq[WF], [GW, Dr, WW, Tr, HW, XW, zW, VW]),
    YY[BF](sq.INTERACTION_MODE_CREATE_SHAPE, [GW, Or, WW, HW, XW, zW, VW]),
    YY[BF](sq[KF], [Sr, WW, HW, XW, zW, VW]),
    YY[BF](sq[GF], [GW, $r, Dr, WW, YW, HW, XW, zW, FW, VW, UW]),
    YY[BF](sq[zF], [GW, $r, Dr, WW, YW, qW, HW, XW, zW, FW, VW]),
    YY[BF](sq.INTERACTION_MODE_ZOOMIN, [XW, zW, ZW], HH),
    YY[BF](sq[HF], [XW, zW, KW], qH),
    eq[tG] = HW,
    eq.SelectionInteraction = WW,
    eq[iG] = YW,
    eq[nG] = XW,
    eq[eG] = FW,
    eq.ExportInteraction = zW,
    eq.TooltipInteraction = VW,
    eq[sG] = qW,
    eq.RectangleSelectionInteractionByRightButton = UW,
    eq[rG] = Dr;
    var QW = function(t) {
        this.graph = t
    };
    eq[hG] = QW,
    QW.prototype = {
        getNodeBounds: function(t) {
            return this[E_][aG](t)
        },
        isLayoutable: function(t) {
            return this[E_].isVisible(t) && t[oG] !== !1
        },
        getLayoutResult: function() {},
        updateLocations: function(t, i, n, e, s) {
            if (i === !0) {
                if (this[fG] || (this.animate = new LV),
                n && (this[fG][ZD] = n),
                e && (this.animate[uG] = e),
                this.animate[cG] = t,
                s) {
                    var r = s
                      , h = this;
                    s = function() {
                        r.call(h, t)
                    }
                }
                return void this[fG].start(s)
            }
            for (var a in t) {
                var o = t[a]
                  , f = o[_G];
                f.setLocation(o.x, o.y)
            }
            s && s.call(this, t)
        },
        _f7: function(t) {
            var i, n, e, s = null;
            t && (i = t[dG],
            s = t[Hc],
            n = t[ZD],
            e = t[uG]);
            var r = this[lG](t);
            return r ? (this[vG](r, i, n, e, s),
            r) : !1
        },
        doLayout: function(t, i) {
            return this[E_] && i !== !0 ? void this.graph[nR](function() {
                this._f7(t)
            }, this) : this._f7(t)
        }
    };
    var tV = 110
      , iV = 120
      , nV = 130
      , eV = 210
      , sV = 220
      , rV = 230
      , hV = 111
      , aV = 112
      , oV = 121
      , fV = 122
      , uV = 211
      , cV = 212
      , _V = 221
      , dV = 222;
    sq[bG] = tV,
    sq.DIRECTION_LEFT = iV,
    sq[gG] = nV,
    sq[yG] = eV,
    sq[mG] = sV,
    sq[xG] = rV,
    sq.DIRECTION_RIGHT_TOP = hV,
    sq.DIRECTION_RIGHT_BOTTOM = aV,
    sq[pG] = oV,
    sq[EG] = fV,
    sq[wG] = uV,
    sq[TG] = cV,
    sq[MG] = _V,
    sq[kG] = dV;
    var lV = OG
      , vV = SG
      , bV = IG
      , gV = AG;
    sq[PG] = lV,
    sq[jG] = bV,
    sq.LAYOUT_TYPE_EVEN_VERTICAL = gV,
    sq[LG] = vV,
    eq[CG] = Ur;
    var yV = function(t) {
        this[E_] = t
    };
    yV[lh] = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: eV,
        layoutType: lV,
        defaultSize: {
            width: 50,
            height: 60
        },
        getNodeSize: function(t) {
            if (this[E_]._8m[$c]) {
                var i = this.graph[w_](t);
                if (i)
                    return i._fd
            }
            return t[Ax] && t[Ax][Do] ? {
                width: t[Ax][Do][ca],
                height: t[Ax].bounds.height
            } : this[RG]
        },
        _mlw: function(t, i) {
            var n = t.id;
            if (!(n in this._9u) && this.isLayoutable(t)) {
                var e, s = this[DG](t);
                e = s instanceof KY ? [-s.x, -s.y] : [s.width / 2, s[eo] / 2];
                var r = (t[NG],
                i ? this._9u[i.id] : this._ml2);
                this._9u[n] = new mV(this[$G](t),this[BG](t),this.getLayoutType(t),t.parentChildrenDirection,r,t,s.width,s[eo],e)
            }
        },
        getHGap: function(t) {
            return t && D(t[FG]) ? t[FG] : this.hGap
        },
        getVGap: function(t) {
            return t && D(t[GG]) ? t.vGap : this[GG]
        },
        getLayoutType: function(t) {
            return t && t[zG] ? t[zG] : this[zG]
        },
        _9u: null,
        _ml2: null,
        _jx: function() {
            this._9u = null,
            this._ml2 = null
        },
        getLayoutResult: function(t) {
            var i, n, e, s, r = this[E_];
            t instanceof Object && (i = t.x,
            n = t.y,
            r = t[YG] || this[E_],
            e = t.bounds,
            s = t[HG]),
            this._9u = {},
            this[qG] = new mV,
            this[qG]._m7(this.hGap, this[GG], this[NG], this[zG]);
            var h = {}
              , a = DV(r, this[UG], this, !1, s);
            return a && (this._ml2._f7(i || 0, n || 0, h),
            e && e.set(this[qG].x, this[qG].y, this[qG][ca], this[qG][eo])),
            this._jx(),
            h
        },
        doLayout: function(t, i) {
            if (D(t)) {
                var n = t
                  , e = 0;
                D(i) && (e = i),
                t = {
                    x: n,
                    y: e
                },
                i = !0
            }
            return T(this, yV, WG, [t, i])
        }
    },
    E(yV, QW);
    var mV = function(t, i, n, e, s, r, h, a, o) {
        this._li = t || 0,
        this._lj = i || 0,
        this[zG] = n,
        this[NG] = e,
        this[VG] = s,
        s && s._g3(this),
        this[_G] = r,
        this._e3 = h,
        this[XG] = a,
        this[ZG] = o
    };
    mV[lh] = {
        _m7: function(t, i, n, e) {
            this._li = t,
            this._lj = i,
            this[NG] = n,
            this[zG] = e
        },
        _82: function() {
            this._f1 = []
        },
        _li: 0,
        _lj: 0,
        _f1: null,
        _e3: 0,
        _mlq: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _g3: function(t) {
            this._f1 || (this._f1 = []),
            this._f1[uh](t)
        },
        _d5: function(t, i, n, e) {
            var s = new KY;
            return n(this._f1, function(n) {
                n._3r(t, i),
                s.add(n),
                e ? t += n[ca] + this._li : i += n[eo] + this._lj
            }, this),
            s
        },
        _7z: function(t, i, n, e, s) {
            var r, h = e ? this._li : this._lj, a = e ? this._lj : this._li, o = e ? "width" : eo, f = e ? "height" : ca, u = e ? "_e3" : XG, c = e ? "_mlq" : KG, _ = e ? "hostDX" : JG, d = e ? "hostDY" : QG, v = new KY, b = 0, g = 0, y = [], m = 0, x = 0;
            n(this._f1, function(n) {
                var s = x >= g;
                n[tz] = s ? e ? iV : sV : e ? tV : eV,
                n._3r(t, i),
                s ? (y[uh](n),
                b = Math.max(b, n[o]),
                g += n[f] + a) : (r || (r = []),
                r[uh](n),
                m = Math.max(m, n[o]),
                x += n[f] + a)
            }, this),
            g -= a,
            x -= a;
            var p = Math.max(g, x)
              , E = h
              , w = 0;
            this[_G] && (s && (E += this[u] + h,
            p > this[c] ? this[d] = (p - this[c]) / 2 : w = (this[c] - p) / 2),
            this[_] = b + E / 2 - this[u] / 2);
            var T = 0
              , M = w;
            return l(y, function(t) {
                e ? t[ex](b - t[o], M) : t[ex](M, b - t[o]),
                M += a + t[f],
                v.add(t)
            }, this),
            r ? (M = w,
            T = b + E,
            l(r, function(t) {
                e ? t[ex](T, M) : t[ex](M, T),
                M += a + t[f],
                v.add(t)
            }, this),
            v) : v
        },
        offset: function(t, i) {
            this.x += t,
            this.y += i,
            this.nodeX += t,
            this[iz] += i,
            this._74(t, i)
        },
        _ml7: function(t, i) {
            return 2 * this.cx - t - i - t
        },
        _ml6: function(t, i) {
            return 2 * this.cy - t - i - t
        },
        _lp: function(t) {
            if (this._f1 && 0 != this._f1[nh]) {
                if (t)
                    return this[_G] && (this[nz] += this[ez](this[nz], this._e3)),
                    void l(this._f1, function(t) {
                        t[ex](this._ml7(t.x, t[ca]), 0)
                    }, this);
                this[_G] && (this[iz] += this._ml6(this.nodeY, this[XG])),
                l(this._f1, function(t) {
                    t[ex](0, this[sz](t.y, t.height))
                }, this)
            }
        },
        _74: function(t, i) {
            this._f1 && l(this._f1, function(n) {
                n[ex](t, i)
            }, this)
        },
        _3r: function(t, i) {
            return this.x = t || 0,
            this.y = i || 0,
            this._f1 && 0 != this._f1[nh] ? void this._1a(this.x, this.y, this[zG]) : void (this[_G] && (this.width = this._e3,
            this.height = this._mlq,
            this[nz] = this.x,
            this[iz] = this.y))
        },
        _78: function(t) {
            if (this.node) {
                var i = this[ZG]
                  , n = i[0]
                  , e = i[1];
                t[this.node.id] = {
                    node: this.node,
                    x: this.nodeX + n,
                    y: this[iz] + e,
                    left: this[nz],
                    top: this[iz],
                    width: this._e3,
                    height: this[XG]
                }
            }
            this._f1 && l(this._f1, function(i) {
                i._78(t)
            }, this)
        },
        _f7: function(t, i, n) {
            this._3r(t, i),
            this._78(n)
        },
        _1a: function(t, i, e) {
            var s, r = t, h = i;
            !this.parentChildrenDirection && this[VG] && (this[NG] = this[tz] || this.parentBounds[NG]);
            var a = this[NG]
              , o = Ur(a);
            if (this[_G]) {
                s = a == nV || a == rV;
                var f = Wr(a);
                s || (o ? t += this._e3 + this._li : i += this._mlq + this._lj)
            }
            var u, c = this.node && this[_G].layoutReverse ? b : l;
            if (e == vV)
                u = this._7z(t, i, c, !o, s);
            else {
                var _;
                _ = e == lV ? !o : e == bV,
                u = this._d5(t, i, c, _, s)
            }
            var d = 0
              , v = 0;
            if (u && !u.isEmpty() && (d = u.width,
            v = u[eo],
            this.add(u)),
            this.node) {
                if (this[nz] = r,
                this[iz] = h,
                this.hostDX !== n || this[JG] !== n)
                    this[nz] += this[QG] || 0,
                    this[iz] += this[JG] || 0;
                else {
                    var g;
                    g = a == eV || a == sV || a == iV || a == tV ? 1 : a == cV || a == dV || a == fV || a == aV ? 0 : 2,
                    o ? 1 == g ? this.nodeY += v / 2 - this._mlq / 2 : 2 == g && (this[iz] += v - this[XG]) : 1 == g ? this.nodeX += d / 2 - this._e3 / 2 : 2 == g && (this[nz] += d - this._e3)
                }
                this[Wl](this.nodeX, this[iz], this._e3, this._mlq),
                f && this._lp(o)
            }
        },
        node: null,
        uiBounds: null
    },
    E(mV, KY),
    Xr[lh] = {
        layoutDatas: null,
        isMovable: function(t) {
            return !this[el][t.id]
        },
        _68: !1,
        _3l: function() {
            this._68 = !0,
            this[E_]._1b[Zd](this._9s, this),
            this.graph._11.addListener(this._25, this)
        },
        _1g: function() {
            this._68 = !1,
            this[E_]._1b[Cv](this._9s, this),
            this.graph._11[Cv](this._25, this)
        },
        invalidateFlag: !0,
        invalidateLayoutDatas: function() {
            this[Xk] = !0
        },
        resetLayoutDatas: function() {
            return this.invalidateFlag = !1,
            this[rz] = Vr[sh](this)
        },
        _25: function(t) {
            Hr.ELEMENT_MOVE_START == t[Vd] ? (this[el] = {},
            t[Xd][Du](function(t) {
                this[el][t.id] = t
            }, this)) : Hr[M$] == t[Vd] && (this[el] = {})
        },
        _9s: function() {
            this[hz]()
        },
        isRunning: function() {
            return this.timer && this[az]._de()
        },
        getLayoutResult: function() {
            this[oz](),
            this[fz]();
            for (var t = this[uz](this[rz].nodeCount || 0, this[rz].edgeCount || 0), i = 0; t > i && this.step(!1) !== !1; i++)
                ;
            var n = this[rz][cz];
            return this.onstop(),
            n
        },
        _ld: function() {
            return !1
        },
        step: function(t) {
            if (t === !1)
                return this._ld(this[_z]);
            (this.invalidateFlag || !this[rz]) && this[fz]();
            var i = this._ld(t)
              , n = this.layoutDatas[cz];
            for (var e in n) {
                var s = n[e]
                  , r = s.node;
                this[xR](r) ? r[mR](s.x, s.y) : (s.x = r.x,
                s.y = r.y,
                s.vx = 0,
                s.vy = 0)
            }
            return i
        },
        onstop: function() {
            delete this[rz]
        },
        start: function(t) {
            if (this[dz]())
                return !1;
            this._68 || this._3l(),
            this._jrr || (this[lz] = function(t) {
                return this.step(t)
            }
            [kh](this)),
            this.invalidateLayoutDatas(),
            this.timer = new tq(this[lz]);
            var i = this;
            return this.timer._ki(function() {
                i[vz](),
                t && t()
            }),
            !0
        },
        stop: function() {
            this[az] && (this.timer._l6(),
            this[vz]())
        },
        getMaxIterations: function(t) {
            return Math.min(1e3, 3 * t + 10)
        },
        minEnergyFunction: function(t, i) {
            return 10 + Math.pow(t + i, 1.4)
        },
        resetGraph: function() {
            this._68 || this._3l(),
            this[fz]()
        },
        destroy: function() {
            this.stop(),
            this._1g()
        }
    },
    E(Xr, QW);
    var xV = function(t, i, n, e) {
        this[E_] = t,
        D(i) && (this[_v] = i),
        D(n) && (this.gap = n),
        D(e) && (this[bz] = e)
    };
    eq.BalloonLayouter = xV;
    var pV = gz
      , EV = yz
      , wV = mz
      , TV = xz;
    sq[pz] = pV,
    sq.ANGLE_SPACING_REGULAR = EV,
    sq[Ez] = wV,
    sq[wz] = TV,
    xV[lh] = {
        angleSpacing: pV,
        radiusMode: TV,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _9u: null,
        _ml2: null,
        _jx: function() {
            this._9u = null,
            this[qG] = null
        },
        getLayoutResult: function(t) {
            var i, n = 0, e = 0, s = this[E_];
            t instanceof Object && (n = t.cx || 0,
            e = t.cy || 0,
            s = t[YG] || this.graph,
            i = t[Do]),
            this._9u = {},
            this[qG] = new OV(this);
            var r = {}
              , h = NV(s, this[UG], this);
            return h && (this[qG]._f1 && 1 == this[qG]._f1[nh] && (this._ml2 = this[qG]._f1[0]),
            this[qG]._ej(!0),
            this._ml2._5l(n, e, this.startAngle, r, i)),
            this._jx(),
            r
        },
        _mlw: function(t, i) {
            if (this[Jd](t)) {
                var n = i ? this._9u[i.id] : this._ml2;
                this._9u[t.id] = new OV(this,t,n)
            }
        },
        defaultSize: 40,
        getRadius: function() {
            return this[_v]
        },
        getNodeSize: function(t) {
            if (this[E_]._8m[$c]) {
                var i = this[E_][w_](t);
                if (i)
                    return (i._fd[ca] + i._fd[eo]) / 2
            }
            return this[RG]
        },
        getGap: function() {
            return this.gap
        },
        _2h: function(t, i, n) {
            return this.getNodeSize(t, i, n) + this[Tz](t, i, n)
        }
    };
    var MV = function(t) {
        var i, n = this._f1.length, e = 0, s = 0;
        if (l(this._f1, function(t) {
            var n = t._ej();
            1 > n && (n = 1),
            s += n,
            n > e && (e = n,
            i = t)
        }, this),
        n > 1) {
            var r = 0
              , h = {}
              , a = s / n / 3;
            s = 0,
            l(this._f1, function(t) {
                var i = t._lv;
                a > i && (i = a),
                h[t.id] = i,
                s += i
            }, this);
            var o = nW / s;
            l(this._f1, function(i, n) {
                var e = h[i.id]
                  , s = e * o;
                0 === n && (r = t ? -s / 2 : -s),
                i._ke = r + s / 2,
                i._kg = s,
                r += s
            }, this)
        }
        return [e, i._kg]
    }
      , kV = function(t) {
        var i = this._7m
          , n = 2 * Math.PI / i
          , e = 0
          , s = t ? 0 : i > 1 ? -n / 2 : 0;
        return l(this._f1, function(t) {
            t._ke = s % nW,
            s += n,
            t._kg = n;
            var i = t._ej();
            i > e && (e = i)
        }, this),
        [e, n]
    }
      , OV = function(t, i, n) {
        this[Mz] = t,
        i && (this._lw = i,
        this.id = i.id),
        n && (n._g3(this),
        n._lt = !1,
        this._kb = n._kb + 1)
    }
      , nW = 2 * Math.PI;
    OV[lh] = {
        _kg: 0,
        _ke: 0,
        _je: 0,
        _ee: 0,
        _mjz: 0,
        _kb: 0,
        _lt: !0,
        _lv: 0,
        _gc: 0,
        _f1: null,
        _lw: null,
        _g3: function(t) {
            this._f1 || (this._f1 = []),
            this._f1[uh](t),
            t[Qu] = this
        },
        _g1: function(t) {
            if (this._ke = (this._ke + t) % nW,
            this._f1) {
                var i = this._f1.length;
                if (1 == i)
                    return void this._f1[0]._g1(this._ke);
                t = this._ke + Math.PI,
                l(this._f1, function(i) {
                    i._g1(t)
                }, this)
            }
        },
        _7m: 0,
        _7d: function(t) {
            return this._lw && (this._gc = this[Mz]._2h(this._lw, this._kb, this._lt) / 2),
            this._f1 ? (this._gc,
            this._7m = this._f1[nh],
            this._7m <= 2 || this.layouter[kz] == EV ? kV.call(this, t) : MV[sh](this, t)) : null
        },
        _ej: function(t) {
            var i = this._7d(t);
            if (!i)
                return this._lv = this._gc;
            var n = i[0]
              , e = i[1]
              , s = this[Mz].getRadius(this._lw, this._kb);
            if (s < this._gc && (s = this._gc),
            this._ee = s,
            this._gc + n > s && (s = this._gc + n),
            n && this._7m > 1 && e < Math.PI) {
                var r = n / Math.sin(e / 2);
                r > s && (s = r)
            }
            return this._je = s,
            this._lv = s + n,
            this._lw && this._f1 && this[Mz].radiusMode == TV && l(this._f1, function(t) {
                var i = t._lv;
                1 == t._7m && (i /= 2);
                var n = this._gc + i
                  , e = t._kg;
                if (e && e < Math.PI) {
                    var s = Math.sin(e / 2)
                      , r = i / s;
                    r > i && (i = r)
                }
                n > i && (i = n),
                t[Oz] = i
            }, this),
            (!this._lw || t) && this._g1(0),
            this._lv
        },
        _5l: function(t, i, n, e, s) {
            if (this._lw && (e[this._lw.id] = {
                x: t,
                y: i,
                node: this._lw
            },
            s && s.addRect(t - this._gc / 2, i - this._gc / 2, this._gc, this._gc)),
            this._f1) {
                if (!this._lw && 1 == this._f1[nh])
                    return void this._f1[0]._5l(t, i, n, e, s);
                n = n || 0;
                var r = this._je
                  , h = this._ee;
                l(this._f1, function(a) {
                    var o = r;
                    a._mjz && (o = Math.max(h, a[Oz]));
                    var f = a._ke + n
                      , u = t + o * Math.cos(f)
                      , c = i + o * Math.sin(f);
                    a._5l(u, c, n, e, s)
                }, this)
            }
        }
    },
    E(xV, QW);
    var SV = function() {
        w(this, SV, arguments)
    };
    E(SV, Zr);
    var IV = function(t, i) {
        this.node1 = t,
        this[Sz] = i,
        t == i ? (this[hc] = !0,
        this._k7 = t._k9) : this._k7 = new HY,
        this._83 = [],
        this._gl = YY.EDGE_BUNDLE_EXPANDED
    };
    YY[Iz] = !0,
    IV.prototype = {
        node1: null,
        node2: null,
        _k7: null,
        _gl: YY[Iz],
        _83: null,
        _fl: null,
        agentEdge: null,
        _mmr: function(t, i, n) {
            this._k7[Du](function(e) {
                return n && e[dk] != n && e[ec] != n ? void 0 : t.call(i, e)
            })
        },
        _5d: 0,
        _55: 0,
        _he: function(t, i) {
            return this._k7.add(t) === !1 ? !1 : (i == this[Az] ? this._5d++ : this._55++,
            this[$c] ? void this._$z(t) : void (this._mm6 = !0))
        },
        _mlv: function(t, i) {
            return this._k7[Lh](t) === !1 ? !1 : (i == this.node1 ? this._5d-- : this._55--,
            this._$z(t),
            void this._k7.forEach(function(t) {
                t[Pz] = !0,
                t[jM] = !0
            }, this))
        },
        _$z: function(t) {
            this[jz] = !0,
            this._63 = !0,
            t._edgeBundleInvalidateFlag = !0,
            t[jM] = !0
        },
        _mlp: function() {
            this._63 || (this._63 = !0,
            this._k7[Du](function(t) {
                t[Pz] = !0
            }))
        },
        isEmpty: function() {
            return this._k7[vu]()
        },
        isPositiveOrder: function(t) {
            return this[Az] == t[dk] || this[Az] == t[ec]
        },
        canBind: function(t) {
            return t && this._63 && this[Co](t),
            this._k7[nh] > 1 && this._83.length > 1
        },
        _hc: function(t) {
            return this._83[ch](t)
        },
        getYOffset: function(t) {
            return this._fl[t.id]
        },
        _4m: function(t) {
            if (!this.canBind())
                return void (this._fl = {});
            var i = {}
              , n = this._83[nh];
            if (!(2 > n)) {
                var e = 0
                  , s = this._83[0];
                i[s.id] = 0;
                for (var r = 1; n > r; r++) {
                    s = this._83[r];
                    var h = t[n_](s, bW[pA]) || PW[bW[pA]];
                    e += h,
                    i[s.id] = e
                }
                if (!this[hc] && e)
                    for (var a = e / 2, r = 0; n > r; r++)
                        s = this._83[r],
                        i[s.id] -= a;
                this._fl = i
            }
        },
        _mmk: function(t) {
            return this._gl == t ? !1 : (this._gl = t,
            this._mlp(),
            !0)
        },
        reverseExpanded: function() {
            return this[Lz](!this._gl)
        },
        _14: function() {
            this[jz] = !1,
            this._83[nh] = 0;
            var t;
            this._k7[Du](function(i) {
                if (i[xM]()) {
                    if (!this[_C](i))
                        return t || (t = []),
                        void t[uh](i);
                    this._83.push(i)
                }
            }, this),
            t && (this._83 = t.concat(this._83))
        },
        _eh: function(t) {
            return t == this[HR] || !this[Cz]() || this._gl
        },
        validate: function(t) {
            this._63 = !1,
            this._k7.forEach(function(t) {
                t._edgeBundleInvalidateFlag = !1
            }),
            this[jz] && this._14();
            var i = this._gl
              , n = this[Cz]()
              , e = !n || i;
            l(this._83, function(t) {
                t._$o = !0,
                t[Rz] = e,
                e && (t.__4t = !0)
            }, this),
            e ? this._9f(null, t) : (this._9f(this._83[0], t),
            this.agentEdge[Rz] = !0,
            this[HR][jM] = !0),
            e && this._4m(t)
        },
        _9f: function(t, i) {
            if (t != this.agentEdge) {
                var n = this[HR];
                return this.agentEdge = t,
                i && i._3y(new fH(this,HR,t,n)),
                !0
            }
        }
    },
    K(IV[lh], {
        bindableEdges: {
            get: function() {
                return this._83
            }
        },
        edges: {
            get: function() {
                return this._k7._jg
            }
        },
        length: {
            get: function() {
                return this._k7 ? this._k7[nh] : 1
            }
        },
        expanded: {
            get: function() {
                return this._gl
            },
            set: function(t) {
                return this._gl == t ? !1 : (this._gl = t,
                void this[kT]())
            }
        }
    });
    var AV = function() {
        function t(t, i) {
            this.node = t,
            this[rL] = i
        }
        function i() {
            this[Dz] = [],
            this[Nz] = 0
        }
        var n = -1e6
          , e = .8;
        i.prototype = {
            isEmpty: function() {
                return 0 === this[Nz]
            },
            push: function(i, n) {
                var e = this[Dz][this[Nz]];
                e ? (e[_G] = i,
                e[rL] = n) : this[Dz][this.popIdx] = new t(i,n),
                ++this[Nz]
            },
            pop: function() {
                return this[Nz] > 0 ? this[Dz][--this[Nz]] : void 0
            },
            reset: function() {
                this[Nz] = 0
            }
        };
        var s = []
          , r = new i
          , h = function() {
            this[rL] = null,
            this[$z] = [],
            this.mass = 0,
            this.massX = 0,
            this.massY = 0,
            this[$a] = 0,
            this.top = 0,
            this.bottom = 0,
            this[oa] = 0,
            this[Bz] = !1
        }
          , a = []
          , o = 0
          , f = function() {
            var t;
            return a[o] ? (t = a[o],
            t.quads[0] = null,
            t[$z][1] = null,
            t[$z][2] = null,
            t[$z][3] = null,
            t.body = null,
            t.mass = t[Fz] = t[Gz] = 0,
            t[$a] = t[oa] = t.top = t[aa] = 0,
            t[Bz] = !1) : (t = new h,
            a[o] = t),
            ++o,
            t
        }
          , u = f()
          , c = function(t, i) {
            var n = Math.abs(t.x - i.x)
              , e = Math.abs(t.y - i.y);
            return 1e-8 > n && 1e-8 > e
        }
          , _ = function(t) {
            for (r.reset(),
            r[uh](u, t); !r[vu](); ) {
                var i = r.pop()
                  , n = i[_G]
                  , e = i[rL];
                if (n[Bz]) {
                    var s = e.x
                      , h = e.y;
                    n[zz] = n[zz] + e.mass,
                    n[Fz] = n.massX + e[zz] * s,
                    n.massY = n.massY + e.mass * h;
                    var a = 0
                      , o = n[$a]
                      , _ = (n.right + o) / 2
                      , d = n.top
                      , l = (n[aa] + d) / 2;
                    if (s > _) {
                        a += 1;
                        var v = o;
                        o = _,
                        _ += _ - v
                    }
                    if (h > l) {
                        a += 2;
                        var b = d;
                        d = l,
                        l += l - b
                    }
                    var g = n.quads[a];
                    g || (g = f(),
                    g[$a] = o,
                    g.top = d,
                    g.right = _,
                    g[aa] = l,
                    n[$z][a] = g),
                    r[uh](g, e)
                } else if (n.body) {
                    var y = n[rL];
                    if (n[rL] = null,
                    n[Bz] = !0,
                    c(y, e)) {
                        if (n.right - n[$a] < 1e-8)
                            return;
                        do {
                            var m = Math[Hh]()
                              , x = (n[oa] - n[$a]) * m
                              , p = (n.bottom - n.top) * m;
                            y.x = n[$a] + x,
                            y.y = n.top + p
                        } while (c(y, e))
                    }
                    r[uh](n, y),
                    r.push(n, e)
                } else
                    n.body = e
            }
        }
          , d = function(t) {
            var i, r, h, a, o = s, f = 1, c = 0, _ = 1;
            for (o[0] = u; f; ) {
                var d = o[c]
                  , l = d[rL];
                f -= 1,
                c += 1,
                l && l !== t ? (r = l.x - t.x,
                h = l.y - t.y,
                a = Math.sqrt(r * r + h * h),
                0 === a && (r = (Math[Hh]() - .5) / 50,
                h = (Math.random() - .5) / 50,
                a = Math[Ao](r * r + h * h)),
                i = n * l[zz] * t.mass / (a * a),
                -1e3 > i && (i = -1e3),
                i /= a,
                t.fx = t.fx + i * r,
                t.fy = t.fy + i * h) : (r = d[Fz] / d.mass - t.x,
                h = d[Gz] / d.mass - t.y,
                a = Math[Ao](r * r + h * h),
                0 === a && (r = (Math[Hh]() - .5) / 50,
                h = (Math.random() - .5) / 50,
                a = Math[Ao](r * r + h * h)),
                (d[oa] - d.left) / a < e ? (i = n * d[zz] * t[zz] / (a * a),
                -1e3 > i && (i = -1e3),
                i /= a,
                t.fx = t.fx + i * r,
                t.fy = t.fy + i * h) : (d[$z][0] && (o[_] = d.quads[0],
                f += 1,
                _ += 1),
                d.quads[1] && (o[_] = d.quads[1],
                f += 1,
                _ += 1),
                d.quads[2] && (o[_] = d[$z][2],
                f += 1,
                _ += 1),
                d[$z][3] && (o[_] = d[$z][3],
                f += 1,
                _ += 1)))
            }
        }
          , l = function(t, i) {
            n = i;
            var e, s = Number[Vl], r = Number.MAX_VALUE, h = Number[Yz], a = Number.MIN_VALUE, c = t, d = c[nh];
            for (e = d; e--; ) {
                var l = c[e].x
                  , v = c[e].y;
                s > l && (s = l),
                l > h && (h = l),
                r > v && (r = v),
                v > a && (a = v)
            }
            var b = h - s
              , g = a - r;
            for (b > g ? a = r + b : h = s + g,
            o = 0,
            u = f(),
            u[$a] = s,
            u.right = h,
            u.top = r,
            u[aa] = a,
            e = d; e--; )
                _(c[e], u)
        };
        return {
            init: l,
            update: d
        }
    }
      , PV = function(t) {
        t.fx -= t.x * this[Hz],
        t.fy -= t.y * this[Hz]
    }
      , jV = function(t) {
        if (0 != t.k) {
            var i = this._d7
              , n = t.from
              , e = t.to
              , s = e.x - n.x
              , r = e.y - n.y
              , h = s * s + r * r
              , a = Math[Ao](h) || .1
              , o = (a - i) * t.k * this[qz];
            o /= a;
            var f = o * s
              , u = o * r;
            e.fx -= f,
            e.fy -= u,
            n.fx += f,
            n.fy += u
        }
    };
    Zr[lh] = {
        appendNodeInfo: function(t, i) {
            i[zz] = t[Uz] || 1,
            i.fx = 0,
            i.fy = 0,
            i.vx = 0,
            i.vy = 0
        },
        appendEdgeInfo: function(t, i) {
            i.k = t.layoutElasticity || 1
        },
        setMass: function(t, i) {
            t.layoutMass = i,
            this[rz] && this[rz].nodes && (t = this.layoutDatas.nodes[t.id],
            t && (t.mass = i))
        },
        setElasticity: function(t, i) {
            t.layoutElasticity = i,
            this.layoutDatas && this.layoutDatas[gk] && (t = this[rz].edges[t.id],
            t && (t.k = i))
        },
        _d7: 50,
        _h2: .5,
        timeStep: .05,
        repulsion: 50,
        attractive: .1,
        elastic: 3,
        _lz: 1e3,
        _jw: function(t) {
            return this._lz + .3 * (t - this._lz)
        },
        _ld: function(t, i) {
            var n = (Date.now(),
            this[rz][cz]);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math.random() - .5,
                s.y += Math[Hh]() - .5),
                PV[sh](this, s)
            }
            var r = this[rz][Wz];
            if (r)
                for (var e in r) {
                    var h = r[e]
                      , a = h[eh]
                      , o = 0
                      , f = 0;
                    a[Du](function(t) {
                        o += t.x,
                        f += t.y
                    }),
                    o /= a.length,
                    f /= a[nh];
                    var u = 10 * this.attractive;
                    a[Du](function(t) {
                        t.fx -= (t.x - o) * u,
                        t.fy -= (t.y - f) * u
                    })
                }
            var c = this[Vz];
            c || (c = this[Vz] = AV()),
            c.init(this[rz][Xz], -this[Zz] * this[Zz] * this.repulsion);
            for (var e in n)
                c.update(n[e]);
            if (this[qz]) {
                var _ = this[rz].edges;
                for (var e in _)
                    jV[sh](this, _[e])
            }
            return this._ly(t)
        },
        _ly: function(t) {
            var i = this[rz].minEnergy
              , n = (this[rz][Kz],
            this.layoutDatas[cz])
              , t = this[_z]
              , e = 0
              , s = this._h2;
            for (var r in n) {
                var h = n[r]
                  , a = h.fx / h.mass
                  , o = h.fy / h[zz]
                  , f = h.vx += a * t
                  , u = h.vy += o * t;
                h.x += f * t,
                h.y += u * t,
                i > e && (e += 2 * (f * f + u * u)),
                h.fx = 0,
                h.fy = 0,
                h.vx *= s,
                h.vy *= s
            }
            return this.layoutDatas.currentEnergy = e,
            e >= i
        }
    },
    E(Zr, Xr),
    eq.SpringLayouter = Zr;
    var LV = function(t) {
        this[cG] = t
    };
    LV[lh] = {
        oldLocations: null,
        _eo: null,
        duration: 700,
        animationType: QH.easeOutStrong,
        _76: function(t) {
            if (this._eo = t,
            this[Jz] = {},
            t)
                for (var i in t) {
                    var n = t[i]
                      , e = n[_G];
                    this[Jz][i] = {
                        x: e.x,
                        y: e.y
                    }
                }
        },
        setLocation: function(t, i, n) {
            t[mR](i, n)
        },
        forEach: function(t, i) {
            for (var n in this[cG]) {
                var e = this.oldLocations[n]
                  , s = this.locations[n];
                t[sh](i, e, s)
            }
        },
        _im: function(t) {
            this[Du](function(i, n) {
                var e = n.node
                  , s = i.x + (n.x - i.x) * t
                  , r = i.y + (n.y - i.y) * t;
                this[mR](e, s, r)
            }, this)
        },
        stop: function() {
            this[Qz] && this[Qz]._l6()
        },
        start: function(t) {
            this[Qz] ? (this[Qz]._l6(),
            this._mmnimate._i5 = this[ZD],
            this[Qz]._dhType = this.animationType,
            this[Qz][tY] = this[tY]) : this[Qz] = new iq(this._im,this,this[ZD],this[uG]),
            this[Qz]._ki(t)
        }
    },
    K(LV.prototype, {
        locations: {
            get: function() {
                return this._eo
            },
            set: function(t) {
                this._eo != t && this._76(t)
            }
        }
    });
    var CV = function(t) {
        function i(i) {
            var n = !1;
            return i.forEachInEdge(function(i) {
                return t[P_](i) && !i.isLooped() ? (n = !0,
                !1) : void 0
            }),
            n
        }
        function n(i) {
            var n = !1;
            return i[al](function(i) {
                return t.contains(i) && !i[hc]() ? (n = !0,
                !1) : void 0
            }),
            n
        }
        var e, s = new HY;
        return t.forEach(function(t) {
            t instanceof uW && (i(t) ? !e && n(t) && (e = t) : s.add(t))
        }),
        s[vu]() && e && s.add(e),
        s
    }
      , RV = function(t, i, n, e, s, r) {
        if (i instanceof mH)
            return t(i, n, e, s, r),
            i;
        if (i instanceof jW) {
            var h = new HY;
            i._k0Model.forEach(function(t) {
                return i[vd](t) ? t._hq() && t._gl && t.hasChildren() ? void (t[Sk] && (t.$location[Xk] = !1)) : void h.add(t) : void 0
            }),
            i = h
        } else if (Array.isArray(i))
            i = new HY(i);
        else if (!(i instanceof HY))
            throw new Error(iY);
        return i = CV(i, e),
        i[Du](function(i) {
            t(i, n, e, s, r)
        }),
        i
    }
      , DV = function(t, i, n, e, s) {
        return RV($V, t, i, n, e, s)
    }
      , NV = function(t, i, n, e, s) {
        return RV(BV, t, i, n, e, s)
    };
    ls[lh].forEachByTopoDepthFirstSearch = function(t, i, n, e) {
        DV(this, t, i, n, e)
    }
    ,
    ls[lh].forEachByTopoBreadthFirstSearch = function(t, i, n, e) {
        t instanceof Object && 1 == arguments[nh] && (i = t[Lv]),
        NV(this, t, i, n, e)
    }
    ,
    eq[nY] = DV,
    eq.forEachByTopoBreadthFirstSearch = NV;
    var $V = function(t, i, n, e, s) {
        function r(t, i, n, e, s, h, a, o) {
            t[hl] = h,
            e || i.call(n, t, o, a),
            Kr(t, function(o) {
                r(o, i, n, e, s, h, a + 1, t)
            }, o, s, h, n),
            e && i.call(n, t, o, a)
        }
        r(t, i, n, e, s, {}, 0)
    }
      , BV = function(t, i, n, e, s) {
        function r(t, i, n, e, s, h, a) {
            var o, f = t[nh];
            t.forEach(function(t, r) {
                var u = t.v;
                u[hl] = h,
                e || i[sh](n, u, t._from, a, r, f),
                Kr(u, function(t) {
                    o || (o = []),
                    t[hl] = h,
                    o[uh]({
                        v: t,
                        _from: u
                    })
                }, u, s, h, n)
            }),
            o && r(o, i, n, e, s, h, a + 1),
            e && t[Du](function(t, e) {
                i.call(n, t.v, t[eY], a, e, f)
            })
        }
        r([{
            v: t
        }], i, n, e, s, {}, 0)
    };
    eq[sY] = X,
    eq.log = ti,
    eq.error = ni,
    eq.trace = ii,
    eq.isIE = IY,
    eq[rY] = SY,
    eq.isWebkit = jY,
    eq[hY] = LY,
    eq[aY] = CY,
    eq[oY] = DY,
    eq.isChrome = RY,
    eq[fY] = NY,
    eq.DefaultStyles = PW,
    eq.Defaults = YY,
    eq.Styles = bW,
    eq[uY] = sq,
    eq[cY] = Hq,
    eq[_Y] = jW,
    eq[dY] = lW,
    eq.ElementUI = OW,
    eq[lY] = ws,
    eq.EdgeUI = Es,
    eq[vY] = IW,
    eq[bY] = SW,
    eq[gY] = _W,
    eq[yY] = Gq,
    eq[GL] = Tq,
    eq.InteractionEvent = Hr,
    eq.Element = oW,
    eq[pd] = uW,
    eq[CR] = fW,
    eq.GraphModel = ls,
    eq[mY] = IV,
    eq[xY] = yV,
    eq[Ef] = pY;
    var FV = EY;
    return eq.version = wY,
    eq[xw] = TY,
    eq[pw] = "Copyright Â© 2018 Qunee.com",
    eq.css = bi,
    eq.IDrawable = LW,
    ti = function() {}
    ,
    eq[mw] = MY,
    eq
}(window, document);

export default {
  Q: Q
}

