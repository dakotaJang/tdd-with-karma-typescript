/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-with-karma-typescript/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
class TestKey extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.addEventListener("keypress", (e): void => {
      this.shadowRoot.innerHTML = e.key;
      this.dispatchEvent(new CustomEvent("test-key-press", {detail: "key-pressed"}));
    });
  }
  public connectedCallback() {
    this.setAttribute("tabindex", "0");
  }
}
customElements.define("test-key", TestKey);
