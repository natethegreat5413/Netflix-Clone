import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export const GetStartedButton = (props: {
    text: string;
    icon: any;
    onPress: () => void;
}) => {
    return (
        <TouchableOpacity
            style={styles.getStartedButtonContainer}
            onPress={props.onPress}
        >
            {props.icon ? (
                <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                >
                    <Text style={styles.getStartedButtonText}>Sign Up</Text>

                    <EvilIcons
                        name="arrow-right"
                        size={50}
                        color="white"
                        style={styles.icon}
                    />
                </View>
            ) : (
                <Text style={styles.getStartedButtonText}>{props.text}</Text>
            )}
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
    icon: {
        padding: 7,
    },
});
