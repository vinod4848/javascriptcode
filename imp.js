// spredopreters
// arr2 =[63,58,62]
// arr1  = [52,56,85]
// function avg(a,b,c){
//     return a+b+c/3
// }
// let a = avg(...arr1,...arr2)

// console.log(a);

// const ProfileDashbord = [
//   { ProfileId: "21169088" },
//   { UserName: "Rupali" },
//   { Email: "rupali@gmail.com" },
//   { Password: "pupali@4949" },
// ];

// let UpdatePassword = { ...ProfileDashbord, Password: "pupali@4848" };
// console.log(UpdatePassword);

// const profile ={
//     name:"ADSF",
//     lastName:"GGACBC",
//     age:"52",
// }
// ;
// const profile2 =[
//     {Number:"85696"},
//     {class:"G1"},
//     {teacher:"ABC"},
// ];

// let a ={...profile, age:"35"};
// // let b = {...profile2,age:"23"}
// console.log(a);



// const profile ={
//     name:"ADSF",
//     lastName:"GGACBC",
//     age:"52",
// }
// ;
// const profile2 ={
//     Number:"85696",
//     class:"G1",
//     teacher:"ABC",
// };

// let a2 ={...profile, ...profile2, age:"55", class:"C1" ,rank:"2"}
// console.log(a2);


// destructuring

// const profile ={
//     name:"ADSF",
//     lastName:"GGACBC",
//     age:"52",
// }
// let{name,lastName,age}=profile
// console.log(name,lastName,age);


// async function getuser(){
//     return Promise.resolve('User 1')
// }
// async function getuser2(data) {
//   return Promise.resolve(data + 'User 2');
// }
// async function getAllUser() {
//   const data = await getuser();
//   const moreData = await getuser2(data);
//   return `All the User: ${data}, ${moreData}`;
// }
// getAllUser().then((all) => {
//     console.log('all the User')
//   })
  

  const  Obj = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num =[22,21,20,19,18,17]
        resolve(num);
    },2000);
  })


  const getobj2 = (indexdata)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{
            let data ={
                name:"abc",
                roll:"21"
            }
        })
    })
  }



