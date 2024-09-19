let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")

let resetHomeScore = document.getElementById("reset-home-score");
let resetGuestScore = document.getElementById("reset-guest-score");

let countHome = 0
let countGuest = 0

// Home Score Count

function freethrowHome() {
    countHome += 1 // countHome = countHome + 1
    scoreHomeEl.textContent = countHome
}

function midrangeHome() {
    countHome += 2 // countHome = countHome + 2
    scoreHomeEl.textContent = countHome
}

function longthreeHome() {
    countHome += 3 // countHome = countHome + 3
    scoreHomeEl.textContent = countHome
}

resetHomeScore.addEventListener("click", function () {
	countHome = 0
  scoreHomeEl.textContent = 0;
});

// Guest Score Count

function freethrowGuest() {
    countGuest += 1 // countGuest = countGuest + 1
    scoreGuestEl.textContent = countGuest
}

function midrangeGuest() {
    countGuest += 2 // countGuest = countGuest + 2
    scoreGuestEl.textContent = countGuest
}

function longthreeGuest() {
    countGuest += 3 // countGuest = countGuest + 3
    scoreGuestEl.textContent = countGuest
}

resetGuestScore.addEventListener("click", function () {
	countGuest = 0
  scoreGuestEl.textContent = 0;
});