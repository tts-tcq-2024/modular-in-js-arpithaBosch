const { buildColorCodingManual } = require('../src/buildColorCodeManual.js');

function testBuildColorCodingManual() {
    const manual = buildColorCodingManual();
    
    // Test that the manual has exactly 25 pairs
    console.assert(manual.length === 25, `Test failed: Manual should contain 25 pairs, but contains ${manual.length}`);

    // Test individual pairs - these should match the expected values
    console.assert(manual[0].pairNumber === 1, `Test failed: Pair 1 should have pairNumber 1, but got ${manual[0].pairNumber}`);
    console.assert(manual[0].majorColor === "WHITE", `Test failed: Pair 1 major color should be WHITE, but got ${manual[0].majorColor}`);
    console.assert(manual[0].minorColor === "BLUE", `Test failed: Pair 1 minor color should be BLUE, but got ${manual[0].minorColor}`);

    console.assert(manual[1].pairNumber === 2, `Test failed: Pair 2 should have pairNumber 2, but got ${manual[1].pairNumber}`);
    console.assert(manual[1].majorColor === "WHITE", `Test failed: Pair 2 major color should be WHITE, but got ${manual[1].majorColor}`);
    console.assert(manual[1].minorColor === "ORANGE", `Test failed: Pair 2 minor color should be ORANGE, but got ${manual[1].minorColor}`);

    console.assert(manual[22].pairNumber === 23, `Test failed: Pair 23 should have pairNumber 23, but got ${manual[22].pairNumber}`);
    console.assert(manual[22].majorColor === "VIOLET", `Test failed: Pair 23 major color should be RED, but got ${manual[22].majorColor}`);
    console.assert(manual[22].minorColor === "GREEN", `Test failed: Pair 23 minor color should be GREEN, but got ${manual[22].minorColor}`);

    console.assert(manual[24].pairNumber === 25, `Test failed: Pair 25 should have pairNumber 25, but got ${manual[24].pairNumber}`);
    console.assert(manual[24].majorColor === "VIOLET", `Test failed: Pair 25 major color should be VIOLET, but got ${manual[24].majorColor}`);
    console.assert(manual[24].minorColor === "SLATE", `Test failed: Pair 25 minor color should be SLATE, but got ${manual[24].minorColor}`);

    console.log("All manual test cases passed!");
}

// Run the test
testBuildColorCodingManual();
