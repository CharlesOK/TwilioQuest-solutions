function addFirstToLast(textArray) {
  let alteredText = "";
  if (textArray.length > 0) {
    alteredText = textArray[0].concat(textArray[textArray.length - 1]);
  }
  return alteredText;
}

//console.log(addFirstToLast(["first", "second", "third"]));
