import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ReturnButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Return to Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 175,
    height: 36,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  buttonText: {
    color: "#1E1E1E",
    fontFamily: "Instrument Sans",
    fontSize: 14,
    fontWeight: "400",
  },
});

export default ReturnButton;
