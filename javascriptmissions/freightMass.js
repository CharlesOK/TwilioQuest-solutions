function calculateMass(itemsArray) {
  let reduced = itemsArray.reduce((sum, current) => sum + current.length, 0);
  return reduced;
}

const mass = calculateMass(["dog", "donkey", "cat"]);
console.log("Total mass of items is " + mass);
