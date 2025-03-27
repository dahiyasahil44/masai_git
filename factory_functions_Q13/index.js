// Create a factory function createInventoryItem to represent items in an inventory system. Each item should have 
// properties like name, category, and price. Add a method describeItem() that outputs the item's details. Extend
//  this functionality by creating another factory function addItemDiscount, which accepts an inventoryItem object,
//  a discountPercent, and adds a discountedPrice property based on the discount. Finally, create a method
//  applyDiscount() in addItemDiscount that recalculates and outputs the discounted price.



function createInventoryItem(name,category,price){
    return{
        name,
        category,
        price,
        describeItem: function(){
            console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}.`)
        }
    }
}

const car = createCar("Toyota", "Camry", 2022)
car.describeCar()

