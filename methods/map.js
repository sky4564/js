/**
 * @용도 :
 * @사용 :
 * @반환값 : return 으로 각 인덱스에 반환 새로운배열 생성
 * @특이점 :
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


let result = arr.map((x,i) => {
    if( 0<=i && i <= 2) return x += 1
    else return x
});



//////////////////////////////////////////////////////


console.log(result);
console.log(arr);
