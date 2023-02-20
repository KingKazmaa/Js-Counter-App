// create button/display variables here(?)
const incButton = document.querySelector(".inc")
const decButton = document.querySelector(".dec")
const counter = document.querySelector('.counter')

// start counter at 0
let count = 0

// lets log each click just for fun actually
let record = 0
const updateRecord = () => console.log(record++ + ' clicks')
// update display
const updateDisplay = () => counter.innerHTML = count

// functions to increase/decrease counter + update display and then log each time the user clicks a button
function increaseNum() {
  count++
  updateDisplay()
  updateRecord()
}
function decreaseNum() {
  count--
  updateDisplay()
  updateRecord()
}
/* Trying event handlers for each button
incButton.onclick = increaseNum()
decButton.onclick = decreaseNum() */

// event handlers didnt work so maybe event listeners?
incButton.addEventListener("click", increaseNum())
decButton.addEventListener("click", decreaseNum())

// NOTE TO SELF: EVENT LISTENERS >> EVENT HANDLERS