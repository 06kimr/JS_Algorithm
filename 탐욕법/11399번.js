let fs =require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

arr.sort((a,b) => a-b)
let sum=0
let total = 0;
for(let i =0; i<arr.length; i++) {
  sum += arr[i]
  total += sum;
}

console.log(total)