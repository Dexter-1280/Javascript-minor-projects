import { products } from '../data/products.js';

const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');
const productsContainer = document.querySelector('.products-container');

// Handle search button click
searchButton.addEventListener('click', () => {
  const searchValue = searchInput.value.trim();
  if (searchValue) {
    // Redirect to home page with search parameter
    window.location.href = `amazon.html?search=${encodeURIComponent(searchValue)}`;
  }
});

// Get search term from URL
const params = new URLSearchParams(window.location.search);
const searchTerm = params.get('search');

function generateProductsHTML(filteredProducts) {
  let html = '';
  filteredProducts.forEach(product => {
    html += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `;
  });
  productsContainer.innerHTML = html;
}

// Filter products based on search term
function filterProducts() {
  if (!searchTerm) {
    generateProductsHTML(products);
    return;
  }

  const lowerSearch = searchTerm.toLowerCase();

  const filtered = products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(lowerSearch);
    const keywordMatch = product.keywords.some(keyword =>
      keyword.toLowerCase().includes(lowerSearch)
    );
    return nameMatch || keywordMatch;
  });

  generateProductsHTML(filtered);
}

filterProducts();
