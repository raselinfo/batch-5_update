// let obj={
//     start:0,
//     end:5,
//     [Symbol.iterator]:function* (){
//         let startValue=this.start;
//         while (startValue<=this.end){
//             yield startValue++;            
//         }
//     }
// }

// let generator = obj[Symbol.iterator]()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// function* generator(arr){
// let startValue=0
// while (startValue<=arr.length){
//     yield arr[startValue];
//     startValue++
// }
// for(let i=0;i<=arr.length;i++){
//     yield arr[i]
// }
// arr.forEach(element => {
//     yield element
// });
// for(let i of arr){
//     // yield arr[i]
//     console.log(i)
// }
//     for(let i in arr){
//        yield arr[i]
//     }
// }
// let iterator = generator([1,2,3])
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// let arr = [1, 2, 3, 1, 3, 52, 6, 47, 1]
// let tempArr = []
// for (let i = 0; i < arr.length; i++) {
//     let outerValue = arr[i]
//     for (let j = 0; j < (tempArr.length ? tempArr.length : arr.length); j++) {
//         let innerValue = tempArr[i]
//         console.log(tempArr.indexOf(outerValue), Boolean(tempArr.indexOf(outerValue)))
//         if (tempArr.indexOf(outerValue) === -1) {
//             tempArr.push(outerValue)
//             break
//         }
//     }
// }
// console.log(tempArr)
// let mySet = new Set(arr)
// console.log(mySet)