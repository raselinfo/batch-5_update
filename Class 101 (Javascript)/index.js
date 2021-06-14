// console.log(new Date().toLocaleTimeString())


// setInterval(() => {
//     const hour = new Date().getHours()
//     const minute = new Date().getMinutes()
//     const second = new Date().getSeconds()
//     let amPm="";
//     let currentHour = hour;
//     if(amPm<12){
//         amPm="PM"
//     }else{
//         amPM="AM"
//     }
//     if (hour > 12) {
//         currentHour = hour - 12
//         if(currentHour<10){
//             currentHour = `0${currentHour}`
//         }
//     }

//     console.log(`${currentHour} : ${minute} : ${second} ${amPm}`)
// }, 1000);




// setInterval(()=>{
//     const date = new Date();
//     const hour = date.getHours(); //it's five 24 formate time
//     const minute = date.getMinutes();
//     const second = date.getSeconds();
//     let amPm = ""
//     let currentHour = "";

//     if (hour < 12) {
//         amPm = "AM"
//     }
//     if (hour > 12) {
//         amPm = "PM"
//         currentHour = hour - 12;
//     } 
//     document.write(`
//     <h1 class="time">
//     ${currentHour} : ${minute} : ${second} ${amPm}
//     </h1>
// `)
// },1000)

// for( ; ; ){
//     console.log("infinity loop")
// }

// const n=10;
// const str=`${n}`
// console.log(typeof str)
// console.log(`This \\is \t"string" \n'sin' \n\`rasel\` `)
