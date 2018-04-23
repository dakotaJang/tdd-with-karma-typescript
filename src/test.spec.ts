/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-with-karma-typescript/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
describe("A suite", (): void => {
  it("contains spec with an expectation", (): void => {
    // tslint:disable-next-line:use-isnan
    expect(NaN === NaN).toBe(false);
  });
  it("contains spec with an expectation", (): void => {
    expect(Object.is(NaN, NaN)).toBe(true);
  });
});
