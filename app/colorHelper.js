const { MajorColorNames, MinorColorNames, ColorPair } = require('./colorData.js');

// Function to validate the input pairNumber
function validatePairNumber(pairNumber) {
    const minorSize = MinorColorNames.length;
    const majorSize = MajorColorNames.length;

    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw `Argument PairNumber: ${pairNumber} is outside the allowed range`;
    }
}

// Function to calculate majorIndex and minorIndex
function calculateIndices(pairNumber) {
    const minorSize = MinorColorNames.length;
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

// Export the helper functions
module.exports = {
    validatePairNumber,
    calculateIndices,
    createColorPair,
};
