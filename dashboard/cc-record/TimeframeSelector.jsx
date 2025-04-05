import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TimeframeSelector = ({ selected, onSelect }) => {
  const options = ["Daily", "Weekly", "Monthly"];

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[styles.option, selected === option && styles.selectedOption]}
          onPress={() => onSelect(option)}
        >
          <Text style={styles.text}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 45,
  },
  option: {
    flex: 1,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#1E1E1E",
    borderRadius: 9,
  },
  text: {
    color: "#CBB7B7",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Instrument Sans",
  },
});

export default TimeframeSelector;
