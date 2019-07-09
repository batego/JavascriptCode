function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    //console.log(newSquare);
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
