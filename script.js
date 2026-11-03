let input = document.querySelector("#secondi");
let timer = document.querySelector("#timer");
let avvia = document.querySelector("#avvia");
let pausa = document.querySelector("#pausa");
let reset = document.querySelector("#reset");

let countdown;
let secondiRimanenti = 0;

avvia.addEventListener("click", () => {
    if (countdown) {
        return;
    }

    if (secondiRimanenti === 0) {
        secondiRimanenti = Number(input.value);

        if (secondiRimanenti <= 0) {
            return;
        }

        timer.innerText = secondiRimanenti;
    }

    countdown = setInterval(() => {
        secondiRimanenti--;

        timer.innerText = secondiRimanenti;

        if (secondiRimanenti === 0) {
            clearInterval(countdown);
            countdown = null;
        }
    }, 1000);
});

pausa.addEventListener("click", () => {
    clearInterval(countdown);
    countdown = null;
});

reset.addEventListener("click", () => {
    clearInterval(countdown);
    countdown = null;
    secondiRimanenti = 0;
    input.value = "";
    timer.innerText = 0;
});