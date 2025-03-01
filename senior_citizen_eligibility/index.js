// Problem Statement: Write a program that checks if a person is eligible for a senior citizen discount based on
//  their age. If the age is 60 or more, the output should be "Eligible for Senior Discount". Otherwise, the output
//  should be "Not Eligible for Senior Discount". Use the ternary operator for this task. Additionally, handle an 
// edge case where the age provided is a negative number or 0. For such cases, output "Invalid Age".

let age = 33;

let result = (age>=60)?"Eligible for Senior Discount"
            :(age<0)?"Invalid age":"Not Eligible for Senior Discount";

console.log(result);