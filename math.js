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

function decimalToBinary(value) {
  const normalized = Number(value);
  if (!Number.isFinite(normalized) || !Number.isInteger(normalized)) {
    throw new Error('Invalid decimal value');
  }

  return normalized.toString(2);
}

function decimalToHex(value) {
  const normalized = Number(value);
  if (!Number.isFinite(normalized) || !Number.isInteger(normalized)) {
    throw new Error('Invalid decimal value');
  }

  return normalized.toString(16).toUpperCase();
}

function binaryToDecimal(value) {
  const normalized = String(value).trim();
  if (!/^[01]+$/.test(normalized)) {
    throw new Error('Invalid binary value');
  }

  return parseInt(normalized, 2);
}

function hexToDecimal(value) {
  const normalized = String(value).trim();
  if (!/^[0-9a-fA-F]+$/.test(normalized)) {
    throw new Error('Invalid hexadecimal value');
  }

  return parseInt(normalized, 16);
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

function leftShift(value, bits) {
  return value << bits;
}

function rightShift(value, bits) {
  return value >> bits;
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
  decimalToBinary,
  decimalToHex,
  binaryToDecimal,
  hexToDecimal,
  percentage,
  sine,
  cosine,
  tangent,
  asin,
  acos,
  atan,
  leftShift,
  rightShift,
};