import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Fontisto, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export function GetStartedHeader() {
    const navigation = useNavigation()
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', alignSelf: 'center'}}>
            <Fontisto name="netflix" size={44} color='#E50914' />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity><Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>PRIVACY</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AuthStack', {
                    screen: 'SignUpScreen'
                })}>
                <Text style={{color: 'white', fontSize: 15, paddingLeft: 10, paddingRight: 10, fontWeight: '700'}}>SIGN UP</Text></TouchableOpacity>
                <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={20} color="silver" /></TouchableOpacity>
            </View>
        </View>
    )
}
