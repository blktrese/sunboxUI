import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const NavigationItem = ({ icon, iconComponent, text, isActive, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, isActive && styles.activeContainer]}
        >
            {iconComponent ? (
                iconComponent
            ) : (
                <Image source={icon} style={styles.icon} resizeMode="contain" />
            )}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        padding: 15,
    },
    activeContainer: {
        backgroundColor: "#2F2E34",
        borderRadius: 6,
    },
    icon: {
        width: 24,
        height: 24,
    },
    text: {
        color: "#CBB7B7",
        fontFamily: "Instrument Sans",
        fontSize: 17,
        fontWeight: "600",
    },
});

export default NavigationItem;
