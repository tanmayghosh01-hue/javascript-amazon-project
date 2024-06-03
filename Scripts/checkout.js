import { renderOrderSummary } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import { loadProducts, loadProductsFetch } from "../javascript-amazon-project-main/data/products.js";

import { loadCart } from "../javascript-amazon-project-main/data/cart.js";

// import '../javascript-amazon-project-main/data/backend-practice.js';


// import { cart } from "../javascript-amazon-project-main/data/cart.js";

// import "../javascript-amazon-project-main/data/cart-class.js";

async function loadpage() {
    await loadProductsFetch();


    const value = await new Promise((resolve) => {
        loadCart(() => {
            resolve('value3');
        });
    });

    renderOrderSummary();
    renderPaymentSummary();
}

loadpage();

/*
Promise.all([

    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        })
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});

*/


/*


new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    })
}).then((value) => {


    console.log(value);

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

*/



/*

loadProducts( () => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});

*/



// console.log(cart)