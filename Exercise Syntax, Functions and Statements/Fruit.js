function fruit(frut,grams,price){
let toKg=grams/1000
let money=toKg*price
console.log(`I need $${money.toFixed(2)} to buy ${toKg.toFixed(2)} kilograms ${frut}.`);

}
fruit('orange', 2500, 1.80)