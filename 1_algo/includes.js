/**
 * @용도 : 배열이나 문자열에 특정 value 가 있는지 확인
 * @사용 :   
 * @인자 : (serchItem, serchIndex) serchIndex 이상부터 찾는다. 없을시 0 값으로 배열 전체를 찾는다.
 * @반환값 : boolean
 * @특이점 :
 */


/////////////////////////////////////////////
let arr = [1, 2, 3, 4, 5];  //Value Box//
let obj = {                     /////////////
  numValue: 123,                //
  test: "is objcet test",       //
  boolean: true,                //
};                              //
let str = "isTestString";       //
let result                      //
//////////////////////////////////

result = arr.includes(2, 0)

///Result Box///////////////////////////////////////////
console.log(result)                                  //
//////////////////////////////////////////////////////