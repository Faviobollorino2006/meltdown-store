const productsData = [
    {
        nombre: "SOLITARIO CRUZ (ARETES/ZARCILLO)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/solitario-cruz.jpg",
        agotado: false
    },
    {
        nombre: "CROW HEADS (ARETES)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/crow-heads.jpg",
        agotado: false
    },
    {
        nombre: "SKULLS (ARETES)",
        precio: "$3.50",
        categoria: "accesorios",
        imagen: "assets/skulls.jpg",
        agotado: false
    },
    {
        nombre: "VAMP'S COFFIN (ARETES)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/vamps-coffin.jpg",
        agotado: false
    },
    {
        nombre: "SWORDS (ARETES)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/swords.jpg",
        agotado: false
    },
    {
        nombre: "CROSSES (ARETES)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/crosses.jpg",
        agotado: true
    },
    {
        nombre: "DAGGER (ARETES)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/dagger.jpg",
        agotado: false
    },
    {
        nombre: "GOTH BAT (ARETES)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/goth-bat.jpg",
        agotado: true
    },
    {
        nombre: "GANCHITOS DE HOJILLAS",
        precio: "$2.00",
        categoria: "accesorios",
        imagen: "assets/ganchitos-hojillas.jpg",
        agotado: false
    },
    {
        nombre: "GANCHITOS DE CRUZ TACHAS",
        precio: "$2.00",
        categoria: "accesorios",
        imagen: "assets/ganchitos-cruz-tachas.jpg",
        agotado: false
    },
    {
        nombre: "GANCHITOS DE HUESO",
        precio: "$2.00",
        categoria: "accesorios",
        imagen: "assets/ganchitos-hueso.jpg",
        agotado: false
    },
    {
        nombre: "ESTRELLITAS / GANCHITOS DE ESTRELLAS (X4)",
        precio: "$2.50",
        categoria: "accesorios",
        imagen: "assets/estrellitas-ganchitos.jpg",
        agotado: false
    },
    {
        nombre: "ANILLO ATAUD (AJUSTABLE)",
        precio: "$4.00",
        categoria: "anillos",
        imagen: "assets/anillo-ataud.jpg",
        agotado: false
    },
    {
        nombre: "ANILLOS POR TALLA Y AJUSTABLES",
        precio: "$2.50",
        categoria: "anillos",
        imagen: "assets/anillos-talla-ajustables.jpg",
        agotado: false
    }
];

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