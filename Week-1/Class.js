class Animal {
    constructor (name, legCount, speaks ){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    static myType(){
        console.log("Am an Animal");
    }

    speak(){
        console.log(`${this.speaks}`)
    }

}

let dog = new Animal("Dog", 4, "bhow bhow");
console.log(dog);

dog.speak();

Animal.myType();
