let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

//집합은 중복되지 않은 데이터를 담는데 적합
let set = new Set();
let data = input.map(x => Number(x));
let newData = data.map(x => Number(x % 42))
for(let i = 0; i < 10; i++){
  set.add(newData[i]);
}

console.log(set.size);
