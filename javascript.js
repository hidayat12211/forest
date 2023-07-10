
var BackToTopBtn=document.getElementById('backToTopBtn');

window.addEventListener('scroll', function(){
  if(this.window.pageYOffset>300){
    BackToTopBtn.style.display='block';
  }else{
    BackToTopBtn.style.display='none';
  }
})

BackToTopBtn.addEventListener('click', function(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
});

// card function buy items
// let cartItems = [];
// let totalPrice = 0;

// function addToCart(imagePath, price) {
//   cartItems.push({ imagePath, price });
//   totalPrice += price;

//   updateCart();
// }

// function removeFromCart(index) {
//   totalPrice -= cartItems[index].price;
//   cartItems.splice(index, 1);

//   updateCart();
// }

// function updateCart() {
//   const cartItemsElement = document.getElementById('cart-items');
//   const totalPriceElement = document.getElementById('total-price');
//   cartItemsElement.innerHTML = '';
  
//   for (let i = 0; i < cartItems.length; i++) {
//     const listItem = document.createElement('li');
//     const removeButton = document.createElement('button');
    
//     removeButton.innerText = 'Remove';
//     removeButton.onclick = function() {
//       removeFromCart(i);
//     };

//     listItem.innerHTML = `
//       <img src="${cartItems[i].imagePath}">
//       <span>Item ${i + 1}</span>
//       <span>Price: $${cartItems[i].price}</span>
//     `;
    
//     listItem.appendChild(removeButton);
//     cartItemsElement.appendChild(listItem);
//   }
  
//   totalPriceElement.innerText = totalPrice;
// }


// =================================================================>
// css of Add Card and Remove card

/* card css */
// .cardBody{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   justify-content: space-around;
//   margin-top: 4rem;
// }
// body {
//   font-family: Arial, sans-serif;
//   padding: 20px;
// }

// h1, h2, h3 {
//   margin: 0;
// }

// #items {
//   display: flex;
//   justify-content: space-between;
// }

// .item {
//   width: 30%;
//   border: 1px solid #ccc;
//   padding: 10px;
//   text-align: center;
// }

// .item img {
//   width: 100%;
//   max-height: 200px;
//   object-fit: contain;
// }

// #cart {
//   margin-top: 20px;
//   border: 1px solid #ccc;
//   padding: 10px;
// }

// #cart-items {
//   list-style: none;
//   padding: 0;
// }

// #cart-items li {
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// }

// #cart-items li img {
//   width: 50px;
//   height: 50px;
//   object-fit: contain;
//   margin-right: 10px;
// }

// button {
//   padding: 10px 20px;
//   background-color: #4caf50;
//   color: white;
//   border: none;
//   cursor: pointer;
// }

// button:hover {
//   background-color: #45a049;
// }

// button:active {
//   background-color: #3e8e41;
// }

// ======================================================
// HTML CODE

//  <!-- card iems -->
//   <!-- card Item -->
// <div class="cardBody">
    
//     <div id="items">
//       <div class="item">
//             <img src="image/C1.png">
//             <h3>Item 1</h3>
//             <p>Price: $10</p>
//             <button onclick="addToCart('image/C1.png', 10)">Add to Cart</button>
//       </div>
      
//         <div class="item">
//                 <img src="image/C2.png">
//                 <h3>Item 2</h3>
//                 <p>Price: $20</p>
//                 <button onclick="addToCart('image/C2.png', 20)">Add to Cart</button>
//         </div>
        
//         <div class="item">
//             <img src="image/C3.png">
//             <h3>Item 3</h3>
//             <p>Price: $15</p>
//             <button onclick="addToCart('image/C3.png', 15)">Add to Cart</button>
//         </div>
//     </div>

//     <div id="cart">
//       <h2>Cart</h2>
//       <ul id="cart-items">
        
//       </ul>
//       <p>Total Price: $<span id="total-price">0</span></p>
//     </div>
// </div>