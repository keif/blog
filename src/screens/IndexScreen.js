import React, { useContext } from "react"
import { Button, FlatList, StyleSheet, Text, View } from "react-native"
import { Context } from "../context/BlogContext"

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context)

    return (
        <View>
            <Text>Index Screen</Text>
            <Button
                onPress={addBlogPost}
                title={`Add Blog Post`}
            />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen