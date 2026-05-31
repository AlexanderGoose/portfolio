// TODO: add a pomo tracker, ex: 1/7 in top right corner
// add a method to add a task during the current pomo


// let startingMinutes = document.getElementById("userTimerLen");
const startingMinutes = 30;
let time = startingMinutes * 60; // converts into minutes
let countdownInterval = null;

const countdownEl = document.getElementById("countdown");

// setInterval(updateCountdown, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const startTimer = document.getElementById('startTimer');
    const pauseTimer = document.getElementById('pauseTimer');
    const resetTimer = document.getElementById('resetTimer');
    // const pauseTimer = document.getElementById('pauseTimer');

    startTimer.addEventListener('click', () => {
        if (!countdownInterval) {
            countdownInterval = setInterval(updateCountdown, 1000);
        }
    })

    pauseTimer.addEventListener('click', () => {
        if (countdownInterval) {
          clearInterval(countdownInterval);
          countdownInterval = null;
        }
      });

    resetTimer.addEventListener('click', () => {
        clearInterval(countdownInterval);
        countdownInterval = null;
        time = startingMinutes * 60;
        updateCountdown(); // refreshes the display
    })
})

function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (time == 300) {
        let fiveMinuteWarning = new Audio('sounds/fiveMinute.mp3')
        fiveMinuteWarning.play();
    }

    if (time <= 0) {
        clearInterval(countdownInterval); // stop the interval
        countdownEl.innerHTML = "00:00";
        if (window.backgroundAudio) {
          window.backgroundAudio.pause();
          window.backgroundAudio.currentTime = 0;
        }
        // play ending beep
        let endAudio = new Audio('sounds/endBeep.mp3')
        endAudio.play();

        return; // stop the function
      }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}