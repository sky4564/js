// sort 와 set 이용 배열 정렬 및 중복제거 ...
// 시간복잡도 우수하다.call(this, args)

function arrTest() {
    let arr = [2,2,2,2,2,2,2, 3, 56, 4, 6, 7]
    console.log(arr)

    //중복제거
    let b = [...new Set(arr)]
    
    //오름차순
    console.log(b.sort((a,b)=> a-b))
    
    //내림차순
    b.sort((a,b)=>b-a)
    console.log(b)
}



arrTest()