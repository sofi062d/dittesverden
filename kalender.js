class ligenu {
    constructor(dato, maaned, aarstal) {
        this.dato = dato;
        this.maaned = maaned;
        this.aarstal = aarstal;
    }

    get skafDato() {
        return this.dato;
    }

    get skafMaanedsnavn() {
        const maaneder = ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"];
        return maaneder[this.maaned];
    }

    get skafAarstal() {
        return this.aarstal;
    }
}

const idag = new Date();
const nu = new ligenu(idag.getDate(), idag.getMonth(), idag.getFullYear());

document.getElementById("kalender1").innerHTML = nu.skafDato + ". " + nu.skafMaanedsnavn + " " + nu.skafAarstal;
document.getElementById("kalender2").innerHTML = nu.skafDato + ". " + nu.skafMaanedsnavn + " " + nu.skafAarstal;
