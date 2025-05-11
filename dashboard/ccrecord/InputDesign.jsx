import React, { useState } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar,
    Platform,
} from "react-native";
import TimeframeSelector from "./TimeframeSelector";
import AmountDisplay from "./AmountDisplay";
import TransactionList from "./TransactionList";
import { DateFilterIcon } from "./Icons";
import WalletBalanceCard from "./WalletBalanceCard";
import Header from "./Header";

const InputDesign = () => {
    const [selectedTimeframe, setSelectedTimeframe] = useState("Monthly");

    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#212124"
                translucent={false}
            />
            <SafeAreaView style={styles.container}>
                <Header />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <WalletBalanceCard />

                    <View style={styles.card}>
                        <TimeframeSelector
                            selected={selectedTimeframe}
                            onSelect={setSelectedTimeframe}
                        />
                        <View style={styles.dateFilter}>
                            <DateFilterIcon />
                        </View>
                        <AmountDisplay amount="2,005.00" trend="increase" />
                        <TransactionList />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212124",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Add padding for status bar on Android
    },
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: "#212124",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 60,
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
    },
    dateFilter: {
        alignItems: "center",
        marginVertical: 10,
    },
});

export default InputDesign;
