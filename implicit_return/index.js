// Write an arrow function that takes a number as input and returns both its square and cube in an object, using
//  implicit return. The function should be as concise as possible.

// Requirements:
// The arrow function should use implicit return (no curly braces or return keyword).
// The function should return an object in the format { square, cube }.

let n =3;

let cube = (n) => n*n*n;
let square = cube(n)/n;

let obj = {'square': square, 'cube': cube(3)};
console.log(obj);