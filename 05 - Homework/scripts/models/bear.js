import Animal from "./animal.js";

export default class Bear extends Animal{
    constructor(name, type, age, size){
        super(name, type, age, size);
        this.humansBenefit = false;
}

bearRoar(){
    console.log("Graww");
}
}
