var zoomBG = document.getElementById("zoom").style;

document.getElementById("bg1").addEventListener("click", function () {
    document.getElementById("ch1").style.backgroundImage="url(img/i1.jpg)";
    document.getElementById("ch2").style.backgroundImage="url(img/i2.jpg)";
    document.getElementById("ch3").style.backgroundImage="url(img/i3.jpg)";
    
});

document.getElementById("bg2").addEventListener("click", function () {
    document.getElementById("ch1").style.backgroundImage="url(img/i4.jpg)";
    document.getElementById("ch2").style.backgroundImage="url(img/i5.jpg)";
    document.getElementById("ch3").style.backgroundImage="url(img/i6.jpg)";

       
 
});

document.getElementById("bg3").addEventListener("click", function () {
    document.getElementById("ch1").style.backgroundImage="url(img/i7.jpg)";
    document.getElementById("ch2").style.backgroundImage="url(img/i8.jpg)";
    document.getElementById("ch3").style.backgroundImage="url(img/i9.jpg)";

});

document.getElementById("ch1").addEventListener("mouseenter", function () {
    zoomBG.backgroundImage = document.getElementById("ch1").style.backgroundImage;
});
document.getElementById("ch2").addEventListener("mouseenter", function () {
    zoomBG.backgroundImage = document.getElementById("ch2").style.backgroundImage;
});
document.getElementById("ch3").addEventListener("mouseenter", function () {
    zoomBG.backgroundImage = document.getElementById("ch3").style.backgroundImage;
})


document.getElementById("bg4").addEventListener("click", function () {
    document.getElementById("ch1").style.backgroundImage="url(img/i10.jpg)";
    document.getElementById("ch2").style.backgroundImage="url(img/i11.jpg)";
    document.getElementById("ch3").style.backgroundImage="url(img/i12.jpg)";
    
    document.getElementById("ch1").addEventListener("mouseenter", function () {
   zoomBG.backgroundImage = "url(img/i10.jpg)"
   
});
    document.getElementById("ch2").addEventListener("mouseenter", function () {
   zoomBG.backgroundImage = "url(img/i11.jpg)"
   
});
    document.getElementById("ch3").addEventListener("mouseenter", function () {
   zoomBG.backgroundImage = "url(img/i12.jpg)"
   
});
});


document.getElementById("zoom").addEventListener("click", function () {
    document.getElementById("zoomcontrols").style.display="block";
});


var x = 100;
var y = 70;
var xPlus = 10;
var yPlus = 7;

document.getElementById("plus").addEventListener("click", function () {
    
       if(x < 91 || y <64 ) {
            x += xPlus; 
            y += yPlus;
           
       } else if (x > 11 || y > 8 ) {
           
       }
       document.getElementById("zoom").style.width= x + "%";
       document.getElementById("zoom").style.height= y + "%";                                
    .0

});

document.getElementById("minus").addEventListener("click", function () {
    
       if(x < 91 || y <64 ) {
           
           
       } else if (x > 11 || y > 8 ) {
            x -= xPlus; 
            y -= yPlus;
           
       }
       document.getElementById("zoom").style.width= x + "%";
       document.getElementById("zoom").style.height= y + "%";

});


var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var ch3 = document.getElementById("ch3");

document.getElementById("prev").addEventListener("click", function () {
     if(ch1.style.backgroundImage == 'url("img/i1.jpg")') {
        ch1.style.backgroundImage = 'url("img/i10.jpg")';
        ch2.style.backgroundImage = 'url("img/i11.jpg")';
        ch3.style.backgroundImage = 'url("img/i12.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("img/i4.jpg")') {
        ch1.style.backgroundImage = 'url("img/i1.jpg")';
        ch2.style.backgroundImage = 'url("img/i2.jpg")';
        ch3.style.backgroundImage = 'url("img/i3.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("img/i7.jpg")') {
        ch1.style.backgroundImage = 'url("img/i4.jpg")';
        ch2.style.backgroundImage = 'url("img/i5.jpg")';
        ch3.style.backgroundImage = 'url("img/i6.jpg")'; 
    }
    else if(ch1.style.backgroundImage == 'url("img/i10.jpg")') {
        ch1.style.backgroundImage = 'url("img/i7.jpg")';
        ch2.style.backgroundImage = 'url("img/i8.jpg")';
        ch3.style.backgroundImage = 'url("img/i9.jpg")'; 
    }
        
});


document.getElementById("next").addEventListener("click", function () {
     if(ch1.style.backgroundImage == 'url("img/i1.jpg")') {
        ch1.style.backgroundImage = 'url("img/i4.jpg")';
        ch2.style.backgroundImage = 'url("img/i5.jpg")';
        ch3.style.backgroundImage = 'url("img/i6.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("img/i4.jpg")') {
        ch1.style.backgroundImage = 'url("img/i7.jpg")';
        ch2.style.backgroundImage = 'url("img/i8.jpg")';
        ch3.style.backgroundImage = 'url("img/i9.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("img/i7.jpg")') {
        ch1.style.backgroundImage = 'url("img/i10.jpg")';
        ch2.style.backgroundImage = 'url("img/i11.jpg")';
        ch3.style.backgroundImage = 'url("img/i12.jpg")'; 
    }
    else if(ch1.style.backgroundImage == 'url("img/i10.jpg")') {
        ch1.style.backgroundImage = 'url("img/i1.jpg")';
        ch2.style.backgroundImage = 'url("img/i2.jpg")';
        ch3.style.backgroundImage = 'url("img/i3.jpg")'; 
    }
        
});






