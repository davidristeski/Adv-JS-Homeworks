export default class Animal{

    /**
   * @param {('carnivore'|'herbivore' | 'omnivore')} type - The type of the animal must be "carnivore", "herbivore", "omnivore"
   */
    constructor(name, type, age, size){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    eat(input){
        if(input instanceof Animal){
            if (input.type === 'herbivore'){
            console.log(`The animal ${input.name} is a herbivore and does not eat other animals.`);
            }
            else if(input.type !== "herbivore" && input.type != this.type){
            this.isEaten = true;
            console.log(`The animal ${input.name} ate the ${this.name}`)
            }
            else if (this.size*2 <= input.size){
                console.log(`The animal ${this.name} tried to eat the ${input.name}, but it was too large.`);
            }
            else{
                console.log(`They are same species and are hanging around.`)
            }
        }
        
        else{
            console.log(`The animal ${this.name} is eating ${input}`);
        }
    }

    // eat(input) {
    //     if (input instanceof Animal) {
    //       if (input.type +== 'herbivore') {
    //         console.log(`The animal ${this.name} is a herbivore and does not eat other animals.`);
    //       } else if (this.size >= input.size * 2) {
    //         input.isEaten = true;
    //         console.log(`The animal ${this.name} ate the ${input.name}.`);
    //       } else {
    //         console.log(`The animal ${this.name} tried to eat the ${input.name} but it was too large.`);
    //       }
    //     } else {
    //       console.log(`The animal ${this.name} is eating ${input}.`);
    //     }
    //   }


    
}