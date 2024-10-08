import { getColorFromPairNumber, getPairNumberFromColor } from './colorUtils.js';
import { ColorPair } from './colorData.js';

// Function to print the color coding manual
export function printColorCodingManual() {
    const totalPairs = 25; // 5x5 = 25 possible pairs
    console.log("Color Code Manual:");
    for (let i = 1; i <= totalPairs; i++) {
        const pair = getColorFromPairNumber(i);
        console.log(`Pair Number: ${i}, Major Color: ${pair.majorColor}, Minor Color: ${pair.minorColor}`);
    }
}

// Test function using console.assert()
export function test() {
    let pairNumber = 4;
    let testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor === "WHITE");
    console.assert(testPair1.minorColor === "BROWN");

    pairNumber = 5;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor === "WHITE");
    console.assert(testPair1.minorColor === "SLATE");

    pairNumber = 23;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor === "RED");
    console.assert(testPair1.minorColor === "GREEN");

    let testPair2 = new ColorPair();
    testPair2.majorColor = "YELLOW";
    testPair2.minorColor = "GREEN";
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber === 18);

    testPair2 = new ColorPair();
    testPair2.majorColor = "RED";
    testPair2.minorColor = "BLUE";
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber === 6);
}

// Run the tests
test();

