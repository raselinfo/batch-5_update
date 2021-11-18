function Extend(Parent,Child){
    Circle.prototype = Object.create(Square.prototype)
    Circle.prototype.constructor = Circle
}
function Square(width) {
    this.width = width
}
Square.prototype = {
    draw: function () {
        console.log("Draw")
        this.getWidth()
    },
    common: function () {
        console.log("i am common function")
    }
}
function Circle(width) {
    Square.prototype.common.call(this)
    Square.call(this, width)
}
Extend(Square,Circle)

Circle.prototype.common=function(){
    console.log("I am Override Common Function")
}


const c1 = new Circle(50)
console.log(c1)