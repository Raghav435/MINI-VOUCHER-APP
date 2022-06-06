let myArr = JSON.parse(localStorage.getItem("user")) || [];

function info(e){
    e.preventDefault();
    // document.getElementById('submit').innerHTML = null;


    let Obj = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        address : document.getElementById("address").value,
        amount : document.getElementById("amount").value,
    }

    myArr.push(Obj);
    console.log(Obj);

    localStorage.setItem("user",JSON.stringify(myArr));
    console.log(myArr);
    window.location.reload();
}