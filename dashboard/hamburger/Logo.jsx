import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7948cfd592133a8cb75d6e6cbd7b1ace483e02ab' }}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 78,
  },
  logo: {
    width: 193,
    height: 33,
  },
});

export default Logo;
