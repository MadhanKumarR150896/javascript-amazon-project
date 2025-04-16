import {renderOrderSummary} from './checkout/ordersummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

// import '../data/cart-class.js';
// import '../data/backend-practise.js';


async function loadPage() {
 
  try {

    //throw 'error1';

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      //throw 'error2';
    loadCart(() => {
      //reject('error3');
      resolve('value3');
    });
  });

  console.log(value);

  } catch (error) {
    console.log('Unexpected error. Please try again');
    console.log(error);
  } 
 
  renderOrderSummary();
  renderPaymentSummary();
 
}

loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

*/

/*

new Promise((resolve) => {
  loadProducts(() => {
    resolve('Hello');
  });
}).then((value) => {
  console.log(value);
    return new Promise ((resolve) => {
      loadCart(() => {
        resolve();
        console.log('Help');
      });
      
    });
}).then(() => {
  console.log('Hi');
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
