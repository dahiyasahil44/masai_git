// A movie streaming service wants to analyze its watchlist.
// Implement the following logic:

const movies = [
    { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
    { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
    { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
    { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
  ];
  
// Map to convert watchTime from minutes to hours.
movies.map((ele,i)=>{
    // converting watchtime into hours upto 2 decimal places
    ele.watchTime = ((ele.watchTime)/60).toFixed(2);
    return ele;
});
console.log("After converting watchtime", movies);

// Filter movies with a rating above 7.5.
const filterData = movies.filter((ele,i)=>{
    return ele.rating>7.5;
})
console.log("Movies with rating above 7.5 are:", filterData);

// Reduce to find the total watch time of all highly-rated movies.
const totalWatchTime = filterData.reduce((acc,curr)=>{
    // sum of watch time of all highly rated movies
    acc = acc + (curr.watchTime)*1; // converting string into number
    return acc;
},0);
console.log("Total watch time of highly-rated movies is: ",totalWatchTime);


// Map to extract only the title and watch time of the best movies.
const bestMovies = filterData.map((ele,i)=>{
    return {"title": ele.title, "watchTime": ele.watchTime};
});
console.log("Best movies are:", bestMovies);