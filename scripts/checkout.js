import {renderOrderSummary} from './checkout/ordersummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';

// import '../data/cart-class.js';
// import '../data/backend-practise.js';

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('Hello');
    });
  }),

  new Promise((resolve) => {
    loadCart(() => {
      resolve('Madhan');
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('Hello');
  });

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
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
  
  });
*/
