'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// STARTING DATA
const studentNames = [
'Ana',
'Ben',
'Carla',
'Daniel',
'Ella'
];

const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
[80, 85, 90],
[70, 72, 74],
[88, 92, 95],
[60, 65, 67],
[75, 78, 81]
];

// PART A: Display the Original Records
console.log('Part A: Original Records');

for (let i = 0; i < studentNames.length; i++) {
console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

// PART B: Add New Students
console.log('\nPart B: Add New Students');

studentNames.push('Faith');
studentScores.push(88);

studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log('Updated names:', studentNames);
console.log('Updated scores:', studentScores);
console.log('Number of students:', studentNames.length);

// PART C: Remove and Replace Records
console.log('\nPart C: Remove and Replace Records');

studentNames.shift();
studentScores.shift();

studentNames.pop();
studentScores.pop();

const danielIndex = studentNames.indexOf('Daniel');

if (danielIndex !== -1) {
studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);
}

studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log('Final names:', studentNames);
console.log('Final scores:', studentScores);

// PART D: Calculate Class Statistics
console.log('\nPart D: Class Statistics');

const total = studentScores.reduce((sum, score) => sum + score, 0);
const average = total / studentScores.length;

let highest = studentScores[0];
let lowest = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {
if (studentScores[i] > highest) {
highest = studentScores[i];
}

if (studentScores[i] < lowest) {
lowest = studentScores[i];
}
}

console.log('Total Score:', total);
console.log('Average Score:', average.toFixed(2));
console.log('Highest Score:', highest);
console.log('Lowest Score:', lowest);

// PART E: Analyze Passing Scores
console.log('\nPart E: Passing Score Analysis');

const PASSING_SCORE = 75;

const passingScores = studentScores.filter(
(score) => score >= PASSING_SCORE
);

const status = studentScores.map(
(score) => score >= PASSING_SCORE ? 'Passed' : 'Failed'
);

const anyoneFailed = studentScores.some(
(score) => score < PASSING_SCORE
);

const everyonePassed = studentScores.every(
(score) => score >= PASSING_SCORE
);

console.log('Passing scores:', passingScores);
console.log('Statuses:', status);
console.log('At Least One Failed?', anyoneFailed);
console.log('All Students Passed?', everyonePassed);

// PART F: Sort and Search
console.log('\nPart F: Sort and Search');

const sortedScoresCopy = Array.from(studentScores);

sortedScoresCopy.sort((a, b) => b - a);

console.log('Sorted copy (highest to lowest):', sortedScoresCopy);
console.log('Does the class have a 91?', sortedScoresCopy.includes(91));
console.log('Index of score 91:', sortedScoresCopy.indexOf(91));

// PART G: Process a Two-Dimensional Array
console.log('\nPart G: Activity Scores');

const activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {
let rowTotal = 0;

console.log();

for (let j = 0; j < activityScores[i].length; j++) {
console.log(
`${studentNames[i]}'s activity ${j + 1} score: ${activityScores[i][j]}`
);

```
rowTotal += activityScores[i][j];
```

}

const rowAverage = rowTotal / activityScores[i].length;

activityAverages.push(rowAverage);

console.log(
`${studentNames[i]}'s activity average: ${rowAverage.toFixed(2)}`
);
}

console.log();
console.log('Activity Averages:', activityAverages);

// PART H: Create a Text Summary
console.log('\nPart H: Text Summary');

console.log('Students: ' + studentNames.join(' | '));
