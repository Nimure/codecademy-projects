let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 19;

//checking whether runner is an adult and registered early
if(registeredEarly && runnerAge >= 18){
  raceNumber += 1000;
}
/*print to test code 
console.log(raceNumber); */

if(registeredEarly && runnerAge > 18){
  console.log(`You will race at 9:30am. Your race number is ${raceNumber}.`);
} else if(!registeredEarly && runnerAge > 18){
  console.log(`You will race at 11:00am. Your race number is ${raceNumber}.`);
} else if(runnerAge < 18){
  console.log(`Youth registrants run at 12:30 pm (regardless of registration). Your race number is ${raceNumber}`)
} else {
  console.log('Please see the registration desk for your race number and start time.')
}
