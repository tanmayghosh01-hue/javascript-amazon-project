import { renderOrderSummary } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentSummary.js";


import { cart } from "../javascript-amazon-project-main/data/cart.js";


renderOrderSummary();

renderPaymentSummary();

console.log(cart)