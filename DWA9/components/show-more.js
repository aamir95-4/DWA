import { matches } from "../view.js";
import { page } from "../scripts.js";
import { BOOKS_PER_PAGE } from "../data.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
        * {
         box-sizing: border-box;
        }
        .show-more {
            background-color: rgba(var(--color-blue), 1);
            transition: background-color 0.1s;
            border-width: 0;
            border-radius: 6px;
            height: 2.75rem;
            cursor: pointer;
            width: 50%;
            background-color: rgba(var(--color-blue), 1);
            color: rgba(var(--color-force-light), 1);
            font-size: 1rem;
            border: 1px solid rgba(var(--color-blue), 1);
            max-width: 10rem;
            margin: 0 auto;
            display: block;
        } 
    </style>
    <button class="show-more"><span>Show more</span>
        <span class="list__remaining"> (${
          matches.length - page * BOOKS_PER_PAGE > 0
            ? matches.length - page * BOOKS_PER_PAGE
            : 0
        })</span></button>
`;
class ShowMore extends HTMLElement {
  inner = this.attachShadow({ mode: "closed" });

  connectedCallback() {
    this.inner.appendChild(template.content);
  }
}

customElements.define("show-more", ShowMore);
