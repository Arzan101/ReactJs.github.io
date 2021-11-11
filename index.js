var drumnumber = document.querySelectorAll(".drum").length;

for(var i=0; i<drumnumber; i++){

document.querySelectorAll("button")[i].addEventListener("click",
function()
     {
      var buttonInnerHTML= this.innerHTML;
       makeSound(buttonInnerHTML);
       animationButton(buttonInnerHTML);
      }
     );
}

document.addEventListener("keypress",function (event){
   makeSound(event.key);
   animationButton(event.key);
}
);

function makeSound(key){
    switch (key) {
        case "s":
          var tom1 = new Audio("music/tom-1.mp3");
          tom1.play();
            break;
        case "r":
          var tom2 = new Audio("music/tom-2.mp3");
          tom2.play();
            break;
        case "g":
          var tom3 = new Audio("music/tom-3.mp3");
          tom3.play();
            break;
        case "m":
          var tom4 = new Audio("music/tom-4.mp3");
          tom4.play();
            break;
        case "p":
          var kick = new Audio("music/kick-bass.mp3");
          kick.play();
            break;
        case "d":
          var snare = new Audio("music/snare.mp3");
          snare.play();
            break;
        case "n":
          var crash = new Audio("music/crash.mp3");
          crash.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
            break;
}
}
function animationButton(currentkey) {
 var animation = document.querySelector("."+currentkey)
 animation.classList.add("pressed");
 setTimeout(
   function(){
    animation.classList.remove("pressed");
   },
   200);
//  console.log(animation);
}