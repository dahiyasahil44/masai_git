// Problem Statement: You are tasked with creating two functions, one in the global execution context and another inside a
//  function context. In this problem, you need to:

// Define a global variable age.
// Create a function displayAge that prints the value of the age variable.
// Call the displayAge function to show how the global execution context works.
// Additionally, create another function changeAge that updates the global age variable within the function, and 
// print the value of age after updating it.

// Steps:

// Declare a global variable age and assign a value to it.

// Create a function displayAge that logs the value of age.

// Create a second function changeAge, which changes the value of age.

// Call displayAge and changeAge and check how the value of age is updated.

var age = 26

let displayAge = (age) => {
    console.log("Age is ", age);
    return; 
}

displayAge(age);

let changeAge = (newAge) => {
    age = newAge;
    console.log("Updated age is ", age);
    return;
}

changeAge(30);
displayAge(age);