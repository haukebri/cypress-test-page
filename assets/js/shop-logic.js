
function addToCard(newItemName) {
  const cartNumber = document.getElementById("cart-number")
  const current = cartNumber.innerHTML
  const cartItems = document.getElementById("cartitems")
  const newItem = document.createElement('li')

  cartNumber.innerHTML = parseInt(current) + 1

  newItem.innerHTML = newItemName
  cartItems.appendChild(newItem)

}

function openCart(){
  document.getElementById("cart-fly-in").style.display = "block"
}

function closeCart(){
  document.getElementById("cart-fly-in").style.display = "none"
  document.getElementById("deliverytruck").style.left = "0"

}

function deliver(){
  document.getElementById("cart-number").innerHTML = "0"
  document.getElementById("deliverytruck").style.left = "120%"
  document.getElementById("cartitems").innerHTML= ""
}