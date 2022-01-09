// class Circle{
//     constructor(radius,name){
//         this[Symbol()]=radius
//         this[Symbol()]=name;    
this.outerProperty = "nahid"
//     }

//     draw(){
//         console.log(this[Object.getOwnPropertySymbols(this)[0]])
//     }
// }
// const c1=new Circle(20,"rasel")
console.log(c1.outerProperty)
// console.log(c1[Object.getOwnPropertyNames(c1)])
// console.log(c1[Object.getOwnPropertySymbols(c1)[0]])
// console.log(c1[Object.getOwnPropertySymbols(c1)[1]])
// c1.draw()

const _radius = new WeakMap()
const _name = new WeakMap()
const _resize = new WeakMap()

class Circle {
    constructor(radius) {
        this.count = 100
        _radius.set(this, radius)
        _name.set(this, "Rasel")
        _resize.set(this, () => {
            console.log(this.count)
        })
    }

    // getRadius(){
    //     return _radius.get(this)
    // }
    get radius() {
        return _radius.get(this)
    }
    set radius(value) {
        _radius.set(this, value)
    }

}

const c1 = new Circle(12)
c1.radius = 2000
console.log(c1.radius)