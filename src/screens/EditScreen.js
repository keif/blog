import React, { useContext, useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { Context } from "../context/BlogContext"

const EditScreen = (props) => {
    const { navigation } = props
    const { state } = useContext(Context)

    const blogPost = state.find((post) => post.id === navigation.getParam(`id`))

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)
    const { addBlogPost } = useContext(Context)

    return (
        <View style={styles.container}>
            <Text
                style={styles.label}
            >Edit Title:</Text>
            <TextInput
                onChangeText={setTitle}
                style={styles.input}
                value={title}
            />
            <Text
                style={styles.label}
            >Edit Content:</Text>
            <TextInput
                onChangeText={setContent}
                style={styles.input}
                value={content}
            />
            <Button
                onPress={() => addBlogPost(title, content, () => {
                    navigation.navigate(`Index`)
                })}
                title={`Save Blog Post`}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderColor: `#000`,
        borderWidth: 1,
        fontSize: 18,
        margin: 5,
        marginBottom: 15,
        padding: 5,
    },
    label: {
        fontSize: 20,
        marginLeft: 5,
        marginBottom: 5,
    },
})

export default EditScreen