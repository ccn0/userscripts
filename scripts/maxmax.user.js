// ==UserScript==
// @name         Max Max
// @namespace    ccn0
// @version      3
// @description  making max usable
// @author       CCN0
// @match        *://*.max.com/*
// @icon         https://www.max.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function maxMaxMax() {
        var skipbutton = document.querySelector('[data-testid="player-ux-skip-button"]');
        if (skipbutton) {skipbutton.click()};

        function removeElements(selector) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.remove();
            });
        }

        removeElements('[class^="RatingsAdvisoriesContainer-Beam-Web-Ent"]');
        removeElements('[class^="TopGradient-Beam-Web-Ent"]');
        removeElements('[class^="BottomGradient-Beam-Web-Ent"]');
    };

    setInterval(maxMaxMax,500);
})();
