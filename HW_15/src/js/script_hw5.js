////#1
const arr = [];

function getRandomArray(length, min, max) {
    for (let i = 0; i < length; i++) {
        arr.push(min + Math.floor(Math.random() * (max - min)));
    }
    return arr;
}

////#2
function getAverage(...numbers) {
    let sum = 0;
    let numLength = numbers.length;

    for (let i of numbers) {
        if (Number.isInteger(i)) {
            sum += i;
        } else {
            numLength -= 1;
        }
    }

    return sum / numLength;
}
///#3
export function getMedian(...numbers) {
    let numLength = numbers.length;
    const intNumb = numbers.filter(function(number) {
        return Number.isInteger(number);
    });

    function compareNumbers(a, b) {
        return a - b;
    }

    // console.log(intNumb.sort(compareNumbers));

    const min = intNumb[Math.floor((intNumb.length / 2) - 1)];
    const max = intNumb[Math.floor(intNumb.length / 2)];

    if (numLength % 2 !== 0) {
        return intNumb[Math.floor(intNumb.length / 2)]
    } else if (numLength % 2 === 0) {
        return (min + max) / 2;
    }

}

///#4
function filterEvenNumbers(...numbers) {
    return numbers.filter(number => number % 2 !== 0);
}

////#5
function countPositiveNumbers(...numbers) {
    let counter = 0;
    for (let i of numbers) {
        if (i > 0) {
            counter++;
        }
    }
    return counter;
}

////#6
function getDividedByFive(...numbers) {
    return numbers.filter(number => number % 5 === 0);
}