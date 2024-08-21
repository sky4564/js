function solution(n) {
    const dy = Array(n + 1).fill(0)
    console.log(dy)
    dy[0] = 1
    dy[1] = 2
    for (let i = 2; i < n + 1; i++) {
        dy[i] = dy[i-2] + dy[i-1]
    }
    
    return dy[dy.length-1]
}


// 돌다리 돌의 수
let n = 7;
console.log(`정답은 ?  =>> ${solution(n)}`)
