/**
 * @용도 : 문자열에 포함되어있있는 모든 알파뱃을 대문자 or 소문자
 * @사용 : is vim test
 * @반환값 : 원본문자열은 그대로 유지되고 새로운 문자열이 리턴된다.
 * @특이점 :
 */


let arr = [1, 2, 3, 4, 5];
let str = "isTestString";
let ans = ''

for (let i = 0; i < 5; i++) {
    console.log(str[i])
    ans += str[i].toUpperCase()
}
str.toUpperCase()
///Result Box///////////////////////////////////////////
console.log(str)
console.log(ans)
////////////////////////////////////////////////////////

i