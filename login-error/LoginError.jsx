import React from "react";
import { View, StyleSheet } from "react-native";
import ErrorMessage from "./ErrorMessage";
import ContactInfo from "./ContactInfo";
import ReturnButton from "./ReturnButton";

const LoginError = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ErrorMessage />
        <ContactInfo />
        <ReturnButton
          onPress={() => {
            /* Handle return to login */
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    width: 347,
    borderRadius: 40,
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 40,
    paddingLeft: 20,
    alignItems: "center",
  },
});

export default LoginError;
