import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { supabase } from "../../supabaseClient";

const WalletBalanceCard = () => {
    const [totalCoins, setTotalCoins] = useState(0);

    useEffect(() => {
        const fetchTotalCoins = async () => {
            const { data, error } = await supabase
                .from("coin_logs")
                .select("coin_value"); // Changed from 'daily_total' to 'coin_value'

            if (error) {
                console.error("Error fetching coins:", error);
                return;
            }

            const total = data.reduce(
                (sum, row) => sum + (row.coin_value || 0),
                0
            ); // Sum coin_value instead of daily_total
            setTotalCoins(total);
        };

        fetchTotalCoins();
    }, []);

    return (
        <View style={styles.card}>
            <Image
                source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/366e289c3cc43d79ae27fd272448bef25970a0bb?placeholderIfAbsent=true",
                }}
                style={styles.walletIcon}
                accessibilityLabel="Wallet Icon"
            />
            <Text style={styles.title}>Total Amount Collected</Text>
            <Text style={styles.amount}>₱ {totalCoins}.00</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#DA9362",
        width: 328,
        borderRadius: 20,
        paddingVertical: 24,
        paddingHorizontal: 16,
        marginTop: -20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        alignSelf: "center",
    },

    walletIcon: {
        width: 48,
        height: 48,
        marginBottom: 12,
    },
    title: {
        fontWeight: "700",
        fontSize: 16,
        color: "#2A2A2E",
        marginBottom: 4,
    },
    amount: {
        fontWeight: "400",
        fontSize: 32,
        color: "#2A2A2E",
    },
});

export default WalletBalanceCard;
