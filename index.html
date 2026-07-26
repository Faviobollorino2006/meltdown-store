document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".product-grid");
    const filterButtons = document.querySelectorAll(".category-filters button");

    if (!grid) return;

    function renderProducts(filter = "todo") {
        grid.innerHTML = "";

        const filtered = filter === "todo" 
            ? productsData 
            : productsData.filter(p => p.categoria === filter);

        filtered.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.setAttribute("data-category", product.categoria);

            const msg = encodeURIComponent(`Hola, vengo de la página web y quiero hacer un pedido de MELTDOWN: ${product.nombre}`);
            const waLink = `https://wa.me/584129873719?text=${msg}`;

            card.innerHTML = `
                <div class="product-image-container ${product.agotado ? 'sold-out' : ''}">
                    <img src="${product.imagen}" alt="${product.nombre}" onerror="this.src='assets/meltdown_logo.jpg'">
                    ${product.agotado ? '<span class="sold-out-badge">AGOTADO</span>' : ''}
                </div>
                <h3>${product.nombre}</h3>
                <p class="price">${product.precio}</p>
                <a href="${product.agotado ? '#' : waLink}" class="whatsapp-btn ${product.agotado ? 'disabled' : ''}" target="_blank" rel="noopener noreferrer">
                    ${product.agotado ? 'Agotado' : 'Pedir por WhatsApp'}
                </a>
            `;
            grid.appendChild(card);
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderProducts(btn.getAttribute("data-filter"));
        });
    });

    renderProducts();
});