// for cart page 
const addedProductData = JSON.parse(localStorage.getItem('addedProduct'));

//creating tr
var tr= document.createElement("tr");

// creating 6 table data (td)
for(i=0;i<=5;i++){
    var td = document.createElement("td");
    tr.appendChild(td);
}
var i = document.createElement("i");
i.classList.add("far");
i.classList.add("fa-times-circle");
i.classList.add("delete");
tr.children[0].appendChild(i);

var img =  document.createElement("img");
img.src=addedProductData.product_src;
tr.children[1].appendChild(img);

var details = document.createTextNode(addedProductData.product_title);
tr.children[2].appendChild(details);

var price = document.createTextNode(addedProductData.product_price);
tr.children[3].appendChild(price);

var quantity = document.createElement("input");
quantity.type="number";
quantity.min="1";
quantity.value="1";
tr.children[4].appendChild(quantity);

var subtotal = document.createTextNode(addedProductData.product_price);
tr.children[5].appendChild(subtotal);

var tablebody = document.getElementById("tbody");
tablebody.appendChild(tr);

// updating card total of another table as the price of it 
let cardTotals = document.getElementsByClassName("cardTotals");
cardTotals[0].innerText=addedProductData.product_price;
cardTotals[1].innerText=addedProductData.product_price;




//for delete button in table 
let tbody = document.getElementsByTagName("tbody")[0];
let tablerows = tbody.children;
let arrayoftr= Array.from(tablerows);

let delbtns = document.getElementsByClassName("delete");
let arrayofdel = Array.from(delbtns);
arrayofdel.forEach(del => {
    del.addEventListener("click", function () {
         del.parentElement.parentElement.style.display="none";
       
    });
});



// to change total amount (subT) when quantity (qty) is changed
update();
for (const tr of arrayoftr) {
    let img = tr.children[1].children[0];
    let pro = tr.children[2];
    let pri = tr.children[3];
    let qt = tr.children[4].children[0];
    let subT = tr.children[5];

  qt.addEventListener("change",function(){
        let qty = parseInt(qt.value);
        let p = parseInt(pri.innerText.slice(1));
        let total = parseInt(eval(qty*p));
        subT.innerText= "$"+total;
        update();
    });
}
// for updating card total of another table as the total of it 
function update (){
    var t=0;
    for(i=0;i<arrayoftr.length;i++){
    var cardSubTotals = parseInt(arrayoftr[i].children[5].innerText.slice(1));
    t = t + cardSubTotals ;
    }
    let cardTotals = document.getElementsByClassName("cardTotals");
    cardTotals[0].innerText="$"+t;
    cardTotals[1].innerText="$"+t;
}
