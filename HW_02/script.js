//1-4
const n = +(prompt("Please enter first number N:"));
const m = Number(prompt("Please enter second number M:"));

document.writeln(`<p>1. N = ${n}.</p>`)
    // document.writeln(`<p>${}</p>`)

if (Number.isInteger(n)) {
    console.log(true);
    document.writeln(`<p>2. N = ${n} - ціле число.</p>`);
} else {
    console.log(false);
    document.writeln(`<p>2. N = ${n} -не є цілим числом.</p>`);

}

document.writeln(`<p>3. M = ${m}.</p>`)

if (Number.isInteger(m)) {
    console.log(true);
    document.writeln(`<p>4. M = ${m} - ціле число.</p>`);
} else {
    console.log(false);
    document.writeln(`<p>4. M = ${m} -не є цілим числом.</p>`);

}

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
document.writeln(`<p>7. Сума чисел від ${n} до ${m}, при пропусканні парних = ${question}: ${sum2}.</p>`);