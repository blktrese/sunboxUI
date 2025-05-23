import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeveloperTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DEVELOPERS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  text: {
    color: '#EEBD62',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 14,
  },
});

export default DeveloperTitle;
