/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-with-karma-typescript/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
export function loadCustomElementToBody( element: HTMLElement ) {
  const body: HTMLElement = document.getElementsByTagName("body")[0];
  body.appendChild(element);
}

export function unloadCustomElementFromBody( element: HTMLElement ) {
  const body: HTMLElement = document.getElementsByTagName("body")[0];
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < body.children.length; i++) {
    if (body.children[i] === element) {
      body.children[i].remove();
    }
  }
}
