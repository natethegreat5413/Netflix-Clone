import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GetStarted2, GetStarted3, GetStarted4 } from '..'
import {GetStartedHeader} from '../../components/GetStartedHeader/GetStartedHeader'

export function GetStarted1() {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'space-between', backgroundColor: 'black'}}>
            <GetStartedHeader />
            
            <MainContent />
            <GetStartedButton />
            
        </SafeAreaView>
    )
}

const MainContent = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 38}}>Unlimited</Text>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 38}}>movies, TV</Text>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 38}}>shows & more</Text>
            <View style={{height: 20}}/>
            <Text style={{color: '#BEBEBF', fontSize: 20}}>Watch Anywhere. Cancel</Text>
            <Text style={{color: '#BEBEBF', fontSize: 20}}>anytime.</Text>
        </View>
    )
}

const GetStartedButton = () => {
    return (
        <TouchableOpacity style={{ width: '90%', backgroundColor: '#E50914', alignSelf: 'center',  borderRadius: 3, marginBottom: 10}}>
            <Text style={{ padding: 12, fontSize: 22, color: 'white', fontWeight: '500', textAlign: 'center'}}>Get Started</Text>
        </TouchableOpacity>
    )
}

