import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TimeframeSelector from "./TimeframeSelector";
import AmountDisplay from "./AmountDisplay";
import TransactionList from "./TransactionList";
import { DateFilterIcon } from "./Icons";

const InputDesign = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("Monthly");

  return (
    <View style={styles.container}>
      <TimeframeSelector
        selected={selectedTimeframe}
        onSelect={setSelectedTimeframe}
      />

      <View style={styles.datePickerContainer}>
        <DateFilterIcon />
      </View>

      <View style={styles.contentContainer}>
        <AmountDisplay amount="2,005.00" trend="increase" />
        <TransactionList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: 358,
    height: 544,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: "#D38462",
  },
  datePickerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 34,
  },
  contentContainer: {
    paddingHorizontal: 29,
  },
});

export default InputDesign;
