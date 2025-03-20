let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(productName + " đã thêm vào giỏ hàng!");
}

function showCart() {
    let cartContent = document.getElementById("cart-content");
    cartContent.innerHTML = "<h3>Giỏ Hàng</h3>";
    if (cart.length === 0) {
        cartContent.innerHTML += "<p>Giỏ hàng trống.</p>";
        return;
    }
    let total = 0;
    cart.forEach(item => {
        cartContent.innerHTML += `<p>${item.name} - ${item.price.toLocaleString()}đ</p>`;
        total += item.price;
    });
    cartContent.innerHTML += `<h4>Tổng: ${total.toLocaleString()}đ</h4>`;
}
