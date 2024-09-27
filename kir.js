let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '<h3>Isi Keranjang:</h3>';
    
    cart.forEach(item => {
        cartDiv.innerHTML += `<p>${item.name} - Rp. ${item.price}</p>`;
    });
    
    document.getElementById('total').innerHTML = `<strong>Total: Rp. ${total}</strong>`;
}
 