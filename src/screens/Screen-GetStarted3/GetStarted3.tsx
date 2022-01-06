import React from "react";
import { View, Text, Dimensions } from "react-native";

export function GetStarted3() {
    const { width, height } = Dimensions.get("window");
    return (
        <View
            style={{
                width,
                height,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 38 }}>
                No pesky
            </Text>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 38 }}>
                contracts
            </Text>
            <View style={{ height: 20 }} />
            <Text style={{ color: "#BEBEBF", fontSize: 20 }}>
                Join today, cancel anytime.
            </Text>
        </View>
    );
}
