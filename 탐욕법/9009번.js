let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

fibo = []; //피보나치 수열 초기값
fibo.push(0);
fibo.push(1);
while (fibo[fibo.length - 1] < 1000000000) {
  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
}

let testCase = Number(input[0]);
for (let tc = 1; tc <= testCase; tc++) {
  let n = Number(input[tc]);
  let result = [];
  let i = fibo.length - 1;

  while (n > 0) {
  //n이 100일 때 fibo[i]의 값은 89이고, 이후 n의 값은 11로 감소(i의 값은 9)
    //이후 n이 11일 때 fibo[i]의 값은 8이고, 이후 n의 값은 3으로 감소(i의 값은 3)
    if (n >= fibo[i]) { //가장 큰 피보나치 수의 인덱스
      n -= fibo[i];
      result.push(fibo[i]);
    }
    i--;
  }
  let answer = "";
  for (let j = result.length - 1; j >= 0; j--) {
    answer += result[j] + " ";
  }
    console.log(answer);
}
