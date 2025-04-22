export let orders ;

loadFromStorage();

export function loadFromStorage () {
  orders = JSON.parse(localStorage.getItem('orders')) || [];
  
}

export function addOrder(order) {
  orders.unshift(order);
  saveToSTorage();
}

function saveToSTorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

export function getOrderProduct(orderId,productId) {
  let matchingOrderProduct;
  let matchingOrder;

  orders.forEach((order)=> {
    if(order.id === orderId) {
      matchingOrder = order;
    }
  });

  matchingOrder.products.forEach((product) => {
    if(product.productId === productId) {
      matchingOrderProduct = product;
    }
  });

  return matchingOrderProduct;
}

export function getOrder(orderId) {
 
  let matchingOrder;

  orders.forEach((order)=> {
    if(order.id === orderId) {
      matchingOrder = order;
    }
  });

    return matchingOrder;
}
