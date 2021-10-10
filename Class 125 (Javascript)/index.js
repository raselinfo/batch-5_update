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
function CreatRect(width,height){
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


// let obj={}

// let obj=new Object()
// console.log(obj.constructor)
// let str=new String("654354")
// console.log(str+"Rasel")
// console.log(new CreatRect().constructor)

// let rect=new Function("width","height",`
//     this.width=width;
//     this.height=height;
//     this.draw=function(){
//         console.log(this.width,this.height)
//     }
// `)

// let newObj=new rect(50,50)

// let obj={
//     name:"Rasel",
//     test(){
//         console.log("Hi")
//     }
// }
// let func=function(a){
//     console.log(this)
// }
// obj["name"]
// obj.test()
// func['apply']


// let func = function (greeting,num1, num2){
//     return {
//         name:this.name,
//         age:this.age
//     }
// }

// let result=func.call({name:"Rasel",age:20},"hello ",5,10)
// console.log(result)
// func.apply({name:"Rasel"},["Hello! ",5,10])
// let newFunc=func.bind({name:"Rasel"})
// newFunc("Hello! ",5,10)
// newFunc("Good Morning, ",5,10)



// let a=5

// let test=function(a){
//     a=a+5
//     console.log(a)
// }
// test(a)
// console.log(a)

let obj={a:5}
function test(obj){
    obj.a=obj.a+5
    console.log(obj)
}
test(obj)
console.log(obj)