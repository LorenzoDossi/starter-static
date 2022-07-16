import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class bodyScrollLock {
  constructor() {
    this.className = 'body-scroll-locked';
    this.html = document.documentElement;
  }

  disable(el) {
    this.html.classList.add(this.className);
    disableBodyScroll(el, {reserveScrollBarGap: true})
  }

  enable(el) {
    this.html.classList.remove(this.className);
    enableBodyScroll(el);
  }

  toggle(el) {
    if (this.html.classList.contains(this.className)) {
      this.enable(el)
    } else {
      this.disable(el)
    }
  }

  clearAll() {
    this.html.classList.remove(this.className);
    clearAllBodyScrollLocks();
  }
}

const instance = new bodyScrollLock();

export default instance;
