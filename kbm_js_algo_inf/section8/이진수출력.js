let ans = ""


function div(n) {
    if (n === 0) return
    div(Math.trunc(n / 2))
    ans += n % 2
}

function sol(t) {
    div(t)
    return ans
}

console.log(sol(11))