const products = [
    { name: "Laptop", price: 500000, stock: 5 },
    { name: "Phone", price: 250000, stock: 0 },
    { name: "Keyboard", price: 15000, stock: 3 }
];

function renderProducts() {
    const container = document.querySelector("#products");

    container.innerHTML = "";

    products.forEach(function(product) {
        const card = document.createElement("div");

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = new Intl.NumberFormat("en-RW", {
            style: "currency",
            currency: "RWF",
            maximumFractionDigits: 0
        }).format(product.price);

        card.appendChild(name);
        card.appendChild(price);

        if (product.stock === 0) {
            const badge = document.createElement("span");
            badge.textContent = "Out of stock";
            badge.className = "badge";
            card.appendChild(badge);
        }

        container.appendChild(card);
    });
}

renderProducts();