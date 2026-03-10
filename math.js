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

function bitwiseAnd(a, b) {
  return a & b;
}

function bitwiseOr(a, b) {
  return a | b;
}

function bitwiseXor(a, b) {
  return a ^ b;
}

function bitwiseNot(value) {
  return ~value;
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

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  bitwiseAnd,
  bitwiseOr,
  bitwiseXor,
  bitwiseNot,
  percentage,
  sine,
  cosine,
  tangent,
};