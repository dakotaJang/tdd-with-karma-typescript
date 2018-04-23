/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-with-karma-typescript/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
import { loadCustomElementToBody, unloadCustomElementFromBody } from "../../test_tools/web_component_loader";

describe("TestClick", (): void => {
  let testClick: any;
  beforeAll(() => {
    testClick = document.createElement("test-click");
    loadCustomElementToBody(testClick);
  });
  it("expect test-click to be defined as custom elements", (): void => {
    expect(customElements.get("test-click")).toBeDefined();
  });
  it("catch click event", (done: any): void => {
    testClick.addEventListener("test-click", (e: any): void => {
      expect(e.detail).toBe("test-clicked");
      done();
    });
    testClick.click();
  });
  it("count 3 clicks", (done: any): void => {
    let count = 0;
    testClick.addEventListener("test-click", (e: any): void => {
      count++;
      done();
    });
    testClick.click();
    testClick.click();
    testClick.click();
    expect(count).toBe(3);
  });
  afterAll(() => {
    unloadCustomElementFromBody(testClick);
  });
});
