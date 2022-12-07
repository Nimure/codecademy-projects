//the forecast 'today' is 293 Kelvin
const kelvin = 293;
//convert kelvin to celsius
let celsius = (kelvin - 273);
//convert celcius to farenheit
let fahrenheit = (celsius * (9/5) + 32);
//this code rounds down the temp to an integer
fahrenheit = Math.floor(fahrenheit);
//printing the temp in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//converting to Newton
let newton = (celsius * (33/100));
//rounding
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)