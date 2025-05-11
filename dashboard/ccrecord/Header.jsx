import React, { useState, useCallback } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Animated,
    Text,
    Dimensions,
} from "react-native";
import SidebarNavigation from "../hamburger/SidebarNavigation";

const Header = () => {
    const screenWidth = Dimensions.get("window").width;
    const sidebarWidth = 331; // Width of the sidebar

    const [sidebarVisible, setSidebarVisible] = useState(false);
    // Starting position off-screen to the right (width of the sidebar)
    const [slideAnim] = useState(new Animated.Value(sidebarWidth));
    const toggleSidebar = () => {
        if (sidebarVisible) {
            // Slide out animation to the right
            Animated.timing(slideAnim, {
                toValue: sidebarWidth, // Full width of sidebar
                duration: 300,
                useNativeDriver: true, // Enable native driver for better performance
            }).start(() => {
                setSidebarVisible(false);
            });
        } else {
            setSidebarVisible(true);
            // Slide in animation from the right
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true, // Enable native driver for better performance
            }).start();
        }
    };
    return (
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <Image
                    source={{
                        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7948cfd592133a8cb75d6e6cbd7b1ace483e02ab",
                    }}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity
                onPress={toggleSidebar}
                style={styles.menuButton}
                activeOpacity={0.7}
                hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} // Increase touch area
            >
                <Text style={styles.menuIcon}>≡</Text>
            </TouchableOpacity>
            {sidebarVisible && (
                <Modal
                    transparent={true}
                    visible={sidebarVisible}
                    animationType="none"
                    onRequestClose={toggleSidebar}
                >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity
                            style={styles.modalOverlay}
                            activeOpacity={1}
                            onPress={toggleSidebar}
                        />
                        <Animated.View
                            style={[
                                styles.sidebarContainer,
                                {
                                    transform: [{ translateX: slideAnim }],
                                },
                            ]}
                        >
                            <SidebarNavigation
                                onNavigation={() => toggleSidebar()}
                            />
                        </Animated.View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        paddingTop: 20, // Add more top padding
        backgroundColor: "#212124",
        zIndex: 10, // Ensure it's above other components
    },
    menuButton: {
        padding: 10,
        zIndex: 20, // Make sure it's on top of everything
    },
    menuIcon: {
        fontSize: 28,
        color: "#CBB7B7",
        fontWeight: "bold",
    },
    logoContainer: {
        alignItems: "flex-start",
    },
    logo: {
        width: 140,
        height: 24,
    },
    modalContainer: {
        flex: 1,
        flexDirection: "row",
    },
    modalOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    sidebarContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        width: 331,
        backgroundColor: "#1D1C1F",
        right: 0, // Position from right side
    },
});

export default Header;
