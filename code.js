//below shows de variable kelvin with a variable type 294
let kelvin = 294;
console.log(kelvin);
//within the variable celsius I am substracting kelvin with 273, creating the value of celsius.
let celsius = 
    kelvin -= 273;
console.log(celsius);
//given the formula for fahrenheit and using math.floor rounding up the value    
let fahrenheit = 
    Math.floor(celsius * (9/5)+32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = 
    Math.floor(celsius * (33/100));
console.log(newton);