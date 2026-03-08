const { add, subtract, percentage, sqrt, power } = require('./math');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('calculates percentage accurately', () => {
  expect(percentage(25, 100)).toBe(25);
});

test('throws when denominator is zero', () => {
  expect(() => percentage(25, 0)).toThrow('Cannot calculate percentage with a zero denominator');
});

test('calculates square root of a positive number', () => {
  expect(sqrt(16)).toBe(4);
});

test('throws when calculating square root of a negative number', () => {
  expect(() => sqrt(-1)).toThrow('Cannot calculate square root of a negative value');
});

test('calculates power correctly', () => {
  expect(power(2, 3)).toBe(8);
});

test('throws when exponent is missing for power', () => {
  expect(() => power(2)).toThrow('Exponent is required');
});
