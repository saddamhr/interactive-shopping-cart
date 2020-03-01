var clicks = 1;
function onClick() {
  clicks += 1;
  return clicks;
}

var clicks2 = 1;
function onClick2() {
  clicks2 += 1;
  return clicks2;
}

var productOnePrice = document.getElementById("first-product-price").innerText;
var productOnePriceInNumber = parseInt(productOnePrice);

function getFirstProductPrice() {
  var productOneTotalPrice = productOnePriceInNumber * clicks;
  return productOneTotalPrice;
}

var productTwoPrice = document.getElementById("second-product-price").innerText;
var productTwoPriceInNumber = parseInt(productTwoPrice);

function getSecondProductPrice() {
  var productTwoTotalPrice = productTwoPriceInNumber * clicks2;
  return productTwoTotalPrice;
}

function getSubTotalPrice() {
  var totalPrice = getFirstProductPrice() + getSecondProductPrice();
  document.getElementById("sub-total").innerText = totalPrice;
}

function getTotalPrice() {
  var totalPrice = getFirstProductPrice() + getSecondProductPrice();
  document.getElementById("total").innerText = totalPrice;
}

const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener("click", function() {
  document.getElementById("number-of-item").value = onClick();
  document.getElementById("first-product-price").innerText = getFirstProductPrice();
  getSubTotalPrice();
  getTotalPrice();
});

const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", function() {
  if(clicks == 1) {
    document.getElementById("number-of-item").value = 1;
  } else {
    document.getElementById("number-of-item").value = --clicks;
    document.getElementById("first-product-price").innerText = getFirstProductPrice();
    getSubTotalPrice();
    getTotalPrice();
  }
});

const plusBtn2 = document.getElementById("product-incement");
plusBtn2.addEventListener("click", function() {
  document.getElementById("product-two-item").value = onClick2();
  document.getElementById("second-product-price").innerText = getSecondProductPrice();
  getSubTotalPrice();
  getTotalPrice();
});

const minusBtn2 = document.getElementById("product-decrement");
minusBtn2.addEventListener("click", function() {
  if(clicks2 == 1) {
    document.getElementById("product-two-item").value = 1;
  } else {
    document.getElementById("product-two-item").value = --clicks2;
    document.getElementById("second-product-price").innerText = getSecondProductPrice();
    getSubTotalPrice();
    getTotalPrice();
  }
});
