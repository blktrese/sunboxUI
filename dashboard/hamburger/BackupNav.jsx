import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const BackupNav = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/baf0cbbbbd84c55dc1b7c5d6779d8c7c6f07d10c?placeholderIfAbsent=true&apiKey=7e98458e1ebd4fe2966aa367e7a76ffe"
        }}
        style={styles.topImage}
      />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/93761d65cf9049c29f7844b3834e49a3a903e03d?placeholderIfAbsent=true&apiKey=7e98458e1ebd4fe2966aa367e7a76ffe"
          }}
          style={styles.middleImage}
        />
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed94cae9a3033de1fe2cdb7419e8c5f06c7ebdac?placeholderIfAbsent=true&apiKey=7e98458e1ebd4fe2966aa367e7a76ffe"
          }}
          style={styles.bottomImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 361,
    gap: 40,
  },
  topImage: {
    width: 33,
    aspectRatio: 1,
    borderRadius: 6,
  },
  imageContainer: {
    marginTop: 5,
    flexDirection: 'column',
    gap: 24,
  },
  middleImage: {
    width: 30,
    aspectRatio: 1,
    marginLeft: 103,
  },
  bottomImage: {
    width: 30,
    aspectRatio: 1,
    marginLeft: -1,
  }
});

export default BackupNav;
