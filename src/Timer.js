function Timer() {
  this.el = document.getElementById("timer-secs");
  this.cancel = false;
  this.seconds = 0;
}

Timer.prototype.incrementSeconds = function() {
  this.seconds += 1;
  if (this.el) {
    this.el.innerText = this.seconds;
  } else {
    clearInterval(this.cancel);
  }
};

Timer.prototype.setTimer = function() {
  console.log("dkdkkd");
  this.cancel = setInterval(() => this.incrementSeconds(), 1000);
};

Timer.prototype.resetTimer = function() {
  clearInterval(this.cancel);
  this.el.innerText = 0;
};

export default Timer;
