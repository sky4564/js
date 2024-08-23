// 고차함수 연상대상을 직접 바꾸지 않음


// 각 배열의 요소에 계산수행이후 리턴
const nums = [1, 2, 3, 4, 5]
const squares = nums.map(num => num * num)
console.log(squares)


// 해당조건에 해당하는 값만 남긴 배열 리턴

const fnums = [1,2,3,4,5]
const evens = fnums.filter(num => num%2 === 0)
console.log(evens)


//배열의 전체 데이터를 하나로 합칠떄
const r_nums = [1,2,3,4,5]
const sum = r_nums.reduce((a,b)=> a+b)
console.log(sum)




