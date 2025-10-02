document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.99 },
  ];
  const cart = [];
  

  

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<span>${product.name} - $ ${product.price.toFixed(
      2
    )}</span>
       <button class="add-btn" data-id="${product.id}">Add to cart</button>
       
       `;
    productList.appendChild(productDiv);
  });

  const savedCart=JSON.parse(localStorage.getItem("cart")) ||[];
  cart.push(...savedCart);
  renderCart();

  productList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const productId = parseInt(event.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
                    ${item.name} - $${item.price.toFixed(2)}
                    <button class="delete-btn" id="delete-product" data-id="${
                      item.id
                    }">Delete</button>
                `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice}`;

        // Delete Button functionality
        const deleteProductbtn = cartItem.querySelector(".delete-btn");

        deleteProductbtn.addEventListener("click", (event) => {
          if (event.target.tagName === "BUTTON") {
            const deleteId = parseInt(event.target.getAttribute("data-id"));
            const index = cart.findIndex((item) => item.id === deleteId);
            if (index !== -1) {
              cart.splice(index, 1);
              localStorage.setItem("cart",JSON.stringify(cart));
            }
            totalPrice -= item.price;
            totalPriceDisplay.textContent = `${totalPrice}`;
          }
          renderCart();
        });
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
    }
  }

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert(`cheking out pay ${totalPriceDisplay.textContent}`);
    localStorage.removeItem("cart");
    totalPriceDisplay.textContent = `$0.00`;
    renderCart();
  });

});
