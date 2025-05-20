import React from 'react';
import { View, StyleSheet } from 'react-native';
import DeveloperColumn from './DeveloperColumn';

const DeveloperList = () => {
  const leftColumnNames = [
    'Dinglasan, Lycah Jazel',
    'Facinal, Keith Ashlee',
    'Frando, Kyle',
    'Maala, Kim Ivan',
    'Pilar, Ana Marie',
  ];

  const rightColumnNames = [
    'Pineda, Gem',
    'Rosario, Jon Ken',
    'Sanchez, John Carlo',
    'Sorrera, Gavvryl Shylana',
    'Trinidad, RJ Weiland',
  ];

  return (
    <View style={styles.container}>
      <DeveloperColumn names={leftColumnNames} color="#B0A1A1" />
      <DeveloperColumn names={rightColumnNames} color="#B5AAAA" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 11,
    gap: 9,
  },
});

export default DeveloperList;
