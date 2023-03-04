export class Student {
    marksArray = [5, 4, 4, 5];
    activeStud = true;

    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marksArray = this.marksArray;

    }
    getInfo() {
        return `Student of ${this.course} course in ${this.university}, ${this.fullName}.`;
    }

    get marks() {
        if (this.activeStud == true) {
            return this.marksArray;
        }
        return null;
    }
    set marks(mark) {
        if (this.activeStud == true) {
            this.marksArray.push(mark);
        }
        return null;

    }

    getAverageMark() {
        return (this.marksArray.reduce((acc, curVal) => acc + curVal, 0)) / this.marksArray.length;

    }
    dismiss() {
        this.activeStud = false;
    }

    recover() {
        this.activeStud = true;
    }
}

////#1
const student1 = new Student("LNU", 4, "Romanyshyn Marta Volodymyrivna")