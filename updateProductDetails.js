// getting the clicked page data from localstorage, because we have store the data in localstorage
const clickedProductData = JSON.parse(localStorage.getItem('currentProduct'));

//for single product page 
// getting all the elements whose data is to be changed
let product_image = document.getElementById('MainImg');
let product_title = document.getElementById('main_product_title');
let product_price = document.getElementById('main_product_price');
// manipulating the data
product_image.src = clickedProductData.product_src;
product_title.innerText = clickedProductData.product_name;
product_price.innerText = clickedProductData.product_price;
