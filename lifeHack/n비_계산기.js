// n비 계산에 참여하는 인원   = n 명으로
// 술은 안먹는 깎두기   = k

let bill = [91000]
let alcPrice = 9000 + 18000 + 7900
let n = 5 // 뽀 쏭 민 정 혜
let k = 1 // 뽀
//==============================================//

let sum = bill.reduce((acc,cur)=> acc + cur)


let pay = (sum-alcPrice) / n
let alcFee = Math.floor(alcPrice / (n - k))





console.log('인당 내야 할 금액입니다.' ,  pay ,'원')
console.log('술쟁이들이 추가로 내야 할 금액입니다.' ,  alcFee ,'원')
console.log('술쟁이들' ,  pay +alcFee ,'원')
console.log('보라   ' ,  pay ,'원')