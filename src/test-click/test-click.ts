/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-with-karma-typescript/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
class TestClick extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", (): void => {
      this.dispatchEvent(new CustomEvent("test-click", {detail: "test-clicked"}));
    });
  }
}
customElements.define("test-click", TestClick);
