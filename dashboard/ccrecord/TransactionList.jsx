import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { supabase } from "../../supabaseClient";
import { IncreaseIcon, DecreaseIcon, NeutralIcon } from "./Icons";

dayjs.extend(isoWeek);

const TransactionItem = ({ date, amount, trend, highlightLabel }) => (
  <View style={[styles.item, highlightLabel && styles.highlight]}>
    {highlightLabel && <Text style={styles.highlightLabel}>{highlightLabel}</Text>}
    <View style={styles.row}>
      <Text style={styles.dateText}>{date}</Text>
      <View style={styles.amountRow}>
        <Text style={[styles.amount, highlightLabel && styles.highlightAmount]}>
          ₱ {amount.toLocaleString()}
        </Text>
        {trend === "increase" ? (
          <IncreaseIcon size={20} />
        ) : trend === "decrease" ? (
          <DecreaseIcon size={20} />
        ) : (
          <NeutralIcon size={20} />
        )}
      </View>
    </View>
  </View>
);

const TransactionList = ({ selectedTimeframe }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data, error } = await supabase
        .from("coin_logs")
        .select("timestamp, daily_total");

      if (error) {
        console.error("Error fetching coin logs:", error);
        return;
      }

      const now = dayjs();
      const grouped = {};
      const result = [];

      if (selectedTimeframe === "Daily") {
        const days = Array.from({ length: 6 }, (_, i) =>
          now.subtract(i+1, "day").format("YYYY-MM-DD")
        );

        data.forEach(({ timestamp, daily_total }) => {
          const date = dayjs(timestamp).format("YYYY-MM-DD");
          grouped[date] = (grouped[date] || 0) + daily_total;
        });

        days.forEach((dateStr, index) => {
          const current = grouped[dateStr] ?? 0;
          const prev = index < days.length - 1 ? grouped[days[index + 1]] ?? null : null;

          let trend = "neutral";
          if (prev !== null) {
            if (current > prev) trend = "increase";
            else if (current < prev) trend = "decrease";
          }

          const highlightLabel = index === 0 ? "Yesterday" : null;

          result.push({
            rawKey: dateStr,
            date: dayjs(dateStr).format("MMM D, YYYY"),
            amount: current,
            trend,
            highlightLabel,
          });
        });
      } else {
        data.forEach(({ timestamp, daily_total }) => {
          const date = dayjs(timestamp);
          let key = selectedTimeframe === "Weekly"
            ? `${date.isoWeekYear()}-W${date.isoWeek()}`
            : date.format("YYYY-MM");

          grouped[key] = (grouped[key] || 0) + daily_total;
        });

        const thisMonthKey = dayjs().format("YYYY-MM");

        const sortedKeys = Object.keys(grouped)
          .filter((key) => selectedTimeframe === "Monthly" ? key !== thisMonthKey : true)
          .sort((a, b) => (a < b ? 1 : -1))
          .slice(0, 5);

        sortedKeys.forEach((key, index) => {
          const current = grouped[key] ?? 0;
          const prev = index < sortedKeys.length - 1 ? grouped[sortedKeys[index + 1]] ?? null : null;

          let trend = "neutral";
          if (prev !== null) {
            if (current > prev) trend = "increase";
            else if (current < prev) trend = "decrease";
          }

          let displayDate = key;
          if (selectedTimeframe === "Weekly") {
            const [year, week] = key.split("-W");
            displayDate = `Week ${week}, ${year}`;
          } else {
            displayDate = dayjs(key + "-01").format("MMMM YYYY");
          }

          const highlightLabel =
            index === 0
              ? selectedTimeframe === "Weekly"
                ? "Last Week"
                : "Last Month"
              : null;

          result.push({
            rawKey: key,
            date: displayDate,
            amount: current,
            trend,
            highlightLabel,
          });
        });
      }

      setTransactions(result);
    };

    fetchTransactions();
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
    marginTop: 12,
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
  highlightLabel: {
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
