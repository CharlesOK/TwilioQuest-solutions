function getFirstAmountSorted(inputArray, num) {
  let sortedArray = inputArray.sort();
  let targetValue = sortedArray.slice(0, num);
  return targetValue;
}

/*console.log(
  getFirstAmountSorted(["cheerios", "apple jacks", "lucky charms"], 3)
);
*/
