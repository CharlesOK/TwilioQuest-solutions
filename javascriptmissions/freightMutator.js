function mutate(itemArray) {
  let mutated = itemArray.map((value) => value.toUpperCase());
  return mutated;
}

const mutated = mutate(["dog", "ray gun", "cat"]);
console.log("Mutated Items");
console.log(mutated);
