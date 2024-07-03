import { LitElement, html, css, directive } from "../libs/lit-html.js";

class TallyCounter extends LitElement {
  static styles = css`
    input {
      background-color: #808b96;
    }
    .counter_value {
      width: 100%;
      height: 15rem;
      text-align: center;
      font-size: 6rem;
      font-weight: 900;
      color: white;
      border-width: 0;
      border-bottom: 1px solid var(--color-light-grey);
    }
    .counter_actions {
      display: flex;
    }
  `;
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.count = 0;
  }

  setCount = (count) => {
    this.count = count;
  };
  render() {
    const { count } = this;
    return html`
      <input class="counter_value" readonly value="${count}" />
      <div class="counter_actions">
        <sl-button
          variant="neutral"
          size="large"
          style="width: 50%"
          @click=${() => this.setCount(count - 1)}
          >-</sl-button
        ><sl-button
          variant="neutral"
          size="large"
          style="width: 50%"
          @click=${() => this.setCount(count + 1)}
          >+</sl-button
        >
      </div>
      <div>
        <sl-button
          variant="neutral"
          size="large"
          @click=${() => (this.count = 0)}
          >Reset</sl-button
        >
      </div>
    `;
  }
}

customElements.define("tally-counter", TallyCounter);
