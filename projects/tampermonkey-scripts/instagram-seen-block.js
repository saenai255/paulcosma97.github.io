// ==UserScript==
// @name         Block Seen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Blocks Instagram message seen
// @author       Paul Cosma
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

XMLHttpRequest.prototype.__open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(...args) {
    const [_, url] = args;

    if (url !== null) {
        const bla = decodeURIComponent(url);
        const urlMatches = url.match(/\/direct_v2\/web\/threads\/[0-9]*\/items\/[0-9]*\/seen/gi);
        if (Array.isArray(urlMatches) && urlMatches.length === 1) {
            console.error(`Seen request ${url} blocked.`);

            return false;
        }
    }

    return this.__open(...args);

}

document.addEventListener('DOMContentLoaded', function(){
    const popup = document.createElement('h1');
    popup.style.cssText = `
        position: fixed;
        z-index: 99999;
        top: min(75px, 10vh);
        left: 10px;
        background: lightgreen;
        padding: 10px 30px 10px 30px;
        font-weight: bold;
        opacity: 75%;
    `;

    popup.textContent = 'SeenBlocker is ON';

    document.body.appendChild(popup);
});
