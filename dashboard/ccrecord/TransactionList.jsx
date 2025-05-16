import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { supabase } from "../../supabaseClient";
import { IncreaseIcon, DecreaseIcon } from "./Icons";
import { FlatList } from "react-native";

dayjs.extend(isoWeek);

const TransactionItem = ({ date, amount, trend, isYesterday }) => (
  <View style={[styles.item, isYesterday && styles.highlight]}>
    {isYesterday && <Text style={styles.yesterdayLabel}>Yesterday</Text>}
    <View style={styles.row}>
      <Text style={styles.dateText}>{date}</Text>
      <View style={styles.amountRow}>
        <Text style={[styles.amount, isYesterday && styles.highlightAmount]}>
          ₱ {amount.toLocaleString()}
        </Text>
        {trend === "increase" ? (
          <IncreaseIcon size={20} />
        ) : (
          <DecreaseIcon size={20} />
        )}
      </View>
    </View>
  </View>
);

const TransactionList = ({ selectedTimeframe }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchCoinLogs = async () => {
      const { data, error } = await supabase
        .from("coin_logs")
        .select("timestamp, daily_total");

      if (error) {
        console.error("Error fetching coin logs:", error);
        return;
      }

      const grouped = {};

      data.forEach(({ timestamp, daily_total }) => {
        const date = dayjs(timestamp);
        let key = "";

        if (selectedTimeframe === "Daily") {
          key = date.format("YYYY-MM-DD");
        } else if (selectedTimeframe === "Weekly") {
          key = `${date.isoWeekYear()}-W${date.isoWeek()}`;
        } else if (selectedTimeframe === "Monthly") {
          key = date.format("YYYY-MM");
        }

        grouped[key] = (grouped[key] || 0) + daily_total;
      });

const sortedKeys = Object.keys(grouped).sort((a, b) => (a < b ? 1 : -1));
const todayKey = dayjs().format("YYYY-MM-DD");
const filteredKeys =
  selectedTimeframe === "Daily"
    ? sortedKeys.filter((key) => key !== todayKey)
    : sortedKeys;

const result = filteredKeys.map((key, index) => {
  const current = grouped[key];
  const prev = grouped[filteredKeys[index + 1]] || 0;
  const trend = current >= prev ? "increase" : "decrease";

  let displayDate = key;
  if (selectedTimeframe === "Weekly") {
    const [year, week] = key.split("-W");
    displayDate = `Week ${week}, ${year}`;
  } else if (selectedTimeframe === "Monthly") {
    displayDate = dayjs(key + "-01").format("MMMM YYYY");
  }

  return {
    date: displayDate,
    amount: current,
    trend,
    rawKey: key,
  };
});

if (selectedTimeframe === "Daily" && result.length > 0) {
  result[0].isYesterday = true;
}


      setTransactions(result);
    };

    fetchCoinLogs();
  }, [selectedTimeframe]);

return (
  <FlatList
    data={transactions}
    keyExtractor={(item, index) => item.rawKey || index.toString()}
    renderItem={({ item }) => <TransactionItem {...item} />}
    contentContainerStyle={styles.list}
    style={styles.flatListContainer}
    showsVerticalScrollIndicator={false}
  />
);
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginTop: 20,
    paddingHorizontal: 4,
  },

  list: {
    paddingBottom: 20,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomColor: "#3A3A3E",
    borderBottomWidth: 1,
  },
  highlight: {
    backgroundColor: "#1D1C1F",
    borderRadius: 9,
  },
  yesterdayLabel: {
    color: "#DA9362",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 4,
    fontFamily: "Instrument Sans",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    color: "#CBB7B7",
    fontSize: 12,
    fontFamily: "Instrument Sans",
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  amount: {
    color: "#CBB7B7",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Instrument Sans",
  },
  highlightAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#DA9362",
  },
});

export default TransactionList;
