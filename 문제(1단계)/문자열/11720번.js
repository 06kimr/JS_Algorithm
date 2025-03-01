let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let string = input[1];
let sum = 0
for(let i = 0; i < n; i++){
  sum += Number(string[i]);
}

console.log (sum)