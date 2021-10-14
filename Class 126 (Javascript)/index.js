const Reactangle = function (width, height) {
    let position = {
        width: width,
        height: height
    }
//    this.getPosition=()=>{
//        return position;
//    }
Object.defineProperty(this,"getPosition",{
    get(){
        return position;
    },
    set(value){
        position=value
    }
})
    
}

let rect1 = new Reactangle(10, 5)
// rect1.getPosition.set = { width: 1000, height: 9000 }
console.log(rect1.getPosition)