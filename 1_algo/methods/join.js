let arr = [1, 2, 3];
let obj = {
  test: "is objcet test",
  boolean: true,
};
let stringArr = ["배열에", "담긴", "요소를", 1, "이렇게 ~", true, false,arr,obj];

/**
 * @기능 : 배열에담긴 요소들을 하나의 문자열로 반환
 * @params : ("접착제") 접착제가 없으면 () 기존에 있던 ,를 사용하여 접착
 * @주요사용 : 접착제를 ("") <= 이걸쓰면 연속하는 문자열을 반환
 *
 */
let a = stringArr.join("");
console.log(a);
