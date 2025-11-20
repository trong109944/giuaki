
const params = new URLSearchParams(window.location.search);
const keyword = params.get("search")?.toLowerCase() || "";

const cards = document.querySelectorAll(".menu-card");
let found = false;

cards.forEach(card => {
    const title = card.querySelector("h4").textContent.toLowerCase();

    if (!keyword || title.includes(keyword)) {
        card.style.display = "block";
        found = true;
    } else {
        card.style.display = "none";
    }
});

// không tìm thấy món thì dùng confirm báo và chuyển về trang chủ
if (!found) {
    setTimeout(() => {
        confirm("Không tìm thấy sản phẩm bạn cần!");
        window.location.href = "index.html";   
    }, 150);
}
//thêm vào giỏ hàng
document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".menu-card");
        const name = card.querySelector("h4").textContent;
        const price = card.querySelector(".price").textContent;

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name, price });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("🛒 Đã thêm vào giỏ: " + name);
    });
});

//thêm vào yêu thích
document.querySelectorAll(".add-fav").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".menu-card");
        const name = card.querySelector("h4").textContent;

        let fav = JSON.parse(localStorage.getItem("favorite")) || [];

        if (fav.includes(name)) {
            // xoá khỏi danh sách
            fav = fav.filter(item => item !== name);
            btn.classList.remove("active");
        } else {
            fav.push(name);
            btn.classList.add("active");
        }

        localStorage.setItem("favorite", JSON.stringify(fav));
    });
});
// Nút thêm vào giỏ
document.querySelectorAll(".add-cart").forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".menu-card");

        const name = card.querySelector("h4").innerText;
        const price = card.querySelector(".price").innerText;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name, price });

        localStorage.setItem("cart", JSON.stringify(cart));

        
        const oldHTML = btn.innerHTML;  
        btn.innerHTML = "✔ Đã thêm";
        btn.style.background = "#82cd47";

        
        setTimeout(() => {
            btn.innerHTML = oldHTML;  
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

