var randomnumber1 = Math.floor(Math.random()*6)+1;

var RandomDiceImage = "dice" + randomnumber1 + ".png";
var RandomDiceSource= "images/" + RandomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", RandomDiceSource);

var randomnumber2 = Math.floor(Math.random()*6)+1;

var RandomDiceSource2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", RandomDiceSource2);

if(randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}


