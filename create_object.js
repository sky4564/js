import { cm } from './module/consoleModule.js';


cm.setShowGeneralLogs(false)
const fruits = {
    apple: { price: 1000, stock: 50 },
    banana: { price: 800, stock: 70 },
    orange: { price: 1200, stock: 30 },
    grape: { price: 1500, stock: 20 }
};
// 객체를 정렬할때 엔트리를 사용하여 배열로 만들고
// 이후 정렬 
// 정렬하고자하는 값 까지 찾아가기
const sortedByPrice = Object.entries(fruits).sort((a, b) => b[1].price - a[1].price);
const sortedByStock = Object.entries(fruits).sort((a, b) => b[1].stock - a[1].stock)


cm.l("가격순 정렬:");
cm.l(sortedByPrice);

cm.l("재고순 정렬:");
cm.l(sortedByStock);

// 객체안에 해당 키값 있는지 bool 반환
cm.l(('lemon' in fruits))
cm.l(('banana' in fruits))

cm.setShowGeneralLogs(true)
//객체안의 키값들을 모아서 배열로 반환
cm.l(Object.keys(fruits))
let b = Object.keys(fruits)
cm.l(b.sort((a, b) => { return a - b }))


let arr = [5, 4, 3, 2, 1]

arr.sort((a, b) => a - b)
cm.l(arr)