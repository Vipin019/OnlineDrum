document.getElementById("fullScreen").addEventListener("click", function(){
        document.getElementsByTagName("nav")[0].style.display="none";
        document.getElementById("container").style.marginTop="6rem";
});


for(var i=0;i<13;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        n9(this.innerHTML);
    });
}
document.addEventListener("keypress", function(event){
    n9(event.key);
});
function n9(key) {
    switch (key) {
        case "9":
            var audio = new Audio("sounds/9.mp3");
            audio.play();
            break;
        case "8":
            var audio = new Audio("sounds/8.mp3");
            audio.play();
            break;
        case "7":
            var audio = new Audio("sounds/7.mp3");
            audio.play();
            break;
        case "6":
            var audio = new Audio("sounds/6.mp3");
            audio.play();
            break;
        case "5":
            var audio = new Audio("sounds/5.mp3");
            audio.play();
            break;
        case "4":
            var audio = new Audio("sounds/4.mp3");
            audio.play();
            break;
            case "0":
            var audio = new Audio("sounds/0.mp3");
            audio.play();
            break;
        
        case "u":
            var audio = new Audio("sounds/9.mp3");
            audio.play();
            break;
        case "i":
            var audio = new Audio("sounds/8.mp3");
            audio.play();
            break;
        case "o":
            var audio = new Audio("sounds/7.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/6.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/5.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/4.mp3");
            audio.play();
            break;
        case " ":
            var audio = new Audio("sounds/0.mp3");
            audio.play();
            break;
        case "w":
            var audio = new Audio("sounds/w.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("sounds/e.mp3");
            audio.play();
            break;
        case "r":
            var audio = new Audio("sounds/r.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/s.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/d.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/f.mp3");
            audio.play();
            break;
        case "q":
            var audio = new Audio("sounds/6.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/5.mp3");
            audio.play();
            break;
        case "z":
            var audio = new Audio("sounds/4.mp3");
            audio.play();
            break;
            case "x":
            var audio = new Audio("sounds/0.mp3");
            audio.play();
            break;
        
        case "c":
            var audio = new Audio("sounds/9.mp3");
            audio.play();
            break;
        case "v":
            var audio = new Audio("sounds/8.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sounds/7.mp3");
            audio.play();
            break;
        case "n":
            var audio = new Audio("sounds/6.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("sounds/5.mp3");
            audio.play();
            break;
        case "1":
            var audio = new Audio("sounds/4.mp3");
            audio.play();
            break;
        case " ":
            var audio = new Audio("sounds/0.mp3");
            audio.play();
            break;
        case "2":
            var audio = new Audio("sounds/w.mp3");
            audio.play();
            break;
        case "3":
            var audio = new Audio("sounds/e.mp3");
            audio.play();
            break;
        case ".":
            var audio = new Audio("sounds/r.mp3");
            audio.play();
            break;
        case "y":
            var audio = new Audio("sounds/s.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("sounds/d.mp3");
            audio.play();
            break;
        case "t":
            var audio = new Audio("sounds/s.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("sounds/w.mp3");
            audio.play();
            break;
        case "W":
            var audio = new Audio("sounds/w.mp3");
            audio.play();
            break;
        case "E":
            var audio = new Audio("sounds/e.mp3");
            audio.play();
            break;
        case "R":
            var audio = new Audio("sounds/r.mp3");
            audio.play();
            break;
        case "S":
            var audio = new Audio("sounds/s.mp3");
            audio.play();
            break;
        case "D":
            var audio = new Audio("sounds/d.mp3");
            audio.play();
            break;
        case "F":
            var audio = new Audio("sounds/f.mp3");
            audio.play();
            break;
    
        default:
            var audio = new Audio("sounds/f.mp3");
            audio.play();
            break;
    }
}