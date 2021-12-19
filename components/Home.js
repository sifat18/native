import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    // adding style to pic
    homeTop: {
        height: 300,
        width: 450,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texts: {
        // flex: 1,
        marginTop: 60,
        alignItems: 'center',
    },
    btn: {
        width: '80 %',
        backgroundColor: '#3B23',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 60
    },
});


export default function Home() {
    const auth = getAuth();

    const navigation = useNavigation()
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.replace('Login')
        }).catch((error) => {
            // An error happened.
        });
    }
    const pageChange = () => {
        navigation.navigate('Browse')
    }
    return (
        <SafeAreaView>
            <View>
                {/* top image */}
                <Image source={{ uri: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=' }}
                    style={styles.homeTop}
                    resizeMode='contain'
                ></Image>
            </View>
            <View style={styles.texts}>
                <Text style={{ fontSize: 35, fontWeight: '700', textAlign: 'center' }}>Welcome to the Open library</Text>
                <Text style={{ marginTop: 20, padding: 20 }}>Open Library is an open, editable library catalog, building towards a web page for every book ever published.</Text>



                {/* touchable button */}
                <TouchableOpacity
                    onPress={pageChange}
                    style={styles.btn}>
                    <Text>Browse</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}
