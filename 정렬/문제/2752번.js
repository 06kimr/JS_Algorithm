let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = input[0].split(' ').map(Number)
//숫자이기 때문에 comapre함수 정의해야함
let newArr = arr.sort(function(a, b){
  return a-b;
});

let answer = ""

for(let i = 0; i < arr.length; i++){
  answer += newArr[i] + " "
}

console.log(answer)