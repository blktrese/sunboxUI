import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsContent = () => {
  return (
    <>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Sunbox is a solar-powered charging station with an associated mobile application that enables predictive maintenance.
        </Text>
      </View>
      <View style={styles.thesisContainer}>
        <Text style={styles.thesisText}>
          Developed for the thesis entitled{' '}
          <Text style={styles.thesisTitleText}>
            Enhanced Sunbox: Predictive Maintenance and Energy Optimization for Solar-Powered Charging Stations
          </Text>
          , in partial fulfillment of the requirements for BS in Computer Science, Cavite State University - Silang Campus.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    marginBottom: 12,
  },
  descriptionText: {
    color: '#CBB7B7',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  },
  thesisContainer: {
    // No flexDirection here, default is column
  },
  thesisText: {
    color: '#CBB7B7',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  },
  thesisTitleText: {
    color: '#EEBD62',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  },
});

export default AboutUsContent;
