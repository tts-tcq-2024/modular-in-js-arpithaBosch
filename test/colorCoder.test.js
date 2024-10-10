// Import necessary functions and classes from colorCoder and colorData modules
const { getColorFromPairNumber, getPairNumberFromColor, printColorCodingManual } = require('../src/colorCoder.js');
const { ColorPair } = require('../src/colorData.js');

// Test function to validate color coding functionalities
function test() {
    // Test case 1: Retrieve colors from pair number 4
    let pairNumber = 4;
    let testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[Input] Pair Number: ${pairNumber}, [Output] Colors: ${testPair1}`);
    console.assert(testPair1.majorColor === "WHITE", "Test failed: Major color should be WHITE");
    console.assert(testPair1.minorColor === "BROWN", "Test failed: Minor color should be BROWN");

    // Test case 2: Retrieve colors from pair number 5
    pairNumber = 5;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[Input] Pair Number: ${pairNumber}, [Output] Colors: ${testPair1}`);
    console.assert(testPair1.majorColor === "WHITE", "Test failed: Major color should be WHITE");
    console.assert(testPair1.minorColor === "SLATE", "Test failed: Minor color should be SLATE");

    // Test case 3: Retrieve colors from pair number 23
    pairNumber = 23;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[Input] Pair Number: ${pairNumber}, [Output] Colors: ${testPair1}`);
    console.assert(testPair1.majorColor === "RED", "Test failed: Major color should be VIOLET");
    console.assert(testPair1.minorColor === "GREEN", "Test failed: Minor color should be GREEN");

    // Test case 4: Convert colors to pair number for YELLOW-GREEN combination
    let testPair2 = new ColorPair();
    testPair2.majorColor = "YELLOW";
    testPair2.minorColor = "GREEN";
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[Input] Colors: ${testPair2}, [Output] Pair Number: ${pairNumber}`);
    console.assert(pairNumber === 18, "Test failed: Pair number should be 18 for YELLOW-GREEN");

    // Test case 5: Convert colors to pair number for RED-BLUE combination
    testPair2 = new ColorPair();
    testPair2.majorColor = "RED";
    testPair2.minorColor = "BLUE";
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[Input] Colors: ${testPair2}, [Output] Pair Number: ${pairNumber}`);
    console.assert(pairNumber === 6, "Test failed: Pair number should be 6 for RED-BLUE");
}
test();
console.log("----------------------------------------------------------------------------");
// Print the color coding manual for reference
printColorCodingManual();
console.log("----------------------------------------------------------------------------");
