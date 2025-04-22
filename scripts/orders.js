import {orders} from '../data/orders.js';
import{products,getProduct,loadProductsFetch} from '../data/products.js';
import {formatCurrency} from './utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { addToCart } from '../data/cart.js';




async function loadPage() {

    await loadProductsFetch();

  let orderTrackSummaryHTML =  ` `;
  
  orders.forEach((order) => {
    
    let orderTimeString = dayjs(order.orderTime).format('MMMM D');
    
    
    orderTrackSummaryHTML += `
        
          <div class="order-container">
            
            <div class="order-header">
              <div class="order-header-left-section">
                <div class="order-date">
                  <div class="order-header-label">Order Placed:</div>
                  <div>${orderTimeString}</div>
                </div>
                <div class="order-total">
                  <div class="order-header-label">Total:</div>
                  <div>$${formatCurrency(order.totalCostCents)}</div>
                </div>
              </div>

              <div class="order-header-right-section">
                <div class="order-header-label">Order ID:</div>
                <div>${order.id}</div>
              </div>
            </div>

            <div class="order-details-grid">
              ${productsHTML(order)}
            </div>
          </div>     

  `;

});

  function productsHTML (order) {

    let productsHTML = '';

  order.products.forEach((item)=> {

    let matchingProduct;
    products.forEach((product)=> {

      if(product.id ===item.productId) {
        matchingProduct = product;
      }

    });

    productsHTML += `
        <div class="product-image-container">
          <img src="${matchingProduct.image}">
        </div>

        <div class="product-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-delivery-date">
            Arriving on: ${dayjs(item.estimatedDeliveryTime).format('MMMM D')}
          </div>
          <div class="product-quantity">
            Quantity: ${item.quantity}
          </div>
          <button class="buy-again-button button-primary js-buy-again"
          data-product-id="${matchingProduct.id}">
            <img class="buy-again-icon" src="images/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>

        <div class="product-actions">
          <a href="tracking.html?orderId=${order.id}&productId=${matchingProduct.id}" >
            <button class="track-package-button button-secondary">
              Track package
            </button>
          </a>
        </div>

        
    `;

  })

  return productsHTML;
}
  



document.querySelector('.js-order-grid').innerHTML = orderTrackSummaryHTML;

document.querySelectorAll('.js-buy-again')
  .forEach((button) => {
    button.addEventListener('click', () => {
      addToCart(button.dataset.productId);

      button.innerHTML = 'Added';
      setTimeout(() => {
        button.innerHTML = `
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
        `;
      },2000)
      
    });
  });

}


loadPage();

