// ==UserScript==
// @name         Max Max
// @namespace    ccn0
// @version      4
// @description  Quality of life changes to Max.com
// @author       CCN0
// @license      MIT
// @match        *://*.max.com/*
// @icon         https://external-content.duckduckgo.com/ip3/www.max.com.ico
// @grant        none
// ==/UserScript==

(function() {
    function maxMaxMax() {
        var skipbutton = document.querySelector('[data-testid="player-ux-skip-button"]');
        if (skipbutton) {skipbutton.click()};

        function removeElements(selector) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.remove();
            });
        }

        const playertextelems = document.querySelectorAll('[class^="Title-Beam-Web-Ent"],[class^="SeasonEpisode-Beam-Web-Ent"],[class^="Subtitle-Beam-Web-Ent"],[data-testid^="player-ux-scrubber-timestamp"],[data-testid^="player-ux-scrubber-position"]');
        playertextelems.forEach(element => {
            element.style.opacity = "0.5";
        });
        const backtrackbehindthewhitepart = document.querySelectorAll('[data-testid^="player-ux-scrubber-track"]');
        backtrackbehindthewhitepart.forEach(element => {
            element.style.opacity = "0.2";
        });

        const controlsmarginelem = document.querySelectorAll('[class^="ControlsFooterBottom-Beam-Web-Ent"]');
        controlsmarginelem.forEach(element => {
            element.style.marginBottom = "-20px";
            element.style.marginTop = "-10px";
        });

        if (location.href.includes('/video/watch')) {
            const svgbuttons = document.querySelectorAll('svg');
            svgbuttons.forEach(element => {
                element.style.opacity = "0.5";
        });}

        const playergradients = document.querySelectorAll('[class^="TopGradient-Beam-Web-Ent"],[class^="BottomGradient-Beam-Web-Ent"],[class^="RatingsAdvisoriesContainer-Beam-Web-Ent"]');
        playergradients.forEach(element => {
            element.style.opacity = "0";
        });

        const episodedetailselem = document.querySelectorAll('[class^="SeasonEpisodeSubtitleContainer-Beam-Web-Ent"]');
        episodedetailselem.forEach(element => {
            element.style.height = "10px";
        });

        removeElements('[class^="ControlsFooterBottomLeft-Beam-Web-Ent"]');
    };

    setInterval(maxMaxMax,500);
})();
