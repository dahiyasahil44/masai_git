// Problem Statement: Create a program that takes three numbers as input and determines the largest number using 
// nested ternary operators. You must solve this problem using only ternary logic without using the Math.max() function.

// Example: let num1 = 45, num2 = 78, num3 = 33;

let num1 = 45, num2 = 78, num3 = 133;

let result = (num1>num2)?((num1>num3)?num1:num3)
            :((num2>num3)?num2:num3);

console.log(result);