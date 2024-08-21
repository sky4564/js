function solution(n) {    
    const dy = Array(n).fill(0);    
    dy[0] = 1
    dy[1] = 2        
    for (let i = 2; i < n; i++) {        
        dy[i] = dy[i - 2] + dy[i - 1]
    }
    
    let ans = dy[n-1]
    return ans
}


// 계단의 수
let n = 30;
console.log(`정답은 ?  =>> ${solution(n)}`)
