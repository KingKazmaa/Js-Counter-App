// create button/display variables here(?)
const incButton = document.querySelector(".inc")
const decButton = document.querySelector(".dec")
const counter = document.querySelector('.counter')

// start counter at 0
let count = 0

// update display
const updateDisplay = () => counter.innerHTML = count

// functions to increase/decrease counter + update display
function increaseNum() {
  count++
  updateDisplay()
}
function decreaseNum() {
  count--
  updateDisplay()
}
/* Trying event handlers for each button
incButton.onclick = increaseNum()
decButton.onclick = decreaseNum() */

// event handlers didnt work so maybe event listeners?
incButton.addEventListener("click", increaseNum())
decButton.addEventListener("click", decreaseNum())

// NOTE TO SELF: EVENT LISTENERS >> EVENT HANDLERS