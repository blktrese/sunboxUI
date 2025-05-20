import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import DeveloperTitle from './DeveloperTitle';
import DeveloperList from './DeveloperList';

const DevInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <DeveloperTitle />
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/44266b194b9bf9f71492163fc01f548d2f6f0d58?placeholderIfAbsent=true&apiKey=7e98458e1ebd4fe2966aa367e7a76ffe' }}
          style={styles.image}
          resizeMode="contain"
        />
        <DeveloperList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 358,
    alignItems: 'center',
  },
  card: {
    borderRadius: 9,
    width: '100%',
    paddingHorizontal: 29,
    paddingTop: 19,
    paddingBottom: 33,
    alignItems: 'stretch',
  },
  image: {
    width: '100%',
    height: 1, // Since aspectRatio is 333.33, this will be very thin
    marginTop: 18,
  },
});

export default DevInfo;
