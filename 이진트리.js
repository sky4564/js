// 전위순회 
// 루트 좌 우 
// 중위 루트가 가운데
// 후위 루트가 마지막

function preorder(nodes, idx) {
    if (idx < nodes.length) {
        let ret = `${nodes[idx]} `
        ret += preorder(nodes, idx * 2 + 1)
        ret += preorder(nodes, idx * 2 + 2)
        return ret
    } else {
        return ""
    }
}

function midorder(nodes, idx) {
    if (idx < nodes.length) {
        let ret = midorder(nodes, idx * 2 + 1)
        ret += `${nodes[idx]} `
        ret += midorder(nodes, idx * 2 + 2)
        return ret
    } else {
        return ""
    }
}

function endorder(nodes, idx) {
    if (idx < nodes.length) {
        let ret = endorder(nodes, idx * 2 + 1)
        ret += endorder(nodes, idx * 2 + 2)
        ret += `${nodes[idx]} `
        return ret
    } else {
        return ""
    }
}

let nodes = [1, 2, 3, 4, 5, 6, 7]

//전위 순회 1 - 2 - 4 - 5 - 3 - 6 - 7
//중위 순회 4 - 2 - 5 - 1 - 6 - 3 - 7
//후위 순회 4 - 5 - 2 - 6 - 7 - 3 - 1

let ans = []
ans.push(preorder(nodes, 0).slice(0, -1))
ans.push(midorder(nodes, 0).slice(0, -1))
ans.push(endorder(nodes, 0).slice(0, -1))
console.log(ans)




