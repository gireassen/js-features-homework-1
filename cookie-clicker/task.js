const clicker = document.getElementById("clicker__counter");
const element = document.getElementById("cookie");
let clickCounter = 0;
element.onclick = function() {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    if(randomNumber > 10) {
        element.width += 5;
    } else {
        element.width -= 2;
    }
    clickCounter++
    clicker.textContent = clickCounter;
}