const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


// Step 1: Select required elements
const video = document.querySelector("video");
const playButton = document.createElement("button");
const volumeControl = document.createElement("input");
const speedControl = document.createElement("input");
const rewindButton = document.createElement("button");
const forwardButton = document.createElement("button");
const progressBar = document.querySelector(".speed-bar");

// Step 2: Setup buttons and inputs
playButton.textContent = "►";
volumeControl.type = "range";
volumeControl.min = 0;
volumeControl.max = 1;
volumeControl.step = 0.05;
volumeControl.value = video.volume;

speedControl.type = "range";
speedControl.min = 0.5;
speedControl.max = 2;
speedControl.step = 0.1;
speedControl.value = video.playbackRate;

rewindButton.textContent = "« 10s";
forwardButton.textContent = "25s »";

// Step 3: Append controls to body
document.body.append(playButton, volumeControl, speedControl, rewindButton, forwardButton);

// Step 4: Play/Pause Toggle
playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.textContent = "❚ ❚";
  } else {
    video.pause();
    playButton.textContent = "►";
  }
});

// Step 5: Volume Control
volumeControl.addEventListener("input", () => {
  video.volume = volumeControl.value;
});

// Step 6: Playback Speed Control
speedControl.addEventListener("input", () => {
  video.playbackRate = speedControl.value;
});

// Step 7: Rewind 10 seconds
rewindButton.addEventListener("click", () => {
  video.currentTime -= 10;
});

// Step 8: Forward 25 seconds
forwardButton.addEventListener("click", () => {
  video.currentTime += 25;
});

// Step 9: Update Progress Bar
function updateProgress() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.height = `${progress}%`;
  progressBar.textContent = `${Math.round(progress)}%`;
}

video.addEventListener("timeupdate", updateProgress);
