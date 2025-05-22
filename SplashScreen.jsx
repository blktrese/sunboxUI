import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 5000); //

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c07b11b5e3b3e21689bf9fab5cf49085fb6b4bf8',
        }}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212124',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
  },
});

export default SplashScreen;
