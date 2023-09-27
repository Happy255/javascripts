'use strict'
function logger() {
    console.log('My name is happy kumar')
}
logger();
logger();  

// function juiceProcessor(apples, oranges) {
    
//     const juice = `Juice is made with ${apples} apples and ${oranges} oranges`
//     return juice;
// }
// const appleJuice = juiceProcessor(3, 5);
// console.log(appleJuice);
// const orangeJuice = juiceProcessor(0, 6);
// console.log(orangeJuice);

//function declaration
// function calcAge(birthYear) {
  
//     return 2023 - birthYear;
// }
const age1 = calcAge(1998);

//function expression
const caclAge2 = function (birthYear) {
    return 2037 - birthYear;

}
const age2 = caclAge2(1998);
console.log(age1,age2);

//Arrow function
const calcAge3 = birthYear => 2023 - birthYear
const age3=calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = (birthYear , name)=> {
//     const age = 2023 - birthYear;
//     const retirement = 60 - age;
//     return `${retirement} years are remaining for retirement ${name} `;
// }
// console.log(yearsUntilRetirement(1997, 'Happy'));   
// console.log(yearsUntilRetirement(1998, 'Visu'));
// console.log(yearsUntilRetirement(1999, 'Vishal'));
// console.log(yearsUntilRetirement(2000, ' Vikash'));
 
// function inside a function
function cutPieces(fruits) {
    return fruits * 4;
}
const  juiceProcessor=function (apples, oranges) {
    const applepeice = cutPieces(apples);
    const oragnepeice = cutPieces(oranges);
    
    const juice = `Juice is made with ${applepeice} apples and ${oragnepeice} oranges`
    return juice;
}

console.log(juiceProcessor(2, 6))




function calcAge(birthYear) {
  
    return 2023 - birthYear;
}
const yearsUntilRetirement =function (birthYear , name){
    const age = calcAge(birthYear);
    const retirement = 60 - age;

    if (retirement > 0) {
        
        console.log(`${retirement} years are remaining for retirement ${name} `);
        return retirement;
    } else {
        console.log(`${retirement} years are remaining for retirement ${name} `);
        return -1;
    }
}
console.log(yearsUntilRetirement(1997, 'Happy')); 
console.log(yearsUntilRetirement(1998, 'Mike')); 
console.log(yearsUntilRetirement(1998, 'john')); 