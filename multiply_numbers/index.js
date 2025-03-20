// Write a function called multiplyNumbers that accepts two numbers as arguments and uses the apply() method 
// to multiply them. The function should return the product.

function multiplyNumbers(num1, num2){
    return `Hello! ${this.fname}, result is: ${num1*num2}`;
}

const person = {
    fname: "Sahil"
}

let arr = [16,3];

console.log(multiplyNumbers.apply(person, arr))

