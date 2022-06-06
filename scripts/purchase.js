
let myPurchase = JSON.parse(localStorage.getItem("purchase"));
console.log(myPurchase);

let myBalance = JSON.parse(localStorage.getItem("Remain"));
console.log(myBalance);

document.querySelector('#balance').append(myBalance)

myPurchase.map(function(ele){

    let purchase_div = document.getElementById("purchased_vouchers");

    let div = document.createElement("div");
    div.setAttribute("id", "divData")

    let image = document.createElement("img");
    image.src = ele.image;

    let name = document.createElement("h3");
    name.innerText = ele.name;

    let price = document.createElement("p");
    price.innerText = ele.price;

    div.append(image, name, price);
    purchase_div.append(div);

})