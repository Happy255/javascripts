const day = "sunday";
switch(day){
    case "monday":
        console.log("Prepare list for coding")
        break;
    case "tuesday":
        console.log("Prepare new ideas ")
        break;
    case "wednesday":
    case "thursday":
        console.log("Do codings")
        break;
    case "friday":
        console.log("Test the code")
        break;
    case "saturday":
        console.log("Deployment")
        break;
    case "sunday":
        console.log("Weekend")
        break;
    default:
        console.log("Wrong day choosen")
}

const days = "tuesday";
if (days === "monday") {
    console.log("prepare list for coding")
} else if (days === "tuesday") {
    console.log("Prepare new ideas ")
} else if (days === "wednesday" || days === "thursday") {
    console.log("Do codings")
} else if (days === "friday") {
     console.log("Test the code")
} else if (days === "saturday") {
    console.log("Deployment")
} else if (days === "sunday") {
    console.log("Weekend")
} else {
    console.log("wrong days choosen")
}
//ternary operator
const age = 24;
// age >= 18 ? console.log("I like to drink beer") : console.log("I want to drink water");

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I would like to drink ${age >= 18 ? 'wine' : 'water'}`);