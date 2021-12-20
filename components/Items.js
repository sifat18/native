import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

export default function Items() {
    const [books, setBooks] = useState([])
    const navigation = useNavigation()
    useEffect(() => {
        fetch('https://nameless-hamlet-20681.herokuapp.com/books').then(res => res.json()).then(data => setBooks(data))
    }, [])

    return (
        <>
            {/* creating scroll */}
            <ScrollView>
                {/* looping over the data */}
                <View style={styles.container}>
                    {books.map(book =>
                        <Card key={book._id}>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Divider />
                            <Card.Image
                                style={{ padding: 0 }}
                                source={{
                                    uri: book.coverImageUrl,
                                }}
                            />
                            <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 20 }}> Author:
                                <Text style={{ paddingLeft: 10 }}> {book.author}           </Text>              </Text>
                            <Text style={{ margin: 10 }}>
                                {book.synopsis.slice(0, 150)}
                            </Text>
                            <Button


                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Details"
                                onPress={() => {
                                    /* 1. Navigate to the Details route with params */
                                    navigation.navigate('Details', { book })
                                }}
                            />
                        </Card>
                    )}
                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});