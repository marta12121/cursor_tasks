////#1(1)
export function getMaxDigit(number) {
    let arr = number.toString().split("");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    return Math.max(...arr);
}

////#2(3)
function toUpperCase(name) {
    const firstLetter = name[0].toUpperCase();
    const nextLetter = name.substr(1).toLowerCase()
    return firstLetter + nextLetter;

}
////#3(4)
const getBill = function(percentages, salary) {
    const resultPercent = (percentages / 100) * salary;
    const result = salary - resultPercent;
    return result;
}

///#4(5)
function getRandomNumber(n, m) {
    const randNumb = Math.floor(Math.random() * (m - n)) + n;
    return randNumb;
}
////#5(6)
function countLetter(a, str) {
    // debugger;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === a || str[i].toLowerCase() === a) {
            count++;
        }
    }
    return count;
}
////#6 (7,8)
function convertCurrency(str) {
    if (str.substr(-1) === "$") {
        let result = str.replace(/\$/, "");
        result = parseInt(result);
        return result * 25 + 'грн';
    } else if (str.substr(-3) === "UAH" || str.substr(-3) === "uah") {
        let result = str.replace(/\UAH/, "").replace(/\uah/, "");
        result = parseInt(result);
        return result / 25 + '$';
    } else {
        return 'Error, please input $ or UAH'
    }
}

////#7 (9,10)
const getRandomPassword = function(duration = 8) {
    let passArray = [];
    for (let i = 0; i < duration; i++) {
        passArray.push(Math.floor(Math.random() * 10));
    }
    return passArray.join("");
}

///#8(11)
function deleteLetters(z, str) {
    return str.replace(/a/ig, "");
    // return str.replace(z, "")
}