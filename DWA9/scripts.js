import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js";
import {
  html,
  setTheme,
  loadPreview,
  matches,
  createEventListeners,
  searchOverlay,
  settingsOverlayClose,
  settingsOverlayOpen,
} from "./view.js";

let page = 1;
// let matches = books;

const starting = document.createDocumentFragment();
loadPreview(starting);

html.list.items.appendChild(starting);

const genreHtml = document.createDocumentFragment();
const firstGenreElement = document.createElement("option");
firstGenreElement.value = "any";
firstGenreElement.innerText = "All Genres";
genreHtml.appendChild(firstGenreElement);

for (const [id, name] of Object.entries(genres)) {
  const element = document.createElement("option");
  element.value = id;
  element.innerText = name;
  genreHtml.appendChild(element);
}

html.search.genre.appendChild(genreHtml);

const authorsHtml = document.createDocumentFragment();
const firstAuthorElement = document.createElement("option");
firstAuthorElement.value = "any";
firstAuthorElement.innerText = "All Authors";
authorsHtml.appendChild(firstAuthorElement);

for (const [id, name] of Object.entries(authors)) {
  const element = document.createElement("option");
  element.value = id;
  element.innerText = name;
  authorsHtml.appendChild(element);
}

html.search.author.appendChild(authorsHtml);

/**
 * Set default theme on users preference
 */
const defaultTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    setTheme("night");
  } else {
    setTheme("day");
  }
};

html.list.button.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
html.list.button.disabled = matches.length - page * BOOKS_PER_PAGE > 0;

html.list.button.innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${
      matches.length - page * BOOKS_PER_PAGE > 0
        ? matches.length - page * BOOKS_PER_PAGE
        : 0
    })</span>
`;

/**
 * Close search overlay
 */
searchOverlay.addListener("click");
/**
 * Close settings overlay
 */
settingsOverlayClose.addListener("click");

/**
 * Open search overlay
 */
html.header.search.addEventListener("click", () => {
  html.search.overlay.open = true;
  html.search.title.focus();
});

/**
 * Open settings overlay
 */
settingsOverlayOpen.addListener("click");

html.list.close.addEventListener("click", () => {
  html.list.overlay.open = false;
});

/**
 * Toggle theme setting
 */
html.settings.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { theme } = Object.fromEntries(formData);

  setTheme(theme);

  html.settings.overlay.open = false;
});

/**
 * Search functionality
 */

html.search.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (const book of books) {
    let genreMatch = filters.genre === "any";

    for (const singleGenre of book.genres) {
      if (genreMatch) break;
      if (singleGenre === filters.genre) {
        genreMatch = true;
      }
    }

    if (
      (filters.title.trim() === "" ||
        book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.author === "any" || book.author === filters.author) &&
      genreMatch
    ) {
      result.push(book);
    }
  }

  page = 1;
  let matches = result;

  if (result.length < 1) {
    html.list.message.classList.add("list__message_show");
  } else {
    html.list.message.classList.remove("list__message_show");
  }

  html.list.items.innerHTML = "";
  const newItems = document.createDocumentFragment();

  loadPreview(newItems);

  html.list.items.appendChild(newItems);
  html.list.button.disabled = matches.length - page * BOOKS_PER_PAGE < 1;

  html.list.button.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${
          matches.length - page * BOOKS_PER_PAGE > 0
            ? matches.length - page * BOOKS_PER_PAGE
            : 0
        })</span>
    `;

  window.scrollTo({ top: 0, behavior: "smooth" });
  html.search.overlay.open = false;
});

/**
 * Create preview
 */
html.list.button.addEventListener("click", () => {
  const fragment = document.createDocumentFragment();

  loadPreview(fragment);

  html.list.items.appendChild(fragment);
  page += 1;
});

html.list.items.addEventListener("click", (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  for (const node of pathArray) {
    if (active) break;

    if (node?.dataset?.preview) {
      let result = null;

      for (const singleBook of books) {
        if (result) break;
        if (singleBook.id === node?.dataset?.preview) result = singleBook;
      }

      active = result;
    }
  }

  if (active) {
    html.list.overlay.open = true;
    html.list.blur.src = active.image;
    html.list.image.src = active.image;
    html.list.title.innerText = active.title;
    html.list.subtitle.innerText = `${authors[active.author]} (${new Date(
      active.published
    ).getFullYear()})`;
    html.list.description.innerText = active.description;
  }
});

/* Created view.js with dom to make the html elements easier to read and more visible. Helps with readability. 
|* Created function for setting the theme
*/
