function scan(stringArray) {
  let contraband = 0;
  stringArray.forEach((value) => {
    if (value === "contraband") {
      contraband = contraband += 1;
    }
  });
  return contraband;
}

const numItems = scan(["dog", "contraband", "cat", "zippers", "contraband"]);
console.log('Number of "contraband": ' + numItems);
