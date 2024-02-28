/**
 * @용도 : 배열의 값 반환
 * @사용 : 배열이 반환 되어야 해서 배열에서만 사용가능
 * @반환값 : 원본배열에서 제거된 배열의 값
 * @특이점 : 원본배열의 변경이 있다.
 */

let arr = [1, 2, 3]
let obj = {
  test: "is objcet test",
  boolean: true,
}
let str = 'isTestString'
let stringArr = [1,2,3,4,5]


let result = arr.splice(0,2, '교체품')

console.log(result)
console.log(arr)