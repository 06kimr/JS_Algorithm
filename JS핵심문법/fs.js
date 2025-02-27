let fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\n");

//시스템에서 읽어오는 방법
let inputConsole = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log("input : ", inputConsole);

//input.txt
//5
//1 2 3 4 5

console.log(input);
//['5', '1 2 3 4 5']
