// Write a program that classifies students based on their scores stored in an object. The object contains student names
//  as keys and their scores as values. You need to print each student’s name along with their grade based on 
// the following conditions:

// Score >= 90 → "A"
// Score >= 80 and < 90 → "B"
// Score >= 70 and < 80 → "C"
// Score >= 60 and < 70 → "D"
// Score < 60 → "F"
// You must use a for-in loop to iterate through the object.

let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  };

  for (let key in studentScores) {
    if(studentScores[key]>=90){
        console.log(key + " - A");
    }else if(studentScores[key]>=80 && studentScores[key]<90){
        console.log(key + " - B");
    }else if(studentScores[key]>=70 && studentScores[key]<80){
        console.log(key + " - C");
    }else if(studentScores[key]>=60 && studentScores[key]<70){
        console.log(key + " - D");
    }else{
        console.log(key + " - F");
    }
  }