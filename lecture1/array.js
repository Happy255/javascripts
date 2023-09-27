// const friend1 = 'Vishal';
// const friend2 = 'Vikash';
// const friend3 = 'Sagar';

const friends = ['Vishal', 'Vikash', 'sagar'];
console.log(friends);
console.log(friends.length);

//const variable never be changed here we mutate the array
friends[1] = 'binod';
friends[3] = 'Subham';
console.log(friends);
const firstName = 'Happy';
const Jonas = [firstName, 'Kumar', friends, friends.length, 2023 - 1998, 'Student'];
console.log(Jonas);
console.log(Jonas.length);

//Another representation of array
const year = new Array(1998, 2000, 1890, 2030);
console.log(year);
 
const calcAge = function (birthyear) {
    return 2023 - birthyear;
}
const years = [1998, 1995,1994, 1992, 1991];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1,age2,age3);

//We can also make the new array of ages and call the function in the array
const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);

console.log("From here today");
const students = ['Happy','Archana','Rahul', 'Sagar', 'Vikash'];
// console.log(students);
const newLength = students.push('jay');
students.unshift('Sumit');
students.pop();
students.shift();
const popped = friends.pop();
console.log(newLength, students);
// console.log(popped);

console.log(students.indexOf("Happy")); 
console.log(students.indexOf("Archana")); 
console.log(students.indexOf("Gautam")); 
console.log(students.includes("Archana")); 
console.log(students.includes("Happy")); 
console.log(students.includes("Gautam"));  

//Gautam is not in the array so it cant be print
if (students.includes('Gautam')) {
    console.log('Gautam is a student');
}
//Happy is a student printed on console
if (students.includes('Happy')) {
    console.log('Happy is a student');
}