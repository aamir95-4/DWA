import { BOOKS_PER_PAGE, books, authors, genres } from "./data.js";

export let matches = books;
/**
 * DOM elements
 */

export const html = {
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

/**
 *  Function to set the theme. Used in setting the default theme and the functionality for the toggle button in settings
 * @param {string} theme
 */
export const setTheme = (theme) => {
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

/**
 * Function for loading preview of books
 *
 */

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
/**
 *
 * @param {*} buttonSelect
 * @param {*} overlaySelect
 * @param {true | false} eventType
 * @returns
 */
export const createEventListeners = (
  buttonSelect,
  overlaySelect,
  eventType
) => {
  return {
    buttonSelect: buttonSelect,
    overlaySelect: overlaySelect,
    eventType: eventType,
    addListener(eventType) {
      this.buttonSelect.addEventListener(eventType, () => {
        this.overlaySelect.open = this.eventType;
      });
    },
  };
};

// Search Overlay
export let searchOverlay = createEventListeners(
  html.search.cancel,
  html.search.overlay,
  false
);

// Settings Overlay
export let settingsOverlayClose = createEventListeners(
  html.settings.cancel,
  html.settings.overlay,
  false
);

export let settingsOverlayOpen = createEventListeners(
  html.header.settings,
  html.settings.overlay,
  true
);
