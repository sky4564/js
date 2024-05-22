

// stack que 문제풀이
// for문 + splice 로 순회하니깐 인덱스 변화도 있고 타임아웃도 나옴
// filter.. 각 배열의 요소에 대해서 한번만 돌고 원본배열의 변화도 없어서 
// 정확성 속도 둘다 챙길 수 있음


let list = [1, 1, 1, 2, 2, 3, 1, 1]
let ans = list.filter((x,i) => x != list[i+1])

console.log(ans)