import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

const Nav = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/baf0cbbbbd84c55dc1b7c5d6779d8c7c6f07d10c?placeholderIfAbsent=true&apiKey=7e98458e1ebd4fe2966aa367e7a76ffe"
        }}
        style={styles.firstImage}
      />
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f2bbceceadb4e2d07a6c035d5ccf280e2cff078?placeholderIfAbsent=true&apiKey=7e98458e1ebd4fe2966aa367e7a76ffe"
        }}
        style={styles.secondImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: 358,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  firstImage: {
    width: 33,
    height: 33,
    borderRadius: 6,
    marginTop: 7,
  },
  secondImage: {
    width: 40,
    height: 40,
    marginLeft: 185,
  },
});

export default Nav;
