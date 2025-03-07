// You are given an array of objects representing products. Each product has a name and a price. Write a function 
// processProducts that uses map() to create a new array of product names, and then uses forEach() to log each 
// product name along with a message indicating whether the price is above or below $50.

// Steps:

// Use map() to extract the product names.
// Use forEach() to iterate over the products and log messages based on the price of each product.

const products = [
    {
        name: "Product A",
        price: 22,
    },
    {
        name: "Product B",
        price: 120,
    },
    {
        name: "Product C",
        price: 29,
    },
    {
        name: "Product D",
        price: 59,
    },
];

const processProducts = products.map((ele, i)=> {
    return ele.name;
});

console.log(processProducts);

let msg = "Logged: \n";
products.forEach((ele, i)=> {
    if(ele.price>50){
        let value = `${ele.name} is above $50`;
        msg += value + "\n";
    }
});
console.log(msg);