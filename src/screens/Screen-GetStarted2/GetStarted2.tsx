import React from "react";
import { View, Text, Dimensions } from "react-native";

export function GetStarted2() {
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
                Download and
            </Text>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 38 }}>
                watch offline
            </Text>
            <View style={{ height: 20 }} />
            <Text style={{ color: "#BEBEBF", fontSize: 20 }}>
                Always have something to
            </Text>
            <Text style={{ color: "#BEBEBF", fontSize: 20 }}>
                watch offline.
            </Text>
        </View>
    );
}
