class Device {
  constructor() {
    this._isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
    this._isMobile && document.documentElement.classList.add("is-mobile");
  }

  get isMobile() {
    return this._isMobile;
  }
}

const instance = new Device();

export default instance;
