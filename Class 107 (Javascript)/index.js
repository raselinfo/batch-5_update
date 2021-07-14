// const arr=[1,2,3,4,5,6]
// arr.splice(3,0,"rasel","rabina")
// arr.pop()
// arr.shift()
// console.log(arr)

let database=[1,6,23,37,347,8346,23,6,77,856];
let usrData=77;
// let isFound=false;
// for(let i=0;i<=(database.length-1);i++){
//     let currentData=database[i];
//     if(currentData===usrData){
//         console.log("Data is Found!")
//         isFound=true;
//         break;
//     }
// }

// while(!isFound){
//     console.log("Data is not found!");
//     break;
// }
// if(!isFound){
//     console.log("Data is not found!")
// }



// let firstArr=[
//     [1,2,3,4,5],
//     ["Apple","Orange","Mango"],
//     "cars",
//     ["computer","Laptop","Mobile"]
// ]

// console.log(firstArr[0][3])
// console.log(firstArr[1][(firstArr[1].length-1)])

// var arr=[
//    [29,60,70,54],
//    [29,60,70,54],
//    [29,60,70,54]
// ]

// for(let i=0;i<=(arr.length-1);i++){
//     for(let j=0;j<=(arr[i].length-1);j++){
//         console.log(arr[i][j])
//     }
// }
// for(let i=0;i<=(arr.length-1);i++){
//     let currentItem=arr[i];
//     let str="";
//     let numberStr=""
//     for(let j=0;j<=(currentItem.length-1);j++){
//         numberStr=numberStr+currentItem[j]+" "
//     }
//  str=str+`Element ${i} : ${numberStr}`
//     console.log(str)
// }
// arr[0][6][4]

let arr=[
    ["*"],
    ["*","*"],
    ["*","*","*"],
    ["*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*","*"],
    ["*","*","*","*","*","*","*"],
   
];
for(let i=0;i<(arr.length-1);i++){
    let str="";
    for(let j=0;j<=(arr[i].length-1);j++){
        str+=arr[i][j]
    }
    console.log(str)
}
