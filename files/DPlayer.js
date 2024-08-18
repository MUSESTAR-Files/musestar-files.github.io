! function (n, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("DPlayer", [], e) : "object" == typeof exports ? exports.DPlayer = e() : n.DPlayer = e()
}(self, (() => (() => {
    var n = {
            916: (n, e, t) => {
                var a = t(471);
                n.exports = function (n) {
                    "use strict";
                    var e, o = "",
                        r = (n = n || {}).video,
                        i = n.options,
                        l = a.$escape,
                        s = n.tran,
                        p = n.icons,
                        d = n.index,
                        c = a.$each;
                    return n.$value, n.$index, o += '<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    ', e = t(568)(r), o += e, o += "\n    ", i.logo && (o += '\n    <div class="dplayer-logo">\n        <img src="', o += l(i.logo), o += '">\n    </div>\n    '), o += '\n    <div class="dplayer-danmaku"', i.danmaku && i.danmaku.bottom && (o += ' style="margin-bottom:', o += l(i.danmaku.bottom), o += '"'), o += '>\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="dplayer-subtitle"></div>\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        ', i.danmaku && (o += '\n        <span class="dplayer-danloading">', o += l(s("danmaku-loading")), o += "</span>\n        "), o += '\n        <span class="diplayer-loading-icon">', o += p.loading, o += '</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-comment-box">\n        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="', o += l(s("setting")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.pallette, o += '</span>\n        </button>\n        <div class="dplayer-comment-setting-box">\n            <div class="dplayer-comment-setting-color">\n                <div class="dplayer-comment-setting-title">', o += l(s("set-danmaku-color")), o += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#fff" checked>\n                    <span style="background: #fff;"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#e54256">\n                    <span style="background: #e54256"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#ffe133">\n                    <span style="background: #ffe133"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#64DD17">\n                    <span style="background: #64DD17"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#39ccff">\n                    <span style="background: #39ccff"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#D500F9">\n                    <span style="background: #D500F9"></span>\n                </label>\n            </div>\n            <div class="dplayer-comment-setting-type">\n                <div class="dplayer-comment-setting-title">', o += l(s("set-danmaku-type")), o += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', o += l(d), o += '" value="1">\n                    <span>', o += l(s("top")), o += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', o += l(d), o += '" value="0" checked>\n                    <span>', o += l(s("rolling")), o += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', o += l(d), o += '" value="2">\n                    <span>', o += l(s("bottom")), o += '</span>\n                </label>\n            </div>\n        </div>\n        <input class="dplayer-comment-input" type="text" placeholder="', o += l(s("input-danmaku-enter")), o += '" maxlength="30">\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="', o += l(s("send")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.send, o += '</span>\n        </button>\n    </div>\n    <div class="dplayer-icons dplayer-icons-left">\n        <button class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">', o += p.play, o += '</span>\n        </button>\n        <div class="dplayer-volume">\n            <button class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">', o += p.volumeDown, o += '</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: ', o += l(i.theme), o += ';">\n                        <span class="dplayer-thumb" style="background: ', o += l(i.theme), o += '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> /\n            <span class="dplayer-dtime">0:00</span>\n        </span>\n        ', i.live && (o += '\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ', o += l(i.theme), o += ';"></span>', o += l(s("live")), o += "</span>\n        "), o += '\n    </div>\n    <div class="dplayer-icons dplayer-icons-right">\n        ', i.video.quality && (o += '\n        <div class="dplayer-quality">\n            <button class="dplayer-icon dplayer-quality-icon">', o += l(i.video.quality[i.video.defaultQuality].name), o += '</button>\n            <div class="dplayer-quality-mask">\n                <div class="dplayer-quality-list">\n                ', c(i.video.quality, (function (n, e) {
                        o += '\n                    <div class="dplayer-quality-item" data-index="', o += l(e), o += '">', o += l(n.name), o += "</div>\n                "
                    })), o += "\n                </div>\n            </div>\n        </div>\n        "), o += "\n        ", i.screenshot && (o += '\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="', o += l(s("screenshot")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.camera, o += "</span>\n        </div>\n        "), o += "\n        ", i.airplay && (o += '\n        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="', o += l(s("airplay")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.airplay, o += "</span>\n        </div>\n        "), o += "\n        ", i.chromecast && (o += '\n        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="', o += l(s("chromecast")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.chromecast, o += "</span>\n        </div>\n        "), o += '\n        <div class="dplayer-comment">\n            <button class="dplayer-icon dplayer-comment-icon" data-balloon="', o += l(s("send-danmaku")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.comment, o += "</span>\n            </button>\n        </div>\n        ", i.subtitle && (o += "\n        ", "string" == typeof i.subtitle.url ? (o += '\n        <div class="dplayer-subtitle-btn">\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="', o += l(s("hide-subs")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.subtitle, o += "</span>\n            </button>\n        </div>\n        ") : (o += '\n        <div class="dplayer-subtitles">\n            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="', o += l(s("subtitle")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.subtitle, o += '</span>\n            </button>\n            <div class="dplayer-subtitles-box">\n                <div class="dplayer-subtitles-panel">\n                    ', c(i.subtitle.url, (function (n, e) {
                        o += '\n                        <div class="dplayer-subtitles-item" data-subtitle="', o += l(n.url), o += '">\n                            \x3c!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. --\x3e\n                            <span class="dplayer-label">', o += l(n.lang ? n.name ? n.name + " (" + s(n.lang) + ")" : s(n.lang) : n.name), o += "</span>\n                        </div>\n                    "
                    })), o += "\n                </div>\n            </div>\n        </div>\n        "), o += "\n        "), o += '\n        <div class="dplayer-setting">\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="', o += l(s("setting")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.setting, o += '</span>\n            </button>\n            <div class="dplayer-setting-box">\n                <div class="dplayer-setting-origin-panel">\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">', o += l(s("speed")), o += '</span>\n                        <div class="dplayer-toggle">', o += p.right, o += '</div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">', o += l(s("loop")), o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">', o += l(s("show-danmaku")), o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danunlimit">\n                        <span class="dplayer-label">', o += l(s("unlimited-danmaku")), o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">\n                            <label for="dplayer-toggle-danunlimit"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">', o += l(s("opacity-danmaku")), o += '</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dplayer-setting-speed-panel">\n                    ', c(i.playbackSpeed, (function (n, e) {
                        o += '\n                        <div class="dplayer-setting-speed-item" data-speed="', o += l(n), o += '">\n                            <span class="dplayer-label">', o += l(1 === n ? s("normal") : n), o += "</span>\n                        </div>\n                    "
                    })), o += '\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-full">\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="', o += l(s("web-fullscreen")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.fullWeb, o += '</span>\n            </button>\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="', o += l(s("fullscreen")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.full, o += '</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar-preview"></div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: ', o += l(i.theme), o += '">\n                <span class="dplayer-thumb" style="background: ', o += l(i.theme), o += '"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-info-panel dplayer-info-panel-hide">\n    <div class="dplayer-info-panel-close">[x]</div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\n        <span class="dplayer-info-panel-item-title">Player version</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\n        <span class="dplayer-info-panel-item-title">Video type</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\n        <span class="dplayer-info-panel-item-title">Video url</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\n        <span class="dplayer-info-panel-item-title">Video duration</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ', i.danmaku && (o += '\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">\n        <span class="dplayer-info-panel-item-title">Danmaku id</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">\n        <span class="dplayer-info-panel-item-title">Danmaku api</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">\n        <span class="dplayer-info-panel-item-title">Danmaku amount</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    '), o += '\n</div>\n<div class="dplayer-menu">\n    ', c(i.contextmenu, (function (n, e) {
                        o += '\n        <div class="dplayer-menu-item">\n            <a', n.link && (o += ' target="_blank"'), o += ' href="', o += l(n.link || "javascript:void(0);"), o += '">', n.key && (o += " ", o += l(s(n.key))), n.text && (o += " ", o += l(n.text)), o += "</a>\n        </div>\n    "
                    })), o += '\n</div>\n<div class="dplayer-notice-list"></div>\n<button class="dplayer-mobile-play">\n    ', o += p.play, o += "\n</button>"
                }
            },
            568: (n, e, t) => {
                var a = t(471);
                n.exports = function (n) {
                    "use strict";
                    var e = "",
                        t = (n = n || {}).enableSubtitle,
                        o = n.subtitle,
                        r = n.current,
                        i = n.airplay,
                        l = n.pic,
                        s = a.$escape,
                        p = n.screenshot,
                        d = n.preload,
                        c = n.url;
                    return t = o && "webvtt" === o.type, e += '\n<video\n    class="dplayer-video ', r && (e += "dplayer-video-current"), e += '"\n    webkit-playsinline\n    ', i && (e += ' x-webkit-airplay="allow" '), e += "\n    playsinline\n    ", l && (e += 'poster="', e += s(l), e += '"'), e += "\n    ", (p || t) && (e += 'crossorigin="anonymous"'), e += "\n    ", d && (e += 'preload="', e += s(d), e += '"'), e += "\n    ", i ? e += "\n    nosrc\n    " : c && (e += '\n    src="', e += s(c), e += '"\n    '), e += "\n    >\n    ", i && (e += '\n    <source src="', e += s(c), e += '">\n    '), e += "\n    ", t && (e += '\n    <track class="dplayer-subtrack" kind="metadata" default src="', e += s("string" == typeof o.url ? o.url : o.url[o.index].url), e += '"></track>\n    '), e + "\n</video>"
                }
            },
            49: (n, e, t) => {
                "use strict";
                t.d(e, {
                    Z: () => l
                });
                var a = t(415),
                    o = t.n(a),
                    r = t(352),
                    i = t.n(r)()(o());
                i.push([n.id, ':root {\n  --balloon-border-radius: 2px;\n  --balloon-color: rgba(16, 16, 16, 0.95);\n  --balloon-text-color: #fff;\n  --balloon-font-size: 12px;\n  --balloon-move: 4px; }\n\nbutton[aria-label][data-balloon-pos] {\n  overflow: visible; }\n\n[aria-label][data-balloon-pos] {\n  position: relative;\n  cursor: pointer; }\n  [aria-label][data-balloon-pos]:after {\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    text-indent: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-shadow: none;\n    font-size: 12px;\n    font-size: var(--balloon-font-size);\n    background: rgba(16, 16, 16, 0.95);\n    background: var(--balloon-color);\n    border-radius: 2px;\n    color: #fff;\n    color: var(--balloon-text-color);\n    border-radius: var(--balloon-border-radius);\n    content: attr(aria-label);\n    padding: .5em 1em;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-top-color: rgba(16, 16, 16, 0.95);\n    border-top-color: var(--balloon-color);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    content: "";\n    position: absolute;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {\n    opacity: 1;\n    pointer-events: none; }\n  [aria-label][data-balloon-pos].font-awesome:after {\n    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif; }\n  [aria-label][data-balloon-pos][data-balloon-break]:after {\n    white-space: pre; }\n  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {\n    white-space: pre-line;\n    word-break: break-word; }\n  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {\n    transition: none; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {\n    left: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {\n    left: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {\n    right: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {\n    right: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    bottom: 100%;\n    transform-origin: top;\n    transform: translate(0, 4px);\n    transform: translate(0, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    margin-bottom: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {\n    left: 50%;\n    transform: translate(-50%, 4px);\n    transform: translate(-50%, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    top: 100%;\n    transform: translate(0, calc(4px * -1));\n    transform: translate(0, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    margin-top: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-bottom-color: rgba(16, 16, 16, 0.95);\n    border-bottom-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {\n    left: 50%;\n    transform: translate(-50%, calc(4px * -1));\n    transform: translate(-50%, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    right: 100%;\n    top: 50%;\n    transform: translate(4px, -50%);\n    transform: translate(var(--balloon-move), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {\n    margin-right: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-left-color: rgba(16, 16, 16, 0.95);\n    border-left-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    left: 100%;\n    top: 50%;\n    transform: translate(calc(4px * -1), -50%);\n    transform: translate(calc(var(--balloon-move) * -1), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {\n    margin-left: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-right-color: rgba(16, 16, 16, 0.95);\n    border-right-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-length]:after {\n    white-space: normal; }\n  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {\n    width: 80px; }\n  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {\n    width: 150px; }\n  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {\n    width: 260px; }\n  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n    width: 380px; }\n    @media screen and (max-width: 768px) {\n      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n        width: 90vw; } }\n  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {\n    width: 100%; }\n', "", {
                    version: 3,
                    sources: ["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],
                    names: [],
                    mappings: "AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",
                    sourcesContent: [':root {\n  --balloon-border-radius: 2px;\n  --balloon-color: rgba(16, 16, 16, 0.95);\n  --balloon-text-color: #fff;\n  --balloon-font-size: 12px;\n  --balloon-move: 4px; }\n\nbutton[aria-label][data-balloon-pos] {\n  overflow: visible; }\n\n[aria-label][data-balloon-pos] {\n  position: relative;\n  cursor: pointer; }\n  [aria-label][data-balloon-pos]:after {\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    text-indent: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-shadow: none;\n    font-size: var(--balloon-font-size);\n    background: var(--balloon-color);\n    border-radius: 2px;\n    color: var(--balloon-text-color);\n    border-radius: var(--balloon-border-radius);\n    content: attr(aria-label);\n    padding: .5em 1em;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-top-color: var(--balloon-color);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    content: "";\n    position: absolute;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {\n    opacity: 1;\n    pointer-events: none; }\n  [aria-label][data-balloon-pos].font-awesome:after {\n    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif; }\n  [aria-label][data-balloon-pos][data-balloon-break]:after {\n    white-space: pre; }\n  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {\n    white-space: pre-line;\n    word-break: break-word; }\n  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {\n    transition: none; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {\n    left: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {\n    left: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {\n    right: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {\n    right: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    bottom: 100%;\n    transform-origin: top;\n    transform: translate(0, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    margin-bottom: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {\n    left: 50%;\n    transform: translate(-50%, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    top: 100%;\n    transform: translate(0, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    margin-top: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-bottom-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {\n    left: 50%;\n    transform: translate(-50%, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    right: 100%;\n    top: 50%;\n    transform: translate(var(--balloon-move), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {\n    margin-right: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-left-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    left: 100%;\n    top: 50%;\n    transform: translate(calc(var(--balloon-move) * -1), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {\n    margin-left: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-right-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-length]:after {\n    white-space: normal; }\n  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {\n    width: 80px; }\n  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {\n    width: 150px; }\n  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {\n    width: 260px; }\n  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n    width: 380px; }\n    @media screen and (max-width: 768px) {\n      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n        width: 90vw; } }\n  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {\n    width: 100%; }\n'],
                    sourceRoot: ""
                }]);
                const l = i
            },
            685: (n, e, t) => {
                "use strict";
                t.d(e, {
                    Z: () => u
                });
                var a = t(415),
                    o = t.n(a),
                    r = t(352),
                    i = t.n(r),
                    l = t(49),
                    s = t(80),
                    p = t.n(s),
                    d = new URL(t(831), t.b),
                    c = i()(o());
                c.i(l.Z);
                var A = p()(d);
                c.push([n.id, '@keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.dplayer {\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  line-height: 1;\n}\n.dplayer * {\n  box-sizing: content-box;\n}\n.dplayer svg {\n  width: 100%;\n  height: 100%;\n}\n.dplayer svg path,\n.dplayer svg circle {\n  fill: #fff;\n}\n.dplayer:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transform: translate(0, 0);\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-danmaku {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-time {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-bar-wrap {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-speed {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-loop {\n  display: none;\n}\n.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {\n  display: none;\n}\n.dplayer.dplayer-arrow .dplayer-danmaku {\n  font-size: 18px;\n}\n.dplayer.dplayer-arrow .dplayer-icon {\n  margin: 0 -3px;\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {\n  animation-play-state: running;\n}\n@media (min-width: 900px) {\n  .dplayer.dplayer-playing .dplayer-controller-mask {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing .dplayer-controller {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller-mask {\n    opacity: 1;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller {\n    opacity: 1;\n  }\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {\n  display: block;\n}\n.dplayer.dplayer-loading .dplayer-danmaku,\n.dplayer.dplayer-paused .dplayer-danmaku,\n.dplayer.dplayer-loading .dplayer-danmaku-move,\n.dplayer.dplayer-paused .dplayer-danmaku-move {\n  animation-play-state: paused;\n}\n.dplayer.dplayer-hide-controller {\n  cursor: none;\n}\n.dplayer.dplayer-hide-controller .dplayer-controller-mask {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-hide-controller .dplayer-controller {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-show-controller .dplayer-controller-mask {\n  opacity: 1;\n}\n.dplayer.dplayer-show-controller .dplayer-controller {\n  opacity: 1;\n}\n.dplayer.dplayer-fulled {\n  width: 100% !important;\n  height: 100% !important;\n}\n.dplayer.dplayer-fulled {\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: static;\n  display: inline-block;\n}\n.dplayer.dplayer-mobile .dplayer-bar-time {\n  display: none;\n}\n.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-mobile-play {\n  display: block;\n}\n.dplayer-web-fullscreen-fix {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n[data-balloon]:before {\n  display: none;\n}\n[data-balloon]:after {\n  padding: 0.3em 0.7em;\n  background: rgba(17, 17, 17, 0.7);\n}\n[data-balloon][data-balloon-pos="up"]:after {\n  margin-bottom: 0;\n}\n.dplayer-bezel {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n  height: 52px;\n  width: 52px;\n  padding: 12px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {\n  animation: bezel-hide 0.5s linear;\n}\n@keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.dplayer-bezel .dplayer-danloading {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 14px;\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-bezel .diplayer-loading-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -18px 0 0 -18px;\n  height: 36px;\n  width: 36px;\n  pointer-events: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {\n  display: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {\n  animation: diplayer-loading-dot-fade 0.8s ease infinite;\n  opacity: 0;\n  transform-origin: 4px 4px;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {\n  animation-delay: 0.1s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {\n  animation-delay: 0.2s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {\n  animation-delay: 0.3s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {\n  animation-delay: 0.4s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {\n  animation-delay: 0.5s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {\n  animation-delay: 0.6s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {\n  animation-delay: 0.7s;\n}\n@keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n.dplayer-controller-mask {\n  background: url(' + A + ") repeat-x bottom;\n  height: 98px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  transition: all 0.3s ease;\n}\n.dplayer-controller {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 41px;\n  padding: 0 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: all 0.3s ease;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons {\n  display: none;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap {\n  padding: 5px 0;\n  cursor: pointer;\n  position: absolute;\n  bottom: 33px;\n  width: calc(100% - 40px);\n  height: 3px;\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {\n  display: block;\n  width: 8px;\n  transform: translateX(-4px);\n  top: 4px;\n  height: 40%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {\n  z-index: 12;\n  position: absolute;\n  top: 5px;\n  width: 6px;\n  height: 20%;\n  border-radius: 6px;\n  background-color: #fff;\n  text-align: center;\n  transform: translateX(-3px);\n  transition: all 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -24px;\n  padding: 5px 8px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  border-radius: 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  transform: translateX(-50%);\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {\n  position: absolute;\n  background: #fff;\n  pointer-events: none;\n  display: none;\n  background-size: 16000px 100%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {\n  position: absolute;\n  left: 0px;\n  top: -20px;\n  border-radius: 4px;\n  padding: 5px 7px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n  word-wrap: normal;\n  word-break: normal;\n  z-index: 2;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar {\n  position: relative;\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  height: 3px;\n  transition: all 0.5s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 3px;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons {\n  height: 38px;\n  position: absolute;\n  bottom: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box {\n  display: none;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  z-index: 2;\n  height: 38px;\n  bottom: 0;\n  left: 20px;\n  right: 20px;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {\n  position: absolute;\n  background: rgba(28, 28, 28, 0.9);\n  bottom: 41px;\n  left: 0;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  padding: 10px 10px 16px;\n  font-size: 14px;\n  width: 204px;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {\n  font-size: 13px;\n  color: #fff;\n  line-height: 30px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {\n  margin-bottom: 6px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {\n  border-radius: 4px 0 0 4px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {\n  border-radius: 0 4px 4px 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {\n  width: 33%;\n  padding: 4px 6px;\n  line-height: 16px;\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-right: -1px;\n  box-sizing: border-box;\n  text-align: center;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {\n  background: #E4E4E6;\n  color: #1c1c1c;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {\n  font-size: 0;\n  padding: 6px;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {\n  width: 22px;\n  height: 22px;\n  display: inline-block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {\n  outline: none;\n  border: none;\n  padding: 8px 31px;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  background: none;\n  margin: 0;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right {\n  right: 20px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {\n  padding: 8px;\n}\n.dplayer-controller .dplayer-icons .dplayer-time,\n.dplayer-controller .dplayer-icons .dplayer-live-badge {\n  line-height: 38px;\n  color: #eee;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  vertical-align: middle;\n  font-size: 13px;\n  cursor: default;\n}\n.dplayer-controller .dplayer-icons .dplayer-live-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  vertical-align: 4%;\n  margin-right: 5px;\n  content: '';\n  border-radius: 6px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon {\n  width: 40px;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {\n  transition: all 0.2s ease-in-out;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {\n  opacity: 1;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {\n  color: #fff;\n  width: auto;\n  line-height: 22px;\n  font-size: 14px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {\n  padding: 10px 9px 9px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {\n  padding-top: 8.5px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {\n  width: 43px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {\n  display: inline-block;\n  margin: 0 10px 0 -5px;\n  vertical-align: middle;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  position: relative;\n  top: 17px;\n  width: 0;\n  height: 3px;\n  background: #aaa;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 240px;\n  min-width: 120px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: auto;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: 150px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {\n  width: 70px;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {\n  padding: 5px 0;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {\n  padding: 0 10px;\n  display: inline;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: none;\n  vertical-align: middle;\n  height: 100%;\n  width: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {\n  position: relative;\n  top: 8.5px;\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  background: #aaa;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  background: #aaa;\n}\n.dplayer-controller .dplayer-icons .dplayer-full {\n  display: inline-block;\n  height: 100%;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: absolute;\n  top: -30px;\n  z-index: 1;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {\n  display: none;\n  position: absolute;\n  bottom: 38px;\n  left: -18px;\n  width: 80px;\n  padding-bottom: 12px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {\n  display: none;\n  font-size: 12px;\n  width: 80px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 5px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {\n  height: 25px;\n  box-sizing: border-box;\n  cursor: pointer;\n  line-height: 25px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-comment {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-label {\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle {\n  width: 32px;\n  height: 20px;\n  text-align: center;\n  font-size: 0;\n  vertical-align: middle;\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input {\n  max-height: 0;\n  max-width: 0;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label {\n  display: inline-block;\n  position: relative;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border: 1px solid #dfdfdf;\n  height: 20px;\n  width: 32px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 18px;\n  width: 18px;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  background: #fff;\n  transition: 0.2s ease-in-out;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 18px;\n  width: 18px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {\n  width: 30px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {\n  left: 12px;\n}\n.dplayer-mobile-play {\n  display: none;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  bottom: 0;\n  opacity: 0.8;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.dplayer-danmaku {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n}\n.dplayer-danmaku .dplayer-danmaku-item {\n  display: inline-block;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: default;\n  white-space: nowrap;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n}\n.dplayer-danmaku .dplayer-danmaku-item--demo {\n  position: absolute;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-right {\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n}\n.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {\n  will-change: transform;\n  animation-name: 'danmaku';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n.dplayer-danmaku .dplayer-danmaku-top,\n.dplayer-danmaku .dplayer-danmaku-bottom {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,\n.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {\n  will-change: visibility;\n  animation-name: 'danmaku-center';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n.dplayer-logo {\n  pointer-events: none;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  max-width: 50px;\n  max-height: 50px;\n}\n.dplayer-logo img {\n  max-width: 100%;\n  max-height: 100%;\n  background: none;\n}\n.dplayer-menu {\n  position: absolute;\n  width: 170px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.85);\n  padding: 5px 0;\n  overflow: hidden;\n  z-index: 3;\n  display: none;\n}\n.dplayer-menu.dplayer-menu-show {\n  display: block;\n}\n.dplayer-menu .dplayer-menu-item {\n  height: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-menu .dplayer-menu-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-menu .dplayer-menu-item a {\n  padding: 0 10px;\n  line-height: 30px;\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-menu .dplayer-menu-item a:hover {\n  text-decoration: none;\n}\n.dplayer-notice-list {\n  position: absolute;\n  bottom: 60px;\n  left: 20px;\n}\n.dplayer-notice-list .dplayer-notice {\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  display: table;\n  pointer-events: none;\n  animation: showNotice 0.3s ease 1 forwards;\n}\n.dplayer-notice-list .remove-notice {\n  animation: removeNotice 0.3s ease 1 forwards;\n}\n@keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n.dplayer-subtitle {\n  position: absolute;\n  bottom: 40px;\n  width: 90%;\n  left: 5%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n}\n.dplayer-subtitle.dplayer-subtitle-hide {\n  display: none;\n}\n.dplayer-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: none;\n}\n.dplayer-mask.dplayer-mask-show {\n  display: block;\n}\n.dplayer-video-wrap {\n  position: relative;\n  background: #000;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n.dplayer-video-wrap .dplayer-video {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.dplayer-video-wrap .dplayer-video-current {\n  display: block;\n}\n.dplayer-video-wrap .dplayer-video-prepare {\n  display: none;\n}\n.dplayer-info-panel {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 400px;\n  background: rgba(28, 28, 28, 0.8);\n  padding: 10px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 2px;\n}\n.dplayer-info-panel-hide {\n  display: none;\n}\n.dplayer-info-panel .dplayer-info-panel-close {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item > span {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-info-panel .dplayer-info-panel-item-title {\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item-data {\n  width: 260px;\n}\n", "", {
                    version: 3,
                    sources: ["webpack://./src/css/global.less", "webpack://./src/css/index.less", "webpack://./src/css/player.less", "webpack://./src/css/balloon.less", "webpack://./src/css/bezel.less", "webpack://./src/css/notice.less", "webpack://./src/css/controller.less", "webpack://./src/css/danmaku.less", "webpack://./src/css/logo.less", "webpack://./src/css/menu.less", "webpack://./src/css/subtitle.less", "webpack://./src/css/video.less", "webpack://./src/css/info-panel.less"],
                    names: [],
                    mappings: "AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",
                    sourcesContent: ["@keyframes my-face {\n    2% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    4% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    6% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    8% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    10% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    12% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    14% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    16% {\n        transform: translate(0, -0.5px) rotate(-1.5deg);\n    }\n    18% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    20% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    22% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    24% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    26% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    28% {\n        transform: translate(0, 0.5px) rotate(1.5deg);\n    }\n    30% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    32% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    34% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    36% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    38% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    40% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    42% {\n        transform: translate(0, 2.5px) rotate(-1.5deg);\n    }\n    44% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    46% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    48% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    50% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    52% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    54% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    56% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    58% {\n        transform: translate(0, 0.5px) rotate(2.5deg);\n    }\n    60% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    62% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    64% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    66% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    68% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    70% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    72% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    74% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    76% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    78% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    80% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    82% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    84% {\n        transform: translate(0, 1.5px) rotate(2.5deg);\n    }\n    86% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    88% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    90% {\n        transform: translate(0, 2.5px) rotate(-0.5deg);\n    }\n    92% {\n        transform: translate(0, 0.5px) rotate(-0.5deg);\n    }\n    94% {\n        transform: translate(0, 2.5px) rotate(0.5deg);\n    }\n    96% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    98% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    0%,\n    100% {\n        transform: translate(0, 0) rotate(0deg);\n    }\n}", "@import '../../node_modules/balloon-css/balloon.css';\n@keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.dplayer {\n  position: relative;\n  overflow: hidden;\n  user-select: none;\n  line-height: 1;\n}\n.dplayer * {\n  box-sizing: content-box;\n}\n.dplayer svg {\n  width: 100%;\n  height: 100%;\n}\n.dplayer svg path,\n.dplayer svg circle {\n  fill: #fff;\n}\n.dplayer:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transform: translate(0, 0);\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-danmaku {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-time {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-bar-wrap {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-speed {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-loop {\n  display: none;\n}\n.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {\n  display: none;\n}\n.dplayer.dplayer-arrow .dplayer-danmaku {\n  font-size: 18px;\n}\n.dplayer.dplayer-arrow .dplayer-icon {\n  margin: 0 -3px;\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {\n  animation-play-state: running;\n}\n@media (min-width: 900px) {\n  .dplayer.dplayer-playing .dplayer-controller-mask {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing .dplayer-controller {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller-mask {\n    opacity: 1;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller {\n    opacity: 1;\n  }\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {\n  display: block;\n}\n.dplayer.dplayer-loading .dplayer-danmaku,\n.dplayer.dplayer-paused .dplayer-danmaku,\n.dplayer.dplayer-loading .dplayer-danmaku-move,\n.dplayer.dplayer-paused .dplayer-danmaku-move {\n  animation-play-state: paused;\n}\n.dplayer.dplayer-hide-controller {\n  cursor: none;\n}\n.dplayer.dplayer-hide-controller .dplayer-controller-mask {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-hide-controller .dplayer-controller {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-show-controller .dplayer-controller-mask {\n  opacity: 1;\n}\n.dplayer.dplayer-show-controller .dplayer-controller {\n  opacity: 1;\n}\n.dplayer.dplayer-fulled {\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100% !important;\n  height: 100% !important;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: static;\n  display: inline-block;\n}\n.dplayer.dplayer-mobile .dplayer-bar-time {\n  display: none;\n}\n.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-mobile-play {\n  display: block;\n}\n.dplayer-web-fullscreen-fix {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n[data-balloon]:before {\n  display: none;\n}\n[data-balloon]:after {\n  padding: 0.3em 0.7em;\n  background: rgba(17, 17, 17, 0.7);\n}\n[data-balloon][data-balloon-pos=\"up\"]:after {\n  margin-bottom: 0;\n}\n.dplayer-bezel {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n  height: 52px;\n  width: 52px;\n  padding: 12px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {\n  animation: bezel-hide 0.5s linear;\n}\n@keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.dplayer-bezel .dplayer-danloading {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 14px;\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-bezel .diplayer-loading-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -18px 0 0 -18px;\n  height: 36px;\n  width: 36px;\n  pointer-events: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {\n  display: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {\n  animation: diplayer-loading-dot-fade 0.8s ease infinite;\n  opacity: 0;\n  transform-origin: 4px 4px;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {\n  animation-delay: 0.1s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {\n  animation-delay: 0.2s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {\n  animation-delay: 0.3s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {\n  animation-delay: 0.4s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {\n  animation-delay: 0.5s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {\n  animation-delay: 0.6s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {\n  animation-delay: 0.7s;\n}\n@keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n.dplayer-controller-mask {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n  height: 98px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  transition: all 0.3s ease;\n}\n.dplayer-controller {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 41px;\n  padding: 0 20px;\n  user-select: none;\n  transition: all 0.3s ease;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons {\n  display: none;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap {\n  padding: 5px 0;\n  cursor: pointer;\n  position: absolute;\n  bottom: 33px;\n  width: calc(100% - 40px);\n  height: 3px;\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {\n  display: block;\n  width: 8px;\n  transform: translateX(-4px);\n  top: 4px;\n  height: 40%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {\n  z-index: 12;\n  position: absolute;\n  top: 5px;\n  width: 6px;\n  height: 20%;\n  border-radius: 6px;\n  background-color: #fff;\n  text-align: center;\n  transform: translateX(-3px);\n  transition: all 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -24px;\n  padding: 5px 8px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  border-radius: 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  transform: translateX(-50%);\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {\n  position: absolute;\n  background: #fff;\n  pointer-events: none;\n  display: none;\n  background-size: 16000px 100%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {\n  position: absolute;\n  left: 0px;\n  top: -20px;\n  border-radius: 4px;\n  padding: 5px 7px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n  word-wrap: normal;\n  word-break: normal;\n  z-index: 2;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar {\n  position: relative;\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  height: 3px;\n  transition: all 0.5s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 3px;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons {\n  height: 38px;\n  position: absolute;\n  bottom: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box {\n  display: none;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  z-index: 2;\n  height: 38px;\n  bottom: 0;\n  left: 20px;\n  right: 20px;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {\n  position: absolute;\n  background: rgba(28, 28, 28, 0.9);\n  bottom: 41px;\n  left: 0;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  padding: 10px 10px 16px;\n  font-size: 14px;\n  width: 204px;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {\n  font-size: 13px;\n  color: #fff;\n  line-height: 30px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {\n  margin-bottom: 6px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {\n  border-radius: 4px 0 0 4px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {\n  border-radius: 0 4px 4px 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {\n  width: 33%;\n  padding: 4px 6px;\n  line-height: 16px;\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-right: -1px;\n  box-sizing: border-box;\n  text-align: center;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {\n  background: #E4E4E6;\n  color: #1c1c1c;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {\n  font-size: 0;\n  padding: 6px;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {\n  width: 22px;\n  height: 22px;\n  display: inline-block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {\n  outline: none;\n  border: none;\n  padding: 8px 31px;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  background: none;\n  margin: 0;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right {\n  right: 20px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {\n  padding: 8px;\n}\n.dplayer-controller .dplayer-icons .dplayer-time,\n.dplayer-controller .dplayer-icons .dplayer-live-badge {\n  line-height: 38px;\n  color: #eee;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  vertical-align: middle;\n  font-size: 13px;\n  cursor: default;\n}\n.dplayer-controller .dplayer-icons .dplayer-live-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  vertical-align: 4%;\n  margin-right: 5px;\n  content: '';\n  border-radius: 6px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon {\n  width: 40px;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {\n  transition: all 0.2s ease-in-out;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {\n  opacity: 1;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {\n  color: #fff;\n  width: auto;\n  line-height: 22px;\n  font-size: 14px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {\n  padding: 10px 9px 9px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {\n  padding-top: 8.5px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {\n  width: 43px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {\n  display: inline-block;\n  margin: 0 10px 0 -5px;\n  vertical-align: middle;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  position: relative;\n  top: 17px;\n  width: 0;\n  height: 3px;\n  background: #aaa;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: fit-content;\n  max-width: 240px;\n  min-width: 120px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: auto;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: 150px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {\n  width: 70px;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {\n  padding: 5px 0;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {\n  padding: 0 10px;\n  display: inline;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: none;\n  vertical-align: middle;\n  height: 100%;\n  width: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {\n  position: relative;\n  top: 8.5px;\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  background: #aaa;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  background: #aaa;\n}\n.dplayer-controller .dplayer-icons .dplayer-full {\n  display: inline-block;\n  height: 100%;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: absolute;\n  top: -30px;\n  z-index: 1;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {\n  display: none;\n  position: absolute;\n  bottom: 38px;\n  left: -18px;\n  width: 80px;\n  padding-bottom: 12px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {\n  display: none;\n  font-size: 12px;\n  width: 80px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 5px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {\n  height: 25px;\n  box-sizing: border-box;\n  cursor: pointer;\n  line-height: 25px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-comment {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-label {\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle {\n  width: 32px;\n  height: 20px;\n  text-align: center;\n  font-size: 0;\n  vertical-align: middle;\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input {\n  max-height: 0;\n  max-width: 0;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label {\n  display: inline-block;\n  position: relative;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border: 1px solid #dfdfdf;\n  height: 20px;\n  width: 32px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 18px;\n  width: 18px;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  background: #fff;\n  transition: 0.2s ease-in-out;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 18px;\n  width: 18px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {\n  width: 30px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {\n  left: 12px;\n}\n.dplayer-mobile-play {\n  display: none;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  bottom: 0;\n  opacity: 0.8;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.dplayer-danmaku {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n}\n.dplayer-danmaku .dplayer-danmaku-item {\n  display: inline-block;\n  pointer-events: none;\n  user-select: none;\n  cursor: default;\n  white-space: nowrap;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n}\n.dplayer-danmaku .dplayer-danmaku-item--demo {\n  position: absolute;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-right {\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n}\n.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {\n  will-change: transform;\n  animation-name: 'danmaku';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n.dplayer-danmaku .dplayer-danmaku-top,\n.dplayer-danmaku .dplayer-danmaku-bottom {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,\n.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {\n  will-change: visibility;\n  animation-name: 'danmaku-center';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n.dplayer-logo {\n  pointer-events: none;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  max-width: 50px;\n  max-height: 50px;\n}\n.dplayer-logo img {\n  max-width: 100%;\n  max-height: 100%;\n  background: none;\n}\n.dplayer-menu {\n  position: absolute;\n  width: 170px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.85);\n  padding: 5px 0;\n  overflow: hidden;\n  z-index: 3;\n  display: none;\n}\n.dplayer-menu.dplayer-menu-show {\n  display: block;\n}\n.dplayer-menu .dplayer-menu-item {\n  height: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-menu .dplayer-menu-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-menu .dplayer-menu-item a {\n  padding: 0 10px;\n  line-height: 30px;\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-menu .dplayer-menu-item a:hover {\n  text-decoration: none;\n}\n.dplayer-notice-list {\n  position: absolute;\n  bottom: 60px;\n  left: 20px;\n}\n.dplayer-notice-list .dplayer-notice {\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  display: table;\n  pointer-events: none;\n  animation: showNotice 0.3s ease 1 forwards;\n}\n.dplayer-notice-list .remove-notice {\n  animation: removeNotice 0.3s ease 1 forwards;\n}\n@keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n.dplayer-subtitle {\n  position: absolute;\n  bottom: 40px;\n  width: 90%;\n  left: 5%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n}\n.dplayer-subtitle.dplayer-subtitle-hide {\n  display: none;\n}\n.dplayer-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: none;\n}\n.dplayer-mask.dplayer-mask-show {\n  display: block;\n}\n.dplayer-video-wrap {\n  position: relative;\n  background: #000;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n.dplayer-video-wrap .dplayer-video {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.dplayer-video-wrap .dplayer-video-current {\n  display: block;\n}\n.dplayer-video-wrap .dplayer-video-prepare {\n  display: none;\n}\n.dplayer-info-panel {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 400px;\n  background: rgba(28, 28, 28, 0.8);\n  padding: 10px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 2px;\n}\n.dplayer-info-panel-hide {\n  display: none;\n}\n.dplayer-info-panel .dplayer-info-panel-close {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item > span {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-info-panel .dplayer-info-panel-item-title {\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item-data {\n  width: 260px;\n}\n", ".dplayer {\n    position: relative;\n    overflow: hidden;\n    user-select: none;\n    line-height: 1;\n\n    * {\n        box-sizing: content-box;\n    }\n\n    svg {\n        width: 100%;\n        height: 100%;\n\n        path,\n        circle {\n            fill: #fff;\n        }\n    }\n\n    &:-webkit-full-screen {\n        width: 100%;\n        height: 100%;\n        background: #000;\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        margin: 0;\n        padding: 0;\n        transform: translate(0, 0);\n        \n    }\n\n    &.dplayer-no-danmaku {\n        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n            .dplayer-setting-showdan,\n            .dplayer-setting-danmaku,\n            .dplayer-setting-danunlimit {\n                display: none;\n            }\n        }\n\n        .dplayer-controller .dplayer-icons .dplayer-comment {\n            display: none;\n        }\n\n        .dplayer-danmaku {\n            display: none;\n        }\n    }\n\n    &.dplayer-live {\n        .dplayer-time {\n            display: none;\n        }\n        .dplayer-bar-wrap {\n            display: none;\n        }\n        .dplayer-setting-speed {\n            display: none;\n        }\n        .dplayer-setting-loop {\n            display: none;\n        }\n\n        &.dplayer-no-danmaku {\n            .dplayer-setting {\n                display: none;\n            }\n        }\n    }\n\n    &.dplayer-arrow {\n        .dplayer-danmaku {\n            font-size: 18px;\n        }\n        .dplayer-icon {\n            margin: 0 -3px;\n        }\n    }\n\n    &.dplayer-playing {\n        .dplayer-danmaku .dplayer-danmaku-move {\n            animation-play-state: running;\n        }\n\n        @media (min-width: 900px) {\n            .dplayer-controller-mask {\n                opacity: 0;\n            }\n            .dplayer-controller {\n                opacity: 0;\n            }\n\n            &:hover {\n                .dplayer-controller-mask {\n                    opacity: 1;\n                }\n                .dplayer-controller {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n\n    &.dplayer-loading {\n        .dplayer-bezel .diplayer-loading-icon {\n            display: block;\n        }\n    }\n\n    &.dplayer-loading,\n    &.dplayer-paused {\n        .dplayer-danmaku,\n        .dplayer-danmaku-move {\n            animation-play-state: paused;\n        }\n    }\n\n    &.dplayer-hide-controller {\n        cursor: none;\n\n        .dplayer-controller-mask {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n        .dplayer-controller {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n    }\n    &.dplayer-show-controller {\n        .dplayer-controller-mask {\n            opacity: 1;\n        }\n        .dplayer-controller {\n            opacity: 1;\n        }\n    }\n    &.dplayer-fulled {\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        width: 100% !important;\n        height: 100% !important;\n    }\n    &.dplayer-mobile {\n        .dplayer-controller .dplayer-icons {\n            .dplayer-volume,\n            .dplayer-camera-icon,\n            .dplayer-airplay-icon,\n            .dplayer-chromecast-icon,\n            .dplayer-play-icon {\n                display: none;\n            }\n            .dplayer-full .dplayer-full-in-icon {\n                position: static;\n                display: inline-block;\n            }\n        }\n\n        .dplayer-bar-time {\n            display: none;\n        }\n\n        &.dplayer-hide-controller {\n            .dplayer-mobile-play {\n                display: none;\n            }\n        }\n\n        .dplayer-mobile-play {\n            display: block;\n        }\n    }\n}\n\n// To hide scroll bar, apply this class to <body>\n.dplayer-web-fullscreen-fix {\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n}\n", "@import '../../node_modules/balloon-css/balloon.css';\n\n[data-balloon]:before {\n    display: none;\n}\n\n[data-balloon]:after {\n    padding: 0.3em 0.7em;\n    background: rgba(17, 17, 17, 0.7);\n}\n\n[data-balloon][data-balloon-pos=\"up\"]:after {\n    margin-bottom: 0;\n}", ".dplayer-bezel {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    pointer-events: none;\n    .dplayer-bezel-icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -26px 0 0 -26px;\n        height: 52px;\n        width: 52px;\n        padding: 12px;\n        box-sizing: border-box;\n        background: rgba(0, 0, 0, .5);\n        border-radius: 50%;\n        opacity: 0;\n        pointer-events: none;\n        &.dplayer-bezel-transition {\n            animation: bezel-hide .5s linear;\n        }\n        @keyframes bezel-hide {\n            from {\n                opacity: 1;\n                transform: scale(1);\n            }\n            to {\n                opacity: 0;\n                transform: scale(2);\n            }\n        }\n    }\n    .dplayer-danloading {\n        position: absolute;\n        top: 50%;\n        margin-top: -7px;\n        width: 100%;\n        text-align: center;\n        font-size: 14px;\n        line-height: 14px;\n        animation: my-face 5s infinite ease-in-out;\n    }\n    .diplayer-loading-icon {\n        display: none;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -18px 0 0 -18px;\n        height: 36px;\n        width: 36px;\n        pointer-events: none;\n        .diplayer-loading-hide {\n            display: none;\n        }\n        .diplayer-loading-dot {\n            animation: diplayer-loading-dot-fade .8s ease infinite;\n            opacity: 0;\n            transform-origin: 4px 4px;\n            each(range(7), {\n                &.diplayer-loading-dot-@{value} {\n                    animation-delay: (@value * 0.1s);\n                }\n            });\n        }\n        @keyframes diplayer-loading-dot-fade {\n            0% {\n                opacity: .7;\n                transform: scale(1.2, 1.2)\n            }\n            50% {\n                opacity: .25;\n                transform: scale(.9, .9)\n            }\n            to {\n                opacity: .25;\n                transform: scale(.85, .85)\n            }\n        }\n    }\n}", ".dplayer-notice-list{\n    position: absolute;\n    bottom: 60px;\n    left: 20px;\n\n    .dplayer-notice {\n        border-radius: 2px;\n        background: rgba(28, 28, 28, 0.9);\n        transition: all .3s ease-in-out;\n        overflow: hidden;\n        color: #fff;\n        display: table;\n        pointer-events: none;\n        animation: showNotice .3s ease 1 forwards;\n    }\n\n    .remove-notice{\n        animation: removeNotice .3s ease 1 forwards;\n    }\n}\n\n@keyframes showNotice {\n    from {\n        padding: 0;\n        font-size: 0;\n        margin-top: 0;\n    }\n    to {\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n}\n\n@keyframes removeNotice {\n    0%{\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n    20%{\n        font-size: 12px;\n    }\n    21%{\n        font-size: 0;\n        padding: 7px 10px;\n    }\n    100%{\n        padding: 0;\n        margin-top: 0;\n        font-size: 0;\n    }\n}\n", '.dplayer-controller-mask {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n    height: 98px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    transition: all 0.3s ease;\n}\n\n.dplayer-controller {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 41px;\n    padding: 0 20px;\n    user-select: none;\n    transition: all 0.3s ease;\n    &.dplayer-controller-comment {\n        .dplayer-icons {\n            display: none;\n        }\n        .dplayer-icons.dplayer-comment-box {\n            display: block;\n        }\n    }\n    .dplayer-bar-wrap {\n        padding: 5px 0;\n        cursor: pointer;\n        position: absolute;\n        bottom: 33px;\n        width: calc(100% - 40px);\n        height: 3px;\n        &:hover {\n            .dplayer-bar .dplayer-played .dplayer-thumb {\n                transform: scale(1);\n            }\n            .dplayer-highlight {\n                display: block;\n                width: 8px;\n                transform: translateX(-4px);\n                top: 4px;\n                height: 40%;\n            }\n        }\n        .dplayer-highlight {\n            z-index: 12;\n            position: absolute;\n            top: 5px;\n            width: 6px;\n            height: 20%;\n            border-radius: 6px;\n            background-color: #fff;\n            text-align: center;\n            transform: translateX(-3px);\n            transition: all .2s ease-in-out;\n            &:hover {\n                .dplayer-highlight-text {\n                    display: block;\n                }\n                &~.dplayer-bar-preview {\n                    opacity: 0;\n                }\n                &~.dplayer-bar-time {\n                    opacity: 0;\n                }\n            }\n            .dplayer-highlight-text {\n                display: none;\n                position: absolute;\n                left: 50%;\n                top: -24px;\n                padding: 5px 8px;\n                background-color: rgba(0, 0, 0, .62);\n                color: #fff;\n                border-radius: 4px;\n                font-size: 12px;\n                white-space: nowrap;\n                transform: translateX(-50%);\n            }\n        }\n        .dplayer-bar-preview {\n            position: absolute;\n            background: #fff;\n            pointer-events: none;\n            display: none;\n            background-size: 16000px 100%;\n        }\n        .dplayer-bar-preview-canvas {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n            pointer-events: none;\n        }\n        .dplayer-bar-time {\n            &.hidden {\n                opacity: 0;\n            }\n            position: absolute;\n            left: 0px;\n            top: -20px;\n            border-radius: 4px;\n            padding: 5px 7px;\n            background-color: rgba(0, 0, 0, 0.62);\n            color: #fff;\n            font-size: 12px;\n            text-align: center;\n            opacity: 1;\n            transition: opacity .1s ease-in-out;\n            word-wrap: normal;\n            word-break: normal;\n            z-index: 2;\n            pointer-events: none;\n        }\n        .dplayer-bar {\n            position: relative;\n            height: 3px;\n            width: 100%;\n            background: rgba(255, 255, 255, .2);\n            cursor: pointer;\n            .dplayer-loaded {\n                position: absolute;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                background: rgba(255, 255, 255, .4);\n                height: 3px;\n                transition: all 0.5s ease;\n                will-change: width;\n            }\n            .dplayer-played {\n                position: absolute;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                height: 3px;\n                will-change: width;\n                .dplayer-thumb {\n                    position: absolute;\n                    top: 0;\n                    right: 5px;\n                    margin-top: -4px;\n                    margin-right: -10px;\n                    height: 11px;\n                    width: 11px;\n                    border-radius: 50%;\n                    cursor: pointer;\n                    transition: all .3s ease-in-out;\n                    transform: scale(0);\n                }\n            }\n        }\n    }\n    .dplayer-icons {\n        height: 38px;\n        position: absolute;\n        bottom: 0;\n        &.dplayer-comment-box {\n            display: none;\n            position: absolute;\n            transition: all .3s ease-in-out;\n            z-index: 2;\n            height: 38px;\n            bottom: 0;\n            left: 20px;\n            right: 20px;\n            color: #fff;\n            .dplayer-icon {\n                padding: 7px;\n            }\n            .dplayer-comment-setting-icon {\n                position: absolute;\n                left: 0;\n                top: 0;\n            }\n            .dplayer-send-icon {\n                position: absolute;\n                right: 0;\n                top: 0;\n            }\n            .dplayer-comment-setting-box {\n                position: absolute;\n                background: rgba(28, 28, 28, 0.9);\n                bottom: 41px;\n                left: 0;\n                box-shadow: 0 0 25px rgba(0, 0, 0, .3);\n                border-radius: 4px;\n                padding: 10px 10px 16px;\n                font-size: 14px;\n                width: 204px;\n                transition: all .3s ease-in-out;\n                transform: scale(0);\n                &.dplayer-comment-setting-open {\n                    transform: scale(1);\n                }\n                input[type=radio] {\n                    display: none;\n                }\n                label {\n                    cursor: pointer;\n                }\n                .dplayer-comment-setting-title {\n                    font-size: 13px;\n                    color: #fff;\n                    line-height: 30px;\n                }\n                .dplayer-comment-setting-type {\n                    font-size: 0;\n                    .dplayer-comment-setting-title {\n                        margin-bottom: 6px;\n                    }\n                    label {\n                        &:nth-child(2) {\n                            span {\n                                border-radius: 4px 0 0 4px;\n                            }\n                        }\n                        &:nth-child(4) {\n                            span {\n                                border-radius: 0 4px 4px 0;\n                            }\n                        }\n                    }\n                    span {\n                        width: 33%;\n                        padding: 4px 6px;\n                        line-height: 16px;\n                        display: inline-block;\n                        font-size: 12px;\n                        color: #fff;\n                        border: 1px solid #fff;\n                        margin-right: -1px;\n                        box-sizing: border-box;\n                        text-align: center;\n                        cursor: pointer;\n                    }\n                    input:checked+span {\n                        background: #E4E4E6;\n                        color: #1c1c1c;\n                    }\n                }\n                .dplayer-comment-setting-color {\n                    font-size: 0;\n                    label {\n                        font-size: 0;\n                        padding: 6px;\n                        display: inline-block;\n                    }\n                    span {\n                        width: 22px;\n                        height: 22px;\n                        display: inline-block;\n                        border-radius: 50%;\n                        box-sizing: border-box;\n                        cursor: pointer;\n                        &:hover {\n                            animation: my-face 5s infinite ease-in-out;\n                        }\n                    }\n                }\n            }\n            .dplayer-comment-input {\n                outline: none;\n                border: none;\n                padding: 8px 31px;\n                font-size: 14px;\n                line-height: 18px;\n                text-align: center;\n                border-radius: 4px;\n                background: none;\n                margin: 0;\n                height: 100%;\n                box-sizing: border-box;\n                width: 100%;\n                color: #fff;\n                &::placeholder {\n                    color: #fff;\n                    opacity: 0.8;\n                }\n                &::-ms-clear {\n                    display: none;\n                }\n            }\n        }\n        &.dplayer-icons-left {\n            .dplayer-icon {\n                padding: 7px;\n            }\n        }\n        &.dplayer-icons-right {\n            right: 20px;\n            .dplayer-icon {\n                padding: 8px;\n            }\n        }\n        .dplayer-time,\n        .dplayer-live-badge {\n            line-height: 38px;\n            color: #eee;\n            text-shadow: 0 0 2px rgba(0, 0, 0, .5);\n            vertical-align: middle;\n            font-size: 13px;\n            cursor: default;\n        }\n        .dplayer-live-dot {\n            display: inline-block;\n            width: 6px;\n            height: 6px;\n            vertical-align: 4%;\n            margin-right: 5px;\n            content: \'\';\n            border-radius: 6px;\n        }\n        .dplayer-icon {\n            width: 40px;\n            height: 100%;\n            border: none;\n            background-color: transparent;\n            outline: none;\n            cursor: pointer;\n            vertical-align: middle;\n            box-sizing: border-box;\n            display: inline-block;\n            .dplayer-icon-content {\n                transition: all .2s ease-in-out;\n                opacity: .8;\n            }\n            &:hover {\n                .dplayer-icon-content {\n                    opacity: 1;\n                }\n            }\n            &.dplayer-quality-icon {\n                color: #fff;\n                width: auto;\n                line-height: 22px;\n                font-size: 14px;\n            }\n            &.dplayer-comment-icon {\n                padding: 10px 9px 9px;\n            }\n            &.dplayer-setting-icon {\n                padding-top: 8.5px;\n            }\n            &.dplayer-volume-icon {\n                width: 43px;\n            }\n        }\n        .dplayer-volume {\n            position: relative;\n            display: inline-block;\n            cursor: pointer;\n            height: 100%;\n            &:hover {\n                .dplayer-volume-bar-wrap .dplayer-volume-bar {\n                    width: 45px;\n                }\n                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n                    transform: scale(1);\n                }\n            }\n            &.dplayer-volume-active {\n                .dplayer-volume-bar-wrap .dplayer-volume-bar {\n                    width: 45px;\n                }\n                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n                    transform: scale(1);\n                }\n            }\n            .dplayer-volume-bar-wrap {\n                display: inline-block;\n                margin: 0 10px 0 -5px;\n                vertical-align: middle;\n                height: 100%;\n                .dplayer-volume-bar {\n                    position: relative;\n                    top: 17px;\n                    width: 0;\n                    height: 3px;\n                    background: #aaa;\n                    transition: all 0.3s ease-in-out;\n                    .dplayer-volume-bar-inner {\n                        position: absolute;\n                        bottom: 0;\n                        left: 0;\n                        height: 100%;\n                        transition: all 0.1s ease;\n                        will-change: width;\n                        .dplayer-thumb {\n                            position: absolute;\n                            top: 0;\n                            right: 5px;\n                            margin-top: -4px;\n                            margin-right: -10px;\n                            height: 11px;\n                            width: 11px;\n                            border-radius: 50%;\n                            cursor: pointer;\n                            transition: all .3s ease-in-out;\n                            transform: scale(0);\n                        }\n                    }\n                }\n            }\n        }\n        .dplayer-subtitle-btn {\n            display: inline-block;\n            height: 100%;\n        }\n        .dplayer-subtitles {\n            display: inline-block;\n            height: 100%;\n            .dplayer-subtitles-box {\n                position: absolute;\n                right: 0;\n                bottom: 50px;\n                transform: scale(0);\n                width: fit-content;\n                max-width: 240px;\n                min-width: 120px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 7px 0;\n                transition: all .3s ease-in-out;\n                overflow: auto;\n                z-index: 2;\n                &.dplayer-subtitles-panel {\n                    display: block;\n                }\n                &.dplayer-subtitles-box-open {\n                    transform: scale(1);\n                }\n            }\n            .dplayer-subtitles-item {\n                height: 30px;\n                padding: 5px 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                position: relative;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n        }\n        .dplayer-setting {\n            display: inline-block;\n            height: 100%;\n            .dplayer-setting-box {\n                position: absolute;\n                right: 0;\n                bottom: 50px;\n                transform: scale(0);\n                width: 150px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 7px 0;\n                transition: all .3s ease-in-out;\n                overflow: hidden;\n                z-index: 2;\n                &>div {\n                    display: none;\n                    &.dplayer-setting-origin-panel {\n                        display: block;\n                    }\n                }\n                &.dplayer-setting-box-open {\n                    transform: scale(1);\n                }\n                &.dplayer-setting-box-narrow {\n                    width: 70px;\n                    text-align: center;\n                }\n                &.dplayer-setting-box-speed {\n                    .dplayer-setting-origin-panel {\n                        display: none;\n                    }\n                    .dplayer-setting-speed-panel {\n                        display: block;\n                    }\n                }\n            }\n            .dplayer-setting-item,\n            .dplayer-setting-speed-item {\n                height: 30px;\n                padding: 5px 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                position: relative;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n            .dplayer-setting-danmaku {\n                padding: 5px 0;\n                .dplayer-label {\n                    padding: 0 10px;\n                    display: inline;\n                }\n                &:hover {\n                    .dplayer-label {\n                        display: none;\n                    }\n                    .dplayer-danmaku-bar-wrap {\n                        display: inline-block;\n                    }\n                }\n                &.dplayer-setting-danmaku-active {\n                    .dplayer-label {\n                        display: none;\n                    }\n                    .dplayer-danmaku-bar-wrap {\n                        display: inline-block;\n                    }\n                }\n                .dplayer-danmaku-bar-wrap {\n                    padding: 0 10px;\n                    box-sizing: border-box;\n                    display: none;\n                    vertical-align: middle;\n                    height: 100%;\n                    width: 100%;\n                    .dplayer-danmaku-bar {\n                        position: relative;\n                        top: 8.5px;\n                        width: 100%;\n                        height: 3px;\n                        background: #fff;\n                        transition: all 0.3s ease-in-out;\n                        .dplayer-danmaku-bar-inner {\n                            position: absolute;\n                            bottom: 0;\n                            left: 0;\n                            height: 100%;\n                            transition: all 0.1s ease;\n                            background: #aaa;\n                            will-change: width;\n                            .dplayer-thumb {\n                                position: absolute;\n                                top: 0;\n                                right: 5px;\n                                margin-top: -4px;\n                                margin-right: -10px;\n                                height: 11px;\n                                width: 11px;\n                                border-radius: 50%;\n                                cursor: pointer;\n                                transition: all .3s ease-in-out;\n                                background: #aaa;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        .dplayer-full {\n            display: inline-block;\n            height: 100%;\n            position: relative;\n            &:hover {\n                .dplayer-full-in-icon {\n                    display: block;\n                }\n            }\n            .dplayer-full-in-icon {\n                position: absolute;\n                top: -30px;\n                z-index: 1;\n                display: none;\n            }\n        }\n        .dplayer-quality {\n            position: relative;\n            display: inline-block;\n            height: 100%;\n            z-index: 2;\n            &:hover {\n                .dplayer-quality-list {\n                    display: block;\n                }\n                .dplayer-quality-mask {\n                    display: block;\n                }\n            }\n            .dplayer-quality-mask {\n                display: none;\n                position: absolute;\n                bottom: 38px;\n                left: -18px;\n                width: 80px;\n                padding-bottom: 12px;\n            }\n            .dplayer-quality-list {\n                display: none;\n                font-size: 12px;\n                width: 80px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 5px 0;\n                transition: all .3s ease-in-out;\n                overflow: hidden;\n                color: #fff;\n                text-align: center;\n            }\n            .dplayer-quality-item {\n                height: 25px;\n                box-sizing: border-box;\n                cursor: pointer;\n                line-height: 25px;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n        }\n        .dplayer-comment {\n            display: inline-block;\n            height: 100%;\n        }\n        .dplayer-label {\n            color: #eee;\n            font-size: 13px;\n            display: inline-block;\n            vertical-align: middle;\n            white-space: nowrap;\n        }\n        .dplayer-toggle {\n            width: 32px;\n            height: 20px;\n            text-align: center;\n            font-size: 0;\n            vertical-align: middle;\n            position: absolute;\n            top: 5px;\n            right: 10px;\n            input {\n                max-height: 0;\n                max-width: 0;\n                display: none;\n            }\n            input+label {\n                display: inline-block;\n                position: relative;\n                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n                border: 1px solid rgb(223, 223, 223);\n                height: 20px;\n                width: 32px;\n                border-radius: 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                transition: .2s ease-in-out;\n            }\n            input+label:before {\n                content: "";\n                position: absolute;\n                display: block;\n                height: 18px;\n                width: 18px;\n                top: 0;\n                left: 0;\n                border-radius: 15px;\n                transition: .2s ease-in-out;\n            }\n            input+label:after {\n                content: "";\n                position: absolute;\n                display: block;\n                left: 0;\n                top: 0;\n                border-radius: 15px;\n                background: #fff;\n                transition: .2s ease-in-out;\n                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n                height: 18px;\n                width: 18px;\n            }\n            input:checked+label {\n                border-color: rgba(255, 255, 255, 0.5);\n            }\n            input:checked+label:before {\n                width: 30px;\n                background: rgba(255, 255, 255, 0.5);\n            }\n            input:checked+label:after {\n                left: 12px;\n            }\n        }\n    }\n}\n\n.dplayer-mobile-play {\n    display: none;\n    width: 50px;\n    height: 50px;\n    border: none;\n    background-color: transparent;\n    outline: none;\n    cursor: pointer;\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 0;\n    opacity: 0.8;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}', ".dplayer-danmaku {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    .dplayer-danmaku-item {\n        display: inline-block;\n        pointer-events: none;\n        user-select: none;\n        cursor: default;\n        white-space: nowrap;\n        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);\n        &--demo {\n            position: absolute;\n            visibility: hidden;\n        }\n    }\n    .dplayer-danmaku-right {\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        &.dplayer-danmaku-move {\n            will-change: transform;\n            animation-name: 'danmaku';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku {\n        from {\n            transform: translateX(100%);\n        }\n    }\n    .dplayer-danmaku-top,\n    .dplayer-danmaku-bottom {\n        position: absolute;\n        width: 100%;\n        text-align: center;\n        visibility: hidden;\n        &.dplayer-danmaku-move {\n            will-change: visibility;\n            animation-name: 'danmaku-center';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku-center {\n        from {\n            visibility: visible;\n        }\n        to {\n            visibility: visible;\n        }\n    }\n}", ".dplayer-logo {\n    pointer-events: none;\n    position: absolute;\n    left: 20px;\n    top: 20px;\n    max-width: 50px;\n    max-height: 50px;\n    img {\n        max-width: 100%;\n        max-height: 100%;\n        background: none;\n    }\n}", ".dplayer-menu {\n    position: absolute;\n    width: 170px;\n    border-radius: 2px;\n    background: rgba(28, 28, 28, 0.85);\n    padding: 5px 0;\n    overflow: hidden;\n    z-index: 3;\n    display: none;\n    &.dplayer-menu-show {\n        display: block;\n    }\n    .dplayer-menu-item {\n        height: 30px;\n        box-sizing: border-box;\n        cursor: pointer;\n        &:hover {\n            background-color: rgba(255, 255, 255, .1);\n        }\n        a {\n            display: inline-block;\n            padding: 0 10px;\n            line-height: 30px;\n            color: #eee;\n            font-size: 13px;\n            display: inline-block;\n            vertical-align: middle;\n            width: 100%;\n            box-sizing: border-box;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            &:hover {\n                text-decoration: none;\n            }\n        }\n    }\n}", ".dplayer-subtitle {\n    position: absolute;\n    bottom: 40px;\n    width: 90%;\n    left: 5%;\n    text-align: center;\n    color: #fff;\n    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    &.dplayer-subtitle-hide {\n        display: none;\n    }\n}", ".dplayer-mask {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    display: none;\n    &.dplayer-mask-show {\n        display: block;\n    }\n}\n\n.dplayer-video-wrap {\n    position: relative;\n    background: #000;\n    font-size: 0;\n    width: 100%;\n    height: 100%;\n    .dplayer-video {\n        width: 100%;\n        height: 100%;\n        display: none;\n    }\n    .dplayer-video-current {\n        display: block;\n    }\n    .dplayer-video-prepare {\n        display: none;\n    }\n}", ".dplayer-info-panel {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 400px;\n    background: rgba(28, 28, 28, 0.8);\n    padding: 10px;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 2px;\n\n    &-hide {\n        display: none;\n    }\n\n    .dplayer-info-panel-close {\n        cursor: pointer;\n        position: absolute;\n        right: 10px;\n        top: 10px;\n    }\n\n    .dplayer-info-panel-item {\n        & > span {\n            display: inline-block;\n            vertical-align: middle;\n            line-height: 15px;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n    }\n\n    .dplayer-info-panel-item-title {\n        width: 100px;\n        text-align: right;\n        margin-right: 10px;\n    }\n    \n    .dplayer-info-panel-item-data {\n        width: 260px;\n    }\n}"],
                    sourceRoot: ""
                }]);
                const u = c
            },
            856: n => {
                "use strict";
                var e = [];

                function t(n) {
                    for (var t = -1, a = 0; a < e.length; a++)
                        if (e[a].identifier === n) {
                            t = a;
                            break
                        } return t
                }

                function a(n, a) {
                    for (var r = {}, i = [], l = 0; l < n.length; l++) {
                        var s = n[l],
                            p = a.base ? s[0] + a.base : s[0],
                            d = r[p] || 0,
                            c = "".concat(p, " ").concat(d);
                        r[p] = d + 1;
                        var A = t(c),
                            u = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3],
                                supports: s[4],
                                layer: s[5]
                            };
                        if (-1 !== A) e[A].references++, e[A].updater(u);
                        else {
                            var y = o(u, a);
                            a.byIndex = l, e.splice(l, 0, {
                                identifier: c,
                                updater: y,
                                references: 1
                            })
                        }
                        i.push(c)
                    }
                    return i
                }

                function o(n, e) {
                    var t = e.domAPI(e);
                    return t.update(n),
                        function (e) {
                            if (e) {
                                if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap && e.supports === n.supports && e.layer === n.layer) return;
                                t.update(n = e)
                            } else t.remove()
                        }
                }
                n.exports = function (n, o) {
                    var r = a(n = n || [], o = o || {});
                    return function (n) {
                        n = n || [];
                        for (var i = 0; i < r.length; i++) {
                            var l = t(r[i]);
                            e[l].references--
                        }
                        for (var s = a(n, o), p = 0; p < r.length; p++) {
                            var d = t(r[p]);
                            0 === e[d].references && (e[d].updater(), e.splice(d, 1))
                        }
                        r = s
                    }
                }
            },
            370: n => {
                "use strict";
                var e = {};
                n.exports = function (n, t) {
                    var a = function (n) {
                        if (void 0 === e[n]) {
                            var t = document.querySelector(n);
                            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                                t = t.contentDocument.head
                            } catch (n) {
                                t = null
                            }
                            e[n] = t
                        }
                        return e[n]
                    }(n);
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t)
                }
            },
            278: n => {
                "use strict";
                n.exports = function (n) {
                    var e = document.createElement("style");
                    return n.setAttributes(e, n.attributes), n.insert(e, n.options), e
                }
            },
            458: (n, e, t) => {
                "use strict";
                n.exports = function (n) {
                    var e = t.nc;
                    e && n.setAttribute("nonce", e)
                }
            },
            470: n => {
                "use strict";
                n.exports = function (n) {
                    var e = n.insertStyleElement(n);
                    return {
                        update: function (t) {
                            ! function (n, e, t) {
                                var a = "";
                                t.supports && (a += "@supports (".concat(t.supports, ") {")), t.media && (a += "@media ".concat(t.media, " {"));
                                var o = void 0 !== t.layer;
                                o && (a += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), a += t.css, o && (a += "}"), t.media && (a += "}"), t.supports && (a += "}");
                                var r = t.sourceMap;
                                r && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e.styleTagTransform(a, n, e.options)
                            }(e, n, t)
                        },
                        remove: function () {
                            ! function (n) {
                                if (null === n.parentNode) return !1;
                                n.parentNode.removeChild(n)
                            }(e)
                        }
                    }
                }
            },
            488: n => {
                "use strict";
                n.exports = function (n, e) {
                    if (e.styleSheet) e.styleSheet.cssText = n;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n))
                    }
                }
            },
            251: n => {
                n.exports = '<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'
            },
            113: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'
            },
            193: n => {
                n.exports = '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'
            },
            338: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'
            },
            807: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'
            },
            300: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'
            },
            574: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'
            },
            182: n => {
                n.exports = '<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'
            },
            965: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'
            },
            74: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'
            },
            730: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'
            },
            428: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'
            },
            254: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'
            },
            934: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'
            },
            410: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'
            },
            644: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'
            },
            324: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'
            },
            437: n => {
                n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'
            },
            897: (n, e, t) => {
                "use strict";
                var a = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t.g ? t.g : {},
                    o = Object.create(a),
                    r = /["&'<>]/;

                function i(n) {
                    return "string" != typeof n && (n = null == n ? "" : "function" == typeof n ? i(n.call(n)) : JSON.stringify(n)), n
                }
                o.$escape = function (n) {
                    return function (n) {
                        var e = "" + n,
                            t = r.exec(e);
                        if (!t) return n;
                        var a = "",
                            o = void 0,
                            i = void 0,
                            l = void 0;
                        for (o = t.index, i = 0; o < e.length; o++) {
                            switch (e.charCodeAt(o)) {
                                case 34:
                                    l = "&#34;";
                                    break;
                                case 38:
                                    l = "&#38;";
                                    break;
                                case 39:
                                    l = "&#39;";
                                    break;
                                case 60:
                                    l = "&#60;";
                                    break;
                                case 62:
                                    l = "&#62;";
                                    break;
                                default:
                                    continue
                            }
                            i !== o && (a += e.substring(i, o)), i = o + 1, a += l
                        }
                        return i !== o ? a + e.substring(i, o) : a
                    }(i(n))
                }, o.$each = function (n, e) {
                    if (Array.isArray(n))
                        for (var t = 0, a = n.length; t < a; t++) e(n[t], t);
                    else
                        for (var o in n) e(n[o], o)
                }, n.exports = o
            },
            471: (n, e, t) => {
                "use strict";
                n.exports = t(897)
            },
            352: n => {
                "use strict";
                n.exports = function (n) {
                    var e = [];
                    return e.toString = function () {
                        return this.map((function (e) {
                            var t = "",
                                a = void 0 !== e[5];
                            return e[4] && (t += "@supports (".concat(e[4], ") {")), e[2] && (t += "@media ".concat(e[2], " {")), a && (t += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), t += n(e), a && (t += "}"), e[2] && (t += "}"), e[4] && (t += "}"), t
                        })).join("")
                    }, e.i = function (n, t, a, o, r) {
                        "string" == typeof n && (n = [
                            [null, n, void 0]
                        ]);
                        var i = {};
                        if (a)
                            for (var l = 0; l < this.length; l++) {
                                var s = this[l][0];
                                null != s && (i[s] = !0)
                            }
                        for (var p = 0; p < n.length; p++) {
                            var d = [].concat(n[p]);
                            a && i[d[0]] || (void 0 !== r && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = r), t && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = t) : d[2] = t), o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = o) : d[4] = "".concat(o)), e.push(d))
                        }
                    }, e
                }
            },
            80: n => {
                "use strict";
                n.exports = function (n, e) {
                    return e || (e = {}), n ? (n = String(n.__esModule ? n.default : n), /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)), e.hash && (n += e.hash), /["'() \t\n]|(%20)/.test(n) || e.needQuotes ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : n) : n
                }
            },
            415: n => {
                "use strict";
                n.exports = function (n) {
                    var e = n[1],
                        t = n[3];
                    if (!t) return e;
                    if ("function" == typeof btoa) {
                        var a = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                            o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),
                            r = "/*# ".concat(o, " */");
                        return [e].concat([r]).join("\n")
                    }
                    return [e].join("\n")
                }
            },
            937: n => {
                function e(n) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                        return typeof n
                    } : function (n) {
                        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                    }, e(n)
                }
                n.exports = "object" == ("undefined" == typeof self ? "undefined" : e(self)) ? self.FormData : window.FormData
            },
            831: n => {
                "use strict";
                n.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="
            }
        },
        e = {};

    function t(a) {
        var o = e[a];
        if (void 0 !== o) return o.exports;
        var r = e[a] = {
            id: a,
            exports: {}
        };
        return n[a](r, r.exports, t), r.exports
    }
    t.m = n, t.n = n => {
        var e = n && n.__esModule ? () => n.default : () => n;
        return t.d(e, {
            a: e
        }), e
    }, t.d = (n, e) => {
        for (var a in e) t.o(e, a) && !t.o(n, a) && Object.defineProperty(n, a, {
            enumerable: !0,
            get: e[a]
        })
    }, t.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (n) {
            if ("object" == typeof window) return window
        }
    }(), t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), t.b = document.baseURI || self.location.href, t.nc = void 0;
    var a = {};
    return (() => {
        "use strict";
        t.d(a, {
            default: () => Za
        });
        var n = t(856),
            e = t.n(n),
            o = t(470),
            r = t.n(o),
            i = t(370),
            l = t.n(i),
            s = t(458),
            p = t.n(s),
            d = t(278),
            c = t.n(d),
            A = t(488),
            u = t.n(A),
            y = t(685),
            m = {};
        m.styleTagTransform = u(), m.setAttributes = p(), m.insert = l().bind(null, "head"), m.domAPI = r(), m.insertStyleElement = c(), e()(y.Z, m), y.Z && y.Z.locals && y.Z.locals;

        function h(n) {
            return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, h(n)
        }

        function f(n, e) {
            this.name = "AggregateError", this.errors = n, this.message = e || ""
        }
        f.prototype = Error.prototype;

        function b(n) {
            return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, b(n)
        }
        var g = setTimeout;

        function v(n) {
            return Boolean(n && void 0 !== n.length)
        }

        function x() {}

        function E(n) {
            if (!(this instanceof E)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof n) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], I(n, this)
        }

        function w(n, e) {
            for (; 3 === n._state;) n = n._value;
            0 !== n._state ? (n._handled = !0, E._immediateFn((function () {
                var t = 1 === n._state ? e.onFulfilled : e.onRejected;
                if (null !== t) {
                    var a;
                    try {
                        a = t(n._value)
                    } catch (n) {
                        return void k(e.promise, n)
                    }
                    C(e.promise, a)
                } else(1 === n._state ? C : k)(e.promise, n._value)
            }))) : n._deferreds.push(e)
        }

        function C(n, e) {
            try {
                if (e === n) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" === b(e) || "function" == typeof e)) {
                    var t = e.then;
                    if (e instanceof E) return n._state = 3, n._value = e, void B(n);
                    if ("function" == typeof t) return void I((a = t, o = e, function () {
                        a.apply(o, arguments)
                    }), n)
                }
                n._state = 1, n._value = e, B(n)
            } catch (e) {
                k(n, e)
            }
            var a, o
        }

        function k(n, e) {
            n._state = 2, n._value = e, B(n)
        }

        function B(n) {
            2 === n._state && 0 === n._deferreds.length && E._immediateFn((function () {
                n._handled || E._unhandledRejectionFn(n._value)
            }));
            for (var e = 0, t = n._deferreds.length; e < t; e++) w(n, n._deferreds[e]);
            n._deferreds = null
        }

        function S(n, e, t) {
            this.onFulfilled = "function" == typeof n ? n : null, this.onRejected = "function" == typeof e ? e : null, this.promise = t
        }

        function I(n, e) {
            var t = !1;
            try {
                n((function (n) {
                    t || (t = !0, C(e, n))
                }), (function (n) {
                    t || (t = !0, k(e, n))
                }))
            } catch (n) {
                if (t) return;
                t = !0, k(e, n)
            }
        }
        E.prototype.catch = function (n) {
            return this.then(null, n)
        }, E.prototype.then = function (n, e) {
            var t = new this.constructor(x);
            return w(this, new S(n, e, t)), t
        }, E.prototype.finally = function (n) {
            var e = this.constructor;
            return this.then((function (t) {
                return e.resolve(n()).then((function () {
                    return t
                }))
            }), (function (t) {
                return e.resolve(n()).then((function () {
                    return e.reject(t)
                }))
            }))
        }, E.all = function (n) {
            return new E((function (e, t) {
                if (!v(n)) return t(new TypeError("Promise.all accepts an array"));
                var a = Array.prototype.slice.call(n);
                if (0 === a.length) return e([]);
                var o = a.length;

                function r(n, i) {
                    try {
                        if (i && ("object" === b(i) || "function" == typeof i)) {
                            var l = i.then;
                            if ("function" == typeof l) return void l.call(i, (function (e) {
                                r(n, e)
                            }), t)
                        }
                        a[n] = i, 0 == --o && e(a)
                    } catch (n) {
                        t(n)
                    }
                }
                for (var i = 0; i < a.length; i++) r(i, a[i])
            }))
        }, E.any = function (n) {
            var e = this;
            return new e((function (t, a) {
                if (!n || void 0 === n.length) return a(new TypeError("Promise.any accepts an array"));
                var o = Array.prototype.slice.call(n);
                if (0 === o.length) return a();
                for (var r = [], i = 0; i < o.length; i++) try {
                    e.resolve(o[i]).then(t).catch((function (n) {
                        r.push(n), r.length === o.length && a(new f(r, "All promises were rejected"))
                    }))
                } catch (n) {
                    a(n)
                }
            }))
        }, E.allSettled = function (n) {
            return new this((function (e, t) {
                if (!n || void 0 === n.length) return t(new TypeError(h(n) + " " + n + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                var a = Array.prototype.slice.call(n);
                if (0 === a.length) return e([]);
                var o = a.length;

                function r(n, t) {
                    if (t && ("object" === h(t) || "function" == typeof t)) {
                        var i = t.then;
                        if ("function" == typeof i) return void i.call(t, (function (e) {
                            r(n, e)
                        }), (function (t) {
                            a[n] = {
                                status: "rejected",
                                reason: t
                            }, 0 == --o && e(a)
                        }))
                    }
                    a[n] = {
                        status: "fulfilled",
                        value: t
                    }, 0 == --o && e(a)
                }
                for (var i = 0; i < a.length; i++) r(i, a[i])
            }))
        }, E.resolve = function (n) {
            return n && "object" === b(n) && n.constructor === E ? n : new E((function (e) {
                e(n)
            }))
        }, E.reject = function (n) {
            return new E((function (e, t) {
                t(n)
            }))
        }, E.race = function (n) {
            return new E((function (e, t) {
                if (!v(n)) return t(new TypeError("Promise.race accepts an array"));
                for (var a = 0, o = n.length; a < o; a++) E.resolve(n[a]).then(e, t)
            }))
        }, E._immediateFn = "function" == typeof setImmediate && function (n) {
            setImmediate(n)
        } || function (n) {
            g(n, 0)
        }, E._unhandledRejectionFn = function (n) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", n)
        };
        const L = E;
        var z = /mobile/i.test(window.navigator.userAgent);
        const T = {
            secondToTime: function (n) {
                if (0 === (n = n || 0) || n === 1 / 0 || "NaN" === n.toString()) return "00:00";
                var e = Math.floor(n / 3600),
                    t = Math.floor((n - 3600 * e) / 60),
                    a = Math.floor(n - 3600 * e - 60 * t);
                return (e > 0 ? [e, t, a] : [t, a]).map((function (n) {
                    return n < 10 ? "0" + n : "" + n
                })).join(":")
            },
            getElementViewLeft: function (n) {
                var e = n.offsetLeft,
                    t = n.offsetParent,
                    a = document.body.scrollLeft + document.documentElement.scrollLeft;
                if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
                    for (; null !== t && t !== n;) e += t.offsetLeft, t = t.offsetParent;
                else
                    for (; null !== t;) e += t.offsetLeft, t = t.offsetParent;
                return e - a
            },
            getBoundingClientRectViewLeft: function (n) {
                var e = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
                if (n.getBoundingClientRect) {
                    if ("number" != typeof this.getBoundingClientRectViewLeft.offset) {
                        var t = document.createElement("div");
                        t.style.cssText = "position:absolute;top:0;left:0;", document.body.appendChild(t), this.getBoundingClientRectViewLeft.offset = -t.getBoundingClientRect().top - e, document.body.removeChild(t), t = null
                    }
                    var a = n.getBoundingClientRect(),
                        o = this.getBoundingClientRectViewLeft.offset;
                    return a.left + o
                }
                return this.getElementViewLeft(n)
            },
            getScrollPosition: function () {
                return {
                    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                }
            },
            setScrollPosition: function (n) {
                var e = n.left,
                    t = void 0 === e ? 0 : e,
                    a = n.top,
                    o = void 0 === a ? 0 : a;
                this.isFirefox ? (document.documentElement.scrollLeft = t, document.documentElement.scrollTop = o) : window.scrollTo(t, o)
            },
            isMobile: z,
            isFirefox: /firefox/i.test(window.navigator.userAgent),
            isChrome: /chrome/i.test(window.navigator.userAgent),
            isSafari: /safari/i.test(window.navigator.userAgent),
            storage: {
                set: function (n, e) {
                    localStorage.setItem(n, e)
                },
                get: function (n) {
                    return localStorage.getItem(n)
                }
            },
            nameMap: {
                dragStart: z ? "touchstart" : "mousedown",
                dragMove: z ? "touchmove" : "mousemove",
                dragEnd: z ? "touchend" : "mouseup"
            },
            color2Number: function (n) {
                return "#" === n[0] && (n = n.substr(1)), 3 === n.length && (n = "".concat(n[0]).concat(n[0]).concat(n[1]).concat(n[1]).concat(n[2]).concat(n[2])), parseInt(n, 16) + 0 & 16777215
            },
            number2Color: function (n) {
                return "#" + ("00000" + n.toString(16)).slice(-6)
            },
            number2Type: function (n) {
                switch (n) {
                    case 0:
                    default:
                        return "right";
                    case 1:
                        return "top";
                    case 2:
                        return "bottom"
                }
            }
        };

        function q(n, e) {
            return function () {
                return n.apply(e, arguments)
            }
        }

        function O(n) {
            return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, O(n)
        }
        var j, D = Object.prototype.toString,
            P = Object.getPrototypeOf,
            R = (j = Object.create(null), function (n) {
                var e = D.call(n);
                return j[e] || (j[e] = e.slice(8, -1).toLowerCase())
            }),
            Y = function (n) {
                return n = n.toLowerCase(),
                    function (e) {
                        return R(e) === n
                    }
            },
            M = function (n) {
                return function (e) {
                    return O(e) === n
                }
            },
            F = Array.isArray,
            W = M("undefined"),
            U = Y("ArrayBuffer"),
            N = M("string"),
            Q = M("function"),
            H = M("number"),
            _ = function (n) {
                return null !== n && "object" === O(n)
            },
            K = function (n) {
                if ("object" !== R(n)) return !1;
                var e = P(n);
                return !(null !== e && e !== Object.prototype && null !== Object.getPrototypeOf(e) || Symbol.toStringTag in n || Symbol.iterator in n)
            },
            Z = Y("Date"),
            V = Y("File"),
            X = Y("Blob"),
            J = Y("FileList"),
            G = Y("URLSearchParams");

        function $(n, e) {
            var t, a, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = o.allOwnKeys,
                i = void 0 !== r && r;
            if (null != n)
                if ("object" !== O(n) && (n = [n]), F(n))
                    for (t = 0, a = n.length; t < a; t++) e.call(null, n[t], t, n);
                else {
                    var l, s = i ? Object.getOwnPropertyNames(n) : Object.keys(n),
                        p = s.length;
                    for (t = 0; t < p; t++) l = s[t], e.call(null, n[l], l, n)
                }
        }

        function nn(n, e) {
            e = e.toLowerCase();
            for (var t, a = Object.keys(n), o = a.length; o-- > 0;)
                if (e === (t = a[o]).toLowerCase()) return t;
            return null
        }
        var en, tn, an = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
            on = function (n) {
                return !W(n) && n !== an
            },
            rn = (en = "undefined" != typeof Uint8Array && P(Uint8Array), function (n) {
                return en && n instanceof en
            }),
            ln = Y("HTMLFormElement"),
            sn = (tn = Object.prototype.hasOwnProperty, function (n, e) {
                return tn.call(n, e)
            }),
            pn = Y("RegExp"),
            dn = function (n, e) {
                var t = Object.getOwnPropertyDescriptors(n),
                    a = {};
                $(t, (function (t, o) {
                    !1 !== e(t, o, n) && (a[o] = t)
                })), Object.defineProperties(n, a)
            };
        const cn = {
            isArray: F,
            isArrayBuffer: U,
            isBuffer: function (n) {
                return null !== n && !W(n) && null !== n.constructor && !W(n.constructor) && Q(n.constructor.isBuffer) && n.constructor.isBuffer(n)
            },
            isFormData: function (n) {
                var e = "[object FormData]";
                return n && ("function" == typeof FormData && n instanceof FormData || D.call(n) === e || Q(n.toString) && n.toString() === e)
            },
            isArrayBufferView: function (n) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(n) : n && n.buffer && U(n.buffer)
            },
            isString: N,
            isNumber: H,
            isBoolean: function (n) {
                return !0 === n || !1 === n
            },
            isObject: _,
            isPlainObject: K,
            isUndefined: W,
            isDate: Z,
            isFile: V,
            isBlob: X,
            isRegExp: pn,
            isFunction: Q,
            isStream: function (n) {
                return _(n) && Q(n.pipe)
            },
            isURLSearchParams: G,
            isTypedArray: rn,
            isFileList: J,
            forEach: $,
            merge: function n() {
                for (var e = on(this) && this || {}, t = e.caseless, a = {}, o = function (e, o) {
                        var r = t && nn(a, o) || o;
                        K(a[r]) && K(e) ? a[r] = n(a[r], e) : K(e) ? a[r] = n({}, e) : F(e) ? a[r] = e.slice() : a[r] = e
                    }, r = 0, i = arguments.length; r < i; r++) arguments[r] && $(arguments[r], o);
                return a
            },
            extend: function (n, e, t) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = a.allOwnKeys;
                return $(e, (function (e, a) {
                    t && Q(e) ? n[a] = q(e, t) : n[a] = e
                }), {
                    allOwnKeys: o
                }), n
            },
            trim: function (n) {
                return n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            },
            stripBOM: function (n) {
                return 65279 === n.charCodeAt(0) && (n = n.slice(1)), n
            },
            inherits: function (n, e, t, a) {
                n.prototype = Object.create(e.prototype, a), n.prototype.constructor = n, Object.defineProperty(n, "super", {
                    value: e.prototype
                }), t && Object.assign(n.prototype, t)
            },
            toFlatObject: function (n, e, t, a) {
                var o, r, i, l = {};
                if (e = e || {}, null == n) return e;
                do {
                    for (r = (o = Object.getOwnPropertyNames(n)).length; r-- > 0;) i = o[r], a && !a(i, n, e) || l[i] || (e[i] = n[i], l[i] = !0);
                    n = !1 !== t && P(n)
                } while (n && (!t || t(n, e)) && n !== Object.prototype);
                return e
            },
            kindOf: R,
            kindOfTest: Y,
            endsWith: function (n, e, t) {
                n = String(n), (void 0 === t || t > n.length) && (t = n.length), t -= e.length;
                var a = n.indexOf(e, t);
                return -1 !== a && a === t
            },
            toArray: function (n) {
                if (!n) return null;
                if (F(n)) return n;
                var e = n.length;
                if (!H(e)) return null;
                for (var t = new Array(e); e-- > 0;) t[e] = n[e];
                return t
            },
            forEachEntry: function (n, e) {
                for (var t, a = (n && n[Symbol.iterator]).call(n);
                    (t = a.next()) && !t.done;) {
                    var o = t.value;
                    e.call(n, o[0], o[1])
                }
            },
            matchAll: function (n, e) {
                for (var t, a = []; null !== (t = n.exec(e));) a.push(t);
                return a
            },
            isHTMLForm: ln,
            hasOwnProperty: sn,
            hasOwnProp: sn,
            reduceDescriptors: dn,
            freezeMethods: function (n) {
                dn(n, (function (e, t) {
                    if (Q(n) && -1 !== ["arguments", "caller", "callee"].indexOf(t)) return !1;
                    var a = n[t];
                    Q(a) && (e.enumerable = !1, "writable" in e ? e.writable = !1 : e.set || (e.set = function () {
                        throw Error("Can not rewrite read-only method '" + t + "'")
                    }))
                }))
            },
            toObjectSet: function (n, e) {
                var t = {},
                    a = function (n) {
                        n.forEach((function (n) {
                            t[n] = !0
                        }))
                    };
                return F(n) ? a(n) : a(String(n).split(e)), t
            },
            toCamelCase: function (n) {
                return n.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, (function (n, e, t) {
                    return e.toUpperCase() + t
                }))
            },
            noop: function () {},
            toFiniteNumber: function (n, e) {
                return n = +n, Number.isFinite(n) ? n : e
            },
            findKey: nn,
            global: an,
            isContextDefined: on,
            toJSONObject: function (n) {
                var e = new Array(10);
                return function n(t, a) {
                    if (_(t)) {
                        if (e.indexOf(t) >= 0) return;
                        if (!("toJSON" in t)) {
                            e[a] = t;
                            var o = F(t) ? [] : {};
                            return $(t, (function (e, t) {
                                var r = n(e, a + 1);
                                !W(r) && (o[t] = r)
                            })), e[a] = void 0, o
                        }
                    }
                    return t
                }(n, 0)
            }
        };

        function An(n, e, t, a, o) {
            Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), a && (this.request = a), o && (this.response = o)
        }
        cn.inherits(An, Error, {
            toJSON: function () {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: cn.toJSONObject(this.config),
                    code: this.code,
                    status: this.response && this.response.status ? this.response.status : null
                }
            }
        });
        var un = An.prototype,
            yn = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((function (n) {
            yn[n] = {
                value: n
            }
        })), Object.defineProperties(An, yn), Object.defineProperty(un, "isAxiosError", {
            value: !0
        }), An.from = function (n, e, t, a, o, r) {
            var i = Object.create(un);
            return cn.toFlatObject(n, i, (function (n) {
                return n !== Error.prototype
            }), (function (n) {
                return "isAxiosError" !== n
            })), An.call(i, n.message, e, t, a, o), i.cause = n, i.name = n.name, r && Object.assign(i, r), i
        };
        const mn = An,
            hn = t(937);

        function fn(n) {
            return fn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, fn(n)
        }

        function bn(n) {
            return cn.isPlainObject(n) || cn.isArray(n)
        }

        function gn(n) {
            return cn.endsWith(n, "[]") ? n.slice(0, -2) : n
        }

        function vn(n, e, t) {
            return n ? n.concat(e).map((function (n, e) {
                return n = gn(n), !t && e ? "[" + n + "]" : n
            })).join(t ? "." : "") : e
        }
        var xn = cn.toFlatObject(cn, {}, null, (function (n) {
            return /^is[A-Z]/.test(n)
        }));
        const En = function (n, e, t) {
            if (!cn.isObject(n)) throw new TypeError("target must be an object");
            e = e || new(hn || FormData);
            var a, o = (t = cn.toFlatObject(t, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, (function (n, e) {
                    return !cn.isUndefined(e[n])
                }))).metaTokens,
                r = t.visitor || d,
                i = t.dots,
                l = t.indexes,
                s = (t.Blob || "undefined" != typeof Blob && Blob) && (a = e) && cn.isFunction(a.append) && "FormData" === a[Symbol.toStringTag] && a[Symbol.iterator];
            if (!cn.isFunction(r)) throw new TypeError("visitor must be a function");

            function p(n) {
                if (null === n) return "";
                if (cn.isDate(n)) return n.toISOString();
                if (!s && cn.isBlob(n)) throw new mn("Blob is not supported. Use a Buffer instead.");
                return cn.isArrayBuffer(n) || cn.isTypedArray(n) ? s && "function" == typeof Blob ? new Blob([n]) : Buffer.from(n) : n
            }

            function d(n, t, a) {
                var r = n;
                if (n && !a && "object" === fn(n))
                    if (cn.endsWith(t, "{}")) t = o ? t : t.slice(0, -2), n = JSON.stringify(n);
                    else if (cn.isArray(n) && function (n) {
                        return cn.isArray(n) && !n.some(bn)
                    }(n) || cn.isFileList(n) || cn.endsWith(t, "[]") && (r = cn.toArray(n))) return t = gn(t), r.forEach((function (n, a) {
                    !cn.isUndefined(n) && null !== n && e.append(!0 === l ? vn([t], a, i) : null === l ? t : t + "[]", p(n))
                })), !1;
                return !!bn(n) || (e.append(vn(a, t, i), p(n)), !1)
            }
            var c = [],
                A = Object.assign(xn, {
                    defaultVisitor: d,
                    convertValue: p,
                    isVisitable: bn
                });
            if (!cn.isObject(n)) throw new TypeError("data must be an object");
            return function n(t, a) {
                if (!cn.isUndefined(t)) {
                    if (-1 !== c.indexOf(t)) throw Error("Circular reference detected in " + a.join("."));
                    c.push(t), cn.forEach(t, (function (t, o) {
                        !0 === (!(cn.isUndefined(t) || null === t) && r.call(e, t, cn.isString(o) ? o.trim() : o, a, A)) && n(t, a ? a.concat(o) : [o])
                    })), c.pop()
                }
            }(n), e
        };

        function wn(n) {
            var e = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            };
            return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, (function (n) {
                return e[n]
            }))
        }

        function Cn(n, e) {
            this._pairs = [], n && En(n, this, e)
        }
        var kn = Cn.prototype;
        kn.append = function (n, e) {
            this._pairs.push([n, e])
        }, kn.toString = function (n) {
            var e = n ? function (e) {
                return n.call(this, e, wn)
            } : wn;
            return this._pairs.map((function (n) {
                return e(n[0]) + "=" + e(n[1])
            }), "").join("&")
        };
        const Bn = Cn;

        function Sn(n) {
            return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        function In(n, e, t) {
            if (!e) return n;
            var a, o = t && t.encode || Sn,
                r = t && t.serialize;
            if (a = r ? r(e, t) : cn.isURLSearchParams(e) ? e.toString() : new Bn(e, t).toString(o)) {
                var i = n.indexOf("#"); - 1 !== i && (n = n.slice(0, i)), n += (-1 === n.indexOf("?") ? "?" : "&") + a
            }
            return n
        }

        function Ln(n) {
            return Ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Ln(n)
        }

        function zn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== Ln(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== Ln(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === Ln(o) ? o : String(o)), a)
            }
            var o
        }
        var Tn = function () {
            function n() {
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.handlers = []
            }
            var e, t;
            return e = n, t = [{
                key: "use",
                value: function (n, e, t) {
                    return this.handlers.push({
                        fulfilled: n,
                        rejected: e,
                        synchronous: !!t && t.synchronous,
                        runWhen: t ? t.runWhen : null
                    }), this.handlers.length - 1
                }
            }, {
                key: "eject",
                value: function (n) {
                    this.handlers[n] && (this.handlers[n] = null)
                }
            }, {
                key: "clear",
                value: function () {
                    this.handlers && (this.handlers = [])
                }
            }, {
                key: "forEach",
                value: function (n) {
                    cn.forEach(this.handlers, (function (e) {
                        null !== e && n(e)
                    }))
                }
            }], t && zn(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const qn = Tn,
            On = {
                silentJSONParsing: !0,
                forcedJSONParsing: !0,
                clarifyTimeoutError: !1
            },
            jn = "undefined" != typeof URLSearchParams ? URLSearchParams : Bn,
            Dn = FormData;
        var Pn, Rn = ("undefined" == typeof navigator || "ReactNative" !== (Pn = navigator.product) && "NativeScript" !== Pn && "NS" !== Pn) && "undefined" != typeof window && "undefined" != typeof document,
            Yn = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
        const Mn = {
                isBrowser: !0,
                classes: {
                    URLSearchParams: jn,
                    FormData: Dn,
                    Blob
                },
                isStandardBrowserEnv: Rn,
                isStandardBrowserWebWorkerEnv: Yn,
                protocols: ["http", "https", "file", "blob", "url", "data"]
            },
            Fn = function (n) {
                function e(n, t, a, o) {
                    var r = n[o++],
                        i = Number.isFinite(+r),
                        l = o >= n.length;
                    return r = !r && cn.isArray(a) ? a.length : r, l ? (cn.hasOwnProp(a, r) ? a[r] = [a[r], t] : a[r] = t, !i) : (a[r] && cn.isObject(a[r]) || (a[r] = []), e(n, t, a[r], o) && cn.isArray(a[r]) && (a[r] = function (n) {
                        var e, t, a = {},
                            o = Object.keys(n),
                            r = o.length;
                        for (e = 0; e < r; e++) a[t = o[e]] = n[t];
                        return a
                    }(a[r])), !i)
                }
                if (cn.isFormData(n) && cn.isFunction(n.entries)) {
                    var t = {};
                    return cn.forEachEntry(n, (function (n, a) {
                        e(function (n) {
                            return cn.matchAll(/\w+|\[(\w*)]/g, n).map((function (n) {
                                return "[]" === n[0] ? "" : n[1] || n[0]
                            }))
                        }(n), a, t, 0)
                    })), t
                }
                return null
            };
        var Wn = {
                "Content-Type": void 0
            },
            Un = {
                transitional: On,
                adapter: ["xhr", "http"],
                transformRequest: [function (n, e) {
                    var t, a = e.getContentType() || "",
                        o = a.indexOf("application/json") > -1,
                        r = cn.isObject(n);
                    if (r && cn.isHTMLForm(n) && (n = new FormData(n)), cn.isFormData(n)) return o && o ? JSON.stringify(Fn(n)) : n;
                    if (cn.isArrayBuffer(n) || cn.isBuffer(n) || cn.isStream(n) || cn.isFile(n) || cn.isBlob(n)) return n;
                    if (cn.isArrayBufferView(n)) return n.buffer;
                    if (cn.isURLSearchParams(n)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
                    if (r) {
                        if (a.indexOf("application/x-www-form-urlencoded") > -1) return function (n, e) {
                            return En(n, new Mn.classes.URLSearchParams, Object.assign({
                                visitor: function (n, e, t, a) {
                                    return Mn.isNode && cn.isBuffer(n) ? (this.append(e, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments)
                                }
                            }, e))
                        }(n, this.formSerializer).toString();
                        if ((t = cn.isFileList(n)) || a.indexOf("multipart/form-data") > -1) {
                            var i = this.env && this.env.FormData;
                            return En(t ? {
                                "files[]": n
                            } : n, i && new i, this.formSerializer)
                        }
                    }
                    return r || o ? (e.setContentType("application/json", !1), function (n, e, t) {
                        if (cn.isString(n)) try {
                            return (0, JSON.parse)(n), cn.trim(n)
                        } catch (n) {
                            if ("SyntaxError" !== n.name) throw n
                        }
                        return (0, JSON.stringify)(n)
                    }(n)) : n
                }],
                transformResponse: [function (n) {
                    var e = this.transitional || Un.transitional,
                        t = e && e.forcedJSONParsing,
                        a = "json" === this.responseType;
                    if (n && cn.isString(n) && (t && !this.responseType || a)) {
                        var o = !(e && e.silentJSONParsing) && a;
                        try {
                            return JSON.parse(n)
                        } catch (n) {
                            if (o) {
                                if ("SyntaxError" === n.name) throw mn.from(n, mn.ERR_BAD_RESPONSE, this, null, this.response);
                                throw n
                            }
                        }
                    }
                    return n
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: {
                    FormData: Mn.classes.FormData,
                    Blob: Mn.classes.Blob
                },
                validateStatus: function (n) {
                    return n >= 200 && n < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
        cn.forEach(["delete", "get", "head"], (function (n) {
            Un.headers[n] = {}
        })), cn.forEach(["post", "put", "patch"], (function (n) {
            Un.headers[n] = cn.merge(Wn)
        }));
        const Nn = Un;
        var Qn = cn.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);

        function Hn(n) {
            return Hn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Hn(n)
        }

        function _n(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var t = 0, a = new Array(e); t < e; t++) a[t] = n[t];
            return a
        }

        function Kn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== Hn(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== Hn(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === Hn(o) ? o : String(o)), a)
            }
            var o
        }
        var Zn = Symbol("internals");

        function Vn(n) {
            return n && String(n).trim().toLowerCase()
        }

        function Xn(n) {
            return !1 === n || null == n ? n : cn.isArray(n) ? n.map(Xn) : String(n)
        }

        function Jn(n, e, t, a) {
            return cn.isFunction(a) ? a.call(this, e, t) : cn.isString(e) ? cn.isString(a) ? -1 !== e.indexOf(a) : cn.isRegExp(a) ? a.test(e) : void 0 : void 0
        }
        var Gn = function (n, e) {
            function t(n) {
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n && this.set(n)
            }
            var a, o, r;
            return a = t, o = [{
                key: "set",
                value: function (n, e, t) {
                    var a = this;

                    function o(n, e, t) {
                        var o = Vn(e);
                        if (!o) throw new Error("header name must be a non-empty string");
                        var r = cn.findKey(a, o);
                        (!r || void 0 === a[r] || !0 === t || void 0 === t && !1 !== a[r]) && (a[r || e] = Xn(n))
                    }
                    var r, i, l, s, p, d = function (n, e) {
                        return cn.forEach(n, (function (n, t) {
                            return o(n, t, e)
                        }))
                    };
                    return cn.isPlainObject(n) || n instanceof this.constructor ? d(n, e) : cn.isString(n) && (n = n.trim()) && !/^[-_a-zA-Z]+$/.test(n.trim()) ? d((p = {}, (r = n) && r.split("\n").forEach((function (n) {
                        s = n.indexOf(":"), i = n.substring(0, s).trim().toLowerCase(), l = n.substring(s + 1).trim(), !i || p[i] && Qn[i] || ("set-cookie" === i ? p[i] ? p[i].push(l) : p[i] = [l] : p[i] = p[i] ? p[i] + ", " + l : l)
                    })), p), e) : null != n && o(e, n, t), this
                }
            }, {
                key: "get",
                value: function (n, e) {
                    if (n = Vn(n)) {
                        var t = cn.findKey(this, n);
                        if (t) {
                            var a = this[t];
                            if (!e) return a;
                            if (!0 === e) return function (n) {
                                for (var e, t = Object.create(null), a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; e = a.exec(n);) t[e[1]] = e[2];
                                return t
                            }(a);
                            if (cn.isFunction(e)) return e.call(this, a, t);
                            if (cn.isRegExp(e)) return e.exec(a);
                            throw new TypeError("parser must be boolean|regexp|function")
                        }
                    }
                }
            }, {
                key: "has",
                value: function (n, e) {
                    if (n = Vn(n)) {
                        var t = cn.findKey(this, n);
                        return !(!t || e && !Jn(0, this[t], t, e))
                    }
                    return !1
                }
            }, {
                key: "delete",
                value: function (n, e) {
                    var t = this,
                        a = !1;

                    function o(n) {
                        if (n = Vn(n)) {
                            var o = cn.findKey(t, n);
                            !o || e && !Jn(0, t[o], o, e) || (delete t[o], a = !0)
                        }
                    }
                    return cn.isArray(n) ? n.forEach(o) : o(n), a
                }
            }, {
                key: "clear",
                value: function () {
                    return Object.keys(this).forEach(this.delete.bind(this))
                }
            }, {
                key: "normalize",
                value: function (n) {
                    var e = this,
                        t = {};
                    return cn.forEach(this, (function (a, o) {
                        var r = cn.findKey(t, o);
                        if (r) return e[r] = Xn(a), void delete e[o];
                        var i = n ? function (n) {
                            return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (function (n, e, t) {
                                return e.toUpperCase() + t
                            }))
                        }(o) : String(o).trim();
                        i !== o && delete e[o], e[i] = Xn(a), t[i] = !0
                    })), this
                }
            }, {
                key: "concat",
                value: function () {
                    for (var n, e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    return (n = this.constructor).concat.apply(n, [this].concat(t))
                }
            }, {
                key: "toJSON",
                value: function (n) {
                    var e = Object.create(null);
                    return cn.forEach(this, (function (t, a) {
                        null != t && !1 !== t && (e[a] = n && cn.isArray(t) ? t.join(", ") : t)
                    })), e
                }
            }, {
                key: Symbol.iterator,
                value: function () {
                    return Object.entries(this.toJSON())[Symbol.iterator]()
                }
            }, {
                key: "toString",
                value: function () {
                    return Object.entries(this.toJSON()).map((function (n) {
                        var e, t, a = (t = 2, function (n) {
                            if (Array.isArray(n)) return n
                        }(e = n) || function (n, e) {
                            var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                            if (null != t) {
                                var a, o, r, i, l = [],
                                    s = !0,
                                    p = !1;
                                try {
                                    if (r = (t = t.call(n)).next, 0 === e) {
                                        if (Object(t) !== t) return;
                                        s = !1
                                    } else
                                        for (; !(s = (a = r.call(t)).done) && (l.push(a.value), l.length !== e); s = !0);
                                } catch (n) {
                                    p = !0, o = n
                                } finally {
                                    try {
                                        if (!s && null != t.return && (i = t.return(), Object(i) !== i)) return
                                    } finally {
                                        if (p) throw o
                                    }
                                }
                                return l
                            }
                        }(e, t) || function (n, e) {
                            if (n) {
                                if ("string" == typeof n) return _n(n, e);
                                var t = Object.prototype.toString.call(n).slice(8, -1);
                                return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _n(n, e) : void 0
                            }
                        }(e, t) || function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }());
                        return a[0] + ": " + a[1]
                    })).join("\n")
                }
            }, {
                key: Symbol.toStringTag,
                get: function () {
                    return "AxiosHeaders"
                }
            }], r = [{
                key: "from",
                value: function (n) {
                    return n instanceof this ? n : new this(n)
                }
            }, {
                key: "concat",
                value: function (n) {
                    for (var e = new this(n), t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
                    return a.forEach((function (n) {
                        return e.set(n)
                    })), e
                }
            }, {
                key: "accessor",
                value: function (n) {
                    var e = (this[Zn] = this[Zn] = {
                            accessors: {}
                        }).accessors,
                        t = this.prototype;

                    function a(n) {
                        var a = Vn(n);
                        e[a] || (function (n, e) {
                            var t = cn.toCamelCase(" " + e);
                            ["get", "set", "has"].forEach((function (a) {
                                Object.defineProperty(n, a + t, {
                                    value: function (n, t, o) {
                                        return this[a].call(this, e, n, t, o)
                                    },
                                    configurable: !0
                                })
                            }))
                        }(t, n), e[a] = !0)
                    }
                    return cn.isArray(n) ? n.forEach(a) : a(n), this
                }
            }], o && Kn(a.prototype, o), r && Kn(a, r), Object.defineProperty(a, "prototype", {
                writable: !1
            }), t
        }();
        Gn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]), cn.freezeMethods(Gn.prototype), cn.freezeMethods(Gn);
        const $n = Gn;

        function ne(n, e) {
            var t = this || Nn,
                a = e || t,
                o = $n.from(a.headers),
                r = a.data;
            return cn.forEach(n, (function (n) {
                r = n.call(t, r, o.normalize(), e ? e.status : void 0)
            })), o.normalize(), r
        }

        function ee(n) {
            return !(!n || !n.__CANCEL__)
        }

        function te(n, e, t) {
            mn.call(this, null == n ? "canceled" : n, mn.ERR_CANCELED, e, t), this.name = "CanceledError"
        }
        cn.inherits(te, mn, {
            __CANCEL__: !0
        });
        const ae = te,
            oe = Mn.isStandardBrowserEnv ? {
                write: function (n, e, t, a, o, r) {
                    var i = [];
                    i.push(n + "=" + encodeURIComponent(e)), cn.isNumber(t) && i.push("expires=" + new Date(t).toGMTString()), cn.isString(a) && i.push("path=" + a), cn.isString(o) && i.push("domain=" + o), !0 === r && i.push("secure"), document.cookie = i.join("; ")
                },
                read: function (n) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove: function (n) {
                    this.write(n, "", Date.now() - 864e5)
                }
            } : {
                write: function () {},
                read: function () {
                    return null
                },
                remove: function () {}
            };

        function re(n, e) {
            return n && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) ? function (n, e) {
                return e ? n.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : n
            }(n, e) : e
        }
        const ie = Mn.isStandardBrowserEnv ? function () {
            var n, e = /(msie|trident)/i.test(navigator.userAgent),
                t = document.createElement("a");

            function a(n) {
                var a = n;
                return e && (t.setAttribute("href", a), a = t.href), t.setAttribute("href", a), {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                }
            }
            return n = a(window.location.href),
                function (e) {
                    var t = cn.isString(e) ? a(e) : e;
                    return t.protocol === n.protocol && t.host === n.host
                }
        }() : function () {
            return !0
        };

        function le(n, e) {
            var t = 0,
                a = function (n, e) {
                    n = n || 10;
                    var t, a = new Array(n),
                        o = new Array(n),
                        r = 0,
                        i = 0;
                    return e = void 0 !== e ? e : 1e3,
                        function (l) {
                            var s = Date.now(),
                                p = o[i];
                            t || (t = s), a[r] = l, o[r] = s;
                            for (var d = i, c = 0; d !== r;) c += a[d++], d %= n;
                            if ((r = (r + 1) % n) === i && (i = (i + 1) % n), !(s - t < e)) {
                                var A = p && s - p;
                                return A ? Math.round(1e3 * c / A) : void 0
                            }
                        }
                }(50, 250);
            return function (o) {
                var r = o.loaded,
                    i = o.lengthComputable ? o.total : void 0,
                    l = r - t,
                    s = a(l);
                t = r;
                var p = {
                    loaded: r,
                    total: i,
                    progress: i ? r / i : void 0,
                    bytes: l,
                    rate: s || void 0,
                    estimated: s && i && r <= i ? (i - r) / s : void 0,
                    event: o
                };
                p[e ? "download" : "upload"] = !0, n(p)
            }
        }
        const se = "undefined" != typeof XMLHttpRequest && function (n) {
            return new Promise((function (e, t) {
                var a, o = n.data,
                    r = $n.from(n.headers).normalize(),
                    i = n.responseType;

                function l() {
                    n.cancelToken && n.cancelToken.unsubscribe(a), n.signal && n.signal.removeEventListener("abort", a)
                }
                cn.isFormData(o) && (Mn.isStandardBrowserEnv || Mn.isStandardBrowserWebWorkerEnv) && r.setContentType(!1);
                var s = new XMLHttpRequest;
                if (n.auth) {
                    var p = n.auth.username || "",
                        d = n.auth.password ? unescape(encodeURIComponent(n.auth.password)) : "";
                    r.set("Authorization", "Basic " + btoa(p + ":" + d))
                }
                var c = re(n.baseURL, n.url);

                function A() {
                    if (s) {
                        var a = $n.from("getAllResponseHeaders" in s && s.getAllResponseHeaders());
                        ! function (n, e, t) {
                            var a = t.config.validateStatus;
                            t.status && a && !a(t.status) ? e(new mn("Request failed with status code " + t.status, [mn.ERR_BAD_REQUEST, mn.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4], t.config, t.request, t)) : n(t)
                        }((function (n) {
                            e(n), l()
                        }), (function (n) {
                            t(n), l()
                        }), {
                            data: i && "text" !== i && "json" !== i ? s.response : s.responseText,
                            status: s.status,
                            statusText: s.statusText,
                            headers: a,
                            config: n,
                            request: s
                        }), s = null
                    }
                }
                if (s.open(n.method.toUpperCase(), In(c, n.params, n.paramsSerializer), !0), s.timeout = n.timeout, "onloadend" in s ? s.onloadend = A : s.onreadystatechange = function () {
                        s && 4 === s.readyState && (0 !== s.status || s.responseURL && 0 === s.responseURL.indexOf("file:")) && setTimeout(A)
                    }, s.onabort = function () {
                        s && (t(new mn("Request aborted", mn.ECONNABORTED, n, s)), s = null)
                    }, s.onerror = function () {
                        t(new mn("Network Error", mn.ERR_NETWORK, n, s)), s = null
                    }, s.ontimeout = function () {
                        var e = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded",
                            a = n.transitional || On;
                        n.timeoutErrorMessage && (e = n.timeoutErrorMessage), t(new mn(e, a.clarifyTimeoutError ? mn.ETIMEDOUT : mn.ECONNABORTED, n, s)), s = null
                    }, Mn.isStandardBrowserEnv) {
                    var u = (n.withCredentials || ie(c)) && n.xsrfCookieName && oe.read(n.xsrfCookieName);
                    u && r.set(n.xsrfHeaderName, u)
                }
                void 0 === o && r.setContentType(null), "setRequestHeader" in s && cn.forEach(r.toJSON(), (function (n, e) {
                    s.setRequestHeader(e, n)
                })), cn.isUndefined(n.withCredentials) || (s.withCredentials = !!n.withCredentials), i && "json" !== i && (s.responseType = n.responseType), "function" == typeof n.onDownloadProgress && s.addEventListener("progress", le(n.onDownloadProgress, !0)), "function" == typeof n.onUploadProgress && s.upload && s.upload.addEventListener("progress", le(n.onUploadProgress)), (n.cancelToken || n.signal) && (a = function (e) {
                    s && (t(!e || e.type ? new ae(null, n, s) : e), s.abort(), s = null)
                }, n.cancelToken && n.cancelToken.subscribe(a), n.signal && (n.signal.aborted ? a() : n.signal.addEventListener("abort", a)));
                var y, m = (y = /^([-+\w]{1,25})(:?\/\/|:)/.exec(c)) && y[1] || "";
                m && -1 === Mn.protocols.indexOf(m) ? t(new mn("Unsupported protocol " + m + ":", mn.ERR_BAD_REQUEST, n)) : s.send(o || null)
            }))
        };
        var pe = {
            http: null,
            xhr: se
        };
        cn.forEach(pe, (function (n, e) {
            if (n) {
                try {
                    Object.defineProperty(n, "name", {
                        value: e
                    })
                } catch (n) {}
                Object.defineProperty(n, "adapterName", {
                    value: e
                })
            }
        }));

        function de(n) {
            if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted) throw new ae(null, n)
        }

        function ce(n) {
            return de(n), n.headers = $n.from(n.headers), n.data = ne.call(n, n.transformRequest), -1 !== ["post", "put", "patch"].indexOf(n.method) && n.headers.setContentType("application/x-www-form-urlencoded", !1),
                function (n) {
                    for (var e, t, a = (n = cn.isArray(n) ? n : [n]).length, o = 0; o < a && (e = n[o], !(t = cn.isString(e) ? pe[e.toLowerCase()] : e)); o++);
                    if (!t) {
                        if (!1 === t) throw new mn("Adapter ".concat(e, " is not supported by the environment"), "ERR_NOT_SUPPORT");
                        throw new Error(cn.hasOwnProp(pe, e) ? "Adapter '".concat(e, "' is not available in the build") : "Unknown adapter '".concat(e, "'"))
                    }
                    if (!cn.isFunction(t)) throw new TypeError("adapter is not a function");
                    return t
                }(n.adapter || Nn.adapter)(n).then((function (e) {
                    return de(n), e.data = ne.call(n, n.transformResponse, e), e.headers = $n.from(e.headers), e
                }), (function (e) {
                    return ee(e) || (de(n), e && e.response && (e.response.data = ne.call(n, n.transformResponse, e.response), e.response.headers = $n.from(e.response.headers))), Promise.reject(e)
                }))
        }
        var Ae = function (n) {
            return n instanceof $n ? n.toJSON() : n
        };

        function ue(n, e) {
            e = e || {};
            var t = {};

            function a(n, e, t) {
                return cn.isPlainObject(n) && cn.isPlainObject(e) ? cn.merge.call({
                    caseless: t
                }, n, e) : cn.isPlainObject(e) ? cn.merge({}, e) : cn.isArray(e) ? e.slice() : e
            }

            function o(n, e, t) {
                return cn.isUndefined(e) ? cn.isUndefined(n) ? void 0 : a(void 0, n, t) : a(n, e, t)
            }

            function r(n, e) {
                if (!cn.isUndefined(e)) return a(void 0, e)
            }

            function i(n, e) {
                return cn.isUndefined(e) ? cn.isUndefined(n) ? void 0 : a(void 0, n) : a(void 0, e)
            }

            function l(t, o, r) {
                return r in e ? a(t, o) : r in n ? a(void 0, t) : void 0
            }
            var s = {
                url: r,
                method: r,
                data: r,
                baseURL: i,
                transformRequest: i,
                transformResponse: i,
                paramsSerializer: i,
                timeout: i,
                timeoutMessage: i,
                withCredentials: i,
                adapter: i,
                responseType: i,
                xsrfCookieName: i,
                xsrfHeaderName: i,
                onUploadProgress: i,
                onDownloadProgress: i,
                decompress: i,
                maxContentLength: i,
                maxBodyLength: i,
                beforeRedirect: i,
                transport: i,
                httpAgent: i,
                httpsAgent: i,
                cancelToken: i,
                socketPath: i,
                responseEncoding: i,
                validateStatus: l,
                headers: function (n, e) {
                    return o(Ae(n), Ae(e), !0)
                }
            };
            return cn.forEach(Object.keys(n).concat(Object.keys(e)), (function (a) {
                var r = s[a] || o,
                    i = r(n[a], e[a], a);
                cn.isUndefined(i) && r !== l || (t[a] = i)
            })), t
        }

        function ye(n) {
            return ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, ye(n)
        }
        var me = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((function (n, e) {
            me[n] = function (t) {
                return ye(t) === n || "a" + (e < 1 ? "n " : " ") + n
            }
        }));
        var he = {};
        me.transitional = function (n, e, t) {
            function a(n, e) {
                return "[Axios v1.2.3] Transitional option '" + n + "'" + e + (t ? ". " + t : "")
            }
            return function (t, o, r) {
                if (!1 === n) throw new mn(a(o, " has been removed" + (e ? " in " + e : "")), mn.ERR_DEPRECATED);
                return e && !he[o] && (he[o] = !0, console.warn(a(o, " has been deprecated since v" + e + " and will be removed in the near future"))), !n || n(t, o, r)
            }
        };
        const fe = {
            assertOptions: function (n, e, t) {
                if ("object" !== ye(n)) throw new mn("options must be an object", mn.ERR_BAD_OPTION_VALUE);
                for (var a = Object.keys(n), o = a.length; o-- > 0;) {
                    var r = a[o],
                        i = e[r];
                    if (i) {
                        var l = n[r],
                            s = void 0 === l || i(l, r, n);
                        if (!0 !== s) throw new mn("option " + r + " must be " + s, mn.ERR_BAD_OPTION_VALUE)
                    } else if (!0 !== t) throw new mn("Unknown option " + r, mn.ERR_BAD_OPTION)
                }
            },
            validators: me
        };

        function be(n) {
            return be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, be(n)
        }

        function ge(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== be(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== be(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === be(o) ? o : String(o)), a)
            }
            var o
        }
        var ve = fe.validators,
            xe = function () {
                function n(e) {
                    ! function (n, e) {
                        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.defaults = e, this.interceptors = {
                        request: new qn,
                        response: new qn
                    }
                }
                var e, t;
                return e = n, (t = [{
                    key: "request",
                    value: function (n, e) {
                        "string" == typeof n ? (e = e || {}).url = n : e = n || {};
                        var t, a = e = ue(this.defaults, e),
                            o = a.transitional,
                            r = a.paramsSerializer,
                            i = a.headers;
                        void 0 !== o && fe.assertOptions(o, {
                            silentJSONParsing: ve.transitional(ve.boolean),
                            forcedJSONParsing: ve.transitional(ve.boolean),
                            clarifyTimeoutError: ve.transitional(ve.boolean)
                        }, !1), void 0 !== r && fe.assertOptions(r, {
                            encode: ve.function,
                            serialize: ve.function
                        }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase(), (t = i && cn.merge(i.common, i[e.method])) && cn.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (n) {
                            delete i[n]
                        })), e.headers = $n.concat(t, i);
                        var l = [],
                            s = !0;
                        this.interceptors.request.forEach((function (n) {
                            "function" == typeof n.runWhen && !1 === n.runWhen(e) || (s = s && n.synchronous, l.unshift(n.fulfilled, n.rejected))
                        }));
                        var p, d = [];
                        this.interceptors.response.forEach((function (n) {
                            d.push(n.fulfilled, n.rejected)
                        }));
                        var c, A = 0;
                        if (!s) {
                            var u = [ce.bind(this), void 0];
                            for (u.unshift.apply(u, l), u.push.apply(u, d), c = u.length, p = Promise.resolve(e); A < c;) p = p.then(u[A++], u[A++]);
                            return p
                        }
                        c = l.length;
                        var y = e;
                        for (A = 0; A < c;) {
                            var m = l[A++],
                                h = l[A++];
                            try {
                                y = m(y)
                            } catch (n) {
                                h.call(this, n);
                                break
                            }
                        }
                        try {
                            p = ce.call(this, y)
                        } catch (n) {
                            return Promise.reject(n)
                        }
                        for (A = 0, c = d.length; A < c;) p = p.then(d[A++], d[A++]);
                        return p
                    }
                }, {
                    key: "getUri",
                    value: function (n) {
                        return In(re((n = ue(this.defaults, n)).baseURL, n.url), n.params, n.paramsSerializer)
                    }
                }]) && ge(e.prototype, t), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), n
            }();
        cn.forEach(["delete", "get", "head", "options"], (function (n) {
            xe.prototype[n] = function (e, t) {
                return this.request(ue(t || {}, {
                    method: n,
                    url: e,
                    data: (t || {}).data
                }))
            }
        })), cn.forEach(["post", "put", "patch"], (function (n) {
            function e(e) {
                return function (t, a, o) {
                    return this.request(ue(o || {}, {
                        method: n,
                        headers: e ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url: t,
                        data: a
                    }))
                }
            }
            xe.prototype[n] = e(), xe.prototype[n + "Form"] = e(!0)
        }));
        const Ee = xe;

        function we(n) {
            return we = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, we(n)
        }

        function Ce(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== we(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== we(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === we(o) ? o : String(o)), a)
            }
            var o
        }
        var ke = function () {
            function n(e) {
                if (function (n, e) {
                        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), "function" != typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function (n) {
                    t = n
                }));
                var a = this;
                this.promise.then((function (n) {
                    if (a._listeners) {
                        for (var e = a._listeners.length; e-- > 0;) a._listeners[e](n);
                        a._listeners = null
                    }
                })), this.promise.then = function (n) {
                    var e, t = new Promise((function (n) {
                        a.subscribe(n), e = n
                    })).then(n);
                    return t.cancel = function () {
                        a.unsubscribe(e)
                    }, t
                }, e((function (n, e, o) {
                    a.reason || (a.reason = new ae(n, e, o), t(a.reason))
                }))
            }
            var e, t, a;
            return e = n, t = [{
                key: "throwIfRequested",
                value: function () {
                    if (this.reason) throw this.reason
                }
            }, {
                key: "subscribe",
                value: function (n) {
                    this.reason ? n(this.reason) : this._listeners ? this._listeners.push(n) : this._listeners = [n]
                }
            }, {
                key: "unsubscribe",
                value: function (n) {
                    if (this._listeners) {
                        var e = this._listeners.indexOf(n); - 1 !== e && this._listeners.splice(e, 1)
                    }
                }
            }], a = [{
                key: "source",
                value: function () {
                    var e;
                    return {
                        token: new n((function (n) {
                            e = n
                        })),
                        cancel: e
                    }
                }
            }], t && Ce(e.prototype, t), a && Ce(e, a), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const Be = ke;

        function Se(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var t = 0, a = new Array(e); t < e; t++) a[t] = n[t];
            return a
        }
        var Ie = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511
        };
        Object.entries(Ie).forEach((function (n) {
            var e, t, a = (t = 2, function (n) {
                    if (Array.isArray(n)) return n
                }(e = n) || function (n, e) {
                    var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var a, o, r, i, l = [],
                            s = !0,
                            p = !1;
                        try {
                            if (r = (t = t.call(n)).next, 0 === e) {
                                if (Object(t) !== t) return;
                                s = !1
                            } else
                                for (; !(s = (a = r.call(t)).done) && (l.push(a.value), l.length !== e); s = !0);
                        } catch (n) {
                            p = !0, o = n
                        } finally {
                            try {
                                if (!s && null != t.return && (i = t.return(), Object(i) !== i)) return
                            } finally {
                                if (p) throw o
                            }
                        }
                        return l
                    }
                }(e, t) || function (n, e) {
                    if (n) {
                        if ("string" == typeof n) return Se(n, e);
                        var t = Object.prototype.toString.call(n).slice(8, -1);
                        return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Se(n, e) : void 0
                    }
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                o = a[0],
                r = a[1];
            Ie[r] = o
        }));
        const Le = Ie;
        var ze = function n(e) {
            var t = new Ee(e),
                a = q(Ee.prototype.request, t);
            return cn.extend(a, Ee.prototype, t, {
                allOwnKeys: !0
            }), cn.extend(a, t, null, {
                allOwnKeys: !0
            }), a.create = function (t) {
                return n(ue(e, t))
            }, a
        }(Nn);
        ze.Axios = Ee, ze.CanceledError = ae, ze.CancelToken = Be, ze.isCancel = ee, ze.VERSION = "1.2.3", ze.toFormData = En, ze.AxiosError = mn, ze.Cancel = ze.CanceledError, ze.all = function (n) {
            return Promise.all(n)
        }, ze.spread = function (n) {
            return function (e) {
                return n.apply(null, e)
            }
        }, ze.isAxiosError = function (n) {
            return cn.isObject(n) && !0 === n.isAxiosError
        }, ze.mergeConfig = ue, ze.AxiosHeaders = $n, ze.formToJSON = function (n) {
            return Fn(cn.isHTMLForm(n) ? new FormData(n) : n)
        }, ze.HttpStatusCode = Le, ze.default = ze;
        const Te = ze,
            qe = {
                send: function (n) {
                    Te.post(n.url, n.data).then((function (e) {
                        var t = e.data;
                        t && 0 === t.code ? n.success && n.success(t) : n.error && n.error(t && t.msg)
                    })).catch((function (e) {
                        console.error(e), n.error && n.error()
                    }))
                },
                read: function (n) {
                    Te.get(n.url).then((function (e) {
                        var t = e.data;
                        t && 0 === t.code ? n.success && n.success(t.data.map((function (n) {
                            return {
                                time: n[0],
                                type: n[1],
                                color: n[2],
                                author: n[3],
                                text: n[4]
                            }
                        }))) : n.error && n.error(t && t.msg)
                    })).catch((function (e) {
                        console.error(e), n.error && n.error()
                    }))
                }
            };

        function Oe(n) {
            return Oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Oe(n)
        }

        function je(n) {
            var e = this;
            this.lang = n, this.fallbackLang = this.lang.includes("-") ? this.lang.split("-")[0] : this.lang, this.tran = function (n) {
                return n = n.toLowerCase(), Pe[e.lang] && Pe[e.lang][n] ? Pe[e.lang][n] : Pe[e.fallbackLang] && Pe[e.fallbackLang][n] ? Pe[e.fallbackLang][n] : De[n] ? De[n] : n
            }
        }
        var De = {
                "danmaku-loading": "Danmaku is loading",
                top: "Top",
                bottom: "Bottom",
                rolling: "Rolling",
                "input-danmaku-enter": "Input danmaku, hit Enter",
                "about-author": "About author",
                "dplayer-feedback": "DPlayer feedback",
                "about-dplayer": "About DPlayer",
                loop: "Loop",
                speed: "Speed",
                "opacity-danmaku": "Opacity for danmaku",
                normal: "Normal",
                "please-input-danmaku": "Please input danmaku content!",
                "set-danmaku-color": "Set danmaku color",
                "set-danmaku-type": "Set danmaku type",
                "show-danmaku": "Show danmaku",
                "video-failed": "Video load failed",
                "danmaku-failed": "Danmaku load failed",
                "danmaku-send-failed": "Danmaku send failed",
                "switching-quality": "Switching to %q quality",
                "switched-quality": "Switched to %q quality",
                ff: "FF %s s",
                rew: "REW %s s",
                "unlimited-danmaku": "Unlimited danmaku",
                "send-danmaku": "Send danmaku",
                setting: "Setting",
                fullscreen: "Full screen",
                "web-fullscreen": "Web full screen",
                send: "Send",
                screenshot: "Screenshot",
                airplay: "AirPlay",
                chromecast: "ChromeCast",
                subtitle: "Subtitle",
                off: "Off",
                "show-subs": "Show subtitle",
                "hide-subs": "Hide subtitle",
                volume: "Volume",
                live: "Live",
                "video-info": "Video info"
            },
            Pe = {
                en: De,
                "zh-cn": {
                    "danmaku-loading": "弹幕加载中",
                    top: "顶部",
                    bottom: "底部",
                    rolling: "滚动",
                    "input-danmaku-enter": "输入弹幕，回车发送",
                    "about-author": "关于作者",
                    "dplayer-feedback": "播放器意见反馈",
                    "about-dplayer": "关于 DPlayer 播放器",
                    loop: "洗脑循环",
                    speed: "速度",
                    "opacity-danmaku": "弹幕透明度",
                    normal: "正常",
                    "please-input-danmaku": "要输入弹幕内容啊喂！",
                    "set-danmaku-color": "设置弹幕颜色",
                    "set-danmaku-type": "设置弹幕类型",
                    "show-danmaku": "显示弹幕",
                    "video-failed": "视频加载失败",
                    "danmaku-failed": "弹幕加载失败",
                    "danmaku-send-failed": "弹幕发送失败",
                    "switching-quality": "正在切换至 %q 画质",
                    "switched-quality": "已经切换至 %q 画质",
                    ff: "快进 %s 秒",
                    rew: "快退 %s 秒",
                    "unlimited-danmaku": "海量弹幕",
                    "send-danmaku": "发送弹幕",
                    setting: "设置",
                    fullscreen: "全屏",
                    "web-fullscreen": "页面全屏",
                    send: "发送",
                    screenshot: "截图",
                    airplay: "无线投屏",
                    chromecast: "ChromeCast",
                    subtitle: "字幕",
                    off: "关闭",
                    "show-subs": "显示字幕",
                    "hide-subs": "隐藏字幕",
                    volume: "音量",
                    live: "直播",
                    "video-info": "视频统计信息"
                },
                "zh-tw": {
                    "danmaku-loading": "彈幕載入中",
                    top: "頂部",
                    bottom: "底部",
                    rolling: "滾動",
                    "input-danmaku-enter": "輸入彈幕，Enter 發送",
                    "about-author": "關於作者",
                    "dplayer-feedback": "播放器意見回饋",
                    "about-dplayer": "關於 DPlayer 播放器",
                    loop: "循環播放",
                    speed: "速度",
                    "opacity-danmaku": "彈幕透明度",
                    normal: "正常",
                    "please-input-danmaku": "請輸入彈幕內容啊！",
                    "set-danmaku-color": "設定彈幕顏色",
                    "set-danmaku-type": "設定彈幕類型",
                    "show-danmaku": "顯示彈幕",
                    "video-failed": "影片載入失敗",
                    "danmaku-failed": "彈幕載入失敗",
                    "danmaku-send-failed": "彈幕發送失敗",
                    "switching-quality": "正在切換至 %q 畫質",
                    "switched-quality": "已經切換至 %q 畫質",
                    ff: "快進 %s 秒",
                    rew: "快退 %s 秒",
                    "unlimited-danmaku": "巨量彈幕",
                    "send-danmaku": "發送彈幕",
                    setting: "設定",
                    fullscreen: "全螢幕",
                    "web-fullscreen": "頁面全螢幕",
                    send: "發送",
                    screenshot: "截圖",
                    airplay: "無線投屏",
                    chromecast: "ChromeCast",
                    subtitle: "字幕",
                    off: "關閉",
                    "show-subs": "顯示字幕",
                    "hide-subs": "隱藏字幕",
                    volume: "音量",
                    live: "直播",
                    "video-info": "影片統計訊息"
                },
                "ko-kr": {
                    "danmaku-loading": "Danmaku를 불러오는 중입니다.",
                    top: "Top",
                    bottom: "Bottom",
                    rolling: "Rolling",
                    "input-danmaku-enter": "Danmaku를 입력하고 Enter를 누르세요.",
                    "about-author": "만든이",
                    "dplayer-feedback": "피드백 보내기",
                    "about-dplayer": "DPlayer 정보",
                    loop: "반복",
                    speed: "배속",
                    "opacity-danmaku": "Danmaku 불투명도",
                    normal: "표준",
                    "please-input-danmaku": "Danmaku를 입력하세요!",
                    "set-danmaku-color": "Danmaku 색상",
                    "set-danmaku-type": "Danmaku 설정",
                    "show-danmaku": "Danmaku 표시",
                    "video-failed": "비디오를 불러오지 못했습니다.",
                    "danmaku-failed": "Danmaku를 불러오지 못했습니다.",
                    "danmaku-send-failed": "Danmaku 전송에 실패했습니다.",
                    "Switching to": "",
                    "Switched to": "",
                    "switching-quality": "전환 %q 화질",
                    "switched-quality": "전환 됨 %q 화질",
                    ff: "앞으로 %s 초",
                    rew: "뒤로 %s 초",
                    "unlimited-danmaku": "끝없는 Danmaku",
                    "send-danmaku": "Danmaku 보내기",
                    setting: "설정",
                    fullscreen: "전체 화면",
                    "web-fullscreen": "웹 내 전체화면",
                    send: "보내기",
                    screenshot: "화면 캡쳐",
                    airplay: "에어플레이",
                    chromecast: "ChromeCast",
                    subtitle: "부제",
                    off: "끄다",
                    "show-subs": "자막 보이기",
                    "hide-subs": "자막 숨기기",
                    Volume: "볼륨",
                    live: "생방송",
                    "video-info": "비디오 정보"
                },
                de: {
                    "danmaku-loading": "Danmaku lädt...",
                    top: "Oben",
                    bottom: "Unten",
                    rolling: "Rollend",
                    "input-danmaku-enter": "Drücke Enter nach dem Einfügen vom Danmaku",
                    "about-author": "Über den Autor",
                    "dplayer-feedback": "DPlayer Feedback",
                    "about-dplayer": "Über DPlayer",
                    loop: "Wiederholen",
                    speed: "Geschwindigkeit",
                    "opacity-danmaku": "Transparenz für Danmaku",
                    normal: "Normal",
                    "please-input-danmaku": "Bitte Danmaku Inhalt eingeben!",
                    "set-danmaku-color": "Danmaku Farbe festlegen",
                    "set-danmaku-type": "Danmaku Typ festlegen",
                    "show-danmaku": "Zeige Danmaku",
                    "video-failed": "Das Video konnte nicht geladen werden",
                    "danmaku-failed": "Danmaku konnte nicht geladen werden",
                    "danmaku-send-failed": "Das senden von Danmaku ist fehgeschlagen",
                    "switching-quality": "Wechsle zur %q Qualität",
                    "switched-quality": "Zur %q Qualität gewechselt",
                    ff: "%s s Vorwärts",
                    rew: "%s s Zurück",
                    "unlimited-danmaku": "Unlimitiertes Danmaku",
                    "send-danmaku": "Sende Danmaku",
                    setting: "Einstellungen",
                    fullscreen: "Vollbild",
                    "web-fullscreen": "Browser Vollbild",
                    send: "Senden",
                    screenshot: "Screenshot",
                    airplay: "AirPlay",
                    "show-subs": "Zeige Untertitel",
                    chromecast: "ChromeCast",
                    subtitle: "Untertitel",
                    off: "Schließung",
                    "hide-subs": "Verstecke Untertitel",
                    volume: "Lautstärke",
                    live: "Live",
                    "video-info": "Video Info"
                }
            },
            Re = t(730),
            Ye = t.n(Re),
            Me = t(74),
            Fe = t.n(Me),
            We = t(437),
            Ue = t.n(We),
            Ne = t(644),
            Qe = t.n(Ne),
            He = t(324),
            _e = t.n(He),
            Ke = t(574),
            Ze = t.n(Ke),
            Ve = t(300),
            Xe = t.n(Ve),
            Je = t(934),
            Ge = t.n(Je),
            $e = t(428),
            nt = t.n($e),
            et = t(807),
            tt = t.n(et),
            at = t(338),
            ot = t.n(at),
            rt = t(254),
            it = t.n(rt),
            lt = t(965),
            st = t.n(lt),
            pt = t(113),
            dt = t.n(pt),
            ct = t(251),
            At = t.n(ct),
            ut = t(410),
            yt = t.n(ut),
            mt = t(182),
            ht = t.n(mt),
            ft = t(193),
            bt = t.n(ft);
        const gt = {
            play: Ye(),
            pause: Fe(),
            volumeUp: Ue(),
            volumeDown: Qe(),
            volumeOff: _e(),
            full: Ze(),
            fullWeb: Xe(),
            setting: Ge(),
            right: nt(),
            comment: tt(),
            commentOff: ot(),
            send: it(),
            pallette: st(),
            camera: dt(),
            subtitle: yt(),
            loading: ht(),
            airplay: At(),
            chromecast: bt()
        };
        var vt = t(916),
            xt = t.n(vt);

        function Et(n) {
            return Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Et(n)
        }

        function wt(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== Et(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== Et(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === Et(o) ? o : String(o)), a)
            }
            var o
        }
        var Ct = function () {
            function n(e) {
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.container = e.container, this.options = e.options, this.index = e.index, this.tran = e.tran, this.init()
            }
            var e, t, a;
            return e = n, a = [{
                key: "NewNotice",
                value: function (n, e, t) {
                    var a = document.createElement("div");
                    return a.classList.add("dplayer-notice"), a.style.opacity = e, a.innerText = n, t && (a.id = "dplayer-notice-".concat(t)), a
                }
            }], (t = [{
                key: "init",
                value: function () {
                    this.container.innerHTML = xt()({
                        options: this.options,
                        index: this.index,
                        tran: this.tran,
                        icons: gt,
                        mobile: T.isMobile,
                        video: {
                            current: !0,
                            pic: this.options.video.pic,
                            screenshot: this.options.screenshot,
                            airplay: !(!T.isSafari || T.isChrome) && this.options.airplay,
                            chromecast: this.options.chromecast,
                            preload: this.options.preload,
                            url: this.options.video.url,
                            subtitle: this.options.subtitle
                        }
                    }), this.volumeBar = this.container.querySelector(".dplayer-volume-bar-inner"), this.volumeBarWrap = this.container.querySelector(".dplayer-volume-bar"), this.volumeBarWrapWrap = this.container.querySelector(".dplayer-volume-bar-wrap"), this.volumeButton = this.container.querySelector(".dplayer-volume"), this.volumeButtonIcon = this.container.querySelector(".dplayer-volume-icon"), this.volumeIcon = this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"), this.playedBar = this.container.querySelector(".dplayer-played"), this.loadedBar = this.container.querySelector(".dplayer-loaded"), this.playedBarWrap = this.container.querySelector(".dplayer-bar-wrap"), this.playedBarTime = this.container.querySelector(".dplayer-bar-time"), this.danmaku = this.container.querySelector(".dplayer-danmaku"), this.danmakuLoading = this.container.querySelector(".dplayer-danloading"), this.video = this.container.querySelector(".dplayer-video-current"), this.bezel = this.container.querySelector(".dplayer-bezel-icon"), this.playButton = this.container.querySelector(".dplayer-play-icon"), this.mobilePlayButton = this.container.querySelector(".dplayer-mobile-play"), this.videoWrap = this.container.querySelector(".dplayer-video-wrap"), this.controllerMask = this.container.querySelector(".dplayer-controller-mask"), this.ptime = this.container.querySelector(".dplayer-ptime"), this.settingButton = this.container.querySelector(".dplayer-setting-icon"), this.settingBox = this.container.querySelector(".dplayer-setting-box"), this.mask = this.container.querySelector(".dplayer-mask"), this.loop = this.container.querySelector(".dplayer-setting-loop"), this.loopToggle = this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"), this.showDanmaku = this.container.querySelector(".dplayer-setting-showdan"), this.showDanmakuToggle = this.container.querySelector(".dplayer-showdan-setting-input"), this.unlimitDanmaku = this.container.querySelector(".dplayer-setting-danunlimit"), this.unlimitDanmakuToggle = this.container.querySelector(".dplayer-danunlimit-setting-input"), this.speed = this.container.querySelector(".dplayer-setting-speed"), this.speedItem = this.container.querySelectorAll(".dplayer-setting-speed-item"), this.danmakuOpacityBar = this.container.querySelector(".dplayer-danmaku-bar-inner"), this.danmakuOpacityBarWrap = this.container.querySelector(".dplayer-danmaku-bar"), this.danmakuOpacityBarWrapWrap = this.container.querySelector(".dplayer-danmaku-bar-wrap"), this.danmakuOpacityBox = this.container.querySelector(".dplayer-setting-danmaku"), this.dtime = this.container.querySelector(".dplayer-dtime"), this.controller = this.container.querySelector(".dplayer-controller"), this.commentInput = this.container.querySelector(".dplayer-comment-input"), this.commentButton = this.container.querySelector(".dplayer-comment-icon"), this.commentSettingBox = this.container.querySelector(".dplayer-comment-setting-box"), this.commentSettingButton = this.container.querySelector(".dplayer-comment-setting-icon"), this.commentSettingFill = this.container.querySelector(".dplayer-comment-setting-icon path"), this.commentSendButton = this.container.querySelector(".dplayer-send-icon"), this.commentSendFill = this.container.querySelector(".dplayer-send-icon path"), this.commentColorSettingBox = this.container.querySelector(".dplayer-comment-setting-color"), this.browserFullButton = this.container.querySelector(".dplayer-full-icon"), this.webFullButton = this.container.querySelector(".dplayer-full-in-icon"), this.menu = this.container.querySelector(".dplayer-menu"), this.menuItem = this.container.querySelectorAll(".dplayer-menu-item"), this.qualityList = this.container.querySelector(".dplayer-quality-list"), this.camareButton = this.container.querySelector(".dplayer-camera-icon"), this.airplayButton = this.container.querySelector(".dplayer-airplay-icon"), this.chromecastButton = this.container.querySelector(".dplayer-chromecast-icon"), this.subtitleButton = this.container.querySelector(".dplayer-subtitle-icon"), this.subtitleButtonInner = this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"), this.subtitlesButton = this.container.querySelector(".dplayer-subtitles-icon"), this.subtitlesBox = this.container.querySelector(".dplayer-subtitles-box"), this.subtitlesItem = this.container.querySelectorAll(".dplayer-subtitles-item"), this.subtitle = this.container.querySelector(".dplayer-subtitle"), this.subtrack = this.container.querySelector(".dplayer-subtrack"), this.qualityButton = this.container.querySelector(".dplayer-quality-icon"), this.barPreview = this.container.querySelector(".dplayer-bar-preview"), this.barWrap = this.container.querySelector(".dplayer-bar-wrap"), this.noticeList = this.container.querySelector(".dplayer-notice-list"), this.infoPanel = this.container.querySelector(".dplayer-info-panel"), this.infoPanelClose = this.container.querySelector(".dplayer-info-panel-close"), this.infoVersion = this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"), this.infoFPS = this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"), this.infoType = this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"), this.infoUrl = this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"), this.infoResolution = this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"), this.infoDuration = this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"), this.infoDanmakuId = this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"), this.infoDanmakuApi = this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"), this.infoDanmakuAmount = this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")
                }
            }]) && wt(e.prototype, t), a && wt(e, a), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const kt = Ct;

        function Bt(n) {
            return Bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Bt(n)
        }

        function St(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== Bt(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== Bt(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === Bt(o) ? o : String(o)), a)
            }
            var o
        }
        var It = function () {
            function n(e) {
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.options = e, this.player = this.options.player, this.container = this.options.container, this.danTunnel = {
                    right: {},
                    top: {},
                    bottom: {}
                }, this.danIndex = 0, this.dan = [], this.showing = !0, this._opacity = this.options.opacity, this.events = this.options.events, this.unlimited = this.options.unlimited, this._measure(""), this.load()
            }
            var e, t;
            return e = n, t = [{
                key: "load",
                value: function () {
                    var n, e = this;
                    n = this.options.api.maximum ? "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id, "&max=").concat(this.options.api.maximum) : "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id);
                    var t = (this.options.api.addition || []).slice(0);
                    t.push(n), this.events && this.events.trigger("danmaku_load_start", t), this._readAllEndpoints(t, (function (n) {
                        e.dan = [].concat.apply([], n).sort((function (n, e) {
                            return n.time - e.time
                        })), window.requestAnimationFrame((function () {
                            e.frame()
                        })), e.options.callback(), e.events && e.events.trigger("danmaku_load_end")
                    }))
                }
            }, {
                key: "reload",
                value: function (n) {
                    this.options.api = n, this.dan = [], this.clear(), this.load()
                }
            }, {
                key: "_readAllEndpoints",
                value: function (n, e) {
                    for (var t = this, a = [], o = 0, r = function (r) {
                            t.options.apiBackend.read({
                                url: n[r],
                                success: function (t) {
                                    a[r] = t, ++o === n.length && e(a)
                                },
                                error: function (i) {
                                    t.options.error(i || t.options.tran("danmaku-failed")), a[r] = [], ++o === n.length && e(a)
                                }
                            })
                        }, i = 0; i < n.length; ++i) r(i)
                }
            }, {
                key: "send",
                value: function (n, e) {
                    var t = this,
                        a = {
                            token: this.options.api.token,
                            id: this.options.api.id,
                            author: this.options.api.user,
                            time: this.options.time(),
                            text: n.text,
                            color: n.color,
                            type: n.type
                        };
                    this.options.apiBackend.send({
                        url: this.options.api.address + "v3/",
                        data: a,
                        success: e,
                        error: function (n) {
                            t.options.error(n || t.options.tran("danmaku-failed"))
                        }
                    }), this.dan.splice(this.danIndex, 0, a), this.danIndex++;
                    var o = {
                        text: this.htmlEncode(a.text),
                        color: a.color,
                        type: a.type,
                        border: "2px solid ".concat(this.options.borderColor)
                    };
                    this.draw(o), this.events && this.events.trigger("danmaku_send", a)
                }
            }, {
                key: "frame",
                value: function () {
                    var n = this;
                    if (this.dan.length && !this.paused && this.showing) {
                        for (var e = this.dan[this.danIndex], t = []; e && this.options.time() > parseFloat(e.time);) t.push(e), e = this.dan[++this.danIndex];
                        this.draw(t)
                    }
                    window.requestAnimationFrame((function () {
                        n.frame()
                    }))
                }
            }, {
                key: "opacity",
                value: function (n) {
                    if (void 0 !== n) {
                        for (var e = this.container.getElementsByClassName("dplayer-danmaku-item"), t = 0; t < e.length; t++) e[t].style.opacity = n;
                        this._opacity = n, this.events && this.events.trigger("danmaku_opacity", this._opacity)
                    }
                    return this._opacity
                }
            }, {
                key: "draw",
                value: function (n) {
                    var e = this;
                    if (this.showing) {
                        var t = this.options.height,
                            a = this.container.offsetWidth,
                            o = this.container.offsetHeight,
                            r = parseInt(o / t),
                            i = function (n) {
                                var t = n.offsetWidth || parseInt(n.style.width),
                                    a = n.getBoundingClientRect().right || e.container.getBoundingClientRect().right + t;
                                return e.container.getBoundingClientRect().right - a
                            },
                            l = function (n) {
                                return (a + n) / 5
                            },
                            s = function (n, t, o) {
                                for (var s = a / l(o), p = function (o) {
                                        var p = e.danTunnel[t][o + ""];
                                        if (!p || !p.length) return e.danTunnel[t][o + ""] = [n], n.addEventListener("animationend", (function () {
                                            e.danTunnel[t][o + ""].splice(0, 1)
                                        })), {
                                            v: o % r
                                        };
                                        if ("right" !== t) return "continue";
                                        for (var d = 0; d < p.length; d++) {
                                            var c = i(p[d]) - 10;
                                            if (c <= a - s * l(parseInt(p[d].style.width)) || c <= 0) break;
                                            if (d === p.length - 1) return e.danTunnel[t][o + ""].push(n), n.addEventListener("animationend", (function () {
                                                e.danTunnel[t][o + ""].splice(0, 1)
                                            })), {
                                                v: o % r
                                            }
                                        }
                                    }, d = 0; e.unlimited || d < r; d++) {
                                    var c = p(d);
                                    if ("continue" !== c && "object" === Bt(c)) return c.v
                                }
                                return -1
                            };
                        "[object Array]" !== Object.prototype.toString.call(n) && (n = [n]);
                        for (var p = document.createDocumentFragment(), d = function () {
                                n[c].type = T.number2Type(n[c].type), n[c].color || (n[c].color = 16777215);
                                var o = document.createElement("div");
                                o.classList.add("dplayer-danmaku-item"), o.classList.add("dplayer-danmaku-".concat(n[c].type)), n[c].border ? o.innerHTML = '<span style="border:'.concat(n[c].border, '">').concat(n[c].text, "</span>") : o.innerHTML = n[c].text, o.style.opacity = e._opacity, o.style.color = T.number2Color(n[c].color), o.addEventListener("animationend", (function () {
                                    e.container.removeChild(o)
                                }));
                                var r, i = e._measure(n[c].text);
                                switch (n[c].type) {
                                    case "right":
                                        (r = s(o, n[c].type, i)) >= 0 && (o.style.width = i + 1 + "px", o.style.top = t * r + "px", o.style.transform = "translateX(-".concat(a, "px)"));
                                        break;
                                    case "top":
                                        (r = s(o, n[c].type)) >= 0 && (o.style.top = t * r + "px");
                                        break;
                                    case "bottom":
                                        (r = s(o, n[c].type)) >= 0 && (o.style.bottom = t * r + "px");
                                        break;
                                    default:
                                        console.error("Can't handled danmaku type: ".concat(n[c].type))
                                }
                                r >= 0 && (o.classList.add("dplayer-danmaku-move"), o.style.animationDuration = e._danAnimation(n[c].type), p.appendChild(o))
                            }, c = 0; c < n.length; c++) d();
                        return this.container.appendChild(p), p
                    }
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0
                }
            }, {
                key: "_measure",
                value: function (n) {
                    if (!this.context) {
                        var e = getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0], null);
                        this.context = document.createElement("canvas").getContext("2d"), this.context.font = e.getPropertyValue("font")
                    }
                    return this.context.measureText(n).width
                }
            }, {
                key: "seek",
                value: function () {
                    this.clear();
                    for (var n = 0; n < this.dan.length; n++) {
                        if (this.dan[n].time >= this.options.time()) {
                            this.danIndex = n;
                            break
                        }
                        this.danIndex = this.dan.length
                    }
                }
            }, {
                key: "clear",
                value: function () {
                    this.danTunnel = {
                        right: {},
                        top: {},
                        bottom: {}
                    }, this.danIndex = 0, this.options.container.innerHTML = "", this.events && this.events.trigger("danmaku_clear")
                }
            }, {
                key: "htmlEncode",
                value: function (n) {
                    return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;")
                }
            }, {
                key: "resize",
                value: function () {
                    for (var n = this.container.offsetWidth, e = this.container.getElementsByClassName("dplayer-danmaku-item"), t = 0; t < e.length; t++) e[t].style.transform = "translateX(-".concat(n, "px)")
                }
            }, {
                key: "hide",
                value: function () {
                    this.showing = !1, this.pause(), this.clear(), this.events && this.events.trigger("danmaku_hide")
                }
            }, {
                key: "show",
                value: function () {
                    this.seek(), this.showing = !0, this.play(), this.events && this.events.trigger("danmaku_show")
                }
            }, {
                key: "unlimit",
                value: function (n) {
                    this.unlimited = n
                }
            }, {
                key: "speed",
                value: function (n) {
                    this.options.api.speedRate = n
                }
            }, {
                key: "_danAnimation",
                value: function (n) {
                    var e = this.options.api.speedRate || 1,
                        t = !!this.player.fullScreen.isFullScreen();
                    return {
                        top: "".concat((t ? 6 : 4) / e, "s"),
                        right: "".concat((t ? 8 : 5) / e, "s"),
                        bottom: "".concat((t ? 6 : 4) / e, "s")
                    } [n]
                }
            }], t && St(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const Lt = It;

        function zt(n) {
            return zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, zt(n)
        }

        function Tt(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== zt(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== zt(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === zt(o) ? o : String(o)), a)
            }
            var o
        }
        const qt = function () {
            function n() {
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.events = {}, this.videoEvents = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], this.playerEvents = ["screenshot", "thumbnails_show", "thumbnails_hide", "danmaku_show", "danmaku_hide", "danmaku_clear", "danmaku_loaded", "danmaku_send", "danmaku_opacity", "contextmenu_show", "contextmenu_hide", "notice_show", "notice_hide", "quality_start", "quality_end", "destroy", "resize", "fullscreen", "fullscreen_cancel", "webfullscreen", "webfullscreen_cancel", "subtitle_show", "subtitle_hide", "subtitle_change"]
            }
            var e, t;
            return e = n, (t = [{
                key: "on",
                value: function (n, e) {
                    this.type(n) && "function" == typeof e && (this.events[n] || (this.events[n] = []), this.events[n].push(e))
                }
            }, {
                key: "trigger",
                value: function (n, e) {
                    if (this.events[n] && this.events[n].length)
                        for (var t = 0; t < this.events[n].length; t++) this.events[n][t](e)
                }
            }, {
                key: "type",
                value: function (n) {
                    return -1 !== this.playerEvents.indexOf(n) ? "player" : -1 !== this.videoEvents.indexOf(n) ? "video" : (console.error("Unknown event name: ".concat(n)), null)
                }
            }]) && Tt(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();

        function Ot(n) {
            return Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Ot(n)
        }

        function jt(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== Ot(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== Ot(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === Ot(o) ? o : String(o)), a)
            }
            var o
        }
        var Dt = function () {
            function n(e) {
                var t = this;
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.lastScrollPosition = {
                    left: 0,
                    top: 0
                }, this.player.events.on("webfullscreen", (function () {
                    t.player.resize()
                })), this.player.events.on("webfullscreen_cancel", (function () {
                    t.player.resize(), T.setScrollPosition(t.lastScrollPosition)
                })), this.fullscreenchange = function () {
                    t.player.resize(), t.isFullScreen("browser") ? t.player.events.trigger("fullscreen") : (T.setScrollPosition(t.lastScrollPosition), t.player.events.trigger("fullscreen_cancel"))
                }, this.docfullscreenchange = function () {
                    var n = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                    n && n !== t.player.container || (t.player.resize(), n ? t.player.events.trigger("fullscreen") : (T.setScrollPosition(t.lastScrollPosition), t.player.events.trigger("fullscreen_cancel")))
                }, /Firefox/.test(navigator.userAgent) ? (document.addEventListener("mozfullscreenchange", this.docfullscreenchange), document.addEventListener("fullscreenchange", this.docfullscreenchange)) : (this.player.container.addEventListener("fullscreenchange", this.fullscreenchange), this.player.container.addEventListener("webkitfullscreenchange", this.fullscreenchange), document.addEventListener("msfullscreenchange", this.docfullscreenchange), document.addEventListener("MSFullscreenChange", this.docfullscreenchange))
            }
            var e, t;
            return e = n, t = [{
                key: "isFullScreen",
                value: function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
                    switch (n) {
                        case "browser":
                            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                        case "web":
                            return this.player.container.classList.contains("dplayer-fulled")
                    }
                }
            }, {
                key: "request",
                value: function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser",
                        e = "browser" === n ? "web" : "browser",
                        t = this.isFullScreen(e);
                    switch (t || (this.lastScrollPosition = T.getScrollPosition()), n) {
                        case "browser":
                            this.player.container.requestFullscreen ? this.player.container.requestFullscreen() : this.player.container.mozRequestFullScreen ? this.player.container.mozRequestFullScreen() : this.player.container.webkitRequestFullscreen ? this.player.container.webkitRequestFullscreen() : this.player.video.webkitEnterFullscreen ? this.player.video.webkitEnterFullscreen() : this.player.video.webkitEnterFullScreen ? this.player.video.webkitEnterFullScreen() : this.player.container.msRequestFullscreen && this.player.container.msRequestFullscreen();
                            break;
                        case "web":
                            this.player.container.classList.add("dplayer-fulled"), document.body.classList.add("dplayer-web-fullscreen-fix"), this.player.events.trigger("webfullscreen")
                    }
                    t && this.cancel(e)
                }
            }, {
                key: "cancel",
                value: function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
                    switch (n) {
                        case "browser":
                            document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitCancelFullscreen ? document.webkitCancelFullscreen() : document.msCancelFullScreen ? document.msCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
                            break;
                        case "web":
                            this.player.container.classList.remove("dplayer-fulled"), document.body.classList.remove("dplayer-web-fullscreen-fix"), this.player.events.trigger("webfullscreen_cancel")
                    }
                }
            }, {
                key: "toggle",
                value: function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
                    this.isFullScreen(n) ? this.cancel(n) : this.request(n)
                }
            }, {
                key: "destroy",
                value: function () {
                    /Firefox/.test(navigator.userAgent) ? (document.removeEventListener("mozfullscreenchange", this.docfullscreenchange), document.removeEventListener("fullscreenchange", this.docfullscreenchange)) : (this.player.container.removeEventListener("fullscreenchange", this.fullscreenchange), this.player.container.removeEventListener("webkitfullscreenchange", this.fullscreenchange), document.removeEventListener("msfullscreenchange", this.docfullscreenchange), document.removeEventListener("MSFullscreenChange", this.docfullscreenchange))
                }
            }], t && jt(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const Pt = Dt;

        function Rt(n) {
            return Rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Rt(n)
        }

        function Yt(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== Rt(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== Rt(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === Rt(o) ? o : String(o)), a)
            }
            var o
        }
        var Mt = function () {
            function n(e) {
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.storageName = {
                    opacity: "dplayer-danmaku-opacity",
                    volume: "dplayer-volume",
                    unlimited: "dplayer-danmaku-unlimited",
                    danmaku: "dplayer-danmaku-show",
                    subtitle: "dplayer-subtitle-show"
                }, this.default = {
                    opacity: .7,
                    volume: e.options.hasOwnProperty("volume") ? e.options.volume : .7,
                    unlimited: (e.options.danmaku && e.options.danmaku.unlimited ? 1 : 0) || 0,
                    danmaku: 1,
                    subtitle: 1
                }, this.data = {}, this.init()
            }
            var e, t;
            return e = n, (t = [{
                key: "init",
                value: function () {
                    for (var n in this.storageName) {
                        var e = this.storageName[n];
                        this.data[n] = parseFloat(T.storage.get(e) || this.default[n])
                    }
                }
            }, {
                key: "get",
                value: function (n) {
                    return this.data[n]
                }
            }, {
                key: "set",
                value: function (n, e) {
                    this.data[n] = e, T.storage.set(this.storageName[n], e)
                }
            }]) && Yt(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const Ft = Mt;

        function Wt(n) {
            return Wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Wt(n)
        }

        function Ut(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== Wt(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== Wt(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === Wt(o) ? o : String(o)), a)
            }
            var o
        }
        var Nt = function () {
            function n(e, t, a, o) {
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.container = e, this.video = t, this.options = a, this.events = o, this.init()
            }
            var e, t;
            return e = n, t = [{
                key: "init",
                value: function () {
                    var n = this;
                    if (this.container.style.fontSize = this.options.fontSize, this.container.style.bottom = this.options.bottom, this.container.style.color = this.options.color, this.video.textTracks && this.video.textTracks[0]) {
                        var e = this.video.textTracks[0];
                        e.oncuechange = function () {
                            var t = e.activeCues[e.activeCues.length - 1];
                            if (n.container.innerHTML = "", t) {
                                var a = document.createElement("div");
                                a.appendChild(t.getCueAsHTML());
                                var o = a.innerHTML.split(/\r?\n/).map((function (n) {
                                    return "<p>".concat(n, "</p>")
                                })).join("");
                                n.container.innerHTML = o
                            }
                            n.events.trigger("subtitle_change")
                        }
                    }
                }
            }, {
                key: "show",
                value: function () {
                    this.container.classList.remove("dplayer-subtitle-hide"), this.events.trigger("subtitle_show")
                }
            }, {
                key: "hide",
                value: function () {
                    this.container.classList.add("dplayer-subtitle-hide"), this.events.trigger("subtitle_hide")
                }
            }, {
                key: "toggle",
                value: function () {
                    this.container.classList.contains("dplayer-subtitle-hide") ? this.show() : this.hide()
                }
            }], t && Ut(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const Qt = Nt;

        function Ht(n) {
            return Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Ht(n)
        }

        function _t(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== Ht(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== Ht(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === Ht(o) ? o : String(o)), a)
            }
            var o
        }
        var Kt = function () {
            function n(e) {
                var t = this;
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.player.template.mask.addEventListener("click", (function () {
                    t.hide()
                })), this.player.template.subtitlesButton.addEventListener("click", (function () {
                    t.adaptiveHeight(), t.show()
                }));
                for (var a = this.player.template.subtitlesItem.length - 1, o = function (n) {
                        t.player.template.subtitlesItem[n].addEventListener("click", (function () {
                            t.hide(), t.player.options.subtitle.index !== n && (t.player.template.subtitle.innerHTML = "<p></p>", t.player.template.subtrack.src = t.player.template.subtitlesItem[n].dataset.subtitle, t.player.options.subtitle.index = n, t.player.template.subtitle.classList.contains("dplayer-subtitle-hide") && t.subContainerShow())
                        }))
                    }, r = 0; r < a; r++) o(r);
                this.player.template.subtitlesItem[a].addEventListener("click", (function () {
                    t.hide(), t.player.options.subtitle.index !== a && (t.player.template.subtitle.innerHTML = "<p></p>", t.player.template.subtrack.src = "", t.player.options.subtitle.index = a, t.subContainerHide())
                }))
            }
            var e, t;
            return e = n, (t = [{
                key: "subContainerShow",
                value: function () {
                    this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"), this.player.events.trigger("subtitle_show")
                }
            }, {
                key: "subContainerHide",
                value: function () {
                    this.player.template.subtitle.classList.add("dplayer-subtitle-hide"), this.player.events.trigger("subtitle_hide")
                }
            }, {
                key: "hide",
                value: function () {
                    this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"), this.player.template.mask.classList.remove("dplayer-mask-show"), this.player.controller.disableAutoHide = !1
                }
            }, {
                key: "show",
                value: function () {
                    this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"), this.player.template.mask.classList.add("dplayer-mask-show"), this.player.controller.disableAutoHide = !0
                }
            }, {
                key: "adaptiveHeight",
                value: function () {
                    var n = 30 * this.player.template.subtitlesItem.length + 14,
                        e = .8 * this.player.template.videoWrap.offsetHeight;
                    n >= e - 50 ? (this.player.template.subtitlesBox.style.bottom = "8px", this.player.template.subtitlesBox.style["max-height"] = e - 8 + "px") : (this.player.template.subtitlesBox.style.bottom = "50px", this.player.template.subtitlesBox.style["max-height"] = e - 50 + "px")
                }
            }]) && _t(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const Zt = Kt;

        function Vt(n) {
            return Vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Vt(n)
        }

        function Xt(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== Vt(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== Vt(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === Vt(o) ? o : String(o)), a)
            }
            var o
        }
        var Jt = function () {
            function n(e) {
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.elements = {}, this.elements.volume = e.volumeBar, this.elements.played = e.playedBar, this.elements.loaded = e.loadedBar, this.elements.danmaku = e.danmakuOpacityBar
            }
            var e, t;
            return e = n, (t = [{
                key: "set",
                value: function (n, e, t) {
                    e = Math.max(e, 0), e = Math.min(e, 1), this.elements[n].style[t] = 100 * e + "%"
                }
            }, {
                key: "get",
                value: function (n) {
                    return parseFloat(this.elements[n].style.width) / 100
                }
            }]) && Xt(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const Gt = Jt;

        function $t(n) {
            return $t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, $t(n)
        }

        function na(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== $t(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== $t(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === $t(o) ? o : String(o)), a)
            }
            var o
        }
        var ea = function () {
            function n(e) {
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (n) {
                    window.setTimeout(n, 1e3 / 60)
                }, this.types = ["loading", "info", "fps"], this.init()
            }
            var e, t;
            return e = n, (t = [{
                key: "init",
                value: function () {
                    var n = this;
                    this.types.map((function (e) {
                        return "fps" !== e && n["init".concat(e, "Checker")](), e
                    }))
                }
            }, {
                key: "initloadingChecker",
                value: function () {
                    var n = this,
                        e = 0,
                        t = 0,
                        a = !1;
                    this.loadingChecker = setInterval((function () {
                        n.enableloadingChecker && (t = n.player.video.currentTime, a || t !== e || n.player.video.paused || (n.player.container.classList.add("dplayer-loading"), a = !0), a && t > e && !n.player.video.paused && (n.player.container.classList.remove("dplayer-loading"), a = !1), e = t)
                    }), 100)
                }
            }, {
                key: "initfpsChecker",
                value: function () {
                    var n = this;
                    window.requestAnimationFrame((function () {
                        if (n.enablefpsChecker)
                            if (n.initfpsChecker(), n.fpsStart) {
                                n.fpsIndex++;
                                var e = new Date;
                                e - n.fpsStart > 1e3 && (n.player.infoPanel.fps(n.fpsIndex / (e - n.fpsStart) * 1e3), n.fpsStart = new Date, n.fpsIndex = 0)
                            } else n.fpsStart = new Date, n.fpsIndex = 0;
                        else n.fpsStart = 0, n.fpsIndex = 0
                    }))
                }
            }, {
                key: "initinfoChecker",
                value: function () {
                    var n = this;
                    this.infoChecker = setInterval((function () {
                        n.enableinfoChecker && n.player.infoPanel.update()
                    }), 1e3)
                }
            }, {
                key: "enable",
                value: function (n) {
                    this["enable".concat(n, "Checker")] = !0, "fps" === n && this.initfpsChecker()
                }
            }, {
                key: "disable",
                value: function (n) {
                    this["enable".concat(n, "Checker")] = !1
                }
            }, {
                key: "destroy",
                value: function () {
                    var n = this;
                    this.types.map((function (e) {
                        return n["enable".concat(e, "Checker")] = !1, n["".concat(e, "Checker")] && clearInterval(n["".concat(e, "Checker")]), e
                    }))
                }
            }]) && na(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const ta = ea;

        function aa(n) {
            return aa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, aa(n)
        }

        function oa(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== aa(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== aa(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === aa(o) ? o : String(o)), a)
            }
            var o
        }
        const ra = function () {
            function n(e) {
                var t = this;
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.container = e, this.container.addEventListener("animationend", (function () {
                    t.container.classList.remove("dplayer-bezel-transition")
                }))
            }
            var e, t;
            return e = n, (t = [{
                key: "switch",
                value: function (n) {
                    this.container.innerHTML = n, this.container.classList.add("dplayer-bezel-transition")
                }
            }]) && oa(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();

        function ia(n) {
            return ia = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, ia(n)
        }

        function la(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== ia(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== ia(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === ia(o) ? o : String(o)), a)
            }
            var o
        }
        var sa = function () {
            function n(e) {
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.container = e.container, this.barWidth = e.barWidth, this.container.style.backgroundImage = "url('".concat(e.url, "')"), this.events = e.events
            }
            var e, t;
            return e = n, (t = [{
                key: "resize",
                value: function (n, e, t) {
                    this.container.style.width = "".concat(n, "px"), this.container.style.height = "".concat(e, "px"), this.container.style.top = "".concat(2 - e, "px"), this.barWidth = t
                }
            }, {
                key: "show",
                value: function () {
                    this.container.style.display = "block", this.events && this.events.trigger("thumbnails_show")
                }
            }, {
                key: "move",
                value: function (n) {
                    this.container.style.backgroundPosition = "-".concat(160 * (Math.ceil(n / this.barWidth * 100) - 1), "px 0"), this.container.style.left = "".concat(Math.min(Math.max(n - this.container.offsetWidth / 2, -10), this.barWidth - 150), "px")
                }
            }, {
                key: "hide",
                value: function () {
                    this.container.style.display = "none", this.events && this.events.trigger("thumbnails_hide")
                }
            }]) && la(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const pa = sa;

        function da(n) {
            return da = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, da(n)
        }

        function ca(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== da(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== da(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === da(o) ? o : String(o)), a)
            }
            var o
        }
        var Aa, ua = !0,
            ya = !1,
            ma = function () {
                function n(e) {
                    ! function (n, e) {
                        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.player = e, this.autoHideTimer = 0, T.isMobile || (this.setAutoHideHandler = this.setAutoHide.bind(this), this.player.container.addEventListener("mousemove", this.setAutoHideHandler), this.player.container.addEventListener("click", this.setAutoHideHandler), this.player.on("play", this.setAutoHideHandler), this.player.on("pause", this.setAutoHideHandler)), this.initPlayButton(), this.initThumbnails(), this.initPlayedBar(), this.initFullButton(), this.initQualityButton(), this.initScreenshotButton(), this.player.options.subtitle && "string" == typeof this.player.options.subtitle.url && this.initSubtitleButton(), this.initHighlights(), this.initAirplayButton(), this.initChromecastButton(), T.isMobile || this.initVolumeButton()
                }
                var e, t;
                return e = n, (t = [{
                    key: "initPlayButton",
                    value: function () {
                        var n = this;
                        this.player.template.playButton.addEventListener("click", (function () {
                            n.player.toggle()
                        })), this.player.template.mobilePlayButton.addEventListener("click", (function () {
                            n.player.toggle()
                        })), T.isMobile ? (this.player.template.videoWrap.addEventListener("click", (function () {
                            n.toggle()
                        })), this.player.template.controllerMask.addEventListener("click", (function () {
                            n.toggle()
                        }))) : this.player.options.preventClickToggle || (this.player.template.videoWrap.addEventListener("click", (function () {
                            n.player.toggle()
                        })), this.player.template.controllerMask.addEventListener("click", (function () {
                            n.player.toggle()
                        })))
                    }
                }, {
                    key: "initHighlights",
                    value: function () {
                        var n = this;
                        this.player.on("durationchange", (function () {
                            if (1 !== n.player.video.duration && n.player.video.duration !== 1 / 0 && n.player.options.highlight) {
                                var e = n.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");
                                [].slice.call(e, 0).forEach((function (e) {
                                    n.player.template.playedBarWrap.removeChild(e)
                                }));
                                for (var t = 0; t < n.player.options.highlight.length; t++)
                                    if (n.player.options.highlight[t].text && n.player.options.highlight[t].time) {
                                        var a = document.createElement("div");
                                        a.classList.add("dplayer-highlight"), a.style.left = n.player.options.highlight[t].time / n.player.video.duration * 100 + "%", a.innerHTML = '<span class="dplayer-highlight-text">' + n.player.options.highlight[t].text + "</span>", n.player.template.playedBarWrap.insertBefore(a, n.player.template.playedBarTime)
                                    }
                            }
                        }))
                    }
                }, {
                    key: "initThumbnails",
                    value: function () {
                        var n = this;
                        this.player.options.video.thumbnails && (this.thumbnails = new pa({
                            container: this.player.template.barPreview,
                            barWidth: this.player.template.barWrap.offsetWidth,
                            url: this.player.options.video.thumbnails,
                            events: this.player.events
                        }), this.player.on("loadedmetadata", (function () {
                            n.thumbnails.resize(160, n.player.video.videoHeight / n.player.video.videoWidth * 160, n.player.template.barWrap.offsetWidth)
                        })))
                    }
                }, {
                    key: "initPlayedBar",
                    value: function () {
                        var n = this,
                            e = function (e) {
                                var t = ((e.clientX || e.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(n.player.template.playedBarWrap)) / n.player.template.playedBarWrap.clientWidth;
                                t = Math.max(t, 0), t = Math.min(t, 1), n.player.bar.set("played", t, "width"), n.player.template.ptime.innerHTML = T.secondToTime(t * n.player.video.duration)
                            },
                            t = function t(a) {
                                document.removeEventListener(T.nameMap.dragEnd, t), document.removeEventListener(T.nameMap.dragMove, e);
                                var o = ((a.clientX || a.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(n.player.template.playedBarWrap)) / n.player.template.playedBarWrap.clientWidth;
                                o = Math.max(o, 0), o = Math.min(o, 1), n.player.bar.set("played", o, "width"), n.player.seek(n.player.bar.get("played") * n.player.video.duration), n.player.timer.enable("progress")
                            };
                        this.player.template.playedBarWrap.addEventListener(T.nameMap.dragStart, (function () {
                            n.player.timer.disable("progress"), document.addEventListener(T.nameMap.dragMove, e), document.addEventListener(T.nameMap.dragEnd, t)
                        })), this.player.template.playedBarWrap.addEventListener(T.nameMap.dragMove, (function (e) {
                            if (n.player.video.duration) {
                                var t = n.player.template.playedBarWrap.getBoundingClientRect().left,
                                    a = (e.clientX || e.changedTouches[0].clientX) - t;
                                if (a < 0 || a > n.player.template.playedBarWrap.offsetWidth) return;
                                var o = n.player.video.duration * (a / n.player.template.playedBarWrap.offsetWidth);
                                T.isMobile && n.thumbnails && n.thumbnails.show(), n.thumbnails && n.thumbnails.move(a), n.player.template.playedBarTime.style.left = "".concat(a - (o >= 3600 ? 25 : 20), "px"), n.player.template.playedBarTime.innerText = T.secondToTime(o), n.player.template.playedBarTime.classList.remove("hidden")
                            }
                        })), this.player.template.playedBarWrap.addEventListener(T.nameMap.dragEnd, (function () {
                            T.isMobile && n.thumbnails && n.thumbnails.hide()
                        })), T.isMobile || (this.player.template.playedBarWrap.addEventListener("mouseenter", (function () {
                            n.player.video.duration && (n.thumbnails && n.thumbnails.show(), n.player.template.playedBarTime.classList.remove("hidden"))
                        })), this.player.template.playedBarWrap.addEventListener("mouseleave", (function () {
                            n.player.video.duration && (n.thumbnails && n.thumbnails.hide(), n.player.template.playedBarTime.classList.add("hidden"))
                        })))
                    }
                }, {
                    key: "initFullButton",
                    value: function () {
                        var n = this;
                        this.player.template.browserFullButton.addEventListener("click", (function () {
                            n.player.fullScreen.toggle("browser")
                        })), this.player.template.webFullButton.addEventListener("click", (function () {
                            n.player.fullScreen.toggle("web")
                        }))
                    }
                }, {
                    key: "initVolumeButton",
                    value: function () {
                        var n = this,
                            e = function (e) {
                                var t = e || window.event,
                                    a = ((t.clientX || t.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(n.player.template.volumeBarWrap) - 5.5) / 35;
                                n.player.volume(a)
                            },
                            t = function t() {
                                document.removeEventListener(T.nameMap.dragEnd, t), document.removeEventListener(T.nameMap.dragMove, e), n.player.template.volumeButton.classList.remove("dplayer-volume-active")
                            };
                        this.player.template.volumeBarWrapWrap.addEventListener("click", (function (e) {
                            var t = e || window.event,
                                a = ((t.clientX || t.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(n.player.template.volumeBarWrap) - 5.5) / 35;
                            n.player.volume(a)
                        })), this.player.template.volumeBarWrapWrap.addEventListener(T.nameMap.dragStart, (function () {
                            document.addEventListener(T.nameMap.dragMove, e), document.addEventListener(T.nameMap.dragEnd, t), n.player.template.volumeButton.classList.add("dplayer-volume-active")
                        })), this.player.template.volumeButtonIcon.addEventListener("click", (function () {
                            n.player.video.muted ? (n.player.video.muted = !1, n.player.switchVolumeIcon(), n.player.bar.set("volume", n.player.volume(), "width")) : (n.player.video.muted = !0, n.player.template.volumeIcon.innerHTML = gt.volumeOff, n.player.bar.set("volume", 0, "width"))
                        }))
                    }
                }, {
                    key: "initQualityButton",
                    value: function () {
                        var n = this;
                        this.player.options.video.quality && this.player.template.qualityList.addEventListener("click", (function (e) {
                            e.target.classList.contains("dplayer-quality-item") && n.player.switchQuality(e.target.dataset.index)
                        }))
                    }
                }, {
                    key: "initScreenshotButton",
                    value: function () {
                        var n = this;
                        this.player.options.screenshot && this.player.template.camareButton.addEventListener("click", (function () {
                            var e, t = document.createElement("canvas");
                            t.width = n.player.video.videoWidth, t.height = n.player.video.videoHeight, t.getContext("2d").drawImage(n.player.video, 0, 0, t.width, t.height), t.toBlob((function (t) {
                                e = URL.createObjectURL(t);
                                var a = document.createElement("a");
                                a.href = e, a.download = "DPlayer.png", a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(e), n.player.events.trigger("screenshot", e)
                            }))
                        }))
                    }
                }, {
                    key: "initAirplayButton",
                    value: function () {
                        this.player.options.airplay && (window.WebKitPlaybackTargetAvailabilityEvent ? this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged", function (n) {
                            "available" === n.availability ? this.template.airplayButton.disable = !1 : this.template.airplayButton.disable = !0, this.template.airplayButton.addEventListener("click", function () {
                                this.video.webkitShowPlaybackTargetPicker()
                            }.bind(this))
                        }.bind(this.player)) : this.player.template.airplayButton.style.display = "none")
                    }
                }, {
                    key: "initChromecast",
                    value: function () {
                        var n = window.document.createElement("script");
                        n.setAttribute("type", "text/javascript"), n.setAttribute("src", "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"), window.document.body.appendChild(n), window.__onGCastApiAvailable = function (n) {
                            if (n) {
                                var e = new(Aa = window.chrome.cast).SessionRequest(Aa.media.DEFAULT_MEDIA_RECEIVER_APP_ID),
                                    t = new Aa.ApiConfig(e, (function () {}), (function (n) {
                                        n === Aa.ReceiverAvailability.AVAILABLE && console.log("chromecast: ", n)
                                    }));
                                Aa.initialize(t, (function () {}))
                            }
                        }
                    }
                }, {
                    key: "initChromecastButton",
                    value: function () {
                        var n = this;
                        if (this.player.options.chromecast) {
                            ua && (ua = !1, this.initChromecast());
                            var e = function (e, t) {
                                    n.currentMedia = t
                                },
                                t = function (n) {
                                    console.error("Error launching media", n)
                                };
                            this.player.template.chromecastButton.addEventListener("click", (function () {
                                ya ? (ya = !1, n.currentMedia.stop(), n.session.stop(), n.initChromecast()) : (ya = !0, Aa.requestSession((function (a) {
                                    var o, r, i;
                                    n.session = a, o = n.player.options.video.url, r = new Aa.media.MediaInfo(o), i = new Aa.media.LoadRequest(r), n.session ? n.session.loadMedia(i, e.bind(n, "loadMedia"), t).play() : window.open(o)
                                }), (function (e) {
                                    "cancel" === e.code ? n.session = void 0 : console.error("Error selecting a cast device", e)
                                })))
                            }))
                        }
                    }
                }, {
                    key: "initSubtitleButton",
                    value: function () {
                        var n = this;
                        this.player.events.on("subtitle_show", (function () {
                            n.player.template.subtitleButton.dataset.balloon = n.player.tran("hide-subs"), n.player.template.subtitleButtonInner.style.opacity = "", n.player.user.set("subtitle", 1)
                        })), this.player.events.on("subtitle_hide", (function () {
                            n.player.template.subtitleButton.dataset.balloon = n.player.tran("show-subs"), n.player.template.subtitleButtonInner.style.opacity = "0.4", n.player.user.set("subtitle", 0)
                        })), this.player.template.subtitleButton.addEventListener("click", (function () {
                            n.player.subtitle.toggle()
                        }))
                    }
                }, {
                    key: "setAutoHide",
                    value: function () {
                        var n = this;
                        this.show(), clearTimeout(this.autoHideTimer), this.autoHideTimer = setTimeout((function () {
                            !n.player.video.played.length || n.player.paused || n.disableAutoHide || n.hide()
                        }), 3e3)
                    }
                }, {
                    key: "show",
                    value: function () {
                        this.player.container.classList.remove("dplayer-hide-controller")
                    }
                }, {
                    key: "hide",
                    value: function () {
                        this.player.container.classList.add("dplayer-hide-controller"), this.player.setting.hide(), this.player.comment && this.player.comment.hide()
                    }
                }, {
                    key: "isShow",
                    value: function () {
                        return !this.player.container.classList.contains("dplayer-hide-controller")
                    }
                }, {
                    key: "toggle",
                    value: function () {
                        this.isShow() ? this.hide() : this.show()
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        T.isMobile || (this.player.container.removeEventListener("mousemove", this.setAutoHideHandler), this.player.container.removeEventListener("click", this.setAutoHideHandler)), clearTimeout(this.autoHideTimer)
                    }
                }]) && ca(e.prototype, t), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), n
            }();
        const ha = ma;

        function fa(n) {
            return fa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, fa(n)
        }

        function ba(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== fa(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== fa(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === fa(o) ? o : String(o)), a)
            }
            var o
        }
        var ga = function () {
            function n(e) {
                var t = this;
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.player.template.mask.addEventListener("click", (function () {
                    t.hide()
                })), this.player.template.settingButton.addEventListener("click", (function () {
                    t.show()
                })), this.loop = this.player.options.loop, this.player.template.loopToggle.checked = this.loop, this.player.template.loop.addEventListener("click", (function () {
                    t.player.template.loopToggle.checked = !t.player.template.loopToggle.checked, t.player.template.loopToggle.checked ? t.loop = !0 : t.loop = !1, t.hide()
                })), this.showDanmaku = this.player.user.get("danmaku"), this.showDanmaku || this.player.danmaku && this.player.danmaku.hide(), this.player.template.showDanmakuToggle.checked = this.showDanmaku, this.player.template.showDanmaku.addEventListener("click", (function () {
                    t.player.template.showDanmakuToggle.checked = !t.player.template.showDanmakuToggle.checked, t.player.template.showDanmakuToggle.checked ? (t.showDanmaku = !0, t.player.danmaku.show()) : (t.showDanmaku = !1, t.player.danmaku.hide()), t.player.user.set("danmaku", t.showDanmaku ? 1 : 0), t.hide()
                })), this.unlimitDanmaku = this.player.user.get("unlimited"), this.player.template.unlimitDanmakuToggle.checked = this.unlimitDanmaku, this.player.template.unlimitDanmaku.addEventListener("click", (function () {
                    t.player.template.unlimitDanmakuToggle.checked = !t.player.template.unlimitDanmakuToggle.checked, t.player.template.unlimitDanmakuToggle.checked ? (t.unlimitDanmaku = !0, t.player.danmaku.unlimit(!0)) : (t.unlimitDanmaku = !1, t.player.danmaku.unlimit(!1)), t.player.user.set("unlimited", t.unlimitDanmaku ? 1 : 0), t.hide()
                })), this.player.template.speed.addEventListener("click", (function () {
                    t.player.template.settingBox.classList.add("dplayer-setting-box-narrow"), t.player.template.settingBox.classList.add("dplayer-setting-box-speed")
                }));
                for (var a = function (n) {
                        t.player.template.speedItem[n].addEventListener("click", (function () {
                            t.player.speed(t.player.template.speedItem[n].dataset.speed), t.hide()
                        }))
                    }, o = 0; o < this.player.template.speedItem.length; o++) a(o);
                if (this.player.danmaku) {
                    this.player.on("danmaku_opacity", (function (n) {
                        t.player.bar.set("danmaku", n, "width"), t.player.user.set("opacity", n)
                    })), this.player.danmaku.opacity(this.player.user.get("opacity"));
                    var r = function (n) {
                            var e = n || window.event,
                                a = ((e.clientX || e.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(t.player.template.danmakuOpacityBarWrap)) / 130;
                            a = Math.max(a, 0), a = Math.min(a, 1), t.player.danmaku.opacity(a)
                        },
                        i = function n() {
                            document.removeEventListener(T.nameMap.dragEnd, n), document.removeEventListener(T.nameMap.dragMove, r), t.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")
                        };
                    this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click", (function (n) {
                        var e = n || window.event,
                            a = ((e.clientX || e.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(t.player.template.danmakuOpacityBarWrap)) / 130;
                        a = Math.max(a, 0), a = Math.min(a, 1), t.player.danmaku.opacity(a)
                    })), this.player.template.danmakuOpacityBarWrapWrap.addEventListener(T.nameMap.dragStart, (function () {
                        document.addEventListener(T.nameMap.dragMove, r), document.addEventListener(T.nameMap.dragEnd, i), t.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")
                    }))
                }
            }
            var e, t;
            return e = n, (t = [{
                key: "hide",
                value: function () {
                    var n = this;
                    this.player.template.settingBox.classList.remove("dplayer-setting-box-open"), this.player.template.mask.classList.remove("dplayer-mask-show"), setTimeout((function () {
                        n.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"), n.player.template.settingBox.classList.remove("dplayer-setting-box-speed")
                    }), 300), this.player.controller.disableAutoHide = !1
                }
            }, {
                key: "show",
                value: function () {
                    this.player.template.settingBox.classList.add("dplayer-setting-box-open"), this.player.template.mask.classList.add("dplayer-mask-show"), this.player.controller.disableAutoHide = !0
                }
            }]) && ba(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const va = ga;

        function xa(n) {
            return xa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, xa(n)
        }

        function Ea(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== xa(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== xa(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === xa(o) ? o : String(o)), a)
            }
            var o
        }
        var wa = function () {
            function n(e) {
                var t = this;
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.player.template.mask.addEventListener("click", (function () {
                    t.hide()
                })), this.player.template.commentButton.addEventListener("click", (function () {
                    t.show()
                })), this.player.template.commentSettingButton.addEventListener("click", (function () {
                    t.toggleSetting()
                })), this.player.template.commentColorSettingBox.addEventListener("click", (function () {
                    if (t.player.template.commentColorSettingBox.querySelector("input:checked+span")) {
                        var n = t.player.template.commentColorSettingBox.querySelector("input:checked").value;
                        t.player.template.commentSettingFill.style.fill = n, t.player.template.commentInput.style.color = n, t.player.template.commentSendFill.style.fill = n
                    }
                })), this.player.template.commentInput.addEventListener("click", (function () {
                    t.hideSetting()
                })), this.player.template.commentInput.addEventListener("keydown", (function (n) {
                    13 === (n || window.event).keyCode && t.send()
                })), this.player.template.commentSendButton.addEventListener("click", (function () {
                    t.send()
                }))
            }
            var e, t;
            return e = n, (t = [{
                key: "show",
                value: function () {
                    this.player.controller.disableAutoHide = !0, this.player.template.controller.classList.add("dplayer-controller-comment"), this.player.template.mask.classList.add("dplayer-mask-show"), this.player.container.classList.add("dplayer-show-controller"), this.player.template.commentInput.focus()
                }
            }, {
                key: "hide",
                value: function () {
                    this.player.template.controller.classList.remove("dplayer-controller-comment"), this.player.template.mask.classList.remove("dplayer-mask-show"), this.player.container.classList.remove("dplayer-show-controller"), this.player.controller.disableAutoHide = !1, this.hideSetting()
                }
            }, {
                key: "showSetting",
                value: function () {
                    this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")
                }
            }, {
                key: "hideSetting",
                value: function () {
                    this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")
                }
            }, {
                key: "toggleSetting",
                value: function () {
                    this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open") ? this.hideSetting() : this.showSetting()
                }
            }, {
                key: "send",
                value: function () {
                    var n = this;
                    this.player.template.commentInput.blur(), this.player.template.commentInput.value.replace(/^\s+|\s+$/g, "") ? this.player.danmaku.send({
                        text: this.player.template.commentInput.value,
                        color: T.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),
                        type: parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)
                    }, (function () {
                        n.player.template.commentInput.value = "", n.hide()
                    })) : this.player.notice(this.player.tran("please-input-danmaku"))
                }
            }]) && Ea(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const Ca = wa;

        function ka(n) {
            return ka = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, ka(n)
        }

        function Ba(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== ka(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== ka(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === ka(o) ? o : String(o)), a)
            }
            var o
        }
        var Sa = function () {
            function n(e) {
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.doHotKeyHandler = this.doHotKey.bind(this), this.cancelFullScreenHandler = this.cancelFullScreen.bind(this), this.player.options.hotkey && document.addEventListener("keydown", this.doHotKeyHandler), document.addEventListener("keydown", this.cancelFullScreenHandler)
            }
            var e, t;
            return e = n, (t = [{
                key: "doHotKey",
                value: function (n) {
                    if (this.player.focus) {
                        var e = document.activeElement.tagName.toUpperCase(),
                            t = document.activeElement.getAttribute("contenteditable");
                        if ("INPUT" !== e && "TEXTAREA" !== e && "" !== t && "true" !== t) {
                            var a, o = n || window.event;
                            switch (o.keyCode) {
                                case 32:
                                    o.preventDefault(), this.player.toggle();
                                    break;
                                case 37:
                                    if (o.preventDefault(), this.player.options.live) break;
                                    this.player.seek(this.player.video.currentTime - 5), this.player.controller.setAutoHide();
                                    break;
                                case 39:
                                    if (o.preventDefault(), this.player.options.live) break;
                                    this.player.seek(this.player.video.currentTime + 5), this.player.controller.setAutoHide();
                                    break;
                                case 38:
                                    o.preventDefault(), a = this.player.volume() + .1, this.player.volume(a);
                                    break;
                                case 40:
                                    o.preventDefault(), a = this.player.volume() - .1, this.player.volume(a)
                            }
                        }
                    }
                }
            }, {
                key: "cancelFullScreen",
                value: function (n) {
                    27 === (n || window.event).keyCode && this.player.fullScreen.isFullScreen("web") && this.player.fullScreen.cancel("web")
                }
            }, {
                key: "destroy",
                value: function () {
                    this.player.options.hotkey && document.removeEventListener("keydown", this.doHotKeyHandler), document.removeEventListener("keydown", this.cancelFullScreenHandler)
                }
            }]) && Ba(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const Ia = Sa;

        function La(n) {
            return La = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, La(n)
        }

        function za(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== La(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== La(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === La(o) ? o : String(o)), a)
            }
            var o
        }
        var Ta = function () {
            function n(e) {
                var t = this;
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.shown = !1, Array.prototype.slice.call(this.player.template.menuItem).forEach((function (n, e) {
                    t.player.options.contextmenu[e].click && n.addEventListener("click", (function () {
                        t.player.options.contextmenu[e].click(t.player), t.hide()
                    }))
                })), this.contextmenuHandler = function (n) {
                    if (t.shown) t.hide();
                    else {
                        var e = n || window.event;
                        e.preventDefault();
                        var a = t.player.container.getBoundingClientRect();
                        t.show(e.clientX - a.left, e.clientY - a.top), t.player.template.mask.addEventListener("click", (function () {
                            t.hide()
                        }))
                    }
                }, this.player.container.addEventListener("contextmenu", this.contextmenuHandler)
            }
            var e, t;
            return e = n, (t = [{
                key: "show",
                value: function (n, e) {
                    this.player.template.menu.classList.add("dplayer-menu-show");
                    var t = this.player.container.getBoundingClientRect();
                    n + this.player.template.menu.offsetWidth >= t.width ? (this.player.template.menu.style.right = t.width - n + "px", this.player.template.menu.style.left = "initial") : (this.player.template.menu.style.left = n + "px", this.player.template.menu.style.right = "initial"), e + this.player.template.menu.offsetHeight >= t.height ? (this.player.template.menu.style.bottom = t.height - e + "px", this.player.template.menu.style.top = "initial") : (this.player.template.menu.style.top = e + "px", this.player.template.menu.style.bottom = "initial"), this.player.template.mask.classList.add("dplayer-mask-show"), this.shown = !0, this.player.events.trigger("contextmenu_show")
                }
            }, {
                key: "hide",
                value: function () {
                    this.player.template.mask.classList.remove("dplayer-mask-show"), this.player.template.menu.classList.remove("dplayer-menu-show"), this.shown = !1, this.player.events.trigger("contextmenu_hide")
                }
            }, {
                key: "destroy",
                value: function () {
                    this.player.container.removeEventListener("contextmenu", this.contextmenuHandler)
                }
            }]) && za(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const qa = Ta;

        function Oa(n) {
            return Oa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Oa(n)
        }

        function ja(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, (void 0, o = function (n, e) {
                    if ("object" !== Oa(n) || null === n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(n, "string");
                        if ("object" !== Oa(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(n)
                }(a.key), "symbol" === Oa(o) ? o : String(o)), a)
            }
            var o
        }
        var Da = function () {
            function n(e) {
                var t = this;
                ! function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.container = e.template.infoPanel, this.template = e.template, this.video = e.video, this.player = e, this.template.infoPanelClose.addEventListener("click", (function () {
                    t.hide()
                }))
            }
            var e, t;
            return e = n, (t = [{
                key: "show",
                value: function () {
                    this.beginTime = Date.now(), this.update(), this.player.timer.enable("info"), this.player.timer.enable("fps"), this.container.classList.remove("dplayer-info-panel-hide")
                }
            }, {
                key: "hide",
                value: function () {
                    this.player.timer.disable("info"), this.player.timer.disable("fps"), this.container.classList.add("dplayer-info-panel-hide")
                }
            }, {
                key: "triggle",
                value: function () {
                    this.container.classList.contains("dplayer-info-panel-hide") ? this.show() : this.hide()
                }
            }, {
                key: "update",
                value: function () {
                    this.template.infoVersion.innerHTML = "MUSESTAR DPlayer v".concat("1.27.1", " ").concat("v1.27.0-12-g4f61091"), this.template.infoType.innerHTML = this.player.type, this.template.infoUrl.innerHTML = this.player.options.video.url, this.template.infoResolution.innerHTML = "".concat(this.player.video.videoWidth, " x ").concat(this.player.video.videoHeight), this.template.infoDuration.innerHTML = this.player.video.duration, this.player.options.danmaku && (this.template.infoDanmakuId.innerHTML = this.player.options.danmaku.id, this.template.infoDanmakuApi.innerHTML = this.player.options.danmaku.api, this.template.infoDanmakuAmount.innerHTML = this.player.danmaku.dan.length)
                }
            }, {
                key: "fps",
                value: function (n) {
                    this.template.infoFPS.innerHTML = "".concat(n.toFixed(1))
                }
            }]) && ja(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), n
        }();
        const Pa = Da;
        var Ra = t(568),
            Ya = t.n(Ra);

        function Ma(n) {
            return Ma = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, Ma(n)
        }

        function Fa(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(n);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), t.push.apply(t, a)
            }
            return t
        }

        function Wa(n, e, t) {
            return (e = Na(e)) in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t, n
        }

        function Ua(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, Na(a.key), a)
            }
        }

        function Na(n) {
            var e = function (n, e) {
                if ("object" !== Ma(n) || null === n) return n;
                var t = n[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var a = t.call(n, "string");
                    if ("object" !== Ma(a)) return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(n)
            }(n);
            return "symbol" === Ma(e) ? e : String(e)
        }
        var Qa = 0,
            Ha = [],
            _a = function () {
                function n(e) {
                    var t = this;
                    (function (n, e) {
                        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, n), this.options = function (n) {
                        var e = {
                            container: n.element || document.getElementsByClassName("dplayer")[0],
                            live: !1,
                            autoplay: !1,
                            theme: "#b7daff",
                            loop: !1,
                            lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
                            screenshot: !1,
                            airplay: !0,
                            chromecast: !1,
                            hotkey: !0,
                            preload: "metadata",
                            volume: .7,
                            playbackSpeed: [.5, .75, 1, 1.25, 1.5, 2],
                            apiBackend: qe,
                            video: {},
                            contextmenu: [],
                            mutex: !0,
                            pluginOptions: {
                                hls: {},
                                flv: {},
                                dash: {},
                                webtorrent: {}
                            },
                            preventClickToggle: !1
                        };
                        for (var t in e) e.hasOwnProperty(t) && !n.hasOwnProperty(t) && (n[t] = e[t]);
                        return n.video && !n.video.type && (n.video.type = "auto"), "object" === Oe(n.danmaku) && n.danmaku && !n.danmaku.user && (n.danmaku.user = "DIYgod"), n.subtitle && (!n.subtitle.type && (n.subtitle.type = "webvtt"), !n.subtitle.fontSize && (n.subtitle.fontSize = "20px"), !n.subtitle.bottom && (n.subtitle.bottom = "40px"), !n.subtitle.color && (n.subtitle.color = "#fff")), n.video.quality && (n.video.url = n.video.quality[n.video.defaultQuality].url), n.lang && (n.lang = n.lang.toLowerCase()), n.contextmenu = n.contextmenu.concat([{
                            key: "video-info",
                            click: function (n) {
                                n.infoPanel.triggle()
                            }
                        }, {
                            text: "𝐌𝐔𝐒𝐄𝐒𝐓𝐀𝐑✶缪斯星",
                            link: "https://musestar.cc/"
                        }]), n
                        }(function (n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? Fa(Object(t), !0).forEach((function (e) {
                                Wa(n, e, t[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Fa(Object(t)).forEach((function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                            }))
                        }
                        return n
                    }({
                        preload: "webtorrent" === e.video.type ? "none" : "metadata"
                    }, e)), this.options.video.quality && (this.qualityIndex = this.options.video.defaultQuality, this.quality = this.options.video.quality[this.options.video.defaultQuality]), this.tran = new je(this.options.lang).tran, this.events = new qt, this.user = new Ft(this), this.container = this.options.container, this.noticeList = {}, this.container.classList.add("dplayer"), this.options.danmaku || this.container.classList.add("dplayer-no-danmaku"), this.options.live ? this.container.classList.add("dplayer-live") : this.container.classList.remove("dplayer-live"), T.isMobile && this.container.classList.add("dplayer-mobile"), this.arrow = this.container.offsetWidth <= 500, this.arrow && this.container.classList.add("dplayer-arrow"), this.options.subtitle && Array.isArray(this.options.subtitle.url) && (this.options.subtitle.url.push({
                        subtitle: "",
                        lang: "off"
                    }), this.options.subtitle.defaultSubtitle && ("string" == typeof this.options.subtitle.defaultSubtitle ? this.options.subtitle.index = this.options.subtitle.url.findIndex((function (n) {
                        return n.lang === t.options.subtitle.defaultSubtitle || n.name === t.options.subtitle.defaultSubtitle
                    })) : "number" == typeof this.options.subtitle.defaultSubtitle && (this.options.subtitle.index = this.options.subtitle.defaultSubtitle)), (-1 === this.options.subtitle.index || !this.options.subtitle.index || this.options.subtitle.index > this.options.subtitle.url.length - 1) && (this.options.subtitle.index = this.options.subtitle.url.findIndex((function (n) {
                        return n.lang === t.options.lang
                    }))), -1 === this.options.subtitle.index && (this.options.subtitle.index = this.options.subtitle.url.length - 1)), this.template = new kt({
                        container: this.container,
                        options: this.options,
                        index: Qa,
                        tran: this.tran
                    }), this.video = this.template.video, this.bar = new Gt(this.template), this.bezel = new ra(this.template.bezel), this.fullScreen = new Pt(this), this.controller = new ha(this), this.options.danmaku && (this.danmaku = new Lt({
                        player: this,
                        container: this.template.danmaku,
                        opacity: this.user.get("opacity"),
                        callback: function () {
                            setTimeout((function () {
                                t.template.danmakuLoading.style.display = "none", t.options.autoplay && t.play()
                            }), 0)
                        },
                        error: function (n) {
                            t.notice(n)
                        },
                        apiBackend: this.options.apiBackend,
                        borderColor: this.options.theme,
                        height: this.arrow ? 24 : 30,
                        time: function () {
                            return t.video.currentTime
                        },
                        unlimited: this.user.get("unlimited"),
                        api: {
                            id: this.options.danmaku.id,
                            address: this.options.danmaku.api,
                            token: this.options.danmaku.token,
                            maximum: this.options.danmaku.maximum,
                            addition: this.options.danmaku.addition,
                            user: this.options.danmaku.user,
                            speedRate: this.options.danmaku.speedRate
                        },
                        events: this.events,
                        tran: function (n) {
                            return t.tran(n)
                        }
                    }), this.comment = new Ca(this)), this.setting = new va(this), this.plugins = {}, this.docClickFun = function () {
                        t.focus = !1
                    }, this.containerClickFun = function () {
                        t.focus = !0
                    }, document.addEventListener("click", this.docClickFun, !0), this.container.addEventListener("click", this.containerClickFun, !0), this.paused = !0, this.timer = new ta(this), this.hotkey = new Ia(this), this.contextmenu = new qa(this), this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type), this.infoPanel = new Pa(this), !this.danmaku && this.options.autoplay && this.play(), Qa++, Ha.push(this)
                }
                var e, t, a;
                return e = n, t = [{
                    key: "seek",
                    value: function (n) {
                        n = Math.max(n, 0), this.video.duration && (n = Math.min(n, this.video.duration)), this.video.currentTime < n ? this.notice("".concat(this.tran("ff").replace("%s", (n - this.video.currentTime).toFixed(0)))) : this.video.currentTime > n && this.notice("".concat(this.tran("rew").replace("%s", (this.video.currentTime - n).toFixed(0)))), this.video.currentTime = n, this.danmaku && this.danmaku.seek(), this.bar.set("played", n / this.video.duration, "width"), this.template.ptime.innerHTML = T.secondToTime(n)
                    }
                }, {
                    key: "play",
                    value: function (n) {
                        var e = this;
                        if (this.paused = !1, this.video.paused && !T.isMobile && this.bezel.switch(gt.play), this.template.playButton.innerHTML = gt.pause, this.template.mobilePlayButton.innerHTML = gt.pause, n || L.resolve(this.video.play()).catch((function () {
                                e.pause()
                            })).then((function () {})), this.timer.enable("loading"), this.container.classList.remove("dplayer-paused"), this.container.classList.add("dplayer-playing"), this.danmaku && this.danmaku.play(), this.options.mutex)
                            for (var t = 0; t < Ha.length; t++) this !== Ha[t] && Ha[t].pause()
                    }
                }, {
                    key: "pause",
                    value: function (n) {
                        this.paused = !0, this.container.classList.remove("dplayer-loading"), this.video.paused || T.isMobile || this.bezel.switch(gt.pause), this.template.playButton.innerHTML = gt.play, this.template.mobilePlayButton.innerHTML = gt.play, n || this.video.pause(), this.timer.disable("loading"), this.container.classList.remove("dplayer-playing"), this.container.classList.add("dplayer-paused"), this.danmaku && this.danmaku.pause()
                    }
                }, {
                    key: "switchVolumeIcon",
                    value: function () {
                        this.volume() >= .95 ? this.template.volumeIcon.innerHTML = gt.volumeUp : this.volume() > 0 ? this.template.volumeIcon.innerHTML = gt.volumeDown : this.template.volumeIcon.innerHTML = gt.volumeOff
                    }
                }, {
                    key: "volume",
                    value: function (n, e, t) {
                        if (n = parseFloat(n), !isNaN(n)) {
                            n = Math.max(n, 0), n = Math.min(n, 1), this.bar.set("volume", n, "width");
                            var a = "".concat((100 * n).toFixed(0), "%");
                            this.template.volumeBarWrapWrap.dataset.balloon = a, e || this.user.set("volume", n), t || this.notice("".concat(this.tran("volume"), " ").concat((100 * n).toFixed(0), "%"), void 0, void 0, "volume"), this.video.volume = n, this.video.muted && (this.video.muted = !1), this.switchVolumeIcon()
                        }
                        return this.video.volume
                    }
                }, {
                    key: "toggle",
                    value: function () {
                        this.video.paused ? this.play() : this.pause()
                    }
                }, {
                    key: "on",
                    value: function (n, e) {
                        this.events.on(n, e)
                    }
                }, {
                    key: "switchVideo",
                    value: function (n, e) {
                        this.pause(), this.video.poster = n.pic ? n.pic : "", this.video.src = n.url, this.initMSE(this.video, n.type || "auto"), e && (this.template.danmakuLoading.style.display = "block", this.bar.set("played", 0, "width"), this.bar.set("loaded", 0, "width"), this.template.ptime.innerHTML = "00:00", this.template.danmaku.innerHTML = "", this.danmaku && this.danmaku.reload({
                            id: e.id,
                            address: e.api,
                            token: e.token,
                            maximum: e.maximum,
                            addition: e.addition,
                            user: e.user
                        }))
                    }
                }, {
                    key: "initMSE",
                    value: function (n, e) {
                        var t = this;
                        if (this.type = e, this.options.video.customType && this.options.video.customType[e]) "[object Function]" === Object.prototype.toString.call(this.options.video.customType[e]) ? this.options.video.customType[e](this.video, this) : console.error("Illegal customType: ".concat(e));
                        else switch ("auto" === this.type && (/m3u8(#|\?|$)/i.exec(n.src) ? this.type = "hls" : /.flv(#|\?|$)/i.exec(n.src) ? this.type = "flv" : /.mpd(#|\?|$)/i.exec(n.src) ? this.type = "dash" : this.type = "normal"), "hls" === this.type && (n.canPlayType("application/x-mpegURL") || n.canPlayType("application/vnd.apple.mpegURL")) && (this.type = "normal"), this.type) {
                            case "hls":
                                if (window.Hls)
                                    if (window.Hls.isSupported()) {
                                        var a = this.options.pluginOptions.hls,
                                            o = new window.Hls(a);
                                        this.plugins.hls = o, o.loadSource(n.src), o.attachMedia(n), this.events.on("destroy", (function () {
                                            o.destroy(), delete t.plugins.hls
                                        }))
                                    } else this.notice("Error: Hls is not supported.");
                                else this.notice("Error: Can't find Hls.");
                                break;
                            case "flv":
                                if (window.flvjs)
                                    if (window.flvjs.isSupported()) {
                                        var r = window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource || {}, {
                                            type: "flv",
                                            url: n.src
                                        }), this.options.pluginOptions.flv.config);
                                        this.plugins.flvjs = r, r.attachMediaElement(n), r.load(), this.events.on("destroy", (function () {
                                            r.unload(), r.detachMediaElement(), r.destroy(), delete t.plugins.flvjs
                                        }))
                                    } else this.notice("Error: flvjs is not supported.");
                                else this.notice("Error: Can't find flvjs.");
                                break;
                            case "dash":
                                if (window.dashjs) {
                                    var i = window.dashjs.MediaPlayer().create().initialize(n, n.src, !1),
                                        l = this.options.pluginOptions.dash;
                                    i.updateSettings(l), this.plugins.dash = i, this.events.on("destroy", (function () {
                                        window.dashjs.MediaPlayer().reset(), delete t.plugins.dash
                                    }))
                                } else this.notice("Error: Can't find dashjs.");
                                break;
                            case "webtorrent":
                                if (window.WebTorrent)
                                    if (window.WebTorrent.WEBRTC_SUPPORT) {
                                        this.container.classList.add("dplayer-loading");
                                        var s = this.options.pluginOptions.webtorrent,
                                            p = new window.WebTorrent(s);
                                        this.plugins.webtorrent = p;
                                        var d = n.src;
                                        n.src = "", n.preload = "metadata", n.addEventListener("durationchange", (function () {
                                            return t.container.classList.remove("dplayer-loading")
                                        }), {
                                            once: !0
                                        }), p.add(d, (function (n) {
                                            n.files.find((function (n) {
                                                return n.name.endsWith(".mp4")
                                            })).renderTo(t.video, {
                                                autoplay: t.options.autoplay,
                                                controls: !1
                                            })
                                        })), this.events.on("destroy", (function () {
                                            p.remove(d), p.destroy(), delete t.plugins.webtorrent
                                        }))
                                    } else this.notice("Error: Webtorrent is not supported.");
                                else this.notice("Error: Can't find Webtorrent.")
                        }
                    }
                }, {
                    key: "initVideo",
                    value: function (n, e) {
                        var t = this;
                        this.initMSE(n, e), this.on("durationchange", (function () {
                            1 !== n.duration && n.duration !== 1 / 0 && (t.template.dtime.innerHTML = T.secondToTime(n.duration))
                        })), this.on("progress", (function () {
                            var e = n.buffered.length ? n.buffered.end(n.buffered.length - 1) / n.duration : 0;
                            t.bar.set("loaded", e, "width")
                        })), this.on("error", (function () {
                            t.video.error && t.tran && t.notice && "webtorrent" !== t.type && t.notice(t.tran("video-failed"))
                        })), this.on("ended", (function () {
                            t.bar.set("played", 1, "width"), t.setting.loop ? (t.seek(0), t.play()) : t.pause(), t.danmaku && (t.danmaku.danIndex = 0)
                        })), this.on("play", (function () {
                            t.paused && t.play(!0)
                        })), this.on("pause", (function () {
                            t.paused || t.pause(!0)
                        })), this.on("timeupdate", (function () {
                            t.bar.set("played", t.video.currentTime / t.video.duration, "width");
                            var n = T.secondToTime(t.video.currentTime);
                            t.template.ptime.innerHTML !== n && (t.template.ptime.innerHTML = n)
                        }));
                        for (var a = function (e) {
                                n.addEventListener(t.events.videoEvents[e], (function (n) {
                                    t.events.trigger(t.events.videoEvents[e], n)
                                }))
                            }, o = 0; o < this.events.videoEvents.length; o++) a(o);
                        this.volume(this.user.get("volume"), !0, !0), this.options.subtitle && (this.subtitle = new Qt(this.template.subtitle, this.video, this.options.subtitle, this.events), Array.isArray(this.options.subtitle.url) && (this.subtitles = new Zt(this)), this.user.get("subtitle") || this.subtitle.hide())
                    }
                }, {
                    key: "switchQuality",
                    value: function (n) {
                        var e = this;
                        if (n = "string" == typeof n ? parseInt(n) : n, this.qualityIndex !== n && !this.switchingQuality) {
                            this.prevIndex = this.qualityIndex, this.qualityIndex = n, this.switchingQuality = !0, this.quality = this.options.video.quality[n], this.template.qualityButton.innerHTML = this.quality.name;
                            var t = this.video.paused;
                            this.video.pause();
                            var a = Ya()({
                                    current: !1,
                                    pic: null,
                                    screenshot: this.options.screenshot,
                                    preload: "auto",
                                    url: this.quality.url,
                                    subtitle: this.options.subtitle
                                }),
                                o = (new DOMParser).parseFromString(a, "text/html").body.firstChild;
                            this.template.videoWrap.insertBefore(o, this.template.videoWrap.getElementsByTagName("div")[0]), this.prevVideo = this.video, this.video = o, this.initVideo(this.video, this.quality.type || this.options.video.type), this.seek(this.prevVideo.currentTime), this.notice("".concat(this.tran("switching-quality").replace("%q", this.quality.name)), -1, void 0, "switch-quality"), this.events.trigger("quality_start", this.quality), this.on("canplay", (function () {
                                if (e.prevVideo) {
                                    if (e.video.currentTime !== e.prevVideo.currentTime) return void e.seek(e.prevVideo.currentTime);
                                    e.template.videoWrap.removeChild(e.prevVideo), e.video.classList.add("dplayer-video-current"), t || e.video.play(), e.prevVideo = null, e.notice("".concat(e.tran("switched-quality").replace("%q", e.quality.name)), void 0, void 0, "switch-quality"), e.switchingQuality = !1, e.events.trigger("quality_end")
                                }
                            })), this.on("error", (function () {
                                e.video.error && e.prevVideo && (e.template.videoWrap.removeChild(e.video), e.video = e.prevVideo, t || e.video.play(), e.qualityIndex = e.prevIndex, e.quality = e.options.video.quality[e.qualityIndex], e.noticeTime = setTimeout((function () {
                                    e.template.notice.style.opacity = 0, e.events.trigger("notice_hide")
                                }), 3e3), e.prevVideo = null, e.switchingQuality = !1)
                            }))
                        }
                    }
                }, {
                    key: "notice",
                    value: function (n) {
                        var e, t, a, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8,
                            i = arguments.length > 3 ? arguments[3] : void 0;
                        if (i && ((e = document.getElementById("dplayer-notice-".concat(i))) && (e.innerHTML = n), this.noticeList[i] && (clearTimeout(this.noticeList[i]), this.noticeList[i] = null)), !e) {
                            var l = kt.NewNotice(n, r, i);
                            this.template.noticeList.appendChild(l), e = l
                        }
                        this.events.trigger("notice_show", e), o > 0 && (this.noticeList[i] = setTimeout((t = e, a = this, function () {
                            t.addEventListener("animationend", (function () {
                                a.template.noticeList.removeChild(t)
                            })), t.classList.add("remove-notice"), a.events.trigger("notice_hide"), a.noticeList[i] = null
                        }), o))
                    }
                }, {
                    key: "resize",
                    value: function () {
                        this.danmaku && this.danmaku.resize(), this.controller.thumbnails && this.controller.thumbnails.resize(160, this.video.videoHeight / this.video.videoWidth * 160, this.template.barWrap.offsetWidth), this.events.trigger("resize")
                    }
                }, {
                    key: "speed",
                    value: function (n) {
                        this.video.playbackRate = n
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        Ha.splice(Ha.indexOf(this), 1), this.pause(), document.removeEventListener("click", this.docClickFun, !0), this.container.removeEventListener("click", this.containerClickFun, !0), this.fullScreen.destroy(), this.hotkey.destroy(), this.contextmenu.destroy(), this.controller.destroy(), this.timer.destroy(), this.video.src = "", this.container.innerHTML = "", this.events.trigger("destroy")
                    }
                }], a = [{
                    key: "version",
                    get: function () {
                        return "1.27.1"
                    }
                }], t && Ua(e.prototype, t), a && Ua(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), n
            }();
        const Ka = _a;
        console.log("\n".concat(" %c DPlayer v", "1.27.1", " ").concat("v1.27.0-12-g4f61091", " %c https://dplayer.diygod.dev ", "\n", "\n"), "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
        const Za = Ka
    })(), a.default
})()));
//# sourceMappingURL=DPlayer.min.js.map