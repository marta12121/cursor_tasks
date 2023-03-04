import { getMaxDigit } from "./js/script_hw3";
import { getMarks } from "./js/script_hw4";
import { getMedian } from "./js/script_hw5";
import { getSubject } from "./js/script_hw6";
import { Student } from "./js/script_hw8";
import { getMyTaxes } from "./js/script_hw7";
import { idGenerator } from "./js/script_hw13";
import { generateBlocks, generateBlocksInterval } from "./js/script_hw9";


import "./css/style.css";


const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const marks = [4, 5, 5, 3, 4, 5];
const student1 = new Student("LNU", 4, "Romanyshyn Marta Volodymyrivna")

const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};

console.log("Function from HW3: " + getMaxDigit(15891));
console.log("Function from HW4: " + getMarks(students, marks));
console.log("Function from HW5: Median -  " + getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log("Function from HW6: " + getSubject(0));
console.log("Function from HW7: " + getMyTaxes.call(ukraine, 20000));
console.log("Function from HW8: " + student1.getInfo());
console.log("Function from HW13.1: " + idGenerator.next().value);
console.log("Function from HW13.2: " + idGenerator.next().value);
console.log("Function from HW13.3: " + idGenerator.next().value);
console.log("Function from HW13.4: " + idGenerator.next().value);