let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let data = input[i].split(" ").map(Number);
  let count = data[0];
  let totalSum = 0;
  for (let j = 1; j <= count; j++) {
    totalSum += data[j];
  }
  let avg = totalSum / count;
  let aboveAvg = 0;
  for (let j = 1; j <= count; j++) {
    if (data[j] > avg) {
      aboveAvg += 1;
    }
  }
  console.log(`${parseFloat((aboveAvg / count) * 100).toFixed(3)}%`);
}
