// let h1ById = document.getElementById("heading__one")
// let p = document.getElementsByClassName("para")
// let para = document.getElementsByTagName("p")
// let attr = document.getElementsByName("rasel")

// console.log(attr)

// let h1 = document.querySelector("#heading__one")
// // let p = document.querySelectorAll(".para")
// // let p = document.getElementsByClassName("para")
// let para = document.querySelectorAll("p")
// let attr = document.querySelectorAll("[name='rasel']")
// console.log(attr)




// let li = document.getElementsByClassName("list__items")
// let listItem=document.querySelectorAll(".list__items")
// console.log(li.childNode)
// console.log(listItem)

// let ul = document.getElementById("ul__parent")
// // let ulQuery = document.querySelector("#ul__parent")
// // console.log(ul.children)
// // console.log(ulQuery.childNodes)
// console.log(ul.lastElementChild)

// let ul = document.querySelector("#ul__parent")
let lis = document.querySelectorAll(".list__items")
// console.log(Array.prototype.slice.apply(lis))
let newList=[...lis]

newList.forEach((element, index) => {
    let textNode = element.innerText
    lis[index].innerText = `${index} ${textNode}`
});