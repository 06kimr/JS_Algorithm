let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let min = Number(input[0].split(" ")[0]);
let max  = Number(input[0].split(" ")[1]);

let cnt = 1;
let flag = false;

while (max >= min) {
  if (max == min) {
    flag = true;
    break;
  }
  if (max % 2 == 0) {
    //2로 나눠 떨어지는 경우
    max = parseInt(max / 2);
  } else if (max % 10 == 1) {
    //가장 뒤에 있는 1을 빼기 위해 1을 빼고 나누기 10
    max = (max-1) / 10
  } 
  else break;
  cnt++;
}

if (flag) {
  console.log(cnt);
} else {
  console.log(-1);
}
