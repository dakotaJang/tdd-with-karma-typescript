/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-with-karma-typescript/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
import { loadCustomElementToBody, unloadCustomElementFromBody } from "../../test_tools/web_component_loader";

describe("TestAttribute", (): void => {
  let testAttribute: any;
  beforeAll(() => {
    testAttribute = document.createElement("test-attribute");
    loadCustomElementToBody(testAttribute);
  });
  it("expect test-attribute to be defined as custom elements", (): void => {
    expect(customElements.get("test-attribute")).toBeDefined();
  });
  it("set prop as integer", (): void => {
    testAttribute.setAttribute("value", "1");
    expect(testAttribute.value).toBe(1);
  });
  it("set prop as string", (): void => {
    testAttribute.setAttribute("value", "hello");
    expect(testAttribute.value).toBe("hello");
  });
  it("set innerHTML using value attribute", (): void => {
    testAttribute.setAttribute("value", "hello world");
    expect(testAttribute.shadowRoot.innerHTML).toBe("hello world");
  });
  afterAll(() => {
    unloadCustomElementFromBody(testAttribute);
  });
});
