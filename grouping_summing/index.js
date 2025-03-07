// You are given an array of strings representing product categories. Your task is to use reduce() to create an object
//  that counts the occurrences of each category in the array.

// Steps:

// Use reduce() to group the categories and count how many times each category appears.
// Return the resulting object.

const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

 
 const result = categories.reduce((acc)=>{
    return {"a": 1}
});

console.log(result);
