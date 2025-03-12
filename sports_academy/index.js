// A sports academy tracks athlete details, including name, sport, scores, and personal details. You need to 
// extract and manipulate data using destructuring and the spread operator.

const athletes = [
    { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
    { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
    { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
  ];
  
// 1️⃣ Extract the first athlete's name and sport using destructuring.

// using destructuring on first athlete & using name alias for name to avoid JS keyword usage
let {name : pName, sport} = athletes[0];
console.log(`${pName} playes ${sport}`);

// 2️⃣ Destructure the scores of Neeraj, storing the first two separately and the rest in another variable.

// filtering athlete Neeraj's data 
const neerajData = athletes.filter((ele,i)=>{
    return (ele.name == 'Neeraj')?ele:'';
});
// destructuring scores array into a, b, rest of array
let [a,b,...rest] = neerajData[0].scores;
console.log(a,b,rest);

// 3️⃣ Create a new object for Neeraj using the spread operator, updating his age to 27 and adding worldChampion: true.
const newObject = {...neerajData[0]};
newObject.age = 27;
newObject.worldChampion = true;
console.log(newObject);

// 4️⃣ Merge all scores from all athletes into a single array using the spread operator.
const scoreArr = athletes.reduce((acc,curr)=>{
    acc = acc.concat([...curr.scores])
    return acc
},[])
console.log(scoreArr);