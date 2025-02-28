let fs = require( "fs" )
let input = fs.readFileSync( "/dev/stdin" ).toString().split( "\n" )

let a = Number(input[0])
let summary = 0

for( let i = 1; i <= a; i++ ){
  summary += i
}

console.log(summary)


//등차수열 이용
let n = Number(input[0])

console.log(n * (n + 1) / 2)