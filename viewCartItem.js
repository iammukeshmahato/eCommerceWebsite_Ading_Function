let cartTable = document.querySelector("#cartItems");

if (localStorage.getItem('myCart') == null || localStorage.getItem('myCart').length == 0) {
    cartTable.innerHTML = `<tr colspan=5>
                            <td>No Items In Cart</td>
                        </tr>`;
} else {
    items = JSON.parse(localStorage.getItem('myCart'));
    let tbody = "";
    for (item of items) {
        item = JSON.parse(item);
        tbody += `<tr>
                        <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                        <td><img src="${item.product_image}"></td>
                        <td>${item.product_title}</td>
                        <td>${item.product_price}</td>
                        <td><input type="number" value="1"min="1"></td>
                        <td>$65</td>
                    </tr>`;
    }

    cartTable.innerHTML = tbody;
}