for (var i = 0; i < 7; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', handleC);
  function handleC() {
    var buttonN = this.innerHTML;
   makeSound(buttonN);
   drumA(buttonN);
  }
}
document.addEventListener("keydown", keyD );
function keyD()
{
makeSound(event.key);
drumA(event.key);
}

function makeSound(key)
{
  switch (key) {
    case 'f':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case 'l':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
  }
}
function drumA(key)
{
  var buttomA=document.querySelector("."+ key);

  buttomA.classList.add("pressed");
  setTimeout(
    function()
  {
     buttomA.classList.remove("pressed");
  },100);


}
