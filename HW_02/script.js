//1-4
let n = +(prompt("Please enter first number N:"));
while (!Number.isInteger(n) || n <= 0) {
    n = +(prompt("Please enter first number N again:"));
}
document.writeln(`<p>1-2. N = ${n} - ціле число.</p>`);


let m = +(prompt("Please enter second number M:"));
while (!Number.isInteger(m) || n > m) {
    m = +(prompt("Please enter second number M again:"));
}
document.writeln(`<p>3-4. M = ${m} - ціле число.</p>`);


//5
const question = confirm("Чи потрібно пропускати парні числа?");

const answ = question === true ? document.writeln(`<p>5. Потрібно пропускати парні числа(true).</p>`) : document.writeln(`<p>5. Не потрібно пропускати парні числа(false).</p>`);

//6
let sum = 0;
for (i = n; i <= m; i++) {
    sum += i;
}
document.writeln(`<p>6. Сума усіх чисел від ${n} до ${m}: ${sum}.</p>`);

//7-8

let sum2 = 0;
for (i = n; i <= m; i++) {
    if (question === true && i % 2 === 0) {
        continue;
    } else {
        sum2 += i;
    }
}

// for (i = n; i <= m; i++) {
//     if (question === true) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             sum2 += i;
//         }
//     }
// }
document.writeln(`<p>7. Сума чисел від ${n} до ${m}, при пропусканні парних чисел = ${question}: ${sum2}.</p>`);