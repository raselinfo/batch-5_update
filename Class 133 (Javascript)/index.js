let canWalk={
    wak(){
        console.log("i am walking....")
    }
}

let canSwim={
    swim(){
        console.log("i am Swimming")
    }
}
let canPlay={
    play(){
        console.log("I am playing")
    }
}


// let p1 = { ...canWalk, ...canSwim}
// let p1 = Object.assign([], canWalk, canSwim)

// let p2=Object.assign({},canWalk,canPlay)
function Mixin(target,...sources){
    Object.assign(target, ...sources)
}
function Person(name="test"){
    this.name=name
}


Mixin(Person.prototype, canWalk, canPlay)
let nahid=new Person("Nahid")

function Student(name="test"){
    this.name=name
}

const st1=new Student("Rasel")