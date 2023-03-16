// arr = [40, 50, 60, 34, 44];

// function avg(a, b, c) {
//   return a + b + c / 3;
// }

// let a = avg(...arr);
// console.log(a);

// arr = [10, 20, 30];

// function avg(a, b, c) {
//   return a + b + c * 4;
// }
// const { readFile } = require("fs");
// let a2 = [2, 3, 5];
// let a = [...arr, ...a2];
// obj1 = {
//   name: "abc",
//   age: "22",
//   class: "5",
// };

// let obj2 = {};
// obj2.name = obj1.name;
// obj2.age = obj1.age;
// obj2.class = "4";
// obj1 = {
//     name: "abc",
//     age: "22",
//     class: "5",
//   };

// let  {name,age,class} = obj1;
// console.log(name,age,class);

// let fs = require("fs");

// fs.readFile("file.text", "utf-8", (err, data) => {
//   console.log(err, data);
// });

//////////////////////promises///////////////////////

// let fs = require("fs/promises");

// let a = fs.readFile("file.text", "utf-8");
// // console.log(a);
// a.then((data)=>{
//     console.log(data);
// })

// console.log("this is Promisses");

// let a = fs.readFile("file.text", "utf-8");
// // console.log(a);
// a.then((data) => {
//   console.log(data);
// });

// let a = 100;
// for (let i = 35; i  <= 80; i++) {
//   console.log(i);
// }

////////////////aysc await//////////////////////

// let fs = require("fs/promises");

// const redthree = async (File1, File2, File3) => {
//   let a1 = fs.readFile(File1, "utf-8");
//   let a2 = fs.readFile(File2, "utf-8");
//   let a3 = fs.readFile(File3, "utf-8");

//   let c1 = await a1;
//   console.log(c1);
//   let c2 = await a2;
//   console.log(c2);
//   let c3 = await a3;
//   console.log(c3);
// };

// let a = fs.readFile("file.text", "utf-8");
// // // console.log(a);
// a.then((data) => {
//   console.log(data);
// });

// redthree("file1.tex", "file2.tex", "file3.tex");

// for (let a = 1; a < 11; a++) {
//   for (let b = 1; b < 11; b++) {
//     console.log(a + "*" + b + " = " + a * b);
//   }
// }

// obj1 = {
//   name: "abc",
//   age: "22",
//   class: "2",
// };

// let obj2 = { ...obj1, class: "7" };
// console.log(obj2);

// obj1 = {
//   name: "abc",
//   age: "22",
//   class: "2",
// };

// let obj2 = {};
// obj2.name = obj1.name;
// obj2.age = obj1.age;
// obj2.class = "4";

// console.log(obj2);

//  let a = 5;
//   for (let i = 1; i < 11; i++) {
//   console.log(a, "*", i, "*" ,i*a);
//   }

// let a = prompt("Enter the number");
// for (let i = 1; i < 11; i++) {
// document.write(a, "*", i, "*" ,i*a);
// }

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

const c = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
let mapV = c.map((item, index) => {
  return item.value * 3;
});
console.log(mapV);

const a = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const b = a.map(({ key, value }) => ({ [key]: value }));

console.log(b);
console.log(a);

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);
// // expected output: 4
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);

// const ProfileDashbord = [
//   { ProfileId: "21169088-813f-11ed-a1eb-0242ac120002" },
//   { UserName: "Rupali" },
//   { Email: "rupali@gmail.com" },
//   { Password: "pupali@4949" },
// ];

// let UpdatePassword = { ...ProfileDashbord, Password: "pupali@4848" };
// console.log(UpdatePassword);

// const arr1 = [23, 24, 25, 66, 77];
// const arr2 = [56, 87, 87, 98];

// const list = [...arr1, ...arr2];

// const final=list.sort((a,b)=>a+b)
// // console.log(final);
// console.log(final[3]);

// let arr = [38, 89, 111, 22, 33];
// let arr1 = arr.sort((a, b) => a - b);
// console.log(arr1[0]);

function secondLargest(arr) {
  arr.sort();
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] != arr[i - 1]) {
      return arr[i];
    }
  }
}

arr = [4, 2, 1, 3, 5, 78, 98];
console.log(`The second largest element is: ${secondLargest(arr)}`);

const ProfileDashbord = [
  { FastName: "abc" },
  { LastName: "xyz" },
  { UesrName: "abc@" },
  { email: "abc@gmail.com" },
];
//spread operator
let UpdateLastName = { ...ProfileDashbord, LastName: "jcndkFAN" };
console.log(UpdateLastName);

var obj = {
  Students: [
    {
      name: "Raj",
      Age: "15",
      RollNumber: "123",
      Marks: "99",
    },
    {
      name: "Aman",
      Age: "14",
      RollNumber: "223",
      Marks: "69",
    },
    {
      name: "Vivek",
      Age: "13",
      RollNumber: "253",
      Marks: "89",
    },
  ],
};

var newArray = obj.Students.filter(function (req) {
  //  return req.Age >= 15 && req.RollNumber <= 200 && req.Marks >= 80;
  return req.Age <=14
});
console.log(newArray);
