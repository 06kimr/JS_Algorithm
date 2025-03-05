let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let balls = Number(input[0].split(" ")[0]) //N
let baskets = Number(input[0].split(" ")[1]) //K

let summary = 0; //1부터 K까지의 합
for(let i =1; i <= baskets; i++){
  summary += i
}

if(summary > balls) {
  console.log("-1")
}
else {
  balls -= summary;
  if(balls % baskets ==0) console.log(baskets-1); //K에 각 1개씩 더하
  else console.log(baskets)
}