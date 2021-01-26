function construct(inventory) {
  let miscellaneuosInventory = {
    name: inventory,
    material: "human",
    assemble: true,
    duration: 1000,
  };
  return miscellaneuosInventory;
}

const somePerson = construct("Kevin");
console.log("name is: " + somePerson.name); // should be "Kevin"
console.log("duration is: " + somePerson.duration); // should be 1000
