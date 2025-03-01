let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

//trim() 메소드는 문자열 양 끝의 공백을 제거
let words = input[0].trim().split(" ")

//"==="은 자료형과 값이 같은지 비교
//"=="은 값만 비교하고 자료형은 변환해서 비교
//words의 type을 모르기 때문에 toString()을 이용해서 string type으로 변환해야 함
if(words.toString() === ""){
  console.log(0)
} else {
console.log(words.length)
  
}

