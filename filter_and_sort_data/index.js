// You are given an array of student objects. Each student object contains a name and marks. Write a function 
// processStudents that performs the following steps:

// Filter the students to create a new array of students who scored above 60 marks.
// Sort the filtered array in descending order of marks.
// Map the sorted array to extract only the names of the students.
// Return the array of sorted names.

const students =   [
    { "name": "Alice", "marks": 58 },
    { "name": "Bob", "marks": 85 },
    { "name": "Charlie", "marks": 92 },
    { "name": "David", "marks": 45 },
    { "name": "Emma", "marks": 76 },
    { "name": "Frank", "marks": 63 },
    { "name": "Grace", "marks": 89 },
    { "name": "Hannah", "marks": 95 },
    { "name": "Ian", "marks": 54 },
    { "name": "Jack", "marks": 79 },
    { "name": "Kate", "marks": 67 },
    { "name": "Leo", "marks": 88 },
    { "name": "Mia", "marks": 91 },
    { "name": "Nathan", "marks": 72 },
    { "name": "Olivia", "marks": 82 }
];

const filteredStudents = students.filter((ele,i)=> {
    return (ele.marks>60)
})

console.log("Students who scored above 60: ", filteredStudents);


// sort 
const sortedArr = filteredStudents.sort((a,b) => b.marks - a.marks);
console.log("Sorted data in descending order of marks: ", sortedArr);

// map
const names = sortedArr.map((ele,i)=>{
    return ele.name;
});

console.log("Names of students: ", names);