// 거기서 더해진값을 ans 배열에 담아잇

// 담겨있는 ans 배열을 set , sort 해서 중복제거 하고 정렬해서 리턴해줘

function solution(nbs) {
    var ans = [];    
    for(let i = 0; i < nbs.length; i++){
        for(let j =0; j < nbs.length; j++){
            if(i!=j){
                let t = nbs[i] + nbs[j]
                ans.push(t)   
            }            
        }        
    }
    let re = [...new Set(ans)].sort((a,b) => a-b)
    return re;
}