let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

let maxValue = 1000001
let minValue = -1000001

for(let i= 0; i < n; i++){
  if(maxValue > arr[i]) minValue = arr[i]
  if(minValue < arr[i]) maxValue = arr[i]
}

console.log(minValue + " " + maxValue )
