import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GetStarted2, GetStarted3, GetStarted4 } from '..'
import {GetStartedHeader} from '../../components/GetStartedHeader/GetStartedHeader'

export function GetStarted1() {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'space-between', backgroundColor: 'black'}}>
            <GetStartedHeader />

            <GetStartedButton />
        </SafeAreaView>
    )
}

const GetStartedButton = () => {
    return (
        <TouchableOpacity style={{ width: '90%', backgroundColor: '#E50914', alignSelf: 'center',  borderRadius: 3, marginBottom: 10}}>
            <Text style={{ padding: 12, fontSize: 22, color: 'white', fontWeight: '500', textAlign: 'center'}}>Get Started</Text>
        </TouchableOpacity>
    )
}

