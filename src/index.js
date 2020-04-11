import "./styles.css";
import './app.css';
import Timer from "./Timer.js";
import Score from "./Score.js";
import ScoreMsg from "./ScoreMsg.js";
import GridCheckBoxes from './GridCheckBoxes.js';

const timer = new Timer()

const score = new Score()
const updateScore = score.updateScore.bind(score);
const resetScore = score.reset.bind(score);

const gridCheckBoxes = new GridCheckBoxes();
const resetCheckedCount = gridCheckBoxes.resetChecked.bind(gridCheckBoxes);
gridCheckBoxes.renderCheckBoxesGrid();

function resetBtnScoreAndChecked() {
  resetCheckedCount();
  resetScore();
  startBtn.removeAttribute('disabled');
}
const scoreMsg = new ScoreMsg();
scoreMsg.addCloseListener(resetBtnScoreAndChecked);
// for start btn add click event lsitener
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', onStartGame);

// on start , disbale start btn , set timer , add click event listener and enable check boxes
function onStartGame() {
  startBtn.setAttribute('disabled', true);
  timer.setTimer(onStopGame);
  gridCheckBoxes.addCheckListener(updateScore);
  gridCheckBoxes.setCheckBoxesEnable(true);
}

// on stop , enable start btn , stop timer , remove click event listener and disbale check boxes
function onStopGame() {
  gridCheckBoxes.resetCheckBoxGrid();
  scoreMsg.showMsg(gridCheckBoxes.checked);
  gridCheckBoxes.setCheckBoxesEnable(false);
}