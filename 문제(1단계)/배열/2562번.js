let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let maxValue = 0;
let maxValueIndex = 0;

for(let i = 0; i < 9; i++){
  let data = Number(input[i]);
  if(maxValue < data){
    maxValue = data;
    maxValueIndex = i;
  }
}

console.log(maxValue);
console.log(maxValueIndex + 1);

//reduce 사용

let data = input.map(x => Number(x))
let max = Math.max(...data)

console.log(max)
console.log(data.indexOf(max) + 1)