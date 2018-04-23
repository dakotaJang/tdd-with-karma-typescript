/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-with-karma-typescript/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
class TestAttribute extends HTMLElement {
  private _value: string | number;
  private constructor() {
    super();
    this.attachShadow({mode: "open"});
  }

  static get observedAttributes(): string[] {
    return ["value"];
  }

  public get value(): string | number {
    return this._value;
  }

  public set value(v: string | number) {
    if (this._value === v) {
      return;
    }
    this._value = v;
    this.shadowRoot.innerHTML = this._value.toString();
  }

  public attributeChangedCallback(attributeName: string, oldValue: string, newValue: string): void {
    if (oldValue === newValue) {
      return;
    }
    switch (attributeName) {
      case "value":
        const newInt: number = Number.parseInt(newValue);
        if (isNaN(newInt)) {
          this.value = newValue;
        } else {
          this.value = newInt;
        }
        break;
      default:
        break;
    }
  }
}
customElements.define("test-attribute", TestAttribute);
