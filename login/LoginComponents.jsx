// LoginComponents.jsx
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth"; // Import signInWithEmailAndPassword
import { auth } from "../firebaseConfig";  // Import auth from your firebaseConfig

export const Logo = () => (
  <Image
    source={{
      uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3329c6dc08f571eab6c6dd5601fec60915ba286",
    }}
    style={styles.logo}
    resizeMode="contain"
  />
);

export const WelcomeText = () => (
  <View style={styles.welcomeContainer}>
    <Text style={styles.welcomeText}>Welcome to</Text>
    <Text style={styles.sunboxText}>Sunbox</Text>
  </View>
);

export const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setError('');
        const user = userCredential.user;
        navigation.navigate("Dashboard", { email: user.email });
      })
      .catch(() => {
        setError("Incorrect email or password.");
      });
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#CBB7B7"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter password"
          placeholderTextColor="#CBB7B7"
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </>
  );
};

export const FooterText = () => (
  <View style={styles.footerContainer}>
    <View style={styles.divider} />
    <View style={styles.footerTextContainer}>
      <Text style={styles.footerText}>
        To create an account, please contact the administrators at
      </Text>
      <Text
        style={styles.emailText}
        onPress={() => Linking.openURL("mailto:sunbox041990@gmail.com")}
      >
        sunbox041990@gmail.com
      </Text>
    </View>
  </View>
);

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
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputLabel: {
    color: "#CBB7B7",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 42,
    borderWidth: 1,
    borderColor: "#CBB7B7",
    borderRadius: 9,
    paddingHorizontal: 10,
    color: "#CBB7B7",
  },
  errorText: {
    color: "#FF7A7A",
    fontSize: 13,
    marginBottom: 12,
    fontWeight: "500",
  },
  loginButton: {
    width: 122,
    height: 36,
    borderRadius: 15,
    backgroundColor: "#EEBD62",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    alignSelf: "center",
  },
  loginButtonText: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "500",
  },
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
