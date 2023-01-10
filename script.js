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
var smallimg = document.getElementsByClassName("small-img");
const arrayofsmallimg = Array.from(smallimg);
arrayofsmallimg.forEach(img => {
    img.addEventListener("click", function () {
        MainImg.src = img.src;
    });
});


var pimages = document.getElementsByClassName("imgs");
const arrayofpimages = Array.from(pimages);
arrayofpimages.forEach(img => {
    img.addEventListener("click", function () {

        let dataToPass = {
            product_src : img.src,
            product_name : img.parentElement.children[1].children[1].innerText,     // selecting product name from the page
            product_price: img.parentElement.children[1].children[3].innerText      // selecting product price from the page
        }

        localStorage.setItem('currentProduct', JSON.stringify(dataToPass));

        location.href = "sproduct.html";    // redirecting to the sproduct page

        // Ssrc=img.src;
        // var httpRequest = new XMLHttpRequest();
        // httpRequest.open("GET","file:///C:/Users/admin/Documents/Desktop/e-commerce-website/website/sproduct.html");
        // httpRequest.send(Ssrc);
        //  MainImg.src=Ssrc;
    });
});
