﻿
// @source resources/Browser.js

(function () {
    var check = function (regex) {
        return regex.test(navigator.userAgent);
    },

    isStrict = document.compatMode == 'CSS1Compat',

    version = function (is, regex) {
        var m;

        return (is && (m = regex.exec(navigator.userAgent))) ? parseFloat(m[1]) : 0;
    },

    docMode = document.documentMode,
    isOpera = check(/opera/),
    isOpera10_5 = isOpera && check(/version\/10\.5/),
    isChrome = check(/\bchrome\b/),
    isWebKit = check(/webkit/),
    isSafari = !isChrome && check(/safari/),
    isSafari2 = isSafari && check(/applewebkit\/4/),
    isSafari3 = isSafari && check(/version\/3/),
    isSafari4 = isSafari && check(/version\/4/),
    isSafari5_0 = isSafari && check(/version\/5\.0/),
    isSafari5 = isSafari && check(/version\/5/),
    isIE = !isOpera && (check(/msie/) || check(/trident/)),
    isIE7 = isIE && ((check(/msie 7/) && docMode != 8 && docMode != 9 && docMode != 10) || docMode == 7),
    isIE8 = isIE && ((check(/msie 8/) && docMode != 7 && docMode != 9 && docMode != 10) || docMode == 8),
    isIE9 = isIE && ((check(/msie 9/) && docMode != 7 && docMode != 8 && docMode != 10) || docMode == 9),
    isIE10 = isIE && ((check(/msie 10/) && docMode != 7 && docMode != 8 && docMode != 9) || docMode == 10),
    isIE11 = isIE && ((check(/trident\/7\.0/) && docMode != 7 && docMode != 8 && docMode != 9 && docMode != 10) || docMode == 11),
    isIE6 = isIE && check(/msie 6/),
    isGecko = !isWebKit && !isIE && check(/gecko/),
    isGecko3 = isGecko && check(/rv:1\.9/),
    isGecko4 = isGecko && check(/rv:2\.0/),
    isGecko5 = isGecko && check(/rv:5\./),
    isGecko10 = isGecko && check(/rv:10\./),
    isFF3_0 = isGecko3 && check(/rv:1\.9\.0/),
    isFF3_5 = isGecko3 && check(/rv:1\.9\.1/),
    isFF3_6 = isGecko3 && check(/rv:1\.9\.2/),
    isWindows = check(/windows|win32/),
    isMac = check(/macintosh|mac os x/),
    isLinux = check(/linux/),
    scrollbarSize = null,
    chromeVersion = version(true, /\bchrome\/(\d+\.\d+)/),
    firefoxVersion = version(true, /\bfirefox\/(\d+\.\d+)/),
    ieVersion = version(isIE, /msie (\d+\.\d+)/),
    operaVersion = version(isOpera, /version\/(\d+\.\d+)/),
    safariVersion = version(isSafari, /version\/(\d+\.\d+)/),
    webKitVersion = version(isWebKit, /webkit\/(\d+\.\d+)/),
    isSecure = /^https/i.test(window.location.protocol),
    isiPhone = /iPhone/i.test(navigator.platform),
    isiPod = /iPod/i.test(navigator.platform),
    isiPad = /iPad/i.test(navigator.userAgent),
    isBlackberry = /Blackberry/i.test(navigator.userAgent),
    isAndroid = /Android/i.test(navigator.userAgent),
    isDesktop = isMac || isWindows || (isLinux && !isAndroid),
    isTablet = isiPad,
    isPhone = !isDesktop && !isTablet;

    Bridge.Browser = {
        isStrict: isStrict,
        isIEQuirks: isIE && (!isStrict && (isIE6 || isIE7 || isIE8 || isIE9)),
        isOpera: isOpera,
        isOpera10_5: isOpera10_5,
        isWebKit: isWebKit,
        isChrome: isChrome,
        isSafari: isSafari,
        isSafari3: isSafari3,
        isSafari4: isSafari4,
        isSafari5: isSafari5,
        isSafari5_0: isSafari5_0,
        isSafari2: isSafari2,
        isIE: isIE,
        isIE6: isIE6,
        isIE7: isIE7,
        isIE7m: isIE6 || isIE7,
        isIE7p: isIE && !isIE6,
        isIE8: isIE8,
        isIE8m: isIE6 || isIE7 || isIE8,
        isIE8p: isIE && !(isIE6 || isIE7),
        isIE9: isIE9,
        isIE9m: isIE6 || isIE7 || isIE8 || isIE9,
        isIE9p: isIE && !(isIE6 || isIE7 || isIE8),
        isIE10: isIE10,
        isIE10m: isIE6 || isIE7 || isIE8 || isIE9 || isIE10,
        isIE10p: isIE && !(isIE6 || isIE7 || isIE8 || isIE9),
        isIE11: isIE11,
        isIE11m: isIE6 || isIE7 || isIE8 || isIE9 || isIE10 || isIE11,
        isIE11p: isIE && !(isIE6 || isIE7 || isIE8 || isIE9 || isIE10),
        isGecko: isGecko,
        isGecko3: isGecko3,
        isGecko4: isGecko4,
        isGecko5: isGecko5,
        isGecko10: isGecko10,
        isFF3_0: isFF3_0,
        isFF3_5: isFF3_5,
        isFF3_6: isFF3_6,
        isFF4: 4 <= firefoxVersion && firefoxVersion < 5,
        isFF5: 5 <= firefoxVersion && firefoxVersion < 6,
        isFF10: 10 <= firefoxVersion && firefoxVersion < 11,
        isLinux: isLinux,
        isWindows: isWindows,
        isMac: isMac,
        chromeVersion: chromeVersion,
        firefoxVersion: firefoxVersion,
        ieVersion: ieVersion,
        operaVersion: operaVersion,
        safariVersion: safariVersion,
        webKitVersion: webKitVersion,
        isSecure: isSecure,
        isiPhone: isiPhone,
        isiPod: isiPod,
        isiPad: isiPad,
        isBlackberry: isBlackberry,
        isAndroid: isAndroid,
        isDesktop: isDesktop,
        isTablet: isTablet,
        isPhone: isPhone,
        iOS: isiPhone || isiPad || isiPod,
        standalone: !!window.navigator.standalone
    };
})();