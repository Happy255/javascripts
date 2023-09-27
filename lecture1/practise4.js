// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));
// //Test1
// // const scoreDolphins = calcAverage(44, 23, 71);
// // const scoreKoalas = calcAverage(65, 54, 49);

// //Test2
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23,34,27);
// console.log(scoreDolphins, scoreKoalas);
// const checkWinner = function (avgDolphins, avgKoalas) {
// if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Team dolphins win (${avgDolphins} vs ${avgKoalas})`);
// } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Team Koalas is win (${avgKoalas} vs ${avgDolphins})`);
// } else {
//     console.log(`Both teams loose`);
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(200, 300, 200); 
const scoreKoalas = calcAverage(100, 140, 160);
console.log(scoreDolphins, scoreKoalas);

const winner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Team Dolphins Wins (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Team Koalas Wins (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log(`Both team Loose`);
    }

}
winner(scoreDolphins, scoreKoalas);