import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AboutUsHeader from './AboutUsHeader';
import AboutUsContent from './AboutUsContent';
import DeveloperTitle from '../devs/DeveloperTitle';
import DeveloperList from '../devs/DeveloperList';
import GitHubButton from '../GitHubButton';

const AboutUs = () => {
  return (
    <View style={styles.screen}>
      {/* === About Us Card === */}
      <View style={[styles.innerCard, styles.aboutCard]}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/44266b194b9bf9f71492163fc01f548d2f6f0d58?placeholderIfAbsent=true&apiKey=7e98458e1ebd4fe2966aa367e7a76ffe',
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <AboutUsHeader />
        <AboutUsContent />
      </View>

      {/* === Developers Card === */}
      <View style={[styles.innerCard, styles.devCard]}>
        <DeveloperTitle />
        <DeveloperList />
      </View>

      {/* GitHub Button */}
      <View style={styles.githubButtonWrapper}>
        <GitHubButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  imageContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DA9361',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  image: {
    width: '80%',
    height: '80%',
  },
  innerCard: {
    backgroundColor: '#26262B',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  aboutCard: {
    paddingVertical: 20,
  },
  devCard: {
    paddingVertical: 15,
  },
  githubButtonWrapper: {
    alignItems: 'center',
  },
});

export default AboutUs;
