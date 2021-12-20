import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { View, Text } from 'react-native'
import Box from './Box'

export default function Upcoming() {
    const [newBooks, setNewBooks] = useState([])
    useEffect(() => {
        fetch('https://nameless-hamlet-20681.herokuapp.com/newBooks').then(res => res.json()).then(data => setNewBooks(data))
    }, [])

    return (
        <View>
            <FlatList
                horizontal
                data={newBooks}
                contentContainerStyle={{ paddingVertical: 20, paddingLeft: 20 }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => <Box key={item._id} newBook={item} index={index} />}
            ></FlatList>
        </View>
    )
}
