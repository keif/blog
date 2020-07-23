import React, { useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Context } from "../context/BlogContext"

const ShowScreen = (props) => {
    const { state } = useContext(Context)
    const { navigation } = props
    const blogPost = state.find((post) => post.id === navigation.getParam(`id`))

    console.log(blogPost)
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ShowScreen