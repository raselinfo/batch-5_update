// let name = "Rasel"
// 1. Need 15 char(es5)


// console.log("Rasel".padStart(15,"*"))
// let name="Nahid Hossain"
// let ittretCount=(15-name.length)
// for (let i = 0; i < ittretCount;i++){    
//     name=name+"*"   
// }

// ---------------
// const getExactChar = (name, length) => {
//     if (name.length <= 0) throw new Error("Error")
//     length = (length - name.length)
//     for (let i = 0; i < length; i++) name = name + "*"
//     return name
// }
// let result = getExactChar("Rasel", 15)
// console.log(result)
// -----------------



// console.log("s".repeat(10))

// function sum(num1,num2){
//     return num1+num2
// }

// const sum=(num1,num2)=> num1+num2


// console.log(sum(5,5))

// const getFive=num=> num*num
// "use strict"
// let a=10;
// let a=50

// function test(){
//     console.log(this)
// }
// test.call({})

// const test=()=>{
//     console.log(this)
// }
// test()

// const obj={
//     name:"Rasel",
//     printName:function(){ 
//         let self=this  
//       setTimeout(function(){
//           self.name="Nahid"
//           console.log(self)
//       },1000)
//     }
// }
// obj.printName()
// console.log(obj.name)


// function test(num=0) {
//     //    if(!num) num=0
//     // num = num | 0
//     return num * num
// }
// console.log(test(null))

// const greeting = (greet = "hello",name = "Rasel")=>{
//     console.log(greet.length)
//     console.log(`${greet} ${name}`)
// }
// greeting(null,"Nahid")

// const greeting = (name = "Rasel Hossain", greet = "Hello!") => {
//     console.log(name.length)
//     console.log(`${greet} ${name}`)
// }
// greeting(null, "Good Morning")


const test=(...rest)=>{
  let result= rest.reduce((previousValue,curentValue)=>{
    return previousValue+curentValue
   },0)
   console.log(result)
}
test(5,5,)



// ----Solve This Problem------
// let letter = "R"
// 1.repeate this 10 times