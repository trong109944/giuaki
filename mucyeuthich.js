const favList = document.getElementById("fav-list");

let fav = JSON.parse(localStorage.getItem("favorite")) || [];

function renderFav() {
    favList.innerHTML = "";

    if (fav.length === 0) {
        favList.innerHTML = "<p>Không có sản phẩm yêu thích!</p>";
        return;
    }

    fav.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "fav-item";

        div.innerHTML = `
            <h4>${item.name} - <span style="color:#FF8A00">${item.price}</span></h4>
            <button class="remove-btn" onclick="removeFav(${index})">Xoá</button>
        `;

        favList.appendChild(div);
    });
}

function removeFav(i) {
    fav.splice(i, 1);
    localStorage.setItem("favorite", JSON.stringify(fav));
    renderFav();
}

renderFav();
