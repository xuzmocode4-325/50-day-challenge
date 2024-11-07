
const resetBtn = document.getElementById('reset');
const playBtn = document.getElementById('play');
const timerEl = document.getElementById('timer');
const root = document.querySelector(':root');


const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
timerEl.innerText = formatTime(totalSeconds);


const timerInverval = setInterval(runTimer, 1000)

playBtn.addEventListener('click', () => {
    console.log('clicked')
    playing = !playing;

    const playIcon = playBtn.querySelector('i');

    if (playing) {
        playBtn.classList.remove('bg-blue-300');
        playBtn.classList.add('bg-green-500');

        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        playBtn.classList.remove('bg-green-500');
        playBtn.classList.add('bg-blue-300');

        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
})

function runTimer() {
    if (playing) {
        currentSeconds --;

        if (currentSeconds <= 0) {
            clearInterval(timerInverval)
        }

        timerEl.innerText = formatTime(currentSeconds);
        root.style.setProperty('--degrees', calcDeg())
    }
}

function calcDeg() {
    return `${360 - (currentSeconds / totalSeconds) * 360}deg`
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const newSeconds = seconds % 60

    return `${minutes.toString().padStart(2, `0`)}:${
        newSeconds.toString().padStart(2, '0')}`;
}