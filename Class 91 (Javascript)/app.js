

// Switch
let marks = 0;
switch (marks) {
    case marks === 0: {
        console.log("Get Out 😲")
        break;
    }
    case (marks >= 80) && (marks <= 100): {
        console.log("A+")
        break;
    }
    case (marks >= 70) && (marks <= 79): {
        console.log("A")
        break;
    }
    case (marks >= 50) && (marks <= 59): {
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
    default: {
        console.log("Fail")
        break;
    }
}
