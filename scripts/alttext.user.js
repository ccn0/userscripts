// ==UserScript==
// @name         Alt Text
// @namespace    ccn0
// @version      1
// @description  Alt + Right Click on any image to see its alt text
// @author       CCN0
// @license      MIT
// @match        *://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAVRJREFUSIm1VtuRgzAMXGVSAgVcI7TjoijnUsT9poD0oHxwZmS9LDJkZzQBxfayeiAIACMAP8d7+vH/13570ALQCwBwz9b1gzTxFLyEvrt34PSJ1Z5BqUem90rj524zX+jnxayTPlfhN3GT4aiEcgp62bD+FwwA3C6gOHBEShCY58Gei1OQkZB7D3+iENAJ7ta45vMKxDNZNCFa8E5oDGwU7+uKesMLxZfmsIp6SCsm+9AJ6fUKL22LKKceaf9VFfpZ0WQQk8Hz5YTRmet4T4+EVIWXkMxDg8bgP78dDtJoWkwVJuHUigbFWlk5h15jV3KqFSrijxTqHLoIcniuLTayBQKnaGQYT7VFAI80ItCwCrM8VfuSl9GEL1eoC6cxePWrdNoWcv1g8qXtXPMaGwofUbbxJ2GLGr+DfvNXm81hNlj7oY/Rum+/yKeFn8OI9Oy0cPAGvacWOVZTYp4AAAAASUVORK5CYII=
// @grant        none
// ==/UserScript==

(function() {
    document.addEventListener("contextmenu", function (e) {
        if (e.altKey && e.target.tagName === "IMG") {
            e.preventDefault();
            alert(e.target.alt || "No alt text provided");
        };
    });
})();
