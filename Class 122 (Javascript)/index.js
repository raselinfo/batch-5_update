// let width=50;
// let height=4
// const calculateArea=(width,height)=>{
//     return width*height
// }

// const calculateRange=(width,height)=>{
//     return 2*(width+height)
// }

// let area = calculateArea(10,30)
// let area2=calculateArea(5,5)
// let reange=calculateRange(50,30)

let obj={
    width:50,
    height:40,
    calculateArea(){
        return this.width*this.height
    },
}

console.log(obj.calculateArea())

let person={
    firstName:"Rahimd",
    lastName:"Hossain",
    age:30,
    skin:"white",
    gender:"male",
    isJob:false,
    favaoriteColour:['red',"green","orange"],

    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person.fullName())




