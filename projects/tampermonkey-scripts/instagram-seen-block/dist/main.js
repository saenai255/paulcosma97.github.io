"use strict";

// ==UserScript==
// @name         Block Seen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Blocks Instagram message seen
// @author       Paul Cosma
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==
window.activateSeenBlocker = function () {
  XMLHttpRequest.prototype.__open = XMLHttpRequest.prototype.open;

  XMLHttpRequest.prototype.open = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _ = args[0],
        url = args[1];

    if (url !== null) {
      var bla = decodeURIComponent(url);
      var urlMatches = url.match(/\/direct_v2\/web\/threads\/[0-9]*\/items\/[0-9]*\/seen/gi);

      if (Array.isArray(urlMatches) && urlMatches.length === 1) {
        console.error("Seen request ".concat(url, " blocked."));
        return false;
      }
    }

    return this.__open.apply(this, args);
  };

  document.addEventListener('DOMContentLoaded', function () {
    var popup = document.createElement('h1');
    popup.style.cssText = "\n        position: fixed;\n        z-index: 99999;\n        top: min(75px, 10vh);\n        left: 10px;\n        background: lightgreen;\n        padding: 10px 30px 10px 30px;\n        font-weight: bold;\n        opacity: 75%;\n    ";
    popup.textContent = 'SeenBlocker is ON';
    document.body.appendChild(popup);
  });
};