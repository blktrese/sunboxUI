import React from 'react';
import { View, StyleSheet } from 'react-native';
import DeveloperColumn from './DeveloperColumn';

const DeveloperList = () => {
  const leftColumnNames = [
    'Dinglasan, Lycah Jazel C.',
    'Sanchez, John Carlo D.',
    'Trinidad, RJ Weiland',
  ];

  const rightColumnNames = [
    'Pineda, Gem N.',
    'Rosario, Jon Ken',
    'Sorrera, Gavvryl Shylana L.',

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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
        marginTop: 16,
        marginLeft: 11,
        gap: 9,
  },
});

export default DeveloperList;
