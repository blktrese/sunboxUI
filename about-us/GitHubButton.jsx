import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

const GitHubButton = () => {
  const handlePress = () => {
    // Handle GitHub repository link
    Linking.openURL('https://github.com/your-repository-url');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={styles.background} />
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/61f6088be948847852c2cf4da3b294c9c63588b0' }}
        style={styles.githubLogo}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.buttonText}>
          SEE GITHUB REPOSITORY
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 285,
    height: 42,
    position: 'relative',
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
  },
  githubLogo: {
    width: 26,
    height: 26,
    position: 'absolute',
    left: 20,
    top: 8,
  },
  textContainer: {
    position: 'absolute',
    left: 57,
    top: 11,
  },
  buttonText: {
    color: '#1D1C1F',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Inter',
  },
});

export default GitHubButton;
