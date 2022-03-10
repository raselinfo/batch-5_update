// let lists = document.querySelector("#lists");
// let style = {
//     background: "red",
//     color: "#000",
//     fontSize: `${50}px`
// };
// [...lists.children].forEach(el => {
//     // el.style.background="red";
//     // el.style.color="white"
//     // console.log(el.style=style)
//     Object.assign(el.style, style)
// })

// let body = document.querySelector("#body")
// let btn = document.querySelector("#btn")
// btn.className = "btn btn-primary"

// btn.onclick = function () {
//     console.log(this)
// }

// body.onclick = function () {
//     console.log(this)
// }


// btn.addEventListener("click",function(){
//     console.log(this)
// })
// body.addEventListener("click",function(){
//     console.log(this)
// })


// let bottom__to__top = document.querySelector(".bottom__to__top")

// window.onscroll=()=>{
//     console.log("hello")
// }
// window.addEventListener("scroll",function(){
//     let screenSize=Math.round(this.scrollY)
//     if(screenSize>=600){
//         bottom__to__top.style.display="block"
//     }else{
//         bottom__to__top.style.display="none"
//     }
// })

// let btn = document.querySelector("#btn")

// btn.addEventListener("click",function(e){
//     console.log(e.target.value)
// })

// let btn = document.querySelector("#btn")
// let list = document.querySelector("#lists")


// btn.addEventListener("click", function () {
//     let newItem = document.createElement("li")
//     newItem.innerText="Hello"

//    list.appendChild(newItem)

// })

let inputBox = document.querySelector("#input")
let lists = document.querySelector("#lists")
// const addEvent = () => {
//     ;[...lists.children].forEach(el => {
//         el.addEventListener("click", function (e) {
//             e.target.remove()
//         })
//     });

// }

inputBox.addEventListener("keypress", function (e) {
    let inputValue = e.target.value
    let li = document.createElement("li")
    if (e.key === "Enter") {
        li.innerText = inputValue
        lists.appendChild(li)
        e.target.value = ""
    }
});

lists.addEventListener("click", function (event) {
    // this.contains(event.target)
    if(this.contains(event.target)){
        event.target.remove()
        // event.target.addEventListener("click",function(e){
        //     e.target.remove()
        // })
    }
})

// ;[...lists.children].forEach(el => {
//     el.addEventListener("click", function (e) {
//        console.log( e.target)
//     })
// });
// window.addEventListener("load",function(){
//     addEvent()
// })