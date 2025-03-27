// Create a product listing page that fetches data from the FakeStoreAPI (https://fakestoreapi.com/products) and displays
//  the product details in a grid format. Each product should show its image, title, price, and a button labeled 
// "View Details". If the API call fails (e.g., an incorrect URL is used), display a user-friendly error message.

async function fetchProducts(){
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("Failed to fetch products. Please try again later")
    }
}

try {
    let products = await fetchProducts();

    // calculate sum
    if(typeof(products) == "object"){
        console.log(products);

        let sum = products.reduce((acc,curr)=>{
            acc += curr.price;
            return acc;
        },0)
        console.log("Sum of all products price is:", sum.toFixed(2))

        // displays the product details in a grid format. Each product should show its image, title, 
        // price, and a button labeled "View Details"
        products.forEach(element => {
            let div = document.createElement("div");
            div.className = "products-single"
            let img = document.createElement('img');
            img.src = element.image;
            img.alt = element.name;
    
            let pname = document.createElement("h4");
            pname.innerHTML = element.title
            
            let price = document.createElement("p");
            price.innerHTML = "$" + element.price;

            let button = document.createElement("button")
            button.innerHTML = "View details"
    
            div.appendChild(img)
            div.appendChild(pname)
            div.appendChild(price)
            div.appendChild(button)
    
            let prod = document.getElementById("products");
            prod.appendChild(div);
        });
    }

} catch (error) {
    console.log(error)
}
