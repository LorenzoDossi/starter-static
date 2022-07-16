import { CustomEvent } from 'kapla';

/**
 * Window resize custom event
 *
 * Call `onResize` with following params wrapped in an object:
 *    - {number} width
 *    - {number} height
 *    - {number} ratio (width / heigth)
 *    - {boolean} widthIsChanged
 *    - {boolean} heightIsChanged
 *
 * @class MyEvent
 * @extends {CustomEvent}
 */
class MyEvent extends CustomEvent {
  constructor(...args) {
    super(...args);

    this.scope = 'global';
    this.log = false;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.elements = new Set();
    this.onResize = this.onResizeHandler.bind(this);
  }

  bind(component, ee) {
    const { element } = component.context;

    this.elements.add(element);
    this.eventByElement.set(element, this.callback(component, ee));

    if(this.elements.size == 1) {
      window.addEventListener('resize', this.onResize)
    }
  }

  unbind(component) {
    const { element } = component.context;

    this.elements.delete(element);

    if(this.elements.size == 0) {
      window.addEventListener('resize', this.onResize)
    }
  }

  onResizeHandler() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = width / height;
    const widthIsChanged = width != this.width;
    const heightIsChanged = height != this.height;

    this.width = width;
    this.height = height;

    this.elements.forEach(el => {
      this.eventByElement.get(el)({width, height, ratio, widthIsChanged, heightIsChanged});
    })
  }

  callback(component, ee) { // eslint-disable-line class-methods-use-this
    return function callback(o) {
      ee.emit('resize', o);
      component.onResize(o);
    };
  }
}

export const resize = new MyEvent('resize');
