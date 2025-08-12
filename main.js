const clock = document.getElementById("clock");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const promodoro = document.getElementById("promodoro");
const promodoro25 = document.getElementById("promodoro25");
const promodoro50 = document.getElementById("promodoro50");
const breakVariable = document.getElementById("break");
const break5 = document.getElementById("break5");
const break10 = document.getElementById("break10");
const enterFullScreen = document.getElementById("enterFullScreen");
const clockFrame=document.getElementById("clockFrame");

const DEFAULT_LINK="https://flipclock.us/"
const PROMODORO_LINK_25="https://flipclock.us/#/c/0h25m0s"
const PROMODORO_LINK_50="https://flipclock.us/#/c/0h50m0s"
const BREAK_LINK_5="https://flipclock.us/#/c/0h5m0s"
const BREAK_LINK_10="https://flipclock.us/#/c/0h10m0s"

enterFullScreen.addEventListener("click", () => {
    clockFrame.requestFullscreen();
})

clock.addEventListener("click", () => {
    clockFrame.src=DEFAULT_LINK
})
stop.addEventListener("click", () => {
    clockFrame.src=PROMODORO_LINK_25
})
reset.addEventListener("click", () => {
    clockFrame.src=DEFAULT_LINK
})




promodoro25.addEventListener("click", () => {
    clockFrame.src=PROMODORO_LINK_25
    setTimeout(() => {
        clockFrame.src=BREAK_LINK_5
    }, 25*60*1000);
})
promodoro50.addEventListener("click", () => {
    clockFrame.src=PROMODORO_LINK_50
    setTimeout(() => {
        clockFrame.src=BREAK_LINK_10
    }, 50*60*1000);
})
break5.addEventListener("click", () => {
    clockFrame.src=BREAK_LINK_5
    setTimeout(() => {
        clockFrame.src=PROMODORO_LINK_25
    }, 5*60*1000);
})
break10.addEventListener("click", () => {
    clockFrame.src=BREAK_LINK_10
    setTimeout(() => {
        clockFrame.src=PROMODORO_LINK_50
    }, 10*60*1000);
})



