import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const styles = StyleSheet.create({
    // adding style to pic
    homeTop: {
        height: 300,
        width: 450,
    },
});


export default function Home() {
    return (
        <View>
            {/* top image */}
            <Image source={{ uri: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=' }}
                style={styles.homeTop}
                resizeMode='contain'
            ></Image>
            <Text>this is home</Text>
            {/* touchable button */}
            <TouchableOpacity>
                <Text>Start</Text>
            </TouchableOpacity>
        </View >
    )
}
