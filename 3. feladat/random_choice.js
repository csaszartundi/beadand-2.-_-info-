function pickRandomFruitNames(fruitList, count) {
    const randomFruits = [];
    const fruitCount = Math.min(count, fruitList.length);
    while (randomFruits.length < fruitCount) {
        const randomIndex = Math.floor(Math.random() * fruitList.length);
        const selectedFruit = fruitList[randomIndex];
        if (!randomFruits.includes(selectedFruit)) {
            randomFruits.push(selectedFruit);
        }
    }
    return randomFruits;
}

// Gyümölcs nevek
const fruitList = ['Alma', 'Körte', 'Banán', 'Szilva', 'Citrom', 'Narancs', 'Mangó'];

// Példa:
console.log("Gyümölcsnevek a listában:");
console.log(fruitList);

const selectedFruits = pickRandomFruitNames(fruitList, 3);
console.log("\nVéletlenszerűen kiválasztott gyümölcsök:");
console.log(selectedFruits);
