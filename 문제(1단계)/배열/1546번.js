let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let subjectNum = Number(input[0]);
let subjects = input[1].split(" ").map(Number);
let maxValue = subjects.reduce((a, b) => Math.max(a, b));

let newSubjects = []

let newAvg = 0;

for(let i = 0; i < subjectNum; i++){
  newSubjects.push( subjects[i] / maxValue * 100)

}
newAvg += newSubjects.reduce((a, b) => a + b) / subjectNum;

console.log(newAvg)