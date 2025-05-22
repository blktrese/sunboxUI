import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import dayjs from "dayjs";

import TimeframeSelector from "./TimeframeSelector";
import AmountDisplay from "./AmountDisplay";
import TransactionList from "./TransactionList";
import { DateFilterIcon } from "./Icons";
import WalletBalanceCard from "./WalletBalanceCard";
import Header from "./Header";

const InputDesign = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("Monthly");
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#212124"
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.contentContainer}>
          <WalletBalanceCard />

          <View style={styles.card}>
            <TimeframeSelector
              selected={selectedTimeframe}
              onSelect={setSelectedTimeframe}
            />

            <TouchableOpacity style={styles.dateFilter} disabled={true}>
              <DateFilterIcon date={currentDate} />
            </TouchableOpacity>

            <AmountDisplay selectedTimeframe={selectedTimeframe} />
            <TransactionList selectedTimeframe={selectedTimeframe} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212124",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#212124",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,

  },
  card: {
    backgroundColor: "#2A2A2E",
    width: 328,
    borderRadius: 20,
    padding: 20,
    marginTop: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
      borderWidth: 2,           // Add border width
      borderColor: "#DA9362",   // Set border color
      height: 450,
  },
  dateFilter: {
    alignItems: "center",
    marginVertical: 10,
  },
});

export default InputDesign;
