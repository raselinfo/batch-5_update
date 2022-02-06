// let p1 = new Promise((resolve, reject) => {
//     if (false) {
//        return resolve({ name: "Rasel", message: true })
//     }
//     console.log("Hello")
//     reject(new Error("Promise Rejected"))

// })

// p1.then(value => {
//     console.log(value)
// }).catch(e => {
//     console.log(e.message)
// })


// let promise = new Promise(resolve => {
//     setTimeout(resolve, 5000,"One")
// })

// console.log(promise)
// let isGoodRelation = true
// let delay = (second, data) => new Promise((resolve, reject) => {
//     if (isGoodRelation) {

//         return setTimeout(() => resolve(data), second)
//     }

//     return reject(new Error("Sorry I am rejected"))
// })

// let arrPromise = [
//     delay(5000, "I am 5"),
//     delay(2000, "I am 2"),
//     delay(3000, "I am 3"),
//     delay(1000, "I am 1"),
// ]

// Promise.all(arrPromise)
//     .then(value=>console.log(value))
//     .catch(e=>console.log(e.message))

// Promise.race(arrPromise)
//     .then(value=>console.log(value))
//     .catch(e=>console.log(e.message))


// let p1 = Promise.resolve("hello")
// console.log(p1)
// let p1Clone = new Promise(resolve => {

//     setTimeout(()=>resolve("Hello Clone"), 5000)
// })
// console.log(p1Clone)
// let p1 = new Promise((resolve, reject) => {
//     if (false) {
//         setTimeout(resolve.bind(null, "Hello"), 5000)
//     } else {
//         reject(new Error("Promise is rejected"))
//     }
// })

// async function test() {
//     // p1.then(value => console.log(value))
//     //     .catch(e => console.log(e))

//     try {
//         let value = await p1
//         console.log(value)
//     } catch (e) {
//         console.error(e.message)
//     }
// }

// test()


// fetch("https://jsonplaceholder.typicode.com/post")
//     .then(res => res.json())
//     .then(value => console.log(value))
//     .catch(e => console.log(e.message))

// const getData = async () => {
//     try {
//         let res = await fetch("https://jsonplaceholder.typicode.com/posts")
//         let data = await res.json()
//         console.log(data)
//     } catch (e) {
//         console.log(e)
//     }
// }
// getData()