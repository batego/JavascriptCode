var Character = /** @class */ (function () {
    function Character(name, age) {
        this.name = name;
        this.age = age;
    }
    Character.prototype.log = function () {
        var sentence = "Hello, my name is " + this.name + ". I'll be " + (this.age + 1) + " years old next month.";
        console.log(sentence);
    };
    return Character;
}());
var btg = new Character('boris', 31);
btg.log().;
