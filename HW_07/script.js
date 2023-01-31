const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};


////#1
function getMyTaxes(salary) {
    return this.tax * salary;
}
document.writeln(`<p>1. Cкільки податків ви заплатите як IT-спеціаліст в якійсь з країн : ${getMyTaxes.call(ukraine, 20000)}</p>`);
console.log(getMyTaxes.call(ukraine, 20000));

////#2
function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}
document.writeln(`<p>2. Cкільки  у середньому податків платять IT-спеціалісти у кожній країні : ${getMiddleTaxes.call(latvia)}</p>`);
console.log(getMiddleTaxes.call(latvia));

////#3
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}
document.writeln(`<p>3. Cкільки  всього податків платять IT-спеціалісти у кожній країні : ${getTotalTaxes.call(litva)}</p>`);
console.log(getTotalTaxes.call(litva));

////#4
function getMySalary(country) {
    setInterval(function() {
        let salary = 1500 + Math.floor(Math.random() * 500);
        let taxes = getMyTaxes.call(country, salary);
        let profit = salary - taxes;
        console.log({ salary, taxes, profit });
    }, 10000);
}
getMySalary(ukraine);