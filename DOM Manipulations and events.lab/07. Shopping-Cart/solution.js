function solve() {
   let products = Array.from(document.querySelectorAll('[class="product"]'));
   let checkoutButton = document.querySelector('[class="checkout"]');
   let textArea = document.querySelector('textArea');
   let productsName = [];
   let totalPrice = 0;
   let counter = 0;


   for (let product of products) {
      let name = product.querySelector('[class="product-details"]').children[0].textContent;
      let price = product.querySelector('[class="product-line-price"]').textContent;
      price = Number(price).toFixed(2);
      let addButton = product.querySelector('[class="product-add"]');

      addButton.addEventListener('click', () => {
         if (!productsName.includes(name)) {
            productsName.push(name);
         }
         totalPrice += Number(price);
         textArea.textContent += `Added ${name} for ${price} to the cart.\n`;
      })
   }

   checkoutButton.addEventListener('click', () => {
      textArea.textContent += `You bought ${productsName.join(', ')} for ${totalPrice.toFixed(2)}.`;
      let allButtons = document.querySelectorAll('button');
      for (let button of allButtons) {
         button.disabled = true;
      }
   })

}