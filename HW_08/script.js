class Student {
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
console.log("1. Student info: " + student1.getInfo());

////#2
console.log("2. List of student's marks: " + student1.marks);

////#3
student1.marks = 5;
console.log("3. Add new mark: " + student1.marks);

////#4
console.log("4. Get average mark: " + student1.getAverageMark());

////#5
student1.dismiss();
student1.marks = 6;
console.log("5. Add new mark: " + student1.marks);

////#6
student1.recover();
student1.marks = 6;
console.log("6. Add new mark: " + student1.marks);