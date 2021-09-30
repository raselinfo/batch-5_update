let rec = {
    width: 10,
    height: 20,
    print() {
        console.log(this.calculateAre())
    },
    calculateAre() {
        console.log(this)
        return this.width + this.height
    },

}

let another = {
    width: 5, 
    height: 5,
    print:rec.calculateAre()
}
console.log(another.print)