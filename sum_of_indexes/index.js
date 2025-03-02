// Problem Statement: You are given a 2D array, whose dimensions are stored in two variables with the name Nand M
// The value stored in N denotes the number of rows, and the value in M denotes the number of columns
// The 2D array is stored in a variable with the name arr
// You have to print the sum of indexes of the 2D array for all positions in the 2D array

let N = 3,M = 2;
let arr = [[1,2],[3,4],[5,6]];

function sumOfIndexes(N,M,arr){
    res = "";
    for(i=0;i<N;i++){
        sum = 0;
        for(j=0;j<M;j++){
            sum = i + j;
            res += sum + " ";
        }
        res+= "\n";
    }
    console.log(res);
}

sumOfIndexes(N,M,arr);