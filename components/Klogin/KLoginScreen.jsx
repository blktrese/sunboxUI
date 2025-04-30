import KHeader from "./KHeader";
import KLoginForm from "./KLoginForm";
import KFooter from "./KFooter";
import { View, StyleSheet } from "react-native";

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.loginCard}>
                <KHeader />
                <KLoginForm />
                <KFooter />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    loginCard: {
        width: 347,
        borderRadius: 40,
        paddingTop: 40,
        paddingHorizontal: 30,
        paddingBottom: 40,
        alignItems: "center",
        backgroundColor: "#212124",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default LoginScreen;
