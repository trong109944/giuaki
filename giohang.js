const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    cartList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Giỏ hàng trống!</p>";
        totalPrice.textContent = "$0";
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})">Xoá</button>
        `;

        cartList.appendChild(div);

        total += parseFloat(item.price.replace("$", ""));
    });

    totalPrice.textContent = "$" + total.toFixed(2);
}

function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();
