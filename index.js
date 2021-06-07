//clicking
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener('click', function () {

    var buttonInnerHTML = this.innerHTML;
    pressKeySound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
};

document.addEventListener("keydown", function (event) {
  pressKeySound(event.key);
  buttonAnimation(event.key);
});

function pressKeySound(key) {
  switch (key) {
    case "w":
      var audioW = new Audio('sounds/tom-1.mp3');
      audioW.play();
      break;

    case "a":
      var audioA = new Audio('sounds/tom-2.mp3');
      audioA.play();
      break;

    case "s":
      var audioS = new Audio('sounds/tom-3.mp3');
      audioS.play();
      break;

    case "d":
      var audioD = new Audio('sounds/tom-4.mp3');
      audioD.play();
      break;

    case "j":
      var audioJ = new Audio('sounds/snare.mp3');
      audioJ.play();
      break;

    case "k":
      var audioK = new Audio('sounds/kick-bass.mp3');
      audioK.play();
      break;

    case "l":
      var audioL = new Audio('sounds/crash.mp3');
      audioL.play();
      break;

    default:
      console.log('No.');
  }
}

function buttonAnimation(currentKey) {
  var buttonActive = document.querySelector('.' + currentKey);
  buttonActive.classList.add('pressed');

  setTimeout(function () {
    buttonActive.classList.remove('pressed');
  }, 120);
  
};