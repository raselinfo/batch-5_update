// Factory Pattern
// function createRect(width,height){
//    let rect={
//        width:width,
//        height:height,
//        draw(){
//            console.log("I am Rectangle")
//            console.log(this)
//            this.printProperties()
//        },
//        printProperties(){
//         console.log("My height is ",this.height)
//         console.log("My width is ",this.width)
//        }
//    } 

//    return rect
// }


// Constructor Pattern
function creatRect(width,height){
    this.width=width;
    this.height=height;
    this.draw=function(){
        console.log("I am Rectangle")
        this.printProperties()
    };
    this.printProperties=function (){
        console.log(this.height)
        console.log(this.width)
    }
}
let rect1=new creatRect(100,60)
rect1.draw()