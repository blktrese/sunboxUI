import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const InputDesign = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c07b11b5e3b3e21689bf9fab5cf49085fb6b4bf8" }}
          style={styles.logo}
          accessibilityLabel="Sunbox Logo"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 412,
    height: "100%",
    paddingHorizontal: 128,
  },
  logo: {
    width: 156,
    height: 156,
    borderRadius: 15,
    marginBottom: -4,
  },
});

export default InputDesign;
