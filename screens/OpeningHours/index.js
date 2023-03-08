import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

//Local Imports
import styles from './styles';
import { localText } from '../../utilis/localText';
import DayTimeItem from '../../components/DaytimeItem';
import OpeningHoursData from '../../data/OpeningHoursData.json';

const OpeningHours = () => {
  //Header
  const renderHeader = () => {
    return (
      <View style={styles.titleContainer}>
        <MaterialCommunityIcons name="clock-outline" size={20} color="grey" />
        <Text style={styles.titleStyle}>{localText.openingHours}</Text>
      </View>
    );
  };

  //Function to show Open time list

  //Using Object.keys to take the keys and then mapping it on the custom component
  const renderTimmingsList = () =>
    Object?.keys(OpeningHoursData)?.map((day) => <DayTimeItem day={day} />);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {renderHeader()}
        {renderTimmingsList()}
      </View>
    </SafeAreaView>
  );
};

export default OpeningHours;
