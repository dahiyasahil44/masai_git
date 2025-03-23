// You are tasked with developing a Student Performance Analysis System for a school. The system should manage
//  student data securely, track their performance across multiple subjects, and generate insightful reports

function createStudentManager(){
    const students = [
        {
            rollno: 1,
            username: "Sahil",
            scores: {
                English: 98,
                Maths: 99,
                Science: 89
            }
        },
        {
            rollno: 2,
            username: "Ram",
            scores: {
                English: 88,
                Maths: 89,
                Science: 79
            }
        }
    ]

    return {
        addStudent: (student)=>{
            students.push(student);
            return students[students.length-1];
        },
        updateScore: (rollNo, subject, score)=>{
            // update subject score of student with rollno 
            return students.map((ele)=>{
                if(ele.rollno == rollNo){
                    ele.scores[subject] = score
                }
                return ele
            })
        },
        getStudentDetails: (rollNo=0)=>{
            let studentData = students.filter((ele)=>{
                return (rollNo==0)?ele:(ele.rollno == rollNo)
            })
            return (studentData.length>0)?studentData:"Student Not Found!!"
        },
        addSubject: (subject, value)=>{
            return students.map((ele)=>{
                ele.scores[subject] = value
                return ele
            })
        },
        avgScores: ()=>{
            return students.map((ele)=>{
                let avg = (ele.scores["English"] + ele.scores["Maths"] + ele.scores["Science"] + ele.scores["SST"])/4;
                ele.avgscore = avg

                return ele
            })
        },
        getSortedStudents: (sortBy) =>{
            return students.sort((a,b)=>{

            })
        }
    }
}

const student = createStudentManager();
// Add student
const newStudent1 = {
    rollNo: 3,
    username: "Shyam",
    scores: {
        English: 83,
        Maths: 86,
        Science: 93
    }
}
const newStudent2 = {
    rollNo: 4,
    username: "John",
    scores: {
        English: 79,
        Maths: 56,
        Science: 95
    }
}
// Add New Students
console.log("New student added: ", student.addStudent(newStudent1));
console.log("New student added: ", student.addStudent(newStudent2));


// Updates a student’s score for a given subject.
console.log("Score updated:", student.updateScore(1, "English", 30));
console.log("Score updated:", student.updateScore(2, "English", 23));

// fetching student details
console.log("Fetching student details: ", student.getStudentDetails());

// Adding new subject
console.log("Adding subject SST with score 88", student.addSubject("SST", 88));


// Calculate the average score for each student
let avgScores = student.avgScores();
console.log("Average Scores of each student:", avgScores)

// Identification of top performers (average score above 85).
let topScoreres = avgScores.filter((ele)=>{
    return ele.avgscore>85
})
console.log("Top scorers are:", topScoreres);

// Identification of difficult subjects (where more than 50% of students score below 40).



// Identification of students who have failed in at least one subject.
let failedStudents = avgScores.filter((ele)=>{
    if(ele.scores["English"]<35 || ele.scores["Maths"]<35 || ele.scores["Science"]<35 || ele.scores["SST"]<35){
        return ele
    }
});
console.log("Student who failed atleast one subject:", failedStudents);

// Generation of a frequency map showing subject-wise student counts.
let frequency = avgScores.reduce((acc, curr)=>{
   
}, {})