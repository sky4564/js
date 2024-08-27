/**
 * @용도 : 
 * @사용 :  string , array , object 상관없이 iterable 하다면 순회
 * @반환값 :  반환값없다. 각 요소마다 함수수행가능
 * @특이점 : 반복문의 일종   // return 이 먹힌다.
 */


/////////////////////////////////////////////
const array1 = ['a', 'b', 'c'];
const str = 'abcdefg';

for (const el of str) {
    if(el == 'e'){
        return 0
    }
    console.log(el);
}

