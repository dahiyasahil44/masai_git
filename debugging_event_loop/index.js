// You are given a JavaScript snippet that logs messages in a specific order. However, there is an error in the
//  output order because of asynchronous code. Debug the code so it matches the following order of execution:

console.log("Begin");  // Task A
setTimeout(() => { console.log("Timeout Task"); }, 0);  // Task B
Promise.resolve().then(() => { console.log("Promise Task"); });  // Task C
console.log("End"); // Task D

// The correct order should be:

// Begin
// End
// Promise Task
// Timeout Task
// Correct any issues in the code and explain why the output order follows this specific sequence.

///////////////// Explaination //////////////////////////
// 1) The above code is correct and it will follow the given order:
//     Begin -> End -> Promise Task -> Timeout Task
// 2) First of all, Task A (Begin) will be pushed to call stack & executed immediately,
//     then, Task B (Timeout) will be pushed to Web API's then to Task/Callback Queue (because when an asynchronous operation
//     finishes, its callback function is moved to the task queue) since it's a async timeout function,
//     browsers Web API's will handle it in parallel
// 3) Then, Task C (Promise) will be pushed to Microtask Queue (This queue holds microtasks, such as promises and mutation 
//    observers. Microtasks have a higher priority than tasks in the regular task queue.)
// 4) Task D (End) will be pushed to Call stack & executed immediately
// 5) Therfore, order will be,
//    Begin -> End -> Promise Task (Microtask has higher priority) -> Timeout Task
