import { LitElement, html, css } from "../libs/lit-html.js";
import { store } from "../store.js";

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
    sl-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  static get properties() {
    return {
      count: { type: Number },
      isAtMax: { type: Boolean },
      isAtMin: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.count = store.getCount();
    this.isAtMax = store.isAtMax();
    this.isAtMin = store.isAtMin();

    this.handleStoreUpdate = this.handleStoreUpdate.bind(this);
    store.subscribe(this.handleStoreUpdate);
  }

  handleStoreUpdate() {
    this.count = store.getCount();
    this.isAtMax = store.isAtMax();
    this.isAtMin = store.isAtMin();
  }

  increment() {
    store.increment();
  }

  decrement() {
    store.decrement();
  }

  reset() {
    store.reset();
  }

  render() {
    const { count, isAtMax, isAtMin } = this;
    return html`
      <input class="counter_value" readonly value="${count}" />
      <div class="counter_actions">
        <sl-button
          variant="neutral"
          size="large"
          style="width: 50%"
          @click=${this.decrement}
          ?disabled=${isAtMin}
          >-</sl-button
        ><sl-button
          variant="neutral"
          size="large"
          style="width: 50%"
          @click=${this.increment}
          ?disabled=${isAtMax}
          >+</sl-button
        >
      </div>
      <div>
        <sl-button variant="neutral" size="large" @click=${this.reset}
          >Reset</sl-button
        >
      </div>
    `;
  }
}

customElements.define("tally-counter", TallyCounter);
