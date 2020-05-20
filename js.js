'use strict';

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

//Videoafspilning, hvis videoen er synlig, så afspilles den.
const video = document.getElementById("intro")
console.log(video)
if (erSynlig("intro")) {
    video.play()
} else {
    video.pause()
}
