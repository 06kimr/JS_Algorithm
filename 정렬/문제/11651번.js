let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 0; i < n; i++) {
  let [x, y] = input[i + 1].split(" ").map(Number);
  arr.push([x, y]);
}

function compare(a, b) {
  if (a[1] != b[1])
    return a[1] - b[1]; //y값이 서로 같지 않으면 오름차순 정렬
  else return a[0] - b[0]; //x좌표가 같으면 y좌표 기준 오름차순
}

arr.sort(compare);

let answer = "";
for (let point of arr) {
  answer += point[0] + " " + point[1] + "\n";
}

console.log(answer);
