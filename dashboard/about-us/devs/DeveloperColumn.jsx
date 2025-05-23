import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeveloperColumn = ({ names, color }) => {
  return (
    <View style={styles.container}>
      {names.map((name, index) => (
        <Text key={index} style={[styles.text, { color }]}>
          {name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    fontSize: 9,
    fontWeight: '600',
    lineHeight: 15,
    marginBottom: 4,
  },
});

export default DeveloperColumn;
