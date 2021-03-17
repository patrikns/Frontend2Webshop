function getItemById(id) {
    //gets the clicked item from API
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(resp => resp.json())
        .then(item => addToCart(item))
        .catch(err => console.error(err));
}

function addToCart(item) {
    //adds the clicked item to localStorage key "cart"
    item["count"] = 1;

    if (localStorage.getItem("cart") === null) {
        var cart = [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    else {
        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.forEach(cartItem => {
            if (item.id == cartItem.id) {
                cartItem.count++;
                return false;
            }           
        });
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    alert(`Produkten ${item.name} tillagd i varukorgen`)
}