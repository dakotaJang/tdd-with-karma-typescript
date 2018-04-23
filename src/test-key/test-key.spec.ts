/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-with-karma-typescript/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
import { loadCustomElementToBody, unloadCustomElementFromBody } from "../../test_tools/web_component_loader";

describe("TestKey", (): void => {
  let testKey: any;
  beforeAll(() => {
    testKey = document.createElement("test-key");
    loadCustomElementToBody(testKey);
  });
  it("expect test-key to be defined as custom elements", (): void => {
    expect(customElements.get("test-key")).toBeDefined();
  });
  it("catch key press event", (done): void => {
    testKey.addEventListener("test-key-press", (e: any): void => {
      expect(e.detail).toBe("key-pressed");
      done();
    });
    testKey.dispatchEvent(new Event("keypress"));
  });
  it("set innerHTML using key press", (done): void => {
    testKey.addEventListener("test-key-press", (e: any): void => {
      done();
    });
    const keyEvent = new KeyboardEvent("keypress", {key: "a"});
    testKey.dispatchEvent(keyEvent);
    expect(testKey.shadowRoot.innerHTML).toBe("a");
  });
  afterAll(() => {
    // remove comment below to unload the element after test
    // unloadCustomElementFromBody(testKey);
  });
});
