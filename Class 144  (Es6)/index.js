// let base_url = "https://jsonplaceholder.typicode.com/posts"
// let xhr = new XMLHttpRequest()
// xhr.open("GET", base_url)

// xhr.onreadystatechange=()=>{
//     if(xhr.readyState===4 && xhr.status===200){
//         let res = JSON.parse(xhr.response)
//         console.log(res)
//     }else{
//         throw new Error("Data Not Found")
//     }
// }

// xhr.send()

// const getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest()
//     xhr.open("GET", url)

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             let res = JSON.parse(xhr.response)
//             cb(null, res)
//         } else {
//             cb("Data Not Found", null)
//         }
//     }

//     xhr.send()
// }

// getRequest(base_url, (err, res) => {
//     if (err) {
//         throw new Error(err)
//     }
//     console.log(res)
// })


// let arr = [1, 2, 3, 4]
// function asyncMap(arr,cb){
//     return arr.map(v=>{
//         setTimeout(()=>cb(v),100)
//     })
// }
// asyncMap(arr,(v)=>{
//     console.log(v)
// })

// let p1 = new Promise((resolve,reject)=>{
//     if(5===6){
//         setTimeout(resolve.bind(null, "I am calling"),2000)
//     }
//     else{
//         reject(new Error("Not Found"))
//     }
// })
// p1.then((value)=>{
//     console.log(value)
// }).catch((e)=>{
//     console.log(e.message)
// })
// let exam = "fail"
// let getLaptop = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (exam === "pass") {
//             let result = "You have got a laptop"
//             resolve(result)
//         } else {
//             reject(new Error("You have failed in the exam"))
//         }
//     }, 2000)

// })

// getLaptop.then((value)=>{
//     console.log(value)
// }).catch((e)=>{
//     console.log(e.message)
// })

// let getLaptop = (result) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (result === "pass") {
//                 let result = "You have got a laptop"
//                 resolve(result)
//             } else {
//                 reject(new Error("You have failed in the exam"))
//             }
//         }, 2000)

//     })
// }
// getLaptop(exam).then((val) => {
//     console.log(val)
// }).catch((err) => {
//     console.log(err.message)
// })