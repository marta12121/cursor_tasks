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
export function getMyTaxes(salary) {
    return this.tax * salary;
}


////#2
function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}


////#3
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}
////#4
function getMySalary(country) {
    setInterval(function() {
        let salary = 1500 + Math.floor(Math.random() * 500);
        let taxes = getMyTaxes.call(country, salary);
        let profit = salary - taxes;
    }, 10000);
}
getMySalary(ukraine);