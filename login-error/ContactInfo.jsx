import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

const ContactInfo = () => {
  const handleEmailPress = () => {
    Linking.openURL("mailto:sunbox041990@gmail.com");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        To create an account, please contact the administrators at
      </Text>
      <Text style={styles.email} onPress={handleEmailPress}>
        sunbox041990@gmail.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    maxWidth: 226,
  },
  text: {
    color: "#CBB7B7",
    fontFamily: "Instrument Sans",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 19,
  },
  email: {
    color: "#EEBD62",
    fontFamily: "Instrument Sans",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 19,
  },
});

export default ContactInfo;
