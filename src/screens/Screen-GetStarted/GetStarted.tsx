import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetStartedHeader } from "../../components/GetStartedHeader/GetStartedHeader";
import { IntroSlider } from "./components/IntroSlider";
import { GetStartedButton } from "./components/GetStartedButton";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function GetStarted() {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const navigation = useNavigation();

    const ButtonText = sliderState.currentPage === 3 ? true : false;

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "space-between",
                backgroundColor: "black",
            }}
        >
            <GetStartedHeader />
            <IntroSlider
                sliderState={sliderState}
                setSliderState={setSliderState}
            />
            <GetStartedButton
                text="Get Started"
                icon={ButtonText}
                onPress={() =>
                    navigation.navigate("AuthStack", {
                        screen: "SignUpScreen",
                    })
                }
            />
        </SafeAreaView>
    );
}
