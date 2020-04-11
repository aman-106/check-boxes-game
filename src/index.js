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

function resetScoreAndChecked() {
  resetCheckedCount();
  resetScore();
}
const scoreMsg = new ScoreMsg();
scoreMsg.addCloseListener(resetScoreAndChecked);


gridCheckBoxes.renderCheckBoxesGrid();

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', onStartGame);

function onStartGame() {
  startBtn.setAttribute('disabled', true);
  timer.setTimer(onStopGame);
  gridCheckBoxes.addCheckListener(updateScore);
  gridCheckBoxes.setCheckBoxesEnable(true);
}

function onStopGame() {
  startBtn.removeAttribute('disabled');
  gridCheckBoxes.setCheckBoxesEnable(false);
  gridCheckBoxes.resetCheckBoxGrid();
  scoreMsg.showMsg(gridCheckBoxes.checked);
}