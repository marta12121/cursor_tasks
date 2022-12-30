const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
////#1
function getSubject(a) {
    const subj = Object.keys(students[a].subjects);

    for (let i = 0; i < subj.length; i++) {
        subj[i] = subj[i].replace("_", " ");
        subj[i] = subj[i][0].toUpperCase() + subj[i].substr(1);
    }
    return subj;
}

document.writeln(`<p>1. Список предметів: ${getSubject(0)}</p>`);


////#2
function getAverageMark(a) {
    const arrMarks = Object.entries(students[a].subjects);

    function getSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    let summa = 0;
    // for (let i = 0; i < arrMarks.length; i++) {
    //     const arrSum = (getSum(arrMarks[i][1])) / arrMarks[i][1].length;
    //     summa += arrSum;
    // }
    const arrMarksLength = arrMarks[0][1].length + arrMarks[1][1].length + arrMarks[2][1].length;
    for (let i = 0; i < arrMarks.length; i++) {
        const arrSum = (getSum(arrMarks[i][1]));
        summa += arrSum;

    }
    const result = summa / arrMarksLength;
    return result.toFixed(2);
}
document.writeln(`<p>2. Середня оцінка: ${getAverageMark(0)}</p>`);

///#3

function getStudentInfo(a) {
    const studObj = {};
    studObj.name = students[a].name;
    studObj.course = students[a].course;
    studObj.avarage_mark = getAverageMark(a);
    return studObj;
}
console.log(getStudentInfo(0));
document.writeln(`<p>3. Інформація по студетну: ${Object.entries(getStudentInfo(0))}</p>`);

////#4
function getStudentsNames(students) {
    const namesArray = [];
    for (let i = 0; i < students.length; i++) {
        namesArray.push(students[i].name);
    }

    return namesArray.sort();
}
document.writeln(`<p>4. Імена студентів у алфавітному порядку: ${getStudentsNames(students)}</p>`);


////#5 виводить найкращу середню оцінку, а не ім'я, потрібно допрацювати
function getBestStudent(students) {
    let maxMark = 0;
    for (let i = 0; i < students.length; i++) {
        maxMark = Math.max(getAverageMark(i));
    }
    return maxMark;
}
document.writeln(`<p>5. Кращий студент зі списку по показнику середньої оцінки: ${getBestStudent(students)}</p>`);

////#6
function calculateWordLetters(str) {
    let str1 = str.split("");
    const counts = {};

    str1.forEach((el) => {
        counts[el] = counts[el] ? (counts[el] + 1) : 1;
    });
    return counts;
}
console.log(calculateWordLetters("test"));
document.writeln(`<p>6. Кількість букв в слові text: ${Object.entries(calculateWordLetters("test"))}</p>`);