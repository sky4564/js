let arr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
let arr2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

console.log(arr.length)
console.log(arr[0].length)
let flag = arr2.length - arr2[0].length > 0 ? 'large_row' : 'large_col'
let diff = Math.abs(arr2.length - arr2[0].length)
if(flag == 'large_row') {
    for(let i =0; i < arr.length; i++){        
        for(let j = 0; j < diff; j++){
            arr[i].push(0)
        }            
    }
}else if (flag == 'large_col') {    
    for(let j = 0; j < diff; j++){
        console.log('is work')
        let tmp = Array(arr2.length).fill(0)
        arr2.push(tmp)
    }            
}


console.log(arr)
console.log(arr2)