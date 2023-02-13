import Animal from "./animal.js";

export default class Sheep extends Animal {
    constructor(name, type, age, size){
        super(name, type, age, size);
        this.humansBenefit = true;
    }
    sheepSound(){
        console.log("Beee");
    }
};