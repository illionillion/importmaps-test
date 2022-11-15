"use strict"
import { LitElement, css, html } from "lit";
import "jQuery";

console.log($("simple-greeting"));

export class SimpleGreeting extends LitElement {
  static properties = {
    name: {},
  };
  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();
    this.name = "World";
  }

  #handleClick = () => (this.name = "World");

  render() {
    return html`<p @click=${this.#handleClick}>Hello, ${this.name}!</p>`;
  }
}
customElements.define("simple-greeting", SimpleGreeting);
