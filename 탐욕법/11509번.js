let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let heights = input[1].split(' ').map(Number) // 풍선의 높이 정보

let count = 0;

let arrow = new Array(1000001).fill(0); // 각 높이에 화살이 몇개 있는지
for(let x of heights){
  if(arrow[x] > 0) { //해당 높이에 화살이 존재하면
    arrow[x] -= 1;
    arrow[x-1] += 1;
  } else { //해당 높이에 화살이 존재하지 않으면
    count +=1;
    arrow[x-1] += 1;
  }
}

console.log(count)