let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0].split(" ")[0])
let total = Number(input[0].split(" ")[1])

let arr = [];
for(let i = 1; i<=n; i++) {
  arr.push(Number(input[i]))
}

let cnt = 0;
for(let i = n-1; i>=0; i--) {
  cnt += parseInt(total / arr[i]) //해당 동전을 몇개 사용해야 하는지
  total %= arr[i] //해당 동전으로 모두 거슬러 준 뒤 남은 금액
}

console.log(cnt)