import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import {
    GetStarted1,
    GetStarted2,
    GetStarted3,
    GetStarted4,
} from "../../index";

const { width } = Dimensions.get("window");

export function IntroSlider(props: {
    setSliderState: React.Dispatch<
        React.SetStateAction<{
            currentPage: number;
        }>
    >;
    sliderState: { currentPage: number };
}) {
    // const [sliderState, setSliderState] = useState({ currentPage: 0 });
    console.log("slider State", props.sliderState);

    const setSliderPage = (event: any) => {
        const { currentPage } = props.sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x / width);
        if (indexOfNextScreen !== currentPage) {
            // props.handlerFunction({
            //     ...props.sliderState,
            //     currentPage: indexOfNextScreen,
            // });
            props.setSliderState({
                ...props.sliderState,
                currentPage: indexOfNextScreen,
            });
        }
    };

    const { currentPage: pageIndex } = props.sliderState;

    return (
        <>
            <ScrollView
                style={{ flex: 1 }}
                horizontal={true}
                scrollEventThrottle={16}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event: any) => setSliderPage(event)}
            >
                <GetStarted1 />
                <GetStarted2 />
                <GetStarted3 />
                <GetStarted4 />
            </ScrollView>
            <View style={styles.paginationWrapper}>
                {Array.from(Array(4).keys()).map((key, index) => (
                    <View
                        style={[
                            styles.paginationDots,
                            { opacity: pageIndex === index ? 1 : 0.2 },
                        ]}
                        key={index}
                    />
                ))}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    paginationWrapper: {
        position: "absolute",
        bottom: 120,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: "gray",
        marginLeft: 10,
    },
});
