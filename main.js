var total_caracteres = 4;
var total_cliques = 0;
var password = "";

function makeButtons() {
    let temp_ = "";
    let teclas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (var i = 0; i < teclas.length - 1; i++) {
        temp_ += '<button type="button" value="' + teclas[i] + '" onclick="clickNumber(this.value)">' + teclas[i] + '</button>';
        document.getElementById("keys").innerHTML = temp_;
    };

    temp_ = '<button class="grey" type="button" onclick="clickClear()">DEL</button>';
    document.getElementById("keys").innerHTML += temp_;

    temp_ = '<button type="button" value="' + teclas[9] + '" onclick="clickNumber(this.value)">' + teclas[9] + '</button>';
    document.getElementById("keys").innerHTML += temp_;

    temp_ = '<button class="grey" type="button" onclick="clickOk()">OK</button>';
    document.getElementById("keys").innerHTML += temp_;

}

makeButtons();

function clickNumber(str) {
    if (total_caracteres > total_cliques) {
        document.querySelector("input").value += str;
        total_cliques++;
        document.getElementById("show").innerHTML = "";

    }
}

function clickClear() {
    document.querySelector("input").value = "";
    total_cliques = 0;
    document.getElementById("show").innerHTML = "";

}

function clickOk() {
    if (total_cliques == total_caracteres) {
        password = document.querySelector("input").value;
        document.getElementById("show").innerHTML = password;
        document.querySelector("input").value = "";
        total_cliques = 0;
    } else {
        alert("wrong password");
    }
}
