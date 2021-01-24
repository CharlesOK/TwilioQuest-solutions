function calculatePower(values) {
  let total = 0;
  let result = values.reduce((sum, current) => sum + current * 2, total);
  return result;
}
