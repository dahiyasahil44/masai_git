// Create a function personInfo that logs the name and age of a person. Using the call() method, call the
//  function with a specific this context (an object with properties name and age).

function personInfo(){
    console.log(`Hello! ${this.fname}, age is ${this.age}`)
}

const person = [
    {
       fname: "Sahil",
        age: 26
    },
    {
        fname: "John",
        age: 19
    },
    {
        fname: "Kirito",
        age: 22
    }
]

personInfo.call(person[1])