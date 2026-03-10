const { add, subtract, multiply, divide, bitwiseAnd, bitwiseOr, bitwiseXor, bitwiseNot, percentage, sine, cosine, tangent } = require('./math');

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