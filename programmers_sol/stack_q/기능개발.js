let prog = [93, 30, 55]
let spd = [1, 30, 5]

let day = prog.map((x,i)=>{
    let ans = Math.ceil((100 - x) / spd[i])    
    return ans
})
let max = 0
let cntArr = []
day.forEach((x,i)=>{
    if(x>max){
        max = x
        cntArr.push(1)
    } else {
        cntArr[cntArr.length-1]++
    }
})
console.log(cntArr)