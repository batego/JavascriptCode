class Dereck {
    constructor(public name: string, public age: number) { }

    log() {
        let sentence: string = `Hello, my name is ${this.name}. I'll be ${this.age + 1} years old next month.`;
        console.log(sentence);
    }

}

var btg = new Dereck('boris', 31);
btg.log();