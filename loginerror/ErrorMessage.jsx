import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ErrorMessage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b6cea864bb36508bbe4ddc5346a7fada67b169c" }}
        style={styles.errorLogo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login Error</Text>
      <Text style={styles.message}>
        Your login details cannot be found. Please make sure that the
        information supplied is correct.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  errorLogo: {
    width: 160,
    height: 143,
    marginBottom: 20,
  },
  title: {
    color: "#CBB7B7",
    fontFamily: "Instrument Sans",
    fontSize: 31,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
  },
  message: {
    color: "#CBB7B7",
    fontFamily: "Instrument Sans",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 19,
    marginBottom: 10,
    maxWidth: 226,
  },
});

export default ErrorMessage;
