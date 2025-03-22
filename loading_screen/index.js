// Create a JavaScript program that simulates a loading screen using setInterval. The program should:

// Start by logging "Loading..." every 1 second.
let count = 0;
let intervalId = setInterval(()=>{
    console.log("Loading...")
    count++;
    if(count==5){
        console.log("Loaded successfully!")
        clearInterval(intervalId)
    }
}, 1000)
// After 5 seconds, stop the loading messages and log "Loaded successfully!".
// Use setInterval to repeat the loading message and clearInterval to stop it after 5 seconds.