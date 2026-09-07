const navbar = `
<nav class="fixed top-0 left-0 right-0 z-50 h-20
           bg-[#080b10]/95 backdrop-blur-lg
           border-b border-gray-800">

    <div class="max-w-7xl mx-auto px-5 h-full">

        <div class="h-full flex items-center justify-between">

            <!-- LOGO -->
            <a href="index.html" class="flex flex-col">
                <span class="text-2xl font-black tracking-widest">
                    LUMINA<span class="text-lime-400">.</span>
                </span>

                <span class="text-[9px] tracking-[4px] text-gray-500">
                    GAMING STORE
                </span>
            </a>


            <!-- DESKTOP MENU -->
            <div class="hidden md:flex items-center gap-7">

                <a href="index.html"
                   class="hover:text-lime-400">
                    Shop
                </a>

                <a href="categories.html"
                   class="hover:text-lime-400">
                    Categories
                </a>

                <a href="deals.html"
                   class="hover:text-lime-400">
                    Deals
                </a>

                <a href="about.html"
                   class="hover:text-lime-400">
                    About
                </a>

                <a href="contact.html"
                   class="hover:text-lime-400">
                    Contact
                </a>

                <a href="orders.html"
                   class="hover:text-lime-400">
                    Orders
                </a>

            </div>


            <!-- RIGHT -->
            <div class="flex items-center gap-3">

                <!-- LOGIN -->
                <a href="login.html"
                   class="w-10 h-10 rounded-full
                          border border-gray-700
                          flex items-center justify-center
                          hover:border-lime-400
                          hover:text-lime-400">

                    👤

                </a>


                <!-- CART -->
                <button
                    type="button"
                    onclick="openCart()"
                    class="relative w-10 h-10
                           rounded-full
                           border border-gray-700
                           hover:border-lime-400
                           hover:text-lime-400">

                    🛒

                    <span id="cartCount"
                          class="absolute -top-2 -right-2
                                 bg-lime-400
                                 text-black
                                 text-xs
                                 font-bold
                                 rounded-full
                                 min-w-[20px]
                                 h-5
                                 flex items-center
                                 justify-center">

                        0

                    </span>

                </button>


                <!-- MOBILE -->
                <button
                    type="button"
                    onclick="toggleMobileMenu()"
                    class="md:hidden text-xl">

                    ☰

                </button>

            </div>

        </div>


        <!-- MOBILE MENU -->
        <div id="mobileMenu"
             class="hidden bg-[#080b10]
                    border-t border-gray-800
                    py-5">

            <div class="flex flex-col gap-4">

                <a href="index.html">
                    Shop
                </a>

                <a href="categories.html">
                    Categories
                </a>

                <a href="deals.html">
                    Deals
                </a>

                <a href="about.html">
                    About
                </a>

                <a href="contact.html">
                    Contact
                </a>

                <a href="orders.html">
                    Orders
                </a>

            </div>

        </div>

    </div>

</nav>
`;


const cartInterface = `

<!-- CART OVERLAY -->
<div id="cartOverlay"
     class="fixed inset-0 z-[70]
            bg-black/80 hidden">

    <div class="absolute right-0 top-0
                w-full sm:w-[430px]
                h-full
                bg-[#0d1117]
                border-l border-gray-800
                p-6 overflow-y-auto">

        <div class="flex justify-between
                    items-center mb-6">

            <h2 class="text-2xl font-bold">
                Your Cart
            </h2>

            <button
                type="button"
                onclick="closeCart()"
                class="text-3xl text-gray-400
                       hover:text-white">

                ×

            </button>

        </div>


        <div id="drawerCartItems"
             class="space-y-4">
        </div>


        <div class="border-t border-gray-800
                    mt-6 pt-5">

            <div class="flex justify-between mb-2">

                <span class="text-gray-400">
                    Subtotal
                </span>

                <span id="drawerSubtotal">
                    $0.00
                </span>

            </div>


            <div class="flex justify-between mb-2">

                <span class="text-gray-400">
                    Shipping
                </span>

                <span id="drawerShipping">
                    FREE
                </span>

            </div>


            <div class="flex justify-between
                        text-xl font-bold">

                <span>Total</span>

                <span id="drawerTotal"
                      class="text-lime-400">

                    $0.00

                </span>

            </div>


            <button
                type="button"
                onclick="openOrder()"
                class="w-full mt-6
                       bg-lime-400
                       text-black
                       py-4
                       rounded-xl
                       font-bold
                       hover:bg-lime-300">

                Proceed to Order

            </button>

        </div>

    </div>

</div>


<!-- ORDER POPUP -->
<div id="orderOverlay"
     class="fixed inset-0 z-[100]
            bg-black/80
            hidden
            items-center
            justify-center
            p-4">

    <div class="bg-[#11161d]
                border border-gray-700
                rounded-2xl
                w-full max-w-2xl
                max-h-[90vh]
                overflow-y-auto
                p-6">

        <div class="flex justify-between
                    items-center mb-6">

            <div>

                <h2 class="text-2xl font-bold">
                    Complete Your Order
                </h2>

                <p class="text-gray-500 text-sm">
                    Enter your delivery information
                </p>

            </div>


            <button
                type="button"
                onclick="closeOrder()"
                class="text-3xl text-gray-400">

                ×

            </button>

        </div>


        <div id="orderItems"
             class="space-y-3">
        </div>


        <div class="border-t border-gray-700
                    mt-6 pt-5 space-y-3">

            <div class="flex justify-between">
                <span class="text-gray-400">
                    Items
                </span>

                <span id="orderCount">
                    0
                </span>
            </div>


            <div class="flex justify-between">
                <span class="text-gray-400">
                    Subtotal
                </span>

                <span id="orderSubtotal">
                    $0.00
                </span>
            </div>


            <div class="flex justify-between">
                <span class="text-gray-400">
                    Shipping
                </span>

                <span id="orderShipping">
                    FREE
                </span>
            </div>


            <div class="flex justify-between
                        text-xl font-bold">

                <span>Total</span>

                <span id="orderTotal"
                      class="text-lime-400">
                    $0.00
                </span>

            </div>

        </div>


        <!-- CUSTOMER -->
        <div class="mt-7 space-y-4">

            <h3 class="font-bold text-lg">
                Delivery Information
            </h3>


            <input
                id="customerName"
                type="text"
                placeholder="Full Name"
                class="w-full
                       bg-[#080b10]
                       border border-gray-700
                       rounded-xl
                       px-4 py-3">


            <input
                id="customerPhone"
                type="tel"
                placeholder="Phone Number"
                class="w-full
                       bg-[#080b10]
                       border border-gray-700
                       rounded-xl
                       px-4 py-3">


            <textarea
                id="customerAddress"
                rows="4"
                placeholder="Delivery Address"
                class="w-full
                       bg-[#080b10]
                       border border-gray-700
                       rounded-xl
                       px-4 py-3"></textarea>

        </div>


        <!-- PAYMENT -->
        <div class="mt-5">

            <label class="flex gap-3
                          items-center
                          border border-gray-700
                          rounded-xl
                          p-4">

                <input
                    type="radio"
                    name="payment"
                    checked>

                <span>
                    💵 Cash on Delivery
                </span>

            </label>

        </div>


        <!-- CONFIRM -->
        <button
            type="button"
            onclick="confirmOrder()"
            class="w-full mt-6
                   bg-lime-400
                   text-black
                   py-4
                   rounded-xl
                   font-bold
                   hover:bg-lime-300">

            Confirm Order

        </button>

    </div>

</div>


<!-- SUCCESS -->
<div id="successOverlay"
     class="fixed inset-0 z-[120]
            bg-black/80
            hidden
            items-center
            justify-center
            p-4">

    <div class="bg-[#11161d]
                border border-lime-400
                rounded-2xl
                p-8
                text-center
                max-w-md
                w-full">

        <div class="text-5xl mb-4">
            ✅
        </div>

        <h2 class="text-2xl font-bold">
            Order Confirmed!
        </h2>

        <p id="successMessage"
           class="text-gray-400 mt-3">
        </p>

        <button
            type="button"
            onclick="closeSuccess()"
            class="w-full mt-6
                   bg-lime-400
                   text-black
                   py-3
                   rounded-xl
                   font-bold">

            Continue Shopping

        </button>

    </div>

</div>
`;


/* INSERT COMPONENTS */

function loadComponents() {

    document.body.insertAdjacentHTML(
        "afterbegin",
        navbar
    );

    document.body.insertAdjacentHTML(
        "beforeend",
        cartInterface
    );

}


/* LOAD */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        loadComponents
    );

} else {

    loadComponents();

}