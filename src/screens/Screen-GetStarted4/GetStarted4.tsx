import React from "react";
import { View, Text, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
            {/* <Icons /> */}
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

const Icons = () => {
    return (
        <View>
            <FontAwesome name="tv" size={24} color="white" />
        </View>
    );
};
