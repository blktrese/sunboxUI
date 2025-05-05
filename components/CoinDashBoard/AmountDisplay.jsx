import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IncreaseIcon } from "./Icons";

const AmountDisplay = ({ amount, trend }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Daily Amount Collected</Text>
        </View>
        <View style={styles.iconContainer}>
          <IncreaseIcon />
        </View>
      </View>
      <Text style={styles.amount}>₱ {amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#26262B",
    borderRadius: 9,
    padding: 18,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: "#CBB7B7",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Instrument Sans",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  amount: {
    color: "#DA9362",
    fontSize: 41,
    fontWeight: "400",
    fontFamily: "Instrument Sans",
    letterSpacing: 0.82,
    marginTop: 10,
  },
});

export default AmountDisplay;
