// class Circle {


//     constructor(radius) {
//         this.myRadius = radius;
//         this.myName = "Rasel Hossain"
//     }

//     get radius() {
//         return this.myRadius
//     }
//     // set radius(value) {
//     //     this.myRadius = value
//     // }
//     setRadius(value){
//         this.myRadius=value
//     }
// }

// const c1 = new Circle(50)
// c1.setRadius(100)
// console.log(c1.radius)



// const Shape = require("./Shape");


// class Rectangle extends Shape {
//     constructor(name, width, height) {
//         super(name)
//         this.width = width;
//         this.height = height
//     }
//     draw() {
//         console.log(" I am drawing any kind of Rectangle")
//     }
// }
// const r1 = new Rectangle("RaselOfficial", 50, 100)
// console.log(r1.draw())


// function getData(text) {
//     if (typeof text === "string") {
//         let trimedData = text.trim()
//         console.log(trimedData)
//     } else {
//         throw new Error("Please Enter Valid Text")
//     }
// }
// getData(true)

// function checkNumber(number) {
//     if (!(typeof number === "number")) {
//         throw new Error("Please Enter Valid Number")
//     }
//     let originalNumber = Number.parseInt(number)
//     console.log(originalNumber)
// }
// checkNumber("50")

function getData(text) {
    try {
        let trimedData = text.trim()
        console.log(trimedData)
    } catch (e) {
        // console.error(e.message)
        throw new Error(e.message)
    } finally {
        console.log("I am Finally Bolck")
    }
}
getData(true)