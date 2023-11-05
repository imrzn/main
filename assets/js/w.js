! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
	"use strict";
	var t = [],
		r = Object.getPrototypeOf,
		s = t.slice,
		g = t.flat ? function(e) {
			return t.flat.call(e)
		} : function(e) {
			return t.concat.apply([], e)
		},
		u = t.push,
		i = t.indexOf,
		n = {},
		o = n.toString,
		v = n.hasOwnProperty,
		a = v.toString,
		l = a.call(Object),
		y = {},
		m = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
		},
		x = function(e) {
			return null != e && e === e.window
		},
		E = C.document,
		c = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function b(e, t, n) {
		var r, i, o = (n = n || E).createElement("script");
		if (o.text = e, t)
			for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o)
	}

	function w(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
	}
	var f = "3.6.0",
		S = function(e, t) {
			return new S.fn.init(e, t)
		};

	function p(e) {
		var t = !!e && "length" in e && e.length,
			n = w(e);
		return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	S.fn = S.prototype = {
		jquery: f,
		constructor: S,
		length: 0,
		toArray: function() {
			return s.call(this)
		},
		get: function(e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = S.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return S.each(this, e)
		},
		map: function(n) {
			return this.pushStack(S.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(s.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(S.grep(this, function(e, t) {
				return (t + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(S.grep(this, function(e, t) {
				return t % 2
			}))
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: u,
		sort: t.sort,
		splice: t.splice
	}, S.extend = S.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, S.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e, t, n) {
			b(e, {
				nonce: t && t.nonce
			}, n)
		},
		each: function(e, t) {
			var n, r = 0;
			if (p(e)) {
				for (n = e.length; r < n; r++)
					if (!1 === t.call(e[r], r, e[r])) break
			} else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : i.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
			return r
		},
		map: function(e, t, n) {
			var r, i, o = 0,
				a = [];
			if (p(e))
				for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
			else
				for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
			return g(a)
		},
		guid: 1,
		support: y
	}), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var d = function(n) {
		var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
			p = n.document,
			k = 0,
			r = 0,
			m = ue(),
			x = ue(),
			A = ue(),
			N = ue(),
			j = function(e, t) {
				return e === t && (l = !0), 0
			},
			D = {}.hasOwnProperty,
			t = [],
			q = t.pop,
			L = t.push,
			H = t.push,
			O = t.slice,
			P = function(e, t) {
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			M = "[\\x20\\t\\r\\n\\f]",
			I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
			F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
			B = new RegExp(M + "+", "g"),
			$ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
			_ = new RegExp("^" + M + "*," + M + "*"),
			z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
			U = new RegExp(M + "|>"),
			X = new RegExp(F),
			V = new RegExp("^" + I + "$"),
			G = {
				ID: new RegExp("^#(" + I + ")"),
				CLASS: new RegExp("^\\.(" + I + ")"),
				TAG: new RegExp("^(" + I + "|[*])"),
				ATTR: new RegExp("^" + W),
				PSEUDO: new RegExp("^" + F),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + R + ")$", "i"),
				needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /HTML$/i,
			Q = /^(?:input|select|textarea|button)$/i,
			J = /^h\d$/i,
			K = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ee = /[+~]/,
			te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
			ne = function(e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
			},
			re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ie = function(e, t) {
				return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			oe = function() {
				T()
			},
			ae = be(function(e) {
				return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
		} catch (e) {
			H = {
				apply: t.length ? function(e, t) {
					L.apply(e, O.call(t))
				} : function(e, t) {
					var n = e.length,
						r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}

		function se(t, e, n, r) {
			var i, o, a, s, u, l, c, f = e && e.ownerDocument,
				p = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
			if (!r && (T(e), e = e || C, E)) {
				if (11 !== p && (u = Z.exec(t)))
					if (i = u[1]) {
						if (9 === p) {
							if (!(a = e.getElementById(i))) return n;
							if (a.id === i) return n.push(a), n
						} else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
					} else {
						if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
						if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
					} if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
					if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
						(f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
						while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
						c = l.join(",")
					}
					try {
						return H.apply(n, f.querySelectorAll(c)), n
					} catch (e) {
						N(t, !0)
					} finally {
						s === S && e.removeAttribute("id")
					}
				}
			}
			return g(t.replace($, "$1"), e, n, r)
		}

		function ue() {
			var r = [];
			return function e(t, n) {
				return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
			}
		}

		function le(e) {
			return e[S] = !0, e
		}

		function ce(e) {
			var t = C.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function fe(e, t) {
			var n = e.split("|"),
				r = n.length;
			while (r--) b.attrHandle[n[r]] = t
		}

		function pe(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n)
				while (n = n.nextSibling)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function de(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function he(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function ge(t) {
			return function(e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function ve(a) {
			return le(function(o) {
				return o = +o, le(function(e, t) {
					var n, r = a([], e.length, o),
						i = r.length;
					while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function ye(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}
		for (e in d = se.support = {}, i = se.isXML = function(e) {
				var t = e && e.namespaceURI,
					n = e && (e.ownerDocument || e).documentElement;
				return !Y.test(t || n && n.nodeName || "HTML")
			}, T = se.setDocument = function(e) {
				var t, n, r = e ? e.ownerDocument || e : p;
				return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
					return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
				}), d.attributes = ce(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), d.getElementsByTagName = ce(function(e) {
					return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
				}), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
					return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
				}), d.getById ? (b.filter.ID = function(e) {
					var t = e.replace(te, ne);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}, b.find.ID = function(e, t) {
					if ("undefined" != typeof t.getElementById && E) {
						var n = t.getElementById(e);
						return n ? [n] : []
					}
				}) : (b.filter.ID = function(e) {
					var n = e.replace(te, ne);
					return function(e) {
						var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return t && t.value === n
					}
				}, b.find.ID = function(e, t) {
					if ("undefined" != typeof t.getElementById && E) {
						var n, r, i, o = t.getElementById(e);
						if (o) {
							if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
							i = t.getElementsByName(e), r = 0;
							while (o = i[r++])
								if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
						}
						return []
					}
				}), b.find.TAG = d.getElementsByTagName ? function(e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						while (n = o[i++]) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, b.find.CLASS = d.getElementsByClassName && function(e, t) {
					if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
				}, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
					var t;
					a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
				}), ce(function(e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = C.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
				})), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
					d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
				}), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t)
						while (t = t.parentNode)
							if (t === e) return !0;
					return !1
				}, j = t ? function(e, t) {
					if (e === t) return l = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return l = !0, 0;
					var n, r = 0,
						i = e.parentNode,
						o = t.parentNode,
						a = [e],
						s = [t];
					if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
					if (i === o) return pe(e, t);
					n = e;
					while (n = n.parentNode) a.unshift(n);
					n = t;
					while (n = n.parentNode) s.unshift(n);
					while (a[r] === s[r]) r++;
					return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
				}), C
			}, se.matches = function(e, t) {
				return se(e, null, null, t)
			}, se.matchesSelector = function(e, t) {
				if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
					var n = c.call(e, t);
					if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {
					N(t, !0)
				}
				return 0 < se(t, C, null, [e]).length
			}, se.contains = function(e, t) {
				return (e.ownerDocument || e) != C && T(e), y(e, t)
			}, se.attr = function(e, t) {
				(e.ownerDocument || e) != C && T(e);
				var n = b.attrHandle[t.toLowerCase()],
					r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
				return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}, se.escape = function(e) {
				return (e + "").replace(re, ie)
			}, se.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, se.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
					while (t = e[i++]) t === e[i] && (r = n.push(i));
					while (r--) e.splice(n[r], 1)
				}
				return u = null, e
			}, o = se.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					while (t = e[r++]) n += o(t);
				return n
			}, (b = se.selectors = {
				cacheLength: 50,
				createPseudo: le,
				match: G,
				attrHandle: {},
				find: {},
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
					ATTR: function(e) {
						return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(te, ne).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = m[e + " "];
						return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(n, r, i) {
						return function(e) {
							var t = se.attr(e, n);
							return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(h, e, t, g, v) {
						var y = "nth" !== h.slice(0, 3),
							m = "last" !== h.slice(-4),
							x = "of-type" === e;
						return 1 === g && 0 === v ? function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
								c = e.parentNode,
								f = x && e.nodeName.toLowerCase(),
								p = !n && !x,
								d = !1;
							if (c) {
								if (y) {
									while (l) {
										a = e;
										while (a = a[l])
											if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
										u = l = "only" === h && !u && "nextSibling"
									}
									return !0
								}
								if (u = [m ? c.firstChild : c.lastChild], m && p) {
									d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
									while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
										if (1 === a.nodeType && ++d && a === e) {
											i[h] = [k, s, d];
											break
										}
								} else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
									while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
										if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
								return (d -= v) === g || d % g == 0 && 0 <= d / g
							}
						}
					},
					PSEUDO: function(e, o) {
						var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
						return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
							var n, r = a(e, o),
								i = r.length;
							while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
						}) : function(e) {
							return a(e, 0, t)
						}) : a
					}
				},
				pseudos: {
					not: le(function(e) {
						var r = [],
							i = [],
							s = f(e.replace($, "$1"));
						return s[S] ? le(function(e, t, n, r) {
							var i, o = s(e, null, r, []),
								a = e.length;
							while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
						}) : function(e, t, n) {
							return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
						}
					}),
					has: le(function(t) {
						return function(e) {
							return 0 < se(t, e).length
						}
					}),
					contains: le(function(t) {
						return t = t.replace(te, ne),
							function(e) {
								return -1 < (e.textContent || o(e)).indexOf(t)
							}
					}),
					lang: le(function(n) {
						return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
							function(e) {
								var t;
								do {
									if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function(e) {
						return e === a
					},
					focus: function(e) {
						return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: ge(!1),
					disabled: ge(!0),
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !b.pseudos.empty(e)
					},
					header: function(e) {
						return J.test(e.nodeName)
					},
					input: function(e) {
						return Q.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: ve(function() {
						return [0]
					}),
					last: ve(function(e, t) {
						return [t - 1]
					}),
					eq: ve(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: ve(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: ve(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: ve(function(e, t, n) {
						for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
						return e
					}),
					gt: ve(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}).pseudos.nth = b.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) b.pseudos[e] = de(e);
		for (e in {
				submit: !0,
				reset: !0
			}) b.pseudos[e] = he(e);

		function me() {}

		function xe(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function be(s, e, t) {
			var u = e.dir,
				l = e.next,
				c = l || u,
				f = t && "parentNode" === c,
				p = r++;
			return e.first ? function(e, t, n) {
				while (e = e[u])
					if (1 === e.nodeType || f) return s(e, t, n);
				return !1
			} : function(e, t, n) {
				var r, i, o, a = [k, p];
				if (n) {
					while (e = e[u])
						if ((1 === e.nodeType || f) && s(e, t, n)) return !0
				} else
					while (e = e[u])
						if (1 === e.nodeType || f)
							if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
							else {
								if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
								if ((i[c] = a)[2] = s(e, t, n)) return !0
							} return !1
			}
		}

		function we(i) {
			return 1 < i.length ? function(e, t, n) {
				var r = i.length;
				while (r--)
					if (!i[r](e, t, n)) return !1;
				return !0
			} : i[0]
		}

		function Te(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
			return a
		}

		function Ce(d, h, g, v, y, e) {
			return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
				var i, o, a, s = [],
					u = [],
					l = t.length,
					c = e || function(e, t, n) {
						for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
						return n
					}(h || "*", n.nodeType ? [n] : n, []),
					f = !d || !e && h ? c : Te(c, s, d, n, r),
					p = g ? y || (e ? d : l || v) ? [] : t : f;
				if (g && g(f, p, n, r), v) {
					i = Te(p, u), v(i, [], n, r), o = i.length;
					while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
				}
				if (e) {
					if (y || d) {
						if (y) {
							i = [], o = p.length;
							while (o--)(a = p[o]) && i.push(f[o] = a);
							y(null, p = [], i, r)
						}
						o = p.length;
						while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
					}
				} else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
			})
		}

		function Ee(e) {
			for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
					return e === i
				}, a, !0), l = be(function(e) {
					return -1 < P(i, e)
				}, a, !0), c = [function(e, t, n) {
					var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
					return i = null, r
				}]; s < r; s++)
				if (t = b.relative[e[s].type]) c = [be(we(c), t)];
				else {
					if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
						for (n = ++s; n < r; n++)
							if (b.relative[e[n].type]) break;
						return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
					}
					c.push(t)
				} return we(c)
		}
		return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
			var n, r, i, o, a, s, u, l = x[e + " "];
			if (l) return t ? 0 : l.slice(0);
			a = e, s = [], u = b.preFilter;
			while (a) {
				for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace($, " ")
					}), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
					value: n,
					type: o,
					matches: r
				}), a = a.slice(n.length));
				if (!n) break
			}
			return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
		}, f = se.compile = function(e, t) {
			var n, v, y, m, x, r, i = [],
				o = [],
				a = A[e + " "];
			if (!a) {
				t || (t = h(e)), n = t.length;
				while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
				(a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
					var o, a, s, u = 0,
						l = "0",
						c = e && [],
						f = [],
						p = w,
						d = e || x && b.find.TAG("*", i),
						h = k += null == p ? 1 : Math.random() || .1,
						g = d.length;
					for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
						if (x && o) {
							a = 0, t || o.ownerDocument == C || (T(o), n = !E);
							while (s = v[a++])
								if (s(o, t || C, n)) {
									r.push(o);
									break
								} i && (k = h)
						}
						m && ((o = !s && o) && u--, e && c.push(o))
					}
					if (u += l, m && l !== u) {
						a = 0;
						while (s = y[a++]) s(c, f, t, n);
						if (e) {
							if (0 < u)
								while (l--) c[l] || f[l] || (f[l] = q.call(r));
							f = Te(f)
						}
						H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
					}
					return i && (k = h, w = p), c
				}, m ? le(r) : r))).selector = e
			}
			return a
		}, g = se.select = function(e, t, n, r) {
			var i, o, a, s, u, l = "function" == typeof e && e,
				c = !r && h(e = l.selector || e);
			if (n = n || [], 1 === c.length) {
				if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
					if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				i = G.needsContext.test(e) ? 0 : o.length;
				while (i--) {
					if (a = o[i], b.relative[s = a.type]) break;
					if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
						if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
						break
					}
				}
			}
			return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
		}, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
			return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
		}), ce(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || fe("type|href|height|width", function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), d.attributes && ce(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || fe("value", function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ce(function(e) {
			return null == e.getAttribute("disabled")
		}) || fe(R, function(e, t, n) {
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), se
	}(C);
	S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
	var h = function(e, t, n) {
			var r = [],
				i = void 0 !== n;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && S(e).is(n)) break;
					r.push(e)
				} return r
		},
		T = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		k = S.expr.match.needsContext;

	function A(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function j(e, n, r) {
		return m(n) ? S.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== r
		}) : n.nodeType ? S.grep(e, function(e) {
			return e === n !== r
		}) : "string" != typeof n ? S.grep(e, function(e) {
			return -1 < i.call(n, e) !== r
		}) : S.filter(n, e, r)
	}
	S.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, S.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
				for (t = 0; t < r; t++)
					if (S.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
			return 1 < r ? S.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(j(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(j(this, e || [], !0))
		},
		is: function(e) {
			return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
		}
	});
	var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(S.fn.init = function(e, t, n) {
		var r, i;
		if (!e) return this;
		if (n = n || D, "string" == typeof e) {
			if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (r[1]) {
				if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
					for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this
			}
			return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
	}).prototype = S.fn, D = S(E);
	var L = /^(?:parents|prev(?:Until|All))/,
		H = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function O(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	S.fn.extend({
		has: function(e) {
			var t = S(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (S.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && S(e);
			if (!k.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
							o.push(n);
							break
						} return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), S.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return h(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return h(e, "parentNode", n)
		},
		next: function(e) {
			return O(e, "nextSibling")
		},
		prev: function(e) {
			return O(e, "previousSibling")
		},
		nextAll: function(e) {
			return h(e, "nextSibling")
		},
		prevAll: function(e) {
			return h(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return h(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return h(e, "previousSibling", n)
		},
		siblings: function(e) {
			return T((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return T(e.firstChild)
		},
		contents: function(e) {
			return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
		}
	}, function(r, i) {
		S.fn[r] = function(e, t) {
			var n = S.map(this, i, e);
			return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
		}
	});
	var P = /[^\x20\t\r\n\f]+/g;

	function R(e) {
		return e
	}

	function M(e) {
		throw e
	}

	function I(e, t, n, r) {
		var i;
		try {
			e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	S.Callbacks = function(r) {
		var e, n;
		r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
			n[t] = !0
		}), n) : S.extend({}, r);
		var i, t, o, a, s = [],
			u = [],
			l = -1,
			c = function() {
				for (a = a || r.once, o = i = !0; u.length; l = -1) {
					t = u.shift();
					while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
				}
				r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
			},
			f = {
				add: function() {
					return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
						S.each(e, function(e, t) {
							m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
						})
					}(arguments), t && !i && c()), this
				},
				remove: function() {
					return S.each(arguments, function(e, t) {
						var n;
						while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
					}), this
				},
				has: function(e) {
					return e ? -1 < S.inArray(e, s) : 0 < s.length
				},
				empty: function() {
					return s && (s = []), this
				},
				disable: function() {
					return a = u = [], s = t = "", this
				},
				disabled: function() {
					return !s
				},
				lock: function() {
					return a = u = [], t || i || (s = t = ""), this
				},
				locked: function() {
					return !!a
				},
				fireWith: function(e, t) {
					return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return f
	}, S.extend({
		Deferred: function(e) {
			var o = [
					["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
					["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
				],
				i = "pending",
				a = {
					state: function() {
						return i
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					"catch": function(e) {
						return a.then(null, e)
					},
					pipe: function() {
						var i = arguments;
						return S.Deferred(function(r) {
							S.each(o, function(e, t) {
								var n = m(i[t[4]]) && i[t[4]];
								s[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), i = null
						}).promise()
					},
					then: function(t, n, r) {
						var u = 0;

						function l(i, o, a, s) {
							return function() {
								var n = this,
									r = arguments,
									e = function() {
										var e, t;
										if (!(i < u)) {
											if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
											t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
										}
									},
									t = s ? e : function() {
										try {
											e()
										} catch (e) {
											S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
										}
									};
								i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
							}
						}
						return S.Deferred(function(e) {
							o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
						}).promise()
					},
					promise: function(e) {
						return null != e ? S.extend(e, a) : a
					}
				},
				s = {};
			return S.each(o, function(e, t) {
				var n = t[2],
					r = t[5];
				a[t[1]] = n.add, r && n.add(function() {
					i = r
				}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
					return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[t[0] + "With"] = n.fireWith
			}), a.promise(s), e && e.call(s, s), s
		},
		when: function(e) {
			var n = arguments.length,
				t = n,
				r = Array(t),
				i = s.call(arguments),
				o = S.Deferred(),
				a = function(t) {
					return function(e) {
						r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
					}
				};
			if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
			while (t--) I(i[t], a(t), o.reject);
			return o.promise()
		}
	});
	var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	S.Deferred.exceptionHook = function(e, t) {
		C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, S.readyException = function(e) {
		C.setTimeout(function() {
			throw e
		})
	};
	var F = S.Deferred();

	function B() {
		E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
	}
	S.fn.ready = function(e) {
		return F.then(e)["catch"](function(e) {
			S.readyException(e)
		}), this
	}, S.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
		}
	}), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
	var $ = function(e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === w(n))
				for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
			else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
					return l.call(S(e), n)
				})), t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		_ = /^-ms-/,
		z = /-([a-z])/g;

	function U(e, t) {
		return t.toUpperCase()
	}

	function X(e) {
		return e.replace(_, "ms-").replace(z, U)
	}
	var V = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function G() {
		this.expando = S.expando + G.uid++
	}
	G.uid = 1, G.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[X(t)] = n;
			else
				for (r in t) i[X(r)] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
					while (n--) delete r[t[n]]
				}(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !S.isEmptyObject(t)
		}
	};
	var Y = new G,
		Q = new G,
		J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		K = /[A-Z]/g;

	function Z(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
				try {
					n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
				} catch (e) {}
				Q.set(e, t, n)
			} else n = void 0;
		return n
	}
	S.extend({
		hasData: function(e) {
			return Q.hasData(e) || Y.hasData(e)
		},
		data: function(e, t, n) {
			return Q.access(e, t, n)
		},
		removeData: function(e, t) {
			Q.remove(e, t)
		},
		_data: function(e, t, n) {
			return Y.access(e, t, n)
		},
		_removeData: function(e, t) {
			Y.remove(e, t)
		}
	}), S.fn.extend({
		data: function(n, e) {
			var t, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === n) {
				if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
					t = a.length;
					while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
					Y.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof n ? this.each(function() {
				Q.set(this, n)
			}) : $(this, function(e) {
				var t;
				if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
				this.each(function() {
					Q.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				Q.remove(this, e)
			})
		}
	}), S.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = S.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = S._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
				S.dequeue(e, t)
			}, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Y.get(e, n) || Y.access(e, n, {
				empty: S.Callbacks("once memory").add(function() {
					Y.remove(e, [t + "queue", n])
				})
			})
		}
	}), S.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
				var e = S.queue(this, t, n);
				S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				S.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = S.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			"string" != typeof e && (t = e, e = void 0), e = e || "fx";
			while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
		ne = ["Top", "Right", "Bottom", "Left"],
		re = E.documentElement,
		ie = function(e) {
			return S.contains(e.ownerDocument, e)
		},
		oe = {
			composed: !0
		};
	re.getRootNode && (ie = function(e) {
		return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
	});
	var ae = function(e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
	};

	function se(e, t, n, r) {
		var i, o, a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return S.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
		if (c && c[3] !== l) {
			u /= 2, l = l || c[3], c = +u || 1;
			while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c *= 2, S.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}
	var ue = {};

	function le(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
		return e
	}
	S.fn.extend({
		show: function() {
			return le(this, !0)
		},
		hide: function() {
			return le(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				ae(this) ? S(this).show() : S(this).hide()
			})
		}
	});
	var ce, fe, pe = /^(?:checkbox|radio)$/i,
		de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		he = /^$|^module$|\/(?:java|ecma)script/i;
	ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
	var ge = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};

	function ve(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
	}

	function ye(e, t) {
		for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
	}
	ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
	var me = /<|&#?\w+;/;

	function xe(e, t, n, r, i) {
		for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
			if ((o = e[d]) || 0 === o)
				if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
				else if (me.test(o)) {
			a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
			while (c--) a = a.lastChild;
			S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
		} else p.push(t.createTextNode(o));
		f.textContent = "", d = 0;
		while (o = p[d++])
			if (r && -1 < S.inArray(o, r)) i && i.push(o);
			else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
			c = 0;
			while (o = a[c++]) he.test(o.type || "") && n.push(o)
		}
		return f
	}
	var be = /^([^.]*)(?:\.(.+)|)/;

	function we() {
		return !0
	}

	function Te() {
		return !1
	}

	function Ce(e, t) {
		return e === function() {
			try {
				return E.activeElement
			} catch (e) {}
		}() == ("focus" === t)
	}

	function Ee(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
		else if (!i) return e;
		return 1 === o && (a = i, (i = function(e) {
			return S().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
			S.event.add(this, t, i, r, n)
		})
	}

	function Se(e, i, o) {
		o ? (Y.set(e, i, !1), S.event.add(e, i, {
			namespace: !1,
			handler: function(e) {
				var t, n, r = Y.get(this, i);
				if (1 & e.isTrigger && this[i]) {
					if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
					else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
				} else r.length && (Y.set(this, i, {
					value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
				}), e.stopImmediatePropagation())
			}
		})) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
	}
	S.event = {
		global: {},
		add: function(t, e, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
			if (V(t)) {
				n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
					return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
				}), l = (e = (e || "").match(P) || [""]).length;
				while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
					type: d,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && S.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
			if (v && (u = v.events)) {
				l = (t = (t || "").match(P) || [""]).length;
				while (l--)
					if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
						f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
						while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
					} else
						for (d in u) S.event.remove(e, d + t[l], n, r, !0);
				S.isEmptyObject(u) && Y.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, r, i, o, a, s = new Array(arguments.length),
				u = S.event.fix(e),
				l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
				c = S.event.special[u.type] || {};
			for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
				a = S.event.handlers.call(this, u, l), t = 0;
				while ((i = a[t++]) && !u.isPropagationStopped()) {
					u.currentTarget = i.elem, n = 0;
					while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, u), u.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
						for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
						o.length && s.push({
							elem: l,
							handlers: o
						})
					} return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function(t, e) {
			Object.defineProperty(S.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: m(e) ? function() {
					if (this.originalEvent) return e(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function(e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(e) {
			return e[S.expando] ? e : new S.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
				},
				trigger: function(e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
				},
				_default: function(e) {
					var t = e.target;
					return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, S.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, S.Event = function(e, t) {
		if (!(this instanceof S.Event)) return new S.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
	}, S.Event.prototype = {
		constructor: S.Event,
		isDefaultPrevented: Te,
		isPropagationStopped: Te,
		isImmediatePropagationStopped: Te,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, S.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: !0
	}, S.event.addProp), S.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		S.event.special[e] = {
			setup: function() {
				return Se(this, e, Ce), !1
			},
			trigger: function() {
				return Se(this, e), !0
			},
			_default: function() {
				return !0
			},
			delegateType: t
		}
	}), S.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, i) {
		S.event.special[e] = {
			delegateType: i,
			bindType: i,
			handle: function(e) {
				var t, n = e.relatedTarget,
					r = e.handleObj;
				return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
			}
		}
	}), S.fn.extend({
		on: function(e, t, n, r) {
			return Ee(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return Ee(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
				S.event.remove(this, e, n, t)
			})
		}
	});
	var ke = /<script|<style|<link/i,
		Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function je(e, t) {
		return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
	}

	function De(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function qe(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Le(e, t) {
		var n, r, i, o, a, s;
		if (1 === t.nodeType) {
			if (Y.hasData(e) && (s = Y.get(e).events))
				for (i in Y.remove(t, "handle events"), s)
					for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
			Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
		}
	}

	function He(n, r, i, o) {
		r = g(r);
		var e, t, a, s, u, l, c = 0,
			f = n.length,
			p = f - 1,
			d = r[0],
			h = m(d);
		if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function(e) {
			var t = n.eq(e);
			h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
		});
		if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
			if (s)
				for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
					nonce: u.nonce || u.getAttribute("nonce")
				}, l) : b(u.textContent.replace(Ne, ""), u, l))
		}
		return n
	}

	function Oe(e, t, n) {
		for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
		return e
	}
	S.extend({
		htmlPrefilter: function(e) {
			return e
		},
		clone: function(e, t, n) {
			var r, i, o, a, s, u, l, c = e.cloneNode(!0),
				f = ie(e);
			if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
				for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
				else Le(e, c);
			return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
		},
		cleanData: function(e) {
			for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (V(n)) {
					if (t = n[Y.expando]) {
						if (t.events)
							for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
						n[Y.expando] = void 0
					}
					n[Q.expando] && (n[Q.expando] = void 0)
				}
		}
	}), S.fn.extend({
		detach: function(e) {
			return Oe(this, e, !0)
		},
		remove: function(e) {
			return Oe(this, e)
		},
		text: function(e) {
			return $(this, function(e) {
				return void 0 === e ? S.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return He(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return He(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = je(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return He(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return He(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return S.clone(this, e, t)
			})
		},
		html: function(e) {
			return $(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = S.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return He(this, arguments, function(e) {
				var t = this.parentNode;
				S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), S.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, a) {
		S.fn[e] = function(e) {
			for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
		Re = function(e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = C), t.getComputedStyle(e)
		},
		Me = function(e, t, n) {
			var r, i, o = {};
			for (i in t) o[i] = e.style[i], e.style[i] = t[i];
			for (i in r = n.call(e), t) e.style[i] = o[i];
			return r
		},
		Ie = new RegExp(ne.join("|"), "i");

	function We(e, t, n) {
		var r, i, o, a, s = e.style;
		return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function Fe(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		function e() {
			if (l) {
				u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
				var e = C.getComputedStyle(l);
				n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
			}
		}

		function t(e) {
			return Math.round(parseFloat(e))
		}
		var n, r, i, o, a, s, u = E.createElement("div"),
			l = E.createElement("div");
		l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
			boxSizingReliable: function() {
				return e(), r
			},
			pixelBoxStyles: function() {
				return e(), o
			},
			pixelPosition: function() {
				return e(), n
			},
			reliableMarginLeft: function() {
				return e(), s
			},
			scrollboxSize: function() {
				return e(), i
			},
			reliableTrDimensions: function() {
				var e, t, n, r;
				return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
			}
		}))
	}();
	var Be = ["Webkit", "Moz", "ms"],
		$e = E.createElement("div").style,
		_e = {};

	function ze(e) {
		var t = S.cssProps[e] || _e[e];
		return t || (e in $e ? e : _e[e] = function(e) {
			var t = e[0].toUpperCase() + e.slice(1),
				n = Be.length;
			while (n--)
				if ((e = Be[n] + t) in $e) return e
		}(e) || e)
	}
	var Ue = /^(none|table(?!-c[ea]).+)/,
		Xe = /^--/,
		Ve = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ge = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function Ye(e, t, n) {
		var r = te.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function Qe(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
		return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
	}

	function Je(e, t, n) {
		var r = Re(e),
			i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
			o = i,
			a = We(e, t, r),
			s = "offset" + t[0].toUpperCase() + t.slice(1);
		if (Pe.test(a)) {
			if (!n) return a;
			a = "auto"
		}
		return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
	}

	function Ke(e, t, n, r, i) {
		return new Ke.prototype.init(e, t, n, r, i)
	}
	S.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = We(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = X(t),
					u = Xe.test(t),
					l = e.style;
				if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
				"string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
			}
		},
		css: function(e, t, n, r) {
			var i, o, a, s = X(t);
			return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), S.each(["height", "width"], function(e, u) {
		S.cssHooks[u] = {
			get: function(e, t, n) {
				if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
					return Je(e, u, n)
				})
			},
			set: function(e, t, n) {
				var r, i = Re(e),
					o = !y.scrollboxSize() && "absolute" === i.position,
					a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
					s = n ? Qe(e, u, n, a, i) : 0;
				return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
			}
		}
	}), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), S.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(i, o) {
		S.cssHooks[i + o] = {
			expand: function(e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
				return n
			}
		}, "margin" !== i && (S.cssHooks[i + o].set = Ye)
	}), S.fn.extend({
		css: function(e, t) {
			return $(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (Array.isArray(t)) {
					for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((S.Tween = Ke).prototype = {
		constructor: Ke,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = Ke.propHooks[this.prop];
			return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = Ke.propHooks[this.prop];
			return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
		}
	}).init.prototype = Ke.prototype, (Ke.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(e) {
				S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = Ke.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, S.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, S.fx = Ke.prototype.init, S.fx.step = {};
	var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
		it = /queueHooks$/;

	function ot() {
		et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
	}

	function at() {
		return C.setTimeout(function() {
			Ze = void 0
		}), Ze = Date.now()
	}

	function st(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function ut(e, t, n) {
		for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function lt(o, e, t) {
		var n, a, r = 0,
			i = lt.prefilters.length,
			s = S.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (a) return !1;
				for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
				return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
			},
			l = s.promise({
				elem: o,
				props: S.extend({}, e),
				opts: S.extend(!0, {
					specialEasing: {},
					easing: S.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: Ze || at(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
					return l.tweens.push(n), n
				},
				stop: function(e) {
					var t = 0,
						n = e ? l.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) l.tweens[t].run(1);
					return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
				}
			}),
			c = l.props;
		for (! function(e, t) {
				var n, r, i, o, a;
				for (n in e)
					if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
						for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
					else t[r] = i
			}(c, l.opts.specialEasing); r < i; r++)
			if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
		return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
			elem: o,
			anim: l,
			queue: l.opts.queue
		})), l
	}
	S.Animation = S.extend(lt, {
		tweeners: {
			"*": [function(e, t) {
				var n = this.createTween(e, t);
				return se(n.elem, e, te.exec(t), n), n
			}]
		},
		tweener: function(e, t) {
			m(e) ? (t = e, e = ["*"]) : e = e.match(P);
			for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
		},
		prefilters: [function(e, t, n) {
			var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
				p = this,
				d = {},
				h = e.style,
				g = e.nodeType && ae(e),
				v = Y.get(e, "fxshow");
			for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
					a.unqueued || s()
				}), a.unqueued++, p.always(function() {
					p.always(function() {
						a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
					})
				})), t)
				if (i = t[r], rt.test(i)) {
					if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
						if ("show" !== i || !v || void 0 === v[r]) continue;
						g = !0
					}
					d[r] = v && v[r] || S.style(e, r)
				} if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
				for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
						h.display = l
					}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
						h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
					})), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
					display: l
				}), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
					for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
				})), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
		}],
		prefilter: function(e, t) {
			t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
		}
	}), S.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? S.extend({}, e) : {
			complete: n || !n && t || m(e) && e,
			duration: e,
			easing: n && t || t && !m(t) && t
		};
		return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
		}, r
	}, S.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(ae).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(t, e, n, r) {
			var i = S.isEmptyObject(t),
				o = S.speed(e, n, r),
				a = function() {
					var e = lt(this, S.extend({}, t), o);
					(i || Y.get(this, "finish")) && e.stop(!0)
				};
			return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(i, e, o) {
			var a = function(e) {
				var t = e.stop;
				delete e.stop, t(o)
			};
			return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
				var e = !0,
					t = null != i && i + "queueHooks",
					n = S.timers,
					r = Y.get(this);
				if (t) r[t] && r[t].stop && a(r[t]);
				else
					for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
				!e && o || S.dequeue(this, i)
			})
		},
		finish: function(a) {
			return !1 !== a && (a = a || "fx"), this.each(function() {
				var e, t = Y.get(this),
					n = t[a + "queue"],
					r = t[a + "queueHooks"],
					i = S.timers,
					o = n ? n.length : 0;
				for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
				for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), S.each(["toggle", "show", "hide"], function(e, r) {
		var i = S.fn[r];
		S.fn[r] = function(e, t, n) {
			return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
		}
	}), S.each({
		slideDown: st("show"),
		slideUp: st("hide"),
		slideToggle: st("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, r) {
		S.fn[e] = function(e, t, n) {
			return this.animate(r, e, t, n)
		}
	}), S.timers = [], S.fx.tick = function() {
		var e, t = 0,
			n = S.timers;
		for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || S.fx.stop(), Ze = void 0
	}, S.fx.timer = function(e) {
		S.timers.push(e), S.fx.start()
	}, S.fx.interval = 13, S.fx.start = function() {
		et || (et = !0, ot())
	}, S.fx.stop = function() {
		et = null
	}, S.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, S.fn.delay = function(r, e) {
		return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
			var n = C.setTimeout(e, r);
			t.stop = function() {
				C.clearTimeout(n)
			}
		})
	}, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
	var ct, ft = S.expr.attrHandle;
	S.fn.extend({
		attr: function(e, t) {
			return $(this, S.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				S.removeAttr(this, e)
			})
		}
	}), S.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!y.radioValue && "radio" === t && A(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				i = t && t.match(P);
			if (i && 1 === e.nodeType)
				while (n = i[r++]) e.removeAttribute(n)
		}
	}), ct = {
		set: function(e, t, n) {
			return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var a = ft[t] || S.find.attr;
		ft[t] = function(e, t, n) {
			var r, i, o = t.toLowerCase();
			return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
		}
	});
	var pt = /^(?:input|select|textarea|button)$/i,
		dt = /^(?:a|area)$/i;

	function ht(e) {
		return (e.match(P) || []).join(" ")
	}

	function gt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function vt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
	}
	S.fn.extend({
		prop: function(e, t) {
			return $(this, S.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[S.propFix[e] || e]
			})
		}
	}), S.extend({
		prop: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = S.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), y.optSelected || (S.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		S.propFix[this.toLowerCase()] = this
	}), S.fn.extend({
		addClass: function(t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function(e) {
				S(this).addClass(t.call(this, e, gt(this)))
			});
			if ((e = vt(t)).length)
				while (n = this[u++])
					if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
						a = 0;
						while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						i !== (s = ht(r)) && n.setAttribute("class", s)
					} return this
		},
		removeClass: function(t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function(e) {
				S(this).removeClass(t.call(this, e, gt(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((e = vt(t)).length)
				while (n = this[u++])
					if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
						a = 0;
						while (o = e[a++])
							while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
						i !== (s = ht(r)) && n.setAttribute("class", s)
					} return this
		},
		toggleClass: function(i, t) {
			var o = typeof i,
				a = "string" === o || Array.isArray(i);
			return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
				S(this).toggleClass(i.call(this, e, gt(this), t), t)
			}) : this.each(function() {
				var e, t, n, r;
				if (a) {
					t = 0, n = S(this), r = vt(i);
					while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
				} else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n, r = 0;
			t = " " + e + " ";
			while (n = this[r++])
				if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var yt = /\r/g;
	S.fn.extend({
		val: function(n) {
			var r, e, i, t = this[0];
			return arguments.length ? (i = m(n), this.each(function(e) {
				var t;
				1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
					return null == e ? "" : e + ""
				})), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
			})) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
		}
	}), S.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = S.find.attr(e, "value");
					return null != t ? t : ht(S.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r, i = e.options,
						o = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						u = a ? o + 1 : i.length;
					for (r = o < 0 ? u : a ? o : 0; r < u; r++)
						if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
							if (t = S(n).val(), a) return t;
							s.push(t)
						} return s
				},
				set: function(e, t) {
					var n, r, i = e.options,
						o = S.makeArray(t),
						a = i.length;
					while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), S.each(["radio", "checkbox"], function() {
		S.valHooks[this] = {
			set: function(e, t) {
				if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
			}
		}, y.checkOn || (S.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), y.focusin = "onfocusin" in C;
	var mt = /^(?:focusinfocus|focusoutblur)$/,
		xt = function(e) {
			e.stopPropagation()
		};
	S.extend(S.event, {
		trigger: function(e, t, n, r) {
			var i, o, a, s, u, l, c, f, p = [n || E],
				d = v.call(e, "type") ? e.type : e,
				h = v.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
				if (!r && !c.noBubble && !x(n)) {
					for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
					a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
				}
				i = 0;
				while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
			}
		},
		simulate: function(e, t, n) {
			var r = S.extend(new S.Event, n, {
				type: e,
				isSimulated: !0
			});
			S.event.trigger(r, null, t)
		}
	}), S.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				S.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return S.event.trigger(e, t, n, !0)
		}
	}), y.focusin || S.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, r) {
		var i = function(e) {
			S.event.simulate(r, e.target, S.event.fix(e))
		};
		S.event.special[r] = {
			setup: function() {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, r);
				t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, r) - 1;
				t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
			}
		}
	});
	var bt = C.location,
		wt = {
			guid: Date.now()
		},
		Tt = /\?/;
	S.parseXML = function(e) {
		var t, n;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new C.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {}
		return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
			return e.textContent
		}).join("\n") : e)), t
	};
	var Ct = /\[\]$/,
		Et = /\r?\n/g,
		St = /^(?:submit|button|image|reset|file)$/i,
		kt = /^(?:input|select|textarea|keygen)/i;

	function At(n, e, r, i) {
		var t;
		if (Array.isArray(e)) S.each(e, function(e, t) {
			r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
		});
		else if (r || "object" !== w(e)) i(n, e);
		else
			for (t in e) At(n + "[" + t + "]", e[t], r, i)
	}
	S.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				var n = m(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (null == e) return "";
		if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) At(n, e[n], t, i);
		return r.join("&")
	}, S.fn.extend({
		serialize: function() {
			return S.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = S.prop(this, "elements");
				return e ? S.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
			}).map(function(e, t) {
				var n = S(this).val();
				return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Et, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Et, "\r\n")
				}
			}).get()
		}
	});
	var Nt = /%20/g,
		jt = /#.*$/,
		Dt = /([?&])_=[^&]*/,
		qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Lt = /^(?:GET|HEAD)$/,
		Ht = /^\/\
		Ot = {},
		Pt = {},
		Rt = "*/".concat("*"),
		Mt = E.createElement("a");

	function It(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0,
				i = e.toLowerCase().match(P) || [];
			if (m(t))
				while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
		}
	}

	function Wt(t, i, o, a) {
		var s = {},
			u = t === Pt;

		function l(e) {
			var r;
			return s[e] = !0, S.each(t[e] || [], function(e, t) {
				var n = t(i, o, a);
				return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
			}), r
		}
		return l(i.dataTypes[0]) || !s["*"] && l("*")
	}

	function Ft(e, t) {
		var n, r, i = S.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && S.extend(!0, e, r), e
	}
	Mt.href = bt.href, S.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: bt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Rt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": S.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
		},
		ajaxPrefilter: It(Ot),
		ajaxTransport: It(Pt),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
				y = v.context || v,
				m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
				x = S.Deferred(),
				b = S.Callbacks("once memory"),
				w = v.statusCode || {},
				a = {},
				s = {},
				u = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (h) {
							if (!n) {
								n = {};
								while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
							}
							t = n[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return h ? p : null
					},
					setRequestHeader: function(e, t) {
						return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == h && (v.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (h) T.always(e[T.status]);
							else
								for (t in e) w[t] = [w[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || u;
						return c && c.abort(t), l(0, t), this
					}
				};
			if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
				r = E.createElement("a");
				try {
					r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
				} catch (e) {
					v.crossDomain = !0
				}
			}
			if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
			for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
			if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
			if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
				if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
				v.async && 0 < v.timeout && (d = C.setTimeout(function() {
					T.abort("timeout")
				}, v.timeout));
				try {
					h = !1, c.send(a, l)
				} catch (e) {
					if (h) throw e;
					l(-1, e)
				}
			} else l(-1, "No Transport");

			function l(e, t, n, r) {
				var i, o, a, s, u, l = t;
				h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
					var r, i, o, a, s = e.contents,
						u = e.dataTypes;
					while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
					if (r)
						for (i in s)
							if (s[i] && s[i].test(r)) {
								u.unshift(i);
								break
							} if (u[0] in n) o = u[0];
					else {
						for (i in n) {
							if (!u[0] || e.converters[i + " " + u[0]]) {
								o = i;
								break
							}
							a || (a = i)
						}
						o = o || a
					}
					if (o) return o !== u[0] && u.unshift(o), n[o]
				}(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
					var i, o, a, s, u, l = {},
						c = e.dataTypes.slice();
					if (c[1])
						for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
					o = c.shift();
					while (o)
						if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
							if ("*" === o) o = u;
							else if ("*" !== u && u !== o) {
						if (!(a = l[u + " " + o] || l["* " + o]))
							for (i in l)
								if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
									!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
									break
								} if (!0 !== a)
							if (a && e["throws"]) t = a(t);
							else try {
								t = a(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: a ? e : "No conversion from " + u + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
			}
			return T
		},
		getJSON: function(e, t, n) {
			return S.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return S.get(e, void 0, t, "script")
		}
	}), S.each(["get", "post"], function(e, i) {
		S[i] = function(e, t, n, r) {
			return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			}, S.isPlainObject(e) && e))
		}
	}), S.ajaxPrefilter(function(e) {
		var t;
		for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	}), S._evalUrl = function(e, t, n) {
		return S.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				S.globalEval(e, t, n)
			}
		})
	}, S.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				var e = this;
				while (e.firstElementChild) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(n) {
			return m(n) ? this.each(function(e) {
				S(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = S(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = m(t);
			return this.each(function(e) {
				S(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				S(this).replaceWith(this.childNodes)
			}), this
		}
	}), S.expr.pseudos.hidden = function(e) {
		return !S.expr.pseudos.visible(e)
	}, S.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, S.ajaxSettings.xhr = function() {
		try {
			return new C.XMLHttpRequest
		} catch (e) {}
	};
	var Bt = {
			0: 200,
			1223: 204
		},
		$t = S.ajaxSettings.xhr();
	y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i) {
		var o, a;
		if (y.cors || $t && !i.crossDomain) return {
			send: function(e, t) {
				var n, r = i.xhr();
				if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
					for (n in i.xhrFields) r[n] = i.xhrFields[n];
				for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
				o = function(e) {
					return function() {
						o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
							binary: r.response
						} : {
							text: r.responseText
						}, r.getAllResponseHeaders()))
					}
				}, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
					4 === r.readyState && C.setTimeout(function() {
						o && a()
					})
				}, o = o("abort");
				try {
					r.send(i.hasContent && i.data || null)
				} catch (e) {
					if (o) throw e
				}
			},
			abort: function() {
				o && o()
			}
		}
	}), S.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), S.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return S.globalEval(e), e
			}
		}
	}), S.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), S.ajaxTransport("script", function(n) {
		var r, i;
		if (n.crossDomain || n.scriptAttrs) return {
			send: function(e, t) {
				r = S("<script>").attr(n.scriptAttrs || {}).prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", i = function(e) {
					r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), E.head.appendChild(r[0])
			},
			abort: function() {
				i && i()
			}
		}
	});
	var _t, zt = [],
		Ut = /(=)\?(?=&|$)|\?\?/;
	S.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = zt.pop() || S.expando + "_" + wt.guid++;
			return this[e] = !0, e
		}
	}), S.ajaxPrefilter("json jsonp", function(e, t, n) {
		var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
			return o || S.error(r + " was not called"), o[0]
		}, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
			o = arguments
		}, n.always(function() {
			void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
		}), "script"
	}), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
		var r, i, o
	}, S.fn.load = function(e, t, n) {
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, S.expr.pseudos.animated = function(t) {
		return S.grep(S.timers, function(e) {
			return t === e.elem
		}).length
	}, S.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, u, l = S.css(e, "position"),
				c = S(e),
				f = {};
			"static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
		}
	}, S.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				S.offset.setOffset(this, t, e)
			});
			var e, n, r = this[0];
			return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: e.top + n.pageYOffset,
				left: e.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
				else {
					t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
					while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - S.css(r, "marginTop", !0),
					left: t.left - i.left - S.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent;
				while (e && "static" === S.css(e, "position")) e = e.offsetParent;
				return e || re
			})
		}
	}), S.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, i) {
		var o = "pageYOffset" === i;
		S.fn[t] = function(e) {
			return $(this, function(e, t, n) {
				var r;
				if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
				r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
			}, t, e, arguments.length)
		}
	}), S.each(["top", "left"], function(e, n) {
		S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
			if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
		})
	}), S.each({
		Height: "height",
		Width: "width"
	}, function(a, s) {
		S.each({
			padding: "inner" + a,
			content: s,
			"": "outer" + a
		}, function(r, o) {
			S.fn[o] = function(e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
					i = r || (!0 === e || !0 === t ? "margin" : "border");
				return $(this, function(e, t, n) {
					var r;
					return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
				}, s, n ? e : void 0, n)
			}
		})
	}), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		S.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), S.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
		S.fn[n] = function(e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	});
	var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	S.proxy = function(e, t) {
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
			return e.apply(t || this, r.concat(s.call(arguments)))
		}).guid = e.guid = e.guid || S.guid++, i
	}, S.holdReady = function(e) {
		e ? S.readyWait++ : S.ready(!0)
	}, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
		var t = S.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, S.trim = function(e) {
		return null == e ? "" : (e + "").replace(Xt, "")
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return S
	});
	var Vt = C.jQuery,
		Gt = C.$;
	return S.noConflict = function(e) {
		return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
	}, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});

! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
	"use strict";
	const t = t => {
			do {
				t += Math.floor(1e6 * Math.random())
			} while (document.getElementById(t));
			return t
		},
		e = t => {
			let e = t.getAttribute("data-bs-target");
			if (!e || "#" === e) {
				let i = t.getAttribute("href");
				if (!i || !i.includes("#") && !i.startsWith(".")) return null;
				i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]), e = i && "#" !== i ? i.trim() : null
			}
			return e
		},
		i = t => {
			const i = e(t);
			return i && document.querySelector(i) ? i : null
		},
		s = t => {
			const i = e(t);
			return i ? document.querySelector(i) : null
		},
		n = t => {
			if (!t) return 0;
			let {
				transitionDuration: e,
				transitionDelay: i
			} = window.getComputedStyle(t);
			const s = Number.parseFloat(e),
				n = Number.parseFloat(i);
			return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
		},
		o = t => {
			t.dispatchEvent(new Event("transitionend"))
		},
		r = t => (t[0] || t).nodeType,
		a = (t, e) => {
			let i = !1;
			const s = e + 5;
			t.addEventListener("transitionend", (function e() {
				i = !0, t.removeEventListener("transitionend", e)
			})), setTimeout(() => {
				i || o(t)
			}, s)
		},
		l = (t, e, i) => {
			Object.keys(i).forEach(s => {
				const n = i[s],
					o = e[s],
					a = o && r(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
				var l;
				if (!new RegExp(n).test(a)) throw new TypeError(t.toUpperCase() + ": " + `Option "${s}" provided type "${a}" ` + `but expected type "${n}".`)
			})
		},
		c = t => {
			if (!t) return !1;
			if (t.style && t.parentNode && t.parentNode.style) {
				const e = getComputedStyle(t),
					i = getComputedStyle(t.parentNode);
				return "none" !== e.display && "none" !== i.display && "hidden" !== e.visibility
			}
			return !1
		},
		d = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
		h = t => {
			if (!document.documentElement.attachShadow) return null;
			if ("function" == typeof t.getRootNode) {
				const e = t.getRootNode();
				return e instanceof ShadowRoot ? e : null
			}
			return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null
		},
		f = () => function() {},
		u = t => t.offsetHeight,
		p = () => {
			const {
				jQuery: t
			} = window;
			return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
		},
		g = () => "rtl" === document.documentElement.dir,
		m = (t, e) => {
			var i;
			i = () => {
				const i = p();
				if (i) {
					const s = i.fn[t];
					i.fn[t] = e.jQueryInterface, i.fn[t].Constructor = e, i.fn[t].noConflict = () => (i.fn[t] = s, e.jQueryInterface)
				}
			}, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i()
		},
		_ = new Map;
	var b = {
		set(t, e, i) {
			_.has(t) || _.set(t, new Map);
			const s = _.get(t);
			s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
		},
		get: (t, e) => _.has(t) && _.get(t).get(e) || null,
		remove(t, e) {
			if (!_.has(t)) return;
			const i = _.get(t);
			i.delete(e), 0 === i.size && _.delete(t)
		}
	};
	const v = /[^.]*(?=\..*)\.|.*/,
		y = /\..*/,
		w = /::\d+$/,
		E = {};
	let T = 1;
	const A = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		},
		L = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

	function O(t, e) {
		return e && `${e}::${T++}` || t.uidEvent || T++
	}

	function k(t) {
		const e = O(t);
		return t.uidEvent = e, E[e] = E[e] || {}, E[e]
	}

	function D(t, e, i = null) {
		const s = Object.keys(t);
		for (let n = 0, o = s.length; n < o; n++) {
			const o = t[s[n]];
			if (o.originalHandler === e && o.delegationSelector === i) return o
		}
		return null
	}

	function x(t, e, i) {
		const s = "string" == typeof e,
			n = s ? i : e;
		let o = t.replace(y, "");
		const r = A[o];
		return r && (o = r), L.has(o) || (o = t), [s, n, o]
	}

	function C(t, e, i, s, n) {
		if ("string" != typeof e || !t) return;
		i || (i = s, s = null);
		const [o, r, a] = x(e, i, s), l = k(t), c = l[a] || (l[a] = {}), d = D(c, r, o ? i : null);
		if (d) return void(d.oneOff = d.oneOff && n);
		const h = O(r, e.replace(v, "")),
			f = o ? function(t, e, i) {
				return function s(n) {
					const o = t.querySelectorAll(e);
					for (let {
							target: e
						} = n; e && e !== this; e = e.parentNode)
						for (let r = o.length; r--;)
							if (o[r] === e) return n.delegateTarget = e, s.oneOff && N.off(t, n.type, i), i.apply(e, [n]);
					return null
				}
			}(t, i, s) : function(t, e) {
				return function i(s) {
					return s.delegateTarget = t, i.oneOff && N.off(t, s.type, e), e.apply(t, [s])
				}
			}(t, i);
		f.delegationSelector = o ? i : null, f.originalHandler = r, f.oneOff = n, f.uidEvent = h, c[h] = f, t.addEventListener(a, f, o)
	}

	function S(t, e, i, s, n) {
		const o = D(e[i], s, n);
		o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent])
	}
	const N = {
		on(t, e, i, s) {
			C(t, e, i, s, !1)
		},
		one(t, e, i, s) {
			C(t, e, i, s, !0)
		},
		off(t, e, i, s) {
			if ("string" != typeof e || !t) return;
			const [n, o, r] = x(e, i, s), a = r !== e, l = k(t), c = e.startsWith(".");
			if (void 0 !== o) {
				if (!l || !l[r]) return;
				return void S(t, l, r, o, n ? i : null)
			}
			c && Object.keys(l).forEach(i => {
				! function(t, e, i, s) {
					const n = e[i] || {};
					Object.keys(n).forEach(o => {
						if (o.includes(s)) {
							const s = n[o];
							S(t, e, i, s.originalHandler, s.delegationSelector)
						}
					})
				}(t, l, i, e.slice(1))
			});
			const d = l[r] || {};
			Object.keys(d).forEach(i => {
				const s = i.replace(w, "");
				if (!a || e.includes(s)) {
					const e = d[i];
					S(t, l, r, e.originalHandler, e.delegationSelector)
				}
			})
		},
		trigger(t, e, i) {
			if ("string" != typeof e || !t) return null;
			const s = p(),
				n = e.replace(y, ""),
				o = e !== n,
				r = L.has(n);
			let a, l = !0,
				c = !0,
				d = !1,
				h = null;
			return o && s && (a = s.Event(e, i), s(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(n, l, !0)) : h = new CustomEvent(e, {
				bubbles: l,
				cancelable: !0
			}), void 0 !== i && Object.keys(i).forEach(t => {
				Object.defineProperty(h, t, {
					get: () => i[t]
				})
			}), d && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h
		}
	};
	class j {
		constructor(t) {
			(t = "string" == typeof t ? document.querySelector(t) : t) && (this._element = t, b.set(this._element, this.constructor.DATA_KEY, this))
		}
		dispose() {
			b.remove(this._element, this.constructor.DATA_KEY), this._element = null
		}
		static getInstance(t) {
			return b.get(t, this.DATA_KEY)
		}
		static get VERSION() {
			return "5.0.0-beta3"
		}
	}
	class P extends j {
		static get DATA_KEY() {
			return "bs.alert"
		}
		close(t) {
			const e = t ? this._getRootElement(t) : this._element,
				i = this._triggerCloseEvent(e);
			null === i || i.defaultPrevented || this._removeElement(e)
		}
		_getRootElement(t) {
			return s(t) || t.closest(".alert")
		}
		_triggerCloseEvent(t) {
			return N.trigger(t, "close.bs.alert")
		}
		_removeElement(t) {
			if (t.classList.remove("show"), !t.classList.contains("fade")) return void this._destroyElement(t);
			const e = n(t);
			N.one(t, "transitionend", () => this._destroyElement(t)), a(t, e)
		}
		_destroyElement(t) {
			t.parentNode && t.parentNode.removeChild(t), N.trigger(t, "closed.bs.alert")
		}
		static jQueryInterface(t) {
			return this.each((function() {
				let e = b.get(this, "bs.alert");
				e || (e = new P(this)), "close" === t && e[t](this)
			}))
		}
		static handleDismiss(t) {
			return function(e) {
				e && e.preventDefault(), t.close(this)
			}
		}
	}
	N.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', P.handleDismiss(new P)), m("alert", P);
	class I extends j {
		static get DATA_KEY() {
			return "bs.button"
		}
		toggle() {
			this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
		}
		static jQueryInterface(t) {
			return this.each((function() {
				let e = b.get(this, "bs.button");
				e || (e = new I(this)), "toggle" === t && e[t]()
			}))
		}
	}

	function M(t) {
		return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
	}

	function R(t) {
		return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
	}
	N.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
		t.preventDefault();
		const e = t.target.closest('[data-bs-toggle="button"]');
		let i = b.get(e, "bs.button");
		i || (i = new I(e)), i.toggle()
	}), m("button", I);
	const B = {
			setDataAttribute(t, e, i) {
				t.setAttribute("data-bs-" + R(e), i)
			},
			removeDataAttribute(t, e) {
				t.removeAttribute("data-bs-" + R(e))
			},
			getDataAttributes(t) {
				if (!t) return {};
				const e = {};
				return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(i => {
					let s = i.replace(/^bs/, "");
					s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = M(t.dataset[i])
				}), e
			},
			getDataAttribute: (t, e) => M(t.getAttribute("data-bs-" + R(e))),
			offset(t) {
				const e = t.getBoundingClientRect();
				return {
					top: e.top + document.body.scrollTop,
					left: e.left + document.body.scrollLeft
				}
			},
			position: t => ({
				top: t.offsetTop,
				left: t.offsetLeft
			})
		},
		H = {
			find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
			findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
			children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
			parents(t, e) {
				const i = [];
				let s = t.parentNode;
				for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) s.matches(e) && i.push(s), s = s.parentNode;
				return i
			},
			prev(t, e) {
				let i = t.previousElementSibling;
				for (; i;) {
					if (i.matches(e)) return [i];
					i = i.previousElementSibling
				}
				return []
			},
			next(t, e) {
				let i = t.nextElementSibling;
				for (; i;) {
					if (i.matches(e)) return [i];
					i = i.nextElementSibling
				}
				return []
			}
		},
		W = {
			interval: 5e3,
			keyboard: !0,
			slide: !1,
			pause: "hover",
			wrap: !0,
			touch: !0
		},
		U = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			slide: "(boolean|string)",
			pause: "(string|boolean)",
			wrap: "boolean",
			touch: "boolean"
		},
		$ = "next",
		F = "prev",
		z = "left",
		K = "right";
	class Y extends j {
		constructor(t, e) {
			super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = H.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
		}
		static get Default() {
			return W
		}
		static get DATA_KEY() {
			return "bs.carousel"
		}
		next() {
			this._isSliding || this._slide($)
		}
		nextWhenVisible() {
			!document.hidden && c(this._element) && this.next()
		}
		prev() {
			this._isSliding || this._slide(F)
		}
		pause(t) {
			t || (this._isPaused = !0), H.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
		}
		cycle(t) {
			t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
		}
		to(t) {
			this._activeElement = H.findOne(".active.carousel-item", this._element);
			const e = this._getItemIndex(this._activeElement);
			if (t > this._items.length - 1 || t < 0) return;
			if (this._isSliding) return void N.one(this._element, "slid.bs.carousel", () => this.to(t));
			if (e === t) return this.pause(), void this.cycle();
			const i = t > e ? $ : F;
			this._slide(i, this._items[t])
		}
		dispose() {
			N.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null, super.dispose()
		}
		_getConfig(t) {
			return t = {
				...W,
				...t
			}, l("carousel", t, U), t
		}
		_handleSwipe() {
			const t = Math.abs(this.touchDeltaX);
			if (t <= 40) return;
			const e = t / this.touchDeltaX;
			this.touchDeltaX = 0, e && this._slide(e > 0 ? K : z)
		}
		_addEventListeners() {
			this._config.keyboard && N.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (N.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), N.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
		}
		_addTouchEventListeners() {
			const t = t => {
					!this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
				},
				e = t => {
					this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
				},
				i = t => {
					!this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
				};
			H.find(".carousel-item img", this._element).forEach(t => {
				N.on(t, "dragstart.bs.carousel", t => t.preventDefault())
			}), this._pointerEvent ? (N.on(this._element, "pointerdown.bs.carousel", e => t(e)), N.on(this._element, "pointerup.bs.carousel", t => i(t)), this._element.classList.add("pointer-event")) : (N.on(this._element, "touchstart.bs.carousel", e => t(e)), N.on(this._element, "touchmove.bs.carousel", t => e(t)), N.on(this._element, "touchend.bs.carousel", t => i(t)))
		}
		_keydown(t) {
			/input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(z)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(K)))
		}
		_getItemIndex(t) {
			return this._items = t && t.parentNode ? H.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
		}
		_getItemByOrder(t, e) {
			const i = t === $,
				s = t === F,
				n = this._getItemIndex(e),
				o = this._items.length - 1;
			if ((s && 0 === n || i && n === o) && !this._config.wrap) return e;
			const r = (n + (s ? -1 : 1)) % this._items.length;
			return -1 === r ? this._items[this._items.length - 1] : this._items[r]
		}
		_triggerSlideEvent(t, e) {
			const i = this._getItemIndex(t),
				s = this._getItemIndex(H.findOne(".active.carousel-item", this._element));
			return N.trigger(this._element, "slide.bs.carousel", {
				relatedTarget: t,
				direction: e,
				from: s,
				to: i
			})
		}
		_setActiveIndicatorElement(t) {
			if (this._indicatorsElement) {
				const e = H.findOne(".active", this._indicatorsElement);
				e.classList.remove("active"), e.removeAttribute("aria-current");
				const i = H.find("[data-bs-target]", this._indicatorsElement);
				for (let e = 0; e < i.length; e++)
					if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
						i[e].classList.add("active"), i[e].setAttribute("aria-current", "true");
						break
					}
			}
		}
		_updateInterval() {
			const t = this._activeElement || H.findOne(".active.carousel-item", this._element);
			if (!t) return;
			const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
			e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
		}
		_slide(t, e) {
			const i = this._directionToOrder(t),
				s = H.findOne(".active.carousel-item", this._element),
				o = this._getItemIndex(s),
				r = e || this._getItemByOrder(i, s),
				l = this._getItemIndex(r),
				c = Boolean(this._interval),
				d = i === $,
				h = d ? "carousel-item-start" : "carousel-item-end",
				f = d ? "carousel-item-next" : "carousel-item-prev",
				p = this._orderToDirection(i);
			if (r && r.classList.contains("active")) this._isSliding = !1;
			else if (!this._triggerSlideEvent(r, p).defaultPrevented && s && r) {
				if (this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r, this._element.classList.contains("slide")) {
					r.classList.add(f), u(r), s.classList.add(h), r.classList.add(h);
					const t = n(s);
					N.one(s, "transitionend", () => {
						r.classList.remove(h, f), r.classList.add("active"), s.classList.remove("active", f, h), this._isSliding = !1, setTimeout(() => {
							N.trigger(this._element, "slid.bs.carousel", {
								relatedTarget: r,
								direction: p,
								from: o,
								to: l
							})
						}, 0)
					}), a(s, t)
				} else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, N.trigger(this._element, "slid.bs.carousel", {
					relatedTarget: r,
					direction: p,
					from: o,
					to: l
				});
				c && this.cycle()
			}
		}
		_directionToOrder(t) {
			return [K, z].includes(t) ? g() ? t === K ? F : $ : t === K ? $ : F : t
		}
		_orderToDirection(t) {
			return [$, F].includes(t) ? g() ? t === $ ? z : K : t === $ ? K : z : t
		}
		static carouselInterface(t, e) {
			let i = b.get(t, "bs.carousel"),
				s = {
					...W,
					...B.getDataAttributes(t)
				};
			"object" == typeof e && (s = {
				...s,
				...e
			});
			const n = "string" == typeof e ? e : s.slide;
			if (i || (i = new Y(t, s)), "number" == typeof e) i.to(e);
			else if ("string" == typeof n) {
				if (void 0 === i[n]) throw new TypeError(`No method named "${n}"`);
				i[n]()
			} else s.interval && s.ride && (i.pause(), i.cycle())
		}
		static jQueryInterface(t) {
			return this.each((function() {
				Y.carouselInterface(this, t)
			}))
		}
		static dataApiClickHandler(t) {
			const e = s(this);
			if (!e || !e.classList.contains("carousel")) return;
			const i = {
					...B.getDataAttributes(e),
					...B.getDataAttributes(this)
				},
				n = this.getAttribute("data-bs-slide-to");
			n && (i.interval = !1), Y.carouselInterface(e, i), n && b.get(e, "bs.carousel").to(n), t.preventDefault()
		}
	}
	N.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Y.dataApiClickHandler), N.on(window, "load.bs.carousel.data-api", () => {
		const t = H.find('[data-bs-ride="carousel"]');
		for (let e = 0, i = t.length; e < i; e++) Y.carouselInterface(t[e], b.get(t[e], "bs.carousel"))
	}), m("carousel", Y);
	const q = {
			toggle: !0,
			parent: ""
		},
		V = {
			toggle: "boolean",
			parent: "(string|element)"
		};
	class X extends j {
		constructor(t, e) {
			super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = H.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
			const s = H.find('[data-bs-toggle="collapse"]');
			for (let t = 0, e = s.length; t < e; t++) {
				const e = s[t],
					n = i(e),
					o = H.find(n).filter(t => t === this._element);
				null !== n && o.length && (this._selector = n, this._triggerArray.push(e))
			}
			this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
		}
		static get Default() {
			return q
		}
		static get DATA_KEY() {
			return "bs.collapse"
		}
		toggle() {
			this._element.classList.contains("show") ? this.hide() : this.show()
		}
		show() {
			if (this._isTransitioning || this._element.classList.contains("show")) return;
			let t, e;
			this._parent && (t = H.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === t.length && (t = null));
			const i = H.findOne(this._selector);
			if (t) {
				const s = t.find(t => i !== t);
				if (e = s ? b.get(s, "bs.collapse") : null, e && e._isTransitioning) return
			}
			if (N.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
			t && t.forEach(t => {
				i !== t && X.collapseInterface(t, "hide"), e || b.set(t, "bs.collapse", null)
			});
			const s = this._getDimension();
			this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
				t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
			}), this.setTransitioning(!0);
			const o = "scroll" + (s[0].toUpperCase() + s.slice(1)),
				r = n(this._element);
			N.one(this._element, "transitionend", () => {
				this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[s] = "", this.setTransitioning(!1), N.trigger(this._element, "shown.bs.collapse")
			}), a(this._element, r), this._element.style[s] = this._element[o] + "px"
		}
		hide() {
			if (this._isTransitioning || !this._element.classList.contains("show")) return;
			if (N.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
			const t = this._getDimension();
			this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", u(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
			const e = this._triggerArray.length;
			if (e > 0)
				for (let t = 0; t < e; t++) {
					const e = this._triggerArray[t],
						i = s(e);
					i && !i.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1))
				}
			this.setTransitioning(!0), this._element.style[t] = "";
			const i = n(this._element);
			N.one(this._element, "transitionend", () => {
				this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), N.trigger(this._element, "hidden.bs.collapse")
			}), a(this._element, i)
		}
		setTransitioning(t) {
			this._isTransitioning = t
		}
		dispose() {
			super.dispose(), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
		}
		_getConfig(t) {
			return (t = {
				...q,
				...t
			}).toggle = Boolean(t.toggle), l("collapse", t, V), t
		}
		_getDimension() {
			return this._element.classList.contains("width") ? "width" : "height"
		}
		_getParent() {
			let {
				parent: t
			} = this._config;
			r(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = H.findOne(t);
			const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
			return H.find(e, t).forEach(t => {
				const e = s(t);
				this._addAriaAndCollapsedClass(e, [t])
			}), t
		}
		_addAriaAndCollapsedClass(t, e) {
			if (!t || !e.length) return;
			const i = t.classList.contains("show");
			e.forEach(t => {
				i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i)
			})
		}
		static collapseInterface(t, e) {
			let i = b.get(t, "bs.collapse");
			const s = {
				...q,
				...B.getDataAttributes(t),
				..."object" == typeof e && e ? e : {}
			};
			if (!i && s.toggle && "string" == typeof e && /show|hide/.test(e) && (s.toggle = !1), i || (i = new X(t, s)), "string" == typeof e) {
				if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
				i[e]()
			}
		}
		static jQueryInterface(t) {
			return this.each((function() {
				X.collapseInterface(this, t)
			}))
		}
	}
	N.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(t) {
		("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
		const e = B.getDataAttributes(this),
			s = i(this);
		H.find(s).forEach(t => {
			const i = b.get(t, "bs.collapse");
			let s;
			i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), s = "toggle") : s = e, X.collapseInterface(t, s)
		})
	})), m("collapse", X);
	var Q = "top",
		G = "bottom",
		Z = "right",
		J = "left",
		tt = [Q, G, Z, J],
		et = tt.reduce((function(t, e) {
			return t.concat([e + "-start", e + "-end"])
		}), []),
		it = [].concat(tt, ["auto"]).reduce((function(t, e) {
			return t.concat([e, e + "-start", e + "-end"])
		}), []),
		st = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

	function nt(t) {
		return t ? (t.nodeName || "").toLowerCase() : null
	}

	function ot(t) {
		if (null == t) return window;
		if ("[object Window]" !== t.toString()) {
			var e = t.ownerDocument;
			return e && e.defaultView || window
		}
		return t
	}

	function rt(t) {
		return t instanceof ot(t).Element || t instanceof Element
	}

	function at(t) {
		return t instanceof ot(t).HTMLElement || t instanceof HTMLElement
	}

	function lt(t) {
		return "undefined" != typeof ShadowRoot && (t instanceof ot(t).ShadowRoot || t instanceof ShadowRoot)
	}
	var ct = {
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: function(t) {
			var e = t.state;
			Object.keys(e.elements).forEach((function(t) {
				var i = e.styles[t] || {},
					s = e.attributes[t] || {},
					n = e.elements[t];
				at(n) && nt(n) && (Object.assign(n.style, i), Object.keys(s).forEach((function(t) {
					var e = s[t];
					!1 === e ? n.removeAttribute(t) : n.setAttribute(t, !0 === e ? "" : e)
				})))
			}))
		},
		effect: function(t) {
			var e = t.state,
				i = {
					popper: {
						position: e.options.strategy,
						left: "0",
						top: "0",
						margin: "0"
					},
					arrow: {
						position: "absolute"
					},
					reference: {}
				};
			return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
				function() {
					Object.keys(e.elements).forEach((function(t) {
						var s = e.elements[t],
							n = e.attributes[t] || {},
							o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
								return t[e] = "", t
							}), {});
						at(s) && nt(s) && (Object.assign(s.style, o), Object.keys(n).forEach((function(t) {
							s.removeAttribute(t)
						})))
					}))
				}
		},
		requires: ["computeStyles"]
	};

	function dt(t) {
		return t.split("-")[0]
	}

	function ht(t) {
		var e = t.getBoundingClientRect();
		return {
			width: e.width,
			height: e.height,
			top: e.top,
			right: e.right,
			bottom: e.bottom,
			left: e.left,
			x: e.left,
			y: e.top
		}
	}

	function ft(t) {
		var e = ht(t),
			i = t.offsetWidth,
			s = t.offsetHeight;
		return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - s) <= 1 && (s = e.height), {
			x: t.offsetLeft,
			y: t.offsetTop,
			width: i,
			height: s
		}
	}

	function ut(t, e) {
		var i = e.getRootNode && e.getRootNode();
		if (t.contains(e)) return !0;
		if (i && lt(i)) {
			var s = e;
			do {
				if (s && t.isSameNode(s)) return !0;
				s = s.parentNode || s.host
			} while (s)
		}
		return !1
	}

	function pt(t) {
		return ot(t).getComputedStyle(t)
	}

	function gt(t) {
		return ["table", "td", "th"].indexOf(nt(t)) >= 0
	}

	function mt(t) {
		return ((rt(t) ? t.ownerDocument : t.document) || window.document).documentElement
	}

	function _t(t) {
		return "html" === nt(t) ? t : t.assignedSlot || t.parentNode || (lt(t) ? t.host : null) || mt(t)
	}

	function bt(t) {
		return at(t) && "fixed" !== pt(t).position ? t.offsetParent : null
	}

	function vt(t) {
		for (var e = ot(t), i = bt(t); i && gt(i) && "static" === pt(i).position;) i = bt(i);
		return i && ("html" === nt(i) || "body" === nt(i) && "static" === pt(i).position) ? e : i || function(t) {
			for (var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), i = _t(t); at(i) && ["html", "body"].indexOf(nt(i)) < 0;) {
				var s = pt(i);
				if ("none" !== s.transform || "none" !== s.perspective || "paint" === s.contain || -1 !== ["transform", "perspective"].indexOf(s.willChange) || e && "filter" === s.willChange || e && s.filter && "none" !== s.filter) return i;
				i = i.parentNode
			}
			return null
		}(t) || e
	}

	function yt(t) {
		return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
	}
	var wt = Math.max,
		Et = Math.min,
		Tt = Math.round;

	function At(t, e, i) {
		return wt(t, Et(e, i))
	}

	function Lt(t) {
		return Object.assign({}, {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}, t)
	}

	function Ot(t, e) {
		return e.reduce((function(e, i) {
			return e[i] = t, e
		}), {})
	}
	var kt = {
			name: "arrow",
			enabled: !0,
			phase: "main",
			fn: function(t) {
				var e, i = t.state,
					s = t.name,
					n = t.options,
					o = i.elements.arrow,
					r = i.modifiersData.popperOffsets,
					a = dt(i.placement),
					l = yt(a),
					c = [J, Z].indexOf(a) >= 0 ? "height" : "width";
				if (o && r) {
					var d = function(t, e) {
							return Lt("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
								placement: e.placement
							})) : t) ? t : Ot(t, tt))
						}(n.padding, i),
						h = ft(o),
						f = "y" === l ? Q : J,
						u = "y" === l ? G : Z,
						p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
						g = r[l] - i.rects.reference[l],
						m = vt(o),
						_ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
						b = p / 2 - g / 2,
						v = d[f],
						y = _ - h[c] - d[u],
						w = _ / 2 - h[c] / 2 + b,
						E = At(v, w, y),
						T = l;
					i.modifiersData[s] = ((e = {})[T] = E, e.centerOffset = E - w, e)
				}
			},
			effect: function(t) {
				var e = t.state,
					i = t.options.element,
					s = void 0 === i ? "[data-popper-arrow]" : i;
				null != s && ("string" != typeof s || (s = e.elements.popper.querySelector(s))) && ut(e.elements.popper, s) && (e.elements.arrow = s)
			},
			requires: ["popperOffsets"],
			requiresIfExists: ["preventOverflow"]
		},
		Dt = {
			top: "auto",
			right: "auto",
			bottom: "auto",
			left: "auto"
		};

	function xt(t) {
		var e, i = t.popper,
			s = t.popperRect,
			n = t.placement,
			o = t.offsets,
			r = t.position,
			a = t.gpuAcceleration,
			l = t.adaptive,
			c = t.roundOffsets,
			d = !0 === c ? function(t) {
				var e = t.x,
					i = t.y,
					s = window.devicePixelRatio || 1;
				return {
					x: Tt(Tt(e * s) / s) || 0,
					y: Tt(Tt(i * s) / s) || 0
				}
			}(o) : "function" == typeof c ? c(o) : o,
			h = d.x,
			f = void 0 === h ? 0 : h,
			u = d.y,
			p = void 0 === u ? 0 : u,
			g = o.hasOwnProperty("x"),
			m = o.hasOwnProperty("y"),
			_ = J,
			b = Q,
			v = window;
		if (l) {
			var y = vt(i),
				w = "clientHeight",
				E = "clientWidth";
			y === ot(i) && "static" !== pt(y = mt(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, n === Q && (b = G, p -= y[w] - s.height, p *= a ? 1 : -1), n === J && (_ = Z, f -= y[E] - s.width, f *= a ? 1 : -1)
		}
		var T, A = Object.assign({
			position: r
		}, l && Dt);
		return a ? Object.assign({}, A, ((T = {})[b] = m ? "0" : "", T[_] = g ? "0" : "", T.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + f + "px, " + p + "px)" : "translate3d(" + f + "px, " + p + "px, 0)", T)) : Object.assign({}, A, ((e = {})[b] = m ? p + "px" : "", e[_] = g ? f + "px" : "", e.transform = "", e))
	}
	var Ct = {
			name: "computeStyles",
			enabled: !0,
			phase: "beforeWrite",
			fn: function(t) {
				var e = t.state,
					i = t.options,
					s = i.gpuAcceleration,
					n = void 0 === s || s,
					o = i.adaptive,
					r = void 0 === o || o,
					a = i.roundOffsets,
					l = void 0 === a || a,
					c = {
						placement: dt(e.placement),
						popper: e.elements.popper,
						popperRect: e.rects.popper,
						gpuAcceleration: n
					};
				null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, xt(Object.assign({}, c, {
					offsets: e.modifiersData.popperOffsets,
					position: e.options.strategy,
					adaptive: r,
					roundOffsets: l
				})))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, xt(Object.assign({}, c, {
					offsets: e.modifiersData.arrow,
					position: "absolute",
					adaptive: !1,
					roundOffsets: l
				})))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
					"data-popper-placement": e.placement
				})
			},
			data: {}
		},
		St = {
			passive: !0
		},
		Nt = {
			name: "eventListeners",
			enabled: !0,
			phase: "write",
			fn: function() {},
			effect: function(t) {
				var e = t.state,
					i = t.instance,
					s = t.options,
					n = s.scroll,
					o = void 0 === n || n,
					r = s.resize,
					a = void 0 === r || r,
					l = ot(e.elements.popper),
					c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
				return o && c.forEach((function(t) {
						t.addEventListener("scroll", i.update, St)
					})), a && l.addEventListener("resize", i.update, St),
					function() {
						o && c.forEach((function(t) {
							t.removeEventListener("scroll", i.update, St)
						})), a && l.removeEventListener("resize", i.update, St)
					}
			},
			data: {}
		},
		jt = {
			left: "right",
			right: "left",
			bottom: "top",
			top: "bottom"
		};

	function Pt(t) {
		return t.replace(/left|right|bottom|top/g, (function(t) {
			return jt[t]
		}))
	}
	var It = {
		start: "end",
		end: "start"
	};

	function Mt(t) {
		return t.replace(/start|end/g, (function(t) {
			return It[t]
		}))
	}

	function Rt(t) {
		var e = ot(t);
		return {
			scrollLeft: e.pageXOffset,
			scrollTop: e.pageYOffset
		}
	}

	function Bt(t) {
		return ht(mt(t)).left + Rt(t).scrollLeft
	}

	function Ht(t) {
		var e = pt(t),
			i = e.overflow,
			s = e.overflowX,
			n = e.overflowY;
		return /auto|scroll|overlay|hidden/.test(i + n + s)
	}

	function Wt(t, e) {
		var i;
		void 0 === e && (e = []);
		var s = function t(e) {
				return ["html", "body", "#document"].indexOf(nt(e)) >= 0 ? e.ownerDocument.body : at(e) && Ht(e) ? e : t(_t(e))
			}(t),
			n = s === (null == (i = t.ownerDocument) ? void 0 : i.body),
			o = ot(s),
			r = n ? [o].concat(o.visualViewport || [], Ht(s) ? s : []) : s,
			a = e.concat(r);
		return n ? a : a.concat(Wt(_t(r)))
	}

	function Ut(t) {
		return Object.assign({}, t, {
			left: t.x,
			top: t.y,
			right: t.x + t.width,
			bottom: t.y + t.height
		})
	}

	function $t(t, e) {
		return "viewport" === e ? Ut(function(t) {
			var e = ot(t),
				i = mt(t),
				s = e.visualViewport,
				n = i.clientWidth,
				o = i.clientHeight,
				r = 0,
				a = 0;
			return s && (n = s.width, o = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = s.offsetLeft, a = s.offsetTop)), {
				width: n,
				height: o,
				x: r + Bt(t),
				y: a
			}
		}(t)) : at(e) ? function(t) {
			var e = ht(t);
			return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
		}(e) : Ut(function(t) {
			var e, i = mt(t),
				s = Rt(t),
				n = null == (e = t.ownerDocument) ? void 0 : e.body,
				o = wt(i.scrollWidth, i.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
				r = wt(i.scrollHeight, i.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
				a = -s.scrollLeft + Bt(t),
				l = -s.scrollTop;
			return "rtl" === pt(n || i).direction && (a += wt(i.clientWidth, n ? n.clientWidth : 0) - o), {
				width: o,
				height: r,
				x: a,
				y: l
			}
		}(mt(t)))
	}

	function Ft(t) {
		return t.split("-")[1]
	}

	function zt(t) {
		var e, i = t.reference,
			s = t.element,
			n = t.placement,
			o = n ? dt(n) : null,
			r = n ? Ft(n) : null,
			a = i.x + i.width / 2 - s.width / 2,
			l = i.y + i.height / 2 - s.height / 2;
		switch (o) {
			case Q:
				e = {
					x: a,
					y: i.y - s.height
				};
				break;
			case G:
				e = {
					x: a,
					y: i.y + i.height
				};
				break;
			case Z:
				e = {
					x: i.x + i.width,
					y: l
				};
				break;
			case J:
				e = {
					x: i.x - s.width,
					y: l
				};
				break;
			default:
				e = {
					x: i.x,
					y: i.y
				}
		}
		var c = o ? yt(o) : null;
		if (null != c) {
			var d = "y" === c ? "height" : "width";
			switch (r) {
				case "start":
					e[c] = e[c] - (i[d] / 2 - s[d] / 2);
					break;
				case "end":
					e[c] = e[c] + (i[d] / 2 - s[d] / 2)
			}
		}
		return e
	}

	function Kt(t, e) {
		void 0 === e && (e = {});
		var i = e,
			s = i.placement,
			n = void 0 === s ? t.placement : s,
			o = i.boundary,
			r = void 0 === o ? "clippingParents" : o,
			a = i.rootBoundary,
			l = void 0 === a ? "viewport" : a,
			c = i.elementContext,
			d = void 0 === c ? "popper" : c,
			h = i.altBoundary,
			f = void 0 !== h && h,
			u = i.padding,
			p = void 0 === u ? 0 : u,
			g = Lt("number" != typeof p ? p : Ot(p, tt)),
			m = "popper" === d ? "reference" : "popper",
			_ = t.elements.reference,
			b = t.rects.popper,
			v = t.elements[f ? m : d],
			y = function(t, e, i) {
				var s = "clippingParents" === e ? function(t) {
						var e = Wt(_t(t)),
							i = ["absolute", "fixed"].indexOf(pt(t).position) >= 0 && at(t) ? vt(t) : t;
						return rt(i) ? e.filter((function(t) {
							return rt(t) && ut(t, i) && "body" !== nt(t)
						})) : []
					}(t) : [].concat(e),
					n = [].concat(s, [i]),
					o = n[0],
					r = n.reduce((function(e, i) {
						var s = $t(t, i);
						return e.top = wt(s.top, e.top), e.right = Et(s.right, e.right), e.bottom = Et(s.bottom, e.bottom), e.left = wt(s.left, e.left), e
					}), $t(t, o));
				return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
			}(rt(v) ? v : v.contextElement || mt(t.elements.popper), r, l),
			w = ht(_),
			E = zt({
				reference: w,
				element: b,
				strategy: "absolute",
				placement: n
			}),
			T = Ut(Object.assign({}, b, E)),
			A = "popper" === d ? T : w,
			L = {
				top: y.top - A.top + g.top,
				bottom: A.bottom - y.bottom + g.bottom,
				left: y.left - A.left + g.left,
				right: A.right - y.right + g.right
			},
			O = t.modifiersData.offset;
		if ("popper" === d && O) {
			var k = O[n];
			Object.keys(L).forEach((function(t) {
				var e = [Z, G].indexOf(t) >= 0 ? 1 : -1,
					i = [Q, G].indexOf(t) >= 0 ? "y" : "x";
				L[t] += k[i] * e
			}))
		}
		return L
	}

	function Yt(t, e) {
		void 0 === e && (e = {});
		var i = e,
			s = i.placement,
			n = i.boundary,
			o = i.rootBoundary,
			r = i.padding,
			a = i.flipVariations,
			l = i.allowedAutoPlacements,
			c = void 0 === l ? it : l,
			d = Ft(s),
			h = d ? a ? et : et.filter((function(t) {
				return Ft(t) === d
			})) : tt,
			f = h.filter((function(t) {
				return c.indexOf(t) >= 0
			}));
		0 === f.length && (f = h);
		var u = f.reduce((function(e, i) {
			return e[i] = Kt(t, {
				placement: i,
				boundary: n,
				rootBoundary: o,
				padding: r
			})[dt(i)], e
		}), {});
		return Object.keys(u).sort((function(t, e) {
			return u[t] - u[e]
		}))
	}
	var qt = {
		name: "flip",
		enabled: !0,
		phase: "main",
		fn: function(t) {
			var e = t.state,
				i = t.options,
				s = t.name;
			if (!e.modifiersData[s]._skip) {
				for (var n = i.mainAxis, o = void 0 === n || n, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, d = i.boundary, h = i.rootBoundary, f = i.altBoundary, u = i.flipVariations, p = void 0 === u || u, g = i.allowedAutoPlacements, m = e.options.placement, _ = dt(m), b = l || (_ !== m && p ? function(t) {
						if ("auto" === dt(t)) return [];
						var e = Pt(t);
						return [Mt(t), e, Mt(e)]
					}(m) : [Pt(m)]), v = [m].concat(b).reduce((function(t, i) {
						return t.concat("auto" === dt(i) ? Yt(e, {
							placement: i,
							boundary: d,
							rootBoundary: h,
							padding: c,
							flipVariations: p,
							allowedAutoPlacements: g
						}) : i)
					}), []), y = e.rects.reference, w = e.rects.popper, E = new Map, T = !0, A = v[0], L = 0; L < v.length; L++) {
					var O = v[L],
						k = dt(O),
						D = "start" === Ft(O),
						x = [Q, G].indexOf(k) >= 0,
						C = x ? "width" : "height",
						S = Kt(e, {
							placement: O,
							boundary: d,
							rootBoundary: h,
							altBoundary: f,
							padding: c
						}),
						N = x ? D ? Z : J : D ? G : Q;
					y[C] > w[C] && (N = Pt(N));
					var j = Pt(N),
						P = [];
					if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[j] <= 0), P.every((function(t) {
							return t
						}))) {
						A = O, T = !1;
						break
					}
					E.set(O, P)
				}
				if (T)
					for (var I = function(t) {
							var e = v.find((function(e) {
								var i = E.get(e);
								if (i) return i.slice(0, t).every((function(t) {
									return t
								}))
							}));
							if (e) return A = e, "break"
						}, M = p ? 3 : 1; M > 0 && "break" !== I(M); M--);
				e.placement !== A && (e.modifiersData[s]._skip = !0, e.placement = A, e.reset = !0)
			}
		},
		requiresIfExists: ["offset"],
		data: {
			_skip: !1
		}
	};

	function Vt(t, e, i) {
		return void 0 === i && (i = {
			x: 0,
			y: 0
		}), {
			top: t.top - e.height - i.y,
			right: t.right - e.width + i.x,
			bottom: t.bottom - e.height + i.y,
			left: t.left - e.width - i.x
		}
	}

	function Xt(t) {
		return [Q, Z, G, J].some((function(e) {
			return t[e] >= 0
		}))
	}
	var Qt = {
			name: "hide",
			enabled: !0,
			phase: "main",
			requiresIfExists: ["preventOverflow"],
			fn: function(t) {
				var e = t.state,
					i = t.name,
					s = e.rects.reference,
					n = e.rects.popper,
					o = e.modifiersData.preventOverflow,
					r = Kt(e, {
						elementContext: "reference"
					}),
					a = Kt(e, {
						altBoundary: !0
					}),
					l = Vt(r, s),
					c = Vt(a, n, o),
					d = Xt(l),
					h = Xt(c);
				e.modifiersData[i] = {
					referenceClippingOffsets: l,
					popperEscapeOffsets: c,
					isReferenceHidden: d,
					hasPopperEscaped: h
				}, e.attributes.popper = Object.assign({}, e.attributes.popper, {
					"data-popper-reference-hidden": d,
					"data-popper-escaped": h
				})
			}
		},
		Gt = {
			name: "offset",
			enabled: !0,
			phase: "main",
			requires: ["popperOffsets"],
			fn: function(t) {
				var e = t.state,
					i = t.options,
					s = t.name,
					n = i.offset,
					o = void 0 === n ? [0, 0] : n,
					r = it.reduce((function(t, i) {
						return t[i] = function(t, e, i) {
							var s = dt(t),
								n = [J, Q].indexOf(s) >= 0 ? -1 : 1,
								o = "function" == typeof i ? i(Object.assign({}, e, {
									placement: t
								})) : i,
								r = o[0],
								a = o[1];
							return r = r || 0, a = (a || 0) * n, [J, Z].indexOf(s) >= 0 ? {
								x: a,
								y: r
							} : {
								x: r,
								y: a
							}
						}(i, e.rects, o), t
					}), {}),
					a = r[e.placement],
					l = a.x,
					c = a.y;
				null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[s] = r
			}
		},
		Zt = {
			name: "popperOffsets",
			enabled: !0,
			phase: "read",
			fn: function(t) {
				var e = t.state,
					i = t.name;
				e.modifiersData[i] = zt({
					reference: e.rects.reference,
					element: e.rects.popper,
					strategy: "absolute",
					placement: e.placement
				})
			},
			data: {}
		},
		Jt = {
			name: "preventOverflow",
			enabled: !0,
			phase: "main",
			fn: function(t) {
				var e = t.state,
					i = t.options,
					s = t.name,
					n = i.mainAxis,
					o = void 0 === n || n,
					r = i.altAxis,
					a = void 0 !== r && r,
					l = i.boundary,
					c = i.rootBoundary,
					d = i.altBoundary,
					h = i.padding,
					f = i.tether,
					u = void 0 === f || f,
					p = i.tetherOffset,
					g = void 0 === p ? 0 : p,
					m = Kt(e, {
						boundary: l,
						rootBoundary: c,
						padding: h,
						altBoundary: d
					}),
					_ = dt(e.placement),
					b = Ft(e.placement),
					v = !b,
					y = yt(_),
					w = "x" === y ? "y" : "x",
					E = e.modifiersData.popperOffsets,
					T = e.rects.reference,
					A = e.rects.popper,
					L = "function" == typeof g ? g(Object.assign({}, e.rects, {
						placement: e.placement
					})) : g,
					O = {
						x: 0,
						y: 0
					};
				if (E) {
					if (o || a) {
						var k = "y" === y ? Q : J,
							D = "y" === y ? G : Z,
							x = "y" === y ? "height" : "width",
							C = E[y],
							S = E[y] + m[k],
							N = E[y] - m[D],
							j = u ? -A[x] / 2 : 0,
							P = "start" === b ? T[x] : A[x],
							I = "start" === b ? -A[x] : -T[x],
							M = e.elements.arrow,
							R = u && M ? ft(M) : {
								width: 0,
								height: 0
							},
							B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
								top: 0,
								right: 0,
								bottom: 0,
								left: 0
							},
							H = B[k],
							W = B[D],
							U = At(0, T[x], R[x]),
							$ = v ? T[x] / 2 - j - U - H - L : P - U - H - L,
							F = v ? -T[x] / 2 + j + U + W + L : I + U + W + L,
							z = e.elements.arrow && vt(e.elements.arrow),
							K = z ? "y" === y ? z.clientTop || 0 : z.clientLeft || 0 : 0,
							Y = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
							q = E[y] + $ - Y - K,
							V = E[y] + F - Y;
						if (o) {
							var X = At(u ? Et(S, q) : S, C, u ? wt(N, V) : N);
							E[y] = X, O[y] = X - C
						}
						if (a) {
							var tt = "x" === y ? Q : J,
								et = "x" === y ? G : Z,
								it = E[w],
								st = it + m[tt],
								nt = it - m[et],
								ot = At(u ? Et(st, q) : st, it, u ? wt(nt, V) : nt);
							E[w] = ot, O[w] = ot - it
						}
					}
					e.modifiersData[s] = O
				}
			},
			requiresIfExists: ["offset"]
		};

	function te(t, e, i) {
		void 0 === i && (i = !1);
		var s, n, o = mt(e),
			r = ht(t),
			a = at(e),
			l = {
				scrollLeft: 0,
				scrollTop: 0
			},
			c = {
				x: 0,
				y: 0
			};
		return (a || !a && !i) && (("body" !== nt(e) || Ht(o)) && (l = (s = e) !== ot(s) && at(s) ? {
			scrollLeft: (n = s).scrollLeft,
			scrollTop: n.scrollTop
		} : Rt(s)), at(e) ? ((c = ht(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = Bt(o))), {
			x: r.left + l.scrollLeft - c.x,
			y: r.top + l.scrollTop - c.y,
			width: r.width,
			height: r.height
		}
	}
	var ee = {
		placement: "bottom",
		modifiers: [],
		strategy: "absolute"
	};

	function ie() {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
		return !e.some((function(t) {
			return !(t && "function" == typeof t.getBoundingClientRect)
		}))
	}

	function se(t) {
		void 0 === t && (t = {});
		var e = t,
			i = e.defaultModifiers,
			s = void 0 === i ? [] : i,
			n = e.defaultOptions,
			o = void 0 === n ? ee : n;
		return function(t, e, i) {
			void 0 === i && (i = o);
			var n, r, a = {
					placement: "bottom",
					orderedModifiers: [],
					options: Object.assign({}, ee, o),
					modifiersData: {},
					elements: {
						reference: t,
						popper: e
					},
					attributes: {},
					styles: {}
				},
				l = [],
				c = !1,
				d = {
					state: a,
					setOptions: function(i) {
						h(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
							reference: rt(t) ? Wt(t) : t.contextElement ? Wt(t.contextElement) : [],
							popper: Wt(e)
						};
						var n, r, c = function(t) {
							var e = function(t) {
								var e = new Map,
									i = new Set,
									s = [];
								return t.forEach((function(t) {
									e.set(t.name, t)
								})), t.forEach((function(t) {
									i.has(t.name) || function t(n) {
										i.add(n.name), [].concat(n.requires || [], n.requiresIfExists || []).forEach((function(s) {
											if (!i.has(s)) {
												var n = e.get(s);
												n && t(n)
											}
										})), s.push(n)
									}(t)
								})), s
							}(t);
							return st.reduce((function(t, i) {
								return t.concat(e.filter((function(t) {
									return t.phase === i
								})))
							}), [])
						}((n = [].concat(s, a.options.modifiers), r = n.reduce((function(t, e) {
							var i = t[e.name];
							return t[e.name] = i ? Object.assign({}, i, e, {
								options: Object.assign({}, i.options, e.options),
								data: Object.assign({}, i.data, e.data)
							}) : e, t
						}), {}), Object.keys(r).map((function(t) {
							return r[t]
						}))));
						return a.orderedModifiers = c.filter((function(t) {
							return t.enabled
						})), a.orderedModifiers.forEach((function(t) {
							var e = t.name,
								i = t.options,
								s = void 0 === i ? {} : i,
								n = t.effect;
							if ("function" == typeof n) {
								var o = n({
									state: a,
									name: e,
									instance: d,
									options: s
								});
								l.push(o || function() {})
							}
						})), d.update()
					},
					forceUpdate: function() {
						if (!c) {
							var t = a.elements,
								e = t.reference,
								i = t.popper;
							if (ie(e, i)) {
								a.rects = {
									reference: te(e, vt(i), "fixed" === a.options.strategy),
									popper: ft(i)
								}, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
									return a.modifiersData[t.name] = Object.assign({}, t.data)
								}));
								for (var s = 0; s < a.orderedModifiers.length; s++)
									if (!0 !== a.reset) {
										var n = a.orderedModifiers[s],
											o = n.fn,
											r = n.options,
											l = void 0 === r ? {} : r,
											h = n.name;
										"function" == typeof o && (a = o({
											state: a,
											options: l,
											name: h,
											instance: d
										}) || a)
									} else a.reset = !1, s = -1
							}
						}
					},
					update: (n = function() {
						return new Promise((function(t) {
							d.forceUpdate(), t(a)
						}))
					}, function() {
						return r || (r = new Promise((function(t) {
							Promise.resolve().then((function() {
								r = void 0, t(n())
							}))
						}))), r
					}),
					destroy: function() {
						h(), c = !0
					}
				};
			if (!ie(t, e)) return d;

			function h() {
				l.forEach((function(t) {
					return t()
				})), l = []
			}
			return d.setOptions(i).then((function(t) {
				!c && i.onFirstUpdate && i.onFirstUpdate(t)
			})), d
		}
	}
	var ne = se(),
		oe = se({
			defaultModifiers: [Nt, Zt, Ct, ct]
		}),
		re = se({
			defaultModifiers: [Nt, Zt, Ct, ct, Gt, qt, Jt, kt, Qt]
		}),
		ae = Object.freeze({
			__proto__: null,
			popperGenerator: se,
			detectOverflow: Kt,
			createPopperBase: ne,
			createPopper: re,
			createPopperLite: oe,
			top: Q,
			bottom: G,
			right: Z,
			left: J,
			auto: "auto",
			basePlacements: tt,
			start: "start",
			end: "end",
			clippingParents: "clippingParents",
			viewport: "viewport",
			popper: "popper",
			reference: "reference",
			variationPlacements: et,
			placements: it,
			beforeRead: "beforeRead",
			read: "read",
			afterRead: "afterRead",
			beforeMain: "beforeMain",
			main: "main",
			afterMain: "afterMain",
			beforeWrite: "beforeWrite",
			write: "write",
			afterWrite: "afterWrite",
			modifierPhases: st,
			applyStyles: ct,
			arrow: kt,
			computeStyles: Ct,
			eventListeners: Nt,
			flip: qt,
			hide: Qt,
			offset: Gt,
			popperOffsets: Zt,
			preventOverflow: Jt
		});
	const le = new RegExp("ArrowUp|ArrowDown|Escape"),
		ce = g() ? "top-end" : "top-start",
		de = g() ? "top-start" : "top-end",
		he = g() ? "bottom-end" : "bottom-start",
		fe = g() ? "bottom-start" : "bottom-end",
		ue = g() ? "left-start" : "right-start",
		pe = g() ? "right-start" : "left-start",
		ge = {
			offset: [0, 2],
			boundary: "clippingParents",
			reference: "toggle",
			display: "dynamic",
			popperConfig: null
		},
		me = {
			offset: "(array|string|function)",
			boundary: "(string|element)",
			reference: "(string|element|object)",
			display: "string",
			popperConfig: "(null|object|function)"
		};
	class _e extends j {
		constructor(t, e) {
			super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
		}
		static get Default() {
			return ge
		}
		static get DefaultType() {
			return me
		}
		static get DATA_KEY() {
			return "bs.dropdown"
		}
		toggle() {
			if (this._element.disabled || this._element.classList.contains("disabled")) return;
			const t = this._element.classList.contains("show");
			_e.clearMenus(), t || this.show()
		}
		show() {
			if (this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show")) return;
			const t = _e.getParentFromElement(this._element),
				e = {
					relatedTarget: this._element
				};
			if (!N.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
				if (this._inNavbar) B.setDataAttribute(this._menu, "popper", "none");
				else {
					if (void 0 === ae) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
					let e = this._element;
					"parent" === this._config.reference ? e = t : r(this._config.reference) ? (e = this._config.reference, void 0 !== this._config.reference.jquery && (e = this._config.reference[0])) : "object" == typeof this._config.reference && (e = this._config.reference);
					const i = this._getPopperConfig(),
						s = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
					this._popper = re(e, this._menu, i), s && B.setDataAttribute(this._menu, "popper", "static")
				}
				"ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => N.on(t, "mouseover", null, (function() {}))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), N.trigger(this._element, "shown.bs.dropdown", e)
			}
		}
		hide() {
			if (this._element.disabled || this._element.classList.contains("disabled") || !this._menu.classList.contains("show")) return;
			const t = {
				relatedTarget: this._element
			};
			N.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), B.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, "hidden.bs.dropdown", t))
		}
		dispose() {
			N.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null), super.dispose()
		}
		update() {
			this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
		}
		_addEventListeners() {
			N.on(this._element, "click.bs.dropdown", t => {
				t.preventDefault(), this.toggle()
			})
		}
		_getConfig(t) {
			if (t = {
					...this.constructor.Default,
					...B.getDataAttributes(this._element),
					...t
				}, l("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
			return t
		}
		_getMenuElement() {
			return H.next(this._element, ".dropdown-menu")[0]
		}
		_getPlacement() {
			const t = this._element.parentNode;
			if (t.classList.contains("dropend")) return ue;
			if (t.classList.contains("dropstart")) return pe;
			const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
			return t.classList.contains("dropup") ? e ? de : ce : e ? fe : he
		}
		_detectNavbar() {
			return null !== this._element.closest(".navbar")
		}
		_getOffset() {
			const {
				offset: t
			} = this._config;
			return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
		}
		_getPopperConfig() {
			const t = {
				placement: this._getPlacement(),
				modifiers: [{
					name: "preventOverflow",
					options: {
						boundary: this._config.boundary
					}
				}, {
					name: "offset",
					options: {
						offset: this._getOffset()
					}
				}]
			};
			return "static" === this._config.display && (t.modifiers = [{
				name: "applyStyles",
				enabled: !1
			}]), {
				...t,
				..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
			}
		}
		static dropdownInterface(t, e) {
			let i = b.get(t, "bs.dropdown");
			if (i || (i = new _e(t, "object" == typeof e ? e : null)), "string" == typeof e) {
				if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
				i[e]()
			}
		}
		static jQueryInterface(t) {
			return this.each((function() {
				_e.dropdownInterface(this, t)
			}))
		}
		static clearMenus(t) {
			if (t) {
				if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
				if (/input|select|textarea|form/i.test(t.target.tagName)) return
			}
			const e = H.find('[data-bs-toggle="dropdown"]');
			for (let i = 0, s = e.length; i < s; i++) {
				const s = b.get(e[i], "bs.dropdown"),
					n = {
						relatedTarget: e[i]
					};
				if (t && "click" === t.type && (n.clickEvent = t), !s) continue;
				const o = s._menu;
				if (e[i].classList.contains("show")) {
					if (t) {
						if ([s._element].some(e => t.composedPath().includes(e))) continue;
						if ("keyup" === t.type && "Tab" === t.key && o.contains(t.target)) continue
					}
					N.trigger(e[i], "hide.bs.dropdown", n).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => N.off(t, "mouseover", null, (function() {}))), e[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), o.classList.remove("show"), e[i].classList.remove("show"), B.removeDataAttribute(o, "popper"), N.trigger(e[i], "hidden.bs.dropdown", n))
				}
			}
		}
		static getParentFromElement(t) {
			return s(t) || t.parentNode
		}
		static dataApiKeydownHandler(t) {
			if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !le.test(t.key)) return;
			if (t.preventDefault(), t.stopPropagation(), this.disabled || this.classList.contains("disabled")) return;
			const e = _e.getParentFromElement(this),
				i = this.classList.contains("show");
			if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : H.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void _e.clearMenus();
			if (!i && ("ArrowUp" === t.key || "ArrowDown" === t.key)) return void(this.matches('[data-bs-toggle="dropdown"]') ? this : H.prev(this, '[data-bs-toggle="dropdown"]')[0]).click();
			if (!i || "Space" === t.key) return void _e.clearMenus();
			const s = H.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(c);
			if (!s.length) return;
			let n = s.indexOf(t.target);
			"ArrowUp" === t.key && n > 0 && n--, "ArrowDown" === t.key && n < s.length - 1 && n++, n = -1 === n ? 0 : n, s[n].focus()
		}
	}
	N.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', _e.dataApiKeydownHandler), N.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", _e.dataApiKeydownHandler), N.on(document, "click.bs.dropdown.data-api", _e.clearMenus), N.on(document, "keyup.bs.dropdown.data-api", _e.clearMenus), N.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) {
		t.preventDefault(), _e.dropdownInterface(this)
	})), m("dropdown", _e);
	const be = {
			backdrop: !0,
			keyboard: !0,
			focus: !0
		},
		ve = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			focus: "boolean"
		};
	class ye extends j {
		constructor(t, e) {
			super(t), this._config = this._getConfig(e), this._dialog = H.findOne(".modal-dialog", this._element), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
		}
		static get Default() {
			return be
		}
		static get DATA_KEY() {
			return "bs.modal"
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t)
		}
		show(t) {
			if (this._isShown || this._isTransitioning) return;
			this._isAnimated() && (this._isTransitioning = !0);
			const e = N.trigger(this._element, "show.bs.modal", {
				relatedTarget: t
			});
			this._isShown || e.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), N.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), N.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
				N.one(this._element, "mouseup.dismiss.bs.modal", t => {
					t.target === this._element && (this._ignoreBackdropClick = !0)
				})
			}), this._showBackdrop(() => this._showElement(t)))
		}
		hide(t) {
			if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
			if (N.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
			this._isShown = !1;
			const e = this._isAnimated();
			if (e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), N.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), N.off(this._element, "click.dismiss.bs.modal"), N.off(this._dialog, "mousedown.dismiss.bs.modal"), e) {
				const t = n(this._element);
				N.one(this._element, "transitionend", t => this._hideModal(t)), a(this._element, t)
			} else this._hideModal()
		}
		dispose() {
			[window, this._element, this._dialog].forEach(t => N.off(t, ".bs.modal")), super.dispose(), N.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
		}
		handleUpdate() {
			this._adjustDialog()
		}
		_getConfig(t) {
			return t = {
				...be,
				...t
			}, l("modal", t, ve), t
		}
		_showElement(t) {
			const e = this._isAnimated(),
				i = H.findOne(".modal-body", this._dialog);
			this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
			const s = () => {
				this._config.focus && this._element.focus(), this._isTransitioning = !1, N.trigger(this._element, "shown.bs.modal", {
					relatedTarget: t
				})
			};
			if (e) {
				const t = n(this._dialog);
				N.one(this._dialog, "transitionend", s), a(this._dialog, t)
			} else s()
		}
		_enforceFocus() {
			N.off(document, "focusin.bs.modal"), N.on(document, "focusin.bs.modal", t => {
				document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
			})
		}
		_setEscapeEvent() {
			this._isShown ? N.on(this._element, "keydown.dismiss.bs.modal", t => {
				this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
			}) : N.off(this._element, "keydown.dismiss.bs.modal")
		}
		_setResizeEvent() {
			this._isShown ? N.on(window, "resize.bs.modal", () => this._adjustDialog()) : N.off(window, "resize.bs.modal")
		}
		_hideModal() {
			this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(() => {
				document.body.classList.remove("modal-open"), this._resetAdjustments(), this._resetScrollbar(), N.trigger(this._element, "hidden.bs.modal")
			})
		}
		_removeBackdrop() {
			this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
		}
		_showBackdrop(t) {
			const e = this._isAnimated();
			if (this._isShown && this._config.backdrop) {
				if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", e && this._backdrop.classList.add("fade"), document.body.appendChild(this._backdrop), N.on(this._element, "click.dismiss.bs.modal", t => {
						this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === this._config.backdrop ? this._triggerBackdropTransition() : this.hide())
					}), e && u(this._backdrop), this._backdrop.classList.add("show"), !e) return void t();
				const i = n(this._backdrop);
				N.one(this._backdrop, "transitionend", t), a(this._backdrop, i)
			} else if (!this._isShown && this._backdrop) {
				this._backdrop.classList.remove("show");
				const i = () => {
					this._removeBackdrop(), t()
				};
				if (e) {
					const t = n(this._backdrop);
					N.one(this._backdrop, "transitionend", i), a(this._backdrop, t)
				} else i()
			} else t()
		}
		_isAnimated() {
			return this._element.classList.contains("fade")
		}
		_triggerBackdropTransition() {
			if (N.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
			const t = this._element.scrollHeight > document.documentElement.clientHeight;
			t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
			const e = n(this._dialog);
			N.off(this._element, "transitionend"), N.one(this._element, "transitionend", () => {
				this._element.classList.remove("modal-static"), t || (N.one(this._element, "transitionend", () => {
					this._element.style.overflowY = ""
				}), a(this._element, e))
			}), a(this._element, e), this._element.focus()
		}
		_adjustDialog() {
			const t = this._element.scrollHeight > document.documentElement.clientHeight;
			(!this._isBodyOverflowing && t && !g() || this._isBodyOverflowing && !t && g()) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !g() || !this._isBodyOverflowing && t && g()) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
		}
		_resetAdjustments() {
			this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
		}
		_checkScrollbar() {
			const t = document.body.getBoundingClientRect();
			this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
		}
		_setScrollbar() {
			this._isBodyOverflowing && (this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", t => t + this._scrollbarWidth), this._setElementAttributes(".sticky-top", "marginRight", t => t - this._scrollbarWidth), this._setElementAttributes("body", "paddingRight", t => t + this._scrollbarWidth)), document.body.classList.add("modal-open")
		}
		_setElementAttributes(t, e, i) {
			H.find(t).forEach(t => {
				if (t !== document.body && window.innerWidth > t.clientWidth + this._scrollbarWidth) return;
				const s = t.style[e],
					n = window.getComputedStyle(t)[e];
				B.setDataAttribute(t, e, s), t.style[e] = i(Number.parseFloat(n)) + "px"
			})
		}
		_resetScrollbar() {
			this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight"), this._resetElementAttributes("body", "paddingRight")
		}
		_resetElementAttributes(t, e) {
			H.find(t).forEach(t => {
				const i = B.getDataAttribute(t, e);
				void 0 === i && t === document.body ? t.style[e] = "" : (B.removeDataAttribute(t, e), t.style[e] = i)
			})
		}
		_getScrollbarWidth() {
			const t = document.createElement("div");
			t.className = "modal-scrollbar-measure", document.body.appendChild(t);
			const e = t.getBoundingClientRect().width - t.clientWidth;
			return document.body.removeChild(t), e
		}
		static jQueryInterface(t, e) {
			return this.each((function() {
				let i = b.get(this, "bs.modal");
				const s = {
					...be,
					...B.getDataAttributes(this),
					..."object" == typeof t && t ? t : {}
				};
				if (i || (i = new ye(this, s)), "string" == typeof t) {
					if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
					i[t](e)
				}
			}))
		}
	}
	N.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
		const e = s(this);
		"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), N.one(e, "show.bs.modal", t => {
			t.defaultPrevented || N.one(e, "hidden.bs.modal", () => {
				c(this) && this.focus()
			})
		});
		let i = b.get(e, "bs.modal");
		if (!i) {
			const t = {
				...B.getDataAttributes(e),
				...B.getDataAttributes(this)
			};
			i = new ye(e, t)
		}
		i.toggle(this)
	})), m("modal", ye);
	const we = () => {
			const t = document.documentElement.clientWidth;
			return Math.abs(window.innerWidth - t)
		},
		Ee = (t, e, i) => {
			const s = we();
			H.find(t).forEach(t => {
				if (t !== document.body && window.innerWidth > t.clientWidth + s) return;
				const n = t.style[e],
					o = window.getComputedStyle(t)[e];
				B.setDataAttribute(t, e, n), t.style[e] = i(Number.parseFloat(o)) + "px"
			})
		},
		Te = (t, e) => {
			H.find(t).forEach(t => {
				const i = B.getDataAttribute(t, e);
				void 0 === i && t === document.body ? t.style.removeProperty(e) : (B.removeDataAttribute(t, e), t.style[e] = i)
			})
		},
		Ae = {
			backdrop: !0,
			keyboard: !0,
			scroll: !1
		},
		Le = {
			backdrop: "boolean",
			keyboard: "boolean",
			scroll: "boolean"
		};
	class Oe extends j {
		constructor(t, e) {
			super(t), this._config = this._getConfig(e), this._isShown = !1, this._addEventListeners()
		}
		static get Default() {
			return Ae
		}
		static get DATA_KEY() {
			return "bs.offcanvas"
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t)
		}
		show(t) {
			this._isShown || N.trigger(this._element, "show.bs.offcanvas", {
				relatedTarget: t
			}).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._config.backdrop && document.body.classList.add("offcanvas-backdrop"), this._config.scroll || ((t = we()) => {
				document.body.style.overflow = "hidden", Ee(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight", e => e + t), Ee(".sticky-top", "marginRight", e => e - t), Ee("body", "paddingRight", e => e + t)
			})(), this._element.classList.add("offcanvas-toggling"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), setTimeout(() => {
				this._element.classList.remove("offcanvas-toggling"), N.trigger(this._element, "shown.bs.offcanvas", {
					relatedTarget: t
				}), this._enforceFocusOnElement(this._element)
			}, n(this._element)))
		}
		hide() {
			this._isShown && (N.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._element.classList.add("offcanvas-toggling"), N.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), setTimeout(() => {
				this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.backdrop && document.body.classList.remove("offcanvas-backdrop"), this._config.scroll || (document.body.style.overflow = "auto", Te(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight"), Te(".sticky-top", "marginRight"), Te("body", "paddingRight")), N.trigger(this._element, "hidden.bs.offcanvas"), this._element.classList.remove("offcanvas-toggling")
			}, n(this._element))))
		}
		_getConfig(t) {
			return t = {
				...Ae,
				...B.getDataAttributes(this._element),
				..."object" == typeof t ? t : {}
			}, l("offcanvas", t, Le), t
		}
		_enforceFocusOnElement(t) {
			N.off(document, "focusin.bs.offcanvas"), N.on(document, "focusin.bs.offcanvas", e => {
				document === e.target || t === e.target || t.contains(e.target) || t.focus()
			}), t.focus()
		}
		_addEventListeners() {
			N.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), N.on(document, "keydown", t => {
				this._config.keyboard && "Escape" === t.key && this.hide()
			}), N.on(document, "click.bs.offcanvas.data-api", t => {
				const e = H.findOne(i(t.target));
				this._element.contains(t.target) || e === this._element || this.hide()
			})
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = b.get(this, "bs.offcanvas") || new Oe(this, "object" == typeof t ? t : {});
				if ("string" == typeof t) {
					if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
					e[t](this)
				}
			}))
		}
	}
	N.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
		const e = s(this);
		if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
		N.one(e, "hidden.bs.offcanvas", () => {
			c(this) && this.focus()
		});
		const i = H.findOne(".offcanvas.show, .offcanvas-toggling");
		i && i !== e || (b.get(e, "bs.offcanvas") || new Oe(e)).toggle(this)
	})), N.on(window, "load.bs.offcanvas.data-api", () => {
		H.find(".offcanvas.show").forEach(t => (b.get(t, "bs.offcanvas") || new Oe(t)).show())
	}), m("offcanvas", Oe);
	const ke = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
		De = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
		xe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
		Ce = (t, e) => {
			const i = t.nodeName.toLowerCase();
			if (e.includes(i)) return !ke.has(i) || Boolean(De.test(t.nodeValue) || xe.test(t.nodeValue));
			const s = e.filter(t => t instanceof RegExp);
			for (let t = 0, e = s.length; t < e; t++)
				if (s[t].test(i)) return !0;
			return !1
		};

	function Se(t, e, i) {
		if (!t.length) return t;
		if (i && "function" == typeof i) return i(t);
		const s = (new window.DOMParser).parseFromString(t, "text/html"),
			n = Object.keys(e),
			o = [].concat(...s.body.querySelectorAll("*"));
		for (let t = 0, i = o.length; t < i; t++) {
			const i = o[t],
				s = i.nodeName.toLowerCase();
			if (!n.includes(s)) {
				i.parentNode.removeChild(i);
				continue
			}
			const r = [].concat(...i.attributes),
				a = [].concat(e["*"] || [], e[s] || []);
			r.forEach(t => {
				Ce(t, a) || i.removeAttribute(t.nodeName)
			})
		}
		return s.body.innerHTML
	}
	const Ne = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
		je = new Set(["sanitize", "allowList", "sanitizeFn"]),
		Pe = {
			animation: "boolean",
			template: "string",
			title: "(string|element|function)",
			trigger: "string",
			delay: "(number|object)",
			html: "boolean",
			selector: "(string|boolean)",
			placement: "(string|function)",
			offset: "(array|string|function)",
			container: "(string|element|boolean)",
			fallbackPlacements: "array",
			boundary: "(string|element)",
			customClass: "(string|function)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			allowList: "object",
			popperConfig: "(null|object|function)"
		},
		Ie = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: g() ? "left" : "right",
			BOTTOM: "bottom",
			LEFT: g() ? "right" : "left"
		},
		Me = {
			animation: !0,
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			selector: !1,
			placement: "top",
			offset: [0, 0],
			container: !1,
			fallbackPlacements: ["top", "right", "bottom", "left"],
			boundary: "clippingParents",
			customClass: "",
			sanitize: !0,
			sanitizeFn: null,
			allowList: {
				"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
				a: ["target", "href", "title", "rel"],
				area: [],
				b: [],
				br: [],
				col: [],
				code: [],
				div: [],
				em: [],
				hr: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				i: [],
				img: ["src", "srcset", "alt", "title", "width", "height"],
				li: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				u: [],
				ul: []
			},
			popperConfig: null
		},
		Re = {
			HIDE: "hide.bs.tooltip",
			HIDDEN: "hidden.bs.tooltip",
			SHOW: "show.bs.tooltip",
			SHOWN: "shown.bs.tooltip",
			INSERTED: "inserted.bs.tooltip",
			CLICK: "click.bs.tooltip",
			FOCUSIN: "focusin.bs.tooltip",
			FOCUSOUT: "focusout.bs.tooltip",
			MOUSEENTER: "mouseenter.bs.tooltip",
			MOUSELEAVE: "mouseleave.bs.tooltip"
		};
	class Be extends j {
		constructor(t, e) {
			if (void 0 === ae) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
			super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.config = this._getConfig(e), this.tip = null, this._setListeners()
		}
		static get Default() {
			return Me
		}
		static get NAME() {
			return "tooltip"
		}
		static get DATA_KEY() {
			return "bs.tooltip"
		}
		static get Event() {
			return Re
		}
		static get EVENT_KEY() {
			return ".bs.tooltip"
		}
		static get DefaultType() {
			return Pe
		}
		enable() {
			this._isEnabled = !0
		}
		disable() {
			this._isEnabled = !1
		}
		toggleEnabled() {
			this._isEnabled = !this._isEnabled
		}
		toggle(t) {
			if (this._isEnabled)
				if (t) {
					const e = this._initializeOnDelegatedTarget(t);
					e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
				} else {
					if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
					this._enter(null, this)
				}
		}
		dispose() {
			clearTimeout(this._timeout), N.off(this._element, this.constructor.EVENT_KEY), N.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, super.dispose()
		}
		show() {
			if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
			if (!this.isWithContent() || !this._isEnabled) return;
			const e = N.trigger(this._element, this.constructor.Event.SHOW),
				i = h(this._element),
				s = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
			if (e.defaultPrevented || !s) return;
			const o = this.getTipElement(),
				r = t(this.constructor.NAME);
			o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade");
			const l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement,
				c = this._getAttachment(l);
			this._addAttachmentClass(c);
			const d = this._getContainer();
			b.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (d.appendChild(o), N.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = re(this._element, o, this._getPopperConfig(c)), o.classList.add("show");
			const f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
			f && o.classList.add(...f.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
				N.on(t, "mouseover", (function() {}))
			});
			const u = () => {
				const t = this._hoverState;
				this._hoverState = null, N.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this)
			};
			if (this.tip.classList.contains("fade")) {
				const t = n(this.tip);
				N.one(this.tip, "transitionend", u), a(this.tip, t)
			} else u()
		}
		hide() {
			if (!this._popper) return;
			const t = this.getTipElement(),
				e = () => {
					this._isWithActiveTrigger() || ("show" !== this._hoverState && t.parentNode && t.parentNode.removeChild(t), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
				};
			if (!N.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
				if (t.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => N.off(t, "mouseover", f)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
					const i = n(t);
					N.one(t, "transitionend", e), a(t, i)
				} else e();
				this._hoverState = ""
			}
		}
		update() {
			null !== this._popper && this._popper.update()
		}
		isWithContent() {
			return Boolean(this.getTitle())
		}
		getTipElement() {
			if (this.tip) return this.tip;
			const t = document.createElement("div");
			return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
		}
		setContent() {
			const t = this.getTipElement();
			this.setElementContent(H.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
		}
		setElementContent(t, e) {
			if (null !== t) return "object" == typeof e && r(e) ? (e.jquery && (e = e[0]), void(this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this.config.html ? (this.config.sanitize && (e = Se(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
		}
		getTitle() {
			let t = this._element.getAttribute("data-bs-original-title");
			return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t
		}
		updateAttachment(t) {
			return "right" === t ? "end" : "left" === t ? "start" : t
		}
		_initializeOnDelegatedTarget(t, e) {
			const i = this.constructor.DATA_KEY;
			return (e = e || b.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), b.set(t.delegateTarget, i, e)), e
		}
		_getOffset() {
			const {
				offset: t
			} = this.config;
			return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
		}
		_getPopperConfig(t) {
			const e = {
				placement: t,
				modifiers: [{
					name: "flip",
					options: {
						altBoundary: !0,
						fallbackPlacements: this.config.fallbackPlacements
					}
				}, {
					name: "offset",
					options: {
						offset: this._getOffset()
					}
				}, {
					name: "preventOverflow",
					options: {
						boundary: this.config.boundary
					}
				}, {
					name: "arrow",
					options: {
						element: `.${this.constructor.NAME}-arrow`
					}
				}, {
					name: "onChange",
					enabled: !0,
					phase: "afterWrite",
					fn: t => this._handlePopperPlacementChange(t)
				}],
				onFirstUpdate: t => {
					t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
				}
			};
			return {
				...e,
				..."function" == typeof this.config.popperConfig ? this.config.popperConfig(e) : this.config.popperConfig
			}
		}
		_addAttachmentClass(t) {
			this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
		}
		_getContainer() {
			return !1 === this.config.container ? document.body : r(this.config.container) ? this.config.container : H.findOne(this.config.container)
		}
		_getAttachment(t) {
			return Ie[t.toUpperCase()]
		}
		_setListeners() {
			this.config.trigger.split(" ").forEach(t => {
				if ("click" === t) N.on(this._element, this.constructor.Event.CLICK, this.config.selector, t => this.toggle(t));
				else if ("manual" !== t) {
					const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
						i = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
					N.on(this._element, e, this.config.selector, t => this._enter(t)), N.on(this._element, i, this.config.selector, t => this._leave(t))
				}
			}), this._hideModalHandler = () => {
				this._element && this.hide()
			}, N.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = {
				...this.config,
				trigger: "manual",
				selector: ""
			} : this._fixTitle()
		}
		_fixTitle() {
			const t = this._element.getAttribute("title"),
				e = typeof this._element.getAttribute("data-bs-original-title");
			(t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
		}
		_enter(t, e) {
			e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(() => {
				"show" === e._hoverState && e.show()
			}, e.config.delay.show) : e.show())
		}
		_leave(t, e) {
			e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(() => {
				"out" === e._hoverState && e.hide()
			}, e.config.delay.hide) : e.hide())
		}
		_isWithActiveTrigger() {
			for (const t in this._activeTrigger)
				if (this._activeTrigger[t]) return !0;
			return !1
		}
		_getConfig(t) {
			const e = B.getDataAttributes(this._element);
			return Object.keys(e).forEach(t => {
				je.has(t) && delete e[t]
			}), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof(t = {
				...this.constructor.Default,
				...e,
				..."object" == typeof t && t ? t : {}
			}).delay && (t.delay = {
				show: t.delay,
				hide: t.delay
			}), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.allowList, t.sanitizeFn)), t
		}
		_getDelegateConfig() {
			const t = {};
			if (this.config)
				for (const e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
			return t
		}
		_cleanTipClass() {
			const t = this.getTipElement(),
				e = t.getAttribute("class").match(Ne);
			null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
		}
		_handlePopperPlacementChange(t) {
			const {
				state: e
			} = t;
			e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
		}
		static jQueryInterface(t) {
			return this.each((function() {
				let e = b.get(this, "bs.tooltip");
				const i = "object" == typeof t && t;
				if ((e || !/dispose|hide/.test(t)) && (e || (e = new Be(this, i)), "string" == typeof t)) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	m("tooltip", Be);
	const He = new RegExp("(^|\\s)bs-popover\\S+", "g"),
		We = {
			...Be.Default,
			placement: "right",
			offset: [0, 8],
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		},
		Ue = {
			...Be.DefaultType,
			content: "(string|element|function)"
		},
		$e = {
			HIDE: "hide.bs.popover",
			HIDDEN: "hidden.bs.popover",
			SHOW: "show.bs.popover",
			SHOWN: "shown.bs.popover",
			INSERTED: "inserted.bs.popover",
			CLICK: "click.bs.popover",
			FOCUSIN: "focusin.bs.popover",
			FOCUSOUT: "focusout.bs.popover",
			MOUSEENTER: "mouseenter.bs.popover",
			MOUSELEAVE: "mouseleave.bs.popover"
		};
	class Fe extends Be {
		static get Default() {
			return We
		}
		static get NAME() {
			return "popover"
		}
		static get DATA_KEY() {
			return "bs.popover"
		}
		static get Event() {
			return $e
		}
		static get EVENT_KEY() {
			return ".bs.popover"
		}
		static get DefaultType() {
			return Ue
		}
		isWithContent() {
			return this.getTitle() || this._getContent()
		}
		setContent() {
			const t = this.getTipElement();
			this.setElementContent(H.findOne(".popover-header", t), this.getTitle());
			let e = this._getContent();
			"function" == typeof e && (e = e.call(this._element)), this.setElementContent(H.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
		}
		_addAttachmentClass(t) {
			this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
		}
		_getContent() {
			return this._element.getAttribute("data-bs-content") || this.config.content
		}
		_cleanTipClass() {
			const t = this.getTipElement(),
				e = t.getAttribute("class").match(He);
			null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
		}
		static jQueryInterface(t) {
			return this.each((function() {
				let e = b.get(this, "bs.popover");
				const i = "object" == typeof t ? t : null;
				if ((e || !/dispose|hide/.test(t)) && (e || (e = new Fe(this, i), b.set(this, "bs.popover", e)), "string" == typeof t)) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	m("popover", Fe);
	const ze = {
			offset: 10,
			method: "auto",
			target: ""
		},
		Ke = {
			offset: "number",
			method: "string",
			target: "(string|element)"
		};
	class Ye extends j {
		constructor(t, e) {
			super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, N.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
		}
		static get Default() {
			return ze
		}
		static get DATA_KEY() {
			return "bs.scrollspy"
		}
		refresh() {
			const t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
				e = "auto" === this._config.method ? t : this._config.method,
				s = "position" === e ? this._getScrollTop() : 0;
			this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), H.find(this._selector).map(t => {
				const n = i(t),
					o = n ? H.findOne(n) : null;
				if (o) {
					const t = o.getBoundingClientRect();
					if (t.width || t.height) return [B[e](o).top + s, n]
				}
				return null
			}).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
				this._offsets.push(t[0]), this._targets.push(t[1])
			})
		}
		dispose() {
			super.dispose(), N.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
		}
		_getConfig(e) {
			if ("string" != typeof(e = {
					...ze,
					..."object" == typeof e && e ? e : {}
				}).target && r(e.target)) {
				let {
					id: i
				} = e.target;
				i || (i = t("scrollspy"), e.target.id = i), e.target = "#" + i
			}
			return l("scrollspy", e, Ke), e
		}
		_getScrollTop() {
			return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
		}
		_getScrollHeight() {
			return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
		}
		_getOffsetHeight() {
			return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
		}
		_process() {
			const t = this._getScrollTop() + this._config.offset,
				e = this._getScrollHeight(),
				i = this._config.offset + e - this._getOffsetHeight();
			if (this._scrollHeight !== e && this.refresh(), t >= i) {
				const t = this._targets[this._targets.length - 1];
				this._activeTarget !== t && this._activate(t)
			} else {
				if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
				for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
			}
		}
		_activate(t) {
			this._activeTarget = t, this._clear();
			const e = this._selector.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
				i = H.findOne(e.join(","));
			i.classList.contains("dropdown-item") ? (H.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"), i.classList.add("active")) : (i.classList.add("active"), H.parents(i, ".nav, .list-group").forEach(t => {
				H.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), H.prev(t, ".nav-item").forEach(t => {
					H.children(t, ".nav-link").forEach(t => t.classList.add("active"))
				})
			})), N.trigger(this._scrollElement, "activate.bs.scrollspy", {
				relatedTarget: t
			})
		}
		_clear() {
			H.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"))
		}
		static jQueryInterface(t) {
			return this.each((function() {
				let e = b.get(this, "bs.scrollspy");
				if (e || (e = new Ye(this, "object" == typeof t && t)), "string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	N.on(window, "load.bs.scrollspy.data-api", () => {
		H.find('[data-bs-spy="scroll"]').forEach(t => new Ye(t, B.getDataAttributes(t)))
	}), m("scrollspy", Ye);
	class qe extends j {
		static get DATA_KEY() {
			return "bs.tab"
		}
		show() {
			if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || d(this._element)) return;
			let t;
			const e = s(this._element),
				i = this._element.closest(".nav, .list-group");
			if (i) {
				const e = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
				t = H.find(e, i), t = t[t.length - 1]
			}
			const n = t ? N.trigger(t, "hide.bs.tab", {
				relatedTarget: this._element
			}) : null;
			if (N.trigger(this._element, "show.bs.tab", {
					relatedTarget: t
				}).defaultPrevented || null !== n && n.defaultPrevented) return;
			this._activate(this._element, i);
			const o = () => {
				N.trigger(t, "hidden.bs.tab", {
					relatedTarget: this._element
				}), N.trigger(this._element, "shown.bs.tab", {
					relatedTarget: t
				})
			};
			e ? this._activate(e, e.parentNode, o) : o()
		}
		_activate(t, e, i) {
			const s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? H.children(e, ".active") : H.find(":scope > li > .active", e))[0],
				o = i && s && s.classList.contains("fade"),
				r = () => this._transitionComplete(t, s, i);
			if (s && o) {
				const t = n(s);
				s.classList.remove("show"), N.one(s, "transitionend", r), a(s, t)
			} else r()
		}
		_transitionComplete(t, e, i) {
			if (e) {
				e.classList.remove("active");
				const t = H.findOne(":scope > .dropdown-menu .active", e.parentNode);
				t && t.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
			}
			t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), u(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && H.find(".dropdown-toggle").forEach(t => t.classList.add("active")), t.setAttribute("aria-expanded", !0)), i && i()
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = b.get(this, "bs.tab") || new qe(this);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	N.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
		t.preventDefault(), (b.get(this, "bs.tab") || new qe(this)).show()
	})), m("tab", qe);
	const Ve = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		},
		Xe = {
			animation: !0,
			autohide: !0,
			delay: 5e3
		};
	class Qe extends j {
		constructor(t, e) {
			super(t), this._config = this._getConfig(e), this._timeout = null, this._setListeners()
		}
		static get DefaultType() {
			return Ve
		}
		static get Default() {
			return Xe
		}
		static get DATA_KEY() {
			return "bs.toast"
		}
		show() {
			if (N.trigger(this._element, "show.bs.toast").defaultPrevented) return;
			this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
			const t = () => {
				this._element.classList.remove("showing"), this._element.classList.add("show"), N.trigger(this._element, "shown.bs.toast"), this._config.autohide && (this._timeout = setTimeout(() => {
					this.hide()
				}, this._config.delay))
			};
			if (this._element.classList.remove("hide"), u(this._element), this._element.classList.add("showing"), this._config.animation) {
				const e = n(this._element);
				N.one(this._element, "transitionend", t), a(this._element, e)
			} else t()
		}
		hide() {
			if (!this._element.classList.contains("show")) return;
			if (N.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
			const t = () => {
				this._element.classList.add("hide"), N.trigger(this._element, "hidden.bs.toast")
			};
			if (this._element.classList.remove("show"), this._config.animation) {
				const e = n(this._element);
				N.one(this._element, "transitionend", t), a(this._element, e)
			} else t()
		}
		dispose() {
			this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), N.off(this._element, "click.dismiss.bs.toast"), super.dispose(), this._config = null
		}
		_getConfig(t) {
			return t = {
				...Xe,
				...B.getDataAttributes(this._element),
				..."object" == typeof t && t ? t : {}
			}, l("toast", t, this.constructor.DefaultType), t
		}
		_setListeners() {
			N.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide())
		}
		_clearTimeout() {
			clearTimeout(this._timeout), this._timeout = null
		}
		static jQueryInterface(t) {
			return this.each((function() {
				let e = b.get(this, "bs.toast");
				if (e || (e = new Qe(this, "object" == typeof t && t)), "string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t](this)
				}
			}))
		}
	}
	return m("toast", Qe), {
		Alert: P,
		Button: I,
		Carousel: Y,
		Collapse: X,
		Dropdown: _e,
		Modal: ye,
		Offcanvas: Oe,
		Popover: Fe,
		ScrollSpy: Ye,
		Tab: qe,
		Toast: Qe,
		Tooltip: Be
	}
}));

(function($) {
	"use strict";
	$.ajaxChimp = {
		responses: {
			"We have sent you a confirmation email": 0,
			"Please enter a value": 1,
			"An email address must contain a single @": 2,
			"The domain portion of the email address is invalid (the portion after the @: )": 3,
			"The username portion of the email address is invalid (the portion before the @: )": 4,
			"This email address looks fake or invalid. Please enter a real email address": 5
		},
		translations: {
			en: null
		},
		init: function(selector, options) {
			$(selector).ajaxChimp(options)
		}
	};
	$.fn.ajaxChimp = function(options) {
		$(this).each(function(i, elem) {
			var form = $(elem);
			var email = form.find("input[type=email]");
			var label = form.find("label[for=" + email.attr("id") + "]");
			var settings = $.extend({
				url: form.attr("action"),
				language: "en"
			}, options);
			var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
			form.attr("novalidate", "true");
			email.attr("name", "EMAIL");
			form.submit(function() {
				var msg;

				function successCallback(resp) {
					if (resp.result === "success") {
						msg = "We have sent you a confirmation email";
						label.removeClass("error").addClass("valid");
						email.removeClass("error").addClass("valid")
					} else {
						email.removeClass("valid").addClass("error");
						label.removeClass("valid").addClass("error");
						var index = -1;
						try {
							var parts = resp.msg.split(" - ", 2);
							if (parts[1] === undefined) {
								msg = resp.msg
							} else {
								var i = parseInt(parts[0], 10);
								if (i.toString() === parts[0]) {
									index = parts[0];
									msg = parts[1]
								} else {
									index = -1;
									msg = resp.msg
								}
							}
						} catch (e) {
							index = -1;
							msg = resp.msg
						}
					}
					if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
						msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
					}
					label.html(msg);
					label.show(2e3);
					if (settings.callback) {
						settings.callback(resp)
					}
				}
				var data = {};
				var dataArray = form.serializeArray();
				$.each(dataArray, function(index, item) {
					data[item.name] = item.value
				});
				$.ajax({
					url: url,
					data: data,
					success: successCallback,
					dataType: "jsonp",
					error: function(resp, text) {
						console.log("mailchimp ajax submit error: " + text)
					}
				});
				var submitMsg = "Submitting...";
				if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
					submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
				}
				label.html(submitMsg).show(2e3);
				return false
			})
		});
		return this
	}
})(jQuery);
! function(e) {
	e.fn.appear = function(a, r) {
		var p = e.extend({
			data: void 0,
			one: !0,
			accX: 0,
			accY: 0
		}, r);
		return this.each(function() {
			var r = e(this);
			if (r.appeared = !1, a) {
				var n = e(window),
					t = function() {
						if (r.is(":visible")) {
							var e = n.scrollLeft(),
								a = n.scrollTop(),
								t = r.offset(),
								c = t.left,
								i = t.top,
								o = p.accX,
								f = p.accY,
								s = r.height(),
								l = n.height(),
								h = r.width(),
								d = n.width();
							i + s + f >= a && i <= a + l + f && c + h + o >= e && c <= e + d + o ? r.appeared || r.trigger("appear", p.data) : r.appeared = !1
						} else r.appeared = !1
					},
					c = function() {
						if (r.appeared = !0, p.one) {
							n.unbind("scroll", t);
							var c = e.inArray(t, e.fn.appear.checks);
							c >= 0 && e.fn.appear.checks.splice(c, 1)
						}
						a.apply(this, arguments)
					};
				p.one ? r.one("appear", p.data, c) : r.bind("appear", p.data, c), n.scroll(t), e.fn.appear.checks.push(t), t()
			} else r.trigger("appear", p.data)
		})
	}, e.extend(e.fn.appear, {
		checks: [],
		timeout: null,
		checkAll: function() {
			var a = e.fn.appear.checks.length;
			if (a > 0)
				for (; a--;) e.fn.appear.checks[a]()
		},
		run: function() {
			e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
		}
	}), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(a, r) {
		var p = e.fn[r];
		p && (e.fn[r] = function() {
			var a = p.apply(this, arguments);
			return e.fn.appear.run(), a
		})
	})
}(jQuery);

! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
	var b, c, d, e, f, g, h = "Close",
		i = "BeforeClose",
		j = "AfterClose",
		k = "BeforeAppend",
		l = "MarkupParse",
		m = "Open",
		n = "Change",
		o = "mfp",
		p = "." + o,
		q = "mfp-ready",
		r = "mfp-removing",
		s = "mfp-prevent-close",
		t = function() {},
		u = !!window.jQuery,
		v = a(window),
		w = function(a, c) {
			b.ev.on(o + a + p, c)
		},
		x = function(b, c, d, e) {
			var f = document.createElement("div");
			return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
		},
		y = function(c, d) {
			b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
		},
		z = function(c) {
			return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
		},
		A = function() {
			a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
		},
		B = function() {
			var a = document.createElement("p").style,
				b = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== a.transition) return !0;
			for (; b.length;)
				if (b.pop() + "Transition" in a) return !0;
			return !1
		};
	t.prototype = {
		constructor: t,
		init: function() {
			var c = navigator.appVersion;
			b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
		},
		open: function(c) {
			var e;
			if (c.isObj === !1) {
				b.items = c.items.toArray(), b.index = 0;
				var g, h = c.items;
				for (e = 0; e < h.length; e++)
					if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
						b.index = e;
						break
					}
			} else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
			if (b.isOpen) return void b.updateItemHTML();
			b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
				b.close()
			}), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
				b._checkIfClose(a.target) && b.close()
			}), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
			var i = a.magnificPopup.modules;
			for (e = 0; e < i.length; e++) {
				var j = i[e];
				j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
			}
			y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
				c.close_replaceWith = z(d.type)
			}), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
				overflow: b.st.overflowY,
				overflowX: "hidden",
				overflowY: b.st.overflowY
			}) : b.wrap.css({
				top: v.scrollTop(),
				position: "absolute"
			}), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
				height: d.height(),
				position: "absolute"
			}), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
				27 === a.keyCode && b.close()
			}), v.on("resize" + p, function() {
				b.updateSize()
			}), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
			var k = b.wH = v.height(),
				n = {};
			if (b.fixedContentPos && b._hasScrollBar(k)) {
				var o = b._getScrollbarSize();
				o && (n.marginRight = o)
			}
			b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
			var r = b.st.mainClass;
			return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
				b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
			}, 16), b.isOpen = !0, b.updateSize(k), y(m), c
		},
		close: function() {
			b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
				b._close()
			}, b.st.removalDelay)) : b._close())
		},
		_close: function() {
			y(h);
			var c = r + " " + q + " ";
			if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
				var e = {
					marginRight: ""
				};
				b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
			}
			d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
		},
		updateSize: function(a) {
			if (b.isIOS) {
				var c = document.documentElement.clientWidth / window.innerWidth,
					d = window.innerHeight * c;
				b.wrap.css("height", d), b.wH = d
			} else b.wH = a || v.height();
			b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
		},
		updateItemHTML: function() {
			var c = b.items[b.index];
			b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
			var d = c.type;
			if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
				var f = b.st[d] ? b.st[d].markup : !1;
				y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
			}
			e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
			var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
			b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
		},
		appendContent: function(a, c) {
			b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
		},
		parseEl: function(c) {
			var d, e = b.items[c];
			if (e.tagName ? e = {
					el: a(e)
				} : (d = e.type, e = {
					data: e,
					src: e.src
				}), e.el) {
				for (var f = b.types, g = 0; g < f.length; g++)
					if (e.el.hasClass("mfp-" + f[g])) {
						d = f[g];
						break
					} e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
			}
			return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
		},
		addGroup: function(a, c) {
			var d = function(d) {
				d.mfpEl = this, b._openClick(d, a, c)
			};
			c || (c = {});
			var e = "click.magnificPopup";
			c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
		},
		_openClick: function(c, d, e) {
			var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
			if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
				var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
				if (g)
					if (a.isFunction(g)) {
						if (!g.call(b)) return !0
					} else if (v.width() < g) return !0;
				c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
			}
		},
		updateStatus: function(a, d) {
			if (b.preloader) {
				c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
				var e = {
					status: a,
					text: d
				};
				y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
					a.stopImmediatePropagation()
				}), b.container.addClass("mfp-s-" + a), c = a
			}
		},
		_checkIfClose: function(c) {
			if (!a(c).hasClass(s)) {
				var d = b.st.closeOnContentClick,
					e = b.st.closeOnBgClick;
				if (d && e) return !0;
				if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
				if (c === b.content[0] || a.contains(b.content[0], c)) {
					if (d) return !0
				} else if (e && a.contains(document, c)) return !0;
				return !1
			}
		},
		_addClassToMFP: function(a) {
			b.bgOverlay.addClass(a), b.wrap.addClass(a)
		},
		_removeClassFromMFP: function(a) {
			this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
		},
		_hasScrollBar: function(a) {
			return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
		},
		_setFocus: function() {
			(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
		},
		_onFocusIn: function(c) {
			return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
		},
		_parseMarkup: function(b, c, d) {
			var e;
			d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
				if (void 0 === d || d === !1) return !0;
				if (e = c.split("_"), e.length > 1) {
					var f = b.find(p + "-" + e[0]);
					if (f.length > 0) {
						var g = e[1];
						"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
					}
				} else b.find(p + "-" + c).html(d)
			})
		},
		_getScrollbarSize: function() {
			if (void 0 === b.scrollbarSize) {
				var a = document.createElement("div");
				a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
			}
			return b.scrollbarSize
		}
	}, a.magnificPopup = {
		instance: null,
		proto: t.prototype,
		modules: [],
		open: function(b, c) {
			return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
		},
		close: function() {
			return a.magnificPopup.instance && a.magnificPopup.instance.close()
		},
		registerModule: function(b, c) {
			c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			prependTo: null,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading...",
			autoFocusLast: !0
		}
	}, a.fn.magnificPopup = function(c) {
		A();
		var d = a(this);
		if ("string" == typeof c)
			if ("open" === c) {
				var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
					g = parseInt(arguments[1], 10) || 0;
				f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
					mfpEl: e
				}, d, f)
			} else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
		else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
		return d
	};
	var C, D, E, F = "inline",
		G = function() {
			E && (D.after(E.addClass(C)).detach(), E = null)
		};
	a.magnificPopup.registerModule(F, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function() {
				b.types.push(F), w(h + "." + F, function() {
					G()
				})
			},
			getInline: function(c, d) {
				if (G(), c.src) {
					var e = b.st.inline,
						f = a(c.src);
					if (f.length) {
						var g = f[0].parentNode;
						g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
					} else b.updateStatus("error", e.tNotFound), f = a("<div>");
					return c.inlineElement = f, f
				}
				return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
			}
		}
	});
	var H, I = "ajax",
		J = function() {
			H && a(document.body).removeClass(H)
		},
		K = function() {
			J(), b.req && b.req.abort()
		};
	a.magnificPopup.registerModule(I, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function() {
				b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
			},
			getAjax: function(c) {
				H && a(document.body).addClass(H), b.updateStatus("loading");
				var d = a.extend({
					url: c.src,
					success: function(d, e, f) {
						var g = {
							data: d,
							xhr: f
						};
						y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
							b.wrap.addClass(q)
						}, 16), b.updateStatus("ready"), y("AjaxContentAdded")
					},
					error: function() {
						J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
					}
				}, b.st.ajax.settings);
				return b.req = a.ajax(d), ""
			}
		}
	});
	var L, M = function(c) {
		if (c.data && void 0 !== c.data.title) return c.data.title;
		var d = b.st.image.titleSrc;
		if (d) {
			if (a.isFunction(d)) return d.call(b, c);
			if (c.el) return c.el.attr(d) || ""
		}
		return ""
	};
	a.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function() {
				var c = b.st.image,
					d = ".image";
				b.types.push("image"), w(m + d, function() {
					"image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
				}), w(h + d, function() {
					c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
				}), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
			},
			resizeImage: function() {
				var a = b.currItem;
				if (a && a.img && b.st.image.verticalFit) {
					var c = 0;
					b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
				}
			},
			_onImageHasSize: function(a) {
				a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
			},
			findImageSize: function(a) {
				var c = 0,
					d = a.img[0],
					e = function(f) {
						L && clearInterval(L), L = setInterval(function() {
							return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
						}, f)
					};
				e(1)
			},
			getImage: function(c, d) {
				var e = 0,
					f = function() {
						c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
					},
					g = function() {
						c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
					},
					h = b.st.image,
					i = d.find(".mfp-img");
				if (i.length) {
					var j = document.createElement("img");
					j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
				}
				return b._parseMarkup(d, {
					title: M(c),
					img_replaceWith: c.img
				}, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
			}
		}
	});
	var N, O = function() {
		return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
	};
	a.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function(a) {
				return a.is("img") ? a : a.find("img")
			}
		},
		proto: {
			initZoom: function() {
				var a, c = b.st.zoom,
					d = ".zoom";
				if (c.enabled && b.supportsTransition) {
					var e, f, g = c.duration,
						j = function(a) {
							var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
								d = "all " + c.duration / 1e3 + "s " + c.easing,
								e = {
									position: "fixed",
									zIndex: 9999,
									left: 0,
									top: 0,
									"-webkit-backface-visibility": "hidden"
								},
								f = "transition";
							return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
						},
						k = function() {
							b.content.css("visibility", "visible")
						};
					w("BuildControls" + d, function() {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
							f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
								f.css(b._getOffset(!0)), e = setTimeout(function() {
									k(), setTimeout(function() {
										f.remove(), a = f = null, y("ZoomAnimationEnded")
									}, 16)
								}, g)
							}, 16)
						}
					}), w(i + d, function() {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.st.removalDelay = g, !a) {
								if (a = b._getItemToZoom(), !a) return;
								f = j(a)
							}
							f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
								f.css(b._getOffset())
							}, 16)
						}
					}), w(h + d, function() {
						b._allowZoom() && (k(), f && f.remove(), a = null)
					})
				}
			},
			_allowZoom: function() {
				return "image" === b.currItem.type
			},
			_getItemToZoom: function() {
				return b.currItem.hasSize ? b.currItem.img : !1
			},
			_getOffset: function(c) {
				var d;
				d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
				var e = d.offset(),
					f = parseInt(d.css("padding-top"), 10),
					g = parseInt(d.css("padding-bottom"), 10);
				e.top -= a(window).scrollTop() - f;
				var h = {
					width: d.width(),
					height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
				};
				return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
			}
		}
	});
	var P = "iframe",
		Q = "//about:blank",
		R = function(a) {
			if (b.currTemplate[P]) {
				var c = b.currTemplate[P].find("iframe");
				c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
			}
		};
	a.magnificPopup.registerModule(P, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function() {
				b.types.push(P), w("BeforeChange", function(a, b, c) {
					b !== c && (b === P ? R() : c === P && R(!0))
				}), w(h + "." + P, function() {
					R()
				})
			},
			getIframe: function(c, d) {
				var e = c.src,
					f = b.st.iframe;
				a.each(f.patterns, function() {
					return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
				});
				var g = {};
				return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
			}
		}
	});
	var S = function(a) {
			var c = b.items.length;
			return a > c - 1 ? a - c : 0 > a ? c + a : a
		},
		T = function(a, b, c) {
			return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
		};
	a.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function() {
				var c = b.st.gallery,
					e = ".mfp-gallery";
				return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
					c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
						return b.items.length > 1 ? (b.next(), !1) : void 0
					}), d.on("keydown" + e, function(a) {
						37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
					})
				}), w("UpdateStatus" + e, function(a, c) {
					c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
				}), w(l + e, function(a, d, e, f) {
					var g = b.items.length;
					e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
				}), w("BuildControls" + e, function() {
					if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
						var d = c.arrowMarkup,
							e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
							f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
						e.click(function() {
							b.prev()
						}), f.click(function() {
							b.next()
						}), b.container.append(e.add(f))
					}
				}), w(n + e, function() {
					b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
						b.preloadNearbyImages(), b._preloadTimeout = null
					}, 16)
				}), void w(h + e, function() {
					d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
				})) : !1
			},
			next: function() {
				b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
			},
			prev: function() {
				b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
			},
			goTo: function(a) {
				b.direction = a >= b.index, b.index = a, b.updateItemHTML()
			},
			preloadNearbyImages: function() {
				var a, c = b.st.gallery.preload,
					d = Math.min(c[0], b.items.length),
					e = Math.min(c[1], b.items.length);
				for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
				for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
			},
			_preloadItem: function(c) {
				if (c = S(c), !b.items[c].preloaded) {
					var d = b.items[c];
					d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
						d.hasSize = !0
					}).on("error.mfploader", function() {
						d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
					}).attr("src", d.src)), d.preloaded = !0
				}
			}
		}
	});
	var U = "retina";
	a.magnificPopup.registerModule(U, {
		options: {
			replaceSrc: function(a) {
				return a.src.replace(/\.\w+$/, function(a) {
					return "@2x" + a
				})
			},
			ratio: 1
		},
		proto: {
			initRetina: function() {
				if (window.devicePixelRatio > 1) {
					var a = b.st.retina,
						c = a.ratio;
					c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
						b.img.css({
							"max-width": b.img[0].naturalWidth / c,
							width: "100%"
						})
					}), w("ElementParse." + U, function(b, d) {
						d.src = a.replaceSrc(d, c)
					}))
				}
			}
		}
	}), A()
});

(function() {
	var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = [].slice;
	q = '<span class="odometer-value"></span>', n = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + q + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + n + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", h = /^\(?([^)]*)\)?(?:(.)(d+))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, k = 1e3 / i, b = 1e3 / a, o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, p = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s = function(a) {
		var b;
		return b = document.createElement("div"), b.innerHTML = a, b.children[0]
	}, v = function(a, b) {
		return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ")
	}, r = function(a, b) {
		return v(a, b), a.className += " " + b
	}, z = function(a, b) {
		var c;
		return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0
	}, u = function() {
		var a, b;
		return null != (a = null != (b = window.performance) ? "function" == typeof b.now ? b.now() : void 0 : void 0) ? a : +new Date
	}, x = function(a, b) {
		return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a)
	}, A = function(a) {
		return 0 > a ? Math.ceil(a) : Math.floor(a)
	}, t = function(a) {
		return a - x(a)
	}, C = !1, (B = function() {
		var a, b, c, d, e;
		if (!C && null != window.jQuery) {
			for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(function(a) {
				var b;
				return b = window.jQuery.fn[a], window.jQuery.fn[a] = function(a) {
					var c;
					return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a)
				}
			}(a));
			return e
		}
	})(), setTimeout(B, 0), m = function() {
		function a(b) {
			var c, d, e, g, h, i, l, m, n, o, p = this;
			if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
			this.el.odometer = this, m = a.options;
			for (d in m) g = m[d], null == this.options[d] && (this.options[d] = g);
			null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / k / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();
			try {
				for (o = ["innerHTML", "innerText", "textContent"], i = 0, l = o.length; l > i; i++) e = o[i], null != this.el[e] && ! function(a) {
					return Object.defineProperty(p.el, a, {
						get: function() {
							var b;
							return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent
						},
						set: function(a) {
							return p.update(a)
						}
					})
				}(e)
			} catch (q) {
				c = q, this.watchForMutations()
			}
		}
		return a.prototype.renderInside = function() {
			return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
		}, a.prototype.watchForMutations = function() {
			var a, b = this;
			if (null != l) try {
				return null == this.observer && (this.observer = new l(function() {
					var a;
					return a = b.el.innerText, b.renderInside(), b.render(b.value), b.update(a)
				})), this.watchMutations = !0, this.startWatchingMutations()
			} catch (c) {
				a = c
			}
		}, a.prototype.startWatchingMutations = function() {
			return this.watchMutations ? this.observer.observe(this.el, {
				childList: !0
			}) : void 0
		}, a.prototype.stopWatchingMutations = function() {
			var a;
			return null != (a = this.observer) ? a.disconnect() : void 0
		}, a.prototype.cleanValue = function(a) {
			var b;
			return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision)
		}, a.prototype.bindTransitionEnd = function() {
			var a, b, c, d, e, f, g = this;
			if (!this.transitionEndBound) {
				for (this.transitionEndBound = !0, b = !1, e = o.split(" "), f = [], c = 0, d = e.length; d > c; c++) a = e[c], f.push(this.el.addEventListener(a, function() {
					return b ? !0 : (b = !0, setTimeout(function() {
						return g.render(), b = !1, z(g.el, "odometerdone")
					}, 0), !0)
				}, !1));
				return f
			}
		}, a.prototype.resetFormat = function() {
			var a, b, d, e, f, g, i, j;
			if (a = null != (i = this.options.format) ? i : c, a || (a = "d"), d = h.exec(a), !d) throw new Error("Odometer: Unparsable digit format");
			return j = d.slice(1, 4), g = j[0], f = j[1], b = j[2], e = (null != b ? b.length : void 0) || 0, this.format = {
				repeating: g,
				radix: f,
				precision: e
			}
		}, a.prototype.render = function(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m;
			for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", g = this.options.theme, b = this.el.className.split(" "), f = [], i = 0, k = b.length; k > i; i++) c = b[i], c.length && ((e = /^odometer-theme-(.+)$/.exec(c)) ? g = e[1] : /^odometer(-|$)/.test(c) || f.push(c));
			for (f.push("odometer"), p || f.push("odometer-no-transitions"), f.push(g ? "odometer-theme-" + g : "odometer-auto-theme"), this.el.className = f.join(" "), this.ribbons = {}, this.digits = [], h = !this.format.precision || !t(a) || !1, m = a.toString().split("").reverse(), j = 0, l = m.length; l > j; j++) d = m[j], "." === d && (h = !0), this.addDigit(d, h);
			return this.startWatchingMutations()
		}, a.prototype.update = function(a) {
			var b, c = this;
			return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? r(this.el, "odometer-animating-up") : r(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function() {
				return c.el.offsetHeight, r(c.el, "odometer-animating")
			}, 0), this.value = a) : void 0
		}, a.prototype.renderDigit = function() {
			return s(d)
		}, a.prototype.insertDigit = function(a, b) {
			return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a)
		}, a.prototype.addSpacer = function(a, b, c) {
			var d;
			return d = s(g), d.innerHTML = a, c && r(d, c), this.insertDigit(d, b)
		}, a.prototype.addDigit = function(a, b) {
			var c, d, e, f;
			if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");
			if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
			if (b)
				for (e = !1;;) {
					if (!this.format.repeating.length) {
						if (e) throw new Error("Bad odometer format without digits");
						this.resetFormat(), e = !0
					}
					if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;
					this.addSpacer(c)
				}
			return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d)
		}, a.prototype.animate = function(a) {
			return p && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a)
		}, a.prototype.animateCount = function(a) {
			var c, d, e, f, g, h = this;
			if (d = +a - this.value) return f = e = u(), c = this.value, (g = function() {
				var i, j, k;
				return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(g) : setTimeout(g, b))
			})()
		}, a.prototype.getDigitCount = function() {
			var a, b, c, d, e, f;
			for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) c = d[a], d[a] = Math.abs(c);
			return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10))
		}, a.prototype.getFractionalDigitCount = function() {
			var a, b, c, d, e, f, g;
			for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) d = e[a], e[a] = d.toString(), c = b.exec(e[a]), e[a] = null == c ? 0 : c[1].length;
			return Math.max.apply(Math, e)
		}, a.prototype.resetDigits = function() {
			return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
		}, a.prototype.animateSlide = function(a) {
			var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, B, C, D, E;
			if (s = this.value, j = this.getFractionalDigitCount(s, a), j && (a *= Math.pow(10, j), s *= Math.pow(10, j)), d = a - s) {
				for (this.bindTransitionEnd(), f = this.getDigitCount(s, a), g = [], b = 0, m = v = 0; f >= 0 ? f > v : v > f; m = f >= 0 ? ++v : --v) {
					if (t = A(s / Math.pow(10, f - m - 1)), i = A(a / Math.pow(10, f - m - 1)), h = i - t, Math.abs(h) > this.MAX_VALUES) {
						for (l = [], n = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = t; h > 0 && i > c || 0 > h && c > i;) l.push(Math.round(c)), c += n;
						l[l.length - 1] !== i && l.push(i), b++
					} else l = function() {
						E = [];
						for (var a = t; i >= t ? i >= a : a >= i; i >= t ? a++ : a--) E.push(a);
						return E
					}.apply(this);
					for (m = w = 0, y = l.length; y > w; m = ++w) k = l[m], l[m] = Math.abs(k % 10);
					g.push(l)
				}
				for (this.resetDigits(), D = g.reverse(), m = x = 0, z = D.length; z > x; m = ++x)
					for (l = D[m], this.digits[m] || this.addDigit(" ", m >= j), null == (u = this.ribbons)[m] && (u[m] = this.digits[m].querySelector(".odometer-ribbon-inner")), this.ribbons[m].innerHTML = "", 0 > d && (l = l.reverse()), o = C = 0, B = l.length; B > C; o = ++C) k = l[o], q = document.createElement("div"), q.className = "odometer-value", q.innerHTML = k, this.ribbons[m].appendChild(q), o === l.length - 1 && r(q, "odometer-last-value"), 0 === o && r(q, "odometer-first-value");
				return 0 > t && this.addDigit("-"), p = this.inside.querySelector(".odometer-radix-mark"), null != p && p.parent.removeChild(p), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0
			}
		}, a
	}(), m.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function() {
		var a, b, c, d, e;
		if (window.odometerOptions) {
			d = window.odometerOptions, e = [];
			for (a in d) b = d[a], e.push(null != (c = m.options)[a] ? (c = m.options)[a] : c[a] = b);
			return e
		}
	}, 0), m.init = function() {
		var a, b, c, d, e, f;
		if (null != document.querySelectorAll) {
			for (b = document.querySelectorAll(m.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) a = b[c], f.push(a.odometer = new m({
				el: a,
				value: null != (e = a.innerText) ? e : a.textContent
			}));
			return f
		}
	}, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function() {
		return "complete" === document.readyState && m.options.auto !== !1 && m.init(), null != D ? D.apply(this, arguments) : void 0
	}) : document.addEventListener("DOMContentLoaded", function() {
		return m.options.auto !== !1 ? m.init() : void 0
	}, !1), "function" == typeof define && define.amd ? define(["jquery"], function() {
		return m
	}) : typeof exports === !1 ? module.exports = m : window.Odometer = m
}).call(this);

! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function() {
	"use strict";

	function e(e) {
		return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
	}

	function t(i, s) {
		void 0 === i && (i = {}), void 0 === s && (s = {}), Object.keys(s).forEach((function(a) {
			void 0 === i[a] ? i[a] = s[a] : e(s[a]) && e(i[a]) && Object.keys(s[a]).length > 0 && t(i[a], s[a])
		}))
	}
	var i = "undefined" != typeof document ? document : {},
		s = {
			body: {},
			addEventListener: function() {},
			removeEventListener: function() {},
			activeElement: {
				blur: function() {},
				nodeName: ""
			},
			querySelector: function() {
				return null
			},
			querySelectorAll: function() {
				return []
			},
			getElementById: function() {
				return null
			},
			createEvent: function() {
				return {
					initEvent: function() {}
				}
			},
			createElement: function() {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function() {},
					getElementsByTagName: function() {
						return []
					}
				}
			},
			createElementNS: function() {
				return {}
			},
			importNode: function() {
				return null
			},
			location: {
				hash: "",
				host: "",
				hostname: "",
				href: "",
				origin: "",
				pathname: "",
				protocol: "",
				search: ""
			}
		};
	t(i, s);
	var a = "undefined" != typeof window ? window : {};
	t(a, {
		document: s,
		navigator: {
			userAgent: ""
		},
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		},
		history: {
			replaceState: function() {},
			pushState: function() {},
			go: function() {},
			back: function() {}
		},
		CustomEvent: function() {
			return this
		},
		addEventListener: function() {},
		removeEventListener: function() {},
		getComputedStyle: function() {
			return {
				getPropertyValue: function() {
					return ""
				}
			}
		},
		Image: function() {},
		Date: function() {},
		screen: {},
		setTimeout: function() {},
		clearTimeout: function() {},
		matchMedia: function() {
			return {}
		}
	});
	var r = function(e) {
		for (var t = 0; t < e.length; t += 1) this[t] = e[t];
		return this.length = e.length, this
	};

	function n(e, t) {
		var s = [],
			n = 0;
		if (e && !t && e instanceof r) return e;
		if (e)
			if ("string" == typeof e) {
				var o, l, d = e.trim();
				if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
					var h = "div";
					for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = i.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) s.push(l.childNodes[n])
				} else
					for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && s.push(o[n])
			} else if (e.nodeType || e === a || e === i) s.push(e);
		else if (e.length > 0 && e[0].nodeType)
			for (n = 0; n < e.length; n += 1) s.push(e[n]);
		return new r(s)
	}

	function o(e) {
		for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
		return t
	}
	n.fn = r.prototype, n.Class = r, n.Dom7 = r;
	var l = {
		addClass: function(e) {
			if (void 0 === e) return this;
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
			return this
		},
		removeClass: function(e) {
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
			return this
		},
		hasClass: function(e) {
			return !!this[0] && this[0].classList.contains(e)
		},
		toggleClass: function(e) {
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
			return this
		},
		attr: function(e, t) {
			var i = arguments;
			if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
			for (var s = 0; s < this.length; s += 1)
				if (2 === i.length) this[s].setAttribute(e, t);
				else
					for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
			return this
		},
		removeAttr: function(e) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this
		},
		data: function(e, t) {
			var i;
			if (void 0 !== t) {
				for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
				return this
			}
			if (i = this[0]) {
				if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
				var a = i.getAttribute("data-" + e);
				return a || void 0
			}
		},
		transform: function(e) {
			for (var t = 0; t < this.length; t += 1) {
				var i = this[t].style;
				i.webkitTransform = e, i.transform = e
			}
			return this
		},
		transition: function(e) {
			"string" != typeof e && (e += "ms");
			for (var t = 0; t < this.length; t += 1) {
				var i = this[t].style;
				i.webkitTransitionDuration = e, i.transitionDuration = e
			}
			return this
		},
		on: function() {
			for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
			var s = t[0],
				a = t[1],
				r = t[2],
				o = t[3];

			function l(e) {
				var t = e.target;
				if (t) {
					var i = e.target.dom7EventData || [];
					if (i.indexOf(e) < 0 && i.unshift(e), n(t).is(a)) r.apply(t, i);
					else
						for (var s = n(t).parents(), o = 0; o < s.length; o += 1) n(s[o]).is(a) && r.apply(s[o], i)
				}
			}

			function d(e) {
				var t = e && e.target && e.target.dom7EventData || [];
				t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
			}
			"function" == typeof t[1] && (s = (e = t)[0], r = e[1], o = e[2], a = void 0), o || (o = !1);
			for (var h, p = s.split(" "), c = 0; c < this.length; c += 1) {
				var u = this[c];
				if (a)
					for (h = 0; h < p.length; h += 1) {
						var v = p[h];
						u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
							listener: r,
							proxyListener: l
						}), u.addEventListener(v, l, o)
					} else
						for (h = 0; h < p.length; h += 1) {
							var f = p[h];
							u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
								listener: r,
								proxyListener: d
							}), u.addEventListener(f, d, o)
						}
			}
			return this
		},
		off: function() {
			for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
			var s = t[0],
				a = t[1],
				r = t[2],
				n = t[3];
			"function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
			for (var o = s.split(" "), l = 0; l < o.length; l += 1)
				for (var d = o[l], h = 0; h < this.length; h += 1) {
					var p = this[h],
						c = void 0;
					if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length)
						for (var u = c.length - 1; u >= 0; u -= 1) {
							var v = c[u];
							r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
						}
				}
			return this
		},
		trigger: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			for (var s = e[0].split(" "), r = e[1], n = 0; n < s.length; n += 1)
				for (var o = s[n], l = 0; l < this.length; l += 1) {
					var d = this[l],
						h = void 0;
					try {
						h = new a.CustomEvent(o, {
							detail: r,
							bubbles: !0,
							cancelable: !0
						})
					} catch (e) {
						(h = i.createEvent("Event")).initEvent(o, !0, !0), h.detail = r
					}
					d.dom7EventData = e.filter((function(e, t) {
						return t > 0
					})), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
				}
			return this
		},
		transitionEnd: function(e) {
			var t, i = ["webkitTransitionEnd", "transitionend"],
				s = this;

			function a(r) {
				if (r.target === this)
					for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
			}
			if (e)
				for (t = 0; t < i.length; t += 1) s.on(i[t], a);
			return this
		},
		outerWidth: function(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		offset: function() {
			if (this.length > 0) {
				var e = this[0],
					t = e.getBoundingClientRect(),
					s = i.body,
					r = e.clientTop || s.clientTop || 0,
					n = e.clientLeft || s.clientLeft || 0,
					o = e === a ? a.scrollY : e.scrollTop,
					l = e === a ? a.scrollX : e.scrollLeft;
				return {
					top: t.top + o - r,
					left: t.left + l - n
				}
			}
			return null
		},
		css: function(e, t) {
			var i;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (i = 0; i < this.length; i += 1)
						for (var s in e) this[i].style[s] = e[s];
					return this
				}
				if (this[0]) return a.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
				return this
			}
			return this
		},
		each: function(e) {
			if (!e) return this;
			for (var t = 0; t < this.length; t += 1)
				if (!1 === e.call(this[t], t, this[t])) return this;
			return this
		},
		html: function(e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this
		},
		text: function(e) {
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this
		},
		is: function(e) {
			var t, s, o = this[0];
			if (!o || void 0 === e) return !1;
			if ("string" == typeof e) {
				if (o.matches) return o.matches(e);
				if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e);
				if (o.msMatchesSelector) return o.msMatchesSelector(e);
				for (t = n(e), s = 0; s < t.length; s += 1)
					if (t[s] === o) return !0;
				return !1
			}
			if (e === i) return o === i;
			if (e === a) return o === a;
			if (e.nodeType || e instanceof r) {
				for (t = e.nodeType ? [e] : e, s = 0; s < t.length; s += 1)
					if (t[s] === o) return !0;
				return !1
			}
			return !1
		},
		index: function() {
			var e, t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
				return e
			}
		},
		eq: function(e) {
			if (void 0 === e) return this;
			var t, i = this.length;
			return new r(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
		},
		append: function() {
			for (var e, t = [], s = arguments.length; s--;) t[s] = arguments[s];
			for (var a = 0; a < t.length; a += 1) {
				e = t[a];
				for (var n = 0; n < this.length; n += 1)
					if ("string" == typeof e) {
						var o = i.createElement("div");
						for (o.innerHTML = e; o.firstChild;) this[n].appendChild(o.firstChild)
					} else if (e instanceof r)
					for (var l = 0; l < e.length; l += 1) this[n].appendChild(e[l]);
				else this[n].appendChild(e)
			}
			return this
		},
		prepend: function(e) {
			var t, s;
			for (t = 0; t < this.length; t += 1)
				if ("string" == typeof e) {
					var a = i.createElement("div");
					for (a.innerHTML = e, s = a.childNodes.length - 1; s >= 0; s -= 1) this[t].insertBefore(a.childNodes[s], this[t].childNodes[0])
				} else if (e instanceof r)
				for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]);
			else this[t].insertBefore(e, this[t].childNodes[0]);
			return this
		},
		next: function(e) {
			return this.length > 0 ? e ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new r([this[0].nextElementSibling]) : new r([]) : this[0].nextElementSibling ? new r([this[0].nextElementSibling]) : new r([]) : new r([])
		},
		nextAll: function(e) {
			var t = [],
				i = this[0];
			if (!i) return new r([]);
			for (; i.nextElementSibling;) {
				var s = i.nextElementSibling;
				e ? n(s).is(e) && t.push(s) : t.push(s), i = s
			}
			return new r(t)
		},
		prev: function(e) {
			if (this.length > 0) {
				var t = this[0];
				return e ? t.previousElementSibling && n(t.previousElementSibling).is(e) ? new r([t.previousElementSibling]) : new r([]) : t.previousElementSibling ? new r([t.previousElementSibling]) : new r([])
			}
			return new r([])
		},
		prevAll: function(e) {
			var t = [],
				i = this[0];
			if (!i) return new r([]);
			for (; i.previousElementSibling;) {
				var s = i.previousElementSibling;
				e ? n(s).is(e) && t.push(s) : t.push(s), i = s
			}
			return new r(t)
		},
		parent: function(e) {
			for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
			return n(o(t))
		},
		parents: function(e) {
			for (var t = [], i = 0; i < this.length; i += 1)
				for (var s = this[i].parentNode; s;) e ? n(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
			return n(o(t))
		},
		closest: function(e) {
			var t = this;
			return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
		},
		find: function(e) {
			for (var t = [], i = 0; i < this.length; i += 1)
				for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);
			return new r(t)
		},
		children: function(e) {
			for (var t = [], i = 0; i < this.length; i += 1)
				for (var s = this[i].childNodes, a = 0; a < s.length; a += 1) e ? 1 === s[a].nodeType && n(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]);
			return new r(o(t))
		},
		filter: function(e) {
			for (var t = [], i = 0; i < this.length; i += 1) e.call(this[i], i, this[i]) && t.push(this[i]);
			return new r(t)
		},
		remove: function() {
			for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this
		},
		add: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var i, s, a = this;
			for (i = 0; i < e.length; i += 1) {
				var r = n(e[i]);
				for (s = 0; s < r.length; s += 1) a[a.length] = r[s], a.length += 1
			}
			return a
		},
		styles: function() {
			return this[0] ? a.getComputedStyle(this[0], null) : {}
		}
	};
	Object.keys(l).forEach((function(e) {
		n.fn[e] = n.fn[e] || l[e]
	}));
	var d = {
			deleteProps: function(e) {
				var t = e;
				Object.keys(t).forEach((function(e) {
					try {
						t[e] = null
					} catch (e) {}
					try {
						delete t[e]
					} catch (e) {}
				}))
			},
			nextTick: function(e, t) {
				return void 0 === t && (t = 0), setTimeout(e, t)
			},
			now: function() {
				return Date.now()
			},
			getTranslate: function(e, t) {
				var i, s, r;
				void 0 === t && (t = "x");
				var n = a.getComputedStyle(e, null);
				return a.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map((function(e) {
					return e.replace(",", ".")
				})).join(", ")), r = new a.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
			},
			parseUrlQuery: function(e) {
				var t, i, s, r, n = {},
					o = e || a.location.href;
				if ("string" == typeof o && o.length)
					for (r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
							return "" !== e
						}))).length, t = 0; t < r; t += 1) s = i[t].replace(/#\S+/g, "").split("="), n[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
				return n
			},
			isObject: function(e) {
				return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
			},
			extend: function() {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
					var a = e[s];
					if (null != a)
						for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
							var l = r[n],
								h = Object.getOwnPropertyDescriptor(a, l);
							void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l])
						}
				}
				return i
			}
		},
		h = {
			touch: !!("ontouchstart" in a || a.DocumentTouch && i instanceof a.DocumentTouch),
			pointerEvents: !!a.PointerEvent && "maxTouchPoints" in a.navigator && a.navigator.maxTouchPoints >= 0,
			observer: "MutationObserver" in a || "WebkitMutationObserver" in a,
			passiveListener: function() {
				var e = !1;
				try {
					var t = Object.defineProperty({}, "passive", {
						get: function() {
							e = !0
						}
					});
					a.addEventListener("testPassiveListener", null, t)
				} catch (e) {}
				return e
			}(),
			gestures: "ongesturestart" in a
		},
		p = function(e) {
			void 0 === e && (e = {});
			var t = this;
			t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
				t.on(e, t.params.on[e])
			}))
		},
		c = {
			components: {
				configurable: !0
			}
		};
	p.prototype.on = function(e, t, i) {
		var s = this;
		if ("function" != typeof t) return s;
		var a = i ? "unshift" : "push";
		return e.split(" ").forEach((function(e) {
			s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
		})), s
	}, p.prototype.once = function(e, t, i) {
		var s = this;
		if ("function" != typeof t) return s;

		function a() {
			for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
			s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i)
		}
		return a.f7proxy = t, s.on(e, a, i)
	}, p.prototype.off = function(e, t) {
		var i = this;
		return i.eventsListeners ? (e.split(" ").forEach((function(e) {
			void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(s, a) {
				(s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
			}))
		})), i) : i
	}, p.prototype.emit = function() {
		for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		var i, s, a, r = this;
		if (!r.eventsListeners) return r;
		"string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
		var n = Array.isArray(i) ? i : i.split(" ");
		return n.forEach((function(e) {
			if (r.eventsListeners && r.eventsListeners[e]) {
				var t = [];
				r.eventsListeners[e].forEach((function(e) {
					t.push(e)
				})), t.forEach((function(e) {
					e.apply(a, s)
				}))
			}
		})), r
	}, p.prototype.useModulesParams = function(e) {
		var t = this;
		t.modules && Object.keys(t.modules).forEach((function(i) {
			var s = t.modules[i];
			s.params && d.extend(e, s.params)
		}))
	}, p.prototype.useModules = function(e) {
		void 0 === e && (e = {});
		var t = this;
		t.modules && Object.keys(t.modules).forEach((function(i) {
			var s = t.modules[i],
				a = e[i] || {};
			s.instance && Object.keys(s.instance).forEach((function(e) {
				var i = s.instance[e];
				t[e] = "function" == typeof i ? i.bind(t) : i
			})), s.on && t.on && Object.keys(s.on).forEach((function(e) {
				t.on(e, s.on[e])
			})), s.create && s.create.bind(t)(a)
		}))
	}, c.components.set = function(e) {
		this.use && this.use(e)
	}, p.installModule = function(e) {
		for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
		var s = this;
		s.prototype.modules || (s.prototype.modules = {});
		var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
		return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach((function(t) {
			s.prototype[t] = e.proto[t]
		})), e.static && Object.keys(e.static).forEach((function(t) {
			s[t] = e.static[t]
		})), e.install && e.install.apply(s, t), s
	}, p.use = function(e) {
		for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
		var s = this;
		return Array.isArray(e) ? (e.forEach((function(e) {
			return s.installModule(e)
		})), s) : s.installModule.apply(s, [e].concat(t))
	}, Object.defineProperties(p, c);
	var u = {
		updateSize: function() {
			var e, t, i = this.$el;
			e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
				width: e,
				height: t,
				size: this.isHorizontal() ? e : t
			}))
		},
		updateSlides: function() {
			var e = this.params,
				t = this.$wrapperEl,
				i = this.size,
				s = this.rtlTranslate,
				r = this.wrongRTL,
				n = this.virtual && e.virtual.enabled,
				o = n ? this.virtual.slides.length : this.slides.length,
				l = t.children("." + this.params.slideClass),
				h = n ? this.virtual.slides.length : l.length,
				p = [],
				c = [],
				u = [];

			function v(t) {
				return !e.cssMode || t !== l.length - 1
			}
			var f = e.slidesOffsetBefore;
			"function" == typeof f && (f = e.slidesOffsetBefore.call(this));
			var m = e.slidesOffsetAfter;
			"function" == typeof m && (m = e.slidesOffsetAfter.call(this));
			var g = this.snapGrid.length,
				b = this.snapGrid.length,
				w = e.spaceBetween,
				y = -f,
				x = 0,
				E = 0;
			if (void 0 !== i) {
				var T, S;
				"string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * i), this.virtualSize = -w, s ? l.css({
					marginLeft: "",
					marginTop: ""
				}) : l.css({
					marginRight: "",
					marginBottom: ""
				}), e.slidesPerColumn > 1 && (T = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
				for (var C, M = e.slidesPerColumn, P = T / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
					S = 0;
					var $ = l.eq(k);
					if (e.slidesPerColumn > 1) {
						var L = void 0,
							I = void 0,
							D = void 0;
						if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
							var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
								A = k - e.slidesPerColumn * e.slidesPerGroup * O,
								G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
							L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * T / M, $.css({
								"-webkit-box-ordinal-group": L,
								"-moz-box-ordinal-group": L,
								"-ms-flex-order": L,
								"-webkit-order": L,
								order: L
							})
						} else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
						$.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px")
					}
					if ("none" !== $.css("display")) {
						if ("auto" === e.slidesPerView) {
							var H = a.getComputedStyle($[0], null),
								B = $[0].style.transform,
								N = $[0].style.webkitTransform;
							if (B && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
							else if (this.isHorizontal()) {
								var X = parseFloat(H.getPropertyValue("width")),
									V = parseFloat(H.getPropertyValue("padding-left")),
									Y = parseFloat(H.getPropertyValue("padding-right")),
									F = parseFloat(H.getPropertyValue("margin-left")),
									W = parseFloat(H.getPropertyValue("margin-right")),
									R = H.getPropertyValue("box-sizing");
								S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
							} else {
								var q = parseFloat(H.getPropertyValue("height")),
									j = parseFloat(H.getPropertyValue("padding-top")),
									K = parseFloat(H.getPropertyValue("padding-bottom")),
									U = parseFloat(H.getPropertyValue("margin-top")),
									_ = parseFloat(H.getPropertyValue("margin-bottom")),
									Z = H.getPropertyValue("box-sizing");
								S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
							}
							B && ($[0].style.transform = B), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S))
						} else S = (i - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), l[k] && (this.isHorizontal() ? l[k].style.width = S + "px" : l[k].style.height = S + "px");
						l[k] && (l[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - i / 2 - w), 0 === k && (y = y - i / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), E % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), (E - Math.min(this.params.slidesPerGroupSkip, E)) % this.params.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, E += 1
					}
				}
				if (this.virtualSize = Math.max(this.virtualSize, i) + m, s && r && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
						width: this.virtualSize + e.spaceBetween + "px"
					}), e.setWrapperSize && (this.isHorizontal() ? t.css({
						width: this.virtualSize + e.spaceBetween + "px"
					}) : t.css({
						height: this.virtualSize + e.spaceBetween + "px"
					})), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
						width: this.virtualSize + e.spaceBetween + "px"
					}) : t.css({
						height: this.virtualSize + e.spaceBetween + "px"
					}), e.centeredSlides)) {
					C = [];
					for (var Q = 0; Q < p.length; Q += 1) {
						var J = p[Q];
						e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J)
					}
					p = C
				}
				if (!e.centeredSlides) {
					C = [];
					for (var ee = 0; ee < p.length; ee += 1) {
						var te = p[ee];
						e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - i && C.push(te)
					}
					p = C, Math.floor(this.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - i)
				}
				if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? s ? l.filter(v).css({
						marginLeft: w + "px"
					}) : l.filter(v).css({
						marginRight: w + "px"
					}) : l.filter(v).css({
						marginBottom: w + "px"
					})), e.centeredSlides && e.centeredSlidesBounds) {
					var ie = 0;
					u.forEach((function(t) {
						ie += t + (e.spaceBetween ? e.spaceBetween : 0)
					}));
					var se = (ie -= e.spaceBetween) - i;
					p = p.map((function(e) {
						return e < 0 ? -f : e > se ? se + m : e
					}))
				}
				if (e.centerInsufficientSlides) {
					var ae = 0;
					if (u.forEach((function(t) {
							ae += t + (e.spaceBetween ? e.spaceBetween : 0)
						})), (ae -= e.spaceBetween) < i) {
						var re = (i - ae) / 2;
						p.forEach((function(e, t) {
							p[t] = e - re
						})), c.forEach((function(e, t) {
							c[t] = e + re
						}))
					}
				}
				d.extend(this, {
					slides: l,
					snapGrid: p,
					slidesGrid: c,
					slidesSizesGrid: u
				}), h !== o && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
			}
		},
		updateAutoHeight: function(e) {
			var t, i = [],
				s = 0;
			if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
				if (this.params.centeredSlides) this.visibleSlides.each((function(e, t) {
					i.push(t)
				}));
				else
					for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
						var a = this.activeIndex + t;
						if (a > this.slides.length) break;
						i.push(this.slides.eq(a)[0])
					} else i.push(this.slides.eq(this.activeIndex)[0]);
			for (t = 0; t < i.length; t += 1)
				if (void 0 !== i[t]) {
					var r = i[t].offsetHeight;
					s = r > s ? r : s
				} s && this.$wrapperEl.css("height", s + "px")
		},
		updateSlidesOffset: function() {
			for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
		},
		updateSlidesProgress: function(e) {
			void 0 === e && (e = this && this.translate || 0);
			var t = this.params,
				i = this.slides,
				s = this.rtlTranslate;
			if (0 !== i.length) {
				void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
				var a = -e;
				s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
				for (var r = 0; r < i.length; r += 1) {
					var o = i[r],
						l = (a + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
					if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
						var d = -(a - o.swiperSlideOffset),
							h = d + this.slidesSizesGrid[r];
						(d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass))
					}
					o.progress = s ? -l : l
				}
				this.visibleSlides = n(this.visibleSlides)
			}
		},
		updateProgress: function(e) {
			if (void 0 === e) {
				var t = this.rtlTranslate ? -1 : 1;
				e = this && this.translate && this.translate * t || 0
			}
			var i = this.params,
				s = this.maxTranslate() - this.minTranslate(),
				a = this.progress,
				r = this.isBeginning,
				n = this.isEnd,
				o = r,
				l = n;
			0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), d.extend(this, {
				progress: a,
				isBeginning: r,
				isEnd: n
			}), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !o && this.emit("reachBeginning toEdge"), n && !l && this.emit("reachEnd toEdge"), (o && !r || l && !n) && this.emit("fromEdge"), this.emit("progress", a)
		},
		updateSlidesClasses: function() {
			var e, t = this.slides,
				i = this.params,
				s = this.$wrapperEl,
				a = this.activeIndex,
				r = this.realIndex,
				n = this.virtual && i.virtual.enabled;
			t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
			var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
			i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
			var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
			i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
		},
		updateActiveIndex: function(e) {
			var t, i = this.rtlTranslate ? this.translate : -this.translate,
				s = this.slidesGrid,
				a = this.snapGrid,
				r = this.params,
				n = this.activeIndex,
				o = this.realIndex,
				l = this.snapIndex,
				h = e;
			if (void 0 === h) {
				for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
				r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
			}
			if (a.indexOf(i) >= 0) t = a.indexOf(i);
			else {
				var c = Math.min(r.slidesPerGroupSkip, h);
				t = c + Math.floor((h - c) / r.slidesPerGroup)
			}
			if (t >= a.length && (t = a.length - 1), h !== n) {
				var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
				d.extend(this, {
					snapIndex: t,
					realIndex: u,
					previousIndex: n,
					activeIndex: h
				}), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
			} else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
		},
		updateClickedSlide: function(e) {
			var t = this.params,
				i = n(e.target).closest("." + t.slideClass)[0],
				s = !1;
			if (i)
				for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
			if (!i || !s) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
			this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(n(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = n(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
		}
	};
	var v = {
		getTranslate: function(e) {
			void 0 === e && (e = this.isHorizontal() ? "x" : "y");
			var t = this.params,
				i = this.rtlTranslate,
				s = this.translate,
				a = this.$wrapperEl;
			if (t.virtualTranslate) return i ? -s : s;
			if (t.cssMode) return s;
			var r = d.getTranslate(a[0], e);
			return i && (r = -r), r || 0
		},
		setTranslate: function(e, t) {
			var i = this.rtlTranslate,
				s = this.params,
				a = this.$wrapperEl,
				r = this.wrapperEl,
				n = this.progress,
				o = 0,
				l = 0;
			this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
			var d = this.maxTranslate() - this.minTranslate();
			(0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
		},
		minTranslate: function() {
			return -this.snapGrid[0]
		},
		maxTranslate: function() {
			return -this.snapGrid[this.snapGrid.length - 1]
		},
		translateTo: function(e, t, i, s, a) {
			var r;
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
			var n = this,
				o = n.params,
				l = n.wrapperEl;
			if (n.animating && o.preventInteractionOnTransition) return !1;
			var d, h = n.minTranslate(),
				p = n.maxTranslate();
			if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
				var c = n.isHorizontal();
				return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0
			}
			return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
				n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
			}), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
		}
	};
	var f = {
		setTransition: function(e, t) {
			this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
		},
		transitionStart: function(e, t) {
			void 0 === e && (e = !0);
			var i = this.activeIndex,
				s = this.params,
				a = this.previousIndex;
			if (!s.cssMode) {
				s.autoHeight && this.updateAutoHeight();
				var r = t;
				if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
					if ("reset" === r) return void this.emit("slideResetTransitionStart");
					this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
				}
			}
		},
		transitionEnd: function(e, t) {
			void 0 === e && (e = !0);
			var i = this.activeIndex,
				s = this.previousIndex,
				a = this.params;
			if (this.animating = !1, !a.cssMode) {
				this.setTransition(0);
				var r = t;
				if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
					if ("reset" === r) return void this.emit("slideResetTransitionEnd");
					this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
				}
			}
		}
	};
	var m = {
		slideTo: function(e, t, i, s) {
			var a;
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
			var r = this,
				n = e;
			n < 0 && (n = 0);
			var o = r.params,
				l = r.snapGrid,
				d = r.slidesGrid,
				h = r.previousIndex,
				p = r.activeIndex,
				c = r.rtlTranslate,
				u = r.wrapperEl;
			if (r.animating && o.preventInteractionOnTransition) return !1;
			var v = Math.min(r.params.slidesPerGroupSkip, n),
				f = v + Math.floor((n - v) / r.params.slidesPerGroup);
			f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
			var m, g = -l[f];
			if (r.updateProgress(g), o.normalizeSlideIndex)
				for (var b = 0; b < d.length; b += 1) - Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
			if (r.initialized && n !== p) {
				if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
				if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1
			}
			if (m = n > p ? "next" : n < p ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
			if (o.cssMode) {
				var w = r.isHorizontal(),
					y = -g;
				return c && (y = u.scrollWidth - u.offsetWidth - y), 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = y : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = y, a.behavior = "smooth", a)) : u[w ? "scrollLeft" : "scrollTop"] = y, !0
			}
			return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
				r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m))
			}), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
		},
		slideToLoop: function(e, t, i, s) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
			var a = e;
			return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
		},
		slideNext: function(e, t, i) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var s = this.params,
				a = this.animating,
				r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
			if (s.loop) {
				if (a) return !1;
				this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
			}
			return this.slideTo(this.activeIndex + r, e, t, i)
		},
		slidePrev: function(e, t, i) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var s = this.params,
				a = this.animating,
				r = this.snapGrid,
				n = this.slidesGrid,
				o = this.rtlTranslate;
			if (s.loop) {
				if (a) return !1;
				this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
			}

			function l(e) {
				return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
			}
			var d, h = l(o ? this.translate : -this.translate),
				p = r.map((function(e) {
					return l(e)
				})),
				c = (n.map((function(e) {
					return l(e)
				})), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
			return void 0 === c && s.cssMode && r.forEach((function(e) {
				!c && h >= e && (c = e)
			})), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
		},
		slideReset: function(e, t, i) {
			return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
		},
		slideToClosest: function(e, t, i, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
			var a = this.activeIndex,
				r = Math.min(this.params.slidesPerGroupSkip, a),
				n = r + Math.floor((a - r) / this.params.slidesPerGroup),
				o = this.rtlTranslate ? this.translate : -this.translate;
			if (o >= this.snapGrid[n]) {
				var l = this.snapGrid[n];
				o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
			} else {
				var d = this.snapGrid[n - 1];
				o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
			}
			return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
		},
		slideToClickedSlide: function() {
			var e, t = this,
				i = t.params,
				s = t.$wrapperEl,
				a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
				r = t.clickedIndex;
			if (i.loop) {
				if (t.animating) return;
				e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick((function() {
					t.slideTo(r)
				}))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick((function() {
					t.slideTo(r)
				}))) : t.slideTo(r)
			} else t.slideTo(r)
		}
	};
	var g = {
		loopCreate: function() {
			var e = this,
				t = e.params,
				s = e.$wrapperEl;
			s.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
			var a = s.children("." + t.slideClass);
			if (t.loopFillGroupWithBlank) {
				var r = t.slidesPerGroup - a.length % t.slidesPerGroup;
				if (r !== t.slidesPerGroup) {
					for (var o = 0; o < r; o += 1) {
						var l = n(i.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
						s.append(l)
					}
					a = s.children("." + t.slideClass)
				}
			}
			"auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
			var d = [],
				h = [];
			a.each((function(t, i) {
				var s = n(i);
				t < e.loopedSlides && h.push(i), t < a.length && t >= a.length - e.loopedSlides && d.push(i), s.attr("data-swiper-slide-index", t)
			}));
			for (var p = 0; p < h.length; p += 1) s.append(n(h[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
			for (var c = d.length - 1; c >= 0; c -= 1) s.prepend(n(d[c].cloneNode(!0)).addClass(t.slideDuplicateClass))
		},
		loopFix: function() {
			this.emit("beforeLoopFix");
			var e, t = this.activeIndex,
				i = this.slides,
				s = this.loopedSlides,
				a = this.allowSlidePrev,
				r = this.allowSlideNext,
				n = this.snapGrid,
				o = this.rtlTranslate;
			this.allowSlidePrev = !0, this.allowSlideNext = !0;
			var l = -n[t] - this.getTranslate();
			if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
			else if (t >= i.length - s) {
				e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
			}
			this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
		},
		loopDestroy: function() {
			var e = this.$wrapperEl,
				t = this.params,
				i = this.slides;
			e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
		}
	};
	var b = {
		setGrabCursor: function(e) {
			if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
				var t = this.el;
				t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
			}
		},
		unsetGrabCursor: function() {
			h.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
		}
	};
	var w, y, x, E, T, S, C, M, P, z, k, $, L, I, D, O = {
			appendSlide: function(e) {
				var t = this.$wrapperEl,
					i = this.params;
				if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
					for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
				else t.append(e);
				i.loop && this.loopCreate(), i.observer && h.observer || this.update()
			},
			prependSlide: function(e) {
				var t = this.params,
					i = this.$wrapperEl,
					s = this.activeIndex;
				t.loop && this.loopDestroy();
				var a = s + 1;
				if ("object" == typeof e && "length" in e) {
					for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
					a = s + e.length
				} else i.prepend(e);
				t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1)
			},
			addSlide: function(e, t) {
				var i = this.$wrapperEl,
					s = this.params,
					a = this.activeIndex;
				s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
				var r = this.slides.length;
				if (e <= 0) this.prependSlide(t);
				else if (e >= r) this.appendSlide(t);
				else {
					for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
						var d = this.slides.eq(l);
						d.remove(), o.unshift(d)
					}
					if ("object" == typeof t && "length" in t) {
						for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
						n = a > e ? a + t.length : a
					} else i.append(t);
					for (var c = 0; c < o.length; c += 1) i.append(o[c]);
					s.loop && this.loopCreate(), s.observer && h.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
				}
			},
			removeSlide: function(e) {
				var t = this.params,
					i = this.$wrapperEl,
					s = this.activeIndex;
				t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
				var a, r = s;
				if ("object" == typeof e && "length" in e) {
					for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
					r = Math.max(r, 0)
				} else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
				t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
			},
			removeAllSlides: function() {
				for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
				this.removeSlide(e)
			}
		},
		A = (w = a.navigator.platform, y = a.navigator.userAgent, x = {
			ios: !1,
			android: !1,
			androidChrome: !1,
			desktop: !1,
			iphone: !1,
			ipod: !1,
			ipad: !1,
			edge: !1,
			ie: !1,
			firefox: !1,
			macos: !1,
			windows: !1,
			cordova: !(!a.cordova && !a.phonegap),
			phonegap: !(!a.cordova && !a.phonegap),
			electron: !1
		}, E = a.screen.width, T = a.screen.height, S = y.match(/(Android);?[\s\/]+([\d.]+)?/), C = y.match(/(iPad).*OS\s([\d_]+)/), M = y.match(/(iPod)(.*OS\s([\d_]+))?/), P = !C && y.match(/(iPhone\sOS|iOS)\s([\d_]+)/), z = y.indexOf("MSIE ") >= 0 || y.indexOf("Trident/") >= 0, k = y.indexOf("Edge/") >= 0, $ = y.indexOf("Gecko/") >= 0 && y.indexOf("Firefox/") >= 0, L = "Win32" === w, I = y.toLowerCase().indexOf("electron") >= 0, D = "MacIntel" === w, !C && D && h.touch && (1024 === E && 1366 === T || 834 === E && 1194 === T || 834 === E && 1112 === T || 768 === E && 1024 === T) && (C = y.match(/(Version)\/([\d.]+)/), D = !1), x.ie = z, x.edge = k, x.firefox = $, S && !L && (x.os = "android", x.osVersion = S[2], x.android = !0, x.androidChrome = y.toLowerCase().indexOf("chrome") >= 0), (C || P || M) && (x.os = "ios", x.ios = !0), P && !M && (x.osVersion = P[2].replace(/_/g, "."), x.iphone = !0), C && (x.osVersion = C[2].replace(/_/g, "."), x.ipad = !0), M && (x.osVersion = M[3] ? M[3].replace(/_/g, ".") : null, x.ipod = !0), x.ios && x.osVersion && y.indexOf("Version/") >= 0 && "10" === x.osVersion.split(".")[0] && (x.osVersion = y.toLowerCase().split("version/")[1].split(" ")[0]), x.webView = !(!(P || C || M) || !y.match(/.*AppleWebKit(?!.*Safari)/i) && !a.navigator.standalone) || a.matchMedia && a.matchMedia("(display-mode: standalone)").matches, x.webview = x.webView, x.standalone = x.webView, x.desktop = !(x.ios || x.android) || I, x.desktop && (x.electron = I, x.macos = D, x.windows = L, x.macos && (x.os = "macos"), x.windows && (x.os = "windows")), x.pixelRatio = a.devicePixelRatio || 1, x);

	function G(e) {
		var t = this.touchEventsData,
			s = this.params,
			r = this.touches;
		if (!this.animating || !s.preventInteractionOnTransition) {
			var o = e;
			o.originalEvent && (o = o.originalEvent);
			var l = n(o.target);
			if (("wrapper" !== s.touchEventsTarget || l.closest(this.wrapperEl).length) && (t.isTouchEvent = "touchstart" === o.type, (t.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!t.isTouchEvent && "button" in o && o.button > 0 || t.isTouched && t.isMoved)))
				if (s.noSwiping && l.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) this.allowClick = !0;
				else if (!s.swipeHandler || l.closest(s.swipeHandler)[0]) {
				r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
				var h = r.currentX,
					p = r.currentY,
					c = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
					u = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
				if (!c || !(h <= u || h >= a.screen.width - u)) {
					if (d.extend(t, {
							isTouched: !0,
							isMoved: !1,
							allowTouchCallbacks: !0,
							isScrolling: void 0,
							startMoving: void 0
						}), r.startX = h, r.startY = p, t.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, s.threshold > 0 && (t.allowThresholdMove = !1), "touchstart" !== o.type) {
						var v = !0;
						l.is(t.formElements) && (v = !1), i.activeElement && n(i.activeElement).is(t.formElements) && i.activeElement !== l[0] && i.activeElement.blur();
						var f = v && this.allowTouchMove && s.touchStartPreventDefault;
						(s.touchStartForcePreventDefault || f) && o.preventDefault()
					}
					this.emit("touchStart", o)
				}
			}
		}
	}

	function H(e) {
		var t = this.touchEventsData,
			s = this.params,
			a = this.touches,
			r = this.rtlTranslate,
			o = e;
		if (o.originalEvent && (o = o.originalEvent), t.isTouched) {
			if (!t.isTouchEvent || "touchmove" === o.type) {
				var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
					h = "touchmove" === o.type ? l.pageX : o.pageX,
					p = "touchmove" === o.type ? l.pageY : o.pageY;
				if (o.preventedByNestedSwiper) return a.startX = h, void(a.startY = p);
				if (!this.allowTouchMove) return this.allowClick = !1, void(t.isTouched && (d.extend(a, {
					startX: h,
					startY: p,
					currentX: h,
					currentY: p
				}), t.touchStartTime = d.now()));
				if (t.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
					if (this.isVertical()) {
						if (p < a.startY && this.translate <= this.maxTranslate() || p > a.startY && this.translate >= this.minTranslate()) return t.isTouched = !1, void(t.isMoved = !1)
					} else if (h < a.startX && this.translate <= this.maxTranslate() || h > a.startX && this.translate >= this.minTranslate()) return;
				if (t.isTouchEvent && i.activeElement && o.target === i.activeElement && n(o.target).is(t.formElements)) return t.isMoved = !0, void(this.allowClick = !1);
				if (t.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
					a.currentX = h, a.currentY = p;
					var c = a.currentX - a.startX,
						u = a.currentY - a.startY;
					if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
						var v;
						if (void 0 === t.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? t.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, t.isScrolling = this.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
						if (t.isScrolling && this.emit("touchMoveOpposite", o), void 0 === t.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (t.startMoving = !0)), t.isScrolling) t.isTouched = !1;
						else if (t.startMoving) {
							this.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), t.isMoved || (s.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), t.isMoved = !0;
							var f = this.isHorizontal() ? c : u;
							a.diff = f, f *= s.touchRatio, r && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", t.currentTranslate = f + t.startTranslate;
							var m = !0,
								g = s.resistanceRatio;
							if (s.touchReleaseOnEdges && (g = 0), f > 0 && t.currentTranslate > this.minTranslate() ? (m = !1, s.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + f, g))) : f < 0 && t.currentTranslate < this.maxTranslate() && (m = !1, s.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - f, g))), m && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), s.threshold > 0) {
								if (!(Math.abs(f) > s.threshold || t.allowThresholdMove)) return void(t.currentTranslate = t.startTranslate);
								if (!t.allowThresholdMove) return t.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, t.currentTranslate = t.startTranslate, void(a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
							}
							s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === t.velocities.length && t.velocities.push({
								position: a[this.isHorizontal() ? "startX" : "startY"],
								time: t.touchStartTime
							}), t.velocities.push({
								position: a[this.isHorizontal() ? "currentX" : "currentY"],
								time: d.now()
							})), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate))
						}
					}
				}
			}
		} else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o)
	}

	function B(e) {
		var t = this,
			i = t.touchEventsData,
			s = t.params,
			a = t.touches,
			r = t.rtlTranslate,
			n = t.$wrapperEl,
			o = t.slidesGrid,
			l = t.snapGrid,
			h = e;
		if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
		s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
		var p, c = d.now(),
			u = c - i.touchStartTime;
		if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = d.now(), d.nextTick((function() {
				t.destroyed || (t.allowClick = !0)
			})), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
		if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode)
			if (s.freeMode) {
				if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
				if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
				if (s.freeModeMomentum) {
					if (i.velocities.length > 1) {
						var v = i.velocities.pop(),
							f = i.velocities.pop(),
							m = v.position - f.position,
							g = v.time - f.time;
						t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
					} else t.velocity = 0;
					t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
					var b = 1e3 * s.freeModeMomentumRatio,
						w = t.velocity * b,
						y = t.translate + w;
					r && (y = -y);
					var x, E, T = !1,
						S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
					if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0);
					else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0);
					else if (s.freeModeSticky) {
						for (var C, M = 0; M < l.length; M += 1)
							if (l[M] > -y) {
								C = M;
								break
							} y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1])
					}
					if (E && t.once("transitionEnd", (function() {
							t.loopFix()
						})), 0 !== t.velocity) {
						if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
							var P = Math.abs((r ? -y : y) - t.translate),
								z = t.slidesSizesGrid[t.activeIndex];
							b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
						}
					} else if (s.freeModeSticky) return void t.slideToClosest();
					s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((function() {
						t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout((function() {
							t.setTranslate(x), n.transitionEnd((function() {
								t && !t.destroyed && t.transitionEnd()
							}))
						}), 0))
					}))) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((function() {
						t && !t.destroyed && t.transitionEnd()
					})))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
				} else if (s.freeModeSticky) return void t.slideToClosest();
				(!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
			} else {
				for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < o.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
					var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
					void 0 !== o[L + I] ? p >= o[L] && p < o[L + I] && (k = L, $ = o[L + I] - o[L]) : p >= o[L] && (k = L, $ = o[o.length - 1] - o[o.length - 2])
				}
				var D = (p - o[k]) / $,
					O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
				if (u > s.longSwipesMs) {
					if (!s.longSwipes) return void t.slideTo(t.activeIndex);
					"next" === t.swipeDirection && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)), "prev" === t.swipeDirection && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k))
				} else {
					if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
					t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + O), "prev" === t.swipeDirection && t.slideTo(k))
				}
			}
	}

	function N() {
		var e = this.params,
			t = this.el;
		if (!t || 0 !== t.offsetWidth) {
			e.breakpoints && this.setBreakpoint();
			var i = this.allowSlideNext,
				s = this.allowSlidePrev,
				a = this.snapGrid;
			this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
		}
	}

	function X(e) {
		this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
	}

	function V() {
		var e = this.wrapperEl,
			t = this.rtlTranslate;
		this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
		var i = this.maxTranslate() - this.minTranslate();
		(0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
	}
	var Y = !1;

	function F() {}
	var W = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			cssMode: !1,
			updateOnWindowResize: !0,
			preventInteractionOnTransition: !1,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			slidesPerGroupSkip: 0,
			centeredSlides: !1,
			centeredSlidesBounds: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			centerInsufficientSlides: !1,
			watchOverflow: !1,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !1,
			touchStartPreventDefault: !0,
			touchStartForcePreventDefault: !1,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0
		},
		R = {
			update: u,
			translate: v,
			transition: f,
			slide: m,
			loop: g,
			grabCursor: b,
			manipulation: O,
			events: {
				attachEvents: function() {
					var e = this.params,
						t = this.touchEvents,
						s = this.el,
						a = this.wrapperEl;
					this.onTouchStart = G.bind(this), this.onTouchMove = H.bind(this), this.onTouchEnd = B.bind(this), e.cssMode && (this.onScroll = V.bind(this)), this.onClick = X.bind(this);
					var r = !!e.nested;
					if (!h.touch && h.pointerEvents) s.addEventListener(t.start, this.onTouchStart, !1), i.addEventListener(t.move, this.onTouchMove, r), i.addEventListener(t.end, this.onTouchEnd, !1);
					else {
						if (h.touch) {
							var n = !("touchstart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							s.addEventListener(t.start, this.onTouchStart, n), s.addEventListener(t.move, this.onTouchMove, h.passiveListener ? {
								passive: !1,
								capture: r
							} : r), s.addEventListener(t.end, this.onTouchEnd, n), t.cancel && s.addEventListener(t.cancel, this.onTouchEnd, n), Y || (i.addEventListener("touchstart", F), Y = !0)
						}(e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), i.addEventListener("mousemove", this.onTouchMove, r), i.addEventListener("mouseup", this.onTouchEnd, !1))
					}(e.preventClicks || e.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), e.cssMode && a.addEventListener("scroll", this.onScroll), e.updateOnWindowResize ? this.on(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : this.on("observerUpdate", N, !0)
				},
				detachEvents: function() {
					var e = this.params,
						t = this.touchEvents,
						s = this.el,
						a = this.wrapperEl,
						r = !!e.nested;
					if (!h.touch && h.pointerEvents) s.removeEventListener(t.start, this.onTouchStart, !1), i.removeEventListener(t.move, this.onTouchMove, r), i.removeEventListener(t.end, this.onTouchEnd, !1);
					else {
						if (h.touch) {
							var n = !("onTouchStart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							s.removeEventListener(t.start, this.onTouchStart, n), s.removeEventListener(t.move, this.onTouchMove, r), s.removeEventListener(t.end, this.onTouchEnd, n), t.cancel && s.removeEventListener(t.cancel, this.onTouchEnd, n)
						}(e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), i.removeEventListener("mousemove", this.onTouchMove, r), i.removeEventListener("mouseup", this.onTouchEnd, !1))
					}(e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), e.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N)
				}
			},
			breakpoints: {
				setBreakpoint: function() {
					var e = this.activeIndex,
						t = this.initialized,
						i = this.loopedSlides;
					void 0 === i && (i = 0);
					var s = this.params,
						a = this.$el,
						r = s.breakpoints;
					if (r && (!r || 0 !== Object.keys(r).length)) {
						var n = this.getBreakpoint(r);
						if (n && this.currentBreakpoint !== n) {
							var o = n in r ? r[n] : void 0;
							o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
								var t = o[e];
								void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
							}));
							var l = o || this.originalParams,
								h = s.slidesPerColumn > 1,
								p = l.slidesPerColumn > 1;
							h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === l.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
							var c = l.direction && l.direction !== s.direction,
								u = s.loop && (l.slidesPerView !== s.slidesPerView || c);
							c && t && this.changeDirection(), d.extend(this.params, l), d.extend(this, {
								allowTouchMove: this.params.allowTouchMove,
								allowSlideNext: this.params.allowSlideNext,
								allowSlidePrev: this.params.allowSlidePrev
							}), this.currentBreakpoint = n, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", l)
						}
					}
				},
				getBreakpoint: function(e) {
					if (e) {
						var t = !1,
							i = Object.keys(e).map((function(e) {
								if ("string" == typeof e && 0 === e.indexOf("@")) {
									var t = parseFloat(e.substr(1));
									return {
										value: a.innerHeight * t,
										point: e
									}
								}
								return {
									value: e,
									point: e
								}
							}));
						i.sort((function(e, t) {
							return parseInt(e.value, 10) - parseInt(t.value, 10)
						}));
						for (var s = 0; s < i.length; s += 1) {
							var r = i[s],
								n = r.point;
							r.value <= a.innerWidth && (t = n)
						}
						return t || "max"
					}
				}
			},
			checkOverflow: {
				checkOverflow: function() {
					var e = this.params,
						t = this.isLocked,
						i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
					e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update())
				}
			},
			classes: {
				addClasses: function() {
					var e = this.classNames,
						t = this.params,
						i = this.rtl,
						s = this.$el,
						a = [];
					a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), A.android && a.push("android"), A.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach((function(i) {
						e.push(t.containerModifierClass + i)
					})), s.addClass(e.join(" "))
				},
				removeClasses: function() {
					var e = this.$el,
						t = this.classNames;
					e.removeClass(t.join(" "))
				}
			},
			images: {
				loadImage: function(e, t, i, s, r, o) {
					var l;

					function d() {
						o && o()
					}
					n(e).parent("picture")[0] || e.complete && r ? d() : t ? ((l = new a.Image).onload = d, l.onerror = d, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : d()
				},
				preloadImages: function() {
					var e = this;

					function t() {
						null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
					}
					e.imagesToLoad = e.$el.find("img");
					for (var i = 0; i < e.imagesToLoad.length; i += 1) {
						var s = e.imagesToLoad[i];
						e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
					}
				}
			}
		},
		q = {},
		j = function(e) {
			function t() {
				for (var i, s, a, r = [], o = arguments.length; o--;) r[o] = arguments[o];
				1 === r.length && r[0].constructor && r[0].constructor === Object ? a = r[0] : (s = (i = r)[0], a = i[1]), a || (a = {}), a = d.extend({}, a), s && !a.el && (a.el = s), e.call(this, a), Object.keys(R).forEach((function(e) {
					Object.keys(R[e]).forEach((function(i) {
						t.prototype[i] || (t.prototype[i] = R[e][i])
					}))
				}));
				var l = this;
				void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach((function(e) {
					var t = l.modules[e];
					if (t.params) {
						var i = Object.keys(t.params)[0],
							s = t.params[i];
						if ("object" != typeof s || null === s) return;
						if (!(i in a) || !("enabled" in s)) return;
						!0 === a[i] && (a[i] = {
							enabled: !0
						}), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
							enabled: !1
						})
					}
				}));
				var p = d.extend({}, W);
				l.useModulesParams(p), l.params = d.extend({}, p, q, a), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, a), l.$ = n;
				var c = n(l.params.el);
				if (s = c[0]) {
					if (c.length > 1) {
						var u = [];
						return c.each((function(e, i) {
							var s = d.extend({}, a, {
								el: i
							});
							u.push(new t(s))
						})), u
					}
					var v, f, m;
					return s.swiper = l, c.data("swiper", l), s && s.shadowRoot && s.shadowRoot.querySelector ? (v = n(s.shadowRoot.querySelector("." + l.params.wrapperClass))).children = function(e) {
						return c.children(e)
					} : v = c.children("." + l.params.wrapperClass), d.extend(l, {
						$el: c,
						el: s,
						$wrapperEl: v,
						wrapperEl: v[0],
						classNames: [],
						slides: n(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function() {
							return "horizontal" === l.params.direction
						},
						isVertical: function() {
							return "vertical" === l.params.direction
						},
						rtl: "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"),
						rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
						wrongRTL: "-webkit-box" === v.css("display"),
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: l.params.allowSlideNext,
						allowSlidePrev: l.params.allowSlidePrev,
						touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], h.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
							start: f[0],
							move: f[1],
							end: f[2],
							cancel: f[3]
						}, l.touchEventsDesktop = {
							start: m[0],
							move: m[1],
							end: m[2]
						}, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							formElements: "input, select, option, textarea, button, video, label",
							lastClickTime: d.now(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: l.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), l.useModules(), l.params.init && l.init(), l
				}
			}
			e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
			var i = {
				extendedDefaults: {
					configurable: !0
				},
				defaults: {
					configurable: !0
				},
				Class: {
					configurable: !0
				},
				$: {
					configurable: !0
				}
			};
			return t.prototype.slidesPerViewDynamic = function() {
				var e = this.params,
					t = this.slides,
					i = this.slidesGrid,
					s = this.size,
					a = this.activeIndex,
					r = 1;
				if (e.centeredSlides) {
					for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
					for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
				} else
					for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
				return r
			}, t.prototype.update = function() {
				var e = this;
				if (e && !e.destroyed) {
					var t = e.snapGrid,
						i = e.params;
					i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
				}

				function s() {
					var t = e.rtlTranslate ? -1 * e.translate : e.translate,
						i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
					e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
				}
			}, t.prototype.changeDirection = function(e, t) {
				void 0 === t && (t = !0);
				var i = this.params.direction;
				return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each((function(t, i) {
					"vertical" === e ? i.style.width = "" : i.style.height = ""
				})), this.emit("changeDirection"), t && this.update()), this
			}, t.prototype.init = function() {
				this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
			}, t.prototype.destroy = function(e, t) {
				void 0 === e && (e = !0), void 0 === t && (t = !0);
				var i = this,
					s = i.params,
					a = i.$el,
					r = i.$wrapperEl,
					n = i.slides;
				return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function(e) {
					i.off(e)
				})), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0), null
			}, t.extendDefaults = function(e) {
				d.extend(q, e)
			}, i.extendedDefaults.get = function() {
				return q
			}, i.defaults.get = function() {
				return W
			}, i.Class.get = function() {
				return e
			}, i.$.get = function() {
				return n
			}, Object.defineProperties(t, i), t
		}(p),
		K = {
			name: "device",
			proto: {
				device: A
			},
			static: {
				device: A
			}
		},
		U = {
			name: "support",
			proto: {
				support: h
			},
			static: {
				support: h
			}
		},
		_ = {
			isEdge: !!a.navigator.userAgent.match(/Edge/g),
			isSafari: function() {
				var e = a.navigator.userAgent.toLowerCase();
				return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
			}(),
			isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent)
		},
		Z = {
			name: "browser",
			proto: {
				browser: _
			},
			static: {
				browser: _
			}
		},
		Q = {
			name: "resize",
			create: function() {
				var e = this;
				d.extend(e, {
					resize: {
						resizeHandler: function() {
							e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
						},
						orientationChangeHandler: function() {
							e && !e.destroyed && e.initialized && e.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function() {
					a.addEventListener("resize", this.resize.resizeHandler), a.addEventListener("orientationchange", this.resize.orientationChangeHandler)
				},
				destroy: function() {
					a.removeEventListener("resize", this.resize.resizeHandler), a.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
				}
			}
		},
		J = {
			func: a.MutationObserver || a.WebkitMutationObserver,
			attach: function(e, t) {
				void 0 === t && (t = {});
				var i = this,
					s = new(0, J.func)((function(e) {
						if (1 !== e.length) {
							var t = function() {
								i.emit("observerUpdate", e[0])
							};
							a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
						} else i.emit("observerUpdate", e[0])
					}));
				s.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				}), i.observer.observers.push(s)
			},
			init: function() {
				if (h.observer && this.params.observer) {
					if (this.params.observeParents)
						for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
					this.observer.attach(this.$el[0], {
						childList: this.params.observeSlideChildren
					}), this.observer.attach(this.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function() {
				this.observer.observers.forEach((function(e) {
					e.disconnect()
				})), this.observer.observers = []
			}
		},
		ee = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1,
				observeSlideChildren: !1
			},
			create: function() {
				d.extend(this, {
					observer: {
						init: J.init.bind(this),
						attach: J.attach.bind(this),
						destroy: J.destroy.bind(this),
						observers: []
					}
				})
			},
			on: {
				init: function() {
					this.observer.init()
				},
				destroy: function() {
					this.observer.destroy()
				}
			}
		},
		te = {
			update: function(e) {
				var t = this,
					i = t.params,
					s = i.slidesPerView,
					a = i.slidesPerGroup,
					r = i.centeredSlides,
					n = t.params.virtual,
					o = n.addSlidesBefore,
					l = n.addSlidesAfter,
					h = t.virtual,
					p = h.from,
					c = h.to,
					u = h.slides,
					v = h.slidesGrid,
					f = h.renderSlide,
					m = h.offset;
				t.updateActiveIndex();
				var g, b, w, y = t.activeIndex || 0;
				g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + l) : (b = s + (a - 1) + o, w = a + l);
				var x = Math.max((y || 0) - w, 0),
					E = Math.min((y || 0) + b, u.length - 1),
					T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);

				function S() {
					t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
				}
				if (d.extend(t.virtual, {
						from: x,
						to: E,
						offset: T,
						slidesGrid: t.slidesGrid
					}), p === x && c === E && !e) return t.slidesGrid !== v && T !== m && t.slides.css(g, T + "px"), void t.updateProgress();
				if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
					offset: T,
					from: x,
					to: E,
					slides: function() {
						for (var e = [], t = x; t <= E; t += 1) e.push(u[t]);
						return e
					}()
				}), void S();
				var C = [],
					M = [];
				if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
				else
					for (var P = p; P <= c; P += 1)(P < x || P > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
				for (var z = 0; z < u.length; z += 1) z >= x && z <= E && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
				M.forEach((function(e) {
					t.$wrapperEl.append(f(u[e], e))
				})), C.sort((function(e, t) {
					return t - e
				})).forEach((function(e) {
					t.$wrapperEl.prepend(f(u[e], e))
				})), t.$wrapperEl.children(".swiper-slide").css(g, T + "px"), S()
			},
			renderSlide: function(e, t) {
				var i = this.params.virtual;
				if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
				var s = i.renderSlide ? n(i.renderSlide.call(this, e, t)) : n('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
				return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s
			},
			appendSlide: function(e) {
				if ("object" == typeof e && "length" in e)
					for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
				else this.virtual.slides.push(e);
				this.virtual.update(!0)
			},
			prependSlide: function(e) {
				var t = this.activeIndex,
					i = t + 1,
					s = 1;
				if (Array.isArray(e)) {
					for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
					i = t + e.length, s = e.length
				} else this.virtual.slides.unshift(e);
				if (this.params.virtual.cache) {
					var r = this.virtual.cache,
						n = {};
					Object.keys(r).forEach((function(e) {
						var t = r[e],
							i = t.attr("data-swiper-slide-index");
						i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
					})), this.virtual.cache = n
				}
				this.virtual.update(!0), this.slideTo(i, 0)
			},
			removeSlide: function(e) {
				if (null != e) {
					var t = this.activeIndex;
					if (Array.isArray(e))
						for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
					else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
					this.virtual.update(!0), this.slideTo(t, 0)
				}
			},
			removeAllSlides: function() {
				this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
			}
		},
		ie = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					addSlidesBefore: 0,
					addSlidesAfter: 0
				}
			},
			create: function() {
				d.extend(this, {
					virtual: {
						update: te.update.bind(this),
						appendSlide: te.appendSlide.bind(this),
						prependSlide: te.prependSlide.bind(this),
						removeSlide: te.removeSlide.bind(this),
						removeAllSlides: te.removeAllSlides.bind(this),
						renderSlide: te.renderSlide.bind(this),
						slides: this.params.virtual.slides,
						cache: {}
					}
				})
			},
			on: {
				beforeInit: function() {
					if (this.params.virtual.enabled) {
						this.classNames.push(this.params.containerModifierClass + "virtual");
						var e = {
							watchSlidesProgress: !0
						};
						d.extend(this.params, e), d.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
					}
				},
				setTranslate: function() {
					this.params.virtual.enabled && this.virtual.update()
				}
			}
		},
		se = {
			handle: function(e) {
				var t = this.rtlTranslate,
					s = e;
				s.originalEvent && (s = s.originalEvent);
				var r = s.keyCode || s.charCode,
					n = this.params.keyboard.pageUpDown,
					o = n && 33 === r,
					l = n && 34 === r,
					d = 37 === r,
					h = 39 === r,
					p = 38 === r,
					c = 40 === r;
				if (!this.allowSlideNext && (this.isHorizontal() && h || this.isVertical() && c || l)) return !1;
				if (!this.allowSlidePrev && (this.isHorizontal() && d || this.isVertical() && p || o)) return !1;
				if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
					if (this.params.keyboard.onlyInViewport && (o || l || d || h || p || c)) {
						var u = !1;
						if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
						var v = a.innerWidth,
							f = a.innerHeight,
							m = this.$el.offset();
						t && (m.left -= this.$el[0].scrollLeft);
						for (var g = [
								[m.left, m.top],
								[m.left + this.width, m.top],
								[m.left, m.top + this.height],
								[m.left + this.width, m.top + this.height]
							], b = 0; b < g.length; b += 1) {
							var w = g[b];
							w[0] >= 0 && w[0] <= v && w[1] >= 0 && w[1] <= f && (u = !0)
						}
						if (!u) return
					}
					this.isHorizontal() ? ((o || l || d || h) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), ((l || h) && !t || (o || d) && t) && this.slideNext(), ((o || d) && !t || (l || h) && t) && this.slidePrev()) : ((o || l || p || c) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (l || c) && this.slideNext(), (o || p) && this.slidePrev()), this.emit("keyPress", r)
				}
			},
			enable: function() {
				this.keyboard.enabled || (n(i).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
			},
			disable: function() {
				this.keyboard.enabled && (n(i).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
			}
		},
		ae = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1,
					onlyInViewport: !0,
					pageUpDown: !0
				}
			},
			create: function() {
				d.extend(this, {
					keyboard: {
						enabled: !1,
						enable: se.enable.bind(this),
						disable: se.disable.bind(this),
						handle: se.handle.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.keyboard.enabled && this.keyboard.enable()
				},
				destroy: function() {
					this.keyboard.enabled && this.keyboard.disable()
				}
			}
		};
	var re = {
			lastScrollTime: d.now(),
			lastEventBeforeSnap: void 0,
			recentWheelEvents: [],
			event: function() {
				return a.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
					var e = "onwheel" in i;
					if (!e) {
						var t = i.createElement("div");
						t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
					}
					return !e && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (e = i.implementation.hasFeature("Events.wheel", "3.0")), e
				}() ? "wheel" : "mousewheel"
			},
			normalize: function(e) {
				var t = 0,
					i = 0,
					s = 0,
					a = 0;
				return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
					spinX: t,
					spinY: i,
					pixelX: s,
					pixelY: a
				}
			},
			handleMouseEnter: function() {
				this.mouseEntered = !0
			},
			handleMouseLeave: function() {
				this.mouseEntered = !1
			},
			handle: function(e) {
				var t = e,
					i = this,
					s = i.params.mousewheel;
				i.params.cssMode && t.preventDefault();
				var a = i.$el;
				if ("container" !== i.params.mousewheel.eventsTarged && (a = n(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
				t.originalEvent && (t = t.originalEvent);
				var r = 0,
					o = i.rtlTranslate ? -1 : 1,
					l = re.normalize(t);
				if (s.forceToAxis)
					if (i.isHorizontal()) {
						if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
						r = -l.pixelX * o
					} else {
						if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
						r = -l.pixelY
					}
				else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
				if (0 === r) return !0;
				if (s.invert && (r = -r), i.params.freeMode) {
					var h = {
							time: d.now(),
							delta: Math.abs(r),
							direction: Math.sign(r)
						},
						p = i.mousewheel.lastEventBeforeSnap,
						c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
					if (!c) {
						i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
						var u = i.getTranslate() + r * s.sensitivity,
							v = i.isBeginning,
							f = i.isEnd;
						if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
							clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
							var m = i.mousewheel.recentWheelEvents;
							m.length >= 15 && m.shift();
							var g = m.length ? m[m.length - 1] : void 0,
								b = m[0];
							if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction)) m.splice(0);
							else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
								var w = r > 0 ? .8 : .2;
								i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.mousewheel.timeout = d.nextTick((function() {
									i.slideToClosest(i.params.speed, !0, void 0, w)
								}), 0)
							}
							i.mousewheel.timeout || (i.mousewheel.timeout = d.nextTick((function() {
								i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
							}), 500))
						}
						if (c || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0
					}
				} else {
					var y = {
							time: d.now(),
							delta: Math.abs(r),
							direction: Math.sign(r),
							raw: e
						},
						x = i.mousewheel.recentWheelEvents;
					x.length >= 2 && x.shift();
					var E = x.length ? x[x.length - 1] : void 0;
					if (x.push(y), E ? (y.direction !== E.direction || y.delta > E.delta || y.time > E.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
				}
				return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
			},
			animateSlider: function(e) {
				return e.delta >= 6 && d.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new a.Date).getTime(), !1)
			},
			releaseScroll: function(e) {
				var t = this.params.mousewheel;
				if (e.direction < 0) {
					if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
				} else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
				return !1
			},
			enable: function() {
				var e = re.event();
				if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
				if (!e) return !1;
				if (this.mousewheel.enabled) return !1;
				var t = this.$el;
				return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
			},
			disable: function() {
				var e = re.event();
				if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
				if (!e) return !1;
				if (!this.mousewheel.enabled) return !1;
				var t = this.$el;
				return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
			}
		},
		ne = {
			update: function() {
				var e = this.params.navigation;
				if (!this.params.loop) {
					var t = this.navigation,
						i = t.$nextEl,
						s = t.$prevEl;
					s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
				}
			},
			onPrevClick: function(e) {
				e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
			},
			onNextClick: function(e) {
				e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
			},
			init: function() {
				var e, t, i = this.params.navigation;
				(i.nextEl || i.prevEl) && (i.nextEl && (e = n(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = n(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), d.extend(this.navigation, {
					$nextEl: e,
					nextEl: e && e[0],
					$prevEl: t,
					prevEl: t && t[0]
				}))
			},
			destroy: function() {
				var e = this.navigation,
					t = e.$nextEl,
					i = e.$prevEl;
				t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
			}
		},
		oe = {
			update: function() {
				var e = this.rtl,
					t = this.params.pagination;
				if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
					var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
						a = this.pagination.$el,
						r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
					if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
						var o, l, d, h = this.pagination.bullets;
						if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) h.each((function(e, s) {
							var a = n(s),
								r = a.index();
							r === i && a.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= o && r <= l && a.addClass(t.bulletActiveClass + "-main"), r === o && a.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), r === l && a.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
						}));
						else {
							var p = h.eq(i),
								c = p.index();
							if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
								for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
								if (this.params.loop)
									if (c >= h.length - t.dynamicMainBullets) {
										for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
										h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
									} else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
								else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
							}
						}
						if (t.dynamicBullets) {
							var g = Math.min(h.length, t.dynamicMainBullets + 4),
								b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
								w = e ? "right" : "left";
							h.css(this.isHorizontal() ? w : "top", b + "px")
						}
					}
					if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
						var y;
						y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
						var x = (i + 1) / r,
							E = 1,
							T = 1;
						"horizontal" === y ? E = x : T = x, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + E + ") scaleY(" + T + ")").transition(this.params.speed)
					}
					"custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
				}
			},
			render: function() {
				var e = this.params.pagination;
				if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
					var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
						i = this.pagination.$el,
						s = "";
					if ("bullets" === e.type) {
						for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
						i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
					}
					"fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
				}
			},
			init: function() {
				var e = this,
					t = e.params.pagination;
				if (t.el) {
					var i = n(t.el);
					0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
						t.preventDefault();
						var i = n(this).index() * e.params.slidesPerGroup;
						e.params.loop && (i += e.loopedSlides), e.slideTo(i)
					})), d.extend(e.pagination, {
						$el: i,
						el: i[0]
					}))
				}
			},
			destroy: function() {
				var e = this.params.pagination;
				if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
					var t = this.pagination.$el;
					t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
				}
			}
		},
		le = {
			setTranslate: function() {
				if (this.params.scrollbar.el && this.scrollbar.el) {
					var e = this.scrollbar,
						t = this.rtlTranslate,
						i = this.progress,
						s = e.dragSize,
						a = e.trackSize,
						r = e.$dragEl,
						n = e.$el,
						o = this.params.scrollbar,
						l = s,
						d = (a - s) * i;
					t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function() {
						n[0].style.opacity = 0, n.transition(400)
					}), 1e3))
				}
			},
			setTransition: function(e) {
				this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
			},
			updateSize: function() {
				if (this.params.scrollbar.el && this.scrollbar.el) {
					var e = this.scrollbar,
						t = e.$dragEl,
						i = e.$el;
					t[0].style.width = "", t[0].style.height = "";
					var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
						r = this.size / this.virtualSize,
						n = r * (a / this.size);
					s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), d.extend(e, {
						trackSize: a,
						divider: r,
						moveDivider: n,
						dragSize: s
					}), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
				}
			},
			getPointerPosition: function(e) {
				return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
			},
			setDragPosition: function(e) {
				var t, i = this.scrollbar,
					s = this.rtlTranslate,
					a = i.$el,
					r = i.dragSize,
					n = i.trackSize,
					o = i.dragStartPos;
				t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
				var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
				this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
			},
			onDragStart: function(e) {
				var t = this.params.scrollbar,
					i = this.scrollbar,
					s = this.$wrapperEl,
					a = i.$el,
					r = i.$dragEl;
				this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
			},
			onDragMove: function(e) {
				var t = this.scrollbar,
					i = this.$wrapperEl,
					s = t.$el,
					a = t.$dragEl;
				this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
			},
			onDragEnd: function(e) {
				var t = this.params.scrollbar,
					i = this.scrollbar,
					s = this.$wrapperEl,
					a = i.$el;
				this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick((function() {
					a.css("opacity", 0), a.transition(400)
				}), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
			},
			enableDraggable: function() {
				if (this.params.scrollbar.el) {
					var e = this.scrollbar,
						t = this.touchEventsTouch,
						s = this.touchEventsDesktop,
						a = this.params,
						r = e.$el[0],
						n = !(!h.passiveListener || !a.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!h.passiveListener || !a.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					h.touch ? (r.addEventListener(t.start, this.scrollbar.onDragStart, n), r.addEventListener(t.move, this.scrollbar.onDragMove, n), r.addEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), i.addEventListener(s.move, this.scrollbar.onDragMove, n), i.addEventListener(s.end, this.scrollbar.onDragEnd, o))
				}
			},
			disableDraggable: function() {
				if (this.params.scrollbar.el) {
					var e = this.scrollbar,
						t = this.touchEventsTouch,
						s = this.touchEventsDesktop,
						a = this.params,
						r = e.$el[0],
						n = !(!h.passiveListener || !a.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!h.passiveListener || !a.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					h.touch ? (r.removeEventListener(t.start, this.scrollbar.onDragStart, n), r.removeEventListener(t.move, this.scrollbar.onDragMove, n), r.removeEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), i.removeEventListener(s.move, this.scrollbar.onDragMove, n), i.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
				}
			},
			init: function() {
				if (this.params.scrollbar.el) {
					var e = this.scrollbar,
						t = this.$el,
						i = this.params.scrollbar,
						s = n(i.el);
					this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
					var a = s.find("." + this.params.scrollbar.dragClass);
					0 === a.length && (a = n('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), d.extend(e, {
						$el: s,
						el: s[0],
						$dragEl: a,
						dragEl: a[0]
					}), i.draggable && e.enableDraggable()
				}
			},
			destroy: function() {
				this.scrollbar.disableDraggable()
			}
		},
		de = {
			setTransform: function(e, t) {
				var i = this.rtl,
					s = n(e),
					a = i ? -1 : 1,
					r = s.attr("data-swiper-parallax") || "0",
					o = s.attr("data-swiper-parallax-x"),
					l = s.attr("data-swiper-parallax-y"),
					d = s.attr("data-swiper-parallax-scale"),
					h = s.attr("data-swiper-parallax-opacity");
				if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = r, l = "0") : (l = r, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * a + "%" : o * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
					var p = h - (h - 1) * (1 - Math.abs(t));
					s[0].style.opacity = p
				}
				if (null == d) s.transform("translate3d(" + o + ", " + l + ", 0px)");
				else {
					var c = d - (d - 1) * (1 - Math.abs(t));
					s.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
				}
			},
			setTranslate: function() {
				var e = this,
					t = e.$el,
					i = e.slides,
					s = e.progress,
					a = e.snapGrid;
				t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
					e.parallax.setTransform(i, s)
				})), i.each((function(t, i) {
					var r = i.progress;
					e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
						e.parallax.setTransform(i, r)
					}))
				}))
			},
			setTransition: function(e) {
				void 0 === e && (e = this.params.speed);
				this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
					var s = n(i),
						a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
					0 === e && (a = 0), s.transition(a)
				}))
			}
		},
		he = {
			getDistanceBetweenTouches: function(e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					i = e.targetTouches[0].pageY,
					s = e.targetTouches[1].pageX,
					a = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
			},
			onGestureStart: function(e) {
				var t = this.params.zoom,
					i = this.zoom,
					s = i.gesture;
				if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
					if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
					i.fakeGestureTouched = !0, s.scaleStart = he.getDistanceBetweenTouches(e)
				}
				s.$slideEl && s.$slideEl.length || (s.$slideEl = n(e.target).closest("." + this.params.slideClass), 0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl && s.$imageEl.transition(0), this.zoom.isScaling = !0) : s.$imageEl = void 0
			},
			onGestureChange: function(e) {
				var t = this.params.zoom,
					i = this.zoom,
					s = i.gesture;
				if (!h.gestures) {
					if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
					i.fakeGestureMoved = !0, s.scaleMove = he.getDistanceBetweenTouches(e)
				}
				s.$imageEl && 0 !== s.$imageEl.length && (i.scale = h.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
			},
			onGestureEnd: function(e) {
				var t = this.params.zoom,
					i = this.zoom,
					s = i.gesture;
				if (!h.gestures) {
					if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
					if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !A.android) return;
					i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
				}
				s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
			},
			onTouchStart: function(e) {
				var t = this.zoom,
					i = t.gesture,
					s = t.image;
				i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (A.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
			},
			onTouchMove: function(e) {
				var t = this.zoom,
					i = t.gesture,
					s = t.image,
					a = t.velocity;
				if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
					s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
					var r = s.width * t.scale,
						n = s.height * t.scale;
					if (!(r < i.slideWidth && n < i.slideHeight)) {
						if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
							if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
							if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
						}
						e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
					}
				}
			},
			onTouchEnd: function() {
				var e = this.zoom,
					t = e.gesture,
					i = e.image,
					s = e.velocity;
				if (t.$imageEl && 0 !== t.$imageEl.length) {
					if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
					i.isTouched = !1, i.isMoved = !1;
					var a = 300,
						r = 300,
						n = s.x * a,
						o = i.currentX + n,
						l = s.y * r,
						d = i.currentY + l;
					0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
					var h = Math.max(a, r);
					i.currentX = o, i.currentY = d;
					var p = i.width * e.scale,
						c = i.height * e.scale;
					i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
				}
			},
			onTransitionEnd: function() {
				var e = this.zoom,
					t = e.gesture;
				t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
			},
			toggle: function(e) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(e)
			},
			in: function(e) {
				var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom,
					b = this.params.zoom,
					w = g.gesture,
					y = g.image;
				(w.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? w.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : w.$slideEl = this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (f = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + f / 2 - t, a = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, u = -(p = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > u && (r = u), (n = a * g.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
			},
			out: function() {
				var e = this.zoom,
					t = this.params.zoom,
					i = e.gesture;
				i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
			},
			enable: function() {
				var e = this.zoom;
				if (!e.enabled) {
					e.enabled = !0;
					var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
							passive: !0,
							capture: !1
						},
						i = !h.passiveListener || {
							passive: !1,
							capture: !0
						},
						s = "." + this.params.slideClass;
					h.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
				}
			},
			disable: function() {
				var e = this.zoom;
				if (e.enabled) {
					this.zoom.enabled = !1;
					var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
							passive: !0,
							capture: !1
						},
						i = !h.passiveListener || {
							passive: !1,
							capture: !0
						},
						s = "." + this.params.slideClass;
					h.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
				}
			}
		},
		pe = {
			loadInSlide: function(e, t) {
				void 0 === t && (t = !0);
				var i = this,
					s = i.params.lazy;
				if (void 0 !== e && 0 !== i.slides.length) {
					var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
						r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
					!a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || (r = r.add(a[0])), 0 !== r.length && r.each((function(e, r) {
						var o = n(r);
						o.addClass(s.loadingClass);
						var l = o.attr("data-background"),
							d = o.attr("data-src"),
							h = o.attr("data-srcset"),
							p = o.attr("data-sizes"),
							c = o.parent("picture");
						i.loadImage(o[0], d || l, h, p, !1, (function() {
							if (null != i && i && (!i || i.params) && !i.destroyed) {
								if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), c.length && c.children("source").each((function(e, t) {
										var i = n(t);
										i.attr("data-srcset") && (i.attr("srcset", i.attr("data-srcset")), i.removeAttr("data-srcset"))
									})), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
									var e = a.attr("data-swiper-slide-index");
									if (a.hasClass(i.params.slideDuplicateClass)) {
										var r = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
										i.lazy.loadInSlide(r.index(), !1)
									} else {
										var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
										i.lazy.loadInSlide(u.index(), !1)
									}
								}
								i.emit("lazyImageReady", a[0], o[0]), i.params.autoHeight && i.updateAutoHeight()
							}
						})), i.emit("lazyImageLoad", a[0], o[0])
					}))
				}
			},
			load: function() {
				var e = this,
					t = e.$wrapperEl,
					i = e.params,
					s = e.slides,
					a = e.activeIndex,
					r = e.virtual && i.virtual.enabled,
					o = i.lazy,
					l = i.slidesPerView;

				function d(e) {
					if (r) {
						if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
					} else if (s[e]) return !0;
					return !1
				}

				function h(e) {
					return r ? n(e).attr("data-swiper-slide-index") : n(e).index()
				}
				if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function(t, i) {
					var s = r ? n(i).attr("data-swiper-slide-index") : n(i).index();
					e.lazy.loadInSlide(s)
				}));
				else if (l > 1)
					for (var p = a; p < a + l; p += 1) d(p) && e.lazy.loadInSlide(p);
				else e.lazy.loadInSlide(a);
				if (o.loadPrevNext)
					if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
						for (var c = o.loadPrevNextAmount, u = l, v = Math.min(a + u + Math.max(c, u), s.length), f = Math.max(a - Math.max(u, c), 0), m = a + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
						for (var g = f; g < a; g += 1) d(g) && e.lazy.loadInSlide(g)
					} else {
						var b = t.children("." + i.slideNextClass);
						b.length > 0 && e.lazy.loadInSlide(h(b));
						var w = t.children("." + i.slidePrevClass);
						w.length > 0 && e.lazy.loadInSlide(h(w))
					}
			}
		},
		ce = {
			LinearSpline: function(e, t) {
				var i, s, a, r, n, o = function(e, t) {
					for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
					return i
				};
				return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
					return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
				}, this
			},
			getInterpolateFunction: function(e) {
				this.controller.spline || (this.controller.spline = this.params.loop ? new ce.LinearSpline(this.slidesGrid, e.slidesGrid) : new ce.LinearSpline(this.snapGrid, e.snapGrid))
			},
			setTranslate: function(e, t) {
				var i, s, a = this,
					r = a.controller.control;

				function n(e) {
					var t = a.rtlTranslate ? -a.translate : a.translate;
					"slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				if (Array.isArray(r))
					for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof j && n(r[o]);
				else r instanceof j && t !== r && n(r)
			},
			setTransition: function(e, t) {
				var i, s = this,
					a = s.controller.control;

				function r(t) {
					t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && d.nextTick((function() {
						t.updateAutoHeight()
					})), t.$wrapperEl.transitionEnd((function() {
						a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
					})))
				}
				if (Array.isArray(a))
					for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof j && r(a[i]);
				else a instanceof j && t !== a && r(a)
			}
		},
		ue = {
			makeElFocusable: function(e) {
				return e.attr("tabIndex", "0"), e
			},
			makeElNotFocusable: function(e) {
				return e.attr("tabIndex", "-1"), e
			},
			addElRole: function(e, t) {
				return e.attr("role", t), e
			},
			addElLabel: function(e, t) {
				return e.attr("aria-label", t), e
			},
			disableEl: function(e) {
				return e.attr("aria-disabled", !0), e
			},
			enableEl: function(e) {
				return e.attr("aria-disabled", !1), e
			},
			onEnterKey: function(e) {
				var t = this.params.a11y;
				if (13 === e.keyCode) {
					var i = n(e.target);
					this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
				}
			},
			notify: function(e) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(e))
			},
			updateNavigation: function() {
				if (!this.params.loop && this.navigation) {
					var e = this.navigation,
						t = e.$nextEl,
						i = e.$prevEl;
					i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)))
				}
			},
			updatePagination: function() {
				var e = this,
					t = e.params.a11y;
				e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, s) {
					var a = n(s);
					e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1))
				}))
			},
			init: function() {
				this.$el.append(this.a11y.liveRegion);
				var e, t, i = this.params.a11y;
				this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
			},
			destroy: function() {
				var e, t;
				this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
			}
		},
		ve = {
			init: function() {
				if (this.params.history) {
					if (!a.history || !a.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
					var e = this.history;
					e.initialized = !0, e.paths = ve.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || a.addEventListener("popstate", this.history.setHistoryPopState))
				}
			},
			destroy: function() {
				this.params.history.replaceState || a.removeEventListener("popstate", this.history.setHistoryPopState)
			},
			setHistoryPopState: function() {
				this.history.paths = ve.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
			},
			getPathValues: function() {
				var e = a.location.pathname.slice(1).split("/").filter((function(e) {
						return "" !== e
					})),
					t = e.length;
				return {
					key: e[t - 2],
					value: e[t - 1]
				}
			},
			setHistory: function(e, t) {
				if (this.history.initialized && this.params.history.enabled) {
					var i = this.slides.eq(t),
						s = ve.slugify(i.attr("data-history"));
					a.location.pathname.includes(e) || (s = e + "/" + s);
					var r = a.history.state;
					r && r.value === s || (this.params.history.replaceState ? a.history.replaceState({
						value: s
					}, null, s) : a.history.pushState({
						value: s
					}, null, s))
				}
			},
			slugify: function(e) {
				return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
			},
			scrollToSlide: function(e, t, i) {
				if (t)
					for (var s = 0, a = this.slides.length; s < a; s += 1) {
						var r = this.slides.eq(s);
						if (ve.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
							var n = r.index();
							this.slideTo(n, e, i)
						}
					} else this.slideTo(0, e, i)
			}
		},
		fe = {
			onHashCange: function() {
				this.emit("hashChange");
				var e = i.location.hash.replace("#", "");
				if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
					var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
					if (void 0 === t) return;
					this.slideTo(t)
				}
			},
			setHash: function() {
				if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
					if (this.params.hashNavigation.replaceState && a.history && a.history.replaceState) a.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet");
					else {
						var e = this.slides.eq(this.activeIndex),
							t = e.attr("data-hash") || e.attr("data-history");
						i.location.hash = t || "", this.emit("hashSet")
					}
			},
			init: function() {
				if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
					this.hashNavigation.initialized = !0;
					var e = i.location.hash.replace("#", "");
					if (e)
						for (var t = 0, s = this.slides.length; t < s; t += 1) {
							var r = this.slides.eq(t);
							if ((r.attr("data-hash") || r.attr("data-history")) === e && !r.hasClass(this.params.slideDuplicateClass)) {
								var o = r.index();
								this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
							}
						}
					this.params.hashNavigation.watchState && n(a).on("hashchange", this.hashNavigation.onHashCange)
				}
			},
			destroy: function() {
				this.params.hashNavigation.watchState && n(a).off("hashchange", this.hashNavigation.onHashCange)
			}
		},
		me = {
			run: function() {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					i = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = d.nextTick((function() {
					e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
				}), i)
			},
			start: function() {
				return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
			},
			stop: function() {
				return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
			},
			pause: function(e) {
				this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
			}
		},
		ge = {
			setTranslate: function() {
				for (var e = this.slides, t = 0; t < e.length; t += 1) {
					var i = this.slides.eq(t),
						s = -i[0].swiperSlideOffset;
					this.params.virtualTranslate || (s -= this.translate);
					var a = 0;
					this.isHorizontal() || (a = s, s = 0);
					var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
					i.css({
						opacity: r
					}).transform("translate3d(" + s + "px, " + a + "px, 0px)")
				}
			},
			setTransition: function(e) {
				var t = this,
					i = t.slides,
					s = t.$wrapperEl;
				if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
					var a = !1;
					i.transitionEnd((function() {
						if (!a && t && !t.destroyed) {
							a = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
						}
					}))
				}
			}
		},
		be = {
			setTranslate: function() {
				var e, t = this.$el,
					i = this.$wrapperEl,
					s = this.slides,
					a = this.width,
					r = this.height,
					o = this.rtlTranslate,
					l = this.size,
					d = this.params.cubeEffect,
					h = this.isHorizontal(),
					p = this.virtual && this.params.virtual.enabled,
					c = 0;
				d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
					height: a + "px"
				})) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), t.append(e)));
				for (var u = 0; u < s.length; u += 1) {
					var v = s.eq(u),
						f = u;
					p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
					var m = 90 * f,
						g = Math.floor(m / 360);
					o && (m = -m, g = Math.floor(-m / 360));
					var b = Math.max(Math.min(v[0].progress, 1), -1),
						w = 0,
						y = 0,
						x = 0;
					f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
					var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
					if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
						var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
							S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
						0 === T.length && (T = n('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), T.length && (T[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
					}
				}
				if (i.css({
						"-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + l / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + l / 2 + "px",
						"transform-origin": "50% 50% -" + l / 2 + "px"
					}), d.shadow)
					if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
					else {
						var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
							M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
							P = d.shadowScale,
							z = d.shadowScale / M,
							k = d.shadowOffset;
						e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (r / 2 + k) + "px, " + -r / 2 / z + "px) rotateX(-90deg)")
					} var $ = _.isSafari || _.isWebView ? -l / 2 : 0;
				i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
			},
			setTransition: function(e) {
				var t = this.$el;
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
			}
		},
		we = {
			setTranslate: function() {
				for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
					var s = e.eq(i),
						a = s[0].progress;
					this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
					var r = -180 * a,
						o = 0,
						l = -s[0].swiperSlideOffset,
						d = 0;
					if (this.isHorizontal() ? t && (r = -r) : (d = l, l = 0, o = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
						var h = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
							p = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
						0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(h)), 0 === p.length && (p = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(p)), h.length && (h[0].style.opacity = Math.max(-a, 0)), p.length && (p[0].style.opacity = Math.max(a, 0))
					}
					s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + r + "deg)")
				}
			},
			setTransition: function(e) {
				var t = this,
					i = t.slides,
					s = t.activeIndex,
					a = t.$wrapperEl;
				if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
					var r = !1;
					i.eq(s).transitionEnd((function() {
						if (!r && t && !t.destroyed) {
							r = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
						}
					}))
				}
			}
		},
		ye = {
			setTranslate: function() {
				for (var e = this.width, t = this.height, i = this.slides, s = this.$wrapperEl, a = this.slidesSizesGrid, r = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? r.rotate : -r.rotate, c = r.depth, u = 0, v = i.length; u < v; u += 1) {
					var f = i.eq(u),
						m = a[u],
						g = (d - f[0].swiperSlideOffset - m / 2) / m * r.modifier,
						b = o ? p * g : 0,
						w = o ? 0 : p * g,
						y = -c * Math.abs(g),
						x = r.stretch;
					"string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(r.stretch) / 100 * m);
					var E = o ? 0 : x * g,
						T = o ? x * g : 0,
						S = 1 - (1 - r.scale) * Math.abs(g);
					Math.abs(T) < .001 && (T = 0), Math.abs(E) < .001 && (E = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0), Math.abs(S) < .001 && (S = 0);
					var C = "translate3d(" + T + "px," + E + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg) scale(" + S + ")";
					if (f.transform(C), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), r.slideShadows) {
						var M = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
							P = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
						0 === M.length && (M = n('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(M)), 0 === P.length && (P = n('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(P)), M.length && (M[0].style.opacity = g > 0 ? g : 0), P.length && (P[0].style.opacity = -g > 0 ? -g : 0)
					}
				}(h.pointerEvents || h.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
			},
			setTransition: function(e) {
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
			}
		},
		xe = {
			init: function() {
				var e = this.params.thumbs,
					t = this.constructor;
				e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, d.extend(this.thumbs.swiper.originalParams, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				}), d.extend(this.thumbs.swiper.params, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})) : d.isObject(e.swiper) && (this.thumbs.swiper = new t(d.extend({}, e.swiper, {
					watchSlidesVisibility: !0,
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
			},
			onThumbClick: function() {
				var e = this.thumbs.swiper;
				if (e) {
					var t = e.clickedIndex,
						i = e.clickedSlide;
					if (!(i && n(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
						var s;
						if (s = e.params.loop ? parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
							var a = this.activeIndex;
							this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
							var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
								o = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
							s = void 0 === r ? o : void 0 === o ? r : o - a < a - r ? o : r
						}
						this.slideTo(s)
					}
				}
			},
			update: function(e) {
				var t = this.thumbs.swiper;
				if (t) {
					var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
						s = this.params.thumbs.autoScrollOffset,
						a = s && !t.params.loop;
					if (this.realIndex !== t.realIndex || a) {
						var r, n, o = t.activeIndex;
						if (t.params.loop) {
							t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, o = t.activeIndex);
							var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
								d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
							r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l, n = this.activeIndex > this.previousIndex ? "next" : "prev"
						} else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
						a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > o && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0))
					}
					var h = 1,
						p = this.params.thumbs.slideThumbActiveClass;
					if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled)
						for (var c = 0; c < h; c += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + c) + '"]').addClass(p);
					else
						for (var u = 0; u < h; u += 1) t.slides.eq(this.realIndex + u).addClass(p)
				}
			}
		},
		Ee = [K, U, Z, Q, ee, ie, ae, {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarged: "container"
				}
			},
			create: function() {
				d.extend(this, {
					mousewheel: {
						enabled: !1,
						enable: re.enable.bind(this),
						disable: re.disable.bind(this),
						handle: re.handle.bind(this),
						handleMouseEnter: re.handleMouseEnter.bind(this),
						handleMouseLeave: re.handleMouseLeave.bind(this),
						animateSlider: re.animateSlider.bind(this),
						releaseScroll: re.releaseScroll.bind(this),
						lastScrollTime: d.now(),
						lastEventBeforeSnap: void 0,
						recentWheelEvents: []
					}
				})
			},
			on: {
				init: function() {
					!this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
				},
				destroy: function() {
					this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
				}
			}
		}, {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock"
				}
			},
			create: function() {
				d.extend(this, {
					navigation: {
						init: ne.init.bind(this),
						update: ne.update.bind(this),
						destroy: ne.destroy.bind(this),
						onNextClick: ne.onNextClick.bind(this),
						onPrevClick: ne.onPrevClick.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.navigation.init(), this.navigation.update()
				},
				toEdge: function() {
					this.navigation.update()
				},
				fromEdge: function() {
					this.navigation.update()
				},
				destroy: function() {
					this.navigation.destroy()
				},
				click: function(e) {
					var t, i = this.navigation,
						s = i.$nextEl,
						a = i.$prevEl;
					!this.params.navigation.hideOnClick || n(e.target).is(a) || n(e.target).is(s) || (s ? t = s.hasClass(this.params.navigation.hiddenClass) : a && (t = a.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), s && s.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass))
				}
			}
		}, {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: function(e) {
						return e
					},
					formatFractionTotal: function(e) {
						return e
					},
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
					clickableClass: "swiper-pagination-clickable",
					lockClass: "swiper-pagination-lock"
				}
			},
			create: function() {
				d.extend(this, {
					pagination: {
						init: oe.init.bind(this),
						render: oe.render.bind(this),
						update: oe.update.bind(this),
						destroy: oe.destroy.bind(this),
						dynamicBulletIndex: 0
					}
				})
			},
			on: {
				init: function() {
					this.pagination.init(), this.pagination.render(), this.pagination.update()
				},
				activeIndexChange: function() {
					(this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
				},
				snapIndexChange: function() {
					this.params.loop || this.pagination.update()
				},
				slidesLengthChange: function() {
					this.params.loop && (this.pagination.render(), this.pagination.update())
				},
				snapGridLengthChange: function() {
					this.params.loop || (this.pagination.render(), this.pagination.update())
				},
				destroy: function() {
					this.pagination.destroy()
				},
				click: function(e) {
					this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !n(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
				}
			}
		}, {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag"
				}
			},
			create: function() {
				d.extend(this, {
					scrollbar: {
						init: le.init.bind(this),
						destroy: le.destroy.bind(this),
						updateSize: le.updateSize.bind(this),
						setTranslate: le.setTranslate.bind(this),
						setTransition: le.setTransition.bind(this),
						enableDraggable: le.enableDraggable.bind(this),
						disableDraggable: le.disableDraggable.bind(this),
						setDragPosition: le.setDragPosition.bind(this),
						getPointerPosition: le.getPointerPosition.bind(this),
						onDragStart: le.onDragStart.bind(this),
						onDragMove: le.onDragMove.bind(this),
						onDragEnd: le.onDragEnd.bind(this),
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}
				})
			},
			on: {
				init: function() {
					this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
				},
				update: function() {
					this.scrollbar.updateSize()
				},
				resize: function() {
					this.scrollbar.updateSize()
				},
				observerUpdate: function() {
					this.scrollbar.updateSize()
				},
				setTranslate: function() {
					this.scrollbar.setTranslate()
				},
				setTransition: function(e) {
					this.scrollbar.setTransition(e)
				},
				destroy: function() {
					this.scrollbar.destroy()
				}
			}
		}, {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function() {
				d.extend(this, {
					parallax: {
						setTransform: de.setTransform.bind(this),
						setTranslate: de.setTranslate.bind(this),
						setTransition: de.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
				},
				init: function() {
					this.params.parallax.enabled && this.parallax.setTranslate()
				},
				setTranslate: function() {
					this.params.parallax.enabled && this.parallax.setTranslate()
				},
				setTransition: function(e) {
					this.params.parallax.enabled && this.parallax.setTransition(e)
				}
			}
		}, {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function() {
				var e = this,
					t = {
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {}
						},
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					};
				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
					t[i] = he[i].bind(e)
				})), d.extend(e, {
					zoom: t
				});
				var i = 1;
				Object.defineProperty(e.zoom, "scale", {
					get: function() {
						return i
					},
					set: function(t) {
						if (i !== t) {
							var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
								a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
							e.emit("zoomChange", t, s, a)
						}
						i = t
					}
				})
			},
			on: {
				init: function() {
					this.params.zoom.enabled && this.zoom.enable()
				},
				destroy: function() {
					this.zoom.disable()
				},
				touchStart: function(e) {
					this.zoom.enabled && this.zoom.onTouchStart(e)
				},
				touchEnd: function(e) {
					this.zoom.enabled && this.zoom.onTouchEnd(e)
				},
				doubleTap: function(e) {
					this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
				},
				transitionEnd: function() {
					this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
				},
				slideChange: function() {
					this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
				}
			}
		}, {
			name: "lazy",
			params: {
				lazy: {
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function() {
				d.extend(this, {
					lazy: {
						initialImageLoaded: !1,
						load: pe.load.bind(this),
						loadInSlide: pe.loadInSlide.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
				},
				init: function() {
					this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
				},
				scroll: function() {
					this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
				},
				resize: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				scrollbarDragMove: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				transitionStart: function() {
					this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
				},
				transitionEnd: function() {
					this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
				},
				slideChange: function() {
					this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
				}
			}
		}, {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function() {
				d.extend(this, {
					controller: {
						control: this.params.controller.control,
						getInterpolateFunction: ce.getInterpolateFunction.bind(this),
						setTranslate: ce.setTranslate.bind(this),
						setTransition: ce.setTransition.bind(this)
					}
				})
			},
			on: {
				update: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				resize: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				observerUpdate: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				setTranslate: function(e, t) {
					this.controller.control && this.controller.setTranslate(e, t)
				},
				setTransition: function(e, t) {
					this.controller.control && this.controller.setTransition(e, t)
				}
			}
		}, {
			name: "a11y",
			params: {
				a11y: {
					enabled: !0,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}"
				}
			},
			create: function() {
				var e = this;
				d.extend(e, {
					a11y: {
						liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
					}
				}), Object.keys(ue).forEach((function(t) {
					e.a11y[t] = ue[t].bind(e)
				}))
			},
			on: {
				init: function() {
					this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
				},
				toEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				fromEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				paginationUpdate: function() {
					this.params.a11y.enabled && this.a11y.updatePagination()
				},
				destroy: function() {
					this.params.a11y.enabled && this.a11y.destroy()
				}
			}
		}, {
			name: "history",
			params: {
				history: {
					enabled: !1,
					replaceState: !1,
					key: "slides"
				}
			},
			create: function() {
				d.extend(this, {
					history: {
						init: ve.init.bind(this),
						setHistory: ve.setHistory.bind(this),
						setHistoryPopState: ve.setHistoryPopState.bind(this),
						scrollToSlide: ve.scrollToSlide.bind(this),
						destroy: ve.destroy.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.history.enabled && this.history.init()
				},
				destroy: function() {
					this.params.history.enabled && this.history.destroy()
				},
				transitionEnd: function() {
					this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
				},
				slideChange: function() {
					this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
				}
			}
		}, {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function() {
				d.extend(this, {
					hashNavigation: {
						initialized: !1,
						init: fe.init.bind(this),
						destroy: fe.destroy.bind(this),
						setHash: fe.setHash.bind(this),
						onHashCange: fe.onHashCange.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.init()
				},
				destroy: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.destroy()
				},
				transitionEnd: function() {
					this.hashNavigation.initialized && this.hashNavigation.setHash()
				},
				slideChange: function() {
					this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
				}
			}
		}, {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					waitForTransition: !0,
					disableOnInteraction: !0,
					stopOnLastSlide: !1,
					reverseDirection: !1
				}
			},
			create: function() {
				var e = this;
				d.extend(e, {
					autoplay: {
						running: !1,
						paused: !1,
						run: me.run.bind(e),
						start: me.start.bind(e),
						stop: me.stop.bind(e),
						pause: me.pause.bind(e),
						onVisibilityChange: function() {
							"hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
						},
						onTransitionEnd: function(t) {
							e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
						}
					}
				})
			},
			on: {
				init: function() {
					this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
				},
				beforeTransitionStart: function(e, t) {
					this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
				},
				sliderFirstMove: function() {
					this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
				},
				touchEnd: function() {
					this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
				},
				destroy: function() {
					this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
				}
			}
		}, {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function() {
				d.extend(this, {
					fadeEffect: {
						setTranslate: ge.setTranslate.bind(this),
						setTransition: ge.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					if ("fade" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "fade");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						d.extend(this.params, e), d.extend(this.originalParams, e)
					}
				},
				setTranslate: function() {
					"fade" === this.params.effect && this.fadeEffect.setTranslate()
				},
				setTransition: function(e) {
					"fade" === this.params.effect && this.fadeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function() {
				d.extend(this, {
					cubeEffect: {
						setTranslate: be.setTranslate.bind(this),
						setTransition: be.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					if ("cube" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						d.extend(this.params, e), d.extend(this.originalParams, e)
					}
				},
				setTranslate: function() {
					"cube" === this.params.effect && this.cubeEffect.setTranslate()
				},
				setTransition: function(e) {
					"cube" === this.params.effect && this.cubeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function() {
				d.extend(this, {
					flipEffect: {
						setTranslate: we.setTranslate.bind(this),
						setTransition: we.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					if ("flip" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						d.extend(this.params, e), d.extend(this.originalParams, e)
					}
				},
				setTranslate: function() {
					"flip" === this.params.effect && this.flipEffect.setTranslate()
				},
				setTransition: function(e) {
					"flip" === this.params.effect && this.flipEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					scale: 1,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function() {
				d.extend(this, {
					coverflowEffect: {
						setTranslate: ye.setTranslate.bind(this),
						setTransition: ye.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					"coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
				},
				setTranslate: function() {
					"coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
				},
				setTransition: function(e) {
					"coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
				}
			}
		}, {
			name: "thumbs",
			params: {
				thumbs: {
					swiper: null,
					multipleActiveThumbs: !0,
					autoScrollOffset: 0,
					slideThumbActiveClass: "swiper-slide-thumb-active",
					thumbsContainerClass: "swiper-container-thumbs"
				}
			},
			create: function() {
				d.extend(this, {
					thumbs: {
						swiper: null,
						init: xe.init.bind(this),
						update: xe.update.bind(this),
						onThumbClick: xe.onThumbClick.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this.params.thumbs;
					e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
				},
				slideChange: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				update: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				resize: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				observerUpdate: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				setTransition: function(e) {
					var t = this.thumbs.swiper;
					t && t.setTransition(e)
				},
				beforeDestroy: function() {
					var e = this.thumbs.swiper;
					e && this.thumbs.swiperCreated && e && e.destroy()
				}
			}
		}];
	return void 0 === j.use && (j.use = j.Class.use, j.installModule = j.Class.installModule), j.use(Ee), j
}));

(function() {
	var a, b, c, d = function(a, b) {
			return function() {
				return a.apply(b, arguments)
			}
		},
		e = [].indexOf || function(a) {
			for (var b = 0, c = this.length; c > b; b++)
				if (b in this && this[b] === a) return b;
			return -1
		};
	b = function() {
		function a() {}
		return a.prototype.extend = function(a, b) {
			var c, d;
			for (c in b) d = b[c], null == a[c] && (a[c] = d);
			return a
		}, a.prototype.isMobile = function(a) {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
		}, a
	}(), c = this.WeakMap || this.MozWeakMap || (c = function() {
		function a() {
			this.keys = [], this.values = []
		}
		return a.prototype.get = function(a) {
			var b, c, d, e, f;
			for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
				if (c = f[b], c === a) return this.values[b]
		}, a.prototype.set = function(a, b) {
			var c, d, e, f, g;
			for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
				if (d = g[c], d === a) return void(this.values[c] = b);
			return this.keys.push(a), this.values.push(b)
		}, a
	}()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
		function a() {
			console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
		}
		return a.notSupported = !0, a.prototype.observe = function() {}, a
	}()), this.WOW = function() {
		function f(a) {
			null == a && (a = {}), this.scrollCallback = d(this.scrollCallback, this), this.scrollHandler = d(this.scrollHandler, this), this.start = d(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c
		}
		return f.prototype.defaults = {
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: !0,
			live: !0
		}, f.prototype.init = function() {
			var a;
			return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = []
		}, f.prototype.start = function() {
			var b, c, d, e;
			if (this.stopped = !1, this.boxes = function() {
					var a, c, d, e;
					for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
					return e
				}.call(this), this.all = function() {
					var a, c, d, e;
					for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
					return e
				}.call(this), this.boxes.length)
				if (this.disabled()) this.resetStyle();
				else {
					for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
					window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
				} return this.config.live ? new a(function(a) {
				return function(b) {
					var c, d, e, f, g;
					for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], g.push(function() {
						var a, b, e, f;
						for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) c = e[a], f.push(this.doSync(c));
						return f
					}.call(a));
					return g
				}
			}(this)).observe(document.body, {
				childList: !0,
				subtree: !0
			}) : void 0
		}, f.prototype.stop = function() {
			return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
		}, f.prototype.sync = function() {
			return a.notSupported ? this.doSync(this.element) : void 0
		}, f.prototype.doSync = function(a) {
			var b, c, d, f, g;
			if (!this.stopped) {
				if (null == a && (a = this.element), 1 !== a.nodeType) return;
				for (a = a.parentNode || a, f = a.querySelectorAll("." + this.config.boxClass), g = [], c = 0, d = f.length; d > c; c++) b = f[c], e.call(this.all, b) < 0 ? (this.applyStyle(b, !0), this.boxes.push(b), this.all.push(b), g.push(this.scrolled = !0)) : g.push(void 0);
				return g
			}
		}, f.prototype.show = function(a) {
			return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass
		}, f.prototype.applyStyle = function(a, b) {
			var c, d, e;
			return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
				return function() {
					return f.customStyle(a, b, d, c, e)
				}
			}(this))
		}, f.prototype.animate = function() {
			return "requestAnimationFrame" in window ? function(a) {
				return window.requestAnimationFrame(a)
			} : function(a) {
				return a()
			}
		}(), f.prototype.resetStyle = function() {
			var a, b, c, d, e;
			for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.setAttribute("style", "visibility: visible;"));
			return e
		}, f.prototype.customStyle = function(a, b, c, d, e) {
			return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
				animationDuration: c
			}), d && this.vendorSet(a.style, {
				animationDelay: d
			}), e && this.vendorSet(a.style, {
				animationIterationCount: e
			}), this.vendorSet(a.style, {
				animationName: b ? "none" : this.cachedAnimationName(a)
			}), a
		}, f.prototype.vendors = ["moz", "webkit"], f.prototype.vendorSet = function(a, b) {
			var c, d, e, f;
			f = [];
			for (c in b) d = b[c], a["" + c] = d, f.push(function() {
				var b, f, g, h;
				for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
				return h
			}.call(this));
			return f
		}, f.prototype.vendorCSS = function(a, b) {
			var c, d, e, f, g, h;
			for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this.vendors, f = 0, g = h.length; g > f; f++) e = h[f], c = c || d.getPropertyCSSValue("-" + e + "-" + b);
			return c
		}, f.prototype.animationName = function(a) {
			var b;
			try {
				b = this.vendorCSS(a, "animation-name").cssText
			} catch (c) {
				b = window.getComputedStyle(a).getPropertyValue("animation-name")
			}
			return "none" === b ? "" : b
		}, f.prototype.cacheAnimationName = function(a) {
			return this.animationNameCache.set(a, this.animationName(a))
		}, f.prototype.cachedAnimationName = function(a) {
			return this.animationNameCache.get(a)
		}, f.prototype.scrollHandler = function() {
			return this.scrolled = !0
		}, f.prototype.scrollCallback = function() {
			var a;
			return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
				var b, c, d, e;
				for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
				return e
			}.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
		}, f.prototype.offsetTop = function(a) {
			for (var b; void 0 === a.offsetTop;) a = a.parentNode;
			for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
			return b
		}, f.prototype.isVisible = function(a) {
			var b, c, d, e, f;
			return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, innerHeight) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
		}, f.prototype.util = function() {
			return null != this._util ? this._util : this._util = new b
		}, f.prototype.disabled = function() {
			return !this.config.mobile && this.util().isMobile(navigator.userAgent)
		}, f
	}()
}).call(this);

! function(a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		}, this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		}, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
			this._handlers[c] = a.proxy(this[c], this)
		}, this)), a.each(e.Plugins, a.proxy(function(a, b) {
			this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Workers, a.proxy(function(b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}
	e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		checkVisibility: !0,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		fallbackEasing: "swing",
		slideTransition: "",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, e.Type = {
		Event: "event",
		State: "state"
	}, e.Plugins = {}, e.Workers = [{
		filter: ["width", "settings"],
		run: function() {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = this.settings.margin || "",
				c = !this.settings.autoWidth,
				d = this.settings.rtl,
				e = {
					width: "auto",
					"margin-left": d ? b : "",
					"margin-right": d ? "" : b
				};
			!c && this.$stage.children().css(e), a.css = e
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				c = null,
				d = this._items.length,
				e = !this.settings.autoWidth,
				f = [];
			for (a.items = {
					merge: !1,
					width: b
				}; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
			this._widths = f
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			var b = [],
				c = this._items,
				d = this.settings,
				e = Math.max(2 * d.items, 4),
				f = 2 * Math.ceil(c.length / 2),
				g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
				h = "",
				i = "";
			for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
			this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
			this._coordinates = f
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			var a = this.settings.stagePadding,
				b = this._coordinates,
				c = {
					width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
					"padding-left": a || "",
					"padding-right": a || ""
				};
			this.$stage.css(c)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = this._coordinates.length,
				c = !this.settings.autoWidth,
				d = this.$stage.children();
			if (c && a.items.merge)
				for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
			else c && (a.css.width = a.items.width, d.css(a.css))
		}
	}, {
		filter: ["items"],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
		}
	}, {
		filter: ["position"],
		run: function() {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function() {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1,
				f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f,
				h = g + this.width() * e,
				i = [];
			for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
		}
	}], e.prototype.initializeStage = function() {
		this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
			class: this.settings.stageClass
		}).wrap(a("<div/>", {
			class: this.settings.stageOuterClass
		})), this.$element.append(this.$stage.parent()))
	}, e.prototype.initializeItems = function() {
		var b = this.$element.find(".owl-item");
		if (b.length) return this._items = b.get().map(function(b) {
			return a(b)
		}), this._mergers = this._items.map(function() {
			return 1
		}), void this.refresh();
		this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
	}, e.prototype.initialize = function() {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var a, b, c;
			a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
		}
		this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, e.prototype.isVisible = function() {
		return !this.settings.checkVisibility || this.$element.is(":visible")
	}, e.prototype.setup = function() {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c ? (a.each(c, function(a) {
			a <= b && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, e.prototype.optionsLogic = function() {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function(b) {
		var c = this.trigger("prepare", {
			content: b
		});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
			content: c.data
		}), c.data
	}, e.prototype.update = function() {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
				return this[a]
			}, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, e.prototype.width = function(a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function() {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, e.prototype.onThrottledResize = function() {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function() {
		return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
	}, e.prototype.registerEventHandlers = function() {
		a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
	}, e.prototype.onDragStart = function(b) {
		var d = null;
		3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
			x: d[16 === d.length ? 12 : 4],
			y: d[16 === d.length ? 13 : 5]
		}) : (d = this.$stage.position(), d = {
			x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
			y: d.top
		}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
			var d = this.difference(this._drag.pointer, this.pointer(b));
			a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}, this)))
	}, e.prototype.onDragMove = function(a) {
		var b = null,
			c = null,
			d = null,
			e = this.difference(this._drag.pointer, this.pointer(a)),
			f = this.difference(this._drag.stage.start, e);
		this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
	}, e.prototype.onDragEnd = function(b) {
		var d = this.difference(this._drag.pointer, this.pointer(b)),
			e = this._drag.stage.current,
			f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
		a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, e.prototype.closest = function(b, c) {
		var e = -1,
			f = 30,
			g = this.width(),
			h = this.coordinates();
		return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
			return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
		}, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
	}, e.prototype.animate = function(b) {
		var c = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
		}) : c ? this.$stage.animate({
			left: b + "px"
		}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
			left: b + "px"
		})
	}, e.prototype.is = function(a) {
		return this._states.current[a] && this._states.current[a] > 0
	}, e.prototype.current = function(a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function(b) {
		return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
			return b
		})
	}, e.prototype.reset = function(a) {
		(a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function(a, b) {
		var c = this._items.length,
			e = b ? 0 : this._clones.length;
		return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
	}, e.prototype.relative = function(a) {
		return a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function(a) {
		var b, c, d, e = this.settings,
			f = this._coordinates.length;
		if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
		else if (e.autoWidth || e.merge) {
			if (b = this._items.length)
				for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
			f = b + 1
		} else f = e.center ? this._items.length - 1 : this._items.length - e.items;
		return a && (f -= this._clones.length / 2), Math.max(f, 0)
	}, e.prototype.minimum = function(a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function(a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function(a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function(b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function(a) {
				return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
			};
		return b === d ? a.map(this._clones, function(a, b) {
			return f(b)
		}) : a.map(this._clones, function(a, c) {
			return a === b ? f(c) : null
		})
	}, e.prototype.speed = function(a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function(b) {
		var c, e = 1,
			f = b - 1;
		return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
	}, e.prototype.duration = function(a, b, c) {
		return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	}, e.prototype.to = function(a, b) {
		var c = this.current(),
			d = null,
			e = a - this.relative(c),
			f = (e > 0) - (e < 0),
			g = this._items.length,
			h = this.minimum(),
			i = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
	}, e.prototype.next = function(a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function(a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.onTransitionEnd = function(a) {
		if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
		this.leave("animating"), this.trigger("translated")
	}, e.prototype.viewport = function() {
		var d;
		return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
	}, e.prototype.replace = function(b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
			return 1 === this.nodeType
		}).each(a.proxy(function(a, b) {
			b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function(b, c) {
		var e = this.relative(this._current);
		c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
			content: b,
			position: c
		}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
			content: b,
			position: c
		})
	}, e.prototype.remove = function(a) {
		(a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.preloadAutoWidthImages = function(b) {
		b.each(a.proxy(function(b, c) {
			this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
				c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
		}, this))
	}, e.prototype.destroy = function() {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
		for (var d in this._plugins) this._plugins[d].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, e.prototype.op = function(a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case "<":
				return d ? a > c : a < c;
			case ">":
				return d ? a < c : a > c;
			case ">=":
				return d ? a <= c : a >= c;
			case "<=":
				return d ? a >= c : a <= c
		}
	}, e.prototype.on = function(a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function(a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function(b, c, d, f, g) {
		var h = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			i = a.camelCase(a.grep(["on", b, d], function(a) {
				return a
			}).join("-").toLowerCase()),
			j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
				relatedTarget: this
			}, h, c));
		return this._supress[b] || (a.each(this._plugins, function(a, b) {
			b.onTrigger && b.onTrigger(j)
		}), this.register({
			type: e.Type.Event,
			name: b
		}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
	}, e.prototype.enter = function(b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
			this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
		}, this))
	}, e.prototype.leave = function(b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
			this._states.current[b]--
		}, this))
	}, e.prototype.register = function(b) {
		if (b.type === e.Type.Event) {
			if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
				var c = a.event.special[b.name]._default;
				a.event.special[b.name]._default = function(a) {
					return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
				}, a.event.special[b.name].owl = !0
			}
		} else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
			return a.inArray(c, this._states.tags[b.name]) === d
		}, this)))
	}, e.prototype.suppress = function(b) {
		a.each(b, a.proxy(function(a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function(b) {
		a.each(b, a.proxy(function(a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.pointer = function(a) {
		var c = {
			x: null,
			y: null
		};
		return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
	}, e.prototype.isNumeric = function(a) {
		return !isNaN(parseFloat(a))
	}, e.prototype.difference = function(a, b) {
		return {
			x: a.x - b.x,
			y: a.y - b.y
		}
	}, a.fn.owlCarousel = function(b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var d = a(this),
				f = d.data("owl.carousel");
			f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
				f.register({
					type: e.Type.Event,
					name: c
				}), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
					a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
				}, f))
			})), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, e.prototype.watch = function() {
		this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, e.prototype.refresh = function() {
		this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, e.prototype.destroy = function() {
		var a, c;
		b.clearInterval(this._interval);
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
					var c = this._core.settings,
						e = c.center && Math.ceil(c.items / 2) || c.items,
						f = c.center && -1 * e || 0,
						g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
						h = this._core.clones().length,
						i = a.proxy(function(a, b) {
							this.load(b)
						}, this);
					for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		lazyLoad: !1,
		lazyLoadEager: 0
	}, e.prototype.load = function(c) {
		var d = this._core.$stage.children().eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
			var e, f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
				f.css("opacity", 1), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
				this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function() {
				f.css({
					"background-image": 'url("' + g + '")',
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, e.prototype.destroy = function() {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(c) {
		this._core = c, this._previousHeight = null, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
			}, this),
			"loaded.owl.lazy": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
		var d = this;
		a(b).on("load", function() {
			d._core.settings.autoHeight && d.update()
		}), a(b).resize(function() {
			d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function() {
				d.update()
			}, 250))
		})
	};
	e.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, e.prototype.update = function() {
		var b = this._core._current,
			c = b + this._core.settings.items,
			d = this._core.settings.lazyLoad,
			e = this._core.$stage.children().toArray().slice(b, c),
			f = [],
			g = 0;
		a.each(e, function(b, c) {
			f.push(a(c).height())
		}), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function() {
		var a, b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			}, this),
			"resize.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
			}, this),
			"refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" === a.property.name && this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function(b) {
				if (b.namespace) {
					var c = a(b.content).find(".owl-video");
					c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
			this.play(a)
		}, this))
	};
	e.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, e.prototype.fetch = function(a, b) {
		var c = function() {
				return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
			}(),
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
		else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
		else {
			if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			c = "vzaar"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, e.prototype.thumbnail = function(b, c) {
		var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function(c) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
					class: "owl-video-tn " + j,
					srcType: c
				}) : a("<div/>", {
					class: "owl-video-tn",
					style: "opacity:1;background-image:url(" + c + ")"
				}), b.after(d), b.after(e)
			};
		if (b.wrap(a("<div/>", {
				class: "owl-video-wrapper",
				style: g
			})), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
		"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(a) {
				f = a[0].thumbnail_large, l(f)
			}
		}) : "vzaar" === c.type && a.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(a) {
				f = a.framegrab_url, l(f)
			}
		})
	}, e.prototype.stop = function() {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, e.prototype.play = function(b) {
		var c, d = a(b.target),
			e = d.closest("." + this._core.settings.itemClass),
			f = this._videos[e.attr("data-video")],
			g = f.width || "100%",
			h = f.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
	}, e.prototype.isInFullScreen = function() {
		var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return b && a(b).parent().hasClass("owl-video-frame")
	}, e.prototype.destroy = function() {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
				a.namespace && (this.swapping = "translated" == a.type)
			}, this),
			"translate.owl.carousel": a.proxy(function(a) {
				a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, e.prototype.swap = function() {
		if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
			this.core.speed(0);
			var b, c = a.proxy(this.clear, this),
				d = this.core.$stage.children().eq(this.previous),
				e = this.core.$stage.children().eq(this.next),
				f = this.core.settings.animateIn,
				g = this.core.settings.animateOut;
			this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
				left: b + "px"
			}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
		}
	}, e.prototype.clear = function(b) {
		a(b.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
	}, e.prototype.destroy = function() {
		var a, b;
		for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
			}, this),
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": a.proxy(function(a, b, c) {
				a.namespace && this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function(a) {
				a.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this),
			"touchstart.owl.core": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"touchend.owl.core": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
	};
	e.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, e.prototype._next = function(d) {
		this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
	}, e.prototype.read = function() {
		return (new Date).getTime() - this._time
	}, e.prototype.play = function(c, d) {
		var e;
		this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
	}, e.prototype.stop = function() {
		this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
	}, e.prototype.pause = function() {
		this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
	}, e.prototype.destroy = function() {
		var a, b;
		this.stop();
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	"use strict";
	var e = function(b) {
		this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function(b) {
				b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}, this),
			"added.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
			}, this),
			"remove.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" == a.property.name && this.draw()
			}, this),
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this),
			"refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	e.Defaults = {
		nav: !1,
		navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
		navSpeed: !1,
		navElement: 'button type="button" role="presentation"',
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, e.prototype.initialize = function() {
		var b, c = this._core.settings;
		this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
			this.prev(c.navSpeed)
		}, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
			this.next(c.navSpeed)
		}, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function(b) {
			var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
			b.preventDefault(), this.to(d, c.dotsSpeed)
		}, this));
		for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
	}, e.prototype.destroy = function() {
		var a, b, c, d, e;
		e = this._core.settings;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, e.prototype.update = function() {
		var a, b, c, d = this._core.clones().length / 2,
			e = d + this._core.items().length,
			f = this._core.maximum(!0),
			g = this._core.settings,
			h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
		if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
			for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
				if (b >= h || 0 === b) {
					if (this._pages.push({
							start: Math.min(f, a - d),
							end: a - d + h - 1
						}), Math.min(f, a - d) === f) break;
					b = 0, ++c
				}
				b += this._core.mergers(this._core.relative(a))
			}
	}, e.prototype.draw = function() {
		var b, c = this._core.settings,
			d = this._core.items().length <= c.items,
			e = this._core.relative(this._core.current()),
			f = c.loop || c.rewind;
		this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
	}, e.prototype.onTrigger = function(b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
		}
	}, e.prototype.current = function() {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, a.proxy(function(a, c) {
			return a.start <= b && a.end >= b
		}, this)).pop()
	}, e.prototype.getPosition = function(b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
	}, e.prototype.next = function(b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, e.prototype.prev = function(b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, e.prototype.to = function(b, c, d) {
		var e;
		!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	"use strict";
	var e = function(c) {
		this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": a.proxy(function(c) {
				c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": a.proxy(function(b) {
				if (b.namespace) {
					var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!c) return;
					this._hashes[c] = b.content
				}
			}, this),
			"changed.owl.carousel": a.proxy(function(c) {
				if (c.namespace && "position" === c.property.name) {
					var d = this._core.items(this._core.relative(this._core.current())),
						e = a.map(this._hashes, function(a, b) {
							return a === d ? b : null
						}).join();
					if (!e || b.location.hash.slice(1) === e) return;
					b.location.hash = e
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
			var c = b.location.hash.substring(1),
				e = this._core.$stage.children(),
				f = this._hashes[c] && e.index(this._hashes[c]);
			f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
		}, this))
	};
	e.Defaults = {
		URLhashListener: !1
	}, e.prototype.destroy = function() {
		var c, d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	function e(b, c) {
		var e = !1,
			f = b.charAt(0).toUpperCase() + b.slice(1);
		return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
			if (g[b] !== d) return e = !c || b, !1
		}), e
	}

	function f(a) {
		return e(a, !0)
	}
	var g = a("<support>").get(0).style,
		h = "Webkit Moz O ms".split(" "),
		i = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		},
		j = {
			csstransforms: function() {
				return !!e("transform")
			},
			csstransforms3d: function() {
				return !!e("perspective")
			},
			csstransitions: function() {
				return !!e("transition")
			},
			cssanimations: function() {
				return !!e("animation")
			}
		};
	j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

! function(t) {
	var e = {},
		s = {
			mode: "horizontal",
			slideSelector: "",
			infiniteLoop: !0,
			hideControlOnEnd: !1,
			speed: 500,
			easing: null,
			slideMargin: 0,
			startSlide: 0,
			randomStart: !1,
			captions: !1,
			ticker: !1,
			tickerHover: !1,
			adaptiveHeight: !1,
			adaptiveHeightSpeed: 500,
			video: !1,
			useCSS: !0,
			preloadImages: "visible",
			responsive: !0,
			slideZIndex: 50,
			touchEnabled: !0,
			swipeThreshold: 50,
			oneToOneTouch: !0,
			preventDefaultSwipeX: !0,
			preventDefaultSwipeY: !1,
			pager: !0,
			pagerType: "full",
			pagerShortSeparator: " / ",
			pagerSelector: null,
			buildPager: null,
			pagerCustom: null,
			controls: !0,
			nextText: "Next",
			prevText: "Prev",
			nextSelector: null,
			prevSelector: null,
			autoControls: !1,
			startText: "Start",
			stopText: "Stop",
			autoControlsCombine: !1,
			autoControlsSelector: null,
			auto: !1,
			pause: 4e3,
			autoStart: !0,
			autoDirection: "next",
			autoHover: !1,
			autoDelay: 0,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 0,
			slideWidth: 0,
			onSliderLoad: function() {},
			onSlideBefore: function() {},
			onSlideAfter: function() {},
			onSlideNext: function() {},
			onSlidePrev: function() {},
			onSliderResize: function() {}
		};
	t.fn.bxSlider = function(n) {
		if (0 == this.length) return this;
		if (this.length > 1) return this.each(function() {
			t(this).bxSlider(n)
		}), this;
		var o = {},
			r = this;
		e.el = this;
		var a = t(window).width(),
			l = t(window).height(),
			d = function() {
				o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
					index: o.settings.startSlide
				}, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
					var t = document.createElement("div"),
						e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for (var i in e)
						if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
					return !1
				}(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() {
					t(this).data("origStyle", t(this).attr("style"))
				}), c()
			},
			c = function() {
				r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
					width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
					position: "relative"
				}), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
					width: "100%",
					overflow: "hidden",
					position: "relative"
				}), o.viewport.parent().css({
					maxWidth: p()
				}), o.settings.pager || o.viewport.parent().css({
					margin: "0 auto 0px"
				}), o.children.css({
					"float": "horizontal" == o.settings.mode ? "left" : "none",
					listStyle: "none",
					position: "relative"
				}), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
					position: "absolute",
					zIndex: 0,
					display: "none"
				}), o.children.eq(o.settings.startSlide).css({
					zIndex: o.settings.slideZIndex,
					display: "block"
				})), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
				var e = o.children.eq(o.settings.startSlide);
				"all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
			},
			g = function(e, i) {
				var s = e.find("img, iframe").length;
				if (0 == s) return i(), void 0;
				var n = 0;
				e.find("img, iframe").each(function() {
					t(this).one("load", function() {
						++n == s && i()
					}).each(function() {
						this.complete && t(this).load()
					})
				})
			},
			h = function() {
				if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
					var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
						i = o.children.slice(0, e).clone().addClass("bx-clone"),
						s = o.children.slice(-e).clone().addClass("bx-clone");
					r.append(i).prepend(s)
				}
				o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
			},
			v = function() {
				var e = 0,
					s = t();
				if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
					if (o.carousel) {
						var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
						for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
					} else s = o.children.eq(o.active.index);
				else s = o.children;
				return "vertical" == o.settings.mode ? (s.each(function() {
					e += t(this).outerHeight()
				}), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() {
					return t(this).outerHeight(!1)
				}).get()), e
			},
			p = function() {
				var t = "100%";
				return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
			},
			u = function() {
				var t = o.settings.slideWidth,
					e = o.viewport.width();
				return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
			},
			f = function() {
				var t = 1;
				if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
					if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
					else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
				else {
					var e = o.children.first().width();
					t = Math.floor(o.viewport.width() / e)
				} else "vertical" == o.settings.mode && (t = o.settings.minSlides);
				return t
			},
			x = function() {
				var t = 0;
				if (o.settings.moveSlides > 0)
					if (o.settings.infiniteLoop) t = o.children.length / m();
					else
						for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
				else t = Math.ceil(o.children.length / f());
				return t
			},
			m = function() {
				return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
			},
			S = function() {
				if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
					if ("horizontal" == o.settings.mode) {
						var t = o.children.last(),
							e = t.position();
						b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
					} else if ("vertical" == o.settings.mode) {
						var i = o.children.length - o.settings.minSlides,
							e = o.children.eq(i).position();
						b(-e.top, "reset", 0)
					}
				} else {
					var e = o.children.eq(o.active.index * m()).position();
					o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
				}
			},
			b = function(t, e, i, s) {
				if (o.usingCSS) {
					var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
					r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
						r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
					})) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
						r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
					}))
				} else {
					var a = {};
					a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function() {
						D()
					}) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() {
						b(s.resetValue, "reset", 0), N()
					})
				}
			},
			w = function() {
				for (var e = "", i = x(), s = 0; i > s; s++) {
					var n = "";
					o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
				}
				o.pagerEl.html(e)
			},
			T = function() {
				o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)
			},
			C = function() {
				o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
			},
			E = function() {
				o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
			},
			P = function() {
				o.children.each(function() {
					var e = t(this).find("img:first").attr("title");
					void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
				})
			},
			y = function(t) {
				o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
			},
			z = function(t) {
				o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
			},
			k = function(t) {
				r.startAuto(), t.preventDefault()
			},
			M = function(t) {
				r.stopAuto(), t.preventDefault()
			},
			I = function(e) {
				o.settings.auto && r.stopAuto();
				var i = t(e.currentTarget),
					s = parseInt(i.attr("data-slide-index"));
				s != o.active.index && r.goToSlide(s), e.preventDefault()
			},
			q = function(e) {
				var i = o.children.length;
				return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function(i, s) {
					t(s).find("a").eq(e).addClass("active")
				}), void 0)
			},
			D = function() {
				if (o.settings.infiniteLoop) {
					var t = "";
					0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
				}
				o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
			},
			A = function(t) {
				o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
			},
			W = function() {
				1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
			},
			H = function() {
				o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function() {
					o.interval && (r.stopAuto(!0), o.autoPaused = !0)
				}, function() {
					o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
				})
			},
			L = function() {
				var e = 0;
				if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
				else {
					r.prepend(o.children.clone().addClass("bx-clone"));
					var i = o.children.first().position();
					e = "horizontal" == o.settings.mode ? -i.left : -i.top
				}
				b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
					r.stop()
				}, function() {
					var e = 0;
					o.children.each(function() {
						e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
					});
					var i = o.settings.speed / e,
						s = "horizontal" == o.settings.mode ? "left" : "top",
						n = i * (e - Math.abs(parseInt(r.css(s))));
					N(n)
				}), N()
			},
			N = function(t) {
				speed = t ? t : o.settings.speed;
				var e = {
						left: 0,
						top: 0
					},
					i = {
						left: 0,
						top: 0
					};
				"next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
				var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
					n = "horizontal" == o.settings.mode ? -i.left : -i.top,
					a = {
						resetValue: n
					};
				b(s, "ticker", speed, a)
			},
			O = function() {
				o.touch = {
					start: {
						x: 0,
						y: 0
					},
					end: {
						x: 0,
						y: 0
					}
				}, o.viewport.bind("touchstart", X)
			},
			X = function(t) {
				if (o.working) t.preventDefault();
				else {
					o.touch.originalPos = r.position();
					var e = t.originalEvent;
					o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
				}
			},
			Y = function(t) {
				var e = t.originalEvent,
					i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
					s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
				if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
					var n = 0;
					if ("horizontal" == o.settings.mode) {
						var r = e.changedTouches[0].pageX - o.touch.start.x;
						n = o.touch.originalPos.left + r
					} else {
						var r = e.changedTouches[0].pageY - o.touch.start.y;
						n = o.touch.originalPos.top + r
					}
					b(n, "reset", 0)
				}
			},
			V = function(t) {
				o.viewport.unbind("touchmove", Y);
				var e = t.originalEvent,
					i = 0;
				if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
					var s = Math.abs(o.touch.start.x - o.touch.end.x);
					s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
				} else {
					var s = 0;
					"horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
				}
				o.viewport.unbind("touchend", V)
			},
			Z = function() {
				var e = t(window).width(),
					i = t(window).height();
				(a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
			};
		return r.goToSlide = function(e, i) {
			if (!o.working && o.active.index != e)
				if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
					height: v()
				}, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
					zIndex: 0
				}), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
					t(this).css("zIndex", o.settings.slideZIndex), D()
				});
				else {
					o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
						height: v()
					}, o.settings.adaptiveHeightSpeed);
					var s = 0,
						n = {
							left: 0,
							top: 0
						};
					if (!o.settings.infiniteLoop && o.carousel && o.active.last)
						if ("horizontal" == o.settings.mode) {
							var a = o.children.eq(o.children.length - 1);
							n = a.position(), s = o.viewport.width() - a.outerWidth()
						} else {
							var l = o.children.length - o.settings.minSlides;
							n = o.children.eq(l).position()
						}
					else if (o.carousel && o.active.last && "prev" == i) {
						var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
							a = r.children(".bx-clone").eq(d);
						n = a.position()
					} else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
					else if (e >= 0) {
						var c = e * m();
						n = o.children.eq(c).position()
					}
					if ("undefined" != typeof n) {
						var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
						b(g, "slide", o.settings.speed)
					}
				}
		}, r.goToNextSlide = function() {
			if (o.settings.infiniteLoop || !o.active.last) {
				var t = parseInt(o.active.index) + 1;
				r.goToSlide(t, "next")
			}
		}, r.goToPrevSlide = function() {
			if (o.settings.infiniteLoop || 0 != o.active.index) {
				var t = parseInt(o.active.index) - 1;
				r.goToSlide(t, "prev")
			}
		}, r.startAuto = function(t) {
			o.interval || (o.interval = setInterval(function() {
				"next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
			}, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
		}, r.stopAuto = function(t) {
			o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
		}, r.getCurrentSlide = function() {
			return o.active.index
		}, r.getCurrentSlideElement = function() {
			return o.children.eq(o.active.index)
		}, r.getSlideCount = function() {
			return o.children.length
		}, r.redrawSlider = function() {
			o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
		}, r.destroySlider = function() {
			o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
				void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
			}), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Z))
		}, r.reloadSlider = function(t) {
			void 0 != t && (n = t), r.destroySlider(), d()
		}, d(), this
	}
}(jQuery);
! function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
	function e(e, s) {
		var n, o, a, r = e.nodeName.toLowerCase();
		return "area" === r ? (o = (n = e.parentNode).name, !!e.href && !!o && "map" === n.nodeName.toLowerCase() && !!(a = t("img[usemap='#" + o + "']")[0]) && i(a)) : (/^(input|select|textarea|button|object)$/.test(r) ? !e.disabled : "a" === r && e.href || s) && i(e)
	}

	function i(e) {
		return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
			return "hidden" === t.css(this, "visibility")
		}).length
	}
	t.ui = t.ui || {}, t.extend(t.ui, {
		version: "1.11.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), t.fn.extend({
		scrollParent: function(e) {
			var i = this.css("position"),
				s = "absolute" === i,
				n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				o = this.parents().filter(function() {
					var e = t(this);
					return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
				}).eq(0);
			return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
		},
		uniqueId: (s = 0, function() {
			return this.each(function() {
				this.id || (this.id = "ui-id-" + ++s)
			})
		}),
		removeUniqueId: function() {
			return this.each(function() {
				/^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
			})
		}
	}), t.extend(t.expr[":"], {
		data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
			return function(i) {
				return !!t.data(i, e)
			}
		}) : function(e, i, s) {
			return !!t.data(e, s[3])
		},
		focusable: function(i) {
			return e(i, !isNaN(t.attr(i, "tabindex")))
		},
		tabbable: function(i) {
			var s = t.attr(i, "tabindex"),
				n = isNaN(s);
			return (n || s >= 0) && e(i, !n)
		}
	}), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
		var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
			n = i.toLowerCase(),
			o = {
				innerWidth: t.fn.innerWidth,
				innerHeight: t.fn.innerHeight,
				outerWidth: t.fn.outerWidth,
				outerHeight: t.fn.outerHeight
			};

		function a(e, i, n, o) {
			return t.each(s, function() {
				i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
			}), i
		}
		t.fn["inner" + i] = function(e) {
			return void 0 === e ? o["inner" + i].call(this) : this.each(function() {
				t(this).css(n, a(this, e) + "px")
			})
		}, t.fn["outer" + i] = function(e, s) {
			return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() {
				t(this).css(n, a(this, e, !0, s) + "px")
			})
		}
	}), t.fn.addBack || (t.fn.addBack = function(t) {
		return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	}), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = (n = t.fn.removeData, function(e) {
		return arguments.length ? n.call(this, t.camelCase(e)) : n.call(this)
	})), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
		focus: (o = t.fn.focus, function(e, i) {
			return "number" == typeof e ? this.each(function() {
				var s = this;
				setTimeout(function() {
					t(s).focus(), i && i.call(s)
				}, e)
			}) : o.apply(this, arguments)
		}),
		disableSelection: (a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
			return this.bind(a + ".ui-disableSelection", function(t) {
				t.preventDefault()
			})
		}),
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function(e) {
			if (void 0 !== e) return this.css("zIndex", e);
			if (this.length)
				for (var i, s, n = t(this[0]); n.length && n[0] !== document;) {
					if (("absolute" === (i = n.css("position")) || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
					n = n.parent()
				}
			return 0
		}
	}), t.ui.plugin = {
		add: function(e, i, s) {
			var n, o = t.ui[e].prototype;
			for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
		},
		call: function(t, e, i, s) {
			var n, o = t.plugins[e];
			if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
				for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
		}
	};
	var s, n, o, a, r, h, l = 0,
		c = Array.prototype.slice;
	t.cleanData = (h = t.cleanData, function(e) {
		var i, s, n;
		for (n = 0; null != (s = e[n]); n++) try {
			(i = t._data(s, "events")) && i.remove && t(s).triggerHandler("remove")
		} catch (o) {}
		h(e)
	}), t.widget = function(e, i, s) {
		var n, o, a, r, h = {},
			l = e.split(".")[0];
		return n = l + "-" + (e = e.split(".")[1]), s || (s = i, i = t.Widget), t.expr[":"][n.toLowerCase()] = function(e) {
			return !!t.data(e, n)
		}, t[l] = t[l] || {}, o = t[l][e], a = t[l][e] = function(t, e) {
			if (!this._createWidget) return new a(t, e);
			arguments.length && this._createWidget(t, e)
		}, t.extend(a, o, {
			version: s.version,
			_proto: t.extend({}, s),
			_childConstructors: []
		}), (r = new i).options = t.widget.extend({}, r.options), t.each(s, function(e, s) {
			var n, o;
			if (!t.isFunction(s)) {
				h[e] = s;
				return
			}
			h[e] = (n = function() {
				return i.prototype[e].apply(this, arguments)
			}, o = function(t) {
				return i.prototype[e].apply(this, t)
			}, function() {
				var t, e = this._super,
					i = this._superApply;
				return this._super = n, this._superApply = o, t = s.apply(this, arguments), this._super = e, this._superApply = i, t
			})
		}), a.prototype = t.widget.extend(r, {
			widgetEventPrefix: o && r.widgetEventPrefix || e
		}, h, {
			constructor: a,
			namespace: l,
			widgetName: e,
			widgetFullName: n
		}), o ? (t.each(o._childConstructors, function(e, i) {
			var s = i.prototype;
			t.widget(s.namespace + "." + s.widgetName, a, i._proto)
		}), delete o._childConstructors) : i._childConstructors.push(a), t.widget.bridge(e, a), a
	}, t.widget.extend = function(e) {
		for (var i, s, n = c.call(arguments, 1), o = 0, a = n.length; o < a; o++)
			for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (t.isPlainObject(s) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : e[i] = s);
		return e
	}, t.widget.bridge = function(e, i) {
		var s = i.prototype.widgetFullName || e;
		t.fn[e] = function(n) {
			var o = "string" == typeof n,
				a = c.call(arguments, 1),
				r = this;
			return o ? this.each(function() {
				var i, o = t.data(this, s);
				return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a)) !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'")
			}) : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function() {
				var e = t.data(this, s);
				e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
			})), r
		}
	}, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(e, i) {
			i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function(t) {
					t.target === i && this.destroy()
				}
			}), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: t.noop,
		_getCreateEventData: t.noop,
		_create: t.noop,
		_init: t.noop,
		destroy: function() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: t.noop,
		widget: function() {
			return this.element
		},
		option: function(e, i) {
			var s, n, o, a = e;
			if (0 === arguments.length) return t.widget.extend({}, this.options);
			if ("string" == typeof e) {
				if (a = {}, e = (s = e.split(".")).shift(), s.length) {
					for (o = 0, n = a[e] = t.widget.extend({}, this.options[e]); o < s.length - 1; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
					if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
					n[e] = i
				} else {
					if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
					a[e] = i
				}
			}
			return this._setOptions(a), this
		},
		_setOptions: function(t) {
			var e;
			for (e in t) this._setOption(e, t[e]);
			return this
		},
		_setOption: function(t, e) {
			return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
		},
		enable: function() {
			return this._setOptions({
				disabled: !1
			})
		},
		disable: function() {
			return this._setOptions({
				disabled: !0
			})
		},
		_on: function(e, i, s) {
			var n, o = this;
			"boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
				function r() {
					if (!(!e && (!0 === o.options.disabled || t(this).hasClass("ui-state-disabled")))) return ("string" == typeof a ? o[a] : a).apply(o, arguments)
				}
				"string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
				var h = s.match(/^([\w:-]*)\s*(.*)$/),
					l = h[1] + o.eventNamespace,
					c = h[2];
				c ? n.delegate(c, l, r) : i.bind(l, r)
			})
		},
		_off: function(e, i) {
			i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
		},
		_delay: function(t, e) {
			var i = this;
			return setTimeout(function e() {
				return ("string" == typeof t ? i[t] : t).apply(i, arguments)
			}, e || 0)
		},
		_hoverable: function(e) {
			this.hoverable = this.hoverable.add(e), this._on(e, {
				mouseenter: function(e) {
					t(e.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(e) {
					t(e.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(e) {
			this.focusable = this.focusable.add(e), this._on(e, {
				focusin: function(e) {
					t(e.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(e) {
					t(e.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(e, i, s) {
			var n, o, a = this.options[e];
			if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
				for (n in o) n in i || (i[n] = o[n]);
			return this.element.trigger(i, s), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
		}
	}, t.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(e, i) {
		t.Widget.prototype["_" + e] = function(s, n, o) {
			"string" == typeof n && (n = {
				effect: n
			});
			var a, r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
			"number" == typeof(n = n || {}) && (n = {
				duration: n
			}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
				t(this)[e](), o && o.call(s[0]), i()
			})
		}
	}), t.widget;
	var u = !1;
	t(document).mouseup(function() {
			u = !1
		}), t.widget("ui.mouse", {
			version: "1.11.4",
			options: {
				cancel: "input,textarea,button,select,option",
				distance: 1,
				delay: 0
			},
			_mouseInit: function() {
				var e = this;
				this.element.bind("mousedown." + this.widgetName, function(t) {
					return e._mouseDown(t)
				}).bind("click." + this.widgetName, function(i) {
					if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
				}), this.started = !1
			},
			_mouseDestroy: function() {
				this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
			},
			_mouseDown: function(e) {
				if (!u) {
					this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
					var i = this,
						s = 1 === e.which,
						n = "string" == typeof this.options.cancel && !!e.target.nodeName && t(e.target).closest(this.options.cancel).length;
					return !(s && !n && this._mouseCapture(e)) || ((this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
						i.mouseDelayMet = !0
					}, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted)) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
						return i._mouseMove(t)
					}, this._mouseUpDelegate = function(t) {
						return i._mouseUp(t)
					}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), u = !0, !0))
				}
			},
			_mouseMove: function(e) {
				return this._mouseMoved && (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button || !e.which) ? this._mouseUp(e) : ((e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted) ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
			},
			_mouseUp: function(e) {
				return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), u = !1, !1
			},
			_mouseDistanceMet: function(t) {
				return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
			},
			_mouseDelayMet: function() {
				return this.mouseDelayMet
			},
			_mouseStart: function() {},
			_mouseDrag: function() {},
			_mouseStop: function() {},
			_mouseCapture: function() {
				return !0
			}
		}),
		function() {
			t.ui = t.ui || {};
			var e, i, s = Math.max,
				n = Math.abs,
				o = Math.round,
				a = /left|center|right/,
				r = /top|center|bottom/,
				h = /[\+\-]\d+(\.[\d]+)?%?/,
				l = /^\w+/,
				c = /%$/,
				u = t.fn.position;

			function d(t, e, i) {
				return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
			}

			function p(e, i) {
				return parseInt(t.css(e, i), 10) || 0
			}
			t.position = {
					scrollbarWidth: function() {
						if (void 0 !== e) return e;
						var i, s, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
							o = n.children()[0];
						return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), i === (s = o.offsetWidth) && (s = n[0].clientWidth), n.remove(), e = i - s
					},
					getScrollInfo: function(e) {
						var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
							s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
							n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
						return {
							width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
							height: n ? t.position.scrollbarWidth() : 0
						}
					},
					getWithinInfo: function(e) {
						var i = t(e || window),
							s = t.isWindow(i[0]),
							n = !!i[0] && 9 === i[0].nodeType;
						return {
							element: i,
							isWindow: s,
							isDocument: n,
							offset: i.offset() || {
								left: 0,
								top: 0
							},
							scrollLeft: i.scrollLeft(),
							scrollTop: i.scrollTop(),
							width: s || n ? i.width() : i.outerWidth(),
							height: s || n ? i.height() : i.outerHeight()
						}
					}
				}, t.fn.position = function(e) {
					if (!e || !e.of) return u.apply(this, arguments);
					e = t.extend({}, e);
					var c, f, g, m, v, b, $, y, _ = t(e.of),
						w = t.position.getWithinInfo(e.within),
						x = t.position.getScrollInfo(w),
						k = (e.collision || "flip").split(" "),
						C = {};
					return b = 9 === (y = ($ = _)[0]).nodeType ? {
						width: $.width(),
						height: $.height(),
						offset: {
							top: 0,
							left: 0
						}
					} : t.isWindow(y) ? {
						width: $.width(),
						height: $.height(),
						offset: {
							top: $.scrollTop(),
							left: $.scrollLeft()
						}
					} : y.preventDefault ? {
						width: 0,
						height: 0,
						offset: {
							top: y.pageY,
							left: y.pageX
						}
					} : {
						width: $.outerWidth(),
						height: $.outerHeight(),
						offset: $.offset()
					}, _[0].preventDefault && (e.at = "left top"), f = b.width, g = b.height, m = b.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
						var t, i, s = (e[this] || "").split(" ");
						1 === s.length && (s = a.test(s[0]) ? s.concat(["center"]) : r.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = a.test(s[0]) ? s[0] : "center", s[1] = r.test(s[1]) ? s[1] : "center", t = h.exec(s[0]), i = h.exec(s[1]), C[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [l.exec(s[0])[0], l.exec(s[1])[0]]
					}), 1 === k.length && (k[1] = k[0]), "right" === e.at[0] ? v.left += f : "center" === e.at[0] && (v.left += f / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), c = d(C.at, f, g), v.left += c[0], v.top += c[1], this.each(function() {
						var a, r, h = t(this),
							l = h.outerWidth(),
							u = h.outerHeight(),
							b = p(this, "marginLeft"),
							$ = p(this, "marginTop"),
							y = l + b + p(this, "marginRight") + x.width,
							D = u + $ + p(this, "marginBottom") + x.height,
							P = t.extend({}, v),
							T = d(C.my, h.outerWidth(), h.outerHeight());
						"right" === e.my[0] ? P.left -= l : "center" === e.my[0] && (P.left -= l / 2), "bottom" === e.my[1] ? P.top -= u : "center" === e.my[1] && (P.top -= u / 2), P.left += T[0], P.top += T[1], i || (P.left = o(P.left), P.top = o(P.top)), a = {
							marginLeft: b,
							marginTop: $
						}, t.each(["left", "top"], function(i, s) {
							t.ui.position[k[i]] && t.ui.position[k[i]][s](P, {
								targetWidth: f,
								targetHeight: g,
								elemWidth: l,
								elemHeight: u,
								collisionPosition: a,
								collisionWidth: y,
								collisionHeight: D,
								offset: [c[0] + T[0], c[1] + T[1]],
								my: e.my,
								at: e.at,
								within: w,
								elem: h
							})
						}), e.using && (r = function(t) {
							var i = m.left - P.left,
								o = i + f - l,
								a = m.top - P.top,
								r = a + g - u,
								c = {
									target: {
										element: _,
										left: m.left,
										top: m.top,
										width: f,
										height: g
									},
									element: {
										element: h,
										left: P.left,
										top: P.top,
										width: l,
										height: u
									},
									horizontal: o < 0 ? "left" : i > 0 ? "right" : "center",
									vertical: r < 0 ? "top" : a > 0 ? "bottom" : "middle"
								};
							f < l && n(i + o) < f && (c.horizontal = "center"), g < u && n(a + r) < g && (c.vertical = "middle"), s(n(i), n(o)) > s(n(a), n(r)) ? c.important = "horizontal" : c.important = "vertical", e.using.call(this, t, c)
						}), h.offset(t.extend(P, {
							using: r
						}))
					})
				}, t.ui.position = {
					fit: {
						left: function(t, e) {
							var i, n = e.within,
								o = n.isWindow ? n.scrollLeft : n.offset.left,
								a = n.width,
								r = t.left - e.collisionPosition.marginLeft,
								h = o - r,
								l = r + e.collisionWidth - a - o;
							e.collisionWidth > a ? h > 0 && l <= 0 ? (i = t.left + h + e.collisionWidth - a - o, t.left += h - i) : l > 0 && h <= 0 ? t.left = o : h > l ? t.left = o + a - e.collisionWidth : t.left = o : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = s(t.left - r, t.left)
						},
						top: function(t, e) {
							var i, n = e.within,
								o = n.isWindow ? n.scrollTop : n.offset.top,
								a = e.within.height,
								r = t.top - e.collisionPosition.marginTop,
								h = o - r,
								l = r + e.collisionHeight - a - o;
							e.collisionHeight > a ? h > 0 && l <= 0 ? (i = t.top + h + e.collisionHeight - a - o, t.top += h - i) : l > 0 && h <= 0 ? t.top = o : h > l ? t.top = o + a - e.collisionHeight : t.top = o : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = s(t.top - r, t.top)
						}
					},
					flip: {
						left: function(t, e) {
							var i, s, o = e.within,
								a = o.offset.left + o.scrollLeft,
								r = o.width,
								h = o.isWindow ? o.scrollLeft : o.offset.left,
								l = t.left - e.collisionPosition.marginLeft,
								c = l - h,
								u = l + e.collisionWidth - r - h,
								d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
								p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
								f = -2 * e.offset[0];
							c < 0 ? ((i = t.left + d + p + f + e.collisionWidth - r - a) < 0 || i < n(c)) && (t.left += d + p + f) : u > 0 && ((s = t.left - e.collisionPosition.marginLeft + d + p + f - h) > 0 || n(s) < u) && (t.left += d + p + f)
						},
						top: function(t, e) {
							var i, s, o = e.within,
								a = o.offset.top + o.scrollTop,
								r = o.height,
								h = o.isWindow ? o.scrollTop : o.offset.top,
								l = t.top - e.collisionPosition.marginTop,
								c = l - h,
								u = l + e.collisionHeight - r - h,
								d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
								p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
								f = -2 * e.offset[1];
							c < 0 ? ((s = t.top + d + p + f + e.collisionHeight - r - a) < 0 || s < n(c)) && (t.top += d + p + f) : u > 0 && ((i = t.top - e.collisionPosition.marginTop + d + p + f - h) > 0 || n(i) < u) && (t.top += d + p + f)
						}
					},
					flipfit: {
						left: function() {
							t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
						},
						top: function() {
							t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
						}
					}
				},
				function() {
					var e, s, n, o, a, r = document.getElementsByTagName("body")[0],
						h = document.createElement("div");
					for (a in e = document.createElement(r ? "div" : "body"), n = {
							visibility: "hidden",
							width: 0,
							height: 0,
							border: 0,
							margin: 0,
							background: "none"
						}, r && t.extend(n, {
							position: "absolute",
							left: "-1000px",
							top: "-1000px"
						}), n) e.style[a] = n[a];
					e.appendChild(h), (s = r || document.documentElement).insertBefore(e, s.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", i = (o = t(h).offset().left) > 10 && o < 11, e.innerHTML = "", s.removeChild(e)
				}()
		}(), t.ui.position, t.widget("ui.draggable", t.ui.mouse, {
			version: "1.11.4",
			widgetEventPrefix: "drag",
			options: {
				addClasses: !0,
				appendTo: "parent",
				axis: !1,
				connectToSortable: !1,
				containment: !1,
				cursor: "auto",
				cursorAt: !1,
				grid: !1,
				handle: !1,
				helper: "original",
				iframeFix: !1,
				opacity: !1,
				refreshPositions: !1,
				revert: !1,
				revertDuration: 500,
				scope: "default",
				scroll: !0,
				scrollSensitivity: 20,
				scrollSpeed: 20,
				snap: !1,
				snapMode: "both",
				snapTolerance: 20,
				stack: !1,
				zIndex: !1,
				drag: null,
				start: null,
				stop: null
			},
			_create: function() {
				"original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
			},
			_setOption: function(t, e) {
				this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
			},
			_destroy: function() {
				if ((this.helper || this.element).is(".ui-draggable-dragging")) {
					this.destroyOnClear = !0;
					return
				}
				this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy()
			},
			_mouseCapture: function(e) {
				var i = this.options;
				return this._blurActiveElement(e), !this.helper && !i.disabled && !(t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
			},
			_blockFrames: function(e) {
				this.iframeBlocks = this.document.find(e).map(function() {
					var e = t(this);
					return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
				})
			},
			_unblockFrames: function() {
				this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
			},
			_blurActiveElement: function(e) {
				var i = this.document[0];
				if (this.handleElement.is(e.target)) try {
					i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && t(i.activeElement).blur()
				} catch (s) {}
			},
			_mouseStart: function(e) {
				var i = this.options;
				return (this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
					return "fixed" === t(this).css("position")
				}).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e)) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._normalizeRightBottom(), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
			},
			_refreshOffsets: function(t) {
				this.offset = {
					top: this.positionAbs.top - this.margins.top,
					left: this.positionAbs.left - this.margins.left,
					scroll: !1,
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				}, this.offset.click = {
					left: t.pageX - this.offset.left,
					top: t.pageY - this.offset.top
				}
			},
			_mouseDrag: function(e, i) {
				if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
					var s = this._uiHash();
					if (!1 === this._trigger("drag", e, s)) return this._mouseUp({}), !1;
					this.position = s.position
				}
				return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
			},
			_mouseStop: function(e) {
				var i = this,
					s = !1;
				return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
					!1 !== i._trigger("stop", e) && i._clear()
				}) : !1 !== this._trigger("stop", e) && this._clear(), !1
			},
			_mouseUp: function(e) {
				return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.focus(), t.ui.mouse.prototype._mouseUp.call(this, e)
			},
			cancel: function() {
				return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
			},
			_getHandle: function(e) {
				return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
			},
			_setHandleClassName: function() {
				this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
			},
			_removeHandleClassName: function() {
				this.handleElement.removeClass("ui-draggable-handle")
			},
			_createHelper: function(e) {
				var i = this.options,
					s = t.isFunction(i.helper),
					n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
				return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
			},
			_setPositionRelative: function() {
				/^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
			},
			_adjustOffsetFromHelper: function(e) {
				"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
					left: +e[0],
					top: +e[1] || 0
				}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
			},
			_isRootNode: function(t) {
				return /(html|body)/i.test(t.tagName) || t === this.document[0]
			},
			_getParentOffset: function() {
				var e = this.offsetParent.offset(),
					i = this.document[0];
				return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
					top: 0,
					left: 0
				}), {
					top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
					left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
				}
			},
			_getRelativeOffset: function() {
				if ("relative" !== this.cssPosition) return {
					top: 0,
					left: 0
				};
				var t = this.element.position(),
					e = this._isRootNode(this.scrollParent[0]);
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
				}
			},
			_cacheMargins: function() {
				this.margins = {
					left: parseInt(this.element.css("marginLeft"), 10) || 0,
					top: parseInt(this.element.css("marginTop"), 10) || 0,
					right: parseInt(this.element.css("marginRight"), 10) || 0,
					bottom: parseInt(this.element.css("marginBottom"), 10) || 0
				}
			},
			_cacheHelperProportions: function() {
				this.helperProportions = {
					width: this.helper.outerWidth(),
					height: this.helper.outerHeight()
				}
			},
			_setContainment: function() {
				var e, i, s, n = this.options,
					o = this.document[0];
				if (this.relativeContainer = null, !n.containment) {
					this.containment = null;
					return
				}
				if ("window" === n.containment) {
					this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
					return
				}
				if ("document" === n.containment) {
					this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
					return
				}
				if (n.containment.constructor === Array) {
					this.containment = n.containment;
					return
				}
				"parent" === n.containment && (n.containment = this.helper[0].parentNode), (s = (i = t(n.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i)
			},
			_convertPositionTo: function(t, e) {
				e || (e = this.position);
				var i = "absolute" === t ? 1 : -1,
					s = this._isRootNode(this.scrollParent[0]);
				return {
					top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
					left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
				}
			},
			_generatePosition: function(t, e) {
				var i, s, n, o, a = this.options,
					r = this._isRootNode(this.scrollParent[0]),
					h = t.pageX,
					l = t.pageY;
				return r && this.offset.scroll || (this.offset.scroll = {
					top: this.scrollParent.scrollTop(),
					left: this.scrollParent.scrollLeft()
				}), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
					top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
					left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
				}
			},
			_clear: function() {
				this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
			},
			_normalizeRightBottom: function() {
				"y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
			},
			_trigger: function(e, i, s) {
				return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
			},
			plugins: {},
			_uiHash: function() {
				return {
					helper: this.helper,
					position: this.position,
					originalPosition: this.originalPosition,
					offset: this.positionAbs
				}
			}
		}), t.ui.plugin.add("draggable", "connectToSortable", {
			start: function(e, i, s) {
				var n = t.extend({}, i, {
					item: s.element
				});
				s.sortables = [], t(s.options.connectToSortable).each(function() {
					var i = t(this).sortable("instance");
					i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
				})
			},
			stop: function(e, i, s) {
				var n = t.extend({}, i, {
					item: s.element
				});
				s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
					var t = this;
					t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
						position: t.placeholder.css("position"),
						top: t.placeholder.css("top"),
						left: t.placeholder.css("left")
					}, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
				})
			},
			drag: function(e, i, s) {
				t.each(s.sortables, function() {
					var n = !1,
						o = this;
					o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() {
						return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
					})), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
						return i.helper[0]
					}, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() {
						this.refreshPositions()
					}), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() {
						this.refreshPositions()
					}))
				})
			}
		}), t.ui.plugin.add("draggable", "cursor", {
			start: function(e, i, s) {
				var n = t("body"),
					o = s.options;
				n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
			},
			stop: function(e, i, s) {
				var n = s.options;
				n._cursor && t("body").css("cursor", n._cursor)
			}
		}), t.ui.plugin.add("draggable", "opacity", {
			start: function(e, i, s) {
				var n = t(i.helper),
					o = s.options;
				n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
			},
			stop: function(e, i, s) {
				var n = s.options;
				n._opacity && t(i.helper).css("opacity", n._opacity)
			}
		}), t.ui.plugin.add("draggable", "scroll", {
			start: function(t, e, i) {
				i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
			},
			drag: function(e, i, s) {
				var n = s.options,
					o = !1,
					a = s.scrollParentNotHidden[0],
					r = s.document[0];
				a !== r && "HTML" !== a.tagName ? ((!n.axis || "x" !== n.axis) && (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), (!n.axis || "y" !== n.axis) && (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : ((!n.axis || "x" !== n.axis) && (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), (!n.axis || "y" !== n.axis) && (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
			}
		}), t.ui.plugin.add("draggable", "snap", {
			start: function(e, i, s) {
				var n = s.options;
				s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
					var e = t(this),
						i = e.offset();
					this !== s.element[0] && s.snapElements.push({
						item: this,
						width: e.outerWidth(),
						height: e.outerHeight(),
						top: i.top,
						left: i.left
					})
				})
			},
			drag: function(e, i, s) {
				var n, o, a, r, h, l, c, u, d, p, f = s.options,
					g = f.snapTolerance,
					m = i.offset.left,
					v = m + s.helperProportions.width,
					b = i.offset.top,
					$ = b + s.helperProportions.height;
				for (d = s.snapElements.length - 1; d >= 0; d--) {
					if (l = (h = s.snapElements[d].left - s.margins.left) + s.snapElements[d].width, u = (c = s.snapElements[d].top - s.margins.top) + s.snapElements[d].height, v < h - g || m > l + g || $ < c - g || b > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item)) {
						s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
							snapItem: s.snapElements[d].item
						})), s.snapElements[d].snapping = !1;
						continue
					}
					"inner" !== f.snapMode && (n = Math.abs(c - $) <= g, o = Math.abs(u - b) <= g, a = Math.abs(h - v) <= g, r = Math.abs(l - m) <= g, n && (i.position.top = s._convertPositionTo("relative", {
						top: c - s.helperProportions.height,
						left: 0
					}).top), o && (i.position.top = s._convertPositionTo("relative", {
						top: u,
						left: 0
					}).top), a && (i.position.left = s._convertPositionTo("relative", {
						top: 0,
						left: h - s.helperProportions.width
					}).left), r && (i.position.left = s._convertPositionTo("relative", {
						top: 0,
						left: l
					}).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = Math.abs(c - b) <= g, o = Math.abs(u - $) <= g, a = Math.abs(h - m) <= g, r = Math.abs(l - v) <= g, n && (i.position.top = s._convertPositionTo("relative", {
						top: c,
						left: 0
					}).top), o && (i.position.top = s._convertPositionTo("relative", {
						top: u - s.helperProportions.height,
						left: 0
					}).top), a && (i.position.left = s._convertPositionTo("relative", {
						top: 0,
						left: h
					}).left), r && (i.position.left = s._convertPositionTo("relative", {
						top: 0,
						left: l - s.helperProportions.width
					}).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
						snapItem: s.snapElements[d].item
					})), s.snapElements[d].snapping = n || o || a || r || p
				}
			}
		}), t.ui.plugin.add("draggable", "stack", {
			start: function(e, i, s) {
				var n, o = s.options,
					a = t.makeArray(t(o.stack)).sort(function(e, i) {
						return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
					});
				a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
					t(this).css("zIndex", n + e)
				}), this.css("zIndex", n + a.length))
			}
		}), t.ui.plugin.add("draggable", "zIndex", {
			start: function(e, i, s) {
				var n = t(i.helper),
					o = s.options;
				n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
			},
			stop: function(e, i, s) {
				var n = s.options;
				n._zIndex && t(i.helper).css("zIndex", n._zIndex)
			}
		}), t.ui.draggable, t.widget("ui.droppable", {
			version: "1.11.4",
			widgetEventPrefix: "drop",
			options: {
				accept: "*",
				activeClass: !1,
				addClasses: !0,
				greedy: !1,
				hoverClass: !1,
				scope: "default",
				tolerance: "intersect",
				activate: null,
				deactivate: null,
				drop: null,
				out: null,
				over: null
			},
			_create: function() {
				var e, i = this.options,
					s = i.accept;
				this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
					return t.is(s)
				}, this.proportions = function() {
					if (!arguments.length) return e || (e = {
						width: this.element[0].offsetWidth,
						height: this.element[0].offsetHeight
					});
					e = arguments[0]
				}, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable")
			},
			_addToManager: function(e) {
				t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
			},
			_splice: function(t) {
				for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
			},
			_destroy: function() {
				var e = t.ui.ddmanager.droppables[this.options.scope];
				this._splice(e), this.element.removeClass("ui-droppable ui-droppable-disabled")
			},
			_setOption: function(e, i) {
				if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
					return t.is(i)
				};
				else if ("scope" === e) {
					var s = t.ui.ddmanager.droppables[this.options.scope];
					this._splice(s), this._addToManager(i)
				}
				this._super(e, i)
			},
			_activate: function(e) {
				var i = t.ui.ddmanager.current;
				this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
			},
			_deactivate: function(e) {
				var i = t.ui.ddmanager.current;
				this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
			},
			_over: function(e) {
				var i = t.ui.ddmanager.current;
				i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
			},
			_out: function(e) {
				var i = t.ui.ddmanager.current;
				i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
			},
			_drop: function(e, i) {
				var s = i || t.ui.ddmanager.current,
					n = !1;
				return !!s && (s.currentItem || s.element)[0] !== this.element[0] && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
					var i = t(this).droppable("instance");
					if (i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(i, {
							offset: i.element.offset()
						}), i.options.tolerance, e)) return n = !0, !1
				}), !n && !!this.accept.call(this.element[0], s.currentItem || s.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element))
			},
			ui: function(t) {
				return {
					draggable: t.currentItem || t.element,
					helper: t.helper,
					position: t.position,
					offset: t.positionAbs
				}
			}
		}), t.ui.intersect = function() {
			function t(t, e, i) {
				return t >= e && t < e + i
			}
			return function(e, i, s, n) {
				if (!i.offset) return !1;
				var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
					a = (e.positionAbs || e.position.absolute).top + e.margins.top,
					r = o + e.helperProportions.width,
					h = a + e.helperProportions.height,
					l = i.offset.left,
					c = i.offset.top,
					u = l + i.proportions().width,
					d = c + i.proportions().height;
				switch (s) {
					case "fit":
						return l <= o && r <= u && c <= a && h <= d;
					case "intersect":
						return l < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < u && c < a + e.helperProportions.height / 2 && h - e.helperProportions.height / 2 < d;
					case "pointer":
						return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
					case "touch":
						return (a >= c && a <= d || h >= c && h <= d || a < c && h > d) && (o >= l && o <= u || r >= l && r <= u || o < l && r > u);
					default:
						return !1
				}
			}
		}(), t.ui.ddmanager = {
			current: null,
			droppables: {
				default: []
			},
			prepareOffsets: function(e, i) {
				var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
					a = i ? i.type : null,
					r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
				droppablesLoop: for (s = 0; s < o.length; s++) {
					if (!o[s].options.disabled && (!e || o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
						for (n = 0; n < r.length; n++)
							if (r[n] === o[s].element[0]) {
								o[s].proportions().height = 0;
								continue droppablesLoop
							} o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
							width: o[s].element[0].offsetWidth,
							height: o[s].element[0].offsetHeight
						}))
					}
				}
			},
			drop: function(e, i) {
				var s = !1;
				return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
					this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
				}), s
			},
			dragStart: function(e, i) {
				e.element.parentsUntil("body").bind("scroll.droppable", function() {
					e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
				})
			},
			drag: function(e, i) {
				e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
					if (!this.options.disabled && !this.greedyChild && this.visible) {
						var s, n, o, a = t.ui.intersect(e, this, this.options.tolerance, i),
							r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
						r && (this.options.greedy && (n = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function() {
							return t(this).droppable("instance").options.scope === n
						})).length && ((s = t(o[0]).droppable("instance")).greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
					}
				})
			},
			dragStop: function(e, i) {
				e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
			}
		}, t.ui.droppable, t.widget("ui.resizable", t.ui.mouse, {
			version: "1.11.4",
			widgetEventPrefix: "resize",
			options: {
				alsoResize: !1,
				animate: !1,
				animateDuration: "slow",
				animateEasing: "swing",
				aspectRatio: !1,
				autoHide: !1,
				containment: !1,
				ghost: !1,
				grid: !1,
				handles: "e,s,se",
				helper: !1,
				maxHeight: null,
				maxWidth: null,
				minHeight: 10,
				minWidth: 10,
				zIndex: 90,
				resize: null,
				start: null,
				stop: null
			},
			_num: function(t) {
				return parseInt(t, 10) || 0
			},
			_isNumber: function(t) {
				return !isNaN(parseInt(t, 10))
			},
			_hasScroll: function(e, i) {
				if ("hidden" === t(e).css("overflow")) return !1;
				var s = i && "left" === i ? "scrollLeft" : "scrollTop",
					n = !1;
				return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
			},
			_create: function() {
				var e, i, s, n, o, a = this,
					r = this.options;
				if (this.element.addClass("ui-resizable"), t.extend(this, {
						_aspectRatio: !!r.aspectRatio,
						aspectRatio: r.aspectRatio,
						originalElement: this.element,
						_proportionallyResizeElements: [],
						_helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
					}), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
						position: this.element.css("position"),
						width: this.element.outerWidth(),
						height: this.element.outerHeight(),
						top: this.element.css("top"),
						left: this.element.css("left")
					})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
						marginLeft: this.originalElement.css("marginLeft"),
						marginTop: this.originalElement.css("marginTop"),
						marginRight: this.originalElement.css("marginRight"),
						marginBottom: this.originalElement.css("marginBottom")
					}), this.originalElement.css({
						marginLeft: 0,
						marginTop: 0,
						marginRight: 0,
						marginBottom: 0
					}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
						position: "static",
						zoom: 1,
						display: "block"
					})), this.originalElement.css({
						margin: this.originalElement.css("margin")
					}), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
						n: ".ui-resizable-n",
						e: ".ui-resizable-e",
						s: ".ui-resizable-s",
						w: ".ui-resizable-w",
						se: ".ui-resizable-se",
						sw: ".ui-resizable-sw",
						ne: ".ui-resizable-ne",
						nw: ".ui-resizable-nw"
					} : "e,s,se"), this._handles = t(), this.handles.constructor === String)
					for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; i < e.length; i++) o = "ui-resizable-" + (s = t.trim(e[i])), (n = t("<div class='ui-resizable-handle " + o + "'></div>")).css({
						zIndex: r.zIndex
					}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
				this._renderAxis = function(e) {
					var i, s, n, o;
					for (i in e = e || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
						mousedown: a._mouseDown
					})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
				}, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
					a.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = n && n[1] ? n[1] : "se")
				}), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
					!r.disabled && (t(this).removeClass("ui-resizable-autohide"), a._handles.show())
				}).mouseleave(function() {
					!r.disabled && (a.resizing || (t(this).addClass("ui-resizable-autohide"), a._handles.hide()))
				})), this._mouseInit()
			},
			_destroy: function() {
				this._mouseDestroy();
				var e, i = function(e) {
					t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
				};
				return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
					position: e.css("position"),
					width: e.outerWidth(),
					height: e.outerHeight(),
					top: e.css("top"),
					left: e.css("left")
				}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
			},
			_mouseCapture: function(e) {
				var i, s, n = !1;
				for (i in this.handles)((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0);
				return !this.options.disabled && n
			},
			_mouseStart: function(e) {
				var i, s, n, o = this.options,
					a = this.element;
				return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
					left: i,
					top: s
				}, this.size = this._helper ? {
					width: this.helper.width(),
					height: this.helper.height()
				} : {
					width: a.width(),
					height: a.height()
				}, this.originalSize = this._helper ? {
					width: a.outerWidth(),
					height: a.outerHeight()
				} : {
					width: a.width(),
					height: a.height()
				}, this.sizeDiff = {
					width: a.outerWidth() - a.width(),
					height: a.outerHeight() - a.height()
				}, this.originalPosition = {
					left: i,
					top: s
				}, this.originalMousePosition = {
					left: e.pageX,
					top: e.pageY
				}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), a.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
			},
			_mouseDrag: function(e) {
				var i, s, n = this.originalMousePosition,
					o = this.axis,
					a = e.pageX - n.left || 0,
					r = e.pageY - n.top || 0,
					h = this._change[o];
				return this._updatePrevProperties(), !!h && (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
			},
			_mouseStop: function(e) {
				this.resizing = !1;
				var i, s, n, o, a, r, h, l = this.options;
				return this._helper && (n = (s = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : this.sizeDiff.height, o = s ? 0 : this.sizeDiff.width, a = {
					width: this.helper.width() - o,
					height: this.helper.height() - n
				}, r = parseInt(this.element.css("left"), 10) + (this.position.left - this.originalPosition.left) || null, h = parseInt(this.element.css("top"), 10) + (this.position.top - this.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
					top: h,
					left: r
				})), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
			},
			_updatePrevProperties: function() {
				this.prevPosition = {
					top: this.position.top,
					left: this.position.left
				}, this.prevSize = {
					width: this.size.width,
					height: this.size.height
				}
			},
			_applyChanges: function() {
				var t = {};
				return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
			},
			_updateVirtualBoundaries: function(t) {
				var e, i, s, n, o, a = this.options;
				o = {
					minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
					maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
					minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
					maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
				}, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), i < o.maxWidth && (o.maxWidth = i), n < o.maxHeight && (o.maxHeight = n)), this._vBoundaries = o
			},
			_updateCache: function(t) {
				this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
			},
			_updateRatio: function(t) {
				var e = this.position,
					i = this.size,
					s = this.axis;
				return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
			},
			_respectSize: function(t) {
				var e = this._vBoundaries,
					i = this.axis,
					s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
					n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
					o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
					a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
					r = this.originalPosition.left + this.originalSize.width,
					h = this.position.top + this.size.height,
					l = /sw|nw|w/.test(i),
					c = /nw|ne|n/.test(i);
				return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
			},
			_getPaddingPlusBorderDimensions: function(t) {
				for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseInt(s[e], 10) || 0, i[e] += parseInt(n[e], 10) || 0;
				return {
					height: i[0] + i[2],
					width: i[1] + i[3]
				}
			},
			_proportionallyResize: function() {
				if (this._proportionallyResizeElements.length)
					for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
						height: i.height() - this.outerDimensions.height || 0,
						width: i.width() - this.outerDimensions.width || 0
					})
			},
			_renderProxy: function() {
				var e = this.element,
					i = this.options;
				this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
					width: this.element.outerWidth() - 1,
					height: this.element.outerHeight() - 1,
					position: "absolute",
					left: this.elementOffset.left + "px",
					top: this.elementOffset.top + "px",
					zIndex: ++i.zIndex
				}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
			},
			_change: {
				e: function(t, e) {
					return {
						width: this.originalSize.width + e
					}
				},
				w: function(t, e) {
					var i = this.originalSize;
					return {
						left: this.originalPosition.left + e,
						width: i.width - e
					}
				},
				n: function(t, e, i) {
					var s = this.originalSize;
					return {
						top: this.originalPosition.top + i,
						height: s.height - i
					}
				},
				s: function(t, e, i) {
					return {
						height: this.originalSize.height + i
					}
				},
				se: function(e, i, s) {
					return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
				},
				sw: function(e, i, s) {
					return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
				},
				ne: function(e, i, s) {
					return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
				},
				nw: function(e, i, s) {
					return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
				}
			},
			_propagate: function(e, i) {
				t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
			},
			plugins: {},
			ui: function() {
				return {
					originalElement: this.originalElement,
					element: this.element,
					helper: this.helper,
					position: this.position,
					size: this.size,
					originalSize: this.originalSize,
					originalPosition: this.originalPosition
				}
			}
		}), t.ui.plugin.add("resizable", "animate", {
			stop: function(e) {
				var i = t(this).resizable("instance"),
					s = i.options,
					n = i._proportionallyResizeElements,
					o = n.length && /textarea/i.test(n[0].nodeName),
					a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
					r = o ? 0 : i.sizeDiff.width,
					h = {
						width: i.size.width - r,
						height: i.size.height - a
					},
					l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
					c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
				i.element.animate(t.extend(h, c && l ? {
					top: c,
					left: l
				} : {}), {
					duration: s.animateDuration,
					easing: s.animateEasing,
					step: function() {
						var s = {
							width: parseInt(i.element.css("width"), 10),
							height: parseInt(i.element.css("height"), 10),
							top: parseInt(i.element.css("top"), 10),
							left: parseInt(i.element.css("left"), 10)
						};
						n && n.length && t(n[0]).css({
							width: s.width,
							height: s.height
						}), i._updateCache(s), i._propagate("resize", e)
					}
				})
			}
		}), t.ui.plugin.add("resizable", "containment", {
			start: function() {
				var e, i, s, n, o, a, r, h = t(this).resizable("instance"),
					l = h.options,
					c = h.element,
					u = l.containment,
					d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
				d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = {
					left: 0,
					top: 0
				}, h.containerPosition = {
					left: 0,
					top: 0
				}, h.parentData = {
					element: t(document),
					left: 0,
					top: 0,
					width: t(document).width(),
					height: t(document).height() || document.body.parentNode.scrollHeight
				}) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
					i[t] = h._num(e.css("padding" + s))
				}), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
					height: e.innerHeight() - i[3],
					width: e.innerWidth() - i[1]
				}, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = {
					element: d,
					left: s.left,
					top: s.top,
					width: a,
					height: r
				}))
			},
			resize: function(e) {
				var i, s, n, o, a = t(this).resizable("instance"),
					r = a.options,
					h = a.containerOffset,
					l = a.position,
					c = a._aspectRatio || e.shiftKey,
					u = {
						top: 0,
						left: 0
					},
					d = a.containerElement,
					p = !0;
				d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
			},
			stop: function() {
				var e = t(this).resizable("instance"),
					i = e.options,
					s = e.containerOffset,
					n = e.containerPosition,
					o = e.containerElement,
					a = t(e.helper),
					r = a.offset(),
					h = a.outerWidth() - e.sizeDiff.width,
					l = a.outerHeight() - e.sizeDiff.height;
				e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
					left: r.left - n.left - s.left,
					width: h,
					height: l
				}), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
					left: r.left - n.left - s.left,
					width: h,
					height: l
				})
			}
		}), t.ui.plugin.add("resizable", "alsoResize", {
			start: function() {
				var e = t(this).resizable("instance").options;
				t(e.alsoResize).each(function() {
					var e = t(this);
					e.data("ui-resizable-alsoresize", {
						width: parseInt(e.width(), 10),
						height: parseInt(e.height(), 10),
						left: parseInt(e.css("left"), 10),
						top: parseInt(e.css("top"), 10)
					})
				})
			},
			resize: function(e, i) {
				var s = t(this).resizable("instance"),
					n = s.options,
					o = s.originalSize,
					a = s.originalPosition,
					r = {
						height: s.size.height - o.height || 0,
						width: s.size.width - o.width || 0,
						top: s.position.top - a.top || 0,
						left: s.position.left - a.left || 0
					};
				t(n.alsoResize).each(function() {
					var e = t(this),
						s = t(this).data("ui-resizable-alsoresize"),
						n = {},
						o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
					t.each(o, function(t, e) {
						var i = (s[e] || 0) + (r[e] || 0);
						i && i >= 0 && (n[e] = i || null)
					}), e.css(n)
				})
			},
			stop: function() {
				t(this).removeData("resizable-alsoresize")
			}
		}), t.ui.plugin.add("resizable", "ghost", {
			start: function() {
				var e = t(this).resizable("instance"),
					i = e.options,
					s = e.size;
				e.ghost = e.originalElement.clone(), e.ghost.css({
					opacity: .25,
					display: "block",
					position: "relative",
					height: s.height,
					width: s.width,
					margin: 0,
					left: 0,
					top: 0
				}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
			},
			resize: function() {
				var e = t(this).resizable("instance");
				e.ghost && e.ghost.css({
					position: "relative",
					height: e.size.height,
					width: e.size.width
				})
			},
			stop: function() {
				var e = t(this).resizable("instance");
				e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
			}
		}), t.ui.plugin.add("resizable", "grid", {
			resize: function() {
				var e, i = t(this).resizable("instance"),
					s = i.options,
					n = i.size,
					o = i.originalSize,
					a = i.originalPosition,
					r = i.axis,
					h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
					l = h[0] || 1,
					c = h[1] || 1,
					u = Math.round((n.width - o.width) / l) * l,
					d = Math.round((n.height - o.height) / c) * c,
					p = o.width + u,
					f = o.height + d,
					g = s.maxWidth && s.maxWidth < p,
					m = s.maxHeight && s.maxHeight < f,
					v = s.minWidth && s.minWidth > p,
					b = s.minHeight && s.minHeight > f;
				s.grid = h, v && (p += l), b && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((f - c <= 0 || p - l <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
			}
		}), t.ui.resizable, t.widget("ui.selectable", t.ui.mouse, {
			version: "1.11.4",
			options: {
				appendTo: "body",
				autoRefresh: !0,
				distance: 0,
				filter: "*",
				tolerance: "touch",
				selected: null,
				selecting: null,
				start: null,
				stop: null,
				unselected: null,
				unselecting: null
			},
			_create: function() {
				var e, i = this;
				this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
					(e = t(i.options.filter, i.element[0])).addClass("ui-selectee"), e.each(function() {
						var e = t(this),
							i = e.offset();
						t.data(this, "selectable-item", {
							element: this,
							$element: e,
							left: i.left,
							top: i.top,
							right: i.left + e.outerWidth(),
							bottom: i.top + e.outerHeight(),
							startselected: !1,
							selected: e.hasClass("ui-selected"),
							selecting: e.hasClass("ui-selecting"),
							unselecting: e.hasClass("ui-unselecting")
						})
					})
				}, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
			},
			_destroy: function() {
				this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
			},
			_mouseStart: function(e) {
				var i = this,
					s = this.options;
				this.opos = [e.pageX, e.pageY], !this.options.disabled && (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
					left: e.pageX,
					top: e.pageY,
					width: 0,
					height: 0
				}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
					var s = t.data(this, "selectable-item");
					s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
						unselecting: s.element
					}))
				}), t(e.target).parents().addBack().each(function() {
					var s, n = t.data(this, "selectable-item");
					if (n) return s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
						selecting: n.element
					}) : i._trigger("unselecting", e, {
						unselecting: n.element
					}), !1
				}))
			},
			_mouseDrag: function(e) {
				if (this.dragged = !0, !this.options.disabled) {
					var i, s = this,
						n = this.options,
						o = this.opos[0],
						a = this.opos[1],
						r = e.pageX,
						h = e.pageY;
					return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
						left: o,
						top: a,
						width: r - o,
						height: h - a
					}), this.selectees.each(function() {
						var i = t.data(this, "selectable-item"),
							l = !1;
						i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || i.right < o || i.top > h || i.bottom < a) : "fit" === n.tolerance && (l = i.left > o && i.right < r && i.top > a && i.bottom < h), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
							selecting: i.element
						}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
							unselecting: i.element
						}))), !i.selected || e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
							unselecting: i.element
						}))))
					}), !1
				}
			},
			_mouseStop: function(e) {
				var i = this;
				return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
					var s = t.data(this, "selectable-item");
					s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
						unselected: s.element
					})
				}), t(".ui-selecting", this.element[0]).each(function() {
					var s = t.data(this, "selectable-item");
					s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
						selected: s.element
					})
				}), this._trigger("stop", e), this.helper.remove(), !1
			}
		}), t.widget("ui.sortable", t.ui.mouse, {
			version: "1.11.4",
			widgetEventPrefix: "sort",
			ready: !1,
			options: {
				appendTo: "parent",
				axis: !1,
				connectWith: !1,
				containment: !1,
				cursor: "auto",
				cursorAt: !1,
				dropOnEmpty: !0,
				forcePlaceholderSize: !1,
				forceHelperSize: !1,
				grid: !1,
				handle: !1,
				helper: "original",
				items: "> *",
				opacity: !1,
				placeholder: !1,
				revert: !1,
				scroll: !0,
				scrollSensitivity: 20,
				scrollSpeed: 20,
				scope: "default",
				tolerance: "intersect",
				zIndex: 1e3,
				activate: null,
				beforeStop: null,
				change: null,
				deactivate: null,
				out: null,
				over: null,
				receive: null,
				remove: null,
				sort: null,
				start: null,
				stop: null,
				update: null
			},
			_isOverAxis: function(t, e, i) {
				return t >= e && t < e + i
			},
			_isFloating: function(t) {
				return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
			},
			_create: function() {
				this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
			},
			_setOption: function(t, e) {
				this._super(t, e), "handle" === t && this._setHandleClassName()
			},
			_setHandleClassName: function() {
				this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function() {
					(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
				})
			},
			_destroy: function() {
				this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
				for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
				return this
			},
			_mouseCapture: function(e, i) {
				var s = null,
					n = !1,
					o = this;
				return !this.reverting && !this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
					if (t.data(this, o.widgetName + "-item") === o) return s = t(this), !1
				}), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !!s && (!this.options.handle || !!i || (t(this.options.handle, s).find("*").addBack().each(function() {
					this === e.target && (n = !0)
				}), !!n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))
			},
			_mouseStart: function(e, i, s) {
				var n, o, a = this.options;
				if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
						top: this.offset.top - this.margins.top,
						left: this.offset.left - this.margins.left
					}, t.extend(this.offset, {
						click: {
							left: e.pageX - this.offset.left,
							top: e.pageY - this.offset.top
						},
						parent: this._getParentOffset(),
						relative: this._getRelativeOffset()
					}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
						prev: this.currentItem.prev()[0],
						parent: this.currentItem.parent()[0]
					}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
					for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
				return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
			},
			_mouseDrag: function(e) {
				var i, s, n, o, a = this.options,
					r = !1;
				for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
					if (n = (s = this.items[i]).item[0], (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], n))) {
						if (this.direction = 1 === o ? "down" : "up", "pointer" === this.options.tolerance || this._intersectsWithSides(s)) this._rearrange(e, s);
						else break;
						this._trigger("change", e, this._uiHash());
						break
					} return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
			},
			_mouseStop: function(e, i) {
				if (e) {
					if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
						var s = this,
							n = this.placeholder.offset(),
							o = this.options.axis,
							a = {};
						o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
							s._clear(e)
						})
					} else this._clear(e, i);
					return !1
				}
			},
			cancel: function() {
				if (this.dragging) {
					this._mouseUp({
						target: null
					}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
					for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
				}
				return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
					helper: null,
					dragging: !1,
					reverting: !1,
					_noFinalSort: null
				}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
			},
			serialize: function(e) {
				var i = this._getItemsAsjQuery(e && e.connected),
					s = [];
				return e = e || {}, t(i).each(function() {
					var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
					i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
				}), !s.length && e.key && s.push(e.key + "="), s.join("&")
			},
			toArray: function(e) {
				var i = this._getItemsAsjQuery(e && e.connected),
					s = [];
				return e = e || {}, i.each(function() {
					s.push(t(e.item || this).attr(e.attribute || "id") || "")
				}), s
			},
			_intersectsWith: function(t) {
				var e = this.positionAbs.left,
					i = e + this.helperProportions.width,
					s = this.positionAbs.top,
					n = s + this.helperProportions.height,
					o = t.left,
					a = o + t.width,
					r = t.top,
					h = r + t.height,
					l = this.offset.click.top,
					c = this.offset.click.left,
					u = "x" === this.options.axis || s + l > r && s + l < h,
					d = "y" === this.options.axis || e + c > o && e + c < a;
				return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u && d : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < h
			},
			_intersectsWithPointer: function(t) {
				var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
					i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
					s = this._getDragVerticalDirection(),
					n = this._getDragHorizontalDirection();
				return !!e && !!i && (this.floating ? n && "right" === n || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1))
			},
			_intersectsWithSides: function(t) {
				var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
					i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
					s = this._getDragVerticalDirection(),
					n = this._getDragHorizontalDirection();
				return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
			},
			_getDragVerticalDirection: function() {
				var t = this.positionAbs.top - this.lastPositionAbs.top;
				return 0 !== t && (t > 0 ? "down" : "up")
			},
			_getDragHorizontalDirection: function() {
				var t = this.positionAbs.left - this.lastPositionAbs.left;
				return 0 !== t && (t > 0 ? "right" : "left")
			},
			refresh: function(t) {
				return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
			},
			_connectWith: function() {
				var t = this.options;
				return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
			},
			_getItemsAsjQuery: function(e) {
				var i, s, n, o, a = [],
					r = [],
					h = this._connectWith();
				if (h && e)
					for (i = h.length - 1; i >= 0; i--)
						for (s = (n = t(h[i], this.document[0])).length - 1; s >= 0; s--)(o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && r.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);

				function l() {
					a.push(this)
				}
				for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
						options: this.options,
						item: this.currentItem
					}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--) r[i][0].each(l);
				return t(a)
			},
			_removeCurrentsFromItems: function() {
				var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
				this.items = t.grep(this.items, function(t) {
					for (var i = 0; i < e.length; i++)
						if (e[i] === t.item[0]) return !1;
					return !0
				})
			},
			_refreshItems: function(e) {
				this.items = [], this.containers = [this];
				var i, s, n, o, a, r, h, l, c = this.items,
					u = [
						[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
							item: this.currentItem
						}) : t(this.options.items, this.element), this]
					],
					d = this._connectWith();
				if (d && this.ready)
					for (i = d.length - 1; i >= 0; i--)
						for (s = (n = t(d[i], this.document[0])).length - 1; s >= 0; s--)(o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
							item: this.currentItem
						}) : t(o.options.items, o.element), o]), this.containers.push(o));
				for (i = u.length - 1; i >= 0; i--)
					for (s = 0, a = u[i][1], l = (r = u[i][0]).length; s < l; s++)(h = t(r[s])).data(this.widgetName + "-item", a), c.push({
						item: h,
						instance: a,
						width: 0,
						height: 0,
						left: 0,
						top: 0
					})
			},
			refreshPositions: function(e) {
				var i, s, n, o;
				for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--)((s = this.items[i]).instance === this.currentContainer || !this.currentContainer || s.item[0] === this.currentItem[0]) && (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
				if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
				else
					for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
				return this
			},
			_createPlaceholder: function(e) {
				var i, s = (e = e || this).options;
				s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
					element: function() {
						var s = e.currentItem[0].nodeName.toLowerCase(),
							n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
						return "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
					},
					update: function(t, n) {
						(!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
					}
				}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
			},
			_createTrPlaceholder: function(e, i) {
				var s = this;
				e.children().each(function() {
					t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
				})
			},
			_contactContainers: function(e) {
				var i, s, n, o, a, r, h, l, c, u, d = null,
					p = null;
				for (i = this.containers.length - 1; i >= 0; i--)
					if (!t.contains(this.currentItem[0], this.containers[i].element[0])) {
						if (this._intersectsWith(this.containers[i].containerCache)) {
							if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
							d = this.containers[i], p = i
						} else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0)
					} if (d) {
					if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
					else {
						for (n = 1e4, o = null, a = (c = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", r = c ? "width" : "height", u = c ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), Math.abs(e[u] - h) < n && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down"));
						if (!o && !this.options.dropOnEmpty) return;
						if (this.currentContainer === this.containers[p]) {
							this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1);
							return
						}
						o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
					}
				}
			},
			_createHelper: function(e) {
				var i = this.options,
					s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
				return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
					width: this.currentItem[0].style.width,
					height: this.currentItem[0].style.height,
					position: this.currentItem.css("position"),
					top: this.currentItem.css("top"),
					left: this.currentItem.css("left")
				}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
			},
			_adjustOffsetFromHelper: function(e) {
				"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
					left: +e[0],
					top: +e[1] || 0
				}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
			},
			_getParentOffset: function() {
				this.offsetParent = this.helper.offsetParent();
				var e = this.offsetParent.offset();
				return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
					top: 0,
					left: 0
				}), {
					top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
					left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
				}
			},
			_getRelativeOffset: function() {
				if ("relative" !== this.cssPosition) return {
					top: 0,
					left: 0
				};
				var t = this.currentItem.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			},
			_cacheMargins: function() {
				this.margins = {
					left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
					top: parseInt(this.currentItem.css("marginTop"), 10) || 0
				}
			},
			_cacheHelperProportions: function() {
				this.helperProportions = {
					width: this.helper.outerWidth(),
					height: this.helper.outerHeight()
				}
			},
			_setContainment: function() {
				var e, i, s, n = this.options;
				"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
			},
			_convertPositionTo: function(e, i) {
				i || (i = this.position);
				var s = "absolute" === e ? 1 : -1,
					n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					o = /(html|body)/i.test(n[0].tagName);
				return {
					top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
					left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
				}
			},
			_generatePosition: function(e) {
				var i, s, n = this.options,
					o = e.pageX,
					a = e.pageY,
					r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					h = /(html|body)/i.test(r[0].tagName);
				return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
					top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
					left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
				}
			},
			_rearrange: function(t, e, i, s) {
				i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
				var n = this.counter;
				this._delay(function() {
					n === this.counter && this.refreshPositions(!s)
				})
			},
			_clear: function(t, e) {
				this.reverting = !1;
				var i, s = [];
				if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
					for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
				} else this.currentItem.show();

				function n(t, e, i) {
					return function(s) {
						i._trigger(t, s, e._uiHash(e))
					}
				}
				for (this.fromOutside && !e && s.push(function(t) {
						this._trigger("receive", t, this._uiHash(this.fromOutside))
					}), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !e && s.push(function(t) {
						this._trigger("update", t, this._uiHash())
					}), this === this.currentContainer || e || (s.push(function(t) {
						this._trigger("remove", t, this._uiHash())
					}), s.push((function(t) {
						return function(e) {
							t._trigger("receive", e, this._uiHash(this))
						}
					}).call(this, this.currentContainer)), s.push((function(t) {
						return function(e) {
							t._trigger("update", e, this._uiHash(this))
						}
					}).call(this, this.currentContainer))), i = this.containers.length - 1; i >= 0; i--) e || s.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (s.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
				if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
					for (i = 0; i < s.length; i++) s[i].call(this, t);
					this._trigger("stop", t, this._uiHash())
				}
				return this.fromOutside = !1, !this.cancelHelperRemoval
			},
			_trigger: function() {
				!1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
			},
			_uiHash: function(e) {
				var i = e || this;
				return {
					helper: i.helper,
					placeholder: i.placeholder || t([]),
					position: i.position,
					originalPosition: i.originalPosition,
					offset: i.positionAbs,
					item: i.currentItem,
					sender: e ? e.element : null
				}
			}
		}), t.widget("ui.accordion", {
			version: "1.11.4",
			options: {
				active: 0,
				animate: {},
				collapsible: !1,
				event: "click",
				header: "> li > :first-child,> :not(li):even",
				heightStyle: "auto",
				icons: {
					activeHeader: "ui-icon-triangle-1-s",
					header: "ui-icon-triangle-1-e"
				},
				activate: null,
				beforeActivate: null
			},
			hideProps: {
				borderTopWidth: "hide",
				borderBottomWidth: "hide",
				paddingTop: "hide",
				paddingBottom: "hide",
				height: "hide"
			},
			showProps: {
				borderTopWidth: "show",
				borderBottomWidth: "show",
				paddingTop: "show",
				paddingBottom: "show",
				height: "show"
			},
			_create: function() {
				var e = this.options;
				this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
			},
			_getCreateEventData: function() {
				return {
					header: this.active,
					panel: this.active.length ? this.active.next() : t()
				}
			},
			_createIcons: function() {
				var e = this.options.icons;
				e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
			},
			_destroyIcons: function() {
				this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
			},
			_destroy: function() {
				var t;
				this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
			},
			_setOption: function(t, e) {
				if ("active" === t) {
					this._activate(e);
					return
				}
				"event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))
			},
			_keydown: function(e) {
				if (!e.altKey && !e.ctrlKey) {
					var i = t.ui.keyCode,
						s = this.headers.length,
						n = this.headers.index(e.target),
						o = !1;
					switch (e.keyCode) {
						case i.RIGHT:
						case i.DOWN:
							o = this.headers[(n + 1) % s];
							break;
						case i.LEFT:
						case i.UP:
							o = this.headers[(n - 1 + s) % s];
							break;
						case i.SPACE:
						case i.ENTER:
							this._eventHandler(e);
							break;
						case i.HOME:
							o = this.headers[0];
							break;
						case i.END:
							o = this.headers[s - 1]
					}
					o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
				}
			},
			_panelKeyDown: function(e) {
				e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
			},
			refresh: function() {
				var e = this.options;
				this._processPanels(), (!1 !== e.active || !0 !== e.collapsible) && this.headers.length ? !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active) : (e.active = !1, this.active = t()), this._destroyIcons(), this._refresh()
			},
			_processPanels: function() {
				var t = this.headers,
					e = this.panels;
				this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
			},
			_refresh: function() {
				var e, i = this.options,
					s = i.heightStyle,
					n = this.element.parent();
				this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
					var e = t(this),
						i = e.uniqueId().attr("id"),
						s = e.next(),
						n = s.uniqueId().attr("id");
					e.attr("aria-controls", n), s.attr("aria-labelledby", i)
				}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
					"aria-selected": "false",
					"aria-expanded": "false",
					tabIndex: -1
				}).next().attr({
					"aria-hidden": "true"
				}).hide(), this.active.length ? this.active.attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				}).next().attr({
					"aria-hidden": "false"
				}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
					var i = t(this),
						s = i.css("position");
					"absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
				}), this.headers.each(function() {
					e -= t(this).outerHeight(!0)
				}), this.headers.next().each(function() {
					t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
				}).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
					e = Math.max(e, t(this).css("height", "").height())
				}).height(e))
			},
			_activate: function(e) {
				var i = this._findActive(e)[0];
				i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
					target: i,
					currentTarget: i,
					preventDefault: t.noop
				}))
			},
			_findActive: function(e) {
				return "number" == typeof e ? this.headers.eq(e) : t()
			},
			_setupEvents: function(e) {
				var i = {
					keydown: "_keydown"
				};
				e && t.each(e.split(" "), function(t, e) {
					i[e] = "_eventHandler"
				}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
					keydown: "_panelKeyDown"
				}), this._hoverable(this.headers), this._focusable(this.headers)
			},
			_eventHandler: function(e) {
				var i = this.options,
					s = this.active,
					n = t(e.currentTarget),
					o = n[0] === s[0],
					a = o && i.collapsible,
					r = a ? t() : n.next(),
					h = s.next(),
					l = {
						oldHeader: s,
						oldPanel: h,
						newHeader: a ? t() : n,
						newPanel: r
					};
				e.preventDefault(), (!o || i.collapsible) && !1 !== this._trigger("beforeActivate", e, l) && (i.active = !a && this.headers.index(n), this.active = o ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
			},
			_toggle: function(e) {
				var i = e.newPanel,
					s = this.prevShow.length ? this.prevShow : e.oldPanel;
				this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
					"aria-hidden": "true"
				}), s.prev().attr({
					"aria-selected": "false",
					"aria-expanded": "false"
				}), i.length && s.length ? s.prev().attr({
					tabIndex: -1,
					"aria-expanded": "false"
				}) : i.length && this.headers.filter(function() {
					return 0 === parseInt(t(this).attr("tabIndex"), 10)
				}).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				})
			},
			_animate: function(t, e, i) {
				var s, n, o, a = this,
					r = 0,
					h = t.css("box-sizing"),
					l = t.length && (!e.length || t.index() < e.index()),
					c = this.options.animate || {},
					u = l && c.down || c,
					d = function() {
						a._toggleComplete(i)
					};
				return ("number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length) ? t.length ? void(s = t.show().outerHeight(), e.animate(this.hideProps, {
					duration: o,
					easing: n,
					step: function(t, e) {
						e.now = Math.round(t)
					}
				}), t.hide().animate(this.showProps, {
					duration: o,
					easing: n,
					complete: d,
					step: function(t, i) {
						i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
					}
				})) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
			},
			_toggleComplete: function(t) {
				var e = t.oldPanel;
				e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
			}
		}), t.widget("ui.menu", {
			version: "1.11.4",
			defaultElement: "<ul>",
			delay: 300,
			options: {
				icons: {
					submenu: "ui-icon-carat-1-e"
				},
				items: "> *",
				menus: "ul",
				position: {
					my: "left-1 top",
					at: "right top"
				},
				role: "menu",
				blur: null,
				focus: null,
				select: null
			},
			_create: function() {
				this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
					role: this.options.role,
					tabIndex: 0
				}), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
					"mousedown .ui-menu-item": function(t) {
						t.preventDefault()
					},
					"click .ui-menu-item": function(e) {
						var i = t(e.target);
						!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
					},
					"mouseenter .ui-menu-item": function(e) {
						if (!this.previousFilter) {
							var i = t(e.currentTarget);
							i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
						}
					},
					mouseleave: "collapseAll",
					"mouseleave .ui-menu": "collapseAll",
					focus: function(t, e) {
						var i = this.active || this.element.find(this.options.items).eq(0);
						e || this.focus(t, i)
					},
					blur: function(e) {
						this._delay(function() {
							t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
						})
					},
					keydown: "_keydown"
				}), this.refresh(), this._on(this.document, {
					click: function(t) {
						this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
					}
				})
			},
			_destroy: function() {
				this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
					var e = t(this);
					e.data("ui-menu-submenu-carat") && e.remove()
				}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
			},
			_keydown: function(e) {
				var i, s, n, o, a = !0;
				switch (e.keyCode) {
					case t.ui.keyCode.PAGE_UP:
						this.previousPage(e);
						break;
					case t.ui.keyCode.PAGE_DOWN:
						this.nextPage(e);
						break;
					case t.ui.keyCode.HOME:
						this._move("first", "first", e);
						break;
					case t.ui.keyCode.END:
						this._move("last", "last", e);
						break;
					case t.ui.keyCode.UP:
						this.previous(e);
						break;
					case t.ui.keyCode.DOWN:
						this.next(e);
						break;
					case t.ui.keyCode.LEFT:
						this.collapse(e);
						break;
					case t.ui.keyCode.RIGHT:
						this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
						break;
					case t.ui.keyCode.ENTER:
					case t.ui.keyCode.SPACE:
						this._activate(e);
						break;
					case t.ui.keyCode.ESCAPE:
						this.collapse(e);
						break;
					default:
						a = !1, s = this.previousFilter || "", n = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
							delete this.previousFilter
						}, 1e3)) : delete this.previousFilter
				}
				a && e.preventDefault()
			},
			_activate: function(t) {
				this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
			},
			refresh: function() {
				var e, i, s = this,
					n = this.options.icons.submenu,
					o = this.element.find(this.options.menus);
				this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), o.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
					role: this.options.role,
					"aria-hidden": "true",
					"aria-expanded": "false"
				}).each(function() {
					var e = t(this),
						i = e.parent(),
						s = t("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
					i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
				}), (i = (e = o.add(this.element)).find(this.options.items)).not(".ui-menu-item").each(function() {
					var e = t(this);
					s._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
				}), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
					tabIndex: -1,
					role: this._itemRole()
				}), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
			},
			_itemRole: function() {
				return ({
					menu: "menuitem",
					listbox: "option"
				})[this.options.role]
			},
			_setOption: function(t, e) {
				"icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
			},
			focus: function(t, e) {
				var i, s;
				this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
					this._close()
				}, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
					item: e
				})
			},
			_scrollIntoView: function(e) {
				var i, s, n, o, a, r;
				this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), n < 0 ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
			},
			blur: function(t, e) {
				e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
					item: this.active
				}))
			},
			_startOpening: function(t) {
				clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
					this._close(), this._open(t)
				}, this.delay))
			},
			_open: function(e) {
				var i = t.extend({
					of: this.active
				}, this.options.position);
				clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
			},
			collapseAll: function(e, i) {
				clearTimeout(this.timer), this.timer = this._delay(function() {
					var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
					s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
				}, this.delay)
			},
			_close: function(t) {
				t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
			},
			_closeOnDocumentClick: function(e) {
				return !t(e.target).closest(".ui-menu").length
			},
			_isDivider: function(t) {
				return !/[^\-\u2014\u2013\s]/.test(t.text())
			},
			collapse: function(t) {
				var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
				e && e.length && (this._close(), this.focus(t, e))
			},
			expand: function(t) {
				var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
				e && e.length && (this._open(e.parent()), this._delay(function() {
					this.focus(t, e)
				}))
			},
			next: function(t) {
				this._move("next", "first", t)
			},
			previous: function(t) {
				this._move("prev", "last", t)
			},
			isFirstItem: function() {
				return this.active && !this.active.prevAll(".ui-menu-item").length
			},
			isLastItem: function() {
				return this.active && !this.active.nextAll(".ui-menu-item").length
			},
			_move: function(t, e, i) {
				var s;
				this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
			},
			nextPage: function(e) {
				var i, s, n;
				if (!this.active) {
					this.next(e);
					return
				}!this.isLastItem() && (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
					return (i = t(this)).offset().top - s - n < 0
				}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
			},
			previousPage: function(e) {
				var i, s, n;
				if (!this.active) {
					this.next(e);
					return
				}!this.isFirstItem() && (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
					return (i = t(this)).offset().top - s + n > 0
				}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))
			},
			_hasScroll: function() {
				return this.element.outerHeight() < this.element.prop("scrollHeight")
			},
			select: function(e) {
				this.active = this.active || t(e.target).closest(".ui-menu-item");
				var i = {
					item: this.active
				};
				this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
			},
			_filterMenuItems: function(e) {
				var i = RegExp("^" + e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), "i");
				return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
					return i.test(t.trim(t(this).text()))
				})
			}
		}), t.widget("ui.autocomplete", {
			version: "1.11.4",
			defaultElement: "<input>",
			options: {
				appendTo: null,
				autoFocus: !1,
				delay: 300,
				minLength: 1,
				position: {
					my: "left top",
					at: "left bottom",
					collision: "none"
				},
				source: null,
				change: null,
				close: null,
				focus: null,
				open: null,
				response: null,
				search: null,
				select: null
			},
			requestIndex: 0,
			pending: 0,
			_create: function() {
				var e, i, s, n = this.element[0].nodeName.toLowerCase(),
					o = "textarea" === n,
					a = "input" === n;
				this.isMultiLine = !!o || !a && this.element.prop("isContentEditable"), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
					keydown: function(n) {
						if (this.element.prop("readOnly")) {
							e = !0, s = !0, i = !0;
							return
						}
						e = !1, s = !1, i = !1;
						var o = t.ui.keyCode;
						switch (n.keyCode) {
							case o.PAGE_UP:
								e = !0, this._move("previousPage", n);
								break;
							case o.PAGE_DOWN:
								e = !0, this._move("nextPage", n);
								break;
							case o.UP:
								e = !0, this._keyEvent("previous", n);
								break;
							case o.DOWN:
								e = !0, this._keyEvent("next", n);
								break;
							case o.ENTER:
								this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
								break;
							case o.TAB:
								this.menu.active && this.menu.select(n);
								break;
							case o.ESCAPE:
								this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
								break;
							default:
								i = !0, this._searchTimeout(n)
						}
					},
					keypress: function(s) {
						if (e) {
							e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault();
							return
						}
						if (!i) {
							var n = t.ui.keyCode;
							switch (s.keyCode) {
								case n.PAGE_UP:
									this._move("previousPage", s);
									break;
								case n.PAGE_DOWN:
									this._move("nextPage", s);
									break;
								case n.UP:
									this._keyEvent("previous", s);
									break;
								case n.DOWN:
									this._keyEvent("next", s)
							}
						}
					},
					input: function(t) {
						if (s) {
							s = !1, t.preventDefault();
							return
						}
						this._searchTimeout(t)
					},
					focus: function() {
						this.selectedItem = null, this.previous = this._value()
					},
					blur: function(t) {
						if (this.cancelBlur) {
							delete this.cancelBlur;
							return
						}
						clearTimeout(this.searching), this.close(t), this._change(t)
					}
				}), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
					role: null
				}).hide().menu("instance"), this._on(this.menu.element, {
					mousedown: function(e) {
						e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
							delete this.cancelBlur
						});
						var i = this.menu.element[0];
						t(e.target).closest(".ui-menu-item").length || this._delay(function() {
							var e = this;
							this.document.one("mousedown", function(s) {
								s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
							})
						})
					},
					menufocus: function(e, i) {
						var s, n;
						if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) {
							this.menu.blur(), this.document.one("mousemove", function() {
								t(e.target).trigger(e.originalEvent)
							});
							return
						}
						n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
							item: n
						}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), (s = i.item.attr("aria-label") || n.value) && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion))
					},
					menuselect: function(t, e) {
						var i = e.item.data("ui-autocomplete-item"),
							s = this.previous;
						this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
							this.previous = s, this.selectedItem = i
						})), !1 !== this._trigger("select", t, {
							item: i
						}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
					}
				}), this.liveRegion = t("<span>", {
					role: "status",
					"aria-live": "assertive",
					"aria-relevant": "additions"
				}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
					beforeunload: function() {
						this.element.removeAttr("autocomplete")
					}
				})
			},
			_destroy: function() {
				clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
			},
			_setOption: function(t, e) {
				this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
			},
			_appendTo: function() {
				var e = this.options.appendTo;
				return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
			},
			_initSource: function() {
				var e, i, s = this;
				t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
					s(t.ui.autocomplete.filter(e, i.term))
				}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
					s.xhr && s.xhr.abort(), s.xhr = t.ajax({
						url: i,
						data: e,
						dataType: "json",
						success: function(t) {
							n(t)
						},
						error: function() {
							n([])
						}
					})
				}) : this.source = this.options.source
			},
			_searchTimeout: function(t) {
				clearTimeout(this.searching), this.searching = this._delay(function() {
					var e = this.term === this._value(),
						i = this.menu.element.is(":visible"),
						s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
					e && (!e || i || s) || (this.selectedItem = null, this.search(null, t))
				}, this.options.delay)
			},
			search: function(t, e) {
				return (t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength) ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
			},
			_search: function(t) {
				this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
					term: t
				}, this._response())
			},
			_response: function() {
				var e = ++this.requestIndex;
				return t.proxy(function(t) {
					e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
				}, this)
			},
			__response: function(t) {
				t && (t = this._normalize(t)), this._trigger("response", null, {
					content: t
				}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
			},
			close: function(t) {
				this.cancelSearch = !0, this._close(t)
			},
			_close: function(t) {
				this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
			},
			_change: function(t) {
				this.previous !== this._value() && this._trigger("change", t, {
					item: this.selectedItem
				})
			},
			_normalize: function(e) {
				return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
					return "string" == typeof e ? {
						label: e,
						value: e
					} : t.extend({}, e, {
						label: e.label || e.value,
						value: e.value || e.label
					})
				})
			},
			_suggest: function(e) {
				var i = this.menu.element.empty();
				this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
					of: this.element
				}, this.options.position)), this.options.autoFocus && this.menu.next()
			},
			_resizeMenu: function() {
				var t = this.menu.element;
				t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
			},
			_renderMenu: function(e, i) {
				var s = this;
				t.each(i, function(t, i) {
					s._renderItemData(e, i)
				})
			},
			_renderItemData: function(t, e) {
				return this._renderItem(t, e).data("ui-autocomplete-item", e)
			},
			_renderItem: function(e, i) {
				return t("<li>").text(i.label).appendTo(e)
			},
			_move: function(t, e) {
				if (!this.menu.element.is(":visible")) {
					this.search(null, e);
					return
				}
				if (this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t)) {
					this.isMultiLine || this._value(this.term), this.menu.blur();
					return
				}
				this.menu[t](e)
			},
			widget: function() {
				return this.menu.element
			},
			_value: function() {
				return this.valueMethod.apply(this.element, arguments)
			},
			_keyEvent: function(t, e) {
				(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
			}
		}), t.extend(t.ui.autocomplete, {
			escapeRegex: function(t) {
				return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			},
			filter: function(e, i) {
				var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
				return t.grep(e, function(t) {
					return s.test(t.label || t.value || t)
				})
			}
		}), t.widget("ui.autocomplete", t.ui.autocomplete, {
			options: {
				messages: {
					noResults: "No search results.",
					results: function(t) {
						return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
					}
				}
			},
			__response: function(e) {
				var i;
				this._superApply(arguments), !this.options.disabled && !this.cancelSearch && (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
			}
		}), t.ui.autocomplete;
	var d, p = "ui-button ui-widget ui-state-default ui-corner-all",
		f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		g = function() {
			var e = t(this);
			setTimeout(function() {
				e.find(":ui-button").button("refresh")
			}, 1)
		},
		m = function(e) {
			var i = e.name,
				s = e.form,
				n = t([]);
			return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "'][type=radio]") : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(function() {
				return !this.form
			})), n
		};

	function v() {
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = b(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}

	function b(e) {
		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return e.delegate(i, "mouseout", function() {
			t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
		}).delegate(i, "mouseover", $)
	}

	function $() {
		t.datepicker._isDisabledDatepicker(r.inline ? r.dpDiv.parent()[0] : r.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
	}

	function y(e, i) {
		for (var s in t.extend(e, i), i) null == i[s] && (e[s] = i[s]);
		return e
	}

	function _(t) {
		return function() {
			var e = this.element.val();
			t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
		}
	}
	t.widget("ui.button", {
		version: "1.11.4",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: !0,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, g), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
			var e = this,
				i = this.options,
				s = "checkbox" === this.type || "radio" === this.type,
				n = s ? "" : "ui-state-active";
			null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
				!i.disabled && this === d && t(this).addClass("ui-state-active")
			}).bind("mouseleave" + this.eventNamespace, function() {
				!i.disabled && t(this).removeClass(n)
			}).bind("click" + this.eventNamespace, function(t) {
				i.disabled && (t.preventDefault(), t.stopImmediatePropagation())
			}), this._on({
				focus: function() {
					this.buttonElement.addClass("ui-state-focus")
				},
				blur: function() {
					this.buttonElement.removeClass("ui-state-focus")
				}
			}), s && this.element.bind("change" + this.eventNamespace, function() {
				e.refresh()
			}), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				if (i.disabled) return !1
			}) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				if (i.disabled) return !1;
				t(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
				var s = e.element[0];
				m(s).not(s).map(function() {
					return t(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
				if (i.disabled) return !1;
				t(this).addClass("ui-state-active"), d = this, e.document.one("mouseup", function() {
					d = null
				})
			}).bind("mouseup" + this.eventNamespace, function() {
				if (i.disabled) return !1;
				t(this).removeClass("ui-state-active")
			}).bind("keydown" + this.eventNamespace, function(e) {
				if (i.disabled) return !1;
				(e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active")
			}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
				t(this).removeClass("ui-state-active")
			}), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
				e.keyCode === t.ui.keyCode.SPACE && t(this).click()
			})), this._setOption("disabled", i.disabled), this._resetButton()
		},
		_determineButtonType: function() {
			var t, e, i;
			this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), (i = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
		},
		widget: function() {
			return this.buttonElement
		},
		_destroy: function() {
			this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
		},
		_setOption: function(t, e) {
			if (this._super(t, e), "disabled" === t) {
				this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), e && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active"));
				return
			}
			this._resetButton()
		},
		refresh: function() {
			var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? m(this.element[0]).each(function() {
				t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
		},
		_resetButton: function() {
			if ("input" === this.type) {
				this.options.label && this.element.val(this.options.label);
				return
			}
			var e = this.buttonElement.removeClass(f),
				i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
				s = this.options.icons,
				n = s.primary && s.secondary,
				o = [];
			s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"), e.addClass(o.join(" "))
		}
	}), t.widget("ui.buttonset", {
		version: "1.11.4",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
		},
		_create: function() {
			this.element.addClass("ui-buttonset")
		},
		_init: function() {
			this.refresh()
		},
		_setOption: function(t, e) {
			"disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
		},
		refresh: function() {
			var e = "rtl" === this.element.css("direction"),
				i = this.element.find(this.options.items),
				s = i.filter(":ui-button");
			i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function() {
				return t(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		_destroy: function() {
			this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
				return t(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	}), t.ui.button, t.extend(t.ui, {
		datepicker: {
			version: "1.11.4"
		}
	}), t.extend(v.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(t) {
			return y(this._defaults, t || {}), this
		},
		_attachDatepicker: function(e, i) {
			var s, n, o;
			n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), n)).settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
		},
		_newInst: function(e, i) {
			return {
				id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
				input: e,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: i,
				dpDiv: i ? b(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function(e, i) {
			var s = t(e);
			i.append = t([]), i.trigger = t([]), !s.hasClass(this.markerClassName) && (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
		},
		_attachments: function(e, i) {
			var s, n, o, a = this._get(i, "appendText"),
				r = this._get(i, "isRTL");
			i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (s = this._get(i, "showOn")) || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
				src: o,
				alt: n,
				title: n
			}) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
				src: o,
				alt: n,
				title: n
			}) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.click(function() {
				return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : (t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] && t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])), !1
			}))
		},
		_autoSize: function(t) {
			if (this._get(t, "autoSize") && !t.inline) {
				var e, i, s, n, o = new Date(2009, 11, 20),
					a = this._get(t, "dateFormat");
				a.match(/[DM]/) && (e = function(t) {
					for (n = 0, i = 0, s = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n);
					return s
				}, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
			}
		},
		_inlineDatepicker: function(e, i) {
			var s = t(e);
			!s.hasClass(this.markerClassName) && (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function(e, i, s, n, o) {
			var a, r, h, l, c, u = this._dialogInst;
			return u || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), (u = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", u)), y(u.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(u, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (r = document.documentElement.clientWidth, h = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [r / 2 - 100 + l, h / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", u), this
		},
		_destroyDatepicker: function(e) {
			var i, s = t(e),
				n = t.data(e, "datepicker");
			s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), r === n && (r = null))
		},
		_enableDatepicker: function(e) {
			var i, s, n = t(e),
				o = t.data(e, "datepicker");
			n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each(function() {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			})) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
				return t === e ? null : t
			}))
		},
		_disableDatepicker: function(e) {
			var i, s, n = t(e),
				o = t.data(e, "datepicker");
			n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each(function() {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			})) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
				return t === e ? null : t
			}), this._disabledInputs[this._disabledInputs.length] = e)
		},
		_isDisabledDatepicker: function(t) {
			if (!t) return !1;
			for (var e = 0; e < this._disabledInputs.length; e++)
				if (this._disabledInputs[e] === t) return !0;
			return !1
		},
		_getInst: function(e) {
			try {
				return t.data(e, "datepicker")
			} catch (i) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function(e, i, s) {
			var n, o, a, r, h = this._getInst(e);
			if (2 === arguments.length && "string" == typeof i) return "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null;
			n = i || {}, "string" == typeof i && ((n = {})[i] = s), h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(h, "min"), r = this._getMinMaxDate(h, "max"), y(h.settings, n), null !== a && void 0 !== n.dateFormat && void 0 === n.minDate && (h.settings.minDate = this._formatDate(h, a)), null !== r && void 0 !== n.dateFormat && void 0 === n.maxDate && (h.settings.maxDate = this._formatDate(h, r)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h))
		},
		_changeDatepicker: function(t, e, i) {
			this._optionDatepicker(t, e, i)
		},
		_refreshDatepicker: function(t) {
			var e = this._getInst(t);
			e && this._updateDatepicker(e)
		},
		_setDateDatepicker: function(t, e) {
			var i = this._getInst(t);
			i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
		},
		_getDateDatepicker: function(t, e) {
			var i = this._getInst(t);
			return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
		},
		_doKeyDown: function(e) {
			var i, s, n, o = t.datepicker._getInst(e.target),
				a = !0,
				r = o.dpDiv.is(".ui-datepicker-rtl");
			if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
				case 9:
					t.datepicker._hideDatepicker(), a = !1;
					break;
				case 13:
					return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), (i = t.datepicker._get(o, "onSelect")) ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
				case 27:
					t.datepicker._hideDatepicker();
					break;
				case 33:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 34:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 35:
					(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
					break;
				case 36:
					(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
					break;
				case 37:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 38:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
					break;
				case 39:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 40:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
					break;
				default:
					a = !1
			} else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
			a && (e.preventDefault(), e.stopPropagation())
		},
		_doKeyPress: function(e) {
			var i, s, n = t.datepicker._getInst(e.target);
			if (t.datepicker._get(n, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || s < " " || !i || i.indexOf(s) > -1
		},
		_doKeyUp: function(e) {
			var i, s = t.datepicker._getInst(e.target);
			if (s.input.val() !== s.lastVal) try {
				(i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s))) && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
			} catch (n) {}
			return !0
		},
		_showDatepicker: function(e) {
			var i, s, n, o, a, r, h;
			if ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (n = (s = t.datepicker._get(i, "beforeShow")) ? s.apply(e, [e, i]) : {}) && (y(i.settings, n), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), o = !1, t(e).parents().each(function() {
				return !(o |= "fixed" === t(this).css("position"))
			}), a = {
				left: t.datepicker._pos[0],
				top: t.datepicker._pos[1]
			}, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
				position: "absolute",
				display: "block",
				top: "-1000px"
			}), t.datepicker._updateDatepicker(i), a = t.datepicker._checkOffset(i, a, o), i.dpDiv.css({
				position: t.datepicker._inDialog && t.blockUI ? "static" : o ? "fixed" : "absolute",
				display: "none",
				left: a.left + "px",
				top: a.top + "px"
			}), i.inline || (r = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function t(e) {
				for (var i, s; e.length && e[0] !== document;) {
					if (("absolute" === (i = e.css("position")) || "relative" === i || "fixed" === i) && (s = parseInt(e.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
					e = e.parent()
				}
				return 0
			}(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[r] ? i.dpDiv.show(r, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[r || "show"](r ? h : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
		},
		_updateDatepicker: function(e) {
			this.maxRows = 4, r = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
			var i, s = this._getNumberOfMonths(e),
				n = s[1],
				o = e.dpDiv.find("." + this._dayOverClass + " a");
			o.length > 0 && $.apply(o.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
				i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
			}, 0))
		},
		_shouldFocusInput: function(t) {
			return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
		},
		_checkOffset: function(e, i, s) {
			var n = e.dpDiv.outerWidth(),
				o = e.dpDiv.outerHeight(),
				a = e.input ? e.input.outerWidth() : 0,
				r = e.input ? e.input.outerHeight() : 0,
				h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
				l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
			return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i
		},
		_findPos: function(e) {
			for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
			return [(i = t(e).offset()).left, i.top]
		},
		_hideDatepicker: function(e) {
			var i, s, n, o, a = this._curInst;
			a && (!e || a === t.data(e, "datepicker")) && this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() {
				t.datepicker._tidyDialog(a)
			}, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, (o = this._get(a, "onClose")) && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
				position: "absolute",
				left: "0",
				top: "-100px"
			}), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function(t) {
			t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(e) {
			if (t.datepicker._curInst) {
				var i = t(e.target),
					s = t.datepicker._getInst(i[0]);
				(i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && !(t.datepicker._inDialog && t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function(e, i, s) {
			var n = t(e),
				o = this._getInst(n[0]);
			!this._isDisabledDatepicker(n[0]) && (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
		},
		_gotoToday: function(e) {
			var i, s = t(e),
				n = this._getInst(s[0]);
			this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
		},
		_selectMonthYear: function(e, i, s) {
			var n = t(e),
				o = this._getInst(n[0]);
			o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
		},
		_selectDay: function(e, i, s, n) {
			var o, a = t(e);
			!(t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0])) && ((o = this._getInst(a[0])).selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
		},
		_clearDate: function(e) {
			var i = t(e);
			this._selectDate(i, "")
		},
		_selectDate: function(e, i) {
			var s, n = t(e),
				o = this._getInst(n[0]);
			i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (s = this._get(o, "onSelect")) ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function(e) {
			var i, s, n, o = this._get(e, "altField");
			o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).each(function() {
				t(this).val(n)
			}))
		},
		noWeekends: function(t) {
			var e = t.getDay();
			return [e > 0 && e < 6, ""]
		},
		iso8601Week: function(t) {
			var e, i = new Date(t.getTime());
			return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
		},
		parseDate: function(e, i, s) {
			if (null == e || null == i) throw "Invalid arguments";
			if ("" === (i = "object" == typeof i ? i.toString() : i + "")) return null;
			var n, o, a, r, h = 0,
				l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				c = "string" != typeof l ? l : new Date().getFullYear() % 100 + parseInt(l, 10),
				u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
				d = (s ? s.dayNames : null) || this._defaults.dayNames,
				p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
				f = (s ? s.monthNames : null) || this._defaults.monthNames,
				g = -1,
				m = -1,
				v = -1,
				b = -1,
				$ = !1,
				y = function(t) {
					var i = n + 1 < e.length && e.charAt(n + 1) === t;
					return i && n++, i
				},
				_ = function(t) {
					var e = y(t),
						s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
						n = "y" === t ? s : 1,
						o = RegExp("^\\d{" + n + "," + s + "}"),
						a = i.substring(h).match(o);
					if (!a) throw "Missing number at position " + h;
					return h += a[0].length, parseInt(a[0], 10)
				},
				w = function(e, s, n) {
					var o = -1,
						a = t.map(y(e) ? n : s, function(t, e) {
							return [
								[e, t]
							]
						}).sort(function(t, e) {
							return -(t[1].length - e[1].length)
						});
					if (t.each(a, function(t, e) {
							var s = e[1];
							if (i.substr(h, s.length).toLowerCase() === s.toLowerCase()) return o = e[0], h += s.length, !1
						}), -1 !== o) return o + 1;
					throw "Unknown name at position " + h
				},
				x = function() {
					if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
					h++
				};
			for (n = 0; n < e.length; n++)
				if ($) "'" !== e.charAt(n) || y("'") ? x() : $ = !1;
				else switch (e.charAt(n)) {
					case "d":
						v = _("d");
						break;
					case "D":
						w("D", u, d);
						break;
					case "o":
						b = _("o");
						break;
					case "m":
						m = _("m");
						break;
					case "M":
						m = w("M", p, f);
						break;
					case "y":
						g = _("y");
						break;
					case "@":
						g = (r = new Date(_("@"))).getFullYear(), m = r.getMonth() + 1, v = r.getDate();
						break;
					case "!":
						g = (r = new Date((_("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = r.getMonth() + 1, v = r.getDate();
						break;
					case "'":
						y("'") ? x() : $ = !0;
						break;
					default:
						x()
				}
			if (h < i.length && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
			if (-1 === g ? g = new Date().getFullYear() : g < 100 && (g += new Date().getFullYear() - new Date().getFullYear() % 100 + (g <= c ? 0 : -100)), b > -1)
				for (m = 1, v = b; !(v <= (o = this._getDaysInMonth(g, m - 1)));) m++, v -= o;
			if ((r = this._daylightSavingAdjust(new Date(g, m - 1, v))).getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== v) throw "Invalid date";
			return r
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 864e9,
		formatDate: function(t, e, i) {
			if (!e) return "";
			var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
				o = (i ? i.dayNames : null) || this._defaults.dayNames,
				a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
				r = (i ? i.monthNames : null) || this._defaults.monthNames,
				h = function(e) {
					var i = s + 1 < t.length && t.charAt(s + 1) === e;
					return i && s++, i
				},
				l = function(t, e, i) {
					var s = "" + e;
					if (h(t))
						for (; s.length < i;) s = "0" + s;
					return s
				},
				c = function(t, e, i, s) {
					return h(t) ? s[e] : i[e]
				},
				u = "",
				d = !1;
			if (e)
				for (s = 0; s < t.length; s++)
					if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
					else switch (t.charAt(s)) {
						case "d":
							u += l("d", e.getDate(), 2);
							break;
						case "D":
							u += c("D", e.getDay(), n, o);
							break;
						case "o":
							u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
							break;
						case "m":
							u += l("m", e.getMonth() + 1, 2);
							break;
						case "M":
							u += c("M", e.getMonth(), a, r);
							break;
						case "y":
							u += h("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
							break;
						case "@":
							u += e.getTime();
							break;
						case "!":
							u += 1e4 * e.getTime() + this._ticksTo1970;
							break;
						case "'":
							h("'") ? u += "'" : d = !0;
							break;
						default:
							u += t.charAt(s)
					}
			return u
		},
		_possibleChars: function(t) {
			var e, i = "",
				s = !1,
				n = function(i) {
					var s = e + 1 < t.length && t.charAt(e + 1) === i;
					return s && e++, s
				};
			for (e = 0; e < t.length; e++)
				if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
				else switch (t.charAt(e)) {
					case "d":
					case "m":
					case "y":
					case "@":
						i += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						n("'") ? i += "'" : s = !0;
						break;
					default:
						i += t.charAt(e)
				}
			return i
		},
		_get: function(t, e) {
			return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
		},
		_setDateFromField: function(t, e) {
			if (t.input.val() !== t.lastVal) {
				var i = this._get(t, "dateFormat"),
					s = t.lastVal = t.input ? t.input.val() : null,
					n = this._getDefaultDate(t),
					o = n,
					a = this._getFormatConfig(t);
				try {
					o = this.parseDate(i, s, a) || n
				} catch (r) {
					s = e ? "" : s
				}
				t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
			}
		},
		_getDefaultDate: function(t) {
			return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
		},
		_determineDate: function(e, i, s) {
			var n = function(t) {
					var e = new Date;
					return e.setDate(e.getDate() + t), e
				},
				o = function(i) {
					try {
						return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
					} catch (s) {}
					for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
						switch (l[2] || "d") {
							case "d":
							case "D":
								r += parseInt(l[1], 10);
								break;
							case "w":
							case "W":
								r += 7 * parseInt(l[1], 10);
								break;
							case "m":
							case "M":
								a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
								break;
							case "y":
							case "Y":
								o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
						}
						l = h.exec(i)
					}
					return new Date(o, a, r)
				},
				a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
			return (a = a && "Invalid Date" === a.toString() ? s : a) && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
		},
		_daylightSavingAdjust: function(t) {
			return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
		},
		_setDate: function(t, e, i) {
			var s = t.selectedMonth,
				n = t.selectedYear,
				o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
			t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), s === t.selectedMonth && n === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(e ? this._formatDate(t) : "")
		},
		_getDate: function(t) {
			return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
		},
		_attachHandlers: function(e) {
			var i = this._get(e, "stepMonths"),
				s = "#" + e.id.replace(/\\\\/g, "\\");
			e.dpDiv.find("[data-handler]").map(function() {
				t(this).bind(this.getAttribute("data-event"), {
					prev: function() {
						t.datepicker._adjustDate(s, -i, "M")
					},
					next: function() {
						t.datepicker._adjustDate(s, +i, "M")
					},
					hide: function() {
						t.datepicker._hideDatepicker()
					},
					today: function() {
						t.datepicker._gotoToday(s)
					},
					selectDay: function() {
						return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function() {
						return t.datepicker._selectMonthYear(s, this, "M"), !1
					},
					selectYear: function() {
						return t.datepicker._selectMonthYear(s, this, "Y"), !1
					}
				} [this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function(t) {
			var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, v, b, $, y, _, w, x, k, C, D, P, T, I, S, z, M, H, A, W, E, N, O, F, R = new Date,
				L = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
				Y = this._get(t, "isRTL"),
				B = this._get(t, "showButtonPanel"),
				j = this._get(t, "hideIfNoPrevNext"),
				q = this._get(t, "navigationAsDateFormat"),
				K = this._getNumberOfMonths(t),
				U = this._get(t, "showCurrentAtPos"),
				V = this._get(t, "stepMonths"),
				X = 1 !== K[0] || 1 !== K[1],
				G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
				Q = this._getMinMaxDate(t, "min"),
				J = this._getMinMaxDate(t, "max"),
				Z = t.drawMonth - U,
				tt = t.drawYear;
			if (Z < 0 && (Z += 12, tt--), J)
				for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - K[0] * K[1] + 1, J.getDate())), e = Q && e < Q ? Q : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) --Z < 0 && (Z = 11, tt--);
			for (w = 0, t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - V, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : j ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z + V, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : j ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : L, a = q ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), b = this._get(t, "selectOtherMonths"), $ = this._getDefaultDate(t), y = ""; w < K[0]; w++) {
				for (k = 0, x = "", this.maxRows = 4; k < K[1]; k++) {
					if (C = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), D = " ui-corner-all", P = "", X) {
						if (P += "<div class='ui-datepicker-group", K[1] > 1) switch (k) {
							case 0:
								P += " ui-datepicker-group-first", D = " ui-corner-" + (Y ? "right" : "left");
								break;
							case K[1] - 1:
								P += " ui-datepicker-group-last", D = " ui-corner-" + (Y ? "left" : "right");
								break;
							default:
								P += " ui-datepicker-group-middle", D = ""
						}
						P += "'>"
					}
					for (P += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === w ? Y ? o : s : "") + (/all|right/.test(D) && 0 === w ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, tt, Q, J, w > 0 || k > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", T = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", _ = 0; _ < 7; _++) I = (_ + c) % 7, T += "<th scope='col'" + ((_ + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[I] + "'>" + p[I] + "</span></th>";
					for (P += T + "</tr></thead><tbody>", S = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), M = Math.ceil(((z = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7) + S) / 7), H = X && this.maxRows > M ? this.maxRows : M, this.maxRows = H, A = this._daylightSavingAdjust(new Date(tt, Z, 1 - z)), W = 0; W < H; W++) {
						for (P += "<tr>", E = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", _ = 0; _ < 7; _++) N = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = (O = A.getMonth() !== Z) && !b || !N[0] || Q && A < Q || J && A > J, E += "<td class='" + ((_ + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (O ? " ui-datepicker-other-month" : "") + (A.getTime() === C.getTime() && Z === t.selectedMonth && t._keyEvent || $.getTime() === A.getTime() && $.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + (O && !v ? "" : " " + N[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!O || v) && N[2] ? " title='" + N[2].replace(/'/g, "&#39;") + "'" : "") + (F ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (O && !v ? "&#xa0;" : F ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === L.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (O ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
						P += E + "</tr>"
					}++Z > 11 && (Z = 0, tt++), P += "</tbody></table>" + (X ? "</div>" + (K[0] > 0 && k === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += P
				}
				y += x
			}
			return y += l, t._keyEvent = !1, y
		},
		_generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
			var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
				v = this._get(t, "changeYear"),
				b = this._get(t, "showMonthAfterYear"),
				$ = "<div class='ui-datepicker-title'>",
				y = "";
			if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
			else {
				for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!h || c >= s.getMonth()) && (!l || c <= n.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
				y += "</select>"
			}
			if (b || ($ += y + (o || !(m && v) ? "&#xa0;" : "")), !t.yearshtml) {
				if (t.yearshtml = "", o || !v) $ += "<span class='ui-datepicker-year'>" + i + "</span>";
				else {
					for (u = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), g = Math.max(f = (p = function(t) {
							var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
							return isNaN(e) ? d : e
						})(u[0]), p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
					t.yearshtml += "</select>", $ += t.yearshtml, t.yearshtml = null
				}
			}
			return $ += this._get(t, "yearSuffix"), b && ($ += (o || !(m && v) ? "&#xa0;" : "") + y), $ += "</div>"
		},
		_adjustInstDate: function(t, e, i) {
			var s = t.drawYear + ("Y" === i ? e : 0),
				n = t.drawMonth + ("M" === i ? e : 0),
				o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
				a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
			t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
		},
		_restrictMinMax: function(t, e) {
			var i = this._getMinMaxDate(t, "min"),
				s = this._getMinMaxDate(t, "max"),
				n = i && e < i ? i : e;
			return s && n > s ? s : n
		},
		_notifyChange: function(t) {
			var e = this._get(t, "onChangeMonthYear");
			e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
		},
		_getNumberOfMonths: function(t) {
			var e = this._get(t, "numberOfMonths");
			return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
		},
		_getMinMaxDate: function(t, e) {
			return this._determineDate(t, this._get(t, e + "Date"), null)
		},
		_getDaysInMonth: function(t, e) {
			return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
		},
		_getFirstDayOfMonth: function(t, e) {
			return new Date(t, e, 1).getDay()
		},
		_canAdjustMonth: function(t, e, i, s) {
			var n = this._getNumberOfMonths(t),
				o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
			return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
		},
		_isInRange: function(t, e) {
			var i, s, n = this._getMinMaxDate(t, "min"),
				o = this._getMinMaxDate(t, "max"),
				a = null,
				r = null,
				h = this._get(t, "yearRange");
			return h && (i = h.split(":"), s = new Date().getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
		},
		_getFormatConfig: function(t) {
			var e = this._get(t, "shortYearCutoff");
			return {
				shortYearCutoff: e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10),
				dayNamesShort: this._get(t, "dayNamesShort"),
				dayNames: this._get(t, "dayNames"),
				monthNamesShort: this._get(t, "monthNamesShort"),
				monthNames: this._get(t, "monthNames")
			}
		},
		_formatDate: function(t, e, i, s) {
			e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
			var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
		}
	}), t.fn.datepicker = function(e) {
		if (!this.length) return this;
		t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
		var i = Array.prototype.slice.call(arguments, 1);
		return "string" == typeof e && ("isDisabled" === e || "getDate" === e || "widget" === e) || "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
			"string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
		})
	}, t.datepicker = new v, t.datepicker.initialized = !1, t.datepicker.uuid = new Date().getTime(), t.datepicker.version = "1.11.4", t.datepicker, t.widget("ui.dialog", {
		version: "1.11.4",
		options: {
			appendTo: "body",
			autoOpen: !0,
			buttons: [],
			closeOnEscape: !0,
			closeText: "Close",
			dialogClass: "",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function(e) {
					var i = t(this).css(e).offset().top;
					i < 0 && t(this).css("top", e.top - i)
				}
			},
			resizable: !0,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		sizeRelatedOptions: {
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		resizableRelatedOptions: {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		},
		_create: function() {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			}, this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			}, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
		},
		_init: function() {
			this.options.autoOpen && this.open()
		},
		_appendTo: function() {
			var e = this.options.appendTo;
			return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
		},
		_destroy: function() {
			var t, e = this.originalPosition;
			this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
		},
		widget: function() {
			return this.uiDialog
		},
		disable: t.noop,
		enable: t.noop,
		close: function(e) {
			var i, s = this;
			if (this._isOpen && !1 !== this._trigger("beforeClose", e)) {
				if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
					(i = this.document[0].activeElement) && "body" !== i.nodeName.toLowerCase() && t(i).blur()
				} catch (n) {}
				this._hide(this.uiDialog, this.options.hide, function() {
					s._trigger("close", e)
				})
			}
		},
		isOpen: function() {
			return this._isOpen
		},
		moveToTop: function() {
			this._moveToTop()
		},
		_moveToTop: function(e, i) {
			var s = !1,
				n = this.uiDialog.siblings(".ui-front:visible").map(function() {
					return +t(this).css("z-index")
				}).get(),
				o = Math.max.apply(null, n);
			return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
		},
		open: function() {
			var e = this;
			if (this._isOpen) {
				this._moveToTop() && this._focusTabbable();
				return
			}
			this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
				e._focusTabbable(), e._trigger("focus")
			}), this._makeFocusTarget(), this._trigger("open")
		},
		_focusTabbable: function() {
			var t = this._focusedElement;
			t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
		},
		_keepFocus: function(e) {
			function i() {
				var e = this.document[0].activeElement;
				this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
			}
			e.preventDefault(), i.call(this), this._delay(i)
		},
		_createWrapper: function() {
			this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo()), this._on(this.uiDialog, {
				keydown: function(e) {
					if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) {
						e.preventDefault(), this.close(e);
						return
					}
					if (!(e.keyCode !== t.ui.keyCode.TAB || e.isDefaultPrevented())) {
						var i = this.uiDialog.find(":tabbable"),
							s = i.filter(":first"),
							n = i.filter(":last");
						e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? (e.target === s[0] || e.target === this.uiDialog[0]) && e.shiftKey && (this._delay(function() {
							n.focus()
						}), e.preventDefault()) : (this._delay(function() {
							s.focus()
						}), e.preventDefault())
					}
				},
				mousedown: function(t) {
					this._moveToTop(t) && this._focusTabbable()
				}
			}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
				"aria-describedby": this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar: function() {
			var e;
			this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
				mousedown: function(e) {
					t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
				}
			}), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
				label: this.options.closeText,
				icons: {
					primary: "ui-icon-closethick"
				},
				text: !1
			}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
				click: function(t) {
					t.preventDefault(), this.close(t)
				}
			}), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
				"aria-labelledby": e.attr("id")
			})
		},
		_title: function(t) {
			this.options.title || t.html("&#160;"), t.text(this.options.title)
		},
		_createButtonPane: function() {
			this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
		},
		_createButtons: function() {
			var e = this,
				i = this.options.buttons;
			if (this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length) {
				this.uiDialog.removeClass("ui-dialog-buttons");
				return
			}
			t.each(i, function(i, s) {
				var n, o;
				s = t.isFunction(s) ? {
					click: s,
					text: i
				} : s, n = (s = t.extend({
					type: "button"
				}, s)).click, s.click = function() {
					n.apply(e.element[0], arguments)
				}, o = {
					icons: s.icons,
					text: s.showText
				}, delete s.icons, delete s.showText, t("<button></button>", s).button(o).appendTo(e.uiButtonSet)
			}), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)
		},
		_makeDraggable: function() {
			var e = this,
				i = this.options;

			function s(t) {
				return {
					position: t.position,
					offset: t.offset
				}
			}
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function(i, n) {
					t(this).addClass("ui-dialog-dragging"), e._blockFrames(), e._trigger("dragStart", i, s(n))
				},
				drag: function(t, i) {
					e._trigger("drag", t, s(i))
				},
				stop: function(n, o) {
					var a = o.offset.left - e.document.scrollLeft(),
						r = o.offset.top - e.document.scrollTop();
					i.position = {
						my: "left top",
						at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
						of: e.window
					}, t(this).removeClass("ui-dialog-dragging"), e._unblockFrames(), e._trigger("dragStop", n, s(o))
				}
			})
		},
		_makeResizable: function() {
			var e = this,
				i = this.options,
				s = i.resizable,
				n = this.uiDialog.css("position");

			function o(t) {
				return {
					originalPosition: t.originalPosition,
					originalSize: t.originalSize,
					position: t.position,
					size: t.size
				}
			}
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: i.maxWidth,
				maxHeight: i.maxHeight,
				minWidth: i.minWidth,
				minHeight: this._minHeight(),
				handles: "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw",
				start: function(i, s) {
					t(this).addClass("ui-dialog-resizing"), e._blockFrames(), e._trigger("resizeStart", i, o(s))
				},
				resize: function(t, i) {
					e._trigger("resize", t, o(i))
				},
				stop: function(s, n) {
					var a = e.uiDialog.offset(),
						r = a.left - e.document.scrollLeft(),
						h = a.top - e.document.scrollTop();
					i.height = e.uiDialog.height(), i.width = e.uiDialog.width(), i.position = {
						my: "left top",
						at: "left" + (r >= 0 ? "+" : "") + r + " top" + (h >= 0 ? "+" : "") + h,
						of: e.window
					}, t(this).removeClass("ui-dialog-resizing"), e._unblockFrames(), e._trigger("resizeStop", s, o(n))
				}
			}).css("position", n)
		},
		_trackFocus: function() {
			this._on(this.widget(), {
				focusin: function(e) {
					this._makeFocusTarget(), this._focusedElement = t(e.target)
				}
			})
		},
		_makeFocusTarget: function() {
			this._untrackInstance(), this._trackingInstances().unshift(this)
		},
		_untrackInstance: function() {
			var e = this._trackingInstances(),
				i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
		},
		_trackingInstances: function() {
			var t = this.document.data("ui-dialog-instances");
			return t || (t = [], this.document.data("ui-dialog-instances", t)), t
		},
		_minHeight: function() {
			var t = this.options;
			return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
		},
		_position: function() {
			var t = this.uiDialog.is(":visible");
			t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
		},
		_setOptions: function(e) {
			var i = this,
				s = !1,
				n = {};
			t.each(e, function(t, e) {
				i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
			}), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
		},
		_setOption: function(t, e) {
			var i, s, n = this.uiDialog;
			"dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
				label: "" + e
			}), "draggable" === t && ((i = n.is(":data(ui-draggable)")) && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" !== t || ((s = n.is(":data(ui-resizable)")) && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || !1 === e || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size: function() {
			var t, e, i, s = this.options;
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			}), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
				height: "auto",
				width: s.width
			}).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
				minHeight: e,
				maxHeight: i,
				height: "auto"
			}) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_blockFrames: function() {
			this.iframeBlocks = this.document.find("iframe").map(function() {
				var e = t(this);
				return t("<div>").css({
					position: "absolute",
					width: e.outerWidth(),
					height: e.outerHeight()
				}).appendTo(e.parent()).offset(e.offset())[0]
			})
		},
		_unblockFrames: function() {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_allowInteraction: function(e) {
			return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
		},
		_createOverlay: function() {
			if (this.options.modal) {
				var e = !0;
				this._delay(function() {
					e = !1
				}), this.document.data("ui-dialog-overlays") || this._on(this.document, {
					focusin: function(t) {
						!e && (this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable()))
					}
				}), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
					mousedown: "_keepFocus"
				}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
			}
		},
		_destroyOverlay: function() {
			if (this.options.modal && this.overlay) {
				var t = this.document.data("ui-dialog-overlays") - 1;
				t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
			}
		}
	}), t.widget("ui.progressbar", {
		version: "1.11.4",
		options: {
			max: 100,
			value: 0,
			change: null,
			complete: null
		},
		min: 0,
		_create: function() {
			this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role: "progressbar",
				"aria-valuemin": this.min
			}), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
		},
		_destroy: function() {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
		},
		value: function(t) {
			if (void 0 === t) return this.options.value;
			this.options.value = this._constrainedValue(t), this._refreshValue()
		},
		_constrainedValue: function(t) {
			return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
		},
		_setOptions: function(t) {
			var e = t.value;
			delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
		},
		_setOption: function(t, e) {
			"max" === t && (e = Math.max(this.min, e)), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
		},
		_percentage: function() {
			return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
		},
		_refreshValue: function() {
			var e = this.options.value,
				i = this._percentage();
			this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
				"aria-valuemax": this.options.max,
				"aria-valuenow": e
			}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
		}
	}), t.widget("ui.selectmenu", {
		version: "1.11.4",
		defaultElement: "<select>",
		options: {
			appendTo: null,
			disabled: null,
			icons: {
				button: "ui-icon-triangle-1-s"
			},
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			width: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			select: null
		},
		_create: function() {
			var t = this.element.uniqueId().attr("id");
			this.ids = {
				element: t,
				button: t + "-button",
				menu: t + "-menu"
			}, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
		},
		_drawButton: function() {
			var e = this;
			this.label = t("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
				click: function(t) {
					this.button.focus(), t.preventDefault()
				}
			}), this.element.hide(), this.button = t("<span>", {
				class: "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
				tabindex: this.options.disabled ? -1 : 0,
				id: this.ids.button,
				role: "combobox",
				"aria-expanded": "false",
				"aria-autocomplete": "list",
				"aria-owns": this.ids.menu,
				"aria-haspopup": "true"
			}).insertAfter(this.element), t("<span>", {
				class: "ui-icon " + this.options.icons.button
			}).prependTo(this.button), this.buttonText = t("<span>", {
				class: "ui-selectmenu-text"
			}).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
				e.menuItems || e._refreshMenu()
			}), this._hoverable(this.button), this._focusable(this.button)
		},
		_drawMenu: function() {
			var e = this;
			this.menu = t("<ul>", {
				"aria-hidden": "true",
				"aria-labelledby": this.ids.button,
				id: this.ids.menu
			}), this.menuWrap = t("<div>", {
				class: "ui-selectmenu-menu ui-front"
			}).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
				role: "listbox",
				select: function(t, i) {
					t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
				},
				focus: function(t, i) {
					var s = i.item.data("ui-selectmenu-item");
					null == e.focusIndex || s.index === e.focusIndex || (e._trigger("focus", t, {
						item: s
					}), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
				}
			}).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
				return !1
			}, this.menuInstance._isDivider = function() {
				return !1
			}
		},
		refresh: function() {
			this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
		},
		_refreshMenu: function() {
			this.menu.empty();
			var t, e = this.element.find("option");
			e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
		},
		open: function(t) {
			!this.options.disabled && (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))
		},
		_position: function() {
			this.menuWrap.position(t.extend({
				of: this.button
			}, this.options.position))
		},
		close: function(t) {
			this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
		},
		widget: function() {
			return this.button
		},
		menuWidget: function() {
			return this.menu
		},
		_renderMenu: function(e, i) {
			var s = this,
				n = "";
			t.each(i, function(i, o) {
				o.optgroup !== n && (t("<li>", {
					class: "ui-selectmenu-optgroup ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
					text: o.optgroup
				}).appendTo(e), n = o.optgroup), s._renderItemData(e, o)
			})
		},
		_renderItemData: function(t, e) {
			return this._renderItem(t, e).data("ui-selectmenu-item", e)
		},
		_renderItem: function(e, i) {
			var s = t("<li>");
			return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(e)
		},
		_setText: function(t, e) {
			e ? t.text(e) : t.html("&#160;")
		},
		_move: function(t, e) {
			var i, s, n = ".ui-menu-item";
			this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s)
		},
		_getSelectedItem: function() {
			return this.menuItems.eq(this.element[0].selectedIndex)
		},
		_toggle: function(t) {
			this[this.isOpen ? "close" : "open"](t)
		},
		_setSelection: function() {
			var t;
			this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
		},
		_documentClick: {
			mousedown: function(e) {
				this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(e))
			}
		},
		_buttonEvents: {
			mousedown: function() {
				var t;
				window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
			},
			click: function(t) {
				this._setSelection(), this._toggle(t)
			},
			keydown: function(e) {
				var i = !0;
				switch (e.keyCode) {
					case t.ui.keyCode.TAB:
					case t.ui.keyCode.ESCAPE:
						this.close(e), i = !1;
						break;
					case t.ui.keyCode.ENTER:
						this.isOpen && this._selectFocusedItem(e);
						break;
					case t.ui.keyCode.UP:
						e.altKey ? this._toggle(e) : this._move("prev", e);
						break;
					case t.ui.keyCode.DOWN:
						e.altKey ? this._toggle(e) : this._move("next", e);
						break;
					case t.ui.keyCode.SPACE:
						this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
						break;
					case t.ui.keyCode.LEFT:
						this._move("prev", e);
						break;
					case t.ui.keyCode.RIGHT:
						this._move("next", e);
						break;
					case t.ui.keyCode.HOME:
					case t.ui.keyCode.PAGE_UP:
						this._move("first", e);
						break;
					case t.ui.keyCode.END:
					case t.ui.keyCode.PAGE_DOWN:
						this._move("last", e);
						break;
					default:
						this.menu.trigger(e), i = !1
				}
				i && e.preventDefault()
			}
		},
		_selectFocusedItem: function(t) {
			var e = this.menuItems.eq(this.focusIndex);
			e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
		},
		_select: function(t, e) {
			var i = this.element[0].selectedIndex;
			this.element[0].selectedIndex = t.index, this._setText(this.buttonText, t.label), this._setAria(t), this._trigger("select", e, {
				item: t
			}), t.index !== i && this._trigger("change", e, {
				item: t
			}), this.close(e)
		},
		_setAria: function(t) {
			var e = this.menuItems.eq(t.index).attr("id");
			this.button.attr({
				"aria-labelledby": e,
				"aria-activedescendant": e
			}), this.menu.attr("aria-activedescendant", e)
		},
		_setOption: function(t, e) {
			"icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "disabled" === t && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === t && this._resizeButton()
		},
		_appendTo: function() {
			var e = this.options.appendTo;
			return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
		},
		_toggleAttr: function() {
			this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
		},
		_resizeButton: function() {
			var t = this.options.width;
			t || (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)
		},
		_resizeMenu: function() {
			this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
		},
		_getCreateOptions: function() {
			return {
				disabled: this.element.prop("disabled")
			}
		},
		_parseOptions: function(e) {
			var i = [];
			e.each(function(e, s) {
				var n = t(s),
					o = n.parent("optgroup");
				i.push({
					element: n,
					index: e,
					value: n.val(),
					label: n.text(),
					optgroup: o.attr("label") || "",
					disabled: o.prop("disabled") || n.prop("disabled")
				})
			}), this.items = i
		},
		_destroy: function() {
			this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
		}
	}), t.widget("ui.slider", t.ui.mouse, {
		version: "1.11.4",
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
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		numPages: 5,
		_create: function() {
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
		},
		_refresh: function() {
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
		},
		_createHandles: function() {
			var e, i, s = this.options,
				n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				o = [];
			for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; e < i; e++) o.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
			this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
				t(this).data("ui-slider-handle-index", e)
			})
		},
		_createRange: function() {
			var e = this.options,
				i = "";
			e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
				left: "",
				bottom: ""
			}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
		},
		_setupEvents: function() {
			this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
		},
		_destroy: function() {
			this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
		},
		_mouseCapture: function(e) {
			var i, s, n, o, a, r, h, l, c = this,
				u = this.options;
			return !u.disabled && (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), i = {
				x: e.pageX,
				y: e.pageY
			}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
				var i = Math.abs(s - c.values(e));
				(n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
			}), !1 !== (r = this._start(e, a)) && (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
				left: 0,
				top: 0
			} : {
				left: e.pageX - h.left - o.width() / 2,
				top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
		},
		_mouseStart: function() {
			return !0
		},
		_mouseDrag: function(t) {
			var e = {
					x: t.pageX,
					y: t.pageY
				},
				i = this._normValueFromMouse(e);
			return this._slide(t, this._handleIndex, i), !1
		},
		_mouseStop: function(t) {
			return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function() {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function(t) {
			var e, i, s, n, o;
			return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
		},
		_start: function(t, e) {
			var i = {
				handle: this.handles[e],
				value: this.value()
			};
			return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
		},
		_slide: function(t, e, i) {
			var s, n, o;
			this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === e && i > s || 1 === e && i < s) && (i = s), i !== this.values(e) && ((n = this.values())[e] = i, o = this._trigger("slide", t, {
				handle: this.handles[e],
				value: i,
				values: n
			}), s = this.values(e ? 0 : 1), !1 !== o && this.values(e, i))) : i !== this.value() && !1 !== (o = this._trigger("slide", t, {
				handle: this.handles[e],
				value: i
			})) && this.value(i)
		},
		_stop: function(t, e) {
			var i = {
				handle: this.handles[e],
				value: this.value()
			};
			this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
		},
		_change: function(t, e) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = {
					handle: this.handles[e],
					value: this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
			}
		},
		value: function(t) {
			if (arguments.length) {
				this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0);
				return
			}
			return this._value()
		},
		values: function(e, i) {
			var s, n, o;
			if (arguments.length > 1) {
				this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e);
				return
			}
			if (!arguments.length) return this._values();
			if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
			for (o = 0, s = this.options.values, n = arguments[0]; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
			this._refreshValue()
		},
		_setOption: function(e, i) {
			var s, n = 0;
			switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!i), this._super(e, i), e) {
				case "orientation":
					this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
					break;
				case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
					break;
				case "values":
					for (this._animateOff = !0, this._refreshValue(), s = 0; s < n; s += 1) this._change(null, s);
					this._animateOff = !1;
					break;
				case "step":
				case "min":
				case "max":
					this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
					break;
				case "range":
					this._animateOff = !0, this._refresh(), this._animateOff = !1
			}
		},
		_value: function() {
			var t = this.options.value;
			return this._trimAlignValue(t)
		},
		_values: function(t) {
			var e, i, s;
			if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
			if (!this.options.values || !this.options.values.length) return [];
			for (s = 0, i = this.options.values.slice(); s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
			return i
		},
		_trimAlignValue: function(t) {
			if (t <= this._valueMin()) return this._valueMin();
			if (t >= this._valueMax()) return this._valueMax();
			var e = this.options.step > 0 ? this.options.step : 1,
				i = (t - this._valueMin()) % e,
				s = t - i;
			return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
		},
		_calculateNewMax: function() {
			var t = this.options.max,
				e = this._valueMin(),
				i = this.options.step;
			t = Math.floor(+(t - e).toFixed(this._precision()) / i) * i + e, this.max = parseFloat(t.toFixed(this._precision()))
		},
		_precision: function() {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function(t) {
			var e = t.toString(),
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_valueMin: function() {
			return this.options.min
		},
		_valueMax: function() {
			return this.max
		},
		_refreshValue: function() {
			var e, i, s, n, o, a = this.options.range,
				r = this.options,
				h = this,
				l = !this._animateOff && r.animate,
				c = {};
			this.options.values && this.options.values.length ? this.handles.each(function(s) {
				i = (h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100, c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), !0 === h.options.range && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					left: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					width: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				})) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					bottom: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					height: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				}))), e = i
			}) : (s = this.value(), n = this._valueMin(), i = (o = this._valueMax()) !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				width: i + "%"
			}, r.animate), "max" === a && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
				width: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				height: i + "%"
			}, r.animate), "max" === a && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
				height: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}))
		},
		_handleEvents: {
			keydown: function(e) {
				var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
				switch (e.keyCode) {
					case t.ui.keyCode.HOME:
					case t.ui.keyCode.END:
					case t.ui.keyCode.PAGE_UP:
					case t.ui.keyCode.PAGE_DOWN:
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), !1 === (i = this._start(e, a)))) return
				}
				switch (o = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(a) : this.value(), e.keyCode) {
					case t.ui.keyCode.HOME:
						n = this._valueMin();
						break;
					case t.ui.keyCode.END:
						n = this._valueMax();
						break;
					case t.ui.keyCode.PAGE_UP:
						n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case t.ui.keyCode.PAGE_DOWN:
						n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
						if (s === this._valueMax()) return;
						n = this._trimAlignValue(s + o);
						break;
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (s === this._valueMin()) return;
						n = this._trimAlignValue(s - o)
				}
				this._slide(e, a, n)
			},
			keyup: function(e) {
				var i = t(e.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
			}
		}
	}), t.widget("ui.spinner", {
		version: "1.11.4",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: !0,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function() {
			this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function() {
			var e = {},
				i = this.element;
			return t.each(["min", "max", "step"], function(t, s) {
				var n = i.attr(s);
				void 0 !== n && n.length && (e[s] = n)
			}), e
		},
		_events: {
			keydown: function(t) {
				this._start(t) && this._keydown(t) && t.preventDefault()
			},
			keyup: "_stop",
			focus: function() {
				this.previous = this.element.val()
			},
			blur: function(t) {
				if (this.cancelBlur) {
					delete this.cancelBlur;
					return
				}
				this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t)
			},
			mousewheel: function(t, e) {
				if (e) {
					if (!this.spinning && !this._start(t)) return !1;
					this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
						this.spinning && this._stop(t)
					}, 100), t.preventDefault()
				}
			},
			"mousedown .ui-spinner-button": function(e) {
				var i;

				function s() {
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = i, this._delay(function() {
						this.previous = i
					}))
				}
				i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), s.call(this), this.cancelBlur = !0, this._delay(function() {
					delete this.cancelBlur, s.call(this)
				}), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function(e) {
				if (t(e.currentTarget).hasClass("ui-state-active")) {
					if (!1 === this._start(e)) return !1;
					this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
				}
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_draw: function() {
			var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
			this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
		},
		_keydown: function(e) {
			var i = this.options,
				s = t.ui.keyCode;
			switch (e.keyCode) {
				case s.UP:
					return this._repeat(null, 1, e), !0;
				case s.DOWN:
					return this._repeat(null, -1, e), !0;
				case s.PAGE_UP:
					return this._repeat(null, i.page, e), !0;
				case s.PAGE_DOWN:
					return this._repeat(null, -i.page, e), !0
			}
			return !1
		},
		_uiSpinnerHtml: function() {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
		},
		_buttonHtml: function() {
			return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
		},
		_start: function(t) {
			return (!!this.spinning || !1 !== this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
		},
		_repeat: function(t, e, i) {
			t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
				this._repeat(40, e, i)
			}, t), this._spin(e * this.options.step, i)
		},
		_spin: function(t, e) {
			var i = this.value() || 0;
			this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), (!this.spinning || !1 !== this._trigger("spin", e, {
				value: i
			})) && (this._value(i), this.counter++)
		},
		_increment: function(e) {
			var i = this.options.incremental;
			return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
		},
		_precision: function() {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function(t) {
			var e = t.toString(),
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_adjustValue: function(t) {
			var e, i, s = this.options;
			return (i = Math.round((i = t - (e = null !== s.min ? s.min : 0)) / s.step) * s.step, t = parseFloat((t = e + i).toFixed(this._precision())), null !== s.max && t > s.max) ? s.max : null !== s.min && t < s.min ? s.min : t
		},
		_stop: function(t) {
			this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
		},
		_setOption: function(t, e) {
			if ("culture" === t || "numberFormat" === t) {
				var i = this._parse(this.element.val());
				this.options[t] = e, this.element.val(this._format(i));
				return
			}("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable"))
		},
		_setOptions: _(function(t) {
			this._super(t)
		}),
		_parse: function(t) {
			return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
		},
		_format: function(t) {
			return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
		},
		_refresh: function() {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		isValid: function() {
			var t = this.value();
			return null !== t && t === this._adjustValue(t)
		},
		_value: function(t, e) {
			var i;
			"" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
		},
		_destroy: function() {
			this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
		},
		stepUp: _(function(t) {
			this._stepUp(t)
		}),
		_stepUp: function(t) {
			this._start() && (this._spin((t || 1) * this.options.step), this._stop())
		},
		stepDown: _(function(t) {
			this._stepDown(t)
		}),
		_stepDown: function(t) {
			this._start() && (this._spin(-((t || 1) * this.options.step)), this._stop())
		},
		pageUp: _(function(t) {
			this._stepUp((t || 1) * this.options.page)
		}),
		pageDown: _(function(t) {
			this._stepDown((t || 1) * this.options.page)
		}),
		value: function(t) {
			if (!arguments.length) return this._parse(this.element.val());
			_(this._value).call(this, t)
		},
		widget: function() {
			return this.uiSpinner
		}
	}), t.widget("ui.tabs", {
		version: "1.11.4",
		delay: 300,
		options: {
			active: null,
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_isLocal: (w = /#.*$/, function(t) {
			var e, i;
			e = (t = t.cloneNode(!1)).href.replace(w, ""), i = location.href.replace(w, "");
			try {
				e = decodeURIComponent(e)
			} catch (s) {}
			try {
				i = decodeURIComponent(i)
			} catch (n) {}
			return t.hash.length > 1 && e === i
		}),
		_create: function() {
			var e = this,
				i = this.options;
			this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
				return e.tabs.index(t)
			}))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
		},
		_initialActive: function() {
			var e = this.options.active,
				i = this.options.collapsible,
				s = location.hash.substring(1);
			return null === e && (s && this.tabs.each(function(i, n) {
				if (t(n).attr("aria-controls") === s) return e = i, !1
			}), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), e
		},
		_getCreateEventData: function() {
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : t()
			}
		},
		_tabKeydown: function(e) {
			var i = t(this.document[0].activeElement).closest("li"),
				s = this.tabs.index(i),
				n = !0;
			if (!this._handlePageNav(e)) {
				switch (e.keyCode) {
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
						s++;
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.LEFT:
						n = !1, s--;
						break;
					case t.ui.keyCode.END:
						s = this.anchors.length - 1;
						break;
					case t.ui.keyCode.HOME:
						s = 0;
						break;
					case t.ui.keyCode.SPACE:
						e.preventDefault(), clearTimeout(this.activating), this._activate(s);
						return;
					case t.ui.keyCode.ENTER:
						e.preventDefault(), clearTimeout(this.activating), this._activate(s !== this.options.active && s);
						return;
					default:
						return
				}
				e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
					this.option("active", s)
				}, this.delay))
			}
		},
		_panelKeydown: function(e) {
			!this._handlePageNav(e) && e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
		},
		_handlePageNav: function(e) {
			return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
		},
		_findNextTab: function(e, i) {
			var s = this.tabs.length - 1;

			function n() {
				return e > s && (e = 0), e < 0 && (e = s), e
			}
			for (; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
			return e
		},
		_focusNextTab: function(t, e) {
			return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
		},
		_setOption: function(t, e) {
			if ("active" === t) {
				this._activate(e);
				return
			}
			if ("disabled" === t) {
				this._setupDisabled(e);
				return
			}
			this._super(t, e), "collapsible" !== t || (this.element.toggleClass("ui-tabs-collapsible", e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)
		},
		_sanitizeSelector: function(t) {
			return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function() {
			var e = this.options,
				i = this.tablist.children(":has(a[href])");
			e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
				return i.index(t)
			}), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
		},
		_refresh: function() {
			this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-hidden": "true"
			}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}), this._getPanelForTab(this.active).show().attr({
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function() {
			var e = this,
				i = this.tabs,
				s = this.anchors,
				n = this.panels;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(e) {
				t(this).is(".ui-state-disabled") && e.preventDefault()
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
				t(this).closest("li").is(".ui-state-disabled") && this.blur()
			}), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
				role: "tab",
				tabIndex: -1
			}), this.anchors = this.tabs.map(function() {
				return t("a", this)[0]
			}).addClass("ui-tabs-anchor").attr({
				role: "presentation",
				tabIndex: -1
			}), this.panels = t(), this.anchors.each(function(i, s) {
				var n, o, a, r = t(s).uniqueId().attr("id"),
					h = t(s).closest("li"),
					l = h.attr("aria-controls");
				e._isLocal(s) ? (a = (n = s.hash).substring(1), o = e.element.find(e._sanitizeSelector(n))) : (n = "#" + (a = h.attr("aria-controls") || t({}).uniqueId()[0].id), (o = e.element.find(n)).length || (o = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({
					"aria-controls": a,
					"aria-labelledby": r
				}), o.attr("aria-labelledby", r)
			}), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
		},
		_getList: function() {
			return this.tablist || this.element.find("ol,ul").eq(0)
		},
		_createPanel: function(e) {
			return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		},
		_setupDisabled: function(e) {
			t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
			for (var i, s = 0; i = this.tabs[s]; s++) !0 === e || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
			this.options.disabled = e
		},
		_setupEvents: function(e) {
			var i = {};
			e && t.each(e.split(" "), function(t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
				click: function(t) {
					t.preventDefault()
				}
			}), this._on(this.anchors, i), this._on(this.tabs, {
				keydown: "_tabKeydown"
			}), this._on(this.panels, {
				keydown: "_panelKeydown"
			}), this._focusable(this.tabs), this._hoverable(this.tabs)
		},
		_setupHeightStyle: function(e) {
			var i, s = this.element.parent();
			"fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
				var e = t(this),
					s = e.css("position");
				"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
			}), this.element.children().not(this.panels).each(function() {
				i -= t(this).outerHeight(!0)
			}), this.panels.each(function() {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
				i = Math.max(i, t(this).height("").height())
			}).height(i))
		},
		_eventHandler: function(e) {
			var i = this.options,
				s = this.active,
				n = t(e.currentTarget).closest("li"),
				o = n[0] === s[0],
				a = o && i.collapsible,
				r = a ? t() : this._getPanelForTab(n),
				h = s.length ? this._getPanelForTab(s) : t(),
				l = {
					oldTab: s,
					oldPanel: h,
					newTab: a ? t() : n,
					newPanel: r
				};
			e.preventDefault(), !(n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading")) && !this.running && (!o || i.collapsible) && !1 !== this._trigger("beforeActivate", e, l) && (i.active = !a && this.tabs.index(n), this.active = o ? t() : n, this.xhr && this.xhr.abort(), h.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(n), e), this._toggle(e, l))
		},
		_toggle: function(e, i) {
			var s = this,
				n = i.newPanel,
				o = i.oldPanel;

			function a() {
				s.running = !1, s._trigger("activate", e, i)
			}

			function r() {
				i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), n.length && s.options.show ? s._show(n, s.options.show, a) : (n.show(), a())
			}
			this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, function() {
				i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r()
			}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o.hide(), r()), o.attr("aria-hidden", "true"), i.oldTab.attr({
				"aria-selected": "false",
				"aria-expanded": "false"
			}), n.length && o.length ? i.oldTab.attr("tabIndex", -1) : n.length && this.tabs.filter(function() {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1), n.attr("aria-hidden", "false"), i.newTab.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			})
		},
		_activate: function(e) {
			var i, s = this._findActive(e);
			s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function(e) {
			return !1 === e ? t() : this.tabs.eq(e)
		},
		_getIndex: function(t) {
			return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
		},
		_destroy: function() {
			this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
				t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
			}), this.tabs.each(function() {
				var e = t(this),
					i = e.data("ui-tabs-aria-controls");
				i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
			}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
		},
		enable: function(e) {
			var i = this.options.disabled;
			!1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
				return t !== e ? t : null
			}) : t.map(this.tabs, function(t, i) {
				return i !== e ? i : null
			})), this._setupDisabled(i))
		},
		disable: function(e) {
			var i = this.options.disabled;
			if (!0 !== i) {
				if (void 0 === e) i = !0;
				else {
					if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
					i = t.isArray(i) ? t.merge([e], i).sort() : [e]
				}
				this._setupDisabled(i)
			}
		},
		load: function(e, i) {
			e = this._getIndex(e);
			var s = this,
				n = this.tabs.eq(e),
				o = n.find(".ui-tabs-anchor"),
				a = this._getPanelForTab(n),
				r = {
					tab: n,
					panel: a
				},
				h = function(t, e) {
					"abort" === e && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
				};
			!this._isLocal(o[0]) && (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) {
				setTimeout(function() {
					a.html(t), s._trigger("load", i, r), h(n, e)
				}, 1)
			}).fail(function(t, e) {
				setTimeout(function() {
					h(t, e)
				}, 1)
			})))
		},
		_ajaxSettings: function(e, i, s) {
			var n = this;
			return {
				url: e.attr("href"),
				beforeSend: function(e, o) {
					return n._trigger("beforeLoad", i, t.extend({
						jqXHR: e,
						ajaxSettings: o
					}, s))
				}
			}
		},
		_getPanelForTab: function(e) {
			var i = t(e).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + i))
		}
	});
	var w, x, k = "ui-effects-",
		C = t;
	t.effects = {
			effect: {}
		},
		function(t, e) {
			var i, s = /^([\-+])=\s*(\d+\.?\d*)/,
				n = [{
					re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function(t) {
						return [t[1], t[2], t[3], t[4]]
					}
				}, {
					re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function(t) {
						return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
					}
				}, {
					re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
					parse: function(t) {
						return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
					}
				}, {
					re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
					parse: function(t) {
						return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
					}
				}, {
					re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					space: "hsla",
					parse: function(t) {
						return [t[1], t[2] / 100, t[3] / 100, t[4]]
					}
				}],
				o = t.Color = function(e, i, s, n) {
					return new t.Color.fn.parse(e, i, s, n)
				},
				a = {
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
				r = {
					byte: {
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
				h = o.support = {},
				l = t("<p>")[0],
				c = t.each;

			function u(t, e, i) {
				var s = r[e.type] || {};
				return null == t ? i || !e.def ? null : e.def : isNaN(t = s.floor ? ~~t : parseFloat(t)) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t
			}

			function d(e) {
				var s = o(),
					r = s._rgba = [];
				return (e = e.toLowerCase(), c(n, function(t, i) {
					var n, o = i.re.exec(e),
						h = o && i.parse(o),
						l = i.space || "rgba";
					if (h) return n = s[l](h), s[a[l].cache] = n[a[l].cache], r = s._rgba = n._rgba, !1
				}), r.length) ? ("0,0,0,0" === r.join() && t.extend(r, i.transparent), s) : i[e]
			}

			function p(t, e, i) {
				return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
			}
			l.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = l.style.backgroundColor.indexOf("rgba") > -1, c(a, function(t, e) {
				e.cache = "_" + t, e.props.alpha = {
					idx: 3,
					type: "percent",
					def: 1
				}
			}), o.fn = t.extend(o.prototype, {
				parse: function(s, n, r, h) {
					if (s === e) return this._rgba = [null, null, null, null], this;
					(s.jquery || s.nodeType) && (s = t(s).css(n), n = e);
					var l = this,
						p = t.type(s),
						f = this._rgba = [];
					return (n !== e && (s = [s, n, r, h], p = "array"), "string" === p) ? this.parse(d(s) || i._default) : "array" === p ? (c(a.rgba.props, function(t, e) {
						f[e.idx] = u(s[e.idx], e)
					}), this) : "object" === p ? (s instanceof o ? c(a, function(t, e) {
						s[e.cache] && (l[e.cache] = s[e.cache].slice())
					}) : c(a, function(e, i) {
						var n = i.cache;
						c(i.props, function(t, e) {
							if (!l[n] && i.to) {
								if ("alpha" === t || null == s[t]) return;
								l[n] = i.to(l._rgba)
							}
							l[n][e.idx] = u(s[t], e, !0)
						}), l[n] && 0 > t.inArray(null, l[n].slice(0, 3)) && (l[n][3] = 1, i.from && (l._rgba = i.from(l[n])))
					}), this) : void 0
				},
				is: function(t) {
					var e = o(t),
						i = !0,
						s = this;
					return c(a, function(t, n) {
						var o, a = e[n.cache];
						return a && (o = s[n.cache] || n.to && n.to(s._rgba) || [], c(n.props, function(t, e) {
							if (null != a[e.idx]) return i = a[e.idx] === o[e.idx]
						})), i
					}), i
				},
				_space: function() {
					var t = [],
						e = this;
					return c(a, function(i, s) {
						e[s.cache] && t.push(i)
					}), t.pop()
				},
				transition: function(t, e) {
					var i = o(t),
						s = i._space(),
						n = a[s],
						h = 0 === this.alpha() ? o("transparent") : this,
						l = h[n.cache] || n.to(h._rgba),
						d = l.slice();
					return i = i[n.cache], c(n.props, function(t, s) {
						var n = s.idx,
							o = l[n],
							a = i[n],
							h = r[s.type] || {};
						null !== a && (null === o ? d[n] = a : (h.mod && (a - o > h.mod / 2 ? o += h.mod : o - a > h.mod / 2 && (o -= h.mod)), d[n] = u((a - o) * e + o, s)))
					}), this[s](d)
				},
				blend: function(e) {
					if (1 === this._rgba[3]) return this;
					var i = this._rgba.slice(),
						s = i.pop(),
						n = o(e)._rgba;
					return o(t.map(i, function(t, e) {
						return (1 - s) * n[e] + s * t
					}))
				},
				toRgbaString: function() {
					var e = "rgba(",
						i = t.map(this._rgba, function(t, e) {
							return null == t ? e > 2 ? 1 : 0 : t
						});
					return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
				},
				toHslaString: function() {
					var e = "hsla(",
						i = t.map(this.hsla(), function(t, e) {
							return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
						});
					return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
				},
				toHexString: function(e) {
					var i = this._rgba.slice(),
						s = i.pop();
					return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
						return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
					}).join("")
				},
				toString: function() {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}), o.fn.parse.prototype = o.fn, a.hsla.to = function(t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e, i, s = t[0] / 255,
					n = t[1] / 255,
					o = t[2] / 255,
					a = t[3],
					r = Math.max(s, n, o),
					h = Math.min(s, n, o),
					l = r - h,
					c = r + h,
					u = .5 * c;
				return [Math.round(e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240) % 360, i = 0 === l ? 0 : u <= .5 ? l / c : l / (2 - c), u, null == a ? 1 : a]
			}, a.hsla.from = function(t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e = t[0] / 360,
					i = t[1],
					s = t[2],
					n = t[3],
					o = s <= .5 ? s * (1 + i) : s + i - s * i,
					a = 2 * s - o;
				return [Math.round(255 * p(a, o, e + 1 / 3)), Math.round(255 * p(a, o, e)), Math.round(255 * p(a, o, e - 1 / 3)), n]
			}, c(a, function(i, n) {
				var a = n.props,
					r = n.cache,
					h = n.to,
					l = n.from;
				o.fn[i] = function(i) {
					if (h && !this[r] && (this[r] = h(this._rgba)), i === e) return this[r].slice();
					var s, n = t.type(i),
						d = "array" === n || "object" === n ? i : arguments,
						p = this[r].slice();
					return (c(a, function(t, e) {
						var i = d["object" === n ? t : e.idx];
						null == i && (i = p[e.idx]), p[e.idx] = u(i, e)
					}), l) ? ((s = o(l(p)))[r] = p, s) : o(p)
				}, c(a, function(e, n) {
					!o.fn[e] && (o.fn[e] = function(o) {
						var a, r = t.type(o),
							h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i,
							l = this[h](),
							c = l[n.idx];
						return "undefined" === r ? c : ("function" === r && (o = o.call(this, c), r = t.type(o)), null == o && n.empty) ? this : ("string" === r && (a = s.exec(o)) && (o = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1)), l[n.idx] = o, this[h](l))
					})
				})
			}), o.hook = function(e) {
				c(e.split(" "), function(e, i) {
					t.cssHooks[i] = {
						set: function(e, s) {
							var n, a, r = "";
							if ("transparent" !== s && ("string" !== t.type(s) || (n = d(s)))) {
								if (s = o(n || s), !h.rgba && 1 !== s._rgba[3]) {
									for (a = "backgroundColor" === i ? e.parentNode : e;
										("" === r || "transparent" === r) && a && a.style;) try {
										r = t.css(a, "backgroundColor"), a = a.parentNode
									} catch (l) {}
									s = s.blend(r && "transparent" !== r ? r : "_default")
								}
								s = s.toRgbaString()
							}
							try {
								e.style[i] = s
							} catch (c) {}
						}
					}, t.fx.step[i] = function(e) {
						e.colorInit || (e.start = o(e.elem, i), e.end = o(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
					}
				})
			}, o.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
				expand: function(t) {
					var e = {};
					return c(["Top", "Right", "Bottom", "Left"], function(i, s) {
						e["border" + s + "Color"] = t
					}), e
				}
			}, i = t.Color.names = {
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
		}(C),
		function() {
			var e, i, s, n = ["add", "remove", "toggle"],
				o = {
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

			function a(e) {
				var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
					o = {};
				if (n && n.length && n[0] && n[n[0]])
					for (s = n.length; s--;) "string" == typeof n[i = n[s]] && (o[t.camelCase(i)] = n[i]);
				else
					for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
				return o
			}
			t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
				t.fx.step[i] = function(t) {
					("none" === t.end || t.setAttr) && (1 !== t.pos || t.setAttr) || (C.style(t.elem, i, t.end), t.setAttr = !0)
				}
			}), t.fn.addBack || (t.fn.addBack = function(t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}), t.effects.animateClass = function(e, i, s, r) {
				var h = t.speed(i, s, r);
				return this.queue(function() {
					var i, s = t(this),
						r = s.attr("class") || "",
						l = h.children ? s.find("*").addBack() : s;
					l = l.map(function() {
						return {
							el: t(this),
							start: a(this)
						}
					}), (i = function() {
						t.each(n, function(t, i) {
							e[i] && s[i + "Class"](e[i])
						})
					})(), l = l.map(function() {
						return this.end = a(this.el[0]), this.diff = function e(i, s) {
							var n, a, r = {};
							for (n in s) a = s[n], i[n] === a || o[n] || !t.fx.step[n] && isNaN(parseFloat(a)) || (r[n] = a);
							return r
						}(this.start, this.end), this
					}), s.attr("class", r), l = l.map(function() {
						var e = this,
							i = t.Deferred(),
							s = t.extend({}, h, {
								queue: !1,
								complete: function() {
									i.resolve(e)
								}
							});
						return this.el.animate(this.diff, s), i.promise()
					}), t.when.apply(t, l.get()).done(function() {
						i(), t.each(arguments, function() {
							var e = this.el;
							t.each(this.diff, function(t) {
								e.css(t, "")
							})
						}), h.complete.call(s[0])
					})
				})
			}, t.fn.extend({
				addClass: (e = t.fn.addClass, function(i, s, n, o) {
					return s ? t.effects.animateClass.call(this, {
						add: i
					}, s, n, o) : e.apply(this, arguments)
				}),
				removeClass: (i = t.fn.removeClass, function(e, s, n, o) {
					return arguments.length > 1 ? t.effects.animateClass.call(this, {
						remove: e
					}, s, n, o) : i.apply(this, arguments)
				}),
				toggleClass: (s = t.fn.toggleClass, function(e, i, n, o, a) {
					return "boolean" != typeof i && void 0 !== i ? t.effects.animateClass.call(this, {
						toggle: e
					}, i, n, o) : n ? t.effects.animateClass.call(this, i ? {
						add: e
					} : {
						remove: e
					}, n, o, a) : s.apply(this, arguments)
				}),
				switchClass: function(e, i, s, n, o) {
					return t.effects.animateClass.call(this, {
						add: i,
						remove: e
					}, s, n, o)
				}
			})
		}(),
		function() {
			var e, i, s;

			function n(e, i, s, n) {
				return t.isPlainObject(e) && (i = e, e = e.effect), e = {
					effect: e
				}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
			}

			function o(e) {
				return !!(!e || "number" == typeof e || t.fx.speeds[e] || "string" == typeof e && !t.effects.effect[e] || t.isFunction(e)) || "object" == typeof e && !e.effect
			}
			t.extend(t.effects, {
				version: "1.11.4",
				save: function(t, e) {
					for (var i = 0; i < e.length; i++) null !== e[i] && t.data(k + e[i], t[0].style[e[i]])
				},
				restore: function(t, e) {
					var i, s;
					for (s = 0; s < e.length; s++) null !== e[s] && (void 0 === (i = t.data(k + e[s])) && (i = ""), t.css(e[s], i))
				},
				setMode: function(t, e) {
					return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
				},
				getBaseline: function(t, e) {
					var i, s;
					switch (t[0]) {
						case "top":
							i = 0;
							break;
						case "middle":
							i = .5;
							break;
						case "bottom":
							i = 1;
							break;
						default:
							i = t[0] / e.height
					}
					switch (t[1]) {
						case "left":
							s = 0;
							break;
						case "center":
							s = .5;
							break;
						case "right":
							s = 1;
							break;
						default:
							s = t[1] / e.width
					}
					return {
						x: s,
						y: i
					}
				},
				createWrapper: function(e) {
					if (e.parent().is(".ui-effects-wrapper")) return e.parent();
					var i = {
							width: e.outerWidth(!0),
							height: e.outerHeight(!0),
							float: e.css("float")
						},
						s = t("<div></div>").addClass("ui-effects-wrapper").css({
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						}),
						n = {
							width: e.width(),
							height: e.height()
						},
						o = document.activeElement;
					try {
						o.id
					} catch (a) {
						o = document.body
					}
					return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
						position: "relative"
					}), e.css({
						position: "relative"
					})) : (t.extend(i, {
						position: e.css("position"),
						zIndex: e.css("z-index")
					}), t.each(["top", "left", "bottom", "right"], function(t, s) {
						i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
					}), e.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					})), e.css(n), s.css(i).show()
				},
				removeWrapper: function(e) {
					var i = document.activeElement;
					return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
				},
				setTransition: function(e, i, s, n) {
					return n = n || {}, t.each(i, function(t, i) {
						var o = e.cssUnit(i);
						o[0] > 0 && (n[i] = o[0] * s + o[1])
					}), n
				}
			}), t.fn.extend({
				effect: function() {
					var e = n.apply(this, arguments),
						i = e.mode,
						s = e.queue,
						o = t.effects.effect[e.effect];
					if (t.fx.off || !o) return i ? this[i](e.duration, e.complete) : this.each(function() {
						e.complete && e.complete.call(this)
					});

					function a(i) {
						var s = t(this),
							n = e.complete,
							a = e.mode;

						function r() {
							t.isFunction(n) && n.call(s[0]), t.isFunction(i) && i()
						}(s.is(":hidden") ? "hide" === a : "show" === a) ? (s[a](), r()) : o.call(s[0], e, r)
					}
					return !1 === s ? this.each(a) : this.queue(s || "fx", a)
				},
				show: (e = t.fn.show, function(t) {
					if (o(t)) return e.apply(this, arguments);
					var i = n.apply(this, arguments);
					return i.mode = "show", this.effect.call(this, i)
				}),
				hide: (i = t.fn.hide, function(t) {
					if (o(t)) return i.apply(this, arguments);
					var e = n.apply(this, arguments);
					return e.mode = "hide", this.effect.call(this, e)
				}),
				toggle: (s = t.fn.toggle, function(t) {
					if (o(t) || "boolean" == typeof t) return s.apply(this, arguments);
					var e = n.apply(this, arguments);
					return e.mode = "toggle", this.effect.call(this, e)
				}),
				cssUnit: function(e) {
					var i = this.css(e),
						s = [];
					return t.each(["em", "px", "%", "pt"], function(t, e) {
						i.indexOf(e) > 0 && (s = [parseFloat(i), e])
					}), s
				}
			})
		}(), x = {}, t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, e) {
			x[e] = function(e) {
				return Math.pow(e, t + 2)
			}
		}), t.extend(x, {
			Sine: function(t) {
				return 1 - Math.cos(t * Math.PI / 2)
			},
			Circ: function(t) {
				return 1 - Math.sqrt(1 - t * t)
			},
			Elastic: function(t) {
				return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin(((t - 1) * 80 - 7.5) * Math.PI / 15)
			},
			Back: function(t) {
				return t * t * (3 * t - 2)
			},
			Bounce: function(t) {
				for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
				return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
			}
		}), t.each(x, function(e, i) {
			t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
				return 1 - i(1 - t)
			}, t.easing["easeInOut" + e] = function(t) {
				return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
			}
		}), t.effects, t.effects.effect.blind = function(e, i) {
			var s, n, o, a = t(this),
				r = ["position", "top", "bottom", "left", "right", "height", "width"],
				h = t.effects.setMode(a, e.mode || "hide"),
				l = e.direction || "up",
				c = /up|down|vertical/.test(l),
				u = c ? "height" : "width",
				d = c ? "top" : "left",
				p = /up|left|vertical|horizontal/.test(l),
				f = {},
				g = "show" === h;
			a.parent().is(".ui-effects-wrapper") ? t.effects.save(a.parent(), r) : t.effects.save(a, r), a.show(), n = (s = t.effects.createWrapper(a).css({
				overflow: "hidden"
			}))[u](), o = parseFloat(s.css(d)) || 0, f[u] = g ? n : 0, p || (a.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({
				position: "absolute"
			}), f[d] = g ? o : n + o), g && (s.css(u, 0), p || s.css(d, o + n)), s.animate(f, {
				duration: e.duration,
				easing: e.easing,
				queue: !1,
				complete: function() {
					"hide" === h && a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
				}
			})
		}, t.effects.effect.bounce = function(e, i) {
			var s, n, o, a = t(this),
				r = ["position", "top", "bottom", "left", "right", "height", "width"],
				h = t.effects.setMode(a, e.mode || "effect"),
				l = "hide" === h,
				c = "show" === h,
				u = e.direction || "up",
				d = e.distance,
				p = e.times || 5,
				f = 2 * p + (c || l ? 1 : 0),
				g = e.duration / f,
				m = e.easing,
				v = "up" === u || "down" === u ? "top" : "left",
				b = "up" === u || "left" === u,
				$ = a.queue(),
				y = $.length;
			for ((c || l) && r.push("opacity"), t.effects.save(a, r), a.show(), t.effects.createWrapper(a), d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && ((o = {
					opacity: 1
				})[v] = 0, a.css("opacity", 0).css(v, b ? -(2 * d) : 2 * d).animate(o, g, m)), l && (d /= Math.pow(2, p - 1)), (o = {})[v] = 0, s = 0; s < p; s++)(n = {})[v] = (b ? "-=" : "+=") + d, a.animate(n, g, m).animate(o, g, m), d = l ? 2 * d : d / 2;
			l && ((n = {
				opacity: 0
			})[v] = (b ? "-=" : "+=") + d, a.animate(n, g, m)), a.queue(function() {
				l && a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
			}), y > 1 && $.splice.apply($, [1, 0].concat($.splice(y, f + 1))), a.dequeue()
		}, t.effects.effect.clip = function(e, i) {
			var s, n, o, a = t(this),
				r = ["position", "top", "bottom", "left", "right", "height", "width"],
				h = "show" === t.effects.setMode(a, e.mode || "hide"),
				l = "vertical" === (e.direction || "vertical"),
				c = l ? "height" : "width",
				u = l ? "top" : "left",
				d = {};
			t.effects.save(a, r), a.show(), s = t.effects.createWrapper(a).css({
				overflow: "hidden"
			}), o = (n = "IMG" === a[0].tagName ? s : a)[c](), h && (n.css(c, 0), n.css(u, o / 2)), d[c] = h ? o : 0, d[u] = h ? 0 : o / 2, n.animate(d, {
				queue: !1,
				duration: e.duration,
				easing: e.easing,
				complete: function() {
					h || a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
				}
			})
		}, t.effects.effect.drop = function(e, i) {
			var s, n = t(this),
				o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
				a = t.effects.setMode(n, e.mode || "hide"),
				r = "show" === a,
				h = e.direction || "left",
				l = "up" === h || "down" === h ? "top" : "left",
				c = "up" === h || "left" === h ? "pos" : "neg",
				u = {
					opacity: r ? 1 : 0
				};
			t.effects.save(n, o), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === c ? -s : s), u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
				queue: !1,
				duration: e.duration,
				easing: e.easing,
				complete: function() {
					"hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
				}
			})
		}, t.effects.effect.explode = function(e, i) {
			var s, n, o, a, r, h, l = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
				c = l,
				u = t(this),
				d = "show" === t.effects.setMode(u, e.mode || "hide"),
				p = u.show().css("visibility", "hidden").offset(),
				f = Math.ceil(u.outerWidth() / c),
				g = Math.ceil(u.outerHeight() / l),
				m = [];

			function v() {
				m.push(this), m.length === l * c && (u.css({
					visibility: "visible"
				}), t(m).remove(), d || u.hide(), i())
			}
			for (s = 0; s < l; s++)
				for (n = 0, a = p.top + s * g, h = s - (l - 1) / 2; n < c; n++) o = p.left + n * f, r = n - (c - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({
					position: "absolute",
					visibility: "visible",
					left: -n * f,
					top: -s * g
				}).parent().addClass("ui-effects-explode").css({
					position: "absolute",
					overflow: "hidden",
					width: f,
					height: g,
					left: o + (d ? r * f : 0),
					top: a + (d ? h * g : 0),
					opacity: d ? 0 : 1
				}).animate({
					left: o + (d ? 0 : r * f),
					top: a + (d ? 0 : h * g),
					opacity: d ? 1 : 0
				}, e.duration || 500, e.easing, v)
		}, t.effects.effect.fade = function(e, i) {
			var s = t(this),
				n = t.effects.setMode(s, e.mode || "toggle");
			s.animate({
				opacity: n
			}, {
				queue: !1,
				duration: e.duration,
				easing: e.easing,
				complete: i
			})
		}, t.effects.effect.fold = function(e, i) {
			var s, n, o = t(this),
				a = ["position", "top", "bottom", "left", "right", "height", "width"],
				r = t.effects.setMode(o, e.mode || "hide"),
				h = "show" === r,
				l = "hide" === r,
				c = e.size || 15,
				u = /([0-9]+)%/.exec(c),
				d = !!e.horizFirst,
				p = h !== d,
				f = p ? ["width", "height"] : ["height", "width"],
				g = e.duration / 2,
				m = {},
				v = {};
			t.effects.save(o, a), o.show(), s = t.effects.createWrapper(o).css({
				overflow: "hidden"
			}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(d ? {
				height: 0,
				width: c
			} : {
				height: c,
				width: 0
			}), m[f[0]] = h ? n[0] : c, v[f[1]] = h ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function() {
				l && o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), i()
			})
		}, t.effects.effect.highlight = function(e, i) {
			var s = t(this),
				n = ["backgroundImage", "backgroundColor", "opacity"],
				o = t.effects.setMode(s, e.mode || "show"),
				a = {
					backgroundColor: s.css("backgroundColor")
				};
			"hide" === o && (a.opacity = 0), t.effects.save(s, n), s.show().css({
				backgroundImage: "none",
				backgroundColor: e.color || "#ffff99"
			}).animate(a, {
				queue: !1,
				duration: e.duration,
				easing: e.easing,
				complete: function() {
					"hide" === o && s.hide(), t.effects.restore(s, n), i()
				}
			})
		}, t.effects.effect.size = function(e, i) {
			var s, n, o, a = t(this),
				r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
				h = ["width", "height", "overflow"],
				l = ["fontSize"],
				c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
				u = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
				d = t.effects.setMode(a, e.mode || "effect"),
				p = e.restore || "effect" !== d,
				f = e.scale || "both",
				g = e.origin || ["middle", "center"],
				m = a.css("position"),
				v = p ? r : ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
				b = {
					height: 0,
					width: 0,
					outerHeight: 0,
					outerWidth: 0
				};
			"show" === d && a.show(), s = {
				height: a.height(),
				width: a.width(),
				outerHeight: a.outerHeight(),
				outerWidth: a.outerWidth()
			}, "toggle" === e.mode && "show" === d ? (a.from = e.to || b, a.to = e.from || s) : (a.from = e.from || ("show" === d ? b : s), a.to = e.to || ("hide" === d ? b : s)), o = {
				from: {
					y: a.from.height / s.height,
					x: a.from.width / s.width
				},
				to: {
					y: a.to.height / s.height,
					x: a.to.width / s.width
				}
			}, ("box" === f || "both" === f) && (o.from.y !== o.to.y && (v = v.concat(c), a.from = t.effects.setTransition(a, c, o.from.y, a.from), a.to = t.effects.setTransition(a, c, o.to.y, a.to)), o.from.x !== o.to.x && (v = v.concat(u), a.from = t.effects.setTransition(a, u, o.from.x, a.from), a.to = t.effects.setTransition(a, u, o.to.x, a.to))), ("content" === f || "both" === f) && o.from.y !== o.to.y && (v = v.concat(l).concat(h), a.from = t.effects.setTransition(a, l, o.from.y, a.from), a.to = t.effects.setTransition(a, l, o.to.y, a.to)), t.effects.save(a, v), a.show(), t.effects.createWrapper(a), a.css("overflow", "hidden").css(a.from), g && (n = t.effects.getBaseline(g, s), a.from.top = (s.outerHeight - a.outerHeight()) * n.y, a.from.left = (s.outerWidth - a.outerWidth()) * n.x, a.to.top = (s.outerHeight - a.to.outerHeight) * n.y, a.to.left = (s.outerWidth - a.to.outerWidth) * n.x), a.css(a.from), ("content" === f || "both" === f) && (c = c.concat(["marginTop", "marginBottom"]).concat(l), u = u.concat(["marginLeft", "marginRight"]), h = r.concat(c).concat(u), a.find("*[width]").each(function() {
				var i = t(this),
					s = {
						height: i.height(),
						width: i.width(),
						outerHeight: i.outerHeight(),
						outerWidth: i.outerWidth()
					};
				p && t.effects.save(i, h), i.from = {
					height: s.height * o.from.y,
					width: s.width * o.from.x,
					outerHeight: s.outerHeight * o.from.y,
					outerWidth: s.outerWidth * o.from.x
				}, i.to = {
					height: s.height * o.to.y,
					width: s.width * o.to.x,
					outerHeight: s.height * o.to.y,
					outerWidth: s.width * o.to.x
				}, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, c, o.from.y, i.from), i.to = t.effects.setTransition(i, c, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, u, o.from.x, i.from), i.to = t.effects.setTransition(i, u, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
					p && t.effects.restore(i, h)
				})
			})), a.animate(a.to, {
				queue: !1,
				duration: e.duration,
				easing: e.easing,
				complete: function() {
					0 === a.to.opacity && a.css("opacity", a.from.opacity), "hide" === d && a.hide(), t.effects.restore(a, v), p || ("static" === m ? a.css({
						position: "relative",
						top: a.to.top,
						left: a.to.left
					}) : t.each(["top", "left"], function(t, e) {
						a.css(e, function(e, i) {
							var s = parseInt(i, 10),
								n = t ? a.to.left : a.to.top;
							return "auto" === i ? n + "px" : s + n + "px"
						})
					})), t.effects.removeWrapper(a), i()
				}
			})
		}, t.effects.effect.scale = function(e, i) {
			var s = t(this),
				n = t.extend(!0, {}, e),
				o = t.effects.setMode(s, e.mode || "effect"),
				a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
				r = e.direction || "both",
				h = e.origin,
				l = {
					height: s.height(),
					width: s.width(),
					outerHeight: s.outerHeight(),
					outerWidth: s.outerWidth()
				},
				c = {
					y: "horizontal" !== r ? a / 100 : 1,
					x: "vertical" !== r ? a / 100 : 1
				};
			n.effect = "size", n.queue = !1, n.complete = i, "effect" !== o && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === o ? {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			} : l), n.to = {
				height: l.height * c.y,
				width: l.width * c.x,
				outerHeight: l.outerHeight * c.y,
				outerWidth: l.outerWidth * c.x
			}, n.fade && ("show" === o && (n.from.opacity = 0, n.to.opacity = 1), "hide" === o && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
		}, t.effects.effect.puff = function(e, i) {
			var s = t(this),
				n = t.effects.setMode(s, e.mode || "hide"),
				o = "hide" === n,
				a = parseInt(e.percent, 10) || 150,
				r = a / 100,
				h = {
					height: s.height(),
					width: s.width(),
					outerHeight: s.outerHeight(),
					outerWidth: s.outerWidth()
				};
			t.extend(e, {
				effect: "scale",
				queue: !1,
				fade: !0,
				mode: n,
				complete: i,
				percent: o ? a : 100,
				from: o ? h : {
					height: h.height * r,
					width: h.width * r,
					outerHeight: h.outerHeight * r,
					outerWidth: h.outerWidth * r
				}
			}), s.effect(e)
		}, t.effects.effect.pulsate = function(e, i) {
			var s, n = t(this),
				o = t.effects.setMode(n, e.mode || "show"),
				a = "show" === o,
				r = "hide" === o,
				h = 2 * (e.times || 5) + (a || "hide" === o ? 1 : 0),
				l = e.duration / h,
				c = 0,
				u = n.queue(),
				d = u.length;
			for ((a || !n.is(":visible")) && (n.css("opacity", 0).show(), c = 1), s = 1; s < h; s++) n.animate({
				opacity: c
			}, l, e.easing), c = 1 - c;
			n.animate({
				opacity: c
			}, l, e.easing), n.queue(function() {
				r && n.hide(), i()
			}), d > 1 && u.splice.apply(u, [1, 0].concat(u.splice(d, h + 1))), n.dequeue()
		}, t.effects.effect.shake = function(e, i) {
			var s, n = t(this),
				o = ["position", "top", "bottom", "left", "right", "height", "width"],
				a = t.effects.setMode(n, e.mode || "effect"),
				r = e.direction || "left",
				h = e.distance || 20,
				l = e.times || 3,
				c = 2 * l + 1,
				u = Math.round(e.duration / c),
				d = "up" === r || "down" === r ? "top" : "left",
				p = "up" === r || "left" === r,
				f = {},
				g = {},
				m = {},
				v = n.queue(),
				b = v.length;
			for (t.effects.save(n, o), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + h, g[d] = (p ? "+=" : "-=") + 2 * h, m[d] = (p ? "-=" : "+=") + 2 * h, n.animate(f, u, e.easing), s = 1; s < l; s++) n.animate(g, u, e.easing).animate(m, u, e.easing);
			n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
				"hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
			}), b > 1 && v.splice.apply(v, [1, 0].concat(v.splice(b, c + 1))), n.dequeue()
		}, t.effects.effect.slide = function(e, i) {
			var s, n = t(this),
				o = ["position", "top", "bottom", "left", "right", "width", "height"],
				a = t.effects.setMode(n, e.mode || "show"),
				r = "show" === a,
				h = e.direction || "left",
				l = "up" === h || "down" === h ? "top" : "left",
				c = "up" === h || "left" === h,
				u = {};
			t.effects.save(n, o), n.show(), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
				overflow: "hidden"
			}), r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s), u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
				queue: !1,
				duration: e.duration,
				easing: e.easing,
				complete: function() {
					"hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
				}
			})
		}, t.effects.effect.transfer = function(e, i) {
			var s = t(this),
				n = t(e.to),
				o = "fixed" === n.css("position"),
				a = t("body"),
				r = o ? a.scrollTop() : 0,
				h = o ? a.scrollLeft() : 0,
				l = n.offset(),
				c = {
					top: l.top - r,
					left: l.left - h,
					height: n.innerHeight(),
					width: n.innerWidth()
				},
				u = s.offset(),
				d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
					top: u.top - r,
					left: u.left - h,
					height: s.innerHeight(),
					width: s.innerWidth(),
					position: o ? "fixed" : "absolute"
				}).animate(c, e.duration, e.easing, function() {
					d.remove(), i()
				})
		}
});
! function(e) {
	jQuery.ptTimeSelect = {}, jQuery.ptTimeSelect.version = "__BUILD_VERSION_NUMBER__", jQuery.ptTimeSelect.options = {
		containerClass: void 0,
		containerWidth: "22em",
		hoursLabel: "Hour",
		minutesLabel: "Minutes",
		setButtonLabel: "Set",
		popupImage: void 0,
		onFocusDisplay: !0,
		zIndex: 10,
		onBeforeShow: void 0,
		onClose: void 0
	}, jQuery.ptTimeSelect._ptTimeSelectInit = void jQuery(document).ready(function() {
		if (!jQuery("#ptTimeSelectCntr").length) {
			jQuery("body").append('<div id="ptTimeSelectCntr" class="">        <div class="ui-widget ui-widget-content ui-corner-all">        <div class="ui-widget-header ui-corner-all">            <div id="ptTimeSelectCloseCntr" style="float: right;">                <a href="javascript: void(0);" onclick="jQuery.ptTimeSelect.closeCntr();"                         onmouseover="jQuery(this).removeClass(\'ui-state-default\').addClass(\'ui-state-hover\');"                         onmouseout="jQuery(this).removeClass(\'ui-state-hover\').addClass(\'ui-state-default\');"                        class="ui-corner-all ui-state-default">                    <span class="ui-icon ui-icon-circle-close">X</span>                </a>            </div>            <div id="ptTimeSelectUserTime" style="float: left;">                <span id="ptTimeSelectUserSelHr">1</span> :                 <span id="ptTimeSelectUserSelMin">00</span>                 <span id="ptTimeSelectUserSelAmPm">AM</span>            </div>            <br style="clear: both;" /><div></div>        </div>        <div class="ui-widget-content ui-corner-all">            <div>                <div class="ptTimeSelectTimeLabelsCntr">                    <div class="ptTimeSelectLeftPane" style="width: 50%; text-align: center; float: left;" class="">Hour</div>                    <div class="ptTimeSelectRightPane" style="width: 50%; text-align: center; float: left;">Minutes</div>                </div>                <div>                    <div style="float: left; width: 50%;">                        <div class="ui-widget-content ptTimeSelectLeftPane">                            <div class="ptTimeSelectHrAmPmCntr">                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);"                                         style="display: block; width: 45%; float: left;">AM</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);"                                         style="display: block; width: 45%; float: left;">PM</a>                                <br style="clear: left;" /><div></div>                            </div>                            <div class="ptTimeSelectHrCntr">                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">1</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">2</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">3</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">4</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">5</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">6</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">7</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">8</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">9</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">10</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">11</a>                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">12</a>                                <br style="clear: left;" /><div></div>                            </div>                        </div>                    </div>                    <div style="width: 50%; float: left;">                        <div class="ui-widget-content ptTimeSelectRightPane">                            <div class="ptTimeSelectMinCntr">                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">00</a>                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">05</a>                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">10</a>                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">15</a>                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">20</a>                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">25</a>                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">30</a>                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">35</a>                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">40</a>                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">45</a>                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">50</a>                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">55</a>                                <br style="clear: left;" /><div></div>                            </div>                        </div>                    </div>                </div>            </div>            <div style="clear: left;"></div>        </div>        <div id="ptTimeSelectSetButton">            <a href="javascript: void(0);" onclick="jQuery.ptTimeSelect.setTime()"                    onmouseover="jQuery(this).removeClass(\'ui-state-default\').addClass(\'ui-state-hover\');"                         onmouseout="jQuery(this).removeClass(\'ui-state-hover\').addClass(\'ui-state-default\');"                        class="ui-corner-all ui-state-default">                SET            </a>            <br style="clear: both;" /><div></div>        </div>        <!--[if lte IE 6.5]>            <iframe style="display:block; position:absolute;top: 0;left:0;z-index:-1;                filter:Alpha(Opacity=\'0\');width:3000px;height:3000px"></iframe>        <![endif]-->    </div></div>');
			var t = jQuery("#ptTimeSelectCntr");
			t.find(".ptTimeSelectMin").bind("click", function() {
				jQuery.ptTimeSelect.setMin(e(this).text())
			}), t.find(".ptTimeSelectHr").bind("click", function() {
				jQuery.ptTimeSelect.setHr(e(this).text())
			}), e(document).mousedown(jQuery.ptTimeSelect._doCheckMouseClick)
		}
	}), jQuery.ptTimeSelect.setHr = function(e) {
		"am" == e.toLowerCase() || "pm" == e.toLowerCase() ? jQuery("#ptTimeSelectUserSelAmPm").empty().append(e) : jQuery("#ptTimeSelectUserSelHr").empty().append(e)
	}, jQuery.ptTimeSelect.setMin = function(e) {
		jQuery("#ptTimeSelectUserSelMin").empty().append(e)
	}, jQuery.ptTimeSelect.setTime = function() {
		var e = jQuery("#ptTimeSelectUserSelHr").text() + ":" + jQuery("#ptTimeSelectUserSelMin").text() + " " + jQuery("#ptTimeSelectUserSelAmPm").text(),
			t = jQuery(".isPtTimeSelectActive");
		"time" == t.attr("type") ? t.val(jQuery.ptTimeSelect.convertFromAMPM(e)) : t.val(e), t.trigger("change"), this.closeCntr()
	}, jQuery.ptTimeSelect.convertFrom24 = function(e) {
		return (e = e.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [e]).length > 1 && ((e = e.slice(1))[5] = 12 > +e[0] ? " AM" : " PM", e[0] = +e[0] % 12 || 12), e.join("")
	}, jQuery.ptTimeSelect.convertFromAMPM = function(e) {
		var t = Number(e.match(/^(\d+)/)[1]),
			i = Number(e.match(/:(\d+)/)[1]),
			a = e.match(/\s(.*)$/)[1];
		"PM" == a && t < 12 && (t += 12), "AM" == a && 12 == t && (t -= 12);
		var s = t.toString(),
			l = i.toString();
		return t < 10 && (s = "0" + s), i < 10 && (l = "0" + l), s + ":" + l
	}, jQuery.ptTimeSelect.openCntr = function(e) {
		jQuery.ptTimeSelect.closeCntr(), jQuery(".isPtTimeSelectActive").removeClass("isPtTimeSelectActive");
		var t = jQuery("#ptTimeSelectCntr"),
			i = jQuery(e).eq(0).addClass("isPtTimeSelectActive"),
			a = i.data("ptTimeSelectOptions"),
			s = i.offset(),
			l = "";
		s["z-index"] = a.zIndex, s.top = s.top + i.outerHeight(), a.containerWidth && (s.width = a.containerWidth), a.containerClass && t.addClass(a.containerClass), t.css(s);
		var c = 1,
			r = "00",
			n = "AM";
		if (l = "time" == i.attr("type") ? jQuery.ptTimeSelect.convertFrom24(i.val()) : i.val()) {
			var d = /([0-9]{1,2}).*:.*([0-9]{2}).*(PM|AM)/i.exec(l);
			d && (c = d[1] || 1, r = d[2] || "00", n = d[3] || "AM")
		}
		t.find("#ptTimeSelectUserSelHr").empty().append(c), t.find("#ptTimeSelectUserSelMin").empty().append(r), t.find("#ptTimeSelectUserSelAmPm").empty().append(n), t.find(".ptTimeSelectTimeLabelsCntr .ptTimeSelectLeftPane").empty().append(a.hoursLabel), t.find(".ptTimeSelectTimeLabelsCntr .ptTimeSelectRightPane").empty().append(a.minutesLabel), t.find("#ptTimeSelectSetButton a").empty().append(a.setButtonLabel), a.onBeforeShow && a.onBeforeShow(i, t), t.slideDown("fast")
	}, jQuery.ptTimeSelect.closeCntr = function(t) {
		var i = e("#ptTimeSelectCntr");
		if (!0 == i.is(":visible")) {
			if (!1 == jQuery.support.tbody && !(i[0].offsetWidth > 0) && !(i[0].offsetHeight > 0)) return;
			if (jQuery("#ptTimeSelectCntr").css("display", "none").removeClass().css("width", ""), t || (t = e(".isPtTimeSelectActive")), t) {
				var a = t.removeClass("isPtTimeSelectActive").data("ptTimeSelectOptions");
				a && a.onClose && a.onClose(t)
			}
		}
	}, jQuery.ptTimeSelect._doCheckMouseClick = function(t) {
		e("#ptTimeSelectCntr:visible").length && !jQuery(t.target).closest("#ptTimeSelectCntr").length && jQuery(t.target).not("input.isPtTimeSelectActive").length && jQuery.ptTimeSelect.closeCntr()
	}, jQuery.fn.ptTimeSelect = function(t) {
		return this.each(function() {
			if ("input" == this.nodeName.toLowerCase()) {
				var i = jQuery(this);
				if (i.hasClass("hasPtTimeSelect")) return this;
				var a = {};
				if (a = e.extend(a, jQuery.ptTimeSelect.options, t), i.addClass("hasPtTimeSelect").data("ptTimeSelectOptions", a), a.popupImage || !a.onFocusDisplay) {
					var s = jQuery('<span>&nbsp;</span><a href="javascript:" onclick="jQuery.ptTimeSelect.openCntr(jQuery(this).data(\'ptTimeSelectEle\'));">' + a.popupImage + "</a>").data("ptTimeSelectEle", i);
					i.after(s)
				}
				return a.onFocusDisplay && i.focus(function() {
					jQuery.ptTimeSelect.openCntr(this)
				}), this
			}
		})
	}
}(jQuery);
$.fn.circleType = function(t) {
	var e = {
		dir: 1,
		position: "relative"
	};
	if ("function" != typeof $.fn.lettering) {
		console.log("Lettering.js is required");
		return
	}
	return this.each(function() {
		t && $.extend(e, t);
		var i, n, r = this,
			o = 180 / Math.PI,
			f = parseInt($(r).css("line-height"), 10),
			s = parseInt($(r).css("font-size"), 10),
			a = r.innerHTML.replace(/^\s+|\s+$/g, "").replace(/\s/g, "&nbsp;");
		r.innerHTML = a, $(r).lettering(), r.style.position = e.position, n = Math.floor((i = r.getElementsByTagName("span")).length / 2);
		var l = function() {
				var t, n, a, l, g, h, u, p, c = 0,
					m = 0;
				for (t = 0; t < i.length; t++) c += i[t].offsetWidth;
				for (n = c / Math.PI / 2 + f, e.fluid && !e.fitText ? e.radius = Math.max(r.offsetWidth / 2, n) : e.radius || (e.radius = n), a = -1 === e.dir ? "center " + (-e.radius + f) / s + "em" : "center " + e.radius / s + "em", l = e.radius - f, t = 0; t < i.length; t++) m += (g = i[t]).offsetWidth / 2 / l * o, g.rot = m, m += g.offsetWidth / 2 / l * o;
				for (t = 0; t < i.length; t++) h = (g = i[t]).style, p = "rotate(" + (u = -m * e.dir / 2 + g.rot * e.dir) + "deg)", h.position = "absolute", h.left = "50%", h.marginLeft = -(g.offsetWidth / 2) / s + "em", h.webkitTransform = p, h.MozTransform = p, h.OTransform = p, h.msTransform = p, h.transform = p, h.webkitTransformOrigin = a, h.MozTransformOrigin = a, h.OTransformOrigin = a, h.msTransformOrigin = a, h.transformOrigin = a, -1 === e.dir && (h.bottom = 0);
				e.fitText && ("function" != typeof $.fn.fitText ? console.log("FitText.js is required when using the fitText option") : ($(r).fitText(), $(window).resize(function() {
					d()
				}))), d()
			},
			g = function(t) {
				var e = document.documentElement,
					i = t.getBoundingClientRect();
				return {
					top: i.top + window.pageYOffset - e.clientTop,
					left: i.left + window.pageXOffset - e.clientLeft,
					height: i.height
				}
			},
			d = function() {
				var t, e = g(i[n]),
					o = g(i[0]);
				t = e.top < o.top ? o.top - e.top + o.height : e.top - o.top + o.height, r.style.height = t + "px"
			};
		e.fluid && !e.fitText && $(window).resize(function() {
			l()
		}), "complete" !== document.readyState ? (r.style.visibility = "hidden", $(window).load(function() {
			r.style.visibility = "visible", l()
		})) : l()
	})
};

(function($) {
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter),
			inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after
			});
			t.empty().append(inject)
		}
	}
	var methods = {
		init: function() {
			return this.each(function() {
				injector($(this), '', 'char', '')
			})
		},
		words: function() {
			return this.each(function() {
				injector($(this), ' ', 'word', ' ')
			})
		},
		lines: function() {
			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '')
			})
		}
	};
	$.fn.lettering = function(method) {
		if (method && methods[method]) {
			return methods[method].apply(this, [].slice.call(arguments, 1))
		} else if (method === 'letters' || !method) {
			return methods.init.apply(this, [].slice.call(arguments, 0))
		}
		$.error('Method ' + method + ' does not exist on jQuery.lettering');
		return this
	}
})(jQuery);
! function(e) {
	"use strict";
	if (e(".quantity-spinner").length && e("input.quantity-spinner").TouchSpin({
			verticalbuttons: !0
		}), e(".listing-details__contact-info-phone").length && e(".listing-details__contact-info-phone").on("click", function(t) {
			t.preventDefault();
			var n = e(this).find(".text h5"),
				a = n.data("number"),
				i = n.data("toggle-number");
			n.text() == a ? n.text(i) : n.text(a)
		}), e(".listing-top__map-show-hide").length && e(".listing-top__map-show-hide").on("click", function() {
			e(this).toggleClass("hidden");
			var t = e(this).find(".listing-top__map-show-hide-text span");
			t.text() == t.data("text") ? t.text(t.data("toggle-text")) : t.text(t.data("text")), e(".listing__map").toggleClass("hidden"), e(".listing__content").toggleClass("hidden")
		}), e("#datepicker").length && e("#datepicker").datepicker(), e("#datepicker2").length && e("#datepicker2").datepicker(), e("#datepicker-inline").length && e("#datepicker-inline").datepicker(), e('input[name="time"]').ptTimeSelect(), e(".banner-bg-slide").length && e(".banner-bg-slide").each(function() {
			var t = e(this),
				n = t.data("options");
			t.vegas(n)
		}), e(".pricing-tabs").length && e(".pricing-tabs .tab-btns .tab-btn").on("click", function(t) {
			t.preventDefault();
			var n = e(e(this).attr("data-tab"));
			if (e(n).hasClass("actve-tab")) return !1;
			e(".pricing-tabs .tab-btns .tab-btn").removeClass("active-btn"), e(this).addClass("active-btn"), e(".pricing-tabs .pr-content .pr-tab").removeClass("active-tab"), e(n).addClass("active-tab")
		}), e(".typed-effect").length && e(".typed-effect").each(function() {
			var t = e(this).data("strings"),
				n = e(this).attr("id");
			new Typed("#" + n, {
				typeSpeed: 100,
				backSpeed: 100,
				fadeOut: !0,
				loop: !0,
				strings: t.split(",")
			})
		}), e(".count-bar").length && e(".count-bar").appear(function() {
			var t = e(this),
				n = t.data("percent");
			e(t).css("width", n).addClass("counted")
		}, {
			accY: -50
		}), e(".progress-levels .progress-box .bar-fill").length && e(".progress-box .bar-fill").each(function() {
			e(".progress-box .bar-fill").appear(function() {
				var t = e(this).attr("data-percent");
				e(this).css("width", t + "%")
			})
		}, {
			accY: 0
		}), e(".count-box").length && e(".count-box").appear(function() {
			var t = e(this),
				n = t.find(".count-text").attr("data-stop"),
				a = parseInt(t.find(".count-text").attr("data-speed"), 10);
			t.hasClass("counted") || (t.addClass("counted"), e({
				countNum: t.find(".count-text").text()
			}).animate({
				countNum: n
			}, {
				duration: a,
				easing: "linear",
				step: function() {
					t.find(".count-text").text(Math.floor(this.countNum))
				},
				complete: function() {
					t.find(".count-text").text(this.countNum)
				}
			}))
		}, {
			accY: 0
		}), e(".accrodion-grp").length && e(".accrodion-grp").each(function() {
			var t = e(this).data("grp-name"),
				n = e(this),
				a = n.find(".accrodion");
			n.addClass(t), n.find(".accrodion .accrodion-content").hide(), n.find(".accrodion.active").find(".accrodion-content").show(), a.each(function() {
				e(this).find(".accrodion-title").on("click", function() {
					!1 === e(this).parent().hasClass("active") && (e(".accrodion-grp." + t).find(".accrodion").removeClass("active"), e(".accrodion-grp." + t).find(".accrodion").find(".accrodion-content").slideUp(), e(this).parent().addClass("active"), e(this).parent().find(".accrodion-content").slideDown())
				})
			})
		}), e(".scroll-to-target").length && e(".scroll-to-target").on("click", function() {
			var t = e(this).attr("data-target");
			return e("html, body").animate({
				scrollTop: e(t).offset().top
			}, 1e3), !1
		}), e(".contact-form-validated").length && e(".contact-form-validated").each(function() {
			e(this).validate({
				rules: {
					name: {
						required: !0
					},
					email: {
						required: !0,
						email: !0
					},
					message: {
						required: !0
					},
					subject: {
						required: !0
					}
				},
				submitHandler: function(t) {
					return e.post(e(t).attr("action"), e(t).serialize(), function(n) {
						e(t).parent().find(".result").append(n), e(t).find('input[type="text"]').val(""), e(t).find('input[type="email"]').val(""), e(t).find("textarea").val("")
					}), !1
				}
			})
		}), e(".mc-form").length && e(".mc-form").each(function() {
			var t = e(this),
				n = t.data("url"),
				a = t.parent().find(".mc-form__response");
			t.ajaxChimp({
				url: n,
				callback: function(e) {
					a.append(function() {
						return '<p class="mc-message">' + e.msg + "</p>"
					}), "success" === e.result && (t.removeClass("errored").addClass("successed"), a.removeClass("errored").addClass("successed"), t.find("input").val(""), a.find("p").fadeOut(1e4)), "error" === e.result && (t.removeClass("successed").addClass("errored"), a.removeClass("successed").addClass("errored"), t.find("input").val(""), a.find("p").fadeOut(1e4))
				}
			})
		}), e(".video-popup").length && e(".video-popup").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: !0,
			fixedContentPos: !1
		}), e(".img-popup").length) {
		var t, n = {};
		e(".img-popup").each(function() {
			var t = parseInt(e(this).attr("data-group"), 10);
			n[t] || (n[t] = []), n[t].push(this)
		}), e.each(n, function() {
			e(this).magnificPopup({
				type: "image",
				closeOnContentClick: !0,
				closeBtnInside: !1,
				gallery: {
					enabled: !0
				}
			})
		})
	}

	function a(t) {
		let n = window.location.href.split("/").reverse()[0];
		t.find("li").each(function() {
			let t = e(this).find("a");
			e(t).attr("href") == n && e(this).addClass("current")
		}), t.children("li").each(function() {
			e(this).find(".current").length && e(this).addClass("current")
		}), "" == n && t.find("li").eq(0).addClass("current")
	}
	if (e(".main-menu__list").length) {
		let i;
		a(e(".main-menu__list"))
	}
	if (e(".service-details__sidebar-service-list").length) {
		let r;
		a(e(".service-details__sidebar-service-list"))
	}
	if (e(".main-menu__list").length && e(".mobile-nav__container").length) {
		let l = document.querySelector(".main-menu__list").outerHTML;
		document.querySelector(".mobile-nav__container").innerHTML = l
	}
	if (e(".sticky-header__content").length) {
		let o = document.querySelector(".main-menu").innerHTML;
		document.querySelector(".sticky-header__content").innerHTML = o
	}
	if (e(".mobile-nav__container .main-menu__list").length && e(".mobile-nav__container .main-menu__list .dropdown > a").each(function() {
			let t = e(this),
				n = document.createElement("BUTTON");
			n.setAttribute("aria-label", "dropdown toggler"), n.innerHTML = "<i class='fa fa-angle-down'></i>", t.append(function() {
				return n
			}), t.find("button").on("click", function(t) {
				t.preventDefault();
				let n = e(this);
				n.toggleClass("expanded"), n.parent().toggleClass("expanded"), n.parent().parent().children("ul").slideToggle()
			})
		}), e(".mobile-nav__toggler").length && e(".mobile-nav__toggler").on("click", function(t) {
			t.preventDefault(), e(".mobile-nav__wrapper").toggleClass("expanded"), e("body").toggleClass("locked")
		}), e(".search-toggler").length && e(".search-toggler").on("click", function(t) {
			t.preventDefault(), e(".search-popup").toggleClass("active"), e(".mobile-nav__wrapper").removeClass("expanded"), e("body").toggleClass("locked")
		}), e(".odometer").length && e(".odometer").each(function() {
			e(this).appear(function() {
				var t = e(this).attr("data-count");
				e(this).html(t)
			})
		}), e(".dynamic-year").length) {
		let s = new Date;
		e(".dynamic-year").html(s.getFullYear())
	}
	if (e(".wow").length && new WOW({
			boxClass: "wow",
			animateClass: "animated",
			mobile: !0,
			live: !0
		}).init(), e("#donate-amount__predefined").length) {
		let c = e("#donate-amount");
		e("#donate-amount__predefined").find("li").on("click", function(t) {
			t.preventDefault();
			let n = e(this).find("a").text();
			c.val(n), e("#donate-amount__predefined").find("li").removeClass("active"), e(this).addClass("active")
		})
	}
	if (e(".thm-accordion").length && e(".thm-accordion").each(function() {
			let t = e(this),
				n = t.attr("id"),
				a = t.find(".thm-accordion__title");
			t.addClass(n);
			let i = t.find(".thm-accordion__content").hide();
			t.find(".active-item .thm-accordion__content").show(), a.on("click", function(t) {
				t.preventDefault(), e(this);
				let a = e(this).parent();
				!1 === a.hasClass("active-item") && (e("#" + n).find(".thm-accordion__item").removeClass("active-item"), a.addClass("active-item"), i.slideUp(), a.find(".thm-accordion__content").slideDown())
			})
		}), e(".add").on("click", function() {
			999 > e(this).prev().val() && e(this).prev().val(+e(this).prev().val() + 1)
		}), e(".sub").on("click", function() {
			e(this).next().val() > 1 && e(this).next().val() > 1 && e(this).next().val(+e(this).next().val() - 1)
		}), e(".tabs-box").length && e(".tabs-box .tab-buttons .tab-btn").on("click", function(t) {
			t.preventDefault();
			var n = e(e(this).attr("data-tab"));
			if (e(n).is(":visible")) return !1;
			n.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn"), e(this).addClass("active-btn"), n.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0), n.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab"), e(n).fadeIn(300), e(n).addClass("active-tab")
		}), e(".range-slider-price").length) {
		var d = document.getElementById("range-slider-price");
		noUiSlider.create(d, {
			start: [30, 150],
			limit: 200,
			behaviour: "drag",
			connect: !0,
			range: {
				min: 10,
				max: 200
			}
		});
		var p = document.getElementById("min-value-rangeslider"),
			u = document.getElementById("max-value-rangeslider");
		d.noUiSlider.on("update", function(t, n) {
			(n ? e(u) : e(p)).text(t[n])
		})
	}

	function h() {
		let e = document.querySelectorAll(".thm-tiny__slider");
		e.forEach(function(e) {
			let t = JSON.parse(e.dataset.tinyOptions);
			tns(t)
		})
	}
	if (e("#testimonial-two__thumb").length) {
		let f = new Swiper("#testimonial-two__thumb", {
			slidesPerView: 5,
			spaceBetween: 40,
			speed: 1400,
			watchSlidesVisibility: !0,
			watchSlidesProgress: !0,
			loop: !0,
			autoplay: {
				delay: 5e3
			}
		});
		new Swiper("#testimonial-two__carousel", {
			observer: !0,
			observeParents: !0,
			loop: !0,
			speed: 1400,
			mousewheel: !1,
			slidesPerView: 1,
			spaceBetween: 72,
			autoplay: {
				delay: 5e3
			},
			thumbs: {
				swiper: f
			},
			pagination: {
				el: "#testimonials-one__carousel-pagination",
				type: "bullets",
				clickable: !0
			},
			navigation: {
				nextEl: "#project-one__swiper-button-next",
				prevEl: "#project-one__swiper-button-prev"
			}
		})
	}
	if (e("#testimonial-three__thumb").length) {
		let m = new Swiper("#testimonial-three__thumb", {
			slidesPerView: 3,
			spaceBetween: 10,
			speed: 1400,
			watchSlidesVisibility: !0,
			watchSlidesProgress: !0,
			loop: !0,
			autoplay: {
				delay: 5e3
			}
		});
		new Swiper("#testimonial-three__carousel", {
			observer: !0,
			observeParents: !0,
			loop: !0,
			speed: 1400,
			mousewheel: !1,
			slidesPerView: 1,
			spaceBetween: 72,
			autoplay: {
				delay: 5e3
			},
			thumbs: {
				swiper: m
			},
			pagination: {
				el: "#testimonials-one__carousel-pagination",
				type: "bullets",
				clickable: !0
			},
			navigation: {
				nextEl: "#project-one__swiper-button-next",
				prevEl: "#project-one__swiper-button-prev"
			}
		})
	}
	e(".checkout__payment__title").length && (e(".checkout__payment__item").find(".checkout__payment__content").hide(), e(".checkout__payment__item--active").find(".checkout__payment__content").show(), e(".checkout__payment__title").on("click", function(t) {
		t.preventDefault(), e(this).parents(".checkout__payment").find(".checkout__payment__item").removeClass("checkout__payment__item--active"), e(this).parents(".checkout__payment").find(".checkout__payment__content").slideUp(), e(this).parent().addClass("checkout__payment__item--active"), e(this).parent().find(".checkout__payment__content").slideDown()
	})), e(".single-vertical-carousel").length && e(".single-vertical-carousel").slick({
		dots: !0,
		autoplay: !1,
		loop: !0,
		autoplaySpeed: 5e3,
		infinite: !0,
		responsive: !0,
		slidesToShow: 2,
		vertical: !0,
		slidesToScroll: 1,
		prevArrow: "<div class='prev-btn'><span class='fa fa-angle-up'></span></div>",
		nextArrow: "<div class='next-btn'><span class='fa fa-angle-down'></span></div>"
	}), e(".circle-progress").length && e(".circle-progress").appear(function() {
		e(".circle-progress").each(function() {
			let t = e(this),
				n = t.data("options");
			t.circleProgress(n)
		})
	}), (t = e(".scrollToLink")).length && t.children("a").bind("click", function(n) {
		if (e(window).scrollTop() > 10) var a = "90";
		else var a = "90";
		var i = e(this);
		e("html, body").stop().animate({
			scrollTop: e(i.attr("href")).offset().top - a + "px"
		}, 1200, "easeInOutExpo"), t.removeClass("current"), t.removeClass("current-menu-ancestor"), t.removeClass("current_page_item"), t.removeClass("current-menu-parent"), i.parent().addClass("current"), n.preventDefault()
	}), e(window).on("load", function() {
		if (e(".preloader").length && e(".preloader").fadeOut(), e(".thm-swiper__slider").length && e(".thm-swiper__slider").each(function() {
				let t = e(this),
					n = t.data("swiper-options");
				new Swiper(t, n)
			}), e(".thm-owl__carousel").length && e(".thm-owl__carousel").each(function() {
				let t = e(this),
					n = t.data("owl-options");
				t.owlCarousel(n)
			}), e(".thm-owl__carousel--custom-nav").length && e(".thm-owl__carousel--custom-nav").each(function() {
				let t = e(this),
					n = t.data("owl-nav-prev"),
					a = t.data("owl-nav-next");
				e(n).on("click", function(e) {
					t.trigger("prev.owl.carousel"), e.preventDefault()
				}), e(a).on("click", function(e) {
					t.trigger("next.owl.carousel"), e.preventDefault()
				})
			}), e(".masonary-layout").length && e(".masonary-layout").isotope({
				layoutMode: "masonry"
			}), e(".post-filter").length && e(".post-filter li").children(".filter-text").on("click", function() {
				var t = e(this),
					n = t.parent().attr("data-filter");
				return e(".post-filter li").removeClass("active"), t.parent().addClass("active"), e(".filter-layout").isotope({
					filter: n,
					animationOptions: {
						duration: 500,
						easing: "linear",
						queue: !1
					}
				}), !1
			}), e(".post-filter.has-dynamic-filters-counter").length && e(".post-filter.has-dynamic-filters-counter").find("li").each(function() {
				var t = e(this).data("filter"),
					n = e(".filter-layout").find(t).length;
				e(this).children(".filter-text").append('<span class="count">' + n + "</span>")
			}), e(".price-ranger").length && (e(".price-ranger #slider-range").slider({
				range: !0,
				min: 50,
				max: 500,
				values: [11, 300],
				slide: function(t, n) {
					e(".price-ranger .ranger-min-max-block .min").val("$" + n.values[0]), e(".price-ranger .ranger-min-max-block .max").val("$" + n.values[1])
				}
			}), e(".price-ranger .ranger-min-max-block .min").val("$" + e(".price-ranger #slider-range").slider("values", 0)), e(".price-ranger .ranger-min-max-block .max").val("$" + e(".price-ranger #slider-range").slider("values", 1))), e(".curved-circle--item").length && e(".curved-circle--item").circleType(), e(".quantity-spinner").length && e("input.quantity-spinner").TouchSpin({
				verticalbuttons: !0
			}), e(".post-filter").length) {
			var t = e(".post-filter li");
			e(".filter-layout").isotope({
				filter: ".filter-item",
				animationOptions: {
					duration: 500,
					easing: "linear",
					queue: !1
				}
			}), t.on("click", function() {
				var n = e(this),
					a = n.attr("data-filter");
				return t.removeClass("active"), n.addClass("active"), e(".filter-layout").isotope({
					filter: a,
					animationOptions: {
						duration: 500,
						easing: "linear",
						queue: !1
					}
				}), !1
			})
		}
		if (e(".post-filter.has-dynamic-filter-counter").length && e(".post-filter.has-dynamic-filter-counter").find("li").each(function() {
				var t = e(this).data("filter"),
					n = e(".filter-layout").find(t).length;
				e(this).append("<sup>[" + n + "]</sup>")
			}), e(".listing-details__gallery .bxslider").length && e(".listing-details__gallery .bxslider").bxSlider({
				nextSelector: ".listing-details__gallery #slider-next",
				prevSelector: ".listing-details__gallery #slider-prev",
				nextText: '<i class="icon-right-arrow1"></i>',
				prevText: '<i class="icon-right-arrow1 icon-prev"></i>',
				mode: "horizontal",
				auto: "true",
				speed: "1000",
				pagerCustom: ".listing-details__gallery .slider-pager .listing-details__thumb-box"
			}), e("#testimonial-four__thumb").length) {
			let n = new Swiper("#testimonial-four__thumb", {
				slidesPerView: 3,
				spaceBetween: 0,
				speed: 1400,
				watchSlidesVisibility: !0,
				watchSlidesProgress: !0,
				loop: !0,
				autoplay: {
					delay: 5e3
				}
			});
			new Swiper("#testimonial-four__carousel", {
				observer: !0,
				observeParents: !0,
				loop: !0,
				speed: 1400,
				mousewheel: !0,
				slidesPerView: 1,
				autoplay: {
					delay: 5e3
				},
				thumbs: {
					swiper: n
				},
				pagination: {
					el: "#testimonials-one__carousel-pagination",
					type: "bullets",
					clickable: !0
				},
				navigation: {
					nextEl: "#testimonial-four__swiper-button-next",
					prevEl: "#testimonial-four__swiper-button-prev"
				}
			})
		}
	}), e(window).on("scroll", function() {
		if (e(".stricked-menu").length) {
			var t, n = e(".stricked-menu");
			e(window).scrollTop() > 130 ? n.addClass("stricky-fixed") : 130 >= e(this).scrollTop() && n.removeClass("stricky-fixed")
		}
		e(".scroll-to-top").length && (e(window).scrollTop() > 100 ? e(".scroll-to-top").fadeIn(500) : 100 >= e(this).scrollTop() && e(".scroll-to-top").fadeOut(500)), t = e(window).scrollTop(), t >= 117 ? e(".one-page-scroll-menu .scrollToLink").children("a").each(function() {
			var n = e(this).attr("href");
			e(n).each(function() {
				if (e(this).offset().top <= t + 100) {
					var a = e(n).attr("id");
					e(".one-page-scroll-menu").find("li").removeClass("current"), e(".one-page-scroll-menu").find("li").removeClass("current-menu-ancestor"), e(".one-page-scroll-menu").find("li").removeClass("current_page_item"), e(".one-page-scroll-menu").find("li").removeClass("current-menu-parent"), e(".one-page-scroll-menu").find("a[href*=\\#" + a + "]").parent().addClass("current")
				}
			})
		}) : (e(".one-page-scroll-menu li.current").removeClass("current"), e(".one-page-scroll-menu li:first").addClass("current"))
	}), e(".before-after-twentytwenty").length && e(".before-after-twentytwenty").each(function() {
		var t = e(this).attr("id");
		e("#" + t).twentytwenty(), e(document).on("shown.bs.tab", 'a[data-toggle="tab"]', function(n) {
			var a = e(n.target).attr("data-target"),
				i = e(".tab-pane" + a),
				r = "#" + t;
			0 === i.find(r).height() && i.find(r).trigger("resize")
		})
	}), e("select:not(.ignore)").niceSelect()
}(jQuery);