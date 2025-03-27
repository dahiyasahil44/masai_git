// Create a function timer that takes a duration in milliseconds and a callback function onComplete. The function
//  should use setTimeout to simulate a countdown, and when the timer ends, it should execute the onComplete callback
//  with a message: "Timer of <duration> ms finished".

// Steps:

// Define timer that accepts duration and onComplete.
// Use setTimeout to delay for duration, then call onComplete with the finish message.

function timer(duration, onComplete){
    let count = duration/1000;
    const intervalId = setInterval(()=>{
        console.log("Time remaining:", count)
        count--;
        if(count == 0){
            clearInterval(intervalId)
        }
    }, 1000);

    setTimeout(()=>{
        onComplete(duration);
    }, duration);
    
}

function onComplete(time){
    console.log(`Timer of ${time} ms finished`);
}
timer(5000, onComplete)
