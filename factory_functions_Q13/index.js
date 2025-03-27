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

function addItemDiscount(obj, discount){
    let discountedPrice = obj.price - (obj.price)*discount/100
    return { 
            applyDiscount: function(){
            console.log(`Discounted Price for ${obj.name}: ${discountedPrice}`)
        }
    }
}

const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// Output: Discounted Price for Laptop: 1350