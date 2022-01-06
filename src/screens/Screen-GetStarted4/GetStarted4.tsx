import React from "react";
import { View, Text, Dimensions } from "react-native";

export function GetStarted4() {
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
                Watch
            </Text>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 38 }}>
                everywhere
            </Text>
            <View style={{ height: 20 }} />
            <Text style={{ color: "#BEBEBF", fontSize: 20 }}>
                Stream on your phone, tablet,
            </Text>
            <Text style={{ color: "#BEBEBF", fontSize: 20 }}>
                laptop, TV and more.
            </Text>
        </View>
    );
}
