//my age
var myAge = 32;
//first two years of a dog's life
var earlyYears = 2;
//dog years for first two years
earlyYears *= 10.5;

//rest of age in dog years
let laterYears = myAge - 2
//every year after is 4 dog years
laterYears *= 4;
//print test to check variables
console.log(earlyYears)
console.log(laterYears)

//age in dog years
let myAgeInDogYears = earlyYears + laterYears

//string method to lowercase
var myName = 'Lindsay Wheeler'.toLowerCase();

//print string with variables inserted
console.log(`My name is ${myName}. I am ${myAge} years old which is ${myAgeInDogYears} years old in dog years.`)