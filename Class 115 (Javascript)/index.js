let arr=[1,2,3,4,5]

// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i])
// }

// arr.forEach(function(item,i,arr){
//     console.log(arr)
// })
// let sum=0;
// arr.forEach(function(item){
//    let add=sum+=item;
// })
// console.log(sum)


// function foreach(arr,cb){
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i],i,arr)
//     }
// }

// function sum(){
//     let add=0;
//     foreach(arr,function(item){
//         add=add+item;
//     })

//     return add
// }
// console.log(sum())
// let initialItem=0;
// arr.forEach(function(item){
//     initialItem+=item
// })

// function sub(initialItem,number){
//     return number-initialItem;
// }

// console.log(sub(initialItem,50))

// function foreach(arr,cb){
//     for(let i=0;i<arr.length;i++){
//         cb(arr[i],i,arr)
//     }
// }
// function test(sub){
   
//     let totalAmount=0;
//     foreach(arr, function (item) {
//         totalAmount+=item;
//     })
//     return sub-totalAmount;
// }
// console.log(test(50))

// arr.forEach(function(item,index,arr){
//     arr[index]=item+5
// })

// console.log(arr)
arr.forEach(function(item,index,arr){
    // arr[index]=item+5
    // Math.sqrt(item)
    console.log(item + 5)
})
let result=arr.map(function(item,index,arr){
   return item+5
})
console.log(result)

// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(function(item){
//    return Math.sqrt(item)
// })
// console.log(newArr)
// console.log(numbers)