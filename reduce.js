/**
 * @용도 : 각각에 배열의 값마다 reducer 계산을 수행 
 * @사용 :  배열의 각각의 값을 모두 누적하여 계산 하여 결과값 반환 !  (합구하기)  
 * @반환값 : 결과값을 반환
 * @특이점 : 어떤리듀서를 쓰냐에 따라서 string도 처리 가능하니깐 활용법은 많을뜻 
 * @인자 :   누산기 (acc)  ||  현재 값 (cur) ||   현재 인덱스 (idx) || 원본 배열 (src) ||
 * @누산기 : 처음시작값
 *
 */


/////////////////////////////////////////////
let arr = [1, 2, 3, 4, 5];  //Value Box//
let stArr = ['1', '2', '3', '4', "5"];
let obj = {                     /////////////
  numValue: 123,                //
  test: "is objcet test",       //
  boolean: true,                //
};                              //
let str = "isTestString";       //
let result                      //
//////////////////////////////////






result = stArr.reduce((acc,cur,idx,src)=>{    
    console.log(src[idx])
    return acc + cur
}, 0)




///Result Box///////////////////////////////////////////
console.log(result)                                  //
//////////////////////////////////////////////////////

