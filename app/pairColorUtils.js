const { MajorColorNames, MinorColorNames, ColorPair } = require('./colorConstants.js');

// Function to validate the input pairNumber
function validatePairNumber(pairNumber, minorSize, majorSize) {
    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw new Error(`Argument PairNumber: ${pairNumber} is outside the allowed range`);
    }
}
// Function to calculate majorIndex and minorIndex to get Color From PairNumber
function calculateIndicesFromPairNumber(pairNumber, minorSize) {
    const majorIndex = Math.floor((pairNumber - 1) / minorSize);
    const minorIndex = (pairNumber - 1) % minorSize;
    return { majorIndex, minorIndex };
}
// Function to create a ColorPair and assign colors
function createColorPair(majorIndex, minorIndex) {
    const pair = new ColorPair();
    pair.majorColor = MajorColorNames[majorIndex];
    pair.minorColor = MinorColorNames[minorIndex];
    return pair;
}
// Function to check unknown colors based on indices
function checkUnknownColors(majorIndex, minorIndex, pair) {
    if (majorIndex === -1 || minorIndex === -1) {
        throw new Error(`Unknown Colors: ${pair.toString()}`);
    }
}
// Function to calculate indices from color
function calculateIndicesFromColor(pair) {
    const majorIndex = MajorColorNames.indexOf(pair.majorColor);
    const minorIndex = MinorColorNames.indexOf(pair.minorColor);
    return { majorIndex, minorIndex };
}
// Function to calculate the pair number from color
function calculatePairNumberFromColor(pair) {
    const { majorIndex, minorIndex } = calculateIndicesFromColor(pair);
    checkUnknownColors(majorIndex, minorIndex, pair);
    return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
}
module.exports = {
    validatePairNumber,
    calculateIndicesFromPairNumber,
    createColorPair,
    calculatePairNumberFromColor
};
