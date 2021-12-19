import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import initialize from "../firebase.init";

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigation = useNavigation()

    initialize()
    const auth = getAuth();
    //navigate on user state change
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace('Home')
            }
        })
        return unsub;
    }, [])

    // signup-function
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    // login
    const login = () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.email);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });


    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.inputBox}>
                <Text style={styles.header}>Register/Login here</Text>
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
                    onPress={login}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={signUp}
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
    header: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 35,
        marginBottom: 20

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
