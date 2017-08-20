'use strict';



function ustawTlo() {
    document.getElementsByTagName("p")[0].style.backgroundColor = "red";
    document.getElementsByTagName("p")[1].style.backgroundColor = "yellow" ;

}

document.getElementById("button").onclick = ustawTlo;

