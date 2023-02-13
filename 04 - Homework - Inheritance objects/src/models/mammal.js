export default class Mammal{

     /**
         * @param {('male' | 'female')} gender
         * @param {('2' | '4')} legs
         */

    constructor(name, age, gender, legs) {
        this.type = this.constructor.name.toLowerCase()
        this.NumberOfLegs;

        this.gender = gender;
        this.name = name;
        this.age = age;
        this.legs = legs;

        this.drinksMilk = true;
        this.hasWarmBlood = true;
        this.numberOfEyes = 2;
        this.breaths = true;
        this.hasPulse = true;
        this.isAlive = true;
    }

    die(causeOfDeath = 'natural causes'){
        this.isAlive = false;
        this.hasPulse = false;
        this.breaths = false;
        console.log(`Cause of death: ${causeOfDeath}`);
    }

    printSpecs(){
        console.log(`${this.name} specifications:`);
        for(let prop in this){
                console.log(`${prop}: ${this[prop]}`)
        }
    }
}
