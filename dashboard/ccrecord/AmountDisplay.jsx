import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { supabase } from "../../supabaseClient";
import dayjs from "dayjs";
import { IncreaseIcon, DecreaseIcon, NeutralIcon } from "./Icons";

const AmountDisplay = ({ selectedTimeframe }) => {
  const [amount, setAmount] = useState(0);
  const [trend, setTrend] = useState("neutral");
  const [percentChange, setPercentChange] = useState(null);

  useEffect(() => {
    const fetchAmount = async () => {
      const { data, error } = await supabase
        .from("coin_logs")
        .select("timestamp, daily_total");

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      const now = dayjs();
      let currentTotal = 0;
      let previousTotal = 0;

      if (selectedTimeframe === "Daily") {
        const today = now.startOf("day");
        const yesterday = today.subtract(1, "day");

        data.forEach((entry) => {
          const ts = dayjs(entry.timestamp);
          if (ts.isSame(today, "day")) {
            currentTotal += entry.daily_total;
          }
          if (ts.isSame(yesterday, "day")) {
            previousTotal += entry.daily_total;
          }
        });
      } else if (selectedTimeframe === "Weekly") {
        const thisWeekStart = now.startOf("isoWeek");
        const lastWeekStart = thisWeekStart.subtract(1, "week");
        const lastWeekEnd = thisWeekStart.subtract(1, "day").endOf("day");

        data.forEach((entry) => {
          const ts = dayjs(entry.timestamp);
          // Previous week: from lastWeekStart to lastWeekEnd (inclusive)
          if ((ts.isAfter(lastWeekStart) || ts.isSame(lastWeekStart)) &&
              (ts.isBefore(lastWeekEnd) || ts.isSame(lastWeekEnd))) {
            previousTotal += entry.daily_total;
          }
          // Current week: from thisWeekStart onwards
          if (ts.isAfter(thisWeekStart) || ts.isSame(thisWeekStart)) {
            currentTotal += entry.daily_total;
          }
        });
      } else if (selectedTimeframe === "Monthly") {
        const startOfThisMonth = now.startOf("month");
        const startOfLastMonth = startOfThisMonth.subtract(1, "month");
        const endOfLastMonth = startOfThisMonth.subtract(1, "day").endOf("day");

        data.forEach((entry) => {
          const ts = dayjs(entry.timestamp);
          // Previous month: from startOfLastMonth to endOfLastMonth (inclusive)
          if ((ts.isAfter(startOfLastMonth) || ts.isSame(startOfLastMonth)) &&
              (ts.isBefore(endOfLastMonth) || ts.isSame(endOfLastMonth))) {
            previousTotal += entry.daily_total;
          }
          // Current month: from startOfThisMonth onwards
          if (ts.isAfter(startOfThisMonth) || ts.isSame(startOfThisMonth)) {
            currentTotal += entry.daily_total;
          }
        });
      }

      setAmount(currentTotal);

      if (previousTotal > 0) {
        const change = ((currentTotal - previousTotal) / previousTotal) * 100;
        setPercentChange(change.toFixed(1));
        setTrend(change > 0 ? "increase" : change < 0 ? "decrease" : "neutral");
      } else if (previousTotal === 0 && currentTotal > 0) {
        // Handle case where previous period had no data but current period does
        setPercentChange("100.0");
        setTrend("increase");
      } else if (previousTotal > 0 && currentTotal === 0) {
        // Handle case where previous period had data but current period doesn't
        setPercentChange("-100.0");
        setTrend("decrease");
      } else {
        // Both periods have no data
        setPercentChange("—");
        setTrend("neutral");
      }
    };

    fetchAmount();
  }, [selectedTimeframe]);

  const labelMap = {
    Daily: "Daily Amount Collected",
    Weekly: "Weekly Amount Collected",
    Monthly: "Monthly Amount Collected",
  };

  const TrendIcon =
    trend === "increase" ? (
      <IncreaseIcon size={30} />
    ) : trend === "decrease" ? (
      <DecreaseIcon size={30} />
    ) : (
      <NeutralIcon size={30} />
    );

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{labelMap[selectedTimeframe]}</Text>

        <View style={styles.trendRow}>
          <Text
            style={[
              styles.percentText,
              trend === "increase"
                ? styles.increase
                : trend === "decrease"
                ? styles.decrease
                : styles.neutral,
            ]}
          >
            {percentChange !== "—" && percentChange > 0 ? "+" : ""}
            {percentChange}%
          </Text>
          {TrendIcon}
        </View>
      </View>

      <Text style={styles.amount}>₱ {amount.toLocaleString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#26262B",
    borderRadius: 9,
    padding: 18,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    //fontWeight: "600",
    color: "#CBB7B7",
    fontFamily: "Instrument Sans",
  },
  amount: {
    fontSize: 32,
    fontWeight: "600",
    color: "#DA9361",
    fontFamily: "Instrument Sans",
    //marginTop: 8,
  },
  trendRow: {
    flexDirection: "row",
    alignItems: "right",
    display: "flex",
    //alignItems: "center",
  },
  percentText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Instrument Sans",
  },
  increase: {
    color: "#6FCF97",
  },
  decrease: {
    color: "#EB5757",
  },
  neutral: {
    color: "#CBB7B7",
  },
});

export default AmountDisplay;
