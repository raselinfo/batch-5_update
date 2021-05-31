// const date=new Date().getDay();
// if(date===0){
//     console.log("Sunday")
// } else if(date===1){
//     console.log("Monday")
// }else if(date===2){
//     console.log("Tuesday")
// }else if(date===3){
//     console.log("Wednesday")
// }else if(date===4){
//     console.log("Thursday")
// }else if(date===5){
//     console.log("Friday")
// }else{
//     console.log("Saturday")
// }

// // Switch
// switch (date){
//     case 0:{
//         console.log("Sunday")
//         break;
//     }
//     case 1:{
//         console.log("Monday")
//         break;
//     }
//     case 2:{
//         console.log("Tuesday")
//         break;
//     }
//     case 3:{
//         console.log("Wednesday")
//         break;
//     }
//     case 4:{
//         console.timeLog("Thursday")
//         break;
//     }
//     case 5:{
//         console.log("Friday")
//         break;
//     }
//     default :{
//         console.log("Saturday")
//         break;
//     }
// }


// let marks=-80;
// if(marks<0){
//     console.log("Get Out 😲")
// }else if(marks>=80 && marks<=100){
//     console.log("A+")
// } else if(marks>=70 && marks<=79){
//     console.log("A")
// }else if(marks>=60 && marks<=69){
//     console.log("A-")
// }else if(marks>=50 && marks<=59){
//     console.log("B")
// }else if(marks>=40 && marks<=49){
//     console.log("C")
// }else if(marks>=33 && marks<=39){
//     console.log("D")
// }
// else{
//     console.log("Fail")
// }

// Switch
let marks=80;
switch (marks){
    case marks < 0:{
        console.log("Get Out 😲")
        break;
    }
    case (marks >= 80) && (marks <= 100):{
        console.log("A+")
        break;
    }
    case (marks >= 70) && (marks <= 79):{
        console.log("A")
        break;
    }
    case (marks >= 50) && (marks <=59): {
        console.log("B")
        break;
    }
    case (marks >= 40) && (marks <= 49): {
        console.log("C")
        break;
    }
    case (marks >= 33) && (marks <= 39): {
        console.log("D")
        break;
    }
    default :{
        console.log("Fail")
        break;
    }
}
