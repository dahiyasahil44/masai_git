// Write a factory function called createEmployee that generates an object representing an employee. Each employee object 
// should have the properties name, role, and salary, along with a method introduce() that prints a message introducing
//  the employee's name and role.


function createEmployee(name,role,salary){
    return{
        name,
        role,
        salary,
        introduce: function(){
            console.log(`Hello, I am ${this.name}, working as a ${this.role}.`)
        }
    }
}

const employee1 = createEmployee("Alice", "Developer", 60000);
employee1.introduce();

