let data = [
    { email: "usera@gmail.com", nama: "User A", Level: "Super Admin" },
    { email: "userb@gmail.com", nama: "User B", Level: "Super Admin" },
    { email: "userc@gmail.com", nama: "User C", Level: "Standart" },
    { email: "userd@gmail.com", nama: "User D", Level: "Standart" },
    { email: "usere@gmail.com", nama: "User E", Level: "Admin" },
    { email: "userf@gmail.com", nama: "User F", Level: "Standart" }
];

// const result=data.filter((obj)=>{
//     return obj["Level"]==="Super Admin"
// })
// console.log(result[0].nama)

const myFilter=(arr,cb)=>{
    const newArry=[]
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i],i,arr)){
            newArry.push(arr[i])
        }
    }
    return newArry;
}
const result=myFilter(data,((item)=>{
    return item.Level !=="Super Admin"
}))
console.log(result)