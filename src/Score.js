function Score() {
  this.el = document.getElementById("score-count");
}

Score.prototype.updateScore = function (score) {
  this.el.innerText = score;
}

Score.prototype.reset = function () {
  this.el.innerText = 0;
}



export default Score
