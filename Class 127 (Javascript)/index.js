function Person(name){
  this.name=name
}

let person1=new Person("Rasel Hossain")
console.log(Object.getPrototypeOf(person1))
console.log(person1.__proto__)

console.log(Person.prototype)

console.log(Object.getPrototypeOf(person1)===Person.prototype)

const arr=[]
console.log(arr.__proto__)

Array.prototype.myFunc=function(){}
console.log(arr) // see proto
