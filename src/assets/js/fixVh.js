import device from './device';

class fixVh {

  constructor() {
    this.initialVar = '--initial-vh';
    this.actualVar = '--actual-vh';

    if(device.isMobile) {
      this.updateAll();
      window.addEventListener('orientationchange', this.delayUpdateAll.bind(this));
    }
  }

  updateValue(varName) {
    if(device.isMobile) {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty(varName, vh + 'px');
    }
  }

  updateAll() {
    this.updateActual();
    this.updateInitial();
  }

  updateActual() {
    this.updateValue(this.actualVar);
  }

  updateInitial() {
    this.updateValue(this.initialVar);
  }

  delayUpdateAll() {
    setTimeout(this.updateAll.bind(this), 100);
  }
}

const instance = new fixVh();

export default instance;
