let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = [];
for(let i= 0; i< n; i++) {
  [age, names] = input[i+1].split(' ')
  arr.push([age, names])
}

function compare(a, b){
  if(a[0] != b[0]) return a[0] - b[0]
  else return a[1]-b[1]
}

arr.sort(compare)
let answer = ""
for(let i = 0; i < arr.length; i++){
  answer += arr[i][0] + " " + arr[i][1] + "\n"
}

console.log(answer)