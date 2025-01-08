const timerValue = function() {
    let timer = document.getElementById("timer");
    if(timer.textContent == 0) {
        alert("Вы победили в конкурсе");
        clearInterval(timerInterval);
    } else {
        timer.textContent--;
    }
}
const timerInterval = setInterval(timerValue, 1000);
