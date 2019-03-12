/*! Build : February 6, 2017 01:48:37 */
/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function (a, b) {
  function G(a) {
    var b = F[a] = {};
    return p.each(a.split(s), function (a, c) {
      b[c] = !0
    }), b
  }

  function J(a, c, d) {
    if (d === b && a.nodeType === 1) {
      var e = "data-" + c.replace(I, "-$1").toLowerCase();
      d = a.getAttribute(e);
      if (typeof d == "string") {
        try {
          d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d
        } catch (f) {}
        p.data(a, c, d)
      } else {
        d = b
      }
    }
    return d
  }

  function K(a) {
    var b;
    for (b in a) {
      if (b === "data" && p.isEmptyObject(a[b])) {
        continue
      }
      if (b !== "toJSON") {
        return !1
      }
    }
    return !0
  }

  function ba() {
    return !1
  }

  function bb() {
    return !0
  }

  function bh(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11
  }

  function bi(a, b) {
    do {
      a = a[b]
    } while (a && a.nodeType !== 1);
    return a
  }

  function bj(a, b, c) {
    b = b || 0;
    if (p.isFunction(b)) {
      return p.grep(a, function (a, d) {
        var e = !!b.call(a, d, a);
        return e === c
      })
    }
    if (b.nodeType) {
      return p.grep(a, function (a, d) {
        return a === b === c
      })
    }
    if (typeof b == "string") {
      var d = p.grep(a, function (a) {
        return a.nodeType === 1
      });
      if (be.test(b)) {
        return p.filter(b, d, !c)
      }
      b = p.filter(b, d)
    }
    return p.grep(a, function (a, d) {
      return p.inArray(a, b) >= 0 === c
    })
  }

  function bk(a) {
    var b = bl.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) {
      while (b.length) {
        c.createElement(b.pop())
      }
    }
    return c
  }

  function bC(a, b) {
    return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
  }

  function bD(a, b) {
    if (b.nodeType !== 1 || !p.hasData(a)) {
      return
    }
    var c, d, e, f = p._data(a),
      g = p._data(b, f),
      h = f.events;
    if (h) {
      delete g.handle, g.events = {};
      for (c in h) {
        for (d = 0, e = h[c].length; d < e; d++) {
          p.event.add(b, c, h[c][d])
        }
      }
    }
    g.data && (g.data = p.extend({}, g.data))
  }

  function bE(a, b) {
    var c;
    if (b.nodeType !== 1) {
      return
    }
    b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute(p.expando)
  }

  function bF(a) {
    return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
  }

  function bG(a) {
    bv.test(a.type) && (a.defaultChecked = a.checked)
  }

  function bY(a, b) {
    if (b in a) {
      return b
    }
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = bW.length;
    while (e--) {
      b = bW[e] + c;
      if (b in a) {
        return b
      }
    }
    return d
  }

  function bZ(a, b) {
    return a = b || a, p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
  }

  function b$(a, b) {
    var c, d, e = [],
      f = 0,
      g = a.length;
    for (; f < g; f++) {
      c = a[f];
      if (!c.style) {
        continue
      }
      e[f] = p._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && bZ(c) && (e[f] = p._data(c, "olddisplay", cc(c.nodeName)))) : (d = bH(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d))
    }
    for (f = 0; f < g; f++) {
      c = a[f];
      if (!c.style) {
        continue
      }
      if (!b || c.style.display === "none" || c.style.display === "") {
        c.style.display = b ? e[f] || "" : "none"
      }
    }
    return a
  }

  function b_(a, b, c) {
    var d = bP.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function ca(a, b, c, d) {
    var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
      f = 0;
    for (; e < 4; e += 2) {
      c === "margin" && (f += p.css(a, c + bV[e], !0)), d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bV[e])) || 0), c !== "margin" && (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bV[e])) || 0, c !== "padding" && (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0))
    }
    return f
  }

  function cb(a, b, c) {
    var d = b === "width" ? a.offsetWidth : a.offsetHeight,
      e = !0,
      f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
    if (d <= 0 || d == null) {
      d = bH(a, b);
      if (d < 0 || d == null) {
        d = a.style[b]
      }
      if (bQ.test(d)) {
        return d
      }
      e = f && (p.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
    }
    return d + ca(a, b, c || (f ? "border" : "content"), e) + "px"
  }

  function cc(a) {
    if (bS[a]) {
      return bS[a]
    }
    var b = p("<" + a + ">").appendTo(e.body),
      c = b.css("display");
    b.remove();
    if (c === "none" || c === "") {
      bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {
        frameBorder: 0,
        width: 0,
        height: 0
      }));
      if (!bJ || !bI.createElement) {
        bJ = (bI.contentWindow || bI.contentDocument).document, bJ.write("<!doctype html><html><body>"), bJ.close()
      }
      b = bJ.body.appendChild(bJ.createElement(a)), c = bH(b, "display"), e.body.removeChild(bI)
    }
    return bS[a] = c, c
  }

  function ci(a, b, c, d) {
    var e;
    if (p.isArray(b)) {
      p.each(b, function (b, e) {
        c || ce.test(a) ? d(a, e) : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
      })
    } else {
      if (!c && p.type(b) === "object") {
        for (e in b) {
          ci(a + "[" + e + "]", b[e], c, d)
        }
      } else {
        d(a, b)
      }
    }
  }

  function cz(a) {
    return function (b, c) {
      typeof b != "string" && (c = b, b = "*");
      var d, e, f, g = b.toLowerCase().split(s),
        h = 0,
        i = g.length;
      if (p.isFunction(c)) {
        for (; h < i; h++) {
          d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
      }
    }
  }

  function cA(a, c, d, e, f, g) {
    f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
    var h, i = a[f],
      j = 0,
      k = i ? i.length : 0,
      l = a === cv;
    for (; j < k && (l || !h); j++) {
      h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = cA(a, c, d, e, h, g)))
    }
    return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h
  }

  function cB(a, c) {
    var d, e, f = p.ajaxSettings.flatOptions || {};
    for (d in c) {
      c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d])
    }
    e && p.extend(!0, a, e)
  }

  function cC(a, c, d) {
    var e, f, g, h, i = a.contents,
      j = a.dataTypes,
      k = a.responseFields;
    for (f in k) {
      f in d && (c[k[f]] = d[f])
    }
    while (j[0] === "*") {
      j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"))
    }
    if (e) {
      for (f in i) {
        if (i[f] && i[f].test(e)) {
          j.unshift(f);
          break
        }
      }
    }
    if (j[0] in d) {
      g = j[0]
    } else {
      for (f in d) {
        if (!j[0] || a.converters[f + " " + j[0]]) {
          g = f;
          break
        }
        h || (h = f)
      }
      g = g || h
    }
    if (g) {
      return g !== j[0] && j.unshift(g), d[g]
    }
  }

  function cD(a, b) {
    var c, d, e, f, g = a.dataTypes.slice(),
      h = g[0],
      i = {},
      j = 0;
    a.dataFilter && (b = a.dataFilter(b, a.dataType));
    if (g[1]) {
      for (c in a.converters) {
        i[c.toLowerCase()] = a.converters[c]
      }
    }
    for (; e = g[++j];) {
      if (e !== "*") {
        if (h !== "*" && h !== e) {
          c = i[h + " " + e] || i["* " + e];
          if (!c) {
            for (d in i) {
              f = d.split(" ");
              if (f[1] === e) {
                c = i[h + " " + f[0]] || i["* " + f[0]];
                if (c) {
                  c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                  break
                }
              }
            }
          }
          if (c !== !0) {
            if (c && a["throws"]) {
              b = c(b)
            } else {
              try {
                b = c(b)
              } catch (k) {
                return {
                  state: "parsererror",
                  error: c ? k : "No conversion from " + h + " to " + e
                }
              }
            }
          }
        }
        h = e
      }
    }
    return {
      state: "success",
      data: b
    }
  }

  function cL() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  }

  function cM() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    } catch (b) {}
  }

  function cU() {
    return setTimeout(function () {
      cN = b
    }, 0), cN = p.now()
  }

  function cV(a, b) {
    p.each(b, function (b, c) {
      var d = (cT[b] || []).concat(cT["*"]),
        e = 0,
        f = d.length;
      for (; e < f; e++) {
        if (d[e].call(a, b, c)) {
          return
        }
      }
    })
  }

  function cW(a, b, c) {
    var d, e = 0,
      f = 0,
      g = cS.length,
      h = p.Deferred().always(function () {
        delete i.elem
      }),
      i = function () {
        var b = cN || cU(),
          c = Math.max(0, j.startTime + j.duration - b),
          d = 1 - (c / j.duration || 0),
          e = 0,
          f = j.tweens.length;
        for (; e < f; e++) {
          j.tweens[e].run(d)
        }
        return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: p.extend({}, b),
        opts: p.extend(!0, {
          specialEasing: {}
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: cN || cU(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c, d) {
          var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(e), e
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          for (; c < d; c++) {
            j.tweens[c].run(1)
          }
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    cX(k, j.opts.specialEasing);
    for (; e < g; e++) {
      d = cS[e].call(j, a, k, j.opts);
      if (d) {
        return d
      }
    }
    return cV(j, k), p.isFunction(j.opts.start) && j.opts.start.call(a, j), p.fx.timer(p.extend(i, {
      anim: j,
      queue: j.opts.queue,
      elem: a
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }

  function cX(a, b) {
    var c, d, e, f, g;
    for (c in a) {
      d = p.camelCase(c), e = b[d], f = a[c], p.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = p.cssHooks[d];
      if (g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e)
        }
      } else {
        b[d] = e
      }
    }
  }

  function cY(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this,
      m = a.style,
      n = {},
      o = [],
      q = a.nodeType && bZ(a);
    c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function () {
      j.unqueued || k()
    }), j.unqueued++, l.always(function () {
      l.always(function () {
        j.unqueued--, p.queue(a, "fx").length || j.empty.fire()
      })
    })), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)), c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function () {
      m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
    }));
    for (d in b) {
      f = b[d];
      if (cP.exec(f)) {
        delete b[d];
        if (f === (q ? "hide" : "show")) {
          continue
        }
        o.push(d)
      }
    }
    g = o.length;
    if (g) {
      h = p._data(a, "fxshow") || p._data(a, "fxshow", {}), q ? p(a).show() : l.done(function () {
        p(a).hide()
      }), l.done(function () {
        var b;
        p.removeData(a, "fxshow", !0);
        for (b in n) {
          p.style(a, b, n[b])
        }
      });
      for (d = 0; d < g; d++) {
        e = o[d], i = l.createTween(e, q ? h[e] : 0), n[e] = h[e] || p.style(a, e), e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0))
      }
    }
  }

  function cZ(a, b, c, d, e) {
    return new cZ.prototype.init(a, b, c, d, e)
  }

  function c$(a, b) {
    var c, d = {
        height: a
      },
      e = 0;
    b = b ? 1 : 0;
    for (; e < 4; e += 2 - b) {
      c = bV[e], d["margin" + c] = d["padding" + c] = a
    }
    return b && (d.opacity = d.width = a), d
  }

  function da(a) {
    return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
  }
  var c, d, e = a.document,
    f = a.location,
    g = a.navigator,
    h = a.jQuery,
    i = a.$,
    j = Array.prototype.push,
    k = Array.prototype.slice,
    l = Array.prototype.indexOf,
    m = Object.prototype.toString,
    n = Object.prototype.hasOwnProperty,
    o = String.prototype.trim,
    p = function (a, b) {
      return new p.fn.init(a, b, c)
    },
    q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    r = /\S/,
    s = /\s+/,
    t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^[\],:{}\s]*$/,
    x = /(?:^|:|,)(?:\s*\[)+/g,
    y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    A = /^-ms-/,
    B = /-([\da-z])/gi,
    C = function (a, b) {
      return (b + "").toUpperCase()
    },
    D = function () {
      e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready())
    },
    E = {};
  p.fn = p.prototype = {
    constructor: p,
    init: function (a, c, d) {
      var f, g, h, i;
      if (!a) {
        return this
      }
      if (a.nodeType) {
        return this.context = this[0] = a, this.length = 1, this
      }
      if (typeof a == "string") {
        a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);
        if (f && (f[1] || !c)) {
          if (f[1]) {
            return c = c instanceof p ? c[0] : c, i = c && c.nodeType ? c.ownerDocument || c : e, a = p.parseHTML(f[1], i, !0), v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0), p.merge(this, a)
          }
          g = e.getElementById(f[2]);
          if (g && g.parentNode) {
            if (g.id !== f[2]) {
              return d.find(a)
            }
            this.length = 1, this[0] = g
          }
          return this.context = e, this.selector = a, this
        }
        return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
      }
      return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this))
    },
    selector: "",
    jquery: "1.8.2",
    length: 0,
    size: function () {
      return this.length
    },
    toArray: function () {
      return k.call(this)
    },
    get: function (a) {
      return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
    },
    pushStack: function (a, b, c) {
      var d = p.merge(this.constructor(), a);
      return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
    },
    each: function (a, b) {
      return p.each(this, a, b)
    },
    ready: function (a) {
      return p.ready.promise().done(a), this
    },
    eq: function (a) {
      return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    slice: function () {
      return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
    },
    map: function (a) {
      return this.pushStack(p.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    },
    end: function () {
      return this.prevObject || this.constructor(null)
    },
    push: j,
    sort: [].sort,
    splice: [].splice
  }, p.fn.init.prototype = p.fn, p.extend = p.fn.extend = function () {
    var a, c, d, e, f, g, h = arguments[0] || {},
      i = 1,
      j = arguments.length,
      k = !1;
    typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !p.isFunction(h) && (h = {}), j === i && (h = this, --i);
    for (; i < j; i++) {
      if ((a = arguments[i]) != null) {
        for (c in a) {
          d = h[c], e = a[c];
          if (h === e) {
            continue
          }
          k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {}, h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
        }
      }
    }
    return h
  }, p.extend({
    noConflict: function (b) {
      return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      a ? p.readyWait++ : p.ready(!0)
    },
    ready: function (a) {
      if (a === !0 ? --p.readyWait : p.isReady) {
        return
      }
      if (!e.body) {
        return setTimeout(p.ready, 1)
      }
      p.isReady = !0;
      if (a !== !0 && --p.readyWait > 0) {
        return
      }
      d.resolveWith(e, [p]), p.fn.trigger && p(e).trigger("ready").off("ready")
    },
    isFunction: function (a) {
      return p.type(a) === "function"
    },
    isArray: Array.isArray || function (a) {
      return p.type(a) === "array"
    },
    isWindow: function (a) {
      return a != null && a == a.window
    },
    isNumeric: function (a) {
      return !isNaN(parseFloat(a)) && isFinite(a)
    },
    type: function (a) {
      return a == null ? String(a) : E[m.call(a)] || "object"
    },
    isPlainObject: function (a) {
      if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) {
        return !1
      }
      try {
        if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) {
          return !1
        }
      } catch (c) {
        return !1
      }
      var d;
      for (d in a) {}
      return d === b || n.call(a, d)
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) {
        return !1
      }
      return !0
    },
    error: function (a) {
      throw new Error(a)
    },
    parseHTML: function (a, b, c) {
      var d;
      return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null : []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
    },
    parseJSON: function (b) {
      if (!b || typeof b != "string") {
        return null
      }
      b = p.trim(b);
      if (a.JSON && a.JSON.parse) {
        return a.JSON.parse(b)
      }
      if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) {
        return (new Function("return " + b))()
      }
      p.error("Invalid JSON: " + b)
    },
    parseXML: function (c) {
      var d, e;
      if (!c || typeof c != "string") {
        return null
      }
      try {
        a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
      } catch (f) {
        d = b
      }
      return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c), d
    },
    noop: function () {},
    globalEval: function (b) {
      b && r.test(b) && (a.execScript || function (b) {
        a.eval.call(a, b)
      })(b)
    },
    camelCase: function (a) {
      return a.replace(A, "ms-").replace(B, C)
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function (a, c, d) {
      var e, f = 0,
        g = a.length,
        h = g === b || p.isFunction(a);
      if (d) {
        if (h) {
          for (e in a) {
            if (c.apply(a[e], d) === !1) {
              break
            }
          }
        } else {
          for (; f < g;) {
            if (c.apply(a[f++], d) === !1) {
              break
            }
          }
        }
      } else {
        if (h) {
          for (e in a) {
            if (c.call(a[e], e, a[e]) === !1) {
              break
            }
          }
        } else {
          for (; f < g;) {
            if (c.call(a[f], f, a[f++]) === !1) {
              break
            }
          }
        }
      }
      return a
    },
    trim: o && !o.call(" ") ? function (a) {
      return a == null ? "" : o.call(a)
    } : function (a) {
      return a == null ? "" : (a + "").replace(t, "")
    },
    makeArray: function (a, b) {
      var c, d = b || [];
      return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)), d
    },
    inArray: function (a, b, c) {
      var d;
      if (b) {
        if (l) {
          return l.call(b, a, c)
        }
        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
        for (; c < d; c++) {
          if (c in b && b[c] === a) {
            return c
          }
        }
      }
      return -1
    },
    merge: function (a, c) {
      var d = c.length,
        e = a.length,
        f = 0;
      if (typeof d == "number") {
        for (; f < d; f++) {
          a[e++] = c[f]
        }
      } else {
        while (c[f] !== b) {
          a[e++] = c[f++]
        }
      }
      return a.length = e, a
    },
    grep: function (a, b, c) {
      var d, e = [],
        f = 0,
        g = a.length;
      c = !!c;
      for (; f < g; f++) {
        d = !!b(a[f], f), c !== d && e.push(a[f])
      }
      return e
    },
    map: function (a, c, d) {
      var e, f, g = [],
        h = 0,
        i = a.length,
        j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
      if (j) {
        for (; h < i; h++) {
          e = c(a[h], h, d), e != null && (g[g.length] = e)
        }
      } else {
        for (f in a) {
          e = c(a[f], f, d), e != null && (g[g.length] = e)
        }
      }
      return g.concat.apply([], g)
    },
    guid: 1,
    proxy: function (a, c) {
      var d, e, f;
      return typeof c == "string" && (d = a[c], c = a, a = d), p.isFunction(a) ? (e = k.call(arguments, 2), f = function () {
        return a.apply(c, e.concat(k.call(arguments)))
      }, f.guid = a.guid = a.guid || p.guid++, f) : b
    },
    access: function (a, c, d, e, f, g, h) {
      var i, j = d == null,
        k = 0,
        l = a.length;
      if (d && typeof d == "object") {
        for (k in d) {
          p.access(a, c, k, d[k], 1, g, e)
        }
        f = 1
      } else {
        if (e !== b) {
          i = h === b && p.isFunction(e), j && (i ? (i = c, c = function (a, b, c) {
            return i.call(p(a), c)
          }) : (c.call(a, e), c = null));
          if (c) {
            for (; k < l; k++) {
              c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h)
            }
          }
          f = 1
        }
      }
      return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
    },
    now: function () {
      return (new Date).getTime()
    }
  }), p.ready.promise = function (b) {
    if (!d) {
      d = p.Deferred();
      if (e.readyState === "complete") {
        setTimeout(p.ready, 1)
      } else {
        if (e.addEventListener) {
          e.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", p.ready, !1)
        } else {
          e.attachEvent("onreadystatechange", D), a.attachEvent("onload", p.ready);
          var c = !1;
          try {
            c = a.frameElement == null && e.documentElement
          } catch (f) {}
          c && c.doScroll && function g() {
            if (!p.isReady) {
              try {
                c.doScroll("left")
              } catch (a) {
                return setTimeout(g, 50)
              }
              p.ready()
            }
          }()
        }
      }
    }
    return d.promise(b)
  }, p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
    E["[object " + b + "]"] = b.toLowerCase()
  }), c = p(e);
  var F = {};
  p.Callbacks = function (a) {
    a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
    var c, d, e, f, g, h, i = [],
      j = !a.once && [],
      k = function (b) {
        c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0;
        for (; i && h < g; h++) {
          if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break
          }
        }
        e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
      },
      l = {
        add: function () {
          if (i) {
            var b = i.length;
            (function d(b) {
              p.each(b, function (b, c) {
                var e = p.type(c);
                e === "function" && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && e !== "string" && d(c)
              })
            })(arguments), e ? g = i.length : c && (f = b, k(c))
          }
          return this
        },
        remove: function () {
          return i && p.each(arguments, function (a, b) {
            var c;
            while ((c = p.inArray(b, i, c)) > -1) {
              i.splice(c, 1), e && (c <= g && g--, c <= h && h--)
            }
          }), this
        },
        has: function (a) {
          return p.inArray(a, i) > -1
        },
        empty: function () {
          return i = [], this
        },
        disable: function () {
          return i = j = c = b, this
        },
        disabled: function () {
          return !i
        },
        lock: function () {
          return j = b, c || l.disable(), this
        },
        locked: function () {
          return !j
        },
        fireWith: function (a, b) {
          return b = b || [], b = [a, b.slice ? b.slice() : b], i && (!d || j) && (e ? j.push(b) : k(b)), this
        },
        fire: function () {
          return l.fireWith(this, arguments), this
        },
        fired: function () {
          return !!d
        }
      };
    return l
  }, p.extend({
    Deferred: function (a) {
      var b = [
          ["resolve", "done", p.Callbacks("once memory"), "resolved"],
          ["reject", "fail", p.Callbacks("once memory"), "rejected"],
          ["notify", "progress", p.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function () {
            return c
          },
          always: function () {
            return e.done(arguments).fail(arguments), this
          },
          then: function () {
            var a = arguments;
            return p.Deferred(function (c) {
              p.each(b, function (b, d) {
                var f = d[0],
                  g = a[b];
                e[d[1]](p.isFunction(g) ? function () {
                  var a = g.apply(this, arguments);
                  a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                } : c[f])
              }), a = null
            }).promise()
          },
          promise: function (a) {
            return a != null ? p.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, p.each(b, function (a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h
        }, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function (a) {
      var b = 0,
        c = k.call(arguments),
        d = c.length,
        e = d !== 1 || a && p.isFunction(a.promise) ? d : 0,
        f = e === 1 ? a : p.Deferred(),
        g = function (a, b, c) {
          return function (d) {
            b[a] = this, c[a] = arguments.length > 1 ? k.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
          }
        },
        h, i, j;
      if (d > 1) {
        h = new Array(d), i = new Array(d), j = new Array(d);
        for (; b < d; b++) {
          c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
        }
      }
      return e || f.resolveWith(j, c), f.promise()
    }
  }), p.support = function () {
    var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
    n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5";
    if (!c || !c.length) {
      return {}
    }
    f = e.createElement("select"), g = f.appendChild(e.createElement("option")), h = n.getElementsByTagName("input")[0], b = {
      leadingWhitespace: n.firstChild.nodeType === 3,
      tbody: !n.getElementsByTagName("tbody").length,
      htmlSerialize: !!n.getElementsByTagName("link").length,
      style: /top/.test(d.getAttribute("style")),
      hrefNormalized: d.getAttribute("href") === "/a",
      opacity: /^0.5/.test(d.style.opacity),
      cssFloat: !!d.style.cssFloat,
      checkOn: h.value === "on",
      optSelected: g.selected,
      getSetAttribute: n.className !== "t",
      enctype: !!e.createElement("form").enctype,
      html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
      boxModel: e.compatMode === "CSS1Compat",
      submitBubbles: !0,
      changeBubbles: !0,
      focusinBubbles: !1,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1
    }, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled;
    try {
      delete n.test
    } catch (o) {
      b.deleteExpando = !1
    }!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function () {
      b.noCloneEvent = !1
    }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)), h = e.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = h.value === "t", h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), i = e.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, i.removeChild(h), i.appendChild(n);
    if (n.attachEvent) {
      for (k in {
          submit: !0,
          change: !0,
          focusin: !0
        }) {
        j = "on" + k, l = j in n, l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"), b[k + "Bubbles"] = l
      }
    }
    return p(function () {
      var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
        i = e.getElementsByTagName("body")[0];
      if (!i) {
        return
      }
      c = e.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", i.insertBefore(c, i.firstChild), d = e.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && f[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {
        width: "4px"
      }).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), i.removeChild(c), c = d = f = g = null
    }), i.removeChild(n), c = d = f = g = h = i = n = null, b
  }();
  var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    I = /([A-Z])/g;
  p.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function (a) {
      return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando], !!a && !K(a)
    },
    data: function (a, c, d, e) {
      if (!p.acceptData(a)) {
        return
      }
      var f, g, h = p.expando,
        i = typeof c == "string",
        j = a.nodeType,
        k = j ? p.cache : a,
        l = j ? a[h] : a[h] && h;
      if ((!l || !k[l] || !e && !k[l].data) && i && d === b) {
        return
      }
      l || (j ? a[h] = l = p.deletedIds.pop() || p.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = p.noop));
      if (typeof c == "object" || typeof c == "function") {
        e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c)
      }
      return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[p.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f, g
    },
    removeData: function (a, b, c) {
      if (!p.acceptData(a)) {
        return
      }
      var d, e, f, g = a.nodeType,
        h = g ? p.cache : a,
        i = g ? a[p.expando] : p.expando;
      if (!h[i]) {
        return
      }
      if (b) {
        d = c ? h[i] : h[i].data;
        if (d) {
          p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
          for (e = 0, f = b.length; e < f; e++) {
            delete d[b[e]]
          }
          if (!(c ? K : p.isEmptyObject)(d)) {
            return
          }
        }
      }
      if (!c) {
        delete h[i].data;
        if (!K(h[i])) {
          return
        }
      }
      g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null
    },
    _data: function (a, b, c) {
      return p.data(a, b, c, !0)
    },
    acceptData: function (a) {
      var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
      return !b || b !== !0 && a.getAttribute("classid") === b
    }
  }), p.fn.extend({
    data: function (a, c) {
      var d, e, f, g, h, i = this[0],
        j = 0,
        k = null;
      if (a === b) {
        if (this.length) {
          k = p.data(i);
          if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
            f = i.attributes;
            for (h = f.length; j < h; j++) {
              g = f[j].name, g.indexOf("data-") || (g = p.camelCase(g.substring(5)), J(i, g, k[g]))
            }
            p._data(i, "parsedAttrs", !0)
          }
        }
        return k
      }
      return typeof a == "object" ? this.each(function () {
        p.data(this, a)
      }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this, function (c) {
        if (c === b) {
          return k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = p.data(i, a), k = J(i, a, k)), k === b && d[1] ? this.data(d[0]) : k
        }
        d[1] = c, this.each(function () {
          var b = p(this);
          b.triggerHandler("setData" + e, d), p.data(this, a, c), b.triggerHandler("changeData" + e, d)
        })
      }, null, c, arguments.length > 1, null, !1))
    },
    removeData: function (a) {
      return this.each(function () {
        p.removeData(this, a)
      })
    }
  }), p.extend({
    queue: function (a, b, c) {
      var d;
      if (a) {
        return b = (b || "fx") + "queue", d = p._data(a, b), c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)), d || []
      }
    },
    dequeue: function (a, b) {
      b = b || "fx";
      var c = p.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = p._queueHooks(a, b),
        g = function () {
          p.dequeue(a, b)
        };
      e === "inprogress" && (e = c.shift(), d--), e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function (a, b) {
      var c = b + "queueHooks";
      return p._data(a, c) || p._data(a, c, {
        empty: p.Callbacks("once memory").add(function () {
          p.removeData(a, b + "queue", !0), p.removeData(a, c, !0)
        })
      })
    }
  }), p.fn.extend({
    queue: function (a, c) {
      var d = 2;
      return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function () {
        var b = p.queue(this, a, c);
        p._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
      })
    },
    dequeue: function (a) {
      return this.each(function () {
        p.dequeue(this, a)
      })
    },
    delay: function (a, b) {
      return a = p.fx ? p.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
        var d = setTimeout(b, a);
        c.stop = function () {
          clearTimeout(d)
        }
      })
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", [])
    },
    promise: function (a, c) {
      var d, e = 1,
        f = p.Deferred(),
        g = this,
        h = this.length,
        i = function () {
          --e || f.resolveWith(g, [g])
        };
      typeof a != "string" && (c = a, a = b), a = a || "fx";
      while (h--) {
        d = p._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i))
      }
      return i(), f.promise(c)
    }
  });
  var L, M, N, O = /[\t\r\n]/g,
    P = /\r/g,
    Q = /^(?:button|input)$/i,
    R = /^(?:button|input|object|select|textarea)$/i,
    S = /^a(?:rea|)$/i,
    T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    U = p.support.getSetAttribute;
  p.fn.extend({
    attr: function (a, b) {
      return p.access(this, p.attr, a, b, arguments.length > 1)
    },
    removeAttr: function (a) {
      return this.each(function () {
        p.removeAttr(this, a)
      })
    },
    prop: function (a, b) {
      return p.access(this, p.prop, a, b, arguments.length > 1)
    },
    removeProp: function (a) {
      return a = p.propFix[a] || a, this.each(function () {
        try {
          this[a] = b, delete this[a]
        } catch (c) {}
      })
    },
    addClass: function (a) {
      var b, c, d, e, f, g, h;
      if (p.isFunction(a)) {
        return this.each(function (b) {
          p(this).addClass(a.call(this, b, this.className))
        })
      }
      if (a && typeof a == "string") {
        b = a.split(s);
        for (c = 0, d = this.length; c < d; c++) {
          e = this[c];
          if (e.nodeType === 1) {
            if (!e.className && b.length === 1) {
              e.className = a
            } else {
              f = " " + e.className + " ";
              for (g = 0, h = b.length; g < h; g++) {
                f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ")
              }
              e.className = p.trim(f)
            }
          }
        }
      }
      return this
    },
    removeClass: function (a) {
      var c, d, e, f, g, h, i;
      if (p.isFunction(a)) {
        return this.each(function (b) {
          p(this).removeClass(a.call(this, b, this.className))
        })
      }
      if (a && typeof a == "string" || a === b) {
        c = (a || "").split(s);
        for (h = 0, i = this.length; h < i; h++) {
          e = this[h];
          if (e.nodeType === 1 && e.className) {
            d = (" " + e.className + " ").replace(O, " ");
            for (f = 0, g = c.length; f < g; f++) {
              while (d.indexOf(" " + c[f] + " ") >= 0) {
                d = d.replace(" " + c[f] + " ", " ")
              }
            }
            e.className = a ? p.trim(d) : ""
          }
        }
      }
      return this
    },
    toggleClass: function (a, b) {
      var c = typeof a,
        d = typeof b == "boolean";
      return p.isFunction(a) ? this.each(function (c) {
        p(this).toggleClass(a.call(this, c, this.className, b), b)
      }) : this.each(function () {
        if (c === "string") {
          var e, f = 0,
            g = p(this),
            h = b,
            i = a.split(s);
          while (e = i[f++]) {
            h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
          }
        } else {
          if (c === "undefined" || c === "boolean") {
            this.className && p._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || ""
          }
        }
      })
    },
    hasClass: function (a) {
      var b = " " + a + " ",
        c = 0,
        d = this.length;
      for (; c < d; c++) {
        if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0) {
          return !0
        }
      }
      return !1
    },
    val: function (a) {
      var c, d, e, f = this[0];
      if (!arguments.length) {
        if (f) {
          return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "" : d)
        }
        return
      }
      return e = p.isFunction(a), this.each(function (d) {
        var f, g = p(this);
        if (this.nodeType !== 1) {
          return
        }
        e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function (a) {
          return a == null ? "" : a + ""
        })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
        if (!c || !("set" in c) || c.set(this, f, "value") === b) {
          this.value = f
        }
      })
    }
  }), p.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = a.attributes.value;
          return !b || b.specified ? a.value : a.text
        }
      },
      select: {
        get: function (a) {
          var b, c, d, e, f = a.selectedIndex,
            g = [],
            h = a.options,
            i = a.type === "select-one";
          if (f < 0) {
            return null
          }
          c = i ? f : 0, d = i ? f + 1 : h.length;
          for (; c < d; c++) {
            e = h[c];
            if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
              b = p(e).val();
              if (i) {
                return b
              }
              g.push(b)
            }
          }
          return i && !g.length && h.length ? p(h[f]).val() : g
        },
        set: function (a, b) {
          var c = p.makeArray(b);
          return p(a).find("option").each(function () {
            this.selected = p.inArray(p(this).val(), c) >= 0
          }), c.length || (a.selectedIndex = -1), c
        }
      }
    },
    attrFn: {},
    attr: function (a, c, d, e) {
      var f, g, h, i = a.nodeType;
      if (!a || i === 3 || i === 8 || i === 2) {
        return
      }
      if (e && p.isFunction(p.fn[c])) {
        return p(a)[c](d)
      }
      if (typeof a.getAttribute == "undefined") {
        return p.prop(a, c, d)
      }
      h = i !== 1 || !p.isXMLDoc(a), h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M : L));
      if (d !== b) {
        if (d === null) {
          p.removeAttr(a, c);
          return
        }
        return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d)
      }
      return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f)
    },
    removeAttr: function (a, b) {
      var c, d, e, f, g = 0;
      if (b && a.nodeType === 1) {
        d = b.split(s);
        for (; g < d.length; g++) {
          e = d[g], e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e : c), f && c in a && (a[c] = !1))
        }
      }
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (Q.test(a.nodeName) && a.parentNode) {
            p.error("type property can't be changed")
          } else {
            if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b
            }
          }
        }
      },
      value: {
        get: function (a, b) {
          return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
        },
        set: function (a, b, c) {
          if (L && p.nodeName(a, "button")) {
            return L.set(a, b, c)
          }
          a.value = b
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function (a, c, d) {
      var e, f, g, h = a.nodeType;
      if (!a || h === 3 || h === 8 || h === 2) {
        return
      }
      return g = h !== 1 || !p.isXMLDoc(a), g && (c = p.propFix[c] || c, f = p.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c]
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var c = a.getAttributeNode("tabindex");
          return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
        }
      }
    }
  }), M = {
    get: function (a, c) {
      var d, e = p.prop(a, c);
      return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
    },
    set: function (a, b, c) {
      var d;
      return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
    }
  }, U || (N = {
    name: !0,
    id: !0,
    coords: !0
  }, L = p.valHooks.button = {
    get: function (a, c) {
      var d;
      return d = a.getAttributeNode(c), d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
    },
    set: function (a, b, c) {
      var d = a.getAttributeNode(c);
      return d || (d = e.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
    }
  }, p.each(["width", "height"], function (a, b) {
    p.attrHooks[b] = p.extend(p.attrHooks[b], {
      set: function (a, c) {
        if (c === "") {
          return a.setAttribute(b, "auto"), c
        }
      }
    })
  }), p.attrHooks.contenteditable = {
    get: L.get,
    set: function (a, b, c) {
      b === "" && (b = "false"), L.set(a, b, c)
    }
  }), p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function (a, c) {
    p.attrHooks[c] = p.extend(p.attrHooks[c], {
      get: function (a) {
        var d = a.getAttribute(c, 2);
        return d === null ? b : d
      }
    })
  }), p.support.style || (p.attrHooks.style = {
    get: function (a) {
      return a.style.cssText.toLowerCase() || b
    },
    set: function (a, b) {
      return a.style.cssText = b + ""
    }
  }), p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
    get: function (a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    }
  })), p.support.enctype || (p.propFix.enctype = "encoding"), p.support.checkOn || p.each(["radio", "checkbox"], function () {
    p.valHooks[this] = {
      get: function (a) {
        return a.getAttribute("value") === null ? "on" : a.value
      }
    }
  }), p.each(["radio", "checkbox"], function () {
    p.valHooks[this] = p.extend(p.valHooks[this], {
      set: function (a, b) {
        if (p.isArray(b)) {
          return a.checked = p.inArray(p(a).val(), b) >= 0
        }
      }
    })
  });
  var V = /^(?:textarea|input|select)$/i,
    W = /^([^\.]*|)(?:\.(.+)|)$/,
    X = /(?:^|\s)hover(\.\S+|)\b/,
    Y = /^key/,
    Z = /^(?:mouse|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/,
    _ = function (a) {
      return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1")
    };
  p.event = {
      add: function (a, c, d, e, f) {
        var g, h, i, j, k, l, m, n, o, q, r;
        if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) {
          return
        }
        d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = p.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function (a) {
          return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b
        }, h.elem = a), c = p.trim(_(c)).split(" ");
        for (j = 0; j < c.length; j++) {
          k = W.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = p.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = p.event.special[l] || {}, n = p.extend({
            type: l,
            origType: k[1],
            data: e,
            handler: d,
            guid: d.guid,
            selector: f,
            needsContext: f && p.expr.match.needsContext.test(f),
            namespace: m.join(".")
          }, o), q = i[l];
          if (!q) {
            q = i[l] = [], q.delegateCount = 0;
            if (!r.setup || r.setup.call(a, e, m, h) === !1) {
              a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
            }
          }
          r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), p.event.global[l] = !0
        }
        a = null
      },
      global: {},
      remove: function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
        if (!r || !(m = r.events)) {
          return
        }
        b = p.trim(_(b || "")).split(" ");
        for (f = 0; f < b.length; f++) {
          g = W.exec(b[f]) || [], h = i = g[1], j = g[2];
          if (!h) {
            for (h in m) {
              p.event.remove(a, h + b[f], c, d, !0)
            }
            continue
          }
          n = p.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          for (l = 0; l < o.length; l++) {
            q = o[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q))
          }
          o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h])
        }
        p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0))
      },
      customEvent: {
        getData: !0,
        setData: !0,
        changeData: !0
      },
      trigger: function (c, d, f, g) {
        if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
          var h, i, j, k, l, m, n, o, q, r, s = c.type || c,
            t = [];
          if ($.test(s + p.event.triggered)) {
            return
          }
          s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
          if ((!f || p.event.customEvent[s]) && !p.event.global[s]) {
            return
          }
          c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s, c) : new p.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = s.indexOf(":") < 0 ? "on" + s : "";
          if (!f) {
            h = p.cache;
            for (j in h) {
              h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0)
            }
            return
          }
          c.result = b, c.target || (c.target = f), d = d != null ? p.makeArray(d) : [], d.unshift(c), n = p.event.special[s] || {};
          if (n.trigger && n.trigger.apply(f, d) === !1) {
            return
          }
          q = [
            [f, n.bindType || s]
          ];
          if (!g && !n.noBubble && !p.isWindow(f)) {
            r = n.delegateType || s, k = $.test(r + s) ? f : f.parentNode;
            for (l = f; k; k = k.parentNode) {
              q.push([k, r]), l = k
            }
            l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
          }
          for (j = 0; j < q.length && !c.isPropagationStopped(); j++) {
            k = q[j][0], c.type = q[j][1], o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"), o && o.apply(k, d), o = m && k[m], o && p.acceptData(k) && o.apply && o.apply(k, d) === !1 && c.preventDefault()
          }
          return c.type = s, !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)), c.result
        }
        return
      },
      dispatch: function (c) {
        c = p.event.fix(c || a.event);
        var d, e, f, g, h, i, j, l, m, n, o = (p._data(this, "events") || {})[c.type] || [],
          q = o.delegateCount,
          r = k.call(arguments),
          s = !c.exclusive && !c.namespace,
          t = p.event.special[c.type] || {},
          u = [];
        r[0] = c, c.delegateTarget = this;
        if (t.preDispatch && t.preDispatch.call(this, c) === !1) {
          return
        }
        if (q && (!c.button || c.type !== "click")) {
          for (f = c.target; f != this; f = f.parentNode || this) {
            if (f.disabled !== !0 || c.type !== "click") {
              h = {}, j = [];
              for (d = 0; d < q; d++) {
                l = o[d], m = l.selector, h[m] === b && (h[m] = l.needsContext ? p(m, this).index(f) >= 0 : p.find(m, this, null, [f]).length), h[m] && j.push(l)
              }
              j.length && u.push({
                elem: f,
                matches: j
              })
            }
          }
        }
        o.length > q && u.push({
          elem: this,
          matches: o.slice(q)
        });
        for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
          i = u[d], c.currentTarget = i.elem;
          for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
            l = i.matches[e];
            if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) {
              c.data = l.data, c.handleObj = l, g = ((p.event.special[l.origType] || {}).handle || l.handler).apply(i.elem, r), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation()))
            }
          }
        }
        return t.postDispatch && t.postDispatch.call(this, c), c.result
      },
      props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (a, b) {
          return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (a, c) {
          var d, f, g, h = c.button,
            i = c.fromElement;
          return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a
        }
      },
      fix: function (a) {
        if (a[p.expando]) {
          return a
        }
        var b, c, d = a,
          f = p.event.fixHooks[a.type] || {},
          g = f.props ? this.props.concat(f.props) : this.props;
        a = p.Event(d);
        for (b = g.length; b;) {
          c = g[--b], a[c] = d[c]
        }
        return a.target || (a.target = d.srcElement || e), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, d) : a
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          delegateType: "focusin"
        },
        blur: {
          delegateType: "focusout"
        },
        beforeunload: {
          setup: function (a, b, c) {
            p.isWindow(this) && (this.onbeforeunload = c)
          },
          teardown: function (a, b) {
            this.onbeforeunload === b && (this.onbeforeunload = null)
          }
        }
      },
      simulate: function (a, b, c, d) {
        var e = p.extend(new p.Event, c, {
          type: a,
          isSimulated: !0,
          originalEvent: {}
        });
        d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
      }
    }, p.event.handle = p.event.dispatch, p.removeEvent = e.removeEventListener ? function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
      var d = "on" + b;
      a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c))
    }, p.Event = function (a, b) {
      if (this instanceof p.Event) {
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a, b && p.extend(this, b), this.timeStamp = a && a.timeStamp || p.now(), this[p.expando] = !0
      } else {
        return new p.Event(a, b)
      }
    }, p.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = bb;
        var a = this.originalEvent;
        if (!a) {
          return
        }
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
      },
      stopPropagation: function () {
        this.isPropagationStopped = bb;
        var a = this.originalEvent;
        if (!a) {
          return
        }
        a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
      },
      stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = bb, this.stopPropagation()
      },
      isDefaultPrevented: ba,
      isPropagationStopped: ba,
      isImmediatePropagationStopped: ba
    }, p.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, function (a, b) {
      p.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function (a) {
          var c, d = this,
            e = a.relatedTarget,
            f = a.handleObj,
            g = f.selector;
          if (!e || e !== d && !p.contains(d, e)) {
            a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b
          }
          return c
        }
      }
    }), p.support.submitBubbles || (p.event.special.submit = {
      setup: function () {
        if (p.nodeName(this, "form")) {
          return !1
        }
        p.event.add(this, "click._submit keypress._submit", function (a) {
          var c = a.target,
            d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
          d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function (a) {
            a._submit_bubble = !0
          }), p._data(d, "_submit_attached", !0))
        })
      },
      postDispatch: function (a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
      },
      teardown: function () {
        if (p.nodeName(this, "form")) {
          return !1
        }
        p.event.remove(this, "._submit")
      }
    }), p.support.changeBubbles || (p.event.special.change = {
      setup: function () {
        if (V.test(this.nodeName)) {
          if (this.type === "checkbox" || this.type === "radio") {
            p.event.add(this, "propertychange._change", function (a) {
              a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), p.event.add(this, "click._change", function (a) {
              this._just_changed && !a.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, a, !0)
            })
          }
          return !1
        }
        p.event.add(this, "beforeactivate._change", function (a) {
          var b = a.target;
          V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function (a) {
            this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
          }), p._data(b, "_change_attached", !0))
        })
      },
      handle: function (a) {
        var b = a.target;
        if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
          return a.handleObj.handler.apply(this, arguments)
        }
      },
      teardown: function () {
        return p.event.remove(this, "._change"), !V.test(this.nodeName)
      }
    }), p.support.focusinBubbles || p.each({
      focus: "focusin",
      blur: "focusout"
    }, function (a, b) {
      var c = 0,
        d = function (a) {
          p.event.simulate(b, a.target, p.event.fix(a), !0)
        };
      p.event.special[b] = {
        setup: function () {
          c++ === 0 && e.addEventListener(a, d, !0)
        },
        teardown: function () {
          --c === 0 && e.removeEventListener(a, d, !0)
        }
      }
    }), p.fn.extend({
      on: function (a, c, d, e, f) {
        var g, h;
        if (typeof a == "object") {
          typeof c != "string" && (d = d || c, c = b);
          for (h in a) {
            this.on(h, c, d, a[h], f)
          }
          return this
        }
        d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
        if (e === !1) {
          e = ba
        } else {
          if (!e) {
            return this
          }
        }
        return f === 1 && (g = e, e = function (a) {
          return p().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = p.guid++)), this.each(function () {
          p.event.add(this, a, e, d, c)
        })
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1)
      },
      off: function (a, c, d) {
        var e, f;
        if (a && a.preventDefault && a.handleObj) {
          return e = a.handleObj, p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this
        }
        if (typeof a == "object") {
          for (f in a) {
            this.off(f, c, a[f])
          }
          return this
        }
        if (c === !1 || typeof c == "function") {
          d = c, c = b
        }
        return d === !1 && (d = ba), this.each(function () {
          p.event.remove(this, a, d, c)
        })
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c)
      },
      unbind: function (a, b) {
        return this.off(a, null, b)
      },
      live: function (a, b, c) {
        return p(this.context).on(a, this.selector, b, c), this
      },
      die: function (a, b) {
        return p(this.context).off(a, this.selector || "**", b), this
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
      },
      undelegate: function (a, b, c) {
        return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)
      },
      trigger: function (a, b) {
        return this.each(function () {
          p.event.trigger(a, b, this)
        })
      },
      triggerHandler: function (a, b) {
        if (this[0]) {
          return p.event.trigger(a, b, this[0], !0)
        }
      },
      toggle: function (a) {
        var b = arguments,
          c = a.guid || p.guid++,
          d = 0,
          e = function (c) {
            var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
            return p._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
          };
        e.guid = c;
        while (d < b.length) {
          b[d++].guid = c
        }
        return this.click(e)
      },
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
      }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
      p.fn[b] = function (a, c) {
        return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
      }, Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks), Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
    }),
    function (a, b) {
      function bc(a, b, c, d) {
        c = c || [], b = b || r;
        var e, f, i, j, k = b.nodeType;
        if (!a || typeof a != "string") {
          return c
        }
        if (k !== 1 && k !== 9) {
          return []
        }
        i = g(b);
        if (!i && !d) {
          if (e = P.exec(a)) {
            if (j = e[1]) {
              if (k === 9) {
                f = b.getElementById(j);
                if (!f || !f.parentNode) {
                  return c
                }
                if (f.id === j) {
                  return c.push(f), c
                }
              } else {
                if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && h(b, f) && f.id === j) {
                  return c.push(f), c
                }
              }
            } else {
              if (e[2]) {
                return w.apply(c, x.call(b.getElementsByTagName(a), 0)), c
              }
              if ((j = e[3]) && _ && b.getElementsByClassName) {
                return w.apply(c, x.call(b.getElementsByClassName(j), 0)), c
              }
            }
          }
        }
        return bp(a.replace(L, "$1"), b, c, d, i)
      }

      function bd(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return c === "input" && b.type === a
        }
      }

      function be(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return (c === "input" || c === "button") && b.type === a
        }
      }

      function bf(a) {
        return z(function (b) {
          return b = +b, z(function (c, d) {
            var e, f = a([], c.length, b),
              g = f.length;
            while (g--) {
              c[e = f[g]] && (c[e] = !(d[e] = c[e]))
            }
          })
        })
      }

      function bg(a, b, c) {
        if (a === b) {
          return c
        }
        var d = a.nextSibling;
        while (d) {
          if (d === b) {
            return -1
          }
          d = d.nextSibling
        }
        return 1
      }

      function bh(a, b) {
        var c, d, f, g, h, i, j, k = C[o][a];
        if (k) {
          return b ? 0 : k.slice(0)
        }
        h = a, i = [], j = e.preFilter;
        while (h) {
          if (!c || (d = M.exec(h))) {
            d && (h = h.slice(d[0].length)), i.push(f = [])
          }
          c = !1;
          if (d = N.exec(h)) {
            f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = d[0].replace(L, " ")
          }
          for (g in e.filter) {
            (d = W[g].exec(h)) && (!j[g] || (d = j[g](d, r, !0))) && (f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = g, c.matches = d)
          }
          if (!c) {
            break
          }
        }
        return b ? h.length : h ? bc.error(a) : C(a, i).slice(0)
      }

      function bi(a, b, d) {
        var e = b.dir,
          f = d && b.dir === "parentNode",
          g = u++;
        return b.first ? function (b, c, d) {
          while (b = b[e]) {
            if (f || b.nodeType === 1) {
              return a(b, c, d)
            }
          }
        } : function (b, d, h) {
          if (!h) {
            var i, j = t + " " + g + " ",
              k = j + c;
            while (b = b[e]) {
              if (f || b.nodeType === 1) {
                if ((i = b[o]) === k) {
                  return b.sizset
                }
                if (typeof i == "string" && i.indexOf(j) === 0) {
                  if (b.sizset) {
                    return b
                  }
                } else {
                  b[o] = k;
                  if (a(b, d, h)) {
                    return b.sizset = !0, b
                  }
                  b.sizset = !1
                }
              }
            }
          } else {
            while (b = b[e]) {
              if (f || b.nodeType === 1) {
                if (a(b, d, h)) {
                  return b
                }
              }
            }
          }
        }
      }

      function bj(a) {
        return a.length > 1 ? function (b, c, d) {
          var e = a.length;
          while (e--) {
            if (!a[e](b, c, d)) {
              return !1
            }
          }
          return !0
        } : a[0]
      }

      function bk(a, b, c, d, e) {
        var f, g = [],
          h = 0,
          i = a.length,
          j = b != null;
        for (; h < i; h++) {
          if (f = a[h]) {
            if (!c || c(f, d, e)) {
              g.push(f), j && b.push(h)
            }
          }
        }
        return g
      }

      function bl(a, b, c, d, e, f) {
        return d && !d[o] && (d = bl(d)), e && !e[o] && (e = bl(e, f)), z(function (f, g, h, i) {
          if (f && e) {
            return
          }
          var j, k, l, m = [],
            n = [],
            o = g.length,
            p = f || bo(b || "*", h.nodeType ? [h] : h, [], f),
            q = a && (f || !b) ? bk(p, m, a, h, i) : p,
            r = c ? e || (f ? a : o || d) ? [] : g : q;
          c && c(q, r, h, i);
          if (d) {
            l = bk(r, n), d(l, [], h, i), j = l.length;
            while (j--) {
              if (k = l[j]) {
                r[n[j]] = !(q[n[j]] = k)
              }
            }
          }
          if (f) {
            j = a && r.length;
            while (j--) {
              if (k = r[j]) {
                f[m[j]] = !(g[m[j]] = k)
              }
            }
          } else {
            r = bk(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : w.apply(g, r)
          }
        })
      }

      function bm(a) {
        var b, c, d, f = a.length,
          g = e.relative[a[0].type],
          h = g || e.relative[" "],
          i = g ? 1 : 0,
          j = bi(function (a) {
            return a === b
          }, h, !0),
          k = bi(function (a) {
            return y.call(b, a) > -1
          }, h, !0),
          m = [function (a, c, d) {
            return !g && (d || c !== l) || ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
          }];
        for (; i < f; i++) {
          if (c = e.relative[a[i].type]) {
            m = [bi(bj(m), c)]
          } else {
            c = e.filter[a[i].type].apply(null, a[i].matches);
            if (c[o]) {
              d = ++i;
              for (; d < f; d++) {
                if (e.relative[a[d].type]) {
                  break
                }
              }
              return bl(i > 1 && bj(m), i > 1 && a.slice(0, i - 1).join("").replace(L, "$1"), c, i < d && bm(a.slice(i, d)), d < f && bm(a = a.slice(d)), d < f && a.join(""))
            }
            m.push(c)
          }
        }
        return bj(m)
      }

      function bn(a, b) {
        var d = b.length > 0,
          f = a.length > 0,
          g = function (h, i, j, k, m) {
            var n, o, p, q = [],
              s = 0,
              u = "0",
              x = h && [],
              y = m != null,
              z = l,
              A = h || f && e.find.TAG("*", m && i.parentNode || i),
              B = t += z == null ? 1 : Math.E;
            y && (l = i !== r && i, c = g.el);
            for (;
              (n = A[u]) != null; u++) {
              if (f && n) {
                for (o = 0; p = a[o]; o++) {
                  if (p(n, i, j)) {
                    k.push(n);
                    break
                  }
                }
                y && (t = B, c = ++g.el)
              }
              d && ((n = !p && n) && s--, h && x.push(n))
            }
            s += u;
            if (d && u !== s) {
              for (o = 0; p = b[o]; o++) {
                p(x, q, i, j)
              }
              if (h) {
                if (s > 0) {
                  while (u--) {
                    !x[u] && !q[u] && (q[u] = v.call(k))
                  }
                }
                q = bk(q)
              }
              w.apply(k, q), y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k)
            }
            return y && (t = B, l = z), x
          };
        return g.el = 0, d ? z(g) : g
      }

      function bo(a, b, c, d) {
        var e = 0,
          f = b.length;
        for (; e < f; e++) {
          bc(a, b[e], c, d)
        }
        return c
      }

      function bp(a, b, c, d, f) {
        var g, h, j, k, l, m = bh(a),
          n = m.length;
        if (!d && m.length === 1) {
          h = m[0] = m[0].slice(0);
          if (h.length > 2 && (j = h[0]).type === "ID" && b.nodeType === 9 && !f && e.relative[h[1].type]) {
            b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
            if (!b) {
              return c
            }
            a = a.slice(h.shift().length)
          }
          for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
            j = h[g];
            if (e.relative[k = j.type]) {
              break
            }
            if (l = e.find[k]) {
              if (d = l(j.matches[0].replace(V, ""), R.test(h[0].type) && b.parentNode || b, f)) {
                h.splice(g, 1), a = d.length && h.join("");
                if (!a) {
                  return w.apply(c, x.call(d, 0)), c
                }
                break
              }
            }
          }
        }
        return i(a, m)(d, b, f, c, R.test(a)), c
      }

      function bq() {}
      var c, d, e, f, g, h, i, j, k, l, m = !0,
        n = "undefined",
        o = ("sizcache" + Math.random()).replace(".", ""),
        q = String,
        r = a.document,
        s = r.documentElement,
        t = 0,
        u = 0,
        v = [].pop,
        w = [].push,
        x = [].slice,
        y = [].indexOf || function (a) {
          var b = 0,
            c = this.length;
          for (; b < c; b++) {
            if (this[b] === a) {
              return b
            }
          }
          return -1
        },
        z = function (a, b) {
          return a[o] = b == null || b, a
        },
        A = function () {
          var a = {},
            b = [];
          return z(function (c, d) {
            return b.push(c) > e.cacheLength && delete a[b.shift()], a[c] = d
          }, a)
        },
        B = A(),
        C = A(),
        D = A(),
        E = "[\\x20\\t\\r\\n\\f]",
        F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
        G = F.replace("w", "w#"),
        H = "([*^$|!~]?=)",
        I = "\\[" + E + "*(" + F + ")" + E + "*(?:" + H + E + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + G + ")|)|)" + E + "*\\]",
        J = ":(" + F + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + I + ")|[^:]|\\\\.)*|.*))\\)|)",
        K = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)",
        L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
        M = new RegExp("^" + E + "*," + E + "*"),
        N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"),
        O = new RegExp(J),
        P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        Q = /^:not/,
        R = /[\x20\t\r\n\f]*[+~]/,
        S = /:not\($/,
        T = /h\d/i,
        U = /input|select|textarea|button/i,
        V = /\\(?!\\)/g,
        W = {
          ID: new RegExp("^#(" + F + ")"),
          CLASS: new RegExp("^\\.(" + F + ")"),
          NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
          TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + I),
          PSEUDO: new RegExp("^" + J),
          POS: new RegExp(K, "i"),
          CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)", "i"),
          needsContext: new RegExp("^" + E + "*[>+~]|" + K, "i")
        },
        X = function (a) {
          var b = r.createElement("div");
          try {
            return a(b)
          } catch (c) {
            return !1
          } finally {
            b = null
          }
        },
        Y = X(function (a) {
          return a.appendChild(r.createComment("")), !a.getElementsByTagName("*").length
        }),
        Z = X(function (a) {
          return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== n && a.firstChild.getAttribute("href") === "#"
        }),
        $ = X(function (a) {
          a.innerHTML = "<select></select>";
          var b = typeof a.lastChild.getAttribute("multiple");
          return b !== "boolean" && b !== "string"
        }),
        _ = X(function (a) {
          return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length === 2)
        }),
        ba = X(function (a) {
          a.id = o + 0, a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>", s.insertBefore(a, s.firstChild);
          var b = r.getElementsByName && r.getElementsByName(o).length === 2 + r.getElementsByName(o + 0).length;
          return d = !r.getElementById(o), s.removeChild(a), b
        });
      try {
        x.call(s.childNodes, 0)[0].nodeType
      } catch (bb) {
        x = function (a) {
          var b, c = [];
          for (; b = this[a]; a++) {
            c.push(b)
          }
          return c
        }
      }
      bc.matches = function (a, b) {
        return bc(a, null, null, b)
      }, bc.matchesSelector = function (a, b) {
        return bc(b, null, null, [a]).length > 0
      }, f = bc.getText = function (a) {
        var b, c = "",
          d = 0,
          e = a.nodeType;
        if (e) {
          if (e === 1 || e === 9 || e === 11) {
            if (typeof a.textContent == "string") {
              return a.textContent
            }
            for (a = a.firstChild; a; a = a.nextSibling) {
              c += f(a)
            }
          } else {
            if (e === 3 || e === 4) {
              return a.nodeValue
            }
          }
        } else {
          for (; b = a[d]; d++) {
            c += f(b)
          }
        }
        return c
      }, g = bc.isXML = function (a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? b.nodeName !== "HTML" : !1
      }, h = bc.contains = s.contains ? function (a, b) {
        var c = a.nodeType === 9 ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
      } : s.compareDocumentPosition ? function (a, b) {
        return b && !!(a.compareDocumentPosition(b) & 16)
      } : function (a, b) {
        while (b = b.parentNode) {
          if (b === a) {
            return !0
          }
        }
        return !1
      }, bc.attr = function (a, b) {
        var c, d = g(a);
        return d || (b = b.toLowerCase()), (c = e.attrHandle[b]) ? c(a) : d || $ ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null)
      }, e = bc.selectors = {
        cacheLength: 50,
        createPseudo: z,
        match: W,
        attrHandle: Z ? {} : {
          href: function (a) {
            return a.getAttribute("href", 2)
          },
          type: function (a) {
            return a.getAttribute("type")
          }
        },
        find: {
          ID: d ? function (a, b, c) {
            if (typeof b.getElementById !== n && !c) {
              var d = b.getElementById(a);
              return d && d.parentNode ? [d] : []
            }
          } : function (a, c, d) {
            if (typeof c.getElementById !== n && !d) {
              var e = c.getElementById(a);
              return e ? e.id === a || typeof e.getAttributeNode !== n && e.getAttributeNode("id").value === a ? [e] : b : []
            }
          },
          TAG: Y ? function (a, b) {
            if (typeof b.getElementsByTagName !== n) {
              return b.getElementsByTagName(a)
            }
          } : function (a, b) {
            var c = b.getElementsByTagName(a);
            if (a === "*") {
              var d, e = [],
                f = 0;
              for (; d = c[f]; f++) {
                d.nodeType === 1 && e.push(d)
              }
              return e
            }
            return c
          },
          NAME: ba && function (a, b) {
            if (typeof b.getElementsByName !== n) {
              return b.getElementsByName(name)
            }
          },
          CLASS: _ && function (a, b, c) {
            if (typeof b.getElementsByClassName !== n && !c) {
              return b.getElementsByClassName(a)
            }
          }
        },
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (a) {
            return a[1] = a[1].replace(V, ""), a[3] = (a[4] || a[5] || "").replace(V, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
          },
          CHILD: function (a) {
            return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || bc.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && bc.error(a[0]), a
          },
          PSEUDO: function (a) {
            var b, c;
            if (W.CHILD.test(a[0])) {
              return null
            }
            if (a[3]) {
              a[2] = a[3]
            } else {
              if (b = a[4]) {
                O.test(b) && (c = bh(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b
              }
            }
            return a.slice(0, 3)
          }
        },
        filter: {
          ID: d ? function (a) {
            return a = a.replace(V, ""),
              function (b) {
                return b.getAttribute("id") === a
              }
          } : function (a) {
            return a = a.replace(V, ""),
              function (b) {
                var c = typeof b.getAttributeNode !== n && b.getAttributeNode("id");
                return c && c.value === a
              }
          },
          TAG: function (a) {
            return a === "*" ? function () {
              return !0
            } : (a = a.replace(V, "").toLowerCase(), function (b) {
              return b.nodeName && b.nodeName.toLowerCase() === a
            })
          },
          CLASS: function (a) {
            var b = B[o][a];
            return b || (b = B(a, new RegExp("(^|" + E + ")" + a + "(" + E + "|$)"))),
              function (a) {
                return b.test(a.className || typeof a.getAttribute !== n && a.getAttribute("class") || "")
              }
          },
          ATTR: function (a, b, c) {
            return function (d, e) {
              var f = bc.attr(d, a);
              return f == null ? b === "!=" : b ? (f += "", b === "=" ? f === c : b === "!=" ? f !== c : b === "^=" ? c && f.indexOf(c) === 0 : b === "*=" ? c && f.indexOf(c) > -1 : b === "$=" ? c && f.substr(f.length - c.length) === c : b === "~=" ? (" " + f + " ").indexOf(c) > -1 : b === "|=" ? f === c || f.substr(0, c.length + 1) === c + "-" : !1) : !0
            }
          },
          CHILD: function (a, b, c, d) {
            return a === "nth" ? function (a) {
              var b, e, f = a.parentNode;
              if (c === 1 && d === 0) {
                return !0
              }
              if (f) {
                e = 0;
                for (b = f.firstChild; b; b = b.nextSibling) {
                  if (b.nodeType === 1) {
                    e++;
                    if (a === b) {
                      break
                    }
                  }
                }
              }
              return e -= d, e === c || e % c === 0 && e / c >= 0
            } : function (b) {
              var c = b;
              switch (a) {
                case "only":
                case "first":
                  while (c = c.previousSibling) {
                    if (c.nodeType === 1) {
                      return !1
                    }
                  }
                  if (a === "first") {
                    return !0
                  }
                  c = b;
                case "last":
                  while (c = c.nextSibling) {
                    if (c.nodeType === 1) {
                      return !1
                    }
                  }
                  return !0
              }
            }
          },
          PSEUDO: function (a, b) {
            var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || bc.error("unsupported pseudo: " + a);
            return d[o] ? d(b) : d.length > 1 ? (c = [a, a, "", b], e.setFilters.hasOwnProperty(a.toLowerCase()) ? z(function (a, c) {
              var e, f = d(a, b),
                g = f.length;
              while (g--) {
                e = y.call(a, f[g]), a[e] = !(c[e] = f[g])
              }
            }) : function (a) {
              return d(a, 0, c)
            }) : d
          }
        },
        pseudos: {
          not: z(function (a) {
            var b = [],
              c = [],
              d = i(a.replace(L, "$1"));
            return d[o] ? z(function (a, b, c, e) {
              var f, g = d(a, null, e, []),
                h = a.length;
              while (h--) {
                if (f = g[h]) {
                  a[h] = !(b[h] = f)
                }
              }
            }) : function (a, e, f) {
              return b[0] = a, d(b, null, f, c), !c.pop()
            }
          }),
          has: z(function (a) {
            return function (b) {
              return bc(a, b).length > 0
            }
          }),
          contains: z(function (a) {
            return function (b) {
              return (b.textContent || b.innerText || f(b)).indexOf(a) > -1
            }
          }),
          enabled: function (a) {
            return a.disabled === !1
          },
          disabled: function (a) {
            return a.disabled === !0
          },
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return b === "input" && !!a.checked || b === "option" && !!a.selected
          },
          selected: function (a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
          },
          parent: function (a) {
            return !e.pseudos.empty(a)
          },
          empty: function (a) {
            var b;
            a = a.firstChild;
            while (a) {
              if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) {
                return !1
              }
              a = a.nextSibling
            }
            return !0
          },
          header: function (a) {
            return T.test(a.nodeName)
          },
          text: function (a) {
            var b, c;
            return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
          },
          radio: bd("radio"),
          checkbox: bd("checkbox"),
          file: bd("file"),
          password: bd("password"),
          image: bd("image"),
          submit: be("submit"),
          reset: be("reset"),
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return b === "input" && a.type === "button" || b === "button"
          },
          input: function (a) {
            return U.test(a.nodeName)
          },
          focus: function (a) {
            var b = a.ownerDocument;
            return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
          },
          active: function (a) {
            return a === a.ownerDocument.activeElement
          },
          first: bf(function (a, b, c) {
            return [0]
          }),
          last: bf(function (a, b, c) {
            return [b - 1]
          }),
          eq: bf(function (a, b, c) {
            return [c < 0 ? c + b : c]
          }),
          even: bf(function (a, b, c) {
            for (var d = 0; d < b; d += 2) {
              a.push(d)
            }
            return a
          }),
          odd: bf(function (a, b, c) {
            for (var d = 1; d < b; d += 2) {
              a.push(d)
            }
            return a
          }),
          lt: bf(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; --d >= 0;) {
              a.push(d)
            }
            return a
          }),
          gt: bf(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; ++d < b;) {
              a.push(d)
            }
            return a
          })
        }
      }, j = s.compareDocumentPosition ? function (a, b) {
        return a === b ? (k = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
      } : function (a, b) {
        if (a === b) {
          return k = !0, 0
        }
        if (a.sourceIndex && b.sourceIndex) {
          return a.sourceIndex - b.sourceIndex
        }
        var c, d, e = [],
          f = [],
          g = a.parentNode,
          h = b.parentNode,
          i = g;
        if (g === h) {
          return bg(a, b)
        }
        if (!g) {
          return -1
        }
        if (!h) {
          return 1
        }
        while (i) {
          e.unshift(i), i = i.parentNode
        }
        i = h;
        while (i) {
          f.unshift(i), i = i.parentNode
        }
        c = e.length, d = f.length;
        for (var j = 0; j < c && j < d; j++) {
          if (e[j] !== f[j]) {
            return bg(e[j], f[j])
          }
        }
        return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1)
      }, [0, 0].sort(j), m = !k, bc.uniqueSort = function (a) {
        var b, c = 1;
        k = m, a.sort(j);
        if (k) {
          for (; b = a[c]; c++) {
            b === a[c - 1] && a.splice(c--, 1)
          }
        }
        return a
      }, bc.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a)
      }, i = bc.compile = function (a, b) {
        var c, d = [],
          e = [],
          f = D[o][a];
        if (!f) {
          b || (b = bh(a)), c = b.length;
          while (c--) {
            f = bm(b[c]), f[o] ? d.push(f) : e.push(f)
          }
          f = D(a, bn(e, d))
        }
        return f
      }, r.querySelectorAll && function () {
        var a, b = bp,
          c = /'|\\/g,
          d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
          e = [":focus"],
          f = [":active", ":focus"],
          h = s.matchesSelector || s.mozMatchesSelector || s.webkitMatchesSelector || s.oMatchesSelector || s.msMatchesSelector;
        X(function (a) {
          a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || e.push("\\[" + E + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || e.push(":checked")
        }), X(function (a) {
          a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + E + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
        }), e = new RegExp(e.join("|")), bp = function (a, d, f, g, h) {
          if (!g && !h && (!e || !e.test(a))) {
            var i, j, k = !0,
              l = o,
              m = d,
              n = d.nodeType === 9 && a;
            if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
              i = bh(a), (k = d.getAttribute("id")) ? l = k.replace(c, "\\$&") : d.setAttribute("id", l), l = "[id='" + l + "'] ", j = i.length;
              while (j--) {
                i[j] = l + i[j].join("")
              }
              m = R.test(a) && d.parentNode || d, n = i.join(",")
            }
            if (n) {
              try {
                return w.apply(f, x.call(m.querySelectorAll(n), 0)), f
              } catch (p) {} finally {
                k || d.removeAttribute("id")
              }
            }
          }
          return b(a, d, f, g, h)
        }, h && (X(function (b) {
          a = h.call(b, "div");
          try {
            h.call(b, "[test!='']:sizzle"), f.push("!=", J)
          } catch (c) {}
        }), f = new RegExp(f.join("|")), bc.matchesSelector = function (b, c) {
          c = c.replace(d, "='$1']");
          if (!g(b) && !f.test(c) && (!e || !e.test(c))) {
            try {
              var i = h.call(b, c);
              if (i || a || b.document && b.document.nodeType !== 11) {
                return i
              }
            } catch (j) {}
          }
          return bc(c, null, null, [b]).length > 0
        })
      }(), e.pseudos.nth = e.pseudos.eq, e.filters = bq.prototype = e.pseudos, e.setFilters = new bq, bc.attr = p.attr, p.find = bc, p.expr = bc.selectors, p.expr[":"] = p.expr.pseudos, p.unique = bc.uniqueSort, p.text = bc.getText, p.isXMLDoc = bc.isXML, p.contains = bc.contains
    }(a);
  var bc = /Until$/,
    bd = /^(?:parents|prev(?:Until|All))/,
    be = /^.[^:#\[\.,]*$/,
    bf = p.expr.match.needsContext,
    bg = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  p.fn.extend({
    find: function (a) {
      var b, c, d, e, f, g, h = this;
      if (typeof a != "string") {
        return p(a).filter(function () {
          for (b = 0, c = h.length; b < c; b++) {
            if (p.contains(h[b], this)) {
              return !0
            }
          }
        })
      }
      g = this.pushStack("", "find", a);
      for (b = 0, c = this.length; b < c; b++) {
        d = g.length, p.find(a, this[b], g);
        if (b > 0) {
          for (e = d; e < g.length; e++) {
            for (f = 0; f < d; f++) {
              if (g[f] === g[e]) {
                g.splice(e--, 1);
                break
              }
            }
          }
        }
      }
      return g
    },
    has: function (a) {
      var b, c = p(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; b < d; b++) {
          if (p.contains(this, c[b])) {
            return !0
          }
        }
      })
    },
    not: function (a) {
      return this.pushStack(bj(this, a, !1), "not", a)
    },
    filter: function (a) {
      return this.pushStack(bj(this, a, !0), "filter", a)
    },
    is: function (a) {
      return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
    },
    closest: function (a, b) {
      var c, d = 0,
        e = this.length,
        f = [],
        g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
      for (; d < e; d++) {
        c = this[d];
        while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
          if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
            f.push(c);
            break
          }
          c = c.parentNode
        }
      }
      return f = f.length > 1 ? p.unique(f) : f, this.pushStack(f, "closest", a)
    },
    index: function (a) {
      return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
    },
    add: function (a, b) {
      var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a),
        d = p.merge(this.get(), c);
      return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d))
    },
    addBack: function (a) {
      return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
    }
  }), p.fn.andSelf = p.fn.addBack, p.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && b.nodeType !== 11 ? b : null
    },
    parents: function (a) {
      return p.dir(a, "parentNode")
    },
    parentsUntil: function (a, b, c) {
      return p.dir(a, "parentNode", c)
    },
    next: function (a) {
      return bi(a, "nextSibling")
    },
    prev: function (a) {
      return bi(a, "previousSibling")
    },
    nextAll: function (a) {
      return p.dir(a, "nextSibling")
    },
    prevAll: function (a) {
      return p.dir(a, "previousSibling")
    },
    nextUntil: function (a, b, c) {
      return p.dir(a, "nextSibling", c)
    },
    prevUntil: function (a, b, c) {
      return p.dir(a, "previousSibling", c)
    },
    siblings: function (a) {
      return p.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function (a) {
      return p.sibling(a.firstChild)
    },
    contents: function (a) {
      return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes)
    }
  }, function (a, b) {
    p.fn[a] = function (c, d) {
      var e = p.map(this, b, c);
      return bc.test(a) || (d = c), d && typeof d == "string" && (e = p.filter(d, e)), e = this.length > 1 && !bg[a] ? p.unique(e) : e, this.length > 1 && bd.test(a) && (e = e.reverse()), this.pushStack(e, a, k.call(arguments).join(","))
    }
  }), p.extend({
    filter: function (a, b, c) {
      return c && (a = ":not(" + a + ")"), b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
    },
    dir: function (a, c, d) {
      var e = [],
        f = a[c];
      while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) {
        f.nodeType === 1 && e.push(f), f = f[c]
      }
      return e
    },
    sibling: function (a, b) {
      var c = [];
      for (; a; a = a.nextSibling) {
        a.nodeType === 1 && a !== b && c.push(a)
      }
      return c
    }
  });
  var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    bm = / jQuery\d+="(?:null|\d+)"/g,
    bn = /^\s+/,
    bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bp = /<([\w:]+)/,
    bq = /<tbody/i,
    br = /<|&#?\w+;/,
    bs = /<(?:script|style|link)/i,
    bt = /<(?:script|object|embed|option|style)/i,
    bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
    bv = /^(?:checkbox|radio)$/,
    bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
    bx = /\/(java|ecma)script/i,
    by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    bz = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""]
    },
    bA = bk(e),
    bB = bA.appendChild(e.createElement("div"));
  bz.optgroup = bz.option, bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead, bz.th = bz.td, p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]), p.fn.extend({
      text: function (a) {
        return p.access(this, function (a) {
          return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
        }, null, a, arguments.length)
      },
      wrapAll: function (a) {
        if (p.isFunction(a)) {
          return this.each(function (b) {
            p(this).wrapAll(a.call(this, b))
          })
        }
        if (this[0]) {
          var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
            var a = this;
            while (a.firstChild && a.firstChild.nodeType === 1) {
              a = a.firstChild
            }
            return a
          }).append(this)
        }
        return this
      },
      wrapInner: function (a) {
        return p.isFunction(a) ? this.each(function (b) {
          p(this).wrapInner(a.call(this, b))
        }) : this.each(function () {
          var b = p(this),
            c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a)
        })
      },
      wrap: function (a) {
        var b = p.isFunction(a);
        return this.each(function (c) {
          p(this).wrapAll(b ? a.call(this, c) : a)
        })
      },
      unwrap: function () {
        return this.parent().each(function () {
          p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
        }).end()
      },
      append: function () {
        return this.domManip(arguments, !0, function (a) {
          (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
        })
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (a) {
          (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
        })
      },
      before: function () {
        if (!bh(this[0])) {
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this)
          })
        }
        if (arguments.length) {
          var a = p.clean(arguments);
          return this.pushStack(p.merge(a, this), "before", this.selector)
        }
      },
      after: function () {
        if (!bh(this[0])) {
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling)
          })
        }
        if (arguments.length) {
          var a = p.clean(arguments);
          return this.pushStack(p.merge(this, a), "after", this.selector)
        }
      },
      remove: function (a, b) {
        var c, d = 0;
        for (;
          (c = this[d]) != null; d++) {
          if (!a || p.filter(a, [c]).length) {
            !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c)
          }
        }
        return this
      },
      empty: function () {
        var a, b = 0;
        for (;
          (a = this[b]) != null; b++) {
          a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
          while (a.firstChild) {
            a.removeChild(a.firstChild)
          }
        }
        return this
      },
      clone: function (a, b) {
        return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function () {
          return p.clone(this, a, b)
        })
      },
      html: function (a) {
        return p.access(this, function (a) {
          var c = this[0] || {},
            d = 0,
            e = this.length;
          if (a === b) {
            return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b
          }
          if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = a.replace(bo, "<$1></$2>");
            try {
              for (; d < e; d++) {
                c = this[d] || {}, c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a)
              }
              c = 0
            } catch (f) {}
          }
          c && this.empty().append(a)
        }, null, a, arguments.length)
      },
      replaceWith: function (a) {
        return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function (b) {
          var c = p(this),
            d = c.html();
          c.replaceWith(a.call(this, b, d))
        }) : (typeof a != "string" && (a = p(a).detach()), this.each(function () {
          var b = this.nextSibling,
            c = this.parentNode;
          p(this).remove(), b ? p(b).before(a) : p(c).append(a)
        }))
      },
      detach: function (a) {
        return this.remove(a, !0)
      },
      domManip: function (a, c, d) {
        a = [].concat.apply([], a);
        var e, f, g, h, i = 0,
          j = a[0],
          k = [],
          l = this.length;
        if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) {
          return this.each(function () {
            p(this).domManip(a, c, d)
          })
        }
        if (p.isFunction(j)) {
          return this.each(function (e) {
            var f = p(this);
            a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
          })
        }
        if (this[0]) {
          e = p.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);
          if (f) {
            c = c && p.nodeName(f, "tr");
            for (h = e.cacheable || l - 1; i < l; i++) {
              d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0))
            }
          }
          g = f = null, k.length && p.each(k, function (a, b) {
            b.src ? p.ajax ? p.ajax({
              url: b.src,
              type: "GET",
              dataType: "script",
              async: !1,
              global: !1,
              "throws": !0
            }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")), b.parentNode && b.parentNode.removeChild(b)
          })
        }
        return this
      }
    }), p.buildFragment = function (a, c, d) {
      var f, g, h, i = a[0];
      return c = c || e, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0, f = p.fragments[i], h = f !== b), f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)), {
        fragment: f,
        cacheable: g
      }
    }, p.fragments = {}, p.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (a, b) {
      p.fn[a] = function (c) {
        var d, e = 0,
          f = [],
          g = p(c),
          h = g.length,
          i = this.length === 1 && this[0].parentNode;
        if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) {
          return g[b](this[0]), this
        }
        for (; e < h; e++) {
          d = (e > 0 ? this.clone(!0) : this).get(), p(g[e])[b](d), f = f.concat(d)
        }
        return this.pushStack(f, a, g.selector)
      }
    }), p.extend({
      clone: function (a, b, c) {
        var d, e, f, g;
        p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML, bB.removeChild(g = bB.firstChild));
        if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
          bE(a, g), d = bF(a), e = bF(g);
          for (f = 0; d[f]; ++f) {
            e[f] && bE(d[f], e[f])
          }
        }
        if (b) {
          bD(a, g);
          if (c) {
            d = bF(a), e = bF(g);
            for (f = 0; d[f]; ++f) {
              bD(d[f], e[f])
            }
          }
        }
        return d = e = null, g
      },
      clean: function (a, b, c, d) {
        var f, g, h, i, j, k, l, m, n, o, q, r, s = b === e && bA,
          t = [];
        if (!b || typeof b.createDocumentFragment == "undefined") {
          b = e
        }
        for (f = 0;
          (h = a[f]) != null; f++) {
          typeof h == "number" && (h += "");
          if (!h) {
            continue
          }
          if (typeof h == "string") {
            if (!br.test(h)) {
              h = b.createTextNode(h)
            } else {
              s = s || bk(b), l = b.createElement("div"), s.appendChild(l), h = h.replace(bo, "<$1></$2>"), i = (bp.exec(h) || ["", ""])[1].toLowerCase(), j = bz[i] || bz._default, k = j[0], l.innerHTML = j[1] + h + j[2];
              while (k--) {
                l = l.lastChild
              }
              if (!p.support.tbody) {
                m = bq.test(h), n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
                for (g = n.length - 1; g >= 0; --g) {
                  p.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g])
                }
              }!p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild), h = l.childNodes, l.parentNode.removeChild(l)
            }
          }
          h.nodeType ? t.push(h) : p.merge(t, h)
        }
        l && (h = l = s = null);
        if (!p.support.appendChecked) {
          for (f = 0;
            (h = t[f]) != null; f++) {
            p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG)
          }
        }
        if (c) {
          q = function (a) {
            if (!a.type || bx.test(a.type)) {
              return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
            }
          };
          for (f = 0;
            (h = t[f]) != null; f++) {
            if (!p.nodeName(h, "script") || !q(h)) {
              c.appendChild(h), typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [f + 1, 0].concat(r)), f += r.length)
            }
          }
        }
        return t
      },
      cleanData: function (a, b) {
        var c, d, e, f, g = 0,
          h = p.expando,
          i = p.cache,
          j = p.support.deleteExpando,
          k = p.event.special;
        for (;
          (e = a[g]) != null; g++) {
          if (b || p.acceptData(e)) {
            d = e[h], c = d && i[d];
            if (c) {
              if (c.events) {
                for (f in c.events) {
                  k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle)
                }
              }
              i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d))
            }
          }
        }
      }
    }),
    function () {
      var a, b;
      p.uaMatch = function (a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
          browser: b[1] || "",
          version: b[2] || "0"
        }
      }, a = p.uaMatch(g.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), p.browser = b, p.sub = function () {
        function a(b, c) {
          return new a.fn.init(b, c)
        }
        p.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function c(c, d) {
          return d && d instanceof p && !(d instanceof a) && (d = a(d)), p.fn.init.call(this, c, d, b)
        }, a.fn.init.prototype = a.fn;
        var b = a(e);
        return a
      }
    }();
  var bH, bI, bJ, bK = /alpha\([^)]*\)/i,
    bL = /opacity=([^)]*)/,
    bM = /^(top|right|bottom|left)$/,
    bN = /^(none|table(?!-c[ea]).+)/,
    bO = /^margin/,
    bP = new RegExp("^(" + q + ")(.*)$", "i"),
    bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
    bR = new RegExp("^([-+])=(" + q + ")", "i"),
    bS = {},
    bT = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    bU = {
      letterSpacing: 0,
      fontWeight: 400
    },
    bV = ["Top", "Right", "Bottom", "Left"],
    bW = ["Webkit", "O", "Moz", "ms"],
    bX = p.fn.toggle;
  p.fn.extend({
    css: function (a, c) {
      return p.access(this, function (a, c, d) {
        return d !== b ? p.style(a, c, d) : p.css(a, c)
      }, a, c, arguments.length > 1)
    },
    show: function () {
      return b$(this, !0)
    },
    hide: function () {
      return b$(this)
    },
    toggle: function (a, b) {
      var c = typeof a == "boolean";
      return p.isFunction(a) && p.isFunction(b) ? bX.apply(this, arguments) : this.each(function () {
        (c ? a : bZ(this)) ? p(this).show(): p(this).hide()
      })
    }
  }), p.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = bH(a, "opacity");
            return c === "" ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": p.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function (a, c, d, e) {
      if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) {
        return
      }
      var f, g, h, i = p.camelCase(c),
        j = a.style;
      c = p.cssProps[i] || (p.cssProps[i] = bY(j, i)), h = p.cssHooks[c] || p.cssHooks[i];
      if (d === b) {
        return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c]
      }
      g = typeof d, g === "string" && (f = bR.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
      if (d == null || g === "number" && isNaN(d)) {
        return
      }
      g === "number" && !p.cssNumber[i] && (d += "px");
      if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) {
        try {
          j[c] = d
        } catch (k) {}
      }
    },
    css: function (a, c, d, e) {
      var f, g, h, i = p.camelCase(c);
      return c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i)), h = p.cssHooks[c] || p.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = bH(a, c)), f === "normal" && c in bU && (f = bU[c]), d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f
    },
    swap: function (a, b, c) {
      var d, e, f = {};
      for (e in b) {
        f[e] = a.style[e], a.style[e] = b[e]
      }
      d = c.call(a);
      for (e in b) {
        a.style[e] = f[e]
      }
      return d
    }
  }), a.getComputedStyle ? bH = function (b, c) {
    var d, e, f, g, h = a.getComputedStyle(b, null),
      i = b.style;
    return h && (d = h[c], d === "" && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)), bQ.test(d) && bO.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
  } : e.documentElement.currentStyle && (bH = function (a, b) {
    var c, d, e = a.currentStyle && a.currentStyle[b],
      f = a.style;
    return e == null && f && f[b] && (e = f[b]), bQ.test(e) && !bM.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e
  }), p.each(["height", "width"], function (a, b) {
    p.cssHooks[b] = {
      get: function (a, c, d) {
        if (c) {
          return a.offsetWidth === 0 && bN.test(bH(a, "display")) ? p.swap(a, bT, function () {
            return cb(a, b, d)
          }) : cb(a, b, d)
        }
      },
      set: function (a, c, d) {
        return b_(a, c, d ? ca(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
      }
    }
  }), p.support.opacity || (p.cssHooks.opacity = {
    get: function (a, b) {
      return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    },
    set: function (a, b) {
      var c = a.style,
        d = a.currentStyle,
        e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
        f = d && d.filter || c.filter || "";
      c.zoom = 1;
      if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
        c.removeAttribute("filter");
        if (d && !d.filter) {
          return
        }
      }
      c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e
    }
  }), p(function () {
    p.support.reliableMarginRight || (p.cssHooks.marginRight = {
      get: function (a, b) {
        return p.swap(a, {
          display: "inline-block"
        }, function () {
          if (b) {
            return bH(a, "marginRight")
          }
        })
      }
    }), !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function (a, b) {
      p.cssHooks[b] = {
        get: function (a, c) {
          if (c) {
            var d = bH(a, b);
            return bQ.test(d) ? p(a).position()[b] + "px" : d
          }
        }
      }
    })
  }), p.expr && p.expr.filters && (p.expr.filters.hidden = function (a) {
    return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none"
  }, p.expr.filters.visible = function (a) {
    return !p.expr.filters.hidden(a)
  }), p.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    p.cssHooks[a + b] = {
      expand: function (c) {
        var d, e = typeof c == "string" ? c.split(" ") : [c],
          f = {};
        for (d = 0; d < 4; d++) {
          f[a + bV[d] + b] = e[d] || e[d - 2] || e[0]
        }
        return f
      }
    }, bO.test(a) || (p.cssHooks[a + b].set = b_)
  });
  var cd = /%20/g,
    ce = /\[\]$/,
    cf = /\r?\n/g,
    cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    ch = /^(?:select|textarea)/i;
  p.fn.extend({
    serialize: function () {
      return p.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        return this.elements ? p.makeArray(this.elements) : this
      }).filter(function () {
        return this.name && !this.disabled && (this.checked || ch.test(this.nodeName) || cg.test(this.type))
      }).map(function (a, b) {
        var c = p(this).val();
        return c == null ? null : p.isArray(c) ? p.map(c, function (a, c) {
          return {
            name: b.name,
            value: a.replace(cf, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(cf, "\r\n")
        }
      }).get()
    }
  }), p.param = function (a, c) {
    var d, e = [],
      f = function (a, b) {
        b = p.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
    if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) {
      p.each(a, function () {
        f(this.name, this.value)
      })
    } else {
      for (d in a) {
        ci(d, a[d], c, f)
      }
    }
    return e.join("&").replace(cd, "+")
  };
  var cj, ck, cl = /#.*$/,
    cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    co = /^(?:GET|HEAD)$/,
    cp = /^\/\//,
    cq = /\?/,
    cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    cs = /([?&])_=[^&]*/,
    ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    cu = p.fn.load,
    cv = {},
    cw = {},
    cx = ["*/"] + ["*"];
  try {
    ck = f.href
  } catch (cy) {
    ck = e.createElement("a"), ck.href = "", ck = ck.href
  }
  cj = ct.exec(ck.toLowerCase()) || [], p.fn.load = function (a, c, d) {
    if (typeof a != "string" && cu) {
      return cu.apply(this, arguments)
    }
    if (!this.length) {
      return this
    }
    var e, f, g, h = this,
      i = a.indexOf(" ");
    return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), p.isFunction(c) ? (d = c, c = b) : c && typeof c == "object" && (f = "POST"), p.ajax({
      url: a,
      type: f,
      dataType: "html",
      data: c,
      complete: function (a, b) {
        d && h.each(d, g || [a.responseText, b, a])
      }
    }).done(function (a) {
      g = arguments, h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a)
    }), this
  }, p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
    p.fn[b] = function (a) {
      return this.on(b, a)
    }
  }), p.each(["get", "post"], function (a, c) {
    p[c] = function (a, d, e, f) {
      return p.isFunction(d) && (f = f || e, e = d, d = b), p.ajax({
        type: c,
        url: a,
        data: d,
        success: e,
        dataType: f
      })
    }
  }), p.extend({
    getScript: function (a, c) {
      return p.get(a, b, c, "script")
    },
    getJSON: function (a, b, c) {
      return p.get(a, b, c, "json")
    },
    ajaxSetup: function (a, b) {
      return b ? cB(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings), cB(a, b), a
    },
    ajaxSettings: {
      url: ck,
      isLocal: cn.test(cj[1]),
      global: !0,
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      processData: !0,
      async: !0,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": cx
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": a.String,
        "text html": !0,
        "text json": p.parseJSON,
        "text xml": p.parseXML
      },
      flatOptions: {
        context: !0,
        url: !0
      }
    },
    ajaxPrefilter: cz(cv),
    ajaxTransport: cz(cw),
    ajax: function (a, c) {
      function y(a, c, f, i) {
        var k, s, t, u, w, y = c;
        if (v === 2) {
          return
        }
        v = 2, h && clearTimeout(h), g = b, e = i || "", x.readyState = a > 0 ? 4 : 0, f && (u = cC(l, x, f));
        if (a >= 200 && a < 300 || a === 304) {
          l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)), a === 304 ? (y = "notmodified", k = !0) : (k = cD(l, u), y = k.state, s = k.data, t = k.error, k = !t)
        } else {
          t = y;
          if (!y || a) {
            y = "error", a < 0 && (a = 0)
          }
        }
        x.status = a, x.statusText = (c || y) + "", k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]), x.statusCode(r), r = b, j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]), q.fireWith(m, [x, y]), j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop"))
      }
      typeof a == "object" && (c = a, a = b), c = c || {};
      var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c),
        m = l.context || l,
        n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
        o = p.Deferred(),
        q = p.Callbacks("once memory"),
        r = l.statusCode || {},
        t = {},
        u = {},
        v = 0,
        w = "canceled",
        x = {
          readyState: 0,
          setRequestHeader: function (a, b) {
            if (!v) {
              var c = a.toLowerCase();
              a = u[c] = u[c] || a, t[a] = b
            }
            return this
          },
          getAllResponseHeaders: function () {
            return v === 2 ? e : null
          },
          getResponseHeader: function (a) {
            var c;
            if (v === 2) {
              if (!f) {
                f = {};
                while (c = cm.exec(e)) {
                  f[c[1].toLowerCase()] = c[2]
                }
              }
              c = f[a.toLowerCase()]
            }
            return c === b ? null : c
          },
          overrideMimeType: function (a) {
            return v || (l.mimeType = a), this
          },
          abort: function (a) {
            return a = a || w, g && g.abort(a), y(0, a), this
          }
        };
      o.promise(x), x.success = x.done, x.error = x.fail, x.complete = q.add, x.statusCode = function (a) {
        if (a) {
          var b;
          if (v < 2) {
            for (b in a) {
              r[b] = [r[b], a[b]]
            }
          } else {
            b = a[x.status], x.always(b)
          }
        }
        return this
      }, l.url = ((a || l.url) + "").replace(cl, "").replace(cp, cj[1] + "//"), l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s), l.crossDomain == null && (i = ct.exec(l.url.toLowerCase()) || !1, l.crossDomain = i && i.join(":") + (i[3] ? "" : i[1] === "http:" ? 80 : 443) !== cj.join(":") + (cj[3] ? "" : cj[1] === "http:" ? 80 : 443)), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), cA(cv, l, c, x);
      if (v === 2) {
        return x
      }
      j = l.global, l.type = l.type.toUpperCase(), l.hasContent = !co.test(l.type), j && p.active++ === 0 && p.event.trigger("ajaxStart");
      if (!l.hasContent) {
        l.data && (l.url += (cq.test(l.url) ? "&" : "?") + l.data, delete l.data), d = l.url;
        if (l.cache === !1) {
          var z = p.now(),
            A = l.url.replace(cs, "$1_=" + z);
          l.url = A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "")
        }
      }(l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "") : l.accepts["*"]);
      for (k in l.headers) {
        x.setRequestHeader(k, l.headers[k])
      }
      if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
        w = "abort";
        for (k in {
            success: 1,
            error: 1,
            complete: 1
          }) {
          x[k](l[k])
        }
        g = cA(cw, l, c, x);
        if (!g) {
          y(-1, "No Transport")
        } else {
          x.readyState = 1, j && n.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
            x.abort("timeout")
          }, l.timeout));
          try {
            v = 1, g.send(t, y)
          } catch (B) {
            if (v < 2) {
              y(-1, B)
            } else {
              throw B
            }
          }
        }
        return x
      }
      return x.abort()
    },
    active: 0,
    lastModified: {},
    etag: {}
  });
  var cE = [],
    cF = /\?/,
    cG = /(=)\?(?=&|$)|\?\?/,
    cH = p.now();
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = cE.pop() || p.expando + "_" + cH++;
      return this[a] = !0, a
    }
  }), p.ajaxPrefilter("json jsonp", function (c, d, e) {
    var f, g, h, i = c.data,
      j = c.url,
      k = c.jsonp !== !1,
      l = k && cG.test(j),
      m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cG.test(i);
    if (c.dataTypes[0] === "jsonp" || l || m) {
      return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(cG, "$1" + f) : m ? c.data = i.replace(cG, "$1" + f) : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
        return h || p.error(f + " was not called"), h[0]
      }, c.dataTypes[0] = "json", a[f] = function () {
        h = arguments
      }, e.always(function () {
        a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, cE.push(f)), h && p.isFunction(g) && g(h[0]), h = g = b
      }), "script"
    }
  }), p.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /javascript|ecmascript/
    },
    converters: {
      "text script": function (a) {
        return p.globalEval(a), a
      }
    }
  }), p.ajaxPrefilter("script", function (a) {
    a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), p.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
      return {
        send: function (f, g) {
          c = e.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
            if (e || !c.readyState || /loaded|complete/.test(c.readyState)) {
              c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || g(200, "success")
            }
          }, d.insertBefore(c, d.firstChild)
        },
        abort: function () {
          c && c.onload(0, 1)
        }
      }
    }
  });
  var cI, cJ = a.ActiveXObject ? function () {
      for (var a in cI) {
        cI[a](0, 1)
      }
    } : !1,
    cK = 0;
  p.ajaxSettings.xhr = a.ActiveXObject ? function () {
      return !this.isLocal && cL() || cM()
    } : cL,
    function (a) {
      p.extend(p.support, {
        ajax: !!a,
        cors: !!a && "withCredentials" in a
      })
    }(p.ajaxSettings.xhr()), p.support.ajax && p.ajaxTransport(function (c) {
      if (!c.crossDomain || p.support.cors) {
        var d;
        return {
          send: function (e, f) {
            var g, h, i = c.xhr();
            c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
            if (c.xhrFields) {
              for (h in c.xhrFields) {
                i[h] = c.xhrFields[h]
              }
            }
            c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
            try {
              for (h in e) {
                i.setRequestHeader(h, e[h])
              }
            } catch (j) {}
            i.send(c.hasContent && c.data || null), d = function (a, e) {
              var h, j, k, l, m;
              try {
                if (d && (e || i.readyState === 4)) {
                  d = b, g && (i.onreadystatechange = p.noop, cJ && delete cI[g]);
                  if (e) {
                    i.readyState !== 4 && i.abort()
                  } else {
                    h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                    try {
                      l.text = i.responseText
                    } catch (a) {}
                    try {
                      j = i.statusText
                    } catch (n) {
                      j = ""
                    }!h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
                  }
                }
              } catch (o) {
                e || f(-1, o)
              }
              l && f(h, j, l, k)
            }, c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cK, cJ && (cI || (cI = {}, p(a).unload(cJ)), cI[g] = d), i.onreadystatechange = d) : d()
          },
          abort: function () {
            d && d(0, 1)
          }
        }
      }
    });
  var cN, cO, cP = /^(?:toggle|show|hide)$/,
    cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
    cR = /queueHooks$/,
    cS = [cY],
    cT = {
      "*": [function (a, b) {
        var c, d, e = this.createTween(a, b),
          f = cQ.exec(b),
          g = e.cur(),
          h = +g || 0,
          i = 1,
          j = 20;
        if (f) {
          c = +f[2], d = f[3] || (p.cssNumber[a] ? "" : "px");
          if (d !== "px" && h) {
            h = p.css(e.elem, a, !0) || c || 1;
            do {
              i = i || ".5", h = h / i, p.style(e.elem, a, h + d)
            } while (i !== (i = e.cur() / g) && i !== 1 && --j)
          }
          e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
        }
        return e
      }]
    };
  p.Animation = p.extend(cW, {
    tweener: function (a, b) {
      p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
      var c, d = 0,
        e = a.length;
      for (; d < e; d++) {
        c = a[d], cT[c] = cT[c] || [], cT[c].unshift(b)
      }
    },
    prefilter: function (a, b) {
      b ? cS.unshift(a) : cS.push(a)
    }
  }), p.Tween = cZ, cZ.prototype = {
    constructor: cZ,
    init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (p.cssNumber[c] ? "" : "px")
    },
    cur: function () {
      var a = cZ.propHooks[this.prop];
      return a && a.get ? a.get(this) : cZ.propHooks._default.get(this)
    },
    run: function (a) {
      var b, c = cZ.propHooks[this.prop];
      return this.options.duration ? this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : cZ.propHooks._default.set(this), this
    }
  }, cZ.prototype.init.prototype = cZ.prototype, cZ.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
      },
      set: function (a) {
        p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  }, cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, p.each(["toggle", "show", "hide"], function (a, b) {
    var c = p.fn[b];
    p.fn[b] = function (d, e, f) {
      return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(c$(b, !0), d, e, f)
    }
  }), p.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(bZ).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d)
    },
    animate: function (a, b, c, d) {
      var e = p.isEmptyObject(a),
        f = p.speed(b, c, d),
        g = function () {
          var b = cW(this, p.extend({}, a), f);
          e && b.stop(!0)
        };
      return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    },
    stop: function (a, c, d) {
      var e = function (a) {
        var b = a.stop;
        delete a.stop, b(d)
      };
      return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
          c = a != null && a + "queueHooks",
          f = p.timers,
          g = p._data(this);
        if (c) {
          g[c] && g[c].stop && e(g[c])
        } else {
          for (c in g) {
            g[c] && g[c].stop && cR.test(c) && e(g[c])
          }
        }
        for (c = f.length; c--;) {
          f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1))
        }(b || !d) && p.dequeue(this, a)
      })
    }
  }), p.each({
    slideDown: c$("show"),
    slideUp: c$("hide"),
    slideToggle: c$("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    p.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d)
    }
  }), p.speed = function (a, b, c) {
    var d = a && typeof a == "object" ? p.extend({}, a) : {
      complete: c || !c && b || p.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !p.isFunction(b) && b
    };
    d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
    if (d.queue == null || d.queue === !0) {
      d.queue = "fx"
    }
    return d.old = d.complete, d.complete = function () {
      p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue)
    }, d
  }, p.easing = {
    linear: function (a) {
      return a
    },
    swing: function (a) {
      return 0.5 - Math.cos(a * Math.PI) / 2
    }
  }, p.timers = [], p.fx = cZ.prototype.init, p.fx.tick = function () {
    var a, b = p.timers,
      c = 0;
    for (; c < b.length; c++) {
      a = b[c], !a() && b[c] === a && b.splice(c--, 1)
    }
    b.length || p.fx.stop()
  }, p.fx.timer = function (a) {
    a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval))
  }, p.fx.interval = 13, p.fx.stop = function () {
    clearInterval(cO), cO = null
  }, p.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, p.fx.step = {}, p.expr && p.expr.filters && (p.expr.filters.animated = function (a) {
    return p.grep(p.timers, function (b) {
      return a === b.elem
    }).length
  });
  var c_ = /^(?:body|html)$/i;
  p.fn.offset = function (a) {
    if (arguments.length) {
      return a === b ? this : this.each(function (b) {
        p.offset.setOffset(this, a, b)
      })
    }
    var c, d, e, f, g, h, i, j = {
        top: 0,
        left: 0
      },
      k = this[0],
      l = k && k.ownerDocument;
    if (!l) {
      return
    }
    return (d = l.body) === k ? p.offset.bodyOffset(k) : (c = l.documentElement, p.contains(c, k) ? (typeof k.getBoundingClientRect != "undefined" && (j = k.getBoundingClientRect()), e = da(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
      top: j.top + h - f,
      left: j.left + i - g
    }) : j)
  }, p.offset = {
    bodyOffset: function (a) {
      var b = a.offsetTop,
        c = a.offsetLeft;
      return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0), {
        top: b,
        left: c
      }
    },
    setOffset: function (a, b, c) {
      var d = p.css(a, "position");
      d === "static" && (a.style.position = "relative");
      var e = p(a),
        f = e.offset(),
        g = p.css(a, "top"),
        h = p.css(a, "left"),
        i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1,
        j = {},
        k = {},
        l, m;
      i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), p.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
    }
  }, p.fn.extend({
    position: function () {
      if (!this[0]) {
        return
      }
      var a = this[0],
        b = this.offsetParent(),
        c = this.offset(),
        d = c_.test(b[0].nodeName) ? {
          top: 0,
          left: 0
        } : b.offset();
      return c.top -= parseFloat(p.css(a, "marginTop")) || 0, c.left -= parseFloat(p.css(a, "marginLeft")) || 0, d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0, {
        top: c.top - d.top,
        left: c.left - d.left
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent || e.body;
        while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static") {
          a = a.offsetParent
        }
        return a || e.body
      })
    }
  }), p.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, c) {
    var d = /Y/.test(c);
    p.fn[a] = function (e) {
      return p.access(this, function (a, e, f) {
        var g = da(a);
        if (f === b) {
          return g ? c in g ? g[c] : g.document.documentElement[e] : a[e]
        }
        g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f
      }, a, e, arguments.length, null)
    }
  }), p.each({
    Height: "height",
    Width: "width"
  }, function (a, c) {
    p.each({
      padding: "inner" + a,
      content: c,
      "": "outer" + a
    }, function (d, e) {
      p.fn[e] = function (e, f) {
        var g = arguments.length && (d || typeof e != "boolean"),
          h = d || (e === !0 || f === !0 ? "margin" : "border");
        return p.access(this, function (c, d, e) {
          var f;
          return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
        }, c, g ? e : b, g, null)
      }
    })
  }), a.jQuery = a.$ = p, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
    return p
  })
})(window);
(function () {
  var ai = this,
    ac = ai._,
    ae = {},
    ar = Array.prototype,
    ab = Object.prototype,
    an = Function.prototype,
    aw = ar.push,
    ah = ar.slice,
    au = ar.concat,
    ak = ab.toString,
    aq = ab.hasOwnProperty,
    ad = ar.forEach,
    ag = ar.map,
    ao = ar.reduce,
    aa = ar.reduceRight,
    at = ar.filter,
    ap = ar.every,
    aj = ar.some,
    X = ar.indexOf,
    av = ar.lastIndexOf,
    Y = Array.isArray,
    ax = Object.keys,
    am = an.bind,
    Z = function (a) {
      return a instanceof Z ? a : this instanceof Z ? (this._wrapped = a, void 0) : new Z(a)
    };
  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = Z), exports._ = Z) : ai._ = Z, Z.VERSION = "1.4.4";
  var W = Z.each = Z.forEach = function (h, f, g) {
    if (null != h) {
      if (ad && h.forEach === ad) {
        h.forEach(f, g)
      } else {
        if (h.length === +h.length) {
          for (var c = 0, d = h.length; d > c; c++) {
            if (f.call(g, h[c], c, h) === ae) {
              return
            }
          }
        } else {
          for (var b in h) {
            if (Z.has(h, b) && f.call(g, h[b], b, h) === ae) {
              return
            }
          }
        }
      }
    }
  };
  Z.map = Z.collect = function (d, a, b) {
    var c = [];
    return null == d ? c : ag && d.map === ag ? d.map(a, b) : (W(d, function (g, e, f) {
      c[c.length] = a.call(b, g, e, f)
    }), c)
  };
  var H = "Reduce of empty array with no initial value";
  Z.reduce = Z.foldl = Z.inject = function (f, b, c, d) {
    var a = arguments.length > 2;
    if (null == f && (f = []), ao && f.reduce === ao) {
      return d && (b = Z.bind(b, d)), a ? f.reduce(b, c) : f.reduce(b)
    }
    if (W(f, function (h, g, e) {
        a ? c = b.call(d, c, h, g, e) : (c = h, a = !0)
      }), !a) {
      throw new TypeError(H)
    }
    return c
  }, Z.reduceRight = Z.foldr = function (j, f, g, h) {
    var c = arguments.length > 2;
    if (null == j && (j = []), aa && j.reduceRight === aa) {
      return h && (f = Z.bind(f, h)), c ? j.reduceRight(f, g) : j.reduceRight(f)
    }
    var d = j.length;
    if (d !== +d) {
      var b = Z.keys(j);
      d = b.length
    }
    if (W(j, function (e, i, a) {
        i = b ? b[--d] : --d, c ? g = f.call(h, g, j[i], i, a) : (g = j[i], c = !0)
      }), !c) {
      throw new TypeError(H)
    }
    return g
  }, Z.find = Z.detect = function (d, a, b) {
    var c;
    return Q(d, function (g, e, f) {
      return a.call(b, g, e, f) ? (c = g, !0) : void 0
    }), c
  }, Z.filter = Z.select = function (d, a, b) {
    var c = [];
    return null == d ? c : at && d.filter === at ? d.filter(a, b) : (W(d, function (g, e, f) {
      a.call(b, g, e, f) && (c[c.length] = g)
    }), c)
  }, Z.reject = function (c, a, b) {
    return Z.filter(c, function (g, f, d) {
      return !a.call(b, g, f, d)
    }, b)
  }, Z.every = Z.all = function (d, b, c) {
    b || (b = Z.identity);
    var a = !0;
    return null == d ? a : ap && d.every === ap ? d.every(b, c) : (W(d, function (g, f, e) {
      return (a = a && b.call(c, g, f, e)) ? void 0 : ae
    }), !!a)
  };
  var Q = Z.some = Z.any = function (d, b, c) {
    b || (b = Z.identity);
    var a = !1;
    return null == d ? a : aj && d.some === aj ? d.some(b, c) : (W(d, function (g, f, e) {
      return a || (a = b.call(c, g, f, e)) ? ae : void 0
    }), !!a)
  };
  Z.contains = Z.include = function (b, a) {
    return null == b ? !1 : X && b.indexOf === X ? b.indexOf(a) != -1 : Q(b, function (c) {
      return c === a
    })
  }, Z.invoke = function (d, a) {
    var b = ah.call(arguments, 2),
      c = Z.isFunction(a);
    return Z.map(d, function (e) {
      return (c ? a : e[a]).apply(e, b)
    })
  }, Z.pluck = function (b, a) {
    return Z.map(b, function (c) {
      return c[a]
    })
  }, Z.where = function (c, a, b) {
    return Z.isEmpty(a) ? b ? null : [] : Z[b ? "find" : "filter"](c, function (e) {
      for (var d in a) {
        if (a[d] !== e[d]) {
          return !1
        }
      }
      return !0
    })
  }, Z.findWhere = function (b, a) {
    return Z.where(b, a, !0)
  }, Z.max = function (d, a, b) {
    if (!a && Z.isArray(d) && d[0] === +d[0] && 65535 > d.length) {
      return Math.max.apply(Math, d)
    }
    if (!a && Z.isEmpty(d)) {
      return -1 / 0
    }
    var c = {
      computed: -1 / 0,
      value: -1 / 0
    };
    return W(d, function (h, f, g) {
      var e = a ? a.call(b, h, f, g) : h;
      e >= c.computed && (c = {
        value: h,
        computed: e
      })
    }), c.value
  }, Z.min = function (d, a, b) {
    if (!a && Z.isArray(d) && d[0] === +d[0] && 65535 > d.length) {
      return Math.min.apply(Math, d)
    }
    if (!a && Z.isEmpty(d)) {
      return 1 / 0
    }
    var c = {
      computed: 1 / 0,
      value: 1 / 0
    };
    return W(d, function (h, f, g) {
      var e = a ? a.call(b, h, f, g) : h;
      c.computed > e && (c = {
        value: h,
        computed: e
      })
    }), c.value
  }, Z.shuffle = function (d) {
    var a, b = 0,
      c = [];
    return W(d, function (e) {
      a = Z.random(b++), c[b - 1] = c[a], c[a] = e
    }), c
  };
  var al = function (a) {
    return Z.isFunction(a) ? a : function (b) {
      return b[a]
    }
  };
  Z.sortBy = function (d, a, b) {
    var c = al(a);
    return Z.pluck(Z.map(d, function (g, f, e) {
      return {
        value: g,
        index: f,
        criteria: c.call(b, g, f, e)
      }
    }).sort(function (i, f) {
      var g = i.criteria,
        h = f.criteria;
      if (g !== h) {
        if (g > h || g === void 0) {
          return 1
        }
        if (h > g || h === void 0) {
          return -1
        }
      }
      return i.index < f.index ? -1 : 1
    }), "value")
  };
  var P = function (g, c, d, f) {
    var a = {},
      b = al(c || Z.identity);
    return W(g, function (h, e) {
      var i = b.call(d, h, e, g);
      f(a, i, h)
    }), a
  };
  Z.groupBy = function (c, a, b) {
    return P(c, a, b, function (f, d, e) {
      (Z.has(f, d) ? f[d] : f[d] = []).push(e)
    })
  }, Z.countBy = function (c, a, b) {
    return P(c, a, b, function (e, d) {
      Z.has(e, d) || (e[d] = 0), e[d]++
    })
  }, Z.sortedIndex = function (k, f, g, h) {
    g = null == g ? Z.identity : al(g);
    for (var c = g.call(h, f), d = 0, b = k.length; b > d;) {
      var j = d + b >>> 1;
      c > g.call(h, k[j]) ? d = j + 1 : b = j
    }
    return d
  }, Z.toArray = function (a) {
    return a ? Z.isArray(a) ? ah.call(a) : a.length === +a.length ? Z.map(a, Z.identity) : Z.values(a) : []
  }, Z.size = function (a) {
    return null == a ? 0 : a.length === +a.length ? a.length : Z.keys(a).length
  }, Z.first = Z.head = Z.take = function (c, a, b) {
    return null == c ? void 0 : null == a || b ? c[0] : ah.call(c, 0, a)
  }, Z.initial = function (c, a, b) {
    return ah.call(c, 0, c.length - (null == a || b ? 1 : a))
  }, Z.last = function (c, a, b) {
    return null == c ? void 0 : null == a || b ? c[c.length - 1] : ah.call(c, Math.max(c.length - a, 0))
  }, Z.rest = Z.tail = Z.drop = function (c, a, b) {
    return ah.call(c, null == a || b ? 1 : a)
  }, Z.compact = function (a) {
    return Z.filter(a, Z.identity)
  };
  var G = function (c, a, b) {
    return W(c, function (d) {
      Z.isArray(d) ? a ? aw.apply(b, d) : G(d, a, b) : b.push(d)
    }), b
  };
  Z.flatten = function (b, a) {
    return G(b, a, [])
  }, Z.without = function (a) {
    return Z.difference(a, ah.call(arguments, 1))
  }, Z.uniq = Z.unique = function (j, f, g, h) {
    Z.isFunction(f) && (h = g, g = f, f = !1);
    var c = g ? Z.map(j, g, h) : j,
      d = [],
      b = [];
    return W(c, function (a, i) {
      (f ? i && b[b.length - 1] === a : Z.contains(b, a)) || (b.push(a), d.push(j[i]))
    }), d
  }, Z.union = function () {
    return Z.uniq(au.apply(ar, arguments))
  }, Z.intersection = function (b) {
    var a = ah.call(arguments, 1);
    return Z.filter(Z.uniq(b), function (c) {
      return Z.every(a, function (d) {
        return Z.indexOf(d, c) >= 0
      })
    })
  }, Z.difference = function (b) {
    var a = au.apply(ar, ah.call(arguments, 1));
    return Z.filter(b, function (c) {
      return !Z.contains(a, c)
    })
  }, Z.zip = function () {
    for (var d = ah.call(arguments), a = Z.max(Z.pluck(d, "length")), b = Array(a), c = 0; a > c; c++) {
      b[c] = Z.pluck(d, "" + c)
    }
    return b
  }, Z.object = function (f, b) {
    if (null == f) {
      return {}
    }
    for (var c = {}, d = 0, a = f.length; a > d; d++) {
      b ? c[f[d]] = b[d] : c[f[d][0]] = f[d][1]
    }
    return c
  }, Z.indexOf = function (f, b, c) {
    if (null == f) {
      return -1
    }
    var d = 0,
      a = f.length;
    if (c) {
      if ("number" != typeof c) {
        return d = Z.sortedIndex(f, b), f[d] === b ? d : -1
      }
      d = 0 > c ? Math.max(0, a + c) : c
    }
    if (X && f.indexOf === X) {
      return f.indexOf(b, c)
    }
    for (; a > d; d++) {
      if (f[d] === b) {
        return d
      }
    }
    return -1
  }, Z.lastIndexOf = function (f, b, c) {
    if (null == f) {
      return -1
    }
    var d = null != c;
    if (av && f.lastIndexOf === av) {
      return d ? f.lastIndexOf(b, c) : f.lastIndexOf(b)
    }
    for (var a = d ? c : f.length; a--;) {
      if (f[a] === b) {
        return a
      }
    }
    return -1
  }, Z.range = function (g, c, d) {
    1 >= arguments.length && (c = g || 0, g = 0), d = arguments[2] || 1;
    for (var f = Math.max(Math.ceil((c - g) / d), 0), a = 0, b = Array(f); f > a;) {
      b[a++] = g, g += d
    }
    return b
  }, Z.bind = function (c, a) {
    if (c.bind === am && am) {
      return am.apply(c, ah.call(arguments, 1))
    }
    var b = ah.call(arguments, 2);
    return function () {
      return c.apply(a, b.concat(ah.call(arguments)))
    }
  }, Z.partial = function (b) {
    var a = ah.call(arguments, 1);
    return function () {
      return b.apply(this, a.concat(ah.call(arguments)))
    }
  }, Z.bindAll = function (b) {
    var a = ah.call(arguments, 1);
    return 0 === a.length && (a = Z.functions(b)), W(a, function (c) {
      b[c] = Z.bind(b[c], b)
    }), b
  }, Z.memoize = function (c, a) {
    var b = {};
    return a || (a = Z.identity),
      function () {
        var d = a.apply(this, arguments);
        return Z.has(b, d) ? b[d] : b[d] = c.apply(this, arguments)
      }
  }, Z.delay = function (c, a) {
    var b = ah.call(arguments, 2);
    return setTimeout(function () {
      return c.apply(null, b)
    }, a)
  }, Z.defer = function (a) {
    return Z.delay.apply(Z, [a, 1].concat(ah.call(arguments, 1)))
  }, Z.throttle = function (k, f) {
    var g, h, c, d, b = 0,
      j = function () {
        b = new Date, c = null, d = k.apply(g, h)
      };
    return function () {
      var e = new Date,
        a = f - (e - b);
      return g = this, h = arguments, 0 >= a ? (clearTimeout(c), c = null, b = e, d = k.apply(g, h)) : c || (c = setTimeout(j, a)), d
    }
  }, Z.debounce = function (f, b, c) {
    var d, a;
    return function () {
      var g = this,
        e = arguments,
        h = function () {
          d = null, c || (a = f.apply(g, e))
        },
        j = c && !d;
      return clearTimeout(d), d = setTimeout(h, b), j && (a = f.apply(g, e)), a
    }
  }, Z.once = function (c) {
    var a, b = !1;
    return function () {
      return b ? a : (b = !0, a = c.apply(this, arguments), c = null, a)
    }
  }, Z.wrap = function (b, a) {
    return function () {
      var c = [b];
      return aw.apply(c, arguments), a.apply(this, c)
    }
  }, Z.compose = function () {
    var a = arguments;
    return function () {
      for (var b = arguments, c = a.length - 1; c >= 0; c--) {
        b = [a[c].apply(this, b)]
      }
      return b[0]
    }
  }, Z.after = function (b, a) {
    return 0 >= b ? a() : function () {
      return 1 > --b ? a.apply(this, arguments) : void 0
    }
  }, Z.keys = ax || function (c) {
    if (c !== Object(c)) {
      throw new TypeError("Invalid object")
    }
    var a = [];
    for (var b in c) {
      Z.has(c, b) && (a[a.length] = b)
    }
    return a
  }, Z.values = function (c) {
    var a = [];
    for (var b in c) {
      Z.has(c, b) && a.push(c[b])
    }
    return a
  }, Z.pairs = function (c) {
    var a = [];
    for (var b in c) {
      Z.has(c, b) && a.push([b, c[b]])
    }
    return a
  }, Z.invert = function (c) {
    var a = {};
    for (var b in c) {
      Z.has(c, b) && (a[c[b]] = b)
    }
    return a
  }, Z.functions = Z.methods = function (c) {
    var a = [];
    for (var b in c) {
      Z.isFunction(c[b]) && a.push(b)
    }
    return a.sort()
  }, Z.extend = function (a) {
    return W(ah.call(arguments, 1), function (b) {
      if (b) {
        for (var c in b) {
          a[c] = b[c]
        }
      }
    }), a
  }, Z.pick = function (c) {
    var a = {},
      b = au.apply(ar, ah.call(arguments, 1));
    return W(b, function (d) {
      d in c && (a[d] = c[d])
    }), a
  }, Z.omit = function (d) {
    var b = {},
      c = au.apply(ar, ah.call(arguments, 1));
    for (var a in d) {
      Z.contains(c, a) || (b[a] = d[a])
    }
    return b
  }, Z.defaults = function (a) {
    return W(ah.call(arguments, 1), function (b) {
      if (b) {
        for (var c in b) {
          null == a[c] && (a[c] = b[c])
        }
      }
    }), a
  }, Z.clone = function (a) {
    return Z.isObject(a) ? Z.isArray(a) ? a.slice() : Z.extend({}, a) : a
  }, Z.tap = function (b, a) {
    return a(b), b
  };
  var L = function (g, q, b, k) {
    if (g === q) {
      return 0 !== g || 1 / g == 1 / q
    }
    if (null == g || null == q) {
      return g === q
    }
    g instanceof Z && (g = g._wrapped), q instanceof Z && (q = q._wrapped);
    var p = ak.call(g);
    if (p != ak.call(q)) {
      return !1
    }
    switch (p) {
      case "[object String]":
        return g == q + "";
      case "[object Number]":
        return g != +g ? q != +q : 0 == g ? 1 / g == 1 / q : g == +q;
      case "[object Date]":
      case "[object Boolean]":
        return +g == +q;
      case "[object RegExp]":
        return g.source == q.source && g.global == q.global && g.multiline == q.multiline && g.ignoreCase == q.ignoreCase
    }
    if ("object" != typeof g || "object" != typeof q) {
      return !1
    }
    for (var h = b.length; h--;) {
      if (b[h] == g) {
        return k[h] == q
      }
    }
    b.push(g), k.push(q);
    var m = 0,
      d = !0;
    if ("[object Array]" == p) {
      if (m = g.length, d = m == q.length) {
        for (; m-- && (d = L(g[m], q[m], b, k));) {}
      }
    } else {
      var l = g.constructor,
        j = q.constructor;
      if (l !== j && !(Z.isFunction(l) && l instanceof l && Z.isFunction(j) && j instanceof j)) {
        return !1
      }
      for (var v in g) {
        if (Z.has(g, v) && (m++, !(d = Z.has(q, v) && L(g[v], q[v], b, k)))) {
          break
        }
      }
      if (d) {
        for (v in q) {
          if (Z.has(q, v) && !m--) {
            break
          }
        }
        d = !m
      }
    }
    return b.pop(), k.pop(), d
  };
  Z.isEqual = function (b, a) {
    return L(b, a, [], [])
  }, Z.isEmpty = function (b) {
    if (null == b) {
      return !0
    }
    if (Z.isArray(b) || Z.isString(b)) {
      return 0 === b.length
    }
    for (var a in b) {
      if (Z.has(b, a)) {
        return !1
      }
    }
    return !0
  }, Z.isElement = function (a) {
    return !(!a || 1 !== a.nodeType)
  }, Z.isArray = Y || function (a) {
    return "[object Array]" == ak.call(a)
  }, Z.isObject = function (a) {
    return a === Object(a)
  }, W(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (a) {
    Z["is" + a] = function (b) {
      return ak.call(b) == "[object " + a + "]"
    }
  }), Z.isArguments(arguments) || (Z.isArguments = function (a) {
    return !(!a || !Z.has(a, "callee"))
  }), "function" != typeof /./ && (Z.isFunction = function (a) {
    return "function" == typeof a
  }), Z.isFinite = function (a) {
    return isFinite(a) && !isNaN(parseFloat(a))
  }, Z.isNaN = function (a) {
    return Z.isNumber(a) && a != +a
  }, Z.isBoolean = function (a) {
    return a === !0 || a === !1 || "[object Boolean]" == ak.call(a)
  }, Z.isNull = function (a) {
    return null === a
  }, Z.isUndefined = function (a) {
    return a === void 0
  }, Z.has = function (b, a) {
    return aq.call(b, a)
  }, Z.noConflict = function () {
    return ai._ = ac, this
  }, Z.identity = function (a) {
    return a
  }, Z.times = function (f, b, c) {
    for (var d = Array(f), a = 0; f > a; a++) {
      d[a] = b.call(c, a)
    }
    return d
  }, Z.random = function (b, a) {
    return null == a && (a = b, b = 0), b + Math.floor(Math.random() * (a - b + 1))
  };
  var K = {
    escape: {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "/": "&#x2F;"
    }
  };
  K.unescape = Z.invert(K.escape);
  var C = {
    escape: RegExp("[" + Z.keys(K.escape).join("") + "]", "g"),
    unescape: RegExp("(" + Z.keys(K.unescape).join("|") + ")", "g")
  };
  Z.each(["escape", "unescape"], function (a) {
    Z[a] = function (b) {
      return null == b ? "" : ("" + b).replace(C[a], function (c) {
        return K[a][c]
      })
    }
  }), Z.result = function (c, a) {
    if (null == c) {
      return null
    }
    var b = c[a];
    return Z.isFunction(b) ? b.call(c) : b
  }, Z.mixin = function (a) {
    W(Z.functions(a), function (b) {
      var c = Z[b] = a[b];
      Z.prototype[b] = function () {
        var d = [this._wrapped];
        return aw.apply(d, arguments), U.call(this, c.apply(Z, d))
      }
    })
  };
  var J = 0;
  Z.uniqueId = function (b) {
    var a = ++J + "";
    return b ? b + a : a
  }, Z.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var z = /(.)^/,
    af = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "	": "t",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
    V = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  Z.template = function (f, m, b) {
    var h;
    b = Z.defaults({}, b, Z.templateSettings);
    var l = RegExp([(b.escape || z).source, (b.interpolate || z).source, (b.evaluate || z).source].join("|") + "|$", "g"),
      g = 0,
      k = "__p+='";
    f.replace(l, function (c, i, n, a, p) {
      return k += f.slice(g, p).replace(V, function (e) {
        return "\\" + af[e]
      }), i && (k += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), n && (k += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), a && (k += "';\n" + a + "\n__p+='"), g = p + c.length, c
    }), k += "';\n", b.variable || (k = "with(obj||{}){\n" + k + "}\n"), k = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + k + "return __p;\n";
    try {
      h = Function(b.variable || "obj", "_", k)
    } catch (d) {
      throw d.source = k, d
    }
    if (m) {
      return h(m, Z)
    }
    var j = function (a) {
      return h.call(this, a, Z)
    };
    return j.source = "function(" + (b.variable || "obj") + "){\n" + k + "}", j
  }, Z.chain = function (a) {
    return Z(a).chain()
  };
  var U = function (a) {
    return this._chain ? Z(a).chain() : a
  };
  Z.mixin(Z), W(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (b) {
    var a = ar[b];
    Z.prototype[b] = function () {
      var c = this._wrapped;
      return a.apply(c, arguments), "shift" != b && "splice" != b || 0 !== c.length || delete c[0], U.call(this, c)
    }
  }), W(["concat", "join", "slice"], function (b) {
    var a = ar[b];
    Z.prototype[b] = function () {
      return U.call(this, a.apply(this._wrapped, arguments))
    }
  }), Z.extend(Z.prototype, {
    chain: function () {
      return this._chain = !0, this
    },
    value: function () {
      return this._wrapped
    }
  })
}).call(this);
(function () {
  var s = this;
  var q = s.Backbone;
  var i = [];
  var h = i.push;
  var r = i.slice;
  var B = i.splice;
  var d;
  if (typeof exports !== "undefined") {
    d = exports
  } else {
    d = s.Backbone = {}
  }
  d.VERSION = "0.9.10";
  var D = s._;
  if (!D && (typeof require !== "undefined")) {
    D = require("underscore")
  }
  d.$ = s.jQuery || s.Zepto || s.ender;
  d.noConflict = function () {
    s.Backbone = q;
    return this
  };
  d.emulateHTTP = false;
  d.emulateJSON = false;
  var a = /\s+/;
  var F = function (N, L, H, K) {
    if (!H) {
      return true
    }
    if (typeof H === "object") {
      for (var J in H) {
        N[L].apply(N, [J, H[J]].concat(K))
      }
    } else {
      if (a.test(H)) {
        var M = H.split(a);
        for (var I = 0, G = M.length; I < G; I++) {
          N[L].apply(N, [M[I]].concat(K))
        }
      } else {
        return true
      }
    }
  };
  var e = function (J, H) {
    var K, I = -1,
      G = J.length;
    switch (H.length) {
      case 0:
        while (++I < G) {
          (K = J[I]).callback.call(K.ctx)
        }
        return;
      case 1:
        while (++I < G) {
          (K = J[I]).callback.call(K.ctx, H[0])
        }
        return;
      case 2:
        while (++I < G) {
          (K = J[I]).callback.call(K.ctx, H[0], H[1])
        }
        return;
      case 3:
        while (++I < G) {
          (K = J[I]).callback.call(K.ctx, H[0], H[1], H[2])
        }
        return;
      default:
        while (++I < G) {
          (K = J[I]).callback.apply(K.ctx, H)
        }
    }
  };
  var p = d.Events = {
    on: function (G, J, H) {
      if (!(F(this, "on", G, [J, H]) && J)) {
        return this
      }
      this._events || (this._events = {});
      var I = this._events[G] || (this._events[G] = []);
      I.push({
        callback: J,
        context: H,
        ctx: H || this
      });
      return this
    },
    once: function (H, K, I) {
      if (!(F(this, "once", H, [K, I]) && K)) {
        return this
      }
      var G = this;
      var J = D.once(function () {
        G.off(H, J);
        K.apply(this, arguments)
      });
      J._callback = K;
      this.on(H, J, I);
      return this
    },
    off: function (G, P, H) {
      var M, O, Q, N, L, I, K, J;
      if (!this._events || !F(this, "off", G, [P, H])) {
        return this
      }
      if (!G && !P && !H) {
        this._events = {};
        return this
      }
      N = G ? [G] : D.keys(this._events);
      for (L = 0, I = N.length; L < I; L++) {
        G = N[L];
        if (M = this._events[G]) {
          Q = [];
          if (P || H) {
            for (K = 0, J = M.length; K < J; K++) {
              O = M[K];
              if ((P && P !== O.callback && P !== O.callback._callback) || (H && H !== O.context)) {
                Q.push(O)
              }
            }
          }
          this._events[G] = Q
        }
      }
      return this
    },
    trigger: function (I) {
      if (!this._events) {
        return this
      }
      var H = r.call(arguments, 1);
      if (!F(this, "trigger", I, H)) {
        return this
      }
      var J = this._events[I];
      var G = this._events.all;
      if (J) {
        e(J, H)
      }
      if (G) {
        e(G, arguments)
      }
      return this
    },
    listenTo: function (I, G, K) {
      var H = this._listeners || (this._listeners = {});
      var J = I._listenerId || (I._listenerId = D.uniqueId("l"));
      H[J] = I;
      I.on(G, typeof G === "object" ? this : K, this);
      return this
    },
    stopListening: function (I, G, K) {
      var H = this._listeners;
      if (!H) {
        return
      }
      if (I) {
        I.off(G, typeof G === "object" ? this : K, this);
        if (!G && !K) {
          delete H[I._listenerId]
        }
      } else {
        if (typeof G === "object") {
          K = this
        }
        for (var J in H) {
          H[J].off(G, K, this)
        }
        this._listeners = {}
      }
      return this
    }
  };
  p.bind = p.on;
  p.unbind = p.off;
  D.extend(d, p);
  var n = d.Model = function (G, I) {
    var J;
    var H = G || {};
    this.cid = D.uniqueId("c");
    this.attributes = {};
    if (I && I.collection) {
      this.collection = I.collection
    }
    if (I && I.parse) {
      H = this.parse(H, I) || {}
    }
    if (J = D.result(this, "defaults")) {
      H = D.defaults({}, H, J)
    }
    this.set(H, I);
    this.changed = {};
    this.initialize.apply(this, arguments)
  };
  D.extend(n.prototype, p, {
    changed: null,
    idAttribute: "id",
    initialize: function () {},
    toJSON: function (G) {
      return D.clone(this.attributes)
    },
    sync: function () {
      return d.sync.apply(this, arguments)
    },
    get: function (G) {
      return this.attributes[G]
    },
    escape: function (G) {
      return D.escape(this.get(G))
    },
    has: function (G) {
      return this.get(G) != null
    },
    set: function (O, G, S) {
      var M, P, Q, N, L, R, I, K;
      if (O == null) {
        return this
      }
      if (typeof O === "object") {
        P = O;
        S = G
      } else {
        (P = {})[O] = G
      }
      S || (S = {});
      if (!this._validate(P, S)) {
        return false
      }
      Q = S.unset;
      L = S.silent;
      N = [];
      R = this._changing;
      this._changing = true;
      if (!R) {
        this._previousAttributes = D.clone(this.attributes);
        this.changed = {}
      }
      K = this.attributes, I = this._previousAttributes;
      if (this.idAttribute in P) {
        this.id = P[this.idAttribute]
      }
      for (M in P) {
        G = P[M];
        if (!D.isEqual(K[M], G)) {
          N.push(M)
        }
        if (!D.isEqual(I[M], G)) {
          this.changed[M] = G
        } else {
          delete this.changed[M]
        }
        Q ? delete K[M] : K[M] = G
      }
      if (!L) {
        if (N.length) {
          this._pending = true
        }
        for (var J = 0, H = N.length; J < H; J++) {
          this.trigger("change:" + N[J], this, K[N[J]], S)
        }
      }
      if (R) {
        return this
      }
      if (!L) {
        while (this._pending) {
          this._pending = false;
          this.trigger("change", this, S)
        }
      }
      this._pending = false;
      this._changing = false;
      return this
    },
    unset: function (G, H) {
      return this.set(G, void 0, D.extend({}, H, {
        unset: true
      }))
    },
    clear: function (H) {
      var G = {};
      for (var I in this.attributes) {
        G[I] = void 0
      }
      return this.set(G, D.extend({}, H, {
        unset: true
      }))
    },
    hasChanged: function (G) {
      if (G == null) {
        return !D.isEmpty(this.changed)
      }
      return D.has(this.changed, G)
    },
    changedAttributes: function (I) {
      if (!I) {
        return this.hasChanged() ? D.clone(this.changed) : false
      }
      var K, J = false;
      var H = this._changing ? this._previousAttributes : this.attributes;
      for (var G in I) {
        if (D.isEqual(H[G], (K = I[G]))) {
          continue
        }(J || (J = {}))[G] = K
      }
      return J
    },
    previous: function (G) {
      if (G == null || !this._previousAttributes) {
        return null
      }
      return this._previousAttributes[G]
    },
    previousAttributes: function () {
      return D.clone(this._previousAttributes)
    },
    fetch: function (G) {
      G = G ? D.clone(G) : {};
      if (G.parse === void 0) {
        G.parse = true
      }
      var H = G.success;
      G.success = function (J, K, I) {
        if (!J.set(J.parse(K, I), I)) {
          return false
        }
        if (H) {
          H(J, K, I)
        }
      };
      return this.sync("read", this, G)
    },
    save: function (J, M, I) {
      var H, L, N, K, G = this.attributes;
      if (J == null || typeof J === "object") {
        H = J;
        I = M
      } else {
        (H = {})[J] = M
      }
      if (H && (!I || !I.wait) && !this.set(H, I)) {
        return false
      }
      I = D.extend({
        validate: true
      }, I);
      if (!this._validate(H, I)) {
        return false
      }
      if (H && I.wait) {
        this.attributes = D.extend({}, G, H)
      }
      if (I.parse === void 0) {
        I.parse = true
      }
      L = I.success;
      I.success = function (P, R, O) {
        P.attributes = G;
        var Q = P.parse(R, O);
        if (O.wait) {
          Q = D.extend(H || {}, Q)
        }
        if (D.isObject(Q) && !P.set(Q, O)) {
          return false
        }
        if (L) {
          L(P, R, O)
        }
      };
      N = this.isNew() ? "create" : (I.patch ? "patch" : "update");
      if (N === "patch") {
        I.attrs = H
      }
      K = this.sync(N, this, I);
      if (H && I.wait) {
        this.attributes = G
      }
      return K
    },
    destroy: function (H) {
      H = H ? D.clone(H) : {};
      var G = this;
      var K = H.success;
      var I = function () {
        G.trigger("destroy", G, G.collection, H)
      };
      H.success = function (M, N, L) {
        if (L.wait || M.isNew()) {
          I()
        }
        if (K) {
          K(M, N, L)
        }
      };
      if (this.isNew()) {
        H.success(this, null, H);
        return false
      }
      var J = this.sync("delete", this, H);
      if (!H.wait) {
        I()
      }
      return J
    },
    url: function () {
      var G = D.result(this, "urlRoot") || D.result(this.collection, "url") || v();
      if (this.isNew()) {
        return G
      }
      return G + (G.charAt(G.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
    },
    parse: function (H, G) {
      return H
    },
    clone: function () {
      return new this.constructor(this.attributes)
    },
    isNew: function () {
      return this.id == null
    },
    isValid: function (G) {
      return !this.validate || !this.validate(this.attributes, G)
    },
    _validate: function (I, H) {
      if (!H.validate || !this.validate) {
        return true
      }
      I = D.extend({}, this.attributes, I);
      var G = this.validationError = this.validate(I, H) || null;
      if (!G) {
        return true
      }
      this.trigger("invalid", this, G, H || {});
      return false
    }
  });
  var E = d.Collection = function (H, G) {
    G || (G = {});
    if (G.model) {
      this.model = G.model
    }
    if (G.comparator !== void 0) {
      this.comparator = G.comparator
    }
    this.models = [];
    this._reset();
    this.initialize.apply(this, arguments);
    if (H) {
      this.reset(H, D.extend({
        silent: true
      }, G))
    }
  };
  D.extend(E.prototype, p, {
    model: n,
    initialize: function () {},
    toJSON: function (G) {
      return this.map(function (H) {
        return H.toJSON(G)
      })
    },
    sync: function () {
      return d.sync.apply(this, arguments)
    },
    add: function (G, R) {
      G = D.isArray(G) ? G.slice() : [G];
      R || (R = {});
      var M, J, N, P, H, O, Q, I, L, K;
      Q = [];
      I = R.at;
      L = this.comparator && (I == null) && R.sort != false;
      K = D.isString(this.comparator) ? this.comparator : null;
      for (M = 0, J = G.length; M < J; M++) {
        if (!(N = this._prepareModel(P = G[M], R))) {
          this.trigger("invalid", this, P, R);
          continue
        }
        if (H = this.get(N)) {
          if (R.merge) {
            H.set(P === N ? N.attributes : P, R);
            if (L && !O && H.hasChanged(K)) {
              O = true
            }
          }
          continue
        }
        Q.push(N);
        N.on("all", this._onModelEvent, this);
        this._byId[N.cid] = N;
        if (N.id != null) {
          this._byId[N.id] = N
        }
      }
      if (Q.length) {
        if (L) {
          O = true
        }
        this.length += Q.length;
        if (I != null) {
          B.apply(this.models, [I, 0].concat(Q))
        } else {
          h.apply(this.models, Q)
        }
      }
      if (O) {
        this.sort({
          silent: true
        })
      }
      if (R.silent) {
        return this
      }
      for (M = 0, J = Q.length; M < J; M++) {
        (N = Q[M]).trigger("add", N, this, R)
      }
      if (O) {
        this.trigger("sort", this, R)
      }
      return this
    },
    remove: function (L, J) {
      L = D.isArray(L) ? L.slice() : [L];
      J || (J = {});
      var K, G, I, H;
      for (K = 0, G = L.length; K < G; K++) {
        H = this.get(L[K]);
        if (!H) {
          continue
        }
        delete this._byId[H.id];
        delete this._byId[H.cid];
        I = this.indexOf(H);
        this.models.splice(I, 1);
        this.length--;
        if (!J.silent) {
          J.index = I;
          H.trigger("remove", H, this, J)
        }
        this._removeReference(H)
      }
      return this
    },
    push: function (H, G) {
      H = this._prepareModel(H, G);
      this.add(H, D.extend({
        at: this.length
      }, G));
      return H
    },
    pop: function (H) {
      var G = this.at(this.length - 1);
      this.remove(G, H);
      return G
    },
    unshift: function (H, G) {
      H = this._prepareModel(H, G);
      this.add(H, D.extend({
        at: 0
      }, G));
      return H
    },
    shift: function (H) {
      var G = this.at(0);
      this.remove(G, H);
      return G
    },
    slice: function (H, G) {
      return this.models.slice(H, G)
    },
    get: function (G) {
      if (G == null) {
        return void 0
      }
      this._idAttr || (this._idAttr = this.model.prototype.idAttribute);
      return this._byId[G.id || G.cid || G[this._idAttr] || G]
    },
    at: function (G) {
      return this.models[G]
    },
    where: function (G) {
      if (D.isEmpty(G)) {
        return []
      }
      return this.filter(function (H) {
        for (var I in G) {
          if (G[I] !== H.get(I)) {
            return false
          }
        }
        return true
      })
    },
    sort: function (G) {
      if (!this.comparator) {
        throw new Error("Cannot sort a set without a comparator")
      }
      G || (G = {});
      if (D.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this)
      } else {
        this.models.sort(D.bind(this.comparator, this))
      }
      if (!G.silent) {
        this.trigger("sort", this, G)
      }
      return this
    },
    pluck: function (G) {
      return D.invoke(this.models, "get", G)
    },
    update: function (G, O) {
      O = D.extend({
        add: true,
        merge: true,
        remove: true
      }, O);
      if (O.parse) {
        G = this.parse(G, O)
      }
      var M, K, I, H;
      var N = [],
        L = [],
        J = {};
      if (!D.isArray(G)) {
        G = G ? [G] : []
      }
      if (O.add && !O.remove) {
        return this.add(G, O)
      }
      for (K = 0, I = G.length; K < I; K++) {
        M = G[K];
        H = this.get(M);
        if (O.remove && H) {
          J[H.cid] = true
        }
        if ((O.add && !H) || (O.merge && H)) {
          N.push(M)
        }
      }
      if (O.remove) {
        for (K = 0, I = this.models.length; K < I; K++) {
          M = this.models[K];
          if (!J[M.cid]) {
            L.push(M)
          }
        }
      }
      if (L.length) {
        this.remove(L, O)
      }
      if (N.length) {
        this.add(N, O)
      }
      return this
    },
    reset: function (J, H) {
      H || (H = {});
      if (H.parse) {
        J = this.parse(J, H)
      }
      for (var I = 0, G = this.models.length; I < G; I++) {
        this._removeReference(this.models[I])
      }
      H.previousModels = this.models.slice();
      this._reset();
      if (J) {
        this.add(J, D.extend({
          silent: true
        }, H))
      }
      if (!H.silent) {
        this.trigger("reset", this, H)
      }
      return this
    },
    fetch: function (G) {
      G = G ? D.clone(G) : {};
      if (G.parse === void 0) {
        G.parse = true
      }
      var H = G.success;
      G.success = function (K, J, I) {
        var L = I.update ? "update" : "reset";
        K[L](J, I);
        if (H) {
          H(K, J, I)
        }
      };
      return this.sync("read", this, G)
    },
    create: function (H, G) {
      G = G ? D.clone(G) : {};
      if (!(H = this._prepareModel(H, G))) {
        return false
      }
      if (!G.wait) {
        this.add(H, G)
      }
      var J = this;
      var I = G.success;
      G.success = function (L, M, K) {
        if (K.wait) {
          J.add(L, K)
        }
        if (I) {
          I(L, M, K)
        }
      };
      H.save(null, G);
      return H
    },
    parse: function (H, G) {
      return H
    },
    clone: function () {
      return new this.constructor(this.models)
    },
    _reset: function () {
      this.length = 0;
      this.models.length = 0;
      this._byId = {}
    },
    _prepareModel: function (I, H) {
      if (I instanceof n) {
        if (!I.collection) {
          I.collection = this
        }
        return I
      }
      H || (H = {});
      H.collection = this;
      var G = new this.model(I, H);
      if (!G._validate(I, H)) {
        return false
      }
      return G
    },
    _removeReference: function (G) {
      if (this === G.collection) {
        delete G.collection
      }
      G.off("all", this._onModelEvent, this)
    },
    _onModelEvent: function (I, H, J, G) {
      if ((I === "add" || I === "remove") && J !== this) {
        return
      }
      if (I === "destroy") {
        this.remove(H, G)
      }
      if (H && I === "change:" + H.idAttribute) {
        delete this._byId[H.previous(H.idAttribute)];
        if (H.id != null) {
          this._byId[H.id] = H
        }
      }
      this.trigger.apply(this, arguments)
    },
    sortedIndex: function (G, J, H) {
      J || (J = this.comparator);
      var I = D.isFunction(J) ? J : function (K) {
        return K.get(J)
      };
      return D.sortedIndex(this.models, G, I, H)
    }
  });
  var z = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
  D.each(z, function (G) {
    E.prototype[G] = function () {
      var H = r.call(arguments);
      H.unshift(this.models);
      return D[G].apply(D, H)
    }
  });
  var j = ["groupBy", "countBy", "sortBy"];
  D.each(j, function (G) {
    E.prototype[G] = function (J, H) {
      var I = D.isFunction(J) ? J : function (K) {
        return K.get(J)
      };
      return D[G](this.models, I, H)
    }
  });
  var C = d.Router = function (G) {
    G || (G = {});
    if (G.routes) {
      this.routes = G.routes
    }
    this._bindRoutes();
    this.initialize.apply(this, arguments)
  };
  var m = /\((.*?)\)/g;
  var k = /(\(\?)?:\w+/g;
  var A = /\*\w+/g;
  var f = /[\-{}\[\]+?.,\\\^$|#\s]/g;
  D.extend(C.prototype, p, {
    initialize: function () {},
    route: function (G, H, I) {
      if (!D.isRegExp(G)) {
        G = this._routeToRegExp(G)
      }
      if (!I) {
        I = this[H]
      }
      d.history.route(G, D.bind(function (K) {
        var J = this._extractParameters(G, K);
        I && I.apply(this, J);
        this.trigger.apply(this, ["route:" + H].concat(J));
        this.trigger("route", H, J);
        d.history.trigger("route", this, H, J)
      }, this));
      return this
    },
    navigate: function (H, G) {
      d.history.navigate(H, G);
      return this
    },
    _bindRoutes: function () {
      if (!this.routes) {
        return
      }
      var H, G = D.keys(this.routes);
      while ((H = G.pop()) != null) {
        this.route(H, this.routes[H])
      }
    },
    _routeToRegExp: function (G) {
      G = G.replace(f, "\\$&").replace(m, "(?:$1)?").replace(k, function (I, H) {
        return H ? I : "([^/]+)"
      }).replace(A, "(.*?)");
      return new RegExp("^" + G + "$")
    },
    _extractParameters: function (G, H) {
      return G.exec(H).slice(1)
    }
  });
  var b = d.History = function () {
    this.handlers = [];
    D.bindAll(this, "checkUrl");
    if (typeof window !== "undefined") {
      this.location = window.location;
      this.history = window.history
    }
  };
  var o = /^[#\/]|\s+$/g;
  var y = /^\/+|\/+$/g;
  var l = /msie [\w.]+/;
  var c = /\/$/;
  b.started = false;
  D.extend(b.prototype, p, {
    interval: 50,
    getHash: function (H) {
      var G = (H || this).location.href.match(/#(.*)$/);
      return G ? G[1] : ""
    },
    getFragment: function (I, H) {
      if (I == null) {
        if (this._hasPushState || !this._wantsHashChange || H) {
          I = this.location.pathname;
          var G = this.root.replace(c, "");
          if (!I.indexOf(G)) {
            I = I.substr(G.length)
          }
        } else {
          I = this.getHash()
        }
      }
      return I.replace(o, "")
    },
    start: function (I) {
      if (b.started) {
        throw new Error("Backbone.history has already been started")
      }
      b.started = true;
      this.options = D.extend({}, {
        root: "/"
      }, this.options, I);
      this.root = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState = !!this.options.pushState;
      this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
      var H = this.getFragment();
      var G = document.documentMode;
      var K = (l.exec(navigator.userAgent.toLowerCase()) && (!G || G <= 7));
      this.root = ("/" + this.root + "/").replace(y, "/");
      if (K && this._wantsHashChange) {
        this.iframe = d.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
        this.navigate(H)
      }
      if (this._hasPushState) {
        d.$(window).on("popstate", this.checkUrl)
      } else {
        if (this._wantsHashChange && ("onhashchange" in window) && !K) {
          d.$(window).on("hashchange", this.checkUrl)
        } else {
          if (this._wantsHashChange) {
            this._checkUrlInterval = setInterval(this.checkUrl, this.interval)
          }
        }
      }
      this.fragment = H;
      var L = this.location;
      var J = L.pathname.replace(/[^\/]$/, "$&/") === this.root;
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !J) {
        this.fragment = this.getFragment(null, true);
        this.location.replace(this.root + this.location.search + "#" + this.fragment);
        return true
      } else {
        if (this._wantsPushState && this._hasPushState && J && L.hash) {
          this.fragment = this.getHash().replace(o, "");
          this.history.replaceState({}, document.title, this.root + this.fragment + L.search)
        }
      }
      if (!this.options.silent) {
        return this.loadUrl()
      }
    },
    stop: function () {
      d.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
      clearInterval(this._checkUrlInterval);
      b.started = false
    },
    route: function (G, H) {
      this.handlers.unshift({
        route: G,
        callback: H
      })
    },
    checkUrl: function (H) {
      var G = this.getFragment();
      if (G === this.fragment && this.iframe) {
        G = this.getFragment(this.getHash(this.iframe))
      }
      if (G === this.fragment) {
        return false
      }
      if (this.iframe) {
        this.navigate(G)
      }
      this.loadUrl() || this.loadUrl(this.getHash())
    },
    loadUrl: function (I) {
      var H = this.fragment = this.getFragment(I);
      var G = D.any(this.handlers, function (J) {
        if (J.route.test(H)) {
          J.callback(H);
          return true
        }
      });
      return G
    },
    navigate: function (I, H) {
      if (!b.started) {
        return false
      }
      if (!H || H === true) {
        H = {
          trigger: H
        }
      }
      I = this.getFragment(I || "");
      if (this.fragment === I) {
        return
      }
      this.fragment = I;
      var G = this.root + I;
      if (this._hasPushState) {
        this.history[H.replace ? "replaceState" : "pushState"]({}, document.title, G)
      } else {
        if (this._wantsHashChange) {
          this._updateHash(this.location, I, H.replace);
          if (this.iframe && (I !== this.getFragment(this.getHash(this.iframe)))) {
            if (!H.replace) {
              this.iframe.document.open().close()
            }
            this._updateHash(this.iframe.location, I, H.replace)
          }
        } else {
          return this.location.assign(G)
        }
      }
      if (H.trigger) {
        this.loadUrl(I)
      }
    },
    _updateHash: function (G, I, J) {
      if (J) {
        var H = G.href.replace(/(javascript:|#).*$/, "");
        G.replace(H + "#" + I)
      } else {
        G.hash = "#" + I
      }
    }
  });
  d.history = new b;
  var u = d.View = function (G) {
    this.cid = D.uniqueId("view");
    this._configure(G || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents()
  };
  var g = /^(\S+)\s*(.*)$/;
  var w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
  D.extend(u.prototype, p, {
    tagName: "div",
    $: function (G) {
      return this.$el.find(G)
    },
    initialize: function () {},
    render: function () {
      return this
    },
    remove: function () {
      this.$el.remove();
      this.stopListening();
      return this
    },
    setElement: function (G, H) {
      if (this.$el) {
        this.undelegateEvents()
      }
      this.$el = G instanceof d.$ ? G : d.$(G);
      this.el = this.$el[0];
      if (H !== false) {
        this.delegateEvents()
      }
      return this
    },
    delegateEvents: function (K) {
      if (!(K || (K = D.result(this, "events")))) {
        return
      }
      this.undelegateEvents();
      for (var J in K) {
        var L = K[J];
        if (!D.isFunction(L)) {
          L = this[K[J]]
        }
        if (!L) {
          throw new Error('Method "' + K[J] + '" does not exist')
        }
        var I = J.match(g);
        var H = I[1],
          G = I[2];
        L = D.bind(L, this);
        H += ".delegateEvents" + this.cid;
        if (G === "") {
          this.$el.on(H, L)
        } else {
          this.$el.on(H, G, L)
        }
      }
    },
    undelegateEvents: function () {
      this.$el.off(".delegateEvents" + this.cid)
    },
    _configure: function (G) {
      if (this.options) {
        G = D.extend({}, D.result(this, "options"), G)
      }
      D.extend(this, D.pick(G, w));
      this.options = G
    },
    _ensureElement: function () {
      if (!this.el) {
        var G = D.extend({}, D.result(this, "attributes"));
        if (this.id) {
          G.id = D.result(this, "id")
        }
        if (this.className) {
          G["class"] = D.result(this, "className")
        }
        var H = d.$("<" + D.result(this, "tagName") + ">").attr(G);
        this.setElement(H, false)
      } else {
        this.setElement(D.result(this, "el"), false)
      }
    }
  });
  var t = {
    create: "POST",
    update: "PUT",
    patch: "PATCH",
    "delete": "DELETE",
    read: "GET"
  };
  d.sync = function (G, I, O) {
    var J = t[G];
    D.defaults(O || (O = {}), {
      emulateHTTP: d.emulateHTTP,
      emulateJSON: d.emulateJSON
    });
    var H = {
      type: J,
      dataType: "json"
    };
    if (!O.url) {
      H.url = D.result(I, "url") || v()
    }
    if (O.data == null && I && (G === "create" || G === "update" || G === "patch")) {
      H.contentType = "application/json";
      H.data = JSON.stringify(O.attrs || I.toJSON(O))
    }
    if (O.emulateJSON) {
      H.contentType = "application/x-www-form-urlencoded";
      H.data = H.data ? {
        model: H.data
      } : {}
    }
    if (O.emulateHTTP && (J === "PUT" || J === "DELETE" || J === "PATCH")) {
      H.type = "POST";
      if (O.emulateJSON) {
        H.data._method = J
      }
      var L = O.beforeSend;
      O.beforeSend = function (P) {
        P.setRequestHeader("X-HTTP-Method-Override", J);
        if (L) {
          return L.apply(this, arguments)
        }
      }
    }
    if (H.type !== "GET" && !O.emulateJSON) {
      H.processData = false
    }
    var M = O.success;
    O.success = function (P) {
      if (M) {
        M(I, P, O)
      }
      I.trigger("sync", I, P, O)
    };
    var K = O.error;
    O.error = function (P) {
      if (K) {
        K(I, P, O)
      }
      I.trigger("error", I, P, O)
    };
    var N = O.xhr = d.ajax(D.extend(H, O));
    I.trigger("request", I, N, O);
    return N
  };
  d.ajax = function () {
    return d.$.ajax.apply(d.$, arguments)
  };
  var x = function (G, I) {
    var H = this;
    var K;
    if (G && D.has(G, "constructor")) {
      K = G.constructor
    } else {
      K = function () {
        return H.apply(this, arguments)
      }
    }
    D.extend(K, H, I);
    var J = function () {
      this.constructor = K
    };
    J.prototype = H.prototype;
    K.prototype = new J;
    if (G) {
      D.extend(K.prototype, G)
    }
    K.__super__ = H.prototype;
    return K
  };
  n.extend = E.extend = C.extend = u.extend = b.extend = x;
  var v = function () {
    throw new Error('A "url" property or function must be specified')
  }
}).call(this);
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
! function (be, bd, bc, a7) {
  if (typeof Object.create !== "function") {
    return
  }

  function a6(e, d, f) {
    return setTimeout(aY(e, f), d)
  }

  function a4(e, d, f) {
    return Array.isArray(e) ? (a3(e, f[d], f), !0) : !1
  }

  function a3(f, d, h) {
    var g;
    if (f) {
      if (f.forEach) {
        f.forEach(d, h)
      } else {
        if (f.length !== a7) {
          for (g = 0; g < f.length;) {
            d.call(h, f[g], g, f), g++
          }
        } else {
          for (g in f) {
            f.hasOwnProperty(g) && d.call(h, f[g], g, f)
          }
        }
      }
    }
  }

  function a2(a, h, g) {
    var f = "DEPRECATED METHOD: " + h + "\n" + g + " AT \n";
    return function () {
      var i = new Error("get-stack-trace"),
        e = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
        b = be.console && (be.console.warn || be.console.log);
      return b && b.call(be.console, f, e), a.apply(this, arguments)
    }
  }

  function aZ(g, f, j) {
    var i, h = f.prototype;
    i = g.prototype = Object.create(h), i.constructor = g, i._super = h, j && cj(i, j)
  }

  function aY(d, c) {
    return function () {
      return d.apply(c, arguments)
    }
  }

  function aW(d, c) {
    return typeof d == a8 ? d.apply(c ? c[0] || a7 : a7, c) : d
  }

  function aV(d, c) {
    return d === a7 ? c : d
  }

  function aU(e, d, f) {
    a3(aO(d), function (a) {
      e.addEventListener(a, f, !1)
    })
  }

  function aS(e, d, f) {
    a3(aO(d), function (a) {
      e.removeEventListener(a, f, !1)
    })
  }

  function aR(d, c) {
    for (; d;) {
      if (d == c) {
        return !0
      }
      d = d.parentNode
    }
    return !1
  }

  function aP(d, c) {
    return d.indexOf(c) > -1
  }

  function aO(b) {
    return b.trim().split(/\s+/g)
  }

  function aN(f, e, h) {
    if (f.indexOf && !h) {
      return f.indexOf(e)
    }
    for (var g = 0; g < f.length;) {
      if (h && f[g][h] == e || !h && f[g] === e) {
        return g
      }
      g++
    }
    return -1
  }

  function aM(b) {
    return Array.prototype.slice.call(b, 0)
  }

  function aL(i, h, n) {
    for (var m = [], l = [], k = 0; k < i.length;) {
      var j = h ? i[k][h] : i[k];
      aN(l, j) < 0 && m.push(i[k]), l[k] = j, k++
    }
    return n && (m = h ? m.sort(function (b, d) {
      return b[h] > d[h]
    }) : m.sort()), m
  }

  function aK(h, d) {
    for (var l, k, j = d[0].toUpperCase() + d.slice(1), i = 0; i < b4.length;) {
      if (l = b4[i], k = l ? l + j : d, k in h) {
        return k
      }
      i++
    }
    return a7
  }

  function aJ() {
    return bg++
  }

  function aI(a) {
    var d = a.ownerDocument || a;
    return d.defaultView || d.parentWindow || be
  }

  function aH(e, d) {
    var f = this;
    this.manager = e, this.callback = d, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (a) {
      aW(e.options.enable, [e]) && f.handler(a)
    }, this.init()
  }

  function aF(e) {
    var d, f = e.options.inputClass;
    return new(d = f ? f : ac ? bz : cc ? bv : ap ? bs : bA)(e, aE)
  }

  function aE(i, h, n) {
    var m = n.pointers.length,
      l = n.changedPointers.length,
      k = h & ax && m - l === 0,
      j = h & (ck | b5) && m - l === 0;
    n.isFirst = !!k, n.isFinal = !!j, k && (i.session = {}), n.eventType = h, bT(i, n), i.emit("hammer.input", n), i.recognize(n), i.session.prevInput = n
  }

  function bT(v, u) {
    var t = v.session,
      s = u.pointers,
      r = s.length;
    t.firstInput || (t.firstInput = bO(u)), r > 1 && !t.firstMultiple ? t.firstMultiple = bO(u) : 1 === r && (t.firstMultiple = !1);
    var q = t.firstInput,
      p = t.firstMultiple,
      o = p ? p.center : q.center,
      n = u.center = bL(s);
    u.timeStamp = cm(), u.deltaTime = u.timeStamp - q.timeStamp, u.angle = bG(o, n), u.distance = bH(o, n), bR(t, u), u.offsetDirection = bI(u.deltaX, u.deltaY);
    var m = bK(u.deltaTime, u.deltaX, u.deltaY);
    u.overallVelocityX = m.x, u.overallVelocityY = m.y, u.overallVelocity = am(m.x) > am(m.y) ? m.x : m.y, u.scale = p ? bC(p.pointers, s) : 1, u.rotation = p ? bD(p.pointers, s) : 0, u.maxPointers = t.prevInput ? u.pointers.length > t.prevInput.maxPointers ? u.pointers.length : t.prevInput.maxPointers : u.pointers.length, bQ(t, u);
    var l = v.element;
    aR(u.srcEvent.target, l) && (l = u.srcEvent.target), u.target = l
  }

  function bR(h, g) {
    var l = g.center,
      k = h.offsetDelta || {},
      j = h.prevDelta || {},
      i = h.prevInput || {};
    g.eventType !== ax && i.eventType !== ck || (j = h.prevDelta = {
      x: i.deltaX || 0,
      y: i.deltaY || 0
    }, k = h.offsetDelta = {
      x: l.x,
      y: l.y
    }), g.deltaX = j.x + (l.x - k.x), g.deltaY = j.y + (l.y - k.y)
  }

  function bQ(v, u) {
    var t, s, r, q, p = v.lastInterval || u,
      o = u.timeStamp - p.timeStamp;
    if (u.eventType != b5 && (o > a1 || p.velocity === a7)) {
      var n = u.deltaX - p.deltaX,
        m = u.deltaY - p.deltaY,
        d = bK(o, n, m);
      s = d.x, r = d.y, t = am(d.x) > am(d.y) ? d.x : d.y, q = bI(n, m), v.lastInterval = u
    } else {
      t = p.velocity, s = p.velocityX, r = p.velocityY, q = p.direction
    }
    u.velocity = t, u.velocityX = s, u.velocityY = r, u.direction = q
  }

  function bO(e) {
    for (var d = [], f = 0; f < e.pointers.length;) {
      d[f] = {
        clientX: az(e.pointers[f].clientX),
        clientY: az(e.pointers[f].clientY)
      }, f++
    }
    return {
      timeStamp: cm(),
      pointers: d,
      center: bL(d),
      deltaX: e.deltaX,
      deltaY: e.deltaY
    }
  }

  function bL(g) {
    var f = g.length;
    if (1 === f) {
      return {
        x: az(g[0].clientX),
        y: az(g[0].clientY)
      }
    }
    for (var j = 0, i = 0, h = 0; f > h;) {
      j += g[h].clientX, i += g[h].clientY, h++
    }
    return {
      x: az(j / f),
      y: az(i / f)
    }
  }

  function bK(e, d, f) {
    return {
      x: d / e || 0,
      y: f / e || 0
    }
  }

  function bI(d, c) {
    return d === c ? bN : am(d) >= am(c) ? 0 > d ? a9 : aA : 0 > c ? an : cn
  }

  function bH(g, f, j) {
    j || (j = aD);
    var i = f[j[0]] - g[j[0]],
      h = f[j[1]] - g[j[1]];
    return Math.sqrt(i * i + h * h)
  }

  function bG(g, f, j) {
    j || (j = aD);
    var i = f[j[0]] - g[j[0]],
      h = f[j[1]] - g[j[1]];
    return 180 * Math.atan2(h, i) / Math.PI
  }

  function bD(d, c) {
    return bG(c[1], c[0], aq) + bG(d[1], d[0], aq)
  }

  function bC(d, c) {
    return bH(c[0], c[1], aq) / bH(d[0], d[1], aq)
  }

  function bA() {
    this.evEl = cd, this.evWin = bX, this.pressed = !1, aH.apply(this, arguments)
  }

  function bz() {
    this.evEl = ar, this.evWin = ae, aH.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
  }

  function by() {
    this.evTarget = bP, this.evWin = af, this.started = !1, aH.apply(this, arguments)
  }

  function bx(f, e) {
    var h = aM(f.touches),
      g = aM(f.changedTouches);
    return e & (ck | b5) && (h = aL(h.concat(g), "identifier", !0)), [h, g]
  }

  function bv() {
    this.evTarget = bu, this.targetIds = {}, aH.apply(this, arguments)
  }

  function bt(r, q) {
    var p = aM(r.touches),
      o = this.targetIds;
    if (q & (ax | ak) && 1 === p.length) {
      return o[p[0].identifier] = !0, [p, p]
    }
    var n, m, l = aM(r.changedTouches),
      k = [],
      j = this.target;
    if (m = p.filter(function (b) {
        return aR(b.target, j)
      }), q === ax) {
      for (n = 0; n < m.length;) {
        o[m[n].identifier] = !0, n++
      }
    }
    for (n = 0; n < l.length;) {
      o[l[n].identifier] && k.push(l[n]), q & (ck | b5) && delete o[l[n].identifier], n++
    }
    return k.length ? [aL(m.concat(k), "identifier", !0), k] : void 0
  }

  function bs() {
    aH.apply(this, arguments);
    var b = aY(this.handler, this);
    this.touch = new bv(this.manager, b), this.mouse = new bA(this.manager, b), this.primaryTouch = null, this.lastTouches = []
  }

  function br(d, c) {
    d & ax ? (this.primaryTouch = c.changedPointers[0].identifier, bq.call(this, c)) : d & (ck | b5) && bq.call(this, c)
  }

  function bq(g) {
    var f = g.changedPointers[0];
    if (f.identifier === this.primaryTouch) {
      var j = {
        x: f.clientX,
        y: f.clientY
      };
      this.lastTouches.push(j);
      var i = this.lastTouches,
        h = function () {
          var b = i.indexOf(j);
          b > -1 && i.splice(b, 1)
        };
      setTimeout(h, aQ)
    }
  }

  function bp(i) {
    for (var h = i.srcEvent.clientX, n = i.srcEvent.clientY, m = 0; m < this.lastTouches.length; m++) {
      var l = this.lastTouches[m],
        k = Math.abs(h - l.x),
        j = Math.abs(n - l.y);
      if (at >= k && at >= j) {
        return !0
      }
    }
    return !1
  }

  function bo(d, c) {
    this.manager = d, this.set(c)
  }

  function bn(e) {
    if (aP(e, av)) {
      return av
    }
    var d = aP(e, ai),
      f = aP(e, ci);
    return d && f ? av : d || f ? d ? ai : ci : aP(e, aX) ? aX : bB
  }

  function bm() {
    if (!cf) {
      return !1
    }
    var a = {},
      d = be.CSS && be.CSS.supports;
    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (b) {
      a[b] = d ? be.CSS.supports("touch-action", b) : !0
    }), a
  }

  function bl(b) {
    this.options = cj({}, this.defaults, b || {}), this.id = aJ(), this.manager = null, this.options.enable = aV(this.options.enable, !0), this.state = bJ, this.simultaneous = {}, this.requireFail = []
  }

  function bj(b) {
    return b & b7 ? "cancel" : b & al ? "end" : b & ay ? "move" : b & a5 ? "start" : ""
  }

  function b6(b) {
    return b == cn ? "down" : b == an ? "up" : b == a9 ? "left" : b == aA ? "right" : ""
  }

  function bh(e, d) {
    var f = d.manager;
    return f ? f.get(e) : e
  }

  function bZ() {
    bl.apply(this, arguments)
  }

  function bw() {
    bZ.apply(this, arguments), this.pX = null, this.pY = null
  }

  function aT() {
    bZ.apply(this, arguments)
  }

  function au() {
    bl.apply(this, arguments), this._timer = null, this._input = null
  }

  function ah() {
    bZ.apply(this, arguments)
  }

  function cg() {
    bZ.apply(this, arguments)
  }

  function b1() {
    bl.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
  }

  function bE(d, c) {
    return c = c || {}, c.recognizers = aV(c.recognizers, bE.defaults.preset), new a0(d, c)
  }

  function a0(d, c) {
    this.options = cj({}, bE.defaults, c || {}), this.options.inputTarget = this.options.inputTarget || d, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = d, this.input = aF(this), this.touchAction = new bo(this, this.options.touchAction), aw(this, !0), a3(this.options.recognizers, function (f) {
      var e = this.add(new f[0](f[1]));
      f[2] && e.recognizeWith(f[2]), f[3] && e.requireFailure(f[3])
    }, this)
  }

  function aw(f, e) {
    var h = f.element;
    if (h.style) {
      var g;
      a3(f.options.cssProps, function (b, a) {
        g = aK(h.style, a), e ? (f.oldCssProps[g] = h.style[g], h.style[g] = b) : h.style[g] = f.oldCssProps[g] || ""
      }), e || (f.oldCssProps = {})
    }
  }

  function aj(b, f) {
    var e = bd.createEvent("Event");
    e.initEvent(b, !0, !0), e.gesture = f, f.target.dispatchEvent(e)
  }
  var cj, b4 = ["", "webkit", "Moz", "MS", "ms", "o"],
    bM = bd.createElement("div"),
    a8 = "function",
    az = Math.round,
    am = Math.abs,
    cm = Date.now;
  cj = "function" != typeof Object.assign ? function (g) {
    if (g === a7 || null === g) {
      throw new TypeError("Cannot convert undefined or null to object")
    }
    for (var d = Object(g), j = 1; j < arguments.length; j++) {
      var i = arguments[j];
      if (i !== a7 && null !== i) {
        for (var h in i) {
          i.hasOwnProperty(h) && (d[h] = i[h])
        }
      }
    }
    return d
  } : Object.assign;
  var b8 = a2(function (g, d, j) {
      for (var i = Object.keys(d), h = 0; h < i.length;) {
        (!j || j && g[i[h]] === a7) && (g[i[h]] = d[i[h]]), h++
      }
      return g
    }, "extend", "Use `assign`."),
    bU = a2(function (d, c) {
      return b8(d, c, !0)
    }, "merge", "Use `assign`."),
    bg = 1,
    aC = /mobile|tablet|ip(ad|hone|od)|android/i,
    ap = "ontouchstart" in be,
    ac = aK(be, "PointerEvent") !== a7,
    cc = ap && aC.test(navigator.userAgent),
    bW = "touch",
    ch = "pen",
    b2 = "mouse",
    bF = "kinect",
    a1 = 25,
    ax = 1,
    ak = 2,
    ck = 4,
    b5 = 8,
    bN = 1,
    a9 = 2,
    aA = 4,
    an = 8,
    cn = 16,
    b9 = a9 | aA,
    bV = an | cn,
    bi = b9 | bV,
    aD = ["x", "y"],
    aq = ["clientX", "clientY"];
  aH.prototype = {
    handler: function () {},
    init: function () {
      this.evEl && aU(this.element, this.evEl, this.domHandler), this.evTarget && aU(this.target, this.evTarget, this.domHandler), this.evWin && aU(aI(this.element), this.evWin, this.domHandler)
    },
    destroy: function () {
      this.evEl && aS(this.element, this.evEl, this.domHandler), this.evTarget && aS(this.target, this.evTarget, this.domHandler), this.evWin && aS(aI(this.element), this.evWin, this.domHandler)
    }
  };
  var ad = {
      mousedown: ax,
      mousemove: ak,
      mouseup: ck
    },
    cd = "mousedown",
    bX = "mousemove mouseup";
  aZ(bA, aH, {
    handler: function (d) {
      var c = ad[d.type];
      c & ax && 0 === d.button && (this.pressed = !0), c & ak && 1 !== d.which && (c = ck), this.pressed && (c & ck && (this.pressed = !1), this.callback(this.manager, c, {
        pointers: [d],
        changedPointers: [d],
        pointerType: b2,
        srcEvent: d
      }))
    }
  });
  var bk = {
      pointerdown: ax,
      pointermove: ak,
      pointerup: ck,
      pointercancel: b5,
      pointerout: b5
    },
    aG = {
      2: bW,
      3: ch,
      4: b2,
      5: bF
    },
    ar = "pointerdown",
    ae = "pointermove pointerup pointercancel";
  be.MSPointerEvent && !be.PointerEvent && (ar = "MSPointerDown", ae = "MSPointerMove MSPointerUp MSPointerCancel"), aZ(bz, aH, {
    handler: function (j) {
      var i = this.store,
        p = !1,
        o = j.type.toLowerCase().replace("ms", ""),
        n = bk[o],
        m = aG[j.pointerType] || j.pointerType,
        l = m == bW,
        k = aN(i, j.pointerId, "pointerId");
      n & ax && (0 === j.button || l) ? 0 > k && (i.push(j), k = i.length - 1) : n & (ck | b5) && (p = !0), 0 > k || (i[k] = j, this.callback(this.manager, n, {
        pointers: i,
        changedPointers: [j],
        pointerType: m,
        srcEvent: j
      }), p && i.splice(k, 1))
    }
  });
  var ce = {
      touchstart: ax,
      touchmove: ak,
      touchend: ck,
      touchcancel: b5
    },
    bP = "touchstart",
    af = "touchstart touchmove touchend touchcancel";
  aZ(by, aH, {
    handler: function (e) {
      var d = ce[e.type];
      if (d === ax && (this.started = !0), this.started) {
        var f = bx.call(this, e, d);
        d & (ck | b5) && f[0].length - f[1].length === 0 && (this.started = !1), this.callback(this.manager, d, {
          pointers: f[0],
          changedPointers: f[1],
          pointerType: bW,
          srcEvent: e
        })
      }
    }
  });
  var bY = {
      touchstart: ax,
      touchmove: ak,
      touchend: ck,
      touchcancel: b5
    },
    bu = "touchstart touchmove touchend touchcancel";
  aZ(bv, aH, {
    handler: function (e) {
      var d = bY[e.type],
        f = bt.call(this, e, d);
      f && this.callback(this.manager, d, {
        pointers: f[0],
        changedPointers: f[1],
        pointerType: bW,
        srcEvent: e
      })
    }
  });
  var aQ = 2500,
    at = 25;
  aZ(bs, aH, {
    handler: function (g, f, j) {
      var i = j.pointerType == bW,
        h = j.pointerType == b2;
      if (!(h && j.sourceCapabilities && j.sourceCapabilities.firesTouchEvents)) {
        if (i) {
          br.call(this, f, j)
        } else {
          if (h && bp.call(this, j)) {
            return
          }
        }
        this.callback(g, f, j)
      }
    },
    destroy: function () {
      this.touch.destroy(), this.mouse.destroy()
    }
  });
  var ag = aK(bM.style, "touchAction"),
    cf = ag !== a7,
    b0 = "compute",
    bB = "auto",
    aX = "manipulation",
    av = "none",
    ai = "pan-x",
    ci = "pan-y",
    b3 = bm();
  bo.prototype = {
    set: function (b) {
      b == b0 && (b = this.compute()), cf && this.manager.element.style && b3[b] && (this.manager.element.style[ag] = b), this.actions = b.toLowerCase().trim()
    },
    update: function () {
      this.set(this.manager.options.touchAction)
    },
    compute: function () {
      var b = [];
      return a3(this.manager.recognizers, function (a) {
        aW(a.options.enable, [a]) && (b = b.concat(a.getTouchAction()))
      }), bn(b.join(" "))
    },
    preventDefaults: function (t) {
      var s = t.srcEvent,
        r = t.offsetDirection;
      if (this.manager.session.prevented) {
        return void s.preventDefault()
      }
      var q = this.actions,
        p = aP(q, av) && !b3[av],
        o = aP(q, ci) && !b3[ci],
        n = aP(q, ai) && !b3[ai];
      if (p) {
        var m = 1 === t.pointers.length,
          l = t.distance < 2,
          k = t.deltaTime < 250;
        if (m && l && k) {
          return
        }
      }
      return n && o ? void 0 : p || o && r & b9 || n && r & bV ? this.preventSrc(s) : void 0
    },
    preventSrc: function (b) {
      this.manager.session.prevented = !0, b.preventDefault()
    }
  };
  var bJ = 1,
    a5 = 2,
    ay = 4,
    al = 8,
    cl = al,
    b7 = 16,
    bS = 32;
  bl.prototype = {
    defaults: {},
    set: function (b) {
      return cj(this.options, b), this.manager && this.manager.touchAction.update(), this
    },
    recognizeWith: function (d) {
      if (a4(d, "recognizeWith", this)) {
        return this
      }
      var c = this.simultaneous;
      return d = bh(d, this), c[d.id] || (c[d.id] = d, d.recognizeWith(this)), this
    },
    dropRecognizeWith: function (b) {
      return a4(b, "dropRecognizeWith", this) ? this : (b = bh(b, this), delete this.simultaneous[b.id], this)
    },
    requireFailure: function (d) {
      if (a4(d, "requireFailure", this)) {
        return this
      }
      var c = this.requireFail;
      return d = bh(d, this), -1 === aN(c, d) && (c.push(d), d.requireFailure(this)), this
    },
    dropRequireFailure: function (d) {
      if (a4(d, "dropRequireFailure", this)) {
        return this
      }
      d = bh(d, this);
      var c = aN(this.requireFail, d);
      return c > -1 && this.requireFail.splice(c, 1), this
    },
    hasRequireFailures: function () {
      return this.requireFail.length > 0
    },
    canRecognizeWith: function (b) {
      return !!this.simultaneous[b.id]
    },
    emit: function (f) {
      function e(a) {
        h.manager.emit(a, f)
      }
      var h = this,
        g = this.state;
      al > g && e(h.options.event + bj(g)), e(h.options.event), f.additionalEvent && e(f.additionalEvent), g >= al && e(h.options.event + bj(g))
    },
    tryEmit: function (b) {
      return this.canEmit() ? this.emit(b) : void(this.state = bS)
    },
    canEmit: function () {
      for (var b = 0; b < this.requireFail.length;) {
        if (!(this.requireFail[b].state & (bS | bJ))) {
          return !1
        }
        b++
      }
      return !0
    },
    recognize: function (d) {
      var c = cj({}, d);
      return aW(this.options.enable, [this, c]) ? (this.state & (cl | b7 | bS) && (this.state = bJ), this.state = this.process(c), void(this.state & (a5 | ay | al | b7) && this.tryEmit(c))) : (this.reset(), void(this.state = bS))
    },
    process: function (b) {},
    getTouchAction: function () {},
    reset: function () {}
  }, aZ(bZ, bl, {
    defaults: {
      pointers: 1
    },
    attrTest: function (d) {
      var c = this.options.pointers;
      return 0 === c || d.pointers.length === c
    },
    process: function (g) {
      var f = this.state,
        j = g.eventType,
        i = f & (a5 | ay),
        h = this.attrTest(g);
      return i && (j & b5 || !h) ? f | b7 : i || h ? j & ck ? f | al : f & a5 ? f | ay : a5 : bS
    }
  }), aZ(bw, bZ, {
    defaults: {
      event: "pan",
      threshold: 10,
      pointers: 1,
      direction: bi
    },
    getTouchAction: function () {
      var d = this.options.direction,
        c = [];
      return d & b9 && c.push(ci), d & bV && c.push(ai), c
    },
    directionTest: function (i) {
      var h = this.options,
        n = !0,
        m = i.distance,
        l = i.direction,
        k = i.deltaX,
        j = i.deltaY;
      return l & h.direction || (h.direction & b9 ? (l = 0 === k ? bN : 0 > k ? a9 : aA, n = k != this.pX, m = Math.abs(i.deltaX)) : (l = 0 === j ? bN : 0 > j ? an : cn, n = j != this.pY, m = Math.abs(i.deltaY))), i.direction = l, n && m > h.threshold && l & h.direction
    },
    attrTest: function (b) {
      return bZ.prototype.attrTest.call(this, b) && (this.state & a5 || !(this.state & a5) && this.directionTest(b))
    },
    emit: function (d) {
      this.pX = d.deltaX, this.pY = d.deltaY;
      var c = b6(d.direction);
      c && (d.additionalEvent = this.options.event + c), this._super.emit.call(this, d)
    }
  }), aZ(aT, bZ, {
    defaults: {
      event: "pinch",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [av]
    },
    attrTest: function (b) {
      return this._super.attrTest.call(this, b) && (Math.abs(b.scale - 1) > this.options.threshold || this.state & a5)
    },
    emit: function (d) {
      if (1 !== d.scale) {
        var c = d.scale < 1 ? "in" : "out";
        d.additionalEvent = this.options.event + c
      }
      this._super.emit.call(this, d)
    }
  }), aZ(au, bl, {
    defaults: {
      event: "press",
      pointers: 1,
      time: 251,
      threshold: 9
    },
    getTouchAction: function () {
      return [bB]
    },
    process: function (g) {
      var e = this.options,
        j = g.pointers.length === e.pointers,
        i = g.distance < e.threshold,
        h = g.deltaTime > e.time;
      if (this._input = g, !i || !j || g.eventType & (ck | b5) && !h) {
        this.reset()
      } else {
        if (g.eventType & ax) {
          this.reset(), this._timer = a6(function () {
            this.state = cl, this.tryEmit()
          }, e.time, this)
        } else {
          if (g.eventType & ck) {
            return cl
          }
        }
      }
      return bS
    },
    reset: function () {
      clearTimeout(this._timer)
    },
    emit: function (b) {
      this.state === cl && (b && b.eventType & ck ? this.manager.emit(this.options.event + "up", b) : (this._input.timeStamp = cm(), this.manager.emit(this.options.event, this._input)))
    }
  }), aZ(ah, bZ, {
    defaults: {
      event: "rotate",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [av]
    },
    attrTest: function (b) {
      return this._super.attrTest.call(this, b) && (Math.abs(b.rotation) > this.options.threshold || this.state & a5)
    }
  }), aZ(cg, bZ, {
    defaults: {
      event: "swipe",
      threshold: 10,
      velocity: 0.3,
      direction: b9 | bV,
      pointers: 1
    },
    getTouchAction: function () {
      return bw.prototype.getTouchAction.call(this)
    },
    attrTest: function (e) {
      var d, f = this.options.direction;
      return f & (b9 | bV) ? d = e.overallVelocity : f & b9 ? d = e.overallVelocityX : f & bV && (d = e.overallVelocityY), this._super.attrTest.call(this, e) && f & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && am(d) > this.options.velocity && e.eventType & ck
    },
    emit: function (d) {
      var c = b6(d.offsetDirection);
      c && this.manager.emit(this.options.event + c, d), this.manager.emit(this.options.event, d)
    }
  }), aZ(b1, bl, {
    defaults: {
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 9,
      posThreshold: 10
    },
    getTouchAction: function () {
      return [aX]
    },
    process: function (j) {
      var e = this.options,
        p = j.pointers.length === e.pointers,
        o = j.distance < e.threshold,
        n = j.deltaTime < e.time;
      if (this.reset(), j.eventType & ax && 0 === this.count) {
        return this.failTimeout()
      }
      if (o && n && p) {
        if (j.eventType != ck) {
          return this.failTimeout()
        }
        var m = this.pTime ? j.timeStamp - this.pTime < e.interval : !0,
          l = !this.pCenter || bH(this.pCenter, j.center) < e.posThreshold;
        this.pTime = j.timeStamp, this.pCenter = j.center, l && m ? this.count += 1 : this.count = 1, this._input = j;
        var k = this.count % e.taps;
        if (0 === k) {
          return this.hasRequireFailures() ? (this._timer = a6(function () {
            this.state = cl, this.tryEmit()
          }, e.interval, this), a5) : cl
        }
      }
      return bS
    },
    failTimeout: function () {
      return this._timer = a6(function () {
        this.state = bS
      }, this.options.interval, this), bS
    },
    reset: function () {
      clearTimeout(this._timer)
    },
    emit: function () {
      this.state == cl && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
    }
  }), bE.VERSION = "2.0.8", bE.defaults = {
    domEvents: !1,
    touchAction: b0,
    enable: !0,
    inputTarget: null,
    inputClass: null,
    preset: [
      [ah, {
        enable: !1
      }],
      [aT, {
          enable: !1
        },
        ["rotate"]
      ],
      [cg, {
        direction: b9
      }],
      [bw, {
          direction: b9
        },
        ["swipe"]
      ],
      [b1],
      [b1, {
          event: "doubletap",
          taps: 2
        },
        ["tap"]
      ],
      [au]
    ],
    cssProps: {
      userSelect: "none",
      touchSelect: "none",
      touchCallout: "none",
      contentZooming: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)"
    }
  };
  var bf = 1,
    aB = 2;
  a0.prototype = {
    set: function (b) {
      return cj(this.options, b), b.touchAction && this.touchAction.update(), b.inputTarget && (this.input.destroy(), this.input.target = b.inputTarget, this.input.init()), this
    },
    stop: function (b) {
      this.session.stopped = b ? aB : bf
    },
    recognize: function (h) {
      var g = this.session;
      if (!g.stopped) {
        this.touchAction.preventDefaults(h);
        var l, k = this.recognizers,
          j = g.curRecognizer;
        (!j || j && j.state & cl) && (j = g.curRecognizer = null);
        for (var i = 0; i < k.length;) {
          l = k[i], g.stopped === aB || j && l != j && !l.canRecognizeWith(j) ? l.reset() : l.recognize(h), !j && l.state & (a5 | ay | al) && (j = g.curRecognizer = l), i++
        }
      }
    },
    get: function (e) {
      if (e instanceof bl) {
        return e
      }
      for (var d = this.recognizers, f = 0; f < d.length; f++) {
        if (d[f].options.event == e) {
          return d[f]
        }
      }
      return null
    },
    add: function (d) {
      if (a4(d, "add", this)) {
        return this
      }
      var c = this.get(d.options.event);
      return c && this.remove(c), this.recognizers.push(d), d.manager = this, this.touchAction.update(), d
    },
    remove: function (e) {
      if (a4(e, "remove", this)) {
        return this
      }
      if (e = this.get(e)) {
        var d = this.recognizers,
          f = aN(d, e); - 1 !== f && (d.splice(f, 1), this.touchAction.update())
      }
      return this
    },
    on: function (e, d) {
      if (e !== a7 && d !== a7) {
        var f = this.handlers;
        return a3(aO(e), function (b) {
          f[b] = f[b] || [], f[b].push(d)
        }), this
      }
    },
    off: function (e, d) {
      if (e !== a7) {
        var f = this.handlers;
        return a3(aO(e), function (b) {
          d ? f[b] && f[b].splice(aN(f[b], d), 1) : delete f[b]
        }), this
      }
    },
    emit: function (f, e) {
      this.options.domEvents && aj(f, e);
      var h = this.handlers[f] && this.handlers[f].slice();
      if (h && h.length) {
        e.type = f, e.preventDefault = function () {
          e.srcEvent.preventDefault()
        };
        for (var g = 0; g < h.length;) {
          h[g](e), g++
        }
      }
    },
    destroy: function () {
      this.element && aw(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
    }
  }, cj(bE, {
    INPUT_START: ax,
    INPUT_MOVE: ak,
    INPUT_END: ck,
    INPUT_CANCEL: b5,
    STATE_POSSIBLE: bJ,
    STATE_BEGAN: a5,
    STATE_CHANGED: ay,
    STATE_ENDED: al,
    STATE_RECOGNIZED: cl,
    STATE_CANCELLED: b7,
    STATE_FAILED: bS,
    DIRECTION_NONE: bN,
    DIRECTION_LEFT: a9,
    DIRECTION_RIGHT: aA,
    DIRECTION_UP: an,
    DIRECTION_DOWN: cn,
    DIRECTION_HORIZONTAL: b9,
    DIRECTION_VERTICAL: bV,
    DIRECTION_ALL: bi,
    Manager: a0,
    Input: aH,
    TouchAction: bo,
    TouchInput: bv,
    MouseInput: bA,
    PointerEventInput: bz,
    TouchMouseInput: bs,
    SingleTouchInput: by,
    Recognizer: bl,
    AttrRecognizer: bZ,
    Tap: b1,
    Pan: bw,
    Swipe: cg,
    Pinch: aT,
    Rotate: ah,
    Press: au,
    on: aU,
    off: aS,
    each: a3,
    merge: bU,
    extend: b8,
    assign: cj,
    inherit: aZ,
    bindFn: aY,
    prefixed: aK
  });
  var ao = "undefined" != typeof be ? be : "undefined" != typeof self ? self : {};
  ao.Hammer = bE, "function" == typeof define && define.amd ? define(function () {
    return bE
  }) : "undefined" != typeof module && module.exports ? module.exports = bE : be[bc] = bE
}(window, document, "Hammer");
(function (a) {
  if (typeof Object.create !== "function") {
    return
  }
  if (typeof define === "function" && define.amd) {
    define(["jquery", "hammerjs"], a)
  } else {
    if (typeof exports === "object") {
      a(require("jquery"), require("hammerjs"))
    } else {
      a(jQuery, Hammer)
    }
  }
}(function (b, a) {
  function c(f, d) {
    var e = b(f);
    if (!e.data("hammer")) {
      e.data("hammer", new a(e[0], d))
    }
  }
  b.fn.hammer = function (d) {
    return this.each(function () {
      c(this, d)
    })
  };
  a.Manager.prototype.emit = (function (d) {
    return function (e, f) {
      d.call(this, e, f);
      b(this.element).trigger({
        type: e,
        gesture: f
      })
    }
  })(a.Manager.prototype.emit)
}));
/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 *
 * Updated 28/11/2012 Ian Huntington (ian.huntington@lbi.com) : included a '!' at the start of the fitVids IIFE to prevent minification issue
 */
!(function (f, b, g) {
  var a = /\+/g;

  function e(h) {
    return h
  }

  function c(h) {
    return decodeURIComponent(h.replace(a, " "))
  }
  var d = f.cookie = function (p, o, u) {
    if (o !== g) {
      u = f.extend({}, d.defaults, u);
      if (o === null) {
        u.expires = -1
      }
      if (typeof u.expires === "number") {
        var q = u.expires,
          s = u.expires = new Date();
        s.setDate(s.getDate() + q)
      }
      o = d.json ? JSON.stringify(o) : String(o);
      return (b.cookie = [encodeURIComponent(p), "=", d.raw ? o : encodeURIComponent(o), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join(""))
    }
    var h = d.raw ? e : c;
    var r = b.cookie.split("; ");
    for (var n = 0, k = r.length; n < k; n++) {
      var m = r[n].split("=");
      if (h(m.shift()) === p) {
        var j = h(m.join("="));
        return d.json ? JSON.parse(j) : j
      }
    }
    return null
  };
  d.defaults = {};
  f.removeCookie = function (i, h) {
    if (f.cookie(i) !== null) {
      f.cookie(i, null, h);
      return true
    }
    return false
  }
})(jQuery, document);
/*! jQuery UI - v1.11.3 - 2015-02-17
 * http://jqueryui.com
 * Includes: effect.js, effect-scale.js, effect-size.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
})(function (c) {
  var b = "ui-effects-",
    a = c;
  c.effects = {
      effect: {}
    },
    function (y, D) {
      function v(l, f, d) {
        var h = z[f.type] || {};
        return null == l ? d || !f.def ? null : f.def : (l = h.floor ? ~~l : parseFloat(l), isNaN(l) ? f.def : h.mod ? (l + h.mod) % h.mod : 0 > l ? 0 : l > h.max ? h.max : l)
      }

      function E(d) {
        var e = q(),
          f = e._rgba = [];
        return d = d.toLowerCase(), x(w, function (t, n) {
          var u, s = n.re.exec(d),
            p = s && n.parse(s),
            i = n.space || "rgba";
          return p ? (u = e[i](p), e[C[i].cache] = u[C[i].cache], f = e._rgba = u._rgba, !1) : D
        }), f.length ? ("0,0,0,0" === f.join() && y.extend(f, B.transparent), e) : B[d]
      }

      function m(h, f, d) {
        return d = (d + 1) % 1, 1 > 6 * d ? h + 6 * (f - h) * d : 1 > 2 * d ? f : 2 > 3 * d ? h + 6 * (f - h) * (2 / 3 - d) : h
      }
      var B, k = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        g = /^([\-+])=\s*(\d+\.?\d*)/,
        w = [{
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function (d) {
            return [d[1], d[2], d[3], d[4]]
          }
        }, {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function (d) {
            return [2.55 * d[1], 2.55 * d[2], 2.55 * d[3], d[4]]
          }
        }, {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function (d) {
            return [parseInt(d[1], 16), parseInt(d[2], 16), parseInt(d[3], 16)]
          }
        }, {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function (d) {
            return [parseInt(d[1] + d[1], 16), parseInt(d[2] + d[2], 16), parseInt(d[3] + d[3], 16)]
          }
        }, {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space: "hsla",
          parse: function (d) {
            return [d[1], d[2] / 100, d[3] / 100, d[4]]
          }
        }],
        q = y.Color = function (e, d, f, h) {
          return new y.Color.fn.parse(e, d, f, h)
        },
        C = {
          rgba: {
            props: {
              red: {
                idx: 0,
                type: "byte"
              },
              green: {
                idx: 1,
                type: "byte"
              },
              blue: {
                idx: 2,
                type: "byte"
              }
            }
          },
          hsla: {
            props: {
              hue: {
                idx: 0,
                type: "degrees"
              },
              saturation: {
                idx: 1,
                type: "percent"
              },
              lightness: {
                idx: 2,
                type: "percent"
              }
            }
          }
        },
        z = {
          "byte": {
            floor: !0,
            max: 255
          },
          percent: {
            max: 1
          },
          degrees: {
            mod: 360,
            floor: !0
          }
        },
        A = q.support = {},
        j = y("<p>")[0],
        x = y.each;
      j.style.cssText = "background-color:rgba(1,1,1,.5)", A.rgba = j.style.backgroundColor.indexOf("rgba") > -1, x(C, function (f, d) {
        d.cache = "_" + f, d.props.alpha = {
          idx: 3,
          type: "percent",
          def: 1
        }
      }), q.fn = y.extend(q.prototype, {
        parse: function (u, s, f, e) {
          if (u === D) {
            return this._rgba = [null, null, null, null], this
          }(u.jquery || u.nodeType) && (u = y(u).css(s), s = D);
          var l = this,
            t = y.type(u),
            i = this._rgba = [];
          return s !== D && (u = [u, s, f, e], t = "array"), "string" === t ? this.parse(E(u) || B._default) : "array" === t ? (x(C.rgba.props, function (h, d) {
            i[d.idx] = v(u[d.idx], d)
          }), this) : "object" === t ? (u instanceof q ? x(C, function (h, d) {
            u[d.cache] && (l[d.cache] = u[d.cache].slice())
          }) : x(C, function (h, n) {
            var d = n.cache;
            x(n.props, function (p, o) {
              if (!l[d] && n.to) {
                if ("alpha" === p || null == u[p]) {
                  return
                }
                l[d] = n.to(l._rgba)
              }
              l[d][o.idx] = v(u[p], o, !0)
            }), l[d] && 0 > y.inArray(null, l[d].slice(0, 3)) && (l[d][3] = 1, n.from && (l._rgba = n.from(l[d])))
          }), this) : D
        },
        is: function (h) {
          var d = q(h),
            f = !0,
            l = this;
          return x(C, function (p, i) {
            var s, n = d[i.cache];
            return n && (s = l[i.cache] || i.to && i.to(l._rgba) || [], x(i.props, function (r, o) {
              return null != n[o.idx] ? f = n[o.idx] === s[o.idx] : D
            })), f
          }), f
        },
        _space: function () {
          var f = [],
            d = this;
          return x(C, function (e, h) {
            d[h.cache] && f.push(e)
          }), f.pop()
        },
        transition: function (u, f) {
          var l = q(u),
            G = l._space(),
            d = C[G],
            F = 0 === this.alpha() ? q("transparent") : this,
            p = F[d.cache] || d.to(F._rgba),
            i = p.slice();
          return l = l[d.cache], x(d.props, function (t, I) {
            var r = I.idx,
              H = p[r],
              h = l[r],
              s = z[I.type] || {};
            null !== h && (null === H ? i[r] = h : (s.mod && (h - H > s.mod / 2 ? H += s.mod : H - h > s.mod / 2 && (H -= s.mod)), i[r] = v((h - H) * f + H, I)))
          }), this[G](i)
        },
        blend: function (e) {
          if (1 === this._rgba[3]) {
            return this
          }
          var d = this._rgba.slice(),
            f = d.pop(),
            h = q(e)._rgba;
          return q(y.map(d, function (l, i) {
            return (1 - f) * h[i] + f * l
          }))
        },
        toRgbaString: function () {
          var e = "rgba(",
            d = y.map(this._rgba, function (h, f) {
              return null == h ? f > 2 ? 1 : 0 : h
            });
          return 1 === d[3] && (d.pop(), e = "rgb("), e + d.join() + ")"
        },
        toHslaString: function () {
          var e = "hsla(",
            d = y.map(this.hsla(), function (h, f) {
              return null == h && (h = f > 2 ? 1 : 0), f && 3 > f && (h = Math.round(100 * h) + "%"), h
            });
          return 1 === d[3] && (d.pop(), e = "hsl("), e + d.join() + ")"
        },
        toHexString: function (e) {
          var d = this._rgba.slice(),
            f = d.pop();
          return e && d.push(~~(255 * f)), "#" + y.map(d, function (h) {
            return h = (h || 0).toString(16), 1 === h.length ? "0" + h : h
          }).join("")
        },
        toString: function () {
          return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
      }), q.fn.parse.prototype = q.fn, C.hsla.to = function (J) {
        if (null == J[0] || null == J[1] || null == J[2]) {
          return [null, null, null, J[3]]
        }
        var N, H, O = J[0] / 255,
          F = J[1] / 255,
          L = J[2] / 255,
          p = J[3],
          f = Math.max(O, F, L),
          I = Math.min(O, F, L),
          G = f - I,
          M = f + I,
          K = 0.5 * M;
        return N = I === f ? 0 : O === f ? 60 * (F - L) / G + 360 : F === f ? 60 * (L - O) / G + 120 : 60 * (O - F) / G + 240, H = 0 === G ? 0 : 0.5 >= K ? G / M : G / (2 - M), [Math.round(N) % 360, H, K, null == p ? 1 : p]
      }, C.hsla.from = function (p) {
        if (null == p[0] || null == p[1] || null == p[2]) {
          return [null, null, null, p[3]]
        }
        var h = p[0] / 360,
          f = p[1],
          l = p[2],
          d = p[3],
          u = 0.5 >= l ? l * (1 + f) : l + f - l * f,
          n = 2 * l - u;
        return [Math.round(255 * m(n, u, h + 1 / 3)), Math.round(255 * m(n, u, h)), Math.round(255 * m(n, u, h - 1 / 3)), d]
      }, x(C, function (i, p) {
        var d = p.props,
          l = p.cache,
          f = p.to,
          e = p.from;
        q.fn[i] = function (h) {
          if (f && !this[l] && (this[l] = f(this._rgba)), h === D) {
            return this[l].slice()
          }
          var F, o = y.type(h),
            t = "array" === o || "object" === o ? h : arguments,
            u = this[l].slice();
          return x(d, function (G, n) {
            var r = t["object" === o ? G : n.idx];
            null == r && (r = u[n.idx]), u[n.idx] = v(r, n)
          }), e ? (F = q(e(u)), F[l] = u, F) : q(u)
        }, x(d, function (n, h) {
          q.fn[n] || (q.fn[n] = function (H) {
            var s, G = y.type(H),
              F = "alpha" === n ? this._hsla ? "hsla" : "rgba" : i,
              r = this[F](),
              t = r[h.idx];
            return "undefined" === G ? t : ("function" === G && (H = H.call(this, t), G = y.type(H)), null == H && h.empty ? this : ("string" === G && (s = g.exec(H), s && (H = t + parseFloat(s[2]) * ("+" === s[1] ? 1 : -1))), r[h.idx] = H, this[F](r)))
          })
        })
      }), q.hook = function (e) {
        var d = e.split(" ");
        x(d, function (h, f) {
          y.cssHooks[f] = {
            set: function (l, F) {
              var i, u, s = "";
              if ("transparent" !== F && ("string" !== y.type(F) || (i = E(F)))) {
                if (F = q(i || F), !A.rgba && 1 !== F._rgba[3]) {
                  for (u = "backgroundColor" === f ? l.parentNode : l;
                    ("" === s || "transparent" === s) && u && u.style;) {
                    try {
                      s = y.css(u, "backgroundColor"), u = u.parentNode
                    } catch (p) {}
                  }
                  F = F.blend(s && "transparent" !== s ? s : "_default")
                }
                F = F.toRgbaString()
              }
              try {
                l.style[f] = F
              } catch (p) {}
            }
          }, y.fx.step[f] = function (i) {
            i.colorInit || (i.start = q(i.elem, f), i.end = q(i.end), i.colorInit = !0), y.cssHooks[f].set(i.elem, i.start.transition(i.end, i.pos))
          }
        })
      }, q.hook(k), y.cssHooks.borderColor = {
        expand: function (f) {
          var d = {};
          return x(["Top", "Right", "Bottom", "Left"], function (e, h) {
            d["border" + h + "Color"] = f
          }), d
        }
      }, B = y.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
      }
    }(a),
    function () {
      function e(k) {
        var j, l, m = k.ownerDocument.defaultView ? k.ownerDocument.defaultView.getComputedStyle(k, null) : k.currentStyle,
          h = {};
        if (m && m.length && m[0] && m[m[0]]) {
          for (l = m.length; l--;) {
            j = m[l], "string" == typeof m[j] && (h[c.camelCase(j)] = m[j])
          }
        } else {
          for (j in m) {
            "string" == typeof m[j] && (h[j] = m[j])
          }
        }
        return h
      }

      function f(j, h) {
        var k, m, l = {};
        for (k in h) {
          m = h[k], j[k] !== m && (d[k] || (c.fx.step[k] || !isNaN(parseFloat(m))) && (l[k] = m))
        }
        return l
      }
      var g = ["add", "remove", "toggle"],
        d = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1
        };
      c.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (h, i) {
        c.fx.step[i] = function (j) {
          ("none" !== j.end && !j.setAttr || 1 === j.pos && !j.setAttr) && (a.style(j.elem, i, j.end), j.setAttr = !0)
        }
      }), c.fn.addBack || (c.fn.addBack = function (h) {
        return this.add(null == h ? this.prevObject : this.prevObject.filter(h))
      }), c.effects.animateClass = function (k, j, n, m) {
        var l = c.speed(j, n, m);
        return this.queue(function () {
          var i, q = c(this),
            p = q.attr("class") || "",
            h = l.children ? q.find("*").addBack() : q;
          h = h.map(function () {
            var o = c(this);
            return {
              el: o,
              start: e(this)
            }
          }), i = function () {
            c.each(g, function (r, o) {
              k[o] && q[o + "Class"](k[o])
            })
          }, i(), h = h.map(function () {
            return this.end = e(this.el[0]), this.diff = f(this.start, this.end), this
          }), q.attr("class", p), h = h.map(function () {
            var r = this,
              o = c.Deferred(),
              u = c.extend({}, l, {
                queue: !1,
                complete: function () {
                  o.resolve(r)
                }
              });
            return this.el.animate(this.diff, u), o.promise()
          }), c.when.apply(c, h.get()).done(function () {
            i(), c.each(arguments, function () {
              var o = this.el;
              c.each(this.diff, function (r) {
                o.css(r, "")
              })
            }), l.complete.call(q[0])
          })
        })
      }, c.fn.extend({
        addClass: function (h) {
          return function (k, l, m, j) {
            return l ? c.effects.animateClass.call(this, {
              add: k
            }, l, m, j) : h.apply(this, arguments)
          }
        }(c.fn.addClass),
        removeClass: function (h) {
          return function (k, l, m, j) {
            return arguments.length > 1 ? c.effects.animateClass.call(this, {
              remove: k
            }, l, m, j) : h.apply(this, arguments)
          }
        }(c.fn.removeClass),
        toggleClass: function (h) {
          return function (k, l, p, j, m) {
            return "boolean" == typeof l || void 0 === l ? p ? c.effects.animateClass.call(this, l ? {
              add: k
            } : {
              remove: k
            }, p, j, m) : h.apply(this, arguments) : c.effects.animateClass.call(this, {
              toggle: k
            }, l, p, j)
          }
        }(c.fn.toggleClass),
        switchClass: function (k, j, l, m, h) {
          return c.effects.animateClass.call(this, {
            add: j,
            remove: k
          }, l, m, h)
        }
      })
    }(),
    function () {
      function d(g, f, h, j) {
        return c.isPlainObject(g) && (f = g, g = g.effect), g = {
          effect: g
        }, null == f && (f = {}), c.isFunction(f) && (j = f, h = null, f = {}), ("number" == typeof f || c.fx.speeds[f]) && (j = h, h = f, f = {}), c.isFunction(h) && (j = h, h = null), f && c.extend(g, f), h = h || f.duration, g.duration = c.fx.off ? 0 : "number" == typeof h ? h : h in c.fx.speeds ? c.fx.speeds[h] : c.fx.speeds._default, g.complete = j || f.complete, g
      }

      function e(f) {
        return !f || "number" == typeof f || c.fx.speeds[f] ? !0 : "string" != typeof f || c.effects.effect[f] ? c.isFunction(f) ? !0 : "object" != typeof f || f.effect ? !1 : !0 : !0
      }
      c.extend(c.effects, {
        version: "1.11.3",
        save: function (h, f) {
          for (var g = 0; f.length > g; g++) {
            null !== f[g] && h.data(b + f[g], h[0].style[f[g]])
          }
        },
        restore: function (h, f) {
          var g, j;
          for (j = 0; f.length > j; j++) {
            null !== f[j] && (g = h.data(b + f[j]), void 0 === g && (g = ""), h.css(f[j], g))
          }
        },
        setMode: function (g, f) {
          return "toggle" === f && (f = g.is(":hidden") ? "show" : "hide"), f
        },
        getBaseline: function (j, g) {
          var f, h;
          switch (j[0]) {
            case "top":
              f = 0;
              break;
            case "middle":
              f = 0.5;
              break;
            case "bottom":
              f = 1;
              break;
            default:
              f = j[0] / g.height
          }
          switch (j[1]) {
            case "left":
              h = 0;
              break;
            case "center":
              h = 0.5;
              break;
            case "right":
              h = 1;
              break;
            default:
              h = j[1] / g.width
          }
          return {
            x: h,
            y: f
          }
        },
        createWrapper: function (h) {
          if (h.parent().is(".ui-effects-wrapper")) {
            return h.parent()
          }
          var g = {
              width: h.outerWidth(!0),
              height: h.outerHeight(!0),
              "float": h.css("float")
            },
            j = c("<div></div>").addClass("ui-effects-wrapper").css({
              fontSize: "100%",
              background: "transparent",
              border: "none",
              margin: 0,
              padding: 0
            }),
            l = {
              width: h.width(),
              height: h.height()
            },
            f = document.activeElement;
          try {
            f.id
          } catch (k) {
            f = document.body
          }
          return h.wrap(j), (h[0] === f || c.contains(h[0], f)) && c(f).focus(), j = h.parent(), "static" === h.css("position") ? (j.css({
            position: "relative"
          }), h.css({
            position: "relative"
          })) : (c.extend(g, {
            position: h.css("position"),
            zIndex: h.css("z-index")
          }), c.each(["top", "left", "bottom", "right"], function (m, i) {
            g[i] = h.css(i), isNaN(parseInt(g[i], 10)) && (g[i] = "auto")
          }), h.css({
            position: "relative",
            top: 0,
            left: 0,
            right: "auto",
            bottom: "auto"
          })), h.css(l), j.css(g).show()
        },
        removeWrapper: function (g) {
          var f = document.activeElement;
          return g.parent().is(".ui-effects-wrapper") && (g.parent().replaceWith(g), (g[0] === f || c.contains(g[0], f)) && c(f).focus()), g
        },
        setTransition: function (g, f, h, j) {
          return j = j || {}, c.each(f, function (m, l) {
            var k = g.cssUnit(l);
            k[0] > 0 && (j[l] = k[0] * h + k[1])
          }), j
        }
      }), c.fn.extend({
        effect: function () {
          function g(m) {
            function l() {
              c.isFunction(k) && k.call(p[0]), c.isFunction(m) && m()
            }
            var p = c(this),
              k = h.complete,
              o = h.mode;
            (p.is(":hidden") ? "hide" === o : "show" === o) ? (p[o](), l()) : i.call(p[0], h, l)
          }
          var h = d.apply(this, arguments),
            j = h.mode,
            f = h.queue,
            i = c.effects.effect[h.effect];
          return c.fx.off || !i ? j ? this[j](h.duration, h.complete) : this.each(function () {
            h.complete && h.complete.call(this)
          }) : f === !1 ? this.each(g) : this.queue(f || "fx", g)
        },
        show: function (f) {
          return function (g) {
            if (e(g)) {
              return f.apply(this, arguments)
            }
            var h = d.apply(this, arguments);
            return h.mode = "show", this.effect.call(this, h)
          }
        }(c.fn.show),
        hide: function (f) {
          return function (g) {
            if (e(g)) {
              return f.apply(this, arguments)
            }
            var h = d.apply(this, arguments);
            return h.mode = "hide", this.effect.call(this, h)
          }
        }(c.fn.hide),
        toggle: function (f) {
          return function (g) {
            if (e(g) || "boolean" == typeof g) {
              return f.apply(this, arguments)
            }
            var h = d.apply(this, arguments);
            return h.mode = "toggle", this.effect.call(this, h)
          }
        }(c.fn.toggle),
        cssUnit: function (g) {
          var f = this.css(g),
            h = [];
          return c.each(["em", "px", "%", "pt"], function (j, i) {
            f.indexOf(i) > 0 && (h = [parseFloat(f), i])
          }), h
        }
      })
    }(),
    function () {
      var d = {};
      c.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (g, f) {
        d[f] = function (e) {
          return Math.pow(e, g + 2)
        }
      }), c.extend(d, {
        Sine: function (f) {
          return 1 - Math.cos(f * Math.PI / 2)
        },
        Circ: function (f) {
          return 1 - Math.sqrt(1 - f * f)
        },
        Elastic: function (f) {
          return 0 === f || 1 === f ? f : -Math.pow(2, 8 * (f - 1)) * Math.sin((80 * (f - 1) - 7.5) * Math.PI / 15)
        },
        Back: function (f) {
          return f * f * (3 * f - 2)
        },
        Bounce: function (h) {
          for (var g, f = 4;
            ((g = Math.pow(2, --f)) - 1) / 11 > h;) {}
          return 1 / Math.pow(4, 3 - f) - 7.5625 * Math.pow((3 * g - 2) / 22 - h, 2)
        }
      }), c.each(d, function (f, e) {
        c.easing["easeIn" + f] = e, c.easing["easeOut" + f] = function (g) {
          return 1 - e(1 - g)
        }, c.easing["easeInOut" + f] = function (g) {
          return 0.5 > g ? e(2 * g) / 2 : 1 - e(-2 * g + 2) / 2
        }
      })
    }(), c.effects, c.effects.effect.size = function (q, E) {
      var w, B, L, A = c(this),
        x = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
        F = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
        D = ["width", "height", "overflow"],
        k = ["fontSize"],
        I = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        J = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        z = c.effects.setMode(A, q.mode || "effect"),
        H = q.restore || "effect" !== z,
        C = q.scale || "both",
        G = q.origin || ["middle", "center"],
        j = A.css("position"),
        e = H ? x : F,
        K = {
          height: 0,
          width: 0,
          outerHeight: 0,
          outerWidth: 0
        };
      "show" === z && A.show(), w = {
        height: A.height(),
        width: A.width(),
        outerHeight: A.outerHeight(),
        outerWidth: A.outerWidth()
      }, "toggle" === q.mode && "show" === z ? (A.from = q.to || K, A.to = q.from || w) : (A.from = q.from || ("show" === z ? K : w), A.to = q.to || ("hide" === z ? K : w)), L = {
        from: {
          y: A.from.height / w.height,
          x: A.from.width / w.width
        },
        to: {
          y: A.to.height / w.height,
          x: A.to.width / w.width
        }
      }, ("box" === C || "both" === C) && (L.from.y !== L.to.y && (e = e.concat(I), A.from = c.effects.setTransition(A, I, L.from.y, A.from), A.to = c.effects.setTransition(A, I, L.to.y, A.to)), L.from.x !== L.to.x && (e = e.concat(J), A.from = c.effects.setTransition(A, J, L.from.x, A.from), A.to = c.effects.setTransition(A, J, L.to.x, A.to))), ("content" === C || "both" === C) && L.from.y !== L.to.y && (e = e.concat(k).concat(D), A.from = c.effects.setTransition(A, k, L.from.y, A.from), A.to = c.effects.setTransition(A, k, L.to.y, A.to)), c.effects.save(A, e), A.show(), c.effects.createWrapper(A), A.css("overflow", "hidden").css(A.from), G && (B = c.effects.getBaseline(G, w), A.from.top = (w.outerHeight - A.outerHeight()) * B.y, A.from.left = (w.outerWidth - A.outerWidth()) * B.x, A.to.top = (w.outerHeight - A.to.outerHeight) * B.y, A.to.left = (w.outerWidth - A.to.outerWidth) * B.x), A.css(A.from), ("content" === C || "both" === C) && (I = I.concat(["marginTop", "marginBottom"]).concat(k), J = J.concat(["marginLeft", "marginRight"]), D = x.concat(I).concat(J), A.find("*[width]").each(function () {
        var d = c(this),
          f = {
            height: d.height(),
            width: d.width(),
            outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
          };
        H && c.effects.save(d, D), d.from = {
          height: f.height * L.from.y,
          width: f.width * L.from.x,
          outerHeight: f.outerHeight * L.from.y,
          outerWidth: f.outerWidth * L.from.x
        }, d.to = {
          height: f.height * L.to.y,
          width: f.width * L.to.x,
          outerHeight: f.height * L.to.y,
          outerWidth: f.width * L.to.x
        }, L.from.y !== L.to.y && (d.from = c.effects.setTransition(d, I, L.from.y, d.from), d.to = c.effects.setTransition(d, I, L.to.y, d.to)), L.from.x !== L.to.x && (d.from = c.effects.setTransition(d, J, L.from.x, d.from), d.to = c.effects.setTransition(d, J, L.to.x, d.to)), d.css(d.from), d.animate(d.to, q.duration, q.easing, function () {
          H && c.effects.restore(d, D)
        })
      })), A.animate(A.to, {
        queue: !1,
        duration: q.duration,
        easing: q.easing,
        complete: function () {
          0 === A.to.opacity && A.css("opacity", A.from.opacity), "hide" === z && A.hide(), c.effects.restore(A, e), H || ("static" === j ? A.css({
            position: "relative",
            top: A.to.top,
            left: A.to.left
          }) : c.each(["top", "left"], function (f, d) {
            A.css(d, function (h, g) {
              var l = parseInt(g, 10),
                m = f ? A.to.left : A.to.top;
              return "auto" === g ? m + "px" : l + m + "px"
            })
          })), c.effects.removeWrapper(A), E()
        }
      })
    }, c.effects.effect.scale = function (q, j) {
      var v = c(this),
        f = c.extend(!0, {}, q),
        m = c.effects.setMode(v, q.mode || "effect"),
        e = parseInt(q.percent, 10) || (0 === parseInt(q.percent, 10) ? 0 : "hide" === m ? 0 : 100),
        d = q.direction || "both",
        k = q.origin,
        g = {
          height: v.height(),
          width: v.width(),
          outerHeight: v.outerHeight(),
          outerWidth: v.outerWidth()
        },
        p = {
          y: "horizontal" !== d ? e / 100 : 1,
          x: "vertical" !== d ? e / 100 : 1
        };
      f.effect = "size", f.queue = !1, f.complete = j, "effect" !== m && (f.origin = k || ["middle", "center"], f.restore = !0), f.from = q.from || ("show" === m ? {
        height: 0,
        width: 0,
        outerHeight: 0,
        outerWidth: 0
      } : g), f.to = {
        height: g.height * p.y,
        width: g.width * p.x,
        outerHeight: g.outerHeight * p.y,
        outerWidth: g.outerWidth * p.x
      }, f.fade && ("show" === m && (f.from.opacity = 0, f.to.opacity = 1), "hide" === m && (f.from.opacity = 1, f.to.opacity = 0)), v.effect(f)
    }
});
/*!
 * FitVids 1.0
 *
 * Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 * Date: Thu Sept 01 18:00:00 2011 -0500
 *
 * Updated 09/11/2012 Will Howat (will.howat@lbi.com) : added www.youtube-nocookie.com to var selectors
 * Updated 09/11/2012 Stephen Young (stephen.young@lbi.com) :  included a '!' at the start of the fitVids IIFE to prevent minification issue
 *
 */
!(function (a) {
  a.fn.fitVids = function (b) {
    var c = {
      customSelector: null
    };
    var e = document.createElement("div"),
      d = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
    e.className = "fit-vids-style";
    e.innerHTML = "&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";
    d.parentNode.insertBefore(e, d);
    if (b) {
      a.extend(c, b)
    }
    return this.each(function () {
      var f = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.youtube-nocookie.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
      if (c.customSelector) {
        f.push(c.customSelector)
      }
      var g = a(this).find(f.join(","));
      g.each(function () {
        var l = a(this);
        if (this.tagName.toLowerCase() === "embed" && l.parent("object").length || l.parent(".fluid-width-video-wrapper").length) {
          return
        }
        var h = (this.tagName.toLowerCase() === "object" || (l.attr("height") && !isNaN(parseInt(l.attr("height"), 10)))) ? parseInt(l.attr("height"), 10) : l.height(),
          i = !isNaN(parseInt(l.attr("width"), 10)) ? parseInt(l.attr("width"), 10) : l.width(),
          j = h / i;
        if (!l.attr("id")) {
          var k = "fitvid" + Math.floor(Math.random() * 999999);
          l.attr("id", k)
        }
        l.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", (j * 100) + "%");
        l.removeAttr("height").removeAttr("width")
      })
    })
  }
})(jQuery);
(function (g) {
  g.formatCurrency = {};
  g.formatCurrency.regions = [];
  g.formatCurrency.regions[""] = {
    symbol: "$",
    positiveFormat: "%s%n",
    negativeFormat: "(%s%n)",
    decimalSymbol: ".",
    digitGroupSymbol: ",",
    groupDigits: true
  };
  g.fn.formatCurrency = function (c, b) {
    if (arguments.length == 1 && typeof c !== "string") {
      b = c;
      c = false
    }
    var a = {
      name: "formatCurrency",
      colorize: false,
      region: "",
      global: true,
      roundToDecimalPlace: 2,
      eventOnDecimalsEntered: false
    };
    a = g.extend(a, g.formatCurrency.regions[""]);
    b = g.extend(a, b);
    if (b.region.length > 0) {
      b = g.extend(b, e(b.region))
    }
    b.regex = f(b);
    return this.each(function () {
      $this = g(this);
      var t = "0";
      t = $this[$this.is("input, select, textarea") ? "val" : "html"]();
      if (t.search("\\(") >= 0) {
        t = "-" + t
      }
      if (t === "" || (t === "-" && b.roundToDecimalPlace === -1)) {
        return
      }
      if (isNaN(t)) {
        t = t.replace(b.regex, "");
        if (t === "" || (t === "-" && b.roundToDecimalPlace === -1)) {
          return
        }
        if (b.decimalSymbol != ".") {
          t = t.replace(b.decimalSymbol, ".")
        }
        if (isNaN(t)) {
          t = "0"
        }
      }
      var v = String(t).split(".");
      var d = (t == Math.abs(t));
      var w = (v.length > 1);
      var x = (w ? v[1].toString() : "0");
      var y = x;
      t = Math.abs(v[0]);
      t = isNaN(t) ? 0 : t;
      if (b.roundToDecimalPlace >= 0) {
        x = parseFloat("1." + x);
        x = x.toFixed(b.roundToDecimalPlace);
        if (x.substring(0, 1) == "2") {
          t = Number(t) + 1
        }
        x = x.substring(2)
      }
      t = String(t);
      if (b.groupDigits) {
        for (var u = 0; u < Math.floor((t.length - (1 + u)) / 3); u++) {
          t = t.substring(0, t.length - (4 * u + 3)) + b.digitGroupSymbol + t.substring(t.length - (4 * u + 3))
        }
      }
      if ((w && b.roundToDecimalPlace == -1) || b.roundToDecimalPlace > 0) {
        t += b.decimalSymbol + x
      }
      var i = d ? b.positiveFormat : b.negativeFormat;
      var z = i.replace(/%s/g, b.symbol);
      z = z.replace(/%n/g, t);
      var s = g([]);
      if (!c) {
        s = $this
      } else {
        s = g(c)
      }
      s[s.is("input, select, textarea") ? "val" : "html"](z);
      if (w && b.eventOnDecimalsEntered && y.length > b.roundToDecimalPlace) {
        s.trigger("decimalsEntered", y)
      }
      if (b.colorize) {
        s.css("color", d ? "black" : "red")
      }
    })
  };
  g.fn.toNumber = function (b) {
    var a = g.extend({
      name: "toNumber",
      region: "",
      global: true
    }, g.formatCurrency.regions[""]);
    b = $.extend(a, b);
    if (b.region.length > 0) {
      b = g.extend(b, e(b.region))
    }
    b.regex = f(b);
    return this.each(function () {
      var c = g(this).is("input, select, textarea") ? "val" : "html";
      g(this)[c](g(this)[c]().replace("(", "(-").replace(b.regex, ""))
    })
  };
  g.fn.asNumber = function (c) {
    var b = g.extend({
      name: "asNumber",
      region: "",
      parse: true,
      parseType: "Float",
      global: true
    }, g.formatCurrency.regions[""]);
    c = $.extend(b, c);
    if (c.region.length > 0) {
      c = g.extend(c, e(c.region))
    }
    c.regex = f(c);
    c.parseType = h(c.parseType);
    var a = g(this).is("input, select, textarea") ? "val" : "html";
    var d = g(this)[a]();
    d = d ? d : "";
    d = d.replace("(", "(-");
    d = d.replace(c.regex, "");
    if (!c.parse) {
      return d
    }
    if (d.length == 0) {
      d = "0"
    }
    if (c.decimalSymbol != ".") {
      d = d.replace(c.decimalSymbol, ".")
    }
    return window["parse" + c.parseType](d)
  };

  function e(a) {
    var b = g.formatCurrency.regions[a];
    if (b) {
      return b
    } else {
      if (/(\w+)-(\w+)/g.test(a)) {
        var c = a.replace(/(\w+)-(\w+)/g, "$1");
        return g.formatCurrency.regions[c]
      }
    }
    return null
  }

  function h(a) {
    switch (a.toLowerCase()) {
      case "int":
        return "Int";
      case "float":
        return "Float";
      default:
        throw "invalid parseType"
    }
  }

  function f(b) {
    if (b.symbol === "") {
      return new RegExp("[^\\d" + b.decimalSymbol + "-]", "g")
    } else {
      var a = b.symbol.replace("$", "\\$").replace(".", "\\.");
      return new RegExp(a + "|[^\\d" + b.decimalSymbol + "-]", "g")
    }
  }
})(jQuery);
! function (b, a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && "object" == typeof module.exports ? module.exports = a(require("jquery")) : a(b.jQuery)
}(this, function (D) {
  function M(b, a) {
    return typeof b === a
  }

  function Q(b, a) {
    return !!~("" + b).indexOf(a)
  }

  function E(b, a) {
    for (var c in b) {
      var d = b[c];
      if (!Q(d, "-") && void 0 !== G[d]) {
        return "pfx" == a ? d : !0
      }
    }
    return !1
  }

  function I(a, c, b) {
    for (var d in a) {
      var f = c[a[d]];
      if (void 0 !== f) {
        return b === !1 ? a[d] : M(f, "function") ? f.bind(b || c) : f
      }
    }
    return !1
  }

  function J(a, d, f) {
    var c = a.charAt(0).toUpperCase() + a.slice(1),
      b = (a + " " + A.join(c + " ") + c).split(" ");
    return M(d, "string") || M(d, "undefined") ? E(b, d) : (b = (a + " " + z.join(c + " ") + c).split(" "), I(b, d, f))
  }
  var F, N, L = {
      image: null,
      imageAttribute: "image",
      holderClass: "imageHolder",
      imgClass: "img-holder-img",
      container: D("body"),
      windowObject: D(window),
      speed: 0.2,
      coverRatio: 0.75,
      holderMinHeight: 200,
      holderMaxHeight: null,
      extraHeight: 0,
      mediaWidth: 1600,
      mediaHeight: 900,
      parallax: !0,
      touch: !1
    },
    U = "imageScroll",
    R = "plugin_" + U,
    S = function (b, a) {
      return function () {
        return b.apply(a, arguments)
      }
    },
    O = {},
    K = document.documentElement,
    P = "imageScrollModernizr",
    C = document.createElement(P),
    G = C.style,
    B = "Webkit Moz O ms",
    A = B.split(" "),
    z = B.toLowerCase().split(" "),
    T = {},
    k = 0,
    q = "",
    j = function (x, m, u, y) {
      var c, f, b, p, g = document.createElement("div"),
        w = document.body,
        v = w || document.createElement("body");
      if (parseInt(u, 10)) {
        for (; u--;) {
          b = document.createElement("div"), b.id = y ? y[u] : P + (u + 1), g.appendChild(b)
        }
      }
      return c = ["&#173;", '<style id="s', P, '">', x, "</style>"].join(""), g.id = P, (w ? g : v).innerHTML += c, v.appendChild(g), w || (v.style.background = "", v.style.overflow = "hidden", p = K.style.overflow, K.style.overflow = "hidden", K.appendChild(v)), f = m(g, x), w ? g.parentNode.removeChild(g) : (v.parentNode.removeChild(v), K.style.overflow = p), !!f
    };
  return T.csstransforms = function () {
    return !!J("transform")
  }, T.csstransforms3d = function () {
    var a = !!J("perspective");
    return a && "webkitPerspective" in K.style && j("@media (transform-3d),(-webkit-transform-3d){#imageScrollModernizr{left:9px;position:absolute;height:3px;}}", function (b) {
      a = 9 === b.offsetLeft && 3 === b.offsetHeight
    }), a
  }, O.prefixed = function (b, a, c) {
    return a ? J(b, a, c) : J(b, "pfx")
  }, window.requestAnimationFrame = O.prefixed("requestAnimationFrame", window) || function (b) {
    var a = (new Date).getTime(),
      d = Math.max(0, 16 - (a - k)),
      c = window.setTimeout(function () {
        b(a + d)
      }, d);
    return k = a + d, c
  }, T.csstransforms3d() ? q = "csstransforms3d" : T.csstransforms() && (q = "csstransforms"), "" !== q && (N = O.prefixed("transform")), F = function (a, b) {
    this.$imageHolder = D(a), this.settings = D.extend({}, L, b), this.image = this.$imageHolder.data(this.settings.imageAttribute) || this.settings.image, this.mediaWidth = this.$imageHolder.data("width") || this.settings.mediaWidth, this.mediaHeight = this.$imageHolder.data("height") || this.settings.mediaHeight, this.coverRatio = this.$imageHolder.data("cover-ratio") || this.settings.coverRatio, this.holderMinHeight = this.$imageHolder.data("min-height") || this.settings.holderMinHeight, this.holderMaxHeight = this.$imageHolder.data("max-height") || this.settings.holderMaxHeight, this.extraHeight = this.$imageHolder.data("extra-height") || this.settings.extraHeight, this.ticking = !1, this.refresh = S(this.refresh, this), this._onScroll = S(this._onScroll, this), this._defaults = L, this._name = U, this.init()
  }, D.extend(F.prototype, {
    constructor: F,
    init: function () {
      if (!this.image) {
        throw new Error("You need to provide either a data-img attr or an image option")
      }
      this.$scrollingElement = D("<img/>", {
        src: this.image
      }).addClass(this.settings.imgClass), this.settings.touch === !0 ? this.$scrollingElement.css({
        maxWidth: "100%"
      }).prependTo(this.$imageHolder) : this.settings.parallax === !0 ? (this.$scrollerHolder = D("<div/>", {
        html: this.$imageHolder.html()
      }).css({
        top: 0,
        visibility: "hidden",
        position: "fixed",
        overflow: "hidden"
      }).addClass(this.settings.holderClass).prependTo(this.settings.container), this.$imageHolder.css("visibility", "hidden").empty(), this.$scrollingElement.css({
        position: "absolute",
        top: 0,
        left: 0,
        visibility: "hidden",
        maxWidth: "none"
      }).prependTo(this.$scrollerHolder)) : (this.$scrollerHolder = this.$imageHolder.css({
        overflow: "hidden"
      }), this.$scrollingElement.css({
        position: "relative",
        overflow: "hidden"
      }).prependTo(this.$imageHolder)), this.settings.touch === !1 && (this._bindEvents(), this.refresh())
    },
    _adjustImgHolderHeights: function () {
      var H, p, v, V, f, g, b, u, m, y = this.settings.windowObject.height(),
        w = this.settings.windowObject.width() - this.settings.container.offset().left,
        x = this.coverRatio * y;
      x = null === this.holderMaxHeight || this.holderMaxHeight > x ? Math.floor(x) : this.holderMaxHeight, x = this.holderMinHeight < x ? Math.floor(x) : this.holderMinHeight, x += this.extraHeight, u = Math.floor(y - (y - x) * this.settings.speed), g = Math.round(this.mediaWidth * (u / this.mediaHeight)), g >= w ? b = u : (g = w, b = Math.round(this.mediaHeight * (g / this.mediaWidth))), m = u - x, f = y + x, V = 2 * y * (1 - this.settings.speed) - m, H = -(m / 2 + (b - u) / 2), p = Math.round((g - w) * -0.5), v = H - V / 2, this.$scrollingElement.css({
        height: b,
        width: g
      }), this.$imageHolder.height(x), this.$scrollerHolder.css({
        height: x,
        width: g
      }), this.scrollingState = {
        winHeight: y,
        fromY: v,
        imgTopPos: H,
        imgLeftPos: p,
        imgHolderHeight: x,
        imgScrollingDistance: V,
        travelDistance: f,
        holderDistanceFromTop: this.$imageHolder.offset().top - this.settings.windowObject.scrollTop()
      }
    },
    _bindEvents: function () {
      this.settings.windowObject.on("resize", this.refresh), this.settings.parallax === !0 && this.settings.windowObject.on("scroll", this._onScroll)
    },
    _unBindEvents: function () {
      this.settings.windowObject.off("resize", this.refresh), this.settings.parallax === !0 && this.settings.windowObject.off("scroll", this._onScroll)
    },
    _onScroll: function () {
      this.scrollingState.holderDistanceFromTop = this.$imageHolder.offset().top - this.settings.windowObject.scrollTop(), this._requestTick()
    },
    _requestTick: function () {
      var a = this;
      this.ticking || (this.ticking = !0, requestAnimationFrame(function () {
        a._updatePositions()
      }))
    },
    _updatePositions: function () {
      if (this.scrollingState.holderDistanceFromTop <= this.scrollingState.winHeight && this.scrollingState.holderDistanceFromTop >= -this.scrollingState.imgHolderHeight) {
        var b = this.scrollingState.holderDistanceFromTop + this.scrollingState.imgHolderHeight,
          a = b / this.scrollingState.travelDistance,
          d = Math.round(this.scrollingState.fromY + this.scrollingState.imgScrollingDistance * (1 - a)),
          c = this.settings.container.offset().left;
        this.$scrollerHolder.css(this._getCSSObject({
          transform: N,
          left: c,
          x: Math.ceil(this.scrollingState.imgLeftPos) + ("" === q && c > 0 ? c : 0),
          y: Math.round(this.scrollingState.holderDistanceFromTop),
          visibility: "visible"
        })), this.$scrollingElement.css(this._getCSSObject({
          transform: N,
          x: 0,
          y: d,
          visibility: "visible"
        }))
      } else {
        this.$scrollerHolder.css({
          visibility: "hidden"
        }), this.$scrollingElement.css({
          visibility: "hidden"
        })
      }
      this.ticking = !1
    },
    _updateFallbackPositions: function () {
      this.$scrollerHolder.css({
        width: "100%"
      }), this.$scrollingElement.css({
        top: this.scrollingState.imgTopPos,
        left: this.scrollingState.imgLeftPos
      })
    },
    _getCSSObject: function (a) {
      return "csstransforms3d" === q ? a.transform = "translate3d(" + a.x + "px, " + a.y + "px, 0)" : "csstransforms" === q ? a.transform = "translate(" + a.x + "px, " + a.y + "px)" : (a.top = a.y, a.left = a.x), delete a.x, delete a.y, a
    },
    enable: function () {
      this.settings.touch === !1 && (this._bindEvents(), this.refresh())
    },
    disable: function () {
      this.settings.touch === !1 && this._unBindEvents()
    },
    refresh: function () {
      this.settings.touch === !1 && (this._adjustImgHolderHeights(), this.settings.parallax === !0 ? this._requestTick() : this._updateFallbackPositions())
    },
    destroy: function () {
      this.settings.touch === !1 && this._unBindEvents(), this.settings.touch === !0 ? (this.$imageHolder.removeAttr("style"), this.$scrollingElement.remove()) : this.settings.parallax === !0 ? (this.$scrollerHolder.find("." + this.settings.imgClass).remove(), this.$imageHolder.css({
        visibility: "visible",
        height: "auto"
      }).html(this.$scrollerHolder.html()), this.$scrollerHolder.remove()) : (this.$imageHolder.css({
        overflow: "auto"
      }).removeAttr("style"), this.$scrollingElement.remove()), this.$imageHolder.removeData()
    }
  }), D.fn[U] = function (a) {
    return void 0 === a || "object" == typeof a ? this.each(function () {
      D.data(this, R) || D.data(this, R, new F(this, a))
    }) : "string" == typeof a && "_" !== a[0] && "init" !== a ? this.each(function () {
      var b = D.data(this, R);
      b instanceof F && "function" == typeof b[a] && b[a].apply(b, Array.prototype.slice.call(arguments, 1))
    }) : void 0
  }, D.fn[U].defaults = F.defaults = L, D.fn[U].Plugin = F, F
});
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
(function (c) {
  var d = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    k = ("onwheel" in document || document.documentMode >= 9) ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    h = Array.prototype.slice,
    j, b;
  if (c.event.fixHooks) {
    for (var e = d.length; e;) {
      c.event.fixHooks[d[--e]] = c.event.mouseHooks
    }
  }
  var f = c.event.special.mousewheel = {
    version: "3.1.11",
    setup: function () {
      if (this.addEventListener) {
        for (var m = k.length; m;) {
          this.addEventListener(k[--m], l, false)
        }
      } else {
        this.onmousewheel = l
      }
      c.data(this, "mousewheel-line-height", f.getLineHeight(this));
      c.data(this, "mousewheel-page-height", f.getPageHeight(this))
    },
    teardown: function () {
      if (this.removeEventListener) {
        for (var m = k.length; m;) {
          this.removeEventListener(k[--m], l, false)
        }
      } else {
        this.onmousewheel = null
      }
      c.removeData(this, "mousewheel-line-height");
      c.removeData(this, "mousewheel-page-height")
    },
    getLineHeight: function (i) {
      var m = c(i)["offsetParent" in c.fn ? "offsetParent" : "parent"]();
      if (!m.length) {
        m = c("body")
      }
      return parseInt(m.css("fontSize"), 10)
    },
    getPageHeight: function (i) {
      return c(i).height()
    },
    settings: {
      adjustOldDeltas: true,
      normalizeOffset: true
    }
  };
  c.fn.extend({
    mousewheel: function (i) {
      return i ? this.bind("mousewheel", i) : this.trigger("mousewheel")
    },
    unmousewheel: function (i) {
      return this.unbind("mousewheel", i)
    }
  });

  function l(i) {
    var o = i || window.event,
      u = h.call(arguments, 1),
      w = 0,
      q = 0,
      p = 0,
      t = 0,
      s = 0,
      r = 0;
    i = c.event.fix(o);
    i.type = "mousewheel";
    if ("detail" in o) {
      p = o.detail * -1
    }
    if ("wheelDelta" in o) {
      p = o.wheelDelta
    }
    if ("wheelDeltaY" in o) {
      p = o.wheelDeltaY
    }
    if ("wheelDeltaX" in o) {
      q = o.wheelDeltaX * -1
    }
    if ("axis" in o && o.axis === o.HORIZONTAL_AXIS) {
      q = p * -1;
      p = 0
    }
    w = p === 0 ? q : p;
    if ("deltaY" in o) {
      p = o.deltaY * -1;
      w = p
    }
    if ("deltaX" in o) {
      q = o.deltaX;
      if (p === 0) {
        w = q * -1
      }
    }
    if (p === 0 && q === 0) {
      return
    }
    if (o.deltaMode === 1) {
      var v = c.data(this, "mousewheel-line-height");
      w *= v;
      p *= v;
      q *= v
    } else {
      if (o.deltaMode === 2) {
        var n = c.data(this, "mousewheel-page-height");
        w *= n;
        p *= n;
        q *= n
      }
    }
    t = Math.max(Math.abs(p), Math.abs(q));
    if (!b || t < b) {
      b = t;
      if (a(o, t)) {
        b /= 40
      }
    }
    if (a(o, t)) {
      w /= 40;
      q /= 40;
      p /= 40
    }
    w = Math[w >= 1 ? "floor" : "ceil"](w / b);
    q = Math[q >= 1 ? "floor" : "ceil"](q / b);
    p = Math[p >= 1 ? "floor" : "ceil"](p / b);
    if (f.settings.normalizeOffset && this.getBoundingClientRect) {
      var m = this.getBoundingClientRect();
      s = i.clientX - m.left;
      r = i.clientY - m.top
    }
    i.deltaX = q;
    i.deltaY = p;
    i.deltaFactor = b;
    i.offsetX = s;
    i.offsetY = r;
    i.deltaMode = 0;
    u.unshift(i, w, q, p);
    if (j) {
      clearTimeout(j)
    }
    j = setTimeout(g, 200);
    return (c.event.dispatch || c.event.handle).apply(this, u)
  }

  function g() {
    b = null
  }

  function a(m, i) {
    return f.settings.adjustOldDeltas && m.type === "mousewheel" && i % 120 === 0
  }
})(jQuery);
/*!
 * pickadate.js v3.5.4, 2014/09/11
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */
(function (a) {
  if (typeof define == "function" && define.amd) {
    define("picker", ["jquery"], a)
  } else {
    if (typeof exports == "object") {
      module.exports = a(require("jquery"))
    } else {
      this.Picker = a(jQuery)
    }
  }
}(function (f) {
  var a = f(window);
  var d = f(document);
  var e = f(document.documentElement);

  function g(w, z, k, p) {
    if (!w) {
      return g
    }
    var v = false,
      u = {
        id: w.id || "P" + Math.abs(~~(Math.random() * new Date()))
      },
      s = k ? f.extend(true, {}, k.defaults, p) : p || {},
      r = f.extend({}, g.klasses(), s.klass),
      m = f(w),
      l = function () {
        return this.start()
      },
      q = l.prototype = {
        constructor: l,
        $node: m,
        start: function () {
          if (u && u.start) {
            return q
          }
          u.methods = {};
          u.start = true;
          u.open = false;
          u.type = w.type;
          w.autofocus = w == document.activeElement;
          w.readOnly = !s.editable;
          w.id = w.id || u.id;
          if (w.type != "text") {
            w.type = "text"
          }
          q.component = new k(q, s);
          q.$root = f(g._.node("div", t(), r.picker, 'id="' + w.id + '_root"'));
          o();
          if (s.formatSubmit) {
            x()
          }
          n();
          if (s.container) {
            f(s.container).append(q.$root)
          } else {
            m.after(q.$root)
          }
          q.on({
            start: q.component.onStart,
            render: q.component.onRender,
            stop: q.component.onStop,
            open: q.component.onOpen,
            close: q.component.onClose,
            set: q.component.onSet
          }).on({
            start: s.onStart,
            render: s.onRender,
            stop: s.onStop,
            open: s.onOpen,
            close: s.onClose,
            set: s.onSet
          });
          v = i(q.$root.children()[0]);
          if (w.autofocus) {
            q.open()
          }
          return q.trigger("start").trigger("render")
        },
        render: function (A) {
          if (A) {
            q.$root.html(t())
          } else {
            q.$root.find("." + r.box).html(q.component.nodes(u.open))
          }
          return q.trigger("render")
        },
        stop: function () {
          if (!u.start) {
            return q
          }
          q.close();
          if (q._hidden) {
            q._hidden.parentNode.removeChild(q._hidden)
          }
          q.$root.remove();
          m.removeClass(r.input).removeData(z);
          setTimeout(function () {
            m.off("." + u.id)
          }, 0);
          w.type = u.type;
          w.readOnly = false;
          q.trigger("stop");
          u.methods = {};
          u.start = false;
          return q
        },
        open: function (A) {
          if (u.open) {
            return q
          }
          m.addClass(r.active);
          h(w, "expanded", true);
          setTimeout(function () {
            q.$root.addClass(r.opened);
            h(q.$root[0], "hidden", false)
          }, 0);
          if (A !== false) {
            u.open = true;
            if (v) {
              e.css("overflow", "hidden").css("padding-right", "+=" + c())
            }
            m.trigger("focus");
            d.on("click." + u.id + " focusin." + u.id, function (B) {
              var C = B.target;
              if (C != w && C != document && B.which != 3) {
                q.close(C === q.$root.children()[0])
              }
            }).on("keydown." + u.id, function (C) {
              var B = C.keyCode,
                D = q.component.key[B],
                E = C.target;
              if (B == 27) {
                q.close(true)
              } else {
                if (E == w && (D || B == 13)) {
                  C.preventDefault();
                  if (D) {
                    g._.trigger(q.component.key.go, q, [g._.trigger(D)])
                  } else {
                    if (!q.$root.find("." + r.highlighted).hasClass(r.disabled)) {
                      q.set("select", q.component.item.highlight).close()
                    }
                  }
                } else {
                  if (f.contains(q.$root[0], E) && B == 13) {
                    C.preventDefault();
                    E.click()
                  }
                }
              }
            })
          }
          return q.trigger("open")
        },
        close: function (A) {
          if (A) {
            m.off("focus." + u.id).trigger("focus");
            setTimeout(function () {
              m.on("focus." + u.id, y)
            }, 0)
          }
          m.removeClass(r.active);
          h(w, "expanded", false);
          setTimeout(function () {
            q.$root.removeClass(r.opened + " " + r.focused);
            h(q.$root[0], "hidden", true)
          }, 0);
          if (!u.open) {
            return q
          }
          u.open = false;
          if (v) {
            e.css("overflow", "").css("padding-right", "-=" + c())
          }
          d.off("." + u.id);
          return q.trigger("close")
        },
        clear: function (A) {
          return q.set("clear", null, A)
        },
        set: function (C, E, B) {
          var G, F, D = f.isPlainObject(C),
            A = D ? C : {};
          B = D && f.isPlainObject(E) ? E : B || {};
          if (C) {
            if (!D) {
              A[C] = E
            }
            for (G in A) {
              F = A[G];
              if (G in q.component.item) {
                if (F === undefined) {
                  F = null
                }
                q.component.set(G, F, B)
              }
              if (G == "select" || G == "clear") {
                m.val(G == "clear" ? "" : q.get(G, s.format)).trigger("change")
              }
            }
            q.render()
          }
          return B.muted ? q : q.trigger("set", A)
        },
        get: function (A, C) {
          A = A || "value";
          if (u[A] != null) {
            return u[A]
          }
          if (A == "value") {
            return w.value
          }
          if (A in q.component.item) {
            if (typeof C == "string") {
              var B = q.component.get(A);
              return B ? g._.trigger(q.component.formats.toString, q.component, [C, B]) : ""
            }
            return q.component.get(A)
          }
        },
        on: function (C, G, B) {
          var E, F, D = f.isPlainObject(C),
            A = D ? C : {};
          if (C) {
            if (!D) {
              A[C] = G
            }
            for (E in A) {
              F = A[E];
              if (B) {
                E = "_" + E
              }
              u.methods[E] = u.methods[E] || [];
              u.methods[E].push(F)
            }
          }
          return q
        },
        off: function () {
          var A, B, C = arguments;
          for (A = 0, namesCount = C.length; A < namesCount; A += 1) {
            B = C[A];
            if (B in u.methods) {
              delete u.methods[B]
            }
          }
          return q
        },
        trigger: function (B, C) {
          var A = function (D) {
            var E = u.methods[D];
            if (E) {
              E.map(function (F) {
                g._.trigger(F, q, [C])
              })
            }
          };
          A("_" + B);
          A(B);
          return q
        }
      };

    function t() {
      return g._.node("div", g._.node("div", g._.node("div", g._.node("div", q.component.nodes(u.open), r.box), r.wrap), r.frame), r.holder)
    }

    function n() {
      m.data(z, q).addClass(r.input).val(m.data("value") ? q.get("select", s.format) : w.value).on("focus." + u.id + " click." + u.id, y);
      if (!s.editable) {
        m.on("keydown." + u.id, function (B) {
          var A = B.keyCode,
            C = /^(8|46)$/.test(A);
          if (A == 27) {
            q.close();
            return false
          }
          if (A == 32 || C || !u.open && q.component.key[A]) {
            B.preventDefault();
            B.stopPropagation();
            if (C) {
              q.clear().close()
            } else {
              q.open()
            }
          }
        })
      }
      h(w, {
        haspopup: true,
        expanded: false,
        readonly: false,
        owns: w.id + "_root" + (q._hidden ? " " + q._hidden.id : "")
      })
    }

    function o() {
      q.$root.on({
        focusin: function (A) {
          q.$root.removeClass(r.focused);
          A.stopPropagation()
        },
        "mousedown click": function (A) {
          var B = A.target;
          if (B != q.$root.children()[0]) {
            A.stopPropagation();
            if (A.type == "mousedown" && !f(B).is(":input") && B.nodeName != "OPTION") {
              A.preventDefault();
              w.focus()
            }
          }
        }
      }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
        var B = f(this),
          D = B.data(),
          A = B.hasClass(r.navDisabled) || B.hasClass(r.disabled),
          C = document.activeElement;
        C = C && (C.type || C.href) && C;
        if (A || C && !f.contains(q.$root[0], C)) {
          w.focus()
        }
        if (!A && D.nav) {
          q.set("highlight", q.component.item.highlight, {
            nav: D.nav
          })
        } else {
          if (!A && "pick" in D) {
            q.set("select", D.pick).close(true)
          } else {
            if (D.clear) {
              q.clear().close(true)
            } else {
              if (D.close) {
                q.close(true)
              }
            }
          }
        }
      });
      h(q.$root[0], "hidden", true)
    }

    function x() {
      var A;
      if (s.hiddenName === true) {
        A = w.name;
        w.name = ""
      } else {
        A = [typeof s.hiddenPrefix == "string" ? s.hiddenPrefix : "", typeof s.hiddenSuffix == "string" ? s.hiddenSuffix : "_submit"];
        A = A[0] + w.name + A[1]
      }
      q._hidden = f('<input type=hidden name="' + A + '"' + (m.data("value") || w.value ? ' value="' + q.get("select", s.formatSubmit) + '"' : "") + ">")[0];
      m.on("change." + u.id, function () {
        q._hidden.value = w.value ? q.get("select", s.formatSubmit) : ""
      }).after(q._hidden)
    }

    function y(A) {
      A.stopPropagation();
      if (A.type == "focus") {
        q.$root.addClass(r.focused)
      }
      q.open()
    }
    return new l()
  }
  g.klasses = function (k) {
    k = k || "picker";
    return {
      picker: k,
      opened: k + "--opened",
      focused: k + "--focused",
      input: k + "__input",
      active: k + "__input--active",
      holder: k + "__holder",
      frame: k + "__frame",
      wrap: k + "__wrap",
      box: k + "__box"
    }
  };

  function i(k) {
    var l, m = "position";
    if (k.currentStyle) {
      l = k.currentStyle[m]
    } else {
      if (window.getComputedStyle) {
        l = getComputedStyle(k)[m]
      }
    }
    return l == "fixed"
  }

  function c() {
    if (e.height() <= a.height()) {
      return 0
    }
    var k = f('<div style="visibility:hidden;width:100px" />').appendTo("body");
    var m = k[0].offsetWidth;
    k.css("overflow", "scroll");
    var n = f('<div style="width:100%" />').appendTo(k);
    var l = n[0].offsetWidth;
    k.remove();
    return m - l
  }
  g._ = {
    group: function (n) {
      var k, m = "",
        l = g._.trigger(n.min, n);
      for (; l <= g._.trigger(n.max, n, [l]); l += n.i) {
        k = g._.trigger(n.item, n, [l]);
        m += g._.node(n.node, k[0], k[1], k[2])
      }
      return m
    },
    node: function (n, m, k, l) {
      if (!m) {
        return ""
      }
      m = f.isArray(m) ? m.join("") : m;
      k = k ? ' class="' + k + '"' : "";
      l = l ? " " + l : "";
      return "<" + n + k + l + ">" + m + "</" + n + ">"
    },
    lead: function (k) {
      return (k < 10 ? "0" : "") + k
    },
    trigger: function (m, l, k) {
      return typeof m == "function" ? m.apply(l, k || []) : m
    },
    digits: function (k) {
      return (/\d/).test(k[1]) ? 2 : 1
    },
    isDate: function (k) {
      return {}.toString.call(k).indexOf("Date") > -1 && this.isInteger(k.getUTCDate())
    },
    isInteger: function (k) {
      return {}.toString.call(k).indexOf("Number") > -1 && k % 1 === 0
    },
    ariaAttr: b
  };
  g.extend = function (l, k) {
    f.fn[l] = function (m, o) {
      var n = this.data(l);
      if (m == "picker") {
        return n
      }
      if (n && typeof m == "string") {
        return g._.trigger(n[m], n, [o])
      }
      return this.each(function () {
        var p = f(this);
        if (!p.data(l)) {
          new g(this, l, k, m)
        }
      })
    };
    f.fn[l].defaults = k.defaults
  };

  function h(l, m, n) {
    if (f.isPlainObject(m)) {
      for (var k in m) {
        j(l, k, m[k])
      }
    } else {
      j(l, m, n)
    }
  }

  function j(k, l, m) {
    k.setAttribute((l == "role" ? "" : "aria-") + l, m)
  }

  function b(n, o) {
    if (!f.isPlainObject(n)) {
      n = {
        attribute: o
      }
    }
    o = "";
    for (var m in n) {
      var k = (m == "role" ? "" : "aria-") + m,
        l = n[m];
      o += l == null ? "" : k + '="' + n[m] + '"'
    }
    return o
  }
  return g
}));
/*!
 * Date picker for pickadate.js v3.5.4
 * http://amsul.github.io/pickadate.js/date.htm
 */
(function (a) {
  if (typeof define == "function" && define.amd) {
    define(["picker", "jquery"], a)
  } else {
    if (typeof exports == "object") {
      module.exports = a(require("./picker.js"), require("jquery"))
    } else {
      a(Picker, jQuery)
    }
  }
}(function (c, e) {
  var f = 7,
    a = 6,
    d = c._;

  function b(o, j) {
    var l = this,
      m = o.$node[0],
      n = m.value,
      h = o.$node.data("value"),
      i = h || n,
      k = h ? j.formatSubmit : j.format,
      g = function () {
        return m.currentStyle ? m.currentStyle.direction == "rtl" : getComputedStyle(o.$root[0]).direction == "rtl"
      };
    l.settings = j;
    l.$node = o.$node;
    l.queue = {
      min: "measure create",
      max: "measure create",
      now: "now create",
      select: "parse create validate",
      highlight: "parse navigate create validate",
      view: "parse create validate viewset",
      disable: "deactivate",
      enable: "activate"
    };
    l.item = {};
    l.item.clear = null;
    l.item.disable = (j.disable || []).slice(0);
    l.item.enable = -(function (p) {
      return p[0] === true ? p.shift() : -1
    })(l.item.disable);
    l.set("min", j.min).set("max", j.max).set("now");
    if (i) {
      l.set("select", i, {
        format: k
      })
    } else {
      l.set("select", null).set("highlight", l.item.now)
    }
    l.key = {
      40: 7,
      38: -7,
      39: function () {
        return g() ? -1 : 1
      },
      37: function () {
        return g() ? 1 : -1
      },
      go: function (p) {
        var r = l.item.highlight,
          q = new Date(Date.UTC(r.year, r.month, r.date + p));
        l.set("highlight", q, {
          interval: p
        });
        this.render()
      }
    };
    o.on("render", function () {
      o.$root.find("." + j.klass.selectMonth).on("change", function () {
        var p = this.value;
        if (p) {
          o.set("highlight", [o.get("view").year, p, o.get("highlight").date]);
          o.$root.find("." + j.klass.selectMonth).trigger("focus")
        }
      });
      o.$root.find("." + j.klass.selectYear).on("change", function () {
        var p = this.value;
        if (p) {
          o.set("highlight", [p, o.get("view").month, o.get("highlight").date]);
          o.$root.find("." + j.klass.selectYear).trigger("focus")
        }
      })
    }, 1).on("open", function () {
      var p = "";
      if (l.disabled(l.get("now"))) {
        p = ":not(." + j.klass.buttonToday + ")"
      }
      o.$root.find("button" + p + ", select").attr("disabled", false)
    }, 1).on("close", function () {
      o.$root.find("button, select").attr("disabled", true)
    }, 1)
  }
  b.prototype.set = function (h, i, g) {
    var j = this,
      k = j.item;
    if (i === null) {
      if (h == "clear") {
        h = "select"
      }
      k[h] = i;
      return j
    }
    k[(h == "enable" ? "disable" : h == "flip" ? "enable" : h)] = j.queue[h].split(" ").map(function (l) {
      i = j[l](h, i, g);
      return i
    }).pop();
    if (h == "select") {
      j.set("highlight", k.select, g)
    } else {
      if (h == "highlight") {
        j.set("view", k.highlight, g)
      } else {
        if (h.match(/^(flip|min|max|disable|enable)$/)) {
          if (k.select && j.disabled(k.select)) {
            j.set("select", k.select, g)
          }
          if (k.highlight && j.disabled(k.highlight)) {
            j.set("highlight", k.highlight, g)
          }
        }
      }
    }
    return j
  };
  b.prototype.get = function (g) {
    return this.item[g]
  };
  b.prototype.create = function (h, i, g) {
    var k, j = this;
    i = i === undefined ? h : i;
    if (i == -Infinity || i == Infinity) {
      k = i
    } else {
      if (e.isPlainObject(i) && d.isInteger(i.pick)) {
        i = i.obj
      } else {
        if (e.isArray(i)) {
          i = new Date(Date.UTC(i[0], i[1], i[2]));
          i = d.isDate(i) ? i : j.create().obj
        } else {
          if (d.isInteger(i)) {
            i = j.normalize(new Date(i), g)
          } else {
            if (d.isDate(i)) {
              i = j.normalize(i, g)
            } else {
              i = j.now(h, i, g)
            }
          }
        }
      }
    }
    return {
      year: k || i.getUTCFullYear(),
      month: k || i.getUTCMonth(),
      date: k || i.getUTCDate(),
      day: k || i.getUTCDay(),
      obj: k || i,
      pick: k || i.getTime()
    }
  };
  b.prototype.createRange = function (j, i) {
    var h = this,
      g = function (k) {
        if (k === true || e.isArray(k) || d.isDate(k)) {
          return h.create(k)
        }
        return k
      };
    if (!d.isInteger(j)) {
      j = g(j)
    }
    if (!d.isInteger(i)) {
      i = g(i)
    }
    if (d.isInteger(j) && e.isPlainObject(i)) {
      j = [i.year, i.month, i.date + j]
    } else {
      if (d.isInteger(i) && e.isPlainObject(j)) {
        i = [j.year, j.month, j.date + i]
      }
    }
    return {
      from: g(j),
      to: g(i)
    }
  };
  b.prototype.withinRange = function (g, h) {
    g = this.createRange(g.from, g.to);
    return h.pick >= g.from.pick && h.pick <= g.to.pick
  };
  b.prototype.overlapRanges = function (h, g) {
    var i = this;
    h = i.createRange(h.from, h.to);
    g = i.createRange(g.from, g.to);
    return i.withinRange(h, g.from) || i.withinRange(h, g.to) || i.withinRange(g, h.from) || i.withinRange(g, h.to)
  };
  b.prototype.now = function (h, i, g) {
    i = new Date();
    if (g && g.rel) {
      i.setUTCDate(i.getUTCDate() + g.rel)
    }
    return this.normalize(i, g)
  };
  b.prototype.navigate = function (l, o, p) {
    var m, g, h, k, n = e.isArray(o),
      i = e.isPlainObject(o),
      j = this.item.view;
    if (n || i) {
      if (i) {
        g = o.year;
        h = o.month;
        k = o.date
      } else {
        g = +o[0];
        h = +o[1];
        k = +o[2]
      }
      if (p && p.nav && j && j.month !== h) {
        g = j.year;
        h = j.month
      }
      m = new Date(Date.UTC(g, h + (p && p.nav ? p.nav : 0), 1));
      g = m.getUTCFullYear();
      h = m.getUTCMonth();
      while (new Date(Date.UTC(g, h, k)).getUTCMonth() !== h) {
        k -= 1
      }
      o = [g, h, k]
    }
    return o
  };
  b.prototype.normalize = function (g) {
    g.setUTCHours(0, 0, 0, 0);
    return g
  };
  b.prototype.measure = function (g, h) {
    var i = this;
    if (!h) {
      h = g == "min" ? -Infinity : Infinity
    } else {
      if (typeof h == "string") {
        h = i.parse(g, h)
      } else {
        if (d.isInteger(h)) {
          h = i.now(g, h, {
            rel: h
          })
        }
      }
    }
    return h
  };
  b.prototype.viewset = function (g, h) {
    return this.create([h.year, h.month, 1])
  };
  b.prototype.validate = function (q, p, t) {
    var n = this,
      h = p,
      g = t && t.interval ? t.interval : 1,
      i = n.item.enable === -1,
      s, m, l = n.item.min,
      r = n.item.max,
      j, o, k = i && n.item.disable.filter(function (v) {
        if (e.isArray(v)) {
          var u = n.create(v).pick;
          if (u < p.pick) {
            s = true
          } else {
            if (u > p.pick) {
              m = true
            }
          }
        }
        return d.isInteger(v)
      }).length;
    if (!t || !t.nav) {
      if ((!i && n.disabled(p)) || (i && n.disabled(p) && (k || s || m)) || (!i && (p.pick <= l.pick || p.pick >= r.pick))) {
        if (i && !k && ((!m && g > 0) || (!s && g < 0))) {
          g *= -1
        }
        while (n.disabled(p)) {
          if (Math.abs(g) > 1 && (p.month < h.month || p.month > h.month)) {
            p = h;
            g = g > 0 ? 1 : -1
          }
          if (p.pick <= l.pick) {
            j = true;
            g = 1;
            p = n.create([l.year, l.month, l.date + (p.pick === l.pick ? 0 : -1)])
          } else {
            if (p.pick >= r.pick) {
              o = true;
              g = -1;
              p = n.create([r.year, r.month, r.date + (p.pick === r.pick ? 0 : 1)])
            }
          }
          if (j && o) {
            break
          }
          p = n.create([p.year, p.month, p.date + g])
        }
      }
    }
    return p
  };
  b.prototype.disabled = function (g) {
    var i = this,
      h = i.item.disable.filter(function (j) {
        if (d.isInteger(j)) {
          return g.day === (i.settings.firstDay ? j : j - 1) % 7
        }
        if (e.isArray(j) || d.isDate(j)) {
          return g.pick === i.create(j).pick
        }
        if (e.isPlainObject(j)) {
          return i.withinRange(j, g)
        }
      });
    h = h.length && !h.filter(function (j) {
      return e.isArray(j) && j[3] == "inverted" || e.isPlainObject(j) && j.inverted
    }).length;
    return i.item.enable === -1 ? !h : h || g.pick < i.item.min.pick || g.pick > i.item.max.pick
  };
  b.prototype.parse = function (i, j, h) {
    var k = this,
      g = {};
    if (!j || typeof j != "string") {
      return j
    }
    if (!(h && h.format)) {
      h = h || {};
      h.format = k.settings.format
    }
    k.formats.toArray(h.format).map(function (m) {
      var n = k.formats[m],
        l = n ? d.trigger(n, k, [j, g]) : m.replace(/^!/, "").length;
      if (n) {
        g[m] = j.substr(0, l)
      }
      j = j.substr(l)
    });
    return [g.yyyy || g.yy, +(g.mm || g.m) - 1, g.dd || g.d]
  };
  b.prototype.formats = (function () {
    function g(i, l, j) {
      var k = i.match(/\w+/)[0];
      if (!j.mm && !j.m) {
        j.m = l.indexOf(k) + 1
      }
      return k.length
    }

    function h(i) {
      return i.match(/\w+/)[0].length
    }
    return {
      d: function (i, j) {
        return i ? d.digits(i) : j.date
      },
      dd: function (i, j) {
        return i ? 2 : d.lead(j.date)
      },
      ddd: function (i, j) {
        return i ? h(i) : this.settings.weekdaysShort[j.day]
      },
      dddd: function (i, j) {
        return i ? h(i) : this.settings.weekdaysFull[j.day]
      },
      m: function (i, j) {
        return i ? d.digits(i) : j.month + 1
      },
      mm: function (i, j) {
        return i ? 2 : d.lead(j.month + 1)
      },
      mmm: function (i, j) {
        var k = this.settings.monthsShort;
        return i ? g(i, k, j) : k[j.month]
      },
      mmmm: function (i, j) {
        var k = this.settings.monthsFull;
        return i ? g(i, k, j) : k[j.month]
      },
      yy: function (i, j) {
        return i ? 2 : ("" + j.year).slice(2)
      },
      yyyy: function (i, j) {
        return i ? 4 : j.year
      },
      toArray: function (i) {
        return i.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
      },
      toString: function (i, j) {
        var k = this;
        return k.formats.toArray(i).map(function (l) {
          return d.trigger(k.formats[l], k, [0, j]) || l.replace(/^!/, "")
        }).join("")
      }
    }
  })();
  b.prototype.isDateExact = function (h, g) {
    var i = this;
    if ((d.isInteger(h) && d.isInteger(g)) || (typeof h == "boolean" && typeof g == "boolean")) {
      return h === g
    }
    if ((d.isDate(h) || e.isArray(h)) && (d.isDate(g) || e.isArray(g))) {
      return i.create(h).pick === i.create(g).pick
    }
    if (e.isPlainObject(h) && e.isPlainObject(g)) {
      return i.isDateExact(h.from, g.from) && i.isDateExact(h.to, g.to)
    }
    return false
  };
  b.prototype.isDateOverlap = function (i, h) {
    var j = this,
      g = j.settings.firstDay ? 1 : 0;
    if (d.isInteger(i) && (d.isDate(h) || e.isArray(h))) {
      i = i % 7 + g;
      return i === j.create(h).day + 1
    }
    if (d.isInteger(h) && (d.isDate(i) || e.isArray(i))) {
      h = h % 7 + g;
      return h === j.create(i).day + 1
    }
    if (e.isPlainObject(i) && e.isPlainObject(h)) {
      return j.overlapRanges(i, h)
    }
    return false
  };
  b.prototype.flipEnable = function (h) {
    var g = this.item;
    g.enable = h || (g.enable == -1 ? 1 : -1)
  };
  b.prototype.deactivate = function (h, j) {
    var i = this,
      g = i.item.disable.slice(0);
    if (j == "flip") {
      i.flipEnable()
    } else {
      if (j === false) {
        i.flipEnable(1);
        g = []
      } else {
        if (j === true) {
          i.flipEnable(-1);
          g = []
        } else {
          j.map(function (l) {
            var m;
            for (var k = 0; k < g.length; k += 1) {
              if (i.isDateExact(l, g[k])) {
                m = true;
                break
              }
            }
            if (!m) {
              if (d.isInteger(l) || d.isDate(l) || e.isArray(l) || (e.isPlainObject(l) && l.from && l.to)) {
                g.push(l)
              }
            }
          })
        }
      }
    }
    return g
  };
  b.prototype.activate = function (h, k) {
    var j = this,
      g = j.item.disable,
      i = g.length;
    if (k == "flip") {
      j.flipEnable()
    } else {
      if (k === true) {
        j.flipEnable(1);
        g = []
      } else {
        if (k === false) {
          j.flipEnable(-1);
          g = []
        } else {
          k.map(function (o) {
            var n, p, m, l;
            for (m = 0; m < i; m += 1) {
              p = g[m];
              if (j.isDateExact(p, o)) {
                n = g[m] = null;
                l = true;
                break
              } else {
                if (j.isDateOverlap(p, o)) {
                  if (e.isPlainObject(o)) {
                    o.inverted = true;
                    n = o
                  } else {
                    if (e.isArray(o)) {
                      n = o;
                      if (!n[3]) {
                        n.push("inverted")
                      }
                    } else {
                      if (d.isDate(o)) {
                        n = [o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate(), "inverted"]
                      }
                    }
                  }
                  break
                }
              }
            }
            if (n) {
              for (m = 0; m < i; m += 1) {
                if (j.isDateExact(g[m], o)) {
                  g[m] = null;
                  break
                }
              }
            }
            if (l) {
              for (m = 0; m < i; m += 1) {
                if (j.isDateOverlap(g[m], o)) {
                  g[m] = null;
                  break
                }
              }
            }
            if (n) {
              g.push(n)
            }
          })
        }
      }
    }
    return g.filter(function (l) {
      return l != null
    })
  };
  b.prototype.nodes = function (g) {
    var m = this,
      k = m.settings,
      r = m.item,
      p = r.now,
      i = r.select,
      u = r.highlight,
      o = r.view,
      h = r.disable,
      l = r.min,
      q = r.max,
      n = (function (w, v) {
        if (k.firstDay) {
          w.push(w.shift());
          v.push(v.shift())
        }
        return d.node("thead", d.node("tr", d.group({
          min: 0,
          max: f - 1,
          i: 1,
          node: "th",
          item: function (x) {
            return [w[x], k.klass.weekdays, 'scope=col title="' + v[x] + '"']
          }
        })))
      })((k.showWeekdaysFull ? k.weekdaysFull : k.weekdaysShort).slice(0), k.weekdaysFull.slice(0)),
      j = function (v) {
        return d.node("div", " ", k.klass["nav" + (v ? "Next" : "Prev")] + ((v && o.year >= q.year && o.month >= q.month) || (!v && o.year <= l.year && o.month <= l.month) ? " " + k.klass.navDisabled : ""), "data-nav=" + (v || -1) + " " + d.ariaAttr({
          role: "button",
          controls: m.$node[0].id + "_table"
        }) + ' title="' + (v ? k.labelMonthNext : k.labelMonthPrev) + '"')
      },
      t = function () {
        var v = k.showMonthsShort ? k.monthsShort : k.monthsFull;
        if (k.selectMonths) {
          return d.node("select", d.group({
            min: 0,
            max: 11,
            i: 1,
            node: "option",
            item: function (w) {
              return [v[w], 0, "value=" + w + (o.month == w ? " selected" : "") + (((o.year == l.year && w < l.month) || (o.year == q.year && w > q.month)) ? " disabled" : "")]
            }
          }), k.klass.selectMonth, (g ? "" : "disabled") + " " + d.ariaAttr({
            controls: m.$node[0].id + "_table"
          }) + ' title="' + k.labelMonthSelect + '"')
        }
        return d.node("div", v[o.month], k.klass.month)
      },
      s = function () {
        var x = o.year,
          A = k.selectYears === true ? 5 : ~~(k.selectYears / 2);
        if (A) {
          var B = l.year,
            v = q.year,
            w = x - A,
            z = x + A;
          if (B > w) {
            z += B - w;
            w = B
          }
          if (v < z) {
            var y = w - B,
              C = z - v;
            w -= y > C ? C : y;
            z = v
          }
          return d.node("select", d.group({
            min: w,
            max: z,
            i: 1,
            node: "option",
            item: function (D) {
              return [D, 0, "value=" + D + (x == D ? " selected" : "")]
            }
          }), k.klass.selectYear, (g ? "" : "disabled") + " " + d.ariaAttr({
            controls: m.$node[0].id + "_table"
          }) + ' title="' + k.labelYearSelect + '"')
        }
        return d.node("div", x, k.klass.year)
      };
    return d.node("div", (k.selectYears ? s() + t() : t() + s()) + j() + j(1), k.klass.header) + d.node("table", n + d.node("tbody", d.group({
      min: 0,
      max: a - 1,
      i: 1,
      node: "tr",
      item: function (v) {
        var w = k.firstDay && m.create([o.year, o.month, 1]).day === 0 ? -7 : 0;
        return [d.group({
          min: f * v - o.day + w + 1,
          max: function () {
            return this.min + f - 1
          },
          i: 1,
          node: "td",
          item: function (A) {
            A = m.create([o.year, o.month, A + (k.firstDay ? 1 : 0)]);
            var z = i && i.pick == A.pick,
              y = u && u.pick == A.pick,
              x = h && m.disabled(A) || A.pick < l.pick || A.pick > q.pick;
            return [d.node("div", A.date, (function (B) {
              B.push(o.month == A.month ? k.klass.infocus : k.klass.outfocus);
              if (p.pick == A.pick) {
                B.push(k.klass.now)
              }
              if (z) {
                B.push(k.klass.selected)
              }
              if (y) {
                B.push(k.klass.highlighted)
              }
              if (x) {
                B.push(k.klass.disabled)
              }
              return B.join(" ")
            })([k.klass.day]), "data-pick=" + A.pick + " " + d.ariaAttr({
              role: "gridcell",
              selected: z && m.$node.val() === d.trigger(m.formats.toString, m, [k.format, A]) ? true : null,
              activedescendant: y ? true : null,
              disabled: x ? true : null
            })), "", d.ariaAttr({
              role: "presentation"
            })]
          }
        })]
      }
    })), k.klass.table, 'id="' + m.$node[0].id + '_table" ' + d.ariaAttr({
      role: "grid",
      controls: m.$node[0].id,
      readonly: true
    })) + d.node("div", d.node("button", k.today, k.klass.buttonToday, "type=button data-pick=" + p.pick + (g && !m.disabled(p) ? "" : " disabled") + " " + d.ariaAttr({
      controls: m.$node[0].id
    })) + d.node("button", k.clear, k.klass.buttonClear, "type=button data-clear=1" + (g ? "" : " disabled") + " " + d.ariaAttr({
      controls: m.$node[0].id
    })) + d.node("button", k.close, k.klass.buttonClose, "type=button data-close=true " + (g ? "" : " disabled") + " " + d.ariaAttr({
      controls: m.$node[0].id
    })), k.klass.footer)
  };
  b.defaults = (function (g) {
    return {
      labelMonthNext: "Next month",
      labelMonthPrev: "Previous month",
      labelMonthSelect: "Select a month",
      labelYearSelect: "Select a year",
      monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      today: "Today",
      clear: "Clear",
      close: "Close",
      format: "d mmmm, yyyy",
      klass: {
        table: g + "table",
        header: g + "header",
        navPrev: g + "nav--prev",
        navNext: g + "nav--next",
        navDisabled: g + "nav--disabled",
        month: g + "month",
        year: g + "year",
        selectMonth: g + "select--month",
        selectYear: g + "select--year",
        weekdays: g + "weekday",
        day: g + "day",
        disabled: g + "day--disabled",
        selected: g + "day--selected",
        highlighted: g + "day--highlighted",
        now: g + "day--today",
        infocus: g + "day--infocus",
        outfocus: g + "day--outfocus",
        footer: g + "footer",
        buttonClear: g + "button--clear",
        buttonToday: g + "button--today",
        buttonClose: g + "button--close"
      }
    }
  })(c.klasses().picker + "__");
  c.extend("pickadate", b)
}));
/*!
 * Legacy browser support
 */
if (![].map) {
  Array.prototype.map = function (f, c) {
    var e = this,
      b = e.length,
      a = new Array(b);
    for (var d = 0; d < b; d++) {
      if (d in e) {
        a[d] = f.call(c, e[d], d, e)
      }
    }
    return a
  }
}
if (![].filter) {
  Array.prototype.filter = function (g) {
    if (this == null) {
      throw new TypeError()
    }
    var e = Object(this),
      b = e.length >>> 0;
    if (typeof g != "function") {
      throw new TypeError()
    }
    var a = [],
      d = arguments[1];
    for (var c = 0; c < b; c++) {
      if (c in e) {
        var f = e[c];
        if (g.call(d, f, c, e)) {
          a.push(f)
        }
      }
    }
    return a
  }
}
if (![].indexOf) {
  Array.prototype.indexOf = function (c) {
    if (this == null) {
      throw new TypeError()
    }
    var d = Object(this),
      a = d.length >>> 0;
    if (a === 0) {
      return -1
    }
    var e = 0;
    if (arguments.length > 1) {
      e = Number(arguments[1]);
      if (e != e) {
        e = 0
      } else {
        if (e !== 0 && e != Infinity && e != -Infinity) {
          e = (e > 0 || -1) * Math.floor(Math.abs(e))
        }
      }
    }
    if (e >= a) {
      return -1
    }
    var b = e >= 0 ? e : Math.max(a - Math.abs(e), 0);
    for (; b < a; b++) {
      if (b in d && d[b] === c) {
        return b
      }
    }
    return -1
  };
  /*!
   * Cross-Browser Split 1.1.1
   * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
   * Available under the MIT License
   * http://blog.stevenlevithan.com/archives/cross-browser-split
   */
}
var nativeSplit = String.prototype.split,
  compliantExecNpcg = /()??/.exec("")[1] === undefined;
String.prototype.split = function (f, e) {
  var i = this;
  if (Object.prototype.toString.call(f) !== "[object RegExp]") {
    return nativeSplit.call(i, f, e)
  }
  var c = [],
    d = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.extended ? "x" : "") + (f.sticky ? "y" : ""),
    a = 0,
    b, g, h, j;
  f = new RegExp(f.source, d + "g");
  i += "";
  if (!compliantExecNpcg) {
    b = new RegExp("^" + f.source + "$(?!\\s)", d)
  }
  e = e === undefined ? -1 >>> 0 : e >>> 0;
  while (g = f.exec(i)) {
    h = g.index + g[0].length;
    if (h > a) {
      c.push(i.slice(a, g.index));
      if (!compliantExecNpcg && g.length > 1) {
        g[0].replace(b, function () {
          for (var k = 1; k < arguments.length - 2; k++) {
            if (arguments[k] === undefined) {
              g[k] = undefined
            }
          }
        })
      }
      if (g.length > 1 && g.index < i.length) {
        Array.prototype.push.apply(c, g.slice(1))
      }
      j = g[0].length;
      a = h;
      if (c.length >= e) {
        break
      }
    }
    if (f.lastIndex === g.index) {
      f.lastIndex++
    }
  }
  if (a === i.length) {
    if (j || !f.test("")) {
      c.push("")
    }
  } else {
    c.push(i.slice(a))
  }
  return c.length > e ? c.slice(0, e) : c
};
/*!
 * LBI.common
 * @version 1.3
 * @author LBi - http://www.lbi.com/en
 * @requires jQuery Core 1.4.1 - http://www.jquery.com/
 */
var LBI = window.LBI || {};
LBI.common = {
  version: 1.2,
  ajaxQueryParam: "rc=1",
  webSafeChar: '<span class="webSafeChar"> </span>',
  printLinkSelector: "a.printwin",
  printLinkText: "This link will open the Print dialog",
  getStringQueries: function (e) {
    if (typeof e !== "string") {
      return
    }
    if (e.indexOf("?") > -1) {
      e = e.split("?")[1]
    }
    var b = e,
      d, a, c = {};
    b = b.split("&");
    for (var f = b.length - 1; f >= 0; f--) {
      d = b[f].split("=")[0];
      a = b[f].split("=")[1];
      c[d] = a
    }
    return c
  },
  webSafeString: function (e) {
    var f = e.split("");
    var b = f.length;
    var a = [];
    for (var d = 0; d < b; d++) {
      a.push(f[d], LBI.common.webSafeChar)
    }
    var c = a.join("");
    return c
  },
  urlGetAnchor: function (a) {
    if (a.href.indexOf("#") >= 0) {
      a.destination = a.href.slice(a.href.indexOf("#") + 1);
      return a.destination
    } else {
      return false
    }
  },
  getPrintLinks: function () {
    $(LBI.common.printLinkSelector).each(function () {
      $(this).attr("title", $(this).attr("title") + " " + LBI.common.printLinkText)
    }).live("click", function (a) {
      window.print();
      a.preventDefault()
    })
  },
  ajax: {
    bufferFieldID: "ajaxVirtualBufferUpdate",
    prepareBuffer: function () {
      var a = document.createElement("input");
      a.setAttribute("type", "hidden");
      a.setAttribute("value", "1");
      a.setAttribute("id", LBI.common.ajax.bufferFieldID);
      a.setAttribute("name", LBI.common.ajax.bufferFieldID);
      document.body.appendChild(a)
    },
    updateBuffer: function () {
      var a = document.getElementById(LBI.common.ajax.bufferFieldID);
      if (a) {
        if (a.getAttribute("value") === "1") {
          a.setAttribute("value", "0")
        } else {
          a.setAttribute("value", "1")
        }
      } else {
        LBI.common.ajax.prepareBuffer();
        LBI.common.ajax.updateBuffer()
      }
    },
    pageUpdated: function (a, b) {
      LBI.common.ajax.updateBuffer();
      if (a) {
        if ($.isArray(a) || (a.length > 0)) {
          a[0].focus()
        } else {
          a.focus()
        }
      }
    },
    tagUrl: function (a) {
      var c = (a.indexOf("?") < 0) ? "?" : "&";
      var b = a + c + LBI.common.ajaxQueryParam;
      return b
    }
  },
  parseVersionString: function (e) {
    if (typeof (e) !== "string") {
      return false
    }
    var a = e.split(".");
    var c = parseInt(a[0], 10) || 0;
    var d = parseInt(a[1], 10) || 0;
    var b = parseInt(a[2], 10) || 0;
    return {
      major: c,
      minor: d,
      patch: b
    }
  },
  frameKill: function () {
    if (window.top !== window.self) {
      window.top.location.href = window.self.location.href
    }
  },
  escapeSpecialCharsInId: function (a) {
    return "#" + a.replace(/:/g, "\\:").replace(/\./g, "\\.")
  },
  dynamicInputText: function (a) {
    if (Modernizr.input.placeholder) {
      return false
    }
    $(a).each(function (b) {
      var c = $(this);
      if (c.attr("placeholder")) {
        c.data("_default", c.attr("placeholder")).val(c.data("_default")).addClass("dynaTextPlaceHolder").focus(function () {
          var d = $(this);
          d.val($.trim(d.val()));
          if (d.val() === d.data("_default")) {
            d.val("").removeClass("dynaTextPlaceHolder")
          }
        }).blur(function () {
          var d = $(this);
          d.val($.trim(d.val()));
          if (d.val() === "") {
            d.val(d.data("_default")).addClass("dynaTextPlaceHolder")
          }
        }).blur()
      }
    })
  },
  convert: {
    currentTimeToDurationPercentage: function (b, a) {
      if (a === 0) {
        return 0
      }
      return (b / a) * 100
    }
  }
};
/*!
 * Honda platform - Accordion
 */
(function (d) {
  var c = "accordion";
  var e = {
    firstOpen: true,
    closeExpandedItem: false,
    isCollapsible: true,
    selectors: {
      accordion: ".accordion",
      heading: ".accordionHeading",
      content: ".accordionContent",
      icon: ".accordionToggle",
      expanded: ".expanded"
    }
  };
  var a = function (f) {
    HONDA.analytics.push(f)
  };

  function b(g, f) {
    this.element = g;
    this.$element = d(g);
    this.options = d.extend(true, {}, e, f);
    this.defaults = e;
    this.init()
  }
  b.prototype.getActiveIndex = function () {
    var f = this.$element.find(this.options.selectors.heading);
    var g = this.$element.find(this.options.selectors.expanded).parents(this.options.selectors.heading);
    return f.index(g)
  };
  b.prototype.reveal = function (h) {
    var f = h.target.parents("li");
    var g = 400;
    if (this.options.animSpeed) {
      if (HONDA.is.mobile() && d.isNumeric(this.options.animSpeed.mobile)) {
        g = this.options.animSpeed.mobile
      } else {
        if (HONDA.is.tablet() && d.isNumeric(this.options.animSpeed.tablet)) {
          g = this.options.animSpeed.tablet
        } else {
          if (HONDA.is.desktop() && d.isNumeric(this.options.animSpeed.desktop)) {
            g = this.options.animSpeed.desktop
          }
        }
      }
    }
    f.find(this.options.selectors.icon).toggleClass(this.options.selectors.expanded.split(".")[1]);
    f.find(this.options.selectors.content).slideToggle(g);
    if (h.callback !== undefined) {
      h.callback(this.getActiveIndex())
    }
    return this
  };
  b.prototype.enable = function () {
    this.content.hide();
    this.headings.find(".icon").removeClass(this.options.selectors.expanded.split(".")[1])
  };
  b.prototype.disable = function () {
    this.content.show();
    this.headings.find(".icon").addClass(this.options.selectors.expanded.split(".")[1])
  };
  b.prototype.addEvents = function () {
    var f = function (g) {
      if (g.type === "click" || g.keyCode === 13) {
        g.preventDefault();
        var j = d(g.currentTarget);
        var i = j.parents(this.options.selectors.accordion).find(this.options.selectors.expanded).parent();
        var k = j.find(".expanded").length > 0;
        var h = j.data();
        if (typeof this.options.disableAtBreakpoint === "string" && this.disableForCurrentBreakpoint()) {
          return false
        }
        if (!this.options.isCollapsible && k) {
          return false
        }
        if (i.length > 0) {
          this.reveal({
            target: i
          })
        }
        if (!k || this.options.closeExpandedItem) {
          this.$element.trigger("open.accordion");
          this.reveal({
            target: j,
            callback: this.options.callback
          });
          if (h.analytics !== undefined) {
            a(HONDA.analytics.getAnalyticsFromSelector(j))
          }
        }
      }
    };
    this.headings.on("click keyup", f.bind(this));
    return this
  };
  b.prototype.disableForCurrentBreakpoint = function () {
    return HONDA.breakpoints.current >= HONDA.breakpoints[this.options.disableAtBreakpoint]
  };
  b.prototype.checkBreakpoint = function () {
    if (this.disableForCurrentBreakpoint()) {
      this.disable()
    } else {
      this.enable()
    }
  };
  b.prototype.init = function () {
    this.content = this.$element.find(this.options.selectors.content);
    this.headings = this.$element.find(this.options.selectors.heading);
    this.content.hide();
    if (this.options.firstOpen) {
      this.content.first().show()
    }
    this.addEvents();
    if (this.options.callback && typeof this.options.callback === "function") {
      this.options.callback(this.getActiveIndex())
    }
    if (typeof this.options.disableAtBreakpoint === "string") {
      d(document).on("resize.breakpoint", d.proxy(this.checkBreakpoint, this));
      this.checkBreakpoint()
    }
    return this
  };
  d.fn[c] = function (f) {
    return this.each(function () {
      if (!d.data(this, "plugin_" + c)) {
        d.data(this, "plugin_" + c, new b(this, f))
      }
    })
  }
}(jQuery));
(function (c) {
  var a = {
    selectors: {
      parentTrigger: "> ul > li .trigger",
      parentContent: ".accordionContent",
      childTrigger: ".subTrigger",
      childContent: ".subContent",
      expandAllTrigger: ".actions input.expandAll"
    },
    classes: {
      parentTriggerOpen: "active",
      childTriggerOpen: "active"
    }
  };
  var b;

  function d(e, f) {
    this.init(e, f)
  }
  d.prototype.init = function (e, f) {
    this.setup(e, f);
    this.bind();
    this.setInitialState()
  };
  d.prototype.setup = function (e, f) {
    this.$el = e;
    this.config = c.extend(true, {}, a, f);
    this.get = this.getSelectors(this.$el)
  };
  d.prototype.getSelectors = function (e) {
    var f = this.config;
    var g = {
      parentTrigger: function () {
        return e.find(f.selectors.parentTrigger)
      },
      parentContent: function (h) {
        if (h) {
          return h.siblings(f.selectors.parentContent)
        } else {
          return e.find(f.selectors.parentContent)
        }
      },
      childTrigger: function () {
        return e.find(f.selectors.childTrigger)
      },
      childContent: function (h) {
        if (h) {
          return h.siblings(f.selectors.childContent)
        } else {
          return e.find(f.selectors.childContent)
        }
      },
      expandAllTrigger: function () {
        return e.find(f.selectors.expandAllTrigger)
      }
    };
    return g
  };
  d.prototype.bind = function () {
    this.get.parentTrigger().off("click");
    this.get.childTrigger().off("click");
    this.get.parentTrigger().on("click", this.onParentTriggerClick.bind(this));
    this.get.childTrigger().on("click", this.onChildTriggerClick.bind(this));
    if (this.get.expandAllTrigger().length) {
      this.get.expandAllTrigger().off("click");
      this.get.expandAllTrigger().on("click", this.onExpandAllTriggerClick.bind(this))
    }
  };
  d.prototype.setInitialState = function () {
    this.closeAll()
  };
  d.prototype.onParentTriggerClick = function (h) {
    h.preventDefault();
    var f = c(h.currentTarget);
    var g = f.data("isOpen") === true;
    if (g) {
      this.close(f)
    } else {
      this.open(f)
    }
  };
  d.prototype.onChildTriggerClick = function (h) {
    h.preventDefault();
    var f = c(h.currentTarget);
    var g = f.data("isOpen") === true;
    if (g) {
      this.close(f, true)
    } else {
      this.open(f, true)
    }
  };
  d.prototype.onExpandAllTriggerClick = function (g) {
    var f = c(g.currentTarget);
    var h = f.data("isExpanded") !== true;
    f.data("isExpanded", h);
    if (h) {
      f.closest("label").addClass("active");
      this.expandAll()
    } else {
      f.closest("label").removeClass("active");
      this.closeAll()
    }
  };
  d.prototype.open = function (e, f) {
    f = f || false;
    var g = f ? this.get.childContent(e) : this.get.parentContent(e);
    e.data("isOpen", true);
    e.addClass(f ? this.config.classes.childTriggerOpen : this.config.classes.parentTriggerOpen);
    g.show();
    e.trigger("open")
  };
  d.prototype.close = function (e, f) {
    f = f || false;
    var g = f ? this.get.childContent(e) : this.get.parentContent(e);
    e.data("isOpen", false);
    e.removeClass(f ? this.config.classes.childTriggerOpen : this.config.classes.parentTriggerOpen);
    g.hide();
    e.trigger("close")
  };
  d.prototype.expandAll = function () {
    var e = this;
    this.get.parentTrigger().each(function (g, f) {
      e.open(c(f))
    });
    this.get.childTrigger().each(function (g, f) {
      e.open(c(f), true)
    })
  };
  d.prototype.closeAll = function () {
    var e = this;
    this.get.parentTrigger().each(function (g, f) {
      e.close(c(f))
    });
    this.get.childTrigger().each(function (g, f) {
      e.close(c(f), true)
    })
  };
  c.fn.nestedAccordion = function (e) {
    return new d(this, e)
  }
}(jQuery));
/*!
 * Honda platform - Responsive Carousel
 */
var HONDA = window.HONDA || {};
HONDA.promoAccordion = {
  selectors: {
    theModule: ".promoAccordion",
    theAccordion: ".accordion"
  },
  init: function () {
    if (document.querySelectorAll(this.selectors.theModule).length > 0) {
      $(this.selectors.theAccordion).accordion({
        callback: this.foresightReload
      })
    }
  }
};
HONDA.responsiveCarousel = (function () {
  var d = {
    SMALL: "small",
    LARGE: "large",
    GALLERY: "gallery",
    PROMO: "promo",
    PRODUCTS: "products",
    PORTAL: "portal"
  };
  var a = "webkitTransitionEnd mozTransitionEnd transitionend";
  var h = "input, select, textarea, button, a, iframe";
  var c = 300;
  var e = 700;

  function b(i) {
    i.css("height", "").height(i.maxHeight())
  }
  var g = function (i, j) {
    this.$items = i.find(".carouselWrapper > ul > li");
    this.itemCount = this.$items.length;
    this.winWidth = $(window).width();
    if (this.itemCount) {
      this.type = j;
      this.$carousel = i;
      this.$module = this.$carousel.parents(".module:first");
      this.$wrapper = this.$carousel.find(".carouselWrapper");
      this.$controls = this.$carousel.find(".controls");
      this.$prev = this.$carousel.find(".controls.prev");
      this.$next = this.$carousel.find(".controls.next");
      this.$counter = this.$carousel.find(".indicatorCounter");
      this.$steps = this.$carousel.find(".indicatorSteps");
      this.$cta = this.$carousel.find(".ctaContainer");
      this.$imgArea = this.$carousel.find(".imgArea");
      this.$copyArea = this.$carousel.find(".copyArea");
      this.$list = this.$carousel.find(".carouselWrapper > ul");
      this.$modal = this.$carousel.parents(".modalDialog");
      this.currentIndex = 0;
      this.nextIndex = 0;
      this.itemsPerSlideCount = this.getItemsPerSlideCount();
      this.totalSlidesCount = this.getTotalSlidesCount();
      this.isLoopingEnabled = true;
      this.isLazyLoadEnabled = this.type !== d.PRODUCTS;
      this.isSelectionEnabled = this.type !== d.PRODUCTS;
      this.isIE8 = $("html").hasClass("ie8");
      this.isDropFirstSlide = this.$module.hasClass("dropFirstSlide");
      this.isStepsInteractive = this.$steps.hasClass("interactive");
      this.isConfigurator = !!this.$carousel.parents(".configurator_hub_wrapper").length;
      this.hasVideo = this.$carousel.find(".video-player-wrapper").length > 0;
      this.hasImageLoaded = false;
      this.hasTransitions = $("html").hasClass("csstransitions");
      if (this.type === d.PRODUCTS || this.type === d.PORTAL) {
        this.isLoopingEnabled = false
      }
      this.setup()
    }
  };
  g.prototype = {
    setup: function () {
      this.setupIndexes("data-original-index");
      if (this.type === d.PRODUCTS) {
        this.setupProducts()
      }
      if (this.isLoopingEnabled && this.itemCount > 1 && this.itemCount < 4) {
        this.setupClones()
      }
      this.setupIndexes("data-index");
      if (this.isSelectionEnabled) {
        this.setSelectedItem()
      }
      this.createIndicators();
      this.updateLayout();
      if (this.isLoopingEnabled && this.itemCount > 1) {
        this.shiftLastToFirst();
        this.moveToSelected()
      } else {
        this.updateControls(this.currentIndex)
      }
      if (this.isLazyLoadEnabled) {
        this.lazyLoadImage(this.getSelectedItem(), true)
      }
      if (this.hasVideo) {
        this.setupVideo()
      }
      if (this.isIE8) {
        this.fixIE()
      }
      this.updateAccessibility();
      this.bindEvents();
      this.$carousel.addClass("enabled")
    },
    setupIndexes: function (i) {
      this.$list.find("> li").each(function (j) {
        $(this).attr(i, j)
      })
    },
    setupClones: function () {
      this.$list.append(this.$items.clone(true));
      this.$items = this.$wrapper.find("ul > li");
      this.$imgArea = this.$carousel.find(".imgArea");
      this.$copyArea = this.$carousel.find(".copyArea");
      this.itemsPerSlideCount = this.getItemsPerSlideCount();
      this.totalSlidesCount = this.getTotalSlidesCount()
    },
    setupProducts: function () {
      if (!this.isConfigurator) {
        b(this.$items.find("h3"));
        b(this.$items.find(".streetName"));
        b(this.$items.find(".price"))
      }
    },
    setupVideo: function () {
      HONDA.YouTubePlayer.init(this.$wrapper, {
        api: {
          controls: 0
        },
        module: {
          singleVideoInstance: true
        }
      })
    },
    setupModal: function () {
      this.updateLayout();
      this.reset()
    },
    reset: function () {
      this.currentIndex = 0;
      this.nextIndex = 0;
      this.itemsPerSlideCount = this.getItemsPerSlideCount();
      this.totalSlidesCount = this.getTotalSlidesCount();
      if (this.isSelectionEnabled) {
        this.clearSelectedItem();
        this.setSelectedItem()
      }
      this.createIndicators();
      if (!this.isLoopingEnabled) {
        this.updateControls(this.currentIndex)
      }
      if (this.type === d.PORTAL) {
        this.$list.css("left", "");
        this.$items.scrollTop(0)
      }
    },
    onVideoReady: function () {
      var i = this;
      this.$video = this.$wrapper.find(".singleVideoInstance");
      if (this.imgHeight) {
        this.$video.height(this.imgHeight)
      }
      this.$wrapper.on("video-cued", function () {
        if (i.getSelectedItem().find(".video-player-wrapper").length) {
          i.$carousel.addClass("showVideo")
        }
      });
      this.showVideo()
    },
    showVideo: function () {
      if (HONDA.YouTubePlayer.isReady) {
        var i = this.getSelectedItem().find(".video-player-wrapper");
        if (i.length) {
          this.$wrapper.data("video-player").setSource(i);
          $(this.$wrapper).find(".singleVideoInstance > .video-player-wrapper").attr("data-video-event-label", i.data("video-event-label"))
        }
      }
    },
    hideVideo: function () {
      if (HONDA.YouTubePlayer.isReady) {
        var i = this.$wrapper.data("video-player").player;
        if (i && _.isFunction(i.pauseVideo)) {
          i.pauseVideo()
        }
        this.$carousel.removeClass("showVideo")
      }
    },
    lazyLoadImage: function (p, l) {
      var q = this;
      var j = p.find("img");
      var n = j.data();
      var o = null;
      if (this.$carousel.find("img.largestImg").length !== 0) {
        o = this.$carousel.find("img.largestImg")
      } else {
        if (this.$carousel.find("img.loaded:first").length === 0) {
          j.addClass("largestImg");
          o = j
        }
      }
      if (n) {
        var i = n.src;
        if (this.isRetinaReady && _.isString(n.highResolutionSrc)) {
          i = n.highResolutionSrc
        }
        j.attr("src", i).one("load", function () {
          var r = false;
          if (j === o || j.height() > o.height()) {
            r = true;
            o.removeClass("largestImg");
            j.addClass("largestImg")
          }
          j.addClass("loaded");
          if (!q.hasImageLoaded) {
            q.hasImageLoaded = true;
            q.updateLayout()
          } else {
            if (r) {
              q.setCarouselHeight(q.nextIndex)
            }
          }
        }).each(function () {
          if (this.complete) {
            $(this).trigger("load")
          }
        });
        if (l) {
          var k = p.prev();
          var m = p.next();
          if (k.find("img:not(.loaded)").length) {
            this.lazyLoadImage(k, false)
          }
          if (m.find("img:not(.loaded)").length) {
            this.lazyLoadImage(m, false)
          }
        }
      }
    },
    getSlideWidth: function () {
      return Math.round(this.getItemWidth() * this.itemsPerSlideCount)
    },
    getItemWidth: function () {
      var i = this.$items.eq(0).is(":visible") ? this.$items.eq(0) : this.$items.eq(1);
      return i.outerWidth()
    },
    getItemsPerSlideCount: function () {
      var i = 1;
      if (this.$wrapper.is(":visible")) {
        i = Math.round(this.$wrapper.outerWidth() / this.getItemWidth())
      }
      return i
    },
    getTotalSlidesCount: function () {
      return Math.ceil(this.$items.length / this.itemsPerSlideCount)
    },
    getItemAtIndex: function (j) {
      return this.$items.filter("[data-index=" + j + "]")
    },
    getSelectedItem: function () {
      return this.getItemAtIndex(this.currentIndex)
    },
    setSelectedItem: function () {
      this.getSelectedItem().addClass("selected")
    },
    clearSelectedItem: function () {
      this.getSelectedItem().removeClass("selected")
    },
    dropFirstSlide: function () {
      this.getItemAtIndex(0).hide();
      this.$list.css("left", parseInt(this.$list.css("left"), 10) + this.getSlideWidth())
    },
    createIndicators: function () {
      var j = this.isLoopingEnabled ? this.itemCount : this.totalSlidesCount;
      var i;
      if (j > 1) {
        this.$steps.empty();
        for (i = 0; i < j; i++) {
          this.$steps.append('<span data-index="' + i + '" />')
        }
        this.$counter.find(".total").html(j);
        this.updateIndicators(this.currentIndex);
        this.$counter.css("display", "");
        this.$steps.css("display", "")
      } else {
        this.$counter.hide();
        this.$steps.hide()
      }
    },
    updateIndicators: function (j) {
      var k = this.getItemAtIndex(j).data("original-index");
      this.$counter.find(".current").html(k + 1);
      this.$steps.find("span").removeClass("selected").eq(k).addClass("selected")
    },
    updateControls: function (j) {
      var k = this.isLoopingEnabled ? this.itemCount : this.totalSlidesCount;
      if (k > 1) {
        this.$controls.removeClass("inActive");
        if (j <= 0) {
          this.$prev.addClass("inActive")
        } else {
          if (j >= this.totalSlidesCount - 1) {
            this.$next.addClass("inActive")
          }
        }
        this.$controls.css("display", "")
      } else {
        this.$controls.hide()
      }
    },
    shiftFirstToLast: function () {
      var i = this.$list.find("li:first");
      if (this.isDropFirstSlide && i.data("index") === 0) {
        i = this.$list.find("> li").eq(1)
      }
      this.$list.find("> li:last").after(i)
    },
    shiftLastToFirst: function () {
      this.$list.find("> li:first").before(this.$list.find("> li:last"))
    },
    moveToSelected: function () {
      this.$list.css("left", -Math.round(this.getSlideWidth() * this.getSelectedItem().prevAll(":visible").length)).redrawDOM()
    },
    updateLayout: function () {
      this.resetLayout();
      this.$list.offset();
      this.$items.width(this.getItemWidth());
      this.$list.width(Math.round(this.getSlideWidth() * this.totalSlidesCount));
      if (this.type === d.PRODUCTS) {
        this.positionRemainingToSlideCenter()
      } else {
        this.imgHeight = this.$carousel.find("img.largestImg").height();
        if (!this.imgHeight) {
          return
        }
        if (this.type !== d.PORTAL) {
          if (HONDA.is.mobile()) {
            this.positionControlsToImageBottom()
          } else {
            switch (this.type) {
              case d.LARGE:
                this.positionControlsToImageCenter();
                this.positionCounterToImageBottom();
                this.positionStepsToImageBottom();
                break;
              case d.GALLERY:
                this.positionCounterToImageBottom();
                break;
              case d.PROMO:
                this.positionControlsToImageBottom();
                this.positionControlsToCopyAreaSides();
                this.positionCounterToImageBottom();
                this.positionPromoCopyArea();
                this.positionPromoCounter();
                break
            }
          }
        }
        this.setCarouselHeight(this.currentIndex)
      }
    },
    setCarouselHeight: function (k) {
      this.imgHeight = this.$carousel.find("img.largestImg").height();
      this.$imgArea.height(this.imgHeight);
      if (this.hasVideo && !_.isUndefined(this.$video)) {
        this.$video.height(this.imgHeight)
      }
      if (this.type !== d.PORTAL) {
        var i = this.$items.maxHeight();
        var j = Math.round(this.getItemAtIndex(k).outerHeight());
        if (this.type === d.SMALL || (this.type === d.LARGE && HONDA.is.mobile()) || (this.type === d.PROMO && !HONDA.is.mobile())) {
          i += this.$steps.outerHeight(true)
        }
        if (this.$cta.length) {
          i += this.$cta.outerHeight(true)
        }
        this.$carousel.height(i);
        this.$list.height(j)
      }
      this.$carousel.trigger("layout_updated")
    },
    resetLayout: function () {
      this.$list.css({
        width: "",
        height: ""
      });
      $([this.$carousel, this.$counter, this.$controls, this.$items, this.$imgArea, this.$copyArea]).each(function () {
        this.css({
          top: "",
          bottom: "",
          left: "",
          width: "",
          height: "",
          "margin-left": "",
          "margin-right": ""
        })
      })
    },
    positionControlsToImageBottom: function () {
      this.$controls.css("top", this.imgHeight)
    },
    positionCounterToImageBottom: function () {
      this.$counter.css("top", this.imgHeight)
    },
    positionControlsToImageCenter: function () {
      this.$controls.css("top", Math.round(this.imgHeight / 2))
    },
    positionStepsToImageBottom: function () {
      this.$steps.css("top", this.imgHeight)
    },
    positionControlsToCopyAreaSides: function () {
      var j = this.$copyArea.first();
      var i = Math.round(j.outerWidth());
      var k = Math.round(j.position().left);
      this.$copyArea.css("width", i);
      this.$prev.css("left", k);
      this.$next.css("left", k + i)
    },
    positionPromoCopyArea: function () {
      var i = this;
      this.$items.each(function () {
        var k = $(this);
        var l = k.find(".copyArea");
        var j = l.outerHeight();
        if (j > i.imgHeight) {
          l.css("bottom", -Math.round(j - i.imgHeight));
          k.css("height", l.outerHeight())
        }
      })
    },
    positionPromoCounter: function () {
      var i = this.$copyArea.first();
      this.$counter.css("left", Math.round(i.position().left + i.outerWidth()))
    },
    positionRemainingToSlideCenter: function () {
      var j = this.itemsPerSlideCount - ((this.itemsPerSlideCount * this.totalSlidesCount) - this.itemCount);
      if (j < this.itemsPerSlideCount) {
        var i = this.$items.slice(-Math.abs(j));
        var k = Math.floor((this.getSlideWidth() - (this.getItemWidth() * j)) / 2);
        i.first().css("margin-left", k);
        i.last().css("margin-right", k)
      }
    },
    fixIE: function () {
      this.$copyArea.find(".richTextType a").iePseudoFix()
    },
    updateAccessibility: function () {
      var j = this.currentIndex * this.itemsPerSlideCount;
      var i = j + this.itemsPerSlideCount;
      this.$items.find(h).attr("tabindex", -1);
      this.$items.slice(j, i).find(h).attr("tabindex", 0)
    },
    bindEvents: function () {
      this.$controls.on("click", _.bind(this.onChange, this));
      $(window).resize(_.debounce(_.bind(this.onResize, this), c));
      if (this.hasVideo) {
        this.$wrapper.on("video-ready", _.bind(this.onVideoReady, this))
      }
      if (this.isStepsInteractive) {
        this.$steps.on("click", "span", _.bind(this.onChange, this))
      }
      if (this.type === d.PORTAL) {
        this.$modal.on(HONDA.Modal.events.open, _.bind(this.setupModal, this));
        this.$modal.on(HONDA.Modal.events.close, _.bind(this.reset, this))
      }
    },
    onChange: function (q) {
      var m = this;
      var j = $(q.currentTarget);
      var p = j.hasClass("next");
      var l = {};
      var n = 0;
      var o;
      var k;
      if (j.hasClass("controls")) {
        n = p ? this.currentIndex + 1 : this.currentIndex - 1
      } else {
        n = j.data("index")
      }
      q.preventDefault();
      if (this.$carousel.hasClass("animating") || j.hasClass("inActive") || n === this.currentIndex || !_.isNumber(n)) {
        return false
      }
      if (this.isLoopingEnabled) {
        if (n > this.$items.length - 1) {
          n = this.isDropFirstSlide ? 1 : 0
        }
        if (n < 0) {
          n = this.$items.length - 1
        }
        o = this.getSelectedItem();
        k = this.$items.filter("[data-index=" + n + "]");
        if (p) {
          if (o.nextAll().length <= 1) {
            this.shiftFirstToLast();
            this.moveToSelected()
          }
        } else {
          if (o.prevAll().length <= 1) {
            this.shiftLastToFirst();
            this.moveToSelected()
          }
        }
        this.$list.offset();
        l.left = -Math.round(k.position().left);
        l.height = Math.round(k.outerHeight());
        if (this.isLazyLoadEnabled) {
          this.lazyLoadImage(k, true)
        }
      } else {
        k = this.$items.filter("[data-index=" + n + "]");
        if (this.isLazyLoadEnabled) {
          this.lazyLoadImage(k, true)
        }
        l.left = -Math.round(this.getSlideWidth() * n);
        if (this.type === d.PORTAL) {
          l.height = Math.round(k.outerHeight());
          k.scrollTop(0)
        }
        this.updateControls(n)
      }
      if (this.hasVideo) {
        this.hideVideo()
      }
      if (this.isSelectionEnabled) {
        this.clearSelectedItem()
      }
      this.nextIndex = n;
      this.updateIndicators(n);
      this.$carousel.addClass("animating");
      this.$carousel.data("next-index", n);
      if (this.$list.is(":hidden")) {
        m.onComplete(n)
      } else {
        if (this.hasTransitions) {
          this.$list.css(l).on(a, function (i) {
            if (HONDA.getEventPropertyName(i) === "left" && i.target === m.$list[0]) {
              m.$list.off(a);
              m.onComplete(n)
            }
          })
        } else {
          this.$list.animate(l, e, function () {
            m.onComplete(n)
          })
        }
      }
    },
    jumpToIndex: function (i) {
      this.currentIndex = i < this.totalSlidesCount ? i : 0;
      this.moveToSelected();
      this.updateControls(this.currentIndex);
      this.updateIndicators(this.currentIndex)
    },
    onComplete: function (j) {
      if (this.isDropFirstSlide && j === 1 && this.getItemAtIndex(0).is(":visible")) {
        this.dropFirstSlide()
      }
      this.currentIndex = j;
      if (this.isSelectionEnabled) {
        this.setSelectedItem()
      }
      if (this.hasVideo) {
        this.showVideo()
      }
      if (this.isIE8) {
        this.fixIE()
      }
      this.updateAccessibility();
      this.$carousel.removeClass("animating");
      this.$carousel.trigger("moved")
    },
    onResize: function () {
      if (this.winWidth !== $(window).width() && this.$carousel.is(":visible")) {
        this.winWidth = $(window).width();
        this.resetLayout();
        if (this.type === d.PRODUCTS) {
          this.reset();
          this.setupProducts()
        }
        this.updateLayout();
        this.moveToSelected()
      }
    }
  };
  var f = function (i) {
    i = i || $(".carousel");
    i.each(function () {
      var j = $(this);
      if (_.isUndefined(j.data("carousel"))) {
        var k = null;
        if (j.parents(".hubPage").length) {
          k = d.PORTAL
        } else {
          if (j.parents(".module:first").hasClass("similarProductsCarousel")) {
            k = d.PRODUCTS
          } else {
            if (j.hasClass("carouselSmallLeft") || j.hasClass("carouselSmallRight")) {
              k = d.SMALL
            } else {
              if (j.hasClass("carouselLarge")) {
                k = d.LARGE
              } else {
                if (j.hasClass("carouselGallery")) {
                  k = d.GALLERY
                } else {
                  if (j.hasClass("carouselPromo")) {
                    k = d.PROMO
                  }
                }
              }
            }
          }
        }
        if (k) {
          j.data("carousel", new g(j, k))
        }
      }
    })
  };
  return {
    init: f
  }
}());
/*!
 * Honda platform - Campaign with Video
 */
var HONDA = window.HONDA || {};
HONDA.CampaignWithVideo = {
  $cmHeroVideo: $(".cmHeroWithVideo"),
  $playHeroVideo: $(".playHeroVideo"),
  $closeIco: $(".closeIco a"),
  setAnalytics: function (a) {
    var b = HONDA.analytics.getAnalyticsFromSelector(a);
    if (b !== undefined && b !== null) {
      HONDA.analytics.push(b)
    }
  },
  bind: function () {
    var a = this;
    this.$playHeroVideo.on("click", _.bind(this.playVideo, this));
    this.$closeIco.on("click", function (b) {
      a.setAnalytics($(b.currentTarget))
    })
  },
  playVideo: function (d) {
    d.preventDefault();
    var a = $(d.target).closest(".cmHeroWithVideo"),
      f = a.find(".heroOutline"),
      c = a.find(".closeIco"),
      b = this;
    a.addClass("videoActive");
    c.off("click");
    c.on("click", function (e) {
      e.preventDefault();
      a.removeClass("videoActive");
      b.restartCampaignVideo(f)
    })
  },
  restartCampaignVideo: function (b) {
    var a = b.find(".video-player-wrapper"),
      c = a.data("video-player");
    if (c && !c.isPlayerState("CUED")) {
      c.restartVideo()
    }
  },
  init: function () {
    this.bind();
    HONDA.YouTubePlayer.init(this.$cmHeroVideo, {
      module: {
        resizeVideoProportionally: true
      }
    })
  }
};
/*!
 * Honda platform - Configurator session cookie delete
 */
var HONDA = window.HONDA || {};
HONDA.sessionCookieDelete = (function () {
  var b = function () {
    var d = document.cookie,
      c = d.split(";");
    _.each(c, function (g) {
      var h = g.split("="),
        f = h[0],
        j = f.indexOf("_session"),
        i = f.indexOf("configurator_");
      if (j !== -1 && i !== -1) {
        var e = $.trim(f);
        $.removeCookie(e, {
          path: "/"
        })
      }
    });
    $.removeCookie("HONDA_configurator_shortUrl", {
      path: "/"
    })
  };
  var a = function () {
    b()
  };
  return {
    init: a
  }
}());
/*!
 * Honda platform - Cookie User State
 */
HONDA.cookieUserState = (function (c) {
  var i = c("#setUserState"),
    f = c(".getUserState"),
    h = f.length,
    a = {};

  function e(l) {
    return l.replace(/([a-z][A-Z])/g, function (m) {
      return m[0] + "-" + m[1].toLowerCase()
    })
  }

  function j(m, l) {
    c.each(a, function (p, q) {
      var o = "data-" + e(p),
        n = c(l).find("*[" + o + "]").andSelf().filter("*[" + o + "]");
      if (n.length) {
        c(n).data(p, q);
        c(n).attr(o, q)
      }
    });
    if (m === h - 1) {
      c(HONDA.cookieUserState).trigger("userStateUpdated")
    }
  }

  function g() {
    if (i) {
      var m = HONDA.getDomain.primaryDomain();
      var l = i.data();
      l.userStateDealerId += "";
      c.cookie("user_state", JSON.stringify(l), {
        path: "/",
        domain: m
      })
    }
  }

  function d() {
    c.each(f, function (l, m) {
      j(l, m)
    })
  }

  function b() {
    a = JSON.parse(c.cookie("user_state"));
    d()
  }

  function k() {
    if (i.length !== 0) {
      g()
    }
    if (h > 0 && c.cookie("user_state")) {
      b()
    }
  }
  return {
    init: k
  }
}(jQuery));
/*!
 * Honda platform - Equalise heights in row
 */
(function (f, b, d, a) {
  var e = "equaliseHeightsInRow";
  var g = {
    target: "li",
    handlerEqualiseColumns: function () {}
  };

  function c(i, h) {
    this.el = i;
    this.$el = f(i);
    this.options = f.extend({}, g, h);
    this.defaults = g;
    this.columnCount = 0;
    f(a).on("resize.viewport filtered.hmc", b.bind(this.handlerViewportResize, this));
    this.$el.on("equaliseColumns", b.bind(this.options.handlerEqualiseColumns, this));
    this.columnConform()
  }
  c.prototype.handlerViewportResize = function () {
    var h = function () {
      this.columnConform()
    };
    d.setTimeout(b.bind(h, this), 100)
  };
  c.prototype.columnConform = function () {
    var i = 0;
    var j = 0;
    var l = [];
    var k = this.$el.find(this.options.target);
    var h = function (p) {
      var o = f(p);
      var n = o.position().top;
      var m = 0;
      if (j !== n) {
        for (; m < l.length; m++) {
          if (l.length === 1) {
            l[m].css("height", "")
          } else {
            this.setConformingHeight(l[m], i)
          }
        }
        l.length = 0;
        j = n;
        i = this.getOriginalHeight(o);
        l.push(o)
      } else {
        l.push(o);
        i = (i < this.getOriginalHeight(o)) ? (this.getOriginalHeight(o)) : (i)
      }
      for (m = 0; m < l.length; m++) {
        if (l.length === 1) {
          l[m].css("height", "")
        } else {
          this.setConformingHeight(l[m], i)
        }
      }
    };
    b.each(k, h, this)
  };
  c.prototype.setConformingHeight = function (j, i) {
    var h = j.data("originalHeight");
    if (h === undefined || h === "") {
      h = j.height()
    }
    j.data("originalHeight", h);
    j.height(i)
  };
  c.prototype.getOriginalHeight = function (i) {
    var h = i.data("originalHeight");
    if (h === undefined || h === "") {
      h = i.height()
    }
    return h
  };
  f.fn[e] = function (h) {
    return this.each(function () {
      if (!f.data(this, "plugin_" + e)) {
        f.data(this, "plugin_" + e, new c(this, h))
      }
    })
  }
}(jQuery, _, window, document));
/*!
 * Honda platform - Form Builder
 */
var HONDA = window.HONDA || {};
HONDA.formBuilder = {};
HONDA.formBuilder.formSelector = "form.formBuilder";
HONDA.formBuilder.cookieName = "HONDA_campaign_id";
HONDA.formBuilder.SelectableLabels = (function () {
  var c = "formFieldControlGroup";
  var d = "selected";
  var b;
  var a = function (f) {
    window.clearTimeout(b);
    b = window.setTimeout(function () {
      var g = 0;
      f.css("min-height", 0).each(function () {
        var i = $(this).height();
        if (i > g) {
          g = i
        }
      }).css("min-height", g)
    }, 200)
  };
  var e = function () {
    $(HONDA.formBuilder.formSelector).find("." + c).each(function () {
      var g = $(this);
      var f = g.find("label");
      f.filter(function () {
        return $("input", this).is(":checked")
      }).addClass(d);
      f.find("input").on("change", function () {
        var i = $(this);
        var h = i.parents("label");
        if (i.is(":checked")) {
          if (this.type === "radio") {
            g.find("label").removeClass(d)
          }
          h.addClass(d)
        } else {
          h.removeClass(d)
        }
      });
      if (g.hasClass("inline")) {
        a(f);
        $(window).on("resize.formBuilderEqualiseHeights", function () {
          a(f)
        })
      }
    })
  };
  return {
    init: e
  }
}(jQuery));
HONDA.formBuilder.ShowMore = (function () {
  var b = "showMore";
  var g = "longDesc";
  var d = "showMoreActions";
  var c = "more";
  var e = "less";
  var f = "showMoreHandler";
  var i = 130;
  var h = 700;
  var a = function (k) {
    this.$wrapper = k;
    this.$content = k.find("." + g);
    this.$actions = k.find("." + d);
    this.$btnMore = k.find("." + c);
    this.$btnLess = k.find("." + e);
    this.setup()
  };
  a.prototype.expand = function (l) {
    l.preventDefault(l);
    this.$content.css({
      height: "auto",
      overflow: "visible",
      visibility: "hidden"
    });
    var k = this.$content.outerHeight();
    this.$content.css({
      height: i,
      overflow: "hidden",
      visibility: "visible"
    });
    this.$btnMore.hide();
    this.$btnLess.show();
    this.$content.stop().animate({
      height: k
    }, h)
  };
  a.prototype.collapse = function (k) {
    k.preventDefault(k);
    this.$btnMore.show();
    this.$btnLess.hide();
    this.$content.stop().animate({
      height: i
    }, h);
    var l = this.$wrapper.parents(".formField").offset().top;
    if (l < $(window).scrollTop()) {
      $("html, body").stop().animate({
        scrollTop: l
      })
    }
  };
  a.prototype.setup = function () {
    var k = this;
    if (k.contentHeight() <= i) {
      return
    }
    this.$btnMore.on("click", function (l) {
      k.expand(l)
    });
    this.$btnLess.on("click", function (l) {
      k.collapse(l)
    });
    this.$content.height(i);
    this.$btnLess.hide();
    this.$actions.show()
  };
  a.prototype.contentHeight = function () {
    return this.$content.outerHeight() - parseInt(this.$content.find("p").css("paddingBottom"), 10)
  };
  var j = function () {
    $(HONDA.formBuilder.formSelector).find("." + b).each(function () {
      if ($(this).is(":visible") && !$(this).data(f)) {
        $(this).data(f, new a($(this)))
      }
    })
  };
  return {
    init: j
  }
}(jQuery));
HONDA.formBuilder.FieldHelp = (function () {
  var a = "help";
  var c = "icon";
  var g = "message";
  var b = "visuallyhidden";
  var i = "visible";
  var e = "keep-opened";
  var j = function (l) {
    return l.find("." + c)
  };
  var h = function (l) {
    return l.find("." + g)
  };
  var d = function (l) {
    return j(l).hasClass(i)
  };
  var f = function (n, l) {
    n = n.hasClass(a) ? n : n.find("." + a);
    if (n.length) {
      var m = h(n);
      if (!d(n)) {
        n.data(e, l);
        if (l) {
          m.removeClass(b)
        } else {
          m.addClass(b)
        }
      }
    }
  };
  var k = function () {
    $(HONDA.formBuilder.formSelector).find("." + a).each(function () {
      var n = $(this);
      var l = j(n);
      var m = h(n);
      l.data(e, false).on("click", function (o) {
        o.preventDefault();
        f(n, !n.data(e))
      });
      if (!d(n)) {
        l.hover(function () {
          if (!n.data(e)) {
            m.removeClass(b)
          }
        }, function () {
          if (!n.data(e)) {
            m.addClass(b)
          }
        })
      }
    })
  };
  return {
    init: k,
    toggle: f
  }
}(jQuery));
HONDA.formBuilder.PlaceHolderText = (function () {
  var a = "placeholder";
  var b = function (g) {
    var i = $(g.delegateTarget);
    var f = i.val().toString();
    var h = i.attr("placeholder").toString();
    if (f === "" || f === h) {
      i.addClass(a);
      i.val(h)
    }
  };
  var d = function (g) {
    var i = $(g.delegateTarget);
    var f = i.val().toString();
    var h = i.attr("placeholder").toString();
    if (f === h) {
      i.val("");
      i.removeClass(a)
    }
  };
  var c = function () {
    if (!Modernizr.input.placeholder) {
      $(HONDA.formBuilder.formSelector).find("[placeholder]").each(function () {
        $(this).on("focus", d).on("blur", b).blur()
      })
    }
  };
  return {
    init: c
  }
}(jQuery));
HONDA.formBuilder.FormValidation = (function () {
  var b = "error";
  var d = "errorMessage";
  var g = "required";
  var n = "disabled";
  var f = "formField";
  var k = "accordionForm";
  var i = "formFieldLinkedTarget";
  var a = "noValidation";
  var h = "validationHandler";
  var e = '<div class="errorMessage"><div class="message"><p>{msg}</p></div></div>';
  var l = /[A-Za-z0-9!#$%&'*+-\/=?\^_`{|}~]+@[A-Za-z0-9\-]+(.[A-Za-z0-9\-]+)*/;
  var j = 700;
  var c = function (p, r) {
    var o = this;
    this.$form = p;
    this.$requiredFields = p.find("." + g);
    this.$regExFields = p.find("[data-regex]");
    this.$submitButtons = p.find(".submitContainer .primarySubmitButton");
    this.$formError = p.find(".errorMessage.formError:not(.ajaxError)");
    this.$ajaxError = p.find(".errorMessage.ajaxError");
    this.$recaptcha = p.find(".formFieldRecaptcha");
    this.options = $.extend({}, this.defaults, r);
    this.hasRecaptcha = false;
    this.recaptchaWidget = null;
    if (this.$recaptcha.length) {
      var s = 10000;
      var t = 0;
      var q = 100;
      this.waitForRecaptcha = window.setInterval(function () {
        t += q;
        if (typeof window.grecaptcha !== "undefined") {
          o.hasRecaptcha = true;
          o.setupRecaptcha()
        }
        if (o.hasRecaptcha || t >= s) {
          o.setupForm();
          window.clearInterval(o.waitForRecaptcha)
        }
      }, q)
    } else {
      this.setupForm()
    }
  };
  c.prototype.defaults = {
    disableSubmit: false,
    delaySubmit: false,
    enableBlurValidation: false,
    submitCallback: null,
    resetForm: false,
    accordion: {
      firstOpen: false,
      closeExpandedItem: true
    }
  };
  c.prototype.resetForm = function () {
    this.$form[0].reset();
    this.$form.find("input:not(selected)").parents("label").removeClass("selected")
  };
  c.prototype.validateField = function (s, v) {
    var z = (typeof s.tagName === "undefined") ? $(s.target) : $(s);
    var u = z.parents("." + f);
    var x = u.parents("." + i);
    var y = z.attr("type");
    var p = z.attr("name");
    var q = u.data("regex");
    var o = typeof q === "string" && HONDA.customRegEx && typeof HONDA.customRegEx[q] === "object";
    var A = true;
    if (!x.length || (x.length && x.is(":visible"))) {
      if (y === "radio") {
        A = u.find("input[name=" + p + "]").filter(":checked").length
      } else {
        var r = u.find("." + g);
        var t = r;
        if (!v) {
          t = t.filter(function () {
            return $(this).data("is-touched")
          })
        }
        if (t.length === r.length) {
          if (y === "checkbox") {
            A = r.filter(":checked").length === r.length
          } else {
            var w = 0;
            r.each(function () {
              var B = $.trim(this.value);
              if ($(this).parents(".fleetSize").length && !o) {
                if (B !== undefined && B !== "") {
                  w++
                }
              } else {
                if (o && $.type(HONDA.customRegEx[q]) === "regexp" && this.tagName.toLowerCase() === "input" && this.type === "text") {
                  if (HONDA.customRegEx[q].test(B)) {
                    w++
                  }
                } else {
                  if (B !== undefined && B.length >= 1) {
                    if (y === "email") {
                      if (l.test(B)) {
                        w++
                      }
                    } else {
                      w++
                    }
                  }
                }
              }
            });
            A = w === r.length
          }
        }
      }
    }
    if (!v) {
      if (A) {
        this.hideFieldError(u)
      } else {
        this.showFieldError(u)
      }
    }
    u.data("isValid", A);
    this.enableSubmit();
    return A
  };
  c.prototype.validateRecaptcha = function (o) {
    var p = window.grecaptcha.getResponse(this.recaptchaWidget) !== "";
    if (!o) {
      if (p) {
        this.hideFieldError(this.$recaptcha)
      } else {
        this.showFieldError(this.$recaptcha)
      }
    }
    this.$recaptcha.data("isValid", p);
    this.enableSubmit();
    return p
  };
  c.prototype.showFieldError = function (t, p) {
    var s = _.isString(p) ? p : t.data("error");
    var q = t.find(".heading");
    var o = $(e.replace("{msg}", s));
    t.addClass(b).find("." + d).remove();
    if (q.length) {
      o.insertAfter(q)
    } else {
      o.prependTo(t)
    }
    HONDA.formBuilder.FieldHelp.toggle(t, true);
    var r = t.parents("." + k);
    if (r.length) {
      var u = r.find(".accordionTitle");
      if (!u.hasClass("expanded")) {
        u.click()
      }
    }
  };
  c.prototype.hideFieldError = function (o) {
    o.removeClass(b).find("." + d).remove();
    HONDA.formBuilder.FieldHelp.toggle(o, false)
  };
  c.prototype.enableSubmit = function () {
    if (this.options.disableSubmit) {
      var o = true;
      this.$requiredFields.each(function () {
        o = $(this).parents("." + f).data("isValid");
        if (!o) {
          return false
        }
      });
      if (this.hasRecaptcha && !this.$recaptcha.data("isValid")) {
        o = false
      }
      if (o) {
        this.$submitButtons.removeClass(n)
      } else {
        this.$submitButtons.addClass(n)
      }
    }
  };
  c.prototype.validateForm = function (p) {
    var o = this;
    var q = true;
    this.$requiredFields.each(function () {
      if (!p) {
        $(this).data("is-touched", true)
      }
      if (!o.validateField(this, p)) {
        q = false
      }
    });
    if (this.hasRecaptcha && !o.validateRecaptcha(p)) {
      q = false
    }
    this.$form.data("isValid", q);
    this.enableSubmit();
    return q
  };
  c.prototype.showFormError = function () {
    var p = this;
    var o = function () {
      if (!p.$formError.is(":visible")) {
        p.$formError.show().css("opacity", 0).animate({
          opacity: 1
        }, j / 2)
      }
      p.scrollToFormError()
    };
    if (this.$formError.length) {
      if (this.$ajaxError.length && this.$ajaxError.is(":visible")) {
        this.$ajaxError.animate({
          opacity: 0
        }, j / 2, function () {
          $(this).hide();
          o()
        })
      } else {
        o()
      }
    }
  };
  c.prototype.hideFormError = function (o, q) {
    var p = function () {
      if ($.isFunction(o)) {
        o()
      }
    };
    if (this.$formError.length && this.$formError.is(":visible")) {
      this.$formError.animate({
        opacity: 0,
        height: q ? 0 : "auto"
      }, j / 2, function () {
        $(this).hide();
        p()
      })
    } else {
      p()
    }
  };
  c.prototype.scrollToFormError = function () {
    var o = this.$formError.offset().top;
    if (o < $(window).scrollTop()) {
      $("html, body").animate({
        scrollTop: o
      }, j)
    }
  };
  c.prototype.submitHandler = function (q) {
    var o = this;
    var p = this.validateForm(false);
    q.preventDefault();
    if (this.$submitButtons.hasClass(n)) {
      return
    }
    if (!p) {
      this.showFormError()
    } else {
      if ($.isFunction(this.options.submitCallback)) {
        this.options.submitCallback(this.$form.serialize())
      } else {
        if (this.options.delaySubmit) {
          window.setTimeout(function () {
            o.$form[0].submit()
          }, 100)
        } else {
          this.$form[0].submit()
        }
      }
    }
  };
  c.prototype.setTouched = function (o) {
    $(o.target).data("is-touched", true)
  };
  c.prototype.setupAccordionForm = function () {
    this.$form.find("." + k).accordion({
      firstOpen: this.options.accordion.firstOpen,
      closeExpandedItem: this.options.accordion.closeExpandedItem
    })
  };
  c.prototype.getCaratPositionIn = function (r) {
    var q = r.get(0);
    var t = r.clone().get(0);
    var s = 0;
    if (q.selectionStart) {
      s = q.selectionStart
    } else {
      if (document.selection) {
        t.focus();
        var o = document.selection.createRange();
        var p = document.selection.createRange().text.length;
        o.moveStart("character", -q.value.length);
        s = o.text.length - p
      }
    }
    return s
  };
  c.prototype.setCaratPositionIn = function (q, s) {
    var p = q.get(0);
    var r = q.clone().get(0);
    r.focus();
    if (p.setSelectionRange) {
      p.setSelectionRange(s, s)
    } else {
      if (p.createTextRange) {
        var o = p.createTextRange();
        o.collapse(true);
        o.moveStart("character", s);
        o.select()
      }
    }
  };
  c.prototype.truncateMaxLengthValue = function (p) {
    var o = p.attr("maxlength");
    var q = p.val();
    var r = this.getCaratPositionIn(p);
    p.val(q.substr(0, o));
    this.setCaratPositionIn(p, r)
  };
  c.prototype.imposeMaxLengthChars = function () {
    var o = this;
    if ($("html").hasClass("ie8") || $("html").hasClass("ie9")) {
      var q = [8, 9, 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 46, 91, 92];
      var p = this.$form.find("[maxlength]").filter(function () {
        var r = parseInt($(this).attr("maxlength"), 10);
        return _.isNumber(r) && r > 0
      });
      p.on("keyup", function (r) {
        if (r.type === "keyup" && q.indexOf(r.keyCode) !== -1) {
          return false
        }
        o.truncateMaxLengthValue($(this))
      })
    }
  };
  c.prototype.setupRecaptcha = function () {
    var o = this.$recaptcha.find(".recaptcha");
    var p = "recaptcha-" + $(".formFieldRecaptcha").index(this.$recaptcha);
    o.attr("id", p);
    this.recaptchaWidget = window.grecaptcha.render(p, {
      sitekey: o.data("sitekey"),
      callback: $.proxy(this.validateRecaptcha, this)
    })
  };
  c.prototype.setupForm = function () {
    var o = this;
    if (this.options.resetForm) {
      this.resetForm()
    }
    this.imposeMaxLengthChars();
    this.setupAccordionForm();
    this.validateForm(true);
    this.$requiredFields.on("focus click", function (p) {
      o.setTouched(p)
    }).on("change", function (p) {
      o.validateField(p)
    });
    if (this.options.enableBlurValidation) {
      this.$requiredFields.on("blur", function (p) {
        o.validateField(p)
      })
    }
    this.$form.on("submit", function (p) {
      p.preventDefault()
    });
    this.$form.on("submit", _.debounce(function (p) {
      o.submitHandler(p)
    }, 5000, true))
  };
  var m = function (o, p) {
    if (!o || !o.length) {
      o = $(HONDA.formBuilder.formSelector).not('[data-auto-init="false"]')
    }
    o.each(function () {
      if (!$(this).data(h) && !$(this).hasClass(a)) {
        $(this).data(h, new c($(this), p))
      }
    })
  };
  return {
    init: m
  }
}(jQuery));
HONDA.formBuilder.TouchTextAreaBlocker = (function () {
  var a = "overlay";
  var b = function () {
    if (Modernizr.touch) {
      $(HONDA.formBuilder.formSelector).find("textarea").each(function () {
        var d = $(this);
        var c = d.next("." + a);
        if (c.length) {
          c.on("click", function () {
            c.hide();
            d.focus()
          });
          d.on("blur", function () {
            c.show()
          })
        }
      })
    }
  };
  return {
    init: b
  }
}(jQuery));
HONDA.formBuilder.LinkedFormFields = (function () {
  var f = ".formFieldLinked";
  var e = "linked-id";
  var b = function (h) {
    return h.find("[data-" + e + "]")
  };
  var d = function (h) {
    var i = $();
    h.each(function () {
      i = i.add("#" + $(this).data(e))
    });
    return i
  };
  var c = function (i) {
    var h = b(i);
    var j = d(h);
    h.each(function () {
      var k = j.filter("#" + $(this).data(e));
      if ($(this).is(":checked") || $(this).is(":selected")) {
        k.show()
      } else {
        k.hide()
      }
    })
  };
  var a = function (i) {
    var h = b(i);
    c(i);
    if (h.filter("option").length) {
      h.parents("select").on("change", function () {
        c(i)
      })
    } else {
      h.on("change", function () {
        c(i)
      })
    }
  };
  var g = function () {
    $(HONDA.formBuilder.formSelector).find(f).each(function () {
      a($(this))
    })
  };
  return {
    init: g
  }
}(jQuery));
HONDA.formBuilder.AddressLookup = (function () {
  var b = 10000;
  var a = '<a href="#" class="address" data-qas-id="{1}">{2}</a>';
  var c = function (e) {
    this.$wrapper = e;
    this.$form = e.parents("form");
    this.$house = e.find(".houseNameNumber");
    this.$postcode = e.find(".postcode");
    this.$spinner = e.find(".requestSpinner");
    this.$addressList = e.find(".addressList");
    this.$address = e.find(".address");
    this.$town = e.find(".town");
    this.$requiredFields = e.find(".houseNameNumber input, .postcode input");
    this.searchURL = e.data("search-url");
    this.addressURL = e.data("address-url");
    this.lookupError = e.data("lookup-error");
    this.addressError = e.data("address-error");
    this.validationHandler = this.$form.data("validationHandler");
    this.results = {};
    this.request = null;
    this.$wrapper.on("click", ".postcode .secondarySubmitButton, .postcode .address", _.bind(this.onFindAddress, this))
  };
  c.prototype = {
    reset: function () {
      this.hideSpinner();
      this.hideAddressList();
      this.results = {};
      this.request = null
    },
    isValid: function () {
      var e = this;
      var f = true;
      this.$requiredFields.data("is-touched", true).each(function () {
        if (!e.validationHandler.validateField(this)) {
          f = false
        }
      });
      return f
    },
    isString: function (e) {
      return _.isString(e) && $.trim(e) !== ""
    },
    showError: function (e) {
      this.validationHandler.showFieldError(this.$house, e);
      this.reset()
    },
    showSpinner: function () {
      this.$spinner.addClass("show")
    },
    hideSpinner: function () {
      this.$spinner.removeClass("show")
    },
    showAddressList: function () {
      this.$addressList.addClass("show")
    },
    hideAddressList: function () {
      this.$addressList.removeClass("show")
    },
    clearAddressList: function () {
      this.$addressList.empty()
    },
    populateAddressList: function (e) {
      var f = "";
      _.each(e, function (g) {
        if (_.isString(g.moniker) && _.isString(g.partialAddress)) {
          f += a;
          f = f.replace("{1}", g.moniker);
          f = f.replace("{2}", g.partialAddress)
        }
      });
      this.$addressList.html(f);
      this.hideSpinner();
      if (e.length > 1) {
        this.showAddressList()
      } else {
        this.$addressList.find(".address:eq(0)").trigger("click")
      }
    },
    populateAddressFields: function (e) {
      var f = this.$postcode.find("input:text").val("");
      var h = this.$address.find("input:text").val("");
      var g = this.$town.find("input:text").val("");
      if (this.isString(e.postcode)) {
        f.val(e.postcode)
      }
      if (this.isString(e.addressLine1)) {
        h.eq(0).val(e.addressLine1)
      }
      if (this.isString(e.addressLine2)) {
        h.eq(this.isString(e.addressLine1) ? 1 : 0).val(e.addressLine2)
      }
      if (this.isString(e.town)) {
        g.val(e.town)
      }
      this.reset()
    },
    onFindAddress: function (j) {
      var g = this;
      var h = "";
      var i = {};
      var f = $(j.currentTarget);
      j.preventDefault();
      if (this.isValid()) {
        if (f.hasClass("address")) {
          h = this.addressURL;
          i.moniker = f.data("qas-id")
        } else {
          h = this.searchURL;
          i.house = this.$house.find("input:text").val();
          i.postcode = this.$postcode.find("input:text").val()
        }
        this.clearAddressList();
        this.showSpinner();
        if (this.request) {
          this.request.abort()
        }
        this.request = $.ajax({
          timeout: b,
          url: h,
          data: i,
          dataType: "json",
          success: function (e) {
            if (_.isArray(e)) {
              if (e.length) {
                g.populateAddressList(e)
              } else {
                g.showError(g.addressError)
              }
            } else {
              if (_.isObject(e) && _.keys(e).length) {
                g.populateAddressFields(e)
              } else {
                g.showError(g.lookupError)
              }
            }
          },
          error: function () {
            g.showError(g.lookupError)
          }
        })
      }
    }
  };
  var d = function () {
    $(HONDA.formBuilder.formSelector).find(".addressLookup").each(function () {
      var e = $(this);
      if (!e.data("address-lookup")) {
        e.data("address-lookup", new c(e))
      }
    })
  };
  return {
    init: d
  }
}(jQuery));
HONDA.formBuilder.DatePicker = (function () {
  var e = {
    formatSubmit: "yyyy/mm/dd",
    hiddenName: true
  };
  var g = '<button class="picker__button--close--trigger" />';
  var c = function (h) {
    h = h.split("/");
    _.each(h, function (j, k) {
      h[k] = parseInt(j, 10);
      if (k === 1) {
        h[k] -= 1
      }
    });
    return h
  };
  var a = function (h) {
    this.$wrapper = h;
    this.$input = h.find("input:text");
    this.$page = $("#page");
    this.config = this.createConfig();
    this.picker = null;
    this.$input.pickadate(this.config)
  };
  a.prototype = {
    createConfig: function () {
      var i = this;
      var k = $.extend({}, e);
      var n = this.getData("format-submit");
      var l = this.getData("range-min");
      var h = this.getData("range-max");
      var j = this.getData("disable");
      var m = this.$input.data("value");
      j = $.merge(j, this.getData("disable-range"));
      j = $.merge(j, this.getData("disable-days"));
      if (_.isString(n) && n !== "") {
        k.formatSubmit = n
      }
      if (_.isBoolean(l) || _.isNumber(l) || (_.isArray(l) && l.length)) {
        k.min = l
      }
      if (_.isBoolean(h) || _.isNumber(h) || (_.isArray(h) && h.length)) {
        k.max = h
      }
      if (j.length) {
        k.disable = j
      }
      k.onStart = function () {
        i.picker = this;
        i.createCloseButton();
        if (m) {
          this.set("select", c(m))
        }
      };
      k.onRender = function () {
        i.setPreviousDays()
      };
      k.onOpen = function () {
        i.pageTabIndex = $("#page").attr("tabindex");
        i.$page.removeAttr("tabindex")
      };
      k.onClose = function () {
        i.$page.attr("tabindex", i.pageTabIndex)
      };
      return k
    },
    createCloseButton: function () {
      var h = this;
      $(g).appendTo(this.picker.$root).on("click", function (i) {
        i.preventDefault();
        h.picker.$root.find(".picker__button--close").trigger("click")
      })
    },
    setPreviousDays: function () {
      var h = this.picker.get("view").pick;
      var i = new Date().getTime();
      if (h <= i) {
        var j = this.picker.$root.find(".picker__day");
        var k = j.filter(".picker__day--today");
        if (k.length) {
          j = j.slice(0, j.index(k))
        }
        j.addClass("picker__day--previous")
      }
    },
    getData: function (i) {
      var k = this.$wrapper.data(i);
      var h = [];
      var j = [];
      if (i === "format-submit") {
        return k
      }
      if (_.isBoolean(k)) {
        return k
      }
      if (_.isNumber(k) && (i === "range-min" || i === "range-max")) {
        return k
      }
      if (_.isNumber(k) || (_.isString(k) && k !== "")) {
        h = _.isString(k) ? $.trim(k).split(",") : [k];
        switch (i) {
          case "disable-range":
            _.each(h, function (l) {
              l = l.split("|");
              j.push({
                from: c(l[0]),
                to: c(l[1])
              })
            });
            break;
          case "disable-days":
            _.each(h, function (l) {
              j.push(parseInt(l, 10))
            });
            break;
          default:
            _.each(h, function (l) {
              j.push(c(l))
            })
        }
      }
      if (j.length === 1) {
        return i === "range-min" || i === "range-max" ? j[0] : [j[0]]
      }
      return j
    }
  };
  var f = function () {
    $(HONDA.formBuilder.formSelector).find(".formFieldDatePicker").each(function () {
      if (!$(this).data("date-picker")) {
        $(this).data("date-picker", new a($(this)))
      }
    })
  };
  var b = function () {
    var h = $("script#datepickerTranslation");
    if (h.length && h.data("src")) {
      $.ajax({
        url: h.data("src"),
        dataType: "script",
        complete: function () {
          f()
        }
      })
    } else {
      f()
    }
  };
  var d = function () {
    b()
  };
  return {
    init: d
  }
}(jQuery));
HONDA.formBuilder.RegistrationLookup = (function () {
  var b = 10000;
  var a = function (d) {
    this.$form = d.parents("form");
    this.$registrationNumber = d.find(".registrationNumber");
    this.$carMake = d.find(".carMake").find("input:text");
    this.$carModel = d.find(".carModel").find("input:text");
    this.$carDoors = d.find(".carDoors").find("input:text");
    this.$engineSize = d.find(".engineSize").find("input:text");
    this.$transmissionType = d.find(".transmissionType").find("input:text");
    this.$fuelType = d.find(".fuelType").find("input:text");
    this.$requiredFields = d.find(".registrationNumber input");
    this.validationHandler = this.$form.data("validationHandler");
    this.$readonly = d.find("input:text").not(".registrationNumber input:text");
    d.on("click", ".registrationNumber .secondarySubmitButton", _.bind(this.onRegistrationLookup, this));
    this.$registrationLookup = d.data("registration-lookup-url");
    this.$spinner = d.find(".requestSpinner");
    this.lookupError = d.data("lookup-error")
  };
  a.prototype = {
    isValid: function () {
      var d = this;
      var e = true;
      this.$requiredFields.data("is-touched", true).each(function () {
        if (!d.validationHandler.validateField(this)) {
          e = false
        }
      });
      return e
    },
    reset: function () {
      this.hideSpinner();
      this.$readonly.val("")
    },
    showError: function (d) {
      this.validationHandler.showFieldError(this.$registrationNumber, d);
      this.reset()
    },
    showSpinner: function () {
      this.$spinner.addClass("show")
    },
    hideSpinner: function () {
      this.$spinner.removeClass("show")
    },
    populateResults: function (d) {
      this.hideSpinner();
      this.$carMake.val(d.make);
      this.$carModel.val(d.model);
      this.$carDoors.val(d.body);
      this.$engineSize.val(d.engineSize);
      this.$transmissionType.val(d.transmission);
      this.$fuelType.val(d.fuel)
    },
    onRegistrationLookup: function (h) {
      h.preventDefault();
      var f = this;
      var g = this.$registrationLookup;
      var d = {};
      if (this.isValid()) {
        this.showSpinner();
        d.carRegistration = this.$registrationNumber.find("input:text").val();
        this.request = $.ajax({
          timeout: b,
          url: g,
          dataType: "json",
          data: d,
          success: function (e) {
            f.populateResults(e)
          },
          error: function () {
            f.showError(f.lookupError)
          }
        })
      }
    }
  };
  var c = function () {
    $(HONDA.formBuilder.formSelector).find(".registrationLookup").each(function () {
      var d = $(this);
      if (!d.data("registration-lookup")) {
        d.data("registration-lookup", new a(d))
      }
    })
  };
  return {
    init: c
  }
}(jQuery));
HONDA.formBuilder.init = function () {
  this.FormValidation.init();
  this.ShowMore.init();
  this.FieldHelp.init();
  this.PlaceHolderText.init();
  this.SelectableLabels.init();
  this.TouchTextAreaBlocker.init();
  this.LinkedFormFields.init();
  this.AddressLookup.init();
  this.DatePicker.init();
  this.RegistrationLookup.init()
};
/*!
 * Honda platform - Hero Timer
 */
var HONDA = window.HONDA || {};
HONDA.heroTimer = {
  init: function () {
    var h = this;
    var g = $(".timedContent");
    var c = $(".timedContent").find("li");
    var a = $(window);
    var f;
    if (a.width() < 621) {
      var b = g.find("img");
      var i = $.Deferred();
      var d = 0;
      var e = false;
      b.each(function () {
        if (this.complete) {
          e = true
        } else {
          e = false
        }
      });
      if (e) {
        i.resolve()
      } else {
        b.on("load", function () {
          i.notify(d += 1)
        })
      }
      i.progress(function (j) {
        if (j >= b.length) {
          i.resolve()
        }
      });
      i.done(function () {
        h.setContentHeight(g, c)
      })
    }
    a.on("resize", function () {
      window.clearTimeout(f);
      f = window.setTimeout(function () {
        if ($(this).width() < 621) {
          h.setContentHeight(g, c)
        } else {
          g.removeAttr("style")
        }
      }, 200)
    });
    if (g.length > 0) {
      this.itemLength = g.find(".items").find("li").length;
      g.find(".items").find("li").not(":first").addClass("invisible");
      this.count = 0;
      this.startTimer();
      this.transitionEnd();
      this.controls()
    }
  },
  setContentHeight: function (c, b) {
    var a = 0;
    b.each(function () {
      var d = $(this).height();
      if (d > a) {
        a = d
      }
    });
    c.height(a)
  },
  startTimer: function () {
    var a = this;
    a.timer = window.setInterval(function () {
      a.moveOutMoveIn()
    }, 6000)
  },
  moveOutMoveIn: function () {
    var a = this,
      c = $(".timedContent .items").find("li").eq(this.count),
      b = $(".timedContent .items");
    if ($("html").hasClass("ie9") || $("html").hasClass("ie8")) {
      c.find("p").animate({
        opacity: 0,
        top: 100
      }, 400, function () {
        b.find("li").eq(a.count).addClass("moveOutFallback").animate({
          left: "-150%"
        }, 700, function () {
          $(this).addClass("invisible");
          $(this).removeClass("moveOutFallback");
          $(this).removeAttr("style", "left")
        });
        if (a.count + 1 === a.itemLength) {
          a.count = 0
        } else {
          a.count = a.count + 1
        }
        b.find("li").eq(a.count).find("p").css({
          opacity: 0,
          top: 100
        });
        b.find("li").eq(a.count).addClass("moveInFallback").animate({
          left: "0"
        }, 700, function () {
          $(this).removeClass("invisible");
          $(this).removeClass("moveInFallback");
          $(this).removeAttr("style", "left");
          $(this).find("p").animate({
            opacity: 1,
            top: 0
          })
        })
      })
    } else {
      c.find("p").animate({
        opacity: 0,
        top: 100
      }, 200, function () {
        b.find("li").eq(a.count).addClass("moveOut");
        if (a.count + 1 === a.itemLength) {
          a.count = 0
        } else {
          a.count = a.count + 1
        }
        b.find("li").eq(a.count).addClass("moveIn");
        b.find("li").eq(a.count).find("p").css({
          opacity: 0,
          top: 100
        })
      })
    }
  },
  transitionEnd: function () {
    var a = this,
      b = $(".timedContent .items").find("li");
    if (!$("html").hasClass("ie9") || $("html").hasClass("ie8")) {
      b.live("webkitTransitionEnd", function (c) {
        a.endItemAnimation(c)
      });
      b.live("otransitionend", function (c) {
        a.endItemAnimation(c)
      });
      b.live("transitionend", function (c) {
        a.endItemAnimation(c)
      })
    }
  },
  endItemAnimation: function (a) {
    var b = $(".timedContent .items");
    if ($(a.currentTarget).hasClass("moveOut")) {
      b.find("li").addClass("invisible");
      b.find("li").eq(this.count).removeClass("invisible");
      b.find("li").eq(this.count).find("p").animate({
        top: 0,
        opacity: 1
      }, 300);
      b.find("li.moveOut").removeClass("moveOut");
      b.find("li.moveIn").removeClass("moveIn")
    }
  },
  controls: function () {
    var a = this;
    $(".controls .play").hide();
    $(".controls .play a").live("click", function (b) {
      a.moveOutMoveIn();
      a.startTimer();
      $(".controls .pause").show();
      $(".controls .play").hide();
      b.preventDefault()
    });
    $(".controls .pause a").live("click", function (b) {
      window.clearInterval(a.timer);
      $(".pause").hide();
      $(".play").show();
      b.preventDefault()
    })
  }
};
/*!
 * Honda platform - Configure Hi-Resolution images for High-pixel-Density devices
 */
var HONDA = window.HONDA || {};
HONDA.configureHiResImages = (function () {
  var d = 1.5,
    a = "hondaHiRes",
    e = ".fs-img",
    f = "data-high-resolution-src",
    i = "retinaReady";
  var g = function () {
    $.cookie(a, true, {
      expires: 7,
      path: "/"
    });
    return true
  };
  var b = function () {
    return $.removeCookie(a, {
      path: "/"
    })
  };
  var c = function (m) {
    var p = $(e).filter("[" + m + "]"),
      n, j, k, o;
    for (n = 0, j = p.length; n < j; n = n + 1) {
      k = $(p[n]);
      o = k.attr(m);
      if ($.trim(o) !== "" && p[n].src !== o) {
        p[n].src = k.attr(m);
        k.data("isHiRes", true)
      }
    }
    if (g()) {
      $(document).trigger("replaced.hiResImages")
    }
  };
  var h = function () {
    if ($("html").hasClass("ie8")) {
      return false
    }
    if (window.hasOwnProperty("devicePixelRatio") && window.devicePixelRatio >= d) {
      c(f);
      $("body").first().addClass(i)
    }
  };
  return {
    init: h,
    removeCookie: b
  }
}());
/*!
 * Honda platform - Maps
 */
HONDA.googleMapAPILoaded = function () {
  $(document).trigger("apiLoaded.map")
};
(function (f, d, a) {
  var e = "maps",
    g = {
      panControl: true,
      zoomControl: true,
      sprite: "/etc/designs/honda/theme_inclusive/img/icons/map_markers.png",
      markers: {
        result: {
          mobile: {
            width: 34,
            height: 37,
            x: 0,
            y: 100
          },
          desktop: {
            width: 53,
            height: 62,
            x: 100,
            y: 100
          }
        },
        search: {
          mobile: {
            width: 34,
            height: 42,
            x: 0,
            y: 0
          },
          desktop: {
            width: 49,
            height: 63,
            x: 100,
            y: 0
          }
        },
        selected: {
          mobile: {
            width: 34,
            height: 37,
            x: 0,
            y: 200
          },
          desktop: {
            width: 53,
            height: 62,
            x: 100,
            y: 200
          }
        },
        territory: {
          mobile: {
            width: 34,
            height: 42,
            x: 0,
            y: 500
          },
          desktop: {
            width: 49,
            height: 63,
            x: 100,
            y: 500
          }
        }
      },
      lock: {
        overlay: ".mapLockOverlay"
      }
    };

  function c() {
    var h = null;
    if (d.navigator.appName === "Microsoft Internet Explorer") {
      var i = d.navigator.userAgent;
      var j = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
      if (j.exec(i) !== null) {
        h = parseFloat(RegExp.$1)
      }
    }
    return h
  }

  function b(i, h) {
    this.element = i;
    this.$element = f(i);
    this.options = f.extend({}, g, h);
    this.defaults = g;
    this.init()
  }
  b.prototype.createMap = function (i) {
    var h = this;
    if (!this.map) {
      this.map = new google.maps.Map(this.element, {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: i.center,
        panControl: !HONDA.is.mobile(),
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT,
          style: google.maps.ZoomControlStyle.LARGE
        },
        mapTypeControl: false,
        streetViewControl: false
      });
      this.initialMapHeight = this.$element.height();
      this.initialWindowOuterHeight = d.outerHeight;
      google.maps.event.addDomListener(this.element, "resize", function () {
        if (h.ieVersion >= 10) {
          var j = d.screen.deviceXDPI / d.screen.logicalXDPI;
          var k = j;
          if (j === k) {
            h.$element.css("height", h.initialMapHeight + "px")
          }
        }
      });
      if (this.options.callback && typeof this.options.callback === "function") {
        this.options.callback()
      }
    }
    return this
  };
  b.prototype.createMarkers = function (l) {
    var i = this;
    var j = HONDA.is.mobile() ? "mobile" : "desktop";
    this.markers = [];
    this.markerBounds = new google.maps.LatLngBounds(null);
    var k = function (n) {
      var p = i.options.selectMarker === n.id ? "selected" : n.type;
      var o = g.markers[p][j];
      return {
        origin: new google.maps.Point(o.x, o.y),
        size: new google.maps.Size(o.width, o.height),
        url: g.sprite
      }
    };
    var h = function (n) {
      if (n.id === 0 || n.type !== "result") {
        return
      }
      return new i.MarkerText({
        map: i.map,
        plugin: i,
        text: n.id,
        coords: n.coords,
        type: n.type,
        device: j,
        selected: i.options.selectMarker === n.id
      })
    };
    var m = function (o, p) {
      var q = new google.maps.LatLng(o.coords.lat, o.coords.lng);
      if (!o.id) {
        o.id = p
      }
      var n = new google.maps.Marker({
        clickable: true,
        flat: true,
        icon: k(o),
        map: i.map,
        position: q,
        markerId: o.id,
        markerText: h(o),
        markerType: o.type,
        markerData: o
      });
      if (n.markerType !== "result") {
        n.setZIndex(1)
      } else {
        if (n.markerText !== undefined) {
          f(n.markerText.elem).css("z-index", 900 + (l.length - p))
        }
      }
      if (p && p === i.options.selectMarker) {
        i.overlay.update(o)
      }
      if (_.isFunction(i.options.markerCallback)) {
        i.options.markerCallback(n)
      }
      i.markers.push(n);
      i.markerBounds.extend(q)
    };
    _.each(l.markers, function (n, o) {
      m(n, o)
    });
    if (l.territory) {
      m(l.territory)
    }
    return this
  };
  b.prototype.fitToMarkers = function () {
    if (this.markers.length > 1) {
      this.map.fitBounds(this.markerBounds)
    }
    return this
  };
  b.prototype.clickMarker = function (k) {
    var j;
    var h = this.markers.length;
    for (j = 0; j < h; j = j + 1) {
      if (this.markers[j].markerId === k) {
        google.maps.event.trigger(this.markers[j], "click");
        this.map.setZoom(15);
        this.map.setCenter(this.markers[j].getPosition())
      }
    }
  };
  b.prototype.toggleLock = function () {
    var h = this.options.lock;
    var i = h.container.find(h.overlay);
    if (i.is(":visible")) {
      i.hide();
      h.container.removeClass("locked").addClass("unlocked")
    } else {
      i.show();
      h.container.removeClass("unlocked").addClass("locked")
    }
  };
  b.prototype.resize = function () {
    this.fitToMarkers();
    return this
  };
  b.prototype.setupMarkerText = function () {
    function h(i) {
      this.map = i.map;
      this.coords = i.coords;
      this.text = i.text;
      this.options = i;
      this.elem = a.createElement("div");
      this.elemValue = a.createElement("span");
      this.elem.appendChild(this.elemValue);
      this.setMap(this.map)
    }
    h.prototype = new google.maps.OverlayView();
    h.prototype.draw = function () {
      var k = this;
      var i = this.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(this.coords.lat, this.coords.lng));
      var m = g.markers[this.options.type];
      var n = this.options.device;
      var l = -(m[n].width * 0.5);
      var j = -m[n].height;
      this.elem.style.left = (i.x + l) + "px";
      this.elem.style.top = (i.y + j) + "px";
      this.elem.style.height = m[n].height + "px";
      this.elem.style.width = m[n].width + "px";
      f(this.elemValue).addClass("mapPinText");
      f(this.elem).attr("tabindex", "0").on({
        focus: function () {
          f(this).addClass("selected")
        },
        blur: function () {
          f(this).removeClass("selected")
        },
        keypress: function (o) {
          if (o.keyCode === 13) {
            google.maps.event.trigger(k.options.plugin.markers[k.text], "click")
          }
        }
      });
      this.elemValue.innerHTML = this.text
    };
    h.prototype.onAdd = function () {
      var i = this.getPanes().overlayImage;
      f(this.elem).addClass("mapPin").addClass(this.options.device);
      if (this.options.selected) {
        f(this.elem).addClass("selected")
      }
      i.appendChild(this.elem)
    };
    h.prototype.onRemove = function () {
      this.elem.parentNode.removeChild(this.elem)
    };
    this.MarkerText = h;
    return this
  };
  b.prototype.setup = function (k) {
    var i = {};
    var h = this;
    var j = this.options.lock;
    this.mapData = k;
    this.setupMarkerText();
    if (!this.options.disableMarkerInteraction) {
      this.overlay = new HONDA.MapOverlay(this.element, k)
    }
    if (!this.map) {
      this.hide();
      i.center = new google.maps.LatLng(k.markers[0].coords.lat, k.markers[0].coords.lng);
      this.createMap(i);
      this.createMarkers(k);
      this.fitToMarkers();
      google.maps.event.addListenerOnce(this.map, "zoom_changed", function () {
        h.storeMapCenterZoom()
      });
      google.maps.event.addListenerOnce(this.map, "idle", function () {
        if (f.isFunction(h.options.onComplete)) {
          h.options.onComplete(h.options.onCompleteData);
          google.maps.event.addListenerOnce(h.map, "idle", function () {
            h.show()
          })
        } else {
          h.show()
        }
      })
    }
    j.container = f(this.element).siblings(".mapLock");
    j.btn = j.container.find(".mapLockBtn");
    j.overlayHtml = j.container.find(".mapLockOverlay").clone();
    f(g.lock.overlay).on("click", function (l) {
      l.preventDefault()
    })
  };
  b.prototype.storeMapCenterZoom = function () {
    this.map.originalCenter = this.map.center;
    this.map.originalZoom = this.map.zoom
  };
  b.prototype.hide = function () {
    this.$element.css("visibility", "hidden")
  };
  b.prototype.show = function () {
    this.$element.css("visibility", "")
  };
  b.prototype.reset = function () {
    f.each(this.markers, function (j, h) {
      if (h.markerText && h.markerText.elem) {
        f(h.markerText.elem).removeClass("selected")
      }
    });
    if (this.map.originalCenter) {
      this.map.setCenter(this.map.originalCenter)
    }
    if (this.map.originalZoom) {
      this.map.setZoom(this.map.originalZoom)
    }
    if (this.overlay && f.isFunction(this.overlay.disable)) {
      this.overlay.disable()
    }
  };
  b.prototype.getCoords = function (j) {
    var i = null;
    if (_.isString(j)) {
      var h = j.split(",");
      i = {
        lat: parseFloat(h[0]),
        lng: parseFloat(h[1])
      }
    }
    return i
  };
  b.prototype.getDataFromHTML = function () {
    var h = this;
    var i = {
      markers: []
    };
    var j = function (r, p) {
      var l = {};
      var q = h.getCoords(r.data(p + "-coords"));
      l.type = p;
      if (_.isObject(q)) {
        l.coords = q
      }
      if (p !== "search") {
        var k = r.find(".dealerDetailsHeader h3");
        var s = r.find(".dealerDetailsHeader h3 a");
        var m = r.find(".distanceFromDealer");
        var n = r.find(".panel ul");
        var o = r.find(".iconCta");
        if (k.length) {
          l.name = f.trim(k.text())
        }
        if (s.length) {
          l.url = s.attr("href")
        }
        if (m.length) {
          l.distance = f.trim(m.html())
        }
        if (n.length) {
          l.services = f.trim(n.html())
        }
        if (o.length) {
          l.$ctas = o.clone(true)
        }
      }
      if (p === "territory") {
        l.id = r.data("markerid")
      }
      return l
    };
    f("[data-search-coords]").each(function () {
      i.markers.push(j(f(this), "search"))
    });
    f("[data-result-coords]").each(function () {
      i.markers.push(j(f(this), "result"))
    });
    f("[data-territory-coords]:eq(0)").each(function () {
      i.territory = j(f(this), "territory")
    });
    return i
  };
  b.prototype.init = function () {
    var j = this;
    var l = this.$element.data();
    var i = !_.isUndefined(this.$element.data("search-coords"));
    var k = l.mapdata;
    var m = f(a);
    var h;
    this.options.lockBtn = this.$element.parent().find(".mapLock .mapLockBtn");
    this.options.lockOverlay = this.$element.parent().find(".mapLock .mapLockOverlay");
    this.ieVersion = c();
    h = function () {
      var o = a.createElement("script");
      var p = "sensor=false&region=" + l.mapregion + "&client=" + l.client;
      var n = "key=" + l.mapapikey + "&sensor=false&region=" + l.mapregion;
      var q = n;
      if (l.business) {
        q = p
      }
      o.src = "https://maps.googleapis.com/maps/api/js?" + q + "&callback=HONDA.googleMapAPILoaded";
      a.body.appendChild(o)
    };
    m.on("apiLoaded.map", function () {
      if (k) {
        var n = f.ajax(k, {
          dataType: "json"
        });
        n.success(function (p) {
          j.setup(p)
        })
      } else {
        if (i) {
          var o = j.getDataFromHTML();
          j.setup(o)
        }
      }
    });
    this.options.lockBtn.on("click", function () {
      j.toggleLock()
    });
    if (!d.google) {
      h()
    } else {
      m.trigger("apiLoaded.map")
    }
  };
  f.fn[e] = function (i) {
    var h = "plugin_" + e;
    return this.each(function () {
      if (!f.data(this, h)) {
        f.data(this, h, new b(this, i))
      }
    })
  }
}(jQuery, window, document));
HONDA.LoadingScreen = (function () {
  var c = {
    fallbackDelay: 1400
  };
  var a = {
    loaded: "loaded"
  };
  var d = {
    remove: "remove"
  };
  var b = "webkitAnimationIteration mozAnimationIteration animationiteration";

  function e(g, f) {
    this.settings = $.extend({}, c, f);
    this.$loader = g;
    this.$progressBar = g.find(".progress .bar");
    this.fallbackTimer = null;
    this.isReady = false;
    if (Modernizr.cssanimations) {
      this.$progressBar.on(b, this.onAnimationIteration.bind(this))
    } else {
      this.fallbackTimer = window.setInterval(this.onAnimationIteration.bind(this), this.settings.fallbackDelay)
    }
  }
  e.prototype = {
    events: a,
    isVisible: function () {
      return !this.$loader.hasClass(d.remove)
    },
    hide: function () {
      this.$loader.hide()
    },
    remove: function () {
      this.isReady = true
    },
    onAnimationIteration: function () {
      if (this.isReady && this.isVisible()) {
        this.$loader.addClass(d.remove).onPropertyTransitionEnd("opacity", this.hide.bind(this));
        if (Modernizr.cssanimations) {
          this.$progressBar.off(b)
        } else {
          window.clearInterval(this.fallbackTimer)
        }
        this.$loader.trigger(a.loaded)
      }
    }
  };
  return e
}());
/*!
 * Honda platform - Page header
 */
var HONDA = window.HONDA || {};
HONDA.slimNav = {
  $navTrigger: $(".innerNav .trigger"),
  $navListContainer: $(".slimNavInsert"),
  $navList: $(".newCars .navList"),
  classes: {
    close: "close",
    open: "open"
  },
  bind: function () {
    this.$navTrigger.on("click", _.bind(this.showHide, this))
  },
  init: function () {
    this.$navListContainer.addClass(this.classes.close).hide();
    this.bind()
  },
  showHide: function (a) {
    a.preventDefault();
    if (this.$navListContainer.hasClass(this.classes.close)) {
      this.show()
    } else {
      this.hide()
    }
  },
  show: function () {
    var a = this;
    if (this.$navListContainer.hasClass(this.classes.close)) {
      this.$navTrigger.addClass(this.classes.open);
      this.$navListContainer.slideDown(250, function () {
        a.$navListContainer.removeClass(a.classes.close).addClass(a.classes.open);
        a.$navTrigger.data("isvisible", true)
      })
    }
  },
  hide: function () {
    var a = this;
    if (this.$navTrigger.hasClass(this.classes.open)) {
      this.$navTrigger.removeClass(this.classes.open);
      this.$navListContainer.slideUp(250, function () {
        a.$navListContainer.removeClass(a.classes.open).addClass(a.classes.close);
        a.$navTrigger.data("isvisible", false)
      })
    }
  }
};
HONDA.thinCampaignNav = {
  $cmHeader: $(".cmThinHeader"),
  $navTrigger: null,
  $slidingNav: null,
  open: "open",
  init: function () {
    var a = this;
    if (this.$cmHeader.length < 1) {
      return
    }
    this.$navTrigger = this.$cmHeader.find(".trigger");
    this.$slidingNav = this.$cmHeader.find(".globalCtas");
    this.$navTrigger.on("click keypress", function (c) {
      c.preventDefault();
      var b = $(c.currentTarget);
      if (b.hasClass(a.open)) {
        b.removeClass(a.open);
        a.$slidingNav.slideUp(250)
      } else {
        b.addClass(a.open);
        a.$slidingNav.slideDown(250)
      }
    })
  }
};
HONDA.pageHeader = {
  baseNavSelector: ".baseNav",
  init: function () {
    HONDA.slimNav.init();
    HONDA.thinCampaignNav.init()
  }
};
/*!
 * Honda platform - Responsive Page Header
 */
var HONDA = window.HONDA || {};
HONDA.ResponsiveHeader = {
  $outer: $("#outer"),
  $header: $(".hondaHeader"),
  $headerSection: $(".hondaHeader > section"),
  $accessabilityLinks: $(".hondaHeader > .inner > nav"),
  $primaryNavLink: $(".hondaHeader nav.primaryNavigation li a"),
  $primaryNavHeader: $(".hondaHeader .primaryNavigation h2"),
  $responsiveSecondary: $(".hondaHeader section > .inner > ul"),
  $responsiveSecondaryLink: $(".hondaHeader section .inner > ul > li > article > header > a"),
  $firstStateProductLink: $(".hondaHeader .products .firstState > ul > li"),
  $secondStateProductLink: $(".hondaHeader .content header"),
  $primaryNavSections: $(".hondaHeader section > .inner > ul > li"),
  $returnToFirstState: $(".secondState > a"),
  $closeSecondaryHeader: $(".closeSecondaryHeader"),
  $searchBox: $(".hondaHeader > .inner > div"),
  $searchButton: $(".hondaHeader > .inner .pseudoHeading .search"),
  $desktopSearchBar: $(".hondaHeader .primaryNavigation .inner > form input"),
  $goToFirstState: $(".hondaHeader .goToFirstState"),
  $navCTAs: $(".hondaHeader > nav.ctas"),
  $fixedSidebarAsideHeader: $(".lazyCategorised > aside header"),
  $secondaryResponsive: $(".secondaryResponsive"),
  $secondaryResponsiveDropdown: $(".secondaryResponsive aside a"),
  openClass: "open",
  activeClass: "active",
  firstState: "firstState",
  secondState: "secondState",
  showFirstStateClass: "showFirstState",
  showSecondStateClass: "showSecondState",
  searchOverlayOpenClass: "searchOverlayOpen",
  searchOverlayCloseClass: "searchOverlayClose",
  configuredCar: "configuredCar",
  transitioning: "transitioning",
  noOpacityTransition: "noOpacityTransition",
  clickEvents: "click keydown",
  mobileBreakpoint: 620,
  init: function () {
    if (HONDA.is.CQEditMode()) {
      return
    }
    this.bind();
    this.jumpToSecondState();
    this.configuredCars();
    this.updateAria();
    this.accessabiltyControls();
    this.debugging();
    this.configuredImgToSvg()
  },
  isMobile: function () {
    return HONDA.breakpoints.current < HONDA.breakpoints.large
  },
  bind: function () {
    var a = this;
    if (document.addEventListener) {
      document.addEventListener("touchstart", function () {
        return true
      }, false)
    }
    this.$primaryNavLink.on(this.clickEvents, _.bind(this.primaryNavLinkClick, this));
    this.$primaryNavHeader.on(this.clickEvents, _.bind(this.primaryNavHeaderClick, this));
    this.$responsiveSecondaryLink.on(this.clickEvents, _.bind(this.responsiveSecondaryLinkClick, this));
    this.$searchButton.on(this.clickEvents, _.bind(this.showSearchBox, this));
    this.$firstStateProductLink.on(this.clickEvents, _.bind(this.firstStateProductLinkClick, this));
    this.$secondStateProductLink.on(this.clickEvents, _.bind(this.secondStateProductLinkClick, this));
    this.$returnToFirstState.on(this.clickEvents, _.bind(this.showFirstState, this));
    this.$headerSection.on("transitionend webkitTransitionEnd mozTransitionEnd", _.bind(this.onTransitionEnd, this));
    this.$closeSecondaryHeader.on(this.clickEvents, _.bind(this.closeSecondaryHeader, this));
    this.$goToFirstState.on(this.clickEvents, _.bind(this.returnToFirstState, this));
    this.$navCTAs.find("li").on(this.clickEvents, _.bind(this.navCtaClick, this));
    this.$desktopSearchBar.on("focus blur", _.bind(this.addActiveToForm, this));
    this.$desktopSearchBar.parents("form").on("submit", _.bind(this.submitSearchForm, this));
    if (this.$fixedSidebarAsideHeader.length >= 1) {
      this.$fixedSidebarAsideHeader.on(this.clickEvents, _.bind(this.secondStateProductLinkClick, this))
    }
    if (this.$secondaryResponsive.length) {
      this.$secondaryResponsiveDropdown.on("click", _.bind(this.secondaryResponsiveNav, this));
      $(window).on("scroll " + (HONDA.is.touchDevice() ? "orientationchange" : "resize"), function (b) {
        a.sticky();
        if (b.type === "resize") {
          a.equaliseHeights()
        }
      });
      this.sticky()
    }
  },
  debugging: function () {
    $.event.trigger("primaryNavDebug")
  },
  navCtaClick: function (a) {
    if (a.target.tagName.toLowerCase() === "li" && (a.keyCode === "13" || a.type === "click")) {
      $("a", a.currentTarget).trigger("click")
    }
  },
  accessabiltyControls: function () {
    if ($(".secondaryResponsive").length === 0) {
      this.$accessabilityLinks.find("li").eq(1).hide()
    }
  },
  primaryNavLinkClick: function (d) {
    if (d.keyCode === "13" || d.type === "click") {
      if (this.$headerSection.hasClass("collapsed")) {
        this.$headerSection.removeClass("collapsed");
        this.$headerSection.removeClass(this.activeClass);
        this.selectedIndex = null
      }
      this.updateNavAria(d);
      this.$navCTAs.addClass(this.activeClass);
      this.$primaryNavHeader.addClass(this.activeClass);
      var a = $(d.currentTarget);
      if (a.data("flyout") === true) {
        d.preventDefault();
        if (!this.$responsiveSecondary.hasClass(this.activeClass)) {
          this.$primaryNavHeader.trigger(this.clickEvents)
        }
        var b = this.$primaryNavLink.index(a);
        var c = this.$primaryNavSections.eq(b);
        this.$primaryNavSections.removeClass(this.activeClass);
        c.addClass(this.activeClass);
        this.$headerSection.addClass(this.activeClass);
        if (this.selectedIndex === b) {
          this.callSubscribers("callBeforeHide");
          a.find("span").attr("aria-hidden", true);
          this.closeSecondaryHeader(d);
          this.$primaryNavSections.removeClass(this.noOpacityTransition)
        } else {
          if (this.selectedIndex === undefined) {
            this.callSubscribers("callBeforeShow");
            this.restoreToDefault();
            c.addClass(this.noOpacityTransition);
            this.selectedIndex = b;
            this.jumpToSecondState()
          } else {
            this.restoreToDefault();
            this.selectedIndex = b;
            this.$primaryNavSections.removeClass(this.noOpacityTransition);
            this.jumpToSecondState()
          }
        }
        this.equaliseHeights();
        this.updateAria();
        $("." + this.configuredCar).removeClass(this.configuredCar)
      }
    }
  },
  equaliseHeights: function () {
    var c = this.$headerSection.find("." + this.firstState + ":visible");
    var b = this.$headerSection.find("." + this.secondState + ":visible");
    var d = $();
    var a = $();
    if (c.length && c.attr("aria-hidden") === "true") {
      d = c.find("li:visible p");
      if (c.find('li[data-category="configured"]').length) {
        a = c.find("li:visible a");
        a.css("height", "").height(a.maxHeight())
      }
    }
    if (b.length && b.attr("aria-hidden") === "true") {
      d = b.find("> ul li:visible p")
    }
    if (d.length) {
      if (!d.find(".price").length) {
        d.css("padding-bottom", 0)
      }
      d.css("height", "").height(d.maxHeight())
    }
  },
  restoreToDefault: function () {
    this.$headerSection.find("." + this.transitioning).removeClass(this.transitioning);
    this.$headerSection.find("." + this.showSecondStateClass).removeClass(this.showSecondStateClass);
    this.$headerSection.find("." + this.showFirstStateClass).removeClass(this.showFirstStateClass)
  },
  primaryNavHeaderClick: function (a) {
    a.preventDefault();
    this.$header.toggleClass(this.openClass);
    this.$navCTAs.toggleClass(this.activeClass);
    if (this.$headerSection.hasClass(this.activeClass)) {
      $(".hondaHeader").find("." + this.activeClass).removeClass(this.activeClass)
    } else {
      if ($(a.target).is("span")) {
        this.$primaryNavHeader.toggleClass(this.activeClass)
      } else {
        $(a.target).parent().addClass(this.activeClass)
      }
      this.$headerSection.addClass(this.activeClass)
    }
    this.jumpToSecondState()
  },
  responsiveSecondaryLinkClick: function (b) {
    var a = $(b.currentTarget);
    if (a.data("flyout") === true) {
      if (this.isMobile()) {
        b.preventDefault();
        if (!a.closest("li").hasClass(this.activeClass)) {
          $("html, body").animate({
            scrollTop: Math.ceil(this.$primaryNavHeader.offset().top)
          }, 300);
          this.$responsiveSecondary.find("> li").removeClass(this.activeClass);
          a.closest("li").addClass(this.activeClass)
        } else {
          this.$responsiveSecondary.find("> li").removeClass(this.activeClass)
        }
      } else {
        this.jumpToSecondState()
      }
      if (this.$responsiveSecondary.find("> li." + this.activeClass).length === 0) {
        this.$headerSection.addClass("collapsed")
      } else {
        this.$headerSection.removeClass("collapsed")
      }
    }
  },
  firstStateProductLinkClick: function (h) {
    var b = $(h.currentTarget);
    var d = b.closest("ul");
    var c = b.closest(".content").find("." + this.secondState);
    if (h.type === "click" || h.keyCode === 13) {
      h.preventDefault();
      var i, g, f;
      if (d.parent().closest("li").hasClass("strictCategorised")) {
        g = b.index();
        f = c.find("> ul > li").eq(g).find("> ul > li").length;
        if (d.parent().closest("li").hasClass("individualisedSidebars")) {
          i = c.find("> ul > li").eq(g);
          if (i.find("> ul").length === 0) {
            window.location = b.find("a").attr("href");
            return
          }
        } else {
          if (f === 1) {
            i = c.find("> ul > li").eq(g).find("> ul > li").eq(0);
            window.location = i.find("a").attr("href");
            return
          }
        }
        c.find("> ul > li, .productTypeHeading ul li").removeClass(this.activeClass);
        c.find(".productTypeHeading ul li").eq(g).addClass(this.activeClass);
        c.find("> ul > li").eq(g).addClass(this.activeClass)
      } else {
        if (d.parent().closest("li").hasClass("lazyCategorised")) {
          var j = b.closest("li");
          var a = j.data("category");
          if (a === "configured") {
            d.parent().closest("li").addClass(this.configuredCar)
          }
          f = c.find('> ul li[data-category="' + a + '"]').length;
          if (f === 1 && a !== "configured") {
            i = c.find('> ul li[data-category="' + a + '"]').eq(0);
            window.location = i.find("a").attr("href");
            return
          }
          c.find('li[data-category="' + a + '"]').addClass(this.activeClass)
        }
      }
      b.closest(".content").addClass(this.showSecondStateClass + " " + this.transitioning);
      this.equaliseHeights()
    }
  },
  secondStateProductLinkClick: function (d) {
    var a = $(d.currentTarget),
      c = a.data("is-categorised"),
      b = a.parents("aside").length;
    if (c === true || b > 0) {
      a.closest("li").toggleClass(this.activeClass);
      return false
    }
  },
  showFirstState: function (b) {
    b.preventDefault();
    var a = $(b.currentTarget);
    a.closest("." + this.showSecondStateClass).addClass(this.showFirstStateClass)
  },
  showSearchBox: function (d) {
    d.preventDefault();
    var a = this;
    var b = '<div class="searchOverlay" />';
    $(d.currentTarget).toggleClass(this.activeClass);
    if (this.$searchBox.hasClass(this.activeClass)) {
      $(".searchOverlay").on("transitionend webkitTransitionEnd mozTransitionEnd", function (h) {
        if (a.getPropertyName(h) === "opacity") {
          $(h.currentTarget).remove();
          a.$outer.removeClass(a.searchOverlayOpenClass).removeClass(a.searchOverlayCloseClass)
        }
      });
      this.$searchBox.removeClass(this.activeClass);
      this.$outer.addClass(this.searchOverlayCloseClass)
    } else {
      $(b).appendTo(this.$header);
      $(b).insertAfter(this.$header);
      $(".searchOverlay").css("opacity");
      this.$searchBox.addClass(this.activeClass);
      this.$outer.addClass(this.searchOverlayOpenClass);
      var g = this.$header.find("> .inner");
      var c = g.offset().top + g.outerHeight();
      var f = $(document).scrollTop() + $(window).innerHeight();
      if (c > f) {
        $("html, body").animate({
          scrollTop: this.$header.offset().top
        }, 700)
      }
    }
  },
  getPropertyName: function (a) {
    return a.originalEvent.propertyName.replace(/^(-webkit-|-ms-|-moz-)/g, "")
  },
  onTransitionEnd: function (b) {
    var a = this.getPropertyName(b);
    if (a === "max-height" || a === "transform") {
      if ($(b.target).hasClass(this.showFirstStateClass)) {
        $(b.target).addClass(this.transitioning);
        this.onReturnedToFirstState($(b.target))
      }
      if ($(b.target)[0] === this.$headerSection.find("> .inner")[0] && !this.$headerSection.hasClass(this.activeClass)) {
        this.onSectionClosed();
        this.callSubscribers("callAfterHide")
      } else {
        this.callSubscribers("callAfterShow")
      }
      $(b.target).removeClass(this.transitioning);
      this.updateAria()
    }
  },
  onSectionClosed: function () {
    this.$headerSection.find("." + this.activeClass).removeClass(this.activeClass);
    this.restoreToDefault();
    this.$primaryNavHeader.removeClass(this.activeClass);
    this.$navCTAs.removeClass(this.activeClass);
    $("." + this.configuredCar).removeClass(this.configuredCar)
  },
  onReturnedToFirstState: function (b) {
    var a = this;
    b.removeClass(a.showSecondStateClass);
    b.removeClass(a.showFirstStateClass);
    b.removeClass(a.transitioning);
    b.find("." + this.secondState).find("." + this.activeClass).removeClass(this.activeClass)
  },
  closeSecondaryHeader: function (a) {
    this.selectedIndex = undefined;
    if (a.type === "click" || a.keyCode === 13) {
      a.preventDefault();
      this.$headerSection.removeClass(this.activeClass);
      $("html, body").animate({
        scrollTop: 0
      }, 500);
      if ($("html").hasClass("ie8") || $("html").hasClass("ie9")) {
        this.onSectionClosed()
      }
    }
  },
  returnToFirstState: function (a) {
    if (a.type === "click" || a.keyCode === 13) {
      $("." + this.configuredCar).removeClass(this.configuredCar);
      a.preventDefault();
      $("." + this.showSecondStateClass).addClass(this.showFirstStateClass + " " + this.transitioning);
      if ($("html").hasClass("ie8") || $("html").hasClass("ie9")) {
        this.onReturnedToFirstState($("." + this.showSecondStateClass))
      }
      this.equaliseHeights()
    }
  },
  addActiveToForm: function (b) {
    var a = this.$desktopSearchBar.closest("form");
    if ($(b.target).is("input")) {
      if (a.hasClass(this.activeClass)) {
        a.removeClass(this.activeClass)
      } else {
        a.addClass(this.activeClass)
      }
    } else {
      a.removeClass(this.activeClass)
    }
  },
  jumpToSecondState: function () {
    var d;
    if (this.isMobile()) {
      d = this.$headerSection.find("> .inner .secondState").find(".current")
    } else {
      d = this.$headerSection.find("> .inner > ul > li." + this.activeClass).find(".current")
    }
    if (d.length === 1) {
      if (d.parents(".secondState")) {
        var a = d.closest("li.products");
        d.parents("li").addClass(this.activeClass);
        if (a.hasClass("strictCategorised")) {
          var b = d.parent().closest("li").index();
          $(".productTypeHeading ul li").eq(b).addClass(this.activeClass)
        } else {
          var c = d.data("category");
          $(".productTypeHeading").find('ul li[data-category="' + c + '"]').addClass(this.activeClass);
          d.parent().find('[data-category="' + c + '"]').addClass(this.activeClass)
        }
        this.$goToFirstState.focus();
        d.parents(".content").addClass(this.showSecondStateClass)
      }
    }
  },
  configuredCars: function () {
    var c = $.cookie && $.cookie("HONDA_configurator_mainNavigation_cars");
    var f = typeof c !== "undefined" ? JSON.parse(c) : null;
    var e = $("." + this.firstState).find('li[data-category="configured"]');
    var d = $(".configAmount");
    var b = $("." + this.secondState).eq(0).find("> ul");
    var h;
    var g = e.data("review");
    var a = e.data("saved-on");
    if (_.isArray(f) && f.length) {
      e.show();
      h = f.length;
      _.each(f, function (i) {
        if ($(".strictCategorised").length === 0) {
          b.append('<li data-category="configured"><a href="' + i.url + '"><span>' + i.model + '</span><span class="price">' + a + " " + i.date + '</span><img src="' + i.image + '" alt="' + i.model + '" /></a><ul class="linkList"><li><a href="' + i.url + '">' + g + "</a></li></ul></li>")
        }
      })
    } else {
      h = 0
    }
    d.text("(" + h + ")")
  },
  updateAria: function () {
    var b = this;
    var a = this.$headerSection.hasClass(this.activeClass);
    this.$headerSection.attr("aria-hidden", !a);
    this.$primaryNavSections.each(function () {
      var g = $(this);
      var d = g.find("article > .content");
      var f = g.find("." + b.firstState);
      var e = g.find("." + b.secondState);
      var c = g.hasClass(b.activeClass);
      if (a && c) {
        g.attr("aria-hidden", !c);
        if (d.hasClass(b.showSecondStateClass)) {
          f.attr("aria-hidden", true);
          e.attr("aria-hidden", false)
        } else {
          f.attr("aria-hidden", false);
          e.attr("aria-hidden", true)
        }
      } else {
        g.attr("aria-hidden", true);
        f.attr("aria-hidden", true);
        e.attr("aria-hidden", true)
      }
    })
  },
  updateNavAria: function (a) {
    this.$primaryNavLink.find("span").attr("aria-hidden", true);
    $(a.target).closest("li").find("span").attr("aria-hidden", false)
  },
  secondaryResponsiveNav: function (a) {
    a.preventDefault();
    this.$secondaryResponsive.toggleClass(this.activeClass)
  },
  sticky: function () {
    if (!this.isMobile()) {
      var b = $(document).scrollTop(),
        c = this.$secondaryResponsive.offset().top,
        a = $(".sticky");
      if (b >= c) {
        if (!this.isCloned) {
          a = this.$secondaryResponsive.clone();
          this.$secondaryResponsive.after(a.addClass("sticky"));
          this.isCloned = true
        }
        a.addClass(this.activeClass)
      } else {
        a.removeClass(this.activeClass)
      }
    }
  },
  submitSearchForm: function () {
    if ($.trim(this.$desktopSearchBar.val()) === "") {
      this.$desktopSearchBar.focus();
      return false
    }
  },
  configuredImgToSvg: function () {
    if ($("html").hasClass("ie8") || $("html").hasClass("ie9")) {
      return
    }
    $('.hondaHeader .firstState li[data-category="configured"]').each(function () {
      var a = $("img", this);
      var b = a.attr("src");
      if (b.match(/\.svg$/gi)) {
        $.get(b, function (c) {
          var d = $("svg", c);
          if (d.length) {
            a.replaceWith(d)
          }
        }, "xml")
      }
    })
  },
  callBeforeHide: [],
  callAfterHide: [],
  callBeforeShow: [],
  callAfterShow: [],
  callSubscribers: function (b) {
    if (HONDA.ResponsiveHeader[b].length) {
      var a;
      for (a = 0; a < HONDA.ResponsiveHeader[b].length; a++) {
        if ($.isFunction(HONDA.ResponsiveHeader[b][a])) {
          HONDA.ResponsiveHeader[b][a]()
        }
      }
    }
  }
};
/*!
 * Honda platform - Responsive footer
 */
HONDA.ResponsiveFooter = {
  activeClass: "active",
  mobileBreakpoint: 620,
  $headers: $(".responsiveFooter article .footerHeading"),
  $accordion: $(".responsiveFooter .footerAccordion"),
  $backToTop: $(".responsiveFooter .buttonWrap > a"),
  $languageSelector: $(".responsiveFooter .languageSelector"),
  $social: $(".responsiveFooter .social"),
  isMobile: function () {
    return window.innerWidth <= this.mobileBreakpoint
  },
  bind: function () {
    this.$headers.on("click", _.bind(this.toggleAccordion, this));
    this.$backToTop.on("click", _.bind(this.backToTop, this));
    this.$languageSelector.find("p").on("click", _.bind(this.selectLanguage, this))
  },
  toggleAccordion: function () {
    if (this.isMobile()) {
      this.$accordion.toggleClass(this.activeClass)
    }
  },
  backToTop: function (d) {
    d.preventDefault();
    var a = $(d.currentTarget);
    var b = a.attr("href");
    var c = HONDA.analytics.getAnalyticsFromSelector(a);
    $("html, body").animate({
      scrollTop: $(b).offset().top
    }, 1000);
    if (typeof c !== "undefined") {
      HONDA.analytics.push(c)
    }
  },
  selectLanguage: function () {
    this.$languageSelector.toggleClass(this.activeClass)
  },
  socialAmount: function () {
    var a = this.$social.find("li").length;
    this.$social.attr("data-amount", a)
  },
  init: function () {
    this.bind();
    this.socialAmount()
  }
};
/*!
 * Honda platform - Find your Honda centre
 */
var HONDA = window.HONDA || {};
HONDA.geolocation = {
  getPosition: function (b, d) {
    var a = 1000 * 30;
    var e = this.success;
    var c = this.fail;
    if (typeof b === "function") {
      e = b
    }
    if (typeof d === "function") {
      c = d
    }
    window.navigator.geolocation.getCurrentPosition(e, c, {
      enableHighAccuracy: true,
      timeout: a,
      maximumAge: 0
    })
  },
  success: function (a) {
    HONDA.geolocation.response = a
  },
  fail: function (a) {
    HONDA.geolocation.response = a
  }
};
HONDA.Balloon = (function (d) {
  var c = d("#balloon").html(),
    a = {
      balloon: ".balloon",
      message: ".balloonMessage"
    };

  function b(f, e) {
    var g = {
      type: "text",
      message: "",
      callback: undefined
    };
    this.options = d.extend({}, g, e);
    this.balloonType = this.options.type;
    this.message = this.options.message;
    this.placement = this.options.target;
    this.create()
  }
  b.prototype.create = function () {
    this.$elem = d(c);
    this.$elem.addClass(this.balloonType);
    this.$elem.find(a.message).html(this.options.message).end().hide();
    if (this.options.type === "error") {
      this.$elem.insertBefore(this.options.target)
    } else {
      this.$elem.insertAfter(this.options.target)
    }
    this.show();
    if (typeof this.options.callback === "function") {
      this.options.callback()
    }
    return this
  };
  b.prototype.update = function (e) {
    this.$elem.find(this.options.message).html(e);
    return this
  };
  b.prototype.show = function () {
    this.$elem.slideDown(250);
    return this
  };
  b.prototype.hide = function () {
    this.$elem.slideUp(250);
    return this
  };
  b.prototype.disable = function () {
    this.$elem.remove();
    return this
  };
  return b
}(jQuery));
HONDA.findDealer = {
  theSearchField: $("#findDealerSearchField"),
  currentLocationField: $("#findDealerCurrentLocation"),
  theSearchButton: $(".dealerSearch").find('button[type="submit"]'),
  theSearchForm: $(".findDealerSearch").find("form"),
  resetSearchFieldPlaceHolder: function () {
    this.theSearchField.attr("placeholder", this.theSearchField.data("txtenterlocation"))
  },
  geoLocationSuccess: function (a) {
    var b = HONDA.findDealer;
    b.currentLocationField.attr("value", a.coords.latitude + " " + a.coords.longitude);
    b.hideBalloon();
    b.theSearchField.parents("form").submit()
  },
  geoLocationError: function (c) {
    var a = HONDA.findDealer;
    var d = a.theSearchField.data();
    var b = {
      message: c.code === 1 ? d.permissiondenied : d.error,
      code: c.code
    };
    a.handleGeolocationError(a.theSearchField, b);
    a.resetSearchFieldPlaceHolder();
    a.theSearchField.addClass("userDefinedLocation error")
  },
  handleGeolocationError: function (d, c) {
    var b = {
      type: c.code ? "help" : "error",
      message: c.message,
      target: d.parents(".findDealerSearch").find(".dealerSearch .formRow")
    };
    var a = "balloon" + b.type;
    if ($.data(d, a)) {
      $.data(d, a).update(c.message).show()
    } else {
      $.data(d, a, new HONDA.Balloon(d, b))
    }
    if (d.data("balloon_text")) {
      d.data("balloon_text").disable()
    }
    if (Modernizr.geolocation) {
      this.theSearchField.data("geolocationallowed", false).attr("placeholder", this.theSearchField.data("txtenterlocation")).addClass("disallowed").focus()
    }
  },
  userSetGeolocation: function () {
    var a = HONDA.findDealer;
    $(".useMyLocation").on("click", function (b) {
      b.preventDefault();
      a.hideBalloon();
      HONDA.geolocation.getPosition(a.geoLocationSuccess, a.geoLocationError)
    })
  },
  geolocationLink: function (a) {
    if (!a.data("geolocationallowed") || a.data("balloon_text")) {
      return
    }
    var b = {
      type: "text",
      message: '<a href="#" class="useMyLocation locationIco"><span class="text">' + a.data("txtuselocation") + "</span></a>",
      target: a.parents(".formRow"),
      callback: HONDA.findDealer.userSetGeolocation
    };
    if (a.data("txtuselocationexplanation") !== undefined) {
      b.message += "<span class='useMyLocationExplanation'>" + a.data("txtuselocationexplanation") + "</span>"
    }
    a.data("balloon_text", new HONDA.Balloon(a, b))
  },
  isSalesSensitive: function (b, a) {
    return $(b).has().attr("data-" + a)
  },
  convertToBoolean: function (a) {
    return JSON.parse(a)
  },
  updateUserStateAnchors: function (b) {
    var a = $(b).find("a[data-user-state-dealer-url]");
    $(a).attr("href", $(a).data("user-state-dealer-url"))
  },
  appendUserStateAnchors: function (b) {
    var a = $(b).find("a[data-user-state-dealer-id]");
    $(a).each(function () {
      var f = $(this).attr("href"),
        d = $(this).data("user-state-dealer-id"),
        e = "dealer=",
        c = (f.indexOf("?") > 0) ? "&" : "?";
      $(this).attr("href", f + c + e + d)
    })
  },
  updateUserStateHTML: function (b) {
    var a = $(b).find(".userStateUpdateHTML");
    $(a).each(function () {
      var c = $(this);
      $.each($(this).data(), function (d, e) {
        $(c).html(e)
      })
    })
  },
  updateUserStateContainers: function (b, a) {
    $(".userStateHidden").show();
    if (b.data(a) === false) {
      $(".userStateHidden").hide()
    }
  },
  showLastViewedDealer: function () {
    var a = HONDA.findDealer;
    $(HONDA.cookieUserState).on("userStateUpdated", function () {
      var c = $(".getUserState"),
        b = "user-state-dealer-is-sales";
      a.updateUserStateHTML(c);
      a.updateUserStateAnchors(c);
      a.appendUserStateAnchors(c);
      a.updateUserStateContainers(c, b)
    })
  },
  hasDefinedLocation: function () {
    var a = $.trim(this.theSearchField.val());
    if (a === "" || a === this.theSearchField.data("txtcurrentlocation") || a === this.theSearchField.data("txtenterlocation") || a === this.theSearchField.attr("placeholder")) {
      return false
    }
    return true
  },
  hideBalloon: function () {
    var b = $("#findDealerSearchField");
    var c = b.data("balloon_text");
    var a;
    if (Modernizr.geolocation && c) {
      a = (b.val() === "" || b.val() === $("#findDealerSearchField").data("txtcurrentlocation"));
      if (a && b.data("geolocationallowed")) {
        b.removeClass("userDefinedLocation").attr("placeholder", b.data("txt-locating"))
      }
      if (c) {
        c.hide()
      }
    }
  },
  setup: function () {
    var a = this;
    this.currentLocationField.val("");
    if (!Modernizr.input.placeholder) {
      LBI.common.dynamicInputText(this.theSearchField)
    }
    this.theSearchField.on("change", function (d) {
      var c = $(d.target);
      var e = c.data("balloon_text");
      c.addClass("userDefinedLocation");
      if (c.val() === "" && a.theSearchField.data("geolocationallowed") && e) {
        e.show()
      }
    });
    this.theSearchButton.on("click keyup", function (d) {
      if (d.type === "click" || d.keyCode === "13") {
        if (!a.hasDefinedLocation()) {
          d.preventDefault();
          if (Modernizr.geolocation) {
            HONDA.geolocation.getPosition(HONDA.findDealer.geoLocationSuccess, HONDA.findDealer.geoLocationError)
          } else {
            var e = a.theSearchField.data();
            var c = {
              message: e.errorEnterLocation || e.txtenterlocation
            };
            a.handleGeolocationError(a.theSearchField, c)
          }
        }
      }
    });
    if (Modernizr.geolocation) {
      var b = this.theSearchField.data("balloon_text");
      if (this.theSearchField.data("geolocationallowed")) {
        if (b) {
          b.show()
        } else {
          this.geolocationLink(this.theSearchField)
        }
      }
    }
  },
  init: function () {
    if (document.getElementById("findDealerSearchField")) {
      this.setup()
    }
    this.showLastViewedDealer()
  }
};
HONDA.dealerCheckbox = {
  classes: {
    customCheckbox: ".cc",
    elemsRow: ".formRow",
    elemsContainer: ".formField",
    ccInput: "input.cc",
    selected: "ccSelected",
    ccFocused: "ccFocused"
  },
  rowSet: function (c) {
    var e = this;
    var d = $(e.classes.elemsContainer);
    var g, a, f;

    function b() {
      a = Math.max(a, $(this).find("label").height())
    }
    if (!d.parents(".formBuilder").length) {
      for (g = 1; g < d.length; g += c) {
        f = d.slice(g, g + c);
        a = 0;
        f.each(b).find("label").css("min-height", a)
      }
    }
  },
  setup: function () {
    var a = this;
    if (!HONDA.is.mobile()) {
      HONDA.dealerCheckbox.rowSet(3)
    } else {
      if (HONDA.is.mobile()) {
        HONDA.dealerCheckbox.rowSet(2)
      }
    }
    $(a.classes.elemsContainer).each(function () {
      $(this).children(a.classes.customCheckbox).next("label").removeClass(a.classes.selected);
      $(this).children(a.classes.customCheckbox + ":checked").next("label").addClass(a.classes.selected);
      if ($(this).children().hasClass(a.classes.selected)) {
        $(this).addClass("ccContainer")
      }
    })
  },
  run: function () {
    var a = this;
    $(a.classes.elemsContainer).click(function () {
      var b = $(this);
      b.children("label").removeClass(a.classes.selected);
      b.children(a.classes.customCheckbox + ":checked").next("label").addClass(a.classes.selected);
      if ($(this).children().hasClass(a.classes.selected)) {
        $(this).addClass("ccContainer")
      } else {
        $(this).removeClass("ccContainer")
      }
    });
    $(a.classes.ccInput).focus(function () {
      $(this).parent().addClass(a.classes.ccFocused)
    });
    $(a.classes.ccInput).blur(function () {
      $(this).parent().removeClass(a.classes.ccFocused)
    })
  },
  init: function () {
    var a = this;
    if ($(a.classes.elemsContainer + " " + a.classes.customCheckbox).length) {
      HONDA.dealerCheckbox.setup();
      HONDA.dealerCheckbox.run()
    }
  }
};
/*!
 * Honda platform - Find your Honda centre - Results
 */
var HONDA = window.HONDA || {};
HONDA.resultsListView = {
  config: {
    module: ".dealerResultsList",
    accordion: ".accordionContact"
  },
  enableAccordion: function () {
    $(this.config.accordion).each(function () {
      var a = $(this).data("plugin_accordion");
      a.enable()
    });
    return this
  },
  disableAccordion: function () {
    $(this.config.accordion).each(function () {
      var a = $(this).data("plugin_accordion");
      a.disable()
    });
    return this
  },
  viewportResizeHandler: function () {
    if (HONDA.is.mobile()) {
      this.enableAccordion()
    } else {
      this.disableAccordion()
    }
    return this
  },
  addEvents: function () {
    $(document).on("resize.viewport", this.viewportResizeHandler.bind(this));
    $(document).on("hide.accordion", this.viewportResizeHandler.bind(this));
    return this
  },
  setup: function () {
    this.addEvents();
    $(this.config.accordion).accordion({
      firstOpen: false
    });
    if (!HONDA.is.mobile()) {
      $(document).trigger("hide.accordion")
    }
    if ($("html").hasClass("ie8")) {
      $(".dealerResult:even").addClass("odd")
    }
  },
  init: function () {
    if (document.querySelectorAll(this.config.module).length > 0) {
      this.setup()
    }
  }
};
HONDA.getMoreResults = {
  config: {
    RESULTS_PER_PAGE: 5,
    showMore: ".showMore, .showMoreResults",
    showMoreLink: ".showMoreLink",
    showLessLink: ".showLessLink",
    dealerList: $("#dealerSearchResultsList"),
    newResults: ".newResults"
  },
  getResults: function (b) {
    var a = this;
    var c = b.data();
    var d = $.ajax({
      url: c.moreresults,
      data: {
        page: c.page
      },
      dataType: "html"
    });
    d.done(function (f) {
      var e = $(f).data();
      var g = parseInt(e.page, 10) + 1;
      a.addResults(f);
      a.updatePagination(e.resultsonnextpage, g)
    })
  },
  addResults: function (b) {
    if (b) {
      var a = $(b).filter("div").css("opacity", "0");
      var c = $(this.config.showMore);
      c.before(a);
      this.config.dealerList.trigger("resultsUpdated", a.find(".dealerResult:first").data("dealerid"));
      if ($(this.config.showMore).hasClass("showMoreResults")) {
        c.remove();
        this.init()
      }
      this.showResults(a)
    } else {
      this.showResults($(this.config.newResults).css("opacity", "0"))
    }
  },
  updatePagination: function (a, c) {
    var b = Number(a);
    var d = $(this.config.showMoreLink);
    if (b === 0) {
      d.hide()
    } else {
      d.data("page", c);
      if (b < this.config.RESULTS_PER_PAGE) {
        d.find(".more").html(b)
      }
    }
    return this
  },
  showResults: function (b) {
    var a = HONDA.is.mobile();
    if (a) {
      b.find(".accordionContact").accordion({
        firstOpen: false
      })
    }
    b.css("display", "block");
    b.animate({
      opacity: 1
    }, 500);
    if ($("html").hasClass("ie8") && $(".showMoreResults").length > 0) {
      HONDA.searchResults()
    }
  },
  init: function () {
    var a = this;
    $(a.config.showMoreLink).on("click", function (b) {
      b.preventDefault();
      a.getResults($(this));
      if ($(this).data("analytics")) {
        var c = HONDA.analytics.getAnalyticsFromSelector($(this));
        HONDA.analytics.push(c)
      }
    })
  }
};
/*!
 * Honda platform - Dealer details page
 */
var HONDA = window.HONDA || {};
HONDA.dealerDetail = {
  config: {
    desktopView: false,
    mapAccordion: ".accordionShowMap"
  },
  classes: {
    mapAccordion: ".accordionShowMap",
    servicesAccordion: ".accordionServices",
    dealerMap: ".dealerMap"
  },
  selectors: {},
  disableMapAccordion: function () {
    var a = $(this.config.mapAccordion).data("plugin_accordion");
    a.disable();
    $(this.classes.dealerMap).trigger("showMap");
    this.config.desktopView = true;
    return this
  },
  viewportResizeHandler: function () {
    if ($(window).width() < 621) {
      this.disableMapAccordion()
    }
    return this
  },
  addEvents: function () {
    var a = this;
    $(this.classes.dealerMap).on("showMap", function () {
      $(this).maps({
        disableMarkerInteraction: true
      })
    });
    $(this.classes.dealerMap).on("focus", function () {
      $(this).children().children().first().children().trigger("click")
    });
    $(document).on("resize.viewport", this.viewportResizeHandler.bind(this));
    $(this.config.mapAccordion).on("open.accordion", function () {
      $(a.classes.dealerMap).trigger("showMap")
    });
    return this
  },
  setup: function () {
    this.addEvents();
    this.selectors.mapAccordion.accordion({
      firstOpen: HONDA.is.mobile(),
      callback: function () {
        if (HONDA.is.mobile()) {
          $(HONDA.dealerDetail.classes.dealerMap).trigger("showMap")
        }
      }
    });
    this.selectors.servicesAccordion.accordion();
    return this
  },
  init: function () {
    this.selectors.mapAccordion = $(this.classes.mapAccordion);
    this.selectors.servicesAccordion = $(this.classes.servicesAccordion);
    if ($(window).width() < 621) {
      this.selectors.mapAccordion.find(".accordionHeading .accordionToggle").addClass("expanded")
    }
    if (this.selectors.mapAccordion.length || this.selectors.servicesAccordion.length) {
      this.setup()
    }
  }
};
/*!
 * Honda platform - YouTube player
 */
var HONDA = window.HONDA || {};

function onYouTubePlayerAPIReady() {
  if ($("html").hasClass("video") || ($("html").hasClass("no-video") && HONDA.is.minimumFlashInstalled())) {
    $("body").addClass("videoReady");
    HONDA.YouTubePlayer.isReady = true;
    HONDA.YouTubePlayer.onReady()
  }
}
HONDA.YouTubePlayer = (function () {
  var q = {
    playing: "video-play",
    paused: "video-pause",
    ended: "video-end",
    cued: "video-cued",
    stateChange: "state-change",
    youtubeready: "youtubeready"
  };
  var m = $();
  var k = {
    wmode: "opaque",
    theme: "light",
    modestbranding: 1,
    showinfo: 0,
    rel: 0,
    iv_load_policy: 3
  };
  var g = {
    singleVideoInstance: false,
    resizeVideoProportionally: false,
    enableTimeline: false,
    suggestedQuality: "default"
  };
  var b = {
    playing: "Play",
    paused: "Pause",
    ended: "Complete"
  };
  var c = function (r) {
    m.find(".video-player-wrapper").not(r).each(function () {
      var s = $(this).data("video-player");
      if (s && !s.isPlayerState("CUED")) {
        s.reset()
      }
    })
  };
  var o = function (r) {
    _.each(m, function (s) {
      var t = null;
      if ($(s).data("video-player") !== undefined) {
        if ($(s).find(".video-player-wrapper").eq(0)[0] !== r[0]) {
          t = $(s).data("video-player");
          if (t && t.isPlayerState("PLAYING")) {
            t.player.pauseVideo()
          }
        }
      } else {
        $(s).find(".video-player-wrapper").not(r).each(function () {
          t = $(this).data("video-player");
          if (t && t.isPlayerState("PLAYING")) {
            t.player.pauseVideo()
          }
        })
      }
    })
  };
  var f = function (u, t) {
    var r = null;
    if (u.find(".singleVideoInstance").length) {
      var s = u.find(".singleVideoInstance");
      r = t.clone();
      r.find(".imgArea, .panel-image").remove();
      s.append(r)
    }
    return r
  };
  var a = function (t, r, s) {
    this.$wrapper = $(t);
    this.movie = $(t).data("video-url");
    this.videoId = $(t).data("video-id");
    this.config = r.api;
    this.player = null;
    this.currentTime = 0;
    this.$module = s;
    this.$singleVideoSource = null;
    if (_.isString(this.movie) || _.isString(this.videoId)) {
      this.create()
    }
  };
  a.prototype = {
    create: function () {
      var r = this;
      var s = this.$module.data("video-options");
      this.player = new YT.Player(this.$wrapper.find(".video-player")[0], {
        playerVars: r.config,
        events: {
          onReady: function (t) {
            if (r.$wrapper.find(".imgArea").length) {
              r.$wrapper.find(".imgArea").hide()
            }
            if (!s.module.singleVideoInstance || r.$singleVideoSource !== null) {
              r.cueVideo()
            }
            if (s.module.resizeVideoProportionally) {
              r.resizeVideoProportionally(r.$wrapper.find(".video-player"))
            }
            r.$wrapper.trigger("video-ready")
          },
          onStateChange: function (u) {
            var t = u.target.getPlayerState();
            r.sendAnalytics(t);
            switch (t) {
              case YT.PlayerState.BUFFERING:
                if (HONDA.is.iOS("ipad")) {
                  c(r.$wrapper)
                }
                break;
              case YT.PlayerState.PLAYING:
                o(r.$wrapper);
                r.$wrapper.trigger("video-play");
                break;
              case YT.PlayerState.PAUSED:
                r.setElapsedTime();
                r.$wrapper.trigger("video-pause");
                break;
              case YT.PlayerState.ENDED:
                r.setElapsedTime();
                r.$wrapper.trigger("video-end");
                break;
              case YT.PlayerState.CUED:
                r.$wrapper.trigger("video-cued");
                break
            }
            r.$wrapper.trigger(q.stateChange)
          }
        }
      });
      if (s.module.enableTimeline) {
        this.videoTimeline = new HONDA.YouTubePlayer.Timeline({
          player: this.player
        })
      }
    },
    isVisible: function () {
      return $(this.player.getIframe()).is(":visible")
    },
    sendAnalytics: function (v) {
      var r = this.$wrapper.attr("data-video-event-label");
      if (typeof r === "string") {
        var u = null;
        switch (v) {
          case YT.PlayerState.PLAYING:
            u = "Start";
            break;
          case YT.PlayerState.ENDED:
            u = "Complete";
            break
        }
        if (typeof u === "string") {
          HONDA.analytics.push({
            event: "Video",
            eventCategory: "Video",
            eventLabel: r,
            eventAction: u
          })
        }
      } else {
        var t = $.extend({}, HONDA.analytics.getEventData(this.$wrapper));
        var s = null;
        if (this.isVisible() && !$.isEmptyObject(t)) {
          switch (v) {
            case YT.PlayerState.PLAYING:
              s = b.playing;
              break;
            case YT.PlayerState.PAUSED:
              s = b.paused;
              break;
            case YT.PlayerState.ENDED:
              s = b.ended;
              break
          }
          if (typeof s === "string") {
            if (typeof t.eventAction === "string" && $.trim(t.eventAction) !== "") {
              t.eventAction += " | " + s
            } else {
              t.eventAction = s
            }
            HONDA.analytics.push(t)
          }
        }
      }
    },
    setElapsedTime: function (r) {
      if (_.isUndefined(r)) {
        r = this.$wrapper
      }
      var s = parseFloat(this.player.getCurrentTime()).toFixed(2);
      r.data("elapsed_time", s)
    },
    getElapsedTime: function (r) {
      if (_.isUndefined(r)) {
        r = this.$wrapper
      }
      return _.isUndefined(r.data("elapsed_time")) ? 0 : r.data("elapsed_time")
    },
    resizeVideo: function () {
      var x = this.$wrapper.find("iframe");
      if (x.length) {
        var t = this.$wrapper.width();
        var w = this.$wrapper.height();
        var s = "";
        var v = "";
        var u = "";
        if (!HONDA.is.touchDevice() && (HONDA.is.tablet() || HONDA.is.desktop())) {
          if (_.isUndefined(x.data("video-size-ratio"))) {
            x.data("video-size-ratio", x.width() / x.height());
            x.removeAttr("width height")
          }
          var r = x.data("video-size-ratio");
          var y = w * r > t;
          s = Math.round(y ? t : w * r);
          v = Math.round(y ? t / r : w);
          u = Math.round(y ? (w - v) / 2 : 0)
        }
        x.css({
          width: s,
          height: v,
          "margin-top": u,
          "margin-bottom": u
        })
      }
    },
    resizeVideoProportionally: function (t) {
      var s = t;
      var r = ((s.attr("height") && !isNaN(parseInt(s.attr("height"), 10)))) ? parseInt(s.attr("height"), 10) : s.height(),
        u = !isNaN(parseInt(s.attr("width"), 10)) ? parseInt(s.attr("width"), 10) : s.width(),
        v = r / u;
      s.css({
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0"
      });
      s.parent(".video-player-wrapper").css({
        padding: (v * 100) + "% 0 0 0",
        position: "relative",
        width: "100%"
      })
    },
    isPlayerState: function (r) {
      try {
        return this.player && this.player.getPlayerState() === (isNaN(r) ? YT.PlayerState[r] : r)
      } catch (s) {
        return false
      }
    },
    restartVideo: function () {
      if (!HONDA.is.minimumFlashInstalled()) {
        if ($("html").hasClass("ie8")) {
          this.player.destroy();
          this.create()
        } else {
          this.player.pauseVideo()
        }
      } else {
        this.cueVideo()
      }
    },
    cueVideo: function () {
      var r = this.$module.data("video-options");
      if (this.videoId) {
        this.player.cueVideoById({
          videoId: this.videoId,
          startSeconds: this.currentTime,
          suggestedQuality: r.module.suggestedQuality
        })
      } else {
        this.player.cueVideoByUrl({
          mediaContentUrl: this.movie,
          startSeconds: this.currentTime,
          suggestedQuality: r.module.suggestedQuality
        })
      }
    },
    reset: function (t, r) {
      if (!t) {
        this.currentTime = this.player.getCurrentTime()
      }
      if (r instanceof Object) {
        var s = $.extend(true, this.$module.data("video-options"), r);
        this.config = s.api;
        this.$module.data("video-options", s)
      }
      this.destroy();
      this.create()
    },
    setSource: function (t) {
      var s = t.data("video-url");
      var v = t.data("video-id");
      var r = this.$module.data("video-options");
      if (typeof s === "string") {
        this.movie = s
      }
      if (typeof v === "string") {
        this.videoId = v
      }
      if (!_.isNull(this.$singleVideoSource)) {
        this.setElapsedTime(this.$singleVideoSource)
      }
      var u = parseFloat(this.getElapsedTime(t), 10);
      this.$singleVideoSource = t;
      if (($("html").hasClass("ie8") || $("html").hasClass("ie9") || $("html").hasClass("ie10")) && !HONDA.is.minimumFlashInstalled()) {
        this.player.destroy();
        f(this.$module, t);
        this.create()
      } else {
        if (this.videoId) {
          if (_.isFunction(this.player.cueVideoById)) {
            this.player.cueVideoById({
              videoId: this.videoId,
              startSeconds: u,
              suggestedQuality: r.module.suggestedQuality
            })
          }
        } else {
          if (_.isFunction(this.player.cueVideoByUrl)) {
            this.player.cueVideoByUrl({
              mediaContentUrl: this.movie,
              startSeconds: u,
              suggestedQuality: r.module.suggestedQuality
            })
          }
        }
      }
    },
    destroy: function () {
      if (this.videoTimeline instanceof HONDA.YouTubePlayer.Timeline) {
        this.videoTimeline.destroy();
        delete this.videoTimeline
      }
      if (this.player && this.player.c) {
        this.player.destroy()
      }
    }
  };

  function i() {
    if (!$("html").hasClass("ie8") && !HONDA.is.touchDevice()) {
      $(".videoPreview").each(function () {
        var r = $(this).data("video-id");
        if (r) {
          $(this).data("property", {
            videoURL: r,
            containment: "self",
            startAt: 0,
            showControls: false,
            stopMovieOnBlur: false,
            mute: true,
            autoPlay: true,
            loop: true,
            opacity: 1
          }).YTPlayer()
        }
      })
    }
  }
  var h = function () {
    m.each(function () {
      var v = $(this);
      var u = v.find(".video-player-wrapper");
      var t = v.data("video-options");
      if (u.length) {
        if (t.module.singleVideoInstance) {
          var s = $("<div class='singleVideoInstance'></div>");
          v.prepend(s);
          var r = f(v, u.eq(0));
          v.data("video-player", new a(r[0], t, v))
        } else {
          u.each(function () {
            if (_.isUndefined($(this).data("video-player"))) {
              $(this).data("video-player", new a(this, t, v))
            }
          })
        }
        v.trigger("video-ready")
      }
    });
    i();
    $(document).trigger(q.youtubeready)
  };
  var e = function () {
    $("<script />").attr("src", "https://www.youtube.com/iframe_api").insertBefore("script:first")
  };
  var d = function (s) {
    var t = k;
    var r = g;
    if (_.isObject(s)) {
      if (_.isObject(s.api)) {
        t = $.extend({}, k, s.api)
      }
      if (_.isObject(s.module)) {
        r = $.extend({}, g, s.module)
      }
    }
    if (HONDA.is.touchDevice()) {
      t.controls = 1
    }
    return {
      api: t,
      module: r
    }
  };
  var l = {
    onInterval: null,
    onComplete: null,
    onFound: null,
    onBeforeFound: null,
    beforeFoundTime: null,
    onBeforeComplete: null,
    beforeCompleteTime: null,
    player: null,
    markerContext: null,
    markerClassName: "videoMarker",
    markerNameClassName: "videoMarkerName",
    markerSecondsData: "video-marker-seconds",
    timelineClassName: "videoTimeline",
    currentTimeClassName: "videoCurrentTime"
  };

  function n(r) {
    return typeof r === "number" && r > 0 ? r / 1000 : null
  }
  var j = function (r) {
    this.settings = $.extend({}, l, r);
    this.$timeline = null;
    this.$currentTime = null;
    this.delay = 100;
    this.markers = {};
    this.currentFoundIndex = null;
    this.currentBeforeFoundIndex = null;
    this.settings.beforeFoundTime = n(this.settings.beforeFoundTime);
    this.settings.beforeCompleteTime = n(this.settings.beforeCompleteTime);
    this.hasBeforeCompleteRun = false;
    if (this.settings.player instanceof YT.Player) {
      this.settings.player.addEventListener("onStateChange", this.stateChange.bind(this))
    }
  };
  j.prototype = {
    isVisible: function () {
      return $(this.settings.player.getIframe()).is(":visible")
    },
    stateChange: function () {
      switch (this.settings.player.getPlayerState()) {
        case YT.PlayerState.CUED:
          this.setup();
          break;
        case YT.PlayerState.PLAYING:
          this.start();
          break;
        case YT.PlayerState.ENDED:
        case YT.PlayerState.BUFFERING:
          this.reset();
          break;
        default:
          this.stop()
      }
    },
    setup: function () {
      this.markers = {};
      this.markers.length = 0;
      this.currentFoundIndex = null;
      this.currentBeforeFoundIndex = null;
      if (typeof this.settings.onFound === "function") {
        this.getMarkers()
      }
      this.createTimeline()
    },
    createTimeline: function () {
      if (this.$timeline instanceof jQuery) {
        this.$timeline.remove()
      }
      this.$timeline = $("<div />").addClass(this.settings.timelineClassName);
      this.$currentTime = $("<div />").addClass(this.settings.currentTimeClassName).appendTo(this.$timeline);
      this.$timeline.insertAfter(this.settings.player.getIframe())
    },
    getMarkers: function () {
      var r = this;
      $("[data-" + this.settings.markerSecondsData + "]", this.settings.markerContext).each(function (s) {
        var t = $(this).data(r.settings.markerSecondsData);
        if (typeof t === "number") {
          r.markers[t] = {
            index: s,
            seconds: t
          };
          r.markers.length = s + 1
        }
      })
    },
    setCurrentTimePosition: function (t) {
      var s = this.settings.player.getDuration();
      var r = LBI.common.convert.currentTimeToDurationPercentage(t, s);
      if (r > 100) {
        r = 100
      }
      this.$currentTime.css("width", r === 0 ? "" : r + "%")
    },
    animate: function () {
      var w = this.settings.player.getDuration();
      var v = this.settings.player.getCurrentTime();
      this.setCurrentTimePosition(v);
      if (v >= w) {
        this.stop();
        if (typeof this.settings.onComplete === "function") {
          this.settings.onComplete()
        }
      } else {
        if (typeof this.settings.onInterval === "function") {
          this.settings.onInterval()
        }
        if (typeof this.settings.onBeforeComplete === "function" && typeof this.settings.beforeCompleteTime === "number" && this.hasBeforeCompleteRun === false) {
          if (v > w - this.settings.beforeCompleteTime && v < w) {
            this.hasBeforeCompleteRun = true;
            this.settings.onBeforeComplete()
          }
        }
        if (this.markers.length) {
          var s = null;
          if (typeof this.settings.onBeforeFound === "function" && typeof this.settings.beforeFoundTime === "number") {
            var u = v;
            var r = u + this.settings.beforeFoundTime;
            var t = null;
            for (t in this.markers) {
              if (this.markers.hasOwnProperty(t) && t !== "length") {
                if (this.markers[t].seconds > u && this.markers[t].seconds <= r) {
                  s = this.markers[t];
                  break
                }
              }
            }
            if (s instanceof Object && s.index !== this.currentBeforeFoundIndex) {
              this.currentBeforeFoundIndex = s.index;
              this.settings.onBeforeFound()
            }
          }
          if (typeof this.settings.onFound === "function") {
            s = this.markers[parseInt(v, 10)];
            if (s instanceof Object && s.index !== this.currentFoundIndex) {
              this.currentFoundIndex = s.index;
              this.stop();
              this.settings.onFound(s);
              return
            }
          }
        }
        this.animRequestID = window.requestAnimationFrame(this.animate.bind(this))
      }
    },
    start: function () {
      this.stop();
      if (this.isVisible()) {
        this.animRequestID = window.requestAnimationFrame(this.animate.bind(this))
      }
    },
    stop: function () {
      window.cancelAnimationFrame(this.animRequestID)
    },
    reset: function () {
      this.stop();
      this.currentFoundIndex = null;
      this.currentBeforeFoundIndex = null;
      this.hasBeforeCompleteRun = false;
      this.setCurrentTimePosition(0)
    },
    destroy: function () {
      if (this.$timeline instanceof jQuery) {
        this.stop();
        this.$timeline.remove()
      }
    }
  };
  var p = function (s, r) {
    if (s instanceof jQuery && s.length) {
      r = d(r);
      s.data("video-options", r);
      m = m.add(s)
    }
    if (this.isReady) {
      h()
    } else {
      e()
    }
  };
  return {
    events: q,
    isReady: false,
    onReady: h,
    Timeline: j,
    init: p
  }
}());
/*!
 * Honda platform - Cookies alert
 */
var HONDA = window.HONDA || {};
HONDA.cookiesAlert = {
  cookieName: "hondaCookieAcceptance",
  wrapperSelector: "#outer",
  billBoardID: "pageBillboard",
  snippetSelector: "#cookiesBillboard",
  triggerSelector: "#cookiesConfirm",
  callBeforeHide: [],
  callAfterHide: [],
  callBeforeShow: [],
  callAfterShow: [],
  callSubscribers: function (b) {
    if (HONDA.cookiesAlert[b].length) {
      var a;
      for (a = 0; a < HONDA.cookiesAlert[b].length; a++) {
        if ($.isFunction(HONDA.cookiesAlert[b][a])) {
          HONDA.cookiesAlert[b][a]()
        }
      }
    }
  },
  removeAlert: function () {
    var a = this;
    this.callSubscribers("callBeforeHide");
    this.theBillboard.slideUp("slow", function () {
      $("#" + a.billBoardID).remove();
      a.callSubscribers("callAfterHide")
    })
  },
  insertAlert: function () {
    var b = this;
    if ($(this.snippetSelector).length > 0) {
      this.theBillboard = $('<div id="' + this.billBoardID + '"></div>');
      $(this.wrapperSelector).prepend(this.theBillboard);
      this.theBillboard.hide();
      var a = $(this.snippetSelector).html();
      this.theBillboard.prepend(a);
      this.callSubscribers("callBeforeShow");
      this.theBillboard.slideDown("slow", function () {
        b.open = true;
        b.callSubscribers("callAfterShow")
      });
      $(this.triggerSelector).click(function (c) {
        c.preventDefault();
        HONDA.cookiesAlert.setConfirmationCookie();
        HONDA.cookiesAlert.removeAlert();
        b.setAnalytics()
      })
    }
  },
  hasConfirmationCookie: function () {
    var a = $.cookie(this.cookieName);
    if (a !== null && a !== "") {
      return true
    }
    return false
  },
  setConfirmationCookie: function () {
    var a = HONDA.getDomain.primaryDomain();
    $.cookie(this.cookieName, "true", {
      expires: 365,
      path: "/",
      domain: a
    })
  },
  setAnalytics: function () {
    var a = HONDA.analytics.getAnalyticsFromSelector($(this.triggerSelector));
    if (a !== undefined) {
      this.sendAnalytics(a)
    }
  },
  sendAnalytics: function (a) {
    HONDA.analytics.push(a)
  },
  init: function () {
    if (!this.hasConfirmationCookie()) {
      this.insertAlert()
    }
  }
};
/*!
 * Honda platform - Page introduction
 */
var HONDA = window.HONDA || {};
HONDA.pageIntroduction = {
  toggle: {
    config: {
      template: "#tpl-pageIntroNavToggle",
      module: ".pageIntroNav",
      toggleOpen: "toggleOpen"
    },
    setup: function () {
      var b = this;
      var a = $(this.config.template).html();
      this.config.theTemplate = $(a);
      $(this.config.module).after(this.config.theTemplate);
      this.config.anchor = this.config.theTemplate.find("a");
      this.config.anchor.on("click", function (c) {
        c.preventDefault();
        $(b.config.module).slideToggle();
        $(this).toggleClass(b.config.toggleOpen)
      })
    },
    init: function () {
      if ($(this.config.module).length > 0) {
        this.setup()
      }
    }
  }
};
/*!
 * Honda platform - Sitemap Link List
 */
HONDA.sitemapLinkList = (function () {
  var d = $(".sitemapLinkList .nested");
  var b = function () {
    var e = d.find(".level2:last-child");
    e.each(function (f, g) {
      var j = $(g);
      var h = j.find(".level3");
      if (h.length < 1) {
        j.addClass("js-finalChild")
      } else {
        h.last().addClass("js-finalChild")
      }
    })
  };
  var a = function () {
    if ($("html").hasClass("ie8")) {
      d.find(".level2:nth-child(4n+1)").addClass("nth-childPatch")
    }
  };
  var c = function () {
    a();
    b()
  };
  return c
}());
/*!
 * Honda platform - Product Division Navigation
 */
var HONDA = window.HONDA || {};
HONDA.productDivisionNavigation = {
  list: $(".productDivNav ul"),
  length: $(".productDivNav ul li").length,
  count: 0,
  init: function () {
    var a = this;
    $(".productDivNav.headerTile ul.tiles li.hiddenTile").hover(function () {
      $(".productDivNav.headerTile ul.tiles li").addClass("noOpacity")
    }, function () {
      $(".productDivNav.headerTile ul.tiles li").removeClass("noOpacity")
    });
    if ($("html").hasClass("ie8")) {
      a.ieMarginFix()
    }
  },
  ieMarginFix: function () {
    var b = $(".productDivNav"),
      c = $(".productDivNav.twoColumnTiles"),
      a = $(".productDivNav.hiddenHeader");
    b.find("ul.tiles li:nth-child(3n+1)").addClass("nthChild3n1");
    b.find("ul.tiles li:nth-child(3n+2)").addClass("nthChild3n2");
    c.find("ul.tiles li:nth-child(3n+2)").addClass("nthChild3n2");
    c.find("ul.tiles li:nth-child(2n+1)").addClass("nthChild2n1");
    a.find("ul.tiles li:nth-child(3n+2)").addClass("nthChild3n2");
    a.find("ul.tiles li:nth-child(3n+3)").addClass("nthChild3n3");
    b.find("ul.addtionalLinks li:nth-child(2)").addClass("linkDivider");
    b.find("ul.addtionalLinks li:nth-child(3)").addClass("linkDivider");
    b.find("ul.addtionalLinks li:nth-child(3n+2)").addClass("nthChild3n2")
  },
  flipMode: function () {
    var a = this;
    a.list.find("li").eq(a.count).find(".tile").addClass("flipNow");
    window.setTimeout(function () {
      a.list.find("li").eq(a.count).find(".tile").removeClass("flipNow");
      a.count++;
      a.counterFlip()
    }, 300)
  },
  counterFlip: function () {
    var a = this;
    if (a.count === a.length) {
      a.count = 0;
      window.setTimeout(function () {
        a.flipMode()
      }, 5000)
    } else {
      window.setTimeout(function () {
        a.flipMode()
      }, 1100)
    }
  }
};
/*!
 * Honda platform - Test Drive - Redirect
 */
var HONDA = window.HONDA || {};
HONDA.foundDealerRedirect = (function () {
  var a = $(".dealerSearch").find(".iconCta");
  var d = false;
  if ($("html").hasClass("ie8") || $("html").hasClass("ie9")) {
    d = true
  }
  var c = function () {
    a.find("a").each(function () {
      var e = $(this).attr("href");
      var f;
      if (d) {
        f = "http://" + document.domain + "/" + e
      } else {
        f = "http://" + document.domain + e
      }
      $(this).attr("href", f)
    })
  };
  var b = function () {
    c()
  };
  return {
    init: b
  }
}());
/*!
 * Honda platform - Test Drive - Book online
 */
HONDA.bookTestDriveOnline = (function () {
  var b = $("#bookTestDrive");
  var a = "required";
  if (b.length) {
    b.find(".btn:last-child").click(function () {
      $("#emailRequired").addClass(a)
    });
    b.find(".btn:first-child").click(function () {
      $("#emailRequired").removeClass(a)
    })
  }
}());
HONDA.BookTestDriveConfirmation = (function () {
  var d = $(".chooseBookConfirmation");
  var b = d.find(".selectedDealerDetails");
  var a = d.find(".rescheduleTest");
  var c = 700;

  function e(f) {
    var g = b.offset().top;
    f.preventDefault();
    if ($(document).scrollTop() > g) {
      $("html, body").animate({
        scrollTop: g
      }, c)
    }
  }
  return {
    init: function () {
      if (d.length) {
        a.on("click", ".secondaryCta a", _.bind(e))
      }
    }
  }
}());
/*!
 * Honda platform - Order a brochure
 */
var HONDA = window.HONDA || {};
HONDA.orderBrochure = (function () {
  var b = $(".orderBrochure");
  var f = '<div class="formField formSummary"><div class="heading"><span class="title">{TITLE}</span></div><div class="content"><p class="sessioncamhidetext">{CONTENT}</p><a href="#" class="showEdit"><span>{EDIT}</span></a></div></div>';
  var d = "select, input[type=text], textarea";
  var g = 350;
  var c = ["salutationSelectField", "name1TextField", "name2TextField", "name3TextField", "title", "firstName", "middleName", "lastName"];
  var e = ["title", "firstName", "middleName", "lastName", "address", "city", "email", "phone", "postcode", "country", "phoneNumber", "emailAddress"];
  var a = function (k, j) {
    var i = this;
    if (j) {
      this.type = j;
      this.cookieName = "HONDA_brochure_" + j;
      this.hasCookieData = $.cookie(this.cookieName) ? true : false;
      this.$wrapper = k;
      this.$heading = k.find("[data-summary-heading]");
      this.$form = k.find("form");
      this.$accordions = k.find("form .accordionForm");
      this.$submitButton = k.find("form .submitContainer :submit");
      this.$summaryView = $(f);
      this.$sections = $();
      if (j === "download") {
        this.$downloadMask = k.find(".blockingMask");
        this.$downloadLinks = k.find(".downloadLink a")
      }
      if (j === "post") {
        this.brochuresSelected = []
      }
      if (this.$form.length) {
        if (j === "download") {
          i.$sections = k.find("form .formField").closest(".section");
          this.enableDownloadLinks(false)
        } else {
          i.$sections = k.find("form .formField:not(.formFieldRecaptcha)").closest(".section")
        }
        this.setup()
      } else {
        if (j === "download") {
          this.enableDownloadLinks(true)
        }
      }
    }
  };
  a.prototype = {
    setCookieData: function () {
      var i = {};
      this.$form.find(":input:not(button, [type=hidden])").each(function () {
        var l = $(this);
        var m = this.tagName.toLowerCase();
        var n = m === "input" ? this.type : "";
        var k = this.type === "checkbox" && l.parents(".marketingOptInOut").length === 1;
        var o = "";
        if ($.trim(this.id) !== "" && !k) {
          if (m === "textarea") {
            o = l.html()
          } else {
            if (m === "input" && (n === "checkbox" || n === "radio")) {
              o = l.prop("checked")
            } else {
              o = this.value
            }
          }
          i[this.id] = o
        }
      });
      var j = {
        path: "/"
      };
      if (window.location.protocol === "https:") {
        j.secure = true
      }
      $.cookie(this.cookieName, JSON.stringify(i), j)
    },
    getCookieData: function () {
      var i = this;
      var j = $.cookie(this.cookieName);
      if (j) {
        j = JSON.parse(j);
        _.each(j, function (o, m) {
          o = _.isString(o) ? $.trim(o) : o;
          if ($.trim(m) !== "") {
            var k = i.$form.find("#" + m);
            k = i.cleanIdSelectorWithFullStops(k, m);
            if (k.length) {
              var l = k[0].tagName.toLowerCase();
              var n = l === "input" ? k[0].type : "";
              if (l === "textarea") {
                k.html(o)
              } else {
                if (l === "input" && (n === "checkbox" || n === "radio")) {
                  k.prop("checked", o)
                } else {
                  k.val(o)
                }
              }
            }
          }
        })
      }
    },
    cleanIdSelectorWithFullStops: function (j, k) {
      if (k.indexOf(".") !== -1) {
        var i = "[id='" + k + "']";
        j = $(i)
      }
      return j
    },
    updateHeading: function (i) {
      this.$heading.html(this.$heading.data(i))
    },
    showAdditionalElements: function (i) {
      var j = [];
      if (this.type === "download") {
        j = this.$form.find(".submitContainer")
      }
      if (j.length) {
        if (i) {
          j.show()
        } else {
          j.hide()
        }
      }
    },
    getSummaryContent: function () {
      var i = "";
      this.$sections.each(function (j) {
        var k = $(this);
        var l = k[0].className.split(/\s+/);
        k.find(d).each(function () {
          var o = $(this),
            m = this.tagName.toLowerCase(),
            n = m === "textarea" ? o.html() : o.val();
          n = _.isString(n) ? $.trim(n) : n;
          if (n !== "" && _.intersection(o.closest(".formField").attr("class").split(" "), e).length) {
            if (j > 0) {
              i += _.intersection(c, l).length ? " " : "<br />"
            }
            i += _.escape(n)
          }
        })
      });
      return i
    },
    showSummary: function () {
      var i = this;
      var j = function () {
        i.setCookieData();
        i.updateHeading("summary-heading");
        i.showAdditionalElements(false);
        i.$summaryView.find(".content p").html(i.getSummaryContent());
        i.$summaryView.show();
        i.$sections.hide();
        i.$accordions.find(".accordionTitle.expanded").trigger("click");
        if (i.type === "download") {
          i.enableDownloadLinks(true)
        }
      };
      if (this.$form.data("validationHandler")) {
        this.$form.data("validationHandler").hideFormError(j, true)
      } else {
        j()
      }
    },
    showEdit: function () {
      this.updateHeading("original-heading");
      this.showAdditionalElements(true);
      if (this.type === "download") {
        this.enableDownloadLinks(false)
      }
      this.$summaryView.hide();
      this.$sections.show();
      this.$form.find(".submitContainer .primarySubmitButton").removeClass("disabled");
      HONDA.formBuilder.ShowMore.init()
    },
    enableDownloadLinks: function (i) {
      if (i) {
        this.$downloadMask.fadeOut(g);
        this.$downloadLinks.removeAttr("tabIndex")
      } else {
        this.$downloadMask.fadeIn(g);
        this.$downloadLinks.attr("tabIndex", -1)
      }
    },
    sendDownloadRequest: function (l) {
      var i = this;
      var k = this.$form.serialize();
      var j = $(l.target).closest("a").data("brochure");
      k += "&brochureId=" + j;
      $.ajax({
        url: this.$form.attr("action"),
        data: k,
        type: "POST",
        dataType: "json",
        timeout: 15000
      })
    },
    updateSelectedPostBrochures: function (k) {
      var j = k.currentTarget.value;
      var i = _.intersection(this.brochuresSelected, [j]).length;
      if (i) {
        this.brochuresSelected = _.without(this.brochuresSelected, j)
      } else {
        this.brochuresSelected.push(j)
      }
      this.toggleBrochuresListError()
    },
    toggleBrochuresListError: function (k) {
      var i = this.$form.data("brochures-list-error");
      if (_.isString(i)) {
        var j = this.$form.data("validationHandler");
        var l = this.$form.find(".brochuresList:first");
        if (this.brochuresSelected.length) {
          j.hideFieldError(l)
        } else {
          j.showFieldError(l, i);
          if (k) {
            j.showFormError();
            j.scrollToFormError()
          }
        }
      }
    },
    analyticsPostFormSubmit: function () {
      var j = this.brochuresSelected.join(" | ");
      var i = HONDA.analytics.getAnalyticsFromSelector(this.$submitButton);
      i.eventLabel = HONDA.helpers.stringReplace(i.eventLabel, j);
      HONDA.analytics.push(i)
    },
    setupDownload: function () {
      var i = this;
      HONDA.formBuilder.FormValidation.init(this.$form, {
        delaySubmit: true,
        enableBlurValidation: true,
        submitCallback: function () {
          i.showSummary();
          $("html, body").animate({
            scrollTop: $("#orderBrochureDownload").offset().top
          }, 400)
        }
      });
      this.$downloadLinks.on("click", function (j) {
        i.sendDownloadRequest(j)
      })
    },
    setupPost: function () {
      var i = this;
      HONDA.formBuilder.FormValidation.init(this.$form, {
        enableBlurValidation: true,
        submitCallback: function () {
          var j = i.$form.data("validationHandler");
          var k = !!i.brochuresSelected.length;
          if (!_.isString(i.$form.data("brochures-list-error"))) {
            k = true
          }
          if (k) {
            i.analyticsPostFormSubmit();
            if (j.validateForm(true)) {
              i.setCookieData()
            }
            window.setTimeout(function () {
              i.$form[0].submit()
            }, 100)
          }
        }
      });
      this.$form.on("submit", function () {
        i.toggleBrochuresListError(true)
      });
      this.$form.on("change", '.postLink input[type="checkbox"]', function (j) {
        i.updateSelectedPostBrochures(j)
      });
      this.$form.find('.postLink input[type="checkbox"]:checked').each(function () {
        i.brochuresSelected.push(this.value)
      })
    },
    setup: function () {
      var i = this;
      var k = this.$form.data("summary-title");
      var j = this.$form.data("summary-edit");
      this.$heading.data("original-heading", this.$heading.html());
      this.$summaryView.prependTo(this.$form.find("fieldset:first"));
      if (k) {
        this.$summaryView.find(".title").html(k)
      } else {
        this.$summaryView.find(".title").remove()
      }
      if (j) {
        this.$summaryView.find(".showEdit").html(j)
      } else {
        return
      }
      this.$summaryView.find("a.showEdit").on("click.showEdit", function (l) {
        l.preventDefault();
        i.showEdit()
      });
      if (this.hasCookieData) {
        this.getCookieData();
        this.showSummary()
      }
      if (this.type === "download") {
        this.setupDownload()
      }
      if (this.type === "post") {
        this.setupPost()
      }
      this.$form.show()
    }
  };
  var h = function () {
    if (b.length) {
      var j = $("#orderBrochureDownload");
      var i = $("#orderBrochurePost");
      if (j.length) {
        j.data("brochure-form", new a(j, "download"))
      }
      if (i.length) {
        i.data("brochure-form", new a(i, "post"))
      }
    }
  };
  return {
    init: h
  }
}(jQuery));
/*!
 * Honda platform - Key Features
 */
var HONDA = window.HONDA || {};
(function (b, c, a) {
  HONDA.KeyFeatures = c.View.extend({
    el: ".keyFeatures",
    events: {
      "click .headingContainer a": "switchKeyFeature"
    },
    timeout: null,
    rebindEvents: true,
    activeClass: "active",
    initialize: function () {
      this.setViewportBehaviour();
      this.addClassesForUnsupportedSelectors();
      b(window).on("resize", a.bind(this.setViewportBehaviour, this))
    },
    setModuleHeight: function () {
      var e = this.$el.find("ul");
      var g = this.$el.find("li");
      var f = 0;
      var d = 0;
      g.each(function () {
        var h = b(this);
        var i = b(this).find(".headingContainer");
        f = Math.max(f, h.height());
        d += i.height()
      });
      e.height(Math.max(f, d))
    },
    positionNavigatorItems: function () {
      var d = this.$el.find(".headingContainer");
      d.each(function (f) {
        var g = b(this);
        var e = f > 0 ? d.eq(f - 1) : g;
        var h = f > 0 ? e.outerHeight() + e.position().top : 0;
        g.css("top", h + "px")
      })
    },
    switchKeyFeature: function (f) {
      f.preventDefault();
      var g = this.$el.find("." + this.activeClass);
      var d = b(f.currentTarget).parents("li");
      if (!d.hasClass(this.activeClass)) {
        d.addClass(this.activeClass);
        g.removeClass(this.activeClass)
      }
    },
    setViewportBehaviour: function () {
      var d = this;
      window.clearTimeout(this.timeout);
      this.timeout = window.setTimeout(function () {
        if (window.innerWidth < 621) {
          d.rebindEvents = true;
          d.undelegateEvents();
          d.$el.find("ul").removeAttr("style")
        } else {
          if (d.rebindEvents) {
            d.rebindEvents = false;
            d.delegateEvents()
          }
          d.positionNavigatorItems();
          d.setModuleHeight()
        }
      }, 200)
    },
    addClassesForUnsupportedSelectors: function () {
      if (b("html").hasClass("ie8")) {
        this.$el.find("li:last-child").addClass("lastChild")
      }
    }
  });
  if (b(".specificationsPage").length < 1) {
    (function () {
      var d = new HONDA.KeyFeatures();
      return d
    }())
  }
}(jQuery, Backbone, _));
var HONDA = window.HONDA || {};
HONDA.ScrollingHeader = (function () {
  var b = $(window);
  var f = $(document);
  var g = $("html");
  var h = $(".scrollingHeader");
  var c = $(".ignitionCampaign");
  var d = {
    $slides: h.find(".fullScreenPanel"),
    scrollTo: function (l, m) {
      var k = l.offset().top;
      if (!c.length || (c.length && HONDA.breakpoints.current > HONDA.breakpoints.xsmall)) {
        k -= $(".portalHeader").innerHeight()
      }
      $("body, html").stop().animate({
        scrollTop: Math.round(k)
      }, 700, function () {
        if (m) {
          m()
        }
      })
    },
    checkIndicatorPosition: function (l) {
      var m = $(window).scrollTop();
      var k = h.offset().top + h.innerHeight() - window.innerHeight;
      if (m > k) {
        h.addClass("atLast")
      } else {
        h.removeClass("atLast")
      }
    },
    onScroll: function (k) {
      this.checkIndicatorPosition()
    },
    bind: function () {
      b.on("scroll", _.bind(this.onScroll, this))
    }
  };
  var i = (function () {
    var m = null;
    var o = "scroller-audio";
    var n = {
      enabled: "audioEnabled",
      playing: "audioPlaying"
    };
    var l = {
      trigger: '<a href="#" class="primaryCta">{1}</a>'
    };
    var p = {
      play: h.data("playLabel"),
      stop: h.data("stopLabel")
    };
    var k = function (q) {
      this.$slide = q;
      this.$content = this.$slide.find(".copyArea .contentBox");
      this.$audio = this.$slide.find("audio");
      this.$source = this.$audio.find("source");
      this.audio = this.$audio[0];
      this.audio.loop = false;
      if (this.hasSupportForAudioTypes()) {
        this.createTrigger();
        this.bindEvents()
      }
    };
    k.prototype = {
      hasSupportForAudioTypes: function () {
        var r = this;
        var q = false;
        this.$source.each(function () {
          q = !!(r.audio.canPlayType && r.audio.canPlayType($(this).attr("type")).replace(/no/, ""));
          if (q) {
            return false
          }
        });
        return q
      },
      createTrigger: function () {
        this.$trigger = $(l.trigger.replace("{1}", p.play));
        this.$content.append(this.$trigger)
      },
      bindEvents: function () {
        this.$audio.on(HONDA.is.iOS() ? "progress" : "loadeddata", _.bind(this.loaded, this));
        this.$audio.on("play", _.bind(this.play, this));
        this.$audio.on("pause", _.bind(this.pause, this));
        this.$trigger.on("click", _.bind(this.toggle, this));
        h.on(events.beforeAnim, _.bind(this.update, this));
        h.on(events.videoPlay, _.bind(this.update, this))
      },
      update: function () {
        this.fadeOut()
      },
      loaded: function () {
        this.$slide.addClass(n.enabled)
      },
      play: function () {
        var q = this;
        m.each(function () {
          if (this !== q.$slide[0]) {
            $(this).data(o).audio.pause()
          }
        });
        this.audio.volume = 1;
        this.audio.play();
        this.$slide.addClass(n.playing);
        this.$trigger.html(p.stop);
        h.trigger(events.audioPlay)
      },
      pause: function () {
        this.audio.currentTime = 0;
        this.$slide.removeClass(n.playing);
        this.$trigger.html(p.play)
      },
      toggle: function (q) {
        q.preventDefault();
        this.audio[this.audio.paused ? "play" : "pause"]()
      },
      fadeOut: function () {
        var q = this;
        if (!this.audio.paused) {
          this.$audio.animate({
            volume: 0
          }, animSpeed, function () {
            q.audio.pause()
          })
        }
      }
    };
    return {
      init: function () {
        if (g.hasClass("audio")) {
          m = d.$slides.filter(".audio");
          m.each(function () {
            $(this).data(o, new k($(this)))
          })
        }
      }
    }
  }());
  var e = (function () {
    var p = null;
    var r = "scroller-video";
    var m = 2500;
    var n = 3000;
    var k = {
      video: ".video",
      playerWrapper: ".video-player-wrapper",
      playerTrigger: ".video-trigger",
      endFrameWrapper: ".videoEndFrame",
      endFrameClose: ".close",
      endFrameReplay: ".replay"
    };
    var q = {
      playing: "playing",
      paused: "paused",
      hover: "hover",
      showEndFrame: "showEndFrame"
    };
    var o = {
      api: {
        controls: 0
      }
    };
    var l = function (s) {
      this.$slide = s;
      this.$player = this.$slide.find(k.playerWrapper);
      this.$trigger = this.$slide.find(k.playerTrigger);
      this.$endFrame = this.$slide.find(k.endFrameWrapper);
      this.hasEndFrame = !!this.$endFrame.length;
      this.video = null;
      this.bindEvents()
    };
    l.prototype = {
      bindEvents: function () {
        this.$slide.on(events.videoPause, _.bind(this.pause, this));
        this.$slide.on(events.videoPlay, _.bind(this.play, this));
        this.$slide.on(events.videoEnded, _.bind(this.finish, this));
        this.$trigger.on("click", _.bind(this.toggle, this));
        this.$trigger.hover(_.bind(this.over, this), _.bind(this.out, this));
        h.on(events.videoReady, _.bind(this.enable, this));
        h.on(events.beforeAnim, _.bind(this.update, this));
        h.on(events.audioPlay, _.bind(this.update, this));
        if (this.hasEndFrame) {
          this.$endFrame.on("click", k.endFrameClose, _.bind(this.hideEndFrame, this));
          this.$endFrame.on("click", k.endFrameReplay, _.bind(this.replay, this));
          b.on("resize", _.debounce(_.bind(this.checkEndFrame, this), 200));
          b.on("resize", _.debounce(_.bind(this.checkEndFrameFitsHeight, this), 1000))
        }
      },
      isPlaying: function () {
        return this.video && this.video.isPlayerState("PLAYING")
      },
      isPaused: function () {
        return this.video && this.video.isPlayerState("PAUSED")
      },
      update: function () {
        if (this.isPlaying()) {
          this.video.player.pauseVideo();
          this.$slide.removeClass(q.playing)
        }
      },
      play: function () {
        this.$trigger.removeClass(q.hover);
        this.$slide.removeClass(q.paused);
        this.$slide.addClass(q.playing);
        if (this.hasEndFrame) {
          this.hideEndFrame()
        }
        h.trigger(events.videoPlay)
      },
      pause: function () {
        this.$slide.addClass(q.paused)
      },
      over: function () {
        var s = this;
        window.clearTimeout(this.triggerTimer);
        this.$trigger.addClass(q.hover);
        this.triggerTimer = window.setTimeout(function () {
          s.$trigger.removeClass(q.hover)
        }, m)
      },
      out: function () {
        this.$trigger.removeClass(q.hover)
      },
      toggle: function (t) {
        t.preventDefault();
        if (this.video) {
          try {
            if (HONDA.is.touchDevice()) {
              this.play();
              this.pause()
            } else {
              this.video.player[this.isPlaying() ? "pauseVideo" : "playVideo"]()
            }
          } catch (s) {}
        } else {
          if ($("html").hasClass("no-video") && !HONDA.is.minimumFlashInstalled()) {
            this.$slide.trigger(events.videoEnded)
          }
        }
      },
      enable: function () {
        this.video = this.$player.data("video-player");
        this.$trigger.show()
      },
      finish: function () {
        this.$slide.removeClass(q.playing);
        this.$slide.removeClass(q.paused);
        this.$slide.removeClass(q.hover);
        if (this.hasEndFrame) {
          this.showEndFrame()
        }
      },
      replay: function () {
        if (HONDA.is.mobile() && HONDA.is.touchDevice()) {
          this.$slide.removeClass(q.replay)
        } else {
          this.video.player.playVideo()
        }
      },
      checkEndFrameFitsHeight: function () {
        if ((!HONDA.is.mobile() || HONDA.is.touchDevice()) && !d.isPortalCampaign) {
          var s = this.$endFrame.find(".contentBox");
          var v = s.closest(".wrapper");
          var u = this.$slide.height() - 40;
          var t = s.outerHeight(true);
          var x = 1;
          var w = 50;
          if (t > u) {
            x = u / t;
            w = 0
          }
          if ($("html").hasClass("ie8")) {
            s.css({
              zoom: x
            })
          } else {
            s.css({
              transform: "scale(" + x + ")",
              "transform-origin": "50% " + w + "%"
            })
          }
        }
      },
      showEndFrame: function () {
        if (this.$slide.hasClass(q.showEndFrame)) {
          return
        }
        var u = this.$endFrame.hasClass("videoEndFrameDiamondCta");
        this.$slide.addClass(q.showEndFrame);
        if (HONDA.is.mobile() || HONDA.is.touchDevice()) {
          if (u) {
            d.lock()
          }
          if (HONDA.is.mobile()) {
            this.video.reset(true)
          }
          var s = this.$endFrame.find(".contentBox");
          var t = "";
          if (u && !HONDA.is.mobile()) {
            t = ((HONDA.is.touchDevice() ? b.innerHeight() : this.$slide.outerHeight()) - s.outerHeight()) / 2
          }
          s.css("margin-top", t)
        } else {
          this.checkEndFrameFitsHeight()
        }
      },
      hideEndFrame: function () {
        if (!this.$slide.hasClass(q.showEndFrame)) {
          return
        }
        if (this.$endFrame.hasClass("videoEndFrameDiamondCta")) {
          d.unlock()
        }
        this.$slide.removeClass(q.showEndFrame)
      },
      checkEndFrame: function () {
        if (this.$slide.hasClass(q.showEndFrame)) {
          if (HONDA.is.mobile() || HONDA.is.touchDevice()) {
            d.lock()
          } else {
            d.unlock()
          }
        }
      }
    };
    return {
      init: function () {
        p = d.$slides.filter(k.video);
        p.each(function (s) {
          $(this).data(r, new l($(this)));
          if (s === 0) {
            HONDA.YouTubePlayer.init(h, o)
          }
        })
      }
    }
  }());
  var j = (function () {
    var k = {
      popup: "#reevoomark_popup_frame",
      close: ".reevoomark_close_button",
      enable: ".reevoomark_badge a.reviews",
      disable: ".reevoomark_close_button, #reevoomark_popup_backdrop"
    };
    return {
      close: function () {
        if ($(k.popup).length && HONDA.is.mobile()) {
          $(k.close).trigger("mousedown").trigger("click")
        }
      },
      init: function () {
        if ($(".reevooBadgeHolder").length && !HONDA.is.touchDevice()) {
          b.on("resize", _.bind(this.close, this));
          f.on("mousedown keydown", k.enable, _.bind(d.lock, d));
          f.on("mousedown keydown", k.disable, _.bind(d.unlock, d))
        }
      }
    }
  }());
  var a = (function () {
    function k(m, l) {
      var n = m.length ? m.offset().top : h.bottom();
      if ($portalHeader.length && !HONDA.is.mobile()) {
        n -= $portalHeader.outerHeight()
      }
      d.$scroller.stop().animate({
        scrollTop: Math.round(n)
      }, animSpeed, function () {
        if (l) {
          m.find(".modalOpen").trigger("click")
        }
      })
    }
    return {
      init: function () {
        if (d.$slides.length > 1) {
          var m = window.location.hash;
          if (m && m !== "#") {
            var l = d.$slides.filter(m);
            if (l.length) {
              window.setTimeout(function () {
                k(l, true)
              }, 1000)
            }
          }
          d.$slides.each(function (n) {
            $(this).find(".nextSlide button").attr("data-slide-index", n)
          });
          d.$slides.on("click", ".nextSlide button", function (r, p) {
            var n = $(r.currentTarget);
            var o = n.data("slide-index");
            var q = d.$slides.eq(o + 1);
            k(q, p)
          })
        }
      }
    }
  }());
  return {
    Scroller: d,
    init: function () {
      if (h.length) {
        d.bind()
      }
    }
  }
}());
/*!
 * Honda platform - Specifications
 */
HONDA.ProductSpecification = (function () {
  var a = ".productSpecification";
  var e = "product-specification";
  var c = 200;
  var b = function (f) {
    this.$module = f;
    this.$imgArea = this.$module.find(".imageAreaContainer");
    this.$copyArea = this.$module.find(".copyAreaContainer");
    this.$factbox = this.$module.find(".factBox");
    this.$reevoo = this.$module.find(".reevoo");
    if (this.$reevoo.length) {
      this.positionReevoo();
      $(window).on("resize", _.throttle(_.bind(this.positionReevoo, this), c))
    }
  };
  b.prototype = {
    positionReevoo: function () {
      this.$imgArea.height("");
      this.$reevoo.css("margin-top", "");
      if (HONDA.is.mobile()) {
        return false
      }
      var f = this.$factbox.height();
      var g = this.$copyArea.height() - f;
      this.$imgArea.height(f);
      this.$reevoo.css("margin-top", -Math.abs(g))
    }
  };
  var d = function () {
    $(a).each(function () {
      var f = $(this);
      if (!f.data(e)) {
        f.data(e, new b(f))
      }
    })
  };
  return {
    init: d
  }
}());
/*!
 * Honda platform - Personalisation Configuration
 */
var HONDA = window.HONDA || {};
HONDA.PersonalisationConfiguration = {
  classes: {
    preview: "preview",
    hidePreview: "hidePreview"
  },
  consts: {
    cookieStringBegin: "configurator_",
    cookieStringEnd: "_persistent"
  },
  state: {
    cookie: null
  },
  data: {
    modelBodyYear: "model-body-year",
    rendition: "rendition"
  },
  $s: {
    outer: $("#outer"),
    panelScroller: $(".scrollingHeader"),
    configuredPersonalised: $(".configuredPersonalisationCTAs"),
    productLogoCTA: $(".productLogoCTAs"),
    configuredImg: $(".configuredPersonalisationCTAs .configured_car"),
    configuredURL: $(".configuredPersonalisationCTAs .configured_url"),
    wrapper: $(".configuredPersonalisationCTAs .wrapper")
  },
  init: function () {
    if (this.$s.panelScroller.length && this.$s.configuredPersonalised.length) {
      this.getCookie();
      if (this.state.cookie) {
        this.showPersonalisationModule();
        this.populate()
      }
    }
  },
  bind: function () {
    var a = this;
    this.$s.wrapper.on("transitionend webkitTransitionEnd", function () {
      if (!a.$s.configuredPersonalised.hasClass(a.classes.preview)) {
        a.$s.configuredPersonalised.addClass(a.classes.hidePreview)
      } else {
        a.$s.configuredPersonalised.removeClass(a.classes.hidePreview)
      }
    })
  },
  getCookie: function () {
    var a = this;
    var c = this.$s.configuredPersonalised.data(this.data.modelBodyYear);
    if (c !== undefined && c !== "") {
      this.state.cookie = JSON.parse($.cookie(this.consts.cookieStringBegin + c + this.consts.cookieStringEnd))
    } else {
      var b = 0;
      $.each(document.cookie.split(";"), function (f, e) {
        var j = e.split("=")[0];
        var h = j.indexOf(a.consts.cookieStringBegin);
        var g = j.indexOf(a.consts.cookieStringEnd);
        if (h > -1 && g > -1 && g > h) {
          c = window.unescape(j.substring(h + a.consts.cookieStringBegin.length, g));
          var d = JSON.parse($.cookie(a.consts.cookieStringBegin + c + a.consts.cookieStringEnd));
          if (d.timestamp && d.timestamp > b) {
            a.state.cookie = d
          }
        }
      })
    }
  },
  showPersonalisationModule: function () {
    this.$s.productLogoCTA.hide();
    this.$s.configuredPersonalised.show()
  },
  populate: function () {
    var a = this.state.cookie.image + this.$s.configuredImg.data(this.data.rendition);
    this.$s.configuredImg.attr("src", a);
    this.$s.configuredURL.attr("href", "http://" + this.state.cookie.url);
    this.$s.configuredURL.find("span").html(this.state.cookie.url)
  }
};
/*!
 * Honda platform - Awards Reviews
 */
var HONDA = window.HONDA || {};
HONDA.AwardsReviews = (function () {
  var a = function (c) {
    this.$wrapper = c;
    this.$accordion = c.find(".accordion");
    this.$accordionItems = c.find(".accordion ul > li");
    this.$accordionTabs = c.find(".accordionTabs > li");
    this.setupAccordionTabs();
    this.setupAccordion()
  };
  a.prototype = {
    setActiveAccordionTab: function (c) {
      this.$accordionTabs.removeClass("active").eq(c).addClass("active")
    },
    setupAccordionTabs: function () {
      var c = this;
      this.$accordionTabs.bind("click keypress", function (h) {
        if (h.type === "click" || h.keyCode === "13") {
          var d = $(h.currentTarget);
          h.preventDefault();
          if (d.hasClass("active")) {
            return false
          }
          var f = c.$accordionTabs.index(d);
          var g = c.$accordionItems.eq(f).find(".accordionHeading");
          c.setActiveAccordionTab(f);
          g.trigger("click")
        }
      })
    },
    setupAccordion: function () {
      var c = this;
      this.$accordion.accordion({
        isCollapsible: false,
        animSpeed: {
          mobile: 400,
          tablet: 0,
          desktop: 0
        },
        callback: function (d) {
          c.setActiveAccordionTab(d)
        }
      })
    }
  };
  var b = function () {
    if (!HONDA.is.CQEditMode()) {
      $(".awardsReviews").each(function () {
        $(this).data("awards-reviews", new a($(this)))
      })
    }
  };
  return {
    init: b
  }
}());
var HONDA = window.HONDA || {};
HONDA.langaugeSelectorHeader = (function () {
  var d = $("header.languageSelector");
  var c = d.find(".closeLanguageSelector");
  var f = "language_selection";
  var h = function () {
    d.delay(1000).slideDown(500)
  };
  var g = function () {
    d.slideUp(500)
  };
  var b = function () {
    return $.cookie(f) !== null && $.cookie(f) !== false
  };
  var a = function () {
    $.cookie(f, true, {
      expires: 365,
      path: "/"
    });
    g()
  };
  var e = function () {
    c.on("click", a)
  };
  var i = function () {
    if (!d.length) {
      return false
    }
    if (!b()) {
      e();
      h()
    }
  };
  return {
    init: i
  }
}());
var HONDA = window.HONDA || {};
HONDA.detailedProductEmissions = (function () {
  var f = false;
  var j = "car_emissions_viewed";
  var m = $("#outer");
  var g = $("#page");
  var h = $(".detailedProductEmissions");
  var k = $(".secondaryResponsive article ul");
  var d = {
    closeBtm: "closeBtm",
    closeTop: "closeTop",
    emissionsPage: "detailedProductEmissionsPage",
    showEmissionsPanel: "showEmissionsPanel",
    hasEmissionsPanel: "hasEmissionsPanel",
    current: "current"
  };
  var b = function () {
    var p = $.cookie(j) !== null ? $.parseJSON($.cookie(j)) : null;
    return (p !== null && p.indexOf(h.data("product")) !== -1)
  };
  var e = function () {
    var p = $.cookie(j) !== null ? $.parseJSON($.cookie(j)) : [];
    if (!b()) {
      p.push(h.data("product"));
      $.cookie(j, JSON.stringify(p), {
        path: "/",
        expires: 365
      })
    }
  };
  var c = function () {
    var p = $.cookie(j) !== null ? $.parseJSON($.cookie(j)) : [];
    if (b) {
      p.splice(p.indexOf(h.data("product")), 1);
      $.cookie(j, JSON.stringify(p), {
        path: "/",
        expires: 365
      })
    }
  };
  var o = function () {
    k.each(function (q, r) {
      var p = $("<li class='" + d.showEmissionsPanel + "'><a href='#'><span>" + h.data("label-show-emissions") + "</span></a></li>");
      if (f) {
        p.addClass(d.current)
      }
      $(r).append(p);
      m.addClass(d.hasEmissionsPanel)
    })
  };
  var l = function () {
    window.location.reload()
  };
  var i = function () {
    h.on("click", "." + d.closeBtm + ", ." + d.closeTop, function (p) {
      p.preventDefault();
      p.stopPropagation();
      l()
    });
    m.on("click", "." + d.showEmissionsPanel, function (p) {
      p.preventDefault();
      p.stopPropagation();
      if (h.hasClass("emissionsPage")) {
        return
      }
      if (!f) {
        c();
        window.location.reload()
      }
    })
  };
  var a = function () {
    if ((h.length && !b()) || h.hasClass(d.emissionsPage)) {
      f = true;
      return true
    }
    return false
  };
  var n = function () {
    if (h.length) {
      i();
      o();
      if (f || h.hasClass(d.emissionsPage)) {
        e();
        m.addClass("emissionsPanelVisible");
        g.remove()
      } else {
        h.remove()
      }
    }
  };
  return {
    isShowEmissions: a,
    init: n
  }
}());
var HONDA = window.HONDA || {};
HONDA.InfiniteAdvancement = {
  data: null,
  featureIndex: -1,
  currentTheme: null,
  currentCarouselTheme: null,
  setUpSelectors: function () {
    this.$s.billboard = this.$s.stage.find(".billboard");
    this.$s.carousel = this.$s.carouselStage.find(".carousel");
    this.$s.carouselNext = this.$s.carouselStage.find(".carousel .controls.next");
    this.$s.carouselTrigger = null;
    this.$s.copyArea = this.$s.stage.find(".campaignInfo .copyArea");
    this.$s.copyBody = this.$s.stage.find(".campaignInfo .copyArea p");
    this.$s.copyHead = this.$s.stage.find(".campaignInfo .copyArea h3 span");
    this.$s.copyHeadImg = this.$s.stage.find(".campaignInfo .copyArea h3 img");
    this.$s.copyTitle = this.$s.stage.find(".campaignInfo .copyArea h4");
    this.$s.featureHolder = this.$s.stage.find(".featureHolder");
    this.$s.intro = this.$s.stage.find(".intro");
    this.$s.trigger = this.$s.stage.find(".triggerButton")
  },
  $s: {
    carouselStage: $(".infiniteAdvancementCarousel"),
    stage: $(".infiniteAdvancement")
  },
  classes: {
    animate: "animate",
    animateIn: "animateIn",
    animateOut: "animateOut",
    billboardBg: "billboard_bg",
    borderBg: "border_bg",
    borderLeg: "border_leg",
    car: "car",
    carouselImgArea: "imgArea",
    carouselWrapper: "carouselWrapper",
    circle: "circle",
    disabled: "disabled",
    feature: "feature",
    featureImg: "featureImg",
    frame: "frame",
    gracefulDegrade: "gracefulDegrade",
    intro: "intro",
    introSlide: "slide",
    previousTheme: "previousTheme",
    roadBg: "road_bg",
    sceneBg: "scene_bg",
    selected: "selected",
    selectedTheme: "selectedTheme",
    transitionOnly: "transitionOnly",
    tunnel: "tunnel",
    visible: "visible"
  },
  isIE8: function () {
    return ($("html").hasClass("ie8") || (!Modernizr.csstransitions && !Modernizr.csstransforms3D && !Modernizr.csstransforms))
  },
  isIE9: function () {
    return ($("html").hasClass("ie9") || (!Modernizr.csstransitions && !Modernizr.csstransforms3D && Modernizr.csstransforms))
  },
  showStage: function () {
    this.$s.stage.addClass(this.classes.visible);
    this.$s.carouselStage.addClass(this.classes.gracefulDegrade)
  },
  setUpCarousel: function () {
    this.$s.carouselTrigger = this.$s.trigger.clone();
    this.$s.carouselTrigger.hide();
    this.$s.carouselTrigger.find("defs").remove();
    if (this.isIE8()) {
      var a = this.$s.carouselTrigger.find("span").clone();
      this.$s.carouselTrigger.empty().append(a)
    }
    this.$s.carouselStage.find("." + this.classes.carouselWrapper).append(this.$s.carouselTrigger);
    this.changeCarouselTheme()
  },
  setUp: function () {
    var a = this;
    this.data = window.infiniteAdvancementData;
    this.setUpCarousel();
    this.setUpThemes();
    if (this.isIE8() || (typeof window.infiniteAdvancementData === "undefined")) {
      return
    }
    this.setUpIntro();
    this.showStage()
  },
  enableTrigger: function () {
    this.$s.trigger.removeClass(this.classes.disabled)
  },
  disableTrigger: function () {
    this.$s.trigger.addClass(this.classes.disabled)
  },
  bind: function () {
    var a = this;
    this.$s.trigger.on("click", function (b) {
      b.preventDefault();
      if (a.$s.stage.is(":visible") && a.$s.trigger.hasClass(a.classes.disabled)) {
        return
      }
      if (!a.$s.stage.hasClass(a.classes.animate)) {
        a.introStartAnimation()
      }
      if (!a.$s.featureHolder.hasClass(a.classes.animate)) {
        a.nextFeature()
      }
    });
    this.$s.stage.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (c) {
      var b = $(c.target);
      if (b.hasClass(a.classes.introSlide) && b.parent().hasClass(a.classes.intro)) {
        a.removeIntroSlide(b)
      }
      if (b.hasClass(a.classes.selectedTheme)) {
        a.onThemeTransitionEnd(b)
      }
      if (b.hasClass(a.classes.car)) {
        a.onCarTransitionEnd(b)
      }
      if (b.hasClass(a.classes.billboardBg)) {
        a.onBillboardBackgroundTransitionEnd(b)
      }
    });
    this.$s.stage.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function (c) {
      var b = $(c.target);
      if (b.hasClass(a.classes.featureImg) || b.hasClass(a.classes.feature)) {
        if (b.parent().hasClass(a.classes.animateIn)) {
          a.onAnimateFeatureInEnd(b.parent())
        }
        if (b.hasClass(a.classes.animateOut)) {
          a.onAnimateFeatureOutEnd(b)
        }
      }
    });
    this.$s.carouselStage.on("layout_updated", function () {
      a.$s.carouselTrigger.css("top", a.$s.carouselStage.find(".largestImg").height() + 20);
      a.$s.carouselTrigger.show()
    });
    this.$s.carouselTrigger.on("click", function (b) {
      b.preventDefault();
      a.$s.carouselNext.click();
      a.changeCarouselTheme()
    });
    this.$s.stage.on("animationiteration webkitAnimationIteration", "." + a.classes.transitionOnly, function (b) {
      a.onTransitionOnlyTunnelIterationEnd($(b.target))
    })
  },
  setUpIntro: function () {
    var b = this;
    var c;
    var e;
    var d;
    var a = b.getThemeById(b.data.stage.defaultTheme);
    for (c = 5; c >= 1; c--) {
      e = a.billboard.bg_path;
      d = $('<div class="' + b.classes.introSlide + '" style="background-image:url(' + e + ')"></div>');
      d.addClass("introStartPos" + c);
      b.$s.intro.append(d)
    }
    this.$s.billboard.css("background-color", "#" + a.bg.scene_color)
  },
  intro2DAnimate: function () {
    var a = this;
    var b = 820;
    this.$s.intro.find("." + this.classes.introSlide).animate({
      top: b * -0.35 + "%",
      bottom: b * -0.65 + "%",
      left: b / -2 + "%",
      right: b / -2 + "%"
    }, 3000, "easeInQuart", function () {
      a.removeIntroSlide($(this))
    })
  },
  introStartAnimation: function () {
    this.$s.stage.addClass(this.classes.animate);
    if (this.isIE9()) {
      this.intro2DAnimate()
    }
  },
  removeIntroSlide: function (a) {
    a.remove();
    this.endIntro()
  },
  endIntro: function () {
    this.$s.billboard.css("background", "#000")
  },
  tunnelConfig: {
    tunnelCount: 5,
    tunnelAnimTime: 3.5
  },
  addTunnels: function (e, b, a) {
    var k = this;
    var j = this.tunnelConfig.tunnelCount;
    var h = this.tunnelConfig.tunnelAnimTime;
    var c = $('<div class="tunnelHolder"></div>');
    var g;
    var d;
    var f;
    c.addClass(a);
    for (g = 0; g < j; g++) {
      if (a === "circle" && !this.isIE9()) {
        d = $('<img class="' + k.classes.tunnel + '" src="' + b + '" />')
      } else {
        d = $("<div class='" + k.classes.tunnel + "' style='background-image:url(" + b + ")'></div>")
      }
      d.data("id", g);
      d.find("span").html(g);
      d.addClass(k.classes.tunnel + g);
      f = (h / j * g);
      c.prepend(d);
      if (k.isIE9()) {
        k.tunnels2DAnimate(d, Math.floor(f * 1000) + 0.5)
      } else {
        d.css({
          "animation-delay": f + "s",
          "-webkit-animation-delay": f + "s"
        })
      }
    }
    e.append(c)
  },
  tunnels2DAnimate: function (b, c) {
    var a = this;
    var e = 2000;
    var d = this.tunnelConfig.tunnelAnimTime;
    if (b.parent().hasClass(this.classes.circle)) {
      e += 2000
    }
    b.css({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0
    });
    b.delay(c).animate({
      top: e * -0.35 + "%",
      bottom: e * -0.65 + "%",
      left: e / -2 + "%",
      right: e / -2 + "%",
      opacity: 5
    }, d * 1000, "easeInQuart", function () {
      if (b.closest("." + a.classes.feature).hasClass(a.classes.transitionOnly)) {
        a.onTransitionOnlyTunnelIterationEnd(b)
      } else {
        a.tunnels2DAnimate(b, 0)
      }
    })
  },
  onTransitionOnlyTunnelIterationEnd: function (a) {
    if (!a.hasClass(this.classes.tunnel + "0")) {
      a.remove()
    } else {
      if (this.isIE9()) {
        this.tunnels2DAnimate(a, 0)
      }
    }
  },
  nextFeature: function () {
    this.featureIndex++;
    if (this.featureIndex > this.data.features.length - 1) {
      this.featureIndex = 0
    }
    var b = this.data.features[this.featureIndex];
    var c = this.getFeature(b);
    var a = this.$s.featureHolder.find("." + this.classes.feature);
    if (a.length) {
      a.addClass(this.classes.animateOut);
      if (this.isIE9()) {
        this.featureAnimateOut2D(a)
      }
    }
    this.swapCar(b);
    this.swapBillBoardBg(b);
    this.$s.featureHolder.append(c);
    this.animateFeatureIn(c);
    this.featureUpdateInfo(b);
    this.$s.featureHolder.addClass(this.classes.animate);
    this.disableTrigger();
    this.switchTheme(b.theme)
  },
  getFeature: function (d) {
    var b = $("<div class='" + this.classes.feature + "'></div>");
    var a = (_.isString(d.framePath) && d.framePath !== "") ? d.framePath : this.getThemeById(d.theme).billboard.frame_path;
    var c = (!_.isString(d.framePath) || d.frameType === "") ? "square" : d.frameType;
    this.addTunnels(b, a, c);
    b.append("<div class='" + this.classes.featureImg + "'><span style='background-image:url(" + d.imgPath + ")'></span></div>");
    return b
  },
  animateFeatureIn: function (a) {
    var b = this.data.features[this.featureIndex];
    a.addClass(this.classes.animateIn);
    if (b.isTransitionSlide) {
      a.addClass(this.classes.transitionOnly)
    }
    if (this.isIE9()) {
      this.animateFeatureIn2D(a)
    }
  },
  animateFeatureIn2D: function (a) {
    var c = a.find("." + this.classes.featureImg);
    var b = this;
    var e = 1100;
    var f = "easeInQuart";
    var d = c.find("span");
    d.delay(1000).animate({
      opacity: 1
    }, 1000);
    if (a.hasClass(this.classes.transitionOnly)) {
      e = 10000;
      d.delay(1000).animate({
        opacity: 0
      }, 1000)
    }
    c.animate({
      top: e * -0.35 + "%",
      bottom: e * -0.65 + "%",
      left: e / -2 + "%",
      right: e / -2 + "%"
    }, 4000, f, function () {
      b.onAnimateFeatureInEnd(a)
    })
  },
  featureAnimateOut2D: function (a) {
    var c = a.find("." + this.classes.featureImg);
    var b = this;
    var d = 10000;
    c.animate({
      top: d * -0.35 + "%",
      bottom: d * -0.65 + "%",
      left: d / -2 + "%",
      right: d / -2 + "%"
    }, 3000, "easeInQuart", function () {
      b.onAnimateFeatureOutEnd(a)
    });
    a.delay(2000).fadeOut(1000)
  },
  featureUpdateInfo: function (b) {
    var a = this;
    this.$s.copyArea.fadeOut(1000, function () {
      a.$s.copyHead.text(b.imgAlt);
      if (b.logoPath !== undefined && b.logoPath !== null && b.logoPath !== "") {
        a.$s.copyHeadImg.attr({
          src: b.logoPath,
          alt: b.imgAlt
        });
        a.$s.copyHeadImg.show()
      } else {
        a.$s.copyHeadImg.hide()
      }
      a.$s.copyTitle.text(b.title);
      a.$s.copyBody.text(b.body);
      $(this).fadeIn(1000)
    })
  },
  onAnimateFeatureInEnd: function (a) {
    var b = this.data.features[this.featureIndex];
    this.$s.featureHolder.removeClass(this.classes.animate);
    a.removeClass(this.classes.animateIn);
    if (b.isTransitionSlide) {
      this.nextFeature()
    } else {
      this.enableTrigger()
    }
  },
  onAnimateFeatureOutEnd: function (a) {
    a.remove()
  },
  csslessTransitionCar: function (b, c) {
    var a = this;
    c.css("opacity", 1);
    c.find("img").css("opacity", 0).animate({
      opacity: 1
    }, 2000, function () {
      c.addClass(a.classes.selected)
    });
    b.find("img").fadeOut(2000, function () {
      a.onCarTransitionEnd(b)
    })
  },
  swapCar: function (c) {
    var a = this;
    var b = this.$s.stage.find("." + this.classes.car).eq(0);
    if (c.carPath !== b.find("img").attr("src")) {
      var d = $("<div class='" + this.classes.car + "'><img src='" + c.carPath + "' alt='" + c.carAlt + "' /></div>");
      d.insertAfter(b);
      d.delay(1000).queue(function () {
        if (a.isIE9()) {
          a.csslessTransitionCar(b, d);
          return
        }
        d.addClass(a.classes.selected);
        b.removeClass(a.classes.selected)
      })
    }
  },
  onCarTransitionEnd: function (a) {
    if (!a.hasClass(this.classes.selected) || this.isIE9()) {
      a.remove()
    }
  },
  onBillboardBackgroundTransitionEnd: function (a) {
    if (!a.hasClass(this.classes.selected) || this.isIE9()) {
      a.remove()
    }
  },
  csslessTransitionBillboardBg: function (c, a) {
    var b = this;
    if (a !== null && a.length) {
      a.fadeOut(2750, function () {
        b.onBillboardBackgroundTransitionEnd(a)
      })
    }
    if (c !== null && c.length) {
      c.fadeIn(2750)
    }
  },
  swapBillBoardBg: function (c) {
    var a = this.$s.billboard.find("." + this.classes.billboardBg);
    var b = null;
    if (a.length) {
      if (a.css("background-image") === c.bgPath) {
        return
      }
      a.removeClass(this.classes.selected)
    }
    if (c.bgPath !== null && c.bgPath !== "" && (a.length === 0 || a.css("background-image") !== c.bgPath)) {
      b = $('<div class="' + this.classes.billboardBg + '"></div>');
      b.css("background-image", "url(" + c.bgPath + ")");
      this.$s.billboard.prepend(b);
      b.redrawDOM();
      b.addClass(this.classes.selected)
    }
    if (this.isIE9()) {
      this.csslessTransitionBillboardBg(b, a)
    }
  },
  getThemeById: function (a) {
    return _.findWhere(this.data.themes, {
      id: a
    })
  },
  setUpThemes: function () {
    var b = this;
    var e = this.$s.billboard.find("> ." + this.classes.frame);
    var c = $('<div class="scenes" />');
    var a = $('<div class="roads" />');
    var d = $('<div class="borders" />');
    var f = $('<div class="border_legs" />');
    _.each(this.data.themes, function (j) {
      var g = $("<div class='" + b.classes.sceneBg + " " + j.class_name + "' />");
      g.css({
        "background-image": "url(" + j.bg.scene_path + ")",
        "background-color": "#" + j.bg.scene_color
      });
      c.append(g);
      var i = $("<div class='" + b.classes.roadBg + " " + j.class_name + "' />");
      i.css({
        "background-image": "url(" + j.bg.road_path + ")",
        "background-color": "#" + j.bg.road_color
      });
      a.append(i);
      var h = $("<div class='" + b.classes.borderBg + " " + j.class_name + "' />");
      h.css("background-image", "url(" + j.billboard.frame_path + ")");
      d.append(h);
      var k = $("<div class='" + b.classes.borderLeg + " " + j.class_name + "' />");
      k.append("<img src='" + j.billboard.frame_leg_path + "' class='legLeft' />");
      k.append("<img src='" + j.billboard.frame_leg_path + "' class='legRight' />");
      f.append(k)
    });
    this.$s.stage.prepend(c);
    this.$s.stage.append(a);
    e.append(d, f);
    this.switchTheme(this.data.stage.defaultTheme)
  },
  csslessAnimateSwitchTheme: function (c, b) {
    var a = this;
    if (!b.length) {
      c.css("opacity", 1)
    } else {
      c.animate({
        opacity: 1
      }, 2000, function () {
        a.onThemeTransitionEnd($(this))
      })
    }
  },
  switchTheme: function (d) {
    if (this.currentTheme !== null && this.currentTheme.id === d) {
      return
    }
    if (this.currentTheme !== null) {
      this.$s.stage.removeClass(this.currentTheme.class_name);
      this.$s.carouselStage.removeClass(this.currentTheme.class_name)
    }
    var c = this.getThemeById(d);
    var a = this.$s.stage.find("." + this.classes.selectedTheme);
    var b = this.$s.stage.find("." + c.class_name);
    this.currentTheme = c;
    this.$s.stage.addClass(c.class_name);
    b.addClass(this.classes.selectedTheme);
    a.removeClass(this.classes.selectedTheme);
    a.addClass(this.classes.previousTheme);
    if (this.isIE9()) {
      this.csslessAnimateSwitchTheme(b, a)
    }
  },
  onThemeTransitionEnd: function (a) {
    var b = a.parent().find("." + this.classes.previousTheme);
    b.removeClass(this.classes.previousTheme);
    if (this.isIE9()) {
      b.css("opacity", 0)
    }
  },
  changeCarouselTheme: function () {
    var d = null;
    if (this.$s.carousel.data("next-index")) {
      d = this.$s.carousel.find("li[data-index=" + this.$s.carousel.data("next-index") + "]").data("theme")
    }
    if (this.currentCarouselTheme !== null && this.currentCarouselTheme.id === d) {
      return
    }
    if (this.currentCarouselTheme !== null) {
      this.$s.carouselStage.removeClass(this.currentCarouselTheme.class_name)
    }
    if (d === null) {
      d = this.data.stage.defaultTheme
    }
    var b = this.getThemeById(d);
    this.$s.carouselStage.addClass(b.class_name);
    var a = (_.isString(b.bg.carousel_scene_path) && b.bg.carousel_scene_path !== "") ? b.bg.carousel_scene_path : b.bg.scene_path;
    var c = "url(" + a + ")";
    this.$s.carouselStage.css({
      "background-image": c,
      "background-color": "#" + b.bg.road_color
    });
    this.currentCarouselTheme = b
  },
  init: function () {
    if (this.$s.stage.length) {
      this.setUpSelectors();
      this.setUp();
      this.bind()
    }
  }
};
/*!
 * Honda platform - Brand Reviews Signpost
 */
(function (e, b, f) {
  var a = ".brandReviews.brandMessage";
  var g = "brand-reviews-message";
  var d = 10000;
  var c = function (h) {
    this.$module = h;
    this.$reevoo = this.$module.find(".reevoo");
    this.ajaxURL = this.$module.data("url");
    if (this.ajaxURL) {
      this.$percentage = this.$reevoo.find(".percentage .value");
      this.$percentSymbol = this.$percentage.find("sup").clone();
      this.scores = {};
      this.request = null;
      this.getData()
    } else {
      this.showReevoo()
    }
  };
  c.prototype = {
    showReevoo: function () {
      this.$reevoo.css("visibility", "visible")
    },
    updatePercentage: function () {
      this.$percentage.html(this.scores.percentage_who_would_recommend).append(this.$percentSymbol);
      this.showReevoo()
    },
    getData: function () {
      var h = this;
      this.request = f.ajax({
        url: this.ajaxURL,
        timeout: d,
        dataType: "json",
        success: function (i) {
          if (_.isObject(i) && _.isObject(i.customer_experience_scores)) {
            h.scores = i.customer_experience_scores;
            h.updatePercentage()
          }
        },
        error: function () {
          return false
        }
      })
    }
  };
  f(a).each(function () {
    var h = f(this);
    if (!h.data(g)) {
      h.data(g, new c(h))
    }
  })
}(window, document, jQuery));
var HONDA = window.HONDA || {};
HONDA.FullScreenPanel = (function () {
  var d = function (f) {
    var e = this;
    this.$el = f;
    this.$window = $(window);
    this.$document = $(document);
    this.$parent = this.$el.parents(".fullScreenHeader");
    this.$outer = $("#outer");
    this.$page = $("#page");
    this.$siteHeader = $(".hondaHeader");
    this.$imageBackground = this.$el.find(".imageBackground");
    this.data = this.$el.data();
    this.transitionEvents = "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd";
    this.isHeaderPanel = this.$parent.hasClass("fullScreenHeader");
    this.isAlwaysFullHeight = this.$el.hasClass("isAlwaysFullHeight") || this.$parent.hasClass("isAlwaysFullHeight");
    this.panelHeight = null;
    this.isFirstPanel = (this.isHeaderPanel && this.$parent.find(".fullScreenPanel:first")[0] === this.$el[0]) ? true : false;
    this.breakpointResize = HONDA.breakpoints.small;
    this.offsetHeight = 0;
    if (!this.$parent.hasClass("noPreview") && !this.$el.hasClass("noPreview")) {
      this.offsetHeight += 24
    }
    if (!isNaN(this.data.heightOffset)) {
      this.offsetHeight += this.data.heightOffset
    }
  };
  d.prototype = {
    onOuterChange: function () {
      this.setHeight()
    },
    onResize: function () {
      this.setHeight();
      this.setImageRendition()
    },
    secondaryNavHeight: function () {
      var e = 0;
      var f = $(".secondaryResponsive:first-of-type, .portalHeader");
      f.each(function (h, j) {
        var g = $(j);
        if (g.length) {
          e += g.innerHeight()
        }
      });
      return e
    },
    setHeight: function () {
      if (HONDA.ScrollLock.isLocked() || HONDA.is.CQEditMode() || this.$el.data("set-height") === false) {
        return
      }
      var e = "";
      if ($("html").hasClass("ie8") || HONDA.breakpoints.current >= this.breakpointResize || this.isAlwaysFullHeight) {
        e = this.$window.innerHeight();
        if (this.isFirstPanel) {
          e -= this.$page.offset().top
        } else {
          if (HONDA.breakpoints.current >= this.breakpointResize) {
            e -= this.secondaryNavHeight()
          }
        }
        e -= this.offsetHeight;
        if (this.$el.data("noresize")) {
          e = "initial";
          if ($("html").hasClass("ie9") || $("html").hasClass("ie8")) {
            e = "auto"
          }
        }
      } else {
        e = "initial"
      }
      this.panelHeight = e;
      this.$el.height(e)
    },
    onImgLoaded: function (e) {
      e.$img.css("background-image", "url(" + e.path + ")");
      e.$img.find("img").attr("src", e.path)
    },
    setImageRendition: function () {
      var e = this;
      if (this.$imageBackground.length) {
        this.$imageBackground.each(function (j, m) {
          var h = $(m);
          var l = h.data();
          var g = "";
          var k = "";
          switch (HONDA.breakpoints.current) {
            case HONDA.breakpoints.superlarge:
            case HONDA.breakpoints.xlarge:
            case HONDA.breakpoints.large:
              g = l.largeSrcPortrait;
              k = l.largeSrcLandscape;
              break;
            case HONDA.breakpoints.medium:
              g = l.mediumSrcPortrait;
              k = l.mediumSrcLandscape;
              break;
            default:
              g = l.smallSrcPortrait;
              k = l.smallSrcLandscape;
              break
          }
          e.imgLoadedCount = 0;
          var n = new Image();
          var f = new Image();
          n.onload = _.bind(e.onImgLoaded, e, {
            $img: h.find(".landscape"),
            path: k
          });
          f.onload = _.bind(e.onImgLoaded, e, {
            $img: h.find(".portrait"),
            path: g
          });
          n.src = k;
          f.src = g
        })
      }
    },
    render: function () {
      this.setImageRendition();
      this.setHeight()
    },
    bind: function () {
      if (!HONDA.is.CQEditMode()) {
        this.$document.on("resize.viewport", _.bind(this.onResize, this));
        if (!$("html").hasClass("ie8")) {
          this.$outer.observe(_.bind(this.onOuterChange, this))
        }
      }
    },
    init: function () {
      this.bind();
      this.render()
    }
  };

  function b(e) {
    b.prototype["super"].apply(this, arguments);
    this.$trigger = null
  }
  b.prototype = {
    bind: function () {
      b.prototype["super"]["prototype"].bind.apply(this, arguments);
      this.$trigger.on("click", _.bind(this.onMediaTrigger, this))
    },
    onMediaTrigger: function (f) {
      f.preventDefault();
      this[this.isPlaying() ? "pause" : "play"]()
    },
    isPlaying: function () {
      return this.$el.hasClass("playing")
    },
    pauseAllMedia: function () {},
    pause: function () {
      this.$el.removeClass("playing");
      this.$el.addClass("paused")
    },
    play: function () {
      this.pauseAllMedia();
      this.$el.addClass("playing");
      this.$el.removeClass("paused")
    }
  };
  if (typeof Function.inherits === "function") {
    b.inherits(d)
  }

  function c(e) {
    c.prototype["super"].apply(this, arguments);
    this.$trigger = this.$el.find(".video-trigger");
    this.$playerWrapper = this.$el.find(".video-player-wrapper");
    this.$videoComponents = this.$el.find(".video-player-wrapper, .video-trigger, > .wrapper, > .imageBackground, .videoEndFrame");
    this.$endFrame = this.$el.find(".videoEndFrame");
    this.video = null;
    this.options = {
      api: {
        controls: 0
      }
    }
  }
  c.prototype = {
    bind: function () {
      c.prototype["super"]["prototype"].bind.apply(this, arguments);
      this.$playerWrapper.on("video-ready", _.bind(this.onVideoReady, this));
      this.$playerWrapper.on("video-play", _.bind(this.onVideoPlay, this));
      this.$playerWrapper.on("video-pause", _.bind(this.onVideoPause, this));
      this.$playerWrapper.on("video-end", _.bind(this.onVideoEnd, this));
      if (this.$endFrame.length) {
        this.$endFrame.find(".close").on("click", _.bind(this.hideEndFrame, this));
        this.$endFrame.find(".replay").on("click", _.bind(this.onEndFrameReplayClick, this))
      }
    },
    onResize: function () {
      c.prototype["super"]["prototype"].onResize.apply(this, arguments);
      if (this.$endFrame.length) {
        this.resizeEndFrame()
      }
    },
    render: function () {
      c.prototype["super"]["prototype"].render.apply(this, arguments);
      HONDA.YouTubePlayer.init(this.$el, this.options)
    },
    onVideoReady: function () {
      this.video = this.$el.find(".video-player-wrapper").data("video-player");
      this.$el.addClass("video-ready")
    },
    onVideoPlay: function () {
      this.$el.addClass("playing")
    },
    onVideoPause: function () {
      this.onVideoFinish()
    },
    onVideoFinish: function () {
      this.$el.removeClass("playing");
      this.closeModal()
    },
    onVideoEnd: function () {
      this.onVideoFinish();
      if (this.$endFrame.length) {
        this.showEndFrame()
      }
    },
    pauseAllMedia: function () {
      if ($(".video.playing .video-trigger").length) {
        $(".video.playing .video-trigger").trigger("click")
      }
    },
    pause: function () {
      c.prototype["super"]["prototype"].pause.apply(this, arguments);
      this.video.player.pauseVideo()
    },
    play: function () {
      this.openModal();
      c.prototype["super"]["prototype"].play.apply(this, arguments);
      this.video.player.playVideo()
    },
    openModal: function () {
      var e = this.$el.offset().top - $(window).scrollTop();
      this.$outer.addClass("modalMode");
      this.$videoComponents.css({
        top: e,
        bottom: -e
      });
      this.$el.redrawDOM();
      this.$el.addClass("modalModeAnimate");
      this.$videoComponents.css({
        top: 0,
        bottom: 0
      });
      HONDA.ScrollLock.enable();
      HONDA.zIndexForFullScreenOverlay.restrict()
    },
    closeModal: function () {
      var e = this;
      if (Modernizr.csstransitions && HONDA.breakpoints.current >= this.breakpointResize) {
        var g = this.$el.offset().top - $(window).scrollTop();
        var f = this.secondaryNavHeight() - g + this.offsetHeight;
        this.$playerWrapper.one(this.transitionEvents, _.bind(this.onVideoPlayerTransitionEnd, this));
        this.$videoComponents.css({
          bottom: f
        })
      } else {
        this.onModalClosed()
      }
    },
    onVideoPlayerTransitionEnd: function (f) {
      this.$playerWrapper.off(this.transitionEvents);
      this.onModalClosed()
    },
    onModalClosed: function () {
      this.$el.removeClass("modalModeAnimate");
      this.$outer.removeClass("modalMode");
      this.$videoComponents.css({
        top: 0,
        bottom: 0
      });
      HONDA.ScrollLock.disable();
      HONDA.zIndexForFullScreenOverlay.restore()
    },
    showEndFrame: function () {
      this.$el.addClass("showEndFrame");
      this.resizeEndFrame()
    },
    hideEndFrame: function () {
      this.$el.removeClass("showEndFrame")
    },
    resizeEndFrame: function () {
      if (!this.isAlwaysFullHeight && this.$endFrame.hasClass("videoEndFrameDiamondCta")) {
        var i = this.$endFrame.find(".contentBox");
        var f = this.panelHeight - 40;
        var e = i.outerHeight(true);
        var h = 1;
        var g = 50;
        if (e > f) {
          h = f / e;
          g = 0
        }
        if ($("html").hasClass("ie8")) {
          i.css({
            zoom: h
          })
        } else {
          i.css({
            transform: "scale(" + h + ")",
            "transform-origin": "50% " + g + "%"
          })
        }
      }
    },
    onEndFrameReplayClick: function (f) {
      f.preventDefault();
      this.hideEndFrame();
      this.play()
    }
  };
  if (typeof Function.inherits === "function") {
    c.inherits(b)
  }

  function a(f) {
    var e = this;
    a.prototype["super"].apply(this, arguments);
    this.$trigger = this.$el.find(".primaryCta");
    this.$sources = this.$el.find("audio source");
    this.$trigger = this.$el.find(".primaryCta");
    this.audio = this.$el.find("audio")[0];
    this.hasAudio = false;
    this.labels = {
      play: e.$el.data("playLabel") ? e.$el.data("playLabel") : e.$parent.data("playLabel"),
      stop: e.$el.data("stopLabel") ? e.$el.data("stopLabel") : e.$parent.data("stopLabel")
    }
  }
  a.prototype = {
    init: function () {
      this.hasAudio = this.hasAudioSourceSupport();
      if (this.hasAudio) {
        this.$trigger.html(this.labels.play);
        this.$el.addClass("audio-ready")
      }
      a.prototype["super"]["prototype"].init.apply(this, arguments)
    },
    hasAudioSourceSupport: function () {
      var f = this;
      var e = false;
      this.$sources.each(function () {
        e = !!(f.audio.canPlayType && f.audio.canPlayType($(this).attr("type")).replace(/no/, ""));
        if (e) {
          return false
        }
      });
      return e
    },
    pauseAllMedia: function () {
      if ($(".audio.playing .primaryCta").length) {
        $(".audio.playing .primaryCta").trigger("click")
      }
    },
    pause: function () {
      a.prototype["super"]["prototype"].pause.apply(this, arguments);
      this.audio.pause();
      this.$trigger.html(this.labels.play)
    },
    play: function () {
      a.prototype["super"]["prototype"].play.apply(this, arguments);
      this.audio.play();
      this.$trigger.html(this.labels.stop)
    }
  };
  if (typeof Function.inherits === "function") {
    a.inherits(b)
  }
  return {
    FullScreenPanel: d,
    FullScreenVideoPanel: c,
    FullScreenAudioPanel: a,
    init: function () {
      $(".fullScreenPanel").each(function (f, g) {
        var e = $(g);
        var h;
        if (e.hasClass("video")) {
          h = new c(e)
        } else {
          if (e.hasClass("audio")) {
            h = new a(e)
          } else {
            h = new d(e)
          }
        }
        h.init()
      })
    }
  }
}());
var HONDA = window.HONDA || {};
HONDA.JazzCampaign = (function () {
  var f = $(document);
  var i = $(".jazz");
  var d = $("html").hasClass("ie8");
  var l = false;
  var a = null;
  var n = {
    enable: "enable.jazz"
  };
  var j = null;
  var c = null;
  var h = null;
  var b = null;
  var g = null;

  function e(t, u, r) {
    var s = function (v) {
      return function (w) {
        return w === null ? void 0 : w[v]
      }
    };
    var q = Math.pow(2, 53) - 1;
    var p = s("length");
    var o = function (w) {
      var v = p(w);
      return typeof v === "number" && v >= 0 && v <= q
    };
    if (u === null || r) {
      if (!o(t)) {
        t = _.values(t)
      }
      return t[_.random(t.length - 1)]
    }
    return _.shuffle(t).slice(0, Math.max(0, u))
  }

  function k(o) {
    this.data = o;
    this.audio = document.createElement("audio");
    this.isLoaded = false
  }
  k.prototype = {
    onload: function () {
      return
    },
    load: function () {
      if (this.audio.canPlayType) {
        var o = this;
        var p = 0;
        this.audio.addEventListener("canplaythrough", function () {
          o.isLoaded = o.audio.readyState === 4;
          if (o.isLoaded) {
            o.onload()
          }
        });
        for (p = 0; p < this.data.length; p++) {
          if (!!this.audio.canPlayType(this.data[p].type.replace(/no/, ""))) {
            this.audio.src = this.data[p].path;
            break
          }
        }
      } else {
        this.onload()
      }
    },
    play: function () {
      if (this.isLoaded) {
        this.stop();
        this.audio.play()
      }
    },
    pause: function () {
      if (this.isLoaded) {
        this.audio.pause()
      }
    },
    stop: function () {
      if (this.isLoaded) {
        this.audio.pause();
        this.audio.currentTime = 0
      }
    }
  };

  function m(o) {
    this.data = o
  }
  m.prototype = {
    onload: function () {
      return
    },
    load: function () {
      var o = this;
      var p = [];
      _.each(this.data, function (r) {
        var q = new Image();
        var s = $.Deferred();
        q.onload = function () {
          s.resolve()
        };
        p.push(s);
        q.src = r
      });
      $.when.apply($, p).done(function () {
        o.onload()
      })
    }
  };
  j = (function () {
    var s = $("#jazzPastimeTemplate").html();
    var r = d ? '<li><img src="{IMAGE_PATH}" /></li>' : '<li style="background-image: url({IMAGE_PATH})"></li>';
    var t = [];

    function q(u) {
      this.data = u;
      this.sound = new k(this.data.audio);
      this.image = new m(this.data.images);
      this.html = s;
      this.keyCode = null;
      this.isLoaded = false;
      this.setup()
    }
    q.prototype = {
      onload: function () {
        return
      },
      load: function () {
        var u = this;
        var w = $.Deferred();
        var v = $.Deferred();
        this.image.onload = function () {
          w.resolve()
        };
        v.resolve();
        $.when(v, w).done(function () {
          u.isLoaded = true;
          u.onload()
        });
        this.image.load();
        this.sound.load()
      },
      setup: function () {
        var u = "";
        this.html = this.html.replace(/\{NUMBER\}/g, this.data.number);
        this.html = this.html.replace(/\{TITLE\}/g, this.data.title);
        this.html = this.html.replace(/\{FEATURE_DESCRIPTION\}/g, this.data.featureDescription);
        this.html = this.html.replace(/\{FONT_COLOUR\}/g, this.data.fontColour);
        this.html = this.html.replace(/\{CTA_URL\}/g, this.data.cta.url);
        this.html = this.html.replace(/\{CTA_TITLE\}/g, this.data.cta.title);
        this.html = this.html.replace(/\{IMAGE_ALIGNMENT\}/g, this.data.imageAlignment);
        _.each(this.data.images, function (v) {
          u += r.replace(/\{IMAGE_PATH\}/g, v)
        });
        this.html = this.html.replace(/\{IMAGES\}/g, u)
      }
    };

    function p() {
      var u = _.where(j.collection, {
        isLoaded: true
      });
      return t[_.random(1, u.length) - 1]
    }

    function o(v) {
      var u = _.first(_.where(j.collection, {
        keyCode: v
      }));
      if (!u) {
        u = p();
        u.keyCode = v
      }
      return u
    }
    return {
      collection: t,
      getForKey: o,
      getRandom: p,
      init: function (u) {
        _.each(a.pastimes, function (v) {
          t.push(new q(v))
        });
        if (_.isFunction(u)) {
          u()
        }
      }
    }
  }());
  c = (function () {
    var q = i.find(".jazzBgAudio");
    var p = i.find(".jazzBgAudioToggle");
    var r = q.find("source");

    function o() {
      q[0][l = p.toggleClass("on").hasClass("on") ? "play" : "pause"]()
    }
    return {
      init: function () {
        if ($("html").hasClass("audio") && HONDA.hasSupportedAudioType(q[0], r)) {
          i.on(n.enable, function () {
            p.addClass("enable").on("click", o)
          })
        }
      }
    }
  }());
  h = (function () {
    var o = i.find(".jazzSocialSharing");

    function q(r) {
      return $.trim($('meta[property="' + r + '"]').attr("content"))
    }

    function p() {
      var t = "facebook";
      var s = "http://www.facebook.com/sharer.php?u=" + window.location.href;
      var u = "width=626, height=436";
      if (HONDA.is.mobile()) {
        window.open(s, t).focus()
      } else {
        try {
          window.open(s, t, u).focus()
        } catch (r) {
          window.open(s, "_blank", u).focus()
        }
      }
    }
    return {
      init: function () {
        o.on("click", p)
      }
    }
  }());
  b = (function () {
    var w = i.find(".jazzIntro");
    var x = i.find(".jazzPastime");
    var B = i.find(".jazzEnd");
    var y = null;
    var K = 3700;
    var M = false;
    var N = 0;
    var s = 5;
    var I = null;
    var o = 100;
    var E = 200;
    var p = 200;

    function G() {
      window.clearTimeout(y);
      y = null
    }

    function O() {
      return x.hasClass("complete")
    }

    function q() {
      return B.hasClass("active")
    }

    function v(P) {
      return P && (P.metaKey || P.altKey || P.ctrlKey || P.shiftKey)
    }

    function r() {
      return y !== null
    }

    function J() {
      return true
    }

    function C() {
      var R = x.find(".viewport li").hide();
      var Q = 0;

      function P() {
        $(R[Q - 1]).fadeOut(E);
        Q = Q <= R.length - 1 ? Q + 1 : 0;
        $(R[Q]).fadeIn(o)
      }
      I = window.setInterval(P, p)
    }

    function u() {
      window.clearInterval(I);
      I = null
    }

    function H(P) {
      i.find(".active").removeClass("active");
      P.addClass("active")
    }

    function t() {
      H(w)
    }

    function A() {
      HONDA.analytics.push($(".jazz").data("end-screen"));
      H(B)
    }

    function L(P) {
      f.off("touchend", L);
      f.off("keyup", L);
      G();
      u();
      if ($(P.currentTarget).hasClass("close")) {
        x.removeClass("complete");
        N = 0
      }
      if (O()) {
        return
      }
      if (N >= s) {
        A()
      } else {
        t()
      }
    }

    function z(T) {
      var R = 0;
      var Q = $(".animateKeyHold");
      var S = $("#arc");
      var U = 0;
      var P = 20;
      $(Q).height(50).width(50);
      window.timer = window.setInterval(function () {
        U -= 5;
        U %= 360;
        var Y = (U / 180) * Math.PI;
        var W = 25 + Math.cos(Y) * P;
        var Z = 25 + Math.sin(Y) * P;
        var X = S.attr("d");
        var V;
        if (R === 0) {
          V = X + " M " + W + " " + Z
        } else {
          V = X + " L " + W + " " + Z
        }
        if (U === -5 && R !== 0) {
          window.clearInterval(window.timer)
        }
        S.attr("d", V);
        R++
      }, 50)
    }

    function F(Q) {
      if (r() || O() || q() || v(Q) || !J()) {
        return
      }
      var P = Q && Q.type === "keydown" ? j.getForKey(Q.which) : j.getRandom();
      x.html(P.html);
      N++;
      C();
      H(x);
      g.load();
      HONDA.analytics.push($(".preview").data("pastime-start"));
      if (l) {
        P.sound.play()
      }
      z(K);
      y = window.setTimeout(function () {
        G();
        u();
        x.addClass("complete");
        $("#arc").parents("svg").hide();
        HONDA.analytics.push($(".preview").data("pastime-end"))
      }, K);
      f.on("touchend", L);
      f.on("keyup", L);
      f.keyup(function () {
        window.clearInterval(window.timer)
      })
    }

    function D(P) {
      N = 0;
      t();
      if (P) {
        P.preventDefault()
      }
    }
    return {
      init: function () {
        M = HONDA.is.iOS() && HONDA.iOSVersion().major < 8;
        i.on(n.enable, function () {
          $(i[0]).on("touchstart", F);
          f.on("keydown", F);
          x.on("click", ".close", L);
          B.on("click", ".restart", D);
          H(w);
          i.addClass("enabled")
        })
      }
    }
  }());
  g = (function () {
    var r = i.find(".jazzLoadingBar");
    var o = r.find(".inner");
    var p = 2;
    var u = false;
    var t = false;

    function v() {
      r.addClass("enable")
    }

    function s() {
      r.removeClass("enable")
    }

    function y(z) {
      return _.where(z, {
        isLoaded: true
      })
    }

    function x() {
      return _.filter(j.collection, function (z) {
        return !z.isLoaded
      })
    }

    function q(z) {
      if (u) {
        return
      }
      u = y(j.collection).length === p;
      if (u) {
        i.trigger(n.enable);
        s()
      }
      o.width(100 / p * y(z).length + "%")
    }

    function w() {
      if (t) {
        return
      }
      var A = x();
      if (A.length) {
        var B = e(A, p);
        var z = [];
        t = true;
        _.each(B, function (C) {
          var D = $.Deferred();
          C.onload = function () {
            D.resolve();
            q(B)
          };
          z.push(D);
          C.load()
        });
        $.when.apply($, z).done(function () {
          t = false
        })
      }
    }
    return {
      load: w,
      init: function () {
        if (j.collection.length) {
          v();
          w()
        }
      }
    }
  }());
  return {
    events: n,
    init: function () {
      if (i.length) {
        $(".jazz").parent().find(".indicator").hide();
        $.getJSON(i.data("pastimes"), function (o) {
          if (_.isObject(o) && _.isArray(o.pastimes)) {
            a = o;
            j.init(function () {
              c.init();
              h.init();
              b.init();
              g.init()
            })
          }
        })
      }
    }
  }
}());
/*!
 * Honda platform - Brand Reviews Signpost
 */
(function (b, a, c) {
  var d = b.HONDA || {};
  d.stickyNavigation = {
    $sticky: c(".sticky_ctas"),
    setup: function (f) {
      if (this.$sticky.length) {
        var e = this.$sticky.find("a");
        c.each(e, function (g, h) {
          d.stickyNavigation.expandLink(c(h))
        });
        this.$sticky.on("click", "a", d.stickyNavigation.enableTouch);
        b.setTimeout(function () {
          d.stickyNavigation.$sticky.find("a").removeClass("expandLink")
        }, f)
      }
    },
    enableTouch: function (f) {
      if (c("html").hasClass("touch") && c(".sticky_ctas").css("position") === "fixed") {
        d.stickyNavigation.expandLink(c(f.currentTarget))
      }
    },
    expandLink: function (e) {
      if (!e.hasClass("expandLink")) {
        var f = e.attr("class");
        e.attr("class", "expandLink " + f)
      }
    },
    init: function () {
      this.setup(3000)
    }
  };
  d.stickyNavigation.init()
}(window, document, jQuery));
/*!
 * Honda platform - Cars Range
 */
var HONDA = window.HONDA || {};
HONDA.rangeCampaign = (function () {
  var a = $(window);
  var d = $(document);
  var e = $(".rangeWrapper");
  var b = $(".rangeWrapper .fullScreenPanel");
  var g = (function () {
    function j(k) {
      e.find('.productPanel[data-scrollto="' + $(k.currentTarget).data("scrollto") + '"]').scrollIntoView()
    }
    return {
      init: function () {
        b.filter(".rangeHero").on("click", "a[data-scrollto]", j)
      }
    }
  }());
  var c = (function () {
    var k = [];
    var l = {
      summary: "summary",
      details: "details"
    };

    function j(m) {
      this.$panel = m;
      this.$content = m.find(".productContent");
      this.$toggler = m.find(".productToggler");
      this.$toggleButton = m.find(".productToggler button");
      this.$summary = m.find(".productSummary");
      this.$details = m.find(".productDetails");
      this.$detailsHeader = m.find(".productDetailsHeader");
      this.$detailsContent = m.find(".productDetailsContent");
      this.$detailsFooter = m.find(".productDetailsFooter");
      this.isAnimating = false;
      this.$toggleButton.on("click", this.toggle.bind(this));
      this.setPanelHeight()
    }
    j.prototype.isOpen = function () {
      return this.$panel.hasClass("open")
    };
    j.prototype.isPanelPreviewEnabled = function () {
      return this.$panel.hasClass("noPreview") === false
    };
    j.prototype.toggle = function () {
      var m = HONDA.analytics.getEventData(this.$toggleButton);
      this[this.isOpen() ? "close" : "open"]();
      if (m) {
        m.eventAction = HONDA.helpers.stringReplace(m.eventAction, this.$summary.is(":visible") ? "Open" : "Close");
        HONDA.analytics.push(m)
      }
    };
    j.prototype.open = function () {
      var m = this;
      if (this.isAnimating) {
        return
      }
      this.isAnimating = true;
      this.$panel.scrollIntoView();
      this.$panel.addClass("open");
      this.swapPanelHeight();
      this.$content.onPropertyTransitionEnd("transform", function () {
        m.isAnimating = false;
        m.setContentType(l.details);
        m.$panel.addClass("show");
        m.setDetailsHeight()
      })
    };
    j.prototype.close = function () {
      var m = this;
      if (this.isAnimating) {
        return
      }
      this.isAnimating = true;
      this.$panel.removeClass("show");
      this.$content.onPropertyTransitionEnd("opacity", function () {
        m.isAnimating = false;
        m.$panel.removeClass("open");
        m.swapPanelHeight();
        m.setContentType(l.summary)
      })
    };
    j.prototype.getPanelHeight = function () {
      var m = 0;
      if (HONDA.breakpoints.current >= HONDA.breakpoints.small) {
        var n = [this.$panel.outerHeight(), a.innerHeight()];
        if (this.$details.is(":visible")) {
          n.push(this.$details.outerHeight())
        }
        m = Math.max.apply(null, n);
        if (this.isPanelPreviewEnabled()) {
          m -= 24
        }
      } else {
        m = this.$panel.outerHeight()
      }
      return m
    };
    j.prototype.setPanelHeight = function () {
      this.$panel.css("height", "").css("transition", "none");
      this.$details.css("height", "");
      this.$panel.css("height", this.getPanelHeight() || "");
      this.$panel.css("transition", "")
    };
    j.prototype.setContentType = function (m) {
      this.$panel.attr("data-content-type", m).redrawDOM()
    };
    j.prototype.swapPanelHeight = function () {
      var n = this.$panel.outerHeight();
      var m = 0;
      this.$panel.css("height", "");
      this.setContentType(this.isOpen() ? l.details : l.summary);
      m = this.getPanelHeight();
      this.setContentType(this.isOpen() ? l.summary : l.details);
      this.$panel.css("height", n).redrawDOM();
      this.$panel.css("height", m)
    };
    j.prototype.setDetailsHeight = function () {
      this.$details.css("height", "");
      if (this.isOpen()) {
        var m = this.getPanelHeight();
        if (HONDA.breakpoints.current < HONDA.breakpoints.large) {
          m -= (this.$toggleButton.height() / 2 + 16);
          m -= this.$toggler.outerHeight()
        }
        this.$details.css("height", Math.round(m))
      }
    };
    j.prototype.resize = function () {
      this.setPanelHeight();
      this.setDetailsHeight()
    };
    return {
      init: function () {
        e.find(".productPanel").each(function () {
          k.push(new j($(this)))
        })
      },
      resize: function () {
        k.forEach(function (m) {
          m.resize()
        })
      }
    }
  }());
  var f = (function () {
    function k(l) {
      var m = d.scrollTop();
      b.each(function (n) {
        var o = n === 0 ? 0 : Math.round($(this).offset().top);
        if (o > m) {
          $(this).scrollIntoView();
          return false
        }
      })
    }

    function j() {
      var l = false;
      if (HONDA.breakpoints.current >= HONDA.breakpoints.small) {
        l = d.scrollTop() + a.innerHeight() < e.bottom()
      }
      e.attr("data-enable-scroll-to", l)
    }
    return {
      init: function () {
        j();
        e.on("click", ".scrollTo:not(.discoverMore)", k);
        d.on("scroll", j)
      },
      resize: function () {
        j()
      }
    }
  }());

  function i() {
    c.resize();
    f.resize()
  }
  var h = function () {
    if (e.length) {
      g.init();
      c.init();
      f.init();
      if ($("html").hasClass("no-touch")) {
        d.on("resize.viewport", i)
      } else {
        a.on("orientationchange", i)
      }
    }
  };
  return {
    init: h
  }
}(jQuery));
/*!
 * Honda platform - Video content above/below
 */
var HONDA = window.HONDA || {};
HONDA.videoContentAbove = (function (b) {
  var a = b(".videoContentAbove, .videoContentBelow");
  var c = function () {
    HONDA.YouTubePlayer.init(a, {
      module: {
        resizeVideoProportionally: true
      }
    })
  };
  return {
    init: c
  }
}(jQuery));
/*!
 * Honda platform - Config Moment Design
 */
HONDA.configurationMoment = (function (z, F, h) {
  var b = "current",
    q = 10,
    H = 20,
    l = "smallArch",
    j = "largeArch",
    J = 0,
    x, p, L = "fallingDrop";
  var C = z(".configMomentDesign");
  var w, n, i, D, o, d, G;
  var B = C.data("url");
  var I = false;
  var v = function (O, P) {
    var Q = z.ajax({
      url: O,
      dataType: "json",
      timeout: 30000,
      type: "GET"
    });
    Q.done(P)
  };
  var r = function (O) {
    var P = o.find("p");
    if (x[O].additionalInfo.length > 0) {
      P.text(x[O].additionalInfo);
      P.show()
    } else {
      P.hide()
    }
  };
  var g = function () {
    i.css("min-height", D.height())
  };
  var c = function (O) {
    var P = x[O];
    var Q = z("<img />").attr("src", P.imgUrl);
    g();
    Q.one("load", function () {
      if (I) {
        i.animate({
          opacity: 0
        }, 500, function () {
          D.attr({
            src: P.imgUrl,
            alt: P.alt
          });
          i.animate({
            opacity: 1
          }, 500);
          g()
        })
      } else {
        D.removeClass("showImage").on("webkitTransitionEnd transitionend", function () {
          D.attr({
            src: P.imgUrl,
            alt: P.alt
          });
          D.addClass("showImage");
          g()
        })
      }
    }).each(function () {
      if (this.complete) {
        z(this).load()
      }
    })
  };
  var E = function (O) {
    z("html, body").animate({
      scrollTop: O.offset().top
    }, 1000).clearQueue()
  };
  var M = function (O) {
    G.removeClass(L);
    E(d.prev());
    var P = z(O.currentTarget).position().top + Math.floor(d.position().top) + d.outerHeight(true) + H + "px";
    if (z(F).width() < 400) {
      G.css("top", parseInt(P, 10) - 100)
    } else {
      G.css("top", P)
    }
    G.css({
      backgroundColor: z(O.currentTarget).css("backgroundColor"),
      left: O.currentTarget.offsetLeft + q + Math.abs(d.position().left) + "px"
    }).addClass(L)
  };
  var f = function (Q) {
    Q.preventDefault();
    Q.stopPropagation();
    var P = z(Q.currentTarget);
    var O = C.find("ul li").index(Q.currentTarget);
    if (!P.hasClass(b)) {
      o.find("h3").text(x[O].name);
      c(O);
      if (!P.hasClass(b)) {
        n.removeClass(b)
      }
      r(O);
      z(P).addClass(b)
    }
  };
  var k = function (P, S, O, Q) {
    var R = 0;
    if (P <= S) {
      R = P * Q
    } else {
      if (O && P === S + 1) {
        R = (P - 1) * Q
      } else {
        R = p * Q;
        p -= 1
      }
    }
    return R
  };
  var y = function (R, Q, O, P) {
    if (R !== J) {
      if (P > 4) {
        d.addClass(j)
      } else {
        d.addClass(l)
      }
    } else {
      d.removeClass(l).removeClass(j)
    }
    n.each(function (S, T) {
      T.style.bottom = (R !== 0) ? (k(S, R, O, Q) + "px") : J
    })
  };
  var a = function () {
    var P = n.length,
      R = P / 2,
      O = P % 2 ? false : true,
      Q = Math.floor(R) - 1;
    if (P === 3) {
      Q = 1;
      O = false;
      p = 0
    } else {
      p = O ? Q - 1 : Q + 1
    }
    y(Q, q, O, P)
  };
  var s = function () {
    if (HONDA.is.mobile()) {
      y(J, J, J, J)
    } else {
      a()
    }
  };
  var e = function () {
    var P = d.find("li." + b).index();
    var O = {
      type: "exteriors",
      data: x[P],
      isConfigured: false
    };
    if (x.modelBody !== undefined && x.modelBody !== "" && x.year !== undefined && x.year !== "") {
      z.cookie("configurator_" + x.modelBody + x.year + "_preconfigured", JSON.stringify(O), {
        path: "/"
      })
    }
  };
  var t = function () {
    s();
    g()
  };
  var N = function () {
    n.on("touchstart click", f);
    n.on("touchstart click", M);
    w.on("touchstart click", e);
    z(h).on("resize.viewport", t)
  };
  var A = function () {
    var P = JSON.parse(z.cookie("configurator_" + x.modelBody + x.year + "_preconfigured"));
    var O = JSON.parse(z.cookie("configurator_" + x.modelBody + x.year + "_persistent"));
    if (O === null && (P === null || P === undefined || !P.isConfigured)) {
      w.show();
      w.attr("aria-hidden", "false")
    }
  };
  var u = function (O) {
    x = O;
    N();
    A()
  };
  var m = function () {
    w = C.find(".buildConfiguration a");
    n = C.find("li");
    i = C.find(".productImage");
    D = i.find("img");
    o = C.find(".colourInfo");
    d = C.find("ul")
  };
  var K = function () {
    if (C.length !== 0) {
      m();
      v(B, u);
      s();
      C.find(".wrapperInner").append('<div class="fallingDrop" />');
      G = z(".fallingDrop");
      o.append("<p />");
      o.find("p").hide();
      if (z("html").hasClass("ie9") || z("html").hasClass("ie8")) {
        I = true
      }
      var O = i.find("img:first");
      if (O.length) {
        O.one("load", function () {
          g()
        }).each(function () {
          if (this.complete) {
            z(this).load()
          }
        })
      }
    }
  };
  return {
    init: K
  }
}(jQuery, window, document));
/*!
 * Honda platform - Config Moment Performance
 */
HONDA.configMomentPerf = (function (d) {
  var c = d(".configMomentPerf");
  var b = ".grouped-area";
  var f = "tr.emissions";
  var a = function (g, h) {
    d(h).filter(":even").addClass("odd");
    d(h).filter(":odd").addClass("even")
  };
  var e = function (h, g) {
    g.each(function () {
      var i = d(this);
      var j = d(this).prev("tr").find("td.co2Emissions28Ico a");
      j.on("click", function (k) {
        k.preventDefault();
        i.toggleClass("open");
        j.toggleClass("open")
      })
    });
    d([h.find("tbody tr:not(" + b + ")").not(g)]).each(a)
  };
  c.each(function (k, o) {
    var l = d(o);
    var j = l.find(b);
    var g = l.find(f);
    var m;
    var n;
    var p;
    var h;
    if (g.length) {
      e(l, g)
    } else {
      if (j.length > 0) {
        m = j.siblings().not(":first");
        n = m.filter(b).index();
        if (n > -1) {
          p = m.slice(0, n);
          h = m.slice(n);
          d([p, h]).each(a)
        } else {
          d([m]).each(a)
        }
      }
    }
  })
}(jQuery));
/*!
 * Honda platform - Search results
 */
var HONDA = window.HONDA || {};
HONDA.searchResults = function () {
  if ($("html").hasClass("ie8")) {
    $(".listResults li:even").addClass("odd")
  }
};
/*!
 * Honda platform - Multiple product lines
 */
var HONDA = window.HONDA || {};
HONDA.productLines = (function () {
  var h = $(".productLines");
  var f = h.find(".productLinesList");
  var b = h.find(".btnToggle");
  var c = b.find(".icon");
  var g = b.data("hide-text");
  var j = b.data("show-text");
  var i = "webkitTransitionEnd transitionend";
  var d = function () {
    if (Modernizr.csstransitions) {
      f.on(i, function (l) {
        if (l.originalEvent.propertyName === "max-height") {
          f.off(i)
        }
      })
    }
    f.addClass("hide");
    c.html(j).removeClass("expandIco").addClass("contractIco")
  };
  var e = function () {
    if (Modernizr.csstransitions) {
      f.on(i, function (l) {
        if (l.originalEvent.propertyName === "max-height") {
          f.off(i)
        }
      })
    }
    f.removeClass("hide");
    c.html(g).removeClass("contractIco").addClass("expandIco")
  };
  var a = function () {
    d();
    b.on("click", function (l) {
      l.preventDefault();
      if (f.hasClass("hide")) {
        e()
      } else {
        d()
      }
    })
  };
  var k = function () {
    if (h.length && f.find("ul").data("product-count") > 1) {
      a()
    }
  };
  return {
    init: k
  }
}());
/*!
 * Honda platform - Product Details
 */
var HONDA = window.HONDA || {};
HONDA.productDetails = (function () {
  var a = $(".productTitleConfiguredCar");
  _.each(a, function (b) {
    var c = $(b).find("li");
    _.each(c, function (f) {
      var d = $(f);
      if (d.data("cookie-name")) {
        var h = d.data("cookie-name"),
          e = $.cookie("configurator_" + h + "_persistent");
        if (e !== null) {
          var g = d.data("configured-product-title");
          if (g) {
            d.find("a").text(g)
          }
        }
      }
    })
  })
}());
/*!
 * Honda platform - Common CTA's
 */
var HONDA = window.HONDA || {};
HONDA.commonCTAs = {
  checkMobileAndAddToMainNav: function (b) {
    var a = $(".slimNavInsert");
    if (HONDA.is.mobile) {
      a.append(b)
    }
  },
  cloneAndRemoveElement: function (b) {
    var a = b.clone();
    HONDA.commonCTAs.checkMobileAndAddToMainNav(a, b)
  },
  init: function () {
    var a = $(".globalCtas");
    HONDA.commonCTAs.cloneAndRemoveElement(a)
  }
};
var HONDA = window.HONDA || {};
HONDA.Modal = (function () {
  var b = $(window);
  var h = $(document);
  var c = $("html, body");
  var m = $('<div class="modalOverlay" />');
  var n = $(".portalHeader");
  var d = $(".portalFooter");
  var q = $(".modalVideoTemplate");
  var a = {};
  var p = {
    open: "modal-open",
    close: "modal-close",
    keydown: "keydown.modal"
  };
  var g = {
    nonVideoDialog: ".modalDialog:not(.modalVideoDialog)",
    videoGrid: '.videoGrid[data-video-grid-init!="false"]'
  };
  if (!q.length) {
    q = $("#template_modal_video")
  }

  function k(t) {
    var v = $.trim(q.html());
    var u = typeof t.videoId === "string" ? t.videoId : t.videoUrl;
    var r = typeof t.videoEventLabel === "string" ? t.videoEventLabel : "";
    var s = $.isPlainObject(t.analytics) ? JSON.stringify(t.analytics) : "";
    v = v.replace(/\{VIDEO_URL\}/g, u);
    v = v.replace(/\{EVENT_LABEL\}/g, r);
    v = v.replace(/\{ANALYTICS_DATA\}/g, s);
    return v
  }

  function l(t) {
    var s = $('.modalDialog[data-modal-id="' + t + '"]').detach();
    if (s.data("video-url") && q.length && !s.find(".video-player-wrapper").length) {
      $(".modalVideoWrapper .video-player").css("height", $(window).height());
      var r = $(k(s.data()));
      r.find(".video-player-wrapper").attr("data-video-event-label", s.data("video-event-label"));
      s.append(r);
      s.redrawDOM();
      r.find(".modalClose").hide();
      HONDA.YouTubePlayer.init(s, {
        api: {
          controls: 0
        }
      });
      window.addEventListener("resize", function () {
        $(".modalVideoWrapper .video-player").css("height", $(window).height())
      }, false)
    }
    a[t] = s
  }

  function j(w) {
    var y = $(w.currentTarget).data("modal-id");
    var v = $(w.currentTarget).closest(".videoGrid").length;

    function s() {
      if (_.isFunction(m.find(".video-player-wrapper").data("video-player").player.playVideo)) {
        m.find(".video-player-wrapper").redrawDOM();
        window.setTimeout(function () {
          m.find(".video-player-wrapper").data("video-player").player.playVideo()
        }, 1000)
      }
    }

    function t() {
      m.prepend(a[y]);
      if (m.find(".video-player-wrapper").length) {
        if (Modernizr.cssanimations) {
          m.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function (z) {
            if ($(z.target).hasClass("modalVideoDialog") && m.hasClass("open")) {
              s()
            }
          })
        } else {
          window.setTimeout(function () {
            s()
          }, 2000)
        }
      }
      m.show().redrawDOM();
      m.addClass("open");
      m.trigger(p.open);
      m.find(".carousel").each(function () {
        var z = $(this).data("carousel");
        if (z) {
          z.setupModal()
        }
      });
      HONDA.ScrollLock.enable()
    }
    w.preventDefault();
    if (y) {
      if (!a[y]) {
        l(y)
      }
      var u = a[y].data("parent");
      var x = h.scrollTop();
      var r = u && u.length ? u.offset().top : null;
      if (r) {
        if (!HONDA.is.mobile()) {
          r -= n.outerHeight()
        }
        if (r === x || v) {
          t()
        } else {
          c.stop().animate({
            scrollTop: r
          }, 700, function () {
            t()
          })
        }
      } else {
        t()
      }
    }
  }

  function o(r) {
    var s = $(r.currentTarget).parents(".modalDialog").data("modal-id");
    r.preventDefault();
    if (s) {
      m.onAnimationEnd(function () {
        l(s);
        m.hide();
        m.trigger(p.close);
        HONDA.ScrollLock.disable()
      });
      m.removeClass("open")
    }
  }

  function i(t) {
    var s = $(t.currentTarget).parents(".modalDialog");
    var r = s.data("parent").find(".nextSlide button");
    t.preventDefault();
    m.one(p.close, function () {
      window.setTimeout(function () {
        r.trigger("click", [true])
      }, 300)
    });
    m.find(".modalClose").trigger("click")
  }

  function f() {
    m.appendTo("body");
    $(g.nonVideoDialog).each(function (r) {
      var s = $(this);
      var t = s.hasClass("modalDialogPortalSocial") ? d : s.closest(".fullScreenPanel");
      s.data("parent", t)
    });
    $(document).on("click", ".modalOpen", j);
    $(document).on("click", ".modalClose", o);
    $(document).on("click", g.nonVideoDialog + " .nextSlide button", i)
  }
  var e = (function () {
    var s = "videoGridModal";
    var v = {
      enableBreakPoint: null,
      enableForIOS: true,
      keepRatioFullscreen: false,
      player: {
        api: {
          controls: 0,
          fs: 0
        }
      }
    };

    function u(x, w) {
      this.settings = $.extend(true, {}, v, w);
      this.$modal = $('.modalVideoDialog[data-modal-id="' + x.data("modal-id") + '"]');
      this.$video = this.$modal.append(k(this.$modal.data())).find(".video-player-wrapper");
      this.$closer = this.$modal.find(".modalClose");
      this.$opener = x;
      this.$modal.addClass("videoFullScreen");
      this.$opener.attr("data-video-modal-setup", true);
      this.$modal.attr("data-active", false);
      this.$modal.attr("data-keep-ratio-fullscreen", this.settings.keepRatioFullscreen);
      HONDA.YouTubePlayer.init(this.$modal, this.settings.player);
      this.$opener.on("click", this.open.bind(this));
      this.$closer.on("click", this.close.bind(this));
      this.$video.on(HONDA.YouTubePlayer.events.ended, this.close.bind(this));
      this.$video.on(HONDA.YouTubePlayer.events.paused, this.close.bind(this));
      this.$video.on("click", this.togglePlayback.bind(this))
    }
    u.prototype = {
      isVideoReady: function () {
        var w = this.$video.data("video-player");
        if (w && w.player instanceof YT.Player) {
          return typeof w.player.getPlayerState === "function" && w.player.getPlayerState() !== YT.PlayerState.UNSTARTED
        }
        return false
      },
      isEnabled: function () {
        var w = true;
        var x = HONDA.breakpoints[this.settings.enableBreakPoint];
        if (typeof x === "number") {
          w = HONDA.breakpoints.current >= x
        }
        if (HONDA.is.iOS() && !this.settings.enableForIOS) {
          w = false
        }
        return w
      },
      open: function (w) {
        if (this.isVideoReady()) {
          this.$modal.attr("data-active", true).trigger(p.open);
          if (this.isEnabled()) {
            this.$video.data("video-player").player.playVideo();
            this.$modal.fadeIn();
            HONDA.ScrollLock.enable();
            HONDA.zIndexForFullScreenOverlay.restrict();
            h.on(p.keydown, this.close.bind(this));
            if (this.settings.keepRatioFullscreen) {
              this.resize();
              h.on("resizeViewport.modalVideo", this.resize.bind(this))
            }
          }
          if (w) {
            w.preventDefault()
          }
        }
      },
      close: function (y) {
        if (y && ((y.type === "keydown" && y.keyCode !== 27) || (y.type === HONDA.YouTubePlayer.events.paused && this.$closer.is(":visible")))) {
          return
        }
        if (this.isVideoReady()) {
          this.$modal.attr("data-active", false).trigger(p.close);
          if (this.isEnabled()) {
            var w = this;
            var x = this.$video.data("video-player");
            x.player.pauseVideo();
            this.$modal.fadeOut(function () {
              if (typeof x.player.seekTo === "function") {
                x.player.seekTo(0)
              }
              $(this).css("display", "")
            })
          } else {
            this.$modal.css("display", "")
          }
          HONDA.ScrollLock.disable();
          HONDA.zIndexForFullScreenOverlay.restore();
          h.off(p.keydown);
          if (this.settings.keepRatioFullscreen) {
            h.off("resizeViewport.modalVideo")
          }
          if (y) {
            y.preventDefault()
          }
        }
      },
      togglePlayback: function () {
        if (this.settings.keepRatioFullscreen && this.isVideoReady() && this.isEnabled()) {
          var w = this.$video.data("video-player");
          if (w.player.getPlayerState() === YT.PlayerState.PLAYING) {
            w.player.pauseVideo()
          } else {
            w.player.playVideo()
          }
        }
      },
      resize: function () {
        if (this.isEnabled() && this.isVideoReady()) {
          var z = $(this.$video.data("video-player").player.getIframe());
          var y = this.$modal.outerWidth();
          var w = this.$modal.outerHeight();
          var x = z.width("").width() / z.height("").height();
          if (w * x > y) {
            y = w * x
          } else {
            w = y / x
          }
          z.css({
            width: y,
            height: w
          })
        }
      },
      reset: function (w) {
        this.settings = $.extend(true, {}, v, w);
        this.$modal.attr("data-keep-ratio-fullscreen", this.settings.keepRatioFullscreen);
        if (this.$video && this.$video.length) {
          var x = this.$video.data("video-player");
          if (x && x.player instanceof YT.Player) {
            if (w instanceof Object) {
              x.reset(true, w.player)
            } else {
              x.reset()
            }
          }
        }
      }
    };

    function r(w, x) {
      if ($("html").hasClass("ie8") || !q.length) {
        return
      }
      if (w instanceof jQuery) {
        w.find('.modalVideoOpen[data-modal-id][data-video-modal-setup!="true"]').each(function () {
          $(this).data(s, new u($(this), x))
        })
      }
    }

    function t(w, y) {
      if ($("html").hasClass("ie8") || !q.length) {
        return
      }
      if (w instanceof jQuery) {
        var A = w.find(".modalVideoOpen[data-modal-id]");
        var z = A.filter('[data-video-modal-setup="true"]');
        var x = A.filter('[data-video-modal-setup!="true"]');
        z.each(function () {
          var B = $(this).data(s);
          if (B instanceof u) {
            B.reset(y)
          }
        });
        if (x.length) {
          r(x, y)
        }
      }
    }
    return {
      name: s,
      setup: r,
      reset: t
    }
  }());
  return {
    $overlay: m,
    events: p,
    init: function () {
      var r = $(g.videoGrid);
      if ($(g.nonVideoDialog).length) {
        f()
      }
      if (r.length) {
        e.setup(r)
      }
    },
    VideoGrid: e
  }
}());
/*!
 * Honda platform - Model Selector
 */
var HONDA = window.HONDA || {};
HONDA.ModelSelector = (function () {
  var k = $(".modelSelector");
  var f = k.find(".productList");
  var c = "active";
  var u = "current";
  var b = "showSecondaryMenu";
  var s = "webkitTransitionEnd transitionend";
  var h = Modernizr.csstransforms && Modernizr.csstransitions;
  var l = !!$(".bookTestDrive").length;
  var o = !!$(".orderBrochure").length;
  var p = $("html").hasClass("ie8");
  var m = function (v) {
    return v.type === "click" || v.keyCode === 13
  };
  var j = function () {
    return k.hasClass(b)
  };
  var e = function (v) {
    if (v.type === "keydown") {
      f.find("li:first-child a").focus()
    }
  };
  var a = function () {
    var v = 0;
    if (j()) {
      v = f.find("." + c + " .productType").height()
    } else {
      v = f.height()
    }
    k.height(v)
  };
  var i = function () {
    k.find(".productTypeHeading a").iePseudoFix()
  };
  var q = function (v, x) {
    var w = v.attr("href");
    if (l) {
      HONDA.analytics.push({
        event: "Test drive",
        eventCategory: "Test drive",
        eventAction: "Model selected",
        eventLabel: $.param(LBI.common.getStringQueries(w)).split("model=")[1]
      })
    } else {
      if (o) {
        HONDA.analytics.push({
          event: "Brochure request",
          eventCategory: "Brochure request",
          eventAction: "Model selected",
          eventLabel: v.data("model")
        })
      }
    }
    if (!x) {
      window.setTimeout(function () {
        document.location.href = w
      }, 500)
    }
  };
  var r = function (B) {
    if (m(B)) {
      var A = $(B.currentTarget).parents("li:first");
      var w = A.find("> .model");
      var y = A.find(".productTypeHeading");
      var v = k.offset().top;
      B.preventDefault();
      if (j() && !w.parents(".productType").length) {
        return false
      }
      if (w.hasClass("productFamily")) {
        var z = function () {
          A.addClass(c);
          k.addClass(b);
          a();
          if (h) {
            y.on(s, function (C) {
              if (HONDA.getEventPropertyName(C) === "opacity") {
                y.off(s);
                e(C)
              }
            })
          } else {
            e(B);
            if (p) {
              i()
            }
          }
        };
        if ($(document).scrollTop() > v) {
          $("html, body").animate({
            scrollTop: v
          }, 300, function () {
            z()
          })
        } else {
          z()
        }
      } else {
        var x = A.find(".reevooBadgeHolder a");
        f.find("li." + u).removeClass(u);
        A.addClass(u);
        if (x.length) {
          x[0].click()
        }
        q(w, !!x.length)
      }
    }
  };
  var n = function (x) {
    if (m(x)) {
      var v = $(x.currentTarget);
      var w = v.parents("." + c);
      x.preventDefault();
      w.removeClass(c);
      k.removeClass(b);
      a();
      if (h) {
        f.on(s, function (y) {
          if (HONDA.getEventPropertyName(y) === "transform") {
            f.off(s);
            e(y)
          }
        })
      } else {
        e(x)
      }
    }
  };
  var g = function () {
    a()
  };
  var d = function () {
    f.on("click keydown", ".model, .reevooGroupLink", r);
    f.on("click keydown", ".productTypeHeading a", n);
    $(window).on("resize", g)
  };
  var t = function () {
    if (f.length) {
      d()
    }
  };
  return {
    init: t
  }
}());
var HONDA = window.HONDA || {};
HONDA.PortalCampaign = (function () {
  var j = $(window);
  var v = $(document);
  var p = $(".portalCampaign");
  var m = $(".portalNavigation");
  var w = $(".portalHeader");
  var g = $(".portalSidebar");
  var q = $(".portalFooter");
  var d = $("#page");
  var l = $("#outer");
  var n = $("body");
  var b = $("html, body");
  var o = $(".campaignCountdown");
  var c = null;
  var t = null;
  var e = "transitionend webkitTransitionEnd";
  var k = !!p.find(".campaignCountdown").length;

  function u() {
    var A = {
      scroll: "scroll.header"
    };
    var B = {
      sticky: "sticky"
    };

    function z() {
      m.addClass(B.sticky)
    }

    function y() {
      m.removeClass(B.sticky)
    }
    if (c.length) {
      v.on(A.scroll, function () {
        if (HONDA.is.mobile()) {
          y();
          return
        }
        if (v.scrollTop() > Math.floor(d.offset().top) - w.height()) {
          z()
        } else {
          y()
        }
      });
      HONDA.cookiesAlert.callAfterHide.push(function () {
        v.off(A.scroll);
        z()
      })
    } else {
      z()
    }
  }

  function f() {
    var y = $(".portalSidebarTrigger");
    var A = $(".portalSidebar .scrollArea");
    var P = $('<div class="portalSidebarMask" />').appendTo(m);
    var E = t.filter(".introduction");
    var K = window.location.hash;
    var B = true;
    var H = null;
    var Q = 4000;
    var z = {
      cancel: "mouseover.sidebar touchstart.sidebar",
      closed: "closed.sidebar"
    };
    var N = {
      open: "portalSidebarOpen"
    };

    function J() {
      return n.hasClass(N.open)
    }

    function M(R) {
      if (!J() && (!Modernizr.csstransitions || HONDA.getEventPropertyName(R) === "transform")) {
        A.scrollTop(0);
        g.hide();
        y.trigger("portalSidebarClosed");
        if (HONDA.is.mobile()) {
          HONDA.ScrollLock.disable()
        }
      }
    }

    function L() {
      window.clearTimeout(H);
      H = null;
      g.off(z.cancel)
    }

    function O() {
      var R = j.innerHeight() - parseInt(g.css("padding-top"), 10);
      g.height(R);
      P.height(R)
    }

    function G() {
      if (HONDA.is.mobile()) {
        v.scrollTop(0);
        HONDA.ScrollLock.enable()
      }
      g.show().redrawDOM();
      O();
      window.setTimeout(function () {
        n.addClass(N.open)
      }, 100)
    }

    function I() {
      n.removeClass(N.open);
      if (H) {
        L()
      }
      if (!Modernizr.csstransitions) {
        M()
      }
    }

    function C(R) {
      var S;
      if (R || HONDA.is.mobile() || HONDA.is.touchDevice() || m.hasClass("sticky")) {
        S = "100%"
      } else {
        S = j.innerHeight() - c.height() - w.height()
      }
      A.height(S)
    }

    function D() {
      H = window.setTimeout(function () {
        I()
      }, Q);
      g.on(z.cancel, L)
    }
    if (K && K !== "" && K !== "#") {
      B = !t.filter(K).length
    }
    g.on(e, M);
    y.on("click", function (R) {
      R.preventDefault();
      if (J()) {
        I()
      } else {
        G()
      }
    });
    P.on("click", I);
    j.on("resize", function () {
      if (HONDA.is.mobile() && J()) {
        v.scrollTop(0);
        l.scrollTop(0)
      }
      O()
    });
    if (c.length) {
      j.on("resize", _.throttle(C, 300));
      C()
    }
    if (B) {
      var F = E.find("> .imageBackground > div:visible").css("background-image");
      if (typeof F === "string") {
        F = F.replace(/(url\(["|']?)|(["|']?\))/g, "");
        $("<img />").attr("src", F).load(function () {
          $(this).remove();
          D()
        })
      } else {
        D()
      }
      G()
    }
  }

  function a() {
    var z = $(".parallax-container");
    var y = Modernizr.csstransforms && !HONDA.is.touchDevice();
    z.each(function (B) {
      var A = new Image();
      A.onload = function () {
        z.eq(B).data({
          width: A.width,
          height: A.height
        }).imageScroll({
          parallax: y,
          speed: 0.4
        })
      };
      A.src = $(this).data("image")
    })
  }

  function i() {
    var y = o,
      A = $(o).data("url"),
      B = "/etc/designs/honda/theme_inclusive/img/portal/countdown_overlay",
      D = $(".clockOverlay"),
      F = 12,
      z, C;
    $($(".clockOverlay")[11]).css("opacity", 1);

    function E() {
      if (F > parseInt(z, 10)) {
        F--;
        $($(".clockOverlay")[F - 1]).css("opacity", "1");
        $($(".clockOverlay")[F]).css("opacity", "0");
        $(y).find(".days").html("0" + (F));
        C = window.setTimeout(E, 500)
      }
    }
    $(".portalSidebarTrigger").one("portalSidebarClosed", function () {
      E()
    });
    $.ajax({
      url: A,
      dataType: "json",
      success: function (G) {
        z = G.daysToLaunch
      },
      error: function (G) {}
    });
    window.setTimeout(function () {
      if (F === 12) {
        E()
      }
    }, 10000)
  }

  function h() {
    q.find(".backToTop a").on("click", function () {
      b.stop().animate({
        scrollTop: 0
      }, 700)
    })
  }

  function s(z) {
    z.preventDefault();
    var y = $(z.target).closest(".fullScreenPanel").nextAll(".fullScreenPanel");
    if (y.length) {
      y = y.eq(0)
    } else {
      y = $(".portalFooter")
    }
    HONDA.ScrollingHeader.Scroller.scrollTo(y)
  }

  function x() {
    p.on("click", ".nextSlide button", s)
  }

  function r() {
    t.each(function (y) {
      $(this).find(".nextSlide button").attr("data-slide-index", y)
    })
  }
  return {
    init: function () {
      if (p.length) {
        t = p.find(".fullScreenPanel");
        c = $("#pageBillboard");
        if (!HONDA.is.CQEditMode()) {
          r();
          u();
          f();
          h()
        }
        if (k) {
          i()
        } else {
          a()
        }
        x()
      }
    }
  }
}());
/*!
 * Honda platform - QA query string params
 */
var HONDA = window.HONDA || {};
HONDA.debugByQueryString = {
  init: function () {
    this.registerEvents()
  },
  getValueFromQueryString: function (a) {
    a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var c = new RegExp("[\\?&]" + a + "=([^&#]*)"),
      d = window.location.search,
      b = c.exec(d);
    return b === null ? "" : decodeURIComponent(b[1].replace(/\+/g, " "))
  },
  openPrimaryNavByQueryString: function () {
    var a = +this.getValueFromQueryString("openflyout") - 1,
      d = $(".hondaHeader nav.primaryNavigation li a"),
      b = d[a],
      c = b ? $(d[a]) : false;
    if (c) {
      c.trigger("click")
    }
  },
  registerEvents: function () {
    var a = this;
    $("#page").bind("primaryNavDebug", function () {
      a.openPrimaryNavByQueryString()
    })
  }
};
/*!
 * Honda platform - Results List Map
 */
var HONDA = window.HONDA || {};
HONDA.resultsListMap = {
  map: {
    config: function (b) {
      var a = {
        selectMarker: b.selectMarker || undefined,
        callback: function () {
          HONDA.resultsListMap.$tabMap.trigger("click")
        },
        markerCallback: function (c) {
          HONDA.resultsListMap.map.addMarkerEvents(c)
        }
      };
      return a
    },
    addMarkerEvents: function (a) {
      if (a.markerType !== "search") {
        google.maps.event.addListener(a, "click", HONDA.resultsListMap.map.handleMarkerClick)
      }
    },
    handleMarkerClick: function () {
      if ($("#tabMap").closest("li").hasClass("active")) {
        var f = HONDA.resultsListMap.$map.data("plugin_maps");
        var e = HONDA.is.mobile() ? "mobile" : "desktop";
        var d = f.defaults.markers.selected[e];
        var c = null;
        var b = null;
        var a = 0;
        var g = f.markers.length;
        if (this.markerType === "result") {
          this.setIcon({
            origin: new google.maps.Point(d.x, d.y),
            size: new google.maps.Size(d.width, d.height),
            url: f.defaults.sprite
          })
        }
        f.overlay.update(this.markerData);
        if (this.markerText) {
          $(this.markerText.elem).addClass("selected").css("z-index", "1001")
        }
        for (a = 0; a < g; a = a + 1) {
          c = f.markers[a];
          if (c.markerType === "result" && c.markerId !== this.markerId) {
            b = f.defaults.markers.result[e];
            c.setIcon({
              origin: new google.maps.Point(b.x, b.y),
              size: new google.maps.Size(b.width, b.height),
              url: f.defaults.sprite
            });
            if (c.markerText) {
              $(c.markerText.elem).removeClass("selected").css("z-index", 900 + (g - a))
            }
          }
        }
      }
    },
    selectMarker: function (c) {
      var b = HONDA.resultsListMap.$map.data("plugin_maps");
      if (b) {
        var a = _.first(_.where(b.markers, {
          markerId: c
        }));
        google.maps.event.trigger(a, "click");
        b.map.setCenter(a.getPosition());
        b.map.setZoom(15)
      }
    }
  },
  setMapHeight: function () {
    var b = $(window).height();
    var a = (this.$tabs.offset().top + this.$tabs.outerHeight(true)) - this.$module.offset().top;
    var c = b - a;
    if (c < b * 0.5 && this.$map.css("min-height") < b) {
      c = "auto"
    }
    this.$map.css("height", Math.round(c));
    return this
  },
  scrollToMap: function (a, c) {
    var b = this.$map.offset().top;
    if (this.$scroll.scrollTop() < b || a) {
      this.$scroll.animate({
        scrollTop: b
      }, 250, function () {
        if (_.isFunction(c)) {
          c()
        }
      })
    }
  },
  showMap: function (a) {
    var b = this.$map.data("plugin_maps");
    if (!b) {
      var c = {
        markerCallback: function (d) {
          HONDA.resultsListMap.map.addMarkerEvents(d)
        }
      };
      this.$map.maps($.extend({}, c, a))
    }
  },
  showMapMarker: function (f) {
    f.preventDefault();
    var b = this;
    var d = this.$map.data("plugin_maps");
    var a = $(f.currentTarget);
    var c = a.data("markerid") || a.parents(".territoryDealer").find(".loadedContent").data("markerid");
    if (_.isUndefined(c)) {
      c = a.closest("li[data-markerid]").data("markerid")
    }
    this.scrollToMap(true, function () {
      if (d) {
        b.map.selectMarker(c);
        b.$tabMap.trigger("click")
      } else {
        b.$tabs.data("tabs").show(b.$tabMap, function () {
          b.showMap({
            onComplete: function (e) {
              HONDA.resultsListMap.map.selectMarker(e)
            },
            onCompleteData: c
          })
        })
      }
    })
  },
  tabChange: function (b) {
    var a = this.$map.data("plugin_maps");
    if (b.tabSelected.toLowerCase() === "map") {
      this.$footer.hide();
      this.setMapHeight();
      this.scrollToMap();
      if (!a) {
        this.showMap()
      }
    } else {
      if (a) {
        a.reset()
      }
      this.$footer.show()
    }
    this.$module.toggleClass("mapView")
  },
  setup: function () {
    var a = this;
    this.$scroll = $("html, body");
    this.$footer = $("#pageFooter, footer.responsiveFooter");
    this.$module = $("#page");
    this.$map = $(".map");
    this.$tabs = $(".tabs");
    this.$tabMap = $("#tabMap");
    this.$tabMapContent = $(".tabContent .mapContainer");
    this.$tabListContent = $(".tabContent .listContainer");
    $(document).on("change.tabs", _.bind(this.tabChange, this));
    $(document).on("click", ".resultNumber, .mapPinIco, .accordionContact .secondaryCta a, .territoryDealer .dealerHeader span", _.bind(this.showMapMarker, this));
    $(window).on("resize", _.bind(this.setMapHeight, this));
    if ($("#dealerSearchResultsList").length) {
      $("#dealerSearchResultsList").on("results_added", function () {
        a.$map.data("plugin_maps", null)
      })
    }
  },
  init: function () {
    if ($(".tabContent .tabItem.mapContainer").length) {
      this.setup()
    }
  }
};
HONDA.MapOverlay = (function (c, b, a) {
  function d(f, e) {
    this.$map = c(f);
    this.$tabs = c(".tabs");
    this.$tabList = c("#tabList");
    this.$tabListContent = c(".tabContent .listContainer");
    this.$territoryDealer = c(".territoryDealer");
    this.data = e;
    this.isBookTestDrive = !!c(".bookTestDrive").length;
    this.create();
    this.startPosition();
    if (this.isBookTestDrive) {
      c(a).on("click", "a.mapResultLink", _.bind(this.showResult, this))
    }
  }
  d.prototype.create = function () {
    var e = this.$map.data();
    this.template = c("#" + e.overlaytemplate).html();
    this.$map.parent().append(this.template);
    this.$overlay = c("#" + e.overlaytemplate.split("t-")[1]);
    this.$parent = this.$overlay.parent();
    this.$inner = this.$overlay.find(".mapResultInner");
    this.$number = this.$overlay.find(".mapResultNumber");
    this.$link = this.$overlay.find(".mapResultLink");
    this.$name = this.$overlay.find(".mapResultName");
    this.$distance = this.$overlay.find(".mapResultDistance");
    this.$miles = this.$overlay.find(".miles");
    this.$km = this.$overlay.find(".km");
    this.$services = this.$overlay.find(".servicesAvailable");
    return this
  };
  d.prototype.showResult = function (i) {
    var j = c(i.currentTarget).data("markerid");
    var g = this.$tabs.data("tabs");
    var f = c('[data-markerid="' + j + '"]');
    i.preventDefault();
    if (g && f.length) {
      var h = f.find(".accordionContact .accordionHeading");
      g.show(this.$tabList, function () {
        c("html, body").animate({
          scrollTop: f.offset().top
        }, 250, function () {
          if (this.tagName.toLowerCase() === "html" && h.find(".expanded").length === 0) {
            h.trigger("click")
          }
        })
      })
    }
  };
  d.prototype.destroy = function () {
    this.$overlay.remove()
  };
  d.prototype.update = function (e) {
    if (this.$overlay.is(":hidden")) {
      this.enable()
    }
    this.$number.find("span").text(e.type === "territory" ? "" : e.id);
    this.$name.text(e.name);
    this.$link.attr("href", e.url).data("markerid", e.id);
    if (_.isString(e.distance)) {
      this.$distance.html(e.distance)
    } else {
      this.$miles.text(e.distance.miles.value + " " + e.distance.miles.key);
      this.$km.text(e.distance.km.value + " " + e.distance.km.key)
    }
    if (e.$ctas && e.$ctas.length) {
      this.$inner.find(".iconCta").remove();
      this.$inner.append(e.$ctas)
    }
    if (e.services) {
      if (_.isString(e.services)) {
        this.$services.html(e.services)
      } else {
        this.$services.html(this.getServices(e.services))
      }
    }
    this.$number[0].className = "mapResultNumber";
    this.$number.addClass("icon-" + e.type)
  };
  d.prototype.startPosition = function () {
    this.$overlay.css({
      "z-index": "1000",
      display: "none",
      top: this.$parent.height() + "px"
    });
    return this
  };
  d.prototype.enable = function () {
    this.$overlay.hide().delay(100).show().animate({
      top: (this.$parent.height() - this.$overlay.height()) + "px"
    }, 250, function () {
      c(this).css({
        top: "auto",
        bottom: 0
      })
    });
    return this
  };
  d.prototype.disable = function () {
    var e = this;
    this.$overlay.animate({
      top: this.$parent.height() + "px"
    }, 250, function () {
      e.$overlay.hide()
    });
    return this
  };
  d.prototype.getServices = function (g) {
    var k = [];
    var f, e;

    function h(i, l) {
      var j = c('<li><span class="title">' + i + "</span></li>");
      if (l) {
        j.addClass("hasService").append('<span class="icon"></span>')
      }
      return j
    }
    for (f in this.data.services) {
      if (this.data.services.hasOwnProperty(f)) {
        for (e in g) {
          if (g.hasOwnProperty(e)) {
            if (f === e) {
              k.push(h(this.data.services[e], g[e]))
            }
          }
        }
      }
    }
    return k
  };
  return d
}(jQuery, window, document));
HONDA.SocialSharing = (function () {
  var a = ".shareLinks";
  var b = {
    facebook: {
      name: "facebook",
      url: "http://www.facebook.com/sharer.php?u={URL_TO_SHARE}",
      size: "width=626, height=436"
    },
    twitter: {
      name: "twitter",
      url: "https://twitter.com/share?url={URL_TO_SHARE}&text={SHORT_DESCRIPTION}",
      size: "width=450, height=550"
    },
    pinterest: {
      name: "pinterest",
      url: "https://www.pinterest.com/pin/create/button/?url={URL_TO_SHARE}&description={DESCRIPTION}&media={PINTEREST_IMAGE}",
      size: "width=700, height=300"
    }
  };

  function d(f) {
    return $.trim($('meta[property="' + f + '"]').attr("content"))
  }

  function c(k) {
    var j = $(k.currentTarget).parents(a);
    var g = k.currentTarget.className;
    var i = window.location.href;
    var h = {};
    if (j.data("ignore-url-params")) {
      i = i.replace(/\?.[^#]*/gi, "")
    }
    if (j.data("ignore-url-fragment") === false) {
      i = i.replace(/\#.[^?]*/gi, "")
    }
    if (g.indexOf(b.facebook.name) !== -1) {
      h = b.facebook
    } else {
      if (g.indexOf(b.twitter.name) !== -1) {
        h = b.twitter
      } else {
        if (g.indexOf(b.pinterest.name) !== -1) {
          h = b.pinterest
        } else {
          return false
        }
      }
    }
    h.url = h.url.replace("{URL_TO_SHARE}", window.encodeURIComponent(i));
    h.url = h.url.replace("{DESCRIPTION}", d("og:description"));
    h.url = h.url.replace("{SHORT_DESCRIPTION}", d("og:short_description"));
    h.url = h.url.replace("{PINTEREST_IMAGE}", d("og:pinterest_image"));
    if (HONDA.is.mobile()) {
      window.open(h.url, h.name).focus()
    } else {
      try {
        window.open(h.url, h.name, h.size).focus()
      } catch (f) {
        window.open(h.url, "_blank", h.size).focus()
      }
    }
  }

  function e() {
    if ($(a).length) {
      $(document).on("click.socialsharing", ".shareLinks a, .shareLinks button", c)
    }
  }
  return {
    init: e
  }
}());
/*!
 * Honda platform - Text on dark modules
 */
HONDA.SplitColourSection = (function () {
  var a = ".splitColorSections";
  var e = "split-colour-section";
  var b = 200;
  var c = function (f) {
    this.$module = f;
    this.$sectionA = this.$module.find(".colorSectionA");
    this.$sectionB = this.$module.find(".colorSectionB");
    this.$txtWrapper = this.$sectionA.parents(".colorSectionContainer");
    this.$imgWrapper = this.$sectionB.parents(".colorSectionContainer");
    this.$img = this.$imgWrapper.find("img");
    this.isTextRight = this.$module.hasClass("splitColorSectionTextRight");
    this.$module.addClass("jsSplitColorSections");
    this.setDimensions();
    this.bindEvents()
  };
  c.prototype = {
    bindEvents: function () {
      $(window).on("resize", _.throttle(_.bind(this.setDimensions, this), b));
      this.$img.onImageLoad(_.bind(this.setDimensions, this))
    },
    setDimensions: function () {
      this.$imgWrapper.width("");
      this.$img.height("");
      if (HONDA.is.mobile()) {
        return false
      }
      var g = window.screen.width;
      var h = {};
      var f = {};
      var i = Math.round(this.$txtWrapper.offset().left);
      var m = Math.round(this.$txtWrapper.outerWidth());
      var j = Math.round(this.$txtWrapper.outerHeight());
      var n = Math.round(this.$imgWrapper.offset().left);
      var l = Math.round(this.$imgWrapper.width());
      var k = Math.round(this.$img.height());
      h.width = g;
      h.height = j > k ? j : k;
      f.width = g;
      f.height = j > k ? j : k;
      if (this.isTextRight) {
        h.left = -1 - Math.abs(i - (n + l))
      } else {
        h.right = -1 - Math.abs(n - (i + m))
      }
      this.$sectionA.css(h);
      this.$sectionB.css(f);
      this.$imgWrapper.width(l);
      this.$img.height(k)
    }
  };
  var d = function () {
    $(a).each(function () {
      var f = $(this);
      if (!f.data(e)) {
        f.data(e, new c(f))
      }
    })
  };
  return {
    init: d
  }
}());
/*!
 * Honda platform - Tabs
 */
var HONDA = window.HONDA || {};
HONDA.tabs = (function () {
  var a = function (c, d) {
    this.$tabs = c;
    this.$panels = d;
    this.isAnimating = false;
    this.bindEvents();
    this.updateTabIndex()
  };
  a.prototype.bindEvents = function () {
    this.$tabs.on("click keyup", "a", _.bind(this.onChange, this))
  };
  a.prototype.show = function (h, i) {
    var f = this;
    var e = h.parent("li");
    var c = this.$panels.find(h.attr("href"));
    var d = this.$tabs.find("li.active");
    var g = this.$panels.find(".tabItem.active");
    if (this.isAnimating || !c.length) {
      return false
    }
    this.isAnimating = true;
    d.removeClass("active");
    e.addClass("active");
    this.updateTabIndex();
    g.fadeOut(300, function () {
      g.removeClass("active");
      c.fadeIn(300, function () {
        c.addClass("active");
        if (c.data("tabname") === "Map") {
          $(".map, .dealerMap").trigger("showMap")
        }
        if (HONDA.formBuilder) {
          HONDA.formBuilder.ShowMore.init()
        }
        if (_.isFunction(i)) {
          i()
        }
        $(document).trigger({
          type: "change.tabs",
          tabSelected: c.data("tabname")
        });
        f.isAnimating = false
      })
    })
  };
  a.prototype.onChange = function (f) {
    if (f.type === "click" || (f.type === "keyup" && f.keyCode === 13)) {
      var d = $(f.currentTarget);
      var c = d.data();
      f.preventDefault();
      if (d.parent("li").hasClass("active")) {
        return false
      }
      this.show(d);
      if (c.analytics) {
        this.sendAnalytics(HONDA.analytics.getAnalyticsFromSelector(d))
      }
    }
  };
  a.prototype.sendAnalytics = function (c) {
    HONDA.analytics.push(c)
  };
  a.prototype.updateTabIndex = function () {
    this.$tabs.find("li.active a").attr("tabindex", -1);
    this.$tabs.find("li:not(.active) a").removeAttr("tabindex")
  };
  var b = function () {
    $(".tabs, .tabsCircular").each(function () {
      var c = $(this);
      var d = $(c.data("tabcontent"));
      if (c.length && d.length && !c.data("tabs")) {
        c.data("tabs", new a(c, d))
      }
    })
  };
  return {
    init: b
  }
}(jQuery));
/*!
 * Honda platform - Tax calculator
 */
var HONDA = window.HONDA || {};
HONDA.TaxCalculator = {
  $main: $(".taxCalculator"),
  carData: {},
  formData: {},
  ajaxTimeout: 10000,
  roundNumber: function (a) {
    return Math.round(a * 100) / 100
  },
  formatCurrency: function (e) {
    e += "";
    var a = e.split(".");
    var d = a[0];
    var b = a.length > 1 ? "." + a[1] : ".00";
    var c = /(\d+)(\d{3})/;
    while (c.test(d)) {
      d = d.replace(c, "$1,$2")
    }
    if (b.length === 2) {
      b += "0"
    }
    return d + b
  }
};
HONDA.TaxCalculator.Navigation = {
  $wrapper: $(".taxCalculator .stepIndicator"),
  $indicators: $(".taxCalculator .stepIndicator ul > li"),
  $heading: $(".taxCalculator .stepIndicator h2"),
  $content: $(".taxCalculator .stepContent"),
  animSpeed: 150,
  scrollIntoView: function () {
    var b = Math.round($(window).scrollTop());
    var a = Math.round(this.$indicators.offset().top);
    if (b > a) {
      $("html, body").animate({
        scrollTop: a
      }, this.animSpeed * 2)
    }
  },
  updateIndicator: function (a) {
    this.$indicators.removeClass("active complete").eq(a).addClass("active");
    this.$indicators.each(function (b) {
      if (b < a) {
        $(this).addClass("complete")
      }
    })
  },
  updateHeading: function (a) {
    this.$heading.html(this.$indicators.eq(a).data("heading"))
  },
  updateContent: function (c) {
    var a = this;
    var b = this.$content.filter(".active");
    var d = this.$content.eq(c);
    b.fadeOut(a.animSpeed, function () {
      b.removeClass("active");
      d.fadeIn(a.animSpeed, function () {
        d.addClass("active")
      })
    })
  },
  goToStep: function (a) {
    this.updateIndicator(a);
    this.updateHeading(a);
    this.updateContent(a);
    this.scrollIntoView()
  },
  change: function (a) {
    a.preventDefault();
    if ($(a.currentTarget).hasClass("complete")) {
      this.goToStep(this.$indicators.index(a.currentTarget))
    }
  },
  bindEvents: function () {
    this.$indicators.on("click", _.bind(this.change, this))
  },
  init: function () {
    if (this.$indicators.length) {
      this.bindEvents()
    }
  }
};
HONDA.TaxCalculator.ModelSelector = (function () {
  var c = $(".taxCalculator .modelSelector");
  var a = $(".taxCalculator .modelSelector .taxModelBody");
  var b = function () {
    a.each(function () {
      var f = $(this).data("model-selector");
      if (f) {
        f.deactivate()
      }
    })
  };
  var e = function (g, i) {
    var f = document.createDocumentFragment();
    var h = null;
    var j = $('label[for="' + g.attr("id") + '"]').text();
    if (j) {
      i.unshift({
        text: j,
        isDisabled: true,
        isSelected: true
      })
    }
    _.each(i, function (k) {
      h = document.createElement("option");
      h.value = k.value || "";
      h.innerHTML = k.text;
      if (k.isDisabled) {
        h.disabled = true
      }
      if (k.isSelected) {
        h.selected = true
      }
      f.appendChild(h)
    });
    g.prop("disabled", i.length <= 1).empty().get(0).appendChild(f)
  };
  var d = function (f) {
    this.$parent = f;
    this.$form = f.find("form");
    this.$select = f.find("select");
    this.$submit = f.find("button");
    this.$primary = f.find(".productPrimary");
    this.$secondary = f.find(".productSecondary");
    this.$model = f.find(".model");
    this.$cancel = f.find(".cancel");
    this.bindEvents();
    this.getData()
  };
  d.prototype = {
    getData: function () {
      var f = this;
      this.xhr = $.ajax({
        url: this.$model.data("url"),
        type: "GET",
        dataType: "json",
        timeout: HONDA.TaxCalculator.ajaxTimeout,
        success: function (g) {
          if ($.isArray(g) && g.length) {
            f.success(g)
          } else {
            f.error()
          }
        },
        error: function () {
          f.error()
        }
      })
    },
    success: function (f) {
      this.data = f;
      this.updatePrimary();
      this.ready()
    },
    error: function () {
      this.$parent.addClass("error").find("> *:not(.model)").remove();
      $('<p class="errorMessage" />').html(c.data("error-message")).appendTo(this.$parent);
      this.ready()
    },
    bindEvents: function () {
      this.$form.on("submit", _.bind(this.submit, this));
      this.$model.on("click", _.bind(this.activate, this));
      this.$cancel.on("click", _.bind(this.deactivate, this));
      this.$primary.on("change", _.bind(this.updateSecondary, this));
      this.$select.on("change", _.bind(this.updateButton, this))
    },
    ready: function () {
      this.$form[0].reset();
      this.$parent.addClass("ready")
    },
    reset: function () {
      this.$select.prop("selectedIndex", 0).trigger("change")
    },
    activate: function (f) {
      if (f) {
        f.preventDefault()
      }
      if (!this.$parent.hasClass("ready")) {
        return false
      }
      if (!this.$parent.hasClass("active")) {
        b();
        this.$parent.addClass("active")
      }
    },
    deactivate: function (f) {
      if (f) {
        f.preventDefault()
      }
      this.$parent.removeClass("active");
      this.reset()
    },
    updatePrimary: function () {
      var f = [];
      _.each(this.data, function (g) {
        if (_.isArray(g.engines) && _.isArray(_.pluck(g.engines, "transmissions"))) {
          f.push({
            text: g.Name,
            value: g.Id
          })
        }
      });
      e(this.$primary, f)
    },
    updateSecondary: function () {
      var g = [];
      var f = _.findWhere(this.data, {
        Id: this.$primary.val()
      });
      if (_.isObject(f)) {
        _.each(f.engines, function (h) {
          _.each(h.transmissions, function (i) {
            g.push({
              text: h.Name + " " + i.Name,
              value: h.Id + "|" + i.Id
            })
          })
        })
      }
      e(this.$secondary, g)
    },
    updateButton: function () {
      if (this.$primary.val() === "" || this.$secondary.val() === "") {
        this.$submit.addClass("disabled").prop("disabled", "disabled")
      } else {
        this.$submit.removeClass("disabled").removeProp("disabled")
      }
    },
    submit: function (j) {
      j.preventDefault();
      var h = this.$primary.val();
      var k = this.$secondary.val().split("|");
      var f = _.findWhere(this.data, {
        Id: h
      });
      var i = _.findWhere(f.engines, {
        Id: k[0]
      });
      var g = _.findWhere(i.transmissions, {
        Id: k[1]
      });
      HONDA.TaxCalculator.carData = {
        imageSrc: this.$model.data("image-src"),
        modelId: this.$model.data("model-id"),
        modelName: this.$model.data("model-name"),
        bodyId: this.$model.data("body-id"),
        badgeId: f.Id,
        badgeName: f.Name,
        engineId: i.Id,
        engineName: i.Name,
        fuelID: i.Fuel,
        fuelDesc: i.FuelDesc,
        transmissionId: g.Id,
        transmissionName: g.Name,
        P11D: g.P11D,
        CO2: g.CO2
      };
      HONDA.TaxCalculator.SelectedModel.update();
      HONDA.TaxCalculator.Navigation.goToStep(1)
    }
  };
  return {
    init: function () {
      a.each(function () {
        var f = $(this);
        if (f.find(".model").data("url")) {
          f.data("model-selector", new d(f))
        }
      })
    }
  }
}());
HONDA.TaxCalculator.SelectedModel = {
  $changeModel: $(".taxCalculator .selectedModel .simpleCta a"),
  $model: $(".taxCalculator .selectedModel .model"),
  $badge: $(".taxCalculator .selectedModel .badge"),
  $engine: $(".taxCalculator .selectedModel .engine"),
  $tax: $(".taxCalculator .selectedModel .P11D"),
  $carbon: $(".taxCalculator .selectedModel .CO2"),
  $image: $(".taxCalculator .selectedModel img"),
  $showInfo: $(".taxCalculator .selectedModel .showInfo"),
  $moreInfo: $(".taxCalculator .selectedModel .moreInfo"),
  $hideInfo: $(".taxCalculator .selectedModel .moreInfo .cancel"),
  $priceOfExtras: $(".taxCalculator .formBuilder input.priceOfExtras"),
  change: function (a) {
    a.preventDefault();
    if (HONDA.TaxCalculator.Form.xhr) {
      HONDA.TaxCalculator.Form.xhr.abort()
    }
    this.hideInfo();
    HONDA.TaxCalculator.Form.reset();
    HONDA.TaxCalculator.Form.hideAjaxLoader(true);
    HONDA.TaxCalculator.Navigation.goToStep(0)
  },
  update: function () {
    var b = HONDA.TaxCalculator.carData;
    var c = HONDA.TaxCalculator.formData;
    this.$image.attr({
      src: b.imageSrc,
      alt: b.modelName + " " + b.badgeName
    });
    this.$model.html(b.modelName);
    this.$badge.html(b.badgeName);
    this.$engine.html(b.engineName + " " + b.transmissionName + " " + b.fuelDesc);
    this.$carbon.html(b.CO2 + " g/kWh");
    var a = parseFloat(b.P11D);
    if (this.$priceOfExtras.length) {
      a += c[this.$priceOfExtras.attr("name")]
    }
    a = HONDA.TaxCalculator.roundNumber(a);
    a = HONDA.TaxCalculator.formatCurrency(a);
    this.$tax.html("&pound;" + a)
  },
  showInfo: function (d) {
    var a = $(d.currentTarget);
    var b = a.parents(".selectedModel").find('.moreInfo[data-more-info-id="' + a.data("more-info-id") + '"]');
    var c = a.hasClass("active");
    d.preventDefault();
    this.hideInfo();
    if (!c) {
      a.addClass("active");
      b.show()
    }
  },
  hideInfo: function (a) {
    if (a) {
      a.preventDefault()
    }
    this.$showInfo.removeClass("active");
    this.$moreInfo.hide()
  },
  init: function () {
    this.$changeModel.on("click", _.bind(this.change, this));
    this.$showInfo.on("click", _.bind(this.showInfo, this));
    this.$hideInfo.on("click", _.bind(this.hideInfo, this))
  }
};
HONDA.TaxCalculator.Form = {
  $form: $(".taxCalculator .formBuilder"),
  $priceOfExtras: $(".taxCalculator .formBuilder input.priceOfExtras"),
  $ajaxLoader: $(".taxCalculator .ajaxLoader"),
  animSpeed: 300,
  xhr: null,
  hideFormError: function () {
    var a = this.$form.data("validationHandler");
    if (a) {
      a.hideFormError()
    }
  },
  showAjaxLoader: function (a) {
    this.$ajaxLoader.fadeIn(this.animSpeed, function () {
      if (_.isFunction(a)) {
        a()
      }
    })
  },
  hideAjaxLoader: function (a) {
    this.hideFormError();
    if (this.$ajaxLoader.is(":visible") && this.$ajaxLoader.not(":animated")) {
      if (a) {
        this.$ajaxLoader.stop().hide()
      } else {
        this.$ajaxLoader.stop().fadeOut(this.animSpeed)
      }
    }
  },
  success: function (a) {
    this.hideAjaxLoader();
    HONDA.TaxCalculator.Results.update(a);
    HONDA.TaxCalculator.SelectedModel.update();
    HONDA.TaxCalculator.Navigation.goToStep(2)
  },
  error: function () {
    this.hideAjaxLoader();
    HONDA.TaxCalculator.Results.error();
    HONDA.TaxCalculator.Navigation.goToStep(2)
  },
  reset: function () {
    this.$form[0].reset();
    this.$form.find(":radio:not(selected)").parents("label").removeClass("selected")
  },
  submit: function (f) {
    var a = this;
    var e = this.$form.attr("action");
    var c = _.pick(HONDA.TaxCalculator.carData, "modelId", "bodyId", "badgeId", "engineId", "transmissionId");
    HONDA.TaxCalculator.formData = LBI.common.getStringQueries(f);
    if (this.$priceOfExtras.length) {
      var b = this.$priceOfExtras.attr("name");
      var d = decodeURIComponent(HONDA.TaxCalculator.formData[b]).replace(/[^0-9.]/g, "");
      HONDA.TaxCalculator.formData[b] = parseInt(d, 10)
    }
    var g = $.param($.extend({}, c, HONDA.TaxCalculator.formData));
    this.showAjaxLoader(function () {
      a.xhr = $.ajax({
        url: e,
        data: g,
        type: "POST",
        dataType: "json",
        timeout: HONDA.TaxCalculator.ajaxTimeout,
        success: function (h) {
          if ($.isArray(h) && h.length) {
            a.success(h)
          } else {
            a.error()
          }
        },
        error: function () {
          a.error()
        }
      })
    })
  },
  init: function () {
    if (this.$form.length) {
      var a = this;
      HONDA.formBuilder.FormValidation.init(this.$form, {
        resetForm: true,
        submitCallback: function (b) {
          a.submit(b)
        }
      })
    }
  }
};
HONDA.TaxCalculator.Results = {
  $wrapper: $(".taxCalculator .taxCalculatorResults"),
  $results: $(".taxCalculator .taxCalculatorResults .wrapperInner"),
  $recalculate: $(".taxCalculator .backNavigation a:not(.printwin)"),
  tableTemplate: $("#taxCalculatorResultsTable").html(),
  tableDataTemplate: $("#taxCalculatorResultsTableData").html(),
  tableSelector: ".comparisonTable",
  errorSelector: ".errorMessage",
  defaultData: {
    BIK: null,
    carTaxMonthly: null,
    carTaxAnnual: null,
    fuelTaxMonthly: null,
    fuelTaxAnnual: null,
    totalMonthly: null,
    totalAnnual: null
  },
  change: function (a) {
    a.preventDefault();
    HONDA.TaxCalculator.Navigation.goToStep(1)
  },
  createTableData: function (c, b, d) {
    var a = $(this.tableDataTemplate).addClass("compare" + b);
    a.find(".productDetails .name").html(c);
    if (d.monthly && d.annual) {
      a.find(".monthly .amount").html("&pound;" + d.monthly);
      a.find(".yearly .amount").html("&pound;" + d.annual)
    } else {
      if (d.percentage) {
        a.find(".compareDetails").html(HONDA.TaxCalculator.roundNumber(d.percentage) + "%")
      } else {
        a.find(".compareDetails").html("&nbsp;")
      }
    }
    return a
  },
  update: function (b) {
    var a = this;
    var c = $(this.tableTemplate);
    _.each(b, function (e, d) {
      var f = $.extend({}, a.defaultData, _.isArray(e.taxDetails) ? e.taxDetails[0] : {});
      c.find("thead tr").append('<th scope="col">' + e.name + "</th>");
      c.find("tr.bik").append(a.createTableData(e.name, d, {
        percentage: f.BIK
      }));
      c.find("tr.carTax").append(a.createTableData(e.name, d, {
        monthly: f.carTaxMonthly,
        annual: f.carTaxAnnual
      }));
      c.find("tr.fuelTax").append(a.createTableData(e.name, d, {
        monthly: f.fuelTaxMonthly,
        annual: f.fuelTaxAnnual
      }));
      c.find("tr.total").append(a.createTableData(e.name, d, {
        monthly: f.totalMonthly,
        annual: f.totalAnnual
      }))
    });
    c.find("tr.total .monthly .label").addClass("visuallyhidden");
    this.clear();
    this.$results.prepend(c)
  },
  clear: function () {
    this.$results.find(this.tableSelector + "," + this.errorSelector).remove()
  },
  error: function () {
    this.clear();
    $('<p class="errorMessage" />').html(this.$wrapper.data("error-message")).prependTo(this.$results)
  },
  init: function () {
    this.$recalculate.on("click", _.bind(this.change, this))
  }
};
HONDA.TaxCalculator.init = function () {
  if (this.$main.length) {
    this.Navigation.init();
    this.ModelSelector.init();
    this.SelectedModel.init();
    this.Form.init();
    this.Results.init();
    LBI.common.getPrintLinks()
  }
};
HONDA.territoryDealer = {
  $territoryDealer: $(".territoryDealer"),
  $inner: $(".territoryDealer .wrapper .dealerResultInner, .territoryDealer .wrapper .contentWrapper"),
  $dealers: null,
  territoryDealerID: null,
  hasDecrementedMarkers: false,
  init: function () {
    if ($("#dealerSearchResultsList").length) {
      this.$dealers = $("#dealerSearchResultsList")
    } else {
      if ($(".chooseDealerResults > .dealerListResultsTestDrive .bookTestDriveAccordion").length) {
        this.$dealers = $(".chooseDealerResults > .dealerListResultsTestDrive .bookTestDriveAccordion")
      }
    }
    if (this.$territoryDealer.length && this.$dealers !== null) {
      this.loadTerritoryDealer();
      this.bind()
    }
  },
  bind: function () {
    var a = this;
    $("#dealerSearchResultsList").on("resultsUpdated", function (c, b) {
      a.onResultsUpdated(b)
    })
  },
  loadTerritoryDealer: function () {
    var a = this;
    var b = this.$territoryDealer.data("url");
    if (b) {
      $.ajax({
        url: b,
        dataType: "html",
        type: "GET",
        success: function (c) {
          if ($.trim(c) === "") {
            a.removeTerritoryDealer()
          } else {
            a.populate(c);
            a.territoryDealerID = $(c).data("dealerid");
            a.removeDealerFromList(a.territoryDealerID)
          }
        },
        error: function () {
          a.removeTerritoryDealer()
        }
      })
    }
  },
  populate: function (c) {
    var a = this;
    var b = $(c);
    a.$inner.html(b);
    a.$inner.find(".loadedContent").slideDown(300, function () {
      a.$territoryDealer.addClass("populated")
    });
    a.$inner.find(".accordion").accordion({
      firstOpen: true
    })
  },
  removeTerritoryDealer: function () {
    this.hasDecrementedMarkers = false;
    this.removeFromDom(this.$territoryDealer)
  },
  getDealerByID: function (a) {
    return this.$dealers.find(".dealerResult[data-dealerid=" + a + "], li[data-dealerid=" + a + "]")
  },
  removeDealerFromList: function (b) {
    var a = this.getDealerByID(b);
    if (a.length) {
      this.updateMarkersFromDealer(a);
      this.removeFromDom(a);
      this.hasDecrementedMarkers = true
    }
  },
  updateMarkersFromDealer: function (d) {
    var c = d;
    while (c.is("[data-markerid]")) {
      var b = c.data("markerid");
      if (b !== undefined) {
        var a = b - 1;
        c.find("a.resultNumber, .mapPinIco").attr("data-markerid", a);
        c.find("a.resultNumber span, p.mapPinIco").text(a);
        c.attr("data-markerid", a);
        c = c.next()
      }
    }
  },
  removeFromDom: function (a) {
    a.slideUp(300, function () {
      a.remove()
    })
  },
  onResultsUpdated: function (b) {
    if (this.territoryDealerID !== null) {
      if (this.hasDecrementedMarkers) {
        var a = this.getDealerByID(b);
        if (a.length) {
          this.updateMarkersFromDealer(a)
        }
      } else {
        this.removeDealerFromList(this.territoryDealerID)
      }
    }
  }
};
HONDA.Timer = (function () {
  var b = {
    duration: 5000,
    delay: 1000,
    onInterval: null,
    onComplete: null,
    $svg: null,
    progressSelector: ".progress"
  };

  function a(c) {
    this.settings = $.extend({}, b, c);
    this.currentTime = 0;
    this.intervalID = null;
    this.animRequestID = null;
    this.isPaused = false;
    this.$progress = $()
  }
  a.prototype = {
    getResponse: function () {
      return {
        seconds: this.currentTime / 1000 % 60,
        milliseconds: this.currentTime
      }
    },
    clearInterval: function () {
      if (this.intervalID) {
        window.clearInterval(this.intervalID);
        this.intervalID = null
      }
    },
    cancelDraw: function () {
      window.cancelAnimationFrame(this.animRequestID);
      this.animRequestID = null
    },
    animateDraw: function () {
      var l = this;
      var j = parseFloat(this.$progress.css("stroke-width") || 1);
      var d = null;
      var h = 0;
      var c = 0;
      var f = 0;
      var g = this.settings.$svg.width() / 2;
      var k = 2 * Math.PI * g;
      var e = "rotate( -90, " + g + ", " + g + ")";
      this.$progress.attr({
        cx: g,
        cy: g,
        r: g - (j / 2),
        transform: e
      });

      function i(m) {
        d = d || m;
        if (l.isPaused) {
          h = (m - d) - c;
          c = (m - d) - h;
          l.animRequestID = window.requestAnimationFrame(i)
        } else {
          c = (m - d) - h;
          f = Math.abs(k / l.settings.duration * c);
          l.$progress.attr("stroke-dasharray", f + ", " + k);
          if (c <= l.settings.duration) {
            if (typeof l.settings.onInterval === "function") {
              l.settings.onInterval(l.getResponse())
            }
            l.animRequestID = window.requestAnimationFrame(i)
          } else {
            if (typeof l.settings.onComplete === "function") {
              l.settings.onComplete(l.getResponse())
            }
          }
        }
      }
      this.animRequestID = window.requestAnimationFrame(i)
    },
    update: function () {
      if (!this.isPaused) {
        this.currentTime -= this.settings.delay;
        if (this.currentTime <= 0) {
          this.currentTime = 0;
          this.clearInterval();
          if (typeof this.settings.onComplete === "function") {
            this.settings.onComplete(this.getResponse())
          }
        } else {
          if (typeof this.settings.onInterval === "function") {
            this.settings.onInterval(this.getResponse())
          }
        }
      }
    },
    start: function () {
      if (typeof this.settings.duration === "number" && this.settings.duration > 0) {
        this.currentTime = this.settings.duration;
        if (this.settings.$svg instanceof jQuery) {
          this.$progress = this.settings.$svg.find(this.settings.progressSelector)
        }
        if (this.$progress.length) {
          this.animateDraw()
        } else {
          this.intervalID = window.setInterval(this.update.bind(this), this.settings.delay)
        }
        if (typeof this.settings.onInterval === "function") {
          this.settings.onInterval(this.getResponse())
        }
      }
    },
    stop: function () {
      this.clearInterval();
      this.cancelDraw()
    },
    restart: function (c) {
      this.settings.options = $.extend({}, b, c);
      this.stop();
      this.start()
    },
    pause: function () {
      this.isPaused = true
    },
    resume: function () {
      this.isPaused = false
    }
  };
  return a
}());
/*!
 * Honda platform - Updates and recalls
 */
var HONDA = window.HONDA || {};
HONDA.UpdatesAndRecalls = (function () {
  var j = $(".updatesAndRecalls");
  var k = $(".updatesAndRecalls .vinCheckResult");
  var o = $(".updatesAndRecalls .vinCheckResult .yourVinNumber");
  var a = $(".updatesAndRecalls .vinCheckResult .hasRecall");
  var c = $(".updatesAndRecalls .vinCheckResult .noRecall");
  var q = $(".updatesAndRecalls .formBuilder");
  var d = $(".updatesAndRecalls .formBuilder input:text");
  var l = $(".updatesAndRecalls .formBuilder .ajaxError");
  var n = 350;
  var g = "";
  var b = {
    vin: /^[^\/wioq]{17}$/
  };
  var f = function (r) {
    HONDA.analytics.push({
      event: r ? "formSubmitSuccess" : "formSubmitError",
      vinId: g
    })
  };
  var e = function (r) {
    r.preventDefault();
    g = "";
    d.val("");
    k.fadeOut(n, function () {
      q.fadeIn(n, function () {
        $("#vin").focus()
      })
    })
  };
  var m = function (s) {
    o.html(g);
    if (_.isArray(s.recall.updateDetails) && s.recall.updateDetails.length) {
      var r = "";
      _.each(s.recall.updateDetails, function (u) {
        var t = u.description.toLowerCase();
        t = t.charAt(0).toUpperCase() + t.slice(1);
        if (t.match(/:[^\s]/g)) {
          t = t.replace(/:/g, ": ")
        }
        r += "<li>" + t + "</li>"
      });
      a.find("ul").empty().html(r);
      c.hide();
      a.show()
    } else {
      a.hide();
      c.show()
    }
    q.fadeOut(n, function () {
      k.fadeIn(n)
    });
    f(true)
  };
  var h = function () {
    var r = q.data("validationHandler");
    r.hideFormError(function () {
      l.show().css("opacity", 0).animate({
        opacity: 1
      }, n);
      r.scrollToFormError()
    });
    f(false)
  };
  var i = function () {
    var r = q.attr("action");
    var s = {};
    s.vin = g = d.val().toUpperCase();
    $.ajax({
      url: r,
      data: s,
      dataType: "json",
      type: "POST",
      success: function (t) {
        if (t.recall && typeof t.recall.updateDetails !== "undefined") {
          m(t)
        } else {
          h()
        }
      },
      error: function () {
        h()
      }
    })
  };
  var p = function () {
    if (j.length) {
      HONDA.customRegEx = HONDA.customRegEx ? $.extend({}, HONDA.customRegEx, b) : b;
      d.parents(".formField").data("regex", "vin");
      HONDA.formBuilder.FormValidation.init(q, {
        submitCallback: function (r) {
          i(r)
        }
      });
      j.on("click", ".checkNewVehicle", e)
    }
  };
  return {
    init: p
  }
}(jQuery));
/*!
 * Honda platform - Inclusive - Analytics (global)
 */
var HONDA = window.HONDA || {};
HONDA.analytics = {
  relatedURLs: [],
  filetypes: /\.doc(x?)$|\.xls(x?)$|\.exe$|\.ppt(x?)$\.zip$|\.pdf$|\.mp3$|\.psd$/i,
  init: function () {
    this.saveRelatedURLs();
    this.bindEvents();
    if (_.isFunction(this.reevoo.init)) {
      this.reevoo.init()
    }
  },
  getAnalyticsFromSelector: function (b) {
    var a = b.attr("data-analytics");
    if (a !== undefined && _.isString(a)) {
      a = $.parseJSON(a.replace(/\'/g, '"'))
    }
    return a
  },
  bindEvents: function () {
    $(document).on("click", "a:not(.analyticsEvent)", HONDA.analytics.trackClickLinks);
    $(document).on("click change", ".analyticsEvent:not(.reevooBadgeHolder)", HONDA.analytics.trackCustomEvents)
  },
  trackClickLinks: function (d) {
    var c = this;
    var b = window.location.host !== this.host.replace(/\:80$/i, "");
    var a = this.href && this.href !== "" ? this.href.match(HONDA.analytics.filetypes) : false;
    if (a) {
      HONDA.analytics.trackFileLink(this, d)
    } else {
      if (b) {
        window.setTimeout(function () {
          HONDA.analytics.trackExternalLink(c)
        }, 100)
      } else {
        return
      }
    }
  },
  pathFix: function (a) {
    if (a === undefined) {
      a = window.location.pathname
    }
    if (a.charAt(0) !== "/") {
      a = "/" + a
    }
    return a
  },
  getDomain: function (b) {
    var a = window.location.protocol + "//" + window.location.hostname;
    if (b) {
      var c = b.protocol + "//" + b.hostname;
      return (a === c) ? a : c
    }
    return a
  },
  getEventData: function (a) {
    var c = a.attr("data-analytics");
    if (_.isString(c)) {
      try {
        c = $.parseJSON(c.replace(/\'/gi, '"'))
      } catch (f) {
        var d = new RegExp("^{'|'}$", "g");
        var b = c.replace(d, "").split("','");
        c = {};
        _.each(b, function (g) {
          var e = g.split("':'");
          if (e.length) {
            c[e[0]] = e.length === 2 ? e[1] : ""
          }
        })
      }
    }
    return c
  },
  getLinkPath: function (a, b) {
    var c = this.pathFix(a.prop("pathname"));
    if (b) {
      c += a.prop("search");
      c += a.prop("hash")
    }
    return c
  },
  getPortNumber: function (a) {
    var b = a.prop("port");
    if (b && typeof b !== "undefined" && b !== "" && b !== "0") {
      b = ":" + b
    } else {
      b = ""
    }
    return b
  },
  getExtension: function (a) {
    return a.substr((a.lastIndexOf(".")) + 1, a.length).toUpperCase()
  },
  trackCustomEvents: function (f) {
    if (f.type === "keydown" && f.keyCode !== 13) {
      return
    }
    var c = HONDA.analytics;
    var a = $(f.currentTarget);
    if (a.is("input[type=checkbox]") && (f.type === "change" || !a.is(":checked"))) {
      return
    }
    var b = a.attr("href");
    var e = c.getEventData(a);
    if (typeof e !== "undefined") {
      HONDA.analytics.push(e);
      if (a.hasClass("reevooBadgeHolder")) {
        return
      }
    }
    f.preventDefault();
    if (!a.hasClass("analyticsPreventDefaultEvent") && b && b !== "#") {
      if (f.currentTarget.protocol.indexOf("mailto") !== -1 || (typeof e !== "undefined" && e.eventAction === "mail_link")) {
        window.location = b
      } else {
        if (a.data("target") !== "external") {
          var h = c.getDomain(f.currentTarget);
          var g = c.getPortNumber(a);
          var d = c.getLinkPath(a, true);
          window.setTimeout(function () {
            window.location = h + g + d
          }, 100)
        }
      }
    }
  },
  trackExternalLink: function (a) {
    HONDA.analytics.push({
      event: "Outbound link",
      eventCategory: dataLayerAnalyticsCorporate[0].pageTitle,
      eventAction: a.text,
      eventLabel: a.href
    })
  },
  saveRelatedURLs: function () {
    var a = typeof (window.internalFilters) !== "undefined";
    if (a) {
      this.relatedURLs = window.internalFilters
    }
  },
  push: function (a) {
    dataLayerAnalyticsCorporate.push(a);
    dataLayerAnalyticsBranch.push(a)
  },
  trackEmailLink: function (b) {
    var a = $(b).attr("href").replace(/^mailto\:/i, "");
    HONDA.analytics.push({
      event: "Mailto",
      eventCategory: dataLayerAnalyticsCorporate[0].pageTitle,
      eventAction: a,
      eventLabel: dataLayerAnalyticsCorporate[0].countryCode
    })
  },
  trackFileLink: function (d, e) {
    var b = HONDA.analytics;
    var a = $(d);
    var f = b.getDomain(d);
    var c = b.getLinkPath(a);
    var g = b.getExtension(c);
    if (a.parents(".orderBrochureDownloadList").length > 0) {
      return
    }
    HONDA.analytics.push({
      event: "Download link",
      eventCategory: dataLayerAnalyticsCorporate[0].pageTitle,
      eventAction: g,
      eventLabel: c
    });
    if (g.toLowerCase() !== "pdf") {
      e.preventDefault();
      window.setTimeout(function () {
        window.location = f + c
      }, 100)
    }
  }
};
HONDA.analytics.reevoo = {
  reevooFunctions: {
    trackClickThrough: {
      obj: "ReevooMark_HND",
      func: "track_click_through"
    },
    trackEvent: {
      obj: "ReevooMark_HND.Tracking",
      func: "ga_track_event"
    }
  },
  init: function () {
    if ($(".reevooAnalyticsEvent").length) {
      this.bindEvents()
    }
  },
  sendAnalytics: function (e) {
    var $target = $(e.currentTarget);
    var data = $target.data("reevoo-analytics");
    if (_.isObject(data)) {
      var reevooFunctionData = this.reevooFunctions[data.type];
      var args = data.args;
      var obj = eval(reevooFunctionData.obj);
      if (_.isObject(obj) && _.isFunction(obj[reevooFunctionData.func])) {
        obj[reevooFunctionData.func].apply(obj, args)
      }
    }
  },
  bindEvents: function () {
    $(document).on("mousedown keydown touchend", ".analyticsEvent.reevooBadgeHolder", HONDA.analytics.trackCustomEvents);
    $(document).on("click", ".reevooAnalyticsEvent", _.bind(this.sendAnalytics, this))
  }
};
/*!
 * Honda platform - Inclusive - Custom JS
 * @version 1.0
 * @author LBi - http://www.lbi.com/en
 * @requires jQuery Core 1.8.2 - http://www.jquery.com/
 */
var HONDA = window.HONDA || {};
if (typeof String.prototype.trim !== "function") {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
  }
}
HONDA.is = (function (f, i, e) {
  var n = f.navigator.userAgent.toLowerCase();

  function h() {
    var p = e("#outer").css("z-index");
    return typeof p === "number" ? p.toString() : p
  }

  function b() {
    return h() === "1"
  }

  function m() {
    return h() === "2"
  }

  function o() {
    return h() === "3"
  }

  function k() {
    if (f.navigator.msPointerEnabled && n.match(/(arm|touch)/g)) {
      return true
    }
    try {
      if (e.browser.mozilla && !f.matchMedia("(-moz-touch-enabled)").matches) {
        return false
      }
      return typeof f.ontouchstart !== "undefined"
    } catch (q) {
      var p = i.documentElement;
      if (typeof p.hasOwnProperty === "undefined") {
        p.hasOwnProperty = Object.prototype.hasOwnProperty
      }
      return p.hasOwnProperty("ontouchstart")
    }
  }

  function d() {
    return typeof CQ !== "undefined" && typeof CQ.WCM !== "undefined" && CQ.WCM.isEditMode()
  }

  function j(q) {
    var p = n.match(/(ipad|iphone|ipod)/g) ? true : false;
    if (p && _.isString(q)) {
      p = n.indexOf(q.toLowerCase()) !== -1
    }
    return p
  }

  function l() {
    return n.toLowerCase().indexOf("webkit") !== -1
  }

  function a() {
    var p = 0;
    var q;
    if (f.navigator.plugins && f.navigator.plugins.length) {
      q = f.navigator.plugins["Shockwave Flash"];
      if (q && q["application/x-shockwave-flash"].enabledPlugin) {
        if (q.version) {
          p = parseInt(q.version, 10)
        } else {
          p = parseFloat(q.description.match(/\d{1,2}/))
        }
      }
    } else {
      try {
        q = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        if (q) {
          p = parseInt(q.GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1], 10)
        }
      } catch (r) {
        return false
      }
    }
    if (_.isNumber(p)) {
      return p >= 10
    }
    return false
  }

  function g() {
    var s = null;
    var t = false;
    if (navigator.plugins && f.navigator.userAgent.indexOf("MSIE") === -1) {
      var p = ["Chrome PDF Viewer", "WebKit built-in PDF", "Adobe Acrobat"];
      var q = "";
      var r = 0;
      for (r = 0; r < p.length; r++) {
        q = p[r];
        if (navigator.plugins[q] === q) {
          s = navigator.plugins[q];
          break
        }
      }
      if (!s) {
        var v = new RegExp("(acrobat|pdf)", "i");
        var w = null;
        for (w in navigator.plugins) {
          if (navigator.plugins.hasOwnProperty(w) && v.test(navigator.plugins[w].name)) {
            s = navigator.plugins[w];
            break
          }
        }
      }
      t = s && s["application/pdf"].enabledPlugin ? true : false
    } else {
      try {
        s = new ActiveXObject("AcroPDF.PDF");
        if (s) {
          t = true
        }
      } catch (u) {}
    }
    return t
  }

  function c(p, q) {
    if (e.type(p) === "string" && e.type(q) === "string") {
      return q.toLowerCase().split("?")[0].split(".").pop() === p.toLowerCase()
    }
    return true
  }
  return {
    mobile: b,
    tablet: m,
    desktop: o,
    touchDevice: k,
    CQEditMode: d,
    iOS: j,
    webkit: l,
    minimumFlashInstalled: a,
    pdfReaderEnabled: g,
    fileExtension: c
  }
}(window, document, jQuery));
HONDA.detectIEs = {
  init: function () {
    var b = $.browser.msie && $.browser.version === "10.0",
      a = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
    if (b) {
      $("html").addClass("ie10")
    } else {
      if (a) {
        $("html").addClass("ie11")
      }
    }
  }
};
HONDA.detectMinimumFlash = {
  init: function () {
    if (HONDA.is.minimumFlashInstalled()) {
      $("html").addClass("hasMinimumFlash")
    } else {
      $("html").addClass("hasNoMinimumFlash")
    }
  }
};
HONDA.iOSVersion = function () {
  var b = window.navigator.userAgent;
  var a = b.toLowerCase().match(/os (\d)_(\d)/);
  return {
    major: parseInt(a[1], 10),
    minor: parseInt(a[2], 10)
  }
};
HONDA.helpers = {
  preventInputZoom: function () {
    var a = $('meta[name="viewport"]');
    $("input, select, textarea").bind("focus blur", function (b) {
      if (HONDA.is.mobile()) {
        a.attr("content", "width=device-width,initial-scale=1,maximum-scale=" + (b.type === "blur" ? 10 : 1))
      }
    })
  },
  addressbarScrollHack: function () {
    if (HONDA.is.mobile()) {
      window.setTimeout(function () {
        window.scrollTo(0, 1)
      }, 100)
    }
  },
  getQueryStringObject: function () {
    var a = window.location.href.split("?");
    var i = (a.length > 1) ? a[a.length - 1] : null;
    if (i) {
      var d = {};
      i = decodeURIComponent(i);
      var e = i.split("&");
      var b = function (k) {
        try {
          return (new Function("return " + k + ";"))()
        } catch (l) {
          return k
        }
      };
      var f;
      for (f in e) {
        if (e.hasOwnProperty(f)) {
          var c = e[f];
          var g = c.split("=");
          var j = g[0];
          var h = b(g[1]);
          d[j] = h
        }
      }
      return d
    } else {
      return null
    }
  },
  stringReplace: function () {
    var b = Array.prototype.slice.call(arguments);
    var f = b.shift();
    var c = b;
    var a;
    for (a in c) {
      if (c.hasOwnProperty(a)) {
        var d = new RegExp("{" + a + "\\}", "g");
        var e = c[a];
        f = f.replace(d, e)
      }
    }
    return f
  }
};
HONDA.skipLinks = {
  init: function () {
    var b = $("html"),
      a = $("body");
    $(".skipLinks a").each(function () {
      $(this).bind("click", function () {
        if (HONDA.is.mobile()) {
          var d = this.href.split("#")[1],
            c = $("#" + d).offset();
          if (b.scrollTop() !== c.top || a.scrollTop !== c.top) {
            a.animate({
              scrollTop: c.top + "px"
            }, 800);
            b.animate({
              scrollTop: c.top + "px"
            }, 800)
          }
          return false
        }
      })
    })
  }
};
HONDA.showHide = {
  selector: ".showHide",
  trigger: ".trigger",
  panel: ".panel",
  footerPanel: "#pageFooter .panel",
  classes: {
    active: "active",
    open: "open"
  },
  dataShowHideCallback: "show-hide-callback",
  callback: function (a) {
    if ($.isFunction(a.data(this.dataShowHideCallback))) {
      a.data(this.dataShowHideCallback)()
    }
  },
  show: function (c, b) {
    var a = this;
    c.addClass(a.classes.active);
    c.find(this.panel).first().slideDown(250, function () {
      b.data("isvisible", true).addClass("open").find(".toggle").html(b.data("hide-text"));
      a.callback(b)
    })
  },
  hide: function (c, b) {
    var a = this;
    c.find(this.panel).first().slideUp(250, function () {
      b.data("isvisible", false).removeClass("open").find(".toggle").html(b.data("show-text"));
      c.removeClass(a.classes.active);
      a.callback(b)
    })
  },
  update: function (b, a) {
    if (b.hasClass(this.classes.active)) {
      this.hide(b, a)
    } else {
      this.show(b, a)
    }
  },
  setup: function () {
    var a = this;
    $(this.selector).each(function (c, f) {
      var d = $(f),
        b = d.find(HONDA.showHide.trigger).first();
      d.data("originalheight", d.find(a.panel).first().height());
      if (HONDA.is.mobile() && !$(this).parents(".productComparison").length) {
        a.update(d, b)
      }
      b.on({
        "click keyup": function (e) {
          if (e.type === "click" || e.keyCode === "13") {
            a.update(d, b)
          }
          e.preventDefault()
        }
      })
    })
  },
  init: function () {
    if ($(this.selector)) {
      this.setup()
    }
  }
};
HONDA.concertina = {
  action: function () {
    var a = {
      theSearch: $(".logo").find(".trigger"),
      theMainNav: $(".slimNav").find(".trigger"),
      theSecondaryNav: $(".secondaryNav").find(".trigger")
    };
    $.each(a, function () {
      var b = $(this);
      if (b.hasClass("open")) {
        b.trigger("click")
      }
    })
  },
  init: function () {
    var c = $(".logo").find(".trigger"),
      a = $(".slimNav").find(".trigger"),
      b = $(".secondaryNav").find(".trigger");
    if (!c.length && !a.length && !b.length) {
      return
    }
    c.on("click", function () {
      if (!$(this).data("isvisible")) {
        HONDA.showHide.hide($(".baseNav " + HONDA.showHide.selector), b);
        HONDA.slimNav.hide()
      }
    });
    a.on("click", function () {
      if (!$(this).data("isvisible")) {
        HONDA.mainNav.scrollToTop(".slimNav", function () {
          HONDA.siteSearch.hide();
          HONDA.showHide.hide($(".baseNav " + HONDA.showHide.selector), b)
        })
      }
    });
    b.on("click", function () {
      if (!$(this).data("isvisible")) {
        HONDA.mainNav.scrollToTop(".slimNav", function () {
          HONDA.siteSearch.hide();
          HONDA.slimNav.hide()
        })
      }
    })
  }
};
HONDA.externalLinks = {
  setup: function () {
    $(document).on("click", 'a[data-target="external"]', function (b) {
      var a = $(this).attr("href");
      window.open(a);
      b.preventDefault()
    })
  },
  init: function () {
    this.setup()
  }
};
HONDA.campaignTracker = {
  campaignParam: "c",
  campaignCookie: "HONDA_c",
  campaignCommsCodeParam: "c78",
  campaignCommsCodeCookie: "HONDA_c78",
  createSessionCookie: function (c, b) {
    var a = HONDA.getDomain.primaryDomain();
    $.cookie(c, b, {
      path: "/",
      domain: a
    })
  },
  checkParams: function () {
    var d = window.location.search,
      c, b = new RegExp("[\\?&]" + this.campaignParam + "=([^&#]*)").exec(d),
      a = new RegExp("[\\?&]" + this.campaignCommsCodeParam + "=([^&#]*)").exec(d);
    if (b) {
      c = encodeURIComponent(b[1].replace(/\+/g, " "));
      this.createSessionCookie(this.campaignCookie, c)
    }
    if (a) {
      c = encodeURIComponent(a[1].replace(/\+/g, " "));
      this.createSessionCookie(this.campaignCommsCodeCookie, c)
    }
  },
  init: function () {
    this.checkParams()
  }
};
HONDA.getDomain = {
  primaryDomain: function (b) {
    var d = typeof b !== "undefined" ? b.split(".") : document.domain.split("."),
      a = d.length,
      c;
    if (a > 1) {
      if (d[(a - 2)] !== "co") {
        c = "." + d[(a - 2)] + "." + d[(a - 1)]
      } else {
        c = "." + d[(d.length - 3)] + "." + d[(d.length - 2)] + "." + d[(d.length - 1)]
      }
    }
    return c
  },
  extractPrimaryDomain: function (b) {
    var a = null;
    try {
      var c = new URL(b);
      a = c.host
    } catch (d) {
      a = b.replace(/http(|s):\/\//, "").split(/[\/?#]/)[0]
    }
    return HONDA.getDomain.primaryDomain(a)
  }
};
HONDA.breakpoints = {
  current: null,
  xsmall: null,
  small: null,
  medium: null,
  large: null,
  xlarge: null,
  superlarge: null,
  orientation: "landscape",
  removeQuotes: function (a) {
    if (typeof a === "string" || a instanceof String) {
      a = a.replace(/^['"]+|\s+|\\|(;\s?\})+|['"]$/g, "")
    }
    return a
  },
  getBreakpoints: function () {
    var b = null;
    var a = {};
    if (window.getComputedStyle && window.getComputedStyle(document.body, "::before")) {
      b = window.getComputedStyle(document.body, "::before");
      b = b.content
    }
    // Thomas: This line caused an error in FireFox and Hamburger menue doesn't work.
    // if (typeof b === "string" && $.trim(b) !== "") {
    //   a = JSON.parse(this.removeQuotes(b))
    // }
    return a
  },
  setCurrent: function () {
    var a = this.getBreakpoints();
    if (a !== null) {
      this.current = parseInt(a[a.current], 10)
    }
    this.orientation = a.orientation
  },
  init: function () {
    var a = this.getBreakpoints();
    if (a !== null) {
      this.xsmall = parseInt(a.xsmall, 10);
      this.small = parseInt(a.small, 10);
      this.medium = parseInt(a.medium, 10);
      this.large = parseInt(a.large, 10);
      this.xlarge = parseInt(a.xlarge, 10);
      this.superlarge = parseInt(a.superlarge, 10);
      this.current = parseInt(a[a.current], 10)
    }
  }
};
HONDA.breakpoints.init();
HONDA.fixedURIComponent = {
  encode: function (a) {
    return encodeURIComponent(a).replace(/[!'()]/g, escape).replace(/\*/g, "%2A")
  },
  decode: function (a) {
    return decodeURIComponent(a)
  }
};
HONDA.touchDeviceCheck = {
  classNameIsTouch: "touch-device",
  classNameNoTouch: "no-touch-device",
  check: function () {
    $("html").removeClass(this.classNameIsTouch + " " + this.classNameNoTouch);
    $("html").addClass(HONDA.is.touchDevice() ? this.classNameIsTouch : this.classNameNoTouch)
  },
  init: function () {
    var a = this;
    if ($("html").hasClass("ie8")) {
      a.check()
    } else {
      $(window).on("resize", function () {
        a.check()
      }).trigger("resize")
    }
  }
};
HONDA.ScrollLock = (function () {
  var c = $(window);
  var d = $("html");
  var i = $("#outer");
  var b = 0;
  var h = {
    scrollLock: "scrollLock",
    activeModal: "activeModal"
  };

  function a() {
    return d.hasClass(h.scrollLock)
  }

  function e() {
    return d.hasClass(h.activeModal)
  }

  function g() {
    if (a()) {
      return
    }
    b = c.scrollTop();
    i.height(c.innerHeight()).scrollTop(b);
    d.addClass(h.scrollLock)
  }

  function f() {
    if (e() || !a()) {
      return
    }
    i.height("");
    c.scrollTop(b);
    d.removeClass(h.scrollLock)
  }
  return {
    enable: g,
    disable: f,
    isLocked: a,
    hasActiveModal: e
  }
}());
HONDA.zIndexForFullScreenOverlay = (function () {
  var a = '.secondaryResponsive, .languageSelector, .sticky_ctas, .hondaHeader, .hondaHeader [class$="Diamond56Ico"], .hondaHeader [class$="Quote45Ico"], .hondaHeader nav.primaryNavigation button, .responsiveFooter .ctas li';

  function b() {
    $(a).css("z-index", 1)
  }

  function c() {
    $(a).css("z-index", "")
  }
  return {
    restrict: b,
    restore: c
  }
}());
HONDA.getEventPropertyName = function (a) {
  return a.originalEvent.propertyName.replace(/^(-webkit-|-ms-|-moz-)/g, "")
};
HONDA.backgroundImageSwapper = (function () {
  var c = $(window);
  var a = $(".bgImgSwap");
  var b = $("html").hasClass("ie8");

  function d() {
    a.each(function () {
      var h = $(this);
      var e = h.find("img");
      var f = h.data();
      var g = "";
      if (_.isEmpty(f)) {
        return
      }
      if (HONDA.is.mobile()) {
        g = f.mobileSrc
      } else {
        if (HONDA.is.touchDevice()) {
          if (f.tabletPortraitSrc && f.tabletLandscapeSrc) {
            g = f[c.width() > c.height() ? "tabletLandscapeSrc" : "tabletPortraitSrc"]
          } else {
            g = f[f.tabletSrc ? "tabletSrc" : "desktopSrc"]
          }
        } else {
          g = f.desktopSrc
        }
      }
      if (_.isString(g) && g !== "" && g.toLowerCase() !== "none") {
        if (b) {
          if (!e.length) {
            e = $("<img />").appendTo(h)
          }
          e.attr("src", g)
        } else {
          h.css("background-image", "url(" + g + " )")
        }
      }
    })
  }
  return {
    init: function () {
      if (a.length) {
        c.on("resize", d).trigger("resize")
      }
    }
  }
}());
HONDA.hasSupportedAudioType = function (c, d) {
  var a = false;
  var b;
  if (c && c.canPlayType) {
    for (b = 0; b < d.length; b++) {
      a = !!c.canPlayType(d[b].type.replace(/no/, ""));
      if (a) {
        break
      }
    }
  }
  return a
};
HONDA.formatCurrency = function (b) {
  var c = (HONDA && HONDA.currency) || {};
  var a = $("<span/>").html(b);
  return a.formatCurrency(c).text()
};
HONDA.generateUniqueNumber = function () {
  return Math.floor(Math.random() * 26) + Date.now()
};
$.fn.maxHeight = function (a) {
  var b = [];
  this.each(function () {
    b.push($(this).outerHeight(typeof a === "undefined" ? false : a))
  });
  return Math.max.apply(null, b)
};
$.fn.redrawDOM = function () {
  $(this).each(function () {
    $(this).css("display")
  });
  return this
};
$.fn.bottom = function (a) {
  if (this.length) {
    return this.outerHeight(typeof a === "undefined" ? false : a) + this.offset().top
  }
};
$.fn.iePseudoFix = function () {
  $(this).addClass("iePseudoFix").redrawDOM().removeClass("iePseudoFix");
  return this
};
$.fn.onImageLoad = function (a) {
  this.one("load", function () {
    if (_.isFunction(a)) {
      a()
    }
  }).each(function () {
    if (this.complete) {
      $(this).trigger("load")
    }
  });
  return this
};
$.fn.observe = function (b) {
  if (_.isFunction(b)) {
    var a = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    this.each(function () {
      var c = null;
      if (a) {
        new a(function () {
          window.clearTimeout(c);
          c = window.setTimeout(function () {
            b()
          }, 200)
        }).observe(this, {
          attributes: true,
          childList: true,
          subtree: true,
          attributeOldValue: true
        })
      } else {
        c = window.setInterval(function () {
          b()
        }, 1000)
      }
    })
  }
  return this
};
$.fn.onAnimationEnd = function (b) {
  var a = "animationend webkitAnimationEnd";
  if (Modernizr.cssanimations) {
    this.each(function () {
      $(this).on(a, function (c) {
        $(this).off(a);
        if (_.isFunction(b)) {
          b()
        }
      })
    })
  } else {
    this.each(function () {
      if (_.isFunction(b)) {
        b()
      }
    })
  }
};
$.fn.scrollIntoView = function () {
  var c = Math.round(this.first().offset().top);
  var a = 300;
  var b = null;
  $.each(arguments, function (d, e) {
    if ($.isNumeric(e)) {
      a = e
    }
    if ($.isFunction(e)) {
      b = e
    }
  });
  $("html, body").stop().animate({
    scrollTop: c
  }, a).promise().then(function () {
    if (b) {
      b()
    }
  })
};
$.fn.onPropertyTransitionEnd = function (a, d) {
  var b = "webkitTransitionEnd.{0} mozTransitionEnd.{0} transitionend.{0}";

  function c() {
    if ($.isFunction(d)) {
      d()
    }
  }
  if (Modernizr.csstransitions) {
    b = HONDA.helpers.stringReplace(b, HONDA.generateUniqueNumber());
    this.on(b, function (f) {
      if (HONDA.getEventPropertyName(f) === a) {
        $(this).off(b);
        c()
      }
    })
  } else {
    c()
  }
};
$.fn.getTranslate2dPosition = function () {
  var a = this.css("transform").replace(/[^0-9|,|\-|.]/g, "").split(",");
  return {
    x: a[4] ? Number(a[4]) : "none",
    y: a[5] ? Number(a[5]) : "none"
  }
};
$.fn.getTransitionDuration = function () {
  var a = this.css("transition-duration");
  if (typeof a === "string") {
    if (a.replace(/[0-9\.]/g, "") === "s") {
      a = parseFloat(a) * 1000
    } else {
      a = parseFloat(a)
    }
  }
  return a
};
(function () {
  var b = 0;
  var c = ["ms", "moz", "webkit", "o"];
  var a = 0;
  for (a = 0; a < c.length && !window.requestAnimationFrame; ++a) {
    window.requestAnimationFrame = window[c[a] + "RequestAnimationFrame"];
    window.cancelAnimationFrame = window[c[a] + "CancelAnimationFrame"] || window[c[a] + "CancelRequestAnimationFrame"]
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (h, e) {
      var d = new Date().getTime();
      var f = Math.max(0, 16 - (d - b));
      var g = window.setTimeout(function () {
        h(d + f)
      }, f);
      b = d + f;
      return g
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (d) {
      window.clearTimeout(d)
    }
  }
}());
$(document).ready(function () {
  if (HONDA.debugByQueryString) {
    HONDA.debugByQueryString.init()
  }
  HONDA.touchDeviceCheck.init();
  HONDA.ResponsiveHeader.init();
  HONDA.ResponsiveFooter.init();
  if (!HONDA.detailedProductEmissions.isShowEmissions()) {
    HONDA.cookiesAlert.init();
    HONDA.pageHeader.init();
    HONDA.helpers.addressbarScrollHack();
    HONDA.campaignTracker.init();
    HONDA.skipLinks.init();
    HONDA.showHide.init();
    HONDA.concertina.init();
    HONDA.tabs.init();
    HONDA.findDealer.init();
    HONDA.analytics.init();
    HONDA.resultsListMap.init();
    HONDA.territoryDealer.init();
    HONDA.dealerCheckbox.init();
    HONDA.dealerDetail.init();
    HONDA.getMoreResults.init();
    HONDA.resultsListView.init();
    HONDA.pageIntroduction.toggle.init();
    HONDA.responsiveCarousel.init();
    HONDA.promoAccordion.init();
    HONDA.externalLinks.init();
    HONDA.configurationMoment.init();
    HONDA.commonCTAs.init();
    HONDA.searchResults();
    HONDA.productDivisionNavigation.init();
    HONDA.sitemapLinkList();
    HONDA.heroTimer.init();
    HONDA.ModelSelector.init();
    HONDA.cookieUserState.init();
    HONDA.orderBrochure.init();
    HONDA.formBuilder.init();
    HONDA.productLines.init();
    HONDA.videoContentAbove.init();
    HONDA.foundDealerRedirect.init();
    HONDA.sessionCookieDelete.init();
    HONDA.PersonalisationConfiguration.init();
    HONDA.ScrollingHeader.init();
    HONDA.FullScreenPanel.init();
    HONDA.TaxCalculator.init();
    HONDA.AwardsReviews.init();
    HONDA.langaugeSelectorHeader.init();
    HONDA.UpdatesAndRecalls.init();
    HONDA.InfiniteAdvancement.init();
    HONDA.ProductSpecification.init();
    HONDA.BookTestDriveConfirmation.init();
    HONDA.backgroundImageSwapper.init();
    HONDA.PortalCampaign.init();
    HONDA.Modal.init();
    HONDA.JazzCampaign.init();
    HONDA.SocialSharing.init();
    HONDA.rangeCampaign.init();
    $(".bookTestDriveAccordion").accordion({
      firstOpen: false
    });
    $(".hmcCategoryFilters").equaliseHeightsInRow({
      target: ".filterInner",
      handlerEqualiseColumns: function () {
        this.$el.find(this.options.target).css("height", "").data("originalHeight", "");
        this.columnConform()
      }
    })
  }
  HONDA.detailedProductEmissions.init()
});
$(window).on("resize", _.debounce(function () {
  var a = HONDA.breakpoints.current;
  HONDA.breakpoints.setCurrent();
  if (HONDA.breakpoints.current !== a) {
    $(document).trigger("resize.breakpoint").trigger("resizeBreakpoint")
  }
  $(document).trigger("resize.viewport").trigger("resizeViewport");
  HONDA.dealerCheckbox.setup()
}, 200));
$(window).load(function () {
  HONDA.configureHiResImages.init();
  HONDA.detectIEs.init();
  HONDA.detectMinimumFlash.init();
  HONDA.SplitColourSection.init();
  $(".hmcResultsList").equaliseHeightsInRow({
    target: ".result:visible"
  })
});

$(document).ready(function () {

  $('.js-backToTop').click(function (e) {
    $('html, body').animate({
      scrollTop: 0
    }, "slow");
    e.preventDefault();
  });

}); // End of document ready