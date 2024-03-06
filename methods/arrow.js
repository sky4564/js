let arr = [1,2,3]

let ad = function ds(p) {
    return arr.slice(0,1)
}


// 리턴이 없어도 한줄만 썼을땐 리턴이 됨

let arrow = (p) => arr.slice(0,1)


console.log(ad())
console.log(arrow())

