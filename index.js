//alert("penis")

var woohoo = new Audio('woohoo.m4a');
var mrsRight = new Audio('mrsRight.mp3');
mrsRight.volume = 0.2

function mrsRightMode(){
    alert("are you sure")
    mrsRight.play()
    
}

setTimeout(mrsRightSong,1000)

function removeAmara(){
        document.getElementById("happyAmara").style.visibility = "hidden";
    }

function giveLove() {
    document.getElementById("happyAmara").style.visibility = "visible";
    woohoo.play();
    window.setTimeout(removeAmara,2500)
}