

class Cart {

    cartItems;

    localStoragekey;

    constructor(localStoragekey) {
        this.localStoragekey = localStoragekey;
        this.loadFromStorage();
    }

    loadFromStorage() {
    
        this.cartItems = JSON.parse(localStorage.getItem(this.localStoragekey));
      
        if (!this.cartItems) {
          this.cartItems = [{
              productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
              quantity: 2,
              deliveryOptionId :  '1'
            }, {
                productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity : 1,
                deliveryOptionId : '2'
            }];
        }
    }

    saveToStorage() {
        localStorage.setItem(this.localStoragekey, JSON.stringify(this.cartItems));
        // localStorage.setItem('itemLength', )
        // document.querySelector('.js-cart-items').innerHTML = `${cart.length} items`
    }

    addToCart(productId) {
        let matchingItem;
      
          this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){
              matchingItem = cartItem;
            }
          });
      
          const quantitySelector = document.querySelector(
            `.js-quantity-selector-${productId}`
          );
      
          // const quantity = Number(quantitySelector.value);
      
      
          if (matchingItem) {
            matchingItem.quantity += 1;
          } else {
            this.cartItems.push({
              productId : productId,
              quantity : 1,
              deliveryOptionId : '1'
            });
          }
    
          this.saveToStorage();
    }

    removeFromCart(productId) {
    
        const newCart = [];
    
        this.cartItems.forEach((cartItem) => {
    
          if (cartItem.productId !== productId) {
                  newCart.push(cartItem);
            }
        });
    
    
        this.cartItems = newCart;
    
        this.saveToStorage();
          
    }

    updateDeliveryOption(productId, deliveryOptionId) {
    
        let matchingItem;
      
          this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){
              matchingItem = cartItem;
            }
          });
    
          matchingItem.deliveryOptionId = deliveryOptionId;
    
          this.saveToStorage();
    }



}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');





// console.log(cart)


// export let itemLength = 0;

// cart.forEach((cartItem) => {
//   itemLength += cartItem.quantity;
// })

// console.log(itemLength);


console.log(cart);
console.log(businessCart);

  


  
























