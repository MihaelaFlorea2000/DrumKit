
// Detecting button press

var buttons = document.querySelectorAll(".drum");
var sound;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        playSound(this.innerHTML);
        btnAnimation(this.innerHTML);
    });
}

// Detecting keyboard press
document.addEventListener("keydown", function(event){
    playSound(event.key);
    btnAnimation(event.key);
})

// Play sound
function playSound(key) {
    switch (key) {
        case "w":
            sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":
            sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "k":
            sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "l":
            sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        default:
            console.log(key);
    }
}

function btnAnimation(key) {
    var activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");

    // Delay of 0.1 sec
    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100);

}


