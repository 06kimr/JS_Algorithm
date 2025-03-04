
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
//뺄셈 연산자를 기준으로 나누어 여러 그룹 생성
let groups = input[0].split("-")
let answer = 0;
for(let i =0; i< groups.length; i++){
  let current = groups[i].split("+").map(Number).reduce((a,b) => a+b);

  if(i==0) { //첫번째 그룹은 항상 덧셈
    answer += current;
  } else{ //두번째 그룹부터 뺄
    answer -= current;
  }
}

console.log(answer)