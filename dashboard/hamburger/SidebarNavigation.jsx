import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "./Logo";
import NavigationItem from "./NavigationItem";
import Divider from "./Divider";
import LogoutButton from "./LogoutButton";
import HomeIcon from "./HomeIcon";
import AboutUsIcon from "./AboutUsIcon";

const SidebarNavigation = ({ onNavigation }) => {
    const [activeItem, setActiveItem] = useState("home");
    const navigation = useNavigation();

    const handleNavigation = (route) => {
        setActiveItem(route);
        if (onNavigation) {
            onNavigation(route);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Logo />
                <View style={styles.navigationContainer}>
                    <NavigationItem
                        iconComponent={<HomeIcon />}
                        text="Home"
                        isActive={activeItem === "home"}
                        onPress={() => handleNavigation("home")}
                    />
                    <NavigationItem
                        iconComponent={<AboutUsIcon />}
                        text="About Us"
                        isActive={activeItem === "about"}
                        onPress={() => handleNavigation("about")}
                    />
                </View>
                <Divider />
                <View style={styles.logoutContainer}>
                    <LogoutButton
                        onPress={() => {
                            if (onNavigation) {
                                onNavigation("logout");
                            }
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#1D1C1F",
        height: "100%",
        marginTop: -50,
    },
    content: {
        width: 331,
        padding: 23,
        display: "flex",
        flexDirection: "column",
    },
    navigationContainer: {
        marginTop: 34,
    },
    logoutContainer: {
        marginTop: 10,
    },
});

export default SidebarNavigation;
