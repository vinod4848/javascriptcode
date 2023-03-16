
///using map we can add value and and retuan new array and also uing map we can aplley condtion on all values 
// let cities = ["NY","MA","ZY"];
// let lowerCities = cities.map((city)=>city.toLocaleLowerCase())
// console.log(lowerCities);


// let words =['animal','bird','insect'];
// let countLenth = words.map(word => word.length)
// console.log(countLenth);


// let arrOne = [32, 45, 63, 36, 24, 11]
// const multFive = (num) => {
// return num * 5; 
// }
// let arrTwo = arrOne.map(multFive)
// console.log(arrTwo)
 
// const a =[1,2,3,4,5,6]
// let a2 = a.map((value)=>{
//     return value +3;
// })
// console.log(a2);

// let sum = (a,b,c)=> a+b+c 

// let add = function(a,b){
//     return a+b
// }
// console.log(sum(10,52,10),add(20,82));
// we can make async and await the promises
// hum kisi bi function ko async bna sakte hai and usk bad
// uske promise ko await kar sakte hai 
//async function always return promise

// async function getData() {
//   return Promise.resolve('data');
// }

// async function getMoreData(data) {
//   return Promise.resolve(data + 'more data');
// }

// async function getAll() {
//   const data = await getData();
//   const moreData = await getMoreData(data);
//   return `All the data: ${data}, ${moreData}`;
// }

// getAll().then((all) => {
//   console.log('all the data')
// })

let cities = ["NY","MA","ZY"];
let lowerCities = cities.map((city)=>city.toLocaleLowerCase())
console.log(lowerCities);



