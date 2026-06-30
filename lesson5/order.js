import { orders } from '../data/orders.js';
import { addToCart } from '../data/cart.js';

const ordersContainer = document.querySelector('.orders-container');

function generateOrdersHTML() {
  let html = '';
  orders.forEach(order => {
    html += `
      <div class="order">
        <h3>Order #${order.id}</h3>
        ${order.products.map(product => `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <button class="buy-again" data-product-id="${product.id}">Buy it again</button>
            <button class="track-package" data-order-id="${order.id}" data-product-id="${product.id}">Track package</button>
          </div>
        `).join('')}
      </div>
    `;
  });
  ordersContainer.innerHTML = html;
}

generateOrdersHTML();

// Interactivity
ordersContainer.addEventListener('click', e => {
  if (e.target.classList.contains('buy-again')) {
    const productId = e.target.dataset.productId;
    addToCart(productId);
    alert('Product added to cart!');
  }

  if (e.target.classList.contains('track-package')) {
    const orderId = e.target.dataset.orderId;
    const productId = e.target.dataset.productId;
    window.location.href = `tracking.html?orderId=${orderId}&productId=${productId}`;
  }
});
