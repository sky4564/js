function solution(val) {
    console.log(val)
    let ans = []
    let pick = [[],[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    
    for(let i = 1 ; i < 4; i ++) {
        let cnt = 0
        for(let j = 0; j < val.length; j++) {
            let flag = j%pick[i].length            
            if(pick[i][flag] == val[j]) cnt++
        }        
        ans.push(cnt)
    }
    
    let max = Math.max(...ans)    
    return ans.map((x,i)=>{
        if(x == max) return i+1        
    }).filter(x=> x!=null)
}