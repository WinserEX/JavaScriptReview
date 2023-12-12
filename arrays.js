let arr = [1,2,3,4,5,6]

let res = arr.map(x => x * 5)

console.log(res);

let res2 = res.filter((x) => x % 2 === 0);

console.log(res2);

let a, b, rest;

[a, b, ...rest] = res2;

console.log(a, b);