// let person = [
//     { name: "Rasel", age: 20 },
//     { name: "Nahid", age: 15 },
//     { name: "Ayon", age: 36 },
//     { name: "Sakib", age: 20 },
// ]

// var arr = [5,1,9,0,-4,2,-8,9,-50];
// var arr = [6,2, 4,6];

// let result = arr.some((item, index, arr) => {
//     return item <0
// })
// console.log(result);
// let result=arr.every(item=>{
//     return item < 0
// })
// console.log(result);



// arr.sort((a,b)=>{
//     if(a>b){
//         return -1
//     }else if(a<b){
//         return 1
//     }else{
//         return 0
//     }
// })
// arr.sort((a,b)=>{
//     return b-a
// })
// console.log(arr)

// person.sort((a,b)=>{
//     if(a.age>b.age){
//         return -1
//     }else if(a.age<b.age){
//         return 1
//     }else{
//         return 0
//     }
// })
// console.log(person)

// let greet=(mag)=>{
//     return (name)=>{
//         return mag +" ,"+name
//     }
// }
// let gm = greet("Good Morning")
// console.log(gm("Rasel"))

// let base=(b)=> {
//     return (n)=>{
//         let result=1
//         for(let i=0;i<b;i++){
//             result +=n
//         }
//         return result
//     }
// }
// let base10 = base(10)
// console.log(base10(2));

// let sayHi=(n)=>{
//     if(n===10){
//         return
//     }
//     console.log(n+" Hello World")
//     sayHi(n+1)
// }

// sayHi(5)

// let factorial=(n)=>{
//     if(n==0){
//         return
//     }
//    let result=1;
//    result*=n;
//     console.log(result+"*");
//     factorial(n-1)
// }
// factorial(5)

let fact=(n)=>{
    if(n===1){
        return 1;
    }
    return n * fact(n-1)
}

let result=fact(5);
console.log(result)