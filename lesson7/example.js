console.log("hello world");
async function fetchData() {
  try {
    const response = await fetch('https://github.com');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  button.textContent = 'Clicked! ✅';
  button.style.backgroundColor = '#4CAF50';
});
    const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Phone', price: 800, category: 'Electronics' }
];


const premiumElectronics = products
  .filter(item => item.category === 'Electronics' && item.price > 500)
  .map(item => item.name);

console.log(premiumElectronics); // Output: ['Laptop', 'Phone']
