import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

export default function Items() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://nameless-hamlet-20681.herokuapp.com/books').then(res => res.json()).then(data => setBooks(data))
    }, [])

    return (
        <>
            <ScrollView>
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
                            <Text style={{ margin: 10 }}>
                                The idea with React Native Elements is more about component
                                structure than actual design.
                            </Text>
                            <Button
                                icon={
                                    <Icon
                                        name="code"
                                        color="#ffffff"
                                        iconStyle={{ marginRight: 10 }}
                                    />
                                }
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="VIEW NOW"
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