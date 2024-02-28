/**
 * @용도 : 배열의 값 반환
 * @사용 : 문자열도 배열로 취급되서 문자열에도 사용가능
 * @반환값 : 문자열에서는 문자열 , 배열에서는 slice 해당하는 배열을 포함한 배열
 * @특이점 : splice 와 비교하여 얕은복사로 원본배열의 변경없음
 */

let arr = [1, 2, 3]
let obj = {
  test: "is objcet test",
  boolean: true,
}
let str = 'isTestString'
let stringArr = [1,2,3,4,5]


let result = arr.slice(0,2)

console.log(result)
console.log(arr)