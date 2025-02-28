  let fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");

//문자열을 수로 변환할 떄 parseInt에 비하여 Number의 속도가 더 빠
let n = Number(input[0]);

//한개의 변수에 저장한 뒤 한꺼번에 console.log하는 것이 더 빠름
let answer = ""

for(let i = 1; i <= n; i++){
  let data = input[i].split(" ");
  let a = Number(data[0]);
  let b = Number(data[1]);
  answer += a + b + "\n";
}

console.log(answer)