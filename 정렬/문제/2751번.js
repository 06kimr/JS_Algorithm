//N의 최대 크기가 1,000,000이기 때문에 시간복잡도 O(N^2)은 사용 불가 => O(NlogN) 사
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = []
for(let i =0; i< n; i++){
  arr.push(Number(input[i+1]))
}

let newArr = arr.sort((a,b) => a-b);
let answer = ""
for(let i = 0; i < newArr.length; i++){
  answer += newArr[i] + "\n"
}

console.log(answer)