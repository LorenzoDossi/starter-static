export class DevGrid {

  static keyCode = 103; // g

  static html = `
  <div id="dev-grid">
      <style>
        #dev-grid {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 100000;
        }
        #dev-grid .o-grid > * {
          height: 100vh;
          display: flex;
        }
        #dev-grid .o-grid > *:before {
          content: '';
          display: block;
          width: 100%;
          background-color: rgba(255,0,0,.15);
        }
      </style>
      <div class="o-container u-d-sm-none">
        <div class="o-grid">
          <div class="o-col-6"></div>
          <div class="o-col-6"></div>
        </div>
      </div>
      <div class="o-container u-d-none u-d-sm-block">
        <div class="o-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
`;

  constructor() {
    this.active = false;
    document.addEventListener('keypress', this.onKeyPress.bind(this))
  }

  onKeyPress(e) {
    if(e.keyCode == DevGrid.keyCode && event.target.tagName.toLowerCase() != 'input' && event.target.tagName.toLowerCase() != 'textarea') {
      this.active = !this.active;
      this.active ? this.show() : this.hide();
    }
  }

  show() {
    document.body.insertAdjacentHTML('beforeend', DevGrid.html);
  }

  hide() {
    document.getElementById('dev-grid').remove();
  }
}
