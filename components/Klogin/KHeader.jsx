import { View, Text, Image, StyleSheet } from "react-native";

const KHeader = () => {
    return (
        <>
            <Image
                source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3329c6dc08f571eab6c6dd5601fec60915ba286",
                }}
                style={styles.logo}
                resizeMode="contain"
            />

            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome to</Text>
                <Text style={styles.sunboxText}>Sunbox</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 162,
        height: 162,
        marginBottom: 20,
    },
    welcomeContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    welcomeText: {
        color: "#CBB7B7",
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 5,
    },
    sunboxText: {
        color: "#CBB7B7",
        fontSize: 31,
        fontWeight: "600",
    },
});

export default KHeader;
