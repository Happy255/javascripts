
            
            // const averageOfDolphin = (97 + 112 + 101)/3;
            // const averageOfKoalas = (109 + 95 + 123) / 3;
            // const averageOfKoalas = (88 + 91 + 110) / 3;
            // const averageOfDolphin = (96 + 108 + 89)/3;
const averageOfDolphin = (97 + 112 + 101)/3;
const averageOfKoalas = (109 + 95 + 106) / 3;

console.log(averageOfKoalas,averageOfDolphin);

if (averageOfDolphin > averageOfKoalas && averageOfDolphin >= 100) {
    console.log("Dolphin team is winner")
} else if(averageOfKoalas>averageOfDolphin&&averageOfKoalas>=100){
    console.log("Koalas team is the winner")
} else if (averageOfDolphin === averageOfKoalas && averageOfDolphin>=100 && averageOfKoalas>=100) {
    console.log("both team is winner")
} else {
    console.log("no one wins trophy")
}


// console.log(averageOfKoalas, averageOfDolphin);

// if (averageOfDolphin > averageOfKoalas) {
//     console.log("Dolphin team is winner")
// } else if(averageOfKoalas>averageOfDolphin){
//     console.log("Koalas team is the winner")
// } else if (averageOfDolphin === averageOfKoalas) {
//     console.log("both team is winner")
// }