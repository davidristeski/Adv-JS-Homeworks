import Mammal from "../mammal.js";

export default class Human extends Mammal{

    /**
         * @param {('male' | 'female')} gender
         * @param {('2' | '4')} legs
         * @param {('true' | 'false')} stamina
         * @param {('true' | 'false')} strength
         */

    constructor(name, age, gender, stamina, strength){
        super(name, age, gender);

        this.legs = 2;
        this.intelegence = 100;
        this.stamina = stamina;
        this.strength = strength;
    }
    run(){
        if (this.stamina == "true" && this.strength == "true"){
            console.log(`${this.name} can run a half marathon.`);
        }
        else{
            console.log(`${this.name} can't run a half marathon.`);
        }
        }
    
    }