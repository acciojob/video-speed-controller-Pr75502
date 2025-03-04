

let video = document.querySelector(".flex")
let progressFilled = document.querySelector(".progress__filled")
function updateProgress() {
  let percent = (video.currentTime / video.duration) * 100
  progressFilled.style.width = percent + "%"  
  progressFilled.style.backgroundColor = "green"
  
}
video.addEventListener("timeupdate", updateProgress)



let btn = document.querySelector(".btn__play")
btn.addEventListener("click", function() {
  if (video.paused) {
    video.play()
    btn.innerHTML = "►"
  } else {
    video.pause()
    btn.innerHTML = "❚ ❚ "
  }
})
let vol = document.querySelector(".volume")
vol.addEventListener("input", () => {
  video.volume = vol.value
})

let forward = document.querySelector(".forward")
let rewind = document.querySelector(".rewind")
forward.addEventListener("click", () => {
  video.currentTime += 25
})
rewind.addEventListener("click", () => {
  video.currentTime -= 10
})
