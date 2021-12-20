import React from 'react'
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const WIDTH = Dimensions.get('window').width
export default function Box({ newBook, index }) {
    return (
        <View style={styles.upcoming}>
            <Image source={{ uri: newBook.coverImageUrl }} style={{ height: 200, width: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}></Image>
            <View style={{ height: 133, borderRadius: 15, backgroundColor: 'white', position: 'absolute', bottom: 0, padding: 10, width: '100%' }}>
                <View><Text style={{ fontWeight: 'bold', fontSize: 17 }}>{newBook.title}</Text>
                    <Text>{newBook.synopsis.slice(0, 100) + '...'}</Text></View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({

    upcoming: {
        height: 280, width: WIDTH / 1.8, elevation: 15, marginRight: 20, borderRadius: 15, backgroundColor: 'white'
    }
});
