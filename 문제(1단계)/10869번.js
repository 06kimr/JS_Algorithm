let fs = require('fs')

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0].split(" ")

let a = parseInt(line[0])
let b = parseInt(line[1])

let division = parseInt(a/b)
let remaining = a % b

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(division)
console.log(remaining)