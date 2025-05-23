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
    //flexDirection: "row",
    //backgroundColor: "#1E1E1E",
    //borderRadius: 9,
    //overflow: "hidden",
    //height: 40,
    //marginBottom: 12,
    //display: "flex",
       // width: "100%",
        //height: 45,
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
    backgroundColor: "#DA9361",
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
