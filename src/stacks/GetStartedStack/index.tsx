import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { View } from "react-native";
import { GetStarted } from "../../screens";

const Stack = createStackNavigator();

export default function GetStartedStack(): JSX.Element {
    // console.log('state', state);
    return (
        <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen
                options={{ headerShown: false }}
                name="GetStarted"
                component={GetStarted}
            />
        </Stack.Navigator>
    );
}
