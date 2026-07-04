// wishlist.js
let wishlist = [
  { id: 1, name: "Wireless Mouse", qty: 2 },
  { id: 2, name: "Bluetooth Headphones", qty: 1 },
  { id: 3, name: "Mechanical Keyboard", qty: 1 }
];

function getWishlistCount() {
  return wishlist.reduce((sum, item) => sum + item.qty, 0);
}

function addToWishlist(name, qty) {
  const id = wishlist.length + 1;
  wishlist.push({ id, name, qty });
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter(item => item.id !== id);
}

function displayWishlist() {
  console.log("Wishlist:");
  wishlist.forEach(item => {
    console.log(`${item.name} (x${item.qty})`);
  });
  console.log("Total items:", getWishlistCount());
}

// orders.js
let orders = [
  { id: 101, product: "Wireless Mouse", status: "Delivered" },
  { id: 102, product: "Bluetooth Headphones", status: "Shipped" }
];

function placeOrder(product) {
  const id = orders.length + 101;
  orders.push({ id, product, status: "Processing" });
}

function updateOrderStatus(id, status) {
  const order = orders.find(o => o.id === id);
  if (order) order.status = status;
}

function displayOrders() {
  console.log("Orders:");
  orders.forEach(order => {
    console.log(`#${order.id} - ${order.product} [${order.status}]`);
  });
}

// tracking.js
function trackOrder(id) {
  const order = orders.find(o => o.id === id);
  if (!order) {
    console.log("Order not found.");
    return;
  }
  console.log(`Tracking Order #${id}: ${order.product} is currently ${order.status}.`);
}

// main.js
console.log("=== Wishlist Demo ===");
displayWishlist();
addToWishlist("Smartwatch", 1);
removeFromWishlist(2);
displayWishlist();

console.log("\n=== Orders Demo ===");
displayOrders();
placeOrder("Smartwatch");
updateOrderStatus(103, "Shipped");
displayOrders();

console.log("\n=== Tracking Demo ===");
trackOrder(103);
trackOrder(101);
