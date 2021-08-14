let arr = [1, 2, 3, 4];

// function test(){
//     ..
// }
// let test=function(){
//     ..
// }

// let test=(a,b,c)=>{
//     ...
// }

// let result=arr.map((item,index,arr)=>{
//     return item*item
// })

// console.log(typeof result)
let myMap=(arr,cb)=>{
    let newArr=[]
    for(let i=0;i<=arr.length;i++){
        // let result=cb(arr[i],i,arr)
        // if(arr[i]!==undefined){
        //     newArr.push(result)
        // }    
       if(arr[i]!==undefined){
           newArr.push(cb(arr[i], i, arr))
       }   
    }
    return newArr;
}

// let result=myMap(arr,(item,index,arr)=>{
//     return item*item
// })
// let total=myMap(arr,(item,index,arr)=>{
//     return item**3
// })
// console.log(total)


// Filter Function
// let result=arr.filter((item,index,arr)=>{
//     return item%2==0 && item >2;
// })
// console.log(result)

// let myFiler=(arr,cb)=>{
//     let newArry=[]
//     for(let i=0;i<arr.length;i++){
//         if (cb(arr[i], i, arr)){
//             newArry.push(arr[i])
//         }        
//     }
//     return newArry;
// }
// let result=myFiler(arr,(item,index,arr)=>{
//     return item%2===0;
// })
// console.log(result)