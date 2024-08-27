

string = '1234567'

// string  =>>> arr  solution

// 1.
let arr = [...string]
console.log('look this arr\n',arr)


// 2. Array.from
let arr_from = Array.from(string)
console.log('look this arr\n',arr_from)


// 3. split
let arr_split = string.split('')
console.log('look this arr_split\n',arr_split)

// 이렇게 바꾸면 배열에서만 쓸수있는 함수를 string에서도 쓸수있어서 좋음



