import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import dayjs from "dayjs";

import TimeframeSelector from "./TimeframeSelector";
import AmountDisplay from "./AmountDisplay";
import TransactionList from "./TransactionList";
import { DateFilterIcon } from "./Icons";
import WalletBalanceCard from "./WalletBalanceCard";

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
      <SafeAreaView>
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
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2A2A2E",
    width: 328,
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#DA9362",
    height: 450,
    alignSelf: "center", // Center it since there's no parent alignment now
  },
  dateFilter: {
    alignItems: "center",
    marginVertical: 10,
  },
});

export default InputDesign;
