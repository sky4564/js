/**
 * @용도 : arr에서 사용 string 은 안됌
 * @사용 : 리턴없이 인덱스 와 밸류에 대해 함수 실행
 * @반환값 : return 값 이 없음
 * @특이점 : returㅜ 으로 순회가 종료되지않는다
 */


/////////////////////////////////////////////
let arr = [1, 1, 1, "1", "1"];  //Value Box//
let obj = {                     /////////////
  numValue: 123,                //
  test: "is objcet test",       //
  boolean: true,                //
};                              //
let str = "isTestString";       //
//////////////////////////////////


////////////////////////////////////////// Result Box///


// let result = arr.map((x,i) => {
//     return x = `test i index is ==${i}`
// });


let result2 = arr.forEach((x,i) => {
    console.log('forEach function')
});





//////////////////////////////////////////////////////


console.log(result2);
console.log(arr);
