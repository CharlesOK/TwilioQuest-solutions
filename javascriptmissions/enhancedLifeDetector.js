const args = process.argv[2];

if (Number(args) === 0) {
  console.log("alive");
} else if (Number(args) === 1) {
  console.log("flowering");
} else if (Number(args) === 2) {
  console.log("shedding");
} else {
  console.log("other");
}
