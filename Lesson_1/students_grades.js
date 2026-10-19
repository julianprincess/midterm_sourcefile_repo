let scores = [88, 74, 95, 68, 79];

console.log("Student Scores:");
scores.forEach(score => console.log(score));

console.log();

let passed = 0;
let failed = 0;

scores.forEach((score, index) => {
    let grade;
    let status;

    if (score >= 90) {
        grade = "Excellent";
        status = "Passed";
    } else if (score >= 80) {
        grade = "Very Good";
        status = "Passed";
    } else if (score >= 75) {
        grade = "Good";
        status = "Passed";
    } else {
        grade = "";
        status = "Failed";
    }

    if (status === "Passed") {
        passed++;
    } else {
        failed++;
    }

    console.log(`Student ${index + 1}: ${score} - ${grade} - ${status}`);
});

let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

console.log();
console.log(`Total Score: ${total}`);
console.log(`Average Score: ${average}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
