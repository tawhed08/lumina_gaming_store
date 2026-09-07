/* =====================================================
   LUMINA GAMING STORE
   MAIN JAVASCRIPT
===================================================== */


/* =========================
   PRODUCTS
========================= */

const products = [

    {
        id: 1,
        name: "Lumina Mechanical Keyboard",
        category: "keyboard",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "RGB Gaming Keyboard",
        category: "keyboard",
        price: 74.99,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Pro Mechanical Keyboard",
        category: "keyboard",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        name: "Ultra Gaming Mouse",
        category: "mouse",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "RGB Gaming Mouse",
        category: "mouse",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Pro Wireless Mouse",
        category: "mouse",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 7,
        name: "Lumina Gaming Headset",
        category: "headset",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 8,
        name: "Wireless Gaming Headset",
        category: "headset",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 9,
        name: "Pro Gaming Headphones",
        category: "headset",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 10,
        name: "Elite Gaming Controller",
        category: "controller",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 11,
        name: "Wireless Controller",
        category: "controller",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 12,
        name: "Pro RGB Controller",
        category: "controller",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1592840062661-5a2b8c0b8c4b?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 13,
        name: "Gaming Desk Mat",
        category: "accessory",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1616628182500-ef7c1e0d8f8a?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 14,
        name: "RGB Gaming Desk",
        category: "accessory",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 15,
        name: "Gaming Microphone",
        category: "accessory",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 16,
        name: "RGB Gaming Chair",
        category: "accessory",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 17,
        name: "Gaming Monitor",
        category: "monitor",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 18,
        name: "UltraWide Gaming Monitor",
        category: "monitor",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 19,
        name: "4K Gaming Monitor",
        category: "monitor",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 20,
        name: "Gaming Webcam",
        category: "accessory",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80"
    }

];


/* =====================================================
   CREATE DEALS
===================================================== */

const dealProducts = products.map((product, index) => {

    const discounts = [10, 20, 30, 40, 50];

    const discount =
        discounts[index % discounts.length];

    const salePrice =
        product.price -
        (product.price * discount / 100);

    return {

        ...product,

        discount: discount,

        salePrice: Number(salePrice.toFixed(2))

    };

});


/* =====================================================
   PRODUCT CARD
===================================================== */

function createProductCard(product, deal = false) {

    const price = deal
        ? product.salePrice
        : product.price;

    return `

        <div class="product-card">

            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                ${
                    deal
                    ?
                    `
                    <span class="discount">
                        ${product.discount}% OFF
                    </span>
                    `
                    :
                    ""
                }

                <div class="product-price">

                    <span class="price">
                        $${price.toFixed(2)}
                    </span>

                    ${
                        deal
                        ?
                        `
                        <span class="old-price">
                            $${product.price.toFixed(2)}
                        </span>
                        `
                        :
                        ""
                    }

                </div>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id}, ${deal})"
                >
                    🛒 Add To Cart
                </button>

            </div>

        </div>

    `;
}


/* =====================================================
   HOME PRODUCTS
===================================================== */

function renderHomeProducts() {

    const container =
        document.getElementById("homeProducts");

    if (!container) return;

    container.innerHTML =
        products
        .slice(0, 20)
        .map(product =>
            createProductCard(product)
        )
        .join("");

}


/* =====================================================
   ALL PRODUCTS
===================================================== */

let currentProducts =
    [...products];


function renderAllProducts(list = currentProducts) {

    const container =
        document.getElementById("allProducts");

    if (!container) return;

    if (list.length === 0) {

        container.innerHTML = `
            <p style="color:#8995a5;">
                No products found.
            </p>
        `;

        return;
    }

    container.innerHTML =
        list
        .map(product =>
            createProductCard(product)
        )
        .join("");
}


/* =====================================================
   FILTER PRODUCTS
===================================================== */

function filterProducts(category) {

    if (category === "all") {

        currentProducts =
            [...products];

    } else {

        currentProducts =
            products.filter(
                product =>
                    product.category === category
            );

    }

    renderAllProducts();
}


/* =====================================================
   CATEGORY PAGE
===================================================== */

function renderCategoryProducts() {

    const container =
        document.getElementById("categoryProducts");

    if (!container) return;

    const params =
        new URLSearchParams(
            window.location.search
        );

    const category =
        params.get("category");

    let list;

    if (category) {

        list =
            products.filter(
                p => p.category === category
            );

    } else {

        list =
            products.slice(0, 8);

    }

    container.innerHTML =
        list
        .map(product =>
            createProductCard(product)
        )
        .join("");
}


/* =====================================================
   DEAL PAGE
===================================================== */

let currentDeals =
    [...dealProducts];


function renderDeals(list = currentDeals) {

    const container =
        document.getElementById("dealProducts");

    if (!container) return;

    container.innerHTML =
        list
        .map(product =>
            createProductCard(product, true)
        )
        .join("");
}


/* =====================================================
   DEAL FILTER
===================================================== */

function filterDeals(discount) {

    if (discount === "all") {

        currentDeals =
            [...dealProducts];

    } else {

        currentDeals =
            dealProducts.filter(
                product =>
                    product.discount === discount
            );

    }

    renderDeals();
}


/* =====================================================
   CART
===================================================== */

let cart =
    JSON.parse(
        localStorage.getItem("luminaCart")
    ) || [];


/* ADD TO CART */

function addToCart(id, deal = false) {

    const product =
        deal
        ? dealProducts.find(p => p.id === id)
        : products.find(p => p.id === id);

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price:
                deal
                ? product.salePrice
                : product.price,

            image: product.image,

            quantity: 1

        });

    }


    localStorage.setItem(
        "luminaCart",
        JSON.stringify(cart)
    );


    updateCartCount();

    showToast("Product added to cart 🛒");
}


/* =====================================================
   CART COUNT
===================================================== */

function updateCartCount() {

    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    document
        .querySelectorAll(".cart-count")
        .forEach(element => {

            element.textContent =
                total;

        });
}


/* =====================================================
   SHOW CART
===================================================== */

function renderCart() {

    const container =
        document.getElementById(
            "cartContainer"
        );

    if (!container) return;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="auth-box"
                 style="margin:50px auto;text-align:center;">

                <h2>Your cart is empty</h2>

                <p>
                    Add some gaming gear to your cart.
                </p>

                <a
                    href="products.html"
                    class="btn primary"
                >
                    Shop Products
                </a>

            </div>

        `;

        return;
    }


    let total = 0;


    let html = `
        <div class="cart-container">
    `;


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        html += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        $${item.price.toFixed(2)}
                    </p>

                    <span>
                        Quantity:
                        ${item.quantity}
                    </span>

                </div>

                <strong>
                    $${itemTotal.toFixed(2)}
                </strong>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${item.id})"
                >
                    Remove
                </button>

            </div>

        `;

    });


    html += `

            <div class="cart-total">

                <h2>
                    Total:
                    $${total.toFixed(2)}
                </h2>

                <button
                    class="btn primary"
                    onclick="checkout()"
                >
                    Checkout →
                </button>

            </div>

        </div>
    `;


    container.innerHTML =
        html;
}


/* =====================================================
   REMOVE CART
===================================================== */

function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );


    localStorage.setItem(
        "luminaCart",
        JSON.stringify(cart)
    );


    updateCartCount();

    renderCart();
}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    alert(
        "Checkout system is ready to connect with your payment system."
    );

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const oldToast =
        document.querySelector(".toast");

    if (oldToast) {
        oldToast.remove();
    }


    const toast =
        document.createElement("div");

    toast.className =
        "toast";

    toast.textContent =
        message;


    document.body.appendChild(toast);


    setTimeout(() => {

        toast.remove();

    }, 2500);
}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const menu =
        document.querySelector(".nav-links");

    if (!menu) return;

    menu.classList.toggle("show");
}


/* =====================================================
   COUNTDOWN
===================================================== */

function startCountdown() {

    const days =
        document.getElementById("days");

    if (!days) return;


    let endTime =
        localStorage.getItem(
            "luminaDealEnd"
        );


    if (!endTime) {

        endTime =
            Date.now()
            +
            (24 * 60 * 60 * 1000);

        localStorage.setItem(
            "luminaDealEnd",
            endTime
        );

    }


    function updateTimer() {

        const difference =
            Number(endTime)
            -
            Date.now();


        if (difference <= 0) {

            localStorage.removeItem(
                "luminaDealEnd"
            );

            return;

        }


        const totalSeconds =
            Math.floor(
                difference / 1000
            );


        const d =
            Math.floor(
                totalSeconds /
                (24 * 60 * 60)
            );


        const h =
            Math.floor(
                (totalSeconds %
                    (24 * 60 * 60))
                / 3600
            );


        const m =
            Math.floor(
                (totalSeconds % 3600)
                / 60
            );


        const s =
            totalSeconds % 60;


        document.getElementById("days")
            .textContent =
            String(d).padStart(2, "0");


        document.getElementById("hours")
            .textContent =
            String(h).padStart(2, "0");


        document.getElementById("minutes")
            .textContent =
            String(m).padStart(2, "0");


        document.getElementById("seconds")
            .textContent =
            String(s).padStart(2, "0");

    }


    updateTimer();

    setInterval(
        updateTimer,
        1000
    );
}


/* =====================================================
   SIGN UP
===================================================== */

function signupUser(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "signupName"
        ).value;


    localStorage.setItem(
        "luminaUser",
        name
    );


    alert(
        "Account created successfully!"
    );


    window.location.href =
        "login.html";
}


/* =====================================================
   LOGIN
===================================================== */

function loginUser(event) {

    event.preventDefault();


    alert(
        "Login successful!"
    );


    window.location.href =
        "index.html";
}


/* =====================================================
   START EVERYTHING
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderHomeProducts();

        renderAllProducts();

        renderCategoryProducts();

        renderDeals();

        renderCart();

        updateCartCount();

        startCountdown();

    }
);