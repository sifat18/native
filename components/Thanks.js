import React from 'react'
import { Image } from 'react-native'
import { View, Text } from 'react-native'
import pic from './thanks.png'
export default function Thanks() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: 'bold' }}>
            <Image source={pic}
                style={{ height: 300, width: 500 }}
                resizeMode='contain'
            ></Image>
            <Text style={{ fontSize: 50, fontWeight: 'bold' }}>Thank you</Text>
        </View >
    )
}
