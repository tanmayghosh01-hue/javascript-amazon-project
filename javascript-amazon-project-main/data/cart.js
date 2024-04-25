
export let cart = JSON.parse(localStorage.getItem('cart'));


export let itemLength = cart.length;


if (!cart) {
  cart = [{
              productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
              quantity: 2,
          }, {
              productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
              quantity : 1,
          }];
}





export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
  document.querySelector('.js-cart-items').innerHTML = `${cart.length} items`
}


export function addToCart(productId) {
    let matchingItem;
  
      cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
          matchingItem = cartItem;
        }
      });
  
  
      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
  
      const quantity = Number(quantitySelector.value);
  
  
      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        cart.push({
          productId : productId,
          quantity : quantity
        });
      }

      saveToStorage();
  }


  export function removeFromCart(productId) {

    const newCart = [];

    cart.forEach((cartItem) => {

      if (cartItem.productId !== productId) {
              newCart.push(cartItem);
        }
    });


    cart = newCart;

    saveToStorage();
      
  }