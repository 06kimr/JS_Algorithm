let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function nearestSquare(x) {
  let i = 1;
  while ((2 ** i) <= x) i += 1;
  return i - 1;
}

let length = Number(input[0].split(" ")[0]);
let width = Number(input[0].split(" ")[1]);
let height = Number(input[0].split(" ")[2]);

let cubes = Array(20).fill(0);

let n = Number(input[1]);
for (let i = 2; i < n + 2; i++) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);
  cubes[a] = b;
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
  used *= 8; //가로, 세로, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가
  //2x2x2로 2개 썼으면 i가 하나 감소한 현재 단계에서는 이게 1x1x1 2*8 총 16개랑 같은 의미
  current = 2 ** i; //현재의 정육면체 큐브의 길이
  //채워넣어야 할 큐브의 개수 계산

  let required =
    parseInt(length / current) *
      parseInt(width / current) *
      parseInt(height / current) -
    used;

  let usage = Math.min(cubes[i], required);
  used += usage;
  res += usage;
}

if (used == length * width * height) console.log(res);
else console.log(-1);
