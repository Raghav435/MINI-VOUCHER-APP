
// API:- https://masai-vouchers-api.herokuapp.com/api/vouchers

let myMoney = JSON.parse(localStorage.getItem("user"));
console.log(myMoney);

 let money = document.querySelector('#wallet_balance').append(myMoney[0].amount)

//  console.log(money);

let myRemain = JSON.parse(localStorage.getItem("Remain")) || [];
    console.log(myRemain);
    document.getElementById("remain_balance").append(myRemain);



let myData = JSON.parse(localStorage.getItem("purchase")) ||[];

let myVouchers = async () =>{

    const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

    try{
        let res = await fetch(url);

        let data = await res.json();

        console.log(data[0].vouchers);
        Append(data[0].vouchers);

    }catch(err){
        console.log('err',err);
    }
}

myVouchers();

const Append = (data) =>{

    // data.forEach(({vouchers: {image} , vouchers: {name}, vouchers : {price}})=>{

    data.forEach(function(ele){

        let voucher = document.getElementById("voucher_list");

        let div = document.createElement("div");
        div.setAttribute("id", "divData")

        let image = document.createElement("img");
        image.src = ele.image;

        let name = document.createElement("h3");
        name.innerText = ele.name;

        let price = document.createElement("p");
        price.innerText = ele.price;

        let btn = document.createElement("button");
        btn.innerText = "Buy";
        btn.setAttribute("class","buy_voucher");
        btn.addEventListener("click", function(){
            buyBouchers(ele);
        })

        div.append(image, name, price, btn);
        voucher.append(div);
        
    })
}

let buyBouchers = (ele)=>{
    console.log(ele);
    console.log((myMoney[0].amount));
    myData.push(ele);
    localStorage.setItem("purchase",JSON.stringify(myData));

    if((myMoney[0].amount > ele.price)){
        alert("Hurray! purchase successful");
        var remainingValance = myMoney[0].amount-ele.price;
        console.log(remainingValance);
        localStorage.setItem("Remain",JSON.stringify(remainingValance))
    }else{
        alert("Sorry! insufficient balance")
    }
    
    // window.location.reload();
}