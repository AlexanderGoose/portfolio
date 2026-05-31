const soundPaths = [
    '/static/sounds/fireShrunk.mp3',
    '/static/sounds/rainShrunk.mp3',
    '/static/sounds/birdsAndRainShrunk.mp3',
    '/static/sounds/nightShrunk.mp3',
    '/static/sounds/nycSubwayShrunk.mp3',
    '/static/sounds/windShrunk.mp3'
];

const soundNames = ['fire','rain','birds','night','subway','wind'
]

for (const name in soundNames) {
  console.log(name);
}

let soundIndex = 0;
let audio = new Audio(soundPaths[soundIndex]);

const currentSoundName = document.getElementById('soundName');
currentSoundName.textContent = soundNames[soundIndex];

document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const nextBtn = document.getElementById('nextBtn');

  playBtn.addEventListener('click', () => {
    audio.loop = true; 
    audio.play();
  });

  pauseBtn.addEventListener('click', () => {
    audio.pause();
  });

  // next pauses the sound, updates the counter, creates a new 
  // audio, then plays it. uses modulo to ensure we stay in range
  nextBtn.addEventListener('click', () => {
    audio.pause();
    soundIndex = (soundIndex + 1) % soundPaths.length;
    audio = new Audio(soundPaths[soundIndex]);
    audio.loop = true; // set properties before calling them
    audio.play();
    currentSoundName.textContent = soundNames[soundIndex]; // update sound name
  })
});
