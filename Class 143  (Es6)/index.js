// AJAX
// JSON
// let xhr = new XMLHttpRequest()
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.response)
//     }else{
//         console.log(xhr.status)
//     }
// }
// xhr.send()

// let getHttpRequest=(url,callback)=>{
 
//     let xhr=new XMLHttpRequest()
//     xhr.open("get", url)
//     xhr.onreadystatechange=()=>{
       
//         if(xhr.readyState===4 && xhr.status===200){
//             let res=xhr.response
//             callback(null,res)
//         }else{
//             console.log("error")
//             callback(xhr.status,null)
//         }
//     }
//     xhr.send()
// }
// getHttpRequest("https://jsonplaceholder.typicode.com/posts",(error,res)=>{
   
//     if(error){
//         throw new Error(error)
//     }else{
//        return res
//     }
// })
// console.log(result)

let arr=[1,2,3,4,5]
let result=arr.map(value=>{
    return value
})
console.log(result)

// HTTP STatus code
// AJAX  