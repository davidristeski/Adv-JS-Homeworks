import Animal from "./models/animal.js";
import Bear from "./models/bear.js";
import Sheep from "./models/sheep.js";

const bigBear = new Bear(" Big Bear", "carnivore", 10, 150);

const sheep = new Sheep("Sheep", "herbivore", 5, 50);

const smallBear = new Bear("Small bear", "carnivore", 5, 50);

sheep.sheepSound();

// console.log(bigBear);
// console.log(sheep);

bigBear.eat(sheep);

sheep.eat(bigBear);

bigBear.eat(smallBear);

smallBear.eat(bigBear);

sheep.eat("carrot");