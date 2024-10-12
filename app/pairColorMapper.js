const { validatePairNumber, calculateIndicesFromPairNumber, createColorPair, calculatePairNumberFromColor } = require('./pairColorUtils.js');
const { MinorColorNames, MajorColorNames } = require('./colorConstants.js');

function getColorFromPairNumber(pairNumber) {
    validatePairNumber(pairNumber, MinorColorNames.length, MajorColorNames.length);  // Pass sizes correctly
    const { majorIndex, minorIndex } = calculateIndicesFromPairNumber(pairNumber, MinorColorNames.length);
    return createColorPair(majorIndex, minorIndex);
}

function getPairNumberFromColor(pair) {
    return calculatePairNumberFromColor(pair);
}

module.exports = {
    getColorFromPairNumber,
    getPairNumberFromColor
};
