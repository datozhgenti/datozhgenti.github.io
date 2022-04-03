$(document).ready(() => {
    $(".cart_button").on("click", () => {
        $(".cart").css("display", "block");
        $(".cart_darken_background").css("display", "block");
    });

    $(".cart_darken_background").on("click", (e) => {
        e.target.style.display = "none";
        $(".cart").css("display", "none");
    });

    $(".fa-close").on("click", () => {
        $(".cart").css("display", "none");
        $(".cart_darken_background").css("display", "none");
    });

    let navOn = false;

    $(".burger_btn").on("click", () => {
        navOn = !navOn;

        if (navOn) {
            $("#burger_icon").css("background-color", "black");
            $(".responsive_nav_wrapper").css("right", "0");
        } else {
            $("#burger_icon").css("background-color", "transparent");
            $(".responsive_nav_wrapper").css("right", "-2000px");
        }

    });




    class Product {
        constructor(imgUrl, name, price, discount, category, quantity) {
            this.imgUrl = imgUrl;
            this.name = name;
            this.price = price;
            this.discount = discount;
            this.category = category;
            this.quantity = quantity;
        }
    }

    const products = [];

    products.push(new Product("assets/girl.jpg", "White Tent", "$ 200.00 USD", "none", "Tents"));
    products.push(new Product("assets/glass.jpg", "Tin Coffee Tumbler", "$ 35.00 USD", "none", "Accessories"));
    products.push(new Product("assets/bag.jpg", "Blue Canvas Pack", "$ 95.00 USD", "$ 145.00 USD", "Packs"));
    products.push(new Product("assets/bag2.jpg", "Green Canvas Pack", "$ 95.00 USD", "$ 145.00 USD", "Packs"));
    products.push(new Product("assets/gift-card.jpg", "Gift Card", "$ 25 USD", "none", "Gift Cards"));


    $(".filter_btn_wrapper a").on("click", (e) => {
        $(".filter_btn_wrapper a").removeClass("active");

        e.target.classList.add("active");

        // console.log(e.target.text);

        $.each(products, (index, value) => {
            if (e.target.text === value.category) {
                let filteredProducts = products.filter(product => product.category === e.target.text);



                $("#shop_page_products").empty();

                $.each(filteredProducts, (i) => {
                    $("#shop_page_products").append(` <div class="support_cart prod_cart">
                    <div class="support_cart_header product_card_picture" style="background-image:url(${filteredProducts[i].imgUrl});">
                     ${filteredProducts[i].discount==="none"?"":"<div>SALE</div>"}
                    </div>
                    <div class="support_cart_text product_cart_text" style="color: #333;">
                        <div style="margin-bottom:10px;font-size: 20px;">${filteredProducts[i].name}</div>
                        <strong style="font-size:14px;">${filteredProducts[i].price} <del style="text-decoration: line-through; color: #eb5757;margin-left: 5px;">${filteredProducts[i].discount==="none"?"":filteredProducts[i].discount}</del></strong>
                        <a href="inner.html" class="hero_button products_button">Details</a>
                    </div>
                   </div>`);
                });

                detailsBtnClick();

            } else if (e.target.text === "All") {
                $("#shop_page_products").empty();
                $.each(products, (i) => {
                    $("#shop_page_products").append(` <div class="support_cart prod_cart">
                    <div class="support_cart_header product_card_picture" style="background-image:url(${products[i].imgUrl});">
                     ${products[i].discount==="none"?"":"<div>SALE</div>"}
                    </div>
                    <div class="support_cart_text product_cart_text" style="color: #333;">
                        <div style="margin-bottom:10px;font-size: 20px;">${products[i].name}</div>
                        <strong style="font-size:14px;">${products[i].price} <del style="text-decoration: line-through; color: #eb5757;margin-left: 5px;">${products[i].discount==="none"?"":products[i].discount}</del></strong>
                        <a href="inner.html" class="hero_button products_button">Details</a>
                    </div>
                   </div>`);
                });


                detailsBtnClick();
            }
        });


    });


    detailsBtnClick();


    donateBtnClick();

    addToCart();


    function detailsBtnClick() {
        $(".products_button").on("click", (e) => {
            let imgUrl = e.target.parentNode.parentNode.firstElementChild.style.backgroundImage;
            let name = e.target.parentNode.firstElementChild.textContent;
            let price = e.target.parentNode.childNodes[3].innerHTML;

            let productObject = new Product(imgUrl, name, price);

            localStorage.setItem("innerProduct", JSON.stringify(productObject));
        });

        $(".products .prod_cart").each((index) => {
            $(".products .support_cart")[index].addEventListener("click", () => {
                $(".products_button")[index].click();
            });
        });

        $(".shop_page_main .prod_cart").each((index) => {
            $(".shop_page_main .support_cart")[index].addEventListener("click", () => {
                $(".products_button")[index].click();
            });
        });
    }


    function donateBtnClick() {
        $("[id='donate_btn']").click((e) => {
            let name = e.target.textContent;
            let imgUrl = "url(assets/" + name.slice(6) + ".png)";
            let price = `$${name.slice(6).replace("$","")}.00 USD`;

            let donate = new Product(imgUrl.replace(" ", ""), name, price);

            localStorage.setItem("innerProduct", JSON.stringify(donate));
        });
    }


    function addToCart() {
        if (localStorageCartItemsEmpty()) {
            var cartItems = [];
        } else {
            var cartItems = JSON.parse(localStorage.acmeCartItems);
            changeDefaultCartStyle();
            addItemsInCart(cartItems);
            removeFromCart(cartItems);
            productInputChange(cartItems);
        }

        $("#add_to_card_btn").click((e) => {
            $(".cart").css("display", "block");

            $(".cart_darken_background").css("display", "block");

            changeDefaultCartStyle();



            let productImg = $("#inner_card_img").css("background-image").slice(4).replace(")", "");
            let productName = $("#inner_product_name").text();
            let productPrice = $("#inner_product_price").html();
            let quantity = Number($("#inner_input").val());

            let productExists = cartItems.findIndex((val) => { return val.name === productName });

            if (productExists > -1) {
                cartItems[productExists].quantity += quantity;
            } else {
                cartItems.push(new Product(productImg, productName, productPrice, undefined, undefined, quantity));
            }

            localStorage.setItem("acmeCartItems", JSON.stringify(cartItems));

            addItemsInCart(JSON.parse(localStorage.acmeCartItems));

            removeFromCart(JSON.parse(localStorage.acmeCartItems));

            productInputChange(JSON.parse(localStorage.acmeCartItems));

        });
    }


    function changeDefaultCartStyle() {
        $(".cart_items_wrapper p").css("display", "none");

        $(".cart_items_wrapper").css({
            "flex-direction": "column",
            "align-items": "flex-start",
            "justify-content": "flex-start",
            "height": "75%"
        });

        $(".cart").append(`
        <div class="cart_bottom_content">
           <div class="subtotal_wrapper">
              <p>Subtotal</p>
              <strong>$ 250.00 USD</strong>
           </div>
           <div class="checkout_btn_wrapper">
              <a href="#4" class="hero_button checkout_btn" id="donate_btn" style="height:100%;">Continue to Checkout</a>
           </div>
        </div>`);
    }



    function localStorageCartItemsEmpty() {
        if (localStorage.getItem("acmeCartItems") === null) {
            return true;
        }

        return false;
    }


    function addItemsInCart(cartItems) {
        $(".cart_items_wrapper").empty();
        for (let i = 0; i < cartItems.length; i++) {
            $(".cart_items_wrapper").append(`
            <div class="cart_item_wrapper">
              <div class="cart_item_img_wrapper">
                <img src=${cartItems[i].imgUrl} alt="product image" style="width: 100%;display: block;height:80px;object-fit:cover;">
            </div>
            <div class="cart_item_details_wrapper space_between" style="flex-wrap:nowrap;">
               <div class="cart_item_text">
                    <strong style="display: block; text-transform:capitalize;">${cartItems[i].name}</strong>
                    <strong style="display: block;" class="cart_price">${cartItems[i].price}</strong>
                    <a  style="color: #eb5757;text-decoration: underline;cursor:pointer;" class="remove_btn">Remove</a>
                </div>
                <div class="product_item_input">
                    <input type="number" min="1" value="${cartItems[i].quantity}" class="contact_input cart_input"  style="width: 100%;padding:8px;">
                </div>
              </div>
           </div>`);
        }

        CartItemsQuantity();
        CartSubtotal();

    }


    function CartItemsQuantity() {
        let quantity = 0;

        $(".cart_input").each((index) => {
            quantity += Number($(".cart_input")[index].value);
        });


        $(".cart_button span").text(`${quantity}`);
    }


    function CartSubtotal() {
        let Subtotal = 0;

        $(".cart_price").each((index) => {
            let price = Number($(".cart_price")[index].firstChild.data.replace(/[^0-9\.]+/g, ''));
            let quantity = $(".cart_input")[index].value;

            Subtotal += (price * quantity);

        });

        $(".subtotal_wrapper strong").text(`$ ${Subtotal.toFixed(2)} USD`);
    }

    function removeFromCart(cartItems) {
        $(".remove_btn").each((index) => {
            $(".remove_btn")[index].addEventListener("click", () => {
                $(".cart_items_wrapper").empty();

                cartItems.splice(index, 1);

                localStorage.setItem("acmeCartItems", JSON.stringify(cartItems));

                addToCart(JSON.parse(localStorage.acmeCartItems));

                if (localStorage.acmeCartItems === '[]') {
                    localStorage.removeItem("acmeCartItems");
                    DefaultCartStyle();
                }
            });
        });
    }

    function DefaultCartStyle() {
        $(".cart_items_wrapper").css({
            "flex-direction": "row",
            "align-items": "center",
            "justify-content": "center",
            "height": "90%"
        });

        $(".cart_bottom_content").remove();

        $(".cart_items_wrapper").html("<p>No Items Found</p>");
    }


    function productInputChange(cartItems) {
        $(".cart_input").each((index) => {
            $(".cart_input")[index].addEventListener("change", () => {

                // console.log($(".cart_input")[index].value);


                cartItems[index].quantity = Number($(".cart_input")[index].value);

                localStorage.setItem("acmeCartItems", JSON.stringify(cartItems));

                $(".cart_items_wrapper").empty();

                addToCart(JSON.parse(localStorage.acmeCartItems));


            });
        });
    }


});