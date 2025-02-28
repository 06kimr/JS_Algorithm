let fs = require('fs')

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0]);
let b = input[1];


let b_1 = Number(b[2])
let b_10 = Number(b[1])
let b_100 = Number(b[0])

console.log(a *  b_1 )
console.log( a *  b_10)
console.log( a *  b_100)
console.log(a * Number(b))