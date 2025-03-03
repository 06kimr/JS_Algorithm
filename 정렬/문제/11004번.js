let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n,k] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number)

let newArr = arr.sort((a,b) => a-b);
console.log(newArr[k-1])
