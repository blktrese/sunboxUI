import { View, Text, StyleSheet, Linking } from "react-native";

const KFooter = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.divider} />
            <View style={styles.footerTextContainer}>
                <Text style={styles.footerText}>
                    To create an account, please contact the administrators at
                </Text>
                <Text
                    style={styles.emailText}
                    // NOTE THIS: FOR REVIEW BELOW
                    onPress={() =>
                        Linking.openURL("mailto:sunbox041990@gmail.com")
                    }
                >
                    sunbox041990@gmail.com
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        width: "100%",
        alignItems: "center",
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#CBB7B7",
        marginBottom: 16,
    },
    footerTextContainer: {
        alignItems: "center",
    },
    footerText: {
        color: "#CBB7B7",
        fontSize: 12,
        textAlign: "center",
        lineHeight: 19,
    },
    emailText: {
        color: "#EEBD62",
        fontSize: 12,
        marginTop: 4,
        textDecorationLine: "underline",
    },
});

export default KFooter;
