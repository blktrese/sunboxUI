import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const LogoutButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0621990275be8baa8bbf9b085bfbe7438ab389b2' }}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: 15,
  },
  image: {
    width: 126,
    height: 25,
  },
});

export default LogoutButton;
