/* =========================================================
   LUMINA GAMING STORE
   PROFESSIONAL MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   PRODUCT DATA
   ========================================================= */

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
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 12,
        name: "Pro RGB Controller",
        category: "controller",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 13,
        name: "Gaming Desk Mat",
        category: "accessory",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 14,
        name: "RGB Gaming Desk",
        category: "accessory",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80"
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


/* =========================================================
   DEAL PRODUCTS
   ========================================================= */

const discounts = [10, 20, 30, 40, 50];

const dealProducts = products.map(
    (product, index) => {

        const discount =
            discounts[index % discounts.length];

        const salePrice =
            product.price -
            (product.price * discount / 100);

        return {

            ...product,

            discount,

            salePrice:
                Number(salePrice.toFixed(2))

        };

    }
);


/* =========================================================
   STORAGE HELPERS
   ========================================================= */

function getStorage(key, fallback = null) {

    try {

        const data =
            localStorage.getItem(key);

        if (data === null) {

            return fallback;

        }

        return JSON.parse(data);

    } catch (error) {

        console.error(
            `Storage error [${key}]:`,
            error
        );

        return fallback;

    }

}


function setStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        return true;

    } catch (error) {

        console.error(
            `Storage save error [${key}]:`,
            error
        );

        return false;

    }

}


/* =========================================================
   SAFE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   CART
   ========================================================= */

let cart =
    getStorage(
        "luminaCart",
        []
    );


if (!Array.isArray(cart)) {

    cart = [];

}


/* =========================================================
   NORMALIZE CART
   ========================================================= */

function normalizeCart() {

    cart = cart
        .filter(item => item && item.id)
        .map(item => {

            const quantity =
                Math.max(
                    1,
                    Number(item.quantity) || 1
                );

            return {

                id: Number(item.id),

                name:
                    item.name ||
                    "Gaming Product",

                category:
                    item.category ||
                    "accessory",

                price:
                    Number(item.price) || 0,

                image:
                    item.image || "",

                deal:
                    Boolean(item.deal),

                discount:
                    Number(item.discount) || 0,

                salePrice:
                    Number(
                        item.salePrice ??
                        item.price ??
                        0
                    ),

                quantity

            };

        });

}


normalizeCart();


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart() {

    setStorage(
        "luminaCart",
        cart
    );

    updateCartCount();

}


/* =========================================================
   CART COUNT
   ========================================================= */

function updateCartCount() {

    const elements =
        document.querySelectorAll(
            ".cart-count"
        );


    const total =
        cart.reduce(
            (sum, item) => {

                return sum +
                    Math.max(
                        0,
                        Number(item.quantity) || 0
                    );

            },
            0
        );


    elements.forEach(
        element => {

            element.textContent =
                total;

            element.setAttribute(
                "aria-label",
                `${total} items in cart`
            );

        }
    );

}


/* =========================================================
   GET PRODUCT
   ========================================================= */

function getProduct(id, deal = false) {

    const source =
        deal
            ? dealProducts
            : products;

    return source.find(
        product =>
            Number(product.id) ===
            Number(id)
    );

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(
    id,
    deal = false
) {

    const product =
        getProduct(id, deal);


    if (!product) {

        showToast(
            "Product not found."
        );

        return;

    }


    const existing =
        cart.find(
            item =>
                Number(item.id) ===
                    Number(id) &&
                Boolean(item.deal) ===
                    Boolean(deal)
        );


    if (existing) {

        existing.quantity =
            Number(existing.quantity || 0) +
            1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            category: product.category,

            price: product.price,

            image: product.image,

            deal: Boolean(deal),

            discount:
                deal
                    ? product.discount
                    : 0,

            salePrice:
                deal
                    ? product.salePrice
                    : product.price,

            quantity: 1

        });

    }


    saveCart();

    renderCart();

    showToast(
        `${product.name} added to cart!`
    );

}


/* =========================================================
   UPDATE CART QUANTITY
   ========================================================= */

function updateCartQuantity(
    id,
    deal,
    change
) {

    const item =
        cart.find(
            product =>
                Number(product.id) ===
                    Number(id) &&
                Boolean(product.deal) ===
                    Boolean(deal)
        );


    if (!item) {

        return;

    }


    item.quantity =
        Number(item.quantity || 1) +
        Number(change);


    if (item.quantity <= 0) {

        removeFromCart(
            id,
            deal,
            false
        );

        return;

    }


    saveCart();

    renderCart();

}


/* =========================================================
   REMOVE FROM CART
   ========================================================= */

function removeFromCart(
    id,
    deal = false,
    notify = true
) {

    const item =
        cart.find(
            product =>
                Number(product.id) ===
                    Number(id) &&
                Boolean(product.deal) ===
                    Boolean(deal)
        );


    cart =
        cart.filter(
            product =>
                !(
                    Number(product.id) ===
                        Number(id) &&
                    Boolean(product.deal) ===
                        Boolean(deal)
                )
        );


    saveCart();

    renderCart();


    if (
        notify &&
        item
    ) {

        showToast(
            `${item.name} removed from cart.`
        );

    }

}


/* =========================================================
   CLEAR CART
   ========================================================= */

function clearCart() {

    if (!cart.length) {

        showToast(
            "Your cart is already empty."
        );

        return;

    }


    const confirmed =
        window.confirm(
            "Are you sure you want to clear your cart?"
        );


    if (!confirmed) {

        return;

    }


    cart = [];

    saveCart();

    renderCart();

    showToast(
        "Cart cleared successfully."
    );

}


/* =========================================================
   CART PRICE
   ========================================================= */

function getCartItemPrice(item) {

    if (item.deal) {

        return Number(
            item.salePrice ??
            item.price ??
            0
        );

    }

    return Number(
        item.price || 0
    );

}


/* =========================================================
   CART SUMMARY
   ========================================================= */

function calculateCartTotals() {

    let subtotal = 0;

    let originalTotal = 0;

    let totalItems = 0;


    cart.forEach(item => {

        const quantity =
            Math.max(
                1,
                Number(item.quantity) || 1
            );


        const currentPrice =
            getCartItemPrice(item);


        const originalPrice =
            Number(item.price) || 0;


        subtotal +=
            currentPrice * quantity;


        originalTotal +=
            originalPrice * quantity;


        totalItems +=
            quantity;

    });


    const discount =
        Math.max(
            0,
            originalTotal - subtotal
        );


    const shipping =
        subtotal > 0
            ? 0
            : 0;


    const total =
        subtotal + shipping;


    return {

        subtotal:
            Number(subtotal.toFixed(2)),

        discount:
            Number(discount.toFixed(2)),

        shipping,

        total:
            Number(total.toFixed(2)),

        totalItems

    };

}


/* =========================================================
   UPDATE CART SUMMARY
   ========================================================= */

function updateCartSummary() {

    const totals =
        calculateCartTotals();


    const subtotal =
        document.getElementById(
            "cartSubtotal"
        );


    const shipping =
        document.getElementById(
            "cartShipping"
        );


    const discount =
        document.getElementById(
            "cartDiscount"
        );


    const total =
        document.getElementById(
            "cartTotal"
        );


    const count =
        document.getElementById(
            "cartItemCount"
        );


    if (subtotal) {

        subtotal.textContent =
            `$${totals.subtotal.toFixed(2)}`;

    }


    if (shipping) {

        shipping.textContent =
            totals.shipping === 0
                ? "FREE"
                : `$${totals.shipping.toFixed(2)}`;

    }


    if (discount) {

        discount.textContent =
            `-$${totals.discount.toFixed(2)}`;

    }


    if (total) {

        total.textContent =
            `$${totals.total.toFixed(2)}`;

    }


    if (count) {

        count.textContent =
            `${totals.totalItems} ${
                totals.totalItems === 1
                    ? "Item"
                    : "Items"
            }`;

    }

}


/* =========================================================
   RENDER CART
   ========================================================= */

function renderCart() {

    const container =
        document.getElementById(
            "cartContainer"
        );


    if (!container) {

        return;

    }


    if (!cart.length) {

        container.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Looks like you haven't added
                    any gaming products yet.
                </p>

                <a href="products.html">
                    Start Shopping →
                </a>

            </div>

        `;

        updateCartSummary();

        return;

    }


    container.innerHTML =
        cart.map(item => {

            const quantity =
                Math.max(
                    1,
                    Number(item.quantity) || 1
                );


            const price =
                getCartItemPrice(item);


            const originalPrice =
                Number(item.price) || 0;


            const image =
                escapeHTML(
                    item.image ||
                    "https://via.placeholder.com/500x500?text=LUMINA"
                );


            const name =
                escapeHTML(
                    item.name
                );


            const category =
                escapeHTML(
                    item.category
                );


            return `

                <div class="cart-item">

                    <img
                        src="${image}"
                        alt="${name}"
                        loading="lazy"
                    >


                    <div class="cart-item-info">

                        <span class="cart-category">
                            ${category}
                        </span>

                        <h3>
                            ${name}
                        </h3>

                        ${
                            item.deal
                                ? `
                                    <span class="deal-badge">
                                        ${item.discount}% OFF
                                    </span>
                                `
                                : ""
                        }


                        <div class="cart-price">

                            <strong>
                                $${price.toFixed(2)}
                            </strong>

                            ${
                                item.deal
                                    ? `
                                        <del>
                                            $${originalPrice.toFixed(2)}
                                        </del>
                                    `
                                    : ""
                            }

                        </div>

                    </div>


                    <div class="qty-controls">

                        <button
                            class="qty-btn"
                            type="button"
                            onclick="updateCartQuantity(
                                ${item.id},
                                ${Boolean(item.deal)},
                                -1
                            )"
                        >
                            −
                        </button>

                        <span>
                            ${quantity}
                        </span>

                        <button
                            class="qty-btn"
                            type="button"
                            onclick="updateCartQuantity(
                                ${item.id},
                                ${Boolean(item.deal)},
                                1
                            )"
                        >
                            +
                        </button>

                    </div>


                    <div class="cart-item-total">

                        $${(
                            price *
                            quantity
                        ).toFixed(2)}

                    </div>


                    <button
                        class="remove-btn"
                        type="button"
                        onclick="removeFromCart(
                            ${item.id},
                            ${Boolean(item.deal)}
                        )"
                        title="Remove item"
                    >
                        ×
                    </button>

                </div>

            `;

        }).join("");


    updateCartSummary();

}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(
    product,
    deal = false
) {

    const price =
        deal
            ? Number(product.salePrice)
            : Number(product.price);


    const image =
        escapeHTML(
            product.image
        );


    const name =
        escapeHTML(
            product.name
        );


    const category =
        escapeHTML(
            product.category
        );


    return `

        <article
            class="product-card"
            data-product-id="${product.id}"
        >

            ${
                deal
                    ? `
                        <div class="discount-badge">
                            ${product.discount}% OFF
                        </div>
                    `
                    : ""
            }


            <div class="product-image">

                <img
                    src="${image}"
                    alt="${name}"
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/800x600?text=LUMINA'"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${category}
                </span>

                <h3>
                    ${name}
                </h3>


                <div class="product-price">

                    <strong>
                        $${price.toFixed(2)}
                    </strong>

                    ${
                        deal
                            ? `
                                <del>
                                    $${Number(
                                        product.price
                                    ).toFixed(2)}
                                </del>
                            `
                            : ""
                    }

                </div>


                <button
                    class="add-cart"
                    type="button"
                    onclick="addToCart(
                        ${product.id},
                        ${deal}
                    )"
                >
                    Add To Cart
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   HOME PRODUCTS
   ========================================================= */

function renderHomeProducts() {

    const container =
        document.getElementById(
            "homeProducts"
        );


    if (!container) {

        return;

    }


    container.innerHTML =
        products
            .slice(0, 12)
            .map(
                product =>
                    createProductCard(product)
            )
            .join("");

}


/* =========================================================
   HOME DEALS
   ========================================================= */

function renderHomeDeals() {

    const container =
        document.getElementById(
            "homeDeals"
        );


    if (!container) {

        return;

    }


    container.innerHTML =
        dealProducts
            .slice(0, 6)
            .map(
                product =>
                    createProductCard(
                        product,
                        true
                    )
            )
            .join("");

}


/* =========================================================
   ALL PRODUCTS
   ========================================================= */

let currentProducts =
    [...products];


function renderAllProducts(
    list = currentProducts
) {

    const container =
        document.getElementById(
            "productsContainer"
        );


    if (!container) {

        return;

    }


    currentProducts =
        Array.isArray(list)
            ? list
            : [];


    if (!currentProducts.length) {

        container.innerHTML = `

            <div class="no-products">

                <h3>
                    No Products Found
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        currentProducts
            .map(
                product =>
                    createProductCard(product)
            )
            .join("");

}


/* =========================================================
   PRODUCT FILTER
   ========================================================= */

function filterProducts(
    category,
    button = null
) {

    document
        .querySelectorAll(".filter-btn")
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });


    if (button) {

        button.classList.add(
            "active"
        );

    }


    const selected =
        String(
            category || "all"
        ).toLowerCase();


    if (selected === "all") {

        currentProducts =
            [...products];

    } else {

        currentProducts =
            products.filter(
                product =>
                    String(
                        product.category
                    ).toLowerCase() ===
                    selected
            );

    }


    renderAllProducts(
        currentProducts
    );

}


/* =========================================================
   PRODUCT SEARCH
   ========================================================= */

function searchProducts() {

    const input =
        document.getElementById(
            "productSearch"
        );


    if (!input) {

        return;

    }


    const search =
        input.value
            .trim()
            .toLowerCase();


    if (!search) {

        renderAllProducts(
            products
        );

        return;

    }


    const results =
        products.filter(
            product => {

                const name =
                    product.name
                        .toLowerCase();

                const category =
                    product.category
                        .toLowerCase();

                return (
                    name.includes(search) ||
                    category.includes(search)
                );

            }
        );


    renderAllProducts(
        results
    );

}


/* =========================================================
   CLEAR PRODUCT SEARCH
   ========================================================= */

function clearProductSearch() {

    const input =
        document.getElementById(
            "productSearch"
        );


    if (input) {

        input.value = "";

    }


    currentProducts =
        [...products];


    renderAllProducts(
        currentProducts
    );

}


/* =========================================================
   CATEGORY PAGE
   ========================================================= */

function renderCategoryProducts() {

    const container =
        document.getElementById(
            "categoryProducts"
        );


    if (!container) {

        return;

    }


    container.innerHTML =
        products
            .map(
                product =>
                    createProductCard(product)
            )
            .join("");

}


/* =========================================================
   CATEGORY QUICK FILTER
   ========================================================= */

function showCategory(
    category
) {

    const container =
        document.getElementById(
            "categoryProducts"
        );


    if (!container) {

        return;

    }


    const selected =
        String(category)
            .toLowerCase();


    const filtered =
        selected === "all"
            ? products
            : products.filter(
                product =>
                    product.category
                        .toLowerCase() ===
                    selected
            );


    container.innerHTML =
        filtered
            .map(
                product =>
                    createProductCard(product)
            )
            .join("");

}


/* =========================================================
   DEALS
   ========================================================= */

let currentDeals =
    [...dealProducts];


function renderDeals(
    list = currentDeals
) {

    const container =
        document.getElementById(
            "dealsContainer"
        );


    if (!container) {

        return;

    }


    currentDeals =
        Array.isArray(list)
            ? list
            : [];


    if (!currentDeals.length) {

        container.innerHTML = `

            <div class="no-products">

                <h3>
                    No Deals Found
                </h3>

                <p>
                    Check another discount category.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        currentDeals
            .map(
                product =>
                    createProductCard(
                        product,
                        true
                    )
            )
            .join("");

}


/* =========================================================
   DEAL FILTER
   ========================================================= */

function filterDeals(
    discount,
    button = null
) {

    document
        .querySelectorAll(
            ".deal-filter-btn"
        )
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });


    if (button) {

        button.classList.add(
            "active"
        );

    }


    if (
        String(discount)
            .toLowerCase() === "all"
    ) {

        currentDeals =
            [...dealProducts];

    } else {

        const minimum =
            Number(discount);


        currentDeals =
            dealProducts.filter(
                product =>
                    Number(
                        product.discount
                    ) >= minimum
            );

    }


    renderDeals(
        currentDeals
    );

}


/* =========================================================
   MOBILE NAVBAR
   ========================================================= */

function toggleMenu() {

    const nav =
        document.getElementById(
            "navLinks"
        ) ||
        document.querySelector(
            ".nav-links"
        );


    if (!nav) {

        return;

    }


    nav.classList.toggle(
        "show"
    );


    const button =
        document.querySelector(
            ".mobile-btn"
        );


    if (button) {

        const opened =
            nav.classList.contains(
                "show"
            );


        button.setAttribute(
            "aria-expanded",
            opened
                ? "true"
                : "false"
        );

    }

}


/* =========================================================
   CLOSE MOBILE MENU
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const nav =
            document.getElementById(
                "navLinks"
            ) ||
            document.querySelector(
                ".nav-links"
            );


        const button =
            document.querySelector(
                ".mobile-btn"
            );


        if (
            !nav ||
            !button
        ) {

            return;

        }


        if (
            nav.classList.contains(
                "show"
            ) &&
            !nav.contains(
                event.target
            ) &&
            !button.contains(
                event.target
            )
        ) {

            nav.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   CLOSE MENU AFTER LINK CLICK
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const link =
            event.target.closest(
                ".nav-links a"
            );


        if (!link) {

            return;

        }


        const nav =
            document.getElementById(
                "navLinks"
            ) ||
            document.querySelector(
                ".nav-links"
            );


        if (nav) {

            nav.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   ACTIVE NAV LINK
   ========================================================= */

function setActiveNav() {

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    if (!currentPage) {

        currentPage =
            "index.html";

    }


    document
        .querySelectorAll(
            ".nav-links a"
        )
        .forEach(link => {

            const href =
                link.getAttribute(
                    "href"
                );


            if (!href) {

                return;

            }


            const cleanHref =
                href.split("#")[0];


            if (
                cleanHref ===
                currentPage
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

}


/* =========================================================
   FAQ ACCORDION
   ========================================================= */

function toggleFAQ(
    button
) {

    if (!button) {

        return;

    }


    const answer =
        button.nextElementSibling;


    if (!answer) {

        return;

    }


    const isOpen =
        answer.classList.contains(
            "open"
        );


    document
        .querySelectorAll(
            ".faq-answer"
        )
        .forEach(item => {

            item.classList.remove(
                "open"
            );

        });


    document
        .querySelectorAll(
            ".faq-question"
        )
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });


    if (!isOpen) {

        answer.classList.add(
            "open"
        );

        button.classList.add(
            "active"
        );

    }

}


/* =========================================================
   COUNTDOWN TIMER
   ========================================================= */

let countdownInterval = null;


function startCountdown() {

    const daysElement =
        document.getElementById(
            "days"
        );

    const hoursElement =
        document.getElementById(
            "hours"
        );

    const minutesElement =
        document.getElementById(
            "minutes"
        );

    const secondsElement =
        document.getElementById(
            "seconds"
        );


    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {

        return;

    }


    let endTime =
        Number(
            localStorage.getItem(
                "luminaDealEndTime"
            )
        );


    if (
        !endTime ||
        endTime <= Date.now()
    ) {

        endTime =
            Date.now() +
            (
                2 *
                24 *
                60 *
                60 *
                1000
            ) +
            (
                8 *
                60 *
                60 *
                1000
            ) +
            (
                30 *
                60 *
                1000
            );


        localStorage.setItem(
            "luminaDealEndTime",
            String(endTime)
        );

    }


    function updateTimer() {

        const remaining =
            endTime -
            Date.now();


        if (remaining <= 0) {

            daysElement.textContent =
                "00";

            hoursElement.textContent =
                "00";

            minutesElement.textContent =
                "00";

            secondsElement.textContent =
                "00";


            clearInterval(
                countdownInterval
            );


            return;

        }


        const days =
            Math.floor(
                remaining /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        const hours =
            Math.floor(
                (
                    remaining /
                    (
                        1000 *
                        60 *
                        60
                    )
                ) % 24
            );


        const minutes =
            Math.floor(
                (
                    remaining /
                    (
                        1000 *
                        60
                    )
                ) % 60
            );


        const seconds =
            Math.floor(
                (
                    remaining /
                    1000
                ) % 60
            );


        daysElement.textContent =
            String(days)
                .padStart(2, "0");


        hoursElement.textContent =
            String(hours)
                .padStart(2, "0");


        minutesElement.textContent =
            String(minutes)
                .padStart(2, "0");


        secondsElement.textContent =
            String(seconds)
                .padStart(2, "0");

    }


    clearInterval(
        countdownInterval
    );


    updateTimer();


    countdownInterval =
        setInterval(
            updateTimer,
            1000
        );

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function checkout() {

    if (!cart.length) {

        showToast(
            "Your cart is empty."
        );

        return;

    }


    const totals =
        calculateCartTotals();


    const orders =
        getStorage(
            "luminaOrders",
            []
        );


    const safeOrders =
        Array.isArray(orders)
            ? orders
            : [];


    const order = {

        id:
            "LUM-" +
            Date.now()
                .toString(36)
                .toUpperCase()
                .slice(-8),

        date:
            new Date()
                .toLocaleString(),

        status:
            "Processing",

        items:
            JSON.parse(
                JSON.stringify(cart)
            ),

        subtotal:
            totals.subtotal,

        discount:
            totals.discount,

        shipping:
            totals.shipping,

        total:
            totals.total

    };


    safeOrders.push(
        order
    );


    setStorage(
        "luminaOrders",
        safeOrders
    );


    cart = [];

    saveCart();


    showToast(
        "Order placed successfully!"
    );


    setTimeout(
        () => {

            window.location.href =
                "orders.html";

        },
        900
    );

}


/* =========================================================
   ORDERS
   ========================================================= */

function renderOrders() {

    const container =
        document.getElementById(
            "ordersContainer"
        );


    if (!container) {

        return;

    }


    const ordersData =
        getStorage(
            "luminaOrders",
            []
        );


    const orders =
        Array.isArray(ordersData)
            ? ordersData
            : [];


    let totalItems = 0;

    let totalSpent = 0;


    orders.forEach(order => {

        const items =
            Array.isArray(order.items)
                ? order.items
                : [];


        items.forEach(item => {

            totalItems +=
                Number(
                    item.quantity || 1
                );

        });


        totalSpent +=
            Number(
                order.total || 0
            );

    });


    const totalOrdersElement =
        document.getElementById(
            "totalOrders"
        );


    const totalItemsElement =
        document.getElementById(
            "totalItems"
        );


    const totalSpentElement =
        document.getElementById(
            "totalSpent"
        );


    if (totalOrdersElement) {

        totalOrdersElement.textContent =
            orders.length;

    }


    if (totalItemsElement) {

        totalItemsElement.textContent =
            totalItems;

    }


    if (totalSpentElement) {

        totalSpentElement.textContent =
            `$${totalSpent.toFixed(2)}`;

    }


    if (!orders.length) {

        container.innerHTML = `

            <div class="empty-orders">

                <div class="empty-orders-icon">
                    📦
                </div>

                <h3>
                    No Orders Yet
                </h3>

                <p>
                    You haven't placed any
                    orders yet. Start shopping
                    and your orders will appear here.
                </p>

                <a href="products.html">
                    Start Shopping →
                </a>

            </div>

        `;

        return;

    }


    container.innerHTML =
        orders
            .slice()
            .reverse()
            .map(
                (order, index) => {

                    const items =
                        Array.isArray(
                            order.items
                        )
                            ? order.items
                            : [];


                    const orderNumber =
                        escapeHTML(
                            order.id ||
                            `LUM-${String(
                                orders.length -
                                index
                            ).padStart(
                                5,
                                "0"
                            )}`
                        );


                    const orderDate =
                        escapeHTML(
                            order.date ||
                            "Recently"
                        );


                    const status =
                        escapeHTML(
                            order.status ||
                            "Processing"
                        );


                    const total =
                        Number(
                            order.total || 0
                        );


                    const itemCount =
                        items.reduce(
                            (sum, item) =>
                                sum +
                                Number(
                                    item.quantity ||
                                    1
                                ),
                            0
                        );


                    const itemsHTML =
                        items
                            .map(item => {

                                const quantity =
                                    Math.max(
                                        1,
                                        Number(
                                            item.quantity
                                        ) || 1
                                    );


                                const price =
                                    item.deal
                                        ? Number(
                                            item.salePrice ??
                                            item.price ??
                                            0
                                        )
                                        : Number(
                                            item.price ||
                                            0
                                        );


                                const image =
                                    escapeHTML(
                                        item.image ||
                                        "https://via.placeholder.com/300x300?text=LUMINA"
                                    );


                                const name =
                                    escapeHTML(
                                        item.name ||
                                        "Gaming Product"
                                    );


                                return `

                                    <div class="order-item">

                                        <img
                                            src="${image}"
                                            alt="${name}"
                                            loading="lazy"
                                        >

                                        <div class="order-item-info">

                                            <h4>
                                                ${name}
                                            </h4>

                                            <p>
                                                Qty:
                                                ${quantity}
                                            </p>

                                            <div class="order-item-price">

                                                $${(
                                                    price *
                                                    quantity
                                                ).toFixed(2)}

                                            </div>

                                        </div>

                                    </div>

                                `;

                            })
                            .join("");


                    return `

                        <article class="order-card">

                            <div class="order-top">

                                <div class="order-info">

                                    <h3>
                                        Order #${orderNumber}
                                    </h3>

                                    <div class="order-date">
                                        ${orderDate}
                                    </div>

                                </div>

                                <span class="order-status">
                                    ${status}
                                </span>

                            </div>


                            <div class="order-items">

                                ${
                                    itemsHTML ||
                                    `
                                        <div class="order-item">

                                            <div class="order-item-info">

                                                <h4>
                                                    Order Information
                                                </h4>

                                                <p>
                                                    No product details available.
                                                </p>

                                            </div>

                                        </div>
                                    `
                                }

                            </div>


                            <div class="order-bottom">

                                <div class="order-items-count">

                                    ${itemCount}

                                    ${
                                        itemCount === 1
                                            ? " item"
                                            : " items"
                                    }

                                </div>


                                <div class="order-total">

                                    <span>
                                        Order Total
                                    </span>

                                    <strong>
                                        $${total.toFixed(2)}
                                    </strong>

                                </div>

                            </div>

                        </article>

                    `;

                }
            )
            .join("");

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(
    message
) {

    let toast =
        document.getElementById(
            "luminaToast"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );


        toast.id =
            "luminaToast";


        toast.className =
            "lumina-toast";


        document.body.appendChild(
            toast
        );

    }


    toast.textContent =
        String(message);


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.luminaToastTimer
    );


    window.luminaToastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );

}


/* =========================================================
   SIGN UP
   ========================================================= */

function signupUser(event) {

    if (event) {

        event.preventDefault();

    }


    const nameInput =
        document.getElementById(
            "signupName"
        );


    const emailInput =
        document.getElementById(
            "signupEmail"
        );


    const passwordInput =
        document.getElementById(
            "signupPassword"
        );


    const confirmInput =
        document.getElementById(
            "signupConfirmPassword"
        );


    const name =
        nameInput
            ? nameInput.value.trim()
            : "";


    const email =
        emailInput
            ? emailInput.value
                .trim()
                .toLowerCase()
            : "";


    const password =
        passwordInput
            ? passwordInput.value
            : "";


    const confirmPassword =
        confirmInput
            ? confirmInput.value
            : "";


    if (
        !name ||
        !email ||
        !password
    ) {

        showToast(
            "Please fill in all required fields."
        );

        return;

    }


    if (
        password.length < 6
    ) {

        showToast(
            "Password must be at least 6 characters."
        );

        return;

    }


    if (
        confirmInput &&
        password !== confirmPassword
    ) {

        showToast(
            "Passwords do not match."
        );

        return;

    }


    const existingUser =
        getStorage(
            "luminaUser",
            null
        );


    if (
        existingUser &&
        existingUser.email &&
        existingUser.email
            .toLowerCase() === email
    ) {

        showToast(
            "An account with this email already exists."
        );

        return;

    }


    const user = {

        name,

        email,

        password,

        createdAt:
            new Date()
                .toISOString()

    };


    setStorage(
        "luminaUser",
        user
    );


    showToast(
        "Account created successfully!"
    );


    setTimeout(
        () => {

            window.location.href =
                "login.html";

        },
        1000
    );

}


/* =========================================================
   LOGIN
   ========================================================= */

function loginUser(event) {

    if (event) {

        event.preventDefault();

    }


    const emailInput =
        document.getElementById(
            "loginEmail"
        );


    const passwordInput =
        document.getElementById(
            "loginPassword"
        );


    const rememberInput =
        document.getElementById(
            "rememberMe"
        );


    const email =
        emailInput
            ? emailInput.value
                .trim()
                .toLowerCase()
            : "";


    const password =
        passwordInput
            ? passwordInput.value
            : "";


    const remember =
        rememberInput
            ? rememberInput.checked
            : false;


    if (!email) {

        showToast(
            "Please enter your email."
        );

        if (emailInput) {

            emailInput.focus();

        }

        return;

    }


    if (!password) {

        showToast(
            "Please enter your password."
        );

        if (passwordInput) {

            passwordInput.focus();

        }

        return;

    }


    const user =
        getStorage(
            "luminaUser",
            null
        );


    if (!user) {

        showToast(
            "No account found. Please create an account."
        );


        setTimeout(
            () => {

                window.location.href =
                    "signup.html";

            },
            1200
        );


        return;

    }


    const storedEmail =
        String(
            user.email || ""
        )
            .trim()
            .toLowerCase();


    if (
        storedEmail !== email ||
        user.password !== password
    ) {

        showToast(
            "Incorrect email or password."
        );


        if (passwordInput) {

            passwordInput.value = "";

            passwordInput.focus();

        }


        return;

    }


    const currentUser = {

        name:
            user.name ||
            "LUMINA User",

        email:
            user.email

    };


    setStorage(
        "luminaCurrentUser",
        currentUser
    );


    localStorage.setItem(
        "luminaLoggedIn",
        "true"
    );


    localStorage.setItem(
        "luminaRememberMe",
        remember
            ? "true"
            : "false"
    );


    showToast(
        `Welcome back, ${
            user.name || "Gamer"
        }!`
    );


    setTimeout(
        () => {

            window.location.href =
                "index.html";

        },
        1000
    );

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logoutUser() {

    localStorage.removeItem(
        "luminaLoggedIn"
    );


    localStorage.removeItem(
        "luminaCurrentUser"
    );


    localStorage.removeItem(
        "luminaRememberMe"
    );


    showToast(
        "You have been logged out."
    );


    setTimeout(
        () => {

            window.location.href =
                "index.html";

        },
        800
    );

}


/* =========================================================
   LOGIN STATUS
   ========================================================= */

function isLoggedIn() {

    return (
        localStorage.getItem(
            "luminaLoggedIn"
        ) === "true"
    );

}


/* =========================================================
   CURRENT USER
   ========================================================= */

function getCurrentUser() {

    return getStorage(
        "luminaCurrentUser",
        null
    );

}


/* =========================================================
   CONTACT FORM
   ========================================================= */

function submitContact(event) {

    if (event) {

        event.preventDefault();

    }


    const nameInput =
        document.getElementById(
            "contactName"
        );


    const emailInput =
        document.getElementById(
            "contactEmail"
        );


    const messageInput =
        document.getElementById(
            "contactMessage"
        );


    const name =
        nameInput
            ? nameInput.value.trim()
            : "";


    const email =
        emailInput
            ? emailInput.value
                .trim()
                .toLowerCase()
            : "";


    const message =
        messageInput
            ? messageInput.value.trim()
            : "";


    if (
        !name ||
        !email ||
        !message
    ) {

        showToast(
            "Please complete all fields."
        );

        return;

    }


    const messages =
        getStorage(
            "luminaMessages",
            []
        );


    const safeMessages =
        Array.isArray(messages)
            ? messages
            : [];


    safeMessages.push({

        name,

        email,

        message,

        date:
            new Date()
                .toLocaleString()

    });


    setStorage(
        "luminaMessages",
        safeMessages
    );


    showToast(
        "Message sent successfully!"
    );


    if (
        event &&
        event.target &&
        typeof event.target.reset ===
            "function"
    ) {

        event.target.reset();

    }

}


/* =========================================================
   PRODUCT DETAIL
   ========================================================= */

function openProduct(
    id,
    deal = false
) {

    const product =
        getProduct(
            id,
            deal
        );


    if (!product) {

        showToast(
            "Product not found."
        );

        return;

    }


    localStorage.setItem(
        "luminaSelectedProduct",
        JSON.stringify({

            ...product,

            deal:
                Boolean(deal)

        })
    );


    window.location.href =
        "product-detail.html";

}


/* =========================================================
   RENDER PRODUCT DETAIL
   ========================================================= */

function renderProductDetail() {

    const container =
        document.getElementById(
            "productDetail"
        );


    if (!container) {

        return;

    }


    const product =
        getStorage(
            "luminaSelectedProduct",
            null
        );


    if (!product) {

        container.innerHTML = `

            <div class="no-products">

                <h3>
                    Product Not Found
                </h3>

                <a href="products.html">
                    Back to Products
                </a>

            </div>

        `;

        return;

    }


    const deal =
        Boolean(product.deal);


    const price =
        deal
            ? Number(
                product.salePrice ??
                product.price
            )
            : Number(
                product.price
            );


    container.innerHTML = `

        <div class="product-detail-image">

            <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
            >

        </div>


        <div class="product-detail-content">

            ${
                deal
                    ? `
                        <span class="discount-badge">
                            ${product.discount}% OFF
                        </span>
                    `
                    : ""
            }


            <span class="product-category">
                ${escapeHTML(product.category)}
            </span>


            <h1>
                ${escapeHTML(product.name)}
            </h1>


            <div class="product-detail-price">

                <strong>
                    $${price.toFixed(2)}
                </strong>

                ${
                    deal
                        ? `
                            <del>
                                $${Number(
                                    product.price
                                ).toFixed(2)}
                            </del>
                        `
                        : ""
                }

            </div>


            <p>
                Premium gaming equipment designed
                for performance, comfort and style.
            </p>


            <button
                class="add-cart"
                type="button"
                onclick="addToCart(
                    ${product.id},
                    ${deal}
                )"
            >
                Add To Cart
            </button>

        </div>

    `;

}


/* =========================================================
   PASSWORD TOGGLE
   ========================================================= */

function togglePassword() {

    const input =
        document.getElementById(
            "loginPassword"
        );


    const button =
        document.querySelector(
            ".password-toggle"
        );


    if (!input) {

        return;

    }


    if (
        input.type ===
        "password"
    ) {

        input.type =
            "text";


        if (button) {

            button.textContent =
                "🙈";

            button.setAttribute(
                "aria-label",
                "Hide password"
            );

        }

    } else {

        input.type =
            "password";


        if (button) {

            button.textContent =
                "👁";

            button.setAttribute(
                "aria-label",
                "Show password"
            );

        }

    }

}


/* =========================================================
   UPDATE LOGIN UI
   ========================================================= */

function updateAuthUI() {

    const loggedIn =
        isLoggedIn();


    const user =
        getCurrentUser();


    document
        .querySelectorAll(
            ".login-btn"
        )
        .forEach(link => {

            if (
                loggedIn &&
                user
            ) {

                link.textContent =
                    "Account";

            } else {

                link.textContent =
                    "Login";

            }

        });

}


/* =========================================================
   KEYBOARD SUPPORT
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            const nav =
                document.getElementById(
                    "navLinks"
                ) ||
                document.querySelector(
                    ".nav-links"
                );


            if (nav) {

                nav.classList.remove(
                    "show"
                );

            }

        }

    }
);


/* =========================================================
   SEARCH INPUT LIVE SEARCH
   ========================================================= */

document.addEventListener(
    "input",
    function(event) {

        if (
            event.target &&
            event.target.id ===
                "productSearch"
        ) {

            searchProducts();

        }

    }
);


/* =========================================================
   ENTER KEY SEARCH
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.target &&
            event.target.id ===
                "productSearch" &&
            event.key === "Enter"
        ) {

            event.preventDefault();

            searchProducts();

        }

    }
);


/* =========================================================
   INITIALIZE WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        normalizeCart();

        saveCart();

        updateCartCount();

        setActiveNav();

        updateAuthUI();

        renderCart();

        updateCartSummary();

        renderHomeProducts();

        renderHomeDeals();

        renderAllProducts();

        renderCategoryProducts();

        renderDeals();

        renderOrders();

        renderProductDetail();

        startCountdown();

    }
);


/* =========================================================
   GLOBAL FUNCTIONS
   Useful for inline HTML onclick
   ========================================================= */

window.products =
    products;

window.dealProducts =
    dealProducts;

window.addToCart =
    addToCart;

window.updateCartQuantity =
    updateCartQuantity;

window.removeFromCart =
    removeFromCart;

window.clearCart =
    clearCart;

window.checkout =
    checkout;

window.filterProducts =
    filterProducts;

window.searchProducts =
    searchProducts;

window.clearProductSearch =
    clearProductSearch;

window.filterDeals =
    filterDeals;

window.renderDeals =
    renderDeals;

window.renderAllProducts =
    renderAllProducts;

window.renderCategoryProducts =
    renderCategoryProducts;

window.showCategory =
    showCategory;

window.toggleMenu =
    toggleMenu;

window.toggleFAQ =
    toggleFAQ;

window.startCountdown =
    startCountdown;

window.signupUser =
    signupUser;

window.loginUser =
    loginUser;

window.logoutUser =
    logoutUser;

window.isLoggedIn =
    isLoggedIn;

window.getCurrentUser =
    getCurrentUser;

window.submitContact =
    submitContact;

window.showToast =
    showToast;

window.openProduct =
    openProduct;

window.renderProductDetail =
    renderProductDetail;

window.togglePassword =
    togglePassword;
