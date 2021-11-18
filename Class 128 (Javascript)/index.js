// let arr=[1,2]
// // console.log(arr)
// Object.getPrototypeOf(arr).name=function(){
//   return 5+5
// }

// let str=new String("Hello")
// let newstr=str.concat("Rasel")

// function Person(name){
//   this.name=name
// }
// let p1=new Person("Rasel Hossain")
// console.log(p1.name)


// let obj={
//   name:"Rasel"
// }
// console.log(obj)

// obj.name="RaselOfficial"
// console.log(obj)
// for (let key in obj){
//   console.log(key)
// }
// console.log(Object.keys(obj))

// let property=Object.getOwnPropertyNames(obj)

// let descriptor=Object.getOwnPropertyDescriptor(obj,"name")

// let baseObject=Object.getPrototypeOf(obj)
// let descriptor=Object.getOwnPropertyDescriptor(baseObject,"toString")

// let obj = {
//   name: "Rasel"
// }

// console.log(Object.keys(obj))
// // console.log(obj)
// Object.defineProperty(obj,"name",{
//   enumerable:false,
//   writable:false,
//   configurable:false,
//   value:"I am a web programmer"
// })

// obj.name="RaselOfficial"
// console.log(Object.keys(obj))
// // console.log(obj.name)


// let person={
//   name:"Nahid"
// }

// console.log(person);

// Object.defineProperty(person,"name",{
//   writable:false
// })
// person.name="Rasel"
// console.log(person)

// function Person(name){
//   this.name=name
// }

// let p1=new Person("Rasel Official")
// console.log(Object.getPrototypeOf(p1) === Person.prototype)

let arr=[]
console.log(Object.getPrototypeOf(arr))
Array.prototype.myMethod=()=>{}