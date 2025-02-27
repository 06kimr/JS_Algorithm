/*
reduce() 메소드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환
reducer의 형태 : (accumulator, currentValue) => (반환값)
- 배열의 각 원소를 하나씩 확인하여, 각 원소는 currentValue에 해당
- 반환값은 그 이후의 원소에 대하여 accumulator에 저장
*/

let data = [5, 2, 9, 8, 4];

//minValue구하기
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue);
//2


//원소의 합께 구하기
let summary = data.reduce((a, b) => a + b);
console.log(summary);
//28
