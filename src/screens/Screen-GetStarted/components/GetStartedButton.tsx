import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const GetStartedButton = () => {
    return (
        <TouchableOpacity style={styles.getStartedButtonContainer}>
            <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    getStartedButtonContainer: {
        width: "90%",
        backgroundColor: "#E50914",
        alignSelf: "center",
        borderRadius: 3,
        marginBottom: 10,
    },
    getStartedButtonText: {
        padding: 12,
        fontSize: 22,
        color: "white",
        fontWeight: "500",
        textAlign: "center",
    },
});
