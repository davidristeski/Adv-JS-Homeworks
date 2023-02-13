import Worker from "./worker.js";

export default class Farmer extends Worker{

     /**
         * @param {('male' | 'female')} gender
         * @param {('2' | '4')} legs
         * @param {('true' | 'false')} stamina
         * @param {('true' | 'false')} strength
         */

    constructor(name, age, gender, stamina, strength, industry){
        super(name, age, gender, stamina, strength, industry)

        this.loveToAnimals = true;
        this.loveToPlants = true;
    }

    eat(){
        console.log(`What ${this.name} grows, ${this.name} eats.`);
    }
}