import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { supabase } from "../../supabaseClient";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { IncreaseIcon, DecreaseIcon } from "./Icons";

dayjs.extend(isoWeek);

const AmountDisplay = ({ selectedTimeframe }) => {
  const [amount, setAmount] = useState(0);
  const [trend, setTrend] = useState("increase");

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("coin_logs")
        .select("timestamp, daily_total");

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      const grouped = {};
      data.forEach(({ timestamp, daily_total }) => {
        const date = dayjs(timestamp);
        let key = "";

        if (selectedTimeframe === "Daily") key = date.format("YYYY-MM-DD");
        else if (selectedTimeframe === "Weekly") key = `${date.isoWeekYear()}-W${date.isoWeek()}`;
        else if (selectedTimeframe === "Monthly") key = date.format("YYYY-MM");

        grouped[key] = (grouped[key] || 0) + daily_total;
      });

      const sorted = Object.keys(grouped).sort((a, b) => (a < b ? 1 : -1));
      const current = grouped[sorted[0]] || 0;
      const previous = grouped[sorted[1]] || 0;

      setAmount(current);
      setTrend(current >= previous ? "increase" : "decrease");
    };

    fetchData();
  }, [selectedTimeframe]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {selectedTimeframe} Amount Collected
          </Text>
        </View>
        <View style={styles.iconContainer}>
          {trend === "increase" ? (
            <IncreaseIcon size={30} />
          ) : (
            <DecreaseIcon size={26} />
          )}
        </View>
      </View>
      <Text style={styles.amount}>
        ₱ {amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </Text>
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
