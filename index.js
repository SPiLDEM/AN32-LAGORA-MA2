// constant var
const storeName = "2knees Industry";
const storeLocation = "Tuhod";
const storeCapacity = 699;

let name;
let price;
let quantity;
let products = 
[
    {name: "Laptop", price: 18999, quantity: 50},
    {name: "Smartphone", price: 9999, quantity: 100},
    {name: "Tablet", price: 12999, quantity: 80}
];
let totalNumberProducts = 0;
for (let product of products) 
{
    totalNumberProducts += product.quantity;
}
let totalInventoryValue = 0; // to find the total value of all inventory

for (let product of products) 
{
    totalInventoryValue += product.price * product.quantity;
}
const additionalLaptop = 10;
products[0].quantity += additionalLaptop; // adds 10 quantities for laptop

let highestPriceProductName = "";
let highestPrice = 0;

for (let product of products) 
{
    if (product.price > highestPrice) 
    {
        highestPrice = product.price;  // Patch notes for Highest price
        highestPriceProductName = product.name; 
    }
}
// The Outputs
console.log("Store Name: ", storeName);
console.log("Store Location: ", storeLocation);
console.log("Total Number of Products: ", totalNumberProducts);
console.log("Total Inventory Value: ", totalInventoryValue);
console.log("Updated Laptop Quantity: ", products[0].quantity);
console.log("Most Expensive Product: ", highestPriceProductName);