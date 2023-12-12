document.querySelector('#category').addEventListener('change', function(e) {
    const category = e.target.value;
    const products = document.querySelectorAll('.product');
    
    products.forEach(function(product) {
      if (category === 'all' || product.classList.contains(category)) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
  });
