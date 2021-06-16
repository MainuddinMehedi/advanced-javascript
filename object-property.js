const student = [
    {id: 21, name:'Omar Sunny'},
    {id: 31, name:'Maannaa'},
    {id: 41, name:'Moyouri'},
    {id: 71, name:'Deepjol'}
];


// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const names = element.name;
//     console.log(names);
// }

const names = student.map( s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id>40);
const biggerOne = student.find(s => s.id>40);
console.log(biggerOne);