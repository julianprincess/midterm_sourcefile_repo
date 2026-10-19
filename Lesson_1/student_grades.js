class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let total = 0;

        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }

        return total / this.scores.length;
    }

    getLetterGrade() {
        let average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}


let students = [
    new Student("Lany", [85, 90, 92]),
    new Student("Bongbung", [70, 75, 68]),
    new Student("Dutherthe", [95, 98, 92]),
    new Student("Pico", [55, 60, 58])
];


function analyzeClass(students) {

    console.log("------- STUDENT REPORT -------");

    let total = 0;
    let highest = 0;
    let topStudent = "";

    for (let i = 0; i < students.length; i++) {

        let average = students[i].getAverage();
        let grade = students[i].getLetterGrade();

        console.log(
            students[i].name + " - Average: " +
            average.toFixed(1) + " | Grade: " + grade
        );

        total += average;

        if (average > highest) {
            highest = average;
            topStudent = students[i].name;
        }
    }

    let classAverage = total / students.length;

    console.log("-----------------------------------");
    console.log("Class Average: " + classAverage.toFixed(1));
    console.log("Top Student: " + topStudent + " with " + highest.toFixed(1));
}


analyzeClass(students);