let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function isPalindrome(x) {
  return x == x.split("").reverse().join("");
}

let testCases = Number(input[0]);
for (let l = 1; l <= testCases; l++) {
  let data = input[l];
  if (isPalindrome(data)) console.log("0"); //회문인 경우
  else { // 회문이 아닌 경우, 유사 회문인지 체크
    let found = false;
    let n = data.length;
    //parseInt은 정수부분만 반환(3.5 => 3)
    for (let i = 0; i < parseInt(n / 2); i++) {
      if (data[i] != data[n - i - 1]) { //대칭이 아닌 인덱스를 찾으면
        if (isPalindrome(data.slice(0, i) + data.slice(i + 1, n))) //앞에 있는 비대칭 글자를 제외하고 회문인지 확인
         found = true
        if (isPalindrome(data.slice(0, n - i - 1) + data.slice(n - i, n))) //뒤에 있는 비대칭 글자를 제외하고 회문인지 확인
          found = true
        break;
      }
    }
      if(found) console.log("1")
    else console.log("2")
  }
}
