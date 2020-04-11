//  show score at end of game
export default class ScoreMsg {

  constructor() {
    this.modal = document.getElementById('modal');
    this.score = document.querySelector('#modal .score')
    this.close = document.querySelector('#modal .header__close')
  }

  show() {
    this.modal.setAttribute('class', 'show');
  }

  hide() {
    this.modal.setAttribute('class', 'hide')
  }

  renderMsg(score) {
    this.score.innerText = 'Your final score is ' + score;
  }

  showMsg(score = 0) {
    this.show();
    this.renderMsg(score);
  }

  addCloseListener(onClose) {
    this.close.addEventListener('click', () => {
      this.hide();
      typeof onClose === 'function' ? onClose() : false;

    })
  }



}

