
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                block: "start"
            });
        }
    });
});
const searchInput = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-btn");

function goToMenu() {
    const keyword = searchInput.value.trim();

    if (keyword.length > 0) {
        window.location.href = "menu.html?search=" + encodeURIComponent(keyword);
    } else {
        window.location.href = "menu.html";
    }
}

// Click nút search hoặc nhấn Enter để search
searchBtn.addEventListener("click", goToMenu);

searchInput.addEventListener("keyup", function(e) {
    if (e.key === "Enter") goToMenu();
});

// Nút thêm vào giỏ hàng
document.querySelectorAll(".add-cart").forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".menu-card");

        const name = card.querySelector("h4").innerText;
        const price = card.querySelector(".price").innerText;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name, price });

        localStorage.setItem("cart", JSON.stringify(cart));

        const oldHTML = btn.innerHTML;  // 🛒
        btn.innerHTML = "✔ Đã thêm";
        btn.style.background = "#82cd47";

        setTimeout(() => {
            btn.innerHTML = oldHTML;  // 🛒
            btn.style.background = "#FFD45A";
        }, 1000);
    });

});
// Thêm vào giỏ hàng
document.querySelectorAll(".add-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".menu-card");

        const name = card.querySelector("h4").innerText;
        const price = card.querySelector(".price").innerText;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({ name, price });

        localStorage.setItem("cart", JSON.stringify(cart));

        btn.innerText = "✔";
        btn.style.background = "#82cd47";

        setTimeout(() => {
            btn.innerText = "🛒";
            btn.style.background = "#fff";
        }, 1000);
    });
});

// Thêm vào yêu thích 
document.addEventListener("DOMContentLoaded", () => {

    function showToast(message) {
        const toast = document.getElementById("toast");
        if (!toast) {
            console.log("TOAST:", message);
            return;
        }

        toast.innerText = message;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 1500);
    }

    // NÚT THÊM VÀO YÊU THÍCH
    const favButtons = document.querySelectorAll(".add-fav-btn");

    favButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".menu-card");
            if (!card) return;

            const name = card.querySelector("h4").innerText;
            const price = card.querySelector(".price").innerText;

            let favorite = JSON.parse(localStorage.getItem("favorite")) || [];

            favorite.push({ name, price });

            localStorage.setItem("favorite", JSON.stringify(favorite));

            
            showToast(`${name} đã được thêm vào mục yêu thích ❤️`);

          
            const oldContent = btn.innerText;
            btn.innerText = "✔";
            btn.style.background = "#82cd47";

            setTimeout(() => {
                btn.innerText = oldContent;  
                btn.style.background = "#fff";  
            }, 1000);
        });
    });

});
// Navbar thay đổi khi cuộn + mượt
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 30) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
