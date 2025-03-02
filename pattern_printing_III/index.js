// **Problem Statement:**You are given a number stored in a variable with the name N You have to print the pattern
//  as shown below according to the value stored in N For example, consider the value stored in N = 5, 
// then the required pattern will be.

// * * * * *

// *

// *

// *

// * * * * *

function pattern(N){
    let p1 = ""
    for(i=0;i<N;i++){
        p1+= "* ";
    }
    console.log(p1);

    // Pattern 2 or Mid pattern
    for(i=0;i<N-2;i++){
        console.log("*");
    }
    console.log(p1);
}

pattern(3);