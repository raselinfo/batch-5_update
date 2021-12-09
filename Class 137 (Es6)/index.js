// const symbol1=Symbol("Symbol1")
// const symbol2=Symbol("Symbol 2")
// console.log(symbol2)

// let toos={
//   Head:Symbol("Head"),
//   Tail:Symbol("Tails")
// }

// let obj={
//   name:"Rasel",
//   age:20
// }

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// for(let key in obj){
//   console.log(obj[key])
// }


// const customIterator = (arr) => {
//   let i = 0;

//   return {
//     next() {
//       return {
//         done: i >= arr.length,
//         value: arr[i++]
//       }
//     }
//   }

// }


// console.log(customIterator(arr))
// let iterator = customIterator(arr)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(arr)
// console.log(arr[Symbol.iterator]())
// console.log(obj[Symbol.iterator]())
// let str="Rasel"
// for(let v of str){
//   console.log(v)
// }


let obj = {
  start:0,
  end:5,
  [Symbol.iterator](){
    let i=this.start; 
    return {
      next:()=>{
        return{
          done:i> this.end,
          value: i > this.end ? undefined : i++
        }
      }
    }
  }
}


for(let v of obj){
  console.log(v)
}
// let iterator = obj[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())