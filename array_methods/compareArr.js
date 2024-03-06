





const testA = [1,2,3,4,5,6,7,8,9,10];
const testB = [1,2,3,4,5];
const testC = [1,2,3,10,20];

console.log(testB.every(item => testA.includes(item))); // true
console.log(testC.every(item => testA.includes(item))); // false