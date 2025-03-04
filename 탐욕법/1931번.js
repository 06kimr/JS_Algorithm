let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  let data = input[i].split(" ").map(Number);
  arr.push(data);
}

// (1) 종료 시점 (2) 시작 시점을 우선순위로 오름차순 정렬
arr.sort(function (a, b) {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let cnt = 1;
let current = 0; //첫번째 회의 부터 확인
for (let i = 1; i < n; i++) {
  if (arr[current][1] <= arr[i][0]) { //현재 회의의 끝나는 시간이 다음 회의 시작시간보다 작거나 같을 
    current = i;
    cnt++;
  }
}

console.log(cnt);
