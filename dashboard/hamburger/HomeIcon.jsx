import React from "react";
import { View, StyleSheet, Image } from "react-native";

const HomeIcon = () => {
    return (
        <View style={styles.iconContainer}>
            <Image
                source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/607ee777e391c46aded2f93124c793b72ca7f2f5",
                }}
                style={styles.icon}
                resizeMode="contain"
            />
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
    icon: {
        width: 24,
        height: 24,
    },
});

export default HomeIcon;
