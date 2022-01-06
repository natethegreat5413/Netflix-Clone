import React from "react";
import { View, Text, Dimensions } from "react-native";

export const GetStarted1 = () => {
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
                Unlimited
            </Text>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 38 }}>
                movies, TV
            </Text>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 38 }}>
                shows & more
            </Text>
            <View style={{ height: 20 }} />
            <Text style={{ color: "#BEBEBF", fontSize: 20 }}>
                Watch Anywhere. Cancel
            </Text>
            <Text style={{ color: "#BEBEBF", fontSize: 20 }}>anytime.</Text>
        </View>
    );
};
