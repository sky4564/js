let arr = [1, 2, 3, 4, 5, 6]


// 배열 시간복잡도 고려요소
// shift() 같은 함수처럼 배열의 맨앞의 인덱스를 빼는경우
// 모든 원소들이 한칸씩 앞으로 이동해야 해서 shift 연산 한번에 모든배열을 순회해야한다.
// shift 같은 함수를 반복문에 쓴다면 바로 On2 달성.. ! 


// 배열의 요소 추가제거 
// 뒤에서 부터 넣기 (자연스러움) 차곡 차곡 쌓이는 FILO 선입후출 구조 push, pop 
// 시각적으로 비유하자면 원기둥의 형태



// 선입선출 차곡차곡 쌓이지만 앞에서 부터 나감 FIFO 선입선출
// push 로 넣고 shift 로 앞에서 부터 나가게끔 
// 시각적으로 비유하자면 통로의 형태 

console.log(arr)
//shift . push 를 이용한 배열 로테이션 
arr.push(arr.shift())
console.log(arr)

arr.unshift('test')
console.log(arr)


