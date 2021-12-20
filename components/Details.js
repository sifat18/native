import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { getAuth, signOut } from "firebase/auth";

export default function Details({ route, navigation }) {
    /* 2. Get the param */
    const { book } = route.params;
    const auth = getAuth();
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.replace('Login')
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{ paddingTop: 35, }}>
                    {/* top image */}
                    <Image source={{ uri: book.coverImageUrl }}
                        style={styles.homeTop}
                        resizeMode='contain'
                    ></Image>
                </View>

                <View style={styles.texts}>
                    <Text style={{ fontSize: 28, fontWeight: '700', textAlign: 'center' }}>Title- <Text> {book.title}</Text></Text>
                    <Text style={{ marginTop: 20, fontSize: 25, fontWeight: '700' }}> Publisher: <Text> {book.publisher}</Text></Text>
                    <Text style={{ marginTop: 20, }}> Page Count: <Text> {book.pageCount}</Text></Text>
                    <Text style={{ marginTop: 20, padding: 20, fontSize: 27, textAlign: 'center' }}>{book.synopsis}</Text>



                    {/* touchable button */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Thank')}
                        style={styles.btn}>
                        <Text>Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={logOut}
                        style={{
                            width: '80 %',
                            backgroundColor: '#e5e5e5',
                            padding: 11,
                            borderRadius: 10,
                            alignItems: 'center',
                            // marginTop: 20,
                            marginBottom: 20
                        }}>
                        <Text>LogOut</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        </ScrollView>

    )
}
const styles = StyleSheet.create({

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
        marginTop: 60,
        marginBottom: 20
    },
});
