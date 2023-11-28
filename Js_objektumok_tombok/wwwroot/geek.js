var viccek;

window.onload = function () {

    letoltes();

};
var letoltes = function () {
    var jokesDiv = document.getElementById('jokesDiv');

    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;
    for (var i = 0; i < viccek.length; i++) {

        var ujViccDiv = document.createElement('div');
        ujViccDiv.innerText = viccek[i]['text']
        jokesDiv.appendChild(ujViccDiv);
    }
}