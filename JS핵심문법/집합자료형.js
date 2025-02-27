let mySet = new Set();

mySet.add(1); // Set(1) { 1 }
mySet.add(5); // Set(2) { 1, 5 }
mySet.add(7); // Set(3) { 1, 5, 7 }
mySet.add(9); // Set(4) { 1, 5, 7, 9 }

mySet.delete(9); // Set(3) {1, 5, 7}
for (let item of mySet) console.log(item); // 1, 5, 7
