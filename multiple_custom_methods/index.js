// Create a program that defines the following custom methods:

const arr = [2,43,66,11,47,112,45,98,65,32,78,4];
const arr2 = [88,67,54,32,11,90,77,54];
console.log("Original arrays are:", arr, arr2)

// filterEvenNumbers(arr): This method takes an array of numbers and returns a new array with only the
//  even numbers using filter.

let filterEvenNumbers = (arr) => {
    let narr = arr.filter((ele)=>{
        return ele%2 === 0
    })
    return narr
}
console.log("Even numbers in arr1 using filter are: ", filterEvenNumbers(arr));
console.log("Even numbers in arr2 using filter are: ", filterEvenNumbers(arr2));


// sumOfArray(arr): This method calculates and returns the sum of all elements in an array using reduce.
let sumOfArray = (arr) => {
    let sum = arr.reduce((acc,curr)=>{
        return acc+=curr 
    }, 0)
    return sum
}
console.log("Sum of array1 using reduce is:", sumOfArray(arr))
console.log("Sum of array2 using reduce is:", sumOfArray(arr2))

// sortAndConcat(arr1, arr2): This method takes two arrays of numbers, sorts each array in ascending 
// order using sort, and then concatenates them into one array using concat. Return the sorted and concatenated array.
let sortAndConcat = (arr1, arr2) => {
    let sort1 = arr1.sort((a,b)=> {return a-b;})
    console.log("Sorted arr1 is:", sort1)
    let sort2 = arr2.sort((a,b)=> {return a-b;})
    console.log("Sorted arr2 is:", sort2)

    let concatedArr = sort1.concat(sort2); 
    return concatedArr.sort((a,b)=>{return a-b})
}
console.log("Sort & Concat of arr1, arr2", sortAndConcat(arr, arr2));