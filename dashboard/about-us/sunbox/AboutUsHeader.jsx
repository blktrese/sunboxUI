import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsHeader = () => {
  return (
    <>
      <View style={styles.aboutUsContainer}>
        <Text style={styles.aboutUsText}>About Us</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>SUNBOX</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  aboutUsContainer: {
    marginBottom: 10,
  },
  aboutUsText: {
    color: '#CBB7B7',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 22,
    marginTop: 15,
  },
  titleContainer: {
    marginBottom: 12,
  },
  titleText: {
    color: '#EEBD62',
    fontSize: 47,
    fontWeight: '600',
    lineHeight: 46,
    marginTop: -10,
  },
});

export default AboutUsHeader;
