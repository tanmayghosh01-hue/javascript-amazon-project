
export let cart = JSON.parse(localStorage.getItem('cart'));



if (!cart[0]) {
  cart = [{
      productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId :  '1'
    }, {
        productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity : 1,
        deliveryOptionId : '2'
    }];
}

console.log(cart)


export let itemLength = cart.length;


export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
  // localStorage.setItem('itemLength', )
  // document.querySelector('.js-cart-items').innerHTML = `${cart.length} items`
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
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId : productId,
          quantity : 1,
          deliveryOptionId : '1'
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


  export function updateDeliveryOption(productId, deliveryOptionId) {

    let matchingItem;
  
      cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
          matchingItem = cartItem;
        }
      });


      matchingItem.deliveryOptionId = deliveryOptionId;

      saveToStorage();
  }