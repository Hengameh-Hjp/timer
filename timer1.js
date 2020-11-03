var input = process.argv.slice(2);
let timing = [];
for(let i = 0; i<input.length; i++) {
  if(Number(input[i]>0)){
    timing.push(Number(input[i]));
  }
}
timingSorted = timing.sort(function(a, b) {
  return a - b;
});

for (let i = 0; i<timingSorted.length; i++){
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timingSorted[i]);
}


