import React from "react";
import { TouchableOpacity, View, StyleSheet, Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

const LogoutButton = ({ onPress }) => {
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // Call the additional onPress callback if provided
            if (onPress) {
                onPress();
            }
            navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
            });
        } catch (error) {
            Alert.alert(
                "Logout Error",
                "An error occurred while signing out. Please try again."
            );
            console.error("Logout error:", error);
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleLogout}>
            <View style={styles.iconContainer}>
                <View style={styles.circle}>
                    <View style={styles.logoutIcon}>
                        <View style={styles.iconLine}></View>
                        <View style={styles.iconArrow}></View>
                    </View>
                </View>
            </View>
            <Text style={styles.text}>Logout</Text>
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
    logoutIcon: {
        width: 12,
        height: 12,
        position: "relative",
    },
    iconLine: {
        position: "absolute",
        width: 2,
        height: 7,
        backgroundColor: "#CBB7B7",
        left: 5,
        top: 0,
    },
    iconArrow: {
        position: "absolute",
        width: 6,
        height: 6,
        borderWidth: 2,
        borderColor: "#CBB7B7",
        borderRightWidth: 0,
        borderBottomWidth: 0,
        transform: [{ rotate: "-45deg" }],
        bottom: 1,
        left: 3,
    },
    text: {
        color: "#CBB7B7",
        fontFamily: "Instrument Sans",
        fontSize: 17,
        fontWeight: "600",
    },
});

export default LogoutButton;
