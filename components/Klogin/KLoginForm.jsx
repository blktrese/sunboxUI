import { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    KeyboardAvoidingView,
} from "react-native";

const KLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setloading(true);
        try {
            const response = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(response);
        } catch (error) {
            console.log("error");
            alert("Sign in faied:" + error.message);
        } finally {
            setloading(false);
        }
    };

    return (
        <>
            <View style={styles.inputContainer}>
                <KeyboardAvoidingView behavior="padding">
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        value={email}
                        style={styles.input}
                        placeholder="Enter your email"
                        placeholderTextColor="#CBB7B7"
                        autoCapitalize="none"
                        onChangeText={(text) => setEmail(text)}
                    />
                </KeyboardAvoidingView>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    value={password}
                    style={styles.input}
                    placeholder="Enter password"
                    placeholderTextColor="#CBB7B7"
                    autoCapitalize="none"
                    onChangeText={(text) => setpassword(text)}
                />
            </View>
            {loading ? (
                <ActivityIndicator size="large" color="#000ff" />
            ) : (
                <>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={signIn}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </>
            )}
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
        paddingVertical: 6,
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
