
let proo = document.getElementById("pro");
let pro2 = document.getElementById("pro2");
let img1 = document.getElementById("img1");
let produsts1 = document.getElementById("produsts1");
let btnshopnow = document.getElementById("btn-shop");
let sh = document.getElementById("sh");
let sRc = document.getElementById("sRc");
let your_item_div = document.getElementById("your_item_div");
let x = 0;

let all_products = [
    { category: "adult", photo: "img/9f6b2d05-64ff-43e9-87fd-d33d22d81562.jfif", description: "highly effective eye cream" },
    { category: "adult", photo: "img/939adee2-9675-4ac5-88e2-bf5813909b30.jfif", description: "highly effective eye cream" },
    { category: "adult", photo: "img/nuori skincare.jfif", description: "highly effective eye cream" },
    { category: "adult", photo: "img/6655b13e-3b09-4f68-be09-7958e6b18d55.jfif", description: "highly effective eye cream" },
    { category: "adult", photo: "img/Kor Skincare Rejuvenation Oil.jfif", description: "highly effective eye cream" },
    { category: "adult", photo: "img/LOOLAA Designs.jfif", description: "highly effective eye cream" },
    { category: "adult", photo: "img/9f6b2d05-64ff-43e9-87fd-d33d22d81562.jfif", description: "highly effective eye cream" },
    { category: "adult", photo: "img/Unsere Beauty Favs im Juni — Herz und Blut - Interior _ Design _ Lifestyle _ Travel Blog.jfif", description: "highly effective eye cream" },
    { category: "adult", photo: "img/soindesoi-2.jfif", description: "highly effective eye cream" },
    { category: "baby", photo: "img/Conseda_perfumed_shower_gel-removebg-preview.png", description: "highly effective eye cream" },
    { category: "baby", photo: "img/d230f99c-36fd-46c1-82b9-07627bf73cf4-removebg-preview.png", description: "highly effective eye cream" },
    { category: "baby", photo: "img/Mylo___Baby_Care_Shampoo___Rebranding-removebg-preview.png", description: "highly effective eye cream" },
    { category: "baby", photo: "img/New_Beauty___Wellness_Products-removebg-preview.png", description: "highly effective eye cream" },
    { category: "baby", photo: "img/Nexton__1_-removebg-preview.png", description: "highly effective eye cream" },
    { category: "baby", photo: "img/c0a40af4-b99b-4215-82ad-fc12a52c8799.jfif", description: "highly effective eye cream" },
    { category: "baby", photo: "img/Nexton-removebg-preview.png", description: "highly effective eye cream" },
    { category: "baby", photo: "img/6655b13e-3b09-4f68-be09-7958e6b18d55.jfif", description: "highly effective eye cream" }
];

function filterByCategory(category) {
    return all_products.filter(product => product.category === category);
}



function counter(i) {
    x += 1;
    document.getElementById("count").innerHTML = x;
    document.getElementById("count").classList.add("show");
    your_item_div.innerHTML += `<div id="your_photo">
                <button id="rmv" onclick="removeItem(this)">remove</button>
                <img id="sRc" src=${all_products[i].photo} >
                
            </div>`;
}

function removeItem(i) {
    button.parentElement.remove();
    x -= 1;
    document.getElementById("count").innerHTML = x;
    if (x === 0) {
        document.getElementById("count").classList.remove("show");
    }
}

function displayAdultProducts() {
    let adultProducts = filterByCategory("adult");
    for (let i = 0; i < adultProducts.length; i++) {
        proo.innerHTML+= `<div class="pro">
                   <div id="img1">
                      <img src="${adultProducts[i].photo}">
                   </div>
                   <div>
                      <div>${adultProducts[i].description}</div>
                      <button onclick="counter(${i})" id="btn-shop">shop now</button>
                   </div>
                </div>`;
    }
}


function displayBabyProducts() {
    
let babyProducts = filterByCategory("baby");
    for (let i = 0; i < babyProducts.length; i++) {
        pro2.innerHTML += `<div class="pro special-pro">
                <div class="baby-img">
                    <img src="${babyProducts[i].photo}">
                </div>
                <div id="special">
                    <p>${babyProducts[i].description}</p>
                    <button onclick="counter(${i})" id="btn-shop" class="b_btn">shop now</button>
                </div>
            </div>`;
    }
}


function displayAllProducts() {
    const all_pro_new_container = document.getElementById('all_pro_new_container');
    

    for (let i = 0; i < all_products.length; i++) {
        all_pro_new_container.innerHTML += `<div class="allpro_card">
            <div class="head">
                <img src="${all_products[i].photo}" alt="Product Image">
            </div>
            <div class="body">
                <p>${all_products[i].description}</p>
                <button onclick="counter(${i})">Shop Now</button>
            </div>
        </div>`;
    }
}



