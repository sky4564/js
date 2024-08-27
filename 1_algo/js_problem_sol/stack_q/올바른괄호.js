// lets use stack queue

let str = '()()(())'
let str2 = '())()'


let flag = 0
let ans = true
let arr = [...str]

arr.forEach(x=>{
    x == '(' ? cnt++ : cnt--
    if(flag = -1) ans = false
})
