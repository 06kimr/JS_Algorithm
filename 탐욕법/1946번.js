let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let testCase = Number(input[0]);
let line = 1;
for (let i = 0; i < testCase; i++) {
  n = Number(input[line]);
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(" ").map(Number);
    arr.push(data);
  }

  arr.sort((a, b) => a[0] - b[0]); //x순위를 기준으로 오름차순 정렬

  let count = 0;
  let min = 100001;
  for (let [x, y] of arr) {
    if (min > y) { //y순위 값이 기본값보다 작다면 카운트
      min = y;
      count++;
    }
  }
  console.log(count);
  line += n + 1;
}
