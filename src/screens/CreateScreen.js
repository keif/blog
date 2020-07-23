import React, { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const CreateScreen = () => {
    const [title, setTitle] = useState(``)
    const [content, setContent] = useState(``)

    return (
        <View style={styles.container}>
            <Text
                style={styles.label}
            >Enter Title:</Text>
            <TextInput
                onChangeText={setTitle}
                style={styles.input}
            />
            <Text
                style={styles.label}
            >Enter Content:</Text>
            <TextInput
                onChangeText={setContent}
                style={styles.input}
            />
            <Button
                onPress={() => console.log('add')}
                title={`Add Blog Post`}
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

export default CreateScreen