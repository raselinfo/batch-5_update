// var a = 100;
// // newPrint(a) 
// print(10)
// var newPrint = print;
// newPrint(45)
// function print(a) {
//     console.log(a)
// }
// print(a)
// Creational Context
/*
    a=undefined
    .
    .
    newPrint=undefined
    print=ref
*/
// Executional Context
/*
    a=100
    newPrint=ref
*/

// const test =function (){

// }

// test=ref



// abc()
// function abc() {
//     console.log("I am Function")
// }

// newAbc();
// var newAbc = function () {
//     console.log("I am New ABC Function")
// }
// newAbc()
// Creational Phase
/*
    abc=ref
    newAbc()=undefined
*/
// Executional Phase
/*
  I am Function
  I am New Abc function


*/


// var a = 11;

// function A() {
//     var b = 12;
//     function B() {
//         var c = 23;
//         console.log(c)
//     }

//     function C() {
//         var d = 56;
//         console.log(d);
//     }
//     console.log(b)
//     // D(b)
//     B()
//     C()
// }
// A()



abc()
function abc() {
    console.log("I am Function")
}

newAbc();
var newAbc = function () {
    console.log("I am New ABC Function")
}
newAbc()        