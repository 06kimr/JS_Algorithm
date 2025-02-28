let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [hour, minute] = input[0].split(" ").map(Number);

let addMinute = Number(input[1]);

let totalMinutes = (hour * 60 + minute + addMinute) % 1440;

let newHour = parseInt(totalMinutes / 60);
let newMinute = totalMinutes % 60;

console.log(newHour + " " + newMinute);
