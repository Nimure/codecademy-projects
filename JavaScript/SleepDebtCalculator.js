// function to get sleep hours for each night
const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 9;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 7;
      break;
   default:
      return 'Not a valid day of the week!'
    }
  };
  
  // console.log(getSleepHours('TuesdaY'));
  
  //function to get total sleep hours
  const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('tuesday') + getSleepHours('Wednesday') + getSleepHours('thursday') + getSleepHours('Friday') + getSleepHours('saturday') + getSleepHours('sunday')
    return 
  };
  
  // console.log(getActualSleepHours());
  
  // function for ideal sleep hours
  const getIdealSleepHours = () => {
    idealHours = 8
    return (idealHours * 7)
  };
  
  //console.log(getIdealSleepHours());
  
  // function to calculate sleep debt and print statements
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep!")
    }
    if (actualSleepHours > idealSleepHours) {
      console.log('You got more than enough sleep by ' + (actualSleepHours - idealSleepHours) + ' hours!');
    }
    if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest!');
    }
  };
  
  calculateSleepDebt();