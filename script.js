

function writeStory() {
    let adjective1 = document.getElementById("adjective1").value;
    let profession = document.getElementById("profession").value;
    let verbing = document.getElementById("verbing").value;
    let container = document.getElementById("container").value;
    let adjective2 = document.getElementById("adjective2").value;
    let shape = document.getElementById("shape").value;
    let adjective3 = document.getElementById("adjective3").value;
    let smallAnimal = document.getElementById("smallAnimal").value;
    let adjective4 = document.getElementById("adjective4").value;

    document.getElementById("filledTemplate").innerHTML = '<img id="oPic" src="images/o.png">nce upon a time, a ' + adjective1 +  " " + profession + ' was ' + verbing + ' through the woods when he encountered a ' + container + '. It was ' + adjective2 + ' and ' + shape + ' and he was surprised to see such a ' + adjective3 + ' object out there in the woods. He peeked inside and saw it contained a ' + smallAnimal +'. <br> "Hello, ' + smallAnimal + ',\" the ' + profession + ' said. <br> To his suprise, the ' + smallAnimal + ' responded. \"Hello, friend! Would you be so kind as to carry me and my ' + container + ' to the next town? I am too ' + adjective4 + ' to carry this ' + container + ' myself.\" <br> The ' + profession + ' obliged, and together he and the ' + smallAnimal + ' journeyed on.'
}