const args = process.argv.slice(2); 
  
function division(args) {
  let divisible = Number(args) 
  return divisible / 2;
}

console.log(division(args));