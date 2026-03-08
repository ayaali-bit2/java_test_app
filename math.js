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

function sqrt(value) {
  if (value < 0) {
    throw new Error('Cannot calculate square root of a negative value');
  }

  return Math.sqrt(value);
}

function power(base, exponent) {
  if (exponent === undefined) {
    throw new Error('Exponent is required');
  }

  return Math.pow(base, exponent);
}

module.exports = {
  add,
  subtract,
  percentage,
  sqrt,
  power,
};
