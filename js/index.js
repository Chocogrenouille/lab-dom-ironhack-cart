// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subTotal = price * quantity;
  product.querySelector('.subtotal').innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('.product');
  let subTotal = 0;
  for (let i = 0; i < allProducts.length; i++) {
    subTotal += updateSubtotal(allProducts[i]);
    console.log(subTotal);
  }
  document.querySelector('#total-value span').innerHTML = subTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parentElement = target.parentNode.parentNode.parentNode;
  parentElement.removeChild(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }
});