// Write a JavaScript program that uses setTimeout to print a delayed message to the console. Your code should:

// Print "Message 1" immediately.
console.log("Message 1");

// Use setTimeout to print "Message 2 after 2 seconds" after a delay of 2 seconds.
setTimeout(()=>{
    console.log("Message 2 after 2 seconds")
}, 2000)

// Print "Message 3" immediately after "Message 1".
console.log("Message 3")

// The output order should reflect asynchronous execution: first "Message 1", then "Message 3", followed
//  by "Message 2 after 2 seconds" after the delay.

