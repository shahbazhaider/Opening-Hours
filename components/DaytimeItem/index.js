import * as React from 'react';
import { Text, View } from 'react-native';

//Local Imports
import styles from './styles';
import OpeningHoursData from '../../data/OpeningHoursData.json';
import {
  getHoursOfOperation,
  makeFirstLetterUpperCase,
  todayDay,
} from '../../utilis/helper';

const DayTimeItem = (props = {}) => {
  //Receiving props
  const { day = '' } = props ?? {};
  const isToday =
    String(day).toUpperCase() === String(todayDay()).toUpperCase();

  // Getting opening time string from a JS function
  const openingTime = getHoursOfOperation?.(OpeningHoursData?.[day]) || '00';

  return (
    <View style={styles.container}>
      <Text>
        {makeFirstLetterUpperCase?.(day)}
        <Text style={styles.todayText}> {isToday ? 'Today' : ''}</Text>
      </Text>
      <Text>{openingTime}</Text>
    </View>
  );
};

export default DayTimeItem;
