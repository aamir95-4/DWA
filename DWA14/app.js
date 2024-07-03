import { LitElement, html, css } from "./libs/lit-html.js";
import "./components/tally-counter.js";
class TallyApp extends LitElement {
  static styles = css`
    h1 {
      text-align: center;
    }
  `;
  render() {
    return html`
      <header class="header">
        <h1 class="header_title">Tally Count</h1>
      </header>
      <aside class="controls">
        <sl-dropdown>
          <sl-button variant="neutral" slot="trigger" caret>Display</sl-button>
          <sl-menu>
            <sl-menu-item>Single</sl-menu-item>
            <sl-menu-item>Multiple</sl-menu-item>
          </sl-menu>
        </sl-dropdown>

        <sl-dropdown>
          <sl-button variant="neutral" slot="trigger" caret>Counter</sl-button>
          <sl-menu>
            <sl-menu-item>Counter 1</sl-menu-item>
            <sl-menu-item>Counter 2</sl-menu-item>
            <sl-menu-item>Counter 3</sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      </aside>
      <tally-counter></tally-counter>
      <footer class="footer">
        Inspired by
        <a class="footer_link" href="https://tallycount.app">Tally Count</a>.
        Note this is a practice project.
      </footer>
    `;
  }
}

customElements.define("tally-app", TallyApp);
