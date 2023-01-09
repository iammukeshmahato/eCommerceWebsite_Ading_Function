// for Nav bar 
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}

// for changing images 
var MainImg = document.getElementById("MainImg");
var smallimg= document.getElementsByClassName("small-img");
const arrayofsmallimg =Array.from(smallimg);
arrayofsmallimg.forEach(img => {
    img.addEventListener("click", function (){
        MainImg.src=img.src;
    });
});


var pimages=document.getElementsByClassName("imgs");
const arrayofpimages=Array.from(pimages);
arrayofpimages.forEach(img => {
    img.addEventListener("click", function (){
        Ssrc=img.src;
        var httpRequest = new XMLHttpRequest();
        httpRequest.open("GET","file:///C:/Users/admin/Documents/Desktop/e-commerce-website/website/sproduct.html");
        httpRequest.send(Ssrc);
         MainImg.src=Ssrc;
    });
});