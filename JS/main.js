document.getElementById("myForm").addEventListener("submit", placeOrder);

function placeOrder () {
    let name = document.getElementById("name").value, 
    phone = document.getElementById("phone").value, 
    email = document.getElementById("email").value, 
    address = document.getElementById("address").value, 
    city = document.getElementById("city").value;

    if(!validateForm(name, phone, email, address, city)){
        return false;
    }

    var order = {
        name, phone, email, address, city
    }

    if(localStorage.getItem("orders") === null){
        var orders = [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
    }
    else{
        var orders = JSON.parse(localStorage.getItem("orders"));
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
    }

    document.getElementById("myForm").reset();
}

function validateForm (name, phone, email, address, city) {
    if(!name || !phone || !email || !address || !city){
        alert("Please fill in form!")
        return false;
    }
}