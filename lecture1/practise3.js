
const bill = 400;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    
    console.log(`Bill is  ${bill}, tip is  ${tip} ,total amount ${bill+tip}`)
// console.log(tip);
// if (bill >= 50 && bill <= 300) {
//     console.log(`Bill amount is ${bill+tip}`)
// } else {
//     console.log(`Bill amount is ${(bill+tip)*0.2}`)
// }