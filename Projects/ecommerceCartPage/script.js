document.addEventListener("DOMContentLoaded",()=>{
    const productList= document.getElementById("product-list");

    const cartItems= document.getElementById("cart-items");
    const emptyCartMessage=document.getElementById("empty-cart");
    const cartTotalMessage= document.getElementById("cart-total");

    const totalPriceDisplay= document.getElementById("total-price");
    const checkOutBtn= document.getElementById("checkout-btn");

    const products=[
        {id: 1, name: "product 1", price: 27.33},
        {id: 2, name: "product 2", price: 57.83},
        {id: 3, name: "product 3", price: 77.33},
    ];
  
    const cart= JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach((ct) => {
        renderCart(ct);
    });
    
    products.forEach((product)=>{
        const productDiv= document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML=`
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to Cart</button>`;

        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (e)=>{
        if(e.target.tagName==="BUTTON")
        {
            const productId=parseInt(e.target.getAttribute("data-id"));
            const product= products.find(
            p  => p.id===productId)
            addToCart(product);
        }
    })

    function addToCart(product){
        cart.push(product);
        saveTask();
        renderCart();
    };

    function renderCart()
    {
        cartItems.innerHTML="";
        let totalPrice=0;
         if(cart.length>0)
         {
            emptyCartMessage.classList.add("hidden");
            cartTotalMessage.classList.remove("hidden");
            cart.forEach((item,index)=>{
                totalPrice+=item.price;
                const selectItem=document.createElement("div");
                selectItem.innerHTML=`
                <span>${item.name} - $${item.price.toFixed(2)}</span>`;
                cartItems.appendChild(selectItem);
                totalPriceDisplay.textContent=`$${totalPrice.toFixed(2)}`;
            })
         }
         else{
            emptyCartMessage.classList.remove("hidden");
            totalPriceDisplay.textContent=`$${0.00}`;
         }
    }
    function saveTask(){
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    checkOutBtn.addEventListener("click",()=>{
        cart.length=0;
        alert("Checkout Successfully");
        saveTask();
        renderCart();
    })
});