function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function percentage(value, ofValue) {
  if (ofValue === 0) {
    throw new Error('Cannot calculate percentage with a zero denominator');
  }

  return (value / ofValue) * 100;
}

module.exports = {
  add,
  subtract,
  percentage,
};
