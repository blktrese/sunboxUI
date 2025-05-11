import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AboutUsIcon = () => {
    return (
        <View style={styles.iconContainer}>
            <View style={styles.circle}>
                <Text style={styles.exclamation}>i</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "#2F2E34",
        justifyContent: "center",
        alignItems: "center",
    },
    exclamation: {
        color: "#CBB7B7",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic",
        lineHeight: 24,
        textAlign: "center",
    },
});

export default AboutUsIcon;
