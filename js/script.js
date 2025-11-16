/*******************************
LOGIN FUNCTION
 *******************************/
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMsg = document.getElementById("errorMsg");

        const correctEmail = "naylazalfa12@gmail.com";
        const correctPassword = "24090017";

        if (email === "" || password === "") {
            errorMsg.textContent = "Email dan password harus di isi";
            return;
        }

        if (email !== correctEmail) {
            errorMsg.textContent = "Email tidak terdaftar!";
            return;
        }

        if (password !== correctPassword) {
            errorMsg.textContent = "Password salah!";
            return;
        }

        alert("Login berhasil!");
        window.location.href = "dashboard.html";
    });
}


/*******************************
DASHBOARD SUMMARY
 *******************************/
const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

if (document.getElementById("totalProducts")) {
    document.getElementById("totalProducts").textContent = summary.totalProducts;
    document.getElementById("totalSales").textContent = summary.totalSales;
    document.getElementById("totalRevenue").textContent =
        "Rp " + summary.totalRevenue.toLocaleString();
}


/*******************************
BUTTON KE HALAMAN PRODUK
 *******************************/
const btnProducts = document.getElementById("btnProducts");
if (btnProducts) {
    btnProducts.addEventListener("click", () => {
        window.location.href = "products.html";
    });
}


/*******************************
DATA PRODUK
 *******************************/
const products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

const productTable = document.getElementById("productTable");

if (productTable) {
    renderProducts();
}


/*******************************
SORT SYSTEM FINAL
 *******************************/
let nameSortAsc = true;

function toggleSortMenu() {
    const menu = document.getElementById("sortMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function (e) {
    const btn = document.querySelector(".sort-by-btn");
    const menu = document.getElementById("sortMenu");

    if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
    }
});


/*******************************
SORT NAME A-Z / Z-A
 *******************************/
function toggleSortName() {
    const sortText = document.getElementById("sortText");
    const sortIcon = document.getElementById("sortIcon");
    const iconMenu = document.getElementById("sortIconMenu");

    if (nameSortAsc) {
        products.sort((a, b) => a.name.localeCompare(b.name));
        sortText.textContent = "Name (A - Z)";
        sortIcon.textContent = "🔼";
        iconMenu.textContent = "🔼";
    } else {
        products.sort((a, b) => b.name.localeCompare(a.name));
        sortText.textContent = "Name (Z - A)";
        sortIcon.textContent = "🔽";
        iconMenu.textContent = "🔽";
    }

    nameSortAsc = !nameSortAsc;
    renderProducts();
    toggleSortMenu();
}


/*******************************
SORT PRICE LOW
 *******************************/
function sortPriceLow() {
    products.sort((a, b) => a.price - b.price);

    document.getElementById("sortText").textContent = "Harga (Termurah)";
    document.getElementById("sortIcon").textContent = "";
    document.getElementById("sortIconMenu").textContent = "";

    renderProducts();
    toggleSortMenu();
}


/*******************************
SORT PRICE HIGH
 *******************************/
function sortPriceHigh() {
    products.sort((a, b) => b.price - a.price);

    document.getElementById("sortText").textContent = "Harga (Termahal)";
    document.getElementById("sortIcon").textContent = "";
    document.getElementById("sortIconMenu").textContent = "";

    renderProducts();
    toggleSortMenu();
}


/*******************************
RENDER PRODUK
 *******************************/
function renderProducts() {
    productTable.innerHTML = "";

    products.forEach((p, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${p.name}</td>
            <td>Rp ${p.price.toLocaleString()}</td>
            <td>${p.stock}</td>
            <td>
                <button class="btn-edit" onclick="editProduct('${p.name}')">🖊️ Edit</button>
                <button class="btn-delete" onclick="deleteProduct(${index})">🧹 Hapus</button>
            </td>
        `;

        productTable.appendChild(row);
    });
}


/*******************************
EDIT PRODUK
 *******************************/
function editProduct(name) {
    alert("Edit produk: " + name);
}


/*******************************
HAPUS PRODUK
 *******************************/
function deleteProduct(index) {
    if (confirm("Yakin hapus produk ini?")) {
        products.splice(index, 1);
        renderProducts();
    }
}
