const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((previous, current) => previous + current, 0);

console.log(sum);

const numbers2 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];

const multi = numbers2.reduce((previous, current) => previous * current.a, 1);
console.log(multi);
