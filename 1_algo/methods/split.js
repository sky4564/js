let str = '123456'
let nArr = 123456


/**
 * @기능 : 하나의문자열을 분리제 기준으로 분리하여 배열로 반환
 * @params : ("분리제") 분리제가 없으면 () 문자 하나하나를 배열로 반환
 * @주요사용 : 분리제를 ("") <= 이걸쓰면 문자열의 문자를 배열로 반환
 *
 */


let a =str.split("")
let b =''+nArr

console.log(a);
console.log(b.split(""))

