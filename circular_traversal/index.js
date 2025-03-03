// Problem Statement: Given a square matrix, you have to find the reverse U traversal of the matrix. 
// Refer the sample I/O for better understanding.

let n =3;
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

function reverseMatrix(n,arr){

    count = 0;
    totalEle = n*n - (n-2)**2;
    console.log(totalEle);

    let res = "";
    for(i=0;i<n;i++){

        if(count>=totalEle){
            break;
        }

        for(j=n-1;j>=0;j--){
            if(count>=totalEle){
                break;
            }

            res+= arr[j][i] + " ";
            count++;

            // move right when i & j at first position
            if(i==0 && j==0){
                for(let k=1;k<n;k++){
                    if(count>=totalEle){
                        break;
                    }

                    res+= arr[i][k] + " ";
                    count++;

                    // move down when reached at last ele in first row
                    if(k==n-1 && i==0){
                        for(x=1;x<n;x++){
                            if(count>=totalEle){
                                break;
                            }
                            res+= arr[x][k] + " ";
                            count++;
                        }
                    }
                }
            }
        }
    }

    console.log(res);
}

reverseMatrix(n,arr);