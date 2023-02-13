import Human from "../human.js";

export default class Worker extends Human{

     /**
         * @param {('male' | 'female')} gender
         * @param {('2' | '4')} legs
         * @param {('true' | 'false')} stamina
         * @param {('true' | 'false')} strength
         */

    constructor(name, age, gender, stamina, strength, industry){
        super(name, age, gender, stamina, strength)

        this.industry = industry;
    }

    run(){
        super.run()
    }


}