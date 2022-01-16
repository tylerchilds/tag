var m = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((s)=>s ? parseInt(s, 36) : 1
);
for(let s7 = 1; s7 < m.length; s7++)m[s7] += m[s7 - 1];
function $(s) {
    for(let e = 1; e < m.length; e += 2)if (m[e] > s) return m[e - 1] <= s;
    return !1;
}
function y28(s) {
    return s >= 127462 && s <= 127487;
}
var k12 = 8205;
function A6(s, e, t = !0, n = !0) {
    return (t ? M : D1)(s, e, n);
}
function M(s, e, t) {
    if (e == s.length) return e;
    e && S(s.charCodeAt(e)) && j(s.charCodeAt(e - 1)) && e--;
    let n = b(s, e);
    for(e += q(n); e < s.length;){
        let i = b(s, e);
        if (n == k12 || i == k12 || t && $(i)) e += q(i), n = i;
        else if (y28(i)) {
            let l = 0, h = e - 2;
            for(; h >= 0 && y28(b(s, h));)l++, h -= 2;
            if (l % 2 == 0) break;
            e += 2;
        } else break;
    }
    return e;
}
function D1(s, e, t) {
    for(; e > 0;){
        let n = M(s, e - 2, t);
        if (n < e) return n;
        e--;
    }
    return 0;
}
function S(s) {
    return s >= 56320 && s < 57344;
}
function j(s) {
    return s >= 55296 && s < 56320;
}
function b(s, e) {
    let t = s.charCodeAt(e);
    if (!j(t) || e + 1 == s.length) return t;
    let n = s.charCodeAt(e + 1);
    return S(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function z(s) {
    return s <= 65535 ? String.fromCharCode(s) : (s -= 65536, String.fromCharCode((s >> 10) + 55296, (s & 1023) + 56320));
}
function q(s) {
    return s < 65536 ? 1 : 2;
}
function J(s, e, t = s.length) {
    let n = 0;
    for(let i = 0; i < t;)s.charCodeAt(i) == 9 ? (n += e - n % e, i++) : (n++, i = A6(s, i));
    return n;
}
function O16(s, e, t, n) {
    for(let i = 0, l = 0;;){
        if (l >= e) return i;
        if (i == s.length) break;
        l += s.charCodeAt(i) == 9 ? t - l % t : 1, i = A6(s, i);
    }
    return n === !0 ? -1 : s.length;
}
var d = class {
    constructor(){
    }
    lineAt(e) {
        if (e < 0 || e > this.length) throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
        return this.lineInner(e, !1, 1, 0);
    }
    line(e) {
        if (e < 1 || e > this.lines) throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
        return this.lineInner(e, !0, 1, 0);
    }
    replace(e, t, n) {
        let i = [];
        return this.decompose(0, e, i, 2), n.length && n.decompose(0, n.length, i, 1 | 2), this.decompose(t, this.length, i, 1), g.from(i, this.length - (t - e) + n.length);
    }
    append(e) {
        return this.replace(this.length, this.length, e);
    }
    slice(e, t = this.length) {
        let n = [];
        return this.decompose(e, t, n, 0), g.from(n, t - e);
    }
    eq(e) {
        if (e == this) return !0;
        if (e.length != this.length || e.lines != this.lines) return !1;
        let t = this.scanIdentical(e, 1), n = this.length - this.scanIdentical(e, -1), i = new x3(this), l = new x3(e);
        for(let h = t, u = t;;){
            if (i.next(h), l.next(h), h = 0, i.lineBreak != l.lineBreak || i.done != l.done || i.value != l.value) return !1;
            if (u += i.value.length, i.done || u >= n) return !0;
        }
    }
    iter(e = 1) {
        return new x3(this, e);
    }
    iterRange(e, t = this.length) {
        return new C(this, e, t);
    }
    iterLines(e, t) {
        let n;
        if (e == null) n = this.iter();
        else {
            t == null && (t = this.lines + 1);
            let i = this.line(e).from;
            n = this.iterRange(i, Math.max(i, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
        }
        return new B(n);
    }
    toString() {
        return this.sliceString(0);
    }
    toJSON() {
        let e = [];
        return this.flatten(e), e;
    }
    static of(e) {
        if (e.length == 0) throw new RangeError("A document must have at least one line");
        return e.length == 1 && !e[0] ? d.empty : e.length <= 32 ? new a3(e) : g.from(a3.split(e, []));
    }
}, a3 = class extends d {
    constructor(e, t = P3(e)){
        super();
        this.text = e, this.length = t;
    }
    get lines() {
        return this.text.length;
    }
    get children() {
        return null;
    }
    lineInner(e, t, n, i) {
        for(let l = 0;; l++){
            let h = this.text[l], u = i + h.length;
            if ((t ? n : u) >= e) return new R(i, u, n, h);
            i = u + 1, n++;
        }
    }
    decompose(e, t, n, i) {
        let l = e <= 0 && t >= this.length ? this : new a3(E(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
        if (i & 1) {
            let h = n.pop(), u = w(l.text, h.text.slice(), 0, l.length);
            if (u.length <= 32) n.push(new a3(u, h.length + l.length));
            else {
                let r = u.length >> 1;
                n.push(new a3(u.slice(0, r)), new a3(u.slice(r)));
            }
        } else n.push(l);
    }
    replace(e, t, n) {
        if (!(n instanceof a3)) return super.replace(e, t, n);
        let i = w(this.text, w(n.text, E(this.text, 0, e)), t), l = this.length + n.length - (t - e);
        return i.length <= 32 ? new a3(i, l) : g.from(a3.split(i, []), l);
    }
    sliceString(e, t = this.length, n = `
`) {
        let i = "";
        for(let l = 0, h = 0; l <= t && h < this.text.length; h++){
            let u = this.text[h], r = l + u.length;
            l > e && h && (i += n), e < r && t > l && (i += u.slice(Math.max(0, e - l), t - l)), l = r + 1;
        }
        return i;
    }
    flatten(e) {
        for (let t of this.text)e.push(t);
    }
    scanIdentical() {
        return 0;
    }
    static split(e, t) {
        let n = [], i = -1;
        for (let l of e)n.push(l), i += l.length + 1, n.length == 32 && (t.push(new a3(n, i)), n = [], i = -1);
        return i > -1 && t.push(new a3(n, i)), t;
    }
}, g = class extends d {
    constructor(e, t){
        super();
        this.children = e, this.length = t, this.lines = 0;
        for (let n of e)this.lines += n.lines;
    }
    lineInner(e, t, n, i) {
        for(let l = 0;; l++){
            let h = this.children[l], u = i + h.length, r = n + h.lines - 1;
            if ((t ? r : u) >= e) return h.lineInner(e, t, n, i);
            i = u + 1, n = r + 1;
        }
    }
    decompose(e, t, n, i) {
        for(let l = 0, h = 0; h <= t && l < this.children.length; l++){
            let u = this.children[l], r = h + u.length;
            if (e <= r && t >= h) {
                let o = i & ((h <= e ? 1 : 0) | (r >= t ? 2 : 0));
                h >= e && r <= t && !o ? n.push(u) : u.decompose(e - h, t - h, n, o);
            }
            h = r + 1;
        }
    }
    replace(e, t, n) {
        if (n.lines < this.lines) for(let i = 0, l = 0; i < this.children.length; i++){
            let h = this.children[i], u = l + h.length;
            if (e >= l && t <= u) {
                let r = h.replace(e - l, t - l, n), o = this.lines - h.lines + r.lines;
                if (r.lines < o >> 5 - 1 && r.lines > o >> 5 + 1) {
                    let c = this.children.slice();
                    return c[i] = r, new g(c, this.length - (t - e) + n.length);
                }
                return super.replace(l, u, r);
            }
            l = u + 1;
        }
        return super.replace(e, t, n);
    }
    sliceString(e, t = this.length, n = `
`) {
        let i = "";
        for(let l = 0, h = 0; l < this.children.length && h <= t; l++){
            let u = this.children[l], r = h + u.length;
            h > e && l && (i += n), e < r && t > h && (i += u.sliceString(e - h, t - h, n)), h = r + 1;
        }
        return i;
    }
    flatten(e) {
        for (let t of this.children)t.flatten(e);
    }
    scanIdentical(e, t) {
        if (!(e instanceof g)) return 0;
        let n = 0, [i, l, h, u] = t > 0 ? [
            0,
            0,
            this.children.length,
            e.children.length
        ] : [
            this.children.length - 1,
            e.children.length - 1,
            -1,
            -1
        ];
        for(;; i += t, l += t){
            if (i == h || l == u) return n;
            let r = this.children[i], o = e.children[l];
            if (r != o) return n + r.scanIdentical(o, t);
            n += r.length + 1;
        }
    }
    static from(e, t = e.reduce((n, i)=>n + i.length + 1
    , -1)) {
        let n = 0;
        for (let f of e)n += f.lines;
        if (n < 32) {
            let f = [];
            for (let p of e)p.flatten(f);
            return new a3(f, t);
        }
        let i = Math.max(32, n >> 5), l = i << 1, h = i >> 1, u = [], r = 0, o = -1, c = [];
        function I(f) {
            let p;
            if (f.lines > l && f instanceof g) for (let F of f.children)I(F);
            else f.lines > h && (r > h || !r) ? (v(), u.push(f)) : f instanceof a3 && r && (p = c[c.length - 1]) instanceof a3 && f.lines + p.lines <= 32 ? (r += f.lines, o += f.length + 1, c[c.length - 1] = new a3(p.text.concat(f.text), p.length + 1 + f.length)) : (r + f.lines > i && v(), r += f.lines, o += f.length + 1, c.push(f));
        }
        function v() {
            r != 0 && (u.push(c.length == 1 ? c[0] : g.from(c, o)), o = -1, r = c.length = 0);
        }
        for (let f1 of e)I(f1);
        return v(), u.length == 1 ? u[0] : new g(u, t);
    }
};
d.empty = new a3([
    ""
], 0);
function P3(s) {
    let e = -1;
    for (let t of s)e += t.length + 1;
    return e;
}
function w(s, e, t = 0, n = 1000000000) {
    for(let i = 0, l = 0, h = !0; l < s.length && i <= n; l++){
        let u = s[l], r = i + u.length;
        r >= t && (r > n && (u = u.slice(0, n - i)), i < t && (u = u.slice(t - i)), h ? (e[e.length - 1] += u, h = !1) : e.push(u)), i = r + 1;
    }
    return e;
}
function E(s, e, t) {
    return w(s, [
        ""
    ], e, t);
}
var x3 = class {
    constructor(e, t = 1){
        this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [
            e
        ], this.offsets = [
            t > 0 ? 1 : (e instanceof a3 ? e.text.length : e.children.length) << 1
        ];
    }
    nextInner(e, t) {
        for(this.done = this.lineBreak = !1;;){
            let n = this.nodes.length - 1, i = this.nodes[n], l = this.offsets[n], h = l >> 1, u = i instanceof a3 ? i.text.length : i.children.length;
            if (h == (t > 0 ? u : 0)) {
                if (n == 0) return this.done = !0, this.value = "", this;
                t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
            } else if ((l & 1) == (t > 0 ? 0 : 1)) {
                if (this.offsets[n] += t, e == 0) return this.lineBreak = !0, this.value = `
`, this;
                e--;
            } else if (i instanceof a3) {
                let r = i.text[h + (t < 0 ? -1 : 0)];
                if (this.offsets[n] += t, r.length > Math.max(0, e)) return this.value = e == 0 ? r : t > 0 ? r.slice(e) : r.slice(0, r.length - e), this;
                e -= r.length;
            } else {
                let r = i.children[h + (t < 0 ? -1 : 0)];
                e > r.length ? (e -= r.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(r), this.offsets.push(t > 0 ? 1 : (r instanceof a3 ? r.text.length : r.children.length) << 1));
            }
        }
    }
    next(e = 0) {
        return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
    }
}, C = class {
    constructor(e, t, n){
        this.value = "", this.done = !1, this.cursor = new x3(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
    }
    nextInner(e, t) {
        if (t < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
        let n = t < 0 ? this.pos - this.from : this.to - this.pos;
        e > n && (e = n), n -= e;
        let { value: i  } = this.cursor.next(e);
        return this.pos += (i.length + e) * t, this.value = i.length <= n ? i : t < 0 ? i.slice(i.length - n) : i.slice(0, n), this.done = !this.value, this;
    }
    next(e = 0) {
        return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
    }
    get lineBreak() {
        return this.cursor.lineBreak && this.value != "";
    }
}, B = class {
    constructor(e){
        this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
    }
    next(e = 0) {
        let { done: t , lineBreak: n , value: i  } = this.inner.next(e);
        return t ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = i, this.afterBreak = !1), this;
    }
    get lineBreak() {
        return !1;
    }
};
typeof Symbol != "undefined" && (d.prototype[Symbol.iterator] = function() {
    return this.iter();
}, x3.prototype[Symbol.iterator] = C.prototype[Symbol.iterator] = B.prototype[Symbol.iterator] = function() {
    return this;
});
var R = class {
    constructor(e, t, n, i){
        this.from = e, this.to = t, this.number = n, this.text = i;
    }
    get length() {
        return this.to - this.from;
    }
};
var U = /\r\n?|\n/, D2 = function(l) {
    return l[l.Simple = 0] = "Simple", l[l.TrackDel = 1] = "TrackDel", l[l.TrackBefore = 2] = "TrackBefore", l[l.TrackAfter = 3] = "TrackAfter", l;
}(D2 || (D2 = {
})), I = class {
    constructor(e){
        this.sections = e;
    }
    get length() {
        let e = 0;
        for(let t = 0; t < this.sections.length; t += 2)e += this.sections[t];
        return e;
    }
    get newLength() {
        let e = 0;
        for(let t = 0; t < this.sections.length; t += 2){
            let n = this.sections[t + 1];
            e += n < 0 ? this.sections[t] : n;
        }
        return e;
    }
    get empty() {
        return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
    }
    iterGaps(e) {
        for(let t = 0, n = 0, i = 0; t < this.sections.length;){
            let s = this.sections[t++], r = this.sections[t++];
            r < 0 ? (e(n, i, s), i += s) : i += r, n += s;
        }
    }
    iterChangedRanges(e, t = !1) {
        G(this, e, t);
    }
    get invertedDesc() {
        let e = [];
        for(let t = 0; t < this.sections.length;){
            let n = this.sections[t++], i = this.sections[t++];
            i < 0 ? e.push(n, i) : e.push(i, n);
        }
        return new I(e);
    }
    composeDesc(e) {
        return this.empty ? e : e.empty ? this : j1(this, e);
    }
    mapDesc(e, t = !1) {
        return e.empty ? this : H(this, e, t);
    }
    mapPos(e, t = -1, n = D2.Simple) {
        let i = 0, s = 0;
        for(let r = 0; r < this.sections.length;){
            let o = this.sections[r++], a = this.sections[r++], f = i + o;
            if (a < 0) {
                if (f > e) return s + (e - i);
                s += o;
            } else {
                if (n != D2.Simple && f >= e && (n == D2.TrackDel && i < e && f > e || n == D2.TrackBefore && i < e || n == D2.TrackAfter && f > e)) return null;
                if (f > e || f == e && t < 0 && !o) return e == i || t < 0 ? s : s + a;
                s += a;
            }
            i = f;
        }
        if (e > i) throw new RangeError(`Position ${e} is out of range for changeset of length ${i}`);
        return s;
    }
    touchesRange(e, t = e) {
        for(let n = 0, i = 0; n < this.sections.length && i <= t;){
            let s = this.sections[n++], r = this.sections[n++], o = i + s;
            if (r >= 0 && i <= t && o >= e) return i < e && o > t ? "cover" : !0;
            i = o;
        }
        return !1;
    }
    toString() {
        let e = "";
        for(let t = 0; t < this.sections.length;){
            let n = this.sections[t++], i = this.sections[t++];
            e += (e ? " " : "") + n + (i >= 0 ? ":" + i : "");
        }
        return e;
    }
    toJSON() {
        return this.sections;
    }
    static fromJSON(e) {
        if (!Array.isArray(e) || e.length % 2 || e.some((t)=>typeof t != "number"
        )) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new I(e);
    }
}, y1 = class extends I {
    constructor(e, t){
        super(e);
        this.inserted = t;
    }
    apply(e) {
        if (this.length != e.length) throw new RangeError("Applying change set to a document with the wrong length");
        return G(this, (t, n, i, s, r)=>e = e.replace(i, i + (n - t), r)
        , !1), e;
    }
    mapDesc(e, t = !1) {
        return H(this, e, t, !0);
    }
    invert(e) {
        let t = this.sections.slice(), n = [];
        for(let i = 0, s = 0; i < t.length; i += 2){
            let r = t[i], o = t[i + 1];
            if (o >= 0) {
                t[i] = o, t[i + 1] = r;
                let a = i >> 1;
                for(; n.length < a;)n.push(d.empty);
                n.push(r ? e.slice(s, s + r) : d.empty);
            }
            s += r;
        }
        return new y1(t, n);
    }
    compose(e) {
        return this.empty ? e : e.empty ? this : j1(this, e, !0);
    }
    map(e, t = !1) {
        return e.empty ? this : H(this, e, t, !0);
    }
    iterChanges(e, t = !1) {
        G(this, e, t);
    }
    get desc() {
        return new I(this.sections);
    }
    filter(e) {
        let t = [], n = [], i = [], s = new V(this);
        e: for(let r = 0, o = 0;;){
            let a = r == e.length ? 1000000000 : e[r++];
            for(; o < a || o == a && s.len == 0;){
                if (s.done) break e;
                let h = Math.min(s.len, a - o);
                S1(i, h, -1);
                let c = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
                S1(t, h, c), c > 0 && J1(n, t, s.text), s.forward(h), o += h;
            }
            let f = e[r++];
            for(; o < f;){
                if (s.done) break e;
                let h = Math.min(s.len, f - o);
                S1(t, h, -1), S1(i, h, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(h), o += h;
            }
        }
        return {
            changes: new y1(t, n),
            filtered: new I(i)
        };
    }
    toJSON() {
        let e = [];
        for(let t = 0; t < this.sections.length; t += 2){
            let n = this.sections[t], i = this.sections[t + 1];
            i < 0 ? e.push(n) : i == 0 ? e.push([
                n
            ]) : e.push([
                n
            ].concat(this.inserted[t >> 1].toJSON()));
        }
        return e;
    }
    static of(e, t, n) {
        let i = [], s = [], r = 0, o = null;
        function a(h = !1) {
            if (!h && !i.length) return;
            r < t && S1(i, t - r, -1);
            let c = new y1(i, s);
            o = o ? o.compose(c.map(o)) : c, i = [], s = [], r = 0;
        }
        function f(h) {
            if (Array.isArray(h)) for (let c of h)f(c);
            else if (h instanceof y1) {
                if (h.length != t) throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
                a(), o = o ? o.compose(h.map(o)) : h;
            } else {
                let { from: c , to: u = c , insert: g  } = h;
                if (c > u || c < 0 || u > t) throw new RangeError(`Invalid change range ${c} to ${u} (in doc of length ${t})`);
                let m = g ? typeof g == "string" ? d.of(g.split(n || U)) : g : d.empty, d1 = m.length;
                if (c == u && d1 == 0) return;
                c < r && a(), c > r && S1(i, c - r, -1), S1(i, u - c, d1), J1(s, i, m), r = u;
            }
        }
        return f(e), a(!o), o;
    }
    static empty(e) {
        return new y1(e ? [
            e,
            -1
        ] : [], []);
    }
    static fromJSON(e) {
        if (!Array.isArray(e)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let t = [], n = [];
        for(let i = 0; i < e.length; i++){
            let s = e[i];
            if (typeof s == "number") t.push(s, -1);
            else {
                if (!Array.isArray(s) || typeof s[0] != "number" || s.some((r, o)=>o && typeof r != "string"
                )) throw new RangeError("Invalid JSON representation of ChangeSet");
                if (s.length == 1) t.push(s[0], 0);
                else {
                    for(; n.length < i;)n.push(d.empty);
                    n[i] = d.of(s.slice(1)), t.push(s[0], n[i].length);
                }
            }
        }
        return new y1(t, n);
    }
};
function S1(l, e, t, n = !1) {
    if (e == 0 && t <= 0) return;
    let i = l.length - 2;
    i >= 0 && t <= 0 && t == l[i + 1] ? l[i] += e : e == 0 && l[i] == 0 ? l[i + 1] += t : n ? (l[i] += e, l[i + 1] += t) : l.push(e, t);
}
function J1(l, e, t) {
    if (t.length == 0) return;
    let n = e.length - 2 >> 1;
    if (n < l.length) l[l.length - 1] = l[l.length - 1].append(t);
    else {
        for(; l.length < n;)l.push(d.empty);
        l.push(t);
    }
}
function G(l, e, t) {
    let n = l.inserted;
    for(let i = 0, s = 0, r = 0; r < l.sections.length;){
        let o = l.sections[r++], a = l.sections[r++];
        if (a < 0) i += o, s += o;
        else {
            let f = i, h = s, c = d.empty;
            for(; f += o, h += a, a && n && (c = c.append(n[r - 2 >> 1])), !(t || r == l.sections.length || l.sections[r + 1] < 0);)o = l.sections[r++], a = l.sections[r++];
            e(i, f, s, h, c), i = f, s = h;
        }
    }
}
function H(l, e, t, n = !1) {
    let i = [], s = n ? [] : null, r = new V(l), o = new V(e);
    for(let a = 0, f = 0;;)if (r.ins == -1) a += r.len, r.next();
    else if (o.ins == -1 && f < a) {
        let h = Math.min(o.len, a - f);
        o.forward(h), S1(i, h, -1), f += h;
    } else if (o.ins >= 0 && (r.done || f < a || f == a && (o.len < r.len || o.len == r.len && !t))) {
        for(S1(i, o.ins, -1); a > f && !r.done && a + r.len < f + o.len;)a += r.len, r.next();
        f += o.len, o.next();
    } else if (r.ins >= 0) {
        let h = 0, c = a + r.len;
        for(;;)if (o.ins >= 0 && f > a && f + o.len < c) h += o.ins, f += o.len, o.next();
        else if (o.ins == -1 && f < c) {
            let u = Math.min(o.len, c - f);
            h += u, o.forward(u), f += u;
        } else break;
        S1(i, h, r.ins), s && J1(s, i, r.text), a = c, r.next();
    } else {
        if (r.done && o.done) return s ? new y1(i, s) : new I(i);
        throw new Error("Mismatched change set lengths");
    }
}
function j1(l, e, t = !1) {
    let n = [], i = t ? [] : null, s = new V(l), r = new V(e);
    for(let o = !1;;){
        if (s.done && r.done) return i ? new y1(n, i) : new I(n);
        if (s.ins == 0) S1(n, s.len, 0, o), s.next();
        else if (r.len == 0 && !r.done) S1(n, 0, r.ins, o), i && J1(i, n, r.text), r.next();
        else {
            if (s.done || r.done) throw new Error("Mismatched change set lengths");
            {
                let a = Math.min(s.len2, r.len), f = n.length;
                if (s.ins == -1) {
                    let h = r.ins == -1 ? -1 : r.off ? 0 : r.ins;
                    S1(n, a, h, o), i && h && J1(i, n, r.text);
                } else r.ins == -1 ? (S1(n, s.off ? 0 : s.len, a, o), i && J1(i, n, s.textBit(a))) : (S1(n, s.off ? 0 : s.len, r.off ? 0 : r.ins, o), i && !r.off && J1(i, n, r.text));
                o = (s.ins > a || r.ins >= 0 && r.len > a) && (o || n.length > f), s.forward2(a), r.forward(a);
            }
        }
    }
}
var V = class {
    constructor(e){
        this.set = e, this.i = 0, this.next();
    }
    next() {
        let { sections: e  } = this.set;
        this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
    }
    get done() {
        return this.ins == -2;
    }
    get len2() {
        return this.ins < 0 ? this.len : this.ins;
    }
    get text() {
        let { inserted: e  } = this.set, t = this.i - 2 >> 1;
        return t >= e.length ? d.empty : e[t];
    }
    textBit(e) {
        let { inserted: t  } = this.set, n = this.i - 2 >> 1;
        return n >= t.length && !e ? d.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
    }
    forward(e) {
        e == this.len ? this.next() : (this.len -= e, this.off += e);
    }
    forward2(e) {
        this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
    }
}, R1 = class {
    constructor(e, t, n){
        this.from = e, this.to = t, this.flags = n;
    }
    get anchor() {
        return this.flags & 16 ? this.to : this.from;
    }
    get head() {
        return this.flags & 16 ? this.from : this.to;
    }
    get empty() {
        return this.from == this.to;
    }
    get assoc() {
        return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0;
    }
    get bidiLevel() {
        let e = this.flags & 3;
        return e == 3 ? null : e;
    }
    get goalColumn() {
        let e = this.flags >> 5;
        return e == 33554431 ? void 0 : e;
    }
    map(e, t = -1) {
        let n = e.mapPos(this.from, t), i = e.mapPos(this.to, t);
        return n == this.from && i == this.to ? this : new R1(n, i, this.flags);
    }
    extend(e, t = e) {
        if (e <= this.anchor && t >= this.anchor) return p48.range(e, t);
        let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
        return p48.range(this.anchor, n);
    }
    eq(e) {
        return this.anchor == e.anchor && this.head == e.head;
    }
    toJSON() {
        return {
            anchor: this.anchor,
            head: this.head
        };
    }
    static fromJSON(e) {
        if (!e || typeof e.anchor != "number" || typeof e.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
        return p48.range(e.anchor, e.head);
    }
}, p48 = class {
    constructor(e, t = 0){
        this.ranges = e, this.mainIndex = t;
    }
    map(e, t = -1) {
        return e.empty ? this : p48.create(this.ranges.map((n)=>n.map(e, t)
        ), this.mainIndex);
    }
    eq(e) {
        if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1;
        for(let t = 0; t < this.ranges.length; t++)if (!this.ranges[t].eq(e.ranges[t])) return !1;
        return !0;
    }
    get main() {
        return this.ranges[this.mainIndex];
    }
    asSingle() {
        return this.ranges.length == 1 ? this : new p48([
            this.main
        ]);
    }
    addRange(e, t = !0) {
        return p48.create([
            e
        ].concat(this.ranges), t ? 0 : this.mainIndex + 1);
    }
    replaceRange(e, t = this.mainIndex) {
        let n = this.ranges.slice();
        return n[t] = e, p48.create(n, this.mainIndex);
    }
    toJSON() {
        return {
            ranges: this.ranges.map((e)=>e.toJSON()
            ),
            main: this.mainIndex
        };
    }
    static fromJSON(e) {
        if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new p48(e.ranges.map((t)=>R1.fromJSON(t)
        ), e.main);
    }
    static single(e, t = e) {
        return new p48([
            p48.range(e, t)
        ], 0);
    }
    static create(e, t = 0) {
        if (e.length == 0) throw new RangeError("A selection needs at least one range");
        for(let n = 0, i = 0; i < e.length; i++){
            let s = e[i];
            if (s.empty ? s.from <= n : s.from < n) return ue(e.slice(), t);
            n = s.to;
        }
        return new p48(e, t);
    }
    static cursor(e, t = 0, n, i) {
        return new R1(e, e, (t == 0 ? 0 : t < 0 ? 4 : 8) | (n == null ? 3 : Math.min(2, n)) | (i ?? 33554431) << 5);
    }
    static range(e, t, n) {
        let i = (n ?? 33554431) << 5;
        return t < e ? new R1(t, e, 16 | i) : new R1(e, t, i);
    }
};
function ue(l, e = 0) {
    let t = l[e];
    l.sort((n, i)=>n.from - i.from
    ), e = l.indexOf(t);
    for(let n = 1; n < l.length; n++){
        let i = l[n], s = l[n - 1];
        if (i.empty ? i.from <= s.to : i.from < s.to) {
            let r = s.from, o = Math.max(i.to, s.to);
            n <= e && e--, l.splice(--n, 2, i.anchor > i.head ? p48.range(o, r) : p48.range(r, o));
        }
    }
    return new p48(l, e);
}
function _(l, e) {
    for (let t of l.ranges)if (t.to > e) throw new RangeError("Selection points outside of document");
}
var K = 0, O1 = class {
    constructor(e, t, n, i, s){
        this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = i, this.extensions = s, this.id = K++, this.default = e([]);
    }
    static define(e = {
    }) {
        return new O1(e.combine || ((t)=>t
        ), e.compareInput || ((t, n)=>t === n
        ), e.compare || (e.combine ? (t, n)=>t === n
         : de), !!e.static, e.enables);
    }
    of(e) {
        return new W([], this, 0, e);
    }
    compute(e, t) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new W(e, this, 1, t);
    }
    computeN(e, t) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new W(e, this, 2, t);
    }
    from(e, t) {
        return t || (t = (n)=>n
        ), this.compute([
            e
        ], (n)=>t(n.field(e))
        );
    }
};
function de(l, e) {
    return l == e || l.length == e.length && l.every((t, n)=>t === e[n]
    );
}
var W = class {
    constructor(e, t, n, i){
        this.dependencies = e, this.facet = t, this.type = n, this.value = i, this.id = K++;
    }
    dynamicSlot(e) {
        var t;
        let n = this.value, i = this.facet.compareInput, s = e[this.id] >> 1, r = this.type == 2, o = !1, a = !1, f = [];
        for (let h of this.dependencies)h == "doc" ? o = !0 : h == "selection" ? a = !0 : (((t = e[h.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && f.push(e[h.id]);
        return (h, c)=>{
            let u = h.values[s];
            if (u === C1) return h.values[s] = n(h), 1;
            if (c && (o && c.docChanged || a && (c.docChanged || c.selection) || f.some((m)=>(q1(h, m) & 1) > 0
            ))) {
                let m = n(h);
                if (r ? !ge(m, u, i) : !i(m, u)) return h.values[s] = m, 1;
            }
            return 0;
        };
    }
};
function ge(l, e, t) {
    if (l.length != e.length) return !1;
    for(let n = 0; n < l.length; n++)if (!t(l[n], e[n])) return !1;
    return !0;
}
function pe(l, e, t) {
    let n = t.map((o)=>l[o.id]
    ), i = t.map((o)=>o.type
    ), s = n.filter((o)=>!(o & 1)
    ), r = l[e.id] >> 1;
    return (o, a)=>{
        let f = o.values[r], h = f === C1 || !a;
        for (let g of s)q1(o, g) & 1 && (h = !0);
        if (!h) return 0;
        let c = [];
        for(let g1 = 0; g1 < n.length; g1++){
            let m = F(o, n[g1]);
            if (i[g1] == 2) for (let d of m)c.push(d);
            else c.push(m);
        }
        let u = e.combine(c);
        return f !== C1 && e.compare(u, f) ? 0 : (o.values[r] = u, 1);
    };
}
var ee = O1.define({
    static: !0
}), B1 = class {
    constructor(e, t, n, i, s){
        this.id = e, this.createF = t, this.updateF = n, this.compareF = i, this.spec = s, this.provides = void 0;
    }
    static define(e) {
        let t = new B1(K++, e.create, e.update, e.compare || ((n, i)=>n === i
        ), e);
        return e.provide && (t.provides = e.provide(t)), t;
    }
    create(e) {
        let t = e.facet(ee).find((n)=>n.field == this
        );
        return ((t == null ? void 0 : t.create) || this.createF)(e);
    }
    slot(e) {
        let t = e[this.id] >> 1;
        return (n, i)=>{
            let s = n.values[t];
            if (s === C1) return n.values[t] = this.create(n), 1;
            if (i) {
                let r = this.updateF(s, i);
                if (!this.compareF(s, r)) return n.values[t] = r, 1;
            }
            return 0;
        };
    }
    init(e) {
        return [
            this,
            ee.of({
                field: this,
                create: e
            })
        ];
    }
    get extension() {
        return this;
    }
}, b1 = {
    lowest: 4,
    low: 3,
    default: 2,
    high: 1,
    highest: 0
};
function N(l) {
    return (e)=>new Q17(e, l)
    ;
}
var Ie = {
    lowest: N(b1.lowest),
    low: N(b1.low),
    default: N(b1.default),
    high: N(b1.high),
    highest: N(b1.highest),
    fallback: N(b1.lowest),
    extend: N(b1.high),
    override: N(b1.highest)
}, Q17 = class {
    constructor(e, t){
        this.inner = e, this.prec = t;
    }
}, $1 = class {
    of(e) {
        return new M1(this, e);
    }
    reconfigure(e) {
        return $1.reconfigure.of({
            compartment: this,
            extension: e
        });
    }
    get(e) {
        return e.config.compartments.get(this);
    }
}, M1 = class {
    constructor(e, t){
        this.compartment = e, this.inner = t;
    }
}, L = class {
    constructor(e, t, n, i, s){
        for(this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = i, this.staticValues = s, this.statusTemplate = []; this.statusTemplate.length < n.length;)this.statusTemplate.push(0);
    }
    staticFacet(e) {
        let t = this.address[e.id];
        return t == null ? e.default : this.staticValues[t >> 1];
    }
    static resolve(e, t, n) {
        let i = [], s = Object.create(null), r = new Map;
        for (let u of me(e, t, r))u instanceof B1 ? i.push(u) : (s[u.facet.id] || (s[u.facet.id] = [])).push(u);
        let o = Object.create(null), a = [], f = [], h = [];
        for (let u1 of i)o[u1.id] = f.length << 1, f.push((g)=>u1.slot(g)
        ), h.push([]);
        for(let u2 in s){
            let g = s[u2], m = g[0].facet;
            if (g.every((d)=>d.type == 0
            )) {
                o[m.id] = a.length << 1 | 1;
                let d = m.combine(g.map((E)=>E.value
                )), k = n ? n.config.address[m.id] : null;
                if (k != null) {
                    let E = F(n, k);
                    m.compare(d, E) && (d = E);
                }
                a.push(d);
            } else {
                for (let d of g)d.type == 0 ? (o[d.id] = a.length << 1 | 1, a.push(d.value)) : (o[d.id] = f.length << 1, f.push((k)=>d.dynamicSlot(k)
                ), h.push(d.dependencies.filter((k)=>typeof k != "string"
                ).map((k)=>k.id
                )));
                o[m.id] = f.length << 1, f.push((d)=>pe(d, m, g)
                ), h.push(g.filter((d)=>d.type != 0
                ).map((d)=>d.id
                ));
            }
        }
        let c = f.map((u)=>C1
        );
        if (n) {
            let u = (g, m)=>{
                if (m > 7) return !1;
                let d = o[g];
                if (!(d & 1)) return h[d >> 1].every((E)=>u(E, m + 1)
                );
                let k = n.config.address[g];
                return k != null && F(n, k) == a[d >> 1];
            };
            for(let g in o){
                let m = o[g], d = n.config.address[g];
                d != null && (m & 1) == 0 && u(+g, 0) && (c[m >> 1] = F(n, d));
            }
        }
        return {
            configuration: new L(e, r, f.map((u)=>u(o)
            ), o, a),
            values: c
        };
    }
};
function me(l, e, t) {
    let n = [
        [],
        [],
        [],
        [],
        []
    ], i = new Map;
    function s(r, o) {
        let a = i.get(r);
        if (a != null) {
            if (a >= o) return;
            let f = n[a].indexOf(r);
            f > -1 && n[a].splice(f, 1), r instanceof M1 && t.delete(r.compartment);
        }
        if (i.set(r, o), Array.isArray(r)) for (let f of r)s(f, o);
        else if (r instanceof M1) {
            if (t.has(r.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
            let f = e.get(r.compartment) || r.inner;
            t.set(r.compartment, f), s(f, o);
        } else if (r instanceof Q17) s(r.inner, r.prec);
        else if (r instanceof B1) n[o].push(r), r.provides && s(r.provides, o);
        else if (r instanceof W) n[o].push(r), r.facet.extensions && s(r.facet.extensions, o);
        else {
            let f = r.extension;
            if (!f) throw new Error(`Unrecognized extension value in extension set (${r}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
            s(f, o);
        }
    }
    return s(l, b1.default), n.reduce((r, o)=>r.concat(o)
    );
}
var C1 = {
};
function q1(l, e) {
    if (e & 1) return 2;
    let t = e >> 1, n = l.status[t];
    if (n == 4) throw new Error("Cyclic dependency between fields and/or facets");
    if (n & 2) return n;
    l.status[t] = 4;
    let i = l.config.dynamicSlots[t](l, l.applying);
    return l.status[t] = 2 | i;
}
function F(l, e) {
    return e & 1 ? l.config.staticValues[e >> 1] : l.values[e >> 1];
}
var te = O1.define(), ne = O1.define({
    combine: (l)=>l.some((e)=>e
        )
    ,
    static: !0
}), ie = O1.define({
    combine: (l)=>l.length ? l[0] : void 0
    ,
    static: !0
}), se = O1.define(), re = O1.define(), le = O1.define(), oe = O1.define({
    combine: (l)=>l.length ? l[0] : !1
}), z1 = class {
    constructor(e, t){
        this.type = e, this.value = t;
    }
    static define() {
        return new ae;
    }
}, ae = class {
    of(e) {
        return new z1(this, e);
    }
}, fe = class {
    constructor(e){
        this.map = e;
    }
    of(e) {
        return new v(this, e);
    }
}, v = class {
    constructor(e, t){
        this.type = e, this.value = t;
    }
    map(e) {
        let t = this.type.map(this.value, e);
        return t === void 0 ? void 0 : t == this.value ? this : new v(this.type, t);
    }
    is(e) {
        return this.type == e;
    }
    static define(e = {
    }) {
        return new fe(e.map || ((t)=>t
        ));
    }
    static mapEffects(e, t) {
        if (!e.length) return e;
        let n = [];
        for (let i of e){
            let s = i.map(t);
            s && n.push(s);
        }
        return n;
    }
};
v.reconfigure = v.define();
v.appendConfig = v.define();
var A1 = class {
    constructor(e, t, n, i, s, r){
        this.startState = e, this.changes = t, this.selection = n, this.effects = i, this.annotations = s, this.scrollIntoView = r, this._doc = null, this._state = null, n && _(n, t.newLength), s.some((o)=>o.type == A1.time
        ) || (this.annotations = s.concat(A1.time.of(Date.now())));
    }
    get newDoc() {
        return this._doc || (this._doc = this.changes.apply(this.startState.doc));
    }
    get newSelection() {
        return this.selection || this.startState.selection.map(this.changes);
    }
    get state() {
        return this._state || this.startState.applyTransaction(this), this._state;
    }
    annotation(e) {
        for (let t of this.annotations)if (t.type == e) return t.value;
    }
    get docChanged() {
        return !this.changes.empty;
    }
    get reconfigured() {
        return this.startState.config != this.state.config;
    }
    isUserEvent(e) {
        let t = this.annotation(A1.userEvent);
        return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
    }
};
A1.time = z1.define();
A1.userEvent = z1.define();
A1.addToHistory = z1.define();
A1.remote = z1.define();
function we(l, e) {
    let t = [];
    for(let n = 0, i = 0;;){
        let s, r;
        if (n < l.length && (i == e.length || e[i] >= l[n])) s = l[n++], r = l[n++];
        else if (i < e.length) s = e[i++], r = e[i++];
        else return t;
        !t.length || t[t.length - 1] < s ? t.push(s, r) : t[t.length - 1] < r && (t[t.length - 1] = r);
    }
}
function he(l, e, t) {
    var n;
    let i, s, r;
    return t ? (i = e.changes, s = y1.empty(e.changes.length), r = l.changes.compose(e.changes)) : (i = e.changes.map(l.changes), s = l.changes.mapDesc(e.changes, !0), r = l.changes.compose(i)), {
        changes: r,
        selection: e.selection ? e.selection.map(s) : (n = l.selection) === null || n === void 0 ? void 0 : n.map(i),
        effects: v.mapEffects(l.effects, i).concat(v.mapEffects(e.effects, s)),
        annotations: l.annotations.length ? l.annotations.concat(e.annotations) : e.annotations,
        scrollIntoView: l.scrollIntoView || e.scrollIntoView
    };
}
function X(l, e, t) {
    let n = e.selection, i = P1(e.annotations);
    return e.userEvent && (i = i.concat(A1.userEvent.of(e.userEvent))), {
        changes: e.changes instanceof y1 ? e.changes : y1.of(e.changes || [], t, l.facet(ie)),
        selection: n && (n instanceof p48 ? n : p48.single(n.anchor, n.head)),
        effects: P1(e.effects),
        annotations: i,
        scrollIntoView: !!e.scrollIntoView
    };
}
function ce(l, e, t) {
    let n = X(l, e.length ? e[0] : {
    }, l.doc.length);
    e.length && e[0].filter === !1 && (t = !1);
    for(let s = 1; s < e.length; s++){
        e[s].filter === !1 && (t = !1);
        let r = !!e[s].sequential;
        n = he(n, X(l, e[s], r ? n.changes.newLength : l.doc.length), r);
    }
    let i = new A1(l, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
    return ve(t ? ye(i) : i);
}
function ye(l) {
    let e = l.startState, t = !0;
    for (let i of e.facet(se)){
        let s = i(l);
        if (s === !1) {
            t = !1;
            break;
        }
        Array.isArray(s) && (t = t === !0 ? s : we(t, s));
    }
    if (t !== !0) {
        let i, s;
        if (t === !1) s = l.changes.invertedDesc, i = y1.empty(e.doc.length);
        else {
            let r = l.changes.filter(t);
            i = r.changes, s = r.filtered.invertedDesc;
        }
        l = new A1(e, i, l.selection && l.selection.map(s), v.mapEffects(l.effects, s), l.annotations, l.scrollIntoView);
    }
    let n = e.facet(re);
    for(let i1 = n.length - 1; i1 >= 0; i1--){
        let s = n[i1](l);
        s instanceof A1 ? l = s : Array.isArray(s) && s.length == 1 && s[0] instanceof A1 ? l = s[0] : l = ce(e, P1(s), !1);
    }
    return l;
}
function ve(l) {
    let e = l.startState, t = e.facet(le), n = l;
    for(let i = t.length - 1; i >= 0; i--){
        let s = t[i](l);
        s && Object.keys(s).length && (n = he(l, X(e, s, l.changes.newLength), !0));
    }
    return n == l ? l : new A1(e, l.changes, l.selection, n.effects, n.annotations, n.scrollIntoView);
}
var Se = [];
function P1(l) {
    return l == null ? Se : Array.isArray(l) ? l : [
        l
    ];
}
var T = function(l) {
    return l[l.Word = 0] = "Word", l[l.Space = 1] = "Space", l[l.Other = 2] = "Other", l;
}(T || (T = {
})), Ae = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, Y;
try {
    Y = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch  {
}
function xe(l) {
    if (Y) return Y.test(l);
    for(let e = 0; e < l.length; e++){
        let t = l[e];
        if (/\w/.test(t) || t > "\x80" && (t.toUpperCase() != t.toLowerCase() || Ae.test(t))) return !0;
    }
    return !1;
}
function Oe(l) {
    return (e)=>{
        if (!/\S/.test(e)) return T.Space;
        if (xe(e)) return T.Word;
        for(let t = 0; t < l.length; t++)if (e.indexOf(l[t]) > -1) return T.Word;
        return T.Other;
    };
}
var w1 = class {
    constructor(e, t, n, i, s = null){
        this.config = e, this.doc = t, this.selection = n, this.values = i, this.applying = null, this.status = e.statusTemplate.slice(), this.applying = s, s && (s._state = this);
        for(let r = 0; r < this.config.dynamicSlots.length; r++)q1(this, r << 1);
        this.applying = null;
    }
    field(e, t = !0) {
        let n = this.config.address[e.id];
        if (n == null) {
            if (t) throw new RangeError("Field is not present in this state");
            return;
        }
        return q1(this, n), F(this, n);
    }
    update(...e) {
        return ce(this, e, !0);
    }
    applyTransaction(e) {
        let t = this.config, { base: n , compartments: i  } = t;
        for (let r of e.effects)r.is($1.reconfigure) ? (t && (i = new Map, t.compartments.forEach((o, a)=>i.set(a, o)
        ), t = null), i.set(r.value.compartment, r.value.extension)) : r.is(v.reconfigure) ? (t = null, n = r.value) : r.is(v.appendConfig) && (t = null, n = P1(n).concat(r.value));
        let s;
        if (t) s = e.startState.values.slice();
        else {
            let r = L.resolve(n, i, this);
            t = r.configuration, s = new w1(t, this.doc, this.selection, r.values, null).values;
        }
        new w1(t, e.newDoc, e.newSelection, s, e);
    }
    replaceSelection(e) {
        return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t)=>({
                changes: {
                    from: t.from,
                    to: t.to,
                    insert: e
                },
                range: p48.cursor(t.from + e.length)
            })
        );
    }
    changeByRange(e) {
        let t = this.selection, n = e(t.ranges[0]), i = this.changes(n.changes), s = [
            n.range
        ], r = P1(n.effects);
        for(let o = 1; o < t.ranges.length; o++){
            let a = e(t.ranges[o]), f = this.changes(a.changes), h = f.map(i);
            for(let u = 0; u < o; u++)s[u] = s[u].map(h);
            let c = i.mapDesc(f, !0);
            s.push(a.range.map(c)), i = i.compose(h), r = v.mapEffects(r, h).concat(v.mapEffects(P1(a.effects), c));
        }
        return {
            changes: i,
            selection: p48.create(s, t.mainIndex),
            effects: r
        };
    }
    changes(e = []) {
        return e instanceof y1 ? e : y1.of(e, this.doc.length, this.facet(w1.lineSeparator));
    }
    toText(e) {
        return d.of(e.split(this.facet(w1.lineSeparator) || U));
    }
    sliceDoc(e = 0, t = this.doc.length) {
        return this.doc.sliceString(e, t, this.lineBreak);
    }
    facet(e) {
        let t = this.config.address[e.id];
        return t == null ? e.default : (q1(this, t), F(this, t));
    }
    toJSON(e) {
        let t = {
            doc: this.sliceDoc(),
            selection: this.selection.toJSON()
        };
        if (e) for(let n in e){
            let i = e[n];
            i instanceof B1 && (t[n] = i.spec.toJSON(this.field(e[n]), this));
        }
        return t;
    }
    static fromJSON(e, t = {
    }, n) {
        if (!e || typeof e.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
        let i = [];
        if (n) for(let s in n){
            let r = n[s], o = e[s];
            i.push(r.init((a)=>r.spec.fromJSON(o, a)
            ));
        }
        return w1.create({
            doc: e.doc,
            selection: p48.fromJSON(e.selection),
            extensions: t.extensions ? i.concat([
                t.extensions
            ]) : i
        });
    }
    static create(e = {
    }) {
        let { configuration: t , values: n  } = L.resolve(e.extensions || [], new Map), i = e.doc instanceof d ? e.doc : d.of((e.doc || "").split(t.staticFacet(w1.lineSeparator) || U)), s = e.selection ? e.selection instanceof p48 ? e.selection : p48.single(e.selection.anchor, e.selection.head) : p48.single(0);
        return _(s, i.length), t.staticFacet(ne) || (s = s.asSingle()), new w1(t, i, s, n);
    }
    get tabSize() {
        return this.facet(w1.tabSize);
    }
    get lineBreak() {
        return this.facet(w1.lineSeparator) || `
`;
    }
    get readOnly() {
        return this.facet(oe);
    }
    phrase(e) {
        for (let t of this.facet(w1.phrases))if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
        return e;
    }
    languageDataAt(e, t, n = -1) {
        let i = [];
        for (let s of this.facet(te))for (let r of s(this, t, n))Object.prototype.hasOwnProperty.call(r, e) && i.push(r[e]);
        return i;
    }
    charCategorizer(e) {
        return Oe(this.languageDataAt("wordChars", e).join(""));
    }
    wordAt(e) {
        let { text: t , from: n , length: i  } = this.doc.lineAt(e), s = this.charCategorizer(e), r = e - n, o = e - n;
        for(; r > 0;){
            let a = A6(t, r, !1);
            if (s(t.slice(a, r)) != T.Word) break;
            r = a;
        }
        for(; o < i;){
            let a = A6(t, o);
            if (s(t.slice(o, a)) != T.Word) break;
            o = a;
        }
        return r == o ? null : p48.range(r + n, o + n);
    }
};
w1.allowMultipleSelections = ne;
w1.tabSize = O1.define({
    combine: (l)=>l.length ? l[0] : 4
});
w1.lineSeparator = ie;
w1.readOnly = oe;
w1.phrases = O1.define();
w1.languageData = te;
w1.changeFilter = se;
w1.transactionFilter = re;
w1.transactionExtender = le;
$1.reconfigure = v.define();
function be4(l, e, t = {
}) {
    let n = {
    };
    for (let i of l)for (let s of Object.keys(i)){
        let r = i[s], o = n[s];
        if (o === void 0) n[s] = r;
        else if (!(o === r || r === void 0)) if (Object.hasOwnProperty.call(t, s)) n[s] = t[s](o, r);
        else throw new Error("Config merge conflict for field " + s);
    }
    for(let i1 in e)n[i1] === void 0 && (n[i1] = e[i1]);
    return n;
}
var S2 = "\u037C", g1 = typeof Symbol == "undefined" ? "__" + S2 : Symbol.for(S2), c = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 100000000) : Symbol("styleSet"), w2 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {
}, x1 = class {
    constructor(e, l){
        this.rules = [];
        let { finish: u  } = l || {
        };
        function n(t) {
            return /^@/.test(t) ? [
                t
            ] : t.split(/,\s*/);
        }
        function s(t, i, h, C) {
            let f = [], r = /^@(\w+)\b/.exec(t[0]), m = r && r[1] == "keyframes";
            if (r && i == null) return h.push(t[0] + ";");
            for(let o in i){
                let a = i[o];
                if (/&/.test(o)) s(o.split(/,\s*/).map((d)=>t.map((y)=>d.replace(/&/, y)
                    )
                ).reduce((d, y)=>d.concat(y)
                ), a, h);
                else if (a && typeof a == "object") {
                    if (!r) throw new RangeError("The value of a property (" + o + ") should be a primitive value.");
                    s(n(o), a, f, m);
                } else a != null && f.push(o.replace(/_.*/, "").replace(/[A-Z]/g, (d)=>"-" + d.toLowerCase()
                ) + ": " + a + ";");
            }
            (f.length || m) && h.push((u && !r && !C ? t.map(u) : t).join(", ") + " {" + f.join(" ") + "}");
        }
        for(let t in e)s(n(t), e[t], this.rules);
    }
    getRules() {
        return this.rules.join(`
`);
    }
    static newName() {
        let e = w2[g1] || 1;
        return w2[g1] = e + 1, S2 + e.toString(36);
    }
    static mount(e, l) {
        (e[c] || new b3(e)).mount(Array.isArray(l) ? l : [
            l
        ]);
    }
}, p1 = null, b3 = class {
    constructor(e){
        if (!e.head && e.adoptedStyleSheets && typeof CSSStyleSheet != "undefined") {
            if (p1) return e.adoptedStyleSheets = [
                p1.sheet
            ].concat(e.adoptedStyleSheets), e[c] = p1;
            this.sheet = new CSSStyleSheet, e.adoptedStyleSheets = [
                this.sheet
            ].concat(e.adoptedStyleSheets), p1 = this;
        } else {
            this.styleTag = (e.ownerDocument || e).createElement("style");
            let l = e.head || e;
            l.insertBefore(this.styleTag, l.firstChild);
        }
        this.modules = [], e[c] = this;
    }
    mount(e) {
        let l = this.sheet, u = 0, n = 0;
        for(let s = 0; s < e.length; s++){
            let t = e[s], i = this.modules.indexOf(t);
            if (i < n && i > -1 && (this.modules.splice(i, 1), n--, i = -1), i == -1) {
                if (this.modules.splice(n++, 0, t), l) for(let h = 0; h < t.rules.length; h++)l.insertRule(t.rules[h], u++);
            } else {
                for(; n < i;)u += this.modules[n++].rules.length;
                u += t.rules.length, n++;
            }
        }
        if (!l) {
            let s = "";
            for(let t = 0; t < this.modules.length; t++)s += this.modules[t].getRules() + `
`;
            this.styleTag.textContent = s;
        }
    }
};
var v1 = class {
    eq(t) {
        return this == t;
    }
    range(t, i = t) {
        return new g3(t, i, this);
    }
};
v1.prototype.startSide = v1.prototype.endSide = 0;
v1.prototype.point = !1;
v1.prototype.mapMode = D2.TrackDel;
var g3 = class {
    constructor(t, i, e){
        this.from = t, this.to = i, this.value = e;
    }
};
function y5(o, t) {
    return o.from - t.from || o.value.startSide - t.value.startSide;
}
var S4 = class {
    constructor(t, i, e, s){
        this.from = t, this.to = i, this.value = e, this.maxPoint = s;
    }
    get length() {
        return this.to[this.to.length - 1];
    }
    findIndex(t, i, e, s = 0) {
        let n = e ? this.to : this.from;
        for(let r = s, h = n.length;;){
            if (r == h) return r;
            let l = r + h >> 1, a = n[l] - t || (e ? this.value[l].endSide : this.value[l].startSide) - i;
            if (l == r) return a >= 0 ? r : h;
            a >= 0 ? h = l : r = l + 1;
        }
    }
    between(t, i, e, s) {
        for(let n = this.findIndex(i, -1000000000, !0), r = this.findIndex(e, 1000000000, !1, n); n < r; n++)if (s(this.from[n] + t, this.to[n] + t, this.value[n]) === !1) return !1;
    }
    map(t, i) {
        let e = [], s = [], n = [], r = -1, h = -1;
        for(let l = 0; l < this.value.length; l++){
            let a = this.value[l], u = this.from[l] + t, c = this.to[l] + t, d, p;
            if (u == c) {
                let M = i.mapPos(u, a.startSide, a.mapMode);
                if (M == null || (d = p = M, a.startSide != a.endSide && (p = i.mapPos(u, a.endSide), p < d))) continue;
            } else if (d = i.mapPos(u, a.startSide), p = i.mapPos(c, a.endSide), d > p || d == p && a.startSide > 0 && a.endSide <= 0) continue;
            (p - d || a.endSide - a.startSide) < 0 || (r < 0 && (r = d), a.point && (h = Math.max(h, p - d)), e.push(a), s.push(d - r), n.push(p - r));
        }
        return {
            mapped: e.length ? new S4(s, n, e, h) : null,
            pos: r
        };
    }
}, f10 = class {
    constructor(t, i, e = f10.empty, s){
        this.chunkPos = t, this.chunk = i, this.nextLayer = e, this.maxPoint = s;
    }
    get length() {
        let t = this.chunk.length - 1;
        return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length);
    }
    get size() {
        if (this.isEmpty) return 0;
        let t = this.nextLayer.size;
        for (let i of this.chunk)t += i.value.length;
        return t;
    }
    chunkEnd(t) {
        return this.chunkPos[t] + this.chunk[t].length;
    }
    update(t) {
        let { add: i = [] , sort: e = !1 , filterFrom: s = 0 , filterTo: n = this.length  } = t, r = t.filter;
        if (i.length == 0 && !r) return this;
        if (e && i.slice().sort(y5), this.isEmpty) return i.length ? f10.of(i) : this;
        let h = new w4(this, null, -1).goto(0), l = 0, a = [], u = new x2;
        for(; h.value || l < i.length;)if (l < i.length && (h.from - i[l].from || h.startSide - i[l].value.startSide) >= 0) {
            let c = i[l++];
            u.addInner(c.from, c.to, c.value) || a.push(c);
        } else h.rangeIndex == 1 && h.chunkIndex < this.chunk.length && (l == i.length || this.chunkEnd(h.chunkIndex) < i[l].from) && (!r || s > this.chunkEnd(h.chunkIndex) || n < this.chunkPos[h.chunkIndex]) && u.addChunk(this.chunkPos[h.chunkIndex], this.chunk[h.chunkIndex]) ? h.nextChunk() : ((!r || s > h.to || n < h.from || r(h.from, h.to, h.value)) && (u.addInner(h.from, h.to, h.value) || a.push(new g3(h.from, h.to, h.value))), h.next());
        return u.finishInner(this.nextLayer.isEmpty && !a.length ? f10.empty : this.nextLayer.update({
            add: a,
            filter: r,
            filterFrom: s,
            filterTo: n
        }));
    }
    map(t) {
        if (t.length == 0 || this.isEmpty) return this;
        let i = [], e = [], s = -1;
        for(let r = 0; r < this.chunk.length; r++){
            let h = this.chunkPos[r], l = this.chunk[r], a = t.touchesRange(h, h + l.length);
            if (a === !1) s = Math.max(s, l.maxPoint), i.push(l), e.push(t.mapPos(h));
            else if (a === !0) {
                let { mapped: u , pos: c  } = l.map(h, t);
                u && (s = Math.max(s, u.maxPoint), i.push(u), e.push(c));
            }
        }
        let n = this.nextLayer.map(t);
        return i.length == 0 ? n : new f10(e, i, n, s);
    }
    between(t, i, e) {
        if (!this.isEmpty) {
            for(let s = 0; s < this.chunk.length; s++){
                let n = this.chunkPos[s], r = this.chunk[s];
                if (i >= n && t <= n + r.length && r.between(n, t - n, i - n, e) === !1) return;
            }
            this.nextLayer.between(t, i, e);
        }
    }
    iter(t = 0) {
        return m1.from([
            this
        ]).goto(t);
    }
    get isEmpty() {
        return this.nextLayer == this;
    }
    static iter(t, i = 0) {
        return m1.from(t).goto(i);
    }
    static compare(t, i, e, s, n = -1) {
        let r = t.filter((c)=>c.maxPoint > 0 || !c.isEmpty && c.maxPoint >= n
        ), h = i.filter((c)=>c.maxPoint > 0 || !c.isEmpty && c.maxPoint >= n
        ), l = A5(r, h, e), a = new k1(r, l, n), u = new k1(h, l, n);
        e.iterGaps((c, d, p)=>L1(a, c, u, d, p, s)
        ), e.empty && e.length == 0 && L1(a, 0, u, 0, 0, s);
    }
    static eq(t, i, e = 0, s) {
        s == null && (s = 1000000000);
        let n = t.filter((u)=>!u.isEmpty && i.indexOf(u) < 0
        ), r = i.filter((u)=>!u.isEmpty && t.indexOf(u) < 0
        );
        if (n.length != r.length) return !1;
        if (!n.length) return !0;
        let h = A5(n, r), l = new k1(n, h, 0).goto(e), a = new k1(r, h, 0).goto(e);
        for(;;){
            if (l.to != a.to || !E1(l.active, a.active) || l.point && (!a.point || !l.point.eq(a.point))) return !1;
            if (l.to > s) return !0;
            l.next(), a.next();
        }
    }
    static spans(t, i, e, s, n = -1) {
        var r;
        let h = new k1(t, null, n, (r = s.filterPoint) === null || r === void 0 ? void 0 : r.bind(s)).goto(i), l = i, a = h.openStart;
        for(;;){
            let u = Math.min(h.to, e);
            if (h.point ? (s.point(l, u, h.point, h.activeForPoint(h.to), a), a = h.openEnd(u) + (h.to > u ? 1 : 0)) : u > l && (s.span(l, u, h.active, a), a = h.openEnd(u)), h.to > e) break;
            l = h.to, h.next();
        }
        return a;
    }
    static of(t, i = !1) {
        let e = new x2;
        for (let s of t instanceof g3 ? [
            t
        ] : i ? b4(t) : t)e.add(s.from, s.to, s.value);
        return e.finish();
    }
};
f10.empty = new f10([], [], null, -1);
function b4(o) {
    if (o.length > 1) for(let t = o[0], i = 1; i < o.length; i++){
        let e = o[i];
        if (y5(t, e) > 0) return o.slice().sort(y5);
        t = e;
    }
    return o;
}
f10.empty.nextLayer = f10.empty;
var x2 = class {
    constructor(){
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1000000000, this.lastTo = -1000000000, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
    }
    finishChunk(t) {
        this.chunks.push(new S4(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
    }
    add(t, i, e) {
        this.addInner(t, i, e) || (this.nextLayer || (this.nextLayer = new x2)).add(t, i, e);
    }
    addInner(t, i, e) {
        let s = t - this.lastTo || e.startSide - this.last.endSide;
        if (s <= 0 && (t - this.lastFrom || e.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = t), this.from.push(t - this.chunkStart), this.to.push(i - this.chunkStart), this.last = e, this.lastFrom = t, this.lastTo = i, this.value.push(e), e.point && (this.maxPoint = Math.max(this.maxPoint, i - t)), !0);
    }
    addChunk(t, i) {
        if ((t - this.lastTo || i.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, i.maxPoint), this.chunks.push(i), this.chunkPos.push(t);
        let e = i.value.length - 1;
        return this.last = i.value[e], this.lastFrom = i.from[e] + t, this.lastTo = i.to[e] + t, !0;
    }
    finish() {
        return this.finishInner(f10.empty);
    }
    finishInner(t) {
        if (this.from.length && this.finishChunk(!1), this.chunks.length == 0) return t;
        let i = new f10(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
        return this.from = null, i;
    }
};
function A5(o, t, i) {
    let e = new Map;
    for (let n of o)for(let r = 0; r < n.chunk.length; r++)n.chunk[r].maxPoint <= 0 && e.set(n.chunk[r], n.chunkPos[r]);
    let s = new Set;
    for (let n1 of t)for(let r1 = 0; r1 < n1.chunk.length; r1++){
        let h = e.get(n1.chunk[r1]);
        h != null && (i ? i.mapPos(h) : h) == n1.chunkPos[r1] && !(i == null ? void 0 : i.touchesRange(h, h + n1.chunk[r1].length)) && s.add(n1.chunk[r1]);
    }
    return s;
}
var w4 = class {
    constructor(t, i, e, s = 0){
        this.layer = t, this.skip = i, this.minPoint = e, this.rank = s;
    }
    get startSide() {
        return this.value ? this.value.startSide : 0;
    }
    get endSide() {
        return this.value ? this.value.endSide : 0;
    }
    goto(t, i = -1000000000) {
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t, i, !1), this;
    }
    gotoInner(t, i, e) {
        for(; this.chunkIndex < this.layer.chunk.length;){
            let s = this.layer.chunk[this.chunkIndex];
            if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < t || s.maxPoint < this.minPoint)) break;
            this.chunkIndex++, e = !1;
        }
        if (this.chunkIndex < this.layer.chunk.length) {
            let s = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], i, !0);
            (!e || this.rangeIndex < s) && this.setRangeIndex(s);
        }
        this.next();
    }
    forward(t, i) {
        (this.to - t || this.endSide - i) < 0 && this.gotoInner(t, i, !0);
    }
    next() {
        for(;;)if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1000000000, this.value = null;
            break;
        } else {
            let t = this.layer.chunkPos[this.chunkIndex], i = this.layer.chunk[this.chunkIndex], e = t + i.from[this.rangeIndex];
            if (this.from = e, this.to = t + i.to[this.rangeIndex], this.value = i.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
        }
    }
    setRangeIndex(t) {
        if (t == this.layer.chunk[this.chunkIndex].value.length) {
            if (this.chunkIndex++, this.skip) for(; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;
            this.rangeIndex = 0;
        } else this.rangeIndex = t;
    }
    nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next();
    }
    compare(t) {
        return this.from - t.from || this.startSide - t.startSide || this.to - t.to || this.endSide - t.endSide;
    }
}, m1 = class {
    constructor(t){
        this.heap = t;
    }
    static from(t, i = null, e = -1) {
        let s = [];
        for(let n = 0; n < t.length; n++)for(let r = t[n]; !r.isEmpty; r = r.nextLayer)r.maxPoint >= e && s.push(new w4(r, i, e, n));
        return s.length == 1 ? s[0] : new m1(s);
    }
    get startSide() {
        return this.value ? this.value.startSide : 0;
    }
    goto(t, i = -1000000000) {
        for (let e of this.heap)e.goto(t, i);
        for(let e1 = this.heap.length >> 1; e1 >= 0; e1--)T1(this.heap, e1);
        return this.next(), this;
    }
    forward(t, i) {
        for (let e of this.heap)e.forward(t, i);
        for(let e1 = this.heap.length >> 1; e1 >= 0; e1--)T1(this.heap, e1);
        (this.to - t || this.value.endSide - i) < 0 && this.next();
    }
    next() {
        if (this.heap.length == 0) this.from = this.to = 1000000000, this.value = null, this.rank = -1;
        else {
            let t = this.heap[0];
            this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), T1(this.heap, 0);
        }
    }
};
function T1(o, t) {
    for(let i = o[t];;){
        let e = (t << 1) + 1;
        if (e >= o.length) break;
        let s = o[e];
        if (e + 1 < o.length && s.compare(o[e + 1]) >= 0 && (s = o[e + 1], e++), i.compare(s) < 0) break;
        o[e] = i, o[t] = s, t = e;
    }
}
var k1 = class {
    constructor(t, i, e, s = ()=>!0
    ){
        this.minPoint = e, this.filterPoint = s, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1000000000, this.endSide = 0, this.openStart = -1, this.cursor = m1.from(t, i, e);
    }
    goto(t, i = -1000000000) {
        return this.cursor.goto(t, i), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = i, this.openStart = -1, this.next(), this;
    }
    forward(t, i) {
        for(; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - i) < 0;)this.removeActive(this.minActive);
        this.cursor.forward(t, i);
    }
    removeActive(t) {
        P2(this.active, t), P2(this.activeTo, t), P2(this.activeRank, t), this.minActive = F1(this.active, this.activeTo);
    }
    addActive(t) {
        let i = 0, { value: e , to: s , rank: n  } = this.cursor;
        for(; i < this.activeRank.length && this.activeRank[i] <= n;)i++;
        I1(this.active, i, e), I1(this.activeTo, i, s), I1(this.activeRank, i, n), t && I1(t, i, this.cursor.from), this.minActive = F1(this.active, this.activeTo);
    }
    next() {
        let t = this.to, i = this.point;
        this.point = null;
        let e = this.openStart < 0 ? [] : null, s = 0;
        for(;;){
            let n = this.minActive;
            if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
                if (this.activeTo[n] > t) {
                    this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
                    break;
                }
                this.removeActive(n), e && P2(e, n);
            } else if (this.cursor.value) if (this.cursor.from > t) {
                this.to = this.cursor.from, this.endSide = this.cursor.startSide;
                break;
            } else {
                let r = this.cursor.value;
                if (!r.point) this.addActive(e), this.cursor.next();
                else if (i && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
                else if (!this.filterPoint(this.cursor.from, this.cursor.to, this.cursor.value, this.cursor.rank)) this.cursor.next();
                else {
                    this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.from < t && (s = 1), this.cursor.next(), this.to > t && this.forward(this.to, this.endSide);
                    break;
                }
            }
            else {
                this.to = this.endSide = 1000000000;
                break;
            }
        }
        if (e) {
            let n = 0;
            for(; n < e.length && e[n] < t;)n++;
            this.openStart = n + s;
        }
    }
    activeForPoint(t) {
        if (!this.active.length) return this.active;
        let i = [];
        for(let e = this.active.length - 1; e >= 0 && !(this.activeRank[e] < this.pointRank); e--)(this.activeTo[e] > t || this.activeTo[e] == t && this.active[e].endSide >= this.point.endSide) && i.push(this.active[e]);
        return i.reverse();
    }
    openEnd(t) {
        let i = 0;
        for(let e = this.activeTo.length - 1; e >= 0 && this.activeTo[e] > t; e--)i++;
        return i;
    }
};
function L1(o, t, i, e, s, n) {
    o.goto(t), i.goto(e);
    let r = e + s, h = e, l = e - t;
    for(;;){
        let a = o.to + l - i.to || o.endSide - i.endSide, u = a < 0 ? o.to + l : i.to, c = Math.min(u, r);
        if (o.point || i.point ? o.point && i.point && (o.point == i.point || o.point.eq(i.point)) && E1(o.activeForPoint(o.to + l), i.activeForPoint(i.to)) || n.comparePoint(h, c, o.point, i.point) : c > h && !E1(o.active, i.active) && n.compareRange(h, c, o.active, i.active), u > r) break;
        h = u, a <= 0 && o.next(), a >= 0 && i.next();
    }
}
function E1(o, t) {
    if (o.length != t.length) return !1;
    for(let i = 0; i < o.length; i++)if (o[i] != t[i] && !o[i].eq(t[i])) return !1;
    return !0;
}
function P2(o, t) {
    for(let i = t, e = o.length - 1; i < e; i++)o[i] = o[i + 1];
    o.pop();
}
function I1(o, t, i) {
    for(let e = o.length - 1; e >= t; e--)o[e + 1] = o[e];
    o[t] = i;
}
function F1(o, t) {
    let i = -1, e = 1000000000;
    for(let s = 0; s < t.length; s++)(t[s] - e || o[s].endSide - o[i].endSide) < 0 && (i = s, e = t[s]);
    return i;
}
var a1 = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
    229: "q"
}, t1 = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"',
    229: "Q"
}, i1 = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent), p2 = typeof navigator != "undefined" && /Apple Computer/.test(navigator.vendor), d1 = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent), f1 = typeof navigator != "undefined" && /Mac/.test(navigator.platform), s1 = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), y6 = i1 && (f1 || +i1[1] < 57) || d1 && f1;
for(r1 = 0; r1 < 10; r1++)a1[48 + r1] = a1[96 + r1] = String(r1);
var r1;
for(r1 = 1; r1 <= 24; r1++)a1[r1 + 111] = "F" + r1;
var r1;
for(r1 = 65; r1 <= 90; r1++)a1[r1] = String.fromCharCode(r1 + 32), t1[r1] = String.fromCharCode(r1);
var r1;
for(n1 in a1)t1.hasOwnProperty(n1) || (t1[n1] = a1[n1]);
var n1;
function v2(o) {
    var g6 = y6 && (o.ctrlKey || o.altKey || o.metaKey) || (p2 || s1) && o.shiftKey && o.key && o.key.length == 1, e = !g6 && o.key || (o.shiftKey ? t1 : a1)[o.keyCode] || o.key || "Unidentified";
    return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
function Ht(n) {
    let t;
    return n.nodeType == 11 ? t = n.getSelection ? n : n.ownerDocument : t = n, t.getSelection();
}
function Ut(n, t) {
    return t ? n.contains(t.nodeType != 1 ? t.parentNode : t) : !1;
}
function zs() {
    let n = document.activeElement;
    for(; n && n.shadowRoot;)n = n.shadowRoot.activeElement;
    return n;
}
function Xt(n, t) {
    if (!t.anchorNode) return !1;
    try {
        return Ut(n, t.anchorNode);
    } catch  {
        return !1;
    }
}
function ut(n) {
    return n.nodeType == 3 ? wt(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function Nt(n, t, e, i) {
    return e ? qe(n, t, e, i, -1) || qe(n, t, e, i, 1) : !1;
}
function _t(n) {
    for(var t2 = 0;; t2++)if (n = n.previousSibling, !n) return t2;
}
function qe(n, t, e, i, s) {
    for(;;){
        if (n == e && t == i) return !0;
        if (t == (s < 0 ? 0 : Vt(n))) {
            if (n.nodeName == "DIV") return !1;
            let r = n.parentNode;
            if (!r || r.nodeType != 1) return !1;
            t = _t(n) + (s < 0 ? 0 : 1), n = r;
        } else if (n.nodeType == 1) {
            if (n = n.childNodes[t + (s < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false") return !1;
            t = s < 0 ? Vt(n) : 0;
        } else return !1;
    }
}
function Vt(n) {
    return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
var Ke = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
function Wt(n, t) {
    let e = t ? n.left : n.right;
    return {
        left: e,
        right: e,
        top: n.top,
        bottom: n.bottom
    };
}
function Is(n) {
    return {
        left: 0,
        right: n.innerWidth,
        top: 0,
        bottom: n.innerHeight
    };
}
function qs(n, t, e, i, s, r, o, l) {
    let h = n.ownerDocument, a = h.defaultView;
    for(let c = n; c;)if (c.nodeType == 1) {
        let f, d = c == h.body;
        if (d) f = Is(a);
        else {
            if (c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
                c = c.parentNode;
                continue;
            }
            let m = c.getBoundingClientRect();
            f = {
                left: m.left,
                right: m.left + c.clientWidth,
                top: m.top,
                bottom: m.top + c.clientHeight
            };
        }
        let u = 0, g = 0;
        if (s == "nearest") t.top < f.top ? (g = -(f.top - t.top + o), e > 0 && t.bottom > f.bottom + g && (g = t.bottom - f.bottom + g + o)) : t.bottom > f.bottom && (g = t.bottom - f.bottom + o, e < 0 && t.top - g < f.top && (g = -(f.top + g - t.top + o)));
        else {
            let m = t.bottom - t.top, b = f.bottom - f.top;
            g = (s == "center" && m <= b ? t.top + m / 2 - b / 2 : s == "start" || s == "center" && e < 0 ? t.top - o : t.bottom - b + o) - f.top;
        }
        if (i == "nearest" ? t.left < f.left ? (u = -(f.left - t.left + r), e > 0 && t.right > f.right + u && (u = t.right - f.right + u + r)) : t.right > f.right && (u = t.right - f.right + r, e < 0 && t.left < f.left + u && (u = -(f.left + u - t.left + r))) : u = (i == "center" ? t.left + (t.right - t.left) / 2 - (f.right - f.left) / 2 : i == "start" == l ? t.left - r : t.right - (f.right - f.left) + r) - f.left, u || g) if (d) a.scrollBy(u, g);
        else {
            if (g) {
                let m = c.scrollTop;
                c.scrollTop += g, g = c.scrollTop - m;
            }
            if (u) {
                let m = c.scrollLeft;
                c.scrollLeft += u, u = c.scrollLeft - m;
            }
            t = {
                left: t.left - u,
                top: t.top - g,
                right: t.right - u,
                bottom: t.bottom - g
            };
        }
        if (d) break;
        c = c.assignedSlot || c.parentNode, i = s = "nearest";
    } else if (c.nodeType == 11) c = c.host;
    else break;
}
var je = class {
    constructor(){
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
    }
    eq(t) {
        return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
    }
    setRange(t) {
        this.set(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset);
    }
    set(t, e, i, s) {
        this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = s;
    }
}, dt = null;
function Ge(n) {
    if (n.setActive) return n.setActive();
    if (dt) return n.focus(dt);
    let t = [];
    for(let e = n; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode);
    if (n.focus(dt == null ? {
        get preventScroll () {
            return dt = {
                preventScroll: !0
            }, !0;
        }
    } : void 0), !dt) {
        dt = !1;
        for(let e = 0; e < t.length;){
            let i = t[e++], s = t[e++], r = t[e++];
            i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
        }
    }
}
var Ye;
function wt(n, t, e = t) {
    let i = Ye || (Ye = document.createRange());
    return i.setEnd(n, e), i.setStart(n, t), i;
}
function St(n, t, e) {
    let i = {
        key: t,
        code: t,
        keyCode: e,
        which: e,
        cancelable: !0
    }, s = new KeyboardEvent("keydown", i);
    s.synthetic = !0, n.dispatchEvent(s);
    let r = new KeyboardEvent("keyup", i);
    return r.synthetic = !0, n.dispatchEvent(r), s.defaultPrevented || r.defaultPrevented;
}
function Ks(n) {
    for(; n;){
        if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host)) return n;
        n = n.assignedSlot || n.parentNode;
    }
    return null;
}
function $e(n) {
    for(; n.attributes.length;)n.removeAttributeNode(n.attributes[0]);
}
var L2 = class {
    constructor(t, e, i = !0){
        this.node = t, this.offset = e, this.precise = i;
    }
    static before(t, e) {
        return new L2(t.parentNode, _t(t), e);
    }
    static after(t, e) {
        return new L2(t.parentNode, _t(t) + 1, e);
    }
}, Jt = [], M2 = class {
    constructor(){
        this.parent = null, this.dom = null, this.dirty = 2;
    }
    get editorView() {
        if (!this.parent) throw new Error("Accessing view in orphan content view");
        return this.parent.editorView;
    }
    get overrideDOMText() {
        return null;
    }
    get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0;
    }
    get posAtEnd() {
        return this.posAtStart + this.length;
    }
    posBefore(t) {
        let e = this.posAtStart;
        for (let i of this.children){
            if (i == t) return e;
            e += i.length + i.breakAfter;
        }
        throw new RangeError("Invalid child in posBefore");
    }
    posAfter(t) {
        return this.posBefore(t) + t.length;
    }
    coordsAt(t, e) {
        return null;
    }
    sync(t) {
        if (this.dirty & 2) {
            let e = this.dom, i = e.firstChild;
            for (let s of this.children){
                if (s.dirty) {
                    if (!s.dom && i) {
                        let r = M2.get(i);
                        (!r || !r.parent && r.constructor == s.constructor) && s.reuseDOM(i);
                    }
                    s.sync(t), s.dirty = 0;
                }
                if (t && !t.written && t.node == e && i != s.dom && (t.written = !0), s.dom.parentNode == e) {
                    for(; i && i != s.dom;)i = Ue(i);
                    i = s.dom.nextSibling;
                } else e.insertBefore(s.dom, i);
            }
            for(i && t && t.node == e && (t.written = !0); i;)i = Ue(i);
        } else if (this.dirty & 1) for (let e of this.children)e.dirty && (e.sync(t), e.dirty = 0);
    }
    reuseDOM(t) {
    }
    localPosFromDOM(t, e) {
        let i;
        if (t == this.dom) i = this.dom.childNodes[e];
        else {
            let s = Vt(t) == 0 ? 0 : e == 0 ? -1 : 1;
            for(;;){
                let r = t.parentNode;
                if (r == this.dom) break;
                s == 0 && r.firstChild != r.lastChild && (t == r.firstChild ? s = -1 : s = 1), t = r;
            }
            s < 0 ? i = t : i = t.nextSibling;
        }
        if (i == this.dom.firstChild) return 0;
        for(; i && !M2.get(i);)i = i.nextSibling;
        if (!i) return this.length;
        for(let s = 0, r = 0;; s++){
            let o = this.children[s];
            if (o.dom == i) return r;
            r += o.length + o.breakAfter;
        }
    }
    domBoundsAround(t, e, i = 0) {
        let s = -1, r = -1, o = -1, l = -1;
        for(let h = 0, a = i, c = i; h < this.children.length; h++){
            let f = this.children[h], d = a + f.length;
            if (a < t && d > e) return f.domBoundsAround(t, e, a);
            if (d >= t && s == -1 && (s = h, r = a), a > e && f.dom.parentNode == this.dom) {
                o = h, l = c;
                break;
            }
            c = d, a = d + f.breakAfter;
        }
        return {
            from: r,
            to: l < 0 ? i + this.length : l,
            startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
            endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
        };
    }
    markDirty(t = !1) {
        this.dirty |= 2, this.markParentsDirty(t);
    }
    markParentsDirty(t) {
        for(let e = this.parent; e; e = e.parent){
            if (t && (e.dirty |= 2), e.dirty & 1) return;
            e.dirty |= 1, t = !1;
        }
    }
    setParent(t) {
        this.parent != t && (this.parent = t, this.dirty && this.markParentsDirty(!0));
    }
    setDOM(t) {
        this.dom && (this.dom.cmView = null), this.dom = t, t.cmView = this;
    }
    get rootView() {
        for(let t = this;;){
            let e = t.parent;
            if (!e) return t;
            t = e;
        }
    }
    replaceChildren(t, e, i = Jt) {
        this.markDirty();
        for(let s = t; s < e; s++){
            let r = this.children[s];
            r.parent == this && r.destroy();
        }
        this.children.splice(t, e - t, ...i);
        for(let s1 = 0; s1 < i.length; s1++)i[s1].setParent(this);
    }
    ignoreMutation(t) {
        return !1;
    }
    ignoreEvent(t) {
        return !1;
    }
    childCursor(t = this.length) {
        return new Zt(this.children, t, this.children.length);
    }
    childPos(t, e = 1) {
        return this.childCursor().findPos(t, e);
    }
    toString() {
        let t = this.constructor.name.replace("View", "");
        return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
    }
    static get(t) {
        return t.cmView;
    }
    get isEditable() {
        return !0;
    }
    merge(t, e, i, s, r, o) {
        return !1;
    }
    become(t) {
        return !1;
    }
    getSide() {
        return 0;
    }
    destroy() {
        this.parent = null;
    }
};
M2.prototype.breakAfter = 0;
function Ue(n) {
    let t = n.nextSibling;
    return n.parentNode.removeChild(n), t;
}
var Zt = class {
    constructor(t, e, i){
        this.children = t, this.pos = e, this.i = i, this.off = 0;
    }
    findPos(t, e = 1) {
        for(;;){
            if (t > this.pos || t == this.pos && (e > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) return this.off = t - this.pos, this;
            let i = this.children[--this.i];
            this.pos -= i.length + i.breakAfter;
        }
    }
};
function Xe(n, t, e, i, s, r, o, l, h) {
    let { children: a  } = n, c = a.length ? a[t] : null, f = r.length ? r[r.length - 1] : null, d = f ? f.breakAfter : o;
    if (!(t == i && c && !o && !d && r.length < 2 && c.merge(e, s, r.length ? f : null, e == 0, l, h))) {
        if (i < a.length) {
            let u = a[i];
            u && s < u.length ? (t == i && (u = u.split(s), s = 0), !d && f && u.merge(0, s, f, !0, 0, h) ? r[r.length - 1] = u : (s && u.merge(0, s, null, !1, 0, h), r.push(u))) : (u == null ? void 0 : u.breakAfter) && (f ? f.breakAfter = 1 : o = 1), i++;
        }
        for(c && (c.breakAfter = o, e > 0 && (!o && r.length && c.merge(e, c.length, r[0], !1, l, 0) ? c.breakAfter = r.shift().breakAfter : (e < c.length || c.children.length && c.children[c.children.length - 1].length == 0) && c.merge(e, c.length, null, !1, l, 0), t++)); t < i && r.length;)if (a[i - 1].become(r[r.length - 1])) i--, r.pop(), h = r.length ? 0 : l;
        else if (a[t].become(r[0])) t++, r.shift(), l = r.length ? 0 : h;
        else break;
        !r.length && t && i < a.length && !a[t - 1].breakAfter && a[i].merge(0, 0, a[t - 1], !1, l, h) && t--, (t < i || r.length) && n.replaceChildren(t, i, r);
    }
}
function _e(n, t, e, i, s, r) {
    let o = n.childCursor(), { i: l , off: h  } = o.findPos(e, 1), { i: a , off: c  } = o.findPos(t, -1), f = t - e;
    for (let d of i)f += d.length;
    n.length += f, Xe(n, a, c, l, h, i, 0, s, r);
}
var [F2, Qt] = typeof navigator != "undefined" ? [
    navigator,
    document
] : [
    {
        userAgent: "",
        vendor: "",
        platform: ""
    },
    {
        documentElement: {
            style: {
            }
        }
    }
], te1 = /Edge\/(\d+)/.exec(F2.userAgent), Je = /MSIE \d/.test(F2.userAgent), ee1 = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(F2.userAgent), Ft = !!(Je || ee1 || te1), Ze = !Ft && /gecko\/(\d+)/i.test(F2.userAgent), ie1 = !Ft && /Chrome\/(\d+)/.exec(F2.userAgent), Qe = "webkitFontSmoothing" in Qt.documentElement.style, ti = !Ft && /Apple Computer/.test(F2.vendor), ei = ti && (/Mobile\/\w+/.test(F2.userAgent) || F2.maxTouchPoints > 2), p4 = {
    mac: ei || /Mac/.test(F2.platform),
    windows: /Win/.test(F2.platform),
    linux: /Linux|X11/.test(F2.platform),
    ie: Ft,
    ie_version: Je ? Qt.documentMode || 6 : ee1 ? +ee1[1] : te1 ? +te1[1] : 0,
    gecko: Ze,
    gecko_version: Ze ? +(/Firefox\/(\d+)/.exec(F2.userAgent) || [
        0,
        0
    ])[1] : 0,
    chrome: !!ie1,
    chrome_version: ie1 ? +ie1[1] : 0,
    ios: ei,
    android: /Android\b/.test(F2.userAgent),
    webkit: Qe,
    safari: ti,
    webkit_version: Qe ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [
        0,
        0
    ])[1] : 0,
    tabSize: Qt.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
}, js = 256, J2 = class extends M2 {
    constructor(t){
        super();
        this.text = t;
    }
    get length() {
        return this.text.length;
    }
    createDOM(t) {
        this.setDOM(t || document.createTextNode(this.text));
    }
    sync(t) {
        this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text);
    }
    reuseDOM(t) {
        t.nodeType == 3 && this.createDOM(t);
    }
    merge(t, e, i) {
        return i && (!(i instanceof J2) || this.length - (e - t) + i.length > js) ? !1 : (this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e), this.markDirty(), !0);
    }
    split(t) {
        let e = new J2(this.text.slice(t));
        return this.text = this.text.slice(0, t), this.markDirty(), e;
    }
    localPosFromDOM(t, e) {
        return t == this.dom ? e : e ? this.text.length : 0;
    }
    domAtPos(t) {
        return new L2(this.dom, t);
    }
    domBoundsAround(t, e, i) {
        return {
            from: i,
            to: i + this.length,
            startDOM: this.dom,
            endDOM: this.dom.nextSibling
        };
    }
    coordsAt(t, e) {
        return ii(this.dom, t, e);
    }
}, Z = class extends M2 {
    constructor(t, e = [], i = 0){
        super();
        this.mark = t, this.children = e, this.length = i;
        for (let s of e)s.setParent(this);
    }
    setAttrs(t) {
        if ($e(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs) for(let e in this.mark.attrs)t.setAttribute(e, this.mark.attrs[e]);
        return t;
    }
    reuseDOM(t) {
        t.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t), this.dirty |= 4 | 2);
    }
    sync(t) {
        this.dom ? this.dirty & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t);
    }
    merge(t, e, i, s, r, o) {
        return i && (!(i instanceof Z && i.mark.eq(this.mark)) || t && r <= 0 || e < this.length && o <= 0) ? !1 : (_e(this, t, e, i ? i.children : [], r - 1, o - 1), this.markDirty(), !0);
    }
    split(t) {
        let e = [], i = 0, s = -1, r = 0;
        for (let l of this.children){
            let h = i + l.length;
            h > t && e.push(i < t ? l.split(t - i) : l), s < 0 && i >= t && (s = r), i = h, r++;
        }
        let o = this.length - t;
        return this.length = t, s > -1 && (this.children.length = s, this.markDirty()), new Z(this.mark, e, o);
    }
    domAtPos(t) {
        return ni(this.dom, this.children, t);
    }
    coordsAt(t, e) {
        return oi(this, t, e);
    }
};
function ii(n, t, e) {
    let i = n.nodeValue.length;
    t > i && (t = i);
    let s = t, r = t, o = 0;
    t == 0 && e < 0 || t == i && e >= 0 ? p4.chrome || p4.gecko || (t ? (s--, o = 1) : (r++, o = -1)) : e < 0 ? s-- : r++;
    let l = wt(n, s, r).getClientRects();
    if (!l.length) return Ke;
    let h = l[(o ? o < 0 : e >= 0) ? 0 : l.length - 1];
    return p4.safari && !o && h.width == 0 && (h = Array.prototype.find.call(l, (a)=>a.width
    ) || h), o ? Wt(h, o < 0) : h || null;
}
var j2 = class extends M2 {
    constructor(t, e, i){
        super();
        this.widget = t, this.length = e, this.side = i;
    }
    static create(t, e, i) {
        return new (t.customView || j2)(t, e, i);
    }
    split(t) {
        let e = j2.create(this.widget, this.length - t, this.side);
        return this.length -= t, e;
    }
    sync() {
        (!this.dom || !this.widget.updateDOM(this.dom)) && (this.setDOM(this.widget.toDOM(this.editorView)), this.dom.contentEditable = "false");
    }
    getSide() {
        return this.side;
    }
    merge(t, e, i, s, r, o) {
        return i && (!(i instanceof j2) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (i ? i.length : 0) + (this.length - e), !0);
    }
    become(t) {
        return t.length == this.length && t instanceof j2 && t.side == this.side && this.widget.constructor == t.widget.constructor ? (this.widget.eq(t.widget) || this.markDirty(!0), this.widget = t.widget, !0) : !1;
    }
    ignoreMutation() {
        return !0;
    }
    ignoreEvent(t) {
        return this.widget.ignoreEvent(t);
    }
    get overrideDOMText() {
        if (this.length == 0) return d.empty;
        let t = this;
        for(; t.parent;)t = t.parent;
        let e = t.editorView, i = e && e.state.doc, s = this.posAtStart;
        return i ? i.slice(s, s + this.length) : d.empty;
    }
    domAtPos(t) {
        return t == 0 ? L2.before(this.dom) : L2.after(this.dom, t == this.length);
    }
    domBoundsAround() {
        return null;
    }
    coordsAt(t, e) {
        let i = this.dom.getClientRects(), s = null;
        if (!i.length) return Ke;
        for(let r = t > 0 ? i.length - 1 : 0; s = i[r], !(t > 0 ? r == 0 : r == i.length - 1 || s.top < s.bottom); r += t > 0 ? -1 : 1);
        return t == 0 && e > 0 || t == this.length && e <= 0 ? s : Wt(s, t == 0);
    }
    get isEditable() {
        return !1;
    }
    destroy() {
        super.destroy(), this.dom && this.widget.destroy(this.dom);
    }
}, si = class extends j2 {
    domAtPos(t) {
        return new L2(this.widget.text, t);
    }
    sync() {
        this.setDOM(this.widget.toDOM());
    }
    localPosFromDOM(t, e) {
        return e ? t.nodeType == 3 ? Math.min(e, this.length) : this.length : 0;
    }
    ignoreMutation() {
        return !1;
    }
    get overrideDOMText() {
        return null;
    }
    coordsAt(t, e) {
        return ii(this.widget.text, t, e);
    }
    get isEditable() {
        return !0;
    }
}, se1 = p4.android ? "\u200B\u200B" : "\u200B", rt = class extends M2 {
    constructor(t){
        super();
        this.side = t;
    }
    get length() {
        return 0;
    }
    merge() {
        return !1;
    }
    become(t) {
        return t instanceof rt && t.side == this.side;
    }
    split() {
        return new rt(this.side);
    }
    sync() {
        this.dom ? this.dirty && this.dom.nodeValue != se1 && (this.dom.nodeValue = se1) : this.setDOM(document.createTextNode(se1));
    }
    getSide() {
        return this.side;
    }
    domAtPos(t) {
        return L2.before(this.dom);
    }
    localPosFromDOM() {
        return 0;
    }
    domBoundsAround() {
        return null;
    }
    coordsAt(t) {
        let e = ut(this.dom);
        return e[e.length - 1] || null;
    }
    get overrideDOMText() {
        return d.of([
            this.dom.nodeValue.replace(/\u200b/g, "")
        ]);
    }
};
J2.prototype.children = j2.prototype.children = rt.prototype.children = Jt;
function ni(n, t, e) {
    let i = 0;
    for(let s = 0; i < t.length; i++){
        let r = t[i], o = s + r.length;
        if (!(o == s && r.getSide() <= 0)) {
            if (e > s && e < o && r.dom.parentNode == n) return r.domAtPos(e - s);
            if (e <= s) break;
            s = o;
        }
    }
    for(; i > 0; i--){
        let s = t[i - 1].dom;
        if (s.parentNode == n) return L2.after(s);
    }
    return new L2(n, 0);
}
function ri(n, t, e) {
    let i, { children: s  } = n;
    e > 0 && t instanceof Z && s.length && (i = s[s.length - 1]) instanceof Z && i.mark.eq(t.mark) ? ri(i, t.children[0], e - 1) : (s.push(t), t.setParent(n)), n.length += t.length;
}
function oi(n, t, e) {
    for(let r = 0, o = 0; o < n.children.length; o++){
        let l = n.children[o], h = r + l.length, a;
        if ((e <= 0 || h == n.length || l.getSide() > 0 ? h >= t : h > t) && (t < h || o + 1 == n.children.length || (a = n.children[o + 1]).length || a.getSide() > 0)) {
            let c = 0;
            if (h == r) {
                if (l.getSide() <= 0) continue;
                c = e = -l.getSide();
            }
            let f = l.coordsAt(t - r, e);
            return c && f ? Wt(f, e < 0) : f;
        }
        r = h;
    }
    let i = n.dom.lastChild;
    if (!i) return n.dom.getBoundingClientRect();
    let s = ut(i);
    return s[s.length - 1] || null;
}
function ne1(n, t) {
    for(let e in n)e == "class" && t.class ? t.class += " " + n.class : e == "style" && t.style ? t.style += ";" + n.style : t[e] = n[e];
    return t;
}
function re1(n, t) {
    if (n == t) return !0;
    if (!n || !t) return !1;
    let e = Object.keys(n), i = Object.keys(t);
    if (e.length != i.length) return !1;
    for (let s of e)if (i.indexOf(s) == -1 || n[s] !== t[s]) return !1;
    return !0;
}
function oe1(n, t, e) {
    if (t) for(let i in t)e && i in e || n.removeAttribute(i);
    if (e) for(let i1 in e)t && t[i1] == e[i1] || n.setAttribute(i1, e[i1]);
}
var Q1 = class {
    eq(t) {
        return !1;
    }
    updateDOM(t) {
        return !1;
    }
    compare(t) {
        return this == t || this.constructor == t.constructor && this.eq(t);
    }
    get estimatedHeight() {
        return -1;
    }
    ignoreEvent(t) {
        return !0;
    }
    get customView() {
        return null;
    }
    destroy(t) {
    }
}, A9 = function(n) {
    return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
}(A9 || (A9 = {
})), w6 = class extends v1 {
    constructor(t, e, i, s){
        super();
        this.startSide = t, this.endSide = e, this.widget = i, this.spec = s;
    }
    get heightRelevant() {
        return !1;
    }
    static mark(t) {
        return new xt(t);
    }
    static widget(t) {
        let e = t.side || 0, i = !!t.block;
        return e += i ? e > 0 ? 300000000 : -400000000 : e > 0 ? 100000000 : -100000000, new tt(t, e, e, i, t.widget || null, !1);
    }
    static replace(t) {
        let e = !!t.block, { start: i , end: s  } = li(t, e), r = e ? i ? -300000000 : -1 : 400000000, o = e ? s ? 200000000 : 1 : -500000000;
        return new tt(t, r, o, e, t.widget || null, !0);
    }
    static line(t) {
        return new gt(t);
    }
    static set(t, e = !1) {
        return f10.of(t, e);
    }
    hasHeight() {
        return this.widget ? this.widget.estimatedHeight > -1 : !1;
    }
};
w6.none = f10.empty;
var xt = class extends w6 {
    constructor(t){
        let { start: e , end: i  } = li(t);
        super(e ? -1 : 400000000, i ? 1 : -500000000, null, t);
        this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null;
    }
    eq(t) {
        return this == t || t instanceof xt && this.tagName == t.tagName && this.class == t.class && re1(this.attrs, t.attrs);
    }
    range(t, e = t) {
        if (t >= e) throw new RangeError("Mark decorations may not be empty");
        return super.range(t, e);
    }
};
xt.prototype.point = !1;
var gt = class extends w6 {
    constructor(t){
        super(-200000000, -200000000, null, t);
    }
    eq(t) {
        return t instanceof gt && re1(this.spec.attributes, t.spec.attributes);
    }
    range(t, e = t) {
        if (e != t) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(t, e);
    }
};
gt.prototype.mapMode = D2.TrackBefore;
gt.prototype.point = !0;
var tt = class extends w6 {
    constructor(t, e, i, s, r, o){
        super(e, i, r, t);
        this.block = s, this.isReplace = o, this.mapMode = s ? e <= 0 ? D2.TrackBefore : D2.TrackAfter : D2.TrackDel;
    }
    get type() {
        return this.startSide < this.endSide ? A9.WidgetRange : this.startSide <= 0 ? A9.WidgetBefore : A9.WidgetAfter;
    }
    get heightRelevant() {
        return this.block || !!this.widget && this.widget.estimatedHeight >= 5;
    }
    eq(t) {
        return t instanceof tt && Gs(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
    }
    range(t, e = t) {
        if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && e != t) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(t, e);
    }
};
tt.prototype.point = !0;
function li(n, t = !1) {
    let { inclusiveStart: e , inclusiveEnd: i  } = n;
    return e == null && (e = n.inclusive), i == null && (i = n.inclusive), {
        start: e ?? t,
        end: i ?? t
    };
}
function Gs(n, t) {
    return n == t || !!(n && t && n.compare(t));
}
function le1(n, t, e, i = 0) {
    let s = e.length - 1;
    s >= 0 && e[s] + i > n ? e[s] = Math.max(e[s], t) : e.push(n, t);
}
var E2 = class extends M2 {
    constructor(){
        super(...arguments);
        this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
    }
    merge(t, e, i, s, r, o) {
        if (i) {
            if (!(i instanceof E2)) return !1;
            this.dom || i.transferDOM(this);
        }
        return s && this.setDeco(i ? i.attrs : null), _e(this, t, e, i ? i.children : [], r, o), !0;
    }
    split(t) {
        let e = new E2;
        if (e.breakAfter = this.breakAfter, this.length == 0) return e;
        let { i , off: s  } = this.childPos(t);
        s && (e.append(this.children[i].split(s), 0), this.children[i].merge(s, this.children[i].length, null, !1, 0, 0), i++);
        for(let r = i; r < this.children.length; r++)e.append(this.children[r], 0);
        for(; i > 0 && this.children[i - 1].length == 0;)this.children[--i].destroy();
        return this.children.length = i, this.markDirty(), this.length = t, e;
    }
    transferDOM(t) {
        !this.dom || (t.setDOM(this.dom), t.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
    }
    setDeco(t) {
        re1(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t);
    }
    append(t, e) {
        ri(this, t, e);
    }
    addLineDeco(t) {
        let e = t.spec.attributes, i = t.spec.class;
        e && (this.attrs = ne1(e, this.attrs || {
        })), i && (this.attrs = ne1({
            class: i
        }, this.attrs || {
        }));
    }
    domAtPos(t) {
        return ni(this.dom, this.children, t);
    }
    reuseDOM(t) {
        t.nodeName == "DIV" && (this.setDOM(t), this.dirty |= 4 | 2);
    }
    sync(t) {
        var e;
        this.dom ? this.dirty & 4 && ($e(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (oe1(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t);
        let i = this.dom.lastChild;
        for(; i && M2.get(i) instanceof Z;)i = i.lastChild;
        if (!i || i.nodeName != "BR" && ((e = M2.get(i)) === null || e === void 0 ? void 0 : e.isEditable) == !1 && (!p4.ios || !this.children.some((s)=>s instanceof J2
        ))) {
            let s = document.createElement("BR");
            s.cmIgnore = !0, this.dom.appendChild(s);
        }
    }
    measureTextSize() {
        if (this.children.length == 0 || this.length > 20) return null;
        let t = 0;
        for (let e of this.children){
            if (!(e instanceof J2)) return null;
            let i = ut(e.dom);
            if (i.length != 1) return null;
            t += i[0].width;
        }
        return {
            lineHeight: this.dom.getBoundingClientRect().height,
            charWidth: t / this.length
        };
    }
    coordsAt(t, e) {
        return oi(this, t, e);
    }
    become(t) {
        return !1;
    }
    get type() {
        return A9.Text;
    }
    static find(t, e) {
        for(let i = 0, s = 0; i < t.children.length; i++){
            let r = t.children[i], o = s + r.length;
            if (o >= e) {
                if (r instanceof E2) return r;
                if (o > e) break;
            }
            s = o + r.breakAfter;
        }
        return null;
    }
}, et = class extends M2 {
    constructor(t, e, i){
        super();
        this.widget = t, this.length = e, this.type = i, this.breakAfter = 0;
    }
    merge(t, e, i, s, r, o) {
        return i && (!(i instanceof et) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (i ? i.length : 0) + (this.length - e), !0);
    }
    domAtPos(t) {
        return t == 0 ? L2.before(this.dom) : L2.after(this.dom, t == this.length);
    }
    split(t) {
        let e = this.length - t;
        this.length = t;
        let i = new et(this.widget, e, this.type);
        return i.breakAfter = this.breakAfter, i;
    }
    get children() {
        return Jt;
    }
    sync() {
        (!this.dom || !this.widget.updateDOM(this.dom)) && (this.setDOM(this.widget.toDOM(this.editorView)), this.dom.contentEditable = "false");
    }
    get overrideDOMText() {
        return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : d.empty;
    }
    domBoundsAround() {
        return null;
    }
    become(t) {
        return t instanceof et && t.type == this.type && t.widget.constructor == this.widget.constructor ? (t.widget.eq(this.widget) || this.markDirty(!0), this.widget = t.widget, this.length = t.length, this.breakAfter = t.breakAfter, !0) : !1;
    }
    ignoreMutation() {
        return !0;
    }
    ignoreEvent(t) {
        return this.widget.ignoreEvent(t);
    }
    destroy() {
        super.destroy(), this.dom && this.widget.destroy(this.dom);
    }
}, zt = class {
    constructor(t, e, i, s){
        this.doc = t, this.pos = e, this.end = i, this.disallowBlockEffectsBelow = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e;
    }
    posCovered() {
        if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
        let t = this.content[this.content.length - 1];
        return !t.breakAfter && !(t instanceof et && t.type == A9.WidgetBefore);
    }
    getLine() {
        return this.curLine || (this.content.push(this.curLine = new E2), this.atCursorPos = !0), this.curLine;
    }
    flushBuffer(t) {
        this.pendingBuffer && (this.curLine.append(It(new rt(-1), t), t.length), this.pendingBuffer = 0);
    }
    addBlockWidget(t) {
        this.flushBuffer([]), this.curLine = null, this.content.push(t);
    }
    finish(t) {
        t ? this.pendingBuffer = 0 : this.flushBuffer([]), this.posCovered() || this.getLine();
    }
    buildText(t, e, i) {
        for(; t > 0;){
            if (this.textOff == this.text.length) {
                let { value: r , lineBreak: o , done: l  } = this.cursor.next(this.skip);
                if (this.skip = 0, l) throw new Error("Ran out of text content when drawing inline views");
                if (o) {
                    this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer([]), this.curLine = null, t--;
                    continue;
                } else this.text = r, this.textOff = 0;
            }
            let s = Math.min(this.text.length - this.textOff, t, 512);
            this.flushBuffer(e), this.getLine().append(It(new J2(this.text.slice(this.textOff, this.textOff + s)), e), i), this.atCursorPos = !0, this.textOff += s, t -= s, i = 0;
        }
    }
    span(t, e, i, s) {
        this.buildText(e - t, i, s), this.pos = e, this.openStart < 0 && (this.openStart = s);
    }
    point(t, e, i, s, r) {
        let o = e - t;
        if (i instanceof tt) if (i.block) {
            let { type: l  } = i;
            l == A9.WidgetAfter && !this.posCovered() && this.getLine(), this.addBlockWidget(new et(i.widget || new he1("div"), o, l));
        } else {
            let l = j2.create(i.widget || new he1("span"), o, i.startSide), h = this.atCursorPos && !l.isEditable && r <= s.length && (t < e || i.startSide > 0), a = !l.isEditable && (t < e || i.startSide <= 0), c = this.getLine();
            this.pendingBuffer == 2 && !h && (this.pendingBuffer = 0), this.flushBuffer(s), h && (c.append(It(new rt(1), s), r), r = s.length + Math.max(0, r - s.length)), c.append(It(l, s), r), this.atCursorPos = a, this.pendingBuffer = a ? t < e ? 1 : 2 : 0;
        }
        else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
        o && (this.textOff + o <= this.text.length ? this.textOff += o : (this.skip += o - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = r);
    }
    filterPoint(t, e, i, s) {
        if (s >= this.disallowBlockEffectsBelow || !(i instanceof tt)) return !0;
        if (i.block) throw new RangeError("Block decorations may not be specified via plugins");
        return e <= this.doc.lineAt(this.pos).to;
    }
    static build(t, e, i, s, r) {
        let o = new zt(t, e, i, r);
        return o.openEnd = f10.spans(s, e, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
    }
};
function It(n, t) {
    for (let e of t)n = new Z(e, [
        n
    ], n.length);
    return n;
}
var he1 = class extends Q1 {
    constructor(t){
        super();
        this.tag = t;
    }
    eq(t) {
        return t.tag == this.tag;
    }
    toDOM() {
        return document.createElement(this.tag);
    }
    updateDOM(t) {
        return t.nodeName.toLowerCase() == this.tag;
    }
}, Ys = [], hi = O1.define(), ai = O1.define(), ci = O1.define(), fi = O1.define(), ae1 = O1.define(), ui = O1.define(), ce1 = v.define({
    map: (n, t)=>n.map(t)
}), di = v.define({
    map: (n, t)=>n.map(t)
}), ot = class {
    constructor(t, e = "nearest", i = "nearest", s = 5, r = 5){
        this.range = t, this.y = e, this.x = i, this.yMargin = s, this.xMargin = r;
    }
    map(t) {
        return t.empty ? this : new ot(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin);
    }
}, gi = v.define({
    map: (n, t)=>n.map(t)
});
function lt(n, t, e) {
    let i = n.facet(fi);
    i.length ? i[0](t) : window.onerror ? window.onerror(String(t), e, void 0, void 0, t) : e ? console.error(e + ":", t) : console.error(t);
}
var At = O1.define({
    combine: (n)=>n.length ? n[0] : !0
}), pi = class {
    constructor(t, e){
        this.field = t, this.get = e;
    }
}, V1 = class {
    from(t) {
        return new pi(this, t);
    }
    static define() {
        return new V1;
    }
};
V1.decorations = V1.define();
V1.atomicRanges = V1.define();
V1.scrollMargins = V1.define();
var $s = 0, vt = O1.define(), z3 = class {
    constructor(t, e, i){
        this.id = t, this.create = e, this.fields = i, this.extension = vt.of(this);
    }
    static define(t, e) {
        let { eventHandlers: i , provide: s , decorations: r  } = e || {
        }, o = [];
        if (s) for (let l of Array.isArray(s) ? s : [
            s
        ])o.push(l);
        return i && o.push(mi.from((l)=>({
                plugin: l,
                handlers: i
            })
        )), r && o.push(V1.decorations.from(r)), new z3($s++, t, o);
    }
    static fromClass(t, e) {
        return z3.define((i)=>new t(i)
        , e);
    }
}, mi = V1.define(), qt = class {
    constructor(t){
        this.spec = t, this.mustUpdate = null, this.value = null;
    }
    takeField(t, e) {
        if (this.spec) for (let { field: i , get: s  } of this.spec.fields)i == t && e.push(s(this.value));
    }
    update(t) {
        if (this.value) {
            if (this.mustUpdate) {
                let e = this.mustUpdate;
                if (this.mustUpdate = null, this.value.update) try {
                    this.value.update(e);
                } catch (i) {
                    if (lt(e.state, i, "CodeMirror plugin crashed"), this.value.destroy) try {
                        this.value.destroy();
                    } catch  {
                    }
                    this.deactivate();
                }
            }
        } else if (this.spec) try {
            this.value = this.spec.create(t);
        } catch (e) {
            lt(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
        }
        return this;
    }
    destroy(t) {
        var e;
        if ((e = this.value) === null || e === void 0 ? void 0 : e.destroy) try {
            this.value.destroy();
        } catch (i) {
            lt(t.state, i, "CodeMirror plugin crashed");
        }
    }
    deactivate() {
        this.spec = this.value = null;
    }
}, bi = O1.define(), fe1 = O1.define(), ht = O1.define(), Mt = O1.define(), I2 = class {
    constructor(t, e, i, s){
        this.fromA = t, this.toA = e, this.fromB = i, this.toB = s;
    }
    join(t) {
        return new I2(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
    }
    addToSet(t) {
        let e = t.length, i = this;
        for(; e > 0; e--){
            let s = t[e - 1];
            if (!(s.fromA > i.toA)) {
                if (s.toA < i.fromA) break;
                i = i.join(s), t.splice(e - 1, 1);
            }
        }
        return t.splice(e, 0, i), t;
    }
    static extendWithRanges(t, e) {
        if (e.length == 0) return t;
        let i = [];
        for(let s = 0, r = 0, o = 0, l = 0;; s++){
            let h = s == t.length ? null : t[s], a = o - l, c = h ? h.fromB : 1000000000;
            for(; r < e.length && e[r] < c;){
                let f = e[r], d = e[r + 1], u = Math.max(l, f), g = Math.min(c, d);
                if (u <= g && new I2(u + a, g + a, u, g).addToSet(i), d > c) break;
                r += 2;
            }
            if (!h) return i;
            new I2(h.fromA, h.toA, h.fromB, h.toB).addToSet(i), o = h.toA, l = h.toB;
        }
    }
}, ue1 = class {
    constructor(t, e, i = Ys){
        this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = y1.empty(this.startState.doc.length);
        for (let o of i)this.changes = this.changes.compose(o.changes);
        let s = [];
        this.changes.iterChangedRanges((o, l, h, a)=>s.push(new I2(o, l, h, a))
        ), this.changedRanges = s;
        let r = t.hasFocus;
        r != t.inputState.notifiedFocused && (t.inputState.notifiedFocused = r, this.flags |= 1);
    }
    get viewportChanged() {
        return (this.flags & 4) > 0;
    }
    get heightChanged() {
        return (this.flags & 2) > 0;
    }
    get geometryChanged() {
        return this.docChanged || (this.flags & (8 | 2)) > 0;
    }
    get focusChanged() {
        return (this.flags & 1) > 0;
    }
    get docChanged() {
        return !this.changes.empty;
    }
    get selectionSet() {
        return this.transactions.some((t)=>t.selection
        );
    }
    get empty() {
        return this.flags == 0 && this.transactions.length == 0;
    }
}, P4 = function(n) {
    return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
}(P4 || (P4 = {
})), de1 = P4.LTR, Us = P4.RTL;
function yi(n) {
    let t = [];
    for(let e = 0; e < n.length; e++)t.push(1 << +n[e]);
    return t;
}
var Xs = yi("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), _s = yi("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), ge1 = Object.create(null), q2 = [];
for (let n11 of [
    "()",
    "[]",
    "{}"
]){
    let t = n11.charCodeAt(0), e = n11.charCodeAt(1);
    ge1[t] = e, ge1[e] = -t;
}
function Js(n) {
    return n <= 247 ? Xs[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? _s[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8203 || n == 8204 ? 256 : 1;
}
var Zs = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, at = class {
    constructor(t, e, i){
        this.from = t, this.to = e, this.level = i;
    }
    get dir() {
        return this.level % 2 ? Us : de1;
    }
    side(t, e) {
        return this.dir == e == t ? this.to : this.from;
    }
    static find(t, e, i, s) {
        let r = -1;
        for(let o = 0; o < t.length; o++){
            let l = t[o];
            if (l.from <= e && l.to >= e) {
                if (l.level == i) return o;
                (r < 0 || (s != 0 ? s < 0 ? l.from < e : l.to > e : t[r].level > l.level)) && (r = o);
            }
        }
        if (r < 0) throw new RangeError("Index out of range");
        return r;
    }
}, C2 = [];
function wi(n, t) {
    let e = n.length, i = t == de1 ? 1 : 2, s = t == de1 ? 2 : 1;
    if (!n || i == 1 && !Zs.test(n)) return Si(e);
    for(let o = 0, l = i, h = i; o < e; o++){
        let a = Js(n.charCodeAt(o));
        a == 512 ? a = l : a == 8 && h == 4 && (a = 16), C2[o] = a == 4 ? 2 : a, a & 7 && (h = a), l = a;
    }
    for(let o1 = 0, l1 = i, h1 = i; o1 < e; o1++){
        let a = C2[o1];
        if (a == 128) o1 < e - 1 && l1 == C2[o1 + 1] && l1 & 24 ? a = C2[o1] = l1 : C2[o1] = 256;
        else if (a == 64) {
            let c = o1 + 1;
            for(; c < e && C2[c] == 64;)c++;
            let f = o1 && l1 == 8 || c < e && C2[c] == 8 ? h1 == 1 ? 1 : 8 : 256;
            for(let d = o1; d < c; d++)C2[d] = f;
            o1 = c - 1;
        } else a == 8 && h1 == 1 && (C2[o1] = 1);
        l1 = a, a & 7 && (h1 = a);
    }
    for(let o2 = 0, l2 = 0, h2 = 0, a, c, f; o2 < e; o2++)if (c = ge1[a = n.charCodeAt(o2)]) if (c < 0) {
        for(let d = l2 - 3; d >= 0; d -= 3)if (q2[d + 1] == -c) {
            let u = q2[d + 2], g = u & 2 ? i : u & 4 ? u & 1 ? s : i : 0;
            g && (C2[o2] = C2[q2[d]] = g), l2 = d;
            break;
        }
    } else {
        if (q2.length == 189) break;
        q2[l2++] = o2, q2[l2++] = a, q2[l2++] = h2;
    }
    else if ((f = C2[o2]) == 2 || f == 1) {
        let d = f == i;
        h2 = d ? 0 : 1;
        for(let u = l2 - 3; u >= 0; u -= 3){
            let g = q2[u + 2];
            if (g & 2) break;
            if (d) q2[u + 2] |= 2;
            else {
                if (g & 4) break;
                q2[u + 2] |= 4;
            }
        }
    }
    for(let o3 = 0; o3 < e; o3++)if (C2[o3] == 256) {
        let l = o3 + 1;
        for(; l < e && C2[l] == 256;)l++;
        let h = (o3 ? C2[o3 - 1] : i) == 1, a = (l < e ? C2[l] : i) == 1, c = h == a ? h ? 1 : 2 : i;
        for(let f = o3; f < l; f++)C2[f] = c;
        o3 = l - 1;
    }
    let r = [];
    if (i == 1) for(let o4 = 0; o4 < e;){
        let l = o4, h = C2[o4++] != 1;
        for(; o4 < e && h == (C2[o4] != 1);)o4++;
        if (h) for(let a = o4; a > l;){
            let c = a, f = C2[--a] != 2;
            for(; a > l && f == (C2[a - 1] != 2);)a--;
            r.push(new at(a, c, f ? 2 : 1));
        }
        else r.push(new at(l, o4, 0));
    }
    else for(let o5 = 0; o5 < e;){
        let l = o5, h = C2[o5++] == 2;
        for(; o5 < e && h == (C2[o5] == 2);)o5++;
        r.push(new at(l, o5, h ? 1 : 2));
    }
    return r;
}
function Si(n) {
    return [
        new at(0, n, 0)
    ];
}
var xi = "";
function Ai(n, t, e, i, s) {
    var r1;
    let o = i.head - n.from, l = -1;
    if (o == 0) {
        if (!s || !n.length) return null;
        t[0].level != e && (o = t[0].side(!1, e), l = 0);
    } else if (o == n.length) {
        if (s) return null;
        let d = t[t.length - 1];
        d.level != e && (o = d.side(!0, e), l = t.length - 1);
    }
    l < 0 && (l = at.find(t, o, (r1 = i.bidiLevel) !== null && r1 !== void 0 ? r1 : -1, i.assoc));
    let h = t[l];
    o == h.side(s, e) && (h = t[l += s ? 1 : -1], o = h.side(!s, e));
    let a = s == (h.dir == e), c = A6(n.text, o, a);
    if (xi = n.text.slice(Math.min(o, c), Math.max(o, c)), c != h.side(s, e)) return p48.cursor(c + n.from, a ? -1 : 1, h.level);
    let f = l == (s ? t.length - 1 : 0) ? null : t[l + (s ? 1 : -1)];
    return !f && h.level != e ? p48.cursor(s ? n.to : n.from, s ? -1 : 1, e) : f && f.level < h.level ? p48.cursor(f.side(!s, e) + n.from, s ? 1 : -1, f.level) : p48.cursor(c + n.from, s ? -1 : 1, h.level);
}
var pe1 = class {
    constructor(t, e){
        this.points = t, this.view = e, this.text = "", this.lineBreak = e.state.lineBreak;
    }
    readRange(t, e) {
        if (!t) return this;
        let i = t.parentNode;
        for(let s = t;;){
            this.findPointBefore(i, s), this.readNode(s);
            let r = s.nextSibling;
            if (r == e) break;
            let o = M2.get(s), l = M2.get(r);
            (o && l ? o.breakAfter : (o ? o.breakAfter : vi(s)) || vi(r) && (s.nodeName != "BR" || s.cmIgnore)) && (this.text += this.lineBreak), s = r;
        }
        return this.findPointBefore(i, e), this;
    }
    readNode(t) {
        if (t.cmIgnore) return;
        let e = M2.get(t), i = e && e.overrideDOMText, s;
        i != null ? s = i.sliceString(0, void 0, this.lineBreak) : t.nodeType == 3 ? s = t.nodeValue : t.nodeName == "BR" ? s = t.nextSibling ? this.lineBreak : "" : t.nodeType == 1 && this.readRange(t.firstChild, null), s != null && (this.findPointIn(t, s.length), this.text += s, p4.chrome && this.view.inputState.lastKeyCode == 13 && !t.nextSibling && /\n\n$/.test(this.text) && (this.text = this.text.slice(0, -1)));
    }
    findPointBefore(t, e) {
        for (let i of this.points)i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length);
    }
    findPointIn(t, e) {
        for (let i of this.points)i.node == t && (i.pos = this.text.length + Math.min(i.offset, e));
    }
};
function vi(n) {
    return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
var me1 = class {
    constructor(t, e){
        this.node = t, this.offset = e, this.pos = -1;
    }
}, be1 = class extends M2 {
    constructor(t){
        super();
        this.view = t, this.compositionDeco = w6.none, this.decorations = [], this.pluginDecorationLength = 0, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [
            new E2
        ], this.children[0].setParent(this), this.updateDeco(), this.updateInner([
            new I2(0, 0, 0, t.state.doc.length)
        ], 0);
    }
    get root() {
        return this.view.root;
    }
    get editorView() {
        return this.view;
    }
    get length() {
        return this.view.state.doc.length;
    }
    update(t) {
        let e = t.changedRanges;
        this.minWidth > 0 && e.length && (e.every(({ fromA: o , toA: l  })=>l < this.minWidthFrom || o > this.minWidthTo
        ) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.view.inputState.composing < 0 ? this.compositionDeco = w6.none : (t.transactions.length || this.dirty) && (this.compositionDeco = tn(this.view, t.changes)), (p4.ie || p4.chrome) && !this.compositionDeco.size && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
        let i = this.decorations, s = this.updateDeco(), r = sn(i, s, t.changes);
        return e = I2.extendWithRanges(e, r), this.dirty == 0 && e.length == 0 ? !1 : (this.updateInner(e, t.startState.doc.length), t.transactions.length && (this.lastUpdate = Date.now()), !0);
    }
    updateInner(t, e) {
        this.view.viewState.mustMeasureContent = !0, this.updateChildren(t, e);
        let { observer: i  } = this.view;
        i.ignore(()=>{
            this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.minWidth = this.minWidth ? this.minWidth + "px" : "";
            let r = p4.chrome || p4.ios ? {
                node: i.selectionRange.focusNode,
                written: !1
            } : void 0;
            this.sync(r), this.dirty = 0, r && (r.written || i.selectionRange.focusNode != r.node) && (this.forceSelection = !0), this.dom.style.height = "";
        });
        let s = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let r of this.children)r instanceof et && r.widget instanceof ye1 && s.push(r.dom);
        i.updateGaps(s);
    }
    updateChildren(t, e) {
        let i = this.childCursor(e);
        for(let s = t.length - 1;; s--){
            let r = s >= 0 ? t[s] : null;
            if (!r) break;
            let { fromA: o , toA: l , fromB: h , toB: a  } = r, { content: c , breakAtStart: f , openStart: d , openEnd: u  } = zt.build(this.view.state.doc, h, a, this.decorations, this.pluginDecorationLength), { i: g , off: m  } = i.findPos(l, 1), { i: b , off: y  } = i.findPos(o, -1);
            Xe(this, b, y, g, m, c, f, d, u);
        }
    }
    updateSelection(t = !1, e = !1) {
        if (t && this.view.observer.readSelectionRange(), !(e || this.mayControlSelection()) || p4.ios && this.view.inputState.rapidCompositionStart) return;
        let i = this.forceSelection;
        this.forceSelection = !1;
        let s = this.view.state.selection.main, r = this.domAtPos(s.anchor), o = s.empty ? r : this.domAtPos(s.head);
        if (p4.gecko && s.empty && Qs(r)) {
            let h = document.createTextNode("");
            this.view.observer.ignore(()=>r.node.insertBefore(h, r.node.childNodes[r.offset] || null)
            ), r = o = new L2(h, 0), i = !0;
        }
        let l = this.view.observer.selectionRange;
        (i || !l.focusNode || !Nt(r.node, r.offset, l.anchorNode, l.anchorOffset) || !Nt(o.node, o.offset, l.focusNode, l.focusOffset)) && (this.view.observer.ignore(()=>{
            p4.android && p4.chrome && this.dom.contains(l.focusNode) && nn(l.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({
                preventScroll: !0
            }));
            let h = Ht(this.root);
            if (s.empty) {
                if (p4.gecko) {
                    let a = en(r.node, r.offset);
                    if (a && a != (1 | 2)) {
                        let c = Ci(r.node, r.offset, a == 1 ? 1 : -1);
                        c && (r = new L2(c, a == 1 ? 0 : c.nodeValue.length));
                    }
                }
                h.collapse(r.node, r.offset), s.bidiLevel != null && l.cursorBidiLevel != null && (l.cursorBidiLevel = s.bidiLevel);
            } else if (h.extend) h.collapse(r.node, r.offset), h.extend(o.node, o.offset);
            else {
                let a = document.createRange();
                s.anchor > s.head && ([r, o] = [
                    o,
                    r
                ]), a.setEnd(o.node, o.offset), a.setStart(r.node, r.offset), h.removeAllRanges(), h.addRange(a);
            }
        }), this.view.observer.setSelectionRange(r, o)), this.impreciseAnchor = r.precise ? null : new L2(l.anchorNode, l.anchorOffset), this.impreciseHead = o.precise ? null : new L2(l.focusNode, l.focusOffset);
    }
    enforceCursorAssoc() {
        if (this.compositionDeco.size) return;
        let t = this.view.state.selection.main, e = Ht(this.root);
        if (!t.empty || !t.assoc || !e.modify) return;
        let i = E2.find(this, t.head);
        if (!i) return;
        let s = i.posAtStart;
        if (t.head == s || t.head == s + i.length) return;
        let r = this.coordsAt(t.head, -1), o = this.coordsAt(t.head, 1);
        if (!r || !o || r.bottom > o.top) return;
        let l = this.domAtPos(t.head + t.assoc);
        e.collapse(l.node, l.offset), e.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary");
    }
    mayControlSelection() {
        return this.view.state.facet(At) ? this.root.activeElement == this.dom : Xt(this.dom, this.view.observer.selectionRange);
    }
    nearest(t) {
        for(let e = t; e;){
            let i = M2.get(e);
            if (i && i.rootView == this) return i;
            e = e.parentNode;
        }
        return null;
    }
    posFromDOM(t, e) {
        let i = this.nearest(t);
        if (!i) throw new RangeError("Trying to find position for a DOM position outside of the document");
        return i.localPosFromDOM(t, e) + i.posAtStart;
    }
    domAtPos(t) {
        let { i: e , off: i  } = this.childCursor().findPos(t, -1);
        for(; e < this.children.length - 1;){
            let s = this.children[e];
            if (i < s.length || s instanceof E2) break;
            e++, i = 0;
        }
        return this.children[e].domAtPos(i);
    }
    coordsAt(t, e) {
        for(let i = this.length, s = this.children.length - 1;; s--){
            let r = this.children[s], o = i - r.breakAfter - r.length;
            if (t > o || t == o && r.type != A9.WidgetBefore && r.type != A9.WidgetAfter && (!s || e == 2 || this.children[s - 1].breakAfter || this.children[s - 1].type == A9.WidgetBefore && e > -2)) return r.coordsAt(t - o, e);
            i = o;
        }
    }
    measureVisibleLineHeights() {
        let t = [], { from: e , to: i  } = this.view.viewState.viewport, s = this.view.contentDOM.clientWidth, r = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, o = -1;
        for(let l = 0, h = 0; h < this.children.length; h++){
            let a = this.children[h], c = l + a.length;
            if (c > i) break;
            if (l >= e) {
                let f = a.dom.getBoundingClientRect();
                if (t.push(f.height), r) {
                    let d = a.dom.lastChild, u = d ? ut(d) : [];
                    if (u.length) {
                        let g = u[u.length - 1], m = this.view.textDirection == P4.LTR ? g.right - f.left : f.right - g.left;
                        m > o && (o = m, this.minWidth = s, this.minWidthFrom = l, this.minWidthTo = c);
                    }
                }
            }
            l = c + a.breakAfter;
        }
        return t;
    }
    measureTextSize() {
        for (let s of this.children)if (s instanceof E2) {
            let r = s.measureTextSize();
            if (r) return r;
        }
        let t = document.createElement("div"), e, i;
        return t.className = "cm-line", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(()=>{
            this.dom.appendChild(t);
            let s = ut(t.firstChild)[0];
            e = t.getBoundingClientRect().height, i = s ? s.width / 27 : 7, t.remove();
        }), {
            lineHeight: e,
            charWidth: i
        };
    }
    childCursor(t = this.length) {
        let e = this.children.length;
        return e && (t -= this.children[--e].length), new Zt(this.children, t, e);
    }
    computeBlockGapDeco() {
        let t = [], e = this.view.viewState;
        for(let i = 0, s = 0;; s++){
            let r = s == e.viewports.length ? null : e.viewports[s], o = r ? r.from - 1 : this.length;
            if (o > i) {
                let l = e.lineBlockAt(o).bottom - e.lineBlockAt(i).top;
                t.push(w6.replace({
                    widget: new ye1(l),
                    block: !0,
                    inclusive: !0
                }).range(i, o));
            }
            if (!r) break;
            i = r.to + 1;
        }
        return w6.set(t);
    }
    updateDeco() {
        let t = this.view.pluginField(V1.decorations);
        return this.pluginDecorationLength = t.length, this.decorations = [
            ...t,
            ...this.view.state.facet(ht),
            this.compositionDeco,
            this.computeBlockGapDeco(),
            this.view.viewState.lineGapDeco
        ];
    }
    scrollIntoView(t) {
        let { range: e  } = t, i = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1), s;
        if (!i) return;
        !e.empty && (s = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (i = {
            left: Math.min(i.left, s.left),
            top: Math.min(i.top, s.top),
            right: Math.max(i.right, s.right),
            bottom: Math.max(i.bottom, s.bottom)
        });
        let r = 0, o = 0, l = 0, h = 0;
        for (let c of this.view.pluginField(V1.scrollMargins))if (c) {
            let { left: f , right: d , top: u , bottom: g  } = c;
            f != null && (r = Math.max(r, f)), d != null && (o = Math.max(o, d)), u != null && (l = Math.max(l, u)), g != null && (h = Math.max(h, g));
        }
        let a = {
            left: i.left - r,
            top: i.top - l,
            right: i.right + o,
            bottom: i.bottom + h
        };
        qs(this.view.scrollDOM, a, e.head < e.anchor ? -1 : 1, t.x, t.y, t.xMargin, t.yMargin, this.view.textDirection == P4.LTR);
    }
};
function Qs(n) {
    return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
var ye1 = class extends Q1 {
    constructor(t){
        super();
        this.height = t;
    }
    toDOM() {
        let t = document.createElement("div");
        return this.updateDOM(t), t;
    }
    eq(t) {
        return t.height == this.height;
    }
    updateDOM(t) {
        return t.style.height = this.height + "px", !0;
    }
    get estimatedHeight() {
        return this.height;
    }
};
function tn(n, t) {
    let e = n.observer.selectionRange, i = e.focusNode && Ci(e.focusNode, e.focusOffset, 0);
    if (!i) return w6.none;
    let s = n.docView.nearest(i);
    if (!s) return w6.none;
    let r, o, l = i;
    if (s instanceof E2) {
        for(; l.parentNode != s.dom;)l = l.parentNode;
        let d = l.previousSibling;
        for(; d && !M2.get(d);)d = d.previousSibling;
        r = o = d ? M2.get(d).posAtEnd : s.posAtStart;
    } else {
        for(;;){
            let { parent: d  } = s;
            if (!d) return w6.none;
            if (d instanceof E2) break;
            s = d;
        }
        r = s.posAtStart, o = r + s.length, l = s.dom;
    }
    let h = t.mapPos(r, 1), a = Math.max(h, t.mapPos(o, -1)), { state: c  } = n, f = l.nodeType == 3 ? l.nodeValue : new pe1([], n).readRange(l.firstChild, null).text;
    if (a - h < f.length) if (c.sliceDoc(h, Math.min(c.doc.length, h + f.length)) == f) a = h + f.length;
    else if (c.sliceDoc(Math.max(0, a - f.length), a) == f) h = a - f.length;
    else return w6.none;
    else if (c.sliceDoc(h, a) != f) return w6.none;
    return w6.set(w6.replace({
        widget: new Mi(l, i)
    }).range(h, a));
}
var Mi = class extends Q1 {
    constructor(t, e){
        super();
        this.top = t, this.text = e;
    }
    eq(t) {
        return this.top == t.top && this.text == t.text;
    }
    toDOM() {
        return this.top;
    }
    ignoreEvent() {
        return !1;
    }
    get customView() {
        return si;
    }
};
function Ci(n, t, e) {
    for(;;){
        if (n.nodeType == 3) return n;
        if (n.nodeType == 1 && t > 0 && e <= 0) n = n.childNodes[t - 1], t = Vt(n);
        else if (n.nodeType == 1 && t < n.childNodes.length && e >= 0) n = n.childNodes[t], t = 0;
        else return null;
    }
}
function en(n, t) {
    return n.nodeType != 1 ? 0 : (t && n.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < n.childNodes.length && n.childNodes[t].contentEditable == "false" ? 2 : 0);
}
var Di = class {
    constructor(){
        this.changes = [];
    }
    compareRange(t, e) {
        le1(t, e, this.changes);
    }
    comparePoint(t, e) {
        le1(t, e, this.changes);
    }
};
function sn(n, t, e) {
    let i = new Di;
    return f10.compare(n, t, e, i), i.changes;
}
function nn(n, t) {
    for(let e = n; e && e != t; e = e.assignedSlot || e.parentNode)if (e.nodeType == 1 && e.contentEditable == "false") return !0;
    return !1;
}
function rn(n, t, e = 1) {
    let i = n.charCategorizer(t), s = n.doc.lineAt(t), r = t - s.from;
    if (s.length == 0) return p48.cursor(t);
    r == 0 ? e = 1 : r == s.length && (e = -1);
    let o = r, l = r;
    e < 0 ? o = A6(s.text, r, !1) : l = A6(s.text, r);
    let h = i(s.text.slice(o, l));
    for(; o > 0;){
        let a = A6(s.text, o, !1);
        if (i(s.text.slice(a, o)) != h) break;
        o = a;
    }
    for(; l < s.length;){
        let a = A6(s.text, l);
        if (i(s.text.slice(l, a)) != h) break;
        l = a;
    }
    return p48.range(o + s.from, l + s.from);
}
function on(n, t) {
    return t.left > n ? t.left - n : Math.max(0, n - t.right);
}
function ln(n, t) {
    return t.top > n ? t.top - n : Math.max(0, n - t.bottom);
}
function we1(n, t) {
    return n.top < t.bottom - 1 && n.bottom > t.top + 1;
}
function ki(n, t) {
    return t < n.top ? {
        top: t,
        left: n.left,
        right: n.right,
        bottom: n.bottom
    } : n;
}
function Oi(n, t) {
    return t > n.bottom ? {
        top: n.top,
        left: n.left,
        right: n.right,
        bottom: t
    } : n;
}
function Se1(n, t, e) {
    let i, s, r, o, l, h, a, c;
    for(let u = n.firstChild; u; u = u.nextSibling){
        let g = ut(u);
        for(let m = 0; m < g.length; m++){
            let b = g[m];
            s && we1(s, b) && (b = ki(Oi(b, s.bottom), s.top));
            let y = on(t, b), N = ln(e, b);
            if (y == 0 && N == 0) return u.nodeType == 3 ? Ti(u, t, e) : Se1(u, t, e);
            (!i || o > N || o == N && r > y) && (i = u, s = b, r = y, o = N), y == 0 ? e > b.bottom && (!a || a.bottom < b.bottom) ? (l = u, a = b) : e < b.top && (!c || c.top > b.top) && (h = u, c = b) : a && we1(a, b) ? a = Oi(a, b.bottom) : c && we1(c, b) && (c = ki(c, b.top));
        }
    }
    if (a && a.bottom >= e ? (i = l, s = a) : c && c.top <= e && (i = h, s = c), !i) return {
        node: n,
        offset: 0
    };
    let f = Math.max(s.left, Math.min(s.right, t));
    if (i.nodeType == 3) return Ti(i, f, e);
    if (!r && i.contentEditable == "true") return Se1(i, f, e);
    let d = Array.prototype.indexOf.call(n.childNodes, i) + (t >= (s.left + s.right) / 2 ? 1 : 0);
    return {
        node: n,
        offset: d
    };
}
function Ti(n, t, e) {
    let i = n.nodeValue.length, s = -1, r = 1000000000, o = 0;
    for(let l = 0; l < i; l++){
        let h = wt(n, l, l + 1).getClientRects();
        for(let a = 0; a < h.length; a++){
            let c = h[a];
            if (c.top == c.bottom) continue;
            o || (o = t - c.left);
            let f = (c.top > e ? c.top - e : e - c.bottom) - 1;
            if (c.left - 1 <= t && c.right + 1 >= t && f < r) {
                let d = t >= (c.left + c.right) / 2, u = d;
                if ((p4.chrome || p4.gecko) && wt(n, l).getBoundingClientRect().left == c.right && (u = !d), f <= 0) return {
                    node: n,
                    offset: l + (u ? 1 : 0)
                };
                s = l + (u ? 1 : 0), r = f;
            }
        }
    }
    return {
        node: n,
        offset: s > -1 ? s : o > 0 ? n.nodeValue.length : 0
    };
}
function Ri(n, { x: t , y: e  }, i, s = -1) {
    var r1;
    let o = n.contentDOM.getBoundingClientRect(), l = o.top + n.viewState.paddingTop, h, { docHeight: a  } = n.viewState, c = e - l;
    if (c < 0) return 0;
    if (c > a) return n.state.doc.length;
    for(let y = n.defaultLineHeight / 2, N = !1; h = n.elementAtHeight(c), h.type != A9.Text;)for(; c = s > 0 ? h.bottom + y : h.top - y, !(c >= 0 && c <= a);){
        if (N) return i ? null : 0;
        N = !0, s = -s;
    }
    e = l + c;
    let f = h.from;
    if (f < n.viewport.from) return n.viewport.from == 0 ? 0 : i ? null : Li(n, o, h, t, e);
    if (f > n.viewport.to) return n.viewport.to == n.state.doc.length ? n.state.doc.length : i ? null : Li(n, o, h, t, e);
    let d = n.dom.ownerDocument, u = n.root.elementFromPoint ? n.root : d, g = u.elementFromPoint(t, e);
    g && !n.contentDOM.contains(g) && (g = null), g || (t = Math.max(o.left + 1, Math.min(o.right - 1, t)), g = u.elementFromPoint(t, e), g && !n.contentDOM.contains(g) && (g = null));
    let m, b = -1;
    if (g && ((r1 = n.docView.nearest(g)) === null || r1 === void 0 ? void 0 : r1.isEditable) != !1) {
        if (d.caretPositionFromPoint) {
            let y = d.caretPositionFromPoint(t, e);
            y && ({ offsetNode: m , offset: b  } = y);
        } else if (d.caretRangeFromPoint) {
            let y = d.caretRangeFromPoint(t, e);
            y && ({ startContainer: m , startOffset: b  } = y, p4.safari && hn(m, b, t) && (m = void 0));
        }
    }
    if (!m || !n.docView.dom.contains(m)) {
        let y = E2.find(n.docView, f);
        if (!y) return c > h.top + h.height / 2 ? h.to : h.from;
        ({ node: m , offset: b  } = Se1(y.dom, t, e));
    }
    return n.docView.posFromDOM(m, b);
}
function Li(n, t, e, i, s) {
    let r = Math.round((i - t.left) * n.defaultCharacterWidth);
    n.lineWrapping && e.height > n.defaultLineHeight * 1.5 && (r += Math.floor((s - e.top) / n.defaultLineHeight) * n.viewState.heightOracle.lineLength);
    let o = n.state.sliceDoc(e.from, e.to);
    return e.from + O16(o, r, n.state.tabSize);
}
function hn(n, t, e) {
    let i;
    if (n.nodeType != 3 || t != (i = n.nodeValue.length)) return !1;
    for(let s = n.nextSibling; s; s = s.nextSibling)if (s.nodeType != 1 || s.nodeName != "BR") return !1;
    return wt(n, i - 1, i).getBoundingClientRect().left > e;
}
function an(n, t, e, i) {
    let s = n.state.doc.lineAt(t.head), r = !i || !n.lineWrapping ? null : n.coordsAtPos(t.assoc < 0 && t.head > s.from ? t.head - 1 : t.head);
    if (r) {
        let h = n.dom.getBoundingClientRect(), a = n.posAtCoords({
            x: e == (n.textDirection == P4.LTR) ? h.right - 1 : h.left + 1,
            y: (r.top + r.bottom) / 2
        });
        if (a != null) return p48.cursor(a, e ? -1 : 1);
    }
    let o = E2.find(n.docView, t.head), l = o ? e ? o.posAtEnd : o.posAtStart : e ? s.to : s.from;
    return p48.cursor(l, e ? -1 : 1);
}
function Bi(n, t, e, i) {
    let s = n.state.doc.lineAt(t.head), r = n.bidiSpans(s);
    for(let o = t, l = null;;){
        let h = Ai(s, r, n.textDirection, o, e), a = xi;
        if (!h) {
            if (s.number == (e ? n.state.doc.lines : 1)) return o;
            a = `
`, s = n.state.doc.line(s.number + (e ? 1 : -1)), r = n.bidiSpans(s), h = p48.cursor(e ? s.from : s.to);
        }
        if (l) {
            if (!l(a)) return o;
        } else {
            if (!i) return h;
            l = i(a);
        }
        o = h;
    }
}
function cn(n, t, e) {
    let i = n.state.charCategorizer(t), s = i(e);
    return (r)=>{
        let o = i(r);
        return s == T.Space && (s = o), s == o;
    };
}
function fn(n, t, e, i) {
    let s = t.head, r = e ? 1 : -1;
    if (s == (e ? n.state.doc.length : 0)) return p48.cursor(s);
    let o = t.goalColumn, l, h = n.contentDOM.getBoundingClientRect(), a = n.coordsAtPos(s), c = n.documentTop;
    if (a) o == null && (o = a.left - h.left), l = r < 0 ? a.top : a.bottom;
    else {
        let u = n.viewState.lineBlockAt(s - c);
        o == null && (o = Math.min(h.right - h.left, n.defaultCharacterWidth * (s - u.from))), l = (r < 0 ? u.top : u.bottom) + c;
    }
    let f = h.left + o, d = i ?? n.defaultLineHeight >> 1;
    for(let u = 0;; u += 10){
        let g = l + (d + u) * r, m = Ri(n, {
            x: f,
            y: g
        }, !1, r);
        if (g < h.top || g > h.bottom || (r < 0 ? m < s : m > s)) return p48.cursor(m, void 0, void 0, o);
    }
}
function xe1(n, t, e) {
    let i = n.pluginField(V1.atomicRanges);
    for(;;){
        let s = !1;
        for (let r of i)r.between(e.from - 1, e.from + 1, (o, l, h)=>{
            e.from > o && e.from < l && (e = t.from > e.from ? p48.cursor(o, 1) : p48.cursor(l, -1), s = !0);
        });
        if (!s) return e;
    }
}
var Ei = class {
    constructor(t){
        this.lastKeyCode = 0, this.lastKeyTime = 0, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.rapidCompositionStart = !1, this.mouseSelection = null;
        for(let e in O2){
            let i = O2[e];
            t.contentDOM.addEventListener(e, (s)=>{
                e == "keydown" && this.keydown(t, s) || !Vi(t, s) || this.ignoreDuringComposition(s) || (this.mustFlushObserver(s) && t.observer.forceFlush(), this.runCustomHandlers(e, t, s) ? s.preventDefault() : i(t, s));
            }), this.registeredEvents.push(e);
        }
        this.notifiedFocused = t.hasFocus, this.ensureHandlers(t), p4.safari && t.contentDOM.addEventListener("input", ()=>null
        );
    }
    setSelectionOrigin(t) {
        this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
    }
    ensureHandlers(t) {
        let e = this.customHandlers = t.pluginField(mi);
        for (let i of e)for(let s in i.handlers)this.registeredEvents.indexOf(s) < 0 && s != "scroll" && (this.registeredEvents.push(s), t.contentDOM.addEventListener(s, (r)=>{
            !Vi(t, r) || this.runCustomHandlers(s, t, r) && r.preventDefault();
        }));
    }
    runCustomHandlers(t, e, i) {
        for (let s of this.customHandlers){
            let r = s.handlers[t];
            if (r) try {
                if (r.call(s.plugin, i, e) || i.defaultPrevented) return !0;
            } catch (o) {
                lt(e.state, o);
            }
        }
        return !1;
    }
    runScrollHandlers(t, e) {
        for (let i of this.customHandlers){
            let s = i.handlers.scroll;
            if (s) try {
                s.call(i.plugin, e, t);
            } catch (r) {
                lt(t.state, r);
            }
        }
    }
    keydown(t, e) {
        if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), this.screenKeyEvent(t, e)) return !0;
        if (p4.android && p4.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8)) return t.observer.delayAndroidKey(e.key, e.keyCode), !0;
        let i;
        return p4.ios && (i = Pi.find((s)=>s.keyCode == e.keyCode
        )) && !(e.ctrlKey || e.altKey || e.metaKey) && !e.synthetic ? (this.pendingIOSKey = i, setTimeout(()=>this.flushIOSKey(t)
        , 250), !0) : !1;
    }
    flushIOSKey(t) {
        let e = this.pendingIOSKey;
        return e ? (this.pendingIOSKey = void 0, St(t.contentDOM, e.key, e.keyCode)) : !1;
    }
    ignoreDuringComposition(t) {
        return /^key/.test(t.type) ? this.composing > 0 ? !0 : p4.safari && Date.now() - this.compositionEndedAt < 500 ? (this.compositionEndedAt = 0, !0) : !1 : !1;
    }
    screenKeyEvent(t, e) {
        let i = e.keyCode == 9 && Date.now() < this.lastEscPress + 2000;
        return e.keyCode == 27 ? this.lastEscPress = Date.now() : Hi.indexOf(e.keyCode) < 0 && (this.lastEscPress = 0), i;
    }
    mustFlushObserver(t) {
        return t.type == "keydown" && t.keyCode != 229 || t.type == "compositionend" && !p4.ios;
    }
    startMouseSelection(t) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t;
    }
    update(t) {
        this.mouseSelection && this.mouseSelection.update(t), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
    }
    destroy() {
        this.mouseSelection && this.mouseSelection.destroy();
    }
}, Pi = [
    {
        key: "Backspace",
        keyCode: 8,
        inputType: "deleteContentBackward"
    },
    {
        key: "Enter",
        keyCode: 13,
        inputType: "insertParagraph"
    },
    {
        key: "Delete",
        keyCode: 46,
        inputType: "deleteContentForward"
    }
], Hi = [
    16,
    17,
    18,
    20,
    91,
    92,
    224,
    225
], Ni = class {
    constructor(t, e, i, s){
        this.view = t, this.style = i, this.mustSelect = s, this.lastEvent = e;
        let r = t.contentDOM.ownerDocument;
        r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(w1.allowMultipleSelections) && un(t, e), this.dragMove = dn(t, e), this.dragging = gn(t, e) && Ae1(e) == 1 ? null : !1, this.dragging === !1 && (e.preventDefault(), this.select(e));
    }
    move(t) {
        if (t.buttons == 0) return this.destroy();
        this.dragging === !1 && this.select(this.lastEvent = t);
    }
    up(t) {
        this.dragging == null && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy();
    }
    destroy() {
        let t = this.view.contentDOM.ownerDocument;
        t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = null;
    }
    select(t) {
        let e = this.style.get(t, this.extend, this.multiple);
        (this.mustSelect || !e.eq(this.view.state.selection) || e.main.assoc != this.view.state.selection.main.assoc) && this.view.dispatch({
            selection: e,
            userEvent: "select.pointer",
            scrollIntoView: !0
        }), this.mustSelect = !1;
    }
    update(t) {
        t.docChanged && this.dragging && (this.dragging = this.dragging.map(t.changes)), this.style.update(t) && setTimeout(()=>this.select(this.lastEvent)
        , 20);
    }
};
function un(n, t) {
    let e = n.state.facet(hi);
    return e.length ? e[0](t) : p4.mac ? t.metaKey : t.ctrlKey;
}
function dn(n, t) {
    let e = n.state.facet(ai);
    return e.length ? e[0](t) : p4.mac ? !t.altKey : !t.ctrlKey;
}
function gn(n, t) {
    let { main: e  } = n.state.selection;
    if (e.empty) return !1;
    let i = Ht(n.root);
    if (i.rangeCount == 0) return !0;
    let s = i.getRangeAt(0).getClientRects();
    for(let r = 0; r < s.length; r++){
        let o = s[r];
        if (o.left <= t.clientX && o.right >= t.clientX && o.top <= t.clientY && o.bottom >= t.clientY) return !0;
    }
    return !1;
}
function Vi(n, t) {
    if (!t.bubbles) return !0;
    if (t.defaultPrevented) return !1;
    for(let e = t.target, i; e != n.contentDOM; e = e.parentNode)if (!e || e.nodeType == 11 || (i = M2.get(e)) && i.ignoreEvent(t)) return !1;
    return !0;
}
var O2 = Object.create(null), Wi = p4.ie && p4.ie_version < 15 || p4.ios && p4.webkit_version < 604;
function pn(n) {
    let t = n.dom.parentNode;
    if (!t) return;
    let e = t.appendChild(document.createElement("textarea"));
    e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(()=>{
        n.focus(), e.remove(), Fi(n, e.value);
    }, 50);
}
function Fi(n, t) {
    let { state: e  } = n, i, s = 1, r = e.toText(t), o = r.lines == e.selection.ranges.length;
    if (ve1 != null && e.selection.ranges.every((h)=>h.empty
    ) && ve1 == r.toString()) {
        let h = -1;
        i = e.changeByRange((a)=>{
            let c = e.doc.lineAt(a.from);
            if (c.from == h) return {
                range: a
            };
            h = c.from;
            let f = e.toText((o ? r.line(s++).text : t) + e.lineBreak);
            return {
                changes: {
                    from: c.from,
                    insert: f
                },
                range: p48.cursor(a.from + f.length)
            };
        });
    } else o ? i = e.changeByRange((h)=>{
        let a = r.line(s++);
        return {
            changes: {
                from: h.from,
                to: h.to,
                insert: a.text
            },
            range: p48.cursor(h.from + a.length)
        };
    }) : i = e.replaceSelection(r);
    n.dispatch(i, {
        userEvent: "input.paste",
        scrollIntoView: !0
    });
}
O2.keydown = (n, t)=>{
    n.inputState.setSelectionOrigin("select");
};
var zi = 0;
O2.touchstart = (n, t)=>{
    zi = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
};
O2.touchmove = (n)=>{
    n.inputState.setSelectionOrigin("select.pointer");
};
O2.mousedown = (n, t)=>{
    if (n.observer.flush(), zi > Date.now() - 2000 && Ae1(t) == 1) return;
    let e = null;
    for (let i of n.state.facet(ci))if (e = i(n, t), e) break;
    if (!e && t.button == 0 && (e = yn(n, t)), e) {
        let i = n.root.activeElement != n.contentDOM;
        i && n.observer.ignore(()=>Ge(n.contentDOM)
        ), n.inputState.startMouseSelection(new Ni(n, t, e, i));
    }
};
function Ii(n, t, e, i) {
    if (i == 1) return p48.cursor(t, e);
    if (i == 2) return rn(n.state, t, e);
    {
        let s = E2.find(n.docView, t), r = n.state.doc.lineAt(s ? s.posAtEnd : t), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
        return l < n.state.doc.length && l == r.to && l++, p48.range(o, l);
    }
}
var qi = (n, t)=>n >= t.top && n <= t.bottom
, Ki = (n, t, e)=>qi(t, e) && n >= e.left && n <= e.right
;
function mn(n, t, e, i) {
    let s = E2.find(n.docView, t);
    if (!s) return 1;
    let r = t - s.posAtStart;
    if (r == 0) return 1;
    if (r == s.length) return -1;
    let o = s.coordsAt(r, -1);
    if (o && Ki(e, i, o)) return -1;
    let l = s.coordsAt(r, 1);
    return l && Ki(e, i, l) ? 1 : o && qi(i, o) ? -1 : 1;
}
function ji(n, t) {
    let e = n.posAtCoords({
        x: t.clientX,
        y: t.clientY
    }, !1);
    return {
        pos: e,
        bias: mn(n, e, t.clientX, t.clientY)
    };
}
var bn = p4.ie && p4.ie_version <= 11, Gi = null, Yi = 0, $i = 0;
function Ae1(n) {
    if (!bn) return n.detail;
    let t = Gi, e = $i;
    return Gi = n, $i = Date.now(), Yi = !t || e > Date.now() - 400 && Math.abs(t.clientX - n.clientX) < 2 && Math.abs(t.clientY - n.clientY) < 2 ? (Yi + 1) % 3 : 1;
}
function yn(n, t) {
    let e = ji(n, t), i = Ae1(t), s = n.state.selection, r = e, o = t;
    return {
        update (l) {
            l.docChanged && (e && (e.pos = l.changes.mapPos(e.pos)), s = s.map(l.changes), o = null);
        },
        get (l, h, a) {
            let c;
            if (o && l.clientX == o.clientX && l.clientY == o.clientY ? c = r : (c = r = ji(n, l), o = l), !c || !e) return s;
            let f = Ii(n, c.pos, c.bias, i);
            if (e.pos != c.pos && !h) {
                let d = Ii(n, e.pos, e.bias, i), u = Math.min(d.from, f.from), g = Math.max(d.to, f.to);
                f = u < f.from ? p48.range(u, g) : p48.range(g, u);
            }
            return h ? s.replaceRange(s.main.extend(f.from, f.to)) : a ? s.addRange(f) : p48.create([
                f
            ]);
        }
    };
}
O2.dragstart = (n, t)=>{
    let { selection: { main: e  }  } = n.state, { mouseSelection: i  } = n.inputState;
    i && (i.dragging = e), t.dataTransfer && (t.dataTransfer.setData("Text", n.state.sliceDoc(e.from, e.to)), t.dataTransfer.effectAllowed = "copyMove");
};
function Ui(n, t, e, i) {
    if (!e) return;
    let s = n.posAtCoords({
        x: t.clientX,
        y: t.clientY
    }, !1);
    t.preventDefault();
    let { mouseSelection: r  } = n.inputState, o = i && r && r.dragging && r.dragMove ? {
        from: r.dragging.from,
        to: r.dragging.to
    } : null, l = {
        from: s,
        insert: e
    }, h = n.state.changes(o ? [
        o,
        l
    ] : l);
    n.focus(), n.dispatch({
        changes: h,
        selection: {
            anchor: h.mapPos(s, -1),
            head: h.mapPos(s, 1)
        },
        userEvent: o ? "move.drop" : "input.drop"
    });
}
O2.drop = (n, t)=>{
    if (!t.dataTransfer) return;
    if (n.state.readOnly) return t.preventDefault();
    let e = t.dataTransfer.files;
    if (e && e.length) {
        t.preventDefault();
        let i = Array(e.length), s = 0, r = ()=>{
            ++s == e.length && Ui(n, t, i.filter((o)=>o != null
            ).join(n.state.lineBreak), !1);
        };
        for(let o = 0; o < e.length; o++){
            let l = new FileReader;
            l.onerror = r, l.onload = ()=>{
                /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
            }, l.readAsText(e[o]);
        }
    } else Ui(n, t, t.dataTransfer.getData("Text"), !0);
};
O2.paste = (n, t)=>{
    if (n.state.readOnly) return t.preventDefault();
    n.observer.flush();
    let e = Wi ? null : t.clipboardData;
    e ? (Fi(n, e.getData("text/plain")), t.preventDefault()) : pn(n);
};
function wn(n, t) {
    let e = n.dom.parentNode;
    if (!e) return;
    let i = e.appendChild(document.createElement("textarea"));
    i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = t, i.focus(), i.selectionEnd = t.length, i.selectionStart = 0, setTimeout(()=>{
        i.remove(), n.focus();
    }, 50);
}
function Sn(n) {
    let t = [], e = [], i = !1;
    for (let s of n.selection.ranges)s.empty || (t.push(n.sliceDoc(s.from, s.to)), e.push(s));
    if (!t.length) {
        let s = -1;
        for (let { from: r  } of n.selection.ranges){
            let o = n.doc.lineAt(r);
            o.number > s && (t.push(o.text), e.push({
                from: o.from,
                to: Math.min(n.doc.length, o.to + 1)
            })), s = o.number;
        }
        i = !0;
    }
    return {
        text: t.join(n.lineBreak),
        ranges: e,
        linewise: i
    };
}
var ve1 = null;
O2.copy = O2.cut = (n, t)=>{
    let { text: e , ranges: i , linewise: s  } = Sn(n.state);
    if (!e && !s) return;
    ve1 = s ? e : null;
    let r = Wi ? null : t.clipboardData;
    r ? (t.preventDefault(), r.clearData(), r.setData("text/plain", e)) : wn(n, e), t.type == "cut" && !n.state.readOnly && n.dispatch({
        changes: i,
        scrollIntoView: !0,
        userEvent: "delete.cut"
    });
};
O2.focus = O2.blur = (n)=>{
    setTimeout(()=>{
        n.hasFocus != n.inputState.notifiedFocused && n.update([]);
    }, 10);
};
O2.beforeprint = (n)=>{
    n.viewState.printing = !0, n.requestMeasure(), setTimeout(()=>{
        n.viewState.printing = !1, n.requestMeasure();
    }, 2000);
};
function Xi(n, t) {
    if (n.docView.compositionDeco.size) {
        n.inputState.rapidCompositionStart = t;
        try {
            n.update([]);
        } finally{
            n.inputState.rapidCompositionStart = !1;
        }
    }
}
O2.compositionstart = O2.compositionupdate = (n)=>{
    n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0), n.inputState.composing < 0 && (n.inputState.composing = 0, n.docView.compositionDeco.size && (n.observer.flush(), Xi(n, !0)));
};
O2.compositionend = (n)=>{
    n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionFirstChange = null, setTimeout(()=>{
        n.inputState.composing < 0 && Xi(n, !1);
    }, 50);
};
O2.contextmenu = (n)=>{
    n.inputState.lastContextMenu = Date.now();
};
O2.beforeinput = (n, t)=>{
    var e;
    let i;
    if (p4.chrome && p4.android && (i = Pi.find((s)=>s.inputType == t.inputType
    )) && (n.observer.delayAndroidKey(i.key, i.keyCode), i.key == "Backspace" || i.key == "Delete")) {
        let s = ((e = window.visualViewport) === null || e === void 0 ? void 0 : e.height) || 0;
        setTimeout(()=>{
            var r;
            (((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > s + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
        }, 100);
    }
};
var _i = [
    "pre-wrap",
    "normal",
    "pre-line",
    "break-spaces"
], Me = class {
    constructor(){
        this.doc = d.empty, this.lineWrapping = !1, this.direction = P4.LTR, this.heightSamples = {
        }, this.lineHeight = 14, this.charWidth = 7, this.lineLength = 30, this.heightChanged = !1;
    }
    heightForGap(t, e) {
        let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
        return this.lineWrapping && (i += Math.ceil((e - t - i * this.lineLength * 0.5) / this.lineLength)), this.lineHeight * i;
    }
    heightForLine(t) {
        return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
    }
    setDoc(t) {
        return this.doc = t, this;
    }
    mustRefreshForStyle(t, e) {
        return _i.indexOf(t) > -1 != this.lineWrapping || this.direction != e;
    }
    mustRefreshForHeights(t) {
        let e = !1;
        for(let i = 0; i < t.length; i++){
            let s = t[i];
            s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (e = !0, this.heightSamples[Math.floor(s * 10)] = !0);
        }
        return e;
    }
    refresh(t, e, i, s, r, o) {
        let l = _i.indexOf(t) > -1, h = Math.round(i) != Math.round(this.lineHeight) || this.lineWrapping != l || this.direction != e;
        if (this.lineWrapping = l, this.direction = e, this.lineHeight = i, this.charWidth = s, this.lineLength = r, h) {
            this.heightSamples = {
            };
            for(let a = 0; a < o.length; a++){
                let c = o[a];
                c < 0 ? a++ : this.heightSamples[Math.floor(c * 10)] = !0;
            }
        }
        return h;
    }
}, Ce = class {
    constructor(t, e){
        this.from = t, this.heights = e, this.index = 0;
    }
    get more() {
        return this.index < this.heights.length;
    }
}, K1 = class {
    constructor(t, e, i, s, r){
        this.from = t, this.length = e, this.top = i, this.height = s, this.type = r;
    }
    get to() {
        return this.from + this.length;
    }
    get bottom() {
        return this.top + this.height;
    }
    join(t) {
        let e = (Array.isArray(this.type) ? this.type : [
            this
        ]).concat(Array.isArray(t.type) ? t.type : [
            t
        ]);
        return new K1(this.from, this.length + t.length, this.top, this.height + t.height, e);
    }
    moveY(t) {
        return t ? new K1(this.from, this.length, this.top + t, this.height, Array.isArray(this.type) ? this.type.map((e)=>e.moveY(t)
        ) : this.type) : this;
    }
}, x9 = function(n) {
    return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
}(x9 || (x9 = {
})), Kt = 0.001, H1 = class {
    constructor(t, e, i = 2){
        this.length = t, this.height = e, this.flags = i;
    }
    get outdated() {
        return (this.flags & 2) > 0;
    }
    set outdated(t) {
        this.flags = (t ? 2 : 0) | this.flags & ~2;
    }
    setHeight(t, e) {
        this.height != e && (Math.abs(this.height - e) > Kt && (t.heightChanged = !0), this.height = e);
    }
    replace(t, e, i) {
        return H1.of(i);
    }
    decomposeLeft(t, e) {
        e.push(this);
    }
    decomposeRight(t, e) {
        e.push(this);
    }
    applyChanges(t, e, i, s) {
        let r = this;
        for(let o = s.length - 1; o >= 0; o--){
            let { fromA: l , toA: h , fromB: a , toB: c  } = s[o], f = r.lineAt(l, x9.ByPosNoHeight, e, 0, 0), d = f.to >= h ? f : r.lineAt(h, x9.ByPosNoHeight, e, 0, 0);
            for(c += d.to - h, h = d.to; o > 0 && f.from <= s[o - 1].toA;)l = s[o - 1].fromA, a = s[o - 1].fromB, o--, l < f.from && (f = r.lineAt(l, x9.ByPosNoHeight, e, 0, 0));
            a += f.from - l, l = f.from;
            let u = jt.build(i, t, a, c);
            r = r.replace(l, h, u);
        }
        return r.updateHeight(i, 0);
    }
    static empty() {
        return new W1(0, 0);
    }
    static of(t) {
        if (t.length == 1) return t[0];
        let e = 0, i = t.length, s = 0, r = 0;
        for(;;)if (e == i) if (s > r * 2) {
            let l = t[e - 1];
            l.break ? t.splice(--e, 1, l.left, null, l.right) : t.splice(--e, 1, l.left, l.right), i += 1 + l.break, s -= l.size;
        } else if (r > s * 2) {
            let l = t[i];
            l.break ? t.splice(i, 1, l.left, null, l.right) : t.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
        } else break;
        else if (s < r) {
            let l = t[e++];
            l && (s += l.size);
        } else {
            let l = t[--i];
            l && (r += l.size);
        }
        let o = 0;
        return t[e - 1] == null ? (o = 1, e--) : t[e] == null && (o = 1, i++), new Ji(H1.of(t.slice(0, e)), o, H1.of(t.slice(i)));
    }
};
H1.prototype.size = 1;
var De = class extends H1 {
    constructor(t, e, i){
        super(t, e);
        this.type = i;
    }
    blockAt(t, e, i, s) {
        return new K1(s, this.length, i, this.height, this.type);
    }
    lineAt(t, e, i, s, r) {
        return this.blockAt(0, i, s, r);
    }
    forEachLine(t, e, i, s, r, o) {
        o(this.blockAt(0, i, s, r));
    }
    updateHeight(t, e = 0, i = !1, s) {
        return s && s.from <= e && s.more && this.setHeight(t, s.heights[s.index++]), this.outdated = !1, this;
    }
    toString() {
        return `block(${this.length})`;
    }
}, W1 = class extends De {
    constructor(t, e){
        super(t, e, A9.Text);
        this.collapsed = 0, this.widgetHeight = 0;
    }
    replace(t, e, i) {
        let s = i[0];
        return i.length == 1 && (s instanceof W1 || s instanceof T2 && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof T2 ? s = new W1(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : H1.of(i);
    }
    updateHeight(t, e = 0, i = !1, s) {
        return s && s.from <= e && s.more ? this.setHeight(t, s.heights[s.index++]) : (i || this.outdated) && this.setHeight(t, Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed))), this.outdated = !1, this;
    }
    toString() {
        return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
    }
}, T2 = class extends H1 {
    constructor(t){
        super(t, 0);
    }
    lines(t, e) {
        let i = t.lineAt(e).number, s = t.lineAt(e + this.length).number;
        return {
            firstLine: i,
            lastLine: s,
            lineHeight: this.height / (s - i + 1)
        };
    }
    blockAt(t, e, i, s) {
        let { firstLine: r , lastLine: o , lineHeight: l  } = this.lines(e, s), h = Math.max(0, Math.min(o - r, Math.floor((t - i) / l))), { from: a , length: c  } = e.line(r + h);
        return new K1(a, c, i + l * h, l, A9.Text);
    }
    lineAt(t, e, i, s, r) {
        if (e == x9.ByHeight) return this.blockAt(t, i, s, r);
        if (e == x9.ByPosNoHeight) {
            let { from: f , to: d  } = i.lineAt(t);
            return new K1(f, d - f, 0, 0, A9.Text);
        }
        let { firstLine: o , lineHeight: l  } = this.lines(i, r), { from: h , length: a , number: c  } = i.lineAt(t);
        return new K1(h, a, s + l * (c - o), l, A9.Text);
    }
    forEachLine(t, e, i, s, r, o) {
        let { firstLine: l , lineHeight: h  } = this.lines(i, r);
        for(let a = Math.max(t, r), c = Math.min(r + this.length, e); a <= c;){
            let f = i.lineAt(a);
            a == t && (s += h * (f.number - l)), o(new K1(f.from, f.length, s, h, A9.Text)), s += h, a = f.to + 1;
        }
    }
    replace(t, e, i) {
        let s = this.length - e;
        if (s > 0) {
            let r = i[i.length - 1];
            r instanceof T2 ? i[i.length - 1] = new T2(r.length + s) : i.push(null, new T2(s - 1));
        }
        if (t > 0) {
            let r = i[0];
            r instanceof T2 ? i[0] = new T2(t + r.length) : i.unshift(new T2(t - 1), null);
        }
        return H1.of(i);
    }
    decomposeLeft(t, e) {
        e.push(new T2(t - 1), null);
    }
    decomposeRight(t, e) {
        e.push(null, new T2(this.length - t - 1));
    }
    updateHeight(t, e = 0, i = !1, s) {
        let r = e + this.length;
        if (s && s.from <= e + this.length && s.more) {
            let o = [], l = Math.max(e, s.from), h = -1, a = t.heightChanged;
            for(s.from > e && o.push(new T2(s.from - e - 1).updateHeight(t, e)); l <= r && s.more;){
                let f = t.doc.lineAt(l).length;
                o.length && o.push(null);
                let d = s.heights[s.index++];
                h == -1 ? h = d : Math.abs(d - h) >= Kt && (h = -2);
                let u = new W1(f, d);
                u.outdated = !1, o.push(u), l += f + 1;
            }
            l <= r && o.push(null, new T2(r - l).updateHeight(t, l));
            let c = H1.of(o);
            return t.heightChanged = a || h < 0 || Math.abs(c.height - this.height) >= Kt || Math.abs(h - this.lines(t.doc, e).lineHeight) >= Kt, c;
        } else (i || this.outdated) && (this.setHeight(t, t.heightForGap(e, e + this.length)), this.outdated = !1);
        return this;
    }
    toString() {
        return `gap(${this.length})`;
    }
}, Ji = class extends H1 {
    constructor(t, e, i){
        super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0));
        this.left = t, this.right = i, this.size = t.size + i.size;
    }
    get break() {
        return this.flags & 1;
    }
    blockAt(t, e, i, s) {
        let r = i + this.left.height;
        return t < r ? this.left.blockAt(t, e, i, s) : this.right.blockAt(t, e, r, s + this.left.length + this.break);
    }
    lineAt(t, e, i, s, r) {
        let o = s + this.left.height, l = r + this.left.length + this.break, h = e == x9.ByHeight ? t < o : t < l, a = h ? this.left.lineAt(t, e, i, s, r) : this.right.lineAt(t, e, i, o, l);
        if (this.break || (h ? a.to < l : a.from > l)) return a;
        let c = e == x9.ByPosNoHeight ? x9.ByPosNoHeight : x9.ByPos;
        return h ? a.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, s, r).join(a);
    }
    forEachLine(t, e, i, s, r, o) {
        let l = s + this.left.height, h = r + this.left.length + this.break;
        if (this.break) t < h && this.left.forEachLine(t, e, i, s, r, o), e >= h && this.right.forEachLine(t, e, i, l, h, o);
        else {
            let a = this.lineAt(h, x9.ByPos, i, s, r);
            t < a.from && this.left.forEachLine(t, a.from - 1, i, s, r, o), a.to >= t && a.from <= e && o(a), e > a.to && this.right.forEachLine(a.to + 1, e, i, l, h, o);
        }
    }
    replace(t, e, i) {
        let s = this.left.length + this.break;
        if (e < s) return this.balanced(this.left.replace(t, e, i), this.right);
        if (t > this.left.length) return this.balanced(this.left, this.right.replace(t - s, e - s, i));
        let r = [];
        t > 0 && this.decomposeLeft(t, r);
        let o = r.length;
        for (let l of i)r.push(l);
        if (t > 0 && Zi(r, o - 1), e < this.length) {
            let l = r.length;
            this.decomposeRight(e, r), Zi(r, l);
        }
        return H1.of(r);
    }
    decomposeLeft(t, e) {
        let i = this.left.length;
        if (t <= i) return this.left.decomposeLeft(t, e);
        e.push(this.left), this.break && (i++, t >= i && e.push(null)), t > i && this.right.decomposeLeft(t - i, e);
    }
    decomposeRight(t, e) {
        let i = this.left.length, s = i + this.break;
        if (t >= s) return this.right.decomposeRight(t - s, e);
        t < i && this.left.decomposeRight(t, e), this.break && t < s && e.push(null), e.push(this.right);
    }
    balanced(t, e) {
        return t.size > 2 * e.size || e.size > 2 * t.size ? H1.of(this.break ? [
            t,
            null,
            e
        ] : [
            t,
            e
        ]) : (this.left = t, this.right = e, this.height = t.height + e.height, this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
    }
    updateHeight(t, e = 0, i = !1, s) {
        let { left: r , right: o  } = this, l = e + r.length + this.break, h = null;
        return s && s.from <= e + r.length && s.more ? h = r = r.updateHeight(t, e, i, s) : r.updateHeight(t, e, i), s && s.from <= l + o.length && s.more ? h = o = o.updateHeight(t, l, i, s) : o.updateHeight(t, l, i), h ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
    }
    toString() {
        return this.left + (this.break ? " " : "-") + this.right;
    }
};
function Zi(n, t) {
    let e, i;
    n[t] == null && (e = n[t - 1]) instanceof T2 && (i = n[t + 1]) instanceof T2 && n.splice(t - 1, 3, new T2(e.length + 1 + i.length));
}
var xn = 5, jt = class {
    constructor(t, e){
        this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
    }
    get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    }
    span(t, e) {
        if (this.lineStart > -1) {
            let i = Math.min(e, this.lineEnd), s = this.nodes[this.nodes.length - 1];
            s instanceof W1 ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new W1(i - this.pos, -1)), this.writtenTo = i, e > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
        }
        this.pos = e;
    }
    point(t, e, i) {
        if (t < e || i.heightRelevant) {
            let s = i.widget ? i.widget.estimatedHeight : 0;
            s < 0 && (s = this.oracle.lineHeight);
            let r = e - t;
            i.block ? this.addBlock(new De(r, s, i.type)) : (r || s >= xn) && this.addLineDeco(s, r);
        } else e > t && this.span(t, e);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
    }
    enterLine() {
        if (this.lineStart > -1) return;
        let { from: t , to: e  } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new W1(this.pos - t, -1)), this.writtenTo = this.pos;
    }
    blankContent(t, e) {
        let i = new T2(e - t);
        return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
    }
    ensureLine() {
        this.enterLine();
        let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (t instanceof W1) return t;
        let e = new W1(0, -1);
        return this.nodes.push(e), e;
    }
    addBlock(t) {
        this.enterLine(), t.type == A9.WidgetAfter && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, t.type != A9.WidgetBefore && (this.covering = t);
    }
    addLineDeco(t, e) {
        let i = this.ensureLine();
        i.length += e, i.collapsed += e, i.widgetHeight = Math.max(i.widgetHeight, t), this.writtenTo = this.pos = this.pos + e;
    }
    finish(t) {
        let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
        this.lineStart > -1 && !(e instanceof W1) && !this.isCovered ? this.nodes.push(new W1(0, -1)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
        let i = t;
        for (let s of this.nodes)s instanceof W1 && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
        return this.nodes;
    }
    static build(t, e, i, s) {
        let r = new jt(i, t);
        return f10.spans(e, i, s, r, 0), r.finish(i);
    }
};
function An(n, t, e) {
    let i = new Qi;
    return f10.compare(n, t, e, i, 0), i.changes;
}
var Qi = class {
    constructor(){
        this.changes = [];
    }
    compareRange() {
    }
    comparePoint(t, e, i, s) {
        (t < e || i && i.heightRelevant || s && s.heightRelevant) && le1(t, e, this.changes, 5);
    }
};
function vn(n, t) {
    let e = n.getBoundingClientRect(), i = Math.max(0, e.left), s = Math.min(innerWidth, e.right), r = Math.max(0, e.top), o = Math.min(innerHeight, e.bottom), l = n.ownerDocument.body;
    for(let h = n.parentNode; h && h != l;)if (h.nodeType == 1) {
        let a = h, c = window.getComputedStyle(a);
        if ((a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth) && c.overflow != "visible") {
            let f = a.getBoundingClientRect();
            i = Math.max(i, f.left), s = Math.min(s, f.right), r = Math.max(r, f.top), o = Math.min(o, f.bottom);
        }
        h = c.position == "absolute" || c.position == "fixed" ? a.offsetParent : a.parentNode;
    } else if (h.nodeType == 11) h = h.host;
    else break;
    return {
        left: i - e.left,
        right: Math.max(i, s) - e.left,
        top: r - (e.top + t),
        bottom: Math.max(r, o) - (e.top + t)
    };
}
var Gt = class {
    constructor(t, e, i){
        this.from = t, this.to = e, this.size = i;
    }
    static same(t, e) {
        if (t.length != e.length) return !1;
        for(let i = 0; i < t.length; i++){
            let s = t[i], r = e[i];
            if (s.from != r.from || s.to != r.to || s.size != r.size) return !1;
        }
        return !0;
    }
    draw(t) {
        return w6.replace({
            widget: new ts(this.size, t)
        }).range(this.from, this.to);
    }
}, ts = class extends Q1 {
    constructor(t, e){
        super();
        this.size = t, this.vertical = e;
    }
    eq(t) {
        return t.size == this.size && t.vertical == this.vertical;
    }
    toDOM() {
        let t = document.createElement("div");
        return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t;
    }
    get estimatedHeight() {
        return this.vertical ? this.size : -1;
    }
}, ke = class {
    constructor(t){
        this.state = t, this.pixelViewport = {
            left: 0,
            right: window.innerWidth,
            top: 0,
            bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.heightOracle = new Me, this.scaler = ss, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1, this.heightMap = H1.empty().applyChanges(t.facet(ht), d.empty, this.heightOracle.setDoc(t.doc), [
            new I2(0, 0, 0, t.doc.length)
        ]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = w6.set(this.lineGaps.map((e)=>e.draw(!1)
        )), this.computeVisibleRanges();
    }
    updateForViewport() {
        let t = [
            this.viewport
        ], { main: e  } = this.state.selection;
        for(let i = 0; i <= 1; i++){
            let s = i ? e.head : e.anchor;
            if (!t.some(({ from: r , to: o  })=>s >= r && s <= o
            )) {
                let { from: r , to: o  } = this.lineBlockAt(s);
                t.push(new Ct(r, o));
            }
        }
        this.viewports = t.sort((i, s)=>i.from - s.from
        ), this.scaler = this.heightMap.height <= 7000000 ? ss : new ns(this.heightOracle.doc, this.heightMap, this.viewports);
    }
    updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, (t)=>{
            this.viewportLines.push(this.scaler.scale == 1 ? t : Dt(t, this.scaler));
        });
    }
    update(t, e = null) {
        let i = this.state;
        this.state = t.state;
        let s = this.state.facet(ht), r = t.changedRanges, o = I2.extendWithRanges(r, An(t.startState.facet(ht), s, t ? t.changes : y1.empty(this.state.doc.length))), l = this.heightMap.height;
        this.heightMap = this.heightMap.applyChanges(s, i.doc, this.heightOracle.setDoc(this.state.doc), o), this.heightMap.height != l && (t.flags |= 2);
        let h = o.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
        (e && (e.range.head < h.from || e.range.head > h.to) || !this.viewportIsAppropriate(h)) && (h = this.getViewport(0, e));
        let a = !t.changes.empty || t.flags & 2 || h.from != this.viewport.from || h.to != this.viewport.to;
        this.viewport = h, this.updateForViewport(), a && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4000) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && (this.mustEnforceCursorAssoc = !0);
    }
    measure(t) {
        let e = t.contentDOM, i = window.getComputedStyle(e), s = this.heightOracle, r = i.whiteSpace, o = i.direction == "rtl" ? P4.RTL : P4.LTR, l = this.heightOracle.mustRefreshForStyle(r, o), h = l || this.mustMeasureContent || this.contentDOMHeight != e.clientHeight, a = 0, c = 0;
        if (h) {
            this.mustMeasureContent = !1, this.contentDOMHeight = e.clientHeight;
            let y = parseInt(i.paddingTop) || 0, N = parseInt(i.paddingBottom) || 0;
            (this.paddingTop != y || this.paddingBottom != N) && (a |= 8, this.paddingTop = y, this.paddingBottom = N);
        }
        let f = this.printing ? {
            top: -100000000,
            bottom: 100000000,
            left: -100000000,
            right: 100000000
        } : vn(e, this.paddingTop), d = f.top - this.pixelViewport.top, u = f.bottom - this.pixelViewport.bottom;
        this.pixelViewport = f;
        let g = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (g != this.inView && (this.inView = g, g && (h = !0)), !this.inView) return 0;
        let m = e.clientWidth;
        if ((this.contentDOMWidth != m || this.editorHeight != t.scrollDOM.clientHeight || this.editorWidth != t.scrollDOM.clientWidth) && (this.contentDOMWidth = m, this.editorHeight = t.scrollDOM.clientHeight, this.editorWidth = t.scrollDOM.clientWidth, a |= 8), h) {
            let y = t.docView.measureVisibleLineHeights();
            if (s.mustRefreshForHeights(y) && (l = !0), l || s.lineWrapping && Math.abs(m - this.contentDOMWidth) > s.charWidth) {
                let { lineHeight: N , charWidth: v  } = t.docView.measureTextSize();
                l = s.refresh(r, o, N, v, m / v, y), l && (t.docView.minWidth = 0, a |= 8);
            }
            d > 0 && u > 0 ? c = Math.max(d, u) : d < 0 && u < 0 && (c = Math.min(d, u)), s.heightChanged = !1, this.heightMap = this.heightMap.updateHeight(s, 0, l, new Ce(this.viewport.from, y)), s.heightChanged && (a |= 2);
        }
        let b = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return b && (this.viewport = this.getViewport(c, this.scrollTarget)), this.updateForViewport(), (a & 2 || b) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4000) && this.updateLineGaps(this.ensureLineGaps(l ? [] : this.lineGaps)), a |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), a;
    }
    get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top);
    }
    get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom);
    }
    getViewport(t, e) {
        let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1000 / 2)), s = this.heightMap, r = this.state.doc, { visibleTop: o , visibleBottom: l  } = this, h = new Ct(s.lineAt(o - i * 1000, x9.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - i) * 1000, x9.ByHeight, r, 0, 0).to);
        if (e) {
            let { head: a  } = e.range, c = this.editorHeight;
            if (a < h.from || a > h.to) {
                let f = s.lineAt(a, x9.ByPos, r, 0, 0), d;
                e.y == "center" ? d = (f.top + f.bottom) / 2 - c / 2 : e.y == "start" || e.y == "nearest" && a < h.from ? d = f.top : d = f.bottom - c, h = new Ct(s.lineAt(d - 1000 / 2, x9.ByHeight, r, 0, 0).from, s.lineAt(d + c + 1000 / 2, x9.ByHeight, r, 0, 0).to);
            }
        }
        return h;
    }
    mapViewport(t, e) {
        let i = e.mapPos(t.from, -1), s = e.mapPos(t.to, 1);
        return new Ct(this.heightMap.lineAt(i, x9.ByPos, this.state.doc, 0, 0).from, this.heightMap.lineAt(s, x9.ByPos, this.state.doc, 0, 0).to);
    }
    viewportIsAppropriate({ from: t , to: e  }, i = 0) {
        if (!this.inView) return !0;
        let { top: s  } = this.heightMap.lineAt(t, x9.ByPos, this.state.doc, 0, 0), { bottom: r  } = this.heightMap.lineAt(e, x9.ByPos, this.state.doc, 0, 0), { visibleTop: o , visibleBottom: l  } = this;
        return (t == 0 || s <= o - Math.max(10, Math.min(-i, 250))) && (e == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) && s > o - 2 * 1000 && r < l + 2 * 1000;
    }
    mapLineGaps(t, e) {
        if (!t.length || e.empty) return t;
        let i = [];
        for (let s of t)e.touchesRange(s.from, s.to) || i.push(new Gt(e.mapPos(s.from), e.mapPos(s.to), s.size));
        return i;
    }
    ensureLineGaps(t) {
        let e = [];
        if (this.heightOracle.direction != P4.LTR) return e;
        for (let i of this.viewportLines){
            if (i.length < 4000) continue;
            let s = Mn(i.from, i.to, this.state);
            if (s.total < 4000) continue;
            let r, o;
            if (this.heightOracle.lineWrapping) {
                let a = 2000 / this.heightOracle.lineLength * this.heightOracle.lineHeight;
                r = Yt(s, (this.visibleTop - i.top - a) / i.height), o = Yt(s, (this.visibleBottom - i.top + a) / i.height);
            } else {
                let a = s.total * this.heightOracle.charWidth, c = 2000 * this.heightOracle.charWidth;
                r = Yt(s, (this.pixelViewport.left - c) / a), o = Yt(s, (this.pixelViewport.right + c) / a);
            }
            let l = [];
            r > i.from && l.push({
                from: i.from,
                to: r
            }), o < i.to && l.push({
                from: o,
                to: i.to
            });
            let h = this.state.selection.main;
            h.from >= i.from && h.from <= i.to && is(l, h.from - 10, h.from + 10), !h.empty && h.to >= i.from && h.to <= i.to && is(l, h.to - 10, h.to + 10);
            for (let { from: a , to: c  } of l)c - a > 1000 && e.push(Cn(t, (f)=>f.from >= i.from && f.to <= i.to && Math.abs(f.from - a) < 1000 && Math.abs(f.to - c) < 1000
            ) || new Gt(a, c, this.gapSize(i, a, c, s)));
        }
        return e;
    }
    gapSize(t, e, i, s) {
        let r = es(s, i) - es(s, e);
        return this.heightOracle.lineWrapping ? t.height * r : s.total * this.heightOracle.charWidth * r;
    }
    updateLineGaps(t) {
        Gt.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = w6.set(t.map((e)=>e.draw(this.heightOracle.lineWrapping)
        )));
    }
    computeVisibleRanges() {
        let t = this.state.facet(ht);
        this.lineGaps.length && (t = t.concat(this.lineGapDeco));
        let e = [];
        f10.spans(t, this.viewport.from, this.viewport.to, {
            span (s, r) {
                e.push({
                    from: s,
                    to: r
                });
            },
            point () {
            }
        }, 20);
        let i = e.length != this.visibleRanges.length || this.visibleRanges.some((s, r)=>s.from != e[r].from || s.to != e[r].to
        );
        return this.visibleRanges = e, i ? 4 : 0;
    }
    lineBlockAt(t) {
        return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e)=>e.from <= t && e.to >= t
        ) || Dt(this.heightMap.lineAt(t, x9.ByPos, this.state.doc, 0, 0), this.scaler);
    }
    lineBlockAtHeight(t) {
        return Dt(this.heightMap.lineAt(this.scaler.fromDOM(t), x9.ByHeight, this.state.doc, 0, 0), this.scaler);
    }
    elementAtHeight(t) {
        return Dt(this.heightMap.blockAt(this.scaler.fromDOM(t), this.state.doc, 0, 0), this.scaler);
    }
    get docHeight() {
        return this.scaler.toDOM(this.heightMap.height);
    }
    get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom;
    }
}, Ct = class {
    constructor(t, e){
        this.from = t, this.to = e;
    }
};
function Mn(n, t, e) {
    let i = [], s = n, r = 0;
    return f10.spans(e.facet(ht), n, t, {
        span () {
        },
        point (o, l) {
            o > s && (i.push({
                from: s,
                to: o
            }), r += o - s), s = l;
        }
    }, 20), s < t && (i.push({
        from: s,
        to: t
    }), r += t - s), {
        total: r,
        ranges: i
    };
}
function Yt({ total: n , ranges: t  }, e) {
    if (e <= 0) return t[0].from;
    if (e >= 1) return t[t.length - 1].to;
    let i = Math.floor(n * e);
    for(let s = 0;; s++){
        let { from: r , to: o  } = t[s], l = o - r;
        if (i <= l) return r + i;
        i -= l;
    }
}
function es(n, t) {
    let e = 0;
    for (let { from: i , to: s  } of n.ranges){
        if (t <= s) {
            e += t - i;
            break;
        }
        e += s - i;
    }
    return e / n.total;
}
function is(n, t, e) {
    for(let i = 0; i < n.length; i++){
        let s = n[i];
        if (s.from < e && s.to > t) {
            let r = [];
            s.from < t && r.push({
                from: s.from,
                to: t
            }), s.to > e && r.push({
                from: e,
                to: s.to
            }), n.splice(i, 1, ...r), i += r.length - 1;
        }
    }
}
function Cn(n, t) {
    for (let e of n)if (t(e)) return e;
}
var ss = {
    toDOM (n) {
        return n;
    },
    fromDOM (n) {
        return n;
    },
    scale: 1
}, ns = class {
    constructor(t, e, i){
        let s = 0, r = 0, o = 0;
        this.viewports = i.map(({ from: l , to: h  })=>{
            let a = e.lineAt(l, x9.ByPos, t, 0, 0).top, c = e.lineAt(h, x9.ByPos, t, 0, 0).bottom;
            return s += c - a, {
                from: l,
                to: h,
                top: a,
                bottom: c,
                domTop: 0,
                domBottom: 0
            };
        }), this.scale = (7000000 - s) / (e.height - s);
        for (let l of this.viewports)l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
    }
    toDOM(t) {
        for(let e = 0, i = 0, s = 0;; e++){
            let r = e < this.viewports.length ? this.viewports[e] : null;
            if (!r || t < r.top) return s + (t - i) * this.scale;
            if (t <= r.bottom) return r.domTop + (t - r.top);
            i = r.bottom, s = r.domBottom;
        }
    }
    fromDOM(t) {
        for(let e = 0, i = 0, s = 0;; e++){
            let r = e < this.viewports.length ? this.viewports[e] : null;
            if (!r || t < r.domTop) return i + (t - s) / this.scale;
            if (t <= r.domBottom) return r.top + (t - r.domTop);
            i = r.bottom, s = r.domBottom;
        }
    }
};
function Dt(n, t) {
    if (t.scale == 1) return n;
    let e = t.toDOM(n.top), i = t.toDOM(n.bottom);
    return new K1(n.from, n.length, e, i - e, Array.isArray(n.type) ? n.type.map((s)=>Dt(s, t)
    ) : n.type);
}
var rs = O1.define({
    combine: (n)=>n.join(" ")
}), Oe1 = O1.define({
    combine: (n)=>n.indexOf(!0) > -1
}), Te = x1.newName(), os = x1.newName(), ls = x1.newName(), hs = {
    "&light": "." + os,
    "&dark": "." + ls
};
function Re(n, t, e) {
    return new x1(t, {
        finish (i) {
            return /&/.test(i) ? i.replace(/&\w*/, (s)=>{
                if (s == "&") return n;
                if (!e || !e[s]) throw new RangeError(`Unsupported selector: ${s}`);
                return e[s];
            }) : n + " " + i;
        }
    });
}
var Dn = Re("." + Te, {
    "&.cm-editor": {
        position: "relative !important",
        boxSizing: "border-box",
        "&.cm-focused": {
            outline: "1px dotted #212121"
        },
        display: "flex !important",
        flexDirection: "column"
    },
    ".cm-scroller": {
        display: "flex !important",
        alignItems: "flex-start !important",
        fontFamily: "monospace",
        lineHeight: 1.4,
        height: "100%",
        overflowX: "auto",
        position: "relative",
        zIndex: 0
    },
    ".cm-content": {
        margin: 0,
        flexGrow: 2,
        minHeight: "100%",
        display: "block",
        whiteSpace: "pre",
        wordWrap: "normal",
        boxSizing: "border-box",
        padding: "4px 0",
        outline: "none",
        "&[contenteditable=true]": {
            WebkitUserModify: "read-write-plaintext-only"
        }
    },
    ".cm-lineWrapping": {
        whiteSpace_fallback: "pre-wrap",
        whiteSpace: "break-spaces",
        wordBreak: "break-word",
        overflowWrap: "anywhere"
    },
    "&light .cm-content": {
        caretColor: "black"
    },
    "&dark .cm-content": {
        caretColor: "white"
    },
    ".cm-line": {
        display: "block",
        padding: "0 2px 0 4px"
    },
    ".cm-selectionLayer": {
        zIndex: -1,
        contain: "size style"
    },
    ".cm-selectionBackground": {
        position: "absolute"
    },
    "&light .cm-selectionBackground": {
        background: "#d9d9d9"
    },
    "&dark .cm-selectionBackground": {
        background: "#222"
    },
    "&light.cm-focused .cm-selectionBackground": {
        background: "#d7d4f0"
    },
    "&dark.cm-focused .cm-selectionBackground": {
        background: "#233"
    },
    ".cm-cursorLayer": {
        zIndex: 100,
        contain: "size style",
        pointerEvents: "none"
    },
    "&.cm-focused .cm-cursorLayer": {
        animation: "steps(1) cm-blink 1.2s infinite"
    },
    "@keyframes cm-blink": {
        "0%": {
        },
        "50%": {
            visibility: "hidden"
        },
        "100%": {
        }
    },
    "@keyframes cm-blink2": {
        "0%": {
        },
        "50%": {
            visibility: "hidden"
        },
        "100%": {
        }
    },
    ".cm-cursor, .cm-dropCursor": {
        position: "absolute",
        borderLeft: "1.2px solid black",
        marginLeft: "-0.6px",
        pointerEvents: "none"
    },
    ".cm-cursor": {
        display: "none"
    },
    "&dark .cm-cursor": {
        borderLeftColor: "#444"
    },
    "&.cm-focused .cm-cursor": {
        display: "block"
    },
    "&light .cm-activeLine": {
        backgroundColor: "#f3f9ff"
    },
    "&dark .cm-activeLine": {
        backgroundColor: "#223039"
    },
    "&light .cm-specialChar": {
        color: "red"
    },
    "&dark .cm-specialChar": {
        color: "#f78"
    },
    ".cm-tab": {
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom"
    },
    ".cm-placeholder": {
        color: "#888",
        display: "inline-block",
        verticalAlign: "top"
    },
    ".cm-button": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        padding: ".2em 1em",
        borderRadius: "1px"
    },
    "&light .cm-button": {
        backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
        border: "1px solid #888",
        "&:active": {
            backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
        }
    },
    "&dark .cm-button": {
        backgroundImage: "linear-gradient(#393939, #111)",
        border: "1px solid #888",
        "&:active": {
            backgroundImage: "linear-gradient(#111, #333)"
        }
    },
    ".cm-textfield": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        border: "1px solid silver",
        padding: ".2em .5em"
    },
    "&light .cm-textfield": {
        backgroundColor: "white"
    },
    "&dark .cm-textfield": {
        border: "1px solid #555",
        backgroundColor: "inherit"
    }
}, hs), kn = {
    childList: !0,
    characterData: !0,
    subtree: !0,
    attributes: !0,
    characterDataOldValue: !0
}, Le = p4.ie && p4.ie_version <= 11, as = class {
    constructor(t, e, i){
        this.view = t, this.onChange = e, this.onScrollChanged = i, this.active = !1, this.selectionRange = new je, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.scrollTargets = [], this.intersection = null, this.resize = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((s)=>{
            for (let r of s)this.queue.push(r);
            (p4.ie && p4.ie_version <= 11 || p4.ios && t.composing) && s.some((r)=>r.type == "childList" && r.removedNodes.length || r.type == "characterData" && r.oldValue.length > r.target.nodeValue.length
            ) ? this.flushSoon() : this.flush();
        }), Le && (this.onCharData = (s)=>{
            this.queue.push({
                target: s.target,
                type: "characterData",
                oldValue: s.prevValue
            }), this.flushSoon();
        }), this.onSelectionChange = this.onSelectionChange.bind(this), typeof ResizeObserver == "function" && (this.resize = new ResizeObserver(()=>{
            this.view.docView.lastUpdate < Date.now() - 75 && this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(()=>{
                this.resizeTimeout = -1, this.view.requestMeasure();
            }, 50));
        }), this.resize.observe(t.scrollDOM)), this.start(), this.onScroll = this.onScroll.bind(this), window.addEventListener("scroll", this.onScroll), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((s)=>{
            this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1000)), s.length > 0 && s[s.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
        }, {
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((s)=>{
            s.length > 0 && s[s.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
        }, {
        })), this.listenForScroll(), this.readSelectionRange(), this.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
    }
    onScroll(t) {
        this.intersecting && this.flush(!1), this.onScrollChanged(t);
    }
    updateGaps(t) {
        if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i)=>e != t[i]
        ))) {
            this.gapIntersection.disconnect();
            for (let e of t)this.gapIntersection.observe(e);
            this.gaps = t;
        }
    }
    onSelectionChange(t) {
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let { view: e  } = this, i = this.selectionRange;
        if (e.state.facet(At) ? e.root.activeElement != this.dom : !Xt(e.dom, i)) return;
        let s = i.anchorNode && e.docView.nearest(i.anchorNode);
        s && s.ignoreEvent(t) || ((p4.ie && p4.ie_version <= 11 || p4.android && p4.chrome) && !e.state.selection.main.empty && i.focusNode && Nt(i.focusNode, i.focusOffset, i.anchorNode, i.anchorOffset) ? this.flushSoon() : this.flush(!1));
    }
    readSelectionRange() {
        let { root: t  } = this.view, e = Ht(t), i = p4.safari && t.nodeType == 11 && zs() == this.view.contentDOM && On(this.view) || e;
        return this.selectionRange.eq(i) ? !1 : (this.selectionRange.setRange(i), this.selectionChanged = !0);
    }
    setSelectionRange(t, e) {
        this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1;
    }
    listenForScroll() {
        this.parentCheck = -1;
        let t = 0, e = null;
        for(let i = this.dom; i;)if (i.nodeType == 1) !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
        else if (i.nodeType == 11) i = i.host;
        else break;
        if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
            for (let i of this.scrollTargets)i.removeEventListener("scroll", this.onScroll);
            for (let i1 of this.scrollTargets = e)i1.addEventListener("scroll", this.onScroll);
        }
    }
    ignore(t) {
        if (!this.active) return t();
        try {
            return this.stop(), t();
        } finally{
            this.start(), this.clear();
        }
    }
    start() {
        this.active || (this.observer.observe(this.dom, kn), Le && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
    }
    stop() {
        !this.active || (this.active = !1, this.observer.disconnect(), Le && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
    }
    clear() {
        this.observer.takeRecords(), this.queue.length = 0, this.selectionChanged = !1;
    }
    delayAndroidKey(t, e) {
        this.delayedAndroidKey || requestAnimationFrame(()=>{
            let i = this.delayedAndroidKey;
            this.delayedAndroidKey = null;
            let s = this.view.state;
            St(this.view.contentDOM, i.key, i.keyCode) ? this.processRecords() : this.flush(), this.view.state == s && this.view.update([]);
        }), (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = {
            key: t,
            keyCode: e
        });
    }
    flushSoon() {
        this.delayedFlush < 0 && (this.delayedFlush = window.setTimeout(()=>{
            this.delayedFlush = -1, this.flush();
        }, 20));
    }
    forceFlush() {
        this.delayedFlush >= 0 && (window.clearTimeout(this.delayedFlush), this.delayedFlush = -1, this.flush());
    }
    processRecords() {
        let t = this.queue;
        for (let r of this.observer.takeRecords())t.push(r);
        t.length && (this.queue = []);
        let e = -1, i = -1, s = !1;
        for (let r1 of t){
            let o = this.readMutation(r1);
            !o || (o.typeOver && (s = !0), e == -1 ? { from: e , to: i  } = o : (e = Math.min(o.from, e), i = Math.max(o.to, i)));
        }
        return {
            from: e,
            to: i,
            typeOver: s
        };
    }
    flush(t = !0) {
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return;
        t && this.readSelectionRange();
        let { from: e , to: i , typeOver: s  } = this.processRecords(), r = this.selectionChanged && Xt(this.dom, this.selectionRange);
        if (e < 0 && !r) return;
        this.selectionChanged = !1;
        let o = this.view.state;
        this.onChange(e, i, s), this.view.state == o && this.view.update([]);
    }
    readMutation(t) {
        let e = this.view.docView.nearest(t.target);
        if (!e || e.ignoreMutation(t)) return null;
        if (e.markDirty(t.type == "attributes"), t.type == "attributes" && (e.dirty |= 4), t.type == "childList") {
            let i = cs(e, t.previousSibling || t.target.previousSibling, -1), s = cs(e, t.nextSibling || t.target.nextSibling, 1);
            return {
                from: i ? e.posAfter(i) : e.posAtStart,
                to: s ? e.posBefore(s) : e.posAtEnd,
                typeOver: !1
            };
        } else return t.type == "characterData" ? {
            from: e.posAtStart,
            to: e.posAtEnd,
            typeOver: t.target.nodeValue == t.oldValue
        } : null;
    }
    destroy() {
        var t2, e, i2;
        this.stop(), (t2 = this.intersection) === null || t2 === void 0 || t2.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (i2 = this.resize) === null || i2 === void 0 || i2.disconnect();
        for (let s of this.scrollTargets)s.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("scroll", this.onScroll), this.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout);
    }
};
function cs(n, t, e) {
    for(; t;){
        let i = M2.get(t);
        if (i && i.parent == n) return i;
        let s = t.parentNode;
        t = s != n.dom ? s : e > 0 ? t.nextSibling : t.previousSibling;
    }
    return null;
}
function On(n) {
    let t = null;
    function e(h) {
        h.preventDefault(), h.stopImmediatePropagation(), t = h.getTargetRanges()[0];
    }
    if (n.contentDOM.addEventListener("beforeinput", e, !0), document.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", e, !0), !t) return null;
    let i = t.startContainer, s = t.startOffset, r = t.endContainer, o = t.endOffset, l = n.docView.domAtPos(n.state.selection.main.anchor);
    return Nt(l.node, l.offset, r, o) && ([i, s, r, o] = [
        r,
        o,
        i,
        s
    ]), {
        anchorNode: i,
        anchorOffset: s,
        focusNode: r,
        focusOffset: o
    };
}
function Tn(n, t, e, i) {
    let s, r, o = n.state.selection.main;
    if (t > -1) {
        let l = n.docView.domBoundsAround(t, e, 0);
        if (!l || n.state.readOnly) return;
        let { from: h , to: a  } = l, c = n.docView.impreciseHead || n.docView.impreciseAnchor ? [] : Ln(n), f = new pe1(c, n);
        f.readRange(l.startDOM, l.endDOM), r = Bn(c, h);
        let d = o.from, u = null;
        (n.inputState.lastKeyCode === 8 && n.inputState.lastKeyTime > Date.now() - 100 || p4.android && f.text.length < a - h) && (d = o.to, u = "end");
        let g = Rn(n.state.sliceDoc(h, a), f.text, d - h, u);
        g && (s = {
            from: h + g.from,
            to: h + g.toA,
            insert: n.state.toText(f.text.slice(g.from, g.toB))
        });
    } else if (n.hasFocus || !n.state.facet(At)) {
        let l = n.observer.selectionRange, { impreciseHead: h , impreciseAnchor: a  } = n.docView, c = h && h.node == l.focusNode && h.offset == l.focusOffset || !Ut(n.contentDOM, l.focusNode) ? n.state.selection.main.head : n.docView.posFromDOM(l.focusNode, l.focusOffset), f = a && a.node == l.anchorNode && a.offset == l.anchorOffset || !Ut(n.contentDOM, l.anchorNode) ? n.state.selection.main.anchor : n.docView.posFromDOM(l.anchorNode, l.anchorOffset);
        (c != o.head || f != o.anchor) && (r = p48.single(f, c));
    }
    if (!(!s && !r)) {
        if (!s && i && !o.empty && r && r.main.empty ? s = {
            from: o.from,
            to: o.to,
            insert: n.state.doc.slice(o.from, o.to)
        } : s && s.from >= o.from && s.to <= o.to && (s.from != o.from || s.to != o.to) && o.to - o.from - (s.to - s.from) <= 4 && (s = {
            from: o.from,
            to: o.to,
            insert: n.state.doc.slice(o.from, s.from).append(s.insert).append(n.state.doc.slice(s.to, o.to))
        }), s) {
            let l = n.state;
            if (p4.ios && n.inputState.flushIOSKey(n) || p4.android && (s.from == o.from && s.to == o.to && s.insert.length == 1 && s.insert.lines == 2 && St(n.contentDOM, "Enter", 13) || s.from == o.from - 1 && s.to == o.to && s.insert.length == 0 && St(n.contentDOM, "Backspace", 8) || s.from == o.from && s.to == o.to + 1 && s.insert.length == 0 && St(n.contentDOM, "Delete", 46))) return;
            let h = s.insert.toString();
            if (n.state.facet(ui).some((f)=>f(n, s.from, s.to, h)
            )) return;
            n.inputState.composing >= 0 && n.inputState.composing++;
            let a;
            if (s.from >= o.from && s.to <= o.to && s.to - s.from >= (o.to - o.from) / 3 && (!r || r.main.empty && r.main.from == s.from + s.insert.length)) {
                let f = o.from < s.from ? l.sliceDoc(o.from, s.from) : "", d = o.to > s.to ? l.sliceDoc(s.to, o.to) : "";
                a = l.replaceSelection(n.state.toText(f + s.insert.sliceString(0, void 0, n.state.lineBreak) + d));
            } else {
                let f = l.changes(s);
                a = {
                    changes: f,
                    selection: r && !l.selection.main.eq(r.main) && r.main.to <= f.newLength ? l.selection.replaceRange(r.main) : void 0
                };
            }
            let c = "input.type";
            n.composing && (c += ".compose", n.inputState.compositionFirstChange && (c += ".start", n.inputState.compositionFirstChange = !1)), n.dispatch(a, {
                scrollIntoView: !0,
                userEvent: c
            });
        } else if (r && !r.main.eq(o)) {
            let l = !1, h = "select";
            n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (l = !0), h = n.inputState.lastSelectionOrigin), n.dispatch({
                selection: r,
                scrollIntoView: l,
                userEvent: h
            });
        }
    }
}
function Rn(n, t, e, i) {
    let s = Math.min(n.length, t.length), r = 0;
    for(; r < s && n.charCodeAt(r) == t.charCodeAt(r);)r++;
    if (r == s && n.length == t.length) return null;
    let o = n.length, l = t.length;
    for(; o > 0 && l > 0 && n.charCodeAt(o - 1) == t.charCodeAt(l - 1);)o--, l--;
    if (i == "end") {
        let h = Math.max(0, r - Math.min(o, l));
        e -= o + h - r;
    }
    return o < r && n.length < t.length ? (r -= e <= r && e >= o ? r - e : 0, l = r + (l - o), o = r) : l < r && (r -= e <= r && e >= l ? r - e : 0, o = r + (o - l), l = r), {
        from: r,
        toA: o,
        toB: l
    };
}
function Ln(n) {
    let t = [];
    if (n.root.activeElement != n.contentDOM) return t;
    let { anchorNode: e , anchorOffset: i , focusNode: s , focusOffset: r  } = n.observer.selectionRange;
    return e && (t.push(new me1(e, i)), (s != e || r != i) && t.push(new me1(s, r))), t;
}
function Bn(n, t) {
    if (n.length == 0) return null;
    let e = n[0].pos, i = n.length == 2 ? n[1].pos : e;
    return e > -1 && i > -1 ? p48.single(e + t, i + t) : null;
}
var D3 = class {
    constructor(t = {
    }){
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {
        }, this.contentAttrs = {
        }, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.style.cssText = "position: absolute; top: -10000px", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), this._dispatch = t.dispatch || ((e)=>this.update([
                e
            ])
        ), this.dispatch = this.dispatch.bind(this), this.root = t.root || Ks(t.parent) || document, this.viewState = new ke(t.state || w1.create()), this.plugins = this.state.facet(vt).map((e)=>new qt(e)
        );
        for (let e of this.plugins)e.update(this);
        this.observer = new as(this, (e, i, s)=>{
            Tn(this, e, i, s);
        }, (e)=>{
            this.inputState.runScrollHandlers(this, e), this.observer.intersecting && this.measure();
        }), this.inputState = new Ei(this), this.docView = new be1(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, Pn(), this.requestMeasure(), t.parent && t.parent.appendChild(this.dom);
    }
    get state() {
        return this.viewState.state;
    }
    get viewport() {
        return this.viewState.viewport;
    }
    get visibleRanges() {
        return this.viewState.visibleRanges;
    }
    get inView() {
        return this.viewState.inView;
    }
    get composing() {
        return this.inputState.composing > 0;
    }
    dispatch(...t) {
        this._dispatch(t.length == 1 && t[0] instanceof A1 ? t[0] : this.state.update(...t));
    }
    update(t) {
        if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let e = !1, i, s = this.state;
        for (let o of t){
            if (o.startState != s) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
            s = o.state;
        }
        if (this.destroyed) {
            this.viewState.state = s;
            return;
        }
        if (s.facet(w1.phrases) != this.state.facet(w1.phrases)) return this.setState(s);
        i = new ue1(this, s, t);
        let r = this.viewState.scrollTarget;
        try {
            this.updateState = 2;
            for (let o1 of t){
                if (r && (r = r.map(o1.changes)), o1.scrollIntoView) {
                    let { main: l  } = o1.state.selection;
                    r = new ot(l.empty ? l : p48.cursor(l.head, l.head > l.anchor ? -1 : 1));
                }
                for (let l of o1.effects)l.is(ce1) ? r = new ot(l.value) : l.is(di) ? r = new ot(l.value, "center") : l.is(gi) && (r = l.value);
            }
            this.viewState.update(i, r), this.bidiCache = kt.update(this.bidiCache, i.changes), i.empty || (this.updatePlugins(i), this.inputState.update(i)), e = this.docView.update(i), this.state.facet(Mt) != this.styleModules && this.mountStyles(), this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((o)=>o.isUserEvent("select.pointer")
            ));
        } finally{
            this.updateState = 0;
        }
        if ((e || r || this.viewState.mustEnforceCursorAssoc) && this.requestMeasure(), !i.empty) for (let o2 of this.state.facet(ae1))o2(i);
    }
    setState(t) {
        if (this.updateState != 0) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) {
            this.viewState.state = t;
            return;
        }
        this.updateState = 2;
        try {
            for (let e of this.plugins)e.destroy(this);
            this.viewState = new ke(t), this.plugins = t.facet(vt).map((e)=>new qt(e)
            ), this.pluginMap.clear();
            for (let e1 of this.plugins)e1.update(this);
            this.docView = new be1(this), this.inputState.ensureHandlers(this), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
        } finally{
            this.updateState = 0;
        }
        this.requestMeasure();
    }
    updatePlugins(t) {
        let e = t.startState.facet(vt), i = t.state.facet(vt);
        if (e != i) {
            let s = [];
            for (let r of i){
                let o = e.indexOf(r);
                if (o < 0) s.push(new qt(r));
                else {
                    let l = this.plugins[o];
                    l.mustUpdate = t, s.push(l);
                }
            }
            for (let r1 of this.plugins)r1.mustUpdate != t && r1.destroy(this);
            this.plugins = s, this.pluginMap.clear(), this.inputState.ensureHandlers(this);
        } else for (let s of this.plugins)s.mustUpdate = t;
        for(let s1 = 0; s1 < this.plugins.length; s1++)this.plugins[s1].update(this);
    }
    measure(t = !0) {
        if (this.destroyed) return;
        this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled), this.measureScheduled = 0, t && this.observer.flush();
        let e = null;
        try {
            for(let i = 0;; i++){
                this.updateState = 1;
                let s = this.viewport, r = this.viewState.measure(this);
                if (!r && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
                if (i > 5) {
                    console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
                    break;
                }
                let o = [];
                r & 4 || ([this.measureRequests, o] = [
                    o,
                    this.measureRequests
                ]);
                let l = o.map((c)=>{
                    try {
                        return c.read(this);
                    } catch (f) {
                        return lt(this.state, f), fs;
                    }
                }), h = new ue1(this, this.state), a = !1;
                h.flags |= r, e ? e.flags |= r : e = h, this.updateState = 2, h.empty || (this.updatePlugins(h), this.inputState.update(h), this.updateAttrs(), a = this.docView.update(h));
                for(let c = 0; c < o.length; c++)if (l[c] != fs) try {
                    let f = o[c];
                    f.write && f.write(l[c], this);
                } catch (f1) {
                    lt(this.state, f1);
                }
                if (this.viewState.scrollTarget && (this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null), a && this.docView.updateSelection(!0), this.viewport.from == s.from && this.viewport.to == s.to && this.measureRequests.length == 0) break;
            }
        } finally{
            this.updateState = 0, this.measureScheduled = -1;
        }
        if (e && !e.empty) for (let i1 of this.state.facet(ae1))i1(e);
    }
    get themeClasses() {
        return Te + " " + (this.state.facet(Oe1) ? ls : os) + " " + this.state.facet(rs);
    }
    updateAttrs() {
        let t = us(this, bi, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
        }), e = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            translate: "no",
            contenteditable: this.state.facet(At) ? "true" : "false",
            class: "cm-content",
            style: `${p4.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
        };
        this.state.readOnly && (e["aria-readonly"] = "true"), us(this, fe1, e), this.observer.ignore(()=>{
            oe1(this.contentDOM, this.contentAttrs, e), oe1(this.dom, this.editorAttrs, t);
        }), this.editorAttrs = t, this.contentAttrs = e;
    }
    showAnnouncements(t) {
        let e = !0;
        for (let i of t)for (let s of i.effects)if (s.is(D3.announce)) {
            e && (this.announceDOM.textContent = ""), e = !1;
            let r = this.announceDOM.appendChild(document.createElement("div"));
            r.textContent = s.value;
        }
    }
    mountStyles() {
        this.styleModules = this.state.facet(Mt), x1.mount(this.root, this.styleModules.concat(Dn).reverse());
    }
    readMeasured() {
        if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update");
        this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
    }
    requestMeasure(t) {
        if (this.measureScheduled < 0 && (this.measureScheduled = requestAnimationFrame(()=>this.measure()
        )), t) {
            if (t.key != null) {
                for(let e = 0; e < this.measureRequests.length; e++)if (this.measureRequests[e].key === t.key) {
                    this.measureRequests[e] = t;
                    return;
                }
            }
            this.measureRequests.push(t);
        }
    }
    pluginField(t) {
        let e = [];
        for (let i of this.plugins)i.update(this).takeField(t, e);
        return e;
    }
    plugin(t) {
        let e = this.pluginMap.get(t);
        return (e === void 0 || e && e.spec != t) && this.pluginMap.set(t, e = this.plugins.find((i)=>i.spec == t
        ) || null), e && e.update(this).value;
    }
    get documentTop() {
        return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
    }
    get documentPadding() {
        return {
            top: this.viewState.paddingTop,
            bottom: this.viewState.paddingBottom
        };
    }
    blockAtHeight(t, e) {
        let i = Be(e, this);
        return this.elementAtHeight(t - i).moveY(i);
    }
    elementAtHeight(t) {
        return this.readMeasured(), this.viewState.elementAtHeight(t);
    }
    visualLineAtHeight(t, e) {
        let i = Be(e, this);
        return this.lineBlockAtHeight(t - i).moveY(i);
    }
    lineBlockAtHeight(t) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
    }
    viewportLines(t, e) {
        let i = Be(e, this);
        for (let s of this.viewportLineBlocks)t(s.moveY(i));
    }
    get viewportLineBlocks() {
        return this.viewState.viewportLines;
    }
    visualLineAt(t, e = 0) {
        return this.lineBlockAt(t).moveY(e + this.viewState.paddingTop);
    }
    lineBlockAt(t) {
        return this.viewState.lineBlockAt(t);
    }
    get contentHeight() {
        return this.viewState.contentHeight;
    }
    moveByChar(t, e, i) {
        return xe1(this, t, Bi(this, t, e, i));
    }
    moveByGroup(t, e) {
        return xe1(this, t, Bi(this, t, e, (i)=>cn(this, t.head, i)
        ));
    }
    moveToLineBoundary(t, e, i = !0) {
        return an(this, t, e, i);
    }
    moveVertically(t, e, i) {
        return xe1(this, t, fn(this, t, e, i));
    }
    scrollPosIntoView(t) {
        this.dispatch({
            effects: ce1.of(p48.cursor(t))
        });
    }
    domAtPos(t) {
        return this.docView.domAtPos(t);
    }
    posAtDOM(t, e = 0) {
        return this.docView.posFromDOM(t, e);
    }
    posAtCoords(t, e = !0) {
        return this.readMeasured(), Ri(this, t, e);
    }
    coordsAtPos(t, e = 1) {
        this.readMeasured();
        let i = this.docView.coordsAt(t, e);
        if (!i || i.left == i.right) return i;
        let s = this.state.doc.lineAt(t), r = this.bidiSpans(s), o = r[at.find(r, t - s.from, -1, e)];
        return Wt(i, o.dir == P4.LTR == e > 0);
    }
    get defaultCharacterWidth() {
        return this.viewState.heightOracle.charWidth;
    }
    get defaultLineHeight() {
        return this.viewState.heightOracle.lineHeight;
    }
    get textDirection() {
        return this.viewState.heightOracle.direction;
    }
    get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping;
    }
    bidiSpans(t) {
        if (t.length > En) return Si(t.length);
        let e = this.textDirection;
        for (let s of this.bidiCache)if (s.from == t.from && s.dir == e) return s.order;
        let i = wi(t.text, this.textDirection);
        return this.bidiCache.push(new kt(t.from, t.to, e, i)), i;
    }
    get hasFocus() {
        var t2;
        return (document.hasFocus() || p4.safari && ((t2 = this.inputState) === null || t2 === void 0 ? void 0 : t2.lastContextMenu) > Date.now() - 30000) && this.root.activeElement == this.contentDOM;
    }
    focus() {
        this.observer.ignore(()=>{
            Ge(this.contentDOM), this.docView.updateSelection();
        });
    }
    destroy() {
        for (let t of this.plugins)t.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
    }
    static scrollIntoView(t, e = {
    }) {
        return gi.of(new ot(typeof t == "number" ? p48.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
    }
    static domEventHandlers(t) {
        return z3.define(()=>({
            })
        , {
            eventHandlers: t
        });
    }
    static theme(t, e) {
        let i = x1.newName(), s = [
            rs.of(i),
            Mt.of(Re(`.${i}`, t))
        ];
        return e && e.dark && s.push(Oe1.of(!0)), s;
    }
    static baseTheme(t) {
        return Ie.lowest(Mt.of(Re("." + Te, t, hs)));
    }
};
D3.scrollTo = ce1;
D3.centerOn = di;
D3.styleModule = Mt;
D3.inputHandler = ui;
D3.exceptionSink = fi;
D3.updateListener = ae1;
D3.editable = At;
D3.mouseSelectionStyle = ci;
D3.dragMovesSelection = ai;
D3.clickAddsSelectionRange = hi;
D3.decorations = ht;
D3.darkTheme = Oe1;
D3.contentAttributes = fe1;
D3.editorAttributes = bi;
D3.lineWrapping = D3.contentAttributes.of({
    class: "cm-lineWrapping"
});
D3.announce = v.define();
var En = 4096;
function Be(n, t) {
    return (n ?? t.contentDOM.getBoundingClientRect().top) + t.viewState.paddingTop;
}
var Ee = -1;
function Pn() {
    window.addEventListener("resize", ()=>{
        Ee == -1 && (Ee = setTimeout(Hn, 50));
    });
}
function Hn() {
    Ee = -1;
    let n = document.querySelectorAll(".cm-content");
    for(let t = 0; t < n.length; t++){
        let e = M2.get(n[t]);
        e && e.editorView.requestMeasure();
    }
}
var fs = {
}, kt = class {
    constructor(t, e, i, s){
        this.from = t, this.to = e, this.dir = i, this.order = s;
    }
    static update(t, e) {
        if (e.empty) return t;
        let i = [], s = t.length ? t[t.length - 1].dir : P4.LTR;
        for(let r = Math.max(0, t.length - 10); r < t.length; r++){
            let o = t[r];
            o.dir == s && !e.touchesRange(o.from, o.to) && i.push(new kt(e.mapPos(o.from, 1), e.mapPos(o.to, -1), o.dir, o.order));
        }
        return i;
    }
};
function us(n, t, e) {
    for(let i = n.state.facet(t), s = i.length - 1; s >= 0; s--){
        let r = i[s], o = typeof r == "function" ? r(n) : r;
        o && ne1(o, e);
    }
    return e;
}
var Nn = p4.mac ? "mac" : p4.windows ? "win" : p4.linux ? "linux" : "key";
function Vn(n, t) {
    let e = n.split(/-(?!$)/), i = e[e.length - 1];
    i == "Space" && (i = " ");
    let s, r, o, l;
    for(let h = 0; h < e.length - 1; ++h){
        let a = e[h];
        if (/^(cmd|meta|m)$/i.test(a)) l = !0;
        else if (/^a(lt)?$/i.test(a)) s = !0;
        else if (/^(c|ctrl|control)$/i.test(a)) r = !0;
        else if (/^s(hift)?$/i.test(a)) o = !0;
        else if (/^mod$/i.test(a)) t == "mac" ? l = !0 : r = !0;
        else throw new Error("Unrecognized modifier name: " + a);
    }
    return s && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function Pe(n, t, e) {
    return t.altKey && (n = "Alt-" + n), t.ctrlKey && (n = "Ctrl-" + n), t.metaKey && (n = "Meta-" + n), e !== !1 && t.shiftKey && (n = "Shift-" + n), n;
}
var Wn = D3.domEventHandlers({
    keydown (n, t) {
        return ps(gs(t.state), n, t, "editor");
    }
}), Fn = O1.define({
    enables: Wn
}), ds = new WeakMap;
function gs(n) {
    let t = n.facet(Fn), e = ds.get(t);
    return e || ds.set(t, e = In(t.reduce((i, s)=>i.concat(s)
    , []))), e;
}
function lr(n, t, e) {
    return ps(gs(n.state), t, n, e);
}
var it = null, zn = 4000;
function In(n, t = Nn) {
    let e = Object.create(null), i = Object.create(null), s = (o, l)=>{
        let h = i[o];
        if (h == null) i[o] = l;
        else if (h != l) throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
    }, r = (o, l, h, a)=>{
        let c = e[o] || (e[o] = Object.create(null)), f = l.split(/ (?!$)/).map((g)=>Vn(g, t)
        );
        for(let g = 1; g < f.length; g++){
            let m = f.slice(0, g).join(" ");
            s(m, !0), c[m] || (c[m] = {
                preventDefault: !0,
                commands: [
                    (b)=>{
                        let y = it = {
                            view: b,
                            prefix: m,
                            scope: o
                        };
                        return setTimeout(()=>{
                            it == y && (it = null);
                        }, zn), !0;
                    }
                ]
            });
        }
        let d = f.join(" ");
        s(d, !1);
        let u = c[d] || (c[d] = {
            preventDefault: !1,
            commands: []
        });
        u.commands.push(h), a && (u.preventDefault = !0);
    };
    for (let o of n){
        let l = o[t] || o.key;
        if (!!l) for (let h of o.scope ? o.scope.split(" ") : [
            "editor"
        ])r(h, l, o.run, o.preventDefault), o.shift && r(h, "Shift-" + l, o.shift, o.preventDefault);
    }
    return e;
}
function ps(n, t, e, i) {
    let s = v2(t), r = s.length == 1 && s != " ", o = "", l = !1;
    it && it.view == e && it.scope == i && (o = it.prefix + " ", (l = Hi.indexOf(t.keyCode) < 0) && (it = null));
    let h = (f)=>{
        if (f) {
            for (let d of f.commands)if (d(e)) return !0;
            f.preventDefault && (l = !0);
        }
        return !1;
    }, a = n[i], c;
    if (a) {
        if (h(a[o + Pe(s, t, !r)])) return !0;
        if (r && (t.shiftKey || t.altKey || t.metaKey) && (c = a1[t.keyCode]) && c != s) {
            if (h(a[o + Pe(c, t, !0)])) return !0;
        } else if (r && t.shiftKey && h(a[o + Pe(s, t, !0)])) return !0;
    }
    return l;
}
var ms = !p4.ios, Ot = O1.define({
    combine (n) {
        return be4(n, {
            cursorBlinkRate: 1200,
            drawRangeCursor: !0
        }, {
            cursorBlinkRate: (t, e)=>Math.min(t, e)
            ,
            drawRangeCursor: (t, e)=>t || e
        });
    }
});
function hr(n = {
}) {
    return [
        Ot.of(n),
        qn,
        Kn
    ];
}
var He = class {
    constructor(t, e, i, s, r){
        this.left = t, this.top = e, this.width = i, this.height = s, this.className = r;
    }
    draw() {
        let t = document.createElement("div");
        return t.className = this.className, this.adjust(t), t;
    }
    adjust(t) {
        t.style.left = this.left + "px", t.style.top = this.top + "px", this.width >= 0 && (t.style.width = this.width + "px"), t.style.height = this.height + "px";
    }
    eq(t) {
        return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className;
    }
}, qn = z3.fromClass(class {
    constructor(n){
        this.view = n, this.rangePieces = [], this.cursors = [], this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawSel.bind(this)
        }, this.selectionLayer = n.scrollDOM.appendChild(document.createElement("div")), this.selectionLayer.className = "cm-selectionLayer", this.selectionLayer.setAttribute("aria-hidden", "true"), this.cursorLayer = n.scrollDOM.appendChild(document.createElement("div")), this.cursorLayer.className = "cm-cursorLayer", this.cursorLayer.setAttribute("aria-hidden", "true"), n.requestMeasure(this.measureReq), this.setBlinkRate();
    }
    setBlinkRate() {
        this.cursorLayer.style.animationDuration = this.view.state.facet(Ot).cursorBlinkRate + "ms";
    }
    update(n) {
        let t = n.startState.facet(Ot) != n.state.facet(Ot);
        (t || n.selectionSet || n.geometryChanged || n.viewportChanged) && this.view.requestMeasure(this.measureReq), n.transactions.some((e)=>e.scrollIntoView
        ) && (this.cursorLayer.style.animationName = this.cursorLayer.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink"), t && this.setBlinkRate();
    }
    readPos() {
        let { state: n  } = this.view, t = n.facet(Ot), e = n.selection.ranges.map((s)=>s.empty ? [] : jn(this.view, s)
        ).reduce((s, r)=>s.concat(r)
        ), i = [];
        for (let s of n.selection.ranges){
            let r = s == n.selection.main;
            if (s.empty ? !r || ms : t.drawRangeCursor) {
                let o = Gn(this.view, s, r);
                o && i.push(o);
            }
        }
        return {
            rangePieces: e,
            cursors: i
        };
    }
    drawSel({ rangePieces: n , cursors: t  }) {
        if (n.length != this.rangePieces.length || n.some((e, i)=>!e.eq(this.rangePieces[i])
        )) {
            this.selectionLayer.textContent = "";
            for (let e of n)this.selectionLayer.appendChild(e.draw());
            this.rangePieces = n;
        }
        if (t.length != this.cursors.length || t.some((e, i)=>!e.eq(this.cursors[i])
        )) {
            let e = this.cursorLayer.children;
            if (e.length !== t.length) {
                this.cursorLayer.textContent = "";
                for (let i of t)this.cursorLayer.appendChild(i.draw());
            } else t.forEach((i, s)=>i.adjust(e[s])
            );
            this.cursors = t;
        }
    }
    destroy() {
        this.selectionLayer.remove(), this.cursorLayer.remove();
    }
}), bs = {
    ".cm-line": {
        "& ::selection": {
            backgroundColor: "transparent !important"
        },
        "&::selection": {
            backgroundColor: "transparent !important"
        }
    }
};
ms && (bs[".cm-line"].caretColor = "transparent !important");
var Kn = Ie.highest(D3.theme(bs));
function ys(n) {
    let t = n.scrollDOM.getBoundingClientRect();
    return {
        left: (n.textDirection == P4.LTR ? t.left : t.right - n.scrollDOM.clientWidth) - n.scrollDOM.scrollLeft,
        top: t.top - n.scrollDOM.scrollTop
    };
}
function ws(n, t, e) {
    let i = p48.cursor(t);
    return {
        from: Math.max(e.from, n.moveToLineBoundary(i, !1, !0).from),
        to: Math.min(e.to, n.moveToLineBoundary(i, !0, !0).from),
        type: A9.Text
    };
}
function Ss(n, t) {
    let e = n.lineBlockAt(t);
    if (Array.isArray(e.type)) {
        for (let i of e.type)if (i.to > t || i.to == t && (i.to == e.to || i.type == A9.Text)) return i;
    }
    return e;
}
function jn(n, t) {
    if (t.to <= n.viewport.from || t.from >= n.viewport.to) return [];
    let e = Math.max(t.from, n.viewport.from), i = Math.min(t.to, n.viewport.to), s = n.textDirection == P4.LTR, r = n.contentDOM, o = r.getBoundingClientRect(), l = ys(n), h = window.getComputedStyle(r.firstChild), a = o.left + parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)), c = o.right - parseInt(h.paddingRight), f = Ss(n, e), d = Ss(n, i), u = f.type == A9.Text ? f : null, g = d.type == A9.Text ? d : null;
    if (n.lineWrapping && (u && (u = ws(n, e, u)), g && (g = ws(n, i, g))), u && g && u.from == g.from) return b(y(t.from, t.to, u));
    {
        let v = u ? y(t.from, null, u) : N(f, !1), k = g ? y(null, t.to, g) : N(d, !0), B = [];
        return (u || f).to < (g || d).from - 1 ? B.push(m(a, v.bottom, c, k.top)) : v.bottom < k.top && n.elementAtHeight((v.bottom + k.top) / 2).type == A9.Text && (v.bottom = k.top = (v.bottom + k.top) / 2), b(v).concat(B).concat(b(k));
    }
    function m(v, k, B, G) {
        return new He(v - l.left, k - l.top, B - v, G - k, "cm-selectionBackground");
    }
    function b({ top: v , bottom: k , horizontal: B  }) {
        let G = [];
        for(let Y = 0; Y < B.length; Y += 2)G.push(m(B[Y], v, B[Y + 1], k));
        return G;
    }
    function y(v, k, B) {
        let G = 1000000000, Y = -1000000000, Rt = [];
        function We(st, $, ct, nt, pt) {
            let U = n.coordsAtPos(st, st == B.to ? -2 : 2), X = n.coordsAtPos(ct, ct == B.from ? 2 : -2);
            G = Math.min(U.top, X.top, G), Y = Math.max(U.bottom, X.bottom, Y), pt == P4.LTR ? Rt.push(s && $ ? a : U.left, s && nt ? c : X.right) : Rt.push(!s && nt ? a : X.left, !s && $ ? c : U.right);
        }
        let Lt = v ?? B.from, Bt = k ?? B.to;
        for (let st of n.visibleRanges)if (st.to > Lt && st.from < Bt) for(let $ = Math.max(st.from, Lt), ct = Math.min(st.to, Bt);;){
            let nt = n.state.doc.lineAt($);
            for (let pt of n.bidiSpans(nt)){
                let U = pt.from + nt.from, X = pt.to + nt.from;
                if (U >= ct) break;
                X > $ && We(Math.max(U, $), v == null && U <= Lt, Math.min(X, ct), k == null && X >= Bt, pt.dir);
            }
            if ($ = nt.to + 1, $ >= ct) break;
        }
        return Rt.length == 0 && We(Lt, v == null, Bt, k == null, n.textDirection), {
            top: G,
            bottom: Y,
            horizontal: Rt
        };
    }
    function N(v, k) {
        let B = o.top + (k ? v.top : v.bottom);
        return {
            top: B,
            bottom: B,
            horizontal: []
        };
    }
}
function Gn(n, t, e) {
    let i = n.coordsAtPos(t.head, t.assoc || 1);
    if (!i) return null;
    let s = ys(n);
    return new He(i.left - s.left, i.top - s.top, -1, i.bottom - i.top, e ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary");
}
var xs = v.define({
    map (n, t) {
        return n == null ? null : t.mapPos(n);
    }
}), Tt = B1.define({
    create () {
        return null;
    },
    update (n, t) {
        return n != null && (n = t.changes.mapPos(n)), t.effects.reduce((e, i)=>i.is(xs) ? i.value : e
        , n);
    }
}), Yn = z3.fromClass(class {
    constructor(n){
        this.view = n, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
        };
    }
    update(n) {
        var t5;
        let e = n.state.field(Tt);
        e == null ? this.cursor != null && ((t5 = this.cursor) === null || t5 === void 0 || t5.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(Tt) != e || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
    }
    readPos() {
        let n = this.view.state.field(Tt), t = n != null && this.view.coordsAtPos(n);
        if (!t) return null;
        let e = this.view.scrollDOM.getBoundingClientRect();
        return {
            left: t.left - e.left + this.view.scrollDOM.scrollLeft,
            top: t.top - e.top + this.view.scrollDOM.scrollTop,
            height: t.bottom - t.top
        };
    }
    drawCursor(n) {
        this.cursor && (n ? (this.cursor.style.left = n.left + "px", this.cursor.style.top = n.top + "px", this.cursor.style.height = n.height + "px") : this.cursor.style.left = "-100000px");
    }
    destroy() {
        this.cursor && this.cursor.remove();
    }
    setDropPos(n) {
        this.view.state.field(Tt) != n && this.view.dispatch({
            effects: xs.of(n)
        });
    }
}, {
    eventHandlers: {
        dragover (n) {
            this.setDropPos(this.view.posAtCoords({
                x: n.clientX,
                y: n.clientY
            }));
        },
        dragleave (n) {
            (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
        },
        dragend () {
            this.setDropPos(null);
        },
        drop () {
            this.setDropPos(null);
        }
    }
});
function ar() {
    return [
        Tt,
        Yn
    ];
}
function As(n, t, e, i, s) {
    t.lastIndex = 0;
    for(let r = n.iterRange(e, i), o = e, l; !r.next().done; o += r.value.length)if (!r.lineBreak) for(; l = t.exec(r.value);)s(o + l.index, o + l.index + l[0].length, l);
}
function $n(n, t) {
    let e = n.visibleRanges;
    if (e.length == 1 && e[0].from == n.viewport.from && e[0].to == n.viewport.to) return e;
    let i = [];
    for (let { from: s , to: r  } of e)s = Math.max(n.state.doc.lineAt(s).from, s - t), r = Math.min(n.state.doc.lineAt(r).to, r + t), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = r : i.push({
        from: s,
        to: r
    });
    return i;
}
var vs = class {
    constructor(t){
        let { regexp: e , decoration: i , boundary: s , maxLength: r = 1000  } = t;
        if (!e.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        this.regexp = e, this.getDeco = typeof i == "function" ? i : ()=>i
        , this.boundary = s, this.maxLength = r;
    }
    createDeco(t) {
        let e = new x2;
        for (let { from: i , to: s  } of $n(t, this.maxLength))As(t.state.doc, this.regexp, i, s, (r, o, l)=>e.add(r, o, this.getDeco(l, t, r))
        );
        return e.finish();
    }
    updateDeco(t, e) {
        let i = 1000000000, s = -1;
        return t.docChanged && t.changes.iterChanges((r, o, l, h)=>{
            h > t.view.viewport.from && l < t.view.viewport.to && (i = Math.min(l, i), s = Math.max(h, s));
        }), t.viewportChanged || s - i > 1000 ? this.createDeco(t.view) : s > -1 ? this.updateRange(t.view, e.map(t.changes), i, s) : e;
    }
    updateRange(t, e, i, s) {
        for (let r of t.visibleRanges){
            let o = Math.max(r.from, i), l = Math.min(r.to, s);
            if (l > o) {
                let h = t.state.doc.lineAt(o), a = h.to < l ? t.state.doc.lineAt(l) : h, c = Math.max(r.from, h.from), f = Math.min(r.to, a.to);
                if (this.boundary) {
                    for(; o > h.from; o--)if (this.boundary.test(h.text[o - 1 - h.from])) {
                        c = o;
                        break;
                    }
                    for(; l < a.to; l++)if (this.boundary.test(a.text[l - a.from])) {
                        f = l;
                        break;
                    }
                }
                let d = [], u;
                if (h == a) for(this.regexp.lastIndex = c - h.from; (u = this.regexp.exec(h.text)) && u.index < f - h.from;){
                    let g = u.index + h.from;
                    d.push(this.getDeco(u, t, g).range(g, g + u[0].length));
                }
                else As(t.state.doc, this.regexp, c, f, (g, m, b)=>d.push(this.getDeco(b, t, g).range(g, m))
                );
                e = e.update({
                    filterFrom: c,
                    filterTo: f,
                    filter: (g, m)=>g < c || m > f
                    ,
                    add: d
                });
            }
        }
        return e;
    }
}, Ne = /x/.unicode != null ? "gu" : "g", Un = new RegExp(`[\0-\
-\x7f-\x9f\0xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\uFEFF\uFFF9-\uFFFC]`, Ne), Xn = {
    0: "null",
    7: "bell",
    8: "backspace",
    10: "newline",
    11: "vertical tab",
    13: "carriage return",
    27: "escape",
    8203: "zero width space",
    8204: "zero width non-joiner",
    8205: "zero width joiner",
    8206: "left-to-right mark",
    8207: "right-to-left mark",
    8232: "line separator",
    8237: "left-to-right override",
    8238: "right-to-left override",
    8233: "paragraph separator",
    65279: "zero width no-break space",
    65532: "object replacement"
}, Ve = null;
function _n() {
    var n;
    if (Ve == null && typeof document != "undefined" && document.body) {
        let t = document.body.style;
        Ve = ((n = t.tabSize) !== null && n !== void 0 ? n : t.MozTabSize) != null;
    }
    return Ve || !1;
}
var $t = O1.define({
    combine (n) {
        let t = be4(n, {
            render: null,
            specialChars: Un,
            addSpecialChars: null
        });
        return (t.replaceTabs = !_n()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, Ne)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, Ne)), t;
    }
});
function cr(n = {
}) {
    return [
        $t.of(n),
        Jn()
    ];
}
var Ms = null;
function Jn() {
    return Ms || (Ms = z3.fromClass(class {
        constructor(n){
            this.view = n, this.decorations = w6.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(n.state.facet($t)), this.decorations = this.decorator.createDeco(n);
        }
        makeDecorator(n) {
            return new vs({
                regexp: n.specialChars,
                decoration: (t, e, i)=>{
                    let { doc: s  } = e.state, r = b(t[0], 0);
                    if (r == 9) {
                        let o = s.lineAt(i), l = e.state.tabSize, h = J(o.text, l, i - o.from);
                        return w6.replace({
                            widget: new Ds((l - h % l) * this.view.defaultCharacterWidth)
                        });
                    }
                    return this.decorationCache[r] || (this.decorationCache[r] = w6.replace({
                        widget: new Cs(n, r)
                    }));
                },
                boundary: n.replaceTabs ? void 0 : /[^]/
            });
        }
        update(n) {
            let t = n.state.facet($t);
            n.startState.facet($t) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
        }
    }, {
        decorations: (n)=>n.decorations
    }));
}
var Zn = "\u2022";
function Qn(n) {
    return n >= 32 ? Zn : n == 10 ? "\u2424" : String.fromCharCode(9216 + n);
}
var Cs = class extends Q1 {
    constructor(t, e){
        super();
        this.options = t, this.code = e;
    }
    eq(t) {
        return t.code == this.code;
    }
    toDOM(t) {
        let e = Qn(this.code), i = t.state.phrase("Control character") + " " + (Xn[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, e);
        if (s) return s;
        let r = document.createElement("span");
        return r.textContent = e, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r;
    }
    ignoreEvent() {
        return !1;
    }
}, Ds = class extends Q1 {
    constructor(t){
        super();
        this.width = t;
    }
    eq(t) {
        return t.width == this.width;
    }
    toDOM() {
        let t = document.createElement("span");
        return t.textContent = "	", t.className = "cm-tab", t.style.width = this.width + "px", t;
    }
    ignoreEvent() {
        return !1;
    }
}, ks = z3.fromClass(class {
    constructor(){
        this.height = 1000, this.attrs = {
            style: "padding-bottom: 1000px"
        };
    }
    update(n) {
        let t = n.view.viewState.editorHeight - n.view.defaultLineHeight;
        t != this.height && (this.height = t, this.attrs = {
            style: `padding-bottom: ${t}px`
        });
    }
});
function ur() {
    return er;
}
var tr = w6.line({
    class: "cm-activeLine"
}), er = z3.fromClass(class {
    constructor(n){
        this.decorations = this.getDeco(n);
    }
    update(n) {
        (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
    }
    getDeco(n) {
        let t = -1, e = [];
        for (let i of n.state.selection.ranges){
            if (!i.empty) return w6.none;
            let s = n.lineBlockAt(i.head);
            s.from > t && (e.push(tr.range(s.from)), t = s.from);
        }
        return w6.set(e);
    }
}, {
    decorations: (n)=>n.decorations
}), Os = class extends Q1 {
    constructor(t){
        super();
        this.content = t;
    }
    toDOM() {
        let t = document.createElement("span");
        return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content), typeof this.content == "string" ? t.setAttribute("aria-label", "placeholder " + this.content) : t.setAttribute("aria-hidden", "true"), t;
    }
    ignoreEvent() {
        return !1;
    }
};
var A10 = z1.define(), V6 = z1.define(), q3 = O1.define(), J6 = O1.define({
    combine (t) {
        return be4(t, {
            minDepth: 100,
            newGroupDelay: 500
        }, {
            minDepth: Math.max,
            newGroupDelay: Math.min
        });
    }
});
function x10(t) {
    let e = 0;
    return t.iterChangedRanges((s, n)=>e = n
    ), e;
}
var g6 = B1.define({
    create () {
        return f3.empty;
    },
    update (t, e) {
        let s = e.state.facet(J6), n = e.annotation(A10);
        if (n) {
            let u = e.docChanged ? p48.single(x10(e.changes)) : void 0, p20 = c1.fromTransaction(e, u), d = n.side, h = d == 0 ? t.undone : t.done;
            return p20 ? h = S6(h, h.length, s.minDepth, p20) : h = E10(h, e.startState.selection), new f3(d == 0 ? n.rest : h, d == 0 ? h : n.rest);
        }
        let o = e.annotation(V6);
        if ((o == "full" || o == "before") && (t = t.isolate()), e.annotation(A1.addToHistory) === !1) return e.changes.empty ? t : t.addMapping(e.changes.desc);
        let i = c1.fromTransaction(e), r = e.annotation(A1.time), l = e.annotation(A1.userEvent);
        return i ? t = t.addChanges(i, r, l, s.newGroupDelay, s.minDepth) : e.selection && (t = t.addSelection(e.startState.selection, r, l, s.newGroupDelay)), (o == "full" || o == "after") && (t = t.isolate()), t;
    },
    toJSON (t) {
        return {
            done: t.done.map((e)=>e.toJSON()
            ),
            undone: t.undone.map((e)=>e.toJSON()
            )
        };
    },
    fromJSON (t) {
        return new f3(t.done.map(c1.fromJSON), t.undone.map(c1.fromJSON));
    }
});
function _1(t = {
}) {
    return [
        g6,
        J6.of(t),
        D3.domEventHandlers({
            beforeinput (e, s) {
                let n = e.inputType == "historyUndo" ? N1 : e.inputType == "historyRedo" ? M8 : null;
                return n ? (e.preventDefault(), n(s)) : !1;
            }
        })
    ];
}
function m2(t, e) {
    return function({ state: s , dispatch: n  }) {
        if (!e && s.readOnly) return !1;
        let o = s.field(g6, !1);
        if (!o) return !1;
        let i = o.pop(t, s, e);
        return i ? (n(i), !0) : !1;
    };
}
var N1 = m2(0, !1), M8 = m2(1, !1), z6 = m2(0, !0), I5 = m2(1, !0);
function T5(t) {
    return function(e) {
        let s = e.field(g6, !1);
        if (!s) return 0;
        let n = t == 0 ? s.done : s.undone;
        return n.length - (n.length && !n[0].changes ? 1 : 0);
    };
}
var H7 = T5(0), j4 = T5(1), c1 = class {
    constructor(e, s, n, o, i){
        this.changes = e, this.effects = s, this.mapped = n, this.startSelection = o, this.selectionsAfter = i;
    }
    setSelAfter(e) {
        return new c1(this.changes, this.effects, this.mapped, this.startSelection, e);
    }
    toJSON() {
        var e, s3, n;
        return {
            changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
            mapped: (s3 = this.mapped) === null || s3 === void 0 ? void 0 : s3.toJSON(),
            startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(),
            selectionsAfter: this.selectionsAfter.map((o)=>o.toJSON()
            )
        };
    }
    static fromJSON(e) {
        return new c1(e.changes && y1.fromJSON(e.changes), [], e.mapped && I.fromJSON(e.mapped), e.startSelection && p48.fromJSON(e.startSelection), e.selectionsAfter.map(p48.fromJSON));
    }
    static fromTransaction(e, s) {
        let n = a6;
        for (let o of e.startState.facet(q3)){
            let i = o(e);
            i.length && (n = n.concat(i));
        }
        return !n.length && e.changes.empty ? null : new c1(e.changes.invert(e.startState.doc), n, void 0, s || e.startState.selection, a6);
    }
    static selection(e) {
        return new c1(void 0, a6, void 0, void 0, e);
    }
};
function S6(t, e, s, n) {
    let o = e + 1 > s + 20 ? e - s - 1 : 0, i = t.slice(o, e);
    return i.push(n), i;
}
function $3(t, e) {
    let s = [], n = !1;
    return t.iterChangedRanges((o, i)=>s.push(o, i)
    ), e.iterChangedRanges((o, i, r, l)=>{
        for(let u = 0; u < s.length;){
            let p = s[u++], d = s[u++];
            l >= p && r <= d && (n = !0);
        }
    }), n;
}
function K8(t, e) {
    return t.ranges.length == e.ranges.length && t.ranges.filter((s, n)=>s.empty != e.ranges[n].empty
    ).length === 0;
}
function C4(t, e) {
    return t.length ? e.length ? t.concat(e) : t : e;
}
var a6 = [], P5 = 200;
function E10(t, e) {
    if (t.length) {
        let s = t[t.length - 1], n = s.selectionsAfter.slice(Math.max(0, s.selectionsAfter.length - P5));
        return n.length && n[n.length - 1].eq(e) ? t : (n.push(e), S6(t, t.length - 1, 1000000000, s.setSelAfter(n)));
    } else return [
        c1.selection([
            e
        ])
    ];
}
function Q2(t) {
    let e = t[t.length - 1], s = t.slice();
    return s[t.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), s;
}
function D4(t, e) {
    if (!t.length) return t;
    let s = t.length, n = a6;
    for(; s;){
        let o = W7(t[s - 1], e, n);
        if (o.changes && !o.changes.empty || o.effects.length) {
            let i = t.slice(0, s);
            return i[s - 1] = o, i;
        } else e = o.mapped, s--, n = o.selectionsAfter;
    }
    return n.length ? [
        c1.selection(n)
    ] : a6;
}
function W7(t, e, s) {
    let n = C4(t.selectionsAfter.length ? t.selectionsAfter.map((l)=>l.map(e)
    ) : a6, s);
    if (!t.changes) return c1.selection(n);
    let o = t.changes.map(e), i = e.mapDesc(t.changes, !0), r = t.mapped ? t.mapped.composeDesc(i) : i;
    return new c1(o, v.mapEffects(t.effects, e), r, t.startSelection.map(i), n);
}
var X1 = /^(input\.type|delete)($|\.)/, f3 = class {
    constructor(e, s, n = 0, o = void 0){
        this.done = e, this.undone = s, this.prevTime = n, this.prevUserEvent = o;
    }
    isolate() {
        return this.prevTime ? new f3(this.done, this.undone) : this;
    }
    addChanges(e, s, n, o, i) {
        let r = this.done, l = r[r.length - 1];
        return l && l.changes && !l.changes.empty && e.changes && (!n || X1.test(n)) && (!l.selectionsAfter.length && s - this.prevTime < o && $3(l.changes, e.changes) || n == "input.type.compose") ? r = S6(r, r.length - 1, i, new c1(e.changes.compose(l.changes), C4(e.effects, l.effects), l.mapped, l.startSelection, a6)) : r = S6(r, r.length, i, e), new f3(r, a6, s, n);
    }
    addSelection(e, s, n, o) {
        let i = this.done.length ? this.done[this.done.length - 1].selectionsAfter : a6;
        return i.length > 0 && s - this.prevTime < o && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && K8(i[i.length - 1], e) ? this : new f3(E10(this.done, e), this.undone, s, n);
    }
    addMapping(e) {
        return new f3(D4(this.done, e), D4(this.undone, e), this.prevTime, this.prevUserEvent);
    }
    pop(e, s, n) {
        let o = e == 0 ? this.done : this.undone;
        if (o.length == 0) return null;
        let i = o[o.length - 1];
        if (n && i.selectionsAfter.length) return s.update({
            selection: i.selectionsAfter[i.selectionsAfter.length - 1],
            annotations: A10.of({
                side: e,
                rest: Q2(o)
            }),
            userEvent: e == 0 ? "select.undo" : "select.redo",
            scrollIntoView: !0
        });
        if (i.changes) {
            let r = o.length == 1 ? a6 : o.slice(0, o.length - 1);
            return i.mapped && (r = D4(r, i.mapped)), s.update({
                changes: i.changes,
                selection: i.startSelection,
                effects: i.effects,
                annotations: A10.of({
                    side: e,
                    rest: r
                }),
                filter: !1,
                userEvent: e == 0 ? "undo" : "redo",
                scrollIntoView: !0
            });
        } else return null;
    }
};
f3.empty = new f3(a6, a6);
var b5 = [
    {
        key: "Mod-z",
        run: N1,
        preventDefault: !0
    },
    {
        key: "Mod-y",
        mac: "Mod-Shift-z",
        run: M8,
        preventDefault: !0
    },
    {
        key: "Mod-u",
        run: z6,
        preventDefault: !0
    },
    {
        key: "Alt-u",
        mac: "Mod-Shift-u",
        run: I5,
        preventDefault: !0
    }
];
var we2 = 1024, ve2 = 0, N2 = class {
    constructor(e, t){
        this.from = e, this.to = t;
    }
}, y10 = class {
    constructor(e = {
    }){
        this.id = ve2++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (()=>{
            throw new Error("This node type doesn't define a deserialize function");
        });
    }
    add(e) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return typeof e != "function" && (e = B4.match(e)), (t)=>{
            let r = e(t);
            return r === void 0 ? null : [
                this,
                r
            ];
        };
    }
};
y10.closedBy = new y10({
    deserialize: (h)=>h.split(" ")
});
y10.openedBy = new y10({
    deserialize: (h)=>h.split(" ")
});
y10.group = new y10({
    deserialize: (h)=>h.split(" ")
});
y10.contextHash = new y10({
    perNode: !0
});
y10.lookAhead = new y10({
    perNode: !0
});
y10.mounted = new y10({
    perNode: !0
});
var he2 = class {
    constructor(e, t, r){
        this.tree = e, this.overlay = t, this.parser = r;
    }
}, ke1 = Object.create(null), B4 = class {
    constructor(e, t, r, i = 0){
        this.name = e, this.props = t, this.id = r, this.flags = i;
    }
    static define(e) {
        let t = e.props && e.props.length ? Object.create(null) : ke1, r = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), i = new B4(e.name || "", t, e.id, r);
        if (e.props) {
            for (let n of e.props)if (Array.isArray(n) || (n = n(i)), n) {
                if (n[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
                t[n[0].id] = n[1];
            }
        }
        return i;
    }
    prop(e) {
        return this.props[e.id];
    }
    get isTop() {
        return (this.flags & 1) > 0;
    }
    get isSkipped() {
        return (this.flags & 2) > 0;
    }
    get isError() {
        return (this.flags & 4) > 0;
    }
    get isAnonymous() {
        return (this.flags & 8) > 0;
    }
    is(e) {
        if (typeof e == "string") {
            if (this.name == e) return !0;
            let t = this.prop(y10.group);
            return t ? t.indexOf(e) > -1 : !1;
        }
        return this.id == e;
    }
    static match(e) {
        let t = Object.create(null);
        for(let r in e)for (let i of r.split(" "))t[i] = e[r];
        return (r)=>{
            for(let i = r.prop(y10.group), n = -1; n < (i ? i.length : 0); n++){
                let s = t[n < 0 ? r.name : i[n]];
                if (s) return s;
            }
        };
    }
};
B4.none = new B4("", Object.create(null), 0, 8);
var Z1 = class {
    constructor(e){
        this.types = e;
        for(let t = 0; t < e.length; t++)if (e[t].id != t) throw new RangeError("Node type ids should correspond to array positions when creating a node set");
    }
    extend(...e) {
        let t = [];
        for (let r of this.types){
            let i = null;
            for (let n of e){
                let s = n(r);
                s && (i || (i = Object.assign({
                }, r.props)), i[s[0].id] = s[1]);
            }
            t.push(i ? new B4(r.name, i, r.id, r.flags) : r);
        }
        return new Z1(t);
    }
}, K9 = new WeakMap, oe2 = new WeakMap, P6 = class {
    constructor(e, t, r, i, n){
        if (this.type = e, this.children = t, this.positions = r, this.length = i, this.props = null, n && n.length) {
            this.props = Object.create(null);
            for (let [s, l] of n)this.props[typeof s == "number" ? s : s.id] = l;
        }
    }
    toString() {
        let e = this.prop(y10.mounted);
        if (e && !e.overlay) return e.tree.toString();
        let t = "";
        for (let r of this.children){
            let i = r.toString();
            i && (t && (t += ","), t += i);
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
    }
    cursor(e, t = 0) {
        let r = e != null && K9.get(this) || this.topNode, i = new G1(r);
        return e != null && (i.moveTo(e, t), K9.set(this, i._tree)), i;
    }
    fullCursor() {
        return new G1(this.topNode, 1);
    }
    get topNode() {
        return new T6(this, 0, 0, null);
    }
    resolve(e, t = 0) {
        let r = J9(K9.get(this) || this.topNode, e, t, !1);
        return K9.set(this, r), r;
    }
    resolveInner(e, t = 0) {
        let r = J9(oe2.get(this) || this.topNode, e, t, !0);
        return oe2.set(this, r), r;
    }
    iterate(e) {
        let { enter: t , leave: r , from: i = 0 , to: n = this.length  } = e;
        for(let s = this.cursor(), l = ()=>s.node
        ;;){
            let o = !1;
            if (s.from <= n && s.to >= i && (s.type.isAnonymous || t(s.type, s.from, s.to, l) !== !1)) {
                if (s.firstChild()) continue;
                s.type.isAnonymous || (o = !0);
            }
            for(; o && r && r(s.type, s.from, s.to, l), o = s.type.isAnonymous, !s.nextSibling();){
                if (!s.parent()) return;
                o = !0;
            }
        }
    }
    prop(e) {
        return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
    }
    get propValues() {
        let e = [];
        if (this.props) for(let t in this.props)e.push([
            +t,
            this.props[t]
        ]);
        return e;
    }
    balance(e = {
    }) {
        return this.children.length <= 8 ? this : te2(B4.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, r, i)=>new P6(this.type, t, r, i, this.propValues)
        , e.makeTree || ((t, r, i)=>new P6(B4.none, t, r, i)
        ));
    }
    static build(e) {
        return Ce1(e);
    }
};
P6.empty = new P6(B4.none, [], [], 0);
var Q3 = class {
    constructor(e, t){
        this.buffer = e, this.index = t;
    }
    get id() {
        return this.buffer[this.index - 4];
    }
    get start() {
        return this.buffer[this.index - 3];
    }
    get end() {
        return this.buffer[this.index - 2];
    }
    get size() {
        return this.buffer[this.index - 1];
    }
    get pos() {
        return this.index;
    }
    next() {
        this.index -= 4;
    }
    fork() {
        return new Q3(this.buffer, this.index);
    }
}, U1 = class {
    constructor(e, t, r){
        this.buffer = e, this.length = t, this.set = r;
    }
    get type() {
        return B4.none;
    }
    toString() {
        let e = [];
        for(let t = 0; t < this.buffer.length;)e.push(this.childString(t)), t = this.buffer[t + 3];
        return e.join(",");
    }
    childString(e) {
        let t = this.buffer[e], r = this.buffer[e + 3], i = this.set.types[t], n = i.name;
        if (/\W/.test(n) && !i.isError && (n = JSON.stringify(n)), e += 4, r == e) return n;
        let s = [];
        for(; e < r;)s.push(this.childString(e)), e = this.buffer[e + 3];
        return n + "(" + s.join(",") + ")";
    }
    findChild(e, t, r, i, n) {
        let { buffer: s  } = this, l = -1;
        for(let o = e; o != t && !(fe3(n, i, s[o + 1], s[o + 2]) && (l = o, r > 0)); o = s[o + 3]);
        return l;
    }
    slice(e, t, r, i) {
        let n = this.buffer, s = new Uint16Array(t - e);
        for(let l = e, o = 0; l < t;)s[o++] = n[l++], s[o++] = n[l++] - r, s[o++] = n[l++] - r, s[o++] = n[l++] - e;
        return new U1(s, i - r, this.set);
    }
};
function fe3(h, e, t, r) {
    switch(h){
        case -2:
            return t < e;
        case -1:
            return r >= e && t < e;
        case 0:
            return t < e && r > e;
        case 1:
            return t <= e && r > e;
        case 2:
            return r > e;
        case 4:
            return !0;
    }
}
function ue4(h, e) {
    let t = h.childBefore(e);
    for(; t;){
        let r = t.lastChild;
        if (!r || r.to != t.to) break;
        r.type.isError && r.from == r.to ? (h = t, t = r.prevSibling) : t = r;
    }
    return h;
}
function J9(h, e, t, r) {
    for(var i2; h.from == h.to || (t < 1 ? h.from >= e : h.from > e) || (t > -1 ? h.to <= e : h.to < e);){
        let n = !r && h instanceof T6 && h.index < 0 ? null : h.parent;
        if (!n) return h;
        h = n;
    }
    if (r) for(let n = h, s = n.parent; s; n = s, s = n.parent)n instanceof T6 && n.index < 0 && ((i2 = s.enter(e, t, !0)) === null || i2 === void 0 ? void 0 : i2.from) != n.from && (h = s);
    for(;;){
        let n = h.enter(e, t, r);
        if (!n) return h;
        h = n;
    }
}
var T6 = class {
    constructor(e, t, r, i){
        this.node = e, this._from = t, this.index = r, this._parent = i;
    }
    get type() {
        return this.node.type;
    }
    get name() {
        return this.node.type.name;
    }
    get from() {
        return this._from;
    }
    get to() {
        return this._from + this.node.length;
    }
    nextChild(e, t, r, i, n = 0) {
        for(let s = this;;){
            for(let { children: l , positions: o  } = s.node, u = t > 0 ? l.length : -1; e != u; e += t){
                let f = l[e], d = o[e] + s._from;
                if (!!fe3(i, r, d, d + f.length)) {
                    if (f instanceof U1) {
                        if (n & 2) continue;
                        let p = f.findChild(0, f.buffer.length, t, r - d, i);
                        if (p > -1) return new O3(new ae4(s, f, e, d), null, p);
                    } else if (n & 1 || !f.type.isAnonymous || ee2(f)) {
                        let p;
                        if (!(n & 1) && f.props && (p = f.prop(y10.mounted)) && !p.overlay) return new T6(p.tree, d, e, s);
                        let v = new T6(f, d, e, s);
                        return n & 1 || !v.type.isAnonymous ? v : v.nextChild(t < 0 ? f.children.length - 1 : 0, t, r, i);
                    }
                }
            }
            if (n & 1 || !s.type.isAnonymous || (s.index >= 0 ? e = s.index + t : e = t < 0 ? -1 : s._parent.node.children.length, s = s._parent, !s)) return null;
        }
    }
    get firstChild() {
        return this.nextChild(0, 1, 0, 4);
    }
    get lastChild() {
        return this.nextChild(this.node.children.length - 1, -1, 0, 4);
    }
    childAfter(e) {
        return this.nextChild(0, 1, e, 2);
    }
    childBefore(e) {
        return this.nextChild(this.node.children.length - 1, -1, e, -2);
    }
    enter(e, t, r = !0, i = !0) {
        let n;
        if (r && (n = this.node.prop(y10.mounted)) && n.overlay) {
            let s = e - this.from;
            for (let { from: l , to: o  } of n.overlay)if ((t > 0 ? l <= s : l < s) && (t < 0 ? o >= s : o > s)) return new T6(n.tree, n.overlay[0].from + this.from, -1, this);
        }
        return this.nextChild(0, 1, e, t, i ? 0 : 2);
    }
    nextSignificantParent() {
        let e = this;
        for(; e.type.isAnonymous && e._parent;)e = e._parent;
        return e;
    }
    get parent() {
        return this._parent ? this._parent.nextSignificantParent() : null;
    }
    get nextSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
    }
    get prevSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
    }
    get cursor() {
        return new G1(this);
    }
    get tree() {
        return this.node;
    }
    toTree() {
        return this.node;
    }
    resolve(e, t = 0) {
        return J9(this, e, t, !1);
    }
    resolveInner(e, t = 0) {
        return J9(this, e, t, !0);
    }
    enterUnfinishedNodesBefore(e) {
        return ue4(this, e);
    }
    getChild(e, t = null, r = null) {
        let i = X3(this, e, t, r);
        return i.length ? i[0] : null;
    }
    getChildren(e, t = null, r = null) {
        return X3(this, e, t, r);
    }
    toString() {
        return this.node.toString();
    }
};
function X3(h, e, t, r) {
    let i = h.cursor, n = [];
    if (!i.firstChild()) return n;
    if (t != null) {
        for(; !i.type.is(t);)if (!i.nextSibling()) return n;
    }
    for(;;){
        if (r != null && i.type.is(r)) return n;
        if (i.type.is(e) && n.push(i.node), !i.nextSibling()) return r == null ? n : [];
    }
}
var ae4 = class {
    constructor(e, t, r, i){
        this.parent = e, this.buffer = t, this.index = r, this.start = i;
    }
}, O3 = class {
    constructor(e, t, r){
        this.context = e, this._parent = t, this.index = r, this.type = e.buffer.set.types[e.buffer.buffer[r]];
    }
    get name() {
        return this.type.name;
    }
    get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1];
    }
    get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2];
    }
    child(e, t, r) {
        let { buffer: i  } = this.context, n = i.findChild(this.index + 4, i.buffer[this.index + 3], e, t - this.context.start, r);
        return n < 0 ? null : new O3(this.context, this, n);
    }
    get firstChild() {
        return this.child(1, 0, 4);
    }
    get lastChild() {
        return this.child(-1, 0, 4);
    }
    childAfter(e) {
        return this.child(1, e, 2);
    }
    childBefore(e) {
        return this.child(-1, e, -2);
    }
    enter(e, t, r, i = !0) {
        if (!i) return null;
        let { buffer: n  } = this.context, s = n.findChild(this.index + 4, n.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
        return s < 0 ? null : new O3(this.context, this, s);
    }
    get parent() {
        return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(e) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
    }
    get nextSibling() {
        let { buffer: e  } = this.context, t = e.buffer[this.index + 3];
        return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new O3(this.context, this._parent, t) : this.externalSibling(1);
    }
    get prevSibling() {
        let { buffer: e  } = this.context, t = this._parent ? this._parent.index + 4 : 0;
        return this.index == t ? this.externalSibling(-1) : new O3(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
    }
    get cursor() {
        return new G1(this);
    }
    get tree() {
        return null;
    }
    toTree() {
        let e = [], t = [], { buffer: r  } = this.context, i = this.index + 4, n = r.buffer[this.index + 3];
        if (n > i) {
            let s = r.buffer[this.index + 1], l = r.buffer[this.index + 2];
            e.push(r.slice(i, n, s, l)), t.push(0);
        }
        return new P6(this.type, e, t, this.to - this.from);
    }
    resolve(e, t = 0) {
        return J9(this, e, t, !1);
    }
    resolveInner(e, t = 0) {
        return J9(this, e, t, !0);
    }
    enterUnfinishedNodesBefore(e) {
        return ue4(this, e);
    }
    toString() {
        return this.context.buffer.childString(this.index);
    }
    getChild(e, t = null, r = null) {
        let i = X3(this, e, t, r);
        return i.length ? i[0] : null;
    }
    getChildren(e, t = null, r = null) {
        return X3(this, e, t, r);
    }
}, G1 = class {
    constructor(e, t = 0){
        if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof T6) this.yieldNode(e);
        else {
            this._tree = e.context.parent, this.buffer = e.context;
            for(let r = e._parent; r; r = r._parent)this.stack.unshift(r.index);
            this.bufferNode = e, this.yieldBuf(e.index);
        }
    }
    get name() {
        return this.type.name;
    }
    yieldNode(e) {
        return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
    }
    yieldBuf(e, t) {
        this.index = e;
        let { start: r , buffer: i  } = this.buffer;
        return this.type = t || i.set.types[i.buffer[e]], this.from = r + i.buffer[e + 1], this.to = r + i.buffer[e + 2], !0;
    }
    yield(e) {
        return e ? e instanceof T6 ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
    }
    toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
    }
    enterChild(e, t, r) {
        if (!this.buffer) return this.yield(this._tree.nextChild(e < 0 ? this._tree.node.children.length - 1 : 0, e, t, r, this.mode));
        let { buffer: i  } = this.buffer, n = i.findChild(this.index + 4, i.buffer[this.index + 3], e, t - this.buffer.start, r);
        return n < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(n));
    }
    firstChild() {
        return this.enterChild(1, 0, 4);
    }
    lastChild() {
        return this.enterChild(-1, 0, 4);
    }
    childAfter(e) {
        return this.enterChild(1, e, 2);
    }
    childBefore(e) {
        return this.enterChild(-1, e, -2);
    }
    enter(e, t, r = !0, i = !0) {
        return this.buffer ? i ? this.enterChild(1, e, t) : !1 : this.yield(this._tree.enter(e, t, r && !(this.mode & 1), i));
    }
    parent() {
        if (!this.buffer) return this.yieldNode(this.mode & 1 ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let e = this.mode & 1 ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(e);
    }
    sibling(e) {
        if (!this.buffer) return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
        let { buffer: t  } = this.buffer, r = this.stack.length - 1;
        if (e < 0) {
            let i = r < 0 ? 0 : this.stack[r] + 4;
            if (this.index != i) return this.yieldBuf(t.findChild(i, this.index, -1, 0, 4));
        } else {
            let i = t.buffer[this.index + 3];
            if (i < (r < 0 ? t.buffer.length : t.buffer[this.stack[r] + 3])) return this.yieldBuf(i);
        }
        return r < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
    }
    nextSibling() {
        return this.sibling(1);
    }
    prevSibling() {
        return this.sibling(-1);
    }
    atLastNode(e) {
        let t, r, { buffer: i  } = this;
        if (i) {
            if (e > 0) {
                if (this.index < i.buffer.buffer.length) return !1;
            } else for(let n = 0; n < this.index; n++)if (i.buffer.buffer[n + 3] < this.index) return !1;
            ({ index: t , parent: r  } = i);
        } else ({ index: t , _parent: r  } = this._tree);
        for(; r; { index: t , _parent: r  } = r)if (t > -1) for(let n = t + e, s = e < 0 ? -1 : r.node.children.length; n != s; n += e){
            let l = r.node.children[n];
            if (this.mode & 1 || l instanceof U1 || !l.type.isAnonymous || ee2(l)) return !1;
        }
        return !0;
    }
    move(e, t) {
        if (t && this.enterChild(e, 0, 4)) return !0;
        for(;;){
            if (this.sibling(e)) return !0;
            if (this.atLastNode(e) || !this.parent()) return !1;
        }
    }
    next(e = !0) {
        return this.move(1, e);
    }
    prev(e = !0) {
        return this.move(-1, e);
    }
    moveTo(e, t = 0) {
        for(; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(););
        for(; this.enterChild(1, e, t););
        return this;
    }
    get node() {
        if (!this.buffer) return this._tree;
        let e = this.bufferNode, t = null, r = 0;
        if (e && e.context == this.buffer) {
            e: for(let i = this.index, n = this.stack.length; n >= 0;){
                for(let s = e; s; s = s._parent)if (s.index == i) {
                    if (i == this.index) return s;
                    t = s, r = n + 1;
                    break e;
                }
                i = this.stack[--n];
            }
        }
        for(let i = r; i < this.stack.length; i++)t = new O3(this.buffer, t, this.stack[i]);
        return this.bufferNode = new O3(this.buffer, t, this.index);
    }
    get tree() {
        return this.buffer ? null : this._tree.node;
    }
};
function ee2(h) {
    return h.children.some((e)=>e instanceof U1 || !e.type.isAnonymous || ee2(e)
    );
}
function Ce1(h) {
    var e;
    let { buffer: t , nodeSet: r , maxBufferLength: i = we2 , reused: n = [] , minRepeatType: s = r.types.length  } = h, l = Array.isArray(t) ? new Q3(t, t.length) : t, o = r.types, u = 0, f = 0;
    function d(x, w, a, m, C) {
        let { id: b , start: g , end: k , size: _  } = l, M = f;
        for(; _ < 0;)if (l.next(), _ == -1) {
            let L = n[b];
            a.push(L), m.push(g - x);
            return;
        } else if (_ == -3) {
            u = b;
            return;
        } else if (_ == -4) {
            f = b;
            return;
        } else throw new RangeError(`Unrecognized record size: ${_}`);
        let H = o[b], R, E, se = g - x;
        if (k - g <= i && (E = S(l.pos - w, C))) {
            let L = new Uint16Array(E.size - E.skip), I = l.pos - E.size, D = L.length;
            for(; l.pos > I;)D = j(E.start, L, D);
            R = new U1(L, k - E.start, r), se = E.start - x;
        } else {
            let L = l.pos - _;
            l.next();
            let I = [], D = [], W = b >= s ? b : -1, V = 0, q = k;
            for(; l.pos > L;)W >= 0 && l.id == W && l.size >= 0 ? (l.end <= q - i && (v(I, D, g, V, l.end, q, W, M), V = I.length, q = l.end), l.next()) : d(g, L, I, D, W);
            if (W >= 0 && V > 0 && V < I.length && v(I, D, g, V, g, q, W, M), I.reverse(), D.reverse(), W > -1 && V > 0) {
                let le = p(H);
                R = te2(H, I, D, 0, I.length, 0, k - g, le, le);
            } else R = c(H, I, D, k - g, M - k);
        }
        a.push(R), m.push(se);
    }
    function p(x) {
        return (w, a, m)=>{
            let C = 0, b = w.length - 1, g, k;
            if (b >= 0 && (g = w[b]) instanceof P6) {
                if (!b && g.type == x && g.length == m) return g;
                (k = g.prop(y10.lookAhead)) && (C = a[b] + g.length + k);
            }
            return c(x, w, a, m, C);
        };
    }
    function v(x, w, a, m, C, b, g, k) {
        let _ = [], M = [];
        for(; x.length > m;)_.push(x.pop()), M.push(w.pop() + a - C);
        x.push(c(r.types[g], _, M, b - C, k - b)), w.push(C - a);
    }
    function c(x, w, a, m, C = 0, b) {
        if (u) {
            let g = [
                y10.contextHash,
                u
            ];
            b = b ? [
                g
            ].concat(b) : [
                g
            ];
        }
        if (C > 25) {
            let g = [
                y10.lookAhead,
                C
            ];
            b = b ? [
                g
            ].concat(b) : [
                g
            ];
        }
        return new P6(x, w, a, m, b);
    }
    function S(x, w) {
        let a = l.fork(), m = 0, C = 0, b = 0, g = a.end - i, k = {
            size: 0,
            start: 0,
            skip: 0
        };
        e: for(let _ = a.pos - x; a.pos > _;){
            let M = a.size;
            if (a.id == w && M >= 0) {
                k.size = m, k.start = C, k.skip = b, b += 4, m += 4, a.next();
                continue;
            }
            let H = a.pos - M;
            if (M < 0 || H < _ || a.start < g) break;
            let R = a.id >= s ? 4 : 0, E = a.start;
            for(a.next(); a.pos > H;){
                if (a.size < 0) if (a.size == -3) R += 4;
                else break e;
                else a.id >= s && (R += 4);
                a.next();
            }
            C = E, m += M, b += R;
        }
        return (w < 0 || m == x) && (k.size = m, k.start = C, k.skip = b), k.size > 4 ? k : void 0;
    }
    function j(x, w, a) {
        let { id: m , start: C , end: b , size: g  } = l;
        if (l.next(), g >= 0 && m < s) {
            let k = a;
            if (g > 4) {
                let _ = l.pos - (g - 4);
                for(; l.pos > _;)a = j(x, w, a);
            }
            w[--a] = k, w[--a] = b - x, w[--a] = C - x, w[--a] = m;
        } else g == -3 ? u = m : g == -4 && (f = m);
        return a;
    }
    let z = [], F = [];
    for(; l.pos > 0;)d(h.start || 0, h.bufferStart || 0, z, F, -1);
    let A = (e = h.length) !== null && e !== void 0 ? e : z.length ? F[0] + z[0].length : 0;
    return new P6(o[h.topID], z.reverse(), F.reverse(), A);
}
var pe3 = new WeakMap;
function Y1(h, e) {
    if (!h.isAnonymous || e instanceof U1 || e.type != h) return 1;
    let t = pe3.get(e);
    if (t == null) {
        t = 1;
        for (let r of e.children){
            if (r.type != h || !(r instanceof P6)) {
                t = 1;
                break;
            }
            t += Y1(h, r);
        }
        pe3.set(e, t);
    }
    return t;
}
function te2(h, e, t, r, i, n, s, l, o) {
    let u = 0;
    for(let c = r; c < i; c++)u += Y1(h, e[c]);
    let f = Math.ceil(u * 1.5 / 8), d = [], p = [];
    function v(c, S, j, z, F) {
        for(let A = j; A < z;){
            let x = A, w = S[A], a = Y1(h, c[A]);
            for(A++; A < z; A++){
                let m = Y1(h, c[A]);
                if (a + m >= f) break;
                a += m;
            }
            if (A == x + 1) {
                if (a > f) {
                    let m = c[x];
                    v(m.children, m.positions, 0, m.children.length, S[x] + F);
                    continue;
                }
                d.push(c[x]);
            } else {
                let m = S[A - 1] + c[A - 1].length - w;
                d.push(te2(h, c, S, x, A, w, m, null, o));
            }
            p.push(w + F - n);
        }
    }
    return v(e, t, r, i, 0), (l || o)(d, p, s);
}
var $4 = class {
    constructor(e, t, r, i, n = !1, s = !1){
        this.from = e, this.to = t, this.tree = r, this.offset = i, this.open = (n ? 1 : 0) | (s ? 2 : 0);
    }
    get openStart() {
        return (this.open & 1) > 0;
    }
    get openEnd() {
        return (this.open & 2) > 0;
    }
    static addTree(e, t = [], r = !1) {
        let i = [
            new $4(0, e.length, e, 0, !1, r)
        ];
        for (let n of t)n.to > e.length && i.push(n);
        return i;
    }
    static applyChanges(e, t, r = 128) {
        if (!t.length) return e;
        let i = [], n = 1, s = e.length ? e[0] : null;
        for(let l = 0, o = 0, u = 0;; l++){
            let f = l < t.length ? t[l] : null, d = f ? f.fromA : 1000000000;
            if (d - o >= r) for(; s && s.from < d;){
                let p = s;
                if (o >= p.from || d <= p.to || u) {
                    let v = Math.max(p.from, o) - u, c = Math.min(p.to, d) - u;
                    p = v >= c ? null : new $4(v, c, p.tree, p.offset + u, l > 0, !!f);
                }
                if (p && i.push(p), s.to > d) break;
                s = n < e.length ? e[n++] : null;
            }
            if (!f) break;
            o = f.toA, u = f.toA - f.toB;
        }
        return i;
    }
}, Ae2 = class {
    startParse(e, t, r) {
        return typeof e == "string" && (e = new de4(e)), r = r ? r.length ? r.map((i)=>new N2(i.from, i.to)
        ) : [
            new N2(0, 0)
        ] : [
            new N2(0, e.length)
        ], this.createParse(e, t || [], r);
    }
    parse(e, t, r) {
        let i = this.startParse(e, t, r);
        for(;;){
            let n = i.advance();
            if (n) return n;
        }
    }
}, de4 = class {
    constructor(e){
        this.string = e;
    }
    get length() {
        return this.string.length;
    }
    chunk(e) {
        return this.string.slice(e);
    }
    get lineChunks() {
        return !1;
    }
    read(e, t) {
        return this.string.slice(e, t);
    }
};
function Ne1(h) {
    return (e, t, r, i)=>new ge4(e, h, t, r, i)
    ;
}
var re2 = class {
    constructor(e, t, r, i, n){
        this.parser = e, this.parse = t, this.overlay = r, this.target = i, this.ranges = n;
    }
}, ce4 = class {
    constructor(e, t, r, i, n, s, l){
        this.parser = e, this.predicate = t, this.mounts = r, this.index = i, this.start = n, this.target = s, this.prev = l, this.depth = 0, this.ranges = [];
    }
}, ie2 = new y10({
    perNode: !0
}), ge4 = class {
    constructor(e, t, r, i, n){
        this.nest = t, this.input = r, this.fragments = i, this.ranges = n, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = e;
    }
    advance() {
        if (this.baseParse) {
            let r = this.baseParse.advance();
            if (!r) return null;
            if (this.baseParse = null, this.baseTree = r, this.startInner(), this.stoppedAt != null) for (let i of this.inner)i.parse.stopAt(this.stoppedAt);
        }
        if (this.innerDone == this.inner.length) {
            let r = this.baseTree;
            return this.stoppedAt != null && (r = new P6(r.type, r.children, r.positions, r.length, r.propValues.concat([
                [
                    ie2,
                    this.stoppedAt
                ]
            ]))), r;
        }
        let e = this.inner[this.innerDone], t = e.parse.advance();
        if (t) {
            this.innerDone++;
            let r = Object.assign(Object.create(null), e.target.props);
            r[y10.mounted.id] = new he2(t, e.overlay, e.parser), e.target.props = r;
        }
        return null;
    }
    get parsedPos() {
        if (this.baseParse) return 0;
        let e = this.input.length;
        for(let t = this.innerDone; t < this.inner.length; t++)this.inner[t].ranges[0].from < e && (e = Math.min(e, this.inner[t].parse.parsedPos));
        return e;
    }
    stopAt(e) {
        if (this.stoppedAt = e, this.baseParse) this.baseParse.stopAt(e);
        else for(let t = this.innerDone; t < this.inner.length; t++)this.inner[t].parse.stopAt(e);
    }
    startInner() {
        let e = new be3(this.fragments), t = null, r = null, i = new G1(new T6(this.baseTree, this.ranges[0].from, 0, null), 1);
        e: for(let n, s; this.stoppedAt == null || i.from < this.stoppedAt;){
            let l = !0, o;
            if (e.hasNode(i)) {
                if (t) {
                    let u = t.mounts.find((f)=>f.frag.from <= i.from && f.frag.to >= i.to && f.mount.overlay
                    );
                    if (u) for (let f of u.mount.overlay){
                        let d = f.from + u.pos, p = f.to + u.pos;
                        d >= i.from && p <= i.to && t.ranges.push({
                            from: d,
                            to: p
                        });
                    }
                }
                l = !1;
            } else if (r && (s = Se2(r.ranges, i.from, i.to))) l = s != 2;
            else if (!i.type.isAnonymous && i.from < i.to && (n = this.nest(i, this.input))) {
                i.tree || _e1(i);
                let u = e.findMounts(i.from, n.parser);
                if (typeof n.overlay == "function") t = new ce4(n.parser, n.overlay, u, this.inner.length, i.from, i.tree, t);
                else {
                    let f = xe2(this.ranges, n.overlay || [
                        new N2(i.from, i.to)
                    ]);
                    f.length && this.inner.push(new re2(n.parser, n.parser.startParse(this.input, ye2(u, f), f), n.overlay ? n.overlay.map((d)=>new N2(d.from - i.from, d.to - i.from)
                    ) : null, i.tree, f)), n.overlay ? f.length && (r = {
                        ranges: f,
                        depth: 0,
                        prev: r
                    }) : l = !1;
                }
            } else t && (o = t.predicate(i)) && (o === !0 && (o = new N2(i.from, i.to)), o.from < o.to && t.ranges.push(o));
            if (l && i.firstChild()) t && t.depth++, r && r.depth++;
            else for(; !i.nextSibling();){
                if (!i.parent()) break e;
                if (t && !--t.depth) {
                    let u = xe2(this.ranges, t.ranges);
                    u.length && this.inner.splice(t.index, 0, new re2(t.parser, t.parser.startParse(this.input, ye2(t.mounts, u), u), t.ranges.map((f)=>new N2(f.from - t.start, f.to - t.start)
                    ), t.target, u)), t = t.prev;
                }
                r && !--r.depth && (r = r.prev);
            }
        }
    }
};
function Se2(h, e, t) {
    for (let r of h){
        if (r.from >= t) break;
        if (r.to > e) return r.from <= e && r.to >= t ? 2 : 1;
    }
    return 0;
}
function me3(h, e, t, r, i, n) {
    if (e < t) {
        let s = h.buffer[e + 1], l = h.buffer[t - 2];
        r.push(h.slice(e, t, s, l)), i.push(s - n);
    }
}
function _e1(h) {
    let { node: e  } = h, t = 0;
    do h.parent(), t++;
    while (!h.tree)
    let r = 0, i = h.tree, n = 0;
    for(; n = i.positions[r] + h.from, !(n <= e.from && n + i.children[r].length >= e.to); r++);
    let s = i.children[r], l = s.buffer;
    function o(u, f, d, p, v) {
        let c = u;
        for(; l[c + 2] + n <= e.from;)c = l[c + 3];
        let S = [], j = [];
        me3(s, u, c, S, j, p);
        let z = l[c + 1], F = l[c + 2], A = z + n == e.from && F + n == e.to && l[c] == e.type.id;
        return S.push(A ? e.toTree() : o(c + 4, l[c + 3], s.set.types[l[c]], z, F - z)), j.push(z - p), me3(s, l[c + 3], f, S, j, p), new P6(d, S, j, v);
    }
    i.children[r] = o(0, l.length, B4.none, 0, s.length);
    for(let u = 0; u <= t; u++)h.childAfter(e.from);
}
var ne2 = class {
    constructor(e, t){
        this.offset = t, this.done = !1, this.cursor = e.fullCursor();
    }
    moveTo(e) {
        let { cursor: t  } = this, r = e - this.offset;
        for(; !this.done && t.from < r;)t.to >= e && t.enter(r, 1, !1, !1) || t.next(!1) || (this.done = !0);
    }
    hasNode(e) {
        if (this.moveTo(e.from), !this.done && this.cursor.from + this.offset == e.from && this.cursor.tree) for(let t = this.cursor.tree;;){
            if (t == e.tree) return !0;
            if (t.children.length && t.positions[0] == 0 && t.children[0] instanceof P6) t = t.children[0];
            else break;
        }
        return !1;
    }
}, be3 = class {
    constructor(e){
        var t;
        if (this.fragments = e, this.curTo = 0, this.fragI = 0, e.length) {
            let r = this.curFrag = e[0];
            this.curTo = (t = r.tree.prop(ie2)) !== null && t !== void 0 ? t : r.to, this.inner = new ne2(r.tree, -r.offset);
        } else this.curFrag = this.inner = null;
    }
    hasNode(e) {
        for(; this.curFrag && e.from >= this.curTo;)this.nextFrag();
        return this.curFrag && this.curFrag.from <= e.from && this.curTo >= e.to && this.inner.hasNode(e);
    }
    nextFrag() {
        var e;
        if (this.fragI++, this.fragI == this.fragments.length) this.curFrag = this.inner = null;
        else {
            let t = this.curFrag = this.fragments[this.fragI];
            this.curTo = (e = t.tree.prop(ie2)) !== null && e !== void 0 ? e : t.to, this.inner = new ne2(t.tree, -t.offset);
        }
    }
    findMounts(e, t) {
        var r1;
        let i = [];
        if (this.inner) {
            this.inner.cursor.moveTo(e, 1);
            for(let n = this.inner.cursor.node; n; n = n.parent){
                let s = (r1 = n.tree) === null || r1 === void 0 ? void 0 : r1.prop(y10.mounted);
                if (s && s.parser == t) for(let l = this.fragI; l < this.fragments.length; l++){
                    let o = this.fragments[l];
                    if (o.from >= n.to) break;
                    o.tree == this.curFrag.tree && i.push({
                        frag: o,
                        pos: n.from - o.offset,
                        mount: s
                    });
                }
            }
        }
        return i;
    }
};
function xe2(h, e) {
    let t = null, r = e;
    for(let i = 1, n = 0; i < h.length; i++){
        let s = h[i - 1].to, l = h[i].from;
        for(; n < r.length; n++){
            let o = r[n];
            if (o.from >= l) break;
            o.to <= s || (t || (r = t = e.slice()), o.from < s ? (t[n] = new N2(o.from, s), o.to > l && t.splice(n + 1, 0, new N2(l, o.to))) : o.to > l ? t[n--] = new N2(l, o.to) : t.splice(n--, 1));
        }
    }
    return r;
}
function Pe1(h, e, t, r) {
    let i = 0, n = 0, s = !1, l = !1, o = -1000000000, u = [];
    for(;;){
        let f = i == h.length ? 1000000000 : s ? h[i].to : h[i].from, d = n == e.length ? 1000000000 : l ? e[n].to : e[n].from;
        if (s != l) {
            let p = Math.max(o, t), v = Math.min(f, d, r);
            p < v && u.push(new N2(p, v));
        }
        if (o = Math.min(f, d), o == 1000000000) break;
        f == o && (s ? (s = !1, i++) : s = !0), d == o && (l ? (l = !1, n++) : l = !0);
    }
    return u;
}
function ye2(h, e) {
    let t = [];
    for (let { pos: r , mount: i , frag: n  } of h){
        let s = r + (i.overlay ? i.overlay[0].from : 0), l = s + i.tree.length, o = Math.max(n.from, s), u = Math.min(n.to, l);
        if (i.overlay) {
            let f = i.overlay.map((p)=>new N2(p.from + r, p.to + r)
            ), d = Pe1(e, f, o, u);
            for(let p = 0, v = o;; p++){
                let c = p == d.length, S = c ? u : d[p].from;
                if (S > v && t.push(new $4(v, S, i.tree, -s, n.from >= v, n.to <= S)), c) break;
                v = d[p].to;
            }
        } else t.push(new $4(o, u, i.tree, -s, n.from >= s, n.to <= l));
    }
    return t;
}
var S7 = new y10;
function H8(n) {
    return O1.define({
        combine: n ? (t)=>t.concat(n)
         : void 0
    });
}
var u = class {
    constructor(t, e, i, r = []){
        this.data = t, this.topNode = i, w1.prototype.hasOwnProperty("tree") || Object.defineProperty(w1.prototype, "tree", {
            get () {
                return v9(this);
            }
        }), this.parser = e, this.extension = [
            m3.of(this),
            w1.languageData.of((s, o, a)=>s.facet(B10(s, o, a))
            )
        ].concat(r);
    }
    isActiveAt(t, e, i = -1) {
        return B10(t, e, i) == this.data;
    }
    findRegions(t) {
        let e = t.facet(m3);
        if ((e == null ? void 0 : e.data) == this.data) return [
            {
                from: 0,
                to: t.doc.length
            }
        ];
        if (!e || !e.allowsNesting) return [];
        let i = [], r = (s, o)=>{
            if (s.prop(S7) == this.data) {
                i.push({
                    from: o,
                    to: o + s.length
                });
                return;
            }
            let a = s.prop(y10.mounted);
            if (a) {
                if (a.tree.prop(S7) == this.data) {
                    if (a.overlay) for (let l of a.overlay)i.push({
                        from: l.from + o,
                        to: l.to + o
                    });
                    else i.push({
                        from: o,
                        to: o + s.length
                    });
                    return;
                } else if (a.overlay) {
                    let l = i.length;
                    if (r(a.tree, a.overlay[0].from + o), i.length > l) return;
                }
            }
            for(let l = 0; l < s.children.length; l++){
                let h = s.children[l];
                h instanceof P6 && r(h, s.positions[l] + o);
            }
        };
        return r(v9(t), 0), i;
    }
    get allowsNesting() {
        return !0;
    }
};
u.setState = v.define();
function B10(n, t, e) {
    let i = n.facet(m3);
    if (!i) return null;
    let r = i.data;
    if (i.allowsNesting) for(let s = v9(n).topNode; s; s = s.enter(t, e, !0, !1))r = s.type.prop(S7) || r;
    return r;
}
var P7 = class extends u {
    constructor(t, e){
        super(t, e, e.topNode);
        this.parser = e;
    }
    static define(t) {
        let e = H8(t.languageData);
        return new P7(e, t.parser.configure({
            props: [
                S7.add((i)=>i.isTop ? e : void 0
                )
            ]
        }));
    }
    configure(t) {
        return new P7(this.data, this.parser.configure(t));
    }
    get allowsNesting() {
        return this.parser.wrappers.length > 0;
    }
};
function v9(n) {
    let t = n.field(u.state, !1);
    return t ? t.tree : P6.empty;
}
var D5 = class {
    constructor(t, e = t.length){
        this.doc = t, this.length = e, this.cursorPos = 0, this.string = "", this.cursor = t.iter();
    }
    syncTo(t) {
        return this.string = this.cursor.next(t - this.cursorPos).value, this.cursorPos = t + this.string.length, this.cursorPos - this.string.length;
    }
    chunk(t) {
        return this.syncTo(t), this.string;
    }
    get lineChunks() {
        return !0;
    }
    read(t, e) {
        let i = this.cursorPos - this.string.length;
        return t < i || e >= this.cursorPos ? this.doc.sliceString(t, e) : this.string.slice(t - i, e - i);
    }
}, y17 = null, C5 = class {
    constructor(t, e, i = [], r, s, o, a, l){
        this.parser = t, this.state = e, this.fragments = i, this.tree = r, this.treeLen = s, this.viewport = o, this.skipped = a, this.scheduleOn = l, this.parse = null, this.tempSkipped = [];
    }
    startParse() {
        return this.parser.startParse(new D5(this.state.doc), this.fragments);
    }
    work(t, e) {
        return e != null && e >= this.state.doc.length && (e = void 0), this.tree != P6.empty && this.isDone(e ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(()=>{
            var i;
            let r = Date.now() + t;
            for(this.parse || (this.parse = this.startParse()), e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e);;){
                let s = this.parse.advance();
                if (s) if (this.fragments = this.withoutTempSkipped($4.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (e ?? this.state.doc.length)) this.parse = this.startParse();
                else return !0;
                if (Date.now() > r) return !1;
            }
        });
    }
    takeTree() {
        let t, e;
        this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext(()=>{
            for(; !(e = this.parse.advance()););
        }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped($4.addTree(this.tree, this.fragments, !0)), this.parse = null);
    }
    withContext(t) {
        let e = y17;
        y17 = this;
        try {
            return t();
        } finally{
            y17 = e;
        }
    }
    withoutTempSkipped(t) {
        for(let e; e = this.tempSkipped.pop();)t = O6(t, e.from, e.to);
        return t;
    }
    changes(t, e) {
        let { fragments: i , tree: r , treeLen: s , viewport: o , skipped: a  } = this;
        if (this.takeTree(), !t.empty) {
            let l = [];
            if (t.iterChangedRanges((h, f, d, x)=>l.push({
                    fromA: h,
                    toA: f,
                    fromB: d,
                    toB: x
                })
            ), i = $4.applyChanges(i, l), r = P6.empty, s = 0, o = {
                from: t.mapPos(o.from, -1),
                to: t.mapPos(o.to, 1)
            }, this.skipped.length) {
                a = [];
                for (let h of this.skipped){
                    let f = t.mapPos(h.from, 1), d = t.mapPos(h.to, -1);
                    f < d && a.push({
                        from: f,
                        to: d
                    });
                }
            }
        }
        return new C5(this.parser, e, i, r, s, o, a, this.scheduleOn);
    }
    updateViewport(t) {
        if (this.viewport.from == t.from && this.viewport.to == t.to) return !1;
        this.viewport = t;
        let e = this.skipped.length;
        for(let i = 0; i < this.skipped.length; i++){
            let { from: r , to: s  } = this.skipped[i];
            r < t.to && s > t.from && (this.fragments = O6(this.fragments, r, s), this.skipped.splice(i--, 1));
        }
        return this.skipped.length >= e ? !1 : (this.reset(), !0);
    }
    reset() {
        this.parse && (this.takeTree(), this.parse = null);
    }
    skipUntilInView(t, e) {
        this.skipped.push({
            from: t,
            to: e
        });
    }
    static getSkippingParser(t) {
        return new class extends Ae2 {
            createParse(e, i, r) {
                let s = r[0].from, o = r[r.length - 1].to;
                return {
                    parsedPos: s,
                    advance () {
                        let l = y17;
                        if (l) {
                            for (let h of r)l.tempSkipped.push(h);
                            t && (l.scheduleOn = l.scheduleOn ? Promise.all([
                                l.scheduleOn,
                                t
                            ]) : t);
                        }
                        return this.parsedPos = o, new P6(B4.none, [], [], o - s);
                    },
                    stoppedAt: null,
                    stopAt () {
                    }
                };
            }
        };
    }
    isDone(t) {
        t = Math.min(t, this.state.doc.length);
        let e = this.fragments;
        return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
    }
    static get() {
        return y17;
    }
};
function O6(n, t, e) {
    return $4.applyChanges(n, [
        {
            fromA: t,
            toA: e,
            fromB: t,
            toB: e
        }
    ]);
}
var c6 = class {
    constructor(t){
        this.context = t, this.tree = t.tree;
    }
    apply(t) {
        if (!t.docChanged) return this;
        let e = this.context.changes(t.changes, t.state), i = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
        return e.work(20, i) || e.takeTree(), new c6(e);
    }
    static init(t) {
        let e = Math.min(3000, t.doc.length), i = new C5(t.facet(m3).parser, t, [], P6.empty, 0, {
            from: 0,
            to: e
        }, [], null);
        return i.work(20, e) || i.takeTree(), new c6(i);
    }
};
u.state = B1.define({
    create: c6.init,
    update (n, t) {
        for (let e of t.effects)if (e.is(u.setState)) return e.value;
        return t.startState.facet(m3) != t.state.facet(m3) ? c6.init(t.state) : n.apply(t);
    }
});
var F3 = (n)=>{
    let t = setTimeout(()=>n()
    , 500);
    return ()=>clearTimeout(t)
    ;
};
typeof requestIdleCallback != "undefined" && (F3 = (n)=>{
    let t = -1, e = setTimeout(()=>{
        t = requestIdleCallback(n, {
            timeout: 500 - 100
        });
    }, 100);
    return ()=>t < 0 ? clearTimeout(e) : cancelIdleCallback(t)
    ;
});
var N9 = z3.fromClass(class {
    constructor(t){
        this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
    }
    update(t) {
        let e = this.view.state.field(u.state).context;
        (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), t.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
    }
    scheduleWork() {
        if (this.working) return;
        let { state: t  } = this.view, e = t.field(u.state);
        (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = F3(this.work));
    }
    work(t) {
        this.working = null;
        let e = Date.now();
        if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 30000, this.chunkBudget = 3000), this.chunkBudget <= 0) return;
        let { state: i , viewport: { to: r  }  } = this.view, s = i.field(u.state);
        if (s.tree == s.context.tree && s.context.isDone(r + 100000)) return;
        let o = Math.min(this.chunkBudget, 100, t ? Math.max(25, t.timeRemaining() - 5) : 1000000000), a = s.context.treeLen < r && i.doc.length > r + 1000, l = s.context.work(o, r + (a ? 0 : 100000));
        this.chunkBudget -= Date.now() - e, (l || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({
            effects: u.setState.of(new c6(s.context))
        })), this.chunkBudget > 0 && !(l && !a) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
    }
    checkAsyncSchedule(t) {
        t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(()=>this.scheduleWork()
        ).catch((e)=>lt(this.view.state, e)
        ).then(()=>this.workScheduled--
        ), t.scheduleOn = null);
    }
    destroy() {
        this.working && this.working();
    }
    isWorking() {
        return this.working || this.workScheduled > 0;
    }
}, {
    eventHandlers: {
        focus () {
            this.scheduleWork();
        }
    }
}), m3 = O1.define({
    combine (n) {
        return n.length ? n[0] : null;
    },
    enables: [
        u.state,
        N9
    ]
}), J10 = class {
    constructor(t, e = []){
        this.language = t, this.support = e, this.extension = [
            t,
            e
        ];
    }
}, T9 = class {
    constructor(t, e, i, r, s, o = void 0){
        this.name = t, this.alias = e, this.extensions = i, this.filename = r, this.loadFunc = s, this.support = o, this.loading = null;
    }
    load() {
        return this.loading || (this.loading = this.loadFunc().then((t)=>this.support = t
        , (t)=>{
            throw this.loading = null, t;
        }));
    }
    static of(t) {
        let { load: e , support: i  } = t;
        if (!e) {
            if (!i) throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");
            e = ()=>Promise.resolve(i)
            ;
        }
        return new T9(t.name, (t.alias || []).concat(t.name).map((r)=>r.toLowerCase()
        ), t.extensions || [], t.filename, e, i);
    }
    static matchFilename(t, e) {
        for (let r of t)if (r.filename && r.filename.test(e)) return r;
        let i = /\.([^.]+)$/.exec(e);
        if (i) {
            for (let r of t)if (r.extensions.indexOf(i[1]) > -1) return r;
        }
        return null;
    }
    static matchLanguageName(t, e, i = !0) {
        e = e.toLowerCase();
        for (let r of t)if (r.alias.some((s)=>s == e
        )) return r;
        if (i) for (let r1 of t)for (let s of r1.alias){
            let o = e.indexOf(s);
            if (o > -1 && (s.length > 2 || !/\w/.test(e[o - 1]) && !/\w/.test(e[o + s.length]))) return r1;
        }
        return null;
    }
}, G3 = O1.define(), E11 = O1.define({
    combine: (n)=>{
        if (!n.length) return "  ";
        if (!/^(?: +|\t+)$/.test(n[0])) throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
        return n[0];
    }
});
function K12(n) {
    let t = n.facet(E11);
    return t.charCodeAt(0) == 9 ? n.tabSize * t.length : t.length;
}
function Q5(n, t) {
    let e = "", i = n.tabSize;
    if (n.facet(E11).charCodeAt(0) == 9) for(; t >= i;)e += "	", t -= i;
    for(let r = 0; r < t; r++)e += " ";
    return e;
}
function X4(n, t) {
    n instanceof w1 && (n = new I6(n));
    for (let i of n.state.facet(G3)){
        let r = i(n, t);
        if (r != null) return r;
    }
    let e = v9(n.state);
    return e ? Z2(n, e, t) : null;
}
var I6 = class {
    constructor(t, e = {
    }){
        this.state = t, this.options = e, this.unit = K12(t);
    }
    lineAt(t, e = 1) {
        let i = this.state.doc.lineAt(t), { simulateBreak: r  } = this.options;
        return r != null && r >= i.from && r <= i.to ? (e < 0 ? r < t : r <= t) ? {
            text: i.text.slice(r - i.from),
            from: r
        } : {
            text: i.text.slice(0, r - i.from),
            from: i.from
        } : i;
    }
    textAfterPos(t, e = 1) {
        if (this.options.simulateDoubleBreak && t == this.options.simulateBreak) return "";
        let { text: i , from: r  } = this.lineAt(t, e);
        return i.slice(t - r, Math.min(i.length, t + 100 - r));
    }
    column(t, e = 1) {
        let { text: i , from: r  } = this.lineAt(t, e), s = this.countColumn(i, t - r), o = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
        return o > -1 && (s += o - this.countColumn(i, i.search(/\S|$/))), s;
    }
    countColumn(t, e = t.length) {
        return J(t, this.state.tabSize, e);
    }
    lineIndent(t, e = 1) {
        let { text: i , from: r  } = this.lineAt(t, e), s = this.options.overrideIndentation;
        if (s) {
            let o = s(r);
            if (o > -1) return o;
        }
        return this.countColumn(i, i.search(/\S|$/));
    }
    get simulatedBreak() {
        return this.options.simulateBreak || null;
    }
}, Y2 = new y10;
function Z2(n, t, e) {
    return L11(t.resolveInner(e).enterUnfinishedNodesBefore(e), e, n);
}
function _2(n) {
    return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function tt1(n) {
    let t = n.type.prop(Y2);
    if (t) return t;
    let e = n.firstChild, i;
    if (e && (i = e.type.prop(y10.closedBy))) {
        let r = n.lastChild, s = r && i.indexOf(r.name) > -1;
        return (o)=>M9(o, !0, 1, void 0, s && !_2(o) ? r.from : void 0)
        ;
    }
    return n.parent == null ? et1 : null;
}
function L11(n, t, e) {
    for(; n; n = n.parent){
        let i = tt1(n);
        if (i) return i(new W8(e, t, n));
    }
    return null;
}
function et1() {
    return 0;
}
var W8 = class extends I6 {
    constructor(t, e, i){
        super(t.state, t.options);
        this.base = t, this.pos = e, this.node = i;
    }
    get textAfter() {
        return this.textAfterPos(this.pos);
    }
    get baseIndent() {
        let t = this.state.doc.lineAt(this.node.from);
        for(;;){
            let e = this.node.resolve(t.from);
            for(; e.parent && e.parent.from == e.from;)e = e.parent;
            if (nt(e, this.node)) break;
            t = this.state.doc.lineAt(e.from);
        }
        return this.lineIndent(t.from);
    }
    continue() {
        let t = this.node.parent;
        return t ? L11(t, this.pos, this.base) : 0;
    }
};
function nt(n, t) {
    for(let e = t; e; e = e.parent)if (n == e) return !0;
    return !1;
}
function it1(n) {
    let t = n.node, e = t.childAfter(t.from), i = t.lastChild;
    if (!e) return null;
    let r = n.options.simulateBreak, s = n.state.doc.lineAt(e.from), o = r == null || r <= s.from ? s.to : Math.min(s.to, r);
    for(let a = e.to;;){
        let l = t.childAfter(a);
        if (!l || l == i) return null;
        if (!l.type.isSkipped) return l.from < o ? e : null;
        a = l.to;
    }
}
function gt1({ closing: n , align: t = !0 , units: e = 1  }) {
    return (i)=>M9(i, t, e, n)
    ;
}
function M9(n, t, e, i, r) {
    let s = n.textAfter, o = s.match(/^\s*/)[0].length, a = i && s.slice(o, o + i.length) == i || r == n.pos + o, l = t ? it1(n) : null;
    return l ? a ? n.column(l.from) : n.column(l.to) : n.baseIndent + (a ? 0 : n.unit * e);
}
var kt1 = (n)=>n.baseIndent
;
function wt1({ except: n , units: t = 1  } = {
}) {
    return (e)=>{
        let i = n && n.test(e.textAfter);
        return e.baseIndent + (i ? 0 : t * e.unit);
    };
}
var rt1 = 200;
function vt1() {
    return w1.transactionFilter.of((n)=>{
        if (!n.docChanged || !n.isUserEvent("input.type")) return n;
        let t = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
        if (!t.length) return n;
        let e = n.newDoc, { head: i  } = n.newSelection.main, r = e.lineAt(i);
        if (i > r.from + rt1) return n;
        let s = e.sliceString(r.from, i);
        if (!t.some((h)=>h.test(s)
        )) return n;
        let { state: o  } = n, a = -1, l = [];
        for (let { head: h  } of o.selection.ranges){
            let f = o.doc.lineAt(h);
            if (f.from == a) continue;
            a = f.from;
            let d = X4(o, f.from);
            if (d == null) continue;
            let x = /^\s*/.exec(f.text)[0], b = Q5(o, d);
            x != b && l.push({
                from: f.from,
                to: f.from + x.length,
                insert: b
            });
        }
        return l.length ? [
            n,
            {
                changes: l,
                sequential: !0
            }
        ] : n;
    });
}
var st = O1.define(), ot1 = new y10;
function yt(n) {
    let t = n.firstChild, e = n.lastChild;
    return t && t.to < e.from ? {
        from: t.to,
        to: e.type.isError ? n.to : e.from
    } : null;
}
function lt1(n, t, e) {
    let i = v9(n);
    if (i.length == 0) return null;
    let r = i.resolveInner(e), s = null;
    for(let o = r; o; o = o.parent){
        if (o.to <= e || o.from > e) continue;
        if (s && o.from < t) break;
        let a = o.type.prop(ot1);
        if (a) {
            let l = a(o, n);
            l && l.from <= e && l.from >= t && l.to > e && (s = l);
        }
    }
    return s;
}
function xt1(n, t, e) {
    for (let i of n.facet(st)){
        let r = i(n, t, e);
        if (r) return r;
    }
    return lt1(n, t, e);
}
var h1 = class extends v1 {
    compare(e) {
        return this == e || this.constructor == e.constructor && this.eq(e);
    }
    eq(e) {
        return !1;
    }
    destroy(e) {
    }
};
h1.prototype.elementClass = "";
h1.prototype.toDOM = void 0;
h1.prototype.mapMode = D2.TrackBefore;
h1.prototype.startSide = h1.prototype.endSide = -1;
h1.prototype.point = !0;
var k2 = O1.define(), V8 = {
    class: "",
    renderEmptyElements: !1,
    elementStyle: "",
    markers: ()=>f10.empty
    ,
    lineMarker: ()=>null
    ,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {
    }
}, p20 = O1.define();
function K13(t) {
    return [
        C7(),
        p20.of(Object.assign(Object.assign({
        }, V8), t))
    ];
}
var q5 = D3.baseTheme({
    ".cm-gutters": {
        display: "flex",
        height: "100%",
        boxSizing: "border-box",
        left: 0,
        zIndex: 200
    },
    "&light .cm-gutters": {
        backgroundColor: "#f5f5f5",
        color: "#999",
        borderRight: "1px solid #ddd"
    },
    "&dark .cm-gutters": {
        backgroundColor: "#333338",
        color: "#ccc"
    },
    ".cm-gutter": {
        display: "flex !important",
        flexDirection: "column",
        flexShrink: 0,
        boxSizing: "border-box",
        minHeight: "100%",
        overflow: "hidden"
    },
    ".cm-gutterElement": {
        boxSizing: "border-box"
    },
    ".cm-lineNumbers .cm-gutterElement": {
        padding: "0 3px 0 5px",
        minWidth: "20px",
        textAlign: "right",
        whiteSpace: "nowrap"
    },
    "&light .cm-activeLineGutter": {
        backgroundColor: "#e2f2ff"
    },
    "&dark .cm-activeLineGutter": {
        backgroundColor: "#222227"
    }
}), v10 = O1.define({
    combine: (t)=>t.some((e)=>e
        )
});
function C7(t) {
    let e = [
        P9,
        q5
    ];
    return t && t.fixed === !1 && e.push(v10.of(!0)), e;
}
var P9 = z3.fromClass(class {
    constructor(t){
        this.view = t, this.prevViewport = t.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = t.state.facet(p20).map((e)=>new b6(t, e)
        );
        for (let e of this.gutters)this.dom.appendChild(e.dom);
        this.fixed = !t.state.facet(v10), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), t.scrollDOM.insertBefore(this.dom, t.contentDOM);
    }
    update(t) {
        if (this.updateGutters(t)) {
            let e = this.prevViewport, r = t.view.viewport, s = Math.min(e.to, r.to) - Math.max(e.from, r.from);
            this.syncGutters(s < (r.to - r.from) * 0.8);
        }
        t.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(v10) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t.view.viewport;
    }
    syncGutters(t) {
        let e = this.dom.nextSibling;
        t && this.dom.remove();
        let r = f10.iter(this.view.state.facet(k2), this.view.viewport.from), s = [], i = this.gutters.map((o)=>new O7(o, this.view.viewport, -this.view.documentPadding.top)
        );
        for (let o of this.view.viewportLineBlocks){
            let n;
            if (Array.isArray(o.type)) {
                for (let l of o.type)if (l.type == A9.Text) {
                    n = l;
                    break;
                }
            } else n = o.type == A9.Text ? o : void 0;
            if (!!n) {
                s.length && (s = []), E14(r, s, o.from);
                for (let l of i)l.line(this.view, n, s);
            }
        }
        for (let o1 of i)o1.finish();
        t && this.view.scrollDOM.insertBefore(this.dom, e);
    }
    updateGutters(t) {
        let e = t.startState.facet(p20), r = t.state.facet(p20), s = t.docChanged || t.heightChanged || t.viewportChanged || !f10.eq(t.startState.facet(k2), t.state.facet(k2), t.view.viewport.from, t.view.viewport.to);
        if (e == r) for (let i of this.gutters)i.update(t) && (s = !0);
        else {
            s = !0;
            let i = [];
            for (let o of r){
                let n = e.indexOf(o);
                n < 0 ? i.push(new b6(this.view, o)) : (this.gutters[n].update(t), i.push(this.gutters[n]));
            }
            for (let o1 of this.gutters)o1.dom.remove(), i.indexOf(o1) < 0 && o1.destroy();
            for (let o2 of i)this.dom.appendChild(o2.dom);
            this.gutters = i;
        }
        return s;
    }
    destroy() {
        for (let t of this.gutters)t.destroy();
        this.dom.remove();
    }
}, {
    provide: V1.scrollMargins.from((t)=>t.gutters.length == 0 || !t.fixed ? null : t.view.textDirection == P4.LTR ? {
            left: t.dom.offsetWidth
        } : {
            right: t.dom.offsetWidth
        }
    )
});
function S10(t) {
    return Array.isArray(t) ? t : [
        t
    ];
}
function E14(t, e, r) {
    for(; t.value && t.from <= r;)t.from == r && e.push(t.value), t.next();
}
var O7 = class {
    constructor(e, r, s){
        this.gutter = e, this.height = s, this.localMarkers = [], this.i = 0, this.cursor = f10.iter(e.markers, r.from);
    }
    line(e, r, s) {
        this.localMarkers.length && (this.localMarkers = []), E14(this.cursor, this.localMarkers, r.from);
        let i = s.length ? this.localMarkers.concat(s) : this.localMarkers, o = this.gutter.config.lineMarker(e, r, i);
        o && i.unshift(o);
        let n = this.gutter;
        if (i.length == 0 && !n.config.renderEmptyElements) return;
        let l = r.top - this.height;
        if (this.i == n.elements.length) {
            let a = new y23(e, r.height, l, i);
            n.elements.push(a), n.dom.appendChild(a.dom);
        } else n.elements[this.i].update(e, r.height, l, i);
        this.height = r.bottom, this.i++;
    }
    finish() {
        let e = this.gutter;
        for(; e.elements.length > this.i;){
            let r = e.elements.pop();
            e.dom.removeChild(r.dom), r.destroy();
        }
    }
}, b6 = class {
    constructor(e, r){
        this.view = e, this.config = r, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for(let s in r.domEventHandlers)this.dom.addEventListener(s, (i)=>{
            let o = e.lineBlockAtHeight(i.clientY - e.documentTop);
            r.domEventHandlers[s](e, o, i) && i.preventDefault();
        });
        this.markers = S10(r.markers(e)), r.initialSpacer && (this.spacer = new y23(e, 0, 0, [
            r.initialSpacer(e)
        ]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
    }
    update(e) {
        let r = this.markers;
        if (this.markers = S10(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
            let i = this.config.updateSpacer(this.spacer.markers[0], e);
            i != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [
                i
            ]);
        }
        let s = e.view.viewport;
        return !f10.eq(this.markers, r, s.from, s.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
    }
    destroy() {
        for (let e of this.elements)e.destroy();
    }
}, y23 = class {
    constructor(e, r, s, i){
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.update(e, r, s, i);
    }
    update(e, r, s, i) {
        this.height != r && (this.dom.style.height = (this.height = r) + "px"), this.above != s && (this.dom.style.marginTop = (this.above = s) ? s + "px" : ""), z7(this.markers, i) || this.setMarkers(e, i);
    }
    setMarkers(e, r) {
        let s = "cm-gutterElement", i = this.dom.firstChild;
        for(let o = 0, n = 0;;){
            let l = n, a = o < r.length ? r[o++] : null, m = !1;
            if (a) {
                let u = a.elementClass;
                u && (s += " " + u);
                for(let c = n; c < this.markers.length; c++)if (this.markers[c].compare(a)) {
                    l = c, m = !0;
                    break;
                }
            } else l = this.markers.length;
            for(; n < l;){
                let u = this.markers[n++];
                if (u.toDOM) {
                    u.destroy(i);
                    let c = i.nextSibling;
                    i.remove(), i = c;
                }
            }
            if (!a) break;
            a.toDOM && (m ? i = i.nextSibling : this.dom.insertBefore(a.toDOM(e), i)), m && n++;
        }
        this.dom.className = s, this.markers = r;
    }
    destroy() {
        this.setMarkers(null, []);
    }
};
function z7(t, e) {
    if (t.length != e.length) return !1;
    for(let r = 0; r < t.length; r++)if (!t[r].compare(e[r])) return !1;
    return !0;
}
var R5 = O1.define(), d2 = O1.define({
    combine (t) {
        return be4(t, {
            formatNumber: String,
            domEventHandlers: {
            }
        }, {
            domEventHandlers (e, r) {
                let s = Object.assign({
                }, e);
                for(let i in r){
                    let o = s[i], n = r[i];
                    s[i] = o ? (l, a, m)=>o(l, a, m) || n(l, a, m)
                     : n;
                }
                return s;
            }
        });
    }
}), x11 = class extends h1 {
    constructor(e){
        super();
        this.number = e;
    }
    eq(e) {
        return this.number == e.number;
    }
    toDOM() {
        return document.createTextNode(this.number);
    }
};
function w18(t, e) {
    return t.state.facet(d2).formatNumber(e, t.state);
}
var j5 = p20.compute([
    d2
], (t)=>({
        class: "cm-lineNumbers",
        renderEmptyElements: !1,
        markers (e) {
            return e.state.facet(R5);
        },
        lineMarker (e, r, s) {
            return s.some((i)=>i.toDOM
            ) ? null : new x11(w18(e, e.state.doc.lineAt(r.from).number));
        },
        lineMarkerChange: (e)=>e.startState.facet(d2) != e.state.facet(d2)
        ,
        initialSpacer (e) {
            return new x11(w18(e, N10(e.state.doc.lines)));
        },
        updateSpacer (e, r) {
            let s = w18(r.view, N10(r.view.state.doc.lines));
            return s == e.number ? e : new x11(s);
        },
        domEventHandlers: t.facet(d2).domEventHandlers
    })
);
function Q6(t = {
}) {
    return [
        d2.of(t),
        C7(),
        j5
    ];
}
function N10(t) {
    let e = 9;
    for(; e < t;)e = e * 10 + 9;
    return e;
}
var W9 = new class extends h1 {
    constructor(){
        super(...arguments);
        this.elementClass = "cm-activeLineGutter";
    }
}, F5 = k2.compute([
    "selection"
], (t)=>{
    let e = [], r = -1;
    for (let s of t.selection.ranges)if (s.empty) {
        let i = t.doc.lineAt(s.head).from;
        i > r && (r = i, e.push(W9.range(i)));
    }
    return f10.of(e);
});
function U5() {
    return F5;
}
function x12(e, t) {
    let o = t.mapPos(e.from, 1), n = t.mapPos(e.to, -1);
    return o >= n ? void 0 : {
        from: o,
        to: n
    };
}
var d6 = v.define({
    map: x12
}), c9 = v.define({
    map: x12
});
function A11(e) {
    let t = [];
    for (let { head: o  } of e.state.selection.ranges)t.some((n)=>n.from <= o && n.to >= o
    ) || t.push(e.lineBlockAt(o));
    return t;
}
var a12 = B1.define({
    create () {
        return w6.none;
    },
    update (e, t) {
        e = e.map(t.changes);
        for (let o of t.effects)o.is(d6) && !$8(e, o.value.from, o.value.to) ? e = e.update({
            add: [
                _3.range(o.value.from, o.value.to)
            ]
        }) : o.is(c9) && (e = e.update({
            filter: (n, l)=>o.value.from != n || o.value.to != l
            ,
            filterFrom: o.value.from,
            filterTo: o.value.to
        }));
        if (t.selection) {
            let o = !1, { head: n  } = t.selection.main;
            e.between(n, n, (l, r)=>{
                l < n && r > n && (o = !0);
            }), o && (e = e.update({
                filterFrom: n,
                filterTo: n,
                filter: (l, r)=>r <= n || l >= n
            }));
        }
        return e;
    },
    provide: (e)=>D3.decorations.from(e)
});
function m4(e, t, o) {
    var n;
    let l = null;
    return (n = e.field(a12, !1)) === null || n === void 0 || n.between(t, o, (r, f)=>{
        (!l || l.from > r) && (l = {
            from: r,
            to: f
        });
    }), l;
}
function $8(e, t, o) {
    let n = !1;
    return e.between(t, t, (l, r)=>{
        l == t && r == o && (n = !0);
    }), n;
}
function M10(e, t) {
    return e.field(a12, !1) ? t : t.concat(v.appendConfig.of(O8()));
}
var U6 = (e)=>{
    for (let t of A11(e)){
        let o = xt1(e.state, t.from, t.to);
        if (o) return e.dispatch({
            effects: M10(e.state, [
                d6.of(o),
                D6(e, o)
            ])
        }), !0;
    }
    return !1;
}, j7 = (e)=>{
    if (!e.state.field(a12, !1)) return !1;
    let t = [];
    for (let o of A11(e)){
        let n = m4(e.state, o.from, o.to);
        n && t.push(c9.of(n), D6(e, n, !1));
    }
    return t.length && e.dispatch({
        effects: t
    }), t.length > 0;
};
function D6(e, t, o = !0) {
    let n = e.state.doc.lineAt(t.from).number, l = e.state.doc.lineAt(t.to).number;
    return D3.announce.of(`${e.state.phrase(o ? "Folded lines" : "Unfolded lines")} ${n} ${e.state.phrase("to")} ${l}.`);
}
var L12 = (e)=>{
    let { state: t  } = e, o = [];
    for(let n = 0; n < t.doc.length;){
        let l = e.lineBlockAt(n), r = xt1(t, l.from, l.to);
        r && o.push(d6.of(r)), n = (r ? e.lineBlockAt(r.to) : l).to + 1;
    }
    return o.length && e.dispatch({
        effects: M10(e.state, o)
    }), !!o.length;
}, V10 = (e)=>{
    let t = e.state.field(a12, !1);
    if (!t || !t.size) return !1;
    let o = [];
    return t.between(0, e.state.doc.length, (n, l)=>{
        o.push(c9.of({
            from: n,
            to: l
        }));
    }), e.dispatch({
        effects: o
    }), !0;
}, X5 = [
    {
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: U6
    },
    {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: j7
    },
    {
        key: "Ctrl-Alt-[",
        run: L12
    },
    {
        key: "Ctrl-Alt-]",
        run: V10
    }
], W10 = {
    placeholderDOM: null,
    placeholderText: "\u2026"
}, T10 = O1.define({
    combine (e) {
        return be4(e, W10);
    }
});
function O8(e) {
    let t = [
        a12,
        z9
    ];
    return e && t.push(T10.of(e)), t;
}
var _3 = w6.replace({
    widget: new class extends Q1 {
        ignoreEvents() {
            return !1;
        }
        toDOM(e) {
            let { state: t  } = e, o = t.facet(T10), n = (r)=>{
                let f = e.lineBlockAt(e.posAtDOM(r.target)), s = m4(e.state, f.from, f.to);
                s && e.dispatch({
                    effects: c9.of(s)
                }), r.preventDefault();
            };
            if (o.placeholderDOM) return o.placeholderDOM(e, n);
            let l = document.createElement("span");
            return l.textContent = o.placeholderText, l.setAttribute("aria-label", t.phrase("folded code")), l.title = t.phrase("unfold"), l.className = "cm-foldPlaceholder", l.onclick = n, l;
        }
    }
}), q7 = {
    openText: "\u2304",
    closedText: "\u203A",
    markerDOM: null
}, p23 = class extends h1 {
    constructor(t, o){
        super();
        this.config = t, this.open = o;
    }
    eq(t) {
        return this.config == t.config && this.open == t.open;
    }
    toDOM(t) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let o = document.createElement("span");
        return o.textContent = this.open ? this.config.openText : this.config.closedText, o.title = t.state.phrase(this.open ? "Fold line" : "Unfold line"), o;
    }
};
function Y4(e = {
}) {
    let t = Object.assign(Object.assign({
    }, q7), e), o = new p23(t, !0), n = new p23(t, !1), l = z3.fromClass(class {
        constructor(r){
            this.from = r.viewport.from, this.markers = this.buildMarkers(r);
        }
        update(r) {
            (r.docChanged || r.viewportChanged || r.startState.facet(m3) != r.state.facet(m3) || r.startState.field(a12, !1) != r.state.field(a12, !1)) && (this.markers = this.buildMarkers(r.view));
        }
        buildMarkers(r) {
            let f = new x2;
            for (let s of r.viewportLineBlocks){
                let i = m4(r.state, s.from, s.to) ? n : xt1(r.state, s.from, s.to) ? o : null;
                i && f.add(s.from, s.from, i);
            }
            return f.finish();
        }
    });
    return [
        l,
        K13({
            class: "cm-foldGutter",
            markers (r) {
                var f4;
                return ((f4 = r.plugin(l)) === null || f4 === void 0 ? void 0 : f4.markers) || f10.empty;
            },
            initialSpacer () {
                return new p23(t, !1);
            },
            domEventHandlers: {
                click: (r, f)=>{
                    let s = m4(r.state, f.from, f.to);
                    if (s) return r.dispatch({
                        effects: c9.of(s)
                    }), !0;
                    let i = xt1(r.state, f.from, f.to);
                    return i ? (r.dispatch({
                        effects: d6.of(i)
                    }), !0) : !1;
                }
            }
        }),
        O8()
    ];
}
var z9 = D3.baseTheme({
    ".cm-foldPlaceholder": {
        backgroundColor: "#eee",
        border: "1px solid #ddd",
        color: "#888",
        borderRadius: ".2em",
        margin: "0 1px",
        padding: "0 1px",
        cursor: "pointer"
    },
    ".cm-foldGutter span": {
        padding: "0 1px",
        cursor: "pointer"
    }
});
var w20 = D3.baseTheme({
    ".cm-matchingBracket": {
        backgroundColor: "#328c8252"
    },
    ".cm-nonmatchingBracket": {
        backgroundColor: "#bb555544"
    }
}), D7 = 10000, C8 = "()[]{}", S11 = O1.define({
    combine (a) {
        return be4(a, {
            afterCursor: !0,
            brackets: C8,
            maxScanDistance: D7
        });
    }
}), F7 = w6.mark({
    class: "cm-matchingBracket"
}), N11 = w6.mark({
    class: "cm-nonmatchingBracket"
}), _4 = B1.define({
    create () {
        return w6.none;
    },
    update (a, t) {
        if (!t.docChanged && !t.selection) return a;
        let e = [], r = t.state.facet(S11);
        for (let o of t.state.selection.ranges){
            if (!o.empty) continue;
            let c = d8(t.state, o.head, -1, r) || o.head > 0 && d8(t.state, o.head - 1, 1, r) || r.afterCursor && (d8(t.state, o.head, 1, r) || o.head < t.state.doc.length && d8(t.state, o.head + 1, -1, r));
            if (!c) continue;
            let i = c.matched ? F7 : N11;
            e.push(i.range(c.start.from, c.start.to)), c.end && e.push(i.range(c.end.from, c.end.to));
        }
        return w6.set(e, !0);
    },
    provide: (a)=>D3.decorations.from(a)
}), q9 = [
    _4,
    w20
];
function j8(a = {
}) {
    return [
        S11.of(a),
        q9
    ];
}
function x13(a, t, e) {
    let r = a.prop(t < 0 ? y10.openedBy : y10.closedBy);
    if (r) return r;
    if (a.name.length == 1) {
        let o = e.indexOf(a.name);
        if (o > -1 && o % 2 == (t < 0 ? 1 : 0)) return [
            e[o + t]
        ];
    }
    return null;
}
function d8(a, t, e, r = {
}) {
    let o = r.maxScanDistance || D7, c = r.brackets || C8, i = v9(a), l = i.resolveInner(t, e);
    for(let f = l; f; f = f.parent){
        let n = x13(f.type, e, c);
        if (n && f.from < f.to) return A12(a, t, e, f, n, c);
    }
    return E15(a, t, e, i, l.type, o, c);
}
function A12(a, t, e, r, o, c) {
    let i = r.parent, l = {
        from: r.from,
        to: r.to
    }, f = 0, n = i == null ? void 0 : i.cursor;
    if (n && (e < 0 ? n.childBefore(r.from) : n.childAfter(r.to))) do if (e < 0 ? n.to <= r.from : n.from >= r.to) {
        if (f == 0 && o.indexOf(n.type.name) > -1 && n.from < n.to) return {
            start: l,
            end: {
                from: n.from,
                to: n.to
            },
            matched: !0
        };
        if (x13(n.type, e, c)) f++;
        else if (x13(n.type, -e, c) && (f--, f == 0)) return {
            start: l,
            end: n.from == n.to ? void 0 : {
                from: n.from,
                to: n.to
            },
            matched: !1
        };
    }
    while (e < 0 ? n.prevSibling() : n.nextSibling())
    return {
        start: l,
        matched: !1
    };
}
function E15(a, t, e, r, o, c, i) {
    let l = e < 0 ? a.sliceDoc(t - 1, t) : a.sliceDoc(t, t + 1), f = i.indexOf(l);
    if (f < 0 || f % 2 == 0 != e > 0) return null;
    let n = {
        from: e < 0 ? t - 1 : t,
        to: e > 0 ? t + 1 : t
    }, g = a.doc.iterRange(t, e > 0 ? a.doc.length : 0), p = 0;
    for(let u = 0; !g.next().done && u <= c;){
        let s = g.value;
        e < 0 && (u += s.length);
        let b = t + u * e;
        for(let m = e > 0 ? 0 : s.length - 1, v = e > 0 ? s.length : -1; m != v; m += e){
            let k = i.indexOf(s[m]);
            if (!(k < 0 || r.resolve(b + m, 1).type != o)) if (k % 2 == 0 == e > 0) p++;
            else {
                if (p == 1) return {
                    start: n,
                    end: {
                        from: b + m,
                        to: b + m + 1
                    },
                    matched: k >> 1 == f >> 1
                };
                p--;
            }
        }
        e > 0 && (u += s.length);
    }
    return g.done ? {
        start: n,
        matched: !1
    } : null;
}
function g8(e, t) {
    return p48.create(e.ranges.map(t), e.mainIndex);
}
function m5(e, t) {
    return e.update({
        selection: t,
        scrollIntoView: !0,
        userEvent: "select"
    });
}
function y25({ state: e , dispatch: t  }, r) {
    let n = g8(e.selection, r);
    return n.eq(e.selection) ? !1 : (t(m5(e, n)), !0);
}
function B12(e, t) {
    return p48.cursor(t ? e.to : e.from);
}
function C11(e, t) {
    return y25(e, (r)=>r.empty ? e.moveByChar(r, t) : B12(r, t)
    );
}
var _5 = (e)=>C11(e, e.textDirection != P4.LTR)
, $9 = (e)=>C11(e, e.textDirection == P4.LTR)
;
function D8(e, t) {
    return y25(e, (r)=>r.empty ? e.moveByGroup(r, t) : B12(r, t)
    );
}
var Ie1 = (e)=>D8(e, e.textDirection != P4.LTR)
, Te1 = (e)=>D8(e, e.textDirection == P4.LTR)
;
function Pe2(e, t, r) {
    if (t.type.prop(r)) return !0;
    let n = t.to - t.from;
    return n && (n > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to))) || t.firstChild;
}
function S14(e, t, r) {
    let n = v9(e).resolveInner(t.head), l = r ? y10.closedBy : y10.openedBy;
    for(let i = t.head;;){
        let f = r ? n.childAfter(i) : n.childBefore(i);
        if (!f) break;
        Pe2(e, f, l) ? n = f : i = r ? f.to : f.from;
    }
    let o = n.type.prop(l), c, u;
    return o && (c = r ? d8(e, n.from, 1) : d8(e, n.to, -1)) && c.matched ? u = r ? c.end.to : c.end.from : u = r ? n.to : n.from, p48.cursor(u, r ? -1 : 1);
}
var Ve1 = (e)=>y25(e, (t)=>S14(e.state, t, e.textDirection != P4.LTR)
    )
, Ge1 = (e)=>y25(e, (t)=>S14(e.state, t, e.textDirection == P4.LTR)
    )
;
function X6(e, t) {
    return y25(e, (r)=>{
        if (!r.empty) return B12(r, t);
        let n = e.moveVertically(r, t);
        return n.head != r.head ? n : e.moveToLineBoundary(r, t);
    });
}
var Y5 = (e)=>X6(e, !1)
, Z3 = (e)=>X6(e, !0)
;
function ee3(e, t) {
    let { state: r  } = e, n = g8(r.selection, (c)=>c.empty ? e.moveVertically(c, t, e.dom.clientHeight) : B12(c, t)
    );
    if (n.eq(r.selection)) return !1;
    let l = e.coordsAtPos(r.selection.main.head), o = e.scrollDOM.getBoundingClientRect();
    return e.dispatch(m5(r, n), {
        effects: l && l.top > o.top && l.bottom < o.bottom ? D3.scrollIntoView(n.main.head, {
            y: "start",
            yMargin: l.top - o.top
        }) : void 0
    }), !0;
}
var O9 = (e)=>ee3(e, !1)
, F9 = (e)=>ee3(e, !0)
;
function b7(e, t, r) {
    let n = e.lineBlockAt(t.head), l = e.moveToLineBoundary(t, r);
    if (l.head == t.head && l.head != (r ? n.to : n.from) && (l = e.moveToLineBoundary(t, r, !1)), !r && l.head == n.from && n.length) {
        let o = /^\s*/.exec(e.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
        o && t.head != n.from + o && (l = p48.cursor(n.from + o));
    }
    return l;
}
var te3 = (e)=>y25(e, (t)=>b7(e, t, !0)
    )
, re5 = (e)=>y25(e, (t)=>b7(e, t, !1)
    )
, Ue1 = (e)=>y25(e, (t)=>p48.cursor(e.lineBlockAt(t.head).from, 1)
    )
, Oe4 = (e)=>y25(e, (t)=>p48.cursor(e.lineBlockAt(t.head).to, -1)
    )
;
function ne4(e, t, r) {
    let n = !1, l = g8(e.selection, (o)=>{
        let c = d8(e, o.head, -1) || d8(e, o.head, 1) || o.head > 0 && d8(e, o.head - 1, 1) || o.head < e.doc.length && d8(e, o.head + 1, -1);
        if (!c || !c.end) return o;
        n = !0;
        let u = c.start.from == o.head ? c.end.to : c.end.from;
        return r ? p48.range(o.anchor, u) : p48.cursor(u);
    });
    return n ? (t(m5(e, l)), !0) : !1;
}
var Fe = ({ state: e , dispatch: t  })=>ne4(e, t, !1)
;
function h2(e, t) {
    let r = g8(e.state.selection, (n)=>{
        let l = t(n);
        return p48.range(n.anchor, l.head, l.goalColumn);
    });
    return r.eq(e.state.selection) ? !1 : (e.dispatch(m5(e.state, r)), !0);
}
function M11(e, t) {
    return h2(e, (r)=>e.moveByChar(r, t)
    );
}
var oe4 = (e)=>M11(e, e.textDirection != P4.LTR)
, le2 = (e)=>M11(e, e.textDirection == P4.LTR)
;
function R6(e, t) {
    return h2(e, (r)=>e.moveByGroup(r, t)
    );
}
var we4 = (e)=>R6(e, e.textDirection != P4.LTR)
, ze = (e)=>R6(e, e.textDirection == P4.LTR)
;
var ve3 = (e)=>h2(e, (t)=>S14(e.state, t, e.textDirection != P4.LTR)
    )
, He1 = (e)=>h2(e, (t)=>S14(e.state, t, e.textDirection == P4.LTR)
    )
;
function ue5(e, t) {
    return h2(e, (r)=>e.moveVertically(r, t)
    );
}
var ie5 = (e)=>ue5(e, !1)
, se3 = (e)=>ue5(e, !0)
;
function fe4(e, t) {
    return h2(e, (r)=>e.moveVertically(r, t, e.dom.clientHeight)
    );
}
var ae5 = (e)=>fe4(e, !1)
, de5 = (e)=>fe4(e, !0)
, he4 = (e)=>h2(e, (t)=>b7(e, t, !0)
    )
, me4 = (e)=>h2(e, (t)=>b7(e, t, !1)
    )
, Ne2 = (e)=>h2(e, (t)=>p48.cursor(e.lineBlockAt(t.head).from)
    )
, We = (e)=>h2(e, (t)=>p48.cursor(e.lineBlockAt(t.head).to)
    )
, ye3 = ({ state: e , dispatch: t  })=>(t(m5(e, {
        anchor: 0
    })), !0)
, pe5 = ({ state: e , dispatch: t  })=>(t(m5(e, {
        anchor: e.doc.length
    })), !0)
, ke3 = ({ state: e , dispatch: t  })=>(t(m5(e, {
        anchor: e.selection.main.anchor,
        head: 0
    })), !0)
, ge5 = ({ state: e , dispatch: t  })=>(t(m5(e, {
        anchor: e.selection.main.anchor,
        head: e.doc.length
    })), !0)
, qe1 = ({ state: e , dispatch: t  })=>(t(e.update({
        selection: {
            anchor: 0,
            head: e.doc.length
        },
        userEvent: "select"
    })), !0)
, Ke1 = ({ state: e , dispatch: t  })=>{
    let r = T13(e).map(({ from: n , to: l  })=>p48.range(n, Math.min(l + 1, e.doc.length))
    );
    return t(e.update({
        selection: p48.create(r),
        userEvent: "select"
    })), !0;
}, je1 = ({ state: e , dispatch: t  })=>{
    let r = g8(e.selection, (n)=>{
        var l;
        let o = v9(e).resolveInner(n.head, 1);
        for(; !(o.from < n.from && o.to >= n.to || o.to > n.to && o.from <= n.from || !((l = o.parent) === null || l === void 0 ? void 0 : l.parent));)o = o.parent;
        return p48.range(o.to, o.from);
    });
    return t(m5(e, r)), !0;
}, _e2 = ({ state: e , dispatch: t  })=>{
    let r = e.selection, n = null;
    return r.ranges.length > 1 ? n = p48.create([
        r.main
    ]) : r.main.empty || (n = p48.create([
        p48.cursor(r.main.head)
    ])), n ? (t(m5(e, n)), !0) : !1;
};
function E16({ state: e , dispatch: t  }, r) {
    if (e.readOnly) return !1;
    let n = "delete.selection", l = e.changeByRange((o)=>{
        let { from: c , to: u  } = o;
        if (c == u) {
            let i = r(c);
            i < c ? n = "delete.backward" : i > c && (n = "delete.forward"), c = Math.min(c, i), u = Math.max(u, i);
        }
        return c == u ? {
            range: o
        } : {
            changes: {
                from: c,
                to: u
            },
            range: p48.cursor(c)
        };
    });
    return l.changes.empty ? !1 : (t(e.update(l, {
        scrollIntoView: !0,
        userEvent: n
    })), !0);
}
function I7(e, t, r) {
    if (e instanceof D3) for (let n of e.pluginField(V1.atomicRanges))n.between(t, t, (l, o)=>{
        l < t && o > t && (t = r ? o : l);
    });
    return t;
}
var Be1 = (e, t)=>E16(e, (r)=>{
        let { state: n  } = e, l = n.doc.lineAt(r), o, c;
        if (!t && r > l.from && r < l.from + 200 && !/[^ \t]/.test(o = l.text.slice(0, r - l.from))) {
            if (o[o.length - 1] == "	") return r - 1;
            let u = J(o, n.tabSize), i = u % K12(n) || K12(n);
            for(let f = 0; f < i && o[o.length - 1 - f] == " "; f++)r--;
            c = r;
        } else c = A6(l.text, r - l.from, t) + l.from, c == r && l.number != (t ? n.doc.lines : 1) && (c += t ? 1 : -1);
        return I7(e, c, t);
    })
, w23 = (e)=>Be1(e, !1)
, Ae4 = (e)=>Be1(e, !0)
, Le1 = (e, t)=>E16(e, (r)=>{
        let n = r, { state: l  } = e, o = l.doc.lineAt(n), c = l.charCategorizer(n);
        for(let u = null;;){
            if (n == (t ? o.to : o.from)) {
                n == r && o.number != (t ? l.doc.lines : 1) && (n += t ? 1 : -1);
                break;
            }
            let i = A6(o.text, n - o.from, t) + o.from, f = o.text.slice(Math.min(n, i) - o.from, Math.max(n, i) - o.from), a = c(f);
            if (u != null && a != u) break;
            (f != " " || n != r) && (u = a), n = i;
        }
        return I7(e, n, t);
    })
, xe3 = (e)=>Le1(e, !1)
, $e1 = (e)=>Le1(e, !0)
, Ce2 = (e)=>E16(e, (t)=>{
        let r = e.lineBlockAt(t).to;
        return I7(e, t < r ? r : Math.min(e.state.doc.length, t + 1), !0);
    })
, Je1 = (e)=>E16(e, (t)=>{
        let r = e.lineBlockAt(t).from;
        return I7(e, t > r ? r : Math.max(0, t - 1), !1);
    })
, Qe1 = ({ state: e , dispatch: t  })=>{
    if (e.readOnly) return !1;
    let r = e.changeByRange((n)=>({
            changes: {
                from: n.from,
                to: n.to,
                insert: d.of([
                    "",
                    ""
                ])
            },
            range: p48.cursor(n.from)
        })
    );
    return t(e.update(r, {
        scrollIntoView: !0,
        userEvent: "input"
    })), !0;
}, Xe1 = ({ state: e , dispatch: t  })=>{
    if (e.readOnly) return !1;
    let r = e.changeByRange((n)=>{
        if (!n.empty || n.from == 0 || n.from == e.doc.length) return {
            range: n
        };
        let l = n.from, o = e.doc.lineAt(l), c = l == o.from ? l - 1 : A6(o.text, l - o.from, !1) + o.from, u = l == o.to ? l + 1 : A6(o.text, l - o.from, !0) + o.from;
        return {
            changes: {
                from: c,
                to: u,
                insert: e.doc.slice(l, u).append(e.doc.slice(c, l))
            },
            range: p48.cursor(u)
        };
    });
    return r.changes.empty ? !1 : (t(e.update(r, {
        scrollIntoView: !0,
        userEvent: "move.character"
    })), !0);
};
function T13(e) {
    let t = [], r = -1;
    for (let n of e.selection.ranges){
        let l = e.doc.lineAt(n.from), o = e.doc.lineAt(n.to);
        if (!n.empty && n.to == o.from && (o = e.doc.lineAt(n.to - 1)), r >= l.number) {
            let c = t[t.length - 1];
            c.to = o.to, c.ranges.push(n);
        } else t.push({
            from: l.from,
            to: o.to,
            ranges: [
                n
            ]
        });
        r = o.number + 1;
    }
    return t;
}
function De1(e, t, r) {
    if (e.readOnly) return !1;
    let n = [], l = [];
    for (let o of T13(e)){
        if (r ? o.to == e.doc.length : o.from == 0) continue;
        let c = e.doc.lineAt(r ? o.to + 1 : o.from - 1), u = c.length + 1;
        if (r) {
            n.push({
                from: o.to,
                to: c.to
            }, {
                from: o.from,
                insert: c.text + e.lineBreak
            });
            for (let i of o.ranges)l.push(p48.range(Math.min(e.doc.length, i.anchor + u), Math.min(e.doc.length, i.head + u)));
        } else {
            n.push({
                from: c.from,
                to: o.from
            }, {
                from: o.to,
                insert: e.lineBreak + c.text
            });
            for (let i of o.ranges)l.push(p48.range(i.anchor - u, i.head - u));
        }
    }
    return n.length ? (t(e.update({
        changes: n,
        scrollIntoView: !0,
        selection: p48.create(l, e.selection.mainIndex),
        userEvent: "move.line"
    })), !0) : !1;
}
var Ye1 = ({ state: e , dispatch: t  })=>De1(e, t, !1)
, Ze1 = ({ state: e , dispatch: t  })=>De1(e, t, !0)
;
function Se3(e, t, r) {
    if (e.readOnly) return !1;
    let n = [];
    for (let l of T13(e))r ? n.push({
        from: l.from,
        insert: e.doc.slice(l.from, l.to) + e.lineBreak
    }) : n.push({
        from: l.to,
        insert: e.lineBreak + e.doc.slice(l.from, l.to)
    });
    return t(e.update({
        changes: n,
        scrollIntoView: !0,
        userEvent: "input.copyline"
    })), !0;
}
var et2 = ({ state: e , dispatch: t  })=>Se3(e, t, !1)
, tt2 = ({ state: e , dispatch: t  })=>Se3(e, t, !0)
, rt2 = (e)=>{
    if (e.state.readOnly) return !1;
    let { state: t  } = e, r = t.changes(T13(t).map(({ from: l , to: o  })=>(l > 0 ? l-- : o < t.doc.length && o++, {
            from: l,
            to: o
        })
    )), n = g8(t.selection, (l)=>e.moveVertically(l, !0)
    ).map(r);
    return e.dispatch({
        changes: r,
        selection: n,
        scrollIntoView: !0,
        userEvent: "delete.line"
    }), !0;
};
function nt1(e, t) {
    if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1))) return {
        from: t,
        to: t
    };
    let r = v9(e).resolveInner(t), n = r.childBefore(t), l = r.childAfter(t), o;
    return n && l && n.to <= t && l.from >= t && (o = n.type.prop(y10.closedBy)) && o.indexOf(l.name) > -1 && e.doc.lineAt(n.to).from == e.doc.lineAt(l.from).from ? {
        from: n.to,
        to: l.from
    } : null;
}
var ot2 = be9(!1), lt2 = be9(!0);
function be9(e) {
    return ({ state: t , dispatch: r  })=>{
        if (t.readOnly) return !1;
        let n = t.changeByRange((l)=>{
            let { from: o , to: c  } = l, u = t.doc.lineAt(o), i = !e && o == c && nt1(t, o);
            e && (o = c = (c <= u.to ? u : t.doc.lineAt(c)).to);
            let f = new I6(t, {
                simulateBreak: o,
                simulateDoubleBreak: !!i
            }), a = X4(f, o);
            for(a == null && (a = /^\s*/.exec(t.doc.lineAt(o).text)[0].length); c < u.to && /\s/.test(u.text[c - u.from]);)c++;
            i ? { from: o , to: c  } = i : o > u.from && o < u.from + 100 && !/\S/.test(u.text.slice(0, o)) && (o = u.from);
            let p25 = [
                "",
                Q5(t, a)
            ];
            return i && p25.push(Q5(t, f.lineIndent(u.from, -1))), {
                changes: {
                    from: o,
                    to: c,
                    insert: d.of(p25)
                },
                range: p48.cursor(o + 1 + p25[1].length)
            };
        });
        return r(t.update(n, {
            scrollIntoView: !0,
            userEvent: "input"
        })), !0;
    };
}
function z10(e, t) {
    let r = -1;
    return e.changeByRange((n)=>{
        let l = [];
        for(let c = n.from; c <= n.to;){
            let u = e.doc.lineAt(c);
            u.number > r && (n.empty || n.to > u.from) && (t(u, l, n), r = u.number), c = u.to + 1;
        }
        let o = e.changes(l);
        return {
            changes: l,
            range: p48.range(o.mapPos(n.anchor, 1), o.mapPos(n.head, 1))
        };
    });
}
var ct = ({ state: e , dispatch: t  })=>{
    if (e.readOnly) return !1;
    let r = Object.create(null), n = new I6(e, {
        overrideIndentation: (o)=>{
            let c = r[o];
            return c ?? -1;
        }
    }), l = z10(e, (o, c, u)=>{
        let i = X4(n, o.from);
        if (i == null) return;
        /\S/.test(o.text) || (i = 0);
        let f = /^\s*/.exec(o.text)[0], a = Q5(e, i);
        (f != a || u.from < o.from + f.length) && (r[o.from] = i, c.push({
            from: o.from,
            to: o.from + f.length,
            insert: a
        }));
    });
    return l.changes.empty || t(e.update(l, {
        userEvent: "indent"
    })), !0;
}, v17 = ({ state: e , dispatch: t  })=>e.readOnly ? !1 : (t(e.update(z10(e, (r, n)=>{
        n.push({
            from: r.from,
            insert: e.facet(E11)
        });
    }), {
        userEvent: "input.indent"
    })), !0)
, Me1 = ({ state: e , dispatch: t  })=>e.readOnly ? !1 : (t(e.update(z10(e, (r, n)=>{
        let l = /^\s*/.exec(r.text)[0];
        if (!l) return;
        let o = J(l, e.tabSize), c = 0, u = Q5(e, Math.max(0, o - K12(e)));
        for(; c < l.length && c < u.length && l.charCodeAt(c) == u.charCodeAt(c);)c++;
        n.push({
            from: r.from + c,
            to: r.from + l.length,
            insert: u.slice(c)
        });
    }), {
        userEvent: "delete.dedent"
    })), !0)
, ut1 = [
    {
        key: "Ctrl-b",
        run: _5,
        shift: oe4,
        preventDefault: !0
    },
    {
        key: "Ctrl-f",
        run: $9,
        shift: le2
    },
    {
        key: "Ctrl-p",
        run: Y5,
        shift: ie5
    },
    {
        key: "Ctrl-n",
        run: Z3,
        shift: se3
    },
    {
        key: "Ctrl-a",
        run: Ue1,
        shift: Ne2
    },
    {
        key: "Ctrl-e",
        run: Oe4,
        shift: We
    },
    {
        key: "Ctrl-d",
        run: Ae4
    },
    {
        key: "Ctrl-h",
        run: w23
    },
    {
        key: "Ctrl-k",
        run: Ce2
    },
    {
        key: "Ctrl-Alt-h",
        run: xe3
    },
    {
        key: "Ctrl-o",
        run: Qe1
    },
    {
        key: "Ctrl-t",
        run: Xe1
    },
    {
        key: "Ctrl-v",
        run: F9
    },
    {
        key: "Alt-v",
        run: O9
    }
], it2 = [
    {
        key: "ArrowLeft",
        run: _5,
        shift: oe4,
        preventDefault: !0
    },
    {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: Ie1,
        shift: we4
    },
    {
        mac: "Cmd-ArrowLeft",
        run: re5,
        shift: me4
    },
    {
        key: "ArrowRight",
        run: $9,
        shift: le2,
        preventDefault: !0
    },
    {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: Te1,
        shift: ze
    },
    {
        mac: "Cmd-ArrowRight",
        run: te3,
        shift: he4
    },
    {
        key: "ArrowUp",
        run: Y5,
        shift: ie5,
        preventDefault: !0
    },
    {
        mac: "Cmd-ArrowUp",
        run: ye3,
        shift: ke3
    },
    {
        mac: "Ctrl-ArrowUp",
        run: O9,
        shift: ae5
    },
    {
        key: "ArrowDown",
        run: Z3,
        shift: se3,
        preventDefault: !0
    },
    {
        mac: "Cmd-ArrowDown",
        run: pe5,
        shift: ge5
    },
    {
        mac: "Ctrl-ArrowDown",
        run: F9,
        shift: de5
    },
    {
        key: "PageUp",
        run: O9,
        shift: ae5
    },
    {
        key: "PageDown",
        run: F9,
        shift: de5
    },
    {
        key: "Home",
        run: re5,
        shift: me4
    },
    {
        key: "Mod-Home",
        run: ye3,
        shift: ke3
    },
    {
        key: "End",
        run: te3,
        shift: he4
    },
    {
        key: "Mod-End",
        run: pe5,
        shift: ge5
    },
    {
        key: "Enter",
        run: ot2
    },
    {
        key: "Mod-a",
        run: qe1
    },
    {
        key: "Backspace",
        run: w23,
        shift: w23
    },
    {
        key: "Delete",
        run: Ae4
    },
    {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: xe3
    },
    {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: $e1
    },
    {
        mac: "Mod-Backspace",
        run: Je1
    },
    {
        mac: "Mod-Delete",
        run: Ce2
    }
].concat(ut1.map((e)=>({
        mac: e.key,
        run: e.run,
        shift: e.shift
    })
)), Tt1 = [
    {
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: Ve1,
        shift: ve3
    },
    {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: Ge1,
        shift: He1
    },
    {
        key: "Alt-ArrowUp",
        run: Ye1
    },
    {
        key: "Shift-Alt-ArrowUp",
        run: et2
    },
    {
        key: "Alt-ArrowDown",
        run: Ze1
    },
    {
        key: "Shift-Alt-ArrowDown",
        run: tt2
    },
    {
        key: "Escape",
        run: _e2
    },
    {
        key: "Mod-Enter",
        run: lt2
    },
    {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: Ke1
    },
    {
        key: "Mod-i",
        run: je1,
        preventDefault: !0
    },
    {
        key: "Mod-[",
        run: Me1
    },
    {
        key: "Mod-]",
        run: v17
    },
    {
        key: "Mod-Alt-\\",
        run: ct
    },
    {
        key: "Shift-Mod-k",
        run: rt2
    },
    {
        key: "Shift-Mod-\\",
        run: Fe
    }
].concat(it2);
var d9 = {
    brackets: [
        "(",
        "[",
        "{",
        "'",
        '"'
    ],
    before: `)]}'":;>`
}, a24 = v.define({
    map (r, e) {
        let n = e.mapPos(r, -1, D2.TrackAfter);
        return n ?? void 0;
    }
}), g9 = v.define({
    map (r, e) {
        return e.mapPos(r);
    }
}), p25 = new class extends v1 {
};
p25.startSide = 1;
p25.endSide = -1;
var x14 = B1.define({
    create () {
        return f10.empty;
    },
    update (r, e) {
        if (e.selection) {
            let n = e.state.doc.lineAt(e.selection.main.head).from, c = e.startState.doc.lineAt(e.startState.selection.main.head).from;
            n != e.changes.mapPos(c, -1) && (r = f10.empty);
        }
        r = r.map(e.changes);
        for (let n of e.effects)n.is(a24) ? r = r.update({
            add: [
                p25.range(n.value, n.value + 1)
            ]
        }) : n.is(g9) && (r = r.update({
            filter: (c)=>c != n.value
        }));
        return r;
    }
});
function G5() {
    return [
        D3.inputHandler.of(O10),
        x14
    ];
}
var S15 = "()[]{}<>";
function C12(r) {
    for(let e = 0; e < S15.length; e += 2)if (S15.charCodeAt(e) == r) return S15.charAt(e + 1);
    return z(r < 128 ? r : r + 1);
}
function A13(r, e) {
    return r.languageDataAt("closeBrackets", e)[0] || d9;
}
function O10(r, e, n, c) {
    if (r.composing) return !1;
    let f = r.state.selection.main;
    if (c.length > 2 || c.length == 2 && q(b(c, 0)) == 1 || e != f.from || n != f.to) return !1;
    let l = M12(r.state, c);
    return l ? (r.dispatch(l), !0) : !1;
}
var v24 = ({ state: r , dispatch: e  })=>{
    let c = A13(r, r.selection.main.head).brackets || d9.brackets, f = null, l = r.changeByRange((t)=>{
        if (t.empty) {
            let s = T14(r.doc, t.head);
            for (let o of c)if (o == s && h3(r.doc, t.head) == C12(b(o, 0))) return {
                changes: {
                    from: t.head - o.length,
                    to: t.head + o.length
                },
                range: p48.cursor(t.head - o.length),
                userEvent: "delete.backward"
            };
        }
        return {
            range: f = t
        };
    });
    return f || e(r.update(l, {
        scrollIntoView: !0
    })), !f;
}, J11 = [
    {
        key: "Backspace",
        run: v24
    }
];
function M12(r, e) {
    let n = A13(r, r.selection.main.head), c = n.brackets || d9.brackets;
    for (let f of c){
        let l = C12(b(f, 0));
        if (e == f) return l == f ? H9(r, f, c.indexOf(f + f + f) > -1) : W12(r, f, l, n.before || d9.before);
        if (e == l && E17(r, r.selection.main.from)) return F10(r, f, l);
    }
    return null;
}
function E17(r, e) {
    let n = !1;
    return r.field(x14).between(0, r.doc.length, (c)=>{
        c == e && (n = !0);
    }), n;
}
function h3(r, e) {
    let n = r.sliceString(e, e + 2);
    return n.slice(0, q(b(n, 0)));
}
function T14(r, e) {
    let n = r.sliceString(e - 2, e);
    return q(b(n, 0)) == n.length ? n : n.slice(1);
}
function W12(r, e, n, c) {
    let f = null, l = r.changeByRange((t)=>{
        if (!t.empty) return {
            changes: [
                {
                    insert: e,
                    from: t.from
                },
                {
                    insert: n,
                    from: t.to
                }
            ],
            effects: a24.of(t.to + e.length),
            range: p48.range(t.anchor + e.length, t.head + e.length)
        };
        let s = h3(r.doc, t.head);
        return !s || /\s/.test(s) || c.indexOf(s) > -1 ? {
            changes: {
                insert: e + n,
                from: t.head
            },
            effects: a24.of(t.head + e.length),
            range: p48.cursor(t.head + e.length)
        } : {
            range: f = t
        };
    });
    return f ? null : r.update(l, {
        scrollIntoView: !0,
        userEvent: "input.type"
    });
}
function F10(r, e, n) {
    let c = null, f = r.selection.ranges.map((l)=>l.empty && h3(r.doc, l.head) == n ? p48.cursor(l.head + n.length) : c = l
    );
    return c ? null : r.update({
        selection: p48.create(f, r.selection.mainIndex),
        scrollIntoView: !0,
        effects: r.selection.ranges.map(({ from: l  })=>g9.of(l)
        )
    });
}
function H9(r, e, n) {
    let c = null, f = r.changeByRange((l)=>{
        if (!l.empty) return {
            changes: [
                {
                    insert: e,
                    from: l.from
                },
                {
                    insert: e,
                    from: l.to
                }
            ],
            effects: a24.of(l.to + e.length),
            range: p48.range(l.anchor + e.length, l.head + e.length)
        };
        let t = l.head, s = h3(r.doc, t);
        if (s == e) {
            if (I8(r, t)) return {
                changes: {
                    insert: e + e,
                    from: t
                },
                effects: a24.of(t + e.length),
                range: p48.cursor(t + e.length)
            };
            if (E17(r, t)) {
                let o = n && r.sliceDoc(t, t + e.length * 3) == e + e + e;
                return {
                    range: p48.cursor(t + e.length * (o ? 3 : 1)),
                    effects: g9.of(t)
                };
            }
        } else {
            if (n && r.sliceDoc(t - 2 * e.length, t) == e + e && I8(r, t - 2 * e.length)) return {
                changes: {
                    insert: e + e + e + e,
                    from: t
                },
                effects: a24.of(t + e.length),
                range: p48.cursor(t + e.length)
            };
            if (r.charCategorizer(t)(s) != T.Word) {
                let o = r.sliceDoc(t - 1, t);
                if (o != e && r.charCategorizer(t)(o) != T.Word) return {
                    changes: {
                        insert: e + e,
                        from: t
                    },
                    effects: a24.of(t + e.length),
                    range: p48.cursor(t + e.length)
                };
            }
        }
        return {
            range: c = l
        };
    });
    return c ? null : r.update(f, {
        scrollIntoView: !0,
        userEvent: "input.type"
    });
}
function I8(r, e) {
    let n = v9(r).resolveInner(e + 1);
    return n.parent && n.from == e;
}
var r6 = O1.define({
    combine (e) {
        let t, s;
        for (let o of e)t = t || o.topContainer, s = s || o.bottomContainer;
        return {
            topContainer: t,
            bottomContainer: s
        };
    }
});
function O11(e, t) {
    let s = e.plugin(d12), o = s ? s.specs.indexOf(t) : -1;
    return o > -1 ? s.panels[o] : null;
}
var d12 = z3.fromClass(class {
    constructor(e){
        this.input = e.state.facet(b8), this.specs = this.input.filter((s)=>s
        ), this.panels = this.specs.map((s)=>s(e)
        );
        let t = e.state.facet(r6);
        this.top = new l1(e, !0, t.topContainer), this.bottom = new l1(e, !1, t.bottomContainer), this.top.sync(this.panels.filter((s)=>s.top
        )), this.bottom.sync(this.panels.filter((s)=>!s.top
        ));
        for (let s of this.panels)s.dom.classList.add("cm-panel"), s.mount && s.mount();
    }
    update(e) {
        let t = e.state.facet(r6);
        this.top.container != t.topContainer && (this.top.sync([]), this.top = new l1(e.view, !0, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new l1(e.view, !1, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let s = e.state.facet(b8);
        if (s != this.input) {
            let o = s.filter((i)=>i
            ), a = [], h = [], c = [], p = [];
            for (let i of o){
                let m = this.specs.indexOf(i), n;
                m < 0 ? (n = i(e.view), p.push(n)) : (n = this.panels[m], n.update && n.update(e)), a.push(n), (n.top ? h : c).push(n);
            }
            this.specs = o, this.panels = a, this.top.sync(h), this.bottom.sync(c);
            for (let i1 of p)i1.dom.classList.add("cm-panel"), i1.mount && i1.mount();
        } else for (let o of this.panels)o.update && o.update(e);
    }
    destroy() {
        this.top.sync([]), this.bottom.sync([]);
    }
}, {
    provide: V1.scrollMargins.from((e)=>({
            top: e.top.scrollMargin(),
            bottom: e.bottom.scrollMargin()
        })
    )
}), l1 = class {
    constructor(t, s, o){
        this.view = t, this.top = s, this.container = o, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
    }
    sync(t) {
        for (let s of this.panels)s.destroy && t.indexOf(s) < 0 && s.destroy();
        this.panels = t, this.syncDOM();
    }
    syncDOM() {
        if (this.panels.length == 0) {
            this.dom && (this.dom.remove(), this.dom = void 0);
            return;
        }
        if (!this.dom) {
            this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
            let s = this.container || this.view.dom;
            s.insertBefore(this.dom, this.top ? s.firstChild : null);
        }
        let t = this.dom.firstChild;
        for (let s of this.panels)if (s.dom.parentNode == this.dom) {
            for(; t != s.dom;)t = u1(t);
            t = t.nextSibling;
        } else this.dom.insertBefore(s.dom, t);
        for(; t;)t = u1(t);
    }
    scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
    }
    syncClasses() {
        if (!(!this.container || this.classes == this.view.themeClasses)) {
            for (let t of this.classes.split(" "))t && this.container.classList.remove(t);
            for (let t1 of (this.classes = this.view.themeClasses).split(" "))t1 && this.container.classList.add(t1);
        }
    }
};
function u1(e) {
    let t = e.nextSibling;
    return e.remove(), t;
}
var w24 = D3.baseTheme({
    ".cm-panels": {
        boxSizing: "border-box",
        position: "sticky",
        left: 0,
        right: 0
    },
    "&light .cm-panels": {
        backgroundColor: "#f5f5f5",
        color: "black"
    },
    "&light .cm-panels-top": {
        borderBottom: "1px solid #ddd"
    },
    "&light .cm-panels-bottom": {
        borderTop: "1px solid #ddd"
    },
    "&dark .cm-panels": {
        backgroundColor: "#333338",
        color: "white"
    }
}), b8 = O1.define({
    enables: [
        d12,
        w24
    ]
});
function s3() {
    var r8 = arguments[0];
    typeof r8 == "string" && (r8 = document.createElement(r8));
    var e = 1, t13 = arguments[1];
    if (t13 && typeof t13 == "object" && t13.nodeType == null && !Array.isArray(t13)) {
        for(var n in t13)if (Object.prototype.hasOwnProperty.call(t13, n)) {
            var o = t13[n];
            typeof o == "string" ? r8.setAttribute(n, o) : o != null && (r8[n] = o);
        }
        e++;
    }
    for(; e < arguments.length; e++)f4(r8, arguments[e]);
    return r8;
}
function f4(r, e) {
    if (typeof e == "string") r.appendChild(document.createTextNode(e));
    else if (e != null) if (e.nodeType != null) r.appendChild(e);
    else if (Array.isArray(e)) for(var t13 = 0; t13 < e.length; t13++)f4(r, e[t13]);
    else throw new RangeError("Unsupported child node: " + e);
}
var U7 = typeof String.prototype.normalize == "function" ? (r)=>r.normalize("NFKD")
 : (r)=>r
, b9 = class {
    constructor(e, t, n = 0, s = e.length, i){
        this.value = {
            from: 0,
            to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, s), this.bufferStart = n, this.normalize = i ? (a)=>i(U7(a))
         : U7, this.query = this.normalize(t);
    }
    peek() {
        if (this.bufferPos == this.buffer.length) {
            if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
            this.bufferPos = 0, this.buffer = this.iter.value;
        }
        return b(this.buffer, this.bufferPos);
    }
    next() {
        for(; this.matches.length;)this.matches.pop();
        return this.nextOverlapping();
    }
    nextOverlapping() {
        for(;;){
            let e = this.peek();
            if (e < 0) return this.done = !0, this;
            let t = z(e), n = this.bufferStart + this.bufferPos;
            this.bufferPos += q(e);
            let s = this.normalize(t);
            for(let i = 0, a = n;; i++){
                let l = s.charCodeAt(i), c = this.match(l, a);
                if (c) return this.value = c, this;
                if (i == s.length - 1) break;
                a == n && i < t.length && t.charCodeAt(i) == l && a++;
            }
        }
    }
    match(e, t) {
        let n = null;
        for(let s = 0; s < this.matches.length; s += 2){
            let i = this.matches[s], a = !1;
            this.query.charCodeAt(i) == e && (i == this.query.length - 1 ? n = {
                from: this.matches[s + 1],
                to: t + 1
            } : (this.matches[s]++, a = !0)), a || (this.matches.splice(s, 2), s -= 2);
        }
        return this.query.charCodeAt(0) == e && (this.query.length == 1 ? n = {
            from: t,
            to: t + 1
        } : this.matches.push(1, t)), n;
    }
};
typeof Symbol != "undefined" && (b9.prototype[Symbol.iterator] = function() {
    return this;
});
var X7 = {
    from: -1,
    to: -1,
    match: /.*/.exec("")
}, z11 = "gm" + (/x/.unicode == null ? "" : "u"), $10 = class {
    constructor(e, t, n, s = 0, i = e.length){
        if (this.to = i, this.curLine = "", this.done = !1, this.value = X7, /\\[sWDnr]|\n|\r|\[\^/.test(t)) return new W13(e, t, n, s, i);
        this.re = new RegExp(t, z11 + ((n == null ? void 0 : n.ignoreCase) ? "i" : "")), this.iter = e.iter();
        let a = e.lineAt(s);
        this.curLineStart = a.from, this.matchPos = s, this.getLine(this.curLineStart);
    }
    getLine(e) {
        this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
    }
    nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
    }
    next() {
        for(let e = this.matchPos - this.curLineStart;;){
            this.re.lastIndex = e;
            let t = this.matchPos <= this.to && this.re.exec(this.curLine);
            if (t) {
                let n = this.curLineStart + t.index, s = n + t[0].length;
                if (this.matchPos = s + (n == s ? 1 : 0), n == this.curLine.length && this.nextLine(), n < s || n > this.value.to) return this.value = {
                    from: n,
                    to: s,
                    match: t
                }, this;
                e = this.matchPos - this.curLineStart;
            } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), e = 0;
            else return this.done = !0, this;
        }
    }
}, T15 = new WeakMap, S17 = class {
    constructor(e, t){
        this.from = e, this.text = t;
    }
    get to() {
        return this.from + this.text.length;
    }
    static get(e, t, n) {
        let s = T15.get(e);
        if (!s || s.from >= n || s.to <= t) {
            let l = new S17(t, e.sliceString(t, n));
            return T15.set(e, l), l;
        }
        if (s.from == t && s.to == n) return s;
        let { text: i , from: a  } = s;
        return a > t && (i = e.sliceString(t, a) + i, a = t), s.to < n && (i += e.sliceString(s.to, n)), T15.set(e, new S17(a, i)), new S17(t, i.slice(t - a, n - a));
    }
}, W13 = class {
    constructor(e, t, n, s, i){
        this.text = e, this.to = i, this.done = !1, this.value = X7, this.matchPos = s, this.re = new RegExp(t, z11 + ((n == null ? void 0 : n.ignoreCase) ? "i" : "")), this.flat = S17.get(e, s, this.chunkEnd(s + 5000));
    }
    chunkEnd(e) {
        return e >= this.to ? this.to : this.text.lineAt(e).to;
    }
    next() {
        for(;;){
            let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
            if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t && this.flat.to < this.to && t.index + t[0].length > this.flat.text.length - 10 && (t = null), t) {
                let n = this.flat.from + t.index, s = n + t[0].length;
                return this.value = {
                    from: n,
                    to: s,
                    match: t
                }, this.matchPos = s + (n == s ? 1 : 0), this;
            } else {
                if (this.flat.to == this.to) return this.done = !0, this;
                this.flat = S17.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
            }
        }
    }
};
typeof Symbol != "undefined" && ($10.prototype[Symbol.iterator] = W13.prototype[Symbol.iterator] = function() {
    return this;
});
function de6(r) {
    try {
        return new RegExp(r, z11), !0;
    } catch  {
        return !1;
    }
}
function V12(r) {
    let e = s3("input", {
        class: "cm-textfield",
        name: "line"
    }), t = s3("form", {
        class: "cm-gotoLine",
        onkeydown: (s)=>{
            s.keyCode == 27 ? (s.preventDefault(), r.dispatch({
                effects: L13.of(!1)
            }), r.focus()) : s.keyCode == 13 && (s.preventDefault(), n());
        },
        onsubmit: (s)=>{
            s.preventDefault(), n();
        }
    }, s3("label", r.state.phrase("Go to line"), ": ", e), " ", s3("button", {
        class: "cm-button",
        type: "submit"
    }, r.state.phrase("go")));
    function n() {
        let s = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
        if (!s) return;
        let { state: i  } = r, a = i.doc.lineAt(i.selection.main.head), [, l, c, d, h] = s, m = d ? +d.slice(1) : 0, g = c ? +c : a.number;
        if (c && h) {
            let O = g / 100;
            l && (O = O * (l == "-" ? -1 : 1) + a.number / i.doc.lines), g = Math.round(i.doc.lines * O);
        } else c && l && (g = g * (l == "-" ? -1 : 1) + a.number);
        let B = i.doc.line(Math.max(1, Math.min(i.doc.lines, g)));
        r.dispatch({
            effects: L13.of(!1),
            selection: p48.cursor(B.from + Math.max(0, Math.min(m, B.length))),
            scrollIntoView: !0
        }), r.focus();
    }
    return {
        dom: t,
        pos: -10
    };
}
var L13 = v.define(), Y6 = B1.define({
    create () {
        return !0;
    },
    update (r, e) {
        for (let t of e.effects)t.is(L13) && (r = t.value);
        return r;
    },
    provide: (r)=>b8.from(r, (e)=>e ? V12 : null
        )
}), me5 = (r)=>{
    let e = O11(r, V12);
    if (!e) {
        let t = [
            L13.of(!0)
        ];
        r.state.field(Y6, !1) == null && t.push(v.appendConfig.of([
            Y6,
            pe6
        ])), r.dispatch({
            effects: t
        }), e = O11(r, V12);
    }
    return e && e.dom.querySelector("input").focus(), !0;
}, pe6 = D3.baseTheme({
    ".cm-panel.cm-gotoLine": {
        padding: "2px 6px 4px",
        "& label": {
            fontSize: "80%"
        }
    }
}), ge6 = {
    highlightWordAroundCursor: !1,
    minSelectionLength: 1,
    maxMatches: 100
}, Z4 = O1.define({
    combine (r) {
        return be4(r, ge6, {
            highlightWordAroundCursor: (e, t)=>e || t
            ,
            minSelectionLength: Math.min,
            maxMatches: Math.min
        });
    }
});
function We1(r) {
    let e = [
        ye4,
        Se4
    ];
    return r && e.push(Z4.of(r)), e;
}
var xe4 = w6.mark({
    class: "cm-selectionMatch"
}), be10 = w6.mark({
    class: "cm-selectionMatch cm-selectionMatch-main"
}), Se4 = z3.fromClass(class {
    constructor(r){
        this.decorations = this.getDeco(r);
    }
    update(r) {
        (r.selectionSet || r.docChanged || r.viewportChanged) && (this.decorations = this.getDeco(r.view));
    }
    getDeco(r) {
        let e = r.state.facet(Z4), { state: t  } = r, n = t.selection;
        if (n.ranges.length > 1) return w6.none;
        let s = n.main, i, a = null;
        if (s.empty) {
            if (!e.highlightWordAroundCursor) return w6.none;
            let c = t.wordAt(s.head);
            if (!c) return w6.none;
            a = t.charCategorizer(s.head), i = t.sliceDoc(c.from, c.to);
        } else {
            let c = s.to - s.from;
            if (c < e.minSelectionLength || c > 200) return w6.none;
            if (i = t.sliceDoc(s.from, s.to).trim(), !i) return w6.none;
        }
        let l = [];
        for (let c of r.visibleRanges){
            let d = new b9(t.doc, i, c.from, c.to);
            for(; !d.next().done;){
                let { from: h , to: m  } = d.value;
                if ((!a || (h == 0 || a(t.sliceDoc(h - 1, h)) != T.Word) && (m == t.doc.length || a(t.sliceDoc(m, m + 1)) != T.Word)) && (a && h <= s.from && m >= s.to ? l.push(be10.range(h, m)) : (h >= s.to || m <= s.from) && l.push(xe4.range(h, m)), l.length > e.maxMatches)) return w6.none;
            }
        }
        return w6.set(l);
    }
}, {
    decorations: (r)=>r.decorations
}), ye4 = D3.baseTheme({
    ".cm-selectionMatch": {
        backgroundColor: "#99ff7780"
    },
    ".cm-searchMatch .cm-selectionMatch": {
        backgroundColor: "transparent"
    }
}), Me2 = ({ state: r , dispatch: e  })=>{
    let { selection: t  } = r, n = p48.create(t.ranges.map((s)=>r.wordAt(s.head) || p48.cursor(s.head)
    ), t.mainIndex);
    return n.eq(t) ? !1 : (e(r.update({
        selection: n
    })), !0);
};
function ke4(r, e) {
    let { main: t , ranges: n  } = r.selection, s = r.wordAt(t.head), i = s && s.from == t.from && s.to == t.to;
    for(let a = !1, l = new b9(r.doc, e, n[n.length - 1].to);;)if (l.next(), l.done) {
        if (a) return null;
        l = new b9(r.doc, e, 0, Math.max(0, n[n.length - 1].from - 1)), a = !0;
    } else {
        if (a && n.some((c)=>c.from == l.value.from
        )) continue;
        if (i) {
            let c = r.wordAt(l.value.from);
            if (!c || c.from != l.value.from || c.to != l.value.to) continue;
        }
        return l.value;
    }
}
var ve4 = ({ state: r , dispatch: e  })=>{
    let { ranges: t  } = r.selection;
    if (t.some((i)=>i.from === i.to
    )) return Me2({
        state: r,
        dispatch: e
    });
    let n = r.sliceDoc(t[0].from, t[0].to);
    if (r.selection.ranges.some((i)=>r.sliceDoc(i.from, i.to) != n
    )) return !1;
    let s = ke4(r, n);
    return s ? (e(r.update({
        selection: r.selection.addRange(p48.range(s.from, s.to), !1),
        scrollIntoView: !0
    })), !0) : !1;
}, P10 = O1.define({
    combine (r) {
        var e;
        return {
            top: r.reduce((t, n)=>t ?? n.top
            , void 0) || !1,
            caseSensitive: r.reduce((t, n)=>t ?? (n.caseSensitive || n.matchCase)
            , void 0) || !1,
            createPanel: ((e = r.find((t)=>t.createPanel
            )) === null || e === void 0 ? void 0 : e.createPanel) || ((t)=>new ie6(t)
            )
        };
    }
});
var N13 = class {
    constructor(e){
        this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || de6(this.search));
    }
    eq(e) {
        return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp;
    }
    create() {
        return this.regexp ? new te4(this) : new ee4(this);
    }
}, w29 = class {
    constructor(e){
        this.spec = e;
    }
}, ee4 = class extends w29 {
    constructor(e){
        super(e);
        this.unquoted = e.search.replace(/\\([nrt\\])/g, (t, n)=>n == "n" ? `
` : n == "r" ? "\r" : n == "t" ? "	" : "\\"
        );
    }
    cursor(e, t = 0, n = e.length) {
        return new b9(e, this.unquoted, t, n, this.spec.caseSensitive ? void 0 : (s)=>s.toLowerCase()
        );
    }
    nextMatch(e, t, n) {
        let s = this.cursor(e, n).nextOverlapping();
        return s.done && (s = this.cursor(e, 0, t).nextOverlapping()), s.done ? null : s.value;
    }
    prevMatchInRange(e, t, n) {
        for(let s = n;;){
            let i = Math.max(t, s - 10000 - this.unquoted.length), a = this.cursor(e, i, s), l = null;
            for(; !a.nextOverlapping().done;)l = a.value;
            if (l) return l;
            if (i == t) return null;
            s -= 10000;
        }
    }
    prevMatch(e, t, n) {
        return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.length);
    }
    getReplacement(e) {
        return this.spec.replace;
    }
    matchAll(e, t) {
        let n = this.cursor(e), s = [];
        for(; !n.next().done;){
            if (s.length >= t) return null;
            s.push(n.value);
        }
        return s;
    }
    highlight(e, t, n, s) {
        let i = this.cursor(e, Math.max(0, t - this.unquoted.length), Math.min(n + this.unquoted.length, e.length));
        for(; !i.next().done;)s(i.value.from, i.value.to);
    }
}, te4 = class extends w29 {
    cursor(e, t = 0, n = e.length) {
        return new $10(e, this.spec.search, this.spec.caseSensitive ? void 0 : {
            ignoreCase: !0
        }, t, n);
    }
    nextMatch(e, t, n) {
        let s = this.cursor(e, n).next();
        return s.done && (s = this.cursor(e, 0, t).next()), s.done ? null : s.value;
    }
    prevMatchInRange(e, t, n) {
        for(let s = 1;; s++){
            let i = Math.max(t, n - s * 10000), a = this.cursor(e, i, n), l = null;
            for(; !a.next().done;)l = a.value;
            if (l && (i == t || l.from > i + 10)) return l;
            if (i == t) return null;
        }
    }
    prevMatch(e, t, n) {
        return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.length);
    }
    getReplacement(e) {
        return this.spec.replace.replace(/\$([$&\d+])/g, (t, n)=>n == "$" ? "$" : n == "&" ? e.match[0] : n != "0" && +n < e.match.length ? e.match[n] : t
        );
    }
    matchAll(e, t) {
        let n = this.cursor(e), s = [];
        for(; !n.next().done;){
            if (s.length >= t) return null;
            s.push(n.value);
        }
        return s;
    }
    highlight(e, t, n, s) {
        let i = this.cursor(e, Math.max(0, t - 250), Math.min(n + 250, e.length));
        for(; !i.next().done;)s(i.value.from, i.value.to);
    }
}, M13 = v.define(), Q7 = v.define(), p32 = B1.define({
    create (r) {
        return new A14(R7(r).create(), E18);
    },
    update (r, e) {
        for (let t of e.effects)t.is(M13) ? r = new A14(t.value.create(), r.panel) : t.is(Q7) && (r = new A14(r.query, t.value ? E18 : null));
        return r;
    },
    provide: (r)=>b8.from(r, (e)=>e.panel
        )
});
var A14 = class {
    constructor(e, t){
        this.query = e, this.panel = t;
    }
}, Ce3 = w6.mark({
    class: "cm-searchMatch"
}), Le4 = w6.mark({
    class: "cm-searchMatch cm-searchMatch-selected"
}), Pe3 = z3.fromClass(class {
    constructor(r){
        this.view = r, this.decorations = this.highlight(r.state.field(p32));
    }
    update(r) {
        let e = r.state.field(p32);
        (e != r.startState.field(p32) || r.docChanged || r.selectionSet) && (this.decorations = this.highlight(e));
    }
    highlight({ query: r , panel: e  }) {
        if (!e || !r.spec.valid) return w6.none;
        let { view: t  } = this, n = new x2;
        for(let s = 0, i = t.visibleRanges, a = i.length; s < a; s++){
            let { from: l , to: c  } = i[s];
            for(; s < a - 1 && c > i[s + 1].from - 2 * 250;)c = i[++s].to;
            r.highlight(t.state.doc, l, c, (d, h)=>{
                let m = t.state.selection.ranges.some((g)=>g.from == d && g.to == h
                );
                n.add(d, h, m ? Le4 : Ce3);
            });
        }
        return n.finish();
    }
}, {
    decorations: (r)=>r.decorations
});
function k5(r) {
    return (e)=>{
        let t = e.state.field(p32, !1);
        return t && t.query.spec.valid ? r(e, t) : ne5(e);
    };
}
var F11 = k5((r, { query: e  })=>{
    let { from: t , to: n  } = r.state.selection.main, s = e.nextMatch(r.state.doc, t, n);
    return !s || s.from == t && s.to == n ? !1 : (r.dispatch({
        selection: {
            anchor: s.from,
            head: s.to
        },
        scrollIntoView: !0,
        effects: H10(r, s),
        userEvent: "select.search"
    }), !0);
}), D9 = k5((r, { query: e  })=>{
    let { state: t  } = r, { from: n , to: s  } = t.selection.main, i = e.prevMatch(t.doc, n, s);
    return i ? (r.dispatch({
        selection: {
            anchor: i.from,
            head: i.to
        },
        scrollIntoView: !0,
        effects: H10(r, i),
        userEvent: "select.search"
    }), !0) : !1;
}), Ae5 = k5((r, { query: e  })=>{
    let t = e.matchAll(r.state.doc, 1000);
    return !t || !t.length ? !1 : (r.dispatch({
        selection: p48.create(t.map((n)=>p48.range(n.from, n.to)
        )),
        userEvent: "select.search.matches"
    }), !0);
}), Fe1 = ({ state: r , dispatch: e  })=>{
    let t = r.selection;
    if (t.ranges.length > 1 || t.main.empty) return !1;
    let { from: n , to: s  } = t.main, i = [], a = 0;
    for(let l = new b9(r.doc, r.sliceDoc(n, s)); !l.next().done;){
        if (i.length > 1000) return !1;
        l.value.from == n && (a = i.length), i.push(p48.range(l.value.from, l.value.to));
    }
    return e(r.update({
        selection: p48.create(i, a),
        userEvent: "select.search.matches"
    })), !0;
}, re6 = k5((r, { query: e  })=>{
    let { state: t  } = r, { from: n , to: s  } = t.selection.main;
    if (t.readOnly) return !1;
    let i = e.nextMatch(t.doc, n, n);
    if (!i) return !1;
    let a = [], l, c;
    if (i.from == n && i.to == s && (c = t.toText(e.getReplacement(i)), a.push({
        from: i.from,
        to: i.to,
        insert: c
    }), i = e.nextMatch(t.doc, i.from, i.to)), i) {
        let d = a.length == 0 || a[0].from >= i.to ? 0 : i.to - i.from - c.length;
        l = {
            anchor: i.from - d,
            head: i.to - d
        };
    }
    return r.dispatch({
        changes: a,
        selection: l,
        scrollIntoView: !!l,
        effects: i ? H10(r, i) : void 0,
        userEvent: "input.replace"
    }), !0;
}), De2 = k5((r, { query: e  })=>{
    if (r.state.readOnly) return !1;
    let t = e.matchAll(r.state.doc, 1000000000).map((n)=>{
        let { from: s , to: i  } = n;
        return {
            from: s,
            to: i,
            insert: e.getReplacement(n)
        };
    });
    return t.length ? (r.dispatch({
        changes: t,
        userEvent: "input.replace.all"
    }), !0) : !1;
});
function E18(r) {
    return r.state.facet(P10).createPanel(r);
}
function R7(r, e) {
    var t13;
    let n = r.selection.main, s = n.empty || n.to > n.from + 100 ? "" : r.sliceDoc(n.from, n.to), i = (t13 = e == null ? void 0 : e.caseSensitive) !== null && t13 !== void 0 ? t13 : r.facet(P10).caseSensitive;
    return e && !s ? e : new N13({
        search: s.replace(/\n/g, "\\n"),
        caseSensitive: i
    });
}
var ne5 = (r)=>{
    let e = r.state.field(p32, !1);
    if (e && e.panel) {
        let t = O11(r, E18);
        if (!t) return !1;
        let n = t.dom.querySelector("[name=search]");
        if (n != r.root.activeElement) {
            let s = R7(r.state, e.query.spec);
            s.valid && r.dispatch({
                effects: M13.of(s)
            }), n.focus(), n.select();
        }
    } else r.dispatch({
        effects: [
            Q7.of(!0),
            e ? M13.of(R7(r.state, e.query.spec)) : v.appendConfig.of(Re1)
        ]
    });
    return !0;
}, se4 = (r)=>{
    let e = r.state.field(p32, !1);
    if (!e || !e.panel) return !1;
    let t = O11(r, E18);
    return t && t.dom.contains(r.root.activeElement) && r.focus(), r.dispatch({
        effects: Q7.of(!1)
    }), !0;
}, we5 = [
    {
        key: "Mod-f",
        run: ne5,
        scope: "editor search-panel"
    },
    {
        key: "F3",
        run: F11,
        shift: D9,
        scope: "editor search-panel",
        preventDefault: !0
    },
    {
        key: "Mod-g",
        run: F11,
        shift: D9,
        scope: "editor search-panel",
        preventDefault: !0
    },
    {
        key: "Escape",
        run: se4,
        scope: "editor search-panel"
    },
    {
        key: "Mod-Shift-l",
        run: Fe1
    },
    {
        key: "Alt-g",
        run: me5
    },
    {
        key: "Mod-d",
        run: ve4,
        preventDefault: !0
    }
], ie6 = class {
    constructor(e){
        this.view = e;
        let t = this.query = e.state.field(p32).query.spec;
        this.commit = this.commit.bind(this), this.searchField = s3("input", {
            value: t.search,
            placeholder: f7(e, "Find"),
            "aria-label": f7(e, "Find"),
            class: "cm-textfield",
            name: "search",
            onchange: this.commit,
            onkeyup: this.commit
        }), this.replaceField = s3("input", {
            value: t.replace,
            placeholder: f7(e, "Replace"),
            "aria-label": f7(e, "Replace"),
            class: "cm-textfield",
            name: "replace",
            onchange: this.commit,
            onkeyup: this.commit
        }), this.caseField = s3("input", {
            type: "checkbox",
            name: "case",
            checked: t.caseSensitive,
            onchange: this.commit
        }), this.reField = s3("input", {
            type: "checkbox",
            name: "re",
            checked: t.regexp,
            onchange: this.commit
        });
        function n(s1, i, a) {
            return s3("button", {
                class: "cm-button",
                name: s1,
                onclick: i,
                type: "button"
            }, a);
        }
        this.dom = s3("div", {
            onkeydown: (s)=>this.keydown(s)
            ,
            class: "cm-search"
        }, [
            this.searchField,
            n("next", ()=>F11(e)
            , [
                f7(e, "next")
            ]),
            n("prev", ()=>D9(e)
            , [
                f7(e, "previous")
            ]),
            n("select", ()=>Ae5(e)
            , [
                f7(e, "all")
            ]),
            s3("label", null, [
                this.caseField,
                f7(e, "match case")
            ]),
            s3("label", null, [
                this.reField,
                f7(e, "regexp")
            ]),
            ...e.state.readOnly ? [] : [
                s3("br"),
                this.replaceField,
                n("replace", ()=>re6(e)
                , [
                    f7(e, "replace")
                ]),
                n("replaceAll", ()=>De2(e)
                , [
                    f7(e, "replace all")
                ]),
                s3("button", {
                    name: "close",
                    onclick: ()=>se4(e)
                    ,
                    "aria-label": f7(e, "close"),
                    type: "button"
                }, [
                    "\xD7"
                ])
            ]
        ]);
    }
    commit() {
        let e = new N13({
            search: this.searchField.value,
            caseSensitive: this.caseField.checked,
            regexp: this.reField.checked,
            replace: this.replaceField.value
        });
        e.eq(this.query) || (this.query = e, this.view.dispatch({
            effects: M13.of(e)
        }));
    }
    keydown(e) {
        lr(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? D9 : F11)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), re6(this.view));
    }
    update(e) {
        for (let t of e.transactions)for (let n of t.effects)n.is(M13) && !n.value.eq(this.query) && this.setQuery(n.value);
    }
    setQuery(e) {
        this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp;
    }
    mount() {
        this.searchField.select();
    }
    get pos() {
        return 80;
    }
    get top() {
        return this.view.state.facet(P10).top;
    }
};
function f7(r, e) {
    return r.state.phrase(e);
}
var q11 = 30, I9 = /[\s\.,:;?!]/;
function H10(r, { from: e , to: t  }) {
    let n = r.state.doc.lineAt(e).from, s = r.state.doc.lineAt(t).to, i = Math.max(n, e - q11), a = Math.min(s, t + q11), l = r.state.sliceDoc(i, a);
    if (i != n) {
        for(let c = 0; c < q11; c++)if (!I9.test(l[c + 1]) && I9.test(l[c])) {
            l = l.slice(c);
            break;
        }
    }
    if (a != s) {
        for(let c = l.length - 1; c > l.length - q11; c--)if (!I9.test(l[c - 1]) && I9.test(l[c])) {
            l = l.slice(0, c);
            break;
        }
    }
    return D3.announce.of(`${r.state.phrase("current match")}. ${l} ${r.state.phrase("on line")} ${r.state.doc.lineAt(e).number}`);
}
var Ee1 = D3.baseTheme({
    ".cm-panel.cm-search": {
        padding: "2px 6px 4px",
        position: "relative",
        "& [name=close]": {
            position: "absolute",
            top: "0",
            right: "4px",
            backgroundColor: "inherit",
            border: "none",
            font: "inherit",
            padding: 0,
            margin: 0
        },
        "& input, & button, & label": {
            margin: ".2em .6em .2em 0"
        },
        "& input[type=checkbox]": {
            marginRight: ".2em"
        },
        "& label": {
            fontSize: "80%",
            whiteSpace: "pre"
        }
    },
    "&light .cm-searchMatch": {
        backgroundColor: "#ffff0054"
    },
    "&dark .cm-searchMatch": {
        backgroundColor: "#00ffff8a"
    },
    "&light .cm-searchMatch-selected": {
        backgroundColor: "#ff6a0054"
    },
    "&dark .cm-searchMatch-selected": {
        backgroundColor: "#ff00ff8a"
    }
}), Re1 = [
    p32,
    Ie.lowest(Pe3),
    Ee1
];
var _6 = typeof navigator != "undefined" && !/Edge\/(\d+)/.exec(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) && (/Mobile\/\w+/.test(navigator.userAgent) || navigator.maxTouchPoints > 2), C13 = "-10000px", M17 = class {
    constructor(t, e, o){
        this.facet = e, this.createTooltipView = o, this.input = t.state.facet(e), this.tooltips = this.input.filter((s)=>s
        ), this.tooltipViews = this.tooltips.map(o);
    }
    update(t) {
        let e = t.state.facet(this.facet), o = e.filter((r)=>r
        );
        if (e === this.input) {
            for (let r of this.tooltipViews)r.update && r.update(t);
            return !1;
        }
        let s = [];
        for(let r = 0; r < o.length; r++){
            let a = o[r], l = -1;
            if (!!a) {
                for(let n = 0; n < this.tooltips.length; n++){
                    let h = this.tooltips[n];
                    h && h.create == a.create && (l = n);
                }
                if (l < 0) s[r] = this.createTooltipView(a);
                else {
                    let n = s[r] = this.tooltipViews[l];
                    n.update && n.update(t);
                }
            }
        }
        for (let r1 of this.tooltipViews)s.indexOf(r1) < 0 && r1.dom.remove();
        return this.input = e, this.tooltips = o, this.tooltipViews = s, !0;
    }
};
function z13() {
    return {
        top: 0,
        left: 0,
        bottom: innerHeight,
        right: innerWidth
    };
}
var T18 = O1.define({
    combine: (i)=>{
        var t, e, o;
        return {
            position: _6 ? "absolute" : ((t = i.find((s)=>s.position
            )) === null || t === void 0 ? void 0 : t.position) || "fixed",
            parent: ((e = i.find((s)=>s.parent
            )) === null || e === void 0 ? void 0 : e.parent) || null,
            tooltipSpace: ((o = i.find((s)=>s.tooltipSpace
            )) === null || o === void 0 ? void 0 : o.tooltipSpace) || z13
        };
    }
}), H11 = z3.fromClass(class {
    constructor(i){
        var t;
        this.view = i, this.inView = !0, this.lastTransaction = 0, this.measureTimeout = -1;
        let e = i.state.facet(T18);
        this.position = e.position, this.parent = e.parent, this.classes = i.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
        }, this.manager = new M17(i, k6, (o)=>this.createTooltip(o)
        ), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((o)=>{
            Date.now() > this.lastTransaction - 50 && o.length > 0 && o[o.length - 1].intersectionRatio < 1 && this.measureSoon();
        }, {
            threshold: [
                1
            ]
        }) : null, this.observeIntersection(), (t = i.dom.ownerDocument.defaultView) === null || t === void 0 || t.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
    }
    createContainer() {
        this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
    }
    observeIntersection() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let i of this.manager.tooltipViews)this.intersectionObserver.observe(i.dom);
        }
    }
    measureSoon() {
        this.measureTimeout < 0 && (this.measureTimeout = setTimeout(()=>{
            this.measureTimeout = -1, this.maybeMeasure();
        }, 50));
    }
    update(i) {
        i.transactions.length && (this.lastTransaction = Date.now());
        let t = this.manager.update(i);
        t && this.observeIntersection();
        let e = t || i.geometryChanged, o = i.state.facet(T18);
        if (o.position != this.position) {
            this.position = o.position;
            for (let s of this.manager.tooltipViews)s.dom.style.position = this.position;
            e = !0;
        }
        if (o.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = o.parent, this.createContainer();
            for (let s of this.manager.tooltipViews)this.container.appendChild(s.dom);
            e = !0;
        } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
        e && this.maybeMeasure();
    }
    createTooltip(i) {
        let t = i.create(this.view);
        if (t.dom.classList.add("cm-tooltip"), i.arrow && !t.dom.querySelector("cm-tooltip > cm-tooltip-arrow")) {
            let e = document.createElement("div");
            e.className = "cm-tooltip-arrow", t.dom.appendChild(e);
        }
        return t.dom.style.position = this.position, t.dom.style.top = C13, this.container.appendChild(t.dom), t.mount && t.mount(this.view), t;
    }
    destroy() {
        var i2, t13;
        (i2 = this.view.dom.ownerDocument.defaultView) === null || i2 === void 0 || i2.removeEventListener("resize", this.measureSoon);
        for (let { dom: e  } of this.manager.tooltipViews)e.remove();
        (t13 = this.intersectionObserver) === null || t13 === void 0 || t13.disconnect(), clearTimeout(this.measureTimeout);
    }
    readMeasure() {
        let i = this.view.dom.getBoundingClientRect();
        return {
            editor: i,
            parent: this.parent ? this.container.getBoundingClientRect() : i,
            pos: this.manager.tooltips.map((t)=>this.view.coordsAtPos(t.pos)
            ),
            size: this.manager.tooltipViews.map(({ dom: t  })=>t.getBoundingClientRect()
            ),
            space: this.view.state.facet(T18).tooltipSpace(this.view)
        };
    }
    writeMeasure(i) {
        let { editor: t , space: e  } = i, o = [];
        for(let s = 0; s < this.manager.tooltips.length; s++){
            let r = this.manager.tooltips[s], a = this.manager.tooltipViews[s], { dom: l  } = a, n = i.pos[s], h = i.size[s];
            if (!n || n.bottom <= Math.max(t.top, e.top) || n.top >= Math.min(t.bottom, e.bottom) || n.right <= Math.max(t.left, e.left) || n.left >= Math.min(t.right, e.right)) {
                l.style.top = C13;
                continue;
            }
            let p = r.arrow ? a.dom.querySelector(".cm-tooltip-arrow") : null, d = p ? 7 : 0, g = h.right - h.left, b = h.bottom - h.top, m = a.offset || q13, V = this.view.textDirection == P4.LTR, u = h.width > e.right - e.left ? V ? e.left : e.right - h.width : V ? Math.min(n.left - (p ? 14 : 0) + m.x, e.right - g) : Math.max(e.left, n.left - g + (p ? 14 : 0) - m.x), c = !!r.above;
            !r.strictSide && (c ? n.top - (h.bottom - h.top) - m.y < e.top : n.bottom + (h.bottom - h.top) + m.y > e.bottom) && c == e.bottom - n.bottom > n.top - e.top && (c = !c);
            let f = c ? n.top - b - d - m.y : n.bottom + d + m.y, O = u + g;
            for (let v of o)v.left < O && v.right > u && v.top < f + b && v.bottom > f && (f = c ? v.top - b - 2 - d : v.bottom + d + 2);
            this.position == "absolute" ? (l.style.top = f - i.parent.top + "px", l.style.left = u - i.parent.left + "px") : (l.style.top = f + "px", l.style.left = u + "px"), p && (p.style.left = `${n.left + (V ? m.x : -m.x) - (u + 14 - 7)}px`), o.push({
                left: u,
                top: f,
                right: O,
                bottom: f + b
            }), l.classList.toggle("cm-tooltip-above", c), l.classList.toggle("cm-tooltip-below", !c), a.positioned && a.positioned();
        }
    }
    maybeMeasure() {
        if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let i of this.manager.tooltipViews)i.dom.style.top = C13;
    }
}, {
    eventHandlers: {
        scroll () {
            this.maybeMeasure();
        }
    }
}), B13 = D3.baseTheme({
    ".cm-tooltip": {
        zIndex: 100
    },
    "&light .cm-tooltip": {
        border: "1px solid #bbb",
        backgroundColor: "#f5f5f5"
    },
    "&light .cm-tooltip-section:not(:first-child)": {
        borderTop: "1px solid #bbb"
    },
    "&dark .cm-tooltip": {
        backgroundColor: "#333338",
        color: "white"
    },
    ".cm-tooltip-arrow": {
        height: `${7}px`,
        width: `${7 * 2}px`,
        position: "absolute",
        zIndex: -1,
        overflow: "hidden",
        "&:before, &:after": {
            content: "''",
            position: "absolute",
            width: 0,
            height: 0,
            borderLeft: `${7}px solid transparent`,
            borderRight: `${7}px solid transparent`
        },
        ".cm-tooltip-above &": {
            bottom: `-${7}px`,
            "&:before": {
                borderTop: `${7}px solid #bbb`
            },
            "&:after": {
                borderTop: `${7}px solid #f5f5f5`,
                bottom: "1px"
            }
        },
        ".cm-tooltip-below &": {
            top: `-${7}px`,
            "&:before": {
                borderBottom: `${7}px solid #bbb`
            },
            "&:after": {
                borderBottom: `${7}px solid #f5f5f5`,
                top: "1px"
            }
        }
    },
    "&dark .cm-tooltip .cm-tooltip-arrow": {
        "&:before": {
            borderTopColor: "#333338",
            borderBottomColor: "#333338"
        },
        "&:after": {
            borderTopColor: "transparent",
            borderBottomColor: "transparent"
        }
    }
}), q13 = {
    x: 0,
    y: 0
}, k6 = O1.define({
    enables: [
        H11,
        B13
    ]
}), w31 = O1.define(), x15 = class {
    constructor(t){
        this.view = t, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new M17(t, w31, (e)=>this.createHostedView(e)
        );
    }
    static create(t) {
        return new x15(t);
    }
    createHostedView(t) {
        let e = t.create(this.view);
        return e.dom.classList.add("cm-tooltip-section"), this.dom.appendChild(e.dom), this.mounted && e.mount && e.mount(this.view), e;
    }
    mount(t) {
        for (let e of this.manager.tooltipViews)e.mount && e.mount(t);
        this.mounted = !0;
    }
    positioned() {
        for (let t of this.manager.tooltipViews)t.positioned && t.positioned();
    }
    update(t) {
        this.manager.update(t);
    }
}, N16 = k6.compute([
    w31
], (i)=>{
    let t = i.facet(w31).filter((e)=>e
    );
    return t.length === 0 ? null : {
        pos: Math.min(...t.map((e)=>e.pos
        )),
        end: Math.max(...t.filter((e)=>e.end != null
        ).map((e)=>e.end
        )),
        create: x15.create,
        above: t[0].above,
        arrow: t.some((e)=>e.arrow
        )
    };
}), D10 = class {
    constructor(t, e, o, s, r){
        this.view = t, this.source = e, this.field = o, this.setHover = s, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
            x: 0,
            y: 0,
            target: t.dom,
            time: 0
        }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
    }
    update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(()=>this.startHover()
        , 20));
    }
    get active() {
        return this.view.state.field(this.field);
    }
    checkHover() {
        if (this.hoverTimeout = -1, this.active) return;
        let t = Date.now() - this.lastMove.time;
        t < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t) : this.startHover();
    }
    startHover() {
        var t13;
        clearTimeout(this.restartTimeout);
        let { lastMove: e  } = this, o = this.view.contentDOM.contains(e.target) ? this.view.posAtCoords(e) : null;
        if (o == null) return;
        let s = this.view.coordsAtPos(o);
        if (s == null || e.y < s.top || e.y > s.bottom || e.x < s.left - this.view.defaultCharacterWidth || e.x > s.right + this.view.defaultCharacterWidth) return;
        let r = this.view.bidiSpans(this.view.state.doc.lineAt(o)).find((n)=>n.from <= o && n.to >= o
        ), a = r && r.dir == P4.RTL ? -1 : 1, l = this.source(this.view, o, e.x < s.left ? -a : a);
        if ((t13 = l) === null || t13 === void 0 ? void 0 : t13.then) {
            let n = this.pending = {
                pos: o
            };
            l.then((h)=>{
                this.pending == n && (this.pending = null, h && this.view.dispatch({
                    effects: this.setHover.of(h)
                }));
            }, (h)=>lt(this.view.state, h, "hover tooltip")
            );
        } else l && this.view.dispatch({
            effects: this.setHover.of(l)
        });
    }
    mousemove(t) {
        var e;
        this.lastMove = {
            x: t.clientX,
            y: t.clientY,
            target: t.target,
            time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let o = this.active;
        if (o && !W14(this.lastMove.target) || this.pending) {
            let { pos: s  } = o || this.pending, r = (e = o == null ? void 0 : o.end) !== null && e !== void 0 ? e : s;
            (s == r ? this.view.posAtCoords(this.lastMove) != s : !j9(this.view, s, r, t.clientX, t.clientY, 6)) && (this.view.dispatch({
                effects: this.setHover.of(null)
            }), this.pending = null);
        }
    }
    mouseleave() {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1, this.active && this.view.dispatch({
            effects: this.setHover.of(null)
        });
    }
    destroy() {
        clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
    }
};
function W14(i) {
    for(let t = i; t; t = t.parentNode)if (t.nodeType == 1 && t.classList.contains("cm-tooltip")) return !0;
    return !1;
}
function j9(i, t, e, o, s, r) {
    let a = document.createRange(), l = i.domAtPos(t), n = i.domAtPos(e);
    a.setEnd(n.node, n.offset), a.setStart(l.node, l.offset);
    let h = a.getClientRects();
    a.detach();
    for(let p = 0; p < h.length; p++){
        let d = h[p];
        if (Math.max(d.top - s, s - d.bottom, d.left - o, o - d.right) <= r) return !0;
    }
    return !1;
}
function G6(i, t = {
}) {
    let e = v.define(), o = B1.define({
        create () {
            return null;
        },
        update (r, a) {
            if (r && t.hideOnChange && (a.docChanged || a.selection)) return null;
            for (let l of a.effects){
                if (l.is(e)) return l.value;
                if (l.is(R8)) return null;
            }
            if (r && a.docChanged) {
                let l = a.changes.mapPos(r.pos, -1, D2.TrackDel);
                if (l == null) return null;
                let n = Object.assign(Object.create(null), r);
                return n.pos = l, r.end != null && (n.end = a.changes.mapPos(r.end)), n;
            }
            return r;
        },
        provide: (r)=>w31.from(r)
    }), s = t.hoverTime || 600;
    return [
        o,
        z3.define((r)=>new D10(r, i, o, e, s)
        ),
        N16
    ];
}
function J12(i, t) {
    let e = i.plugin(H11);
    if (!e) return null;
    let o = e.manager.tooltips.indexOf(t);
    return o < 0 ? null : e.manager.tooltipViews[o];
}
var R8 = v.define(), Q9 = R8.of(null);
var _7 = class {
    constructor(e, t, i){
        this.state = e, this.pos = t, this.explicit = i, this.abortListeners = [];
    }
    tokenBefore(e) {
        let t = v9(this.state).resolveInner(this.pos, -1);
        for(; t && e.indexOf(t.name) < 0;)t = t.parent;
        return t ? {
            from: t.from,
            to: this.pos,
            text: this.state.sliceDoc(t.from, this.pos),
            type: t.type
        } : null;
    }
    matchBefore(e) {
        let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), s = t.text.slice(i - t.from, this.pos - t.from), o = s.search(te5(e, !1));
        return o < 0 ? null : {
            from: i + o,
            to: this.pos,
            text: s.slice(o)
        };
    }
    get aborted() {
        return this.abortListeners == null;
    }
    addEventListener(e, t) {
        e == "abort" && this.abortListeners && this.abortListeners.push(t);
    }
};
function ee5(n) {
    let e = Object.keys(n).join(""), t = /\w/.test(e);
    return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function De3(n) {
    let e = Object.create(null), t = Object.create(null);
    for (let { label: s  } of n){
        e[s[0]] = !0;
        for(let o = 1; o < s.length; o++)t[s[o]] = !0;
    }
    let i = ee5(e) + ee5(t) + "*$";
    return [
        new RegExp("^" + i),
        new RegExp(i)
    ];
}
function Fe2(n) {
    let e = n.map((s)=>typeof s == "string" ? {
            label: s
        } : s
    ), [t, i] = e.every((s)=>/^\w+$/.test(s.label)
    ) ? [
        /\w*$/,
        /\w+$/
    ] : De3(e);
    return (s)=>{
        let o = s.matchBefore(i);
        return o || s.explicit ? {
            from: o ? o.from : s.pos,
            options: e,
            span: t
        } : null;
    };
}
function xt2(n, e) {
    return (t)=>{
        for(let i = v9(t.state).resolveInner(t.pos, -1); i; i = i.parent)if (n.indexOf(i.name) > -1) return null;
        return e(t);
    };
}
var H13 = class {
    constructor(e, t, i){
        this.completion = e, this.source = t, this.match = i;
    }
};
function I10(n) {
    return n.selection.main.head;
}
function te5(n, e) {
    var t13;
    let { source: i  } = n, s = e && i[0] != "^", o = i[i.length - 1] != "$";
    return !s && !o ? n : new RegExp(`${s ? "^" : ""}(?:${i})${o ? "$" : ""}`, (t13 = n.flags) !== null && t13 !== void 0 ? t13 : n.ignoreCase ? "i" : "");
}
var Ue2 = z1.define();
function ie7(n, e) {
    let t = e.completion.apply || e.completion.label, i = e.source;
    typeof t == "string" ? n.dispatch({
        changes: {
            from: i.from,
            to: i.to,
            insert: t
        },
        selection: {
            anchor: i.from + t.length
        },
        userEvent: "input.complete",
        annotations: Ue2.of(e.completion)
    }) : t(n, e.completion, i.from, i.to);
}
var ne6 = new WeakMap;
function $e2(n) {
    if (!Array.isArray(n)) return n;
    let e = ne6.get(n);
    return e || ne6.set(n, e = Fe2(n)), e;
}
var se5 = class {
    constructor(e){
        this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [];
        for(let t = 0; t < e.length;){
            let i = b(e, t), s = q(i);
            this.chars.push(i);
            let o = e.slice(t, t + s), l = o.toUpperCase();
            this.folded.push(b(l == o ? o.toLowerCase() : l, 0)), t += s;
        }
        this.astral = e.length != this.chars.length;
    }
    match(e) {
        if (this.pattern.length == 0) return [
            0
        ];
        if (e.length < this.pattern.length) return null;
        let { chars: t , folded: i , any: s , precise: o , byWord: l  } = this;
        if (t.length == 1) {
            let h = b(e, 0);
            return h == t[0] ? [
                0,
                0,
                q(h)
            ] : h == i[0] ? [
                -200,
                0,
                q(h)
            ] : null;
        }
        let r = e.indexOf(this.pattern);
        if (r == 0) return [
            0,
            0,
            this.pattern.length
        ];
        let a = t.length, c = 0;
        if (r < 0) {
            for(let h = 0, B = Math.min(e.length, 200); h < B && c < a;){
                let x = b(e, h);
                (x == t[c] || x == i[c]) && (s[c++] = h), h += q(x);
            }
            if (c < a) return null;
        }
        let f = 0, p = 0, F = !1, g = 0, U = -1, $ = -1, Ie = /[a-z]/.test(e), j = !0;
        for(let h = 0, B = Math.min(e.length, 200), x = 0; h < B && p < a;){
            let d = b(e, h);
            r < 0 && (f < a && d == t[f] && (o[f++] = h), g < a && (d == t[g] || d == i[g] ? (g == 0 && (U = h), $ = h + 1, g++) : g = 0));
            let L, N = d < 255 ? d >= 48 && d <= 57 || d >= 97 && d <= 122 ? 2 : d >= 65 && d <= 90 ? 1 : 0 : (L = z(d)) != L.toLowerCase() ? 1 : L != L.toUpperCase() ? 2 : 0;
            (!h || N == 1 && Ie || x == 0 && N != 0) && (t[p] == d || i[p] == d && (F = !0) ? l[p++] = h : l.length && (j = !1)), x = N, h += q(d);
        }
        return p == a && l[0] == 0 && j ? this.result(-100 + (F ? -200 : 0), l, e) : g == a && U == 0 ? [
            -200 - e.length,
            0,
            $
        ] : r > -1 ? [
            -700 - e.length,
            r,
            r + this.pattern.length
        ] : g == a ? [
            -200 + -700 - e.length,
            U,
            $
        ] : p == a ? this.result(-100 + (F ? -200 : 0) + -700 + (j ? 0 : -1100), l, e) : t.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
    }
    result(e, t, i) {
        let s = [
            e - i.length
        ], o = 1;
        for (let l of t){
            let r = l + (this.astral ? q(b(i, l)) : 1);
            o > 1 && s[o - 1] == l ? s[o - 1] = r : (s[o++] = l, s[o++] = r);
        }
        return s;
    }
}, w32 = O1.define({
    combine (n) {
        return be4(n, {
            activateOnTyping: !0,
            override: null,
            maxRenderedOptions: 100,
            defaultKeymap: !0,
            optionClass: ()=>""
            ,
            aboveCursor: !1,
            icons: !0,
            addToOptions: []
        }, {
            defaultKeymap: (e, t)=>e && t
            ,
            icons: (e, t)=>e && t
            ,
            optionClass: (e, t)=>(i)=>je2(e(i), t(i))
            ,
            addToOptions: (e, t)=>e.concat(t)
        });
    }
});
function je2(n, e) {
    return n ? e ? n + " " + e : n : e;
}
function Be4(n) {
    let e = n.addToOptions.slice();
    return n.icons && e.push({
        render (t) {
            let i = document.createElement("div");
            return i.classList.add("cm-completionIcon"), t.type && i.classList.add(...t.type.split(/\s+/g).map((s)=>"cm-completionIcon-" + s
            )), i.setAttribute("aria-hidden", "true"), i;
        },
        position: 20
    }), e.push({
        render (t, i, s) {
            let o = document.createElement("span");
            o.className = "cm-completionLabel";
            let { label: l  } = t, r = 0;
            for(let a = 1; a < s.length;){
                let c = s[a++], f = s[a++];
                c > r && o.appendChild(document.createTextNode(l.slice(r, c)));
                let p = o.appendChild(document.createElement("span"));
                p.appendChild(document.createTextNode(l.slice(c, f))), p.className = "cm-completionMatchedText", r = f;
            }
            return r < l.length && o.appendChild(document.createTextNode(l.slice(r))), o;
        },
        position: 50
    }, {
        render (t) {
            if (!t.detail) return null;
            let i = document.createElement("span");
            return i.className = "cm-completionDetail", i.textContent = t.detail, i;
        },
        position: 80
    }), e.sort((t, i)=>t.position - i.position
    ).map((t)=>t.render
    );
}
function Ne3(n, e) {
    let t = document.createElement("div");
    t.className = "cm-tooltip cm-completionInfo";
    let { info: i  } = n.completion;
    if (typeof i == "string") t.textContent = i;
    else {
        let s = i(n.completion);
        s.then ? s.then((o)=>t.appendChild(o)
        , (o)=>lt(e.state, o, "completion info")
        ) : t.appendChild(s);
    }
    return t;
}
function oe5(n, e, t) {
    if (n <= t) return {
        from: 0,
        to: n
    };
    if (e <= n >> 1) {
        let s = Math.floor(e / t);
        return {
            from: s * t,
            to: (s + 1) * t
        };
    }
    let i = Math.floor((n - e) / t);
    return {
        from: n - (i + 1) * t,
        to: n - i * t
    };
}
var le3 = class {
    constructor(e, t){
        this.view = e, this.stateField = t, this.info = null, this.placeInfo = {
            read: ()=>this.measureInfo()
            ,
            write: (r)=>this.positionInfo(r)
            ,
            key: this
        };
        let i = e.state.field(t), { options: s , selected: o  } = i.open, l = e.state.facet(w32);
        this.optionContent = Be4(l), this.optionClass = l.optionClass, this.range = oe5(s.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.dom.addEventListener("mousedown", (r)=>{
            for(let a = r.target, c; a && a != this.dom; a = a.parentNode)if (a.nodeName == "LI" && (c = /-(\d+)$/.exec(a.id)) && +c[1] < s.length) {
                ie7(e, s[+c[1]]), r.preventDefault();
                return;
            }
        }), this.list = this.dom.appendChild(this.createListBox(s, i.id, this.range)), this.list.addEventListener("scroll", ()=>{
            this.info && this.view.requestMeasure(this.placeInfo);
        });
    }
    mount() {
        this.updateSel();
    }
    update(e) {
        e.state.field(this.stateField) != e.startState.field(this.stateField) && this.updateSel();
    }
    positioned() {
        this.info && this.view.requestMeasure(this.placeInfo);
    }
    updateSel() {
        let e = this.view.state.field(this.stateField), t = e.open;
        if ((t.selected < this.range.from || t.selected >= this.range.to) && (this.range = oe5(t.options.length, t.selected, this.view.state.facet(w32).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t.options, e.id, this.range)), this.list.addEventListener("scroll", ()=>{
            this.info && this.view.requestMeasure(this.placeInfo);
        })), this.updateSelectedOption(t.selected)) {
            this.info && (this.info.remove(), this.info = null);
            let i = t.options[t.selected];
            i.completion.info && (this.info = this.dom.appendChild(Ne3(i, this.view)), this.view.requestMeasure(this.placeInfo));
        }
    }
    updateSelectedOption(e) {
        let t = null;
        for(let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++)s == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
        return t && qe2(this.list, t), t;
    }
    measureInfo() {
        let e = this.dom.querySelector("[aria-selected]");
        if (!e || !this.info) return null;
        let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), s = e.getBoundingClientRect();
        if (s.top > Math.min(innerHeight, t.bottom) - 10 || s.bottom < Math.max(0, t.top) + 10) return null;
        let o = Math.max(0, Math.min(s.top, innerHeight - i.height)) - t.top, l = this.view.textDirection == P4.RTL, r = t.left, a = innerWidth - t.right;
        return l && r < Math.min(i.width, a) ? l = !1 : !l && a < Math.min(i.width, r) && (l = !0), {
            top: o,
            left: l
        };
    }
    positionInfo(e) {
        this.info && (this.info.style.top = (e ? e.top : -1000000) + "px", e && (this.info.classList.toggle("cm-completionInfo-left", e.left), this.info.classList.toggle("cm-completionInfo-right", !e.left)));
    }
    createListBox(e, t, i) {
        let s = document.createElement("ul");
        s.id = t, s.setAttribute("role", "listbox");
        for(let o = i.from; o < i.to; o++){
            let { completion: l , match: r  } = e[o], a = s.appendChild(document.createElement("li"));
            a.id = t + "-" + o, a.setAttribute("role", "option");
            let c = this.optionClass(l);
            c && (a.className = c);
            for (let f of this.optionContent){
                let p = f(l, this.view.state, r);
                p && a.appendChild(p);
            }
        }
        return i.from && s.classList.add("cm-completionListIncompleteTop"), i.to < e.length && s.classList.add("cm-completionListIncompleteBottom"), s;
    }
};
function We2(n) {
    return (e)=>new le3(e, n)
    ;
}
function qe2(n, e) {
    let t = n.getBoundingClientRect(), i = e.getBoundingClientRect();
    i.top < t.top ? n.scrollTop -= t.top - i.top : i.bottom > t.bottom && (n.scrollTop += i.bottom - t.bottom);
}
var He2 = 300;
function re8(n) {
    return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function Ke2(n, e) {
    let t = [], i = 0;
    for (let l of n)if (l.hasResult()) if (l.result.filter === !1) for (let r of l.result.options)t.push(new H13(r, l, [
        1000000000 - i++
    ]));
    else {
        let r = new se5(e.sliceDoc(l.from, l.to)), a;
        for (let c of l.result.options)(a = r.match(c.label)) && (c.boost != null && (a[0] += c.boost), t.push(new H13(c, l, a)));
    }
    t.sort(ce6);
    let s = [], o = null;
    for (let l1 of t.sort(ce6)){
        if (s.length == He2) break;
        !o || o.label != l1.completion.label || o.detail != l1.completion.detail || o.type != l1.completion.type || o.apply != l1.completion.apply ? s.push(l1) : re8(l1.completion) > re8(o) && (s[s.length - 1] = l1), o = l1.completion;
    }
    return s;
}
var E19 = class {
    constructor(e, t, i, s, o){
        this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = s, this.selected = o;
    }
    setSelected(e, t) {
        return e == this.selected || e >= this.options.length ? this : new E19(this.options, ae6(t, e), this.tooltip, this.timestamp, e);
    }
    static build(e, t, i, s, o) {
        let l = Ke2(e, t);
        if (!l.length) return null;
        let r = 0;
        if (s && s.selected) {
            let a = s.options[s.selected].completion;
            for(let c = 0; c < l.length && !r; c++)l[c].completion == a && (r = c);
        }
        return new E19(l, ae6(i, r), {
            pos: e.reduce((a, c)=>c.hasResult() ? Math.min(a, c.from) : a
            , 100000000),
            create: We2(m6),
            above: o.aboveCursor
        }, s ? s.timestamp : Date.now(), r);
    }
    map(e) {
        return new E19(this.options, this.attrs, Object.assign(Object.assign({
        }, this.tooltip), {
            pos: e.mapPos(this.tooltip.pos)
        }), this.timestamp, this.selected);
    }
}, S19 = class {
    constructor(e, t, i){
        this.active = e, this.id = t, this.open = i;
    }
    static start() {
        return new S19(Ve2, "cm-ac-" + Math.floor(Math.random() * 2000000).toString(36), null);
    }
    update(e) {
        let { state: t  } = e, i = t.facet(w32), o = (i.override || t.languageDataAt("autocomplete", I10(t)).map($e2)).map((r)=>(this.active.find((c)=>c.source == r
            ) || new u2(r, this.active.some((c)=>c.state != 0
            ) ? 1 : 0)).update(e, i)
        );
        o.length == this.active.length && o.every((r, a)=>r == this.active[a]
        ) && (o = this.active);
        let l = e.selection || o.some((r)=>r.hasResult() && e.changes.touchesRange(r.from, r.to)
        ) || !ze1(o, this.active) ? E19.build(o, t, this.id, this.open, i) : this.open && e.docChanged ? this.open.map(e.changes) : this.open;
        !l && o.every((r)=>r.state != 1
        ) && o.some((r)=>r.hasResult()
        ) && (o = o.map((r)=>r.hasResult() ? new u2(r.source, 0) : r
        ));
        for (let r of e.effects)r.is(pe7) && (l = l && l.setSelected(r.value, this.id));
        return o == this.active && l == this.open ? this : new S19(o, this.id, l);
    }
    get tooltip() {
        return this.open ? this.open.tooltip : null;
    }
    get attrs() {
        return this.open ? this.open.attrs : Qe2;
    }
};
function ze1(n, e) {
    if (n == e) return !0;
    for(let t = 0, i = 0;;){
        for(; t < n.length && !n[t].hasResult;)t++;
        for(; i < e.length && !e[i].hasResult;)i++;
        let s = t == n.length, o = i == e.length;
        if (s || o) return s == o;
        if (n[t++].result != e[i++].result) return !1;
    }
}
var Qe2 = {
    "aria-autocomplete": "list",
    "aria-expanded": "false"
};
function ae6(n, e) {
    return {
        "aria-autocomplete": "list",
        "aria-expanded": "true",
        "aria-activedescendant": n + "-" + e,
        "aria-controls": n
    };
}
var Ve2 = [];
function ce6(n, e) {
    let t = e.match[0] - n.match[0];
    return t || n.completion.label.localeCompare(e.completion.label);
}
function K14(n) {
    return n.isUserEvent("input.type") ? "input" : n.isUserEvent("delete.backward") ? "delete" : null;
}
var u2 = class {
    constructor(e, t, i = -1){
        this.source = e, this.state = t, this.explicitPos = i;
    }
    hasResult() {
        return !1;
    }
    update(e, t) {
        let i = K14(e), s = this;
        i ? s = s.handleUserEvent(e, i, t) : e.docChanged ? s = s.handleChange(e) : e.selection && s.state != 0 && (s = new u2(s.source, 0));
        for (let o of e.effects)if (o.is(z15)) s = new u2(s.source, 1, o.value ? I10(e.state) : -1);
        else if (o.is(Q10)) s = new u2(s.source, 0);
        else if (o.is(fe5)) for (let l of o.value)l.source == s.source && (s = l);
        return s;
    }
    handleUserEvent(e, t, i) {
        return t == "delete" || !i.activateOnTyping ? this.map(e.changes) : new u2(this.source, 1);
    }
    handleChange(e) {
        return e.changes.touchesRange(I10(e.startState)) ? new u2(this.source, 0) : this.map(e.changes);
    }
    map(e) {
        return e.empty || this.explicitPos < 0 ? this : new u2(this.source, this.state, e.mapPos(this.explicitPos));
    }
}, T21 = class extends u2 {
    constructor(e, t, i, s, o, l){
        super(e, 2, t);
        this.result = i, this.from = s, this.to = o, this.span = l;
    }
    hasResult() {
        return !0;
    }
    handleUserEvent(e, t, i) {
        let s = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = I10(e.state);
        if ((this.explicitPos > -1 ? l < s : l <= s) || l > o) return new u2(this.source, t == "input" && i.activateOnTyping ? 1 : 0);
        let r = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos);
        return this.span && (s == o || this.span.test(e.state.sliceDoc(s, o))) ? new T21(this.source, r, this.result, s, o, this.span) : new u2(this.source, 1, r);
    }
    handleChange(e) {
        return e.changes.touchesRange(this.from, this.to) ? new u2(this.source, 0) : this.map(e.changes);
    }
    map(e) {
        return e.empty ? this : new T21(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1), this.span);
    }
}, z15 = v.define(), Q10 = v.define(), fe5 = v.define({
    map (n, e) {
        return n.map((t)=>t.map(e)
        );
    }
}), pe7 = v.define(), m6 = B1.define({
    create () {
        return S19.start();
    },
    update (n, e) {
        return n.update(e);
    },
    provide: (n)=>[
            k6.from(n, (e)=>e.tooltip
            ),
            D3.contentAttributes.from(n, (e)=>e.attrs
            )
        ]
}), he5 = 75;
function M18(n, e = "option") {
    return (t)=>{
        let i = t.state.field(m6, !1);
        if (!i || !i.open || Date.now() - i.open.timestamp < he5) return !1;
        let s = 1, o;
        e == "page" && (o = J12(t, i.open.tooltip)) && (s = Math.max(2, Math.floor(o.dom.offsetHeight / o.dom.querySelector("li").offsetHeight) - 1));
        let l = i.open.selected + s * (n ? 1 : -1), { length: r  } = i.open.options;
        return l < 0 ? l = e == "page" ? 0 : r - 1 : l >= r && (l = e == "page" ? r - 1 : 0), t.dispatch({
            effects: pe7.of(l)
        }), !0;
    };
}
var Xe2 = (n)=>{
    let e = n.state.field(m6, !1);
    return n.state.readOnly || !e || !e.open || Date.now() - e.open.timestamp < he5 ? !1 : (ie7(n, e.open.options[e.open.selected]), !0);
}, Ye2 = (n)=>n.state.field(m6, !1) ? (n.dispatch({
        effects: z15.of(!0)
    }), !0) : !1
, Ge2 = (n)=>{
    let e = n.state.field(m6, !1);
    return !e || !e.active.some((t)=>t.state != 0
    ) ? !1 : (n.dispatch({
        effects: Q10.of(null)
    }), !0);
}, ue6 = class {
    constructor(e, t){
        this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
    }
}, de7 = 50, Je2 = 50, Ze2 = 1000, _e3 = z3.fromClass(class {
    constructor(n){
        this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
        for (let e of n.state.field(m6).active)e.state == 1 && this.startQuery(e);
    }
    update(n) {
        let e = n.state.field(m6);
        if (!n.selectionSet && !n.docChanged && n.startState.field(m6) == e) return;
        let t = n.transactions.some((i)=>(i.selection || i.docChanged) && !K14(i)
        );
        for(let i = 0; i < this.running.length; i++){
            let s = this.running[i];
            if (t || s.updates.length + n.transactions.length > Je2 && s.time - Date.now() > Ze2) {
                for (let o of s.context.abortListeners)try {
                    o();
                } catch (l) {
                    lt(this.view.state, l);
                }
                s.context.abortListeners = null, this.running.splice(i--, 1);
            } else s.updates.push(...n.transactions);
        }
        if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = e.active.some((i)=>i.state == 1 && !this.running.some((s)=>s.active.source == i.source
            )
        ) ? setTimeout(()=>this.startUpdate()
        , de7) : -1, this.composing != 0) for (let i1 of n.transactions)K14(i1) == "input" ? this.composing = 2 : this.composing == 2 && i1.selection && (this.composing = 3);
    }
    startUpdate() {
        this.debounceUpdate = -1;
        let { state: n  } = this.view, e = n.field(m6);
        for (let t of e.active)t.state == 1 && !this.running.some((i)=>i.active.source == t.source
        ) && this.startQuery(t);
    }
    startQuery(n) {
        let { state: e  } = this.view, t = I10(e), i = new _7(e, t, n.explicitPos == t), s = new ue6(n, i);
        this.running.push(s), Promise.resolve(n.source(i)).then((o)=>{
            s.context.aborted || (s.done = o || null, this.scheduleAccept());
        }, (o)=>{
            this.view.dispatch({
                effects: Q10.of(null)
            }), lt(this.view.state, o);
        });
    }
    scheduleAccept() {
        this.running.every((n)=>n.done !== void 0
        ) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(()=>this.accept()
        , de7));
    }
    accept() {
        var n;
        this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
        let e = [], t = this.view.state.facet(w32);
        for(let i = 0; i < this.running.length; i++){
            let s = this.running[i];
            if (s.done === void 0) continue;
            if (this.running.splice(i--, 1), s.done) {
                let l = new T21(s.active.source, s.active.explicitPos, s.done, s.done.from, (n = s.done.to) !== null && n !== void 0 ? n : I10(s.updates.length ? s.updates[0].startState : this.view.state), s.done.span && s.done.filter !== !1 ? te5(s.done.span, !0) : null);
                for (let r of s.updates)l = l.update(r, t);
                if (l.hasResult()) {
                    e.push(l);
                    continue;
                }
            }
            let o = this.view.state.field(m6).active.find((l)=>l.source == s.active.source
            );
            if (o && o.state == 1) if (s.done == null) {
                let l = new u2(s.active.source, 0);
                for (let r of s.updates)l = l.update(r, t);
                l.state != 1 && e.push(l);
            } else this.startQuery(o);
        }
        e.length && this.view.dispatch({
            effects: fe5.of(e)
        });
    }
}, {
    eventHandlers: {
        compositionstart () {
            this.composing = 1;
        },
        compositionend () {
            this.composing == 3 && setTimeout(()=>this.view.dispatch({
                    effects: z15.of(!1)
                })
            , 20), this.composing = 0;
        }
    }
}), me6 = D3.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
        "& > ul": {
            fontFamily: "monospace",
            whiteSpace: "nowrap",
            overflow: "hidden auto",
            maxWidth_fallback: "700px",
            maxWidth: "min(700px, 95vw)",
            minWidth: "250px",
            maxHeight: "10em",
            listStyle: "none",
            margin: 0,
            padding: 0,
            "& > li": {
                overflowX: "hidden",
                textOverflow: "ellipsis",
                cursor: "pointer",
                padding: "1px 3px",
                lineHeight: 1.2
            }
        }
    },
    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
        background: "#17c",
        color: "white"
    },
    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
        background: "#347",
        color: "white"
    },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
        content: '"\xB7\xB7\xB7"',
        opacity: 0.5,
        display: "block",
        textAlign: "center"
    },
    ".cm-tooltip.cm-completionInfo": {
        position: "absolute",
        padding: "3px 9px",
        width: "max-content",
        maxWidth: "300px"
    },
    ".cm-completionInfo.cm-completionInfo-left": {
        right: "100%"
    },
    ".cm-completionInfo.cm-completionInfo-right": {
        left: "100%"
    },
    "&light .cm-snippetField": {
        backgroundColor: "#00000022"
    },
    "&dark .cm-snippetField": {
        backgroundColor: "#ffffff22"
    },
    ".cm-snippetFieldPosition": {
        verticalAlign: "text-top",
        width: 0,
        height: "1.15em",
        margin: "0 -0.7px -.7em",
        borderLeft: "1.4px dotted #888"
    },
    ".cm-completionMatchedText": {
        textDecoration: "underline"
    },
    ".cm-completionDetail": {
        marginLeft: "0.5em",
        fontStyle: "italic"
    },
    ".cm-completionIcon": {
        fontSize: "90%",
        width: ".8em",
        display: "inline-block",
        textAlign: "center",
        paddingRight: ".6em",
        opacity: "0.6"
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
        "&:after": {
            content: "'\u0192'"
        }
    },
    ".cm-completionIcon-class": {
        "&:after": {
            content: "'\u25CB'"
        }
    },
    ".cm-completionIcon-interface": {
        "&:after": {
            content: "'\u25CC'"
        }
    },
    ".cm-completionIcon-variable": {
        "&:after": {
            content: "'\u{1D465}'"
        }
    },
    ".cm-completionIcon-constant": {
        "&:after": {
            content: "'\u{1D436}'"
        }
    },
    ".cm-completionIcon-type": {
        "&:after": {
            content: "'\u{1D461}'"
        }
    },
    ".cm-completionIcon-enum": {
        "&:after": {
            content: "'\u222A'"
        }
    },
    ".cm-completionIcon-property": {
        "&:after": {
            content: "'\u25A1'"
        }
    },
    ".cm-completionIcon-keyword": {
        "&:after": {
            content: "'\u{1F511}\uFE0E'"
        }
    },
    ".cm-completionIcon-namespace": {
        "&:after": {
            content: "'\u25A2'"
        }
    },
    ".cm-completionIcon-text": {
        "&:after": {
            content: "'abc'",
            fontSize: "50%",
            verticalAlign: "middle"
        }
    }
}), ge8 = class {
    constructor(e, t, i, s){
        this.field = e, this.line = t, this.from = i, this.to = s;
    }
}, O12 = class {
    constructor(e, t, i){
        this.field = e, this.from = t, this.to = i;
    }
    map(e) {
        return new O12(this.field, e.mapPos(this.from, -1), e.mapPos(this.to, 1));
    }
}, D11 = class {
    constructor(e, t){
        this.lines = e, this.fieldPositions = t;
    }
    instantiate(e, t) {
        let i = [], s = [
            t
        ], o = e.doc.lineAt(t), l = /^\s*/.exec(o.text)[0];
        for (let a of this.lines){
            if (i.length) {
                let c = l, f = /^\t*/.exec(a)[0].length;
                for(let p = 0; p < f; p++)c += e.facet(E11);
                s.push(t + c.length - f), a = c + a.slice(f);
            }
            i.push(a), t += a.length + 1;
        }
        let r = this.fieldPositions.map((a)=>new O12(a.field, s[a.line] + a.from, s[a.line] + a.to)
        );
        return {
            text: i,
            ranges: r
        };
    }
    static parse(e) {
        let t = [], i = [], s = [], o;
        for (let l of e.split(/\r\n?|\n/)){
            for(; o = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(l);){
                let r = o[1] ? +o[1] : null, a = o[2] || o[3] || "", c = -1;
                for(let f = 0; f < t.length; f++)(r != null ? t[f].seq == r : a ? t[f].name == a : !1) && (c = f);
                if (c < 0) {
                    let f = 0;
                    for(; f < t.length && (r == null || t[f].seq != null && t[f].seq < r);)f++;
                    t.splice(f, 0, {
                        seq: r,
                        name: a
                    }), c = f;
                    for (let p of s)p.field >= c && p.field++;
                }
                s.push(new ge8(c, i.length, o.index, o.index + a.length)), l = l.slice(0, o.index) + a + l.slice(o.index + o[0].length);
            }
            i.push(l);
        }
        return new D11(i, s);
    }
}, et3 = w6.widget({
    widget: new class extends Q1 {
        toDOM() {
            let n = document.createElement("span");
            return n.className = "cm-snippetFieldPosition", n;
        }
        ignoreEvent() {
            return !1;
        }
    }
}), tt3 = w6.mark({
    class: "cm-snippetField"
}), b15 = class {
    constructor(e, t){
        this.ranges = e, this.active = t, this.deco = w6.set(e.map((i)=>(i.from == i.to ? et3 : tt3).range(i.from, i.to)
        ));
    }
    map(e) {
        return new b15(this.ranges.map((t)=>t.map(e)
        ), this.active);
    }
    selectionInsideField(e) {
        return e.ranges.every((t)=>this.ranges.some((i)=>i.field == this.active && i.from <= t.from && i.to >= t.to
            )
        );
    }
}, k8 = v.define({
    map (n, e) {
        return n && n.map(e);
    }
}), it3 = v.define(), P11 = B1.define({
    create () {
        return null;
    },
    update (n, e) {
        for (let t of e.effects){
            if (t.is(k8)) return t.value;
            if (t.is(it3) && n) return new b15(n.ranges, t.value);
        }
        return n && e.docChanged && (n = n.map(e.changes)), n && e.selection && !n.selectionInsideField(e.selection) && (n = null), n;
    },
    provide: (n)=>D3.decorations.from(n, (e)=>e ? e.deco : w6.none
        )
});
function V13(n, e) {
    return p48.create(n.filter((t)=>t.field == e
    ).map((t)=>p48.range(t.from, t.to)
    ));
}
function nt2(n) {
    let e = D11.parse(n);
    return (t, i, s, o)=>{
        let { text: l , ranges: r  } = e.instantiate(t.state, s), a = {
            changes: {
                from: s,
                to: o,
                insert: d.of(l)
            }
        };
        if (r.length && (a.selection = V13(r, 0)), r.length > 1) {
            let c = new b15(r, 0), f = a.effects = [
                k8.of(c)
            ];
            t.state.field(P11, !1) === void 0 && f.push(v.appendConfig.of([
                P11,
                at1,
                ct1,
                me6
            ]));
        }
        t.dispatch(t.state.update(a));
    };
}
function ve5(n) {
    return ({ state: e , dispatch: t  })=>{
        let i = e.field(P11, !1);
        if (!i || n < 0 && i.active == 0) return !1;
        let s = i.active + n, o = n > 0 && !i.ranges.some((l)=>l.field == s + n
        );
        return t(e.update({
            selection: V13(i.ranges, s),
            effects: k8.of(o ? null : new b15(i.ranges, s))
        })), !0;
    };
}
var st1 = ({ state: n , dispatch: e  })=>n.field(P11, !1) ? (e(n.update({
        effects: k8.of(null)
    })), !0) : !1
, ot3 = ve5(1), lt3 = ve5(-1), rt3 = [
    {
        key: "Tab",
        run: ot3,
        shift: lt3
    },
    {
        key: "Escape",
        run: st1
    }
], we6 = O1.define({
    combine (n) {
        return n.length ? n[0] : rt3;
    }
}), at1 = Ie.highest(Fn.compute([
    we6
], (n)=>n.facet(we6)
));
function yt1(n, e) {
    return Object.assign(Object.assign({
    }, e), {
        apply: nt2(n)
    });
}
var ct1 = D3.domEventHandlers({
    mousedown (n, e) {
        let t = e.state.field(P11, !1), i;
        if (!t || (i = e.posAtCoords({
            x: n.clientX,
            y: n.clientY
        })) == null) return !1;
        let s = t.ranges.find((o)=>o.from <= i && o.to >= i
        );
        return !s || s.field == t.active ? !1 : (e.dispatch({
            selection: V13(t.ranges, s.field),
            effects: k8.of(t.ranges.some((o)=>o.field > s.field
            ) ? new b15(t.ranges, s.field) : null)
        }), !0);
    }
});
Object.create(null);
function It1(n = {
}) {
    return [
        m6,
        w32.of(n),
        _e3,
        ut2,
        me6
    ];
}
var ht1 = [
    {
        key: "Ctrl-Space",
        run: Ye2
    },
    {
        key: "Escape",
        run: Ge2
    },
    {
        key: "ArrowDown",
        run: M18(!0)
    },
    {
        key: "ArrowUp",
        run: M18(!1)
    },
    {
        key: "PageDown",
        run: M18(!0, "page")
    },
    {
        key: "PageUp",
        run: M18(!1, "page")
    },
    {
        key: "Enter",
        run: Xe2
    }
], ut2 = Ie.highest(Fn.computeN([
    w32
], (n)=>n.facet(w32).defaultKeymap ? [
        ht1
    ] : []
));
var B15 = (c)=>{
    let m = x16(c.state);
    return m.line ? D12(c) : m.block ? C17(c) : !1;
};
function u6(c, m) {
    return ({ state: i , dispatch: n  })=>{
        let r = c(m, i.selection.ranges, i);
        return r ? (n(i.update(r)), !0) : !1;
    };
}
var D12 = u6(y44, 0), v65 = u6(y44, 1), L15 = u6(y44, 2), C17 = u6(k27, 0), T23 = u6(k27, 1), I11 = u6(k27, 2), M19 = [
    {
        key: "Mod-/",
        run: B15
    },
    {
        key: "Alt-A",
        run: C17
    }
];
function x16(c, m = c.selection.main.head) {
    let i = c.languageDataAt("commentTokens", m);
    return i.length ? i[0] : {
    };
}
var p34 = 50;
function b18(c, { open: m , close: i  }, n, r) {
    let e = c.sliceDoc(n - p34, n), t = c.sliceDoc(r, r + p34), s = /\s*$/.exec(e)[0].length, f = /^\s*/.exec(t)[0].length, l = e.length - s;
    if (e.slice(l - m.length, l) == m && t.slice(f, f + i.length) == i) return {
        open: {
            pos: n - s,
            margin: s && 1
        },
        close: {
            pos: r + f,
            margin: f && 1
        }
    };
    let o, g;
    r - n <= 2 * p34 ? o = g = c.sliceDoc(n, r) : (o = c.sliceDoc(n, n + p34), g = c.sliceDoc(r - p34, r));
    let h = /^\s*/.exec(o)[0].length, d = /\s*$/.exec(g)[0].length, a = g.length - d - i.length;
    return o.slice(h, h + m.length) == m && g.slice(a, a + i.length) == i ? {
        open: {
            pos: n + h + m.length,
            margin: /\s/.test(o.charAt(h + m.length)) ? 1 : 0
        },
        close: {
            pos: r - d - i.length,
            margin: /\s/.test(g.charAt(a - 1)) ? 1 : 0
        }
    } : null;
}
function k27(c, m, i) {
    let n = m.map((e)=>x16(i, e.from).block
    );
    if (!n.every((e)=>e
    )) return null;
    let r = m.map((e, t)=>b18(i, n[t], e.from, e.to)
    );
    if (c != 2 && !r.every((e)=>e
    )) {
        let e = 0;
        return i.changeByRange((t)=>{
            let { open: s , close: f  } = n[e++];
            if (r[e]) return {
                range: t
            };
            let l = s.length + 1;
            return {
                changes: [
                    {
                        from: t.from,
                        insert: s + " "
                    },
                    {
                        from: t.to,
                        insert: " " + f
                    }
                ],
                range: p48.range(t.anchor + l, t.head + l)
            };
        });
    } else if (c != 1 && r.some((e)=>e
    )) {
        let e = [];
        for(let t = 0, s; t < r.length; t++)if (s = r[t]) {
            let f = n[t], { open: l , close: o  } = s;
            e.push({
                from: l.pos - f.open.length,
                to: l.pos + l.margin
            }, {
                from: o.pos - o.margin,
                to: o.pos + f.close.length
            });
        }
        return {
            changes: e
        };
    }
    return null;
}
function y44(c, m, i) {
    let n = [], r = -1;
    for (let { from: e , to: t  } of m){
        let s = n.length, f = 1000000000;
        for(let l = e; l <= t;){
            let o = i.doc.lineAt(l);
            if (o.from > r && (e == t || t > o.from)) {
                r = o.from;
                let g = x16(i, l).line;
                if (!g) continue;
                let h = /^\s*/.exec(o.text)[0].length, d = h == o.length, a = o.text.slice(h, h + g.length) == g ? h : -1;
                h < o.text.length && h < f && (f = h), n.push({
                    line: o,
                    comment: a,
                    token: g,
                    indent: h,
                    empty: d,
                    single: !1
                });
            }
            l = o.to + 1;
        }
        if (f < 1000000000) for(let l1 = s; l1 < n.length; l1++)n[l1].indent < n[l1].line.text.length && (n[l1].indent = f);
        n.length == s + 1 && (n[s].single = !0);
    }
    if (c != 2 && n.some((e)=>e.comment < 0 && (!e.empty || e.single)
    )) {
        let e = [];
        for (let { line: s , token: f , indent: l , empty: o , single: g  } of n)(g || !o) && e.push({
            from: s.from + l,
            insert: f + " "
        });
        let t = i.changes(e);
        return {
            changes: t,
            selection: i.selection.map(t, 1)
        };
    } else if (c != 1 && n.some((e)=>e.comment >= 0
    )) {
        let e = [];
        for (let { line: t , comment: s , token: f  } of n)if (s >= 0) {
            let l = t.from + s, o = l + f.length;
            t.text[o - t.from] == " " && o++, e.push({
                from: l,
                to: o
            });
        }
        return {
            changes: e
        };
    }
    return null;
}
var s4 = 2000;
function M20(e, l, t) {
    let n = Math.min(l.line, t.line), o = Math.max(l.line, t.line), f = [];
    if (l.off > s4 || t.off > s4 || l.col < 0 || t.col < 0) {
        let i = Math.min(l.off, t.off), a = Math.max(l.off, t.off);
        for(let r = n; r <= o; r++){
            let c = e.doc.line(r);
            c.length <= a && f.push(p48.range(c.from + i, c.to + a));
        }
    } else {
        let i = Math.min(l.col, t.col), a = Math.max(l.col, t.col);
        for(let r = n; r <= o; r++){
            let c = e.doc.line(r), m = O16(c.text, i, e.tabSize, !0);
            if (m > -1) {
                let g = O16(c.text, a, e.tabSize);
                f.push(p48.range(c.from + m, c.from + g));
            }
        }
    }
    return f;
}
function C18(e, l) {
    let t = e.coordsAtPos(e.viewport.from);
    return t ? Math.round(Math.abs((t.left - l) / e.defaultCharacterWidth)) : -1;
}
function d13(e, l) {
    let t = e.posAtCoords({
        x: l.clientX,
        y: l.clientY
    }, !1), n = e.state.doc.lineAt(t), o = t - n.from, f = o > s4 ? -1 : o == n.length ? C18(e, l.clientX) : J(n.text, e.state.tabSize, t - n.from);
    return {
        line: n.number,
        col: f,
        off: o
    };
}
function p36(e, l) {
    let t = d13(e, l), n = e.state.selection;
    return t ? {
        update (o) {
            if (o.docChanged) {
                let f = o.changes.mapPos(o.startState.doc.line(t.line).from), i = o.state.doc.lineAt(f);
                t = {
                    line: i.number,
                    col: t.col,
                    off: Math.min(t.off, i.length)
                }, n = n.map(o.changes);
            }
        },
        get (o, f, i) {
            let a = d13(e, o);
            if (!a) return n;
            let r = M20(e.state, t, a);
            return r.length ? i ? p48.create(r.concat(n.ranges)) : p48.create(r) : n;
        }
    } : null;
}
function L16(e) {
    let l = (e == null ? void 0 : e.eventFilter) || ((t)=>t.altKey && t.button == 0
    );
    return D3.mouseSelectionStyle.of((t, n)=>l(n) ? p36(t, n) : null
    );
}
var st2 = 0, f8 = class {
    constructor(t, a, l){
        this.set = t, this.base = a, this.modified = l, this.id = st2++;
    }
    static define(t) {
        if (t == null ? void 0 : t.base) throw new Error("Can not derive from a modified tag");
        let a = new f8([], null, []);
        if (a.set.push(a), t) for (let l of t.set)a.set.push(l);
        return a;
    }
    static defineModifier() {
        let t = new R9;
        return (a)=>a.modified.indexOf(t) > -1 ? a : R9.get(a.base || a, a.modified.concat(t).sort((l, n)=>l.id - n.id
            ))
        ;
    }
}, ot4 = 0, R9 = class {
    constructor(){
        this.instances = [], this.id = ot4++;
    }
    static get(t, a) {
        if (!a.length) return t;
        let l = a[0].instances.find((o)=>o.base == t && ct2(a, o.modified)
        );
        if (l) return l;
        let n = [], s = new f8(n, t, a);
        for (let o of a)o.instances.push(s);
        let c = L17(a);
        for (let o1 of t.set)for (let h of c)n.push(R9.get(o1, h));
        return s;
    }
};
function ct2(r, t) {
    return r.length == t.length && r.every((a, l)=>a == t[l]
    );
}
function L17(r) {
    let t = [
        r
    ];
    for(let a = 0; a < r.length; a++)for (let l of L17(r.slice(0, a).concat(r.slice(a + 1))))t.push(l);
    return t;
}
function yt2(r) {
    let t = Object.create(null);
    for(let a in r){
        let l = r[a];
        Array.isArray(l) || (l = [
            l
        ]);
        for (let n of a.split(" "))if (n) {
            let s = [], c = 2, o = n;
            for(let m = 0;;){
                if (o == "..." && m > 0 && m + 3 == n.length) {
                    c = 1;
                    break;
                }
                let b = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(o);
                if (!b) throw new RangeError("Invalid path: " + n);
                if (s.push(b[0] == "*" ? null : b[0][0] == '"' ? JSON.parse(b[0]) : b[0]), m += b[0].length, m == n.length) break;
                let y = n[m++];
                if (m == n.length && y == "!") {
                    c = 0;
                    break;
                }
                if (y != "/") throw new RangeError("Invalid path: " + n);
                o = n.slice(m);
            }
            let h = s.length - 1, N = s[h];
            if (!N) throw new RangeError("Invalid path: " + n);
            let p = new X8(l, c, h > 0 ? s.slice(0, h) : null);
            t[N] = p.sort(t[N]);
        }
    }
    return Q11.add(t);
}
var Q11 = new y10, H15 = O1.define({
    combine (r) {
        return r.length ? S21.combinedMatch(r) : null;
    }
}), U8 = O1.define({
    combine (r) {
        return r.length ? r[0].match : null;
    }
});
function K15(r) {
    return r.facet(H15) || r.facet(U8);
}
var X8 = class {
    constructor(t, a, l, n){
        this.tags = t, this.mode = a, this.context = l, this.next = n;
    }
    sort(t) {
        return !t || t.depth < this.depth ? (this.next = t, this) : (t.next = this.sort(t.next), t);
    }
    get depth() {
        return this.context ? this.context.length : 0;
    }
}, S21 = class {
    constructor(t, a){
        this.map = Object.create(null);
        let l;
        function n(c) {
            let o = x1.newName();
            return (l || (l = Object.create(null)))["." + o] = c, o;
        }
        this.all = typeof a.all == "string" ? a.all : a.all ? n(a.all) : null;
        for (let c of t){
            let o = (c.class || n(Object.assign({
            }, c, {
                tag: null
            }))) + (this.all ? " " + this.all : ""), h = c.tag;
            if (!Array.isArray(h)) this.map[h.id] = o;
            else for (let N of h)this.map[N.id] = o;
        }
        this.module = l ? new x1(l) : null, this.scope = a.scope || null, this.match = this.match.bind(this);
        let s = [
            ht3
        ];
        this.module && s.push(D3.styleModule.of(this.module)), this.extension = s.concat(H15.of(this)), this.fallback = s.concat(U8.of(this));
    }
    match(t, a) {
        if (this.scope && a != this.scope) return null;
        for (let l of t.set){
            let n = this.map[l.id];
            if (n !== void 0) return l != t && (this.map[t.id] = n), n;
        }
        return this.map[t.id] = this.all;
    }
    static combinedMatch(t) {
        if (t.length == 1) return t[0].match;
        let a = t.some((l)=>l.scope
        ) ? void 0 : Object.create(null);
        return (l, n)=>{
            let s = a && a[l.id];
            if (s !== void 0) return s;
            let c = null;
            for (let o of t){
                let h = o.match(l, n);
                h && (c = c ? c + " " + h : h);
            }
            return a && (a[l.id] = c), c;
        };
    }
    static define(t, a) {
        return new S21(t, a || {
        });
    }
    static get(t, a, l) {
        let n = K15(t);
        return n && n(a, l || B4.none);
    }
};
var Y7 = class {
    constructor(t){
        this.markCache = Object.create(null), this.tree = v9(t.state), this.decorations = this.buildDeco(t, K15(t.state));
    }
    update(t) {
        let a = v9(t.state), l = K15(t.state), n = l != t.startState.facet(H15);
        a.length < t.view.viewport.to && !n && a.type == this.tree.type ? this.decorations = this.decorations.map(t.changes) : (a != this.tree || t.viewportChanged || n) && (this.tree = a, this.decorations = this.buildDeco(t.view, l));
    }
    buildDeco(t, a) {
        if (!a || !this.tree.length) return w6.none;
        let l = new x2;
        for (let { from: n , to: s  } of t.visibleRanges)_9(this.tree, n, s, a, (c, o, h)=>{
            l.add(c, o, this.markCache[h] || (this.markCache[h] = w6.mark({
                class: h
            })));
        });
        return l.finish();
    }
}, ht3 = Ie.high(z3.fromClass(Y7, {
    decorations: (r)=>r.decorations
})), Z7 = [
    ""
], $12 = class {
    constructor(t, a, l){
        this.at = t, this.style = a, this.span = l, this.class = "";
    }
    startSpan(t, a) {
        a != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = a);
    }
    flush(t) {
        t > this.at && this.class && this.span(this.at, t, this.class);
    }
    highlightRange(t, a, l, n, s, c) {
        let { type: o , from: h , to: N  } = t;
        if (h >= l || N <= a) return;
        Z7[s] = o.name, o.isTop && (c = o);
        let p = n, m = o.prop(Q11), b = !1;
        for(; m;){
            if (!m.context || mt(m.context, Z7, s)) {
                for (let I of m.tags){
                    let k = this.style(I, c);
                    k && (p && (p += " "), p += k, m.mode == 1 ? n += (n ? " " : "") + k : m.mode == 0 && (b = !0));
                }
                break;
            }
            m = m.next;
        }
        if (this.startSpan(t.from, p), b) return;
        let y45 = t.tree && t.tree.prop(y10.mounted);
        if (y45 && y45.overlay) {
            let I = t.node.enter(y45.overlay[0].from + h, 1), k = t.firstChild();
            for(let A = 0, M = h;; A++){
                let O = A < y45.overlay.length ? y45.overlay[A] : null, E = O ? O.from + h : N, V = Math.max(a, M), P = Math.min(l, E);
                if (V < P && k) for(; t.from < P && (this.highlightRange(t, V, P, n, s + 1, c), this.startSpan(Math.min(l, t.to), p), !(t.to >= E || !t.nextSibling())););
                if (!O || E > l) break;
                M = O.to + h, M > a && (this.highlightRange(I.cursor, Math.max(a, O.from + h), Math.min(l, M), n, s, y45.tree.type), this.startSpan(M, p));
            }
            k && t.parent();
        } else if (t.firstChild()) {
            do if (!(t.to <= a)) {
                if (t.from >= l) break;
                this.highlightRange(t, a, l, n, s + 1, c), this.startSpan(Math.min(l, t.to), p);
            }
            while (t.nextSibling())
            t.parent();
        }
    }
};
function _9(r, t, a, l, n) {
    let s = new $12(t, l, n);
    s.highlightRange(r.cursor(), t, a, "", 0, r.type), s.flush(a);
}
function mt(r, t, a) {
    if (r.length > a - 1) return !1;
    for(let l = a - 1, n = r.length - 1; n >= 0; n--, l--){
        let s = r[n];
        if (s && s != t[l]) return !1;
    }
    return !0;
}
var e1 = f8.define, D13 = e1(), w39 = e1(), tt4 = e1(w39), et4 = e1(w39), x17 = e1(), T24 = e1(x17), q14 = e1(x17), g11 = e1(), v66 = e1(g11), d14 = e1(), u7 = e1(), B17 = e1(), C19 = e1(B17), j10 = e1(), i2 = {
    comment: D13,
    lineComment: e1(D13),
    blockComment: e1(D13),
    docComment: e1(D13),
    name: w39,
    variableName: e1(w39),
    typeName: tt4,
    tagName: e1(tt4),
    propertyName: et4,
    attributeName: e1(et4),
    className: e1(w39),
    labelName: e1(w39),
    namespace: e1(w39),
    macroName: e1(w39),
    literal: x17,
    string: T24,
    docString: e1(T24),
    character: e1(T24),
    attributeValue: e1(T24),
    number: q14,
    integer: e1(q14),
    float: e1(q14),
    bool: e1(x17),
    regexp: e1(x17),
    escape: e1(x17),
    color: e1(x17),
    url: e1(x17),
    keyword: d14,
    self: e1(d14),
    null: e1(d14),
    atom: e1(d14),
    unit: e1(d14),
    modifier: e1(d14),
    operatorKeyword: e1(d14),
    controlKeyword: e1(d14),
    definitionKeyword: e1(d14),
    moduleKeyword: e1(d14),
    operator: u7,
    derefOperator: e1(u7),
    arithmeticOperator: e1(u7),
    logicOperator: e1(u7),
    bitwiseOperator: e1(u7),
    compareOperator: e1(u7),
    updateOperator: e1(u7),
    definitionOperator: e1(u7),
    typeOperator: e1(u7),
    controlOperator: e1(u7),
    punctuation: B17,
    separator: e1(B17),
    bracket: C19,
    angleBracket: e1(C19),
    squareBracket: e1(C19),
    paren: e1(C19),
    brace: e1(C19),
    content: g11,
    heading: v66,
    heading1: e1(v66),
    heading2: e1(v66),
    heading3: e1(v66),
    heading4: e1(v66),
    heading5: e1(v66),
    heading6: e1(v66),
    contentSeparator: e1(g11),
    list: e1(g11),
    quote: e1(g11),
    emphasis: e1(g11),
    strong: e1(g11),
    link: e1(g11),
    monospace: e1(g11),
    strikethrough: e1(g11),
    inserted: e1(),
    deleted: e1(),
    changed: e1(),
    invalid: e1(),
    meta: j10,
    documentMeta: e1(j10),
    annotation: e1(j10),
    processingInstruction: e1(j10),
    definition: f8.defineModifier(),
    constant: f8.defineModifier(),
    function: f8.defineModifier(),
    standard: f8.defineModifier(),
    local: f8.defineModifier(),
    special: f8.defineModifier()
}, wt2 = S21.define([
    {
        tag: i2.link,
        textDecoration: "underline"
    },
    {
        tag: i2.heading,
        textDecoration: "underline",
        fontWeight: "bold"
    },
    {
        tag: i2.emphasis,
        fontStyle: "italic"
    },
    {
        tag: i2.strong,
        fontWeight: "bold"
    },
    {
        tag: i2.strikethrough,
        textDecoration: "line-through"
    },
    {
        tag: i2.keyword,
        color: "#708"
    },
    {
        tag: [
            i2.atom,
            i2.bool,
            i2.url,
            i2.contentSeparator,
            i2.labelName
        ],
        color: "#219"
    },
    {
        tag: [
            i2.literal,
            i2.inserted
        ],
        color: "#164"
    },
    {
        tag: [
            i2.string,
            i2.deleted
        ],
        color: "#a11"
    },
    {
        tag: [
            i2.regexp,
            i2.escape,
            i2.special(i2.string)
        ],
        color: "#e40"
    },
    {
        tag: i2.definition(i2.variableName),
        color: "#00f"
    },
    {
        tag: i2.local(i2.variableName),
        color: "#30a"
    },
    {
        tag: [
            i2.typeName,
            i2.namespace
        ],
        color: "#085"
    },
    {
        tag: i2.className,
        color: "#167"
    },
    {
        tag: [
            i2.special(i2.variableName),
            i2.macroName
        ],
        color: "#256"
    },
    {
        tag: i2.definition(i2.propertyName),
        color: "#00c"
    },
    {
        tag: i2.comment,
        color: "#940"
    },
    {
        tag: i2.meta,
        color: "#7a757a"
    },
    {
        tag: i2.invalid,
        color: "#f00"
    }
]), xt3 = S21.define([
    {
        tag: i2.link,
        class: "cmt-link"
    },
    {
        tag: i2.heading,
        class: "cmt-heading"
    },
    {
        tag: i2.emphasis,
        class: "cmt-emphasis"
    },
    {
        tag: i2.strong,
        class: "cmt-strong"
    },
    {
        tag: i2.keyword,
        class: "cmt-keyword"
    },
    {
        tag: i2.atom,
        class: "cmt-atom"
    },
    {
        tag: i2.bool,
        class: "cmt-bool"
    },
    {
        tag: i2.url,
        class: "cmt-url"
    },
    {
        tag: i2.labelName,
        class: "cmt-labelName"
    },
    {
        tag: i2.inserted,
        class: "cmt-inserted"
    },
    {
        tag: i2.deleted,
        class: "cmt-deleted"
    },
    {
        tag: i2.literal,
        class: "cmt-literal"
    },
    {
        tag: i2.string,
        class: "cmt-string"
    },
    {
        tag: i2.number,
        class: "cmt-number"
    },
    {
        tag: [
            i2.regexp,
            i2.escape,
            i2.special(i2.string)
        ],
        class: "cmt-string2"
    },
    {
        tag: i2.variableName,
        class: "cmt-variableName"
    },
    {
        tag: i2.local(i2.variableName),
        class: "cmt-variableName cmt-local"
    },
    {
        tag: i2.definition(i2.variableName),
        class: "cmt-variableName cmt-definition"
    },
    {
        tag: i2.special(i2.variableName),
        class: "cmt-variableName2"
    },
    {
        tag: i2.definition(i2.propertyName),
        class: "cmt-propertyName cmt-definition"
    },
    {
        tag: i2.typeName,
        class: "cmt-typeName"
    },
    {
        tag: i2.namespace,
        class: "cmt-namespace"
    },
    {
        tag: i2.className,
        class: "cmt-className"
    },
    {
        tag: i2.macroName,
        class: "cmt-macroName"
    },
    {
        tag: i2.propertyName,
        class: "cmt-propertyName"
    },
    {
        tag: i2.operator,
        class: "cmt-operator"
    },
    {
        tag: i2.comment,
        class: "cmt-comment"
    },
    {
        tag: i2.meta,
        class: "cmt-meta"
    },
    {
        tag: i2.invalid,
        class: "cmt-invalid"
    },
    {
        tag: i2.punctuation,
        class: "cmt-punctuation"
    }
]);
var A15 = class {
    constructor(e, i, o){
        this.from = e, this.to = i, this.diagnostic = o;
    }
}, u8 = class {
    constructor(e, i, o){
        this.diagnostics = e, this.panel = i, this.selected = o;
    }
    static init(e, i, o) {
        let s = w6.set(e.map((n)=>n.from == n.to || n.from == n.to - 1 && o.doc.lineAt(n.from).to == n.from ? w6.widget({
                widget: new _10(n),
                diagnostic: n
            }).range(n.from) : w6.mark({
                attributes: {
                    class: "cm-lintRange cm-lintRange-" + n.severity
                },
                diagnostic: n
            }).range(n.from, n.to)
        ), !0);
        return new u8(s, i, p37(s));
    }
};
function p37(t, e = null, i = 0) {
    let o = null;
    return t.between(i, 1000000000, (s, n, { spec: r  })=>{
        if (!(e && r.diagnostic != e)) return o = new A15(s, n, r.diagnostic), !1;
    }), o;
}
function I12(t, e) {
    return t.field(c11, !1) ? e : e.concat(v.appendConfig.of([
        c11,
        D3.decorations.compute([
            c11
        ], (i)=>{
            let { selected: o , panel: s  } = i.field(c11);
            return !o || !s || o.from == o.to ? w6.none : w6.set([
                Q13.range(o.from, o.to)
            ]);
        }),
        G6(ee6),
        oe6
    ]));
}
function J13(t, e) {
    return {
        effects: I12(t, [
            T25.of(e)
        ])
    };
}
var T25 = v.define(), S22 = v.define(), M21 = v.define(), c11 = B1.define({
    create () {
        return new u8(w6.none, null, null);
    },
    update (t, e) {
        if (e.docChanged) {
            let i = t.diagnostics.map(e.changes), o = null;
            if (t.selected) {
                let s = e.changes.mapPos(t.selected.from, 1);
                o = p37(i, t.selected.diagnostic, s) || p37(i, null, s);
            }
            t = new u8(i, t.panel, o);
        }
        for (let i of e.effects)i.is(T25) ? t = u8.init(i.value, t.panel, e.state) : i.is(S22) ? t = new u8(t.diagnostics, i.value ? k28.open : null, t.selected) : i.is(M21) && (t = new u8(t.diagnostics, t.panel, i.value));
        return t;
    },
    provide: (t)=>[
            b8.from(t, (e)=>e.panel
            ),
            D3.decorations.from(t, (e)=>e.diagnostics
            )
        ]
});
var Q13 = w6.mark({
    class: "cm-lintRange cm-lintRange-active"
});
function ee6(t, e, i) {
    let { diagnostics: o  } = t.state.field(c11), s = [], n = 200000000, r = 0;
    return o.between(e - (i < 0 ? 1 : 0), e + (i > 0 ? 1 : 0), (l, a, { spec: d  })=>{
        e >= l && e <= a && (l == a || (e > l || i > 0) && (e < a || i < 0)) && (s.push(d.diagnostic), n = Math.min(l, n), r = Math.max(a, r));
    }), s.length ? {
        pos: n,
        end: r,
        above: t.state.doc.lineAt(n).to < r,
        create () {
            return {
                dom: E22(t, s)
            };
        }
    } : null;
}
function E22(t, e) {
    return s3("ul", {
        class: "cm-tooltip-lint"
    }, e.map((i)=>G7(t, i, !1)
    ));
}
var te6 = (t)=>{
    let e = t.state.field(c11, !1);
    (!e || !e.panel) && t.dispatch({
        effects: I12(t.state, [
            S22.of(!0)
        ])
    });
    let i = O11(t, k28.open);
    return i && i.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, B18 = (t)=>{
    let e = t.state.field(c11, !1);
    return !e || !e.panel ? !1 : (t.dispatch({
        effects: S22.of(!1)
    }), !0);
}, ie8 = (t)=>{
    let e = t.state.field(c11, !1);
    if (!e) return !1;
    let i = t.state.selection.main, o = e.diagnostics.iter(i.to + 1);
    return !o.value && (o = e.diagnostics.iter(0), !o.value || o.from == i.from && o.to == i.to) ? !1 : (t.dispatch({
        selection: {
            anchor: o.from,
            head: o.to
        },
        scrollIntoView: !0
    }), !0);
}, be11 = [
    {
        key: "Mod-Shift-m",
        run: te6
    },
    {
        key: "F8",
        run: ie8
    }
], O14 = z3.fromClass(class {
    constructor(t){
        this.view = t, this.timeout = -1, this.set = !0;
        let { delay: e  } = t.state.facet(w43);
        this.lintTime = Date.now() + e, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, e);
    }
    run() {
        let t = Date.now();
        if (t < this.lintTime - 10) setTimeout(this.run, this.lintTime - t);
        else {
            this.set = !1;
            let { state: e  } = this.view, { sources: i  } = e.facet(w43);
            Promise.all(i.map((o)=>Promise.resolve(o(this.view))
            )).then((o)=>{
                var s, n;
                let r = o.reduce((l, a)=>l.concat(a)
                );
                this.view.state.doc == e.doc && (r.length || ((n = (s = this.view.state.field(c11, !1)) === null || s === void 0 ? void 0 : s.diagnostics) === null || n === void 0 ? void 0 : n.size)) && this.view.dispatch(J13(this.view.state, r));
            }, (o)=>{
                lt(this.view.state, o);
            });
        }
    }
    update(t) {
        let e = t.state.facet(w43);
        (t.docChanged || e != t.startState.facet(w43)) && (this.lintTime = Date.now() + e.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, e.delay)));
    }
    force() {
        this.set && (this.lintTime = Date.now(), this.run());
    }
    destroy() {
        clearTimeout(this.timeout);
    }
}), w43 = O1.define({
    combine (t) {
        return {
            sources: t.map((e)=>e.source
            ),
            delay: t.length ? Math.max(...t.map((e)=>e.delay
            )) : 750
        };
    },
    enables: O14
});
function j11(t) {
    let e = [];
    if (t) e: for (let { name: i  } of t){
        for(let o = 0; o < i.length; o++){
            let s = i[o];
            if (/[a-zA-Z]/.test(s) && !e.some((n)=>n.toLowerCase() == s.toLowerCase()
            )) {
                e.push(s);
                continue e;
            }
        }
        e.push("");
    }
    return e;
}
function G7(t, e, i) {
    var o;
    let s = i ? j11(e.actions) : [];
    return s3("li", {
        class: "cm-diagnostic cm-diagnostic-" + e.severity
    }, s3("span", {
        class: "cm-diagnosticText"
    }, e.message), (o = e.actions) === null || o === void 0 ? void 0 : o.map((n, r)=>{
        let l = (g)=>{
            g.preventDefault();
            let x = p37(t.state.field(c11).diagnostics, e);
            x && n.apply(t, x.from, x.to);
        }, { name: a  } = n, d = s[r] ? a.indexOf(s[r]) : -1, f = d < 0 ? a : [
            a.slice(0, d),
            s3("u", a.slice(d, d + 1)),
            a.slice(d + 1)
        ];
        return s3("button", {
            type: "button",
            class: "cm-diagnosticAction",
            onclick: l,
            onmousedown: l,
            "aria-label": ` Action: ${a}${d < 0 ? "" : ` (access key "${s[r]})"`}.`
        }, f);
    }), e.source && s3("div", {
        class: "cm-diagnosticSource"
    }, e.source));
}
var _10 = class extends Q1 {
    constructor(e){
        super();
        this.diagnostic = e;
    }
    eq(e) {
        return e.diagnostic == this.diagnostic;
    }
    toDOM() {
        return s3("span", {
            class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity
        });
    }
}, L18 = class {
    constructor(e, i){
        this.diagnostic = i, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = G7(e, i, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
    }
}, k28 = class {
    constructor(e){
        this.view = e, this.items = [];
        let i = (s)=>{
            if (s.keyCode == 27) B18(this.view), this.view.focus();
            else if (s.keyCode == 38 || s.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
            else if (s.keyCode == 40 || s.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
            else if (s.keyCode == 36) this.moveSelection(0);
            else if (s.keyCode == 35) this.moveSelection(this.items.length - 1);
            else if (s.keyCode == 13) this.view.focus();
            else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
                let { diagnostic: n  } = this.items[this.selectedIndex], r = j11(n.actions);
                for(let l = 0; l < r.length; l++)if (r[l].toUpperCase().charCodeAt(0) == s.keyCode) {
                    let a = p37(this.view.state.field(c11).diagnostics, n);
                    a && n.actions[l].apply(e, a.from, a.to);
                }
            } else return;
            s.preventDefault();
        }, o = (s)=>{
            for(let n = 0; n < this.items.length; n++)this.items[n].dom.contains(s.target) && this.moveSelection(n);
        };
        this.list = s3("ul", {
            tabIndex: 0,
            role: "listbox",
            "aria-label": this.view.state.phrase("Diagnostics"),
            onkeydown: i,
            onclick: o
        }), this.dom = s3("div", {
            class: "cm-panel-lint"
        }, this.list, s3("button", {
            type: "button",
            name: "close",
            "aria-label": this.view.state.phrase("close"),
            onclick: ()=>B18(this.view)
        }, "\xD7")), this.update();
    }
    get selectedIndex() {
        let e = this.view.state.field(c11).selected;
        if (!e) return -1;
        for(let i = 0; i < this.items.length; i++)if (this.items[i].diagnostic == e.diagnostic) return i;
        return -1;
    }
    update() {
        let { diagnostics: e , selected: i  } = this.view.state.field(c11), o = 0, s = !1, n = null;
        for(e.between(0, this.view.state.doc.length, (r, l, { spec: a  })=>{
            let d = -1, f;
            for(let g = o; g < this.items.length; g++)if (this.items[g].diagnostic == a.diagnostic) {
                d = g;
                break;
            }
            d < 0 ? (f = new L18(this.view, a.diagnostic), this.items.splice(o, 0, f), s = !0) : (f = this.items[d], d > o && (this.items.splice(o, d - o), s = !0)), i && f.diagnostic == i.diagnostic ? f.dom.hasAttribute("aria-selected") || (f.dom.setAttribute("aria-selected", "true"), n = f) : f.dom.hasAttribute("aria-selected") && f.dom.removeAttribute("aria-selected"), o++;
        }); o < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);)s = !0, this.items.pop();
        this.items.length == 0 && (this.items.push(new L18(this.view, {
            from: -1,
            to: -1,
            severity: "info",
            message: this.view.state.phrase("No diagnostics")
        })), s = !0), n ? (this.list.setAttribute("aria-activedescendant", n.id), this.view.requestMeasure({
            key: this,
            read: ()=>({
                    sel: n.dom.getBoundingClientRect(),
                    panel: this.list.getBoundingClientRect()
                })
            ,
            write: ({ sel: r , panel: l  })=>{
                r.top < l.top ? this.list.scrollTop -= l.top - r.top : r.bottom > l.bottom && (this.list.scrollTop += r.bottom - l.bottom);
            }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s && this.sync();
    }
    sync() {
        let e = this.list.firstChild;
        function i() {
            let o = e;
            e = o.nextSibling, o.remove();
        }
        for (let o of this.items)if (o.dom.parentNode == this.list) {
            for(; e != o.dom;)i();
            e = o.dom.nextSibling;
        } else this.list.insertBefore(o.dom, e);
        for(; e;)i();
    }
    moveSelection(e) {
        if (this.selectedIndex < 0) return;
        let i = this.view.state.field(c11), o = p37(i.diagnostics, this.items[e].diagnostic);
        !o || this.view.dispatch({
            selection: {
                anchor: o.from,
                head: o.to
            },
            scrollIntoView: !0,
            effects: M21.of(o)
        });
    }
    static open(e) {
        return new k28(e);
    }
};
function y45(t, e = 'viewBox="0 0 40 40"') {
    return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`;
}
function P12(t) {
    return y45(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
var oe6 = D3.baseTheme({
    ".cm-diagnostic": {
        padding: "3px 6px 3px 8px",
        marginLeft: "-1px",
        display: "block",
        whiteSpace: "pre-wrap"
    },
    ".cm-diagnostic-error": {
        borderLeft: "5px solid #d11"
    },
    ".cm-diagnostic-warning": {
        borderLeft: "5px solid orange"
    },
    ".cm-diagnostic-info": {
        borderLeft: "5px solid #999"
    },
    ".cm-diagnosticAction": {
        font: "inherit",
        border: "none",
        padding: "2px 4px",
        backgroundColor: "#444",
        color: "white",
        borderRadius: "3px",
        marginLeft: "8px"
    },
    ".cm-diagnosticSource": {
        fontSize: "70%",
        opacity: 0.7
    },
    ".cm-lintRange": {
        backgroundPosition: "left bottom",
        backgroundRepeat: "repeat-x",
        paddingBottom: "0.7px"
    },
    ".cm-lintRange-error": {
        backgroundImage: P12("#d11")
    },
    ".cm-lintRange-warning": {
        backgroundImage: P12("orange")
    },
    ".cm-lintRange-info": {
        backgroundImage: P12("#999")
    },
    ".cm-lintRange-active": {
        backgroundColor: "#ffdd9980"
    },
    ".cm-tooltip-lint": {
        padding: 0,
        margin: 0
    },
    ".cm-lintPoint": {
        position: "relative",
        "&:after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "-2px",
            borderLeft: "3px solid transparent",
            borderRight: "3px solid transparent",
            borderBottom: "4px solid #d11"
        }
    },
    ".cm-lintPoint-warning": {
        "&:after": {
            borderBottomColor: "orange"
        }
    },
    ".cm-lintPoint-info": {
        "&:after": {
            borderBottomColor: "#999"
        }
    },
    ".cm-panel.cm-panel-lint": {
        position: "relative",
        "& ul": {
            maxHeight: "100px",
            overflowY: "auto",
            "& [aria-selected]": {
                backgroundColor: "#ddd",
                "& u": {
                    textDecoration: "underline"
                }
            },
            "&:focus [aria-selected]": {
                background_fallback: "#bdf",
                backgroundColor: "Highlight",
                color_fallback: "white",
                color: "HighlightText"
            },
            "& u": {
                textDecoration: "none"
            },
            padding: 0,
            margin: 0
        },
        "& [name=close]": {
            position: "absolute",
            top: "0",
            right: "2px",
            background: "inherit",
            border: "none",
            font: "inherit",
            padding: 0,
            margin: 0
        }
    }
}), $14 = class extends h1 {
    constructor(e){
        super();
        this.diagnostics = e, this.severity = e.reduce((i, o)=>{
            let s = o.severity;
            return s == "error" || s == "warning" && i == "info" ? s : i;
        }, "info");
    }
    toDOM(e) {
        let i = document.createElement("div");
        return i.className = "cm-lint-marker cm-lint-marker-" + this.severity, i.onmouseover = ()=>ne8(e, i, this.diagnostics)
        , i;
    }
};
function se6(t, e) {
    let i = (o)=>{
        let s = e.getBoundingClientRect();
        if (!(o.clientX > s.left - 10 && o.clientX < s.right + 10 && o.clientY > s.top - 10 && o.clientY < s.bottom + 10)) {
            for(let n = o.target; n; n = n.parentNode)if (n.nodeType == 1 && n.classList.contains("cm-tooltip-lint")) return;
            window.removeEventListener("mousemove", i), t.state.field(z18) && t.dispatch({
                effects: R10.of(null)
            });
        }
    };
    window.addEventListener("mousemove", i);
}
function ne8(t, e, i) {
    function o() {
        let n = t.visualLineAtHeight(e.getBoundingClientRect().top + 5), r = t.coordsAtPos(n.from), l = e.getBoundingClientRect();
        r && t.dispatch({
            effects: R10.of({
                pos: n.from,
                above: !1,
                create () {
                    return {
                        dom: E22(t, i),
                        offset: {
                            x: l.left - r.left,
                            y: 0
                        }
                    };
                }
            })
        }), e.onmouseout = e.onmousemove = null, se6(t, e);
    }
    let s = setTimeout(o, 600);
    e.onmouseout = ()=>{
        clearTimeout(s), e.onmouseout = e.onmousemove = null;
    }, e.onmousemove = ()=>{
        clearTimeout(s), s = setTimeout(o, 600);
    };
}
function re9(t, e) {
    let i = Object.create(null);
    for (let s of e){
        let n = t.lineAt(s.from);
        (i[n.from] || (i[n.from] = [])).push(s);
    }
    let o = [];
    for(let s1 in i)o.push(new $14(i[s1]).range(+s1));
    return f10.of(o, !0);
}
var le4 = K13({
    class: "cm-gutter-lint",
    markers: (t)=>t.state.field(H18)
}), H18 = B1.define({
    create () {
        return f10.empty;
    },
    update (t, e) {
        t = t.map(e.changes);
        for (let i of e.effects)i.is(T25) && (t = re9(e.state.doc, i.value));
        return t;
    }
}), R10 = v.define(), z18 = B1.define({
    create () {
        return null;
    },
    update (t, e) {
        return t && e.docChanged && (t = Object.assign(Object.assign({
        }, t), {
            pos: e.changes.mapPos(t.pos)
        })), e.effects.reduce((i, o)=>o.is(R10) ? o.value : i
        , t);
    },
    provide: (t)=>k6.from(t)
}), ae7 = D3.baseTheme({
    ".cm-gutter-lint": {
        width: "1.4em",
        "& .cm-gutterElement": {
            padding: "0 .2em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }
    },
    ".cm-lint-marker": {
        width: "1em",
        height: "1em"
    },
    ".cm-lint-marker-info": {
        content: y45('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')
    },
    ".cm-lint-marker-warning": {
        content: y45('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')
    },
    ".cm-lint-marker-error:before": {
        content: y45('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')
    }
});
var D14 = [
    Q6(),
    U5(),
    cr(),
    _1(),
    Y4(),
    hr(),
    ar(),
    w1.allowMultipleSelections.of(!0),
    vt1(),
    wt2.fallback,
    j8(),
    G5(),
    It1(),
    L16(),
    ur(),
    We1(),
    Fn.of([
        ...J11,
        ...Tt1,
        ...we5,
        ...b5,
        ...X5,
        ...M19,
        ...ht1,
        ...be11
    ])
];
var process = {
};
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimeout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimeout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimeout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimeout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}
function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len){
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for(var i = 1; i < arguments.length; i++){
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = '';
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.emitWarning = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};
process.env.NODE_ENV = "production";
var m12 = class {
    constructor(t, e, s, i, h, r, n, a, l, u = 0, f){
        this.p = t, this.stack = e, this.state = s, this.reducePos = i, this.pos = h, this.score = r, this.buffer = n, this.bufferBase = a, this.curContext = l, this.lookAhead = u, this.parent = f;
    }
    toString() {
        return `[${this.stack.filter((t, e)=>e % 3 == 0
        ).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
    }
    static start(t, e, s = 0) {
        let i = t.parser.context;
        return new m12(t, [], e, s, s, 0, [], 0, i ? new w44(i, i.start) : null, 0, null);
    }
    get context() {
        return this.curContext ? this.curContext.context : null;
    }
    pushState(t, e) {
        this.stack.push(this.state, e, this.bufferBase + this.buffer.length), this.state = t;
    }
    reduce(t) {
        let e = t >> 19, s = t & 65535, { parser: i  } = this.p, h = i.dynamicPrecedence(s);
        if (h && (this.score += h), e == 0) {
            s < i.minRepeatTerm && this.storeNode(s, this.reducePos, this.reducePos, 4, !0), this.pushState(i.getGoto(this.state, s, !0), this.reducePos), this.reduceContext(s, this.reducePos);
            return;
        }
        let r = this.stack.length - (e - 1) * 3 - (t & 262144 ? 6 : 0), n = this.stack[r - 2], a = this.stack[r - 1], l = this.bufferBase + this.buffer.length - a;
        if (s < i.minRepeatTerm || t & 131072) {
            let u = i.stateFlag(this.state, 1) ? this.pos : this.reducePos;
            this.storeNode(s, n, u, l + 4, !0);
        }
        if (t & 262144) this.state = this.stack[r];
        else {
            let u = this.stack[r - 3];
            this.state = i.getGoto(u, s, !0);
        }
        for(; this.stack.length > r;)this.stack.pop();
        this.reduceContext(s, n);
    }
    storeNode(t, e, s, i = 4, h = !1) {
        if (t == 0) {
            let r = this, n = this.buffer.length;
            if (n == 0 && r.parent && (n = r.bufferBase - r.parent.bufferBase, r = r.parent), n > 0 && r.buffer[n - 4] == 0 && r.buffer[n - 1] > -1) {
                if (e == s) return;
                if (r.buffer[n - 2] >= e) {
                    r.buffer[n - 2] = s;
                    return;
                }
            }
        }
        if (!h || this.pos == s) this.buffer.push(t, e, s, i);
        else {
            let r = this.buffer.length;
            if (r > 0 && this.buffer[r - 4] != 0) for(; r > 0 && this.buffer[r - 2] > s;)this.buffer[r] = this.buffer[r - 4], this.buffer[r + 1] = this.buffer[r - 3], this.buffer[r + 2] = this.buffer[r - 2], this.buffer[r + 3] = this.buffer[r - 1], r -= 4, i > 4 && (i -= 4);
            this.buffer[r] = t, this.buffer[r + 1] = e, this.buffer[r + 2] = s, this.buffer[r + 3] = i;
        }
    }
    shift(t, e, s) {
        let i = this.pos;
        if (t & 131072) this.pushState(t & 65535, this.pos);
        else if ((t & 262144) == 0) {
            let h = t, { parser: r  } = this.p;
            (s > this.pos || e <= r.maxNode) && (this.pos = s, r.stateFlag(h, 1) || (this.reducePos = s)), this.pushState(h, i), this.shiftContext(e, i), e <= r.maxNode && this.buffer.push(e, i, s, 4);
        } else this.pos = s, this.shiftContext(e, i), e <= this.p.parser.maxNode && this.buffer.push(e, i, s, 4);
    }
    apply(t, e, s) {
        t & 65536 ? this.reduce(t) : this.shift(t, e, s);
    }
    useNode(t, e) {
        let s = this.p.reused.length - 1;
        (s < 0 || this.p.reused[s] != t) && (this.p.reused.push(t), s++);
        let i = this.pos;
        this.reducePos = this.pos = i + t.length, this.pushState(e, i), this.buffer.push(s, i, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, t, this, this.p.stream.reset(this.pos - t.length)));
    }
    split() {
        let t = this, e = t.buffer.length;
        for(; e > 0 && t.buffer[e - 2] > t.reducePos;)e -= 4;
        let s = t.buffer.slice(e), i = t.bufferBase + e;
        for(; t && i == t.bufferBase;)t = t.parent;
        return new m12(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, s, i, this.curContext, this.lookAhead, t);
    }
    recoverByDelete(t, e) {
        let s = t <= this.p.parser.maxNode;
        s && this.storeNode(t, this.pos, e, 4), this.storeNode(0, this.pos, e, s ? 8 : 4), this.pos = this.reducePos = e, this.score -= 190;
    }
    canShift(t) {
        for(let e = new D15(this);;){
            let s = this.p.parser.stateSlot(e.state, 4) || this.p.parser.hasAction(e.state, t);
            if ((s & 65536) == 0) return !0;
            if (s == 0) return !1;
            e.reduce(s);
        }
    }
    recoverByInsert(t) {
        if (this.stack.length >= 300) return [];
        let e = this.p.parser.nextStates(this.state);
        if (e.length > 4 << 1 || this.stack.length >= 120) {
            let i = [];
            for(let h = 0, r; h < e.length; h += 2)(r = e[h + 1]) != this.state && this.p.parser.hasAction(r, t) && i.push(e[h], r);
            if (this.stack.length < 120) for(let h1 = 0; i.length < 4 << 1 && h1 < e.length; h1 += 2){
                let r = e[h1 + 1];
                i.some((n, a)=>a & 1 && n == r
                ) || i.push(e[h1], r);
            }
            e = i;
        }
        let s = [];
        for(let i = 0; i < e.length && s.length < 4; i += 2){
            let h = e[i + 1];
            if (h == this.state) continue;
            let r = this.split();
            r.storeNode(0, r.pos, r.pos, 4, !0), r.pushState(h, this.pos), r.shiftContext(e[i], this.pos), r.score -= 200, s.push(r);
        }
        return s;
    }
    forceReduce() {
        let t = this.p.parser.stateSlot(this.state, 5);
        if ((t & 65536) == 0) return !1;
        let { parser: e  } = this.p;
        if (!e.validAction(this.state, t)) {
            let s = t >> 19, i = t & 65535, h = this.stack.length - s * 3;
            if (h < 0 || e.getGoto(this.stack[h], i, !1) < 0) return !1;
            this.storeNode(0, this.reducePos, this.reducePos, 4, !0), this.score -= 100;
        }
        return this.reduce(t), !0;
    }
    forceAll() {
        for(; !this.p.parser.stateFlag(this.state, 2);)if (!this.forceReduce()) {
            this.storeNode(0, this.pos, this.pos, 4, !0);
            break;
        }
        return this;
    }
    get deadEnd() {
        if (this.stack.length != 3) return !1;
        let { parser: t  } = this.p;
        return t.data[t.stateSlot(this.state, 1)] == 65535 && !t.stateSlot(this.state, 4);
    }
    restart() {
        this.state = this.stack[0], this.stack.length = 0;
    }
    sameState(t) {
        if (this.state != t.state || this.stack.length != t.stack.length) return !1;
        for(let e = 0; e < this.stack.length; e += 3)if (this.stack[e] != t.stack[e]) return !1;
        return !0;
    }
    get parser() {
        return this.p.parser;
    }
    dialectEnabled(t) {
        return this.p.parser.dialect.flags[t];
    }
    shiftContext(t, e) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, t, this, this.p.stream.reset(e)));
    }
    reduceContext(t, e) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, t, this, this.p.stream.reset(e)));
    }
    emitContext() {
        let t = this.buffer.length - 1;
        (t < 0 || this.buffer[t] != -3) && this.buffer.push(this.curContext.hash, this.reducePos, this.reducePos, -3);
    }
    emitLookAhead() {
        let t = this.buffer.length - 1;
        (t < 0 || this.buffer[t] != -4) && this.buffer.push(this.lookAhead, this.reducePos, this.reducePos, -4);
    }
    updateContext(t) {
        if (t != this.curContext.context) {
            let e = new w44(this.curContext.tracker, t);
            e.hash != this.curContext.hash && this.emitContext(), this.curContext = e;
        }
    }
    setLookAhead(t) {
        t > this.lookAhead && (this.emitLookAhead(), this.lookAhead = t);
    }
    close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
    }
}, w44 = class {
    constructor(t, e){
        this.tracker = t, this.context = e, this.hash = t.strict ? t.hash(e) : 0;
    }
}, N18;
(function(o) {
    o[o.Insert = 200] = "Insert", o[o.Delete = 190] = "Delete", o[o.Reduce = 100] = "Reduce", o[o.MaxNext = 4] = "MaxNext", o[o.MaxInsertStackDepth = 300] = "MaxInsertStackDepth", o[o.DampenInsertStackDepth = 120] = "DampenInsertStackDepth";
})(N18 || (N18 = {
}));
var D15 = class {
    constructor(t){
        this.start = t, this.state = t.state, this.stack = t.stack, this.base = this.stack.length;
    }
    reduce(t) {
        let e = t & 65535, s = t >> 19;
        s == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (s - 1) * 3;
        let i = this.start.p.parser.getGoto(this.stack[this.base - 3], e, !0);
        this.state = i;
    }
}, x18 = class {
    constructor(t, e, s){
        this.stack = t, this.pos = e, this.index = s, this.buffer = t.buffer, this.index == 0 && this.maybeNext();
    }
    static create(t, e = t.bufferBase + t.buffer.length) {
        return new x18(t, e, e - t.bufferBase);
    }
    maybeNext() {
        let t = this.stack.parent;
        t != null && (this.index = this.stack.bufferBase - t.bufferBase, this.stack = t, this.buffer = t.buffer);
    }
    get id() {
        return this.buffer[this.index - 4];
    }
    get start() {
        return this.buffer[this.index - 3];
    }
    get end() {
        return this.buffer[this.index - 2];
    }
    get size() {
        return this.buffer[this.index - 1];
    }
    next() {
        this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
    }
    fork() {
        return new x18(this.stack, this.pos, this.index);
    }
}, b20 = class {
    constructor(){
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
    }
}, I13 = new b20, M24 = class {
    constructor(t, e){
        this.input = t, this.ranges = e, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = I13, this.rangeIndex = 0, this.pos = this.chunkPos = e[0].from, this.range = e[0], this.end = e[e.length - 1].to, this.readNext();
    }
    resolveOffset(t, e) {
        let s = this.range, i = this.rangeIndex, h = this.pos + t;
        for(; h < s.from;){
            if (!i) return null;
            let r = this.ranges[--i];
            h -= s.from - r.to, s = r;
        }
        for(; e < 0 ? h > s.to : h >= s.to;){
            if (i == this.ranges.length - 1) return null;
            let r = this.ranges[++i];
            h += r.from - s.to, s = r;
        }
        return h;
    }
    peek(t) {
        let e = this.chunkOff + t, s, i;
        if (e >= 0 && e < this.chunk.length) s = this.pos + t, i = this.chunk.charCodeAt(e);
        else {
            let h = this.resolveOffset(t, 1);
            if (h == null) return -1;
            if (s = h, s >= this.chunk2Pos && s < this.chunk2Pos + this.chunk2.length) i = this.chunk2.charCodeAt(s - this.chunk2Pos);
            else {
                let r = this.rangeIndex, n = this.range;
                for(; n.to <= s;)n = this.ranges[++r];
                this.chunk2 = this.input.chunk(this.chunk2Pos = s), s + this.chunk2.length > n.to && (this.chunk2 = this.chunk2.slice(0, n.to - s)), i = this.chunk2.charCodeAt(0);
            }
        }
        return s >= this.token.lookAhead && (this.token.lookAhead = s + 1), i;
    }
    acceptToken(t, e = 0) {
        let s = e ? this.resolveOffset(e, -1) : this.pos;
        if (s == null || s < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = t, this.token.end = s;
    }
    getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
            let { chunk: t , chunkPos: e  } = this;
            this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = t, this.chunk2Pos = e, this.chunkOff = this.pos - this.chunkPos;
        } else {
            this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
            let t = this.input.chunk(this.pos), e = this.pos + t.length;
            this.chunk = e > this.range.to ? t.slice(0, this.range.to - this.pos) : t, this.chunkPos = this.pos, this.chunkOff = 0;
        }
    }
    readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
    }
    advance(t = 1) {
        for(this.chunkOff += t; this.pos + t >= this.range.to;){
            if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
            t -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
        }
        return this.pos += t, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
    }
    setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
    }
    reset(t, e) {
        if (e ? (this.token = e, e.start = t, e.lookAhead = t + 1, e.value = e.extended = -1) : this.token = I13, this.pos != t) {
            if (this.pos = t, t == this.end) return this.setDone(), this;
            for(; t < this.range.from;)this.range = this.ranges[--this.rangeIndex];
            for(; t >= this.range.to;)this.range = this.ranges[++this.rangeIndex];
            t >= this.chunkPos && t < this.chunkPos + this.chunk.length ? this.chunkOff = t - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
        }
        return this;
    }
    read(t, e) {
        if (t >= this.chunkPos && e <= this.chunkPos + this.chunk.length) return this.chunk.slice(t - this.chunkPos, e - this.chunkPos);
        if (t >= this.range.from && e <= this.range.to) return this.input.read(t, e);
        let s = "";
        for (let i of this.ranges){
            if (i.from >= e) break;
            i.to > t && (s += this.input.read(Math.max(i.from, t), Math.min(i.to, e)));
        }
        return s;
    }
}, P13 = class {
    constructor(t, e){
        this.data = t, this.id = e;
    }
    token(t, e) {
        K16(this.data, t, e, this.id);
    }
};
P13.prototype.contextual = P13.prototype.fallback = P13.prototype.extend = !1;
var J14 = class {
    constructor(t, e = {
    }){
        this.token = t, this.contextual = !!e.contextual, this.fallback = !!e.fallback, this.extend = !!e.extend;
    }
};
function K16(o, t, e, s) {
    let i = 0, h = 1 << s, { parser: r  } = e.p, { dialect: n  } = r;
    t: for(; (h & o[i]) != 0;){
        let a = o[i + 1];
        for(let l = i + 3; l < a; l += 2)if ((o[l + 1] & h) > 0) {
            let u = o[l];
            if (n.allows(u) && (t.token.value == -1 || t.token.value == u || r.overrides(u, t.token.value))) {
                t.acceptToken(u);
                break;
            }
        }
        for(let l1 = t.next, u = 0, f = o[i + 2]; u < f;){
            let c = u + f >> 1, d = a + c + (c << 1), g = o[d], E = o[d + 1];
            if (l1 < g) f = c;
            else if (l1 >= E) u = c + 1;
            else {
                i = o[d + 2], t.advance();
                continue t;
            }
        }
        break;
    }
}
function A16(o, t = Uint16Array) {
    if (typeof o != "string") return o;
    let e = null;
    for(let s = 0, i = 0; s < o.length;){
        let h = 0;
        for(;;){
            let r = o.charCodeAt(s++), n = !1;
            if (r == 126) {
                h = 65535;
                break;
            }
            r >= 92 && r--, r >= 34 && r--;
            let a = r - 32;
            if (a >= 46 && (a -= 46, n = !0), h += a, n) break;
            h *= 46;
        }
        e ? e[i++] = h : e = new t(h);
    }
    return e;
}
var p38 = typeof process != "undefined" && /\bparse\b/.test(process.env.LOG), C20 = null, z19;
(function(o) {
    o[o.Margin = 25] = "Margin";
})(z19 || (z19 = {
}));
function O15(o, t, e) {
    let s = o.fullCursor();
    for(s.moveTo(t);;)if (!(e < 0 ? s.childBefore(t) : s.childAfter(t))) for(;;){
        if ((e < 0 ? s.to < t : s.from > t) && !s.type.isError) return e < 0 ? Math.max(0, Math.min(s.to - 1, t - 25)) : Math.min(o.length, Math.max(s.from + 1, t + 25));
        if (e < 0 ? s.prevSibling() : s.nextSibling()) break;
        if (!s.parent()) return e < 0 ? 0 : o.length;
    }
}
var F13 = class {
    constructor(t, e){
        this.fragments = t, this.nodeSet = e, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
    }
    nextFragment() {
        let t = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (t) {
            for(this.safeFrom = t.openStart ? O15(t.tree, t.from + t.offset, 1) - t.offset : t.from, this.safeTo = t.openEnd ? O15(t.tree, t.to + t.offset, -1) - t.offset : t.to; this.trees.length;)this.trees.pop(), this.start.pop(), this.index.pop();
            this.trees.push(t.tree), this.start.push(-t.offset), this.index.push(0), this.nextStart = this.safeFrom;
        } else this.nextStart = 1000000000;
    }
    nodeAt(t) {
        if (t < this.nextStart) return null;
        for(; this.fragment && this.safeTo <= t;)this.nextFragment();
        if (!this.fragment) return null;
        for(;;){
            let e = this.trees.length - 1;
            if (e < 0) return this.nextFragment(), null;
            let s = this.trees[e], i = this.index[e];
            if (i == s.children.length) {
                this.trees.pop(), this.start.pop(), this.index.pop();
                continue;
            }
            let h = s.children[i], r = this.start[e] + s.positions[i];
            if (r > t) return this.nextStart = r, null;
            if (h instanceof P6) {
                if (r == t) {
                    if (r < this.safeFrom) return null;
                    let n = r + h.length;
                    if (n <= this.safeTo) {
                        let a = h.prop(y10.lookAhead);
                        if (!a || n + a < this.fragment.to) return h;
                    }
                }
                this.index[e]++, r + h.length >= Math.max(this.safeFrom, t) && (this.trees.push(h), this.start.push(r), this.index.push(0));
            } else this.index[e]++, this.nextStart = r + h.length;
        }
    }
}, B19 = class {
    constructor(t, e){
        this.stream = e, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = t.tokenizers.map((s)=>new b20
        );
    }
    getActions(t) {
        let e = 0, s = null, { parser: i  } = t.p, { tokenizers: h  } = i, r = i.stateSlot(t.state, 3), n = t.curContext ? t.curContext.hash : 0, a = 0;
        for(let l = 0; l < h.length; l++){
            if ((1 << l & r) == 0) continue;
            let u = h[l], f = this.tokens[l];
            if (!(s && !u.fallback) && ((u.contextual || f.start != t.pos || f.mask != r || f.context != n) && (this.updateCachedToken(f, u, t), f.mask = r, f.context = n), f.lookAhead > f.end + 25 && (a = Math.max(f.lookAhead, a)), f.value != 0)) {
                let c = e;
                if (f.extended > -1 && (e = this.addActions(t, f.extended, f.end, e)), e = this.addActions(t, f.value, f.end, e), !u.extend && (s = f, e > c)) break;
            }
        }
        for(; this.actions.length > e;)this.actions.pop();
        return a && t.setLookAhead(a), !s && t.pos == this.stream.end && (s = new b20, s.value = t.p.parser.eofTerm, s.start = s.end = t.pos, e = this.addActions(t, s.value, s.end, e)), this.mainToken = s, this.actions;
    }
    getMainToken(t) {
        if (this.mainToken) return this.mainToken;
        let e = new b20, { pos: s , p: i  } = t;
        return e.start = s, e.end = Math.min(s + 1, i.stream.end), e.value = s == i.stream.end ? i.parser.eofTerm : 0, e;
    }
    updateCachedToken(t, e, s) {
        if (e.token(this.stream.reset(s.pos, t), s), t.value > -1) {
            let { parser: i  } = s.p;
            for(let h = 0; h < i.specialized.length; h++)if (i.specialized[h] == t.value) {
                let r = i.specializers[h](this.stream.read(t.start, t.end), s);
                if (r >= 0 && s.p.parser.dialect.allows(r >> 1)) {
                    (r & 1) == 0 ? t.value = r >> 1 : t.extended = r >> 1;
                    break;
                }
            }
        } else t.value = 0, t.end = Math.min(s.p.stream.end, s.pos + 1);
    }
    putAction(t, e, s, i) {
        for(let h = 0; h < i; h += 3)if (this.actions[h] == t) return i;
        return this.actions[i++] = t, this.actions[i++] = e, this.actions[i++] = s, i;
    }
    addActions(t, e, s, i) {
        let { state: h  } = t, { parser: r  } = t.p, { data: n  } = r;
        for(let a = 0; a < 2; a++)for(let l = r.stateSlot(h, a ? 2 : 1);; l += 3){
            if (n[l] == 65535) if (n[l + 1] == 1) l = k29(n, l + 2);
            else {
                i == 0 && n[l + 1] == 2 && (i = this.putAction(k29(n, l + 1), e, s, i));
                break;
            }
            n[l] == e && (i = this.putAction(k29(n, l + 1), e, s, i));
        }
        return i;
    }
}, L20;
(function(o) {
    o[o.Distance = 5] = "Distance", o[o.MaxRemainingPerStep = 3] = "MaxRemainingPerStep", o[o.MinBufferLengthPrune = 500] = "MinBufferLengthPrune", o[o.ForceReduceLimit = 10] = "ForceReduceLimit", o[o.CutDepth = 15000] = "CutDepth", o[o.CutTo = 9000] = "CutTo";
})(L20 || (L20 = {
}));
var $16 = class {
    constructor(t, e, s, i){
        this.parser = t, this.input = e, this.ranges = i, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.stream = new M24(e, i), this.tokens = new B19(t, this.stream), this.topTerm = t.top[1];
        let { from: h  } = i[0];
        this.stacks = [
            m12.start(this, t.top[0], h)
        ], this.fragments = s.length && this.stream.end - h > t.bufferLength * 4 ? new F13(s, t.nodeSet) : null;
    }
    get parsedPos() {
        return this.minStackPos;
    }
    advance() {
        let t = this.stacks, e = this.minStackPos, s = this.stacks = [], i, h;
        for(let r = 0; r < t.length; r++){
            let n = t[r];
            for(;;){
                if (this.tokens.mainToken = null, n.pos > e) s.push(n);
                else {
                    if (this.advanceStack(n, s, t)) continue;
                    {
                        i || (i = [], h = []), i.push(n);
                        let a = this.tokens.getMainToken(n);
                        h.push(a.value, a.end);
                    }
                }
                break;
            }
        }
        if (!s.length) {
            let r = i && V14(i);
            if (r) return this.stackToTree(r);
            if (this.parser.strict) throw p38 && i && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + e);
            this.recovering || (this.recovering = 5);
        }
        if (this.recovering && i) {
            let r = this.stoppedAt != null && i[0].pos > this.stoppedAt ? i[0] : this.runRecovery(i, h, s);
            if (r) return this.stackToTree(r.forceAll());
        }
        if (this.recovering) {
            let r = this.recovering == 1 ? 1 : this.recovering * 3;
            if (s.length > r) for(s.sort((n, a)=>a.score - n.score
            ); s.length > r;)s.pop();
            s.some((n)=>n.reducePos > e
            ) && this.recovering--;
        } else if (s.length > 1) {
            t: for(let r = 0; r < s.length - 1; r++){
                let n = s[r];
                for(let a = r + 1; a < s.length; a++){
                    let l = s[a];
                    if (n.sameState(l) || n.buffer.length > 500 && l.buffer.length > 500) if ((n.score - l.score || n.buffer.length - l.buffer.length) > 0) s.splice(a--, 1);
                    else {
                        s.splice(r--, 1);
                        continue t;
                    }
                }
            }
        }
        this.minStackPos = s[0].pos;
        for(let r1 = 1; r1 < s.length; r1++)s[r1].pos < this.minStackPos && (this.minStackPos = s[r1].pos);
        return null;
    }
    stopAt(t) {
        if (this.stoppedAt != null && this.stoppedAt < t) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = t;
    }
    advanceStack(t, e, s) {
        let i = t.pos, { parser: h  } = this, r = p38 ? this.stackID(t) + " -> " : "";
        if (this.stoppedAt != null && i > this.stoppedAt) return t.forceReduce() ? t : null;
        if (this.fragments) {
            let l = t.curContext && t.curContext.tracker.strict, u = l ? t.curContext.hash : 0;
            for(let f = this.fragments.nodeAt(i); f;){
                let c = this.parser.nodeSet.types[f.type.id] == f.type ? h.getGoto(t.state, f.type.id) : -1;
                if (c > -1 && f.length && (!l || (f.prop(y10.contextHash) || 0) == u)) return t.useNode(f, c), p38 && console.log(r + this.stackID(t) + ` (via reuse of ${h.getName(f.type.id)})`), !0;
                if (!(f instanceof P6) || f.children.length == 0 || f.positions[0] > 0) break;
                let d = f.children[0];
                if (d instanceof P6 && f.positions[0] == 0) f = d;
                else break;
            }
        }
        let n = h.stateSlot(t.state, 4);
        if (n > 0) return t.reduce(n), p38 && console.log(r + this.stackID(t) + ` (via always-reduce ${h.getName(n & 65535)})`), !0;
        if (t.stack.length >= 15000) for(; t.stack.length > 9000 && t.forceReduce(););
        let a = this.tokens.getActions(t);
        for(let l = 0; l < a.length;){
            let u = a[l++], f = a[l++], c = a[l++], d = l == a.length || !s, g = d ? t : t.split();
            if (g.apply(u, f, c), p38 && console.log(r + this.stackID(g) + ` (via ${(u & 65536) == 0 ? "shift" : `reduce of ${h.getName(u & 65535)}`} for ${h.getName(f)} @ ${i}${g == t ? "" : ", split"})`), d) return !0;
            g.pos > i ? e.push(g) : s.push(g);
        }
        return !1;
    }
    advanceFully(t, e) {
        let s = t.pos;
        for(;;){
            if (!this.advanceStack(t, null, null)) return !1;
            if (t.pos > s) return R12(t, e), !0;
        }
    }
    runRecovery(t, e, s) {
        let i = null, h = !1;
        for(let r = 0; r < t.length; r++){
            let n = t[r], a = e[r << 1], l = e[(r << 1) + 1], u = p38 ? this.stackID(n) + " -> " : "";
            if (n.deadEnd && (h || (h = !0, n.restart(), p38 && console.log(u + this.stackID(n) + " (restarted)"), this.advanceFully(n, s)))) continue;
            let f = n.split(), c = u;
            for(let d = 0; f.forceReduce() && d < 10 && (p38 && console.log(c + this.stackID(f) + " (via force-reduce)"), !this.advanceFully(f, s)); d++)p38 && (c = this.stackID(f) + " -> ");
            for (let d1 of n.recoverByInsert(a))p38 && console.log(u + this.stackID(d1) + " (via recover-insert)"), this.advanceFully(d1, s);
            this.stream.end > n.pos ? (l == n.pos && (l++, a = 0), n.recoverByDelete(a, l), p38 && console.log(u + this.stackID(n) + ` (via recover-delete ${this.parser.getName(a)})`), R12(n, s)) : (!i || i.score < n.score) && (i = n);
        }
        return i;
    }
    stackToTree(t) {
        return t.close(), P6.build({
            buffer: x18.create(t),
            nodeSet: this.parser.nodeSet,
            topID: this.topTerm,
            maxBufferLength: this.parser.bufferLength,
            reused: this.reused,
            start: this.ranges[0].from,
            length: t.pos - this.ranges[0].from,
            minRepeatType: this.parser.minRepeatTerm
        });
    }
    stackID(t) {
        let e = (C20 || (C20 = new WeakMap)).get(t);
        return e || C20.set(t, e = String.fromCodePoint(this.nextStackID++)), e + t;
    }
};
function R12(o, t) {
    for(let e = 0; e < t.length; e++){
        let s = t[e];
        if (s.pos == o.pos && s.sameState(o)) {
            t[e].score < o.score && (t[e] = o);
            return;
        }
    }
    t.push(o);
}
var j12 = class {
    constructor(t, e, s){
        this.source = t, this.flags = e, this.disabled = s;
    }
    allows(t) {
        return !this.disabled || this.disabled[t] == 0;
    }
}, T28 = (o)=>o
, Q14 = class {
    constructor(t){
        this.start = t.start, this.shift = t.shift || T28, this.reduce = t.reduce || T28, this.reuse = t.reuse || T28, this.hash = t.hash || (()=>0
        ), this.strict = t.strict !== !1;
    }
}, v91 = class extends Ae2 {
    constructor(t){
        super();
        if (this.wrappers = [], t.version != 13) throw new RangeError(`Parser version (${t.version}) doesn't match runtime version (${13})`);
        let e = t.nodeNames.split(" ");
        this.minRepeatTerm = e.length;
        for(let n = 0; n < t.repeatNodeCount; n++)e.push("");
        let s = Object.keys(t.topRules).map((n)=>t.topRules[n][1]
        ), i = [];
        for(let n1 = 0; n1 < e.length; n1++)i.push([]);
        function h(n, a, l) {
            i[n].push([
                a,
                a.deserialize(String(l))
            ]);
        }
        if (t.nodeProps) for (let n2 of t.nodeProps){
            let a = n2[0];
            for(let l = 1; l < n2.length;){
                let u = n2[l++];
                if (u >= 0) h(u, a, n2[l++]);
                else {
                    let f = n2[l + -u];
                    for(let c = -u; c > 0; c--)h(n2[l++], a, f);
                    l++;
                }
            }
        }
        this.nodeSet = new Z1(e.map((n, a)=>B4.define({
                name: a >= this.minRepeatTerm ? void 0 : n,
                id: a,
                props: i[a],
                top: s.indexOf(a) > -1,
                error: a == 0,
                skipped: t.skippedNodes && t.skippedNodes.indexOf(a) > -1
            })
        )), this.strict = !1, this.bufferLength = we2;
        let r = A16(t.tokenData);
        if (this.context = t.context, this.specialized = new Uint16Array(t.specialized ? t.specialized.length : 0), this.specializers = [], t.specialized) for(let n3 = 0; n3 < t.specialized.length; n3++)this.specialized[n3] = t.specialized[n3].term, this.specializers[n3] = t.specialized[n3].get;
        this.states = A16(t.states, Uint32Array), this.data = A16(t.stateData), this.goto = A16(t.goto), this.maxTerm = t.maxTerm, this.tokenizers = t.tokenizers.map((n)=>typeof n == "number" ? new P13(r, n) : n
        ), this.topRules = t.topRules, this.dialects = t.dialects || {
        }, this.dynamicPrecedences = t.dynamicPrecedences || null, this.tokenPrecTable = t.tokenPrec, this.termNames = t.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
    }
    createParse(t, e, s) {
        let i = new $16(this, t, e, s);
        for (let h of this.wrappers)i = h(i, t, e, s);
        return i;
    }
    getGoto(t, e, s = !1) {
        let i = this.goto;
        if (e >= i[0]) return -1;
        for(let h = i[e + 1];;){
            let r = i[h++], n = r & 1, a = i[h++];
            if (n && s) return a;
            for(let l = h + (r >> 1); h < l; h++)if (i[h] == t) return a;
            if (n) return -1;
        }
    }
    hasAction(t, e) {
        let s = this.data;
        for(let i = 0; i < 2; i++)for(let h = this.stateSlot(t, i ? 2 : 1), r;; h += 3){
            if ((r = s[h]) == 65535) if (s[h + 1] == 1) r = s[h = k29(s, h + 2)];
            else {
                if (s[h + 1] == 2) return k29(s, h + 2);
                break;
            }
            if (r == e || r == 0) return k29(s, h + 1);
        }
        return 0;
    }
    stateSlot(t, e) {
        return this.states[t * 6 + e];
    }
    stateFlag(t, e) {
        return (this.stateSlot(t, 0) & e) > 0;
    }
    validAction(t, e) {
        if (e == this.stateSlot(t, 4)) return !0;
        for(let s = this.stateSlot(t, 1);; s += 3){
            if (this.data[s] == 65535) if (this.data[s + 1] == 1) s = k29(this.data, s + 2);
            else return !1;
            if (e == k29(this.data, s + 1)) return !0;
        }
    }
    nextStates(t) {
        let e = [];
        for(let s = this.stateSlot(t, 1);; s += 3){
            if (this.data[s] == 65535) if (this.data[s + 1] == 1) s = k29(this.data, s + 2);
            else break;
            if ((this.data[s + 2] & 65536 >> 16) == 0) {
                let i = this.data[s + 1];
                e.some((h, r)=>r & 1 && h == i
                ) || e.push(this.data[s], i);
            }
        }
        return e;
    }
    overrides(t, e) {
        let s = G8(this.data, this.tokenPrecTable, e);
        return s < 0 || G8(this.data, this.tokenPrecTable, t) < s;
    }
    configure(t) {
        let e = Object.assign(Object.create(v91.prototype), this);
        if (t.props && (e.nodeSet = this.nodeSet.extend(...t.props)), t.top) {
            let s = this.topRules[t.top];
            if (!s) throw new RangeError(`Invalid top rule name ${t.top}`);
            e.top = s;
        }
        return t.tokenizers && (e.tokenizers = this.tokenizers.map((s)=>{
            let i = t.tokenizers.find((h)=>h.from == s
            );
            return i ? i.to : s;
        })), t.contextTracker && (e.context = t.contextTracker), t.dialect && (e.dialect = this.parseDialect(t.dialect)), t.strict != null && (e.strict = t.strict), t.wrap && (e.wrappers = e.wrappers.concat(t.wrap)), t.bufferLength != null && (e.bufferLength = t.bufferLength), e;
    }
    getName(t) {
        return this.termNames ? this.termNames[t] : String(t <= this.maxNode && this.nodeSet.types[t].name || t);
    }
    get eofTerm() {
        return this.maxNode + 1;
    }
    get topNode() {
        return this.nodeSet.types[this.top[1]];
    }
    dynamicPrecedence(t) {
        let e = this.dynamicPrecedences;
        return e == null ? 0 : e[t] || 0;
    }
    parseDialect(t) {
        let e = Object.keys(this.dialects), s = e.map(()=>!1
        );
        if (t) for (let h of t.split(" ")){
            let r = e.indexOf(h);
            r >= 0 && (s[r] = !0);
        }
        let i = null;
        for(let h1 = 0; h1 < e.length; h1++)if (!s[h1]) for(let r = this.dialects[e[h1]], n; (n = this.data[r++]) != 65535;)(i || (i = new Uint8Array(this.maxTerm + 1)))[n] = 1;
        return new j12(t, s, i);
    }
    static deserialize(t) {
        return new v91(t);
    }
};
function k29(o, t) {
    return o[t] | o[t + 1] << 16;
}
function G8(o, t, e) {
    for(let s = t, i; (i = o[s]) != 65535; s++)if (i == e) return s - t;
    return -1;
}
function V14(o) {
    let t = null;
    for (let e of o){
        let s = e.p.stoppedAt;
        (e.pos == e.p.stream.end || s != null && e.pos > s) && e.p.parser.stateFlag(e.state, 2) && (!t || t.score < e.score) && (t = e);
    }
    return t;
}
var s11 = 93, W15 = 1, y46 = 94, c16 = 95, r22 = 2, S24 = [
    9,
    10,
    11,
    12,
    13,
    32,
    133,
    160,
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8232,
    8233,
    8239,
    8287,
    12288
], R13 = 58, l2 = 40, X9 = 95, d15 = 91, $18 = 45, p44 = 46, f12 = 35, T29 = 37;
function t19(O) {
    return O >= 65 && O <= 90 || O >= 97 && O <= 122 || O >= 161;
}
function Z10(O) {
    return O >= 48 && O <= 57;
}
var _11 = new J14((O, Q)=>{
    for(let a = !1, P = 0, z = 0;; z++){
        let { next: e  } = O;
        if (t19(e) || e == $18 || e == X9 || a && Z10(e)) !a && (e != $18 || z > 0) && (a = !0), P === z && e == $18 && P++, O.advance();
        else {
            a && O.acceptToken(e == l2 ? y46 : P == 2 && Q.canShift(r22) ? r22 : c16);
            break;
        }
    }
}), g12 = new J14((O)=>{
    if (S24.includes(O.peek(-1))) {
        let { next: Q  } = O;
        (t19(Q) || Q == X9 || Q == f12 || Q == p44 || Q == d15 || Q == R13 || Q == $18) && O.acceptToken(s11);
    }
}), h4 = new J14((O)=>{
    if (!S24.includes(O.peek(-1))) {
        let { next: Q  } = O;
        if (Q == T29 && (O.advance(), O.acceptToken(W15)), t19(Q)) {
            do O.advance();
            while (t19(O.next))
            O.acceptToken(W15);
        }
    }
}), U10 = {
    __proto__: null,
    lang: 32,
    "nth-child": 32,
    "nth-last-child": 32,
    "nth-of-type": 32,
    dir: 32,
    url: 60,
    "url-prefix": 60,
    domain: 60,
    regexp: 60,
    selector: 134
}, b23 = {
    __proto__: null,
    "@import": 114,
    "@media": 138,
    "@charset": 142,
    "@namespace": 146,
    "@keyframes": 152,
    "@supports": 164
}, m13 = {
    __proto__: null,
    not: 128,
    only: 128,
    from: 158,
    to: 160
}, w45 = v91.deserialize({
    version: 13,
    states: "7WOYQ[OOOOQP'#Cd'#CdOOQP'#Cc'#CcO!ZQ[O'#CfO!}QXO'#CaO#UQ[O'#ChO#aQ[O'#DPO#fQ[O'#DTOOQP'#Ec'#EcO#kQdO'#DeO$VQ[O'#DrO#kQdO'#DtO$hQ[O'#DvO$sQ[O'#DyO$xQ[O'#EPO%WQ[O'#EROOQS'#Eb'#EbOOQS'#ES'#ESQYQ[OOOOQP'#Cg'#CgOOQP,59Q,59QO!ZQ[O,59QO%_Q[O'#EVO%yQWO,58{O&RQ[O,59SO#aQ[O,59kO#fQ[O,59oO%_Q[O,59sO%_Q[O,59uO%_Q[O,59vO'bQ[O'#D`OOQS,58{,58{OOQP'#Ck'#CkOOQO'#C}'#C}OOQP,59S,59SO'iQWO,59SO'nQWO,59SOOQP'#DR'#DROOQP,59k,59kOOQO'#DV'#DVO'sQ`O,59oOOQS'#Cp'#CpO#kQdO'#CqO'{QvO'#CsO)VQtO,5:POOQO'#Cx'#CxO'iQWO'#CwO)kQWO'#CyOOQS'#Ef'#EfOOQO'#Dh'#DhO)pQ[O'#DoO*OQWO'#EiO$xQ[O'#DmO*^QWO'#DpOOQO'#Ej'#EjO%|QWO,5:^O*cQpO,5:`OOQS'#Dx'#DxO*kQWO,5:bO*pQ[O,5:bOOQO'#D{'#D{O*xQWO,5:eO*}QWO,5:kO+VQWO,5:mOOQS-E8Q-E8QOOQP1G.l1G.lO+yQXO,5:qOOQO-E8T-E8TOOQS1G.g1G.gOOQP1G.n1G.nO'iQWO1G.nO'nQWO1G.nOOQP1G/V1G/VO,WQ`O1G/ZO,qQXO1G/_O-XQXO1G/aO-oQXO1G/bO.VQXO'#CdO.zQWO'#DaOOQS,59z,59zO/PQWO,59zO/XQ[O,59zO/`QdO'#CoO/gQ[O'#DOOOQP1G/Z1G/ZO#kQdO1G/ZO/nQpO,59]OOQS,59_,59_O#kQdO,59aO/vQWO1G/kOOQS,59c,59cO/{Q!bO,59eO0TQWO'#DhO0`QWO,5:TO0eQWO,5:ZO$xQ[O,5:VO$xQ[O'#EYO0mQWO,5;TO0xQWO,5:XO%_Q[O,5:[OOQS1G/x1G/xOOQS1G/z1G/zOOQS1G/|1G/|O1ZQWO1G/|O1`QdO'#D|OOQS1G0P1G0POOQS1G0V1G0VOOQS1G0X1G0XOOQP7+$Y7+$YOOQP7+$u7+$uO#kQdO7+$uO#kQdO,59{O1nQ[O'#EXO1xQWO1G/fOOQS1G/f1G/fO1xQWO1G/fO2QQtO'#ETO2uQdO'#EeO3PQWO,59ZO3UQXO'#EhO3]QWO,59jO3bQpO7+$uOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%V7+%VO3jQWO1G/PO#kQdO1G/oOOQO1G/u1G/uOOQO1G/q1G/qO3oQWO,5:tOOQO-E8W-E8WO3}QXO1G/vOOQS7+%h7+%hO4UQYO'#CsO%|QWO'#EZO4^QdO,5:hOOQS,5:h,5:hO4lQpO<<HaO4tQtO1G/gOOQO,5:s,5:sO5XQ[O,5:sOOQO-E8V-E8VOOQS7+%Q7+%QO5cQWO7+%QOOQS-E8R-E8RO#kQdO'#EUO5kQWO,5;POOQT1G.u1G.uO5sQWO,5;SOOQP1G/U1G/UOOQP<<Ha<<HaOOQS7+$k7+$kO5{QdO7+%ZOOQO7+%b7+%bOOQS,5:u,5:uOOQS-E8X-E8XOOQS1G0S1G0SOOQPAN={AN={O6SQtO'#EWO#kQdO'#EWO6}QdO7+%ROOQO7+%R7+%ROOQO1G0_1G0_OOQS<<Hl<<HlO7_QdO,5:pOOQO-E8S-E8SOOQO<<Hu<<HuO7iQtO,5:rOOQS-E8U-E8UOOQO<<Hm<<Hm",
    stateData: "8j~O#TOSROS~OUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#RPO#WRO~O#RcO~O]hO^hOpfOtiOxjO|kO!PmO#PlO#WeO~O!RnO~P!`O`sO#QqO#RpO~O#RuO~O#RwO~OQ!QObzOf!QOh!QOn!PO#Q}O#RyO#Z{O~Ob!SO!b!UO!e!VO#R!RO!R#]P~Oh![On!PO#R!ZO~O#R!^O~Ob!SO!b!UO!e!VO#R!RO~O!W#]P~P$VOUWOXWO]TO^TOtUOxVO#RPO#WRO~OpfO!RnO~O`!hO#QqO#RpO~OQ!pOUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#R!oO#WRO~O!Q!qO~P&^Ob!tO~Ob!uO~Ov!vOz!wO~OP!yObgXjgX!WgX!bgX!egX#RgXagXQgXfgXhgXngXpgX#QgX#ZgXvgX!QgX!VgX~Ob!SOj!zO!b!UO!e!VO#R!RO!W#]P~Ob!}O~Ob!SO!b!UO!e!VO#R#OO~Op#SO!`#RO!R#]X!W#]X~Ob#VO~Oj!zO!W#XO~O!W#YO~Oh#ZOn!PO~O!R#[O~O!RnO!`#RO~O!RnO!W#_O~O]hO^hOtiOxjO|kO!PmO#PlO#WeO~Op!ya!R!yaa!ya~P+_Ov#aOz#bO~O]hO^hOtiOxjO#WeO~Op{i|{i!P{i!R{i#P{ia{i~P,`Op}i|}i!P}i!R}i#P}ia}i~P,`Op!Oi|!Oi!P!Oi!R!Oi#P!Oia!Oi~P,`O]WX]!UX^WXpWXtWXxWX|WX!PWX!RWX#PWX#WWX~O]#cO~O!Q#fO!W#dO~O!Q#fO~P&^Oa#XP~P#kOa#[P~P%_Oa#nOj!zO~O!W#pO~Oh#qOo#qO~O]!^Xa![X!`![X~O]#rO~Oa#sO!`#RO~Op#SO!R#]a!W#]a~O!`#ROp!aa!R!aa!W!aaa!aa~O!W#xO~O!Q#|O!q#zO!r#zO#Z#yO~O!Q!{X!W!{X~P&^O!Q$SO!W#dO~Oj!zOQ!wXa!wXb!wXf!wXh!wXn!wXp!wX#Q!wX#R!wX#Z!wX~Op$VOa#XX~P#kOa$XO~Oa#[X~P!`Oa$ZO~Oj!zOv$[O~Oa$]O~O!`#ROp!|a!R!|a!W!|a~Oa$_O~P+_OP!yO!RgX~O!Q$bO!q#zO!r#zO#Z#yO~Oj!zOv$cO~Oj!zOp$eO!V$gO!Q!Ti!W!Ti~P#kO!Q!{a!W!{a~P&^O!Q$iO!W#dO~Op$VOa#Xa~OpfOa#[a~Oa$lO~P#kOj!zOQ!zXb!zXf!zXh!zXn!zXp!zX!Q!zX!V!zX!W!zX#Q!zX#R!zX#Z!zX~Op$eO!V$oO!Q!Tq!W!Tq~P#kOa!xap!xa~P#kOj!zOQ!zab!zaf!zah!zan!zap!za!Q!za!V!za!W!za#Q!za#R!za#Z!za~Oo#Zj!Pj~",
    goto: ",O#_PPPPP#`P#h#vP#h$U#hPP$[PPP$b$k$kP$}P$kP$k%e%wPPP&a&g#hP&mP#hP&sP#hP#h#hPPP&y']'iPP#`PP'o'o'y'oP'oP'o'oP#`P#`P#`P'|#`P(P(SPP#`P#`(V(e(s(y)T)Z)e)kPPPPPP)q)yP*e*hP+^+a+j]`Obn!s#d$QiWObfklmn!s!u#V#d$QiQObfklmn!s!u#V#d$QQdRR!ceQrTR!ghQ!gsQ!|!OR#`!hq!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jp!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jT#z#[#{q!OXZz!t!w!z#b#c#i#r$O$V$^$e$f$jp!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jQ![[R#Z!]QtTR!ihQ!gtR#`!iQvUR!jiQxVR!kjQoSQ!fgQ#W!XQ#^!`Q#_!aR$`#zQ!rnQ#g!sQ$P#dR$h$QX!pn!s#d$Qa!WY^_|!S!U#R#SR#P!SR!][R!_]R#]!_QbOU!bb!s$QQ!snR$Q#dQ#i!tU$U#i$^$jQ$^#rR$j$VQ$W#iR$k$WQgSS!eg$YR$Y#kQ$f$OR$n$fQ#e!rS$R#e$TR$T#gQ#T!TR#v#TQ#{#[R$a#{]aObn!s#d$Q[SObn!s#d$QQ!dfQ!lkQ!mlQ!nmQ#k!uR#w#VR#j!tQ|XQ!YZQ!xz[#h!t#i#r$V$^$jQ#m!wQ#o!zQ#}#bQ$O#cS$d$O$fR$m$eR#l!uQ!XYQ!a_R!{|U!TY_|Q!`^Q#Q!SQ#U!UQ#t#RR#u#S",
    nodeNames: "\u26A0 Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent , PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule",
    maxTerm: 106,
    nodeProps: [
        [
            y10.openedBy,
            17,
            "(",
            48,
            "{"
        ],
        [
            y10.closedBy,
            18,
            ")",
            49,
            "}"
        ]
    ],
    skippedNodes: [
        0,
        3
    ],
    repeatNodeCount: 8,
    tokenData: "Ay~R![OX$wX^%]^p$wpq%]qr(crs+}st,otu2Uuv$wvw2rwx2}xy3jyz3uz{3z{|4_|}8U}!O8a!O!P8x!P!Q9Z!Q![;e![!]<Y!]!^<x!^!_$w!_!`=T!`!a=`!a!b$w!b!c>O!c!}$w!}#O?[#O#P$w#P#Q?g#Q#R2U#R#T$w#T#U?r#U#c$w#c#d@q#d#o$w#o#pAQ#p#q2U#q#rA]#r#sAh#s#y$w#y#z%]#z$f$w$f$g%]$g#BY$w#BY#BZ%]#BZ$IS$w$IS$I_%]$I_$I|$w$I|$JO%]$JO$JT$w$JT$JU%]$JU$KV$w$KV$KW%]$KW&FU$w&FU&FV%]&FV~$wW$zQOy%Qz~%QW%VQoWOy%Qz~%Q~%bf#T~OX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q~&}f#T~oWOX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q^(fSOy%Qz#]%Q#]#^(r#^~%Q^(wSoWOy%Qz#a%Q#a#b)T#b~%Q^)YSoWOy%Qz#d%Q#d#e)f#e~%Q^)kSoWOy%Qz#c%Q#c#d)w#d~%Q^)|SoWOy%Qz#f%Q#f#g*Y#g~%Q^*_SoWOy%Qz#h%Q#h#i*k#i~%Q^*pSoWOy%Qz#T%Q#T#U*|#U~%Q^+RSoWOy%Qz#b%Q#b#c+_#c~%Q^+dSoWOy%Qz#h%Q#h#i+p#i~%Q^+wQ!VUoWOy%Qz~%Q~,QUOY+}Zr+}rs,ds#O+}#O#P,i#P~+}~,iOh~~,lPO~+}_,tWtPOy%Qz!Q%Q!Q![-^![!c%Q!c!i-^!i#T%Q#T#Z-^#Z~%Q^-cWoWOy%Qz!Q%Q!Q![-{![!c%Q!c!i-{!i#T%Q#T#Z-{#Z~%Q^.QWoWOy%Qz!Q%Q!Q![.j![!c%Q!c!i.j!i#T%Q#T#Z.j#Z~%Q^.qWfUoWOy%Qz!Q%Q!Q![/Z![!c%Q!c!i/Z!i#T%Q#T#Z/Z#Z~%Q^/bWfUoWOy%Qz!Q%Q!Q![/z![!c%Q!c!i/z!i#T%Q#T#Z/z#Z~%Q^0PWoWOy%Qz!Q%Q!Q![0i![!c%Q!c!i0i!i#T%Q#T#Z0i#Z~%Q^0pWfUoWOy%Qz!Q%Q!Q![1Y![!c%Q!c!i1Y!i#T%Q#T#Z1Y#Z~%Q^1_WoWOy%Qz!Q%Q!Q![1w![!c%Q!c!i1w!i#T%Q#T#Z1w#Z~%Q^2OQfUoWOy%Qz~%QY2XSOy%Qz!_%Q!_!`2e!`~%QY2lQzQoWOy%Qz~%QX2wQXPOy%Qz~%Q~3QUOY2}Zw2}wx,dx#O2}#O#P3d#P~2}~3gPO~2}_3oQbVOy%Qz~%Q~3zOa~_4RSUPjSOy%Qz!_%Q!_!`2e!`~%Q_4fUjS!PPOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q^4}SoWOy%Qz!Q%Q!Q![5Z![~%Q^5bWoW#ZUOy%Qz!Q%Q!Q![5Z![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q^6PWoWOy%Qz{%Q{|6i|}%Q}!O6i!O!Q%Q!Q![6z![~%Q^6nSoWOy%Qz!Q%Q!Q![6z![~%Q^7RSoW#ZUOy%Qz!Q%Q!Q![6z![~%Q^7fYoW#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q_8ZQpVOy%Qz~%Q^8fUjSOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q_8}S#WPOy%Qz!Q%Q!Q![5Z![~%Q~9`RjSOy%Qz{9i{~%Q~9nSoWOy9iyz9zz{:o{~9i~9}ROz9zz{:W{~9z~:ZTOz9zz{:W{!P9z!P!Q:j!Q~9z~:oOR~~:tUoWOy9iyz9zz{:o{!P9i!P!Q;W!Q~9i~;_QR~oWOy%Qz~%Q^;jY#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%QX<_S]POy%Qz![%Q![!]<k!]~%QX<rQ^PoWOy%Qz~%Q_<}Q!WVOy%Qz~%QY=YQzQOy%Qz~%QX=eS|POy%Qz!`%Q!`!a=q!a~%QX=xQ|PoWOy%Qz~%QX>RUOy%Qz!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX>lY!YPoWOy%Qz}%Q}!O>e!O!Q%Q!Q![>e![!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX?aQxPOy%Qz~%Q^?lQvUOy%Qz~%QX?uSOy%Qz#b%Q#b#c@R#c~%QX@WSoWOy%Qz#W%Q#W#X@d#X~%QX@kQ!`PoWOy%Qz~%QX@tSOy%Qz#f%Q#f#g@d#g~%QXAVQ!RPOy%Qz~%Q_AbQ!QVOy%Qz~%QZAmS!PPOy%Qz!_%Q!_!`2e!`~%Q",
    tokenizers: [
        g12,
        h4,
        _11,
        0,
        1,
        2,
        3
    ],
    topRules: {
        StyleSheet: [
            0,
            4
        ]
    },
    specialized: [
        {
            term: 94,
            get: (O)=>U10[O] || -1
        },
        {
            term: 56,
            get: (O)=>b23[O] || -1
        },
        {
            term: 95,
            get: (O)=>m13[O] || -1
        }
    ],
    tokenPrec: 1078
});
var d16 = null;
function c17() {
    if (!d16 && typeof document == "object" && document.body) {
        let a = [];
        for(let o in document.body.style)/[A-Z]|^-|^(item|length)$/.test(o) || a.push(o);
        d16 = a.sort().map((o)=>({
                type: "property",
                label: o
            })
        );
    }
    return d16 || [];
}
var p45 = [
    "active",
    "after",
    "before",
    "checked",
    "default",
    "disabled",
    "empty",
    "enabled",
    "first-child",
    "first-letter",
    "first-line",
    "first-of-type",
    "focus",
    "hover",
    "in-range",
    "indeterminate",
    "invalid",
    "lang",
    "last-child",
    "last-of-type",
    "link",
    "not",
    "nth-child",
    "nth-last-child",
    "nth-last-of-type",
    "nth-of-type",
    "only-of-type",
    "only-child",
    "optional",
    "out-of-range",
    "placeholder",
    "read-only",
    "read-write",
    "required",
    "root",
    "selection",
    "target",
    "valid",
    "visited"
].map((a)=>({
        type: "class",
        label: a
    })
), u12 = [
    "above",
    "absolute",
    "activeborder",
    "additive",
    "activecaption",
    "after-white-space",
    "ahead",
    "alias",
    "all",
    "all-scroll",
    "alphabetic",
    "alternate",
    "always",
    "antialiased",
    "appworkspace",
    "asterisks",
    "attr",
    "auto",
    "auto-flow",
    "avoid",
    "avoid-column",
    "avoid-page",
    "avoid-region",
    "axis-pan",
    "background",
    "backwards",
    "baseline",
    "below",
    "bidi-override",
    "blink",
    "block",
    "block-axis",
    "bold",
    "bolder",
    "border",
    "border-box",
    "both",
    "bottom",
    "break",
    "break-all",
    "break-word",
    "bullets",
    "button",
    "button-bevel",
    "buttonface",
    "buttonhighlight",
    "buttonshadow",
    "buttontext",
    "calc",
    "capitalize",
    "caps-lock-indicator",
    "caption",
    "captiontext",
    "caret",
    "cell",
    "center",
    "checkbox",
    "circle",
    "cjk-decimal",
    "clear",
    "clip",
    "close-quote",
    "col-resize",
    "collapse",
    "color",
    "color-burn",
    "color-dodge",
    "column",
    "column-reverse",
    "compact",
    "condensed",
    "contain",
    "content",
    "contents",
    "content-box",
    "context-menu",
    "continuous",
    "copy",
    "counter",
    "counters",
    "cover",
    "crop",
    "cross",
    "crosshair",
    "currentcolor",
    "cursive",
    "cyclic",
    "darken",
    "dashed",
    "decimal",
    "decimal-leading-zero",
    "default",
    "default-button",
    "dense",
    "destination-atop",
    "destination-in",
    "destination-out",
    "destination-over",
    "difference",
    "disc",
    "discard",
    "disclosure-closed",
    "disclosure-open",
    "document",
    "dot-dash",
    "dot-dot-dash",
    "dotted",
    "double",
    "down",
    "e-resize",
    "ease",
    "ease-in",
    "ease-in-out",
    "ease-out",
    "element",
    "ellipse",
    "ellipsis",
    "embed",
    "end",
    "ethiopic-abegede-gez",
    "ethiopic-halehame-aa-er",
    "ethiopic-halehame-gez",
    "ew-resize",
    "exclusion",
    "expanded",
    "extends",
    "extra-condensed",
    "extra-expanded",
    "fantasy",
    "fast",
    "fill",
    "fill-box",
    "fixed",
    "flat",
    "flex",
    "flex-end",
    "flex-start",
    "footnotes",
    "forwards",
    "from",
    "geometricPrecision",
    "graytext",
    "grid",
    "groove",
    "hand",
    "hard-light",
    "help",
    "hidden",
    "hide",
    "higher",
    "highlight",
    "highlighttext",
    "horizontal",
    "hsl",
    "hsla",
    "hue",
    "icon",
    "ignore",
    "inactiveborder",
    "inactivecaption",
    "inactivecaptiontext",
    "infinite",
    "infobackground",
    "infotext",
    "inherit",
    "initial",
    "inline",
    "inline-axis",
    "inline-block",
    "inline-flex",
    "inline-grid",
    "inline-table",
    "inset",
    "inside",
    "intrinsic",
    "invert",
    "italic",
    "justify",
    "keep-all",
    "landscape",
    "large",
    "larger",
    "left",
    "level",
    "lighter",
    "lighten",
    "line-through",
    "linear",
    "linear-gradient",
    "lines",
    "list-item",
    "listbox",
    "listitem",
    "local",
    "logical",
    "loud",
    "lower",
    "lower-hexadecimal",
    "lower-latin",
    "lower-norwegian",
    "lowercase",
    "ltr",
    "luminosity",
    "manipulation",
    "match",
    "matrix",
    "matrix3d",
    "medium",
    "menu",
    "menutext",
    "message-box",
    "middle",
    "min-intrinsic",
    "mix",
    "monospace",
    "move",
    "multiple",
    "multiple_mask_images",
    "multiply",
    "n-resize",
    "narrower",
    "ne-resize",
    "nesw-resize",
    "no-close-quote",
    "no-drop",
    "no-open-quote",
    "no-repeat",
    "none",
    "normal",
    "not-allowed",
    "nowrap",
    "ns-resize",
    "numbers",
    "numeric",
    "nw-resize",
    "nwse-resize",
    "oblique",
    "opacity",
    "open-quote",
    "optimizeLegibility",
    "optimizeSpeed",
    "outset",
    "outside",
    "outside-shape",
    "overlay",
    "overline",
    "padding",
    "padding-box",
    "painted",
    "page",
    "paused",
    "perspective",
    "pinch-zoom",
    "plus-darker",
    "plus-lighter",
    "pointer",
    "polygon",
    "portrait",
    "pre",
    "pre-line",
    "pre-wrap",
    "preserve-3d",
    "progress",
    "push-button",
    "radial-gradient",
    "radio",
    "read-only",
    "read-write",
    "read-write-plaintext-only",
    "rectangle",
    "region",
    "relative",
    "repeat",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "repeat-x",
    "repeat-y",
    "reset",
    "reverse",
    "rgb",
    "rgba",
    "ridge",
    "right",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "round",
    "row",
    "row-resize",
    "row-reverse",
    "rtl",
    "run-in",
    "running",
    "s-resize",
    "sans-serif",
    "saturation",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "screen",
    "scroll",
    "scrollbar",
    "scroll-position",
    "se-resize",
    "self-start",
    "self-end",
    "semi-condensed",
    "semi-expanded",
    "separate",
    "serif",
    "show",
    "single",
    "skew",
    "skewX",
    "skewY",
    "skip-white-space",
    "slide",
    "slider-horizontal",
    "slider-vertical",
    "sliderthumb-horizontal",
    "sliderthumb-vertical",
    "slow",
    "small",
    "small-caps",
    "small-caption",
    "smaller",
    "soft-light",
    "solid",
    "source-atop",
    "source-in",
    "source-out",
    "source-over",
    "space",
    "space-around",
    "space-between",
    "space-evenly",
    "spell-out",
    "square",
    "start",
    "static",
    "status-bar",
    "stretch",
    "stroke",
    "stroke-box",
    "sub",
    "subpixel-antialiased",
    "svg_masks",
    "super",
    "sw-resize",
    "symbolic",
    "symbols",
    "system-ui",
    "table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-footer-group",
    "table-header-group",
    "table-row",
    "table-row-group",
    "text",
    "text-bottom",
    "text-top",
    "textarea",
    "textfield",
    "thick",
    "thin",
    "threeddarkshadow",
    "threedface",
    "threedhighlight",
    "threedlightshadow",
    "threedshadow",
    "to",
    "top",
    "transform",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ",
    "transparent",
    "ultra-condensed",
    "ultra-expanded",
    "underline",
    "unidirectional-pan",
    "unset",
    "up",
    "upper-latin",
    "uppercase",
    "url",
    "var",
    "vertical",
    "vertical-text",
    "view-box",
    "visible",
    "visibleFill",
    "visiblePainted",
    "visibleStroke",
    "visual",
    "w-resize",
    "wait",
    "wave",
    "wider",
    "window",
    "windowframe",
    "windowtext",
    "words",
    "wrap",
    "wrap-reverse",
    "x-large",
    "x-small",
    "xor",
    "xx-large",
    "xx-small"
].map((a)=>({
        type: "keyword",
        label: a
    })
).concat([
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "grey",
    "green",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
].map((a)=>({
        type: "constant",
        label: a
    })
)), N19 = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "b",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "figcaption",
    "figure",
    "footer",
    "form",
    "header",
    "hgroup",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "meter",
    "nav",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "tr",
    "u",
    "ul"
].map((a)=>({
        type: "type",
        label: a
    })
), r23 = /^[\w-]*/, z20 = (a)=>{
    let { state: o , pos: i  } = a, t = v9(o).resolveInner(i, -1);
    if (t.name == "PropertyName") return {
        from: t.from,
        options: c17(),
        span: r23
    };
    if (t.name == "ValueName") return {
        from: t.from,
        options: u12,
        span: r23
    };
    if (t.name == "PseudoClassName") return {
        from: t.from,
        options: p45,
        span: r23
    };
    if (t.name == "TagName") {
        for(let { parent: s  } = t; s; s = s.parent)if (s.name == "Block") return {
            from: t.from,
            options: c17(),
            span: r23
        };
        return {
            from: t.from,
            options: N19,
            span: r23
        };
    }
    if (!a.explicit) return null;
    let l = t.resolve(i), n = l.childBefore(i);
    return n && n.name == ":" && l.name == "PseudoClassSelector" ? {
        from: i,
        options: p45,
        span: r23
    } : n && n.name == ":" && l.name == "Declaration" || l.name == "ArgList" ? {
        from: i,
        options: u12,
        span: r23
    } : l.name == "Block" ? {
        from: i,
        options: c17(),
        span: r23
    } : null;
}, m15 = P7.define({
    parser: w45.configure({
        props: [
            Y2.add({
                Declaration: wt1()
            }),
            ot1.add({
                Block: yt
            }),
            yt2({
                "import charset namespace keyframes": i2.definitionKeyword,
                "media supports": i2.controlKeyword,
                "from to selector": i2.keyword,
                NamespaceName: i2.namespace,
                KeyframeName: i2.labelName,
                TagName: i2.tagName,
                ClassName: i2.className,
                PseudoClassName: i2.constant(i2.className),
                IdName: i2.labelName,
                "FeatureName PropertyName": i2.propertyName,
                AttributeName: i2.attributeName,
                NumberLiteral: i2.number,
                KeywordQuery: i2.keyword,
                UnaryQueryOp: i2.operatorKeyword,
                "CallTag ValueName": i2.atom,
                VariableName: i2.variableName,
                Callee: i2.operatorKeyword,
                Unit: i2.unit,
                "UniversalSelector NestingSelector": i2.definitionOperator,
                AtKeyword: i2.keyword,
                MatchOp: i2.compareOperator,
                "ChildOp SiblingOp, LogicOp": i2.logicOperator,
                BinOp: i2.arithmeticOperator,
                Important: i2.modifier,
                Comment: i2.blockComment,
                ParenthesizedContent: i2.special(i2.name),
                ColorLiteral: i2.color,
                StringLiteral: i2.string,
                ":": i2.punctuation,
                "PseudoOp #": i2.derefOperator,
                "; ,": i2.separator,
                "( )": i2.paren,
                "[ ]": i2.squareBracket,
                "{ }": i2.brace
            })
        ]
    }),
    languageData: {
        commentTokens: {
            block: {
                open: "/*",
                close: "*/"
            }
        },
        indentOnInput: /^\s*\}$/,
        wordChars: "-"
    }
}), q15 = m15.data.of({
    autocomplete: z20
});
function L21() {
    return new J10(m15, q15);
}
var W16 = 53, _12 = 1, m17 = 54, Z11 = 2, V15 = 55, Y8 = 3, $19 = 4, p46 = 5, P14 = 6, i3 = 7, E23 = 8, j14 = 9, y47 = 10, R14 = 56, D16 = 11, G9 = 12, T30 = 57, U12 = 18, L22 = 27, N20 = 30, A17 = 33, z21 = 35, I15 = 0, M25 = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    frame: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
    menuitem: !0
}, K17 = {
    dd: !0,
    li: !0,
    optgroup: !0,
    option: !0,
    p: !0,
    rp: !0,
    rt: !0,
    tbody: !0,
    td: !0,
    tfoot: !0,
    th: !0,
    tr: !0
}, d18 = {
    dd: {
        dd: !0,
        dt: !0
    },
    dt: {
        dd: !0,
        dt: !0
    },
    li: {
        li: !0
    },
    option: {
        option: !0,
        optgroup: !0
    },
    optgroup: {
        optgroup: !0
    },
    p: {
        address: !0,
        article: !0,
        aside: !0,
        blockquote: !0,
        dir: !0,
        div: !0,
        dl: !0,
        fieldset: !0,
        footer: !0,
        form: !0,
        h1: !0,
        h2: !0,
        h3: !0,
        h4: !0,
        h5: !0,
        h6: !0,
        header: !0,
        hgroup: !0,
        hr: !0,
        menu: !0,
        nav: !0,
        ol: !0,
        p: !0,
        pre: !0,
        section: !0,
        table: !0,
        ul: !0
    },
    rp: {
        rp: !0,
        rt: !0
    },
    rt: {
        rp: !0,
        rt: !0
    },
    tbody: {
        tbody: !0,
        tfoot: !0
    },
    td: {
        td: !0,
        th: !0
    },
    tfoot: {
        tbody: !0
    },
    th: {
        td: !0,
        th: !0
    },
    thead: {
        tbody: !0,
        tfoot: !0
    },
    tr: {
        tr: !0
    }
};
function F14(e) {
    return e == 45 || e == 46 || e == 58 || e >= 65 && e <= 90 || e == 95 || e >= 97 && e <= 122 || e >= 161;
}
function b25(e) {
    return e == 9 || e == 10 || e == 13 || e == 32;
}
var Q15 = null, w46 = null, q17 = 0;
function g13(e, O) {
    let a = e.pos + O;
    if (q17 == a && w46 == e) return Q15;
    let r = e.peek(O);
    for(; b25(r);)r = e.peek(++O);
    let t = "";
    for(; F14(r);)t += String.fromCharCode(r), r = e.peek(++O);
    return w46 = e, q17 = a, Q15 = t || (r == B20 || r == J16 ? void 0 : null);
}
var v92 = 60, l3 = 62, x19 = 47, B20 = 63, J16 = 33;
function X10(e, O) {
    this.name = e, this.parent = O, this.hash = O ? O.hash : 0;
    for(let a = 0; a < e.length; a++)this.hash += (this.hash << 4) + e.charCodeAt(a) + (e.charCodeAt(a) << 8);
}
var H19 = [
    $19,
    p46,
    P14,
    i3
], ee7 = new Q14({
    start: null,
    shift (e, O, a, r) {
        return H19.indexOf(O) > -1 ? new X10(g13(r, 1) || "", e) : e;
    },
    reduce (e, O) {
        return O == U12 && e ? e.parent : e;
    },
    reuse (e, O, a, r) {
        let t = O.type.id;
        return t == $19 || t == z21 ? new X10(g13(r, 1) || "", e) : e;
    },
    hash (e) {
        return e ? e.hash : 0;
    },
    strict: !1
}), te7 = new J14((e, O)=>{
    if (e.next != v92) {
        e.next < 0 && O.context && e.acceptToken(R14);
        return;
    }
    e.advance();
    let a = e.next == x19;
    a && e.advance();
    let r = g13(e, 0);
    if (r === void 0) return;
    if (!r) return e.acceptToken(a ? D16 : $19);
    let t = O.context ? O.context.name : null;
    if (a) {
        if (r == t) return e.acceptToken(E23);
        if (t && K17[t]) return e.acceptToken(R14, -2);
        if (O.dialectEnabled(I15)) return e.acceptToken(j14);
        for(let s = O.context; s; s = s.parent)if (s.name == r) return;
        e.acceptToken(y47);
    } else {
        if (r == "script") return e.acceptToken(p46);
        if (r == "style") return e.acceptToken(P14);
        if (r == "textarea") return e.acceptToken(i3);
        t && d18[t] && d18[t][r] ? e.acceptToken(R14, -1) : e.acceptToken($19);
    }
}, {
    contextual: !0
}), Oe5 = new J14((e, O)=>{
    let a = 1;
    if (e.next == x19) {
        if (e.peek(1) != l3) return;
        a = 2;
    } else if (e.next != l3) return;
    O.context && M25[O.context.name] && e.acceptToken(G9, a);
}), re10 = new J14((e)=>{
    for(let O = 0, a = 0;; a++){
        if (e.next < 0) {
            a && e.acceptToken(T30);
            break;
        }
        if (e.next == "-->".charCodeAt(O)) {
            if (O++, O == 3) {
                a > 3 && e.acceptToken(T30, -2);
                break;
            }
        } else O = 0;
        e.advance();
    }
});
function c18(e, O, a) {
    let r = 2 + e.length;
    return new J14((t)=>{
        for(let s = 0, k = 0, n = 0;; n++){
            if (t.next < 0) {
                n && t.acceptToken(O);
                break;
            }
            if (s == 0 && t.next == v92 || s == 1 && t.next == x19 || s >= 2 && s < r && t.next == e.charCodeAt(s - 2)) s++, k++;
            else if ((s == 2 || s == r) && b25(t.next)) k++;
            else if (s == r && t.next == l3) {
                n > k ? t.acceptToken(O, -k) : t.acceptToken(a, -(k - 2));
                break;
            } else if ((t.next == 10 || t.next == 13) && n) {
                t.acceptToken(O, 1);
                break;
            } else s = k = 0;
            t.advance();
        }
    });
}
var ae8 = c18("script", W16, _12), se7 = c18("style", m17, Z11), ke5 = c18("textarea", V15, Y8), ue8 = v91.deserialize({
    version: 13,
    states: ",fOVO!jOOO!TQ#tO'#CoO!YQ#tO'#CyO!_Q#tO'#C|O!dQ#tO'#DPO!iOXO'#CnO!tOYO'#CnO#PO[O'#CnO$YO!jO'#CnOOOW'#Cn'#CnO$aO$fO'#DSO$iQ#tO'#DUO$nQ#tO'#DVOOOW'#Dj'#DjOOOW'#DX'#DXQVO!jOOO$sQ&jO,59ZO${Q&jO,59eO%TQ&jO,59hO%]Q&zO,59kOOOX'#D]'#D]O%hOXO'#CwO%sOXO,59YOOOY'#D^'#D^O%{OYO'#CzO&WOYO,59YOOO['#D_'#D_O&`O[O'#C}O&kO[O,59YOOOW'#D`'#D`O&sO!jO,59YO&zQ#tO'#DQOOOW,59Y,59YOOOp'#Da'#DaO'PO$fO,59nOOOW,59n,59nO'XQ#tO,59pO'^Q#tO,59qOOOW-E7V-E7VO'cQ&zO'#CqOOQ`'#DY'#DYO'qQ&jO1G.uOOOX1G.u1G.uO'yQ&jO1G/POOOY1G/P1G/PO(RQ&jO1G/SOOO[1G/S1G/SO(ZQ&zO1G/VOOOW1G/V1G/VOOOW1G/X1G/XOOOX-E7Z-E7ZO(fQ#tO'#CxOOOW1G.t1G.tOOOY-E7[-E7[O(kQ#tO'#C{OOO[-E7]-E7]O(pQ#tO'#DOOOOW-E7^-E7^O(uQ#tO,59lOOOp-E7_-E7_OOOW1G/Y1G/YOOOW1G/[1G/[OOOW1G/]1G/]O(zQ,UO,59]OOQ`-E7W-E7WOOOX7+$a7+$aOOOY7+$k7+$kOOO[7+$n7+$nOOOW7+$q7+$qOOOW7+$s7+$sO)VQ#tO,59dO)[Q#tO,59gO)aQ#tO,59jOOOW1G/W1G/WO)fO7[O'#CtO)tOMhO'#CtOOQ`1G.w1G.wOOOW1G/O1G/OOOOW1G/R1G/ROOOW1G/U1G/UOOOO'#DZ'#DZO*SO7[O,59`OOQ`,59`,59`OOOO'#D['#D[O*bOMhO,59`OOOO-E7X-E7XOOQ`1G.z1G.zOOOO-E7Y-E7Y",
    stateData: "*x~O!]OS~OSSOTPOUQOVROX[OYZOZ]O^]O_]O`]Oa]Ow]Oz^O!cYO~Od`O~OdaO~OdbO~OdcO~O!VdOPkP!YkP~O!WgOQnP!YnP~O!XjORqP!YqP~OSSOTPOUQOVROWoOX[OYZOZ]O^]O_]O`]Oa]Ow]O!cYO~O!YpO~P#[O!ZqO!dsO~OdtO~OduO~OfwOjzO~OfwOj|O~OfwOj!OO~O[!ROfwOj!QO~O!VdOPkX!YkX~OP!TO!Y!UO~O!WgOQnX!YnX~OQ!WO!Y!UO~O!XjORqX!YqX~OR!YO!Y!UO~O!Y!UO~P#[Od![O~O!ZqO!d!^O~Oj!_O~Oj!`O~Og!aOfeXjeX[eX~OfwOj!cO~OfwOj!dO~OfwOj!eO~O[!gOfwOj!fO~Od!hO~Od!iO~Od!jO~Oj!kO~Oi!nO!_!lO!a!mO~Oj!oO~Oj!pO~Oj!qO~O_!rO`!rO!_!tO!`!rO~O_!uO`!uO!a!tO!b!uO~O_!rO`!rO!_!xO!`!rO~O_!uO`!uO!a!xO!b!uO~O`_a!cwz!c~",
    goto: "%i!_PPPPPPPPPPPPPPPPPP!`!fP!lPP!vPP!y!|#P#V#Y#]#c#f#i#o#u!`P!`!`P#{$R$e$k$q$w$}%T%ZPPPPPPPP%aX]OW_nXTOW_nax`abcy{}!PR!n!aRfTR!UfXUOW_nRiUR!UiXVOW_nRlVR!UlXWOW_nQpWR!UnXXOW_nQ_ORv_Qy`Q{aQ}bQ!PcX!by{}!PQ!s!lR!w!sQ!v!mR!y!vQeTR!SeQhUR!VhQkVR!XkQnWR!ZnQrYR!]rS^O_TmWn",
    nodeNames: "\u26A0 StartCloseTag StartCloseTag StartCloseTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag SelfCloseEndTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
    maxTerm: 66,
    context: ee7,
    nodeProps: [
        [
            y10.closedBy,
            -9,
            1,
            2,
            3,
            5,
            6,
            7,
            8,
            9,
            10,
            "EndTag",
            4,
            "EndTag SelfCloseEndTag",
            -4,
            19,
            29,
            32,
            35,
            "CloseTag"
        ],
        [
            y10.group,
            -9,
            11,
            15,
            16,
            17,
            18,
            38,
            39,
            40,
            41,
            "Entity",
            14,
            "Entity TextContent",
            -3,
            27,
            30,
            33,
            "TextContent Entity"
        ],
        [
            y10.openedBy,
            12,
            "StartTag",
            26,
            "StartTag StartCloseTag",
            -4,
            28,
            31,
            34,
            36,
            "OpenTag"
        ]
    ],
    skippedNodes: [
        0
    ],
    repeatNodeCount: 9,
    tokenData: "!#b!aR!WOX$kXY)sYZ)sZ]$k]^)s^p$kpq)sqr$krs*zsv$kvw+dwx2yx}$k}!O3f!O!P$k!P!Q7_!Q![$k![!]8u!]!^$k!^!_>b!_!`!!p!`!a8T!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U$k4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!Z$vc^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!R&[V^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&Rq&xT^P!bpOv&qwx'Xx!^&q!^!_'g!_~&qP'^R^POv'Xw!^'X!_~'Xp'lQ!bpOv'gx~'ga'yU^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r`(bR!``Or(]sv(]w~(]!Q(rT!``!bpOr(krs'gsv(kwx(]x~(kW)WXiWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!a*O^^P!``!bp!]^OX&RXY)sYZ)sZ]&R]^)s^p&Rpq)sqr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!Z+TT!_h^P!bpOv&qwx'Xx!^&q!^!_'g!_~&q!Z+kbiWaPOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst/]tw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^)R!^!a.Q!a$f,s$f$g.Q$g~,s!Z,xbiWOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst)Rtw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^.i!^!a.Q!a$f,s$f$g.Q$g~,s!R.TTOp.Qqs.Qt!].Q!]!^.d!^~.Q!R.iO_!R!Z.pXiW_!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z/baiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^)R!^!a1q!a$f0g$f$g1q$g~0g!Z0laiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^2V!^!a1q!a$f0g$f$g1q$g~0g!R1tSOp1qq!]1q!]!^2Q!^~1q!R2VO`!R!Z2^XiW`!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z3SU!ax^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r!]3qe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O5S!O!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!]5_d^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!`&R!`!a6m!a$f$k$f$g&R$g~$k!T6xV^P!``!bp!dQOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!X7hX^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_!`&R!`!a8T!a~&R!X8`VjU^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!a9U!YfSdQ^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O8u!O!P8u!P!Q&R!Q![8u![!]8u!]!^$k!^!_(k!_!a&R!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g$}$k$}%O8u%O%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U8u4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Je$k$Je$Jg8u$Jg$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!a=Pe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g;=`$k;=`<%l8u<%l~$k!R>iW!``!bpOq(kqr?Rrs'gsv(kwx(]x!a(k!a!bKj!b~(k!R?YZ!``!bpOr(krs'gsv(kwx(]x}(k}!O?{!O!f(k!f!gAR!g#W(k#W#XGz#X~(k!R@SV!``!bpOr(krs'gsv(kwx(]x}(k}!O@i!O~(k!R@rT!``!bp!cPOr(krs'gsv(kwx(]x~(k!RAYV!``!bpOr(krs'gsv(kwx(]x!q(k!q!rAo!r~(k!RAvV!``!bpOr(krs'gsv(kwx(]x!e(k!e!fB]!f~(k!RBdV!``!bpOr(krs'gsv(kwx(]x!v(k!v!wBy!w~(k!RCQV!``!bpOr(krs'gsv(kwx(]x!{(k!{!|Cg!|~(k!RCnV!``!bpOr(krs'gsv(kwx(]x!r(k!r!sDT!s~(k!RD[V!``!bpOr(krs'gsv(kwx(]x!g(k!g!hDq!h~(k!RDxW!``!bpOrDqrsEbsvDqvwEvwxFfx!`Dq!`!aGb!a~DqqEgT!bpOvEbvxEvx!`Eb!`!aFX!a~EbPEyRO!`Ev!`!aFS!a~EvPFXOzPqF`Q!bpzPOv'gx~'gaFkV!``OrFfrsEvsvFfvwEvw!`Ff!`!aGQ!a~FfaGXR!``zPOr(]sv(]w~(]!RGkT!``!bpzPOr(krs'gsv(kwx(]x~(k!RHRV!``!bpOr(krs'gsv(kwx(]x#c(k#c#dHh#d~(k!RHoV!``!bpOr(krs'gsv(kwx(]x#V(k#V#WIU#W~(k!RI]V!``!bpOr(krs'gsv(kwx(]x#h(k#h#iIr#i~(k!RIyV!``!bpOr(krs'gsv(kwx(]x#m(k#m#nJ`#n~(k!RJgV!``!bpOr(krs'gsv(kwx(]x#d(k#d#eJ|#e~(k!RKTV!``!bpOr(krs'gsv(kwx(]x#X(k#X#YDq#Y~(k!RKqW!``!bpOrKjrsLZsvKjvwLowxNPx!aKj!a!b! g!b~KjqL`T!bpOvLZvxLox!aLZ!a!bM^!b~LZPLrRO!aLo!a!bL{!b~LoPMORO!`Lo!`!aMX!a~LoPM^OwPqMcT!bpOvLZvxLox!`LZ!`!aMr!a~LZqMyQ!bpwPOv'gx~'gaNUV!``OrNPrsLosvNPvwLow!aNP!a!bNk!b~NPaNpV!``OrNPrsLosvNPvwLow!`NP!`!a! V!a~NPa! ^R!``wPOr(]sv(]w~(]!R! nW!``!bpOrKjrsLZsvKjvwLowxNPx!`Kj!`!a!!W!a~Kj!R!!aT!``!bpwPOr(krs'gsv(kwx(]x~(k!V!!{VgS^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R",
    tokenizers: [
        ae8,
        se7,
        ke5,
        te7,
        Oe5,
        re10,
        0,
        1,
        2,
        3,
        4,
        5
    ],
    topRules: {
        Document: [
            0,
            13
        ]
    },
    dialects: {
        noMatch: 0
    },
    tokenPrec: 446
});
function ne9(e, O) {
    let a = Object.create(null);
    for (let r of e.firstChild.getChildren("Attribute")){
        let t = r.getChild("AttributeName"), s = r.getChild("AttributeValue") || r.getChild("UnquotedAttributeValue");
        t && (a[O.read(t.from, t.to)] = s ? s.name == "AttributeValue" ? O.read(s.from + 1, s.to - 1) : O.read(s.from, s.to) : "");
    }
    return a;
}
function f13(e, O, a) {
    let r;
    for (let t of a)if (!t.attrs || t.attrs(r || (r = ne9(e.node.parent, O)))) return {
        parser: t.parser
    };
    return null;
}
function Re2(e) {
    let O = [], a = [], r = [];
    for (let t of e){
        let s = t.tag == "script" ? O : t.tag == "style" ? a : t.tag == "textarea" ? r : null;
        if (!s) throw new RangeError("Only script, style, and textarea tags can host nested parsers");
        s.push(t);
    }
    return Ne1((t, s)=>{
        let k = t.type.id;
        return k == L22 ? f13(t, s, O) : k == N20 ? f13(t, s, a) : k == A17 ? f13(t, s, r) : null;
    });
}
var W17 = 275, T31 = 1, o1 = 2, P15 = 276, Z12 = 277, p47 = 278, X11 = 279, r32 = 3, R15 = 281, n2 = 282, V16 = 4, _13 = 5, j15 = 1, q19 = [
    9,
    10,
    11,
    12,
    13,
    32,
    133,
    160,
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8232,
    8233,
    8239,
    8287,
    12288
], Y9 = 125, y48 = 123, G10 = 59, S25 = 47, u13 = 42, x20 = 43, l4 = 45, f14 = 36, s12 = 96, d19 = 92, v93 = new Q14({
    start: !1,
    shift (O, Q) {
        return Q == V16 || Q == _13 || Q == R15 ? O : Q == n2;
    },
    strict: !1
}), b26 = new J14((O, Q)=>{
    let { next: $  } = O;
    ($ == Y9 || $ == -1 || Q.context) && Q.canShift(X11) && O.acceptToken(X11);
}, {
    contextual: !0,
    fallback: !0
}), z23 = new J14((O, Q)=>{
    let { next: $  } = O, a;
    q19.indexOf($) > -1 || $ == S25 && ((a = O.peek(1)) == S25 || a == u13) || $ != Y9 && $ != G10 && $ != -1 && !Q.context && Q.canShift(W17) && O.acceptToken(W17);
}, {
    contextual: !0
}), w48 = new J14((O, Q)=>{
    let { next: $  } = O;
    if (($ == x20 || $ == l4) && (O.advance(), $ == O.next)) {
        O.advance();
        let a = !Q.context && Q.canShift(T31);
        O.acceptToken(a ? T31 : o1);
    }
}, {
    contextual: !0
}), k30 = new J14((O)=>{
    for(let Q = !1, $ = 0;; $++){
        let { next: a  } = O;
        if (a < 0) {
            $ && O.acceptToken(P15);
            break;
        } else if (a == s12) {
            $ ? O.acceptToken(P15) : O.acceptToken(p47, 1);
            break;
        } else if (a == y48 && Q) {
            $ == 1 ? O.acceptToken(Z12, 1) : O.acceptToken(P15, -1);
            break;
        } else if (a == 10 && $) {
            O.advance(), O.acceptToken(P15);
            break;
        } else a == d19 && O.advance();
        Q = a == f14, O.advance();
    }
});
function L23(O, Q) {
    return O == "extends" && Q.dialectEnabled(j15) ? r32 : -1;
}
var g14 = {
    __proto__: null,
    export: 16,
    as: 21,
    from: 25,
    default: 30,
    async: 35,
    function: 36,
    this: 46,
    true: 54,
    false: 54,
    void: 60,
    typeof: 64,
    null: 78,
    super: 80,
    new: 114,
    await: 131,
    yield: 133,
    delete: 134,
    class: 144,
    extends: 146,
    public: 189,
    private: 189,
    protected: 189,
    readonly: 191,
    instanceof: 212,
    in: 214,
    const: 216,
    import: 248,
    keyof: 299,
    unique: 303,
    infer: 309,
    is: 343,
    abstract: 363,
    implements: 365,
    type: 367,
    let: 370,
    var: 372,
    interface: 379,
    enum: 383,
    namespace: 389,
    module: 391,
    declare: 395,
    global: 399,
    for: 420,
    of: 429,
    while: 432,
    with: 436,
    do: 440,
    if: 444,
    else: 446,
    switch: 450,
    case: 456,
    try: 462,
    catch: 464,
    finally: 466,
    return: 470,
    throw: 474,
    break: 478,
    continue: 482,
    debugger: 486
}, U14 = {
    __proto__: null,
    async: 101,
    get: 103,
    set: 105,
    public: 153,
    private: 153,
    protected: 153,
    static: 155,
    abstract: 157,
    override: 159,
    readonly: 165,
    new: 347
}, m18 = {
    __proto__: null,
    "<": 121
}, A18 = v91.deserialize({
    version: 13,
    states: "$1WO`QYOOO'QQ!LdO'#CgO'XOSO'#DSO)dQYO'#DXO)tQYO'#DdO){QYO'#DnO-xQYO'#DtOOQO'#EX'#EXO.]QWO'#EWO.bQWO'#EWOOQ!LS'#Eb'#EbO0aQ!LdO'#IqO2wQ!LdO'#IrO3eQWO'#EvO3jQpO'#F]OOQ!LS'#FO'#FOO3rO!bO'#FOO4QQWO'#FdO5_QWO'#FcOOQ!LS'#Ir'#IrOOQ!LQ'#Iq'#IqOOQQ'#J['#J[O5dQWO'#HjO5iQ!LYO'#HkOOQQ'#Ic'#IcOOQQ'#Hl'#HlQ`QYOOO){QYO'#DfO5qQWO'#GWO5vQ#tO'#ClO6UQWO'#EVO6aQWO'#EcO6fQ#tO'#E}O7QQWO'#GWO7VQWO'#G[O7bQWO'#G[O7pQWO'#G_O7pQWO'#G`O7pQWO'#GbO5qQWO'#GeO8aQWO'#GhO9oQWO'#CcO:PQWO'#GuO:XQWO'#G{O:XQWO'#G}O`QYO'#HPO:XQWO'#HRO:XQWO'#HUO:^QWO'#H[O:cQ!LZO'#H`O){QYO'#HbO:nQ!LZO'#HdO:yQ!LZO'#HfO5iQ!LYO'#HhO){QYO'#IsOOOS'#Hn'#HnO;UOSO,59nOOQ!LS,59n,59nO=gQbO'#CgO=qQYO'#HoO>OQWO'#ItO?}QbO'#ItO'dQYO'#ItO@UQWO,59sO@lQ&jO'#D^OAeQWO'#EXOArQWO'#JPOA}QWO'#JOOBVQWO,5:uOB[QWO'#I}OBcQWO'#DuO5vQ#tO'#EVOBqQWO'#EVOB|Q`O'#E}OOQ!LS,5:O,5:OOCUQYO,5:OOESQ!LdO,5:YOEpQWO,5:`OFZQ!LYO'#I|O7VQWO'#I{OFbQWO'#I{OFjQWO,5:tOFoQWO'#I{OF}QYO,5:rOH}QWO'#ESOJXQWO,5:rOKhQWO'#DhOKoQYO'#DmOKyQ&jO,5:{O){QYO,5:{OOQQ'#En'#EnOOQQ'#Ep'#EpO){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}OOQQ'#Et'#EtOLRQYO,5;_OOQ!LS,5;d,5;dOOQ!LS,5;e,5;eONRQWO,5;eOOQ!LS,5;f,5;fO){QYO'#HyONWQ!LYO,5<PONrQWO,5:}O){QYO,5;bO! [QpO'#JTONyQpO'#JTO! cQpO'#JTO! tQpO,5;mOOOO,5;w,5;wO!!SQYO'#F_OOOO'#Hx'#HxO3rO!bO,5;jO!!ZQpO'#FaOOQ!LS,5;j,5;jO!!wQ,UO'#CqOOQ!LS'#Ct'#CtO!#[QWO'#CtO!#aOSO'#CxO!#}Q#tO,5;|O!$UQWO,5<OO!%bQWO'#FnO!%oQWO'#FoO!%tQWO'#FsO!&vQ&jO'#FwO!'iQ,UO'#IlOOQ!LS'#Il'#IlO!'sQWO'#IkO!(RQWO'#IjOOQ!LS'#Cr'#CrOOQ!LS'#Cy'#CyO!(ZQWO'#C{OJ^QWO'#FfOJ^QWO'#FhO!(`QWO'#FjO!(eQWO'#FkO!(jQWO'#FqOJ^QWO'#FvO!(oQWO'#EYO!)WQWO,5;}O`QYO,5>UOOQQ'#If'#IfOOQQ,5>V,5>VOOQQ-E;j-E;jO!+SQ!LdO,5:QOOQ!LQ'#Co'#CoO!+sQ#tO,5<rOOQO'#Ce'#CeO!,UQWO'#CpO!,^Q!LYO'#IgO5_QWO'#IgO:^QWO,59WO!,lQpO,59WO!,tQ#tO,59WO5vQ#tO,59WO!-PQWO,5:rO!-XQWO'#GtO!-dQWO'#J`O){QYO,5;gO!-lQ&jO,5;iO!-qQWO,5=_O!-vQWO,5=_O!-{QWO,5=_O5iQ!LYO,5=_O5qQWO,5<rO!.ZQWO'#EZO!.lQ&jO'#E[OOQ!LQ'#I}'#I}O!.}Q!LYO'#J]O5iQ!LYO,5<vO7pQWO,5<|OOQO'#Cq'#CqO!/YQpO,5<yO!/bQ#tO,5<zO!/mQWO,5<|O!/rQ`O,5=PO:^QWO'#GjO5qQWO'#GlO!/zQWO'#GlO5vQ#tO'#GoO!0PQWO'#GoOOQQ,5=S,5=SO!0UQWO'#GpO!0^QWO'#ClO!0cQWO,58}O!0mQWO,58}O!2oQYO,58}OOQQ,58},58}O!2|Q!LYO,58}O){QYO,58}O!3XQYO'#GwOOQQ'#Gx'#GxOOQQ'#Gy'#GyO`QYO,5=aO!3iQWO,5=aO){QYO'#DtO`QYO,5=gO`QYO,5=iO!3nQWO,5=kO`QYO,5=mO!3sQWO,5=pO!3xQYO,5=vOOQQ,5=z,5=zO){QYO,5=zO5iQ!LYO,5=|OOQQ,5>O,5>OO!7yQWO,5>OOOQQ,5>Q,5>QO!7yQWO,5>QOOQQ,5>S,5>SO!8OQ`O,5?_OOOS-E;l-E;lOOQ!LS1G/Y1G/YO!8TQbO,5>ZO){QYO,5>ZOOQO-E;m-E;mO!8_QWO,5?`O!8gQbO,5?`O!8nQWO,5?jOOQ!LS1G/_1G/_O!8vQpO'#DQOOQO'#Iv'#IvO){QYO'#IvO!9eQpO'#IvO!:SQpO'#D_O!:eQ&jO'#D_O!<pQYO'#D_O!<wQWO'#IuO!=PQWO,59xO!=UQWO'#E]O!=dQWO'#JQO!=lQWO,5:vO!>SQ&jO'#D_O){QYO,5?kO!>^QWO'#HtO!8nQWO,5?jOOQ!LQ1G0a1G0aO!?jQ&jO'#DxOOQ!LS,5:a,5:aO){QYO,5:aOH}QWO,5:aO!?qQWO,5:aO:^QWO,5:qO!,lQpO,5:qO!,tQ#tO,5:qO5vQ#tO,5:qOOQ!LS1G/j1G/jOOQ!LS1G/z1G/zOOQ!LQ'#ER'#ERO){QYO,5?hO!?|Q!LYO,5?hO!@_Q!LYO,5?hO!@fQWO,5?gO!@nQWO'#HvO!@fQWO,5?gOOQ!LQ1G0`1G0`O7VQWO,5?gOOQ!LS1G0^1G0^O!AYQ!LdO1G0^O!AyQ!LbO,5:nOOQ!LS'#Fm'#FmO!BgQ!LdO'#IlOF}QYO1G0^O!DfQ#tO'#IwO!DpQWO,5:SO!DuQbO'#IxO){QYO'#IxO!EPQWO,5:XOOQ!LS'#DQ'#DQOOQ!LS1G0g1G0gO!EUQWO1G0gO!GgQ!LdO1G0iO!GnQ!LdO1G0iO!JRQ!LdO1G0iO!JYQ!LdO1G0iO!LaQ!LdO1G0iO!LtQ!LdO1G0iO# eQ!LdO1G0iO# lQ!LdO1G0iO#$PQ!LdO1G0iO#$WQ!LdO1G0iO#%{Q!LdO1G0iO#(uQ7^O'#CgO#*pQ7^O1G0yO#,kQ7^O'#IrOOQ!LS1G1P1G1PO#-OQ!LdO,5>eOOQ!LQ-E;w-E;wO#-oQ!LdO1G0iOOQ!LS1G0i1G0iO#/qQ!LdO1G0|O#0bQpO,5;oO#0gQpO,5;pO#0lQpO'#FWO#1QQWO'#FVOOQO'#JU'#JUOOQO'#Hw'#HwO#1VQpO1G1XOOQ!LS1G1X1G1XOOOO1G1b1G1bO#1eQ7^O'#IqO#1oQWO,5;yOLRQYO,5;yOOOO-E;v-E;vOOQ!LS1G1U1G1UOOQ!LS,5;{,5;{O#1tQpO,5;{OOQ!LS,59`,59`OH}QWO'#InOOOS'#Hm'#HmO#1yOSO,59dOOQ!LS,59d,59dO){QYO1G1hO!(eQWO'#H{O#2UQWO,5<aOOQ!LS,5<^,5<^OOQO'#GR'#GROJ^QWO,5<lOOQO'#GT'#GTOJ^QWO,5<nOJ^QWO,5<pOOQO1G1j1G1jO#2aQ`O'#CoO#2tQ`O,5<YO#2{QWO'#JXO5qQWO'#JXO#3ZQWO,5<[OJ^QWO,5<ZO#3`Q`O'#FmO#3mQ`O'#JYO#3wQWO'#JYOH}QWO'#JYO#3|QWO,5<_OOQ!LQ'#Dc'#DcO#4RQWO'#FpO#4^QpO'#FxO!&qQ&jO'#FxO!&qQ&jO'#FzO#4oQWO'#F{O!(jQWO'#GOOOQO'#H}'#H}O#4tQ&jO,5<cOOQ!LS,5<c,5<cO#4{Q&jO'#FxO#5ZQ&jO'#FyO#5cQ&jO'#FyOOQ!LS,5<q,5<qOJ^QWO,5?VOJ^QWO,5?VO#5hQWO'#IOO#5sQWO,5?UOOQ!LS'#Cg'#CgO#6gQ#tO,59gOOQ!LS,59g,59gO#7YQ#tO,5<QO#7{Q#tO,5<SO#8VQWO,5<UOOQ!LS,5<V,5<VO#8[QWO,5<]O#8aQ#tO,5<bOF}QYO1G1iO#8qQWO1G1iOOQQ1G3p1G3pOOQ!LS1G/l1G/lONRQWO1G/lOOQQ1G2^1G2^OH}QWO1G2^O){QYO1G2^OH}QWO1G2^O#8vQWO1G2^O#9UQWO,59[O#:_QWO'#ESOOQ!LQ,5?R,5?RO#:iQ!LYO,5?ROOQQ1G.r1G.rO:^QWO1G.rO!,lQpO1G.rO!,tQ#tO1G.rO#:wQWO1G0^O#:|QWO'#CgO#;XQWO'#JaO#;aQWO,5=`O#;fQWO'#JaO#;kQWO'#JaO#;pQWO'#IWO#<OQWO,5?zO#<WQbO1G1ROOQ!LS1G1T1G1TO5qQWO1G2yO#<_QWO1G2yO#<dQWO1G2yO#<iQWO1G2yOOQQ1G2y1G2yO#<nQ#tO1G2^O7VQWO'#JOO7VQWO'#E]O7VQWO'#IQO#=PQ!LYO,5?wOOQQ1G2b1G2bO!/mQWO1G2hOH}QWO1G2eO#=[QWO1G2eOOQQ1G2f1G2fOH}QWO1G2fO#=aQWO1G2fO#=iQ&jO'#GdOOQQ1G2h1G2hO!&qQ&jO'#ISO!/rQ`O1G2kOOQQ1G2k1G2kOOQQ,5=U,5=UO#=qQ#tO,5=WO5qQWO,5=WO#4oQWO,5=ZO5_QWO,5=ZO!,lQpO,5=ZO!,tQ#tO,5=ZO5vQ#tO,5=ZO#>SQWO'#J_O#>_QWO,5=[OOQQ1G.i1G.iO#>dQ!LYO1G.iO#>oQWO1G.iO!(ZQWO1G.iO5iQ!LYO1G.iO#>tQbO,5?|O#?OQWO,5?|O#?ZQYO,5=cO#?bQWO,5=cO7VQWO,5?|OOQQ1G2{1G2{O`QYO1G2{OOQQ1G3R1G3ROOQQ1G3T1G3TO:XQWO1G3VO#?gQYO1G3XO#CbQYO'#HWOOQQ1G3[1G3[O:^QWO1G3bO#CoQWO1G3bO5iQ!LYO1G3fOOQQ1G3h1G3hOOQ!LQ'#Ft'#FtO5iQ!LYO1G3jO5iQ!LYO1G3lOOOS1G4y1G4yO#CwQ`O,5<PO#DPQbO1G3uO#DZQWO1G4zO#DcQWO1G5UO#DkQWO,5?bOLRQYO,5:wO7VQWO,5:wO:^QWO,59yOLRQYO,59yO!,lQpO,59yO#DpQ7^O,59yOOQO,5:w,5:wO#DzQ&jO'#HpO#EbQWO,5?aOOQ!LS1G/d1G/dO#EjQ&jO'#HuO#FOQWO,5?lOOQ!LQ1G0b1G0bO!:eQ&jO,59yO#FWQbO1G5VOOQO,5>`,5>`O7VQWO,5>`OOQO-E;r-E;rOOQ!LQ'#EO'#EOO#FbQ!LrO'#EPO!?bQ&jO'#DyOOQO'#Hs'#HsO#F|Q&jO,5:dOOQ!LS,5:d,5:dO#GTQ&jO'#DyO#GfQ&jO'#DyO#GmQ&jO'#EUO#GpQ&jO'#EPO#G}Q&jO'#EPO!?bQ&jO'#EPO#HbQWO1G/{O#HgQ`O1G/{OOQ!LS1G/{1G/{O){QYO1G/{OH}QWO1G/{OOQ!LS1G0]1G0]O:^QWO1G0]O!,lQpO1G0]O!,tQ#tO1G0]O#HnQ!LdO1G5SO){QYO1G5SO#IOQ!LYO1G5SO#IaQWO1G5RO7VQWO,5>bOOQO,5>b,5>bO#IiQWO,5>bOOQO-E;t-E;tO#IaQWO1G5RO#IwQ!LdO,59gO#KvQ!LdO,5<QO#MxQ!LdO,5<SO$ zQ!LdO,5<bOOQ!LS7+%x7+%xO$$SQ!LdO7+%xO$$sQWO'#HqO$$}QWO,5?cOOQ!LS1G/n1G/nO$%VQYO'#HrO$%dQWO,5?dO$%lQbO,5?dOOQ!LS1G/s1G/sOOQ!LS7+&R7+&RO$%vQ7^O,5:YO){QYO7+&eO$&QQ7^O,5:QOOQO1G1Z1G1ZOOQO1G1[1G1[O$&_QMhO,5;rOLRQYO,5;qOOQO-E;u-E;uOOQ!LS7+&s7+&sOOOO7+&|7+&|OOOO1G1e1G1eO$&jQWO1G1eOOQ!LS1G1g1G1gO$&oQ`O,5?YOOOS-E;k-E;kOOQ!LS1G/O1G/OO$&vQ!LdO7+'SOOQ!LS,5>g,5>gO$'gQWO,5>gOOQ!LS1G1{1G1{P$'lQWO'#H{POQ!LS-E;y-E;yO$(]Q#tO1G2WO$)OQ#tO1G2YO$)YQ#tO1G2[OOQ!LS1G1t1G1tO$)aQWO'#HzO$)oQWO,5?sO$)oQWO,5?sO$)wQWO,5?sO$*SQWO,5?sOOQO1G1v1G1vO$*bQ#tO1G1uO$*rQWO'#H|O$+SQWO,5?tOH}QWO,5?tO$+[Q`O,5?tOOQ!LS1G1y1G1yO5iQ!LYO,5<dO5iQ!LYO,5<eO$+fQWO,5<eO#4jQWO,5<eO!,lQpO,5<dO$+kQWO,5<fO5iQ!LYO,5<gO$+fQWO,5<jOOQO-E;{-E;{OOQ!LS1G1}1G1}O!&qQ&jO,5<dO$+sQWO,5<eO!&qQ&jO,5<fO!&qQ&jO,5<eO$,OQ#tO1G4qO$,YQ#tO1G4qOOQO,5>j,5>jOOQO-E;|-E;|O!-lQ&jO,59iO){QYO,59iO$,gQWO1G1pOJ^QWO1G1wO$,lQ!LdO7+'TOOQ!LS7+'T7+'TOF}QYO7+'TOOQ!LS7+%W7+%WO$-]Q`O'#JZO#HbQWO7+'xO$-gQWO7+'xO$-oQ`O7+'xOOQQ7+'x7+'xOH}QWO7+'xO){QYO7+'xOH}QWO7+'xOOQO1G.v1G.vO$-yQ!LbO'#CgO$.ZQ!LbO,5<hO$.xQWO,5<hOOQ!LQ1G4m1G4mOOQQ7+$^7+$^O:^QWO7+$^O!,lQpO7+$^OF}QYO7+%xO$.}QWO'#IVO$/]QWO,5?{OOQO1G2z1G2zO5qQWO,5?{O$/]QWO,5?{O$/eQWO,5?{OOQO,5>r,5>rOOQO-E<U-E<UOOQ!LS7+&m7+&mO$/jQWO7+(eO5iQ!LYO7+(eO5qQWO7+(eO$/oQWO7+(eO$/tQWO7+'xOOQ!LQ,5>l,5>lOOQ!LQ-E<O-E<OOOQQ7+(S7+(SO$0SQ!LbO7+(POH}QWO7+(PO$0^Q`O7+(QOOQQ7+(Q7+(QOH}QWO7+(QO$0eQWO'#J^O$0pQWO,5=OOOQO,5>n,5>nOOQO-E<Q-E<QOOQQ7+(V7+(VO$1jQ&jO'#GmOOQQ1G2r1G2rOH}QWO1G2rO){QYO1G2rOH}QWO1G2rO$1qQWO1G2rO$2PQ#tO1G2rO5iQ!LYO1G2uO#4oQWO1G2uO5_QWO1G2uO!,lQpO1G2uO!,tQ#tO1G2uO$2bQWO'#IUO$2mQWO,5?yO$2uQ&jO,5?yOOQ!LQ1G2v1G2vOOQQ7+$T7+$TO$2zQWO7+$TO5iQ!LYO7+$TO$3PQWO7+$TO){QYO1G5hO){QYO1G5iO$3UQYO1G2}O$3]QWO1G2}O$3bQYO1G2}O$3iQ!LYO1G5hOOQQ7+(g7+(gO5iQ!LYO7+(qO`QYO7+(sOOQQ'#Jd'#JdOOQQ'#IX'#IXO$3sQYO,5=rOOQQ,5=r,5=rO){QYO'#HXO$4QQWO'#HZOOQQ7+(|7+(|O$4VQYO7+(|O7VQWO7+(|OOQQ7+)Q7+)QOOQQ7+)U7+)UOOQQ7+)W7+)WOOQO1G4|1G4|O$8TQ7^O1G0cO$8_QWO1G0cOOQO1G/e1G/eO$8jQ7^O1G/eO:^QWO1G/eOLRQYO'#D_OOQO,5>[,5>[OOQO-E;n-E;nOOQO,5>a,5>aOOQO-E;s-E;sO!,lQpO1G/eOOQO1G3z1G3zO:^QWO,5:eOOQO,5:k,5:kO){QYO,5:kO$8tQ!LYO,5:kO$9PQ!LYO,5:kO!,lQpO,5:eOOQO-E;q-E;qOOQ!LS1G0O1G0OO!?bQ&jO,5:eO$9_Q&jO,5:eO$9pQ!LrO,5:kO$:[Q&jO,5:eO!?bQ&jO,5:kOOQO,5:p,5:pO$:cQ&jO,5:kO$:pQ!LYO,5:kOOQ!LS7+%g7+%gO#HbQWO7+%gO#HgQ`O7+%gOOQ!LS7+%w7+%wO:^QWO7+%wO!,lQpO7+%wO$;UQ!LdO7+*nO){QYO7+*nOOQO1G3|1G3|O7VQWO1G3|O$;fQWO7+*mO$;nQ!LdO1G2WO$=pQ!LdO1G2YO$?rQ!LdO1G1uO$AzQ#tO,5>]OOQO-E;o-E;oO$BUQbO,5>^O){QYO,5>^OOQO-E;p-E;pO$B`QWO1G5OO$BhQ7^O1G0^O$DoQ7^O1G0iO$DvQ7^O1G0iO$FwQ7^O1G0iO$GOQ7^O1G0iO$HsQ7^O1G0iO$IWQ7^O1G0iO$KeQ7^O1G0iO$KlQ7^O1G0iO$MmQ7^O1G0iO$MtQ7^O1G0iO% iQ7^O1G0iO% |Q!LdO<<JPO%!mQ7^O1G0iO%$]Q7^O'#IlO%&YQ7^O1G0|OLRQYO'#FYOOQO'#JV'#JVOOQO1G1^1G1^O%&gQWO1G1]O%&lQ7^O,5>eOOOO7+'P7+'POOOS1G4t1G4tOOQ!LS1G4R1G4ROJ^QWO7+'vO%&vQWO,5>fO5qQWO,5>fOOQO-E;x-E;xO%'UQWO1G5_O%'UQWO1G5_O%'^QWO1G5_O%'iQ`O,5>hO%'sQWO,5>hOH}QWO,5>hOOQO-E;z-E;zO%'xQ`O1G5`O%(SQWO1G5`OOQO1G2O1G2OOOQO1G2P1G2PO5iQ!LYO1G2PO$+fQWO1G2PO5iQ!LYO1G2OO%([QWO1G2QOH}QWO1G2QOOQO1G2R1G2RO5iQ!LYO1G2UO!,lQpO1G2OO#4jQWO1G2PO%(aQWO1G2QO%(iQWO1G2POJ^QWO7+*]OOQ!LS1G/T1G/TO%(tQWO1G/TOOQ!LS7+'[7+'[O%(yQ#tO7+'cO%)ZQ!LdO<<JoOOQ!LS<<Jo<<JoOH}QWO'#IPO%)zQWO,5?uOOQQ<<Kd<<KdOH}QWO<<KdO#HbQWO<<KdO%*SQWO<<KdO%*[Q`O<<KdOH}QWO1G2SOOQQ<<Gx<<GxO:^QWO<<GxO%*fQ!LdO<<IdOOQ!LS<<Id<<IdOOQO,5>q,5>qO%+VQWO,5>qO#;kQWO,5>qOOQO-E<T-E<TO%+[QWO1G5gO%+[QWO1G5gO5qQWO1G5gO%+dQWO<<LPOOQQ<<LP<<LPO%+iQWO<<LPO5iQ!LYO<<LPO){QYO<<KdOH}QWO<<KdOOQQ<<Kk<<KkO$0SQ!LbO<<KkOOQQ<<Kl<<KlO$0^Q`O<<KlO%+nQ&jO'#IRO%+yQWO,5?xOLRQYO,5?xOOQQ1G2j1G2jO#FbQ!LrO'#EPO!?bQ&jO'#GnOOQO'#IT'#ITO%,RQ&jO,5=XOOQQ,5=X,5=XO%,YQ&jO'#EPO%,eQ&jO'#EPO%,|Q&jO'#EPO%-WQ&jO'#GnO%-iQWO7+(^O%-nQWO7+(^O%-vQ`O7+(^OOQQ7+(^7+(^OH}QWO7+(^O){QYO7+(^OH}QWO7+(^O%.QQWO7+(^OOQQ7+(a7+(aO5iQ!LYO7+(aO#4oQWO7+(aO5_QWO7+(aO!,lQpO7+(aO%.`QWO,5>pOOQO-E<S-E<SOOQO'#Gq'#GqO%.kQWO1G5eO5iQ!LYO<<GoOOQQ<<Go<<GoO%.sQWO<<GoO%.xQWO7++SO%.}QWO7++TOOQQ7+(i7+(iO%/SQWO7+(iO%/XQYO7+(iO%/`QWO7+(iO){QYO7++SO){QYO7++TOOQQ<<L]<<L]OOQQ<<L_<<L_OOQQ-E<V-E<VOOQQ1G3^1G3^O%/eQWO,5=sOOQQ,5=u,5=uO:^QWO<<LhO%/jQWO<<LhOLRQYO7+%}OOQO7+%P7+%PO%/oQ7^O1G5VO:^QWO7+%POOQO1G0P1G0PO%/yQ!LdO1G0VOOQO1G0V1G0VO){QYO1G0VO%0TQ!LYO1G0VO:^QWO1G0PO!,lQpO1G0PO!?bQ&jO1G0PO%0`Q!LYO1G0VO%0nQ&jO1G0PO%1PQ!LYO1G0VO%1eQ!LrO1G0VO%1oQ&jO1G0PO!?bQ&jO1G0VOOQ!LS<<IR<<IROOQ!LS<<Ic<<IcO:^QWO<<IcO%1vQ!LdO<<NYOOQO7+)h7+)hO%2WQ!LdO7+'cO%4`QbO1G3xO%4jQ7^O7+%xO%4wQ7^O,59gO%6tQ7^O,5<QO%8qQ7^O,5<SO%:nQ7^O,5<bO%<^Q7^O7+'SO%<kQ7^O7+'TO%<xQWO,5;tOOQO7+&w7+&wO%<}Q#tO<<KbOOQO1G4Q1G4QO%=_QWO1G4QO%=jQWO1G4QO%=xQWO7+*yO%=xQWO7+*yOH}QWO1G4SO%>QQ`O1G4SO%>[QWO7+*zOOQO7+'k7+'kO5iQ!LYO7+'kOOQO7+'j7+'jO$+fQWO7+'lO%>dQ`O7+'lOOQO7+'p7+'pO5iQ!LYO7+'jO$+fQWO7+'kO%>kQWO7+'lOH}QWO7+'lO#4jQWO7+'kO%>pQ#tO<<MwOOQ!LS7+$o7+$oO%>zQ`O,5>kOOQO-E;}-E;}O#HbQWOANAOOOQQANAOANAOOH}QWOANAOO%?UQ!LbO7+'nOOQQAN=dAN=dO5qQWO1G4]OOQO1G4]1G4]O%?cQWO1G4]O%?hQWO7++RO%?hQWO7++RO5iQ!LYOANAkO%?pQWOANAkOOQQANAkANAkO%?uQWOANAOO%?}Q`OANAOOOQQANAVANAVOOQQANAWANAWO%@XQWO,5>mOOQO-E<P-E<PO%@dQ7^O1G5dO#4oQWO,5=YO5_QWO,5=YO!,lQpO,5=YOOQO-E<R-E<ROOQQ1G2s1G2sO$9pQ!LrO,5:kO!?bQ&jO,5=YO%@nQ&jO,5=YO%APQ&jO,5:kOOQQ<<Kx<<KxOH}QWO<<KxO%-iQWO<<KxO%AZQWO<<KxO%AcQ`O<<KxO){QYO<<KxOH}QWO<<KxOOQQ<<K{<<K{O5iQ!LYO<<K{O#4oQWO<<K{O5_QWO<<K{O%AmQ&jO1G4[O%ArQWO7++POOQQAN=ZAN=ZO5iQ!LYOAN=ZOOQQ<<Nn<<NnOOQQ<<No<<NoOOQQ<<LT<<LTO%AzQWO<<LTO%BPQYO<<LTO%BWQWO<<NnO%B]QWO<<NoOOQQ1G3_1G3_OOQQANBSANBSO:^QWOANBSO%BbQ7^O<<IiOOQO<<Hk<<HkOOQO7+%q7+%qO%/yQ!LdO7+%qO){QYO7+%qOOQO7+%k7+%kO:^QWO7+%kO!,lQpO7+%kO%BlQ!LYO7+%qO!?bQ&jO7+%kO%BwQ!LYO7+%qO%CVQ&jO7+%kO%ChQ!LYO7+%qOOQ!LSAN>}AN>}O%C|Q!LdO<<KbO%FUQ7^O<<JPO%FcQ7^O1G1uO%HRQ7^O1G2WO%JOQ7^O1G2YO%K{Q7^O<<JoO%LYQ7^O<<IdOOQO1G1`1G1`OOQO7+)l7+)lO%LgQWO7+)lO%LrQWO<<NeO%LzQ`O7+)nOOQO<<KV<<KVO5iQ!LYO<<KWO$+fQWO<<KWOOQO<<KU<<KUO5iQ!LYO<<KVO%MUQ`O<<KWO$+fQWO<<KVOOQQG26jG26jO#HbQWOG26jOOQO7+)w7+)wO5qQWO7+)wO%M]QWO<<NmOOQQG27VG27VO5iQ!LYOG27VOH}QWOG26jOLRQYO1G4XO%MeQWO7++OO5iQ!LYO1G2tO#4oQWO1G2tO5_QWO1G2tO!,lQpO1G2tO!?bQ&jO1G2tO%1eQ!LrO1G0VO%MmQ&jO1G2tO%-iQWOANAdOOQQANAdANAdOH}QWOANAdO%NOQWOANAdO%NWQ`OANAdOOQQANAgANAgO5iQ!LYOANAgO#4oQWOANAgOOQO'#Gr'#GrOOQO7+)v7+)vOOQQG22uG22uOOQQANAoANAoO%NbQWOANAoOOQQANDYANDYOOQQANDZANDZO%NgQYOG27nOOQO<<I]<<I]O%/yQ!LdO<<I]OOQO<<IV<<IVO:^QWO<<IVO){QYO<<I]O!,lQpO<<IVO&$eQ!LYO<<I]O!?bQ&jO<<IVO&$pQ!LYO<<I]O&%OQ7^O7+'cOOQO<<MW<<MWOOQOAN@rAN@rO5iQ!LYOAN@rOOQOAN@qAN@qO$+fQWOAN@rO5iQ!LYOAN@qOOQQLD,ULD,UOOQO<<Mc<<McOOQQLD,qLD,qO#HbQWOLD,UO&&nQ7^O7+)sOOQO7+(`7+(`O5iQ!LYO7+(`O#4oQWO7+(`O5_QWO7+(`O!,lQpO7+(`O!?bQ&jO7+(`OOQQG27OG27OO%-iQWOG27OOH}QWOG27OOOQQG27RG27RO5iQ!LYOG27ROOQQG27ZG27ZO:^QWOLD-YOOQOAN>wAN>wOOQOAN>qAN>qO%/yQ!LdOAN>wO:^QWOAN>qO){QYOAN>wO!,lQpOAN>qO&&xQ!LYOAN>wO&'TQ7^O<<KbOOQOG26^G26^O5iQ!LYOG26^OOQOG26]G26]OOQQ!$( p!$( pOOQO<<Kz<<KzO5iQ!LYO<<KzO#4oQWO<<KzO5_QWO<<KzO!,lQpO<<KzOOQQLD,jLD,jO%-iQWOLD,jOOQQLD,mLD,mOOQQ!$(!t!$(!tOOQOG24cG24cOOQOG24]G24]O%/yQ!LdOG24cO:^QWOG24]O){QYOG24cOOQOLD+xLD+xOOQOANAfANAfO5iQ!LYOANAfO#4oQWOANAfO5_QWOANAfOOQQ!$(!U!$(!UOOQOLD)}LD)}OOQOLD)wLD)wO%/yQ!LdOLD)}OOQOG27QG27QO5iQ!LYOG27QO#4oQWOG27QOOQO!$'Mi!$'MiOOQOLD,lLD,lO5iQ!LYOLD,lOOQO!$(!W!$(!WOLRQYO'#DnO&(sQbO'#IqOLRQYO'#DfO&(zQ!LdO'#CgO&)eQbO'#CgO&)uQYO,5:rOLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO'#HyO&+uQWO,5<PO&-XQWO,5:}OLRQYO,5;bO!(ZQWO'#C{O!(ZQWO'#C{OH}QWO'#FfO&+}QWO'#FfOH}QWO'#FhO&+}QWO'#FhOH}QWO'#FvO&+}QWO'#FvOLRQYO,5?kO&)uQYO1G0^O&-`Q7^O'#CgOLRQYO1G1hOH}QWO,5<lO&+}QWO,5<lOH}QWO,5<nO&+}QWO,5<nOH}QWO,5<ZO&+}QWO,5<ZO&)uQYO1G1iOLRQYO7+&eOH}QWO1G1wO&+}QWO1G1wO&)uQYO7+'TO&)uQYO7+%xOH}QWO7+'vO&+}QWO7+'vO&-jQWO'#EWO&-oQWO'#EWO&-wQWO'#EvO&-|QWO'#EcO&.RQWO'#JPO&.^QWO'#I}O&.iQWO,5:rO&.nQ#tO,5;|O&.uQWO'#FoO&.zQWO'#FoO&/PQWO,5;}O&/XQWO,5:rO&/aQ7^O1G0yO&/hQWO,5<]O&/mQWO,5<]O&/rQWO1G1iO&/wQWO1G0^O&/|Q#tO1G2[O&0TQ#tO1G2[O4QQWO'#FdO5_QWO'#FcOBqQWO'#EVOLRQYO,5;_O!(jQWO'#FqO!(jQWO'#FqOJ^QWO,5<pOJ^QWO,5<p",
    stateData: "&1Q~O'TOS'UOSSOSTOS~OPTOQTOWyO]cO^hOanObmOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!PSO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!jlO#`sO#ppO#t^O${qO$}tO%PrO%QrO%TuO%VvO%YwO%ZwO%]xO%jzO%p{O%r|O%t}O%v!OO%y!PO&P!QO&T!RO&V!SO&X!TO&Z!UO&]!VO'WPO'aQO'mYO'zaO~OPZXYZX^ZXiZXrZXsZXuZX}ZX!]ZX!^ZX!`ZX!fZX!wZX#ScX#WZX#XZX#YZX#ZZX#[ZX#]ZX#^ZX#_ZX#aZX#cZX#eZX#fZX#kZX'RZX'aZX'nZX'uZX'vZX~O!X$hX~P$zO'O!XO'P!WO'Q!ZO~OPTOQTO]cOa!jOb!iOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!P!bO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!j!hO#p!kO#t^O'W![O'aQO'mYO'zaO~O|!`O}!]Oz'hPz'rP~P'dO!O!lO~P`OPTOQTO]cOa!jOb!iOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!P!bO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!j!hO#p!kO#t^O'W9VO'aQO'mYO'zaO~OPTOQTO]cOa!jOb!iOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!P!bO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!j!hO#p!kO#t^O'aQO'mYO'zaO~O|!qO#Q!tO#R!qO'W9WO!_'oP~P+{O#S!uO~O!X!vO#S!uO~OP#]OY#cOi#QOr!zOs!zOu!{O}#aO!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO#c#VO#e#XO#f#YO'aQO'n#ZO'u!|O'v!}O~O^'eX'R'eX!_'eXz'eX!P'eX$|'eX!X'eX~P.jO!w#dO#k#dOP'fXY'fX^'fXi'fXr'fXs'fXu'fX}'fX!]'fX!^'fX!`'fX!f'fX#W'fX#X'fX#Y'fX#Z'fX#['fX#]'fX#^'fX#a'fX#c'fX#e'fX#f'fX'a'fX'n'fX'u'fX'v'fX~O#_'fX'R'fXz'fX!_'fX'c'fX!P'fX$|'fX!X'fX~P0zO!w#dO~O#v#eO#}#iO~O!P#jO#t^O$Q#kO$S#mO~O]#pOg#}Oi#qOj#pOk#pOn$OOp$POu#wO!P#xO!Z$UO!`#uO#R$VO#p$SO$Z$QO$]$RO$`$TO'W#oO'a#rO'['^P~O!`$WO~O!X$YO~O^$ZO'R$ZO~O'W$_O~O!`$WO'W$_O'X$aO']$bO~Ob$hO!`$WO'W$_O~O#_#SO~O]$qOr$mO!P$jO!`$lO$}$pO'W$_O'X$aO[(SP~O!j$rO~Ou$sO!P$tO'W$_O~Ou$sO!P$tO%V$xO'W$_O~O'W$yO~O#`sO$}tO%PrO%QrO%TuO%VvO%YwO%ZwO~Oa%SOb%RO!j%PO${%QO%_%OO~P7uOa%VObmO!P%UO!jlO#`sO${qO%PrO%QrO%TuO%VvO%YwO%ZwO%]xO~O_%YO!w%]O$}%WO'X$aO~P8tO!`%^O!c%bO~O!`%cO~O!PSO~O^$ZO&}%kO'R$ZO~O^$ZO&}%nO'R$ZO~O^$ZO&}%pO'R$ZO~O'O!XO'P!WO'Q%tO~OPZXYZXiZXrZXsZXuZX}ZX}cX!]ZX!^ZX!`ZX!fZX!wZX!wcX#ScX#WZX#XZX#YZX#ZZX#[ZX#]ZX#^ZX#_ZX#aZX#cZX#eZX#fZX#kZX'aZX'nZX'uZX'vZX~OzZXzcX~P;aO|%vOz&cX}&cX~P){O}!]Oz'hX~OP#]OY#cOi#QOr!zOs!zOu!{O}!]O!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO#c#VO#e#XO#f#YO'aQO'n#ZO'u!|O'v!}O~Oz'hX~P>WOz%{O~Ou&OO!S&YO!T&RO!U&RO'X$aO~O]&POj&PO|&SO'd%|O!O'iP!O'tP~P@ZOz'qX}'qX!X'qX!_'qX'n'qX~O!w'qX#S!{X!O'qX~PASO!w&ZOz'sX}'sX~O}&[Oz'rX~Oz&^O~O!w#dO~PASOR&bO!P&_O!k&aO'W$_O~Ob&gO!`$WO'W$_O~Or$mO!`$lO~O!O&hO~P`Or!zOs!zOu!{O!^!xO!`!yO'aQOP!baY!bai!ba}!ba!]!ba!f!ba#W!ba#X!ba#Y!ba#Z!ba#[!ba#]!ba#^!ba#_!ba#a!ba#c!ba#e!ba#f!ba'n!ba'u!ba'v!ba~O^!ba'R!baz!ba!_!ba'c!ba!P!ba$|!ba!X!ba~PC]O!_&iO~O!X!vO!w&kO'n&jO}'pX^'pX'R'pX~O!_'pX~PEuO}&oO!_'oX~O!_&qO~Ou$sO!P$tO#R&rO'W$_O~OPTOQTO]cOa!jOb!iOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!PSO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!j!hO#p!kO#t^O'W9VO'aQO'mYO'zaO~O]#pOg#}Oi#qOj#pOk#pOn$OOp9iOu#wO!P#xO!Z:lO!`#uO#R9oO#p$SO$Z9kO$]9mO$`$TO'W&vO'a#rO~O#S&xO~O]#pOg#}Oi#qOj#pOk#pOn$OOp$POu#wO!P#xO!Z$UO!`#uO#R$VO#p$SO$Z$QO$]$RO$`$TO'W&vO'a#rO~O'['kP~PJ^O|&|O!_'lP~P){O'd'OO'mYO~OP9SOQ9SO]cOa:jOb!iOgcOi9SOjcOkcOn9SOp9SOuROwcOxcOycO!P!bO!Z9UO!`UO!c9SO!d9SO!e9SO!f9SO!g9SO!j!hO#p!kO#t^O'W'^O'aQO'mYO'z:hO~O!`!yO~O}#aO^$Xa'R$Xa!_$Xaz$Xa!P$Xa$|$Xa!X$Xa~O#`'eO~PH}O!X'gO!P'wX#s'wX#v'wX#}'wX~Or'hO~PNyOr'hO!P'wX#s'wX#v'wX#}'wX~O!P'jO#s'nO#v'iO#}'oO~O|'rO~PLRO#v#eO#}'uO~Or$aXu$aX!^$aX'n$aX'u$aX'v$aX~OReX}eX!weX'[eX'[$aX~P!!cOj'wO~O'O'yO'P'xO'Q'{O~Or'}Ou(OO'n#ZO'u(QO'v(SO~O'['|O~P!#lO'[(VO~O]#pOg#}Oi#qOj#pOk#pOn$OOp9iOu#wO!P#xO!Z:lO!`#uO#R9oO#p$SO$Z9kO$]9mO$`$TO'a#rO~O|(ZO'W(WO!_'{P~P!$ZO#S(]O~O|(aO'W(^Oz'|P~P!$ZO^(jOi(oOu(gO!S(mO!T(fO!U(fO!`(dO!t(nO$s(iO'X$aO'd(cO~O!O(lO~P!&RO!^!xOr'`Xu'`X'n'`X'u'`X'v'`X}'`X!w'`X~O'['`X#i'`X~P!&}OR(rO!w(qO}'_X'['_X~O}(sO'['^X~O'W(uO~O!`(zO~O'W&vO~O!`(dO~Ou$sO|!qO!P$tO#Q!tO#R!qO'W$_O!_'oP~O!X!vO#S)OO~OP#]OY#cOi#QOr!zOs!zOu!{O!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO#c#VO#e#XO#f#YO'aQO'n#ZO'u!|O'v!}O~O^!Ya}!Ya'R!Yaz!Ya!_!Ya'c!Ya!P!Ya$|!Ya!X!Ya~P!)`OR)WO!P&_O!k)VO$|)UO']$bO~O'W$yO'['^P~O!X)ZO!P'ZX^'ZX'R'ZX~O!`$WO']$bO~O!`$WO'W$_O']$bO~O!X!vO#S&xO~O$})gO'W)cO!O(TP~O})hO[(SX~O'd'OO~OY)lO~O[)mO~O!P$jO'W$_O'X$aO[(SP~Ou$sO|)rO!P$tO'W$_Oz'rP~O]&VOj&VO|)sO'd'OO!O'tP~O})tO^(PX'R(PX~O!w)xO']$bO~OR){O!P#xO']$bO~O!P)}O~Or*PO!PSO~O!j*UO~Ob*ZO~O'W(uO!O(RP~Ob$hO~O$}tO'W$yO~P8tOY*aO[*`O~OPTOQTO]cOanObmOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!jlO#t^O${qO'aQO'mYO'zaO~O!P!bO#p!kO'W9VO~P!0uO[*`O^$ZO'R$ZO~O^*eO#`*gO%P*gO%Q*gO~P){O!`%^O~O%p*lO~O!P*nO~O&Q*qO&R*pOP&OaQ&OaW&Oa]&Oa^&Oaa&Oab&Oag&Oai&Oaj&Oak&Oan&Oap&Oau&Oaw&Oax&Oay&Oa!P&Oa!Z&Oa!`&Oa!c&Oa!d&Oa!e&Oa!f&Oa!g&Oa!j&Oa#`&Oa#p&Oa#t&Oa${&Oa$}&Oa%P&Oa%Q&Oa%T&Oa%V&Oa%Y&Oa%Z&Oa%]&Oa%j&Oa%p&Oa%r&Oa%t&Oa%v&Oa%y&Oa&P&Oa&T&Oa&V&Oa&X&Oa&Z&Oa&]&Oa&|&Oa'W&Oa'a&Oa'm&Oa'z&Oa!O&Oa%w&Oa_&Oa%|&Oa~O'W*tO~O'c*wO~Oz&ca}&ca~P!)`O}!]Oz'ha~Oz'ha~P>WO}&[Oz'ra~O}tX}!VX!OtX!O!VX!XtX!X!VX!`!VX!wtX']!VX~O!X+OO!w*}O}#PX}'jX!O#PX!O'jX!X'jX!`'jX']'jX~O!X+QO!`$WO']$bO}!RX!O!RX~O]%}Oj%}Ou&OO'd(cO~OP9SOQ9SO]cOa:jOb!iOgcOi9SOjcOkcOn9SOp9SOuROwcOxcOycO!P!bO!Z9UO!`UO!c9SO!d9SO!e9SO!f9SO!g9SO!j!hO#p!kO#t^O'aQO'mYO'z:hO~O'W9sO~P!:sO}+UO!O'iX~O!O+WO~O!X+OO!w*}O}#PX!O#PX~O}+XO!O'tX~O!O+ZO~O]%}Oj%}Ou&OO'X$aO'd(cO~O!T+[O!U+[O~P!=qOu$sO|+_O!P$tO'W$_Oz&hX}&hX~O^+dO!S+gO!T+cO!U+cO!n+kO!o+iO!p+jO!q+hO!t+lO'X$aO'd(cO'm+aO~O!O+fO~P!>rOR+qO!P&_O!k+pO~O!w+wO}'pa!_'pa^'pa'R'pa~O!X!vO~P!?|O}&oO!_'oa~Ou$sO|+zO!P$tO#Q+|O#R+zO'W$_O}&jX!_&jX~O^!zi}!zi'R!ziz!zi!_!zi'c!zi!P!zi$|!zi!X!zi~P!)`O#S!va}!va!_!va!w!va!P!va^!va'R!vaz!va~P!#lO#S'`XP'`XY'`X^'`Xi'`Xs'`X!]'`X!`'`X!f'`X#W'`X#X'`X#Y'`X#Z'`X#['`X#]'`X#^'`X#_'`X#a'`X#c'`X#e'`X#f'`X'R'`X'a'`X!_'`Xz'`X!P'`X'c'`X$|'`X!X'`X~P!&}O},VO'['kX~P!#lO'[,XO~O},YO!_'lX~P!)`O!_,]O~Oz,^O~OP#]Or!zOs!zOu!{O!^!xO!`!yO!f#]O'aQOY#Vi^#Vii#Vi}#Vi!]#Vi#X#Vi#Y#Vi#Z#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi'R#Vi'n#Vi'u#Vi'v#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~O#W#Vi~P!EZO#W#OO~P!EZOP#]Or!zOs!zOu!{O!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO'aQOY#Vi^#Vi}#Vi!]#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi'R#Vi'n#Vi'u#Vi'v#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~Oi#Vi~P!GuOi#QO~P!GuOP#]Oi#QOr!zOs!zOu!{O!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO'aQO^#Vi}#Vi#a#Vi#c#Vi#e#Vi#f#Vi'R#Vi'n#Vi'u#Vi'v#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~OY#Vi!]#Vi#]#Vi#^#Vi#_#Vi~P!JaOY#cO!]#SO#]#SO#^#SO#_#SO~P!JaOP#]OY#cOi#QOr!zOs!zOu!{O!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO'aQO^#Vi}#Vi#c#Vi#e#Vi#f#Vi'R#Vi'n#Vi'v#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~O'u#Vi~P!MXO'u!|O~P!MXOP#]OY#cOi#QOr!zOs!zOu!{O!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO#c#VO'aQO'u!|O^#Vi}#Vi#e#Vi#f#Vi'R#Vi'n#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~O'v#Vi~P# sO'v!}O~P# sOP#]OY#cOi#QOr!zOs!zOu!{O!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO#c#VO#e#XO'aQO'u!|O'v!}O~O^#Vi}#Vi#f#Vi'R#Vi'n#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~P#$_OPZXYZXiZXrZXsZXuZX!]ZX!^ZX!`ZX!fZX!wZX#ScX#WZX#XZX#YZX#ZZX#[ZX#]ZX#^ZX#_ZX#aZX#cZX#eZX#fZX#kZX'aZX'nZX'uZX'vZX}ZX!OZX~O#iZX~P#&rOP#]OY9gOi9[Or!zOs!zOu!{O!]9^O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO#[9]O#]9^O#^9^O#_9^O#a9_O#c9aO#e9cO#f9dO'aQO'n#ZO'u!|O'v!}O~O#i,`O~P#(|OP'fXY'fXi'fXr'fXs'fXu'fX!]'fX!^'fX!`'fX!f'fX#W'fX#X'fX#Y'fX#Z'fX#['fX#]'fX#^'fX#a'fX#c'fX#e'fX#f'fX'a'fX'n'fX'u'fX'v'fX}'fX~O!w9hO#k9hO#_'fX#i'fX!O'fX~P#*wO^&ma}&ma'R&ma!_&ma'c&maz&ma!P&ma$|&ma!X&ma~P!)`OP#ViY#Vi^#Vii#Vis#Vi}#Vi!]#Vi!^#Vi!`#Vi!f#Vi#W#Vi#X#Vi#Y#Vi#Z#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi'R#Vi'a#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~P!#lO^#ji}#ji'R#jiz#ji!_#ji'c#ji!P#ji$|#ji!X#ji~P!)`O#v,bO~O#v,cO~O!X'gO!w,dO!P#zX#s#zX#v#zX#}#zX~O|,eO~O!P'jO#s,gO#v'iO#},hO~O}9eO!O'eX~P#(|O!O,iO~O#},kO~O'O'yO'P'xO'Q,nO~O],qOj,qOz,rO~O}cX!XcX!_cX!_$aX'ncX~P!!cO!_,xO~P!#lO},yO!X!vO'n&jO!_'{X~O!_-OO~Oz$aX}$aX!X$hX~P!!cO}-QOz'|X~P!#lO!X-SO~Oz-UO~O|(ZO'W$_O!_'{P~Oi-YO!X!vO!`$WO']$bO'n&jO~O!X)ZO~O!O-`O~P!&RO!T-aO!U-aO'X$aO'd(cO~Ou-cO'd(cO~O!t-dO~O'W$yO}&rX'[&rX~O}(sO'['^a~Or-iOs-iOu-jO'noa'uoa'voa}oa!woa~O'[oa#ioa~P#5{Or'}Ou(OO'n$Ya'u$Ya'v$Ya}$Ya!w$Ya~O'[$Ya#i$Ya~P#6qOr'}Ou(OO'n$[a'u$[a'v$[a}$[a!w$[a~O'[$[a#i$[a~P#7dO]-kO~O#S-lO~O'[$ja}$ja#i$ja!w$ja~P!#lO#S-oO~OR-xO!P&_O!k-wO$|-vO~O'[-yO~O]#pOi#qOj#pOk#pOn$OOp9iOu#wO!P#xO!Z:lO!`#uO#R9oO#p$SO$Z9kO$]9mO$`$TO'a#rO~Og-{O'W-zO~P#9ZO!X)ZO!P'Za^'Za'R'Za~O#S.RO~OYZX}cX!OcX~O}.SO!O(TX~O!O.UO~OY.VO~O'W)cO~O!P$jO'W$_O[&zX}&zX~O})hO[(Sa~O!_.[O~P!)`O].^O~OY._O~O[.`O~OR-xO!P&_O!k-wO$|-vO']$bO~O})tO^(Pa'R(Pa~O!w.fO~OR.iO!P#xO~O'd'OO!O(QP~OR.sO!P.oO!k.rO$|.qO']$bO~OY.}O}.{O!O(RX~O!O/OO~O[/QO^$ZO'R$ZO~O]/RO~O#_/TO%n/UO~P0zO!w#dO#_/TO%n/UO~O^/VO~P){O^/XO~O%w/]OP%uiQ%uiW%ui]%ui^%uia%uib%uig%uii%uij%uik%uin%uip%uiu%uiw%uix%uiy%ui!P%ui!Z%ui!`%ui!c%ui!d%ui!e%ui!f%ui!g%ui!j%ui#`%ui#p%ui#t%ui${%ui$}%ui%P%ui%Q%ui%T%ui%V%ui%Y%ui%Z%ui%]%ui%j%ui%p%ui%r%ui%t%ui%v%ui%y%ui&P%ui&T%ui&V%ui&X%ui&Z%ui&]%ui&|%ui'W%ui'a%ui'm%ui'z%ui!O%ui_%ui%|%ui~O_/cO!O/aO%|/bO~P`O!PSO!`/fO~O}#aO'c$Xa~Oz&ci}&ci~P!)`O}!]Oz'hi~O}&[Oz'ri~Oz/jO~O}!Ra!O!Ra~P#(|O]%}Oj%}O|/pO'd(cO}&dX!O&dX~P@ZO}+UO!O'ia~O]&VOj&VO|)sO'd'OO}&iX!O&iX~O}+XO!O'ta~Oz'si}'si~P!)`O^$ZO!X!vO!`$WO!f/{O!w/yO'R$ZO']$bO'n&jO~O!O0OO~P!>rO!T0PO!U0PO'X$aO'd(cO'm+aO~O!S0QO~P#GTO!PSO!S0QO!q0SO!t0TO~P#GTO!S0QO!o0VO!p0VO!q0SO!t0TO~P#GTO!P&_O~O!P&_O~P!#lO}'pi!_'pi^'pi'R'pi~P!)`O!w0`O}'pi!_'pi^'pi'R'pi~O}&oO!_'oi~Ou$sO!P$tO#R0bO'W$_O~O#SoaPoaYoa^oaioa!]oa!^oa!`oa!foa#Woa#Xoa#Yoa#Zoa#[oa#]oa#^oa#_oa#aoa#coa#eoa#foa'Roa'aoa!_oazoa!Poa'coa$|oa!Xoa~P#5{O#S$YaP$YaY$Ya^$Yai$Yas$Ya!]$Ya!^$Ya!`$Ya!f$Ya#W$Ya#X$Ya#Y$Ya#Z$Ya#[$Ya#]$Ya#^$Ya#_$Ya#a$Ya#c$Ya#e$Ya#f$Ya'R$Ya'a$Ya!_$Yaz$Ya!P$Ya'c$Ya$|$Ya!X$Ya~P#6qO#S$[aP$[aY$[a^$[ai$[as$[a!]$[a!^$[a!`$[a!f$[a#W$[a#X$[a#Y$[a#Z$[a#[$[a#]$[a#^$[a#_$[a#a$[a#c$[a#e$[a#f$[a'R$[a'a$[a!_$[az$[a!P$[a'c$[a$|$[a!X$[a~P#7dO#S$jaP$jaY$ja^$jai$jas$ja}$ja!]$ja!^$ja!`$ja!f$ja#W$ja#X$ja#Y$ja#Z$ja#[$ja#]$ja#^$ja#_$ja#a$ja#c$ja#e$ja#f$ja'R$ja'a$ja!_$jaz$ja!P$ja!w$ja'c$ja$|$ja!X$ja~P!#lO^!zq}!zq'R!zqz!zq!_!zq'c!zq!P!zq$|!zq!X!zq~P!)`O}&eX'[&eX~PJ^O},VO'['ka~O|0jO}&fX!_&fX~P){O},YO!_'la~O},YO!_'la~P!)`O#i!ba!O!ba~PC]O#i!Ya}!Ya!O!Ya~P#(|O!P0}O#t^O#{1OO~O!O1SO~O'c1TO~P!#lO^$Uq}$Uq'R$Uqz$Uq!_$Uq'c$Uq!P$Uq$|$Uq!X$Uq~P!)`Oz1UO~O],qOj,qO~Or'}Ou(OO'v(SO'n$ti'u$ti}$ti!w$ti~O'[$ti#i$ti~P$'tOr'}Ou(OO'n$vi'u$vi'v$vi}$vi!w$vi~O'[$vi#i$vi~P$(gO#i1VO~P!#lO|1XO'W$_O}&nX!_&nX~O},yO!_'{a~O},yO!X!vO!_'{a~O},yO!X!vO'n&jO!_'{a~O'[$ci}$ci#i$ci!w$ci~P!#lO|1`O'W(^Oz&pX}&pX~P!$ZO}-QOz'|a~O}-QOz'|a~P!#lO!X!vO~O!X!vO#_1jO~Oi1nO!X!vO'n&jO~O}'_i'['_i~P!#lO!w1qO}'_i'['_i~P!#lO!_1tO~O^$Vq}$Vq'R$Vqz$Vq!_$Vq'c$Vq!P$Vq$|$Vq!X$Vq~P!)`O}1xO!P'}X~P!#lO!P&_O$|1{O~O!P&_O$|1{O~P!#lO!P$aX$qZX^$aX'R$aX~P!!cO$q2POrfXufX!PfX'nfX'ufX'vfX^fX'RfX~O$q2PO~O$}2WO'W)cO}&yX!O&yX~O}.SO!O(Ta~OY2[O~O[2]O~O]2`O~OR2bO!P&_O!k2aO$|1{O~O^$ZO'R$ZO~P!#lO!P#xO~P!#lO}2gO!w2iO!O(QX~O!O2jO~Ou(gO!S2sO!T2lO!U2lO!n2rO!o2qO!p2qO!t2pO'X$aO'd(cO'm+aO~O!O2oO~P$0uOR2zO!P.oO!k2yO$|2xO~OR2zO!P.oO!k2yO$|2xO']$bO~O'W(uO}&xX!O&xX~O}.{O!O(Ra~O'd3TO~O]3VO~O[3XO~O!_3[O~P){O^3^O~O^3^O~P){O#_3`O%n3aO~PEuO_/cO!O3eO%|/bO~P`O!X3gO~O&R3hOP&OqQ&OqW&Oq]&Oq^&Oqa&Oqb&Oqg&Oqi&Oqj&Oqk&Oqn&Oqp&Oqu&Oqw&Oqx&Oqy&Oq!P&Oq!Z&Oq!`&Oq!c&Oq!d&Oq!e&Oq!f&Oq!g&Oq!j&Oq#`&Oq#p&Oq#t&Oq${&Oq$}&Oq%P&Oq%Q&Oq%T&Oq%V&Oq%Y&Oq%Z&Oq%]&Oq%j&Oq%p&Oq%r&Oq%t&Oq%v&Oq%y&Oq&P&Oq&T&Oq&V&Oq&X&Oq&Z&Oq&]&Oq&|&Oq'W&Oq'a&Oq'm&Oq'z&Oq!O&Oq%w&Oq_&Oq%|&Oq~O}#Pi!O#Pi~P#(|O!w3jO}#Pi!O#Pi~O}!Ri!O!Ri~P#(|O^$ZO!w3qO'R$ZO~O^$ZO!X!vO!w3qO'R$ZO~O!T3uO!U3uO'X$aO'd(cO'm+aO~O^$ZO!X!vO!`$WO!f3vO!w3qO'R$ZO']$bO'n&jO~O!S3wO~P$9_O!S3wO!q3zO!t3{O~P$9_O^$ZO!X!vO!f3vO!w3qO'R$ZO'n&jO~O}'pq!_'pq^'pq'R'pq~P!)`O}&oO!_'oq~O#S$tiP$tiY$ti^$tii$tis$ti!]$ti!^$ti!`$ti!f$ti#W$ti#X$ti#Y$ti#Z$ti#[$ti#]$ti#^$ti#_$ti#a$ti#c$ti#e$ti#f$ti'R$ti'a$ti!_$tiz$ti!P$ti'c$ti$|$ti!X$ti~P$'tO#S$viP$viY$vi^$vii$vis$vi!]$vi!^$vi!`$vi!f$vi#W$vi#X$vi#Y$vi#Z$vi#[$vi#]$vi#^$vi#_$vi#a$vi#c$vi#e$vi#f$vi'R$vi'a$vi!_$viz$vi!P$vi'c$vi$|$vi!X$vi~P$(gO#S$ciP$ciY$ci^$cii$cis$ci}$ci!]$ci!^$ci!`$ci!f$ci#W$ci#X$ci#Y$ci#Z$ci#[$ci#]$ci#^$ci#_$ci#a$ci#c$ci#e$ci#f$ci'R$ci'a$ci!_$ciz$ci!P$ci!w$ci'c$ci$|$ci!X$ci~P!#lO}&ea'[&ea~P!#lO}&fa!_&fa~P!)`O},YO!_'li~O#i!zi}!zi!O!zi~P#(|OP#]Or!zOs!zOu!{O!^!xO!`!yO!f#]O'aQOY#Vii#Vi!]#Vi#X#Vi#Y#Vi#Z#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi#i#Vi'n#Vi'u#Vi'v#Vi}#Vi!O#Vi~O#W#Vi~P$BuO#W9YO~P$BuOP#]Or!zOs!zOu!{O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO'aQOY#Vi!]#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi#i#Vi'n#Vi'u#Vi'v#Vi}#Vi!O#Vi~Oi#Vi~P$D}Oi9[O~P$D}OP#]Oi9[Or!zOs!zOu!{O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO#[9]O'aQO#a#Vi#c#Vi#e#Vi#f#Vi#i#Vi'n#Vi'u#Vi'v#Vi}#Vi!O#Vi~OY#Vi!]#Vi#]#Vi#^#Vi#_#Vi~P$GVOY9gO!]9^O#]9^O#^9^O#_9^O~P$GVOP#]OY9gOi9[Or!zOs!zOu!{O!]9^O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO#[9]O#]9^O#^9^O#_9^O#a9_O'aQO#c#Vi#e#Vi#f#Vi#i#Vi'n#Vi'v#Vi}#Vi!O#Vi~O'u#Vi~P$IkO'u!|O~P$IkOP#]OY9gOi9[Or!zOs!zOu!{O!]9^O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO#[9]O#]9^O#^9^O#_9^O#a9_O#c9aO'aQO'u!|O#e#Vi#f#Vi#i#Vi'n#Vi}#Vi!O#Vi~O'v#Vi~P$KsO'v!}O~P$KsOP#]OY9gOi9[Or!zOs!zOu!{O!]9^O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO#[9]O#]9^O#^9^O#_9^O#a9_O#c9aO#e9cO'aQO'u!|O'v!}O~O#f#Vi#i#Vi'n#Vi}#Vi!O#Vi~P$M{O^#gy}#gy'R#gyz#gy!_#gy'c#gy!P#gy$|#gy!X#gy~P!)`OP#ViY#Vii#Vis#Vi!]#Vi!^#Vi!`#Vi!f#Vi#W#Vi#X#Vi#Y#Vi#Z#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi#i#Vi'a#Vi}#Vi!O#Vi~P!#lO!^!xOP'`XY'`Xi'`Xr'`Xs'`Xu'`X!]'`X!`'`X!f'`X#W'`X#X'`X#Y'`X#Z'`X#['`X#]'`X#^'`X#_'`X#a'`X#c'`X#e'`X#f'`X#i'`X'a'`X'n'`X'u'`X'v'`X}'`X!O'`X~O#i#ji}#ji!O#ji~P#(|O!O4]O~O}&ma!O&ma~P#(|O!X!vO'n&jO}&na!_&na~O},yO!_'{i~O},yO!X!vO!_'{i~Oz&pa}&pa~P!#lO!X4dO~O}-QOz'|i~P!#lO}-QOz'|i~Oz4jO~O!X!vO#_4pO~Oi4qO!X!vO'n&jO~Oz4sO~O'[$eq}$eq#i$eq!w$eq~P!#lO^$Vy}$Vy'R$Vyz$Vy!_$Vy'c$Vy!P$Vy$|$Vy!X$Vy~P!)`O}1xO!P'}a~O!P&_O$|4xO~O!P&_O$|4xO~P!#lO^!zy}!zy'R!zyz!zy!_!zy'c!zy!P!zy$|!zy!X!zy~P!)`OY4{O~O}.SO!O(Ti~O]5QO~O[5RO~O'd'OO}&uX!O&uX~O}2gO!O(Qa~O!O5`O~P$0uOu-cO'd(cO'm+aO~O!S5cO!T5bO!U5bO!t0TO'X$aO'd(cO'm+aO~O!o5dO!p5dO~P%,eO!T5bO!U5bO'X$aO'd(cO'm+aO~O!P.oO~O!P.oO$|5fO~O!P.oO$|5fO~P!#lOR5kO!P.oO!k5jO$|5fO~OY5pO}&xa!O&xa~O}.{O!O(Ri~O]5sO~O!_5tO~O!_5uO~O!_5vO~O!_5vO~P){O^5xO~O!X5{O~O!_5}O~O}'si!O'si~P#(|O^$ZO'R$ZO~P!)`O^$ZO!w6SO'R$ZO~O^$ZO!X!vO!w6SO'R$ZO~O!T6XO!U6XO'X$aO'd(cO'm+aO~O^$ZO!X!vO!f6YO!w6SO'R$ZO'n&jO~O!`$WO']$bO~P%1PO!S6ZO~P%0nO}'py!_'py^'py'R'py~P!)`O#S$eqP$eqY$eq^$eqi$eqs$eq}$eq!]$eq!^$eq!`$eq!f$eq#W$eq#X$eq#Y$eq#Z$eq#[$eq#]$eq#^$eq#_$eq#a$eq#c$eq#e$eq#f$eq'R$eq'a$eq!_$eqz$eq!P$eq!w$eq'c$eq$|$eq!X$eq~P!#lO}&fi!_&fi~P!)`O#i!zq}!zq!O!zq~P#(|Or-iOs-iOu-jOPoaYoaioa!]oa!^oa!`oa!foa#Woa#Xoa#Yoa#Zoa#[oa#]oa#^oa#_oa#aoa#coa#eoa#foa#ioa'aoa'noa'uoa'voa}oa!Ooa~Or'}Ou(OOP$YaY$Yai$Yas$Ya!]$Ya!^$Ya!`$Ya!f$Ya#W$Ya#X$Ya#Y$Ya#Z$Ya#[$Ya#]$Ya#^$Ya#_$Ya#a$Ya#c$Ya#e$Ya#f$Ya#i$Ya'a$Ya'n$Ya'u$Ya'v$Ya}$Ya!O$Ya~Or'}Ou(OOP$[aY$[ai$[as$[a!]$[a!^$[a!`$[a!f$[a#W$[a#X$[a#Y$[a#Z$[a#[$[a#]$[a#^$[a#_$[a#a$[a#c$[a#e$[a#f$[a#i$[a'a$[a'n$[a'u$[a'v$[a}$[a!O$[a~OP$jaY$jai$jas$ja!]$ja!^$ja!`$ja!f$ja#W$ja#X$ja#Y$ja#Z$ja#[$ja#]$ja#^$ja#_$ja#a$ja#c$ja#e$ja#f$ja#i$ja'a$ja}$ja!O$ja~P!#lO#i$Uq}$Uq!O$Uq~P#(|O#i$Vq}$Vq!O$Vq~P#(|O!O6eO~O'[$xy}$xy#i$xy!w$xy~P!#lO!X!vO}&ni!_&ni~O!X!vO'n&jO}&ni!_&ni~O},yO!_'{q~Oz&pi}&pi~P!#lO}-QOz'|q~Oz6lO~P!#lOz6lO~O}'_y'['_y~P!#lO}&sa!P&sa~P!#lO!P$pq^$pq'R$pq~P!#lOY6tO~O}.SO!O(Tq~O]6wO~O!P&_O$|6xO~O!P&_O$|6xO~P!#lO!w6yO}&ua!O&ua~O}2gO!O(Qi~P#(|O!T7PO!U7PO'X$aO'd(cO'm+aO~O!S7RO!t3{O~P%@nO!P.oO$|7UO~O!P.oO$|7UO~P!#lO'd7[O~O}.{O!O(Rq~O!_7_O~O!_7_O~P){O!_7aO~O!_7bO~O}#Py!O#Py~P#(|O^$ZO!w7hO'R$ZO~O^$ZO!X!vO!w7hO'R$ZO~O!T7kO!U7kO'X$aO'd(cO'm+aO~O^$ZO!X!vO!f7lO!w7hO'R$ZO'n&jO~O#S$xyP$xyY$xy^$xyi$xys$xy}$xy!]$xy!^$xy!`$xy!f$xy#W$xy#X$xy#Y$xy#Z$xy#[$xy#]$xy#^$xy#_$xy#a$xy#c$xy#e$xy#f$xy'R$xy'a$xy!_$xyz$xy!P$xy!w$xy'c$xy$|$xy!X$xy~P!#lO#i#gy}#gy!O#gy~P#(|OP$ciY$cii$cis$ci!]$ci!^$ci!`$ci!f$ci#W$ci#X$ci#Y$ci#Z$ci#[$ci#]$ci#^$ci#_$ci#a$ci#c$ci#e$ci#f$ci#i$ci'a$ci}$ci!O$ci~P!#lOr'}Ou(OO'v(SOP$tiY$tii$tis$ti!]$ti!^$ti!`$ti!f$ti#W$ti#X$ti#Y$ti#Z$ti#[$ti#]$ti#^$ti#_$ti#a$ti#c$ti#e$ti#f$ti#i$ti'a$ti'n$ti'u$ti}$ti!O$ti~Or'}Ou(OOP$viY$vii$vis$vi!]$vi!^$vi!`$vi!f$vi#W$vi#X$vi#Y$vi#Z$vi#[$vi#]$vi#^$vi#_$vi#a$vi#c$vi#e$vi#f$vi#i$vi'a$vi'n$vi'u$vi'v$vi}$vi!O$vi~O#i$Vy}$Vy!O$Vy~P#(|O#i!zy}!zy!O!zy~P#(|O!X!vO}&nq!_&nq~O},yO!_'{y~Oz&pq}&pq~P!#lOz7rO~P!#lO}.SO!O(Ty~O}2gO!O(Qq~O!T8OO!U8OO'X$aO'd(cO'm+aO~O!P.oO$|8RO~O!P.oO$|8RO~P!#lO!_8UO~O&R8VOP&O!ZQ&O!ZW&O!Z]&O!Z^&O!Za&O!Zb&O!Zg&O!Zi&O!Zj&O!Zk&O!Zn&O!Zp&O!Zu&O!Zw&O!Zx&O!Zy&O!Z!P&O!Z!Z&O!Z!`&O!Z!c&O!Z!d&O!Z!e&O!Z!f&O!Z!g&O!Z!j&O!Z#`&O!Z#p&O!Z#t&O!Z${&O!Z$}&O!Z%P&O!Z%Q&O!Z%T&O!Z%V&O!Z%Y&O!Z%Z&O!Z%]&O!Z%j&O!Z%p&O!Z%r&O!Z%t&O!Z%v&O!Z%y&O!Z&P&O!Z&T&O!Z&V&O!Z&X&O!Z&Z&O!Z&]&O!Z&|&O!Z'W&O!Z'a&O!Z'm&O!Z'z&O!Z!O&O!Z%w&O!Z_&O!Z%|&O!Z~O^$ZO!w8[O'R$ZO~O^$ZO!X!vO!w8[O'R$ZO~OP$eqY$eqi$eqs$eq!]$eq!^$eq!`$eq!f$eq#W$eq#X$eq#Y$eq#Z$eq#[$eq#]$eq#^$eq#_$eq#a$eq#c$eq#e$eq#f$eq#i$eq'a$eq}$eq!O$eq~P!#lO}&uq!O&uq~P#(|O^$ZO!w8qO'R$ZO~OP$xyY$xyi$xys$xy!]$xy!^$xy!`$xy!f$xy#W$xy#X$xy#Y$xy#Z$xy#[$xy#]$xy#^$xy#_$xy#a$xy#c$xy#e$xy#f$xy#i$xy'a$xy}$xy!O$xy~P!#lO'c'eX~P.jO'cZXzZX!_ZX%nZX!PZX$|ZX!XZX~P$zO!XcX!_ZX!_cX'ncX~P;aOP9SOQ9SO]cOa:jOb!iOgcOi9SOjcOkcOn9SOp9SOuROwcOxcOycO!PSO!Z9UO!`UO!c9SO!d9SO!e9SO!f9SO!g9SO!j!hO#p!kO#t^O'W'^O'aQO'mYO'z:hO~O}9eO!O$Xa~O]#pOg#}Oi#qOj#pOk#pOn$OOp9jOu#wO!P#xO!Z:mO!`#uO#R9pO#p$SO$Z9lO$]9nO$`$TO'W&vO'a#rO~O#`'eO~P&+}O!OZX!OcX~P;aO#S9XO~O!X!vO#S9XO~O!w9hO~O#_9^O~O!w9qO}'sX!O'sX~O!w9hO}'qX!O'qX~O#S9rO~O'[9tO~P!#lO#S9yO~O#S9zO~O!X!vO#S9{O~O!X!vO#S9rO~O#i9|O~P#(|O#S9}O~O#S:OO~O#S:PO~O#S:QO~O#i:RO~P!#lO#i:SO~P!#lO#t~!^!n!p!q#Q#R'z$Z$]$`$q${$|$}%T%V%Y%Z%]%_~TS#t'z#Xy'T'U#v'T'W'd~",
    goto: "#Dk(XPPPPPPP(YP(jP*^PPPP-sPP.Y3j5^5qP5qPPP5q5qP5qP7_PP7dP7xPPPP<XPPPP<X>wPPP>}AYP<XPCsPPPPEk<XPPPPPGd<XPPJcK`PPPPKdL|PMUNVPK`<X<X!#^!&V!*v!*v!.TPPP!.[!1O<XPPPPPPPPPP!3sP!5UPP<X!6cP<XP<X<X<X<XP<X!8vPP!;mP!>`!>h!>l!>lP!;jP!>p!>pP!AcP!Ag<X<X!Am!D_5qP5qP5q5qP!Eb5q5q!GY5q!I[5q!J|5q5q!Kj!Md!Md!Mh!Md!MpP!MdP5q!Nl5q# v5q5q-sPPP##TPP##m##mP##mP#$S##mPP#$YP#$PP#$P#$lMQ#$P#%Z#%a#%d(Y#%g(YP#%n#%n#%nP(YP(YP(YP(YPP(YP#%t#%wP#%w(YPPP(YP(YP(YP(YP(YP(Y(Y#%{#&V#&]#&c#&q#&w#&}#'X#'_#'i#'o#'}#(T#(Z#(i#)O#*b#*p#*v#*|#+S#+Y#+d#+j#+p#+z#,^#,dPPPPPPPPP#,jPP#-^#1[PP#2r#2y#3RP#7_PP#7c#9v#?p#?t#?w#?z#@V#@YPP#@]#@a#AO#As#Aw#BZPP#B_#Be#BiP#Bl#Bp#Bs#Cc#Cy#DO#DR#DU#D[#D_#Dc#DgmhOSj}!m$Y%a%d%e%g*i*n/]/`Q$gmQ$npQ%XyS&R!b+UQ&f!iS(f#x(kQ)a$hQ)n$pQ*Y%RQ+[&YS+c&_+eQ+u&gQ-a(mQ.z*ZY0P+g+h+i+j+kS2l.o2nU3u0Q0S0VU5b2q2r2sS6X3w3zS7P5c5dQ7k6ZR8O7R$l[ORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8q!j'`#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kQ(v$PQ)f$jQ*[%UQ*c%^Q,P9iQ-|)ZQ.X)gQ/S*aQ2V.SQ3R.{Q4U9jR4}2WpeOSjy}!m$Y%W%a%d%e%g*i*n/]/`R*^%Y&WVOSTjkn}!S!W!]!j!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j$Y$l%Y%]%^%a%c%d%e%g%k%v&O&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:j:kW!cRU!`&SQ$`lQ$fmS$kp$pv$urs!q!t$W$s&[&o&r)r)s)t*g+O+_+z+|/f0bQ$}wQ&c!hQ&e!iS(Y#u(dS)`$g$hQ)d$jQ)q$rQ*T%PQ*X%RS+t&f&gQ,}(ZQ.Q)aQ.W)gQ.Y)hQ.])lQ.u*US.y*Y*ZQ0^+uQ1W,yQ2U.SQ2Y.VQ2_._Q3Q.zQ4a1XQ4|2WQ5P2[Q6s4{R7u6t!Y$dm!i$f$g$h&Q&e&f&g(e)`)a+R+b+t+u-Z.Q/u/|0R0^1m3t3y6V7i8]Q)X$`Q)y$zQ)|${Q*W%RQ.a)qQ.t*TU.x*X*Y*ZQ2{.uS3P.y.zQ5]2kQ5o3QS6}5^5aS7|7O7QQ8g7}R8v8hW#{a$b(s:hS$zt%WQ${uQ$|vR)w$x$V#za!v!x#c#u#w$Q$R$V&b'x(R(T(U(](a(q(r)U)W)Z)x){+q,V-Q-S-l-v-x.f.i.q.s1V1`1j1q1x1{2P2b2x2z4d4p4x5f5k6x7U8R9g9k9l9m9n9o9p9u9v9w9x9y9z9}:O:R:S:h:n:oV(w$P9i9jU&V!b$t+XQ'P!zQ)k$mQ.j)}Q1r-iR5X2g&YcORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:k$]#`Z!_!n$^%u%y&t&{'R'S'T'U'V'W'X'Y'Z'[']'_'b'f'p)j*y+S+]+v,U,[,_,a,o-m/k/n0_0i0m0n0o0p0q0r0s0t0u0v0w0x0y0|1R1v2S3l3o4P4S4T4Y4Z5Z6O6R6_6c6d7e7x8Y8o8z9T:a&ZcORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kQ&T!bR/q+UY%}!b&R&Y+U+[S(e#x(kS+b&_+eS-Z(f(mQ-[(gQ-b(nQ.l*PU/|+c+g+hU0R+i+j+kS0W+l2pQ1m-aQ1o-cQ1p-dS2k.o2nU3t0P0Q0SQ3x0TQ3y0VS5^2l2sS5a2q2rU6V3u3w3zQ6[3{S7O5b5cQ7Q5dS7i6X6ZS7}7P7RQ8]7kR8h8OlhOSj}!m$Y%a%d%e%g*i*n/]/`Q%i!QS&s!u9XQ)^$eQ*R$}Q*S%OQ+r&dS,T&x9rS-n)O9{Q.O)_Q.n*QQ/d*pQ/e*qQ/m+PQ0U+iQ0[+sS1w-o:PQ2Q.PS2T.R:QQ3k/oQ3n/wQ3}0]Q4z2RQ5|3hQ6P3mQ6T3sQ6]4OQ7c5}Q7f6UQ8X7gQ8l8VQ8n8ZR8y8p$W#_Z!_!n%u%y&t&{'R'S'T'U'V'W'X'Y'Z'[']'_'b'f'p)j*y+S+]+v,U,[,_,o-m/k/n0_0i0m0n0o0p0q0r0s0t0u0v0w0x0y0|1R1v2S3l3o4P4S4T4Y4Z5Z6O6R6_6c6d7e7x8Y8o8z9T:aU(p#y&w0{T)S$^,a$W#^Z!_!n%u%y&t&{'R'S'T'U'V'W'X'Y'Z'[']'_'b'f'p)j*y+S+]+v,U,[,_,o-m/k/n0_0i0m0n0o0p0q0r0s0t0u0v0w0x0y0|1R1v2S3l3o4P4S4T4Y4Z5Z6O6R6_6c6d7e7x8Y8o8z9T:aQ'a#_S)R$^,aR-p)S&YcORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kQ%d{Q%e|Q%g!OQ%h!PR/[*lQ&`!hQ)T$`Q+o&cS-u)X)qS0X+m+nW1z-r-s-t.aS3|0Y0ZU4w1|1}2OU6q4v5T5UQ7t6rR8c7wT+d&_+eS+b&_+eU/|+c+g+hU0R+i+j+kS0W+l2pS2k.o2nU3t0P0Q0SQ3x0TQ3y0VS5^2l2sS5a2q2rU6V3u3w3zQ6[3{S7O5b5cQ7Q5dS7i6X6ZS7}7P7RQ8]7kR8h8OS+d&_+eT2m.o2nS&m!p/YQ,|(YQ-X(eS/{+b2kQ1],}S1g-Y-bU3v0R0W5aQ4`1WS4n1n1pU6Y3x3y7QQ6g4aQ6p4qR7l6[Q!wXS&l!p/YQ)P$XQ)[$cQ)b$iQ+x&mQ,{(YQ-W(eQ-](hQ-})]Q.v*VS/z+b2kS1[,|,}S1f-X-bQ1i-[Q1l-^Q2}.wW3r/{0R0W5aQ4_1WQ4c1]S4h1g1pQ4o1oQ5m3OW6W3v3x3y7QS6f4`4aQ6k4jQ6n4nQ6{5[Q7Y5nS7j6Y6[Q7n6gQ7p6lQ7s6pQ7z6|Q8T7ZQ8^7lQ8a7rQ8e7{Q8t8fQ8|8uQ9Q8}Q:Z:UQ:d:_R:e:`$nWORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%^%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8qS!wn!j!j:T#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kR:Z:j$nXORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%^%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8qQ$Xb!Y$cm!i$f$g$h&Q&e&f&g(e)`)a+R+b+t+u-Z.Q/u/|0R0^1m3t3y6V7i8]S$in!jQ)]$dQ*V%RW.w*W*X*Y*ZU3O.x.y.zQ5[2kS5n3P3QU6|5]5^5aQ7Z5oU7{6}7O7QS8f7|7}S8u8g8hQ8}8v!j:U#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kQ:_:iR:`:j$f]OSTjk}!S!W!]!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8qU!gRU!`v$urs!q!t$W$s&[&o&r)r)s)t*g+O+_+z+|/f0bQ*d%^!h:V#[#j'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kR:Y&SS&W!b$tR/s+X$l[ORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8q!j'`#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kR*c%^$noORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%^%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8qQ'P!z!k:W#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:k!h#UZ!_$^%u%y&t&{'Y'Z'[']'b'f)j*y+]+v,U,[,o-m0_0i0y1v2S3o4P4S6R7e8Y8o8z9T!R9`'_'p+S,a/k/n0m0u0v0w0x0|1R3l4T4Y4Z5Z6O6_6c6d7x:a!d#WZ!_$^%u%y&t&{'[']'b'f)j*y+]+v,U,[,o-m0_0i0y1v2S3o4P4S6R7e8Y8o8z9T}9b'_'p+S,a/k/n0m0w0x0|1R3l4T4Y4Z5Z6O6_6c6d7x:a!`#[Z!_$^%u%y&t&{'b'f)j*y+]+v,U,[,o-m0_0i0y1v2S3o4P4S6R7e8Y8o8z9Tl(U#s&y(},w-P-e-f0g1u4^4r:[:f:gx:k'_'p+S,a/k/n0m0|1R3l4T4Y4Z5Z6O6_6c6d7x:a!`:n&u'd(X(_+n,S,l-T-q-t.e.g0Z0f1^1b2O2d2f2v4R4e4k4t4y5U5i6^6i6o7WZ:o0z4X6`7m8_&YcORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kS#k`#lR1O,d&a_ORSTU`jk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j#l$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,d,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kS#f^#mT'i#h'mT#g^#mT'k#h'm&a`ORSTU`jk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j#l$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,d,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kT#k`#lQ#n`R't#l$nbORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%^%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8q!k:i#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:k#RdOSUj}!S!W!m!{#j$Y%Y%]%^%a%c%d%e%g%k&O&a'r)V*e*i*n+p,e-j-w.r/T/U/V/X/]/`/b0}2a2y3^3`3a5j5xt#ya!x$Q$R$V(R(T(U(](q(r,V-l1V1q:h:n:o!|&w!v#c#u#w&b'x(a)U)W)Z)x){+q-Q-S-v-x.f.i.q.s1`1j1x1{2P2b2x2z4d4p4x5f5k6x7U8R9k9m9o9u9w9y9}:RQ({$TQ,p'}c0{9g9l9n9p9v9x9z:O:St#va!x$Q$R$V(R(T(U(](q(r,V-l1V1q:h:n:oS(h#x(kQ(|$UQ-^(i!|:]!v#c#u#w&b'x(a)U)W)Z)x){+q-Q-S-v-x.f.i.q.s1`1j1x1{2P2b2x2z4d4p4x5f5k6x7U8R9k9m9o9u9w9y9}:Rb:^9g9l9n9p9v9x9z:O:SQ:b:lR:c:mt#ya!x$Q$R$V(R(T(U(](q(r,V-l1V1q:h:n:o!|&w!v#c#u#w&b'x(a)U)W)Z)x){+q-Q-S-v-x.f.i.q.s1`1j1x1{2P2b2x2z4d4p4x5f5k6x7U8R9k9m9o9u9w9y9}:Rc0{9g9l9n9p9v9x9z:O:SlfOSj}!m$Y%a%d%e%g*i*n/]/`Q(`#wQ*u%nQ*v%pR1_-Q$U#za!v!x#c#u#w$Q$R$V&b'x(R(T(U(](a(q(r)U)W)Z)x){+q,V-Q-S-l-v-x.f.i.q.s1V1`1j1q1x1{2P2b2x2z4d4p4x5f5k6x7U8R9g9k9l9m9n9o9p9u9v9w9x9y9z9}:O:R:S:h:n:oQ)z${Q.h)|Q2e.gR5W2fT(j#x(kS(j#x(kT2m.o2nQ)[$cQ-](hQ-})]Q.v*VQ2}.wQ5m3OQ6{5[Q7Y5nQ7z6|Q8T7ZQ8e7{Q8t8fQ8|8uR9Q8}l(R#s&y(},w-P-e-f0g1u4^4r:[:f:g!`9u&u'd(X(_+n,S,l-T-q-t.e.g0Z0f1^1b2O2d2f2v4R4e4k4t4y5U5i6^6i6o7WZ9v0z4X6`7m8_n(T#s&y(},u,w-P-e-f0g1u4^4r:[:f:g!b9w&u'd(X(_+n,S,l-T-q-t.e.g0Z0d0f1^1b2O2d2f2v4R4e4k4t4y5U5i6^6i6o7W]9x0z4X6`6a7m8_peOSjy}!m$Y%W%a%d%e%g*i*n/]/`Q%TxR*e%^peOSjy}!m$Y%W%a%d%e%g*i*n/]/`R%TxQ*O$|R.d)wqeOSjy}!m$Y%W%a%d%e%g*i*n/]/`Q.p*TS2w.t.uW5e2t2u2v2{U7T5g5h5iU8P7S7V7WQ8i8QR8w8jQ%[yR*_%WR3U.}R7]5pS$kp$pR.Y)hQ%azR*i%bR*o%hT/^*n/`QjOQ!mST$]j!mQ'z#rR,m'zQ!YQR%s!YQ!^RU%w!^%x*zQ%x!_R*z%yQ+V&TR/r+VQ,W&yR0h,WQ,Z&{S0k,Z0lR0l,[Q+e&_R/}+eQ&]!eQ*{%zT+`&]*{Q+Y&WR/t+YQ&p!rQ+y&nU+}&p+y0cR0c,OQ'm#hR,f'mQ#l`R's#lQ#bZU'c#b*x9fQ*x9TR9f'pQ,z(YW1Y,z1Z4b6hU1Z,{,|,}S4b1[1]R6h4c#q(P#s&u&y'd(X(_(x(y(}+n,Q,R,S,l,u,v,w-P-T-e-f-q-t.e.g0Z0d0e0f0g0z1^1b1u2O2d2f2v4R4V4W4X4^4e4k4r4t4y5U5i6^6`6a6b6i6o7W7m8_:[:f:gQ-R(_U1a-R1c4fQ1c-TR4f1bQ(k#xR-_(kQ(t#|R-h(tQ1y-qR4u1yQ)u$vR.c)uQ2h.jS5Y2h6zR6z5ZQ*Q$}R.m*QQ2n.oR5_2nQ.|*[S3S.|5qR5q3UQ.T)dW2X.T2Z5O6uQ2Z.WQ5O2YR6u5PQ)i$kR.Z)iQ/`*nR3d/`WiOSj!mQ%f}Q)Q$YQ*h%aQ*j%dQ*k%eQ*m%gQ/Z*iS/^*n/`R3c/]Q$[gQ%j!RQ%m!TQ%o!UQ%q!VQ)p$qQ)v$wQ*^%[Q*s%lS/P*_*bQ/g*rQ/h*uQ/i*vS/x+b2kQ1d-VQ1e-WQ1k-]Q2^.^Q2c.eQ2|.vQ3W/RQ3b/[Y3p/z/{0R0W5aQ4g1fQ4i1hQ4l1lQ5S2`Q5V2dQ5l2}Q5r3V[6Q3o3r3v3x3y7QQ6j4hQ6m4mQ6v5QQ7X5mQ7^5sW7d6R6W6Y6[Q7o6kQ7q6nQ7v6wQ7y6{Q8S7YU8W7e7j7lQ8`7pQ8b7sQ8d7zQ8k8TS8m8Y8^Q8r8aQ8s8eQ8x8oQ8{8tQ9O8zQ9P8|R9R9QQ$emQ&d!iU)_$f$g$hQ+P&QU+s&e&f&gQ-V(eS.P)`)aQ/o+RQ/w+bS0]+t+uQ1h-ZQ2R.QQ3m/uS3s/|0RQ4O0^Q4m1mS6U3t3yQ7g6VQ8Z7iR8p8]S#ta:hR)Y$bU#|a$b:hR-g(sQ#saS&u!v)ZQ&y!xQ'd#cQ(X#uQ(_#wQ(x$QQ(y$RQ(}$VQ+n&bQ,Q9kQ,R9mQ,S9oQ,l'xQ,u(RQ,v(TQ,w(UQ-P(]Q-T(aQ-e(qQ-f(rd-q)U-v.q1{2x4x5f6x7U8RQ-t)WQ.e)xQ.g){Q0Z+qQ0d9uQ0e9wQ0f9yQ0g,VQ0z9gQ1^-QQ1b-SQ1u-lQ2O-xQ2d.fQ2f.iQ2v.sQ4R9}Q4V9lQ4W9nQ4X9pQ4^1VQ4e1`Q4k1jQ4r1qQ4t1xQ4y2PQ5U2bQ5i2zQ6^:RQ6`9zQ6a9vQ6b9xQ6i4dQ6o4pQ7W5kQ7m:OQ8_:SQ:[:hQ:f:nR:g:oT'y#r'zlgOSj}!m$Y%a%d%e%g*i*n/]/`S!oU%cQ%l!SQ%r!WQ'Q!{Q'q#jS*b%Y%]Q*f%^Q*r%kQ*|&OQ+m&aQ,j'rQ-s)VQ/W*eQ0Y+pQ1Q,eQ1s-jQ1}-wQ2u.rQ3Y/TQ3Z/UQ3]/VQ3_/XQ3f/bQ4[0}Q5T2aQ5h2yQ5w3^Q5y3`Q5z3aQ7V5jR7`5x!vZOSUj}!S!m!{$Y%Y%]%^%a%c%d%e%g%k&O&a)V*e*i*n+p-j-w.r/T/U/V/X/]/`/b2a2y3^3`3a5j5xQ!_RQ!nTQ$^kQ%u!]Q%y!`Q&t!uQ&{!yQ'R#OQ'S#PQ'T#QQ'U#RQ'V#SQ'W#TQ'X#UQ'Y#VQ'Z#WQ'[#XQ']#YQ'_#[Q'b#aQ'f#dW'p#j'r,e0}Q)j$lQ*y%vS+S&S/pQ+]&ZQ+v&kQ,U&xQ,[&|Q,_9SQ,a9UQ,o'|Q-m)OQ/k*}Q/n+QQ0_+wQ0i,YQ0m9XQ0n9YQ0o9ZQ0p9[Q0q9]Q0r9^Q0s9_Q0t9`Q0u9aQ0v9bQ0w9cQ0x9dQ0y,`Q0|9hQ1R9eQ1v-oQ2S.RQ3l9qQ3o/yQ4P0`Q4S0jQ4T9rQ4Y9tQ4Z9{Q5Z2iQ6O3jQ6R3qQ6_9|Q6c:PQ6d:QQ7e6SQ7x6yQ8Y7hQ8o8[Q8z8qQ9T!WR:a:kT!XQ!YR!aRR&U!bS&Q!b+US+R&R&YR/u+[R&z!xR&}!yT!sU$WS!rU$WU$vrs*gS&n!q!tQ+{&oQ,O&rQ.b)tS0a+z+|R4Q0b[!dR!`$s&[)r+_h!pUrs!q!t$W&o&r)t+z+|0bQ/Y*gQ/l+OQ3i/fT:X&S)sT!fR$sS!eR$sS%z!`)rS+T&S)sQ+^&[R/v+_T&X!b$tQ#h^R'v#mT'l#h'mR1P,dT([#u(dR(b#wQ-r)UQ1|-vQ2t.qQ4v1{Q5g2xQ6r4xQ7S5fQ7w6xQ8Q7UR8j8RlhOSj}!m$Y%a%d%e%g*i*n/]/`Q%ZyR*^%WV$wrs*gR.k)}R*]%UQ$opR)o$pR)e$jT%_z%bT%`z%bT/_*n/`",
    nodeNames: "\u26A0 ArithOp ArithOp extends LineComment BlockComment Script ExportDeclaration export Star as VariableName from String ; default FunctionDeclaration async function VariableDefinition TypeParamList TypeDefinition ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString null super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression await yield delete LogicOp BitOp ParenthesizedExpression ClassExpression class extends ClassBody MethodDeclaration Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression PrivatePropertyName BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody MethodDeclaration AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try catch finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement",
    maxTerm: 330,
    context: v93,
    nodeProps: [
        [
            y10.group,
            -26,
            7,
            14,
            16,
            54,
            180,
            184,
            187,
            188,
            190,
            193,
            196,
            207,
            209,
            215,
            217,
            219,
            221,
            224,
            230,
            234,
            236,
            238,
            240,
            242,
            244,
            245,
            "Statement",
            -30,
            11,
            13,
            23,
            26,
            27,
            38,
            39,
            40,
            41,
            43,
            48,
            56,
            64,
            70,
            71,
            87,
            88,
            97,
            99,
            115,
            118,
            120,
            121,
            122,
            123,
            125,
            126,
            144,
            145,
            147,
            "Expression",
            -22,
            22,
            24,
            28,
            29,
            31,
            148,
            150,
            152,
            153,
            155,
            156,
            157,
            159,
            160,
            161,
            163,
            164,
            165,
            174,
            176,
            178,
            179,
            "Type",
            -3,
            75,
            81,
            86,
            "ClassItem"
        ],
        [
            y10.closedBy,
            37,
            "]",
            47,
            "}",
            62,
            ")",
            128,
            "JSXSelfCloseEndTag JSXEndTag",
            142,
            "JSXEndTag"
        ],
        [
            y10.openedBy,
            42,
            "[",
            46,
            "{",
            61,
            "(",
            127,
            "JSXStartTag",
            137,
            "JSXStartTag JSXStartCloseTag"
        ]
    ],
    skippedNodes: [
        0,
        4,
        5
    ],
    repeatNodeCount: 28,
    tokenData: "!C}~R!`OX%TXY%cYZ'RZ[%c[]%T]^'R^p%Tpq%cqr'crs(kst0htu2`uv4pvw5ewx6cxy<yyz=Zz{=k{|>k|}?O}!O>k!O!P?`!P!QCl!Q!R!0[!R![!1q![!]!7s!]!^!8V!^!_!8g!_!`!9d!`!a!:[!a!b!<R!b!c%T!c!}2`!}#O!=d#O#P%T#P#Q!=t#Q#R!>U#R#S2`#S#T!>i#T#o2`#o#p!>y#p#q!?O#q#r!?f#r#s!?x#s$f%T$f$g%c$g#BY2`#BY#BZ!@Y#BZ$IS2`$IS$I_!@Y$I_$I|2`$I|$I}!Bq$I}$JO!Bq$JO$JT2`$JT$JU!@Y$JU$KV2`$KV$KW!@Y$KW&FU2`&FU&FV!@Y&FV?HT2`?HT?HU!@Y?HU~2`W%YR$QWO!^%T!_#o%T#p~%T,T%jg$QW'T+{OX%TXY%cYZ%TZ[%c[p%Tpq%cq!^%T!_#o%T#p$f%T$f$g%c$g#BY%T#BY#BZ%c#BZ$IS%T$IS$I_%c$I_$JT%T$JT$JU%c$JU$KV%T$KV$KW%c$KW&FU%T&FU&FV%c&FV?HT%T?HT?HU%c?HU~%T,T'YR$QW'U+{O!^%T!_#o%T#p~%T$T'jS$QW!f#{O!^%T!_!`'v!`#o%T#p~%T$O'}S#a#v$QWO!^%T!_!`(Z!`#o%T#p~%T$O(bR#a#v$QWO!^%T!_#o%T#p~%T'u(rZ$QW]!ROY(kYZ)eZr(krs*rs!^(k!^!_+U!_#O(k#O#P-b#P#o(k#o#p+U#p~(k&r)jV$QWOr)ers*Ps!^)e!^!_*a!_#o)e#o#p*a#p~)e&r*WR#{&j$QWO!^%T!_#o%T#p~%T&j*dROr*ars*ms~*a&j*rO#{&j'u*{R#{&j$QW]!RO!^%T!_#o%T#p~%T'm+ZV]!ROY+UYZ*aZr+Urs+ps#O+U#O#P+w#P~+U'm+wO#{&j]!R'm+zROr+Urs,Ts~+U'm,[U#{&j]!ROY,nZr,nrs-Vs#O,n#O#P-[#P~,n!R,sU]!ROY,nZr,nrs-Vs#O,n#O#P-[#P~,n!R-[O]!R!R-_PO~,n'u-gV$QWOr(krs-|s!^(k!^!_+U!_#o(k#o#p+U#p~(k'u.VZ#{&j$QW]!ROY.xYZ%TZr.xrs/rs!^.x!^!_,n!_#O.x#O#P0S#P#o.x#o#p,n#p~.x!Z/PZ$QW]!ROY.xYZ%TZr.xrs/rs!^.x!^!_,n!_#O.x#O#P0S#P#o.x#o#p,n#p~.x!Z/yR$QW]!RO!^%T!_#o%T#p~%T!Z0XT$QWO!^.x!^!_,n!_#o.x#o#p,n#p~.xy0mZ$QWOt%Ttu1`u!^%T!_!c%T!c!}1`!}#R%T#R#S1`#S#T%T#T#o1`#p$g%T$g~1`y1g]$QW'mqOt%Ttu1`u!Q%T!Q![1`![!^%T!_!c%T!c!}1`!}#R%T#R#S1`#S#T%T#T#o1`#p$g%T$g~1`&i2k_$QW#vS'W%k'dpOt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$g%T$g~2`[3q_$QW#vSOt%Ttu3ju}%T}!O3j!O!Q%T!Q![3j![!^%T!_!c%T!c!}3j!}#R%T#R#S3j#S#T%T#T#o3j#p$g%T$g~3j$O4wS#Y#v$QWO!^%T!_!`5T!`#o%T#p~%T$O5[R$QW#k#vO!^%T!_#o%T#p~%T%r5lU'v%j$QWOv%Tvw6Ow!^%T!_!`5T!`#o%T#p~%T$O6VS$QW#e#vO!^%T!_!`5T!`#o%T#p~%T'u6jZ$QW]!ROY6cYZ7]Zw6cwx*rx!^6c!^!_8T!_#O6c#O#P:T#P#o6c#o#p8T#p~6c&r7bV$QWOw7]wx*Px!^7]!^!_7w!_#o7]#o#p7w#p~7]&j7zROw7wwx*mx~7w'm8YV]!ROY8TYZ7wZw8Twx+px#O8T#O#P8o#P~8T'm8rROw8Twx8{x~8T'm9SU#{&j]!ROY9fZw9fwx-Vx#O9f#O#P9}#P~9f!R9kU]!ROY9fZw9fwx-Vx#O9f#O#P9}#P~9f!R:QPO~9f'u:YV$QWOw6cwx:ox!^6c!^!_8T!_#o6c#o#p8T#p~6c'u:xZ#{&j$QW]!ROY;kYZ%TZw;kwx/rx!^;k!^!_9f!_#O;k#O#P<e#P#o;k#o#p9f#p~;k!Z;rZ$QW]!ROY;kYZ%TZw;kwx/rx!^;k!^!_9f!_#O;k#O#P<e#P#o;k#o#p9f#p~;k!Z<jT$QWO!^;k!^!_9f!_#o;k#o#p9f#p~;k%V=QR!`$}$QWO!^%T!_#o%T#p~%TZ=bR!_R$QWO!^%T!_#o%T#p~%T%R=tU'X!R#Z#v$QWOz%Tz{>W{!^%T!_!`5T!`#o%T#p~%T$O>_S#W#v$QWO!^%T!_!`5T!`#o%T#p~%T$u>rSi$m$QWO!^%T!_!`5T!`#o%T#p~%T&i?VR}&a$QWO!^%T!_#o%T#p~%T&i?gVr%n$QWO!O%T!O!P?|!P!Q%T!Q![@r![!^%T!_#o%T#p~%Ty@RT$QWO!O%T!O!P@b!P!^%T!_#o%T#p~%Ty@iR|q$QWO!^%T!_#o%T#p~%Ty@yZ$QWjqO!Q%T!Q![@r![!^%T!_!g%T!g!hAl!h#R%T#R#S@r#S#X%T#X#YAl#Y#o%T#p~%TyAqZ$QWO{%T{|Bd|}%T}!OBd!O!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%TyBiV$QWO!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%TyCVV$QWjqO!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%T,TCs`$QW#X#vOYDuYZ%TZzDuz{Jl{!PDu!P!Q!-e!Q!^Du!^!_Fx!_!`!.^!`!a!/]!a!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~DuXD|[$QWyPOYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~DuXEy_$QWyPO!^%T!_#Z%T#Z#[Er#[#]%T#]#^Er#^#a%T#a#bEr#b#g%T#g#hEr#h#i%T#i#jEr#j#m%T#m#nEr#n#o%T#p~%TPF}VyPOYFxZ!PFx!P!QGd!Q!}Fx!}#OG{#O#PHh#P~FxPGiUyP#Z#[Gd#]#^Gd#a#bGd#g#hGd#i#jGd#m#nGdPHOTOYG{Z#OG{#O#PH_#P#QFx#Q~G{PHbQOYG{Z~G{PHkQOYFxZ~FxXHvY$QWOYHqYZ%TZ!^Hq!^!_G{!_#OHq#O#PIf#P#QDu#Q#oHq#o#pG{#p~HqXIkV$QWOYHqYZ%TZ!^Hq!^!_G{!_#oHq#o#pG{#p~HqXJVV$QWOYDuYZ%TZ!^Du!^!_Fx!_#oDu#o#pFx#p~Du,TJs^$QWyPOYJlYZKoZzJlz{NQ{!PJl!P!Q!,R!Q!^Jl!^!_!!]!_!}Jl!}#O!'|#O#P!+a#P#oJl#o#p!!]#p~Jl,TKtV$QWOzKoz{LZ{!^Ko!^!_M]!_#oKo#o#pM]#p~Ko,TL`X$QWOzKoz{LZ{!PKo!P!QL{!Q!^Ko!^!_M]!_#oKo#o#pM]#p~Ko,TMSR$QWT+{O!^%T!_#o%T#p~%T+{M`ROzM]z{Mi{~M]+{MlTOzM]z{Mi{!PM]!P!QM{!Q~M]+{NQOT+{,TNX^$QWyPOYJlYZKoZzJlz{NQ{!PJl!P!Q! T!Q!^Jl!^!_!!]!_!}Jl!}#O!'|#O#P!+a#P#oJl#o#p!!]#p~Jl,T! ^_$QWT+{yPO!^%T!_#Z%T#Z#[Er#[#]%T#]#^Er#^#a%T#a#bEr#b#g%T#g#hEr#h#i%T#i#jEr#j#m%T#m#nEr#n#o%T#p~%T+{!!bYyPOY!!]YZM]Zz!!]z{!#Q{!P!!]!P!Q!&x!Q!}!!]!}#O!$`#O#P!&f#P~!!]+{!#VYyPOY!!]YZM]Zz!!]z{!#Q{!P!!]!P!Q!#u!Q!}!!]!}#O!$`#O#P!&f#P~!!]+{!#|UT+{yP#Z#[Gd#]#^Gd#a#bGd#g#hGd#i#jGd#m#nGd+{!$cWOY!$`YZM]Zz!$`z{!${{#O!$`#O#P!&S#P#Q!!]#Q~!$`+{!%OYOY!$`YZM]Zz!$`z{!${{!P!$`!P!Q!%n!Q#O!$`#O#P!&S#P#Q!!]#Q~!$`+{!%sTT+{OYG{Z#OG{#O#PH_#P#QFx#Q~G{+{!&VTOY!$`YZM]Zz!$`z{!${{~!$`+{!&iTOY!!]YZM]Zz!!]z{!#Q{~!!]+{!&}_yPOzM]z{Mi{#ZM]#Z#[!&x#[#]M]#]#^!&x#^#aM]#a#b!&x#b#gM]#g#h!&x#h#iM]#i#j!&x#j#mM]#m#n!&x#n~M],T!(R[$QWOY!'|YZKoZz!'|z{!(w{!^!'|!^!_!$`!_#O!'|#O#P!*o#P#QJl#Q#o!'|#o#p!$`#p~!'|,T!(|^$QWOY!'|YZKoZz!'|z{!(w{!P!'|!P!Q!)x!Q!^!'|!^!_!$`!_#O!'|#O#P!*o#P#QJl#Q#o!'|#o#p!$`#p~!'|,T!*PY$QWT+{OYHqYZ%TZ!^Hq!^!_G{!_#OHq#O#PIf#P#QDu#Q#oHq#o#pG{#p~Hq,T!*tX$QWOY!'|YZKoZz!'|z{!(w{!^!'|!^!_!$`!_#o!'|#o#p!$`#p~!'|,T!+fX$QWOYJlYZKoZzJlz{NQ{!^Jl!^!_!!]!_#oJl#o#p!!]#p~Jl,T!,Yc$QWyPOzKoz{LZ{!^Ko!^!_M]!_#ZKo#Z#[!,R#[#]Ko#]#^!,R#^#aKo#a#b!,R#b#gKo#g#h!,R#h#iKo#i#j!,R#j#mKo#m#n!,R#n#oKo#o#pM]#p~Ko,T!-lV$QWS+{OY!-eYZ%TZ!^!-e!^!_!.R!_#o!-e#o#p!.R#p~!-e+{!.WQS+{OY!.RZ~!.R$P!.g[$QW#k#vyPOYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~Du]!/f[#sS$QWyPOYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~Duy!0cd$QWjqO!O%T!O!P@r!P!Q%T!Q![!1q![!^%T!_!g%T!g!hAl!h#R%T#R#S!1q#S#U%T#U#V!3X#V#X%T#X#YAl#Y#b%T#b#c!2w#c#d!4m#d#l%T#l#m!5{#m#o%T#p~%Ty!1x_$QWjqO!O%T!O!P@r!P!Q%T!Q![!1q![!^%T!_!g%T!g!hAl!h#R%T#R#S!1q#S#X%T#X#YAl#Y#b%T#b#c!2w#c#o%T#p~%Ty!3OR$QWjqO!^%T!_#o%T#p~%Ty!3^W$QWO!Q%T!Q!R!3v!R!S!3v!S!^%T!_#R%T#R#S!3v#S#o%T#p~%Ty!3}Y$QWjqO!Q%T!Q!R!3v!R!S!3v!S!^%T!_#R%T#R#S!3v#S#b%T#b#c!2w#c#o%T#p~%Ty!4rV$QWO!Q%T!Q!Y!5X!Y!^%T!_#R%T#R#S!5X#S#o%T#p~%Ty!5`X$QWjqO!Q%T!Q!Y!5X!Y!^%T!_#R%T#R#S!5X#S#b%T#b#c!2w#c#o%T#p~%Ty!6QZ$QWO!Q%T!Q![!6s![!^%T!_!c%T!c!i!6s!i#R%T#R#S!6s#S#T%T#T#Z!6s#Z#o%T#p~%Ty!6z]$QWjqO!Q%T!Q![!6s![!^%T!_!c%T!c!i!6s!i#R%T#R#S!6s#S#T%T#T#Z!6s#Z#b%T#b#c!2w#c#o%T#p~%T%w!7|R!XV$QW#i%hO!^%T!_#o%T#p~%T!P!8^R^w$QWO!^%T!_#o%T#p~%T+c!8rR']d!]%Y#t&s'zP!P!Q!8{!^!_!9Q!_!`!9_W!9QO$SW#v!9VP#[#v!_!`!9Y#v!9_O#k#v#v!9dO#]#v%w!9kT!w%o$QWO!^%T!_!`'v!`!a!9z!a#o%T#p~%T$P!:RR#S#w$QWO!^%T!_#o%T#p~%T%w!:gT'[!s#]#v#}S$QWO!^%T!_!`!:v!`!a!;W!a#o%T#p~%T$O!:}R#]#v$QWO!^%T!_#o%T#p~%T$O!;_T#[#v$QWO!^%T!_!`5T!`!a!;n!a#o%T#p~%T$O!;uS#[#v$QWO!^%T!_!`5T!`#o%T#p~%T%w!<YV'n%o$QWO!O%T!O!P!<o!P!^%T!_!a%T!a!b!=P!b#o%T#p~%T$`!<vRs$W$QWO!^%T!_#o%T#p~%T$O!=WS$QW#f#vO!^%T!_!`5T!`#o%T#p~%T&e!=kRu&]$QWO!^%T!_#o%T#p~%TZ!={RzR$QWO!^%T!_#o%T#p~%T$O!>]S#c#v$QWO!^%T!_!`5T!`#o%T#p~%T$P!>pR$QW'a#wO!^%T!_#o%T#p~%T~!?OO!P~%r!?VT'u%j$QWO!^%T!_!`5T!`#o%T#p#q!=P#q~%T$u!?oR!O$k$QW'cQO!^%T!_#o%T#p~%TX!@PR!gP$QWO!^%T!_#o%T#p~%T,T!@gr$QW'T+{#vS'W%k'dpOX%TXY%cYZ%TZ[%c[p%Tpq%cqt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$f%T$f$g%c$g#BY2`#BY#BZ!@Y#BZ$IS2`$IS$I_!@Y$I_$JT2`$JT$JU!@Y$JU$KV2`$KV$KW!@Y$KW&FU2`&FU&FV!@Y&FV?HT2`?HT?HU!@Y?HU~2`,T!CO_$QW'U+{#vS'W%k'dpOt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$g%T$g~2`",
    tokenizers: [
        z23,
        w48,
        k30,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        b26
    ],
    topRules: {
        Script: [
            0,
            6
        ]
    },
    dialects: {
        jsx: 11282,
        ts: 11284
    },
    dynamicPrecedences: {
        "145": 1,
        "172": 1
    },
    specialized: [
        {
            term: 284,
            get: (O, Q)=>L23(O, Q) << 1
        },
        {
            term: 284,
            get: (O)=>g14[O] || -1
        },
        {
            term: 296,
            get: (O)=>U14[O] || -1
        },
        {
            term: 59,
            get: (O)=>m18[O] || -1
        }
    ],
    tokenPrec: 11305
});
var T32 = [
    yt1("function ${name}(${params}) {\n	${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
    }),
    yt1("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
    }),
    yt1("for (let ${name} of ${collection}) {\n	${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
    }),
    yt1(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
        label: "try",
        detail: "block",
        type: "keyword"
    }),
    yt1(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
        label: "class",
        detail: "definition",
        type: "keyword"
    }),
    yt1('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
    }),
    yt1('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
    })
], l5 = P7.define({
    parser: A18.configure({
        props: [
            Y2.add({
                IfStatement: wt1({
                    except: /^\s*({|else\b)/
                }),
                TryStatement: wt1({
                    except: /^\s*({|catch\b|finally\b)/
                }),
                LabeledStatement: kt1,
                SwitchBody: (t)=>{
                    let r = t.textAfter, n = /^\s*\}/.test(r), o = /^\s*(case|default)\b/.test(r);
                    return t.baseIndent + (n ? 0 : o ? 1 : 2) * t.unit;
                },
                Block: gt1({
                    closing: "}"
                }),
                ArrowFunction: (t)=>t.baseIndent + t.unit
                ,
                "TemplateString BlockComment": ()=>-1
                ,
                "Statement Property": wt1({
                    except: /^{/
                }),
                JSXElement (t) {
                    let r = /^\s*<\//.test(t.textAfter);
                    return t.lineIndent(t.node.from) + (r ? 0 : t.unit);
                },
                JSXEscape (t) {
                    let r = /\s*\}/.test(t.textAfter);
                    return t.lineIndent(t.node.from) + (r ? 0 : t.unit);
                },
                "JSXOpenTag JSXSelfClosingTag" (t) {
                    return t.column(t.node.from) + t.unit;
                }
            }),
            ot1.add({
                "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression": yt,
                BlockComment (t) {
                    return {
                        from: t.from + 2,
                        to: t.to - 2
                    };
                }
            }),
            yt2({
                "get set async static": i2.modifier,
                "for while do if else switch try catch finally return throw break continue default case": i2.controlKeyword,
                "in of await yield void typeof delete instanceof": i2.operatorKeyword,
                "let var const function class extends": i2.definitionKeyword,
                "import export from": i2.moduleKeyword,
                "with debugger as new": i2.keyword,
                TemplateString: i2.special(i2.string),
                Super: i2.atom,
                BooleanLiteral: i2.bool,
                this: i2.self,
                null: i2.null,
                Star: i2.modifier,
                VariableName: i2.variableName,
                "CallExpression/VariableName TaggedTemplateExpression/VariableName": i2.function(i2.variableName),
                VariableDefinition: i2.definition(i2.variableName),
                Label: i2.labelName,
                PropertyName: i2.propertyName,
                PrivatePropertyName: i2.special(i2.propertyName),
                "CallExpression/MemberExpression/PropertyName": i2.function(i2.propertyName),
                "FunctionDeclaration/VariableDefinition": i2.function(i2.definition(i2.variableName)),
                "ClassDeclaration/VariableDefinition": i2.definition(i2.className),
                PropertyDefinition: i2.definition(i2.propertyName),
                PrivatePropertyDefinition: i2.definition(i2.special(i2.propertyName)),
                UpdateOp: i2.updateOperator,
                LineComment: i2.lineComment,
                BlockComment: i2.blockComment,
                Number: i2.number,
                String: i2.string,
                ArithOp: i2.arithmeticOperator,
                LogicOp: i2.logicOperator,
                BitOp: i2.bitwiseOperator,
                CompareOp: i2.compareOperator,
                RegExp: i2.regexp,
                Equals: i2.definitionOperator,
                "Arrow : Spread": i2.punctuation,
                "( )": i2.paren,
                "[ ]": i2.squareBracket,
                "{ }": i2.brace,
                ".": i2.derefOperator,
                ", ;": i2.separator,
                TypeName: i2.typeName,
                TypeDefinition: i2.definition(i2.typeName),
                "type enum interface implements namespace module declare": i2.definitionKeyword,
                "abstract global Privacy readonly override": i2.modifier,
                "is keyof unique infer": i2.operatorKeyword,
                JSXAttributeValue: i2.attributeValue,
                JSXText: i2.content,
                "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": i2.angleBracket,
                "JSXIdentifier JSXNameSpacedName": i2.tagName,
                "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": i2.attributeName
            })
        ]
    }),
    languageData: {
        closeBrackets: {
            brackets: [
                "(",
                "[",
                "{",
                "'",
                '"',
                "`"
            ]
        },
        commentTokens: {
            line: "//",
            block: {
                open: "/*",
                close: "*/"
            }
        },
        indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
        wordChars: "$"
    }
}), v94 = l5.configure({
    dialect: "ts"
}), I16 = l5.configure({
    dialect: "jsx"
}), J18 = l5.configure({
    dialect: "jsx ts"
});
function A19(t = {
}) {
    let r = t.jsx ? t.typescript ? J18 : I16 : t.typescript ? v94 : l5;
    return new J10(r, l5.data.of({
        autocomplete: xt2([
            "LineComment",
            "BlockComment",
            "String"
        ], Fe2(T32))
    }));
}
var y49 = [
    "_blank",
    "_self",
    "_top",
    "_parent"
], w49 = [
    "ascii",
    "utf-8",
    "utf-16",
    "latin1",
    "latin1"
], C22 = [
    "get",
    "post",
    "put",
    "delete"
], k31 = [
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
], c19 = [
    "true",
    "false"
], e9 = {
}, v96 = {
    a: {
        attrs: {
            href: null,
            ping: null,
            type: null,
            media: null,
            target: y49,
            hreflang: null
        }
    },
    abbr: e9,
    acronym: e9,
    address: e9,
    applet: e9,
    area: {
        attrs: {
            alt: null,
            coords: null,
            href: null,
            target: null,
            ping: null,
            media: null,
            hreflang: null,
            type: null,
            shape: [
                "default",
                "rect",
                "circle",
                "poly"
            ]
        }
    },
    article: e9,
    aside: e9,
    audio: {
        attrs: {
            src: null,
            mediagroup: null,
            crossorigin: [
                "anonymous",
                "use-credentials"
            ],
            preload: [
                "none",
                "metadata",
                "auto"
            ],
            autoplay: [
                "autoplay"
            ],
            loop: [
                "loop"
            ],
            controls: [
                "controls"
            ]
        }
    },
    b: e9,
    base: {
        attrs: {
            href: null,
            target: y49
        }
    },
    basefont: e9,
    bdi: e9,
    bdo: e9,
    big: e9,
    blockquote: {
        attrs: {
            cite: null
        }
    },
    body: e9,
    br: e9,
    button: {
        attrs: {
            form: null,
            formaction: null,
            name: null,
            value: null,
            autofocus: [
                "autofocus"
            ],
            disabled: [
                "autofocus"
            ],
            formenctype: k31,
            formmethod: C22,
            formnovalidate: [
                "novalidate"
            ],
            formtarget: y49,
            type: [
                "submit",
                "reset",
                "button"
            ]
        }
    },
    canvas: {
        attrs: {
            width: null,
            height: null
        }
    },
    caption: e9,
    center: e9,
    cite: e9,
    code: e9,
    col: {
        attrs: {
            span: null
        }
    },
    colgroup: {
        attrs: {
            span: null
        }
    },
    command: {
        attrs: {
            type: [
                "command",
                "checkbox",
                "radio"
            ],
            label: null,
            icon: null,
            radiogroup: null,
            command: null,
            title: null,
            disabled: [
                "disabled"
            ],
            checked: [
                "checked"
            ]
        }
    },
    data: {
        attrs: {
            value: null
        }
    },
    datagrid: {
        attrs: {
            disabled: [
                "disabled"
            ],
            multiple: [
                "multiple"
            ]
        }
    },
    datalist: {
        attrs: {
            data: null
        }
    },
    dd: e9,
    del: {
        attrs: {
            cite: null,
            datetime: null
        }
    },
    details: {
        attrs: {
            open: [
                "open"
            ]
        }
    },
    dfn: e9,
    dir: e9,
    div: e9,
    dl: e9,
    dt: e9,
    em: e9,
    embed: {
        attrs: {
            src: null,
            type: null,
            width: null,
            height: null
        }
    },
    eventsource: {
        attrs: {
            src: null
        }
    },
    fieldset: {
        attrs: {
            disabled: [
                "disabled"
            ],
            form: null,
            name: null
        }
    },
    figcaption: e9,
    figure: e9,
    font: e9,
    footer: e9,
    form: {
        attrs: {
            action: null,
            name: null,
            "accept-charset": w49,
            autocomplete: [
                "on",
                "off"
            ],
            enctype: k31,
            method: C22,
            novalidate: [
                "novalidate"
            ],
            target: y49
        }
    },
    frame: e9,
    frameset: e9,
    h1: e9,
    h2: e9,
    h3: e9,
    h4: e9,
    h5: e9,
    h6: e9,
    head: {
        children: [
            "title",
            "base",
            "link",
            "style",
            "meta",
            "script",
            "noscript",
            "command"
        ]
    },
    header: e9,
    hgroup: e9,
    hr: e9,
    html: {
        attrs: {
            manifest: null
        }
    },
    i: e9,
    iframe: {
        attrs: {
            src: null,
            srcdoc: null,
            name: null,
            width: null,
            height: null,
            sandbox: [
                "allow-top-navigation",
                "allow-same-origin",
                "allow-forms",
                "allow-scripts"
            ],
            seamless: [
                "seamless"
            ]
        }
    },
    img: {
        attrs: {
            alt: null,
            src: null,
            ismap: null,
            usemap: null,
            width: null,
            height: null,
            crossorigin: [
                "anonymous",
                "use-credentials"
            ]
        }
    },
    input: {
        attrs: {
            alt: null,
            dirname: null,
            form: null,
            formaction: null,
            height: null,
            list: null,
            max: null,
            maxlength: null,
            min: null,
            name: null,
            pattern: null,
            placeholder: null,
            size: null,
            src: null,
            step: null,
            value: null,
            width: null,
            accept: [
                "audio/*",
                "video/*",
                "image/*"
            ],
            autocomplete: [
                "on",
                "off"
            ],
            autofocus: [
                "autofocus"
            ],
            checked: [
                "checked"
            ],
            disabled: [
                "disabled"
            ],
            formenctype: k31,
            formmethod: C22,
            formnovalidate: [
                "novalidate"
            ],
            formtarget: y49,
            multiple: [
                "multiple"
            ],
            readonly: [
                "readonly"
            ],
            required: [
                "required"
            ],
            type: [
                "hidden",
                "text",
                "search",
                "tel",
                "url",
                "email",
                "password",
                "datetime",
                "date",
                "month",
                "week",
                "time",
                "datetime-local",
                "number",
                "range",
                "color",
                "checkbox",
                "radio",
                "file",
                "submit",
                "image",
                "reset",
                "button"
            ]
        }
    },
    ins: {
        attrs: {
            cite: null,
            datetime: null
        }
    },
    kbd: e9,
    keygen: {
        attrs: {
            challenge: null,
            form: null,
            name: null,
            autofocus: [
                "autofocus"
            ],
            disabled: [
                "disabled"
            ],
            keytype: [
                "RSA"
            ]
        }
    },
    label: {
        attrs: {
            for: null,
            form: null
        }
    },
    legend: e9,
    li: {
        attrs: {
            value: null
        }
    },
    link: {
        attrs: {
            href: null,
            type: null,
            hreflang: null,
            media: null,
            sizes: [
                "all",
                "16x16",
                "16x16 32x32",
                "16x16 32x32 64x64"
            ]
        }
    },
    map: {
        attrs: {
            name: null
        }
    },
    mark: e9,
    menu: {
        attrs: {
            label: null,
            type: [
                "list",
                "context",
                "toolbar"
            ]
        }
    },
    meta: {
        attrs: {
            content: null,
            charset: w49,
            name: [
                "viewport",
                "application-name",
                "author",
                "description",
                "generator",
                "keywords"
            ],
            "http-equiv": [
                "content-language",
                "content-type",
                "default-style",
                "refresh"
            ]
        }
    },
    meter: {
        attrs: {
            value: null,
            min: null,
            low: null,
            high: null,
            max: null,
            optimum: null
        }
    },
    nav: e9,
    noframes: e9,
    noscript: e9,
    object: {
        attrs: {
            data: null,
            type: null,
            name: null,
            usemap: null,
            form: null,
            width: null,
            height: null,
            typemustmatch: [
                "typemustmatch"
            ]
        }
    },
    ol: {
        attrs: {
            reversed: [
                "reversed"
            ],
            start: null,
            type: [
                "1",
                "a",
                "A",
                "i",
                "I"
            ]
        },
        children: [
            "li",
            "script",
            "template",
            "ul",
            "ol"
        ]
    },
    optgroup: {
        attrs: {
            disabled: [
                "disabled"
            ],
            label: null
        }
    },
    option: {
        attrs: {
            disabled: [
                "disabled"
            ],
            label: null,
            selected: [
                "selected"
            ],
            value: null
        }
    },
    output: {
        attrs: {
            for: null,
            form: null,
            name: null
        }
    },
    p: e9,
    param: {
        attrs: {
            name: null,
            value: null
        }
    },
    pre: e9,
    progress: {
        attrs: {
            value: null,
            max: null
        }
    },
    q: {
        attrs: {
            cite: null
        }
    },
    rp: e9,
    rt: e9,
    ruby: e9,
    s: e9,
    samp: e9,
    script: {
        attrs: {
            type: [
                "text/javascript"
            ],
            src: null,
            async: [
                "async"
            ],
            defer: [
                "defer"
            ],
            charset: w49
        }
    },
    section: e9,
    select: {
        attrs: {
            form: null,
            name: null,
            size: null,
            autofocus: [
                "autofocus"
            ],
            disabled: [
                "disabled"
            ],
            multiple: [
                "multiple"
            ]
        }
    },
    small: e9,
    source: {
        attrs: {
            src: null,
            type: null,
            media: null
        }
    },
    span: e9,
    strike: e9,
    strong: e9,
    style: {
        attrs: {
            type: [
                "text/css"
            ],
            media: null,
            scoped: null
        }
    },
    sub: e9,
    summary: e9,
    sup: e9,
    table: e9,
    tbody: e9,
    td: {
        attrs: {
            colspan: null,
            rowspan: null,
            headers: null
        }
    },
    textarea: {
        attrs: {
            dirname: null,
            form: null,
            maxlength: null,
            name: null,
            placeholder: null,
            rows: null,
            cols: null,
            autofocus: [
                "autofocus"
            ],
            disabled: [
                "disabled"
            ],
            readonly: [
                "readonly"
            ],
            required: [
                "required"
            ],
            wrap: [
                "soft",
                "hard"
            ]
        }
    },
    tfoot: e9,
    th: {
        attrs: {
            colspan: null,
            rowspan: null,
            headers: null,
            scope: [
                "row",
                "col",
                "rowgroup",
                "colgroup"
            ]
        }
    },
    thead: e9,
    time: {
        attrs: {
            datetime: null
        }
    },
    title: e9,
    tr: e9,
    track: {
        attrs: {
            src: null,
            label: null,
            default: null,
            kind: [
                "subtitles",
                "captions",
                "descriptions",
                "chapters",
                "metadata"
            ],
            srclang: null
        }
    },
    tt: e9,
    u: e9,
    ul: {
        children: [
            "li",
            "script",
            "template",
            "ul",
            "ol"
        ]
    },
    var: e9,
    video: {
        attrs: {
            src: null,
            poster: null,
            width: null,
            height: null,
            crossorigin: [
                "anonymous",
                "use-credentials"
            ],
            preload: [
                "auto",
                "metadata",
                "none"
            ],
            autoplay: [
                "autoplay"
            ],
            mediagroup: [
                "movie"
            ],
            muted: [
                "muted"
            ],
            controls: [
                "controls"
            ]
        }
    },
    wbr: e9
}, $21 = {
    accesskey: null,
    class: null,
    contenteditable: c19,
    contextmenu: null,
    dir: [
        "ltr",
        "rtl",
        "auto"
    ],
    draggable: [
        "true",
        "false",
        "auto"
    ],
    dropzone: [
        "copy",
        "move",
        "link",
        "string:",
        "file:"
    ],
    hidden: [
        "hidden"
    ],
    id: null,
    inert: [
        "inert"
    ],
    itemid: null,
    itemprop: null,
    itemref: null,
    itemscope: [
        "itemscope"
    ],
    itemtype: null,
    lang: [
        "ar",
        "bn",
        "de",
        "en-GB",
        "en-US",
        "es",
        "fr",
        "hi",
        "id",
        "ja",
        "pa",
        "pt",
        "ru",
        "tr",
        "zh"
    ],
    spellcheck: c19,
    autocorrect: c19,
    autocapitalize: c19,
    style: null,
    tabindex: null,
    title: null,
    translate: [
        "yes",
        "no"
    ],
    onclick: null,
    rel: [
        "stylesheet",
        "alternate",
        "author",
        "bookmark",
        "help",
        "license",
        "next",
        "nofollow",
        "noreferrer",
        "prefetch",
        "prev",
        "search",
        "tag"
    ],
    role: "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
    "aria-activedescendant": null,
    "aria-atomic": c19,
    "aria-autocomplete": [
        "inline",
        "list",
        "both",
        "none"
    ],
    "aria-busy": c19,
    "aria-checked": [
        "true",
        "false",
        "mixed",
        "undefined"
    ],
    "aria-controls": null,
    "aria-describedby": null,
    "aria-disabled": c19,
    "aria-dropeffect": null,
    "aria-expanded": [
        "true",
        "false",
        "undefined"
    ],
    "aria-flowto": null,
    "aria-grabbed": [
        "true",
        "false",
        "undefined"
    ],
    "aria-haspopup": c19,
    "aria-hidden": c19,
    "aria-invalid": [
        "true",
        "false",
        "grammar",
        "spelling"
    ],
    "aria-label": null,
    "aria-labelledby": null,
    "aria-level": null,
    "aria-live": [
        "off",
        "polite",
        "assertive"
    ],
    "aria-multiline": c19,
    "aria-multiselectable": c19,
    "aria-owns": null,
    "aria-posinset": null,
    "aria-pressed": [
        "true",
        "false",
        "mixed",
        "undefined"
    ],
    "aria-readonly": c19,
    "aria-relevant": null,
    "aria-required": c19,
    "aria-selected": [
        "true",
        "false",
        "undefined"
    ],
    "aria-setsize": null,
    "aria-sort": [
        "ascending",
        "descending",
        "none",
        "other"
    ],
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null,
    "aria-valuetext": null
}, J21 = Object.keys(v96), q20 = Object.keys($21);
function b27(l, a, n = l.length) {
    if (!a) return "";
    let r = a.firstChild, t = r && r.getChild("TagName");
    return t ? l.sliceString(t.from, Math.min(t.to, n)) : "";
}
function T34(l, a = !1) {
    for(let n = l.parent; n; n = n.parent)if (n.name == "Element") if (a) a = !1;
    else return n;
    return null;
}
function O45(l, a) {
    let n = v96[b27(l, T34(a, !0))];
    return (n == null ? void 0 : n.children) || J21;
}
function x21(l, a) {
    let n = [];
    for(let r = a; r = T34(r);){
        let t = b27(l, r);
        if (t && r.lastChild.name == "CloseTag") break;
        t && n.indexOf(t) < 0 && (a.name == "EndTag" || a.from >= r.firstChild.to) && n.push(t);
    }
    return n;
}
var D17 = /^[:\-\.\w\u00b7-\uffff]+$/;
function j17(l, a, n, r) {
    let t = /\s*>/.test(l.sliceDoc(r, r + 5)) ? "" : ">";
    return {
        from: n,
        to: r,
        options: O45(l.doc, a).map((o)=>({
                label: o,
                type: "type"
            })
        ).concat(x21(l.doc, a).map((o, u)=>({
                label: "/" + o,
                apply: "/" + o + t,
                type: "type",
                boost: 99 - u
            })
        )),
        span: /^\/?[:\-\.\w\u00b7-\uffff]*$/
    };
}
function _15(l, a, n, r) {
    let t = /\s*>/.test(l.sliceDoc(r, r + 5)) ? "" : ">";
    return {
        from: n,
        to: r,
        options: x21(l.doc, a).map((o, u)=>({
                label: o,
                apply: o + t,
                type: "type",
                boost: 99 - u
            })
        ),
        span: D17
    };
}
function K18(l, a, n) {
    let r = [], t = 0;
    for (let o of O45(l.doc, a))r.push({
        label: "<" + o,
        type: "type"
    });
    for (let o1 of x21(l.doc, a))r.push({
        label: "</" + o1 + ">",
        type: "type",
        boost: 99 - t++
    });
    return {
        from: n,
        to: n,
        options: r,
        span: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
    };
}
function Q27(l, a, n, r) {
    let t = T34(a), o = t ? v96[b27(l.doc, t)] : null, u = o && o.attrs ? Object.keys(o.attrs).concat(q20) : q20;
    return {
        from: n,
        to: r,
        options: u.map((d)=>({
                label: d,
                type: "property"
            })
        ),
        span: D17
    };
}
function X12(l, a, n, r) {
    var t24;
    let o = (t24 = a.parent) === null || t24 === void 0 ? void 0 : t24.getChild("AttributeName"), u = [], d;
    if (o) {
        let h = l.sliceDoc(o.from, o.to), p = $21[h];
        if (!p) {
            let s = T34(a), i = s ? v96[b27(l.doc, s)] : null;
            p = (i == null ? void 0 : i.attrs) && i.attrs[h];
        }
        if (p) {
            let s = l.sliceDoc(n, r).toLowerCase(), i = '"', f = '"';
            /^['"]/.test(s) ? (d = s[0] == '"' ? /^[^"]*$/ : /^[^']*$/, i = "", f = l.sliceDoc(r, r + 1) == s[0] ? "" : s[0], s = s.slice(1), n++) : d = /^[^\s<>='"]*$/;
            for (let g of p)u.push({
                label: g,
                apply: i + g + f,
                type: "constant"
            });
        }
    }
    return {
        from: n,
        to: r,
        options: u,
        span: d
    };
}
function Y10(l) {
    let { state: a , pos: n  } = l, r = v9(a).resolveInner(n), t = r.resolve(n, -1);
    for(let o = n, u; r == t && (u = t.childBefore(o));){
        let d = u.lastChild;
        if (!d || !d.type.isError || d.from < d.to) break;
        r = t = u, o = d.from;
    }
    return t.name == "TagName" ? t.parent && /CloseTag$/.test(t.parent.name) ? _15(a, t, t.from, n) : j17(a, t, t.from, n) : t.name == "StartTag" ? j17(a, t, n, n) : t.name == "StartCloseTag" || t.name == "IncompleteCloseTag" ? _15(a, t, n, n) : l.explicit && (t.name == "OpenTag" || t.name == "SelfClosingTag") || t.name == "AttributeName" ? Q27(a, t, t.name == "AttributeName" ? t.from : n, n) : t.name == "Is" || t.name == "AttributeValue" || t.name == "UnquotedAttributeValue" ? X12(a, t, t.name == "Is" ? n : t.from, n) : l.explicit && (r.name == "Element" || r.name == "Text" || r.name == "Document") ? K18(a, t, n) : null;
}
var N21 = P7.define({
    parser: ue8.configure({
        props: [
            Y2.add({
                Element (l) {
                    let a = /^(\s*)(<\/)?/.exec(l.textAfter);
                    return l.node.to <= l.pos + a[0].length ? l.continue() : l.lineIndent(l.node.from) + (a[2] ? 0 : l.unit);
                },
                "OpenTag CloseTag SelfClosingTag" (l) {
                    return l.column(l.node.from) + l.unit;
                },
                Document (l) {
                    if (l.pos + /\s*/.exec(l.textAfter)[0].length < l.node.to) return l.continue();
                    let a = null, n;
                    for(let r = l.node;;){
                        let t = r.lastChild;
                        if (!t || t.name != "Element" || t.to != r.to) break;
                        a = r = t;
                    }
                    return a && !((n = a.lastChild) && (n.name == "CloseTag" || n.name == "SelfClosingTag")) ? l.lineIndent(a.from) + l.unit : null;
                }
            }),
            ot1.add({
                Element (l) {
                    let a = l.firstChild, n = l.lastChild;
                    return !a || a.name != "OpenTag" ? null : {
                        from: a.to,
                        to: n.name == "CloseTag" ? n.from : l.to
                    };
                }
            }),
            yt2({
                "Text RawText": i2.content,
                "StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag": i2.angleBracket,
                TagName: i2.tagName,
                "MismatchedCloseTag/TagName": [
                    i2.tagName,
                    i2.invalid
                ],
                AttributeName: i2.attributeName,
                "AttributeValue UnquotedAttributeValue": i2.attributeValue,
                Is: i2.definitionOperator,
                "EntityReference CharacterReference": i2.character,
                Comment: i2.blockComment,
                ProcessingInst: i2.processingInstruction,
                DoctypeDecl: i2.documentMeta
            })
        ],
        wrap: Re2([
            {
                tag: "script",
                attrs (l) {
                    return !l.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(l.type);
                },
                parser: l5.parser
            },
            {
                tag: "style",
                attrs (l) {
                    return (!l.lang || l.lang == "css") && (!l.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(l.type));
                },
                parser: m15.parser
            }
        ])
    }),
    languageData: {
        commentTokens: {
            block: {
                open: "<!--",
                close: "-->"
            }
        },
        indentOnInput: /^\s*<\/\w+\W$/,
        wordChars: "-._"
    }
}), Z13 = N21.data.of({
    autocomplete: Y10
});
function ie9(l = {
}) {
    let a = N21;
    return l.matchClosingTags === !1 && (a = a.configure({
        dialect: "noMatch"
    })), new J10(a, [
        Z13,
        l.autoCloseTags !== !1 ? ee8 : [],
        A19().support,
        L21().support
    ]);
}
var ee8 = D3.inputHandler.of((l, a, n, r)=>{
    if (l.composing || l.state.readOnly || a != n || r != ">" && r != "/" || !N21.isActiveAt(l.state, a, -1)) return !1;
    let { state: t  } = l, o = t.changeByRange((u)=>{
        var d, h, p;
        let { head: s  } = u, i = v9(t).resolveInner(s, -1), f;
        if ((i.name == "TagName" || i.name == "StartTag") && (i = i.parent), r == ">" && i.name == "OpenTag") {
            if (((h = (d = i.parent) === null || d === void 0 ? void 0 : d.lastChild) === null || h === void 0 ? void 0 : h.name) != "CloseTag" && (f = b27(t.doc, i.parent, s))) return {
                range: p48.cursor(s + 1),
                changes: {
                    from: s,
                    insert: `></${f}>`
                }
            };
        } else if (r == "/" && i.name == "OpenTag") {
            let g = i.parent, A = g == null ? void 0 : g.parent;
            if (g.from == s - 1 && ((p = A.lastChild) === null || p === void 0 ? void 0 : p.name) != "CloseTag" && (f = b27(t.doc, A, s))) {
                let S = `/${f}>`;
                return {
                    range: p48.cursor(s + S.length),
                    changes: {
                        from: s,
                        insert: S
                    }
                };
            }
        }
        return {
            range: u
        };
    });
    return o.changes.empty ? !1 : (l.dispatch(o, {
        userEvent: "input.type",
        scrollIntoView: !0
    }), !0);
});
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 3 | 8;
        return v.toString(16);
    });
}
const CACHE = "CACHE";
function createStore(initialState = {
}, notify = ()=>null
, save = ()=>null
) {
    let state = {
        [CACHE]: {
        },
        ...initialState
    };
    const context = {
        set: function(schema, payload, handler = defaultHandler) {
            if (typeof handler === 'function') {
                const newCache = touchCache(state[CACHE], schema);
                const newResource = handler(state[schema] || {
                }, payload);
                state = {
                    ...state,
                    [CACHE]: newCache,
                    [schema]: newResource
                };
                save(schema, state[schema]);
                notify(state);
            } else {
                console.error('No Resource Handler provided: ', schema, payload);
            }
        },
        get: function(schema) {
            return state[schema];
        }
    };
    return context;
}
function touchCache(state, schema) {
    return {
        ...state,
        [schema]: uuidv4()
    };
}
function defaultHandler(state, payload) {
    return {
        ...state,
        ...payload
    };
}
const databaseName = 'ion';
const storeName = 'cache';
const database = new Promise(function initialize(resolve, reject) {
    const request = indexedDB.open(databaseName, 1);
    request.onupgradeneeded = function(event) {
        const database = event.target.result;
        database.createObjectStore(storeName, {
            keyPath: 'schema',
            autoIncrement: false
        });
    };
    request.onsuccess = function(event) {
        resolve(event.target.result);
    };
});
async function load(keys) {
    const db = await database;
    const transaction = db.transaction(storeName);
    const objectStore = transaction.objectStore(storeName);
    const rows = await new Promise(function loadFromDatabase(resolve, reject) {
        const rows = [];
        const read = objectStore.openCursor();
        read.onsuccess = function(event) {
            let cursor = event.target.result;
            if (cursor) {
                if (keys.includes(cursor.key)) {
                    rows.push(cursor.value);
                }
                cursor.continue();
            } else {
                resolve(rows);
            }
        };
        read.onerror = reject;
    });
    return rows;
}
async function save(schema, data) {
    const db = await database;
    const record = {
        schema,
        data
    };
    const transaction = db.transaction(storeName, 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    let request;
    return new Promise(function saveToDatabase(resolve, reject) {
        try {
            request = objectStore.get(schema);
            request.onsuccess = function(event) {
                const request = objectStore.put(record);
                request.onsuccess = resolve;
            };
        } catch (e) {
            const request = objectStore.add(record);
            request.onsuccess = resolve;
            request.onerror = reject;
        }
    });
}
const __default = {
    save,
    load
};
function uuidv41() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 3 | 8;
        return v.toString(16);
    });
}
const renderEvent = new Event('render');
const mountEvent = new Event('mount');
let selectors = [];
function observe(selector) {
    selectors = [
        ...new Set([
            ...selectors,
            selector
        ])
    ];
    render();
}
function disregard(selector) {
    const index = selectors.indexOf(selector);
    if (index >= 0) {
        selectors = [
            ...selectors.slice(0, index),
            ...selectors.slice(index + 1)
        ];
    }
}
function render(_state) {
    const subscribers = getSubscribers(document);
    dispatchRender(subscribers);
}
function getSubscribers(node) {
    if (selectors.length > 0) return [
        ...node.querySelectorAll(selectors.join(', '))
    ];
    else return [];
}
function dispatchRender(subscribers) {
    subscribers.map((s)=>{
        if (!s.mounted) {
            s.mounted = true;
            if (!s.id) s.id = uuidv41();
            s.dispatchEvent(mountEvent);
        }
        s.dispatchEvent(renderEvent);
    });
}
const config = {
    childList: true,
    subtree: true
};
function mutationObserverCallback(mutationsList, observer) {
    const subscriberCollections = [
        ...mutationsList
    ].map((m)=>getSubscribers(m.target)
    );
    subscriberCollections.forEach(dispatchRender);
}
const observer = new MutationObserver(mutationObserverCallback);
observer.observe(document.body, config);
function listen(type, selector, handler, scope) {
    const callback = (event)=>{
        if (event.target && event.target.matches && event.target.matches(selector)) {
            handler.call(this, event, scope);
        }
    };
    document.addEventListener(type, callback, true);
    return function unlisten() {
        document.removeEventListener(type, callback, true);
    };
}
const observableEvents = [
    'render',
    'mount'
];
function on1(type, selector, handler) {
    const unbind = listen(type, selector, handler, this);
    if (observableEvents.includes(type)) {
        observe(selector);
    }
    return function unlisten() {
        if (type === 'render') {
            disregard(selector);
        }
        unbind();
    };
}
let lastState = {
};
let subscribers = [
    render
];
const notify = (state)=>{
    lastState = state;
    subscribers.map(function notifySubscriber(notify) {
        notify(state);
    });
};
const store = createStore({
}, notify, __default.save);
const ion = {
    set: store.set,
    get: store.get,
    load: function load(schema) {
        __default.load(schema).then(function restoreFromCache(rows) {
            rows.map(({ schema , data  })=>store.set(schema, data)
            );
        });
    },
    restore: function restore(schema) {
        return __default.load(schema).then(function restoreFromCache(rows) {
            const row = rows.find((x)=>x.schema === schema
            ) || {
                data: {
                }
            };
            return row.data;
        });
    },
    relay: function relay(subscriber) {
        subscribers = [
            ...subscribers,
            subscriber
        ];
        subscriber(lastState);
    }
};
ion.on = on1.bind(ion);
ion.on;
ion.load;
ion.relay;
ion.set;
ion.get;
let virtualDOM;
let equal = (a, b)=>a === b
;
const cleanStates = {
};
const dom = (target, html)=>{
    if (virtualDOM) {
        virtualDOM(target, html);
    } else {
        target.innerHTML = html;
    }
};
function mount(selector, callback) {
    ion.on('mount', selector, (event)=>{
        console.log(event.target.id);
        callback(event.target);
    });
}
async function render1(selector, callback, dependencies = []) {
    ion.on('render', selector, (event)=>{
        const id = [
            ...event.target.attributes
        ].reduce((data, x)=>{
            return `${data}${x.name}${x.value}`;
        }, '');
        if (clean(id, selector, dependencies)) return;
        const { loaded  } = read(selector);
        if (!loaded) return;
        const html = callback(event.target);
        if (html) dom(event.target, html);
    });
    const { innerHTML  } = await import('https://esm.sh/diffhtml');
    virtualDOM = innerHTML;
}
function style(selector, stylesheet) {
    const styles = `
    <style type="text/css" data-tag=${selector}>
      ${stylesheet.replaceAll('&', selector)}
    </style>
  `;
    document.body.insertAdjacentHTML("beforeend", styles);
}
function read(selector) {
    return ion.get(selector) || {
    };
}
function write(selector, payload, middleware) {
    ion.set(selector, payload, middleware);
}
function on2(selector1, eventName, selector2, callback) {
    ion.on(eventName, `${selector1} ${selector2}`, callback);
}
function restore(selector, initialState) {
    const promise = ion.restore(selector);
    promise.then((state)=>{
        write(selector, {
            ...initialState,
            ...state,
            loaded: true
        });
    });
    write(selector, initialState);
    return promise;
}
function clean(id, selector, ...more) {
    const selectors = [
        selector,
        ...more
    ];
    const cacheIndex = `${id}${new Error().stack}`;
    const cache = cleanStates[cacheIndex] || function init() {
        return cleanStates[cacheIndex] = {
        };
    }();
    return selectors.every((x)=>{
        const previous = cache[x];
        const current = ion.get(x);
        const same = equal(previous, current);
        cleanStates[cacheIndex][x] = current;
        return same;
    });
}
function tag(selector, initialState = {
}) {
    let thisTagReady = false;
    function ready(hook) {
        if (!thisTagReady) {
            requestAnimationFrame(()=>ready(hook)
            );
            return;
        }
        hook();
    }
    restore(selector, initialState).then(()=>thisTagReady = true
    );
    return {
        ready,
        selector,
        mount: mount.bind(null, selector),
        read: read.bind(null, selector),
        render: render1.bind(null, selector),
        style: style.bind(null, selector),
        on: on2.bind(null, selector),
        write: write.bind(null, selector),
        slug: selector,
        css: style.bind(null, selector),
        html: render1.bind(null, selector),
        get: read.bind(null, selector),
        restore: function() {
            console.error('#tag.restore() was deprecated. please use #tag.ready instead.');
        },
        set: write.bind(null, selector)
    };
}
import('https://esm.sh/fast-equals@2.0.4').then(({ deepEqual  })=>equal = deepEqual
);
const editors = {
};
function createEditor(selector, flags = {
}) {
    const $ = tag(selector);
    mount1($, flags);
    autosave($, {
        every: 5
    });
}
const config1 = {
    extensions: [
        D14,
        ie9(),
        L21(),
        A19()
    ]
};
function mount1($, flags) {
    $.mount((target)=>{
        $.ready(()=>{
            if (editors[target.id]) return;
            const initialState = $.read();
            const copy = initialState[target.id] || {
            };
            const state = w1.create({
                ...config1,
                ...flags,
                doc: copy.value
            });
            const view = new D3({
                dispatch: persist(target, $, flags),
                parent: target,
                state
            });
            editors[target.id] = {
                $,
                state,
                view
            };
        });
    });
}
function autosave($, { every  }) {
    setInterval(()=>each($, save)
    , every * 1000);
    function save(target) {
        const currentState = $.read();
        const copy = currentState[target.id];
        console.log({
            copy
        });
    }
}
function persist(target, $, flags) {
    return (transaction)=>{
        if (transaction.changes.inserted.length < 0) return;
        console.log({
            transaction
        });
        const { id  } = target;
        const { view  } = editors[id];
        const value = view.state.doc.toString();
        view.update([
            transaction
        ]);
        $.write({
            [id]: {
                value
            }
        });
    };
}
function each($, save) {
    return [
        ...document.querySelectorAll($.selector)
    ].map(save);
}
export { createEditor as default };
