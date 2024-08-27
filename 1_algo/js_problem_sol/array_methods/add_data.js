/**
 * @제목 배열에 데이터 추가 하는 배열기법
 * @순서 push,unshift,splice, concat,spreadOperator,
 
 */

// 원본 배열 변경 //
let arr = [1,2,3,4,5,6,7,8,9,10];
//뒤쪽 (오른쪽으로) 들어오기 ~ 주먹 맞는거 뚜시뚜시 !! 푸시푸시 !
arr.push('push text')
console.log(arr)

//unshift() 메서드로 데이터 추가
// shift() 메서드의 반대 배열의 맨 앞에 데이터 추가
let unshift = [3,4,5]
unshift.unshift(1,2)
console.log(unshift)

//splice() 메서드로 데이터 추가
//(시작지점, 삭제갯수, 삭제하고 추가할 el)
// 배열중간에 데이터를 추가용
let splice = [2,4,6]
splice.splice(1,0,'is splice el')
let tarr = [7,7,7]
splice.splice(1,0,...tarr)
console.log(splice)

let concat = ['is', 'concat', 'test']
concat = concat.concat(['add', 'concat', 'el', 33])
console.log(concat)

let spread = ['is', 'spread']
spread = [...spread, ...['and', 'added', 'data']]
console.log(spread)