let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  document.getElementById("cart-count").textContent = cart.length;
  alert(`${product} has been added to your cart.`);
}

function viewCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    cartItems.appendChild(li);
  });
  document.getElementById("total-price").textContent = total;
  document.getElementById("cart").style.display = "block";
}

function closeCart() {
  document.getElementById("cart").style.display = "none";
}

