import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

const KLoginForm = () => {
    return (
        <>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    // value={email}
                    placeholder="Enter your email"
                    placeholderTextColor="#CBB7B7"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    style={styles.input}
                    // value={password}
                    placeholder="Enter password"
                    placeholderTextColor="#CBB7B7"
                />
            </View>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        marginBottom: 28,
    },
    inputLabel: {
        color: "#CBB7B7",
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 8,
    },
    input: {
        width: "100%",
        height: 32,
        borderWidth: 1,
        borderColor: "#CBB7B7",
        borderRadius: 9,
        paddingHorizontal: 10,
        color: "#CBB7B7",
    },
    loginButton: {
        width: 122,
        height: 36,
        borderRadius: 15,
        backgroundColor: "#EEBD62",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    loginButtonText: {
        color: "#1E1E1E",
        fontSize: 16,
        fontWeight: "500",
    },
});

export default KLoginForm;
