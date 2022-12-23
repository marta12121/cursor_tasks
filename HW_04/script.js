const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних "];
const marks = [4, 5, 5, 3, 4, 5];
////#1
const st_boys = [];
const st_girls = [];
const pairs = [];

function getArr(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].substr(-1) === "а") {
            st_girls.push(students[i]);
        } else {
            st_boys.push(students[i]);
        }
    }
    for (i in st_girls) {
        pairs.push([st_boys[i], st_girls[i]]);
    }
    return pairs;
}

////#2
const pairsAndThemes = [];
let newPairs = [];

function getThemes(pairs, themes) {
    for (let i = 0; i < pairs.length; i++) {
        newPairs.push([st_boys[i] + " i " + st_girls[i]]);

    }
    for (i in st_girls) {
        pairsAndThemes.push([newPairs[i], themes[i]]);
    }
    return pairsAndThemes;
}

////#3
const studAndMarks = [];

function getMarks(students, marks) {
    for (let i = 0; i < students.length; i++) {
        studAndMarks.push([students[i], marks[i]]);

    }
    return studAndMarks;
}

///#4

const pairsAndMarks = [];

function getPairMarks(pairs, marks) {
    const randMarks = [];

    for (i in marks) {
        const randMark = Math.floor(Math.random() * marks.length);
        randMarks.push(marks[randMark]);
    }

    for (i in pairs) {
        pairsAndMarks.push([pairs[i], randMarks[i]]);
    }
    return pairsAndMarks;
}




console.log(getArr(students));
console.log(getThemes(pairs, themes));
console.log(getMarks(students, marks));
console.log(getPairMarks(pairs, marks));