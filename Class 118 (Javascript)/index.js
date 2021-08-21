// let arr=[-100,2,3,4,-500,6,7]

// // let result=arr.reduce((previousValue,currentValue)=>{
// //     console.log(previousValue,currentValue)
// //     return previousValue+currentValue
// // })

// // console.log("Result",res
// // const maximumValue=arr.reduce((previous,current)=>{
// //     console.log(previous,current)
// //     return Math.min(previous, current)
// // },-700)
// // console.log(maximumValue) 

// let myReduce=(arr,cb,acc)=>{
//     for(let i=0;i<arr.length;i++){
//       acc=cb(acc,arr[i])
//     }

//     return acc
// }
// let sum = myReduce(arr,(acc,currentValue)=>{
//     return acc+currentValue
// },0)
// // console.log(sum)
// let max=myReduce(arr,(acc,currentValue)=>{
//     return Math.min(acc,currentValue)
// },0)
// console.log(max)
// let data = [
//     { name: "Orange", price: 50, stock: 5 },
//     { name: "Mango", price: 20, stock: 2 },
//     { name: "Banana", price: 90, stock: 6 },
//     { name: "Jack Fruits", price: 150, stock: 8 },
// ]
// let total = data.reduce((acc, current) => {
//     return acc + current.price * current.stock
// }, 0)
// console.log("Total", total)

let data = [
    { name: "Orange", price: 50, stock: 5 },
    { name: "Mango", price: 20, stock: 2 },
    { name: "Banana", price: 90, stock: 6 },
    { name: "Jack Fruits", price: 150, stock: 8 },
    { name: "Mango", price: 20, stock: 2 }
]

// let mangoItem=data.find((item,index,arr)=>{
//     return item.name==="Mango"
// })
// console.log(mangoItem)

// let result=data.findIndex((item,index,arr)=>{
//     return item.price===50
// })
// console.log(result)
let myFind=(arr,cb)=>{
    let result=""
    for(let i=0;i<arr.length;i++){
        if (cb(arr[i], i, arr)){
            result=i
            break;
        }else{
            result=-1
        }
        
    }
    return result
}
const result = myFind(data,(item)=>{
    return item.price===150
})
console.log(result)
