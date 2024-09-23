let obj = { name: 'tester', type: 'man', age: 23 }
let arr = [1, 2, 3, 4, 5, 6, 7]
let sarr = ['a', 'b', 'c', 'd', 'e']

// let sortArr = arr.sort((a, b) => b - a)




// // 리턴값을 넣어도 종료되지 않는다.
// sarr.forEach((x, i, tg) => {
//     console.log(x, i, tg)
//     if (i == 2) return console.log(' is done')
//     if (i == 3) console.log(`but still going...`)
// })

// // 리턴값을 넣으면 종료된다.
// 인덱스만 필요한 상황이라면 for of 에서 엔트리 사용해서 인덱스 사용
// for (const [i, x] of sarr.entries()) {
//     console.log(i, x)
//     if (i == 2) return console.log(' is done')
//     if (i == 3) console.log(`is not appear`)
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     if (i == 2) return console.log(' is done')
//     if (i == 3) console.log(`is not appear`)
// }


// for of = > 배열용
// for (const x of arr) {
//     console.log(x)
// }

// for in = 객체용 
// for (const [i, x] of sarr.entries()) {
//     console.log(i, x)
// }



// // 이걸 고차함수  ? 라고 하던가 
// // 암튼 
// // 리턴으로 새로운 배열 생성
// let t = sarr.map((x, i, tg) => {
//     if (i % 2 == 0) return x += 'is 2x'
//     else return x

// })
// console.log(t)



// //이건 배열을 리턴하는게 아닌 계산된 값을 리턴한다.
// // 계산된 값이 필요할때 쓰기
// let x = sarr.reduce((acc, x, i) => {
//     return acc + i
// })


// // 조건에 맞는 x 를 반환
// // map 배열을 순회하면서 x를 입맛에 맞게 변환시켜서 반환 
// let x = arr.filter((x, i, tg) => {
//     return x *= 2
// })



/// 나만의 언어로 작성
/// 고차함수 summary
// 고차함수 filter , map , reduce 이렇게 3개 소개 해줬는데
// filter : 원본 배열의 값에서 특정조건을 만족하는 x 가 필요할때  새로운 배열로 받아볼수 있음  (변환 필요 없을경우)
// map : 원본 배열의 값에서 변환된 x 필요할떄 (변환 필요한 경우)
// reduce : 이건 배열값으로 받아보는게 아님 그냥 누적산 이런 합계나 어떤 결과값을 축척할때 필요




console.log(arr)