import React, { useState, useEffect } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Animated,
    Text,
    Platform, StatusBar,
    Dimensions,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import SidebarNavigation from '../hamburger/SidebarNavigation';

const Header = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const screenWidth = Dimensions.get("window").width;
    const sidebarWidth = 290;

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [slideAnim] = useState(new Animated.Value(sidebarWidth));

    // Reset animation value when sidebar visibility changes
    useEffect(() => {
        if (!sidebarVisible) {
            slideAnim.setValue(sidebarWidth);
        }
    }, [sidebarVisible, slideAnim, sidebarWidth]);

    const toggleSidebar = () => {
        if (sidebarVisible) {
            Animated.timing(slideAnim, {
                toValue: sidebarWidth,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setSidebarVisible(false);
            });
        } else {
            setSidebarVisible(true);
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    const handleNavigation = (routeName) => {
        toggleSidebar();

        setTimeout(() => {
            if (routeName === "home") {
                navigation.navigate("Dashboard");
            } else if (routeName === "about") {
                navigation.navigate("AboutUs");
            } else if (routeName === "logout") {
                navigation.navigate("Login");
            }
        }, 300);
    };

    const getCurrentActiveRoute = () => {
        const currentRoute = route.name;
        if (currentRoute === "Dashboard") return "home";
        if (currentRoute === "AboutUs") return "about";
        return "home";
    };


    const isAboutScreen = route.name === "AboutUs";

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

            {/* Always show hamburger menu, but adjust behavior based on screen */}
            <TouchableOpacity
                onPress={toggleSidebar}
                style={styles.menuButton}
                activeOpacity={0.7}
            >
                <Text style={styles.menuIcon}>≡</Text>
            </TouchableOpacity>

            {sidebarVisible && (
                <Modal
                    transparent={true}
                    visible={sidebarVisible}
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
                                onNavigation={handleNavigation}
                                activeRoute={getCurrentActiveRoute()}
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
  height: 70,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center", // center children vertically inside 100 height
  paddingHorizontal: 16,
  backgroundColor: "#212124",
  zIndex: 10,
},
    menuButton: {
        padding: 10,
        zIndex: 20,
        //marginTop: -45,
    },
    menuIcon: {
        fontSize: 28,
        color: "#CBB7B7",
        //fontWeight: "bold",
    },
    logoContainer: {
  justifyContent: "center", // center logo vertically inside container
  height: "100%",
    },
    logo: {
        width: 140,
        height: 40,
        //marginTop: -40,
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
        width: 290,
        backgroundColor: "#1D1C1F",
        right: 0,
    },
});

export default Header;
