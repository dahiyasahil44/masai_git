// You are given a program that manipulates an array of student names. However, there are several bugs in 
// the code that need to be fixed. Your task is to debug the program and make sure it works correctly. 
// The program should perform the following:

// Add a new student name at a specific position using splice.
// Check if a student's name exists in the array using includes.
// Convert the array of student names into a single string where names are separated by commas using join.

function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    // Fix any bugs in the code.
    // Created functions with addStudent, searchStudent, joinStudent for dynamic adding, searching & joining
    return {
        addStudent : function(pos, sname){
            students.splice(pos, 0, sname);
            return students
        },
        searchStudent: function(str){
            return students.includes(str);
        },
        joinStudent : function(separator){
            return students.join(separator);
        }
    }
}


// Write test cases to ensure that adding, searching, and joining operations are working as expected.
// Ensure that the program works for different cases (e.g., adding at different positions, checking different names).

let fun = manageStudents();

// Adding a student named Sahil at index 1
console.log("Adding a student named Sahil at index 1", fun.addStudent(1,"Sahil"));

// Adding a student named Kirito at index 3
console.log("Adding a student named Kirito at index 3",fun.addStudent(3,"Kirito"));

// Searching different names
console.log("Searching student name Sahil in array: ", fun.searchStudent("Sahil"))
console.log("Searching student name Eve in array: ", fun.searchStudent("Eve"))

// Joining with dynamic separator
console.log("Joining students array using - separator : ", fun.joinStudent("-"));
console.log("Joining students array using / separator : ", fun.joinStudent("/"));
