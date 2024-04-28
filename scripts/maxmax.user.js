// ==UserScript==
// @name         Max Max
// @namespace    ccn0
// @version      1
// @description  making max usable
// @author       CCN0
// @match        *://play.max.com/*
// @icon         https://www.max.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function maxMaxMax() {
        var skipbutton = document.querySelector('[data-testid="player-ux-skip-button"]');
        if (skipbutton) {skipbutton.click()};

        const advisories = document.querySelectorAll('[class^="RatingsAdvisoriesContainer-Beam-Web-Ent"]');
        if (advisories.length > 0) {
            advisories.forEach(element => {
                element.style.display = "none";
            });
        } else {};

        var topgradient = document.querySelectorAll('[class^="TopGradient-Beam-Web-Ent"]');
        if (topgradient.length > 0) {
            topgradient.forEach(element => {
                element.style.display = "none";
            });
        } else {};

        var bottomgradient = document.querySelectorAll('[class^="BottomGradient-Beam-Web-Ent"]');
        if (bottomgradient.length > 0) {
            bottomgradient.forEach(element => {
                element.style.display = "none";
            });
        } else {};
    };

    setInterval(maxMaxMax,500);
})();