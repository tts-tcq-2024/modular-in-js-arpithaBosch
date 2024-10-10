const { MajorColorNames, MinorColorNames, ColorPair } = require('./colorData.js');

function getColorFromPairNumber(pairNumber) {
    let minorSize = MajorColorNames.length;
    let majorSize = MinorColorNames.length;

    // Validate the input pairNumber
    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw `Argument PairNumber: ${pairNumber} is outside the allowed range`;
    }

    // Calculate majorIndex and minorIndex directly
    let majorIndex = Math.floor((pairNumber - 1) / minorSize);
    let minorIndex = (pairNumber - 1) % minorSize;

    // Create a ColorPair and assign colors
    let pair = new ColorPair();
    pair.majorColor = MajorColorNames[majorIndex];
    pair.minorColor = MinorColorNames[minorIndex];
    return pair;
}
function getPairNumberFromColor(pair) {
    let majorIndex = MajorColorNames.indexOf(pair.majorColor);
    let minorIndex = MinorColorNames.indexOf(pair.minorColor);

    if (majorIndex === -1 || minorIndex === -1) {
        throw `Unknown Colors: ${pair.toString()}`;
    }

    return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
}
function printColorCodingManual() {
    const totalPairs = 25;
    console.log("Color Code Manual:");
    for (let i = 1; i <= totalPairs; i++) {
        const pair = getColorFromPairNumber(i);
        console.log(`Pair Number: ${i}, Major Color: ${pair.majorColor}, Minor Color: ${pair.minorColor}`);
    }
}

module.exports = {
    getColorFromPairNumber,
    getPairNumberFromColor,
    printColorCodingManual
};
