import Human from "./models/human/human.js";
import Farmer from "./models/human/professions/farmer.js";
import Musician from "./models/human/professions/musician.js";
import Worker from "./models/human/professions/worker.js";
import Mammal from "./models/mammal.js";

const firstCreature = new Mammal("Alien", 150, "male", "2");

firstCreature.printSpecs();

const adamFirstHuman = new Human("Adam", 30, "male", 100)

adamFirstHuman.printSpecs()

const worker = new Worker("Tom Hardy", 35, "male", "true", "true", "Construction Industry");

worker.run()
worker.printSpecs()

const musician = new Musician("Frank Sinatra", 60, "male", "false", "false", "Piano")

musician.run()
musician.play()

musician.increaseIntelegence()
musician.increaseIntelegence()

musician.printSpecs()

const farmer = new Farmer("Jackson Smallvile", 45, "male", "true", "true", "Crops&Honey")

farmer.run()
farmer.eat()
farmer.printSpecs()