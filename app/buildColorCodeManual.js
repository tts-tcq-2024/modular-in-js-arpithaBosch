const { getColorFromPairNumber } = require('./pairColorMapper.js');

// Function to build color coding manual
function buildColorCodingManual() {
    const totalPairs = 25;  // Number of total color pairs
    const manual = [];

    // Loop through each pair number and get corresponding color pair
    for (let i = 1; i <= totalPairs; i++) {
        const pair = getColorFromPairNumber(i);
        manual.push({
            pairNumber: i,
            majorColor: pair.majorColor,
            minorColor: pair.minorColor
        });
    }

    return manual;  // Return the constructed color manual
}

module.exports = {
    buildColorCodingManual,
};
