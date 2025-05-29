import React from "react";
import { TouchableOpacity, View, StyleSheet, Alert, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

const LogoutButton = ({ onPress }) => {
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // Call the additional onPress callback if provided
            if (onPress) {
                onPress();
            }
            navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
            });
        } catch (error) {
            Alert.alert(
                "Logout Error",
                "An error occurred while signing out. Please try again."
            );
            console.error("Logout error:", error);
        }
    };

    return (
            <TouchableOpacity style={styles.imageContainer} onPress={handleLogout}>
                <Image
                    source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0621990275be8baa8bbf9b085bfbe7438ab389b2' }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: 15,
  },
  image: {
    width: 126,
    height: 25,
    marginLeft: 12,
  },
});

export default LogoutButton;
