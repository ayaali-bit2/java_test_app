const { add, subtract, percentage } = require('./math');

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
