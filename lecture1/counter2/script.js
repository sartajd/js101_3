let tens = 0;
let seconds = 0;
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
let Interval;
let running = false;

const loadInitialState = () => {
  const btnStart = document.getElementById("button-start");
  const btnStop = document.getElementById("button-stop");
  const btnReset = document.getElementById("button-reset");

  var Interval;

  btnStart.addEventListener("click", function () {
    clearInterval(Interval);
    if (!running) {
      running = true;
      Interval = setInterval(startTimer, 10);
      btnStart.innerHTML = "Pause"
    } else {
      running = false;
      btnStart.innerHTML = "Start"
    }
  });

  btnReset.addEventListener("click", function () {
    clearInterval(Interval);
    running = false;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    btnStart.innerHTML = "Start"
  });
};

window.onload = function () {
  loadInitialState();
};

function startTimer() {
  tens++;
  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + tens;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
