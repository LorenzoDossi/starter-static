import {
  Application,
} from 'kapla';

class App {
  constructor() {
    return Application.start();
  }
}

const instance = new App();

/**
 * Get Kapla instance from DOM element.
 *
 * @param {HTMLElement} parent DOM parent
 * @param {string} name Component name
 * @returns {Component} Kapla component instance
 */
export function getInstance(parent, name) {
  const el = parent.querySelector(`[data-component="${name}"]`);

  return instance.instanceByElement(el);
}

/**
 * Get Kapla references as Array
 *
 * @param {refs} $refs.name
 * @returns {Array}
 */
export function getRefsArray(refs) {
  return refs ? [].concat(refs) : [];
}

export default instance;
