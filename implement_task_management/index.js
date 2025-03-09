// You need to implement a task management system in JavaScript using closures, higher-order functions, and method 
// chaining. The system should allow users to:

// Tasks in JavaScript using closures
 function createTasks(){
    let tasks = []
    return {
        addTask: function(title, status="pending"){
            const data = {
                "title" : title,
                "status" : status
            }
            tasks.push(data);
        },
        updateStatus: function(value){
            // const taskArr = this.getTasks();
            tasks.map((ele,i) => {
                ele.status = value;
            });
            return tasks;
        },
        getTasks: function(){
            return tasks;
            // console.log(tasks);
        }
    }
 }

 const task = createTasks();
 task.addTask("Task 1", "completed"); // with providing status
 task.addTask("Task 2"); // without providing status
 task.addTask("Task 3", "completed"); // with providing status
 task.addTask("Task 4", "pending"); // with providing status
 task.addTask("Task 5", "completed"); // with providing status
 task.addTask("Task 6", "completed"); // with providing status
 const taskData = task.getTasks();
 console.log("Tasks Data after adding Tasks:", taskData);

console.log("-----------------------------------------------------------------------------");
//  Mark tasks as complete using map.

const updatedData = task.updateStatus("completed");
console.log("Tasks Data after updating Status:", updatedData);


 console.log("-----------------------------------------------------------------------------");
// Filter tasks based on their status (pending or completed) using filter.
task.addTask("XYZ");
task.addTask("Pqr");
task.addTask("Abc");
task.addTask("Def");

const pendingTasks = updatedData.filter((ele,i)=>{
    return ele.status == "pending";
})
const completedTasks = updatedData.filter((ele,i)=>{
    return ele.status == "completed";
})

console.log("Pending Tasks data: ", pendingTasks);
console.log("Completed Tasks data: ", completedTasks);
console.log("-----------------------------------------------------------------------------");
// List all tasks using forEach and log them properly.
const listTasks = task.getTasks();

listTasks.forEach((ele)=>{
    console.log(`Status of ${ele.title} is ${ele.status}`);
})
console.log("-----------------------------------------------------------------------------");
// Sort tasks alphabetically using sort and localeCompare.

const newTaskData = task.getTasks();
const sortData = newTaskData.sort((a,b)=>{
    const value1 = a.title.toUpperCase();
    const value2 = b.title.toUpperCase();

    if(value1<value2){
        return -1;
    }
    if(value1>value2){
        return 1
    }
    return 0
})
console.log("Sorted data: ", sortData);
console.log("-----------------------------------------------------------------------------");

// Count tasks using reduce to return total counts of completed and pending tasks.
const frequency = newTaskData.reduce((acc,curr)=>{
    // check if current status exists or not if yes then +1 to last value otherwise set 0
    acc[curr.status] = (acc[curr.status]||0)+1;
    return acc
}, {})
console.log(frequency);

// Allow method chaining so multiple operations can be performed sequentially.
const allData = task.getTasks()
.filter((ele)=>{return ele.title.length>4})
.map((ele)=>{ele.status="pending";return ele})

console.log("Data after method chaining: ", allData);
