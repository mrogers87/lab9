//Create several grocery item objects with properties name and price and store the grocery items in an array.
var shoppingList = [
{name: "Cherries", price: "$2.99"},
{name: "Cereal", price: "$3.99"},
{name: "Milk", price: "$2.49"},
];
//loop through the array and print out the name and price on a new line
for(var i=0; i<shoppingList.length; i++){
	document.write(shoppingList[i].name + " = " + shoppingList[i].price);
}
//total up the amount with the label "Total"
var total = [2.99,3.99,2.49];
var indexValue = total.length;
var totalSum = 0;
for(var x = 0; x <indexValue; x++){
    totalSum += total[x];
}
document.write("Total: $"+totalSum);

function myFunction() {
    var x = document.getElementById("myP").innerHTML;
    document.getElementById("test").innerHTML = x;
}
