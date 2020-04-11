
export default class GridCheckBoxes {

  constructor() {
    this.checkboxGrid = document.getElementById('checkbox-grid');
    this.checked = 0;
  }

  renderCheckBoxesGrid() {
    // this.checkboxGrid.removeChild();
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'checkbox-grid__wrapper');
    for (let i = 0; i < 100; i++) {
      const checkbox = document.createElement('input');
      checkbox.setAttribute('class', 'checkbox-grid__wrapper__check');
      checkbox.setAttribute('name', 'check-box-' + i);
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('disabled', true);
      wrapper.appendChild(checkbox);
      this.checkboxGrid.appendChild(wrapper);
    }
  }

  addCheckListener(updateScore) {
    const listener = (event) => {
      const elem = event.target;
      if (elem.getAttribute('class') === 'checkbox-grid__wrapper__check') {
        console.log(this.checked);
        if (elem.checked) {
          this.checked = this.checked + 1;
        } else {
          this.checked = this.checked - 1;
        }
        console.log('djdk', this.checked);

        typeof updateScore === 'function' ? updateScore(this.checked) : false
      }
    }
    this.listener = listener;
    this.checkboxGrid.addEventListener('click', listener);

  }

  removeCheckListener() {
    this.checkboxGrid.removeEventListener('click', this.listener);

  }

  clearCheckBoxes() {
    const wrapper = document.querySelector('.checkbox-grid__wrapper');
    const checkboxes = wrapper.childNodes;
    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i];
      checkbox.checked = false;
    }
  }

  resetCheckBoxGrid() {
    this.removeCheckListener();
    this.clearCheckBoxes();
  }

  resetChecked() {
    this.checked = 0;
  }

  setCheckBoxesEnable(enable) {
    const wrapper = document.querySelector('.checkbox-grid__wrapper');
    const checkboxes = wrapper.childNodes;
    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i];
      enable ? checkbox.removeAttribute('disabled') : checkbox.setAttribute('disabled', true)

    }
  }


}