import { orders } from '../data/orders.js';

const params = new URLSearchParams(window.location.search);
const orderId = params.get('orderId');
const productId = params.get('productId');

const trackingContainer = document.querySelector('.tracking-container');

function getOrderAndProduct() {
  const order = orders.find(o => o.id === orderId);
  if (!order) return null;
  const product = order.products.find(p => p.id === productId);
  return { order, product };
}

function generateTrackingHTML() {
  const data = getOrderAndProduct();
  if (!data) {
    trackingContainer.innerHTML = '<p>Invalid tracking information.</p>';
    return;
  }

  const { order, product } = data;
  const progress = Math.min(order.deliveryProgress, 100);

  trackingContainer.innerHTML = `
    <h3>Tracking for ${product.name}</h3>
    <p>Order ID: ${order.id}</p>
    <p>Status: ${order.status}</p>
    <div class="progress-bar">
      <div class="progress" style="width: ${progress}%"></div>
    </div>
    <p>${progress}% delivered</p>
  `;
}

generateTrackingHTML();
