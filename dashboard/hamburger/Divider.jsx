import React from "react";
import { View, StyleSheet } from "react-native";

const Divider = () => {
    return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: "#2F2E34",
        marginTop: 24,
        marginBottom: 22,
    },
});

export default Divider;
