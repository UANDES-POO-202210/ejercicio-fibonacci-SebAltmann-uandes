const num = parseInt(prompt('Enter a number: '));
let n1 = 0, n2 = 1, nextFib;

for (let i = 1; i <= num; i++) {
    nextFib = n1 + n2;
    n1 = n2;
    n2 = nextFib;
}
console.log("F(${num}) = ${n1}");