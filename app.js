const input = document.querySelector("#input");
const btn = document.querySelectorAll("button");
const results = document.querySelector(".result");

let timer;
let isRunning = false;
let timeLeft;

btn[0].addEventListener("click", () => {
    if (!isRunning) {
        timeLeft = parseInt(input.value);

        if (isNaN(timeLeft) || timeLeft <= 0) {
            alert("Please enter a valid number.");
            return;
        }
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
        btn[0].disabled = true;
    }
});

btn[1].addEventListener("click", () => {
    clearInterval(timer); 
    isRunning = false; 
    btn[0].disabled = false; 
});

btn[2].addEventListener("click", () => {
    clearInterval(timer); 
    timeLeft = 0;
    results.innerText = "00:00";
    isRunning = false; 
    btn[0].disabled = false; 
});

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timer); 
        results.innerText = "00:00"; 
        isRunning = false; 
        btn[0].disabled = false; 

        alert("Timer Completed!");
    } else {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60; 
        results.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}
