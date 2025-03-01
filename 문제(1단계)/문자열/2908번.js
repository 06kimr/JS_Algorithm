let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [first, second] = input[0].split(" ");
//abc를 ""를 기준으로 split => ["a", "b", "c"] => reverse => ["c", "b", "a"] => join => "cba"
let newFirst = first.split("").reverse().join("");
let newSecond = second.split("").reverse().join("");

let maxValue = Math.max(newFirst, newSecond);

console.log(maxValue);  


//단순한 방식
let a = input[0].split(" ")[0];
let b = input[0].split(" ")[1];

let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0]
