import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import { GetStarted1 } from '../../screens';

const Stack = createStackNavigator();

export default function GetStartedStack(): JSX.Element {
  // console.log('state', state);
  return (
    <Stack.Navigator initialRouteName="GetStarted1">
    <Stack.Screen options={{headerShown: false}} name="GetStarted1" component={GetStarted1} />
    </Stack.Navigator>
  );
}