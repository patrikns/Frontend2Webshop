//methods for confirming the order by filling out form

function placeOrder() {
    //when "Beställ"-button is clicked, saves values from form and sends them to validation method
    let name = document.getElementById("name").value,
        phone = document.getElementById("phone").value,
        email = document.getElementById("email").value,
        address = document.getElementById("address").value,
        city = document.getElementById("city").value;

    if (!validateForm(name, phone, email, address, city)) {
        return false;
    }
    else {
        alert("Tack för din beställning!");
    }
}

function validateForm(name, phone, email, address, city) {
    //validates that no fields are empty 
    if (!name || !phone || !email || !address || !city) {
        alert("Vänligen fyll i alla fält")
        return false;
    }
    return true;
}