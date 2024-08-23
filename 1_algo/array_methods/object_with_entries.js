function solution() {

    const testObj = {};
    let obj = {};

    for(let i = 0; i <= 4; i++){
        testObj[`objcet ${i}`] = `test object  is index  = ${i}`
    }


    // 문제풀떄 key value 이렇게 값저장하는게 익숙하지 않아서 못했는데
    // 이렇게 쓰면됨 이렇게 인덱스로 값을저장해주면 
    for(let j = 0; j <= 4; j++){
        obj[j] = `el = ${j}`
    }

    console.log(testObj)
    console.log(obj)

    /**------------------------------------------------------------------------ */
    // a , b  a-b = > 오름차순
    // a , b  b-a = > 내림차순
    /**     
     * 설명
     * entries 둘면서 특정 값만 반환 보통 key value 페어 에서 value 를 반환
     * 특정 key 값을 반환하는것도 if 문 써서 활용
     * ! entries 사용시 문자열로 변환 되기에 반환시 형변환 필요
    */
    let transForm = Object.entries(obj).sort((a,b) => b[0] - a[0])
    console.log(transForm)

    let t = transForm.map((el) => {
        return el[0]
    })

    /**------------------------------------------------------------------------ */
 

    const object1 = {
        a: 'somestring',
        b: 42,
    };
    let tmp = []

    for (const [key, value] of Object.entries(object1)) {        
        if(key == 'a') tmp.push(value)
    }
    console.log(tmp)
}

solution()