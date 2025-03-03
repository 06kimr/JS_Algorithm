let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = input[0]
//0부터 9까지 각 숫자(digit)의 출현 빈도를 담을 배열 선언
let cnt = Array(10).fill(0) //초기값은 0으로 초기화

for(digit of n){
  cnt[Number(digit)]++
}

let answer = ""
//9부터 0까지 하나씩 숫자(digit)을 확인
for(let i=9; i>= 0; i--) {
  //해당 digit에서 출현빈도가 몇번인지 확인
  for(let j = 0; j< cnt[i]; j++){
    answer += i
  }
}

console.log(answer)