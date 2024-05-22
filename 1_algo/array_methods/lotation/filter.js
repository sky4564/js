/**
 * @용도 : 순회메서드
 * @사용 : 배열을 순회하며 특정 조건을 검사
 * @반환값 : filter 에서 해당 조건에 참인 value만 포함하여 새로운 배열 리턴
 * @특이점 :
 */


/////////////////////////////////////////////
let arr = [1, 2, 3, "1", "2"];  //Value Box//
let obj = {                     /////////////
  numValue: 123,                //
  test: "is objcet test",       //
  boolean: true,                //
};                              //
let str = "isTestString";       //
let result                      //
//////////////////////////////////




result = arr.filter(( x , i ) => typeof(x) == 'number')


///Result Box///////////////////////////////////////////
console.log(result)                                  //
//////////////////////////////////////////////////////



