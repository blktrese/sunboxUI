import React from 'react';
import { View, StyleSheet } from 'react-native';
import AboutUsHeader from './AboutUsHeader';
import AboutUsContent from './AboutUsContent';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer} />
        <View style={styles.contentWrapper}>
          <AboutUsHeader />
          <AboutUsContent />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: 358,
    height: 440,
    borderRadius: 9,
    overflow: 'hidden',
    backgroundColor: '#2F2E34',
  },
  imageContainer: {
    width: 322,
    height: 107,
    marginTop: 21,
    marginRight: 18,
    marginBottom: 21,
    marginLeft: 18,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  contentWrapper: {
    paddingHorizontal: 26,
  },
});

export default AboutUs;
