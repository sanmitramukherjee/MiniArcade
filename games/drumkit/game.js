var numberofDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i< numberofDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);

    buttonanimation(buttonInnerHTML);

    });

}


document.addEventListener("keypress", function(event) {

    makesound(event.key);
    buttonanimation(event.key);
});

function makesound(key) {
    
switch (key) {
    case "w" :
        var audio1 = new Audio("sounds/crash.mp3");
    audio1.play();
        break;
    case "a" :
        var audio2 = new Audio("sounds/kick-bass.mp3");
    audio2.play();

    case "s" :
        var audio3 = new Audio("sounds/snare.mp3");
    audio3.play();

    case "d" :
        var audio4 = new Audio("sounds/tom-1.mp3");
    audio4.play();

    case "j" :
        var audio5 = new Audio("sounds/tom-2.mp3");
    audio5.play();

    case "k" :
        var audio6 = new Audio("sounds/tom-3.mp3");
    audio6.play();

    case "l" :
        var audio7 = new Audio("sounds/tom-4.mp3");
    audio7.play();

    default: console.log(key);
        break;

}
}

function buttonanimation(currentkey) {

    var activebutton = document.querySelector("." + currentkey);

    activebutton.classList.add("pressed");

    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}