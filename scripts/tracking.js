import {loadProductsFetch,getProduct } from "../data/products.js";
import {getOrderProduct} from '../data/orders.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

async function loadPage() {

  await loadProductsFetch();

  document.querySelector('.js-order-tracking').innerHTML = getTrackingHTML();

}

function getTrackingHTML () {
  let trackingHTML = '';

  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');
  const productId = url.searchParams.get('productId');

  let matchingOrderProduct = getOrderProduct (orderId,productId);

  let timeString = dayjs(matchingOrderProduct.estimatedDeliveryTime).format('MMMM D');
  
  let matchingProduct = getProduct(productId);

  
   trackingHTML += `

    <a class="back-to-orders-link link-primary" href="orders.html">
            View all orders
          </a>

          <div class="delivery-date">
            Arriving on ${timeString}
          </div>

          <div class="product-info">
            ${matchingProduct.name}
          </div>

          <div class="product-info">
            Quantity: ${matchingOrderProduct.quantity}
          </div>

          <img class="product-image" src="${matchingProduct.image}">

          <div class="progress-labels-container">
            <div class="progress-label">
              Preparing
            </div>
            <div class="progress-label current-status">
              Shipped
            </div>
            <div class="progress-label">
              Delivered
            </div>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>

  `;

  return trackingHTML;
}

loadPage();