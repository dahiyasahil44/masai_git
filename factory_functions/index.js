// Create a factory function createCar that returns an object representing a car. Each car should have make, model, 
// and year as properties. Add a method describeCar() to the object that outputs a description of the car's make, 
// model, and year.


function createCar(make,model,year){
    return{
        make,
        model,
        year,
        describeCar: function(){
            console.log(`This car is a ${this.year} ${this.make} ${this.model}.`)
        }
    }
}

const car = createCar("Toyota", "Camry", 2022)
car.describeCar()

