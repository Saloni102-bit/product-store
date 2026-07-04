// ===================== PRODUCTS DATA =====================

const products = [
 {
    brand: "HP",
    name: "HP 15s Series Intel Core i3 12th Gen 1215U ",
    image:"images/Hp-laptop.jpg",
    category:"Electronic",
    price:49840,
    oldPrice:59999,
    rating:4.5,
    discount:"7.5 OFF%",
    stock:"In stock",
    description: "processor: Intel Core i3-1115G4,ram: 8 GB DDR4,storage:512 GB SSD,os: Windows 11 Home ,display: 15.6-inch HD,graphics: Intel UHD Graphics",
    
},
{
    name:"Samsung Galaxy S24",
    brand:"Samsung",
    category:"Electronics",
    price:59999,
    oldPrice:64999,
    rating:4.9,
    discount:"7% OFF",
    stock:"In Stock",
    description :"Brand :Samsung ,Cellular Technology:5G,Color:Gray,Connectivity Technology:NFC,Memory Storage Capacity:256 GB ,Model Name:SAMSUNG Galaxy ,Operating System:Android 14 ,Resolution : 1080 x 2340 ,Wireless Carrier:Unlocked for ,Fastest processor for seamless multitasking ,50MP pro-grade camera ,Long-lasting battery life",
    image:"images/Samsung Galaxy S24.webp"
},

{
    name:"Sony Headphones",
    brand:"Sony",
    category:"Electronics",
    price:4999,
    oldPrice:6499,
    rating:4.7,
    discount:"23% OFF",
    stock:"In Stock",
    description:"Wireless Bluetooth Headphones with Noise Cancellation and 30 Hours Battery Backup.",
    image:"images/Sony Headphones.webp"
},

{
    name:"Apple Smart Watch",
    brand:"Apple",
    category:"Electronics",
    price:35999,
    oldPrice:39999,
    rating:4.8,
    discount:"10% OFF",
    stock:"Limited Stock",
    description:"Series 9 Smart Watch with Fitness Tracking, ECG and GPS.",
    image:"images/Apple Smart Watch.jpg"
},

{
    name:"Men's Cotton T-Shirt",
    brand:"Levis",
    category:"Fashion",
    price:799,
    oldPrice:1199,
    rating:4.4,
    discount:"33% OFF",
    stock:"In Stock",
    description:"100% Cotton Regular Fit T-Shirt for Men.",
    image:"images/t-shirt.jpg"
},

{
    name:"Blue Denim Jeans",
    brand:"Levis",
    category:"Fashion",
    price:1799,
    oldPrice:2499,
    rating:4.6,
    discount:"28% OFF",
    stock:"In Stock",
    description:"Beggy Denim Jeans for Men.",
    image:"images/denim.jpg"
},

{
    name:"Women's Sneakers",
    brand:"Nike",
    category:"Fashion",
    price:2999,
    oldPrice:3999,
    rating:4.7,
    discount:"25% OFF",
    stock:"In Stock",
    description:"Comfortable Lightweight Sports Shoes for Daily Wear.",
    image:"images/shoes.jpg"
},

{
    name:"Leather Backpack",
    brand:"Wildcraft",
    category:"Fashion",
    price:1599,
    oldPrice:2199,
    rating:4.5,
    discount:"27% OFF",
    stock:"Limited Stock",
    description:"Water Resistant Laptop Backpack with Multiple Compartments.",
    image:"images/bag.jpg"
},

{
    name:"Java Programming",
    brand:"Oracle Press",
    category:"Books",
    price:899,
    oldPrice:1200,
    rating:4.9,
    discount:"25% OFF",
    stock:"In Stock",
    description:"Complete Java Programming Guide for Beginners and Professionals.",
    image:"images/javaprogramming.jpg"
},

{
    name:"Web Development",
    brand:"Packt",
    category:"Books",
    price:1099,
    oldPrice:1499,
    rating:4.8,
    discount:"27% OFF",
    stock:"In Stock",
    description:"HTML, CSS, JavaScript and React Complete Guide.",
    image:"images/fronted.jpg"
},

{
    name:"Python Programming",
    brand:"O'Reilly",
    category:"Books",
    price:999,
    oldPrice:1399,
    rating:4.8,
    discount:"29% OFF",
    stock:"In Stock",
    description:"Hands-on Python Programming with Real World Projects.",
    image:"images/python.jpg"
},

{
    name:"Data Structures & Algorithms",
    brand:"Pearson",
    category:"Books",
    price:1199,
    oldPrice:1699,
    rating:4.9,
    discount:"30% OFF",
    stock:"Only 5 Left",
    description:"Master Data Structures and Algorithms for Coding Interviews.",
    image:"images/datastructur.jpg"
}

];

// ===================== DOM ELEMENTS =====================
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortOption = document.getElementById("sortOption");

const productContainer = document.getElementById("productContainer");

const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");
// ===================== DISPLAY PRODUCTS =====================

function displayProducts(){

    let filteredProducts = [...products];

    // Search
    const search = searchInput.value.toLowerCase();

    if(search !== ""){

        filteredProducts = filteredProducts.filter(product =>

            product.name.toLowerCase().includes(search) ||

            product.brand.toLowerCase().includes(search)

        );

    }

    // Category Filter
    if(categoryFilter.value !== "all"){

        filteredProducts = filteredProducts.filter(product =>

            product.category === categoryFilter.value

        );

    }

    // Price Filter
    if(priceFilter.value !== "all"){

        filteredProducts = filteredProducts.filter(product =>

            product.price <= Number(priceFilter.value)

        );

    }

    // Sorting

    switch(sortOption.value){

        case "rating":

            filteredProducts.sort((a,b)=>b.rating-a.rating);

            break;

        case "lowToHigh":

            filteredProducts.sort((a,b)=>a.price-b.price);

            break;

        case "highToLow":

            filteredProducts.sort((a,b)=>b.price-a.price);

            break;

    }

    productContainer.innerHTML="";

    filteredProducts.forEach((product,index)=>{

        productContainer.innerHTML += `

        <div class="card"

        onclick="showProduct(${products.indexOf(product)})">

            <span class="discount-badge">

                ${product.discount}

            </span>

            <span

            class="wishlist"

            onclick="event.stopPropagation()">

                ❤️

            </span>

            <img

            src="${product.image}"

            class="product-img"

            alt="${product.name}"

            >

            <h3>${product.name}</h3>

            <p>

                <b>${product.brand}</b>

            </p>

            <p>

                ${product.category}

            </p>

            <p class="price">

                ₹${product.price}

                <del>

                ₹${product.oldPrice}

                </del>

            </p>

            <p class="rating">

                ⭐ ${product.rating}

            </p>

            <button class="buy-btn">

                Add to Cart

            </button>

        </div>

        `;

    });

}
// ===================== PRODUCT DETAILS MODAL =====================

function showProduct(index){

    const product = products[index];

    modalBody.innerHTML = `

    <div class="product-details">

        <div class="left">

            <img src="${product.image}" class="modal-img">

            <div class="btn-group">

                <button class="cart-btn">
                    🛒 Add to Cart
                </button>

                <button class="buy-btn">
                    ⚡ Buy Now
                </button>

            </div>

        </div>

        <div class="right">

            <h2>${product.name}</h2>

            <h4>${product.brand}</h4>

            <p class="rating-box">
                ⭐ ${product.rating} / 5
            </p>

            <h2 class="price">
                ₹${product.price}
                <del>₹${product.oldPrice}</del>
            </h2>

            <h3 style="color:green;">
                ${product.discount}
            </h3>

            <h4 style="margin-top:15px;">
                ${product.stock}
            </h4>

            <hr>

            <h3>Description</h3>

            <p>
                ${product.description}
            </p>

            <hr>

            <h3>Highlights</h3>

            <ul>

                <li>✔ Premium Quality Product</li>

                <li>✔ Brand Warranty Available</li>

                <li>✔ Free Delivery</li>

                <li>✔ 7 Days Return Policy</li>

                <li>✔ Secure Payment</li>

                <li>✔ Cash on Delivery Available</li>

            </ul>

        </div>

    </div>

    `;

    modal.style.display = "block";

}

// ===================== CLOSE MODAL =====================

closeBtn.onclick = function(){

    modal.style.display = "none";

}


// Close when clicking outside

window.onclick = function(event){

    if(event.target == modal){

        modal.style.display = "none";

    }

};


// ===================== FILTER EVENTS =====================

categoryFilter.addEventListener(
    "change",
    displayProducts
);

priceFilter.addEventListener(
    "change",
    displayProducts
);

sortOption.addEventListener(
    "change",
    displayProducts
);


// ===================== LOAD PRODUCTS =====================

displayProducts();
searchInput.addEventListener(

    "keyup",

    displayProducts

);