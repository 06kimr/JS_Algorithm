let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
for (let i = 1; i <= testCase; i++) {
  let [times, string] = input[i].split(" ");
  let newString = "";
  for (let j = 0; j < string.length; j++) {
    //j번째에 있는 character을 times번 반복
    newString += string.charAt(j).repeat(times);
  }
  console.log(newString);
}
