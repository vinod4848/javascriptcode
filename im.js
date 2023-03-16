//spread operator and destructuring
const ProfileDashbord = [
    { UesrName: "abc@" },
    { FastName: "abc" },
    { LastName: "xyz" },
    { email: "abc@gmail.com" },
];

let UpdateLastName = { ...ProfileDashbord, LastName: "dkFAN" };
console.log(UpdateLastName);
