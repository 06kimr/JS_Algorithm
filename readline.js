const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  //콘솔 입력 창에서 줄바꿈(enter)를 입력할 때마다 호출
  input.push(line);
}).on("close", function () {
  //콘솔 입력 창에서 Ctrl + C를 입력하면 호출(입력의 종료)
  console.log(input);
  //['Hello', 'World', 'JS']
  process.exit();
});
