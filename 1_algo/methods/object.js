let op = {                
    name: 'tom',
    age: 28,
    marriage: false
}

console.log(op.name)



let op2 = {                
    '+' : 'is test',
    3: 'is work?',
    name: 'is name work',
    '-' : (a,b) => a -= b,
    '*' : (a,b) => a *= b,       
}

let t = 3
console.log(op2[3])
console.log(op2.name)
