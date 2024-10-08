import { MajorColorNames, MinorColorNames, ColorPair } from './colorData.js';

// Function to get color from pair number
export function getColorFromPairNumber(pairNumber) {
    let minorSize = MajorColorNames.length;
    let majorSize = MinorColorNames.length;

    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
    }

    let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt(zeroBasedPairNumber / minorSize);
    let minorIndex = zeroBasedPairNumber % minorSize;

    let pair = new ColorPair();
    pair.majorColor = MajorColorNames[majorIndex];
    pair.minorColor = MinorColorNames[minorIndex];
    return pair;
}

// Function to get pair number from colors
export function getPairNumberFromColor(pair) {
    let majorIndex = MajorColorNames.indexOf(pair.majorColor);
    let minorIndex = MinorColorNames.indexOf(pair.minorColor);

    if (majorIndex === -1 || minorIndex === -1) {
        throw `Unknown Colors: ${pair.toString()}`;
    }

    return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
}
