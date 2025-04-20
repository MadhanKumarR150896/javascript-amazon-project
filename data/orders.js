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
