! function () {
    function s(n) {
        var r = Object.create(null);
        return function (e) {
            var t = c(e) ? e : JSON.stringify(e);
            return r[t] || (r[t] = n(e))
        }
    }
    var a = s(function (e) {
            return e.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase()
            })
        }),
        l = Object.prototype.hasOwnProperty,
        h = Object.assign || function (e) {
            for (var t = arguments, n = 1; n < arguments.length; n++) {
                var r = Object(t[n]);
                for (var i in r) l.call(r, i) && (e[i] = r[i])
            }
            return e
        };

    function c(e) {
        return "string" == typeof e || "number" == typeof e
    }

    function p() {}

    function r(e) {
        return "function" == typeof e
    }
    var f = document.body.clientWidth <= 600,
        i = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),
        n = {};

    function m(e, t) {
        if (void 0 === t && (t = !1), "string" == typeof e) {
            if (void 0 !== window.Vue) return y(e);
            e = t ? y(e) : n[e] || (n[e] = y(e))
        }
        return e
    }
    var u = document,
        v = u.body,
        d = u.head;

    function y(e, t) {
        return t ? e.querySelector(t) : u.querySelector(e)
    }

    function b(e, t) {
        return [].slice.call(t ? e.querySelectorAll(t) : u.querySelectorAll(e))
    }

    function g(e, t) {
        return e = u.createElement(e), t && (e.innerHTML = t), e
    }

    function o(e, t) {
        return e.appendChild(t)
    }

    function k(e, t) {
        return e.insertBefore(t, e.children[0])
    }

    function x(e, t, n) {
        r(t) ? window.addEventListener(e, t) : e.addEventListener(t, n)
    }

    function w(e, t, n) {
        r(t) ? window.removeEventListener(e, t) : e.removeEventListener(t, n)
    }

    function _(e, t, n) {
        e && e.classList[n ? t : "toggle"](n || t)
    }

    function e(e, t) {
        void 0 === t && (t = document);
        var n = t.readyState;
        if ("complete" === n || "interactive" === n) return setTimeout(e, 0);
        t.addEventListener("DOMContentLoaded", e)
    }
    var t = Object.freeze({
            __proto__: null,
            getNode: m,
            $: u,
            body: v,
            head: d,
            find: y,
            findAll: b,
            create: g,
            appendTo: o,
            before: k,
            on: x,
            off: w,
            toggleClass: _,
            style: function (e) {
                o(d, g("style", e))
            },
            documentReady: e
        }),
        A = document.currentScript;

    function S(e) {
        var t = h({
                el: "#app",
                repo: "",
                maxLevel: 6,
                subMaxLevel: 0,
                loadSidebar: null,
                loadNavbar: null,
                homepage: "README.md",
                coverpage: "",
                basePath: "",
                auto2top: !1,
                name: "",
                themeColor: "",
                nameLink: window.location.pathname,
                autoHeader: !1,
                executeScript: null,
                noEmoji: !1,
                ga: "",
                ext: ".md",
                mergeNavbar: !1,
                formatUpdated: "",
                externalLinkTarget: "_blank",
                cornerExternalLinkTarget: "_blank",
                externalLinkRel: "noopener",
                routerMode: "hash",
                noCompileLinks: [],
                crossOriginLinks: [],
                relativePath: !1,
                topMargin: 0
            }, "function" == typeof window.$docsify ? window.$docsify(e) : window.$docsify),
            n = A || [].slice.call(document.getElementsByTagName("script")).filter(function (e) {
                return /docsify\./.test(e.src)
            })[0];
        if (n)
            for (var r in t)
                if (l.call(t, r)) {
                    var i = n.getAttribute("data-" + a(r));
                    c(i) && (t[r] = "" === i || i)
                } return !0 === t.loadSidebar && (t.loadSidebar = "_sidebar" + t.ext), !0 === t.loadNavbar && (t.loadNavbar = "_navbar" + t.ext), !0 === t.coverpage && (t.coverpage = "_coverpage" + t.ext), !0 === t.repo && (t.repo = ""), !0 === t.name && (t.name = ""), window.$docsify = t
    }
    var T = /([^{]*?)\w(?=\})/g,
        E = {
            YYYY: "getFullYear",
            YY: "getYear",
            MM: function (e) {
                return e.getMonth() + 1
            },
            DD: "getDate",
            HH: "getHours",
            mm: "getMinutes",
            ss: "getSeconds",
            fff: "getMilliseconds"
        };
    var L = Object.hasOwnProperty,
        C = Object.setPrototypeOf,
        R = Object.isFrozen,
        ke = Object.keys,
        xe = Object.freeze,
        F = Object.seal,
        O = "undefined" != typeof Reflect && Reflect,
        $ = O.apply,
        M = O.construct;
    $ = $ || function (e, t, n) {
        return e.apply(t, n)
    }, xe = xe || function (e) {
        return e
    }, F = F || function (e) {
        return e
    }, M = M || function (e, t) {
        return new(Function.prototype.bind.apply(e, [null].concat(function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }(t))))
    };
    var we = N(Array.prototype.forEach),
        _e = N(Array.prototype.indexOf),
        Ae = N(Array.prototype.join),
        Se = N(Array.prototype.pop),
        Te = N(Array.prototype.push),
        Ee = N(Array.prototype.slice),
        Le = N(String.prototype.toLowerCase),
        Ce = N(String.prototype.match),
        Re = N(String.prototype.replace),
        Fe = N(String.prototype.indexOf),
        Oe = N(String.prototype.trim),
        $e = N(RegExp.prototype.test),
        Me = z(RegExp),
        Ne = z(TypeError);

    function N(a) {
        return function (e) {
            for (var t = arguments, n = arguments.length, r = Array(1 < n ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = t[i];
            return $(a, e, r)
        }
    }

    function z(i) {
        return function () {
            for (var e = arguments, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = e[r];
            return M(i, n)
        }
    }

    function ze(e, t) {
        C && C(e, null);
        for (var n = t.length; n--;) {
            var r = t[n];
            if ("string" == typeof r) {
                var i = Le(r);
                i !== r && (R(t) || (t[n] = i), r = i)
            }
            e[r] = !0
        }
        return e
    }

    function Pe(e) {
        var t = {},
            n = void 0;
        for (n in e) $(L, e, [n]) && (t[n] = e[n]);
        return t
    }
    var je = xe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
        De = xe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"]),
        He = xe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
        qe = xe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
        Ie = xe(["#text"]),
        Ue = xe(["accept", "action", "align", "alt", "autocomplete", "background", "bgcolor", "border", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "coords", "crossorigin", "datetime", "default", "dir", "disabled", "download", "enctype", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "integrity", "ismap", "label", "lang", "list", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "type", "usemap", "valign", "value", "width", "xmlns"]),
        Be = xe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
        Ze = xe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
        We = xe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        Ge = F(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        Ye = F(/<%[\s\S]*|[\s\S]*%>/gm),
        Ve = F(/^data-[\-\w.\u00B7-\uFFFF]/),
        Xe = F(/^aria-[\-\w]+$/),
        Ke = F(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        Qe = F(/^(?:\w+script|data):/i),
        Je = F(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),
        et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

    function tt(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var nt = function () {
            return "undefined" == typeof window ? null : window
        },
        rt = function (e, t) {
            if ("object" !== (void 0 === e ? "undefined" : et(e)) || "function" != typeof e.createPolicy) return null;
            var n = null,
                r = "data-tt-policy-suffix";
            t.currentScript && t.currentScript.hasAttribute(r) && (n = t.currentScript.getAttribute(r));
            var i = "dompurify" + (n ? "#" + n : "");
            try {
                return e.createPolicy(i, {
                    createHTML: function (e) {
                        return e
                    }
                })
            } catch (e) {
                return console.warn("TrustedTypes policy " + i + " could not be created."), null
            }
        };
    var P, j, D = function t(e) {
        function d(e) {
            return t(e)
        }
        var c = 0 < arguments.length && void 0 !== e ? e : nt();
        if (d.version = "2.0.8", d.removed = [], !c || !c.document || 9 !== c.document.nodeType) return d.isSupported = !1, d;
        var u = c.document,
            o = !1,
            s = !1,
            l = c.document,
            p = c.DocumentFragment,
            n = c.HTMLTemplateElement,
            h = c.Node,
            r = c.NodeFilter,
            i = c.NamedNodeMap,
            a = void 0 === i ? c.NamedNodeMap || c.MozNamedAttrMap : i,
            f = c.Text,
            g = c.Comment,
            m = c.DOMParser,
            v = c.trustedTypes;
        if ("function" == typeof n) {
            var y = l.createElement("template");
            y.content && y.content.ownerDocument && (l = y.content.ownerDocument)
        }
        var b = rt(v, u),
            k = b ? b.createHTML("") : "",
            x = l,
            w = x.implementation,
            _ = x.createNodeIterator,
            A = x.getElementsByTagName,
            S = x.createDocumentFragment,
            T = u.importNode,
            E = {};
        d.isSupported = w && void 0 !== w.createHTMLDocument && 9 !== l.documentMode;

        function L(e) {
            pe && pe === e || (e && "object" === (void 0 === e ? "undefined" : et(e)) || (e = {}), D = "ALLOWED_TAGS" in e ? ze({}, e.ALLOWED_TAGS) : H, q = "ALLOWED_ATTR" in e ? ze({}, e.ALLOWED_ATTR) : I, ce = "ADD_URI_SAFE_ATTR" in e ? ze(Pe(ue), e.ADD_URI_SAFE_ATTR) : ue, U = "FORBID_TAGS" in e ? ze({}, e.FORBID_TAGS) : {}, B = "FORBID_ATTR" in e ? ze({}, e.FORBID_ATTR) : {}, oe = "USE_PROFILES" in e && e.USE_PROFILES, Z = !1 !== e.ALLOW_ARIA_ATTR, W = !1 !== e.ALLOW_DATA_ATTR, G = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = e.SAFE_FOR_JQUERY || !1, V = e.SAFE_FOR_TEMPLATES || !1, X = e.WHOLE_DOCUMENT || !1, J = e.RETURN_DOM || !1, ee = e.RETURN_DOM_FRAGMENT || !1, te = e.RETURN_DOM_IMPORT || !1, ne = e.RETURN_TRUSTED_TYPE || !1, Q = e.FORCE_BODY || !1, re = !1 !== e.SANITIZE_DOM, ie = !1 !== e.KEEP_CONTENT, ae = e.IN_PLACE || !1, j = e.ALLOWED_URI_REGEXP || j, V && (W = !1), ee && (J = !0), oe && (D = ze({}, [].concat(tt(Ie))), q = [], !0 === oe.html && (ze(D, je), ze(q, Ue)), !0 === oe.svg && (ze(D, De), ze(q, Be), ze(q, We)), !0 === oe.svgFilters && (ze(D, He), ze(q, Be), ze(q, We)), !0 === oe.mathMl && (ze(D, qe), ze(q, Ze), ze(q, We))), e.ADD_TAGS && (D === H && (D = Pe(D)), ze(D, e.ADD_TAGS)), e.ADD_ATTR && (q === I && (q = Pe(q)), ze(q, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && ze(ce, e.ADD_URI_SAFE_ATTR), ie && (D["#text"] = !0), X && ze(D, ["html", "head", "body"]), D.table && (ze(D, ["tbody"]), delete U.tbody), xe && xe(e), pe = e)
        }

        function C(t) {
            Te(d.removed, {
                element: t
            });
            try {
                t.parentNode.removeChild(t)
            } catch (e) {
                t.outerHTML = k
            }
        }

        function R(e, t) {
            try {
                Te(d.removed, {
                    attribute: t.getAttributeNode(e),
                    from: t
                })
            } catch (e) {
                Te(d.removed, {
                    attribute: null,
                    from: t
                })
            }
            t.removeAttribute(e)
        }

        function F(e) {
            var t = void 0,
                n = void 0;
            if (Q) e = "<remove></remove>" + e;
            else {
                var r = Ce(e, /^[\s]+/);
                n = r && r[0]
            }
            var i = b ? b.createHTML(e) : e;
            if (o) try {
                t = (new m).parseFromString(i, "text/html")
            } catch (e) {}
            if (s && ze(U, ["title"]), !t || !t.documentElement) {
                var a = (t = w.createHTMLDocument("")).body;
                a.parentNode.removeChild(a.parentNode.firstElementChild), a.outerHTML = i
            }
            return e && n && t.body.insertBefore(l.createTextNode(n), t.body.childNodes[0] || null), A.call(t, X ? "html" : "body")[0]
        }
        var O = Ge,
            $ = Ye,
            M = Ve,
            N = Xe,
            z = Qe,
            P = Je,
            j = Ke,
            D = null,
            H = ze({}, [].concat(tt(je), tt(De), tt(He), tt(qe), tt(Ie))),
            q = null,
            I = ze({}, [].concat(tt(Ue), tt(Be), tt(Ze), tt(We))),
            U = null,
            B = null,
            Z = !0,
            W = !0,
            G = !1,
            Y = !1,
            V = !1,
            X = !1,
            K = !1,
            Q = !1,
            J = !1,
            ee = !1,
            te = !1,
            ne = !1,
            re = !0,
            ie = !0,
            ae = !1,
            oe = {},
            se = ze({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            le = ze({}, ["audio", "video", "img", "source", "image"]),
            ce = null,
            ue = ze({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
            pe = null,
            de = l.createElement("form");
        d.isSupported && (function () {
            try {
                F('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img") && (o = !0)
            } catch (e) {}
        }(), function () {
            try {
                var e = F("<x/><title>&lt;/title&gt;&lt;img&gt;");
                $e(/<\/title/, e.querySelector("title").innerHTML) && (s = !0)
            } catch (e) {}
        }());

        function he(e) {
            return _.call(e.ownerDocument || e, e, r.SHOW_ELEMENT | r.SHOW_COMMENT | r.SHOW_TEXT, function () {
                return r.FILTER_ACCEPT
            }, !1)
        }

        function fe(e) {
            return "object" === (void 0 === h ? "undefined" : et(h)) ? e instanceof h : e && "object" === (void 0 === e ? "undefined" : et(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
        }

        function ge(e, t, n) {
            E[e] && we(E[e], function (e) {
                e.call(d, t, n, pe)
            })
        }

        function me(e) {
            var t = void 0;
            if (ge("beforeSanitizeElements", e, null), function (e) {
                    return !(e instanceof f || e instanceof g || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof a && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI)
                }(e)) return C(e), !0;
            var n = Le(e.nodeName);
            if (ge("uponSanitizeElement", e, {
                    tagName: n,
                    allowedTags: D
                }), ("svg" === n || "math" === n) && 0 !== e.querySelectorAll("p, br").length) return C(e), !0;
            if (D[n] && !U[n]) return "noscript" === n && $e(/<\/noscript/i, e.innerHTML) ? (C(e), !0) : "noembed" === n && $e(/<\/noembed/i, e.innerHTML) ? (C(e), !0) : (!Y || e.firstElementChild || e.content && e.content.firstElementChild || !$e(/</g, e.textContent) || (Te(d.removed, {
                element: e.cloneNode()
            }), e.innerHTML ? e.innerHTML = Re(e.innerHTML, /</g, "&lt;") : e.innerHTML = Re(e.textContent, /</g, "&lt;")), V && 3 === e.nodeType && (t = e.textContent, t = Re(t, O, " "), t = Re(t, $, " "), e.textContent !== t && (Te(d.removed, {
                element: e.cloneNode()
            }), e.textContent = t)), ge("afterSanitizeElements", e, null), !1);
            if (ie && !se[n] && "function" == typeof e.insertAdjacentHTML) try {
                var r = e.innerHTML;
                e.insertAdjacentHTML("AfterEnd", b ? b.createHTML(r) : r)
            } catch (e) {}
            return C(e), !0
        }

        function ve(e, t, n) {
            if (re && ("id" === t || "name" === t) && (n in l || n in de)) return !1;
            if (W && $e(M, t));
            else if (Z && $e(N, t));
            else {
                if (!q[t] || B[t]) return !1;
                if (ce[t]);
                else if ($e(j, Re(n, P, "")));
                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== Fe(n, "data:") || !le[e])
                    if (G && !$e(z, Re(n, P, "")));
                    else if (n) return !1
            }
            return !0
        }

        function ye(e) {
            var t = void 0,
                n = void 0,
                r = void 0,
                i = void 0,
                a = void 0;
            ge("beforeSanitizeAttributes", e, null);
            var o = e.attributes;
            if (o) {
                var s = {
                    attrName: "",
                    attrValue: "",
                    keepAttr: !0,
                    allowedAttributes: q
                };
                for (a = o.length; a--;) {
                    var l = t = o[a],
                        c = l.name,
                        u = l.namespaceURI;
                    if (n = Oe(t.value), r = Le(c), s.attrName = r, s.attrValue = n, s.keepAttr = !0, s.forceKeepAttr = void 0, ge("uponSanitizeAttribute", e, s), n = s.attrValue, !s.forceKeepAttr) {
                        if ("name" === r && "IMG" === e.nodeName && o.id) i = o.id, o = Ee(o, []), R("id", e), R(c, e), _e(o, i) > a && e.setAttribute("id", i.value);
                        else {
                            if ("INPUT" === e.nodeName && "type" === r && "file" === n && s.keepAttr && (q[r] || !B[r])) continue;
                            "id" === c && e.setAttribute(c, ""), R(c, e)
                        }
                        if (s.keepAttr)
                            if (Y && $e(/\/>/i, n)) R(c, e);
                            else if ($e(/svg|math/i, e.namespaceURI) && $e(Me("</(" + Ae(ke(se), "|") + ")", "i"), n)) R(c, e);
                        else {
                            V && (n = Re(n, O, " "), n = Re(n, $, " "));
                            var p = e.nodeName.toLowerCase();
                            if (ve(p, r, n)) try {
                                u ? e.setAttributeNS(u, c, n) : e.setAttribute(c, n), Se(d.removed)
                            } catch (e) {}
                        }
                    }
                }
                ge("afterSanitizeAttributes", e, null)
            }
        }

        function be(e) {
            var t = void 0,
                n = he(e);
            for (ge("beforeSanitizeShadowDOM", e, null); t = n.nextNode();) ge("uponSanitizeShadowNode", t, null), me(t) || (t.content instanceof p && be(t.content), ye(t));
            ge("afterSanitizeShadowDOM", e, null)
        }
        return d.sanitize = function (e, t) {
            var n = void 0,
                r = void 0,
                i = void 0,
                a = void 0,
                o = void 0;
            if ("string" != typeof (e = e || "\x3c!--\x3e") && !fe(e)) {
                if ("function" != typeof e.toString) throw Ne("toString is not a function");
                if ("string" != typeof (e = e.toString())) throw Ne("dirty is not a string, aborting")
            }
            if (!d.isSupported) {
                if ("object" === et(c.toStaticHTML) || "function" == typeof c.toStaticHTML) {
                    if ("string" == typeof e) return c.toStaticHTML(e);
                    if (fe(e)) return c.toStaticHTML(e.outerHTML)
                }
                return e
            }
            if (K || L(t), d.removed = [], "string" == typeof e && (ae = !1), ae);
            else if (e instanceof h) 1 === (r = (n = F("\x3c!--\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === r.nodeName ? n = r : "HTML" === r.nodeName ? n = r : n.appendChild(r);
            else {
                if (!J && !V && !X && ne && -1 === e.indexOf("<")) return b ? b.createHTML(e) : e;
                if (!(n = F(e))) return J ? null : k
            }
            n && Q && C(n.firstChild);
            for (var s = he(ae ? e : n); i = s.nextNode();) 3 === i.nodeType && i === a || me(i) || (i.content instanceof p && be(i.content), ye(i), a = i);
            if (a = null, ae) return e;
            if (J) {
                if (ee)
                    for (o = S.call(n.ownerDocument); n.firstChild;) o.appendChild(n.firstChild);
                else o = n;
                return te && (o = T.call(u, o, !0)), o
            }
            var l = X ? n.outerHTML : n.innerHTML;
            return V && (l = Re(l, O, " "), l = Re(l, $, " ")), b && ne ? b.createHTML(l) : l
        }, d.setConfig = function (e) {
            L(e), K = !0
        }, d.clearConfig = function () {
            pe = null, K = !1
        }, d.isValidAttribute = function (e, t, n) {
            pe || L({});
            var r = Le(e),
                i = Le(t);
            return ve(r, i, n)
        }, d.addHook = function (e, t) {
            "function" == typeof t && (E[e] = E[e] || [], Te(E[e], t))
        }, d.removeHook = function (e) {
            E[e] && Se(E[e])
        }, d.removeHooks = function (e) {
            E[e] && (E[e] = [])
        }, d.removeAllHooks = function () {
            E = {}
        }, d
    }();

    function H(e) {
        var t, n = e.loaded,
            r = e.total,
            i = e.step;
        P || function () {
            var e = g("div");
            e.classList.add("progress"), o(v, e), P = e
        }(), t = i ? 80 < (t = parseInt(P.style.width || 0, 10) + i) ? 80 : t : Math.floor(n / r * 100), P.style.opacity = 1, P.style.width = 95 <= t ? "100%" : t + "%", 95 <= t && (clearTimeout(j), j = setTimeout(function (e) {
            P.style.opacity = 0, P.style.width = "0%"
        }, 200))
    }
    var q = {};

    function I(a, e, t) {
        void 0 === e && (e = !1), void 0 === t && (t = {});

        function n() {
            o.addEventListener.apply(o, arguments)
        }
        var o = new XMLHttpRequest,
            r = q[a];
        if (r) return {
            then: function (e) {
                return e(r.content, r.opt)
            },
            abort: p
        };
        for (var i in o.open("GET", a), t) l.call(t, i) && o.setRequestHeader(i, t[i]);
        return o.send(), {
            then: function (r, i) {
                if (void 0 === i && (i = p), e) {
                    var t = setInterval(function (e) {
                        return H({
                            step: Math.floor(5 * Math.random() + 1)
                        })
                    }, 500);
                    n("progress", H), n("loadend", function (e) {
                        H(e), clearInterval(t)
                    })
                }
                n("error", i), n("load", function (e) {
                    var t = e.target;
                    if (400 <= t.status) i(t);
                    else {
                        var n = q[a] = {
                            content: t.response,
                            opt: {
                                updatedAt: o.getResponseHeader("last-modified")
                            }
                        };
                        r(n.content, n.opt)
                    }
                })
            },
            abort: function (e) {
                return 4 !== o.readyState && o.abort()
            }
        }
    }

    function U(e, t) {
        e.innerHTML = e.innerHTML.replace(/var\(\s*--theme-color.*?\)/g, t)
    }

    function B(e, t, r, i) {
        void 0 === i && (i = p);
        var a = e._hooks[t],
            o = function (t) {
                var e = a[t];
                if (t >= a.length) i(r);
                else if ("function" == typeof e)
                    if (2 === e.length) e(r, function (e) {
                        r = e, o(t + 1)
                    });
                    else {
                        var n = e(r);
                        r = void 0 === n ? r : n, o(t + 1)
                    }
                else o(t + 1)
            };
        o(0)
    }
    var Z = u.title;

    function W() {
        var e = m("section.cover");
        if (e) {
            var t = e.getBoundingClientRect().height;
            window.pageYOffset >= t || e.classList.contains("hidden") ? _(v, "add", "sticky") : _(v, "remove", "sticky")
        }
    }

    function G(e, t, r, n) {
        var i = [];
        null != (t = m(t)) && (i = b(t, "a"));
        var a, o = decodeURI(e.toURL(e.getCurrentPath()));
        return i.sort(function (e, t) {
            return t.href.length - e.href.length
        }).forEach(function (e) {
            var t = e.getAttribute("href"),
                n = r ? e.parentNode : e;
            0 !== o.indexOf(t) || a ? _(n, "remove", "active") : (a = e, _(n, "add", "active"))
        }), n && (u.title = a ? a.title || a.innerText + " - " + Z : Z), a
    }
    var Y = decodeURIComponent,
        V = encodeURIComponent;

    function X(e) {
        var n = {};
        return (e = e.trim().replace(/^(\?|#|&)/, "")) && e.split("&").forEach(function (e) {
            var t = e.replace(/\+/g, " ").split("=");
            n[t[0]] = t[1] && Y(t[1])
        }), n
    }

    function K(e, t) {
        void 0 === t && (t = []);
        var n = [];
        for (var r in e) - 1 < t.indexOf(r) || n.push(e[r] ? (V(r) + "=" + V(e[r])).toLowerCase() : V(r));
        return n.length ? "?" + n.join("&") : ""
    }
    var Q = s(function (e) {
            return /(:|(\/{2}))/g.test(e)
        }),
        J = s(function (e) {
            return e.split(/[?#]/)[0]
        }),
        ee = s(function (e) {
            if (/\/$/g.test(e)) return e;
            var t = e.match(/(\S*\/)[^/]+$/);
            return t ? t[1] : ""
        }),
        te = s(function (e) {
            return e.replace(/^\/+/, "/").replace(/([^:])\/{2,}/g, "$1/")
        }),
        ne = s(function (e) {
            for (var t = e.replace(/^\//, "").split("/"), n = [], r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                ".." === a ? n.pop() : "." !== a && n.push(a)
            }
            return "/" + n.join("/")
        });

    function re() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return te(e.join("/"))
    }
    var ie = s(function (e) {
        return e.replace("#", "?id=")
    });

    function ae(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var oe = (function (e, t, n) {
        return t && ae(e.prototype, t), n && ae(e, n), e
    }(se, [{
        key: "getIntermediateValue",
        value: function (e) {
            return this.decimal ? e : Math.round(e)
        }
    }, {
        key: "getFinalValue",
        value: function () {
            return this.end
        }
    }]), se);

    function se() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, se), this.start = e.start, this.end = e.end, this.decimal = e.decimal
    }

    function le(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var ce = (function (e, t, n) {
        return t && le(e.prototype, t), n && le(e, n), e
    }(ue, [{
        key: "begin",
        value: function () {
            return this.isRunning || this.next === this.end || (this.frame = window.requestAnimationFrame(this._tick.bind(this))), this
        }
    }, {
        key: "stop",
        value: function () {
            return window.cancelAnimationFrame(this.frame), this.isRunning = !1, this.frame = null, this.timeStart = null, this.next = null, this
        }
    }, {
        key: "on",
        value: function (e, t) {
            return this.events[e] = this.events[e] || [], this.events[e].push(t), this
        }
    }, {
        key: "_emit",
        value: function (e, t) {
            var n = this,
                r = this.events[e];
            r && r.forEach(function (e) {
                return e.call(n, t)
            })
        }
    }, {
        key: "_tick",
        value: function (e) {
            this.isRunning = !0;
            var t = this.next || this.start;
            this.timeStart || (this.timeStart = e), this.timeElapsed = e - this.timeStart, this.next = this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration), this._shouldTick(t) ? (this._emit("tick", this.tweener.getIntermediateValue(this.next)), this.frame = window.requestAnimationFrame(this._tick.bind(this))) : (this._emit("tick", this.tweener.getFinalValue()), this._emit("done", null))
        }
    }, {
        key: "_shouldTick",
        value: function (e) {
            return {
                up: this.next < this.end && e <= this.next,
                down: this.next > this.end && e >= this.next
            } [this.direction]
        }
    }, {
        key: "_defaultEase",
        value: function (e, t, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
        }
    }]), ue);

    function ue() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, ue), this.duration = e.duration || 1e3, this.ease = e.easing || this._defaultEase, this.tweener = e.tweener || new oe(e), this.start = this.tweener.start, this.end = this.tweener.end, this.frame = null, this.next = null, this.isRunning = !1, this.events = {}, this.direction = this.start < this.end ? "up" : "down"
    }
    var pe = {},
        de = !1,
        he = null,
        fe = !0,
        ge = 0;

    function me(e) {
        if (fe) {
            for (var t, n = m(".sidebar"), r = b(".anchor"), i = y(n, ".sidebar-nav"), a = y(n, "li.active"), o = document.documentElement, s = (o && o.scrollTop || document.body.scrollTop) - ge, l = 0, c = r.length; l < c; l += 1) {
                var u = r[l];
                if (u.offsetTop > s) {
                    t = t || u;
                    break
                }
                t = u
            }
            if (t) {
                var p = pe[ve(e, t.getAttribute("data-id"))];
                if (p && p !== a && (a && a.classList.remove("active"), p.classList.add("active"), a = p, !de && v.classList.contains("sticky"))) {
                    var d = n.clientHeight,
                        h = a.offsetTop + a.clientHeight + 40,
                        f = h - 0 < d,
                        g = a.offsetTop >= i.scrollTop && h <= i.scrollTop + d ? i.scrollTop : f ? 0 : h - d;
                    n.scrollTop = g
                }
            }
        }
    }

    function ve(e, t) {
        return decodeURIComponent(e) + "?id=" + decodeURIComponent(t)
    }

    function ye(e, t) {
        if (t) {
            var n = S().topMargin,
                r = y("#" + t);
            r && function (e, t) {
                void 0 === t && (t = 0), he && he.stop(), fe = !1, he = new ce({
                    start: window.pageYOffset,
                    end: e.getBoundingClientRect().top + window.pageYOffset - t,
                    duration: 500
                }).on("tick", function (e) {
                    return window.scrollTo(0, e)
                }).on("done", function () {
                    fe = !0, he = null
                }).begin()
            }(r, n);
            var i = pe[ve(e, t)],
                a = y(m(".sidebar"), "li.active");
            a && a.classList.remove("active"), i && i.classList.add("active")
        }
    }
    var be = u.scrollingElement || u.documentElement;
    var it = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function at(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var ot = at(function (v, e) {
        ! function () {
            var b = {
                newline: /^\n+/,
                code: /^( {4}[^\n]+\n*)+/,
                fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
                blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
                def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                nptable: p,
                table: p,
                lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
                _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
                text: /^[^\n]+/
            };

            function l(e) {
                this.tokens = [], this.tokens.links = Object.create(null), this.options = e || m.defaults, this.rules = b.normal, this.options.pedantic ? this.rules = b.pedantic : this.options.gfm && (this.rules = b.gfm)
            }
            b._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, b._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, b.def = e(b.def).replace("label", b._label).replace("title", b._title).getRegex(), b.bullet = /(?:[*+-]|\d{1,9}\.)/, b.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/, b.item = e(b.item, "gm").replace(/bull/g, b.bullet).getRegex(), b.list = e(b.list).replace(/bull/g, b.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + b.def.source + ")").getRegex(), b._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", b._comment = /<!--(?!-?>)[\s\S]*?-->/, b.html = e(b.html, "i").replace("comment", b._comment).replace("tag", b._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), b.paragraph = e(b._paragraph).replace("hr", b.hr).replace("heading", " {0,3}#{1,6} +").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", b._tag).getRegex(), b.blockquote = e(b.blockquote).replace("paragraph", b.paragraph).getRegex(), b.normal = h({}, b), b.gfm = h({}, b.normal, {
                nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
                table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
            }), b.pedantic = h({}, b.normal, {
                html: e("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", b._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
                fences: p,
                paragraph: e(b.normal._paragraph).replace("hr", b.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", b.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
            }), l.rules = b, l.lex = function (e, t) {
                return new l(t).lex(e)
            }, l.prototype.lex = function (e) {
                return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
            }, l.prototype.token = function (e, t) {
                var n, r, i, a, o, s, l, c, u, p, d, h, f, g, m, v;
                for (e = e.replace(/^ +$/gm, ""); e;)
                    if ((i = this.rules.newline.exec(e)) && (e = e.substring(i[0].length), 1 < i[0].length && this.tokens.push({
                            type: "space"
                        })), i = this.rules.code.exec(e)) {
                        var y = this.tokens[this.tokens.length - 1];
                        e = e.substring(i[0].length), y && "paragraph" === y.type ? y.text += "\n" + i[0].trimRight() : (i = i[0].replace(/^ {4}/gm, ""), this.tokens.push({
                            type: "code",
                            codeBlockStyle: "indented",
                            text: this.options.pedantic ? i : w(i, "\n")
                        }))
                    } else if (i = this.rules.fences.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "code",
                    lang: i[2] ? i[2].trim() : i[2],
                    text: i[3] || ""
                });
                else if (i = this.rules.heading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "heading",
                    depth: i[1].length,
                    text: i[2]
                });
                else if ((i = this.rules.nptable.exec(e)) && (s = {
                        type: "table",
                        header: x(i[1].replace(/^ *| *\| *$/g, "")),
                        align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                    }).header.length === s.align.length) {
                    for (e = e.substring(i[0].length), d = 0; d < s.align.length; d++) /^ *-+: *$/.test(s.align[d]) ? s.align[d] = "right" : /^ *:-+: *$/.test(s.align[d]) ? s.align[d] = "center" : /^ *:-+ *$/.test(s.align[d]) ? s.align[d] = "left" : s.align[d] = null;
                    for (d = 0; d < s.cells.length; d++) s.cells[d] = x(s.cells[d], s.header.length);
                    this.tokens.push(s)
                } else if (i = this.rules.hr.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "hr"
                });
                else if (i = this.rules.blockquote.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "blockquote_start"
                }), i = i[0].replace(/^ *> ?/gm, ""), this.token(i, t), this.tokens.push({
                    type: "blockquote_end"
                });
                else if (i = this.rules.list.exec(e)) {
                    for (e = e.substring(i[0].length), l = {
                            type: "list_start",
                            ordered: g = 1 < (a = i[2]).length,
                            start: g ? +a : "",
                            loose: !1
                        }, this.tokens.push(l), n = !(c = []), f = (i = i[0].match(this.rules.item)).length, d = 0; d < f; d++) p = (s = i[d]).length, ~(s = s.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ") && (p -= s.length, s = this.options.pedantic ? s.replace(/^ {1,4}/gm, "") : s.replace(new RegExp("^ {1," + p + "}", "gm"), "")), d !== f - 1 && (o = b.bullet.exec(i[d + 1])[0], (1 < a.length ? 1 === o.length : 1 < o.length || this.options.smartLists && o !== a) && (e = i.slice(d + 1).join("\n") + e, d = f - 1)), r = n || /\n\n(?!\s*$)/.test(s), d !== f - 1 && (n = "\n" === s.charAt(s.length - 1), r = r || n), r && (l.loose = !0), v = void 0, (m = /^\[[ xX]\] /.test(s)) && (v = " " !== s[1], s = s.replace(/^\[[ xX]\] +/, "")), u = {
                        type: "list_item_start",
                        task: m,
                        checked: v,
                        loose: r
                    }, c.push(u), this.tokens.push(u), this.token(s, !1), this.tokens.push({
                        type: "list_item_end"
                    });
                    if (l.loose)
                        for (f = c.length, d = 0; d < f; d++) c[d].loose = !0;
                    this.tokens.push({
                        type: "list_end"
                    })
                } else if (i = this.rules.html.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: this.options.sanitize ? "paragraph" : "html",
                    pre: !this.options.sanitizer && ("pre" === i[1] || "script" === i[1] || "style" === i[1]),
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : k(i[0]) : i[0]
                });
                else if (t && (i = this.rules.def.exec(e))) e = e.substring(i[0].length), i[3] && (i[3] = i[3].substring(1, i[3].length - 1)), h = i[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[h] || (this.tokens.links[h] = {
                    href: i[2],
                    title: i[3]
                });
                else if ((i = this.rules.table.exec(e)) && (s = {
                        type: "table",
                        header: x(i[1].replace(/^ *| *\| *$/g, "")),
                        align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                    }).header.length === s.align.length) {
                    for (e = e.substring(i[0].length), d = 0; d < s.align.length; d++) /^ *-+: *$/.test(s.align[d]) ? s.align[d] = "right" : /^ *:-+: *$/.test(s.align[d]) ? s.align[d] = "center" : /^ *:-+ *$/.test(s.align[d]) ? s.align[d] = "left" : s.align[d] = null;
                    for (d = 0; d < s.cells.length; d++) s.cells[d] = x(s.cells[d].replace(/^ *\| *| *\| *$/g, ""), s.header.length);
                    this.tokens.push(s)
                } else if (i = this.rules.lheading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "heading",
                    depth: "=" === i[2].charAt(0) ? 1 : 2,
                    text: i[1]
                });
                else if (t && (i = this.rules.paragraph.exec(e))) e = e.substring(i[0].length), this.tokens.push({
                    type: "paragraph",
                    text: "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1) : i[1]
                });
                else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "text",
                    text: i[0]
                });
                else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                return this.tokens
            };
            var n = {
                escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                url: p,
                tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
                em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
                code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                br: /^( {2,}|\\)\n(?!\s*$)/,
                del: p,
                text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
            };

            function u(e, t) {
                if (this.options = t || m.defaults, this.links = e, this.rules = n.normal, this.renderer = this.options.renderer || new r, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                this.options.pedantic ? this.rules = n.pedantic : this.options.gfm && (this.options.breaks ? this.rules = n.breaks : this.rules = n.gfm)
            }

            function r(e) {
                this.options = e || m.defaults
            }

            function i() {}

            function c(e) {
                this.tokens = [], this.token = null, this.options = e || m.defaults, this.options.renderer = this.options.renderer || new r, this.renderer = this.options.renderer, this.renderer.options = this.options, this.slugger = new t
            }

            function t() {
                this.seen = {}
            }

            function k(e, t) {
                if (t) {
                    if (k.escapeTest.test(e)) return e.replace(k.escapeReplace, function (e) {
                        return k.replacements[e]
                    })
                } else if (k.escapeTestNoEncode.test(e)) return e.replace(k.escapeReplaceNoEncode, function (e) {
                    return k.replacements[e]
                });
                return e
            }

            function d(e) {
                return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (e, t) {
                    return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                })
            }

            function e(n, e) {
                return n = n.source || n, e = e || "", {
                    replace: function (e, t) {
                        return t = (t = t.source || t).replace(/(^|[^\[])\^/g, "$1"), n = n.replace(e, t), this
                    },
                    getRegex: function () {
                        return new RegExp(n, e)
                    }
                }
            }

            function a(e, t, n) {
                if (e) {
                    try {
                        var r = decodeURIComponent(d(n)).replace(/[^\w:]/g, "").toLowerCase()
                    } catch (e) {
                        return null
                    }
                    if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null
                }
                t && !s.test(n) && (n = function (e, t) {
                    o[" " + e] || (/^[^:]+:\/*[^/]*$/.test(e) ? o[" " + e] = e + "/" : o[" " + e] = w(e, "/", !0));
                    return e = o[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + t : e + t
                }(t, n));
                try {
                    n = encodeURI(n).replace(/%25/g, "%")
                } catch (e) {
                    return null
                }
                return n
            }
            n._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~", n.em = e(n.em).replace(/punctuation/g, n._punctuation).getRegex(), n._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, n._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, n._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, n.autolink = e(n.autolink).replace("scheme", n._scheme).replace("email", n._email).getRegex(), n._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, n.tag = e(n.tag).replace("comment", b._comment).replace("attribute", n._attribute).getRegex(), n._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, n._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/, n._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, n.link = e(n.link).replace("label", n._label).replace("href", n._href).replace("title", n._title).getRegex(), n.reflink = e(n.reflink).replace("label", n._label).getRegex(), n.normal = h({}, n), n.pedantic = h({}, n.normal, {
                strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
                link: e(/^!?\[(label)\]\((.*?)\)/).replace("label", n._label).getRegex(),
                reflink: e(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", n._label).getRegex()
            }), n.gfm = h({}, n.normal, {
                escape: e(n.escape).replace("])", "~|])").getRegex(),
                _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                del: /^~+(?=\S)([\s\S]*?\S)~+/,
                text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
            }), n.gfm.url = e(n.gfm.url, "i").replace("email", n.gfm._extended_email).getRegex(), n.breaks = h({}, n.gfm, {
                br: e(n.br).replace("{2,}", "*").getRegex(),
                text: e(n.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
            }), u.rules = n, u.output = function (e, t, n) {
                return new u(t, n).output(e)
            }, u.prototype.output = function (e) {
                for (var t, n, r, i, a, o, s = ""; e;)
                    if (a = this.rules.escape.exec(e)) e = e.substring(a[0].length), s += k(a[1]);
                    else if (a = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(a[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1), !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(a[0]) ? this.inRawBlock = !0 : this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0]) && (this.inRawBlock = !1), e = e.substring(a[0].length), s += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : k(a[0]) : a[0];
                else if (a = this.rules.link.exec(e)) {
                    var l = f(a[2], "()");
                    if (-1 < l) {
                        var c = 4 + a[1].length + l;
                        a[2] = a[2].substring(0, l), a[0] = a[0].substring(0, c).trim(), a[3] = ""
                    }
                    e = e.substring(a[0].length), this.inLink = !0, r = a[2], i = this.options.pedantic ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r)) ? (r = t[1], t[3]) : "" : a[3] ? a[3].slice(1, -1) : "", r = r.trim().replace(/^<([\s\S]*)>$/, "$1"), s += this.outputLink(a, {
                        href: u.escapes(r),
                        title: u.escapes(i)
                    }), this.inLink = !1
                } else if ((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) {
                    if (e = e.substring(a[0].length), t = (a[2] || a[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                        s += a[0].charAt(0), e = a[0].substring(1) + e;
                        continue
                    }
                    this.inLink = !0, s += this.outputLink(a, t), this.inLink = !1
                } else if (a = this.rules.strong.exec(e)) e = e.substring(a[0].length), s += this.renderer.strong(this.output(a[4] || a[3] || a[2] || a[1]));
                else if (a = this.rules.em.exec(e)) e = e.substring(a[0].length), s += this.renderer.em(this.output(a[6] || a[5] || a[4] || a[3] || a[2] || a[1]));
                else if (a = this.rules.code.exec(e)) e = e.substring(a[0].length), s += this.renderer.codespan(k(a[2].trim(), !0));
                else if (a = this.rules.br.exec(e)) e = e.substring(a[0].length), s += this.renderer.br();
                else if (a = this.rules.del.exec(e)) e = e.substring(a[0].length), s += this.renderer.del(this.output(a[1]));
                else if (a = this.rules.autolink.exec(e)) e = e.substring(a[0].length), r = "@" === a[2] ? "mailto:" + (n = k(this.mangle(a[1]))) : n = k(a[1]), s += this.renderer.link(r, null, n);
                else if (this.inLink || !(a = this.rules.url.exec(e))) {
                    if (a = this.rules.text.exec(e)) e = e.substring(a[0].length), this.inRawBlock ? s += this.renderer.text(this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : k(a[0]) : a[0]) : s += this.renderer.text(k(this.smartypants(a[0])));
                    else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                } else {
                    if ("@" === a[2]) r = "mailto:" + (n = k(a[0]));
                    else {
                        for (; o = a[0], a[0] = this.rules._backpedal.exec(a[0])[0], o !== a[0];);
                        n = k(a[0]), r = "www." === a[1] ? "http://" + n : n
                    }
                    e = e.substring(a[0].length), s += this.renderer.link(r, null, n)
                }
                return s
            }, u.escapes = function (e) {
                return e ? e.replace(u.rules._escapes, "$1") : e
            }, u.prototype.outputLink = function (e, t) {
                var n = t.href,
                    r = t.title ? k(t.title) : null;
                return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, k(e[1]))
            }, u.prototype.smartypants = function (e) {
                return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
            }, u.prototype.mangle = function (e) {
                if (!this.options.mangle) return e;
                for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), .5 < Math.random() && (t = "x" + t.toString(16)), n += "&#" + t + ";";
                return n
            }, r.prototype.code = function (e, t, n) {
                var r = (t || "").match(/\S*/)[0];
                if (this.options.highlight) {
                    var i = this.options.highlight(e, r);
                    null != i && i !== e && (n = !0, e = i)
                }
                return r ? '<pre><code class="' + this.options.langPrefix + k(r, !0) + '">' + (n ? e : k(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : k(e, !0)) + "</code></pre>"
            }, r.prototype.blockquote = function (e) {
                return "<blockquote>\n" + e + "</blockquote>\n"
            }, r.prototype.html = function (e) {
                return e
            }, r.prototype.heading = function (e, t, n, r) {
                return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
            }, r.prototype.hr = function () {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }, r.prototype.list = function (e, t, n) {
                var r = t ? "ol" : "ul";
                return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
            }, r.prototype.listitem = function (e) {
                return "<li>" + e + "</li>\n"
            }, r.prototype.checkbox = function (e) {
                return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
            }, r.prototype.paragraph = function (e) {
                return "<p>" + e + "</p>\n"
            }, r.prototype.table = function (e, t) {
                return "<table>\n<thead>\n" + e + "</thead>\n" + (t = t && "<tbody>" + t + "</tbody>") + "</table>\n"
            }, r.prototype.tablerow = function (e) {
                return "<tr>\n" + e + "</tr>\n"
            }, r.prototype.tablecell = function (e, t) {
                var n = t.header ? "th" : "td";
                return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
            }, r.prototype.strong = function (e) {
                return "<strong>" + e + "</strong>"
            }, r.prototype.em = function (e) {
                return "<em>" + e + "</em>"
            }, r.prototype.codespan = function (e) {
                return "<code>" + e + "</code>"
            }, r.prototype.br = function () {
                return this.options.xhtml ? "<br/>" : "<br>"
            }, r.prototype.del = function (e) {
                return "<del>" + e + "</del>"
            }, r.prototype.link = function (e, t, n) {
                if (null === (e = a(this.options.sanitize, this.options.baseUrl, e))) return n;
                var r = '<a href="' + k(e) + '"';
                return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>"
            }, r.prototype.image = function (e, t, n) {
                if (null === (e = a(this.options.sanitize, this.options.baseUrl, e))) return n;
                var r = '<img src="' + e + '" alt="' + n + '"';
                return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
            }, r.prototype.text = function (e) {
                return e
            }, i.prototype.strong = i.prototype.em = i.prototype.codespan = i.prototype.del = i.prototype.text = function (e) {
                return e
            }, i.prototype.link = i.prototype.image = function (e, t, n) {
                return "" + n
            }, i.prototype.br = function () {
                return ""
            }, c.parse = function (e, t) {
                return new c(t).parse(e)
            }, c.prototype.parse = function (e) {
                this.inline = new u(e.links, this.options), this.inlineText = new u(e.links, h({}, this.options, {
                    renderer: new i
                })), this.tokens = e.reverse();
                for (var t = ""; this.next();) t += this.tok();
                return t
            }, c.prototype.next = function () {
                return this.token = this.tokens.pop(), this.token
            }, c.prototype.peek = function () {
                return this.tokens[this.tokens.length - 1] || 0
            }, c.prototype.parseText = function () {
                for (var e = this.token.text;
                    "text" === this.peek().type;) e += "\n" + this.next().text;
                return this.inline.output(e)
            }, c.prototype.tok = function () {
                switch (this.token.type) {
                    case "space":
                        return "";
                    case "hr":
                        return this.renderer.hr();
                    case "heading":
                        return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, d(this.inlineText.output(this.token.text)), this.slugger);
                    case "code":
                        return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                    case "table":
                        var e, t, n, r, i = "",
                            a = "";
                        for (n = "", e = 0; e < this.token.header.length; e++) n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                            header: !0,
                            align: this.token.align[e]
                        });
                        for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                            for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                                header: !1,
                                align: this.token.align[r]
                            });
                            a += this.renderer.tablerow(n)
                        }
                        return this.renderer.table(i, a);
                    case "blockquote_start":
                        for (a = "";
                            "blockquote_end" !== this.next().type;) a += this.tok();
                        return this.renderer.blockquote(a);
                    case "list_start":
                        a = "";
                        for (var o = this.token.ordered, s = this.token.start;
                            "list_end" !== this.next().type;) a += this.tok();
                        return this.renderer.list(a, o, s);
                    case "list_item_start":
                        a = "";
                        var l = this.token.loose,
                            c = this.token.checked,
                            u = this.token.task;
                        for (this.token.task && (a += this.renderer.checkbox(c));
                            "list_item_end" !== this.next().type;) a += l || "text" !== this.token.type ? this.tok() : this.parseText();
                        return this.renderer.listitem(a, u, c);
                    case "html":
                        return this.renderer.html(this.token.text);
                    case "paragraph":
                        return this.renderer.paragraph(this.inline.output(this.token.text));
                    case "text":
                        return this.renderer.paragraph(this.parseText());
                    default:
                        var p = 'Token with "' + this.token.type + '" type was not found.';
                        if (!this.options.silent) throw new Error(p);
                        console.log(p)
                }
            }, t.prototype.slug = function (e) {
                var t = e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
                if (this.seen.hasOwnProperty(t))
                    for (var n = t; this.seen[n]++, t = n + "-" + this.seen[n], this.seen.hasOwnProperty(t););
                return this.seen[t] = 0, t
            }, k.escapeTest = /[&<>"']/, k.escapeReplace = /[&<>"']/g, k.replacements = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }, k.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/, k.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
            var o = {},
                s = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

            function p() {}

            function h(e) {
                for (var t, n, r = arguments, i = 1; i < arguments.length; i++)
                    for (n in t = r[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }

            function x(e, t) {
                var n = e.replace(/\|/g, function (e, t, n) {
                        for (var r = !1, i = t; 0 <= --i && "\\" === n[i];) r = !r;
                        return r ? "|" : " |"
                    }).split(/ \|/),
                    r = 0;
                if (n.length > t) n.splice(t);
                else
                    for (; n.length < t;) n.push("");
                for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
                return n
            }

            function w(e, t, n) {
                if (0 === e.length) return "";
                for (var r = 0; r < e.length;) {
                    var i = e.charAt(e.length - r - 1);
                    if (i !== t || n) {
                        if (i === t || !n) break;
                        r++
                    } else r++
                }
                return e.substr(0, e.length - r)
            }

            function f(e, t) {
                if (-1 === e.indexOf(t[1])) return -1;
                for (var n = 0, r = 0; r < e.length; r++)
                    if ("\\" === e[r]) r++;
                    else if (e[r] === t[0]) n++;
                else if (e[r] === t[1] && --n < 0) return r;
                return -1
            }

            function g(e) {
                e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
            }

            function m(e, n, r) {
                if (null == e) throw new Error("marked(): input parameter is undefined or null");
                if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                if (r || "function" == typeof n) {
                    r || (r = n, n = null), g(n = h({}, m.defaults, n || {}));
                    var i, a, o = n.highlight,
                        t = 0;
                    try {
                        i = l.lex(e, n)
                    } catch (e) {
                        return r(e)
                    }
                    a = i.length;

                    function s(t) {
                        if (t) return n.highlight = o, r(t);
                        var e;
                        try {
                            e = c.parse(i, n)
                        } catch (e) {
                            t = e
                        }
                        return n.highlight = o, t ? r(t) : r(null, e)
                    }
                    if (!o || o.length < 3) return s();
                    if (delete n.highlight, !a) return s();
                    for (; t < i.length; t++) ! function (n) {
                        "code" !== n.type ? --a || s() : o(n.text, n.lang, function (e, t) {
                            return e ? s(e) : null == t || t === n.text ? --a || s() : (n.text = t, n.escaped = !0, void(--a || s()))
                        })
                    }(i[t])
                } else try {
                    return g(n = n && h({}, m.defaults, n)), c.parse(l.lex(e, n), n)
                } catch (e) {
                    if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (n || m.defaults).silent) return "<p>An error occurred:</p><pre>" + k(e.message + "", !0) + "</pre>";
                    throw e
                }
            }
            p.exec = p, m.options = m.setOptions = function (e) {
                return h(m.defaults, e), m
            }, m.getDefaults = function () {
                return {
                    baseUrl: null,
                    breaks: !1,
                    gfm: !0,
                    headerIds: !0,
                    headerPrefix: "",
                    highlight: null,
                    langPrefix: "language-",
                    mangle: !0,
                    pedantic: !1,
                    renderer: new r,
                    sanitize: !1,
                    sanitizer: null,
                    silent: !1,
                    smartLists: !1,
                    smartypants: !1,
                    xhtml: !1
                }
            }, m.defaults = m.getDefaults(), m.Parser = c, m.parser = c.parse, m.Renderer = r, m.TextRenderer = i, m.Lexer = l, m.lexer = l.lex, m.InlineLexer = u, m.inlineLexer = u.output, m.Slugger = t, m.parse = m, v.exports = m
        }()
    });

    function st(e, t) {
        if (void 0 === t && (t = '<ul class="app-sub-sidebar">{inner}</ul>'), !e || !e.length) return "";
        var n = "";
        return e.forEach(function (e) {
            n += '<li><a class="section-link" href="' + e.slug + '">' + e.title + "</a></li>", e.children && (n += st(e.children, t))
        }), t.replace("{inner}", n)
    }

    function lt(e, t) {
        return '<p class="' + e + '">' + t.slice(5).trim() + "</p>"
    }

    function ct(e, r) {
        var i = [],
            a = {};
        return e.forEach(function (e) {
            var t = e.level || 1,
                n = t - 1;
            r < t || (a[n] ? a[n].children = (a[n].children || []).concat(e) : i.push(e), a[t] = e)
        }), i
    }
    var ut = {},
        pt = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;

    function dt(e) {
        return e.toLowerCase()
    }

    function ht(e) {
        if ("string" != typeof e) return "";
        var t = e.trim().replace(/[A-Z]+/g, dt).replace(/<[^>\d]+>/g, "").replace(pt, "").replace(/\s/g, "-").replace(/-+/g, "-").replace(/^(\d)/, "_$1"),
            n = ut[t];
        return n = l.call(ut, t) ? n + 1 : 0, (ut[t] = n) && (t = t + "-" + n), t
    }

    function ft(e, t) {
        return '<img class="emoji" src="https://github.githubassets.com/images/icons/emoji/' + t + '.png" alt="' + t + '" />'
    }

    function gt(e) {
        void 0 === e && (e = "");
        var r = {};
        return {
            str: e = e && e.replace(/^'/, "").replace(/'$/, "").replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, function (e, t, n) {
                return -1 === t.indexOf(":") ? (r[t] = n && n.replace(/&quot;/g, "") || !0, "") : e
            }).trim(),
            config: r
        }
    }
    ht.clear = function () {
        ut = {}
    };
    var mt, vt = at(function (e) {
        var c = function (c) {
            var u = /\blang(?:uage)?-([\w-]+)\b/i,
                t = 0,
                F = {
                    manual: c.Prism && c.Prism.manual,
                    disableWorkerMessageHandler: c.Prism && c.Prism.disableWorkerMessageHandler,
                    util: {
                        encode: function (e) {
                            return e instanceof O ? new O(e.type, F.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(F.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                        },
                        type: function (e) {
                            return Object.prototype.toString.call(e).slice(8, -1)
                        },
                        objId: function (e) {
                            return e.__id || Object.defineProperty(e, "__id", {
                                value: ++t
                            }), e.__id
                        },
                        clone: function n(e, r) {
                            var i, t, a = F.util.type(e);
                            switch (r = r || {}, a) {
                                case "Object":
                                    if (t = F.util.objId(e), r[t]) return r[t];
                                    for (var o in i = {}, r[t] = i, e) e.hasOwnProperty(o) && (i[o] = n(e[o], r));
                                    return i;
                                case "Array":
                                    return t = F.util.objId(e), r[t] ? r[t] : (i = [], r[t] = i, e.forEach(function (e, t) {
                                        i[t] = n(e, r)
                                    }), i);
                                default:
                                    return e
                            }
                        },
                        getLanguage: function (e) {
                            for (; e && !u.test(e.className);) e = e.parentElement;
                            return e ? (e.className.match(u) || [, "none"])[1].toLowerCase() : "none"
                        },
                        currentScript: function () {
                            if ("undefined" == typeof document) return null;
                            if ("currentScript" in document) return document.currentScript;
                            try {
                                throw new Error
                            } catch (e) {
                                var t = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
                                if (t) {
                                    var n = document.getElementsByTagName("script");
                                    for (var r in n)
                                        if (n[r].src == t) return n[r]
                                }
                                return null
                            }
                        }
                    },
                    languages: {
                        extend: function (e, t) {
                            var n = F.util.clone(F.languages[e]);
                            for (var r in t) n[r] = t[r];
                            return n
                        },
                        insertBefore: function (n, e, t, r) {
                            var i = (r = r || F.languages)[n],
                                a = {};
                            for (var o in i)
                                if (i.hasOwnProperty(o)) {
                                    if (o == e)
                                        for (var s in t) t.hasOwnProperty(s) && (a[s] = t[s]);
                                    t.hasOwnProperty(o) || (a[o] = i[o])
                                } var l = r[n];
                            return r[n] = a, F.languages.DFS(F.languages, function (e, t) {
                                t === l && e != n && (this[e] = a)
                            }), a
                        },
                        DFS: function e(t, n, r, i) {
                            i = i || {};
                            var a = F.util.objId;
                            for (var o in t)
                                if (t.hasOwnProperty(o)) {
                                    n.call(t, o, t[o], r || o);
                                    var s = t[o],
                                        l = F.util.type(s);
                                    "Object" !== l || i[a(s)] ? "Array" !== l || i[a(s)] || (i[a(s)] = !0, e(s, n, o, i)) : (i[a(s)] = !0, e(s, n, null, i))
                                }
                        }
                    },
                    plugins: {},
                    highlightAll: function (e, t) {
                        F.highlightAllUnder(document, e, t)
                    },
                    highlightAllUnder: function (e, t, n) {
                        var r = {
                            callback: n,
                            container: e,
                            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                        };
                        F.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), F.hooks.run("before-all-elements-highlight", r);
                        for (var i, a = 0; i = r.elements[a++];) F.highlightElement(i, !0 === t, r.callback)
                    },
                    highlightElement: function (e, t, n) {
                        var r = F.util.getLanguage(e),
                            i = F.languages[r];
                        e.className = e.className.replace(u, "").replace(/\s+/g, " ") + " language-" + r;
                        var a = e.parentNode;
                        a && "pre" === a.nodeName.toLowerCase() && (a.className = a.className.replace(u, "").replace(/\s+/g, " ") + " language-" + r);
                        var o = {
                            element: e,
                            language: r,
                            grammar: i,
                            code: e.textContent
                        };

                        function s(e) {
                            o.highlightedCode = e, F.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, F.hooks.run("after-highlight", o), F.hooks.run("complete", o), n && n.call(o.element)
                        }
                        if (F.hooks.run("before-sanity-check", o), !o.code) return F.hooks.run("complete", o), void(n && n.call(o.element));
                        if (F.hooks.run("before-highlight", o), o.grammar)
                            if (t && c.Worker) {
                                var l = new Worker(F.filename);
                                l.onmessage = function (e) {
                                    s(e.data)
                                }, l.postMessage(JSON.stringify({
                                    language: o.language,
                                    code: o.code,
                                    immediateClose: !0
                                }))
                            } else s(F.highlight(o.code, o.grammar, o.language));
                        else s(F.util.encode(o.code))
                    },
                    highlight: function (e, t, n) {
                        var r = {
                            code: e,
                            grammar: t,
                            language: n
                        };
                        return F.hooks.run("before-tokenize", r), r.tokens = F.tokenize(r.code, r.grammar), F.hooks.run("after-tokenize", r), O.stringify(F.util.encode(r.tokens), r.language)
                    },
                    matchGrammar: function (e, t, n, r, i, a, o) {
                        for (var s in n)
                            if (n.hasOwnProperty(s) && n[s]) {
                                var l = n[s];
                                l = Array.isArray(l) ? l : [l];
                                for (var c = 0; c < l.length; ++c) {
                                    if (o && o == s + "," + c) return;
                                    var u = l[c],
                                        p = u.inside,
                                        d = !!u.lookbehind,
                                        h = !!u.greedy,
                                        f = 0,
                                        g = u.alias;
                                    if (h && !u.pattern.global) {
                                        var m = u.pattern.toString().match(/[imsuy]*$/)[0];
                                        u.pattern = RegExp(u.pattern.source, m + "g")
                                    }
                                    u = u.pattern || u;
                                    for (var v = r, y = i; v < t.length; y += t[v].length, ++v) {
                                        var b = t[v];
                                        if (t.length > e.length) return;
                                        if (!(b instanceof O)) {
                                            if (h && v != t.length - 1) {
                                                if (u.lastIndex = y, !(S = u.exec(e))) break;
                                                for (var k = S.index + (d && S[1] ? S[1].length : 0), x = S.index + S[0].length, w = v, _ = y, A = t.length; w < A && (_ < x || !t[w].type && !t[w - 1].greedy); ++w)(_ += t[w].length) <= k && (++v, y = _);
                                                if (t[v] instanceof O) continue;
                                                T = w - v, b = e.slice(y, _), S.index -= y
                                            } else {
                                                u.lastIndex = 0;
                                                var S = u.exec(b),
                                                    T = 1
                                            }
                                            if (S) {
                                                d && (f = S[1] ? S[1].length : 0);
                                                x = (k = S.index + f) + (S = S[0].slice(f)).length;
                                                var E = b.slice(0, k),
                                                    L = b.slice(x),
                                                    C = [v, T];
                                                E && (++v, y += E.length, C.push(E));
                                                var R = new O(s, p ? F.tokenize(S, p) : S, g, S, h);
                                                if (C.push(R), L && C.push(L), Array.prototype.splice.apply(t, C), 1 != T && F.matchGrammar(e, t, n, v, y, !0, s + "," + c), a) break
                                            } else if (a) break
                                        }
                                    }
                                }
                            }
                    },
                    tokenize: function (e, t) {
                        var n = [e],
                            r = t.rest;
                        if (r) {
                            for (var i in r) t[i] = r[i];
                            delete t.rest
                        }
                        return F.matchGrammar(e, n, t, 0, 0, !1), n
                    },
                    hooks: {
                        all: {},
                        add: function (e, t) {
                            var n = F.hooks.all;
                            n[e] = n[e] || [], n[e].push(t)
                        },
                        run: function (e, t) {
                            var n = F.hooks.all[e];
                            if (n && n.length)
                                for (var r, i = 0; r = n[i++];) r(t)
                        }
                    },
                    Token: O
                };

            function O(e, t, n, r, i) {
                this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !!i
            }
            if (c.Prism = F, O.stringify = function (e, t) {
                    if ("string" == typeof e) return e;
                    if (Array.isArray(e)) return e.map(function (e) {
                        return O.stringify(e, t)
                    }).join("");
                    var n = {
                        type: e.type,
                        content: O.stringify(e.content, t),
                        tag: "span",
                        classes: ["token", e.type],
                        attributes: {},
                        language: t
                    };
                    if (e.alias) {
                        var r = Array.isArray(e.alias) ? e.alias : [e.alias];
                        Array.prototype.push.apply(n.classes, r)
                    }
                    F.hooks.run("wrap", n);
                    var i = Object.keys(n.attributes).map(function (e) {
                        return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                    }).join(" ");
                    return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (i ? " " + i : "") + ">" + n.content + "</" + n.tag + ">"
                }, !c.document) return c.addEventListener && (F.disableWorkerMessageHandler || c.addEventListener("message", function (e) {
                var t = JSON.parse(e.data),
                    n = t.language,
                    r = t.code,
                    i = t.immediateClose;
                c.postMessage(F.highlight(r, F.languages[n], n)), i && c.close()
            }, !1)), F;
            var e = F.util.currentScript();
            if (e && (F.filename = e.src, e.hasAttribute("data-manual") && (F.manual = !0)), !F.manual) {
                function n() {
                    F.manual || F.highlightAll()
                }
                var r = document.readyState;
                "loading" === r || "interactive" === r && e && e.defer ? document.addEventListener("DOMContentLoaded", n) : window.requestAnimationFrame ? window.requestAnimationFrame(n) : window.setTimeout(n, 16)
            }
            return F
        }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
        e.exports && (e.exports = c), void 0 !== it && (it.Prism = c), c.languages.markup = {
                comment: /<!--[\s\S]*?-->/,
                prolog: /<\?[\s\S]+?\?>/,
                doctype: {
                    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
                    greedy: !0
                },
                cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
                    greedy: !0,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/i,
                            inside: {
                                punctuation: /^<\/?/,
                                namespace: /^[^\s>\/:]+:/
                            }
                        },
                        "attr-value": {
                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                            inside: {
                                punctuation: [/^=/, {
                                    pattern: /^(\s*)["']|["']$/,
                                    lookbehind: !0
                                }]
                            }
                        },
                        punctuation: /\/?>/,
                        "attr-name": {
                            pattern: /[^\s>\/]+/,
                            inside: {
                                namespace: /^[^\s>\/:]+:/
                            }
                        }
                    }
                },
                entity: /&#?[\da-z]{1,8};/i
            }, c.languages.markup.tag.inside["attr-value"].inside.entity = c.languages.markup.entity, c.hooks.add("wrap", function (e) {
                "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
            }), Object.defineProperty(c.languages.markup.tag, "addInlined", {
                value: function (e, t) {
                    var n = {};
                    n["language-" + t] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: !0,
                        inside: c.languages[t]
                    }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
                    var r = {
                        "included-cdata": {
                            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                            inside: n
                        }
                    };
                    r["language-" + t] = {
                        pattern: /[\s\S]+/,
                        inside: c.languages[t]
                    };
                    var i = {};
                    i[e] = {
                        pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, e), "i"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: r
                    }, c.languages.insertBefore("markup", "cdata", i)
                }
            }), c.languages.xml = c.languages.extend("markup", {}), c.languages.html = c.languages.markup, c.languages.mathml = c.languages.markup, c.languages.svg = c.languages.markup,
            function (e) {
                var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                e.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
                        inside: {
                            rule: /@[\w-]+/
                        }
                    },
                    url: {
                        pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
                        inside: {
                            function: /^url/i,
                            punctuation: /^\(|\)$/
                        }
                    },
                    selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
                    string: {
                        pattern: t,
                        greedy: !0
                    },
                    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
                    important: /!important\b/i,
                    function: /[-a-z0-9]+(?=\()/i,
                    punctuation: /[(){};:,]/
                }, e.languages.css.atrule.inside.rest = e.languages.css;
                var n = e.languages.markup;
                n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
                    "style-attr": {
                        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                        inside: {
                            "attr-name": {
                                pattern: /^\s*style/i,
                                inside: n.tag.inside
                            },
                            punctuation: /^\s*=\s*['"]|['"]\s*$/,
                            "attr-value": {
                                pattern: /.+/i,
                                inside: e.languages.css
                            }
                        },
                        alias: "language-css"
                    }
                }, n.tag))
            }(c), c.languages.clike = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }],
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                    lookbehind: !0,
                    inside: {
                        punctuation: /[.\\]/
                    }
                },
                keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                boolean: /\b(?:true|false)\b/,
                function: /\w+(?=\()/,
                number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                punctuation: /[{}[\];(),.:]/
            }, c.languages.javascript = c.languages.extend("clike", {
                "class-name": [c.languages.clike["class-name"], {
                    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
                    lookbehind: !0
                }],
                keyword: [{
                    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                    lookbehind: !0
                }],
                number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
                function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
            }), c.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, c.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                    lookbehind: !0,
                    greedy: !0
                },
                "function-variable": {
                    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
                    alias: "function"
                },
                parameter: [{
                    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
                    lookbehind: !0,
                    inside: c.languages.javascript
                }, {
                    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
                    inside: c.languages.javascript
                }, {
                    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: c.languages.javascript
                }, {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: c.languages.javascript
                }],
                constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
            }), c.languages.insertBefore("javascript", "string", {
                "template-string": {
                    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
                    greedy: !0,
                    inside: {
                        "template-punctuation": {
                            pattern: /^`|`$/,
                            alias: "string"
                        },
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                            lookbehind: !0,
                            inside: {
                                "interpolation-punctuation": {
                                    pattern: /^\${|}$/,
                                    alias: "punctuation"
                                },
                                rest: c.languages.javascript
                            }
                        },
                        string: /[\s\S]+/
                    }
                }
            }), c.languages.markup && c.languages.markup.tag.addInlined("script", "javascript"), c.languages.js = c.languages.javascript, "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function (e) {
                e = e || document;
                var l = {
                    js: "javascript",
                    py: "python",
                    rb: "ruby",
                    ps1: "powershell",
                    psm1: "powershell",
                    sh: "bash",
                    bat: "batch",
                    h: "c",
                    tex: "latex"
                };
                Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function (e) {
                    if (!e.hasAttribute("data-src-loaded")) {
                        for (var t, n = e.getAttribute("data-src"), r = e, i = /\blang(?:uage)?-([\w-]+)\b/i; r && !i.test(r.className);) r = r.parentNode;
                        if (r && (t = (e.className.match(i) || [, ""])[1]), !t) {
                            var a = (n.match(/\.(\w+)$/) || [, ""])[1];
                            t = l[a] || a
                        }
                        var o = document.createElement("code");
                        o.className = "language-" + t, e.textContent = "", o.textContent = "Loading…", e.appendChild(o);
                        var s = new XMLHttpRequest;
                        s.open("GET", n, !0), s.onreadystatechange = function () {
                            4 == s.readyState && (s.status < 400 && s.responseText ? (o.textContent = s.responseText, c.highlightElement(o), e.setAttribute("data-src-loaded", "")) : 400 <= s.status ? o.textContent = "✖ Error " + s.status + " while fetching file: " + s.statusText : o.textContent = "✖ Error: File does not exist or is empty")
                        }, s.send(null)
                    }
                })
            }, document.addEventListener("DOMContentLoaded", function () {
                self.Prism.fileHighlight()
            }))
    });

    function yt(e, t) {
        return "___" + e.toUpperCase() + t + "___"
    }
    mt = Prism, Object.defineProperties(mt.languages["markup-templating"] = {}, {
        buildPlaceholders: {
            value: function (r, i, e, a) {
                if (r.language === i) {
                    var o = r.tokenStack = [];
                    r.code = r.code.replace(e, function (e) {
                        if ("function" == typeof a && !a(e)) return e;
                        for (var t, n = o.length; - 1 !== r.code.indexOf(t = yt(i, n));) ++n;
                        return o[n] = e, t
                    }), r.grammar = mt.languages.markup
                }
            }
        },
        tokenizePlaceholders: {
            value: function (h, f) {
                if (h.language === f && h.tokenStack) {
                    h.grammar = mt.languages[f];
                    var g = 0,
                        m = Object.keys(h.tokenStack);
                    ! function e(t) {
                        for (var n = 0; n < t.length && !(g >= m.length); n++) {
                            var r = t[n];
                            if ("string" == typeof r || r.content && "string" == typeof r.content) {
                                var i = m[g],
                                    a = h.tokenStack[i],
                                    o = "string" == typeof r ? r : r.content,
                                    s = yt(f, i),
                                    l = o.indexOf(s);
                                if (-1 < l) {
                                    ++g;
                                    var c = o.substring(0, l),
                                        u = new mt.Token(f, mt.tokenize(a, h.grammar), "language-" + f, a),
                                        p = o.substring(l + s.length),
                                        d = [];
                                    c && d.push.apply(d, e([c])), d.push(u), p && d.push.apply(d, e([p])), "string" == typeof r ? t.splice.apply(t, [n, 1].concat(d)) : r.content = d
                                }
                            } else r.content && e(r.content)
                        }
                        return t
                    }(h.tokens)
                }
            }
        }
    });
    var bt = {},
        kt = {
            markdown: function (e) {
                return {
                    url: e
                }
            },
            mermaid: function (e) {
                return {
                    url: e
                }
            },
            iframe: function (e, t) {
                return {
                    html: '<iframe src="' + e + '" ' + (t || "width=100% height=400") + "></iframe>"
                }
            },
            video: function (e, t) {
                return {
                    html: '<video src="' + e + '" ' + (t || "controls") + ">Not Support</video>"
                }
            },
            audio: function (e, t) {
                return {
                    html: '<audio src="' + e + '" ' + (t || "controls") + ">Not Support</audio>"
                }
            },
            code: function (e, t) {
                var n = e.match(/\.(\w+)$/);
                return "md" === (n = t || n && n[1]) && (n = "markdown"), {
                    url: e,
                    lang: n
                }
            }
        },
        xt = function (i, e) {
            var a = this;
            this.config = i, this.router = e, this.cacheTree = {}, this.toc = [], this.cacheTOC = {}, this.linkTarget = i.externalLinkTarget || "_blank", this.linkRel = "_blank" === this.linkTarget ? i.externalLinkRel || "noopener" : "", this.contentBase = e.getBasePath();
            var o, t = this._initRenderer();
            this.heading = t.heading;
            var n = i.markdown || {};
            o = r(n) ? n(ot, t) : (ot.setOptions(h(n, {
                renderer: h(t, n.renderer)
            })), ot), this._marked = o, this.compile = function (n) {
                var r = !0,
                    e = s(function (e) {
                        r = !1;
                        var t = "";
                        return n ? (t = c(n) ? o(n) : o.parser(n), t = i.noEmoji ? t : function (e) {
                            return e.replace(/:\+1:/g, ":thumbsup:").replace(/:-1:/g, ":thumbsdown:").replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g, function (e) {
                                return e.replace(/:/g, "__colon__")
                            }).replace(/:(\w+?):/gi, window.emojify || ft).replace(/__colon__/g, ":")
                        }(t), ht.clear(), t) : n
                    })(n),
                    t = a.router.parse().file;
                return r ? a.toc = a.cacheTOC[t] : a.cacheTOC[t] = [].concat(a.toc), e
            }
        };
    xt.prototype.compileEmbed = function (e, t) {
        var n, r = gt(t),
            i = r.str,
            a = r.config;
        if (t = i, a.include) {
            var o;
            if (Q(e) || (e = re(this.contentBase, ee(this.router.getCurrentPath()), e)), a.type && (o = kt[a.type]))(n = o.call(this, e, t)).type = a.type;
            else {
                var s = "code";
                /\.(md|markdown)/.test(e) ? s = "markdown" : /\.mmd/.test(e) ? s = "mermaid" : /\.html?/.test(e) ? s = "iframe" : /\.(mp4|ogg)/.test(e) ? s = "video" : /\.mp3/.test(e) && (s = "audio"), (n = kt[s].call(this, e, t)).type = s
            }
            return n.fragment = a.fragment, n
        }
    }, xt.prototype._matchNotCompileLink = function (e) {
        for (var t = this.config.noCompileLinks || [], n = 0; n < t.length; n++) {
            var r = t[n];
            if ((bt[r] || (bt[r] = new RegExp("^" + r + "$"))).test(e)) return e
        }
    }, xt.prototype._initRenderer = function () {
        var e = new ot.Renderer,
            t = this.linkTarget,
            n = this.linkRel,
            l = this.router,
            r = this.contentBase,
            c = this,
            i = {};
        return i.heading = e.heading = function (e, t) {
            var n = gt(e),
                r = n.str,
                i = n.config,
                a = {
                    level: t,
                    title: r
                };
            /{docsify-ignore}/g.test(r) && (r = r.replace("{docsify-ignore}", ""), a.title = r, a.ignoreSubHeading = !0), /{docsify-ignore-all}/g.test(r) && (r = r.replace("{docsify-ignore-all}", ""), a.title = r, a.ignoreAllSubs = !0);
            var o = ht(i.id || r),
                s = l.toURL(l.getCurrentPath(), {
                    id: o
                });
            return a.slug = s, c.toc.push(a), "<h" + t + ' id="' + o + '"><a href="' + s + '" data-id="' + o + '" class="anchor"><span>' + r + "</span></a></h" + t + ">"
        }, i.code = function (e) {
            return e.renderer.code = function (e, t) {
                void 0 === t && (t = "");
                var n = vt.languages[t] || vt.languages.markup;
                return '<pre v-pre data-lang="' + t + '"><code class="lang-' + t + '">' + vt.highlight(e.replace(/@DOCSIFY_QM@/g, "`"), n) + "</code></pre>"
            }
        }({
            renderer: e
        }), i.link = function (e) {
            var t = e.renderer,
                s = e.router,
                l = e.linkTarget,
                c = e.linkRel,
                u = e.compilerClass;
            return t.link = function (e, t, n) {
                void 0 === t && (t = "");
                var r = [],
                    i = gt(t),
                    a = i.str,
                    o = i.config;
                return l = o.target || l, c = "_blank" === l ? u.config.externalLinkRel || "noopener" : "", t = a, Q(e) || u._matchNotCompileLink(e) || o.ignore ? (!Q(e) && e.startsWith("./") && (e = document.URL.replace(/\/(?!.*\/).*/, "/").replace("#/./", "") + e), r.push(0 === e.indexOf("mailto:") ? "" : 'target="' + l + '"'), r.push(0 === e.indexOf("mailto:") ? "" : "" !== c ? ' rel="' + c + '"' : "")) : (e === u.config.homepage && (e = "README"), e = s.toURL(e, null, s.getCurrentPath())), o.crossorgin && "_self" === l && "history" === u.config.routerMode && -1 === u.config.crossOriginLinks.indexOf(e) && u.config.crossOriginLinks.push(e), o.disabled && (r.push("disabled"), e = "javascript:void(0)"), o.class && r.push('class="' + o.class + '"'), o.id && r.push('id="' + o.id + '"'), t && r.push('title="' + t + '"'), '<a href="' + e + '" ' + r.join(" ") + ">" + n + "</a>"
            }
        }({
            renderer: e,
            router: l,
            linkTarget: t,
            linkRel: n,
            compilerClass: c
        }), i.paragraph = function (e) {
            return e.renderer.paragraph = function (e) {
                return /^!&gt;/.test(e) ? lt("tip", e) : /^\?&gt;/.test(e) ? lt("warn", e) : "<p>" + e + "</p>"
            }
        }({
            renderer: e
        }), i.image = function (e) {
            var t = e.renderer,
                p = e.contentBase,
                d = e.router;
            return t.image = function (e, t, n) {
                var r = e,
                    i = [],
                    a = gt(t),
                    o = a.str,
                    s = a.config;
                if (t = o, s["no-zoom"] && i.push("data-no-zoom"), t && i.push('title="' + t + '"'), s.size) {
                    var l = s.size.split("x"),
                        c = l[0],
                        u = l[1];
                    u ? i.push('width="' + c + '" height="' + u + '"') : i.push('width="' + c + '"')
                }
                return s.class && i.push('class="' + s.class + '"'), s.id && i.push('id="' + s.id + '"'), Q(e) || (r = re(p, ee(d.getCurrentPath()), e)), 0 < i.length ? '<img src="' + r + '" data-origin="' + e + '" alt="' + n + '" ' + i.join(" ") + " />" : '<img src="' + r + '" data-origin="' + e + '" alt="' + n + '"' + i + ">"
            }
        }({
            renderer: e,
            contentBase: r,
            router: l
        }), i.list = function (e) {
            return e.renderer.list = function (e, t, n) {
                var r = t ? "ol" : "ul";
                return "<" + r + " " + [/<li class="task-list-item">/.test(e.split('class="task-list"')[0]) ? 'class="task-list"' : "", n && 1 < n ? 'start="' + n + '"' : ""].join(" ").trim() + ">" + e + "</" + r + ">"
            }
        }({
            renderer: e
        }), i.listitem = function (e) {
            return e.renderer.listitem = function (e) {
                return /^(<input.*type="checkbox"[^>]*>)/.test(e) ? '<li class="task-list-item"><label>' + e + "</label></li>" : "<li>" + e + "</li>"
            }
        }({
            renderer: e
        }), e.origin = i, e
    }, xt.prototype.sidebar = function (e, t) {
        var n = this.toc,
            r = this.router.getCurrentPath(),
            i = "";
        if (e) i = this.compile(e);
        else {
            for (var a = 0; a < n.length; a++)
                if (n[a].ignoreSubHeading) {
                    var o = n[a].level;
                    n.splice(a, 1);
                    for (var s = a; o < n[s].level && s < n.length; s++) n.splice(s, 1) && s-- && a++;
                    a--
                } var l = this.cacheTree[r] || ct(n, t);
            i = st(l, "<ul>{inner}</ul>"), this.cacheTree[r] = l
        }
        return i
    }, xt.prototype.subSidebar = function (e) {
        if (e) {
            var t = this.router.getCurrentPath(),
                n = this.cacheTree,
                r = this.toc;
            r[0] && r[0].ignoreAllSubs && r.splice(0), r[0] && 1 === r[0].level && r.shift();
            for (var i = 0; i < r.length; i++) r[i].ignoreSubHeading && r.splice(i, 1) && i--;
            var a = n[t] || ct(r, e);
            return n[t] = a, this.toc = [], st(a)
        }
        this.toc = []
    }, xt.prototype.header = function (e, t) {
        return this.heading(e, t)
    }, xt.prototype.article = function (e) {
        return this.compile(e)
    }, xt.prototype.cover = function (e) {
        var t = this.toc.slice(),
            n = this.compile(e);
        return this.toc = t.slice(), n
    };
    var wt = function (e) {
            var t = function (e) {
                var t = e.match(/^[ \t]*(?=\S)/gm);
                return t ? Math.min.apply(Math, t.map(function (e) {
                    return e.length
                })) : 0
            }(e);
            if (0 === t) return e;
            var n = new RegExp("^[ \\t]{" + t + "}", "gm");
            return e.replace(n, "")
        },
        _t = {};

    function At(e, i) {
        var o = e.compiler,
            a = e.raw;
        void 0 === a && (a = "");
        var t = e.fetch,
            n = _t[a];
        if (n) {
            var r = n.slice();
            return r.links = n.links, i(r)
        }
        var s = o._marked,
            l = s.lexer(a),
            c = [],
            u = s.InlineLexer.rules.link,
            p = l.links;
        l.forEach(function (e, a) {
            "paragraph" === e.type && (e.text = e.text.replace(new RegExp(u.source, "g"), function (e, t, n, r) {
                var i = o.compileEmbed(n, r);
                return i && c.push({
                    index: a,
                    embed: i
                }), e
            }))
        });
        var d = [];
        ! function (e, o) {
            var t, n = e.embedTokens,
                s = e.compile,
                l = (e.fetch, 0),
                c = 1;
            if (!n.length) return o({});
            for (; t = n[l++];) {
                var r = function (a) {
                    return function (e) {
                        var t;
                        if (e)
                            if ("markdown" === a.embed.type) {
                                var n = a.embed.url.split("/");
                                n.pop(), n = n.join("/"), e = e.replace(/\[([^[\]]+)\]\(([^)]+)\)/g, function (e) {
                                    var t = e.indexOf("(");
                                    return e.substring(t).startsWith("(.") ? e.substring(0, t) + "(" + window.location.protocol + "//" + window.location.host + n + "/" + e.substring(t + 1, e.length - 1) + ")" : e
                                }), !0 === (($docsify.frontMatter || {}).installed || !1) && (e = $docsify.frontMatter.parseMarkdown(e)), t = s.lexer(e)
                            } else if ("code" === a.embed.type) {
                            if (a.embed.fragment) {
                                var r = a.embed.fragment,
                                    i = new RegExp("(?:###|\\/\\/\\/)\\s*\\[" + r + "\\]([\\s\\S]*)(?:###|\\/\\/\\/)\\s*\\[" + r + "\\]");
                                e = wt((e.match(i) || [])[1] || "").trim()
                            }
                            t = s.lexer("```" + a.embed.lang + "\n" + e.replace(/`/g, "@DOCSIFY_QM@") + "\n```\n")
                        } else "mermaid" === a.embed.type ? (t = [{
                            type: "html",
                            text: '<div class="mermaid">\n' + e + "\n</div>"
                        }]).links = {} : (t = [{
                            type: "html",
                            text: e
                        }]).links = {};
                        o({
                            token: a,
                            embedToken: t
                        }), ++c >= l && o({})
                    }
                }(t);
                t.embed.url ? I(t.embed.url).then(r) : r(t.embed.html)
            }
        }({
            compile: s,
            embedTokens: c,
            fetch: t
        }, function (e) {
            var t = e.embedToken,
                n = e.token;
            if (n) {
                var r = n.index;
                d.forEach(function (e) {
                    r > e.start && (r += e.length)
                }), h(p, t.links), l = l.slice(0, r).concat(t, l.slice(r + 1)), d.push({
                    start: r,
                    length: t.length - 1
                })
            } else _t[a] = l.concat(), l.links = _t[a].links = p, i(l)
        })
    }

    function St() {
        var e = b(".markdown-section>script").filter(function (e) {
            return !/template/.test(e.type)
        })[0];
        if (!e) return !1;
        var t = e.innerText.trim();
        if (!t) return !1;
        setTimeout(function (e) {
            window.__EXECUTE_RESULT__ = new Function(t)()
        }, 0)
    }

    function Tt(e, t, n) {
        return t = "function" == typeof n ? n(t) : "string" == typeof n ? function (r, i) {
            var a = [],
                o = 0;
            return r.replace(T, function (t, e, n) {
                    a.push(r.substring(o, n - 1)), o = n += t.length + 1, a.push(i && i[t] || function (e) {
                        return ("00" + ("string" == typeof E[t] ? e[E[t]]() : E[t](e))).slice(-t.length)
                    })
                }), o !== r.length && a.push(r.substring(o)),
                function (e) {
                    for (var t = "", n = 0, r = e || new Date; n < a.length; n++) t += "string" == typeof a[n] ? a[n] : a[n](r);
                    return t
                }
        }(n)(new Date(t)) : t, e.replace(/{docsify-updated}/g, t)
    }

    function Et(e) {
        e = e || "<h1>404 - Not found</h1>", this._renderTo(".markdown-section", e), this.config.loadSidebar || this._renderSidebar(), !1 === this.config.executeScript || void 0 === window.Vue || St() ? this.config.executeScript && St() : setTimeout(function (e) {
            var t = window.__EXECUTE_RESULT__;
            t && t.$destroy && t.$destroy(), window.__EXECUTE_RESULT__ = (new window.Vue).$mount("#main")
        }, 0)
    }

    function Lt(e) {
        var t = e.config;
        e.compiler = new xt(t, e.router), window.__current_docsify_compiler__ = e.compiler;
        var n = t.el || "#app",
            r = y("nav") || g("nav"),
            i = y(n),
            a = "",
            o = v;
        if (i) {
            if (t.repo && (a += function (e, t) {
                    return e ? (/\/\//.test(e) || (e = "https://github.com/" + e), '<a href="' + (e = e.replace(/^git\+/, "")) + '" target="' + (t = t || "_blank") + '" class="github-corner" aria-label="View source on Github"><svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>') : ""
                }(t.repo, t.cornerExternalLinkTarge)), t.coverpage && (a += function () {
                    var e = ", 100%, 85%";
                    return '<section class="cover show" style="background: ' + ("linear-gradient(to left bottom, hsl(" + Math.floor(255 * Math.random()) + e + ") 0%,hsl(" + Math.floor(255 * Math.random()) + e + ") 100%)") + '"><div class="cover-main">\x3c!--cover--\x3e</div><div class="mask"></div></section>'
                }()), t.logo) {
                var s = /^data:image/.test(t.logo),
                    l = /(?:http[s]?:)?\/\//.test(t.logo),
                    c = /^\./.test(t.logo);
                s || l || c || (t.logo = re(e.router.getBasePath(), t.logo))
            }
            a += function (e) {
                var t = e.name ? e.name : "",
                    n = '<button class="sidebar-toggle" aria-label="Menu"><div class="sidebar-toggle-button"><span></span><span></span><span></span></div></button><aside class="sidebar">' + (e.name ? '<h1 class="app-name"><a class="app-name-link" data-nosearch>' + (e.logo ? '<img alt="' + t + '" src=' + e.logo + ">" : t) + "</a></h1>" : "") + '<div class="sidebar-nav">\x3c!--sidebar--\x3e</div></aside>';
                return (f ? n + "<main>" : "<main>" + n) + '<section class="content"><article class="markdown-section" id="main">\x3c!--main--\x3e</article></section></main>'
            }(t), e._renderTo(i, a, !0)
        } else e.rendered = !0;
        t.mergeNavbar && f ? o = y(".sidebar") : (r.classList.add("app-nav"), t.repo || r.classList.add("no-badge")), t.loadNavbar && k(o, r), t.themeColor && (u.head.appendChild(g("div", function (e) {
            return "<style>:root{--theme-color: " + e + ";}</style>"
        }(t.themeColor)).firstElementChild), function (n) {
            if (!(window.CSS && window.CSS.supports && window.CSS.supports("(--v:red)"))) {
                var e = b("style:not(.inserted),link");
                [].forEach.call(e, function (e) {
                    if ("STYLE" === e.nodeName) U(e, n);
                    else if ("LINK" === e.nodeName) {
                        var t = e.getAttribute("href");
                        if (!/\.css$/.test(t)) return;
                        I(t).then(function (e) {
                            var t = g("style", e);
                            d.appendChild(t), U(t, n)
                        })
                    }
                })
            }
        }(t.themeColor)), e._updateRender(), _(v, "ready")
    }
    var Ct = {};

    function Rt(e) {
        this.config = e
    }

    function Ft(e) {
        var t = location.href.indexOf("#");
        location.replace(location.href.slice(0, 0 <= t ? t : 0) + "#" + e)
    }
    Rt.prototype.getBasePath = function () {
        return this.config.basePath
    }, Rt.prototype.getFile = function (e, t) {
        void 0 === e && (e = this.getCurrentPath());
        var n = this.config,
            r = this.getBasePath(),
            i = "string" == typeof n.ext ? n.ext : ".md";
        return e = (e = function (e, t) {
            return new RegExp("\\.(" + t.replace(/^\./, "") + "|html)$", "g").test(e) ? e : /\/$/g.test(e) ? e + "README" + t : "" + e + t
        }(e = n.alias ? function e(t, n, r) {
            var i = Object.keys(n).filter(function (e) {
                return (Ct[e] || (Ct[e] = new RegExp("^" + e + "$"))).test(t) && t !== r
            })[0];
            return i ? e(t.replace(Ct[i], n[i]), n, t) : t
        }(e, n.alias) : e, i)) === "/README" + i && n.homepage || e, e = Q(e) ? e : re(r, e), t && (e = e.replace(new RegExp("^" + r), "")), e
    }, Rt.prototype.onchange = function (e) {
        void 0 === e && (e = p), e()
    }, Rt.prototype.getCurrentPath = function () {}, Rt.prototype.normalize = function () {}, Rt.prototype.parse = function () {}, Rt.prototype.toURL = function (e, t, n) {
        var r = n && "#" === e[0],
            i = this.parse(ie(e));
        if (i.query = h({}, i.query, t), e = (e = i.path + K(i.query)).replace(/\.md(\?)|\.md$/, "$1"), r) {
            var a = n.indexOf("?");
            e = (0 < a ? n.substring(0, a) : n) + e
        }
        if (this.config.relativePath && 0 !== e.indexOf("/")) {
            var o = n.substring(0, n.lastIndexOf("/") + 1);
            return te(ne(o + e))
        }
        return te("/" + e)
    };
    var Ot = function (r) {
            function e(e) {
                r.call(this, e), this.mode = "hash"
            }
            return r && (e.__proto__ = r), ((e.prototype = Object.create(r && r.prototype)).constructor = e).prototype.getBasePath = function () {
                var e = window.location.pathname || "",
                    t = this.config.basePath;
                return /^(\/|https?:)/g.test(t) ? t : te(e + "/" + t)
            }, e.prototype.getCurrentPath = function () {
                var e = location.href,
                    t = e.indexOf("#");
                return -1 === t ? "" : e.slice(t + 1)
            }, e.prototype.onchange = function (n) {
                void 0 === n && (n = p);
                var r = !1;
                x("click", function (e) {
                    var t = "A" === e.target.tagName ? e.target : e.target.parentNode;
                    "A" !== t.tagName || /_blank/.test(t.target) || (r = !0)
                }), x("hashchange", function (e) {
                    var t = r ? "navigate" : "history";
                    r = !1, n({
                        event: e,
                        source: t
                    })
                })
            }, e.prototype.normalize = function () {
                var e = this.getCurrentPath();
                if ("/" === (e = ie(e)).charAt(0)) return Ft(e);
                Ft("/" + e)
            }, e.prototype.parse = function (e) {
                void 0 === e && (e = location.href);
                var t = "",
                    n = e.indexOf("#");
                0 <= n && (e = e.slice(n + 1));
                var r = e.indexOf("?");
                return 0 <= r && (t = e.slice(r + 1), e = e.slice(0, r)), {
                    path: e,
                    file: this.getFile(e, !0),
                    query: X(t)
                }
            }, e.prototype.toURL = function (e, t, n) {
                return "#" + r.prototype.toURL.call(this, e, t, n)
            }, e
        }(Rt),
        $t = function (t) {
            function e(e) {
                t.call(this, e), this.mode = "history"
            }
            return t && (e.__proto__ = t), ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.getCurrentPath = function () {
                var e = this.getBasePath(),
                    t = window.location.pathname;
                return e && 0 === t.indexOf(e) && (t = t.slice(e.length)), (t || "/") + window.location.search + window.location.hash
            }, e.prototype.onchange = function (r) {
                var i = this;
                void 0 === r && (r = p), x("click", function (e) {
                    var t = "A" === e.target.tagName ? e.target : e.target.parentNode;
                    if ("A" === t.tagName && !/_blank/.test(t.target)) {
                        e.preventDefault();
                        var n = t.href; - 1 !== i.config.crossOriginLinks.indexOf(n) ? window.open(n, "_self") : window.history.pushState({
                            key: n
                        }, "", n), r({
                            event: e,
                            source: "navigate"
                        })
                    }
                }), x("popstate", function (e) {
                    r({
                        event: e,
                        source: "history"
                    })
                })
            }, e.prototype.parse = function (e) {
                void 0 === e && (e = location.href);
                var t = "",
                    n = e.indexOf("?");
                0 <= n && (t = e.slice(n + 1), e = e.slice(0, n));
                var r = re(location.origin),
                    i = e.indexOf(r);
                return -1 < i && (e = e.slice(i + r.length)), {
                    path: e,
                    file: this.getFile(e),
                    query: X(t)
                }
            }, e
        }(Rt);
    var Mt = {};

    function Nt(e) {
        e.router.normalize(), e.route = e.router.parse(), v.setAttribute("data-page", e.route.file)
    }

    function zt(e) {
        ! function (e) {
            function t(e) {
                return v.classList.toggle("close")
            }
            null != (e = m(e)) && (x(e, "click", function (e) {
                e.stopPropagation(), t()
            }), f && x(v, "click", function (e) {
                return v.classList.contains("close") && t()
            }))
        }("button.sidebar-toggle", e.router),
        function (e) {
            null != (e = m(e)) && x(e, "click", function (e) {
                var t = e.target;
                "A" === t.nodeName && t.nextSibling && t.nextSibling.classList && t.nextSibling.classList.contains("app-sub-sidebar") && _(t.parentNode, "collapse")
            })
        }(".sidebar", e.router), e.config.coverpage ? f || x("scroll", W) : v.classList.add("sticky")
    }

    function Pt(t, n, r, i, a, e) {
        t = e ? t : t.replace(/\/$/, ""), (t = ee(t)) && I(a.router.getFile(t + r) + n, !1, a.config.requestHeaders).then(i, function (e) {
            return Pt(t, n, r, i, a)
        })
    }
    var jt = Object.freeze({
        __proto__: null,
        cached: s,
        hyphenate: a,
        hasOwn: l,
        merge: h,
        isPrimitive: c,
        noop: p,
        isFn: r,
        inBrowser: !0,
        isMobile: f,
        supportsPushState: i,
        parseQuery: X,
        stringifyQuery: K,
        isAbsolutePath: Q,
        removeParams: J,
        getParentPath: ee,
        cleanPath: te,
        resolvePath: ne,
        getPath: re,
        replaceSlug: ie
    });

    function Dt() {
        this._init()
    }
    var Ht, qt, It, Ut = Dt.prototype;

    function Bt(e, t, n) {
        return It && It.abort && It.abort(), It = I(e, !0, n)
    }
    Ut._init = function () {
        var e = this;
        e.config = S(e),
            function (n) {
                n._hooks = {}, n._lifecycle = {}, ["init", "mounted", "beforeEach", "afterEach", "doneEach", "ready"].forEach(function (e) {
                    var t = n._hooks[e] = [];
                    n._lifecycle[e] = function (e) {
                        return t.push(e)
                    }
                })
            }(e),
            function (t) {
                [].concat(t.config.plugins).forEach(function (e) {
                    return r(e) && e(t._lifecycle, t)
                })
            }(e), B(e, "init"),
            function (t) {
                var e, n = t.config;
                e = "history" === (n.routerMode || "hash") && i ? new $t(n) : new Ot(n), t.router = e, Nt(t), Mt = t.route, e.onchange(function (e) {
                    Nt(t), t._updateRender(), Mt.path !== t.route.path ? (t.$fetch(p, t.$resetEvents.bind(t, e.source)), Mt = t.route) : t.$resetEvents(e.source)
                })
            }(e), Lt(e), zt(e),
            function (t) {
                var e = t.config.loadSidebar;
                if (t.rendered) {
                    var n = G(t.router, ".sidebar-nav", !0, !0);
                    e && n && (n.parentNode.innerHTML += window.__SUB_SIDEBAR__), t._bindEventOnRendered(n), t.$resetEvents(), B(t, "doneEach"), B(t, "ready")
                } else t.$fetch(function (e) {
                    return B(t, "ready")
                })
            }(e), B(e, "mounted")
    }, Ut.route = {}, (Ht = Ut)._renderTo = function (e, t, n) {
        var r = m(e);
        r && (r[n ? "outerHTML" : "innerHTML"] = t)
    }, Ht._renderSidebar = function (e) {
        var t = this.config,
            n = t.maxLevel,
            r = t.subMaxLevel,
            i = t.loadSidebar;
        if (t.hideSidebar) return document.querySelector("aside.sidebar").remove(), document.querySelector("button.sidebar-toggle").remove(), document.querySelector("section.content").style.right = "unset", document.querySelector("section.content").style.left = "unset", document.querySelector("section.content").style.position = "relative", document.querySelector("section.content").style.width = "100%", null;
        this._renderTo(".sidebar-nav", this.compiler.sidebar(e, n));
        var a = G(this.router, ".sidebar-nav", !0, !0);
        i && a ? a.parentNode.innerHTML += this.compiler.subSidebar(r) || "" : this.compiler.subSidebar(), this._bindEventOnRendered(a)
    }, Ht._bindEventOnRendered = function (e) {
        var t = this.config.autoHeader;
        if (function (e) {
                var t = y(".cover.show");
                ge = t ? t.offsetHeight : 0;
                var n = m(".sidebar"),
                    r = [];
                null != n && (r = b(n, "li"));
                for (var i = 0, a = r.length; i < a; i += 1) {
                    var o = r[i],
                        s = o.querySelector("a");
                    if (s) {
                        var l = s.getAttribute("href");
                        if ("/" !== l) {
                            var c = e.parse(l),
                                u = c.query.id,
                                p = c.path;
                            u && (l = ve(p, u))
                        }
                        l && (pe[decodeURIComponent(l)] = o)
                    }
                }
                if (!f) {
                    var d = J(e.getCurrentPath());
                    w("scroll", function () {
                        return me(d)
                    }), x("scroll", function () {
                        return me(d)
                    }), x(n, "mouseover", function () {
                        de = !0
                    }), x(n, "mouseleave", function () {
                        de = !1
                    })
                }
            }(this.router), t && e) {
            var n = m("#main"),
                r = n.children[0];
            r && "H1" !== r.tagName && k(n, g("div", this.compiler.header(e.innerText, 1)).children[0])
        }
    }, Ht._renderNav = function (e) {
        e && this._renderTo("nav", this.compiler.compile(e)), this.config.loadNavbar && G(this.router, "nav")
    }, Ht._renderMain = function (r, i, a) {
        var o = this;
        if (void 0 === i && (i = {}), !r) return Et.call(this, r);
        B(this, "beforeEach", r, function (e) {
            function t() {
                i.updatedAt && (n = Tt(n, i.updatedAt, o.config.formatUpdated)), B(o, "afterEach", n, function (e) {
                    return Et.call(o, e)
                })
            }
            var n;
            o.isHTML ? (n = o.result = r, t(), a()) : At({
                compiler: o.compiler,
                raw: e
            }, function (e) {
                n = o.compiler.compile(e), n = o.isRemoteUrl ? D.sanitize(n) : n, t(), a()
            })
        })
    }, Ht._renderCover = function (e, t) {
        var n = m(".cover");
        if (_(m("main"), t ? "add" : "remove", "hidden"), e) {
            _(n, "add", "show");
            var r = this.coverIsHTML ? e : this.compiler.cover(e),
                i = r.trim().match('<p><img.*?data-origin="(.*?)"[^a]+alt="(.*?)">([^<]*?)</p>$');
            if (i) {
                if ("color" === i[2]) n.style.background = i[1] + (i[3] || "");
                else {
                    var a = i[1];
                    _(n, "add", "has-mask"), Q(i[1]) || (a = re(this.router.getBasePath(), i[1])), n.style.backgroundImage = "url(" + a + ")", n.style.backgroundSize = "cover", n.style.backgroundPosition = "center center"
                }
                r = r.replace(i[0], "")
            }
            this._renderTo(".cover-main", r), W()
        } else _(n, "remove", "show")
    }, Ht._updateRender = function () {
        ! function (e) {
            var t = m(".app-name-link"),
                n = e.config.nameLink,
                r = e.route.path;
            if (t)
                if (c(e.config.nameLink)) t.setAttribute("href", n);
                else if ("object" == typeof n) {
                var i = Object.keys(n).filter(function (e) {
                    return -1 < r.indexOf(e)
                })[0];
                t.setAttribute("href", n[i])
            }
        }(this)
    }, (qt = Ut)._loadSideAndNav = function (e, t, n, r) {
        var i = this;
        return function () {
            if (!n) return r();
            Pt(e, t, n, function (e) {
                i._renderSidebar(e), r()
            }, i, !0)
        }
    }, qt._fetch = function (n) {
        var r = this;
        void 0 === n && (n = p);
        var e = this.route,
            i = e.path,
            a = K(e.query, ["id"]),
            t = this.config,
            o = t.loadNavbar,
            s = t.requestHeaders,
            l = t.loadSidebar,
            c = this.router.getFile(i),
            u = Bt(c + a, 0, s);
        this.isRemoteUrl = function (e) {
            var t = e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
            return "string" == typeof t[1] && 0 < t[1].length && t[1].toLowerCase() !== location.protocol || "string" == typeof t[2] && 0 < t[2].length && t[2].replace(new RegExp(":(" + {
                "http:": 80,
                "https:": 443
            } [location.protocol] + ")?$"), "") !== location.host
        }(c), this.isHTML = /\.html$/g.test(c), u.then(function (e, t) {
            return r._renderMain(e, t, r._loadSideAndNav(i, a, l, n))
        }, function (e) {
            r._fetchFallbackPage(c, a, n) || r._fetch404(c, a, n)
        }), o && Pt(i, a, o, function (e) {
            return r._renderNav(e)
        }, this, !0)
    }, qt._fetchCover = function () {
        var t = this,
            e = this.config,
            n = e.coverpage,
            r = e.requestHeaders,
            i = this.route.query,
            a = ee(this.route.path);
        if (n) {
            var o = null,
                s = this.route.path;
            if ("string" == typeof n) "/" === s && (o = n);
            else if (Array.isArray(n)) o = -1 < n.indexOf(s) && "_coverpage";
            else {
                var l = n[s];
                o = !0 === l ? "_coverpage" : l
            }
            var c = Boolean(o) && this.config.onlyCover;
            return o ? (o = this.router.getFile(a + o), this.coverIsHTML = /\.html$/g.test(o), I(o + K(i, ["id"]), !1, r).then(function (e) {
                return t._renderCover(e, c)
            })) : this._renderCover(null, c), c
        }
    }, qt.$fetch = function (e, t) {
        var n = this;

        function r() {
            B(n, "doneEach"), e()
        }
        void 0 === e && (e = p), void 0 === t && (t = this.$resetEvents.bind(this)), this._fetchCover() ? r() : this._fetch(function () {
            t(), r()
        })
    }, qt._fetchFallbackPage = function (n, r, i) {
        var a = this;
        void 0 === i && (i = p);
        var e = this.config,
            t = e.requestHeaders,
            o = e.fallbackLanguages,
            s = e.loadSidebar;
        if (!o) return !1;
        var l = n.split("/")[1];
        if (-1 === o.indexOf(l)) return !1;
        var c = n.replace(new RegExp("^/" + l), "");
        return Bt(c + r, 0, t).then(function (e, t) {
            return a._renderMain(e, t, a._loadSideAndNav(n, r, s, i))
        }, function () {
            return a._fetch404(n, r, i)
        }), !0
    }, qt._fetch404 = function (e, t, n) {
        var r = this;
        void 0 === n && (n = p);
        var i = this.config,
            a = i.loadSidebar,
            o = i.requestHeaders,
            s = i.notFoundPage,
            l = this._loadSideAndNav(e, t, a, n);
        if (s) {
            var c = function (t, e) {
                var n, r, i = e.notFoundPage,
                    a = "_404" + (e.ext || ".md");
                switch (typeof i) {
                    case "boolean":
                        r = a;
                        break;
                    case "string":
                        r = i;
                        break;
                    case "object":
                        r = (n = Object.keys(i).sort(function (e, t) {
                            return t.length - e.length
                        }).find(function (e) {
                            return t.match(new RegExp("^" + e))
                        })) && i[n] || a
                }
                return r
            }(e, this.config);
            return Bt(this.router.getFile(c), 0, o).then(function (e, t) {
                return r._renderMain(e, t, l)
            }, function () {
                return r._renderMain(null, {}, l)
            }), !0
        }
        return this._renderMain(null, {}, l), !1
    }, Ut.$resetEvents = function (e) {
        var t = this,
            n = this.config.auto2top;
        "history" !== e && (t.route.query.id && ye(t.route.path, t.route.query.id), "navigate" === e && n && function (e) {
            void 0 === e && (e = 0), be.scrollTop = !0 === e ? 0 : Number(e)
        }(n)), this.config.loadNavbar && G(this.router, "nav")
    }, window.Docsify = {
        util: jt,
        dom: t,
        get: I,
        slugify: ht,
        version: "4.11.4"
    }, window.DocsifyCompiler = xt, window.marked = ot, window.Prism = vt, e(function (e) {
        return new Dt
    })
}();