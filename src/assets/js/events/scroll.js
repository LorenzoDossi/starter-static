import { CustomEvent } from 'kapla';
import scrollbar from '../scrollbar'

/**
 * Locomotive scroll custom event
 *
 * Call `onScroll` sending scrollbar instance:
 *
 * @class MyEvent
 * @extends {CustomEvent}
 */

class MyEvent extends CustomEvent {
  constructor(...args) {
    super(...args);

    this.scope = 'global';
    this.log = false;
  }

  bind(component, ee) {
    const { element } = component.context;

    this.eventByElement.set(element, this.callback(component, ee));

    // because of a Locomotive Scrollbar bug
    // in native mode it dispatches the scroll event before updating the internal values
    if(scrollbar.isSmooth) {
      scrollbar.on('scroll', this.eventByElement.get(element))
    } else {
      window.addEventListener('scroll', this.eventByElement.get(element));
    }

  }

  unbind(component) {
    const { element } = component.context;

    if(scrollbar.isSmooth) {
      scrollbar.off('scroll', this.eventByElement.get(element))
    } else {
      window.removeEventListener('scroll', this.eventByElement.get(element));
    }

  }

  callback(component, ee) { // eslint-disable-line class-methods-use-this
    return function callback() {
      ee.emit('scroll', scrollbar.scroll.instance);
      component.onScroll(scrollbar.scroll.instance);
    };
  }
}

export const scroll = new MyEvent('scroll');
