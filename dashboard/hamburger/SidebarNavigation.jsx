import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "./Logo";
import NavigationItem from "./NavigationItem";
import Divider from "./Divider";
import LogoutButton from "./LogoutButton";
import HomeIcon from "./HomeIcon";
import AboutUsIcon from "./AboutUsIcon";

const SidebarNavigation = ({ onNavigation, activeRoute = "home" }) => {
    const navigation = useNavigation();

    const handleNavigation = (route) => {
        if (route === "home") {
            navigation.navigate("Dashboard");
        } else if (route === "about") {
            navigation.navigate("AboutUs");
        } else if (route === "logout") {
            navigation.navigate("Login");
        }

        if (onNavigation) {
            onNavigation(route); // For closing sidebar in Header
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{ marginTop: -60 }}>
                  <Logo />
                </View>
                <View style={styles.navigationContainer}>
                    <NavigationItem
                        iconComponent={<HomeIcon />}
                        text="Home"
                        isActive={activeRoute === "home"}
                        onPress={() => handleNavigation("home")}
                    />
                    <NavigationItem
                        iconComponent={<AboutUsIcon />}
                        text="About Us"
                        isActive={activeRoute === "about"}
                        onPress={() => handleNavigation("about")}
                    />
                </View>
                <Divider />
                <View style={styles.logoutContainer}>
                    <LogoutButton
                        onPress={() => handleNavigation("logout")}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1D1C1F",
        height: "100%",
        width: 300,
          overflow: 'hidden',
    },
    content: {
  width: 300,
  paddingHorizontal: 23,
  paddingTop: 50, // push it down more
  flex: 1,
    },
    navigationContainer: {
        marginTop: 34,
    },
    logoutContainer: {
        marginTop: 10,
    },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#000000aa', // semi-transparent black
    zIndex: 999,
  },
});

export default SidebarNavigation;
