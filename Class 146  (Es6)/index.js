// let myAsyncIterator = {
//     [Symbol.asyncIterator]() {
//         let to = 0;
//         let from = 5

//         return {
//             next() {
//                 if (to < from) {
//                     return Promise.resolve({
//                         value: to++,
//                         done: false
//                     })
//                 }
//                 return Promise.resolve({
//                     done: true
//                 })
//             }
//         }
//     }
// };
// let iterable = myAsyncIterator[Symbol.asyncIterator]();


// (async () => {
//     console.log(await iterable.next())
//     console.log(await iterable.next())
//     console.log(await iterable.next())
//     console.log(await iterable.next())
//     console.log(await iterable.next())
//     console.log(await iterable.next())
//     console.log(await iterable.next())
// })()

// (async ()=>{
//     for await (let value of myAsyncIterator) {
//         console.log(value)
//     }
// })()

// function* asyncGenerator() {
//     let to = 0;
//     let from = 5;
//     while (true) {
//         if (to > 5) return
//         yield Promise.resolve(to++)
//     }
// };

// (async () => {
//     for await (let value of asyncGenerator()) {
//         console.log(value)
//     }
// })()