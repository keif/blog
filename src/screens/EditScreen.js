import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import BlogPostForm from "../components/BlogPostForm"
import { Context } from "../context/BlogContext"

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context)

    const blogPost = state.find((post) => post.id === navigation.getParam(`id`))

    return (
        <BlogPostForm/>
    )
}


const styles = StyleSheet.create({})

export default EditScreen