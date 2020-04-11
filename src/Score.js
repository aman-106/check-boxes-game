function Score() {
  this.el = document.getElementById("score-count");
}

Score.prototype.updateScore = function (score) {
  this.el.innerText = score;
}


export default Score
