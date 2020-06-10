var Dereck = /** @class */ (function () {
    function Dereck(name, age) {
        this.name = name;
        this.age = age;
    }
    Dereck.prototype.log = function () {
        var sentence = "Hello, my name is " + this.name + ". I'll be " + (this.age + 1) + " years old next month.";
        console.log(sentence);
    };
    return Dereck;
}());
var btg = new Dereck('boris', 31);
btg.log();
