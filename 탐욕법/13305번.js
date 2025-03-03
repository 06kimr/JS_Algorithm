let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let dist = input[1].split(' ').map(Number)
let price = input[2].split(' ').map(Number)

//주유 비용( cost) 배열의 값을 비오름차순이 되도록 변환
//[5, 2, 4, 1] => [5, 2, 2, 1]
let minCost = price[0];
for(let i = 0; i < n; i++){
  minCost = Math.min(minCost, price[i])
  price[i] = minCost
}

//도로당 이동 비용의 합 계
let answer = 0;
for(let i = 0; i < n-1; i++){
  answer += dist[i] * price[i]
}

console.log(answer)
