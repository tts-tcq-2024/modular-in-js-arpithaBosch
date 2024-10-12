const { getColorFromPairNumber, getPairNumberFromColor } = require('../src/pairColorMapper.js');
const { ColorPair } = require('../src/colorConstants.js');

function test() {
  // Test case 1: Retrieve colors from pair number 4
  let pairNumber = 4;
  let colorPair = getColorFromPairNumber(pairNumber);
  console.log(`[Input] Pair Number: ${pairNumber}, [Output] Colors: ${colorPair}`);
  console.assert(colorPair.majorColor === 'WHITE', 'Test failed: Major color should be WHITE');
  console.assert(colorPair.minorColor === 'BROWN', 'Test failed: Minor color should be BROWN');

  // Test case 2: Retrieve colors from pair number 5
  pairNumber = 5;
  colorPair = getColorFromPairNumber(pairNumber);
  console.log(`[Input] Pair Number: ${pairNumber}, [Output] Colors: ${colorPair}`);
  console.assert(colorPair.majorColor === 'WHITE', 'Test failed: Major color should be WHITE');
  console.assert(colorPair.minorColor === 'SLATE', 'Test failed: Minor color should be SLATE');

  // Test case 3: Retrieve colors from pair number 23
  pairNumber = 23;
  colorPair = getColorFromPairNumber(pairNumber);
  console.log(`[Input] Pair Number: ${pairNumber}, [Output] Colors: ${colorPair}`);
  console.assert(colorPair.majorColor === 'RED', 'Test failed: Major color should be RED');
  console.assert(colorPair.minorColor === 'GREEN', 'Test failed: Minor color should be GREEN');

  // Test case 4: Convert colors to pair number for YELLOW-GREEN combination
  let testPair = new ColorPair();
  testPair.majorColor = 'YELLOW';
  testPair.minorColor = 'GREEN';
  pairNumber = getPairNumberFromColor(testPair);
  console.log(`[Input] Colors: ${testPair}, [Output] Pair Number: ${pairNumber}`);
  console.assert(pairNumber === 18, 'Test failed: Pair number should be 18 for YELLOW-GREEN');

  // Test case 5: Convert colors to pair number for RED-BLUE combination
  testPair = new ColorPair();
  testPair.majorColor = 'RED';
  testPair.minorColor = 'BLUE';
  pairNumber = getPairNumberFromColor(testPair);
  console.log(`[Input] Colors: ${testPair}, [Output] Pair Number: ${pairNumber}`);
  console.assert(pairNumber === 6, 'Test failed: Pair number should be 6 for RED-BLUE');

  // You CANNOT test error cases without try-catch using console.assert()
}

// Run the test cases
test();
