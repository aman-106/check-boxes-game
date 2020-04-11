const delay = 100;
const timeGap = 30;
function Timer() {
  this.el = document.getElementById("timer-secs");
  this.cancel = false;
  this.seconds = timeGap;
}

Timer.prototype.incrementSeconds = function () {
  this.seconds -= 1;
  if (this.el) {
    this.el.innerText = this.seconds;
  } else {
    clearInterval(this.cancel);
  }
};

Timer.prototype.setTimer = function (onStopTimer) {
  this.cancel = setInterval(() => {
    this.incrementSeconds();
    if (this.seconds === 0) {
      this.resetTimer();
      typeof onStopTimer === 'function' ? onStopTimer() : false;
    }
  }, delay);
};

Timer.prototype.resetTimer = function () {
  clearInterval(this.cancel);
  this.el.innerText = 0;
  this.seconds = timeGap;
};

// Timer.prototype.stopTimer = function (onStopTimer) {
//   if (this.seconds === 0) {
//     this.resetTimer();
//     typeof onStopTimer === 'function' ? onStopTimer() : false;
//   }
// }

export default Timer;
