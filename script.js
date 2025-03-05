const video = document.querySelector('.player__video');
const toggle = document.querySelector('.player__button');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const skipButtons = document.querySelectorAll('.skip');

function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚';
    } else {
        video.pause();
        toggle.textContent = '►';
    }
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

function seek(event) {
    const seekTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = seekTime;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleVolume() {
    video.volume = volume.value;
}

function handleSpeed() {
    video.playbackRate = playbackSpeed.value;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', seek);
skipButtons.forEach(button => button.addEventListener('click', skip));
volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handleSpeed);

