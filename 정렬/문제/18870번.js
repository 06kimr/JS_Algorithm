let fs= require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)
let sortedArr = [...new Set(arr)].sort((a,b) => a-b)

//sortedArr의 값이[-10, -9, 2, 4]이면
//map을 이용해서 -10의 index가 0, -9의 index가 1, 2의 index가 2, 4의 index가 3으로 정렬된다.
//그러면 -10보다 작은 값이 없기 때문에 0, -9보다 작은 값이 1개 있기 때문에 1, 2보다 작은 값이 2개 있기 때문에 2, 4의 값보다 작은 값이 3개 있기 때문에 3이 출력되게 됨
let map = new Map();
sortedArr.forEach((num, index) => {
  map.set(num, index)
})

let answer = ""
for(x of arr){
  answer += map.get(x) + " "
}

console.log(answer)