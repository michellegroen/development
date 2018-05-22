//Assignment about object
let person = {
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
console.log(person[alarm]);
