let raceNumber = Math.floor(Math.random() * 1000);
var isRunner = true;
var isEarly = true;
var ageRunner = 60;

if (isRunner === true) {
  if (isEarly === true && ageRunner > 18){
    raceNumber += 1000;
    console.log(`Early adults run at 9:30 am. Your race number is ${raceNumber}`);
  }
  else if (isEarly === false && ageRunner > 18){
    console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}`)
  }
  else if (ageRunner < 18){
    console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}`)
  }
  else{
    console.log('Please see the registration desk.')
  }
}
else{
  console.log('You are not registered to the race.')
}