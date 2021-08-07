// function sqr(n){
//     return n*n
// }

// console.log(sqr(3))
// console.log(sqr(5))
// console.log(sqr(3))

// let a=10;
// function test(){
//     a=20;
// }
// test()
// console.log(a)

// const arr=[1,2,3,4,5]
// function test(){
//     return arr.push("inside the function")
// }
// test()
// console.log(arr)

// let point={
//     x:45,
//     y:30
// }
// function printPoint(obj){
//     obj.x=100;
//     obj.y=70,
//     obj.a="New A"
// }
// printPoint(point)
// console.log(point)


// function test(){
//     return 5+5;
// }
// let test2=test
// console.log(typeof test2())

// const sample=[]
// sample.push(test)

// console.log(sample[0]())
// const obj={
//     a:10,
//     b:test
// }
// console.log(obj.b())
// const obj={
//     a:10,
//     funct:function(a,b){
//         return a+b;
//     },
//     test(){
//         return "this is test function"
//     }
// }
// console.log(obj.funct(5,5))
// console.log(obj.test())



// setTimeout(function(){
//     console.log("Inside another function")
// },1000)


function add(a,b){
    return a+b;
}
function test(add){
    let a=10;
    let b=10;
    let c=a+b;
   return function (){
        let d = add(a,b) + c;
        return d;
    }
    
}
// test(add)
console.log(test(add)())