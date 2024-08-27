let bd = [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]]
let k = 2 



console.log(bd)
let sum = 0
for(let i = 0; i<bd.length; i++){
    for(let j =0; j<bd[i].length; j++){        
        if(i + j <= k) sum += bd[i][j]
    }
}
console.log(sum)
