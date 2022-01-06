import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetStartedHeader } from "../../components/GetStartedHeader/GetStartedHeader";
import { IntroSlider } from "./components/IntroSlider";
import { GetStartedButton } from "./components/GetStartedButton";

export function GetStarted() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "space-between",
                backgroundColor: "black",
            }}
        >
            <GetStartedHeader />
            <IntroSlider />
            <GetStartedButton />
        </SafeAreaView>
    );
}
