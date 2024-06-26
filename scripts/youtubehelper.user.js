// ==UserScript==
// @name         YouTube Helper
// @namespace    ccn0
// @version      5
// @description  mods to make youtube better to use
// @author       CCN0
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com&sz=64
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function youTubeHelper() {
        function removeElements(selector) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.remove();
            });
        }

        removeElements('button[aria-label="Search with your voice"]');
        removeElements('button[aria-label="Thanks"]');
        removeElements('button[aria-label="Join this channel"]');

        const links = document.querySelectorAll('a[href*="://www.youtube.com/redirect?"]');

        links.forEach(link => {
            const href = link.getAttribute('href');

            if (href) {
                const urlParams = new URLSearchParams(href);
                const qParam = urlParams.get('q');

                if (qParam) {
                    const decodedQParam = decodeURIComponent(qParam);

                    link.setAttribute('href', decodedQParam);
                }
            }
        });

        if (location.href.includes('account_playback')) {
            const videoPreviewsSwitch = document.querySelector('*[aria-label="Video previews"]');
            if (videoPreviewsSwitch.getAttribute('aria-pressed') == 'true') {
                videoPreviewsSwitch.click();
            }
        }

        const shareUrlInput = document.getElementById('share-url');
        if (shareUrlInput) {
            let currentUrl = shareUrlInput.value;
            currentUrl = currentUrl.replace(/(\?|\&)si=[^&]*/g, '');
            shareUrlInput.value = currentUrl;
        }

        if (window.location.href.includes('shorts/')) {
            let noshortsurl = window.location.href.replace(/shorts\//g, 'watch?v=');
            window.location.href = noshortsurl;
        };
    };
    setInterval(youTubeHelper, 750);
})();