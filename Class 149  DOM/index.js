// let p = document.createElement("p")
// // p.innerText="Hello"
// // p.style.background="red"
// // p.classList=["lead mono"]
// // console.log(p.className.includes("lead"))
// // p.innerText = "Lorem ipsum dolor sit amet."
// p.innerHTML="Hello"
// let div = document.createElement("div")
// div.appendChild(p)
// div.className = "my__div"


// let body = document.getElementsByTagName("body")[0]

// body.appendChild(div)
// let h1 = document.createElement('h1')
// h1.innerHTML = "Hello World"
// body.appendChild(h1)



// const createElement = (tagName, className = "", content = "") => {
//     let tag = document.createElement(tagName)
//     tag.className = className
//     tag.textContent = content

//     return tag
// }
// let p1 = createElement('p', 'para', "Lorem ipsum dolor sit amet.")
// let p2 = createElement('p', 'para', "Lorem ipsum dolor sit amet.")

// let div = createElement("div");

// let append = (parent, childs) => {
//     childs.forEach(child => parent.appendChild(child))
// }
// append(div, [p1, p2])

// let body = document.getElementsByTagName("body")[0]

// append(body,[div])


// let lists = document.querySelector("#lists")
// let li = document.createElement("li")
// li.innerText = "item 3"

// lists.insertAdjacentElement("beforebegin",li)
// let selectLi = lists.children[1]
// selectLi.insertAdjacentElement("beforeend",li)



// let lists = document.querySelector("#lists").children[0]
// lists.remove()



// let h1 = document.createElement("h1")
// h1.innerText = "Hello World"

// let body = document.querySelector("#body")

// body.appendChild(h1)


// let cloneH1 = h1.cloneNode(true)
// body.appendChild(cloneH1)

let ul = document.querySelector("#lists");
// console.log(heading.attributes)
// console.log(heading.getAttribute("data-my__data"))
// heading.getAttributeNames().forEach(attr => console.log(heading.getAttribute(attr)))
// console.log(heading.getAttributeNode("class"))
// console.log(heading.id)

// heading.className="my name"
// heading.setAttribute("title", "This is heading")

// let attr = document.createAttribute("title")
// attr.value="I am Title"

// heading.setAttributeNode(attr)
let nodeStyle = {
    color: "black",
    background: "red",
    margin: "5px"
};

[...ul.children].forEach(child => Object.assign(child.style, nodeStyle))
