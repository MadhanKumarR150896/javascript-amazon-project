import {loadProductsFetch,getProduct } from "../data/products.js";
import {getOrderProduct,getOrder} from '../data/orders.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';



async function loadPage() {

  
  
  await loadProductsFetch();

  let trackingHTML = '';

  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');
  const productId = url.searchParams.get('productId');

  let matchingOrder = getOrder(orderId);
  let matchingOrderProduct = getOrderProduct (orderId,productId);
  let matchingProduct = getProduct(productId);

  const currentTime = dayjs();
  const orderTime = dayjs(matchingOrder.orderTime);
  const deliveryTime = dayjs(matchingOrderProduct.estimatedDeliveryTime);
  const percentProgress = ((currentTime-orderTime)/(deliveryTime-orderTime))*100;

  
  let timeString = dayjs(matchingOrderProduct.estimatedDeliveryTime).format('MMMM D');
    
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
            <div class="progress-label ${percentProgress < 50 ? 'current-status' : ''}">
              Preparing
            </div>
            <div class="progress-label ${(percentProgress > 50 && percentProgress <= 100) ? 'current-status' : ''}">
              Shipped
            </div>
            <div class="progress-label ${percentProgress > 100 ? 'current-status' : ''}">
              Delivered
            </div>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${percentProgress}%;"></div>
          </div>

  `;


  document.querySelector('.js-order-tracking').innerHTML = trackingHTML;

}



loadPage();