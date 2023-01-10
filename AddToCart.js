let addToCartBtn = document.getElementById("addToCart");

if (localStorage.getItem('myCart') == null || localStorage.getItem('myCart').length == 0) {
    insertToCart = [];
} else {
    insertToCart = JSON.parse(localStorage.getItem('myCart'))
}

addToCartBtn.addEventListener('click', () => {

    let product_image = document.querySelector("#MainImg").src;
    let product_title = document.querySelector("#main_product_title").innerText;
    let product_price = document.querySelector("#main_product_price").innerText;
    let product_size = document.querySelector("#size").value;
    let quantity = document.querySelector("#quantity").value;

    let dataToAdd = {
        product_image: product_image,
        product_title: product_title,
        product_price: product_price,
        product_size: product_size,
        product_quantity: quantity,
        subtotal: product_price.slice(1,) * quantity
    }

    insertToCart.push(JSON.stringify(dataToAdd));
    localStorage.setItem('myCart', JSON.stringify(insertToCart));
    alert("Item added to the cart");
});