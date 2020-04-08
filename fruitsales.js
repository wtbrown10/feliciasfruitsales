let fruitInventory = ["Apples", "Peaches", "Pumpkins", "Endives"];
let fruitPrices = [1, 1.5, 7, 12];
let fruitSold = [35, 22, 7, 1];

for (i = 0; i < fruitInventory.length; i++) {
  console.log(
    `We have ${fruitInventory[i]} for sale at $${fruitPrices[i]} each. and we have already sold ${fruitSold[i]} today!`
  );
}
