// let set=new Set([1,1,2,2,3,4,5])
// let a = { a: 2 }, b = { b: 30 }
// let map = new WeakMap()
// map.set("a",b)
// a = null
// console.log(map)
// function Person(name,age){
//     this.name=name
//     this.age=age
// }

// let person1=new Person("Nahid",20)
// let person2=new Person("Niloy",25)

// let a = { a: 2 }, b = { b: 30 }
// let mySet = new WeakSet([
//     a, b
// ])
// b=null
// a = null
// console.log(mySet)


// function Person(name,age){
//     this.name=name
//     this.age=age
//     this.test=function(){
//         console.log("this is test")
//     }
//     let name="rasel"
// }

// let person1=new Person("Nahid",20)
// let person2=new Person("Niloy",25)

// class Person{
//     constructor(name,age=30){
//        this.name=name;
//        this.age=age;
//        this.test=function(){
//            console.log(this.name)
//        }
//     }
// name2="sakib"
//     test2(){
//        console.log(this.name)
//     }
// }

// let person1=new Person("nahid",20)
// let person2=new Person("Rasel")

// class Person{
//     constructor(name,email){
//        this.name=name;
//        this.email=email;
//        this.test=function(){
//            console.log(this.name)
//        }
//     }
//     print(){
//         console.log(this)
//     }
//    static create(str){
//         let newPerson=JSON.parse(str)
//        return new Person(newPerson.name,newPerson.email) 
//     }
// }
// let str = `{"name":"Rasel","email":"test@gmail.com"}`
// let person1 =Person.create(str)
// // let newPerson=person1.create(str)

// console.log(person1 instanceof Person)


// "use strict"
// function Person(name){
//     this.name=name
//     this.print=function(){
//         console.log(this)
//     }
// }

// let p1=new Person("rasel")
// let darw=p1.print
// darw()


// class Person{
//     constructor(name){
//         this.name=  name      
//     }
//     print(){
//         console.log(this)
//     }
// }

// let person1=new Person("Rasel")
// let draw=person1.print
// draw()