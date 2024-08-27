// 2차원배열 초기화 내맘대로 하면 안되는 .. 

// function solution(n) {
//     let arr = new Array(n)
//     let twoDm = new Array(n).fill(arr)    
    
    
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n; j++) {                        
//             if(i == j){
//                 twoDm.splice(i,j,1)
//             }
//         }
//     }
    
//     return twoDm
// }


// console.log(solution(3))





function solution(n) {
    let arr = new Array(n)
    for(let i=0; i<n; i++){
        arr[i] = new Array(n)
    }


    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {                        
            
        }
    }
    
    return arr
}


console.log(solution(3))