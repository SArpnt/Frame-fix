// ==UserScript==
// @name         Frame fix
// @description  frames link to monitor better
// @author       SArpnt (+ p1)
// @version      1.0.0
// @namespace    https://boxcrittersmods.ga/authors/sarpnt/
// @homepage     https://boxcrittersmods.ga/mods/frame-fix/
// @updateURL    https://github.com/SArpnt/Frame-fix/raw/master/Frame%20fix.user.js
// @downloadURL  https://github.com/SArpnt/Frame-fix/raw/master/Frame%20fix.user.js
// @supportURL   https://github.com/SArpnt/Frame-fix/issues
// @run-at       document-idle
// @grant        none
// @match        https://boxcritters.com/play/
// @match        https://boxcritters.com/play/?*
// @match        https://boxcritters.com/play/#*
// @match        https://boxcritters.com/play/index.html
// @match        https://boxcritters.com/play/index.html?*
// @match        https://boxcritters.com/play/index.html#*
// ==/UserScript==
createjs.Ticker.timingMode = createjs.Ticker.RAF;