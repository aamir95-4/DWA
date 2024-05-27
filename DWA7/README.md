Applying SOLID principles:

1. DOM - HTML object to help make the references to the document html much easier to read.

   const html = {
   header: {
   search: document.querySelector("[data-header-search]"),
   settings: document.querySelector("[data-header-settings]"),
   },

list: {
items: document.querySelector("[data-list-items]"),
message: document.querySelector("[data-list-message]"),
button: document.querySelector("[data-list-button]"),
overlay: document.querySelector("[data-list-active]"),
blur: document.querySelector("[data-list-blur]"),
image: document.querySelector("[data-list-image]"),
title: document.querySelector("[data-list-title]"),
subtitle: document.querySelector("[data-list-subtitle]"),
description: document.querySelector("[data-list-description]"),
close: document.querySelector("[data-list-close]"),
},

search: {
overlay: document.querySelector("[data-search-overlay]"),
form: document.querySelector("[data-search-form]"),
title: document.querySelector("[data-search-title]"),
genre: document.querySelector("[data-search-genres]"),
author: document.querySelector("[data-search-authors]"),
cancel: document.querySelector("[data-search-cancel]"),
},

settings: {
overlay: document.querySelector("[data-settings-overlay]"),
form: document.querySelector("[data-settings-form]"),
cancel: document.querySelector("[data-settings-cancel]"),
theme: document.querySelector("[data-settings-theme]"),
},
};

2. setTheme variable - This const follows the S in the SOLID principle, it does one thing but can be used in multiple places in the code.

   const setTheme = (theme) => {
   if (theme === "night") {
   document.documentElement.style.setProperty("--color-dark", "255, 255, 255");
   document.documentElement.style.setProperty("--color-light", "10, 10, 20");
   } else {
   document.documentElement.style.setProperty("--color-dark", "10, 10, 20");
   document.documentElement.style.setProperty(
   "--color-light",
   "255, 255, 255"
   );
   }
   };

3. Function to create the preview of books loaded on the page was used in multiple loactions in the scripts.js file, removing it and allowing the full code to only appear once with the function used in the scripts.js file makes the code more readable.

export const loadPreview = (fragment) => {
for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
const element = document.createElement("button");
element.classList = "preview";
element.setAttribute("data-preview", id);

    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />

        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

    fragment.appendChild(element);

}
};
