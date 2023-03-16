// let people =[
//     {name:"GWBFV",age:30},
//     {name:"FWEFV",age:23},
//     {name:"WGBGF",age:36},
//     {name:"WGBGF",age:36}, 
//     {name:"FDSFD",age:38}, 
//     {name:"GSFGF",age:39}, 
// ]
// let sum = people.reduce((total,person)=> total+person.age,0)
// console.log(sum);

// let contantnames= people.reduce((name,person)=>name+":"+person.name,"")
// console.log(contantnames);


// let arrNum = [15, 39, 20, 32, 30, 45, 22]
// function sumOfEle(num, ind) {
//   return num + ind;
// }
// let arrNum2 = arrNum.reduce(sumOfEle)
// console.log(arrNum2)



// const people = [
//   { name: 'Lee', age: 21 },
//   { name: 'Ajay', age: 20 },
//   { name: 'Jane', age: 20 }
// ];
// function groupBy(objectArray, property) {
//   return objectArray.reduce((acc, obj) => {
//      const key = obj[property];
//      if (!acc[key]) {
//         acc[key] = [];
//      }
//      acc[key].push(obj);
//      return acc;
//   }, {});
// }
// const groupedPeople = groupBy(people, 'age');
// console.log(groupedPeople);

// Person array with name and Age

const person = [
  {
    name: 'Jim',
    color: 'blue',
    age: 22,
  },
  {
    name: 'Sam',
    color: 'blue',
    age: 33, 
  },
  {
    name: 'Eddie',
    color: 'green',
    age: 77,
  },
];
const sumOfAges = person.reduce((sum, currentValue) => {
  return sum + currentValue.age;
}, 0);

console.log(sumOfAges);

