const person={
    name:"Rasel"
}

console.log(person.toString())

for(let i in person){
    console.log(i)
}

console.log(Object.keys(person))


let descriptor=Object.getOwnPropertyDescriptor(person,"name")

console.log(descriptor)