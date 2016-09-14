// ==UserScript==
// @name         AutoTrimps
// @namespace    https://github.com/zininzinin/AutoTrimps
// @version      1.01
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru
// @include        *trimps.github.io*
// @include        *kongregate.com/games/GreenSatellite/trimps
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-script';
script.src = 'https://raw.githubusercontent.com/sherkas/AT2/master/AutoTrimps2.js';
document.head.appendChild(script);
