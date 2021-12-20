import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { View, Text } from 'react-native'

export default function Upcoming() {
    const [newBooks, setNewBooks] = useState([])
    const navigation = useNavigation()
    useEffect(() => {
        fetch('https://nameless-hamlet-20681.herokuapp.com/newBooks').then(res => res.json()).then(data => setNewBooks(data))
    }, [])

    return (
        <View>
            <FlatList
                data={newBooks}
                contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
                showsHorizontalScrollIndicator={false}
                renderItem={(item, index) => <Box newBook={item} index={index} />}
            ></FlatList>
        </View>
    )
}
