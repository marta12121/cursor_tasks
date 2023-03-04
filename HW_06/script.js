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
function getSubject(student) {
    const subj = Object.keys(students[student].subjects);
    // for (let i = 0; i < subj.length; i++) {
    //     subj[i] = subj[i].replace("_", " ");
    //     subj[i] = subj[i][0].toUpperCase() + subj[i].substr(1);
    // }
    const newSubj = subj.map((el) => {
        const newEl = el[0].toUpperCase() + el.slice(1);
        if (newEl.includes("_")) {
            return newEl.replace("_", " ");
        }
        return newEl;
    });
    return newSubj;
}
document.writeln(`<p>1. Список предметів: ${getSubject(0)}</p>`);


////#2
function getAverageMark(student) {
    const arrMarks = Object.values(students[student].subjects);
    let sum = 0;
    let count = 0;

    for (let marks of arrMarks) {
        marks.map((val) => {
            sum += val;
            count++;
        })
    }
    const averMark = (sum / count).toFixed(2);
    return averMark;

}
document.writeln(`<p>2. Середня оцінка: ${getAverageMark(0)}</p>`);

///#3


function getStudentInfo(student) {
    const studObj = {};
    studObj.name = students[student].name;
    studObj.course = students[student].course;
    studObj.average_mark = getAverageMark(student);
    return studObj;
}
document.writeln(`<p>3. Інформація по студетну: ${Object.entries(getStudentInfo(2))}</p>`);

////#4
function getStudentsNames(students) {
    const namesArray = [];
    for (let i = 0; i < students.length; i++) {
        namesArray.push(students[i].name);
    }

    return namesArray.sort();
}
document.writeln(`<p>4. Імена студентів у алфавітному порядку: ${getStudentsNames(students)}</p>`);


////#5 
function getBestStudent(students) {
    const studObj1 = {};
    for (let i = 0; i < students.length; i++) {
        studObj1[students[i].name] = getAverageMark(i);
    }
    const arr = Object.values(studObj1);
    const maxMark = Math.max(...arr);

    const key = Object.keys(studObj1).find(key => studObj1[key] === `${maxMark}`);
    return key;


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