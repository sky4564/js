/**
 * @용도 : 배열의 값 반환
 * @사용 : 문자열도 배열로 취급되서 문자열에도 사용가능
 * @반환값 : 문자열에서는 문자열 , 배열에서는 slice 해당하는 배열을 포함한 배열
 * @특이점 : splice 와 비교하여 얕은복사로 원본배열의 변경없음
 * @인덱스기준 :  x부터 y인덱스 전 까지  (부터 전까지)
 */

let arr = ["a", 'b', 'c', 'd']
let obj = {
  test: "is objcet test",
  boolean: true,
}
let str = 'isTestString'
let stringArr = [1,2,3,4,5]


let start = arr.slice(0,2)
let end = arr.slice(2,arr.length)

console.log(start)
console.log(end)
console.log('arr',arr)