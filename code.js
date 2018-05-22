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
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); //using console.log given the variable in a sentence using `...`
//this is the seems technique as with fahrenheit, only a different formula  
let newton = 
    Math.floor(celsius * (33/100));
console.log(newton);

//Assignment about object
/*let person = {
  name: 'Michelle',
  age: 21,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

let day = 'Monday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
};

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);*/

//Assignment about Classes
/*class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name (){
    return this._name;
  }
  
  get department (){
    return this._department;
  }
  
  get remainingVacationDays (){
    return this._remainingVacationDays;
  }
  
  takeVacationDays (daysOff){
    this._remainingVacationDays -= daysOff; 
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics'); 
*/
