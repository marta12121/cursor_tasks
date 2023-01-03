////#1
const arr = [];

function getRandomArray(length, min, max) {
    for (let i = 0; i < length; i++) {
        arr.push(min + Math.floor(Math.random() * (max - min)));
    }
    return arr;
}
console.log("Function 1: Random Array " + getRandomArray(15, 1, 100));

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
console.log("Function 2: Average " + getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

///#3
function getMedian(...numbers) {
    let numLength = numbers.length;
    const intNumb = numbers.filter(function(number) {
        return Number.isInteger(number);
    });

    function compareNumbers(a, b) {
        return a - b;
    }

    console.log(intNumb.sort(compareNumbers));

    const min = intNumb[Math.floor((intNumb.length / 2) - 1)];
    const max = intNumb[Math.floor(intNumb.length / 2)];
    // console.log(numLength, min, max);
    if (numLength % 2 !== 0) {
        return intNumb[Math.floor(intNumb.length / 2)]
    } else if (numLength % 2 === 0) {
        return (min + max) / 2;
    }

}
console.log("Function 3: Median " + getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// console.log(getMedian(1, 2, 3, 4, 5));
// console.log(getMedian(1, 2, 3, 4));


////#4
function filterEvenNumbers(...numbers) {
    return numbers.filter(number => number % 2 !== 0);
}
console.log("Function 4: Even Numbers " + filterEvenNumbers(1, 2, 3, 4, 5, 6));


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
console.log("Function 5: Positive Numbers " + countPositiveNumbers(1, -2, 3, -4, -5, 6));

////#6
function getDividedByFive(...numbers) {
    return numbers.filter(number => number % 5 === 0);
}
console.log("Function 6: Divided By Five " + getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

////#7 поки не працює
function replaceBadWords(string) {
    const strArr = string.split(" ");

    for (let i = 0; i < strArr.length; i++) {
        // if (i === "fuck" || i === "shit") {
        strArr[i] = strArr[i].replace(/\fuck/, "****");
        strArr[i] = strArr[i].replace(/\shit/, "****");
        // }
    }

    return strArr.join(" ");
}
// console.log(replaceBadWords("Are you fucking kidding shit ? "));