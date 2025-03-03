let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split("\n")

let n = Number(input[0])
let arr = []
for(let i =0; i< n; i++){
  arr.push(input[i+1])
}

//중복된 원소를 제거하기 위해 집합으로 변환
arr = [...new Set(arr)]

function compare(a, b) {
  if(a.length != b.length) return a.length - b.length
  else{
    if(a < b) return -1;
    else if(a>b) return 1;
    else return 0;
  }
}
arr.sort(compare)

let answer = ""
for(let i = 0; i < arr.length; i++){
  answer += arr[i] + "\n"
}

console.log(answer)