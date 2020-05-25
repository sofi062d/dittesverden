'use strict';

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

function dialog(hoejde, bredde, baggrundsfarve, fontfarve, placering, indhold, knapper) {

    const htmlkrop = document.body;
    htmlkrop.insertAdjacentHTML('afterend', '<div id="modaldialog" class="modal_dialog"><div id="modalindhold"></div></div>');

    const modalindhold = document.getElementById("modalindhold");
    modalindhold.classList.add("modal_indhold");

    const modaldialog = document.getElementById("modaldialog");
    let dialogIndhold = '<span onclick="modaldialog.remove()" class="close">X</span><p><br>' + indhold + '</p>';

    modalindhold.style.width = bredde;
    modalindhold.style.height = hoejde;
    modalindhold.style.backgroundColor = baggrundsfarve;
    modalindhold.style.color = fontfarve;

    if (placering === "centrer") {
        modalindhold.style.left = "50%";
        modalindhold.style.top = "50%";
        modalindhold.style.transform = "translate(-50%,-50%)";
        modalindhold.style.boxShadow = "5px 5px 5px black";
    } else if (placering === "bund") {
        modalindhold.style.left = "0";
        modalindhold.style.bottom = "0";
    } else if (placering === "top") {
        modalindhold.style.left = "0";
        modalindhold.style.top = "0";
    }

    if (knapper) {
        dialogIndhold += '<div class="knappanel"><button type="button" class="knapper">Fortryd</button><button type="button" class="knapper">OK</button></div>';
    }

    modalindhold.innerHTML = dialogIndhold;
}


// Hovedprogram

const dialog1indhold = `<object data="opskrifter/Groentsagsdeller-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink1").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog1indhold, false);
});


const dialog2indhold = `<object data="opskrifter/Groentsagsomelet-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink2").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog2indhold, false);
});


const dialog3indhold = `<object data="opskrifter/Linsenuggets-med-squash.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink3").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog3indhold, false);
});


const dialog4indhold = `<object data="opskrifter/Madvafler-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink4").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog4indhold, false);
});


const dialog5indhold = `<object data="opskrifter/Madpandekager-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink5").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog5indhold, false);
});


const dialog6indhold = `<object data="opskrifter/Pizzadej-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink6").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog6indhold, false);
});


const dialog7indhold = `<object data="opskrifter/Squash-boller-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink7").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog7indhold, false);
});


const dialog8indhold = `<object data="opskrifter/Glutenfri-boller-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink8").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog8indhold, false);
});


const dialog9indhold = `<object data="opskrifter/Knaekbroed-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink9").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog9indhold, false);
});


const dialog10indhold = `<object data="opskrifter/Fedtebroed-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink10").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog10indhold, false);
});


const dialog11indhold = `<object data="opskrifter/Joedekager-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink11").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog11indhold, false);
});


const dialog12indhold = `<object data="opskrifter/Bananpandekager-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink12").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog12indhold, false);
});


const dialog13indhold = `<object data="opskrifter/Soede-vafler-med-linsemel.pdf" type="application/pdf" width="100%" height="650">

Denne browser kan ikke læse pdf dokumenter.

</object>`;

document.getElementById("pdflink13").addEventListener("click", function (e) {
    e.preventDefault;
    dialog("700px", "50%", "white", "blue", "centrer", dialog13indhold, false);
});


//Videoafspilning, hvis videoen er synlig, så afspilles den.
const video = document.getElementById("intro")
console.log(video)
if (erSynlig("intro")) {
    video.play()
} else {
    video.pause()
}
