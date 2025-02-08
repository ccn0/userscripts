// ==UserScript==
// @name         YouTube Helper
// @namespace    ccn0
// @version      7
// @description  Quality of life changes to YouTube
// @author       CCN0
// @license      MIT
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com&sz=64
// @grant        none
// ==/UserScript==

(function() {
    function youTubeHelper() {
        /* make player have sharp corners */
        if (document.querySelector('ytd-player')) {
            document.querySelector('ytd-player').style.borderRadius = "0";
        };
        /* make notifications badge white */
        if (document.querySelector('.yt-spec-icon-badge-shape__badge')) {
            document.querySelector('.yt-spec-icon-badge-shape__badge').style.color = "#fff";
        };
        /* hides notification amount in tab title */
        document.title = document.title.replace(/^\([0-9]*\)\s/, "");

        function removeElements(selector) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.remove();
            });
        };

        removeElements('button[aria-label="Search with your voice"]');
        removeElements('button[aria-label="Thanks"]');
        removeElements('button[aria-label="Join this channel"]');
        removeElements('ytd-video-description-infocards-section-renderer');
        removeElements('a.yt-simple-endpoint.style-scope.yt-formatted-string.bold');
        removeElements('a.yt-simple-endpoint.bold.style-scope.yt-formatted-string');
        removeElements('.ytd-watch-info-text>a');
        removeElements('button:has([aria-label="Channel watermark"])');
        removeElements('ytd-rich-section-renderer');
        removeElements('ytd-reel-shelf-renderer');

        /* makes links not go through youtube */
        document.querySelectorAll('a[href*="://www.youtube.com/redirect?"]').forEach(link => {
            if (link.getAttribute('href')) {
                const urlParams = new URLSearchParams(link.getAttribute('href'));
                const qParam = decodeURIComponent(urlParams.get('q'));

                if (qParam) {
                    link.setAttribute('href', qParam);
                }
            }
        });

        const shareUrlInput = document.getElementById('share-url');
        if (shareUrlInput) {
            let currentUrl = shareUrlInput.value;
            currentUrl = currentUrl.replace(/(\?|\&)si=[^&]*/g, '');
            shareUrlInput.value = currentUrl;
        };

        if (window.location.href.includes('shorts/')) {
            let noshortsurl = window.location.href.replace('shorts/', 'watch?v=');
            window.location.href = noshortsurl;
        };
    };
    setInterval(youTubeHelper, 500);
})();