function scanAndFilter(items, contents) {
  let filtered = items.filter((word) => word !== contents);
  return filtered;
}

const filtered = scanAndFilter(
  ["dog", "ray gun", "cat", "zippers", "ray gun"],
  "ray gun"
);
console.log(filtered);
