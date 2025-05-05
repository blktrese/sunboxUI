import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import TimeframeSelector from "./TimeframeSelector";
import AmountDisplay from "./AmountDisplay";
import TransactionList from "./TransactionList";
import { DateFilterIcon } from "./Icons";

const InputDesign = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("Monthly");

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
    </ScrollView>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: {
      flexGrow: 1,
      backgroundColor: "#212124",
      padding: 16,
      paddingTop: 50,
    },

  container: {
    display: "flex",
    backgroundColor: "#2A2A2E",
    flexDirection: "column",
    width: 328,
    height: 544,
    borderRadius: 9,
    paddingTop: 32,
  },
  datePickerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,

  },
  contentContainer: {
    paddingHorizontal: 29,

  },
});

export default InputDesign;
