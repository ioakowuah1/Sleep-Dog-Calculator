//Get hours of night sleep
const getSleepHours = function(day){
    switch (day){
    case "monday":
    return 8;
    break;
    case "tuesday":
    return 7;
    break;
    case "wednesday":
    return 6;
    break;
    case "thursday":
    return 5;
    break;
    case 'friday':
    return 4;
    break;
    case 'saturday':
    return 3;
    break;
    case 'sunday':
    return 2;
    break;
    default:
    console.log('Error!')
    }
  };
  
  //console.log(getSleepHours('monday'));
  
  //const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
   
  
   //console.log(getActualSleepHours());
  
  
  //const getIdealSleepHours = () => {
     //const idealHours = 7.5;
     //return (idealHours * 7);
   //};
  
   const getIdealSleepHours = hours => hours * 7;
  
  
  //console.log(getIdealSleepHours());
  
  const getActualSleepHours = () => 8 + 7 + 4 + 5 + 6 + 8
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours){
      console.log('You got' + ' ' +(idealSleepHours - actualSleepHours) + ' '+ ', the perfect amount of sleep!' )
      } else if (actualSleepHours > idealSleepHours){
        console.log('You got' + ' ' + (idealSleepHours - actualSleepHours)+ '' +', more sleep that needed!')
      } else {
        console.log('You got' + ' ' +(idealSleepHours - actualSleepHours) +' '+ 'should get more sleep!')
      }
  };
  
  calculateSleepDebt();