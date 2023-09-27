const marksHeight = 1.69;
const marksWeight = 78;
const johnHeight = 1.95;
const johnWeight = 95;
// const marksHeight = 1.88;
// const marksWeight = 95;
// const johnHeight = 1.76;
// const johnWeight = 85;

 const bmiOfMarks = marksWeight / marksHeight ** 2;
//  console.log(bmiOfMarks);
const bmiOfJohn = johnWeight / johnHeight ** 2;

// const higherBMI = bmiOfMarks > bmiOfJohn;

// console.log(bmiOfJohn, bmiOfMarks, higherBMI);

if (bmiOfMarks> bmiOfJohn) {
    console.log(`Marks BMI ${bmiOfMarks} is higher than Johns ${bmiOfJohn}!`)
  
} else {
    // console.log("johns bmi is higher than marks");
    console.log(`Johns BMI ${bmiOfJohn} is higher than marks ${bmiOfMarks}!`)
}

const FirstName = "Happy";
const job = 'teacher';
const birthYear = 1995;
const year = 2023;
const jonas = "I'm " + FirstName + ", a " + (year - birthYear) + " years old " + job + "!"; 
const jonasNew = `I'm ${FirstName}, a ${year - birthYear} years old ${job}!` ;
console.log(jonas);
console.log(jonasNew);
  
console.log(`String 
with
multiline
code`);
console.log("This \n\ is multiline \n\ code")

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license `);
} else {
    const yearsLeft = 18 - age;
    console.log('sarah cannot start driving she should wait '+yearsLeft+' years');
}
const birthYears = 2008;
let century;
if (birthYears <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// const favourite = Number(prompt("Which is your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite)

const hasGoodDriving = true;
const hasEyeVision = false;
console.log(hasGoodDriving && hasEyeVision);
console.log(hasGoodDriving || hasEyeVision);
console.log(!hasGoodDriving);
 
if (hasGoodDriving &&  hasEyeVision) {
    console.log("Anybody can drive")
} else {
    console.log("Not eligible to drive");
}