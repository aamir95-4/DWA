import { LitElement, html } from "../libs/lit-html.js";

/**
 * Reset count to 0
 */

export class Reset extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  render() {
    const { count } = this;
    return html`
      <sl-button variant="neutral" size="large" @click=${() => (this.count = 0)}
        >Reset</sl-button
      >
    `;
  }
}

customElements.define("tally-reset", Reset);
