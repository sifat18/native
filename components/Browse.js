import React, { useState } from 'react'
import { Image } from 'react-native'
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Items from './Items'

const images = [
    'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhZGluZyUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhZGluZyUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1515541965486-309946b5572b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWRpbmclMjBib29rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1525715843408-5c6ec44503b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVhZGluZyUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60']

// getting screen info
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


export default function Browse() {
    //   setting index state
    const [activeImg, setActiveImg] = useState(0)
    // onslide changes
    const onChange = nativeEvent => {
        if (nativeEvent) {
            let slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide !== activeImg) {
                setActiveImg(slide)
            }
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                {/* image slider */}
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {/* looping over images */}
                    {images.map((pic, index) =>
                        <Image key={pic}
                            resizeMode='stretch'
                            style={styles.wrap}
                            source={{ uri: pic }}
                        ></Image>
                    )}
                </ScrollView>
                {/* dots */}
                <View style={styles.dot}>
                    {images.map((e, index) =>
                        <Text key={e}
                            style={activeImg === index ? styles.dotActive : styles.dotNorm}
                        >
                            ●
                        </Text>
                    )}
                </View>
            </View>
            <View style={{ marginTop: 20, }}>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700' }}>FIND THE BOOKS YOU LOVE</Text>
                <Items></Items>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.35
    },
    dot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'black'
    },
    dotNorm: {
        margin: 3,
        color: 'white'
    }

})