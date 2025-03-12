// An online learning platform tracks students' progress.
// Implement the following logic:

const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
    { name: "Sita", completedLessons: 25, totalLessons: 50 },
    { name: "Manoj", completedLessons: 30, totalLessons: 60 },
    { name: "Pooja", completedLessons: 48, totalLessons: 50 },
    { name: "Anil", completedLessons: 15, totalLessons: 50 }
];

// Filter students who have completed at least 50% of the course.
const filterData = studentsProgress.filter((ele,i)=>{
    let value = (ele.completedLessons/ele.totalLessons)*100;
    return (value>=50)?ele:"";
});
console.log("Students who have completed at least 50% of course", filterData);

// Map to calculate their completion percentage.
const mapData = studentsProgress.map((ele,i)=>{
    // calculating completion percentage
    let value = (ele.completedLessons/ele.totalLessons)*100;
    ele.completionPercentage = value;
    return ele;
});
console.log("Students data with completion percentage", mapData);

// Reduce to find the average completion percentage of all active students.
const reduceData = studentsProgress.reduce((acc, curr, i)=>{
    // returning sum of all completion percentage
    acc = acc + curr.completionPercentage;
    return acc;
},0);
console.log("Average completion percentage", reduceData/studentsProgress.length);

// Filter students who have more than 80% completion to get a list of top learners.
const toperData = studentsProgress.filter((ele,i)=>{
    return (ele.completionPercentage>80)?ele:"";
})
console.log("Toper students are: ", toperData);
