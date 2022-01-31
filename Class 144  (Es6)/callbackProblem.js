let base_url = "https://jsonplaceholder.typicode.com/posts"

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

//     getRequest(`${base_url}/1`, (err, res) => {
//         if (err) {
//             throw new Error(err)
//         }

//         getRequest(`${base_url}/2`, (err, res) => {
//             if (err) {
//                 throw new Error(err)
//             }
//             console.log(res)
//         })
//     })
// })

// fetch(`${base_url}/1`)
//     .then((res) => {
//         return res.json()
//     })
//     .then((value)=>{
//         console.log(value)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// fetch()
// http request
// https status code
