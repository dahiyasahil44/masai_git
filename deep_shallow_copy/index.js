// Write a function deepClone(obj) that creates a deep copy of a given object using JSON.stringify() and JSON.parse().
//  The function should ensure that modifying the cloned object does not affect the original object.

function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}

const obj = { name: "Alice", hobbies: ["reading", "traveling"] }

const nobj = deepClone(obj)
nobj.hobbies.push("coding");

console.log("Original: ", obj);
console.log("Clone: ", nobj);