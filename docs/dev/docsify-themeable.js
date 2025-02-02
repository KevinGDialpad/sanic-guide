/*!
 * docsify-themeable
 * v0.8.1
 * https://jhildenbiddle.github.io/docsify-themeable/
 * (c) 2018-2020 John Hildenbiddle
 * MIT license
 */
! function () {
    "use strict";

    function g() {
        return (g = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function i(e) {
        return function (e) {
            if (Array.isArray(e)) return r(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
        var n = 1 < arguments.length && void 0 !== t ? t : {},
            o = {
                mimeType: n.mimeType || null,
                onBeforeSend: n.onBeforeSend || Function.prototype,
                onSuccess: n.onSuccess || Function.prototype,
                onError: n.onError || Function.prototype,
                onComplete: n.onComplete || Function.prototype
            },
            r = Array.isArray(e) ? e : [e],
            a = Array.apply(null, Array(r.length)).map(function (e) {
                return null
            });

        function s(e) {
            return !("<" === (0 < arguments.length && void 0 !== e ? e : "").trim().charAt(0))
        }

        function c(e, t) {
            o.onError(e, r[t], t)
        }

        function i(e, t) {
            var n = o.onSuccess(e, r[t], t);
            e = !1 === n ? "" : n || e, a[t] = e, -1 === a.indexOf(null) && o.onComplete(a)
        }
        var u = document.createElement("a");
        r.forEach(function (e, t) {
            if (u.setAttribute("href", e), u.href = String(u.href), Boolean(document.all && !window.atob) && u.host.split(":")[0] !== location.host.split(":")[0]) {
                if (u.protocol === location.protocol) {
                    var n = new XDomainRequest;
                    n.open("GET", e), n.timeout = 0, n.onprogress = Function.prototype, n.ontimeout = Function.prototype, n.onload = function () {
                        s(n.responseText) ? i(n.responseText, t) : c(n, t)
                    }, n.onerror = function (e) {
                        c(n, t)
                    }, setTimeout(function () {
                        n.send()
                    }, 0)
                } else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e, ")")), c(null, t)
            } else {
                var r = new XMLHttpRequest;
                r.open("GET", e), o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.onBeforeSend(r, e, t), r.onreadystatechange = function () {
                    4 === r.readyState && (200 === r.status && s(r.responseText) ? i(r.responseText, t) : c(r, t))
                }, r.send()
            }
        })
    }

    function t(e) {
        var r = {
                cssComments: /\/\*[\s\S]+?\*\//g,
                cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
            },
            d = {
                rootElement: e.rootElement || document,
                include: e.include || 'style,link[rel="stylesheet"]',
                exclude: e.exclude || null,
                filter: e.filter || null,
                skipDisabled: !1 !== e.skipDisabled,
                useCSSOM: e.useCSSOM || !1,
                onBeforeSend: e.onBeforeSend || Function.prototype,
                onSuccess: e.onSuccess || Function.prototype,
                onError: e.onError || Function.prototype,
                onComplete: e.onComplete || Function.prototype
            },
            t = Array.apply(null, d.rootElement.querySelectorAll(d.include)).filter(function (e) {
                return t = e, n = d.exclude, !(t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector).call(t, n);
                var t, n
            }),
            i = Array.apply(null, Array(t.length)).map(function (e) {
                return null
            });

        function u() {
            if (-1 === i.indexOf(null)) {
                var e = i.join("");
                d.onComplete(e, i, t)
            }
        }

        function l(e, n, r, t) {
            var o = d.onSuccess(e, r, t);
            (function r(o, a, s, c) {
                var i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [];
                var u = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : [];
                var l = f(o, s, u);
                l.rules.length ? m(l.absoluteUrls, {
                    onBeforeSend: function (e, t, n) {
                        d.onBeforeSend(e, a, t)
                    },
                    onSuccess: function (n, e, t) {
                        var r = d.onSuccess(n, a, e),
                            o = f(n = !1 === r ? "" : r || n, e, u);
                        return o.rules.forEach(function (e, t) {
                            n = n.replace(e, o.absoluteRules[t])
                        }), n
                    },
                    onError: function (e, t, n) {
                        i.push({
                            xhr: e,
                            url: t
                        }), u.push(l.rules[n]), r(o, a, s, c, i, u)
                    },
                    onComplete: function (e) {
                        e.forEach(function (e, t) {
                            o = o.replace(l.rules[t], e)
                        }), r(o, a, s, c, i, u)
                    }
                }) : c(o, i)
            })(e = void 0 !== o && !1 === Boolean(o) ? "" : o || e, r, t, function (e, t) {
                null === i[n] && (t.forEach(function (e) {
                    return d.onError(e.xhr, r, e.url)
                }), !d.filter || d.filter.test(e) ? i[n] = e : i[n] = "", u())
            })
        }

        function f(e, o, t) {
            var n = 2 < arguments.length && void 0 !== t ? t : [],
                a = {};
            return a.rules = (e.replace(r.cssComments, "").match(r.cssImports) || []).filter(function (e) {
                return -1 === n.indexOf(e)
            }), a.urls = a.rules.map(function (e) {
                return e.replace(r.cssImports, "$1")
            }), a.absoluteUrls = a.urls.map(function (e) {
                return p(e, o)
            }), a.absoluteRules = a.rules.map(function (e, t) {
                var n = a.urls[t],
                    r = p(a.absoluteUrls[t], o);
                return e.replace(n, r)
            }), a
        }
        t.length ? t.forEach(function (n, r) {
            var o = n.getAttribute("href"),
                e = n.getAttribute("rel"),
                t = "LINK" === n.nodeName && o && e && -1 !== e.toLowerCase().indexOf("stylesheet"),
                a = !1 !== d.skipDisabled && n.disabled,
                s = "STYLE" === n.nodeName;
            if (t && !a) m(o, {
                mimeType: "text/css",
                onBeforeSend: function (e, t) {
                    d.onBeforeSend(e, n, t)
                },
                onSuccess: function (e) {
                    var t = p(o);
                    l(e, r, n, t)
                },
                onError: function (e, t) {
                    i[r] = "", d.onError(e, n, t), u()
                }
            });
            else if (s && !a) {
                var c = n.textContent;
                d.useCSSOM && (c = Array.apply(null, n.sheet.cssRules).map(function (e) {
                    return e.cssText
                }).join("")), l(c, r, n, location.href)
            } else i[r] = "", u()
        }) : d.onComplete("", [])
    }

    function p(e, t) {
        var n = document.implementation.createHTMLDocument(""),
            r = n.createElement("base"),
            o = n.createElement("a");
        return n.head.appendChild(r), n.body.appendChild(o), r.href = t || document.baseURI || (document.querySelector("base") || {}).href || location.href, o.href = e, o.href
    }
    var b = e;

    function e(e, t, n) {
        e instanceof RegExp && (e = o(e, n)), t instanceof RegExp && (t = o(t, n));
        var r = a(e, t, n);
        return r && {
            start: r[0],
            end: r[1],
            pre: n.slice(0, r[0]),
            body: n.slice(r[0] + e.length, r[1]),
            post: n.slice(r[1] + t.length)
        }
    }

    function o(e, t) {
        var n = t.match(e);
        return n ? n[0] : null
    }

    function a(e, t, n) {
        var r, o, a, s, c, i = n.indexOf(e),
            u = n.indexOf(t, i + 1),
            l = i;
        if (0 <= i && 0 < u) {
            for (r = [], a = n.length; 0 <= l && !c;) l == i ? (r.push(l), i = n.indexOf(e, l + 1)) : 1 == r.length ? c = [r.pop(), u] : ((o = r.pop()) < a && (a = o, s = u), u = n.indexOf(t, l + 1)), l = i < u && 0 <= i ? i : u;
            r.length && (c = [a, s])
        }
        return c
    }

    function h(a, e) {
        var s = g({}, {
            preserveStatic: !0,
            removeComments: !1
        }, 1 < arguments.length && void 0 !== e ? e : {});

        function c(e) {
            throw new Error("CSS parse error: ".concat(e))
        }

        function i(e) {
            var t = e.exec(a);
            if (t) return a = a.slice(t[0].length), t
        }

        function u() {
            return i(/^{\s*/)
        }

        function l() {
            return i(/^}/)
        }

        function n() {
            i(/^\s*/)
        }

        function r() {
            if (n(), "/" === a[0] && "*" === a[1]) {
                for (var e = 2; a[e] && ("*" !== a[e] || "/" !== a[e + 1]);) e++;
                if (!a[e]) return c("end of comment is missing");
                var t = a.slice(2, e);
                return a = a.slice(e + 2), {
                    type: "comment",
                    comment: t
                }
            }
        }

        function d() {
            for (var e, t = []; e = r();) t.push(e);
            return s.removeComments ? [] : t
        }

        function f() {
            for (n();
                "}" === a[0];) c("extra closing bracket");
            var e = i(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
            if (e) return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (e) {
                return e.replace(/,/g, "‌")
            }).split(/\s*(?![^(]*\)),\s*/).map(function (e) {
                return e.replace(/\u200C/g, ",")
            })
        }

        function o() {
            if ("@" === a[0]) return v();
            i(/^([;\s]*)+/);
            var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                t = i(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
            if (t) {
                if (t = t[0].trim(), !i(/^:\s*/)) return c("property missing ':'");
                var n = i(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),
                    r = {
                        type: "declaration",
                        property: t.replace(e, ""),
                        value: n ? n[0].replace(e, "").trim() : ""
                    };
                return i(/^[;\s]*/), r
            }
        }

        function m() {
            if (!u()) return c("missing '{'");
            for (var e, t = d(); e = o();) t.push(e), t = t.concat(d());
            return l() ? t : c("missing '}'")
        }

        function p() {
            n();
            for (var e, t = []; e = i(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);) t.push(e[1]), i(/^,\s*/);
            if (t.length) return {
                type: "keyframe",
                values: t,
                declarations: m()
            }
        }

        function v() {
            if (n(), "@" === a[0]) {
                var e = function () {
                    var e = i(/^@(import|charset|namespace)\s*([^;]+);/);
                    if (e) return {
                        type: e[1],
                        name: e[2].trim()
                    }
                }() || function () {
                    if (i(/^@font-face\s*/)) return {
                        type: "font-face",
                        declarations: m()
                    }
                }() || function () {
                    var e = i(/^@media([^{]+)*/);
                    if (e) return {
                        type: "media",
                        media: (e[1] || "").trim(),
                        rules: y()
                    }
                }() || function () {
                    var e = i(/^@([-\w]+)?keyframes\s*/);
                    if (e) {
                        var t = e[1];
                        if (!(e = i(/^([-\w]+)\s*/))) return c("@keyframes missing name");
                        var n, r = e[1];
                        if (!u()) return c("@keyframes missing '{'");
                        for (var o = d(); n = p();) o.push(n), o = o.concat(d());
                        return l() ? {
                            type: "keyframes",
                            name: r,
                            vendor: t,
                            keyframes: o
                        } : c("@keyframes missing '}'")
                    }
                }() || function () {
                    var e = i(/^@supports *([^{]+)/);
                    if (e) return {
                        type: "supports",
                        supports: e[1].trim(),
                        rules: y()
                    }
                }() || function () {
                    var e = i(/^@([-\w]+)?document *([^{]+)/);
                    if (e) return {
                        type: "document",
                        document: e[2].trim(),
                        vendor: e[1] ? e[1].trim() : null,
                        rules: y()
                    }
                }() || function () {
                    var e = i(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                    if (e) return {
                        type: "custom-media",
                        name: e[1].trim(),
                        media: e[2].trim()
                    }
                }() || function () {
                    if (i(/^@host\s*/)) return {
                        type: "host",
                        rules: y()
                    }
                }() || function () {
                    if (i(/^@page */)) return {
                        type: "page",
                        selectors: f() || [],
                        declarations: m()
                    }
                }() || function () {
                    var e = i(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);
                    if (e) return {
                        type: "page-margin-box",
                        name: "".concat(e[1], "-").concat(e[2]) + (e[3] ? "-".concat(e[3]) : ""),
                        declarations: m()
                    }
                }();
                if (!e || s.preserveStatic) return e;
                var t = !1;
                if (e.declarations) t = e.declarations.some(function (e) {
                    return /var\(/.test(e.value)
                });
                else t = (e.keyframes || e.rules || []).some(function (e) {
                    return (e.declarations || []).some(function (e) {
                        return /var\(/.test(e.value)
                    })
                });
                return t ? e : {}
            }
        }

        function h() {
            if (!s.preserveStatic) {
                var e = b("{", "}", a);
                if (e) {
                    var t = /:(?:root|host)(?![.:#(])/.test(e.pre) && /--\S*\s*:/.test(e.body),
                        n = /var\(/.test(e.body);
                    if (!t && !n) return a = a.slice(e.end + 1), {}
                }
            }
            var r = f() || [],
                o = s.preserveStatic ? m() : m().filter(function (e) {
                    var t = r.some(function (e) {
                            return /:(?:root|host)(?![.:#(])/.test(e)
                        }) && /^--\S/.test(e.property),
                        n = /var\(/.test(e.value);
                    return t || n
                });
            return r.length || c("selector missing"), {
                type: "rule",
                selectors: r,
                declarations: o
            }
        }

        function y(e) {
            if (!e && !u()) return c("missing '{'");
            for (var t, n = d(); a.length && (e || "}" !== a[0]) && (t = v() || h());) t.type && n.push(t), n = n.concat(d());
            return e || l() ? n : c("missing '}'")
        }
        return {
            type: "stylesheet",
            stylesheet: {
                rules: y(!0),
                errors: []
            }
        }
    }

    function y(e, t) {
        var o = g({}, {
                parseHost: !1,
                store: {},
                onWarning: function () {}
            }, 1 < arguments.length && void 0 !== t ? t : {}),
            n = new RegExp(":".concat(o.parseHost ? "host" : "root", "$"));
        return "string" == typeof e && (e = h(e, o)), e.stylesheet.rules.forEach(function (e) {
            "rule" === e.type && e.selectors.some(function (e) {
                return n.test(e)
            }) && e.declarations.forEach(function (e, t) {
                var n = e.property,
                    r = e.value;
                n && 0 === n.indexOf("--") && (o.store[n] = r)
            })
        }), o.store
    }

    function S(e, t, n) {
        var a = 1 < arguments.length && void 0 !== t ? t : "",
            s = 2 < arguments.length ? n : void 0,
            c = {
                charset: function (e) {
                    return "@charset " + e.name + ";"
                },
                comment: function (e) {
                    return 0 === e.comment.indexOf("__CSSVARSPONYFILL") ? "/*" + e.comment + "*/" : ""
                },
                "custom-media": function (e) {
                    return "@custom-media " + e.name + " " + e.media + ";"
                },
                declaration: function (e) {
                    return e.property + ":" + e.value + ";"
                },
                document: function (e) {
                    return "@" + (e.vendor || "") + "document " + e.document + "{" + r(e.rules) + "}"
                },
                "font-face": function (e) {
                    return "@font-face{" + r(e.declarations) + "}"
                },
                host: function (e) {
                    return "@host{" + r(e.rules) + "}"
                },
                import: function (e) {
                    return "@import " + e.name + ";"
                },
                keyframe: function (e) {
                    return e.values.join(",") + "{" + r(e.declarations) + "}"
                },
                keyframes: function (e) {
                    return "@" + (e.vendor || "") + "keyframes " + e.name + "{" + r(e.keyframes) + "}"
                },
                media: function (e) {
                    return "@media " + e.media + "{" + r(e.rules) + "}"
                },
                namespace: function (e) {
                    return "@namespace " + e.name + ";"
                },
                page: function (e) {
                    return "@page " + (e.selectors.length ? e.selectors.join(", ") : "") + "{" + r(e.declarations) + "}"
                },
                "page-margin-box": function (e) {
                    return "@" + e.name + "{" + r(e.declarations) + "}"
                },
                rule: function (e) {
                    var t = e.declarations;
                    if (t.length) return e.selectors.join(",") + "{" + r(t) + "}"
                },
                supports: function (e) {
                    return "@supports " + e.supports + "{" + r(e.rules) + "}"
                }
            };

        function r(e) {
            for (var t = "", n = 0; n < e.length; n++) {
                var r = e[n];
                s && s(r);
                var o = c[r.type](r);
                o && (t += o, o.length && r.selectors && (t += a))
            }
            return t
        }
        return r(e.stylesheet.rules)
    }
    e.range = a;
    var u = "--",
        l = "var";

    function w(e, t) {
        var i = g({}, {
            preserveStatic: !0,
            preserveVars: !1,
            variables: {},
            onWarning: function () {}
        }, 1 < arguments.length && void 0 !== t ? t : {});
        return "string" == typeof e && (e = h(e, i)),
            function e(n, r) {
                n.rules.forEach(function (t) {
                    t.rules ? e(t, r) : t.keyframes ? t.keyframes.forEach(function (e) {
                        "keyframe" === e.type && r(e.declarations, t)
                    }) : t.declarations && r(t.declarations, n)
                })
            }(e.stylesheet, function (e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        o = r.type,
                        a = r.property,
                        s = r.value;
                    if ("declaration" === o)
                        if (i.preserveVars || !a || 0 !== a.indexOf(u)) {
                            if (-1 !== s.indexOf(l + "(")) {
                                var c = f(s, i);
                                c !== r.value && (c = d(c), i.preserveVars ? (e.splice(n, 0, {
                                    type: o,
                                    property: a,
                                    value: c
                                }), n++) : r.value = c)
                            }
                        } else e.splice(n, 1), n--
                }
            }), S(e)
    }

    function d(n) {
        return (n.match(/calc\(([^)]+)\)/g) || []).forEach(function (e) {
            var t = "calc".concat(e.split("calc").join(""));
            n = n.replace(e, t)
        }), n
    }

    function f(e, t, n) {
        var r = 1 < arguments.length && void 0 !== t ? t : {},
            o = 2 < arguments.length ? n : void 0;
        if (-1 === e.indexOf("var(")) return e;
        var a, s, c, i, u, l, d = b("(", ")", e);
        return d ? "var" !== d.pre.slice(-3) ? d.pre + "(".concat(f(d.body, r), ")") + f(d.post, r) : 0 === d.body.trim().length ? (r.onWarning("var() must contain a non-whitespace string"), e) : d.pre.slice(0, -3) + (a = d.body, s = a.split(",")[0].replace(/[\s\n\t]/g, ""), c = (a.match(/(?:\s*,\s*){1}(.*)?/) || [])[1], i = Object.prototype.hasOwnProperty.call(r.variables, s) ? String(r.variables[s]) : void 0, u = i || (c ? String(c) : void 0), l = o || a, i || r.onWarning('variable "'.concat(s, '" is undefined')), u && "undefined" !== u && 0 < u.length ? f(u, r, l) : "var(".concat(l, ")")) + f(d.post, r) : (-1 !== e.indexOf("var(") && r.onWarning('missing closing ")" in the value "'.concat(e, '"')), e)
    }
    var s = "undefined" != typeof window,
        E = s && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)"),
        A = {
            group: 0,
            job: 0
        },
        C = {
            rootElement: s ? document : null,
            shadowDOM: !1,
            include: "style,link[rel=stylesheet]",
            exclude: "",
            variables: {},
            onlyLegacy: !0,
            preserveStatic: !0,
            preserveVars: !1,
            silent: !1,
            updateDOM: !0,
            updateURLs: !0,
            watch: null,
            onBeforeSend: function () {},
            onError: function () {},
            onWarning: function () {},
            onSuccess: function () {},
            onComplete: function () {},
            onFinally: function () {}
        },
        x = {
            cssComments: /\/\*[\s\S]+?\*\//g,
            cssKeyframes: /@(?:-\w*-)?keyframes/,
            cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
            cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
            cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
            cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
            cssVarFunc: /var\(\s*--[\w-]/,
            cssVars: /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
        },
        O = {
            dom: {},
            job: {},
            user: {}
        },
        k = !1,
        L = null,
        j = 0,
        M = null,
        T = !1;

    function N() {
        var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            o = "cssVars(): ",
            m = g({}, C, n);

        function p(e, t, n, r) {
            !m.silent && window.console && console.error("".concat(o).concat(e, "\n"), t), m.onError(e, t, n, r)
        }

        function v(e) {
            !m.silent && window.console && console.warn("".concat(o).concat(e)), m.onWarning(e)
        }

        function c(e) {
            m.onFinally(Boolean(e), E, _() - m.__benchmark)
        }
        if (s) {
            if (m.watch) return m.watch = C.watch,
                function (c) {
                    function o(e) {
                        return "LINK" === e.tagName && -1 !== (e.getAttribute("rel") || "").indexOf("stylesheet") && !e.sheet.disabled
                    }

                    function r(e) {
                        return Array.apply(null, e).some(function (e) {
                            var t, n = 1 === e.nodeType && e.hasAttribute("data-cssvars"),
                                r = "STYLE" === (t = e).tagName && !t.sheet.disabled && x.cssVars.test(e.textContent);
                            return !n && (o(e) || r)
                        })
                    }
                    if (!window.MutationObserver) return;
                    L && (L.disconnect(), L = null);
                    (L = new MutationObserver(function (e) {
                        e.some(function (e) {
                            var t, n = !1;
                            return "attributes" === e.type ? n = o(e.target) : "childList" === e.type && (n = r(e.addedNodes) || (t = e.removedNodes, Array.apply(null, t).some(function (e) {
                                var t = 1 === e.nodeType,
                                    n = t && "out" === e.getAttribute("data-cssvars"),
                                    r = t && "src" === e.getAttribute("data-cssvars"),
                                    o = r;
                                if (r || n) {
                                    var a = e.getAttribute("data-cssvars-group"),
                                        s = c.rootElement.querySelector('[data-cssvars-group="'.concat(a, '"]'));
                                    r && (R(c.rootElement), O.dom = {}), s && s.parentNode.removeChild(s)
                                }
                                return o
                            }))), n
                        }) && N(c)
                    })).observe(document.documentElement, {
                        attributes: !0,
                        attributeFilter: ["disabled", "href"],
                        childList: !0,
                        subtree: !0
                    })
                }(m), void N(m);
            if (!1 === m.watch && L && (L.disconnect(), L = null), !m.__benchmark) {
                if (k === m.rootElement) return void
                function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100;
                    clearTimeout(M), M = setTimeout(function () {
                        e.__benchmark = null, N(e)
                    }, t)
                }(n);
                if (m.__benchmark = _(), m.exclude = [L ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]', m.exclude].filter(function (e) {
                        return e
                    }).join(","), m.variables = function () {
                        var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            r = /^-{2}/;
                        return Object.keys(n).reduce(function (e, t) {
                            return e[r.test(t) ? t : "--".concat(t.replace(/^-+/, ""))] = n[t], e
                        }, {})
                    }(m.variables), !L)
                    if (Array.apply(null, m.rootElement.querySelectorAll('[data-cssvars="out"]')).forEach(function (e) {
                            var t = e.getAttribute("data-cssvars-group");
                            (t ? m.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t, '"]')) : null) || e.parentNode.removeChild(e)
                        }), j) {
                        var e = m.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');
                        e.length < j && (j = e.length, O.dom = {})
                    }
            }
            if ("loading" !== document.readyState)
                if (E && m.onlyLegacy) {
                    var r = !1;
                    if (m.updateDOM) {
                        var a = m.rootElement.host || (m.rootElement === document ? document.documentElement : m.rootElement);
                        Object.keys(m.variables).forEach(function (e) {
                            var t = m.variables[e];
                            r = r || t !== getComputedStyle(a).getPropertyValue(e), a.style.setProperty(e, t)
                        })
                    }
                    c(r)
                } else !T && (m.shadowDOM || m.rootElement.shadowRoot || m.rootElement.host) ? t({
                    rootElement: C.rootElement,
                    include: C.include,
                    exclude: m.exclude,
                    skipDisabled: !1,
                    onSuccess: function (e) {
                        return (e = ((e = e.replace(x.cssComments, "").replace(x.cssMediaQueries, "")).match(x.cssVarDeclRules) || []).join("")) || !1
                    },
                    onComplete: function (e) {
                        y(e, {
                            store: O.dom,
                            onWarning: v
                        }), T = !0, N(m)
                    }
                }) : (k = m.rootElement, t({
                    rootElement: m.rootElement,
                    include: m.include,
                    exclude: m.exclude,
                    skipDisabled: !1,
                    onBeforeSend: m.onBeforeSend,
                    onError: function (e, t, n) {
                        var r = e.responseURL || q(n, location.href),
                            o = e.statusText ? "(".concat(e.statusText, ")") : "Unspecified Error" + (0 === e.status ? " (possibly CORS related)" : "");
                        p("CSS XHR Error: ".concat(r, " ").concat(e.status, " ").concat(o), t, e, r)
                    },
                    onSuccess: function (e, t, n) {
                        var r, o, a = m.onSuccess(e, t, n);
                        return e = void 0 !== a && !1 === Boolean(a) ? "" : a || e, m.updateURLs && (o = n, ((r = e).replace(x.cssComments, "").match(x.cssUrls) || []).forEach(function (e) {
                            var t = e.replace(x.cssUrls, "$1"),
                                n = q(t, o);
                            r = r.replace(e, e.replace(t, n))
                        }), e = r), e
                    },
                    onComplete: function (e, u, t) {
                        var n = 2 < arguments.length && void 0 !== t ? t : [],
                            r = g({}, O.dom, O.user);
                        if (O.job = {}, n.forEach(function (t, e) {
                                var n = u[e];
                                if (x.cssVars.test(n)) try {
                                    var r = h(n, {
                                        preserveStatic: m.preserveStatic,
                                        removeComments: !0
                                    });
                                    y(r, {
                                        parseHost: Boolean(m.rootElement.host),
                                        store: O.dom,
                                        onWarning: v
                                    }), t.__cssVars = {
                                        tree: r
                                    }
                                } catch (e) {
                                    p(e.message, t)
                                }
                            }), g(O.job, O.dom), m.updateDOM ? (g(O.user, m.variables), g(O.job, O.user)) : (g(O.job, O.user, m.variables), g(r, m.variables)), 0 < A.job && Boolean(Object.keys(O.job).length > Object.keys(r).length || Boolean(Object.keys(r).length && Object.keys(O.job).some(function (e) {
                                return O.job[e] !== r[e]
                            })))) R(m.rootElement), N(m);
                        else {
                            var l = [],
                                d = [],
                                f = !1;
                            if (m.updateDOM && A.job++, n.forEach(function (t, e) {
                                    var n = !t.__cssVars;
                                    if (t.__cssVars) try {
                                        w(t.__cssVars.tree, g({}, m, {
                                            variables: O.job,
                                            onWarning: v
                                        }));
                                        var r = S(t.__cssVars.tree);
                                        if (m.updateDOM) {
                                            var o = u[e],
                                                a = x.cssVarFunc.test(o);
                                            if (t.getAttribute("data-cssvars") || t.setAttribute("data-cssvars", "src"), r.length && a) {
                                                var s = t.getAttribute("data-cssvars-group") || ++A.group,
                                                    c = r.replace(/\s/g, ""),
                                                    i = m.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(s, '"]')) || document.createElement("style");
                                                f = f || x.cssKeyframes.test(r), m.preserveStatic && (t.sheet.disabled = !0), i.hasAttribute("data-cssvars") || i.setAttribute("data-cssvars", "out"), c === t.textContent.replace(/\s/g, "") ? (n = !0, i && i.parentNode && (t.removeAttribute("data-cssvars-group"), i.parentNode.removeChild(i))) : c !== i.textContent.replace(/\s/g, "") && ([t, i].forEach(function (e) {
                                                    e.setAttribute("data-cssvars-job", A.job), e.setAttribute("data-cssvars-group", s)
                                                }), i.textContent = r, l.push(r), d.push(i), i.parentNode || t.parentNode.insertBefore(i, t.nextSibling))
                                            }
                                        } else t.textContent.replace(/\s/g, "") !== r && l.push(r)
                                    } catch (e) {
                                        p(e.message, t)
                                    }
                                    n && t.setAttribute("data-cssvars", "skip"), t.hasAttribute("data-cssvars-job") || t.setAttribute("data-cssvars-job", A.job)
                                }), j = m.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length, m.shadowDOM)
                                for (var o, a = [m.rootElement].concat(i(m.rootElement.querySelectorAll("*"))), s = 0; o = a[s]; ++s) {
                                    if (o.shadowRoot && o.shadowRoot.querySelector("style")) N(g({}, m, {
                                        rootElement: o.shadowRoot
                                    }))
                                }
                            m.updateDOM && f && function (e) {
                                var t = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter(function (e) {
                                    return getComputedStyle(document.body)[e]
                                })[0];
                                if (t) {
                                    for (var n = e.getElementsByTagName("*"), r = [], o = "__CSSVARSPONYFILL-KEYFRAMES__", a = 0, s = n.length; a < s; a++) {
                                        var c = n[a];
                                        "none" !== getComputedStyle(c)[t] && (c.style[t] += o, r.push(c))
                                    }
                                    document.body.offsetHeight;
                                    for (var i = 0, u = r.length; i < u; i++) {
                                        var l = r[i].style;
                                        l[t] = l[t].replace(o, "")
                                    }
                                }
                            }(m.rootElement), k = !1, m.onComplete(l.join(""), d, JSON.parse(JSON.stringify(O.job)), _() - m.__benchmark), c(d.length)
                        }
                    }
                }));
            else document.addEventListener("DOMContentLoaded", function e(t) {
                N(n), document.removeEventListener("DOMContentLoaded", e)
            })
        }
    }

    function q(e, t) {
        var n = 1 < arguments.length && void 0 !== t ? t : location.href,
            r = document.implementation.createHTMLDocument(""),
            o = r.createElement("base"),
            a = r.createElement("a");
        return r.head.appendChild(o), r.body.appendChild(a), o.href = n, a.href = e, a.href
    }

    function _() {
        return s && (window.performance || {}).now ? window.performance.now() : (new Date).getTime()
    }

    function R(e) {
        Array.apply(null, e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')).forEach(function (e) {
            return e.setAttribute("data-cssvars", "")
        })
    }

    function c(e, t, n) {
        var r = 2 < arguments.length && void 0 !== n ? n : null,
            o = 3 === e.childNodes[0].nodeType,
            a = e.querySelector("ul");
        if (o && a && !Array.apply(null, e.children).some(function (e) {
                return -1 < e.tabIndex
            }).length) {
            var s = document.createElement("span");
            for (null !== r && s.setAttribute("tabindex", r), e.insertBefore(s, a); e.childNodes[0] !== s;) s.appendChild(e.childNodes[0])
        }
    }
    N.reset = function () {
        for (var e in A.job = 0, A.group = 0, k = !1, L && (L.disconnect(), L = null), j = 0, M = null, T = !1, O) O[e] = {}
    };

    function n(e, t) {
        return Number("0." + ((window.Docsify || {}).version || "0").replace(/\./g, "")) < Number("0." + e.replace(/\./g, "")) ? t : null
    }
    if (window) {
        var v = {
            onlyLegacy: !/Edge\/1[5678]/i.test(navigator.userAgent),
            silent: !0
        };
        N(v), document.body.setAttribute("data-platform", navigator.platform), window.$docsify = window.$docsify || {}, window.$docsify.plugins = [].concat([function (e, t) {
            e.init(function () {
                !1 !== ((window.$docsify || {}).themeable || {}).readyTransition && (document.body.classList.add("ready-transition"), setTimeout(function () {
                    document.body.classList.add("ready-spinner")
                }, 1), e.ready(function () {
                    var n = document.querySelector("main");
                    n.addEventListener("transitionend", function e(t) {
                        document.body.classList.remove("ready-transition"), document.body.classList.remove("ready-spinner"), n.removeEventListener("transitionend", e)
                    })
                }))
            })
        }, function (e, t) {
            e.doneEach(function () {
                var e = document.querySelector(".cover h1 > a");
                e && (e.parentNode.innerHTML = e.innerHTML)
            })
        }, function (e, t) {
            e.doneEach(function () {
                var e = Array.apply(null, document.querySelectorAll("body > nav.app-nav > ul > li")),
                    t = Array.apply(null, document.querySelectorAll(".sidebar > nav > ul > li"));
                e.forEach(function (t) {
                    var n = "focus-within";
                    c(t, "span", 0), t.addEventListener("focusin", function (e) {
                        t.contains(document.activeElement) && t.classList.add(n)
                    }), t.addEventListener("focusout", function (e) {
                        t.contains(document.activeElement) || t.classList.remove(n)
                    })
                }), t.forEach(function (e) {
                    c(e, "span")
                })
            })
        }, function (e, t) {
            e.doneEach(function () {
                Array.apply(null, document.querySelectorAll("pre[data-lang]")).forEach(function (e) {
                    var t = e.querySelector("code"),
                        n = "language-".concat(e.getAttribute("data-lang"));
                    e.classList.add(n), t.classList.add(n)
                })
            })
        }, function (e, t) {
            e.mounted(function () {
                var e = document.querySelector(".content"),
                    t = setInterval(function () {
                        e.textContent.length && (document.body.classList.add("ready-fix"), clearInterval(t))
                    }, 250)
            }), e.ready(function () {
                document.body.classList.add("ready-fix")
            })
        }, function (e, t) {
            e.init(function () {
                if (!1 !== ((window.$docsify || {}).themeable || {}).responsiveTables) {
                    var e = window.$docsify.markdown = window.$docsify.markdown || {},
                        t = e.renderer = e.renderer || {};
                    e.smartypants = e.smartypants || !0, t.table = t.table || function (e, t) {
                        var n = '\n                    <div class="table-wrapper">\n                        <table>\n                            <thead>'.concat(e, "</thead>\n                            <tbody>").concat(t, "</tbody>\n                        </table>\n                    </div>");
                        try {
                            var r = document.createElement("div"),
                                o = document.head.appendChild(document.createElement("style")).sheet,
                                a = "_" + Math.random().toString(36).substr(2, 9);
                            r.innerHTML = n;
                            var s = r.querySelector("table");
                            Array.apply(null, s.getElementsByTagName("th")).map(function (e) {
                                return e.innerHTML.replace("&nbsp;", " ")
                            }).forEach(function (e, t) {
                                var n = "#".concat(a, " td:nth-child(").concat(t + 1, ')::before{content:"').concat(e, '";}');
                                o.insertRule(n, o.cssRules.length)
                            }), s.id = a, n = r.innerHTML
                        } catch (e) {
                            console.log("Failed to render responsive table: " + e)
                        }
                        return n
                    }
                }
            })
        }], window.$docsify.plugins || [], [function (e, t) {
            e.ready(function () {
                var e = document.querySelector(".sidebar .search .clear-button");
                if (e) {
                    var t = document.createElement("button");
                    t.className = "clear-button", t.setAttribute("aria-label", "Clear search"), t.innerHTML = '\n                <svg width="16" height="16" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n                    <circle cx="8" cy="8" r="8" fill="black"></circle>\n                    <path stroke="white" stroke-width="1.5" d="M4.5,4.5,11.5,11.5" vector-effect="non-scaling-stroke"></path>\n                    <path stroke="white" stroke-width="1.5" d="M4.5,11.5,11.5,4.5" vector-effect="non-scaling-stroke"></path>\n                </svg>\n            ', e.parentNode.replaceChild(t, e)
                }
            })
        }, n("4.8.0", function (e, t) {
            e.ready(function () {
                var t = document.querySelector(".sidebar .search"),
                    n = document.querySelector(".sidebar .search input[type=search]"),
                    r = document.querySelector(".sidebar .search .clear-button");
                t && t.addEventListener("click", function (e) {
                    e.target !== r && !r.contains(e.target) || (t.classList.remove("show"), n.focus())
                }), n && n.addEventListener("input", function (e) {
                    n.value.length ? t.classList.add("show") : t.classList.remove("show")
                })
            })
        }), n("4.8.0", function (e, t) {
            var a = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector;
            e.doneEach(function () {
                var o = "medium-zoom-image";
                Array.apply(null, document.querySelectorAll(".".concat(o))).forEach(function (e) {
                    var t = a.call(e, "a img"),
                        n = a.call(e, ".content img");
                    if (t || !n) {
                        var r = e.cloneNode(!0);
                        e.parentNode.replaceChild(r, e), r.classList.remove(o)
                    }
                })
            })
        })]).filter(function (e) {
            return null !== e
        }), window.$docsify.search = window.$docsify.search || {}, window.$docsify.search.hideOtherSidebarContent = !0, window.$docsify.themeable = window.$docsify.themeable || {}, window.$docsify.themeable.version = "0.8.1", window.$docsify.themeable.util = {
            cssVars: function (e) {
                N(0 < arguments.length && void 0 !== e ? e : v)
            }
        }
    }
}();
//# sourceMappingURL=docsify-themeable.min.js.map
