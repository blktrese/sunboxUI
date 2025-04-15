import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IncreaseIcon, DecreaseIcon } from "./Icons";

const TransactionItem = ({ date, amount, trend, isYesterday }) => {
  return (
    <View
      style={[
        styles.transactionItem,
        isYesterday ? styles.yesterdayItem : null,
      ]}
    >
      <View style={styles.transactionContent}>
        <Text style={[styles.date, isYesterday ? styles.yesterdayDate : null]}>
          {isYesterday ? "Yesterday" : ""}
        </Text>
        <View style={styles.detailsRow}>
          <Text style={styles.normalDate}>{date}</Text>
          <View style={styles.amountContainer}>
            <Text
              style={[
                styles.amount,
                isYesterday ? styles.yesterdayAmount : null,
              ]}
            >
              ₱ {amount}
            </Text>
            {trend &&
              (trend === "increase" ? (
                <IncreaseIcon size={25} />
              ) : (
                <DecreaseIcon size={24} />
              ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const TransactionList = () => {
  const transactions = [
    {
      date: "02 / 03 / 2025",
      amount: "1,780.00",
      trend: "increase",
      isYesterday: true,
    },
    { date: "02 / 02 / 2025", amount: "1,210.00", trend: "decrease" },
    { date: "02 / 01 / 2025", amount: "1,455.00", trend: "increase" },
  ];

  return (
    <View style={styles.container}>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
  },
  transactionItem: {
    padding: 12,
    backgroundColor: "transparent",
  },
  yesterdayItem: {
    backgroundColor: "#1D1C1F",
    padding: 15,
  },
  transactionContent: {
    gap: 2,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: "#CBB7B7",
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Instrument Sans",
  },
  yesterdayDate: {
    color: "#DA9362",
    fontSize: 13,
  },
  normalDate: {
    color: "#CBB7B7",
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Instrument Sans",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  amount: {
    color: "#CBB7B7",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Instrument Sans",
  },
  yesterdayAmount: {
    fontSize: 21,
    fontWeight: "700",
  },
});

export default TransactionList;
