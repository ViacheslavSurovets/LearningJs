const getSleepHours = day => {
 let result;
  switch(day){
    case '1':  result = 8;
    break;
    case '2': result =8;
    break;
    case '3': result =8;
    break;
    case '4': result =8;
    break;
    case '5': result =8;
    break;
    case'6':result = 8;
    break;
    case '7':result = 8;
    break;
    default:result ='error'
    break;}
  return result;
}


const getActualSleepHours = () => {
  let sum = getSleepHours('1')+
    getSleepHours('2')+
    getSleepHours('3')+
    getSleepHours('4')+
    getSleepHours('5')+
    getSleepHours('6')+
    getSleepHours('7');
return sum;

}


const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDept = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
if(actualSleepHours === idealSleepHours){
  console.log('Fine!')
} else if(actualSleepHours > idealSleepHours){
  console.log('You sleep too much!')
} else {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')
}

}

calculateSleepDept();
