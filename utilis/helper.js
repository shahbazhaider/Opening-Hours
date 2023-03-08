import moment from 'moment';

//Using moment JS to convert and format the time
export const convertSecondsToTime = (seconds) => {
  //If seconds exists, then converting and formatting the seconds
  if (seconds) {
    const convertedTime = moment()?.startOf('day')?.seconds?.(seconds);
    return convertedTime?.format?.('h:mm A');
  }

  //Else considering as day end
  return '12:00 AM';
};

export const getHoursOfOperation = (dayTime) => {
  let hoursOfOperation = '';

  //As If there is no time, it means the restaurant is closed
  if (!dayTime?.length) {
    return 'Closed';
  }

  //Taking out opened hours of the for each day
  const openHours = dayTime
    ?.filter?.(({ type = '' }) => type === 'open')
    ?.map(({ value = '' }) => value);

  //Taking out closed hours of the restaurant
  const closeHours = dayTime
    ?.filter?.(({ type = '' }) => type === 'close')
    ?.map(({ value = '' }) => value);

  //Checking Open hours exist or not, as we have to start with open hours
  if (openHours?.length) {
    //Looping through the open and close, concatinating the strings for the final output
    openHours?.forEach((openHour, i) => {
      hoursOfOperation +=
        convertSecondsToTime?.(openHour) +
        ' - ' +
        convertSecondsToTime(closeHours?.[i]) +
        (i === openHours?.length - 1 ? '' : ', '); //Checking if the not last item then showing ","
    });
  }

  return hoursOfOperation;
};

//Function to make first letter uppercase
export const makeFirstLetterUpperCase = (title = '') =>
  title?.charAt(0)?.toUpperCase() + title?.slice(1);

//Function to get today day
export const todayDay = () => moment().format('dddd');
