import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../dashboard/ccrecord/Header'; // Your shared header component
import AboutUs from './AboutUs'; // The component you shared

const AboutScreen = () => (
  <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      <AboutUs />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#212124' },
  content: { flex: 1, padding: 50 },
});

export default AboutScreen;
