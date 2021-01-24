function scan(stringArray) {
  let indexedItems = [];
  stringArray.forEach((element, index) => {
    if (element === "contraband") {
      stringArray = index;
      indexedItems.push(stringArray);
    }
  });
  return indexedItems;
}

const indexes = scan(["dog", "contraband", "cat", "zippers", "contraband"]);
console.log("Contraband Indexes: " + indexes);
