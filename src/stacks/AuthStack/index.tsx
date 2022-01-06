import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import { ForgotPasswordScreen } from '../../screens/Screen-ForgotPassword';
import { LoginScreen } from '../../screens/Screen-Login';
import { SignUpScreen } from '../../screens/Screen-SignUp';


const Stack = createStackNavigator();

export const EmptyView = () => {
  return <View style={{ flex: 1, backgroundColor: 'dodgerblue' }} />;
};

export default function AuthStack(): JSX.Element {
  // console.log('state', state);
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}}/>
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}