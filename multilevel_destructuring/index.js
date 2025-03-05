// You are working with an array of objects where each object represents a person with their name and address 
// details. Use multi-level destructuring to extract the person's name, city, and street information.

// Steps:
// Given an array of people objects like:
// const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, 
// { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

// Use multi-level destructuring to extract:
// name of each person.
// city and street name from the address.
// Return an array of strings in the format: "Alice lives in New York on Broadway".

const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, 
    { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]


let arr = [];
for(i=0;i<people.length;i++){
    let {name:Name, address: {city}, address: {street: {name}}} = people[i];
    arr[i] = `${Name} lives in ${city} on ${name}`;
}

console.log(arr);