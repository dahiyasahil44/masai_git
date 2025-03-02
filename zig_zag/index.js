// Problem Statement: Given amatrixwith N rows and M columns. Print the matrix elements starting from the top right
//  corner and follow a zig-zag pattern.

//    1  2  3  4  5  <-
// -> 6  7  8  9  10 
//    11 12 13 14 15 <-
// For example, for the above matrix, the required output would be as shown below.

// 5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2

function zigzag(N,M,arr){
    res = "";
    for(i=0;i<N;i++){
        if(i%2 == 0){
            for(j=M-1;j>=0;j--){
                res+= arr[i][j] + " ";
            }
        }else{
            for(j=0;j<M;j++){
                res+= arr[i][j] + " ";
            }
        }
    }
    console.log(res);
}

let N = 4, M = 5; 
let arr = [
    [1,2,3,4,5],
    [6,7,8,9,1],
    [3,2,5,4,6],
    [7,8,9,1,2],
];

zigzag(N,M,arr);