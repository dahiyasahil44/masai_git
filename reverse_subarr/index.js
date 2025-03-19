// Given an array of integers [15, 30, 45, 60, 75, 90], write a function extractAndReverse 
// that performs the following tasks:


let reverseArr = (A)=> {
    N = A.length
    const narr = []
    for(let i=N-1; i>=0; i--){
        narr.push(A[i])
    }
    return narr;
}

// The original array should remain unchanged. The function should return the reversed subarray.
const arr = [15,30,45,60,75,90];

// Use the slice method to extract a subarray from the third element (inclusive) to 
// the fifth element (exclusive).
const subArr = arr.slice(2,4);
console.log("Subarray using slice is: ", subArr);

// Reverse the extracted subarray and return it.
console.log("Reversed array is: ", reverseArr(subArr));

// Original array unchanged
console.log("Original array is: ", arr);
