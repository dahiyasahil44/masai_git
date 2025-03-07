// You are tasked with building an Employee Performance Evaluation System. You have an array of employee objects, where 
// each employee has the following properties: name, tasksCompleted, and rating. Your task is to perform the following
//  steps using higher-order functions:




// Filter the employees who have completed more than 5 tasks.
const employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

const filteredEmployees = employees.filter((ele)=>{
    return ele.tasksCompleted>5;
});

console.log("Employees who completed more than 5 tasks", filteredEmployees);

// Map the filtered employees to a new array that contains only the employee's name and their performance level. 
// The performance level is determined by the following criteria:
// If rating is above 4.5, their performance level is "Excellent".
// If rating is between 3 and 4.5 (inclusive), their performance level is "Good".
// Otherwise, their performance level is "Needs Improvement".

const newArr = filteredEmployees.map((ele)=>{
    ele.performance = (ele.rating > 4.5)?"Excellent":(ele.rating >= 3 && ele.rating <= 4.5)?"Good":"Needs Improvement";
    return {name: ele.name, performance:ele.performance};
});

console.log("Filtered array with name & performance: ",newArr);


// Sort the final array of employees in descending order based on their performance level, prioritizing 
// "Excellent", then "Good", and finally "Needs Improvement".
 const sortedArr = newArr.sort((a,b)=>{
    const value1 = a.performance.toUpperCase();
    const value2 = b.performance.toUpperCase();
    if(value1 < value2){return -1;}
    if(value2 < value1){return 1;}
    return 0;
 });

 // Return the final sorted array containing the employee names and their performance levels.
 console.log("Sorted array in descending order of performance: ",sortedArr);



