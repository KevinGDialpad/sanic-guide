! function () {
    var d = {},
        l = {
            EXPIRE_KEY: "docsify.search.expires",
            INDEX_KEY: "docsify.search.index"
        };

    function p(e) {
        var n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        return String(e).replace(/[&<>"']/g, function (e) {
            return n[e]
        })
    }

    function h(e) {
        return e.text || "table" !== e.type || (e.text = e.cells.map(function (e) {
            return e.join(" | ")
        }).join(" |\n ")), e.text
    }

    function u(i, e, o, a) {
        void 0 === e && (e = "");
        var s, n = window.marked.lexer(e),
            c = window.Docsify.slugify,
            d = {};
        return n.forEach(function (e) {
            if ("heading" === e.type && e.depth <= a) {
                var n = function (e) {
                        void 0 === e && (e = "");
                        var r = {};
                        return {
                            str: e = e && e.replace(/^'/, "").replace(/'$/, "").replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, function (e, n, t) {
                                return -1 === n.indexOf(":") ? (r[n] = t && t.replace(/&quot;/g, "") || !0, "") : e
                            }).trim(),
                            config: r
                        }
                    }(e.text),
                    t = n.str,
                    r = n.config;
                s = r.id ? o.toURL(i, {
                    id: c(r.id)
                }) : o.toURL(i, {
                    id: c(p(e.text))
                }), d[s] = {
                    slug: s,
                    title: t,
                    body: ""
                }
            } else {
                if (!s) return;
                d[s] ? d[s].body ? (e.text = h(e), d[s].body += "\n" + (e.text || "")) : (e.text = h(e), d[s].body = d[s].body ? d[s].body + e.text : e.text) : d[s] = {
                    slug: s,
                    title: "",
                    body: ""
                }
            }
        }), c.clear(), d
    }

    function c(e) {
        var i = [],
            o = [];
        Object.keys(d).forEach(function (n) {
            o = o.concat(Object.keys(d[n]).map(function (e) {
                return d[n][e]
            }))
        });
        var a = (e = e.trim()).split(/[\s\-，\\/]+/);
        1 !== a.length && (a = [].concat(e, a));

        function n(e) {
            var n = o[e],
                s = 0,
                c = "",
                d = n.title && n.title.trim(),
                l = n.body && n.body.trim(),
                t = n.slug || "";
            if (d && (a.forEach(function (e) {
                    var n, t = new RegExp(e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"), "gi"),
                        r = -1;
                    if (n = d ? d.search(t) : -1, r = l ? l.search(t) : -1, 0 <= n || 0 <= r) {
                        s += 0 <= n ? 3 : 0 <= r ? 2 : 0, r < 0 && (r = 0);
                        var i, o = 0;
                        o = 0 == (i = r < 11 ? 0 : r - 10) ? 70 : r + e.length + 60, l && o > l.length && (o = l.length);
                        var a = "..." + p(l).substring(i, o).replace(t, '<em class="search-keyword">' + e + "</em>") + "...";
                        c += a
                    }
                }), 0 < s)) {
                var r = {
                    title: p(d),
                    content: l ? c : "",
                    url: t,
                    score: s
                };
                i.push(r)
            }
        }
        for (var t = 0; t < o.length; t++) n(t);
        return i.sort(function (e, n) {
            return n.score - e.score
        })
    }

    function o(t, r) {
        var e = "auto" === t.paths,
            i = function (e) {
                return e ? l.EXPIRE_KEY + "/" + e : l.EXPIRE_KEY
            }(t.namespace),
            o = function (e) {
                return e ? l.INDEX_KEY + "/" + e : l.INDEX_KEY
            }(t.namespace),
            n = localStorage.getItem(i) < Date.now();
        if (d = JSON.parse(localStorage.getItem(o)), n) d = {};
        else if (!e) return;
        var a = e ? function (i) {
                var o = [];
                return Docsify.dom.findAll(".sidebar-nav a:not(.section-link):not([data-nosearch])").forEach(function (e) {
                    var n = e.href,
                        t = e.getAttribute("href"),
                        r = i.parse(n).path;
                    r && -1 === o.indexOf(r) && !Docsify.util.isAbsolutePath(t) && o.push(r)
                }), o
            }(r.router) : t.paths,
            s = a.length,
            c = 0;
        a.forEach(function (n) {
            if (d[n]) return c++;
            Docsify.get(r.router.getFile(n), !1, r.config.requestHeaders).then(function (e) {
                d[n] = u(n, e, r.router, t.depth), s === ++c && function (e, n, t) {
                    localStorage.setItem(n, Date.now() + e), localStorage.setItem(t, JSON.stringify(d))
                }(t.maxAge, i, o)
            })
        })
    }
    var f, m = "";

    function i(e) {
        var n = Docsify.dom.find("div.search"),
            t = Docsify.dom.find(n, ".results-panel"),
            r = Docsify.dom.find(n, ".clear-button"),
            i = Docsify.dom.find(".sidebar-nav"),
            o = Docsify.dom.find(".app-name");
        if (!e) return t.classList.remove("show"), r.classList.remove("show"), t.innerHTML = "", void(f.hideOtherSidebarContent && (i.classList.remove("hide"), o.classList.remove("hide")));
        var a = c(e),
            s = "";
        a.forEach(function (e) {
            s += '<div class="matching-post">\n<a href="' + e.url + '">\n<h2>' + e.title + "</h2>\n<p>" + e.content + "</p>\n</a>\n</div>"
        }), t.classList.add("show"), r.classList.add("show"), t.innerHTML = s || '<p class="empty">' + m + "</p>", f.hideOtherSidebarContent && (i.classList.add("hide"), o.classList.add("hide"))
    }

    function r(e) {
        f = e
    }

    function a(e, n) {
        var t = n.router.parse().query.s;
        r(e), Docsify.dom.style("\n.sidebar {\n  padding-top: 0;\n}\n\n.search {\n  margin-bottom: 20px;\n  padding: 6px;\n  border-bottom: 1px solid #eee;\n}\n\n.search .input-wrap {\n  display: flex;\n  align-items: center;\n}\n\n.search .results-panel {\n  display: none;\n}\n\n.search .results-panel.show {\n  display: block;\n}\n\n.search input {\n  outline: none;\n  border: none;\n  width: 100%;\n  padding: 0 7px;\n  line-height: 36px;\n  font-size: 14px;\n  border: 1px solid transparent;\n}\n\n.search input:focus {\n  box-shadow: 0 0 5px var(--theme-color, #42b983);\n  border: 1px solid var(--theme-color, #42b983);\n}\n\n.search input::-webkit-search-decoration,\n.search input::-webkit-search-cancel-button,\n.search input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.search .clear-button {\n  cursor: pointer;\n  width: 36px;\n  text-align: right;\n  display: none;\n}\n\n.search .clear-button.show {\n  display: block;\n}\n\n.search .clear-button svg {\n  transform: scale(.5);\n}\n\n.search h2 {\n  font-size: 17px;\n  margin: 10px 0;\n}\n\n.search a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.search .matching-post {\n  border-bottom: 1px solid #eee;\n}\n\n.search .matching-post:last-child {\n  border-bottom: 0;\n}\n\n.search p {\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.search p.empty {\n  text-align: center;\n}\n\n.app-name.hide, .sidebar-nav.hide {\n  display: none;\n}"),
            function (e) {
                void 0 === e && (e = "");
                var n = '<div class="input-wrap">\n      <input type="search" value="' + e + '" aria-label="Search text" />\n      <div class="clear-button">\n        <svg width="26" height="24">\n          <circle cx="12" cy="12" r="11" fill="#ccc" />\n          <path stroke="white" stroke-width="2" d="M8.25,8.25,15.75,15.75" />\n          <path stroke="white" stroke-width="2"d="M8.25,15.75,15.75,8.25" />\n        </svg>\n      </div>\n    </div>\n    <div class="results-panel"></div>\n    </div>',
                    t = Docsify.dom.create("div", n),
                    r = Docsify.dom.find("aside");
                Docsify.dom.toggleClass(t, "search"), Docsify.dom.before(r, t)
            }(t),
            function () {
                var e, n = Docsify.dom.find("div.search"),
                    t = Docsify.dom.find(n, "input"),
                    r = Docsify.dom.find(n, ".input-wrap");
                Docsify.dom.on(n, "click", function (e) {
                    return -1 === ["A", "H2", "P", "EM"].indexOf(e.target.tagName) && e.stopPropagation()
                }), Docsify.dom.on(t, "input", function (n) {
                    clearTimeout(e), e = setTimeout(function (e) {
                        return i(n.target.value.trim())
                    }, 100)
                }), Docsify.dom.on(r, "click", function (e) {
                    "INPUT" !== e.target.tagName && (t.value = "", i())
                })
            }(), t && setTimeout(function (e) {
                return i(t)
            }, 500)
    }

    function s(e, n) {
        r(e),
            function (e, n) {
                var t = Docsify.dom.getNode('.search input[type="search"]');
                if (t)
                    if ("string" == typeof e) t.placeholder = e;
                    else {
                        var r = Object.keys(e).filter(function (e) {
                            return -1 < n.indexOf(e)
                        })[0];
                        t.placeholder = e[r]
                    }
            }(e.placeholder, n.route.path),
            function (e, n) {
                if ("string" == typeof e) m = e;
                else {
                    var t = Object.keys(e).filter(function (e) {
                        return -1 < n.indexOf(e)
                    })[0];
                    m = e[t]
                }
            }(e.noData, n.route.path)
    }
    var g = {
        placeholder: "Type to search",
        noData: "No Results!",
        paths: "auto",
        depth: 2,
        maxAge: 864e5,
        hideOtherSidebarContent: !1,
        namespace: void 0
    };
    $docsify.plugins = [].concat(function (e, n) {
        var t = Docsify.util,
            r = n.config.search || g;
        Array.isArray(r) ? g.paths = r : "object" == typeof r && (g.paths = Array.isArray(r.paths) ? r.paths : "auto", g.maxAge = t.isPrimitive(r.maxAge) ? r.maxAge : g.maxAge, g.placeholder = r.placeholder || g.placeholder, g.noData = r.noData || g.noData, g.depth = r.depth || g.depth, g.hideOtherSidebarContent = r.hideOtherSidebarContent || g.hideOtherSidebarContent, g.namespace = r.namespace || g.namespace);
        var i = "auto" === g.paths;
        e.mounted(function (e) {
            a(g, n), i || o(g, n)
        }), e.doneEach(function (e) {
            s(g, n), i && o(g, n)
        })
    }, $docsify.plugins)
}();