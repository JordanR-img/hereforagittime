function sum(a, b, c) {
  if (c !== undefined) {
    return a + b + c;
  } else {
    return a + b;
  }
}
module.exports = sum;
