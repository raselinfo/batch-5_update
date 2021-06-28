// const arr=["Rasel","Nahid","Rabina","Sakib","Mustafiz"]
// document.write(`
// <table class="table">
// <tr>
// <th>Name</th>
// </tr>
// `)

// for(let i=0;i<=arr.length;i++){
//     let item=arr[i]
//     if(item!==undefined){
//         document.write(`
//         <tr>
//             <td>${item}</td>
//         </tr>
//     `)
//     }
// }
// document.write("</table>")


// let numbers=[1,2]
// let i=0;
// let sum=0;
// while (i <= numbers.length){
//     if(numbers[i] !==undefined){
//         sum = sum + numbers[i];
//     }  

//     i++;
// }

// console.log(sum)

// let arr=[1,2,3,4,5,6]
// for(let i=0;i<=(arr.length-1);i++){
//     // if(arr[i]!==undefined){
//     //     // arr[i] = arr[i] + 2;
//     //     arr[i]+=2
//     // }   
//     arr[i] += 2
// }
// console.log(arr)

const arr=[1,2,3,4,5,6,7,8,9,10]
let sum=0;
for (let i = 0; i <= (arr.length-1);i++){
    let item=arr[i];
    // sum+=item
    console.log(`${sum} + ${item} = ${sum+=item} `)
}