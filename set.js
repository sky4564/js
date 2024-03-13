/**
 * @용도 : 
 * @사용 : 
 * @반환값 : 
 * @특이점 :
 */

const dupArr = [1, 2, 3, 1, 2];

const set = new Set(dupArr);

const uniqueArr = [...set];

console.log(set)
console.log(uniqueArr)

