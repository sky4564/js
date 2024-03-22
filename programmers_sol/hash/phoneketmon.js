let p = [1,2,3,4,5,6,7,8,1,1,1,1,1,1]

function solution(nums) {
    let li = nums.length/2    
    let setter = new Set(nums)
    let type = [...setter]
    
    return type.length > li ? li : type.length
}


console.log(solution(p))