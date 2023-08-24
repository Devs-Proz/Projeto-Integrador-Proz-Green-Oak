document.addEventListener('DOMContentLoaded', function() {
  const products = document.querySelectorAll('.card-produtos');

  products.forEach(product => {
    const button = product.querySelector('button.comprar');
    button.addEventListener('click', () => {
      const productName = product.querySelector('h3').textContent;
      const productPrice = product.querySelector('p').textContent;

      // Customize the cart URL as needed
      const cartURL = '/cart.html';

      // Add the product information to the cart URL as query parameters
      const queryParams = `?name=${encodeURIComponent(productName)}&price=${encodeURIComponent(productPrice)}`;
      const finalURL = cartURL + queryParams;

      // Redirect to the cart page
      window.location.href = finalURL;
    });
  });
});
