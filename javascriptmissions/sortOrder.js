const args1 = process.argv[2].toLowerCase();
const args2 = process.argv[3].toLowerCase();

if (args1 < args2) {
  console.log(-1);
} else if (args1 === args2) {
  console.log(0);
} else if (args1 > args2) {
  console.log(1);
}
