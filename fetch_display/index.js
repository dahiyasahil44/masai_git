// Create a webpage that fetches a list of users from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users) and 
// displays their names in console.

async function fetchUsers(){
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("Error while fetching data:", error)
    }
    
}

let users = await fetchUsers();

users.forEach(ele => {
    console.log(ele.name);
});