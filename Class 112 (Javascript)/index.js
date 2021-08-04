// const obj={
//     test() {
//         console.log("Hello test")
//     },
//     firstName:"Nahid",
//     lastName:"Hasan",
//     printFullName:function(){
//         return this.firstName+this.lastName;
//     }
// }

// obj.test()
// console.log(obj.printFullName())


// function test(){
//     console.log("test print")
// }
// const test2=function(){
//     console.log("test2 print")
// }

// test()
// test2()

// const add=function(num1,num2){
//     return num1+num2
// }
// console.log(add(5,5))


// console.log("Rasel")
// console.log("Nahid")
// console.log("Santo")

// console.log("Rasel")
// setTimeout(function(){
//     console.log("Hi i am Rasel")
// },5000)
// setTimeout(function(){
//     console.log("I am second function")
// },3000)
// console.log("Santo")


// const something=function(greet,name){
//     function sayHi(){
//         return `${greet} ${name}`
//     }
//     return sayHi()
// }

// console.log(something("hi","Nahid"))

// const greeting=function(greet,fullName){
//     const getFirstName=function(){
//         if(fullName){
//             return fullName.split(" ")[0]
//         }else{
//             return ""
//         }
//     }
//     let msg=`${greet} ${getFirstName()}`
//     return msg;
// }
// console.log(greeting("Good Morning","Nahid Hasan"))

// const greeting=function(greet,fullname){
//     function firstName(){
//         if(fullname){
//             return fullname.split(" ")[0]
//         }else{
//             return ""
//         }
//     }

//     let msg=`${greet} ${firstName()}`
//     return msg
// }
// const fullName=prompt("Enter Your Full Name");
// const greet="Good Morning"
// document.write(`<h1>${greeting(greet, fullName)}</h1>`)


// function test(){   
//     var firstname = "Rasel"
//     console.log(firstname)
//     console.log(lastName)
//     function test2(){
//         console.log(firstname)
//         var lastName="Hossain"
//         console.log(lastName)
//     }
//     test2()
// }
// test()


// function test(){
//     const firstName="Rasel"
//     console.log(firstName)
// }
// test()
// console.log(firstName)

// {
//     var firstName="Rasel"
//     console.log(firstName)
// }
// console.log(firstName)

// function divide(num){
//     let three=false;
//     let five=false;
//     if(num%3===0){
//         three=true;
//     }
//     if(num%5===0){
//         five=true;
//     }

//     if(three && five){
//         console.log("both are divisible")
//     }else{
//         console.log("not divisible")
//     }
// }
// divide()
// function a(num) {
//     return num % 3 === 0;
// }
// function b(num) {
//     return num % 5 === 0;
// }
// const divide = function (num) {
//     if (num) {
//         if (a(num) && b(num)) {
//             console.log(`${num} is divisible by both 3 and 5`)
//         } else {
//             console.log("Not a divisible number")
//         }
//     } else {
//         console.log("Please insert a number as an argument")
//     }
// }
// divide(15)

// Number("5")