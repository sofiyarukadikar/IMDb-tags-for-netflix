// ==UserScript==
// @name         Netflix IMDb Ratings Auto
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Show IMDb ratings automatically on Netflix
// @match        https://www.netflix.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const API_KEY = 'YOUR_API_KEY';

    async function addIMDbRating(titleElement, appendBelow) {
        const title = titleElement.textContent;
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            if (!data.imdbRating || data.imdbRating === "N/A") return;


            const rating = document.createElement('div');
            rating.className = 'imdb-rating';
            rating.textContent = `⭐ IMDb: ${data.imdbRating}`;
            rating.style.cssText = `
                color: gold;
                height: 40px;
                margin: 20px;
                padding: 10px;
                border: 1px solid white;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            appendBelow.appendChild(rating);

        } catch (err) {
            if (err.name === 'AbortError') {
                console.warn('Fetch aborted');
            } else {
                console.error(err);
            }
        }
    }

    const obs = new MutationObserver(() => {
        const titleEle = document.querySelector(".about-header strong");
        const appendBelow = document.querySelector(".previewModal--detailsMetadata-left");

        if (titleEle && appendBelow) {
            addIMDbRating(titleEle, appendBelow);
        }
    });

    obs.observe(document.body, { childList: true, subtree: true });
})();
