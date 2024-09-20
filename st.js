// 간단한 해시 함수: 문자열 길이를 5로 나눈 나머지를 반환
function simpleHash(str) {
    return str.length % 5;
}

// 해시 테이블 (길이가 5인 배열, 각 요소는 배열)
let hashTable = new Array(5).fill(null).map(() => []);

// 데이터 저장 함수
function store(data) {
    let index = simpleHash(data);
    hashTable[index].push(data);
    console.log(`'${data}'를 인덱스 ${index}에 저장했습니다.`);
}

// 데이터 검색 함수
function retrieve(data) {
    let index = simpleHash(data);
    let bucket = hashTable[index];
    let found = bucket.includes(data);
    console.log(`'${data}'를 인덱스 ${index}에서 ${found ? '찾았습니다.' : '찾지 못했습니다.'}`);
    return found;
}

// 예제 사용
store("고양이");  // 3글자
store("강아지");  // 3글자
store("토끼");    // 2글자
store("햄스터");  // 3글자
store("앵무새");  // 3글자

retrieve("고양이");
retrieve("토끼");
retrieve("앵무새");
retrieve("사자");  // 저장하지 않은 데이터

console.log("최종 해시 테이블:", hashTable);