const student = [
    { id: 21, name: 'Omar Sunny' },
    { id: 31, name: 'Mannnnaaa' },
    { id: 41, name: 'Moyouri' },
    { id: 71, name: 'Deepjol' },
]

// const result = [];

// for (let i = 0; i < student.length; i++) {
//     result.push(student[i].name);
// }
// console.log(...result);
const result = student.map(s => s.name);
console.log(result)
console.log(...(student.map(s => s.id)));
const result2 = student.filter(s => s.id > 40);
console.log(result2.map(s=>s.name));
