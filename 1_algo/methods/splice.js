/**
 * @용도 : 배열의 값 반환
 * @사용 : 배열이 반환 되어야 해서 배열에서만 사용가능
 * @반환값 : 원본배열에서 제거된 배열의 값
 * @특이점 : 원본배열의 변경이 있다.
 * @인덱스기준 : 시작지점이 0 이면 slice 랑 똑같이 움직이는데 아닐경우 // 시작인덱스 부터 ~ 종료 인덱스 까지다포함 
 * @정리 : (0,x) and (x, end) == slice 랑 같은값 도출 // 중간에서 시작하면 시작인덱스 포함은 똑같은데 마지막 인덱스가 다름
 * 
 * */

let arr = [0, 1, 2, 3, 4, 5, 6]
let obj = {
  test: "is objcet test",
  boolean: true,
}
let str = 'isTestString'
let stringArr = [1,2,3,4,5]


let resultT = arr.slice(2,arr.length-1)

let result = arr.splice(2,arr.length-1)



console.log(resultT)
console.log(result)
