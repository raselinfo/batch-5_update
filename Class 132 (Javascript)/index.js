const _extends=(Parent,Child)=>{
    Child.prototype=Object.create(Parent.prototype)
    Child.prototype.constructor=Child
}

function Square(width) {
    this.width = width
}
Square.prototype = {
    draw() {
        console.log("I am Draw function")
        console.log(this.width)
    },
    common() {
        console.log("i am common function")
    }
}

const s1 = new Square(50)

_extends(Square, Circle)
Circle.prototype.title = "I am Title"
Circle.prototype.nahid=()=> 5+5

function Circle(radius) {
    //   this.myObj= new Square(50)
    //   this.width={...this.myObj}

    Square.apply(this, [50])
    this.radius = radius
}
const circle1 = new Circle(1.5)

_extends(Circle,Test)
function Test(){
    
}

const t=new Test()