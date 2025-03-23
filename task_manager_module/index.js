const TaskManager = ()=>{
    let taskId = 1;
    let tasks = []

    return {
        addTask: (title)=>{
            let task = {
                id: taskId,
                title: title,
                status: false
            }
            tasks.push(task)
            taskId++;
            return tasks[tasks.length-1];
        },
        getAllTasks: ()=>{
            return JSON.stringify(tasks)
        },
        markComplete: (taskId) =>{
            return tasks.map((ele)=>{
                if(ele.id == taskId){
                    ele.status = true;
                }
                return ele
            })
        },
        removeTask: (taskId)=>{
            return tasks.map((ele, i)=>{
                if(ele.id == taskId){
                    tasks.pop(i)
                }
                return ele
            })
        },
        getPendingTasks: ()=>{
            return tasks.filter((ele)=>{
                return ele.status==false
            })
        },
        getCompletedTasks: ()=>{
            // using map 
            // return tasks.map((ele)=>{
            //     if(ele.status == true){
            //         return ele
            //     }
            // })

            // using filter 
            return tasks.filter((ele)=>{
                return ele.status==true
            })
        },
        sortTasks: ()=>{
            return tasks.sort((a,b)=>{
                return a.title.localeCompare(b.title);
            })
        }
    }
}

let task = TaskManager();

// addTask(title) → Adds a new task with a unique id and completed status set to false.
console.log("Task added: ", task.addTask("Task 1"));
console.log("Task added: ", task.addTask("Task 2"));
console.log("Task added: ", task.addTask("Task 3"));

// getAllTasks() → Returns a JSON string of all tasks.
console.log("All tasks are:", task.getAllTasks());

// markComplete(taskId) → Marks a specific task as completed.
console.log("Marked complete with task id 1:", task.markComplete(1));


// removeTask(taskId) → Removes a task by id.
console.log("Removed task with id 2:", task.removeTask(2));

// getPendingTasks() → Returns an array of task titles that are not completed (using .filter()).
console.log("Pending Tasks:", task.getPendingTasks());

// getCompletedTasks() → Returns an array of task titles that are completed (using .map() and .filter()).
console.log("Completed Tasks:", task.getCompletedTasks());

// Sorts tasks by title in ascending order using .sort() and .localeCompare().

console.log("Sorted Task using title", task.sortTasks())

// Chains .map() and .sort() to return only the task titles in sorted order.
let myTasks = JSON.parse(task.getAllTasks());
myTasks.map((ele)=>{return ele}).sort((a,b)=>{return a.title.localeCompare(b.title)})
console.log("Sort using chaining:", myTasks)