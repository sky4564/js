let process = [2, 1, 3, 2]
let location = 2

let hash = new Map()
process.forEach((x,i)=>{
    hash.set(i + 'index' , x)
})

// seperate opeation 으로 map 풀어주고 sort
let o = [...hash.entries()]
o.sort((a,b) => b[1] - a[1])

let t = new Map(o)



console.log(o)
console.log(t)
console.log(t.get(location+'index'))
    