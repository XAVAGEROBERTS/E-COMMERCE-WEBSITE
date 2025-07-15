const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
     {
          id: 1,
          title: "Mercedez benz",
          price: 32000,
          desc: "Mercedes-Benz AMG 2020 is a Powerful car",
           colors: [
               {
               code: "white",
               img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
               },
               {
                    code: "orange",
                    img: "CAR 2.jpg",
               },
               
          ],
     },
     {
          id: 2,
          title: "iPhone 15 Pro Max",
          price: 1299.99,
          desc: "iPhone 15 Pro Max is a very Powerful Phone",
          colors: [
               {
               code: "gray",
               img: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
               },
               {
                    code: "brown",
                    img: "IPHONE.jpg",
                    
               },
               
          ],
     },
     {
          id: 3,
          title: "Enzo Ferrari",
          price: 80000.00,
          colors: [
               {
               code: "orange",
               img: "CAR 1.jpg"
               },
               {
                    code: "darkblue",
                    img: "enzo blue.jpg"
               },
               
          ],
     },
     {
          id: 4,
          title: "GALAXY S24 ULTRA",
          price: 1419.00,
          colors: [
              {
                    code: "gray",
                    img: "S24 ULTRA.jpg"
               },
               
               {
               code: "brown",
               img: "S24 UTTRA 2.jpg"
               },
             
          ],
     },
     {
          id: 5,
          title: "Mercedes-Benz C-Class ",
          price: 60000,
          colors: [
               {
               code: "gray",
               img: "CAR 4.jpg"
               },
               {
                    code: "darkblue",
                    img: "benz c class.jpg"
               },
               
          ],
     },

];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');
const currentProductDesc = document.querySelector('.productDesc');

menuItems.forEach((item, index)=> {
              item.addEventListener('click', () => {
               //change current slide
                   wrapper.style.transform = `translateX(${-100 * index}vw)`;
                     //change choosen product
     choosenProduct = products[index]
     //change texts of currentProduct
     currentProductTitle.textContent = choosenProduct.title;
     currentProductPrice.textContent = "$" + choosenProduct.price;
     currentProductImg.src = choosenProduct.colors[0].img;
     currentProductDesc.textContent = choosenProduct.desc;

     //new colors
     currentProductColors.forEach((color, index)=> {
          color.style.backgroundColor = choosenProduct.colors[index].code;
     });
                   
  });
   
});

currentProductColors.forEach((color, index)=> {
     color.addEventListener('click', ()=> {
          currentProductImg.src =  choosenProduct.colors[index].img
     });
});

currentProductSizes.forEach((size, index) => {
     size.addEventListener("click", ()=> {
          currentProductSizes.forEach((size)=> {
               size.style.backgroundColor = 'white'
                size.style.color = 'black'
         });
     size.style.backgroundColor = 'black'
     size.style.color = 'white'
     });
});



const sliderWrapperEl = document.querySelector('.sliderWrapper');
const menuItemEl = document.querySelectorAll('.menuItem');

menuItemEl.forEach((item, index) => {
     item.addEventListener('click', () => {
          menuItemEl.forEach(item => {
               item.style.color= 'rgb(153, 151, 151';
               sliderWrapperEl.style.animation='none';
          })
          item.style.color = 'white';
      
     })
    
});




const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click',()=> {
     payment.style.display = 'flex';
});
close.addEventListener('click',()=> {
     payment.style.display='none';
     window.location.reload();
});


const contactContainer = document.querySelector('.contact-container');
function openEmailForm() {
     contactContainer.style.display='flex';
     animationElementThree.style.animation='none';
}

const closeEmail =  document.querySelector('.closeEmail');
const closeEmailTwo =  document.querySelector('.closeEmail2');

closeEmail.addEventListener("click", ()=> {
     contactContainer.style.display= 'none';
})
closeEmailTwo.addEventListener("click", ()=> {
     contactContainer.style.display= 'none';
})



//cartbox

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));



//cartbox ends


// add to cart

const addCartButtons = document.querySelectorAll(".card-btn");
addCartButtons.forEach(button => {
              button.addEventListener("click", event => {
                            const productCard  = event.target.closest('.product-card');
                            addToCart(productCard);

              });
});


//adding to cart

const cartContent = document.querySelector('.cart-content');
const addToCart = productCard => {
     const productImgSrc = productCard.querySelector('img').src;
     const productTitle = productCard.querySelector('.product-brand').textContent;
     const productPrice = productCard.querySelector('.price').textContent;


     const cartItems = document.querySelectorAll('.cart-product-title');
     for(let item of cartItems) {
          if(item.textContent === productTitle) {
            alert('This item is already in the cart');
            return;
          }
     }
     const cartBox = document.createElement('div');
     cartBox.classList.add('cart-box');
     cartBox.innerHTML= `<img src="${productImgSrc}" alt="" class="cart-img" style="object-fit: fill;">
                                                                             <div class="cart-detail">
                                                                                           <h2 class="cart-product-title">${productTitle}</h2>
                                                                                           <span class="cart-price">${productPrice}</span>
                                                                                           <div class="cart-quantity">
                                                                                                         <button id="decrement">-</button>
                                                                                                         <span class="number">1</span>
                                                                                                         <button id="increment">+</button>
                                                                                           </div>
                                                                             </div>
                 
                                                                             <i class="ri-delete-bin-line cart-remove"></i>`;
                                                  
     cartContent.appendChild(cartBox); 
     const emptyCart = document.querySelector('.emptyCart');
     emptyCart.innerHTML= "";
     
     cartBox.querySelector('.cart-remove').addEventListener("click", ()=> {
          cartBox.remove();
          updateTotalPrice();
          updateCartCount(-1);
     });

     cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
          const numberElement = cartBox.querySelector(".number");
          const decrementButton = cartBox.querySelector("#decrement");
          let quantity = numberElement.textContent;

          if (event.target.id === "decrement" && quantity > 1) {
                        quantity--;

                        if (quantity === 1) {
                            decrementButton.style.color = "#999";
                        }
          } else if (event.target.id === "increment") {
                        quantity++;
                           decrementButton.style.color = "#333";
          }
          numberElement.textContent = quantity;
          updateTotalPrice();
});
updateTotalPrice();
updateCartCount(1);

};

const updateTotalPrice = () => {
     const totalPriceElement = document.querySelector(".total-price");
     const cartBoxes = cartContent.querySelectorAll(".cart-box");
     let total = 0;
     cartBoxes.forEach(cartBox => {
                   const priceElement = cartBox.querySelector(".cart-price");
                   const quantityElement = cartBox.querySelector(".number");
                   const price = priceElement.textContent.replace("$", "").replace(",", "");
                   const quantity = quantityElement.textContent;
                   total += price * quantity;
     });
     totalPriceElement.textContent = `US$${total}`;
};


let cartItemCount = 0;
const updateCartCount = change => {
              const cartItemCountBadge = document.querySelector(".cart-item-count");
              cartItemCount += change;
              if (cartItemCount > 0) {
                            cartItemCountBadge.style.visibility = "visible";
                            cartItemCountBadge.textContent = cartItemCount;
              } else {
                            cartItemCountBadge.style.visibility = "hidden";
                            cartItemCountBadge.textContent = "";
              }

};


const buyNowButton = document.querySelector(".btn-buy");
buyNowButton.addEventListener("click", () => {
              const payment = document.querySelector('.payment');
              const cartBoxes = cartContent.querySelectorAll(".cart-box");
              if (cartBoxes.length === 0) {
                            alert("Your cart is empty. Please add items to your cart before buying.");
                            return;
              } else {
                            cartBoxes.forEach(cartBox => cartBox.remove());
                            cartItemCount = 0;
                            updateCartCount(0);
                            updateTotalPrice();
                            
                           
                            payment.style.display= "flex";
                            cart.style.left='-100%';
                          
              }

});

// slidding images
document.addEventListener('DOMContentLoaded', function() {
  const productContainer = document.querySelector('.product-container');
  const prevBtn = document.querySelector('.pre-btn');
  const nextBtn = document.querySelector('.nxt-btn');
  
  // Get the width of one product card (including margin)
  const cardStyle = window.getComputedStyle(document.querySelector('.product-card'));
  const cardWidth = document.querySelector('.product-card').offsetWidth;
  const cardMarginRight = parseInt(cardStyle.marginRight);
  const scrollAmount = cardWidth + cardMarginRight;
  
  // Set initial scroll position
  productContainer.scrollLeft = 0;
  
  // Next button click
  nextBtn.addEventListener('click', function() {
    productContainer.style.scrollBehavior = 'smooth';
    productContainer.scrollLeft += scrollAmount;
  });
  
  // Previous button click
  prevBtn.addEventListener('click', function() {
    productContainer.style.scrollBehavior = 'smooth';
    productContainer.scrollLeft -= scrollAmount;
  });
});


const addToCartText = document.querySelectorAll('.card-btn').forEach(text=> {
     text.addEventListener('click', ()=> {
          text.innerHTML='added to Cart';
          
     })
})


// Function to create an intersection observer for animation
function setupAnimationObserver(element, animationClass) {
    const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
              if (entry.isIntersecting) {
                   element.classList.add(animationClass);
                   setTimeout(() => {
                        element.classList.remove(animationClass);
                   }, 4000);
                
                   // Unobserve after first animation if only once
                   observer.unobserve(element);
              }
         });
    }, {
        threshold: 0.5 // Trigger when 50% of element is visible
    });

    observer.observe(element);
    return observer; // Return observer
}

// animations for each element
const animationElementOne = document.querySelector('.nsItem:nth-child(1)');
const observer1 = setupAnimationObserver(animationElementOne, 'animateOne');

const animationElementTwo = document.querySelector('.nsItem:nth-child(3)');
const observer2 = setupAnimationObserver(animationElementTwo, 'animateTwo');

const animationElementThree = document.querySelector('.nsItem:nth-child(2)');
const observer3 = setupAnimationObserver(animationElementThree, 'animateThree');




const prdtEl = document.querySelector('.prdt');
const nleOneEl = document.querySelector('.nleOne').addEventListener('click', ()=> {
     setTimeout(()=> {
          prdtEl.style.transform='scale(140%)'
     },1000);
     setTimeout(()=> {
          prdtEl.style.transform='scale(100%)'
     },1500);
     setTimeout(()=> {
          prdtEl.style.transform='scale(140%)'
     },2000);
     setTimeout(()=> {
          prdtEl.style.transform='scale(100%)'
     },2500);
})

const prdtTwoEl = document.querySelector('.prdtTwo');
const nleTwoEl = document.querySelector('.nleTwo').addEventListener('click', () => {
     setTimeout(() => {
          prdtTwoEl.style.transform = 'scale(140%)'
     }, 1000);
     setTimeout(() => {
          prdtTwoEl.style.transform = 'scale(100%)'
     }, 1500);
     setTimeout(() => {
          prdtTwoEl.style.transform = 'scale(140%)'
     }, 2000);
     setTimeout(() => {
          prdtTwoEl.style.transform = 'scale(100%)'
     }, 2500);

});

   // Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            
            //Update URL without jumping
            history.pushState(null, null, targetId);
        }
    });
});


// Feature animation on scroll
const features = document.querySelectorAll('.feature');

const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

features.forEach(feature => {
    feature.style.opacity = 0;
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = 'all 0.6s ease-out';
    featureObserver.observe(feature);
});


document.querySelectorAll('.feature').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
        card.style.transform = `
            translateY(-20px)
            rotateY(${xAxis}deg)
            rotateX(${yAxis}deg)
            translateZ(20px)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `
            translateY(0)
            rotateY(0)
            rotateX(0)
            translateZ(0)
        `;
    });
});
