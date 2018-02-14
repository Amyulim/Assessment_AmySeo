var menuP = document.getElementById("menu");

document.getElementById("open").addEventListener("click", function (){
//    console.log("openButtonClicked")
    menuP.style.left="0px";
});

document.getElementById("close").addEventListener("click", function (){

    menuP.style.left="-110px";
});
document.getElementById("makeBG").addEventListener("click", function () {
     document.getElementById("bg").style.backgroundImage = zoomBG.backgroundImage;
    
});

document.getElementById("reset").addEventListener("click", function () {
     document.getElementById("bg").style.backgroundImage = "none";
    
});

document.getElementById("showApp").addEventListener("click", function () {
     document.getElementById("app1").style.display = "block";
    
});
document.getElementById("hideApp").addEventListener("click", function () {
     document.getElementById("app1").style.display = "none";
    
});
document.getElementById("bgNum").addEventListener("change", function () {
    var CurrentNum = parseInt(bgNum.value);
    
    if(CurrentNum > 12 || CurrentNum < 1) {
        alert ("Doesn't exist!");
    } else {
        document.getElementById("bg").style.backgroundImage = "url(img/i"+CurrentNum+".jpg)";
    }
    
});