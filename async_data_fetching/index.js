// You are tasked with simulating a data fetching function that occasionally fails. The goal is to:

// Write a function fetchData that simulates data fetching using a Promise with a 50% chance of success or failure.
// So we know that above logic seems to be a bit tricky but think about a way in JS where you can randomly generate a number between 1 and 0 and based on that you assign truthy and falsy values . (Now it should be easier , if not then you should go and learn about truthy and falsy values along with how to generate random numbers in JS)
// Write an async function fetchDataHandler to:
// Use async/await to handle the result of the fetchData function.
// Log "Fetched data successfully!" if the fetch is successful.
// Log "Error fetching data" along with the error message if the fetch fails.

function fetchData(){
    return new Promise((resolve, reject)=>{
            setTimeout(()=>{
            let chance = Math.random().toFixed(2);
            if(chance>0.5){
                resolve("Fetched data successfully!");
            }else{
                reject("Error fetching data");
            }
        }, 2000);
    });
}

async function fetchDataHandler(){
    try {
        const promise = await fetchData();
        console.log(promise);
    } catch (err) {
        console.log(err);
    }
}


fetchDataHandler();