

// 맨 앞 데이터 삭제
// 앞쪽(왼쪽)에서 나가기 ~ 왼속주먹 쉬프트 쉬프트 !
let shiftArr = ['wantDelete',2,3,4,5]
let shiftel = shiftArr.shift();
console.log(shiftel, shiftArr)

// 맨 뒤 데이터 삭제
// 뒤쪽(오른쪽)에서 나가기 ~ 오른족주먹 팝 ! 팝 ! 
let popArr = [1,2,3,4, 'popel']
let popel = popArr.pop();
console.log(popel, popArr)


// 중간데이터 삽입 삭제는 splice
const spliceArr = [1,2,3,4,5]
// 시작지점 , 삭제할 갯수
const removeEl = spliceArr.splice(0,1)

console.log(removeEl)