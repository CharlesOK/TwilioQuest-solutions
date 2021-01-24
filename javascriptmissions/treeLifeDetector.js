const args = process.argv[2];

if (Number(args) === 0) {
  console.log("alive");
} else {
  console.log("other");
}
