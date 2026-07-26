const productsData = [
    // --- 0.50$ ---
    {
        nombre: "Estrellitas / Ganchitos de Estrellas (x4)",
        precio: "$0.50",
        categoria: "accesorios",
        imagen: "assets/estrellitas-ganchitos.jpg",
        agotado: false
    },

    // --- 2.00$ ---
    {
        nombre: "Ganchitos de Hueso",
        precio: "$2.00",
        categoria: "accesorios",
        imagen: "assets/ganchitos-hueso.jpg",
        agotado: false
    },
    {
        nombre: "Ganchitos de Cruz Tachas",
        precio: "$2.00",
        categoria: "accesorios",
        imagen: "assets/ganchitos-cruz-tachas.jpg",
        agotado: false
    },
    {
        nombre: "Ganchitos de Hojillas",
        precio: "$2.00",
        categoria: "accesorios",
        imagen: "assets/ganchitos-hojillas.jpg",
        agotado: false
    },

    // --- 2.50$ ---
    {
        nombre: "Anillos por talla y ajustables",
        precio: "$2.50",
        categoria: "anillos",
        imagen: "assets/anillos-talla-ajustables.jpg",
        agotado: false
    },

    // --- 4.00$ ---
    {
        nombre: "Goth Bat (Aretes)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/goth-bat.jpg",
        agotado: true
    },
    {
        nombre: "Dagger (Aretes)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/dagger.jpg",
        agotado: false
    },
    {
        nombre: "Crosses (Aretes)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/crosses.jpg",
        agotado: true
    },
    {
        nombre: "Swords (Aretes)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/swords.jpg",
        agotado: false
    },
    {
        nombre: "Vamp's Coffin (Aretes)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/vamps-coffin.jpg",
        agotado: false
    },
    {
        nombre: "Skulls (Aretes)",
        precio: "$3.50",
        categoria: "accesorios",
        imagen: "assets/skulls.jpg",
        agotado: false
    },
    {
        nombre: "Crow Heads (Aretes)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/crow-heads.jpg",
        agotado: false
    },
    {
        nombre: "Anillo Ataud (Ajustable)",
        precio: "$4.00",
        categoria: "anillos",
        imagen: "assets/anillo-ataud.jpg",
        agotado: false
    },
    {
        nombre: "Solitario Cruz (Aretes/Zarcillo)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/solitario-cruz.jpg",
        agotado: false
    },
    {
        nombre: "Spooky Scary Skeletons (Aretes)",
        precio: "$4.00",
        categoria: "accesorios",
        imagen: "assets/spooky-scary-skeletons.jpg",
        agotado: false
    },

    // --- 5.00$ ---
    {
        nombre: "Dark Cross (Collar)",
        precio: "$5.00",
        categoria: "accesorios",
        imagen: "assets/dark-cross.jpg",
        agotado: true
    },
    {
        nombre: "Red Stone (Collar)",
        precio: "$5.00",
        categoria: "accesorios",
        imagen: "assets/red-stone.jpg",
        agotado: false
    },
    {
        nombre: "Dripping Cross (Collar)",
        precio: "$5.00",
        categoria: "accesorios",
        imagen: "assets/dripping-cross.jpg",
        agotado: true
    },
    {
        nombre: "Rose Wired (Aretes)",
        precio: "$5.00",
        categoria: "accesorios",
        imagen: "assets/rose-wired.jpg",
        agotado: true
    },
    {
        nombre: "Red Guitar (Aretes)",
        precio: "$5.00",
        categoria: "accesorios",
        imagen: "assets/red-guitar.jpg",
        agotado: true
    },
    {
        nombre: "Victorian Cross (Aretes)",
        precio: "$5.00",
        categoria: "accesorios",
        imagen: "assets/victorian-cross-aretes.jpg",
        agotado: true
    },
    {
        nombre: "Anillos Polillas (Ajustables)",
        precio: "$5.00",
        categoria: "anillos",
        imagen: "assets/anillos-polillas.jpg",
        agotado: false
    },
    {
        nombre: "Stars (Collar)",
        precio: "$5.00",
        categoria: "accesorios",
        imagen: "assets/stars-collar.jpg",
        agotado: true
    },

    // --- 6.00$ ---
    {
        nombre: "Armour Ring",
        precio: "$6.00",
        categoria: "anillos",
        imagen: "assets/armour-ring.jpg",
        agotado: true
    },
    {
        nombre: "Guantes de Red",
        precio: "$6.00",
        categoria: "accesorios",
        imagen: "assets/guantes-red.jpg",
        agotado: false
    },
    {
        nombre: "Guantes de Esqueleto",
        precio: "$6.00",
        categoria: "accesorios",
        imagen: "assets/guantes-esqueleto.jpg",
        agotado: true
    },

    // --- 7.00$ ---
    {
        nombre: "Gothic Bat (Collar)",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/gothic-bat-collar.jpg",
        agotado: true
    },
    {
        nombre: "Bloody Bat",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/bloody-bat.jpg",
        agotado: false
    },
    {
        nombre: "Pentagram",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/pentagram.jpg",
        agotado: false
    },
    {
        nombre: "Cross",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/cross.jpg",
        agotado: false
    },
    {
        nombre: "Goth Heart",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/goth-heart.jpg",
        agotado: false
    },
    {
        nombre: "Dagger (Collar)",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/dagger-collar.jpg",
        agotado: true
    },
    {
        nombre: "Sun and Moon",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/sun-and-moon.jpg",
        agotado: false
    },
    {
        nombre: "Angelic Heart",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/angelic-heart.jpg",
        agotado: true
    },
    {
        nombre: "Monster High",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/monster-high.jpg",
        agotado: false
    },
    {
        nombre: "Bloody Heart",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/bloody-heart.jpg",
        agotado: false
    },
    {
        nombre: "Red Coffin",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/red-coffin.jpg",
        agotado: false
    },
    {
        nombre: "Spider Web",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/spider-web.jpg",
        agotado: false
    },
    {
        nombre: "Rose Cross",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/rose-cross.jpg",
        agotado: false
    },
    {
        nombre: "Big Star",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/big-star.jpg",
        agotado: false
    },
    {
        nombre: "Moth Necklace",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/moth-necklace.jpg",
        agotado: true
    },
    {
        nombre: "Spider",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/spider.jpg",
        agotado: true
    },
    {
        nombre: "Y2K Cross",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/y2k-cross.jpg",
        agotado: false
    },
    {
        nombre: "Victorian Cross (Collar)",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/victorian-cross-collar.jpg",
        agotado: false
    },
    {
        nombre: "Pinky Cross",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/pinky-cross.jpg",
        agotado: false
    },
    {
        nombre: "Pointed Cross",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/pointed-cross.jpg",
        agotado: false
    },
    {
        nombre: "Teal Cross",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/teal-cross.jpg",
        agotado: true
    },
    {
        nombre: "Blossom Cross",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/blossom-cross.jpg",
        agotado: false
    },
    {
        nombre: "Dripping Heart",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/dripping-heart.jpg",
        agotado: false
    },
    {
        nombre: "Silver Bullet",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/silver-bullet.jpg",
        agotado: false
    },
    {
        nombre: "Golden Bullet",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/golden-bullet.jpg",
        agotado: false
    },
    {
        nombre: "Locked Heart",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/locked-heart.jpg",
        agotado: false
    },
    {
        nombre: "Black Lover Cross",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/black-lover-cross.jpg",
        agotado: false
    },
    {
        nombre: "Red Lover Cross",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/red-lover-cross.jpg",
        agotado: false
    },
    {
        nombre: "Bucaneras Rosa y Negro",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/bucaneras-rosa-negro.jpg",
        agotado: false
    },
    {
        nombre: "Bucaneras Rosa y Blanco",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/bucaneras-rosa-blanco.jpg",
        agotado: false
    },
    {
        nombre: "Bucaneras Huesos Entrecruzados",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/bucaneras-huesos-entrecruzados.jpg",
        agotado: true
    },
    {
        nombre: "Bucaneras Huesos Blanco y Negro",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/bucaneras-huesos-blanco-negro.jpg",
        agotado: false
    },
    {
        nombre: "Bucaneras Rayas Blanco y Negro",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/bucaneras-rayas-blanco-negro.jpg",
        agotado: true
    },
    {
        nombre: "Medias Telaraña",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/medias-telarana.jpg",
        agotado: true
    },
    {
        nombre: "Medias Araña",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/medias-arana.jpg",
        agotado: true
    },
    {
        nombre: "Medias Murciélagos",
        precio: "$7.00",
        categoria: "accesorios",
        imagen: "assets/medias-murcielagos.jpg",
        agotado: false
    },

    // --- 8.00$ ---
    {
        nombre: "Pulseras 1 Hilera",
        precio: "$8.00",
        categoria: "accesorios",
        imagen: "assets/pulseras-1-hilera.jpg",
        agotado: false
    },
    {
        nombre: "Tachas Blanco y Negro (Pulsera 1H)",
        precio: "$8.00",
        categoria: "accesorios",
        imagen: "assets/tachas-blanco-negro-1h.jpg",
        agotado: false
    },

    // --- 10.00$ ---
    {
        nombre: "Goth Bat Cross",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/goth-bat-cross.jpg",
        agotado: false
    },
    {
        nombre: "Death Moth",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/death-moth.jpg",
        agotado: true
    },
    {
        nombre: "Ankh",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/ankh.jpg",
        agotado: true
    },
    {
        nombre: "Punches",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/punches.jpg",
        agotado: true
    },
    {
        nombre: "Crow Skull",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/crow-skull.jpg",
        agotado: true
    },
    {
        nombre: "Prisoner Corpse",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/prisoner-corpse.jpg",
        agotado: false
    },
    {
        nombre: "Holy Cross",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/holy-cross.jpg",
        agotado: true
    },
    {
        nombre: "Spikey Necklace",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/spikey-necklace.jpg",
        agotado: false
    },
    {
        nombre: "Crow Heads (Collar)",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/crow-heads-collar.jpg",
        agotado: false
    },
    {
        nombre: "Pulseras 2 Hileras",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/pulseras-2-hileras.jpg",
        agotado: false
    },
    {
        nombre: "Tachas Blanco y Negro (Pulsera 2H)",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/tachas-blanco-negro-2h.jpg",
        agotado: false
    },
    {
        nombre: "Pulsera Balas",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/pulsera-balas.jpg",
        agotado: false
    },
    {
        nombre: "Chocker Púas",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/chocker-puas.jpg",
        agotado: false
    },
    {
        nombre: "Chocker Tachas",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/chocker-tachas.jpg",
        agotado: true
    },
    {
        nombre: "Cadena Para Pantalón",
        precio: "$10.00",
        categoria: "accesorios",
        imagen: "assets/cadena-pantalon.jpg",
        agotado: false
    },

    // --- 12.00$ ---
    {
        nombre: "Pulseras 3-4 Hileras",
        precio: "$12.00",
        categoria: "accesorios",
        imagen: "assets/pulseras-3-4-hileras.jpg",
        agotado: false
    },
    {
        nombre: "Tachas Blanco y Negro (Pulsera 3-4H)",
        precio: "$12.00",
        categoria: "accesorios",
        imagen: "assets/tachas-blanco-negro-34h.jpg",
        agotado: true
    },

    // --- 15.00$ ---
    {
        nombre: "Correas Punk",
        precio: "$15.00",
        categoria: "accesorios",
        imagen: "assets/correas-punk.jpg",
        agotado: false
    },
    {
        nombre: "Correa Tachas Blancas",
        precio: "$15.00",
        categoria: "accesorios",
        imagen: "assets/correa-tachas-blancas.jpg",
        agotado: false
    },

    // --- 17.00$ (Franelas / Ropa) ---
    {
        nombre: "Franela Slipknot (Talla S y XL)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-slipknot.jpg",
        agotado: false
    },
    {
        nombre: "Franela System of a Down (Talla L)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-system.jpg",
        agotado: false
    },
    {
        nombre: "Franela Alice in Chains (Talla L)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-alice.jpg",
        agotado: false
    },
    {
        nombre: "Franela Korn 1994 (Talla S y M)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-korn-1994.jpg",
        agotado: false
    },
    {
        nombre: "Franela Iron Maiden (Talla M)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-iron-maiden.jpg",
        agotado: false
    },
    {
        nombre: "Franela Gorillaz (Talla M)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-gorillaz.jpg",
        agotado: false
    },
    {
        nombre: "Franela Green Day (Talla S)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-green-day.jpg",
        agotado: false
    },
    {
        nombre: "Franela Judas Priest (Talla S y M)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-judas-priest.jpg",
        agotado: false
    },
    {
        nombre: "Franela Limp Bizkit (Talla M)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-limp-bizkit.jpg",
        agotado: false
    },
    {
        nombre: "Franela Korn Issues (Talla L)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-korn-issues.jpg",
        agotado: false
    },
    {
        nombre: "Franela Nine Inch Nails (Talla L)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-nin.jpg",
        agotado: false
    },
    {
        nombre: "Franela Metallica (Talla XL)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-metallica.jpg",
        agotado: false
    },
    {
        nombre: "Franela Linkin Park (Talla M)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-linkin-park.jpg",
        agotado: false
    },
    {
        nombre: "Franela Deftones (Talla S)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-deftones.jpg",
        agotado: false
    },
    {
        nombre: "Franela Evanescence (Talla S y L)",
        precio: "$17.00",
        categoria: "ropa",
        imagen: "assets/franela-evanescence.jpg",
        agotado: false
    },

    // --- 20.00$ ---
    {
        nombre: "Gorro Ushanka",
        precio: "$20.00",
        categoria: "accesorios",
        imagen: "assets/gorro-ushanka.jpg",
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
                    <img src="${product.imagen}" alt="${product.nombre}" onerror="this.src='assets/meltdown_logo_nobg.png'">
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