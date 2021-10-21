// function Shape(width,height){
//     this.width=width;
//     this.height=height;
//     this.draw=function(){
//         console.log(this.width,this.height)
//     }
// }
// Shape.prototype.age=20
// let square=new Shape(10,50)
// let circle=new Shape(20,60)
// circle.draw()
// square.__proto__.name="Rasel"
// console.log(square)
// console.log(Object.getPrototypeOf(square))

// let obj={}
// obj.__proto__.name="Rasel"
// let obj2=new Object()
// console.log(Object.getPrototypeOf(obj))
// console.log(Object.getPrototypeOf(obj2))

// console.log(obj.__proto__ === obj2.__proto__)


// let arr=[1,2]
// console.log(Object.getPrototypeOf(arr))

// // let newItem=arr.find(item=>{
// //     return item===2
// // })
// // console.log(newItem)

// let allMethod=Object.getPrototypeOf(arr)
// Object.getPrototypeOf(arr).allMethod=allMethod
// console.log(arr)


// let str=new String("500")


// PI*r*2

function circleArea (radius){
  if(radius){
      let PI = Math.PI
      return (PI * (radius*radius))
  }
  return "Please Enter Radius First"
}

let firstCircleArea=circleArea(5)
console.log(firstCircleArea)