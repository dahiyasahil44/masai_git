// Problem Statement: You are given a 2D array, whose dimensions are stored in two variables with the name N and M

// The value stored in N denotes the number of rows, and the value in M denotes the number of columns

// The 2D array is stored in a variable with the name arr

// You have to print the elements of the 2D array, row by row

// For example, consider the value stored in N = 3,M = 2, and the array is arr = [1,2],[3,4],[5,6], then the required output will be

// 1 2

// 3 4

// 5 6

let N = 3,M = 2 ;
let arr = [[1,2],[3,4],[5,6]];

function print2Darray(N,M,arr){
    let res = "";
    for(i=0;i<N;i++){
        for(j=0;j<M;j++){
            res+= arr[i][j] + " ";
        }
        res+="\n";
    }
    console.log(res);
}
print2Darray(N,M,arr);