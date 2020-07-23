import { Feather } from "@expo/vector-icons"
import React, { useContext } from "react"
import { Button, FlatList, StyleSheet, Text, View } from "react-native"
import { Context } from "../context/BlogContext"

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context)

    return (
        <View>
            <Button
                onPress={addBlogPost}
                title={`Add Blog Post`}
            />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Feather name="trash"/>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        borderTopWidth: 1,
        borderColor: `gray`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    }
})

export default IndexScreen