function sol(n) {
    let ans = []
    let ch = Array.from({ length: n + 1 }, () => 0)

    function DFS(v) {
        if (v === n + 1) {
            let tmp = ""
            for (i = 1; i < v; i++) {
                if (ch[i]) tmp += `${i} `
            }
            if (tmp !== "") ans.push(tmp.slice(0, -1))
        } else {
            ch[v] = 1
            DFS(v + 1)
            ch[v] = 0
            DFS(v + 1)
        }
    }
    DFS(1)
    return ans
}

console.log(sol(3))