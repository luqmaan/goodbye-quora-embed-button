/*
Name: main.js
URL: http://qsf.cf.quoracdn.net/-9b6c9a8ce219bbec.js
Generated: 1354919214940193
Files: /json2.js, /assert.js, /jquery.js, /jquery.securepost.js, /jquery.cookie.js, /visibility.js, /lang/fun.js, /Class.js, /keystrokes.js, /w2.keyevent.js, /webnode2.js, /jquery.dialog.js, /jquery.tooltip.js, /jquery.menu.js, /jquery.topic.js, /jquery.viewport.js, /jquery.ajax.js, /effects.core.js, /effects.shake.js, /effects.highlight.js, /atexit.js, /tchannel_up.js, /w2.livenode.js, /jquery.webnode2.js, /cookies.js, /user_profiling.js, /window_manager.js, /w2.rpc.js, /jquery.quora.js, /w2.dialog.js, /w2.inputvalidate.js, /w2.interaction.js, /frame_busting.js, /debug.js, /w2.quora.js, /view/toggle.js, /action_log.js, /view/inline_editor.js, /facebook.js, /dialog.js, /app/view/topic.js, /swfobject.js, /jquery.ui-1.8.17.js, /qed/modifiers.js, /qed/trie.js, /qed/snippets.js, /qed/nodestate.js, /qed/rules.js, /qed/sanitize.js, /qed/npd.js, /qed/util.js, /find.js, /qed/unload.js, /qed/selection.js, /qed/snapshot.js, /qed/history.js, /qed/edit.js, /linkify.js, /qtexteditor.js, /Quora.js, /twitter.js, /login.js, /simscroll.js, /html.js, /typeahead.js, /mobile.js, /flash.js, /presence.js, /query_eval.js, /w2.inspector.js, /mobile_ride_along.js, /lang/arr.js, /perf.js, /view/embed.js, /view/embed_editor.js, /view/paged_list.js, /view/placepicker.js, /view/trackback.js, /app/view/home/home_promote.js, /app/view/common.js, /app/view/feed.js, /app/view/review_queue.js, /app/view/share/connect.js, /app/view/settings.js, /app/view/share.js, /app/view/question.js, /app/view/question/wanted_answer.js, /app/view/question/question_add.js, /app/view/board/create_box.js, /app/view/board/follow_invite.js, /app/view/topic/topic_list.js, /app/view/topic/topic_redesign.js, /app/view/signup.js, /app/view/threaded_comments.js, /app/view/share/form.js, /app/view/share/dialog.js, /app/view/contact_importer.js, /app/view/nux.js, /app/view/nux/welcome.js, /app/view/post.js, /app/view/user.js, /app/view/quote.js, /app/view/content_views.js, /app/view/funnel.js, /app/view/top_writers.js, /main.js
*/
rec('package', 'main.js', 'start');

function containsNonLatinCodepoints(a) {
	return /[^\u0000-\u00ff]/.test(a)
}
function now() {
	return new Date
}
this.JSON || (this.JSON = {}), function() {
	function f(a) {
		return a < 10 ? "0" + a : a
	}
	function quote(a) {
		return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
			var b = meta[a];
			return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
		}) + '"' : '"' + a + '"'
	}
	function str(a, b) {
		var c, d, e, f, g = gap,
			h, i = b[a];
		i && typeof i == "object" && typeof i.toJSON == "function" && (i = i.toJSON(a)), typeof rep == "function" && (i = rep.call(b, a, i));
		switch(typeof i) {
		case "string":
			return quote(i);
		case "number":
			return isFinite(i) ? String(i) : "null";
		case "boolean":
		case "null":
			return String(i);
		case "object":
			if(!i) return "null";
			gap += indent, h = [];
			if(Object.prototype.toString.apply(i) === "[object Array]") {
				f = i.length;
				for(c = 0; c < f; c += 1) h[c] = str(c, i) || "null";
				return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
			}
			if(rep && typeof rep == "object") {
				f = rep.length;
				for(c = 0; c < f; c += 1) d = rep[c], typeof d == "string" && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e))
			} else for(d in i) Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
			return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
		}
	}
	typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(a) {
		return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
	}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
		return this.valueOf()
	});
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		gap, indent, meta = {
			"\b": "\\b",
			"	": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		},
		rep;
	typeof JSON.stringify != "function" && (JSON.stringify = function(a, b, c) {
		var d;
		gap = "", indent = "";
		if(typeof c == "number") for(d = 0; d < c; d += 1) indent += " ";
		else typeof c == "string" && (indent = c);
		rep = b;
		if(!b || typeof b == "function" || typeof b == "object" && typeof b.length == "number") return str("", {
			"": a
		});
		throw new Error("JSON.stringify")
	}), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
		function walk(a, b) {
			var c, d, e = a[b];
			if(e && typeof e == "object") for(c in e) Object.hasOwnProperty.call(e, c) && (d = walk(e, c), d !== undefined ? e[c] = d : delete e[c]);
			return reviver.call(a, b, e)
		}
		var j;
		cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
			return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
		}));
		if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
			"": j
		}, "") : j;
		throw new SyntaxError("JSON.parse")
	})
}(), require.install("json2", function() {}), require.install("assert", function(require, a, b) {
	function d() {}
	function e(a) {
		if(c.debug) debugger
	}
	function f(a) {
		this.message = a.message || this.message, this.actual = a.actual, this.expected = a.expected
	}
	function h(a, b) {
		if(a === b) return !0;
		if(a instanceof Date) return b instanceof Date && +a === +b;
		if(typeof a != "object" || typeof b != "object") return a == b;
		if(a.prototype !== b.prototype) return !1;
		var c, d = {};
		for(c in a) d[c] = !0;
		for(c in b) d[c] = !0;
		if(a instanceof Array) for(var e = Math.max(a.length, b.length) - 1; e >= 0; --e) {
			if(e in d) break;
			d[e] = !0
		}
		for(c in d) if(c in a != c in b || g.call(a, c) != g.call(b, c) || !h(a[c], b[c])) return !1;
		return !0
	}
	function i(b) {
		return function(c, g, h) {
			(b.call(a, c, g) ? d : e)(new f({
				message: h,
				actual: c,
				expected: g
			}))
		}
	}
	var c = require("settings");
	f.prototype = new Error("assertion failure"), f.prototype.toString = function() {
		return this.message + (": got " + this.actual + ", expected " + this.expected)
	};
	var g = {}.hasOwnProperty;
	a.AssertionError = f, a.equal = i(function(a, b) {
		return a == b
	}), a.notEqual = i(function(a, b) {
		return a != b
	}), a.deepEqual = i(function(a, b) {
		return h(a, b)
	}), a.notDeepEqual = i(function(a, b) {
		return !h(a, b)
	}), a.strictEqual = i(function(a, b) {
		return a === b
	}), a.notStrictEqual = i(function(a, b) {
		return a !== b
	}), a.throws_error = i(function(a, b) {
		try {
			return a(), !1
		} catch(c) {
			return !b || c instanceof b
		}
	}), a.ok = window.assert = function(b, c) {
		a.equal( !! b, !0, c)
	}, a.notOk = function(b, c) {
		a.equal( !! b, !1, c)
	}, a.todo = function(b, c) {
		b && a.equal( !! b, !1, c)
	}, a.greaterThan = i(function(a, b) {
		return a > b
	}), a.lessThan = i(function(a, b) {
		return a < b
	}), a.matches = i(function(a, b) {
		return b instanceof RegExp && b.test(a)
	})
}), function(a, undefined) {
	function g(a) {
		var b = f[a] = {},
			c, d;
		a = a.split(/\s+/);
		for(c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
		return b
	}
	function k(a, b, c) {
		if(c === undefined && a.nodeType === 1) {
			var d = "data-" + b.replace(j, "-$1").toLowerCase();
			c = a.getAttribute(d);
			if(typeof c == "string") {
				try {
					c = c === "true" ? !0 : c === "false" ? !1 : c === "null" ? null : e.isNumeric(c) ? parseFloat(c) : i.test(c) ? e.parseJSON(c) : c
				} catch(f) {}
				e.data(a, b, c)
			} else c = undefined
		}
		return c
	}
	function l(a) {
		for(var b in a) {
			if(b === "data" && e.isEmptyObject(a[b])) continue;
			if(b !== "toJSON") return !1
		}
		return !0
	}
	function m(a, b, c) {
		var d = b + "defer",
			f = b + "queue",
			g = b + "mark",
			h = e._data(a, d);
		h && (c === "queue" || !e._data(a, f)) && (c === "mark" || !e._data(a, g)) && setTimeout(function() {
			!e._data(a, f) && !e._data(a, g) && (e.removeData(a, d, !0), h.fire())
		}, 0)
	}
	function L() {
		return !1
	}
	function M() {
		return !0
	}
	function U(a) {
		return !a || !a.parentNode || a.parentNode.nodeType === 11
	}
	function V(a, b, c) {
		b = b || 0;
		if(e.isFunction(b)) return e.grep(a, function(a, d) {
			var e = !! b.call(a, d, a);
			return e === c
		});
		if(b.nodeType) return e.grep(a, function(a, d) {
			return a === b === c
		});
		if(typeof b == "string") {
			var d = e.grep(a, function(a) {
				return a.nodeType === 1
			});
			if(Q.test(b)) return e.filter(b, d, !c);
			b = e.filter(b, d)
		}
		return e.grep(a, function(a, d) {
			return e.inArray(a, b) >= 0 === c
		})
	}
	function W(a) {
		var b = X.split(" "),
			c = a.createDocumentFragment();
		if(c.createElement) while(b.length) c.createElement(b.pop());
		return c
	}
	function kb(a, b) {
		return e.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function lb(a, b) {
		if(b.nodeType !== 1 || !e.hasData(a)) return;
		var c, d, f, g = e._data(a),
			h = e._data(b, g),
			i = g.events;
		if(i) {
			delete h.handle, h.events = {};
			for(c in i) for(d = 0, f = i[c].length; d < f; d++) e.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
		}
		h.data && (h.data = e.extend({}, h.data))
	}
	function mb(a, b) {
		var c;
		if(b.nodeType !== 1) return;
		b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
		if(c === "object") b.outerHTML = a.outerHTML;
		else if(c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
			if(c === "option") b.selected = a.defaultSelected;
			else if(c === "input" || c === "textarea") b.defaultValue = a.defaultValue
		} else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
		b.removeAttribute(e.expando)
	}
	function nb(a) {
		return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
	}
	function ob(a) {
		if(a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
	}
	function pb(a) {
		var b = (a.nodeName || "").toLowerCase();
		b === "input" ? ob(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && e.grep(a.getElementsByTagName("input"), ob)
	}
	function qb(a, b) {
		b.src ? e.ajax({
			url: b.src,
			async: !1,
			dataType: "script"
		}) : e.globalEval((b.text || b.textContent || b.innerHTML || "").replace(hb, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
	}
	function Db(a, b, c) {
		var d = b === "width" ? a.offsetWidth : a.offsetHeight,
			f = b === "width" ? yb : zb;
		if(d > 0) return c !== "border" && e.each(f, function() {
			c || (d -= parseFloat(e.css(a, "padding" + this)) || 0), c === "margin" ? d += parseFloat(e.css(a, c + this)) || 0 : d -= parseFloat(e.css(a, "border" + this + "Width")) || 0
		}), d + "px";
		d = Ab(a, b, b);
		if(d < 0 || d == null) d = a.style[b] || 0;
		return d = parseFloat(d) || 0, c && e.each(f, function() {
			d += parseFloat(e.css(a, "padding" + this)) || 0, c !== "padding" && (d += parseFloat(e.css(a, "border" + this + "Width")) || 0), c === "margin" && (d += parseFloat(e.css(a, c + this)) || 0)
		}), d + "px"
	}
	function $b(a) {
		return function(b, c) {
			typeof b != "string" && (c = b, b = "*");
			if(e.isFunction(c)) {
				var d = b.toLowerCase().split(Qb),
					f = 0,
					g = d.length,
					h, i, j;
				for(; f < g; f++) h = d[f], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
			}
		}
	}
	function _b(a, b, c, d, e, f) {
		e = e || b.dataTypes[0], f = f || {}, f[e] = !0;
		var g = a[e],
			h = 0,
			i = g ? g.length : 0,
			j = a === Ub,
			k;
		for(; h < i && (j || !k); h++) k = g[h](b, c, d), typeof k == "string" && (!j || f[k] ? k = undefined : (b.dataTypes.unshift(k), k = _b(a, b, c, d, k, f)));
		return(j || !k) && !f["*"] && (k = _b(a, b, c, d, "*", f)), k
	}
	function ac(a, b) {
		var c, d, f = e.ajaxSettings.flatOptions || {};
		for(c in b) b[c] !== undefined && ((f[c] ? a : d || (d = {}))[c] = b[c]);
		d && e.extend(!0, a, d)
	}
	function bc(a, b, c, d) {
		if(e.isArray(b)) e.each(b, function(b, f) {
			c || Fb.test(a) ? d(a, f) : bc(a + "[" + (typeof f == "object" || e.isArray(f) ? b : "") + "]", f, c, d)
		});
		else if(!c && b != null && typeof b == "object") for(var f in b) bc(a + "[" + f + "]", b[f], c, d);
		else d(a, b)
	}
	function cc(a, b, c) {
		var d = a.contents,
			e = a.dataTypes,
			f = a.responseFields,
			g, h, i, j;
		for(h in f) h in c && (b[f[h]] = c[h]);
		while(e[0] === "*") e.shift(), g === undefined && (g = a.mimeType || b.getResponseHeader("content-type"));
		if(g) for(h in d) if(d[h] && d[h].test(g)) {
			e.unshift(h);
			break
		}
		if(e[0] in c) i = e[0];
		else {
			for(h in c) {
				if(!e[0] || a.converters[h + " " + e[0]]) {
					i = h;
					break
				}
				j || (j = h)
			}
			i = i || j
		}
		if(i) return i !== e[0] && e.unshift(i), c[i]
	}
	function dc(a, b) {
		a.dataFilter && (b = a.dataFilter(b, a.dataType));
		var c = a.dataTypes,
			d = {},
			f, g, h = c.length,
			i, j = c[0],
			k, l, m, n, o;
		for(f = 1; f < h; f++) {
			if(f === 1) for(g in a.converters) typeof g == "string" && (d[g.toLowerCase()] = a.converters[g]);
			k = j, j = c[f];
			if(j === "*") j = k;
			else if(k !== "*" && k !== j) {
				l = k + " " + j, m = d[l] || d["* " + j];
				if(!m) {
					o = undefined;
					for(n in d) {
						i = n.split(" ");
						if(i[0] === k || i[0] === "*") {
							o = d[i[1] + " " + j];
							if(o) {
								n = d[n], n === !0 ? m = o : o === !0 && (m = n);
								break
							}
						}
					}
				}!m && !o && e.error("No conversion from " + l.replace(" ", " to ")), m !== !0 && (b = m ? m(b) : o(n(b)))
			}
		}
		return b
	}
	function jc() {
		try {
			return new a.XMLHttpRequest
		} catch(b) {}
	}
	function kc() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch(b) {}
	}
	function tc() {
		return setTimeout(uc, 0), sc = e.now()
	}
	function uc() {
		sc = undefined
	}
	function vc(a, b) {
		var c = {};
		return e.each(rc.concat.apply([], rc.slice(0, b)), function() {
			c[this] = a
		}), c
	}
	function wc(a) {
		if(!lc[a]) {
			var c = b.body,
				d = e("<" + a + ">").appendTo(c),
				f = d.css("display");
			d.remove();
			if(f === "none" || f === "") {
				mc || (mc = b.createElement("iframe"), mc.frameBorder = mc.width = mc.height = 0), c.appendChild(mc);
				if(!nc || !mc.createElement) nc = (mc.contentWindow || mc.contentDocument).document, nc.write((b.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), nc.close();
				d = nc.createElement(a), nc.body.appendChild(d), f = e.css(d, "display"), c.removeChild(mc)
			}
			lc[a] = f
		}
		return lc[a]
	}
	function zc(a) {
		return e.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
	}
	var b = a.document,
		c = a.navigator,
		d = a.location,
		e = function() {
			function J() {
				if(d.isReady) return;
				try {
					b.documentElement.doScroll("left")
				} catch(a) {
					setTimeout(J, 1);
					return
				}
				d.ready()
			}
			var d = function(a, b) {
					return new d.fn.init(a, b, g)
				},
				e = a.jQuery,
				f = a.$,
				g, h = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				i = /\S/,
				j = /^\s+/,
				k = /\s+$/,
				l = /\d/,
				m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				n = /^[\],:{}\s]*$/,
				o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				q = /(?:^|:|,)(?:\s*\[)+/g,
				r = /(webkit)[ \/]([\w.]+)/,
				s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				t = /(msie) ([\w.]+)/,
				u = /(mozilla)(?:.*? rv:([\w.]+))?/,
				v = /-([a-z]|[0-9])/ig,
				w = /^-ms-/,
				x = function(a, b) {
					return(b + "").toUpperCase()
				},
				y = c.userAgent,
				z, A, B, C = Object.prototype.toString,
				D = Object.prototype.hasOwnProperty,
				E = Array.prototype.push,
				F = Array.prototype.slice,
				G = String.prototype.trim,
				H = Array.prototype.indexOf,
				I = {};
			return d.fn = d.prototype = {
				constructor: d,
				init: function(a, c, e) {
					var f, g, i, j;
					if(!a) return this;
					if(a.nodeType) return this.context = this[0] = a, this.length = 1, this;
					if(a === "body" && !c && b.body) return this.context = b, this[0] = b.body, this.selector = a, this.length = 1, this;
					if(typeof a == "string") {
						a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = h.exec(a);
						if(f && (f[1] || !c)) {
							if(f[1]) return c = c instanceof d ? c[0] : c, j = c ? c.ownerDocument || c : b, i = m.exec(a), i ? d.isPlainObject(c) ? (a = [b.createElement(i[1])], d.fn.attr.call(a, c, !0)) : a = [j.createElement(i[1])] : (i = d.buildFragment([f[1]], [j]), a = (i.cacheable ? d.clone(i.fragment) : i.fragment).childNodes), d.merge(this, a);
							g = b.getElementById(f[2]);
							if(g && g.parentNode) {
								if(g.id !== f[2]) return e.find(a);
								this.length = 1, this[0] = g
							}
							return this.context = b, this.selector = a, this
						}
						return !c || c.jquery ? (c || e).find(a) : this.constructor(c).find(a)
					}
					return d.isFunction(a) ? e.ready(a) : (a.selector !== undefined && (this.selector = a.selector, this.context = a.context), d.makeArray(a, this))
				},
				selector: "",
				jquery: "1.7",
				length: 0,
				size: function() {
					return this.length
				},
				toArray: function() {
					return F.call(this, 0)
				},
				get: function(a) {
					return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
				},
				pushStack: function(a, b, c) {
					var e = this.constructor();
					return d.isArray(a) ? E.apply(e, a) : d.merge(e, a), e.prevObject = this, e.context = this.context, b === "find" ? e.selector = this.selector + (this.selector ? " " : "") + c : b && (e.selector = this.selector + "." + b + "(" + c + ")"), e
				},
				each: function(a, b) {
					return d.each(this, a, b)
				},
				ready: function(a) {
					return d.bindReady(), A.add(a), this
				},
				eq: function(a) {
					return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				slice: function() {
					return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
				},
				map: function(a) {
					return this.pushStack(d.map(this, function(b, c) {
						return a.call(b, c, b)
					}))
				},
				end: function() {
					return this.prevObject || this.constructor(null)
				},
				push: E,
				sort: [].sort,
				splice: [].splice
			}, d.fn.init.prototype = d.fn, d.extend = d.fn.extend = function() {
				var a, b, c, e, f, g, h = arguments[0] || {},
					i = 1,
					j = arguments.length,
					k = !1;
				typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !d.isFunction(h) && (h = {}), j === i && (h = this, --i);
				for(; i < j; i++) if((a = arguments[i]) != null) for(b in a) {
					c = h[b], e = a[b];
					if(h === e) continue;
					k && e && (d.isPlainObject(e) || (f = d.isArray(e))) ? (f ? (f = !1, g = c && d.isArray(c) ? c : []) : g = c && d.isPlainObject(c) ? c : {}, h[b] = d.extend(k, g, e)) : e !== undefined && (h[b] = e)
				}
				return h
			}, d.extend({
				noConflict: function(b) {
					return a.$ === d && (a.$ = f), b && a.jQuery === d && (a.jQuery = e), d
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function(a) {
					a ? d.readyWait++ : d.ready(!0)
				},
				ready: function(a) {
					if(a === !0 && !--d.readyWait || a !== !0 && !d.isReady) {
						if(!b.body) return setTimeout(d.ready, 1);
						d.isReady = !0;
						if(a !== !0 && --d.readyWait > 0) return;
						A.fireWith(b, [d]), d.fn.trigger && d(b).trigger("ready").unbind("ready")
					}
				},
				bindReady: function() {
					if(A) return;
					A = d.Callbacks("once memory");
					if(b.readyState === "complete") return setTimeout(d.ready, 1);
					if(b.addEventListener) b.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", d.ready, !1);
					else if(b.attachEvent) {
						b.attachEvent("onreadystatechange", B), a.attachEvent("onload", d.ready);
						var c = !1;
						try {
							c = a.frameElement == null
						} catch(e) {}
						b.documentElement.doScroll && c && J()
					}
				},
				isFunction: function(a) {
					return d.type(a) === "function"
				},
				isArray: Array.isArray ||
				function(a) {
					return d.type(a) === "array"
				},
				isWindow: function(a) {
					return a && typeof a == "object" && "setInterval" in a
				},
				isNumeric: function(a) {
					return a != null && l.test(a) && !isNaN(a)
				},
				type: function(a) {
					return a == null ? String(a) : I[C.call(a)] || "object"
				},
				isPlainObject: function(a) {
					if(!a || d.type(a) !== "object" || a.nodeType || d.isWindow(a)) return !1;
					try {
						if(a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
					} catch(b) {
						return !1
					}
					var c;
					for(c in a);
					return c === undefined || D.call(a, c)
				},
				isEmptyObject: function(a) {
					for(var b in a) return !1;
					return !0
				},
				error: function(a) {
					throw a
				},
				parseJSON: function(b) {
					if(typeof b != "string" || !b) return null;
					b = d.trim(b);
					if(a.JSON && a.JSON.parse) return a.JSON.parse(b);
					if(n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return(new Function("return " + b))();
					d.error("Invalid JSON: " + b)
				},
				parseXML: function(b) {
					var c, e;
					try {
						a.DOMParser ? (e = new DOMParser, c = e.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
					} catch(f) {
						c = undefined
					}
					return(!c || !c.documentElement || c.getElementsByTagName("parsererror").length) && d.error("Invalid XML: " + b), c
				},
				noop: function() {},
				globalEval: function(b) {
					b && i.test(b) && (a.execScript ||
					function(b) {
						a.eval.call(a, b)
					})(b)
				},
				camelCase: function(a) {
					return a.replace(w, "ms-").replace(v, x)
				},
				nodeName: function(a, b) {
					return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
				},
				each: function(a, b, c) {
					var e, f = 0,
						g = a.length,
						h = g === undefined || d.isFunction(a);
					if(c) {
						if(h) {
							for(e in a) if(b.apply(a[e], c) === !1) break
						} else for(; f < g;) if(b.apply(a[f++], c) === !1) break
					} else if(h) {
						for(e in a) if(b.call(a[e], e, a[e]) === !1) break
					} else for(; f < g;) if(b.call(a[f], f, a[f++]) === !1) break;
					return a
				},
				trim: G ?
				function(a) {
					return a == null ? "" : G.call(a)
				} : function(a) {
					return a == null ? "" : a.toString().replace(j, "").replace(k, "")
				},
				makeArray: function(a, b) {
					var c = b || [];
					if(a != null) {
						var e = d.type(a);
						a.length == null || e === "string" || e === "function" || e === "regexp" || d.isWindow(a) ? E.call(c, a) : d.merge(c, a)
					}
					return c
				},
				inArray: function(a, b, c) {
					var d;
					if(b) {
						if(H) return H.call(b, a, c);
						d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
						for(; c < d; c++) if(c in b && b[c] === a) return c
					}
					return -1
				},
				merge: function(a, b) {
					var c = a.length,
						d = 0;
					if(typeof b.length == "number") for(var e = b.length; d < e; d++) a[c++] = b[d];
					else while(b[d] !== undefined) a[c++] = b[d++];
					return a.length = c, a
				},
				grep: function(a, b, c) {
					var d = [],
						e;
					c = !! c;
					for(var f = 0, g = a.length; f < g; f++) e = !! b(a[f], f), c !== e && d.push(a[f]);
					return d
				},
				map: function(a, b, c) {
					var e, f, g = [],
						h = 0,
						i = a.length,
						j = a instanceof d || i !== undefined && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || d.isArray(a));
					if(j) for(; h < i; h++) e = b(a[h], h, c), e != null && (g[g.length] = e);
					else for(f in a) e = b(a[f], f, c), e != null && (g[g.length] = e);
					return g.concat.apply([], g)
				},
				guid: 1,
				proxy: function(a, b) {
					if(typeof b == "string") {
						var c = a[b];
						b = a, a = c
					}
					if(!d.isFunction(a)) return undefined;
					var e = F.call(arguments, 2),
						f = function() {
							return a.apply(b, e.concat(F.call(arguments)))
						};
					return f.guid = a.guid = a.guid || f.guid || d.guid++, f
				},
				access: function(a, b, c, e, f, g) {
					var h = a.length;
					if(typeof b == "object") {
						for(var i in b) d.access(a, i, b[i], e, f, c);
						return a
					}
					if(c !== undefined) {
						e = !g && e && d.isFunction(c);
						for(var j = 0; j < h; j++) f(a[j], b, e ? c.call(a[j], j, f(a[j], b)) : c, g);
						return a
					}
					return h ? f(a[0], b) : undefined
				},
				now: function() {
					return(new Date).getTime()
				},
				uaMatch: function(a) {
					a = a.toLowerCase();
					var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
					return {
						browser: b[1] || "",
						version: b[2] || "0"
					}
				},
				sub: function() {
					function a(b, c) {
						return new a.fn.init(b, c)
					}
					d.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(e, f) {
						return f && f instanceof d && !(f instanceof a) && (f = a(f)), d.fn.init.call(this, e, f, c)
					}, a.fn.init.prototype = a.fn;
					var c = a(b);
					return a
				},
				browser: {}
			}), d.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
				I["[object " + b + "]"] = b.toLowerCase()
			}), z = d.uaMatch(y), z.browser && (d.browser[z.browser] = !0, d.browser.version = z.version), d.browser.webkit && (d.browser.safari = !0), i.test(" ") && (j = /^[\s\xA0]+/, k = /[\s\xA0]+$/), g = d(b), b.addEventListener ? B = function() {
				b.removeEventListener("DOMContentLoaded", B, !1), d.ready()
			} : b.attachEvent && (B = function() {
				b.readyState === "complete" && (b.detachEvent("onreadystatechange", B), d.ready())
			}), typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
				return d
			}), d
		}(),
		f = {};
	e.Callbacks = function(a) {
		a = a ? f[a] || g(a) : {};
		var b = [],
			c = [],
			d, h, i, j, k, l = function(c) {
				var d, f, g, h, i;
				for(d = 0, f = c.length; d < f; d++) g = c[d], h = e.type(g), h === "array" ? l(g) : h === "function" && (!a.unique || !n.has(g)) && b.push(g)
			},
			m = function(e, f) {
				f = f || [], d = !a.memory || [e, f], h = !0, k = i || 0, i = 0, j = b.length;
				for(; b && k < j; k++) if(b[k].apply(e, f) === !1 && a.stopOnFalse) {
					d = !0;
					break
				}
				h = !1, b && (a.once ? d === !0 ? n.disable() : b = [] : c && c.length && (d = c.shift(), n.fireWith(d[0], d[1])))
			},
			n = {
				add: function() {
					if(b) {
						var a = b.length;
						l(arguments), h ? j = b.length : d && d !== !0 && (i = a, m(d[0], d[1]))
					}
					return this
				},
				remove: function() {
					if(b) {
						var c = arguments,
							d = 0,
							e = c.length;
						for(; d < e; d++) for(var f = 0; f < b.length; f++) if(c[d] === b[f]) {
							h && f <= j && (j--, f <= k && k--), b.splice(f--, 1);
							if(a.unique) break
						}
					}
					return this
				},
				has: function(a) {
					if(b) {
						var c = 0,
							d = b.length;
						for(; c < d; c++) if(a === b[c]) return !0
					}
					return !1
				},
				empty: function() {
					return b = [], this
				},
				disable: function() {
					return b = c = d = undefined, this
				},
				disabled: function() {
					return !b
				},
				lock: function() {
					return c = undefined, (!d || d === !0) && n.disable(), this
				},
				locked: function() {
					return !c
				},
				fireWith: function(b, e) {
					return c && (h ? a.once || c.push([b, e]) : (!a.once || !d) && m(b, e)), this
				},
				fire: function() {
					return n.fireWith(this, arguments), this
				},
				fired: function() {
					return !!d
				}
			};
		return n
	};
	var h = [].slice;
	e.extend({
		Deferred: function(a) {
			var b = e.Callbacks("once memory"),
				c = e.Callbacks("once memory"),
				d = e.Callbacks("memory"),
				f = "pending",
				g = {
					resolve: b,
					reject: c,
					notify: d
				},
				h = {
					done: b.add,
					fail: c.add,
					progress: d.add,
					state: function() {
						return f
					},
					isResolved: b.fired,
					isRejected: c.fired,
					then: function(a, b, c) {
						return i.done(a).fail(b).progress(c), this
					},
					always: function() {
						return i.done.apply(i, arguments).fail.apply(i, arguments)
					},
					pipe: function(a, b, c) {
						return e.Deferred(function(d) {
							e.each({
								done: [a, "resolve"],
								fail: [b, "reject"],
								progress: [c, "notify"]
							}, function(a, b) {
								var c = b[0],
									f = b[1],
									g;
								e.isFunction(c) ? i[a](function() {
									g = c.apply(this, arguments), g && e.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === i ? d : this, [g])
								}) : i[a](d[f])
							})
						}).promise()
					},
					promise: function(a) {
						if(a == null) a = h;
						else for(var b in h) a[b] = h[b];
						return a
					}
				},
				i = h.promise({}),
				j;
			for(j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
			return i.done(function() {
				f = "resolved"
			}, c.disable, d.lock).fail(function() {
				f = "rejected"
			}, b.disable, d.lock), a && a.call(i, i), i
		},
		when: function(a) {
			function l(a) {
				return function(c) {
					b[a] = arguments.length > 1 ? h.call(arguments, 0) : c, --g || j.resolveWith(j, b)
				}
			}
			function m(a) {
				return function(b) {
					f[a] = arguments.length > 1 ? h.call(arguments, 0) : b, j.notifyWith(k, f)
				}
			}
			var b = h.call(arguments, 0),
				c = 0,
				d = b.length,
				f = new Array(d),
				g = d,
				i = d,
				j = d <= 1 && a && e.isFunction(a.promise) ? a : e.Deferred(),
				k = j.promise();
			if(d > 1) {
				for(; c < d; c++) b[c] && b[c].promise && e.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
				g || j.resolveWith(j, b)
			} else j !== a && j.resolveWith(j, d ? [a] : []);
			return k
		}
	}), e.support = function() {
		var a = b.createElement("div"),
			c = b.documentElement,
			d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
		a.setAttribute("className", "t"), a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>", d = a.getElementsByTagName("*"), f = a.getElementsByTagName("a")[0];
		if(!d || !d.length || !f) return {};
		g = b.createElement("select"), h = g.appendChild(b.createElement("option")), i = a.getElementsByTagName("input")[0], k = {
			leadingWhitespace: a.firstChild.nodeType === 3,
			tbody: !a.getElementsByTagName("tbody").length,
			htmlSerialize: !! a.getElementsByTagName("link").length,
			style: /top/.test(f.getAttribute("style")),
			hrefNormalized: f.getAttribute("href") === "/a",
			opacity: /^0.55/.test(f.style.opacity),
			cssFloat: !! f.style.cssFloat,
			unknownElems: !! a.getElementsByTagName("nav").length,
			checkOn: i.value === "on",
			optSelected: h.selected,
			getSetAttribute: a.className !== "t",
			enctype: !! b.createElement("form").enctype,
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0
		}, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
		try {
			delete a.test
		} catch(v) {
			k.deleteExpando = !1
		}!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function() {
			k.noCloneEvent = !1
		}), a.cloneNode(!0).fireEvent("onclick")), i = b.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), k.radioValue = i.value === "t", i.setAttribute("checked", "checked"), a.appendChild(i), l = b.createDocumentFragment(), l.appendChild(a.lastChild), k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style.width = a.style.paddingLeft = "1px", m = b.getElementsByTagName("body")[0], o = b.createElement(m ? "div" : "body"), p = {
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0,
			background: "none"
		}, m && e.extend(p, {
			position: "absolute",
			left: "-999px",
			top: "-999px"
		});
		for(t in p) o.style[t] = p[t];
		o.appendChild(a), n = m || c, n.insertBefore(o, n.firstChild), k.appendChecked = i.checked, k.boxModel = a.offsetWidth === 2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = a.offsetWidth !== 2), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a.getElementsByTagName("td"), u = q[0].offsetHeight === 0, q[0].style.display = "", q[1].style.display = "none", k.reliableHiddenOffsets = u && q[0].offsetHeight === 0, a.innerHTML = "", b.defaultView && b.defaultView.getComputedStyle && (j = b.createElement("div"), j.style.width = "0", j.style.marginRight = "0", a.appendChild(j), k.reliableMarginRight = (parseInt((b.defaultView.getComputedStyle(j, null) || {
			marginRight: 0
		}).marginRight, 10) || 0) === 0);
		if(a.attachEvent) for(t in {
			submit: 1,
			change: 1,
			focusin: 1
		}) s = "on" + t, u = s in a, u || (a.setAttribute(s, "return;"), u = typeof a[s] == "function"), k[t + "Bubbles"] = u;
		return e(function() {
			var a, c, d, f, g, h, i = 1,
				j = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
				l = "visibility:hidden;border:0;",
				n = "style='" + j + "border:5px solid #000;padding:0;'",
				p = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>";
			m = b.getElementsByTagName("body")[0];
			if(!m) return;
			a = b.createElement("div"), a.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + i + "px", m.insertBefore(a, m.firstChild), o = b.createElement("div"), o.style.cssText = j + l, o.innerHTML = p, a.appendChild(o), c = o.firstChild, d = c.firstChild, g = c.nextSibling.firstChild.firstChild, h = {
				doesNotAddBorder: d.offsetTop !== 5,
				doesAddBorderForTableAndCells: g.offsetTop === 5
			}, d.style.position = "fixed", d.style.top = "20px", h.fixedPosition = d.offsetTop === 20 || d.offsetTop === 15, d.style.position = d.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", h.subtractsBorderForOverflowNotVisible = d.offsetTop === -5, h.doesNotIncludeMarginInBodyOffset = m.offsetTop !== i, m.removeChild(a), o = a = null, e.extend(k, h)
		}), o.innerHTML = "", n.removeChild(o), o = l = g = h = m = j = a = i = null, k
	}(), e.boxModel = e.support.boxModel;
	var i = /^(?:\{.*\}|\[.*\])$/,
		j = /([A-Z])/g;
	e.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(a) {
			return a = a.nodeType ? e.cache[a[e.expando]] : a[e.expando], !! a && !l(a)
		},
		data: function(a, b, c, d) {
			if(!e.acceptData(a)) return;
			var f, g, h, i = e.expando,
				j = typeof b == "string",
				k = a.nodeType,
				l = k ? e.cache : a,
				m = k ? a[e.expando] : a[e.expando] && e.expando,
				n = b === "events";
			if((!m || !l[m] || !n && !d && !l[m].data) && j && c === undefined) return;
			m || (k ? a[e.expando] = m = ++e.uuid : m = e.expando), l[m] || (l[m] = {}, k || (l[m].toJSON = e.noop));
			if(typeof b == "object" || typeof b == "function") d ? l[m] = e.extend(l[m], b) : l[m].data = e.extend(l[m].data, b);
			return f = g = l[m], d || (g.data || (g.data = {}), g = g.data), c !== undefined && (g[e.camelCase(b)] = c), n && !g[b] ? f.events : (j ? (h = g[b], h == null && (h = g[e.camelCase(b)])) : h = g, h)
		},
		removeData: function(a, b, c) {
			if(!e.acceptData(a)) return;
			var d, f, g, h = e.expando,
				i = a.nodeType,
				j = i ? e.cache : a,
				k = i ? a[e.expando] : e.expando;
			if(!j[k]) return;
			if(b) {
				d = c ? j[k] : j[k].data;
				if(d) {
					e.isArray(b) ? b = b : b in d ? b = [b] : (b = e.camelCase(b), b in d ? b = [b] : b = b.split(" "));
					for(f = 0, g = b.length; f < g; f++) delete d[b[f]];
					if(!(c ? l : e.isEmptyObject)(d)) return
				}
			}
			if(!c) {
				delete j[k].data;
				if(!l(j[k])) return
			}
			e.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (e.support.deleteExpando ? delete a[e.expando] : a.removeAttribute ? a.removeAttribute(e.expando) : a[e.expando] = null)
		},
		_data: function(a, b, c) {
			return e.data(a, b, c, !0)
		},
		acceptData: function(a) {
			if(a.nodeName) {
				var b = e.noData[a.nodeName.toLowerCase()];
				if(b) return b !== !0 && a.getAttribute("classid") === b
			}
			return !0
		}
	}), e.fn.extend({
		data: function(a, b) {
			var c, d, f, g = null;
			if(typeof a == "undefined") {
				if(this.length) {
					g = e.data(this[0]);
					if(this[0].nodeType === 1 && !e._data(this[0], "parsedAttrs")) {
						d = this[0].attributes;
						for(var h = 0, i = d.length; h < i; h++) f = d[h].name, f.indexOf("data-") === 0 && (f = e.camelCase(f.substring(5)), k(this[0], f, g[f]));
						e._data(this[0], "parsedAttrs", !0)
					}
				}
				return g
			}
			return typeof a == "object" ? this.each(function() {
				e.data(this, a)
			}) : (c = a.split("."), c[1] = c[1] ? "." + c[1] : "", b === undefined ? (g = this.triggerHandler("getData" + c[1] + "!", [c[0]]), g === undefined && this.length && (g = e.data(this[0], a), g = k(this[0], a, g)), g === undefined && c[1] ? this.data(c[0]) : g) : this.each(function() {
				var d = e(this),
					f = [c[0], b];
				d.triggerHandler("setData" + c[1] + "!", f), e.data(this, a, b), d.triggerHandler("changeData" + c[1] + "!", f)
			}))
		},
		removeData: function(a) {
			return this.each(function() {
				e.removeData(this, a)
			})
		}
	}), e.extend({
		_mark: function(a, b) {
			a && (b = (b || "fx") + "mark", e._data(a, b, (e._data(a, b) || 0) + 1))
		},
		_unmark: function(a, b, c) {
			a !== !0 && (c = b, b = a, a = !1);
			if(b) {
				c = c || "fx";
				var d = c + "mark",
					f = a ? 0 : (e._data(b, d) || 1) - 1;
				f ? e._data(b, d, f) : (e.removeData(b, d, !0), m(b, c, "mark"))
			}
		},
		queue: function(a, b, c) {
			var d;
			if(a) return b = (b || "fx") + "queue", d = e._data(a, b), c && (!d || e.isArray(c) ? d = e._data(a, b, e.makeArray(c)) : d.push(c)), d || []
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = e.queue(a, b),
				d = c.shift(),
				f = {};
			d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), e._data(a, b + ".run", f), d.call(a, function() {
				e.dequeue(a, b)
			}, f)), c.length || (e.removeData(a, b + "queue " + b + ".run", !0), m(a, b, "queue"))
		}
	}), e.fn.extend({
		queue: function(a, b) {
			return typeof a != "string" && (b = a, a = "fx"), b === undefined ? e.queue(this[0], a) : this.each(function() {
				var c = e.queue(this, a, b);
				a === "fx" && c[0] !== "inprogress" && e.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				e.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			return a = e.fx ? e.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, b) {
			function l() {
				--g || c.resolveWith(d, [d])
			}
			typeof a != "string" && (b = a, a = undefined), a = a || "fx";
			var c = e.Deferred(),
				d = this,
				f = d.length,
				g = 1,
				h = a + "defer",
				i = a + "queue",
				j = a + "mark",
				k;
			while(f--) if(k = e.data(d[f], h, undefined, !0) || (e.data(d[f], i, undefined, !0) || e.data(d[f], j, undefined, !0)) && e.data(d[f], h, e.Callbacks("once memory"), !0)) g++, k.add(l);
			return l(), c.promise()
		}
	});
	var n = /[\n\t\r]/g,
		o = /\s+/,
		p = /\r/g,
		q = /^(?:button|input)$/i,
		r = /^(?:button|input|object|select|textarea)$/i,
		s = /^a(?:rea)?$/i,
		t = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		u = e.support.getSetAttribute,
		v, w, x;
	e.fn.extend({
		attr: function(a, b) {
			return e.access(this, a, b, !0, e.attr)
		},
		removeAttr: function(a) {
			return this.each(function() {
				e.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return e.access(this, a, b, !0, e.prop)
		},
		removeProp: function(a) {
			return a = e.propFix[a] || a, this.each(function() {
				try {
					this[a] = undefined, delete this[a]
				} catch(b) {}
			})
		},
		addClass: function(a) {
			var b, c, d, f, g, h, i;
			if(e.isFunction(a)) return this.each(function(b) {
				e(this).addClass(a.call(this, b, this.className))
			});
			if(a && typeof a == "string") {
				b = a.split(o);
				for(c = 0, d = this.length; c < d; c++) {
					f = this[c];
					if(f.nodeType === 1) if(!f.className && b.length === 1) f.className = a;
					else {
						g = " " + f.className + " ";
						for(h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
						f.className = e.trim(g)
					}
				}
			}
			return this
		},
		removeClass: function(a) {
			var b, c, d, f, g, h, i;
			if(e.isFunction(a)) return this.each(function(b) {
				e(this).removeClass(a.call(this, b, this.className))
			});
			if(a && typeof a == "string" || a === undefined) {
				b = (a || "").split(o);
				for(c = 0, d = this.length; c < d; c++) {
					f = this[c];
					if(f.nodeType === 1 && f.className) if(a) {
						g = (" " + f.className + " ").replace(n, " ");
						for(h = 0, i = b.length; h < i; h++) g = g.replace(" " + b[h] + " ", " ");
						f.className = e.trim(g)
					} else f.className = ""
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
				d = typeof b == "boolean";
			return e.isFunction(a) ? this.each(function(c) {
				e(this).toggleClass(a.call(this, c, this.className, b), b)
			}) : this.each(function() {
				if(c === "string") {
					var f, g = 0,
						h = e(this),
						i = b,
						j = a.split(o);
					while(f = j[g++]) i = d ? i : !h.hasClass(f), h[i ? "addClass" : "removeClass"](f)
				} else if(c === "undefined" || c === "boolean") this.className && e._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : e._data(this, "__className__") || ""
			})
		},
		hasClass: function(a) {
			var b = " " + a + " ",
				c = 0,
				d = this.length;
			for(; c < d; c++) if(this[c].nodeType === 1 && (" " + this[c].className + " ").replace(n, " ").indexOf(b) > -1) return !0;
			return !1
		},
		val: function(a) {
			var b, c, d, f = this[0];
			if(!arguments.length) return f ? (b = e.valHooks[f.nodeName.toLowerCase()] || e.valHooks[f.type], b && "get" in b && (c = b.get(f, "value")) !== undefined ? c : (c = f.value, typeof c == "string" ? c.replace(p, "") : c == null ? "" : c)) : undefined;
			return d = e.isFunction(a), this.each(function(c) {
				var f = e(this),
					g;
				if(this.nodeType !== 1) return;
				d ? g = a.call(this, c, f.val()) : g = a, g == null ? g = "" : typeof g == "number" ? g += "" : e.isArray(g) && (g = e.map(g, function(a) {
					return a == null ? "" : a + ""
				})), b = e.valHooks[this.nodeName.toLowerCase()] || e.valHooks[this.type];
				if(!b || !("set" in b) || b.set(this, g, "value") === undefined) this.value = g
			})
		}
	}), e.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.
					value;
					return !b || b.specified ? a.value : a.text
				}
			},
			select: {
				get: function(a) {
					var b, c, d, f, g = a.selectedIndex,
						h = [],
						i = a.options,
						j = a.type === "select-one";
					if(g < 0) return null;
					c = j ? g : 0, d = j ? g + 1 : i.length;
					for(; c < d; c++) {
						f = i[c];
						if(f.selected && (e.support.optDisabled ? !f.disabled : f.getAttribute("disabled") === null) && (!f.parentNode.disabled || !e.nodeName(f.parentNode, "optgroup"))) {
							b = e(f).val();
							if(j) return b;
							h.push(b)
						}
					}
					return j && !h.length && i.length ? e(i[g]).val() : h
				},
				set: function(a, b) {
					var c = e.makeArray(b);
					return e(a).find("option").each(function() {
						this.selected = e.inArray(e(this).val(), c) >= 0
					}), c.length || (a.selectedIndex = -1), c
				}
			}
		},
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attr: function(a, b, c, d) {
			var f, g, h, i = a.nodeType;
			return !a || i === 3 || i === 8 || i === 2 ? undefined : d && b in e.attrFn ? e(a)[b](c) : "getAttribute" in a ? (h = i !== 1 || !e.isXMLDoc(a), h && (b = b.toLowerCase(), g = e.attrHooks[b] || (t.test(b) ? w : v)), c !== undefined ? c === null ? (e.removeAttr(a, b), undefined) : g && "set" in g && h && (f = g.set(a, c, b)) !== undefined ? f : (a.setAttribute(b, "" + c), c) : g && "get" in g && h && (f = g.get(a, b)) !== null ? f : (f = a.getAttribute(b), f === null ? undefined : f)) : e.prop(a, b, c)
		},
		removeAttr: function(a, b) {
			var c, d, f, g, h = 0;
			if(a.nodeType === 1) {
				d = (b || "").split(o), g = d.length;
				for(; h < g; h++) f = d[h].toLowerCase(), c = e.propFix[f] || f, e.attr(a, f, ""), a.removeAttribute(u ? f : c), t.test(f) && c in a && (a[c] = !1)
			}
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if(q.test(a.nodeName) && a.parentNode) e.error("type property can't be changed");
					else if(!e.support.radioValue && b === "radio" && e.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			},
			value: {
				get: function(a, b) {
					return v && e.nodeName(a, "button") ? v.get(a, b) : b in a ? a.value : null
				},
				set: function(a, b, c) {
					if(v && e.nodeName(a, "button")) return v.set(a, b, c);
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
		prop: function(a, b, c) {
			var d, f, g, h = a.nodeType;
			return !a || h === 3 || h === 8 || h === 2 ? undefined : (g = h !== 1 || !e.isXMLDoc(a), g && (b = e.propFix[b] || b, f = e.propHooks[b]), c !== undefined ? f && "set" in f && (d = f.set(a, c, b)) !== undefined ? d : a[b] = c : f && "get" in f && (d = f.get(a, b)) !== null ? d : a[b])
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var b = a.getAttributeNode("tabindex");
					return b && b.specified ? parseInt(b.value, 10) : r.test(a.nodeName) || s.test(a.nodeName) && a.href ? 0 : undefined
				}
			}
		}
	}), e.attrHooks.tabindex = e.propHooks.tabIndex, w = {
		get: function(a, b) {
			var c, d = e.prop(a, b);
			return d === !0 || typeof d != "boolean" && (c = a.getAttributeNode(b)) && c.nodeValue !== !1 ? b.toLowerCase() : undefined
		},
		set: function(a, b, c) {
			var d;
			return b === !1 ? e.removeAttr(a, c) : (d = e.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
		}
	}, u || (x = {
		name: !0,
		id: !0
	}, v = e.valHooks.button = {
		get: function(a, b) {
			var c;
			return c = a.getAttributeNode(b), c && (x[b] ? c.nodeValue !== "" : c.specified) ? c.nodeValue : undefined
		},
		set: function(a, c, d) {
			var e = a.getAttributeNode(d);
			return e || (e = b.createAttribute(d), a.setAttributeNode(e)), e.nodeValue = c + ""
		}
	}, e.attrHooks.tabindex.set = v.set, e.each(["width", "height"], function(a, b) {
		e.attrHooks[b] = e.extend(e.attrHooks[b], {
			set: function(a, c) {
				if(c === "") return a.setAttribute(b, "auto"), c
			}
		})
	}), e.attrHooks.contenteditable = {
		get: v.get,
		set: function(a, b, c) {
			b === "" && (b = "false"), v.set(a, b, c)
		}
	}), e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function(a, b) {
		e.attrHooks[b] = e.extend(e.attrHooks[b], {
			get: function(a) {
				var c = a.getAttribute(b, 2);
				return c === null ? undefined : c
			}
		})
	}), e.support.style || (e.attrHooks.style = {
		get: function(a) {
			return a.style.cssText.toLowerCase() || undefined
		},
		set: function(a, b) {
			return a.style.cssText = "" + b
		}
	}), e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
		get: function(a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	})), e.support.enctype || (e.propFix.enctype = "encoding"), e.support.checkOn || e.each(["radio", "checkbox"], function() {
		e.valHooks[this] = {
			get: function(a) {
				return a.getAttribute("value") === null ? "on" : a.value
			}
		}
	}), e.each(["radio", "checkbox"], function() {
		e.valHooks[this] = e.extend(e.valHooks[this], {
			set: function(a, b) {
				if(e.isArray(b)) return a.checked = e.inArray(e(a).val(), b) >= 0
			}
		})
	});
	var y = /\.(.*)$/,
		z = /^(?:textarea|input|select)$/i,
		A = /\./g,
		B = / /g,
		C = /[^\w\s.|`]/g,
		D = /^([^\.]*)?(?:\.(.+))?$/,
		E = /\bhover(\.\S+)?/,
		F = /^key/,
		G = /^(?:mouse|contextmenu)|click/,
		H = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
		I = function(a) {
			var b = H.exec(a);
			return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b
		},
		J = function(a, b) {
			return(!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || a.id === b[2]) && (!b[3] || b[3].test(a.className))
		},
		K = function(a) {
			return e.event.special.hover ? a : a.replace(E, "mouseenter$1 mouseleave$1")
		};
	e.event = {
		add: function(a, b, c, d, f) {
			var g, h, i, j, k, l, m, n, o, p, q, r;
			if(a.nodeType === 3 || a.nodeType === 8 || !b || !c || !(g = e._data(a))) return;
			c.handler && (o = c, c = o.handler), c.guid || (c.guid = e.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
				return typeof e == "undefined" || !! a && e.event.triggered === a.type ? undefined : e.event.dispatch.apply(h.elem, arguments)
			}, h.elem = a), b = K(b).split(" ");
			for(j = 0; j < b.length; j++) {
				k = D.exec(b[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = e.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = e.event.special[l] || {}, n = e.extend({
					type: l,
					origType: k[1],
					data: d,
					handler: c,
					guid: c.guid,
					selector: f,
					namespace: m.join(".")
				}, o), f && (n.quick = I(f), !n.quick && e.expr.match.POS.test(f) && (n.isPositional = !0)), q = i[l];
				if(!q) {
					q = i[l] = [], q.delegateCount = 0;
					if(!r.setup || r.setup.call(a, d, m, h) === !1) a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
				}
				r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = c.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), e.event.global[l] = !0
			}
			a = null
		},
		global: {},
		remove: function(a, b, c, d) {
			var f = e.hasData(a) && e._data(a),
				g, h, i, j, k, l, m, n, o, p, q;
			if(!f || !(m = f.events)) return;
			b = K(b || "").split(" ");
			for(g = 0; g < b.length; g++) {
				h = D.exec(b[g]) || [], i = h[1], j = h[2];
				if(!i) {
					j = j ? "." + j : "";
					for(l in m) e.event.remove(a, l + j, c, d);
					return
				}
				n = e.event.special[i] || {}, i = (d ? n.delegateType : n.bindType) || i, p = m[i] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
				if(c || j || d || n.remove) for(l = 0; l < p.length; l++) {
					q = p[l];
					if(!c || c.guid === q.guid) if(!j || j.test(q.namespace)) if(!d || d === q.selector || d === "**" && q.selector) p.splice(l--, 1), q.selector && p.delegateCount--, n.remove && n.remove.call(a, q)
				} else p.length = 0;
				p.length === 0 && k !== p.length && ((!n.teardown || n.teardown.call(a, j) === !1) && e.removeEvent(a, i, f.handle), delete m[i])
			}
			e.isEmptyObject(m) && (o = f.handle, o && (o.elem = null), e.removeData(a, ["events", "handle"], !0))
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(b, c, d, f) {
			if(!d || d.nodeType !== 3 && d.nodeType !== 8) {
				var g = b.type || b,
					h = [],
					i, j, k, l, m, n, o, p, q, r;
				g.indexOf("!") >= 0 && (g = g.slice(0, -1), j = !0), g.indexOf(".") >= 0 && (h = g.split("."), g = h.shift(), h.sort());
				if((!d || e.event.customEvent[g]) && !e.event.global[g]) return;
				b = typeof b == "object" ? b[e.expando] ? b : new e.Event(g, b) : new e.Event(g), b.type = g, b.isTrigger = !0, b.exclusive = j, b.namespace = h.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, n = g.indexOf(":") < 0 ? "on" + g : "", (f || !d) && b.preventDefault();
				if(!d) {
					i = e.cache;
					for(k in i) i[k].events && i[k].events[g] && e.event.trigger(b, c, i[k].handle.elem, !0);
					return
				}
				b.result = undefined, b.target || (b.target = d), c = c != null ? e.makeArray(c) : [], c.unshift(b), o = e.event.special[g] || {};
				if(o.trigger && o.trigger.apply(d, c) === !1) return;
				q = [
					[d, o.bindType || g]
				];
				if(!f && !o.noBubble && !e.isWindow(d)) {
					r = o.delegateType || g, m = null;
					for(l = d.parentNode; l; l = l.parentNode) q.push([l, r]), m = l;
					m && m === d.ownerDocument && q.push([m.defaultView || m.parentWindow || a, r])
				}
				for(k = 0; k < q.length; k++) {
					l = q[k][0], b.type = q[k][1], p = (e._data(l, "events") || {})[b.type] && e._data(l, "handle"), p && p.apply(l, c), p = n && l[n], p && e.acceptData(l) && p.apply(l, c);
					if(b.isPropagationStopped()) break
				}
				return b.type = g, b.isDefaultPrevented() || (!o._default || o._default.apply(d.ownerDocument, c) === !1) && (g !== "click" || !e.nodeName(d, "a")) && e.acceptData(d) && n && d[g] && (g !== "focus" && g !== "blur" || b.target.offsetWidth !== 0) && !e.isWindow(d) && (m = d[n], m && (d[n] = null), e.event.triggered = g, d[g](), e.event.triggered = undefined, m && (d[n] = m)), b.result
			}
			return
		},
		dispatch: function(b) {
			b = e.event.fix(b || a.event);
			var c = (e._data(this, "events") || {})[b.type] || [],
				d = c.delegateCount,
				f = [].slice.call(arguments, 0),
				g = !b.exclusive && !b.namespace,
				h = (e.event.special[b.type] || {}).handle,
				i = [],
				j, k, l, m, n, o, p, q, r, s, t;
			f[0] = b, b.delegateTarget = this;
			if(d && !b.target.disabled && (!b.button || b.type !== "click")) for(l = b.target; l != this; l = l.parentNode || this) {
				n = {}, p = [];
				for(j = 0; j < d; j++) q = c[j], r = q.selector, s = n[r], q.isPositional ? s = (s || (n[r] = e(r))).index(l) >= 0 : s === undefined && (s = n[r] = q.quick ? J(l, q.quick) : e(l).is(r)), s && p.push(q);
				p.length && i.push({
					elem: l,
					matches: p
				})
			}
			c.length > d && i.push({
				elem: this,
				matches: c.slice(d)
			});
			for(j = 0; j < i.length && !b.isPropagationStopped(); j++) {
				o = i[j], b.currentTarget = o.elem;
				for(k = 0; k < o.matches.length && !b.isImmediatePropagationStopped(); k++) {
					q = o.matches[k];
					if(g || !b.namespace && !q.namespace || b.namespace_re && b.namespace_re.test(q.namespace)) b.data = q.data, b.handleObj = q, func = h || q.handler, m = func.apply(o.elem, f), m !== undefined && (b.result = m, m === !1 && (b.preventDefault(), b.stopPropagation()))
				}
			}
			return b.result
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),
			filter: function(a, c) {
				var d, e, f, g = c.button,
					h = c.fromElement;
				return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || b, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== undefined && (a.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0), a
			}
		},
		fix: function(a) {
			if(a[e.expando]) return a;
			var c, d, f = a,
				g = e.event.fixHooks[a.type] || {},
				h = g.props ? this.props.concat(g.props) : this.props;
			a = e.Event(f);
			for(c = h.length; c;) d = h[--c], a[d] = f[d];
			return a.target || (a.target = f.srcElement || b), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === undefined && (a.metaKey = a.ctrlKey), g.filter ? g.filter(a, f) : a
		},
		special: {
			ready: {
				setup: e.bindReady
			},
			focus: {
				delegateType: "focusin",
				noBubble: !0
			},
			blur: {
				delegateType: "focusout",
				noBubble: !0
			},
			beforeunload: {
				setup: function(a, b, c) {
					e.isWindow(this) && (this.onbeforeunload = c)
				},
				teardown: function(a, b) {
					this.onbeforeunload === b && (this.onbeforeunload = null)
				}
			}
		},
		simulate: function(a, b, c, d) {
			var f = e.extend(new e.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? e.event.trigger(f, null, b) : e.event.dispatch.call(b, f), f.isDefaultPrevented() && c.preventDefault()
		}
	}, e.event.handle = e.event.dispatch, e.removeEvent = b.removeEventListener ?
	function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	} : function(a, b, c) {
		a.detachEvent && a.detachEvent("on" + b, c)
	}, e.Event = function(a, b) {
		if(!(this instanceof e.Event)) return new e.Event(a, b);
		a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? M : L) : this.type = a, b && e.extend(this, b), this.timeStamp = a && a.timeStamp || e.now(), this[e.expando] = !0
	}, e.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = M;
			var a = this.originalEvent;
			if(!a) return;
			a.preventDefault ? a.preventDefault() : a.returnValue = !1
		},
		stopPropagation: function() {
			this.isPropagationStopped = M;
			var a = this.originalEvent;
			if(!a) return;
			a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = M, this.stopPropagation()
		},
		isDefaultPrevented: L,
		isPropagationStopped: L,
		isImmediatePropagationStopped: L
	}, e.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b) {
		e.event.special[a] = e.event.special[b] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var b = this,
					c = a.relatedTarget,
					d = a.handleObj,
					f = d.selector,
					g, h;
				if(!c || d.origType === a.type || c !== b && !e.contains(b, c)) g = a.type, a.type = d.origType, func = d.handler, h = func.apply(this, arguments), a.type = g;
				return h
			}
		}
	}), e.support.submitBubbles || (e.event.special.submit = {
		setup: function() {
			if(e.nodeName(this, "form")) return !1;
			e.event.add(this, "click._submit keypress._submit", function(a) {
				var b = a.target,
					c = e.nodeName(b, "input") || e.nodeName(b, "button") ? b.form : undefined;
				c && !c._submit_attached && (e.event.add(c, "submit._submit", function(a) {
					this.parentNode && e.event.simulate("submit", this.parentNode, a, !0)
				}), c._submit_attached = !0)
			})
		},
		teardown: function() {
			if(e.nodeName(this, "form")) return !1;
			e.event.remove(this, "._submit")
		}
	}), e.support.changeBubbles || (e.event.special.change = {
		setup: function() {
			if(z.test(this.nodeName)) {
				if(this.type === "checkbox" || this.type === "radio") e.event.add(this, "propertychange._change", function(a) {
					a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
				}), e.event.add(this, "click._change", function(a) {
					this._just_changed && (this._just_changed = !1, e.event.simulate("change", this, a, !0))
				});
				return !1
			}
			e.event.add(this, "beforeactivate._change", function(a) {
				var b = a.target;
				z.test(b.nodeName) && !b._change_attached && (e.event.add(b, "change._change", function(a) {
					this.parentNode && !a.isSimulated && e.event.simulate("change", this.parentNode, a, !0)
				}), b._change_attached = !0)
			})
		},
		handle: function(a) {
			var b = a.target;
			if(this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return e.event.remove(this, "._change"), z.test(this.nodeName)
		}
	}), e.support.focusinBubbles || e.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, c) {
		var d = 0,
			f = function(a) {
				e.event.simulate(c, a.target, e.event.fix(a), !0)
			};
		e.event.special[c] = {
			setup: function() {
				d++ === 0 && b.addEventListener(a, f, !0)
			},
			teardown: function() {
				--d === 0 && b.removeEventListener(a, f, !0)
			}
		}
	}), e.fn.extend({
		on: function(a, b, c, d, f) {
			var g, h;
			if(typeof a == "object") {
				typeof b != "string" && (c = b, b = undefined);
				for(h in a) this.on(h, b, c, a[h], f);
				return this
			}
			c == null && d == null ? (d = b, c = b = undefined) : d == null && (typeof b == "string" ? (d = c, c = undefined) : (d = c, c = b, b = undefined));
			if(d === !1) d = L;
			else if(!d) return this;
			return f === 1 && (g = d, d = function(a) {
				return e().off(a), g.apply(this, arguments)
			}, d.guid = g.guid || (g.guid = e.guid++)), this.each(function() {
				e.event.add(this, a, d, c, b)
			})
		},
		one: function(a, b, c, d) {
			return this.on.call(this, a, b, c, d, 1)
		},
		off: function(a, b, c) {
			if(a && a.preventDefault && a.handleObj) {
				var d = a.handleObj;
				return e(a.delegateTarget).off(d.namespace ? d.type + "." + d.namespace : d.type, d.selector, d.handler), this
			}
			if(typeof a == "object") {
				for(var f in a) this.off(f, b, a[f]);
				return this
			}
			if(b === !1 || typeof b == "function") c = b, b = undefined;
			return c === !1 && (c = L), this.each(function() {
				e.event.remove(this, a, c, b)
			})
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		live: function(a, b, c) {
			return e(this.context).on(a, this.selector, b, c), this
		},
		die: function(a, b) {
			return e(this.context).off(a, this.selector || "**", b), this
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
		},
		trigger: function(a, b) {
			return this.each(function() {
				e.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if(this[0]) return e.event.trigger(a, b, this[0], !0)
		},
		toggle: function(a) {
			var b = arguments,
				c = a.guid || e.guid++,
				d = 0,
				f = function(c) {
					var f = (e._data(this, "lastToggle" + a.guid) || 0) % d;
					return e._data(this, "lastToggle" + a.guid, f + 1), c.preventDefault(), b[f].apply(this, arguments) || !1
				};
			f.guid = c;
			while(d < b.length) b[d++].guid = c;
			return this.click(f)
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	}), e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		e.fn[b] = function(a, c) {
			return c == null && (c = a, a = null), arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
		}, e.attrFn && (e.attrFn[b] = !0), F.test(b) && (e.event.fixHooks[b] = e.event.keyHooks), G.test(b) && (e.event.fixHooks[b] = e.event.mouseHooks)
	}), function() {
		function v(a, b, d, e, f, g) {
			for(var h = 0, i = e.length; h < i; h++) {
				var j = e[h];
				if(j) {
					var k = !1;
					j = j[a];
					while(j) {
						if(j[c] === d) {
							k = e[j.sizset];
							break
						}
						j.nodeType === 1 && !g && (j[c] = d, j.sizset = h);
						if(j.nodeName.toLowerCase() === b) {
							k = j;
							break
						}
						j = j[a]
					}
					e[h] = k
				}
			}
		}
		function w(a, b, d, e, f, g) {
			for(var h = 0, i = e.length; h < i; h++) {
				var j = e[h];
				if(j) {
					var k = !1;
					j = j[a];
					while(j) {
						if(j[c] === d) {
							k = e[j.sizset];
							break
						}
						if(j.nodeType === 1) {
							g || (j[c] = d, j.sizset = h);
							if(typeof b != "string") {
								if(j === b) {
									k = !0;
									break
								}
							} else if(l.filter(b, [j]).length > 0) {
								k = j;
								break
							}
						}
						j = j[a]
					}
					e[h] = k
				}
			}
		}
		var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			c = "sizcache" + (Math.random() + "").replace(".", ""),
			d = 0,
			f = Object.prototype.toString,
			g = !1,
			h = !0,
			i = /\\/g,
			j = /\r\n/g,
			k = /\W/;
		[0, 0].sort(function() {
			return h = !1, 0
		});
		var l = function(c, d, e, g) {
				e = e || [], d = d || b;
				var h = d;
				if(d.nodeType !== 1 && d.nodeType !== 9) return [];
				if(!c || typeof c != "string") return e;
				var i, j, k, m, p, q, s, t, u = !0,
					v = l.isXML(d),
					w = [],
					y = c;
				do {
					a.exec(""), i = a.exec(y);
					if(i) {
						y = i[3], w.push(i[1]);
						if(i[2]) {
							m = i[3];
							break
						}
					}
				} while (i);
				if(w.length > 1 && o.exec(c)) if(w.length === 2 && n.relative[w[0]]) j = x(w[0] + w[1], d, g);
				else {
					j = n.relative[w[0]] ? [d] : l(w.shift(), d);
					while(w.length) c = w.shift(), n.relative[c] && (c += w.shift()), j = x(c, j, g)
				} else {
					!g && w.length > 1 && d.nodeType === 9 && !v && n.match.ID.test(w[0]) && !n.match.ID.test(w[w.length - 1]) && (p = l.find(w.shift(), d, v), d = p.expr ? l.filter(p.expr, p.set)[0] : p.set[0]);
					if(d) {
						p = g ? {
							expr: w.pop(),
							set: r(g)
						} : l.find(w.pop(), w.length !== 1 || w[0] !== "~" && w[0] !== "+" || !d.parentNode ? d : d.parentNode, v), j = p.expr ? l.filter(p.expr, p.set) : p.set, w.length > 0 ? k = r(j) : u = !1;
						while(w.length) q = w.pop(), s = q, n.relative[q] ? s = w.pop() : q = "", s == null && (s = d), n.relative[q](k, s, v)
					} else k = w = []
				}
				k || (k = j), k || l.error(q || c);
				if(f.call(k) === "[object Array]") if(!u) e.push.apply(e, k);
				else if(d && d.nodeType === 1) for(t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && l.contains(d, k[t])) && e.push(j[t]);
				else for(t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
				else r(k, e);
				return m && (l(m, h, e, g), l.uniqueSort(e)), e
			};
		l.uniqueSort = function(a) {
			if(t) {
				g = h, a.sort(t);
				if(g) for(var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
			}
			return a
		}, l.matches = function(a, b) {
			return l(a, null, null, b)
		}, l.matchesSelector = function(a, b) {
			return l(b, null, null, [a]).length > 0
		}, l.find = function(a, b, c) {
			var d, e, f, g, h, j;
			if(!a) return [];
			for(e = 0, f = n.order.length; e < f; e++) {
				h = n.order[e];
				if(g = n.leftMatch[h].exec(a)) {
					j = g[1], g.splice(1, 1);
					if(j.substr(j.length - 1) !== "\\") {
						g[1] = (g[1] || "").replace(i, ""), d = n.find[h](g, b, c);
						if(d != null) {
							a = a.replace(n.match[h], "");
							break
						}
					}
				}
			}
			return d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []), {
				set: d,
				expr: a
			}
		}, l.filter = function(a, b, c, d) {
			var e, f, g, h, i, j, k, m, o, p = a,
				q = [],
				r = b,
				s = b && b[0] && l.isXML(b[0]);
			while(a && b.length) {
				for(g in n.filter) if((e = n.leftMatch[g].exec(a)) != null && e[2]) {
					j = n.filter[g], k = e[1], f = !1, e.splice(1, 1);
					if(k.substr(k.length - 1) === "\\") continue;
					r === q && (q = []);
					if(n.preFilter[g]) {
						e = n.preFilter[g](e, r, c, q, d, s);
						if(!e) f = h = !0;
						else if(e === !0) continue
					}
					if(e) for(m = 0;
					(i = r[m]) != null; m++) i && (h = j(i, e, m, r), o = d ^ h, c && h != null ? o ? f = !0 : r[m] = !1 : o && (q.push(i), f = !0));
					if(h !== undefined) {
						c || (r = q), a = a.replace(n.match[g], "");
						if(!f) return [];
						break
					}
				}
				if(a === p) {
					if(f != null) break;
					l.error(a)
				}
				p = a
			}
			return r
		}, l.error = function(a) {
			throw "Syntax error, unrecognized expression: " + a
		};
		var m = l.getText = function(a) {
				var b, c, d = a.nodeType,
					e = "";
				if(d) {
					if(d === 1) {
						if(typeof a.textContent == "string") return a.textContent;
						if(typeof a.innerText == "string") return a.innerText.replace(j, "");
						for(a = a.firstChild; a; a = a.nextSibling) e += m(a)
					} else if(d === 3 || d === 4) return a.nodeValue
				} else for(b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += m(c));
				return e
			},
			n = l.selectors = {
				order: ["ID", "NAME", "TAG"],
				match: {
					ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
					ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
					TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
					CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
					POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
					PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
				},
				leftMatch: {},
				attrMap: {
					"class": "className",
					"for": "htmlFor"
				},
				attrHandle: {
					href: function(a) {
						return a.getAttribute("href")
					},
					type: function(a) {
						return a.getAttribute("type")
					}
				},
				relative: {
					"+": function(a, b) {
						var c = typeof b == "string",
							d = c && !k.test(b),
							e = c && !d;
						d && (b = b.toLowerCase());
						for(var f = 0, g = a.length, h; f < g; f++) if(h = a[f]) {
							while((h = h.previousSibling) && h.nodeType !== 1);
							a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
						}
						e && l.filter(b, a, !0)
					},
					">": function(a, b) {
						var c, d = typeof b == "string",
							e = 0,
							f = a.length;
						if(d && !k.test(b)) {
							b = b.toLowerCase();
							for(; e < f; e++) {
								c = a[e];
								if(c) {
									var g = c.parentNode;
									a[e] = g.nodeName.toLowerCase() === b ? g : !1
								}
							}
						} else {
							for(; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
							d && l.filter(b, a, !0)
						}
					},
					"": function(a, b, c) {
						var e, f = d++,
							g = w;
						typeof b == "string" && !k.test(b) && (b = b.toLowerCase(), e = b, g = v), g("parentNode", b, f, a, e, c)
					},
					"~": function(a, b, c) {
						var e, f = d++,
							g = w;
						typeof b == "string" && !k.test(b) && (b = b.toLowerCase(), e = b, g = v), g("previousSibling", b, f, a, e, c)
					}
				},
				find: {
					ID: function(a, b, c) {
						if(typeof b.getElementById != "undefined" && !c) {
							var d = b.getElementById(a[1]);
							return d && d.parentNode ? [d] : []
						}
					},
					NAME: function(a, b) {
						if(typeof b.getElementsByName != "undefined") {
							var c = [],
								d = b.getElementsByName(a[1]);
							for(var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
							return c.length === 0 ? null : c
						}
					},
					TAG: function(a, b) {
						if(typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
					}
				},
				preFilter: {
					CLASS: function(a, b, c, d, e, f) {
						a = " " + a[1].replace(i, "") + " ";
						if(f) return a;
						for(var g = 0, h;
						(h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
						return !1
					},
					ID: function(a) {
						return a[1].replace(i, "")
					},
					TAG: function(a, b) {
						return a[1].replace(i, "").toLowerCase()
					},
					CHILD: function(a) {
						if(a[1] === "nth") {
							a[2] || l.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
							var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
							a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
						} else a[2] && l.error(a[0]);
						return a[0] = d++, a
					},
					ATTR: function(a, b, c, d, e, f) {
						var g = a[1] = a[1].replace(i, "");
						return !f && n.attrMap[g] && (a[1] = n.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(i, ""), a[2] === "~=" && (a[4] = " " + a[4] + " "), a
					},
					PSEUDO: function(b, c, d, e, f) {
						if(b[1] === "not") {
							if(!((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))) {
								var g = l.filter(b[3], c, d, !0 ^ f);
								return d || e.push.apply(e, g), !1
							}
							b[3] = l(b[3], null, null, c)
						} else if(n.match.POS.test(b[0]) || n.match.CHILD.test(b[0])) return !0;
						return b
					},
					POS: function(a) {
						return a.unshift(!0), a
					}
				},
				filters: {
					enabled: function(a) {
						return a.disabled === !1 && a.type !== "hidden"
					},
					disabled: function(a) {
						return a.disabled === !0
					},
					checked: function(a) {
						return a.checked === !0
					},
					selected: function(a) {
						return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
					},
					parent: function(a) {
						return !!a.firstChild
					},
					empty: function(a) {
						return !a.firstChild
					},
					has: function(a, b, c) {
						return !!l(c[3], a).length
					},
					header: function(a) {
						return /h\d/i.test(a.nodeName)
					},
					text: function(a) {
						var b = a.getAttribute("type"),
							c = a.type;
						return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
					},
					radio: function(a) {
						return a.nodeName.toLowerCase() === "input" && "radio" === a.type
					},
					checkbox: function(a) {
						return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
					},
					file: function(a) {
						return a.nodeName.toLowerCase() === "input" && "file" === a.type
					},
					password: function(a) {
						return a.nodeName.toLowerCase() === "input" && "password" === a.type
					},
					submit: function(a) {
						var b = a.nodeName.toLowerCase();
						return(b === "input" || b === "button") && "submit" === a.type
					},
					image: function(a) {
						return a.nodeName.toLowerCase() === "input" && "image" === a.type
					},
					reset: function(a) {
						var b = a.nodeName.toLowerCase();
						return(b === "input" || b === "button") && "reset" === a.type
					},
					button: function(a) {
						var b = a.nodeName.toLowerCase();
						return b === "input" && "button" === a.type || b === "button"
					},
					input: function(a) {
						return /input|select|textarea|button/i.test(a.nodeName)
					},
					focus: function(a) {
						return a === a.ownerDocument.activeElement
					}
				},
				setFilters: {
					first: function(a, b) {
						return b === 0
					},
					last: function(a, b, c, d) {
						return b === d.length - 1
					},
					even: function(a, b) {
						return b % 2 === 0
					},
					odd: function(a, b) {
						return b % 2 === 1
					},
					lt: function(a, b, c) {
						return b < c[3] - 0
					},
					gt: function(a, b, c) {
						return b > c[3] - 0
					},
					nth: function(a, b, c) {
						return c[3] - 0 === b
					},
					eq: function(a, b, c) {
						return c[3] - 0 === b
					}
				},
				filter: {
					PSEUDO: function(a, b, c, d) {
						var e = b[1],
							f = n.filters[e];
						if(f) return f(a, c, b, d);
						if(e === "contains") return(a.textContent || a.innerText || m([a]) || "").indexOf(b[3]) >= 0;
						if(e === "not") {
							var g = b[3];
							for(var h = 0, i = g.length; h < i; h++) if(g[h] === a) return !1;
							return !0
						}
						l.error(e)
					},
					CHILD: function(a, b) {
						var d, e, f, g, h, i, j, k = b[1],
							l = a;
						switch(k) {
						case "only":
						case "first":
							while(l = l.previousSibling) if(l.nodeType === 1) return !1;
							if(k === "first") return !0;
							l = a;
						case "last":
							while(l = l.nextSibling) if(l.nodeType === 1) return !1;
							return !0;
						case "nth":
							d = b[2], e = b[3];
							if(d === 1 && e === 0) return !0;
							f = b[0], g = a.parentNode;
							if(g && (g[c] !== f || !a.nodeIndex)) {
								i = 0;
								for(l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
								g[c] = f
							}
							return j = a.nodeIndex - e, d === 0 ? j === 0 : j % d === 0 && j / d >= 0
						}
					},
					ID: function(a, b) {
						return a.nodeType === 1 && a.getAttribute("id") === b
					},
					TAG: function(a, b) {
						return b === "*" && a.nodeType === 1 || !! a.nodeName && a.nodeName.toLowerCase() === b
					},
					CLASS: function(a, b) {
						return(" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
					},
					ATTR: function(a, b) {
						var c = b[1],
							d = l.attr ? l.attr(a, c) : n.attrHandle[c] ? n.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
							e = d + "",
							f = b[2],
							g = b[4];
						return d == null ? f === "!=" : !f && l.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
					},
					POS: function(a, b, c, d) {
						var e = b[2],
							f = n.setFilters[e];
						if(f) return f(a, c, b, d)
					}
				}
			},
			o = n.match.POS,
			p = function(a, b) {
				return "\\" + (b - 0 + 1)
			};
		for(var q in n.match) n.match[q] = new RegExp(n.match[q].source + /(?![^\[]*\])(?![^\(]*\))/.source), n.leftMatch[q] = new RegExp(/(^(?:.|\r|\n)*?)/.source + n.match[q].source.replace(/\\(\d+)/g, p));
		var r = function(a, b) {
				return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
			};
		try {
			Array.prototype.slice.call(b.documentElement.childNodes, 0)[0].nodeType
		} catch(s) {
			r = function(a, b) {
				var c = 0,
					d = b || [];
				if(f.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
				else if(typeof a.length == "number") for(var e = a.length; c < e; c++) d.push(a[c]);
				else for(; a[c]; c++) d.push(a[c]);
				return d
			}
		}
		var t, u;
		b.documentElement.compareDocumentPosition ? t = function(a, b) {
			return a === b ? (g = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
		} : (t = function(a, b) {
			if(a === b) return g = !0, 0;
			if(a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
			var c, d, e = [],
				f = [],
				h = a.parentNode,
				i = b.parentNode,
				j = h;
			if(h === i) return u(a, b);
			if(!h) return -1;
			if(!i) return 1;
			while(j) e.unshift(j), j = j.parentNode;
			j = i;
			while(j) f.unshift(j), j = j.parentNode;
			c = e.length, d = f.length;
			for(var k = 0; k < c && k < d; k++) if(e[k] !== f[k]) return u(e[k], f[k]);
			return k === c ? u(a, f[k], -1) : u(e[k], b, 1)
		}, u = function(a, b, c) {
			if(a === b) return c;
			var d = a.nextSibling;
			while(d) {
				if(d === b) return -1;
				d = d.nextSibling
			}
			return 1
		}), function() {
			var a = b.createElement("div"),
				c = "script" + (new Date).getTime(),
				d = b.documentElement;
			a.innerHTML = "<a name='" + c + "'/>", d.insertBefore(a, d.firstChild), b.getElementById(c) && (n.find.ID = function(a, b, c) {
				if(typeof b.getElementById != "undefined" && !c) {
					var d = b.getElementById(a[1]);
					return d ? d.id === a[1] || typeof d.getAttributeNode != "undefined" && d.getAttributeNode("id").nodeValue === a[1] ? [d] : undefined : []
				}
			}, n.filter.ID = function(a, b) {
				var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
				return a.nodeType === 1 && c && c.nodeValue === b
			}), d.removeChild(a), d = a = null
		}(), function() {
			var a = b.createElement("div");
			a.appendChild(b.createComment("")), a.getElementsByTagName("*").length > 0 && (n.find.TAG = function(a, b) {
				var c = b.getElementsByTagName(a[1]);
				if(a[1] === "*") {
					var d = [];
					for(var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
					c = d
				}
				return c
			}), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (n.attrHandle.href = function(a) {
				return a.getAttribute("href", 2)
			}), a = null
		}(), b.querySelectorAll &&
		function() {
			var a = l,
				c = b.createElement("div"),
				d = "__sizzle__";
			c.innerHTML = "<p class='TEST'></p>";
			if(c.querySelectorAll && c.querySelectorAll(".TEST").length === 0) return;
			l = function(c, e, f, g) {
				e = e || b;
				if(!g && !l.isXML(e)) {
					var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(c);
					if(h && (e.nodeType === 1 || e.nodeType === 9)) {
						if(h[1]) return r(e.getElementsByTagName(c), f);
						if(h[2] && n.find.CLASS && e.getElementsByClassName) return r(e.getElementsByClassName(h[2]), f)
					}
					if(e.nodeType === 9) {
						if(c === "body" && e.body) return r([e.body], f);
						if(h && h[3]) {
							var i = e.getElementById(h[3]);
							if(!i || !i.parentNode) return r([], f);
							if(i.id === h[3]) return r([i], f)
						}
						try {
							return r(e.querySelectorAll(c), f)
						} catch(j) {}
					} else if(e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
						var k = e,
							m = e.getAttribute("id"),
							o = m || d,
							p = e.parentNode,
							q = /^\s*[+~]/.test(c);
						m ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o), q && p && (e = e.parentNode);
						try {
							if(!q || p) return r(e.querySelectorAll("[id='" + o + "'] " + c), f)
						} catch(s) {} finally {
							m || k.removeAttribute("id")
						}
					}
				}
				return a(c, e, f, g)
			};
			for(var e in a) l[e] = a[e];
			c = null
		}(), function() {
			var a = b.documentElement,
				c = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
			if(c) {
				var d = !c.call(b.createElement("div"), "div"),
					e = !1;
				try {
					c.call(b.documentElement, "[test!='']:sizzle")
				} catch(f) {
					e = !0
				}
				l.matchesSelector = function(a, b) {
					b = b.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if(!l.isXML(a)) try {
						if(e || !n.match.PSEUDO.test(b) && !/!=/.test(b)) {
							var f = c.call(a, b);
							if(f || !d || a.document && a.document.nodeType !== 11) return f
						}
					} catch(g) {}
					return l(b, null, null, [a]).length > 0
				}
			}
		}(), function() {
			var a = b.createElement("div");
			a.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if(!a.getElementsByClassName || a.getElementsByClassName("e").length === 0) return;
			a.lastChild.className = "e";
			if(a.getElementsByClassName("e").length === 1) return;
			n.order.splice(1, 0, "CLASS"), n.find.CLASS = function(a, b, c) {
				if(typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
			}, a = null
		}(), b.documentElement.contains ? l.contains = function(a, b) {
			return a !== b && (a.contains ? a.contains(b) : !0)
		} : b.documentElement.compareDocumentPosition ? l.contains = function(a, b) {
			return !!(a.compareDocumentPosition(b) & 16)
		} : l.contains = function() {
			return !1
		}, l.isXML = function(a) {
			var b = (a ? a.ownerDocument || a : 0).documentElement;
			return b ? b.nodeName !== "HTML" : !1
		};
		var x = function(a, b, c) {
				var d, e = [],
					f = "",
					g = b.nodeType ? [b] : b;
				while(d = n.match.PSEUDO.exec(a)) f += d[0], a = a.replace(n.match.PSEUDO, "");
				a = n.relative[a] ? a + "*" : a;
				for(var h = 0, i = g.length; h < i; h++) l(a, g[h], e, c);
				return l.filter(f, e)
			};
		l.attr = e.attr, l.selectors.attrMap = {}, e.find = l, e.expr = l.selectors, e.expr[":"] = e.expr.filters, e.unique = l.uniqueSort, e.text = l.getText, e.isXMLDoc = l.isXML, e.contains = l.contains
	}();
	var N = /Until$/,
		O = /^(?:parents|prevUntil|prevAll)/,
		P = /,/,
		Q = /^.[^:#\[\.,]*$/,
		R = Array.prototype.slice,
		S = e.expr.match.POS,
		T = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	e.fn.extend({
		find: function(a) {
			var b = this,
				c, d;
			if(typeof a != "string") return e(a).filter(function() {
				for(c = 0, d = b.length; c < d; c++) if(e.contains(b[c], this)) return !0
			});
			var f = this.pushStack("", "find", a),
				g, h, i;
			for(c = 0, d = this.length; c < d; c++) {
				g = f.length, e.find(a, this[c], f);
				if(c > 0) for(h = g; h < f.length; h++) for(i = 0; i < g; i++) if(f[i] === f[h]) {
					f.splice(h--, 1);
					break
				}
			}
			return f
		},
		has: function(a) {
			var b = e(a);
			return this.filter(function() {
				for(var a = 0, c = b.length; a < c; a++) if(e.contains(this, b[a])) return !0
			})
		},
		not: function(a) {
			return this.pushStack(V(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(V(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !!a && (typeof a == "string" ? S.test(a) ? e(a, this.context).index(this[0]) >= 0 : e.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(a, b) {
			var c = [],
				d, f, g = this[0];
			if(e.isArray(a)) {
				var h = 1;
				while(g && g.ownerDocument && g !== b) {
					for(d = 0; d < a.length; d++) e(g).is(a[d]) && c.push({
						selector: a[d],
						elem: g,
						level: h
					});
					g = g.parentNode, h++
				}
				return c
			}
			var i = S.test(a) || typeof a != "string" ? e(a, b || this.context) : 0;
			for(d = 0, f = this.length; d < f; d++) {
				g = this[d];
				while(g) {
					if(i ? i.index(g) > -1 : e.find.matchesSelector(g, a)) {
						c.push(g);
						break
					}
					g = g.parentNode;
					if(!g || !g.ownerDocument || g === b || g.nodeType === 11) break
				}
			}
			return c = c.length > 1 ? e.unique(c) : c, this.pushStack(c, "closest", a)
		},
		index: function(a) {
			return a ? typeof a == "string" ? e.inArray(this[0], e(a)) : e.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function(a, b) {
			var c = typeof a == "string" ? e(a, b) : e.makeArray(a && a.nodeType ? [a] : a),
				d = e.merge(this.get(), c);
			return this.pushStack(U(c[0]) || U(d[0]) ? d : e.unique(d))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	}), e.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && b.nodeType !== 11 ? b : null
		},
		parents: function(a) {
			return e.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return e.dir(a, "parentNode", c)
		},
		next: function(a) {
			return e.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return e.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return e.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return e.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return e.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return e.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return e.sibling(a.parentNode.firstChild, a)
		},
		children: function(a) {
			return e.sibling(a.firstChild)
		},
		contents: function(a) {
			return e.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : e.makeArray(a.childNodes)
		}
	}, function(a, b) {
		e.fn[a] = function(c, d) {
			var f = e.map(this, b, c),
				g = R.call(arguments);
			return N.test(a) || (d = c), d && typeof d == "string" && (f = e.filter(d, f)), f = this.length > 1 && !T[a] ? e.unique(f) : f, (this.length > 1 || P.test(d)) && O.test(a) && (f = f.reverse()), this.pushStack(f, a, g.join(","))
		}
	}), e.extend({
		filter: function(a, b, c) {
			return c && (a = ":not(" + a + ")"), b.length === 1 ? e.find.matchesSelector(b[0], a) ? [b[0]] : [] : e.find.matches(a, b)
		},
		dir: function(a, b, c) {
			var d = [],
				f = a[b];
			while(f && f.nodeType !== 9 && (c === undefined || f.nodeType !== 1 || !e(f).is(c))) f.nodeType === 1 && d.push(f), f = f[b];
			return d
		},
		nth: function(a, b, c, d) {
			b = b || 1;
			var e = 0;
			for(; a; a = a[c]) if(a.nodeType === 1 && ++e === b) break;
			return a
		},
		sibling: function(a, b) {
			var c = [];
			for(; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
			return c
		}
	});
	var X = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
		Y = / jQuery\d+="(?:\d+|null)"/g,
		Z = /^\s+/,
		$ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		_ = /<([\w:]+)/,
		ab = /<tbody/i,
		bb = /<|&#?\w+;/,
		cb = /<(?:script|style)/i,
		db = /<(?:script|object|embed|option|style)/i,
		eb = new RegExp("<(?:" + X.replace(" ", "|") + ")", "i"),
		fb = /checked\s*(?:[^=]|=\s*.checked.)/i,
		gb = /\/(java|ecma)script/i,
		hb = /^\s*<!(?:\[CDATA\[|\-\-)/,
		ib = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		jb = W(b);
	ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td, e.support.htmlSerialize || (ib._default = [1, "div<div>", "</div>"]), e.fn.extend({
		text: function(a) {
			return e.isFunction(a) ? this.each(function(b) {
				var c = e(this);
				c.text(a.call(this, b, c.text()))
			}) : typeof a != "object" && a !== undefined ? this.empty().append((this[0] && this[0].ownerDocument || b).createTextNode(a)) : e.text(this)
		},
		wrapAll: function(a) {
			if(e.isFunction(a)) return this.each(function(b) {
				e(this).wrapAll(a.call(this, b))
			});
			if(this[0]) {
				var b = e(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
					var a = this;
					while(a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return e.isFunction(a) ? this.each(function(b) {
				e(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = e(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			return this.each(function() {
				e(this).wrapAll(a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if(this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this)
			});
			if(arguments.length) {
				var a = e(arguments[0]);
				return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
			}
		},
		after: function() {
			if(this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this.nextSibling)
			});
			if(arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				return a.push.apply(a, e(arguments[0]).toArray()), a
			}
		},
		remove: function(a, b) {
			for(var c = 0, d;
			(d = this[c]) != null; c++) if(!a || e.filter(a, [d]).length)!b && d.nodeType === 1 && (e.cleanData(d.getElementsByTagName("*")), e.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
			return this
		},
		empty: function() {
			for(var a = 0, b;
			(b = this[a]) != null; a++) {
				b.nodeType === 1 && e.cleanData(b.getElementsByTagName("*"));
				while(b.firstChild) b.removeChild(b.firstChild)
			}
			return this
		},
		clone: function(a, b) {
			return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function() {
				return e.clone(this, a, b)
			})
		},
		html: function(a) {
			if(a === undefined) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Y, "") : null;
			if(typeof a == "string" && !cb.test(a) && (e.support.leadingWhitespace || !Z.test(a)) && !ib[(_.exec(a) || ["", ""])[1].toLowerCase()]) {
				a = a.replace($, "<$1></$2>");
				try {
					for(var b = 0, c = this.length; b < c; b++) this[b].nodeType === 1 && (e.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a)
				} catch(d) {
					this.empty().append(a)
				}
			} else e.isFunction(a) ? this.each(function(b) {
				var c = e(this);
				c.html(a.call(this, b, c.html()))
			}) : this.empty().append(a);
			return this
		},
		replaceWith: function(a) {
			return this[0] && this[0].parentNode ? e.isFunction(a) ? this.each(function(b) {
				var c = e(this),
					d = c.html();
				c.replaceWith(a.call(this, b, d))
			}) : (typeof a != "string" && (a = e(a).detach()), this.each(function() {
				var b = this.nextSibling,
					c = this.parentNode;
				e(this).remove(), b ? e(b).before(a) : e(c).append(a)
			})) : this.length ? this.pushStack(e(e.isFunction(a) ? a() : a), "replaceWith", a) : this
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, b, c) {
			var d, f, g, h, i = a[0],
				j = [];
			if(!e.support.checkClone && arguments.length === 3 && typeof i == "string" && fb.test(i)) return this.each(function() {
				e(this).domManip(a, b, c, !0)
			});
			if(e.isFunction(i)) return this.each(function(d) {
				var f = e(this);
				a[0] = i.call(this, d, b ? f.html() : undefined), f.domManip(a, b, c)
			});
			if(this[0]) {
				h = i && i.parentNode, e.support.parentNode && h && h.nodeType === 11 && h.childNodes.length === this.length ? d = {
					fragment: h
				} : d = e.buildFragment(a, this, j), g = d.fragment, g.childNodes.length === 1 ? f = g = g.firstChild : f = g.firstChild;
				if(f) {
					b = b && e.nodeName(f, "tr");
					for(var k = 0, l = this.length, m = l - 1; k < l; k++) c.call(b ? kb(this[k], f) : this[k], d.cacheable || l > 1 && k < m ? e.clone(g, !0, !0) : g)
				}
				j.length && e.each(j, qb)
			}
			return this
		}
	}), e.buildFragment = function(a, c, d) {
		var f, g, h, i, j = a[0];
		return c && c[0] && (i = c[0].ownerDocument || c[0]), i.createDocumentFragment || (i = b), a.length === 1 && typeof j == "string" && j.length < 512 && i === b && j.charAt(0) === "<" && !db.test(j) && (e.support.checkClone || !fb.test(j)) && !e.support.unknownElems && eb.test(j) && (g = !0, h = e.fragments[j], h && h !== 1 && (f = h)), f || (f = i.createDocumentFragment(), e.clean(a, i, f, d)), g && (e.fragments[j] = h ? f : 1), {
			fragment: f,
			cacheable: g
		}
	}, e.fragments = {}, e.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		e.fn[a] = function(c) {
			var d = [],
				f = e(c),
				g = this.length === 1 && this[0].parentNode;
			if(g && g.nodeType === 11 && g.childNodes.length === 1 && f.length === 1) return f[b](this[0]), this;
			for(var h = 0, i = f.length; h < i; h++) {
				var j = (h > 0 ? this.clone(!0) : this).get();
				e(f[h])[b](j), d = d.concat(j)
			}
			return this.pushStack(d, a, f.selector)
		}
	}), e.extend({
		clone: function(a, b, c) {
			var d = a.cloneNode(!0),
				f, g, h;
			if((!e.support.noCloneEvent || !e.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !e.isXMLDoc(a)) {
				mb(a, d), f = nb(a), g = nb(d);
				for(h = 0; f[h]; ++h) g[h] && mb(f[h], g[h])
			}
			if(b) {
				lb(a, d);
				if(c) {
					f = nb(a), g = nb(d);
					for(h = 0; f[h]; ++h) lb(f[h], g[h])
				}
			}
			return f = g = null, d
		},
		clean: function(a, c, d, f) {
			var g;
			c = c || b, typeof c.createElement == "undefined" && (c = c.ownerDocument || c[0] && c[0].ownerDocument || b);
			var h = [],
				i;
			for(var j = 0, k;
			(k = a[j]) != null; j++) {
				typeof k == "number" && (k += "");
				if(!k) continue;
				if(typeof k == "string") if(!bb.test(k)) k = c.createTextNode(k);
				else {
					k = k.replace($, "<$1></$2>");
					var l = (_.exec(k) || ["", ""])[1].toLowerCase(),
						m = ib[l] || ib._default,
						n = m[0],
						o = c.createElement("div");
					c === b ? jb.appendChild(o) : W(c).appendChild(o), o.innerHTML = m[1] + k + m[2];
					while(n--) o = o.lastChild;
					if(!e.support.tbody) {
						var p = ab.test(k),
							q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
						for(i = q.length - 1; i >= 0; --i) e.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
					}!e.support.leadingWhitespace && Z.test(k) && o.insertBefore(c.createTextNode(Z.exec(k)[0]), o.firstChild), k = o.childNodes
				}
				var r;
				if(!e.support.appendChecked) if(k[0] && typeof(r = k.length) == "number") for(i = 0; i < r; i++) pb(k[i]);
				else pb(k);
				k.nodeType ? h.push(k) : h = e.merge(h, k)
			}
			if(d) {
				g = function(a) {
					return !a.type || gb.test(a.type)
				};
				for(j = 0; h[j]; j++) if(f && e.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) f.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
				else {
					if(h[j].nodeType === 1) {
						var s = e.grep(h[j].getElementsByTagName("script"), g);
						h.splice.apply(h, [j + 1, 0].concat(s))
					}
					d.appendChild(h[j])
				}
			}
			return h
		},
		cleanData: function(a) {
			var b, c, d = e.cache,
				f = e.event.special,
				g = e.support.deleteExpando;
			for(var h = 0, i;
			(i = a[h]) != null; h++) {
				if(i.nodeName && e.noData[i.nodeName.toLowerCase()]) continue;
				c = i[e.expando];
				if(c) {
					b = d[c];
					if(b && b.events) {
						for(var j in b.events) f[j] ? e.event.remove(i, j) : e.removeEvent(i, j, b.handle);
						b.handle && (b.handle.elem = null)
					}
					g ? delete i[e.expando] : i.removeAttribute && i.removeAttribute(e.expando), delete d[c]
				}
			}
		}
	});
	var rb = /alpha\([^)]*\)/i,
		sb = /opacity=([^)]*)/,
		tb = /([A-Z]|^ms)/g,
		ub = /^-?\d+(?:px)?$/i,
		vb = /^-?\d/,
		wb = /^([\-+])=([\-+.\de]+)/,
		xb = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		yb = ["Left", "Right"],
		zb = ["Top", "Bottom"],
		Ab, Bb, Cb;
	e.fn.css = function(a, b) {
		return arguments.length === 2 && b === undefined ? this : e.access(this, a, b, !0, function(a, b, c) {
			return c !== undefined ? e.style(a, b, c) : e.css(a, b)
		})
	}, e.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if(b) {
						var c = Ab(a, "opacity", "opacity");
						return c === "" ? "1" : c
					}
					return a.style.opacity
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
			"float": e.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, b, c, d) {
			if(!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
			var f, g, h = e.camelCase(b),
				i = a.style,
				j = e.cssHooks[h];
			b = e.cssProps[h] || h;
			if(c === undefined) return j && "get" in j && (f = j.get(a, !1, d)) !== undefined ? f : i[b];
			g = typeof c, g === "string" && (f = wb.exec(c)) && (c = +(f[1] + 1) * +f[2] + parseFloat(e.css(a, b)), g = "number");
			if(c == null || g === "number" && isNaN(c)) return;
			g === "number" && !e.cssNumber[h] && (c += "px");
			if(!j || !("set" in j) || (c = j.set(a, c)) !== undefined) try {
				i[b] = c
			} catch(k) {}
		},
		css: function(a, b, c) {
			var d, f;
			b = e.camelCase(b), f = e.cssHooks[b], b = e.cssProps[b] || b, b === "cssFloat" && (b = "float");
			if(f && "get" in f && (d = f.get(a, !0, c)) !== undefined) return d;
			if(Ab) return Ab(a, b)
		},
		swap: function(a, b, c) {
			var d = {};
			for(var e in b) d[e] = a.style[e], a.style[e] = b[e];
			c.call(a);
			for(e in b) a.style[e] = d[e]
		}
	}), e.curCSS = e.css, e.each(["height", "width"], function(a, b) {
		e.cssHooks[b] = {
			get: function(a, c, d) {
				var f;
				if(c) return a.offsetWidth !== 0 ? Db(a, b, d) : (e.swap(a, xb, function() {
					f = Db(a, b, d)
				}), f)
			},
			set: function(a, b) {
				if(!ub.test(b)) return b;
				b = parseFloat(b);
				if(b >= 0) return b + "px"
			}
		}
	}), e.support.opacity || (e.cssHooks.opacity = {
		get: function(a, b) {
			return sb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle,
				f = e.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
				g = d && d.filter || c.filter || "";
			c.zoom = 1;
			if(b >= 1 && e.trim(g.replace(rb, "")) === "") {
				c.removeAttribute("filter");
				if(d && !d.filter) return
			}
			c.filter = rb.test(g) ? g.replace(rb, f) : g + " " + f
		}
	}), e(function() {
		e.support.reliableMarginRight || (e.cssHooks.marginRight = {
			get: function(a, b) {
				var c;
				return e.swap(a, {
					display: "inline-block"
				}, function() {
					b ? c = Ab(a, "margin-right", "marginRight") : c = a.style.marginRight
				}), c
			}
		})
	}), b.defaultView && b.defaultView.getComputedStyle && (Bb = function(a, b) {
		var c, d, f;
		b = b.replace(tb, "-$1").toLowerCase();
		if(!(d = a.ownerDocument.defaultView)) return undefined;
		if(f = d.getComputedStyle(a, null)) c = f.getPropertyValue(b), c === "" && !e.contains(a.ownerDocument.documentElement, a) && (c = e.style(a, b));
		return c
	}), b.documentElement.currentStyle && (Cb = function(a, b) {
		var c, d, e, f = a.currentStyle && a.currentStyle[b],
			g = a.style;
		return f === null && g && (e = g[b]) && (f = e), !ub.test(f) && vb.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)), f === "" ? "auto" : f
	}), Ab = Bb || Cb, e.expr && e.expr.filters && (e.expr.filters.hidden = function(a) {
		var b = a.offsetWidth,
			c = a.offsetHeight;
		return b === 0 && c === 0 || !e.support.reliableHiddenOffsets && (a.style && a.style.display || e.css(a, "display")) === "none"
	}, e.expr.filters.visible = function(a) {
		return !e.expr.filters.hidden(a)
	});
	var Eb = /%20/g,
		Fb = /\[\]$/,
		Gb = /\r?\n/g,
		Hb = /#.*$/,
		Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		Jb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		Kb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
		Lb = /^(?:GET|HEAD)$/,
		Mb = /^\/\//,
		Nb = /\?/,
		Ob = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		Pb = /^(?:select|textarea)/i,
		Qb = /\s+/,
		Rb = /([?&])_=[^&]*/,
		Sb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		Tb = e.fn.load,
		Ub = {},
		Vb = {},
		Wb, Xb, Yb = ["*/"] + ["*"];
	try {
		Wb = d.href
	} catch(Zb) {
		Wb = b.createElement("a"), Wb.href = "", Wb = Wb.href
	}
	Xb = Sb.exec(Wb.toLowerCase()) || [], e.fn.extend({
		load: function(a, b, c) {
			if(typeof a != "string" && Tb) return Tb.apply(this, arguments);
			if(!this.length) return this;
			var d = a.indexOf(" ");
			if(d >= 0) {
				var f = a.slice(d, a.length);
				a = a.slice(0, d)
			}
			var g = "GET";
			b && (e.isFunction(b) ? (c = b, b = undefined) : typeof b == "object" && (b = e.param(b, e.ajaxSettings.traditional), g = "POST"));
			var h = this;
			return e.ajax({
				url: a,
				type: g,
				dataType: "html",
				data: b,
				complete: function(a, b, d) {
					d = a.responseText, a.isResolved() && (a.done(function(a) {
						d = a
					}), h.html(f ? e("<div>").append(d.replace(Ob, "")).find(f) : d)), c && h.each(c, [d, b, a])
				}
			}), this
		},
		serialize: function() {
			return e.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? e.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || Pb.test(this.nodeName) || Jb.test(this.type))
			}).map(function(a, b) {
				var c = e(this).val();
				return c == null ? null : e.isArray(c) ? e.map(c, function(a, c) {
					return {
						name: b.name,
						value: a.replace(Gb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(Gb, "\r\n")
				}
			}).get()
		}
	}), e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
		e.fn[b] = function(a) {
			return this.bind(b, a)
		}
	}), e.each(["get", "post"], function(a, b) {
		e[b] = function(a, c, d, f) {
			return e.isFunction(c) && (f = f || d, d = c, c = undefined), e.ajax({
				type: b,
				url: a,
				data: c,
				success: d,
				dataType: f
			})
		}
	}), e.extend({
		getScript: function(a, b) {
			return e.get(a, undefined, b, "script")
		},
		getJSON: function(a, b, c) {
			return e.get(a, b, c, "json")
		},
		ajaxSetup: function(a, b) {
			return b ? ac(a, e.ajaxSettings) : (b = a, a = e.ajaxSettings), ac(a, b), a
		},
		ajaxSettings: {
			url: Wb,
			isLocal: Kb.test(Xb[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": Yb
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
				"text json": e.parseJSON,
				"text xml": e.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: $b(Ub),
		ajaxTransport: $b(Vb),
		ajax: function(a, b) {
			function v(a, b, k, l) {
				if(r === 2) return;
				r = 2, p && clearTimeout(p), o = undefined, m = l || "", u.readyState = a > 0 ? 4 : 0;
				var n, q, t, v = b,
					w = k ? cc(c, u, k) : undefined,
					x, y;
				if(a >= 200 && a < 300 || a === 304) {
					if(c.ifModified) {
						if(x = u.getResponseHeader("Last-Modified")) e.lastModified[j] = x;
						if(y = u.getResponseHeader("Etag")) e.etag[j] = y
					}
					if(a === 304) v = "notmodified", n = !0;
					else try {
						q = dc(c, w), v = "success", n = !0
					} catch(z) {
						v = "parsererror", t = z
					}
				} else {
					t = v;
					if(!v || a) v = "error", a < 0 && (a = 0)
				}
				u.status = a, u.statusText = "" + (b || v), n ? g.resolveWith(d, [q, v, u]) : g.rejectWith(d, [u, v, t]), u.statusCode(i), i = undefined, s && f.trigger("ajax" + (n ? "Success" : "Error"), [u, c, n ? q : t]), h.fireWith(d, [u, v]), s && (f.trigger("ajaxComplete", [u, c]), --e.active || e.event.trigger("ajaxStop"))
			}
			typeof a == "object" && (b = a, a = undefined), b = b || {};
			var c = e.ajaxSetup({}, b),
				d = c.context || c,
				f = d !== c && (d.nodeType || d instanceof e) ? e(d) : e.event,
				g = e.Deferred(),
				h = e.Callbacks("once memory"),
				i = c.statusCode || {},
				j, k = {},
				l = {},
				m, n, o, p, q, r = 0,
				s, t, u = {
					readyState: 0,
					setRequestHeader: function(a, b) {
						if(!r) {
							var c = a.toLowerCase();
							a = l[c] = l[c] || a, k[a] = b
						}
						return this
					},
					getAllResponseHeaders: function() {
						return r === 2 ? m : null
					},
					getResponseHeader: function(a) {
						var b;
						if(r === 2) {
							if(!n) {
								n = {};
								while(b = Ib.exec(m)) n[b[1].toLowerCase()] = b[2]
							}
							b = n[a.toLowerCase()]
						}
						return b === undefined ? null : b
					},
					overrideMimeType: function(a) {
						return r || (c.mimeType = a), this
					},
					abort: function(a) {
						return a = a || "abort", o && o.abort(a), v(0, a), this
					}
				};
			g.promise(u), u.success = u.done, u.error = u.fail, u.complete = h.add, u.statusCode = function(a) {
				if(a) {
					var b;
					if(r < 2) for(b in a) i[b] = [i[b], a[b]];
					else b = a[u.status], u.then(b, b)
				}
				return this
			}, c.url = ((a || c.url) + "").replace(Hb, "").replace(Mb, Xb[1] + "//"), c.dataTypes = e.trim(c.dataType || "*").toLowerCase().split(Qb), c.crossDomain == null && (q = Sb.exec(c.url.toLowerCase()), c.crossDomain = !(!q || q[1] == Xb[1] && q[2] == Xb[2] && (q[3] || (q[1] === "http:" ? 80 : 443)) == (Xb[3] || (Xb[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = e.param(c.data, c.traditional)), _b(Ub, c, b, u);
			if(r === 2) return !1;
			s = c.global, c.type = c.type.toUpperCase(), c.hasContent = !Lb.test(c.type), s && e.active++ === 0 && e.event.trigger("ajaxStart");
			if(!c.hasContent) {
				c.data && (c.url += (Nb.test(c.url) ? "&" : "?") + c.data, delete c.data), j = c.url;
				if(c.cache === !1) {
					var w = e.now(),
						x = c.url.replace(Rb, "$1_=" + w);
					c.url = x + (x === c.url ? (Nb.test(c.url) ? "&" : "?") + "_=" + w : "")
				}
			}(c.data && c.hasContent && c.contentType !== !1 || b.contentType) && u.setRequestHeader("Content-Type", c.contentType), c.ifModified && (j = j || c.url, e.lastModified[j] && u.setRequestHeader("If-Modified-Since", e.lastModified[j]), e.etag[j] && u.setRequestHeader("If-None-Match", e.etag[j])), u.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Yb + "; q=0.01" : "") : c.accepts["*"]);
			for(t in c.headers) u.setRequestHeader(t, c.headers[t]);
			if(!c.beforeSend || c.beforeSend.call(d, u, c) !== !1 && r !== 2) {
				for(t in {
					success: 1,
					error: 1,
					complete: 1
				}) u[t](c[t]);
				o = _b(Vb, c, b, u);
				if(!o) v(-1, "No Transport");
				else {
					u.readyState = 1, s && f.trigger("ajaxSend", [u, c]), c.async && c.timeout > 0 && (p = setTimeout(function() {
						u.abort("timeout")
					}, c.timeout));
					try {
						r = 1, o.send(k, v)
					} catch(y) {
						r < 2 ? v(-1, y) : e.error(y)
					}
				}
				return u
			}
			return u.abort(), !1
		},
		param: function(a, b) {
			var c = [],
				d = function(a, b) {
					b = e.isFunction(b) ? b() : b, c[c.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
				};
			b === undefined && (b = e.ajaxSettings.traditional);
			if(e.isArray(a) || a.jquery && !e.isPlainObject(a)) e.each(a, function() {
				d(this.name, this.value)
			});
			else for(var f in a) bc(f, a[f], b, d);
			return c.join("&").replace(Eb, "+")
		}
	}), e.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});
	var ec = e.now(),
		fc = /(\=)\?(&|$)|\?\?/i;
	e.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			return e.expando + "_" + ec++
		}
	}), e.ajaxPrefilter("json jsonp", function(b, c, d) {
		var f = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
		if(b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (fc.test(b.url) || f && fc.test(b.data))) {
			var g, h = b.jsonpCallback = e.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
				i = a[h],
				j = b.url,
				k = b.data,
				l = "$1" + h + "$2";
			return b.jsonp !== !1 && (j = j.replace(fc, l), b.url === j && (f && (k = k.replace(fc, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
				g = [a]
			}, d.always(function() {
				a[h] = i, g && e.isFunction(i) && a[h](g[0])
			}), b.converters["script json"] = function() {
				return g || e.error(h + " was not called"), g[0]
			}, b.dataTypes[0] = "json", "script"
		}
	}), e.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(a) {
				return e.globalEval(a), a
			}
		}
	}), e.ajaxPrefilter("script", function(a) {
		a.cache === undefined && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), e.ajaxTransport("script", function(a) {
		if(a.crossDomain) {
			var c, d = b.head || b.getElementsByTagName("head")[0] || b.documentElement;
			return {
				send: function(e, f) {
					c = b.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
						if(b || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = undefined, b || f(200, "success")
					}, d.insertBefore(c, d.firstChild)
				},
				abort: function() {
					c && c.onload(0, 1)
				}
			}
		}
	});
	var gc = a.ActiveXObject ?
	function() {
		for(var a in ic) ic[a](0, 1)
	} : !1, hc = 0, ic;
	e.ajaxSettings.xhr = a.ActiveXObject ?
	function() {
		return !this.isLocal && jc() || kc()
	} : jc, function(a) {
		e.extend(e.support, {
			ajax: !! a,
			cors: !! a && "withCredentials" in a
		})
	}(e.ajaxSettings.xhr()), e.support.ajax && e.ajaxTransport(function(b) {
		if(!b.crossDomain || e.support.cors) {
			var c;
			return {
				send: function(d, f) {
					var g = b.xhr(),
						h, i;
					b.username ? g.open(b.type, b.url, b.async, b.username, b.password) : g.open(b.type, b.url, b.async);
					if(b.xhrFields) for(i in b.xhrFields) g[i] = b.xhrFields[i];
					b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), !b.crossDomain && !d["X-Requested-With"] && (d["X-Requested-With"] = "XMLHttpRequest");
					try {
						for(i in d) g.setRequestHeader(i, d[i])
					} catch(j) {}
					g.send(b.hasContent && b.data || null), c = function(a, d) {
						var i, j, k, l, m;
						try {
							if(c && (d || g.readyState === 4)) {
								c = undefined, h && (g.onreadystatechange = e.noop, gc && delete ic[h]);
								if(d) g.readyState !== 4 && g.abort();
								else {
									i = g.status, k = g.getAllResponseHeaders(), l = {}, m = g.responseXML, m && m.documentElement && (l.xml = m), l.text = g.responseText;
									try {
										j = g.statusText
									} catch(n) {
										j = ""
									}!i && b.isLocal && !b.crossDomain ? i = l.text ? 200 : 404 : i === 1223 && (i = 204)
								}
							}
						} catch(o) {
							d || f(-1, o)
						}
						l && f(i, j, l, k)
					}, !b.async || g.readyState === 4 ? c() : (h = ++hc, gc && (ic || (ic = {}, e(a).unload(gc)), ic[h] = c), g.onreadystatechange = c)
				},
				abort: function() {
					c && c(0, 1)
				}
			}
		}
	});
	var lc = {},
		mc, nc, oc = /^(?:toggle|show|hide)$/,
		pc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		qc, rc = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		sc;
	e.fn.extend({
		show: function(a, b, c) {
			var d, f;
			if(a || a === 0) return this.animate(vc("show", 3), a, b, c);
			for(var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (f = d.style.display, !e._data(d, "olddisplay") && f === "none" && (f = d.style.display = ""), f === "" && e.css(d, "display") === "none" && e._data(d, "olddisplay", wc(d.nodeName)));
			for(g = 0; g < h; g++) {
				d = this[g];
				if(d.style) {
					f = d.style.display;
					if(f === "" || f === "none") d.style.display = e._data(d, "olddisplay") || ""
				}
			}
			return this
		},
		hide: function(a, b, c) {
			if(a || a === 0) return this.animate(vc("hide", 3), a, b, c);
			var d, f, g = 0,
				h = this.length;
			for(; g < h; g++) d = this[g], d.style && (f = e.css(d, "display"), f !== "none" && !e._data(d, "olddisplay") && e._data(d, "olddisplay", f));
			for(g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
			return this
		},
		_toggle: e.fn.toggle,
		toggle: function(a, b, c) {
			var d = typeof a == "boolean";
			return e.isFunction(a) && e.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
				var b = d ? a : e(this).is(":hidden");
				e(this)[b ? "show" : "hide"]()
			}) : this.animate(vc("toggle", 3), a, b, c), this
		},
		fadeTo: function(a, b, c, d) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			function g() {
				f.queue === !1 && e._mark(this);
				var b = e.extend({}, f),
					c = this.nodeType === 1,
					d = c && e(this).is(":hidden"),
					g, h, i, j, k, l, m, n, o;
				b.animatedProperties = {};
				for(i in a) {
					g = e.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], e.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
					if(h === "hide" && d || h === "show" && !d) return b.complete.call(this);
					c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], e.css(this, "display") === "inline" && e.css(this, "float") === "none" && (!e.support.inlineBlockNeedsLayout || wc(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
				}
				b.overflow != null && (this.style.overflow = "hidden");
				for(i in a) j = new e.fx(this, b, i), h = a[i], oc.test(h) ? (o = e._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (e._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = pc.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (e.cssNumber[i] ? "" : "px"), n !== "px" && (e.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, e.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""));
				return !0
			}
			var f = e.speed(b, c, d);
			return e.isEmptyObject(a) ? this.each(f.complete, [!1]) : (a = e.extend({}, a), f.queue === !1 ? this.each(g) : this.queue(f.queue, g))
		},
		stop: function(a, b, c) {
			return typeof a != "string" && (c = b, b = a, a = undefined), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
				function h(a, b, d) {
					var f = b[d];
					e.removeData(a, d, !0), f.stop(c)
				}
				var b, d = !1,
					f = e.timers,
					g = e._data(this);
				c || e._unmark(!0, this);
				if(a == null) for(b in g) g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
				else g[b = a + ".run"] && g[b].stop && h(this, g, b);
				for(b = f.length; b--;) f[b].elem === this && (a == null || f[b].queue === a) && (c ? f[b](!0) : f[b].saveState(), d = !0, f.splice(b, 1));
				(!c || !d) && e.dequeue(this, a)
			})
		}
	}), e.each({
		slideDown: vc("show", 1),
		slideUp: vc("hide", 1),
		slideToggle: vc("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		e.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), e.extend({
		speed: function(a, b, c) {
			var d = a && typeof a == "object" ? e.extend({}, a) : {
				complete: c || !c && b || e.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !e.isFunction(b) && b
			};
			d.duration = e.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in e.fx.speeds ? e.fx.speeds[d.duration] : e.fx.speeds._default;
			if(d.queue == null || d.queue === !0) d.queue = "fx";
			return d.old = d.complete, d.complete = function(a) {
				e.isFunction(d.old) && d.old.call(this), d.queue ? e.dequeue(this, d.queue) : a !== !1 && e._unmark(this)
			}, d
		},
		easing: {
			linear: function(a, b, c, d) {
				return c + d * a
			},
			swing: function(a, b, c, d) {
				return(-Math.cos(a * Math.PI) / 2 + .5) * d + c
			}
		},
		timers: [],
		fx: function(a, b, c) {
			this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
		}
	}), e.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this), (e.fx.step[this.prop] || e.fx.step._default)(this)
		},
		cur: function() {
			if(this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
				var a, b = e.css(this.elem, this.prop);
				return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
			}
			return this.elem[this.prop]
		},
		custom: function(a, b, c) {
			function g(a) {
				return d.step(a)
			}
			var d = this,
				f = e.fx;
			this.startTime = sc || tc(), this.end = b, this.now = this.start = a, this.pos = this.state = 0, this.unit = c || this.unit || (e.cssNumber[this.prop] ? "" : "px"), g.queue = this.options.queue, g.elem = this.elem, g.saveState = function() {
				d.options.hide && e._data(d.elem, "fxshow" + d.prop) === undefined && e._data(d.elem, "fxshow" + d.prop, d.start)
			}, g() && e.timers.push(g) && !qc && (qc = setInterval(f.tick, f.interval))
		},
		show: function() {
			var a = e._data(this.elem, "fxshow" + this.prop);
			this.options.orig[this.prop] = a || e.style(this.elem, this.prop), this.options.show = !0, a !== undefined ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), e(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = e._data(this.elem, "fxshow" + this.prop) || e.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b, c, d, f = sc || tc(),
				g = !0,
				h = this.elem,
				i = this.options;
			if(a || f >= i.duration + this.startTime) {
				this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
				for(b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
				if(g) {
					i.overflow != null && !e.support.shrinkWrapBlocks && e.each(["", "X", "Y"], function(a, b) {
						h.style["overflow" + b] = i.overflow[a]
					}), i.hide && e(h).hide();
					if(i.hide || i.show) for(b in i.animatedProperties) e.style(h, b, i.orig[b]), e.removeData(h, "fxshow" + b, !0), e.removeData(h, "toggle" + b, !0);
					d = i.complete, d && (i.complete = !1, d.call(h))
				}
				return !1
			}
			return i.duration == Infinity ? this.now = f : (c = f - this.startTime, this.state = c / i.duration, this.pos = e.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
		}
	}, e.extend(e.fx, {
		tick: function() {
			var a, b = e.timers,
				c = 0;
			for(; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
			b.length || e.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(qc), qc = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				e.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
			}
		}
	}), e.each(["width", "height"], function(a, b) {
		e.fx.step[b] = function(a) {
			e.style(a.elem, b, Math.max(0, a.now))
		}
	}), e.expr && e.expr.filters && (e.expr.filters.animated = function(a) {
		return e.grep(e.timers, function(b) {
			return a === b.elem
		}).length
	});
	var xc = /^t(?:able|d|h)$/i,
		yc = /^(?:body|html)$/i;
	"getBoundingClientRect" in b.documentElement ? e.fn.offset = function(a) {
		var b = this[0],
			c;
		if(a) return this.each(function(b) {
			e.offset.setOffset(this, a, b)
		});
		if(!b || !b.ownerDocument) return null;
		if(b === b.ownerDocument.body) return e.offset.bodyOffset(b);
		try {
			c = b.getBoundingClientRect()
		} catch(d) {}
		var f = b.ownerDocument,
			g = f.documentElement;
		if(!c || !e.contains(g, b)) return c ? {
			top: c.top,
			left: c.left
		} : {
			top: 0,
			left: 0
		};
		var h = f.body,
			i = zc(f),
			j = g.clientTop || h.clientTop || 0,
			k = g.clientLeft || h.clientLeft || 0,
			l = i.pageYOffset || e.support.boxModel && g.scrollTop || h.scrollTop,
			m = i.pageXOffset || e.support.boxModel && g.scrollLeft || h.scrollLeft,
			n = c.top + l - j,
			o = c.left + m - k;
		return {
			top: n,
			left: o
		}
	} : e.fn.offset = function(a) {
		var b = this[0];
		if(a) return this.each(function(b) {
			e.offset.setOffset(this, a, b)
		});
		if(!b || !b.ownerDocument) return null;
		if(b === b.ownerDocument.body) return e.offset.bodyOffset(b);
		var c, d = b.offsetParent,
			f = b,
			g = b.ownerDocument,
			h = g.documentElement,
			i = g.body,
			j = g.defaultView,
			k = j ? j.getComputedStyle(b, null) : b.currentStyle,
			l = b.offsetTop,
			m = b.offsetLeft;
		while((b = b.parentNode) && b !== i && b !== h) {
			if(e.support.fixedPosition && k.position === "fixed") break;
			c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, e.support.doesNotAddBorder && (!e.support.doesAddBorderForTableAndCells || !xc.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), f = d, d = b.offsetParent), e.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
		}
		if(k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
		return e.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft)), {
			top: l,
			left: m
		}
	}, e.offset = {
		bodyOffset: function(a) {
			var b = a.offsetTop,
				c = a.offsetLeft;
			return e.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(e.css(a, "marginTop")) || 0, c += parseFloat(e.css(a, "marginLeft")) || 0), {
				top: b,
				left: c
			}
		},
		setOffset: function(a, b, c) {
			var d = e.css(a, "position");
			d === "static" && (a.style.position = "relative");
			var f = e(a),
				g = f.offset(),
				h = e.css(a, "top"),
				i = e.css(a, "left"),
				j = (d === "absolute" || d === "fixed") && e.inArray("auto", [h, i]) > -1,
				k = {},
				l = {},
				m, n;
			j ? (l = f.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), e.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : f.css(k)
		}
	}, e.fn.extend({
		position: function() {
			if(!this[0]) return null;
			var a = this[0],
				b = this.offsetParent(),
				c = this.offset(),
				d = yc.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
			return c.top -= parseFloat(e.css(a, "marginTop")) || 0, c.left -= parseFloat(e.css(a, "marginLeft")) || 0, d.top += parseFloat(e.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(e.css(b[0], "borderLeftWidth")) || 0, {
				top: c.top - d.top,
				left: c.left - d.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent || b.body;
				while(a && !yc.test(a.nodeName) && e.css(a, "position") === "static") a = a.offsetParent;
				return a
			})
		}
	}), e.each(["Left", "Top"], function(a, b) {
		var c = "scroll" + b;
		e.fn[c] = function(b) {
			var d, f;
			return b === undefined ? (d = this[0], d ? (f = zc(d), f ? "pageXOffset" in f ? f[a ? "pageYOffset" : "pageXOffset"] : e.support.boxModel && f.document.documentElement[c] || f.document.body[c] : d[c]) : null) : this.each(function() {
				f = zc(this), f ? f.scrollTo(a ? e(f).scrollLeft() : b, a ? b : e(f).scrollTop()) : this[c] = b
			})
		}
	}), e.each(["Height", "Width"], function(a, b) {
		var c = b.toLowerCase();
		e.fn["inner" + b] = function() {
			var a = this[0];
			return a ? a.style ? parseFloat(e.css(a, c, "padding")) : this[c]() : null
		}, e.fn["outer" + b] = function(a) {
			var b = this[0];
			return b ? b.style ? parseFloat(e.css(b, c, a ? "margin" : "border")) : this[c]() : null
		}, e.fn[c] = function(a) {
			var d = this[0];
			if(!d) return a == null ? null : this;
			if(e.isFunction(a)) return this.each(function(b) {
				var d = e(this);
				d[c](a.call(this, b, d[c]()))
			});
			if(e.isWindow(d)) {
				var f = d.document.documentElement["client" + b],
					g = d.document.body;
				return d.document.compatMode === "CSS1Compat" && f || g && g["client" + b] || f
			}
			if(d.nodeType === 9) return Math.max(d.documentElement["client" + b], d.body["scroll" + b], d.documentElement["scroll" + b], d.body["offset" + b], d.documentElement["offset" + b]);
			if(a === undefined) {
				var h = e.css(d, c),
					i = parseFloat(h);
				return e.isNumeric(i) ? i : h
			}
			return this.css(c, typeof a == "string" ? a : a + "px")
		}
	}), a.jQuery = a.$ = e
}(window), require.install("jquery", function() {}), function(a) {
	var b = require("settings").formkey;
	a.securepost = function(c, d, e, f) {
		d = d || {};
		if(!b) throw new Error("No formkey set; can't securepost");
		return d.formkey = b, a.post(c, d, e, f)
	}, a.secureData = function(d, e, f, g, h) {
		typeof arguments[0] == "object" ? (d = arguments[0], e = arguments[1], f = arguments[2], g = arguments[3], h = arguments[4]) : (e = arguments[0], f = arguments[1], g = arguments[2], h = arguments[3], d = arguments[4] || {});
		if(!b) throw new Error("No formkey set; can't send data securely");
		d.type = d.type || "POST", d.dataType = d.dataType || "json", d.url = e;
		var i = d.secureDataError;
		d.success = function(a) {
			if(a.___ERROR___) {
				var b = a.___ERROR___[0],
					d = a.___ERROR___[1],
					f = new c("Got an error from the URL '" + e + "'", b, d);
				if(i) return i(b, d, f);
				throw f
			}
			if(g) return g(a)
		}, d.error = h;
		var j = d.data || f;
		return d.data = {
			formkey: b,
			data: JSON.stringify(j)
		}, a.ajax(d)
	};
	var c = function(a, b, c) {
			this.message = c + ": " + a + " <" + JSON.stringify(b) + ">"
		};
	c.prototype = new Error, c.prototype.constructor = c, a.secureData.SecureDataError = c
}(jQuery), require.install("jquery.securepost", function() {}), jQuery.cookie = function(a, b, c) {
	c = c || {};
	var d = c.document || document;
	assert(d.nodeType === 9);
	if(typeof b == "undefined") {
		var j = null;
		if(d.cookie && d.cookie != "") {
			var k = d.cookie.split(";");
			for(var l = 0; l < k.length; l++) {
				var m = jQuery.trim(k[l]);
				if(m.substring(0, a.length + 1) == a + "=") {
					j = decodeURIComponent(m.substring(a.length + 1));
					break
				}
			}
		}
		return j
	}
	c = c || {}, b === null && (b = "", c = $.extend({}, c), c.expires = -1);
	var e = "";
	if(c.expires && (typeof c.expires == "number" || c.expires.toUTCString)) {
		var f;
		typeof c.expires == "number" ? (f = new Date, f.setTime(f.getTime() + c.expires * 24 * 60 * 60 * 1e3)) : f = c.expires, e = "; expires=" + f.toUTCString()
	}
	var g = c.path ? "; path=" + c.path : "",
		h = c.domain ? "; domain=" + c.domain : "",
		i = c.secure ? "; secure" : "";
	d.cookie = [a, "=", encodeURIComponent(b), e, g, h, i].join("")
}, require.install("jquery.cookie", function() {}), require.install("visibility", function(require, a, b) {
	function c() {
		try {
			var a = window.frameElement;
			return a.getAttribute("className"), a
		} catch(b) {
			return null
		}
	}
	function d(a, b) {
		return(" " + (a.className || "") + " ").indexOf(" " + b + " ") != -1
	}
	function e(a, b) {
		d(a, b) || (a.className = (a.className || "") + " " + b)
	}
	function f(a) {
		var b = /^\s+/,
			c = /\s+$/;
		return a.trim ? a.trim() : a.replace(b, "").replace(c, "")
	}
	function g(a, b) {
		a.className = f((" " + (a.className || "") + " ").replace(" " + b + " ", " "))
	}
	a.getFrameElement = c, a.setVisible = function(a) {
		var b = c();
		a ? (window.focus(), b ? e(b, "maximized") : g(document.body, "minimized")) : b ? g(b, "maximized") : e(document.body, "minimized")
	}, a.isVisible = function() {
		var a = c();
		return a ? d(a, "maximized") : !d(document.body, "minimized")
	}, a.addClass = e, a.hasClass = d, a.removeClass = g
}), require.install("lang/fun", function(require, exports, module) {
	function wrapDumbFunction(f) {
		return function() {
			switch(arguments.length) {
			case 0:
				return f();
			case 1:
				return f(arguments[0]);
			case 2:
				return f(arguments[0], arguments[1]);
			case 3:
				return f(arguments[0], arguments[1], arguments[2])
			}
			for(var i = 0, args = []; i < arguments.length; i++) args.push("arguments[" + i + "]");
			return eval("(f(" + args.join(",") + "))")
		}
	}
	function expect(a, b) {
		function d(a, b) {
			typeof a == "number" && a >= 0 && !(a in c) && (c[a] = b)
		}
		function e() {
			--a || b.apply(this, c)
		}
		var c = [];
		return e.args = function() {
			var a = this,
				b = arguments;
			return function() {
				d(a.valueOf(), this);
				for(var c = 0, f = b.length; c < f; ++c) d(b[c], arguments[c]);
				e()
			}
		}, e
	}
	exports.bind = function(a, b) {
		var c = Array.prototype.slice,
			d = c.call(arguments, 2),
			e = d.length > 0 ?
		function() {
			return f.apply(a || this, d.concat(c.call(arguments, 0)))
		} : function() {
			return f.apply(a || this, arguments)
		}, f = b;
		return e.name = b.name, e.toString = function() {
			return "[" + b + " bound with " + a + " and with args " + d + " partially applied]"
		}, typeof b.apply == "undefined" && (f = wrapDumbFunction(b)), e
	}, exports.expect = expect
}), require.install("Class", function(require, a, b) {
	function h(a, b) {
		function h() {
			e || (a.call(g), i(d, b, c), e = !0, b = null);
			if(this === g) return;
			var f = this.__init__;
			f && f.apply(this, arguments)
		}
		var c = f.prototype = a.prototype,
			d = new f,
			e;
		return h.prototype = d, h.extend = k, d.constructor = h
	}
	function i(a, b, c) {
		for(var d in b) b.hasOwnProperty(d) && (a[d] = c ? j(d, b, c) : b[d])
	}
	function j(a, b, d) {
		var e = b[a],
			f = d[a];
		return typeof e == "function" && typeof f == "function" && e !== f && c.test(e) ?
		function() {
			var b = this._super;
			this._super = d[a];
			try {
				return e.apply(this, arguments)
			} finally {
				this._super = b
			}
		} : e
	}
	function k(a) {
		return h(this, a)
	}
	var c = /xyz/.test(function() {
		xyz
	}) ? /\b_super\b/ : /.*/,
		d = require("lang/fun").bind,
		e = Array.prototype.slice,
		f = function() {},
		g = {};
	a.Class = k.call(function() {}, {
		fnbind: function(a) {
			return arguments.length < 2 ? d(this, a) : d.apply(null, [this].concat(e.call(arguments, 0)))
		}
	}), a.testExtendSpeed = function(b) {
		var c = b = b || 1e4,
			d = +(new Date),
			e = [];
		while(b-- > 0) e.push(a.Class.extend({
			__init__: function(a) {
				this.val = a
			},
			method: function(a) {
				this.val += a
			}
		}).extend({
			method: function(a) {
				this._super(a), this.val += a
			},
			foo: function() {},
			bar: function() {
				this.foo()
			}
		}).extend({
			__init__: function() {
				this._super.apply(this, arguments)
			},
			foo: function() {}
		}));
		console.log(c, "class definitions took", new Date - d, "ms"), e.length = 0
	}
}), require.install("keystrokes", function(require, a, b) {
	function d(a) {
		for(var b = 0, d = c.length; b < d; ++b) c[b].trigger(a)
	}
	function e(a, b) {
		var c = 0;
		this.trigger = function(d) {
			d === a[c] ? (c += 1, c === a.length && (c = 0, b())) : c = 0
		}
	}
	var c = [];
	require("event").add(document, "keydown", function(a) {
		d(a.keyCode || a.charCode)
	}), a.on = function(a, b) {
		typeof a == "number" ? a = [a] : a = a.slice(0), c.push(new e(a, b))
	}
}), require.install("w2.keyevent", function(require, a, b) {
	function f(a, b) {
		if(a.isContentEditable || a.nodeName.toLowerCase() == "input") return;
		var c = $(a).children(d),
			f = !0;
		if(c.length == 0) {
			c = $.makeArray(a.getElementsByTagName(d));
			var g = {},
				h = [];
			for(var i = 0, j = c.length; i < j; ++i) g[c[i].parentElement.id] = 1;
			c = c.filter(function(b) {
				var c = b.parentElement;
				while((c = c.parentElement) !== a) if(g[c.id] || c.getAttribute("tabindex")) return !1;
				return !0
			})
		} else assert(c.length <= 1), c = $.makeArray(c);
		for(var i = 0, j = c.length; i < j; ++i) {
			var k = c[i],
				l = e._components[k.getAttribute("cid")];
			assert(l && l.keyEvents);
			var m = l.keyEvents(b);
			m === !1 && (assert(f), f = !1)
		}
		while(f !== !1 && (a = a.parentElement)) c = $(a).children(d), c.length && (assert(c.length <= 1), l = e._components[c[0].getAttribute("cid")], assert(l && l.keyEvents), f = l.keyEvents(b))
	}
	var c = require("settings").keyboardShortcuts,
		d = "keyevent",
		e = require("webnode2");
	require("event").add(document, "keydown", function(a) {
		c && f(a.target, a.keyCode || a.charCode)
	}), c && require("keystrokes").on([75, 49, 75, 49, 75, 50, 75, 50], function() {
		c = !c
	})
}), require.install("webnode2", function(require, exports, module) {
	(function() {
		function addParents(a) {
			var b, c;
			for(b in a) a.hasOwnProperty(b) && (c = a[b], W2._parents[b] = c, typeof W2._allChildren[c] == "undefined" && (W2._allChildren[c] = []), W2._allChildren[c].push(b), typeof W2._children[b] == "undefined" && (W2._children[b] = {}), typeof W2._knowsAbout[b] == "undefined" && (W2._knowsAbout[b] = {}))
		}
		function addGroups(a) {
			var b, c, d, e, f;
			for(d in a) if(a.hasOwnProperty(d)) {
				b = a[d], f = b.length;
				for(e = 0; e < f; e++) c = b[e], W2._groups[d] || (W2._groups[d] = []), W2._groups[d].push(c), W2._componentGroups[c] || (W2._componentGroups[c] = []), W2._componentGroups[c].push(d)
			}
		}
		function addChildren(a) {
			var b;
			for(b in a) a.hasOwnProperty(b) && jQuery.extend(W2._children[b], a[b])
		}
		function addLookups(a) {
			var b;
			for(b in a) a.hasOwnProperty(b) && jQuery.extend(W2._knowsAbout[b], a[b])
		}
		function addDomids(a) {
			var b, c;
			for(b in a) a.hasOwnProperty(b) && (W2._domidToCid[W2._domids[b] = a[b]] = b)
		}
		function addDebugInfo(a) {
			var b, c = require("w2.timing").timing;
			for(b in a) a.hasOwnProperty(b) && (W2._debugInfo[b] = a[b]), c._components && (c._components[b] || (c._components[b] = {}), c._components[b].addDebugInfo = +(new Date))
		}
		function addComponentMetadata(a) {
			var b = a.parents,
				c = a.children,
				d = a.knowsAbout,
				e = a.groups,
				f = a.debugInfo,
				g = a.domids;
			W2.addParents(b), W2.addChildren(c), W2.addLookups(d), W2.addGroups(e), W2.addDomids(g), f && W2.addDebugInfo(f), $(document).trigger("w2addcomponents", a), $(document).trigger("webnode_add_component_metadata", a)
		}
		function _removeComponentMetadata(a, b) {
			var c, d, e, f, g, h, i, j, k, l, m;
			for(c = 0; c < b.length; c++) {
				d = b[c], $(document).trigger("webnode_before_remove_child_component_metadata", d), e = W2._parents[d], f = W2._allChildren[e];
				if(f) for(h = 0; h < f.length; h++) if(f[h] == d) {
					f.splice(h, 1);
					break
				}
				k = W2._components[d];
				if(k) {
					l = k.cname;
					if(l) {
						var n = W2._children[e];
						n && n[l] == d && delete W2._children[e][l]
					}
					removeEntry(k)
				}
				g = W2._componentGroups[d];
				if(g) for(h = 0; h < g.length; h++) {
					j = g[h];
					for(i = 0; i < W2._groups[j]; i++) if(W2._groups[j][i] == d) {
						W2._groups[j].splice(i, 1);
						break
					}
				}
				delete W2._componentGroups[d], delete W2._components[d], delete W2._parents[d], delete W2._allChildren[d], delete W2._children[d], delete W2._knowsAbout[d], delete W2._domidToCid[W2._domids[d]], delete W2._domids[d], delete W2._debugInfo[d], delete W2._onVisibleComponents[d], delete onLoadStatus[d], delete onLoadCallbacks[d]
			}
			return $(document).trigger("webnode_remove_component_metadata", a), b
		}
		function _getDescendants(a) {
			var b = [],
				c = W2._allChildren[a],
				d;
			if(c) for(d = 0; d < c.length; d++) b = b.concat(_getDescendants(c[d]));
			return b.push(a), b
		}
		function getLiveDomId(a) {
			return W2._domids[a]
		}
		function getComponentFromElement(a) {
			while(a && !(a.id in W2._domidToCid)) a = a.parentNode;
			return a && W2._components[W2._domidToCid[a.id]]
		}
		function getLiveParent(a) {
			return W2._domids[a] ? W2._domids[a] : W2._parents[a] ? getLiveParent(W2._parents[a]) : ""
		}
		function registerComponents(a) {
			var b = [],
				c, d, e = require("w2.timing").timing;
			for(c = 0; c < a.length; c++) d = a[c], W2._components[d.cid] = d, d.onVisible && (W2._onVisibleComponents[d.cid] = d, b.push(d));
			if(require("visibility").isVisible()) for(c = 0; c < b.length; c++) {
				d = b[c];
				var f = +(new Date);
				try {
					d.onVisible()
				} catch(g) {
					assert(!1)
				}
				e.components && (e.components[d.cid] || (e.components[d.cid] = {}), e.components[d.cid].v = +(new Date) - f)
			}
			return a
		}
		function hasEntry(a) {
			return a.__js_key in stateEntries
		}
		function getEntry(a) {
			var b = a.__js_key;
			return stateEntries[b] || (stateEntries[b] = {
				ownerCid: a.cid,
				state: {}
			})
		}
		function removeEntry(a) {
			var b = a.cid;
			if(!a.__js_key || a.__js_key === b) {
				var c = stateEntries[b];
				c && c.ownerCid === b && delete stateEntries[b]
			}
		}
		function flushOnLoadCallbacks(a) {
			var b, c = a.cid,
				d = onLoadCallbacks[c];
			if(d) {
				d.reverse();
				while(b = d.pop()) b()
			}
		}
		function cidFromMyId(a) {
			var b = _my_exp.exec(a),
				c = b && b[1];
			return assert(!c || c in W2._components), c
		}
		function onLoad(a, b) {
			var c, d, e = [],
				f, g = require("w2.timing").timing;
			rec("webnode2", "onLoad", "start");
			for(c = 0; c < a.length; c++) {
				d = a[c], onLoadStatus[d.cid] = ONLOAD_BEGUN;
				var h = +(new Date),
					i;
				if(settings.componentDebug) d.bindEvents(), d.onLoad(b), d.keyEvents && (i = W2._domids[d.cid]) && $("#" + i).append($("<keyevent></keyevent>").attr("cid", d.cid)), onLoadStatus[d.cid] = ONLOAD_DONE, flushOnLoadCallbacks(d);
				else try {
					d.bindEvents(), d.onLoad(b), d.keyEvents && (i = W2._domids[d.cid]) && $("#" + i).append($("<keyevent></keyevent>").attr("cid", d.cid)), onLoadStatus[d.cid] = ONLOAD_DONE, flushOnLoadCallbacks(d)
				} catch(j) {
					e.push({
						component: d,
						exception: j
					})
				}
				g.components && (g.components[d.cid] || (g.components[d.cid] = {}), g.components[d.cid].l = +(new Date) - h)
			}
			rec("webnode2", "onLoad", "finish"), a.length > 0 && jQuery.isFunction(window._w2replay) && window._w2replay(function(a, b) {
				var c = !0;
				for(var d, e = a; e; e = e.parentNode) if(d = cidFromMyId(e.id)) break;
				return d && (onLoadStatus[d] === ONLOAD_DONE ? jQuery(a).trigger(b) : c = !1), c
			}), rec("webnode2", "replay", "finish");
			if(f = e.length) {
				c = 0;
				for(var k = []; c < e.length; ++c) k.push(e[c].component.cid + ": " + e[c].exception);
				throw $.serverLog(f + " component(s) threw during onLoad", "ERROR", k.join(", ")), assert(!1), e
			}
			return a
		}
		function onVisible() {
			var a, b, c = [],
				d, e = require("w2.timing").timing;
			for(a in W2._onVisibleComponents) {
				b = W2._onVisibleComponents[a];
				if(b != W2._components[a]) continue;
				var f = +(new Date);
				try {
					b.onVisible()
				} catch(g) {
					c.push({
						component: b,
						exception: g
					})
				}
				e.components && (e.components[a] || (e.components[a] = {}), e.components[a].v = +(new Date) - f)
			}
			if(d = c.length) throw $.serverLog(d + " component(s) threw during onVisible", "ERROR", c), c
		}
		function _CIDLookup(a, b) {
			var c;
			return a && a != "*ROOT*" ? (require("assert").ok(W2._knowsAbout[a]), c = W2._knowsAbout[a][b], typeof c != "undefined" ? _cQueryByCID(a, c) : _CIDLookup(W2._parents[a], b)) : null
		}
		function _safeGetComponentByCID(a) {
			var b;
			return a ? (b = W2._components[a], b ? b : new VirtualComponent(a)) : null
		}
		function _cQueryByCID(a, b) {
			var c, d, e, f, g, h, i, j, k, l;
			if(b == ".") return a;
			c = [], d = "", e = "first";
			for(f = 0; f < b.length; f++) g = b.charAt(f), g == "." ? (c.push([e, d]), d = "", e = "child") : g == ":" ? (c.push([e, d]), d = "", e = "lookup") : g == "<" ? (c.push([e, d]), d = "", e = "parent") : d += g;
			c.push([e, d]), h = a;
			for(f = 0; f < c.length; f++) {
				j = c[f], i = j[0], k = j[1];
				if(i == "first") {
					if(k) {
						l = W2._children[h];
						if(!l) return null;
						h = l[k];
						if(!h) throw new W2Error("Couldn't find child '" + k + "' in cQuery '" + b + "'", a)
					}
					if(!h) throw new W2Error("Started from an invalid node '" + h + "' in cQuery '" + b + "'", a)
				} else if(i == "child") {
					l = W2._children[h];
					if(!l) return null;
					h = l[k];
					if(!h) throw new W2Error("Couldn't find child '" + k + "' in cQuery '" + b + "'", a)
				} else if(i == "lookup") {
					h = _CIDLookup(h, k);
					if(!h) throw new W2Error("Lookup failed for '" + k + "' in cQuery '" + b + "'", a)
				} else {
					if(i != "parent") throw new W2Error("Bad token in Component query. '" + i + "'", a);
					h = W2._parents[h];
					if(!h || h == "*ROOT*") throw new W2Error("No parent found in cQuery '" + b + "'", a)
				}
				if(!h) throw new W2Error("Unknown Error in cQuery: '" + b + "'", a)
			}
			return h
		}
		function W2Error(a, b) {
			this.message = this.errorType + ": " + a, b && (this.message += " <cid=" + b + ">")
		}
		function _assertIDs(a, b) {
			if(a.nodeType != 3) {
				a.id && (a.id in b && assert(a === b[a.id]), b[a.id] = a);
				for(var c = a.firstChild; c; c = c.nextSibling) _assertIDs(c, b)
			}
			return b
		}
		var W2 = exports,
			settings = require("settings"),
			Component, VirtualComponent, setContent, setContentHTML, setContentJS;
		W2._parents = {}, W2._components = {}, W2._onVisibleComponents = {}, W2._children = {}, W2._knowsAbout = {}, W2._allChildren = {}, W2._domids = {}, W2._domidToCid = {}, W2._debugInfo = {}, W2._ignoreDomids = {}, W2._ignoreCids = {}, W2._groups = {}, W2._componentGroups = {}, W2._GROUP_RE = /%([0-9a-zA-Z_]+)/;
		var stateEntries = {},
			Component = require("Class").Class.extend({
				__init__: function(a, b, c, d, e) {
					this.cid = a, this.cname = b, d ? this.__vcon = d.split(":") : this.__vcon = null, this.__js_init = c, this.__js_key = e.js_key || a;
					if(d && hasEntry(this)) {
						var f = getEntry(this);
						assert(f.ownerCid !== this.cid), f.ownerCid = this.cid
					}
					return this.init(c), this
				},
				init: function(a) {
					var b;
					if(typeof a == "object") for(b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
					return this
				},
				whenOnLoaded: function(a) {
					var b = this.cid;
					if(onLoadStatus[b] === ONLOAD_DONE) a();
					else {
						var c = onLoadCallbacks[b] || [];
						c.push(a), onLoadCallbacks[b] = c
					}
				},
				state: function(a, b) {
					var c = getEntry(this),
						d = c.state,
						e = W2._components[c.ownerCid] || this,
						f = e.stateHandlers[a],
						g = f ? d[a] = f.call(e) : d[a];
					return arguments.length > 1 && (d[a] = b, f && f.call(e, b)), g
				},
				stateHandlers: {},
				initState: function(a, b) {
					var c = getEntry(this),
						d = c.state,
						e = W2._components[c.ownerCid] || this;
					return e.state(a, a in d ? d[a] : b)
				},
				child: function(a) {
					var b, c;
					return c = W2._children[this.cid], c && (b = c[a]), _safeGetComponentByCID(b)
				},
				children: function() {
					var a = W2._allChildren[this.cid],
						b = [],
						c;
					if(!a) return b;
					for(c = 0; c < a.length; c++) b.push(_safeGetComponentByCID(a[c]));
					return b
				},
				parent: function() {
					var a;
					return a = W2._parents[this.cid], _safeGetComponentByCID(a)
				},
				getJQueryObject: function() {
					return $("#" + W2.getLiveParent(this.cid))
				},
				installScrollHandlers: function(a) {
					this._scrollHandler = this.fnbind(a), $(window).scroll(this._scrollHandler)
				},
				uninstallScrollHandlers: function() {
					this._scrollHandler && $(window).unbind("scroll", this._scrollHandler)
				},
				clickHandlers: {},
				mouseDownHandlers: {},
				mouseUpHandlers: {},
				mouseOverHandlers: {},
				mouseOutHandlers: {},
				installMouseHandlers: function() {
					var a = this,
						b = {
							clickHandlers: "click",
							mouseDownHandlers: "mousedown",
							mouseUpHandlers: "mouseup",
							mouseOverHandlers: "mouseover",
							mouseOutHandlers: "mouseout"
						};
					for(var c in b) {
						var d = b[c],
							e = this[c];
						for(var f in e)(function(b) {
							var c = e[b];
							a.$("#@" + b).bind(d, function(b) {
								return b.preventDefault(), c.call(a, b)
							})
						})(f)
					}
				},
				lookup: function(a, b) {
					try {
						var c = _CIDLookup(this.cid, a);
						return _safeGetComponentByCID(c)
					} catch(d) {
						if(!b) throw d
					}
				},
				cQuery: function(a) {
					var b;
					return b = _cQueryByCID(this.cid, a), _safeGetComponentByCID(b)
				},
				$: function(a) {
					var b, c, d;
					b = this._my();
					if(typeof a == "string") {
						a = a.replace(/@/g, b);
						if(a.indexOf("%") != -1) while(c = W2._GROUP_RE.exec(a)) {
							d = W2._groups[c[1]];
							if(typeof d == "undefined") return $([]);
							a = a.replace(c[0], "#" + d.join(",#"))
						}
					}
					return $(a)
				},
				_my: function() {
					return "__w2_" + this.cid + "_"
				},
				__children: function() {
					return W2._children[this.cid]
				},
				__allChildren: function() {
					return W2._allChildren[this.cid]
				},
				__parent: function() {
					return W2._parents[this.cid]
				},
				__knowsAbout: function() {
					return W2._knowsAbout[this.cid]
				},
				ge: function(a) {
					return document.getElementById(a.replace("@", this._my()))
				},
				onLoad: function(a) {},
				bindEvents: function() {
					var a = this.events;
					if(!a) return;
					for(var b in a) {
						var c = b.indexOf(" ");
						c > -1 && this.bindEvent(b.slice(0, c), b.slice(c + 1), a[b])
					}
				},
				bindEvent: function(a, b, c) {
					var d = this;
					typeof c == "string" && (c = d[c]), assert(typeof a == "string"), assert(typeof b == "string"), assert(typeof c == "function"), d.$(b)[a](function() {
						return c.apply(d, arguments)
					})
				},
				onUnload: function() {},
				onInsertNode: function(a, b) {
					return !0
				},
				onDeleteNode: function(a, b) {
					return !0
				},
				onUpdate: function(a) {
					return !0
				},
				serverCall: function(a) {
					if(!this.__vcon) throw new W2Error("No vcon info for Component <cid=" + this.cid + ">");
					switch(this.__vcon[0]) {
					case "cls":
						return new W2._ServerCall(this.__vcon, a, this);
					case "live":
						return new W2._ServerCall(this.__vcon.slice(2), a, this);
					default:
						throw new W2Error("Unknown vcon type '" + this.__vcon[0] + "'")
					}
				},
				bind: function(a, b) {
					if("length" in this) throw new W2Error("Cannot bind an event for Component with length property", this);
					$(this).bind(a, b)
				},
				trigger: function(a) {
					$(this).trigger(a, Array.prototype.slice.call(arguments, 1))
				}
			}),
			onLoadStatus = {},
			ONLOAD_BEGUN = 1,
			ONLOAD_DONE = 2,
			onLoadCallbacks = {},
			_my_exp = /^__w2_((?:[^_]+_)?[^_]+)/;
		VirtualComponent = Component.extend({
			__init__: function(a) {
				this._super(a, null, {}, null, {}), this.isVirtual = !0
			}
		}), W2Error.prototype = new Error, W2Error.prototype.errorType = "W2Error", W2Error.prototype.contstructor = W2Error;
		var setContent = function(a, b) {
				return setContentHTML(a, b), setContentJS(a, b), a
			},
			setContentHTML = function(a, b) {
				return a.innerHTML = b.html, delete b.html, a
			},
			setContentJS = function(node, content) {
				return eval(content.js), delete content.js, node
			},
			unloaded = {},
			unloadComponent = function(a) {
				for(var b = _getDescendants(a), c = 0, d; c < b.length; ++c)(d = W2._components[b[c]]) && d.onUnload();
				_removeComponentMetadata(a, b), unloaded[a] = !0
			};
		W2.assertUnloaded = function(a) {
			assert(a in unloaded)
		}, W2.addParents = addParents, W2.addChildren = addChildren, W2.addLookups = addLookups, W2.addDebugInfo = addDebugInfo, W2.addGroups = addGroups, W2.addDomids = addDomids, W2.registerComponents = registerComponents, W2.getComponentFromElement = getComponentFromElement, W2.getLiveDomId = getLiveDomId, W2.getLiveParent = getLiveParent, W2.Component = Component, W2.VirtualComponent = VirtualComponent, W2.onLoad = onLoad, W2.onVisible = onVisible, W2.addComponentMetadata = addComponentMetadata, W2._safeGetComponentByCID = _safeGetComponentByCID, W2.W2Error = W2Error, W2.setContent = setContent, W2.setContentHTML = setContentHTML, W2.setContentJS = setContentJS, W2._getDescendants = _getDescendants, W2._removeComponentMetadata = _removeComponentMetadata, W2.unloadComponent = unloadComponent, W2.C = W2._components, W2._stateEntries = stateEntries, W2._onLoadStatus = onLoadStatus, W2._onLoadCallbacks = onLoadCallbacks, W2.assertAllIDsUnique = function(a) {
			return _assertIDs(a || document.body, {})
		}, require("w2.keyevent")
	})(), exports.__W2_ExampleJSComponent = exports.Component.extend({
		init: function(a) {
			this.dataFromPython = a
		},
		onLoad: function() {
			a1ert("Hello webnode2!")
		}
	})
}), function(a) {
	a.fn.dialog = function(a) {
		return this.each(function() {
			new c(this, a)
		})
	};
	var b = {
		id: "generic_dialog",
		title: "Title",
		contents: "",
		comment_form: "",
		mobile: null,
		buttons: {
			Ok: null,
			Cancel: null
		},
		class_: "",
		w: "w4"
	};
	a.dialog = function(c, d) {
		var e = this;
		this.o = a(c), this.opts = a.extend({}, b, d || {}), this.mobile = this.opts.mobile != null ? this.opts.mobile : require("settings").mobile;
		if(a("#" + this.opts.id).length > 0) {
			a("#" + this.opts.id).show();
			return
		}
		this.opts.buttons != null && (this.opts.buttons.Ok === null && (this.opts.buttons.Ok = function() {
			e.btnOk()
		}), this.opts.buttons.Cancel === null && (this.opts.buttons.Cancel = function() {
			e.btnCancel()
		}));
		if(this.opts.url) {
			var f = this.opts.id + "_loading",
				g = this.opts.contents || '<div style="overflow:hidden;"><span class="__wn2_loading"><span class="__wn2_loading_spinner"></span><span class="__wn2_loading_text">Loading...</span></span></div>';
			this.opts.contents = '<div id="' + f + '"><div class="__wn2_loading_wrapper">' + g + "</div></div>";
			var h = this.opts.urlData || {},
				i = require("webnode2");
			h.___W2_scope = "__dialog__", h.___W2_windowId = i.windowId, a.get(this.opts.url, h, function(a) {
				var b = document.getElementById(f);
				i.setContent(b, a)
			}, "json")
		}
		return this.mobile && (this.opts.w = ""), this.render(), this
	};
	var c = a.dialog;
	c.fn = c.prototype = {
		dialog: "0.0.1"
	}, c.fn.extend = c.extend = a.extend, c.fn.extend({
		btnOk: function() {
			this.close()
		},
		btnCancel: function() {
			this.close()
		},
		close: function() {
			a("#" + this.opts.id).remove()
		},
		hide: function() {
			a("#" + this.opts.id).hide()
		},
		render: function() {
			var b = "";
			this.opts.title ? (b = a("<div/>").addClass("dialog_wrapper").append(a("<h2/>").addClass("dialog_frame").addClass("dialog_header").text(this.opts.title)), this.opts.contents && b.append(a("<div/>").addClass("dialog_frame").addClass("dialog_contents").html(this.opts.contents)), this.opts.comment_form != "" && b.append(a("<div/>").addClass("dialog_frame").addClass("dialog_contents").append(this.renderCommentForm(this.opts.comment_form)))) : b = a("<div/>").addClass("dialog_component").html(this.opts.contents), this.o.append(a("<div/>").addClass("dialog").addClass(this.opts.w).addClass(this.opts.class_).attr("id", this.opts.id).append(b)), this.opts.buttons != null && a(".dialog_wrapper").append(a("<div/>").addClass("dialog_frame").addClass("dialog_buttons").append(a("<div/>").addClass("dialog_buttons_contents").html(this.renderButtons())));
			if(this.mobile) window.scrollTo(0, 1), a(".dialog").css("top", "0px"), a(".dialog").css("left", "0px");
			else {
				var c = a(window).scrollTop(),
					d = c + 150,
					e = a(window).width() / 2 - a(".dialog").width() / 2;
				a(".dialog").css("top", d + "px"), a(".dialog").css("left", e + "px")
			}
			this.opts.comment_form != "" && a("#dialog_comment").focus();
			var f = this;
			return a(document).keydown(function(a) {
				return f.keydown(a)
			}), !1
		},
		keydown: function(b) {
			var c = b || window.event;
			if(c.keyCode == 27) return this.close(), a(document).unbind(), !1
		},
		renderCommentForm: function(b) {
			if(!b || b == "") b = "Add a Comment";
			return a("<div/>").append(a("<h3/>").text(b + ":")).append(a("<textarea/>").attr("id", "dialog_comment"))
		},
		renderButtons: function() {
			var b = this,
				c = a("<div/>");
			return a.each(this.opts.buttons, function(d, e) {
				var f = "submit_button";
				d == "Cancel" ? f = "cancel" : d == "Close" && (f = "action_button");
				var g = a("<a/>").addClass("dialog_button").addClass(f).attr("id", d).html(d).click(e);
				b.opts.buttons_hide_on_close ? g = g.click(function() {
					b.hide()
				}) : g = g.click(function() {
					b.close()
				}), c.append(g)
			}), c
		}
	})
}(jQuery), require.install("jquery.dialog", function() {}), function(a) {
	a.fn.tooltip = function(a) {
		return this.each(function() {
			new c(this, a)
		})
	};
	var b = {
		id: "tooltip",
		contents: "",
		delay: 75,
		class_: "tooltip"
	};
	a.tooltip = function(c, d) {
		if(a("body").hasClass("mobile")) return;
		var e = this;
		this.o = a(c), this.opts = a.extend({}, b, d || {});
		var e = this;
		this.o.hover(function() {
			e.render()
		}, function() {
			e.close()
		})
	};
	var c = a.tooltip;
	c.fn = c.prototype = {
		tooltip: "0.0.1"
	}, c.fn.extend = c.extend = a.extend, c.fn.extend({
		to: null,
		btnOk: function() {
			this.close()
		},
		btnCancel: function() {
			this.close()
		},
		close: function() {
			clearTimeout(this.to), this.to = null, this.tt = null, this.o.removeClass("tooltip_parent"), a("." + this.opts.class_).remove()
		},
		render: function() {
			a(".tooltip_parent").removeClass("tooltip_parent"), a("." + this.opts.class_).remove(), this.set_tooltip(), this.o.addClass("tooltip_parent"), this.o.append(this.tt), this.tt.hide();
			var b = this.tt.height() + 5;
			this.tt.css("top", "-" + b + "px");
			var c = this,
				d = function() {
					c.tt.fadeIn(500)
				};
			this.to = setTimeout(d, this.opts.delay)
		},
		set_tooltip: function() {
			this.tt = a("<div/>").addClass(this.opts.class_).append(a("<div/>").addClass("tooltip_contents").append(a("<span/>").text(this.opts.contents))).append(a("<div/>").addClass("tooltip_nub").html(""))
		}
	})
}(jQuery), require.install("jquery.tooltip", function() {}), function(a) {
	a.fn.menu = function(a, b) {
		return this.each(function() {
			new d(this, a, b)
		})
	};
	var b = {
		id: "generic_menu",
		open: !1,
		url: null,
		list_items: {},
		position_relative: !1,
		position_adjust: null,
		align_right: !1,
		close_on_click: !0
	},
		c = null;
	a.menu = function(c, d, e) {
		this.o = a(c), this.handle = d, this.opts = a.extend({}, b, e || {}), this.render();
		var f = this;
		return a(document).click(function() {
			f.close()
		}), this.opts.close_on_click && a(".menu_list_item a").click(function() {
			f.close()
		}), a(".menu_list_item a.close_on_click").click(function() {
			f.close()
		}), !1
	};
	var d = a.menu;
	d.fn = d.prototype = {
		menu: "0.0.1"
	}, d.fn.extend = d.extend = a.extend, d.fn.extend({
		close: function() {
			this.o.addClass("hidden"), this.handle.removeClass("menu_active")
		},
		render: function() {
			if(a("#" + this.opts.id).length > 0) return !1;
			this.handle.toggleClass("menu_active");
			if(this.opts.url) {
				var b = this;
				this.o.append(a("<div/>").addClass("menu").attr("id", this.opts.id).setContentFromAJAXComponent(this.opts.url, this.opts.pars))
			} else this.position(), this.o.toggleClass("hidden")
		},
		position: function() {
			var a = null,
				b = this.handle.innerHeight();
			this.opts.position_relative ? (a = this.handle.position(), a.top -= 3, a.left -= 5) : a = this.handle.offset(), this.opts.position_adjust && (b += this.opts.position_adjust);
			var c = a.left;
			this.opts.align_right && (c -= this.o.width() - this.handle.innerWidth()), this.o.css("top", a.top + b + "px"), this.o.css("left", c + "px")
		}
	})
}(jQuery), require.install("jquery.menu", function() {}), jQuery.addTempTopic = function(a) {
	return this.id = a, this.topic_name = $("#" + a).val(), $(".topic_placeholder").addClass("hidden"), $(".topics_list").append($("<li/>").append($("<a/>").attr("href", "#").attr("class", "topic_name").text(this.topic_name)).append($("<a/>").attr("href", "#").attr("class", "topic_remove").text("").click(function() {
		return $(this).parent().remove(), !1
	})).attr("class", "topic_list_item")), $("#" + a).val(""), !1
}, require.install("jquery.topic", function() {}), function(a) {
	a.belowthefold = function(b, c) {
		var d = a(window).height() + a(window).scrollTop();
		return d <= a(b).offset().top - c.threshold
	}, a.abovethetop = function(b, c) {
		var d = a(window).scrollTop();
		return d >= a(b).offset().top + a(b).height() - c.threshold
	}, a.rightofscreen = function(b, c) {
		var d = a(window).width() + a(window).scrollLeft();
		return d <= a(b).offset().left - c.threshold
	}, a.leftofscreen = function(b, c) {
		var d = a(window).scrollLeft();
		return d >= a(b).offset().left + a(b).width() - c.threshold
	}, a.inviewport = function(b, c) {
		return !a.rightofscreen(b, c) && !a.leftofscreen(b, c) && !a.belowthefold(b, c) && !a.abovethetop(b, c)
	}, a.extend(a.expr[":"], {
		"below-the-fold": function(b, c, d) {
			return a.belowthefold(b, {
				threshold: 0
			})
		},
		"above-the-top": function(b, c, d) {
			return a.abovethetop(b, {
				threshold: 0
			})
		},
		"left-of-screen": function(b, c, d) {
			return a.leftofscreen(b, {
				threshold: 0
			})
		},
		"right-of-screen": function(b, c, d) {
			return a.rightofscreen(b, {
				threshold: 0
			})
		},
		"in-viewport": function(b, c, d) {
			return a.inviewport(b, {
				threshold: 0
			})
		}
	})
}(jQuery), require.install("jquery.viewport", function() {}), function(a) {
	var b = ["async", "beforeSend", "cache", "complete", "contentType", "data", "dataFilter", "dataType", "error", "global", "ifModified", "jsonp", "password", "processData", "scriptCharset", "success", "timeout", "type", "url", "username", "xhr"],
		c = {};
	a.each(b, function(a, b) {
		c[b] = function(a) {
			return this.__options[b] = a, this
		}, c["_" + b] = function() {
			return this.__options[b]
		}
	}), c._options = function() {
		var c = {},
			d = this;
		return a.each(b, function(a, b) {
			c[b] = d["_" + b]()
		}), c
	}, c.options = function(b) {
		if(b) {
			var c = this;
			a.each(b, function(a, b) {
				c[a](b)
			})
		}
		return this
	}, c.__init__ = function(a) {
		return this.__options = {
			data: null
		}, this.options(a), this
	}, c.send = function(b) {
		return this.options(b), a.ajax(this._options())
	}, a.Ajax = require("Class").Class.extend(c)
}(jQuery), require.install("jquery.ajax", function() {}), jQuery.effects ||
function(a) {
	function b(b, c) {
		var d = b[1] && b[1].constructor == Object ? b[1] : {};
		c && (d.mode = c);
		var e = b[1] && b[1].constructor != Object ? b[1] : d.duration ? d.duration : b[2];
		e = a.fx.off ? 0 : typeof e == "number" ? e : a.fx.speeds[e] || a.fx.speeds._default;
		var f = d.callback || a.isFunction(b[1]) && b[1] || a.isFunction(b[2]) && b[2] || a.isFunction(b[3]) && b[3];
		return [b[0], d, e, f]
	}
	function c(b) {
		var c;
		return b && b.constructor == Array && b.length == 3 ? b : (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)] : (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) ? [parseFloat(c[1]) * 2.55, parseFloat(c[2]) * 2.55, parseFloat(c[3]) * 2.55] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) ? [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)] : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) ? [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)] : (c = /rgba\(0, 0, 0, 0\)/.exec(b)) ? e.transparent : e[a.trim(b).toLowerCase()]
	}
	function d(b, d) {
		var e;
		do {
			e = a.curCSS(b, d);
			if(e != "" && e != "transparent" || a.nodeName(b, "body")) break;
			d = "backgroundColor"
		} while (b = b.parentNode);
		return c(e)
	}
	a.effects = {
		version: "1.7.2",
		save: function(a, b) {
			for(var c = 0; c < b.length; c++) b[c] !== null && a.data("ec.storage." + b[c], a[0].style[b[c]])
		},
		restore: function(a, b) {
			for(var c = 0; c < b.length; c++) b[c] !== null && a.css(b[c], a.data("ec.storage." + b[c]))
		},
		setMode: function(a, b) {
			return b == "toggle" && (b = a.is(":hidden") ? "show" : "hide"), b
		},
		getBaseline: function(a, b) {
			var c, d;
			switch(a[0]) {
			case "top":
				c = 0;
				break;
			case "middle":
				c = .5;
				break;
			case "bottom":
				c = 1;
				break;
			default:
				c = a[0] / b.height
			}
			switch(a[1]) {
			case "left":
				d = 0;
				break;
			case "center":
				d = .5;
				break;
			case "right":
				d = 1;
				break;
			default:
				d = a[1] / b.width
			}
			return {
				x: d,
				y: c
			}
		},
		createWrapper: function(a) {
			if(a.parent().is(".ui-effects-wrapper")) return a.parent();
			var b = {
				width: a.outerWidth(!0),
				height: a.outerHeight(!0),
				"float": a.css("float")
			};
			a.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');
			var c = a.parent();
			if(a.css("position") == "static") c.css({
				position: "relative"
			}), a.css({
				position: "relative"
			});
			else {
				var d = a.css("top");
				isNaN(parseInt(d, 10)) && (d = "auto");
				var e = a.css("left");
				isNaN(parseInt(e, 10)) && (e = "auto"), c.css({
					position: a.css("position"),
					top: d,
					left: e,
					zIndex: a.css("z-index")
				}).show(), a.css({
					position: "relative",
					top: 0,
					left: 0
				})
			}
			return c.css(b), c
		},
		removeWrapper: function(a) {
			return a.parent().is(".ui-effects-wrapper") ? a.parent().replaceWith(a) : a
		},
		setTransition: function(b, c, d, e) {
			return e = e || {}, a.each(c, function(a, c) {
				var f = b.cssUnit(c);
				f[0] > 0 && (e[c] = f[0] * d + f[1])
			}), e
		},
		animateClass: function(b, c, d, e) {
			var f = typeof d == "function" ? d : e ? e : null,
				g = typeof d == "string" ? d : null;
			return this.each(function() {
				var d = {},
					e = a(this),
					h = e.attr("style") || "";
				typeof h == "object" && (h = h.cssText), b.toggle && (e.hasClass(b.toggle) ? b.remove = b.toggle : b.add = b.toggle);
				var i = a.extend({}, document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle);
				b.add && e.addClass(b.add), b.remove && e.removeClass(b.remove);
				var j = a.extend({}, document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle);
				b.add && e.removeClass(b.add), b.remove && e.addClass(b.remove);
				for(var k in j) typeof j[k] != "function" && j[k] && k.indexOf("Moz") == -1 && k.indexOf("length") == -1 && j[k] != i[k] && (k.match(/color/i) || !k.match(/color/i) && !isNaN(parseInt(j[k], 10))) && (i.position != "static" || i.position == "static" && !k.match(/left|top|bottom|right/)) && (d[k] = j[k]);
				e.animate(d, c, g, function() {
					typeof a(this).attr("style") == "object" ? (a(this).attr("style").cssText = "", a(this).attr("style").cssText = h) : a(this).attr("style", h), b.add && a(this).addClass(b.add), b.remove && a(this).removeClass(b.remove), f && f.apply(this, arguments)
				})
			})
		}
	}, a.fn.extend({
		_show: a.fn.show,
		_hide: a.fn.hide,
		__toggle: a.fn.toggle,
		_addClass: a.fn.addClass,
		_removeClass: a.fn.removeClass,
		_toggleClass: a.fn.toggleClass,
		effect: function(b, c, d, e) {
			return a.effects[b] ? a.effects[b].call(this, {
				method: b,
				options: c || {},
				duration: d,
				callback: e
			}) : null
		},
		show: function() {
			return !arguments[0] || arguments[0].constructor == Number || /(slow|normal|fast)/.test(arguments[0]) ? this._show.apply(this, arguments) : this.effect.apply(this, b(arguments, "show"))
		},
		hide: function() {
			return !arguments[0] || arguments[0].constructor == Number || /(slow|normal|fast)/.test(arguments[0]) ? this._hide.apply(this, arguments) : this.effect.apply(this, b(arguments, "hide"))
		},
		toggle: function() {
			return !arguments[0] || arguments[0].constructor == Number || /(slow|normal|fast)/.test(arguments[0]) || a.isFunction(arguments[0]) || typeof arguments[0] == "boolean" ? this.__toggle.apply(this, arguments) : this.effect.apply(this, b(arguments, "toggle"))
		},
		addClass: function(b, c, d, e) {
			return c ? a.effects.animateClass.apply(this, [{
				add: b
			},
			c, d, e]) : this._addClass(b)
		},
		removeClass: function(b, c, d, e) {
			return c ? a.effects.animateClass.apply(this, [{
				remove: b
			},
			c, d, e]) : this._removeClass(b)
		},
		toggleClass: function(b, c, d, e) {
			return typeof c != "boolean" && c ? a.effects.animateClass.apply(this, [{
				toggle: b
			},
			c, d, e]) : this._toggleClass(b, c)
		},
		morph: function(b, c, d, e, f) {
			return a.effects.animateClass.apply(this, [{
				add: c,
				remove: b
			},
			d, e, f])
		},
		switchClass: function() {
			return this.morph.apply(this, arguments)
		},
		cssUnit: function(b) {
			var c = this.css(b),
				d = [];
			return a.each(["em", "px", "%", "pt"], function(a, b) {
				c.indexOf(b) > 0 && (d = [parseFloat(c), b])
			}), d
		}
	}), a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function(b, e) {
		a.fx.step[e] = function(a) {
			a.state == 0 ? (a.start = d(a.elem, e), a.end = c(a.end)) : (typeof a.start == "number" && (a.start = [a.start, a.start, a.start]), typeof a.end == "number" && (a.end = [a.end, a.end, a.end])), a.elem.style[e] = "rgb(" + [Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255), 0), Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255), 0), Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255), 0)].join(",") + ")"
		}
	});
	var e = {
		aqua: [0, 255, 255],
		azure: [240, 255, 255],
		beige: [245, 245, 220],
		black: [0, 0, 0],
		blue: [0, 0, 255],
		brown: [165, 42, 42],
		cyan: [0, 255, 255],
		darkblue: [0, 0, 139],
		darkcyan: [0, 139, 139],
		darkgrey: [169, 169, 169],
		darkgreen: [0, 100, 0],
		darkkhaki: [189, 183, 107],
		darkmagenta: [139, 0, 139],
		darkolivegreen: [85, 107, 47],
		darkorange: [255, 140, 0],
		darkorchid: [153, 50, 204],
		darkred: [139, 0, 0],
		darksalmon: [233, 150, 122],
		darkviolet: [148, 0, 211],
		fuchsia: [255, 0, 255],
		gold: [255, 215, 0],
		green: [0, 128, 0],
		indigo: [75, 0, 130],
		khaki: [240, 230, 140],
		lightblue: [173, 216, 230],
		lightcyan: [224, 255, 255],
		lightgreen: [144, 238, 144],
		lightgrey: [211, 211, 211],
		lightpink: [255, 182, 193],
		lightyellow: [255, 255, 224],
		lime: [0, 255, 0],
		magenta: [255, 0, 255],
		maroon: [128, 0, 0],
		navy: [0, 0, 128],
		olive: [128, 128, 0],
		orange: [255, 165, 0],
		pink: [255, 192, 203],
		purple: [128, 0, 128],
		violet: [128, 0, 128],
		red: [255, 0, 0],
		silver: [192, 192, 192],
		white: [255, 255, 255],
		yellow: [255, 255, 0],
		transparent: [255, 255, 255]
	};
	a.easing.jswing = a.easing.swing, a.extend(a.easing, {
		def: "easeOutQuad",
		swing: function(b, c, d, e, f) {
			return a.easing[a.easing.def](b, c, d, e, f)
		},
		easeInQuad: function(a, b, c, d, e) {
			return d * (b /= e) * b + c
		},
		easeOutQuad: function(a, b, c, d, e) {
			return -d * (b /= e) * (b - 2) + c
		},
		easeInOutQuad: function(a, b, c, d, e) {
			return(b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
		},
		easeInCubic: function(a, b, c, d, e) {
			return d * (b /= e) * b * b + c
		},
		easeOutCubic: function(a, b, c, d, e) {
			return d * ((b = b / e - 1) * b * b + 1) + c
		},
		easeInOutCubic: function(a, b, c, d, e) {
			return(b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
		},
		easeInQuart: function(a, b, c, d, e) {
			return d * (b /= e) * b * b * b + c
		},
		easeOutQuart: function(a, b, c, d, e) {
			return -d * ((b = b / e - 1) * b * b * b - 1) + c
		},
		easeInOutQuart: function(a, b, c, d, e) {
			return(b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
		},
		easeInQuint: function(a, b, c, d, e) {
			return d * (b /= e) * b * b * b * b + c
		},
		easeOutQuint: function(a, b, c, d, e) {
			return d * ((b = b / e - 1) * b * b * b * b + 1) + c
		},
		easeInOutQuint: function(a, b, c, d, e) {
			return(b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
		},
		easeInSine: function(a, b, c, d, e) {
			return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
		},
		easeOutSine: function(a, b, c, d, e) {
			return d * Math.sin(b / e * (Math.PI / 2)) + c
		},
		easeInOutSine: function(a, b, c, d, e) {
			return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
		},
		easeInExpo: function(a, b, c, d, e) {
			return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
		},
		easeOutExpo: function(a, b, c, d, e) {
			return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
		},
		easeInOutExpo: function(a, b, c, d, e) {
			return b == 0 ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
		},
		easeInCirc: function(a, b, c, d, e) {
			return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
		},
		easeOutCirc: function(a, b, c, d, e) {
			return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
		},
		easeInOutCirc: function(a, b, c, d, e) {
			return(b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
		},
		easeInElastic: function(a, b, c, d, e) {
			var f = 1.70158,
				g = 0,
				h = d;
			if(b == 0) return c;
			if((b /= e) == 1) return c + d;
			g || (g = e * .3);
			if(h < Math.abs(d)) {
				h = d;
				var f = g / 4
			} else var f = g / (2 * Math.PI) * Math.asin(d / h);
			return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
		},
		easeOutElastic: function(a, b, c, d, e) {
			var f = 1.70158,
				g = 0,
				h = d;
			if(b == 0) return c;
			if((b /= e) == 1) return c + d;
			g || (g = e * .3);
			if(h < Math.abs(d)) {
				h = d;
				var f = g / 4
			} else var f = g / (2 * Math.PI) * Math.asin(d / h);
			return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
		},
		easeInOutElastic: function(a, b, c, d, e) {
			var f = 1.70158,
				g = 0,
				h = d;
			if(b == 0) return c;
			if((b /= e / 2) == 2) return c + d;
			g || (g = e * .3 * 1.5);
			if(h < Math.abs(d)) {
				h = d;
				var f = g / 4
			} else var f = g / (2 * Math.PI) * Math.asin(d / h);
			return b < 1 ? -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c
		},
		easeInBack: function(a, b, c, d, e, f) {
			return f == undefined && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
		},
		easeOutBack: function(a, b, c, d, e, f) {
			return f == undefined && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
		},
		easeInOutBack: function(a, b, c, d, e, f) {
			return f == undefined && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
		},
		easeInBounce: function(b, c, d, e, f) {
			return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d
		},
		easeOutBounce: function(a, b, c, d, e) {
			return(b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
		},
		easeInOutBounce: function(b, c, d, e, f) {
			return c < f / 2 ? a.easing.easeInBounce(b, c * 2, 0, e, f) * .5 + d : a.easing.easeOutBounce(b, c * 2 - f, 0, e, f) * .5 + e * .5 + d
		}
	})
}(jQuery), require.install("effects.core", function() {}), function(a) {
	a.effects.shake = function(b) {
		return this.queue(function() {
			var c = a(this),
				d = ["position", "top", "left"],
				e = a.effects.setMode(c, b.options.mode || "effect"),
				f = b.options.direction || "left",
				g = b.options.distance || 20,
				h = b.options.times || 3,
				i = b.duration || b.options.duration || 140;
			a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
			var j = f == "up" || f == "down" ? "top" : "left",
				k = f == "up" || f == "left" ? "pos" : "neg",
				l = {},
				m = {},
				n = {};
			l[j] = (k == "pos" ? "-=" : "+=") + g, m[j] = (k == "pos" ? "+=" : "-=") + g * 2, n[j] = (k == "pos" ? "-=" : "+=") + g * 2, c.animate(l, i, b.options.easing);
			for(var p = 1; p < h; p++) c.animate(m, i, b.options.easing).animate(n, i, b.options.easing);
			c.animate(m, i, b.options.easing).animate(l, i / 2, b.options.easing, function() {
				a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
			}), c.queue("fx", function() {
				c.dequeue()
			}), c.dequeue()
		})
	}
}(jQuery), require.install("effects.shake", function() {}), function(a) {
	a.effects.highlight = function(b) {
		return this.queue(function() {
			var c = a(this),
				d = ["backgroundImage", "backgroundColor", "opacity"],
				e = a.effects.setMode(c, b.options.mode || "show"),
				f = b.options.color || "#ffff99",
				g = c.css("backgroundColor");
			a.effects.save(c, d), c.show(), c.css({
				backgroundImage: "none",
				backgroundColor: f
			});
			var h = {
				backgroundColor: g
			};
			e == "hide" && (h.opacity = 0), c.animate(h, {
				queue: !1,
				duration: b.duration,
				easing: b.options.easing,
				complete: function() {
					e == "hide" && c.hide(), a.effects.restore(c, d), e == "show" && a.browser.msie && this.style.removeAttribute("filter"), b.callback && b.callback.apply(this, arguments), c.dequeue()
				}
			})
		})
	}
}(jQuery), require.install("effects.highlight", function() {}), require.install("atexit", function(require, a, b) {
	function e(a) {
		var b;
		while(b = a.pop()) try {
			b()
		} catch(c) {}
	}
	function f() {
		e(c)
	}
	var c = [],
		d = [];
	a.register = function(a, b) {
		d.length > 0 ? d[b ? d.length - 1 : 0].push(a) : (c.length || setTimeout(f, 10), c.push(a))
	}, a.hook = function(a) {
		return function() {
			d.push([]);
			try {
				return a.apply(this, arguments)
			} finally {
				e(d.pop())
			}
		}
	}
}), require.install("tchannel_up", function(require, a, b) {
	function c(a) {
		(new Function(a)).call(window)
	}
	var d = !1;
	a.stop = function() {
		d = !0
	}, a.start = function(a, b, e, f) {
		function p() {
			return(+(new Date)).toString(16) + Math.random().toString(16).split(".").pop()
		}
		function q(a) {
			function h(a, d) {
				return function(f) {
					if(d) {
						window[c] = null;
						try {
							delete window[c]
						} catch(g) {}
					}
					e !== -1 && (clearTimeout(e), e = -1, a(f), b.parentNode && b.parentNode.removeChild(b))
				}
			}
			var b = document.createElement("script"),
				c = a.callback = "jsonp" + p(),
				d = h(t),
				e = setTimeout(d, 7e4),
				f = "onreadystatechange",
				g = document.body;
			window[c] = h(s, !0), b.charset = "utf-8", b.src = k + $.param(a), b.addEventListener ? (b.addEventListener("load", d, !1), b.addEventListener("error", d, !1)) : b.attachEvent && b.attachEvent(f, function() {
				/loaded|complete/.test(b.readyState) && d(), b.detachEvent(f, arguments.callee)
			}), g.insertBefore(b, g.firstChild)
		}
		function r(c) {
			clearTimeout(i);
			var d = {
				min_seq: a,
				channel: b
			};
			m > 0 && (d.timeout = m), i = setTimeout(function() {
				q(d)
			}, c || 10)
		}
		function s(a) {
			h || (o.reportPageRegainedConnection(), h = !0);
			try {
				v(a)
			} catch(b) {
				o.reportPageNeedsReload("tchannel_error");
				return
			}
			g = 500, r()
		}
		function t(a) {
			if(l) return;
			g = Math.min(g * 2, 3e4), g >= 1e4 && h && (o.reportPageLostConnection(), h = !1), r(g)
		}
		function v(b) {
			if(b.error) throw b.error;
			var c = b.messages;
			if(!c) return;
			a = b.min_seq;
			for(var d = 0; d < c.length; ++d) u(c[d])
		}
		var g = 500,
			h = !0,
			i, j = "tch" + (Math.floor(Math.random() * 1e6) + 1) + ".tch." + f,
			k = window.location.protocol + "//" + j + "/up/" + e + "/updates?",
			l = !1,
			m = 2e3,
			n = 0,
			o = require("w2.livenode"),
			u = function() {
				function e() {
					if(d) return;
					var b = a.next;
					return b && (c(b.js), delete a.next, delete b.js, a = b), b
				}
				function f() {
					setTimeout(function() {
						var a = +(new Date);
						while(e()) if(new Date - a > 100) return f()
					}, 10)
				}
				var a = {},
					b = a;
				return function(c) {
					b = b.next = {
						js: c
					}, a.next === b && f()
				}
			}();
		$(window).bind("beforeunload", function() {
			l = !0
		}), $(window).bind("load", function() {
			setTimeout(function() {
				m = 0
			}, n), r(20)
		})
	}
}), require.install("w2.livenode", function(require, a, b) {
	function f(a, b, c) {
		if(b in a && !(c in a)) return a[c] = a[b], delete a[b], !0
	}
	function h(a, b, d) {
		console.log("on check livedep error: ", a, b, d), c = setTimeout(i, 1e3)
	}
	function i() {
		c && (clearTimeout(c), c = null);
		var a = require("webnode2");
		(new $.Ajax).url(window.location.protocol + "//" + location.hostname + "/check_livedeps/index?window_id=" + a.windowId + "&random=" + Math.random()).type("GET").error(h).send()
	}
	function j(a) {
		d.lazyComplete = a
	}
	function k() {
		return d.lazyComplete
	}
	function m() {
		var a = require("webnode2");
		a.interactionMode.resumeUpdates();
		var b = Math.random(),
			c = {};
		return c._lm_transaction_id = b, c._lm_window_id = a.windowId, l[b] = 1, p(), {
			transactionId: b,
			data: c
		}
	}
	function n(a, b) {
		delete l[a], d.requiredVersion = Math.max(b, d.requiredVersion), p()
	}
	function o(a) {
		d.currentVersion = a, r()
	}
	function p() {
		var a = 0,
			b;
		for(b in l) a++;
		d.pendingMutationCount = a, r()
	}
	function q() {
		require("tchannel_up").stop()
	}
	function r() {
		var a = require("webnode2");
		d.pendingMutationCount > 0 || d.currentVersion < d.requiredVersion ? a.Loading.show() : a.Loading && a.Loading.hide()
	}
	function s(a) {
		console.log("Page requires reload " + a), e || ($.serverLog("reportPageNeedsReload: " + a), e = !0);
		var b = require("webnode2");
		b.ConnectionWarning && b.ConnectionWarning.hide(), b.fallbackToPostReloadMode(a), b.interactionMode.$("#@message").html("<a href='javascript:window.location.reload();'>Please refresh this page to receive new updates.</a>"), b.interactionMode.startBlocking()
	}
	function t() {
		require("webnode2").ConnectionWarning.hide()
	}
	function u() {
		require("webnode2").ConnectionWarning.show()
	}
	window.console || (window.console = {}), window.console.log || (window.console.log = function() {}), require("jquery");
	var c = null,
		d = {
			interactionDelayedLivedepOperations: [],
			pendingMutationCount: 0,
			currentVersion: 0,
			requiredVersion: 0,
			lazyComplete: !1
		},
		e = !1,
		g = require("atexit").hook(function(a, b, c) {
			c = c || !1;
			var e = require("webnode2");
			if(a == "error") {
				console.log("LiveNode error"), s("error_response2");
				return
			}
			if(e.interactionMode._state == e.interactionMode._states.BLOCKING) return d.interactionDelayedLivedepOperations.push({
				data: a,
				textStatus: b
			}), !1;
			try {
				$.each(a, function(a, b) {
					f(b, "ty", "type"), f(b, "animation", "transition") && f(b.transition, "ty", "type"), f(b, "parentCid", "parent_cid"), f(b, "childCid", "child_cid"), f(b, "childDomid", "child_domid");
					var d, g = {};
					$("#" + b.domid + " [w2cid]").each(function(a, b) {
						d = b.getAttribute("w2cid"), g[d] = !0
					}), $.each(g, function(a, d) {
						var f = e.interactionMode._changedComponents[a];
						if(f && f != e.interactionMode._states.OFF) {
							if(!c) throw "blocking_interaction_mode";
							console.log("forcing override on live update conflict with cid=" + a + " on optype = " + b.type)
						}
					})
				})
			} catch(g) {
				if(typeof g == "string" && g == "blocking_interaction_mode") return e.interactionMode.startBlocking(), d.interactionDelayedLivedepOperations.push({
					data: a,
					textStatus: b
				}), !1;
				throw g
			}
			var h = !$.browser.msie && require("settings").feedAnchoring && $(window).scrollTop() > 0;
			h && $("div.feed_item:in-viewport").anchor(), $.each(a, function(a, b) {
				$(document).trigger("livenode_op_start", b);
				switch(b.type) {
				case "set_node":
					if(b.domid in e._ignoreDomids) break;
					var c = $("#" + b.domid);
					if(!c.length) {
						s("set_node_missing, op.domid = " + b.domid + ", op.cid = " + b.cid);
						return
					}
					var d = b.transition,
						f = e.getComponentFromElement(c.get(0));
					f && f.force_transition && (d = f.force_transition), assert("cid" in b), e.unloadComponent(b.cid), c.setContent(b.content);
					switch(d.type) {
					case "none":
						break;
					case "slide":
						break;
					case "highlight":
					default:
						c.effect("highlight", {}, 2e3)
					}
					break;
				case "insert_node":
					if(b.domid in e._ignoreDomids) break;
					var g = document.getElementById(b.domid);
					if(!g) {
						s("insert_node_missing, op.domid = " + b.domid + ", op.parent_cid = " + b.parent_cid);
						return
					}
					var i = document.createElement("DIV");
					e.setContentHTML(i, b.content);
					if(i.childNodes.length != 1) {
						console.log("error: append must give a single node"), s("append");
						return
					}
					var j = i.childNodes[0],
						k = j.id;
					j.style.display = "none", g.childNodes.length == b.position ? g.appendChild(j) : g.insertBefore(j, g.childNodes[b.position]), e.setContentJS(j, b.content);
					var l = e._components[b.parent_cid];
					l && l.onInsertNode(b, k);
					if(b.transition.type == "none") break;
					if(h || b.transition.type == "highlight_only") {
						$("#" + k).effect("highlight", {}, 2e3);
						break
					}
					var m = $("#" + k).height();
					j.style.height = 0, j.style.overflow = "hidden", j.style.clear = "both", j.style.display = "";

					function n() {
						j.style.overflow = "", j.style.height = "", j.style.clear = ""
					}
					$("#" + k).animate({
						height: m
					}, 300, "linear", n).effect("highlight", {}, 2e3);
					break;
				case "delete_node":
					if(b.domid in e._ignoreDomids) break;
					var g = document.getElementById(b.domid);
					if(!g) {
						s("delete_node_missing, op.domid = " + b.domid + ", op.parent_cid = " + b.parent_cid);
						return
					}
					if(!e._parents[b.parent_cid]) {
						s("delete_node_missing_component " + b.parent_cid);
						return
					}
					var o = g.childNodes[b.position];
					if(o.id != b.child_domid) {
						s("delete_node_wrong_child, node.id = " + o.id + ", op.child_domid = " + b.child_domid);
						return
					}
					var l = e._components[b.parent_cid];
					l && l.onDeleteNode(b, o.id), e.unloadComponent(b.child_cid), $("#" + o.id).removeEditors().remove();
					break;
				case "update_data":
					if(b.cid in e._ignoreCids) break;
					if(!e._parents[b.cid]) {
						s("update_data_missing_component, op.cid = " + b.cid + ", op.parent_cid = " + b.parent_cid);
						return
					}
					var f = e._components[b.cid];
					f && f.onUpdate(b.data);
					break;
				case "error":
					console.log("livedep error: " + b.error), s("error_response");
					return;
				default:
					console.log("bad op type: " + b.type), s("bad_type")
				}
			}), $(document).trigger("livenode_finish_operations")
		}),
		l = {},
		v = require("webnode2"),
		w = v.Component;
	a.ConnectionWarningCls = w.extend({
		init: function() {
			this._super.apply(this, arguments), require("webnode2").ConnectionWarning = this, this.showing = !1
		},
		show: function() {
			if(this.showing) return;
			this.showing = !0;
			if($(".main_content").length) var a = $(".main_content").offset().left + 100;
			this.$("#@warning").css("left", a + "px").show()
		},
		hide: function() {
			if(!this.showing) return;
			this.showing = !1, this.$("#@warning").hide()
		}
	}), a.LoadingCls = w.extend({
		init: function() {
			this._super.apply(this, arguments), v.Loading = this, this.t = null, this.showing = !1
		},
		show: function() {
			if(this.showing) return;
			this.showing = !0;
			var a = this.fnbind(function() {
				var a = $(".main_content").offset().left;
				this.$("#@loading").css("left", a + "px").show()
			});
			this.t = setTimeout(a, 750)
		},
		hide: function() {
			if(!this.showing) return;
			this.showing = !1, clearTimeout(this.t), this.t = null, this.$("#@loading").hide()
		}
	}), $.fn.aboveViewport = function(a) {
		return $(window).scrollTop() >= this.offset().top + this.height() - (a || 0)
	}, a.syncLivedeps = i, a.startMutation = m, a.onLivedepOperations = g, a.reportPageNeedsReload = s, a.reportPageRegainedConnection = t, a.reportPageLostConnection = u, a.setCurrentVersion = o, a.mutationDoneAfterVersion = n, a.checkLazyComplete = k, a.setLazyComplete = j, a.stopLiveUpdates = q, a.state = d
}), function(a) {
	function d(a) {
		if(!a || !a.parentNode) return !1;
		var b = a.getAttribute("id"),
			d;
		return a.setAttribute("id", c), d = !! document.getElementById(c), b ? a.setAttribute("id", b) : a.removeAttribute("id"), d
	}
	var b = require("lang/fun").bind;
	a.fn.forgetContents = function() {
		var a = require("webnode2");
		return this.find("*").map(function() {
			var b = a._domidToCid[this.id];
			if(!b) return;
			a._ignoreDomids[this.id] = 1, a._ignoreCids[b] = 1
		}), this
	}, a.fn.removeEditors = function() {
		return this.find(".qed_content").remove(), this
	}, a.fn.setContent = function(b) {
		this.removeEditors();
		var c = getYTPlayerStatuses(a(this));
		return typeof b == "string" ? this.html(b) : (this.setContentHTML(b), this.setContentJS(b)), restoreYTPlayerStatuses(this, c), this
	}, a.fn.setContentHTML = function(a) {
		var b = a.html;
		return delete a.html, this.html(b)
	}, a.fn.setContentJS = function(a) {
		var b = a.js;
		delete a.js, window.require.enqueue(new Function("require", "var W2 = require('webnode2'),LiveNode = require('w2.livenode');" + b))
	}, a.fn.setContentFromAJAXComponent = function(c, d, e, f, g, h, i) {
		var j = require("webnode2");
		return d = d || {}, d.___W2_parentId = e, d.___W2_windowId = j.windowId, d.___parent_domid = j.getLiveParent(e), f = f || '<span class="__wn2_loading"><span class="__wn2_loading_spinner"></span><span class="__wn2_loading_text">Loading...</span></span>', h = h || '<span style="color: red; font-weight: bold;">ERROR</span>', a.securepost(c, d, b(this, function(a) {
			a.___ERROR___ && (this.setContent(h), typeof i == "function" && i(a, a.___ERROR___)), this.setContent(a), typeof g == "function" && g(a)
		}), "json"), this.setContent(f), this
	};
	var c = (+(new Date)).toString(16);
	a.inDom = d;
	var e = !1;
	a.fn.anchor = function(b) {
		function i() {
			var b = {},
				f, g = 0,
				h, i, j = [, -1];
			while(h = c[g++]) {
				if(!d(h[0])) continue;
				f = a(h[0]).offset().top - h[1], i = b[f] = (b[f] || 0) + 1, j[1] < i && (j = [f, i])
			}
			j[1] != -1 && window.scrollTo(0, Math.round(j[0], 0)), e = !1
		}
		if(e || this.length < 1) return this;
		e = !0;
		var c = [],
			f = a(window).scrollTop();
		c.length = this.length;
		for(var g = 0, h; h = this[g]; ++g) c[g] = [h, a(h).offset().top - f];
		return b ? i : (require("atexit").register(i), this)
	}
}(jQuery), require.install("jquery.webnode2", function() {}), require.install("cookies", function(require, a, b) {
	function e(a, b, e) {
		return e = e || {}, e = $.extend({
			expires: 999999,
			path: "/",
			domain: d
		}, e), $.cookie(c.cookiePrefix + "-" + a, b, e)
	}
	function f(a, b) {
		var c = {
			key: a,
			args: b
		},
			d = Math.floor(Math.random() * 4294967296);
		e("qm-" + d, JSON.stringify(c), {
			expires: 1
		})
	}
	require("jquery.cookie");
	var c = require("settings"),
		d = ".quora.com";
	a.cookie = e, a.setMessage = f, a.setSingleUse = function(a, b, c) {
		e("qsu-" + a, b, c)
	}, a.setQfeedLog = function(a, b) {
		var c = a.getDvar("feed_story_hash");
		if(!c) return;
		var d = a.getDvar("feed_story_position");
		d == null && (d = 0);
		var e = a.getDvar("feed_story_initial");
		e || (e = !1);
		var g = a.getDvar("feed_ty");
		g == null && (g = 0);
		var h = a.getDvar("feed_page"),
			i = a.getDvar("page_data"),
			j = a.getDvar("feed_location");
		f("qfl", [5, c, d, e, b, g, h, i, j])
	}, a.setQueryLog = function(a, b) {
		var c = a.getDvar("query_id");
		if(c == null) return;
		var d = a.getDvar("index");
		d == null && (d = 0), f("qlch", [c,
		{
			type: b,
			index: d
		}])
	}, a.setTlog = function(a) {
		var b = c.trail;
		if(b == null || a == null) return;
		f("tlog", [b, a])
	}, a.setAnon = function() {
		e("anon", JSON.stringify(!0))
	}, a.setPublic = function() {
		e("anon", null)
	}
}), require.install("user_profiling", function(require, a, b) {
	function m() {
		var a = d.cookie(e);
		a && (i = JSON.parse(a))
	}
	function n() {
		d.cookie(e, JSON.stringify(i))
	}
	function o() {
		d.cookie(e, null)
	}
	function p() {
		var a;
		while(l.length >= h) a = l.shift(), delete k[a], delete j[a];
		while(!a || k[a]) a = Math.floor(Math.random() * 4294967296);
		return l.push(a), a
	}
	var c = require("assert"),
		d = require("cookies"),
		e = "upd",
		f = .3,
		g = 3,
		h = 20,
		i = {},
		j = {},
		k = {},
		l = [];
	a.RTT_RPC = 1, a.RTT_TOGGLE = 2, a.startTimer = function(a) {
		var b = p();
		return j[b] = +(new Date), k[b] = a, b
	}, a.stopTimer = function(a) {
		var b, c, d;
		if(!a || !(b = k[a]) || !j[a]) return;
		d = new Date - j[a], c = i[b], c = c ? (1 - f) * c + f * Math.max(c / g, Math.min(c * g, d)) : d, i[b] = Math.round(c), n()
	}, m(), require("settings").debug && (a._clearData = function() {
		i = {}, j = {}, k = {}, l.length = 0, o()
	}, a._getData = function() {
		return i
	}, a._getStart = function() {
		return j
	}, a._getMetrics = function() {
		return k
	}, a._getIds = function() {
		return l
	}, a._loadCookie = m, a._saveCookie = n, a._clearCookie = o)
}), require.install("window_manager", function(require, a, b) {
	require("jquery"), a.catchRedirectCallback = null;
	var c = function(a) {
			return /https?:\/\/[a-z.0-9_-]+\.quora\.com/i.test(a)
		},
		d = a.getDomain = function() {
			return /https?:\/\/[a-zA-Z.0-9_-]+\//.exec(f())[0]
		},
		e = a.getPathName = function() {
			return decodeURI(window.location.pathname)
		},
		f = a.getURL = function() {
			return decodeURI(window.location.href)
		},
		g = a.getHash = function() {
			return window.location.hash
		};
	a.isInHash = function(a) {
		var b = g();
		if(b.substr(0, 1) == "#") {
			b = b.replace("%23", "-");
			var c = b.substring(1).split("-");
			for(var d = 0; d < c.length; d++) if(c[d] == a) return !0
		}
	};
	var h = a.getTitle = function() {
			return document.title
		},
		i = a.setTitle = function(a) {
			document.title = a
		},
		j = a.reload = function() {
			window.location.reload()
		},
		k = function(a) {
			return a.indexOf("quora://") !== -1
		},
		l = a.handleClick = function(a, b) {
			b.which == 2 || b.metaKey ? window.open(a) : m(a)
		},
		m = a.navigateTo = function(b) {
			if(b == f() + "#") return;
			b.indexOf("/") == 0 && (b = d() + b.substring(1));
			if(b == "" || b == "#") return;
			if(!c(b) && !k(b)) window.open(b);
			else {
				var e = !0;
				a.catchRedirectCallback && (e = a.catchRedirectCallback(b)), e && (window.location = b)
			}
		}
}), function() {
	var a = require("webnode2"),
		b = require("settings").formkey,
		c = 0;
	a.postPerfInfoCallback = null, a.RPC = $.Ajax.extend({
		__init__: function(b) {
			this._super(a.RPC.defaults), this.options(b), this.__data = {
				args: [],
				kwargs: {}
			}, this.__success = null, this.error(this.fnbind(this._defaultErrorHandler)), this.__exceptionPatterns = {
				state_expired: function(a) {
					require("w2.livenode").reportPageNeedsReload("state_expired")
				}
			}, this.__exceptionCatchAll = null, this.__liveMutation = !1, this.__contentFor = !1, this.options(b), this.__persistMutation = !1
		},
		persistMutation: function() {
			return this.__persistMutation = !0, this
		},
		finishMutation: function() {
			if(this.__persistMutation) {
				var a = this.__persistMutationInfo.transactionId;
				require("w2.livenode").mutationDoneAfterVersion(a, 0)
			}
			this.__persistMutation = !1
		},
		liveMutate: function() {
			return this.__liveMutation = !0, this
		},
		contentFor: function(a, b) {
			a.jquery && (a = a.get(0)), this.__contentFor = !0;
			var c = $.extend(b, {
				domNode: a
			});
			!c.useLoadingSpinner && c.useLoadingSpinner !== !1 && (c.useLoadingSpinner = !0);
			if(!c.parentCID) throw new Error("must explicitly specify parentCID.");
			return c.domNode = a, this.__contentForOpts = c, this
		},
		send: function() {
			this.__liveMutation && (this.__liveMutationInfo = require("w2.livenode").startMutation()), this.__contentFor && this._contentForStartLoading(), this.__persistMutation && (this.__persistMutationInfo = require("w2.livenode").startMutation());
			var a = require("user_profiling");
			return this.__profilingId = a.startTimer(a.RTT_RPC), this._super()
		},
		_contentForStartLoading: function() {
			this.__contentForOpts.useLoadingSpinner && (this.__contentForLoadingTimeout = setTimeout(this.fnbind(function() {
				$(this.__contentForOpts.domNode).forgetContents(), $(this.__contentForOpts.domNode).html("<div class='__contentfor_loading_spinner'/>")
			}), 150))
		},
		_contentForDoneLoading: function() {
			clearTimeout(this.__contentForLoadingTimeout)
		},
		_defaultErrorHandler: function() {
			this.finishMutation(), this._throwError("Unhandled error response from server: " + JSON.stringify(arguments))
		},
		except: function(a, b) {
			this.finishMutation();
			switch(arguments.length) {
			case 1:
				this.__exceptionCatchAll = a;
				break;
			case 2:
				typeof a == "string" ? this.__exceptionPatterns[a] = b : $.each(a, this.fnbind(function(a, c) {
					this.__exceptionPatterns[c] = b
				}));
				break;
			default:
				this._throwError("The except method takes either (<pattern>, <callback>) or (<default-callback>) as arguments.")
			}
			return this
		},
		args: function() {
			var a = [],
				b;
			for(b = 0; b < arguments.length; b++) a.push(arguments[b]);
			return this.__data.args = a, this
		},
		xargs: function(a) {
			return this.__data.args = a, this
		},
		kwargs: function(a) {
			return this.__data.kwargs = a, this
		},
		data: function() {
			throw new Error("Don't use the .data() method with RPC; use .kwargs() or .args() instead.")
		},
		_data: function() {
			if(!b) throw new Error("require('settings').formkey not set -- can't send request securely.");
			a.windowId || console && console.warn && console.warn("No W2.windowId set; any content coming back from the server may not be live updated correctly");
			var c;
			try {
				c = JSON.stringify(this.__data)
			} catch(d) {
				console.log("W2.RPC Error: Can't encode an object with circular references", d, this.__data), assert(!1), c = JSON.stringify({
					error: "Can't encode an object with circular references"
				})
			}
			var e = {
				json: c,
				formkey: b,
				window_id: a.windowId
			};
			return this.__liveMutation && $.extend(e, this.__liveMutationInfo.data), this.__contentFor && (e.parent_cid = this.__contentForOpts.parentCID, e.parent_domid = a.getLiveParent(e.parent_cid)), e
		},
		success: function(a) {
			return this.__success = a, this
		},
		_successWrapper: function(b) {
			require("user_profiling").stopTimer(this.__profilingId), delete this.__profilingId, this.finishMutation(), b.pmsg && (a.pmsgContainer ? a.pmsgContainer.setContent(b.pmsg, !0) : console && console.warn && console.warn("Received a piggybacking pmsg but there's no pmsgContainer present on this page; dropping the pmsg.")), this.__contentFor && this._contentForDoneLoading();
			if(b.exception) return this._handleException(b);
			this.__contentFor && ($(this.__contentForOpts.domNode).forgetContents(), $(this.__contentForOpts.domNode).removeEditors().setContent(b.value), $(document).trigger("rpc_content_for_done", {
				opts: this.__contentForOpts,
				value: b.value
			}));
			var d = undefined;
			return typeof this.__success == "function" && (d = this.__success(b.value)), this.__liveMutation && require("settings").pageMode == "post_reload" ? c > 0 ? c -= 1 : require("window_manager").reload() : b.post_perf_html && a.postPerfInfoCallback && a.postPerfInfoCallback(b.post_perf_html), d
		},
		disableNextPostReload: function() {
			return ++c, this
		},
		_success: function(a) {
			return this.fnbind(this._successWrapper)
		},
		_throwError: function(a) {
			throw console && console.error && console.error(a), new Error(a)
		},
		_handleException: function(a) {
			var b = this.__exceptionPatterns[a.exception.type],
				c = !0;
			b ? c = this._invokeExceptionCallback(b, a) : this.__exceptionCatchAll && (c = this._invokeExceptionCallback(this.__exceptionCatchAll, a));
			if(c) {
				var d = {
					response: a,
					rpc: this
				};
				$(document).trigger("w2rpcexception-" + a.exception.type, d), $(document).trigger("w2rpcexception", d)
			}
		},
		_invokeExceptionCallback: function(a, b) {
			return a(b.exception, b, this)
		}
	}), a.RPC.defaults = {
		type: "POST",
		dataType: "json"
	}, a.rpc = function(b) {
		return(new a.RPC).url(b)
	}, a._Controller = a.RPC.extend({
		__init__: function(a, b) {
			this._super(), this.__vcon = a, this.__vcon_method = b;
			var c = require("settings").serverCallUrl;
			if(!c) throw new Error("require('settings').serverCallUrl not set");
			this.url(c)
		},
		_data: function() {
			var a = this._super();
			if(!this.__vcon) throw new Error("vcon not set; can't call a view controller.");
			return a.__vcon_json = JSON.stringify(this.__vcon), a.__vcon_method = this.__vcon_method, a
		}
	}), a._ServerCall = a._Controller.extend({
		__init__: function(a, b, c) {
			this._super(a, b), this._component = c, this._sendJSInitArgs = !0
		},
		dontSendJSInitArgs: function(a) {
			return a === !1 ? this._sendJSInitArgs = !0 : this._sendJSInitArgs = !1, this
		},
		_data: function() {
			var a = this._super();
			return this._sendJSInitArgs && (a.js_init = JSON.stringify(this._component.__js_init)), a
		}
	}), a.fallbackToPostReloadMode = function() {
		require("settings").pageMode = "post_reload"
	}
}(), require.install("w2.rpc", function() {}), function(a) {
	var b = require("webnode2");
	require("w2.rpc"), a.easing.expo = function(a, b, c, d, e) {
		return b == e ? c + d : d * (-Math.exp(-10 * b / e) + 1) + c
	}, a.serverLog = function(a, c, d, e) {
		try {
			var f = b.rpc("/ajax/server_log_POST").kwargs({
				message: a,
				level: c,
				other: d
			}).error(function() {
				console.log("Couldn't log error message: '" + a + "' on server.  Meta-failure :(")
			}).send()
		} catch(g) {}
		if(e !== !1) {
			var h;
			switch(c) {
			case "DEBUG":
				h = function(a) {
					console.debug(a)
				};
				break;
			case "INFO":
				h = function(a) {
					console.info(a)
				};
				break;
			case "WARNING":
				h = function(a) {
					console.warn(a)
				};
				break;
			case "ERROR":
			case "CRITICAL":
				h = function(a) {
					console.error(a)
				};
				break;
			default:
				h = function(a) {
					console.log(a)
				}
			}
			if(typeof h != "function") {
				h = function(a) {
					console.log(a)
				};
				if(typeof h != "function") return
			}
			try {
				d = JSON.stringify(d)
			} catch(g) {}
			try {
				h("[$.serverLog] " + a + " " + d)
			} catch(g) {}
		}
		return f
	}
}(jQuery), function(a, b) {
	a.a1ert = b, a.alert = function(a) {
		$.serverLog("Raw alert -- could mean a security vulnerability", "WARNING", {
			alertArg: a
		}, !1), b(a)
	}, a.alert.toString = function() {
		return "" + b
	}
}(this, this.alert), require.install("jquery.quora", function() {}), function() {
	var a = require("lang/fun").bind,
		b = require("webnode2"),
		c = require("Class").Class;
	b.Dialog = c.extend({
		__init__: function(a, c) {
			this.opener && this.opener(a), b.Dialog._dialogCounter += 1, this._dialogId = b.Dialog._dialogCounter, this._cid = "*dialog*_" + this._dialogId, this._title = null, this._buttons = [], this._ok = null, this._cancel = null, this.opts = $.extend({
				closeOnEscape: !0,
				closeOnClickOut: !1,
				sortButtons: !0,
				focusOK: !1,
				dialogClass: "",
				verticalOffset: 150
			}, c), this._opened = !1, this._containsComponent = !1, this._content = null, this.opts.html && (this._content = html)
		},
		opt: function(a, b) {
			return this.opts[a] = b, this
		},
		noButtons: function() {
			return this._buttons = [], buttons
		},
		ok: function(a, c) {
			return typeof a == "string" && (c = a, a = null), this._ok = a, c !== !1 && this.addButton(new b.OKButton(this, c, null)), this
		},
		cancel: function(a, c, d) {
			return typeof a == "string" && (c = a, a = null), this._cancel = a, c !== !1 && (d ? this.addButton(new b.CancelActionButton(this, c, null)) : this.addButton(new b.CancelButton(this, c, null))), this
		},
		button: function(a, c, d) {
			return this.addButton(new b.Button(this, c, a, d))
		},
		title: function(a) {
			if(this._opened) throw new Error("Can't set the title for a dialog once it has been opened.");
			return this._title = a, this
		},
		setTitle: function(a) {
			a && $("#__w2_dialog_title_" + this._dialogId).text(a)
		},
		addButton: function(a) {
			if(this._opened) throw new Error("Can't add a button to a dialog once it has been opened");
			return this._buttons.push(a), this
		},
		opener: function(a) {
			return this._opener = a, this
		},
		open_: function() {
			if(this._opened) return this;
			this._createDOMElements();
			var c = b._safeGetComponentByCID(this._cid);
			b._components[this._cid] = c;
			var d = {};
			d[this._cid] = "*ROOT*", b.addParents(d), $(document).bind("keydown.__w2_dialog_" + this._dialogId, a(this, function(a) {
				this.opts.closeOnEscape && a.keyCode == 27 && (this.cancel_(), a.stopPropagation())
			}));
			if(this.opts.closeOnClickOut) {
				var e = "#__w2_dialog_outer_" + this._dialogId;
				$(document).on("click", e, a(this, function(a) {
					a.stopPropagation()
				})), $(document).on("click", ":not(" + e + "," + e + " *)", a(this, function(a) {
					this.cancel_(), a.stopPropagation()
				}))
			}
			return this._opened = !0, typeof this._open == "function" && this._open.apply(this, arguments), this
		},
		cancel_: function(a) {
			var b = !0;
			typeof this._cancel == "function" && this._cancel(this._callbackArg(a)) === !1 && (b = !1), b && this.close_()
		},
		_callbackArg: function(a) {
			var c = {
				dialog: this,
				dialogWrapper: b._safeGetComponentByCID(this._cid),
				button: a
			};
			return this._containsComponent && (c.dialogComponent = b._safeGetComponentByCID(this._cid).lookup("__dialog__")), c
		},
		ok_: function(a) {
			var b = !0;
			return typeof this._ok == "function" && this._ok(this._callbackArg(a)) === !1 && (b = !1), b && this.close_(), b
		},
		close_: function() {
			return this._opened ? ($(document).unbind(".__w2_dialog_" + this._dialogId), $("#__w2_dialog_outer_" + this._dialogId).forgetContents(), b.unloadComponent(this._cid), $("#__w2_dialog_outer_" + this._dialogId).removeEditors().remove(), this._opened = !1, typeof this._close == "function" && this._close.apply(this, arguments), this) : this
		},
		open: function(a) {
			return this._open = a, this
		},
		close: function(a) {
			return this._close = a, this
		},
		html: function(a) {
			return this._content = a, this.open_()
		},
		text: function(a) {
			return this.html(a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"))
		},
		_createDOMElements: function() {
			var a = this.opts.width || 420,
				b, c = $("<div />").attr("id", "__w2_dialog_outer_" + this._dialogId).addClass("dialog").addClass("w4").addClass(this.opts.dialogClass);
			this._title ? (b = $("<div />").addClass("dialog_wrapper").append($("<h2 />").attr("id", "__w2_dialog_title_" + this._dialogId).addClass("dialog_header").addClass("dialog_frame").text(this._title)), this._content && b.append($("<div />").addClass("dialog_frame").addClass("dialog_contents").addClass("dialog_body").html(this._content))) : b = $("<div />").addClass("dialog_component").addClass("dialog_wrapper").addClass("dialog_body").html(this._content), this._buttons.length && b.append($("<div />").addClass("dialog_frame").addClass("dialog_buttons").append(this._buttonsDOM()));
			var d = $(window).width(),
				e = a,
				f = d - e,
				g = f / 2;
			if(require("settings").mobile) window.scrollTo(0, 1), c.append(b).css("position", "absolute").css("top", "0px").css("left", "0px").css("width", parseInt(d) - 20 + "px").appendTo($(document.body));
			else {
				var h = $(window).scrollTop(),
					i = h + this.opts.verticalOffset;
				b.css("width", a - 10 + "px"), c.append(b).css("top", i + "px").css("left", g + "px").css("width", a + 10 + "px").appendTo($(document.body))
			}
			if(this.opts.focusOK) for(var j = this._buttons.length - 1; j; j--) {
				var k = this._buttons[j];
				if(k._type == "submit") {
					$("#__w2_dialog_button_" + this._dialogId + "_" + j).focus();
					break
				}
			}
			return
		},
		_buttonDOM: function(b, c) {
			b._index = c;
			var d = $("<a />").addClass("dialog_button").text(b._text).click(a(b, b.click_)).click(function() {
				return !1
			}).attr("href", "#").attr("id", "__w2_dialog_button_" + this._dialogId + "_" + c);
			switch(b._type) {
			case "submit":
				d.addClass("submit_button");
				break;
			case "link":
			case "cancel":
				d.addClass("cancel");
				break;
			case "action":
			default:
				d.addClass("action_button")
			}
			return d
		},
		_buttonsDOM: function() {
			var a = $("<div />");
			this.opts.sortButtons && this._buttons.sort(function(a, b) {
				return a._priority - b._priority
			});
			for(var b = this._buttons.length - 1; b >= 0; b--) {
				var c = this._buttons[b];
				a.append(this._buttonDOM(c, b))
			}
			return a.addClass("dialog_buttons_contents")
		},
		_loadingHTML: function() {
			return '<div id="__w2_dialog_container_' + this._dialogId + '"></div>'
		},
		load: function(c, d) {
			d = $.extend({
				args: [],
				kwargs: {},
				showImmediately: !0,
				showOnLoad: !0
			}, d), this._content = this._loadingHTML(), this.open_();
			var e = this._opener.serverCall(c).xargs(d.args).kwargs(d.kwargs).success(a(this, function(a) {
				this._opener.__dialog__ = this;
				var c = b._safeGetComponentByCID(this._cid);
				c.__opener__ = this._opener, c.__dialog__ = this, b._knowsAbout[this._cid].__dialog__ = "__dialog__", b._knowsAbout[this._cid].__dialog_wrapper__ = ".", b._children[this._cid].__dialog__ = b._allChildren[this._cid][0], this._containsComponent = !0
			})).contentFor($("#__w2_dialog_container_" + this._dialogId), {
				parentCID: this._cid
			});
			return this.opts.error && e.error.apply(this, this.opts.error), this.opts.except && e.except.apply(this, this.opts.except), e.send(), this
		}
	}), b.Dialog.openerFor = function(a) {
		return a.lookup("__dialog_wrapper__").__opener__
	}, b.Dialog.dialogFor = function(a) {
		return a.lookup("__dialog_wrapper__").__dialog__
	}, b.Dialog._dialogCounter || (b.Dialog._dialogCounter = 0), b.Button = c.extend({
		__init__: function(a, b, c, d) {
			this._dialog = a, this._text = b, this._callback = c, this._opts = d || {}, this._priority = 50, this._type = "action"
		},
		text: function(a) {
			this._text = a
		},
		callback: function(a) {
			this._callback = a
		},
		click_: function() {
			var a = !0;
			typeof this._callback == "function" && this._callback.call(this._dialog, this._dialog._callbackArg(this)) === !1 && (a = !1), a && this._dialog.close_()
		}
	}), b.OKButton = b.Button.extend({
		__init__: function(b, c, d, e) {
			e = $.extend({
				style: "ok_button"
			}, e), this._super(b, c || "OK", a(this, function() {
				var a = !0;
				return typeof d == "function" && d.call(this, this._dialog._callbackArg(this)) === !1 && (a = !1), a ? this._dialog.ok_.call(this._dialog, this) : a
			}), e), this._priority = 75, this._type = "submit"
		}
	}), b.CancelButton = b.Button.extend({
		__init__: function(b, c, d, e) {
			e = $.extend({
				style: "cancel_button"
			}, e), this._super(b, c || "Cancel", a(this, function() {
				var a = !0;
				typeof d == "function" && d.call(this, this._dialog._callbackArg(this)) === !1 && (a = !1), a && this._dialog.cancel_.call(this._dialog, this)
			}), e), this._priority = 25, this._type = "link"
		}
	}), b.CancelActionButton = b.CancelButton.extend({
		__init__: function(a, b, c, d) {
			this._super(a, b, c, d), this._type = "action"
		}
	})
}(), require.install("w2.dialog", function() {}), function() {
	var a = require("webnode2");
	a.InputValidator = a.Component.extend({
		init: function() {
			this._super.apply(this, arguments), this.isValid = null
		},
		onLoad: function() {
			var a = this.input(),
				b;
			a.bind("change blur", this.fnbind(function() {
				var c = a.val();
				c !== b && (b = c, this.validate())
			})), this._managerComponent().__validators = this._managerComponent().__validators || [], this._managerComponent().__validators.push(this)
		},
		input: function() {
			return this.parent().$("#" + this.id)
		},
		_managerComponent: function() {
			return this.parent()
		},
		validate: function(a) {
			a = a || {};
			var b = this.input().val();
			if(!b) this.showErrorOnComponent(".@incomplete"), this.hideAllErrors(), this.isValid = null;
			else {
				this.hideAllErrors();
				var c = setTimeout(this.fnbind(function() {
					this.$(".@asking_server").show()
				}), 150);
				this.serverCall("validate").kwargs({
					value: this.input().val()
				}).success(this.fnbind(function(b) {
					clearTimeout(c), this.hideAllErrors(), b.valid ? (this.isValid = !0, b.message && (this.setWidth(this.$("#@valid_message")), this.$("#@valid_message").text(b.message)), this.$(".@valid").text() && this.showErrorOnComponent(".@valid"), this.hideAllErrors(), this.input().removeClass("error"), typeof a.valid == "function" && a.valid(b.message)) : (this.isValid = !1, b.message && (this.setWidth(this.$("#@invalid_message")), this.$("#@invalid_message").text(b.message)), this.hideAllErrors(), this.showErrorOnComponent(".@invalid"), typeof a.invalid == "function" && a.invalid(b.message))
				})).send()
			}
		},
		populate_if_valid: function(a, b) {
			this.serverCall("validate").kwargs({
				value: a
			}).success(this.fnbind(function(c) {
				c.valid && (this.isValid = !0, b.val(a))
			})).send()
		},
		setWidth: function(a) {
			var b = parseInt(this.input().width()) - 4;
			b > 0 && a.css("width", b + "px")
		},
		hideAllErrors: function() {
			this.$(".@invalid").hide(), this.$(".@valid").hide(), this.$(".@incomplete").hide(), this.$(".@asking_server").hide(), this.input().removeClass("input_validation_error"), this.$("textarea").removeClass("input_validation_error")
		},
		showErrorOnComponent: function(a) {
			this.$(a).show(), this.input().addClass("input_validation_error"), this.$("textarea").addClass("input_validation_error")
		}
	}), a.InputValidator.validate = function(a, b) {
		b = b || {}, a.__validators && a.__validators.length ? a.__validators[0].validate(b) : typeof b.valid == "function" && b.valid()
	}
}(), require.install("w2.inputvalidate", function() {}), function() {
	var a = require("webnode2");
	a._InteractionModeCls = a.Component.extend({
		init: function() {
			this._super.apply(this, arguments), a.interactionMode = this, this._changedComponents = {}, this._cidToDomId = {}, this._otherInteractions = {}, this._states = {
				OFF: 0,
				PENDING: 1,
				ON: 2,
				BLOCKING: 3
			}
		},
		onLoad: function() {
			this._state = this._states.OFF, this._lastVal = null, this._lastDOMNode = null, this.bindInteractionMode($(":input,div[contenteditable=true]")), $(document).bind("w2addcomponents", this.fnbind(function(b, c) {
				var d = c.parents;
				$.each(d, this.fnbind(function(b, c) {
					var d = (new a.VirtualComponent(b)).$("%@interaction");
					this.bindInteractionMode(d)
				}))
			})), this.$("#@resume").click(this.fnbind(function(a) {
				return this.resumeUpdates(), !1
			}))
		},
		updateStateForLastFocusedDOMElement: function(a) {
			if(!a) return !1;
			if(this._state == this._states.PENDING) {
				var b = a.getAttribute("w2cid");
				return this._lastVal == this._val(a) ? (this._changedComponents[b] = this._states.OFF, !1) : (this._changedComponents[b] = this._states.ON, this._cidToDomId[b] = this._getLiveDOMIdForElement(a), !0)
			}
			if(this._state == this._states.ON) {
				var b = a.getAttribute("w2cid"),
					c = this._changedComponents[b];
				return this._lastVal == this._val(a) && c == this._states.PENDING ? (this._changedComponents[b] = this._states.OFF, !1) : (this._changedComponents[b] = this._states.ON, this._cidToDomId[b] = this._getLiveDOMIdForElement(a), !0)
			}
			return !1
		},
		_getLiveDOMIdForElement: function(a) {
			return a.id && a.id.substr(0, 3) == "ld_" ? a.id : a.parentNode ? this._getLiveDOMIdForElement(a.parentNode) : null
		},
		startBlocking: function() {
			this.showBanner(), this._setBlockingState()
		},
		_setBlockingState: function() {
			this._state = this._states.BLOCKING
		},
		bindInteractionMode: function(a) {
			a.not(".ignore_interaction").bind("focus.w2interactionmode", this.fnbind(function(a) {
				var b = a.target.getAttribute("w2cid");
				this._lastVal = this._val(a.target), this._lastDOMNode = a.target;
				if(require("w2.livenode").state.pendingMutationCount == 0) if(this._state == this._states.OFF) this._changedComponents[b] = this._states.PENDING, this._state = this._states.PENDING;
				else {
					var c = this._changedComponents[b];
					if(!c || c == this._states.OFF) this._changedComponents[b] = this._states.PENDING
				}
			})).bind("blur.w2interactionmode", this.fnbind(function(a) {
				var b = a.target.getAttribute("w2cid");
				switch(this._state) {
				case this._states.PENDING:
					this.updateStateForLastFocusedDOMElement(a.target), this._lastVal == this._val(a.target) ? this._state = this._states.OFF : this._state = this._states.ON;
					break;
				case this._states.ON:
					this.updateStateForLastFocusedDOMElement(a.target);
					break;
				case this._states.OFF:
				case this._states.BLOCKING:
					break;
				default:
					console.error("Unknown state of InteractionMode at blur time... weird")
				}
			}))
		},
		_val: function(a) {
			var b = $(a);
			return b.is(":input") ? b.val() : b.html()
		},
		_setVal: function(a, b) {
			var c = $(a);
			c.is(":input") ? c.val(b) : c.html(b)
		},
		showBanner: function() {
			return this.$("#@banner").slideDown(175)
		},
		hideBanner: function() {
			return this.$("#@banner").slideUp(100)
		},
		resumeUpdates: function() {
			this._state = this._states.OFF, this._changedComponents = {}, this.hideBanner();
			var a = require("w2.livenode"),
				b = a.state.interactionDelayedLivedepOperations;
			while(b.length > 0 && this._state == this._states.OFF) {
				var c = b.shift();
				a.onLivedepOperations(c.data, c.textStatus, !0)
			}
		}
	})
}(), require.install("w2.interaction", function() {}), require.install("frame_busting", function(require, a, b) {
	a.check = function() {
		if(require("settings").enableFrameBusting) {
			var a = !1;
			try {
				a = !/\.quora\.com$/i.test(window.top.location.host)
			} catch(b) {
				a = !0
			}
			a && (window.top.location = window.location)
		}
	}
}), require.install("debug", function(require, a, b) {
	var c = require("settings"),
		d = c.debug;
	a.debug = d = {
		log: function() {
			console.log(arguments)
		},
		getStackTrace: function() {}
	}, d || (d.log = d.getStackTrace = function() {})
}), require.install("w2.quora", function(require, a, b) {
	function e(a, b, c) {
		a = a || rec.dump();
		for(var d = 0, e = a.length; d < e; ++d) if(b.call(c, a[d], d) === "break") return
	}
	function f(a, b) {
		return function(c) {
			var d = {},
				f = {};
			return e(c, function(c) {
				var e = c.tags,
					g = e[0],
					h = e[1],
					i = e[2];
				if(g === "window.performance" && h === "loadEventEnd") return "break";
				g === a && (!b || h === b) && (i === "start" ? d[h] = c.time : i === "finish" && (f[h] = (f[h] || 0) + c.time - d[h]))
			}), f
		}
	}
	var c = require("webnode2"),
		d = c.Dialog.extend();
	a.Component = c.Component.extend({
		dialog: function(a) {
			return new d(this, a)
		},
		setDvar: function(a, b) {
			this.__dvars__ == undefined && (this.__dvars__ = {}), this.__dvars__[a] = b
		},
		getDvar: function(a) {
			if(this.__dvars__ != undefined && this.__dvars__[a] != undefined) return this.__dvars__[a];
			var b = this.cid;
			while(b) {
				b = c._parents[b];
				var d = c._components[b];
				if(d && d.getDvar) return d.getDvar(a)
			}
			return null
		}
	}), a.reportClientLoadTime = function(a) {
		function j() {
			var b = f.win_perf.timing;
			if(b) {
				if(b.loadEventEnd === 0) return setTimeout(j, 500);
				var d, e, k = f.win_perf.timing = {};
				for(d in b) e = b[d], typeof e == "number" && (k[d] = e)
			}
			var l = rec.dump();
			f.win_perf.quora = {
				packages: g(l),
				onLoads: h(l).onLoad,
				flushQueues: i(l).flushQueue,
				referrer: document.referrer
			}, c.rpc("/perf/client_load_time_POST").kwargs(f).send(), a._component_inspector_enabled || (delete a.components, delete a._components)
		}
		var b = "",
			d = "";
		a.components && a.send_client_component_time && (b = JSON.stringify(a.components), d = a.unique_id);
		var e = window.performance,
			f = {
				unique_id: d,
				components: b,
				html_load: a.preOnLoad - a.start,
				js_onload: a.postOnLoad - a.preOnLoad,
				document_ready: a.documentReady - a.postOnLoad,
				window_load: a.windowLoad - a.documentReady,
				win_perf: {
					path: location.pathname,
					revision: require("settings").revision
				}
			};
		e && e.timing && e.timing.responseStart && (f.win_perf.timing = e.timing), j()
	};
	var g = f("package"),
		h = f("webnode2", "onLoad"),
		i = f("loader", "flushQueue");
	require("errors").setCallback(function(a) {
		$.serverLog(a.message.slice(0, 1e3), "ERROR", null, !1)
	})
}), require.install("view/toggle", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("user_profiling"),
		e = {},
		f = 3;
	a.ToggledComponent = c.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.retries = 0, this.toggleCallback || (this.toggleCallback = null);
			var a;
			this.switch_ready && (a = this.lookup("switchable")) && (this.toggled = !0, a.switchIfWanted()), d.stopTimer(e[this.toggle_key]), delete e[this.toggle_key]
		},
		onUnload: function() {
			delete this.toggleCallback, delete this.errorCallback, delete this.toggleIndicator, delete this.toggleSpinner
		},
		setCallback: function(a) {
			if(!this.toggleCallback) this.toggleCallback = a;
			else {
				var b = this.toggleCallback;
				this.toggleCallback = function() {
					b(), a()
				}
			}
		},
		setErrorCallback: function(a) {
			if(!this.errorCallback) this.errorCallback = a;
			else {
				var b = this.errorCallback;
				this.errorCallback = function() {
					b(), a()
				}
			}
		},
		setIndicator: function(a) {
			this.toggleIndicator = a
		},
		setSpinner: function(a) {
			this.toggleSpinner = a
		},
		toggle: function(a, b) {
			if(this.toggled) return;
			this.toggled = !0;
			var c, g;
			this.toggleIndicator && (c = this.toggleIndicator.$("#@toggle_indicator"), c.removeClass("hidden")), this.toggleSpinner && (g = this.toggleSpinner.$("#@toggle_spinner"), setTimeout(function() {
				g.html("<img class='content_loading_spinner' src='/static/images/spinner_2a.gif' />")
			}, 150)), this.force_transition = {
				type: "none"
			};
			var h = {
				toggle_key: this.toggle_key
			};
			b !== undefined && (h.toggle_state = b), e[this.toggle_key] = d.startTimer(d.RTT_TOGGLE), this.serverCall("toggle").kwargs(h).success(this.toggleCallback).error(this.fnbind(function() {
				this.retries++, this.retries <= f ? setTimeout(this.fnbind(function() {
					this.toggled = !1, this.toggle(a, b)
				}), 100) : (this.retries = 0, this.toggleIndicator && this.toggleIndicator.$("#@toggle_indicator").addClass("hidden"), this.toggleSpinner && this.toggleSpinner.$("#@toggle_spinner").html(""), this.errorCallback && this.errorCallback(), this.toggled = !1)
			})).send()
		}
	}), a.ToggledIndicator = c.extend({
		onLoad: function() {
			this.lookup("toggled").setIndicator(this)
		}
	}), a.ToggledSpinner = c.extend({
		onLoad: function() {
			this.lookup("toggled").setSpinner(this)
		}
	}), a.TogglerComponent = c.extend({
		toggle: function() {
			this.toggle_link && this.toggle_link_hide && this.$("#@toggle_link").hide(), this.toggled.toggle(this.toggle_active, this.toggle_state)
		},
		onLoad: function() {
			this.toggled = this.lookup("toggled"), this.toggle_link && this.toggle_link_hide && this.toggled.setErrorCallback(this.fnbind(function() {
				this.$("#@toggle_link").show()
			})), this.toggle_trigger === "click" && this.toggle_link ? this.$("#@toggle_link").click(this.fnbind(function(a) {
				return this.toggle(), !1
			})) : this.toggle_trigger === "mouseover" && this.toggle_link ? (this.$("#@toggle_link").mouseover(this.fnbind(function(a) {
				this.mouseover_toggled || (this.mouseover_toggled = !0, this.toggle())
			})), this.toggled.setErrorCallback(this.fnbind(function() {
				this.mouseover_toggled = !1
			}))) : this.toggle_trigger === "load" ? this.toggle() : this.toggle_trigger === "timeout" && (this.timeout = setTimeout(this.fnbind(this.toggle), this.toggle_timeout))
		},
		onUnload: function() {
			this.timeout && clearTimeout(this.timeout)
		}
	}), a.SwitchableComponent = c.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.switchCallback || (this.switchCallback = null)
		},
		onUnload: function() {
			delete this.switchCallback, delete this.switchIndicator
		},
		setCallback: function(a) {
			if(!this.switchCallback) this.switchCallback = a;
			else {
				var b = this.switchCallback;
				this.switchCallback = function() {
					b(), a()
				}
			}
		},
		setIndicator: function(a) {
			this.switchIndicator = a
		},
		switchAction: function() {},
		switchWrapper: function() {
			this.switchIndicator && (this.switchIndicator.$("#@switch_indicator").addClass("hidden"), delete this.switchIndicator), this.switchAction(), this.switchCallback && this.switchCallback()
		},
		switchIfReady: function() {
			this.switchWanted = !0, this.switchReady ? this.switchWrapper() : this.switchIndicator ? this.switchIndicator.$("#@switch_indicator").removeClass("hidden") : delete this.switchIndicator
		},
		switchIfWanted: function() {
			this.switchReady = !0, this.switchWanted && this.switchWrapper()
		}
	}), a.SwitchIndicator = c.extend({
		onLoad: function() {
			this.lookup("switchable").setIndicator(this)
		}
	}), a.SwitchComponent = c.extend({
		switchAction: function() {
			this.switch_link && this.switch_link_hide && this.$("#@switch_link").hide(), this.switchable.switchIfReady()
		},
		onLoad: function() {
			this.switchable = this.lookup("switchable"), this.switch_trigger === "click" && this.switch_link && this.$("#@switch_link").click(this.fnbind(function(a) {
				return this.switchAction(), !1
			}))
		},
		onUnload: function() {
			delete this.switchable
		}
	})
}), require.install("action_log", function(require, a, b) {
	function r() {
		n && clearTimeout(n), n = setTimeout(s, o)
	}
	function s() {
		if(m.length == 0) return;
		if(p) {
			r();
			return
		}
		p = !0, q = m, m = [], d.rpc("/ajax/action_log_POST").kwargs({
			messages: q
		}).success(t).error(u).send()
	}
	function t() {
		q.length = 0, p = !1
	}
	function u() {
		m = m.concat(q), q.length = 0, p = !1
	}
	function v(a) {
		m.push(a), r()
	}
	function w(a) {
		if(!h[a.cid]) return;
		a.impression_target && v(a.impression_target), delete h[a.cid]
	}
	function x(a, b, c) {
		b || (b = null);
		var d = f.actionTrail;
		e.setMessage("alog", [a, b, c, d])
	}
	function y(a) {
		h[a.cid] = a, l || (g(document, "scroll", B), l = !0), A()
	}
	function z(a) {
		delete h[a.cid]
	}
	function A() {
		k && clearTimeout(k), k = setTimeout(B, i)
	}
	function B() {
		var a = +(new Date);
		if(a < j + i) return;
		j = a;
		for(var b in h) {
			var c = h[b];
			c.$("#@actionable").is(":in-viewport") && w(c)
		}
	}
	var c = require("w2.quora").Component,
		d = require("webnode2"),
		e = require("cookies"),
		f = require("settings"),
		g = require("event").add,
		h = {},
		i = 500,
		j = 0,
		k = null,
		l = !1,
		m = [],
		n = null,
		o = 500,
		p = !1,
		q = [];
	a.logAction = x, a.ActionableComponent = c.extend({
		onLoad: function() {
			this._super.apply(this, arguments), y(this);
			var a = this;
			this.$("#@actionable").on("mousedown", "[action_mousedown]", function(b) {
				a.processAction($(b.currentTarget).attr("action_mousedown"))
			}), this.$("#@actionable").on("click", "[action_click]", function(b) {
				a.processAction($(b.currentTarget).attr("action_click"))
			})
		},
		sendActions: function() {
			this.serverCall("send_actions").send()
		},
		processAction: function(a) {
			if(!a) return;
			w(this), x(a, this.impression_target, this.action_target), this.actionCallback(a)
		},
		actionCallback: function(a) {},
		onUnload: function() {
			z(this)
		}
	})
}), require.install("view/inline_editor", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2"),
		e = require("cookies");
	a.InlineEditor = c.extend({
		onLoad: function() {
			this.input_obj = this.$("#@" + this.input), this.input_button = "inline_editor_submit", this.input_button_obj = this.$("#@" + this.input_button), this.draft_space && (this.draft_button = "inline_editor_save_draft", this.draft_button_obj = this.$("#@" + this.draft_button)), this.toggle_callback = null, this.locked = !1, this.$("#@inline_editor_content").hover(this.fnbind(function() {
				this.$("#@inline_editor_content").addClass("hover")
			}), this.fnbind(function() {
				this.$("#@inline_editor_content").removeClass("hover")
			})), this.$("#@inline_editor_link").click(this.fnbind(function() {
				return this.toggle_editor(), this.is_qtext && this.lookup("editor").fixButtons(), !1
			})), this.$("#@inline_editor_cancel").click(this.fnbind(function() {
				return this.cancelEditor(), !1
			})), this.$("#@inline_editor_create_link").click(this.fnbind(function() {
				return this.toggle_editor(), !1
			})), this.submitHandler(), this.draft_space && (this.lookup("editor").setFocusCallback(this.fnbind(function() {
				this.$("#@inline_editor_save_draft").removeClass("hidden")
			})), this.draft_button_obj.click(this.fnbind(function(a) {
				return this.save_draft(!0), !1
			})), this.lookup("editor").setMeaningfulChangeCallback(this.fnbind(function() {
				this.save_draft(!1)
			}))), this.focus_onload && this.focusInput(), this.typing_area && this.lookup("editor").setTypingStateCallback(this.fnbind(function(a) {
				this.serverCall("typing").kwargs({
					area: this.typing_area,
					state: a
				}).send()
			})), this.$("#@inline_editor_content").on("click", ".spoiler", function() {
				$(this).toggleClass("revealed")
			}), this.$("#@inline_editor_content").on("dblclick", ".spoiler", function() {
				$(document.body).toggleClass("spoiler_revealed")
			})
		},
		cancelEditor: function() {
			this.toggle_editor();
			var a = this.lookup("name_validator");
			a && a.hideAllErrors()
		},
		submitHandler: function() {
			this.input_button_obj.click(this.fnbind(function() {
				return d.InputValidator.validate(this, {
					valid: this.fnbind(this.trigger_request),
					invalid: function() {}
				}), !1
			}))
		},
		get_value: function() {
			return this.is_qtext ? this.lookup("editor").serialize() : this.input_obj.val()
		},
		save_draft: function(a) {
			var b = a ? "save_draft" : "save_draft_auto",
				c = this.serverCall(b).kwargs({
					content: this.get_value(),
					window_id: d.windowId,
					draft_space: this.draft_space
				});
			a && c.liveMutate(), c.send()
		},
		server_call_method: "edit",
		_get_kwargs: function() {
			return {
				id: this.id,
				input: this.get_value()
			}
		},
		trigger_request: function() {
			this.typing_area && this.lookup("editor").stopTyping();
			if(this.locked) return !1;
			this.locked = !0, this.require_comment ? this.showConfirmationDialog() : this.invokeEditServerCall(this._get_kwargs())
		},
		invokeEditServerCall: function(a) {
			var b = this.fnbind(function() {
				this.locked = !1
			});
			$(document).bind("login_cancelled", b), e.setTlog(this.tlog_data());
			var c = this.getLoggedAction();
			c && require("action_log").logAction(c, null, null), this.serverCall(this.server_call_method).kwargs(a).success(this.fnbind(function(a) {
				$(document).unbind("login_cancelled", b), this.ajax_callback(a), this.locked = !1
			})).error(function() {
				$(document).unbind("login_cancelled", b)
			}).liveMutate().send()
		},
		tlog_data: function() {
			return null
		},
		getLoggedAction: function() {
			return null
		},
		ajax_callback: function(a) {
			this.toggle_editor()
		},
		focusInput: function() {
			this.is_qtext ? $(".qtext_editor_content").focus() : this.input_obj.focus()
		},
		setToggleCallback: function(a) {
			if(!this.toggle_callback) this.toggle_callback = a;
			else {
				var b = this.toggle_callback;
				this.toggle_callback = function() {
					b(), a()
				}
			}
		},
		toggle_editor: function() {
			this.$("#@inline_editor_content").find(".qtext_embed").each(function(a, b) {
				$(b).addClass("thumbnail").empty()
			}), this.$("#@inline_editor_content").toggleClass("hidden"), this.$("#@inline_editor_form").toggleClass("hidden"), this.input_obj && this.input_obj.focus(), this.toggle_callback && this.toggle_callback()
		},
		showConfirmationDialog: function() {
			var a = this.input_button_obj.text();
			this._dialog = this.dialog().title("Confirm " + a).cancel(this.fnbind(function() {
				this.locked = !1
			}), "Cancel").ok(this.fnbind(function() {
				var a = arguments[0].dialogComponent,
					b = a.lookup("editor");
				if( !! b.isEmpty()) return !1;
				var c = this._get_kwargs();
				c.comment = b.serialize(), this.invokeEditServerCall(c), this._dialog.close_()
			}), a).load("comment_dialog")
		}
	}), a.InlineEditCommentDialog = c.extend({
		onLoad: function() {
			this.lookup("editor").focus()
		}
	})
}), require.install("facebook", function(require, a, b) {
	function i() {
		if(!h) {
			h = !0;
			var a = document,
				b = a.createElement("div"),
				c = a.createElement("script");
			b.setAttribute("id", "fb-root"), c.async = !0, c.src = "//connect.facebook.net/en_US/all.js", b.appendChild(c), a.body.appendChild(b)
		}
	}
	function k(a) {
		e ? a() : (i(), $(f).bind("initialized", a))
	}
	function l(a) {
		k(function() {
			FB.getLoginStatus(function(b) {
				a(b)
			})
		})
	}
	function m(a) {
		(g === null || a) && l(function(a) {
			a.status == "connected" && n()
		})
	}
	function n(a) {
		FB.api("/me/permissions", function(b) {
			b.data && b.data.length > 0 ? (g = b.data[0], a && a(!0, g)) : (g = null, a && a(!1))
		})
	}
	function o(a) {
		return g && g[a] == 1
	}
	function p(a, b) {
		for(var c = 0; c < a.length; ++c) if(!b(a[c])) return !1;
		return !0
	}
	function q(a, b, c) {
		if(!e) return m(), !1;
		var d = null;
		return FB.getAuthResponse() && (d = FB.getAuthResponse().userID), d && a ? d == a ? o("publish_stream") ? b() : r(a, b) : c(d) : r(a, b, c), !1
	}
	function r(a, b, c) {
		FB.login(function(d) {
			if(d.status == "connected") {
				var e = d.authResponse;
				!a || e.userID == a ? b(e.userID, e.accessToken, e.expiresIn) : c(e.userID)
			}
		}, {
			scope: "publish_stream"
		})
	}
	function t(a, b, c) {
		k(function() {
			FB.ui({
				method: "apprequests",
				message: a,
				to: b.join(",")
			}, c)
		})
	}
	function u(a, b) {
		k(function() {
			FB.ui({
				method: "apprequests",
				message: a
			}, b)
		})
	}
	function v(a, b) {
		k(function() {
			FB.api(a, "delete", b)
		})
	}
	function w(a, b) {
		k(function() {
			a.method = "send", FB.ui(a, b)
		})
	}
	var c = require("webnode2"),
		d = require("w2.quora").Component,
		e = !1,
		f = {},
		g = null;
	window.fbAsyncInit = function() {
		var a = require("settings").fbAppId;
		FB.init({
			appId: a,
			oauth: !0
		}), e = !! a, $(f).trigger("initialized")
	};
	var h = !1,
		j = d.extend({
			init: function() {
				this._super.apply(this, arguments), i()
			}
		});
	a.isInitialized = function() {
		return e
	}, a.onInit = k, a.getLoginStatus = l, a.getAuthResponse = function() {
		return e ? FB.getAuthResponse() : null
	}, a.getAccessToken = function() {
		var b = a.getAuthResponse();
		return b ? b.accessToken : null
	}, a.getExpiresIn = function() {
		var b = a.getAuthResponse();
		return b ? b.expiresIn : null
	}, a.getFbUid = function() {
		var b = a.getAuthResponse();
		return b ? b.userID : null
	}, a.FacebookAccessTokenRefresher = d.extend({
		onLoad: function() {
			var a = this;
			l(function(b) {
				if(b.status == "connected") {
					var c = b.authResponse;
					a.serverCall("update_access_token").kwargs({
						fb_uid: c.userID,
						access_token: c.accessToken,
						expires: c.expiresIn
					}).success(function(a) {
						a && require("settings").pageMode == "post_reload" && require("window_manager").reload()
					}).send()
				}
			})
		}
	}), a.asyncUpdatePermissions = m, a.updatePermissions = n, a.hasPermission = o, a.requestPermissions = function(a, b) {
		p(a.split(","), o) ? b(!0) : FB.login(function(c) {
			c.status === "connected" ? n(function(c, d) {
				b(c && p(a.split(","), o))
			}) : b(!1)
		}, {
			scope: a
		})
	}, a.FacebookShare = d.extend({
		onLoad: function() {
			this.posted = !1, this.child("fb_different_account").bind("hide", this.fnbind(function() {
				this.$("#@fb_share_button").removeClass("submit_button_disabled")
			})), this.child("fb_connect_button").bind("fb_connected", this.fnbind(function() {
				this.$("#@fb_connect_button_wrapper").hide(), this.$("#@fb_form").show(), this.$("#@fb_share_button").show()
			})), m()
		},
		submit: function() {
			return this.posted ? !1 : (this.hasServerSidePublishStreamPerms ? this.publish() : q(this.fb_uid, this.fnbind(this.publish), this.fnbind(this.showSwitchAccount)), !1)
		},
		publish: function(a, b, d) {
			this.posted = !0;
			var e = this.fnbind(function() {
				this.posted = !1, this.$("#@fb_form").show(), this.$("#@fb_posting").hide(), this.$("#@fb_share_button").removeClass("submit_button_disabled")
			});
			this.serverCall("fb_publish").kwargs({
				message: this.$("#@fb_message").val(),
				fb_uid: a,
				access_token: b,
				expires_secs: d
			}).success(this.fnbind(function(a) {
				a.success === !0 ? c.Dialog.dialogFor(this).close_() : (e(), n(), this.fb_uid = a.fb_uid, this.hasServerSidePublishStreamPerms = !1, this.$("#@fb_share_button").val("Retry Post to Facebook"))
			})).except(e).send(), this.$("#@fb_share_button").addClass("submit_button_disabled"), this.$("#@fb_form").hide(), this.$("#@fb_posting").show()
		},
		showSwitchAccount: function(a) {
			this.child("fb_different_account").show(), this.$("#@fb_share_button").addClass("submit_button_disabled")
		},
		events: {
			"click #@fb_share_button": "onClickFbShareButton",
			"click #@close": "onClickClose"
		},
		onClickFbShareButton: function() {
			this.submit()
		},
		onClickClose: function() {
			return c.Dialog.dialogFor(this).close_(), !1
		}
	}), a.FacebookShareNew = d.extend({
		onLoad: function() {
			this.child("fb_connect_button").bind("fb_connected", this.fnbind(function() {
				this.$("#@fb_connect_button_wrapper").hide(), this.$("#@fb_form").show()
			})), m()
		}
	}), a.FacebookConnectedToDifferentAccount = j.extend({
		show: function() {
			FB.api("/me", this.fnbind(function(a) {
				a.name && (this.$("#@fb_unknown_login").hide(), this.$("#@fb_logged_in_name").text(a.name), this.$("#@fb_logged_in_link").show(), this.$("#@fb_logged_in_link").attr("href", a.link))
			})), this.$("#@fb_different_account").show()
		},
		events: {
			"click #@fb_logout": "onClickFbLogout",
			"click #@settings": "onClickSettings"
		},
		onClickFbLogout: function() {
			return FB.logout(this.fnbind(function(a) {
				this.$("#@fb_different_account").hide(), this.trigger("hide")
			})), !1
		},
		onClickSettings: function() {
			this.trigger("hide"), this.$("#@fb_different_account").hide()
		}
	}), a.maybePromptToPublish = q, a._disconnect = function() {
		FB.getLoginStatus(function(a) {
			a.authReponse ? FB.api({
				method: "auth.revokeAuthorization"
			}, function(a) {
				a ? console.log("Successfully disconnected") : console.error("Disconnection failed")
			}, console.error) : console.warn("Already not connected")
		})
	}, a.FacebookLikeButton = j.extend({
		onLoad: function() {
			k(this.fnbind(this.parse))
		},
		parse: function() {
			FB.XFBML.parse(this.$("#@fb_like")[0])
		}
	}), a.ShareSectionFacebookLikeButton = a.FacebookLikeButton.extend({
		onLoad: function() {
			k(this.fnbind(function() {
				this.parse(), FB.Event.subscribe("edge.create", this.fnbind(function(a) {
					this.serverCall("record_like").kwargs({
						url: a
					}).send()
				}))
			}))
		}
	}), a.FacepilePlugin = j.extend({
		onLoad: function() {
			k(this.fnbind(this.parse))
		},
		parse: function() {
			FB.XFBML.parse(this.$("#@fb_facepile")[0]), $(this).trigger("facepile_parsed")
		}
	}), a.FacebookFriends = j.extend({
		followAll: function(a) {
			this.serverCall("follow_all").kwargs({
				uids: this.uids
			}).success(a).liveMutate().send()
		},
		events: {
			"click #@follow_all": "onClickFollowAll"
		},
		onClickFollowAll: function(a) {
			return this.followAll(), !1
		}
	});
	var s = a.FacebookConnectButtonBase = j.extend({
		connect: function() {
			FB.login(this.fnbind(function(a) {
				a && a.status == "connected" ? (this.onLogin(a.authResponse), this.trigger("fb_login", a.authResponse)) : (this.onLoginFailed(), this.trigger("fb_login_failed"))
			}), {
				scope: this.perms
			})
		},
		onClick: function() {},
		onLogin: function(a) {},
		onLoginFailed: function() {},
		events: {
			"click #@facebook_connect_button": "onClickFacebookConnectButton"
		},
		onClickFacebookConnectButton: function() {
			return e && (this.connect(), this.onClick(), this.trigger("click")), !1
		}
	});
	a.FacebookConnectButton = s.extend({
		onLogin: function(a) {
			this._onLogin(a)
		},
		_onLogin: function(a) {
			var b = a.accessToken,
				c = this.serverCall("connect_facebook").kwargs({
					fb_access_token: a.accessToken,
					fb_uid: a.userID,
					expires: a.expiresIn
				}).success(this.fnbind(function() {
					this.trigger("fb_connected")
				}));
			this.live_mutate ? c.liveMutate().send() : c.send()
		}
	}), a.FacebookConnectAddToTimelineButton = a.FacebookConnectButton.extend({
		onLogin: function(a) {
			n(this.fnbind(function(b, c) {
				b && "publish_actions" in c ? this._onLogin(a) : this.onLoginFailed()
			}))
		}
	}), a.FacebookConnectAddToTimelineRoadblockButtonTerse = a.FacebookConnectAddToTimelineButton.extend({
		onClick: function() {
			this.serverCall("log_click").send()
		}
	}), a.FacebookAccountConnectedTo = j.extend({
		events: {
			"click #@facebook_disconnect_button": "onClickFacebookDisconnectButton"
		},
		onClickFacebookDisconnectButton: function() {
			return this.serverCall("disconnect_facebook").liveMutate().success(function() {
				FB.getLoginStatus(function() {}, !0)
			}).send(), !1
		}
	}), a.FacebookOptionLink = j.extend({
		onLoad: function() {
			this.bindOptionEnable(), this.bindOptionDisable(), this.bindHideClick()
		},
		bindOptionEnable: function() {},
		bindOptionDisable: function() {},
		bindHideClick: function() {},
		events: {
			"click #@enable": "onClickEnable",
			"click #@disable": "onClickDisable",
			"click #@hide": "onClickHide"
		},
		onClickEnable: function() {
			return this.serverCall("toggle_option").kwargs({
				enabled: !0
			}).liveMutate().send(), !1
		},
		onClickDisable: function() {
			return this.serverCall("toggle_option").kwargs({
				enabled: !1
			}).liveMutate().send(), !1
		},
		onClickHide: function() {
			return this.serverCall("hide").liveMutate().send(), !1
		}
	}), a.FacebookToggleTimelineLink = j.extend({
		onEnable: function(a) {
			this.serverCall("enable_timeline").kwargs({
				fb_access_token: a.accessToken,
				fb_uid: a.userID,
				expires: a.expiresIn
			}).liveMutate().send()
		},
		onDisable: function() {
			this.serverCall("disable_timeline").liveMutate().send()
		},
		onLoginFailed: function() {
			this.$("#@option").attr("checked", !1)
		},
		events: {
			"click #@enable": "onClickEnable",
			"click #@disable": "onClickDisable"
		},
		onClickEnable: function() {
			return FB.login(this.fnbind(function(a) {
				if(a && a.status == "connected") {
					var b = a.authResponse;
					this.trigger("fb_login", a.authResponse), n(this.fnbind(function(a, c) {
						a && "publish_actions" in c ? this.onEnable(b) : this.onLoginFailed()
					}))
				} else this.onLoginFailed(), this.trigger("fb_login_failed")
			}), {
				scope: "publish_actions"
			}), !1
		},
		onClickDisable: function() {
			return this.onDisable(), !1
		}
	}), a.FacebookProfile = j.extend({
		onLoad: function() {
			k(this.fnbind(this.loadFacebookProfile))
		},
		loadFacebookProfile: function() {
			FB.api({
				method: "fql.query",
				query: "SELECT uid, name, pic FROM user WHERE uid = " + this.fb_uid
			}, this.fnbind(function(a) {
				if(a) {
					var b = a[0];
					b.pic && this.$("#@photo").attr("src", b.pic), b.name ? this.$("#@name").text(b.name) : this.$("#@name").html("<span style='color: gray;'>Couldn't retrieve info from Facebook; you may not be logged in to Facebook.</span>")
				}
			}))
		}
	}), a.SignupFacebookConnectButtonBase = s.extend({
		onClick: function() {
			this.serverCall("record_signup_step").kwargs({
				signup_action: "signup_connect_to_facebook"
			}).send()
		},
		onLogin: function(a) {
			this.serverCall("on_facebook_connected").kwargs({
				fb_uid: a.userID,
				access_token: a.accessToken,
				expires: a.expiresIn
			}).send(), this._onLogin(a)
		},
		onLoginFailed: function() {
			this.serverCall("record_signup_step").kwargs({
				signup_action: "signup_facebook_connect_failed"
			}).send()
		},
		_onLogin: function(a) {}
	}), a.SignupFacebookConnectButton = a.SignupFacebookConnectButtonBase.extend({
		_onLogin: function(a) {
			this.queryFacebookProfile(a)
		},
		queryFacebookProfile: function(a) {
			FB.api({
				method: "fql.query",
				query: "SELECT name, pic_big, contact_email FROM user WHERE uid = " + a.userID
			}, this.fnbind(function(b) {
				this.trigger("fb_connected", a, b), b && b[0] && this.serverCall("record_signup_step").kwargs({
					signup_action: "signup_facebook_connected"
				}).send()
			}))
		}
	}), a.SignupFacebookConnectButtonWithoutLoginHandler = a.SignupFacebookConnectButtonBase, a.OpengraphRoadblockMain = j.extend({
		onLoad: function() {
			var a = this
		},
		events: {
			"click #@cancel": "onClickCancel"
		},
		onClickCancel: function(a) {
			var b = this;
			return b.serverCall("cancel").liveMutate().send(), !1
		}
	}), a.OpengraphRoadblockMainOverlay = d.extend({
		onLoad: function() {
			$(window).resize(this.fnbind(this.centerComponent)), this.timeout = setTimeout(this.fnbind(function() {
				this.showOneButtonRoadblock(!1)
			}), 6e3), l(this.fnbind(this.onFacebookLogin)), this.centerComponent()
		},
		onFacebookLogin: function(a) {
			a.status == "connected" ? n(this.fnbind(function(a, b) {
				a && "publish_actions" in b ? this.showOneButtonRoadblock(!0) : this.showOneButtonRoadblock(!1)
			})) : this.showOneButtonRoadblock(!1)
		},
		showOneButtonRoadblock: function(a) {
			if(!this.timeout) return;
			clearTimeout(this.timeout), this.timeout = null;
			var b = a && this.$("#@one_button_version")[0];
			b ? (this.$("#@two_button_version").hide(), this.$("#@one_button_version").show()) : (this.$("#@two_button_version").show(), this.$("#@one_button_version").hide()), this.serverCall("log_button_version").kwargs({
				ok_only: !! b
			}).send(), this.centerComponent(), this.$("#@dialog").show()
		},
		centerComponent: function() {
			var a = this.$("#@calltoaction").height(),
				b = Math.max(($(window).width() - this.$("#@dialog").outerWidth()) / 2, 0),
				c = Math.max(($(window).height() - this.$("#@dialog").outerHeight()) / 2 - 20, a + 20),
				d = Math.max(($(window).width() - this.$("#@calltoaction").outerWidth()) / 2, 0);
			this.$("#@dialog").css({
				position: "fixed",
				left: b,
				top: c
			}), this.$("#@calltoaction").css({
				position: "fixed",
				left: d,
				top: Math.max(c - a + 5, 0)
			})
		}
	}), a.InviteViaFacebookMessageButton = j.extend({
		onLoad: function() {
			this.auto_click && this.$("#@invite_button").click()
		},
		invite: function() {
			var b = a.getFbUid();
			this.from_fb_uid != b && b ? this.serverCall("facebook_connected_to_different_account").liveMutate().send() : this.sendMessage()
		},
		sendMessage: function() {
			var a = {
				to: this.to_fb_uid,
				link: this.link_url,
				name: this.link_title,
				description: this.description,
				display: "popup"
			};
			w(a, this.fnbind(function(a) {
				a && !("error_code" in a) && this.serverCall("record_facebook_invite_message").kwargs({
					uid: this.uid,
					to_fb_uid: this.to_fb_uid,
					code: this.code,
					location: this.location
				}).liveMutate().send()
			}))
		},
		events: {
			"click #@invite_button": "onClickInviteButton"
		},
		onClickInviteButton: function() {
			return this.serverCall("record_facebook_invite_click").kwargs({
				uid: this.uid,
				to_fb_uid: this.to_fb_uid,
				code: this.code,
				location: this.location
			}).liveMutate().send(), this.invite(), !1
		}
	}), a.BatchFacebookInviteButton = j.extend({
		events: {
			"click #@invite_button": "onClickInviteButton"
		},
		onClickInviteButton: function() {
			t(this.msg, this.to_fb_uids, this.fnbind(function(a) {
				a && this.serverCall("record_invite_facebook_users").kwargs({
					from_fb_uid: this.from_fb_uid,
					to_fb_uids: this.to_fb_uids,
					fb_request_id: a.request
				}).liveMutate().send()
			}))
		}
	}), a.BatchFacebookInviteWithSelectorButton = j.extend({
		events: {
			"click #@invite_button": "onClickInviteButton"
		},
		onClickInviteButton: function() {
			u(this.msg, this.fnbind(function(a) {
				a && this.serverCall("record_invite_facebook_users").kwargs({
					from_fb_uid: this.from_fb_uid,
					to_fb_uids: a.to,
					fb_request_id: a.request
				}).liveMutate().send()
			}))
		}
	})
});
var Component = require("w2.quora").Component,
	windowManager = require("window_manager"),
	facebook = require("facebook");
Dialog = Component.extend({
	onLoad: function() {
		this.successCallback = null, this.ok2Submit = !0, this.submitted = !1, this.$("#@submit").click(this.fnbind(this.submit)), this.$("#@cancel").click(this.fnbind(function() {
			return this.close(), !1
		}))
	},
	submit: function() {
		return this.request(), !1
	},
	request: function() {
		var a = this.getPars();
		if(this.submitted || !a || !this.ok2Submit) return !1;
		this.submitted = !0, this.serverCall("dialog_submit_controller").liveMutate().kwargs(a).success(this.fnbind(function(a) {
			this.successCallback && this.successCallback(a), this.close()
		})).send()
	},
	getPars: function() {
		return {}
	},
	setSetup: function(a) {
		a.each(this.fnbind(function(a, b) {
			this.options[a] = b
		}))
	},
	setSuccessCallback: function(a) {
		this.successCallback = a
	},
	setFocusCallback: function(a) {
		this.lookup("editor").setFocusCallback(a)
	},
	setBlurCallback: function(a) {
		this.lookup("editor").setBlurCallback(a)
	},
	close: function() {
		$("#generic_dialog").length ? $("#generic_dialog").remove() : require("webnode2").Dialog.dialogFor(this).close_()
	}
}), AddCommentDialog = Dialog.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.lookup("editor").focus()
	},
	getPars: function() {
		return this.comment_required && this.lookup("editor").isEmpty() ? !1 : {
			comment: this.lookup("editor").serialize()
		}
	}
}), BanUserDialog = AddCommentDialog.extend({
	getPars: function() {
		var a = this._super.apply(this, arguments);
		return a.removeMessages = this.$("#@checkbox").attr("checked") == "checked", a
	}
}), DialogLink = Component.extend({
	onLoad: function() {
		this.tooltip && this.$("#@link").tooltip({
			contents: this.tooltip
		}), this.$("#@link").click(this.fnbind(function() {
			return this.click(), !1
		}))
	},
	addOption: function(a, b) {
		b && containsNonLatinCodepoints(JSON.stringify(b)) && (b = unescape(encodeURIComponent(b))), this.options[a] = b
	},
	click: function() {
		var a = encodeURIComponent(JSON.stringify(this.options));
		$(".content").dialog({
			title: null,
			url: "/dialog/ajax_get_dialog_GET?type=" + this.type + "&object_id=" + this.object_id + "&options=" + a,
			buttons_hide_on_close: this.buttons_hide_on_close,
			buttons: null
		})
	},
	triggerClick: function(a) {
		$.each(a, this.fnbind(function(a, b) {
			this.addOption(a, b)
		})), this.click()
	}
}), AdminMessageDialog = Dialog.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.lookup("editor").focus()
	},
	getPars: function() {
		if(this.lookup("editor").isEmpty()) return !1;
		var a = this.lookup("editor").serialize();
		return {
			msg: a
		}
	}
}), TopicTaggerDialog = Dialog.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.ok2Submit = !1
	},
	getPars: function() {
		var a = [];
		return this.$("#@topic_tagger_component .temp_topics_list input").each(function() {
			a.push($(this).val())
		}), a ? (this.ok2Submit = !0, {
			topics: a
		}) : !1
	}
}), ComposeMessageDialog = Dialog.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.$("#@change_person").click(this.fnbind(function() {
			return this.change(), !1
		})), this.lookup("people_selector").inputFocus(), this.load()
	},
	load: function() {
		this.object_id && this.setTo(this.object_id)
	},
	getPars: function() {
		return this.$("#@compose_message_to_uid").val() && (this.object_id = this.$("#@compose_message_to_uid").val()), !this.object_id || this.lookup("editor").isEmpty() ? !1 : {
			to_uid: this.object_id,
			msg: this.lookup("editor").serialize()
		}
	},
	change: function() {
		this.lookup("people_selector").reset(), this.$("#@pick_people").removeClass("hidden"), this.$("#@picked_person").addClass("hidden"), this.$("#@to_name").html(""), this.lookup("people_selector").focus()
	},
	setTo: function(a) {
		if(isNaN(parseInt(a))) return;
		this.lookup("people_selector").reset(), this.$("#@pick_people").addClass("hidden"), this.$("#@picked_person").removeClass("hidden"), this.$("#@compose_message_to_uid").val(a), this.getName(a)
	},
	getName: function(a) {
		this.$("#@to_name").setContentFromAJAXComponent("/inbox/ajax_get_name_POST", {
			uid: a
		}, this.fnbind(function() {
			this.lookup("editor").focus()
		}))
	}
}), AddUserToTopicDialog = ComposeMessageDialog.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.ok2Submit = !1, this.lookup("people_selector").inputFocus()
	},
	load: function() {
		return !1
	},
	getPars: function() {
		var a = null;
		this.$("#@compose_message_to_uid").length > 0 && (a = this.$("#@compose_message_to_uid").val());
		if(!a) return !1;
		var b = "";
		return this.lookup("editor").isEmpty() || (b = this.lookup("editor").serialize()), this.ok2Submit = !0, {
			uid: a,
			msg: b
		}
	},
	getName: function(a) {
		this.$("#@to_name").setContentFromAJAXComponent("/topic/ajax_add_user_to_topic_name_POST", {
			uid: a
		})
	}
}), require.install("dialog", function() {}), require.install("app/view/topic", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("cookies");
	require("dialog"), a.TopicEmailSettingsMenu = c.extend({
		onLoad: function() {
			this.$("#@menu_link").click(this.fnbind(function() {
				return this.$("#@menu_items").menu(this.$("#@menu_link")), !1
			}))
		}
	}), a.TopicEmailNewQuestionsControl = c.extend({
		onLoad: function() {
			this.$("#@enable").click(this.fnbind(function() {
				return this.serverCall("enable").liveMutate().send(), !1
			})), this.$("#@undo").click(this.fnbind(function() {
				return this.serverCall("undo_enable").liveMutate().send(), !1
			}))
		}
	}), a.TopicLocationPreview = c.extend({
		onLoad: function() {
			var a = this;
			this.$("#@enlarge_map").click(this.fnbind(function() {
				return this.$("#@enlarge_map").hide(), this.$("#@wrapper").css("height", "auto"), this.$("#@wrapper").css("width", "auto"), this.$("#@wrapper").removeClass("mask"), this.$("#@content").removeClass("mask_content"), this.$("#@content").css("top", "0px"), this.lookup("picker").toggleControls(!0), !1
			}))
		}
	}), a.TopicAliases = c.extend({
		onLoad: function() {
			var a = this.fnbind(this.addAliasSubmit);
			this.$("#@topic_alias_add").click(a), this.$("#@topic_alias_add_form").submit(a), this.$("#@show_alias_link").click(this.fnbind(function() {
				this.$("#@add_topic_alias").show(), this.$("#@show_alias").hide(), this.$("#@topic_alias_input").focus()
			}))
		},
		get_value: function() {
			return this.$("#@topic_alias_input").val()
		},
		addAliasSubmit: function() {
			return this._request(this.get_value()), !1
		},
		_request: function(a) {
			if(!this.tid || !a) return !1;
			this.serverCall("add_topic_alias").kwargs({
				tid: this.tid,
				alias: a
			}).success(this.fnbind(function() {
				this.$("#@topic_alias_input").val(""), this.$("#@topic_alias_input").focus()
			})).liveMutate().send()
		}
	}), a.TopicAlias = c.extend({
		onLoad: function() {
			var a = {
				title: "Topic Alias Deletion",
				contents: "Are you sure you wish to delete this alias?",
				buttons: {
					Ok: this.fnbind(this._request),
					Cancel: null
				}
			};
			this.$("#@topic_alias_remove").click(function() {
				return $(".content").dialog(a), !1
			})
		},
		_request: function() {
			if(!this.tid || !this.alias) return !1;
			this.serverCall("remove_topic_alias").kwargs({
				tid: this.tid,
				alias: this.alias
			}).liveMutate().send()
		}
	}), a.TopicAdultContent = c.extend({
		onLoad: function() {
			this.$("#@remove_topic_as_adult").click(this.fnbind(function() {
				return $(".content").dialog({
					title: "Modify Adult Content Setting",
					contents: "Are you sure you want to modify the Adult setting for this topic?",
					buttons: {
						"Remove Adult Mark": this.fnbind(function() {
							this.serverCall("remove_topic_as_adult").liveMutate().send()
						}),
						Cancel: null
					}
				}), !1
			})), this.$("#@set_topic_as_adult").click(this.fnbind(function() {
				return $(".content").dialog({
					title: "Mark Topic as Adult Content",
					contents: "Are you sure you want to modify the Adult setting for this topic?",
					buttons: {
						"Mark as Adult": this.fnbind(function() {
							this.serverCall("set_topic_as_adult").liveMutate().send()
						}),
						Cancel: null
					}
				}), !1
			}))
		}
	}), a.TopicDelete = c.extend({
		onLoad: function() {
			var a = this;
			this.$("#@delete_topic_link").click(function() {
				return $(".content").dialog({
					title: "Delete Topic",
					url: "/ajax/topic_delete_dialog",
					buttons: {
						Ok: function() {
							a._request("delete_topic")
						},
						Cancel: null
					}
				}), !1
			}), this.$("#@undelete_topic_link").click(function() {
				return $(".content").dialog({
					title: "Undelete Topic",
					url: "/ajax/topic_undelete_dialog",
					buttons: {
						Ok: function() {
							a._request("undelete_topic")
						},
						Cancel: null
					}
				}), !1
			})
		},
		_request: function(a) {
			if(!e) return;
			var b = e.lookup("editor");
			if(b.isEmpty()) return;
			this.serverCall(a).kwargs({
				tid: this.tid,
				comment: b.serialize()
			}).liveMutate().send()
		}
	});
	var e;
	a.TopicDialog = c.extend({
		onLoad: function() {
			this.lookup("editor").focus(), e = this
		}
	}), a.getTopicDialog = function() {
		return e
	}, a.TopicMergeUnmerge = c.extend({
		onLoad: function() {
			this.$("#@show_merge").click(this.fnbind(function() {
				return this.$("#@merge").removeClass("hidden"), this.$("#@show_merge").addClass("hidden"), this.cQuery(":standalone.selector").focus(), !1
			}))
		}
	}), a.TopicRelated = c.extend({
		onLoad: function() {
			this.$("#@view_all").click(this.fnbind(function() {
				return this.$("#@all").removeClass("hidden"), this.$("#@preview").addClass("hidden"), !1
			}))
		}
	}), a.TopicFollowButton = c.extend({
		onLoad: function() {
			this.$("#@follow").click(this.fnbind(function(a) {
				return d.setQfeedLog(this, "TopicFollow"), d.setQueryLog(this, "TopicFollow"), d.setTlog({
					type: "TopicFollow",
					tid: this.tid
				}), require("action_log").logAction("TopicFollow", null, {
					type: "topic",
					tid: this.tid
				}), this.serverCall("follow").kwargs({
					tid: this.tid
				}).liveMutate().send(), !1
			})), this.$("#@unfollow").click(this.fnbind(function(a) {
				return this.serverCall("unfollow").kwargs({
					tid: this.tid
				}).liveMutate().send(), !1
			}))
		}
	}), a.AdultTopicFollowButton = DialogLink.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@link").click(this.fnbind(function() {
				return this.serverCall("follow").liveMutate().send(), !1
			}))
		}
	}), a.TopicFollowAllButton = c.extend({
		onLoad: function() {
			this.$("#@follow").click(this.fnbind(function(a) {
				return this.serverCall("follow").liveMutate().send(), !1
			})), this.$("#@unfollow").click(this.fnbind(function(a) {
				return this.serverCall("unfollow").liveMutate().send(), !1
			}))
		}
	}), a.TopicUnmergeLink = c.extend({
		onLoad: function() {
			var a = this;
			this.$("#@unmerge").click(function() {
				a.serverCall("unmerge_topic").kwargs({
					tid: a.tid
				}).liveMutate().send()
			})
		}
	}), a.TopicNameLinkBase = c.extend({
		onLoad: function() {
			this.$("#@link").mousedown(this.fnbind(function() {
				d.setQfeedLog(this, "TopicClickthrough"), d.setQueryLog(this, "TopicClickthrough")
			}))
		}
	}), a.TopicParentsLink = c.extend({
		onLoad: function() {
			this.$("#@view_parent").tooltip({
				contents: "View Topic Parent"
			}).click(this.fnbind(function() {
				return this.$("#@view_parent").removeClass("topic_parent_link"), this.$("#@parents").removeClass("hidden"), !1
			}))
		}
	}), a.PendingTopicHoverMenuContents = c.extend({
		onLoad: function() {
			this.$("#@confirm_pending_topic").click(this.fnbind(function() {
				return this.serverCall("confirm_pending_topic").liveMutate().send(), !1
			}))
		}
	}), a.TopicAdminListItem = c.extend({
		onLoad: function() {
			this.$("#@item").hover(this.fnbind(function() {
				this.$("#@remove").show()
			}), this.fnbind(function() {
				this.$("#@remove").hide()
			}))
		}
	}), a.AddTopicAdmin = c.extend({
		onLoad: function() {
			this.$("#@add").click(this.fnbind(function() {
				return this.$("#@label").hide(), this.$("#@selector").show(), this.lookup("selector").focus(), !1
			}))
		},
		setTo: function(a) {
			a && a != "" && this.serverCall("add_admin").kwargs({
				tid: this.tid,
				new_uid: a
			}).success(this.fnbind(function() {
				this.lookup("selector").focus()
			})).liveMutate().send()
		},
		clear: function() {
			this.lookup("selector").inputBlur()
		}
	}), a.RemoveTopicAdmin = c.extend({
		onLoad: function() {
			this.$("#@remove").tooltip({
				contents: "Remove Topic Admin"
			}).click(this.fnbind(function() {
				return this.serverCall("remove").kwargs({
					tid: this.tid,
					admin_uid: this.admin_uid
				}).liveMutate().send(), !1
			}))
		}
	}), a.RemoveTopicSetAdmin = c.extend({
		onLoad: function() {
			this.$("#@remove").click(this.fnbind(function() {
				return this.dialog().title("Remove Group Admin Confirmation").cancel().ok(this.fnbind(function() {
					this.serverCall("remove").kwargs({
						tid: this.tid,
						admin_uid: this.admin_uid
					}).liveMutate().send()
				}), "Remove Admin").load("remove_topic_set_admin_dialog", {
					kwargs: {
						tid: this.tid,
						admin_uid: this.admin_uid
					}
				}), !1
			}))
		}
	}), a.AddBannedUser = c.extend({
		onLoad: function() {
			this.$("#@add").click(this.fnbind(function() {
				return this.$("#@label").hide(), this.$("#@selector").show(), this.lookup("selector").focus(), !1
			}))
		},
		setTo: function(a) {
			a && a != "" && this.serverCall("ban_user").kwargs({
				tid: this.tid,
				ban_uid: a
			}).success(this.fnbind(function() {
				this.clear(), this.lookup("selector").focus()
			})).liveMutate().send()
		},
		clear: function() {
			this.lookup("selector").inputBlur()
		}
	}), a.BannedUser = c.extend({
		onLoad: function() {
			this.$("#@remove").click(this.fnbind(function() {
				return this.serverCall("remove").kwargs({
					tid: this.tid,
					ban_uid: this.ban_uid
				}).liveMutate().send(), !1
			}))
		}
	}), a.TopicPostsListItem = c.extend({
		onLoad: function() {
			this.$("#@item").hover(this.fnbind(function() {
				this.lookup("remove").show()
			}), this.fnbind(function() {
				this.lookup("remove").hide()
			}))
		}
	}), a.FollowTopicOnTwitterSection = c.extend({
		onLoad: function() {
			this.$("#@icon").click(this.fnbind(function(a) {
				return this.lookup("follow_link").follow(), !1
			}))
		}
	})
}), require.install("swfobject", function(require, a, b) {
	var c = function() {
			function B() {
				if(u) return;
				try {
					var a = j.getElementsByTagName("body")[0].appendChild(R("span"));
					a.parentNode.removeChild(a)
				} catch(b) {
					return
				}
				u = !0;
				var c = m.length;
				for(var d = 0; d < c; d++) m[d]()
			}
			function C(a) {
				u ? a() : m[m.length] = a
			}
			function D(b) {
				if(typeof i.addEventListener != a) i.addEventListener("load", b, !1);
				else if(typeof j.addEventListener != a) j.addEventListener("load", b, !1);
				else if(typeof i.attachEvent != a) S(i, "onload", b);
				else if(typeof i.onload == "function") {
					var c = i.onload;
					i.onload = function() {
						c(), b()
					}
				} else i.onload = b
			}
			function E() {
				l ? F() : G()
			}
			function F() {
				var c = j.getElementsByTagName("body")[0],
					d = R(b);
				d.setAttribute("type", f);
				var e = c.appendChild(d);
				if(e) {
					var g = 0;
					(function() {
						if(typeof e.GetVariable != a) {
							var b = e.GetVariable("$version");
							b && (b = b.split(" ")[1].split(","), z.pv = [parseInt(b[0], 10), parseInt(b[1], 10), parseInt(b[2], 10)])
						} else if(g < 10) {
							g++, setTimeout(arguments.callee, 10);
							return
						}
						c.removeChild(d), e = null, G()
					})()
				} else G()
			}
			function G() {
				var b = n.length;
				if(b > 0) for(var c = 0; c < b; c++) {
					var d = n[c].id,
						e = n[c].callbackFn,
						f = {
							success: !1,
							id: d
						};
					if(z.pv[0] > 0) {
						var g = Q(d);
						if(g) if(T(n[c].swfVersion) && !(z.wk && z.wk < 312)) V(d, !0), e && (f.success = !0, f.ref = H(d), e(f));
						else if(n[c].expressInstall && I()) {
							var h = {};
							h.data = n[c].expressInstall, h.width = g.getAttribute("width") || "0", h.height = g.getAttribute("height") || "0", g.getAttribute("class") && (h.styleclass = g.getAttribute("class")), g.getAttribute("align") && (h.align = g.getAttribute("align"));
							var i = {},
								j = g.getElementsByTagName("param"),
								k = j.length;
							for(var l = 0; l < k; l++) j[l].getAttribute("name").toLowerCase() != "movie" && (i[j[l].getAttribute("name")] = j[l].getAttribute("value"));
							J(h, i, d, e)
						} else K(g), e && e(f)
					} else {
						V(d, !0);
						if(e) {
							var m = H(d);
							m && typeof m.SetVariable != a && (f.success = !0, f.ref = m), e(f)
						}
					}
				}
			}
			function H(c) {
				var d = null,
					e = Q(c);
				if(e && e.nodeName == "OBJECT") if(typeof e.SetVariable != a) d = e;
				else {
					var f = e.getElementsByTagName(b)[0];
					f && (d = f)
				}
				return d
			}
			function I() {
				return !v && T("6.0.65") && (z.win || z.mac) && !(z.wk && z.wk < 312)
			}
			function J(b, c, d, e) {
				v = !0, s = e || null, t = {
					success: !1,
					id: d
				};
				var f = Q(d);
				if(f) {
					f.nodeName == "OBJECT" ? (q = L(f), r = null) : (q = f, r = d), b.id = g;
					if(typeof b.width == a || !/%$/.test(b.width) && parseInt(b.width, 10) < 310) b.width = "310";
					if(typeof b.height == a || !/%$/.test(b.height) && parseInt(b.height, 10) < 137) b.height = "137";
					j.title = j.title.slice(0, 47) + " - Flash Player Installation";
					var h = z.ie && z.win ? "ActiveX" : "PlugIn",
						k = "MMredirectURL=" + i.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + h + "&MMdoctitle=" + j.title;
					typeof c.flashvars != a ? c.flashvars += "&" + k : c.flashvars = k;
					if(z.ie && z.win && f.readyState != 4) {
						var l = R("div");
						d += "SWFObjectNew", l.setAttribute("id", d), f.parentNode.insertBefore(l, f), f.style.display = "none", function() {
							f.readyState == 4 ? f.parentNode.removeChild(f) : setTimeout(arguments.callee, 10)
						}()
					}
					M(b, c, d)
				}
			}
			function K(a) {
				if(z.ie && z.win && a.readyState != 4) {
					var b = R("div");
					a.parentNode.insertBefore(b, a), b.parentNode.replaceChild(L(a), b), a.style.display = "none", function() {
						a.readyState == 4 ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
					}()
				} else a.parentNode.replaceChild(L(a), a)
			}
			function L(a) {
				var c = R("div");
				if(z.win && z.ie) c.innerHTML = a.innerHTML;
				else {
					var d = a.getElementsByTagName(b)[0];
					if(d) {
						var e = d.childNodes;
						if(e) {
							var f = e.length;
							for(var g = 0; g < f; g++)(e[g].nodeType != 1 || e[g].nodeName != "PARAM") && e[g].nodeType != 8 && c.appendChild(e[g].cloneNode(!0))
						}
					}
				}
				return c
			}
			function M(c, d, e) {
				var g, h = Q(e);
				if(z.wk && z.wk < 312) return g;
				if(h) {
					typeof c.id == a && (c.id = e);
					if(z.ie && z.win) {
						var i = "";
						for(var j in c) c[j] != Object.prototype[j] && (j.toLowerCase() == "data" ? d.movie = c[j] : j.toLowerCase() == "styleclass" ? i += ' class="' + c[j] + '"' : j.toLowerCase() != "classid" && (i += " " + j + '="' + c[j] + '"'));
						var k = "";
						for(var l in d) d[l] != Object.prototype[l] && (k += '<param name="' + l + '" value="' + d[l] + '" />');
						h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + ">" + k + "</object>", o[o.length] = c.id, g = Q(c.id)
					} else {
						var m = R(b);
						m.setAttribute("type", f);
						for(var n in c) c[n] != Object.prototype[n] && (n.toLowerCase() == "styleclass" ? m.setAttribute("class", c[n]) : n.toLowerCase() != "classid" && m.setAttribute(n, c[n]));
						for(var p in d) d[p] != Object.prototype[p] && p.toLowerCase() != "movie" && N(m, p, d[p]);
						h.parentNode.replaceChild(m, h), g = m
					}
				}
				return g
			}
			function N(a, b, c) {
				var d = R("param");
				d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
			}
			function O(a) {
				var b = Q(a);
				b && b.nodeName == "OBJECT" && (z.ie && z.win ? (b.style.display = "none", function() {
					b.readyState == 4 ? P(a) : setTimeout(arguments.callee, 10)
				}()) : b.parentNode.removeChild(b))
			}
			function P(a) {
				var b = Q(a);
				if(b) {
					for(var c in b) typeof b[c] == "function" && (b[c] = null);
					b.parentNode.removeChild(b)
				}
			}
			function Q(a) {
				var b = null;
				try {
					b = j.getElementById(a)
				} catch(c) {}
				return b
			}
			function R(a) {
				return j.createElement(a)
			}
			function S(a, b, c) {
				a.attachEvent(b, c), p[p.length] = [a, b, c]
			}
			function T(a) {
				var b = z.pv,
					c = a.split(".");
				return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10) || 0, c[2] = parseInt(c[2], 10) || 0, b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2] ? !0 : !1
			}
			function U(c, d, e, f) {
				if(z.ie && z.mac) return;
				var g = j.getElementsByTagName("head")[0];
				if(!g) return;
				var h = e && typeof e == "string" ? e : "screen";
				f && (w = null, x = null);
				if(!w || x != h) {
					var i = R("style");
					i.setAttribute("type", "text/css"), i.setAttribute("media", h), w = g.appendChild(i), z.ie && z.win && typeof j.styleSheets != a && j.styleSheets.length > 0 && (w = j.styleSheets[j.styleSheets.length - 1]), x = h
				}
				z.ie && z.win ? w && typeof w.addRule == b && w.addRule(c, d) : w && typeof j.createTextNode != a && w.appendChild(j.createTextNode(c + " {" + d + "}"))
			}
			function V(a, b) {
				if(!y) return;
				var c = b ? "visible" : "hidden";
				u && Q(a) ? Q(a).style.visibility = c : U("#" + a, "visibility:" + c)
			}
			function W(b) {
				var c = /[\\\"<>\.;]/,
					d = c.exec(b) != null;
				return d && typeof encodeURIComponent != a ? encodeURIComponent(b) : b
			}
			var a = "undefined",
				b = "object",
				d = "Shockwave Flash",
				e = "ShockwaveFlash.ShockwaveFlash",
				f = "application/x-shockwave-flash",
				g = "SWFObjectExprInst",
				h = "onreadystatechange",
				i = window,
				j = document,
				k = navigator,
				l = !1,
				m = [E],
				n = [],
				o = [],
				p = [],
				q, r, s, t, u = !1,
				v = !1,
				w, x, y = !0,
				z = function() {
					var c = typeof j.getElementById != a && typeof j.getElementsByTagName != a && typeof j.createElement != a,
						g = k.userAgent.toLowerCase(),
						h = k.platform.toLowerCase(),
						m = h ? /win/.test(h) : /win/.test(g),
						n = h ? /mac/.test(h) : /mac/.test(g),
						o = /webkit/.test(g) ? parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
						p = !1,
						q = [0, 0, 0],
						r = null;
					if(typeof k.plugins != a && typeof k.plugins[d] == b) r = k.plugins[d].description, r && (typeof k.mimeTypes == a || !k.mimeTypes[f] || !! k.mimeTypes[f].enabledPlugin) && (l = !0, p = !1, r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), q[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10), q[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10), q[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
					else if(typeof i.ActiveXObject != a) try {
						var s = new ActiveXObject(e);
						s && (r = s.GetVariable("$version"), r && (p = !0, r = r.split(" ")[1].split(","), q = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]))
					} catch(t) {}
					return {
						w3: c,
						pv: q,
						wk: o,
						ie: p,
						win: m,
						mac: n
					}
				}(),
				A = function() {
					if(!z.w3) return;
					(typeof j.readyState != a && j.readyState == "complete" || typeof j.readyState == a && (j.getElementsByTagName("body")[0] || j.body)) && B(), u || (typeof j.addEventListener != a && j.addEventListener("DOMContentLoaded", B, !1), z.ie && z.win && (j.attachEvent(h, function() {
						j.readyState == "complete" && (j.detachEvent(h, arguments.callee), B())
					}), i == top &&
					function() {
						if(u) return;
						try {
							j.documentElement.doScroll("left")
						} catch(a) {
							setTimeout(arguments.callee, 0);
							return
						}
						B()
					}()), z.wk &&
					function() {
						if(u) return;
						if(!/loaded|complete/.test(j.readyState)) {
							setTimeout(arguments.callee, 0);
							return
						}
						B()
					}(), D(B))
				}(),
				X = function() {
					z.ie && z.win && window.attachEvent("onunload", function() {
						var a = p.length;
						for(var b = 0; b < a; b++) p[b][0].detachEvent(p[b][1], p[b][2]);
						var d = o.length;
						for(var e = 0; e < d; e++) O(o[e]);
						for(var f in z) z[f] = null;
						z = null;
						for(var g in c) c[g] = null;
						c = null
					})
				}();
			return {
				registerObject: function(a, b, c, d) {
					if(z.w3 && a && b) {
						var e = {};
						e.id = a, e.swfVersion = b, e.expressInstall = c, e.callbackFn = d, n[n.length] = e, V(a, !1)
					} else d && d({
						success: !1,
						id: a
					})
				},
				getObjectById: function(a) {
					if(z.w3) return H(a)
				},
				embedSWF: function(c, d, e, f, g, h, i, j, k, l) {
					var m = {
						success: !1,
						id: d
					};
					z.w3 && !(z.wk && z.wk < 312) && c && d && e && f && g ? (V(d, !1), C(function() {
						e += "", f += "";
						var n = {};
						if(k && typeof k === b) for(var o in k) n[o] = k[o];
						n.data = c, n.width = e, n.height = f;
						var p = {};
						if(j && typeof j === b) for(var q in j) p[q] = j[q];
						if(i && typeof i === b) for(var r in i) typeof p.flashvars != a ? p.flashvars += "&" + r + "=" + i[r] : p.flashvars = r + "=" + i[r];
						if(T(g)) {
							var s = M(n, p, d);
							n.id == d && V(d, !0), m.success = !0, m.ref = s
						} else {
							if(h && I()) {
								n.data = h, J(n, p, d, l);
								return
							}
							V(d, !0)
						}
						l && l(m)
					})) : l && l(m)
				},
				switchOffAutoHideShow: function() {
					y = !1
				},
				ua: z,
				getFlashPlayerVersion: function() {
					return {
						major: z.pv[0],
						minor: z.pv[1],
						release: z.pv[2]
					}
				},
				hasFlashPlayerVersion: T,
				createSWF: function(a, b, c) {
					return z.w3 ? M(a, b, c) : undefined
				},
				showExpressInstall: function(a, b, c, d) {
					z.w3 && I() && J(a, b, c, d)
				},
				removeSWF: function(a) {
					z.w3 && O(a)
				},
				createCSS: function(a, b, c, d) {
					z.w3 && U(a, b, c, d)
				},
				addDomLoadEvent: C,
				addLoadEvent: D,
				getQueryParamValue: function(a) {
					var b = j.location.search || j.location.hash;
					if(b) {
						/\?/.test(b) && (b = b.split("?")[1]);
						if(a == null) return W(b);
						var c = b.split("&");
						for(var d = 0; d < c.length; d++) if(c[d].substring(0, c[d].indexOf("=")) == a) return W(c[d].substring(c[d].indexOf("=") + 1))
					}
					return ""
				},
				expressInstallCallback: function() {
					if(v) {
						var a = Q(g);
						a && q && (a.parentNode.replaceChild(q, a), r && (V(r, !0), z.ie && z.win && (q.style.display = "block")), s && s(t)), v = !1
					}
				}
			}
		}();
	a.embedSWF = c.embedSWF, a.removeSWF = c.removeSWF
}), require.install("jquery.ui-1.8.17", function(require, a, b) {
	(function(a, b) {
		function c(b) {
			return !a(b).parents().andSelf().filter(function() {
				return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this)
			}).length
		}
		function d(b, d) {
			var e = b.nodeName.toLowerCase();
			if("area" === e) {
				var f = b.parentNode,
					g = f.name,
					h;
				return !b.href || !g || f.nodeName.toLowerCase() !== "map" ? !1 : (h = a("img[usemap=#" + g + "]")[0], !! h && c(h))
			}
			return(/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || d : d) && c(b)
		}
		a.ui = a.ui || {}, a.ui.version || (a.extend(a.ui, {
			version: "1.8.17",
			keyCode: {
				ALT: 18,
				BACKSPACE: 8,
				CAPS_LOCK: 20,
				COMMA: 188,
				COMMAND: 91,
				COMMAND_LEFT: 91,
				COMMAND_RIGHT: 93,
				CONTROL: 17,
				DELETE: 46,
				DOWN: 40,
				END: 35,
				ENTER: 13,
				ESCAPE: 27,
				HOME: 36,
				INSERT: 45,
				LEFT: 37,
				MENU: 93,
				NUMPAD_ADD: 107,
				NUMPAD_DECIMAL: 110,
				NUMPAD_DIVIDE: 111,
				NUMPAD_ENTER: 108,
				NUMPAD_MULTIPLY: 106,
				NUMPAD_SUBTRACT: 109,
				PAGE_DOWN: 34,
				PAGE_UP: 33,
				PERIOD: 190,
				RIGHT: 39,
				SHIFT: 16,
				SPACE: 32,
				TAB: 9,
				UP: 38,
				WINDOWS: 91
			}
		}), a.fn.extend({
			propAttr: a.fn.prop || a.fn.attr,
			_focus: a.fn.focus,
			focus: function(b, c) {
				return typeof b == "number" ? this.each(function() {
					var d = this;
					setTimeout(function() {
						a(d).focus(), c && c.call(d)
					}, b)
				}) : this._focus.apply(this, arguments)
			},
			scrollParent: function() {
				var b;
				return a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? b = this.parents().filter(function() {
					return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
				}).eq(0) : b = this.parents().filter(function() {
					return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
				}).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
			},
			zIndex: function(c) {
				if(c !== b) return this.css("zIndex", c);
				if(this.length) {
					var d = a(this[0]),
						e, f;
					while(d.length && d[0] !== document) {
						e = d.css("position");
						if(e === "absolute" || e === "relative" || e === "fixed") {
							f = parseInt(d.css("zIndex"), 10);
							if(!isNaN(f) && f !== 0) return f
						}
						d = d.parent()
					}
				}
				return 0
			},
			disableSelection: function() {
				return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
					a.preventDefault()
				})
			},
			enableSelection: function() {
				return this.unbind(".ui-disableSelection")
			}
		}), a.each(["Width", "Height"], function(c, d) {
			function e(b, c, d, e) {
				return a.each(f, function() {
					c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), e && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0)
				}), c
			}
			var f = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
				g = d.toLowerCase(),
				h = {
					innerWidth: a.fn.innerWidth,
					innerHeight: a.fn.innerHeight,
					outerWidth: a.fn.outerWidth,
					outerHeight: a.fn.outerHeight
				};
			a.fn["inner" + d] = function(c) {
				return c === b ? h["inner" + d].call(this) : this.each(function() {
					a(this).css(g, e(this, c) + "px")
				})
			}, a.fn["outer" + d] = function(b, c) {
				return typeof b != "number" ? h["outer" + d].call(this, b) : this.each(function() {
					a(this).css(g, e(this, b, !0, c) + "px")
				})
			}
		}), a.extend(a.expr[":"], {
			data: function(b, c, d) {
				return !!a.data(b, d[3])
			},
			focusable: function(b) {
				return d(b, !isNaN(a.attr(b, "tabindex")))
			},
			tabbable: function(b) {
				var c = a.attr(b, "tabindex"),
					e = isNaN(c);
				return(e || c >= 0) && d(b, !e)
			}
		}), a(function() {
			var b = document.body,
				c = b.appendChild(c = document.createElement("div"));
			a.extend(c.style, {
				minHeight: "100px",
				height: "auto",
				padding: 0,
				borderWidth: 0
			}), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none"
		}), a.extend(a.ui, {
			plugin: {
				add: function(b, c, d) {
					var e = a.ui[b].prototype;
					for(var f in d) e.plugins[f] = e.plugins[f] || [], e.plugins[f].push([c, d[f]])
				},
				call: function(a, b, c) {
					var d = a.plugins[b];
					if( !! d && !! a.element[0].parentNode) for(var e = 0; e < d.length; e++) a.options[d[e][0]] && d[e][1].apply(a.element, c)
				}
			},
			contains: function(a, b) {
				return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
			},
			hasScroll: function(b, c) {
				if(a(b).css("overflow") === "hidden") return !1;
				var d = c && c === "left" ? "scrollLeft" : "scrollTop",
					e = !1;
				return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
			},
			isOverAxis: function(a, b, c) {
				return a > b && a < b + c
			},
			isOver: function(b, c, d, e, f, g) {
				return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
			}
		}))
	})(jQuery), function(a, b) {
		if(a.cleanData) {
			var c = a.cleanData;
			a.cleanData = function(b) {
				for(var d = 0, e;
				(e = b[d]) != null; d++) try {
					a(e).triggerHandler("remove")
				} catch(f) {}
				c(b)
			}
		} else {
			var d = a.fn.remove;
			a.fn.remove = function(b, c) {
				return this.each(function() {
					return c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function() {
						try {
							a(this).triggerHandler("remove")
						} catch(b) {}
					}), d.call(a(this), b, c)
				})
			}
		}
		a.widget = function(b, c, d) {
			var e = b.split(".")[0],
				f;
			b = b.split(".")[1], f = e + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f] = function(c) {
				return !!a.data(c, b)
			}, a[e] = a[e] || {}, a[e][b] = function(a, b) {
				arguments.length && this._createWidget(a, b)
			};
			var g = new c;
			g.options = a.extend(!0, {}, g.options), a[e][b].prototype = a.extend(!0, g, {
				namespace: e,
				widgetName: b,
				widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b,
				widgetBaseClass: f
			}, d), a.widget.bridge(b, a[e][b])
		}, a.widget.bridge = function(c, d) {
			a.fn[c] = function(e) {
				var f = typeof e == "string",
					g = Array.prototype.slice.call(arguments, 1),
					h = this;
				return e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e, f && e.charAt(0) === "_" ? h : (f ? this.each(function() {
					var d = a.data(this, c),
						f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
					if(f !== d && f !== b) return h = f, !1
				}) : this.each(function() {
					var b = a.data(this, c);
					b ? b.option(e || {})._init() : a.data(this, c, new d(e, this))
				}), h)
			}
		}, a.Widget = function(a, b) {
			arguments.length && this._createWidget(a, b)
		}, a.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			options: {
				disabled: !1
			},
			_createWidget: function(b, c) {
				a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b);
				var d = this;
				this.element.bind("remove." + this.widgetName, function() {
					d.destroy()
				}), this._create(), this._trigger("create"), this._init()
			},
			_getCreateOptions: function() {
				return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
			},
			_create: function() {},
			_init: function() {},
			destroy: function() {
				this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
			},
			widget: function() {
				return this.element
			},
			option: function(c, d) {
				var e = c;
				if(arguments.length === 0) return a.extend({}, this.options);
				if(typeof c == "string") {
					if(d === b) return this.options[c];
					e = {}, e[c] = d
				}
				return this._setOptions(e), this
			},
			_setOptions: function(b) {
				var c = this;
				return a.each(b, function(a, b) {
					c._setOption(a, b)
				}), this
			},
			_setOption: function(a, b) {
				return this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b), this
			},
			enable: function() {
				return this._setOption("disabled", !1)
			},
			disable: function() {
				return this._setOption("disabled", !0)
			},
			_trigger: function(b, c, d) {
				var e, f, g = this.options[b];
				d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent;
				if(f) for(e in f) e in c || (c[e] = f[e]);
				return this.element.trigger(c, d), !(a.isFunction(g) && g.call(this.element[0], c, d) === !1 || c.isDefaultPrevented())
			}
		}
	}(jQuery), function(a, b) {
		var c = !1;
		a(document).mouseup(function(a) {
			c = !1
		}), a.widget("ui.mouse", {
			options: {
				cancel: ":input,option",
				distance: 1,
				delay: 0
			},
			_mouseInit: function() {
				var b = this;
				this.element.bind("mousedown." + this.widgetName, function(a) {
					return b._mouseDown(a)
				}).bind("click." + this.widgetName, function(c) {
					if(!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
				}), this.started = !1
			},
			_mouseDestroy: function() {
				this.element.unbind("." + this.widgetName)
			},
			_mouseDown: function(b) {
				if(!c) {
					this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
					var d = this,
						e = b.which == 1,
						f = typeof this.options.cancel == "string" && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
					if(!e || f || !this._mouseCapture(b)) return !0;
					this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
						d.mouseDelayMet = !0
					}, this.options.delay));
					if(this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
						this._mouseStarted = this._mouseStart(b) !== !1;
						if(!this._mouseStarted) return b.preventDefault(), !0
					}
					return !0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
						return d._mouseMove(a)
					}, this._mouseUpDelegate = function(a) {
						return d._mouseUp(a)
					}, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0, !0
				}
			},
			_mouseMove: function(b) {
				return !a.browser.msie || document.documentMode >= 9 || !! b.button ? this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted) : this._mouseUp(b)
			},
			_mouseUp: function(b) {
				return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
			},
			_mouseDistanceMet: function(a) {
				return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
			},
			_mouseDelayMet: function(a) {
				return this.mouseDelayMet
			},
			_mouseStart: function(a) {},
			_mouseDrag: function(a) {},
			_mouseStop: function(a) {},
			_mouseCapture: function(a) {
				return !0
			}
		})
	}(jQuery), function(a, b) {
		var c = 5;
		a.widget("ui.slider", a.ui.mouse, {
			widgetEventPrefix: "slide",
			options: {
				animate: !1,
				distance: 0,
				max: 100,
				min: 0,
				orientation: "horizontal",
				range: !1,
				step: 1,
				value: 0,
				values: null
			},
			_create: function() {
				var b = this,
					d = this.options,
					e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
					f = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
					g = d.values && d.values.length || 1,
					h = [];
				this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (d.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = a([]), d.range && (d.range === !0 && (d.values || (d.values = [this._valueMin(), this._valueMin()]), d.values.length && d.values.length !== 2 && (d.values = [d.values[0], d.values[0]])), this.range = a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (d.range === "min" || d.range === "max" ? " ui-slider-range-" + d.range : "")));
				for(var i = e.length; i < g; i += 1) h.push(f);
				this.handles = e.add(a(h.join("")).appendTo(b.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(a) {
					a.preventDefault()
				}).hover(function() {
					d.disabled || a(this).addClass("ui-state-hover")
				}, function() {
					a(this).removeClass("ui-state-hover")
				}).focus(function() {
					d.disabled ? a(this).blur() : (a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), a(this).addClass("ui-state-focus"))
				}).blur(function() {
					a(this).removeClass("ui-state-focus")
				}), this.handles.each(function(b) {
					a(this).data("index.ui-slider-handle", b)
				}), this.handles.keydown(function(d) {
					var e = !0,
						f = a(this).data("index.ui-slider-handle"),
						g, h, i, j;
					if(!b.options.disabled) {
						switch(d.keyCode) {
						case a.ui.keyCode.HOME:
						case a.ui.keyCode.END:
						case a.ui.keyCode.PAGE_UP:
						case a.ui.keyCode.PAGE_DOWN:
						case a.ui.keyCode.UP:
						case a.ui.keyCode.RIGHT:
						case a.ui.keyCode.DOWN:
						case a.ui.keyCode.LEFT:
							e = !1;
							if(!b._keySliding) {
								b._keySliding = !0, a(this).addClass("ui-state-active"), g = b._start(d, f);
								if(g === !1) return
							}
						}
						j = b.options.step, b.options.values && b.options.values.length ? h = i = b.values(f) : h = i = b.value();
						switch(d.keyCode) {
						case a.ui.keyCode.HOME:
							i = b._valueMin();
							break;
						case a.ui.keyCode.END:
							i = b._valueMax();
							break;
						case a.ui.keyCode.PAGE_UP:
							i = b._trimAlignValue(h + (b._valueMax() - b._valueMin()) / c);
							break;
						case a.ui.keyCode.PAGE_DOWN:
							i = b._trimAlignValue(h - (b._valueMax() - b._valueMin()) / c);
							break;
						case a.ui.keyCode.UP:
						case a.ui.keyCode.RIGHT:
							if(h === b._valueMax()) return;
							i = b._trimAlignValue(h + j);
							break;
						case a.ui.keyCode.DOWN:
						case a.ui.keyCode.LEFT:
							if(h === b._valueMin()) return;
							i = b._trimAlignValue(h - j)
						}
						return b._slide(d, f, i), e
					}
				}).keyup(function(c) {
					var d = a(this).data("index.ui-slider-handle");
					b._keySliding && (b._keySliding = !1, b._stop(c, d), b._change(c, d), a(this).removeClass("ui-state-active"))
				}), this._refreshValue(), this._animateOff = !1
			},
			destroy: function() {
				return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
			},
			_mouseCapture: function(b) {
				var c = this.options,
					d, e, f, g, h, i, j, k, l;
				return c.disabled ? !1 : (this.elementSize = {
					width: this.element.outerWidth(),
					height: this.element.outerHeight()
				}, this.elementOffset = this.element.offset(), d = {
					x: b.pageX,
					y: b.pageY
				}, e = this._normValueFromMouse(d), f = this._valueMax() - this._valueMin() + 1, h = this, this.handles.each(function(b) {
					var c = Math.abs(e - h.values(b));
					f > c && (f = c, g = a(this), i = b)
				}), c.range === !0 && this.values(1) === c.min && (i += 1, g = a(this.handles[i])), j = this._start(b, i), j === !1 ? !1 : (this._mouseSliding = !0, h._handleIndex = i, g.addClass("ui-state-active").focus(), k = g.offset(), l = !a(b.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = l ? {
					left: 0,
					top: 0
				} : {
					left: b.pageX - k.left - g.width() / 2,
					top: b.pageY - k.top - g.height() / 2 - (parseInt(g.css("borderTopWidth"), 10) || 0) - (parseInt(g.css("borderBottomWidth"), 10) || 0) + (parseInt(g.css("marginTop"), 10) || 0)
				}, this.handles.hasClass("ui-state-hover") || this._slide(b, i, e), this._animateOff = !0, !0))
			},
			_mouseStart: function(a) {
				return !0
			},
			_mouseDrag: function(a) {
				var b = {
					x: a.pageX,
					y: a.pageY
				},
					c = this._normValueFromMouse(b);
				return this._slide(a, this._handleIndex, c), !1
			},
			_mouseStop: function(a) {
				return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
			},
			_detectOrientation: function() {
				this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
			},
			_normValueFromMouse: function(a) {
				var b, c, d, e, f;
				return this.orientation === "horizontal" ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), d < 0 && (d = 0), this.orientation === "vertical" && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
			},
			_start: function(a, b) {
				var c = {
					handle: this.handles[b],
					value: this.value()
				};
				return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
			},
			_slide: function(a, b, c) {
				var d, e, f;
				this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (b === 0 && c > d || b === 1 && c < d) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
					handle: this.handles[b],
					value: c,
					values: e
				}), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c, !0))) : c !== this.value() && (f = this._trigger("slide", a, {
					handle: this.handles[b],
					value: c
				}), f !== !1 && this.value(c))
			},
			_stop: function(a, b) {
				var c = {
					handle: this.handles[b],
					value: this.value()
				};
				this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
			},
			_change: function(a, b) {
				if(!this._keySliding && !this._mouseSliding) {
					var c = {
						handle: this.handles[b],
						value: this.value()
					};
					this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("change", a, c)
				}
			},
			value: function(a) {
				if(!arguments.length) return this._value();
				this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0)
			},
			values: function(b, c) {
				var d, e, f;
				if(arguments.length > 1) this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), this._change(null, b);
				else {
					if(!arguments.length) return this._values();
					if(!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
					d = this.options.values, e = arguments[0];
					for(f = 0; f < d.length; f += 1) d[f] = this._trimAlignValue(e[f]), this._change(null, f);
					this._refreshValue()
				}
			},
			_setOption: function(b, c) {
				var d, e = 0;
				a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments);
				switch(b) {
				case "disabled":
					c ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
					break;
				case "orientation":
					this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
					break;
				case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
					break;
				case "values":
					this._animateOff = !0, this._refreshValue();
					for(d = 0; d < e; d += 1) this._change(null, d);
					this._animateOff = !1
				}
			},
			_value: function() {
				var a = this.options.value;
				return a = this._trimAlignValue(a), a
			},
			_values: function(a) {
				var b, c, d;
				if(arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b), b;
				c = this.options.values.slice();
				for(d = 0; d < c.length; d += 1) c[d] = this._trimAlignValue(c[d]);
				return c
			},
			_trimAlignValue: function(a) {
				if(a <= this._valueMin()) return this._valueMin();
				if(a >= this._valueMax()) return this._valueMax();
				var b = this.options.step > 0 ? this.options.step : 1,
					c = (a - this._valueMin()) % b,
					d = a - c;
				return Math.abs(c) * 2 >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5))
			},
			_valueMin: function() {
				return this.options.min
			},
			_valueMax: function() {
				return this.options.max
			},
			_refreshValue: function() {
				var b = this.options.range,
					c = this.options,
					d = this,
					e = this._animateOff ? !1 : c.animate,
					f, g = {},
					h, i, j, k;
				this.options.values && this.options.values.length ? this.handles.each(function(b, i) {
					f = (d.values(b) - d._valueMin()) / (d._valueMax() - d._valueMin()) * 100, g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%", a(this).stop(1, 1)[e ? "animate" : "css"](g, c.animate), d.options.range === !0 && (d.orientation === "horizontal" ? (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({
						left: f + "%"
					}, c.animate), b === 1 && d.range[e ? "animate" : "css"]({
						width: f - h + "%"
					}, {
						queue: !1,
						duration: c.animate
					})) : (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({
						bottom: f + "%"
					}, c.animate), b === 1 && d.range[e ? "animate" : "css"]({
						height: f - h + "%"
					}, {
						queue: !1,
						duration: c.animate
					}))), h = f
				}) : (i = this.value(), j = this._valueMin(), k = this._valueMax(), f = k !== j ? (i - j) / (k - j) * 100 : 0, g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%", this.handle.stop(1, 1)[e ? "animate" : "css"](g, c.animate), b === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[e ? "animate" : "css"]({
					width: f + "%"
				}, c.animate), b === "max" && this.orientation === "horizontal" && this.range[e ? "animate" : "css"]({
					width: 100 - f + "%"
				}, {
					queue: !1,
					duration: c.animate
				}), b === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[e ? "animate" : "css"]({
					height: f + "%"
				}, c.animate), b === "max" && this.orientation === "vertical" && this.range[e ? "animate" : "css"]({
					height: 100 - f + "%"
				}, {
					queue: !1,
					duration: c.animate
				}))
			}
		}), a.extend(a.ui.slider, {
			version: "1.8.17"
		})
	}(jQuery)
}), require.install("qed/modifiers", function(require, a, b) {
	function d(a, b, d) {
		return b = b.toLowerCase(), function(e, f) {
			var g = {},
				h = c.getDocument(e).documentElement,
				i = e;
			g[a] = b;
			while(i && i !== h) {
				i = c.convertToStyleSpan(i);
				var j = i.style[a].toLowerCase();
				if(j === b) {
					g[a] = d;
					break
				}
				if(j === d) {
					g[a] = b;
					break
				}
				i = i.parentNode
			}
			c.applyStyle(e, f, g)
		}
	}
	function e(a) {
		var b = c.getEditorRoot(a),
			d = 0;
		while(a && a !== b) {
			if(a.nodeType !== 3) {
				var e = a.nodeName.toLowerCase();
				(e === "ol" || e === "ul") && d++
			}
			a = a.parentNode
		}
		return d
	}
	function f(a, b, d) {
		var f = e(a);
		if(f >= 10) return;
		var g = d ? "ol" : "ul",
			h = c.wrapLines(c.formatBlock(a, b, g), "li");
		return assert(c.contains(h, a)), assert(c.contains(h, b)), h
	}
	function g(a, b) {
		for(var d = c.getDocument(a).documentElement; a && a !== d; a = a.parentNode) if(b(a)) return a
	}
	function i(a) {
		return h.test(a.nodeName)
	}
	function k(a) {
		return a.nodeType === 3 ? /\S/.test(a.nodeValue) : j.test(a.nodeName) ? !1 : !0
	}
	function l(a, b) {
		var d = g(a, i);
		if(d) {
			var e = b ? c.findNextLine(a) : c.findPrevLine(a);

			function f(a) {
				return c.remove(e), a
			}
			if(!c.contains(d, e)) return f(!1);
			for(var h = b ? c.prevLeaf : c.nextLeaf, j = e; j; j = h(j, d)) if(k(j)) return f(!1);
			while(e.parentNode !== d) c.splitParent(e);
			c.splitParent(e);
			var l = c.replaceWithChildren(b ? e.previousSibling : e.nextSibling);
			return assert(l.nodeName === d.nodeName), f(!0)
		}
	}
	var c = require("./util");
	a.bold = d("fontWeight", "bold", "normal"), a.italic = d("fontStyle", "italic", "normal"), a.underline = d("textDecoration", "underline", "none"), a.blockquote = function(a, b) {
		return c.formatBlock(a, b, "blockquote")
	}, a.orderedList = function(a, b) {
		return f(a, b, !0)
	}, a.unorderedList = function(a, b) {
		return f(a, b, !1)
	};
	var h = /^blockquote|address$/i,
		j = /^br|span|b|i|u|em|strong$/i;
	a.maybeEscape = function(a, b) {
		return a.nextSibling === b && (l(a, !1) || l(b, !0))
	}, a.sanitizeBeforeRepair = function(a, b) {
		var c = require("./sanitize");
		a.nextSibling === b && c.flush(a), c.add(a.parentNode), c.add(b.parentNode)
	}
}), require.install("qed/trie", function(require, a, b) {
	function c() {
		function f(a, b) {
			var e = d(c, a);
			return e && "val" in e && (b = e.val), b
		}
		function g(a, c) {
			if(!a) return !1;
			var d = a.c,
				e = c.charAt(0);
			if(e) {
				g(d[e], c.slice(1)) || delete d[e];
				if("val" in a) return !0
			} else "val" in a && (b -= 1, delete a.val);
			for(e in d) return !0
		}
		var a = this,
			b = 0,
			c = {
				c: {}
			};
		a.size = function() {
			return b
		}, a.get = f, a.has = function(a) {
			return f(a, c) !== c
		}, a.prefix = function(a) {
			return !!e(c, a)
		}, a.put = function(a, e) {
			var f = d(c, a, !0);
			return b += "val" in f ? 0 : 1, f.val = e
		}, a.clear = function() {
			b = 0, c = {
				c: {}
			}
		}, a.del = function(a) {
			g(c, a)
		}
	}
	function d(a, b, c) {
		if(a) {
			if(!b) return a;
			var e = a.c,
				f = b.charAt(0);
			if(f in e || c && (e[f] = {
				c: {}
			})) return d(e[f], b.slice(1), c)
		}
	}
	function e(a, b) {
		var c = d(a, b);
		if(c) {
			if("val" in c) return !0;
			for(var e in c.c) return !0
		}
	}
	a.makeTrieMap = function() {
		return new c
	}
}), require.install("qed/snippets", function(require, a, b) {
	function j(a, b) {
		var c = l(a);
		if(c) {
			k(c.leaf, c.pos, a);
			var d = h.getDocument(a).createElement("div"),
				e = h.getEditorRoot(a),
				f, g = n(a);
			while(g.length > 0)(f = g.pop()) && h.replaceWithChildren(f);
			d.innerHTML = c.tmpl, o(d, g);
			while(d.firstChild) h.insertBefore(a.parentNode, d.firstChild, a);
			return !0
		}
	}
	function k(a, b, c) {
		assert(a.nodeType === 3);
		var d = h.insertBefore(a.parentNode, h.getDocument(a).createElement("span"), a.nextSibling),
			e = a.nodeValue.slice(0, b);
		e ? a.nodeValue = e : h.remove(a);
		var f = h.makeSiblings(d, c);
		while(d.nextSibling !== c) f.removeChild(d.nextSibling);
		f.removeChild(d)
	}
	function l(a) {
		var b = h.findPrevLine(a);
		try {
			return m(a)
		} finally {
			h.remove(b)
		}
	}
	function m(a) {
		for(var b, d = "", e = h.prevLeaf(a); e && e.nodeType === 3; e = h.prevLeaf(e)) for(var f = e.nodeValue, g = f.length; g >= 0; g -= 1) {
			d += f.charAt(g);
			if(!c.prefix(d)) return b;
			c.has(d) && (b = {
				leaf: e,
				pos: g,
				tmpl: c.get(d)
			})
		}
		return b
	}
	function n(a) {
		var b = h.getEditorRoot(a),
			c = f.get(b, g);
		return c || (c = f.fix(b, g, {})), c.stops || (c.stops = [])
	}
	function o(a, b) {
		var c = 0,
			d = [],
			e, f = h.getDocument(a);
		q(f, a, d), b.length = 0;
		while(c < d.length)(e = d[c++]) && b.push(e);
		e = b[b.length - 1];
		if(!e || h.nextLeaf(e, a)) e = f.createElement("span"), e.appendChild(f.createTextNode("﻿")), a.appendChild(e), b.push(e)
	}
	function p(a, b, c) {
		var f = a.split(d);
		if(f.length > 1) for(var g = 1, h, i; g < f.length; g += 2) {
			h = f[g - 1], i = f[g];
			if(e.test(h)) b(h + "$" + i);
			else {
				h && b(h);
				if(i.charAt(0) === "{") {
					var j = i.length,
						k = i.slice(1, j - 1).split(":");
					assert(i.charAt(j - 1) === "}"), c(+k[0], k[1] || "﻿")
				} else c(+i, "﻿")
			}
		}
		b(f.pop(), !0)
	}
	function q(a, b, c) {
		if(b.nodeType === 3) p(b.nodeValue, function(c, d) {
			d ? c ? b.nodeValue = c : h.remove(b) : h.insertBefore(b.parentNode, a.createTextNode(c), b)
		}, function(d, e) {
			assert(typeof d == "number"), assert(!isNaN(d));
			var f = a.createElement("span");
			f.appendChild(a.createTextNode(e)), h.insertBefore(b.parentNode, c[d] = f, b)
		});
		else for(var d = b.firstChild, e; d; d = e) e = d.nextSibling, q(a, d, c)
	}
	function r(a, b) {
		for(var c, d = n(a), e = 0; d && e < d.length; ++e) {
			c = d[e], delete d[e];
			if(c) {
				c.innerHTML === "﻿" ? (c.appendChild(a), c.appendChild(b)) : (h.insertBefore(c, a, c.firstChild), c.appendChild(b)), h.replaceWithChildren(c);
				break
			}
		}
	}
	var c, d = /\$(\d+|\{\d+:[^}]+\})/gm,
		e = /\\$/gm,
		f = require("./npd"),
		g = "tabStopInfo",
		h = require("./util");
	a.enabled = function() {
		return !!(c && c.size() > 0)
	}, "".reverse || (String.prototype.reverse = function() {
		for(var a = this.length, b = new Array(a), c = a - 1; c >= 0; --c) b[b.length] = this.charAt(c);
		return b.join("")
	});
	var i = document.createElement("div");
	a.addTabTrigger = function(a, b) {
		i.innerHTML = b, b = i.innerHTML, c || (c = require("./trie").makeTrieMap()), c.put(a.reverse(), b)
	}, a.removeTabTrigger = function(a) {
		c && c.del(a.reverse())
	}, a.clear = function() {
		c && c.clear()
	}, a.check = function(a, b) {
		if(c) {
			var d = j(a, b);
			return r(a, b), d
		}
	}
}), require.install("qed/nodestate", function(require, a, b) {
	function i(a, b, c) {
		d(a && b && c), this.restore = function() {
			p(a, b), t(a, c)
		}, this.diffAttrs = function(c) {
			return d(c === a), o(a, b)
		}, this.diffChildren = function(b) {
			return d(b === a), s(a, c)
		}
	}
	function j(a, b) {
		d(typeof b == "string");
		var c = a.createElement(b || "span"),
			e = f.key(c);
		return h[e] = !0, c
	}
	function k(a) {
		return a ? typeof a == "string" ? /[^\ufeff]/.test(a) : f.ok(a) ? !h[f.key(a)] : !1 : !1
	}
	function l(a, b) {
		var c = b ? b.diffAttrs(a) : o(a),
			e = b ? b.diffChildren(a) : s(a),
			f = {
				meaningful: c.meaningful || e.meaningful,
				identical: c.identical && e.identical
			};
		return d(!f.meaningful || !f.identical), b ? c.identical && e.identical ? (d(!c.meaningful && !e.meaningful), f.state = b) : (d(c.attrs || e.children), f.state = new i(a, c.attrs, e.children)) : (d(c.meaningful && !c.identical), d(e.meaningful && !e.identical), f.state = new i(a, c.attrs, e.children)), k(a) || (f.meaningful = !1), f
	}
	function m(a, b) {
		return a.name === b.name && a.value === b.value
	}
	function n(a, b) {
		var c = 0,
			d = {},
			f = [],
			h;
		if(a.getAttribute) {
			for(var i in g)(h = a.getAttribute(i)) !== null && (d[f[f.length] = i] = h);
			f.sort();
			for(var c = 0, i; c < f.length; ++c) i = f[c], f[c] = {
				name: i,
				value: d[i]
			}
		}
		if(!e(f, b, m)) return f
	}
	function o(a, b) {
		var c = n(a, b);
		return {
			meaningful: !! c,
			identical: !c,
			attrs: c || b
		}
	}
	function p(a, b) {
		if(a.setAttribute) {
			for(var c in g) a.removeAttribute(c);
			for(var e = 0, f; e < b.length; ++e) f = b[e], a.setAttribute(f.name, f.value)
		} else d(b.length < 1)
	}
	function q(a, b) {
		for(var c, d = [], f = a.firstChild; f; f = f.nextSibling) d.push(c = f.nodeType == 3 ? typeof c == "string" ? d.pop() + f.nodeValue : f.nodeValue : f);
		if(!e(d, b)) return d
	}
	function r(a) {
		for(var b, c = [], d, e = 0; e < a.length; ++e) k(d = a[e]) && (b = typeof d == "string" && typeof b == "string" ? c.pop() + d : d, typeof b == "string" && (b = b.replace("﻿", "")), c.push(b));
		return c
	}
	function s(a, b) {
		var c = q(a, b),
			f;
		return c ? b ? f = !e(r(c), r(b)) : f = !0 : (d(b), f = !1), {
			meaningful: f,
			identical: !c,
			children: c || b
		}
	}
	function t(a, b) {
		a.normalize();
		for(var e = 0, f = b.length, g = a.firstChild; g && e < f; g = g.nextSibling, ++e) if(b[e] !== (g.nodeType === 3 ? g.nodeValue : g)) break;
		if(g) {
			while(a.lastChild !== g) a.removeChild(a.lastChild);
			a.removeChild(g)
		}
		for(var h, i = c.getDocument(a); e < f; ++e) h = b[e], a.appendChild(typeof h == "string" ? i.createTextNode(h) : h);
		d(a.childNodes.length === b.length)
	}
	var c = require("./util"),
		d = c.assert,
		e = c.arraysEqual,
		f = require("./npd"),
		g = {
			"class": !0,
			style: !0
		},
		h = {};
	a.createMeaninglessElement = j, a.isMeaningful = k, a.diff = l
}), require.install("qed/rules", function(require, a, b) {
	function k() {
		d(this instanceof k);
		var a = new l,
			b = this;
		b.addOkTag = function(c, d) {
			return a.addOkTag(c, d), b
		}, b.addOkStyle = function(c, d) {
			return a.addOkStyle(c, d), b
		}, b.addKeyHandler = function(c, d) {
			return a.addKeyHandler(c, d), b
		}, b.getKeyHandler = function(b) {
			return a.keyHandlers[b.keyCode || b.charCode]
		}, b.apply = function(b) {
			return a.apply(b)
		}
	}
	function l() {
		var a = this,
			b = {};
		d(a instanceof l), a.rules = {
			br: "br",
			div: "div"
		}, a.okStyles = {}, a.keyHandlers = b, b[8] = o, b[13] = n, b[37] = p, b[39] = q
	}
	function m(a) {
		return(a || "").replace(j, "").toLowerCase()
	}
	function n(a, b, c) {
		if(!c.shiftKey && f.maybeEscape(a, b)) return !1
	}
	function o(a, b) {
		a.nextSibling === b && e(a, !0)
	}
	function p(a, b) {
		a.nextSibling === b && e(a, !0)
	}
	function q(a, b) {
		a.nextSibling === b && e(b, !1)
	}
	var c = require("./util"),
		d = c.assert,
		e = c.cleanFEFFs,
		f = require("./modifiers"),
		g = require("./snippets"),
		h = require("./npd"),
		i = require("./nodestate").isMeaningful,
		j = /^\s+|\s+$/g;
	a.Ruleset = k;
	var r = l.prototype;
	r.addOkTag = function(a, b) {
		a = a.toLowerCase();
		if(b) {
			var c = typeof b;
			c === "string" ? b = b.toLowerCase() : c != "function" && d(!1)
		} else b = a;
		this.rules[a] = b
	}, r.getSynonym = function(a) {
		var b = a.nodeName.toLowerCase(),
			c = this.rules[b];
		return typeof c == "function" && (c = c(a)), c
	}, r.addOkStyle = function(a, b) {
		a = m(a);
		var c = this.okStyles;
		(c.hasOwnProperty(a) ? c[a] : c[a] = {})[m(b)] = !0
	}, r.isOkStyle = function(a, b) {
		var c = this.okStyles[m(a)];
		return c && c.hasOwnProperty(m(b))
	}, r.addKeyHandler = function(a, b) {
		this.keyHandlers[a] = b
	}, r.apply = function(a) {
		if(!h.ok(a) || h.get(a, "isEditorRoot") || !i(a)) return a;
		var b = a.nodeName.toLowerCase(),
			d = a,
			e = this.getSynonym(a);
		if(e) return e !== b && (d = c.getDocument(a).createElement(e), c.replaceNode(d, a)), this.copySafeStyles(a, d);
		c.replaceWithChildren(a)
	}, r.copySafeStyles = function(a, b) {
		var c = a.getAttribute("style");
		b = b || a;
		if(c) {
			for(var d = [], e = !1, f = c.split(";"), g = 0, h = f.length; g < h; g += 1) {
				var i = f[g],
					j = i.split(":");
				j.length === 2 && (this.isOkStyle(j[0], j[1]) ? d.push(i) : e = !0)
			}
			d.length < 1 ? b.removeAttribute("style") : b.setAttribute("style", e ? d.join(";") : c)
		} else b.removeAttribute("style");
		return b
	}
}), require.install("qed/sanitize", function(require, a, b) {
	function j(a) {
		while(!c.ok(a)) a = a.parentNode;
		for(var b = d.getDocument(a).documentElement, e; a && a !== b && !e; a = a.parentNode) e = c.get(a, i), !e && c.get(a, "isEditorRoot") && (e = c.fix(a, i, new k(a, c.get(a, "editorRuleset"))));
		return e
	}
	function k(a, b) {
		function k(a) {
			var b = a[j];
			if(typeof b != "number" || i[b] !== a) try {
				a[j] = i.push(a) - 1
			} catch(c) {}
		}
		e(b instanceof h);
		var f = {},
			i = [],
			j = "qedSanitizerPos" + g++;
		this.add = function(a) {
			a && a.nodeType === 3 && (a = a.parentNode), a && (c.ok(a) ? f[c.key(a)] = a : k(a))
		}, this.flush = function() {
			var c, g = f;
			f = {};
			for(c in g) {
				a.normalize(!0);
				break
			}
			d.remove.apply(d, i), i.length = 0;
			for(c in g) try {
				var h = g[c],
					j = h.parentNode;
				h = b.apply(h), h ? l(h) : j && l(j)
			} catch(k) {
				e(!1)
			}
		}
	}
	function l(a) {
		for(var b = a.firstChild, c, d; b; b = d) {
			d = b.nextSibling;
			if(b.nodeType === 3) {
				var e = b.nodeValue;
				c ? (e.length > 0 && (c.nodeValue += e), a.removeChild(b)) : e.length > 0 ? c = b : a.removeChild(b)
			} else c && (f(c), c = null)
		}
		c && f(c)
	}
	var c = require("./npd"),
		d = require("./util"),
		e = d.assert,
		f = d.cleanTextNode,
		g = 0,
		h = require("./rules").Ruleset,
		i = "sanitizer";
	a.add = function(a) {
		var b = j(a);
		b && b.add(a)
	}, a.flush = function(a) {
		var b = j(a);
		b ? b.flush() : e(!1)
	}, a.normalize = l
}), require.install("qed/npd", function(require, a, b) {
	function i(a) {
		return !!a && a.nodeType !== 3 && !! a.getAttribute
	}
	function j(a, b) {
		return m(a) && b in n(a).data
	}
	function k(a, b, c) {
		return j(a, b) ? n(a).data[b] : c
	}
	function l(a, b, c) {
		var d = n(a),
			e = d.data;
		return d.fixed[b] || (e[b] = c), e[b]
	}
	function m(a) {
		if(a.getAttribute) {
			var b = a.getAttribute(h);
			if(b in f) return f[b].node === a
		}
		return !1
	}
	function n(a) {
		d(i(a));
		if(a.getAttribute) {
			var b = a.getAttribute(h),
				c = b && f[b];
			d(c !== g);
			if(c && c.node === a) return c;
			a.setAttribute(h, b = e()), c = f[b] = {
				node: a,
				key: b,
				fixed: {},
				data: {}
			}
		}
		return require("./sanitize").add(a), c
	}
	function o(a) {
		d(i(a));
		if(m(a)) {
			var b = a.getAttribute(h);
			f[b] = g
		}
	}
	function p(a, b) {
		if(a.nodeType == 3) return;
		if(a.removeAttribute) {
			b && o(a), a.removeAttribute(h);
			for(var c = a.firstChild; c; c = c.nextSibling) p(c)
		}
		return a
	}
	var c = require("./util"),
		d = c.assert,
		e = c.guid,
		f = {},
		g = {},
		h = "npdkey";
	a.ok = i, a.has = j, a.get = k, a.set = l, a.fix = function(a, b, c) {
		var d = n(a),
			e = d.fixed,
			f = d.data;
		return arguments.length > 2 && !e[b] && (f[b] = c), e[b] = !0, f[b]
	}, a.setdefault = function(a, b, c) {
		return j(a, b) ? k(a, b) : l(a, b, c)
	}, a.del = function(a, b, c) {
		if(j(a, b)) {
			var d = n(a),
				e = d.data;
			c = e[b], d.fixed || delete e[b]
		}
		return c
	}, a.key = function(a) {
		return n(a).key
	}, a.clean = function(a) {
		return p(a, !0)
	}, a.cleanInnerHTML = function(a) {
		return p(a.cloneNode(!0)).innerHTML.replace(/\ufeff/gm, "")
	}
}), require.install("qed/util", function(require, a, b) {
	function d(a, b, d) {
		return c(a), b.parentNode === a && a.removeChild(b), d ? a.insertBefore(b, d) : a.appendChild(b)
	}
	function e(a, b) {
		var d = a.parentNode,
			e = a,
			f = 0;
		c(d);
		if(typeof b == "number" && d.childNodes[b] === a) return b;
		while(e = e.previousSibling)++f;
		return c(d.childNodes[f] === a), f
	}
	function f(a) {
		while(a && a.firstChild) a = a.firstChild;
		return a
	}
	function g(a) {
		while(a && a.lastChild) a = a.lastChild;
		return a
	}
	function h(a) {
		return a.ownerDocument || a
	}
	function i(a) {
		a.nodeType === 3 && (a = a.parentNode);
		for(var b = h(a).documentElement; a && a !== b; a = a.parentNode) if(q.get(a, "isEditorRoot")) return a
	}
	function j(a, b) {
		return b = b || i(a), a && a !== b && f(a.nextSibling || j(a.parentNode, b))
	}
	function k(a, b) {
		return b = b || i(a), a && a !== b && g(a.previousSibling || k(a.parentNode, b))
	}
	function l(a, b) {
		a.nodeType == 3 && (a = a.parentNode);
		var c = h(a),
			d = c.defaultView,
			e = a.style[b],
			f;
		if(!e || e === "auto") d && d.getComputedStyle ? f = d.getComputedStyle(a, null) : f = a.currentStyle, e = f && f[b];
		return e === "auto" ? null : e
	}
	function n(a) {
		return m ? !! a.metaKey : !! a.ctrlKey
	}
	function o(a, b) {
		for(var c = h(b).documentElement; b && b !== c; b = b.parentNode) if(b === a) return !0;
		return !1
	}
	function p(a) {
		var b = a.parentNode,
			e = b && b.parentNode;
		c(!q.get(b, "isEditorRoot")), c(e);
		if(!a.nextSibling) d(e, a, b.nextSibling);
		else if(!a.previousSibling) d(e, a, b);
		else {
			var f = N(b.cloneNode(!1), a.nextSibling);
			d(e, f, b.nextSibling), d(e, a, f), c(b.nextSibling === a)
		}
		return c(a.previousSibling === b || a.nextSibling === b), !0
	}
	function r(a, b) {
		var c = {},
			d;
		if(a === b) return a;
		a.nodeType === 3 && (a = a.parentNode), b.nodeType === 3 && (b = b.parentNode);
		while(a || b) {
			if(a) {
				d = q.key(a);
				if(d in c) return a;
				c[d] = a, a = a.parentNode
			}
			if(b) {
				d = q.key(b);
				if(d in c) return b;
				c[d] = b, b = b.parentNode
			}
		}
	}
	function s(a, b) {
		var d = r(a, b);
		c(d), c(a !== d), c(b !== d), c(i(d));
		while(a.parentNode !== d) p(a);
		while(b.parentNode !== d) p(b);
		return d
	}
	function t(a) {
		var b = a.parentNode;
		if(b) {
			while(a.firstChild) b.insertBefore(a.firstChild, a);
			b.removeChild(a)
		}
		return a
	}
	function u(a) {
		var b = 0,
			c, d, e = [],
			f;
		while(d = a[b++]) d.parentNode === c ? f.push(d) : (c = d.parentNode, e.push(f = [d]));
		return e
	}
	function v(a, b) {
		var c = b.parentNode;
		c && c.replaceChild(a, b);
		while(b.firstChild) a.appendChild(b.firstChild);
		return a
	}
	function w(a, b) {
		var e = 0,
			f = b[0],
			g = f && f.parentNode;
		g && g.nodeType === 1 ? d(g, a, f) : g = null;
		while(f = b[e++]) g && c(f.parentNode === g), a.appendChild(f);
		return a
	}
	function x(a) {
		var b = a.cloneNode(!1);
		return q.set(b, "isStyleSpan", !0), b
	}
	function y(a) {
		var b = {},
			c = a.nodeName.toLowerCase();
		c === "b" || c === "strong" ? b.fontWeight = "bold" : c === "i" || c === "em" ? b.fontStyle = "italic" : c === "u" ? b.textDecoration = "underline" : b = null;
		if(b) {
			var d = h(a).createElement("span");
			q.set(d, "isStyleSpan", !0);
			for(var e in b) d.style[e] = b[e];
			return v(d, a)
		}
		return a
	}
	function z(a) {
		function i(c) {
			c.parentNode !== a && (b = !0), h.push(c)
		}
		function o(b) {
			var c = b[0].parentNode;
			n ? w(x(a), b) : (n = !0, w(a, b))
		}
		c(q.get(a, "isStyleSpan"));
		if(!a.firstChild) {
			a.parentNode.removeChild(a);
			return
		}
		var b, d = f(a),
			e = g(a),
			h = [];
		while(d && d !== e) i(d), d = j(d);
		i(e);
		if(!b) return;
		t(a);
		var k = 0,
			l, m = u(h),
			n;
		while(l = m[k++]) o(l)
	}
	function A(a, b) {
		return d(a.parentNode, b, a.nextSibling)
	}
	function B(a, b) {
		return d(a.parentNode, b, a)
	}
	function C(a, b) {
		for(var c = a, d = []; c && c !== b; c = j(c)) d.push(c);
		b && d.push(b);
		var e = h(a).documentElement,
			f = 0;
		while(c = d[f++]) for(var g = c.parentNode; g && g !== e; g = g.parentNode) {
			g = y(g);
			if(q.get(g, "isStyleSpan")) {
				z(g);
				break
			}
		}
		return d
	}
	function D(a) {
		return a.createTextNode("﻿")
	}
	function E() {}
	function F(a, b) {
		var c = a.previousSibling,
			e;
		return !c || c.nodeType !== 3 ? (e = d(a.parentNode, D(h(a)), a), function() {
			O(e)
		}) : E
	}
	function H(a, b, c, d) {
		return b + (new Array(c.length)).join(" ") + " " + d
	}
	function I(a, b) {
		c(a.nodeType === 3);
		var d = a.nodeValue,
			e;
		if(d === "﻿" && !b) return;
		e = d.replace(/\ufeff/g, ""), e = e.replace(G, H);
		if(e !== d) return e === "" ? a.parentNode.removeChild(a) : a.nodeValue = e, !0
	}
	function J(a) {
		if(a.nodeType === 3) return !1;
		switch(a.nodeName.toLowerCase()) {
		case "div":
		case "p":
		case "br":
		case "ol":
		case "ul":
		case "li":
		case "blockquote":
		case "address":
			return !0;
		default:
			return !1
		}
	}
	function K(a, b, c, d, e, f) {
		var g = h(a),
			i, j;
		b = b || g.documentElement;
		while(a && a !== b) {
			i = a[c];
			if(i) {
				a = i;
				if(J(a)) return e(a, g.createElement("span"));
				while(j = a[d]) {
					a = j;
					if(J(a)) return e(a, g.createElement("span"))
				}
			} else {
				a = a.parentNode;
				if(a && J(a)) return f(a, g.createElement("span"))
			}
		}
	}
	function L(a, b) {
		return K(a, b, "nextSibling", "firstChild", B, function(a, b) {
			return a.appendChild(b)
		})
	}
	function M(a, b) {
		return K(a, b, "previousSibling", "lastChild", A, function(a, b) {
			return d(a, b, a.firstChild)
		})
	}
	function N(a, b, c) {
		while(b && b !== c) {
			var d = b.nextSibling;
			a.appendChild(b), b = d
		}
		return a
	}
	function O(a) {
		for(var b, c = 0, d = arguments.length; c < d; c += 1)(a = arguments[c]) && (b = a.parentNode) && b.removeChild(a)
	}
	function P(a) {
		return R(a, "ul") || R(a, "ol")
	}
	function Q(a) {
		return R(a, "li")
	}
	function R(a, b) {
		return !a || a.nodeType === 3 ? !1 : a.nodeName.toLowerCase() === b
	}
	function S(a) {
		a.innerHTML = "";
		while(a.firstChild) a.removeChild(a.firstChild);
		return a
	}
	function T(a, b) {
		c(J(a));
		var d = h(a),
			e = f(a),
			i = [];
		C(e, g(a));
		while(e) {
			c(o(a, e));
			var k = M(e),
				l = L(e);
			c(o(a, k)), c(o(a, l)), s(k, l), i.push(N(d.createElement(b), k.nextSibling, l)), e = j(l, a);
			while(e && J(e)) e = j(e, a);
			O(k, l)
		}
		return w(S(a), i)
	}
	function U(a, b, c) {
		return n(c) ? V(a, b) : !0
	}
	function V(a, b) {
		var c = i(a);
		if(!c) return !0;
		var e = c.firstChild;
		return e && R(e, "a") && (d(c, a, c.firstChild), c.appendChild(b), F(a, b)), !0
	}
	var c = a.assert = require("assert").ok;
	a.guid = function() {
		return((+(new Date)).toString(36) + Math.random().toString(36)).toLowerCase()
	}, a.insertBefore = d, a.indexOfChild = e, a.firstLeaf = f, a.lastLeaf = g, a.getDocument = h, a.getEditorRoot = i, a.nextLeaf = j, a.prevLeaf = k, a.cloneObject = function(a, b) {
		var c = function() {
				for(var a in b) this[a] = b[a]
			};
		return c.prototype = a, new c
	}, a.getStyle = l, a.isVisible = function(a) {
		return require("jquery"), $(a).is(":visible")
	};
	var m = navigator.platform.match("Mac");
	a.hasCtrlOrCmd = n, a.addClass = function(a, b) {
		for(var c = 0, d = (a.getAttribute("class") || "").split(" "); c < d.length; ++c) if(d[c] === b) break;
		c == d.length && (d.push(b), a.setAttribute("class", d.join(" ")))
	}, a.arraysEqual = function(a, b, c) {
		if(a && b) {
			var d, e = a.length;
			if(e != b.length) return !1;
			for(d = 0; d < e; ++d) if(c ? !c(a[d], b[d]) : a[d] !== b[d]) return !1;
			return !0
		}
		return a || b ? !1 : !0
	}, a.contains = o, a.splitParent = p;
	var q = require("./npd");
	a.nearestCommonAncestor = r, a.makeSiblings = s, a.deleteContents = function(a, b) {
		s(a, b);
		while(a.nextSibling !== b) a.parentNode.removeChild(a.nextSibling)
	}, a.replaceWithChildren = t, a.replaceNode = v, a.convertToStyleSpan = y, a.applyStyle = function(a, b, d) {
		var e = h(a),
			f, g = u(C(a, b)),
			i = 0;
		while(f = g[i++]) q.get(f[0].parentNode, "isStyleSpan") || q.set(w(e.createElement("span"), f), "isStyleSpan", !0);
		var j = a.parentNode,
			k = b.parentNode;
		c(q.get(j, "isStyleSpan")), c(q.get(k, "isStyleSpan")), a.previousSibling && B(j, N(x(j), j.firstChild, a)), b.nextSibling && A(k, N(x(k), b.nextSibling)), F(a, b), i = 0;
		while(f = g[i++]) {
			var l = f[0].parentNode;
			c(q.get(l, "isStyleSpan"));
			for(var m in d) l.style[m] = d[m]
		}
	}, a.addExtraSupport = F;
	var G = /(\S)(\u00a0+)(\S)/g;
	a.cleanTextNode = I, a.cleanFEFFs = function(a, b) {
		for(var c = b ? k : j, d = i(a), e = c(a, d); e; e = c(e, d)) if(e.nodeType === 3 && I(e, !0)) break
	}, a.getText = function(a, b) {
		var c = a.innerText;
		return c || (c = a.innerHTML.replace(/\<[^>]*>/g, " ")), c && (c = c.replace(/\ufeff/g, ""), b || (c = c.replace(/^\s+|\s+$/g, ""))), c
	}, a.findNextLine = L, a.findPrevLine = M, a.remove = O, a.isList = P, a.isListItem = Q, a.hasTag = R, a.formatBlock = function(a, b, c) {
		C(a, b);
		var e = h(a),
			f = e.createElement(c),
			g = M(a),
			i = L(b);
		s(g, i);
		var j = g.parentNode,
			k = f,
			l = f;
		if(j && P(j) && !Q(f)) {
			var m = e.createElement("li");
			m.appendChild(f), k = m;
			if(Q(g.nextSibling) && !P(f)) {
				var n = e.createElement(j.nodeName);
				f.appendChild(n), l = n
			}
		}
		return d(g.parentNode, k, g), N(l, g, i), O(g, i), f
	}, a.removeAllChildren = S, a.wrapLines = T, a.handleSelectAll = U, a.fixSelectAll = V
}), require.install("find", function(require, a, b) {
	function f(a, b) {
		if(a.nodeType === 3) return b(a);
		for(var c = a.firstChild, d; c; c = d) {
			d = c.nextSibling;
			if(f(c, b)) return !0
		}
	}
	function g(a, b, f, g) {
		assert(a.nodeType === 3);
		var h = a.nodeValue,
			i = a.parentNode,
			j = e(a),
			k = h.slice(0, b),
			l = h.slice(b, f),
			m = a.nodeValue = h.slice(f),
			n = j.createElement("span"),
			o = n.cloneNode(!1);
		k && d(i, j.createTextNode(k), a), d(i, n, a), l && d(i, j.createTextNode(l), a), d(i, o, a);
		try {
			return g(n, o)
		} finally {
			c.remove(n, o, !m && a)
		}
	}
	function h(a, b, c) {
		return b && f(a, function(a) {
			for(;;) {
				var d = a.nodeValue.indexOf(b);
				if(d < 0) return;
				var e = g(a, d, d + b.length, c);
				if(e) return e
			}
		})
	}
	function i(a, b, c) {
		return b && f(a, function(a) {
			for(;;) {
				b.lastIndex = 0;
				var d = b.exec(a.nodeValue);
				if(d == null) return;
				var e = g(a, d.index, d.index + d[0].length, c);
				if(e) return e
			}
		})
	}
	var c = require("qed/util"),
		d = c.insertBefore,
		e = c.getDocument;
	a.findText = h, a.findExp = i, a.find = function(a, b, c) {
		if(typeof b == "string") return h(a, b, c);
		if(b instanceof RegExp) return i(a, b, c)
	}
}), require.install("qed/unload", function(require, a, b) {
	function g() {
		var a = f.onbeforeunload;
		if(a === e) return;
		e = f.onbeforeunload = function() {
			var b, e = 0,
				f;
			if(!d) while(b = c[e++]) if(f = b()) return f;
			if(a) try {
				return ++d, a.apply(this, arguments)
			} finally {
				--d
			}
		}
	}
	var c = [],
		d = 0,
		e, f = window;
	a.checkBeforeUnload = function(a) {
		g(), a && c.push(a)
	}, a.removeCheck = function(a) {
		var b;
		for(b = 0; b < c.length; b++) if(c[b] === a) {
			c.splice(b, 1);
			break
		}
	}
}), require.install("qed/selection", function(require, a, b) {
	function g(a, b, c, e) {
		var g = this,
			h = g.doc = f(b),
			i = g.isW3C = !! a.getSelection && !! a.getSelection().extend;
		d(a.document === h), d(c.nodeType === 1), d(e.nodeType === 1), g.scope = b, g.start = c, g.end = e, g.getNativeSelection = i ?
		function() {
			return a.getSelection()
		} : function() {
			return h.selection
		}
	}
	var c = require("./util"),
		d = c.assert,
		e = c.insertBefore,
		f = c.getDocument;
	g.prototype = {
		createRange: function() {
			var a = this.doc;
			return this.isW3C ? a.createRange() : a.body.createTextRange()
		},
		getSelection: function() {
			var a = this,
				b = a.getNativeSelection(),
				c;
			if(a.isW3C) {
				if(b && b.rangeCount > 0 && (c = b.getRangeAt(0)) && a.isRangeInScope(c)) return {
					rng: c,
					rev: this.isSelectionReversed(b, c)
				}
			} else if(b && (c = b.createRange()) && a.isRangeInScope(c)) return {
				rng: c,
				rev: !1
			}
		},
		isRangeInScope: function(a) {
			var b = this,
				c = b.scope,
				d = b.createRange();
			try {
				return b.isW3C ? (d.selectNode(c), d.compareBoundaryPoints(a.START_TO_START, a) < 1 && a.compareBoundaryPoints(a.END_TO_END, d) < 1) : (d.moveToElementText(c), d.compareEndPoints("StartToStart", a) < 1 && a.compareEndPoints("EndToEnd", d) < 1)
			} catch(e) {
				return !1
			}
		},
		getDefaultSelection: function() {
			var a = this,
				b = a.createRange();
			return a.isW3C ? b.selectNodeContents(a.scope) : b.moveToElementText(a.scope), b.collapse(!0), a.isW3C || (b.move("Character", 1), b.move("Character", -1)), {
				rng: b,
				rev: !1
			}
		},
		isSelectionReversed: function(a, b) {
			if(this.isW3C && (b = b || a.rangeCount > 0 && a.getRangeAt(0))) {
				var c = b.startContainer,
					d = b.startOffset;
				return(a.anchorNode !== c || a.anchorOffset !== d) && a.focusNode === c && a.focusOffset === d
			}
			return !1
		},
		copyAndCollapse: function(a, b) {
			var c;
			return this.isW3C ? (c = this.createRange(), c.setStart(a.startContainer, a.startOffset), c.setEnd(a.endContainer, a.endOffset)) : c = a.duplicate(), c.collapse( !! b), c
		},
		replaceWith: function(a, b) {
			if(this.isW3C) a.collapsed || a.deleteContents(), a.insertNode(b);
			else {
				var c = "rangespan" + Math.random().toString(36);
				a.pasteHTML("<span id='" + c + "'></span>");
				var d = this.doc.getElementById(c);
				d.parentNode.replaceChild(b, d)
			}
			return b
		},
		replaceCollapsedCopyWith: function(a, b, c) {
			this.replaceWith(this.copyAndCollapse(a, b), c)
		},
		insertDelimiters: function(a) {
			var b = this;
			b.isRangeInScope(a) || (a = b.getDefaultSelection()), (a.compareEndPoints ? a.compareEndPoints("StartToEnd", a) == 0 : a.collapsed) ? (b.replaceCollapsedCopyWith(a, !1, b.end), e(b.end.parentNode, b.start, b.end)) : (b.replaceCollapsedCopyWith(a, !1, b.end), b.replaceCollapsedCopyWith(a, !0, b.start))
		},
		removeDelimiters: function(a) {
			var b = this,
				d = b.createRange(),
				e, f = b.start,
				g = b.end;
			typeof a == "function" && a(f, g);
			var h = f.parentNode,
				i = g.parentNode,
				j = c.addExtraSupport(f, g);
			return b.isW3C ? (d.setStart(f, 0), d.setEnd(g, 0)) : (d.moveToElementText(f), e = b.createRange(), e.moveToElementText(g), d.setEndPoint("EndToStart", e)), h.removeChild(f), i.removeChild(g), j(), d
		},
		_MaxSelectRangeTime: 20,
		selectRange: function(a, b) {
			var c = this,
				d = c.getNativeSelection(),
				e = window.console && +(new Date),
				f;
			c.isRangeInScope(a) || (a = c.getDefaultSelection());
			if(c.isW3C) if(a.collapsed) {
				var g = a.endContainer,
					h = a.endOffset;
				d.collapse(g, h)
			} else b ? (d.collapse(a.endContainer, a.endOffset), d.extend(a.startContainer, a.startOffset)) : (d.collapse(a.startContainer, a.startOffset), d.extend(a.endContainer, a.endOffset));
			else(!(f = d && d.createRange()) || f.compareEndPoints("StartToStart", a) != 0 || f.compareEndPoints("EndToEnd", a) != 0) && a.select();
			if(e) {
				var i = new Date - e;
				i > c._MaxSelectRangeTime && console.log("SelImpl.selectRange took too long: " + i + "ms")
			}
		}
	}, a.Selection = function(a, b, c, e) {
		function n() {
			d(!m);
			if(!j) {
				var a = h.getSelection();
				return k = a || k, !! a
			}
		}
		function o(a) {
			j || (j = !0, h.insertDelimiters(k.rng));
			try {
				var b = ++m;
				return a(h.start, h.end)
			} finally {
				d(j), d(b === m), --m || p()
			}
		}
		function p() {
			d(!m), j && (j = !1, k.rng = h.removeDelimiters(l))
		}
		function q() {
			d(!m), j && p(), h.selectRange(k.rng, k.rev)
		}
		function r() {
			if(n()) {
				var a = h.getNativeSelection();
				a.removeAllRanges ? a.removeAllRanges() : a.empty()
			}
		}
		var f = a.document,
			h = new g(a, b, c || f.createElement("span"), e || f.createElement("span")),
			i = this,
			j, k = h.getDefaultSelection(),
			l, m = 0;
		i.record = n, i.modify = o, i.modifying = function() {
			return m > 0
		}, i.select = q, i.remove = r, i.onBeforeRepair = function(a) {
			d(typeof a == "function"), l = a
		}
	}
}), require.install("qed/snapshot", function(require, a, b) {
	function g(a, b) {
		c(a), this.lookup = function(c) {
			if(e.ok(c)) {
				var d = e.key(c);
				return d in a ? a[d] : a[d] = b && b.lookup(c)
			}
		}
	}
	function h(a, b) {
		var c = a ? [a] : [];
		while(c.length) {
			b(a = c.pop());
			for(var d = a.firstChild; d; d = d.nextSibling) e.ok(d) && c.push(d)
		}
	}
	var c = require("./util").assert,
		d = require("./sanitize"),
		e = require("./npd"),
		f = require("./nodestate");
	g.prototype.restore = function(a) {
		var b = this;
		h(a, function(a) {
			var c = b.lookup(a);
			c && c.restore(), d.add(a)
		}), d.flush(a)
	}, a.diff = function(a, b) {
		var c = {},
			d = !1,
			i = !0;
		return h(a, function(a) {
			var g = b && b.lookup(a),
				h = f.diff(a, g);
			d = d || h.meaningful, i = i && h.identical, c[e.key(a)] = h.state
		}), {
			meaningful: d,
			identical: i,
			snapshot: i ? b : new g(c, b)
		}
	}, a.test = function() {}
}), require.install("qed/history", function(require, a, b) {
	function g(a) {
		for(var b; a && a.type != "end"; a = a.prev) {
			if(a.type == "redo") return a.prev;
			b = b || a.changed
		}
		if(b) return a;
		for(var c = {
			count: 0
		}; a; a = a.prev) {
			if(a.type == "redo") return a.prev;
			if(a.type == "end") c[a.key] = !0, ++c.count;
			else if(c[a.key]) {
				e(a.type == "begin"), delete c[a.key];
				if(--c.count == 0) return b ? a : g(a)
			}
			b = b || a.changed
		}
	}
	var c = require("./snapshot"),
		d = require("./util"),
		e = d.assert,
		f = d.contains;
	a.observe = function(a) {
		function h(d, g, h) {
			e(d === "begin" || d === "end" || d === "redo");
			var i = (h || 0).scope || a,
				j = c.diff(i, f && f.snapshot),
				k = {
					type: d,
					key: g,
					data: h,
					snapshot: j.snapshot,
					prev: f
				};
			if(k.changed = j.meaningful) b.length = 0;
			return k
		}
		var b = [],
			d = {},
			f;
		return {
			beginOperation: function(a, b) {
				d[a] = !0, f = h("begin", a, b)
			},
			endOperation: function(a, b) {
				a in d && (delete d[a], f = h("end", a, b))
			},
			undo: function() {
				var c = h("redo", "redo", f && f.data),
					e = g(f);
				if(e) return b.push(c), d = {}, f = c.prev = e, f.snapshot.restore(a), f.data
			},
			redo: function() {
				if(b.length > 0) return f = b.pop(), f.snapshot.restore(a), f.data
			}
		}
	}
}), require.install("qed/edit", function(require, a, b) {
	function s(a, b) {
		if(p.enabled()) return p.check(a, b), !1
	}
	function t(a) {
		return function(b, c, d) {
			if(g(d)) return a(b, c), !1
		}
	}
	var c = require("./util"),
		d = c.assert,
		e = c.addClass,
		f = c.getDocument,
		g = c.hasCtrlOrCmd,
		h = c.getText,
		i = c.isVisible,
		j = require("event").add,
		k = require("./unload"),
		l = new(require("./rules").Ruleset),
		m = require("./selection").Selection,
		n = require("./history").observe,
		o = require("./modifiers"),
		p = require("./snippets"),
		q = require("./nodestate").createMeaninglessElement,
		r = require("./npd");
	a.edit = function(a, b) {
		function D() {
			y = !1, p.body.removeAttribute("spellcheck")
		}
		function E(a) {
			y || (y = !0, p.body.setAttribute("spellcheck", "false")), clearTimeout(z), z = setTimeout(D, a || 1e3)
		}
		function G() {
			if(F) return;
			F = !0;
			try {
				B && p.activeElement !== a && a.focus(), s.select(), p.activeElement !== a && a.focus()
			} finally {
				d(F), F = !1
			}
			d(p.activeElement === a)
		}
		function H() {
			p.activeElement === a && s.record()
		}
		function I(b) {
			if(p.activeElement !== a) return !1
		}
		function J() {
			if(i(a) && h(a) !== v) return "You appear to be editing text on this page."
		}
		if(!a || /^textarea|input$/i.test(a.nodeName) || a.isContentEditable) return;
		e(a, "qed_content"), a.setAttribute("contentEditable", "true"), r.fix(a, "isEditorRoot", !0), b = b || l, r.fix(a, "editorRuleset", b);
		var p = f(a),
			s = new m(window, a, q(p, "span"), q(p, "span")),
			t = !1,
			u = n(a),
			v = h(a),
			w = 0,
			x = c,
			y, z, A = navigator.userAgent || "",
			B = A.indexOf("Gecko/") > -1 && A.indexOf("Chrome") < 0,
			C = {
				38: "up arrow",
				40: "down arrow"
			};
		s.onBeforeRepair(o.sanitizeBeforeRepair), j(a, "keydown", function(a) {
			B && E(1e3);
			try {
				s.record();
				var c = a.keyCode || a.charCode;
				if(c in C) return;
				return s.modify(function(d, e) {
					if(c == 90 && g(a)) return a.shiftKey ? u.redo() : u.undo(), !1;
					u.beginOperation("key" + c);
					var f = b.getKeyHandler(a);
					if(f) return f.call(x, d, e, a)
				})
			} finally {
				G()
			}
		});
		var F;
		return j(a, "keyup", function(a) {
			try {
				s.record();
				var b = a.keyCode || a.charCode;
				if(b in C) return;
				s.modify(function(a, c) {
					u.endOperation("key" + b)
				})
			} finally {
				G()
			}
		}), j(a, "keypress", H), j(a, "mouseup", H), j(a, "mouseout", H), j(a, "focus", G), j(a, "blur", s.remove), j(a, "keydown", I), j(a, "keypress", I), j(a, "keyup", I), k.checkBeforeUnload(J), {
			modify: function(a, b) {
				var c = "modify" + w++;
				try {
					return s.modify(function(b, d) {
						u.beginOperation(c);
						try {
							return a.call(x, b, d)
						} finally {
							u.endOperation(c)
						}
					})
				} finally {
					(b || t) && !(t = s.modifying()) && G()
				}
			},
			clear: function(a) {
				this.modify(function(a, b) {
					var d = c.getEditorRoot(a),
						e = f(d).createElement("br");
					c.removeAllChildren(d), d.appendChild(e), c.insertBefore(d, a, e), c.insertBefore(d, b, e)
				}, a), this.html(!0)
			},
			focus: G,
			select: G,
			html: function(b) {
				return b && (v = h(a)), r.cleanInnerHTML(a)
			},
			text: function(b) {
				return h(a, b)
			},
			stop: function() {
				r.clean(a), k.removeCheck(J)
			}
		}
	}, l.addOkTag("div").addOkTag("p", "div").addOkTag("br").addOkTag("img").addOkTag("ol").addOkTag("ul").addOkTag("li").addOkTag("blockquote").addOkTag("address", "blockquote").addOkTag("b").addOkTag("strong", "b").addOkTag("i").addOkTag("em", "i").addOkTag("u").addOkTag("span").addOkTag("a").addOkStyle("font-weight", "bold").addOkStyle("font-weight", "normal").addOkStyle("font-style", "italic").addOkStyle("font-style", "normal").addOkStyle("text-decoration", "underline").addOkStyle("text-decoration", "none").addKeyHandler(9, s).addKeyHandler(65, c.handleSelectAll).addKeyHandler(66, t(o.bold)).addKeyHandler(73, t(o.italic)).addKeyHandler(85, t(o.underline))
}), require.install("linkify", function(require, a, b) {
	a.iterLinks = function(a, b) {
		c(a, {
			callback: function(a, c) {
				return c && b(c, a), ""
			}
		})
	};
	var c = a.linkify = function() {
			var a = "[a-z\\d.-]+://",
				b = "(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])",
				c = "(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+",
				d = "(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)",
				e = "(?:" + c + d + ")",
				f = "(?:[;/][^#?<>\\s]*)?",
				g = "(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?",
				h = "\\b" + a + "[^<>\\s]+",
				i = "\\b" + e + f + g + "(?!\\w)",
				j = "mailto:",
				k = "(?:" + j + ")?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" + e + g + "(?!\\w)",
				l = new RegExp("(?:" + h + "|" + i + "|" + k + ")", "ig"),
				m = new RegExp("^" + a, "i"),
				n = {
					"'": "`",
					">": "<",
					")": "(",
					"]": "[",
					"}": "{",
					"»": "«",
					"›": "‹"
				},
				o = {
					callback: function(a, b) {
						return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
					},
					punct_regexp: /(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/
				};
			return function(a, b) {
				b = b || {};
				var c, d, e, f, g = "",
					h = [],
					i, k, p, q, r, s, t, u;
				for(d in o) b[d] === undefined && (b[d] = o[d]);
				while(c = l.exec(a)) {
					e = c[0], k = l.lastIndex, p = k - e.length;
					if(/[\/:]/.test(a.charAt(p - 1))) continue;
					do q = e, u = e.substr(-1), t = n[u], t && (r = e.match(new RegExp("\\" + t + "(?!$)", "g")), s = e.match(new RegExp("\\" + u, "g")), (r ? r.length : 0) < (s ? s.length : 0) && (e = e.substr(0, e.length - 1), k--)), b.punct_regexp && (e = e.replace(b.punct_regexp, function(a) {
						return k -= a.length, ""
					}));
					while(e.length && e !== q);
					f = e, m.test(f) || (f = (f.indexOf("@") !== -1 ? f.indexOf(j) ? j : "" : f.indexOf("irc.") ? f.indexOf("ftp.") ? "http://" : "ftp://" : "irc://") + f), i != p && (h.push([a.slice(i, p)]), i = k), h.push([e, f])
				}
				h.push([a.substr(i)]);
				for(d = 0; d < h.length; d++) g += b.callback.apply(window, h[d]);
				return g || a
			}
		}()
}), require.install("qtexteditor", function(require, a, b) {
	function h() {
		return(new Date).getTime() * 1e3
	}
	function i(a) {
		var b = parseInt(a);
		return isNaN(b) ? a != "normal" && a != "lighter" : b > 400
	}
	var c = require("w2.quora").Component,
		d = require("qed/edit").edit,
		e = require("qed/util"),
		f = e.hasCtrlOrCmd,
		g = e.deleteContents,
		j = a.QTextEditorBase = c.extend({
			onUnload: function() {
				this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.meaningfulChangeTimeout && (clearTimeout(this.meaningfulChangeTimeout), this.meaningfulChangeTimeout = null), this.uninstallScrollHandlers(), this._qed && (this._qed.stop(), delete this._qed)
			},
			onLoad: function(a) {
				function c(a) {
					return function() {
						return b.modify(function(b, c) {
							$(b).before("[" + a + "]"), $(c).after("[/" + a + "]")
						}, !0), !1
					}
				}
				function g(a, c) {
					e.$("#@cmd_" + a).click(function() {
						return b.modify(c, !0), !1
					})
				}
				this.linkSelectorLoaded = !1, this.editor = this.$("#@editor");
				var b = this._qed = d(this.editor.get(0));
				if(!b) return;
				this.enterCallback || (this.enterCallback = null), this.focusCallback || (this.focusCallback = null), this.blurCallback || (this.blurCallback = null), this.typingStateCallback || (this.typingStateCallback = function(a) {}), this.typingTimeout = null, this.lastInputTime = 0, this.lastTypingReportTime = 0, this.lastReportedTypingState = "empty", this.typingStopped = !1, this.meaningfulChangeCallback || (this.meaningfulChangeCallback = function() {}), this.meaningfulChangeTimeout = null, this.resetMeaningfulChange(), this.$("#@add_qlink").tooltip({
					contents: "Link to questions, topics and people."
				}), this.$("#@cmd_blockquote").tooltip({
					contents: "Blockquote a section of text."
				}), this.$("#@cmd_code").tooltip({
					contents: "Code Block [code][/code]"
				}), this.$("#@cmd_latex").tooltip({
					contents: "LaTeX [math][/math]"
				}), this.$("#@cmd_spoiler").tooltip({
					contents: "Spoiler [spoiler][/spoiler]"
				}), this.$("#@cmd_qimg").tooltip({
					contents: "Insert an image."
				}), this.$("#@add_qlink").click(this.fnbind(function() {
					return this.addLink(), !1
				})), this.$("#@cmd_code").click(c("code")), this.$("#@cmd_latex").click(c("math")), this.$("#@cmd_spoiler").click(c("spoiler")), this.$("#@cmd_qimg").click(this.fnbind(function() {
					return this.openImageDialog(), !1
				}));
				var e = this,
					f = require("qed/modifiers");
				g("bold", f.bold), g("italic", f.italic), g("underline", f.underline), g("blockquote", f.blockquote), g("insertorderedlist", f.orderedList), g("insertunorderedlist", f.unorderedList), this.$("#@save").click(this.fnbind(function() {
					this.save()
				})), this.editor.keydown(this.fnbind(function(a) {
					return this.editorKeyDown(a)
				})), this.editor.keyup(this.fnbind(function(a) {
					return this.editorKeyUp(a)
				})), this.editor.keypress(this.fnbind(function(a) {
					return this.editorKeyPress(a)
				})), this.editor.focus(this.fnbind(function(a) {
					this.editor.attr("focused", !0), this.loadLinkSelector(), this.focusCallback && this.focusCallback(), this.focusEditLinkCallback && this.focusEditLinkCallback()
				})), this.editor.blur(this.fnbind(function(a) {
					this.editor.removeAttr("focused"), this.blurCallback && this.blurCallback(), this.detectLinks()
				})), this.editor.click(this.fnbind(function(a) {
					this.setFormattingButtons(a.target)
				}));
				var h = this.fnbind(function() {
					this.qlinkSync()
				});
				this.$("#@qlink_text").keydown(h), this.$("#@qlink_text").keyup(h), this.$("#@qlink_text").keypress(h), this.$("#@qlink_text").change(h), this.$(".@qlink_close").click(this.fnbind(function() {
					return this.replaceLinkWithText(this.$("#@qlink_key").val(), "@" + this.getLinkSelector().getValue()), this.editor.focus(), !1
				})), this.$("#@show_preview").change(this.fnbind(function() {
					var a = this.$("#@qlink_key").val(),
						b = this.qlink_data[a].target;
					b["type"] == "question" && (this.qlink_data[a].options || (this.qlink_data[a].options = {}), this.$("#@show_preview").attr("checked") ? (this.qlink_data[a].options.preview = !0, this.$("#qlink_preview_" + a).show(), this.$("#qlink_container_" + a).addClass("qlink_container_preview")) : (this.qlink_data[a].options.preview = !1, this.$("#qlink_preview_" + a).hide(), this.$("#qlink_container_" + a).removeClass("qlink_container_preview")))
				})), this.$("#@qlink_update").click(this.fnbind(function() {
					return this.qlinkUpdate(), !1
				})), this.$("#@editor img").each(function(a, b) {
					e.markImageAsDetected(b)
				}), this._enableImageDetection = !0, this.registerScrollHandlers(), this.registerLinkHandlers()
			},
			registerScrollHandlers: function() {
				this.buttonsVisible && this.installScrollHandlers(this.fixButtons)
			},
			registerLinkHandlers: function() {
				function b(b, c) {
					a.addLinkHandlerForType(b, a.fnbind(c))
				}
				this._linkHandlers = {};
				var a = this;
				b("youtube", a.handleYoutubeLink), b("image", a.handleImageLink), b("email", a.handleEmailLink), b("invalid", a.handleInvalidLink)
			},
			addLinkHandlerForType: function(a, b) {
				this._linkHandlers && (this._linkHandlers[a] = b)
			},
			getLinkHandler: function(a) {
				return this._linkHandlers && this._linkHandlers[a]
			},
			fixButtons: function() {
				if(!this.buttonsVisible) return;
				var a = this.$("#@qtext_editor_buttons").height();
				a && this.$("#@qtext_editor_buttons_wrapper").css("height", a + "px");
				var b = this.$("#@editor_outer").offset();
				if(b) {
					var c = this.$("#@editor_outer").height(),
						d = b.top + c - 150,
						e = $(window).scrollTop();
					e > b.top && e < d && c > 300 ? this.$("#@qtext_editor_buttons").addClass("qtext_editor_buttons_fixed") : this.$("#@qtext_editor_buttons").removeClass("qtext_editor_buttons_fixed")
				}
			},
			loadLinkSelector: function(a) {
				this.linkSelectorLoaded || this.serverCall("get_link_selector").contentFor(this.$("#@link_selector"), {
					parentCID: this.cid
				}).success(this.fnbind(function(b) {
					if(!this.plaintext) {
						var c = this.getLinkSelector();
						c && c.setCallback(this.fnbind(function() {
							this.onLinkSelection()
						}))
					}
					this.linkSelectorLoaded = !0, a && $.isFunction(a) && a()
				})).send()
			},
			makeKey: function() {
				var a = "",
					b = "abcdefghijklmnopqrstuvwxyz0123456789";
				for(var c = 0; c < 10; c++) a += b[Math.floor(Math.random() * b.length)];
				return a
			},
			syncTypingState: function() {
				var a = 1e7,
					b;
				this.isEmpty() || this.typingStopped ? b = "empty" : this.lastInputTime < h() - a ? b = "paused" : b = "typing";
				var c = !1;
				b != this.lastReportedTypingState && (c = !0), b != "empty" && this.lastTypingReportTime < h() - 55e6 && (c = !0), c && (this.typingStateCallback(b), this.lastReportedTypingState = b, this.lastTypingReportTime = h()), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null);
				if(b == "typing" || b == "paused") this.typingTimeout = setTimeout(this.fnbind(function() {
					this.syncTypingState()
				}), a / 1e3)
			},
			checkMeaningfulChange: function() {
				var a = 3e4;
				if(this.meaningfulChangeTimeout) return;
				this.meaningfulChangeTimeout = setTimeout(this.fnbind(function() {
					var a = this.serialize(!0);
					a != this.meaningfulChangeBase && this.meaningfulChangeCallback(), this.meaningfulChangeBase = a, this.meaningfulChangeTimeout = null
				}), a)
			},
			reportMeaningfulChange: function() {
				this.meaningfulChangeBase = null, this.checkMeaningfulChange()
			},
			resetMeaningfulChange: function() {
				this.meaningfulChangeBase = this.serialize(!0), this.meaningfulChangeTimeout && (clearTimeout(this.meaningfulChangeTimeout), this.meaningfulChangeTimeout = null)
			},
			editorKeyUp: function(a) {
				this.detectNewImages(), this.typingStopped = !1, this.lastInputTime = h(), this.syncTypingState(), this.checkMeaningfulChange(), this.dirtyText(), this._detectLinksOnNextKeyUp && (this._detectLinksOnNextKeyUp = !1, this.detectLinks())
			},
			text: function(a) {
				var b = this._cachedText;
				if(a || !b) b = this._qed.text();
				return(this._cachedText = b) || ""
			},
			dirtyText: function() {
				this._cachedText = null
			},
			_cachedUrlInfo: {},
			getUrlInfo: function(a, b) {
				var c = this,
					d = c._cachedUrlInfo[a];
				d !== !1 && (d ? b(d) : ($(c).trigger("link-fetch-start", [a]), c.serverCall("get_url_info").kwargs({
					url: a
				}).success(function(d) {
					b(c._cachedUrlInfo[a] = d), $(c).trigger("link-fetch-end", [a])
				}).error(function() {
					c._cachedUrlInfo[a] = !1, $(c).trigger("link-fetch-end", [a])
				}).send()))
			},
			detectLinks: function() {
				var a = this,
					b = require("linkify").iterLinks;
				b(a.text(), function(b, c) {
					a.detectLink(b, c)
				})
			},
			detectLink: function(a, b) {
				var c = this;
				if(a && a.indexOf("mailto:") == 0) {
					var d = {
						type: "email",
						title: b,
						url: a
					};
					c.handleDetectedLink(d, a, b)
				} else c.getUrlInfo(a, function(d) {
					c.handleDetectedLink(d, a, b)
				})
			},
			handleDetectedLink: function(a, b, c) {
				var d = a && a.type,
					e = d && this.getLinkHandler(d);
				return e ? e(a, b, c) : $(this).trigger("link-added-to-editor", [a, b, c])
			},
			handleImageLink: function(a, b, c) {
				var d = this;
				d.findTextAndModify(c, function(b) {
					var c = d.replaceLinkWithImage(b, a.url);
					d.detectNewImage(c)
				})
			},
			handleYoutubeLink: function(a, b, c) {
				var d = this;
				d.findTextAndModify(c, function(b) {
					var c = "http://img.youtube.com/vi/" + a.video_id + "/hqdefault.jpg",
						e = d.replaceLinkWithImage(b, c);
					d.markImageAsDetected(e);
					for(var f in a) e.setAttribute(f, a[f])
				})
			},
			handleInvalidLink: function(a, b, c) {},
			handleEmailLink: function(a, b, c) {},
			replaceLinkWithImage: function(a, b) {
				var c = a;
				$(c.foundStart).replaceWith(c.start), $(c.foundEnd).replaceWith(c.end), e.deleteContents(c.start, c.end), this.handleImageWithinLink(c);
				var d = b && this.addImage(b, !0);
				return d
			},
			handleImageWithinLink: function(a) {
				var b = a.start.parentElement;
				if(!e.hasTag(b, "a") || b !== a.end.parentElement) return;
				var c = b.firstChild;
				while(c) {
					var d = c.nextSibling;
					c.nodeType === 3 ? (!c.nodeValue || c.nodeValue.length === 0) && $(c).remove() : e.hasTag(c, "span") && c !== a.start && c !== a.end && (!c.childNodes || c.childNodes.length === 0) && $(b).after(c), c = d
				}
				b.firstChild == a.start && b.lastChild == a.end && ($(b).before(a.start).after(a.end), e.deleteContents(a.start, a.end))
			},
			findTextAndModify: function(a, b, c) {
				var d = this,
					e = require("find"),
					f = !1;
				d._qed.modify(function(c, f) {
					e.findText(d.editor.get(0), a, function(a, d) {
						var e = {
							start: c,
							end: f,
							foundStart: a,
							foundEnd: d
						};
						return b(e)
					})
				}, c)
			},
			onLinkAdded: function(a) {
				var b = this;
				$(b).bind("link-added-to-editor", function(c, d, e, f) {
					return a.call(b, d, e, f)
				})
			},
			onLinkFetchStart: function(a) {
				var b = this;
				$(b).bind("link-fetch-start", function(c, d) {
					return a.call(b, d)
				})
			},
			onLinkFetchEnd: function(a) {
				var b = this;
				$(b).bind("link-fetch-end", function(c, d) {
					return a.call(b, d)
				})
			},
			detectNewImages: function() {
				if(!this._enableImageDetection) return;
				var a = this;
				this.$("#@editor img").each(function(b, c) {
					a.detectNewImage(c)
				})
			},
			detectNewImage: function(a) {
				function c(a, b, c) {
					if(!/^webkit-fake-url:/.test(a)) {
						var d = new Image;
						d.onload = b, c && (d.onerror = c), d.src = a
					} else c && c()
				}
				var b = this;
				if(!b.markImageAsDetected(a)) return;
				$(a).addClass("qtext_image"), c(a.src, function() {
					b.serverCall("upload_image_by_url").kwargs({
						url: a.src
					}).success(function(b) {
						b && c(b.url, function() {
							a.src = b.url
						})
					}).send()
				}, function() {
					$(a).remove()
				})
			},
			markImageAsDetected: function(a) {
				if(!a.hasAttribute("detected")) return a.setAttribute("detected", a.src.slice(0, 100)), !0
			},
			editorKeyPress: function(a) {
				if(String.fromCharCode(a.which) == "@") return this.addLink(), !1
			},
			editorKeyDown: function(a) {
				if(this.enterCallback && !a.shiftKey && a.keyCode == 13) return this.enterCallback(), !1;
				switch(a.which) {
				case 86:
					if(!f(a)) break;
				case 32:
				case 13:
					this._detectLinksOnNextKeyUp = !0
				}
				return !0
			},
			addDummySpan: function() {
				var a;
				return this._qed.modify(function(b, c) {
					g(b, c), a = document.createElement("span"), c.parentNode.insertBefore(a, c)
				}), a
			},
			openImageDialog: function() {
				var a = this;
				a._dialog = a._dialog || a.dialog().title("Insert an Image").cancel(null, "Close").close(function() {
					a._dialog = null
				}).load("image_dialog_contents")
			},
			addImage: function(a, b) {
				var c = this;
				return c._qed.modify(function(d, e) {
					var f = d.parentNode;
					if(f) {
						var g = document,
							h = g.createElement("div"),
							i = h.appendChild(g.createElement("img"));
						return i.src = a, f.insertBefore(h, d), b || c.detectNewImages(), i
					}
				}, !0)
			},
			addLink: function() {
				if(!this.linkSelectorLoaded) return this.loadLinkSelector(this.fnbind(this.addLink));
				var a = this.makeKey(),
					b = document.createElement("a");
				b.id = "qlink_" + a, b.innerHTML = "…", b.className = "qlink", b.href = "#", this._qed.modify(function(a, c) {
					function d(a) {
						$(a).closest("a.qlink").map(function() {
							$(this).after(a)
						})
					}
					d(a), d(c), g(a, c), $(a).before(b)
				}, !0), this.qlink_data[a] = {
					target: {},
					text: ""
				}, setTimeout(this.fnbind(function() {
					this.editLink(a, "")
				}), 0)
			},
			setSelectionlessCallback: function(a) {
				if(!this.selectionlessCallback) {
					var b = this.getLinkSelector(),
						c = this;
					b.setSelectionlessCallback(function() {
						c.callSelectionlessCallback()
					})
				}
				this.selectionlessCallback = a
			},
			callSelectionlessCallback: function() {
				var a = this.selectionlessCallback;
				a && a()
			},
			editLink: function(a, b) {
				this.closeEditLink(), this.editingLink = !0;
				var c = this,
					d = this.qlink_data[a].text ? this.qlink_data[a].text : b,
					e = this.qlink_data[a].target,
					f = this.qlink_data[a].options;
				e.type && (this.$("#@qlink_edit_options").show(), this.$("#@qlink_selector").hide()), e["type"] == "question" ? (this.$("#@qlink_show_preview").show(), f && f.preview && this.$("#@show_preview").attr("checked", f.preview)) : this.$("#@qlink_show_preview").hide(), this.$("#@qlink_key").val(a), d && this.$("#@qlink_text").val(d);
				var g = this.$("#@editor_wrapper").offset(),
					h = this.$("#@editor #qlink_" + a).offset(),
					i = h.left - g.left,
					j = h.top - g.top;
				this.$("#@qlink_editor").css("left", i - 10), this.$("#@qlink_editor").css("top", j + 20), this.$("#@qlink_editor").removeClass("hidden");
				var k = this.getLinkSelector();
				k.clear(), k.setText(d), k.focus(!0), k.setEscKeyDown(this.fnbind(function(b) {
					var c = k.getValue(),
						d = b.keyCode == 27,
						e = !c && b.keyCode == 13,
						f = !c && b.keyCode == 8,
						g = "@";
					d && c && (g = "@" + c);
					if(e || d || f) return this.replaceLinkWithText(a, g), setTimeout(this.fnbind(function() {
						this.editor.focus()
					}), 0), !1
				}));
				var l = function() {
						c.replaceLinkWithText(a, "@" + k.getValue())
					};
				this.setSelectionlessCallback(this.fnbind(function() {
					l(), setTimeout(this.fnbind(function() {
						this.editor.focus()
					}), 0)
				})), k.setKeyUp(function() {
					c.editLinkText(a, k.getValue())
				}), e.type ? this.$("#@qlink_text").focus() : (this.focusEditLinkCallback = this.fnbind(function() {
					this.editingLink ? l() : this.closeEditLink()
				}), this.$("#@editor #qlink_" + a).addClass("qlink_active"))
			},
			getLinkSelector: function() {
				return this.child("link_selector")
			},
			replaceLinkWithText: function(a, b) {
				this.closeEditLink();
				if(!a) return;
				var c = this.$("#@editor #qlink_" + a);
				c.length && this._qed.modify(function(a, d) {
					c.after(d).after(a).replaceWith(b || "")
				}), delete this.qlink_data[a]
			},
			editLinkText: function(a, b) {
				if(!this.editingLink) return;
				this.qlink_data[a].text = b, this.$("#@editor #qlink_" + a).text("@" + b)
			},
			closeEditLink: function() {
				this.editingLink = !1;
				var a = this.$("#@qlink_key").val();
				if(!a) return;
				this.$("#@qlink_editor").addClass("hidden"), this.$("#@editor #qlink_" + a).removeClass("qlink_active"), this.$("#@qlink_edit_options").hide(), this.$("#@qlink_selector").show(), this.$("#@show_preview").attr("checked", !1)
			},
			qlinkSync: function() {
				var a = this.$("#@qlink_key").val(),
					b = this.$("#@qlink_text").val(),
					c = this.$("#@editor #qlink_" + a);
				c.text(b || "…");
				var d = this.getLinkSelector().result;
				b && c.attr("title", this.qlink_data[a].text = b), d && (this.qlink_data[a].target = d)
			},
			qlinkUpdate: function() {
				this.qlinkSync(), this.closeEditLink()
			},
			onLinkSelection: function() {
				var a = this.getLinkSelector().qValue;
				this.$("#@qlink_text").val(a), this.qlinkUpdate(), setTimeout(this.fnbind(function() {
					this.editor.focus()
				}), 0)
			},
			setFormattingButtons: function(a) {
				var b = $(a),
					c = {
						bold: i(b.css("font-weight")),
						italic: b.css("font-style") == "italic",
						underline: b.css("text-decoration") == "underline"
					};
				for(var d in c) c[d] ? this.$("#@cmd_" + d).addClass("qtext_editor_button_active") : this.$("#@cmd_" + d).removeClass("qtext_editor_button_active")
			},
			setEnterCallback: function(a) {
				this.enterCallback = a
			},
			setTypingStateCallback: function(a) {
				this.plaintext ? this.typingStateCallback = null : this.typingStateCallback = a
			},
			setMeaningfulChangeCallback: function(a) {
				this.plaintext ? this.meaningfulChangeCallback = null : this.meaningfulChangeCallback = a
			},
			setFocusCallback: function(a) {
				this.focusCallback = a
			},
			setBlurCallback: function(a) {
				this.blurCallback = a
			},
			serialize: function(a) {
				var b = {
					html: this.html(a)
				};
				return this.plaintext ? b.data = {} : b.data = this.qlink_data, b
			},
			html: function(a) {
				if(this.plaintext) {
					var b = this.editor.val();
					return b || (b = ""), b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>")
				}
				return this._qed ? this._qed.html(!a) : this.editor.html()
			},
			setHtml: function(a, b) {
				return b && (this.qlink_data = b), this.editor.html(a)
			},
			isEmpty: function() {
				if(this.plaintext) return this.editor.val() == "";
				var a = this.editor.get(0);
				if(!a) return !0;
				if(a.childNodes.length == 1 && a.childNodes[0].tagName == "BR") return !0;
				var b = this.html(!0);
				return b == ""
			},
			valLength: function() {
				if(this.plaintext) {
					var a = this.editor.val();
					return a ? a.replace(/\n/g, "<br>").length : 0
				}
				return this.text().length
			},
			clear: function(a) {
				this.plaintext ? this.editor.val("") : (this._qed && this._qed.clear(a), this.qlink_data = {}, this.lastInputTime = h(), this.syncTypingState(), this.dirtyText())
			},
			stopTyping: function() {
				this.plaintext || (this.typingStopped = !0, this.syncTypingState())
			},
			selectAll: function() {
				this._qed.modify(function(a, b) {
					$(a).prependTo(editor), $(b).appendTo(editor)
				}, !0)
			},
			focus: require("atexit").hook(function() {
				var a = this;
				a.whenOnLoaded(function() {
					var b = a.editor;
					b.anchor().focus();
					if(b.val().length > 0) {
						var c = b.get(0);
						a.plaintext ? c.setSelectionRange ? c.setSelectionRange(0, b.val().length) : b.select() : a._qed.modify(function(a, b) {
							e.insertBefore(c, a, c.lastChild), e.insertBefore(c, b, c.lastChild)
						}, !0)
					}
					b.attr("focused", !0)
				})
			}),
			blur: function() {
				this.editor.blur().removeAttr("focused")
			}
		}),
		k = a.QTextEditor = j.extend({
			onLoad: function(a) {
				this._super.apply(this, arguments);
				if(!this.mentions_links_on) return;
				$.browser.msie && parseInt($.browser.version) >= 9 && document.execCommand("AutoUrlDetect", !1, !1);
				var b = this;
				this.link_class_to_option = {}, this.options = ["href", "text", "preview", "delete"], $.each(this.options, function(a, c) {
					var d = b.getClassName(c);
					b.link_class_to_option[d] = c
				}), b.linkEditorDiv = b.$("#@editor_wrapper"), b.initLinkOptions(), b.onLinkAdded(function(a, c, d) {
					b.handleLinkAdded(a, c, d)
				}), b.editor.mouseover(function(a) {
					return b.linkEditorMouseOver(a)
				}), b.editor.keydown(function(a) {
					return b.linkEditorKeyDown(a)
				}), b._retrievingUrlInfo = {}, b._retrievingUrlInfoCount = 0, b.onLinkFetchStart(function(a) {
					b.$("#@spinner").show(), b._retrievingUrlInfo[a] = !0, b._retrievingUrlInfoCount++
				}), b.onLinkFetchEnd(function(a) {
					b._retrievingUrlInfoCount--, delete b._retrievingUrlInfo[a], b._retrievingUrlInfoCount == 0 && b.$("#@spinner").hide()
				})
			},
			onUnload: function() {
				this._super.apply(this, arguments), delete this.linkEditorDiv, delete this.editor, delete this.linkOptions
			},
			getUrlInfo: function(a, b) {
				if(!this.mentions_links_on) {
					this._super.apply(this, arguments);
					return
				}
				if(this._retrievingUrlInfo && this._retrievingUrlInfo[a]) return;
				this._retrievingUrlInfo[a] = !0;
				var c = this;
				this._super.apply(this, [a, function(d) {
					delete c._retrievingUrlInfo[a], b(d)
				}])
			},
			getClassName: function(a) {
				return "qtext_editor_link_" + a
			},
			getAttrName: function(a) {
				return a === "href" ? a : "data-link-" + a
			},
			getButton: function(a) {
				return this.$("#@link_option_" + a)
			},
			initLinkOptions: function() {
				var a = this;
				a.linkOptions = a.$("#@qtext_editor_link_options"), a.getButton("href").click(function(b) {
					return a.handleLinkOptionHref()
				}).tooltip({
					contents: "Show linked URL"
				}), a.getButton("text").click(function(b) {
					return a.handleLinkOptionText()
				}).tooltip({
					contents: "Show linked title"
				}), a.getButton("preview").click(function(b) {
					return a.handleLinkOptionPreview()
				}), a.getButton("delete").click(function(b) {
					return a.handleLinkOptionDelete()
				}).tooltip({
					contents: "Show unlinked"
				})
			},
			positionLinkOptions: function(a) {
				var b = $("<span>﻿</span>").prependTo(a),
					c = b.offset();
				b.remove();
				var d = this.linkEditorDiv.offset(),
					e = c.left - d.left - 2,
					f = c.top - d.top;
				this.linkOptionsHeight = this.linkOptionsHeight || this.linkOptions.outerHeight(), f -= this.linkOptionsHeight, this.linkOptions.css("top", f), this.linkOptions.css("left", e)
			},
			linkEditorMouseOver: function(a) {
				var b = a.target,
					c = (b && b.nodeName || "").toLowerCase(),
					d = this.linkOptions;
				b = $(b);
				var f;
				if(c === "a") f = b[0];
				else {
					var g = b.parents("a");
					g.length > 0 && (f = g[0])
				}
				this.unhighlightLinkTarget(), f && (this.linkTarget = f, this.positionLinkOptions(f));
				if(f || e.contains(d[0], b)) {
					var h = this.detectNewLinkElement(f);
					h && (this.highlightActiveButton(f), this.highlightLinkTarget(), d.show())
				} else d.hide()
			},
			highlightActiveButton: function(a) {
				var b = this,
					c = b.getOption(a);
				$.each(b.options, function(a, d) {
					var e = b.getButton(d);
					d === c ? e.addClass("active") : e.removeClass("active")
				})
			},
			highlightLinkTarget: function() {
				this.linkTarget && $(this.linkTarget).addClass("qtext_editor_link_hover")
			},
			unhighlightLinkTarget: function() {
				this.linkTarget && $(this.linkTarget).removeClass("qtext_editor_link_hover")
			},
			linkAlreadyDetected: function(a, b) {
				var c = this,
					d = this.getLinkParent(b),
					e = d ? c.getQlinkKey(d) : null;
				if(e) return !0;
				if(d) {
					var f = d;
					if($(f).text() !== a) return c.moveSelectionOut(f, b.start, b.end), c.moveSelectionOut(f, b.foundStart, b.foundEnd), c.detectNewLinkElement(d), !0
				}
				return !1
			},
			getLinkParent: function(a) {
				var b = $(a.foundStart).parents("a"),
					c = b.length > 0 ? b[0] : null;
				return c
			},
			detectLinks: function() {
				if(!this.mentions_links_on) {
					this._super.apply(this, arguments);
					return
				}
				var a = this,
					b = require("linkify").iterLinks;
				b(a.text(), function(b, c) {
					a.findTextAndModify(c, function(d) {
						a.linkAlreadyDetected(c, d) || a.detectLink(b, c)
					})
				}), this.detectNewLinkElements()
			},
			detectLink: function(a, b) {
				if(!this.mentions_links_on) {
					this._super.apply(this, arguments);
					return
				}
				if(this.has_excluded_tld(a)) return;
				this._super.apply(this, arguments)
			},
			has_excluded_tld: function(a) {
				var b = this.tlds_to_exclude;
				if(!b) return !1;
				for(var c = 0; c < b.length; c++) {
					var d = b[c];
					if(a && a.toLowerCase().indexOf(d, a.length - d.length) !== -1) return !0
				}
				return !1
			},
			linkEditorKeyDown: function(a) {
				this.linkOptions.hide(), this.unhighlightLinkTarget()
			},
			getQlinkKey: function(a) {
				if(e.hasTag(a, "a")) {
					var b = $(a).attr("id");
					if(b && b.indexOf("qlink_") === 0) return b.substring(6)
				}
				return null
			},
			handleInvalidLink: function(a, b, c) {
				if(!this.mentions_links_on) return;
				this.handleLinkAdded(a, b, c, "href")
			},
			handleEmailLink: function(a, b, c) {
				if(!this.mentions_links_on) return;
				var d = "Send an email to " + a.title;
				this.handleLinkAdded(a, b, c, "href", d)
			},
			handleLinkAdded: function(a, b, c, d, f) {
				if(!this.mentions_links_on) return;
				var g = this,
					h = document.activeElement == g.editor.get(0),
					i = a.title || c;
				i === b && (d = d || "href", d === "href" && (f = f || this.getDefaultText(b))), f = f || i, g.findTextAndModify(c, function(a) {
					if(g.linkAlreadyDetected(c, a)) return !1;
					var j = g.getLinkParent(a);
					return e.deleteContents(a.foundStart, a.foundEnd), g._qed.modify(function(e, h) {
						var k = g.makeKey(),
							l = "qlink_" + k;
						j ? (g.moveSelectionOut(j, a.start, a.end), g.moveSelectionOut(j, a.foundStart, a.foundEnd), g.moveSelectionOut(j, e, h)) : j = "<a>", j = $(j), j.attr("id", l), j.text(i), j.addClass("qlink"), j.attr(g.getAttrName("text"), f), j.attr(g.getAttrName("href"), b), j.attr(g.getAttrName("delete"), c), g.setOption(j, d || "text"), $(a.foundStart).after(j)
					}, h), !0
				})
			},
			getDefaultText: function(a) {
				var b = this.getHostName(a),
					c = b.split("."),
					d = c.slice(-1)[0].match(/com|net|org|edu|gov/i) ? 2 : 3;
				return c = c.slice(-d), b = c.join("."), b = b.charAt(0).toUpperCase() + b.slice(1), "Page on " + b
			},
			getHostName: function(a) {
				var b = a.match(/^https?:\/\/([^/]+)/i);
				return b ? b[1] : null
			},
			removeLinkClasses: function(a) {
				var b = this;
				$.each(this.options, function(c, d) {
					var e = b.getClassName(d);
					$(a).removeClass(e)
				})
			},
			getOption: function(a) {
				var b, c = this;
				return $.each(this.options, function(d, e) {
					$(a).hasClass(c.getClassName(e)) && (b = e)
				}), b
			},
			setOption: function(a, b) {
				this.removeLinkClasses(a), $(a).addClass(this.getClassName(b))
			},
			getValue: function(a, b) {
				return $(a).
				attr(this.getAttrName(b))
			},
			setValue: function(a, b, c) {
				return $(a).attr(this.getAttrName(b), c)
			},
			initNonDetectedLink: function(a) {
				var b = this.makeKey(),
					c = "qlink_" + b,
					a = $(a),
					d = a.attr("href");
				if(!d || $.trim(d).length == 0 || d === "#") {
					var e = a.attr(this.getAttrName("href"));
					d = e || "http://..."
				}
				var f = a.text();
				if(!f || $.trim(f).length == 0) f = d;
				if(this._retrievingUrlInfo[d] || this._retrievingUrlInfo[f]) return !1;
				a.attr("id", c), a.attr(this.getAttrName("text"), f), a.attr(this.getAttrName("href"), d), a.text(f), a.addClass("qlink");
				var g = this.getOption(a);
				return g || this.setOption(a, "text"), !0
			},
			initLinkSelectorLink: function(a) {
				var a = $(a);
				if(a.attr(this.getAttrName("text")) || this.getOption(a)) return !0;
				var b = this.getQlinkKey(a[0]);
				if(!this.qlink_data[b]) return !0;
				if(this.editingLink && b === this.$("#@qlink_key").val()) return !1;
				var c = this.getValue(a, "href");
				if(!c || c == "#" || c.length == 0) {
					var d = window.location;
					c = this.qlink_data[b].target.url
				}
				var e = a.text();
				return this.setValue(a, "href", c), this.setValue(a, "text", e), this.setValue(a, "delete", e), this.setOption(a, "text"), !0
			},
			qlinkSync: function() {
				this._super.apply(this, arguments);
				if(!this.mentions_links_on) return;
				var a = this.$("#@qlink_key").val(),
					b = this.$("#@qlink_text").val(),
					c = this.$("#@editor #qlink_" + a);
				if(!b || !a || !c) return;
				var d = this.getLinkSelector().result;
				if(!d) return;
				this.initLinkSelectorLink(c)
			},
			detectNewLinkElement: function(a) {
				var a = $(a),
					b = this.getQlinkKey(a[0]);
				return b && a.attr(this.getAttrName("text")) ? !0 : this.qlink_data[b] ? this.initLinkSelectorLink(a) : this.initNonDetectedLink(a)
			},
			detectNewLinkElements: function() {
				var a = this;
				this.$("#@editor a").each(function(b, c) {
					a.detectNewLinkElement(c)
				})
			},
			handleLinkOptionHref: function(a) {
				var b = this,
					c = b.linkTarget,
					d = b.getQlinkKey(c);
				if(!d) return b.editor.focus(), !1;
				if(b.getOption(c) === "href") return b.editor.focus(), !1;
				var e = b.getValue(c, "href");
				return b.unhighlightLinkTarget(c), b._qed.modify(function(a, f) {
					b.updateLinkText(c, d, e), b.setOption(c, "href"), $(c).addClass("qlink")
				}, !0), b.highlightLinkTarget(c), b.highlightActiveButton(c), !1
			},
			handleLinkOptionText: function(a) {
				var b = this,
					c = b.linkTarget,
					d = b.getQlinkKey(c);
				if(!d) return b.editor.focus(), !1;
				if(b.getOption(c) === "text") return b.editor.focus(), !1;
				b.unhighlightLinkTarget(c);
				var e = b.getValue(c, "text");
				return b._qed.modify(function(a, f) {
					b.updateLinkText(c, d, e), b.setOption(c, "text"), $(c).addClass("qlink")
				}, !0), b.highlightLinkTarget(c), b.highlightActiveButton(c), !1
			},
			handleLinkOptionPreview: function(a) {
				return !1
			},
			handleLinkOptionDelete: function(a) {
				var b = this,
					c = this.linkTarget,
					d = b.getQlinkKey(c);
				if(!d) return b.editor.focus(), !1;
				if(b.getOption(c) === "delete") return b.editor.focus(), !1;
				b.unhighlightLinkTarget(c);
				var e = b.getValue(c, "delete");
				return this._qed.modify(function(a, f) {
					b.updateLinkText(c, d, e), b.setOption(c, "delete"), $(c).removeClass("qlink")
				}, !0), b.highlightLinkTarget(c), b.highlightActiveButton(c), !1
			},
			updateLinkText: function(a, b, c) {
				var d = this,
					e = $(a).text();
				this._qed.modify(function(b, e) {
					d.moveSelectionOut(a, b, e), $(a).text(c)
				}, !0);
				var f = this.getOption(a);
				this.setValue(a, f, e)
			},
			containsSelection: function(a, b, c) {
				return $.contains(a, b) || $.contains(a, c)
			},
			moveSelectionOut: function(a, b, c) {
				this.containsSelection(a, b, c) && $(a).after(b).after(c)
			}
		}),
		l = a.ThreadMessageQTextEditor = k.extend({
			onLoad: function(a) {
				this.is_disabled = !1, this._super.apply(this, arguments), this.setTypingStateCallback(this.fnbind(function(a) {
					this.serverCall("typing").kwargs({
						area: "thread-" + this.thread_id,
						state: a
					}).send()
				})), this.focusOnload && this.focus()
			},
			request: function() {
				if(this.is_disabled || this.isEmpty() && !this.plaintext) return !1;
				var a = {};
				a.thread_id = this.thread_id, a.object_id = this.object_id, this.isEmpty() && this.plaintext ? a.msg = {
					html: this.editor.val()
				} : a.msg = this.serialize(), require("w2.rpc"), require("webnode2").rpc("/thread/" + this.ajax_POST).kwargs(a).liveMutate().success(this.fnbind(function() {
					this.cleanUp()
				})).send(), this.disable()
			},
			disable: function() {
				this.is_disabled = !0, this.editor.addClass("qtext_editor_content_disabled")
			},
			cleanUp: function() {
				this.is_disabled = !1, this.editor.removeClass("qtext_editor_content_disabled"), this.clear(), this.blur(), this.focus()
			}
		});
	a.CompactThreadMessageQTextEditor = l.extend({
		onLoad: function(a) {
			this._super.apply(this, arguments), this.setEnterCallback(this.fnbind(function() {
				this.request()
			}))
		}
	}), a.TestSaveButton = c.extend({
		onLoad: function() {
			this.$("#@save").click(this.fnbind(function() {
				var a = this.lookup("editor").serialize();
				$.securepost("/internal/qtexttest/save_POST", {
					content: a
				})
			}))
		}
	}), a.TCommentQTextEditor = k.extend({
		registerScrollHandlers: function() {},
		onLoad: function(a) {
			function d(a) {
				a || !c ? b.$("#@qtext_editor_buttons_wrapper").toggle(a) : c && (c = !1, b.focus())
			}
			var b = this,
				c;
			b._super.apply(b, arguments), b.editor.focus(function() {
				d(!0)
			}).blur(function() {
				d(!1)
			}), b.$("#@qtext_editor_buttons_wrapper").mousedown(function() {
				c = !0
			}), b.setMeaningfulChangeCallback(b.fnbind(function() {
				b.save_draft()
			}))
		},
		save_draft: function() {
			this.serverCall("save_draft_auto").kwargs({
				content: this.serialize(),
				window_id: require("webnode2").windowId,
				draft_space: this.draft_space
			}).send()
		}
	}), a.EmbedQtextEditor = k.extend({
		onLoad: function(a) {
			this._super.apply(this, arguments);
			var b = this;
			b.url_attr_name = "data-url", b.embed_data_attr_name = "data-embed", b.embedEditorDiv = b.$("#@embed_editor"), b.last_embed_update = +(new Date), b.embedComponents = {}, b.placeholderImages = {}, b.overlays = {}, b.retrieveExistingEmbeds(), b.onLinkAdded(function(a) {
				b.handleLinkAdded(a)
			}), b.onLinkFetchStart(function() {
				b.$("#@spinner").show()
			}), b.onLinkFetchEnd(function() {
				b.$("#@spinner").hide()
			}), b.editor.keydown(function(a) {
				return b.embedEditorKeyDown(a)
			}), b.editor.bind("paste", function(a) {
				b.updateEmbedDetectedAttr(), b.detectEmbeds()
			}), b.editor.bind("cut", function(a) {
				b.detectEmbeds()
			})
		},
		clear: function(a) {
			var b = this,
				c;
			for(c in b.embedComponents) b.deleteComponent(c, !0);
			this._super.apply(this, arguments)
		},
		retrieveExistingEmbeds: function() {
			var a = this;
			$.each(this.idsToUrls, function(b, c) {
				var d = a.editor.find("#" + a.imageId(b));
				a.placeholderImages[b] = d, a.markEmbedAsDetected(d);
				var e = a.embedEditorDiv.find("#" + a.overlayId(b));
				a.overlays[b] = e
			})
		},
		embedEditorKeyDown: function(a) {
			var b = this;
			return b.detectEmbeds(), !0
		},
		detectEmbeds: function() {
			var a = this;
			if(a.detectEmbedCallback) return;
			a.detectEmbedCallback = setTimeout(function() {
				a.detectAndRemoveDeletedComponents(), a.detectNewPlaceholderImages(), delete a.detectEmbedCallback
			}, 0)
		},
		imageId: function(a) {
			return "embed_image_" + a
		},
		getImageInEditor: function(a) {
			return this.editor.find("#" + this.imageId(a))
		},
		getImage: function(a) {
			var b = this.getImageInEditor();
			if(b.length) {
				var c = this.placeholderImages[a];
				this.placeholderImages[a] = b
			}
			return this.placeholderImages[a]
		},
		overlayId: function(a) {
			return "embed_overlay_" + a
		},
		getOverlay: function(a) {
			return this.overlays[a]
		},
		detectAndRemoveDeletedComponents: function() {
			var a = this;
			a.getEmbedComponents(function(b, c) {
				var d = a.editor.find("#" + a.imageId(b));
				a.isInEditor(d) || a.deleteComponent(b, !0)
			}), a.updateEmbedComponentPositions()
		},
		isInEditor: function(a) {
			return a = $(a), a = a && a.length ? a[0] : null, a ? e.contains(this.editor[0], a) : !1
		},
		deleteComponent: function(a, b) {
			var c = this,
				d = this.embedComponents[a],
				e = this.idsToUrls[a],
				f = this.getOverlay(a),
				g = this.getImage(a);
			delete this.embedComponents[a], delete this.idsToUrls[a], delete this.overlays[a], delete this.placeholderImages[a], f.forgetContents(), f.remove(), g && (g.attr("height", 0), g.attr("width", 0), g.attr("embed_detected", 0), c._qed.modify(function(a, b) {
				g.remove()
			}), c.updateEmbedComponentPositions()), b && d.handleDeleted(), require("webnode2").unloadComponent(d.cid), this.editor.focus()
		},
		getEmbedComponents: function(a) {
			$.each(this.embedComponents, a)
		},
		getGuid: function() {
			var a = e.guid();
			return a.replace(/\./g, "")
		},
		handleLinkAdded: function(a) {
			var b = this,
				c = a.url;
			if(c in b.seenUrls) return;
			var d = b.getGuid();
			b.seenUrls[c] = d, b.idsToUrls[d] = c;
			var e = "embed_component_from_preview",
				f = {
					preview: a
				};
			b.createAndPopulateOverlay(d, e, f)
		},
		createAndPopulateOverlay: function(a, b, c, d) {
			var e = this,
				f = e.createOverlay(a);
			e.$("#@spinner").show(), e.serverCall(b).success(function(a) {
				e.$("#@spinner").hide()
			}).error(function() {
				e.$("#@spinner").hide(), d && d.remove()
			}).contentFor(f, {
				parentCID: e.cid,
				useLoadingSpinner: !1
			}).kwargs(c).send()
		},
		markEmbedAsDetected: function(a) {
			a.attr("embed_detected", this.last_embed_update)
		},
		updateEmbedDetectedAttr: function() {
			var a = this,
				b = this.last_embed_update;
			this.last_embed_update = +(new Date), this.$("#@editor img").each(function(c, d) {
				d = $(d);
				if(d.attr("type") !== "embed") return;
				d.attr("embed_detected") == b && a.markEmbedAsDetected(d)
			})
		},
		detectNewPlaceholderImages: function() {
			var a = this;
			this.$("#@editor img").each(function(b, c) {
				c = $(c);
				if(c.attr("type") !== "embed") return;
				if(c.attr("embed_detected") == a.last_embed_update) return;
				var d = c.attr(a.url_attr_name),
					e, f = a.seenUrls[d];
				if(f) {
					var e = a.idsToUrls[f];
					if(e) {
						c.remove(), setTimeout(function() {
							a.updateEmbedComponentPositions()
						}, 0);
						return
					}
				} else f = a.getGuid();
				c.attr("id", a.imageId(f)), a.markEmbedAsDetected(c), a.placeholderImages[f] = c;
				var g = JSON.parse(c.attr(a.embed_data_attr_name));
				d ? e = d : e = g.url, a.seenUrls[e] = f, a.idsToUrls[f] = e;
				var h = "embed_component_from_client_embed_data",
					i = {
						url: e,
						embed_data: g
					};
				a.createAndPopulateOverlay(f, h, i, c)
			})
		},
		updateEmbedComponentPositions: function() {
			var a = this;
			a.getEmbedComponents(function(b, c) {
				a.updateEmbedComponentPosition(b, c)
			})
		},
		updateEmbedComponentPosition: function(a, b) {
			if(b.positionUpdated) {
				var c = this.getImage(a),
					d = $(c).offset(),
					e = this.embedEditorDiv.offset(),
					f = d.left - e.left,
					g = d.top - e.top,
					h = this.getOverlay(a),
					i = this.editor.width();
				b.positionUpdated(h, f, g, i)
			}
		},
		registerEmbedComponent: function(a, b, c) {
			var d = this,
				e = d.seenUrls[b];
			d.embedComponents[e] = a;
			var f = this.placeholderImages[e];
			if(f && !d.isInEditor(f)) {
				this.getOverlay(e).hide(), setTimeout(function() {
					d.deleteComponent(e, !0)
				}, 0);
				return
			}
			f || d.createPlaceholderImage(e, b), d.setImageEmbedDataAttr(e, c), d.updatePlaceholderImageSize(e), f || d.insertPlaceholderImage(e), d.updateEmbedComponentPosition(e, a), a.initializeEmbedComponent(e, d.getImage(e), d.getOverlay(e)), d.updateEmbedComponentPositions()
		},
		createOverlay: function(a) {
			var b = $("<div>", {
				id: this.overlayId(a)
			});
			return b.addClass("embed_overlay"), this.embedEditorDiv.append(b), this.overlays[a] = b, b
		},
		createPlaceholderImage: function(a, b, c) {
			var d = this,
				e = {
					src: d.spacerUrl,
					id: d.imageId(a),
					type: "embed"
				};
			e[d.url_attr_name] = b;
			var f = $("<img>", e);
			f.css("margin", "0").css("padding", "0").css("border", "none"), d.markEmbedAsDetected(f), d.markImageAsDetected(f[0]), c && c(f), this.placeholderImages[a] = f
		},
		insertPlaceholderImage: function(a) {
			var b = this.getImage(a),
				c = $("<div>");
			c.append(b), this._qed.modify(function(a, b) {
				var d = a.parentNode;
				d && d.insertBefore(c[0], a)
			})
		},
		addImage: function(a, b) {
			var c = this,
				d = new Image;
			d.onload = function() {
				c.updateEmbedComponentPositions(), $(d).remove()
			}, d.src = a;
			var e = this._super.apply(this, arguments);
			return e
		},
		updatePlaceholderImageSize: function(a, b, c) {
			var d = this.getOverlay(a),
				e = this.getImage(a);
			b = b ? b : d.height(), c = c ? c : d.width(), e.attr("height", b), e.attr("width", c)
		},
		setImageEmbedDataAttr: function(a, b) {
			var c = this.getImage(a);
			c.attr(this.embed_data_attr_name, b)
		},
		notifySubmit: function() {}
	}), a.EmbedComponentBase = c.extend({
		registerWithParent: function(a, b) {
			this.parent().registerEmbedComponent(this, a, b)
		},
		initializeEmbedComponent: function(a, b, c) {
			this.id = a, this.img = b, this.overlay = c
		},
		dataChanged: function(a) {
			this.setImageEmbedDataAttr(a), this.updatePlaceholderImageSize(), this.parent().updateEmbedComponentPositions()
		},
		setImageEmbedDataAttr: function(a) {
			this.parent().setImageEmbedDataAttr(this.id, a)
		},
		componentDeleted: function() {
			this.parent().deleteComponent(this.id, !1)
		},
		updatePlaceholderImageSize: function() {
			var a = this.overlay.height(),
				b = this.overlay.width();
			if(this.previous_height !== a || this.previous_width !== b) this.parent().updatePlaceholderImageSize(this.id, a, b), this.previous_height = a, this.previous_width = b
		},
		positionUpdated: function(a, b, c, d) {
			a.css("position", "absolute").css("left", b).css("top", c).css("width", d)
		},
		handleDeleted: function() {}
	})
}), window.console || (window.console = {
	log: function() {},
	error: function() {},
	warn: function() {},
	info: function() {}
}), function(a, b) {
	function o(a, b) {
		$.each(window.YT.players, function(c, d) {
			d.playerId == b && (d.state = a.data, d.state == window.YT.PlayerState.PLAYING && d.onReady && (d.onReady(d), d.onReady = null))
		}), a.data == window.YT.PlayerState.PLAYING && p(b)
	}
	function p(a) {
		if(!window.YT || !window.YT.players) return;
		$.each(window.YT.players, function(b, c) {
			c.playerId != a && c.player && $("#" + c.playerId).size() && c.player.pauseVideo()
		})
	}
	function r() {
		setTimeout(function() {
			window.close()
		}, 1e3)
	}
	require("assert"), require("frame_busting").check();
	var c = require("debug"),
		d = require("lang/fun").bind,
		e = require("event").add,
		f = require("event").remove,
		g = require("webnode2"),
		h = require("window_manager"),
		i = h.isInHash,
		j = require("cookies"),
		k = require("view/toggle"),
		l = require("view/inline_editor").InlineEditor,
		m = require("w2.quora").Component;
	b.FeatureContentEditor = m.extend({
		onLoad: function() {
			this.url = null, this.result = null, this.$("#@feature").click(this.fnbind(function() {
				var a = this.child("link_selector").result;
				return a ? this.featureFromResult(a) : this.featureFromURL(), !1
			}))
		},
		getDesc: function() {
			return this.child("editor").serialize()
		},
		featureFromResult: function(a) {
			a && (delete a.html, delete a.value, this.serverCall("feature_item").kwargs({
				target: a,
				description: this.getDesc()
			}).liveMutate().send())
		},
		featureFromURL: function() {
			var a = this.child("link_selector").qValue;
			a && this.serverCall("feature_item_from_url").kwargs({
				url: a,
				description: this.getDesc()
			}).liveMutate().send()
		}
	}), b.UnfeatureItemLink = m.extend({
		onLoad: function() {
			this.$("#@unfeature").click(this.fnbind(function() {
				return this.serverCall("unfeature_item").liveMutate().send(), !1
			}))
		}
	}), b.DeleteFeaturedItemLink = m.extend({
		onLoad: function() {
			this.$("#@delete").click(this.fnbind(function() {
				return this.dialog().title("Remove Content from Featured List?").cancel(null, "Cancel").ok(this.fnbind(function() {
					this.serverCall("delete_item").liveMutate().send()
				}), "Remove Featured Item").html("Are you sure you want to remove this content from the previously featured list?"), !1
			}))
		}
	}), b.PreviouslyFeaturedListItem = m.extend({
		onLoad: function() {
			var a = this;
			this.$("#@item").hover(function(b) {
				a.$("#@remove").show(), a.$("#@item .best_source_icon").hide()
			}, function(b) {
				a.$("#@remove").hide(), a.$("#@item .best_source_icon").show()
			})
		}
	}), b.FeaturedContentSection = m.extend({
		onLoad: function() {
			this.cancelHover = !1;
			var a = this;
			this.$("#@item").hover(function(b) {
				a.cancelHover || (a.$("#@wrapper").addClass("highlight_featured_item"), a.$("#@buttons").show())
			}, function(b) {
				a.cancelHover || (a.$("#@wrapper").removeClass("highlight_featured_item"), a.$("#@buttons").hide())
			}), this.$("#@edit").click(this.fnbind(function() {
				return this.cancelHover = !0, this.$("#@featured_item").hide(), this.$("#@editor").show(), this.$("#@done").show(), this.$("#@edit").hide(), this.cQuery(":editor.link_selector").focus(), !1
			})), this.$("#@done").click(this.fnbind(function() {
				return this.cancelHover = !1, this.$("#@featured_item").show(), this.$("#@editor").hide(), this.$("#@done").hide(), this.$("#@edit").show(), !1
			}))
		}
	}), b.AddAnswerInFeed = m.extend({
		onLoad: function() {
			this.open = !1, this.loaded = !1, this.$("#@fake_input").click(this.fnbind(function() {
				return this.open = !0, this.$("#@fake_input").hide(), this.$("#@ask").hide(), this.$("#@section").show(), this.cQuery(":editor_section.editor.editor").focus(), !1
			})), this.$("#@ask_link").click(this.fnbind(function() {
				return this.loaded || this.serverCall("wanted_answer").contentFor(this.$("#@ask_suggestions"), {
					parentCID: this.cid
				}).success(this.fnbind(function(a) {
					this.loaded = !0
				})).send(), this.open = !0, this.$("#@fake_input").hide(), this.$("#@ask_suggestions").show(), this.$("#@ask_suggestions_nub").show(), !1
			}));
			var a = this;
			$(document).click(function() {
				a.closeOnClick()
			}), this.$("#@wrapper").click(function(a) {
				a.stopPropagation()
			})
		},
		closeOnClick: function() {
			this.open && this.cQuery(":editor_section.editor.editor").isEmpty() && (this.cQuery(":editor_section.editor.editor").blur(), this.$("#@fake_input").show(), this.$("#@section").hide(), this.$("#@ask_suggestions").hide(), this.$("#@ask_suggestions_nub").hide(), this.open = !1)
		},
		showAnswer: function() {
			this.$("#@section").hide(), this.$("#@answer").show()
		}
	}), b.TypeaheadContextText = m.extend({
		setDefault: function() {
			this.default_text && (this.context = {
				type: this.context_type,
				id: this.context_id
			}, this.setContext(this.default_text, this.default_url))
		},
		hasContext: function() {
			return this.default_text ? !0 : !1
		},
		getWidth: function() {
			return this.$("#@context").outerWidth()
		},
		hide: function() {
			this.$("#@context").hide()
		},
		show: function() {
			this.$("#@context").show()
		},
		removeContext: function() {
			this.default_text = "", this.context = {}, this.$("#@context").removeClass("context_content"), this.$("#@context").text("")
		},
		setContext: function(a, b) {
			a.length > 15 && (a = a.substr(0, 13) + "..."), this.$("#@context").addClass("context_content"), this.$("#@context").text(a + ":"), this.$("#@context").click(this.fnbind(function() {
				h.navigateTo(b)
			}))
		}
	}), b.QuestionBroadcastSection = m.extend({
		onLoad: function() {
			this.$("#@ask").click(this.fnbind(function() {
				return this.$("#@list").show(), this.$("#@instructions").hide(), !1
			}))
		}
	}), b.DistributionMenu = m.extend({
		onLoad: function() {
			this.$("#@menu_link").click(this.fnbind(function() {
				return this.$("#@menu_items").menu(this.$("#@menu_link")), !1
			}))
		}
	}), b.AddDistributionMenu = m.extend({
		onLoad: function() {
			function b(b) {
				var c = a.types[b],
					d = "#@" + b.split("_")[0];
				a.$(d).click(function() {
					return a.$("#@value").val(c), a.setCurrent($(this)), !1
				}), a.default_type == c && a.setCurrent(a.$(d))
			}
			this.$("#@menu_link").click(this.fnbind(function() {
				return this.$("#@menu_items").menu(this.$("#@menu_link"), {
					position_relative: !0,
					position_adjust: -3
				}), !1
			}));
			var a = this;
			b("anon"), b("all"), b("topic_followers")
		},
		getValue: function() {
			return this.$("#@value").val() >= 0 ? this.$("#@value").val() : null
		},
		setCurrent: function(a) {
			this.deselectAll(), a.addClass("selected"), this.$("#@current").text(a.text())
		},
		resetValue: function() {
			this.$("#@value").val(this.types.all), this.setCurrent(this.$("#@all"))
		},
		deselectAll: function() {
			this.$("#@menu_items .selected").removeClass("selected")
		}
	}), b.AddQuestionAnonymousCheckbox = m.extend({
		onLoad: function() {
			var a = this.lookup("publish_checkboxes", !0);
			a && this.$("#@checkbox").change(this.fnbind(function() {
				this.$("#@checkbox").attr("checked") ? a.hide() : a.show()
			}))
		},
		getValue: function() {
			return this.$("#@checkbox").attr("checked") ? this.anon_value : this.public_value
		}
	}), b.UnreviewedItems = m.extend({
		onLoad: function() {
			this.topicsLoaded = !1
		},
		hideAll: function() {
			this.$("#@default").hide(), this.$("#@custom").hide()
		},
		setTopic: function(a) {
			this.hideAll(), this.serverCall("load_custom").kwargs({
				topic_name: a
			}).contentFor(this.$("#@custom"), {
				parentCID: this.cid
			}).send(), this.$("#@custom").show()
		},
		filterToCustom: function() {
			this.hideAll(), this.$("#@custom").show()
		},
		showAll: function() {
			this.hideAll(), this.$("#@default").show()
		}
	}), b.ReviewFilterMenu = m.extend({
		onLoad: function() {
			this.$("#@menu_link").click(this.fnbind(function() {
				return this.$("#@menu_items").menu(this.$("#@menu_link"), {
					position_relative: !0,
					position_adjust: -3
				}), !1
			})), this.$("#@custom").click(this.fnbind(function() {
				return this.setCurrent(this.$("#@custom")), this.$("#@selector").show(), this.lookup("selector").focus(), this.parent().parent().filterToCustom(), !1
			}));
			if(this.default_type == "all") return this.setCurrent(this.$("#@all")), !1;
			if(this.default_type == "priority") return this.setCurrent(this.$("#@priority")), !1;
			if(this.default_type == "topics") return this.setCurrent(this.$("#@topics")), this.$("#@topics_count").show(), !1;
			if(this.default_type == "names_reversed") return this.setCurrent(this.$("#@names_reversed")), !1;
			if(this.default_type == "random") return this.setCurrent(this.$("#@random")), !1;
			if(this.default_type == "admin_topics") return this.setCurrent(this.$("#@admin_topics")), this.$("#@admin_topics_count").show(), !1;
			if(this.default_type == "random_topics") return this.setCurrent(this.$("#@random_topics")), !1;
			if(this.default_type == "extra") return this.setCurrent(this.$("#@extra")), this.$("#@extra_count").show(), !1;
			this.default_type == "custom" && this.deselectAll()
		},
		setTopic: function(a) {
			this.parent().parent().setTopic(a), this.$("#@current").text(a + " (topic)")
		},
		setCurrent: function(a) {
			this.hideAll(), this.deselectAll(), a.addClass("selected"), this.$("#@current").text(a.text())
		},
		hideAll: function() {
			this.$("#@selector").hide(), this.$("#@topics_count").hide(), this.$("#@admin_topics_count").hide(), this.$("#@extra_count").hide()
		},
		resetValue: function() {
			this.$("#@value").val(this.types.all), this.setCurrent(this.$("#@all"))
		},
		deselectAll: function() {
			this.$("#@menu_items .selected").removeClass("selected")
		}
	}), b.DistributeToLink = m.extend({
		onLoad: function() {
			this.$("#@activate").click(this.fnbind(function() {
				return this.serverCall("activate").kwargs({
					object_id: this.object_id,
					distribution: this.distribution
				}).liveMutate().send(), !1
			})), this.$("#@deactivate").click(this.fnbind(function() {
				return this.serverCall("deactivate").kwargs({
					object_id: this.object_id
				}).liveMutate().send(), !1
			}))
		}
	}), b.AdminLogItemView = m.extend({
		onLoad: function() {
			this.$("#@view").click(this.fnbind(function() {
				return this.$("#@details").toggleClass("hidden"), !1
			})), this.$("#@item").hover(this.fnbind(function() {
				this.$("#@item").addClass("hover"), this.$("#@buttons").removeClass("hidden")
			}), this.fnbind(function() {
				this.$("#@item").removeClass("hover"), this.$("#@buttons").addClass("hidden")
			})), this.$("#@remove").tooltip({
				contents: "Hide Log Item"
			}).click(this.fnbind(function() {
				return this.dialog().title("Hide Log Item").cancel(null, "Cancel").ok(this.fnbind(function() {
					this.serverCall("hide_log_item").send()
				}), "Hide Log Item").html("Are you sure you want to hide this log item?"), !1
			}))
		}
	}), b.ReviewTopicButton = m.extend({
		onLoad: function() {
			this.$("#@review").click(this.fnbind(function() {
				return this.serverCall("review").liveMutate().send(), !1
			})), this.$("#@unreview").click(this.fnbind(function() {
				return this.serverCall("unreview").liveMutate().send(), !1
			}))
		}
	}), b.TopicAlertSettingToggle = m.extend({
		onLoad: function() {
			this.$("#@enable").click(this.fnbind(function() {
				return this.serverCall("enable").liveMutate().send(), !1
			})), this.$("#@undo").click(this.fnbind(function() {
				return this.serverCall("undo_enable").liveMutate().send(), !1
			}))
		}
	}), b.TopTopicAnswerer = m.extend({
		onLoad: function() {
			this.$("#@answerer").hover(this.fnbind(function() {
				this.lookup("remove").show()
			}), this.fnbind(function() {
				this.lookup("remove").hide()
			}))
		}
	}), b.OrderItemButtons = m.extend({
		onLoad: function() {
			this.$("#@up").click(this.fnbind(function() {
				return this.serverCall("move_up").liveMutate().send(), !1
			})), this.$("#@down").click(this.fnbind(function() {
				return this.serverCall("move_down").liveMutate().send(), !1
			}))
		}
	}), b.AddTopicParents = m.extend({
		onLoad: function() {
			this.$("#@existing_link").click(this.fnbind(function() {
				return this.$("#@existing_link").addClass("hidden"), this.$("#@existing").removeClass("hidden"), this.lookup("parent_selector").focus(), !1
			}))
		}
	}), b.AddTopicChildren = m.extend({
		onLoad: function() {
			this.$("#@existing_link").click(this.fnbind(function() {
				return this.$("#@existing_link").addClass("hidden"), this.$("#@existing").removeClass("hidden"), this.lookup("child_selector").focus(), !1
			}))
		}
	}), b.OrganizeChildItem = m.extend({
		toggleInstruction: function() {
			this.$("#@instruction").toggleClass("hidden")
		}
	}), b.EditTopicShortName = m.extend({
		onLoad: function() {
			this.$("#@edit_link").click(this.fnbind(function() {
				return this.parent().toggleInstruction(), this.$("#@edit").addClass("hidden"), this.$("#@editor").removeClass("hidden"), this.$("#@input").focus(), !1
			})), this.$("#@cancel").click(this.fnbind(function() {
				return this.parent().toggleInstruction(), this.$("#@edit").removeClass("hidden"), this.$("#@editor").addClass("hidden"), !1
			})), this.$("#@update").click(this.fnbind(function() {
				return this.parent().toggleInstruction(), this.serverCall("edit_short_name").kwargs({
					short_name: this.$("#@input").val()
				}).liveMutate().send(), !1
			}))
		}
	}), b.AddTopicSectionItem = m.extend({
		onLoad: function() {
			this.$("#@add").click(this.fnbind(function() {
				return this.$("#@instruction").addClass("hidden"), this.$("#@create").removeClass("hidden"), this.lookup("selector").focus(), !1
			}))
		}
	}), b.TopicsEditor = k.ToggledComponent.extend({
		onLoad: function() {
			this.lazy_load && this.do_toggle(), this.$("#@done").click(this.fnbind(function() {
				return this.toggleClasses(), !1
			}))
		},
		focusSelector: function() {
			this.cQuery(":topic_list.selector_wrapper.selector").focus(!0)
		},
		toggleClasses: function() {
			this.$("#@selector").toggleClass("hidden"), this.$("#@view_topics").toggleClass("hidden"), this.$("#@edit_topics").toggleClass("hidden"), this.$("#@edit").toggleClass("hidden"), this.$("#@edit_link").toggleClass("hidden")
		},
		do_toggle: function() {
			return this.lazy_load && !this.toggled ? !1 : (this.toggleClasses(), this.focusSelector(), !0)
		}
	}), b.TopicEditorButton = m.extend({
		onLoad: function() {
			this.$("#@edit").click(this.fnbind(function() {
				return !this.parent().do_toggle()
			})), this.$("#@add").click(this.fnbind(function() {
				return !this.parent().do_toggle()
			}))
		}
	}), b.ChallengesIndex = m.extend({
		onLoad: function(a) {
			this.origPos = this.$("#@outer").offset().top, this.installScrollHandlers(this.setPosition)
		},
		onUnload: function() {
			this.uninstallScrollHandlers()
		},
		setPosition: function() {
			var a = $(window).scrollTop();
			this.$("#@pinnable").addClass("component_fixed");
			if(a > this.origPos) this.$("#@pinnable").css("top", "0px");
			else {
				var b = this.origPos - a;
				this.$("#@pinnable").css("top", b + "px")
			}
		}
	}), b.HoverMenu = m.extend({
		onLoad: function(a) {
			this.on = this.on || 350, this.off = this.off || 350, this.st = null, this.ht = null, this.loaded = this.loaded || !1, this.loading = !1, this.shown = !1, this.cancelHover = !1, this.has_been_positioned = !1, this.loadOnPageLoad && a && this.loadMenu(), this.click_open ? this.$("#@link").click(this.fnbind(function() {
				return this.cancelHover = !1, this.loadMenu(), this.doShow(), !1
			})) : this.$("a#@link").click(this.fnbind(function() {
				this.cancelHover = !0, this.doHide()
			})), this.show_menu && (this.$("#@link").hover(this.fnbind(function() {
				this.show()
			}), this.fnbind(function() {
				this.hide(), this.cancelHover = !1, this.$("#@link").removeClass("hover")
			})), this.$("#@menu").hover(this.fnbind(function() {
				this.show()
			}), this.fnbind(function() {
				this.hide()
			})))
		},
		setPosition: function() {
			var a = this.$("#@link").outerHeight(),
				b = this.$("#@link").offset(),
				c = b,
				d = $(window).height(),
				e = 130,
				f = c.top - $(window).scrollTop(),
				g = d - f < e,
				h = this.menu_offset_px ? this.menu_offset_px : 0;
			g ? (this.$("#@menu").css("bottom", d - b.top + h + "px"), this.has_been_positioned || (this.$("#@menu .hover_menu_contents").insertBefore(this.$("#@menu .hover_menu_nub")), this.$("#@menu .hover_menu_nub").addClass("hover_menu_nub_down"))) : this.$("#@menu").css("top", b.top + a + 1 + h + "px");
			var i = $(window).width(),
				j = this.$("#@menu").outerWidth(),
				k = j + c.left,
				l = c.left;
			if(i < k) {
				var m = k - i;
				this.alignment == "left" && (l -= m + 10), this.$("#@menu .hover_menu_nub").css("backgroundPositionX", m + 20 + "px")
			} else this.$("#@menu .hover_menu_nub").css("backgroundPositionX", "10px");
			if(this.alignment == "right") {
				var n = this.$("#@link").outerWidth();
				this.$("#@menu").css("left", l - j + n + "px")
			} else this.$("#@menu").css("left", l + "px");
			this.has_been_positioned = !0
		},
		hide: function() {
			clearTimeout(this.st);
			var a = this.fnbind(function() {
				this.doHide()
			});
			this.ht = setTimeout(a, this.off)
		},
		doHide: function() {
			if(!this.shown) return;
			this.shown = !1, this.$("#@menu").addClass("hidden"), this.$("#@link").removeClass("hover")
		},
		getKwargs: function() {
			return this.kwargs ? this.kwargs : {}
		},
		okToShowHoverMenu: function() {
			return this.$("#@menu").parents(".hover_menu_contents").length == 0
		},
		show: function() {
			this.okToShowHoverMenu() && (clearTimeout(this.ht), this.st = setTimeout(this.fnbind(this.doShow), this.on), this.loadMenu(), this.$("#@link").addClass("hover"))
		},
		doShow: function() {
			if(this.shown || this.cancelHover) return;
			this.shown = !0, this.movedToBody || (this.$("#@menu").detach().prependTo($("body")), this.movedToBody = !0), $(".fixed_hover_menu").hide(), this.$("#@menu").removeClass("hidden").show(), this.setPosition()
		},
		loadMenu: function() {
			!this.loaded && !this.loading && (this.loading = !0, this.serverCall("load_menu").kwargs(this.getKwargs()).contentFor(this.$("#@menu_contents"), {
				parentCID: this.cid
			}).success(this.fnbind(function(a) {
				this.loaded = !0, this.loading = !1
			})).except(this.fnbind(function(a) {
				this.loading = !1
			})).send())
		}
	}), b.ApproveNameLink = m.extend({
		onLoad: function() {
			this.$("#@approve_name").click(this.fnbind(function(a) {
				return this.serverCall("approve_name").liveMutate().send(), !1
			}))
		}
	}), b.ApproveNameMessageButton = ApproveNameLink.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@approve_name").click(this.fnbind(function() {
				return this._dialog = this.dialog().load("approve_name_dialog_contents"), !1
			}))
		}
	}), b.MuteNameLink = m.extend({
		onLoad: function() {
			this.$("#@mute_name").click(this.fnbind(function(a) {
				return this.serverCall("mute_name").liveMutate().send(), !1
			}))
		}
	}), b.FakeNameLink = m.extend({
		onLoad: function() {
			this.$("#@fake_name").click(this.fnbind(function(a) {
				return this.serverCall("fake_name").liveMutate().send(), !1
			}))
		}
	}), b.OrganizationLink = m.extend({
		onLoad: function() {
			this.$("#@organization_name").click(this.fnbind(function(a) {
				return this.serverCall("organization_name").liveMutate().send(), !1
			}))
		}
	}), b.AnswerSendNotificationsLink = m.extend({
		onLoad: function() {
			this.$("#@send_notifications").click(this.fnbind(function(a) {
				return this.serverCall("send_notifications").liveMutate().send(), !1
			}))
		}
	}), b.ReviewAnswerItem = m.extend({
		onLoad: function() {
			this.$("#@view").click(this.fnbind(function(a) {
				return this.$("#@answer").removeClass("hidden"), this.$("#@view_answer").addClass("hidden"), !1
			}))
		}
	}), b.CollapseAnswerLink = m.extend({
		onLoad: function() {
			this.$("#@undo_not_collapsible").click(this.fnbind(function(a) {
				return this.serverCall("undo_not_collapsible").kwargs({
					aid: this.aid
				}).liveMutate().send(), !1
			})), this.$("#@make_uncollapsible").click(this.fnbind(function(a) {
				return this.serverCall("make_uncollapsible").kwargs({
					aid: this.aid
				}).liveMutate().send(), !1
			})), this.$("#@undo_collapse").click(this.fnbind(function(a) {
				return this.serverCall("undo_collapse").kwargs({
					aid: this.aid
				}).liveMutate().send(), !1
			})), this.$("#@collapse").click(this.fnbind(function(a) {
				return this.serverCall("collapse").kwargs({
					aid: this.aid
				}).liveMutate().send(), !1
			})), this.$("#@undo_lock").click(this.fnbind(function(a) {
				return this.serverCall("unlock").kwargs({
					aid: this.aid
				}).liveMutate().send(), !1
			})), this.$("#@lock_collapse").click(this.fnbind(function(a) {
				return this.serverCall("lock_collapse").kwargs({
					aid: this.aid
				}).liveMutate().send(), !1
			}))
		}
	}), b.UserAdminMenuLink = m.extend({
		onLoad: function() {
			this.$("#@menu_link").click(this.fnbind(function(a) {
				return this.$("#@menu").menu(this.$("#@menu_link"), {
					position_relative: !0
				}), !1
			}))
		}
	}), b.ChangeTopicGroupMenu = m.extend({
		onLoad: function() {
			this.$("#@menu_link").click(this.fnbind(function(a) {
				return this.$("#@menu").menu(this.$("#@menu_link"), {
					position_relative: !0
				}), !1
			})), this.$("#@search").click(this.fnbind(function(a) {
				return this.parent().parent().closeContext(), !1
			}))
		}
	}), b.AdminMode = m.extend({
		toggle: function() {
			this.serverCall("toggle").liveMutate().send()
		},
		onLoad: function() {
			function b() {
				return a.toggle(), !1
			}
			var a = this;
			a.$("#@toggle").click(b), a.listen && require("keystrokes").on([81, 49, 81, 49], b)
		}
	}), b.ThreadComposeMessageBox = m.extend({
		onLoad: function() {
			this.$("#@submit").click(this.fnbind(function() {
				return this.lookup("editor").request(), !1
			}))
		}
	}), b.TruncatePhraseList = m.extend({
		onLoad: function() {
			this.show_tooltip_on_more && this.$("#@view_all_link").tooltip({
				contents: "Click to view all"
			}), this.$("#@view_all_link").click(this.fnbind(function() {
				return this.$("#@view_all").addClass("hidden"), this.$("#@view_all_span").addClass("hidden"), this.$("#@all_phrases").removeClass("hidden"), !1
			}))
		}
	}), b.PeopleCardRowBase = m.extend({
		doNotSuggestKwargs: function() {
			return {}
		},
		onLoad: function(a) {
			this.$("#@person").hover(this.fnbind(function() {
				this.$("#@person").addClass("hover"), this.$("#@buttons").removeClass("hidden")
			}), this.fnbind(function() {
				this.$("#@person").removeClass("hover"), this.$("#@buttons").addClass("hidden")
			})), this.$("#@remove").tooltip({
				contents: "Do not suggest"
			}).click(this.fnbind(function() {
				return this.serverCall("do_not_suggest").kwargs(this.doNotSuggestKwargs()).success(this.fnbind(function() {
					this.$("#@person").addClass("hidden")
				})).send(), !1
			}))
		}
	}), b.PeopleCardRow = b.PeopleCardRowBase.extend({
		doNotSuggestKwargs: function() {
			return this.fb_uid ? {
				fb_uid: this.fb_uid
			} : {}
		}
	}), b.FacebookInviteSuggestionListItem = b.PeopleCardRowBase.extend({
		doNotSuggestKwargs: function() {
			return this.fb_uid ? {
				fb_uid: this.fb_uid
			} : {}
		}
	}), b.TwitterInviteSuggestionListItem = b.PeopleCardRowBase.extend({
		doNotSuggestKwargs: function() {
			return this.tw_uid ? {
				tw_uid: this.tw_uid
			} : {}
		}
	}), b.LinkedinInviteSuggestionListItem = b.PeopleCardRowBase.extend({
		doNotSuggestKwargs: function() {
			return this.li_uid ? {
				li_uid: this.li_uid
			} : {}
		}
	}), b.InboxThreadPreviewItem = m.extend({
		onLoad: function(a) {
			this.$("#@item").click(this.fnbind(function(a) {
				return h.handleClick(unescape(this.url), a), !1
			})), this.$("#@item a").each(function() {
				$(this).click(function() {
					return event.which == 2 || event.metaKey ? window.open($(this).attr("href")) : h.
					navigateTo($(this).attr("href")), !1
				})
			})
		}
	}), b.NewThreadMain = m.extend({
		onLoad: function(a) {
			this.$("#@submit_button").click(this.fnbind(function(a) {
				this.serverCall("send_message").kwargs({
					msg: this.lookup("editor").serialize()
				}).success(this.fnbind(function() {
					location.reload(!0)
				})).liveMutate().send()
			}))
		}
	}), b.DeleteContactsButton = m.extend({
		onLoad: function(a) {
			this.$("#@delete").click(this.fnbind(function() {
				return this.openDialog(), !1
			}))
		},
		openDialog: function() {
			this.dialog().title("Delete Imported Contacts").cancel(null, "Close").ok(this.fnbind(function() {
				this.serverCall("delete_contacts").success(this.fnbind(function() {
					location.reload(!0)
				})).send()
			}), "Delete Contacts").html("Are you sure you want to delete your imported contacts?")
		}
	}), b.AddAdminSelector = m.extend({
		setTo: function(a) {
			if(a && a != "") {
				if(this.yesno_reviewer) var b = "Invite New Reviewer?",
					c = "Invite Reviewer";
				else var b = "Invite New Admin?",
					c = "Invite Admin";
				this._dialog = this.dialog().title(b).ok(this.fnbind(function() {
					this.serverCall("add_admin").kwargs({
						admin_uid: a
					}).success(this.fnbind(function() {
						this.clear()
					})).liveMutate().send()
				}), c).cancel(null, "Cancel").load("add_admin_dialog_contents", {
					kwargs: {
						admin_uid: a
					}
				})
			}
		},
		clear: function() {
			this.lookup("selector").inputBlur()
		}
	}), b.AggregatedNotificationSectionCount = m.extend({
		onLoad: function() {
			this.initState("expanded", !1), this.$("#@expand").click(this.fnbind(function() {
				return this.state("expanded", !this.state("expanded")), !1
			}))
		},
		stateHandlers: {
			expanded: function(a) {
				var b = this.lookup("notif").lookup("list").$("#@notifs"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a)
			}
		}
	}), b.SyndicateActionLink = m.extend({
		onLoad: function() {
			this.$("#@syndicate_link").click(this.fnbind(function() {
				return this.serverCall("syndicate").liveMutate().send(), !1
			})), this.$("#@undo").click(this.fnbind(function() {
				return this.serverCall("undo").liveMutate().send(), !1
			}))
		}
	}), b.PublishActionLink = m.extend({
		onLoad: function() {
			this.$("#@publish_link").click(this.fnbind(function() {
				return this.serverCall("publish").liveMutate().send(), !1
			}))
		}
	}), b.GlobalFeedLink = m.extend({
		onLoad: function() {
			this.$("#@count").tooltip({
				contents: this.count + " Unorganized Question" + (this.count == 1 ? "" : "s")
			})
		}
	}), b.QTextDiff = m.extend({
		onLoad: function() {
			this.$("#@more_link").click(this.fnbind(function() {
				return this.$("#@diff_snip").addClass("hidden"), this.$("#@full_diff").removeClass("hidden"), !1
			}))
		}
	}), b.SuggestedQuestionItem = m.extend({
		onLoad: function(a) {
			this.$("#@ignore_button").tooltip({
				contents: "Ignore this Question Suggestion"
			}).click(this.fnbind(function() {
				return this.serverCall("ignore_question").liveMutate().send(), !1
			}))
		}
	}), b.InlineTabs = m.extend({
		onLoad: function(a) {}
	}), b.PillTabs = m.extend({
		onLoad: function(a) {},
		setTab: function(a) {
			this.$("#@tabs .selected").removeClass("selected"), this.$("#@" + a).addClass("selected")
		},
		getTab: function(a) {
			return this.$("#@" + a)
		}
	}), b.QtextTruncate = m.extend({
		init: function() {
			this._super.apply(this, arguments), this.callback = null
		},
		onLoad: function(a) {
			this.$("#@more_link").length > 0 ? this.$("#@more_link, #@text_snip").click(this.fnbind(function() {
				return this.viewMore(), this.callback && this.callback(), !1
			})) : this.$("#@text_snip").removeClass("expandable_qtext")
		},
		setCallback: function(a) {
			this.callback = a
		},
		viewMore: function() {
			this.$("#@text_snip").addClass("hidden"), this.$("#@full_text").removeClass("hidden")
		}
	}), b.ExpandableQText = k.SwitchableComponent.extend({
		onLoad: function(a) {
			this._super.apply(this, arguments), this.$("#@truncated a.more_link").length > 0 ? this.$("#@truncated:not").click(this.fnbind(function(a) {
				if(a.target.nodeName != "A" && a.target.nodeName != "IMG" && !$(a.target).hasClass("qtext_embed")) return this.$("#@truncated a.more_link").click(), !1
			})) : this.$("#@truncated").removeClass("expandable_qtext")
		},
		switchAction: function() {
			this.expand(), this.$("#@truncated").addClass("hidden"), this.$("#@expanded").removeClass("hidden")
		},
		expand: function() {
			var a = this;
			if(window.YT && window.YT.players) {
				var b = getYTPlayerStatuses(this.$("#@truncated"), function(a) {
					$(a).parent().addClass("thumbnail").empty()
				});
				restoreYTPlayerStatuses(a.$("#@expanded"), b)
			}
			require("action_log").logAction("ContentExpand", null, null)
		}
	}), b.FeedAnswerItem = k.ToggledComponent.extend({
		onLoad: function(a) {
			this._super.apply(this, arguments), this.$("#@answer_rating").mouseover(this.fnbind(function() {
				this.truncated && !this.mouseover_toggled && (this.mouseover_toggled = !0, this.child("expandable_qtext").$("#@truncated").mouseover())
			})).click(this.fnbind(function() {
				return this.truncated && this.toggleTextViews(), !1
			})), this.tt && this.$("#@answer_rating").tooltip({
				contents: this.tt
			}), this.truncated && this.child("expandable_qtext").setCallback(this.fnbind(function() {
				this.show()
			}))
		},
		keyEvents: function(a) {
			switch(a) {
			case 13:
				return this.truncated && (this.mouseover_toggled || (this.mouseover_toggled = !0, this.child("expandable_qtext").$("#@truncated").mouseover()), this.toggleTextViews()), !1
			}
		},
		getFacebookLikeHoverArea: function() {
			return this.$("#@answer")
		},
		toggleTextViews: function() {
			var a = this.child("expandable_qtext").$("#@truncated a.more_link");
			a.length ? a.click() : (this.child("expandable_qtext").switchIfReady(), this.show())
		},
		show: function() {
			!this.author && this.allow_voting && (this.$("#@answer_rating").addClass("hidden"), this.$("#@answer_voting").removeClass("hidden")), this.$("#@answer_voters").removeClass("hidden"), this.$("#@answer_actions").removeClass("hidden"), this.$("#@answer_user_sig .user_sig_source").show()
		}
	}), b.Feed2AnswerItem = k.ToggledComponent.extend({
		onLoad: function(a) {
			this._super.apply(this, arguments), this.$("#@answer_wrapper").click(this.fnbind(function() {
				return this.truncated && this.toggleTextViews(), !0
			})), this.$("#@answer_rating").tooltip({
				contents: this.tt
			}).mouseover(this.fnbind(function() {
				this.truncated && !this.mouseover_toggled && (this.mouseover_toggled = !0, this.child("expandable_qtext").$("#@truncated").mouseover())
			})).click(this.fnbind(function() {
				return this.truncated && this.toggleTextViews(), !1
			})), this.truncated && this.child("expandable_qtext").setCallback(this.fnbind(function() {
				this.show()
			}))
		},
		getFacebookLikeHoverArea: function() {
			return this.$("#@answer")
		},
		toggleTextViews: function() {
			var a = this.child("expandable_qtext").$("#@truncated a.more_link");
			a.length ? a.click() : (this.child("expandable_qtext").switchIfReady(), this.show())
		},
		show: function() {
			!this.author && this.allow_voting && (this.$("#@answer_rating").addClass("hidden"), this.$("#@answer_voting").removeClass("hidden")), this.$("#@answer_voters").removeClass("hidden"), this.$("#@answer_actions").removeClass("hidden"), this.$("#@answer_user_sig .user_sig_source").show()
		}
	}), b.TruncatedPostContent = m.extend({
		onLoad: function(a) {
			var b = this.lookup("switchable");
			b && b.setCallback(this.fnbind(function() {
				return this.serverCall("viewed").send(), !1
			}))
		}
	}), b.TruncatedAnswer = m.extend({
		onLoad: function(a) {
			var b = this.lookup("switchable");
			b && b.setCallback(this.fnbind(function() {
				return this.serverCall("viewed").send(), !1
			}))
		}
	}), b.ThreadMessage = m.extend({
		onLoad: function() {
			$(document).ready(this.fnbind(function() {
				setTimeout(this.fnbind(function() {
					this.$("#@message")[0].scrollIntoView()
				}), 360)
			}))
		}
	}), b.NotificationsClearButton = m.extend({
		onLoad: function() {
			this.$("#@clear").click(this.fnbind(function() {
				return this.serverCall("mark_as_seen").liveMutate().send(), !1
			}))
		}
	}), b.NotificationPreview = m.extend({
		onLoad: function() {
			this.$("#@details").click(this.fnbind(function() {
				return this.$("#@notification_details").toggleClass("hidden"), !1
			})), this.$("#@notification").click(this.fnbind(function() {
				return this.$("#@notification_diff").toggleClass("hidden"), this.$("#@notification, #@bullet").hide(), !1
			}))
		}
	}), b.RelatedQuestionsMain = m.extend({
		onLoad: function() {
			this.$(".@close_related_questions_editor_link").click(this.fnbind(function() {
				return this.$("#@related_questions").show(), this.$("#@related_questions_editor").hide(), this.$("#@related_questions_editor").hide(), !1
			})), this.$("#related_questions_editor_link").click(this.fnbind(function() {
				return this.$("#@related_questions").hide(), this.$("#@related_questions_editor").show(), this.$("#@related_questions_editor").hide(), this.$("#@related_questions_editor").fadeIn(), !1
			}))
		}
	}), b.RelatedQuestionsToggler = k.TogglerComponent.extend({
		onVisible: function() {
			this.serverCall("register_box_load").kwargs({
				experiment_id: this.experiment_id,
				clicktrack_id: this.clicktrack_id,
				qid: this.qid,
				qids: this.qids
			}).send()
		},
		toggle: function() {
			this._super.apply(this, arguments), this.serverCall("register_show_more").kwargs({
				experiment_id: this.experiment_id,
				clicktrack_id: this.clicktrack_id
			}).send()
		}
	}), b.NotifHeaderBar = m.extend({
		onVisible: function() {
			this.initState("first_call", !0) || this.num < 3 && this.num > 0 && h.getHash().substr(0, 1) == "#" && !this.mobile && this.initBar()
		},
		initBar: function() {
			this.headerHeight = $("#layout_header").outerHeight(), this.barHeight = this.$("#@bar").outerHeight(), this.barMarginBtm = parseInt(this.$("#@bar").css("margin-bottom").replace("px", "")), this.installScrollHandlers(this.setPosition), this.use_floaty_bar && this.$("#@bar").addClass("header_bar_smooth_floaty");
			var a = this.fnbind(function() {
				this.setPosition();
				var a = $(window).height(),
					b = $("body").outerHeight(),
					c = $(window).scrollTop();
				a + c != b && $(window).scrollTop(c - this.barHeight)
			});
			setTimeout(a, 50)
		},
		onUnload: function() {
			this.uninstallScrollHandlers()
		},
		setPosition: function() {
			var a = $(window).scrollTop(),
				b = this.barHeight + this.barMarginBtm;
			a > this.headerHeight ? (this.use_floaty_bar ? (this.$("#@bar").addClass("header_bar_floaty"), this.$("#@bar").css("top", this.headerHeight + "px"), this.$("#@bar").css("-webkit-transform", "translateY(" + (window.scrollY - this.headerHeight) + "px)")) : this.$("#@bar").addClass("header_bar_fixed"), $("#layout_header").css("margin-bottom", b + "px")) : (this.use_floaty_bar ? (this.$("#@bar").css("-webkit-transform", "translateY(0px)"), this.$("#@bar").removeClass("header_bar_floaty")) : this.$("#@bar").removeClass("header_bar_fixed"), $("#layout_header").css("margin-bottom", "0px"))
		}
	}), b.AdminModeBar = NotifHeaderBar.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.mobile || this.initBar()
		}
	}), b.MobileAppLink = m.extend({
		onLoad: function() {
			this.$("#@download_button").click(this.fnbind(function() {
				var a = +(new Date);
				setTimeout(function() {
					+(new Date) - a < 2e3 && (window.location = "http://itunes.apple.com/us/app/quora/id456034437?mt=8")
				}, 1e3)
			}))
		}
	}), b.NotifHeaderBarButtons = k.ToggledComponent.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.locked = !1, $(document).keydown(this.fnbind(function(a) {
				return this.docKeydown(a)
			}))
		},
		gotoNext: function() {
			this.next_url && h.navigateTo(this.next_url)
		},
		isLocked: function() {
			var a = !1;
			return $("input, textarea, .qtext_editor_content").each(function() {
				$(this).attr("focused") == "true" && (a = !0)
			}), this.locked || a
		},
		docKeydown: function(a) {
			var b = a || window.event;
			if(this.isLocked()) return !0;
			if(b.keyCode == 39) return this.gotoNext(), !1
		}
	}), b.Header = m.extend({
		onLoad: function() {
			this.$("#@enter_context").click(this.fnbind(function() {
				return $("#layout_header").addClass("topic_visibility_context"), $("#topic_visibility_context").val(this.tid), this.$("#@topic_nav").show(), this.$("#@default_nav").hide(), this.$("#@group_header").show(), this.$("#@context_navigator").hide(), !1
			})), this.$("#@close_context").click(this.fnbind(function() {
				return this.closeContext(), !1
			}))
		},
		closeContext: function() {
			$("#layout_header").removeClass("topic_visibility_context"), $("#topic_visibility_context").val(0), this.$("#@topic_nav").hide(), this.$("#@default_nav").show(), this.$("#@group_header").hide(), this.$("#@context_navigator").show(), this.lookup("navigator").focus()
		}
	}), b.ReportLink = m.extend({
		onLoad: function() {
			var a = {
				title: "Flag Content",
				comment_form: "Please explain why you are flagging this content",
				mobile: this.mobile,
				buttons: {
					Ok: this.fnbind(this._request),
					Cancel: null
				}
			};
			this.$("#@report_link").click(function() {
				return $(".content").dialog(a), !1
			})
		},
		_request: function() {
			var a = {};
			if(!(a.id = this.id) || !(a.type = this.type) || !(a.comment = $("#dialog_comment").val())) return !1;
			this.serverCall("report").kwargs(a).success(this.fnbind(function(b) {
				$.serverLog("Content Flagged", "INFO", a), a1ert("Content Flagged")
			})).liveMutate().send()
		}
	}), b.ThanksLink = m.extend({
		onLoad: function() {
			var a = this;
			this.$("#@thanks_link").click(function() {
				return a.serverCall("send_thanks").liveMutate().send(), !1
			})
		}
	}), b.LogoutNavElement = m.extend({
		onLoad: function() {
			this.$("#@logout_link").click(this.fnbind(function(a) {
				return this.$("#@logout_form").submit(), require("w2.livenode").stopLiveUpdates(), !1
			}))
		}
	}), b.ContactListEmailLink = m.extend({
		onLoad: function(a) {
			this.$("#@email").click(this.fnbind(function() {
				return this.lookup("invite_button").invite(this.all_emails), !1
			}))
		}
	}), b.InviteButton = m.extend({
		onLoad: function() {
			this.$("#@invite").click(this.fnbind(function() {
				return this.invite(), !1
			})), this.auto_click && this.$("#@invite").click()
		},
		invite: function(a) {
			var b = this.name ? this.name : this.emails,
				c = "/contacts/ajax_invite_dialog_GET?",
				d = a || this.emails;
			d && d.length > 0 && (c += "emails=" + d + "&"), this.fb_uid && (c += "fb_uid=" + this.fb_uid + "&"), this.tw_uid && (c += "tw_uid=" + this.tw_uid + "&"), this.li_uid && (c += "li_uid=" + this.li_uid + "&"), this.funnel_code && (c += "funnel_code=" + this.funnel_code + "&"), c += "name=" + b, this.location && (c += "&location=" + this.location), $(".content").dialog({
				title: "Invite " + unescape(b) + " to Quora",
				url: c,
				mobile: this.mobile,
				id: "invite_dialog",
				buttons: null
			})
		}
	}), b.InviteViaTwitterButton = InviteButton.extend({
		invite: function(a) {
			var b = this.name ? this.name : this.emails,
				c = "/contacts/ajax_invite_via_twitter_dialog_GET?";
			this.tw_uid && (c += "tw_uid=" + this.tw_uid + "&"), this.funnel_code && (c += "funnel_code=" + this.funnel_code + "&"), c += "name=" + b, this.location && (c += "&location=" + this.location), $(".content").dialog({
				title: "Invite " + unescape(b) + " to Quora",
				url: c,
				mobile: this.mobile,
				id: "invite_dialog",
				buttons: null
			})
		}
	}), b.InviteFriendOfName = m.extend({
		onLoad: function() {
			this.$("#@contact_name").click(this.fnbind(function() {
				return this.lookup("invite_button").invite(), !1
			})), this.$("#@contact_photo").click(this.fnbind(function() {
				return this.lookup("invite_button").invite(), !1
			}))
		}
	}), b.InviteConfirmationDialog = m.extend({
		onLoad: function() {
			this.emails.length > 0 ? this.email = this.emails[0] : this.email = null, this.$("#@menu_link").click(this.fnbind(function() {
				return this.$("#@menu_items").menu(this.$("#@menu_link"), {
					position_relative: !0,
					position_adjust: -3
				}), !1
			})), this.$(".menu_list_item a").click(this.fnbind(function(a) {
				return this.$("#@active_email").text(this.email = $(a.currentTarget).text()), this.$(".menu_list_item a").removeClass("selected"), $(a.currentTarget).addClass("selected"), !1
			})), this.$("#@send").click(this.fnbind(function() {
				return this.request(), !1
			})), this.$("#@cancel").click(this.fnbind(function() {
				return this.close(), !1
			}))
		},
		request: function() {
			var a = this.lookup("msg").getVal(),
				b = [],
				c = [];
			$("#invite_dialog .temp_topics_list input").each(function() {
				b.push($(this).val())
			}), $("#invite_dialog .temp_suggested_question input").each(function() {
				c.push($(this).val())
			}), this.serverCall("record_invite_confirm_button_clicked").kwargs({
				funnel_code: this.funnel_code
			}).send(), g.rpc("/contacts/ajax_send_invite_POST").kwargs({
				email: this.email,
				msg: a,
				topics: b,
				questions: c,
				location: this.location,
				fb_uid: this.fb_uid,
				tw_uid: this.tw_uid,
				li_uid: this.li_uid
			}).liveMutate().success(this.fnbind(function() {
				this.close()
			})).send()
		},
		close: function() {
			$("#invite_dialog").remove()
		},
		setEmail: function(a) {
			this.email = a
		}
	}), b.InviteViaTwitterConfirmationDialog = InviteConfirmationDialog.extend({
		request: function() {
			var a = this.lookup("msg").getVal();
			g.rpc("/contacts/ajax_send_twitter_invite_POST").kwargs({
				msg: a,
				code: this.code,
				location: this.location,
				tw_uid: this.tw_uid
			}).liveMutate().success(this.fnbind(function() {
				this.close()
			})).send()
		}
	}), b.ManualFacebookAndEmailInviteBox = m.extend({
		setUserTo: function(a) {
			this.to_fb_uid = a, this.to_fb_uid && this.$("#@correct_button").setContentFromAJAXComponent("/contacts/ajax_invite_facebook_dialog_POST", {
				to_fb_uid: this.to_fb_uid,
				location: "search_box"
			})
		},
		setEmailTo: function(a) {
			this.to_email = a, this.to_email && this.$("#@correct_button").setContentFromAJAXComponent("/contacts/ajax_invite_email_dialog_POST", {
				email: this.to_email,
				location: "search_box"
			})
		}
	}), b.ManualInviteBox = m.extend({
		onLoad: function() {
			this.$("#@submit").click(this.fnbind(function() {
				function c(a) {
					if(a.nodeType == 3) return;
					if(/^textarea$/i.test(a.nodeName)) {
						var d = a.getAttribute("name");
						d && (a.removeAttribute("name"), b.push($("<input>").attr("name", d).attr("type", "hidden").val($(a).val())))
					}
					for(var e = a.firstChild; e; e = e.nextSibling) c(e)
				}
				var a, b = [],
					d = this.$("#@invite_form");
				c(d[0]);
				while(a = b.pop()) d.append(a);
				return d.submit(), !1
			}))
		}
	}), b.ClearDraft = m.extend({
		onLoad: function() {
			this.$("#@clear_draft").click(this.fnbind(function() {
				return $(".content").dialog({
					title: "Clear Draft",
					contents: "Are you sure you want to delete this draft? You will lose your work.",
					buttons: {
						"Clear Draft": this.fnbind(function() {
							this.serverCall("clear_draft").liveMutate().send()
						}),
						Cancel: null
					}
				}), !1
			}))
		}
	}), b.DraftStatus = m.extend({
		onLoad: function() {
			var a = this;
			a.$("#@draft_status_clear").click(function() {
				return $(".content").dialog({
					title: "Clear Draft",
					contents: "Are you sure you want to delete this draft? You will lose your work.",
					buttons: {
						"Clear Draft": function() {
							g.rpc("/ajax/ajax_clear_draft_POST").kwargs({
								draft_space: a.draft_space
							}).liveMutate().success(a.getClearDraftCallback()).send()
						},
						Cancel: null
					}
				}), !1
			})
		},
		getClearDraftCallback: function() {
			return function() {}
		}
	}), b.BoardDraftStatus = b.DraftStatus.extend({
		onLoad: function() {
			this._super.apply(this, arguments)
		},
		updateWithDraftId: function(a) {
			this.child("toggled").toggle(!1, a)
		},
		getClearDraftCallback: function() {
			var a = this.parent();
			return function() {
				a.onClearDraft()
			}
		}
	}), b.ProfileTopWritersBadge = m.extend({
		onLoad: function() {
			this.$("#@badge").tooltip({
				contents: "Top Writer 2012"
			})
		}
	}), b.ProfileNameAndSigEditor = m.extend({
		onLoad: function() {
			h.getHash().substr(0, 9) == "#editname" && (this.toggleEditor(), this.showNameEditor(), this.$("#@name").focus()), this.$("#@edit").click(this.fnbind(function() {
				return this.toggleEditor(), this.$("#@bio").focus(), !1
			})), this.$("#@edit_name").click(this.fnbind(function() {
				return this.showNameEditor(), !1
			})), this.$("#@done").click(this.fnbind(function() {
				return this.hideNameEditor(), this.toggleEditor(), !1
			})), this.$("#@update").click(this.fnbind(function() {
				var a = this.$("#@name").val(),
					b = this.$("#@bio").val();
				return this.serverCall("update").kwargs({
					name: a,
					bio: b
				}).success(this.fnbind(function(a) {
					a ? (this.$("#@name").addClass("input_validation_error"), this.$("#@error").text(a + ".").show()) : this.toggleEditor()
				})).liveMutate().send(), !1
			}))
		},
		showNameEditor: function() {
			this.$("#@edit_name").hide(), this.$("#@view_name").hide(), this.$("#@name_input").show()
		},
		hideNameEditor: function() {
			this.$("#@edit_name").show(), this.$("#@view_name").show(), this.$("#@name_input").hide()
		},
		toggleEditor: function() {
			this.$("#@view").toggle(), this.$("#@edit_view").toggle(), this.$("#@error").text("").hide(), this.$("#@name").removeClass("input_validation_error")
		}
	}), b.SuggestTopicsInline = m.extend({
		onLoad: function() {
			this.$("#@update").click(this.fnbind(function() {
				var a = [];
				return this.$("#@topic_tagger_component .temp_topics_list input").each(function() {
					a.push($(this).val())
				}), a ? (this.serverCall("suggest").kwargs({
					to_uid: this.to_uid,
					topics: a
				}).success(this.fnbind(function(a) {
					this.lookup("selector").resetTempTopics(), this.$("#@update").hide()
				})).liveMutate().send(), !1) : !1
			}))
		}
	}), b.NicknameInlineEditor = l.extend({
		onLoad: function() {
			this._super.apply(this, arguments), h.getHash().substr(0, 9) == "#editname" && this.toggle_editor()
		}
	}), b.FeatureContentDescriptionInlineEditor = l.extend({
		onLoad: function() {
			this._super.apply(this, arguments)
		},
		_get_kwargs: function() {
			return {
				featured_id: this.featured_id,
				tid: this.tid,
				input: this.get_value()
			}
		}
	}), b.ThreadMessageInlineEditor = l.extend({
		trigger_request: function() {
			this.typing_area && this.lookup("editor").stopTyping(), this.lookup("editor").request()
		},
		server_call_method: "UNDEFINED_SERVER_CALL_METHOD",
		_get_kwargs: function() {
			throw $.serverLog("Tried to call ThreadMessageInlineEditor#_get_kwargs()", "ERROR"), "UNDEFINED_KWARGS"
		}
	}), b.CreateAnswerWikiInlineEditor = l.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@inline_editor_cancel").click(this.fnbind(function() {
				return this.toggle_editor(), $("#answer_wiki").addClass("hidden"), !1
			}))
		},
		_get_kwargs: function() {
			return {
				qid: this.id,
				input: this.get_value()
			}
		}
	}), b.AnswerWikiInlineEditor = l.extend({
		_get_kwargs: function() {
			var a = "";
			return this.has_comment && !this.lookup("comment_editor").isEmpty() && (a = this.lookup("comment_editor").serialize()), {
				qid: this.id,
				input: this.get_value(),
				sugg_exists: this.sugg_exists,
				comment: a,
				notif: this.$("#@notif").attr("checked") ? 1 : 0
			}
		}
	}), b.SuggestedEditBar = m.extend({
		toggleButtons: function() {
			this.$("#@suggested_answer_buttons").toggleClass("hidden")
		}
	}), b.SuggestedEditButtons = m.extend({
		onLoad: function() {
			this.$("#@view_original").click(this.fnbind(function() {
				return this.parent().parent().toggleSuggestion(), !1
			}))
		}
	}), b.SuggestSigInlineEditor = l.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@inline_editor_cancel").click(this.fnbind(function() {
				return this.parent().toggleButtons(), !1
			})), this.$("#@inline_editor_link").click(this.fnbind(function() {
				return this.parent().toggleButtons(), !1
			}))
		},
		_get_kwargs: function() {
			return {
				tid: this.tid,
				to_uid: this.to_uid,
				bio: this.get_value()
			}
		}
	}), b.RevertDialog = m.extend({
		onLoad: function() {
			this.lookup("editor").focus(), g.revertDialog = this
		}
	}), b.BatchRevertDialog = m.extend({
		onLoad: function() {
			this.lookup("editor").focus(), g.batchRevertDialog = this
		}
	}), b.TopicSelectorAdd = m.extend({
		onLoad: function() {
			this.$("#@add_btn").click(this.fnbind(function() {
				return this.select(), !1
			})), this.tempTopicList = {}
		},
		select: function() {
			this.type == "to_tid" ? $(".content").dialog({
				title: "Topic Merge",
				url: "/ajax/topic_merge_dialog",
				buttons: {
					Ok: this.fnbind(this._request),
					Cancel: null
				}
			}) : this._request()
		},
		_get_kwargs: function() {
			var a, b, c = {};
			return !(c.tid = this.oid) || !(c.type = this.type) || !(c.topic_name = this.parent().qValue) || /^\s*$/.test(c.topic_name) || this.type == "to_tid" && (a = require("app/view/topic").getTopicDialog()) && (b = a.lookup("editor")) && b.isEmpty() ? null : (b && (c.comment = b.serialize()), c)
		},
		_request: function() {
			var a = this._get_kwargs();
			if(!a) return !1;
			this.serverCall("add_topic").kwargs(a).success(this.fnbind(function() {
				this.parent().reset()
			})).liveMutate().send(), this.hide && this.parent().hideSelector()
		}
	}), b.TempTopicSelectorAdd = TopicSelectorAdd.extend({
		select: function() {
			this.saveTempTopic(this.parent().qValue)
		},
		setoid: function(a) {
			this.oid = a
		},
		saveName: function(a) {
			this.tempTopicList[a] = a
		},
		deleteName: function(a) {
			delete this.tempTopicList[a]
		},
		getTempTopicNames: function() {
			return this.tempTopicList
		},
		getTempTopicNamesAsArray: function() {
			var a = [];
			for(var b in this.tempTopicList) a.push(b);
			return a
		},
		reset: function() {
			this.parent().resetTempTopics(), this.tempTopicList = {}
		},
		saveTempTopic: function(a, b) {
			if(!a) return;
			this.saveName(a);
			var c = $("<li/>").addClass(this.tempTopicClass()).append($("<input/>").attr("type", "hidden").attr("name", "tidsugg_" + this.oid).val(a)).append($(this.topicNameTag()).text(this.tempTopicVisibleText(a)).addClass(this.topicNameClasses())).append($("<a/>").text(this.removeTopicText()).addClass(this.editLinkClasses()).attr("href", "#").click(this.fnbind(function() {
				return this.deleteName(a), c.remove(), !1
			})));
			this.parent().addTempTopic(c), b = typeof b != "undefined" ? b : !0, b && this.onTempTopicAdded()
		},
		topicNameTag: function() {
			return "<strong/>"
		},
		topicNameClasses: function() {
			return ""
		},
		editLinkClasses: function() {
			return "light"
		},
		tempTopicClass: function() {
			return "p0_5"
		},
		onTempTopicAdded: function() {
			this.parent().setText(""), this.parent().focus()
		},
		tempTopicVisibleText: function(a) {
			return a
		},
		removeTopicText: function() {
			return " remove"
		}
	}), b.TempBoardItemTopicSelectorAdd = TempTopicSelectorAdd.extend({
		topicNameTag: function() {
			return "<span/>"
		},
		topicNameClasses: function() {
			return "topic_name"
		},
		editLinkClasses: function() {
			return "topic_remove"
		},
		removeTopicText: function() {
			return ""
		},
		tempTopicClass: function() {
			return "topic_list_item"
		}
	}), b.TempBoardItemTopicSuggestionsSelectorAdd = TempBoardItemTopicSelectorAdd.extend({
		updateFollowersCount: function() {
			this.serverCall("update_count").kwargs({
				names: this.getTempTopicNames()
			}).contentFor(this.parent().$("#@followers"), {
				parentCID: this.cid
			}).send()
		},
		deleteName: function(a) {
			delete this.tempTopicList[a], this.updateFollowersCount()
		},
		onTempTopicAdded: function() {
			this.updateFollowersCount()
		}
	}), b.TempBoardItemTopicSuggestionRow = m.extend({
		onLoad: function() {
			var a = this;
			this.$("#@add_btn").click(this.fnbind(function() {
				return a.lookup("topic_add").saveTempTopic(a.topic_name, !0), a.$("#@suggestion_row").hide(), !1
			}))
		}
	}), b.TempTopicContextSelectorAdd = TempTopicSelectorAdd.extend({
		tempTopicVisibleText: function(a) {
			return a + ":"
		},
		editLinkClasses: function() {
			return "light edit o"
		},
		tempTopicClass: function() {
			return ""
		},
		removeTopicText: function() {
			return "Edit"
		},
		onTempTopicAdded: function() {
			this._super.apply(this, arguments), this.parent().$("#@selector_wrapper, #@title").hide(), this.parent().$("#@input").blur()
		},
		deleteName: function(a) {
			this._super.apply(this, arguments), this.parent().$("#@selector_wrapper, #@title").show(), this.parent().resetFocus()
		}
	}), b.TempReviewTopicContextSelectorAdd = TempTopicContextSelectorAdd.extend({
		tempTopicVisibleText: function(a) {
			return "Reviews of: " + a
		}
	}), b.PostTempTopicSelectorAdd = TempTopicSelectorAdd.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.defaultTopicName && this.saveTempTopic(this.defaultTopicName)
		},
		saveName: function(a) {
			this.tempTopicList[a] = a, this.parent().$("#@distribution_row").removeClass("hidden")
		},
		deleteName: function(a) {
			delete this.tempTopicList[a], this.getTempTopicNames().length <= 0 && this.parent().$("#@distribution_row").addClass("hidden")
		}
	}), b.ReviewQueueTempTopicSelectorAdd = TempTopicSelectorAdd.extend({
		onLoad: function() {
			this._super.apply(this, arguments)
		},
		saveTempTopic: function(a) {
			if(!a) return;
			this.parent().parent().setTopic(a)
		}
	}), b.TopicSelectorAdd2 = m.extend({
		onLoad: function(a) {
			this.$("#@add_btn").click(this.fnbind(function(a) {
				return this.select(), !1
			}))
		},
		getTopicName: function() {
			return this.parent().qValue
		},
		getKwargs: function() {
			return {
				selected_topic: this.getTopicName()
			}
		},
		select: function() {
			var a = this.getTopicName(),
				b = this.getKwargs();
			this.parent() && this.parent().resetFocus(), a && this.serverCall("add").kwargs(b).liveMutate().error(this.fnbind(function() {
				$(".content").dialog({
					title: "Unable to Add Topic",
					contents: "This topic may not be added.",
					buttons: {
						Close: null
					}
				})
			})).send()
		}
	}), b.QuestionTopicSelectorAdd = TopicSelectorAdd2.extend({
		getKwargs: function() {
			return {
				selected_topics: this.getTopicName(),
				viewer_private: this.viewer_private,
				qid: this.qid
			}
		},
		getTopicName: function() {
			if(this.parent().qValue != "") return $.makeArray(this.parent().qValue)
		}
	}), b.ReviewTopicQuestion = k.SwitchableComponent.extend({
		switchAction: function() {
			this.$("#@editor").toggle(), this.parent().$("#@contents").toggle()
		},
		onUnload: function() {
			this.closeEditor()
		},
		closeEditor: function() {
			this.$("#@editor").hide(), this.parent().$("#@contents").show()
		}
	}), b.ApproveOrRejectQuestionOnTopic = m.extend({
		onLoad: function(a) {
			this.$("#@link").click(this.fnbind(function() {
				return this.parent().$("#@buttons").hide(), this.serverCall("update").kwargs({
					tid: this.tid,
					qid: this.qid
				}).error(this.fnbind(function() {
					this.parent().$("#@buttons").show()
				})).liveMutate().send(), !1
			}))
		}
	}), b.SetTopicGroupStatus = m.extend({
		onLoad: function(a) {
			this.$("#@make_unofficial").click(this.fnbind(function() {
				return $(".content").dialog({
					title: "Make Group Unofficial",
					contents: "Are you sure you want to make this group unofficial?",
					buttons: {
						"Make Unofficial": this.fnbind(function() {
							this.serverCall("make_unofficial").liveMutate().send()
						}),
						Cancel: null
					}
				}), !1
			})), this.$("#@make_official").click(this.fnbind(function() {
				return $(".content").dialog({
					title: "Make Group an Official Group",
					contents: "Are you sure you want to make this topic group an official group?",
					buttons: {
						"Make Official": this.fnbind(function() {
							this.serverCall("make_official").liveMutate().send()
						}),
						Cancel: null
					}
				}), !1
			}))
		}
	}), b.CommentLink = m.extend({
		onLoad: function() {
			this.$("#@view_comment_link").click(this.fnbind(function() {
				return this.viewComments(), !1
			})), this.initState("loading", !1)
		},
		viewComments: function() {
			var a = this.lookup("comments_list");
			a && a.viewComments ? a.viewComments() : this.state("loading", !0), this.lookup("trackbacks") && this.lookup("trackbacks").hideTrackbacks()
		},
		stateHandlers: {
			loading: function(a) {
				var b = this.$("#@loading_comment_link"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a), this.$("#@view_comment_link").toggleClass("hidden", a)
			}
		}
	}), b.CommentLinkSwitch = m.extend({
		viewComments: function() {
			var a = this.lookup("comments_list");
			a && a.viewComments && a.viewComments();
			var b = this.lookup("trackbacks");
			b && b.hideTrackbacks && b.hideTrackbacks()
		}
	}), b.QuestionNumberAnswers = m.extend({
		onLoad: function(a) {
			this.$("#@link").mousedown(this.fnbind(function() {
				j.setQfeedLog(this, "QuestionAnswersClickthrough"), j.setQueryLog(this, "QuestionAnswersClickthrough")
			}))
		}
	}), b.ContextTopicEditor = m.extend({
		onLoad: function() {
			this.$("#@menu_link").click(this.fnbind(function(a) {
				return this.$("#@menu").menu(this.$("#@menu_link")), !1
			})), this.$("#@search").click(this.fnbind(function() {
				return this.$("#@selector").show(), this.$("#@menu_link").hide(), this.lookup("selector").focus(), !1
			})), this.$("#@cancel").click(this.fnbind(function() {
				return this.$("#@selector").hide(), this.$("#@menu_link").show(), !1
			}))
		}
	}), b.ContextTopicEditorLink = m.extend({
		onLoad: function() {
			this.$("#@set_context").click(this.fnbind(function(a) {
				return this.serverCall("set_context").kwargs({
					object_id: this.object_id,
					context_tid: this.context_tid
				}).liveMutate().send(), !1
			}))
		}
	}), b.RemoveContextTopicLink = m.extend({
		onLoad: function() {
			this.$("#@remove_context").click(this.fnbind(function(a) {
				return this.serverCall("remove_context").kwargs({
					object_id: this.object_id
				}).liveMutate().send(), !1
			}))
		}
	}), b.LicenseItem = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function(a) {
				return this.$("#@text").toggle(), this.$("#@view_license").toggle(), this.$("#@hide_license").toggle(), !1
			}))
		}
	}), b.NamesMenuLink = m.extend({
		onLoad: function() {
			this.$("#@names_link").click(this.fnbind(function(a) {
				return this.$("#@names_menu").menu(this.$("#@names_link")), !1
			}))
		}
	}), b.UploadDialogContents = m.extend({
		onLoad: function() {
			this.$("#@web_upload_link").click(this.fnbind(function() {
				return this.$("#@view_web_upload").hide(), this.$("#@web_upload").show(), this.lookup("upload_web").focus(), !1
			})), this.child("upload_form").success(this.fnbind(this.uploadSuccess))
		},
		uploadSuccess: function() {}
	}), b.EditPhotoDialogContents = UploadDialogContents.extend({
		onLoad: function() {
			return this._super.apply(this, arguments), this.$("#@from_facebook").click(this.fnbind(function(a) {
				this.fb_uid && require("facebook").onInit(this.fnbind(function() {
					FB.api({
						method: "fql.query",
						query: "SELECT pic_big FROM user WHERE uid = " + this.fb_uid
					}, this.fnbind(function(a) {
						var b = a[0];
						b.pic_big ? (this.$("#@view_web_upload").hide(), this.$("#@web_upload").hide(), this.lookup("upload_web").$("#@url").hide().val(b.pic_big), this.lookup("upload_web").$("#@download").click(), this.$("#@web_upload").show()) : a1ert("You don't seem to have a profile picture on Facebook.")
					}))
				}))
			})), !1
		},
		uploadSuccess: function() {
			this.serverCall("upload").kwargs({
				target_id: this.target_id,
				target: this.target
			}).contentFor(this.$("#@iframe"), {
				parentCID: this.cid
			}).send()
		}
	}), b.UploadQTextImageDialogContents = UploadDialogContents.extend({
		uploadSuccess: function(a) {
			var b = g.Dialog.openerFor(this);
			g.Dialog.dialogFor(this).close_(), b.addImage(a.qimg_url)
		}
	}), b.EditPhotoDialogLink = m.extend({
		onLoad: function() {
			this.$("#@open_edit_photo").click(this.fnbind(function() {
				return this.editPhoto(), !1
			}))
		},
		editPhoto: function() {
			this._dialog || (this._dialog = this.dialog().title(this.dialog_title).cancel(null, "Close").load("set_dialog_contents").close(this.fnbind(function() {
				this._dialog = null
			})))
		}
	}), b.InlineUploadWeb = m.extend({
		onLoad: function() {
			var a = this;
			a.$("#@download").click(function() {
				var b = a.$("#@url").focus().val(),
					c;
				return b && (c = new Image, c.onload = function() {
					a.download(b)
				}, c.onerror = function() {
					a1ert("Please enter the URL of a valid image."), a.$("#@url").val("")
				}, c.src = b), !1
			})
		},
		download: function(a) {},
		focus: function() {
			this.$("#@url").focus()
		}
	}), b.InlineUploadPhotoWeb = InlineUploadWeb.extend({
		download: function(a) {
			return this.serverCall("download").kwargs({
				target_id: this.target_id,
				target: this.target,
				url: a
			}).contentFor(this.$("#@wrapper"), {
				parentCID: this.cid
			}).liveMutate().except("image_error", this.fnbind(function(a) {
				a1ert(a.message), g.Dialog.dialogFor(this).close_()
			})).send(), !1
		}
	}), b.InlineUploadQTextImageWeb = InlineUploadWeb.extend({
		download: function(a) {
			var b = g.Dialog.openerFor(this);
			g.Dialog.dialogFor(this).close_(), b.addImage(a)
		}
	}), b.InlinePhotoEditor = m.extend({
		onLoad: function() {
			this.$("#@photo").hover(this.fnbind(function(a) {
				this.$("#@edit").show(), this.$("#@x_photo").show()
			}), this.fnbind(function(a) {
				this.$("#@edit").hide(), this.$("#@x_photo").hide()
			})), this.$("#@x_photo").click(this.fnbind(function() {
				return this.dialog().title("Remove Profile Photo").cancel(null, "Close").ok(this.fnbind(function() {
					this.serverCall("remove_photo").send()
				}), "Remove Photo").html("Are you sure you want to remove your profile photo?"), !1
			}))
		}
	}), b.SuggestProfilePhoto = m.extend({
		onLoad: function() {
			this.$("#@photo").hover(this.fnbind(function(a) {
				this.$("#@add, #@edit").show()
			}), this.fnbind(function(a) {
				this.$("#@add, #@edit").hide()
			}))
		}
	}), b.SuggestedPhotoPending = m.extend({
		onLoad: function() {
			this.suggestion_from_viewer || this.$("#@photo").hover(this.fnbind(function(a) {
				this.$("#@pending").show()
			}), this.fnbind(function(a) {
				this.$("#@pending").hide()
			})), this.$("#@view").click(this.fnbind(function() {
				return this.parent().toggleSuggestion(), !1
			}))
		}
	}), b.SuggestSigLinkWithDialog = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this._dialog = this.dialog().title("Suggest Topic Biographies to " + this.name).cancel(null, "Close").load("load_contents"), !1
			}))
		}
	}), b.SuggestedSigOptions = m.extend({
		onLoad: function() {
			this.$("#@close").click(this.fnbind(function() {
				return this.parent().parent().toggleSuggestion(), !1
			}))
		}
	}), b.SuggestedSigAccept = m.extend({
		onLoad: function() {
			this.$("#@accept").click(this.fnbind(function() {
				return this.serverCall("accept").kwargs({
					to_uid: this.uid,
					tid: this.tid
				}).liveMutate().send(), !1
			}))
		}
	}), b.SuggestedPhotoAccept = m.extend({
		onLoad: function() {
			this.$("#@accept").click(this.fnbind(function() {
				return this.serverCall("accept").kwargs({
					uid: this.uid
				}).liveMutate().send(), !1
			}))
		}
	}), b.SuggestedSigDiscard = m.extend({
		onLoad: function() {
			this.$("#@discard").click(this.fnbind(function() {
				return this._dialog = this.dialog().title("Discard Suggestion?").ok(this.fnbind(function() {
					this.serverCall("discard").kwargs({
						to_uid: this.uid,
						tid: this.tid
					}).liveMutate().send()
				}), "Discard Suggestion").cancel(null, "Cancel").html("Are you sure you want to delete this suggested biography?"), !1
			}))
		}
	}), b.SuggestedPhotoDiscard = m.extend({
		onLoad: function() {
			this.$("#@discard").click(this.fnbind(function() {
				return this._dialog = this.dialog().title("Discard Suggestion?").ok(this.fnbind(function() {
					this.serverCall("discard").kwargs({
						to_uid: this.to_uid
					}).liveMutate().send()
				}), "Discard Suggestion").cancel(null, "Cancel").html("Are you sure you want to delete this suggested profile photo?"), !1
			}))
		}
	}), b.SuggestAnswerMove = m.extend({
		onLoad: function() {
			this.$("#@move").click(this.fnbind(function() {
				if(this._dialog) return;
				return this._dialog = this.dialog().title("Suggest Moving Answer").ok(this.fnbind(function() {
					this.serverCall("suggest_answer_move").kwargs({
						aid: this.aid,
						new_qid: this.new_qid
					}).liveMutate().send()
				}), "Suggest Answer Move").cancel(null, "Cancel").load("confirm_suggested_answer_move", {
					kwargs: {
						new_qid: this.new_qid,
						old_qid: this.old_qid,
						aid: this.aid
					}
				}), !1
			})), this.$("#@undo").click(this.fnbind(function() {
				if(this._dialog) return;
				return this._dialog = this.dialog().title("Undo Moving Answer Suggestion").ok(this.fnbind(function() {
					this.serverCall("undo_suggest_answer_move").kwargs({
						aid: this.aid
					}).liveMutate().send()
				}), "Discard Suggestion").cancel(null, "Cancel").html("Are you sure you want to discard the suggestion to move this answer?"), !1
			}))
		}
	}), b.AnswerMoveButton = m.extend({
		onLoad: function() {
			this.$("#@move").click(this.fnbind(function() {
				if(this._dialog) return;
				return this._dialog = this.dialog().title("Confirm Moving Answer").ok(this.fnbind(function() {
					this.serverCall("move_answer").kwargs({
						aid: this.aid,
						new_qid: this.new_qid
					}).liveMutate().send()
				}), "Move Answer").cancel(null, "Cancel").load("confirm_answer_move", {
					kwargs: {
						new_qid: this.new_qid,
						aid: this.aid
					}
				}), !1
			}))
		}
	}), b.AddQuestionAliasList = m.extend({
		onLoad: function() {
			this.$("#@create_link").click(this.fnbind(function() {
				return this.$("#@create").hide(), this.$("#@add_alias").show(), this.lookup("input").$("#@input").focus(), !1
			})), this.$("#@add").click(this.fnbind(function() {
				var a = this.lookup("input").$("#@input").val();
				return a && this.serverCall("add_question_alias").kwargs({
					qid: this.qid,
					alias: a
				}).success(this.fnbind(function() {
					this.lookup("input").$("#@input").val(""), this.lookup("input").$("#@input").focus()
				})).liveMutate().send(), !1
			}))
		}
	}), b.QuestionAliasText = m.extend({
		onLoad: function() {
			this.$("#@edit").click(this.fnbind(function() {
				return this.toggleEditor(), !1
			})), this.$("#@cancel").click(this.fnbind(function() {
				return this.toggleEditor(), !1
			})), this.$("#@update").click(this.fnbind(function() {
				var a = this.lookup("input").$("#@input").val();
				return a && this.serverCall("edit_question_alias").kwargs({
					qid: this.qid,
					alias_id: this.alias_id,
					new_alias: a
				}).success(this.fnbind(function() {
					this.lookup("input").$("#@input").val(""), this.toggleEditor()
				})).liveMutate().send(), !1
			}))
		},
		toggleEditor: function() {
			this.$("#@text").toggle(), this.$("#@editor").toggle(), this.parent().$("#@remove").toggle()
		}
	}), b.QuestionAliasItem = m.extend({
		onLoad: function() {
			this.$("#@remove").tooltip({
				contents: "Remove Question Alias"
			}).click(this.fnbind(function() {
				this.clear(), this.$("#@text").addClass("item_selected");
				if(this._dialog) return;
				return this._dialog = this.dialog().title("Confirm Question Alias Removal").ok(this.fnbind(function() {
					this.serverCall("remove_question_alias").kwargs({
						qid: this.qid,
						alias_id: this.alias_id
					}).liveMutate().send()
				}), "Remove Alias").cancel(this.fnbind(function() {
					this.clear()
				}), "Cancel").html("Are you sure you want to remove this alias?"), !1
			})), this.$("#@item").hover(this.fnbind(function(a) {
				this.$("#@remove").show()
			}), this.fnbind(function(a) {
				this.$("#@remove").hide()
			}))
		},
		clear: function() {
			$(".item_selected").removeClass("item_selected")
		}
	}), b.QuestionRedirectDialogContents = m.extend({
		onLoad: function() {
			this.to_qid = null, this.lookup("question_selector").setExtraFocus(this.fnbind(function() {
				this.$("#@related").hide()
			})), this.$("#@cancel").click(this.fnbind(function() {
				return this.closeDialog(), !1
			})), this.$("#@redirect").click(this.fnbind(function() {
				var a = this.$("#@to_qid").val(),
					b = this.lookup("question_selector").$("#@input").val();
				if(a) this.createRedirect(a);
				else {
					if(!b) return !1;
					this.serverCall("add_question_redirect_from_url").kwargs({
						url: b
					}).error(function() {
						a1ert("There was a problem redirecting the question.")
					}).success(this.fnbind(function(a) {
						a || (this.$("#@pick_redirect").show(), this.$("#@pick_redirect").text("The text you entered does not match a question or question URL."))
					})).liveMutate().send(), this.closeDialog()
				}
				return !1
			}))
		},
		createRedirect: function(a) {
			if(!a) return;
			this.serverCall("add_question_redirect").kwargs({
				to_qid: a
			}).liveMutate().send(), this.closeDialog()
		},
		closeDialog: function() {
			g.Dialog.openerFor(this).closeDialog()
		},
		setDialogTitle: function(a) {
			g.Dialog.openerFor(this).setTitle(a)
		}
	}), b.QuestionRedirectLinkWithDialog = m.extend({
		onLoad: function() {
			this.$("#@redirect_question_with_dialog_link").click(this.fnbind(function() {
				return this._dialog = this.dialog().title("Redirect Into An Existing Question").load("redirect_question_dialog_contents"), !1
			}))
		},
		closeDialog: function() {
			this._dialog.close_()
		},
		setTitle: function(a) {
			this._dialog.setTitle(a)
		}
	}), b.QuestionRedirectQuestionLink = m.extend({
		onLoad: function() {
			this.$("#@redirect").click(this.fnbind(function() {
				return this.parent().createRedirect(this.to_qid), !1
			}))
		}
	}), b.QuestionRedirectReviewsLink = m.extend({
		onLoad: function() {
			this.$("#@redirect").click(this.fnbind(function() {
				return this.serverCall("add_question_redirect").liveMutate().send(), !1
			}))
		}
	}), b.TitleContentVerticalDisclosureItem = m.extend({
		onLoad: function() {
			this.$("#@body_content_disclosure_link").click(this.fnbind(function(a) {
				return this.$("#@body_content_to_disclose").toggle(), !1
			}))
		}
	}), b.AnswerAddAskToAnswerHeader = m.extend({
		onLoad: function() {
			this.loaded = !1, this.$("#@ask_to_answer_link").click(this.fnbind(function(a) {
				return this.loaded || this.serverCall("wanted_answer").contentFor(this.parent().$("#@wanted_answer_section"), {
					parentCID: this.parent().cid
				}).success(this.fnbind(function(a) {
					this.loaded = !0
				})).send(), this.showAskToAnswer(), !1
			})), this.show_link ? this.$("#@add_answer_link").click(this.fnbind(function(a) {
				return this.showAddAnswer(), !1
			})) : this.showAddAnswer()
		},
		showAskToAnswer: function() {
			this.parent().$("%@ask_to_answer_group").show(), this.parent().$("%@add_answer_group").hide(), this.$("%@ask_to_answer_group").show(), this.$("%@add_answer_group").hide()
		},
		showAddAnswer: function() {
			this.parent().$("%@ask_to_answer_group").hide(), this.parent().$("%@add_answer_group").show(), this.$("%@ask_to_answer_group").hide(), this.$("%@add_answer_group").show()
		}
	}), b.TopicSetSubTabs = m.extend({
		onLoad: function() {
			this.loaded = !1, this.$("#@more").click(this.fnbind(function() {
				return this.loaded || this.serverCall("all_topic_set").contentFor(this.$("#@all"), {
					parentCID: this.cid
				}).success(this.fnbind(function() {
					this.showAll(), this.loaded = !0
				})).send(), !1
			})), this.$("%@suggestions").click(this.fnbind(function() {
				return this.$("%@suggestions").toggle(), this.$("#@suggestions").show(), !1
			})), this.$("#@hide_suggestions").click(this.fnbind(function() {
				return this.$("%@suggestions").toggle(), this.$("#@suggestions").hide(), !1
			}))
		},
		showAll: function() {
			this.$("#@all").show(), this.$("#@preview").hide()
		}
	}), b.RemoveFlagAsNotForReproduction = m.extend({
		onLoad: function() {
			this.$("#@reproduction").click(this.fnbind(function(a) {
				return this.serverCall("available_for_reproduction").liveMutate().send(), !1
			}))
		}
	}), b.TopicListItem = m.extend({
		onLoad: function() {
			this.$("#@remove_topic").tooltip({
				contents: "Remove"
			}).click(this.fnbind(function(a) {
				return this.serverCall("remove_topic").liveMutate().send(), !1
			})), this.$("#@remove_topic").hover(this.fnbind(function(a) {
				this.$("#@topic_list_item").addClass("hover")
			}), this.fnbind(function(a) {
				this.$("#@topic_list_item").removeClass("hover")
			}))
		}
	}), b.TopicSetListItem = m.extend({
		onLoad: function() {
			var a = this;
			this.$("#@item").hover(function(b) {
				a.$("#@remove").show()
			}, function(b) {
				a.$("#@remove").hide()
			}), this.$("#@remove_topic").click(this.fnbind(function(a) {
				return this.serverCall("remove_topic").liveMutate().send(), !1
			}))
		}
	}), b.RemoveTopicMenu = m.extend({
		onLoad: function() {
			this.$("#@options_link").click(this.fnbind(function() {
				return this.$("#@options_menu").menu(this.$("#@options_link"), {
					position_relative: !0,
					close_on_click: !1
				}), this.parent().showRemove(), !1
			}));
			var a = this;
			$(".topic_set_menu .menu_list_item a").click(function() {
				a.parent().hideRemove()
			}), $(document).click(function() {
				a.parent().hideRemove()
			}), this.$("#@edit").click(this.fnbind(function() {
				return this.parent().openEditor(), !1
			})), this.$("#@move").click(this.fnbind(function() {
				return this.parent().$("#@selector").show(), this.parent().lookup("selector").focus(), !1
			}))
		}
	}), b.QuestionReviewEditor = k.ToggledComponent.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@update").click(this.fnbind(function() {
				return this.updateQuestion(), !1
			})), this.$("#@update_review").click(this.fnbind(function() {
				return this.updateQuestion(), this.markReviewed(), !1
			})), this.$("#@review").click(this.fnbind(function() {
				return this.markReviewed(), !1
			})), this.$("#@cancel").click(this.fnbind(function() {
				return this.close(), !1
			}))
		},
		markReviewed: function() {
			this.serverCall("mark_reviewed").kwargs({
				qid: this.qid,
				tid: this.tid
			}).success(this.fnbind(function() {
				this.close()
			})).liveMutate().send()
		},
		updateQuestion: function() {
			if(this.lookup("text").isEmpty()) return;
			this.serverCall("update_question").kwargs({
				qid: this.qid,
				text: this.lookup("text").serialize(),
				details: this.lookup("details").serialize()
			}).success(this.fnbind(function() {
				this.close()
			})).liveMutate().send()
		},
		close: function() {
			this.parent().closeEditor()
		}
	}), b.HomepageFeedStoryItem = m.extend({
		init: function() {
			function b() {
				if(a.alreadySent) return;
				a.alreadySent = !0, j.setMessage("vtc", [a.hash, a.view_tracking_key]), a.allowServerCall && a.serverCall("dummy_call_nonlivedepped").send()
			}
			this._super.apply(this, arguments), this.setDvar("feed_story_hash", this.hash);
			var a = this;
			a.allowServerCall = !0, a.alreadySent = !1, this.parent().needsRefresh = !0, this.$("#@item").mousedown(b), $("a", this.$("#@item")).mousedown(function(c) {
				a.allowServerCall = c.target.pathname == window.location.pathname, b()
			}), a.retarget_enabled && (a.retarget(), this.$("#@item .more_link").click(this.fnbind(function() {
				a.retarget()
			})))
		},
		getHash: function() {
			return this.hash
		},
		retarget: function() {
			this.$('#@item a[href!="#"]').attr("target", "_blank")
		}
	}), b.OpenQuestionItem = m.extend({
		init: function() {
			this.$('#@item a[href!="#"]').attr("target", "_blank")
		}
	}), b.FeedExtraStories = m.extend({
		onLoad: function() {
			this.$("#@extra_link").click(this.fnbind(function() {
				return this.$("#@showmore").addClass("hidden"), this.$("#@loading").removeClass("hidden"), this.serverCall("append_extra_stories").send(), !1
			}))
		}
	}), b.QuestionTopics = m.extend({
		onLoad: function() {
			this.$("#@view_all_link").tooltip({
				contents: "Click to view all topics"
			}), this.$("#@view_all_link").click(this.fnbind(function() {
				return this.$("#@view_all").addClass("hidden"), this.$("#@view_all_link").addClass("hidden"), this.$("#@all_topics").removeClass("hidden"), !1
			}))
		}
	}), b.NeedTopicsListItem = m.extend({
		onLoad: function() {
			var a = this;
			this.$("#@item input.question_box").keydown(function(b) {
				if(b.keyCode == 9 && !b.shiftKey) for(var c = g.getLiveDomId(a.cid), d = a.parent().orderedVisibleChildren(), e = 0; e < d.length - 1; ++e) if(c == d[e]) return $(this).blur(), $("#" + d[e + 1] + " input.question_box").focus(), !1
			})
		},
		markHasEnoughTopics: function() {
			this.$("#@item").removeClass("item_selected")
		}
	}), b.NeedTopicsQuestionInfo = m.extend({
		onLoad: function() {
			this.has_enough_topics && this.lookup("need_topics_list_item").markHasEnoughTopics()
		}
	}), b.ObjectBrowser = m.extend({
		onLoad: function() {
			this.$("#@browser_submit").click(this.fnbind(function() {
				return this.shareRequest(), this.close(), !1
			})), this.$(".@browser_close").click(this.fnbind(function() {
				return this.close(), !1
			})), this.$("#@browser_next").click(this.fnbind(function() {
				return this.countObjects() <= 0 ? !1 : (this.$("#@number_contacts").text(this.countObjects()), this.$("#@browser_list").addClass("hidden"), this.$("#@browser_preview").removeClass("hidden"), !1)
			})), this.$("#@browser_prev").click(this.fnbind(function() {
				return this.$("#@browser_list").toggleClass("hidden"), this.$("#@browser_preview").toggleClass("hidden"), !1
			}))
		},
		countObjects: function() {
			return $(":input[checked=true]").length
		},
		close: function() {
			$("#object_browser").remove()
		},
		shareRequest: function() {
			var a = {
				object_id: this.object_id,
				type: this.type,
				msg_json: this.lookup("editor").serialize()
			};
			$(":input").each(function() {
				$(this).attr("checked") && (a[$(this).attr("name")] = 1)
			}), this.serverCall("share").liveMutate().kwargs(a).send()
		}
	}), b.TopicBrowser = ObjectBrowser.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@browser_next").click(this.fnbind(function() {
				var a = 0,
					b = "";
				$(".dialog .selected .topic_name").each(function(c) {
					a > 0 && (b += ", "), b += '<a href="#">' + $(this).text() + "</a>", a++
				}), a == 1 ? this.$(".@topic_plural").text("") : this.$(".@topic_plural").text("s"), this.$("#@object_names_preview").html(b)
			}))
		}
	});
	var n = {};
	b.ContentWrapper = m.extend({
		onLoad: function() {
			var a = this,
				b = $("textarea");
			b.each(function(b, c) {
				var d = $(c),
					e = function() {
						var b = d.height(),
							c = parseInt(d.css("padding-top")) + parseInt(d.css("padding-bottom")),
							e = parseInt(d.prop("scrollHeight")) - c;
						a.max && e > a.max && (e = a.max), e > b - c && d.css("height", e + "px")
					};
				d.bind("keypress", e).bind("focus", e).bind("paste", e)
			})
		},
		onFetchingNewResults: function(a) {
			a && a != null && (this.$("#@content").addClass("pending_next_request"), n[a] = (new Date).getTime())
		},
		onNewResultsLoaded: function(a) {
			if(a && a != null) {
				this.$("#@content").removeClass("pending_next_request");
				var b = (new Date).getTime() - n[a];
				console.log("Results visible for '" + a + "' in " + b);
				var c = "Search - " + unescape(a);
				h.setTitle(c)
			}
		}
	}), b.QTextImageEnlarger = m.extend({
		onLoad: function(a) {
			function c(a) {
				return b[a] || (b[a] = $("<div>").addClass("enlarged_image").append($("<div>").addClass("enlarged_image_close").text("close")).append($("<div>").addClass("enlarged_image_inner").append($("<img />").attr("src", a))).append($("<a>").attr("href", a).attr("target", "_blank").addClass("enlarged_image_zoom")))
			}
			if(!a) return;
			var b = {};
			$(document).mousedown(function(a) {
				if(a.which !== 1) return;
				var b = $(a.target),
					d = b.attr("master_src"),
					e = b.hasClass("zoomable_in") || b.hasClass("zoomable_in_feed");
				if(!e || !d) return;
				var f = 10,
					g = $(window).width(),
					h = $(window).height(),
					i = parseInt(b.attr("master_w")),
					j = parseInt(b.attr("master_h")),
					k = g - 4 * f,
					l = h - 4 * f,
					m = i,
					n = j,
					o = c(d),
					p = !0;
				m > k && (n *= k / m, m = k, p = !1);
				var q = n / m < 2,
					r = !q && n > l;
				return q && n > l && (m *= l / n, n = l, p = !1), o.find("a.enlarged_image_zoom").toggle(!p), r ? o.addClass("full_height").css("top", $(window).scrollTop() + f + "px").css("left", Math.round($(window).scrollLeft() + f + (k - m) / 2) + "px") : o.removeClass("full_height").css("top", Math.round(f + (l - n) / 2) + "px").css("left", Math.round(f + (k - m) / 2) + "px"), o.css("width", Math.round(m) + "px").css("height", Math.round(n) + "px").appendTo("body"), o.find(".enlarged_image_close, .enlarged_image_inner").click(function(a) {
					o.remove()
				}), !1
			}), $(document).bind("keydown._enlarged_image", function(a) {
				if(a.keyCode == 27) for(var c in b) b[c].remove()
			})
		}
	}), b.ProfileStructuredTopic = m.extend({
		onLoad: function(a) {
			a || this.lookup("selector").focus(!0)
		}
	}), b.QTextGIFPlayer = m.extend({
		onLoad: function(a) {
			if(!a) return;
			$(document).click(this.fnbind(function(a) {
				var b = $(a.target).parent("[gif-embedded]");
				if(!b) return;
				var c = b.attr("gif-embedded"),
					d = b.attr("background-url");
				if(b.attr("is-playing") == "false") {
					var e = new Image;

					function f() {
						b.children(".qtext_image").attr("src", c), b.children(".gif_embed_noclick").css("visibility", "hidden"), b.attr("is-playing", "true")
					}
					e.onload = f, e.src = c
				} else b.children(".qtext_image").attr("src", d), b.children(".gif_embed_noclick").css("visibility", "visible"), b.attr("is-playing", "false")
			}))
		}
	}), b.QTextEmbedEnlarger = m.extend({
		onLoad: function(a) {
			if(!a) return;
			$(document).click(this.fnbind(function(a) {
				var b = $(a.target),
					c = undefined;
				b.attr("data-embed") ? c = b.attr("data-embed") : (b = b.parent(), c = b && b.attr("data-embed"));
				if(!c || !b.hasClass("thumbnail")) return;
				this.loadEmbed(b, c)
			}))
		},
		loadEmbed: function(a, b) {
			var c = this;
			if(!window.YT) {
				window.YT = {}, window.YT.players = [], window.YT.next_id = 0;
				var d = document.createElement("script");
				d.src = "//www.youtube.com/player_api";
				var e = document.getElementsByTagName("script")[0];
				e.parentNode.insertBefore(d, e);
				var f = 50,
					g = function j(d) {
						if(d < 0) return;
						window.setTimeout(function() {
							window.YT.Player ? c.loadEmbed(a, b) : j(d - f)
						}, f)
					};
				g(1e4)
			}
			if(!window.YT.Player) return;
			a.append(b).removeClass("thumbnail");
			var h = "YTPlayer-" + YT.next_id++;
			a.find(":first-child").attr("id", h);
			var i = new window.YT.Player(h, {
				events: {
					onStateChange: function(a) {
						return o(a, h)
					}
				}
			});
			window.YT.players.push({
				player: i,
				playerId: h,
				state: -1
			}), p(h)
		}
	}), b.pauseYTPlayers = p, b.getYTPlayerStatuses = function(a, b) {
		var c = [];
		return a.find(".qtext_embed iframe").each(function(a, d) {
			var e = $(d).attr("id"),
				f = $(d).parent().attr("data-yt-id");
			$.each(window.YT.players, function(a, b) {
				if(b.playerId == e) {
					var d = b.player.getCurrentTime();
					c.push({
						ytId: f,
						time: d,
						state: b.state
					})
				}
			}), b && b(d)
		}), c
	}, b.restoreYTPlayerStatuses = function(a, b) {
		$.each(b, function(b, c) {
			var d = a.find('.qtext_embed[data-yt-id="' + c.ytId + '"]');
			if(!d.size()) return;
			d = d.get(0), $(d).click(), $.each(window.YT.players, function(a, b) {
				b.playerId == $(d).find("iframe").attr("id") && (b.onReady = function(a) {
					a.player.seekTo(c.time), (c.state == window.YT.PlayerState.PAUSED || c.state == window.YT.PlayerState.ENDED) && a.player.pauseVideo()
				})
			})
		})
	}, b.SimpleUserRequest = m.extend({
		onLoad: function() {
			var a = this;
			this.$("#@link").click(this.fnbind(function() {
				this.upvote && (j.setQfeedLog(this, "BoardItemUpvote"), j.setQueryLog(this, "BoardItemUpvote"), j.setTlog({
					type: "BoardItemUpvote",
					board_item_id: a.board_item_id
				}), require("action_log").logAction("BoardItemUpvote", null, {
					type: "board_item",
					board_item_id: a.board_item_id
				}));
				if(this.board_follow_button || this.board_request_follow_button) j.setQfeedLog(this, "BoardFollow"), j.setQueryLog(this, "BoardFollow"), j.setTlog({
					type: "BoardFollow",
					bid: a.bid
				}), require("action_log").logAction("BoardFollow", null, {
					type: "board",
					bid: a.bid
				});
				return this.serverCall("request").liveMutate().send(), !1
			}))
		}
	}), b.SimpleUserRequestConfirm = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this._dialog = this.dialog().title(this.title).cancel(null, "Cancel").ok(this.fnbind(function() {
					this.serverCall("request").liveMutate().send()
				}), this.button_text).html("Are you sure you want to " + this.confirm_text + "?"), !1
			}))
		}
	}), b.SimpleUserRequestCommentConfirm = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this._dialog = this.dialog().title(this.title).cancel(null, "Cancel").ok(this.fnbind(function() {
					var a = arguments[0].dialogComponent,
						b = a.cQuery(":comment").serialize();
					this.serverCall("request").kwargs({
						comment: b
					}).liveMutate().send()
				}), this.button_text).load("comment_dialog"), !1
			}))
		}
	}), b.SimpleItemHover = m.extend({
		onLoad: function() {
			var a = this;
			this.$("#@item").hover(function(b) {
				a.$("#@item").addClass("hover")
			}, function(b) {
				a.$("#@item").removeClass("hover")
			})
		}
	}), b.AddFollowersToBoardListItem = m.extend({
		onLoad: function() {
			var a = this;
			this.$("#@link").hover(function(b) {
				a.$("#@link").addClass("action_button")
			}, function(b) {
				a.$("#@link").removeClass("action_button")
			}), this.$("#@link").click(this.fnbind(function() {
				return this.serverCall("request").liveMutate().send(), !1
			}))
		}
	}), b.SimpleMenu = m.extend({
		onLoad: function() {
			this.options || (this.options = {}), this.$("#@menu_link").click(this.fnbind(function() {
				return this.$("#@menu_items").menu(this.$("#@menu_link"), this.options), !1
			}))
		}
	}), b.StaticBoardPrivacyMenu = m.extend({
		onLoad: function() {
			this.type = null, this.$("#@menu_link").click(this.fnbind(function() {
				return this.$("#@menu_items").menu(this.$("#@menu_link"), {
					position_relative: !0
				}), !1
			}));
			var a = this;
			$(".menu_list_items .static_link").click(function() {
				var b = $(this),
					c = b.text();
				return a.$("#@menu_link").text(c), a.setType(b.attr("type")), !1
			})
		},
		setType: function(a) {
			this.type = a
		},
		getType: function() {
			return this.type
		}
	}), b.OperationApprove = m.extend({
		onLoad: function() {
			this.$("#@operation_undo_approve").click(this.fnbind(function() {
				return this._request("approve_revision_remove"), !1
			})), this.$("#@operation_approve").tooltip({
				contents: "Confirm this change has been reviewed"
			}).click(this.fnbind(function() {
				return this._request("approve_revision"), !1
			}))
		},
		_request: function(a) {
			this.serverCall(a).kwargs({
				oid: this.oid
			}).liveMutate().send()
		}
	}), b.OperationRevert = m.extend({
		onLoad: function() {
			this.$("#@operation_revert").click(this.fnbind(function() {
				return $(".content").dialog({
					title: "Revert Edit",
					url: "/ajax/revert_dialog",
					mobile: this.mobile,
					buttons: {
						Ok: this.fnbind(function() {
							var a = g.revertDialog.lookup("editor");
							if(a.isEmpty()) return;
							this.serverCall("revert_revision").kwargs(this.getKwargs(a)).liveMutate().send()
						}),
						Cancel: null
					}
				}), !1
			}))
		},
		getKwargs: function(a) {
			return {
				oid: this.oid,
				comment: a.serialize()
			}
		}
	}), b.ReviewQueueOperationRevertLink = OperationRevert.extend({
		onLoad: function() {
			this._super.apply(this, arguments)
		},
		getKwargs: function(a) {
			return {
				oid: this.oid,
				queue_id: this.queue_id,
				comment: a.serialize()
			}
		}
	}), b.TopicGroupReviewQueueOperationRevertLink = OperationRevert.extend({
		onLoad: function() {
			this._super.apply(this, arguments)
		},
		getKwargs: function(a) {
			return {
				tid: this.tid,
				oid: this.oid,
				comment: a.serialize()
			}
		}
	}), b.ReviewNewAnswersMain = m.extend({
		onLoad: function() {
			this.$("#@show").click(this.fnbind(function() {
				return this.toggleAll(), !1
			})), this.$("#@hide").click(this.fnbind(function() {
				return this.toggleAll(), !1
			})), this.$("#@popout").click(this.fnbind(function(a) {
				var b = window.open("/inbox/popout_arq", "thread_arq", "height=590,width=296,scrollbars=1");
				return !1
			}))
		},
		toggleAll: function() {
			this.$("#@instructions").toggle(), this.$("#@show").toggle(), this.$("#@hide").toggle()
		}
	}), b.ReviewNewTopicsMain = m.extend({
		onLoad: function() {
			this.$("#@show").click(this.fnbind(function() {
				return this.toggleAll(), !1
			})), this.$("#@hide").click(this.fnbind(function() {
				return this.toggleAll(), !1
			})), this.$("#@popout").click(this.fnbind(function(a) {
				var b = window.open("/inbox/popout_trq", "thread_trq", "height=590,width=296,scrollbars=1");
				return !1
			}))
		},
		toggleAll: function() {
			this.$("#@instructions").toggle(), this.$("#@show").toggle(), this.$("#@hide").toggle()
		}
	}), b.LiveTestDialog = m.extend({
		onLoad: function() {
			this.$("link").bind("click", function(a) {
				$(".content").dialog({
					title: "LiveDep Dialog",
					url: "dialog"
				})
			})
		}
	}), b.TestAC = m.extend({
		onLoad: function() {
			this.$("click_me").click(this.fnbind(function(a) {
				this.$("x").setContentFromAJAXComponent("ac_POST")
			}))
		}
	}), b.DateTimeComponent = m.extend({
		onLoad: function() {
			if(this.js_disp) {
				var a = new Date;
				a.setTime(this.epoch_us / 1e3), this.ge("@datespan").innerHTML = a.getHours() + ":" + a.getMinutes() + " on " + a.toDateString()
			}
		}
	}), b.LogoutAllSessionsButton = m.extend({
		onLoad: function() {
			this.$("#@logout_all_sessions_form").click(this.fnbind(function(a) {
				return this.serverCall("logout_all_sessions").kwargs({
					unh: this.unh,
					time: this.time,
					uid: this.uid
				}).liveMutate().send(), !1
			}))
		}
	}), b.SessionRow = m.extend({
		onLoad: function() {
			this.$("#@logout_session_form").click(this.fnbind(function(a) {
				return g.rpc("/login/logout_session_POST").kwargs({
					hash: this.hash,
					time: this.time,
					uid: this.uid
				}).liveMutate().send(), !1
			}))
		}
	}), b.PMsg = m.extend({
		onLoad: function() {
			this.$("#@x").click(this.fnbind(function() {
				return this.close(), !1
			}))
		},
		close: function() {
			$("#layout_header").css("margin-bottom", ""), this.$("#@container").hide(), $(".pmsg_container").hide()
		}
	}), b.UndoTopicRemoval = PMsg.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@undo").click(this.fnbind(function(a) {
				return this.serverCall("undo").kwargs({
					poid: this.poid
				}).liveMutate().success(this.fnbind(function(a) {
					clearTimeout(this.t), this.close()
				})).send(), !1
			}))
		}
	}), b.UndoTopicReplacement = PMsg.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@undo").click(this.fnbind(function(a) {
				return this.serverCall("undo").kwargs({
					add_oid: this.add_oid
				}).liveMutate().success(this.fnbind(function(a) {
					clearTimeout(this.t), this.close()
				})).send(), !1
			}))
		}
	});
	var q = b.PMsgContainer = m.extend({
		onLoad: function(a) {
			g.pmsgContainer = this, this.headerMargin = $("#layout_header").css("margin-bottom"), this.headerHeight = $("#layout_header").outerHeight(), this.installScrollHandlers(this.setPosition);
			var b = this.fnbind(function() {
				this.setPosition()
			}),
				c = setTimeout(b, 50)
		},
		onUnload: function() {
			this.uninstallScrollHandlers()
		},
		setPosition: function() {
			if(this.$("#@pmsg_container").html() && !this.mobile) {
				this.$("#@pmsg_container").show();
				var a = this.$("#@pmsg_container").outerHeight(),
					b = parseInt(this.$("#@pmsg_container").css("margin-bottom").replace("px", "")),
					c = $(window).scrollTop(),
					d = a + b;
				c > this.headerHeight ? (this.$("#@pmsg_container").addClass("header_bar_fixed"), $("#layout_header").css("margin-bottom", d + "px")) : (this.$("#@pmsg_container").removeClass("header_bar_fixed"), $("#layout_header").css("margin-bottom", "0px"))
			}
		},
		setContent: function(a, b) {
			return this.$("#@pmsg_container").is(":visible") ? this.$("#@pmsg_container").find(".contents").fadeOut(350, this.fnbind(function() {
				this.$("#@pmsg_container").setContent(a), this.$("#@pmsg_container").find(".contents").slideDown(350)
			})) : (this.$("#@pmsg_container").setContent(a), this.setPosition(), this.$("#@pmsg_container").hide(), this.$("#@pmsg_container").slideDown(350)), this
		}
	});
	b.SWFComponent = m.extend({
		onLoad: function() {
			require("swfobject").embedSWF(this.swf_url, this.id, this.width, this.height, this.version, this.express_install_swf_url, this.flashvars, this.params, this.attributes, this.fnbind(this.callback))
		},
		callback: function(a) {
			a.success ? typeof this.success == "function" && this.success(a) : $.serverLog("Flash embed failed for SWF", "ERROR", {
				swf_url: this.swf_url
			})
		},
		obj: function() {
			return document.getElementById(this.id)
		}
	}), b.MouseTracker = SWFComponent.extend({
		success: function(a) {
			g.MouseTracker = this, $("body").append($('<div id="__w2mousetracker_label" class="mouse_tracker_label"> </div>').hide()), this._componentInspectorOn = !1, $("#__w2mousetracker_component_inspector_toggle").click(this.fnbind(function(a) {
				return this.componentInspectorToggle(), !1
			})).show()
		},
		highlightCID: function(a, b) {
			var c = b.target,
				d = $("[__w2_cid=" + a + "]");
			d.addClass("mouse_tracker_highlight");
			var e = d.offset(),
				f = g._components[a],
				h = "<h3>" + a + "</h3>";
			f && (h += '<pre id="__w2mousetracker_component_data"> </pre>');
			var i = c.getAttribute("id");
			i && (i.substr(0, 5 + a.length) == "__wn_" + a && (i = "@" + i.substr(6 + a.length)), h += "<br /><span>id=" + i + "</span>");
			var j = b.pageY - 80;
			j < 0 && (j = b.pageY + 20);
			var k = $("#__w2mousetracker_label");
			k.html(h).css("top", j).css("left", b.pageX), k.show(), f && (k.get(0).childNodes.item(1).childNodes.item(0).textContent = JSON.stringify(f.__js_init))
		},
		unhighlightCID: function(a, b) {
			var c = b.target;
			$("[__w2_cid=" + a + "]").removeClass("mouse_tracker_highlight"), $("#__w2mousetracker_label").hide()
		},
		componentInspectorOn: function() {
			if(!this._componentInspectorOn) return $("body").bind("mouseover.component_inspector", this.fnbind(function(a) {
				var b = a.target.getAttribute("__w2_cid");
				b && this.highlightCID(b, a)
			})).bind("mouseout.component_inspector", this.fnbind(function(a) {
				var b = a.target.getAttribute("__w2_cid");
				b && this.unhighlightCID(b, a)
			})), this._componentInspectorOn = !0;
			console.warn("Component Inspector already active.  Not turning on.")
		},
		componentInspectorOff: function() {
			if( !! this._componentInspectorOn) return $("body").unbind("mouseover.component_inspector").unbind("mouseout.component_inspector"), this._componentInspectorOn = !1;
			console.warn("Component Inspector not active.  Not turning off.")
		},
		componentInspectorToggle: function() {
			return this._componentInspectorOn ? this.componentInspectorOff() : this.componentInspectorOn()
		},
		flashReady: function() {
			this.obj().init(require("settings").instance + "-tracker"), this.obj().startRecording(g.windowId), $("body").mouseover(this.fnbind(function(a) {
				return this.recordMouseover(a), !0
			})).click(this.fnbind(function(a) {
				return this.recordClick(a), !0
			}))
		},
		recordMouseover: function(a) {},
		recordClick: function(a) {
			console.log("Got a click" + a)
		},
		_getClicks: function() {}
	}), b.MarkNotifsAsSeenFromURL = m.extend({
		onVisible: function() {
			this.initState("first_call", !0) || this.serverCall("mark_as_seen").send()
		}
	}), b.GrowlNotification = m.extend({
		onUnload: function() {
			this.uninstallScrollHandlers()
		},
		onLoad: function(a) {
			this.leftPositionSet = !1;
			var b = this.fnbind(function() {
				this.setPosition()
			});
			this.installScrollHandlers(this.setPosition), setTimeout(b, 1);
			var c = this.age_us / 1e3 / 1e3;
			if(!a) {
				var d = this.extend_visibility ? 60 : 15;
				c < d && this.show()
			} else {
				var e = this.extend_visibility ? 60 : 1.5;
				c < e && this.showNow()
			}
			this.extend_visibility ? this.startFade(6e4) : (this.$("#@notif").mouseover(this.fnbind(function(a) {
				clearTimeout(this._timeout);
				var b = this.$("#@notif");
				b.is(":animated") && (b.stop(), b.css("opacity", 100)), this.marked_as_read_sent || (g.rpc("/notifications/mark_as_read_POST").kwargs({
					snid: this.snid
				}).send(), this.marked_as_read_sent = !0)
			})), this.$("#@notif").mouseout(this.fnbind(function(a) {
				this.startFade(1e3)
			})), this.startFade(4e3))
		},
		setPosition: function() {
			var a = $(window).scrollTop(),
				b = $("#layout_header").outerHeight(),
				c = $(window).width(),
				d = this.$("#@notif").outerWidth(),
				e = this.$("#@notif").offset();
			a > b ? this.$("#@notif").css("top", "0px") : this.$("#@notif").css("top", 40 - a + "px");
			var f = d + e.left;
			if(c < f) {
				var g = f - c,
					h = e.left - (g + 10);
				this.$("#@notif").css("left", h + "px"), this.$("#@notif .hover_menu_nub").css("backgroundPosition", g + 20 + "px top"), this.leftPositionSet = !0
			} else this.leftPositionSet || this.$("#@notif .hover_menu_nub").css("backgroundPosition", "10px top")
		},
		show: function() {
			this.$("#@notif").fadeIn(1e3)
		},
		showNow: function() {
			this.$("#@notif").show()
		},
		startFade: function(a) {
			clearTimeout(this._timeout), this._timeout = setTimeout(this.fnbind(function() {
				require("visibility").isVisible() ? this.$("#@notif").fadeOut(1250) : this.$("#@notif").hide()
			}), a)
		}
	}), b.EditPhotoChoice = m.extend({
		onLoad: function() {
			this.$(".@img_choice").click(this.fnbind(function(a) {
				var b = $(a.target).attr("choice");
				return this.serverCall("choose_photo").kwargs({
					choice: b
				}).success(this.fnbind(function() {
					this.next_url ? h.navigateTo(this.next_url) : g.Dialog.dialogFor(this).close_()
				})).send(), this.$("#@choices").text("Setting photo..."), !1
			}))
		}
	}), b.OnOffControlPanelSetting = m.extend({
		onLoad: function() {
			this.$("#@on").click(this.fnbind(function(a) {
				this.serverCall("set_value").kwargs({
					new_val: !0
				}).liveMutate().send()
			})), this.$("#@off").click(this.fnbind(function(a) {
				this.serverCall("set_value").kwargs({
					new_val: !1
				}).liveMutate().send()
			})), this.$("#@default").click(this.fnbind(function(a) {
				return this.serverCall("set_to_default").liveMutate().success(this.fnbind(function(a) {
					this.$("#@on").attr("checked", a), this.$("#@off").attr("checked", !a)
				})).send(), !1
			}))
		}
	}), b.HomeLoggedOutInvite = m.extend({
		onLoad: function(a) {
			this.installMouseHandlers();
			var b = this.fnbind(function() {
				this.$("#@error_msg").empty()
			});
			this.$("#@email").keydown(this.fnbind(function(a) {
				b();
				var c = a.keyCode ? a.keyCode : a.which;
				c == 13 && this.$("#@email_submit").click()
			})).blur(b)
		},
		clickHandlers: {
			invite_request_button: function() {
				this.$("#@invite_request_button").hide(), this.$("#@facepile").css("visibility", "hidden"), this.$("#@mission").css("visibility", "hidden"), this.$("#@invite_form").show(), this.$("#@email").focus(), this.serverCall("record_signup_step").kwargs({
					signup_action: "hp_invite_request_start"
				}).send()
			},
			email_submit: function() {
				this.serverCall("request_email").kwargs({
					email: this.$("#@email").val()
				}).success(this.fnbind(function(a) {
					a && (a.error_message ? this.$("#@error_msg").text(a.error_message) : (this.$("#@error_msg").hide(), this.$("#@invite_form_fields").hide(), this.$("#@success_msg").show()))
				})).send()
			}
		}
	}), b.TitleNotificationsCount = m.extend({
		onLoad: function(a) {
			a || this.setTitle()
		},
		setTitle: function() {
			var a = h.getTitle(),
				b = a,
				c, d = "",
				e;
			if(this.notif_count || this.inbox_count) d += "(", this.notif_count && (d += this.notif_count), this.inbox_count && (d += "/" + this.inbox_count), d += ") ";
			b = a.replace(/^\(((\d+)?\/)?\d+\) |/, d), a != b && h.setTitle(b)
		}
	}), b.MobileFooter = m.extend({
		onLoad: function() {
			this.$("#@full_site").click(this.fnbind(function(a) {
				return j.cookie("m", "0"), location.reload(!0), !1
			}))
		}
	}), b.MobileDebugLinkFullSite = m.extend({
		onLoad: function() {
			var a = j.cookie;
			this.$("#@link").click(this.fnbind(function(b) {
				return console.log("full"), a("iphone_app", "", {
					expires: -1
				}), a("iphone_app_version", "", {
					expires: -1
				}), a("android_app", "", {
					expires: -1
				}), a("android_app_version", "", {
					expires: -1
				}), a("m", "0"), window.top.location.reload(!0), !1
			}))
		}
	}), b.MobileDebugLinkMobileSite = m.extend({
		onLoad: function() {
			var a = j.cookie;
			this.$("#@link").click(this.fnbind(function(b) {
				return a("iphone_app", "", {
					expires: -1
				}), a("iphone_app_version", "", {
					expires: -1
				}), a("android_app", "", {
					expires: -1
				}), a("android_app_version", "", {
					expires: -1
				}), a("m", "1"), window.top.location.reload(!0), !1
			}))
		}
	}), b.MobileDebugLinkIphone = m.extend({
		onLoad: function() {
			var a = j.cookie;
			this.$("#@link").click(this.fnbind(function(b) {
				return a("iphone_app", "1"), a("iphone_app_version", "1.60:23"), a("android_app", "", {
					expires: -1
				}), a("android_app_version", "", {
					expires: -1
				}), a("m", "1"), window.top.location.reload(!0), !1
			}))
		}
	}), b.MobileDebugLinkAndroid = m.extend({
		onLoad: function() {
			var a = j.cookie;
			this.$("#@link").click(this.fnbind(function(b) {
				return a("iphone_app", "", {
					expires: -1
				}), a("iphone_app_version", "", {
					expires: -1
				}), a("android_app", "1"), a("android_app_version", "0.0.48:48.0"), a("m", "1"), window.top.location.reload(!0), !1
			}))
		}
	}), b.MobileDebugOrientationSwitcher = m.extend({
		onLoad: function() {
			this.$("#@portrait").click(this.fnbind(function(a) {
				return window.top.setDebugOrientation("portrait"), this.$("#@portrait").addClass("selected"), this.$("#@landscape").removeClass("selected"), !1
			})), this.$("#@landscape").click(this.fnbind(function(a) {
				return window.top.setDebugOrientation("landscape"), this.$("#@landscape").addClass("selected"), this.$("#@portrait").removeClass("selected"), !1
			}))
		}
	}), b.UseMobileSite = m.extend({
		onLoad: function() {
			this.$("#@mobile_site").click(this.fnbind(function(a) {
				return j.cookie("m", "1"), location.reload(!0), !1
			}))
		}
	}), b.AnonUser = m.extend({
		onLoad: function() {
			this.$("#@reveal").click(this.fnbind(function() {
				return $(".content").dialog({
					title: "Reveal Anon User Identity",
					contents: "You may only reveal identities to properly administer the site and the person you reveal will be notified with your reason.",
					comment_form: "Explain your reason for revealing this name",
					buttons: {
						"Reveal Identity": this.fnbind(function() {
							return this.serverCall("anonreveal_content").args(this.eauid).contentFor(this.$("#@reveal"), {
								parentCID: this.cid
							}).success(this.fnbind(function(a) {
								this.$("#@reveal").unbind("click")
							})).send(), !1
						}),
						Cancel: null
					}
				}), !1
			}))
		}
	}), b.CCTest1 = m.extend({
		onLoad: function() {
			this.$("#@button").click(this.fnbind(function() {
				return this.serverCall("get_content").contentFor(this.$("#@placeholder"), {
					parentCID: this.cid
				}).send(), !1
			}))
		}
	}), b.InfoToggle = m.extend({
		onLoad: function() {
			this._state = !1, this.setupKeyboardShortcut()
		},
		toggle: function() {
			this._state ? (this._state = !1, $(".invisible_info").hide()) : (this._state = !0, $(".invisible_info").show().effect("highlight", {}, 1e3))
		},
		setupKeyboardShortcut: function() {
			require("keystrokes").on([81, 73, 68, 81, 73, 68], this.fnbind(this.toggle))
		}
	}), b.TwitterConnectCallbackPage = m.extend({
		onLoad: function() {
			j.cookie("twitter_oauth_access_key", this.access_token.key, {
				path: "/twitter/"
			}), window.opener ? (window.opener.$(window.opener.document).trigger("twitter_oauth_approved", {
				accessToken: this.access_token,
				userData: this.user_data
			}), window.close()) : this.$("#@me").text("access token: " + JSON.stringify(this.access_token))
		}
	}), b.TestUnload = m.extend({
		onLoad: function(a) {
			console.log("onLoad called for cid=" + this.cid + ", isPageLoad=" + a)
		},
		onUnload: function() {
			console.log("onUnload called for cid=" + this.cid)
		}
	}), b.OauthCallbackPage = m.extend({
		onLoad: function() {
			window.opener ? (window.opener.$(window.opener.document).trigger("oauth_approved", {
				service: this.service,
				accessToken: this.access_token
			}), window.close()) : this.$("#@me").text("access token: " + JSON.stringify(this.access_token))
		}
	}), b.Announcement = m.extend({
		onLoad: function() {
			this.$("#@close").click(this.fnbind(function() {
				return this.closeAnnouncement("x"), !1
			})), this.serverCall("track_announcement_view").send()
		},
		closeAnnouncement: function(a) {
			this.serverCall("close_announcement").kwargs({
				closing_action: a
			}).liveMutate().send()
		}
	}), b.OpengraphLaunchAnnouncement = b.Announcement.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.child("fb_connect").bind("fb_connected", this.fnbind(this.closeAnnouncement))
		}
	}), b.OnlineNowAnnouncement = b.Announcement.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@blog_post_link, #@blog_post_image_link").click(this.fnbind(function() {
				this.closeAnnouncement("x")
			}))
		}
	}), b.NUXQuestionPromptAnnouncementClose = m.extend({
		onLoad: function() {
			this.$("#@close").click(this.fnbind(function() {
				return this.parent().closeAnnouncement(), !1
			}))
		}
	}), b.ServerCallTest = m.extend({
		onLoad: function() {
			this.$("#@click_me").click(this.fnbind(function() {
				return this.serverCall("click_me").success(this.fnbind(function(a) {
					a1ert(a)
				})).send(), console.log("clicked"), !1
			}))
		}
	}), b.TwitterShareNew = m.extend({
		regexUrl: /(https?:\/\/[a-zA-Z0-9](?:[-a-zA-Z0-9]*\.)+[a-zA-Z]{2,}(?:\/[^\/\s]+)*\/?)(?:\s|$)/gi,
		onLoad: function() {
			$(document).bind("twitter_oauth_approved." + this.cid, this.fnbind(function(a, b) {
				this.$("#@tw_connect_button_wrapper").hide(), this.$("#@tw_form").show()
			}));
			var a = this.fnbind(function() {
				var a = 140 - this.tweetLength(this.$("#@tweet_input").val());
				this.$("#@counter").text(a), a < 0 ? this.$("#@counter").addClass("diffdelete") : this.$("#@counter").removeClass("diffdelete")
			});
			this.$("#@tweet_input").bind("keyup", a).bind("focus", a).bind("paste", a)
		},
		tweetLength: function(a) {
			if(!a) return 0;
			var b = a.length,
				c = [];
			return a.replace(this.regexUrl, function(a, b) {
				c.push(b)
			}), b -= c.join("").length, $.each(c, function(a, c) {
				b += c.match(/https:/) ? 21 : 20
			}), b
		}
	}), b.UploadFileForm = m.extend({
		onLoad: function(a) {
			return $(document).bind("quora_file_uploaded", function(b, c) {
				var d = a[c.rand];
				d && (delete a[c.rand], d.onUpload(c))
			}), function() {
				a[this.rand] = this, this.$("#@file").attr("onChange", "$(this).parents('form').submit().find('.spinner').show();")
			}
		}({}),
		onUpload: function(a) {
			typeof this._upload == "function" && this._upload(a)
		},
		success: function(a) {
			return this._upload = a, this
		}
	}), b.DesktopClientLoginIFrameInner = m.extend({
		onLoad: function() {
			var a = window.parent.parent;
			a && a.DesktopClientLoginIFrameInner.registerClient(this.client)
		}
	}), DesktopClientLoginIFrameInner.registerClient = function(a) {
		g.rpc("/ajax/client_login_POST").kwargs({
			c: a
		}).send()
	}, b.DesktopAskToAnswerStatus = m.extend({
		onLoad: function() {
			this.$("#@next").click(this.fnbind(function() {
				this.serverCall("next").send()
			})), this.$("#@start").click(this.fnbind(function() {
				this.serverCall("start").send()
			}))
		}
	}), b.DesktopAskToAnswerLink = m.extend({
		onLoad: function(a) {
			this.$("#@link").click(function(a) {
				$("#priority_ask_status").toggleClass("hidden")
			})
		}
	}), b.DesktopAskOnlineUserButton = m.extend({
		onLoad: function(a) {
			this.$("#@ask").click(this.fnbind(function() {
				return this.serverCall("ask").kwargs({
					qid: this.qid,
					to_uid: this.to_uid
				}).liveMutate().send(), !1
			}))
		},
		registerDequeue: function() {
			this.nextEvent >= 0 && setTimeout(this.nextEvent, this.fnbind(this.dequeueUser))
		},
		dequeueUser: function() {
			return this.serverCall("reject").kwargs({
				qid: this.qid,
				to_uid: this.to_uid
			}).liveMutate().send(), !1
		}
	}), b.DesktopStopAskingOnlineUserButton = m.extend({
		onLoad: function(a) {
			this.$("#@undo").click(this.fnbind(function() {
				return this.serverCall("undo").kwargs({
					qid: this.qid,
					to_uid: this.to_uid
				}).liveMutate().send(), !1
			}))
		}
	}), b.ClientInstaller = {
		setStatus: function(a) {
			$("#client_installer_status").text("Status: " + a)
		},
		fatal: function(a) {
			$("#client_installer_error").text("Error: " + a)
		},
		jloadProgress: function(a, b) {
			$("#client_installer_status").text("Downloading: Wrote " + a + " bytes out of " + b)
		}
	}, b.PhotoUploadExample = m.extend({
		onLoad: function() {
			this.child("upload_iframe").success(this.fnbind(function() {
				a1ert("successful upload")
			}))
		}
	}), b.CompactThread = m.extend({
		onLoad: function() {
			this.scrollUp()
		},
		scrollUp: function() {
			this.$("#@messages").scrollTop(99999);
			var a = setTimeout(this.fnbind(function() {
				this.$("#@messages").scrollTop(99999)
			}), 50)
		}
	}), b.CompactThreadMessage = m.extend({
		onLoad: function() {
			this.parent().parent().scrollUp()
		}
	}), b.PopoutListLink = m.extend({
		onLoad: function() {
			this.$("#@popout").click(this.fnbind(function() {
				var a = window.open("/home/popout_list", "popoutlist", "height=590,width=300,scrollbars=1");
				return !1
			}))
		}
	}), b.PopoutThread = m.extend({
		onLoad: function() {
			this.$("#@popout").click(this.fnbind(function(a) {
				var b = window.open("/inbox/popout_thread/" + this.thread_id, "thread_" + this.thread_id, "height=590,width=296,scrollbars=1");
				return !1
			}))
		}
	}), b.FullRQZonePresence = m.extend({
		onLoad: function() {
			this.tempTop = null, $(window).scroll(this.fnbind(function() {
				this.setPosition()
			})), setTimeout(this.fnbind(function() {
				this.setPosition()
			}), 50), this.$("#@popout").click(this.fnbind(function(a) {
				var b = "thread_" + this.popout_id ? this.popout_id : 0,
					c = window.open(this.popout_url, b, "height=590,width=296,scrollbars=1");
				return !1
			}))
		},
		getOffsetTop: function() {
			if(this.tempTop) return this.tempTop;
			var a = this.$("#@chat").offset();
			if(a) return a.top
		},
		setPosition: function() {
			var a = $(window).scrollTop(),
				b = this.$("#@chat").height(),
				c = $(document).height(),
				d = c - (this.getOffsetTop() + b);
			if(d < 220) {
				this.$("#@chat").removeClass("component_fixed");
				return
			}
			a > this.getOffsetTop() ? (this.tempTop = this.getOffsetTop(), this.$("#@chat").addClass("component_fixed")) : (this.tempTop = null, this.$("#@chat").removeClass("component_fixed"))
		}
	}), b.AnswerEventView = k.SwitchableComponent.extend({
		switchAction: function() {
			this.lookup("comment_switch").viewComments()
		}
	}), b.ViewMoreBuddiesLink = m.extend({
		onLoad: function() {
			this.$("#@view").click(this.fnbind(function() {
				return this.parent().$("#@all").show(), this.parent().$("#@preview").hide(), this.$("#@view_more").hide(), !1
			}))
		}
	}), b.CreateReviewQueueLink = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this._dialog || (this._dialog = this.dialog().title("Create Review Queue").cancel(null, "Close").ok(this.fnbind(function() {
					var a = arguments[0].dialogComponent,
						b = a.getName();
					if(!b) return !1;
					this.serverCall("create_queue").kwargs({
						name: b
					}).success(this.fnbind(function(a) {
						console.log("Success! Data: " + a), h.navigateTo("/review/queue/" + a)
					})).liveMutate().send()
				}), "Create").close(this.fnbind(function() {
					this._dialog = null
				})).load("set_dialog_contents")), !1
			}))
		}
	}), b.CreateReviewQueueNameDialog = m.extend({
		onLoad: function() {
			this.$("#@name").focus()
		},
		getName: function() {
			return this.$("#@name").val()
		}
	}), b.FollowReviewQueueLink = m.extend({
		onLoad: function() {
			this.$("#@follow").click(this.fnbind(function() {
				return this.serverCall("follow").kwargs({
					queue_id: this.queue_id
				}).liveMutate().send(), !1
			})), this.$("#@unfollow").click(this.fnbind(function() {
				return this.unfollow(), !1
			}))
		},
		unfollow: function() {
			this.serverCall("unfollow").kwargs({
				queue_id: this.queue_id
			}).liveMutate().send()
		}
	}), b.ClaimAbandonedQueue = m.extend({
		onLoad: function() {
			this.$("#@claim").click(this.fnbind(function() {
				return this.serverCall("claim").kwargs({
					queue_id: this.queue_id
				}).liveMutate().send(), !1
			}))
		}
	}), b.DeleteReviewQueueLink = m.extend({
		onLoad: function() {
			this.$("#@delete").click(this.fnbind(function() {
				return $(".content").dialog({
					title: "Delete Review Queue",
					contents: "Are you sure you want to delete this review queue?",
					buttons: {
						"Delete Queue": this.fnbind(function() {
							this.serverCall("delete").kwargs({
								queue_id: this.queue_id
							}).liveMutate().send()
						}),
						Cancel: null
					}
				}), !1
			})), this.$("#@undelete").click(this.fnbind(function() {
				return this.serverCall("undelete").kwargs({
					queue_id: this.queue_id
				}).liveMutate().send(), !1
			}))
		}
	}), b.AddOperationTarget = m.extend({
		onLoad: function() {
			this.$("#@add").click(this.fnbind(function() {
				return this.$("#@label").addClass("hidden"), this.$("#@select").removeClass("hidden"), !1
			})), this.$("#@select").change(this.fnbind(function() {
				var a = this.$("#@select option:selected").val();
				return this.serverCall("select").kwargs({
					queue_id: this.queue_id,
					types: a
				}).liveMutate().success(this.fnbind(function() {
					this.$("#@default").attr("selected", "selected")
				})).send(), !1
			}))
		}
	}), b.RemoveOperationTargetLink = m.extend({
		onLoad: function() {
			this.$("#@remove").click(this.fnbind(function() {
				return this.serverCall("remove").kwargs({
					op_type: this.op_type,
					queue_id: this.queue_id
				}).liveMutate().send(), !1
			}))
		}
	}), b.FlagItemLink = m.extend({
		onLoad: function() {
			this.$("#@flag").click(this.fnbind(function() {
				return this.serverCall("flag").kwargs({
					oid: this.oid,
					queue_id: this.queue_id
				}).liveMutate().send(), !1
			}))
		}
	}), b.AddReviewQueueOwner = m.extend({
		onLoad: function() {
			this.$("#@add").click(this.fnbind(function() {
				return this.$("#@label").hide(), this.$("#@selector").show(), this.lookup("selector").focus(), !1
			}))
		},
		setTo: function(a) {
			a && a != "" && this.serverCall("add_owner").kwargs({
				queue_id: this.queue_id,
				new_uid: a
			}).success(this.fnbind(function(a) {
				this.clear(), this.lookup("selector").focus()
			})).liveMutate().send()
		},
		clear: function() {
			this.lookup("selector").inputBlur()
		}
	}), b.ManageEvent = m.extend({
		setTo: function(a) {
			a && a != "" && this.serverCall("invite_user").kwargs({
				invite_uid: a,
				party: this.party
			}).success(this.fnbind(function() {
				this.clear(), this.lookup("selector").focus()
			})).liveMutate().send()
		},
		clear: function() {
			this.lookup("selector").inputBlur()
		}
	}), b.AddTopicToSetButton = m.extend({
		onLoad: function() {
			this.$("#@add").click(this.fnbind(function() {
				return this.$("#@item").css("height", this.$("#@item").height()), this.$("#@item").addClass("light"), this.$("#@add").hide(), this.serverCall("add_topic_to_set").kwargs({
					set_tid: this.set_tid,
					add_tid: this.add_tid
				}).liveMutate().send(), !1
			}))
		}
	}), b.NeedAnswersQuestionListItem = m.extend({
		onLoad: function() {
			this.$("#@item").hover(this.fnbind(function() {
				this.$("#@remove").show()
			}), this.fnbind(function() {
				this.$("#@remove").hide()
			}))
		}
	}), b.HideNeedAnswers = m.extend({
		onLoad: function() {
			this.$("#@remove").tooltip({
				contents: "Do Not Suggest"
			}), this.$("#@remove").click(this.fnbind(function() {
				return this.serverCall("remove").kwargs({
					qid: this.qid
				}).send(), this.$("#@remove").parents(".feed_item").hide(), !1
			}))
		}
	}), b.ConnectAccountHomePage = m.extend({
		onLoad: function() {
			this.$("#@item").hover(this.fnbind(function() {
				this.$("#@remove").show()
			}), this.fnbind(function() {
				this.$("#@remove").hide()
			}))
		}
	}), b.HideConnectSection = m.extend({
		onLoad: function() {
			this.$("#@remove").tooltip({
				contents: "Hide"
			}), this.$("#@remove").click(this.fnbind(function() {
				return this.serverCall("remove").send(), this.$("#@remove").parents(".section").hide(), !1
			}))
		}
	}), b.RemoveInboxMessagesLink = m.extend({
		onLoad: function() {
			this.$("#@delete").click(this.fnbind(function() {
				return this.dialog().title("Delete Inbox Messages").cancel(null, "Cancel").ok(this.fnbind(function() {
					this.serverCall("delete_messages").liveMutate().send()
				}), "Delete Messages").html("Are you sure you want to delete all inbox messages sent by this user?"), !1
			}))
		}
	}), b.TopicFollowersPreview = m.extend({
		onLoad: function() {
			this.$("#@view_add").click(this.fnbind(function() {
				return this.$("#@view_add").hide(), this.$("#@instructions").hide(), this.$("#@selector").show(), !1
			})), this.$("%view_invite").click(this.fnbind(function() {
				return this.toggle(), this.lookup("selector").lookup("selector").focus(), !1
			})), this.$("#@view_followers").click(this.fnbind(function() {
				return this.toggle(), !1
			}))
		},
		toggle: function() {
			this.$("#@invite").toggle(), this.$("#@followers").toggle()
		}
	}), b.TopicFollowerSelector = m.extend({
		onLoad: function() {
			this.focus()
		},
		focus: function() {
			this.lookup("selector").focus()
		},
		clear: function() {
			this.lookup("selector").reset()
		},
		setTo: function(a) {
			a && a != "" && this.serverCall("invite").kwargs({
				tid: this.tid,
				target_uid: a
			}).success(this.fnbind(function() {
				this.focus()
			})).liveMutate().send()
		}
	}), b.HideTopicSetWelcomeLink = m.extend({
		onLoad: function() {
			this.$("#@close").click(this.fnbind(function() {
				return this.serverCall("close").kwargs({
					tid: this.tid
				}).liveMutate().send(), !1
			}))
		}
	}), b.HideTopicSetInvitePassButton = m.extend({
		onLoad: function() {
			this.$("#@pass").click(this.fnbind(function() {
				return this.serverCall("pass_invite").kwargs({
					tid: this.tid
				}).liveMutate().send(), !1
			}))
		}
	}), b.RemoveInviteToTopicSet = m.extend({
		onLoad: function() {
			this.$("#@remove").click(this.fnbind(function() {
				return this.serverCall("uninvite").kwargs({
					tid: this.tid,
					target_uid: this.uid
				}).liveMutate().send(), !1
			}))
		}
	}), b.TopicVisibilityBar = m.extend({
		onLoad: function() {
			this.$("#@hide").click(this.fnbind(function() {
				return this.$("#@bar").hide(), $("#topic_visibility_context").remove(), $("#layout_header").removeClass("topic_visibility_context"), this.lookup("navigator").$("#@input").css("width", "360px"), !1
			}))
		}
	}), b.TopicSetAdmins = m.extend({
		onLoad: function() {
			this.$("#@show_add").click(this.fnbind(function() {
				return this.toggle(), this.cQuery(":admin.selector").focus(), !1
			})), this.$("#@show_list").click(this.fnbind(function() {
				return this.toggle(), !1
			}))
		},
		toggle: function() {
			this.$("#@add_label").toggle(), this.$("#@list_label").toggle(), this.$("#@list").toggle(), this.$("#@pick_admin").toggle()
		}
	}), b.TalkWiki = m.extend({
		onLoad: function() {
			this.$("#@view_log").click(this.fnbind(function() {
				return this.$("#@log").toggleClass("hidden"), this.$("#@view_log").hide(), !1
			}))
		}
	}), b.InstructionsWikiInlineEditor = l.extend({
		_get_kwargs: function() {
			return {
				id: this.id,
				input: this.get_value(),
				notif: this.$("#@notif").attr("checked") ? 1 : 0
			}
		}
	}), b.MarkAsSeenButton = m.extend({
		onLoad: function() {
			this.$("#@mark_as_seen").click(this.fnbind(function() {
				return this.serverCall("mark_as_seen").kwargs({
					queue_id: this.queue_id,
					oid: this.oid
				}).liveMutate().send(), !1
			})), this.$("#@mark_as_unseen").click(this.fnbind(function() {
				return this.serverCall("mark_as_unseen").kwargs({
					queue_id: this.queue_id,
					oid: this.oid
				}).liveMutate().send(), !1
			}))
		}
	}), b.MarkAllAsSeenButton = m.extend({
		onLoad: function() {
			this.$("#@mark_all_as_seen").click(this.fnbind(function() {
				return this.serverCall("mark_all_as_seen").kwargs({
					queue_id: this.queue_id
				}).liveMutate().send(), !1
			}))
		}
	}), b.Fall2010PartyTopicAddButton = TopicSelectorAdd2.extend({
		select: function() {
			var a = this.parent();
			return a.$("#@selector_wrapper").html(a.qValue), a.selectedTopicName = a.qValue, !0
		}
	}), b.PartyRSVP = m.extend({
		onLoad: function() {
			this.$("#@rsvp").click(this.fnbind(function() {
				var a = this.$("#@yes:checked,#@no:checked, #@yes_with_guest:checked").val();
				return a != "No" && a != "Yes" && a != "PlusGuest" ? (a1ert("Please choose Yes or No to RSVP"), !1) : (this.serverCall("rsvp").kwargs({
					yes_or_no: a
				}).liveMutate().send(), !1)
			}))
		}
	}), b.DashBigBoard = m.extend({
		onLoad: function() {
			setInterval(this.fnbind(this.refreshTopSection), 6e4), setInterval(this.fnbind(this.refreshLeftSection), 12e5)
		},
		refreshTopSection: function() {
			this.$("#@top_section").fadeTo("fast", .1), this.serverCall("new_top_section").contentFor(this.$("#@top_section"), {
				parentCID: this.cid
			}).success(this.fnbind(function() {
				this.$("#@top_section").fadeTo("fast", 1)
			})).send()
		},
		refreshLeftSection: function() {
			this.$("#@left_section").fadeTo("fast", .1), this.serverCall("new_left_section").contentFor(this.$("#@left_section"), {
				parentCID: this.cid
			}).success(this.fnbind(function() {
				this.$("#@left_section").fadeTo("fast", 1)
			})).send()
		},
		refreshPlayerSectionIfReady: function() {
			var a = $("#myytplayer")[0];
			(!a || a.getPlayerState() != 1) && this.refreshPlayerSection()
		},
		refreshPlayerSection: function() {
			this.$("#@player_section").fadeTo("fast", .1), this.serverCall("new_player_section").contentFor(this.$("#@player_section"), {
				parentCID: this.cid
			}).success(this.fnbind(function() {
				this.$("#@player_section").fadeTo("fast", 1)
			})).send()
		}
	}), b.AdminRemoveUserPhoto = m.extend({
		onLoad: function(a) {
			this.$("#@remove_photo_link").click(this.fnbind(function() {
				return this.dialog().title("Remove Profile Photo").cancel().ok(this.fnbind(function(a) {
					var b = a.dialogComponent.child("editor").serialize();
					this.serverCall("remove_photo").kwargs({
						ce: b
					}).liveMutate().send()
				}), "Remove Photo").load("remove_photo_dialog"), $("#admin_remove_profile_photo_comment").focus(), !1
			}))
		}
	}), b.AttachDisclaimer = m.extend({
		onLoad: function(a) {
			this.$("#@add_disclaimer_link").click(this.fnbind(function() {
				return this.attachDisclaimer(), !1
			})), this.$("#@remove_button").tooltip({
				contents: "Remove Disclaimer From Answer"
			}), this.$("#@remove_button").click(this.fnbind(function() {
				return this.removeAttachedDisclaimer(), !1
			}))
		},
		attachDisclaimer: function() {
			this.user_has_set_disclaimer ? (this.$("#@add_disclaimer_link, #@disclaimer_attached").toggleClass("hidden"), this.lookup("content_editor") && (this.lookup("content_editor").disclaimer_update = "attach")) : this.showDisclaimerDialog()
		},
		removeAttachedDisclaimer: function() {
			this.$("#@add_disclaimer_link, #@disclaimer_attached").toggleClass("hidden"), this.lookup("content_editor") && (this.lookup("content_editor").disclaimer_update = "remove")
		},
		showDisclaimerDialog: function() {
			this._dialog = this.dialog().title("Create Your Disclaimer").load("set_disclaimer_dialog")
		}
	}), b.SetDisclaimerDialog = m.extend({
		onLoad: function(a) {
			this.$("#@cancel").click(this.fnbind(function() {
				return g.Dialog.dialogFor(this).close_(), !1
			}))
		},
		showEditor: function() {
			this.$("#@choose_profession_area").hide(), this.$("#@edit_disclaimer_area").show(), this.lookup("editor").focusInput(), this.$("#@cancel").hide()
		},
		showError: function() {
			this.$("#@choose_profession_area").hide(), this.$("#@wrong_profession_error").show()
		}
	}), b.DisclaimerIndicateProfession = m.extend({
		onLoad: function() {
			this.$("%@profession").click(this.fnbind(function() {
				return this.parent().showEditor(), !1
			})), this.$("%@other").click(this.fnbind(function() {
				return this.parent().showError(), !1
			}))
		}
	}), b.DisclaimerAnnouncementButton = m.extend({
		onLoad: function() {
			this.$("#@learn").click(this.fnbind(function() {
				this.serverCall("close_announcement").liveMutate().success(this.fnbind(function(a) {
					h.navigateTo(this.url)
				})).send()
			}))
		}
	}), b.AnswerTagLink = m.extend({
		onLoad: function() {
			this.enabled ? this.$("#@link").click(this.fnbind(function(a) {
				return this.$("#@menu").menu(this.$("#@link"), {
					position_relative: !0
				}), !1
			})) : this.$("#@link").click(this.fnbind(function(a) {
				return this.lookup("tag_section").setTag(), !1
			}))
		}
	}), b.AnswerTagMenuListItem = m.extend({
		onLoad: function() {
			this.$("#@select_tag").click(this.fnbind(function() {
				return this.lookup("tag_section").setTag(this.tag), !1
			}))
		}
	}), b.AddTag = m.extend({
		onLoad: function() {
			this.$("#@cancel").click(this.fnbind(function() {
				return this.$("#@view_tag").hide(), !1
			}))
		},
		setTag: function(a) {
			this.$("#@view_tag").show(), this.$("#@include_details").hide();
			if(a) {
				this.tag = a;
				var b = this.tag_info[a];
				this.$("#@tag_summary_text").text(b.summary), this.lookup("editor").setHtml(b.description_html, b.description_data), this.lookup("editor").focus()
			}
		}
	}), b.AddTagButton = m.extend({
		onLoad: function() {
			this.lock = !1, this.$("#@add_tag").click(this.fnbind(function() {
				return this.addTag(), !1
			}))
		},
		addTag: function() {
			var a = this.lookup("editor"),
				b = this.lookup("add_tag_section").tag;
			a.isEmpty() ? this.lookup("add_tag_section").$("#@include_details").show() : this.serverCall("add_tag").kwargs({
				comment: a.serialize(),
				tag: b,
				lock: this.lock
			}).liveMutate().success(this.fnbind(function() {
				this.parent() && (this.parent().$("#@view_tag").hide(), this.parent().$("#@include_details").hide())
			})).send()
		}
	}), b.AdminAddTagButton = AddTagButton.extend({
		onLoad: function() {
			this.lock = !1, this.$("#@add_tag_link").click(this.fnbind(function(a) {
				return this.$("#@add_tag_menu").menu(this.$("#@add_tag_link"), {
					position_relative: !0
				}), !1
			}))
		}
	}), b.AdminAddTagMenu = m.extend({
		onLoad: function() {
			this.$("#@collapse").click(this.fnbind(function() {
				return this.parent().addTag(), !1
			})), this.$("#@collapse_and_lock").click(this.fnbind(function() {
				return this.parent().lock = !0, this.parent().addTag(), !1
			}))
		}
	}), b.AnswerTag = m.extend({
		onLoad: function() {
			this.$("#@show_comment").click(this.fnbind(function() {
				return this.$("#@comment").show(), this.$("#@show_comment").hide(), !1
			})), this.$("#@remove").tooltip({
				contents: "Remove"
			}), this.$("#@remove").click(this.fnbind(function() {
				return this._dialog = this.dialog().title("Remove Flag").cancel().ok(this.fnbind(function() {
					var a = arguments[0].dialogComponent,
						b = a.lookup("editor").serialize();
					this.serverCall("remove_tag").kwargs({
						comment: b
					}).liveMutate().send()
				}), "Remove").load("remove_tag_dialog"), !1
			}))
		}
	}), b.AnswerTagsMenuAdminOptions = m.extend({
		onLoad: function() {
			this.$("#@collapse").click(this.fnbind(function() {
				return this.serverCall("collapse").kwargs({
					lock: !1
				}).liveMutate().send(), !1
			})), this.$("#@collapse_and_lock").click(this.fnbind(function() {
				return this.serverCall("collapse").kwargs({
					lock: !0
				}).liveMutate().send(), !1
			}))
		}
	}), b.ShuffleBarButton = m.extend({
		setUrl: function(a) {
			this.$("#@next").attr("href", a)
		},
		onLoad: function() {
			this.locked = !1, this.$("#@next").click(this.fnbind(function(a) {
				return this.gotoNext(), !1
			})), $(document).keydown(this.fnbind(function(a) {
				return this.docKeydown(a)
			}))
		},
		gotoNext: function() {
			this.serverCall("log_shuffle_click").send(), h.navigateTo(this.$("#@next").attr("href"))
		},
		isLocked: function() {
			var a = !1;
			return $("input, textarea, .qtext_editor_content").each(function() {
				$(this).attr("focused") == "true" && (a = !0)
			}), this.locked || a
		},
		docKeydown: function(a) {
			var b = a || window.event;
			if(this.isLocked()) return !0;
			if(b.keyCode == 39) return this.gotoNext(), !1;
			if(b.keyCode == 37) return window.history.back(), !1
		}
	}), b.ShuffleBarOptionMenu = m.extend({
		onLoad: function() {
			this.$("#@options").click(this.fnbind(function(a) {
				return this.$("#@options_menu").menu(this.$("#@options")), !1
			}));
			var a = {
				"#@only_open_questions": "/shuffle/open",
				"#@only_answers": "/shuffle/answers",
				"#@all": "/shuffle"
			};
			$.each(a, this.fnbind(function(a, b) {
				var c = function() {
						this.$("#@all").removeClass("selected"), this.$("#@only_open_questions").removeClass("selected"), this.$("#@only_answers").removeClass("selected")
					};
				this.$(a).click(this.fnbind(function(d) {
					return this.$(a).hasClass("selected") || (c.call(this), this.lookup("shuffle_bar_button").setUrl(b), this.$(a).addClass("selected")), !1
				}))
			}))
		}
	}), b.HighProfileUsersFeedPage = m.extend({
		onLoad: function() {
			var a = 90;
			setInterval(this.fnbind(function() {
				this.checkForUsers()
			}), a * 1e3 * 60)
		},
		checkForUsers: function() {
			var a = 5,
				b = [],
				c = this;
			this.$("#@feed .feed_item_answer_user a.user, #@feed .feed_item_activity a.user, #@feed .meta_item_text a.user").each(function(d) {
				var e = $(this).text();
				b[e] == null ? b[e] = 1 : b[e] = b[e] + 1, b[e] >= a && (c.$("#@attention").show(), c.$("#@attention_name").text(e), setTimeout(c.fnbind(function() {
					this.$("#@attention").hide()
				}), 6e4))
			})
		}
	}), b.Name = HoverMenu.extend({
		onLoad: function(a) {
			this._super.apply(this, arguments), this.$("#@link").mousedown(this.fnbind(function() {
				j.setQfeedLog(this, "UserClickthrough"), j.setQueryLog(this, "UserClickthrough")
			}))
		}
	}), b.UserPhoto = m.extend({
		onLoad: function(a) {
			this.$("#@link").mousedown(this.fnbind(function() {
				j.setQfeedLog(this, "UserClickthrough"), j.setQueryLog(this, "UserClickthrough")
			}))
		}
	}), b.BoardNameLink = m.extend({
		onLoad: function(a) {
			this.$("#@link").mousedown(this.fnbind(function() {
				j.setQfeedLog(this, "BoardClickthrough"), j.setQueryLog(this, "BoardClickthrough")
			}))
		}
	}), b.BoardPhoto = m.extend({
		onLoad: function(a) {
			this.$("#@link").mousedown(this.fnbind(function() {
				j.setQfeedLog(this, "BoardClickthrough"), j.setQueryLog(this, "BoardClickthrough")
			}))
		}
	}), b.TopicPhoto = m.extend({
		onLoad: function(a) {
			this.$("#@link").mousedown(this.fnbind(function() {
				j.setQfeedLog(this, "TopicClickthrough"), j.setQueryLog(this, "TopicClickthrough")
			}))
		}
	}), b.BoardItemTimestamp = m.extend({
		onLoad: function(a) {
			this.$("#@link").mousedown(this.fnbind(function() {
				j.setQfeedLog(this, "BoardItemClickthrough"), j.setQueryLog(this, "BoardItemClickthrough")
			}))
		}
	}), b.BoardItemTitle = m.extend({
		onLoad: function(a) {
			this.$("#@link").mousedown(this.fnbind(function() {
				j.setQfeedLog(this, "BoardItemClickthrough"), j.setQueryLog(this, "BoardItemClickthrough")
			}))
		}
	}), b.TruncatedAnswerRequireLogin = m.extend({
		onLoad: function() {
			this.$("#@more_require_login,#@more_require_login_link_signup").click(this.fnbind(function() {
				return this.serverCall("attempt_login").liveMutate().send(), !1
			})), this.$("#@more_require_login_link_login").click(this.fnbind(function() {
				return h.navigateTo("/login/index?next=" + encodeURIComponent(h.getURL())), !1
			}))
		}
	}), b.ExploreTopics = m.extend({
		onLoad: function() {
			this.opened_drawer_height = 0, this.focused_topic = -1
		},
		closeAllDrawers: function() {
			this.lookup("row_0").closeDrawer(), this.lookup("row_1").closeDrawer(), this.lookup("row_2").closeDrawer(), this.focused_topic && $(".browse_big_topic").removeClass("faded").fadeTo(400, 1), this.opened_drawer_height = 0
		}
	}), function() {
		function a() {
			var a = require("visibility").getFrameElement();
			if(a && a.getAttribute("autoresize") === "true") {
				var b = $(document),
					c = b.width(),
					d = b.height();
				$(a).width(c).height(d)
			}
		}
		e(window, "resize", a), $(document).ready(a)
	}(), b.PostTitleSuggestedEditDiscardButtonInline = m.extend({
		onLoad: function() {
			this.$("#@submit").click(this.fnbind(function() {
				return this.serverCall("discard_suggested_title_edit").kwargs({
					pid: this.pid
				}).liveMutate().send(), !1
			}))
		}
	}), b.AnswerSuggestedEditDiscardButtonInline = m.extend({
		onLoad: function() {
			this.$("#@submit").click(this.fnbind(function() {
				return this.serverCall("discard_suggested_edit").kwargs({
					aid: this.aid
				}).liveMutate().send(), !1
			}))
		}
	}), b.WidgetsLoginAndFollowMain = m.extend({
		onLoad: function(a) {
			this.$("#@signup_link").click(this.fnbind(function() {
				r()
			}))
		}
	}), b.WidgetsExampleFollowButton = m.extend({
		clickHandlers: {
			change_target: function() {
				this.toggleSelector(!0)
			}
		},
		toggleSelector: function(a) {
			this.$("#@selector_wrapper").toggle(a), this.$("#@button_wrapper").toggle(!a), a && this.child("selector").$("#@input").focus()
		},
		updateTarget: function(a, b, c) {
			this.serverCall("get_target_src").kwargs({
				target_object_id: a,
				target_is_user: b === "user",
				is_dark: this.is_dark
			}).success(this.fnbind(function(a) {
				this.$("#@example_iframe").attr("src", a), this.toggleSelector(!1), c && this.$("#@fill").effect("highlight", {}, 2e3)
			})).send()
		},
		blurSelector: function() {
			this.toggleSelector(!1)
		},
		setTo: function(a, b) {
			var c = "widgets_example_follow_button";
			this.is_dark || (c += "_dark"), this.updateTarget(a, b), this.lookup(c).updateTarget(a, b, !0);
			var d = "widgets_example_follow_button_code_wrapper";
			this.lookup(d).updateCode(a, b), this.lookup(d + "_dark").updateCode(a, b)
		},
		onLoad: function() {
			this.installMouseHandlers()
		}
	}), b.WidgetsExampleFollowButtonCodeWrapper = m.extend({
		updateCode: function(a, b) {
			this.serverCall("get_widget_code").kwargs({
				target_object_id: a,
				target_is_user: b === "user",
				is_dark: this.is_dark
			}).success(this.fnbind(function(a) {
				this.$("#@code").text(a).effect("highlight", {}, 2e3)
			})).send()
		},
		onLoad: function() {
			var a = this.$("#@code");
			a.focus(function() {
				setTimeout(function() {
					a.select()
				}, 0), a.mouseup(function(b) {
					a.unbind("mouseup"), b.stopPropagation()
				})
			})
		}
	}), b.BoardItemTopicLink = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function(a) {
				return this.parent().lookup("topics").toggle(), !1
			}))
		}
	}), b.RequestReviewsDialogLink = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this.openDialog(), !1
			}))
		},
		openDialog: function() {
			this._dialog = this.dialog().title("Request Reviews").load("content")
		},
		closeDialog: function() {
			this._dialog.close_()
		}
	}), b.CreateBoardDialogLink = m.extend({
		onLoad: function() {
			this.$("#@create").click(this.fnbind(function() {
				return this.openDialog(), !1
			}))
		},
		openDialog: function() {
			this._dialog = this.dialog().title("Create Board").cancel(null, "Cancel").load("content")
		}
	}), b.RequestReviewsDialogComposer = m.extend({
		onLoad: function() {
			this.submitted = !1, this.$("#@cancel").click(this.fnbind(function() {
				return g.Dialog.openerFor(this).closeDialog(), !1
			})), this.$("#@request").click(this.fnbind(function() {
				var a = this.getContextName();
				return a && !this.submitted && (this.submitted = !0, this.serverCall("request_reviews").kwargs({
					topic_name: a
				}).success(this.fnbind(function(a) {
					a[0] == "/" && (document.location = a)
				})).liveMutate().send()), !1
			}))
		},
		getContextName: function() {
			var a = this.cQuery(":context.topic_add").getTempTopicNamesAsArray();
			return a.length > 0 ? a[0] : null
		}
	}), b.ReviewsAddMain = m.extend({
		onLoad: function() {
			this.submitted = !1, this.$("#@request").click(this.fnbind(function() {
				var a = this.getContextName(),
					b = this.isPrivate();
				return a && !this.submitted && (this.submitted = !0, this.serverCall("request_reviews").kwargs({
					topic_name: a,
					is_private: b
				}).success(this.fnbind(function(a) {
					a[0] == "/" && (document.location = a)
				})).liveMutate().send()), !1
			}))
		},
		getContextName: function() {
			var a = this.cQuery(":context.topic_add").getTempTopicNamesAsArray();
			return a.length > 0 ? a[0] : null
		},
		isPrivate: function() {
			return this.lookup("anon_checkbox").getValue() == 0 ? 1 : 0
		}
	}), b.BoardDialogComposer = m.extend({
		onLoad: function() {
			this.lookup("input").$("#@name").focus(), this.lookup("input").$("#@controls").show()
		}
	}), b.CreateBoard = m.extend({
		onLoad: function() {
			this.submitted = !1, this.$("#@name").focus(this.fnbind(function() {
				this.$("#@controls").show()
			})), this.$("#@create").click(this.fnbind(function() {
				var a = this.$("#@name").val();
				if(a && !this.submitted) {
					this.submitted = !0;
					var b = this.lookup("privacy").getType();
					this.$("#@name").addClass("disabled"), this.serverCall("create").kwargs({
						name: a,
						privacy: b
					}).success(this.fnbind(function(a) {
						this.$("#@name").val(""), a[0] == "/" && (document.location = a)
					})).liveMutate().send()
				}
				return !1
			}))
		}
	}), b.CreateBlog = m.extend({
		onLoad: function() {
			this.submitted = !1, this.$("#@fake_editor").click(this.fnbind(function() {
				return this.$("#@fake_editor_row").hide(), this.$("#@editor_row").show(), this.lookup("editor").focus(), !1
			})), this.$("#@create").click(this.fnbind(function() {
				this.$("#@create").addClass("submit_button_disabled");
				var a = this.$("#@name").val();
				if(a && !this.submitted) {
					this.submitted = !0;
					var b = this.lookup("privacy").getType(),
						c = this.lookup("editor").serialize(),
						d = this.$("#@url").val(),
						e = this.getTopics();
					this.$("#@name").addClass("disabled"), this.serverCall("create").kwargs({
						name: a,
						privacy: b,
						description: c,
						url: d,
						topics: e
					}).success(this.fnbind(function(a) {
						this.$("#@name").val(""), a[0] == "/" && (document.location = a)
					})).liveMutate().send()
				}
				return !1
			})), this.$("#@url").bind("keyup", this.fnbind(function(a) {
				var b = this.$("#@url").val();
				this.serverCall("check_url").kwargs({
					url: b
				}).contentFor(this.$("#@status"), {
					parentCID: this.cid
				}).send()
			}))
		},
		getTopics: function() {
			return this.lookup("topic_selector") ? this.cQuery(":topic_selector.topic_add").getTempTopicNamesAsArray() : null
		}
	}), b.BoardItemView = k.SwitchableComponent.extend({
		onLoad: function() {
			this._super.apply(this, arguments);
			var a = this;
			this.has_vote_controls && this.$("#@item").hover(function(b) {
				a.cQuery(":vote_controls").$("#@delete").show(), a.$("#@item").addClass("hover")
			}, function(b) {
				a.cQuery(":vote_controls").$("#@delete").hide(), a.$("#@item").removeClass("hover")
			}), this.$("#@rating").tooltip({
				contents: this.tt
			}).click(this.fnbind(function() {
				return this.cQuery(":description.expandable_qtext").switchAction(), !1
			})), this.setCallback(this.fnbind(function() {
				this.lookup("comment_switch").viewComments()
			}))
		}
	}), b.LinkBoardItemView = BoardItemView.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@edit").click(this.fnbind(function() {
				return this.showEditor(), !1
			})), this.$("#@item").hover(this.fnbind(function(a) {
				this.$("#@item").addClass("hover")
			}), this.fnbind(function(a) {
				this.$("#@item").removeClass("hover")
			}))
		},
		showEditor: function() {
			this.cQuery(":description.editor").toggle_editor()
		}
	}), b.BoardURLSection = m.extend({
		onLoad: function() {
			this.$("#@url").bind("keyup", this.fnbind(function(a) {
				var b = this.$("#@url").val();
				this.serverCall("check_url").kwargs({
					bid: this.bid,
					url: b
				}).contentFor(this.$("#@button"), {
					parentCID: this.cid
				}).send()
			}))
		},
		updateURL: function() {
			var a = this.$("#@url").val();
			return a && this.serverCall("register_choice").kwargs({
				url: a
			}).success(this.fnbind(function() {
				location.reload(!0)
			})).liveMutate().send(), !1
		}
	}), b.AddURLStatusButton = m.extend({
		onLoad: function() {
			this.$("#@update").click(this.fnbind(function() {
				this.parent().updateURL()
			}))
		}
	}), b.Link = m.extend({
		getLinkInfo: function() {
			this.link_info.title = this.cQuery(":title.editor").get_value(), this.link_info.snippet = this.cQuery(":snippet.editor").get_value();
			var a = this.cQuery(":media");
			return a.editable && (this.link_info.image_keys = a.get_image_keys()), this.link_info
		},
		disableInputs: function() {
			this.cQuery(":title.editor.editor").$("#@editor").addClass("qtext_editor_content_disabled"), this.cQuery(":snippet.editor.editor").$("#@editor").addClass("qtext_editor_content_disabled")
		},
		setDisplayType: function(a, b) {
			this.$("#@link_wrapper").removeClass().addClass(a), this.link_info.display_type = b
		},
		playVideo: function() {
			var a = 2;
			this.link_info["display_type"] == a && (this.$("#@image_col, #@info_col").css("float", "left"), this.$("#@image_col").css("width", "100%"), this.$("#@image_and_info").css("display", "block"))
		}
	});
	var s = {
		onLoad: function() {
			this.$("#@link_no_image").click(this.fnbind(function() {
				return this.clearAllSelected(), this.setDisplayType("link_no_image"), this.$("#@link_no_image").addClass("selected"), !1
			})), this.$("#@link_small_image").click(this.fnbind(function() {
				return this.clearAllSelected(), this.setDisplayType("link_small_image"), this.$("#@link_small_image").addClass("selected"), !1
			})), this.$("#@link_large_image").click(this.fnbind(function() {
				return this.clearAllSelected(), this.setDisplayType("link_large_image"), this.$("#@link_large_image").addClass("selected"), !1
			})), this.$("#@remove_url").click(this.fnbind(function() {
				return this.parent().removeUrl(), !1
			}))
		},
		clearAllSelected: function() {
			this.$("#@link_no_image, #@link_small_image, #@link_large_image").removeClass("selected")
		},
		setDisplayType: function(a) {
			var b;
			a == "link_no_image" ? b = 1 : a == "link_small_image" ? b = 2 : b = 3, this.cQuery(":preview").setDisplayType(a, b)
		}
	};
	b.LinkEditor = m.extend(s), b.LinkVideo = m.extend({
		onLoad: function() {
			this.$("#@video_wrapper").click(this.fnbind(function() {
				this.parent().playVideo(), this.$("#@video_wrapper .qtext_embed.thumbnail").css("width", "100%").css("height", "272px")
			}))
		}
	}), b.LinkImageEditor = m.extend({
		onLoad: function() {
			this.index = 0, this.$("#@next_photo").click(this.fnbind(function(a) {
				return this.cycle_photo(1), !1
			})), this.$("#@prev_photo").click(this.fnbind(function(a) {
				return this.cycle_photo(this.keys_and_sources.length - 1), !1
			})), this.$("#@link").click(this.fnbind(function() {
				this.serverCall("track").send()
			}))
		},
		get_image_keys: function() {
			if(this.keys_and_sources != {}) {
				var a = [];
				for(var b = this.index, c = 0, d = this.keys_and_sources.length; c < d; c++, b = (b + 1) % d) a.push(this.keys_and_sources[b][0]);
				return a
			}
			return []
		},
		cycle_photo: function(a) {
			var b = this.index;
			this.index = (b + a) % this.keys_and_sources.length, this.$("#@img").attr("src", this.keys_and_sources[this.index][1])
		}
	}), b.LinkBoardItemDescriptionInlineEditor = l.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.board_item = this.lookup("board_item"), this.setToggleCallback(this.fnbind(function() {
				this.board_item.$("#@preview, #@edit").toggle()
			}))
		},
		_get_kwargs: function() {
			return {
				input: this.get_value(),
				preview: this.cQuery(":link_editor.preview").getLinkInfo()
			}
		}
	}), b.LinkTitle = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				this.serverCall("track").send()
			}))
		}
	}), b.BoardSelectorWrapper = m.extend({
		onLoad: function() {
			this.cQuery(":selector").$("#@input").bind("focus", this.fnbind(function(a) {
				this.removeBoardMissingError()
			}))
		},
		addMissingBoardError: function() {
			this.cQuery(":selector").$("#@input").addClass("input_validation_error"), this.$("#@no_board_error").show()
		},
		removeBoardMissingError: function() {
			this.cQuery(":selector").$("#@input").removeClass("input_validation_error"), this.$("#@no_board_error").hide()
		}
	}), b.DeleteBoardItem = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this.parent().$("#@item").addClass("selected"), this._dialog = this.dialog().title("Delete from Board").ok(this.fnbind(function() {
					this.serverCall("delete").liveMutate().send()
				}), "Delete").cancel(this.fnbind(function() {
					this.parent().$("#@item").removeClass("selected")
				}), "Cancel").html("Are you sure you want to delete this item from your board?"), !1
			}))
		}
	}), b.AddToBoardDialog = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this._dialog = this.dialog().title(this.title).load("add_to_board_content"), $(document).one("login_cancelled", this.fnbind(function() {
					this.closeDialog()
				})), !1
			}))
		},
		closeDialog: function() {
			this._dialog.close_()
		}
	}), b.BoardMemberSelector = m.extend({
		onLoad: function(a) {
			this.focusOnload && a && this.focus()
		},
		focus: function() {
			this.lookup("selector").focus(!0)
		},
		clear: function() {
			this.lookup("selector").reset()
		},
		setTo: function(a) {
			a && a != "" && this.serverCall("add").kwargs({
				bid: this.bid,
				target_uid: a
			}).success(this.fnbind(function() {
				this.focus()
			})).liveMutate().send()
		}
	}), b.AddItemCc = m.extend({
		onLoad: function(a) {
			this.$("#@add_cc").click(this.fnbind(function() {
				return this.$("#@add_cc").hide(), this.$("#@cc_row").show(), this.getSelector().focus(!0), !1
			}))
		},
		getSelector: function() {
			return this.cQuery(":selector.selector")
		}
	}), b.ItemCcPreviewRemove = m.extend({
		onLoad: function(a) {
			this.$("#@remove").click(this.fnbind(function() {
				return this.parent().parent().parent().removePerson(this.uid), !1
			}))
		}
	}), b.HomepageBoardsList = m.extend({
		onLoad: function(a) {
			this.$("#@view").click(this.fnbind(function() {
				return this.toggleAll(), !1
			})), this.$("#@more_link").click(this.fnbind(function() {
				return this.serverCall("view_more").contentFor(this.$("#@full_list_container"), {
					parentCID: this.cid
				}).success(this.fnbind(function(a) {
					this.$("#@list").hide(), this.$("#@full_list").show()
				})).liveMutate().send(), !1
			}))
		}
	}), b.AddContentButtons = m.extend({
		onLoad: function(a) {
			this.board_post_editor_loaded = !1, this.$("#@create_board_link").click(this.fnbind(function() {
				var a = this.selectButton(this.$("#@create_board_link"));
				return a && (this.showEditor("create_board"), this.cQuery(":input.input").$("#@name").focus()), !1
			}));
			var b = this;
			$.each($(".action_button_set .post_to_board"), function(a, c) {
				$(c).click(function() {
					var a = parseInt($(c).attr("bid")),
						d = b.selectButton($(c));
					return d && (b.showEditor("add_post"), b.cQuery(":post_editor.selector.selector").setInput(a)), !1
				})
			}), this.$("#@add_post_link").click(this.fnbind(function() {
				var a = this.selectButton(this.$("#@add_post_link"));
				return a && (this.showEditor("add_post"), this.board_post_editor_loaded ? this.cQuery(":post_editor.editor.editor").focus(!0) : this.serverCall("load_board_post_editor").contentFor(this.$("#@add_post"), {
					parentCID: this.cid
				}).success(this.fnbind(function(a) {
					this.board_post_editor_loaded = !0, this.cQuery(":post_editor.editor.editor").focus(!0)
				})).send()), !1
			})), this.$("#@ask_link").click(this.fnbind(function() {
				var a = this.selectButton(this.$("#@ask_link"));
				return a && (this.showEditor("add_question"), this.cQuery(":navigator.navigator").focus(!0)), !1
			}))
		},
		hideEditors: function() {
			$(".add_content_section .add_content_editors .add_content_editor").hide()
		},
		unselectButtons: function() {
			$(".add_content_section .add_content_buttons .add_content_link").removeClass("selected")
		},
		reset: function() {
			this.hideEditors(), this.unselectButtons()
		},
		showEditor: function(a) {
			this.hideEditors(), this.$("#@" + a).show()
		},
		selectButton: function(a) {
			return a.hasClass("selected") ? (this.reset(), !1) : (this.unselectButtons(), a.addClass("selected"), !0)
		}
	}), b.AddItemCcSelector = m.extend({
		onLoad: function(a) {
			this.people = []
		},
		focus: function() {
			this.lookup("selector").focus(!0)
		},
		clear: function() {
			this.lookup("selector").reset()
		},
		setTo: function(a) {
			a && a != "" && (this.addPerson(a), this.clear(), this.updatePreview())
		},
		addPerson: function(a) {
			this.people.push(a)
		},
		removePerson: function(a) {
			this.removeUid(a), this.updatePreview()
		},
		removeUid: function(a) {
			var b = [];
			$.each(this.getUids(), function(c, d) {
				d != a && b.push(d)
			}), this.people = b
		},
		getUids: function() {
			return this.people
		},
		updatePreview: function() {
			var a = this.getUids();
			a.length <= 0 ? (this.$("#@cc_list").hide(), this.focus()) : (this.$("#@cc_list").show(), this.serverCall("update_preview").kwargs({
				uids: a
			}).contentFor(this.$("#@cc_preview"), {
				parentCID: this.cid
			}).send())
		}
	}), b.BookmarkletLinkAddButton = m.extend({
		onLoad: function() {
			this.installMouseHandlers()
		},
		clickHandlers: {
			show_popup: function() {
				this.$("#@modal").show().css({
					opacity: .8
				}), $("html").animate({
					scrollTop: 0
				}, 200), $("body").animate({
					scrollTop: 0
				}, 200, this.fnbind(function() {
					this.dialog({
						verticalOffset: -10,
						dialogClass: "bookmarklet_instruction_dialog"
					}).cancel(null, "Close", !0).close(this.fnbind(function() {
						this.$("#@modal").hide()
					})).load("instructions")
				}))
			}
		}
	}), b.QuestionTopicsEditorCallToAction = m.extend({
		onLoad: function(a) {
			a && this.should_open_edit_state && this.lookup("topics_editor").do_toggle()
		}
	}), b.BoardItemLabel = m.extend({
		onLoad: function(a) {
			var b = this.lookup("editor"),
				c = this.lookup("distro_options_container");
			this.is_submission ? (b.setIsSubmission(!0), b.$("#@post_text").hide(), b.$("#@submit_text").show()) : (b.setIsSubmission(!1), b.$("#@post_text").show(), b.$("#@submit_text").hide()), this.is_private || this.is_submission ? c.hideDistroOptions() : c.showDistroOptions()
		}
	}), b.BoardListItem = m.extend({
		onLoad: function() {
			t && t.addBoardItem(this.cid, this.board_item_id)
		},
		onUnload: function() {
			t && t.removeBoardItem(this.cid, this.board_item_id)
		}
	});
	var t;
	b.BoardItemViewTracker = m.extend({
		init: function() {
			t = this, this.all_board_item_ids = {}, this.reported_board_item_ids = {}, this.last_report_time = +(new Date), this.rate_limit_ms = 3e3
		},
		onLoad: function() {
			var a = this.fnbind(this.report);
			e(document, "mousemove", a), e(document, "keypress", a), e(document, "scroll", a)
		},
		addBoardItem: function(a, b) {
			this.all_board_item_ids[a] = b
		},
		removeBoardItem: function(a, b) {
			delete this.all_board_item_ids[a]
		},
		isBoardItemVisible: function(a) {
			var b = g._domids[a];
			if(!b) return !1;
			var c = document.getElementById(b);
			if(!c) return !1;
			var d = $(c);
			return d.children("div:first").is(":in-viewport") ? d.is(":visible") ? !0 : !1 : !1
		},
		report: function() {
			var a = +(new Date);
			if(a < this.last_report_time + this.rate_limit_ms) return;
			this.last_report_time = a;
			var b = [];
			for(var c in this.all_board_item_ids) {
				var d = this.all_board_item_ids[c];
				this.reported_board_item_ids[d] == undefined && this.isBoardItemVisible(c) && (b.push(d), this.reported_board_item_ids[d] = !0)
			}
			b.length > 0 && this.serverCall("report").kwargs({
				board_item_ids: b
			}).send()
		}
	}), b.BlurredAnswer = m.extend({
		onLoad: function() {
			this.blurred_html && this.$("#@blurred_answer_container").html(this.blurred_html)
		}
	}), b.SubmissionView = m.extend({
		onLoad: function(a) {
			var b = this;
			this.$("#@item").hover(function(a) {
				b.$("#@delete").show(), b.$("#@item").addClass("hover")
			}, function(a) {
				b.$("#@delete").hide(), b.$("#@item").removeClass("hover")
			}), this.$("#@update_accept").click(this.fnbind(function() {
				return this.request("update_accept"), !1
			})), this.$("#@update").click(this.fnbind(function() {
				return this.request("update"), !1
			})), this.$("#@edit").click(this.fnbind(function() {
				return this.toggle(), !1
			})), this.$("#@cancel").click(this.fnbind(function() {
				return this.toggle(), !1
			}))
		},
		getNewPreview: function() {
			return null
		},
		request: function(a) {
			var b = this.lookup("description").serialize(),
				c = this.lookup("title").serialize(),
				d = this.getNewPreview();
			this.serverCall(a).kwargs({
				new_description: b,
				new_title: c,
				new_preview: d
			}).liveMutate().send()
		},
		toggle: function() {
			this.$("#@editor").toggle(), this.$("#@content").toggle()
		}
	}), b.LinkSubmissionView = SubmissionView.extend({
		getNewPreview: function() {
			return this.cQuery(":link_editor.preview").getLinkInfo()
		}
	}), b.RejectSubmissionDialogContents = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this.$("#@comment").toggle(), this.lookup("comment").focus(), !1
			}))
		}
	}), b.PromoteContent = m.extend({
		onLoad: function() {
			this.$("#@promote").click(this.fnbind(function() {
				var a = parseInt(this.$("#@price").text());
				return a && this.serverCall("promote").liveMutate().kwargs({
					budget: a
				}).send(), !1
			}));
			var a = "You have " + this.balance + " credits.";
			this.$("#@promote").tooltip({
				contents: a
			}), require("jquery.ui-1.8.17"), this.exponent = 3.5;
			var b = Math.pow(this.initial, 1 / this.exponent),
				c = Math.pow(this.min, 1 / this.exponent),
				d = Math.pow(this.max, 1 / this.exponent),
				e = d < 2e3 ? .1 : .5;
			this.$("#@reach_slider").slider({
				range: "min",
				value: b,
				min: c,
				max: d,
				step: e,
				slide: this.fnbind(function(a, b) {
					var c = Math.pow(b.value, this.exponent),
						d = Math.round(c / 10) * 10;
					this.updateReach(d)
				})
			}), this.$("%@slider_hash").click(this.fnbind(function(a) {
				var b = parseInt($(a.target).attr("reach"));
				this.$("#@reach_slider").slider("value", b), this.updateReach(b)
			}))
		},
		updateReach: function(a) {
			var b = a / this.multiplier;
			this.$("#@reach, #@remaining_reach").text(a), this.$("#@price").text(b)
		},
		toggleSection: function() {
			this.$("#@promote_section").toggleClass("hidden")
		}
	}), b.CurrentPromotionStatus = m.extend({
		onLoad: function() {
			this.$("#@end").tooltip({
				contents: this.tooltip
			}), this.$("#@end").click(this.fnbind(function() {
				return this.serverCall("end_promote").liveMutate().send(), !1
			})), this.$("#@promote_more").click(this.fnbind(function() {
				return this.lookup("promote_content").$("#@add_promotion_section").show(), this.$("#@promote_more_section").hide(), !1
			}))
		}
	}), b.PromotedIcon = m.extend({
		onLoad: function() {
			this.$("#@icon").tooltip({
				contents: this.promoted_sentence
			})
		}
	}), b.PromoteContentLink = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this.lookup("promote").toggleSection(), this.$("#@link").hide(), !1
			}))
		}
	}), b.CreditPageLink = m.extend({
		onLoad: function() {
			this.$("#@link").tooltip({
				contents: "You have " + this.balance + " credits."
			})
		}
	}), b.IframeBuster = m.extend({
		onLoad: function() {
			top.location = this.to_url
		}
	}), b.FilterableList = m.extend({
		onLoad: function() {
			this.lastQuery = null, this.$("#@search").keyup(this.fnbind(function() {
				var a = this.$("#@search").val();
				a && a != "" && a != this.lastQuery ? (this.serverCall("search_results").kwargs({
					query: a
				}).contentFor(this.$("#@search_results"), {
					parentCID: this.cid,
					useLoadingSpinner: !1
				}).success(this.fnbind(function() {
					var a = this.$("#@search").val();
					a && a != "" ? (this.$("#@search_results").show(), this.$("#@default").hide()) : (this.$("#@search_results").hide(), this.$("#@default").show())
				})).send(), this.lastQuery = a, this.newQueryEntered(a)) : a == "" && (this.$("#@search_results").hide(), this.$("#@default").show())
			})), this.$("#@search_link").click(this.fnbind(function() {
				return this.$("#@search_link, #@bullet").hide(), this.$("#@search").show().focus(), this.$("#@after_search").show().focus(), this.$("#@search_row").show().focus(), !1
			}))
		},
		newQueryEntered: function(a) {}
	}), b.QueryResults = m.extend({
		onLoad: function() {
			this.lookup("content") && this.lookup("content").onNewResultsLoaded(this.query)
		}
	});
	var u = b.QueryResult = m.extend({
		onLoad: function() {
			this.setDvar("query_id", this.query_id), this.setDvar("index", this.index), this.highlightQuery(), this.$('#@title a[href!="#"], #@content a[href!="#"]').attr("target", "_blank")
		},
		highlightQuery: function() {
			var a = new RegExp(this.query_result_regex, "gi");
			this.highlightQueryInTitle(a), this.highlightQueryInContent(a)
		},
		highlightQueryInTitle: function(a) {
			require("find").find(this.$("#@title")[0], a, function(a, b) {
				$(a.nextSibling).wrap('<span class="query_match" />')
			})
		},
		highlightQueryInContent: function(a) {
			require("find").find(this.$("#@content")[0], a, function(a, b) {
				$(a.nextSibling).wrap('<span class="query_match" />')
			})
		}
	}),
		v = b.QueryResultWithNoHighlight = m.extend({
			onLoad: function() {
				this.setDvar("query_id", this.query_id), this.setDvar("index", this.index), this.$('#@title a[href!="#"], #@content a[href!="#"]').attr("target", "_blank")
			}
		});
	b.QuestionQueryResult = u.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.setDvar("query_id", this.query_id), this.setDvar("index", this.index)
		}
	}), b.QuestionQueryResultWithNoHighlight = v.extend({}), b.PostQueryResult = u.extend({
		highlightQueryInTitle: function(a) {}
	}), b.PostQueryResultWithNoHighlight = v.extend({}), b.QueryResultPreviewItem = k.SwitchableComponent.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@answer_preview").click(this.fnbind(function() {
				return this.switchAction(), j.setQueryLog(this, "AnswerShowMore"), !1
			}))
		},
		switchAction: function() {
			this.$("#@answer_contents, #@answer_preview").toggle()
		}
	}), b.QueryResultRankingMetadata = m.extend({
		onLoad: function() {
			this.$("#@metadata").click(this.fnbind(function() {
				var a = this.$("#@metadata").parent().hasClass("expanded");
				this.$(".metadata").parent().removeClass("expanded"), a || this.$("#@metadata").parent().addClass("expanded")
			}))
		}
	}), b.QueryResultsAddQuestion = m.extend({
		onLoad: function(a) {
			this.origPos = this.$("#@add_question_wrapper").offset().top, this.installScrollHandlers(this.setPosition)
		},
		onUnload: function() {
			this.uninstallScrollHandlers()
		},
		setPosition: function() {
			var a = $(window).scrollTop();
			a = Math.max(a, 0);
			var b = 10;
			this.$("#@add_question_wrapper").addClass("component_fixed");
			if(a > this.origPos - b) this.$("#@add_question_wrapper").css("top", b + "px");
			else {
				var c = this.origPos - a;
				this.$("#@add_question_wrapper").css("top", c + "px")
			}
		}
	}), b.DeleteView = m.extend({
		onLoad: function() {
			this.$("#@delete").click(this.fnbind(function() {
				return this.serverCall("delete_view").liveMutate().send(), !1
			}))
		}
	}), b.UserContentViewsMain = m.extend({
		loadAggregatedSectionAtIndex: function(a) {
			this.$("#@aggregated_section").css("min-height", this.$("#@aggregated_section").height()), this.serverCall("load_aggregated_section").kwargs({
				index: a
			}).contentFor(this.$("#@aggregated_section"), {
				parentCID: this.cid
			}).send()
		}
	}), b.AddAdminAnnouncement = Announcement.extend({
		onLoad: function() {
			this.$("#@accept").click(this.fnbind(function() {
				return this.closeAnnouncement("accept"), !1
			})), this.$("#@decline").click(this.fnbind(function() {
				return this.closeAnnouncement("decline"), !1
			})), this.serverCall("track_announcement_view").send()
		}
	}), b.ViewsSettingPopup = m.extend({
		onLoad: function() {
			this.views_disabled && this.dialog().title(this.title).cancel(null, "Close").ok(this.fnbind(function() {
				this.serverCall("enable_views").liveMutate().send()
			}), "Enable Views").html(this.content)
		}
	}), b.EmbedLinkEditor = require("qtexteditor").EmbedComponentBase.extend($.extend({}, s, {
		onLoad: function() {
			s.onLoad.apply(this, arguments), this.$("#@remove_url").unbind("click");
			var a = this;
			this.$("#@remove_url").click(function() {
				a.componentDeleted()
			});
			var b = function() {
					return setTimeout(function() {
						a.triggerDataChanged()
					}, 0), !0
				},
				c = this.cQuery("preview.title.editor.editor").$("#@editor");
			c.keydown(b);
			var d = this.cQuery("preview.snippet.editor.editor").$("#@editor");
			d.keydown(b), this.getLinkImageEditor().whenOnLoaded(function() {
				var c = a.previous_info = a.getInfo();
				a.registerWithParent(a.preview.url, c);
				var d = a.getLinkImageEditor();
				d.$("#@next_photo").click(b), d.$("#@prev_photo").click(b)
			})
		},
		triggerDataChanged: function() {
			var a = this.getInfo();
			a !== this.previous_data && (this.dataChanged(a), this.previous_data = a)
		},
		initializeEmbedComponent: function(a, b, c) {
			this._super.apply(this, arguments);
			var d = this,
				e = c.find(".link_photo img") || [];
			e.length ? e.load(function() {
				d.updatePlaceholderImageSize(), d.parent().updateEmbedComponentPositions()
			}) : d.updatePlaceholderImageSize()
		},
		setDisplayType: function(a) {
			s.setDisplayType.apply(this, arguments), this.triggerDataChanged()
		},
		getLink: function() {
			return this.cQuery("preview")
		},
		getLinkImageEditor: function() {
			return this.getLink().cQuery(":media")
		},
		getInfo: function() {
			var a = this.getLink().getLinkInfo();
			a.embed_type = "link";
			var b = JSON.stringify(a);
			return b
		}
	})), b.FlagCandidateButton = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				var a = this.lookup("recruiting_menu_button");
				return a && a.doHide(), this.openDialog(), !1
			}))
		},
		openDialog: function() {
			this._dialog = this.dialog().title("Flag " + this.name + " for Recruiting").cancel(null, "Cancel").ok(this.fnbind(function() {
				var a = arguments[0].dialogComponent,
					b = a.lookup("editor").serialize();
				this.serverCall("recruit").kwargs({
					notes: b
				}).liveMutate().success(this.fnbind(function() {
					this._dialog.close_()
				})).send()
			}), "Flag for Recruiting").load("content")
		}
	}), b.FlagCandidateDialog = m.extend({
		onLoad: function() {
			this.lookup("editor").focus()
		}
	}), b.UserRecruitingInfo = m.extend({
		onLoad: function() {
			this.$("#@remove").length > 0 && this.$("#@remove").tooltip({
				contents: "Remove from your " + this.role_str + " queue for a year"
			}).click(this.fnbind(function() {
				this.serverCall("pass_on_user").liveMutate().send()
			}))
		}
	}), b.LinkedinCallbackPage = m.extend({
		onLoad: function() {
			window.opener && (window.opener.$(window.opener.document).trigger("linkedin_oauth_approved", this.liUid), window.close())
		}
	}), b.TumblrCallbackPage = m.extend({
		onLoad: function() {
			window.opener && (this.url ? (window.opener.$(window.opener.document).trigger("tumblr_oauth_approved", this.url), window.close()) : alert("Tumblr account has no blogs!"))
		}
	}), b.SocialNUX = m.extend({
		onLoad: function() {
			var a = this;
			a.$("#@follow_all_and_continue").click(function(b) {
				try {
					a.child(a.childName).followAll(function() {
						h.navigateTo(a.next)
					})
				} catch(c) {
					h.navigateTo(a.next)
				}
			})
		}
	}), b.SocialFollow = m.extend({
		onLoad: function() {
			this.$("#@follow_all").click(this.fnbind(function() {
				return this.followAll(), !1
			}))
		},
		followAll: function(a) {
			this.serverCall("follow_all").success(a).liveMutate().send()
		}
	}), b.QuoteHoverMenu = HoverMenu.extend({
		onLoad: function() {
			this.on = 1, this._super.apply(this, arguments);
			var a = this,
				b = this.$("#@quote_button"),
				c = this.$("#@quote_preview");
			c.length > 0 && b.click(this.fnbind(function() {
				this.$("#@quote_button").hide(), this.$("#@menu_contents").removeClass("quote-button"), this.$("#@menu .hover_menu_nub").css({
					background: "url(/static/images/tooltip_nub_up_4.png) 10px 0 no-repeat"
				}), this.serverCall("embed_quote").kwargs(this.getKwargs()).contentFor(c, {
					parentCID: this.cid
				}).success(function() {
					b.hide(), c.show()
				}).send()
			})), b.length > 0 && b.mouseover(function() {
				a.$("#@menu .hover_menu_nub").css({
					"background-position": "10px -7px"
				})
			}).mouseout(function() {
				a.$("#@menu .hover_menu_nub").css({
					"background-position": "10px 0"
				})
			}).mousedown(function() {
				a.$("#@menu .hover_menu_nub").css({
					"background-position": "10px -14px"
				})
			})
		},
		hide: function() {
			clearTimeout(this.st)
		},
		show: function() {
			this._super.apply(this, arguments);
			var a = this,
				b = this.getKwargs();
			setTimeout(function() {
				a.serverCall("log_selection").kwargs(b).send()
			}, 100)
		},
		getSelector: function() {
			return this.lookup("quote_selector")
		},
		loadMenu: function() {
			if(!this.loaded && !this.loading) {
				this.loading = !0;
				var a = this.getSelector(),
					b = a.text;
				this.text = b, this.loaded = !0, this.loading = !1;
				var c = this.$("#@quote_button");
				c.show();
				var d = this.$("#@quote_preview");
				d.hide(), this.$("#@menu_contents").addClass("quote-button"), this.$("#@menu .hover_menu_nub").css({
					background: "url(/static/images/quote_tooltip_nub.png) 10px 0 no-repeat"
				})
			}
		},
		recordPosition: function(a) {
			this.position = a
		},
		setPosition: function() {
			var a = this.$("#@link");
			a.css("position", "absolute"), a.css("left", this.position.left), a.css("top", this.position.top), this._super.apply(this, arguments);
			var b = this.getDialog();
			if(b) {
				var c = b.$("#@quote_dialog_tooltip");
				if(c.length > 0) {
					var a = this.$("#@link"),
						d = a.outerHeight(),
						e = this.$("#@menu").position();
					this.$("#@menu").css("top", e.top - d - 1 + "px")
				} else {
					var f = this.$("#@menu"),
						e = f.position();
					f.css("top", e.top + 8 + "px")
				}
			}
			a.removeAttr("style"), this.$("#@link_wrapper").append(a)
		},
		getDialog: function() {
			return this.child("quote_dialog")
		},
		getKwargs: function() {
			var a = this.getSelector();
			return {
				text: this.text,
				target: a.target
			}
		}
	}), b.QuoteEditHoverMenu = QuoteHoverMenu.extend({
		onLoad: function() {
			function b() {
				return a.doHide(), a.serverCall("edit_quote").kwargs(a.getKwargs()).send(), !1
			}
			var a = this,
				c = this.$("#@quote_button");
			c.length > 0 && c.click(b).mouseover(function() {
				a.parent().$("#@menu .hover_menu_nub").css({
					"background-position": "10px -7px"
				})
			}).mouseout(function() {
				a.parent().$("#@menu .hover_menu_nub").css({
					"background-position": "10px 0"
				})
			}).mousedown(function() {
				a.parent().$("#@menu .hover_menu_nub").css({
					"background-position": "10px -14px"
				})
			})
		}
	}), b.BoardItemEventViewExpandableQText = ExpandableQText.extend({
		switchAction: function() {
			this.expand(), this.$("#@truncated").addClass("hidden"), this.$("#@expanded").removeClass("hidden"), this.lookup("voting") && this.lookup("voting").$("#@voting").show(), this.lookup("voters") && this.lookup("voters").$("#@voters").show()
		}
	}), b.DeleteReadLaterStory = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this.parent().$("#@item").addClass("selected"), this._dialog = this.dialog().title("Delete from Read later").ok(this.fnbind(function() {
					this.serverCall("delete").liveMutate().send()
				}), "Delete").cancel(this.fnbind(function() {
					this.parent().$("#@item").removeClass("selected")
				}), "Cancel").html("Are you sure you want to delete this item from your read later list?"), !1
			}))
		}
	});
	var w, x;
	b.HeaderLogo = m.extend({
		onLoad: function() {
			w = this, x && x.show()
		}
	}), b.QuoraLogoHover = m.extend({
		onLoad: function() {
			x = this, this.show(), this.$("#@menu_contents").click(function() {
				window.location = "http://www.quora.com"
			})
		},
		show: function() {
			assert(x === this);
			if(w) {
				var a = w.$("#@logo"),
					b = a.outerHeight(),
					c = a.outerWidth(),
					d = a.offset();
				this.$("#@menu").css("top", d.top + b + "px").css("left", d.left + "px").removeClass("hidden"), this.$("#@menu_contents").css("width", "90px").css("margin-left", -Math.min(70, d.left) + "px").css("cursor", "pointer")
			}
		}
	}), b.ReadLaterStoryItem = m.extend({
		onLoad: function() {
			var a = this;
			this.$("#@item").hover(function(b) {
				a.$("#@delete").show()
			}, function(b) {
				a.$("#@delete").hide()
			})
		}
	}), b.isValidEmail = function(a) {
		var b = "[^\\x0d\\x22\\x5c\\x80-\\xff]",
			c = "[^\\x0d\\x5b-\\x5d\\x80-\\xff]",
			d = "[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+",
			e = "\\x5c[\\x00-\\x7f]",
			f = "\\x5b(" + c + "|" + e + ")*\\x5d",
			g = "\\x22(" + b + "|" + e + ")*\\x22",
			h = d,
			i = "(" + h + "|" + f + ")",
			j = "(" + d + "|" + g + ")",
			k = i + "(\\x2e" + i + ")*",
			l = j + "(\\x2e" + j + ")*",
			m = l + "\\x40" + k,
			n = "^" + m + "$",
			o = new RegExp(n);
		return o.test(a) ? !0 : !1
	}, b.FollowSuggestionRow = m.extend({
		onLoad: function() {
			this.$("#@follow").click(this.fnbind(function() {
				return this.$("#@follow, #@unfollow").toggle(), this.serverCall("follow").liveMutate().send(), !1
			})), this.$("#@unfollow").click(this.fnbind(function() {
				return this.$("#@follow, #@unfollow").toggle(), this.serverCall("unfollow").liveMutate().send(), !1
			}))
		}
	}), b.InboxThreadInformation = m.extend({
		onLoad: function() {
			this.$("#@report_spam").click(this.fnbind(function() {
				return this._dialog = this.dialog().title("Report Spam").ok(this.fnbind(function() {
					this.serverCall("report_spam").success(this.fnbind(function(a) {
						window.location.href = a
					})).send()
				}), "Report Spam").cancel("Cancel").html("Reporting this thread to be spam or harassing will result in a permanent loss of all the messages in this thread. Further, this person will be blocked preventing them from sending you messages, following you, commenting on your answers, suggesting edits to your answer and asking you to answer questions. Some of these rules may not apply if you're posting anonymously."), !1
			}))
		}
	}), b.NotifQuestionLink = m.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				this.serverCall("link_clicked_callback").send()
			}))
		}
	}), b.Mobile = m.extend({
		onLoad: function() {
			this.$("#download_app").click(this.fnbind(function() {
				var a = this.$("#phone_num").val(),
					b = /^[0-9-+]+$/;
				b.test(a) && this.serverCall("text_download_link").args({
					num: a
				}).success(this.fnbind(function(a) {
					a || (this._dialog = this.dialog().ok("Ok").title("Unable to text download link").html("We were unable to text download link to your phone. Please ensure that you entered the correct number and try again."))
				})).send()
			}))
		}
	}), b.HomeLoggedOutBigSignup = m.extend({
		onLoad: function() {
			this.resizeBackgroundImage(), $(window).resize(this.fnbind(function() {
				this.resizeBackgroundImage()
			}))
		},
		resizeBackgroundImage: function() {
			var a = $(window).width(),
				b = $(window).height(),
				c = a / b,
				d = this.img_width / this.img_height;
			c >= d ? $(".logged_out_page_big_signup").css("background-size", "100% auto") : $(".logged_out_page_big_signup").css("background-size", "auto " + b + "px")
		}
	})
}(window.Quora, window), require.install("Quora", function() {}), require.install("twitter", function(require, a, b) {
	function g(a) {
		e ? a() : $(f).bind("initialized", a)
	}
	function h(a, b) {
		var c = null;
		$(document).one("twitter_oauth_approved." + Math.random(), function(b, d) {
			var e = d.accessToken,
				f = d.userData;
			c && (clearInterval(c), c = null), setTimeout(function() {
				a(e.key, f)
			}, 1)
		});
		var d = window.open("/twitter/oauth_window", "_BLANK", "height=400,width=800");
		b && (c = setInterval(function() {
			c && d.closed && (clearInterval(c), b())
		}, 200))
	}
	var c = require("webnode2"),
		d = require("w2.quora").Component,
		e = !1,
		f = {};
	a.asyncInit = function() {
		require("win.load").add(function() {
			if(window.twttr) return;
			var a, b = document.createElement("script");
			window.twttr = a = {
				_e: [],
				ready: function(b) {
					a._e.push(b)
				}
			}, b.async = !0, b.src = "//platform.twitter.com/widgets.js", document.getElementById("tw-root").appendChild(b), twttr.ready(function(a) {
				e = !0, $(f).trigger("initialized")
			})
		})
	}, a.connectToTwitter = h;
	var i = a.TwitterConnectButton = d.extend({
		oauthWindowOpen: !1,
		connect: function() {
			var a = this;
			if(a.oauthWindowOpen) return;
			a.oauthWindowOpen = !0, h(function(b, c) {
				a.oauthWindowOpen = !1, a.onLogin(b, c), a.trigger("tw_login", b, c)
			}, function() {
				a.oauthWindowOpen = !1, a.onLoginFailed(), a.trigger("tw_login_failed")
			})
		},
		onLogin: function(a, b) {},
		onLoginFailed: function() {}
	});
	a.SignupTwitterConnectButton = i.extend({
		events: {
			"click #@twitter_connect_button": "onClick"
		},
		onClick: function() {
			return this.connect(), this.serverCall("record_signup_step").kwargs({
				signup_action: "signup_connect_to_twitter"
			}).send(), !1
		},
		onLogin: function(a, b) {
			this.serverCall("on_twitter_connected").kwargs({
				tw_uid: b.twitter_uid,
				access_token: a,
				screen_name: b.twitter_screen_name,
				"protected": b["protected"]
			}).send()
		},
		onLoginFailed: function() {
			this.serverCall("record_signup_step").kwargs({
				signup_action: "signup_twitter_connect_failed"
			}).send()
		}
	}), a.ShareSectionTweetButton = d.extend({
		onLoad: function() {
			var a = this;
			g(function() {
				twttr.events.bind("tweet", function(b) {
					a.serverCall("record_tweet").send()
				})
			})
		}
	})
}), require.install("login", function(require, a, b) {
	function h() {
		window.opener && window.opener.showFollowingButton && window.opener.showFollowingButton()
	}
	function i() {
		setTimeout(function() {
			window.close()
		}, 1e3)
	}
	require("jquery");
	var c = require("w2.quora").Component,
		d = require("window_manager"),
		e;
	$(document).bind("w2rpcexception-login_required.default", function(a, b) {
		b.rpc.__liveMutation && require("w2.livenode").mutationDoneAfterVersion(b.rpc.__liveMutationInfo.transactionId, 0), e.login(function() {
			var a = b.rpc.__success;
			b.rpc.__success = function() {
				typeof a == "function" && a.apply(this, arguments), d.reload()
			}, b.rpc.send()
		}, function() {
			$(document).trigger("login_cancelled")
		})
	}), $(document).bind("quora_logout", function(a) {
		d.reload()
	}), a.LiveLogin = c.extend({
		init: function() {
			this._super.apply(this, arguments), this._dialog = null, e = this
		},
		login: function(a, b) {
			var c = this;
			c._dialog = c._dialog || c.dialog().title("Create an Account on Quora").cancel(b).open(function() {
				c._loginListener = c.$(document).bind("quora_login", function(b) {
					c._dialog.ok_(), typeof a == "function" && a()
				})
			}).close(function() {
				c._dialog = null
			}).load("login_signup_combo_dialog")
		},
		_logout: function() {
			this.serverCall("_logout").send()
		}
	}), a.LiveLoginDialog = c.extend({
		onLoad: function() {
			var a = this;
			a.$("#@view").click(function() {
				return a.$("#view_live_login_dialog_login").addClass("hidden"), a.$("#live_login_dialog_login").removeClass("hidden"), !1
			}), a.$("#@show_login_link").click(function() {
				return a.$("#@inline_login").removeClass("hidden"), a.$("#@show_login_link").hide(), !1
			}), a.$("%@tabs").click(function(b) {
				return a.select($(this).attr("show")), !1
			}), this.select(this.default_tab)
		},
		select: function(a) {
			this.$("%@contents").hide(), this.$("#@" + a).show(), this.$("%@tabs").removeClass("selected"), this.$("#@" + a + "_select").addClass("selected")
		}
	}), a.LoginButton = c.extend({
		onLoad: function() {
			this.$("#@login_link").click(function(a) {
				return d.navigateTo("/login/index?next=" + encodeURIComponent(d.getURL())), !1
			})
		}
	}), a.LoginProfile = c.extend({
		onLoad: function() {
			var a = this;
			a.$("#@link").click(function(b) {
				return a.passwordless ? a.passwordlessLoginAs() : a.select(), !1
			}), a.$("#@container").hover(function(b) {
				a.$("#@x_person").css("visibility", ""), a.lookup("login_box").selected && a.lookup("login_box").$(".@select_user").fadeTo("fast", 1)
			}, function(b) {
				a.$("#@x_person").css("visibility", "hidden"), a.lookup("login_box").selected && a.lookup("login_box").$(".@select_user").fadeTo("fast", .3)
			}), a.$("#@x_person").click(function(b) {
				W2.rpc("/login/x_person_POST").kwargs({
					uid: a.uid
				}).liveMutate().send()
			}), a.passwordless && a.$("#@passwordless").hover(function(b) {
				a.$("#@x").css("visibility", "")
			}, function(b) {
				a.$("#@x").css("visibility", "hidden")
			}).click(function(b) {
				return W2.rpc("/login/x_passwordless_POST").kwargs({
					uid: a.uid
				}).liveMutate().send(), !1
			})
		},
		select: function() {
			this.lookup("login_box").select({
				uid: this.uid
			})
		},
		passwordlessLoginAs: function() {
			var a = this;
			W2.rpc("/login/login_ajax_POST").kwargs({
				uid: a.uid
			}).success(function(b) {
				var c = a.lookup("login_box").next || "/";
				d.navigateTo(c)
			}).error(function() {
				a1ert("There was a problem logging you in. :(")
			}).send()
		}
	}), a.LoginBox = c.extend({
		init: function(a) {
			this._super.apply(this, arguments), this.selected = null, this.submitting = !1
		},
		onLoad: function() {
			var a = this;
			a.$("#@email").val() && a.select({
				email: a.$("#@email").val()
			}), a.$("#@email").bind("focus", function(b) {
				return a.deselect(), !0
			}).bind("blur", function(b) {
				return a.select({
					email: a.$("#@email").val()
				}), !0
			}), a.$("#@email_form").submit(function(b) {
				return a.$("#@email").blur(), !1
			})
		},
		select: function(a) {
			var b = this,
				c = {};
			b.selected = a;
			if(typeof a.uid == "undefined") {
				c = {
					email: a.email
				};
				if(!a.email) return !1
			} else c = {
				uid: a.uid
			};
			return b.$("#@password_placeholder").setContentFromAJAXComponent("/login/password_input_POST", c, b.cid, null, function() {
				b.$("#@login_uid").val(c.uid), b.$("#@login_email").val(c.email), b.$("#@next").val(b.next)
			}, null, function(a, d) {
				switch(d[0][0]) {
				case "no_uid":
					b.$("#@password_placeholder").setContent('<span style="color: red; font-weight: bold;">No user registered with that e-mail address.</span>');
					break;
				case "unconfirmed_email":
					b.$("#@password_placeholder").setContent('<span style="color: red; font-weight: bold;">You need to confirm that e-mail address before you can use it to login.  If you need, we can <a href="#" id="resend_confirmation">send another confirmation e-mail</a> to you.</span>'), b.$("#resend_confirmation").click(function(a) {
						return b.$("#@password_placeholder").setContent("Sending..."), W2.rpc("/signup/resend_confirmation_email_POST").kwargs({
							email: c.email
						}).error(function(a) {
							b.$("#@password_placeholder").setContent("There was a problem resending the confirmation e-mail.")
						}).success(function(a) {
							b.$("#@password_placeholder").setContent("Sent.")
						}).send(), !1
					});
					break;
				default:
					console.error("UNKNOWN ERROR: " + d[0])
				}
			}).show(), b.$(".@select_user").fadeTo("slow", .3), b.$("#@email_form_buttons").hide(), b
		},
		deselect: function() {
			return this.selected = null, this.$("#@password_placeholder").hide(), this.$("#@email_form_buttons").show(), this.$(".@select_user").fadeTo("slow", 1), this
		}
	});
	var f = a.InlineLogin = c.extend({
		onLoad: function() {
			var a = this;
			if($.browser.msie) {
				var b = function(b) {
						var c = b.keyCode || b.which;
						c == 13 && a.$("#@submit_button").click()
					},
					c = a.fnbind(b);
				a.$("#@password").keydown(c), a.$("#@email").keydown(c)
			}
			a.$("#@resend_confirmation").click(function(b) {
				return a.serverCall("resend_confirmation_link").kwargs({
					email: a._email()
				}).success(function() {
					a.hideAllErrors()
				}).send(), !1
			}), a.$("#@reset_password_link").click(function() {
				return a.serverCall("reset_password").kwargs({
					email: a._email()
				}).success(function() {
					a.hideAllErrors()
				}).send(), !1
			}), a.$("#@email, #@password").keydown(function() {
				a.hideAllErrors()
			}), a.$("#@email").blur(function() {
				setTimeout(function() {
					a.updatePreview()
				}, 10)
			}), a.$("#@submit_button").click(function() {
				return a.checkPassword(), !1
			}), a.$("#@submit_button").bind("touchend", function() {
				return a.checkPassword(), !1
			}), a.$("#@login_link").click(function() {
				return a.$("#@associated").addClass("hidden"), a.$("#@alt_login_row").addClass("hidden"), a.$("#@login_form").removeClass("hidden"), a.$("#@email").focus(), !1
			}), $(document).ready(function() {
				a.updatePreview()
			})
		},
		updatePreview: function() {
			var a = this,
				b = a._email();
			a.serverCall("preview_info").kwargs({
				email: b
			}).success(function(b) {
				if(a.customSuccessUpdatePreviewCallback) a.customSuccessUpdatePreviewCallback(b), a.removeButtonDisabled();
				else {
					a.$(".usercard_big").fadeTo(1, 1), a.$("#@preview").hide();
					var c = !1,
						d = b.name.split(" ")[0];
					a.$("%passwordless_users").find(".name_span:visible").each(function(a) {
						$(this).text() != d ? $(this).parents(".usercard_big").fadeTo(1, .3) : c = !0
					}), c || (a.$("#@associated").addClass("hidden"), a.$("#@alt_login_row").addClass("hidden"), a.$("#@login_form").removeClass("hidden"), a.$("#@password").focus(), a.$("#@name").text(b.name), a.$("#@pic").attr("src", b.photo_url), a.$("#@preview").show(), a.removeButtonDisabled()), a.hideAllErrors()
				}
			}).except("email_not_found", function(b) {
				return a.hideAllErrors(), a.showErrorOnComponent("#@email_not_found_error", "#@email"), a.$("#@preview").hide(), a.addButtonDisabled(), !1
			}).except("no_email", function(b) {
				a.hideAllErrors(), a.$("#@preview").hide(), a.addButtonDisabled()
			}).except("email_unconfirmed", function(b) {
				a.$("#@preview").hide(), a.hideAllErrors(), a.showErrorOnComponent("#@email_not_confirmed_error", "#@email"), a.addButtonDisabled()
			}).send()
		},
		removeButtonDisabled: function() {
			this.$("#@submit_button").removeClass("submit_button_disabled")
		},
		addButtonDisabled: function() {
			this.$("#@submit_button").addClass("submit_button_disabled")
		},
		loginKwargs: function() {
			var a = this.$("#@email").val(),
				b = this.$("#@password").val(),
				c = +this.$("#@allow_passwordless").is(":checked");
			return {
				email: a,
				password: b,
				passwordless: c
			}
		},
		loginSuccessCallback: function(a) {
			if(this.customSuccessLoginCallback) this.customSuccessLoginCallback(a);
			else {
				var b = a;
				this.hideAllErrors(), (require("settings").uid == b || require("settings").pageMode == "post_reload") && $(document).trigger("quora_login")
			}
		},
		checkPassword: function() {
			this.hideAllErrors();
			var a = this;
			a.serverCall("do_login").kwargs(a.loginKwargs()).success(a.fnbind(a.loginSuccessCallback)).except("email_not_found", function() {
				a.hideAllErrors(), a.showErrorOnComponent("#@email_not_found_error", "#@email")
			}).except("incorrect_password", function() {
				a.hideAllErrors(), a.showErrorOnComponent("#@incorrect_password_error", "#@password")
			}).except("email_unconfirmed", function() {
				a.hideAllErrors(), a.showErrorOnComponent("#@email_not_confirmed_error", "#@email")
			}).except("banned_user", function() {
				a.hideAllErrors(), a.serverCall("login_user_is_banned").send()
			}).send()
		},
		_email: function() {
			return this.$("#@email").val()
		},
		hideAllErrors: function() {
			this.$("#@email_not_found_error").hide(), this.$("#@email_not_confirmed_error").hide(), this.$("#@incorrect_password_error").hide(), this.$("#@email_menu", "#@password_menu").hide(), this.$("#@email, #@password").removeClass("input_validation_error")
		},
		showErrorOnComponent: function(a, b) {
			this.$(a).show(), this.$(b + "_menu").show(), this.$(b).addClass("input_validation_error")
		}
	});
	a.FacebookConnectInlineLogin = f.extend({
		loginKwargs: function() {
			var a = this._super.apply(this, arguments),
				b = require("facebook");
			return a.fb_uid = b.getFbUid(), a.fb_access_token = b.getAccessToken(), a.fb_expires = b.getExpiresIn(), a
		},
		loginSuccessCallback: function(a) {
			var b = a[0],
				c = a[1];
			this.hideAllErrors();
			if(require("settings").uid == b || require("settings").pageMode == "post_reload") c ? $(document).trigger("quora_login", {
				__pmsg__: c
			}) : $(document).trigger("quora_login")
		}
	});
	var g = a.InlineLoginProfile = c.extend({
		loginKwargs: function() {
			return {}
		},
		loginSuccessCallback: function(a) {
			require("settings").pageMode == "post_reload" && $(document).trigger("quora_login")
		},
		onLoad: function() {
			var a = this;
			a.$("#@container").click(function() {
				if(require("settings").uid == a.uid) return $(document).trigger("quora_login"), !1;
				if(a.passwordless) a.serverCall("do_login").kwargs(a.loginKwargs()).success(a.fnbind(a.loginSuccessCallback)).send();
				else {
					var b = a.lookup("inline_login");
					b.$("#@email").val(a.email), b.$("#@allow_passwordless").removeAttr("checked"), b.updatePreview(), b.$("#@password").focus()
				}
				return !1
			}), a.$("#@x_person").click(function() {
				return a.serverCall("x_person").liveMutate().send(), !1
			})
		}
	});
	a.FacebookConnectInlineLoginProfile = g.extend({
		loginKwargs: function() {
			var a = require("facebook");
			return {
				fb_uid: a.getFbUid(),
				fb_access_token: a.getAccessToken(),
				fb_expires: a.getExpiresIn()
			}
		},
		loginSuccessCallback: function(a) {
			var b = a[0],
				c = a[1];
			require("settings").pageMode == "post_reload" && (c ? $(document).trigger("quora_login", {
				__pmsg__: c
			}) : $(document).trigger("quora_login"))
		}
	}), a.LoginSignal = c.extend({
		onLoad: function(a) {
			if(!a) {
				var b = this.uid,
					c = require("settings");
				c.uid == b && $.serverLog("Strange... got a login signal for uid=" + b + " but that uid was already logged in"), c.uid = b, $(document).trigger(b ? "quora_login" : "quora_logout")
			}
		}
	}), a.WidgetsLoginAndFollowInlineLogin = f.extend({
		clickHandlers: {
			email_not_found_signup_link: function() {
				window.open(this.parent().$("#@signup_link").attr("href")), i()
			}
		},
		onLoad: function() {
			this._super.apply(this, arguments), this.customSuccessLoginCallback = function(a) {
				this.hideAllErrors(), a && h(), i()
			}, this.customSuccessUpdatePreviewCallback = function(a) {
				this.hideAllErrors()
			}, this.installMouseHandlers(), this.$("#@email").focus()
		}
	}), a.WidgetLoginAndFollowInlineLoginProfile = g.extend({
		clickHandlers: {
			container: function() {
				if(this.passwordless) this.serverCall("do_login").success(this.fnbind(function(a) {
					a && h(), i()
				})).send();
				else {
					var a = this.lookup("inline_login");
					a.$("#@login_link").click(), a.$("#@email").val(this.email), a.$("#@allow_passwordless").removeAttr("checked"), a.updatePreview(), a.$("#@password").focus()
				}
			}
		},
		onLoad: function() {
			this._super.apply(this, arguments), this.installMouseHandlers()
		}
	}), a.LoggedOutHomeHeaderInlineLogin = f.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@email").focus()
		},
		hideAllErrors: function() {
			this._super.apply(this, arguments), this.$("#@login_options").show()
		},
		showErrorOnComponent: function(a, b) {
			this._super.apply(this, arguments), this.$("#@login_options").hide()
		},
		removeButtonDisabled: function() {},
		addButtonDisabled: function() {}
	}), a.LoginPageLoginListener = c.extend({
		init: function() {
			this._super.apply(this, arguments), this._enabled = !0
		},
		onLoad: function() {
			var a = this;
			a.$(document).bind("quora_login.LoginPageLoginListener", function(b, c) {
				if(a._enabled) {
					var e = a.next,
						f = [],
						g;
					for(g in c) f.push(g + "=" + encodeURIComponent(c[g]));
					f.length > 0 && (e += e.indexOf("?") == -1 ? "?" : "&", e += f.join("&")), d.navigateTo(e)
				}
			})
		}
	})
}), require.install("simscroll", function(require, a, b) {
	function f(a, b, c, d, e) {
		return [a, !! b, !! c, !! d, !! e].join(" ")
	}
	function m(a) {
		var b = a.keyCode || a.charCode,
			m = Math.round(.9 * e.clientHeight);
		switch(f(b, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)) {
		case g:
			window.scrollBy(0, -d);
			break;
		case h:
			window.scrollBy(0, d);
			break;
		case i:
		case j:
			window.scrollBy(0, -m);
			break;
		case k:
		case l:
			window.scrollBy(0, m);
			break;
		default:
			return !1
		}
		return c = !0
	}
	var c, d = 50,
		e = document.documentElement,
		g = f(38),
		h = f(40),
		i = f(33),
		j = f(32, !0),
		k = f(32),
		l = f(34);
	document.addEventListener && document.addEventListener("keypress", function(a) {
		var b = a.originalTarget;
		!c && (b === e || b === document.body) && m(a) && (a.preventDefault(), a.stopPropagation()), c = !1
	}, !1), a.maybeSimulateScroll = m, a.cancelSimulatedScroll = function() {
		c = !0
	}
}), require.install("html", function(require, a, b) {
	var c = document.createElement("div");
	a.encode = function(a) {
		return c.innerText = a, c.innerHTML
	}, a.decode = function(a) {
		return c.innerHTML = a, c.innerText
	}
});
var simscroll = require("simscroll"),
	windowManager = require("window_manager"),
	cookies = require("cookies"),
	Component = require("w2.quora").Component,
	html = require("html");
TypeaheadResults = Component.extend({
	onLoad: function() {
		this.hideDropdown(), this.focusedIndex = null, this.instructions = null, this.runSetup()
	},
	runSetup: function() {
		function b(b) {
			var c = a.$("#@list_item_" + b);
			c.mouseover(a.fnbind(function(c) {
				return a.setFocusIndex(b), !1
			})), c.mousedown(function(c) {
				return a.goResult(b, c)
			})
		}
		var a = this;
		for(var c = 0; c < this.results.length; c++) b(c)
	},
	hideDropdown: function() {
		this.$("#@results_frame").hide()
	},
	showDropdown: function() {
		this.results.length && this.$("#@results_frame").css("display", "inline-block")
	},
	isVisible: function() {
		return this.$("#@results_frame").is(":visible")
	},
	hide: function() {
		this.hideDropdown(), this.setFocusIndex(null)
	},
	getResult: function(a) {
		return this.results[a]
	},
	goResult: function(a, b) {
		if(this.actionType == "url") windowManager.handleClick(this.actionOfIndex[a], b);
		else {
			if(this.actionType == "value") return this.hide(), this.qValue = this.actionOfIndex[a], this.parent().setValue(this.qValue, this.results[a]), !1;
			assert(0)
		}
	},
	down: function() {
		this.focusedIndex == null ? this.setFocusIndex(0) : this.focusedIndex < this.nResults - 1 ? this.setFocusIndex(this.focusedIndex + 1) : this.focusedIndex == this.nResults - 1 && this.setFocusIndex(null)
	},
	up: function() {
		this.focusedIndex == null ? this.setFocusIndex(this.nResults - 1) : 0 == this.focusedIndex ? this.setFocusIndex(null) : 0 < this.focusedIndex && this.setFocusIndex(this.focusedIndex - 1)
	},
	go: function(a) {
		return this.focusedIndex != null ? (this.goResult(this.focusedIndex, a), !0) : !1
	},
	setFocusIndex: function(a, b) {
		if(this.empty) return;
		var c = this.$("#@list_item_" + a);
		this.focusedIndex != null && this.$("#@list_item_" + this.focusedIndex).removeClass("selected");
		if(c.hasClass("instruction")) {
			b && b.cancelIfSelectingInstruction || this.focusedIndex === a + 1 ? this.focusedIndex = null : this.setFocusIndex(a + 1);
			return
		}
		if(c.length == 0) {
			this.focusedIndex = null;
			return
		}
		if(a != null) {
			c.addClass("selected");
			var d = $(window),
				e = d.scrollTop(),
				f = c.offset().top + c.height() + 20 - (e + d.height());
			f > 0 && d.scrollTop(e + f)
		}
		this.focusedIndex = a
	}
}), NavigatorResults = TypeaheadResults.extend({
	onLoad: function() {
		this._super.apply(this, arguments), this.cookieSet = !1
	},
	setCookieHelper: function(a, b) {
		this.cookieSet || (this.cookieSet = !0, cookies.setMessage("qrl", [require("webnode2").windowId, this.query, this.matchTargetsJson, this.contextTid, a]), cookies.setSingleUse("q", JSON.stringify(this.query)))
	},
	goResult: function(a, b) {
		var c = a;
		this.query && this.numMatches > 0 && (c >= this.numMatches && (c = -1), this.cookieSet || (this.cookieSet = !0, cookies.setMessage("qrl", [require("webnode2").windowId, this.query, this.matchTargetsJson, this.contextTid, c]), cookies.setSingleUse("q", JSON.stringify(this.query)))), this._super.apply(this, arguments)
	}
}), FullNavigatorResults = NavigatorResults.extend({
	onLoad: function(a) {
		(a || !this.query) && this.hideDropdown(), this.focusedIndex = null, this.instructions = null, this.forceOpenResults = !1, this.runSetup()
	},
	hideDropdown: function() {
		this.forceOpenResults || (this.$("#@results_frame").hide(), this.parent().parent().$("#@results_tray").hide())
	},
	hide: function() {
		this.hideDropdown(), this.forceOpenResults || this.setFocusIndex(null)
	},
	showDropdown: function() {
		if(this.results.length) {
			this.$("#@results_frame").show();
			var a = null,
				b = this.parent().parent().$("#@results_tray");
			if(this.results.length <= 1) a = 35;
			else {
				var c = Math.max(375, this.results.length * 35);
				a = c
			}
			b.show(), parseInt(b.height()) != parseInt(a) && b.css("height", a + "px")
		}
	},
	goResult: function(a, b) {
		this.forceOpenResults = !0, this.actionType == "url" ? (this.setCookieHelper(a, b), this.$("#@list_item_" + a).hasClass("addquestionitem") ? this.parent().addQuestionClick() : windowManager.handleClick(this.actionOfIndex[a], b)) : assert(0)
	},
	go: function(a) {
		return this.forceOpenResults = !0, this.focusedIndex != null ? (this.$("#@list_item_" + this.focusedIndex).hasClass("addquestionitem") ? this.parent().addQuestionClick() : this.goResult(this.focusedIndex, a), !0) : !1
	},
	down: function() {
		this.focusedIndex == null ? this.setFocusIndex(0) : this.focusedIndex < this.nResults - 1 ? this.setFocusIndex(this.focusedIndex + 1) : this.focusedIndex == this.nResults - 1 && (this.highlightAddQuestion ? this.setFocusIndex(0) : this.setFocusIndex(null))
	}
}), Typeahead = Component.extend({
	onLoad: function() {
		this.qValue = this.initialValue, this.result = null, this.requestOutstanding = !1, this.closed = !1, this.selectionChosen = !1, this.selectionlessCallback = null, this.placeholderActive = !1, this.extraKeydown = null, this.userClicked = !1, this.simulateScroll = !0;
		var a = this.$("#@input").attr("placeholder");
		this.$("#@input").attr("placeholder", html.decode(a)), this.$("#@view_selector").click(this.fnbind(function() {
			return this.$("#@selector_wrapper").removeClass("hidden"), this.$("#@view_selector_wrapper").addClass("hidden"), this.focus(), !1
		}));
		var b = this;
		b.data || (b.data = {}), b.$("#@input").focus(function() {
			$(this).attr("focused", "true"), b.inputFocus(), b.extraFocus && b.extraFocus()
		}).blur(function() {
			$(this).removeAttr("focused"), b.inputBlur(), b.userClicked = !1
		}).keydown(function(a) {
			return b.inputKeydown(a)
		}).keyup(function(a) {
			return b.inputKeyup(a)
		}).keypress(function(a) {
			if(a.which == 13 || a.which == 27) return a.stopPropagation(), a.preventDefault(), !1
		}).click(function() {
			b.userClicked = !0
		})
	},
	getRequestUpdatePostData: function() {
		return {
			q: this.qValue,
			data: JSON.stringify(this.data)
		}
	},
	requestUpdate: function() {
		this.requestOutstanding = !0, this.requestStartTime = now();
		var a = this.getRequestUpdatePostData();
		a.___W2_parentId = this.cid, a.___W2_windowId = require("webnode2").windowId, $.ajax({
			type: "GET",
			url: this.resultsQueryPath,
			dataType: "json",
			data: a,
			success: this.fnbind(function(a) {
				this.ajaxCallback(a)
			}),
			error: this.fnbind(function(a, b, c) {
				this.requestOutstanding = !1
			})
		})
	},
	close: function() {
		this.closed = !0, this.child("results").hide()
	},
	clear: function() {
		this.clearInput(), this.close()
	},
	clearInput: function() {
		this.$("#@input").val(""), this.$("#@input").get(0).style.backgroundColor = "#fff"
	},
	reset: function() {
		this.qValue = this.initialValue, this.clearInput(), this.result = null
	},
	resetFocus: function() {
		this.reset(), this.requestUpdate(), this.focus(), this.inputFocus()
	},
	setCallback: function(a) {
		var b = this.callback;
		if(!b) b = a;
		else {
			var c = b;
			b = function() {
				c(), a()
			}
		}
		this.callback = b
	},
	setSelectionlessCallback: function(a) {
		var b = this.selectionlessCallback;
		if(!b) b = a;
		else {
			var c = b;
			b = function() {
				c(), a()
			}
		}
		this.selectionlessCallback = b
	},
	setExtraFocus: function(a) {
		this.extraFocus = a
	},
	setExtraKeydown: function(a) {
		this.extraKeydown = a
	},
	setValue: function(a, b) {
		this.qValue = a, this.$("#@input").val(this.qValue), this.result = b;
		var c = this.$("#@input");
		this.selectionChosen = !0, this.callback && this.callback()
	},
	getValue: function() {
		return this.placeholderActive ? "" : this.$("#@input").val()
	},
	ajaxCallback: function(a) {
		var b = now();
		if(!this.requestOutstanding) return;
		this.requestOutstanding = !1;
		if(this.closed) return;
		if(!this.child("results")) return;
		require("webnode2").unloadComponent(this.child("results").cid), this.$("#@results_shell").setContent(a), !this.child("results").empty && (this.child("results").query || this.always_show_dropdown_on_results) && this.child("results").showDropdown();
		var c = (now() - this.requestStartTime) / 1e3,
			d = (now() - b) / 1e3;
		console && console.log("js saw " + c + " ms and " + d + " in callback"), this.child("results").query != this.qValue && this.requestUpdate(), this.shouldHighlightFirstResult() && this.child("results").setFocusIndex(0, {
			cancelIfSelectingInstruction: !0
		}), this.child("results").highlightAddQuestion && this.child("results").setFocusIndex(this.child("results").results.length - 1, {
			cancelIfSelectingInstruction: !0
		})
	},
	shouldHighlightFirstResult: function() {
		return this.minAutoFocusIndexLength && this.qValue.length < this.minAutoFocusIndexLength || this.child("results").highlightFirst
	},
	inputKeydown: function(a) {
		var b = this.$("#@input"),
			c = b.val();
		if(this.simulateScroll && !this.child("results").isVisible() && !this.requestOutstanding && simscroll.maybeSimulateScroll(a)) return b.blur(), !1;
		simscroll.cancelSimulatedScroll();
		if(a.keyCode == 40) return this.requestOutstanding = !1, this.child("results").down(), !1;
		if(a.keyCode == 38) return this.child("results").up(), !1;
		if(a.keyCode == 27) return this.child("results").hide(), this.userClicked = !1, !1;
		if(a.keyCode == 13) {
			if(this.child("results").go(a)) return !1;
			if(this.selectionlessCallback && this.selectionlessCallback()) return !1
		}
		return this.extraKeydown ? this.extraKeydown(a.keyCode) : !0
	},
	inputKeyup: function() {
		return this.onInputChange(), !1
	},
	onInputChange: function() {
		var a = this.$("#@input").val();
		if(a == this.qValue) return;
		this.qValue = a, this.requestOutstanding || this.requestUpdate(), this.qValue == "" && (this.closed = !1)
	},
	inputBlur: function() {
		this.setPlaceholder(), this.child("results") && this.child("results").hide()
	},
	disable: function() {
		this.close(), this.$("#@input").attr("disabled", "disabled"), this.$("#@input").css("background", "#e0e0e0")
	},
	enable: function() {
		this.$("#@input").attr("disabled", !1), this.$("#@input").css("background", "#fff")
	},
	setText: function(a) {
		this.$("#@input").val(a), this.onInputChange()
	},
	setPlaceholder: function() {
		var a = this.$("#@input").attr("placeholder");
		a && !this.getValue() && (this.placeholderActive = !0, this.$("#@input").addClass("light"), this.$("#@input").val(a))
	},
	removePlaceholder: function() {
		this.placeholderActive && (this.placeholderActive = !1, this.$("#@input").removeClass("light"), this.clearInput())
	},
	focus: function(a) {
		if(!a) if(window.getSelection) {
			if(window.getSelection().rangeCount > 0) return
		} else if(document.selection && document.selection.createRange()) return;
		if(!this.$("#@input").is(":visible")) return;
		this.$("#@input").attr("focused", !0), this.closed = !1, this.$("#@input").focus(), this.removePlaceholder()
	},
	inputFocus: function() {
		this.$("#@input").attr("focused", !0), this.removePlaceholder(), this.$("#@input").get(0).style.backgroundColor = "", this.selectionChosen ? (this.selectionChosen = !1, this.result = null, this.requestUpdate()) : (!this.focusOnLoad || this.userClicked && this.focusOnLoad) && this.showResultsDropdown()
	},
	showResultsDropdown: function() {
		this.child("results").showDropdown()
	},
	cursorPosition: function(a) {
		var b = a.get(0),
			c = null;
		if(b.selectionStart != undefined) b.selectionStart == b.selectionEnd && (c = b.selectionStart);
		else if(document.selection) {
			var d = document.selection.createRange().duplicate();
			d.text == "" && (d.moveEnd("character", b.value.length), d.text == "" ? c = b.value.length : c = b.value.lastIndexOf(d.text))
		}
		return c
	}
}), ContextTypeahead = Typeahead.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.width = this.$("#@input").outerWidth(), this.paddingRight = parseInt(this.$("#@input").css("paddingRight").replace("px", "")), this.orgPlaceholder = this.$("#@input").attr("placeholder"), this.child("context").setDefault(), this.context.id && this.clearInstruction(), this.resizeInput(), this.child("context").hasContext() && this.showClearButton(), this.$("#@clear").click(this.fnbind(function() {
			return this.reset(), this.resetContext(), this.clearInstruction(), this.$("#@input").focus(), !1
		})), this.setExtraKeydown(this.fnbind(function(a) {
			if(a == 9) {
				var b = this.child("results").focusedIndex ? this.child("results").focusedIndex : 0,
					c = this.child("results").getResult(b);
				if(c.text) return this.clearInstruction(), this.context = {
					type: c.type,
					id: c.id
				}, this.child("context").setContext(c.text, c.url), this.$("#@input").val(""), this.showClearButton(), this.resizeInput(), !1
			} else if(a == 8) {
				var d = this.$("#@input");
				(d.val() == "" || this.cursorPosition(d) == 0) && this.resetContext()
			}
			return !0
		})), this.setExtraFocus(this.fnbind(function() {
			this.$("#@input_wrapper").css("background-color", "#fff")
		})), this.focusOnLoad ? this.focus() : this.setPlaceholder()
	},
	showClearButton: function() {
		this.$("#@clear").show()
	},
	hideClearButton: function() {
		this.$("#@clear").hide()
	},
	clearInstruction: function() {
		this.$("#@input").attr("placeholder", ""), this.removePlaceholder()
	},
	resizeInput: function() {
		var a = this.child("context").getWidth(),
			b = this.width - a - 10,
			c = this.paddingRight;
		a && (c += 17, b -= 17), this.$("#@input").css("width", b + "px"), this.$("#@input").css("paddingRight", c + "px")
	},
	resetContext: function() {
		this.context = {}, this.child("context").removeContext(), this.$("#@input").attr("placeholder", this.orgPlaceholder), this.hideClearButton(), this.resizeInput(), this.requestUpdate()
	},
	getRequestUpdatePostData: function() {
		return {
			q: this.qValue,
			context_type: this.context.type,
			context_id: this.context.id,
			data: JSON.stringify(this.data)
		}
	}
}), MultiSelectTypeahead = Typeahead.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments);
		var b = this;
		b.data.partial_results = null, b.qValues = [], b.results = [], b.count = 0, b.input = b.$("#@input"), b.$("#@multi_select_typeahead").click(function() {
			b.input.focus()
		}), b.input.keypress(function(a) {
			a.which == 13 && (b.input.attr("focused", !1), b.child("results").hide(), a.preventDefault())
		}), b.input.keydown(function(a) {
			if(a.which == 8 && b.input.val() == "" && b.qValues.length > 0) {
				var c = b.qValues.length - 1;
				while(typeof b.qValues[c] == "undefined" && c >= 0) c--;
				typeof b.qValues[c] != "undefined" && (b.remove(c), b.child("token_list").$("#@item" + c).hide())
			}
			b.fixWidth()
		}), b.input.bind("paste", b.fnbind(b.fixWidth))
	},
	fixWidth: function() {
		var a = 350,
			b = 50,
			c = 12;
		this.count === 0 ? this.input.width(a) : this.input.width(Math.min(a, Math.max(b, c * this.input.val().length)))
	},
	setValue: function(a, b) {
		this.qValue = a, this.input.val(this.qValue), this.result = b;
		if($.inArray(this.qValue, this.qValues) != -1) {
			this.reset();
			return
		}
		this.qValues.push(this.qValue), this.results.push(this.result), this.data.partial_results = this.results, this.updateContainer(), this.count++, this.child("token_list").addItem(this.result.text, this.qValues.length - 1), this.input.attr("placeholder", ""), this.fixWidth(), this.input.hasClass("maintain_background_white") || this.input.css("background-color", "#eee"), this.selectionChosen = !0, this.callback && this.callback(), this.reset()
	},
	remove: function(a) {
		delete this.qValues[a], delete this.results[a], this.updateContainer(), this.count--, this.count === 0 && this.input.attr("placeholder", this.placeholder)
	},
	updateContainer: function() {
		this.lookup("typeaheadContainer").updateValues($.grep(this.qValues, function(a, b) {
			return typeof a != "undefined"
		}))
	},
	clear: function() {
		var a = this;
		$.each(a.qValues, function(b, c) {
			delete a.qValues[b], delete a.results[b], a.child("token_list").$("#@item" + b).hide()
		}), a.count = 0, a.input.attr("placeholder", a.placeholder), a.resetFocus(), a.fixWidth(), a.updateContainer()
	}
}), MultiSelectTokenList = Component.extend({
	attachRemoveClickHandler: function(a) {
		this.$("#@remove" + a).click(this.fnbind(function(a) {
			return this.parent().remove(a), this.parent().fixWidth(), this.parent().input.focus(), this.$("#@item" + a).hide(), !1
		}, a))
	},
	cloneItem: function(a) {
		var b = this.$("#@item" + a).clone(),
			c = b.attr("id");
		b.attr("id", this.constructNextId(c, a));
		var d = $(".token_remove", b),
			e = d.attr("id");
		d.attr("id", this.constructNextId(e, a));
		var f = $(".token_name_text", b),
			g = f.attr("id");
		return f.attr("id", this.constructNextId(g, a)), this.attachRemoveClickHandler(a), b
	},
	constructNextId: function(a, b) {
		var c = a.lastIndexOf(b),
			d = a.slice(0, c) + (b + 1);
		return d
	},
	addItem: function(a, b) {
		this.cloneItem(b).appendTo(this.$("#@token_list")), this.$("#@text" + b).text(a), this.$("#@item" + b).css("display", "inline-block")
	}
}), TopicSelector = Typeahead.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.setCallback(this.fnbind(function() {
			this.lookup("topic_add").select(), this.type != "to_tid" && this.type != "replace_topic" && this.reset()
		})), this.simulateScroll = !1
	},
	shouldHighlightFirstResult: function() {
		return this._super.apply(this, arguments) && this.child("results").nResults > 1
	},
	addTempTopic: function(a) {
		this.$("#@temp_topics_list").append(a), this.parent().$("#@update").show()
	},
	resetTempTopics: function(a) {
		this.$("#@temp_topics_list").text("")
	},
	hideSelector: function() {
		this.$("#@selector_wrapper").addClass("hidden"), this.$("#@view_selector_wrapper").removeClass("hidden"), this.$("#@view_selector").focus()
	},
	setTarget: function(a) {
		a && this.$("#@view_selector").text("Suggest Topics for " + a)
	}
}), Navigator = Typeahead.extend({
	onLoad: function() {
		this._super.apply(this, arguments), this.$("#@add_new_question").click(this.fnbind(function() {
			return this.lookup("add_question").openDialog(this.qValue), !1
		})), this.setSelectionlessCallback(this.fnbind(function() {
			this.lookup("add_question").openDialog(this.qValue)
		}))
	}
}), TopicNavigator = Typeahead.extend({
	onLoad: function() {
		this._super.apply(this, arguments), this.$("#@add_new_question").click(this.fnbind(function() {
			return this.setTopic(), this.lookup("add_question").openDialog(this.qValue), this.lookup("add_question").setOkCallback(this.fnbind(function() {
				this.clear()
			})), this.close(), !1
		})), this.setSelectionlessCallback(this.fnbind(function() {
			this.setTopic(), this.lookup("add_question").openDialog(this.qValue), this.lookup("add_question").setOkCallback(this.fnbind(function() {
				this.clear()
			})), this.close()
		}))
	},
	setTopic: function() {
		this.tid && this.lookup("add_question").setTid(this.tid)
	},
	getRequestUpdatePostData: function() {
		return {
			q: this.qValue,
			tid: this.tid,
			data: JSON.stringify(this.data)
		}
	}
}), ContextNavigator = ContextTypeahead.extend({
	onLoad: function() {
		this._super.apply(this, arguments), this.$("#@placeholder").hover(this.fnbind(function() {
			this.hideInstructionPlaceholder()
		})), this.$("#@input").click(this.fnbind(function() {
			return this.hideAddQuestionNote(), this.focus(!0), !1
		})), this.$("#@input").keydown(this.fnbind(function(a) {
			this.keydownHandler(a)
		})), this.$("#@input").blur(this.fnbind(function() {
			this.hideAddQuestionNote()
		})), this.$("#@input").focus(this.fnbind(function() {
			this.hideAddQuestionNote()
		})), this.$("#@add_new_question").click(this.fnbind(function() {
			return this.addQuestionClick(), !1
		})), this.setSelectionlessCallback(this.fnbind(function() {
			this.addQuestionClick()
		})), this.open_add_question_dialog_on_load && this.lookup("add_question").openDialog(this.qValue), this.focusOnLoad && this.showInstructionPlaceholder("Search Questions, Topics and People")
	},
	keydownHandler: function(a) {
		a.keyCode != 13 && this.hideAddQuestionNote()
	},
	addQuestionClick: function() {
		if(!this.qValue || this.qValue == "") {
			this.showAddQuestionNote();
			return
		}
		this.hideAddQuestionNote(), this.child("results").hide(), this.lookup("add_question").setTid(this.getTopic()), this.lookup("add_question").openDialog(this.qValue)
	},
	showAddQuestionNote: function() {
		this.focus(!0), this.showInstructionPlaceholder("Type your question here"), this.child("results").hideDropdown(), this.lookup("add_question_note").$("#@note").fadeIn(500)
	},
	showInstructionPlaceholder: function(a) {
		!this.$("#@input").val() && !this.context.id && (this.$("#@placeholder").text(a), this.$("#@placeholder").show())
	},
	hideInstructionPlaceholder: function() {
		this.$("#@placeholder").hide()
	},
	hideAddQuestionNote: function() {
		this.hideInstructionPlaceholder(), this.lookup("add_question_note").$("#@note").hide()
	},
	getTopic: function() {
		return this.context && this.context.type == "topic" ? this.context.id : null
	}
}), FullNavigator = ContextNavigator.extend({
	onLoad: function() {
		this._super.apply(this, arguments), this.$("#@placeholder").hover(this.fnbind(function() {
			this.hideInstructionPlaceholder()
		})), this.$("#@input").click(this.fnbind(function() {
			return this.focus(!0), !1
		})), this.setSelectionlessCallback(this.fnbind(function() {})), this.open_add_question_dialog_on_load && this.lookup("add_question").openDialog(this.qValue), this.focusOnLoad && this.showInstructionPlaceholder("Search Questions, Topics and People")
	},
	addQuestionClick: function() {
		this.child("results").hide(), this.lookup("add_question").setTid(this.getTopic()), this.lookup("add_question").openDialog(this.qValue)
	},
	showInstructionPlaceholder: function(a) {
		!this.$("#@input").val() && !this.context.id && (this.$("#@placeholder").text(a), this.$("#@placeholder").show())
	},
	hideInstructionPlaceholder: function() {
		this.$("#@placeholder").hide()
	},
	getTopic: function() {
		return this.context && this.context.type == "topic" ? this.context.id : null
	}
}), InlineQuestionsNavigator = FullNavigator.extend({
	onLoad: function() {
		this._super.apply(this, arguments)
	},
	inputBlur: function() {
		this.setPlaceholder()
	}
}), BoardsNavigator = ContextNavigator.extend({
	onLoad: function() {
		this.loaded = !1, this._super.apply(this, arguments), this.setSelectionlessCallback(this.fnbind(function() {})), this.open_add_question_dialog_on_load && this.lookup("add_question").openDialog(this.qValue), this.$("#@input").click(this.fnbind(function() {
			this.loaded || (this.requestUpdate(), this.loaded = !0)
		}))
	},
	keydownHandler: function(a) {
		a.keyCode != 13 && this.hideAddQuestionNote()
	},
	showResultsDropdown: function() {
		this.userClicked && this.child("results").showDropdown()
	},
	inputIsNotEmpty: function() {
		return this.$("#@input").val() && this.$("#@input").val() != this.orgPlaceholder
	},
	showAddQuestionNote: function() {},
	hideAddQuestionNote: function() {}
}), MobileNavigator = Typeahead.extend({
	onLoad: function() {
		this._super.apply(this, arguments), this.$("#@input").focus(this.fnbind(function() {
			this.mobileInputFocus()
		})), this.$("#@input").blur(this.fnbind(function() {
			this.$("#@input").attr("placeholder") == this.$("#@input").val() && this.mobileInputBlur()
		})), this.lookup("add_question").$("#@link").click(this.fnbind(function() {
			return this.lookup("add_question").openDialog(this.qValue), !1
		})), this.setSelectionlessCallback(this.fnbind(function() {
			this.lookup("add_question").openDialog(this.qValue)
		}))
	},
	mobileInputFocus: function() {
		this.parent().miniLogo(), this.$("#@add").removeClass("hidden")
	},
	mobileInputBlur: function() {
		this.parent().resetLogo(), this.$("#@add").addClass("hidden")
	}
}), RedirectQuestionSelector = Typeahead.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.setCallback(this.fnbind(function() {
			this.$("#@input").val($.trim($("<div>" + this.result.html + "</div>").text())), this.parent().$("#@to_qid").val(this.qValue), this.serverCall("question_redirect_preview").kwargs({
				to_qid: this.qValue
			}).contentFor(this.parent().$("#@question_redirect_preview"), {
				parentCID: this.cid
			}).send(), this.$("#@input").blur()
		}))
	}
}), WantedAnswerQuestionSelector = Typeahead.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.qid = null, this.setCallback(this.fnbind(function() {
			this.setQid(this.qValue), this.$("#@selector").addClass("hidden"), this.$("#@question").removeClass("hidden"), this.$("#@question").setContentFromAJAXComponent("/question/ajax_question_name_POST", {
				qid: this.qValue
			}), this.reset()
		}))
	},
	setQid: function(a) {
		this.qid = a
	},
	getQid: function() {
		return this.qid
	}
}), TempQuestionSelector = Typeahead.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.setCallback(this.fnbind(function() {
			var a = this.object_id;
			this.qid = this.qValue, this.reset(), this.$("#@temp_question").setContentFromAJAXComponent("/question/ajax_temp_question_POST", {
				qid: this.qid,
				email: a
			}, this.cid, null, this.fnbind(function() {
				this.addToList()
			}))
		}))
	},
	setObjectID: function(a) {
		this.object_id = a
	},
	addToList: function() {
		this.$("#@selector_results").append($("<li/>").addClass("clear").append($("<a/>").attr("href", "#").attr("style", "float:left;padding:0 0 2px;margin:3px 3px 0 0;").addClass("remove").addClass("br3").click(function() {
			return $(this).parent().remove(), !1
		}).append("")).append(this.$("#@temp_question").html())), this.$("#@temp_question").html("")
	}
}), PeopleSelector = Typeahead.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.setCallback(this.fnbind(function() {
			this.to_uid = this.qValue, this.reset(), this.parent().setTo(this.to_uid)
		})), this.parent().allow_selectionless_input && this.setSelectionlessCallback(this.fnbind(function() {
			this.to_uid = this.qValue, this.reset(), this.parent().setTo(this.to_uid)
		}))
	}
}), ContactsSelector = Typeahead.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.setCallback(this.fnbind(function() {
			this.setEmail(this.qValue)
		})), this.allow_selectionless_input && this.setSelectionlessCallback(this.fnbind(function() {
			this.setEmail(this.qValue)
		})), this.trigger_selection_on_blur && this.$("#@input").blur(this.fnbind(function() {
			var a = this.$("#@input").val();
			a && a != this.placeholder && this.setEmail(a)
		})), this.$("#@input").keypress(this.fnbind(function(a) {
			a.which == 13 && (this.$("#@input").attr("focused", !1), this.child("results").hide(), a.preventDefault())
		}))
	},
	setEmail: function(a) {
		this.parent().setTo(a), this.forceReset && this.reset()
	}
}), LinkSelector = Typeahead.extend({
	onLoad: function() {
		this._super.apply(this, arguments);
		var a = this;
		this.simulateScroll = !1, a.$("#@input").keydown(function() {
			if(a._escKeyDown) return a._escKeyDown.apply(this, arguments)
		}), a.$("#@input").keyup(function(b) {
			if(a._keyUp) return a._keyUp.apply(this, arguments)
		})
	},
	setEscKeyDown: function(a) {
		this._escKeyDown = a
	},
	setKeyUp: function(a) {
		this._keyUp = a
	}
}), FeaturedContentLinkSelector = Typeahead.extend({
	onLoad: function() {
		this._super.apply(this, arguments);
		var a = this;
		this.setCallback(this.fnbind(function() {
			this.child("results").hideDropdown()
		})), a.setSelectionlessCallback(function() {
			a.child("results").hideDropdown()
		}), a.$("#@input").keydown(function() {
			if(a._escKeyDown) return a._escKeyDown.apply(this, arguments)
		})
	}
}), TopicPeopleSelector = Typeahead.extend({
	_callback: function() {
		var a = this.qValue.id,
			b = this.qValue.type;
		this.reset(), this.parent().setTo(a, b)
	},
	onLoad: function(a) {
		this._super.apply(this, arguments), this.setCallback(this.fnbind(this._callback)), this.parent().allow_selectionless_input && this.setSelectionlessCallback(this.fnbind(this._callback))
	},
	inputBlur: function() {
		this._super.apply(this, arguments), this.parent().blurSelector()
	}
}), BoardSelector = Typeahead.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.qValue = this.bid ? this.bid : null, this.simulateScroll = !1, this.$("#@fake_input").click(this.fnbind(function() {
			return this.clearInput(), !1
		})), this.setSelectionlessCallback(function() {
			this.child("results").hideDropdown(), this.focusNext()
		}), this.setCallback(this.fnbind(function() {
			var a = this.getBid();
			if(!a) {
				this.$("#@input").css("background", "#fff"), this.focusNext();
				return
			}
			this.swapInput(a)
		})), this.$("#@input").click(this.fnbind(function(a) {
			a.stopPropagation()
		})), this.child("results").$("#@results_frame").click(this.fnbind(function(a) {
			a.stopPropagation()
		})), $(document).click(this.fnbind(function() {
			this.child("results") && this.child("results").hide()
		}))
	},
	inputBlur: function() {
		this.setPlaceholder()
	},
	setInput: function(a) {
		this.setValue(a), this.swapInput(a)
	},
	swapInput: function(a) {
		this.$("#@input_wrapper").hide(), this.$("#@fake_input").show(), this.selectionChosen = !1, this.serverCall("update_preview").kwargs({
			bid: a
		}).contentFor(this.$("#@fake_input"), {
			parentCID: this.cid
		}).send(), this.focusNext()
	},
	focusNext: function() {
		try {
			this.cQuery(":editor.editor") && this.cQuery(":editor").showEditor()
		} catch(a) {}
	},
	resetFakeInput: function() {
		this.qValue = this.initialValue, this.$("#@fake_input").hide(), this.$("#@input_wrapper").show(), this.$("#@input").val(""), this.$("#@input").css("background", "#fff")
	},
	clearInput: function(a) {
		this.resetFakeInput(), this.focus(!0), this.child("results").showDropdown()
	},
	getText: function() {
		var a = this.$("#@input").val();
		return a == this.$("#@input").attr("placeholder") ? null : a
	},
	getBid: function() {
		return isNaN(this.qValue) ? null : this.qValue
	}
}), PeopleAndSocialContactsSelector = Typeahead.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments), this.setCallback(this.fnbind(function() {
			this.result && this.result.text ? this.setUserOrEmail(this.qValue, this.result.text) : this.setUserOrEmail(this.qValue, this.qValue)
		})), this.allow_selectionless_input && this.setSelectionlessCallback(this.callback), this.trigger_selection_on_blur && this.$("#@input").blur(this.fnbind(function() {
			var a = this.$("#@input").val();
			a && a != this.placeholder && this.setUserOrEmail(a, a)
		})), this.$("#@input").keypress(this.fnbind(function(a) {
			a.which == 13 && (this.$("#@input").attr("focused", !1), this.child("results").hide(), a.preventDefault())
		}))
	},
	setUserOrEmail: function(a, b) {
		typeof a == "string" && a.indexOf("@") >= 0 ? this.parent().setEmailTo(a, b) : typeof a == "number" && this.parent().setUserTo(a, b), this.reset()
	}
}), PeopleAndSocialContactsMultiSelector = MultiSelectTypeahead.extend({
	onLoad: function(a) {
		this._super.apply(this, arguments);
		var b = this;
		b.allow_selectionless_input && b.setSelectionlessCallback(b.fnbind(b.setWithoutSelection)), b.trigger_selection_on_blur && b.input.blur(b.fnbind(b.setWithoutSelection))
	},
	setWithoutSelection: function() {
		this.qValue && isValidEmail(this.qValue) === !0 && this.setValue(this.qValue, {
			type: "contact",
			value: this.qValue,
			text: this.qValue
		})
	},
	updateContainer: function() {
		this.lookup("socialTypeaheadContainer").updateResults($.grep(this.results, function(a, b) {
			return typeof a != "undefined" && a.type !== "instruction"
		}))
	}
}), SearchSuggestions = TypeaheadResults.extend({
	hide: function() {
		this.hideDropdown(), this.forceOpenResults || this.setFocusIndex(null)
	},
	goResult: function(a, b) {
		if(this.actionType == "url") windowManager.handleClick(this.actionOfIndex[a], b);
		else {
			if(this.actionType == "value") return this.hide(), this.qValue = this.actionOfIndex[a], this.parent().setValue(this.qValue, this.results[a]), this.parent().updateSearchResultAndPushState(this.qValue), !1;
			assert(0)
		}
	}
}), QuerySuggestionsNavigator = Typeahead.extend({
	onLoad: function() {
		this.qValue = this.initialValue, this.result = null, this.requestOutstanding = !1, this.closed = !1, this.selectionChosen = !1, this.selectionlessCallback = null, this.placeholderActive = !1, this.extraKeydown = null, this.userClicked = !1, this.simulateScroll = !0, this.originalPageTitle = $("title").text();
		var a = this.$("#@input").attr("placeholder");
		this.$("#@input").attr("placeholder", html.decode(a)), this.$("#@view_selector").click(this.fnbind(function() {
			return this.$("#@selector_wrapper").removeClass("hidden"), this.$("#@view_selector_wrapper").addClass("hidden"), this.focus(), !1
		}));
		var b = this;
		b.data || (b.data = {}), b.$("#@input").focus(function() {
			$(this).attr("focused", "true"), b.inputFocus(), b.extraFocus && b.extraFocus()
		}).blur(function() {
			$(this).removeAttr("focused"), b.inputBlur(), b.userClicked = !1
		}).keydown(function(a) {
			return b.inputKeydown(a)
		}).keyup(function(a) {
			return b.inputKeyup(a)
		}).click(function() {
			b.userClicked = !0
		}), window.addEventListener("popstate", function(a) {
			if(b.hasPushed) {
				var c = a.state;
				c == null && (c = ""), b.$("#@input").val(c), b.updateSearchResult(c)
			}
		}), this.setSelectionlessCallback(this.fnbind(function() {
			this.updateSearchResultAndPushState(this.qValue), this.child("results").hide()
		})), this.$("#@search").click(this.fnbind(function() {
			return this.selectionlessCallback(), !1
		})), this.focusOnLoad ? this.focus() : this.setPlaceholder()
	},
	instantQueryResults: function(a, b) {
		this.requestPending = !0, this.nextRequest = undefined, this.nextQuery = undefined;
		var c = (new Date).getTime();
		this.lookup("content").onFetchingNewResults(a), $.ajax({
			type: "GET",
			url: "/ajax/update_search_results",
			dataType: "json",
			data: {
				query: a,
				window_id: b
			},
			success: this.fnbind(function(b) {
				console.log("Time for update_search_results to return: " + ((new Date).getTime() - c));
				var d = (new Date).getTime();
				b.messages.forEach(function(a) {
					(new Function(b.messages[0])).call(window)
				}), this.requestPending = !1, this.nextRequest && this.nextQuery() != a && this.nextRequest()
			}),
			error: this.fnbind(function(a, b, c) {
				this.requestOutstanding = !1, this.nextRequest && this.nextRequest()
			})
		})
	},
	updateSearchResult: function(a) {
		var b = require("webnode2").windowId;
		this.requestPending ? (this.nextQuery = function() {
			return a
		}, this.nextRequest = function() {
			this.instantQueryResults(a, b)
		}) : this.instantQueryResults(a, b), this.close(), this.userClicked = !1
	},
	updateSearchResultAndPushState: function(a) {
		this.updateSearchResult(a), this.hasPushed = !0, history.pushState(a, null, "/search/?q=" + a)
	},
	inputKeydown: function(a) {
		var b = this.$("#@input"),
			c = b.val();
		if(this.simulateScroll && !this.child("results").isVisible() && !this.requestOutstanding && simscroll.maybeSimulateScroll(a) && !this.userClicked) return b.blur(), !1;
		this.closed = !1, simscroll.cancelSimulatedScroll();
		if(a.keyCode == 40) return this.requestOutstanding = !1, this.child("results").down(), !1;
		if(a.keyCode == 38) return this.child("results").up(), !1;
		if(a.keyCode == 27) return this.child("results").hide(), this.userClicked = !1, !1;
		if(a.keyCode == 13) {
			if(this.child("results").go(a)) return !1;
			if(this.selectionlessCallback && this.selectionlessCallback()) return !1
		}
		return this.extraKeydown ? this.extraKeydown(a.keyCode) : !0
	}
}), require.install("typeahead", function() {}), require.install("mobile", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = window.Quora,
		e = require("lang/fun").bind,
		f = require("webnode2"),
		g = require("w2.livenode");
	a.MobileHeader = c.extend({
		onLoad: function() {
			this.org = this.$("#@logo_text").text()
		},
		miniLogo: function() {
			setTimeout(function() {
				window.scrollTo(0, 1)
			}, 0), this.$("#@logo_text").text("Q"), this.$("#@logo").addClass("logo_mini")
		},
		resetLogo: function() {
			this.$("#@logo_text").text(this.org), this.$("#@logo").removeClass("logo_mini")
		}
	}), a.MobileHomeButtons = c.extend({
		onLoad: function() {
			this.org = this.$("#@more").html(), this.$("#@more").click(this.fnbind(function() {
				var a = this.$("#@mobile_more_buttons");
				return a.hasClass("hidden") ? (this.$("#@more").html("Less"), a.removeClass("hidden")) : (this.$("#@more").html(this.org), a.addClass("hidden")), !1
			}))
		}
	})
}), require.install("flash", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2").FlashClient = {};
	a.FlashClient = c.extend({
		onLoad: function(a) {
			if(a) {
				d.onInit = this.delayedFn(this.onFlashInit), d.onComplete = this.fnbind(this.onComplete);
				try {
					require("swfobject").embedSWF(this.swf_url, this.$("#@flash").attr("id"), "1", "1", "10.0.0", null, this.flash_vars, {
						allowScriptAccess: "always"
					}, {
						allowscriptaccess: "always"
					})
				} catch(b) {
					$.serverLog("error in swfobject library: " + b)
				}
			}
		},
		delayedFn: function(a) {
			return this.fnbind(function() {
				var b = arguments;
				setTimeout(this.fnbind(function() {
					a.apply(this, b)
				}), 1)
			})
		},
		onFlashInit: function() {
			try {
				this.getSwf().init(this.so, this.cp, this.fc)
			} catch(a) {
				$.serverLog("unable to call onFlashInit()" + a)
			}
		},
		onComplete: function() {},
		getSwf: function() {
			return this.$("#@flash").get(0)
		}
	})
}), require.install("presence", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("event").add,
		e = require("webnode2"),
		f = require("cookies");
	require("w2.rpc"), a.PresenceEditor = c.extend({
		onLoad: function() {
			this.$("#@menu_link").click(this.fnbind(function(a) {
				return this.$("#@menu").menu(this.$("#@menu_link")), !1
			}))
		}
	}), a.PresenceEditLink = c.extend({
		onLoad: function() {
			this.$("#@set_visibility").click(this.fnbind(function() {
				return this.serverCall("set_visibility").kwargs({
					type: this.type
				}).liveMutate().send(), !1
			}))
		}
	});
	var g = c.extend({
		onLoad: function() {
			if(!this.monitor) return;
			this.disabled = !1;
			var a = this.fnbind(this.onPresence);
			d(document, "mousemove", a), d(document, "keypress", a)
		},
		_kwargs: function() {
			return {}
		},
		onPresence: function() {
			if(this.disabled) return;
			this.disabled = !0, e.rpc(this._action).kwargs(this._kwargs()).send()
		}
	});
	a.ThreadPresenceMonitor = g.extend({
		_action: "/thread/ajax_report_thread_presence_POST",
		_kwargs: function() {
			return {
				thread_id: this.thread_id
			}
		}
	}), a.HomeFeedPresenceMonitor = g.extend({
		_action: "/ajax/ajax_report_home_feed_presence_POST"
	});
	var h;
	a.PresenceZoneMonitor = c.extend({
		onLoad: function() {
			if(!h) $.serverLog("PresenceZoneMonitor cannot add zone because singleton page_monitor is missing");
			else for(var a = 0; a < this.zones.length; a++) h.zones[this.zones[a]] == undefined && (h.zones[this.zones[a]] = {}), h.zones[this.zones[a]][this.cid] = !0
		},
		onUnload: function() {
			if(!h) $.serverLog("PresenceZoneMonitor cannot remove zone because singleton page_monitor is missing");
			else for(var a = 0; a < this.zones.length; a++) {
				h.zones[this.zones[a]] != undefined && delete h.zones[this.zones[a]][this.cid];
				var b = !0;
				for(var c in h.zones[this.zones[a]]) {
					b = !1;
					break
				}
				b && delete page_monitor_zones[this.zones[a]]
			}
		}
	}), a.PresencePageMonitor = c.extend({
		init: function() {
			h = this, this.zones = {}, this.last_activity_time = +(new Date), this.last_connect_time = +(new Date), this.rate_limit_activity_ms = 55e3, this.rate_limit_connect_ms = 6e4
		},
		onLoad: function() {
			var a = this.fnbind(this.reportActivity);
			d(document, "mousemove", a), d(document, "keypress", a), d(document, "scroll", a), setTimeout(this.fnbind(this.reportConnect), this.rate_limit_connect_ms), d(window, "beforeunload", this.fnbind(this.reportDisconnect))
		},
		reportActivity: function() {
			var a = +(new Date);
			if(a < this.last_activity_time + this.rate_limit_activity_ms) return;
			this.last_activity_time = a, this._report(!0)
		},
		reportConnect: function() {
			var a = +(new Date),
				b = Math.max(this.last_activity_time, this.last_connect_time),
				c = a - b,
				d = this.rate_limit_connect_ms - c + 100;
			c > this.rate_limit_connect_ms && (this.last_connect_time = a, this._report(!1), d = this.rate_limit_connect_ms + 100), setTimeout(this.fnbind(function() {
				this.reportConnect()
			}), d)
		},
		_report: function(a) {
			var b = [];
			for(var c in this.zones) b.push(c);
			b.length > 0 && this.serverCall("report").kwargs({
				zones: b,
				is_activity: a
			}).send()
		},
		reportDisconnect: function() {
			var a = !1;
			for(var b in this.zones) {
				a = !0;
				break
			}
			if(a) {
				var c = e.windowId;
				c && f.setMessage("prd", [c])
			}
		}
	})
}), function(a, b) {
	var c = require("w2.quora").Component;
	b.QueryEvaluateDocument = c.extend({
		onLoad: function() {
			var a = this;
			this.$(this.scores).each(function(b) {
				a.$("#@score_" + b).click(function() {
					a.serverCall("record_score").kwargs({
						score: b
					}).liveMutate().send()
				})
			}), a.$("#@report_bad").click(function() {
				a.serverCall("report_bad").liveMutate().send()
			})
		}
	})
}(window.Quora, window), require.install("query_eval", function() {}), require.install("w2.inspector", function(require, a, b) {
	var c = require("webnode2"),
		d = require("w2.quora").Component,
		e = require("w2.timing").timing,
		f = "*ROOT*",
		g = "http://www.corp.quora.com/Performance/What-do-all-these-response-time-metrics-mean-at-the-bottom-of-the-page",
		h = {};

	function i(a) {
		return h[a] || (h[a] = t(a)), h[a]
	}
	var j = {
		removed: {},
		parents: {},
		debugInfo: {}
	},
		k = function(a, b) {
			if(!b) return;
			var d = b;
			j.removed[d] = !0, j.parents[d] = c._parents[d], j.debugInfo[d] = c._debugInfo[d]
		},
		l = function(a) {
			return Math.round(a * 1e3) / 1e3
		},
		m = function(a, b) {
			return b === undefined && (b = 1), typeof a == "number" ? a.toFixed(b) : a
		},
		n = !1,
		o = function(a) {
			var b = c._allChildren[a];
			jb === null && kb(), jb[a] && (b || (b = []), b = b.concat(jb[a]));
			if(n || a === f || !b) return b;
			var d = [];
			for(var e = 0; e < b.length; e++) {
				var g = b[e];
				p(g) && d.push(g)
			}
			return d.length > 0 ? d : undefined
		},
		p = function(a) {
			var b = e._components[a];
			if(b) {
				var c = b.addDebugInfo;
				if(c < e.postOnLoad) return !0
			}
			return !1
		};

	function q(a) {
		return(a.init_adjusted_time + a.tree_adjusted_time + a.js_init_adjusted_time + a.prime_adjusted_time) / 1e3
	}
	var r = {};

	function s(a) {
		if(r[a]) return r[a];
		var b = c._allChildren[a],
			d = {
				path: [],
				cost: 0
			};
		if(typeof b != "undefined") for(var e = 0; e < b.length; e++) {
			if(!p(b[e])) continue;
			var f = s(b[e]);
			f.cost > d.cost && (d = f)
		}
		var g = mb(a);
		return d.path = [a].concat(d.path), g && (d.cost += q(g)), r[a] = d, d
	}
	function t(a) {
		var b = mb(a),
			c = 0,
			d = 0,
			f = 0,
			g = 0,
			h = 0,
			j = 0,
			k = e.components[a];
		k && k.l && (g = k.l);
		if(b) {
			var m = b.prime;
			if(m) for(var n in m) {
				var p = m[n];
				c += p
			}
			b.prime_time_ms = l(c), f = b.init_excl_time_ms + b.tree_excl_time_ms + b.js_init_time_ms + b.prime_time_ms, d = q(b), isNaN(d) && (d = -1), h = j = b.html_size
		}
		var r = f,
			s = 1,
			t = o(a),
			u = 0,
			v = g;
		if(t) for(var w = 0; w < t.length; w++) {
			var x = t[w],
				y = i(x);
			r += y.time, s += y.components, v += y.onLoadIncl, h += y.htmlSizeIncl
		}
		return {
			adjusted: l(d),
			time: l(r),
			exclusive: l(f),
			components: s,
			onLoadIncl: l(v),
			onLoadExcl: l(g),
			htmlSizeIncl: h / 1024,
			htmlSizeExcl: j / 1024
		}
	}
	var u = {
		adjusted: "Time taken by component function calls not spent in I/O operations.",
		inclusive: "Time taken by component and descendants (component's exclusive + total inclusive time of child components)",
		exclusive: "Time taken by the component itself (tree_excl + init_excl + js_init + prime)",
		treeExcl: "Time spent exclusively in the tree method of the component, excluding any time spent in calls made by child components",
		treeIncl: "Total time spent in the tree method (from invocation till exit)",
		initExcl: "Time spent exclusively in the init method of the component, excluding any time spent in calls made by child components",
		initIncl: "Total time spent in the init method (from invocation till exit)",
		jsInit: "Total time spent in the js_init method (from invocation till exit)",
		prime: "Total time spent in the prime methods",
		count: "Number of instances of this component type",
		average: "Average time taken by each component instance (value in previous column divided by number of instances)",
		childComponent: "Component id of child component",
		components: "Total number of components in the subtree rooted at the current component (1 + total number of descendants)",
		"class": "Type of the component",
		cid: "Component id",
		onLoadIncl: "Time taken by the onLoad methods on the client side by the current component and descendants",
		onLoadExcl: "Time taken by the onLoad methods on the client side by the current component",
		htmlSizeIncl: "Size (in characters) of HTML code of a current component and its descendants",
		htmlSizeExcl: "Size (in characters) of HTML code of a current component"
	},
		v = [
			["Id", "cid", "cid"],
			["Class", "type", "class"],
			["Components", "components", "components"],
			["Oplog", "oplog", "oplog", "nosort"],
			["Worker ID", "worker_id", "worker_id", "nosort"],
			["Adjusted", "adjusted", "adjusted"],
			["Inclusive", "total", "inclusive"],
			["Exclusive", "exclusive", "exclusive"],
			["Html Incl", "htmlSizeIncl", "htmlSizeIncl"],
			["Tree Incl", "treeIncl", "treeIncl"],
			["Tree Excl", "treeExcl", "treeExcl"],
			["Init Incl", "initIncl", "initIncl"],
			["Init Excl", "initExcl", "initExcl"],
			["JsInit", "jsInit", "jsInit"],
			["Prime", "prime", "prime"],
			["OnLoad Incl", "onLoadIncl", "onLoadIncl"],
			["OnLoad Excl", "onLoadExcl", "onLoadExcl"]
		],
		w = {},
		x = [
			["Name", "name", "class"],
			["Count", "num", "count"],
			["Adjusted", "adjusted", "adjusted"],
			["Avg", "adjustedAvg", "average"],
			["Inclusive", "total", "inclusive"],
			["Avg", "totalAvg", "average"],
			["Exclusive", "exclusive", "exclusive"],
			["Avg", "exclusiveAvg", "average"],
			["Tree Incl", "treeIncl", "treeIncl"],
			["Avg", "treeInclAvg", "average"],
			["Tree Excl", "treeExcl", "treeExcl"],
			["Avg", "treeExclAvg", "average"],
			["Init Incl", "initIncl", "initIncl"],
			["Avg", "initInclAvg", "average"],
			["Init Excl", "initExcl", "initExcl"],
			["Avg", "initExclAvg", "average"],
			["JsInit", "jsInit", "jsInit"],
			["Avg", "jsInitAvg", "average"],
			["Prime", "prime", "prime"],
			["Avg", "primeAvg", "average"],
			["OnLoad Incl", "onLoadIncl", "onLoadIncl"],
			["Avg", "onLoadInclAvg", "average"],
			["OnLoad Excl", "onLoadExcl", "onLoadExcl"],
			["Avg", "onLoadExclAvg", "average"]
		],
		y = function(a, b) {
			if(!b.data("original")) {
				b.wrap("<div style='position:relative'></div>");
				var c = $("tr:first", b);
				c.before(c.clone(!0));
				var d = $("tr:first", b);
				d.css("position", "absolute"), d.css("top", "0px"), d.css("left", b.css("margin-left")), d.css("visibility", "hidden"), b.data("original", c), b.data("cloned", d)
			}
			var c = b.data("original"),
				e = b.data("cloned"),
				f = b.offset(),
				g = $(a).scrollTop();
			g > f.top && g < f.top + b.height() ? (e.css("visibility", "visible"), e.css("top", Math.min(g - f.top, b.height() - e.height()) + "px"), $("th", e).each(function(a) {
				var b = $("th", c).eq(a),
					d = $("div", b),
					e = d.css("width");
				$(this).css("width", e), $("div", this).css("width", e)
			}), e.css("width", b.css("width"))) : (e.css("visibility", "hidden"), e.css("top", "0px"))
		},
		z = "        table {             border-collapse: collapse;         }         tr.even {             background-color: white;         }         tr.odd {             background-color: rgb(234, 236, 239);         }         tr.header {             background-color: rgb(242, 240, 229);         }         th, td {             border: 1px lightgray solid;             padding: 5px;             line-height: 1em;         }         td {         }         td.tree {             font-size: 1.2em;            padding: 1px;             font-family: Courier New;             white-space: nowrap;         }         .oplog {             font-size: 0.8em;            padding-left: 15px;             font-family: Courier New;             color: black;         }         .oplog_link {             font-weight: bold;             color: #0000FF;         }         span.text {             font-size: 10pt;             line-height: 1em;             font-family: Arial;         }         span.expensive {             color: red;         }         td.number {             text-align: right;             font-size: 0.8em;         }         .arrow {             cursor: pointer;         }         span.symbol {             color: darkgray;         }         span.percent {             color: rgb(128, 128, 128);             font-size: 0.9em;             line-height: 1em;         }         td.text {             padding: 1px 5px;         }         td.pre_percent {             border-right: 0px;         }         td.percent {             border-left: 0px;         }     ",
		A = function(a) {
			return a % 2 ? "odd" : "even"
		},
		B = {
			total: !0,
			totalAvg: !0,
			exclusive: !0,
			exclusiveAvg: !0
		},
		C = {
			htmlSizeIncl: !0
		},
		D = function(a, b, c, d) {
			if(!(c in B)) return;
			a.push("<td class='number percent'>");
			if(d !== undefined) {
				var e = b.total,
					f = (d / b.total * 100).toFixed(1);
				a.push("<span class='percent'>" + f + "%</span>")
			}
			a.push("</td>")
		},
		E = function(a, b) {
			var c = function() {
					var b = "Include ";
					n && (b = "Exclude"), a.text(b + " post-page-load components")
				},
				d = function() {
					return n = !n, c(), b(), !1
				};
			a.click(d), c()
		},
		F = function(a, b, c, d, e, f, h, i, j, k, l, m) {
			var n = !1;
			if(!d.window || d.window.closed) d.window = window.open(), n = !0;
			var o = d.window;
			o.focus();
			if(!n && !j) return !1;
			$(o.document.body).empty();
			var p = b.replace(/<b>/g, "").replace(/<\/b>/g, "");
			o.document.title = a + " (" + p + ")";
			var q = !1,
				r = $("<table>"),
				s = function() {
					q || ($(o).scroll(s), $(o).resize(s), q = !0), y(o, r)
				};
			r.data("updateTable", s);
			var t = $("<tr class='header'>");
			r.append(t);
			for(var v = 0; v < c.length; v++)(function() {
				var a = c[v],
					b = a[0],
					g = a[1],
					h = "";
				a.length > 2 && (h = u[a[2]]);
				var i = g === d.sortKey,
					j = d.sortAsc;
				i && (b = (j ? "▲" : "▼") + b);
				var k = $("<th>");
				g in B && k.attr("colspan", 2), t.append(k);
				var l = $("<a>");
				a.length > 3 && a[3] == "nosort" ? l.text(b).attr("title", h) : l.text(b).attr("href", "#").attr("title", h).click(function() {
					return e(d, g, i ? !j : !1), f(!0), !1
				}), k.append($("<div>").append(l))
			})();
			$("head", o.document).append($("<style type='text/css'>").html(z));
			var w = $(o.document.body);
			w.append($("<h4>").html(a)), w.append($("<p>").html(b + " (<a target='_blank' href='" + g + "'>definitions</a>)")), f === h ? w.append("Flat view") : w.append($("<a>").attr("href", "#").text("Flat view").click(function() {
				return h(), !1
			})), w.append(" "), f === i ? w.append("Tree view") : w.append($("<a>").attr("href", "#").text("Tree view").click(function() {
				return i(), !1
			})), w.append(" (" + k + ": "), w.append($("<a>").attr("href", "#").text("Flat view").click(function() {
				return l(), !1
			})), w.append(" "), w.append($("<a>").attr("href", "#").text("Tree view").click(function() {
				return m(), !1
			})), w.append(")"), w.append(" ");
			var x = $("<a>").attr("href", "#");
			return w.append(x), E(x, function() {
				ib(), f(!0)
			}), w.append($("<br>")), w.append(r), r
		},
		G, H = function() {
			if(G !== undefined) return G;
			G = 0;
			for(var a in c._debugInfo) {
				var b = mb(a);
				if(b) {
					var d = b.prime_flush;
					d !== undefined && (G += d)
				}
			}
			return G = l(G), G
		},
		I = function() {
			var a = H(),
				b = i(f).time,
				c = e.page,
				d = e.request,
				g = e.webserver,
				h = e.longestpath,
				j = require("settings").isParallel;
			return j ? g + " / <b>page.py</b>: " + c + " / <b>request</b>: " + d + " " + (typeof h == "undefined" ? "" : ' / <font color="red"><b>longest path</b>: ' + h + "</font> ") : g + " / <b>prime_flush</b>: " + a + " / <b>" + f + "</b>: " + b + " / <b>page.py</b>: " + c + " / <b>request</b>: " + d + " "
		},
		J = function(a) {
			V();
			var b = w,
				c = b.data,
				d = "Component Types Listing (" + c.length + " component types) on " + document.location.href,
				e = I(),
				f = x;
			S(d, e, f, b, X, J, J, Z, a, "Component Instances", L, O)
		},
		K = {},
		L = function(a) {
			M();
			var b = K,
				c = b.data,
				d = "Component Instances Listing (" + c.length + " components) on " + document.location.href,
				e = I(),
				f = v;
			S(d, e, f, b, X, L, L, O, a, "Component Types", J, Z)
		},
		M = function() {
			if(K.computed) return;
			var a = [];
			for(var b in nb()) {
				if(!n && !p(b)) continue;
				var c = Q(b);
				a.push(c)
			}
			var d = i(f);
			K.data = a, K.total = d.time, K.computed = !0, X(K, "total", !1)
		},
		N = {},
		O = function(a) {
			P();
			var b = N.count,
				c = "Component Instances Tree (" + b + " components) on " + document.location.href,
				d = I(),
				e = v;
			_(c, d, e, N, db, O, L, O, a, "Component Types", J, Z)
		},
		P = function() {
			function a(b, c) {
				var d = Q(c);
				d = d ? d : {}, b.rows.push(d);
				var e = o(c);
				if(!e) return;
				d.rows = [];
				for(var f = 0; f < e.length; f++) {
					var g = e[f];
					a(d, g)
				}
			}
			if(N.computed) return;
			var b = N;
			b.rows = [], a(b, f);
			var c = i(f);
			N.total = c.time, N.count = cb(N), N.computed = !0, db(N, "total", !1)
		},
		Q = function(a) {
			var b = mb(a),
				c = i(a),
				d = b ? b.py_class : undefined;
			a === f ? d = f : lb(a) && (a += " (Unloaded)");
			var e = !1,
				g = s(f);
			for(var h = 0; h < g.path.length; h++) g.path[h] == a && (e = !0);
			var j = undefined;
			if(b && b.oplog && b.oplog.length > 0) {
				var k = a + "_oplog";
				j = " <div id='" + k + "' class='oplog_link''>(show)", j += "<div id='" + k + "_data' class='oplog' style='display: none; white-space: nowrap;'>";
				for(var h = 0; h < b.oplog.length; h++) j += b.oplog[h] + "<br />";
				j += "</div></div>"
			}
			var m = {
				onExpensivePath: e,
				oplog: j,
				worker_id: b ? b.worker_id ? b.worker_id.toString() : undefined : undefined,
				cid: a,
				type: b ? d : undefined,
				components: c.components,
				adjusted: c.adjusted,
				total: c.time,
				exclusive: a === f ? c.time : c.exclusive,
				htmlSizeIncl: c.htmlSizeIncl,
				treeIncl: b ? l(b.tree_incl_time_ms) : undefined,
				treeExcl: b ? l(b.tree_excl_time_ms) : undefined,
				initIncl: b ? l(b.init_incl_time_ms) : undefined,
				initExcl: b ? l(b.init_excl_time_ms) : undefined,
				jsInit: b ? l(b.js_init_time_ms) : undefined,
				prime: b ? l(b.prime_time_ms) : undefined,
				onLoadIncl: c.onLoadIncl,
				onLoadExcl: c.onLoadExcl
			};
			return m
		},
		R = function(a) {
			a.click(function(a) {
				var b = $(a.target);
				b.hasClass("oplog_link") && b.children().first().toggle()
			})
		},
		S = function(a, b, c, d, e, f, g, h, i, j, k, l) {
			function o() {
				var a = d.data,
					b = [];
				for(var e = 0; e < a.length; e++) {
					var f = a[e],
						g = A(e),
						h = ["<tr class='" + g + "'>"];
					for(var i = 0; i < c.length; i++) {
						var j = c[i][1],
							k = f[j],
							l = typeof k == "string";
						if(l) h.push("<td class='text'>"), h.push("<span class='text'>");
						else {
							var o = "number";
							j in B && (o += " pre_percent"), h.push("<td class='" + o + "'>")
						}
						k = m(k, j in C ? 3 : undefined), h.push(k), l && h.push("</span>"), h.push("</td>"), D(h, d, j, k)
					}
					b.push(h.join(""))
				}
				n.append(b.join("")), n.data("updateTable")(), R(n)
			}
			var n = F(a, b, c, d, e, f, g, h, i, j, k, l);
			if(!n && !i) return;
			ab(n, o, i)
		},
		T = function(a, b, c) {
			var d = mb(b),
				e = i(b),
				g = d ? d.py_class : undefined;
			b === f && (g = f);
			var h = {
				name: g,
				num: d ? 1 : undefined,
				adjusted: e.adjusted,
				total: e.time,
				exclusive: b === f ? e.time : e.exclusive,
				treeIncl: d ? l(d.tree_incl_time_ms) : undefined,
				treeExcl: d ? l(d.tree_excl_time_ms) : undefined,
				initIncl: d ? l(d.init_incl_time_ms) : undefined,
				initExcl: d ? l(d.init_excl_time_ms) : undefined,
				jsInit: d ? l(d.js_init_time_ms) : undefined,
				prime: d ? l(d.prime_time_ms) : undefined,
				onLoadIncl: e.onLoadIncl,
				onLoadExcl: e.onLoadExcl,
				cids: [b]
			},
				j = a[g];
			if(j) for(var k in h) {
				if(k === "name" || j[k] === undefined) continue;
				k === "cids" ? j[k] = j[k].concat(h[k]) : j[k] = l(j[k] + h[k])
			} else a[g] = h, c.push(h)
		},
		U = function(a) {
			for(var b = 0; b < a.length; b++) {
				var c = a[b],
					d = ["adjusted", "total", "exclusive", "treeIncl", "treeExcl", "initIncl", "initExcl", "jsInit", "prime", "onLoadIncl", "onLoadExcl"];
				for(var e = 0; e < d.length; e++) {
					var f = d[e],
						g = f + "Avg",
						h = c[f];
					if(h !== undefined && c.num !== undefined) {
						var i = l(h / c.num);
						c[g] = i
					} else c[g] = undefined
				}
			}
		},
		V = function() {
			if(w.computed) return;
			var a = {},
				b = [];
			for(var c in nb()) {
				if(!n && !p(c)) continue;
				T(a, c, b)
			}
			var d = i(f);
			U(b), w.total = d.time, w.data = b, w.computed = !0, X(w, "total", !1)
		},
		W = function(a, b, c) {
			var d = typeof a[0][b] == "string";
			a.sort(function(a, e) {
				var f = a[b],
					g = e[b];
				return d ? f < g ? c ? -1 : 1 : f === g ? 0 : c ? 1 : -1 : (c ? 1 : -1) * (f - g)
			})
		},
		X = function(a, b, c) {
			a.sortKey = b, a.sortAsc = c;
			var d = a.data;
			W(d, b, c)
		},
		Y = {},
		Z = function(a) {
			bb();
			var b = Y.count,
				c = "Component Types Tree (" + b + " rows) on " + document.location.href,
				d = I(),
				e = x;
			_(c, d, e, Y, db, Z, J, Z, a, "Component Instances", L, O)
		},
		_ = function(a, b, c, d, e, f, g, h, i, j, k, l) {
			function u(a, b, c) {
				var d = a,
					e = o[d],
					f = e.depth;
				b(e), d++;
				while(d < p) {
					e = o[d];
					if(e.depth <= f) break;
					c(e), d++
				}
				return d
			}
			function v(a, b) {
				a.expanded = b, s(a)
			}
			function w(a) {
				function c(b) {
					var c = b.tr;
					a ? z(c) : y(c), v(b, a)
				}
				var b = 0;
				while(b < p) b = u(b, function(b) {
					v(b, a)
				}, c);
				t()
			}
			function x(a, b, c) {
				var d = a,
					e = o[d],
					f = e.expanded,
					g = e.depth;
				f = !f, e.expanded = f, e.index = d, s(e);
				var h = b.next();
				e = o[++d];
				while(h.length && e.depth > g) {
					if(f) {
						z(h);
						if(e.hasChildren && !e.expanded) {
							var i = e.depth;
							h = h.next(), e = o[++d];
							while(h.length && e.depth > i) h = h.next(), e = o[++d];
							continue
						}
					} else y(h);
					h = h.next(), e = o[++d]
				}
				t()
			}
			function y(a) {
				a.css("display", "none")
			}
			function z(a) {
				a.css("display", "")
			}
			function G(a, b, e, f) {
				function g(a, c, d) {
					function e() {
						var a = "<span class='symbol'>";
						for(var c = 0; c < b; c++) a += q[c] ? "&nbsp;" : "│";
						return q[b] ? a += "└" : a += "├", a
					}
					var f = ["<td class='tree'>"];
					f.push(e());
					if(a) {
						var g = "<span class='arrow'>";
						f.push(g), f.push(r(d.expanded)), f.push("</span>")
					} else f.push("─");
					return f.push("</span>"), d.onExpensivePath ? f.push("<span class='text expensive'> ") : f.push("<span class='text'> "), f.push(c), f.push("</span>"), f.push("</td>"), f.join("")
				}
				function h(a) {
					o.push(a);
					var h = e ? "display: none;" : "",
						i = "",
						j = "";
					e || (E++, j = " class='" + A(E) + "'");
					var k = "style='" + h + "'",
						l = ["<tr id='" + p + "' " + k + " " + j + ">"],
						n = "rows" in a;
					a.depth = b, a.expanded = b === 0, a.hasChildren = n, l.push(g(n, a[c[0][1]], a));
					for(var q = 1; q < c.length; q++) {
						var r = c[q][1],
							s = a[r],
							t = typeof s == "string";
						if(t) l.push("<td class='text'>"), l.push("<span class='text'>");
						else {
							var u = "number";
							r in B && (u += " pre_percent"), l.push("<td class='" + u + "'>")
						}
						s = m(s, r in C ? 3 : undefined), l.push(s), D(l, d, r, s), t && l.push("</span>"), l.push("</td>")
					}
					l.push("</tr>"), f.push(l.join("")), p++, n && G(a.rows, b + 1, b > 0, f)
				}
				q.push(!1);
				for(var i = 0; i < a.length; i++) {
					var j = a[i];
					i === a.length - 1 && (q[q.length - 1] = !0), h(j)
				}
				q.pop()
			}
			function H(a) {
				a.click(function(a) {
					var b = $(a.target);
					if(b.hasClass("arrow")) {
						var c = b.parents("tr"),
							d = parseInt(c.attr("id"));
						x(d, c, b)
					}
				})
			}
			function I() {
				var a = $("#0", n);
				for(var b = 0; b < p; b++) {
					var c = o[b];
					c.tr = a, c.arrow = $(".arrow", a), a = a.next()
				}
				n.before($("<a>").attr("href", "#").text("Expand all").click(function() {
					return w(!0), !1
				})), n.before(" "), n.before($("<a>").attr("href", "#").text("Collapse all").click(function() {
					return w(!1), !1
				}))
			}
			function J() {
				var a = [];
				G(d.rows, 0, !1, a), n.append(a.join("")), I(), n.data("updateTable")(), R(n), H(n)
			}
			var n = F(a, b, c, d, e, f, g, h, i, j, k, l);
			if(!n && !i) return;
			var o = [],
				p = 0,
				q = [],
				r = function(a) {
					return a ? "▿" : "▹"
				},
				s = function(a) {
					a.hasChildren && a.arrow.text(r(a.expanded))
				},
				t = function() {
					var a = 0;
					for(var b = 0; b < p; b++) {
						var c = o[b],
							d = c.tr;
						d.is(":visible") && (d.attr("class", A(a)), a++)
					}
				},
				E = 0;
			ab(n, J, i)
		},
		ab = function(a, b, c) {
			if(c) {
				b();
				return
			}
			a.hide();
			var d = $("<div>").text("Loading, please wait ...");
			a.before(d), setTimeout(function() {
				b(), a.show(), d.remove()
			}, 10)
		},
		bb = function() {
			function a(b, c) {
				T(b.childrenDict, c, b.rows);
				var d = o(c);
				if(!d) return;
				var e = c === f ? c : mb(c).py_class,
					g = b.childrenDict[e];
				"childrenDict" in g || (g.childrenDict = {}, g.rows = []);
				for(var h = 0; h < d.length; h++) {
					var i = d[h];
					a(g, i)
				}
			}
			function e(a) {
				U(a);
				for(var b = 0; b < a.length; b++) {
					var c = a[b];
					"rows" in c && e(c.rows)
				}
			}
			if(Y.computed) return;
			var b = {
				childrenDict: {},
				rows: []
			},
				c = Y;
			c.childrenDict = {}, c.rows = [], a(c, f);
			var d = i(f);
			Y.total = d.time, e(Y.rows), Y.count = cb(Y), Y.computed = !0, db(Y, "total", !1)
		},
		cb = function(a) {
			function b(a) {
				var c = a.length;
				for(var d = 0; d < a.length; d++) {
					var e = a[d];
					"rows" in e && (c += b(e.rows))
				}
				return c
			}
			return b(a.rows)
		},
		db = function(a, b, c) {
			function d(a) {
				W(a, b, c);
				for(var e = 0; e < a.length; e++) {
					var f = a[e];
					"rows" in f && d(f.rows)
				}
			}
			a.sortKey = b, a.sortAsc = c, d(a.rows)
		},
		eb = [
			["Child component", "childComponent"],
			["Class", "class"],
			["Adjusted", "adjusted"],
			["Inclusive", "inclusive"],
			["Exclusive", "exclusive"],
			["Components", "components"],
			["Html Incl", "htmlSizeIncl"],
			["Tree Incl", "treeIncl"],
			["Tree Excl", "treeExcl"],
			["Init Incl", "initIncl"],
			["Init Excl", "initExcl"],
			["JsInit", "jsInit"],
			["Prime", "prime"],
			["OnLoad Incl", "onLoadIncl"],
			["OnLoad Excl", "onLoadExcl"]
		],
		fb = "border: 1px lightgray solid; padding: 1px;",
		gb = "text-align: right",
		hb = function(a) {
			var b = o(a),
				c = "";
			if(b) {
				var d = [];
				for(var e = 0; e < b.length; e++) {
					var f = b[e],
						g = i(f);
					d.push({
						cid: f,
						info: g
					})
				}
				d.sort(function(a, b) {
					return b.info.time - a.info.time
				}), c = $("<table style='font-size: 0.8em; border-collapse: collapse'>");
				var h = $("<tr>");
				for(var e = 0; e < eb.length; e++) {
					var j = eb[e][0],
						k = u[eb[e][1]];
					h.append($("<th style='" + fb + "'>").attr("title", k).text(j))
				}
				c.append(h);
				for(var e = 0; e < d.length; e++) {
					var f = d[e].cid,
						g = d[e].info,
						l = mb(a),
						n = l.py_class;
					l.live_class && (n += " (" + l.live_class + ")");
					var p = [f, n, g.adjusted, g.time, g.exclusive, g.components, g.htmlSizeIncl, l.tree_incl_time_ms, l.tree_excl_time_ms, l.init_incl_time_ms, l.init_excl_time_ms, l.js_init_time_ms, l.prime_time_ms, g.onLoadIncl, g.onLoadExcl],
						q = $("<tr>");
					for(var r = 0; r < p.length; r++) {
						var s = p[r],
							t = fb,
							v = undefined;
						typeof s == "number" && (t += gb, r == 6 && (v = 3)), q.append($("<td style='" + t + "'>").text(m(s, v)))
					}
					c.append(q)
				}
			}
			return c
		},
		ib = function() {
			h = {}, K = {
				window: K.window
			}, N = {
				window: N.window
			}, w = {
				window: w.window
			}, Y = {
				window: Y.window
			}, jb = null
		},
		jb = null,
		kb = function() {
			jb = {};
			var a = j.parents;
			for(var b in a) {
				var c = a[b];
				jb[c] || (jb[c] = []), jb[c].push(b)
			}
		},
		lb = function(a) {
			return j.removed[a]
		},
		mb = function(a) {
			var b = c._debugInfo[a];
			return b ? b : j.debugInfo[a]
		},
		nb = function() {
			var a = {};
			for(var b in c._debugInfo) a[b] = !0;
			for(var b in j.debugInfo) a[b] = !0;
			return a
		},
		ob;
	a.ComponentInspector = d.extend({
		init: function() {
			this._super.apply(this, arguments), this._lastHighlightedCID = null, this._lastNodeOver = null
		},
		_ANNOTATION_ATTR: null,
		_labelId: "__w2inspector_label",
		_turnOffLinkId: "__w2inspector_label_turn_off_link",
		_moreLinkId: "__w2inspector_label_more_link",
		_showComponentTypesId: "__w2inspector_label_show_component_types",
		_showComponentsId: "__w2inspector_label_show_components",
		onLoad: function() {
			function g(a, b) {
				e.on([a], function() {
					if(f._active) return b.apply(f, arguments)
				})
			}
			ob = this, $("body").append($('<div id="' + this._labelId + '" class="' + this._labelId + '"> </div>').hide()), this.$("#@page_timing").click(this.fnbind(function(a) {
				return J(), !1
			})), this._active = !1;
			var a = this.$("#@toggle").click(this.fnbind(function(a) {
				return this.toggle(), !1
			})),
				b = this.$("#@gadget_toggle").click(this.fnbind(function(a) {
					return this.gadgetOn(), !1
				}));
			require("keystrokes").on([71, 53, 71, 53], this.fnbind(this.gadgetOn));
			var d = this.fnbind(function() {
				this.$("#@show_component_timings").show();
				var a = [
					["show_component_types_flat", J],
					["show_component_types_tree", Z],
					["show_component_instances_flat", L],
					["show_component_instances_tree", O]
				],
					b = this.fnbind(function(a) {
						var b = a[0],
							c = a[1];
						this.$("#@" + b).click(function() {
							return c(), !1
						})
					});
				for(var c = 0; c < a.length; c++) {
					var d = a[c];
					b(d)
				}
			});
			this._showMore = !1, this.show_link && (a.show(), b.show(), d()), this.$("#@on_msg").show();
			var e = require("keystrokes"),
				f = this;
			e.on([87, 50, 87, 50], function() {
				f.toggle()
			}), e.on([67, 50, 67, 50], function() {
				f.toggleColorMap()
			}), g(81, this.off), g(27, this.off), g(70, function() {
				var a = this._lastHighlightedCID;
				$("[" + this._ANNOTATION_ATTR + "=" + a + "]").effect("highlight", 1e3)
			}), g(80, function() {
				var a = this._lastHighlightedCID,
					b = c._parents[a];
				this.unhighlightCID(a), this.highlightCID(b, this._lastHighlightEvent)
			}), g(84, function() {
				var a = this._lastHighlightedCID;
				a ? (window.this_ = c._components[a], window.this_ ? console.info("`this_` is now set to the JS Component for cid " + a) : (window.this_ = c._safeGetComponentByCID(a), console.warn("No JS Component exists for cid " + a + " so `this_` is being set to a VirtualComponent"))) : console.error("Move the mouse over a Component and hit the 'T' key to set `this_` to be the JS Component for that Component"), this._lastHighlightedCID && (window.cid_ = this._lastHighlightedCID, console.log("window.cid_ now set to " + window.cid_))
			}), g(72, function() {
				a1ert("Component Inspector Help\n\nF=flash, T=this_=this, Q|[ESC]=close, H=help, M=more/less\n\nType 'w2w2' anytime to turn the Inspector on or off, or use the link at the bottom of the page.")
			}), g(77, this.toggleMore), $(document).bind("webnode_before_remove_child_component_metadata", k)
		},
		addLinks: function(a) {
			var b = [
				[this._turnOffLinkId, "Turn off"],
				[this._moreLinkId, this.getMoreLinkText()],
				[this._showComponentTypesId, "Component types"],
				[this._showComponentsId, "Component instances"]
			];
			for(var c = 0; c < b.length; c++) {
				var d = b[c][0],
					e = b[c][1],
					f = $("<a>").attr("href", "#").attr("id", d).text(e).css("padding-left", "10px");
				a.append(f)
			}
		},
		topLevelChildren: function(a) {
			var b = $("[" + this._ANNOTATION_ATTR + "=" + a + "]"),
				c = this,
				d = b.get().filter(function(b) {
					return !b.parentNode || b.parentNode.getAttribute(c._ANNOTATION_ATTR) != a
				});
			return d
		},
		inclusiveSize: function(a) {
			var b = this.topLevelChildren(a),
				c = 0;
			return b.forEach(function(a) {
				c += a.offsetHeight * a.offsetWidth
			}), c
		},
		weightedInclusiveTime: function(a) {
			var b = this.inclusiveSize(a),
				c = i(a).time;
			return b == 0 ? -1 : c < 10 ? 0 : c / b
		},
		hexColor: function(a) {
			var b = window.innerWidth * window.innerHeight,
				c = b / 48e4,
				d = a * c,
				e = .00125,
				f = Math.ceil(255 * Math.max(1 - d / (10 * e), 0));
			return "rgba(255, " + f + ", " + f + ", 1.0)"
		},
		addColor: function(a) {
			var b = this.weightedInclusiveTime(a);
			if(b == -1) return;
			var c = this.hexColor(b),
				d = this.topLevelChildren(a);
			d.forEach(function(a) {
				a.originalBackgroundColor == undefined && (a.originalBackgroundColor = a.style.background), a.style.background = c
			})
		},
		removeColor: function(a) {
			var b = this.topLevelChildren(a);
			b.forEach(function(a) {
				a.originalBackgroundColor != undefined && (a.style.background = a.originalBackgroundColor)
			})
		},
		toggleColorMap: function() {
			var a = this;
			a.isColorMapped ? $.each(c._debugInfo, function(b, c) {
				a.removeColor(b)
			}) : $.each(c._debugInfo, function(b, c) {
				a.addColor(b)
			}), a.isColorMapped = !a.isColorMapped
		},
		highlightCID: function(a, b) {
			var d = b.target,
				e = $("[" + this._ANNOTATION_ATTR + "=" + a + "]");
			e.addClass("__w2inspector_highlight");
			var f = e.offset(),
				g = c._components[a],
				h = b.pageY - 80;
			h < 0 && (h = b.pageY + 10);
			var j = function(b) {
					return b.substr(0, 13) == "__w2inspector" ? "" : (b.substr(0, 5 + a.length) == "__w2_" + a && (b = "@" + b.substr(6 + a.length)), b)
				},
				k = d.tagName,
				n, p;
			if(n = d.id) k += " id=" + j(n);
			if(p = d.className) if(p = $.map(p.split(/\s+/), j).join(" ").replace(/^\s+|\s+$/g, "")) k += " class=" + p;
			var q = $("<div></div>"),
				r = c._debugInfo[a],
				s = a,
				t = null;
			r && (t = r.inst, r.live_class ? s = r.py_class + " (" + r.live_class + ")" : s = r.py_class, s += " <span style='color: gray;'>" + a + "</span"), q.append($("<h2>" + s + "</h2>")), t && q.append($("<pre style='font-size: 0.7em;'></pre>").addClass("__w2inspector_code").text(t)), this.addLinks(q);
			if(r && r.src_url) {
				var v = r.src_url;
				r.src_url == "*INFO*" && (v = "javascript:alert('This will let you open components directly in TextMate/Sublime/whatever you use on your laptop. To configure it (once you have set up a remotely mounted filesystem, add a line like\\n\\nCLIENT_ANS_ROOT = \"/Volumes/ec2-204-236-190-45.us-west-1.compute.amazonaws.com/ans\"\\n\\nto your $ANS_ROOT/web/lib/a/config.py\\n\\nOr to disable this link with instructions, add the line\\n\\nCLIENT_ANS_ROOT = False');");
				var w = $("<a>").attr("href", v).text("Open in Editor").css("padding-left", "10px");
				q.append(w)
			}
			var x = $("<div><hr></hr></div>");
			g && x.append($("<h4>JS init data</h4>")).append($("<div></div>").addClass("__w2inspector_small_code").text(JSON.stringify(g.__data))), x.append($("<h4>Named Children</h4>")).append($("<div></div>").addClass("__w2inspector_small_code").text(JSON.stringify(c._children[a]))), x.append($("<h4>All Children</h4>")).append($("<div></div>").addClass("__w2inspector_small_code").text(JSON.stringify(o(a)))), x.append($("<h4>Knows About</h4>")).append($("<div></div>").addClass("__w2inspector_small_code").text(JSON.stringify(c._knowsAbout[a]))), x.append($("<h4>Parent</h4>")).append($("<div></div>").addClass("__w2inspector_small_code").text(c._parents[a])), this._showMore && q.append(x);
			if(r) {
				var y = i(a);
				this._showMore && (q.append($("<h4>Total number of descendants</h4>")), q.append($("<div>").addClass("__w2inspector_small_code").text(y.components - 1))), q.append($("<hr></hr>")).append($("<h4>Timing (ms)</h4>"));
				var z = function() {
						function a(a, b, c, d) {
							c || (c = "");
							var e = fb;
							return typeof b == "number" && (e += gb), b = m(b, d), "<" + a + " style='" + e + "' " + c + ">" + b + "</" + a + ">"
						}
						var b = ["<table style='border-collapse: collapse; font-size: 0.8em'>"];
						b.push("<tr>"), b.push(a("th", "")), b.push(a("th", "Total")), b.push(a("th", "Tree")), b.push(a("th", "Init")), b.push(a("th", "Prime")), b.push(a("th", "JsInit")), b.push(a("th", "OnLoad")), b.push(a("th", "Html Size")), b.push("</tr>"), b.push("<tr>"), b.push(a("th", "Incl")), b.push(a("td", y.time, "title='" + u.inclusive + "'")), b.push(a("td", r.tree_incl_time_ms, "title='" + u.treeIncl + "'")), b.push(a("td", r.init_incl_time_ms, "title='" + u.initIncl + "'")), b.push(a("td", r.prime_time_ms, "title='" + u.prime + "' rowspan='2'")), b.push(a("td", r.js_init_time_ms, "title='" + u.jsInit + "' rowspan='2'")), b.push(a("td", y.onLoadIncl, "title='" + u.onLoadIncl + "'")), b.push(a("td", y.htmlSizeIncl, "title='" + u.htmlSizeIncl + "'", 3)), b.push("</tr>"), b.push("<tr>"), b.push(a("th", "Excl")), b.push(a("td", y.exclusive, "title='" + u.exclusive + "'")), b.push(a("td", r.tree_excl_time_ms, "title='" + u.treeExcl + "'")), b.push(a("td", r.init_excl_time_ms, "title='" + u.initExcl + "'")), b.push(a("td", y.onLoadExcl, "title='" + u.onLoadExcl + "'")), b.push(a("td", y.htmlSizeExcl, "title='" + u.htmlSizeExcl + "'")), b.push("</tr>"), b.push("</table>"), q.append(b.join(""))
					},
					A = [
						["Inclusive", y.time, "inclusive"],
						["Exclusive", y.exclusive, "exclusive"],
						["Tree Incl", r.tree_incl_time_ms, "treeIncl"],
						["Init Incl", r.init_incl_time_ms, "initIncl"],
						["OnLoad Incl", y.onLoadIncl, "onLoadIncl"]
					],
					B = "<span style='padding-right: 5px; padding-left: 15px; font-weight: bold; font-size: 0.8em;'>";
				for(var C = 0; C < A.length; C++) {
					var s = A[C][0],
						D = A[C][1],
						F = u[A[C][2]];
					q.append($(B + s + "</span>").attr("title", F)).append($("<span></span>").attr("title", F).text(m(D)).addClass("__w2inspector_code"))
				}
				this._showMore && (q.append($("<br>")), q.append($("<span style='font-size: 0.8em'>").text("Mouseover values for explanations")), z());
				var f = r.prime;
				if(f && this._showMore) {
					var G = "";
					for(var H in f) {
						var I = l(f[H]);
						G += H + ": " + I + "ms; "
					}
					G && q.append($("<h4>Prime functions</h4>")).append($("<div></div>").addClass("__w2inspector_small_code").text(G))
				}
				if(this._showMore) {
					var K = hb(a);
					if(K) {
						q.append($("<h4>").text("Children")), q.append($("<span style='font-size: 0.8em'>").text("Mouseover column headers for explanations")), q.append(K);
						var M = $("<a>").attr("href", "#").attr("id", "toggleIncludePostPageLoad");
						q.append(M)
					}
				}
			}
			var N = $("[" + this._ANNOTATION_ATTR + "=" + a + "]").length,
				O = d.outerHTML.length;
			q.append($("<hr></hr>")).append($("<h4>DOM</h4>")).append($("<div></div>").text(k).addClass("__w2inspector_code").append($("<div style='float: right;'>&nbsp;" + N + " tags</div>")).append($("<div style='float: right;'>&nbsp;qsf = " + r.qsf + "</div>"))), $("body").append(q.css("top", -9999).css("left", -9999));
			var P = q.height(),
				Q = q.width(),
				R = window.innerWidth,
				S = window.innerHeight,
				T = b.pageX,
				U = b.pageY,
				V = U + 10,
				W = T + 10,
				X;
			T + 20 + Q > R && (X = R - T - 20, q.width(X)), P = q.height();
			var Y = U - 10 - P;
			Y >= 10 && (h = Y), $("#" + this._labelId).html(q.remove().html()).css("top", h).css("left", W).show(), $("#" + this._turnOffLinkId).click(this.fnbind(function() {
				return this.off(), !1
			})), $("#" + this._moreLinkId).click(this.fnbind(function() {
				return this.toggleMore(), !1
			})), $("#" + this._showComponentTypesId).click(this.fnbind(function() {
				return J(), !1
			})), $("#" + this._showComponentsId).click(this.fnbind(function() {
				return L(), !1
			}));
			var M = $("#toggleIncludePostPageLoad");
			E(M, this.fnbind(function() {
				ib(), this.labelVisible() && this.highlightCID(this._lastHighlightedCID, this._lastHighlightEvent)
			})), this._lastHighlightedCID = a, this._lastHighlightEvent = b
		},
		getMoreLinkText: function() {
			var a = this._showMore ? "less" : "more";
			return "Show " + a
		},
		unhighlightCID: function(a) {
			$("[" + this._ANNOTATION_ATTR + "=" + a + "]").removeClass("__w2inspector_highlight")
		},
		unhighlightCIDWithTimeout: function(a) {
			clearTimeout(this.unhighlightTimeout), this.unhighlightCallback = this.fnbind(function() {
				this.unhighlightCID(a), this._lastNodeOver = null
			}), this.unhighlightTimeout = setTimeout(this.fnbind(function() {
				this.unhighlightCallback(), this.unhighlightTimeout = undefined, this.unhighlightCallback = undefined, this.hideLabel()
			}), 300)
		},
		hideLabel: function() {
			$("#" + this._labelId).hide()
		},
		labelVisible: function() {
			return $("#" + this._labelId + ":visible").length > 0
		},
		inLabel: function(a) {
			var b = $("#" + this._labelId)[0];
			if(b) if(a === b || $(a).parents("#" + this._labelId).length > 0) return !0;
			return !1
		},
		onMouseover: function(a) {
			if(this.inLabel(a.target)) {
				this.unhighlightTimeout && clearTimeout(this.unhighlightTimeout);
				return
			}
			var b = a.target.getAttribute(this._ANNOTATION_ATTR);
			b && (this.unhighlightCallback && (clearTimeout(this.unhighlightTimeout), this.unhighlightCallback()), this.highlightCID(b, a)), this._lastNodeOver = a.target
		},
		onMouseout: function(a) {
			if(this.inLabel(a.target)) {
				this.unhighlightCIDWithTimeout(this._lastHighlightedCID);
				return
			}
			var b = a.target.getAttribute(this._ANNOTATION_ATTR);
			b && this.unhighlightCIDWithTimeout(b)
		},
		on: function() {
			return this._active ? (console.warn("Component Inspector already active.  Not turning on."), !1) : (this._msgFlash("Component Inspector On"), $("body").bind("mouseover.w2inspector", this.fnbind(this.onMouseover)).bind("mouseout.w2inspector", this.fnbind(this.onMouseout)), this.$("#@toggle").css("background", "yellow"), this.$("#@page_class").show(), this.$("#@kb").show(), this._active = !0)
		},
		off: function() {
			return this._active ? (this._msgFlash("Component Inspector Off"), $("body").unbind("mouseover.w2inspector").unbind("mouseout.w2inspector").removeClass("__w2inspector_highlight"), this.unhighlightCID(this._lastHighlightedCID), this.hideLabel(), this.$("#@toggle").css("background", "inherit"), this.$("#@page_class").hide(), this.$("#@kb").hide(), this._active = !1) : (console.warn("Component Inspector not active.  Not turning off."), !1)
		},
		toggle: function() {
			return this._active ? this.off() : this.on()
		},
		toggleMore: function() {
			(this._showMore = !this._showMore) ? this._msgFlash("Showing More JS Metadata about Components") : this._msgFlash("Showing Less JS Metadata about Components"), this.labelVisible() && this.highlightCID(this._lastHighlightedCID, this._lastHighlightEvent)
		},
		_msgFlash: function(a) {
			this.$("#@msg").html(a).fadeIn(400, this.fnbind(function(a) {
				setTimeout(this.fnbind(function(a) {
					this.$("#@msg").fadeOut(400)
				}), 200)
			}))
		},
		gadgetOn: function() {
			var a = ["livenode_op_start", "livenode_finish_operations", "webnode_add_component_metadata", "webnode_remove_component_metadata", "rpc_content_for_done"];
			if(!window.gadgetWindow || window.gadgetWindow.closed) window.gadgetWindow = window.open("/internal/gadget/index", "gadgetWindow");
			window.gadgetWindow.focus();
			var b = function(b, c) {
					var d = c,
						e = b;
					$(document).bind(a[d], e.fnbind(function(b, c) {
						window.gadgetWindow.$(window.gadgetWindow.document).trigger(a[d], [c])
					}))
				};
			for(var c = 0; c < a.length; c++) b(this, c)
		},
		fillPageTiming: function() {
			this.$("#@page_timing").html(I())
		}
	}), a.on = function() {
		ob.on()
	}, a.off = function() {
		ob.off()
	}, a.toggle = function() {
		ob.toggle()
	}, a.isActive = function() {
		return ob._active
	}, a.fillPageTiming = function() {
		ob.fillPageTiming()
	}, a.highlightCID = function(a) {
		ob.highlightCID(a)
	}, a.unhighlightCID = function(a) {
		ob.unhighlightCID(a)
	}, a.getAnnotationAttr = function() {
		return ob._ANNOTATION_ATTR
	}, a.toggleColorMap = function() {
		ob.toggleColorMap()
	}, a.showComponents = L
}), require.install("mobile_ride_along", function(require, a, b) {
	function k() {
		if(!f) return;
		var a = l(),
			b = n(a.cookies);
		m(a.width, a.height), b ? f.location.reload() : e && (e.enableButtons(), e.slideOut())
	}
	function l() {
		d("rideAlongMode", g = g || d("rideAlongMode") || "mobile"), d("rideAlongOrientation", h = h || d("rideAlongOrientation") || "portrait"), d("rideAlongSlideLock", i = i || d("rideAlongSlideLock") || "unlocked");
		var a = j[g],
			b = {};
		for(var c in a) b[c] = a[c];
		return h === "landscape" && (b.width = a.height, b.height = a.width), b
	}
	function m(a, b) {
		if(!f) return;
		var c = f.document.documentElement;
		$(c).css("overflow-y", "scroll").css("overflow-x", "hidden");
		var e = $(f.frameElement),
			g = e.width() + (a - c.clientWidth) + "px",
			i = e.height() + (b - c.clientHeight) + "px";
		e.css("width", g).css("height", i), e.toggleClass("landscape", h === "landscape"), d("rideAlongWidthHint", g), d("rideAlongHeightHint", i)
	}
	function n(a) {
		var b, c, d = !1;
		for(b in a) c = a[b], q(b) !== c && (d = !0), q(b, c);
		return d
	}
	function q(a, b) {
		var e = f.location.host,
			g = o.exec(e),
			h = g && d(a, b, {
				domain: g[0],
				document: f.document,
				expires: b === null ? -1 : 1e3
			});
		return c(g), arguments.length === 1 ? h : b
	}
	function r(a) {
		var b = a.location.host,
			e = b.split(p),
			f = "quora.com",
			g, h = j.iphone.cookies;
		c(e.pop() === "com"), c(e.pop() === "."), c(e.pop() === "quora");
		while(e.length > 0) {
			f = e.pop() + f;
			if(f.search(o) !== 0) for(g in h) d(g, null, {
				domain: f,
				document: a.document,
				expires: -1
			})
		}
	}
	var c = require("assert").ok,
		d = require("cookies").cookie,
		e, f, g, h, i, j = {};
	j.iphone = {
		width: 320,
		height: 480,
		cookies: {
			iphone_app: "1",
			iphone_app_version: "2.0:25",
			android_app: null,
			android_app_version: null,
			m: "1"
		}
	}, j.android = {
		width: 430,
		height: 600,
		cookies: {
			iphone_app: null,
			iphone_app_version: null,
			android_app: "1",
			android_app_version: "0.0.48:48.0",
			m: "1"
		}
	}, j.mobile = {
		width: 320,
		height: 480,
		cookies: {
			iphone_app: null,
			iphone_app_version: null,
			android_app: null,
			android_app_version: null,
			m: "1"
		}
	}, a.MobileRideAlong = Component.extend({
		onLoad: function() {
			var a = this,
				b;
			e = a, a.$("#@wrapper").hover(function() {
				b = clearTimeout(b), a.hovering = !0, a.slideIn()
			}, function() {
				b = setTimeout(function() {
					a.hovering = !1, a.slideOut()
				}, 500)
			}), a.$("#@lock").mousedown(function() {
				var b = a.isSlideLocked();
				a.setSlideLocked(!b), $(this).text(b ? "lock" : "unlock"), k()
			}), a.$("#@mode").change(function() {
				a.disableButtons(), g = $(this).val().toLowerCase(), c(g in j), k()
			}), a.$("#@orient").mousedown(function() {
				var a = h;
				h = $(this).text().toLowerCase(), c(h === "landscape" || h === "portrait"), $(this).text(a), k()
			}), a.$("#@reload").click(function() {
				f && (a.disableButtons(), f.location.reload())
			}), d("rideAlongOnByDefault") === "1" && a.turnOn()
		},
		turnOn: function() {
			var a = this.$("#@wrapper"),
				b = this.$("#@frame");
			if(this.mobile_src && a.hasClass("hidden")) {
				a.removeClass("hidden"), b.attr("src") != this.mobile_src && b.attr("src", this.mobile_src), d("rideAlongOnByDefault", "1");
				var c = l();
				m(c.width, c.height)
			}
		},
		turnOff: function() {
			this.$("#@wrapper").addClass("hidden"), d("rideAlongOnByDefault", null)
		},
		toggle: function() {
			this.$("#@wrapper").hasClass("hidden") ? this.turnOn() : this.turnOff()
		},
		disableButtons: function() {
			this.$("#@mode, #@reload").attr("disabled", "disabled")
		},
		enableButtons: function() {
			this.$("#@mode, #@reload").removeAttr("disabled")
		},
		slideIn: function() {
			this.$("#@wrapper").animate({
				right: "0px"
			})
		},
		slideOut: function() {
			if(!this.hovering && !this.isSlideLocked()) {
				var a = this.$("#@wrapper"),
					b = parseInt(a.css("padding"));
				a.animate({
					right: b - a.width() + "px"
				})
			}
		},
		isSlideLocked: function() {
			return i !== "unlocked"
		},
		setSlideLocked: function(a) {
			i = a ? "locked" : "unlocked"
		}
	});
	var o = /\.?\bmobile\..*quora\.com$/i,
		p = /(\.)/;
	a.on = function() {
		e && e.turnOn()
	}, a.off = function() {
		e && e.turnOff()
	};
	var s = 1340582209213,
		t = require("keystrokes");
	new Date < s && t.on([77, 79, 77, 79], function() {
		e && (a1ert('The "momo" keystroke has been deprecated in favor of "m0m0" (with zeros). The "momo" keystroke will stop working as of ' + new Date(s) + "."), e.toggle())
	}), t.on([77, 48, 77, 48], function() {
		e && e.toggle()
	}), a.reportChildLoaded = function(a) {
		a !== window && a.parent === window && o.test(a.location.host) && a.frameElement && a.frameElement.ownerDocument === document && (r(a), f = a, k())
	};
	try {
		document.domain = "quora.com", parent.require("mobile_ride_along", 0).reportChildLoaded(window)
	} catch(u) {}
}), require.install("lang/arr", function(require, a, b) {
	a.map = function(a, b) {
		for(var c = 0, d = a.length, e = new Array(d); c < d; ++c) c in a && (e[c] = b(a[c], c));
		return e
	}, a.each = function(a, b) {
		for(var c = 0, d = a.length; c < d; ++c) c in a && b(a[c], c)
	}
}), require.install("perf", function(require, a, b) {
	function c() {
		var a = rec.dump();
		if(!window.performance) return a;
		var b, c = window.performance.timing,
			d = [];
		for(b in c) d.push({
			time: c[b],
			tags: ["window.performance", b]
		});
		d.sort(function(a, b) {
			return a.time - b.time
		});
		var e = 0,
			f = a.length,
			g, h = 0,
			i = d.length,
			j, k = new Array(f + i);
		while(e < f && h < i) g = a[e], j = d[h], j.time < g.time ? k[e + h++] = j : k[e+++h] = g;
		for(; h < i; ++h) k[e + h] = d[h];
		for(; e < f; ++e) k[e + h] = a[e];
		return k
	}
	a.process = function() {
		var a = c(),
			b = require("lang/arr").map,
			d = {
				tags: []
			},
			e = {},
			f = 0;
		return d.history = b(a, function(a, c) {
			var g = a.time - f;
			return f = a.time, [g, b(a.tags, function(a) {
				var b = e[a];
				return b || (b = e[a] = {
					pair: [a, []],
					count: 0
				}, b.pos = d.tags.push(b.pair) - 1), b.count += 1, b.pair[1].push(c), b.pos
			})]
		}), d
	}
}), require.install("view/embed", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("view/inline_editor").InlineEditor,
		e = require("webnode2");
	a.EmbedDialog = c.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this.openDialog(), !1
			}))
		},
		openDialog: function() {
			this._dialog = this.dialog({
				width: 585,
				verticalOffset: 100
			}).title(this.title).load("embed_content")
		},
		closeDialog: function() {
			this._dialog.close_()
		}
	}), a.EmbedDialogContents = c.extend({
		onLoad: function() {
			var a = this,
				b = this.$("#@embed_dialog_contents_wrapper"),
				c = $("<div>").addClass("embed_dialog_close_button").text("close");
			c.click(function() {
				a.child("create_embed_box").child("editor").closeDialog()
			}), b.parents(".dialog_wrapper").append(c)
		}
	}), a.CreateEmbedEditor = d.extend({
		onLoad: function() {
			this._super.apply(this, arguments);
			var a = this,
				b = 0,
				c = 0,
				d = this.$("#@preview_wrapper");
			this.height = d.height() + c, this.width = d.width() + b, this.updateCode("", this.width, this.height), this.$("#@post").bind("keyup", function(b) {
				var c = a.$("#@post").val();
				a.updateCode(c, a.width, a.height)
			}), this.$("#@code").click(this.fnbind(function() {
				this.$("#@code").select()
			}))
		},
		cancelEditor: function() {
			this.closeDialog()
		},
		updateCode: function(a, b, c) {
			this.serverCall("get_widget_code").kwargs({
				caption: a,
				width: b,
				height: c
			}).success(this.fnbind(function(a) {
				this.$("#@code").text(a).select()
			})).send()
		},
		ajax_callback: function(a) {
			this.closeDialog();
			return
		},
		closeDialog: function() {
			e.Dialog.dialogFor(this).close_()
		}
	}), a.ExternalEmbed = c.extend({
		onLoad: function(a) {
			this.$("#@embed_logo").mouseover(this.fnbind(function() {
				this.$("#@embed_logo").css({
					"background-position": "0 -20px"
				}).animate({
					right: "0px"
				}, 80)
			})), this.$("#@external_embed_wrapper").on("mousedown", 'a[href!="#"]', function(a) {
				var b = $(a.currentTarget);
				b.attr("target", "_blank")
			})
		}
	}), a.QuoteEmbed = a.ExternalEmbed.extend({
		onLoad: function(a) {
			this._super.apply(this, arguments);
			var b = this.lookup("quote_dialog_content");
			b && b.getSize()
		}
	}), a.QuestionEmbed = a.ExternalEmbed.extend({
		onLoad: function(a) {
			this._super.apply(this, arguments), this.child("question_embed_answer").whenOnLoaded(this.fnbind(function() {
				var a = this.child("question_embed_answer").$("#@answer .answer_content:first").height();
				this.child("question_embed_answer").$("#@answer a.more_link").click(this.fnbind(function() {
					this.child("question_embed_answer").$("#@answer .answer_content").css({
						height: a,
						"overflow-y": "scroll"
					})
				}))
			}))
		}
	})
}), require.install("view/embed_editor", function(require, a, b) {
	var c = require("webnode2");
	a.EmbedInlineEditor = require("view/inline_editor").InlineEditor.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.initial_positioning = !1;
			var a = this.editor = this.lookup("editor");
			this.setToggleCallback(this.fnbind(function() {
				this.initial_positioning || (this.initial_positioning = !0, a.updateEmbedComponentPositions(), a.getEmbedComponents(function(b, c) {
					a.updatePlaceholderImageSize(b)
				}), a.updateEmbedComponentPositions())
			}))
		},
		submitHandler: function() {
			this.input_button_obj.click(this.fnbind(function() {
				return this.editor.notifySubmit(), c.InputValidator.validate(this, {
					valid: this.fnbind(this.trigger_request),
					invalid: function() {}
				}), !1
			}))
		}
	})
}), require.install("view/paged_list", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2"),
		e = require("event"),
		f = e.add,
		g = e.remove;
	a.PagedList = c.extend({
		init: function(a) {
			this._super.apply(this, arguments), this.model_count = a.initial_count, this.first_hidden_index = 0, this.visible_count = 0, this.invisible_count = 0, this.total_count = 0, this.initializeCounts(), this.hidden_count = 0, this.currently_fetching = !1, this.waiting_for_updates = !1, this.show_hidden_when_done_updating = !1, this.showHiddenCallback = null, this.cur_item = 0
		},
		setCurrent: function(a) {
			var b = d.getLiveDomId(this.cid),
				c = $("#" + b).children(".pagedlist_item:not(.pagedlist_hidden):not(.pagedlist_invisible)"),
				e = $(c[a - 1]).offset().top;
			$("html,body").animate({
				scrollTop: e
			}, 300, "expo", function() {
				c[a - 1].focus()
			}), this.cur_item = a
		},
		nextItem: function() {
			this.cur_item < this.visible_count && this.setCurrent(this.cur_item + 1)
		},
		previousItem: function() {
			this.cur_item > 1 && this.setCurrent(this.cur_item - 1)
		},
		keyEvents: function(a) {
			switch(a) {
			case 74:
				return this.nextItem(), !1;
			case 75:
				return this.previousItem(), !1
			}
		},
		onMoreButtonClick: function() {
			var a = this.showHiddenAndMaybeGetMore();
			return a || (this.show_hidden_when_done_updating = !0, this.showLoading()), !1
		},
		loadMoreButton: function() {
			this.child("more_button").$("#@more").click(this.fnbind(function() {
				return this.onMoreButtonClick()
			})), this.model_count <= this.total_count && (this.showMoreButton(), this.crawler || $(window).load(this.fnbind(function() {
				setTimeout(this.fnbind(function() {
					this.maybeGetMore()
				}), 50)
			})))
		},
		initializeCounts: function(a) {
			var b = d.getLiveDomId(this.cid);
			if(!b) return;
			var c = document.getElementById(b);
			if(!c) return;
			var e = c.childNodes;
			for(var f = 0; f < e.length; f++) {
				var g = $(e[f]),
					h = g.attr("id");
				h && g.hasClass("pagedlist_item") && (this.first_hidden_index += 1, this.total_count += 1, g.hasClass("pagedlist_invisible") ? this.invisible_count += 1 : this.visible_count += 1)
			}
		},
		setShowHiddenCallback: function(a) {
			this.showHiddenCallback = a
		},
		showHiddenAndMaybeGetMore: function() {
			return this.showHidden(this.buffer_count), this.showHiddenCallback && this.showHiddenCallback(), this.maybeGetMore()
		},
		showHidden: function(a) {
			var b = d._domids[this.cid];
			if(!b) {
				d.reportPageNeedsReload("domid_missing " + this.cid);
				return
			}
			var c = 0,
				e = 0,
				f = document.getElementById(b),
				g = f.childNodes,
				h = !1;
			for(var i = 0; i < g.length; i++) {
				var j = $(g[i]);
				if(j.hasClass("pagedlist_item") && j.hasClass("pagedlist_hidden")) {
					j.hasClass("pagedlist_invisible") || (c += 1), h || (h = !0), j.removeClass("pagedlist_hidden"), g[i].style.display = "block", e += 1;
					if(c >= a) break
				}
			}
			this.visible_count += c, this.hidden_count -= c, this.first_hidden_index += e
		},
		hideLoading: function() {
			this.child("more_button").$("#@loading").hide()
		},
		showLoading: function() {
			this.child("more_button").$("#@loading").show()
		},
		hideMoreButton: function() {
			var a = this.child("more_button");
			a.isVirtual || a.maybeHideButton()
		},
		showMoreButton: function() {
			var a = this.child("more_button");
			a.isVirtual || a.maybeShowButton()
		},
		maybeGetMore: function() {
			return this.currently_fetching || this.waiting_for_updates ? !1 : (this.visible_count + this.hidden_count >= this.model_count && this.hidden_count <= this.buffer_count / 4 ? this.getMore() : this.hidden_count == 0 && this.hideMoreButton(), !0)
		},
		getMore: function() {
			return this.currently_fetching = !0, this.waiting_for_updates = !0, this.serverCall("increase_count").kwargs({
				cid: this.cid,
				num: this.buffer_count
			}).success(this.fnbind(function(a) {
				return this.currently_fetching = !1, !this.currently_fetching && !this.waiting_for_updates && (this.hideLoading(), this.show_hidden_when_done_updating && (this.show_hidden_when_done_updating = !1, this.showHiddenAndMaybeGetMore())), !1
			})).error(this.fnbind(function(a) {
				return this.currently_fetching = !1, this.hideLoading(), !1
			})).send(), !1
		},
		getDebugStr: function(a, b) {
			var c = "hidden_count: " + this.hidden_count;
			return c += " visible_count: " + this.visible_count, c += " model_count: " + this.model_count, c += " buffer_count: " + this.buffer_count, c += " first hidden index: " + this.first_hidden_index, c += " op position: " + a.position, c += " invisible_count: " + this.invisible_count, c += " total_count: " + this.total_count, c += " hidden per JS?: " + b, c
		},
		checkState: function(a) {
			var b = d._domids[this.cid],
				c = document.getElementById(b),
				e = c.childNodes,
				f = 0,
				g = 0,
				h = 0,
				i = 0;
			for(var j = 0; j < e.length; j++) {
				var k = $(e[j]);
				k.hasClass("pagedlist_item") && (f += 1, k.hasClass("pagedlist_hidden") ? h += 1 : k.hasClass("pagedlist_invisible") ? i += 1 : g += 1)
			}
			var l = "total_count: " + this.total_count;
			l += ", dom_total_count: " + f, l += " || visible_count: " + this.visible_count, l += ", dom_visible_count: " + g, l += " || hidden_count: " + this.hidden_count, l += ", dom_hidden_count: " + h, l += " || invisible_count: " + this.invisible_count, l += ", dom_invisible_count: " + i, l += " || model_count: " + this.model_count, l += " || first hidden index: " + this.first_hidden_index, (this.total_count != f || this.visible_count != g || this.hidden_count != h || this.invisible_count != i) && $.serverLog("qfeed_check_state_fail: " + a + " " + l, "DEBUG")
		},
		onInsertNode: function(a, b) {
			var c = this.$("#" + b);
			if(!c.hasClass("pagedlist_item")) return;
			var d = c.hasClass("pagedlist_invisible");
			this.total_count += 1, a.position > 0 && a.position >= this.first_hidden_index ? (c.addClass("pagedlist_hidden"), a.transition.type = "none", d || (this.hidden_count += 1, this.showMoreButton())) : (c.removeClass("pagedlist_hidden"), d ? this.invisible_count += 1 : this.visible_count += 1, this.first_hidden_index += 1)
		},
		onDeleteNode: function(a, b) {
			var c = this.$("#" + b);
			if(!c.hasClass("pagedlist_item")) return;
			var d = c.hasClass("pagedlist_invisible"),
				e = c.hasClass("pagedlist_hidden");
			this.total_count -= 1, a.position >= this.first_hidden_index ? d || (this.hidden_count -= 1, (this.hidden_count < 0 || !e) && $.serverLog("qfeed_hidden_count_broken delete hidden: " + this.getDebugStr(a, e), "DEBUG")) : (this.first_hidden_index -= 1, d ? this.invisible_count -= 1 : this.visible_count -= 1, e && $.serverLog("qfeed_hidden_count_broken delete shown: " + this.getDebugStr(a, e), "DEBUG"))
		},
		onUpdate: function(a) {
			var b = this.model_count;
			this.model_count = a.count;
			var c = this.child("more_button");
			c.isVirtual || (c.maybeEnableOrDisableAutoClick(), this.hidden_count == 0 ? this.hideMoreButton() : this.showMoreButton()), this.waiting_for_updates = !1, this.visible_count < this.buffer_count && this.hidden_count > 0 && (this.show_hidden_when_done_updating = !0);
			var d = !0;
			!this.currently_fetching && !this.waiting_for_updates && (this.hideLoading(), this.show_hidden_when_done_updating && (this.show_hidden_when_done_updating = !1, this.showHiddenAndMaybeGetMore(), d = !1)), d && this.maybeGetMore()
		},
		orderedVisibleChildren: function() {
			var a = d.getLiveDomId(this.cid),
				b = document.getElementById(a),
				c = b.childNodes,
				e = [],
				f;
			for(f = 0; f < c.length; f++) {
				var g = $(c[f]),
					h = g.attr("id");
				h && g.hasClass("pagedlist_item") && !g.hasClass("pagedlist_invisible") && e.push(h)
			}
			return e
		},
		allOrderedChildren: function() {
			var a = d.getLiveDomId(this.cid),
				b = document.getElementById(a),
				c = b.childNodes,
				e = !1,
				f = [],
				g;
			for(g = 0; g < c.length; g++) {
				var h = $(c[g]),
					i = h.attr("id");
				i && h.hasClass("pagedlist_item") && (e || !h.hasClass("pagedlist_invisible")) && (e = !0, f.push(i))
			}
			return f
		}
	}), a.PagedListMoreButton = c.extend({
		init: function(a) {
			this._super.apply(this, arguments), this.last_check_time = 0, this.rate_limiter_ms = 500, this.auto_click_enabled = !1, this.auto_click_capable = this.auto_click_period != null && this.auto_click_period > 0
		},
		checkButtonPosition: function(a) {
			if(!this.auto_click_capable) return;
			if(!this.parent()) return;
			var b = +(new Date);
			if(!a && b < this.last_check_time + this.rate_limiter_ms) return;
			var c = this.parent().model_count;
			this.parent().waiting_for_updates && (c += this.parent().buffer_count);
			var d = this.shouldEnableAutoClickFromModelCount(c);
			this.last_check_time = b;
			var e = this.$("#@more");
			if(!e.length) return;
			var f = this.$("#@sentinel"),
				g = Math.ceil($(window).height() / 4),
				h = !1;
			f.is(":in-viewport") ? h = !0 : $.belowthefold(f, {
				threshold: g
			}) || (h = !0);
			if(!h) return;
			if(this.parent().currently_fetching || this.parent().waiting_for_updates) {
				this.parent().showLoading(), d && (this.parent().show_hidden_when_done_updating = !0);
				return
			}
			if(!d) return;
			this.parent().onMoreButtonClick()
		},
		onLoad: function() {
			this.parent().loadMoreButton(), this.parent().setShowHiddenCallback(this.fnbind(function() {
				if(!this.auto_click_capable) return;
				!this.auto_click_enabled && this.shouldEnableAutoClickFromModelCount(this.parent().model_count + this.parent().buffer_count) && this.$("#@more").is(":visible") && this.maybeHideButton()
			}));
			if(this.auto_click_capable) {
				var a = this.fnbind(function() {
					setTimeout(this.fnbind(this.checkButtonPosition, !1), 100)
				});
				this._mousemove_handler = f(document, "mousemove", a), this._keypress_handler = f(document, "keypress", a), this._scroll_handler = f(document, "scroll", a)
			}
			this.maybeEnableOrDisableAutoClick(), this.auto_click_enabled && $(window).load(this.fnbind(function() {
				setTimeout(this.fnbind(function() {
					this.checkButtonPosition(!0)
				}), 75)
			}))
		},
		onUnload: function() {
			this._mousemove_handler != undefined && g(document, "mousemove", this._mousemove_handler), this._keypress_handler != undefined && g(document, "keypress", this._keypress_handler), this._scroll_handler != undefined && g(document, "scroll", this._scroll_handler)
		},
		maybeShowButton: function() {
			this.auto_click_enabled || this.$("#@more").show()
		},
		maybeHideButton: function() {
			this.$("#@more").hide()
		},
		shouldEnableAutoClickFromModelCount: function(a) {
			return a % this.auto_click_period != 0
		},
		maybeEnableOrDisableAutoClick: function() {
			if(!this.auto_click_capable) return;
			var a = this.shouldEnableAutoClickFromModelCount(this.parent().model_count);
			a && !this.auto_click_enabled ? (this.auto_click_enabled = !0, this.parent().hideMoreButton()) : !a && this.auto_click_enabled && (this.auto_click_enabled = !1)
		}
	})
}), require.install("view/placepicker", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("window_manager");
	a.PlacePicker = c.extend({
		onLoad: function() {
			this.address = this.default_location, this.initializeGoogleMaps(), this.mutable == 1 && (this.$("#@edit_map").click(this.fnbind(function() {
				return this.toggleEditor(), !1
			})), this.$("#@change_location").click(this.fnbind(function() {
				if(this.place || this.marker) {
					this.$("#@search_text_field").blur();
					var a, b;
					this.map.getBounds().contains(this.marker.getPosition()) ? (a = this.marker.getPosition().lat(), b = this.marker.getPosition().lng()) : (a = this.map.getCenter().lat(), b = this.map.getCenter().lng());
					if(!this.place) {
						var c = new google.maps.LatLng(a, b),
							d = new google.maps.Geocoder;
						d.geocode({
							location: c
						}, this.fnbind(function(a, b) {
							if(b == google.maps.GeocoderStatus.OK && a.length) {
								var c = a[0];
								this.radius = this.computeRadius(c.geometry.viewport), this.setAddress(c.address_components)
							}
						}))
					}
					var e = $.trim(this.$("#@search_text_field").val());
					this.serverCall("place_changed").kwargs({
						radius: this.radius,
						reference: this.place && this.place.reference || this.reference,
						lat: a,
						lng: b,
						viewport: {
							zoom: this.map.getZoom(),
							mapTypeId: this.map.getMapTypeId(),
							icon: this.place && this.place.icon,
							tilt: this.map.getTilt(),
							heading: this.map.getHeading()
						},
						address: e.length ? e : this.address
					}).success(this.fnbind(function() {
						this.default_location.hasLocation = !0
					})).send()
				} else this.$("#@search_text_field").focus()
			})), this.$("#@edit").click(this.fnbind(function() {
				return this.toggleEditor(), !1
			})), this.$("#@add").click(this.fnbind(function() {
				return this.reinitializeMap(), !1
			})), this.$("#@clear").click(this.fnbind(function() {
				return this.dialog().title("Remove Location").cancel(null, "Cancel").ok(this.fnbind(function() {
					this.serverCall("place_cleared").success(this.fnbind(function() {
						this.toggleEditor()
					})).send()
				}), "Remove Location").html("Are you sure you want to remove the location set for this topic?"), !1
			})), this.$("#@close").click(this.fnbind(function() {
				return this.toggleEditor(), this.initializeGoogleMaps(), this.default_location.hasLocation === !1 && this.$("#@map_wrapper").hide(), !1
			})), d.getHash().substr(0, 13) == "#editlocation" && this.reinitializeMap())
		},
		initializeGoogleMaps: function() {
			this.mapOptions = {
				center: window.google && google.maps && new google.maps.LatLng(this.default_location.latitude, this.default_location.longitude),
				zoom: this.viewport && this.viewport.zoom || 7,
				mapTypeId: this.viewport && this.viewport.mapTypeId || window.google && google.maps && google.maps.MapTypeId.ROADMAP || "roadmap",
				tilt: this.viewport && this.viewport.tilt !== undefined && this.viewport.zoom >= 18 ? this.viewport.tilt : 45,
				heading: this.viewport && this.viewport.heading,
				streetViewControl: this.mutable == 1 ? !1 : !0
			};
			var a = this.viewport && this.viewport.icon;
			if(this.static_map == 1) {
				var b = "//maps.googleapis.com/maps/api/staticmap?center=" + encodeURIComponent(this.default_location.latitude + "," + this.default_location.longitude) + "&zoom=" + encodeURIComponent(this.mapOptions.zoom) + "&size=" + encodeURIComponent(this.size.width + "x" + this.size.height) + "&maptype=" + encodeURIComponent(this.mapOptions.mapTypeId) + "&markers=" + encodeURIComponent("icon:" + a + "shadow:false|" + this.default_location.latitude + "," + this.default_location.longitude) + "&sensor=false",
					c = $('<img src="' + b + '" />');
				this.$("#@map_canvas").replaceWith(c);
				return
			}
			this.map = new google.maps.Map(this.$("#@map_canvas").get(0), this.mapOptions), (this.simple_view == 1 || this.mutable == 1) && this.toggleControls(!1), this.default_location.hasLocation !== !1 && this.updateMarker(a, this.mapOptions.center, this.default_text), this.mutable == 1 && this.toggleDraggable(!1);
			if(this.mutable == 1) {
				var d = this.$("#@search_text_field").get(0),
					e = new google.maps.places.Autocomplete(d);
				e.bindTo("bounds", this.map), google.maps.event.addListener(e, "place_changed", this.fnbind(function() {
					this.infowindow && this.infowindow.close(), this.place = e.getPlace(), this.place.geometry.viewport ? (this.map.fitBounds(this.place.geometry.viewport), this.radius = this.computeRadius(this.place.geometry.viewport)) : (this.map.setCenter(this.place.geometry.location), this.map.setZoom(17), this.radius = 30), this.setAddress(this.place.address_components), this.updateMarker(this.place.icon, this.place.geometry.location)
				})), google.maps.event.addListener(this.map, "click", this.fnbind(function(a) {
					if(!this.getControlState()) return;
					var b = a.latLng;
					this.radius = this.computeRadius(this.map.getBounds()), this.handleMarkerReposition(b), this.updateMarker(null, b)
				}))
			}
		},
		setAddress: function(a) {
			this.address = "";
			if(a) {
				this.address = [a[0] && a[0].short_name || "", a[1] && a[1].short_name || "", a[2] && a[2].short_name || ""], this.address[1] == this.address[2] && this.address.splice(2, 1), this.address[0] == this.address[1] && this.address.splice(1, 1);
				var b = "";
				$.each(this.address, this.fnbind(function(a, c) {
					b += c, /^[0-9]+$/.test(c) ? b += " " : a != this.address.length - 1 && (b += ", ")
				})), this.address = b
			}
		},
		reinitializeMap: function() {
			this.$("#@map_wrapper").show(0, this.fnbind(function() {
				this.initializeGoogleMaps(), this.toggleEditor(), this.$("#@search_text_field").focus()
			}))
		},
		toggleEditor: function() {
			this.$("#@view").toggle(), this.$("#@editor").toggle(), this.$("#@edit_map").toggle(), this.toggleDraggable(), this.toggleControls()
		},
		getControlState: function() {
			return !!this.mapOptions.mapTypeControl
		},
		toggleControls: function(a) {
			var b = a !== undefined ? a : !this.getControlState();
			this.mapOptions.mapTypeControl = b, this.mapOptions.panControl = b, this.mapOptions.zoomControl = b, this.mapOptions.scaleControl = b, this.mapOptions.rotateControl = b, this.mapOptions.overviewMapControl = b, this.map.setOptions(this.mapOptions)
		},
		toggleDraggable: function(a) {
			this.mapOptions.draggable = a !== undefined ? a : !this.mapOptions.draggable, this.mapOptions.draggable ? (this.mapOptions.minZoom = undefined, this.mapOptions.maxZoom = undefined, this.marker && this.marker.setDraggable(!0)) : (this.mapOptions.minZoom = this.map.getZoom(), this.mapOptions.maxZoom = this.map.getZoom(), this.marker && this.marker.setDraggable(!1)), this.map.setOptions(this.mapOptions)
		},
		updateMarker: function(a, b) {
			this.marker && this.marker.setMap(null);
			var c = new google.maps.MarkerImage(a || "//maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png", new google.maps.Size(40, 40), new google.maps.Point(0, 0), new google.maps.Point(20, 40), new google.maps.Size(40, 40));
			this.marker = new google.maps.Marker({
				clickable: !0,
				draggable: this.mapOptions && this.mapOptions.draggable,
				icon: c,
				map: this.map,
				position: b
			}), google.maps.event.addListener(this.marker, "dragend", this.fnbind(function(a) {
				var b = a.latLng;
				this.handleMarkerReposition(b)
			})), this.updateInfoWindow(b)
		},
		handleMarkerReposition: function(a) {
			this.place = null, window.setTimeout(this.fnbind(function() {
				this.map.panTo(a)
			}), 1e4);
			var b = new google.maps.Geocoder;
			b.geocode({
				location: a
			}, this.fnbind(function(b, c) {
				if(c == google.maps.GeocoderStatus.OK && b.length) {
					var d = b[0];
					this.radius = this.computeRadius(d.geometry.viewport), this.setAddress(d.address_components), this.updateInfoWindow(a)
				}
			}))
		},
		updateInfoWindow: function(a) {
			this.infowindow && this.infowindow.close(), this.address && this.address.length && (this.infowindow = new google.maps.InfoWindow({
				content: this.address,
				position: a
			}), google.maps.event.addListener(this.marker, "click", this.fnbind(function() {
				this.infowindow.open(this.map, this.marker)
			})))
		},
		computeRadius: function(a) {
			var b = a.getNorthEast(),
				c = a.getSouthWest(),
				d = b.lat(),
				e = c.lat(),
				f = b.lng(),
				g = c.lng();
			return Math.floor(Math.abs(d - e) * 111045 / 2)
		}
	})
}), require.install("view/trackback", function(require, a, b) {
	var c = require("w2.quora").Component;
	a.TrackbackLink = c.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function(a) {
				return this.parent().lookup("trackbacks").toggle(), this.lookup("comments_list", !0) && this.lookup("comments_list").state("expanded", !1), !1
			}))
		}
	}), a.Trackbacks = c.extend({
		onLoad: function() {
			this.loaded = !1, windowManager.getHash().substr(0, 8) == "#reposts" && this.object_id == windowManager.getHash().substr(8) && (this.toggle(), this.$("#@trackbacks").show())
		},
		toggle: function() {
			this.loaded || this.serverCall("trackback_list").contentFor(this.$("#@trackback_list"), {
				parentCID: this.cid
			}).success(this.fnbind(function(a) {
				this.loaded = !0;
				var b = this.parent();
				while(b != null && b.retarget_enabled == undefined) b = b.parent();
				b != null && b.retarget_enabled && b.retarget()
			})).send(), this.$("#@trackbacks").toggle()
		},
		hideTrackbacks: function() {
			this.$("#@trackbacks").hide()
		}
	})
}), require.install("app/view/home/home_promote", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2");
	a.MobilePromotion = c.extend({
		onLoad: function() {
			var a = this;
			a.phoneNumberInput = a.$("#@phone_number"), a.sendSMSButton = a.$("#@send_sms"), a.sendSMSButton.click(function() {
				return a.phoneNumberInput.val().length === 0 ? a.phoneNumberInput.select() : (a.fnbind(a.disableSendSMSButton)(), a.serverCall("send_sms").kwargs({
					phone_number: a.phoneNumberInput.val()
				}).success(function(b) {
					b.success ? a.phoneNumberInput.val("") : a.phoneNumberInput.select(), a.fnbind(a.enableSendSMSButton)()
				}).error(function() {
					a.fnbind(a.enableSendSMSButton)()
				}).send()), !1
			})
		},
		enableSendSMSButton: function() {
			this.sendSMSButton.removeClass("submit_button_disabled"), this.sendSMSButton.removeAttr("disabled")
		},
		disableSendSMSButton: function() {
			this.sendSMSButton.addClass("submit_button_disabled"), this.sendSMSButton.attr("disabled", "disabled")
		}
	})
}), require.install("app/view/common", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("view/inline_editor").InlineEditor,
		e = require("view/toggle");
	a.ToFollowList = c.extend({
		onLoad: function() {
			this.$("#selectall").click(this.fnbind(function() {
				this.selectAll()
			})), this.$("#@submit_button").click(this.fnbind(function() {
				if(this.ajax) {
					var a = [];
					return this.$("#@list_contents input:checked").each(function(b) {
						a.push($(this).attr("name"))
					}), this.serverCall("follow_from_contacts").kwargs({
						follow_strings: a
					}).liveMutate().success(this.fnbind(function(a) {
						this.successfullyFollowed(a)
					})).send(), !1
				}
			}))
		},
		selectAll: function() {
			this.$("#selectall").attr("checked") ? (this.$("input").attr("checked", !0), this.$(".list_item").addClass("selected")) : (this.$("input").attr("checked", !1), this.$(".list_item").removeClass("selected"))
		},
		successfullyFollowed: function(a) {
			var b = "Successfully followed " + a;
			a == 1 ? b += " friend." : b += " friends.", this.$("#@follow_results").show().text(b), this.$("#@to_follow_list").hide(), this.lookup("next_button").$("#@next_button").addClass("submit_button")
		}
	}), a.ToFollowListItem = c.extend({
		onLoad: function() {
			this.$("#@list_row").hover(this.fnbind(function() {
				this.$("#@list_row").addClass("hover")
			}), this.fnbind(function() {
				this.$("#@list_row").removeClass("hover")
			})), this.$("#@chkbox").click(this.fnbind(function(a) {
				this.onCheck(), a.stopPropagation()
			})), this.$("#@list_row").click(this.fnbind(function() {
				this.$("#@chkbox").attr("disabled") || (this.$("#@chkbox").attr("checked") ? this.$("#@chkbox").attr("checked", !1) : (this.$("#@chkbox").attr("checked", !0), this.$("#selectall").attr("checked", !1)), this.onCheck())
			}))
		},
		onCheck: function() {
			this.$("#@list_row").toggleClass("selected"), this.max != null && this.atMax()
		},
		atMax: function() {
			var a = 0;
			return $("input[type='checkbox']").each(function() {
				$(this).attr("checked") && a++
			}), a >= this.max ? ($("input[type='checkbox']").each(function() {
				$(this).attr("checked") || $(this).attr("disabled", !0)
			}), !0) : ($("input[type='checkbox']").removeAttr("disabled"), !1)
		}
	}), a.OptionsMenuLink = c.extend({
		onLoad: function() {
			this.position_relative = this.position_relative != undefined ? this.position_relative : !1, this.position_adjust = this.position_adjust != undefined ? this.position_adjust : 0, this.align_right = this.align_right != undefined ? this.align_right : !1, this.$("#@options_link").click(this.fnbind(function(a) {
				return this.$("#@options_menu").menu(this.$("#@options_link"), {
					position_relative: this.position_relative,
					position_adjust: this.position_adjust,
					align_right: this.align_right
				}), !1
			}))
		}
	}), a.SuggestedEditSaveButton = c.extend({
		onLoad: function() {
			this.$("#@accept").click(this.fnbind(function(a) {
				return this.serverCall("publish_edit").liveMutate().send(), !1
			}))
		}
	}), a.AnswerContent = c.extend({
		onLoad: function() {
			this.$("#@view_suggestion").click(this.fnbind(function() {
				return this.toggleSuggestion(), !1
			}))
		},
		toggleSuggestion: function() {
			this.$("#@original_answer").toggleClass("hidden"), this.$("#@suggestion_diff").toggleClass("hidden")
		}
	}), a.SuggestedEditsEditor = d.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.disclaimer_update = "", this.answer_attribution_update = "", this.setToggleCallback(this.fnbind(function() {
				this.parent() && (this.parent().toggleButtons && this.parent().toggleButtons(), this.parent().$("#@disclaimer, #@nfr, #@answer_attribution").toggle())
			})), this.$("#@add_comment_link").click(this.fnbind(function() {
				return this.$("#@comment_box").removeClass("hidden"), this.$("#@add_comment_link").addClass("hidden"), this.lookup("comment_editor").focus(), !1
			}))
		},
		_get_kwargs: function() {
			var a = "";
			return this.has_comment && !this.lookup("comment_editor").isEmpty() && (a = this.lookup("comment_editor").serialize()), {
				object_id: this.id,
				input: this.get_value(),
				sugg_exists: this.sugg_exists,
				notif: this.$("#@notif").attr("checked") ? 1 : 0,
				comment: a,
				disclaimer_update: this.disclaimer_update,
				answer_attribution_update: this.answer_attribution_update,
				review_data: this.getReviewData()
			}
		},
		getReviewData: function() {
			if(this.lookup("editor").lookup("review_rating")) {
				var a = this.cQuery("editor:review_rating").$("#@star_rating .selected").attr("rating");
				if(a) return {
					base: a
				}
			}
			return null
		}
	}), a.SuggestedAnswerEditorToggleWrapper = e.ToggledComponent.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@inline_editor_content").hover(this.fnbind(function() {
				this.$("#@inline_editor_content").addClass("hover")
			}), this.fnbind(function() {
				this.$("#@inline_editor_content").removeClass("hover")
			}))
		}
	}), a.FeedStoryItem = c.extend({
		onLoad: function() {
			var a = this;
			this.$("#@item").hover(function(b) {
				a.$("#@item").addClass("hover")
			}, function(b) {
				a.$("#@item").removeClass("hover")
			})
		},
		getHash: function() {
			return this.hash
		}
	})
}), require.install("app/view/feed", function(require, a, b) {
	var c = require("webnode2"),
		d = require("event"),
		e = d.add,
		f = d.remove;
	a.UniversalPageFeed = require("view/paged_list").PagedList.extend({
		init: function(a) {
			this._super.apply(this, arguments), this.hash_impressions = {}, this.hash_clicks = {}, this.last_check_time = 0, this.needsRefresh = !1, this.offset = 0, this.firstElement = 0, this.numInitialQuestions = 0, this.rate_limiter_ms = 2500, this.wait_until_log_impression_ms = 2e3, this.page_load_time = +(new Date), this.impression_data = [], this.viewer_uid = a.uid, this.setDvar("feed_story_hash", null), this.setDvar("feed_story_position", null), this.setDvar("feed_story_initial", null), this.setDvar("feed_ty", a.feed_ty), this.setDvar("feed_page", a.feed_page), this.setDvar("page_data", a.page_data), this.setDvar("feed_location", a.feed_location)
		},
		onLoad: function(a) {
			this._super.apply(this, arguments);
			var b = this;
			this.recordImpressions(!0), setTimeout(function() {
				b.recordViews()
			}, 2e3);
			var c = this.fnbind(this.recordImpressions, !1);
			this._mousemove_handler = e(document, "mousemove", c), this._keypress_handler = e(document, "keypress", c), this._scroll_handler = e(document, "scroll", c)
		},
		onUnload: function() {
			f(document, "mousemove", this._mousemove_handler), f(document, "keypress", this._keypress_handler), f(document, "scroll", this._scroll_handler)
		},
		recordViews: function() {
			if(this.debug) return;
			var a = 3,
				b = this.children(),
				d = [],
				e = {},
				f = {},
				g = [];
			for(var h = 0; h < b.length; h++) {
				var i = b[h];
				if(!i.getHash || !i.getHash()) continue;
				var j = c._domids[i.cid];
				if(!j) continue;
				var k = document.getElementById(j);
				if(!k) continue;
				var l = $(k),
					m = l.children("div:first").is(":in-viewport");
				if(!m || !l.is(":visible")) continue;
				e[i.cid] = l.children("div:first").position().top, f[i.cid] = i, g.push(i.cid)
			}
			g.sort(function(a, b) {
				return e[a] - e[b]
			});
			for(var h = 0; h < Math.min(a, g.length); h++) d.push({
				hash: f[g[h]].getHash(),
				view_tracking_key: f[g[h]].view_tracking_key
			});
			this.viewer_uid && this.serverCall("log_views").kwargs({
				data: d
			}).send()
		},
		recordImpressions: function(a) {
			if(this.debug) return;
			var b = +(new Date),
				d = a || this.needsRefresh;
			this.needsRefresh = !1;
			if(!d && b < this.last_check_time + this.rate_limiter_ms) return;
			this.last_check_time = b;
			var e = this.children(),
				f = null,
				g;
			if(!a) {
				var h = this.offset;
				for(g = 0; g < e.length; g++) {
					var i = e[g];
					if(!i.getDvar) continue;
					if(i.getDvar("feed_story_hash") == this.firstElement) {
						var j = this.allOrderedChildren();
						for(var k = this.offset; k < j.length; k++) j[k] == c.getLiveDomId(i.cid) && (this.offset = k)
					}
				}
				this.offset != h && (d = !0)
			}
			for(g = 0; g < e.length; g++) {
				var i = e[g];
				if(!i.getHash) continue;
				var l = i.getHash();
				if(!l || this.hash_impressions[l]) continue;
				var m = c._domids[i.cid];
				if(!m) continue;
				var n = document.getElementById(m);
				if(!n) continue;
				var o = $(n),
					p = o.children("div:first").is(":in-viewport");
				if(!d && !p) continue;
				if(!d && !o.is(":visible")) continue;
				if(f == null) {
					var q = this.orderedVisibleChildren();
					f = {};
					for(var k = 0; k < q.length; k++) f[q[k]] = k - this.offset;
					if(a) for(var k = 0; k < e.length; k++) c.getLiveDomId(e[k].cid) == q[0] && (this.firstElement = e[k].getDvar("feed_story_hash"))
				}
				var r = f[m];
				d && (i.setDvar("feed_story_position", r), i.setDvar("feed_story_initial", !0)), p && o.is(":visible") && (this.hash_impressions[l] = !0, this.impression_data.push({
					hash: l,
					initially_visible: a || r >= 0 && r < this.numInitialQuestions,
					position: r
				}))
			}
			this.impression_data.length > 0 && this.viewer_uid && b - this.page_load_time >= this.wait_until_log_impression_ms && (this.serverCall("log_impressions").kwargs({
				data: this.impression_data
			}).send(), this.impression_data = [])
		}
	})
}), require.install("app/view/review_queue", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2");
	a.ReviewQueueItemsList = require("view/paged_list").PagedList.extend({
		init: function() {
			this._super.apply(this, arguments), this.seenItems = {}
		},
		onLoad: function(a) {
			this._super.apply(this, arguments), this.setShowHiddenCallback(this.fnbind(function() {
				this.markItemsAsSeen()
			})), this.markItemsAsSeen()
		},
		markItemsAsSeen: function() {
			var a = [],
				b = this.children(),
				c;
			for(c = 0; c < b.length; c++) {
				var e = b[c],
					f = d._domids[e.cid];
				if(!f || this.seenItems[f]) continue;
				var g = document.getElementById(f);
				if(!g) continue;
				var h = $(g);
				if(!h.is(":visible")) continue;
				e.getOid ? (a.push(e.getOid()), this.seenItems[f] = !0) : this.seenItems[f] = !1
			}
			a.length > 0 && !this.is_owner && this.serverCall("mark_as_seen").kwargs({
				queue_id: this.object_id,
				oids: a
			}).send()
		}
	}), a.ReviewQueueItem = c.extend({
		getOid: function() {
			return this.oid
		}
	})
}), require.install("app/view/share/connect", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2");
	a.SocialConnector = c.extend({
		connectLinkedin: function(a) {
			var b = this;
			$(document).one("linkedin_oauth_approved." + b.cid, function(c, d) {
				b.serverCall("connect_linkedin").kwargs({
					li_uid: d
				}).success(function() {
					b.trigger("linkedin_connected")
				}).liveMutate().send(), a && a()
			});
			var c = window.open("/linkedin_/oauth_window", "_BLANK", "height=365,width=600")
		},
		connectTwitter: function(a) {
			var b = this;
			$(document).one("twitter_oauth_approved." + b.cid, function(c, d) {
				var e = d.accessToken,
					f = d.userData;
				b.serverCall("connect_twitter").kwargs({
					access_token_key: e.key,
					screen_name: f.twitter_screen_name,
					tw_uid: f.twitter_uid,
					"protected": f["protected"]
				}).liveMutate().send(), a && a()
			});
			var c = window.open("/twitter/oauth_window", "_BLANK", "height=400,width=800")
		}
	})
}), require.install("app/view/settings", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("view/inline_editor").InlineEditor,
		e = require("app/view/share/connect").SocialConnector,
		f = require("window_manager"),
		g = require("webnode2");
	a.SettingsMain = c.extend({
		onLoad: function() {
			this.$("#@add_another_email_link").click(this.fnbind(function(a) {
				return this.$("#@add_another_email_row").toggleClass("hidden"), this.$("#@add_email_input_row").toggleClass("hidden"), this.$("#@new_email").focus(), !1
			})), this.$("#@add_another_phone_number_link").click(this.fnbind(function(a) {
				this.$("#@add_another_phone_number_row").toggleClass("hidden"), this.$("#@add_number_input_row").toggleClass("hidden"), this.$("#@new_number").focus()
			})), this.$("#@add_another_email").click(this.fnbind(function() {
				var a = this.$("#@new_email").val();
				return a ? (this.serverCall("add_email").kwargs({
					email: a
				}).liveMutate().send(), !1) : !1
			})), this.$("#@add_another_phone_number").click(this.fnbind(function() {
				var a = this.$("#@new_number").val();
				return a ? (this.serverCall("add_number").kwargs({
					number: a
				}).liveMutate().success(this.fnbind(function(b) {
					b != null && this.showConfirmationDialog(a, b)
				})).send(), !1) : !1
			}))
		},
		showConfirmationDialog: function(a, b) {
			return this.dialog().title("Confirm Phone Number").ok(null).html("We have sent a text message to <b>" + a + "</b>. " + "Please confirm this number belongs to you by replying to the message " + "with the following code: " + '<p class="confirmation_code">' + b + "</p>"), !1
		}
	});
	var h = a.SettingsOption = c.extend({
		onLoad: function(a) {
			this.$("#@view_option_link").click(this.fnbind(function() {
				return this.expandOption(), !1
			})), this.auto_open_url_hash && a && f.getHash().substr(0, 30) == "#" + this.auto_open_url_hash && (this.expandOption(), this.$("#@option_content").css("background-color", "#E0E0E0").effect("highlight", {}, 1500))
		},
		expandOption: function() {
			this.$("#@view_option").toggleClass("hidden"), this.$("#@option_content").toggleClass("hidden")
		}
	});
	a.AdultSettingsOptionToggle = c.extend({
		onLoad: function() {
			this.$("#@no_adult_content").click(this.fnbind(function() {
				return this.serverCall("no_adult_content").liveMutate().send(), !1
			})), this.$("#@allow_adult_content").click(this.fnbind(function() {
				return this.serverCall("allow_adult_content").liveMutate().send(), !1
			}))
		}
	}), a.ReviewerAdminOptionToggle = c.extend({
		onLoad: function() {
			this.$("#@hide_reviewer_controls").click(this.fnbind(function() {
				return this.serverCall("hide_reviewer_controls").liveMutate().send(), !1
			})), this.$("#@show_reviewer_controls").click(this.fnbind(function() {
				return this.serverCall("show_reviewer_controls").liveMutate().send(), !1
			}))
		}
	}), a.PersonalSearchSettingsOptionToggle = c.extend({
		onLoad: function() {
			this.$("#@public_link").click(this.fnbind(function() {
				return this.toggle(), this.serverCall("public").liveMutate().send(), !1
			})), this.$("#@no_crawl_link").click(this.fnbind(function() {
				return this.toggle(), this.serverCall("no_crawl").liveMutate().send(), !1
			}))
		},
		toggle: function() {
			this.$("#@public").toggleClass("hidden"), this.$("#@no_crawl").toggleClass("hidden")
		}
	}), a.SecureBrowsingSettingsOptionToggle = c.extend({
		onLoad: function() {
			this.$("#@https_link").click(this.fnbind(function() {
				return this.toggle(), this.serverCall("https").liveMutate().send(), !1
			})), this.$("#@no_https_link").click(this.fnbind(function() {
				return this.toggle(), this.serverCall("no_https").liveMutate().send(), !1
			}))
		},
		toggle: function() {
			this.$("#@https").toggleClass("hidden"), this.$("#@no_https").toggleClass("hidden")
		}
	}), a.ViewSettingsOptionToggle = c.extend({
		onLoad: function() {
			this.$("#@disable_views").click(this.fnbind(function() {
				return this.serverCall("disable_views").liveMutate().send(), !1
			})), this.$("#@enable_views").click(this.fnbind(function() {
				return this.serverCall("enable_views").liveMutate().send(), !1
			}))
		}
	}), a.AskToAnswerOnlineStatusOptionToggle = c.extend({
		onLoad: function() {
			this.$("#@disable").click(this.fnbind(function() {
				return this.serverCall("disable").liveMutate().send(), !1
			})), this.$("#@enable").click(this.fnbind(function() {
				return this.serverCall("enable").liveMutate().send(), !1
			}))
		}
	}), a.FeatureSettingsOptionToggle = c.extend({
		onLoad: function() {
			this.$("#@disable").click(this.fnbind(function() {
				return this.serverCall("disable").liveMutate().send(), !1
			})), this.$("#@enable").click(this.fnbind(function() {
				return this.serverCall("enable").liveMutate().send(), !1
			}))
		}
	}), a.UserDisclaimerDialogEditor = d.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@inline_editor_cancel").click(this.fnbind(function() {
				return g.Dialog.dialogFor(this).close_(), !1
			})), this.$("#@inline_editor_submit").click(this.fnbind(function() {
				return g.Dialog.openerFor(this).user_has_set_disclaimer = !0, g.Dialog.openerFor(this).attachDisclaimer(), g.Dialog.dialogFor(this).close_(), !1
			}))
		}
	}), a.ChangePasswordOption = h.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.clear_passwords = function() {
				this.$("#@old_password").val(""), this.$("#@new_password").val(""), this.$("#@confirm_password").val("")
			}, this.$("#@view_option_link").click(this.fnbind(function() {
				return this.$("#@old_password").focus(), !1
			})), this.$("#@change_password_submit").click(this.fnbind(function() {
				return g.rpc("/settings/change_password_POST").kwargs({
					old_password: this.$("#@old_password").val(),
					new_password: this.$("#@new_password").val()
				}).success(this.fnbind(function(a) {
					this.clear_passwords(), a[0] ? (this.$("#@old_password_no_match").addClass("hidden"), this.$("#@password_changed").removeClass("hidden")) : (this.$("#@old_password_no_match").text(a[1]).removeClass("hidden"), this.$("#@password_changed").addClass("hidden"))
				})).error(this.fnbind(function(a) {})).send(), !1
			}))
		}
	}), a.DeactivateAccountOption = h.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@deactivate_account_submit").click(this.fnbind(function() {
				return this.openDialog(), !1
			}))
		},
		openDialog: function() {
			this._dialog = this.dialog().title("Confirm Account Deactivation").ok(this.fnbind(function() {
				this.serverCall("deactivate_account").success(this.fnbind(function() {
					f.navigateTo("/login?__pmsg__=deactivate_account")
				})).send()
			}), "Deactivate").cancel(null, "Cancel").html("Are you sure you want to deactivate your account?")
		}
	}), a.TumblrBlogList = c.extend({
		onLoad: function() {
			this.$("#@menu_link").click(this.fnbind(function() {
				return this.$("#@menu_items").menu(this.$("#@menu_link")), !1
			})), this.$("%@blogs").click(this.fnbind(function(a) {
				return this.connectBlog($(a.target).attr("name")), !1
			}))
		},
		connectBlog: function(a) {
			this.serverCall("connect_tumblr").kwargs({
				url: a
			}).liveMutate().success(function(a) {
				a != "OK" && alert("Couldn't connect to Tumblr blog")
			}).send()
		}
	}), a.BlogConnectDialogContents = c.extend({
		onLoad: function() {
			this.$("#@url, #@uname, #@pwd").focus(this.fnbind(function() {
				this.$("#@blog_not_supported").hide()
			})), this.$("#@url, #@uname, #@pwd").keydown(this.fnbind(function(a) {
				a.keyCode == 13 && this.submitForm()
			})), this.$("#@url").blur(this.fnbind(function() {
				this.$("#@wordpress_login_help").hide();
				var a = this.$("#@url").val();
				a.match("wordpress") && this.$("#@wordpress_login_help").show()
			})), this.$("#@close").click(this.fnbind(function() {
				return g.Dialog.dialogFor(this).close_(), !1
			})), this.$("#@connect").click(this.fnbind(function() {
				this.submitForm()
			}))
		},
		submitForm: function() {
			var a = this.$("#@url").val(),
				b = this.$("#@uname").val(),
				c = this.$("#@pwd").val();
			a && b && c && this.serverCall("validate_blog").kwargs({
				url: a,
				name: b,
				pwd: c
			}).liveMutate().success(this.fnbind(function(a) {
				var b = a[0],
					c = a[1];
				b ? g.Dialog.dialogFor(this).close_() : this.$("#@blog_not_supported").show().text(c)
			})).send()
		}
	}), a.BlogConnect = c.extend({
		onLoad: function() {
			this.$("#@tumblr_connect_button").click(this.fnbind(function() {
				this.connectTumblr()
			})), this.$("#@wordpress_connect_button").click(this.fnbind(function() {
				return this.connectWordpress(), !1
			})), this.$("#@blog_disconnect_button").click(this.fnbind(function() {
				return this.serverCall("blog_disconnect").liveMutate().send(), !1
			}))
		},
		connectWordpress: function() {
			this._dialog = this.dialog().title("Connect Your Blog").close(null).load("set_dialog_contents")
		},
		connectTumblr: function() {
			var a = this;
			$(document).one("tumblr_oauth_approved." + a.cid, function(b, c) {
				a.serverCall("connect_tumblr").kwargs({
					url: c
				}).liveMutate().success(function(a) {
					a != "OK" && alert("Couldn't connect to Tumblr blog")
				}).send()
			});
			var b = window.open("/tumblr_/oauth_window", "_BLANK", "height=500,width=600")
		}
	}), a.TwitterConnect = c.extend({
		onLoad: function() {
			this.$("#@twitter_disconnect_button").click(this.fnbind(function() {
				return this.serverCall("twitter_disconnect").liveMutate().send(), !1
			}))
		}
	}), a.LinkedinConnect = c.extend({
		onLoad: function() {
			this.$("#@linkedin_disconnect_button").click(this.fnbind(function() {
				return this.serverCall("disconnect_linkedin").liveMutate().send(), !1
			}))
		}
	}), a.LinkedinConnectButton = e.extend({
		onLoad: function() {
			var a = this;
			a.$("#@linkedin_connect_button").click(a.fnbind(function() {
				this.connectLinkedin()
			}))
		}
	}), a.LinkedinPublicProfileLink = c.extend({
		onLoad: function() {
			this.serverCall("get_profile_info").kwargs({
				li_uid: this.liUid
			}).success(this.fnbind(function(a) {
				a == null ? this.$("#@linkedin_link").text("").attr("href", "#") : this.$("#@linkedin_link").text(a.first_name + " " + a.last_name).attr("href", a.url)
			})).send()
		}
	}), a.EmailSettings = c.extend({
		updateSettings: function() {
			var a = this.$("#@form").serializeArray();
			this.serverCall("update_settings").kwargs({
				items: a
			}).liveMutate().send()
		}
	}), a.EmailSettingsSection = c.extend({
		onLoad: function() {
			this.$("#@view_section_link").click(this.fnbind(function() {
				return this.$("#@view_section").removeClass("hidden"), this.$("#@view_section_span").addClass("hidden"), !1
			}))
		}
	}), a.EmailSettingCheckbox = c.extend({
		onLoad: function() {
			this.$("#@checkbox").change(this.fnbind(function() {
				this.lookup("email_settings").updateSettings()
			}))
		}
	}), a.EmailSettingMenuOption = c.extend({
		onLoad: function() {
			this.$("#@menu_link").click(this.fnbind(function() {
				return this.$("#@menu_items").menu(this.$("#@menu_link")), !1
			})), this.$("%@reason").click(this.fnbind(function(a) {
				var b = this.cQuery(":checkbox").$("#@checkbox");
				return b.attr("checked", !0), b.attr("name", $(a.target).attr("name")), this.$("#@display_text").text($(a.target).text()), this.$("%@reason").removeClass("selected"), $(a.target).addClass("selected"), this.lookup("email_settings").updateSettings(), !1
			}))
		}
	}), a.EmailAddressRow = c.extend({
		onLoad: function() {
			var a = this,
				b = {
					resend: function() {
						return a._serverCallHelper("resend_email_confirmation")
					},
					primary: function() {
						return a._serverCallHelper("set_primary_email")
					},
					remove: function() {
						return a._serverCallHelper("remove_email")
					}
				};
			this.$("#@confirm_email").click(this.fnbind(function() {
				return this.dialog().title("Resend Confirmation Email").ok(this.fnbind(function() {
					b.resend()
				}), "Send").cancel(null).html("Resend a confirmation email to " + a.email + "."), !1
			})), this.$("#@make_primary").click(b.primary), this.$("#@delete_email").click(function() {
				return $(".content").dialog({
					title: "Remove Email Address",
					contents: "Are you sure you want to delete the " + a.email + " address?",
					buttons: {
						Delete: b.remove,
						Cancel: null
					}
				}), !1
			})
		},
		_serverCallHelper: function(a) {
			return this.serverCall(a).kwargs({
				email: this.email
			}).liveMutate().send(), !1
		}
	}), a.PhoneNumberRow = c.extend({
		onLoad: function() {
			var a = this,
				b = {
					confirm: function() {
						return a._serverCallHelper("resend_confirmation_code")
					},
					primary: function() {
						return a._serverCallHelper("set_primary_number")
					},
					remove: function() {
						return a._serverCallHelper("remove_number")
					}
				};
			this.$("#@confirm_number").click(this.fnbind(function() {
				b.confirm(), this.lookup("settings_main").showConfirmationDialog(a.number, a.code)
			})), this.$("#@make_primary").click(b.primary), this.$("#@delete_number").click(function() {
				return $(".content").dialog({
					title: "Remove Phone Number",
					contents: "Are you sure you want to delete the number <b>" + a.number + "</b>?",
					buttons: {
						Delete: b.remove,
						Cancel: null
					}
				}), !1
			})
		},
		_serverCallHelper: function(a) {
			return this.serverCall(a).kwargs({
				number: this.number
			}).liveMutate().send(), !1
		}
	}), a.ResetPassword = c.extend({
		onLoad: function() {
			this.$("#@reset_email_submit").click(this.fnbind(function(a) {
				var b = this.$("#@email_input").val();
				return b ? (this.emailRequest("/settings/send_reset_password_email_POST", b), !1) : !1
			})), this.$("#@reset_password_form_tag").submit(this.fnbind(function(a) {
				var b = this.$("#@reset_password_code").val(),
					c = this.$("#@new_password").val();
				return c ? (this.passwordRequest("/settings/reset_password_POST", b, c), !1) : !1
			}))
		},
		emailRequest: function(a, b) {
			return g.rpc(a).kwargs({
				email: b
			}).success(this.fnbind(function(a) {
				this.$("#@email_input").val(""), this.$("#@reset_email_conf").removeClass("hidden"), this.$("#@reset_email_form").addClass("hidden")
			})).send(), !1
		},
		passwordRequest: function(a, b, c) {
			return g.rpc(a).kwargs({
				code: b,
				new_password: c
			}).success(this.fnbind(function(a) {
				a ? f.navigateTo("/?__pmsg__=password_changed") : f.navigateTo("/settings/reset_password?__pmsg__=password_change_error")
			})).send(), !1
		}
	});
	var i = {};
	a.onTwitterConnect = function() {
		$(i).trigger("connect")
	}, a.TwitterConnectButton = e.extend({
		onLoad: function() {
			this.$("#@twitter_connect_button").click(this.fnbind(function() {
				this.connectTwitter()
			})), $(i).bind("connect", this.fnbind(function() {
				this.connectTwitter()
			}))
		}
	}), a.FollowUnfollowTopicOnTwitter = c.extend({
		onLoad: function() {
			this.$("#@follow").click(this.fnbind(function() {
				return this.follow(), !1
			})), this.$("#@unfollow").click(this.fnbind(function() {
				return this.unfollow(), !1
			}))
		},
		follow: function() {
			this.serverCall("follow").liveMutate().send()
		},
		unfollow: function() {
			this.serverCall("unfollow").liveMutate().send()
		}
	})
}), require.install("app/view/share", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2"),
		e, f = a.ShareAction = c.extend({
			onLoad: function() {},
			showDialog: function() {
				return e ? !1 : (e = !0, this._dialog = this.dialog().title("Share " + this.what).close(function() {
					e = !1
				}).load("share_dialog"), !1)
			},
			events: {
				"click #@share": "showDialog"
			}
		}),
		g;
	a.AutoShowShareAction = f.extend({
		onLoad: function() {
			g = this
		},
		show: function(a) {
			this.__js_init = a, setTimeout(this.fnbind(this.showDialog), 1500)
		}
	}), a.showShareAction = function(a) {
		g && g.show(a)
	};
	var h = c.extend({
		regexUrl: /(https?:\/\/[a-zA-Z0-9](?:[-a-zA-Z0-9]*\.)+[a-zA-Z]{2,}(?:\/[^\/\s]+)*\/?)(?:\s|$)/gi,
		tweetLength: function(a) {
			if(!a) return 0;
			var b = a.length,
				c = [];
			return a.replace(this.regexUrl, function(a, b) {
				c.push(b)
			}), b -= c.join("").length, $.each(c, function(a, c) {
				b += c.match(/https:/) ? 21 : 20
			}), b
		},
		countCharacters: function() {
			var a = this.fnbind(function() {
				var a = 140 - this.tweetLength(this.$("#@tweet").val());
				this.showCount && (this.$("#@counter").text(a), a < 0 ? this.$("#@counter").addClass("diffdelete") : this.$("#@counter").removeClass("diffdelete")), this.shareButton && (this.showCount && (a < 0 || a === 140) ? this.$(this.shareButton).addClass("submit_button_disabled") : this.$(this.shareButton).removeClass("submit_button_disabled"))
			});
			return this.$("#@tweet").bind("keyup", a).bind("focus", a), a
		}
	});
	a.TwitterShare = h.extend({
		onLoad: function() {
			this.countCharacters(), this.showCount = !0, this.shareButton = "#@tweet_button", this.tweeted = !1
		},
		events: {
			"click #@tweet_button": "onClickTweetButton",
			"click #@close": "onClickClose"
		},
		onClickTweetButton: function() {
			var a = this.$("#@tweet").val();
			return !a || this.tweetLength(a) > 140 || this.tweeted ? !1 : (this.tweeted = !0, this.serverCall("tweet").kwargs({
				tweet: a
			}).success(this.fnbind(function() {
				d.Dialog.dialogFor(this).close_()
			})).send(), this.$("#@tweet_button").addClass("submit_button_disabled"), this.$("#@tweet_form").hide(), this.$("#@tweet_sending").show(), !1)
		},
		onClickClose: function() {
			return d.Dialog.dialogFor(this).close_(), !1
		}
	}), a.EmailShare = c.extend({
		onLoad: function() {
			this.email = ""
		},
		setTo: function(a) {
			this.email = a
		},
		events: {
			"click #@send": "onClickSend",
			"click #@close": "onClickClose"
		},
		onClickSend: function() {
			var a = this.email;
			return a || (a = this.lookup("selector").getValue()), !a || !this.$("#@subject").val() || !this.$("#@body").val() ? !1 : (this.serverCall("email").kwargs({
				email: a,
				subject: this.$("#@subject").val(),
				body: this.$("#@body").val()
			}).success(this.fnbind(function() {
				d.Dialog.dialogFor(this).close_()
			})).send(), !1)
		},
		onClickClose: function() {
			return d.Dialog.dialogFor(this).close_(), !1
		}
	}), a.LinkedinShare = c.extend({
		onLoad: function() {
			this.shareButton = "#@linkedin_share_button", this.sent = !1, this.child("linkedin_connect_button").bind("linkedin_connected", this.fnbind(function() {
				this.$("#@linkedin_connect_button_wrapper").hide(), this.$("#@linkedin_form").show(), this.$("#@linkedin_share_button").show()
			}))
		},
		events: {
			"click #@linkedin_share_button": "onClickLinkedinShareButton",
			"click #@close": "onClickClose"
		},
		onClickLinkedinShareButton: function() {
			if(this.sent) return !1;
			var a = this.$("#@linkedin_message").val();
			return this.sent = !0, this.serverCall("linkedin_share").kwargs({
				message: a
			}).success(this.fnbind(function() {
				d.Dialog.dialogFor(this).close_()
			})).send(), this.$("#@linkedin_share_button").addClass("submit_button_disabled"), this.$("#@linkedin_form").hide(), this.$("#@linkedin_sending").show(), !1
		},
		onClickClose: function() {
			return d.Dialog.dialogFor(this).close_(), !1
		}
	}), a.BlogShare = c.extend({
		onLoad: function() {},
		events: {
			"click #@share": "onClickShare",
			"click #@close": "onClickClose"
		},
		onClickShare: function(a) {
			var b = this.$("#@post_title").val(),
				c = this.lookup("editor").serialize();
			return b && c && this.serverCall("share").kwargs({
				title: b,
				msg: c
			}).liveMutate().success(this.fnbind(function() {
				d.Dialog.dialogFor(this).close_()
			})).send(), !1
		},
		onClickClose: function() {
			return d.Dialog.dialogFor(this).close_(), !1
		}
	}), a.PublishCheckboxes = c.extend({
		onLoad: function() {
			this.$("#@twitter_label").tooltip({
				contents: "Share With Your Twitter Followers"
			}), this.$("#@facebook_label").tooltip({
				contents: "Share With Your Facebook Friends"
			}), require("facebook").asyncUpdatePermissions();
			var a = this.child("facebook_connect");
			$(a).bind("fb_login_failed", this.fnbind(function() {
				this.check("facebook", !1)
			}))
		},
		check: function(a, b) {
			this.$("#@" + a).attr("checked", b)
		},
		saveCheckedState: function(a, b) {
			b && a === "twitter" && !this.tw_uid ? require("app/view/settings").onTwitterConnect() : b && a === "facebook" && !this.fb_uid && this.child("facebook_connect").connect()
		},
		shouldPublishToFacebook: function() {
			return this.$("#@facebook").is(":checked")
		},
		shouldPublishToTwitter: function() {
			return this.$("#@twitter").is(":checked")
		},
		hide: function() {
			this.$("#@publish_checkboxes").hide()
		},
		show: function() {
			this.$("#@publish_checkboxes").show()
		},
		events: {
			"click #@twitter_label": "onClickTwitterLabel",
			"click #@facebook_label": "onClickFacebookLabel"
		},
		onClickTwitterLabel: function(a) {
			var b = this.$("#@twitter").is(":checked");
			a.target !== this.$("#@twitter")[0] && (this.check("twitter", !b), b = !b), this.saveCheckedState("twitter", b)
		},
		onClickFacebookLabel: function(a) {
			var b = this.$("#@facebook").is(":checked");
			a.target !== this.$("#@facebook")[0] && (this.check("facebook", !b), b = !b), this.saveCheckedState("facebook", b)
		}
	})
}), require.install("app/view/question", function(require, a, b) {
	function k(a) {
		var b = $(window).scrollTop();
		a = a.top - 30, (a < b || b == 0) && $(window).scrollTop(a);
		return
	}
	var c = require("w2.quora").Component,
		d = require("webnode2"),
		e = require("view/inline_editor").InlineEditor,
		f = require("cookies"),
		g = require("view/toggle"),
		h = require("window_manager").isInHash,
		i = require("event").add;
	require("dialog"), a.QuestionBestSourceIcon = c.extend({
		onLoad: function(a) {
			this.comment ? this.$("#@icon").tooltip({
				contents: "Best Source: " + this.comment
			}) : this.$("#@icon").tooltip({
				contents: "Question marked as the best source for related information."
			})
		}
	}), a.QuestionLink = c.extend({
		onLoad: function() {
			this.$("#@link").mousedown(this.fnbind(function() {
				f.setQfeedLog(this, "QuestionClickthrough"), f.setQueryLog(this, "QuestionClickthrough")
			}))
		}
	}), a.RelatedQuestionLinkTracked = c.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				f.setMessage("rqc", [this.experiment_id, this.clicktrack_id, this.qid, this.rank])
			}))
		}
	}), a.QuestionSettingsLink = c.extend({
		onLoad: function() {
			this.$("#@question_settings_link").click(this.fnbind(function(a) {
				return this.$("#@question_settings_menu").menu(this.$("#@question_settings_link")), !1
			}))
		}
	}), a.AddMonitorQuestionLink = c.extend({
		onLoad: function() {
			this.$("#@add_monitor").click(this.fnbind(function(a) {
				return this.serverCall("add_monitor").liveMutate().send(), !1
			}))
		}
	}), a.RemoveMonitorQuestionLink = c.extend({
		onLoad: function() {
			this.$("#@remove_monitor").click(this.fnbind(function(a) {
				return this.serverCall("remove_monitor").liveMutate().send(), !1
			}))
		}
	});
	var j = a.QuestionFollowing = c.extend({
		onLoad: function() {
			this.$("#@follow").click(this.fnbind(function() {
				return f.setTlog({
					type: "QuestionFollow",
					qid: this.qid
				}), require("action_log").logAction("QuestionFollow", null, {
					type: "question",
					qid: this.qid
				}), this.follow(), !1
			})), this.$("#@unfollow").click(this.fnbind(function() {
				return this.unfollow(), !1
			}))
		},
		follow: function() {
			var a = $("#topic_visibility_context"),
				b = a.val();
			this.serverCall("follow").kwargs({
				qid: this.qid,
				topic_visibility_context: b || 0
			}).liveMutate().send()
		},
		unfollow: function() {
			this.serverCall("unfollow").kwargs({
				qid: this.qid
			}).liveMutate().send()
		},
		keyEvents: function(a) {
			switch(a) {
			case 70:
				return this.follow(), !1;
			case 78:
				return this.unfollow(), !1
			}
		}
	});
	a.QuestionFollowingLink = j.extend({
		onLoad: function(a) {
			this.$("#@follow").mousedown(this.fnbind(function() {
				f.setQfeedLog(this, "QuestionFollow"), f.setQueryLog(this, "QuestionFollow")
			})), this._super.apply(this, arguments)
		}
	}), a.QuestionAnonLink = c.extend({
		onLoad: function() {
			this.$("#@set_anon").click(this.fnbind(function() {
				return this.setAnon(), !1
			})), this.$("#@set_public").click(this.fnbind(function() {
				return this.setPublic(), !1
			}))
		},
		setAnon: function() {
			this.serverCall("set_anon_question").kwargs({
				qid: this.qid
			}).liveMutate().send()
		},
		setPublic: function() {
			$(".content").dialog({
				title: "Remove Question Anonymity",
				contents: "Are you sure you want to be publicly associated with this question?",
				mobile: this.mobile,
				buttons: {
					"Remove Anonymity": this.fnbind(function() {
						this.serverCall("set_public_question").kwargs({
							qid: this.qid
						}).liveMutate().send()
					}),
					Cancel: null
				}
			})
		}
	}), a.QuestionRedirectLink = c.extend({
		onLoad: function() {
			this.$("#@remove_redirect").click(this.fnbind(function() {
				return this.serverCall("remove_redirect_question").kwargs({
					qid: this.qid
				}).liveMutate().send(), !1
			}))
		}
	}), a.UnsubscribeQuestionEmailsLink = c.extend({
		onLoad: function() {
			this.$("#@unsubscribe").click(this.fnbind(function() {
				this.serverCall("unsubscribe").kwargs({
					qid: this.qid
				}).liveMutate().send()
			}))
		}
	}), a.QuestionArea = g.SwitchableComponent.extend({
		switchAction: function() {
			this.lookup("comment_switch").viewComments()
		}
	}), a.QuestionDeleteLink = c.extend({
		onLoad: function() {
			var a = this;
			this.$("#@delete_question_link").click(function() {
				return $(".content").dialog({
					title: "Question Delete",
					contents: "Are you sure you wish to delete this question?",
					buttons: {
						Ok: function() {
							a._request("delete_question")
						},
						Cancel: null
					}
				}), !1
			}), this.$("#@undelete_question_link").click(function() {
				return $(".content").dialog({
					title: "Restore Question",
					contents: "Are you sure you wish to restore this question?",
					buttons: {
						Ok: function() {
							a._request("undelete_question")
						},
						Cancel: null
					}
				}), !1
			})
		},
		_request: function(a) {
			this.serverCall(a).kwargs({
				qid: this.qid
			}).liveMutate().send()
		}
	}), a.QuestionDeleteDialog = AddCommentDialog.extend({
		getPars: function() {
			return this.comment_required && this.lookup("editor").isEmpty() ? !1 : {
				comment: this.lookup("editor").serialize(),
				review: this.review
			}
		}
	}), a.MobileQuestionTopics = c.extend({
		toggleTopicEditor: function() {
			this.$("#@view_topics_list").toggleClass("hidden"), this.$("#@edit_topics_list").toggleClass("hidden")
		}
	}), a.MobileEditTopicsLink = c.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this.lookup("question_topics").toggleTopicEditor(), !1
			}))
		}
	}), a.AnswerActions = g.SwitchableComponent.extend({
		init: function(a) {
			this._super.apply(this, arguments), this.ajax_path = "/question/ajax_edit_answer_POST"
		},
		getFacebookLikeHoverArea: function() {
			return this.$("#@answer")
		},
		onVisible: function() {
			if(!this.initState("first_call", !0) && h("ans" + this.aid)) {
				var a = this.lookup("collapsed_answers_div");
				a && a.$("#@expanded_content").has(this.$("#@answer")).size() && a.expandAnswers(), this.$("#@answer").addClass("highlighter");
				var b = this.$("#@answer").offset();
				k(b), $(window).scroll(this.fnbind(function() {
					var a = $(window).scrollTop();
					a - 30 > b.top && this.$("#@answer").removeClass("highlighter")
				}))
			}
		},
		onLoad: function(a) {
			this.$("#@answer_versions_link").click(this.fnbind(function(a) {
				return this.$("#@answer_versions").toggleClass("hidden"), !1
			})), this.$("#@answer_content_uncollapse_link").click(this.fnbind(function(a) {
				return this.$("#@answer").toggleClass("hidden"), this.$("#@bad_answer").toggleClass("hidden"), !1
			})), this.$("#@show_actions").click(this.fnbind(function() {
				return this.$("#@show_actions").addClass("hidden"), this.$("#@show_actions_bullet").addClass("hidden"), this.$("#@actions_list").removeClass("hidden"), !1
			})), this.$("#@answer_user").hover(this.fnbind(function(a) {
				this.$("#@answer_user").addClass("hover")
			}), this.fnbind(function(a) {
				this.$("#@answer_user").removeClass("hover")
			})), this.unseen.bound || (i(document, "scroll", this.fnbind(this.recordImpressions)), setTimeout(this.fnbind(this.recordImpressions), 400), this.unseen.bound = !0), this.unseen.answers[this.cid] = this, this.setCallback(this.fnbind(function() {
				this.lookup("comment_switch").viewComments()
			}))
		},
		unseen: {
			bound: !1,
			answers: {},
			lastCheckTime: 0,
			rateLimit: 500
		},
		recordImpressions: function() {
			var a = +(new Date);
			if(a < this.unseen.lastCheckTime + this.unseen.rateLimit) return;
			this.unseen.lastCheckTime = a;
			var b = [],
				c = [];
			for(var d in this.unseen.answers) {
				var e = this.unseen.answers[d];
				e.$("#@answer").is(":in-viewport") && (b.push(e), c.push(e.aid), delete this.unseen.answers[d])
			}
			b.length > 0 && b[0].serverCall("log_impressions").kwargs({
				seen: c
			}).send()
		},
		onUnload: function() {
			delete this.unseen.answers[this.cid]
		}
	}), a.AnswerDeleteLink = c.extend({
		onLoad: function() {
			this.$("#@answer_delete").click(this.fnbind(function(a) {
				return this._dialog = this.dialog().title("Delete Answer").cancel(null, "Cancel").ok(this.fnbind(function() {
					this.request("remove_answer")
				}), "Delete Answer").close(this.fnbind(function() {
					this._dialog = null
				})).html("Are you sure you wish to delete this answer?"), !1
			})), this.$("#@answer_undelete").click(this.fnbind(function(a) {
				return this._dialog = this.dialog().title("Restore Answer").cancel(null, "Cancel").ok(this.fnbind(function() {
					this.request("unremove_answer")
				}), "Restore Answer").close(this.fnbind(function() {
					this._dialog = null
				})).html("Are you sure you wish to restore this answer?"), !1
			}))
		},
		request: function(a) {
			this.serverCall(a).kwargs({
				aid: this.aid
			}).liveMutate().send()
		}
	}), a.AnswerPermaLink = c.extend({
		onLoad: function() {
			this.$("#@link").mousedown(this.fnbind(function() {
				f.setQfeedLog(this, "AnswerClickthrough"), f.setQueryLog(this, "AnswerClickthrough")
			}))
		}
	});
	var l = a.AnswerVotingButtons = c.extend({
		upvote: function() {
			f.setTlog({
				type: "AnswerVoteUp",
				aid: this.aid
			}), f.setQfeedLog(this, "AnswerUpvote"), f.setQueryLog(this, "AnswerUpvote"), require("action_log").logAction("AnswerUpvote", null, {
				type: "answer",
				aid: this.aid
			});
			var a = $("#topic_visibility_context").val();
			this.serverCall("answer_vote_up").kwargs({
				aid: this.aid,
				topic_visibility_context: a || 0
			}).liveMutate().send()
		},
		cancelUpvote: function() {
			this.serverCall("answer_vote_up_cancel").kwargs({
				aid: this.aid
			}).liveMutate().send()
		},
		downvote: function() {
			f.setTlog({
				type: "AnswerVoteDown",
				aid: this.aid
			}), this.serverCall("answer_vote_down").kwargs({
				aid: this.aid
			}).liveMutate().send()
		},
		cancelDownvote: function() {
			this.serverCall("answer_vote_down_cancel").kwargs({
				aid: this.aid
			}).liveMutate().send()
		},
		onLoad: function(a) {
			this.$("#@answer_vote_up_cancel_link").click(this.fnbind(function() {
				return this.cancelUpvote(), !1
			})), this.$("#@answer_vote_up_link").click(this.fnbind(function() {
				return this.upvote(), !1
			})), this.$("#@answer_vote_down_cancel_link").click(this.fnbind(function() {
				return this.cancelDownvote(), !1
			})), this.$("#@answer_vote_down_link").click(this.fnbind(function() {
				return this.downvote(), !1
			}))
		}
	});
	a.FeedAnswerVotingButtons = l.extend({
		keyEvents: function(a) {
			switch(a) {
			case 85:
				return this.upvote(), !1;
			case 68:
				return this.downvote(), !1
			}
		}
	}), a.AnswerUserSigEditorLink = c.extend({
		onLoad: function() {
			this.tooltip && this.$("#@link").tooltip({
				contents: this.tooltip
			}), this.$("#@link").click(this.fnbind(function() {
				return this.click(), !1
			}))
		},
		click: function() {
			return this.dialog().opt("closeOnClickOut", !0).title(this.title).cancel("Done").load("get_editor"), !1
		}
	}), a.AnswerAddInstructions = c.extend({
		onLoad: function() {
			this.$("#@view_deleted_answer").click(this.fnbind(function() {
				return this.$("#@deleted_answer").toggleClass("hidden"), !1
			}))
		}
	}), a.CreateAnswerWikiLink = c.extend({
		onLoad: function() {
			this.$("#@create_answer_wiki").click(this.fnbind(function() {
				return $("#answer_wiki").toggleClass("hidden"), !1
			}))
		}
	}), a.EmptyAnswerHeaderDialogContents = c.extend({
		onLoad: function() {
			this.allowInvites = !0, this.lookup("selector").focus()
		},
		setTo: function(a) {
			d.Dialog.openerFor(this).email = a, d.Dialog.openerFor(this).msg = this.$("#@msg_contents").val()
		}
	}), a.EmptyAnswerHeader = c.extend({
		onLoad: function() {
			this.$("#@invite_to_answer").click(this.fnbind(function() {
				return this.openDialog(), !1
			})), this.$("#@ask_to_answer").click(this.fnbind(function() {
				return this.$("#@empty_container, #@suggestions_container").toggleClass("hidden"), !1
			}))
		},
		setTo: function(a) {
			this.email = a, this.openDialog()
		},
		openDialog: function() {
			this._dialog = this.dialog().title("Invite Someone Who Can Answer This Question").ok(this.fnbind(function() {
				var a = arguments[0].dialogComponent,
					b = a.lookup("selector").$("#@input").val(),
					c = a.$("#@msg_contents").val();
				b && c && this.serverCall("invite_users").kwargs({
					invite_email: b,
					msg: c
				}).liveMutate().success(this.fnbind(function() {
					this.allowInvites = !0
				})).send()
			}), "Send Invite").cancel(null, "Cancel").load("invite_to_answer_dialog_contents", {
				kwargs: {
					email: this.email
				}
			})
		}
	}), a.AnswerListDiv = c.extend({
		show: function() {
			this.$("#@collapsed").show()
		}
	});
	var m = a.NewAnswerEditor = e.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.disclaimer_update = "", this.lookup("editor").setFocusCallback(this.fnbind(function() {
				this.$("#@later").addClass("hidden"), this.$("#@draft").removeClass("hidden"), this.lookup("editor_options").$("#@english_warning").show()
			}))
		},
		submitHandler: function() {
			this.input_button_obj.click(this.fnbind(function() {
				if(this.lookup("editor").lookup("review_rating")) {
					var a = this.cQuery("editor:review_rating").$("#@star_rating .selected").attr("rating");
					a ? d.InputValidator.validate(this, {
						valid: this.fnbind(this.trigger_request),
						invalid: function() {}
					}) : this.cQuery("editor:review_rating").$(".inline_label").addClass("error")
				} else d.InputValidator.validate(this, {
					valid: this.fnbind(this.trigger_request),
					invalid: function() {}
				});
				return !1
			}))
		},
		invokeEditServerCall: function(a) {
			if(this.getFacebookCheckbox() && !require("facebook").hasPermission("publish_actions")) {
				var b = arguments,
					c = this._super;
				require("facebook").requestPermissions("publish_stream", this.fnbind(function(a) {
					c.apply(this, b)
				}))
			} else this._super.apply(this, arguments)
		},
		ajax_callback: function(a) {
			return a.share_data.autoShowShareDialog && require("app/view/share").showShareAction(a.share_data), this._super.apply(this, arguments)
		},
		tlog_data: function() {
			return {
				type: "AddAnswer"
			}
		},
		getLoggedAction: function() {
			return "AnswerAdd"
		},
		_get_kwargs: function() {
			return {
				id: this.id,
				input: this.get_value(),
				disclaimer_update: this.disclaimer_update,
				tw_checked: this.getTwitterCheckbox(),
				fb_checked: this.getFacebookCheckbox(),
				fb_uid: require("facebook").getFbUid(),
				fb_access_token: require("facebook").getAccessToken(),
				fb_expires: require("facebook").getExpiresIn(),
				topic_visibility_context: $("#topic_visibility_context").val() || 0,
				review_data: this.getReviewData()
			}
		},
		getFacebookCheckbox: function() {
			return this.lookup("publish_checkboxes", !0) ? this.lookup("publish_checkboxes").shouldPublishToFacebook() : null
		},
		getTwitterCheckbox: function() {
			return this.lookup("publish_checkboxes", !0) ? this.lookup("publish_checkboxes").shouldPublishToTwitter() : null
		},
		getReviewData: function() {
			if(this.lookup("editor").lookup("review_rating")) {
				var a = this.cQuery("editor:review_rating").$("#@star_rating .selected").attr("rating");
				if(a) return {
					base: a
				}
			}
			return null
		}
	});
	a.NewAnswerInFeedEditor = m.extend({
		onLoad: function() {
			this._super.apply(this, arguments)
		},
		submitHandler: function() {
			this.input_button_obj.click(this.fnbind(function() {
				return d.InputValidator.validate(this, {
					valid: this.fnbind(function() {
						this.trigger_request(), this.parent().parent().showAnswer()
					}),
					invalid: function() {}
				}), !1
			}))
		}
	}), a.NewAnswerEditorWithBoardSelector = m.extend({
		_get_kwargs: function() {
			var a = this._super.apply(this, arguments);
			try {
				var b = this.cQuery(":editor.selector");
				b && (a.bid = b.getBid(), a.board_name = b.getText())
			} catch(c) {
				delete a.bid, delete a.board_name
			}
			return a
		}
	}), a.FlagHasEnoughTopicsLink = c.extend({
		onLoad: function() {
			this.$("#@has_enough_topics").click(this.fnbind(function() {
				return this.serverCall("has_enough_topics").liveMutate().send(), !1
			})), this.$("#@doesnot_have_enough_topics").click(this.fnbind(function() {
				return this.serverCall("doesnot_have_enough_topics").liveMutate().send(), !1
			}))
		}
	}), a.QuestionMarkAsReviewLink = c.extend({
		onLoad: function() {
			this.$("#@mark_as_review").click(this.fnbind(function() {
				return this.openDialog(), !1
			})), this.$("#@unmark_as_review").click(this.fnbind(function() {
				return this.serverCall("unmark_as_review").liveMutate().send(), !1
			}))
		},
		openDialog: function() {
			this._dialog = this.dialog().title("Convert to Review").load("content")
		},
		closeDialog: function() {
			this._dialog.close_()
		}
	}), a.QuestionMarkAsReviewDialog = c.extend({
		onLoad: function() {
			this.submitted = !1, this.$("#@cancel").click(this.fnbind(function() {
				return this.closeDialog(), !1
			})), this.$("#@mark").click(this.fnbind(function() {
				var a = this.getContextName();
				return a && !this.submitted && (this.submitted = !0, this.markAsReview(a)), !1
			}))
		},
		markAsReview: function(a) {
			this.closeDialog(), this.serverCall("mark_as_review").kwargs({
				topic_name: a
			}).liveMutate().send()
		},
		getContextName: function() {
			var a = this.cQuery(":context.topic_add").getTempTopicNamesAsArray();
			return a.length > 0 ? a[0] : null
		},
		closeDialog: function() {
			d.Dialog.openerFor(this).closeDialog()
		}
	}), a.QuestionMarkAsReviewDialogLink = c.extend({
		onLoad: function() {
			this.$("#@link").click(this.fnbind(function() {
				return this.parent().markAsReview(this.topic_name), !1
			}))
		}
	}), a.QuestionMarkAsReviewDialogError = c.extend({
		onLoad: function() {
			this.$("#@error").find(".notice_tip div").css("display", "inline"), this.$("#@error").find("a").prepend("Redirect into "), this.$("#@error").show()
		},
		closeDialog: function() {
			this.parent().closeDialog()
		}
	}), a.StarRatingButtons = c.extend({
		onLoad: function() {
			var a = this,
				b = this.$("#@ratings").attr("class");
			$.each(this.$("%@rating"), function(c, d) {
				$(this).tooltip({
					contents: $(this).attr("title")
				}), $(this).attr("title", ""), $(this).hover(function(b) {
					a.$("#@ratings").removeClass();
					var c = $(this).attr("rating");
					a.$("#@ratings").addClass("current_rating_" + c)
				}, function(c) {
					a.$("#@ratings").attr("class", b)
				}), $(this).click(function() {
					a.$("#@ratings").removeClass(), a.$(".selected").removeClass("selected"), $(this).addClass("selected");
					var c = $(this).attr("rating");
					return a.$("#@ratings").addClass("current_rating_" + c), b = "current_rating_" + c, !1
				})
			})
		}
	}), a.ReviewQuestionTextMain = c.extend({
		onLoad: function() {
			var a = this;
			this.$("#@edit").click(this.fnbind(function() {
				a.$("#@name").hide(), a.$("#@selector").show()
			}))
		}
	})
}), require.install("app/view/question/wanted_answer", function(require, a, b) {
	var c = require("w2.quora").Component;
	require("dialog");
	var d = a.ManageAttributionOnAnswer = c.extend({
		onLoad: function() {
			this.$("#@remove").tooltip({
				contents: "Hide"
			}), this.$("#@remove").click(this.fnbind(function() {
				return this.$("#@attribution_row, #@toggle_visibility_row").toggle(), this.hideAttribution(), !1
			})), this.$("#@show_answer_attribution").click(this.fnbind(function() {
				return this.$("#@attribution_row, #@toggle_visibility_row").toggle(), this.showAttribution(), !1
			}))
		},
		showAttribution: function() {
			this.lookup("content_editor") && (this.lookup("content_editor").answer_attribution_update = "attach")
		},
		hideAttribution: function() {
			this.lookup("content_editor") && (this.lookup("content_editor").answer_attribution_update = "remove")
		}
	});
	a.ManageAttributionOnQuestion = d.extend({
		showAttribution: function() {
			this.serverCall("show_answer_attribution").liveMutate().send()
		},
		hideAttribution: function() {
			this.serverCall("hide_answer_attribution").liveMutate().send()
		}
	}), a.AnswerAttributionName = c.extend({
		onLoad: function() {
			this.$("#@hide").click(this.fnbind(function() {
				this.dialog().title("Confirm Removal").ok(this.fnbind(function() {
					this.serverCall("hide_answer_attribution").liveMutate().send()
				}), "Remove").cancel().html("Are you sure you want to remove your name?")
			}))
		}
	}), a.WantedAnswerSelector = c.extend({
		onLoad: function() {
			this.lookup("selector").inputKeyup = this.fnbind(function() {
				this.lookup("selector").onInputChange();
				var a = this.lookup("selector").getValue();
				a.indexOf("@") > 0 ? this.$("#@invite_button").removeClass("hidden") : this.$("#@invite_button").addClass("hidden")
			}), this.$("#@invite").click(this.fnbind(function() {
				var a = this.lookup("selector").getValue();
				return $(".content").dialog({
					mobile: this.mobile,
					title: "Invite " + a + " to Quora",
					url: "/contacts/ajax_invite_dialog_GET?emails=" + encodeURIComponent(a) + "&qid=" + this.qid,
					id: "invite_dialog",
					buttons: null
				}), this.lookup("selector").setValue(""), this.$("#@invite_button").addClass("hidden"), !1
			}))
		},
		setTo: function(a) {
			a && a != "" && this.serverCall("add_wanted_answer").kwargs({
				uid: a
			}).success(this.fnbind(function(b) {
				b || (this.$("#@reason").removeClass("hidden"), this.$("#@reason").setContentFromAJAXComponent("/question/ajax_wanted_answer_pass_reason_POST", {
					qid: this.qid,
					uid: a
				})), this.clear()
			})).liveMutate().send()
		},
		clear: function() {
			this.lookup("selector").$("#@input").blur()
		}
	}), a.AskedBy = c.extend({
		onLoad: function() {
			this.$("#@vote_count").click(this.fnbind(function() {
				return this.$("#@vote_count").hide(), this.$("#@vote_list").show(), !1
			}))
		}
	}), a.WantedAnswerInviteSection = c.extend({
		setEmailTo: function(a) {
			this._dialog = this.dialog().title(null).cancel(null, "Cancel").ok(this.fnbind(function() {
				var b = arguments[0].dialogComponent,
					c = b.lookup("msg").serialize(),
					d = b.lookup("subject").serialize(),
					e = b.name;
				this.serverCall("invite_to_answer").kwargs({
					name: e,
					email: a,
					msg: c,
					subject: d
				}).liveMutate().success(this.fnbind(function() {
					this._dialog.close_(), this.lookup("selector").clear()
				})).send()
			}), "Invite to Answer").load("invite_dialog", {
				kwargs: {
					email: a
				}
			})
		},
		setTo: function(a) {
			this.setEmailTo(a)
		},
		setUserTo: function(a) {}
	}), a.WantedAnswerInviteEmailButton = c.extend({
		onLoad: function() {
			this.$("#@invite").click(this.fnbind(function() {
				return this._dialog = this.dialog().title(null).cancel(null, "Cancel").ok(this.fnbind(function() {
					var a = arguments[0].dialogComponent,
						b = a.lookup("msg").serialize(),
						c = a.lookup("subject").serialize(),
						d = a.name;
					this.serverCall("invite_to_answer").kwargs({
						name: d,
						email: this.email,
						msg: b,
						subject: c
					}).liveMutate().success(this.fnbind(function() {
						this._dialog.close_()
					})).send()
				}), "Invite to Answer").load("invite_dialog", {
					kwargs: {
						email: this.email
					}
				}), !1
			}))
		}
	}), a.WantedAnswerInviteTwitterButton = c.extend({
		onLoad: function() {
			this.$("#@invite").click(this.fnbind(function() {
				return console.log(this.tw_uid), this._dialog = this.dialog().title(null).cancel(null, "Cancel").ok(this.fnbind(function() {
					console.log("Invite")
				}), "Invite").load("invite_twitter_dialog", {
					kwargs: {
						tw_uid: this.tw_uid
					}
				}), !1
			}))
		}
	}), a.WantedAnswerResonseRate = c.extend({
		onLoad: function() {
			this.$("#@rate").tooltip({
				contents: this.name + " has answered " + this.responses + " of " + this.requests + " requests."
			})
		}
	}), a.SpendCurrencyButton = c.extend({
		onLoad: function() {
			this.$("#@spend").click(this.fnbind(function() {
				var a = this.getAmount();
				return this.serverCall("spend").kwargs({
					amount: a
				}).liveMutate().send(), !1
			})), this.$("#@undo").click(this.fnbind(function() {
				return this.serverCall("undo").liveMutate().send(), !1
			}))
		},
		getAmount: function() {
			return this.allow_price_adjustment ? this.cQuery(":price_control.choose_amount").getAmount() : this.default_price
		}
	}), a.CreditsPriceControl = c.extend({
		onLoad: function() {
			this.$("#@price").tooltip({
				contents: "Use more credits to ask"
			}), this.$("#@price").click(this.fnbind(function() {
				return this.$("#@price, #@selector").toggleClass("hidden"), this.$("#@free_text").addClass("hidden"), this.$("#@paid_text").removeClass("hidden"), this.cQuery(":choose_amount").focus(), !1
			}))
		}
	}), a.InviteToAnswerDialogContents = c.extend({
		onLoad: function() {
			this.lookup("msg").focus()
		}
	}), a.GiveCreditsSection = c.extend({
		onLoad: function() {
			this.$("#@give").click(this.fnbind(function() {
				return this._dialog = this.dialog().title("Give Credits").load("give_credits_dialog"), !1
			}))
		}
	}), a.GiveCreditsDialog = ComposeMessageDialog.extend({
		onLoad: function(a) {
			this._super.apply(this, arguments), this.$("#@send").click(this.fnbind(function() {
				return this.giveCredits(), !1
			})), this.$("#@close").click(this.fnbind(function() {
				return require("webnode2").Dialog.dialogFor(this).close_(), !1
			}))
		},
		giveCredits: function() {
			var a = null;
			this.$("#@compose_message_to_uid").length > 0 && (a = this.$("#@compose_message_to_uid").val());
			var b = null;
			this.cQuery(":credit_amount").$("#@credit_amount").length > 0 && (b = this.cQuery(":credit_amount").$("#@credit_amount").val());
			var c = "";
			this.lookup("editor").isEmpty() || (c = this.lookup("editor").serialize()), a && b > 0 && c && this.serverCall("send_credits").kwargs({
				to_uid: a,
				amount_credits: b,
				message: c
			}).liveMutate().success(this.fnbind(function() {
				require("webnode2").Dialog.dialogFor(this).close_()
			})).send()
		},
		overMax: function() {
			this.$("#@gift_max_warning").show()
		},
		underMax: function() {
			this.$("#@gift_max_warning").hide()
		}
	}), a.ChooseCreditAmount = c.extend({
		onLoad: function(a) {
			this.$("#@credit_amount").bind("blur", this.fnbind(function(a) {
				this.amountChangedCallback(), this.preventBelowMin(), this.shiftDown = !1
			})), this.shiftDown = !1, this.$("#@credit_amount").bind("keydown", this.fnbind(function(a) {
				a.which == 38 ? (this.changeAmountBy(1), a.preventDefault()) : a.which == 40 ? (this.changeAmountBy(-1), a.preventDefault()) : a.which == 16 && (this.shiftDown = !0, a.preventDefault())
			})), this.$("#@credit_amount").bind("keyup", this.fnbind(function(a) {
				a.which == 16 ? (this.shiftDown = !1, a.preventDefault()) : a.which >= 48 && a.which <= 57 && this.amountChangedCallback()
			}))
		},
		changeAmountBy: function(a) {
			var b = a;
			this.shiftDown && (b *= 10), this.$("#@credit_amount").val(parseInt(this.$("#@credit_amount").val()) + b), this.amountChangedCallback(), this.preventBelowMin()
		},
		amountChangedCallback: function() {
			var a = parseInt(this.$("#@credit_amount").val());
			this.checkForNaN();
			var b = this.lookup("credit_amount_wrapper");
			b && (a > this.max ? b.overMax() : b.underMax()), this.$("#@credit_amount").val(a), this.preventAboveMax(), this.setWidth(a)
		},
		preventBelowMin: function() {
			this.checkForNaN();
			var a = parseInt(this.$("#@credit_amount").val());
			a = Math.max(a, this.min), this.$("#@credit_amount").val(a)
		},
		preventAboveMax: function() {
			var a = parseInt(this.$("#@credit_amount").val());
			a = Math.min(a, this.max), this.$("#@credit_amount").val(a)
		},
		checkForNaN: function() {
			var a = parseInt(this.$("#@credit_amount").val());
			isNaN(a) && (a = this.start), this.$("#@credit_amount").val(a)
		},
		setWidth: function(a) {
			a <= 999 ? this.$("#@credit_amount").width("2em") : a <= 9999 ? this.$("#@credit_amount").width("2.5em") : a > 9999 && this.$("#@credit_amount").width("3em")
		},
		focus: function() {
			this.$("#@credit_amount").focus()
		},
		getAmount: function() {
			return this.$("#@credit_amount").val()
		}
	}), a.WantedAnswerDecline = c.extend({
		onLoad: function() {
			this.$("#@ignore").click(this.fnbind(function() {
				return this.showIgnoreReasonDialog(), !1
			}))
		},
		showIgnoreReasonDialog: function() {
			this._dialog = this.dialog().title("Decline Request").load("decline_dialog")
		}
	}), a.DeclineRequestDialog = c.extend({
		onLoad: function() {
			this.$("#@give").click(this.fnbind(function() {
				var a = "";
				return this.lookup("editor").isEmpty() || (a = this.lookup("editor").serialize()), this.serverCall("decline").kwargs({
					reason: a
				}).liveMutate().success(this.fnbind(function() {
					require("webnode2").Dialog.dialogFor(this).close_()
				})).send(), !1
			})), this.$("#@close").click(this.fnbind(function() {
				return require("webnode2").Dialog.dialogFor(this).close_(), !1
			}))
		}
	}), a.AdjustRate = c.extend({
		onLoad: function() {
			this.$("#@menu_link").click(this.fnbind(function() {
				return this.$("#@menu_items").menu(this.$("#@menu_link")), !1
			}))
		}
	}), a.AdjustRateMenuOption = c.extend({
		onLoad: function() {
			this.$("#@adjust_rate").click(this.fnbind(function() {
				this.serverCall("adjust_rate").liveMutate().send()
			}))
		}
	}), a.AskToAnswerFromFeedlink = c.extend({
		onLoad: function() {
			this.$("#@show").click(this.fnbind(function() {
				return this.parent().lookup("ask_to_answer").toggleSection(), !1
			}))
		}
	}), a.AskToAnswerFromFeed = c.extend({
		onLoad: function() {
			this.loaded = !1
		},
		toggleSection: function() {
			this.$("#@a2a_container").toggleClass("hidden"), this.loaded || this.serverCall("ask_to_answer_section").contentFor(this.$("#@a2a_list"), {
				parentCID: this.cid
			}).success(this.fnbind(function(a) {
				this.loaded = !0
			})).send()
		}
	})
}), require.install("app/view/question/question_add", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2"),
		e = require("w2.livenode"),
		f = require("window_manager"),
		g = a.AddQuestionLink = c.extend({
			onLoad: function() {
				this.open = !1, this.okCallback = null, this.$("#@link").click(this.fnbind(function() {
					return this.openDialog(), !1
				}))
			},
			setText: function(a) {
				this.text = a
			},
			setTid: function(a) {
				this.tid = a
			},
			setOption: function(a, b) {
				this.options[a] = b
			},
			addQuestion: function(a) {
				return a.addQuestion()
			},
			cancelCallback: function() {
				return
			},
			openCallback: function() {
				return
			},
			setOkCallback: function(a) {
				this.okCallback = a
			},
			closeDialog: function() {
				this._dialog.close_()
			},
			openDialog: function(a) {
				this.showAddDialog(a)
			},
			showAddDialog: function(a) {
				if(this.open) return !1;
				this.open = !0, this.openCallback(), this._dialog = this.dialog().opt("dialogClass", "fix_ie_zindex").title(this.title).ok(this.fnbind(function(a) {
					this.open = !1;
					var b = a.dialogComponent,
						c = this.addQuestion(b);
					return this.okCallback && this.okCallback(), c
				}), this.button_text).cancel(this.fnbind(function() {
					this.open = !1, this.cancelCallback()
				}), "Cancel").load("dialog", {
					kwargs: {
						text: a,
						tid: this.tid,
						rel_qid: this.rel_qid,
						options: this.options
					}
				})
			}
		});
	a.AddQTextQuestionLink = g.extend({
		init: function() {
			this._super.apply(this, arguments), this.default_private && this.setOption("default_private", this.default_private)
		},
		cancelCallback: function() {
			this.parent().enable()
		},
		openCallback: function() {
			this.parent().disable()
		},
		addQuestion: function(a) {
			if(a.isDefaultText() || a.lookup("editor").isEmpty()) return;
			var b = a.serverCall("add_question").kwargs(a.getKwargs());
			b.success(this.fnbind(function(a) {
				a = $.parseJSON(a), this.parent().enable(), this.parent().setValue(a.value, a), e.mutationDoneAfterVersion(b.__liveMutationInfo.transactionId, 0)
			})).liveMutate().send()
		}
	}), a.AddRelatedQuestionLink = g.extend({
		openDialog: function() {
			var a = this.parent().$("#@input").val();
			this.showAddDialog(a)
		}
	}), a.AddQuestion = c.extend({
		onLoad: function() {
			this.$("#@add").click(this.fnbind(function() {
				return this.lookup("add_question_dialog").addQuestion(), !1
			}))
		}
	});
	var h = a.AddQuestionDialog = c.extend({
		onLoad: function() {
			this.expanded = !1, this.disabled = !1, this.attempts = 0, this.skipCheck = !1, this.add_request_pending = !1;
			var a = this,
				b = a.lookup("editor");
			b.whenOnLoaded(function() {
				a.checkSubmitStatus(), b.$("#@editor").keydown(function() {
					a.checkSubmitStatus()
				}), !a.click_expand && a.isDefaultText() ? (a.focus(), a.select()) : a.tid && a.focus()
			}), this.click_expand == 1 && this.setFocusCallback(this.fnbind(function() {
				this.expand()
			})), this.$("#@force_add").click(this.fnbind(function() {
				return this.skipCheck = !0, this.addQuestion(), this.disabled = !0, !1
			})), this.$("#@question_details_link").click(this.fnbind(function() {
				return this.$("#@question_details_link").addClass("hidden"), this.$(".@question_details").toggleClass("hidden"), this.lookup("details_editor").focus(), !1
			})), this.$("#@fake_details_editor").click(this.fnbind(function() {
				return this.$("#@fake_details_editor, #@details_editor").toggleClass("hidden"), this.lookup("details_editor").focus(), !1
			})), this.lookup("details_editor").setBlurCallback(this.fnbind(function() {
				if(this.lookup("details_editor").isEmpty()) return this.$("#@fake_details_editor, #@details_editor").toggleClass("hidden"), !1
			}))
		},
		checkSubmitStatus: function() {
			this.add_request_pending || this.isMissingMandatoryContext() || !this.can_afford_question || this.minLength && this.lookup("editor").valLength() < this.minLength ? ($(".dialog .submit_button").addClass("submit_button_disabled"), this.disabled = !0) : ($(".dialog .submit_button").removeClass("submit_button_disabled"), this.disabled = !1)
		},
		isDefaultText: function() {
			return this.lookup("editor").html().slice(0, this.default_text.length) == this.default_text
		},
		setFocusCallback: function(a) {
			this.lookup("editor").setFocusCallback(a)
		},
		addQuestion: function() {
			if(this.isMissingMandatoryContext()) return this.lookup("context").addMissingContextError(), !1;
			if(this.isDefaultText() || this.lookup("editor").isEmpty() || this.disabled || this.add_request_pending) return;
			return this.add_request_pending = !0, this._data = !1, this.getFacebookCheckbox() && !require("facebook").hasPermission("publish_actions") ? require("facebook").requestPermissions("publish_stream", this.fnbind(function(a) {
				this.invokeAddQuestionServerCall()
			})) : this.invokeAddQuestionServerCall(), this._data
		},
		invokeAddQuestionServerCall: function() {
			this.serverCall("add_question").kwargs(this.getKwargs()).success(this.fnbind(function(a) {
				this.add_request_pending = !1, this.successCallback(a)
			})).liveMutate().except("poor_question", this.fnbind(function(a) {
				this.add_request_pending = !1, this.lookup("editor").focus(), this.fixQuestion(a.note), this.$("#@fixit").show()
			})).except("non_english_question", this.fnbind(function(a) {
				this.add_request_pending = !1, this.lookup("editor").focus(), this.fixQuestion(a.note), this.skipCheck = !0
			})).except("survey_question", this.fnbind(function(a) {
				this.add_request_pending = !1, this.lookup("editor").focus(), this.fixQuestion(a.note), this.$("#@fixit").show()
			})).error(this.fnbind(function(a) {
				this.add_request_pending = !1
			})).disableNextPostReload().persistMutation().send()
		},
		fixQuestion: function(a) {
			this.$("#@fixit").show(), this.$("#@text").html(a), this.attempts++, this.attempts > 1 && this.$("#@skip").show()
		},
		successCallback: function(a) {
			a && a.charAt(0) == "/" && f.navigateTo(a), d.Dialog.openerFor(this).closeDialog()
		},
		getKwargs: function() {
			return {
				question: this.getQuestionText(),
				question_details: this.getDetailsText(),
				distribution: this.getDistribution(),
				is_private: this.isPrivate(),
				tid: this.tid,
				query: this.query,
				rel_qid: this.rel_qid,
				return_json: this.return_json,
				topic_distribution: this.getTopicDistribution(),
				skip_check: this.skipCheck,
				context_name: this.getContextName(),
				fb_checked: this.getFacebookCheckbox(),
				tw_checked: this.getTwitterCheckbox(),
				fb_uid: require("facebook").getFbUid(),
				fb_access_token: require("facebook").getAccessToken(),
				fb_expires: require("facebook").getExpiresIn()
			}
		},
		getContextName: function() {
			return this.lookup("context").getContext()
		},
		getFacebookCheckbox: function() {
			return this.lookup("publish_checkboxes", !0) ? this.lookup("publish_checkboxes").shouldPublishToFacebook() : null
		},
		getTwitterCheckbox: function() {
			return this.lookup("publish_checkboxes", !0) ? this.lookup("publish_checkboxes").shouldPublishToTwitter() : null
		},
		isMissingMandatoryContext: function() {
			return !this.getContextName() && !this.tid
		},
		getQuestionText: function() {
			return this.lookup("editor").serialize()
		},
		getDetailsText: function() {
			return this.lookup("details_editor").serialize()
		},
		getDistribution: function() {
			return this.lookup("distribution_menu").getValue()
		},
		isPrivate: function() {
			return this.getDistribution() == 0 ? 1 : 0
		},
		getTopicDistribution: function() {
			return !0
		},
		expand: function() {
			if(this.expanded) return;
			this.$("#@editor_row").addClass("form_row"), this.$("#@form_buttons").removeClass("hidden"), this.$("#@form_option_row").removeClass("hidden"), this.$("#@details_link_row").removeClass("hidden"), this.focus(), this.expanded = !0
		},
		clear: function() {
			this.lookup("editor").clear(), this.lookup("details_editor").clear(), this.$("#@question_privacy").attr("checked", !1), this.$("#@question_details_link").removeClass("hidden"), this.$(".@question_details").addClass("hidden")
		},
		select: function() {
			this.lookup("editor").selectAll()
		},
		focus: function() {
			this.lookup("editor").focus()
		}
	});
	a.AddQuestionTopicDistributionSetting = c.extend({
		onLoad: function() {
			this.$("#@no_link").click(this.fnbind(function() {
				return this.set(!1)
			})), this.$("#@yes_link").click(this.fnbind(function() {
				return this.set(!0)
			})), this.$("#@balance").tooltip({
				contents: "You have " + this.balance + " credits."
			})
		},
		set: function(a) {
			return this.disabled || (this.value = a, this.$("#@yes").toggleClass("hidden"), this.$("#@no").toggleClass("hidden")), !1
		}
	}), a.AddQuestionContextEditor = c.extend({
		onLoad: function() {
			this.cQuery(":context_editor").$("#@input").bind("focus", this.fnbind(function(a) {
				this.removeMissingContextError()
			})), this.cQuery(":context_editor").$("#@input").bind("blur", this.fnbind(function(a) {
				this.parent().checkSubmitStatus()
			}))
		},
		focusInput: function() {
			this.cQuery(":context_editor").focus(!0)
		},
		getContext: function() {
			var a = this.cQuery(":context_editor.topic_add").getTempTopicNamesAsArray();
			return a.length > 0 ? a[0] : null
		},
		addMissingContextError: function() {
			this.cQuery(":context_editor").$("#@input").addClass("input_validation_error"), this.$("#@no_context_error").show()
		},
		removeMissingContextError: function() {
			this.cQuery(":context_editor").$("#@input").removeClass("input_validation_error"), this.$("#@no_context_error").hide()
		}
	});
	var i = a.AddQuestionInline = h.extend({
		onLoad: function() {
			this.editor = this.lookup("navigator"), this.$("#@fake_details_editor").click(this.fnbind(function() {
				return this.$("#@fake_details_editor").hide(), this.$("#@details_editor").show(), this.lookup("details_editor").focus(), !1
			})), this.$("#@add").click(this.fnbind(function() {
				return this.addQuestion(), !1
			}))
		},
		getKwargs: function() {
			return {
				question: this.getQuestionText(),
				question_details: this.getDetailsText(),
				is_private: this.isPrivate(),
				context_name: this.getContextName()
			}
		},
		getQuestionText: function() {
			return this.editor.$("#@input").val()
		},
		getDistribution: function() {
			return this.lookup("anon_checkbox").getValue()
		},
		addQuestion: function() {
			if(this.isMissingMandatoryContext()) return this.lookup("context").addMissingContextError(), !1;
			require("action_log").logAction("QuestionAdd", null, null), this.serverCall("add_question").kwargs(this.getKwargs()).success(this.fnbind(function(a) {
				this.add_request_pending = !1, this.successCallback(a)
			})).liveMutate().except("poor_question", this.fnbind(function(a) {
				this.add_request_pending = !1, this.editor.focus(), this.fixQuestion(a.note), this.$("#@fixit").show()
			})).except("non_english_question", this.fnbind(function(a) {
				this.add_request_pending = !1, this.editor.focus(), this.fixQuestion(a.note), this.skipCheck = !0
			})).except("survey_question", this.fnbind(function(a) {
				this.add_request_pending = !1, this.editor.focus(), this.fixQuestion(a.note), this.$("#@fixit").show()
			})).error(this.fnbind(function(a) {
				this.add_request_pending = !1
			})).disableNextPostReload().persistMutation().send()
		}
	});
	a.TopicAddQuestionInline = i.extend({
		getContextName: function() {
			return this.topic
		}
	})
}), require.install("app/view/board/create_box", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2"),
		e = require("view/inline_editor").InlineEditor;
	a.AddToBoardBox = c.extend({
		onLoad: function() {
			this.$("#@fake_editor").click(this.fnbind(function() {
				this.toggle_editor();
				if(this.bid) try {
					this.cQuery(":editor.editor.editor").focus()
				} catch(a) {} else try {
					this.cQuery(":editor.selector.selector").focus(!0)
				} catch(a) {}
				return !1
			})), this.$("#@fake_url").click(this.fnbind(function() {
				this.toggle_editor();
				try {
					this.cQuery(":editor.editor").$("#@url").focus()
				} catch(a) {}
				return !1
			}))
		},
		closePopup: function() {
			$("#layout_header .popout_contents").length && window.close()
		},
		toggle_editor: function() {
			this.$("#@fake_editor_row").hide(), this.$("#@editor_row").show()
		}
	}), a.BookmarkletLink = c.extend({
		onLoad: function() {
			this.installMouseHandlers()
		},
		clickHandlers: {
			button: function() {
				this.$("#@button").hasClass("bookmarklet_ie8") && alert('Please right click on this link, then click "Add to Favorites."')
			}
		}
	}), a.BoardCreatePostBox = c.extend({
		onLoad: function() {
			this.$("#@twitter_label") && this.$("#@twitter_label").tooltip({
				contents: "Share With Your Twitter Followers"
			}), this.$("#@add_topics").click(this.fnbind(function() {
				return this.$("#@edit_topics").show(), this.$("#@add_topics").hide(), this.lookup("topic_selector") && this.lookup("topic_selector").focus(!0), !1
			})), this.$("#@twitter_icon").click(this.fnbind(function() {
				return this.$("#@twitter").is(":checked") ? this.uncheckTwitter() : this.checkTwitter(), !1
			}))
		},
		hideDistroOptions: function() {
			this.uncheckTwitter(), this.$("#@distro_options").hide(), this.$("#@add_topics_link").hide()
		},
		showDistroOptions: function() {
			this.$("#@distro_options").show(), this.$("#@add_topics_link").show()
		},
		reset: function() {
			this.uncheckTwitter(), this.$("#@edit_topics").hide(), this.$("#@add_topics").show(), this.lookup("topic_selector") && this.lookup("topic_selector").reset()
		},
		uncheckTwitter: function() {
			this.$("#@twitter").attr("checked", !1)
		},
		checkTwitter: function() {
			this.$("#@twitter").attr("checked", !0)
		}
	}), a.BoardCreatePostTitleBox = c.extend({
		onLoad: function() {
			this.$("#@fake_editor").click(this.fnbind(function() {
				return this.toggle_editor(), !1
			}))
		},
		toggle_editor: function() {
			this.$("#@fake_editor_row").hide(), this.$("#@editor_row").show(), this.$("#@editor_row .qtext_editor_content").focus()
		},
		titleRequired: function() {
			this.$("#@title_required").show()
		},
		titleRequiredReset: function() {
			this.$("#@title_required").hide()
		}
	}), a.CreateBoardPostEditor = e.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@remove_via").click(this.fnbind(function() {
				return this.$("#@via_text").hide(), this.$("#@via").remove(), !1
			})), this.fetchingUrl = !1, this.seenUrls = {}, this.link_editor_location = ":link_editor.preview";
			var a = this,
				b = a.lookup("editor");
			this.boardSelectorObj = null, this.bid || (this.boardSelectorObj = this.parent().cQuery(":selector.selector"), this.boardSelectorObj.setCallback(function() {
				b.reportMeaningfulChange()
			})), this.bookmarklet && (!this.draft_space || !this.draft_space.draft_id) && (b.whenOnLoaded(function() {
				b.detectLinks()
			}), this.$("#@spinner").show()), this.$("#@fake_editor").click(this.fnbind(function() {
				this.showEditor()
			}));
			var c = this.lookup("title_box", !0);
			if(c) {
				var d = c.child("title_editor");
				d.setMeaningfulChangeCallback(this.fnbind(function() {
					this.save_draft(!1)
				})), this.saved_title && (d.setHtml(this.saved_title, this.saved_title_qlink_data), d.html(!1), c.toggle_editor())
			}
			if(this.saved_seen_urls) for(var e = 0; e < this.saved_seen_urls.length; e++) this.seenUrls[this.saved_seen_urls[e]] = !0;
			if(this.saved_topics) {
				var f = this.parent().cQuery(":topic_selector.topic_add");
				f.whenOnLoaded(function() {
					for(var b = 0; b < a.saved_topics.length; b++) f.saveTempTopic(a.saved_topics[b]);
					a.parent().$("#@edit_topics").show(), a.parent().$("#@add_topics").hide()
				})
			}
		},
		showEditor: function() {
			this.$("#@fake_editor_wrapper").hide(), this.$("#@content").show(), this.lookup("editor").focus()
		},
		submitHandler: function() {
			this.input_button_obj.click(this.fnbind(function() {
				if(!this.lookup("editor").isEmpty() || this.preview != null || this.id) {
					if(this.parent().lookup("title_box", !0)) {
						this.parent().cQuery(":title_box").titleRequiredReset();
						if(this.is_post_theme && this.parent().cQuery(":title_box.title_editor").isEmpty()) return this.parent().cQuery(":title_box").toggle_editor(), this.parent().cQuery(":title_box").titleRequired(), !1;
						this.parent().cQuery(":title_box.title_editor").$("#@editor").addClass("qtext_editor_content_disabled")
					}
					this.lookup("editor").$("#@editor").addClass("qtext_editor_content_disabled"), this.$("#@preview_url").addClass("qtext_editor_content_disabled"), d.InputValidator.validate(this, {
						valid: this.fnbind(this.trigger_request),
						invalid: function() {}
					})
				}
				return !1
			}))
		},
		removeUrl: function() {
			this.$("#@preview_url").html(""), this.$("#@preview_url_section, #@link_editor_buttons").hide(), this.$("#@remove_url").hide(), this.preview = null, this.lookup("editor").focus()
		},
		onBookmarkletLinkEditorLoaded: function(a) {
			this.link_editor_location = ":bookmarklet_link_editor.link_editor.preview", this.preview = a, this.$("#@spinner").hide()
		},
		reset: function() {
			var a;
			this.parent().lookup("title_box", !0) && (a = this.cQuery(":title_box.title_editor"), a.$("#@editor").removeClass("qtext_editor_content_disabled"), a.clear(!1));
			var b = this.lookup("editor");
			b.$("#@editor").removeClass("qtext_editor_content_disabled"), b.clear(!0), this.$("#@preview_url").removeClass("qtext_editor_content_disabled").hide(), this.$("#@preview_url_section, #@link_editor_buttons").hide(), this.$("#@remove_url").hide(), this.seenUrls = {}, this.removeUrl(), this.draft_space && (this.draft_space.draft_id = null, b.resetMeaningfulChange(), a && a.resetMeaningfulChange()), this.is_submission || this.parent().reset(), this.bid || this.boardSelectorObj.resetFakeInput()
		},
		cancelEditor: function() {
			this.canSaveDraft() && this.draft_space.draft_id != null && this.save_draft(!1), this.closeDialog()
		},
		bookmarkletReturnedWithData: function(a) {
			this.$("#@close").show(), this.$("#@content, #@post, #@submit").hide(), this.parent().$("#@selector").hide(), this.$("#@confirmation_text").html(a), this.$("#@confirmation").show(), this.$("#@inline_editor_buttons").hide(), this.parent().$("#@header").hide(), setTimeout("window.close()", 3e3)
		},
		reportSuccess: function() {},
		regexSiteUrl: /https?:\/\/www\.([^.\/]+\.)*quora\.com(\/.*)?/,
		ajax_callback: function(a) {
			if(this.redirect_on_post && (a[0] == "/" || this.regexSiteUrl.test(a))) document.location = a;
			else if(this.bookmarklet) this.bookmarkletReturnedWithData(a);
			else if(this.is_dialog) {
				this.reportSuccess(), this.closeDialog();
				return
			}
			this.reset()
		},
		closeDialog: function() {
			d.Dialog.dialogFor(this).close_()
		},
		getBid: function() {
			return this.bid ? this.bid : this.boardSelectorObj.getBid()
		},
		getBoardName: function() {
			return this.bid ? null : this.boardSelectorObj.getText()
		},
		getVia: function() {
			return this.$("#@via") ? this.$("#@via").val() : null
		},
		getIsSubmission: function() {
			return this.is_submission
		},
		setIsSubmission: function(a) {
			this.is_submission = a
		},
		getLinkURL: function() {
			var a = this.getLinkPreview();
			return a ? a.url : null
		},
		getLinkPreview: function() {
			return this.preview ? this.cQuery(this.link_editor_location).getLinkInfo() : null
		},
		getTopics: function() {
			return this.parent().lookup("topic_selector") ? this.parent().cQuery(":topic_selector.topic_add").getTempTopicNamesAsArray() : null
		},
		getTitle: function() {
			return this.parent().lookup("title_box", !0) ? this.parent().cQuery(":title_box.title_editor").serialize() : null
		},
		getSeenUrlsAsArray: function() {
			var a = [];
			for(var b in this.seenUrls) a.push(b);
			return a
		},
		getTwitterCheckbox: function() {
			return this.lookup("publish_checkboxes", !0) ? this.lookup("publish_checkboxes").shouldPublishToTwitter() : this.parent().$("#@twitter") ? this.parent().$("#@twitter").is(":checked") : null
		},
		getFacebookCheckbox: function() {
			return this.lookup("publish_checkboxes", !0) ? this.lookup("publish_checkboxes").shouldPublishToFacebook() : null
		},
		getLoggedAction: function() {
			return "PostAdd"
		},
		invokeEditServerCall: function(a) {
			if(this.getFacebookCheckbox() && !require("facebook").hasPermission("publish_actions")) {
				var b = arguments,
					c = this._super;
				require("facebook").requestPermissions("publish_stream", this.fnbind(function(a) {
					c.apply(this, b)
				}))
			} else this._super.apply(this, arguments)
		},
		canSaveDraft: function() {
			return this.draft_space && !this.save_draft_disabled
		},
		enableSaveDraft: function() {
			this.save_draft_disabled = !1
		},
		disableSaveDraft: function() {
			this.save_draft_disabled = !0
		},
		onClearDraft: function() {
			this.reset()
		},
		save_draft: function(a) {
			if(!this.canSaveDraft()) return;
			this.disableSaveDraft();
			var b = a ? "save_draft" : "save_draft_auto",
				c = this.serverCall(b).kwargs({
					window_id: d.windowId,
					draft_space: this.draft_space,
					bid: this.getBid(),
					name: this.getBoardName(),
					description: this.get_value(),
					title: this.getTitle(),
					target: this.target,
					url: this.url,
					link_url: this.getLinkURL(),
					preview: this.getLinkPreview(),
					via: this.getVia(),
					tw_checked: this.getTwitterCheckbox(),
					fb_checked: this.getFacebookCheckbox(),
					topics: this.getTopics(),
					seen_urls: this.getSeenUrlsAsArray(),
					is_submission: this.getIsSubmission()
				}).success(this.fnbind(function(a) {
					this.enableSaveDraft();
					if(this.draft_space && this.draft_space.draft_id != a) {
						this.draft_space.draft_id = a;
						var b = this.child("draft_status");
						b && b.updateWithDraftId(a)
					}
				})).error(this.fnbind(function() {
					this.enableSaveDraft()
				}));
			a && c.liveMutate(), c.send()
		},
		_get_kwargs: function() {
			return {
				draft_space: this.draft_space,
				bid: this.getBid(),
				object_id: this.id,
				name: this.getBoardName(),
				description: this.get_value(),
				title: this.getTitle(),
				link_url: this.getLinkURL(),
				preview: this.getLinkPreview(),
				via: this.getVia(),
				tw_checked: this.getTwitterCheckbox(),
				fb_checked: this.getFacebookCheckbox(),
				topics: this.getTopics(),
				is_submission: this.getIsSubmission(),
				fb_uid: require("facebook").getFbUid(),
				fb_access_token: require("facebook").getAccessToken(),
				fb_expires: require("facebook").getExpiresIn()
			}
		}
	}), a.BookmarkletLinkEditor = c.extend({
		onLoad: function() {
			this.parent().onBookmarkletLinkEditorLoaded(this.preview)
		},
		removeUrl: function() {
			this.parent().removeUrl()
		}
	})
}), require.install("app/view/board/follow_invite", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2");
	a.FollowInviteSection = c.extend({
		setEmailTo: function(a) {
			this._dialog = this.dialog().title(null).cancel(null, "Cancel").ok(this.fnbind(function() {
				var b = arguments[0].dialogComponent,
					c = b.lookup("msg").serialize(),
					d = b.lookup("subject").serialize(),
					e = b.name;
				this.serverCall("invite_to_follow").kwargs({
					name: e,
					email: a,
					msg: c,
					subject: d
				}).liveMutate().success(this.fnbind(function() {
					this._dialog.close_(), this.lookup("selector").clear()
				})).send()
			}), "Invite to Follow").load("invite_dialog", {
				kwargs: {
					email: a
				}
			})
		},
		setTo: function(a) {
			this.setEmailTo(a)
		},
		setUserTo: function(a) {}
	}), a.FollowInviteEmailButton = c.extend({
		onLoad: function() {
			this.$("#@invite").click(this.fnbind(function() {
				return this._dialog = this.dialog().title(null).cancel(null, "Cancel").ok(this.fnbind(function() {
					var a = arguments[0].dialogComponent,
						b = a.lookup("msg").serialize(),
						c = a.lookup("subject").serialize(),
						d = a.name;
					this.serverCall("invite_to_follow").kwargs({
						name: d,
						email: this.email,
						msg: b,
						subject: c
					}).liveMutate().success(this.fnbind(function() {
						this._dialog.close_()
					})).send()
				}), "Invite to Follow").load("invite_dialog", {
					kwargs: {
						email: this.email
					}
				}), !1
			}))
		}
	}), a.FollowInviteTwitterButton = c.extend({
		onLoad: function() {
			this.$("#@invite").click(this.fnbind(function() {
				return console.log(this.tw_uid), this._dialog = this.dialog().title(null).cancel(null, "Cancel").ok(this.fnbind(function() {
					console.log("Invite")
				}), "Invite").load("invite_twitter_dialog", {
					kwargs: {
						tw_uid: this.tw_uid
					}
				}), !1
			}))
		}
	}), a.InviteToFollowDialogContents = c.extend({
		onLoad: function() {
			this.lookup("msg").focus()
		}
	}), a.InviteFollowersToBoardListItem = c.extend({
		onLoad: function() {
			var a = this;
			this.$("#@link").hover(function(b) {
				a.$("#@link").addClass("action_button")
			}, function(b) {
				a.$("#@link").removeClass("action_button")
			}), this.$("#@link").click(this.fnbind(function() {
				return this.serverCall("request").liveMutate().send(), !1
			}))
		}
	})
}), require.install("app/view/topic/topic_list", function(require, a, b) {
	a.QuestionTopicSuggestionRow = Component.extend({
		onLoad: function() {
			var a = this;
			this.$("#@active_suggestion_row").hover(function(b) {
				a.$("#@remove_suggestion").show()
			}, function(b) {
				a.$("#@remove_suggestion").hide()
			}), this.$("#@add").click(this.fnbind(function() {
				return this.serverCall("add_topic").liveMutate().send(), !1
			})), this.$("#@remove_suggestion a").click(this.fnbind(function() {
				return this.serverCall("remove_suggestion").liveMutate().send(), this.$("#@active_suggestion_row, #@removed_suggestion_row").toggleClass("hidden"), this.parent().onSuggestionRemoved(), !1
			})), this.$("#@undo_remove_suggestion a").click(this.fnbind(function() {
				return this.serverCall("undo_remove_suggestion").liveMutate().send(), this.$("#@active_suggestion_row, #@removed_suggestion_row").toggleClass("hidden"), !1
			}))
		}
	}), a.QuestionTopicSuggestions = Component.extend({
		onLoad: function(a) {
			this.suggestions_removed_count = 0, a && this.should_open_suggestions && this.toggleSuggestionsSection()
		},
		toggleSuggestionsSection: function() {
			this.lookup("topics_editor").do_toggle()
		},
		onSuggestionRemoved: function() {
			this.suggestions_removed_count++, this.$("%@suggestion_row").length - this.suggestions_removed_count == 0 && this.toggleSuggestionsSection()
		}
	})
}), require.install("app/view/topic/topic_redesign", function(require, a, b) {
	a.TopicChildren = Component.extend({
		onLoad: function(a) {
			this.$("#@more_link").click(this.fnbind(function() {
				return this.serverCall("view_more").contentFor(this.$("#@full_list"), {
					parentCID: this.cid
				}).success(this.fnbind(function(a) {
					this.$("#@list").hide(), this.$("#@full_list").show()
				})).liveMutate().send(), !1
			}))
		}
	})
}), require.install("app/view/signup", function(require, a, b) {
	var c = require("webnode2"),
		d = require("w2.quora").Component,
		e = require("window_manager"),
		f = require("login").LiveLoginDialog,
		g = require("facebook");
	a.SignupFormFields = d.extend({
		onLoad: function() {
			var a = this;
			this.__js_init.fb_signup_button_enabled_by_default || this.$("#@email, #@name, #@password").keyup(function() {
				a.$("#@name").val() && a.$("#@email").val() && a.$("#@password").val() ? a.trigger("enable_submit") : a.trigger("disable_submit")
			})
		},
		validate: function() {
			if(!this.child("name_validator").isValid) if(!this.$("#@name") || this.child("name_validator") !== null) return !1;
			if(!this.child("email_validator").isValid) if(!this.$("#@email") || this.child("email_validator").isValid !== null) return !1;
			if(this.$("#@password").val().length < this.minimum_password_length) return !1;
			if(!this.child("password_validator").isValid) if(!this.$("#@password") || this.child("password_validator").isValid !== null) return a1ert("Check the password that you're using before submitting."), !1;
			return !0
		}
	}), a.ModalSignupDialog = d.extend({
		onLoad: function() {
			var a = this;
			a.recordStep("signup_dialog_begin"), a.fbConnected = !1, a.twConnected = !1, a.signupRpcPending = !1, a.backgroundClickToCancelDisabled = !1, a.fbInfo = {}, a.twInfo = {}, a.show_facebook_connect && (g.onInit(function() {
				a.updateFbLoginStatus(!1)
			}), a.child("fb_connect").bind("fb_login", function() {
				a.updateFbLoginStatus(!0)
			})), a.show_twitter_connect && a.child("tw_connect").bind("tw_login", function(b, c, d) {
				a.updateTwLoginStatus(c, d)
			}), a.registerSubmitButton(), a.registerLoginLink(), a.registerEmailSignupLink(), a.registerCancelLinks(), a.has_passwordless && (a.recordStep("login_has_passwordless"), a.$("#@login").show(), a.$("#@create_account").hide()), $(window).resize(a.fnbind(function(b) {
				a.centerComponent()
			}));
			var b = a.child("facepile");
			b && b.bind("facepile_parsed", a.fnbind(function(b) {
				a.centerComponent()
			})), a.centerComponent(), a.$("#@form").show()
		},
		registerEmailSignupLink: function() {
			var a = this;
			a.$("%@use_email_signup").click(function() {
				return a.show_facebook_connect && FB.getLoginStatus(a.fnbind(function(b) {
					a.updateConnectButtonsAndForm(!0)
				})), a.hidePhotoSection(), a.updateConnectButtonsAndForm(!0), !1
			})
		},
		hidePhotoSection: function() {
			this.$("#@contents").addClass("no_picture_form"), this.$("#@connected_photo_wrapper").hide()
		},
		registerCancelLinks: function() {
			var a = this;
			a.$("%@cancel_link").click(function() {
				return a.close(), !1
			}), a.background_click_dismisses_dialog && a.$("#@background").click(function() {
				if(!a.background_click_dismisses_dialog || a.backgroundClickToCancelDisabled) return !1;
				if(a.signupRpcPending) return !1;
				a.close()
			})
		},
		toggleCancelLinks: function(a) {
			a ? this.$("%@cancel_link").show() : this.$("%@cancel_link").hide()
		},
		disableCancelBasedOnOptions: function() {
			this.disable_close_link_on_connect && this.toggleCancelLinks(!1), this.disable_background_close_on_connect && (this.backgroundClickToCancelDisabled = !0)
		},
		formTopCoord: function() {
			return Math.max(($(window).height() - this.$("#@form").outerHeight()) / 2 - 20, 20)
		},
		centerComponent: function(a) {
			this.$("#@form").css({
				"margin-top": 0,
				"margin-left": 0
			});
			var b = Math.max(($(window).width() - this.$("#@form").outerWidth()) / 2, 0),
				c = Math.max($(window).width() / 2, 0),
				d = this.formTopCoord();
			this.$("#@form").css({
				position: "fixed",
				left: b,
				top: d
			});
			var e = this.shouldShowFbFacepile();
			this.toggleFbFacepileDisplay(e), this.positionTopSection(a)
		},
		shouldShowTopSection: function() {
			return !0
		},
		shouldShowFbFacepile: function() {
			return !0
		},
		topSectionTopCoord: function() {
			return($(window).height() - this.$("#@form").outerHeight()) / 2 - this.$("#@top_section").outerHeight() - 40
		},
		toggleFbFacepileDisplay: function(a) {
			a ? this.$("#@facepile_container").show() : this.$("#@facepile_container").hide()
		},
		toggleTopSectionDisplay: function(a) {
			a ? this.$("#@top_section").show() : this.$("#@top_section").hide()
		},
		positionTopSection: function(a) {
			if(this.$("#@top_section")) {
				var b = this.topSectionTopCoord(),
					c = Math.max(($(window).width() - this.$("#@top_section").outerWidth()) / 2, 0);
				this.$("#@top_section").css({
					position: "fixed",
					left: c,
					marginLeft: 0,
					top: b
				});
				var d = this.shouldShowTopSection();
				this.toggleTopSectionDisplay(d)
			}
		},
		updateConnectButtonsAndForm: function(a, b) {
			a ? (this.$("#@connect").hide(), b ? this.$("#@account_loading").show() : (this.$("#@account_loading").hide(), this.$("#@signup_form").show(), this.updateFormFieldFocus())) : (this.$("#@connect").show(), this.$("#@account_loading").hide(), this.$("#@signup_form").hide()), this.centerComponent(a)
		},
		updateFbLoginStatus: function(a) {
			var b = this;
			FB.getLoginStatus(function(c) {
				b.updateConnectButtonsAndForm(c.status === "connected", !0), a || b.recordStep("signup_fb_initially_" + c.status);
				if(c.status === "connected") {
					var d = c.authResponse;
					b.fbInfo = {
						uid: c.authResponse.userID,
						accessToken: c.authResponse.accessToken,
						expiresIn: c.authResponse.expiresIn
					}, b.serverCall("save_fb_token").kwargs({
						fb_uid: c.authResponse.userID,
						access_token: c.authResponse.accessToken,
						expires_in: c.authResponse.expiresIn
					}).send(), b.queryFacebookProfile(function(a) {
						b.updateFormFields({
							name: a.name,
							email: a.email,
							photoUrl: a.picture
						})
					}), b.serverCall("try_login_facebook").kwargs({
						fb_access_token: b.fbInfo.accessToken
					}).success(function(a) {
						a ? b.completeLogin() : b.updateConnectButtonsAndForm(!0, !1)
					}).send(), b.updateLoginMessage(), g.updatePermissions(b.fnbind(b.updateLoginMessage)), a && b.disableCancelBasedOnOptions()
				}
			}), b.centerComponent()
		},
		updateTwLoginStatus: function(a, b) {
			var c = this;
			c.twConnected = !0, c.twInfo = {
				uid: b.twitter_uid,
				accessToken: a
			}, c.updateConnectButtonsAndForm(!0, !0), c.updateFormFields({
				name: b.name,
				photoUrl: b.photo_url
			}), c.serverCall("try_login_twitter").kwargs({
				tw_oauth_key: a
			}).success(function(a) {
				a ? c.completeLogin() : c.updateConnectButtonsAndForm(!0, !1)
			}).send(), c.disableCancelBasedOnOptions(), c.centerComponent()
		},
		updateFormFields: function(a) {
			var b = this.child("form_fields");
			if(!b) return;
			var c = b.$("#@name");
			c.val(a.name).addClass("disabled_text_field").click(function() {
				c.removeClass("disabled_text_field")
			}), b.child("name_validator").validate(), this.hide_name_on_connect && b.$("#@name_row").hide();
			if(a.email) {
				var d = b.$("#@email");
				d.val(a.email).addClass("disabled_text_field").click(function() {
					d.removeClass("disabled_text_field")
				}), b.child("email_validator").validate()
			}
			this.$("#@picture_spinner").hide(), this.hide_photo_on_connect ? this.hidePhotoSection() : a.photoUrl && this.$("#@connected_pic").attr("src", a.photoUrl).show(), this.centerComponent()
		},
		updateFormFieldFocus: function() {
			var a = this.child("form_fields");
			if(!a) return;
			a.$("#@name").val() ? a.$("#@email").val() ? a.$("#@password").focus() : a.$("#@email").focus() : a.$("#@name").focus()
		},
		registerLoginLink: function() {
			var a = this;
			this.$("%@login_link").click(function() {
				return a.onClickLoginLink(), !1
			})
		},
		updateLoginMessage: function() {
			g.getFbUid() ? g.hasPermission("publish_actions") ? (this.$("#@login_connect_and_timeline_msg").show(), this.$("#@login_connect_msg").hide()) : (this.$("#@login_connect_and_timeline_msg").hide(), this.$("#@login_connect_msg").show()) : (this.$("#@login_connect_and_timeline_msg").hide(), this.$("#@login_connect_msg").hide()), this.centerComponent()
		},
		registerSubmitButton: function() {
			this.child("form_fields").bind("enable_submit", this.fnbind(function() {
				this.$("#@submit").removeAttr("disabled").removeClass("submit_button_disabled")
			})), this.child("form_fields").bind("disable_submit", this.fnbind(function() {
				this.$("#@submit").attr("disabled", "disabled").addClass("submit_button_disabled")
			}))
		},
		close: function() {
			return this.recordStep("signup_dialog_close"), this.$("#@background").remove(), this.$("#@form").remove(), this.$("#@top_section").remove(), !1
		},
		queryFacebookProfile: function(a) {
			FB.api("/me?fields=id,name,email", this.fnbind(function(b) {
				this.fbConnected = !0, this.recordStep("signup_facebook_api_succeeded"), a({
					email: b.email,
					name: b.name,
					fb_uid: b.id,
					picture: "https://graph.facebook.com/" + b.id + "/picture?type=normal"
				})
			}))
		},
		completeLogin: function() {
			require("settings").pageMode == "post_reload" && $(document).trigger("quora_login")
		},
		recordStep: function(a) {
			this.serverCall("record_step").kwargs({
				step_name: a
			}).send()
		},
		getHashParams: function() {
			var a = {},
				b = document.location.hash.substr(1).split("&");
			for(var c = 0; c < b.length; ++c) a[b[0]] = b[1];
			return a
		},
		objectToString: function(a, b) {
			b = b || "";
			var c = [];
			for(var d in a) typeof a[d] == "object" ? c.push(b + d + "=<br>" + this.objectToString(a[d], b + "&nbsp;&nbsp;")) : c.push(b + d + "=" + a[d]);
			return c.join(",<br>")
		},
		events: {
			"click #@create_account_link": "onClickCreateAccountLink",
			"click #@submit": "onClickSubmit"
		},
		onClickLoginLink: function() {
			return this.$("#@login").show(), this.$("#@create_account").hide(), this.centerComponent(), this.updateConnectButtonsAndForm(this.fbConnected || this.twConnected), !1
		},
		onClickCreateAccountLink: function() {
			return this.$("#@login").hide(), this.$("#@create_account").show(), this.centerComponent(), !1
		},
		onClickSubmit: function() {
			var a = this;
			if(a.signupRpcPending) return !1;
			var b = a.child("form_fields");
			return b.validate() && (a.signupRpcPending = !0, a.$("#@spinner").show(), a.$("#@submit").attr("disabled", "disabled").addClass("submit_button_disabled"), a.serverCall("signup").kwargs({
				name: b.$("#@name").val(),
				email: b.$("#@email").val(),
				password: b.$("#@password").val(),
				fb_access_token: a.fbInfo.accessToken,
				fb_expires: a.fbInfo.expiresIn,
				tw_oauth_key: a.twInfo.accessToken
			}).success(function(b) {
				var c = b[0],
					d = b[1];
				a.$("#@spinner").hide(), c ? d ? e.navigateTo(a.nux_url) : a.completeLogin() : a.$("#@submit").removeAttr("disabled").removeClass("submit_button_disabled"), a.signupRpcPending = !1
			}).error(function() {
				a.signupRpcPending = !1, a.$("#@spinner").hide(), a.$("#@submit").removeAttr("disabled").removeClass("submit_button_disabled")
			}).send()), !1
		}
	}), a.ModalFacebookSignupDialogForMobile = a.ModalSignupDialog.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.registerResetPasswordLink(), this.margin = 15
		},
		registerResetPasswordLink: function() {
			var a = this.lookup("modal_inline_login");
			if(!a) return;
			var b = this;
			a.$("#@reset_password_link").click(function() {
				b.close()
			})
		},
		toggleSignupTitle: function(a) {
			this.$("#@signup_title") && (a ? (this.$("#@complete_profile_title").show(), this.$("#@signup_title").hide()) : (this.$("#@complete_profile_title").hide(), this.$("#@signup_title").show()))
		},
		onClickLoginLink: function() {
			this._super.apply(this, arguments), this.toggleSignupTitle(!0)
		},
		updateConnectButtonsAndForm: function(a) {
			this._super.apply(this, arguments), this.toggleSignupTitle(a)
		},
		formTopCoord: function() {
			var a = this.shouldShowTopSection(),
				b = 0;
			return a ? b = ($(window).height() - this.$("#@form").outerHeight() + this.$("#@top_section").outerHeight() + this.margin) / 2 : b = ($(window).height() - this.$("#@form").outerHeight()) / 2, b < 0 && (b = 0), b
		},
		topSectionTopCoord: function() {
			return this.shouldShowTopSection() ? ($(window).height() - this.$("#@form").outerHeight() - this.$("#@top_section").outerHeight() - this.margin) / 2 : 0
		},
		shouldShowTopSection: function() {
			var a = !1,
				b = ($(window).height() - this.$("#@form").outerHeight() - this.$("#@top_section").outerHeight() - this.margin) / 2;
			return b < 0 && (a = !0), this.$("#@signup_form").is(":visible") && (a = !0), !a
		},
		shouldShowFbFacepile: function() {
			return !this.$("#@signup_form").is(":visible")
		}
	});
	var h = a.SignupForm2 = d.extend({
		onLoad: function() {
			this.inline_login && this.parent() && this.parent() instanceof f && this.serverCall("record_signup_step").kwargs({
				signup_action: "signup_dialog_begin"
			}).send(), this.signupRpcPending = !1, this.registerKeyupCallbacks(), this.useLoadingSpinnerForConnectedFriends = !1, this.$("#@twitter_signup_link").get(0) && $(document).bind("twitter_oauth_approved", this.fnbind(function(a, b) {
				this.serverCall("record_signup_step").kwargs({
					signup_action: "signup_twitter_connected"
				}).send(), this.serverCall("try_login_twitter").kwargs({
					tw_oauth_key: b.accessToken.key
				}).success(this.fnbind(function(a) {
					a && this.completeLogin()
				})).send();
				var c = b.accessToken,
					d = b.userData;
				this.serverCall("show_connected_friends").kwargs({
					tw_uid: d.twitter_uid,
					fb_uid: this.$("#@fb_uid").val(),
					fb_access_token: this.$("#@fb_access_token").val(),
					fb_expires: this.$("#@fb_expires").val()
				}).contentFor(this.$("#@connected_friends_list"), {
					parentCID: this.cid,
					useLoadingSpinner: this.useLoadingSpinnerForConnectedFriends
				}).send(), this.useLoadingSpinnerForConnectedFriends = !1, this.$("#@connected_pic").hasClass("fb_photo") || (d.photo_url ? this.$("#@connected_pic").attr("src", d.photo_url) : this.$("#@connected_pic").hide()), this.onTwitterAccountConnected(b, d)
			})), this.child("facebook_connect_button") && (this.child("facebook_connect_button").bind("fb_login", this.fnbind(function(a, b) {
				this.serverCall("try_login_facebook").kwargs({
					fb_access_token: b.accessToken
				}).success(this.fnbind(function(a) {
					a && this.completeLogin()
				})).send(), this.serverCall("show_connected_friends").kwargs({
					fb_uid: b.userID,
					fb_access_token: b.accessToken,
					fb_expires: b.expiresIn,
					tw_uid: this.$("#@tw_uid").val()
				}).contentFor(this.$("#@connected_friends_list"), {
					parentCID: this.cid,
					useLoadingSpinner: this.useLoadingSpinnerForConnectedFriends
				}).send(), this.useLoadingSpinnerForConnectedFriends = !1, this.$("#@fb_uid").val(b.userID), this.$("#@fb_access_token").val(b.accessToken), this.$("#@fb_expires").val(b.expiresIn)
			})), this.child("facebook_connect_button").bind("fb_connected", this.fnbind(function(a, b, c) {
				this.serverCall("record_signup_step").kwargs({
					signup_action: "signup_facebook_api_succeeded"
				}).send(), this.onFacebookAccountConnected(c)
			}))), this.$("#@form").submit(this.fnbind(function(a) {
				if(this.signupRpcPending) return !1;
				if(!this.validateName()) return !1;
				if(!this.validateEmail()) return !1;
				if(!this.validatePassword()) return !1;
				this.signupRpcPending = !0;
				if(this.inline_login || this.next_url) {
					this.$("#@spinner").removeClass("hidden");
					var b = {
						name: this.$("#@name").val(),
						email: this.$("#@email").val(),
						password: this.$("#@password").val()
					},
						c = this.getOptionalArgs();
					return b.optional_args = c, this.serverCall("signup_dont_redirect").kwargs(b).success(this.fnbind(function(a) {
						this.$("#@spinner").addClass("hidden"), a ? this.completeLogin() : this.$("#@submit").removeAttr("disabled"), this.signupRpcPending = !1
					})).error(this.fnbind(function() {
						this.signupRpcPending = !1, this.$("#@spinner").hide(), this.$("#@submit").removeAttr("disabled")
					})).liveMutate().send(), this.$("#@submit").attr("disabled", "disabled"), !1
				}
				return this.$("#@submit").attr("disabled", "disabled"), this.onFormSubmission(), !0
			})), this.$("#@email").keyup(this.fnbind(function() {
				this.child("email_validator").hideAllErrors()
			})), this.$("#@name").keyup(this.fnbind(function() {
				this.child("name_validator").hideAllErrors()
			})), this.$("#@password").keyup(this.fnbind(function() {
				this.child("password_validator").hideAllErrors()
			}))
		},
		onFormSubmission: function() {},
		onTwitterAccountConnected: function(a, b) {
			this.accountConnected(), this.$("#@twitter_signup_link").hide(), this.$("#@twitter_connected").show(), this.$("#@connect_option").hide(), this.$("#@connect_explanation").hide(), this.$("#@step_2").show(), this.$("#@email").focus(), this.showConnectedFriends(), this.showTwitterConnectedInfo(b), this.$("#@tw_oauth_key").val(a.accessToken.key), this.$("#@tw_uid").val(b.twitter_uid), this.$("#@tw_screen_name").val(b.twitter_screen_name), this.$("#@name").val(b.name), this.child("name_validator").validate(), this.onShowStepTwo()
		},
		showConnectedFriends: function() {
			this.$("#@connected_friends_list").show()
		},
		onFacebookAccountConnected: function(a) {
			this.accountConnected(), this.hide_welcome_on_connect && this.$("#@signup_welcome").hide();
			if(a && a[0]) window.RESULTS = a, a[0].pic_big ? (this.$("#@connected_pic").attr("src", a[0].pic_big), this.$("#@connected_pic").addClass("fb_photo")) : this.$("#@connected_pic").hide(), a[0].contact_email && this.$("#@email").val(a[0].contact_email), this.child("facebook_connect_button").$("#@facebook_connect_button").hide(), this.$("#@facebook_connected").show(), this.$("#@connect_option").hide(), this.$("#@connect_explanation").hide(), this.$("#@password").focus(), this.$("#@step_2").show(), this.showConnectedFriends(), this.showFbConnectedInfo(a), this.$("#@name").val(a[0].name), this.child("name_validator").validate(), this.onShowStepTwo();
			else {
				var b = window.console;
				b && b.error && b.error("Error retrieving data from Facebook."), this.serverCall("record_signup_step").kwargs({
					signup_action: "signup_facebook_api_failed"
				}).send()
			}
		},
		validateName: function() {
			if(!this.child("name_validator").isValid) if(!this.$("#@name") || this.child("name_validator") !== null) return a1ert("Check the name that you entered before submitting."), !1;
			return !0
		},
		validateEmail: function() {
			if(!this.child("email_validator").isValid) if(!this.$("#@email") || this.child("email_validator").isValid !== null) return a1ert("Check the e-mail that you're using before submitting."), !1;
			return !0
		},
		validatePassword: function() {
			if(this.$("#@password").val().length < this.minimum_password_length) return !1;
			if(!this.child("password_validator").isValid) {
				if(!this.$("#@password") || this.child("password_validator").isValid !== null) return a1ert("Check the password that you're using before submitting."), !1
			} else window.console.log("validator hasn't responded yet, allowing through");
			return !0
		},
		registerKeyupCallbacks: function() {
			this.$("#@email, #@name, #@password").keyup(this.fnbind(function() {
				this.$("#@name").val() && this.$("#@email").val() && this.$("#@password").val() ? (this.$("#@submit").removeAttr("disabled"), this.$("#@submit").removeClass("submit_button_disabled")) : (this.$("#@submit").attr("disabled", "disabled"), this.$("#@submit").addClass("submit_button_disabled"))
			}))
		},
		showFbConnectedInfo: function(a) {
			this.$("#@connected_info").show(), this.$("#@fb_name").text(a[0].name), this.$("#@fb_info").show()
		},
		showTwitterConnectedInfo: function(a) {
			this.$("#@connected_info").show(), this.$("#@tw_name").text("@" + a.twitter_screen_name), this.$("#@twitter_info").show()
		},
		getOptionalArgs: function() {
			var a = this.$("#@fb_access_token").val(),
				b = this.$("#@tw_oauth_key").val();
			return {
				code: this.$("#@code").val(),
				group: this.$("#@group").val(),
				source_user_name: this.$("#@source_user_name").val(),
				source_url: this.$("#@source_url").val(),
				tid: this.tid,
				fb_access_token: a,
				fb_expires: this.$("#@fb_expires").val(),
				tw_oauth_key: b
			}
		},
		completeLogin: function() {
			this.inline_login || e.navigateTo(this.next_url || "/"), require("settings").pageMode == "post_reload" && $(document).trigger("quora_login")
		},
		accountConnected: function() {},
		cancelClicked: function() {
			this.toggleStep1Header(), this.lookup("home_logged_out") && (this.lookup("home_logged_out").$("#@contents").show(), this.lookup("home_logged_out").$("#@signup_form").hide())
		},
		onShowStepTwo: function() {
			this.toggleStep1Header(), this.serverCall("record_signup_step").kwargs({
				signup_action: "signup_show_step_two"
			}).send()
		},
		bypassConnectLink: function() {
			this.$("#@connect_option").hide("fast"), this.$("#@connect_explanation").hide("fast"), this.$("#@step_2").show("fast"), this.onShowStepTwo(), this.$("#@name").focus()
		},
		toggleStep1Header: function() {
			this.hide_step1_header_on_step2 && (this.$("#@step_1_title").toggle(), this.$("#@connect_buttons").toggle())
		},
		events: {
			"click #@bypass_connect_link": "onClickBypassConnectLink",
			"click #@twitter_signup_link": "onClickTwitterSignupLink",
			"click #@login_link": "onClickLoginLink",
			"click #@create_account_link": "onClickCreateAccountLink",
			"click #@cancel": "onClickCancel"
		},
		onClickBypassConnectLink: function(a) {
			return this.bypassConnectLink(), !1
		},
		onClickTwitterSignupLink: function(a) {
			this.serverCall("record_signup_step").kwargs({
				signup_action: "signup_connect_to_twitter"
			}).send();
			var b = window.open("/twitter/oauth_window", "_BLANK", "height=400,width=800");
			return !1
		},
		onClickLoginLink: function(a) {
			this.$("#@step_1").addClass("hidden"), this.$("#@login_form").removeClass("hidden")
		},
		onClickCreateAccountLink: function(a) {
			this.$("#@step_1").removeClass("hidden"), this.$("#@login_form").addClass("hidden")
		},
		onClickCancel: function(a) {
			return this.cancelClicked(), !1
		},
		onHomePageSignupFormLoad: function() {
			var a = e.getPathName(),
				b = {};
			if(a == "/" || a == "/signup") b = {
				path: a
			};
			this.serverCall("record_signup_step").kwargs({
				signup_action: "signup_homepage_visit",
				funnel_args: b
			}).send(), this.no_associated_users && this.serverCall("record_signup_step").kwargs({
				signup_action: "signup_homepage_visit_no_account",
				funnel_args: b
			}).send()
		}
	});
	a.HomePageSignupForm = h.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.onHomePageSignupFormLoad()
		}
	});
	var i = a.SignupFormExpanded = h.extend({
		accountConnected: function() {
			this.$("#@connected_photo_wrapper").show(), this.lookup("home_logged_out").$("#@contents").hide(), this.lookup("home_logged_out").$("#@signup_form").show(), this.lookup("home_logged_out").$("#@signup_form_expanded").removeClass("w3").addClass("row")
		},
		cancelClicked: function() {
			this.toggleStep1Header(), this.lookup("home_logged_out") && (this.lookup("home_logged_out").$("#@contents").show(), this.lookup("home_logged_out").$("#@signup_form_expanded").addClass("w3").removeClass("row")), this.child("facebook_connect_button").$("#@facebook_connect_button").show(), this.$("#@facebook_connected, #@step_2, #@twitter_connected, #@connected_friends_list, #@connected_info, #@twitter_info, #@connected_photo_wrapper").hide(), this.$("#@connect_option, #@connect_explanation, #@connect_option").show(), this.canSignupWithTwitter() && this.$("#@twitter_signup_link").show()
		},
		canSignupWithTwitter: function() {
			return !0
		},
		bypassConnectLink: function() {
			this.serverCall("record_signup_step").kwargs({
				signup_action: "bypass_connect_link"
			}).send(), this.$("#@connect_option").hide(), this.$("#@connect_explanation").hide(), this.$("#@step_2").show(), this.onShowStepTwo(), this.accountConnected(), this.$("#@name").focus()
		}
	}),
		j = a.HomePageSignupFormExpanded = i.extend({
			onLoad: function() {
				this._super.apply(this, arguments), this.onHomePageSignupFormLoad()
			}
		}),
		k = a.SignupFormBigButtons = j.extend({
			onLoad: function() {
				this._super.apply(this, arguments), this.doingPasswordlessSignup = !1
			},
			accountConnected: function() {
				this.lookup("home_logged_out") && this.lookup("home_logged_out").$("#@quora_explanation").fadeTo(1, .15)
			},
			onShowStepTwo: function() {
				this._super.apply(this, arguments), this.$("#@step_1").hide(), this.setStepTwoTitle()
			},
			setStepTwoTitle: function() {
				var a = this.$("#@step_2_header_prefix").text(),
					b = this.$("#@name").val() == "",
					c = this.$("#@email").val() == "",
					d = this.$("#@password").val() == "";
				b || this.$("#@name").addClass("prefilled"), c || this.$("#@email").addClass("prefilled"), b && c && d || (c && d ? (a = "Add Email and Password to ", this.$("#@email").focus()) : d && (a = "Choose Password to ", this.$("#@password").focus())), this.$("#@step_2_header_prefix").text(a)
			},
			cancelClicked: function() {
				this._super.apply(this, arguments), this.$("#@step_1").show(), this.lookup("home_logged_out") && this.lookup("home_logged_out").$("#@quora_explanation").fadeTo(1, 1)
			},
			showFbConnectedInfo: function(a) {
				this.$("#@connected_info").show()
			},
			showTwitterConnectedInfo: function(a) {
				this.$("#@connected_info").show()
			},
			registerKeyupCallbacks: function() {},
			showConnectedFriends: function() {},
			validateName: function() {
				return this.doingPasswordlessSignup ? !0 : this.$("#@name").val() == "" ? (this.child("name_validator").$("#@invalid_message").text("A full name is required."), this.child("name_validator").showErrorOnComponent("#@invalid_message"), !1) : this._super.apply(this, arguments)
			},
			validateEmail: function() {
				return this.doingPasswordlessSignup ? !0 : this.$("#@email").val() == "" ? (this.child("email_validator").$("#@invalid_message").text("A valid email is required."), this.child("email_validator").showErrorOnComponent("#@invalid_message"), !1) : this._super.apply(this, arguments)
			},
			validatePassword: function() {
				return this.doingPasswordlessSignup ? !0 : this.$("#@password").val() == "" ? (this.child("password_validator").$("#@invalid_message").text("A password is required."), this.child("password_validator").showErrorOnComponent("#@invalid_message"), !1) : this._super.apply(this, arguments)
			},
			events: {
				"click #@bypass_connect_link": "onClickBypassConnectLink",
				"click #@twitter_signup_link": "onClickTwitterSignupLink",
				"click #@cancel": "onClickCancel",
				"click #@name": "onClickName",
				"click #@email": "onClickEmail"
			},
			onClickName: function(a) {
				var b = this;
				b.$("#@name").removeClass("prefilled")
			},
			onClickEmail: function(a) {
				var b = this;
				b.$("#@email").removeClass("prefilled")
			},
			onFacebookAccountConnected: function(a) {
				this.doingPasswordlessSignup = !0;
				if(a && a[0]) window.RESULTS = a, a[0].pic_big ? (this.$("#@connected_pic").attr("src", a[0].pic_big), this.$("#@connected_pic").addClass("fb_photo")) : this.$("#@connected_pic").hide(), a[0].contact_email && this.$("#@email").val() == "" && this.$("#@email").val(a[0].contact_email), this.$("#@name").val() == "" && this.$("#@name").val(a[0].name), this.doSignup();
				else {
					var b = window.console;
					b && b.error && b.error("Error retrieving data from Facebook."), this.serverCall("record_signup_step").kwargs({
						signup_action: "signup_facebook_api_failed"
					}).send()
				}
			},
			doSignup: function() {
				this.$("#@form").submit()
			}
		});
	a.NarrowSignupForm = i.extend({
		onTwitterAccountConnected: function(a, b) {
			this.accountConnected(), this.$("#@twitter_signup_link").hide(), this.$("#@twitter_connected").show(), this.$("#@connected_friends_list").show(), this.showTwitterConnectedInfo(b), this.$("#@tw_oauth_key").val(a.accessToken.key), this.$("#@tw_uid").val(b.twitter_uid), this.$("#@tw_screen_name").val(b.twitter_screen_name), this.$("#@name").val() == "" && this.$("#@name").val(b.name), this.child("name_validator").validate()
		},
		onFacebookAccountConnected: function(a) {
			this.accountConnected();
			if(a && a[0]) window.RESULTS = a, a[0].pic_big ? (this.$("#@connected_pic").attr("src", a[0].pic_big), this.$("#@connected_pic").addClass("fb_photo")) : this.$("#@connected_pic").hide(), a[0].contact_email && this.$("#@email").val() == "" && this.$("#@email").val(a[0].contact_email), this.child("facebook_connect_button").$("#@facebook_connect_button").hide(), this.$("#@facebook_connected").show(), this.onShowStepTwo(), this.$("#@connected_friends_list").show(), this.showFbConnectedInfo(a), this.$("#@name").val() == "" && this.$("#@name").val(a[0].name), this.child("name_validator").validate();
			else {
				var b = window.console;
				b && b.error && b.error("Error retrieving data from Facebook."), this.serverCall("record_signup_step").kwargs({
					signup_action: "signup_facebook_api_failed"
				}).send()
			}
		},
		accountConnected: function() {
			this.$("#@connected_photo_wrapper").hide()
		},
		onShowStepTwo: function() {}
	}), a.SignupFormInsideFBPageTimeline = h.extend({
		completeLogin: function() {
			top.location = "/"
		}
	}), a.SignupAndAddAnswerForm = h.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.lookup("editor").focus()
		},
		getOptionalArgs: function() {
			var a = this._super.apply(this, arguments);
			return a.answer_text = this.lookup("editor").serialize(), a.qid = this.qid, a.via = this.via, a.key = this.key, a.code = this.code, a
		}
	}), a.SignupAndFollowBoardForm = h.extend({
		onLoad: function() {
			this._super.apply(this, arguments)
		},
		getOptionalArgs: function() {
			var a = this._super.apply(this, arguments);
			return a.bid = this.bid, a.inviter_uid = this.inviter_uid, a.key = this.key, a.code = this.code, a
		}
	}), a.SignupConnectedFriends = d.extend({
		onLoad: function() {},
		events: {
			"click #@more_friends": "onClickMoreFriends"
		},
		onClickMoreFriends: function(a) {
			return this.dialog().title("Connecting your Facebook or Twitter Account to Quora").cancel(null, "Close").html("To get you started, we'll have you follow all your Facebook or Twitter friends who are already on Quora when you sign up.<br /><br />We won't message your contacts who aren't on the site or post anything to your Facebook or Twitter unless you choose to.<br /><br />For Quora to become a great knowledge resource for everyone, it's important that users trust the site.  If Quora ever fails to meet your expectations of trust, please let us know by e-mailing <a href='mailto:feedback@quora.com'>feedback@quora.com</a> and we'll try to do better."), !1
		}
	});
	var l = a.QuestionPageSignupCallToAction = d.extend({
		onLoad: function() {
			var a = !1,
				b = this;
			$(window).scroll(function() {
				a = !0
			}), this.intervalId = setInterval(function() {
				a && (a = !1, b.toggleFixed())
			}, 200), this.reportEmptyFacepile(), this.showingFixed = !1, require("facebook").getLoginStatus(this.fnbind(function(a) {
				a.status !== "unknown" && this.$("#@facepile_container").show()
			}))
		},
		reportEmptyFacepile: function() {
			var a = !1,
				b = this,
				c = this.$("#@facepile_container"),
				d = this.$("#@facepile_container").height(),
				e = this.facepileIntervalId = setInterval(function() {
					var a = c.find("iframe");
					a.size() > 0 && a.height() === 0 && (b.serverCall("no_facepile").send(), clearInterval(e))
				}, 300);
			setTimeout(function() {
				clearInterval(e)
			}, 1e4)
		},
		toggleFixed: function() {
			var a = $(window).scrollTop(),
				b = this.$("#@signup_bubble_container").offset().top,
				c = this.$("#@signup_bubble_container").height(),
				d = 30;
			this.showingFixed ? b + c + d >= a && (this.lookup("fixed").hide(), this.showingFixed = !1) : b + c + d < a && (this.lookup("fixed").show(), this.showingFixed = !0)
		},
		disableFixed: function() {
			this.lookup("fixed").hide(), this.showingFixed = !1, this.intervalId && clearInterval(this.intervalId)
		},
		onUnload: function() {
			this.disableFixed(), clearInterval(this.facepileIntervalId)
		}
	});
	a.QuestionPageSignupCallToActionOnAnswer = l.extend({
		onLoad: function() {
			this._super.apply(this, arguments)
		},
		events: {
			"click #@signup": "onClickSignup"
		},
		onClickSignup: function() {
			return this.serverCall("attempt_login").liveMutate().send(), !1
		}
	});
	var m = a.QuestionPageSignupCallToActionFixed = d.extend({
		onLoad: function() {
			var a = this.$("#@bar");
			$(window).bind("load", function() {
				a.is(":visible") && window.scrollBy(0, -a.height())
			})
		},
		show: function() {
			this.$("#@bar").slideDown()
		},
		hide: function() {
			this.$("#@bar").slideUp()
		},
		events: {
			"click #@signup": "onClickSignup"
		},
		onClickSignup: function() {
			return this.serverCall("attempt_login").liveMutate().send(), !1
		}
	});
	a.QuestionPageSignupConnectCallToAction = l.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.installMouseHandlers()
		},
		reportEmptyFacepile: function() {},
		connectButtonClicked: function() {
			this.$("#@initial_call_to_action").hide(), this.$("#@form_wrapper").show(), this.disableFixed()
		},
		clickHandlers: {
			facebook_connect_button: function() {
				this.connectButtonClicked(), this.lookup("form").lookup("facebook_connect_button").$("#@facebook_connect_button").click()
			},
			twitter_signup_link: function() {
				this.connectButtonClicked(), this.lookup("form").$("#@twitter_signup_link").click()
			},
			signup_email_button: function() {
				this.connectButtonClicked();
				var a = this.lookup("form");
				a.$("#@connected_photo_wrapper").hide(), a.bypassConnectLink()
			}
		}
	}), a.QuestionPageSignupConnectCallToActionFixed = m.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.installMouseHandlers()
		},
		connectButtonClicked: function() {
			$("body,html").scrollTop(0), this.$("#@bar").hide(), this.parent().disableFixed()
		},
		clickHandlers: {
			facebook_connect_button: function() {
				this.connectButtonClicked(), this.parent().$("#@facebook_connect_button").click()
			},
			twitter_signup_link: function() {
				this.connectButtonClicked(), this.parent().$("#@twitter_signup_link").click()
			},
			signup_email_button: function() {
				this.connectButtonClicked(), this.parent().$("#@signup_email_button").click()
			}
		}
	});
	var n = a.SignupWallExplanationOnAnswer = d.extend({
		onLoad: function() {
			var a = !1,
				b = this;
			$(window).scroll(function() {
				a = !0
			}), this.intervalId = setInterval(function() {
				a && (a = !1, b.toggleFixed())
			}, 200), this.showingFixed = !1
		},
		toggleFixed: function() {
			var a = $(window).scrollTop(),
				b = this.$("#@signup_wall_explanation").offset().top,
				c = this.$("#@signup_wall_explanation").height(),
				d = 30;
			this.showingFixed ? b + c + d >= a && (this.lookup("fixed").hide(), this.showingFixed = !1) : b + c + d < a && (this.lookup("fixed").show(), this.showingFixed = !0)
		},
		disableFixed: function() {
			this.lookup("fixed").hide(), this.showingFixed = !1, this.intervalId && clearInterval(this.intervalId)
		},
		onUnload: function() {
			this.disableFixed(), clearInterval(this.facepileIntervalId)
		}
	});
	a.JSTest = d.extend({
		onLoad: function() {
			this.serverCall("browser_has_js").send()
		}
	}), a.SignupToGetNotifiedOfNewAnswers = d.extend({
		defaultTextVisible: !0,
		onLoad: function() {
			var a = this;
			a.$("#@email").focus(function() {
				a.defaultTextVisible && (a.defaultTextVisible = !1, a.$("#@email").val(""), a.$("#@email").removeClass("default_text"), a.serverCall("record_focus").kwargs({
					qid: a.qid
				}).send())
			}), a.$("#@form").submit(function() {
				return a.$("#@submit").attr("disabled", "disabled"), a.child("email_validator").validate({
					valid: a.fnbind(a.onValid),
					invalid: a.fnbind(a.onInvalid)
				}), !1
			})
		},
		onInvalid: function() {
			this.$("#@submit").removeAttr("disabled")
		},
		onValid: function() {
			var a = this;
			a.serverCall("notify_email").kwargs({
				email: a.$("#@email").val(),
				qid: a.qid
			}).success(function(b) {
				b && a.$("#@wrapper").hide(), a.$("#@submit").removeAttr("disabled")
			}).send()
		}
	}), a.MobileAppInstallDialog = d.extend({
		onLoad: function() {
			this.recordStep("dialog_view")
		},
		events: {
			"click #@cancel_link": "onClose",
			"click #@install_link": "onClickInstall"
		},
		recordStep: function(a) {
			this.serverCall("record_step").kwargs({
				step_name: a
			}).send()
		},
		onClickInstall: function() {
			this.recordStep("install_link_clicked"), this.$("#@background").remove()
		},
		onClose: function() {
			this.recordStep("dialog_closed"), this.$("#@background").remove()
		}
	});
	var o = a.BaseAutoRedirectToApp = d.extend({
		onLoad: function() {
			this.redirect()
		},
		timeoutInterval: 100,
		preTimeoutRedirectAction: function() {},
		postTimeoutRedirectAction: function() {},
		redirect: function() {
			var a = this;
			setTimeout(function() {
				a.postTimeoutRedirectAction()
			}, a.timeoutInterval), a.preTimeoutRedirectAction()
		},
		recordStep: function(a) {
			this.serverCall("record_step").kwargs({
				step_name: a
			}).send()
		}
	});
	a.IPhoneAutoRedirectToApp = o.extend({
		preTimeoutRedirectAction: function() {
			e.navigateTo(this.redirect_app_url)
		},
		postTimeoutRedirectAction: function() {
			this.recordStep("not_installed"), e.navigateTo(this.app_store_link)
		}
	}), a.AndroidAutoRedirectToApp = o.extend({
		postTimeoutRedirectAction: function() {
			var a = this,
				b = document.hasFocus();
			b && (a.recordStep("not_installed"), e.navigateTo(a.app_store_link)), setTimeout(function() {
				a.$("#@background").remove()
			}, 100)
		}
	})
}), require.install("app/view/threaded_comments", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("view/inline_editor").InlineEditor,
		e = require("window_manager").isInHash,
		f = require("view/toggle");
	a.TComments = f.ToggledComponent.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.initState("expanded", this.default_expanded);
			var a = null;
			try {
				a = this.lookup("comment_link")
			} catch(b) {}
			a && a.state("loading") && (a.state("loading", !1), this.state("expanded", !0));
			if(this.should_auto_expand_for_notif) for(var c = 0; c < this.all_comment_ids.length; c++) {
				var d = this.all_comment_ids[c];
				if(e("comment" + d)) {
					this.toggle(!0, !0);
					break
				}
			}
		},
		viewComments: function() {
			this.state("expanded", !this.state("expanded"))
		},
		stateHandlers: {
			expanded: function(a) {
				var b = this.$("#@comments"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a);
				var d = this.child("t_comment_list_wrapper");
				d && d.state("visible", a)
			}
		}
	}), a.TCommentListWrapper = c.extend({
		onLoad: function(a) {
			this.initState("visible", this.parent().state("expanded") || this.default_expanded), this.first_level_all_loaded = !1
		},
		hasSingleChild: function() {
			var a = this.child("t_comment_list");
			return a && a.hasSingleChild()
		},
		focusAddRoot: function() {
			var a = this.child("t_comment_add_root");
			a && a.focusEditor()
		},
		loadChildren: function() {
			this.lazy_load_children = !1, this.serverCall("load_child_list").kwargs({
				object_id: this.object_id,
				reply_to_id: this.reply_to_id,
				level: this.level
			}).success(this.fnbind(function(a) {
				this.state("visible", !0)
			})).contentFor(this.$("#@comment_list_placeholder"), {
				parentCID: this.cid
			}).send()
		},
		loadAllFirstLevel: function() {
			this.first_level_all_loaded = !0, this.lookup("placeholder_toggled").toggle(!0, !0)
		},
		stateHandlers: {
			highlighted: function(a) {
				var b = this.$("#@comment_list"),
					c = b.hasClass("selected");
				if(arguments.length < 1) return c;
				b.toggleClass("selected", a)
			},
			visible: function(a) {
				var b = this.$("#@comment_list_wrapper"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a);
				var d = this.child("t_comment_list");
				if(d) {
					var e = this.hasSingleChild(),
						f = !this.is_root;
					d.eachChildInAnyOrder(function(b) {
						b.state("visible", a), a && e && f && b.hasSingleChild && b.hasSingleChild() && b.state("expanded", !0)
					})
				} else a && this.lazy_load_children && this.loadChildren();
				a && this.$("#@comment_list_first_level_placeholder").size() > 0 && !this.first_level_all_loaded && this.loadAllFirstLevel()
			}
		}
	}), a.TCommentList = c.extend({
		onLoad: function(a) {
			if(this.should_auto_expand_for_notif) for(var b = 0; b < this.all_comment_ids.length; b++) {
				var c = this.all_comment_ids[b];
				if(e("comment" + c)) {
					this.lookup("comments_list").viewComments();
					break
				}
			}
		},
		hasSingleChild: function() {
			return this.children() && this.children().length === 1
		},
		eachChildInAnyOrder: function(a) {
			var b = this.children();
			if(b) for(var c = 0; c < b.length; c++) a(b[c])
		}
	}), a.TComment = c.extend({
		parentComment: function() {
			return this.parent().parent().parent()
		},
		clickHandlers: {
			delete_link: function() {
				this.deleteComment()
			},
			show_downvoted_link: function() {
				this.state("showDownvotedLinkVisible", !1)
			}
		},
		hasSingleChild: function() {
			var a = this.child("t_comment_list_wrapper");
			return a ? a.hasSingleChild() : !1
		},
		onLoad: function() {
			this.initState("expanded", !1), this.initState("showDownvotedLinkVisible", this.is_downvoted_and_hidden), this.initState("visible", this.is_root || this.default_visible || this.parentComment().state("expanded")), this.installMouseHandlers(), this.expandOnNotif()
		},
		addNotifHighlight: function(a) {
			a.addClass("highlighter");
			var b = !1,
				c = function() {
					var b = a.offset().top,
						c = b + a.height(),
						d = $(window).scrollTop(),
						e = d + $(window).height();
					return c >= d && b <= e
				},
				d = c(),
				e = function() {
					b = !0
				};
			$(window).scroll(e);
			var f = setInterval(function() {
				if(b) {
					var g = c();
					d && !g && (a.removeClass("highlighter"), clearInterval(f), $(window).unbind("scroll", e)), d = g, b = !1
				}
			}, 500)
		},
		expandOnNotif: function() {
			if(!this.initState("first_call", !0) && e("comment" + this.id)) {
				var a = [],
					b = this;
				while(!b.is_root) b = b.parentComment(), a.unshift(b);
				for(var c = 0; c < a.length; c++) a[c].state("expanded", !0);
				var d = this.lookup("comments_list");
				d && d.state("expanded", !0), this.addNotifHighlight(this.$("#@comment_highlight_wrapper"))
			}
		},
		deleteComment: function() {
			var a = "Are you sure you want to delete this comment?";
			this.dialog().title("Delete Comment").cancel(null, "Close").ok(this.fnbind(function() {
				this.serverCall("delete_comment").kwargs({
					cid: this.id,
					oid: this.object_id
				}).liveMutate().send()
			}), "Delete Comment").html(a)
		},
		stateHandlers: {
			expanded: function(a) {
				var b = this.$("#@comment_inner"),
					c = b.hasClass("expanded");
				if(arguments.length < 1) return c;
				b.toggleClass("expanded", a);
				var d = this.child("t_comment_replies_collapsed");
				d && d.state("visible", !a);
				var e = this.child("t_comment_list_wrapper");
				e && e.state("visible", a), this.$("#@comment").toggleClass("last_expanded", a && this.is_last)
			},
			visible: function(a) {
				var b = this.$("#@comment"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a);
				if(a) {
					var d = this.parent();
					while(d != null && d.retarget_enabled == undefined) d = d.parent();
					d != null && d.retarget_enabled && d.retarget()
				}
			},
			showDownvotedLinkVisible: function(a) {
				var b = this.$("#@show_downvoted_link_wrapper"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a), this.$("#@full_comment_text").toggleClass("hidden", a), this.$("#@footer_wrapper").toggleClass("hidden", a)
			}
		}
	}), a.TCommentReplyBox = c.extend({
		clickHandlers: {
			add_comment_link: function() {
				this._request()
			},
			cancel_link: function() {
				this._cancel()
			}
		},
		onLoad: function(a) {
			this.initState("visible", !1), this.installMouseHandlers()
		},
		_cancel: function(a) {
			this.state("visible", !1), this.lookup("t_comment_action_bar").state("visible", !0)
		},
		stateHandlers: {
			visible: function(a) {
				var b = this.$("#@reply_box"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a), a && this.child("editor").focus(), this.$("#@reply_box").toggleClass("parent_expanded", this.parent().state("expanded"))
			}
		},
		_request: function() {
			var a = this.lookup("editor");
			if(a.isEmpty()) return;
			var b = a.serialize();
			this._cancel(), this.serverCall("add_comment").kwargs({
				oid: this.object_id,
				comment: b,
				reply_to_id: this.reply_to_id
			}).success(this.fnbind(function(b) {
				this.parent().state("expanded", !0), a.clear()
			})).liveMutate().send()
		}
	}), a.TCommentAddRoot = c.extend({
		clickHandlers: {
			add_root_link: function() {
				this._request()
			}
		},
		onLoad: function() {
			this.installMouseHandlers()
		},
		focusEditor: function() {
			var a = this.lookup("editor");
			a.focus()
		},
		_request: function() {
			var a = this.lookup("editor");
			if(a.isEmpty()) return;
			this.serverCall("add_comment").kwargs({
				oid: this.object_id,
				comment: a.serialize()
			}).success(this.fnbind(function(b) {
				a.clear()
			})).liveMutate().send()
		}
	}), a.TCommentRepliesCollapsed = c.extend({
		clickHandlers: {
			show_child_link: function(a) {
				this.parent().state("expanded", !0)
			}
		},
		onLoad: function(a) {
			this.initState("visible", !this.parent().state("expanded")), this.installMouseHandlers()
		},
		stateHandlers: {
			visible: function(a) {
				var b = this.$("#@show_child_link_wrapper"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a)
			}
		}
	}), a.TCommentActionBar = c.extend({
		vote: function(a, b) {
			this.serverCall("comment_vote").kwargs({
				oid: this.object_id,
				cid: this.id,
				is_upvote: a,
				cancel: b
			}).liveMutate().send()
		},
		clickHandlers: {
			comment_downvote: function() {
				this.vote(!1, !1)
			},
			comment_upvote: function() {
				this.vote(!0, !1)
			},
			comment_downvote_cancel: function() {
				this.vote(!1, !0)
			},
			comment_upvote_cancel: function() {
				this.vote(!0, !0)
			}
		},
		mouseDownHandlers: {
			show_reply_box_link: function() {
				this.state("visible", !1), this.lookup("t_comment_reply_box").state("visible", !0)
			}
		},
		onLoad: function(a) {
			this.initState("visible", !0), this.installMouseHandlers()
		},
		stateHandlers: {
			visible: function(a) {
				var b = this.$("#@action_bar"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a)
			}
		}
	}), a.TCommentFullTextInlineEditor = d.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.setToggleCallback(this.fnbind(function() {
				if(this.parent()) {
					var a = this.lookup("t_comment_" + this.id);
					a && a.$("#@comment_inner").toggleClass("comment_editor_focused")
				}
			}))
		}
	}), a.TCommentStandalone = c.extend({
		onLoad: function() {
			this.initState("expanded", !0), this.initState("comment_log_visible", !1), this.installMouseHandlers()
		},
		clickHandlers: {
			change_log_toggle: function() {
				this.state("comment_log_visible", !this.state("comment_log_visible"))
			}
		},
		stateHandlers: {
			expanded: function(a) {
				var b = this.$("#@comments"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a);
				var d = this.child("t_comment_" + this.comment_id);
				if(!d) return;
				d.state("expanded", !0)
			},
			comment_log_visible: function(a) {
				var b = this.$("#@comment_log"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a), this.$("#@view_label").toggle(!a)
			}
		}
	}), a.TCommentWhoVoted = c.extend({
		onLoad: function() {
			this.initState("expanded", this.default_expanded), this.installMouseHandlers(), this.loaded = this.default_expanded
		},
		clickHandlers: {
			view_all_link: function() {
				this.loaded || this.serverCall("voter_list").contentFor(this.$("#@voter_list_expanded"), {
					parentCID: this.cid
				}).success(this.fnbind(function() {
					this.loaded = !0
				})).send(), this.state("expanded", !0)
			}
		},
		stateHandlers: {
			expanded: function(a) {
				var b = this.$("#@all_phrases"),
					c = !b.hasClass("hidden");
				if(arguments.length < 1) return c;
				b.toggleClass("hidden", !a), this.$("#@view_all_span").toggleClass("hidden", a)
			}
		}
	})
}), require.install("app/view/share/form", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2"),
		e = require("app/view/share/connect").SocialConnector,
		f = a.ShareCheckboxBase = e.extend({
			onLoad: function() {
				this.list_item = this.$("#@share_checkbox_list_item"), this.checkbox = this.$("#@checkbox"), this.action_link = this.$("#@action_link"), this.message_preview = this.$("#@message_preview"), this.message_preview_text = this.$("#@message_preview_text"), this.checkbox.click(this.fnbind(function() {
					this.isChecked() ? this.list_item.removeClass("is_not_checked") : this.list_item.addClass("is_not_checked")
				})), this.action_link.click(this.fnbind(function() {
					return this.is_disabled ? this.remedyDisabled() : this.editText(), !1
				}))
			},
			isChecked: function() {
				return this.checkbox.attr("checked") === "checked"
			},
			remedyDisabled: function() {
				console.log("remedy disabled")
			},
			beginEditingText: function() {
				console.log("edit text")
			}
		});
	a.ShareCheckboxTwitter = f.extend({}), a.ShareCheckboxFacebook = f.extend({}), a.ShareForm = c.extend({})
}), require.install("app/view/share/dialog", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2"),
		e = require("app/view/share/connect").SocialConnector;
	a.ShareFormDialog = e.extend({
		onLoad: function() {
			function b() {
				a.showHidePlaceholder()
			}
			function c() {
				setTimeout(b, 10)
			}
			function e() {
				a.child("message_editor").focus()
			}
			var a = this;
			a.results = [], a.shareButton = a.$("#@share_button"), a.shortURLCopyField = a.$("#@short_url_copy_field"), a.editor = a.child("message_editor").$("#@editor"), a.editorPlaceholder = a.child("message_editor").$("#@editor_placeholder"), a.twitterCheckbox = a.$("#@twitter_checkbox"), a.twitterConnectLink = a.$("#@twitter_connect_link"), a.twitterCharCount = a.$("#@twitter_char_count"), a.facebookCheckbox = a.$("#@facebook_checkbox"), a.facebookConnectLink = a.$("#@facebook_connect_link"), a.linkedinCheckbox = a.$("#@linkedin_checkbox"), a.linkedinConnectLink = a.$("#@linkedin_connect_link"), a.blogCheckbox = a.$("#@blog_checkbox"), a.boardCheckbox = a.$("#@board_checkbox"), a.boardSelectorContainer = a.$("#@board_selector_container"), a.boardSelector = a.child("selector_wrapper").child("selector"), a.sendCheckbox = a.$("#@send_checkbox"), a.multiSelectorContainer = a.$("#@multi_selector_container"), a.typeahead = a.child("typeahead"), a.child("message_editor").whenOnLoaded(function() {
				a.updateShareEditorLinkDisplay(), a.countTwitterChars()
			}), a.disableSubmitIfNecessary(), a.isChecked(a.boardCheckbox) && a.boardSelectorContainer.show(), a.isChecked(a.sendCheckbox) && a.multiSelectorContainer.show(), a.editor.bind("keyup", c).bind("keydown", c), a.editor.bind("keyup", a.fnbind(a.countTwitterChars)).bind("focus", a.fnbind(a.countTwitterChars)), a.editorPlaceholder.bind("click", e), a.twitterCheckbox.click(function() {
				a.updateShareEditorLinkDisplay();
				if(!a.isChecked(a.twitterCheckbox)) {
					a.disableSubmitIfNecessary(), a.twitterCharCount.addClass("hidden");
					return
				}
				a.countTwitterChars();
				if(a.twUid) {
					a.enableSubmit();
					return
				}
				return a.connectTwitter(a.fnbind(a.checkTwitter)), !1
			}), a.twitterConnectLink.click(function() {
				return a.connectTwitter(a.fnbind(a.checkTwitter)), !1
			}), a.newFacebookCredentials = {}, a.facebookCheckbox.click(function() {
				a.updateShareEditorLinkDisplay();
				if(!a.isChecked(a.facebookCheckbox)) {
					a.disableSubmitIfNecessary();
					return
				}
				if(a.canPublishActions) {
					a.enableSubmit();
					return
				}
				return a.connectFacebook(), !1
			}), a.facebookConnectLink.click(function() {
				return a.connectFacebook(), !1
			}), a.linkedinCheckbox.click(function() {
				a.updateShareEditorLinkDisplay();
				if(!a.isChecked(a.linkedinCheckbox)) {
					a.disableSubmitIfNecessary();
					return
				}
				if(a.liUid) {
					a.enableSubmit();
					return
				}
				return a.connectLinkedin(a.fnbind(a.checkLinkedin)), !1
			}), a.linkedinConnectLink.click(function() {
				return a.connectLinkedin(a.fnbind(a.checkLinkedin)), !1
			}), a.blogCheckbox.click(function() {
				a.updateShareEditorLinkDisplay();
				if(!a.isChecked(a.blogCheckbox)) {
					a.disableSubmitIfNecessary();
					return
				}
				a.enableSubmit()
			}), a.boardCheckbox.click(function() {
				a.updateShareEditorLinkDisplay();
				if(!a.isChecked(a.boardCheckbox)) {
					a.boardSelectorContainer.hide(), a.disableSubmitIfNecessary();
					return
				}
				a.boardSelectorContainer.show(), a.enableSubmit()
			}), a.sendCheckbox.click(function() {
				a.updateShareEditorLinkDisplay();
				if(!a.isChecked(a.sendCheckbox)) {
					a.typeahead.clear(), a.multiSelectorContainer.hide(), a.disableSubmitIfNecessary();
					return
				}
				a.multiSelectorContainer.show(), a.typeahead.$("#@input").focus()
			}), a.shortURLCopyField.click(function() {
				$(this).select()
			}), a.shareButton.click(function() {
				var b = a.checkboxValues();
				b.send = a.isChecked(a.sendCheckbox);
				var c = a.boardSelector.getBid(),
					e = a.boardSelector.getText();
				a.boardInfo.bid = c, a.boardInfo.name = c ? null : e, a.boardInfo.is_submission = a.isSubmission;
				if(!a.atLeastOneChecked(b)) return a.disableSubmit(), !1;
				var f = d.Dialog.openerFor(a);
				cookies.setQfeedLog(f, "BoardPost"), cookies.setQueryLog(f, "BoardPost"), cookies.setTlog({
					type: "BoardPost"
				}), require("action_log").logAction("Share", null, a.share_target), a.disableSubmit(), a.serverCall("dialog_submit_controller").kwargs({
					checkboxes: b,
					message: a.lookup("message_editor").serialize(),
					board_info: a.boardInfo,
					send_recipients: a.results
				}).success(function(b) {
					b.success === !0 ? d.Dialog.dialogFor(a).close_() : (a.uncheckAll(), b.fbSuccess === !1 && (a.fbUid = b.fbUid, a.canPublishActions = !1), a.typeahead.clear(), b.sendSuccess === !1 && b.recipients.length > 0 && ($.each(b.recipients, function(b, c) {
						a.typeahead.setValue(c.value, c)
					}), a.enableSubmit()))
				}).error(function() {
					a.enableSubmit()
				}).liveMutate().send()
			}), a.$("#@close").click(function() {
				return d.Dialog.dialogFor(a).close_(), !1
			})
		},
		disableSubmit: function() {
			this.shareButton.addClass("submit_button_disabled"), this.shareButton.attr("disabled", "disabled")
		},
		enableSubmit: function() {
			this.shareButton.removeClass("submit_button_disabled"), this.shareButton.removeAttr("disabled")
		},
		regexUrl: /(https?:\/\/[a-zA-Z0-9](?:[-a-zA-Z0-9]*\.)+[a-zA-Z]{2,}(?:\/[^\/\s]+)*\/?)(?:\s|$)/gi,
		showHidePlaceholder: function() {
			this.child("message_editor").isEmpty() ? this.editorPlaceholder.removeClass("hidden") : this.editorPlaceholder.addClass("hidden")
		},
		tweetLength: function(a) {
			if(!a) return 0;
			var b = a.length,
				c = [];
			return a.replace(this.regexUrl, function(a, b) {
				c.push(b)
			}), b -= c.join("").length, $.each(c, function(a, c) {
				b += c.match(/https:/) ? 21 : 20
			}), b += 21, b
		},
		countTwitterChars: function() {
			var a = this;
			a.whenOnLoaded(function() {
				var b = a.child("message_editor"),
					c = b.getText();
				if(c.length > 0) {
					a.twitterCharCount.hasClass("hidden") && a.twitterCheckbox.attr("checked") && a.twitterCharCount.removeClass("hidden");
					var d = 140 - a.tweetLength(c);
					d < 0 && !a.twitterCharCount.hasClass("error") ? a.twitterCharCount.addClass("error") : d >= 0 && a.twitterCharCount.hasClass("error") && a.twitterCharCount.removeClass("error"), a.twitterCharCount.text(d.toString() + " characters left")
				} else a.twitterCharCount.addClass("hidden")
			})
		},
		updateShareEditorLinkDisplay: function() {
			var a = this.child("message_editor");
			this.isChecked(this.twitterCheckbox) ? a.isEmpty() && a.appendAnchor() : a.removeAnchor(), this.isChecked(this.facebookCheckbox) || this.isChecked(this.linkedinCheckbox) || this.isChecked(this.blogCheckbox) || this.isChecked(this.boardCheckbox) || this.isChecked(this.sendCheckbox) ? this.editor.addClass("highlight-link") : this.editor.removeClass("highlight-link"), this.showHidePlaceholder()
		},
		checkboxValues: function() {
			var a = this,
				b = {};
			return $.each(a.shareChannels, function() {
				b[this] = a.isChecked(a.$("#@" + this + "_checkbox"))
			}), b
		},
		atLeastOneChecked: function(a) {
			var b = !1;
			return $.each(a, function(a, c) {
				b = b || c
			}), b
		},
		uncheckAll: function() {
			var a = this;
			$.each(a.shareChannels, function() {
				a.$("#@" + this + "_checkbox").attr("checked", !1)
			}), a.disableSubmit()
		},
		disableSubmitIfNecessary: function() {
			var a = this.checkboxValues();
			!this.atLeastOneChecked(a) && this.results.length === 0 && this.disableSubmit()
		},
		connectFacebook: function() {
			var a = this;
			require("facebook").maybePromptToPublish(a.fbUid, function(b, c, d) {
				a.serverCall("connect_facebook").kwargs({
					fb_uid: b,
					access_token: c,
					expires_secs: d
				}).liveMutate().send(), require("facebook").updatePermissions(function(b, c) {
					b && c.publish_stream ? (a.canPublishActions = !0, a.facebookCheckbox.attr("checked", !0), a.facebookCheckbox.attr("disabled", !1), a.facebookConnectLink.hide(), a.enableSubmit()) : b && a.facebookConnectLink.text("Allow Permission to Post")
				}), a.updateShareEditorLinkDisplay()
			}, function() {
				a.child("fb_different_account").show()
			})
		},
		checkTwitter: function() {
			var a = this;
			a.twitterCheckbox.attr("checked", !0), a.twitterCheckbox.attr("disabled", !1), a.twitterConnectLink.hide(), a.twUid = !0, a.updateShareEditorLinkDisplay(), a.enableSubmit()
		},
		checkLinkedin: function() {
			var a = this;
			a.linkedinCheckbox.attr("checked", !0), a.linkedinCheckbox.attr("disabled", !1), a.linkedinConnectLink.hide(), a.liUid = !0, a.updateShareEditorLinkDisplay(), a.enableSubmit()
		},
		updateResults: function(a) {
			this.results = a, this.results.length > 0 || this.atLeastOneChecked(this.checkboxValues()) ? this.enableSubmit() : this.disableSubmit()
		},
		setIsSubmission: function(a) {
			this.isSubmission = a
		},
		hideDistroOptions: function() {},
		showDistroOptions: function() {},
		isChecked: function(a) {
			return a.attr("checked") === "checked"
		}
	});
	var f = require("qed/rules").Ruleset,
		g = new f,
		h = /\bshare_editor_link\b/;
	g.addOkTag("a", function(a) {
		if(h.test(a.className)) return "a"
	}), g.addKeyHandler(65, require("qed/util").handleSelectAll), a.ShareFormMessageEditor = c.extend({
		onLoad: function() {
			this.editor = this.$("#@editor").get(0), this.anchor = this.$("#@editor a.share_editor_link").get(0), $("a", this.editor).addClass("share_editor_link").after("﻿").before("﻿"), this._qed = require("qed/edit").edit(this.editor, g), this._qed.modify(function(a, b) {})
		},
		focus: function() {
			var a = this;
			a.whenOnLoaded(function() {
				a._qed.focus()
			})
		},
		appendAnchor: function() {
			var a = this;
			a.whenOnLoaded(function() {
				a._qed.modify(function() {
					a.$("#@editor").prepend(a.anchor)
				})
			})
		},
		removeAnchor: function() {
			var a = this;
			a.whenOnLoaded(function() {
				a._qed.modify(function() {
					$(a.anchor).remove()
				})
			})
		},
		isEmpty: function() {
			var a = this,
				b = a._qed.text(!0);
			return b == "\n" || b == ""
		},
		getText: function() {
			var a = this;
			return a._qed.text()
		},
		serialize: function() {
			var a = this._qed.html(!0),
				b = document.createElement("div");
			return b.innerHTML = a, $("a", b).remove(), {
				html: a,
				data: this.qlink_data || {},
				no_anchors: $(b).html()
			}
		}
	})
}), require.install("app/view/contact_importer", function(require, a, b) {
	function g(a, b) {
		var c = !1;
		return $.each(b, function(b, d) {
			if(d.test(a)) {
				c = !0;
				return
			}
		}), c
	}
	var c = require("w2.quora").Component,
		d = [/@yahoo\.(ca|cn|co\.id|co\.in|co\.jp|co\.kr|co\.nz|co\.uk|com|com\.ar|com\.au|com\.br|com\.cn|com\.hk|com\.mx|com\.my|com\.ph|com\.sg|com\.tr|com\.tw|com\.vn|de|dk|es|fr|gr|ie|it|no|pl|se)$/, /@ymail\.com$/, /@rocketmail\.com$/],
		e = [/@gmail\.com$/, /@googlemail\.com$/],
		f = [/@.*(hotmail|live|msn)\..+$/],
		h = a.ImportContactsForm = c.extend({
			prevEmail: null,
			isGoogleAppsEmail: !1,
			shouldLogImpression: !0,
			onLoad: function() {
				var a = this;
				this.isGoogleAppsEmail = this.is_google_apps_email, this.prevEmail = this.getEmail(), this.$("input[type=submit]").focus(), this.$("#@email").keyup(function() {
					a.prevEmail != a.getEmail() && (a.prevEmail = a.getEmail(), a.validateEmail())
				}), this.$("input[type=submit]").click(function() {
					return a.onSubmit()
				}), this.shouldLogImpression && this.serverCall("log_impression").kwargs({
					email: this.getEmail()
				}).send()
			},
			submitForm: function() {
				this.$("#@contact_importer_form").submit()
			},
			updateAndSubmitForm: function(a, b) {
				this.$("#@service").val(a), this.$("#@access_token").val(b), this.$("#@spinner").show(), this.submitForm()
			},
			onSubmit: function() {
				return this.openOAuthDialog(this.getEmail()) ? !1 : !0
			},
			getEmail: function() {
				return $.trim(this.$("#@email").val())
			},
			lastTimeoutId: null,
			validateEmail: function() {
				var a = this.getEmail();
				this.lastTimeoutId && (clearTimeout(this.lastTimeoutId), this.lastTimeoutId = null);
				var b = g(a, d),
					c = g(a, e),
					h = g(a, f);
				this.isGoogleAppsEmail = !1, this.isGoogleAppsDomainCheckQueued = !1, b ? this.onOAuthEmailEntered("yahoo") : c ? this.onOAuthEmailEntered("gmail") : h ? this.onOAuthEmailEntered("hotmail") : (this.onUnknownDomainEntered(), this.lastTimeoutId = setTimeout(this.fnbind(function() {
					this.checkGoogleAppsDomain()
				}), 200))
			},
			onOAuthEmailEntered: function(a) {},
			onUnknownEmailDomainEntered: function() {},
			isCheckingGoogleAppsDomain: !1,
			isGoogleAppsDomainCheckQueued: !1,
			checkGoogleAppsDomain: function() {
				if(this.isCheckingGoogleAppsDomain) {
					this.isGoogleAppsDomainCheckQueued = !0;
					return
				}
				this.isCheckingGoogleAppsDomain = !0;
				var a = this.getEmail(),
					b = this;
				this.serverCall("is_google_apps_domain").kwargs({
					email: a
				}).success(function(c) {
					c && (b.isGoogleAppsEmail = !0), b.onCheckGoogleAppsDomainResponse(a, c), b.isCheckingGoogleAppsDomain = !1, b.isGoogleAppsDomainCheckQueued && (b.isGoogleAppsDomainCheckQueued = !1, b.checkGoogleAppsDomain())
				}).send()
			},
			onCheckGoogleAppsDomainResponse: function(a, b) {},
			logOAuthAttempt: function(a) {
				this.serverCall("log_contact_importer_oauth_attempt").kwargs({
					email: a
				}).send()
			},
			openOAuthDialog: function(a) {
				return g(a, d) ? (this.logOAuthAttempt(a), window.open("/oauth/yahoo", "_BLANK", "height=400,width=800"), !0) : g(a, e) || this.isGoogleAppsEmail ? (this.logOAuthAttempt(a), window.open("/oauth/google?email=" + encodeURIComponent(a), "_BLANK", "height=400,width=800"), !0) : g(a, f) ? (this.logOAuthAttempt(a), window.open("/oauth/hotmail", "_BLANK", "height=600,width=1000"), !0) : !1
			}
		});
	a.OAuthFormSubmissionListener = c.extend({
		onLoad: function() {
			var a = this;
			$(document).bind("oauth_approved", function(b, c) {
				var d = c.service,
					e = c.accessToken;
				a.lookup("contact_importer").updateAndSubmitForm(d, e)
			})
		}
	}), a.SimpleImportContactsForm = h.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@contact_importer_form").submit(this.fnbind(this.onFormSubmit))
		},
		onFormSubmit: function() {
			return !this.child("submit").$("#@import_contacts").is(":disabled")
		},
		unsupportedMessageTimeoutId: null,
		clearUnsupportedMessageTimeout: function() {
			this.unsupportedMessageTimeoutId && (clearTimeout(this.unsupportedMessageTimeoutId), this.unsupportedMessageTimeoutId = null)
		},
		onOAuthEmailEntered: function(a) {
			this.$("#@spinner").hide(), this.$("#@unsupported_domain").hide(), this.$("#@form_error").hide(), this.enableSubmitButton(!0), this.clearUnsupportedMessageTimeout()
		},
		onUnknownDomainEntered: function() {
			this.$("#@spinner").show(), this.$("#@form_error").hide(), this.enableSubmitButton(!1), this.clearUnsupportedMessageTimeout()
		},
		onCheckGoogleAppsDomainResponse: function(a, b) {
			if(this.getEmail() == a) if(!b) {
				var c = this;
				this.unsupportedMessageTimeoutId = setTimeout(function() {
					c.$("#@spinner").hide(), c.$("#@unsupported_domain").show(), c.enableSubmitButton(!1)
				}, 500)
			} else this.$("#@spinner").hide(), this.$("#@unsupported_domain").hide(), this.enableSubmitButton(!0)
		},
		enableSubmitButton: function(a) {
			a ? this.child("submit").$("#@import_contacts").attr("disabled", !1).removeClass("submit_button_disabled") : this.child("submit").$("#@import_contacts").attr("disabled", !0).addClass("submit_button_disabled")
		}
	}), a.NuxImportContactsForm = a.SimpleImportContactsForm.extend({
		shouldLogImpression: !1,
		onLoad: function() {
			var a = this;
			this._super.apply(this, arguments), this.$("#@change_email_link").click(function() {
				return a.$("#@default_email_container").hide(), a.$("#@change_email_container").show(), !1
			})
		},
		submitForm: function() {
			this._super.apply(this, arguments), this.$("#@alt_spinner").show()
		}
	}), a.CompactImportContactsForm = a.SimpleImportContactsForm.extend({
		onLoad: function() {
			var a = this;
			this._super.apply(this, arguments), this.$("#@change_email_link").click(function() {
				return a.$("#@default_email_container").hide(), a.$("#@change_email_container").show(), a.$("#@find_contacts_button").css({
					"float": "right"
				}), !1
			})
		}
	}), a.ImportContactsFormHarness = h.extend({
		onOAuthEmailEntered: function(a) {
			console.log("onOAuthEmailEntered", a)
		},
		onUnknownDomainEntered: function() {
			console.log("onUnknownDomainEntered")
		},
		onCheckGoogleAppsDomainResponse: function(a, b) {
			console.log("onCheckGoogleAppsDomainResponse", a, b)
		}
	});
	var i = require("app/view/common"),
		j = i.ToFollowList,
		k = i.ToFollowListItem;
	a.PersonalMessage = j.extend({
		onLoad: function() {
			this.$("#@view_personal_message").click(this.fnbind(function() {
				return this.$("#@view_personal_message").addClass("hidden"), this.$("#@personal_message").removeClass("hidden"), !1
			}))
		},
		getVal: function() {
			return this.$("#@msg").val()
		}
	}), a.InviteByEmailAddress = c.extend({
		onLoad: function() {
			this.$("#@more").click(this.fnbind(function() {
				return this.$("#@more").addClass("hidden"), this.$("#@email_addresses .hidden_fields").removeClass("hidden"), !1
			}))
		}
	}), a.InviteByEmailAddressItem = c.extend({
		onLoad: function(a) {
			this.$("#@email").bind("blur", this.fnbind(function(a) {
				if(this.$("#@email").val()) return this.showTopicSuggestionsAndNextEmail(), !1
			}))
		},
		showTopicSuggestionsAndNextEmail: function() {
			this.lookup("suggestions").show(), this.cQuery(":suggestions.topic.topic_add").setoid(this.$("#@email").val()), this.cQuery(":suggestions.topic").setTarget(this.$("#@email").val());
			var a = parseInt(this.$("#@email").attr("index")) + 1;
			this.lookup("address_item_" + a.toString()).show()
		},
		show: function() {
			this.$("#@address_item_wrapper").show()
		},
		setTo: function(a) {
			a && (this.$("#@email").val(a), this.showTopicSuggestionsAndNextEmail())
		}
	}), a.SendSuggestions = c.extend({
		toggle: function() {
			this.$("#@suggestions").toggleClass("hidden")
		},
		show: function() {
			this.$("#@suggestions").removeClass("hidden")
		},
		hide: function() {
			this.$("#@suggestions").addClass("hidden")
		}
	}), a.ContactImporterStep = c.extend({
		onLoad: function() {
			var a = this;
			a.serverCall("log_impression").send(), a.totalCount = a.$(".suggestions_table input[type=checkbox]").length, a.$("#@select_all").click(function() {
				a.$("#@select_all").is(":checked") ? (a.$(".suggestions_table input[type=checkbox]").attr("checked", !0), a.$(a.itemSelector()).addClass("selected")) : (a.$(".suggestions_table input[type=checkbox]").attr("checked", !1), a.$(a.itemSelector()).removeClass("selected")), a.updateSelectCount()
			});
			var b = a.child("action_button");
			b && b.$("#@submit").click(function() {
				return a.$("#@form").submit(), !1
			})
		},
		updateSelectCount: function() {
			var a = this.$(".suggestions_table input[type=checkbox]:checked").length;
			this.$("#@select_count").html(a), this.$("#@select_all").attr("checked", a == this.totalCount)
		},
		itemSelector: function() {
			return ""
		}
	}), a.SuggestionCard = c.extend({
		onLoad: function() {
			var a = this;
			this.$("#@checkbox").click(this.fnbind(this.handleClick)), this.$("#@suggestion").click(function(b) {
				b.target != a.$("#@checkbox")[0] && (a.$("#@checkbox").attr("checked", !a.$("#@checkbox").is(":checked")), a.handleClick())
			})
		},
		handleClick: function() {
			this.$("#@checkbox").is(":checked") ? this.$("#@suggestion").addClass("selected") : this.$("#@suggestion").removeClass("selected"), this.lookup("contact_importer_step").updateSelectCount()
		}
	}), a.UsersToFollowFromContacts = a.ContactImporterStep.extend({
		itemSelector: function() {
			return ".usercard"
		}
	}), a.UsersToInviteFromContacts = a.ContactImporterStep.extend({
		itemSelector: function() {
			return ".invite_row"
		}
	})
}), require.install("app/view/nux", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2"),
		e = require("cookies"),
		f = require("window_manager");
	a.NextLinkOrButton = c.extend({
		onLoad: function() {
			this.$("#@next_button").click(this.fnbind(function() {
				e.setMessage("nux", [this.click_track_event,
				{
					completed: this.completed
				}])
			}))
		}
	}), a.NuxAddProfilePicture = c.extend({
		onLoad: function() {
			this.$("#@add_photo_button").click(this.fnbind(function() {
				return this.lookup("photo").lookup("add_link").editPhoto(), !1
			}))
		}
	}), a.NewUserTips = c.extend({
		onLoad: function() {
			this.$("#@show_more").click(this.fnbind(function() {
				return this.$("#@full_text").show(), this.$("#@show_more").hide(), this.$("#@show_less").show(), !1
			})), this.$("#@show_less").click(this.fnbind(function() {
				return this.$("#@full_text").hide(), this.$("#@show_less").hide(), this.$("#@show_more").show(), !1
			}))
		}
	})
}), require.install("app/view/nux/welcome", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("cookies");
	a.NUXStepLine = c.extend({
		onLoad: function(a) {
			var b = this.curr_step;
			this.serverCall("log_nux_step").send()
		}
	}), a.NUXStepNumber = c.extend({
		onLoad: function(a) {
			this.$("#@nux_step_wrapper").click(this.fnbind(function() {
				if(this.$("#@nux_step_wrapper").hasClass("clickable")) {
					var a = this.lookup("nux_step_line").curr_step,
						b = this.idx;
					this.lookup("nux_step_line").$("#@nux_steps").find(".curr").find("h2").removeClass("curr-text").addClass("text"), this.lookup("nux_step_line").$("#@nux_steps").find(".curr").removeClass("curr").addClass("clickable"), this.$("#@nux_step_title").addClass("curr-text").removeClass("text"), this.$("#@nux_step_wrapper").addClass("curr").removeClass("clickable"), this.lookup("nux_flow").$(".nux-step-" + a).hide(), this.lookup("nux_flow").$(".nux-step-" + b).show(), this.lookup("nux_step_line").curr_step = b, $("html").animate({
						scrollTop: 0
					}, 500), $("body").animate({
						scrollTop: 0
					}, 500)
				}
			}))
		}
	});
	var e = a.NUXTopicCard = c.extend({
		onLoad: function() {
			this.$("#@card").click(this.fnbind(function(a) {
				this.onCardClick()
			}))
		},
		trackCardClick: function() {
			d.setQfeedLog(this, "TopicFollow"), d.setQueryLog(this, "TopicFollow"), d.setTlog({
				type: "TopicFollow",
				tid: this.object_id
			})
		},
		doFollow: function() {
			return this.$("#@follow_button").hasClass("unfollow_button") ? (this.$("#@card").removeClass("is-following").addClass("not-following"), this.$("#@follow_button").removeClass("unfollow_button").text("Follow"), this.serverCall("unfollow").kwargs({
				object_id: this.object_id
			}).liveMutate().send(), !1) : (this.$("#@card").addClass("is-following").removeClass("not-following"), this.$("#@follow_button").addClass("unfollow_button").text("Unfollow"), this.serverCall("follow").kwargs({
				object_id: this.object_id
			}).liveMutate().send(), !1)
		},
		onCardClick: function() {
			this.trackCardClick(), this.doFollow()
		}
	});
	a.FollowSuggestionCard = e.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@subtitle, #@name").click(this.fnbind(function(a) {
				return event.stopPropagation(), !0
			}))
		},
		onCardClick: function() {
			this.doFollow()
		}
	}), a.NextStepButton = c.extend({
		onNextStep: function() {
			return this.next_step == "end" ? window.location = this.after_nux_url : (this.serverCall("log_nux_step").send(), this.lookup("nux_step_line").$("#@nux_" + this.curr_step + "_step").find(".nux-step-wrapper").removeClass("curr").addClass("clickable"), this.lookup("nux_step_line").$("#@nux_" + this.curr_step + "_step").find("h2").removeClass("curr-text").addClass("text"), this.lookup("nux_step_line").$("#@nux_" + this.next_step + "_step").find(".nux-step-wrapper").addClass("curr").removeClass("clickable"), this.lookup("nux_step_line").$("#@nux_" + this.next_step + "_step").find("h2").addClass("curr-text").removeClass("text"), this.lookup("nux_flow").$("#@" + this.curr_step + "_wrapper").hide(), this.lookup("nux_flow").$("#@" + this.next_step + "_wrapper").show(), this.lookup("nux_step_line").curr_step = this.next_step_idx, $("html").animate({
				scrollTop: 0
			}, 500), $("body").animate({
				scrollTop: 0
			}, 500)), !1
		}
	}), a.NUXContinueButton = a.NextStepButton.extend({
		onLoad: function(a) {
			this.$("#@next").click(this.fnbind(this.onNextStep))
		}
	}), a.NUXTopicListItem = c.extend({
		onLoad: function(a) {
			var b = this.$("#@topic_list_item"),
				c = this.$("#@checkbox");
			b.click(this.fnbind(function() {
				var a = this.lookup("follow_related_topics_top").tids,
					b = this.lookup("follow_related_topics_top").related_tids,
					d = $.inArray(this.tid, a);
				d != -1 ? (c.removeAttr("checked"), a.splice(d, 1), b--) : (c.attr("checked", "checked"), a.push(this.tid), b++, b > 0 && b <= this.min_to_follow && this.serverCall("log_nux_topic_checked").kwargs({
					num_followed: b
				}).send());
				var e = this.min_to_follow - b;
				b > 0 ? (this.lookup("topics_step").$("#@topics_text").hide(), this.lookup("topics_step").$("#@topics_button").show()) : (this.lookup("topics_step").$("#@topics_text").show(), this.lookup("topics_step").$("#@topics_button").hide());
				if(e > 0) {
					var f = e > 1 ? "Topics" : "Topic";
					this.lookup("follow_related_topics_top").$("#@unbutton").html("Choose " + e + " More " + f + " to Continue"), this.lookup("follow_related_topics_bottom").$("#@unbutton").html("Choose " + e + " More " + f + " to Continue"), this.lookup("follow_related_topics_top").$("#@follow_all").hide(), this.lookup("follow_related_topics_bottom").$("#@follow_all").hide(), this.lookup("follow_related_topics_top").$("#@unbutton").show(), this.lookup("follow_related_topics_bottom").$("#@unbutton").show()
				} else this.lookup("follow_related_topics_top").$("#@unbutton").hide(), this.lookup("follow_related_topics_bottom").$("#@unbutton").hide(), this.lookup("follow_related_topics_top").$("#@follow_all").show(), this.lookup("follow_related_topics_bottom").$("#@follow_all").show();
				this.lookup("follow_related_topics_top").related_tids = b, this.lookup("follow_related_topics_top").tids = a, this.lookup("follow_related_topics_bottom").tids = a
			}))
		}
	}), a.NUXFollowRelatedTopicsButton = a.NextStepButton.extend({
		onLoad: function(a) {
			this.related_tids = 0;
			var b = this;
			this.$("#@follow_all").click(function() {
				return b.serverCall("follow_all").kwargs({
					tids: b.tids
				}).liveMutate().success(function() {
					b.next_step == "end" && b.onNextStep()
				}).send(), b.next_step != "end" && b.onNextStep(), !1
			})
		}
	}), a.SetPasswordStep = a.NextStepButton.extend({
		setPassword: function(a) {
			if(a.length < this.minimum_password_length) {
				a1ert("Your password must be at least " + this.minimum_password_length + " characters.");
				return
			}
			return this.serverCall("set_password").kwargs({
				password: a
			}).liveMutate().success(function() {
				this.next_step == "end" && this.onNextStep()
			}).send(), this.next_step != "end" && this.onNextStep(), !1
		}
	}), a.SetPasswordForm = c.extend({
		onLoad: function() {
			this.$("#@set_password").click(this.fnbind(function() {
				return this.parent().setPassword(this.$("#@password").val()), !1
			}))
		}
	})
}), require.install("app/view/post", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("webnode2"),
		e = require("cookies"),
		f = require("window_manager"),
		g = require("view/inline_editor").InlineEditor,
		h = a.VoteButtonBase = c.extend({
			vote: function() {
				this.serverCall("vote").kwargs({
					pid: this.pid
				}).liveMutate().send()
			},
			onLoad: function() {
				this.$("#@vote_cancel").click(this.fnbind(function() {
					return this.serverCall("vote_cancel").kwargs({
						pid: this.pid
					}).liveMutate().send(), !1
				}))
			}
		});
	a.VotePostUpButton = h.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@vote").click(this.fnbind(function() {
				return e.setTlog({
					type: "PostVoteUp",
					pid: this.pid
				}), e.setQfeedLog(this, "PostUpvote"), e.setQueryLog(this, "PostUpvote"), this.vote(), !1
			}))
		}
	}), a.VotePostDownButton = h.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.$("#@vote").click(this.fnbind(function() {
				return e.setTlog({
					type: "PostVoteDown",
					pid: this.pid
				}), this.vote(), !1
			}))
		}
	}), a.CreatePostBox = c.extend({
		onLoad: function() {
			f.getHash().substr(0, 5) == "#post" && this.expand(), this.$("#@fake").click(this.fnbind(function() {
				this.expand()
			})), this.$("#@add_title").click(this.fnbind(function() {
				return this.$("#@add_title").hide(), this.$("#@title_editor").show(), this.lookup("title").focus(), !1
			}))
		},
		expand: function() {
			this.$("#@fake").hide(), this.$("#@post_editor").show(), this.cQuery(":post.editor").focus()
		},
		reset: function() {
			this.cQuery(":post.editor").clear(), this.lookup("title").clear(), this.$("#@fake").show(), this.$("#@post_editor").hide()
		}
	}), a.NewPostEditor = g.extend({
		onLoad: function() {
			this._super.apply(this, arguments), this.disclaimer_update = "", this.attempts = 0
		},
		submitHandler: function() {
			this.input_button_obj.click(this.fnbind(function() {
				var a = !1,
					b = ["what", "when", "why", "how", "who", "where"],
					c = 120,
					e = this.stripHTML(this.getTitle().html),
					f = this.stripHTML(this.get_value().html);
				return $.each(b, function(b, d) {
					e.substr(0, d.length).toLowerCase() == d && f.length < c * 2 && (a = !0), f.substr(0, d.length).toLowerCase() == d && f.length < c && (a = !0)
				}), e.indexOf("?") == e.length - 1 && (a = !0), f.indexOf("?") == f.length - 1 && f.length < c && (a = !0), a && this.attempts < 2 ? (this.attempts++, this._dialog = this.dialog().title("Add Question").load("dialog", {
					kwargs: {
						title: e,
						desc: f
					}
				})) : (this.attempts = 0, d.InputValidator.validate(this, {
					valid: this.fnbind(this.trigger_request),
					invalid: function() {}
				})), !1
			}))
		},
		stripHTML: function(a) {
			var b = document.createElement("DIV");
			return b.innerHTML = a, b.textContent || b.innerText
		},
		getTitle: function() {
			return this.parent().lookup("title").serialize()
		},
		_get_kwargs: function() {
			return {
				id: this.id,
				input: this.get_value(),
				title: this.getTitle(),
				disclaimer_update: this.disclaimer_update
			}
		},
		ajax_callback: function(a) {
			this.parent().reset(), a && a[0] == "/" ? f.navigateTo(a) : a && a == "close" && window.close()
		},
		save_draft: function(a) {
			var b = a ? "save_draft" : "save_draft_auto",
				c = this.serverCall(b).kwargs({
					title: this.getTitle(),
					content: this.get_value(),
					window_id: d.windowId,
					draft_space: this.draft_space
				});
			a && c.liveMutate(), c.send()
		}
	}), a.PostExpanded = c.extend({
		getFacebookLikeHoverArea: function() {
			return this.$("#@post").add(this.$("#@post_header"))
		}
	}), a.PostTimestamp = c.extend({
		onLoad: function() {
			this.$("#@link").mousedown(this.fnbind(function() {
				e.setQfeedLog(this, "PostTimestampClickthrough"), e.setQueryLog(this, "PostTimestampClickthrough")
			}))
		}
	}), a.PostFeedItem = c.extend({
		onLoad: function() {
			this.$("#@link").mousedown(this.fnbind(function() {
				e.setQfeedLog(this, "PostClickthrough"), e.setQueryLog(this, "PostClickthrough")
			})), this.$("#@rating").tooltip({
				contents: this.tt
			}).mouseover(this.fnbind(function() {
				this.mouseover_toggled || (this.mouseover_toggled = !0, this.child("expandable_qtext").$("#@truncated").mouseover())
			})).click(this.fnbind(function() {
				this.serverCall("viewed").kwargs({
					pid: this.pid
				}).liveMutate().send();
				var a = this.child("expandable_qtext").$("#@truncated a.more_link");
				return a.length ? a.click() : (this.child("expandable_qtext").switchIfReady(), this.show()), !1
			})), this.child("expandable_qtext").setCallback(this.fnbind(function() {
				this.show()
			}))
		},
		getFacebookLikeHoverArea: function() {
			return this.$("#@post").add(this.$("#@rating_buttons"))
		},
		show: function() {
			this.$("#@rating").addClass("hidden"), this.$("#@votes").removeClass("hidden"), this.$("#@voting").removeClass("hidden"), this.$("#@actions").removeClass("hidden")
		}
	}), a.PostDeleteLink = c.extend({
		onLoad: function() {
			var a = this;
			this.$("#@delete").click(function() {
				return $(".content").dialog({
					title: "Delete Post",
					contents: "Are you sure you wish to delete this post?",
					buttons: {
						Ok: function() {
							a._request("delete")
						},
						Cancel: null
					}
				}), !1
			}), this.$("#@undelete").click(function() {
				return $(".content").dialog({
					title: "Restore Post",
					contents: "Are you sure you wish to restore this post?",
					buttons: {
						Ok: function() {
							a._request("undelete")
						},
						Cancel: null
					}
				}), !1
			})
		},
		_request: function(a) {
			this.serverCall(a).kwargs({
				pid: this.pid
			}).liveMutate().send()
		}
	}), a.PostSuggestedEditDiscardButtonInline = c.extend({
		onLoad: function() {
			this.$("#@submit").click(this.fnbind(function() {
				return this.serverCall("discard_suggested_edit").kwargs({
					pid: this.pid
				}).liveMutate().send(), !1
			}))
		}
	}), a.PostTopicRemoveLink = c.extend({
		onLoad: function() {
			this.$("#@remove").tooltip({
				contents: "Remove Post from Topic"
			}).click(this.fnbind(function() {
				return this.serverCall("remove").liveMutate().send(), !1
			}))
		},
		hide: function() {
			this.$("#@button").hide()
		},
		show: function() {
			this.$("#@button").show()
		}
	}), a.LiftPostButton = c.extend({
		onLoad: function() {
			this.$("#@lift").click(this.fnbind(function() {
				return this.serverCall("lift").kwargs({
					pid: this.pid,
					tid: this.tid
				}).liveMutate().send(), !1
			})), this.lift_tt && this.$("#@lift").tooltip({
				contents: this.lift_tt
			}), this.$("#@unlift").click(this.fnbind(function() {
				return this.serverCall("unlift").kwargs({
					pid: this.pid,
					tid: this.tid
				}).liveMutate().send(), !1
			})), this.unlift_tt && this.$("#@unlift").tooltip({
				contents: this.unlift_tt
			})
		}
	}), a.PostIsLiftedIcon = c.extend({
		onLoad: function() {
			this.$("#@icon").tooltip({
				contents: this.comment
			})
		}
	}), a.PostTrapDialog = c.extend({
		onLoad: function() {
			this.$("%cancel").click(this.fnbind(function() {
				return d.Dialog.dialogFor(this).close_(), !1
			})), this.$("#@show_add").click(this.fnbind(function() {
				return this.$("#@matches").hide(), this.$("#@add_question").show(), !1
			})), this.$("#@submit").click(this.fnbind(function() {
				return this.lookup("add_question_dialog").addQuestion(), !1
			}))
		}
	})
}), require.install("app/view/user", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("view/inline_editor").InlineEditor,
		e = require("window_manager"),
		f = require("cookies");
	require("dialog"), a.ProfilePhoto = c.extend({
		toggleSuggestion: function() {
			this.$("#@view_pending").toggle(), this.$("#@pending").toggle();
			var a = this.parent().$("#@user_action_link");
			$(this.$("#@pending")).is(":visible") ? a.addClass("w1").removeClass("w1_5") : a.removeClass("w1").addClass("w1_5")
		}
	}), a.ReportUserDialog = c.extend({
		onLoad: function() {
			this.$("#@report").click(this.fnbind(function() {
				return this._dialog = this.dialog().title("Report " + this.name).cancel(null, "Cancel").load("report_dialog_contents"), !1
			}))
		}
	}), a.ReportNameLink = c.extend({
		onLoad: function() {
			this.$("#@report").click(this.fnbind(function() {
				return this.serverCall("report").kwargs({
					target_uid: this.target_uid
				}).liveMutate().success(this.fnbind(function() {})).send(), !1
			}))
		}
	}), a.WantedAnswerDialog = Dialog.extend({
		onLoad: function(a) {
			this._super.apply(this, arguments), this.child("question_selector").focus(), this.setSuccessCallback(this.fnbind(function(a) {
				a && e.navigateTo(a)
			}))
		},
		getPars: function() {
			var a = this.child("question_selector").getQid(),
				b = this.child("question_selector").qValue;
			return {
				qid: a,
				text: b
			}
		}
	}), a.UserFollowLink = c.extend({
		onLoad: function() {
			this.$("#@follow_user").click(this.fnbind(function(a) {
				return this.follow(), !1
			})), this.$("#@unfollow_user").click(this.fnbind(function(a) {
				return this.unfollow(), !1
			}))
		},
		keyEvents: function(a) {
			switch(a) {
			case 70:
				return this.follow(), !1;
			case 78:
				return this.unfollow(), !1
			}
		},
		follow: function() {
			f.setQfeedLog(this, "UserFollow"), f.setQueryLog(
			this, "UserFollow"), f.setTlog({
				type: "UserFollow",
				uid: this.uid
			}), this.serverCall("follow_user").liveMutate().send()
		},
		unfollow: function() {
			this.serverCall("unfollow_user").liveMutate().send()
		}
	}), a.EndorseUserLink = c.extend({
		onLoad: function(a) {
			this.show_tooltip && this.$("#@endorse").tooltip({
				contents: "Endorse " + this.name + " on " + this.topic_name
			}), this.$("#@endorse").click(this.fnbind(function() {
				return this._request(), !1
			}))
		},
		_request: function() {
			this.serverCall("endorse_user").kwargs({
				to_uid: this.uid,
				tid: this.tid
			}).liveMutate().send()
		}
	}), a.UnendorseUserLink = c.extend({
		onLoad: function() {
			this.$("#@remove_endorse").click(this.fnbind(function() {
				return this.serverCall("remove_endorse_user").kwargs({
					enid: this.enid
				}).liveMutate().send(), !1
			}))
		}
	}), a.UserTopicFinder = c.extend({
		onLoad: function(a) {
			this.$("#@link").click(this.fnbind(function() {
				return this.$("#@link").addClass("hidden"), this.$("#@topic_selector").removeClass("hidden"), this.lookup("selector").focus(), !1
			}))
		}
	}), a.UserTopicStatsRow = c.extend({
		onLoad: function() {
			this.$(".@view_more").click(this.fnbind(function() {
				return this.$("#@more").toggleClass("hidden"), !1
			}))
		}
	}), a.UserTopicPromote = c.extend({
		onLoad: function(a) {
			this.$("#@add_featured_topic").tooltip({
				contents: "Move to Top"
			}), this.$("#@add_featured_topic").click(this.fnbind(function() {
				return this.serverCall("add_featured_topic").liveMutate().send(), !1
			})), this.$("#@remove_featured_topic").tooltip({
				contents: "Remove from Top"
			}), this.$("#@remove_featured_topic").click(this.fnbind(function() {
				return this.serverCall("remove_featured_topic").liveMutate().send(), !1
			}))
		}
	}), a.NameInlineEditor = d.extend({
		onLoad: function() {
			this._super.apply(this, arguments), e.getHash().substr(0, 9) == "#editname" && this.toggle_editor()
		},
		_get_kwargs: function() {
			return {
				uid: this.id,
				input: this.get_value()
			}
		}
	}), a.UserSig = c.extend({
		onLoad: function() {
			this.$("#@view").click(this.fnbind(function() {
				return this.toggleSuggestion(), !1
			}))
		},
		toggleSuggestion: function() {
			this.$("#@pending").toggle(), this.$("#@view").toggle()
		}
	}), a.UserTopicEndorsementsText = c.extend({
		onLoad: function() {
			this.$("#@toggle_endorsements").click(this.fnbind(function(a) {
				return this.lookup("endorsements").$("#@endorsements").toggle(), !1
			}))
		}
	}), a.UserTopicEndorsements = c.extend({
		toggle: function() {
			this.$("#@endorsements").toggleClass("hidden")
		}
	}), a.BatchRevertControls = c.extend({
		onLoad: function() {
			this.$("#@select_all_check").change(this.fnbind(function(a) {
				return this.toggleCheckboxes(), !1
			})), this.$("#@select_all_word").click(this.fnbind(function(a) {
				return this.toggleCheckboxes(), !1
			})), this.$("#@revert").click(this.fnbind(function() {
				return this.batchRevert(), !1
			}))
		},
		batchRevert: function() {
			var a = [];
			return this.$(".user_log_operations_to_revert input:checked").each(function(b) {
				a.push($(this).attr("name"))
			}), a.length == 0 ? !1 : (this._dialog = this.dialog().title("Batch Revert Edits").cancel(null, "Cancel").ok(this.fnbind(function(b) {
				var c = b.dialogComponent,
					d = c.lookup("editor");
				if(d.isEmpty()) return;
				var e = d.serialize();
				this.serverCall("batch_revert").kwargs({
					revert_strings: a,
					comment: e
				}).liveMutate().send()
			})).load("batch_revert_dialog"), !1)
		},
		toggleCheckboxes: function() {
			var a = this.$(".user_log_operations_to_revert .pagedlist_hidden input:not(:disabled)").length,
				b = this.$(".user_log_operations_to_revert input:not(:disabled)").length - a,
				c = this.$(".user_log_operations_to_revert input:checked").length;
			b != c ? (this.$("#@select_all_check").attr("checked", !0), this.$("input:not(:disabled)").attr("checked", !0), this.$(".user_log_operations_to_revert .pagedlist_hidden input").each(function(a) {
				$(this).attr("checked", !1)
			})) : (this.$("#@select_all_check").attr("checked", !1), this.$("input:not(:disabled)").attr("checked", !1))
		},
		getKwargs: function(a, b) {
			return {
				revert_strings: a,
				comment: b.serialize()
			}
		}
	}), a.UserSigInlineEditor = d.extend({
		onLoad: function() {
			this._super.apply(this, arguments);
			var a = this.fnbind(function() {
				var a = this.parent();
				return a && a.toggleButtons && a.toggleButtons(), !1
			});
			this.$("#@inline_editor_cancel").click(a), this.$("#@inline_editor_link").click(a)
		}
	}), a.RemoveMyEndorsementButton = c.extend({
		onLoad: function() {
			this.$("#@remove_endorsement_link").tooltip({
				contents: "Remove this endorsement"
			}).click(this.fnbind(function() {
				return this.serverCall("remove_endorsement").liveMutate().send(), !1
			}))
		}
	})
}), require.install("app/view/quote", function(require, a, b) {
	function g(a, b, c) {
		for(var d = i(a, c), e = i(b, c), f; d && e && d.node === e.node; d = d.next, e = e.next) f = d.node;
		if(d && e) {
			a = d.node, b = e.node;
			while(a && a !== b) a = a.nextSibling;
			if(!a) {
				var g = d;
				d = e, e = g
			}
			return h(f, d, e)
		}
	}
	function h(a, b, c) {
		assert(b || c), b && c && assert(b.node.parentNode === c.node.parentNode);
		var d = a.cloneNode(!1);
		b && b.next && d.appendChild(h(b.node, b.next, null));
		for(var e = b ? b.node.nextSibling : a.firstChild, f = c ? c.node : null; e && e !== f; e = e.nextSibling) d.appendChild(e.cloneNode(!0));
		return c && c.next && d.appendChild(h(c.node, null, c.next)), d
	}
	function i(a, b) {
		b = b || a.ownerDocument.documentElement;
		for(var c; a; a = a.parentNode) {
			c = {
				node: a,
				next: c
			};
			if(a === b) break
		}
		return c
	}
	var c = require("qed/selection").Selection,
		d = require("qed/npd"),
		e = require("webnode2"),
		f = require("qed/util");
	a.QuoteSelector = Component.extend({
		onLoad: function() {
			var a = this;
			this.minimum_text_length = 0;
			var b = this.getContainer();
			this.selection = new c(window, b), a.mouseUpHandler = this.fnbind(this.handleMouseUp), a.mouseDownHandler = this.fnbind(this.handleMouseDown), $(document).mouseup(a.mouseUpHandler), $(b).mousedown(a.mouseDownHandler), this.$("#@container_boundary").append("&nbsp;&nbsp;"), a.doHideHandler = this.fnbind(this.doHide), $(document).mousedown(a.doHideHandler)
		},
		doHide: function(a) {
			this.isQuoteButton(a.target) || (this.getHoverMenu() && this.getHoverMenu().doHide(), this.isInHoverMenu(a.target) && this.selection.remove())
		},
		onUnload: function() {
			$(document).unbind("mouseup", this.mouseUpHandler), $(document).unbind("mousedown", this.doHideHandler), $(this.getContainer()).unbind("mousedown", this.mouseDownHandler), delete this.selection, delete this.hover_menu, delete this.mouseUpHandler, delete this.mouseDownHandler
		},
		getContainer: function() {
			return this.$("#@container")[0]
		},
		isInHoverMenu: function(a) {
			var b = this.getHoverMenu();
			return b ? this.isQuoteButton(a) || $(a).parents(".hover_menu").length > 0 : !1
		},
		isQuoteButton: function(a) {
			function g() {
				return d.length > 0 && f.contains(d[0], a) || e.length > 0 && f.contains(e[0], a)
			}
			var b = !1,
				c = this.getHoverMenu();
			if(!c) return !1;
			var d = c.$("#@quote_tooltip"),
				e = c.$("#@quote_button");
			b = g();
			if(b) return b;
			var h = c.getDialog();
			return h ? (d = h.$("#@quote_tooltip"), e = h.$("#@quote_button"), b = g(), b) : !1
		},
		getHoverMenu: function() {
			return this.hover_menu || (this.hover_menu = this.child("hover_menu")), this.hover_menu
		},
		clearSelectionTimeout: function() {
			var a = this.selectionTimeout;
			a && clearTimeout(a), delete this.selectionTimeout
		},
		handleMouseDown: function(a) {
			this.clearSelectionTimeout(), this.pendingMouseDown = !0
		},
		handleMouseUp: function(a) {
			function h(a, b) {
				e = g.getText(a, b);
				if(e && $.trim($(e).text()).length > g.minimum_text_length) {
					g.text = e;
					var c = g.getHoverMenu(),
						d = c.$("#@link");
					d.html("﻿");

					function h(a) {
						return f.hasTag(a, "br")
					}
					function i(a) {
						return a.nodeType === 3 && $.trim(a.nodeValue) === ""
					}
					var j = g.$("#@container_boundary")[0],
						k = b.parentNode;
					if(k === j) d.insertBefore(j);
					else {
						var l = !1,
							m = b.previousSibling;

						function n() {
							d.insertAfter(m.lastChild.lastChild), l = !0
						}
						if(m && f.isList(m)) n();
						else if(m && f.isListItem(m)) d.insertAfter(m.lastChild), l = !0;
						else if(!m && f.isListItem(k)) {
							var o = k.previousSibling;
							o ? (d.insertAfter(o.lastChild), l = !0) : m = k.parentNode.previousSibling
						} else !m && k && f.hasTag(k, "div") && (m = k.previousSibling);
						if(m && (h(m) || i(m))) {
							while(h(m) || i(m)) m = m.previousSibling || m.parentNode;
							m && f.isList(m) ? n() : d[0] !== m && (d.insertAfter(m), l = !0)
						}
						l || d.insertAfter(b)
					}
					c.recordPosition(d.position()), c.doHide(), c.loaded = !1, c.show()
				}
			}
			var b = a.target;
			if(this.isInHoverMenu(b)) return;
			var c = this.pendingMouseDown;
			this.pendingMouseDown = !1;
			var d = this.getContainer();
			if(!c && !f.contains(d, b)) return;
			delete this.text;
			var e, g = this;
			this.selectionTimeout = setTimeout(function() {
				var a = g.selection;
				if(!a) return;
				var b = !1;
				try {
					b = a.record(), b && a.modify(h)
				} finally {
					b && (a.select(), g.$("#@container_boundary").css("height", "0px").css("width", "0px"))
				}
			}, 200)
		},
		getText: function(a, b) {
			var c = g(a, b, this.getContainer());
			if(!c) return "";
			var e = document.createElement("div");
			return e.appendChild(c), d.cleanInnerHTML(e)
		}
	}), a.cloneSubtree = g, a.QuoteHoverMenuWidgetCode = Component.extend({
		onLoad: function() {
			var a = this;
			setTimeout(function() {
				a.$("#@preview_code").select()
			}, 0)
		}
	}), a.QuoteDialog = Component.extend({
		onLoad: function() {
			function b() {
				var b = a.lookup("hover_menu");
				return b.doHide(), a._dialog = a.dialog({
					width: 585,
					verticalOffset: 100
				}).title(a.title).load("quote_dialog_content", {
					kwargs: b.getKwargs()
				}), !1
			}
			var a = this,
				c = this.$("#@quote_button");
			this.$("#@preview_link").click(b), this.$("#@quote_dialog_tooltip").click(b), c.length > 0 && c.click(b).mouseover(function() {
				a.parent().$("#@menu .hover_menu_nub").css({
					"background-position": "10px -7px"
				})
			}).mouseout(function() {
				a.parent().$("#@menu .hover_menu_nub").css({
					"background-position": "10px 0"
				})
			}).mousedown(function() {
				a.parent().$("#@menu .hover_menu_nub").css({
					"background-position": "10px -14px"
				})
			})
		},
		closeDialog: function() {
			this._dialog.close_()
		}
	}), a.QuoteDialogContent = Component.extend({
		onLoad: function() {
			var a = this,
				b = this.$("#@quote_dialog_content_wrapper"),
				c = this.$("#@code"),
				d = this.$("#@w400"),
				f = this.$("#@w575"),
				g = $("<div>").addClass("embed_dialog_close_button").text("close");
			this.widthBorder = 0, this.heightBorder = 0, this.getSize(), c.select(), c.click(function() {
				c.select()
			}), d.click(function() {
				if(!d.hasClass("selected")) {
					var b = $(".dialog").css("left");
					$(".dialog").css({
						width: "420px",
						left: parseInt(b) + 87.5 + "px"
					}), $(".dialog_wrapper").css({
						width: "400px"
					}), d.addClass("selected"), f.removeClass("selected"), a.getSize()
				}
				c.select()
			}), f.click(function() {
				if(!f.hasClass("selected")) {
					var b = $(".dialog").css("left");
					$(".dialog").css({
						width: "595px",
						left: parseInt(b) - 87.5 + "px"
					}), $(".dialog_wrapper").css({
						width: "575px"
					}), f.addClass("selected"), d.removeClass("selected"), a.getSize()
				}
				c.select()
			}), g.click(function() {
				e.Dialog.dialogFor(a).close_()
			}), b.parents(".dialog_wrapper").append(g)
		},
		getSize: function() {
			var a = this.$("#@preview_wrapper");
			this.height = Math.round(a.height() + this.heightBorder), this.width = Math.round(a.width() + this.widthBorder), this.updateCode(this.width, this.height)
		},
		updateCode: function(a, b) {
			this.serverCall("get_widget_code").kwargs({
				width: a,
				height: b
			}).success(this.fnbind(function(a) {
				this.$("#@code").text(a).select()
			})).send()
		}
	}), a.QuoteCaptionEditBase = Component.extend({
		onLoad: function() {
			this.$("#@save_button").click(this.fnbind(function() {
				var a = this.$("#@description").val();
				return a = a ? $.trim(a) : "", this.serverCall("save").kwargs({
					quote_id: this.quote_id,
					quote_id_hash: this.quote_id_hash,
					description: a
				}).liveMutate().success(this.fnbind(function() {
					this.close_dialog && e.Dialog.dialogFor(this).close_()
				})).send(), !1
			}))
		}
	})
}), require.install("app/view/content_views", function(require, a, b) {
	a.UserContentAggregatedViewsSection = Component.extend({
		onLoad: function() {
			this.$("%@month_link").click(this.fnbind(function(a) {
				var b = $(a.target).attr("index");
				return this.lookup("user_content_views_main").loadAggregatedSectionAtIndex(b), !1
			}))
		}
	})
}), require.install("app/view/funnel", function(require, a, b) {
	var c = require("w2.quora").Component,
		d = require("cookies").cookie,
		e = require("keystrokes"),
		f;
	a.FunnelState = c.extend({
		onLoad: function() {
			var a = this;
			a.$("#@show_unstarted").click(function() {
				a.$("#@unstarted").show(), a.$("#@show_unstarted").hide()
			}), a.$("#@refresh").click(function() {
				location.reload()
			})
		}
	}), a.ResetFunnelLink = c.extend({
		onLoad: function() {
			var a = this;
			a.$("#@reset").click(function() {
				a.serverCall("reset_funnel").success(function() {
					location.reload()
				}).send()
			})
		}
	}), a.ActivateFunnelLink = c.extend({
		onLoad: function() {
			var a = this;
			a.$("#@activate").click(function() {
				a.serverCall("activate_funnel").liveMutate().send()
			})
		}
	}), e.on([70, 48, 70, 48], function() {
		f && f.toggle()
	}), a.FunnelRideAlong = c.extend({
		onLoad: function() {
			var a = this,
				b;
			f = a, a.$("#@wrapper").hover(function() {
				b = clearTimeout(b), a.hovering = !0, a.slideIn()
			}, function() {
				b = setTimeout(function() {
					a.hovering = !1, a.slideOut()
				}, 500)
			})
		},
		toggle: function() {
			this.$("#@wrapper").hasClass("hidden") ? this.turnOn() : this.turnOff()
		},
		turnOn: function() {
			this.$("#@wrapper").removeClass("hidden"), d("funnelRideAlongOnByDefault", "1")
		},
		turnOff: function() {
			this.$("#@wrapper").addClass("hidden"), d("funnelRideAlongOnByDefault", null)
		},
		slideOut: function() {
			if(!this.hovering) {
				var a = this.$("#@wrapper"),
					b = parseInt(a.css("padding"));
				a.animate({
					right: b - a.width() + 50 + "px"
				})
			}
		},
		slideIn: function() {
			this.$("#@wrapper").animate({
				right: "0px"
			})
		}
	})
}), require.install("app/view/top_writers", function(require, a, b) {
	var c = require("w2.quora").Component;
	a.TopWritersSignup = c.extend({
		onLoad: function() {
			this.$("#@top_writers_signup").click(this.fnbind(function() {
				var a = this.$("#@mailing_address").val(),
					b = this.$("#@email_address").val(),
					c = this.$("#@tshirt_size").val(),
					d = this.$("#@tshirt_color").val();
				return this.serverCall("top_writer_signup").kwargs({
					mailing_address: a,
					email_address: b,
					tshirt_size: c,
					tshirt_color: d
				}).send(), !1
			}))
		}
	})
}), require.enqueue(function(require) {
	require("json2"), require("assert"), require("jquery"), require("jquery.securepost"), require("jquery.cookie"), require("jquery.dialog"), require("jquery.tooltip"), require("jquery.menu"), require("jquery.topic"), require("jquery.viewport"), require("Class"), require("jquery.ajax"), require("effects.core"), require("effects.shake"), require("effects.highlight"), require("jquery.webnode2"), require("jquery.quora"), require("w2.dialog"), require("w2.inputvalidate"), require("w2.rpc"), require("w2.interaction"), require("tchannel_up"), require("Quora"), require("facebook"), require("twitter"), require("login"), require("window_manager"), require("dialog"), require("qtexteditor"), require("typeahead"), require("mobile"), require("flash"), require("presence"), require("query_eval"), !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0
});
rec('package', 'main.js', 'finish');