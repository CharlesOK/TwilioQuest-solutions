function calculatePower(values) {
  let total = 0;
  let result = values.reduce((sum, current) => sum + current * 2, total);
  return result;
}

const laserPower = calculatePower([1, 3, 8]);
console.log("Required laser power is " + laserPower);
