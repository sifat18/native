import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.inputBox}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    style={styles.box}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    placeholder='Password'
                    value={pass}
                    style={styles.box}
                    onChangeText={text => setPass(text)}
                    secureTextEntry
                />
            </View>
            {/* buttons */}
            <View style={styles.btnContain}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                    style={[styles.btn, styles.btnReg]}
                >
                    <Text style={styles.btnRegText}>Register</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '80%'
    },
    box: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5,
        borderRadius: 10
    },
    btnContain: {
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 45

    },
    btn: {
        width: '100 %',
        backgroundColor: '#4523',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
    },
    btnRegText: {
        color: 'blue',
        fontSize: 15,
        fontWeight: '700',
    },
    btnReg: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782f9',
        borderWidth: 2,
    }

});
