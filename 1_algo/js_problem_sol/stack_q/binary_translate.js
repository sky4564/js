//문제정의
// 10 진수를 2진수로 
// 2 가 채워지면 다음 수로 가니깐 .. 
// 2의 몫과 나머지로 하면 될꺼같은데


let num = 10

function translate(n) {
    // 1010 => 10 
    // 10을 => 1010 으로

    console.log(n / 2)
    console.log(n % 2)
    let stack = []
    while (n > 0) {
        let remainder = n % 2
        stack.push(remainder)
        n = Math.floor(n / 2)
    }
    console.log(stack)

    let binary = ''
    while (stack.length > 0) {
        binary += stack.pop()
    }
    return binary
}
console.log(translate(num))

