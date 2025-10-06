# Netflix IMDb Ratings Userscript

Automatically displays IMDb ratings on Netflix movie/TV show modals using the OMDb API.

---

## Features

- Shows IMDb rating for any movie or TV show modal on Netflix.
- Automatically updates when you open a new title.
- Avoids duplicate ratings.
- Handles dynamic Netflix modals and fetch aborts safely.
- Lightweight and easy to install via Tampermonkey.

---

## Installation

1. **Install Tampermonkey** on your browser:  
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

2. Click the **Tampermonkey icon → “Create a new script”**.

3. Copy your full userscript code (with the `MutationObserver`) into the editor.

4. Save the script (`Ctrl+S` or **File → Save**).

5. Visit **Netflix** and open any movie or TV show modal — the IMDb rating should appear automatically.

---

## Usage

1. Open Netflix and browse normally.

2. Click on a movie or show to open its modal.

3. The IMDb rating will appear in a styled box under the metadata section automatically.

---

## Notes

- Make sure you have an **OMDb API key** if your script requires one.
- Works best with modern browsers and the latest Netflix layout.
- The script is designed to **avoid duplicate inserts** and handle Netflix's dynamic content loading.

---

## License

This project is **free to use** and modify. No warranties provided.

