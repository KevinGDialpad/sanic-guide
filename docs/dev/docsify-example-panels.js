/*!
 * docsify-example-panels
 * v1.1.0
 * https://vagnerdomingues.github.io/docsify-example-panels/
 * (c) 2019-2020 Vagner Domingues Madeira
 * MIT license
 */
! function () {
    "use strict";
    ! function (e, a) {
        void 0 === a && (a = {});
        var n = a.insertAt;
        if (e && "undefined" != typeof document) {
            var p = document.head || document.getElementsByTagName("head")[0],
                i = document.createElement("style");
            i.type = "text/css", "top" === n && p.firstChild ? p.insertBefore(i, p.firstChild) : p.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
        }
    }(":root{--docsify-example-panels-document-width:90%;--docsify-example-panels-wrapper-width:100%;--docsify-example-panels-padding-inner:8px 16px;--docsify-example-panels-padding-surroundings:0px;--docsify-example-panels-left-panel-background:transparent;--docsify-example-panels-left-panel-width:60%;--docsify-example-panels-right-panel-background:transparent;--docsify-example-panels-right-panel-width:40%;--docsify-example-panels-title-background:transparent}.markdown-section{max-width:90%!important;max-width:var(--docsify-example-panels-document-width)!important;width:90%!important;width:var(--docsify-example-panels-document-width)!important}.docsify-example-panels{width:100%;width:var(--docsify-example-panels-wrapper-width)}.docsify-example-panel,.docsify-example-panels{padding:0;display:inline-block}.docsify-example-panel.left-panel{float:left;max-width:60%;max-width:var(--docsify-example-panels-left-panel-width);width:60%;width:var(--docsify-example-panels-left-panel-width);padding:8px 16px;padding:var(--docsify-example-panels-padding-inner);padding-left:0;padding-left:var(--docsify-example-panels-padding-surroundings);background:transparent;background:var(--docsify-example-panels-left-panel-background)}@media only screen and (max-width:1300px){.docsify-example-panel.left-panel{float:none!important;max-width:100%!important;width:100%!important;padding:0!important}}.docsify-example-panel.right-panel{max-width:40%;max-width:var(--docsify-example-panels-right-panel-width);width:40%;width:var(--docsify-example-panels-right-panel-width);padding:8px 16px;padding:var(--docsify-example-panels-padding-inner);padding-right:0;padding-right:var(--docsify-example-panels-padding-surroundings);background:transparent;background:var(--docsify-example-panels-right-panel-background)}@media only screen and (max-width:1300px){.docsify-example-panel.right-panel{max-width:100%!important;width:100%!important;padding:0!important}}.docsify-example-panel.title-panel{padding:0;padding-left:var(--docsify-example-panels-padding-surroundings);padding-right:0;padding-right:var(--docsify-example-panels-padding-surroundings);max-width:100%;width:100%;background:transparent;background:var(--docsify-example-panels-title-background)}", {
        insertAt: "top"
    });
    var x = "panels:replace",
        u = {
            panelWrapper: "docsify-example-panels",
            panelContainer: "docsify-example-panel"
        },
        g = {
            codeMarkup: /(```*?```)/gm,
            commentReplaceMarkup: new RegExp("\x3c!-- ".concat(x, " (.*) --\x3e")),
            panelWrapperMarkup: /[\r\n]*(\s*)(<!-+\s+panels:\s*?start\s+-+>)[\r\n]+([\s|\S]*?)[\r\n\s]+(<!-+\s+panels:\s*?end\s+-+>)/m,
            panelMarkup: /<!-+\s+div:\s*(.*)\s+-+>[\r\n]+([\s\S]*?)[\r\n]+((?=<!-+\s+div:?)|(?=<!-+\s+panels?))/m
        };
    window && (window.$docsify = window.$docsify || {}, window.$docsify.panels = window.$docsify.panels || {}, window.$docsify.panels.version = "1.1.0", window.$docsify.plugins = [].concat(function (e, a) {
        var n = !1;
        e.beforeEach(function (e) {
            return (n = g.panelWrapperMarkup.test(e)) && (e = function (p) {
                for (var e, a, n = p.match(g.codeMarkup) || [], i = n.map(function (e, a) {
                        var n = "\x3c!-- ".concat(x, " CODEBLOCK").concat(a, " --\x3e");
                        return p = p.replace(e, n), n
                    }); null !== (e = g.panelWrapperMarkup.exec(p));) {
                    var d = e[0],
                        t = "",
                        r = "",
                        l = g.panelMarkup.test(d),
                        o = e[1],
                        c = e[2],
                        s = e[4];
                    if (l)
                        for (t = "\x3c!-- ".concat(x, ' <div class="').concat([u.panelWrapper].join(" "), '"> --\x3e'), r = "\n".concat(o, "\x3c!-- ").concat(x, " </div> --\x3e"); null !== (a = g.panelMarkup.exec(d));) {
                            var m = a[1].trim().toLowerCase(),
                                f = a[2].trim();
                            d = d.replace(a[0], ["\n".concat(o, "\x3c!-- ").concat(x, ' <div class="').concat([u.panelContainer, m].join(" "), '"> --\x3e'), "\n\n".concat(o).concat(f), "\n\n".concat(o, "\x3c!-- ").concat(x, " </div> --\x3e")].join(""))
                        }
                    d = (d = d.replace(c, t)).replace(s, r), p = p.replace(e[0], d)
                }
                return i.forEach(function (e, a) {
                    p = p.replace(e, n[a])
                }), p
            }(e)), e
        }), e.afterEach(function (e, a) {
            n && (e = function (e) {
                for (var a; null !== (a = g.commentReplaceMarkup.exec(e));) {
                    var n = a[0],
                        p = a[1] || "";
                    e = e.replace(n, p)
                }
                return e
            }(e)), a(e)
        })
    }, window.$docsify.plugins || []))
}();
//# sourceMappingURL=docsify-example-panels.min.js.map
