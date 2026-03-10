function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }

  return a / b;
}

function percentage(value, ofValue) {
  if (ofValue === 0) {
    throw new Error('Cannot calculate percentage with a zero denominator');
  }

  return (value / ofValue) * 100;
}

function sine(angle) {
  return Math.sin(angle);
}

function cosine(angle) {
  return Math.cos(angle);
}

function tangent(angle) {
  return Math.tan(angle);
}

function asin(angle) {
  return Math.asin(angle);
}

function acos(angle) {
  return Math.acos(angle);
}

function atan(angle) {
  return Math.atan(angle);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  percentage,
  sine,
  cosine,
  tangent,
  asin,
  acos,
  atan,
};