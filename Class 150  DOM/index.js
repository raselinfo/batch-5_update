// let ul = document.querySelector('#lists').children
// let lists_2 = document.querySelector("#lists_2");


// [...ul].forEach((item,index)=>{
//     let shalowText=item.innerText
//     item.innerText=`${index+1} ${shalowText}`
// })
let $ = document
const createElement = (tag, className = "", text = "") => {
    let tagName = document.createElement(tag)
    tagName.className = className
    tagName.innerHTML = text
    return tagName
}
// Append Child Function
const appendChild=(children=[],parent)=>{
    children.forEach(child=>{
        parent.appendChild(child)
    })
}
// Create Tow Paragraph
let p1 = createElement("p", "text-primary", "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean risus vulputate habitasse natoque hen.")
let p2 = createElement("p", "text-primary", "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean risus vulputate habitasse natoque hen.")
// Create One Div
let div = createElement("div");
appendChild([p1,p2],div)


// Container Dom Select
let container = $.querySelector(".container-fluid")
container.appendChild(div)