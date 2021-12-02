// const getStr=(num,length)=>{
//     var str=''
//     for (let i=0;i<length;i++){   
//         str+=num
//     }
//     return str
// }
// let tenR=getStr('R',10)
// console.log(tenR)


// const sum = (name, age,...arr)=>{
//  console.log(arr)
//   return arr.reduce((prevValue,currentValue)=> prevValue+currentValue
//   ,0) 
// }

// console.log(sum("Rasel",40,5,5))


// let arr=[5,6,7]
// let arr2=["Nahid",...arr,"Rasel"]

// console.log(arr2)


// let person1={
//   name:"Rasel",
//   age:20,
//   country:"Bangladesh"
// }
// let person2={
//   age: 30,
//   name: "Nahid",
//   ...person1,
// }

// console.log(person2)

// let obj1={
//   a:10,
//   b:20,
//   // test:function(){
//   //   console.log(this)
//   // }
//   // test:()=> {
//   //   console.log(this)
//   // }
//   // test(){
//   //   console.log(this)
//   // }
// }
// obj1.test()

// // let obj2=Object.create(obj1)
// let obj2={...obj1}
// // obj2.a=30
// // obj2.name="Rasel"
// console.log(obj2)
// let a=20
// let b=30

// let obj={
//   a,  //a:20
//   b ,//b:30,
//   test(){
//     console.log("test function")
//   }
// }

// console.log(obj)




// let obj={
//   name:"Rasel",
//   age:20,
//   test(){
//     console.log("test function")
//   },

// }
// let {age:myage,test:MyFunction,name}=obj
// name = "Nahid"

// console.log(name)

// let arr=["Rasel","Hossain",20]

// let [firstName,lastName,age]=arr
// console.log(firstName,lastName,age)



// let obj={
//   a:20,
//   b:10
// }
// // console.log(Object.keys(obj))
// let convertedArray=Object.entries(obj)
// console.log(convertedArray)


let arr=[
  ["name","Rasel"],
  ["age",20]
]

let convertedobject=Object.fromEntries(arr)
console.log(convertedobject)