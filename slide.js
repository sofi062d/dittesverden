"use strict";

function gaaFremad() {
    if (billedIndeks < billedliste.length - 1) {
        billedIndeks++;
    } else {
        billedIndeks = 0;
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

function gaaTilbage() {
    if (billedIndeks > 0) {
        billedIndeks--;
    } else {
        billedIndeks = 5; //kan ændres til billedeliste,length-1
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

// ------- Hovedprogram ---------
const billedliste = ["images/kolo.png", "images/blomst.png", "images/ditte-kolo.png", "images/havelaage.png", "images/kolo-udestue.png", "images/stole.png"];
let billedIndeks = 0;

document.getElementById("frem").addEventListener("click", function () {
    gaaFremad();
})

document.getElementById("tilbage").addEventListener("click", function () {
    gaaTilbage();
})
