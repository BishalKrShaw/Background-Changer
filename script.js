const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
let intervalBGC;

// Random Color Generator Function
function randomBGC() {
    const hexValue = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<=5; i++) {
        const randomValue = Math.floor(Math.random()*16);
        color += hexValue[randomValue];
    }
    return color;
}

// Function for changing BGC in every second
function startChangingBGC() {
    intervalBGC = setInterval(()=>{
        const bgcolor = randomBGC();
        document.body.style.backgroundColor = bgcolor;
    }, 1000);
}

// Function to stop changing BG color
function stopChangingBGC() {
    clearInterval(intervalBGC);
}

// Start Button Click Event
startBtn.addEventListener("click", startChangingBGC);

// Stop Button Click Event
stopBtn.addEventListener("click", stopChangingBGC);