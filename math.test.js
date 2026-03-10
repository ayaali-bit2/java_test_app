const { add, subtract, multiply, divide, bitwiseAnd, bitwiseOr, bitwiseXor, bitwiseNot, decimalToBinary, decimalToHex, binaryToDecimal, hexToDecimal, percentage, sine, cosine, tangent } = require('./math');
const { add, subtract, multiply, divide, percentage, sine, cosine, tangent, asin, acos, atan, leftShift, rightShift } = require('./math');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('throws when dividing by zero', () => {
  expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
});

test('performs bitwise AND', () => {
  expect(bitwiseAnd(5, 3)).toBe(1);
});

test('performs bitwise OR', () => {
  expect(bitwiseOr(5, 2)).toBe(7);
});

test('performs bitwise XOR', () => {
  expect(bitwiseXor(5, 3)).toBe(6);
});

test('performs bitwise NOT', () => {
  expect(bitwiseNot(0)).toBe(-1);
});

test('calculates percentage accurately', () => {
  expect(percentage(25, 100)).toBe(25);
});

test('throws when denominator is zero', () => {
  expect(() => percentage(25, 0)).toThrow('Cannot calculate percentage with a zero denominator');
});

test('calculates sine for 0 radians', () => {
  expect(sine(0)).toBeCloseTo(0);
});

test('calculates cosine for 0 radians', () => {
  expect(cosine(0)).toBeCloseTo(1);
});

test('calculates tangent for PI/4 radians', () => {
  expect(tangent(Math.PI / 4)).toBeCloseTo(1);
});

test('converts decimal to binary string', () => {
  expect(decimalToBinary(42)).toBe('101010');
});

test('converts decimal to hex string', () => {
  expect(decimalToHex(255)).toBe('FF');
});

test('converts binary string to decimal', () => {
  expect(binaryToDecimal('1010')).toBe(10);
});

test('converts hex string to decimal', () => {
  expect(hexToDecimal('1A')).toBe(26);
});

test('throws when decimalToBinary receives a non-integer', () => {
  expect(() => decimalToBinary(3.14)).toThrow('Invalid decimal value');
});

test('throws when decimalToHex receives a non-integer', () => {
  expect(() => decimalToHex(2.5)).toThrow('Invalid decimal value');
});

test('throws when binaryToDecimal receives invalid input', () => {
  expect(() => binaryToDecimal('102')).toThrow('Invalid binary value');
});

test('throws when hexToDecimal receives invalid input', () => {
  expect(() => hexToDecimal('G1')).toThrow('Invalid hexadecimal value');
test('calculates arcsine for 0 radians', () => {
  expect(asin(0)).toBeCloseTo(0);
});

test('calculates arccosine for 1', () => {
  expect(acos(1)).toBeCloseTo(0);
});

test('calculates arctangent for 1', () => {
  expect(atan(1)).toBeCloseTo(Math.PI / 4);
});

test('performs left shift by 2 bits', () => {
  expect(leftShift(1, 2)).toBe(4);
});

test('performs right shift by 1 bit', () => {
  expect(rightShift(4, 1)).toBe(2);
});