let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0])
let result = ""

for(let i = 1; i <= n; i++) {
  for(let j = 1; j <= i; j++){
    result += "*"
  }
  result += "\n"
}

console.log(result)