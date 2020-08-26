
function addToCard() {
  const cartNumber = document.getElementById("cart-number")
  const current = cartNumber.innerHTML

  cartNumber.innerHTML = parseInt(current) + 1
}