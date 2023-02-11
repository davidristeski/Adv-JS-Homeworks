import Animal from "./models/animal.js";

const bigBear = new Animal(" Big Bear", "carnivore", 10, 150);

const sheep = new Animal("Sheep", "herbivore", 5, 50);

const smallBear = new Animal("Small bear", "carnivore", 5, 50);

// console.log(bigBear);
// console.log(sheep);

bigBear.eat(sheep);

sheep.eat(bigBear);

bigBear.eat(smallBear);

smallBear.eat(bigBear);

sheep.eat("carrot");