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
// var MainImg = document.getElementById("MainImg");
// var smallimg = document.getElementsByClassName("small-img");
// const arrayofsmallimg = Array.from(smallimg);
// arrayofsmallimg.forEach(img => {
//     img.addEventListener("click", function () {
//         MainImg.src = img.src;
//     });
// });


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
    });
});


// checking if add to cart button is clicked.
var cart=document.getElementsByClassName("cart");
const arrayofcart= Array.from(cart);
arrayofcart.forEach(product=>{
    product.addEventListener("click",function(e){
        let dataToPass= {
            product_src : product.parentElement.parentElement.children[0].src,
            product_title : product.parentElement.parentElement.children[1].children[1].innerText,
            product_price : product.parentElement.parentElement.children[1].children[3].innerText
               }
        localStorage.setItem('addedProduct',JSON.stringify(dataToPass));
        location.href = "cart.html";
        
        // let xhr = new XMLHttpRequest();
        // xhr.open("POST","cart.html", true);
        // xhr.onload = ()=>{
        //     if (xhr.responseText.slice(-2)!=="OK") {
        //         console.log("error");
        //     } else {
        //         console.log("Okay");
        //     }
        // };
        // xhr.send();

        // e.preventDefault();
      
    });
});
