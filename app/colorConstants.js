const MajorColorNames = ["WHITE", "RED", "BLACK", "YELLOW", "VIOLET"];
const MinorColorNames = ["BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"];

function ColorPair() {
    this.majorColor;
    this.minorColor;
}

ColorPair.prototype.toString = function() {
    return `MajorColor: ${this.majorColor}, MinorColor: ${this.minorColor}`;
};

module.exports = {
    MajorColorNames,
    MinorColorNames,
    ColorPair
};
