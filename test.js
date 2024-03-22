    function solution(n) {
        let arr = new Array(n)
        let twoDm = new Array(n).fill(arr)    
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {                        
                if(i == j){
                    twoDm.splice(i,j,1)
                }
            }
        }
        
        return twoDm
    }


    console.log(solution(3))