import Human from "../human.js";

export default class Musician extends Human{

   /**
         * @param {('male' | 'female')} gender
         * @param {('2' | '4')} legs
         * @param {('true' | 'false')} stamina
         * @param {('true' | 'false')} strength
         */

    constructor(name, age, gender, stamina, strength, instrument){
    super(name, age, gender, stamina, strength)

    this.instrument = instrument
    }

    play(){
        console.log(`${this.name} plays on a ${this.instrument}`);
    }

    increaseIntelegence(){
            this.averageIntel += 25;
        }
    }